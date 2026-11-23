export function selectWaitlist(rows, seats) {
  const sorted = [...rows].sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    const an = String(a.name);
    const bn = String(b.name);
    return an < bn ? -1 : an > bn ? 1 : 0;
  });
  return sorted.slice(0, seats);
}
