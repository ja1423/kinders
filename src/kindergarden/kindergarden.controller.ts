import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { KindergardenService } from './kindergarden.service';
import { CreateKindergardenDto } from './dto/create-kindergarden.dto';
import { UpdateKindergardenDto } from './dto/update-kindergarden.dto';
import { UserGuard } from '../guards/user.guard';
import { AdminGuard } from '../guards/admin.guard';

@Controller('kindergarden')
export class KindergardenController {
  constructor(private readonly kindergardenService: KindergardenService) {}

  // @UseGuards(UserGuard)
  @Post()
  create(@Body() createKindergardenDto: CreateKindergardenDto) {
    return this.kindergardenService.create(createKindergardenDto);
  }

  // @UseGuards(UserGuard)
  @Get()
  findAll() {
    return this.kindergardenService.findAll();
  }

  // @UseGuards(UserGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.kindergardenService.findOne(+id);
  }

  // @UseGuards(AdminGuard)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateKindergardenDto: UpdateKindergardenDto,
  ) {
    return this.kindergardenService.update(+id, updateKindergardenDto);
  }

  // @UseGuards(AdminGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.kindergardenService.remove(+id);
  }
}
