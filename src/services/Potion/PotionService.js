import { fetchApi } from "../FetchApi";

export async function GetAllPotions(pageSize = 10, pageNumber = 1) {
  const url = `/v1/potions?page[size]=${pageSize}&page[number]=${pageNumber}`;
  const data = await fetchApi(url);
  return data;
}

export async function GetByIdPotion(id) {
  const url = "/v1/potions/" + id;
  const data = await fetchApi(url);
  return data;
}
