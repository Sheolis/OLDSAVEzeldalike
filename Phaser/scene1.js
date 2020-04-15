class Scene1 extends Phaser.Scene{
    constructor() {
        super("Scene1")
        this._joueur = "bob";
      }
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> INIT
init(){
}

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> PRELOAD
preload(){
    this.load.image("square","_assets/47x48.png");
    this.load.image("bigSquare","_assets/169x195.png");
}

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> CREATE
create(){
  this.joueur = new Entitee(this, 100, 100, 100, 10, 200, 42, "square");
  this.hammer = new Objet("Hammer", 12, 12, 12, 12, 0, -10, 0, 10, "empty", "empty");
  //this._joueur.enableBody(false, 100, 100, false, false);
  this.input.keyboard.on('keydown-Z', this.joueur.moveUp, this.joueur);
  this.input.keyboard.on('keyup-Z', this.joueur.stopUp, this.joueur);
  this.input.keyboard.on('keydown-S', this.joueur.moveDown, this.joueur);
  this.input.keyboard.on('keyup-S', this.joueur.stopDown, this.joueur);
  this.input.keyboard.on('keydown-Q', this.joueur.moveLeft, this.joueur);
  this.input.keyboard.on('keyup-Q', this.joueur.stopLeft, this.joueur);
  this.input.keyboard.on('keydown-D', this.joueur.moveRight, this.joueur);
  this.input.keyboard.on('keyup-D', this.joueur.stopRight, this.joueur);

  this.input.keyboard.on('keydown-P', this.joueur.hurt, this.joueur, this.hammer);
  this.joueur.hurt(this.hammer);
}

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> UPDATE
update(){

}//END UPDATE



}//END SCENE
