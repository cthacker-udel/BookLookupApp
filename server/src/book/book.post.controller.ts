import { BookEntity } from 'src/book/entities/book.entity';
import { Body, Controller, Post } from "@nestjs/common";
import { BookService } from "./book.service";
import BookDto from './dto/BookDto';
import { create } from 'domain';


@Controller("book")
export class BookPostController {

    constructor(private readonly bookService: BookService){}

    @Post("/add")
    createBook(@Body() createdBook: BookDto) {
        this.bookService.createBook(
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
    createBooks(@Body() createdBooks: BookDto[]) {
        this.bookService.createBooks(createdBooks as BookEntity[]);
    };

}