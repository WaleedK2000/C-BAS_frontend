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
jest.mock("react-pro-sidebar");
// InterfaceLoader.test.js

import { Provider } from "react-redux";
import InterfaceLoader from "./components/interface_loader/InterfaceLoader";
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);

test("renders login component when interface value is LOGIN", () => {
  const store = mockStore({ interface: { interface: "LOGIN" } });
  render(
    <Provider store={store}>
      <InterfaceLoader />
    </Provider>
  );
  const loginElement = screen.getByText(/login/i);
  expect(loginElement).toBeInTheDocument();
});

test("renders red team interface component when interface value is RED", () => {
  const store = mockStore({ interface: { interface: "RED" } });
  render(
    <Provider store={store}>
      <InterfaceLoader />
    </Provider>
  );
  const redTeamElement = screen.getByText(/red team/i);
  expect(redTeamElement).toBeInTheDocument();
});
