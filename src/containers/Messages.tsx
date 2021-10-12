import React, { FunctionComponent, useEffect, useState } from "react";
import MessageForm from "../components/Form/MessageForm";
import MessagesList from "../components/List/MessagesList";
import { IMessage } from "../models/message";
import { getMessages } from "../services/api";
import "./Message.css";

const Messages: FunctionComponent = () => {
  const [messages, setMessages] = useState<IMessage[]>([]);

  useEffect(() => {
    getMessages().then((messages) => setMessages(messages));
  }, []);

  const addMessage = (message: IMessage): void => {
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  return (
    <div className="container">
      <MessagesList messagesList={messages} />
      <MessageForm messages={messages} addMessage={addMessage} />
    </div>
  );
};

export default Messages;
