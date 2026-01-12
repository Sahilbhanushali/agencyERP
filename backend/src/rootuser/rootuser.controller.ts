import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RootuserService } from './rootuser.service';
import { CreateRootuserDto } from './dto/create-rootuser.dto';
import { UpdateRootuserDto } from './dto/update-rootuser.dto';
import { LoginRootuserDto } from './dto/login-rootuser.dto';

@Controller({
  path: "root-user",
  version: "1"
})

export class RootuserController {
  constructor(private readonly rootuserService: RootuserService) { }


  @Post('create')
  create(@Body() createRootuserDto: CreateRootuserDto) {
    console.log('Controller received DTO:', createRootuserDto);
    return this.rootuserService.create(createRootuserDto);
  }
  @Post('login')
  login(@Body() loginRootuserDto: LoginRootuserDto) {
    return this.rootuserService.login(loginRootuserDto);
  }

  @Get()
  findAll() {
    return this.rootuserService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rootuserService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRootuserDto: UpdateRootuserDto) {
    return this.rootuserService.update(id, updateRootuserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rootuserService.remove(id);
  }
}
