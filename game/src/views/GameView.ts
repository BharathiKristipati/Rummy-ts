import { Game } from './../index';
import * as global from  './../index';
//import * as Pixi from './../../libs/PixiTextInput.js'
import { Container, Sprite} from "pixi.js";
//import {TextInput} from "pixi-text-input";
import { Games } from './../entity/Games';
import { object } from 'prop-types';
//const TextInput = require('pixi-text-input')
const PixiTextInput = require('./../../node_modules/pixi-text-input/PIXI.TextInput.js');


  export class GameView extends Container {
    private bg;
    private table;
    private user;
    private container;
    private domField;

    constructor() {
    super();
  }

  public loginScreen()
  {
    this.container = new PIXI.Container();
    const startContainer = new PIXI.Container();
    var inputField =  PixiTextInput.TextInput({
      input: {
        fontFamily: 'Arial',
        fontSize: '32px',
        padding: '14px 24px',
        width: '500px',
        color: 'white'
      },box: {fill: 0xE8E9F3, rounded: 16, stroke: {color: 0xCBCEE0, width: 4}}});
    /*var input = pixi.TextInput({
      input: {
        fontFamily: 'Arial',
        fontSize: '32px',
        padding: '14px 24px',
        width: '500px',
        color: 'white'
      },box: {fill: 0xE8E9F3, rounded: 16, stroke: {color: 0xCBCEE0, width: 4}}});*/
   // TextInput.border = true;
   // this.domField = document.createElement("input");
   // this.domField.type = "text";
   // this.domField.style.position = "absolute";
    startContainer.name = "Login";
    global.game.getStage().addChild(this.container);
    this.bg = PIXI.Texture.from("./../src/Assets/img/background.png");
    const style = new PIXI.TextStyle({fill:'#f6ba32',fontWeight: 'bold',fontSize: 14});
    const bgspr = new PIXI.Sprite(this.bg);
    bgspr.scale.x = 0.67;
    bgspr.scale.y = 0.67;
    var registration = PIXI.Texture.from("./../src/Assets/img/registration.jpg");//background.png");//game_bg.jpg
    const registrationspr = new PIXI.Sprite(registration);
    registrationspr.scale.x = 0.67;
    registrationspr.scale.y = 0.67;
    const HeaderH = new PIXI.Graphics();
    HeaderH.beginFill(0x51178a, 0.9);//0x650A5A 0x210237
    HeaderH.drawRoundedRect(325, 156, 650, 410, 14);
    HeaderH.endFill();
    let text = new PIXI.Text('',{fontFamily : 'Arial', fontSize: 24, fill : 0xff1010, align : 'center'});
    //var inputField = new Pixi.PixiTextInput("hello",style);
//container.addChild(inputField);
    //var input = new Pixi.Input();
    //var input = new Pixi.Input({ type: "password" });
  
    startContainer.addChild(bgspr);
    startContainer.addChild(registrationspr);
    startContainer .addChild(HeaderH);
    startContainer.addChild(inputField);
    this.container.addChild(startContainer);
  }

  public loadGame()
  {
    this.container = new PIXI.Container();
    const startContainer = new PIXI.Container();
    startContainer.name = "Start";
    global.game.getStage().addChild(this.container);
    this.bg = PIXI.Texture.from("./../src/Assets/img/background.png");//background.png");//game_bg.jpg
    const bgspr = new PIXI.Sprite(this.bg);
    bgspr.scale.x = 0.67;
    bgspr.scale.y = 0.67;
    this.table = PIXI.Texture.from("./../src/Assets/img/table_board.png");
    const tablespr = new PIXI.Sprite(this.table);     
    tablespr.scale.x = 0.71;
    tablespr.scale.y = 0.71;  
    tablespr.x = 166;
    tablespr.y = 110;

    this.user = PIXI.Texture.from("./../src/Assets/img/user.png");
    const userspr = new PIXI.Sprite(this.user);
    userspr.scale.x = 0.45;
    userspr.scale.y = 0.45;  
    userspr.x = 417;
    userspr.y = 35;
    const users2pr = new PIXI.Sprite(this.user);
    users2pr.scale.x = 0.45;
    users2pr.scale.y = 0.45;  
    users2pr.x = 839;
    users2pr.y = 35;
    const users3pr = new PIXI.Sprite(this.user);
    users3pr.scale.x = 0.45;
    users3pr.scale.y = 0.45;  
   // users3pr.x = 394;
    //users3pr.y = 500;//638;
    //const cUser = new PIXI.Container();
    //cUser.addChild(users3pr);
    //users3pr.skew.x = 45;
    //users3pr.rotation = 45;
    users3pr.anchor.set(0.5);
    users3pr.x = 418;
    users3pr.y = 661;//500;//638;
    
    //users3pr.rotation = 0.4;
    const Random = Math.random() * (Math.PI * 2);
    console.log("Random = " + Random);
    
    users3pr.rotation = 3.2;//3.298437880834236
    const users4pr = new PIXI.Sprite(this.user);
    users4pr.scale.x = 0.45;
    users4pr.scale.y = 0.45; 
    users4pr.anchor.set(0.5);
    users4pr.x = 839;
    users4pr.y = 661;
    users4pr.rotation = 3.2;

    const users5pr = new PIXI.Sprite(this.user);
    users5pr.scale.x = 0.45;
    users5pr.scale.y = 0.45; 
    users5pr.anchor.set(0.5);
    users5pr.x = 113;
    users5pr.y = 360;
    users5pr.rotation = -1.5;

    const users6pr = new PIXI.Sprite(this.user);
    users6pr.scale.x = 0.45;
    users6pr.scale.y = 0.45; 
    users6pr.anchor.set(0.5);
    users6pr.x = 1167;
    users6pr.y = 360;
    users6pr.rotation = 1.5;
    
    startContainer.addChild(bgspr);
    startContainer.addChild(tablespr);
    startContainer.addChild(userspr);
    startContainer.addChild(users2pr);
    startContainer.addChild(users3pr);
    startContainer.addChild(users4pr);
    startContainer.addChild(users5pr);
    startContainer.addChild(users6pr);
    this.container.addChild(startContainer);
  }  
}

