class Joueur extends Entitee{
    constructor(scene, x, y, pv, mana, speed, poise, asset, weapon){

 // tableau d'objets
              var _weapon = weapon;
              var _hitX ;
              var _hitY ;
        	    //mortVictoire()
              //amelioration()

              super(scene, x, y, pv, mana, speed, poise, asset);//, animIdle, animMvt, animAction, animDeath)

              this.hitPoint = function(){//determine where do the boss hit;
                  if( this.getOrientation() == 'up'){_hitX = this.body.center.x; _hitY= this.body.center.y - _weapon.getRange()}
                  if( this.getOrientation() == 'right'){_hitX = this.body.center.x + _weapon.getRange(); _hitY= this.body.center.y }
                  if( this.getOrientation() == 'down'){_hitX = this.body.center.x; _hitY= this.body.center.y + _weapon.getRange()}
                  if( this.getOrientation() == 'left'){_hitX = this.body.center.x - _weapon.getRange(); _hitY= this.body.center.y}
              }

              this.attaque = function(){
                  if(this.getCanAct()){
                    this.hitPoint();
                    this.attSprite =  new AttSprite(scene, _hitX, _hitY, _weapon.getSpriteAtt(), _weapon);
                    this.attSprite.setDepth(8);
                    scene.physics.world.enableBody(this.attSprite);
                    this.attSprite.orientate(this.getOrientation());
                    this.attSprite.anims.play(_weapon.getAnimAtt(), true);
                    scene.physics.add.overlap(scene.boss, this.attSprite, scene.boss.hurt); // la on a un pb, on lui dit qu'il ne peut frapper que le joueur
                    this.enterCooldwon(500);
                    this.attSprite.on('animationcomplete', function(){ this.attSprite.destroy(scene); }, this);
                  }
              }

              this.enterCooldwon = function(length){
                  this.setCanAct(false);
                  scene.time.addEvent({delay: length, callback: function(){this.setCanAct(true);}, callbackScope: this, loop: false})
              }

              this.dash = function(){
                  //this.setSpeed(this.getSpeed() + 500);
                  //scene.time.addEvent({delay: 500, callback: function(){this.setSpeed(this.getSpeed() - 500);}, callbackScope: this, loop: false});
              }
              this.getWeapon = function() {return _weapon};
              this.setWeapon = function(weapon) { _weapon = weapon};




          }//END CONSTRUCTOR
      }//END JOUEUR
