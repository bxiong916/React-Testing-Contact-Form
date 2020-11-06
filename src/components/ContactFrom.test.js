import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ContactForm from './ContactForm';

test('renders ContactForm w/o errors', () => {
    render(< ContactForm />);
});
test('User can fill out and submit the form', async () => {

    render(<ContactForm />);

    const firstName = await screen.getByText(/first name/i);
    const lastName = await screen.getByText(/last name/i);
    const email = await screen.getByText(/email/i);
    const msg = await screen.getByText(/message/i);

//Fill out the form (top to bottom)
    fireEvent.change(firstName, {
        target: { name: 'Bil'}});

    fireEvent.change(lastName, {
        target: { name: 'Xiong' }});

    fireEvent.change(email, {
        target: { name: 'xiong.bill@yahoo.com' }});

    fireEvent.change(msg, {
        target: { name: 'This is a test' }});

    //submit button test
    const button = screen.getByRole('button');
    fireEvent.click(button);

    await screen.queryByText(/bill/i);
    await screen.queryByText(/xiong/i);
    await screen.queryByText(/xiong.bill@yahoo.com/i);
    await screen.queryByText(/this is a test/i);

});