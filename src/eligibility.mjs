export function selectWaitlist(rows, seats) {
  // 末席同分规则：按原报名表行序，原表靠前者优先。
  return rows.slice(0, seats);
}
