class Objet {
    constructor(name, price, menuAsset, range, cd, ammo, lag, pvMod, manaMod, poiseMod, speedMod, animZone, spriteAtt, animAtt){
        var _name = name;
	      var _price = price;
        var _menuAsset = menuAsset;
	      var _range = range;
	      var _cooldown = cd;
	      var _ammo = ammo;
	      var _direction;
	      var _lag = lag;
	      var _pvMod = pvMod;
	      var _manaMod = manaMod;
	      var _poiseMod = poiseMod;
	      var _speedMod = speedMod;
        var _animZone = animZone;
        var _spriteAtt = spriteAtt;
	      var _animAtt = animAtt;

        this.getName = function(){ return _name};
        this.getPrice = function(){ return _price};
        this.getMenuAsset = function(){ return _menuAsset};
        this.getRange = function(){ return _range};
        this.getCooldown = function(){ return _cooldown};
        this.getAmmo = function(){return _ammo};
        this.getDirection = function(){return _direction};
        this.getLag = function(){return _lag};
        this.getPvMod = function(){return _pvMod};
        this.getManaMod = function(){return _manaMod};
        this.getPoiseMod = function(){return _poiseMod};
        this.getSpeedMod = function(){return _speedMod};
        this.getAnimZone = function(){return _animZone};
        this.getSpriteAtt = function(){return _spriteAtt};
        this.getAnimAtt = function(){return _animAtt};
    }//end constroctor

}//end class
