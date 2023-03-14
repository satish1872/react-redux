import { createStore } from "redux";
// import BatReducer from "./batReducer";
import rootReducer from "./rootReducer";
// import {createWithDevTools} from 'redux-devtools-extension'

const store=createStore(rootReducer);

export default store

