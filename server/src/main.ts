import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import MongoConfiguration from "../config/mongo/mongo.config";
import cors from "cors";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.enableCors();
    app.use(cors());

    await app.listen(3005);
}
bootstrap();
