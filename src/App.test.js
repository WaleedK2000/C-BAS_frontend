import { render, screen } from "@testing-library/react";
import Helloworld from "./components/Helloworld";
import React from "react";

test("renders hello world", () => {
  render(<Helloworld />);
  const headingElement = screen.getByRole("heading", {
    name: /hello, world!/i,
  });
  expect(headingElement).toBeInTheDocument();
});
