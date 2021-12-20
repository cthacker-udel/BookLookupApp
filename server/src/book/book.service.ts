import { Injectable } from "@nestjs/common";


@Injectable()
export class BookService {


    async getBooks() {
        return await new Promise(() => console.log("found books")).then((result) => console.log("result"));
    }


}