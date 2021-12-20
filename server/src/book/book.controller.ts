import { BookEntity } from './entities/book.entity';
import { BookService } from './book.service';
import { Controller, Get } from "@nestjs/common";



@Controller('book')
export class BookController {

    constructor(private readonly bookService: BookService){}

    @Get('all')
    getAllBooks(): Promise<BookEntity[]> {
        console.log("getting all books");
        return this.bookService.getBooks();
    };

};
