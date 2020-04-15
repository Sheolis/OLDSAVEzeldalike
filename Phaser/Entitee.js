/*class Entitee extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, hp, mana, speed, poise, asset, animIdle, animMvt, animAction, animDeath){
        var _hp = hp;
        var _hpMax = hp;
        var _mana = mana;
        var _manaMax = mana;
        var _speed = speed;
        var _poise = poise;
        var _asset = asset;
        var _animIdle = animIdle;
        var _animMvt = animMvt;
        var _animAction = animAction;
        var _animDeath = animDeath;

        super(scene, x, y, _asset);
    }
}*/

class Entitee extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, asset){

        var _asset = asset;
        console.log(_asset);

        super(scene, x, y, _asset);
    }
}
