import { render, waitFor } from "@testing-library/react";
import App from "./App";
import fetcher from "./fetcher/fetcher";
import { FakeProgram } from "./stubs/program";

jest.mock("./fetcher/fetcher");

const postFetcher = fetcher.post as jest.Mock;

const renderApp = () => render(<App />);

describe("ProgramCarousel", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("should display loading message then programm when fetching programm succeeded", async () => {
    postFetcher.mockResolvedValueOnce({ data: FakeProgram });

    const { getAllByAltText, getByText, queryByText } = renderApp();

    expect(getByText("Le programme est en cours de chargement")).toBeTruthy();

    FakeProgram.data.program.forEach(
      async (show) =>
        await waitFor(() => {
          expect(getAllByAltText(show.thumnail.alt)).toBeTruthy();
        })
    );

    await waitFor(() => {
      expect(
        queryByText("Le programme est en cours de chargement")
      ).toBeFalsy();
    });
  });

  it("should display loading message then error message when fetching programm failed", async () => {
    postFetcher.mockRejectedValueOnce({});

    const { getByText, queryByText } = renderApp();

    expect(getByText("Le programme est en cours de chargement")).toBeTruthy();

    await waitFor(() => {
      expect(
        getByText(
          "Le programme n'a pas pu être chargé veuillez réessayer plus tard"
        )
      ).toBeTruthy();
    });

    expect(queryByText("Le programme est en cours de chargement")).toBeFalsy();
  });
});
