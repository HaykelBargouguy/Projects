import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import User from '../users/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SignUpDto } from './dto/signup.dto';
import * as bcrypt from "bcrypt";
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';


export class AuthService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async signUp(signUpDto: SignUpDto): Promise<{ token: string }> {
    const { username, email, password ,role} = signUpDto;

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    signUpDto.password=hashedPassword
    const user = await this.usersRepository.create(
    signUpDto
      );
try{
    await this.usersRepository.save(user);

}
catch(e){
  throw new ConflictException('Le nom d\'utilisateur et l\'email doit être unique');

}
    const token = this.jwtService.sign({ id: user.id,role:user.role });
    return { token };
  }

  async login(loginDto: LoginDto): Promise<{ token: string }> {
    const { email, password } = loginDto;

    const user = await this.usersRepository.findOne({
      where: { email },
    });

    if (!user) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const isPasswordMatched = await bcrypt.compare(password, user.password);

    if (!isPasswordMatched) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const token =this.jwtService.sign({ id: user.id ,role:user.role});

    return { token };
  }
}
