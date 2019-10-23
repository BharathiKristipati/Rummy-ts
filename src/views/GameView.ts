import { Game } from './../index';
import * as global from  './../index';
import { Container, Sprite} from "pixi.js";
import { Games } from './../entity/Games';


  export class GameView extends Container {
    private bg;
    private deal;
    private points;
    private pool;
    private cash;
    private tournament;
    private strcurrencyType:String;
    private bIsCash:boolean;
    private bIsPractice:boolean;
    private bIsTournament:boolean;
    private practice;
    private user;
    private addCash;
    private funCoins;
    private bonus;
    private app;
    private dealspr;
    private lobbytable;
    private container;

    constructor() {
    super();
  }

  public loadLobby()
  {
    this.container = new PIXI.Container();
    const startContainer = new PIXI.Container();
    startContainer.name = "Start";
    global.game.getStage().addChild(this.container);
    this.bg = PIXI.Texture.from("./../src/Assets/img/background.png");//lobbyScreen.jpg");//background.png");
    const bunny = new PIXI.Sprite(this.bg);
    // bunny.anchor.set(0.5);
    bunny.x = 0;
    bunny.y = 0;
    bunny.scale.x = 0.67;
    bunny.scale.y = 0.67;
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
    this.dealspr.name = "deal";
    this.dealspr.buttonMode = true;
    this.dealspr.on('pointerdown', this.onClick, this);

    const poolspr = new PIXI.Sprite(this.pool);
    poolspr.x = 643;
    poolspr.y = 173;// + 100;
    poolspr.scale.x = 0.67;
    poolspr.scale.y = 0.67;
    poolspr.name = "pool";
    poolspr.interactive = true;
    poolspr.buttonMode = true;
    poolspr.on('pointerdown', this.onClick,this);

    const pointspr = new PIXI.Sprite(this.points);
    pointspr.x = 285;
    pointspr.y = 173;
    pointspr.scale.x = 0.67;
    pointspr.scale.y = 0.67;
    pointspr.name = "point";
    pointspr.interactive = true;
    pointspr.buttonMode = true;
    pointspr.on('pointerdown', this.onClick, this);

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

    this.container.addChild(bunny);
    startContainer.addChild(this.dealspr);
    startContainer.addChild(poolspr);
    startContainer.addChild(pointspr);
    startContainer.addChild(cashspr);
    startContainer.addChild(tournamentspr);
    startContainer.addChild(practicespr);
    startContainer.addChild(addCashspr);
    startContainer.addChild(funCoinsspr);
    startContainer.addChild(bonusspr);
    startContainer.addChild(userspr);
    this.container.addChild(startContainer);
    this.strcurrencyType = "cash";
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
    console.log("onClick currentTarget = " + evt.currentTarget.name);
    console.log("onClick target = " + evt.target.name);
    if(evt.target.name == "deal")
    {
      this.RenderLobbyTables(global.game.getGameConfig().getlobbyData(evt.target.name, this.strcurrencyType));
      //console.log("gottttttt******if(evt == this.dealspr)***************** it ");
    }
    if(evt.target.name == "pool")
    {
      this.RenderLobbyTables(global.game.getGameConfig().getlobbyData(evt.target.name, this.strcurrencyType));
      //console.log("gottttttt**********if(evt.currentTarget == this.dealspr)************* it ");
    }
    if(evt.target.name == "point")
    {
      this.RenderLobbyTables(global.game.getGameConfig().getlobbyData(evt.target.name, this.strcurrencyType));
      //console.log("gottttttt********if(evt.target == this.dealspr)*************** it ");
    }
  }

  private RenderLobbyTables(param)
  {
    //this.lobbytable = PIXI.Texture.from("./../src/Assets/img/Lobby-Table.jpg");
    
    const DataGrid = new PIXI.Container();
    const Header = new PIXI.Graphics();
    Header.beginFill(0x0c0015);//(0x0c0015);(0xDE3249)
    Header.drawRect(60, 137, 1159, 102);
    Header.endFill();
    Header.lineStyle(2, 0xFF00FF, 1);

    const HeaderH = new PIXI.Graphics();
    HeaderH.beginFill(0x210237, 0.5);//0x650A5A 0x210237
    HeaderH.drawRoundedRect(60, 83, 1159, 554, 14);
    HeaderH.endFill();

    const startLobby = this.container.getChildByName("Start");
    startLobby.visible = false;
    // Rectangle
    const style = new PIXI.TextStyle({fill:'#f6ba32',fontWeight: 'bold',fontSize: 14});
    const style1 = new PIXI.TextStyle({fill:'#ffffff',fontWeight: 'bold',fontSize: 13});
    const style2 = new PIXI.TextStyle({fill:'#ffffff',fontWeight: 'bold',fontSize: 24});

    const MyAccount = new PIXI.Text('My Account', style2);
    MyAccount.x = 315;
    MyAccount.y = 98;

    const Promotions = new PIXI.Text('Promotions', style2);
    Promotions.x = 555;
    Promotions.y = 98;

    const BringAFriend = new PIXI.Text('Bring-A-Friend', style2);
    BringAFriend.x = 797;
    BringAFriend.y = 100;

    const RPS = new PIXI.Text('RPS', style2);
    RPS.x = 364;
    RPS.y = 100;

    const Name = new PIXI.Text('Name', style);
    Name.x = 100;
    Name.y = 180;

    const Deal = new PIXI.Text('Deals', style);
    Deal.x = 243;
    Deal.y = 180;

    const MaxPlayers = new PIXI.Text('Max Players', style);
    MaxPlayers.x = 364;
    MaxPlayers.y = 180;

    const EntryFee = new PIXI.Text('Entry Fee', style);
    EntryFee.x = 532;
    EntryFee.y = 180;

    const Prize = new PIXI.Text('Prize', style);
    Prize.x = 677;
    Prize.y = 180;

    const ActivePlayers = new PIXI.Text('Active Players', style);
    ActivePlayers.x = 773;
    ActivePlayers.y = 180;

    const Registering = new PIXI.Text('Registering', style);
    Registering.x = 941;
    Registering.y = 180;

    const Action = new PIXI.Text('Action', style);
    Action.x = 1109;
    Action.y = 180;
    
    DataGrid.addChild(HeaderH);
    DataGrid.addChild(MyAccount);
    DataGrid.addChild(Promotions);
    DataGrid.addChild(BringAFriend);
    DataGrid.addChild(Header);
    DataGrid.addChild(Name);
    DataGrid.addChild(Deal);
    DataGrid.addChild(MaxPlayers);
    DataGrid.addChild(EntryFee);
    DataGrid.addChild(Prize);
    DataGrid.addChild(ActivePlayers);
    DataGrid.addChild(Registering);
    DataGrid.addChild(Action);
    const lobbyspr = new PIXI.Sprite(this.lobbytable);
    this.RenderData(param, DataGrid);
    this.container.addChild(lobbyspr);
    this.container.addChild(DataGrid);
    
  }

  private RenderData(param: [Games], DataGrid)
  {
    console.log("onClick param.length  = " + param.length);
    const lobbyGrid = new PIXI.Container();
    const style1 = new PIXI.TextStyle({fill:'#ffffff',fontWeight: 'bold',fontSize: 13});
    for(var i:number = 0; i < param.length; ++i)
    {
        const lobbyspr = new PIXI.Sprite();
        //console.log("onClick param  = " + param[i]);
        const Header = new PIXI.Graphics();
        lobbyspr.y = i * 51;
        const name = new PIXI.Text(param[i].game_title, style1);
        name.x = 25;
        name.y = 20;

        const deals = new PIXI.Text(param[i].deals.toString(), style1);
        deals.x = 200;
        deals.y = 20;

        const maxPlayers = new PIXI.Text(param[i].seats.toString(), style1);
        maxPlayers.x = 350;
        maxPlayers.y = 20;

        const entryFee = new PIXI.Text(param[i].entry_fee.toString(), style1);
        entryFee.x = 485;
        entryFee.y = 20;

        const prize = new PIXI.Text(param[i].pool_deal_prize.toString(), style1);
        prize.x = 625;
        prize.y = 20;

        const activePlayers = new PIXI.Text("0", style1);
        activePlayers.x = 755;
        activePlayers.y = 20;
        const Registering = new PIXI.Text("0", style1);
        Registering.x = 920;
        Registering.y = 20;

        var playNow = PIXI.Texture.from("./../src/Assets/img/cash.png");
        const playNowspr = new PIXI.Sprite(playNow);
        playNowspr.x = 1220;
        playNowspr.y = 13;
        playNowspr.scale.x = 0.45;
        playNowspr.scale.y = 0.45;
        
        Header.beginFill(0x0c0015,((i%2) * 1));//(0x0c0015);(0xDE3249) ((i%2) * 1)
        Header.drawRect(0, 0, 1159, 51);
        Header.endFill();
        Header.lineStyle(2, 0xFF00FF, 1);

        lobbyspr.addChild(Header);
        lobbyspr.addChild(name);
        lobbyspr.addChild(deals);
        lobbyspr.addChild(maxPlayers);
        lobbyspr.addChild(entryFee);
        lobbyspr.addChild(prize);
        lobbyspr.addChild(activePlayers);
        lobbyspr.addChild(Registering);
        lobbyspr.addChild(playNowspr);
        lobbyGrid.addChild(lobbyspr);
    }
    lobbyGrid.x = 60;
    lobbyGrid.y = 239;
    DataGrid.addChild(lobbyGrid);
    /*
    console.log("onClick (i)  = " + (i));
        console.log("onClick (i%2)  = " + (i%2));
        console.log("onClick (i%2)*1  = " + (i%2) * 1);*/
  }
}

