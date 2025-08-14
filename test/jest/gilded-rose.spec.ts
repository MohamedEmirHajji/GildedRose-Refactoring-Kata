import { GildedRose } from '@/gilded-rose';
import { Item } from '@/item.model';

describe('Gilded Rose', () => {
  describe('Normal Items', () => {
    it('should decrease quality and sellIn for a normal item', () => {
      const gildedRose = new GildedRose([new Item('Normal Item', 10, 20)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(19);
      expect(items[0].sellIn).toBe(9);
    });

    it('should decrease quality twice as fast when sellIn is 0', () => {
      const gildedRose = new GildedRose([new Item('Normal Item', 0, 20)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(18);
      expect(items[0].sellIn).toBe(-1);
    });

    it('should not decrease quality below 0', () => {
      const gildedRose = new GildedRose([new Item('Normal Item', 10, 0)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(0);
    });
  });

  describe('Aged Brie', () => {
    it('should increase quality for Aged Brie', () => {
      const gildedRose = new GildedRose([new Item('Aged Brie', 10, 20)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(21);
      expect(items[0].sellIn).toBe(9);
    });

    it('should increase quality twice as fast for Aged Brie when sellIn is 0', () => {
      const gildedRose = new GildedRose([new Item('Aged Brie', 0, 20)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(22);
      expect(items[0].sellIn).toBe(-1);
    });

    it('should not increase quality above 50', () => {
      const gildedRose = new GildedRose([new Item('Aged Brie', 10, 50)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(50);
    });
  });

  describe('Sulfuras', () => {
    it('should not change quality or sellIn for Sulfuras', () => {
      const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 10, 80)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(80);
      expect(items[0].sellIn).toBe(10);
    });
  });

  describe('Backstage passes', () => {
    it('should increase quality for Backstage passes', () => {
      const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(21);
      expect(items[0].sellIn).toBe(14);
    });

    it('should increase quality by 2 when sellIn is 10 or less', () => {
      const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 10, 20)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(22);
      expect(items[0].sellIn).toBe(9);
    });

    it('should increase quality by 3 when sellIn is 5 or less', () => {
      const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 5, 20)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(23);
      expect(items[0].sellIn).toBe(4);
    });

    it('should drop quality to 0 when sellIn is 0', () => {
      const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 0, 20)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(0);
      expect(items[0].sellIn).toBe(-1);
    });

    it('should not increase quality above 50', () => {
      const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 10, 49)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(50);
    });

    it('should handle quality increase correctly near 50', () => {
      const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 5, 48)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(50);
    });
  });

  describe('Conjured Items', () => {
    it('should decrease quality twice as fast as normal items', () => {
      const gildedRose = new GildedRose([new Item('Conjured Mana Cake', 10, 20)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(18);
      expect(items[0].sellIn).toBe(9);
    });

    it('should decrease quality by 4 when sellIn is 0', () => {
      const gildedRose = new GildedRose([new Item('Conjured Mana Cake', 0, 20)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(16);
      expect(items[0].sellIn).toBe(-1);
    });

    it('should not decrease quality below 0', () => {
      const gildedRose = new GildedRose([new Item('Conjured Mana Cake', 10, 1)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(0);
    });
  });
});