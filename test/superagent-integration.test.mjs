import assert from 'node:assert/strict';
import { test } from 'node:test';
import { refundInfo } from './orders/src/refund-info.mjs';
import { refundLabel } from './web/src/refund-label.mjs';
test('[orders] API exposes the pinned schema', () => {
  assert.deepEqual(refundInfo('R-42'), { orderId: 'R-42', status: 'refund_pending' });
});
test('[web] merchant UI reads the actual API response', () => {
  assert.equal(refundLabel(refundInfo('R-42')), '退款处理中');
});
