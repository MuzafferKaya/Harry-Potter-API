import { fetchApi } from "../FetchApi";

export async function GetAllBooks(pageSize = 10, pageNumber = 1) {
  const url = `/v1/books?page[size]=${pageSize}&page[number]=${pageNumber}`;
  const data = await fetchApi(url);
  return data;
}

export async function GetByIdBook(id) {
  const url = "/v1/books/" + id;
  const data = await fetchApi(url);
  return data;
}
