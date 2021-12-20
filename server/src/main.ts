import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import MongoConfiguration from "../config/mongo/mongo.config";
const cors = require("cors");
import { ConnectionOptions, createConnection } from 'typeorm';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.enableCors();
    app.use(cors());

    const connection = await createConnection(
        {
            ...MongoConfiguration as ConnectionOptions,
        }
    );

    await app.listen(3005);
}
bootstrap();
