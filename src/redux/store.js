import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { dataReducer } from "./data/reducer";
import { authDataReducer, signupReducer } from "./auth/authReducer";



const root=combineReducers(
    {data:dataReducer},
    {data:signupReducer}  )
export const store= legacy_createStore(root, applyMiddleware(thunk))