export function refundInfo(orderId) {
  return { orderId, status: 'refund_pending' };
}
