import Item from "./Item";

abstract class UpdatableItem extends Item {

  private MAX_QUALITY: number = 50;
  private MIN_QUALITY: number = 0;
  
  constructor(name: string, sellIn:number, quality:number){
    super(name, sellIn, quality);
  }

  abstract update():UpdatableItem;

  decreaseSellIn() {
    this.sellIn -= 1;
  }

  increaseQuality(){
    if(this.quality < this.MAX_QUALITY){
        this.quality +=1;
    }
  }

  decreaseQuality(){
    if(this.quality > this.MIN_QUALITY){
        this.quality -=1;
    }
  }

  resetQuality() {
    this.quality = 0;
  }

}

export default UpdatableItem;