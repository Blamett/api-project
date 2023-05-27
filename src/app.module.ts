import { AuthModule } from './routes/auth/auth.module';
import { UserController } from './routes/user/user.controller';
import { UserModule } from './routes/user/user.module';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

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
export class AppModule {}

