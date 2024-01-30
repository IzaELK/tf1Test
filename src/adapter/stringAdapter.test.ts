import { truncateString } from "./stringAdapter";

describe("truncateString", () => {
  test.each([
    ["Les Copains de la forêt", "Les Copains de ..."],
    ["Barabapapa", "Barabapapa"],
  ])("should transform '%s' to '%s'", (inputString, expectedString) => {
    const stringResult = truncateString(inputString, 15);
    expect(stringResult).toEqual(expectedString);
  });
});
