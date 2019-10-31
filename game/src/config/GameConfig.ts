import { Game } from './../index';
import { Games } from './../entity/Games';
import {GameView} from './../views/GameView';
import { SFSObject, SFSEvent, ExtensionRequest, SmartFox, SFSRoom, JoinRoomRequest, SFSUser} from 'sfs2x-api';
import * as SFS2X from "sfs2x-api";
import * as global from  './../index';
import {CircularJSON} from 'circular-json';
import {
    IConfig,
    injectable,
    decorate,
    Command
  } from "@robotlegsjs/core";
  import {ConnectionOptions, createConnection} from "typeorm";
  
  @injectable()
  export class GameConfig implements IConfig {
    private repository:SFSObject;
    public sfs:SmartFox;
    public strLogin:string;
    private oDealListPractice:Array<Games> = new Array<Games>();
    private oDealListCash:Array<Games> = new Array<Games>();
    private oPointsListPractice:Array<Games> = new Array<Games>();
    private oPointsListCash:Array<Games> = new Array<Games>();
    private oPoolListPractice:Array<Games> = new Array<Games>();
    private oPoolListCash:Array<Games> = new Array<Games>();
    private game_table:GameView;
    private access_token:string;
    constructor()
    {
      console.log("constructor");
      //global.game.setGameConfig(this);
     //this.sfs.connect("127.0.0.1", 9933);
     var config = {host:"rummydesk.com",port:8080,useSSL:false,zone:"RummyZone",debug:false};
     this.sfs = new SFS2X.SmartFox(config);
     this.sfs.addEventListener(SFS2X.SFSEvent.CONNECTION, this.onConnection, this);
     this.sfs.addEventListener(SFS2X.SFSEvent.CONNECTION_LOST, this.onConnectionLost, this);
     this.sfs.addEventListener(SFS2X.SFSEvent.EXTENSION_RESPONSE, this.onExtensionResponse, this);
     //this.sfs.addEventListener(SFS2X.SFSEvent., this.onExtensionResponse, this);
     this.sfs.addEventListener(SFS2X.SFSEvent.LOGIN, this.onLogin, this);
     this.sfs.addEventListener(SFS2X.SFSEvent.ROOM_JOIN, this.onRoomJoin, this);
     this.sfs.addEventListener(SFS2X.SFSEvent.LOGIN_ERROR, this.onLoginError, this);
     this.sfs.connect();
    }   

    public onRoomJoin(evtParams)
    {
      console.log("onRoomJoin evtParams = " + Object.getOwnPropertyNames(evtParams));
      var TempObj = new SFSObject();
      var date = new Date();
      TempObj.putUtfString("USER_GAME_TOKEN", date.getMilliseconds.toString());
      var Request = new ExtensionRequest("GAME_LIST", TempObj);
      this.sfs.send(Request);
    }

    public onLogin(evtParams)
    {
      console.log("onLogin evtParams = " + Object.getOwnPropertyNames(evtParams));
      console.log("onLogin zone = " + evtParams.zone);
      console.log("onLogin user = " + evtParams.user);
      var xhr = new XMLHttpRequest();
      xhr.open('POST', 'https://rummydesk.com/api/profile', true);
      xhr.onload = function() { global.game.getGameConfig().playerInfo(JSON.parse(this['responseText'])); };
      //xhr.setRequestHeader('Content-Type', 'application/json');
      var formData = new FormData();
      formData.append("access_token", global.game.getGameConfig().access_token);
      xhr.send(formData);
      var data = evtParams.data;
      var user:SFSUser = evtParams.user;
      var gamesArray;
      this.game_table = new GameView();
      this.game_table.loadGame();//loadGame();loginScreen
    }

    public playerInfo(evtParams)
    {
      console.log("playerInfo evtParams = " + JSON.stringify(evtParams));
    }

    
    public getGameView()
    {
      return this.game_table;
    }

    public onLoginError(evtParams)
    {
      console.log("onLoginError evtParams = ");// + JSON.stringify(evtParams));
    }

    public onExtensionResponse(evtParams)
    {
      console.log("onExtensionResponse evtParams = " + Object.getOwnPropertyNames(evtParams));
      console.log("onExtensionResponse evtParams = " + JSON.stringify(evtParams));
    }

    public onConnection(evtParams)
    {
      console.log("onConnection evtParams = " + JSON.stringify(evtParams));
        if (evtParams.success)
        {
            //this.game_table.loginScreen();
            this.WebLogin(this.WebLoginRes);
        }
        else
        {
            console.log("Connection failed. Is the server running at all?");
        }
    }
    public WebLogin(cb)
    {
      //return fetch('https://rummydesk.com/api/game_lobby')
      var xhr = new XMLHttpRequest();
      xhr.open('POST', 'https://rummydesk.com/api/login', true);
      if (cb) xhr.onload = function() { cb(JSON.parse(this['responseText'])); };
      //xhr.setRequestHeader('Content-Type', 'application/json');
      var formData = new FormData();
      formData.append("username", 'leazo');
      formData.append("password", 'leazo123');
      // var data = new Object();
      // data["username"] = 'leazo';
      // data["password"] = 'leazo123';
      xhr.send(formData);
      //xhr.send();
    }

    public WebLoginRes(evtParams)
    {
      console.log("WebLoginRes evtParams = " + JSON.stringify(evtParams));
      var params = new SFS2X.SFSObject();
      params.putUtfString("REQUEST_TYPE", "LOGIN");
      params.putUtfString("USER_NAME", "leazo");
      params.putUtfString("PASSWORD", "");
      params.putUtfString("USER_ID", evtParams.data.id);
      params.putUtfString("DEVICE_TOKEN","");
      var req:SFS2X.LoginRequest;
      console.log("WebLoginRes params = " + JSON.stringify(params.get("USER_ID")));
      console.log("WebLoginRes params = " + document.getElementById("lobby").getAttribute("access_token"));
      global.game.getGameConfig().access_token = evtParams.data.access_token;
      //this.sfs.send(new SFS2X.ExtensionRequest("LOGIN", params));
      req = new SFS2X.LoginRequest("leazo", "", params, "RummyZone");
      global.game.getGameConfig().sfs.send(req);//new SFS2X.LoginRequest("", "", null, "RummyZone"));
    }

    public onConnectionLost(evtParams)
    {
      console.log("onConnectionLost123345454 evtParams = " + JSON.stringify(evtParams));
      if (evtParams.success)
      {
          console.log("Connected to SmartFoxServer 2X!");
      }
      else
      {
          console.log("Connection failed. Is the server running at all?");
      }
    }
    
    public configure() {
     
    }
  }
  //decorate(injectable(), Command);