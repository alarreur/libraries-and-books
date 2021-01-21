import { Book } from "./book";

export interface Library {
  id: number;
  name: string;
  books?: Book[];
}
