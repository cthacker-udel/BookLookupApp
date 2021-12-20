import { BookService } from './book.service';
import { Controller, Get } from "@nestjs/common";



@Controller('book')
export class BookController {

    constructor(private readonly bookService: BookService){}

    @Get('all')
    getAllBooks() {
        return this.bookService;
    };

};
