class AttSprite extends Phaser.Physics.Arcade.Sprite{ // cette classe permet de pouvoir frapper avec un sprite lié à une entitée et non avec l'entitée elle même
    constructor(scene, x, y, asset, weapon){
    //Private
        var _weapon = weapon; // classe Objet
        var _asset = asset;

        super(scene, x, y, _asset);
        scene.add.existing(this);
    //Public
        this.getWeapon = function(){return _weapon};
    }
}
