import { BookEntity } from './entities/book.entity';
import { Injectable } from "@nestjs/common";
import { getMongoManager, MongoEntityManager } from "typeorm";


@Injectable()
export class BookService {

    private mongoManager: MongoEntityManager;

    async getBooks() {
        this.mongoManager = getMongoManager("mongo");
        try{ 
            return await this.mongoManager.find(BookEntity);
        } catch (error) {
            throw new Error("No books in database");
        }
    }


}