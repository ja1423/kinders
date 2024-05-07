import { BadRequestException, CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Observable } from "rxjs";

@Injectable()
export class UserGuard implements CanActivate{
    constructor(private readonly jwtsService:JwtService){}
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const req =context.switchToHttp().getRequest()
        const authHeader=req.headers.authorization
        if(!authHeader){
            throw new UnauthorizedException('Unauthorized')
        }


        const bearer=authHeader.split(' ')[0]
        const token=authHeader.split(' ')[1]
        if(bearer!=='Bearer'||!token)
        {
            throw new UnauthorizedException('Unauthorized')
        }

        async function verify(token:string,jwtService:JwtService){
            let user:any;
            try{
            user=await jwtService.verify(token,{
                secret:process.env.ACCESS_TOKEN_KEY,

            });
        }catch(error){if(!user){
                throw new BadRequestException(error.message)
            }}

            if(!user.is_active){
                throw new BadRequestException('User is not active')
            }

            req.user=user;
            return true;
        };

        return verify(token,this.jwtsService)
    }
}