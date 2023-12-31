import {
  Body,
  Controller,
  Get,
  Param,
  ParseBoolPipe,
  ParseIntPipe,
  Post,
  Query,
  Req,
  Res,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { UsersService } from 'src/users/servises/users/users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}
  @Get()
  getUsers() {
    return { username: 'tomer' };
  }
  @Get('with_service')
  getUsersService() {
    return this.userService.fetchUsers();
  }
  @Get('tomer')
  getTomers() {
    return { username: 'tomer', surname: 'becker' };
  }
  @Get('with_query')
  getWithQuery(
    @Query('sortBy') sortBy: string,
    @Query('isUser', ParseBoolPipe) isUser: boolean,
  ) {
    return { sortBy, isUser };
  }
  @Post()
  createUser(@Req() req: Request, @Res() res: Response) {
    console.log(req.body);
    res.send('created');
  }
  @Post('alt')
  @UsePipes(new ValidationPipe())
  createAlt(@Body() userData: CreateUserDto) {
    console.log(userData);
    return {};
  }
  @Post(':id/:postId')
  createAltWithId(
    @Param('id') id: string,
    @Param('postId', ParseIntPipe) postId: number,
  ) {
    console.log(id);
    console.log('postId', postId);

    return { id, postId };
  }
}
