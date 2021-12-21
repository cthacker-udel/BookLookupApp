import { BookPutController } from './book.put.controller';
import { BookPostController } from './book.post.controller';
import { BookGetController } from './book.get.controller';
import { Module } from "@nestjs/common";
import { BookService } from "./book.service";

@Module({
    providers: [BookService],
    controllers: [BookGetController, BookPostController, BookPutController],
    imports: [],
    exports: [BookService]
})
export class BookModule {};
