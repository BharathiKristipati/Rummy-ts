import { Game } from './../index';
import * as global from  './../index';
import { Container, Sprite} from "pixi.js";
import * as React from 'react';
//import * as Data from "/generator';
import {IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';
//import { Game}


  export class GameView extends Container {
    private bg;
    private deal;
    private points;
    private pool;
    private cash;
    private tournament;
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
    //this.app = PIXI.autoDetectRenderer(this.width, this.height);
    //this.stage = new PIXI.Container();
    /*this.app = new PIXI.Application({
        width: 800, height: 600, backgroundColor: 0x1099bb, resolution: window.devicePixelRatio || 1,
    });
    document.body.appendChild(this.app.view);
    //var game:Game = Game(document.body.getElementsByTagName("Game"));*/
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
      this.RenderLobbyTables();
      //console.log("gottttttt******if(evt == this.dealspr)***************** it ");
    }
    if(evt.target.name == "pool")
    {
      this.RenderLobbyTables();
      //console.log("gottttttt**********if(evt.currentTarget == this.dealspr)************* it ");
    }
    if(evt.target.name == "point")
    {
      this.RenderLobbyTables();
      //console.log("gottttttt********if(evt.target == this.dealspr)*************** it ");
    }
  }

  private RenderLobbyTables()
  {
    this.lobbytable = PIXI.Texture.from("./../src/Assets/img/Lobby-Table.jpg");
    
    const DataGrid = new PIXI.Container();
    const Header = new PIXI.Graphics();
    Header.beginFill(0x0c0015);//(0x0c0015);(0xDE3249)
    Header.drawRect(60, 137, 1157, 102);
    Header.endFill();
    Header.lineStyle(2, 0xFF00FF, 1);

    const HeaderH = new PIXI.Graphics();
    HeaderH.beginFill(0x210237, 0.5);//0x650A5A 0x210237
    HeaderH.drawRoundedRect(60, 83, 1157, 102, 14);
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

   // lobbyspr.x = 0;//13;
    //lobbyspr.y = 0;//13;
    //lobbyspr.scale.x = 0.45;
    //lobbyspr.scale.y = 0.45;
    
    this.container.addChild(lobbyspr);
    this.container.addChild(DataGrid);
    /*const source: any =
        {
            datafields: [
                { name: 'name', type: 'string' },
                { name: 'type', type: 'string' },
                { name: 'calories', type: 'int' },
                { name: 'totalfat', type: 'string' },
                { name: 'protein', type: 'string' }
            ],
            datatype: 'json',
            id: 'id',
            url: 'beverages.txt'
        };
    var lobbyRender:React.PureComponent<{}, IGridProps> = new React.PureComponent<{}, IGridProps>({});
    lobbyRender.state = {
          columns: [
              { text: 'Name', datafield: 'name', width: 250 },
              { text: 'Beverage Type', datafield: 'type', width: 250 },
              { text: 'Calories', datafield: 'calories', width: 180 },
              { text: 'Total Fat', datafield: 'totalfat', width: 120 },
              { text: 'Protein', datafield: 'protein', minwidth: 120 }
          ],
          source: new jqx.dataAdapter(source)
      }*/
  }
}

/*function createGridWithEditing(selector) {
  // prepare the data
  
  let data = generatedata(20);
  let source =
      {
          localdata: data,
          datatype: "array",
          updaterow: function (rowid, rowdata, commit) {
              // synchronize with the server - send update command
              // call commit with parameter true if the synchronization with the server is successful 
              // and with parameter false if the synchronization failder.
              commit(true);
          },
          datafields:
          [
              { name: 'firstname', type: 'string' },
              { name: 'lastname', type: 'string' },
              { name: 'productname', type: 'string' },
              { name: 'available', type: 'bool' },
              { name: 'quantity', type: 'number' },
              { name: 'price', type: 'number' },
              { name: 'date', type: 'date' }
          ]
      };
  let dataAdapter = new $.jqx.dataAdapter(source);

  // initialize jqxGrid

  // initialization options - validated in typescript
  // jqwidgets.GridOptions has generated TS definition
  let options: jqwidgets.GridOptions = {
      width: 850,
      source: dataAdapter,
      editable: true,
      enabletooltips: true,
      selectionmode: 'multiplecellsadvanced',
      columns: [
          { text: 'First Name', columntype: 'textbox', datafield: 'firstname', width: 120 },
          { text: 'Last Name', datafield: 'lastname', columntype: 'textbox', width: 120 },
          { text: 'Product', columntype: 'dropdownlist', datafield: 'productname', width: 195 },
          { text: 'Available', datafield: 'available', columntype: 'checkbox', width: 67 },
          {
              text: 'Ship Date', datafield: 'date', columntype: 'datetimeinput', width: 110, align: 'right', cellsalign: 'right', cellsformat: 'd',
              validation: function (cell: any, value: any) {
                  if (value.toString() == "")
                      return true;

                  let valueD = new Date(1, 1, 1, 1, 1, 1, 1);
                  let year = valueD.getFullYear();
                  if (year >= 2017) {
                      return { result: false, message: "Ship Date should be before 1/1/2017" };
                  }
                  return true;
              }
          },
          {
              text: 'Quantity', datafield: 'quantity', width: 70, align: 'right', cellsalign: 'right', columntype: 'numberinput',
              validation: function (cell: any, value: any) {
                  if (value < 0 || value > 150) {
                      return { result: false, message: "Quantity should be in the 0-150 interval" };
                  }
                  return true;
              },
              createeditor: function (row, cellvalue, editor) {
                  editor.jqxNumberInput({ decimalDigits: 0, digits: 3 });
              }
          },
          {
              text: 'Price', datafield: 'price', align: 'right', cellsalign: 'right', cellsformat: 'c2', columntype: 'numberinput',
              validation: function (cell: any, value: any) {
                  if (value < 0 || value > 15) {
                      return { result: false, message: "Price should be in the 0-15 interval" };
                  }
                  return true;
              },
              createeditor: function (row: Number, cellvalue: any, editor: any) {
                  editor.jqxNumberInput({ digits: 3 });
              }
          }
      ]
  };

  // creates an instance
  let myGrid: jqwidgets.jqxGrid = jqwidgets.createInstance(selector, 'jqxGrid', options);
}*/