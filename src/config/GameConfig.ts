import { SFSObject, SFSEvent, ExtensionRequest, SmartFox, SFSRoom} from 'sfs2x-api';
import * as SFS2X from "sfs2x-api";
import {
    IConfig,
    injectable,
    decorate,
    Command
  } from "@robotlegsjs/core";
  @injectable()
  export class GameConfig implements IConfig {
    private repository:SFSObject;
    public sfs:SmartFox;
      constructor()
    {
      //this.repository = new SFSObject();
     // this.repository.addEventListener(SFSEvent.CONNECTION, Connection);
     console.log("constructor");
     
     //this.sfs.connect("127.0.0.1", 9933);
     var config = {host:"127.0.0.1",port:8080,useSSL:false,zone:"RummyZone",debug:false};
     this.sfs = new SFS2X.SmartFox(config);
     this.sfs.addEventListener(SFS2X.SFSEvent.CONNECTION, this.onConnection, this);
     this.sfs.addEventListener(SFS2X.SFSEvent.CONNECTION_LOST, this.onConnectionLost, this);
     this.sfs.addEventListener(SFS2X.SFSEvent.EXTENSION_RESPONSE, this.onExtensionResponse, this);
     this.sfs.addEventListener(SFS2X.SFSEvent.LOGIN, this.onLogin, this);
     this.sfs.addEventListener(SFS2X.SFSEvent.LOGIN_ERROR, this.onLoginError, this);
     this.sfs.connect();
    }

    public onLogin(evtParams)
    {
      //var sFSObject:SFSObject = evtParams.success;
      console.log("onLogin evtParams = " + evtParams.success);//+ JSON.stringify(evtParams));
     // var params = new SFS2X.SFSObject();
      //      params.putInt("n1", 26);
         //   params.putInt("n2", 16);
      //this.sfs.send(new SFS2X.ExtensionRequest("LOGIN", params));
    }

    public onLoginError(evtParams)
    {
      console.log("onLoginError evtParams = ");// + JSON.stringify(evtParams));
    }

    public onExtensionResponse(evtParams)
    {
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
            params.putUtfString("USER_NAME", "bharathi");
            params.putUtfString("PASSWORD", "1234");
            params.putUtfString("DEVICE_TOKEN",
            var req:SFS2X.LoginRequest;
            //this.sfs.send(new SFS2X.ExtensionRequest("LOGIN", params));
            req = new SFS2X.LoginRequest("bharathi", "", null, "RummyZone");
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