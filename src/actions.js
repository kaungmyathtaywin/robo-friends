import { CHANGE_SEARCHFIELD } from "./constants.js";

export const setSearchfield = (text) => {
  return {
    type: CHANGE_SEARCHFIELD,
    payload: text,
  };
};
