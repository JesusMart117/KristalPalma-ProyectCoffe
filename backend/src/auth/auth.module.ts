import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { MiembrosService } from 'src/miembros/miembros.service';
import { JwtStrategy } from './jwt/jwt.strategy';
import { JwtAuthGuard } from './jwt/jwt-auth.guard';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: 'claveSecreta',
      signOptions:{expiresIn: '1h'},
    }),
    
  ],
  providers: [AuthService, JwtStrategy, MiembrosService],
  controllers: [AuthController]
})
export class AuthModule {}
