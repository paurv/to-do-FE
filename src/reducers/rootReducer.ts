import { combineReducers } from "redux";

import { notesReducer } from "./notesReducers";

export const rootReducer = combineReducers({
    notes: notesReducer
});