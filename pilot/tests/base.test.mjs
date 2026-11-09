import test from 'node:test';
import assert from 'node:assert/strict';
import { add } from '../lib/base.mjs';

test('base', () => assert.equal(add(2, 3), 5));
