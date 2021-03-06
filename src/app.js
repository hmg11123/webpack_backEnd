import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
dotenv.config();
import { graphqlHTTP } from "express-graphql";
import cors from "cors";
import bodyParser from "body-parser";
import schema from "../graphql/schemas";
import connect from "../db/mongo";

const app = express();

app.set(`port`, process.env.PORT);
app.use(morgan(`dev`));
connect();

app.use(
 `/graphql`,
 cors(),
 bodyParser.json(),
 graphqlHTTP({
  schema,
  graphiql: true,
 }),
);

app.listen(app.get(`port`), () => {
 console.log(`[WEBPACK SERVER START] :: ${process.env.PORT}, WTH GraphQL - MongoDB`);
});
