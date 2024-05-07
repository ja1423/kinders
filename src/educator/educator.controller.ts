import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { EducatorService } from './educator.service';
import { CreateEducatorDto } from './dto/create-educator.dto';
import { UpdateEducatorDto } from './dto/update-educator.dto';
import { UserGuard } from '../guards/user.guard';
import { AdminGuard } from '../guards/admin.guard';

@Controller('educator')
export class EducatorController {
  constructor(private readonly educatorService: EducatorService) {}

  // @UseGuards(UserGuard)
  @Post()
  create(@Body() createEducatorDto: CreateEducatorDto) {
    return this.educatorService.create(createEducatorDto);
  }

  // @UseGuards(UserGuard)
  @Get()
  findAll() {
    return this.educatorService.findAll();
  }

  // @UseGuards(UserGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.educatorService.findOne(+id);
  }

  // @UseGuards(AdminGuard)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEducatorDto: UpdateEducatorDto,
  ) {
    return this.educatorService.update(+id, updateEducatorDto);
  }

  // @UseGuards(AdminGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.educatorService.remove(+id);
  }
}
