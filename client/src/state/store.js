import { configureStore } from "@reduxjs/toolkit";
import loadingReducer from "./reducers/loadingReducer";
import moneyReducer from "./reducers/moneyReducer";
import modalReducer from "./reducers/modalReducer";
import authReducer from "./reducers/authReducer";

export default configureStore({
    reducer: {
      money: moneyReducer,
      loading: loadingReducer,
      modal: modalReducer,
      auth: authReducer
    },
  });
  