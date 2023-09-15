import {
  getHomeDiscountData,
  getHomeGoodPriceData,
  getHomeHightScoreData,
  getHomeHotRecommendData,
  getHomeLongforData,
  getHomePlusData,
} from "@/services";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// createAsyncThunk可以在RTK中发起异步网络请求
export const fetchHomeDataAction = createAsyncThunk(
  "fetchdata",
  (payload, { dispatch }) => {
    getHomeGoodPriceData().then((res) => {
      dispatch(changeGoodPriceInfoAction(res));
    });

    getHomeHightScoreData().then((res) => {
      dispatch(changeHighScoreInfoAction(res));
    });

    getHomeDiscountData().then((res) => {
      dispatch(changeDiscountInfoAction(res));
    });

    getHomeHotRecommendData().then((res) => {
      dispatch(changeHotRecommendInfoAction(res));
    });

    getHomeLongforData().then((res) => {
      dispatch(changeLongforInfoAction(res));
    });

    getHomePlusData().then((res) => {
      dispatch(changePlusInfoAction(res));
    });
  }
);

const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {},
    discountInfo: {},
    hotrecommendInfo: {},
    longforInfo: {},
    plusInfo: {},
  },
  reducers: {
    // 性价比房源
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload;
    },
    // 高评分房源
    changeHighScoreInfoAction(state, { payload }) {
      state.highScoreInfo = payload;
    },
    // 折扣房源
    changeDiscountInfoAction(state, { payload }) {
      state.discountInfo = payload;
    },
    // 热门推荐
    changeHotRecommendInfoAction(state, { payload }) {
      state.hotrecommendInfo = payload;
    },
    // 向往的地点
    changeLongforInfoAction(state, { payload }) {
      state.longforInfo = payload;
    },
    // 更好plus房源
    changePlusInfoAction(state, { payload }) {
      state.plusInfo = payload;
    },
  },
  extraReducers: {
    // [fetchHomeDataAction.fulfilled](state, { payload }) {
    //   state.goodPriceInfo = payload;
    // },
  },
});

export const {
  changeGoodPriceInfoAction,
  changeHighScoreInfoAction,
  changeDiscountInfoAction,
  changeHotRecommendInfoAction,
  changeLongforInfoAction,
  changePlusInfoAction,
} = homeSlice.actions;

export default homeSlice.reducer;
