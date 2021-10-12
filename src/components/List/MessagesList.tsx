import React, { useState, FunctionComponent, useEffect } from "react";
import { IMessage } from "../../models/message";
import "./MessageList.css";

type OwnProps = {
  messagesList: IMessage[];
};

type RenderMessagesProps = {
  isVisible: boolean;
  messages: IMessage[];
};

const RenderMessages: FunctionComponent<RenderMessagesProps> = ({
  isVisible,
  messages,
}): any => {
  return isVisible
    ? messages.map((message, index) => {
        const { id, field, text } = message;
        if (index % 2 === 0)
          return (
            <div className="message-content left-message" key={id}>
              <p className="message-field">{field}</p>
              <div className="message-text-content left-color">{text}</div>
            </div>
          );
        else
          return (
            <div className="message-content right-message" key={id}>
              <p className="message-field">{field}</p>
              <div className="message-text-content right-color">{text}</div>
            </div>
          );
      })
    : "Aucun message";
};

const MessagesList: FunctionComponent<OwnProps> = ({ messagesList }) => {
  const [messages, setMessages] = useState<IMessage[]>(messagesList);

  useEffect(() => {
    setMessages(messagesList);
  }, [messages, messagesList]);

  return (
    <div className="messages-container">
      <RenderMessages isVisible={messages.length > 0} messages={messages} />
    </div>
  );
};

export default MessagesList;
