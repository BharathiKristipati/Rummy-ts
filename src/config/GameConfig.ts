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
  function formatMovie(movie: any): Games {
    return { id: movie.id, active: movie.active,
      _uuid: movie._uuid, deals: movie.deals, entry_fee: movie.entry_fee,
      bet_type: movie.bet_type, game_sub_type: movie.game_sub_type, number_of_cards: movie.number_of_cards, 
      game_title: movie.game_title,game_type: movie.game_type, number_of_deck: movie.number_of_deck, 
      point_value: movie.point_value, pool_deal_prize: movie.pool_deal_prize,pool_game_type: movie.pool_game_type, 
      reward_points: movie.reward_points, seats: movie.seats, vip: movie.vip,token: movie.token, 
      created_at: movie.created_at, updated_at: movie.updated_at, status: movie.status};
  }
  @injectable()
  export class GameConfig implements IConfig {
    private repository:SFSObject;
    public sfs:SmartFox;
    private oDealListPractice:Array<Games> = new Array<Games>();
    private oDealListCash:Array<Games> = new Array<Games>();
    private oPointsListPractice:Array<Games> = new Array<Games>();
    private oPointsListCash:Array<Games> = new Array<Games>();
    private oPoolListPractice:Array<Games> = new Array<Games>();
    private oPoolListCash:Array<Games> = new Array<Games>();
    private game_lobby:GameView;
    private access_token:string;
    constructor()
    {
      //console.log("constructor");
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
      //console.log("onRoomJoin evtParams = " + Object.getOwnPropertyNames(evtParams));
      var TempObj = new SFSObject();
      var date = new Date();
      TempObj.putUtfString("USER_GAME_TOKEN", date.getMilliseconds.toString());
      var Request = new ExtensionRequest("GAME_LIST", TempObj);
      this.sfs.send(Request);
    }

    public onLogin(evtParams)
    {
      //console.log("onLogin evtParams = " + Object.getOwnPropertyNames(evtParams));
      console.log("onLogin zone = " + evtParams.zone);
      //console.log("onLogin user = " + evtParams.user);
     
      var data = evtParams.data;
      var user:SFSUser = evtParams.user;
      var gamesArray;
     
      gamesArray = this.getvals(this.LoadLobby);

     
    }

    public getvals(cb){
     
      var xhr = new XMLHttpRequest();
      xhr.open('POST', 'https://rummydesk.com/api/game_lobby', true);
      if (cb) xhr.onload = function() { cb(JSON.parse(this['responseText'])); };
      var formData = new FormData();
      formData.append("username", 'leazo');
      formData.append("access_token", this.access_token);
      xhr.send(formData);
      
    }

    public LoadLobby(evtParams)
    {
      console.log("LoadLobby evtParams = " + evtParams.length);// + JSON.stringify(evtParams));
      console.log("LoadLobby JSON.stringify(evtParams) = " + JSON.stringify(evtParams));
     // console.log("LoadLobby root = " + document);
      global.game.getGameConfig().oDealListPractice = new Array<Games>();
      global.game.getGameConfig().oDealListCash = new Array<Games>();
      global.game.getGameConfig().oPointsListPractice = new Array<Games>();
      global.game.getGameConfig().oPointsListCash = new Array<Games>();
      global.game.getGameConfig().oPoolListPractice = new Array<Games>();
      global.game.getGameConfig().oPoolListCash = new Array<Games>();
      global.game.getGameConfig().oPoolListCash = evtParams.data.cash.pool;
      global.game.getGameConfig().oPoolListPractice = evtParams.data.practice.pool;
      global.game.getGameConfig().oDealListPractice = evtParams.data.practice.deals;
      global.game.getGameConfig().oDealListCash = evtParams.data.cash.deals;
      global.game.getGameConfig().oPointsListPractice = evtParams.data.practice.points;
      global.game.getGameConfig().oPointsListCash = evtParams.data.cash.points;
     
      global.game.getGameConfig().game_lobby = new GameView();
      //this.game_lobby = lobby;
      global.game.getGameConfig().game_lobby.loadLobby();
      
    }
    public getlobbyData(strGameType:String, strCurType:String)
    {
      if(strGameType == "deal")
      {
        if(strCurType == "cash")
        {
          return this.oDealListCash;
        }
        else{
          return this.oDealListPractice;
        }
      }
      else if(strGameType == "pool")
      {
        if(strCurType == "cash")
        {
          return this.oPoolListCash;
        }
        else{
          return this.oPoolListPractice;
        }
      }
      else{
        if(strCurType == "cash")
        {
          return this.oPointsListCash;
        }
        else{
          return this.oPointsListPractice;
        }
      }
    }

    public getGameView()
    {
      return this.game_lobby;
    }

    public onLoginError(evtParams)
    {
      console.log("onLoginError evtParams = ");// + JSON.stringify(evtParams));
    }

    public onExtensionResponse(evtParams)
    {
      //console.log("onExtensionResponse evtParams = " + Object.getOwnPropertyNames(evtParams));
      console.log("onExtensionResponse evtParams = " + JSON.stringify(evtParams));
    }

    public onConnection(evtParams)
    {
      //console.log("onConnection evtParams = " + JSON.stringify(evtParams));
        if (evtParams.success)
        {
           
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