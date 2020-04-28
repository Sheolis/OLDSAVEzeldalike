class Boutique extends Menu{
    constructor(scene, appareance, items, xNav, yNav, assetCursor, boxSpacing, nbBoxX, nbBoxY, nbColLeft, nbColRight, gap){

        super(scene, appareance, items, xNav, yNav, assetCursor, boxSpacing, nbBoxX, nbBoxY, nbColLeft, nbColRight, gap);

        this.buy = function(x, y) {
            for(var k = 0; k < this.getSlots().length; k++){
                if(x == this.getSlots()[k][1] && y == this.getSlots()[k][2]){
                    if(scene.bag.getMoney() - this.getSlots()[k][0].getPrice() >= 0){
                        console.log("money :", scene.bag.getMoney());
                        scene.bag.pushItem(this.getSlots()[k][0]);
                        scene.bag.setMoney(scene.bag.getMoney() - this.getSlots()[k][0].getPrice());
                        console.log("money :", scene.bag.getMoney());
                        console.log(scene.bag.getItem)
                    }
                }
            }
        }
    }//end CONSTRUCTOR
}//end class
