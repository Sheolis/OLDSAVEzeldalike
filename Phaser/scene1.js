class Scene1 extends Phaser.Scene{
    constructor() {
        super("Scene1")
        var attaques = "cheh";
      }
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> INIT
init(){
}

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> PRELOAD
preload(){
    this.load.image("bigSquare","_assets/169x195.png");
    this.load.spritesheet("sq400x400","_assets/400x400.png",{frameWidth: 400, frameHeight: 400});
    this.load.spritesheet("att400x400","assets/400x400att.png",{frameWidth: 400, frameHeight: 400});
    this.load.image("square","_assets/47x48.png");
}

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> CREATE
create(){


  this.hammer = new Objet("Hammer", 12, 12, 12, 12, 0, -10, 0, 10, "empty", "empty");
  this.joueur = new Entitee(this, 100, 100, 100, 10, 200, 42, "square");
  this.joueur.setDepth(5);

  //this.timer_test = this.time.addEvent({ delay: 1000, callback: this.joueur.hurt, loop: true });

  //INPUTS JOUEUR
  this.input.keyboard.on('keydown-Z', this.joueur.moveUp, this.joueur);
  this.input.keyboard.on('keyup-Z', this.joueur.stopUp, this.joueur);
  this.input.keyboard.on('keydown-S', this.joueur.moveDown, this.joueur);
  this.input.keyboard.on('keyup-S', this.joueur.stopDown, this.joueur);
  this.input.keyboard.on('keydown-Q', this.joueur.moveLeft, this.joueur);
  this.input.keyboard.on('keyup-Q', this.joueur.stopLeft, this.joueur);
  this.input.keyboard.on('keydown-D', this.joueur.moveRight, this.joueur);
  this.input.keyboard.on('keyup-D', this.joueur.stopRight, this.joueur);
  //this.input.keyboard.on('keydown-P', this.joueur.hurt, this.joueur);


  //BOSS
  this.boss = new Boss( this, 400, 400, 400, 10, 200, 42, "sq400x400", [this.hammer]);
  this.physics.add.overlap(this.joueur, this.boss , this.joueur.hurt);
  /*this.anims.create({
  		key:'att',
  		frames: this.anims.generateFrameNumbers('att400x400', {start: 0, end: 5}),
  		frameRate: 6,
  		repeat: 0
  	});
  this.anims.create({
  		key:'preshot',
  		frames: this.anims.generateFrameNumbers('sq400x400', {start: 0, end: 0}),
  		frameRate: 1,
  		repeat: 0
  	});*/
}

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> UPDATE
update(){

}//END UPDATE



}//END SCENE
