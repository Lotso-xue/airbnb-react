import { getEntireRoomList } from "@/services/modules/entire";
import * as actionTypes from "./constants";

export const changeCurrentPageAction = (currentPage) => ({
  type: actionTypes.CHANGE_CURRENT_PAGE,
  currentPage,
});

export const changeRoomListAction = (roomList) => ({
  type: actionTypes.CHANGE_ROOM_LIST,
  roomList,
});

export const changeTotalCountAction = (totalCount) => ({
  type: actionTypes.CHANGE_TOTAL_COUNTE,
  totalCount,
});

export const changeIsLoadingAction = (isLoading) => ({
  type: actionTypes.CHANGE_IS_LOADING,
  isLoading,
});

// 网络请求
export const fetchRoomListAction = (page = 0) => {
  return async (dispatch, getState) => {
    // 修改页码
    dispatch(changeCurrentPageAction(page));

    // 获取页码
    dispatch(changeIsLoadingAction(true));
    // const currentPage = getState().entire.currentPage;
    const res = await getEntireRoomList(page * 20);
    dispatch(changeIsLoadingAction(false));
    // console.log(res);

    // 拿到页码的数据保存到redux中
    const roomList = res.list;
    const totalCount = res.totalCount;
    dispatch(changeRoomListAction(roomList));
    dispatch(changeTotalCountAction(totalCount));
  };
};
