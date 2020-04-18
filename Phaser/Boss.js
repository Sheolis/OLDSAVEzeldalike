class Boss extends Entitee{
    constructor(scene, x, y, pv, mana, speed, poise, asset, skills){ //, animIdle, animMvt, animAction, animDeath

        var _skills = skills; // on va n'en utiliser qu'un pour le moment
        var _weapon = _skills[0];
        var _moveLimit = 150;// distance maximum accessible par le boss dans toutes les directions
        var _hitX ;
        var _hitY ;
  	    //mortVictoire()
        //amelioration()

        super(scene, x, y, pv, mana, speed, poise, asset);//, animIdle, animMvt, animAction, animDeath)

        this.hitPoint = function(){//determine where do the boss hit;
            if( this.getOrientation() == "up"){console.log("hi"); _hitX = this.body.center.x; _hitY= this.body.center.y - _weapon.getRange()}
            if( this.getOrientation() == "right"){_hitX = this.body.center.x + _weapon.getRange(); _hitY= this.body.center.y }
            if( this.getOrientation() == "down"){_hitX = this.body.center.x; _hitY= this.body.center.y + _weapon.getRange()}
            if( this.getOrientation() == "left"){_hitX = this.body.center.x - _weapon.getRange(); _hitY= this.body.center.y}
        }

        this.preshot = function(){
            this.hitPoint();
            scene.preshotSprite = scene.add.sprite( _hitX, _hitY, _weapon.getAnimZone());
            scene.preshotSprite.setAlpha(0.5);
            scene.preshotSprite.anims.play(_weapon.getAnimZone(), true);
            scene.preshotSprite.on('animationcomplete', function(){ scene.preshotSprite.destroy(1); }, scene);
            scene.time.addEvent({
                delay: _weapon.getLag(),
                callback: this.attaque,
                callbackScope: this,
                loop: false
              });
        }

        this.attaque = function(){
            scene.attSprite =  new AttSprite(scene, _hitX, _hitY, _weapon.getSpriteAtt(), _weapon);

            scene.physics.world.enableBody(scene.attSprite);
            scene.attSprite.anims.play(_weapon.getAnimAtt(), true);
            scene.physics.add.overlap(scene.joueur, scene.attSprite, scene.joueur.hurt); // la on a un pb, on lui dit qu'il ne peut frapper que le joueur
            scene.attSprite.on('animationcomplete', function(){ scene.attSprite.destroy(scene); }, scene);
        }

        this.getWeapon = function() {return _weapon};

        this.move = function() {///!\ ceci délimite une zone d'action carrée
            //pbu dir = up
            var pbU = (25 / _moveLimit) * (this.body.center.y - y) + 25;  //25% de chances d'aller dans cette dir si perso au centre
            //pbr dir = right
            var pbR = (25 / _moveLimit) * (x - this.body.center.x) + 25;
            //pbd dir = down
            var pbD = (25 / _moveLimit) * (y - this.body.center.y) + 25;
            //pbl dir = left
            var pbL = (25 / _moveLimit) * (this.body.center.x - x) + 25;
            //console.log(this.body.center.y - y, x - this.body.center.x, y - this.body.center.y, this.body.center.x - x);
            //console.log(pbU, pbR, pbD, pbL);
            var dir = Phaser.Math.RND.frac()*100;
            //console.log(dir);
            if (0<= dir && dir < pbU){this.moveUp()}
            if (pbU<= dir && dir < pbU+pbR){this.moveRight()}
            if (pbU+pbR<= dir && dir < pbU+pbR+pbD){this.moveDown()}
            if (pbU+pbR+pbD<= dir && dir <= 100){this.moveLeft()}
            scene.time.addEvent({
                delay: 1000,
                callback: this.stop,
                callbackScope: this,
                loop: false
              });

        }

        this.stop = function(){
            this.body.velocity.y = 0;
            this.body.velocity.x = 0;
            this.preshot();
        }
    }//END CONSTRUCTOR
}//END BOSS
