class Inventory extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, money, appareance, items){

          var _items = items; // array of Objet
          var _money = money;

          super(scene, 400, 300, appareance);
          scene.add.existing(this);
          this.setVisible(false);
          this.setDepth(10);

          this.open = function(){
              this.setVisible(true);
              scene.cursor.setVisible(true);


          }

          this.close = function(){
              this.setVisible(false);
              scene.cursor.setVisible(false);
          }


    }
}
