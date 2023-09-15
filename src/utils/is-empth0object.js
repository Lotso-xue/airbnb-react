export function isEmptyObj(obj) {
  // 判断是不是一个空对象，返回布尔类型
  return !!Object.keys(obj).length;
}
