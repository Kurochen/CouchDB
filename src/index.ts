import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import resolvers from './resolvers';
import schema from './schema';
const nano = require('nano')('http://admin:0000@localhost:5984');
import makeDB from '../dataset/makeDB';

const app = express();
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');

//Проверяем наличие БД, если нет - создеам
(async () => {
    const dbName = "alice";
    const dbList = await nano.db.list();

    try {
        if (!dbList.includes(dbName)) {
            await nano.db.create(dbName);
            makeDB(dbName)
            console.log("database created successfully");
        } else {
            console.log("connected to database successfully");
        }
    } catch (err) {
        console.log(err)
    }
})();
