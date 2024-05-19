export interface IColumn {
  id: string;
  text: string;
}

export const columns: IColumn[] = [
  {
    id: "todo",
    text: "Todo",
  },
  {
    id: "inProgress",
    text: "InProgress",
  },
  {
    id: "done",
    text: "Done",
  },
  {
    id: "released",
    text: "Released",
  },
];

export interface ICard {
  id: string;
  column_id: string;
  text: string;
}

export const cardsData: ICard[] = [
  {
    id: "1",
    column_id: "todo",
    text: "Card 1"
  },
  {
    id: "2",
    column_id: "inProgress",
    text: "Card 2",
  },
  {
    id: "3",
    column_id: "released",
    text: "Card 3",
  },
  {
    id: "4",
    column_id: "inProgress",
    text: "Card 4",
  },
  {
    id: "5",
    column_id: "todo",
    text: "Card 5",
  },
];
