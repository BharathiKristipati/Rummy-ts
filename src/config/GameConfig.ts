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
     
      var data = evtParams.data;
      var user:SFSUser = evtParams.user;
      var gamesArray;
     /* fetch('http://localhost:3000/games', {method: 'GET',headers: {'Accept': 'application/json','Content-Type': 'application/json'}})
      .then(res => {let b:Games = res;console.log(b);})
      .then(async function (a) {
        console.log(a);
        console.log((String(a)));// call the json method on the response to get JSON
    })
      .then(res => console.log(res))
      .then(body => console.log(body));*/

    /*fetch(`http://localhost:3000/games`)
        .then(res => res.json())
        .then(res => res.map((games: any) => formatMovie(games)))
        .then(async function (a) {
        console.log(a);
        this.LoadLobby(a);
        //gamesArray = a;
        console.log("a = "  +a);
        console.log(("String(a) = " + String(a)));// call the json method on the response to get JSON
        //this.LoadLobby(a);
    });
    */
      gamesArray = this.getvals(this.LoadLobby);

      //this.LoadLobby(gamesArray);
      //console.log("onLogin user = " + user.name);
      //console.log("onLogin data = " + Object.getOwnPropertyNames(data));
      //console.log("onLogin data = " + evtParams.data.data);
      //console.log("onLogin _serializer = " + Object.getOwnPropertyNames(data._serializer));
      //console.log("onLogin _dataHolder = " + JSON.stringify(data._dataHolder));
    }

    public getvals(cb){
      return fetch(`http://localhost:3000/games`)
      .then(res => res.json())
      .then(res => res.map((games: any) => formatMovie(games)))
      .then(async function (a) {
      console.log(a);
     // this.LoadLobby(a);
      //gamesArray = a;
      console.log("a = "  +a);
      console.log(("String(a) = " + String(a)));// call the json method on the response to get JSON
      cb(a);
      return a;
      //this.LoadLobby(a);
      });
      //.catch(error => console.warn(error));

    }

    public LoadLobby(evtParams)
    {
      console.log("LoadLobby evtParams = " + evtParams.length);// + JSON.stringify(evtParams));
      console.log("LoadLobby root = " + document);
     // console.log("LoadLobby this.oDealListCash.length = " + this.oDealListCash.length);
     // console.log("LoadLobby this.oDealListPractice.length = " + this.oDealListPractice.length);
      //console.log("LoadLobby this.oPointsListCash.length = " + this.oPointsListCash.length);
     // console.log("LoadLobby this.oPointsListPractice.length = " + this.oPointsListPractice.length);
     // console.log("LoadLobby this.oPoolListCash.length = " + this.oPoolListCash.length);
      //console.log("LoadLobby this.oPoolListPractice.length = " + this.oPoolListPractice.length);
      global.game.getGameConfig().oDealListPractice = new Array<Games>();
      global.game.getGameConfig().oDealListCash = new Array<Games>();
      global.game.getGameConfig().oPointsListPractice = new Array<Games>();
      global.game.getGameConfig().oPointsListCash = new Array<Games>();
      global.game.getGameConfig().oPoolListPractice = new Array<Games>();
      global.game.getGameConfig().oPoolListCash = new Array<Games>();
      console.log("LoadLobby this = " + this);
      //this = global.game.getGameConfig();
      console.log("LoadLobby global.game.getGameConfig() = " + global.game.getGameConfig());
      for(var i = 0; i < evtParams.length; ++i)
      {
        console.log("LoadLobby evtParams.game_type = " + evtParams[i].game_type);
        console.log("LoadLobby evtParams.game_sub_type = " + evtParams[i].game_sub_type);
        if(evtParams[i].game_sub_type == "Deals")
        {
          if(evtParams[i].game_type == "Cash")
          {
            global.game.getGameConfig().oDealListCash.push(evtParams[i]);
          }else{
            global.game.getGameConfig().oDealListPractice.push(evtParams[i]);
          }
        }
        else if(evtParams[i].game_sub_type == "Points")
        {
          if(evtParams[i].game_type == "Cash")
          {
            global.game.getGameConfig().oPointsListCash.push(evtParams[i]);
          }else{
            global.game.getGameConfig().oPointsListPractice.push(evtParams[i]);
          }
        }else if(evtParams[i].game_sub_type == "Pool")
        {
          if(evtParams[i].game_type == "Cash")
          {
            global.game.getGameConfig().oPoolListCash.push(evtParams[i]);
          }else{
            global.game.getGameConfig().oPoolListPractice.push(evtParams[i]);
          }
        }
        //console.log("LoadLobby evtParams = " + evtParams.length());
        //if(evtParams[i])
      }
      console.log("LoadLobby this.oDealListCash.length = " + global.game.getGameConfig().oDealListCash.length);
      console.log("LoadLobby this.oDealListPractice.length = " + global.game.getGameConfig().oDealListPractice.length);
      console.log("LoadLobby this.oPointsListCash.length = " + global.game.getGameConfig().oPointsListCash.length);
      console.log("LoadLobby this.oPointsListPractice.length = " + global.game.getGameConfig().oPointsListPractice.length);
      console.log("LoadLobby this.oPoolListCash.length = " + global.game.getGameConfig().oPoolListCash.length);
      console.log("LoadLobby this.oPoolListPractice.length = " + global.game.getGameConfig().oPoolListPractice.length);
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
      console.log("onExtensionResponse evtParams = " + Object.getOwnPropertyNames(evtParams));
      console.log("onExtensionResponse evtParams = " + JSON.stringify(evtParams));
    }

    public onConnection(evtParams)
    {
      console.log("onConnection evtParams = " + JSON.stringify(evtParams));
        if (evtParams.success)
        {
            console.log("Connected to SmartFoxServer 2X!");
            //this.sfs.//SFSEvent("LOGIN");
            var params = new SFS2X.SFSObject();
            params.putUtfString("REQUEST_TYPE", "LOGIN");
            params.putUtfString("USER_NAME", "leazo");
            params.putUtfString("PASSWORD", "leazo123");
            params.putUtfString("DEVICE_TOKEN","");
            var req:SFS2X.LoginRequest;
            //this.sfs.send(new SFS2X.ExtensionRequest("LOGIN", params));
            req = new SFS2X.LoginRequest("leazo", "", params, "RummyZone");
            this.sfs.send(req);//new SFS2X.LoginRequest("", "", null, "RummyZone"));
        }
        else
        {
            console.log("Connection failed. Is the server running at all?");
        }
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