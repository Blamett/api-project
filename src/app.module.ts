import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    AuthModule,
    UserModule
  ],
  controllers: [
    
  ],
  providers: [
    
  ],
})
export class AppModule { }
