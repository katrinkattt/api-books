import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService, Book } from './app.service';

@Controller()
export class AppController {
  // eslint-disable-next-line prettier/prettier
  constructor(private readonly appService: AppService) { }

  @Get()
  getData(): Book[] {
    return this.appService.getData();
  }
  @Post()
  createBook(
    @Body()
    {
      title,
      description,
      file,
    }: {
      title: string;
      description: string;
      file?: string;
    },
  ) {
    return this.appService.addBook(title, description, file);
  }
  @Post('editBook')
  editorBook(
    @Body()
    {
      id,
      title,
      description,
    }: {
      id: string;
      title: string;
      description: string;
    },
  ) {
    return this.appService.editBook(id, title, description);
  }
  @Post('delteBook')
  delteBook(@Body() { id }: { id: string }) {
    return this.appService.delBook(id);
  }
}
