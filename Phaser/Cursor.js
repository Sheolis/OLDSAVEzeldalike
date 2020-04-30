class Cursor extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, x, y, asset, boxSpacing, nbBoxX, nbBoxY, nbColLeft, nbColRight, gap){//scene, position initiale, espace entre chaque case, qté totale de cases en considérant que l'ensemble du menu est un tableau avec eventuellement des cases vides (en x et en y), nbb de colonnes visibles à g, nb de colonnes visibles à d, nb de colonnes invisibles au centre

        var _x = x;
        var _y = y;
        var _xMin = x;
        var _xMax = x + (nbBoxX - 1 ) * boxSpacing;
        var _yMin = y;
        var _yMax = y + (nbBoxY - 1) * boxSpacing;
        var _gap = gap; //nombre de cases inexistantes entre l'inventaire et le shop dans le menu du shop
        var _xLGap = x + (nbColLeft - 1 ) * boxSpacing;
        var _xRGap = x + (nbBoxY - nbColRight + 1) * boxSpacing;

        super(scene, x, y, asset);
        scene.add.existing(this).setScrollFactor(0);
        this.setDepth(12);

        this.moveUp = function(){
            _y = _y - boxSpacing;
            this.setPosition(_x, _y);
            this.bounds(); // Empeche le cursor de sortir de l'affichage
        }
        this.moveDown = function(){
            _y = _y + boxSpacing;
            this.setPosition(_x, _y);
            this.bounds();
        }
        this.moveLeft = function(){
            _x = _x - boxSpacing
            this.setPosition(_x, _y);
            this.gap('left');
            this.bounds();
        }
        this.moveRight = function(){
            _x = _x + boxSpacing
            this.setPosition(_x, _y);
            this.gap('right');
            this.bounds();
        }



        this.bounds = function(){
            if(_x < _xMin){ _x = _xMin; this.setPosition(_x, _y);}
            if(_x > _xMax){ _x = _xMax; this.setPosition(_x, _y);}
            if(_y < _yMin){ _y = _yMin; this.setPosition(_x, _y);}
            if(_y > _yMax){ _y = _yMax; this.setPosition(_x, _y);}
        }
        this.gap = function(sign){
            if(sign == 'right'){
                if(_x > _xLGap){ _x = _x + _gap * (boxSpacing); this.setPosition(_x, _y);}

            }
            if(sign == 'left'){
                if(_x < _xRGap){ _x = _x - _gap * (boxSpacing); this.setPosition(_x, _y);}
            }
        }

        this.getPositionX = function(){ return _x};
        this.getPositionY = function(){ return _y};
    }//END CONSTRUCTOR
}//END CLASS
