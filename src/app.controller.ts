import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }
  @Get()
  getData() {
    return this.appService.getData();
  }
  @Post()
  createBook(@Body() { title, description, file }: { title: string, description: string, file?: string }) {
    return this.appService.addBook(title, description, file);
  }
  @Post('editBook')
  editBook(@Body() { id, title, description }: { id: string, title: string, description: string }) {
    return this.appService.editBook(id, title, description);
  }
  @Post('delteBook')
  delteBook(@Body() { id }: { id: string }) {
    return this.appService.delBook(id);
  }
}
