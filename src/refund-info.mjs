export function refundInfo(orderId) {
  return { orderId: orderId, status: 'refund_pending' };
}
