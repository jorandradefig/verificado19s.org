import { Module } from '@nestjs/common';
import { FormsController } from './controllers/forms/forms.controller';

@Module({
  modules: [],
  controllers: [
    FormsController
  ],
})
export class ApplicationModule {}
