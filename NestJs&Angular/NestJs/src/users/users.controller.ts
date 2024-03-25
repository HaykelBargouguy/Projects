import {Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, ParseIntPipe, Res, UseGuards, Req} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthGuard } from '../Gaurds/jwt-auth.guard';
import { User } from '../decorators/user.decorator';
import { AccessConctrolGuard } from '../Gaurds/roles.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(AccessConctrolGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    this.usersService.deleteUser(id);
    return { message: 'User deleted successfully' };
  }
  @UseGuards(AccessConctrolGuard)
  @Delete('/soft/:id')
  removesoft(@Param('id') id: string) {
    this.usersService.deleteUserv2(id);
    return { message: 'Soft user deleted successfully' };
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @UseGuards(AuthGuard)
  @Get('getuser')
   getUserById(@User() user) {
    return this.usersService.getUserById(user.id);
  }

  @Get(':id/totalscore')
  getTotalScore(@Param('id', ParseIntPipe) id: number) {
    return  this.usersService.getTotalScore(id);
    
  }

  @UseGuards(AuthGuard)
  @Post('reset')
  update(@Body() updateUserDto: UpdateUserDto, @User() user) {
    this.usersService.updateUser(user.id, updateUserDto);
    return { message: 'User updated successfully' };
  }

} 