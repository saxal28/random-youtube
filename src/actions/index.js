export const SET_SEARCH_TERM = "SET_SEARCH_TERM";
export const SELECT_VIDEO = "SELECT_VIDEO";
export function setSearchTerm(searchTerm) {
  return {
    type: SET_SEARCH_TERM,
    payload: searchTerm
  }
}

export function selectedVideo(video) {
  return {
    type: SELECT_VIDEO,
    payload: video
  }
}
