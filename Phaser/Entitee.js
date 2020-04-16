class Entitee extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, x, y, pv, mana, speed, poise, asset,/*, animIdle, animMvt, animAction, animDeath*/){
    //Private
        var _pv = pv;
        var _pvMax = pv;
        var _mana = mana;
        var _manaMax = mana;
        var _speed = speed;
        var _poise = poise;
        var _asset = asset;
        /*
        var _animIdle = animIdle;
        var _animMvt = animMvt;
        var _animAction = animAction;
        var _animDeath = animDeath;
        */

        super(scene, x, y, _asset);

        scene.add.existing(this);
        scene.physics.world.enableBody(this);


    //Public
        this.moveUp = function(){
              this.body.velocity.y = - _speed;
        }
        this.moveDown = function(){
            this.body.velocity.y = _speed;
        }
        this.moveLeft = function(){
            this.body.velocity.x = - _speed;
        }
        this.moveRight = function(){
            this.body.velocity.x = _speed;
        }
        this.stopUp = function(){
            if(this.body.velocity.y == - _speed){
                this.body.velocity.y = this.body.velocity.y + _speed;
            }
        }
        this.stopDown = function(){
            if(this.body.velocity.y ==  _speed){
                this.body.velocity.y = this.body.velocity.y - _speed;
            }
        }
        this.stopLeft= function(){
            if(this.body.velocity.x == - _speed){
                this.body.velocity.x = this.body.velocity.x + _speed;
            }
        }
        this.stopRight = function(){
            if(this.body.velocity.x == _speed){
                this.body.velocity.x = this.body.velocity.x - _speed;
            }
        }


        this.hurt = function(entitee, opponent){

              console.log(_pv);
              console.log(opponent.getWeapon().getName());
              _pv += opponent.getWeapon().getPvMod();
              console.log(_pv);
        }

    }//END CONSTRUCTOR
}//END ENTITEE
