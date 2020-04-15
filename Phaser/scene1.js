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
}

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> CREATE
create(){
  this._joueur = new Entitee(this, 100, 100, 10, 10, 200, 42, "square");
  //this._joueur.enableBody(false, 100, 100, false, false);
  this.input.keyboard.on('keydown-Z', this._joueur.moveUp, this._joueur);
  this.input.keyboard.on('keyup-Z', this._joueur.stopUp, this._joueur);
  this.input.keyboard.on('keydown-S', this._joueur.moveDown, this._joueur);
  this.input.keyboard.on('keyup-S', this._joueur.stopDown, this._joueur);
  this.input.keyboard.on('keydown-Q', this._joueur.moveLeft, this._joueur);
  this.input.keyboard.on('keyup-Q', this._joueur.stopLeft, this._joueur);
  this.input.keyboard.on('keydown-D', this._joueur.moveRight, this._joueur);
  this.input.keyboard.on('keyup-D', this._joueur.stopRight, this._joueur);
}

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> UPDATE
update(){

}//END UPDATE



}//END SCENE
