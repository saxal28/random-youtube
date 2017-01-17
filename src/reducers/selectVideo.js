import { SELECT_VIDEO } from '../actions/index.js';

export default function(state = null, action) {
  switch(action.type) {
    case SELECT_VIDEO:
      return action.payload
    default:
      return state
  }
}
