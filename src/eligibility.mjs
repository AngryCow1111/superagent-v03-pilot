export function selectWaitlist(rows, seats) {
  return rows
    .map((row, index) => ({ row, index }))
    .sort((a, b) => {
      if (b.row.score !== a.row.score) return b.row.score - a.row.score;
      return a.index - b.index;
    })
    .slice(0, seats)
    .map((entry) => entry.row);
}
