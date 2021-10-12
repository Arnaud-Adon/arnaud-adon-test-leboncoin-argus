import { render } from "@testing-library/react";
import MessagesList from "./MessagesList";
import { mockMessages } from "../../mocks/mock-message";

describe("Message list component test suite", () => {
  it("should render correctly", () => {
    const component = render(<MessagesList messagesList={mockMessages} />);
    expect(component).toBeTruthy();
  });

  it("should contain a class message-container", () => {
    const { container } = render(<MessagesList messagesList={mockMessages} />);
    expect(container.firstChild).toHaveClass("messages-container");
  });

  it("should contain number message of parameter message length", () => {
    const { container } = render(<MessagesList messagesList={mockMessages} />);
    expect(container.querySelectorAll(".message-content").length).toBe(8);
  });
});
