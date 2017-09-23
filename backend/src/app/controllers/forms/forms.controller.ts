import { Controller, Get, Post, Req } from '@nestjs/common';
import { Observable } from 'rxjs/Observable';

@Controller('forms')
export class FormsController {
    constructor() {}

    @Get()
    findAll(): Observable<any[]> {
      return Observable.of([]);
    }

    @Post()
    async create(@Body() createCatDto: CreateCatDto) {
      // TODO: Add some logic here
    }
}
