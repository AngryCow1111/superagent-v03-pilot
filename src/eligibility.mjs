export function selectWaitlist(rows, seats) {
  return rows
    .map((row, index) => ({ row, index }))
    .sort((a, b) => b.row.score - a.row.score || a.index - b.index)
    .slice(0, seats)
    .map((entry) => entry.row);
}
