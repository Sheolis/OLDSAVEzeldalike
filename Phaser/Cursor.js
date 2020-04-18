class Cursor extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, x, y, asset, movementRange){

        super(scene, x, y, asset);
        scene.add.existing(this);

        /*this.cursor.moveUp = function(){
          this.setPosition(this.getCenter("x"), this.getCenter("y") - movementRange);
        }
        this.cursor.moveDown = function(){
          this.body.velocity.y = _speed;
          _orientation = "down";
        }
        this.cursor.moveLeft = function(){
          this.body.velocity.x = - _speed;
          _orientation = "left";
        }
        this.cursor.moveRight = function(){
          this.body.velocity.x = _speed;
          _orientation = "right";
        }*/


    }//END CONSTRUCTOR
}//END CLASS
