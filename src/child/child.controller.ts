import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ChildService } from './child.service';
import { CreateChildDto } from './dto/create-child.dto';
import { UpdateChildDto } from './dto/update-child.dto';
import { UserGuard } from '../guards/user.guard';
import { AdminGuard } from '../guards/admin.guard';

@Controller('child')
export class ChildController {
  constructor(private readonly childService: ChildService) {}

  // @UseGuards(UserGuard)
  @Post()
  create(@Body() createChildDto: CreateChildDto) {
    return this.childService.create(createChildDto);
  }

  // @UseGuards(UserGuard)
  @Get()
  findAll() {
    return this.childService.findAll();
  }

  // @UseGuards(UserGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.childService.findOne(+id);
  }

  // @UseGuards(AdminGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateChildDto: UpdateChildDto) {
    return this.childService.update(+id, updateChildDto);
  }

  // @UseGuards(AdminGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.childService.remove(+id);
  }
}
