import yyRequest from "..";

export function getEntireRoomList(offset = 0, size = 20) {
  return yyRequest.get({
    url: "entire/list",
    params: {
      offset,
      size,
    },
  });
}
