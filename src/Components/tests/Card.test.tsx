import { render } from "@testing-library/react";
import Card from "../Card";

describe("Testing render of cards: ", async () => {
  test("Testing card header: ", () => {
    const container = render(
      <Card name="debashis" age={26} striked={true} setStriked={jest.fn()} />
    );
    const cardHeader = container.getByTestId("card-header");
    expect(cardHeader.textContent).toBe("Welcome to the card");
  });
});
