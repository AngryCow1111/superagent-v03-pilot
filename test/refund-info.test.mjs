import assert from 'node:assert/strict';
import { test } from 'node:test';
import { refundInfo } from '../src/refund-info.mjs';
test('refund API returns the pinned wire contract', () => {
  assert.deepEqual(refundInfo('R-42'), { orderId: 'R-42', status: 'refund_pending' });
});
