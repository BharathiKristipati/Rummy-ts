import "reflect-metadata";
import { createConnection } from "typeorm";
import { Catalog } from "./entity/Catalog";
import { Games } from "./entity/Games";
import { User } from "./entity/User";
import * as express from 'express';
import * as bodyParser from "body-parser";
var cors = require('cors')

var mysqlConnection;

createConnection({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "root",
  database: "clover_rummy",
  logging: ["query", "error"],
  synchronize: false,
  entities: [Games]
}).then(async connection => {
  mysqlConnection = connection;

  /* console.log("Inserting a new user into the database...");
   const user = new User();
   user.firstName = "Timber";
   user.lastName = "Saw";
   user.age = 25;
   await connection.manager.save(user);
   console.log("Saved a new user with id: " + user.id);*/

  console.log("Loading users from the database...");
  const users = await connection.manager.find(Games);
  console.log("Loaded users: ", users);

  console.log("Here you can setup and run express/koa/any other framework.");

}).catch(error => console.log(error));

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("port", process.env.PORT || 3000);

app.use(cors())

app.get('/users', async function (req, res) {
  const users = await mysqlConnection.manager.find(Games);
  res.json(users)
});

app.post('/users', async function (req, res) {
  const users = await mysqlConnection.manager.find(Games);
  res.send(users);
});

app.put('/users', async function (req, res) {
  const users = await mysqlConnection.manager.find(Games);
  res.send(users);
});
var server = app.listen(3000, function () { });