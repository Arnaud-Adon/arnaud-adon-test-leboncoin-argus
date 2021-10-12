import React from "react";
import { render, act } from "@testing-library/react";
import App from "./App";

it("should render correctly", async () => {
  const { container } = render(<App />);
  await act(() => Promise.resolve());
  expect(container.firstChild).toHaveClass("App");
});
