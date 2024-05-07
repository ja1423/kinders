import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ServicesService } from './services.service';
import { CreateServicesDto } from './dto/create-service.dto';
import { UpdateServicesDto } from './dto/update-service.dto';
import { AdminGuard } from '../guards/admin.guard';
import { UserGuard } from '../guards/user.guard';

@Controller('services')
export class ServicesController {
  constructor(private readonly servicesService: ServicesService) {}
  // @UseGuards(UserGuard)
  @Post()
  create(@Body() createServiceDto: CreateServicesDto) {
    return this.servicesService.create(createServiceDto);
  }
  // @UseGuards(UserGuard)
  @Get()
  findAll() {
    return this.servicesService.findAll();
  }
  // @UseGuards(UserGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.servicesService.findOne(+id);
  }
  // @UseGuards(AdminGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateServiceDto: UpdateServicesDto) {
    return this.servicesService.update(+id, updateServiceDto);
  }
  // @UseGuards(AdminGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.servicesService.remove(+id);
  }
}
