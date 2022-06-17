import { screen, render } from "@testing-library/react";

import Async from "./Async";

describe('Async tests:', () => {
  test('fetch for data',async () => {
    // this will simulate a mock data instead of fetching data
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{id: 'p1', title: 'First post'}],
    });
    // Arrange:
    render(<Async />);

    // Act ...

    // Assert
    const listItemElements = await screen.findAllByRole('listitem');
    expect(listItemElements).not.toHaveLength(0);
  })
})