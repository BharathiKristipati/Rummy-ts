//import { Games } from './../entity/Games';
import { SFSObject, SFSEvent, ExtensionRequest, SmartFox, SFSRoom, JoinRoomRequest, SFSUser} from 'sfs2x-api';
import * as SFS2X from "sfs2x-api";
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
    /*options: ConnectionOptions = {
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "root",
      database: "clover_rummy",
      logging: ["query", "error"],
      synchronize: false,
      entities: [Games]
  };*/
      constructor()
    {
      //this.repository = new SFSObject();
     // this.repository.addEventListener(SFSEvent.CONNECTION, Connection);
     console.log("constructor");
     
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
      //var sFSObject:SFSObject = evtParams.success;
      console.log("onLogin evtParams = " + Object.getOwnPropertyNames(evtParams));
      console.log("onLogin zone = " + evtParams.zone);
      console.log("onLogin user = " + evtParams.user);
      //createConnection(this.options).then(async connection => {
       /* createConnection(this.options).then(async connection => {
          const game = new Games();
          //user.firstName = "Timber";
         // user.lastName = "Saw";
          //user.age = 25;
          await connection.manager.save(game);
    console.log("Saved a new user with id: " + user.id);
          const savedCatalogs = await connection.manager.find(Games);
          console.log("All catalogs from the db: ", savedCatalogs);
    }).catch(error => console.log(error));*/
      var data = evtParams.data;
      var user:SFSUser = evtParams.user;
      //var game:Games;
      console.log("onLogin user = " + user.name);
      console.log("onLogin data = " + Object.getOwnPropertyNames(data));
      console.log("onLogin data = " + evtParams.data.data);
      console.log("onLogin _serializer = " + Object.getOwnPropertyNames(data._serializer));
      console.log("onLogin _dataHolder = " + JSON.stringify(data._dataHolder));
      //console.log("onLogin evtParams.success = " + evtParams.success);//+ JSON.stringify(evtParams));
      /*var req = new JoinRoomRequest("Lobby", "", null, true);
      this.sfs.send(req);
      console.log("onLogin gamlist requerst sent.");*/
      /*var TempObj = new SFSObject();
      var date = new Date();
      TempObj.putUtfString("USER_GAME_TOKEN", user.name);
      var Request = new ExtensionRequest("GAME_LIST", TempObj);
      console.log("Gamelist Request = " + JSON.stringify(Request));
      this.sfs.send(Request);*/
     // var params = new SFS2X.SFSObject();
     // params.putInt("n1", 26);
     // params.putInt("n2", 16);
     //this.sfs.send(new SFS2X.ExtensionRequest("LOGIN", params));
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
  decorate(injectable(), Command);