import { BookDto } from './dto/BookDto';
import { BookEntity } from './entities/book.entity';
import { Injectable } from "@nestjs/common";
import { DeleteResult, getMongoManager, MongoEntityManager, UpdateResult } from "typeorm";


@Injectable()
export class BookService {

    private mongoManager: MongoEntityManager;

    /*

    GET REQUESTS

    */

    async getBooks() {
        this.mongoManager = getMongoManager("mongo");
        try{ 
            return await this.mongoManager.find(BookEntity);
        } catch (error) {
            throw new Error("No books in database");
        }
    };

    async getBookFilter(lookupType: string, lookup: string) {
        this.mongoManager = getMongoManager("mongo");
        try{
            switch(lookupType) {
                case "author": {
                    return await this.mongoManager.find(BookEntity, {
                        author: lookup
                    });
                }
                case "title": {
                    return await this.mongoManager.find(BookEntity, {
                        title: lookup
                    });
                }
                case "publishdate": {
                    return await this.mongoManager.find(BookEntity, {
                        publishdate: lookup
                    });
                }
                case "isbn": {
                    return await this.mongoManager.find(BookEntity, {
                        isbn: parseInt(lookup, 10)
                    });
                }
                case "subject": {
                    return await this.mongoManager.find(BookEntity, {
                        subject: lookup
                    });
                }
                case "publisher": {
                    return await this.mongoManager.find(BookEntity, {
                        publisher: lookup
                    });
                }
                default: {
                    throw new Error(`ERROR 404: Lookup operation invalid`);
                }
            }
        } catch (error) {
            throw new Error(`Lookup type : [${lookupType}] failed with query [${lookup}]`);
        }

    };

    /*

    POST REQUESTS

    */

    async createBook(book: BookEntity) {
        this.mongoManager = getMongoManager("mongo");
        return await this.mongoManager.save(BookEntity, book);
    };

    async createBooks(books: BookEntity[]) {
        this.mongoManager = getMongoManager("mongo");
        return await this.mongoManager.save(BookEntity, books);
    };

    /*

    PUT REQUESTS

    */

    async updateBookByAuthor(author: string, book: BookEntity): Promise<UpdateResult> {
        this.mongoManager = getMongoManager("mongo");
        return await this.mongoManager.update(BookEntity, {
            author: author
        }, book);
    }

    async updateBookByTitle(title: string, book: BookEntity): Promise<UpdateResult> {
        this.mongoManager = getMongoManager("mongo");
        return await this.mongoManager.update(BookEntity, {
            title: title
        }, book);
    };

    async updateBookByISBN(isbn: string, book: BookEntity): Promise<UpdateResult> {
        this.mongoManager = getMongoManager("mongo");
        return await this.mongoManager.update(BookEntity, {
            isbn: parseInt(isbn, 10)
        }, book);
    };

    /*

    DELETE REQUESTS

    */

    async deleteBookByAuthor(author: string): Promise<DeleteResult> {
        this.mongoManager = getMongoManager("mongo");
        return await this.mongoManager.delete(BookEntity, {
            author: author
        });
    }

}