import { combineReducers }  from 'redux';
import searchTerm from "./setSearchTerm";
import defaultSearchTerm from "./test";

const rootReducer = combineReducers({
     searchTerm,
     defaultSearchTerm
})


export default rootReducer;
