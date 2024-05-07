import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AdminModule } from './admin/admin.module';
import { Admin } from './admin/entities/admin.entity';
import { KindergardenModule } from './kindergarden/kindergarden.module';
import { DirectorModule } from './director/director.module';
import { ChildModule } from './child/child.module';
import { ParentModule } from './parent/parent.module';
import { PaymentModule } from './payment/payment.module';
import { StatusModule } from './status/status.module';
import { PaymentMethodModule } from './payment_method/payment_method.module';
import { Child } from './child/entities/child.entity';
import { Status } from './status/entities/status.entity';
import { Parent } from './parent/entities/parent.entity';
import { Payment } from './payment/entities/payment.entity';
import { PaymentMethod } from './payment_method/entities/payment_method.entity';
import { Director } from './director/entities/director.entity';
import { Kindergarden } from './kindergarden/entities/kindergarden.entity';
import { GroupModule } from './group/group.module';
import { GroupTypeModule } from './group_type/group_type.module';
import { ServicesModule } from './services/services.module';
import { ServiceModule } from './service/service.module';
import { MenuModule } from './menu/menu.module';
import { GroupTypeMenuModule } from './group_type_menu/group_type_menu.module';
import { EducatorModule } from './educator/educator.module';
import { Group } from './group/entities/group.entity';
import { GroupType } from './group_type/entities/group_type.entity';
import { Services } from './services/entities/service.entity';
import { Service } from './service/entities/service.entity';
import { Menu } from './menu/entities/menu.entity';
import { GroupTypeMenu } from './group_type_menu/entities/group_type_menu.entity';
import { Educator } from './educator/entities/educator.entity';




@Module({
  imports: [
ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
   TypeOrmModule.forRoot({
  type:"postgres",
   port: Number(process.env.PG_PORT),
  username: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DB,
  host: process.env.PG_HOST,
  synchronize: true,
  entities:[Admin,Child,Status,Parent,Payment,PaymentMethod,Director,Kindergarden,Group,GroupType,Services,Service,Menu,GroupTypeMenu,Educator]
}),
   AdminModule,
   KindergardenModule,
   DirectorModule,
   ChildModule,
   ParentModule,
   PaymentModule,
   StatusModule,
   PaymentMethodModule,
   GroupModule,
   GroupTypeModule,
   ServicesModule,
   ServiceModule,
   MenuModule,
   GroupTypeMenuModule,
   EducatorModule,
],

  controllers: [],
  providers: [],
})
export class AppModule {}
