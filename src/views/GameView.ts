import { Game } from './../index';
import * as global from  './../index';
import { Container, Sprite} from "pixi.js";
//import { Game}


  export class GameView extends Container {
    private bg;
    private app;

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
    this.bg = PIXI.Texture.from("./../src/Assets/img/bg.jpg");
    const bunny = new PIXI.Sprite(this.bg);
   // bunny.anchor.set(0.5);
   bunny.x = 0;
   bunny.y = 0;
    //this.bg.anchor.x = 0;
    //this.bg.anchor.y = 0;
    //this.bg.position.x = 600;
    //this.bg.position.y = 800;
    //document.body.appendChild(this.app.view);
    container.addChild(bunny);
   // document.body.
    //this.app.render(this.bg);
  }
}