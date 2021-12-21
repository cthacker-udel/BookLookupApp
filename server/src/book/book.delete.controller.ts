import { BookService } from './book.service';
import { Controller, Delete, Param } from "@nestjs/common";
import { DeleteResult } from 'typeorm';




@Controller('book')
export class BookDeleteController {

    constructor(private readonly bookService: BookService){}

    @Delete('author/:id')
    async deleteBookFromAuthor(@Param('id') id: string): Promise<DeleteResult> {
        return await this.bookService.deleteBookByAuthor(id);
    };


}