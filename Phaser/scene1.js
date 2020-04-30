class Scene1 extends Phaser.Scene{
    constructor() {
        super('Scene1')
        var _isInventoryOpen = false;
      }
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> INIT
init(){
}

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> PRELOAD
preload(){
    this.load.image('bigSquare','_assets/196x195.png');
    this.load.spritesheet('sq400x400','_assets/400x400.png',{frameWidth: 400, frameHeight: 400});
    this.load.spritesheet('att400x400','_assets/400x400att.png',{frameWidth: 400, frameHeight: 400});
    this.load.spritesheet('att400x50','_assets/400x50att.png',{frameWidth: 400, frameHeight: 50});
    this.load.spritesheet('square','_assets/47x48.png',{frameWidth: 47, frameHeight: 48});
    this.load.image('inventory', '_assets/protoInventory.png');
    this.load.image('shop', '_assets/protoShop.png');
    this.load.spritesheet('hammer', '_assets/hammer.png', {frameWidth: 75, frameHeight: 75});
    this.load.spritesheet('spear', '_assets/spear.png', {frameWidth: 75, frameHeight: 75});
    this.load.spritesheet('cursorInventory', '_assets/cursorInventory81x81.png', {frameWidth: 81, frameHeight: 81});
    this.load.spritesheet('joueur','_assets/Characters/personnage55x98.png',{frameWidth: 55, frameHeight: 98});
    this.load.spritesheet('bossIdle','_assets/Characters/bossIdle298x274.png',{frameWidth: 298, frameHeight: 274});
    this.load.spritesheet('bossHit','_assets/Characters/bossHit355x400.png',{frameWidth: 355, frameHeight: 400});
    this.load.spritesheet('bossWalk','_assets/Characters/bossWalk297x277.png',{frameWidth: 297, frameHeight: 277});

    this.load.image('INT_sol', '_assets/INT/INT_sol.png');

    this.load.image('wall00', '_assets/INT/WALLS/wall00.png');
    this.load.image('wall01', '_assets/INT/WALLS/wall01.png');
    this.load.image('wall02', '_assets/INT/WALLS/wall02.png');
    this.load.image('wall03', '_assets/INT/WALLS/wall03.png');
    this.load.image('wall04', '_assets/INT/WALLS/wall04.png');
    this.load.image('wall05', '_assets/INT/WALLS/wall05.png');
    this.load.image('wall06', '_assets/INT/WALLS/wall06.png');
    this.load.image('wall07', '_assets/INT/WALLS/wall07.png');
    this.load.image('wall08', '_assets/INT/WALLS/wall08.png');
    this.load.image('wall09', '_assets/INT/WALLS/wall09.png');
    this.load.image('wall10', '_assets/INT/WALLS/wall10.png');
    this.load.image('wall11', '_assets/INT/WALLS/wall11.png');
    this.load.image('wall12', '_assets/INT/WALLS/wall12.png');
    this.load.image('wall13', '_assets/INT/WALLS/wall13.png');
    this.load.image('wall14', '_assets/INT/WALLS/wall14.png');
    this.load.image('wall15', '_assets/INT/WALLS/wall15.png');
    this.load.image('wall16', '_assets/INT/WALLS/wall16.png');
    this.load.image('wall17', '_assets/INT/WALLS/wall17.png');
    this.load.image('wall18', '_assets/INT/WALLS/wall18.png');
    this.load.image('wall19', '_assets/INT/WALLS/wall19.png');
    this.load.image('wall20', '_assets/INT/WALLS/wall20.png');
    this.load.image('wall21', '_assets/INT/WALLS/wall21.png');
    this.load.image('wall22', '_assets/INT/WALLS/wall22.png');
    this.load.image('wall23', '_assets/INT/WALLS/wall23.png');
    this.load.image('wall24', '_assets/INT/WALLS/wall24.png');
    this.load.image('wall25', '_assets/INT/WALLS/wall25.png');
    this.load.image('wall26', '_assets/INT/WALLS/wall26.png');

    this.load.image('ext', '_assets/EXT/dehors.png');

}

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> CREATE
create(){

  this.menuMode = false;

  this.add.image(1100,3950,'ext');
  this.add.image(1100,950,'INT_sol');
  // WALLS
  this.walls = this.physics.add.staticGroup();
  this.walls.create(51,851,'wall00');
  this.walls.create(1099,-99,'wall01');
  this.walls.create(2145,851,'wall02');
  this.walls.create(549,99.5,'wall03');
  this.walls.create(1350,100,'wall04');
  this.walls.create(1850,150,'wall05');
  this.walls.create(500,400,'wall06');
  this.walls.create(850,450,'wall07');
  this.walls.create(1150,400,'wall08');
  this.walls.create(1350,450,'wall09');
  this.walls.create(1700,500,'wall10');
  this.walls.create(400,1000,'wall11');
  this.walls.create(650,1200,'wall12');
  this.walls.create(850,900,'wall13');
  this.walls.create(1100,1000,'wall14');
  this.walls.create(1350,900,'wall15');
  this.walls.create(1550,1200,'wall16');
  this.walls.create(1800,1000,'wall17');
  this.walls.create(175,1800,'wall18');
  this.walls.create(600,1725,'wall19');
  this.walls.create(650,1650,'wall20');
  this.walls.create(1100,1825,'wall21');
  this.walls.create(975,1725,'wall22');
  this.walls.create(1225,1725,'wall23');
  this.walls.create(1450,1725,'wall24');
  this.walls.create(1550,1650,'wall25');
  this.walls.create(2025,1800,'wall26');

  this.anims.create({
    key:'joueurMvt',
    frames: this.anims.generateFrameNumbers('joueur', {start: 0, end: 1}),
    frameRate: 4,
    repeat: -1
  });
  this.anims.create({
    key:'joueurIdle',
    frames: this.anims.generateFrameNumbers('joueur', {start: 2, end: 5}),
    frameRate: 3,
    repeat: -1
  });
  this.anims.create({
    key:'joueurAction',
    frames: this.anims.generateFrameNumbers('joueur', {start: 6, end: 9}),
    frameRate: 1,
    repeat: 0
  });

  this.spear = new Objet('Spear', 12, 'spear', 103, 12, 0, 1000, -10, 0, 0, 10, 'preshot', 'att400x50', 'spearAtt');
  this.hammer = new Objet('Hammer', 12, 'hammer', 300, 12, 0, 1000, -10, 0, 0, 10, 'preshot', 'att400x400', 'att');
  this.bag = new Inventory(this, 100, 'inventory', [this.hammer, this.spear], 140.57, 223.541, 'cursorInventory', 100, 2, 4, 2, 0, 0 ).setScrollFactor(0);
  this.shop = new Boutique(this, 'shop', [this.hammer, this.spear], 541, 223.541, 'cursorInventory', 100, 2, 4, 2, 0, 0).setScrollFactor(0);
  this.joueur = new Joueur(this, 2062, 100, 100, 10, 400, 42, 'joueur', this.spear, 'joueurIdle', 'joueurMvt', 'joueurAction' ).setSize(55,35).setOffset(0,60);;
  this.joueur.setDepth(5);
  this.cameras.main.startFollow(this.joueur, true, 0.9, 0.9);

  this.physics.add.collider(this.joueur, this.walls);



  //INPUTS JOUEUR

  this.keySHIFT = this.input.keyboard.on(
      'keydown-SHIFT',
      function(){
          if(!this.menuMode){
              this.joueur.dash();
          }
      },
      this
  );
  this.keyE = this.input.keyboard.on(
      'keydown-E',
      function(){
          if(!this.menuMode){
              this.bag.open();
              this.menuMode = true;
          }else{
              this.bag.close();
              this.menuMode = false;
          }
      },
      this
  );
  this.keyF = this.input.keyboard.on(
      'keydown-F',
      function(){
          if(!this.menuMode){
              this.shop.open();
              this.menuMode = true;
          }else{
              this.shop.close();
              this.menuMode = false;
          }
      },
      this
  );
  this.keyENTER = this.input.keyboard.on(
      'keydown-ENTER',
      function(){
          if(this.menuMode){
              if (this.bag.getIsOpen()){
                this.bag.select(this.cursor.getPositionX(), this.cursor.getPositionY());
                this.bag.close();
                this.menuMode = false;
              }
              if (this.shop.getIsOpen()){
                  this.shop.buy(this.cursor.getPositionX(), this.cursor.getPositionY());
              }
          }
      },
      this
  );
  this.keyZd = this.input.keyboard.on(
    'keydown-Z',
    function(){
        if(!this.menuMode){
            this.joueur.moveUp();
        }
        else{
            this.cursor.moveUp();
        }
    },
    this
  );

  this.keyZu = this.input.keyboard.on('keyup-Z', this.joueur.stopUp, this.joueur);
  this.keySd = this.input.keyboard.on('keydown-S', function(){if(!this.menuMode){this.joueur.moveDown();} else{this.cursor.moveDown();}}, this);
  this.keySu = this.input.keyboard.on('keyup-S', this.joueur.stopDown, this.joueur);
  this.keyQd = this.input.keyboard.on('keydown-Q', function(){if(!this.menuMode){this.joueur.moveLeft();} else{this.cursor.moveLeft();}}, this);
  this.keyQu = this.input.keyboard.on('keyup-Q', this.joueur.stopLeft, this.joueur);
  this.keyDd = this.input.keyboard.on('keydown-D', function(){if(!this.menuMode){this.joueur.moveRight();} else{this.cursor.moveRight();}}, this);
  this.keyDu = this.input.keyboard.on('keyup-D', this.joueur.stopRight, this.joueur);
  this.keySPACE = this.input.keyboard.on('keydown-SPACE', function(){this.joueur.attaque(), this.joueur.immobilize(300)}, this);

  //BOSS
  this.anims.create({
    key:'bossMvt',
    frames: this.anims.generateFrameNumbers('bossWalk', {start: 0, end: 13}),
    frameRate: 1,
    repeat: -1
  });
  this.anims.create({
    key:'bossIdle',
    frames: this.anims.generateFrameNumbers('bossIdle', {start: 0, end: 4}),
    frameRate: 1,
    repeat: -1
  });
  this.anims.create({
    key:'bossAction',
    frames: this.anims.generateFrameNumbers('bossHit', {start: 0, end: 9}),
    frameRate: 5,
    repeat: 0
  });

  this.boss = new Boss( this, 1100, 1400, 400, 10, 200, 42, 'bossIdle', [this.hammer], 'bossIdle','bossMvt', 'bossAction');
  this.boss.setDepth(4);
  this.physics.add.collider(this.boss, this.walls);

  this.anims.create({
  		key:'att',
  		frames: this.anims.generateFrameNumbers('att400x400', {start: 0, end: 5}),
  		frameRate: 24,
  		repeat: 0
  	});
  this.anims.create({
  		key:'preshot',
  		frames: this.anims.generateFrameNumbers('sq400x400', {start: 0, end: 0}),
  		frameRate: 1,
  		repeat: 0
  	});
  this.anims.create({
    key:'spearAtt',
    frames: this.anims.generateFrameNumbers('att400x50', {start: 0, end: 4}),
    frameRate: 24,
    repeat: 0
  });

  this.timer_test_move = this.time.addEvent({
      delay: 3000,
      callback: this.boss.move,
      callbackScope: this.boss,
      loop: true
    });

}

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> UPDATE
  update(){
  }//END UPDATE
  }//END SCENE
