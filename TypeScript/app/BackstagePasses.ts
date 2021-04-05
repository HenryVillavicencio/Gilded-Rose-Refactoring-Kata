import UpdatableItem from "./UpdatableItem";

class BackstagePasses extends UpdatableItem {
  private DOUBLE_QUALITY_INCREMENT_SELL_IN_THRESHOLD: number = 10;
  private TRIPLE_QUALITY_INCREMENT_SELL_IN_THRESHOLD: number = 5;
  private QUALITY_RESET_SELL_IN_THRESHOLD: number = 0;

  update(): UpdatableItem {
    this.decreaseSellIn();
    this.increaseQuality();
    if (this.sellIn < this.DOUBLE_QUALITY_INCREMENT_SELL_IN_THRESHOLD) {
      this.increaseQuality();
    }
    if (this.sellIn < this.TRIPLE_QUALITY_INCREMENT_SELL_IN_THRESHOLD) {
      this.increaseQuality();
    }
    if (this.sellIn <= this.QUALITY_RESET_SELL_IN_THRESHOLD) {
      this.resetQuality();
    }
    return this;
  }
}

export default BackstagePasses;
