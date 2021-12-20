import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class BookEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column({default: "default author"})
    private author: string

    @Column({default: "default title"})
    private title: string

    @Column({default: "1/1/11"})
    private publishdate: string

    @Column({default: 0})
    private isbn: number

    @Column({default: "No Subject"})
    private subject: string

    @Column({ default: "No Publisher"})
    private publisher: string

    constructor(newAuthor: string, newTitle: string, newPublishDate: string, newIsbn: number, newSubject: string, newPublisher: string) {
        this.author = newAuthor;
        this.title = newTitle;
        this.publishdate = newPublishDate;
        this.isbn = newIsbn;
        this.subject = newSubject;
        this.publisher = newPublisher;
    };

    get getAuthor() {
        return this.author;
    };

    get getTitle() {
        return this.title;
    };

    get publishDate() {
        return this.publishdate;
    };

    get getIsbn() {
        return this.isbn;
    };

    get getSubject() {
        return this.subject;
    };

    get getPublisher() {
        return this.publisher;
    };

    set setAuthor(newAuthor) {
        this.author = newAuthor;
    };

    set setTitle(newTitle) {
        this.title = newTitle;
    };

    set setPublishDate(newPublishDate) {
        this.publishdate = newPublishDate;
    };

    set setIsbn(newISBN) {
        this.isbn = newISBN;
    };

    set setSubject(newSubject) {
        this.subject = newSubject;
    };

    set setPublisher(newPublisher) {
        this.publisher = newPublisher;
    };

};