import { Game } from './../index';
import * as global from  './../index';
//import * as Pixi from './../../libs/PixiTextInput.js'
import { Container, Sprite, Texture, TextStyle, Graphics,Text} from "pixi.js";
const PixiTextInput = require("./../component/PixiTextInput");

//import {TextInput} from "pixi-text-input";
import { Games } from './../entity/Games';
import { object } from 'prop-types';
// import * as PIXI from 'pixi-text-input';
//const TextInput = require('pixi-text-input')


  export class GameView extends Container {
    private bg;
    private table;
    private user;
    private container;
    private domField;

    constructor() {
    super();
  }

  public loginScreen() {
    this.container = new Container();
    const loginContainer = new Container();
    loginContainer.name = "Login";

    const background = new Sprite(Texture.from("./../src/Assets/img/background.png"));
    background.scale.x = 0.67;
    background.scale.y = 0.67;
    background.width = window.innerWidth;
    background.height = window.innerHeight;

    const HeaderH = new Graphics();
    HeaderH.beginFill(0x51178a, 0.9);
    HeaderH.drawRoundedRect((window.innerWidth)/4, (window.innerHeight)/4, (window.innerWidth)/2, (window.innerHeight)/2, 14);
    HeaderH.endFill();
    // HeaderH.anchor(0.5,0.5);

    let username = "", password = "";
    let style = {

    };

    let usernameLabel = new Text("Email / Username / Phone Number: ", {fill: "#ffffff", fontSize: 20});
    usernameLabel.x = 350;
    usernameLabel.y = 255;

   /* let usernameInput = new PixiTextInput("", style);
    usernameInput.width = window.innerWidth/4;
    usernameInput.height = 40;
    usernameInput.position.x = (window.innerWidth/2) -225;
    usernameInput.position.y = 250;
    usernameInput.placeholder = "Email / Username / Phone Number: ";
    usernameInput.change = function() {
      username = usernameInput.text;
    }*/

    let usernameInput = new PixiTextInput("",  {fill: "#000000", fontSize: 30});
          /*fontFamily: 'Arial',
        fontSize: '20px',
        padding: '8px 12px',
        width: '225px',
        color: 'black'
      });*/
      usernameInput.width =  (window.innerWidth/4);
      //usernameInput1.height = 40;
      usernameInput.placeholder = "Email / Username / Phone Number: ";
      usernameInput.x = (window.innerWidth/2) -225;
      usernameInput.y = 250;

    let passwordLabel = new Text("Password: ", {fill: "#ffffff", fontSize: 20});
    passwordLabel.x = 575;
    passwordLabel.y = 325;
    
    /*let passwordInput = new PixiTextInput("", style, true);
    passwordInput.width = window.innerWidth/4;
    passwordInput.height = 40;
    passwordInput.position.x = (window.innerWidth/2) -225;
    passwordInput.position.y = 320;
    passwordInput.placeholder = "Password";*/

    let passwordInput = new PixiTextInput("",  {fill: "#000000", fontSize: 30});
      passwordInput.width =  (window.innerWidth/4);
      passwordInput.placeholder = "Password";
      passwordInput.x = (window.innerWidth/2) -225;
      passwordInput.y = 320;
    passwordInput.change = function() {
      password = passwordInput.text;
    }

    const loginImg = new Sprite(Texture.from("./../src/Assets/img/login.png"));
    loginImg.x = (window.innerWidth/2) -225;
    loginImg.y = 400;
    loginImg.buttonMode = true;
    loginImg.interactive = true;
    loginImg.anchor.set(0, 0);

    const registerImg = new Sprite(Texture.from("./../src/Assets/img/register.png"));
    registerImg.x = (window.innerWidth/2) -25;
    registerImg.y = 400;
    registerImg.buttonMode = true;
    registerImg.interactive = true;

    const fbImg = new Sprite(Texture.from("./../src/Assets/img/facebook.png"));
    fbImg.width = 30;
    fbImg.height = 30;
    fbImg.x = (window.innerWidth/2) -100;
    fbImg.y = 500;

    const gImg = new Sprite(Texture.from("./../src/Assets/img/gmail.png"));
    gImg.width = 30;
    gImg.height = 30;
    gImg.x = (window.innerWidth/2) - 25;
    gImg.y = 500;

    loginImg.addListener("click", () => {
      console.log("Username: ", username);
      console.log("Password: ", password);
    });
    global.game.getStage().addChild(this.container);
    registerImg.addListener("click", () => {
     //global.game.getStage().addChild(this.loadGame());
    });

    loginContainer.addChild(background);
    loginContainer.addChild(HeaderH);

//    loginContainer.addChild(usernameLabel);
  
    //loginContainer.addChild(usernameInput);
    // loginContainer.addChild(passwordLabel);
    loginContainer.addChild(passwordInput);

    loginContainer.addChild(loginImg);
    loginContainer.addChild(registerImg);
    loginContainer.addChild(fbImg);
    loginContainer.addChild(gImg);
    loginContainer.addChild(usernameInput);
    this.container.addChild(loginContainer);
    //return loginContainer;
  }

 /* public loginScreen()
  {
    this.container = new Container();
    const startContainer = new Container();
    var LogininputField = new PIXI.TextInput({
      input: {
        fontFamily: 'Arial',
        fontSize: '14px',
        padding: '8px 12px',
        width: '220px',
        color: 'black'
      },box: {fill: 0xE8E9F3, rounded: 8, stroke: {color: 0xCBCEE0, width: 2}}});

      var EmailinputField = new PIXI.TextInput({
        input: {
          fontFamily: 'Arial',
          fontSize: '14px',
          padding: '8px 12px',
          width: '220px',
          color: 'black'
        },box: {fill: 0xE8E9F3, rounded: 8, stroke: {color: 0xCBCEE0, width: 2}}});

        var MobileinputField = new PIXI.TextInput({
          input: {
            fontFamily: 'Arial',
            fontSize: '14px',
            padding: '8px 12px',
            width: '220px',
            color: 'black'
          },box: {fill: 0xE8E9F3, rounded: 8, stroke: {color: 0xCBCEE0, width: 2}}});
          var PasswordinputField = new PIXI.TextInput({
            input: {
              fontFamily: 'Arial',
              fontSize: '14px',
              padding: '8px 12px',
              width: '220px',
              color: 'black'
            },box: {fill: 0xE8E9F3, rounded: 8, stroke: {color: 0xCBCEE0, width: 2}}});*/
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
  /* LogininputField.x = 520;
   LogininputField.y = 215;
   EmailinputField.x = 520;
   EmailinputField.y = 265;
   MobileinputField.x = 520;
   MobileinputField.y = 315;
   PasswordinputField.x = 520;
   PasswordinputField.y = 365;
    startContainer.name = "Login";
    global.game.getStage().addChild(this.container);
    this.bg = Texture.from("./../src/Assets/img/background.png");
    const style = new TextStyle({fill:'#f6ba32',fontWeight: 'bold',fontSize: 14});
    const bgspr = new Sprite(this.bg);
    bgspr.scale.x = 0.67;
    bgspr.scale.y = 0.67;
    var registration = Texture.from("./../src/Assets/img/registration.jpg");//background.png");//game_bg.jpg
    const registrationspr = new Sprite(registration);
    registrationspr.scale.x = 0.67;
    registrationspr.scale.y = 0.67;
    const HeaderH = new Graphics();
    HeaderH.beginFill(0x51178a, 0.9);//0x650A5A 0x210237
    HeaderH.drawRoundedRect(325, 156, 650, 410, 14);
    HeaderH.endFill();
    var loginbtn = Texture.from("./../src/Assets/img/login.png");//background.png");//game_bg.jpg
    const loginbtnspr = new Sprite(loginbtn);
    loginbtnspr.scale.x = 0.67;
    loginbtnspr.scale.y = 0.67;
    loginbtnspr.x = 590;
    loginbtnspr.y = 425;

    var facebookbtn = Texture.from("./../src/Assets/img/facebook.png");//background.png");//game_bg.jpg
    const facebookbtnspr = new Sprite(facebookbtn);
    facebookbtnspr.scale.x = 0.25;
    facebookbtnspr.scale.y = 0.25;
    facebookbtnspr.x = 610;
    facebookbtnspr.y = 485;

    var gmailbtn = Texture.from("./../src/Assets/img/gmail.png");//background.png");//game_bg.jpg
    const gmailbtnspr = new Sprite(gmailbtn);
    gmailbtnspr.scale.x = 0.25;
    gmailbtnspr.scale.y = 0.25;
    gmailbtnspr.x = 650;
    gmailbtnspr.y = 485;
    // let text = new Text('',{fontFamily : 'Arial', fontSize: 24, fill : 0xff1010, align : 'center'});
    //var inputField = new Pixi.PixiTextInput("hello",style);
//container.addChild(inputField);
    //var input = new Pixi.Input();
    //var input = new Pixi.Input({ type: "password" });
  
    startContainer.addChild(bgspr);
    startContainer.addChild(registrationspr);
    startContainer .addChild(HeaderH);
    startContainer.addChild(LogininputField);
    startContainer.addChild(EmailinputField);
    startContainer.addChild(MobileinputField);
    startContainer.addChild(PasswordinputField);
    startContainer.addChild(loginbtnspr);
    startContainer.addChild(facebookbtnspr);
    startContainer.addChild(gmailbtnspr);
    this.container.addChild(startContainer);
  }*/

  public loadGame()
  {
    this.container = new Container();
    const startContainer = new Container();
    startContainer.name = "Start";
    global.game.getStage().addChild(this.container);
    this.bg = Texture.from("./../src/Assets/img/background.png");//background.png");//game_bg.jpg
    const bgspr = new Sprite(this.bg);
    bgspr.scale.x = 0.67;
    bgspr.scale.y = 0.67;
    this.table = Texture.from("./../src/Assets/img/table_board.png");
    const tablespr = new Sprite(this.table);     
    tablespr.scale.x = 0.71;
    tablespr.scale.y = 0.71;  
    tablespr.x = 166;
    tablespr.y = 110;

    this.user = Texture.from("./../src/Assets/img/user.png");
    const userspr = new Sprite(this.user);
    userspr.scale.x = 0.45;
    userspr.scale.y = 0.45;  
    userspr.x = 417;
    userspr.y = 35;
    const users2pr = new Sprite(this.user);
    users2pr.scale.x = 0.45;
    users2pr.scale.y = 0.45;  
    users2pr.x = 839;
    users2pr.y = 35;
    const users3pr = new Sprite(this.user);
    users3pr.scale.x = 0.45;
    users3pr.scale.y = 0.45;  
   // users3pr.x = 394;
    //users3pr.y = 500;//638;
    //const cUser = new Container();
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
    const users4pr = new Sprite(this.user);
    users4pr.scale.x = 0.45;
    users4pr.scale.y = 0.45; 
    users4pr.anchor.set(0.5);
    users4pr.x = 839;
    users4pr.y = 661;
    users4pr.rotation = 3.2;

    const users5pr = new Sprite(this.user);
    users5pr.scale.x = 0.45;
    users5pr.scale.y = 0.45; 
    users5pr.anchor.set(0.5);
    users5pr.x = 113;
    users5pr.y = 360;
    users5pr.rotation = -1.5;

    const users6pr = new Sprite(this.user);
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

