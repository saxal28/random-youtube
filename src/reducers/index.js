import { combineReducers }  from 'redux';
import searchTerm from "./setSearchTerm";
import defaultSearchTerm from "./test";
import selectedVideo from "./selectVideo";
// import mainVideoId from "./updateMainVideo";

const rootReducer = combineReducers({
     searchTerm,
     defaultSearchTerm,
     selectedVideo
})


export default rootReducer;
