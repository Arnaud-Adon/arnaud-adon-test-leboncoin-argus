import { render, fireEvent } from "@testing-library/react";
import MessageForm from "./MessageForm";
import { mockMessages } from "../../mocks/mock-message";

describe("message form test suite", () => {
  it("should render correctly", () => {
    const component = render(
      <MessageForm addMessage={jest.fn()} messages={mockMessages} />
    );
    expect(component).toBeTruthy();
  });
  it("should contain the form label", () => {
    const { getByText } = render(
      <MessageForm addMessage={jest.fn()} messages={mockMessages} />
    );
    expect(getByText(/Entrez un message/)).toBeInTheDocument();
  });
  it("should contain a textarea", () => {
    const { getByRole } = render(
      <MessageForm addMessage={jest.fn()} messages={mockMessages} />
    );
    const textarea = getByRole("textbox", { name: "Entrez un message" });
    fireEvent.change(textarea, { target: { value: "Bonjour" } });
    expect(textarea).toBeInTheDocument();
    expect(textarea.value).toBe("Bonjour");
  });

  it("should contain a disabled checkbox", () => {
    const { getByRole } = render(
      <MessageForm addMessage={jest.fn()} messages={mockMessages} />
    );
    const checkbox = getByRole("checkbox", { name: "Message en privé ?" });
    expect(checkbox).toBeInTheDocument();
    expect(checkbox.checked).toBe(false);
  });

  it("should contain a enabled checkbox", () => {
    const { getByRole } = render(
      <MessageForm addMessage={jest.fn()} messages={mockMessages} />
    );
    const checkbox = getByRole("checkbox", { name: "Message en privé ?" });
    fireEvent.click(checkbox);
    expect(checkbox).toBeInTheDocument();
    expect(checkbox.checked).toBe(true);
  });

  it("should contain a disabled button", () => {
    const { getByRole } = render(
      <MessageForm addMessage={jest.fn()} messages={mockMessages} />
    );
    const button = getByRole("button", { name: "Valider" });
    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled();
  });

  it("should contain a enabled button", () => {
    const { getByRole } = render(
      <MessageForm addMessage={jest.fn()} messages={mockMessages} />
    );
    const button = getByRole("button", { name: "Valider" });
    const textarea = getByRole("textbox", { name: "Entrez un message" });
    fireEvent.change(textarea, { target: { value: "Bonjour" } });
    expect(button).toBeInTheDocument();
    expect(button).not.toBeDisabled();
  });

  it("should call addMessage when button is clicked a receive a message with public field", () => {
    const mockAddMessage = jest.fn();
    const { getByRole } = render(
      <MessageForm addMessage={mockAddMessage} messages={mockMessages} />
    );
    const textarea = getByRole("textbox", { name: "Entrez un message" });
    fireEvent.change(textarea, { target: { value: "Bonjour" } });
    const button = getByRole("button", { name: "Valider" });
    fireEvent.click(button);
    expect(mockAddMessage).toHaveBeenCalledWith({
      field: "public",
      id: 9,
      text: "Bonjour",
    });
  });

  it("should call addMessage when button is clicked a receive a message with private field", () => {
    const mockAddMessage = jest.fn();
    const { getByRole } = render(
      <MessageForm addMessage={mockAddMessage} messages={mockMessages} />
    );
    const textarea = getByRole("textbox", { name: "Entrez un message" });
    fireEvent.change(textarea, { target: { value: "Bonjour" } });
    const checkbox = getByRole("checkbox", { name: "Message en privé ?" });
    fireEvent.click(checkbox);
    const button = getByRole("button", { name: "Valider" });
    fireEvent.click(button);
    expect(mockAddMessage).toHaveBeenCalledWith({
      field: "private",
      id: 9,
      text: "Bonjour",
    });
  });
});
