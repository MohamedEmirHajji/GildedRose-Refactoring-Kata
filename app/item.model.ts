import { AGED_BRIE, BACKSTAGE_PASSES, CONJURED, SULFURAS } from "./constants";

export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name: string, sellIn: number, quality: number) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }

  public isAgedBrie(): boolean {
    return this.name.startsWith(AGED_BRIE);

  }

  public isBackstagePass(): boolean {
    return this.name.startsWith(BACKSTAGE_PASSES);

  }

  public isSulfuras(): boolean {
    return this.name.startsWith(SULFURAS);
  }

  public isConjured(): boolean {
    return this.name.startsWith(CONJURED);
  }

  public isNormalItem(): boolean {
    return !this.isAgedBrie() && !this.isBackstagePass() && !this.isSulfuras() && !this.isConjured();
  }

  public update(): void {
    if (this.isAgedBrie()) {
      this._updateAgedBrie();
      return;
    }

    if (this.isBackstagePass()) {
      this._updateBackstagePass();
      return;
    }

    if (this.isSulfuras()) {
      return;
    }

    if (this.isConjured()) {
      this._updateConjuredItem();
      return;
    }

    this._updateNormalItem();
  }

  private _updateNormalItem(): void {
    if (this.quality > 0) {
      this.quality -= 1;
    }
    this.sellIn -= 1;
    if (this.sellIn < 0 && this.quality > 0) {
      this.quality -= 1;
    }
  }

  private _updateAgedBrie(): void {
    if (this.quality < 50) {
      this.quality += 1;
    }
    this.sellIn -= 1;
    if (this.sellIn < 0 && this.quality < 50) {
      this.quality += 1;
    }
  }

  private _updateBackstagePass(): void {
    this.sellIn -= 1;
    if (this.sellIn < 0) {
      this.quality = 0;
      return;
    }
    if (this.quality >= 50) {
      return;
    }
    this.quality += 1;
    if (this.sellIn < 10) {
      this.quality += 1;
    }
    if (this.sellIn < 5) {
      this.quality += 1;
    }
    if (this.quality > 50) {
      this.quality = 50;
    }
  }

  private _updateConjuredItem(): void {
    if (this.quality > 0) {
      this.quality -= 2;
    }
    this.sellIn -= 1;
    if (this.sellIn < 0 && this.quality > 0) {
      this.quality -= 2;
    }
    if (this.quality < 0) {
      this.quality = 0;
    }
  }
}