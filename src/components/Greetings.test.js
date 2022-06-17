import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Greetings from "./Greetings";

describe('Greeting component', () => {
  test('render Hello World', () => {
    // Arrange
    render(<Greetings />);
    // Act

    // Assert
    const helloWorldElement = screen.getByText('Hello World!');
    expect(helloWorldElement).toBeInTheDocument();
  });

  test('check if button was NOT clicked', () => {
    render(<Greetings />);

    const outputElement = screen.getByText('Button was NOT clicked');
    expect(outputElement).toBeInTheDocument();
  });

  test('check if button gets clicked and shows the true p', () => {
    // Arrange:
    render(<Greetings />);

    // Act:
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    // Assert:
    const outputElement = screen.getByText('Button was clicked');
    expect(outputElement).toBeInTheDocument();
  });

  test('check if button gets clicked and shows the false p', () => {
    // Arrange:
    render(<Greetings />);

    // Act:
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    // Assert:
    const outputElement = screen.queryByText('Button was NOT clicked');
    expect(outputElement).toBeNull();
  });
})
