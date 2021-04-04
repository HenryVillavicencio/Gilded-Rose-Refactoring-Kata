import Item from './Item';
class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    private AGED_BRIE: string = 'Aged Brie';
    private BACKSTAGE_PASSES: string = 'Backstage passes to a TAFKAL80ETC concert';
    private SULFURAS: string = 'Sulfuras, Hand of Ragnaros';
    
    private AGED_BRIE_DOUBLE_QUALITY_INCREMENT_SELL_IN_THRESHOLD: number= 0;
    private DEFAULT_ITEM_DOUBLE_QUALITY_DECREMENT_SELL_IN_THRESHOLD: number= 0;
    private BACKSTAGE_PASSES_DOUBLE_QUALITY_INCREMENT_SELL_IN_THRESHOLD: number= 10;
    private BACKSTAGE_PASSES_TRIPLE_QUALITY_INCREMENT_SELL_IN_THRESHOLD: number= 5;
    private ACKSTAGE_PASSES_QUALITY_RESET_SELL_IN_THRESHOLD: number= 0;
    private MAX_QUALITY: number = 50;
    private MIN_QUALITY: number = 0;

    updateQuality() {
        for (let i = 0; i < this.items.length; i++) {
            switch(this.items[i].name){
                case this.AGED_BRIE: 
                    this.decreaseSellIn(this.items[i]);
                    this.updateAgedBrieQuality(this.items[i])
                    break;
                case this.BACKSTAGE_PASSES:
                    this.decreaseSellIn(this.items[i]);
                    this.updateBackstagePassesQuality(this.items[i]);
                    break;
                case this.SULFURAS:
                    break;
                default:
                    this.decreaseSellIn(this.items[i]);
                    this.updateDefaultItemQuality(this.items[i])
            }
        }

        return this.items;
    }

    decreaseSellIn(item: Item) {
        item.sellIn = item.sellIn - 1;
    }

    updateDefaultItemQuality(item: Item){
        this.decreaseQuality(item)
        if( item.sellIn < this.DEFAULT_ITEM_DOUBLE_QUALITY_DECREMENT_SELL_IN_THRESHOLD){
            this.decreaseQuality(item)
        }
    }

    updateAgedBrieQuality(item: Item){
        this.increaseQuality(item);
        if(item.sellIn < this.AGED_BRIE_DOUBLE_QUALITY_INCREMENT_SELL_IN_THRESHOLD){
            this.increaseQuality(item);
        }
    }

    updateBackstagePassesQuality(item: Item){
        this.increaseQuality(item);
        if(item.sellIn < this.BACKSTAGE_PASSES_DOUBLE_QUALITY_INCREMENT_SELL_IN_THRESHOLD){
            this.increaseQuality(item);
        }
        if(item.sellIn < this.BACKSTAGE_PASSES_TRIPLE_QUALITY_INCREMENT_SELL_IN_THRESHOLD){
            this.increaseQuality(item);
        }
        if(item.sellIn == this.ACKSTAGE_PASSES_QUALITY_RESET_SELL_IN_THRESHOLD){
          this.resetQuality(item)  
        }
    }

    increaseQuality(item: Item){
        if(item.quality < this.MAX_QUALITY){
            item.quality +=1;
        }
    }
    decreaseQuality(item: Item){
        if(item.quality > this.MIN_QUALITY){
            item.quality -=1;
        }
    }

    resetQuality(item:Item) {
        item.quality = 0;
    }

}

export default GildedRose;