class Boss extends Entitee{
    constructor(scene, x, y, pv, mana, speed, poise, asset, skills){ //, animIdle, animMvt, animAction, animDeath

        var _skills = skills; // on va n'en utiliser qu'un pour le moment
        var _weapon = _skills[0];
  	    //mortVictoire()
        //amelioration()

        super(scene, x, y, pv, mana, speed, poise, asset);//, animIdle, animMvt, animAction, animDeath)

        this.attaque = function(target){
            //var spectre = spectres.create( spawn_spot[i_spawn][0], spawn_spot[i_spawn][1], 'spectre').setSize(63,94).setOffset(3,66);
            //target.hurt(skills);
        }

        this.getWeapon = function() {return _weapon};

    }//END CONSTRUCTOR
}//END BOSS
