export type Thumnail = {
  url: string;
  alt: string;
};

export type Show = {
  id: number;
  thumnail: Thumnail;
  name: string;
};

export type Program = {
  data: {
    program: Show[];
  };
};
