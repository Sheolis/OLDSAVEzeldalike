class AttSprite extends Phaser.Physics.Arcade.Sprite{ // cette classe permet de pouvoir frapper avec un sprite lié à une entitée et non avec l'entitée elle même
    constructor(scene, x, y, asset, weapon){
    //Private
        var _weapon = weapon; // classe Objet
        var _asset = asset;

        super(scene, x, y, _asset);
        scene.add.existing(this);
    //Public
        this.getWeapon = function(){return _weapon};

        this.orientate = function(orientation){ //take entitee.getOrientation in argument
          //debugger;
          if( orientation == "up"){this.setRotation(Phaser.Math.DegToRad(270)).setSize(this.getBounds()["width"], this.getBounds()["height"]);}
          if( orientation == "right"){this.setRotation(Phaser.Math.DegToRad(0));}
          if( orientation == "down"){this.setRotation(Phaser.Math.DegToRad(90)).setSize(this.getBounds()["width"], this.getBounds()["height"]);}
          if( orientation == "left"){this.setRotation(Phaser.Math.DegToRad(180));}
        };
    }
}
