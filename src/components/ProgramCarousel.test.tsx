import { act, render } from "@testing-library/react";
import { FakeProgram } from "../stubs/program";
import { ProgramCarousel } from "./ProgramCarousel";

const renderProgramCarousel = () =>
  render(<ProgramCarousel shows={FakeProgram.data.program} />);

describe("ProgramCarousel", () => {
  it("should display all shows", async () => {
    const { getAllByAltText } = await act(async () => renderProgramCarousel());

    FakeProgram.data.program.forEach((show) => {
      expect(getAllByAltText(show.thumnail.alt)).toBeTruthy();
    });
  });
});
