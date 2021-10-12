import { IMessage } from "../models/message";

export const mockMessages: IMessage[] = [
  { id: 1, field: "public", text: "Bonjour à tous" },
  { id: 2, field: "public", text: "Comment allez-vous" },
  { id: 3, field: "private", text: "Voici un secret" },
  { id: 4, field: "private", text: "Ok, je garde ça pour moi" },
  { id: 5, field: "public", text: "Salut" },
  { id: 6, field: "public", text: "La forme ?" },
  { id: 7, field: "public", text: "Bienvenue" },
  { id: 8, field: "public", text: "Merci à toi." },
];
