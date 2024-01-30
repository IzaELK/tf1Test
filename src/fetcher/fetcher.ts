import axios from "axios";

const fetcher = axios.create({
  baseURL: "https://tf1-interview.hasura.app/v1/graphql",
  timeout: 5000,
});

export default fetcher;
