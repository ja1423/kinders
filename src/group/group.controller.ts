import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { GroupService } from './group.service';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { AdminGuard } from '../guards/admin.guard';
import { UserGuard } from '../guards/user.guard';

@Controller('group')
export class GroupController {
  constructor(private readonly groupService: GroupService) {}

  // @UseGuards(UserGuard)
  @Post()
  create(@Body() createGroupDto: CreateGroupDto) {
    return this.groupService.create(createGroupDto);
  }

  // @UseGuards(UserGuard)
  @Get()
  findAll() {
    return this.groupService.findAll();
  }

  // @UseGuards(UserGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.groupService.findOne(+id);
  }

  // @UseGuards(AdminGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGroupDto: UpdateGroupDto) {
    return this.groupService.update(+id, updateGroupDto);
  }

  // @UseGuards(AdminGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.groupService.remove(+id);
  }
}
