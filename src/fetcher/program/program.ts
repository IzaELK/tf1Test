import fetcher from "../fetcher";
import { Program, Show } from "./program.type";

export const getAllShows = (): Promise<Show[]> => {
  return fetcher
    .post<Program>(`/`, {
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
    })
    .then(({ data: response }) => response.data.program);
};
