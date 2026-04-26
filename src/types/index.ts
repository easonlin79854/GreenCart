export interface ShoppingItem {
  id: string;
  name: string;
  category: string;
  isCompleted: boolean;
  createdAt: number;
}

export type Category = '生鮮食品' | '家居百貨' | '個人護理' | '電子產品' | '其他';

export const CATEGORIES: Category[] = ['生鮮食品', '家居百貨', '個人護理', '電子產品', '其他'];
