import { FakeProgram } from "../../stubs/program";
import fetcher from "../fetcher";
import { getAllShows } from "./program";

jest.mock("../fetcher");
const postFetcher = fetcher.post as jest.Mock;

describe("getAllShows", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });
  it("should return list of shows", async () => {
    postFetcher.mockResolvedValueOnce({
      data: FakeProgram,
    });

    const acturalResponse = await getAllShows();

    expect(acturalResponse).toEqual(FakeProgram.data.program);

    expect(postFetcher).toHaveBeenNthCalledWith(1, "/", {
      query: `query MyQuery {
        program {
          id
          name
          thumnail {
            url
            alt
          }
        }
      }`,
    });
  });
});
