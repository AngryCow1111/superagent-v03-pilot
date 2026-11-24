export function selectWaitlist(rows, seats) {
  // P1-PILOT-V1: 非正整数席位（含 0、负数、非整数、undefined）返回空数组
  if (typeof seats !== 'number' || !Number.isInteger(seats) || seats <= 0) {
    return [];
  }
  return rows
    .slice()
    .sort((a, b) => b.score - a.score)
    .slice(0, seats);
}
