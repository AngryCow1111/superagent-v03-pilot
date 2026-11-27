export function selectWaitlist(rows, seats) {
  // 末席同分规则：按原报名表行序，原表靠前者优先。
  // 不修改输入数组，返回的元素仍为原对象引用。
  return [...rows]
    .sort((a, b) => b.score - a.score)
    .slice(0, seats);
}
