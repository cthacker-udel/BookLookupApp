import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class BookEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column({default: "default author"})
    private Author: string

    @Column({default: "default title"})
    private Title: string

    @Column({default: "1/1/11"})
    private PublishDate: string

    @Column({default: 0})
    private ISBN: number

    @Column({default: "No Subject"})
    private Subject: string

    @Column({ default: "No Publisher"})
    private Publisher: string

    constructor(newAuthor: string, newTitle: string, newPublishDate: string, newIsbn: number, newSubject: string, newPublisher: string) {
        this.Author = newAuthor;
        this.Title = newTitle;
        this.PublishDate = newPublishDate;
        this.ISBN = newIsbn;
        this.Subject = newSubject;
        this.Publisher = newPublisher;
    };

    get author() {
        return this.Author;
    };

    get title() {
        return this.Title;
    };

    get publishDate() {
        return this.PublishDate;
    };

    get isbn() {
        return this.ISBN;
    };

    get subject() {
        return this.Subject;
    };

    get publisher() {
        return this.Publisher;
    };

    set author(newAuthor) {
        this.Author = newAuthor;
    };

    set title(newTitle) {
        this.Title = newTitle;
    };

    set publishDate(newPublishDate) {
        this.PublishDate = newPublishDate;
    };

    set isbn(newISBN) {
        this.ISBN = newISBN;
    };

    set subject(newSubject) {
        this.Subject = newSubject;
    };

    set publisher(newPublisher) {
        this.Publisher = newPublisher;
    };

};