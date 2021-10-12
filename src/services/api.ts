import { mockMessages } from "../mocks/mock-message";
import { IMessage } from "../models/message";

export const getMessages = (): Promise<IMessage[]> => {
  return Promise.resolve(mockMessages);
};
