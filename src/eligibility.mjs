export function selectWaitlist(rows, seats) {
  const sorted = [...rows].sort((a, b) => b.score - a.score);
  return sorted.slice(0, seats);
}
