import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ZooController } from './zoo/zoo.controller';
import { ZooService } from './zoo/zoo.service';
import { ReqsModule } from './reqs/reqs.module';
import { UsersModule } from './users/users.module';

@Module({
  controllers: [AppController, ZooController],
  providers: [AppService, ZooService],
  imports: [ReqsModule, UsersModule],
})
export class AppModule {}
