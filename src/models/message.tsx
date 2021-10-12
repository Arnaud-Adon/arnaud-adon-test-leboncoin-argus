export interface IMessage {
  id: number;
  field: "private" | "public";
  text: string;
}
