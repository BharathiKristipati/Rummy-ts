import { Game } from './../index';
import * as global from  './../index';
import { Container, Sprite} from "pixi.js";
import { Games } from './../entity/Games';
import { object } from 'prop-types';


  export class GameView extends Container {
    private bg;
    private container;

    constructor() {
    super();
  }

  public loadGame()
  {
    this.container = new PIXI.Container();
    const startContainer = new PIXI.Container();
    startContainer.name = "Start";
    global.game.getStage().addChild(this.container);
    this.bg = PIXI.Texture.from("./../src/Assets/img/game_bg.jpg");
    const bunny = new PIXI.Sprite(this.bg);       
    startContainer.addChild(bunny);
    this.container.addChild(startContainer);
  }

  
}

