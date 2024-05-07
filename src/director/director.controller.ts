import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { DirectorService } from './director.service';
import { CreateDirectorDto } from './dto/create-director.dto';
import { UpdateDirectorDto } from './dto/update-director.dto';
import { AdminGuard } from '../guards/admin.guard';
import { UserGuard } from '../guards/user.guard';

@Controller('director')
export class DirectorController {
  constructor(private readonly directorService: DirectorService) {}

  // @UseGuards(UserGuard)
  @Post()
  create(@Body() createDirectorDto: CreateDirectorDto) {
    return this.directorService.create(createDirectorDto);
  }

  // @UseGuards(UserGuard)
  @Get()
  findAll() {
    return this.directorService.findAll();
  }

  // @UseGuards(UserGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.directorService.findOne(+id);
  }

  // @UseGuards(AdminGuard)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDirectorDto: UpdateDirectorDto,
  ) {
    return this.directorService.update(+id, updateDirectorDto);
  }

  // @UseGuards(AdminGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.directorService.remove(+id);
  }
}
