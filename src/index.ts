import "reflect-metadata";
import PIXI = require("pixi.js");
import { Context, MVCSBundle } from "@robotlegsjs/core";
import { ContextView, PixiBundle } from "@robotlegsjs/pixi";
import { GameConfig } from "./config/GameConfig";
//import * as SFS2X from "sfs2x-api";
import "reflect-metadata";
//import * as express from 'express';
//import * as bodyParser from "body-parser";
const fetch = require('node-fetch');

export class Game {
  private _app: PIXI.Application;
  private context: Context;
  private gameConfig:GameConfig;
  private gameWindow;

  constructor() {
    this._app = new PIXI.Application({
      width: 1354,
      height: 1000,
      backgroundColor: 0xffff00
    });
    document.body.appendChild(this._app.view);

    this.context = new Context();
    this.context
      .install(MVCSBundle, PixiBundle)
      .configure(new ContextView(this._app.stage))
      //.configure(GameConfig)
      .initialize();
      this.gameConfig = new GameConfig();
    console.log("creating screen manager view");
    this.render();
   // gameConfig = new GameConfig();
    //GameConfig.setGame(this);
    
  }

  public getStage()
  {
    return this._app.stage;
  }

  public getGameConfig()
  {
    //this.context.
    return this.gameConfig;
  }

  public setGameConfig(gameCon)
  {
    this.gameConfig = gameCon;
  }

  public render = () => {
    this._app.renderer.render(this._app.stage);
    window.requestAnimationFrame(this.render);
  };

  public OpenWindow(url:string)
  {
    console.log("OpenWindow url  = " + url);
    if(this.gameWindow == null)
    {
      this.gameWindow = window.open(url, '_blank', 'height=1050,width=1050,menubar=1,resizable=0');
    }
    else{
      if(!this.gameWindow.closed)
      {
        this.gameWindow.close();
      }
      this.gameWindow = window.open(url, '_blank', 'height=1050,width=1050,menubar=1,resizable=0');
      /*try
      {
        this.gameWindow.open(url, '_blank', 'height=1050,width=1050,menubar=1,resizable=0');
      }
      catch (Error) 
      {
        alert(Error.message);  
        this.gameWindow = window.open(url, '_blank', 'height=1050,width=1050,menubar=1,resizable=0');
      }
      finally
      {
        //this.gameWindow = window.open(url, '_blank', 'height=1050,width=1050,menubar=1,resizable=0');
      }*/
      //finally{}
     
    }
  }
}

export const game: Game = new Game();
//export var gameConfig: GameConfig;