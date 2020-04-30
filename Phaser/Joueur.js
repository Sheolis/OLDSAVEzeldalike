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
                  if(this.body.velocity.y != 0 || this.body.velocity.x != 0){
                      var pot = 3;
                      var dir = this.getOrientation();
                      this.disableMovement();
                      if(dir == 'up'){this.body.velocity.y = - this.getSpeed() * pot;}
                      if(dir == 'down'){this.body.velocity.y = this.getSpeed()* pot;}
                      if(dir == 'left'){this.body.velocity.x = - this.getSpeed() * pot;}
                      if(dir == 'right'){this.body.velocity.x = this.getSpeed() * pot;}
                      scene.time.addEvent({delay: 200, callback: function(){this.immobilize(); this.enableMovement();}, callbackScope: this, loop: false});

                  }
              }

              this.disableMovement = function(){
                  scene.keyZd.enabled = false;
                  scene.keyZu.enabled = false;
                  scene.keySd.enabled = false;
                  scene.keySu.enabled = false;
                  scene.keyQd.enabled = false;
                  scene.keyQu.enabled = false;
                  scene.keyDu.enabled = false;
                  scene.keyDd.enabled = false;
                  scene.keySPACE.enabled = false;
              }

              this.enableMovement = function(){
                  scene.keyZd.enabled = true;
                  scene.keyZu.enabled = true;
                  scene.keySd.enabled = true;
                  scene.keySu.enabled = true;
                  scene.keyQd.enabled = true;
                  scene.keyQu.enabled = true;
                  scene.keyDu.enabled = true;
                  scene.keyDd.enabled = true;
                  scene.keySPACE.enabled = true;
              }
              this.getWeapon = function() {return _weapon};
              this.setWeapon = function(weapon) { _weapon = weapon};




          }//END CONSTRUCTOR
      }//END JOUEUR
