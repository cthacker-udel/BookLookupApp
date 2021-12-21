import { BookService } from './book.service';
import { Controller, Delete, Param } from "@nestjs/common";




@Controller('book')
export class BookDeleteController {

    constructor(private readonly bookService: BookService){}

    @Delete('author/:id')
    async deleteBookFromAuthor(@Param('id') id: string) {
        return this.bookService.
    };


}