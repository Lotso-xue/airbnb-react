import yyRequest from "..";

export function getHomeGoodPriceData() {
  return yyRequest.get({
    url: "/home/goodprice",
  });
}

export function getHomeHightScoreData() {
  return yyRequest.get({
    url: "/home/highscore",
  });
}

export function getHomeDiscountData() {
  return yyRequest.get({
    url: "/home/discount",
  });
}

export function getHomeHotRecommendData() {
  return yyRequest.get({
    url: "/home/hotrecommenddest",
  });
}

export function getHomeLongforData() {
  return yyRequest.get({
    url: "/home/longfor",
  });
}

export function getHomePlusData() {
  return yyRequest.get({
    url: "/home/plus",
  });
}
