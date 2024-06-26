import { RowDataPacket } from 'mysql2';

export interface Book {
  id: number;
  title: string;
  cover: Buffer;
  description: string;
  categories_id: number;
  shelves_id: number;
  pages: number;
}

export interface BookQueryResult extends RowDataPacket {
  id: number;
  title: string;
  cover: Buffer;
  description: string;
  categories_id: number;
  shelves_id: number;
  pages: number;
}
