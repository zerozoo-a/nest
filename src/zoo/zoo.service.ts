import { Injectable } from '@nestjs/common';

@Injectable()
export class ZooService {
  getZoo(): string {
    return 'Hello~~~~~~~Zoo!';
  }
}
