import React from "react";
import { act, fireEvent, render } from "@testing-library/react";
import Card from "../Card";

describe("Testing render of cards: ", () => {
  // const container = await render(
  //   <Card name="debashis" age={26} striked={true} setStriked={jest.fn()} />
  // );

  test("Testing card header & texts: ", async () => {
    const container = await render(
      <Card name="debashis" age={26} striked={true} setStriked={jest.fn()} />
    );
    const cardHeader = container.getByTestId("card-header");
    expect(cardHeader.textContent).toBe("Welcome to the card");
    const cardName = container.getByTestId("card-name");
    expect(cardName.textContent).toBe("debashis");
    const cardAge = container.getByTestId("card-age");
    expect(cardAge.textContent).toBe("26");
  });

  test("Testing card strike status change onClick: ", async () => {
    // const strikeBtn = await act(() => container.queryByTestId("card-striker"));
    // const strikeBtn = screen.querySelector('[data-testid=""]')
    const container = await render(
      <Card name="debashis" age={26} striked={true} setStriked={jest.fn()} />
    );
    await act(async () => {
      const strikeBtn = container.getAllByTestId("card-striker")[0];
      fireEvent.click(strikeBtn);

      expect(strikeBtn.textContent).toBe("X");
      // fireEvent.click(strikeBtn);
      // expect(strikeBtn.textContent).toBe("X");
    });
    // fireEvent.click(strikeBtn);
    // expect(strikeBtn.textContent).toBe("O");
  });
});
