import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { GroupTypeMenuService } from './group_type_menu.service';
import { CreateGroupTypeMenuDto } from './dto/create-group_type_menu.dto';
import { UpdateGroupTypeMenuDto } from './dto/update-group_type_menu.dto';
import { AdminGuard } from '../guards/admin.guard';
import { UserGuard } from '../guards/user.guard';

@Controller('group-type-menu')
export class GroupTypeMenuController {
  constructor(private readonly groupTypeMenuService: GroupTypeMenuService) {}

  // @UseGuards(UserGuard)
  @Post()
  create(@Body() createGroupTypeMenuDto: CreateGroupTypeMenuDto) {
    return this.groupTypeMenuService.create(createGroupTypeMenuDto);
  }

  // @UseGuards(UserGuard)
  @Get()
  findAll() {
    return this.groupTypeMenuService.findAll();
  }

  // @UseGuards(UserGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.groupTypeMenuService.findOne(+id);
  }

  // @UseGuards(AdminGuard)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateGroupTypeMenuDto: UpdateGroupTypeMenuDto,
  ) {
    return this.groupTypeMenuService.update(+id, updateGroupTypeMenuDto);
  }

  // @UseGuards(AdminGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.groupTypeMenuService.remove(+id);
  }
}
