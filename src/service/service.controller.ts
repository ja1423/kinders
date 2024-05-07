import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ServiceService } from './service.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { AdminGuard } from '../guards/admin.guard';
import { UserGuard } from '../guards/user.guard';

@Controller('service')
export class ServiceController {
  constructor(private readonly serviceService: ServiceService) {}
  // @UseGuards(UserGuard)
  @Post()
  create(@Body() createServiceDto: CreateServiceDto) {
    return this.serviceService.create(createServiceDto);
  }

  // @UseGuards(UserGuard)
  @Get()
  findAll() {
    return this.serviceService.findAll();
  }

  // @UseGuards(UserGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.serviceService.findOne(+id);
  }

  // @UseGuards(AdminGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateServiceDto: UpdateServiceDto) {
    return this.serviceService.update(+id, updateServiceDto);
  }

  // @UseGuards(AdminGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.serviceService.remove(+id);
  }
}
