import { Request } from 'express';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ReqsService {
  getReqs(): string {
    return 'HI';
  }

  getDocs(page: string): string {
    console.log('>>>>>>>>>>>>>>');
    return `docs/${page}`;
  }

  getDeep(foo: string | number): string {
    return `foo: ${foo}`;
  }
}
