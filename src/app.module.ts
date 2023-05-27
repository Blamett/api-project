import { AuthModule } from './routes/auth/auth.module';
import { UserModule } from './routes/user/user.module';
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
