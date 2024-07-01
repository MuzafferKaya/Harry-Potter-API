import { fetchApi } from "../FetchApi";

export async function GetAllSpells(pageSize = 10, pageNumber = 1) {
  const url = `/v1/spells?page[size]=${pageSize}&page[number]=${pageNumber}`;
  const data = await fetchApi(url);
  return data;
}

export async function GetByIdSpells(id) {
  const url = "/v1/spells/" + id;
  const data = await fetchApi(url);
  return data;
}
