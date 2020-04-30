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

}

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> CREATE
create(){
  this.menuMode = false;

  // WALLS
  walls = this.physics.add.staticGroup();
  walls.create(51,851,'wall00');
  walls.create(1099,-99,'wall01');
  walls.create(2145,851,'wall02');
  walls.create(549,99.5,'wall03');
  walls.create(400,588,'wall04');
  walls.create(400,588,'wall05');
  walls.create(400,588,'wall06');
  walls.create(400,588,'wall07');
  walls.create(400,588,'wall08');
  walls.create(400,588,'wall09');
  walls.create(400,588,'wall10');
  walls.create(400,588,'wall11');
  walls.create(400,588,'wall12');
  walls.create(400,588,'wall13');
  walls.create(400,588,'wall14');
  walls.create(400,588,'wall15');
  walls.create(400,588,'wall16');
  walls.create(400,588,'wall17');
  walls.create(400,588,'wall18');
  walls.create(400,588,'wall19');
  walls.create(400,588,'wall20');
  walls.create(400,588,'wall21');
  walls.create(400,588,'wall22');
  walls.create(400,588,'wall23');
  walls.create(400,588,'wall24');
  walls.create(400,588,'wall25');
  walls.create(400,588,'wall26');

  this.spear = new Objet('Spear', 12, 'spear', 103, 12, 0, 1000, -10, 0, 0, 10, 'preshot', 'att400x50', 'spearAtt');
  this.hammer = new Objet('Hammer', 12, 'hammer', 300, 12, 0, 1000, -10, 0, 0, 10, 'preshot', 'att400x400', 'att');
  this.bag = new Inventory(this, 100, 'inventory', [this.hammer, this.spear], 140.57, 223.541, 'cursorInventory', 100, 2, 4, 2, 0, 0 );
  this.shop = new Boutique(this, 100, 'shop', [this.hammer, this.spear], 541, 223.541, 'cursorInventory', 100, 2, 4, 2, 0, 0);
  this.joueur = new Joueur(this, 100, 100, 100, 10, 400, 42, 'square', [this.spear]);
  this.joueur.setDepth(5);


  this.anims.create({
    key:'walkJoueur',
    frames: this.anims.generateFrameNumbers('att400x400', {start: 0, end: 5}),
    frameRate: 24,
    repeat: 0
  });
  this.anims.create({
    key:'idleJoueur',
    frames: this.anims.generateFrameNumbers('playerFront', {start: 2, end: 5}),
    frameRate: 3,
    repeat: -1
  });
  this.anims.create({
    key:'attJoueur',
    frames: this.anims.generateFrameNumbers('att400x400', {start: 0, end: 5}),
    frameRate: 24,
    repeat: 0
  });


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
              this.bag.select(this.cursor.getPositionX(), this.cursor.getPositionY());
              this.bag.close();
              this.menuMode = false;
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
  this.boss = new Boss( this, 400, 300, 400, 10, 200, 42, 'bigSquare', [this.hammer]);
  this.boss.setDepth(4);
  //this.physics.add.overlap(this.joueur, this.boss , this.joueur.hurt);
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


  //this.physics.add.overlap(this.joueur, this.zombies, function(joueur,zombie){ console.log(zombie.)})
}

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> UPDATE
  update(){
    this.joueur.update();
  }//END UPDATE
  }//END SCENE
