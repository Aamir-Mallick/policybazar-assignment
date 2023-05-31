/* eslint-disable no-undef */
import { screen, render } from "@testing-library/react";
import { Items } from "./Items";
import { expect } from "vitest";

// eslint-disable-next-line no-undef
describe("item", () => {
  test("should show avatar", () => {
    render(
      <Items
        id={6}
        firstName='Tracey'
        avatar='https://reqres.in/img/faces/6-image.jpg'
      />
    );
    expect(screen.getBytext(/Tracey/i)).toBeInTheDocument();
  });
});
