import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ParentService } from './parent.service';
import { CreateParentDto } from './dto/create-parent.dto';
import { UpdateParentDto } from './dto/update-parent.dto';
import { UserGuard } from '../guards/user.guard';
import { AdminGuard } from '../guards/admin.guard';

@Controller('parent')
export class ParentController {
  constructor(private readonly parentService: ParentService) {}

  // @UseGuards(UserGuard)
  @Post()
  create(@Body() createParentDto: CreateParentDto) {
    return this.parentService.create(createParentDto);
  }

  // @UseGuards(UserGuard)
  @Get()
  findAll() {
    return this.parentService.findAll();
  }

  // @UseGuards(UserGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.parentService.findOne(+id);
  }

  // @UseGuards(AdminGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateParentDto: UpdateParentDto) {
    return this.parentService.update(+id, updateParentDto);
  }

  // @UseGuards(AdminGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.parentService.remove(+id);
  }
}
