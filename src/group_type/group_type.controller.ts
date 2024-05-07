import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { GroupTypeService } from './group_type.service';
import { CreateGroupTypeDto } from './dto/create-group_type.dto';
import { UpdateGroupTypeDto } from './dto/update-group_type.dto';
import { AdminGuard } from '../guards/admin.guard';
import { UserGuard } from '../guards/user.guard';

@Controller('group-type')
export class GroupTypeController {
  constructor(private readonly groupTypeService: GroupTypeService) {}

  // @UseGuards(UserGuard)
  @Post()
  create(@Body() createGroupTypeDto: CreateGroupTypeDto) {
    return this.groupTypeService.create(createGroupTypeDto);
  }

  // @UseGuards(UserGuard)
  @Get()
  findAll() {
    return this.groupTypeService.findAll();
  }

  // @UseGuards(UserGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.groupTypeService.findOne(+id);
  }

  // @UseGuards(AdminGuard)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateGroupTypeDto: UpdateGroupTypeDto,
  ) {
    return this.groupTypeService.update(+id, updateGroupTypeDto);
  }

  // @UseGuards(AdminGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.groupTypeService.remove(+id);
  }
}
