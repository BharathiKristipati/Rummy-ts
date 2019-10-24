import { Game } from './../index';
import * as global from  './../index';
import { Container, Sprite} from "pixi.js";
import { Games } from './../entity/Games';
import { object } from 'prop-types';


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
    private home;
    private container;
    private DataGrid;
    private nOpenGame:number = 0;

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
    cashspr.interactive = true;
    cashspr.buttonMode = true;
    cashspr.on('pointerdown', this.onCash, this);

    const tournamentspr = new PIXI.Sprite(this.tournament);
    tournamentspr.x = 0;
    tournamentspr.y = 317;
    tournamentspr.scale.x = 0.67;
    tournamentspr.scale.y = 0.67;
    tournamentspr.interactive = true;
    tournamentspr.buttonMode = true;
    tournamentspr.on('pointerdown', this.onTournament, this);

    const practicespr = new PIXI.Sprite(this.practice);
    practicespr.x = 0;
    practicespr.y = 464;
    practicespr.scale.x = 0.67;
    practicespr.scale.y = 0.67;
    practicespr.interactive = true;
    practicespr.buttonMode = true;
    practicespr.on('pointerdown', this.onPractice, this);
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

  private onTournament(event)
  {
    this.strcurrencyType = "tournament";
  }

  private onPractice(event)
  {
    this.strcurrencyType = "practice";
  }

  private onCash(event)
  {
    this.strcurrencyType = "cash";
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
    var arrHeaderText:string[] = [];
    var arrDataGridHeaderText:string[] = [];
    arrHeaderText = ['My Account', 'Promotions', 'Bring-A-Friend', 'RPS'];
    if(evt.target.name == "deal")
    {
      arrDataGridHeaderText = ['Name','Deals','Max Players','Entry Fee','Prize','Active Players','Registering','Action']
      this.RenderLobbyTables(global.game.getGameConfig().getlobbyData(evt.target.name, this.strcurrencyType), "Deal", arrHeaderText,arrDataGridHeaderText);
      //console.log("gottttttt******if(evt == this.dealspr)***************** it ");
    }
    if(evt.target.name == "pool")
    {
      arrDataGridHeaderText = ['Name','Type','Max Players','Entry Fee','Prize','Active Players','Registering','Action']
      this.RenderLobbyTables(global.game.getGameConfig().getlobbyData(evt.target.name, this.strcurrencyType), "Pool", arrHeaderText,arrDataGridHeaderText);
      //console.log("gottttttt**********if(evt.currentTarget == this.dealspr)************* it ");
    }
    if(evt.target.name == "point")
    {
      arrDataGridHeaderText = ['Name','Decks','Max Players','Min- Entry','Prize','Active Players','Registering','Action']
      this.RenderLobbyTables(global.game.getGameConfig().getlobbyData(evt.target.name, this.strcurrencyType), "Point",arrHeaderText,arrDataGridHeaderText);
      //console.log("gottttttt********if(evt.target == this.dealspr)*************** it ");
    }
  }

  private RenderLobbyTables(param, strType:string, arrHeader:string[] = [], arrDataGridHeader:string[] = [])
  {
    //this.lobbytable = PIXI.Texture.from("./../src/Assets/img/Lobby-Table.jpg");
    console.log("Lobby exist?" + this.container.getChildByName(strType+"-"+this.strcurrencyType));
    const startLobby = this.container.getChildByName("Start");
    startLobby.visible = false;
    if(this.container.getChildByName(strType) != null)
    {
      this.DataGrid = this.container.getChildByName(strType);
      this.DataGrid.visible = true;
      const home = this.container.getChildByName("home");
      home.visible = false
      return;
    }
    const DataGrid = new PIXI.Container();
    DataGrid.name = strType+"-"+this.strcurrencyType;
    const Header = new PIXI.Graphics();
    Header.beginFill(0x0c0015);//(0x0c0015);(0xDE3249)
    Header.drawRect(60, 137, 1159, 102);
    Header.endFill();
    Header.lineStyle(2, 0xFF00FF, 1);
    

    const HeaderH = new PIXI.Graphics();
    HeaderH.beginFill(0x210237, 0.9);//0x650A5A 0x210237
    HeaderH.drawRoundedRect(60, 83, 1159, 554, 14);
    HeaderH.endFill();
    DataGrid .addChild(HeaderH);
    
    // Rectangle
    const style = new PIXI.TextStyle({fill:'#f6ba32',fontWeight: 'bold',fontSize: 14});
    //const style1 = new PIXI.TextStyle({fill:'#ffffff',fontWeight: 'bold',fontSize: 13});
    const style2 = new PIXI.TextStyle({fill:'#ffffff',fontWeight: 'bold',fontSize: 24});
    var arrHeaderXpos:number[] = [315, 555, 797, 1064];
    for(var j:number = 0; j < arrHeader.length; ++j)
    {
      console.log("arrHeader[j] = " + arrHeader[j]);
      const txtHeader = new PIXI.Text(arrHeader[j], style2);
      txtHeader.x = arrHeaderXpos[j];
      txtHeader.y = 100;
      DataGrid .addChild(txtHeader);
    }
    DataGrid .addChild(Header);
    /*const MyAccount = new PIXI.Text('My Account', style2);
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
    RPS.y = 100;*/
    var arrXpos:number[] = [100, 243, 364,532, 677,773,941,1109];
    for(var i:number = 0; i < arrDataGridHeader.length; ++i)
    {
      const text = new PIXI.Text(arrDataGridHeader[i], style);
      text.x = arrXpos[i];
      text.y = 180;
      DataGrid .addChild(text);
    }

    /*const Name = new PIXI.Text('Name', style);
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
    Action.y = 180;*/
    
   
    // DataGrid.addChild(MyAccount);
    // DataGrid.addChild(Promotions);
    // DataGrid.addChild(BringAFriend);
   
    /*DataGrid.addChild(Name);
    DataGrid.addChild(Deal);
    DataGrid.addChild(MaxPlayers);
    DataGrid.addChild(EntryFee);
    DataGrid.addChild(Prize);
    DataGrid.addChild(ActivePlayers);
    DataGrid.addChild(Registering);
    DataGrid.addChild(Action);*/
    //const lobbyspr = new PIXI.Sprite(this.lobbytable);
    //this.container.addChild(lobbyspr);
    this.home = PIXI.Texture.from("./../src/Assets/img/cards.png");
    const homespr = new PIXI.Sprite(this.home);
    homespr.name = "home";
    homespr.x = 500;
    homespr.y = 20;
    homespr.scale.x = 0.10;
    homespr.scale.y = 0.10;
    homespr.interactive = true;        
    homespr.buttonMode = true;
    homespr.on('pointerdown', this.MoveBack, this);
    this.RenderData(param,  DataGrid , strType);
    this.container.addChild(homespr);
    this.container.addChild(DataGrid);
    this.DataGrid = DataGrid;
    
  }

  private MoveBack(event)
  {
    const startLobby = this.container.getChildByName("Start");
    startLobby.visible = true;
    this.DataGrid.visible = false;
    const home = this.container.getChildByName("home");
    home.visible = false;
   
  }

  private RenderData(param: [Games], DataGrid, strType:string)
  {
    console.log("onClick param.length  = " + param.length);
    const lobbyGrid = new PIXI.Container();
    const style1 = new PIXI.TextStyle({fill:'#ffffff',fontWeight: 'bold',fontSize: 13});
    var arrXpos:number[] = [40, 200, 350,485, 625,755,920,1050];
    const Mask = new PIXI.Graphics();
    Mask.beginFill(0x210237, 0.5);//0x650A5A 0x210237
    Mask.drawRoundedRect(60, 83, 1159, 554, 14);
    Mask.endFill();
    const scroll = new PIXI.Graphics();
    scroll.beginFill(0xcccccc, 0.2);//0x650A5A 0x210237
    scroll.drawRect(1202, 241, 2, 395);
    scroll.endFill();
    const scrollbar = new PIXI.Graphics();
    scrollbar.beginFill(0xcccccc, 0.8);//0x650A5A 0x210237
    scrollbar.drawRoundedRect(1198, 241, 10, 40, 1);
    scrollbar.endFill();
    scrollbar.interactive = true;
    scrollbar.buttonMode = true;
    scrollbar
        .on('pointerdown', this.onDragStart, this)
        .on('pointerup', this.onDragEnd, this)
        .on('pointerupoutside', this.onDragEnd, this)
        .on('pointermove', this.onDragMove, this);
    lobbyGrid.mask = Mask;
    var arrText:string[];
    for(var i:number = 0; i < param.length; ++i)
    {
        const lobbyspr = new PIXI.Sprite();
        
        if(strType == "Deals")
        {
          arrText = [param[i]["game_title"], param[i]["deals"].toString(), 
          param[i]["seats"].toString(),param[i]["entry_fee"].toString(), 
          param[i]["pool_deal_prize"].toString(),"0","0"];
        }
        else if(strType == "Pool"){
          arrText = [param[i]["game_title"], param[i]["pool_game_type"].toString(), 
          param[i]["seats"].toString(),param[i]["entry_fee"].toString(), 
          param[i]["pool_deal_prize"].toString(),"0","0"];
        }
        else{
          arrText = [param[i]["game_title"], param[i]["number_of_deck"].toString(), 
          param[i]["seats"].toString(),param[i]["entry_fee"].toString(), 
          param[i]["pool_deal_prize"].toString(),"0","0"];
        }
       
        console.log("onClick param  = " + param[i]);
        const Header = new PIXI.Graphics();
        lobbyspr.y = i * 51;
        lobbyspr.addChild(Header);
        for(var j:number = 0; j < arrText.length; ++j)
        {
          const text = new PIXI.Text(arrText[j], style1);
          text.x = arrXpos[j];
          text.y = 20;
          lobbyspr.addChild(text);
        }
        var playNow = PIXI.Texture.from("./../src/Assets/img/play-now.png");
        const playNowspr = new PIXI.Sprite(playNow);
        playNowspr.x = 1050;
        playNowspr.y = 15;
        playNowspr.scale.x = 0.45;
        playNowspr.scale.y = 0.45;
        playNowspr.interactive = true;
        
        playNowspr.buttonMode = true;
        var oToken:Object = new Object();
        oToken["token"] = param[i]["token"]
        playNowspr.on('pointerdown', this.openGame, oToken);
        
        Header.beginFill(0x0c0015,((i%2) * 1));//(0x0c0015);(0xDE3249) ((i%2) * 1)
        Header.drawRect(0, 0, 1159, 51);
        Header.endFill();
        Header.lineStyle(2, 0xFF00FF, 1);

        lobbyspr.addChild(playNowspr);
        lobbyGrid.addChild(lobbyspr);
    }
    lobbyGrid.x = 60;
    lobbyGrid.y = 239;
    //DataGrid.addChild(scroll);
    DataGrid.addChild(Mask, lobbyGrid);
    DataGrid.addChild(scroll);
    DataGrid.addChild(scrollbar);
    /*
    console.log("onClick (i)  = " + (i));
        console.log("onClick (i%2)  = " + (i%2));
        console.log("onClick (i%2)*1  = " + (i%2) * 1);*/
  }
  private onDragStart(event)
  {
    console.log("openGame event.target  = " + event.target);
    console.log("openGame event.currentTarget  = " + event.currentTarget);
    event.currentTarget.dragging = true;
    //this.data = event.data;
    //this.alpha = 0.5;
    //this.dragging = true;
  }
  private onDragEnd(event)
  {
    event.currentTarget.dragging = false;
    //this.dragging = true;
  }
  private onDragMove(event)
  {
    if (event.currentTarget.dragging) {
      const newPosition = event.currentTarget.getLocalPosition(event.currentTarget.parent);
      event.currentTarget.x = newPosition.x;
      event.currentTarget.y = newPosition.y;
  }
  }
 

  private openGame(event)
  {
    console.log("openGame event  = " + event);
    console.log("openGame this  = " + this);
    console.log("openGame getOwnPropertyNames this  = " + Object.getOwnPropertyNames(this));
    console.log("openGame getOwnPropertyNames token  = " + this["token"]);
    console.log("openGame getOwnPropertyNames event = " + Object.getOwnPropertyNames(event));
    //window.open("https://rummydesk.com/", );
    //global.game.OpenWindow("https://rummydesk.com/index.php/game_lobby/" + this.nOpenGame);
    global.game.OpenWindow("http://127.0.0.1:5500/" + this);
    //this.nOpenGame++;
  }
}

