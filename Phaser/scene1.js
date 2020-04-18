class Scene1 extends Phaser.Scene{
    constructor() {
        super("Scene1")
        var _isInventoryOpen = false;
      }
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> INIT
init(){
}

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> PRELOAD
preload(){
    this.load.image("bigSquare","_assets/196x195.png");
    this.load.spritesheet("sq400x400","_assets/400x400.png",{frameWidth: 400, frameHeight: 400});
    this.load.spritesheet("att400x400","_assets/400x400att.png",{frameWidth: 400, frameHeight: 400});
    this.load.spritesheet("att400x50","_assets/400x50att.png",{frameWidth: 400, frameHeight: 50});
    this.load.spritesheet("square","_assets/47x48.png",{frameWidth: 47, frameHeight: 48});
    this.load.image("inventory", "_assets/protoInventory.png");
    this.load.spritesheet("cursorInventory", "_assets/cursorInventory81x81.png", {frameWidth: 81, frameHeight: 81})
}

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> CREATE
create(){
  this.menuMode = false;

  this.bag = new Inventory(this, 100, "inventory", [this.hammer, this.spear]);
  this.bag.setDepth(10);
  this.hammer = new Objet("Hammer", 12, 300, 12, 0, 1000, -10, 0, 0, 10, "preshot", "att400x400", "att");
  this.spear = new Objet("Spear", 12, 103, 12, 0, 1000, -10, 0, 0, 10, "preshot", "att400x50", "spearAtt");
  this.joueur = new Joueur(this, 100, 100, 100, 10, 200, 42, "square", [this.hammer]);
  this.joueur.setDepth(5);



  //INPUTS JOUEUR
  this.input.keyboard.on(
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
  this.input.keyboard.on('keydown-Z', function(){if(!this.menuMode){this.joueur.moveUp()}}, this);
  this.input.keyboard.on('keyup-Z', this.joueur.stopUp, this.joueur);
  this.input.keyboard.on('keydown-S', function(){if(!this.menuMode){this.joueur.moveDown()}}, this);
  this.input.keyboard.on('keyup-S', this.joueur.stopDown, this.joueur);
  this.input.keyboard.on('keydown-Q', function(){if(!this.menuMode){this.joueur.moveLeft()}else{}}, this);
  this.input.keyboard.on('keyup-Q', this.joueur.stopLeft, this.joueur);
  this.input.keyboard.on('keydown-D', function(){if(!this.menuMode){this.joueur.moveRight()}}, this);
  this.input.keyboard.on('keyup-D', this.joueur.stopRight, this.joueur);
  this.input.keyboard.on('keydown-SPACE', this.joueur.attaque, this.joueur);


  //BOSS
  this.boss = new Boss( this, 400, 300, 400, 10, 200, 42, "bigSquare", [this.hammer]);
  this.boss.setDepth(4);
  this.physics.add.collider(this.joueur,this.boss);
  //this.physics.add.overlap(this.joueur, this.boss , this.joueur.hurt);
  this.anims.create({
  		key:"att",
  		frames: this.anims.generateFrameNumbers("att400x400", {start: 0, end: 5}),
  		frameRate: 24,
  		repeat: 0
  	});
  this.anims.create({
  		key:"preshot",
  		frames: this.anims.generateFrameNumbers("sq400x400", {start: 0, end: 0}),
  		frameRate: 1,
  		repeat: 0
  	});
  this.anims.create({
    key:"spearAtt",
    frames: this.anims.generateFrameNumbers("att400x50", {start: 0, end: 4}),
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
