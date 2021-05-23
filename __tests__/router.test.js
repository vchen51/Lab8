/**
 * @jest-environment jsdom
 */

import { pushToHistory } from '../scripts/router.js';

describe('test pushToHistory', () => {
    test('test case settings', () => {
        let curr = pushToHistory('settings', 0);
        expect(curr.state.page).toBe('settings');
        expect(curr.length).toBe(history.length);
    });

    test('test case entr', () => {
        let curr = pushToHistory('entry', 1); 
        expect(curr.state.page).toBe('entry1');;
        expect(curr.length).toBe(history.length);
    });

    test('test default', () => {
        let curr = pushToHistory('', 0);
        expect(curr.state.page).toBe(undefined);
        expect(curr.length).toBe(history.length); 
    });
})