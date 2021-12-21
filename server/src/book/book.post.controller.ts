import { BookEntity } from 'src/book/entities/book.entity';
import { Body, Controller, Post } from "@nestjs/common";
import { BookService } from "./book.service";
import BookDto from './dto/BookDto';


@Controller("book")
export class BookPostController {

    constructor(private readonly bookService: BookService){}

    @Post("/add")
    async createBook(@Body() createdBook: BookDto): Promise<BookEntity> {
        return await this.bookService.createBook(
            new BookEntity(
                createdBook.author,
                createdBook.title,
                createdBook.publishdate,
                createdBook.isbn,
                createdBook.subject,
                createdBook.publisher
            )
        );
    };

    @Post("/bulkadd")
    async createBooks(@Body() createdBooks: BookDto[]): Promise<BookEntity[]> {
        return await this.bookService.createBooks(createdBooks as BookEntity[]);
    };

}