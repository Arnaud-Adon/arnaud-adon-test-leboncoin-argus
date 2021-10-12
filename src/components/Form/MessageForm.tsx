import React, {
  useState,
  FunctionComponent,
  FormEvent,
  SyntheticEvent,
} from "react";
import { IMessage } from "../../models/message";
import "./MessageForm.css";

type OwnProps = {
  messages: IMessage[];
  addMessage: Function;
};

const MessageForm: FunctionComponent<OwnProps> = ({ messages, addMessage }) => {
  const [text, setText] = useState<string>("");
  const [disabled, setDisabled] = useState<boolean>(false);

  const handleMessage = (e: SyntheticEvent): void => {
    e.preventDefault();
    const newMessage: IMessage = {
      id: messages.length + 1,
      field: disabled ? "private" : "public",
      text,
    };
    setText("");
    addMessage(newMessage);
  };

  const handleChange = (e: FormEvent<HTMLTextAreaElement>): void => {
    setText(e.currentTarget.value);
  };

  const handleMessageStatus = (e: FormEvent<HTMLInputElement>): void => {
    setDisabled(!disabled);
  };

  return (
    <div className="form-message">
      <label htmlFor="form-message">Entrez un message</label>
      <form onSubmit={handleMessage}>
        <textarea
          name="message"
          id="form-message"
          cols={30}
          rows={10}
          placeholder="Entrez votre message"
          value={text}
          onChange={handleChange}
        ></textarea>
        <div>
          <label htmlFor="message-status">Message en privé ?</label>
          <input
            type="checkbox"
            id="message-status"
            defaultChecked={disabled}
            onChange={handleMessageStatus}
          />
        </div>

        <button
          className={`message-button ${!(text.length > 0) ? "disabled" : ""}`}
          disabled={!(text.length > 0)}
        >
          Valider
        </button>
      </form>
    </div>
  );
};

export default MessageForm;
