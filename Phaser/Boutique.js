class Boutique extends Menu{
    constructor(scene, money, appareance, items, xNav, yNav, assetCursor, boxSpacing, nbBoxX, nbBoxY, nbColLeft, nbColRight, gap){

        var _money = money;

        super(scene, appareance, xNav, yNav, assetCursor, boxSpacing, nbBoxX, nbBoxY, nbColLeft, nbColRight, gap);

        this.buy = function(x, y) {//x et y sont les coordonnées du curseur de séléction
            for(var k = 0; k < this.getSlots().length; k++){
                if(x == this.getSlots()[k][1] && y == this.getSlots()[k][2]){
                    if(scene.bag.getMoney() - this.getSlots()[k][0].getPrice() >= 0){
                        console.log("money :", scene.bag.getMoney());
                        scene.bag.pushItem(this.getSlots()[k][0]);
                        scene.bag.setMoney(scene.bag.getMoney() - this.getSlots()[k][0].getPrice());
                        console.log("money :", scene.bag.getMoney());
                    }
                }
            }
        }


    }//end CONSTRUCTOR
}//end class
