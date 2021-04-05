import UpdatableItem from "./UpdatableItem";

class StandardItem extends UpdatableItem{
  private DOUBLE_QUALITY_DECREMENT_SELL_IN_THRESHOLD: number= 0;

  update(): StandardItem {
    this.decreaseSellIn();
    this.decreaseQuality()
    if( this.sellIn < this.DOUBLE_QUALITY_DECREMENT_SELL_IN_THRESHOLD){
        this.decreaseQuality()
    }
    return this;
  }
}

export default StandardItem;