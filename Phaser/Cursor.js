class Cursor extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, x, y, asset, movementRange){

        var _x = x;
        var _y = y;


        super(scene, x, y, asset);
        scene.add.existing(this);
        this.setDepth(11);
        this.setVisible(false);

        this.moveUp = function(){
            _y = _y - movementRange;
            this.setPosition(_x, _y);
        }
        this.moveDown = function(){
            _y = _y + movementRange;
            this.setPosition(_x, _y);
        }
        this.moveLeft = function(){
            _x = _x - movementRange
            this.setPosition(_x, _y);
        }
        this.moveRight = function(){
            _x = _x + movementRange
            this.setPosition(_x, _y);
        }


        this.bounds = function(x, y)


    }//END CONSTRUCTOR
}//END CLASS
