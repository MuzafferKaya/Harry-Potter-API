import { fetchApi } from "../FetchApi";

export async function GetAllCharacters(pageSize = 10, pageNumber = 1) {
  const url = `/v1/characters?page[size]=${pageSize}&page[number]=${pageNumber}`;
  const data = await fetchApi(url);
  return data;
}

export async function GetByIdCharacter(id) {
  const url = "/v1/characters/" + id;
  const data = await fetchApi(url);
  return data;
}
