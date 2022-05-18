import { Controller, Get, Param, Req } from '@nestjs/common';
import { Request } from 'express';
import { ReqsService } from './reqs.service';

@Controller('reqs')
export class ReqsController {
  constructor(private readonly reqsService: ReqsService) {}

  @Get()
  getReqs(@Req() req: Request): string {
    console.log('req', req);
    return this.reqsService.getReqs();
  }

  @Get(':docs')
  getDocs(@Param('docs') docs: string) {
    console.log('docs', docs);
    return this.reqsService.getDocs(docs);
  }

  @Get('deep/haha/:foo')
  getDeep(@Param('foo') deep: string | number) {
    console.log('foo', deep);
    return this.reqsService.getDeep(deep);
  }
}
