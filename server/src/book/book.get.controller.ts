import { BookEntity } from './entities/book.entity';
import { BookService } from './book.service';
import { Controller, Get, Param } from "@nestjs/common";

@Controller('book')
export class BookGetController {

    constructor(private readonly bookService: BookService){}

    @Get('all')
    getAllBooks(): Promise<BookEntity[]> {
        console.log("getting all books");
        return this.bookService.getBooks();
    };

    @Get("/author/:id")
    getSpecificBookAuthor(@Param('id') id: string): Promise<BookEntity[]> {
        return this.bookService.getBookFilter("author", id);
    };

    @Get("/title/:id")
    getSpecificBookTitle(@Param("id") id: string): Promise<BookEntity[]> {
        return this.bookService.getBookFilter("title", id);
    };

    @Get("/publishdate/:id")
    getSpecificBookPublishDate(@Param("id") id: string): Promise<BookEntity[]> {
        return this.bookService.getBookFilter("publishdate", id);
    };

    @Get("/isbn/:id")
    getSpecificBookISBN(@Param("id") id: string): Promise<BookEntity[]> {
        return this.bookService.getBookFilter("isbn", id);
    };

    @Get("/subject/:id")
    getSpecificBookSubject(@Param("id") id: string): Promise<BookEntity[]> {
        return this.bookService.getBookFilter("subject", id);
    };

    @Get("/publisher/:id")
    getSpecificBookPublisher(@Param("id") id: string): Promise<BookEntity[]> {
        return this.bookService.getBookFilter("publisher", id);
    };

};
