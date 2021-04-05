import UpdatableItem from './UpdatableItem';
class GildedRose {
    updateQuality(items:Array<UpdatableItem>):Array<UpdatableItem> {
        return items.map((item)=> item.update());
    }
}

export default GildedRose;