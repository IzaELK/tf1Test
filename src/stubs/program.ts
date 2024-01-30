import { Program, Show } from "../fetcher/program/program.type";

export const FakeShow1: Show = {
  id: 0,
  name: "Show 1",
  thumnail: {
    url: "FakeShow1Url",
    alt: "FakeShow1Alt",
  },
};

export const FakeShow2: Show = {
  id: 0,
  name: "Show 2",
  thumnail: {
    url: "FakeShow2Url",
    alt: "FakeShow2Alt",
  },
};

export const FakeShow3: Show = {
  id: 0,
  name: "Show 3",
  thumnail: {
    url: "FakeShow2Url",
    alt: "FakeShow2Alt",
  },
};

export const FakeProgram: Program = {
  data: {
    program: [FakeShow1],
  },
};
