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

    async getBookFilter(lookupType: string, lookup: string) {
        this.mongoManager = getMongoManager("mongo");
        try{
            switch(lookupType) {
                case "author": {
                    return await this.mongoManager.find(BookEntity, {
                        author: lookup
                    })
                }
                default: {
                    throw new Error(`ERROR 404: Lookup operation invalid`);
                }
            }
        } catch (error) {
            throw new Error(`Lookup type : [${lookupType}] failed with query [${lookup}]`);
        }

    }

}