import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("renders App without crashing", () => {
  render(<App />);
});

describe('no errors for validation for an input that is more than 3 long', () => {
  test('fills out form and submits without error', () => {
    const utils = render(<App />);
    const firstNameInput = screen.getByPlaceholderText('Bill');
    const lastNameInput = screen.getByPlaceholderText('Xiong');
    const email = screen.getByPlaceholderText('xiong.bill@yahoo.com/i');
    fireEvent.change(firstNameInput, { target: {value: 'Elon Musk'}});
    fireEvent.change(lastNameInput, { target: {value: 'Gates'}});
    fireEvent.change(email, { target: {value: 'Gates'}});
    expect(firstNameInput.value).toBe('Elon Musk');
    expect(lastNameInput.value).toBe('Gates');
    expect(email.value).toBe('Gates');

    const button = screen.getByRole("button", {name: /submit/i});
    fireEvent.click(button);

  })
})