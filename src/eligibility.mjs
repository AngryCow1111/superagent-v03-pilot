export function selectWaitlist(rows, seats) {
  // 按分数从高到低稳定排序（同分保持报名表原行序），取前 seats 名。
  // 使用映射索引 + slice 避免修改原输入数组。
  return rows
    .map((row, index) => ({ row, index }))
    .sort((a, b) =>
      b.row.score - a.row.score || a.index - b.index
    )
    .slice(0, seats)
    .map((entry) => entry.row);
}
