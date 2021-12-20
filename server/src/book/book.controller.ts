import { BookEntity } from './entities/book.entity';
import { BookService } from './book.service';
import { Controller, Get, Param } from "@nestjs/common";



@Controller('book')
export class BookController {

    constructor(private readonly bookService: BookService){}

    @Get('all')
    getAllBooks(): Promise<BookEntity[]> {
        console.log("getting all books");
        return this.bookService.getBooks();
    };

    @Get("/author/:id")
    getSpecificBookAuthor(@Param('id') id: string) {
        return this.bookService.getBookFilter("author", id);
    };

    @Get("/title/:id")
    getSpecificBookTitle(@Param("id") id: string) {
        return this.bookService.getBookFilter("title", id);
    };

};
