import { Injectable } from '@nestjs/common';

export interface Book {
  id: string;
  title: string;
  description: string;
  file?: string;
}

@Injectable()
export class AppService {
  private books: Book[] = [];

  getData(): Book[] {
    return this.books;
  }
  addBook(title: string, description: string, file: string): void {
    this.books.push({
      id: Date.now().toString(36) + Math.random().toString(36),
      title,
      description,
      file,
    });
  }
  editBook(id: string, title: string, description: string): void {
    this.books = this.books.map((book) => ({
      ...book,
      title: book.id === id ? title : book.title,
      description: book.id === id ? description : book.description,
    }));
  }
  delBook(id: string): void {
    this.books.forEach((el, index) => {
      if (el.id === id) {
        this.books.splice(index, 1);
      }
    });
  }
}
