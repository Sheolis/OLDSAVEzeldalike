class Boss extends Entitee{
    constructor(scene, x, y, pv, mana, speed, poise, asset, skills){ //, animIdle, animMvt, animAction, animDeath

        var _skills = skills; // on va n'en utiliser qu'un pour le moment
        var _weapon = _skills[0];
  	    //mortVictoire()
        //amelioration()

        super(scene, x, y, pv, mana, speed, poise, asset);//, animIdle, animMvt, animAction, animDeath)

        this.preshot = function(){
            scene.preshotSprite = scene.add.sprite( x, y, _weapon.getAnimZone());
            scene.preshotSprite.anims.play(_weapon.getAnimZone(), true);
            scene.preshotSprite.on('animationcomplete', function(){ scene.preshotSprite.destroy(1); }, scene);
            scene.time.addEvent({
                delay: _weapon.getLag(),
                callback: this.attaque,
                loop: false
              });
        }

        this.attaque = function(){
            scene.attSprite =  new AttSprite(scene, x, y, _weapon.getSpriteAtt(), _weapon);

            scene.physics.world.enableBody(scene.attSprite);
            scene.attSprite.anims.play(_weapon.getAnimAtt(), true);
            scene.physics.add.overlap(scene.joueur, scene.attSprite, scene.joueur.hurt); // la on a un pb, on lui dit qu'il ne peut frapper que le joueur


            scene.attSprite.on('animationcomplete', function(){ scene.attSprite.destroy(scene); }, scene);
        }

        this.getWeapon = function() {return _weapon};

        this.move = function() {

        }
    }//END CONSTRUCTOR
}//END BOSS
