import "reflect-metadata";
import PIXI = require("pixi.js");
import { Context, MVCSBundle } from "@robotlegsjs/core";
import { ContextView, PixiBundle } from "@robotlegsjs/pixi";
import { GameConfig } from "./config/GameConfig";
import * as SFS2X from "sfs2x-api";

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