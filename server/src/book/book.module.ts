import { BookController } from './book.controller';
import { Module } from "@nestjs/common";
import { BookService } from "./book.service";


@Module({
    providers: [BookService],
    controllers: [BookController],
    imports: [],
    exports: [BookService]
})
export class BookModule {};
