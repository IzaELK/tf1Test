import { render } from "@testing-library/react";
import { FakeShow1 } from "../stubs/program";
import { CarouselCard } from "./CarouselCard";

const renderCarouselCard = () =>
  render(
    <CarouselCard thumnail={FakeShow1.thumnail} showName={FakeShow1.name} />
  );

describe("CarouselCard", () => {
  it("should display image and name's show", () => {
    const { getByAltText, getByText } = renderCarouselCard();
    expect(getByAltText(FakeShow1.thumnail.alt)).toBeTruthy();
    expect(getByText(FakeShow1.name)).toBeTruthy();
  });
});
