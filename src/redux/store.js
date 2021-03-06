import rootReducer from "./rootReducer";
import { persistStore } from "redux-persist";

import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

export default { store, persistor };
