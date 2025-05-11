import { IItemPrices } from "./IItemPrices";

export interface IItem {
  id: number;
  title: string;
  prices: IItemPrices[];
}
