import { describe, expect, it } from 'vitest';
import { setupRootAppContent } from './setupRootAppContent';
import { setupCounter } from './counter.js';

describe('Counter', async () => {
    it('Deve ter um h1', async () => {
        const app = document.createElement('div');
        app.innerHTML = setupRootAppContent();
        const h1 = app.querySelector('h1');
        expect(h1.textContent).toBe('Get started');
    });

    it('Deve ter um botão com id counter', async () => {
        const app = document.createElement('div');
        app.innerHTML = setupRootAppContent();
        const b = app.querySelector('#counter');
        expect(b).toBeEmptyDOMElement();
        setupCounter(b);
        expect(b.textContent).toBe('Count is 0');
    });

    it('Ao clicar no botão, ele deve incrementar o contador', async () => {
        const app = document.createElement('div');
        app.innerHTML = setupRootAppContent();
        const b = app.querySelector('#counter');
        setupCounter(b);
        b.click();
        b.click();
        b.click();
        expect(b.textContent).toBe('Count is 3');
    });
});