import { fetchApi } from "../FetchApi";

export async function GetAllMovies(pageSize = 10, pageNumber = 1) {
  const url = `/v1/movies?page[size]=${pageSize}&page[number]=${pageNumber}`;
  const data = await fetchApi(url);
  return data;
}

export async function GetByIdMovie(id) {
  const url = "/v1/movies/" + id;
  const data = await fetchApi(url);
  return data;
}
