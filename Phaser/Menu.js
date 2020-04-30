class Menu extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, appareance, items, xNav, yNav, assetCursor, boxSpacing, nbBoxX, nbBoxY, nbColLeft, nbColRight, gap){ //x et yNav correspondent à la position de la case de menu la plus en haut à gauche

          var _items = items; // array of Objet
          var _x = xNav;
          var _y = yNav;
          var _Slots = []; //va contenir des trios d'informations à afficher: un element de classe et ses coordonnées dans le menu
          var _isOpen = false;

          super(scene, 400, 300, appareance);
          scene.add.existing(this);
          this.setVisible(false);
          this.setDepth(10);




          this.open = function() {
              _isOpen = true;
              this.setVisible(true);
              scene.cursor = new Cursor(scene, xNav, yNav, assetCursor, boxSpacing, nbBoxX, nbBoxY, nbColLeft, nbColRight, gap);
              scene.itemSprites = scene.physics.add.group();
              var length = _items.length;
              var n = 0;
              for (var i = 0; i < nbBoxY; i++){
                  for(var j = 0; j < nbBoxX; j++){
                      if (n<length){
                          var xTemp = xNav + j * boxSpacing ;
                          var yTemp = yNav + i * boxSpacing ;
                          scene.itemSprites.create( xTemp, yTemp, _items[n].getMenuAsset()).setDepth(11).setScrollFactor(0);
                          _Slots.push([_items[n], xTemp, yTemp ]);
                          n += 1;
                      }
                  }
              }
          }


          this.close = function() {
              this.setVisible(false);
              scene.cursor.destroy(scene);
              scene.itemSprites.destroy(true);
              _isOpen = false;
          }

          this.pushItem = function(item) { _items.push(item)};
          this.getSlots = function() { return _Slots};
          this.setIsOpen = function(state){ _isOpen = state};
          this.getIsOpen = function() { return _isOpen};
    }
}
