import { DataSource } from 'typeorm';
import { Contact } from '../models';

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "agenda_db",
    synchronize: true,
    logging: true,
    entities: [Contact],
    subscribers: [],
    migrations: [],
})