class Inventory extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, money, appareance, items){

          var _items = items; // array of Objet
          var _money = money;

          super(scene, 400, 300, appareance);
          scene.add.existing(this);
          this.setVisible(false);

          this.open = function(){
              this.setVisible(true);
              scene.cursor = new Cursor( scene, 140.57, 323.541, "cursorInventory",100);
              scene.cursor.setDepth(11);

          }

          this.close = function(){
              this.setVisible(false);
              scene.cursor.destroy(scene);
          }


    }
}
