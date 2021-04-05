import UpdatableItem from "./UpdatableItem";

class AgedBrie extends UpdatableItem{
  private DOUBLE_QUALITY_INCREMENT_SELL_IN_THRESHOLD: number= 0;

  update(): AgedBrie {
    this.decreaseSellIn();
    this.increaseQuality();
    if(this.sellIn < this.DOUBLE_QUALITY_INCREMENT_SELL_IN_THRESHOLD){
        this.increaseQuality();
    }
    return this;
  }
}

export default AgedBrie;