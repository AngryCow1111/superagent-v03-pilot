// 按分数降序；末席同分时按原报名表行序决出（稳定排序保持原行序）
export function selectWaitlist(rows, seats) {
  const sorted = [...rows].sort((a, b) => b.score - a.score);
  return sorted.slice(0, seats);
}
