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
        var _invincibility = false;
        var _canAct = true;

        var _orientation;

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
              _orientation = 'up';
        }
        this.moveDown = function(){
            this.body.velocity.y = _speed;
            _orientation = 'down';
        }
        this.moveLeft = function(){
            this.body.velocity.x = - _speed;
            _orientation = 'left';
        }
        this.moveRight = function(){
            this.body.velocity.x = _speed;
            _orientation = 'right';
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

        this.immobilize = function(length){
            //var vX = this.body.velocity.x;
            //var vY = this.body.velocity.y;
            this.body.velocity.x = 0;
            this.body.velocity.y = 0;
            //scene.time.addEvent({delay: length, callback: function(){this.body.velocity.x = vX; this.body.velocity.y = vY}, callbackScope: this, loop: false})
        }

        this.getOrientation = function(){return _orientation};
        this.getCanAct = function(){return _canAct};
        this.setCanAct = function(statue){ _canAct = statue;};
        this.setSpeed = function(speed){ _speed = speed};
        this.getSpeed = function(){ return _speed};

        this.hurt = function(entitee, opponent){
              if(!_invincibility){
                  console.log(_pv);
                  _pv += opponent.getWeapon().getPvMod();
                  console.log(_pv);
                  _invincibility = true;
                  scene.time.addEvent({delay: 500, callback: function(){_invincibility = false}, loop: false});
              }
        }


    }//END CONSTRUCTOR
}//END ENTITEE
