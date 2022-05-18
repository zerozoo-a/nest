import { Module } from '@nestjs/common';
import { ReqsController } from './reqs.controller';
import { ReqsService } from './reqs.service';

@Module({
  controllers: [ReqsController],
  providers: [ReqsService],
  imports: [],
})
export class ReqsModule {}
