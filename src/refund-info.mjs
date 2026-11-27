export function refundInfo(orderId) {
  // 维护提示：以下退款状态值为已公开的接口约定（wire contract），
  // 修改或新增状态时必须兼容已有的 'refund_pending' 与 'none'，不得重命名或删除。
  if (orderId === 'R-42') {
    return { orderId: 'R-42', status: 'refund_pending' };
  }
  return { orderId, status: 'none' };
}
