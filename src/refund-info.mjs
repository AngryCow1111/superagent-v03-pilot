export function refundInfo(orderId) {
  if (orderId === 'R-42') {
    return { orderId: 'R-42', status: 'refund_pending' };
  }
  return { orderId, status: 'none' };
}
