import { CHANGE_SEARCHFIELD } from "./constants.js";

const initialState = {
  searchfield: "",
};

export const searchRobots = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCHFIELD:
      return { ...state, searchfield: action.payload };
    default:
      return state;
  }
};
