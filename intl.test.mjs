import test from 'node:test';
import assert from 'node:assert';
import {formatCurrency, formatDate, formatNumber, formatRelativeTime} from "./intl.mjs";

// https://nodejs.org/dist/latest-v18.x/docs/api/test.html

test('date formatter', (t) => {
    const value = new Date(2010, 0, 15);
    const actual = formatDate(value);
    assert.strictEqual(actual, '1/15/2010');
});

test('current formatter', (t) => {
    const actual = formatCurrency(2.569);
    assert.strictEqual(actual, '$2.57');
});

test('number formatter', (t) => {
    const actual = formatNumber(1452.752);
    assert.strictEqual(actual, '1,452.752');
});

test('relate time', async (t) => {
    await t.test('in days', () => {
        const actual = formatRelativeTime(2, 'day');
        assert.strictEqual(actual, 'pasado mañana');
    });

    await t.test('in hours', () => {
        const actual = formatRelativeTime(-10, 'hours');
        assert.strictEqual(actual, 'hace 10 horas');
    });
});
