import React from "react";
import { render, act } from "@testing-library/react";
import Messages from "./Messages";

describe("Message container test suite", () => {
  it("should render correctly", async () => {
    const wrapper = render(<Messages />);
    await act(() => Promise.resolve());
    expect(wrapper).toMatchSnapshot();
  });

  it("should contain a container", async () => {
    const { container } = render(<Messages />);
    expect(container.firstChild).toHaveClass("container");
    await act(() => Promise.resolve());
  });
});
