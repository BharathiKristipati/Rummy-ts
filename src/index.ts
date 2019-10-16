import { Games } from './entity/Games';
import "reflect-metadata";
import PIXI = require("pixi.js");
import { Context, MVCSBundle } from "@robotlegsjs/core";
import { ContextView, PixiBundle } from "@robotlegsjs/pixi";
import { GameConfig } from "./config/GameConfig";
import * as SFS2X from "sfs2x-api";
import "reflect-metadata";
import {ConnectionOptions, createConnection} from "typeorm";
/*import * as express from 'express';
import * as bodyParser from "body-parser";
import {ConnectionOptions, createConnection} from "typeorm";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("port", process.env.PORT || 3000);*/
var appRoot = require('app-root-path');
//var connection = new ActiveXObject("ADODB.Connection") ;
createConnection("../ormconfig.json").then(async connection => {

   /* console.log("Inserting a new user into the database...");
    const user = new User();
    user.firstName = "Timber";
    user.lastName = "Saw";
    user.age = 25;
    await connection.manager.save(user);
    console.log("Saved a new user with id: " + user.id);*/

    console.log("Loading users from the database...");
    //const games = await connection.manager.find(Games);
    //console.log("Loaded users: ", games);

    console.log("Here you can setup and run express/koa/any other framework.");

}).catch(error => console.log(error));


export class Game {
  private _app: PIXI.Application;
  private context: Context;

  constructor() {
    this._app = new PIXI.Application({
      width: 800,
      height: 600,
      backgroundColor: 0xffff00
    });
    document.body.appendChild(this._app.view);

    this.context = new Context();
    this.context
      .install(MVCSBundle, PixiBundle)
      .configure(new ContextView(this._app.stage))
      .configure(GameConfig)
      .initialize();
    console.log("creating screen manager view");
    this.render();
  }

  public render = () => {
    this._app.renderer.render(this._app.stage);
    window.requestAnimationFrame(this.render);
  };
}

let game: Game = new Game();