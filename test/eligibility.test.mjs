import assert from 'node:assert/strict';
import { test } from 'node:test';
import { selectWaitlist } from '../src/eligibility.mjs';

test('sorts by score without modifying input', () => {
  const rows = [{name:'Low',score:80},{name:'Top',score:100}];
  assert.deepEqual(selectWaitlist(rows, 1), [rows[1]]);
  assert.equal(rows[0].name, 'Low');
});
test('keeps original application order among equal scores', () => {
  const rows = [{name:'Zed',score:95},{name:'Ada',score:95},{name:'Top',score:100}];
  assert.deepEqual(selectWaitlist(rows, 2), [rows[2],rows[0]]);
});
