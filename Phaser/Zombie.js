class Zombie extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, x, y, asset, pv, id){ //, animIdle, animMvt, animAction, animDeath
        //private
        var _pv = pv;
        var _id = id;

        super(scene, x, y, asset);

        this.getPv = function(){ return _pv};
        this.setPv = function(newPv){ _pv = newPv};
    }//END CONSTRUCTOR
}//END BOSS
