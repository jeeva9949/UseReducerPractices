import { ChangeNumber, ALU } from "./counter";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
    ChangeNumber,
    ALU,
})

export  default rootReducer