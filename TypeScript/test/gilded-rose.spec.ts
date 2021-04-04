import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

describe('Gilded Rose', function () {

    it('SellIn value is decreased', ()=>{
        const Items = [new Item("whatever", 10, 0)]
        const gildedRose = new GildedRose(Items);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).to.equal(9);
    });

    it('Quality value is decreased', ()=>{
        const Items = [new Item("whatever", 1, 10)]
        const gildedRose = new GildedRose(Items);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(9);
    });

    it('Quality decreases twice as much when SellIn is passed', ()=>{
        const Items = [new Item("whatever", 0, 10)]
        const gildedRose = new GildedRose(Items);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(8);
    });

    it('Quality is never negative', ()=>{
        const Items = [new Item("whatever", 0, 0)]
        const gildedRose = new GildedRose(Items);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(0);
    });
    
    it('Aged Brie increases quality by one before SellIn passes', ()=>{
        const Items = [new Item("Aged Brie", 5, 5)]
        const gildedRose = new GildedRose(Items);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(6);
    }); 
    
    it('Aged Brie increases quality by two after SellIn passes', ()=>{
        const Items = [new Item("Aged Brie", -1, 5)]
        const gildedRose = new GildedRose(Items);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(7);
    });
    
    it('Quality never increases past fifty', ()=>{
        const Items = [new Item("Aged Brie", 10, 50)]
        const gildedRose = new GildedRose(Items);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(50);
    });

    it('Sulfuras never changes', ()=>{
        const Items = [new Item("Sulfuras, Hand of Ragnaros", 10, 35)]
        const gildedRose = new GildedRose(Items);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(35);
    });

    it('Backstage pass increases quality by one if SellIn greater then ten', ()=>{
        const Items = [new Item("Backstage passes to a TAFKAL80ETC concert", 11, 20)]
        const gildedRose = new GildedRose(Items);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(21);
    });

    it('Backstage pass increases quality by two if SellIn smaller than ten', ()=>{
        const Items = [new Item("Backstage passes to a TAFKAL80ETC concert", 6, 20)]
        const gildedRose = new GildedRose(Items);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(22);
    });

    it('Backstage pass increases quality by three if SellIn smaller than five', ()=>{
        const Items = [new Item("Backstage passes to a TAFKAL80ETC concert", 5, 20)]
        const gildedRose = new GildedRose(Items);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(23);
    });

    it('Backstage pass loses value after SellIn passes', ()=>{
        const Items = [new Item("Backstage passes to a TAFKAL80ETC concert", 0, 20)]
        const gildedRose = new GildedRose(Items);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).to.equal(0);
    });

});
