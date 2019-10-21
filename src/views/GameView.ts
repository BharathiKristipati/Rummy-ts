import { Game } from './../index';
import * as global from  './../index';
import { Container, Sprite} from "pixi.js";
//import { Game}


  export class GameView extends Container {
    private bg;
    private deal;
    private points;
    private pool;
    private cash;
    private tournament;
    private practice;
    private user;
    private addCash;
    private funCoins;
    private bonus;
    private app;
    private dealspr;

    constructor() {
    super();
  }

  public loadLobby()
  {
    //this.app = PIXI.autoDetectRenderer(this.width, this.height);
    //this.stage = new PIXI.Container();
    /*this.app = new PIXI.Application({
        width: 800, height: 600, backgroundColor: 0x1099bb, resolution: window.devicePixelRatio || 1,
    });
    document.body.appendChild(this.app.view);
    //var game:Game = Game(document.body.getElementsByTagName("Game"));*/
    const container = new PIXI.Container();
    global.game.getStage().addChild(container);
    this.bg = PIXI.Texture.from("./../src/Assets/img/lobbyScreen.jpg");//background.png");
    const bunny = new PIXI.Sprite(this.bg);
    // bunny.anchor.set(0.5);
    bunny.x = 0;
    bunny.y = 0;
    //bunny.scale.x = 0.67;
    //bunny.scale.y = 0.67;
    //this.bg.anchor.x = 0;
    //this.bg.anchor.y = 0;
    //this.bg.position.x = 600;
    //this.bg.position.y = 800;
    //document.body.appendChild(this.app.view);
    this.deal = PIXI.Texture.from("./../src/Assets/img/deal-game-select-notext.png");
    this.points = PIXI.Texture.from("./../src/Assets/img/point-game-select-notext.png");
    this.pool = PIXI.Texture.from("./../src/Assets/img/pool-game-select-notext.png");
    this.dealspr = new PIXI.Sprite(this.deal);
    this.dealspr.x = 1000;
    this.dealspr.y = 173;// + 100;
    this.dealspr.scale.x = 0.67;
    this.dealspr.scale.y = 0.67;
    this.dealspr.interactive = true;
    this.dealspr.buttonMode = true;
    this.dealspr.on('pointerdown', this.onClick, this.dealspr);

    const poolspr = new PIXI.Sprite(this.pool);
    poolspr.x = 643;
    poolspr.y = 173;// + 100;
    poolspr.scale.x = 0.67;
    poolspr.scale.y = 0.67;
    poolspr.interactive = true;
    poolspr.buttonMode = true;
    poolspr.on('pointerdown', this.onClick, poolspr);

    const pointspr = new PIXI.Sprite(this.points);
    pointspr.x = 285;
    pointspr.y = 173;
    pointspr.scale.x = 0.67;
    pointspr.scale.y = 0.67;
    pointspr.interactive = true;
    pointspr.buttonMode = true;
    pointspr.on('pointerdown', this.onClick, pointspr);

    this.cash = PIXI.Texture.from("./../src/Assets/img/cash.png");
    this.tournament = PIXI.Texture.from("./../src/Assets/img/tournament.png");
    this.practice = PIXI.Texture.from("./../src/Assets/img/practice.png");
    const cashspr = new PIXI.Sprite(this.cash);
    cashspr.x = 0;
    cashspr.y = 170;
    cashspr.scale.x = 0.67;
    cashspr.scale.y = 0.67;

    const tournamentspr = new PIXI.Sprite(this.tournament);
    tournamentspr.x = 0;
    tournamentspr.y = 317;
    tournamentspr.scale.x = 0.67;
    tournamentspr.scale.y = 0.67;

    const practicespr = new PIXI.Sprite(this.practice);
    practicespr.x = 0;
    practicespr.y = 464;
    practicespr.scale.x = 0.67;
    practicespr.scale.y = 0.67;
    /*this.crown = PIXI.Texture.from("./../src/Assets/img/cash.png");
    const crownspr = new PIXI.Sprite(this.cash);
    crownspr.x = 0;
    crownspr.y = 170;
    crownspr.scale.x = 0.67;
    crownspr.scale.y = 0.67;*/
    this.addCash = PIXI.Texture.from("./../src/Assets/img/add-cash.png");
    const addCashspr = new PIXI.Sprite(this.addCash);
    addCashspr.x = 1021;
    addCashspr.y = 13;// + 10;
    addCashspr.scale.x = 0.087;
    addCashspr.scale.y = 0.087;
    this.funCoins = PIXI.Texture.from("./../src/Assets/img/fun_coins.png");
    const funCoinsspr = new PIXI.Sprite(this.funCoins);
    funCoinsspr.x = 1124;
    funCoinsspr.y = 13;
    funCoinsspr.scale.x = 0.45;
    funCoinsspr.scale.y = 0.45;

    this.bonus = PIXI.Texture.from("./../src/Assets/img/bonus.png");
    const bonusspr = new PIXI.Sprite(this.bonus);
    bonusspr.x = 1220;
    bonusspr.y = 13;
    bonusspr.scale.x = 0.45;
    bonusspr.scale.y = 0.45;

    this.user = PIXI.Texture.from("./../src/Assets/img/user_icon.png");
    const userspr = new PIXI.Sprite(this.user);
    userspr.x = 13;
    userspr.y = 13;
    userspr.scale.x = 0.45;
    userspr.scale.y = 0.45;

    container.addChild(bunny);
    container.addChild(this.dealspr);
    container.addChild(poolspr);
    container.addChild(pointspr);
    container.addChild(cashspr);
    container.addChild(tournamentspr);
    container.addChild(practicespr);
    container.addChild(addCashspr);
    container.addChild(funCoinsspr);
    container.addChild(bonusspr);
    container.addChild(userspr);

   // document.body.
    //this.app.render(this.bg);
  }

  private onClick(evt)
  {
    console.log("onClick evt = " + Object.getOwnPropertyNames(evt));
    /*console.log("onClick stopped = " + evt.stopped);
    console.log("onClick evt.target = " + Object.getOwnPropertyNames(evt.target));
    console.log("onClick target = " + evt.target.name);
    console.log("onClick evt.currentTarget = " + Object.getOwnPropertyNames(evt.currentTarget));
    console.log("onClick currentTarget = " + evt.currentTarget.name);
    console.log("onClick type = " + evt.type);
    console.log("onClick evt.data = " + Object.getOwnPropertyNames(evt.data));
    console.log("onClick data  = " + evt.data);*/
    console.log("onClick this  = " + this.name);
    if(evt == this.dealspr)
    {
      console.log("gottttttt******if(evt == this.dealspr)***************** it ");
    }
    if(evt.currentTarget == this.dealspr)
    {
      console.log("gottttttt**********if(evt.currentTarget == this.dealspr)************* it ");
    }
    if(evt.target == this.dealspr)
    {
      console.log("gottttttt********if(evt.target == this.dealspr)*************** it ");
    }
  }
}