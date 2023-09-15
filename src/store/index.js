import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./modules/home";
import entireReducer from "./modules/entire";
import detailReducer from "./modules/detail";

const store = configureStore({
  reducer: {
    home: homeReducer, //RTK配置
    entire: entireReducer, //普通方式配置
    detail: detailReducer,
  },
});

export default store;
