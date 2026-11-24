export function selectWaitlist(rows, seats) {
  // P1-PILOT-V2: seats === undefined 时默认取 1 席；其余非正整数（0、负数、非整数）返回空数组
  if (seats === undefined) {
    seats = 1;
  }
  if (typeof seats !== 'number' || !Number.isInteger(seats) || seats <= 0) {
    return [];
  }
  return rows
    .slice()
    .sort((a, b) => b.score - a.score)
    .slice(0, seats);
}
