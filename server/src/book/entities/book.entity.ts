import { Column, Entity, ObjectIdColumn } from "typeorm";


@Entity()
export class BookEntity {

    @ObjectIdColumn()
    id: number;

    @Column({default: "default author"})
    author: string;

    @Column({default: "default title"})
    title: string;

    @Column({default: "1/1/11"})
    publishdate: string;

    @Column({default: 0})
    isbn: number;

    @Column({default: "No Subject"})
    subject: string;

    @Column({ default: "No Publisher"})
    publisher: string;

    constructor(newAuthor: string, newTitle: string, newPublishDate: string, newIsbn: number, newSubject: string, newPublisher: string) {
        this.author = newAuthor;
        this.title = newTitle;
        this.publishdate = newPublishDate;
        this.isbn = newIsbn;
        this.subject = newSubject;
        this.publisher = newPublisher;
    };

};