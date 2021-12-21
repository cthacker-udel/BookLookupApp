import { BookEntity } from './entities/book.entity';
import { BookService } from './book.service';
import { Body, Controller, Param, Put } from "@nestjs/common";
import BookDto from './dto/BookDto';


@Controller('book')
export class BookPutController {

    constructor(private readonly bookService: BookService){}

    @Put('author/:id')
    async updateBookFromAuthor(@Param('id') id: string, @Body() bookDto: BookDto) {
        return await this.bookService.updateBookByAuthor(id, bookDto as BookEntity);
    };


    @Put('title/:id')
    async updateBookFromTitle(@Param('id') id: string, @Body() bookDto: BookDto) {
        return await this.bookService.updateBookByTitle(id, bookDto as BookEntity);
    };

    @Put("isbn/:id")
    async updateBookFromISBN(@Param('id') id: string, @Body() bookDto: BookDto) {
        return await this.bookService.updateBookByISBN(id, bookDto as BookEntity);
    };

};
