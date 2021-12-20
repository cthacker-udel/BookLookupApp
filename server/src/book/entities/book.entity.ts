import { ShardingManager } from "discord.js";
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

    constructor(newAuthor: string, newTitle: string) {
        this.Author = newAuthor;
        this.Title = newTitle;
    };

    get author() {
        return this.author;
    };

    get title() {
        return this.title;
    };

    get publishDate() {
        return this.publishDate;
    };

    get isbn() {
        return this.isbn;
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
        this.publishDate = newPublishDate;
    };

    set isbn(newISBN) {
        this.ISBN = newISBN;
    };

    set subject(newSubject) {
        this.subject = newSubject;
    };

    set publisher(newPublisher) {
        this.Publisher = newPublisher;
    };

};