export const SET_SEARCH_TERM = "SET_SEARCH_TERM";

export function setSearchTerm(searchTerm) {
  return {
    type: SET_SEARCH_TERM,
    payload: searchTerm
  }
}
