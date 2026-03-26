import { test, expect, it, describe } from 'vitest';
import { proximo } from './proximo';

describe('proximo()', async () => {
    it('deve retornar 1 ao receber 0', () => {
        expect(proximo(0)).toBe(1);
    });

    it('deve retornar 3 ao receber 1', () => {
        expect(proximo(1)).toBe(3);
    });

    it('deve retornar 5 ao receber 2', () => {
        expect(proximo(2)).toBe(5);
    });

    it('deve retornar 4 ao receber 3', () => {
        expect(proximo(3)).toBe(4);
    });

    it('deve retornar 6 ao receber 4', () => {
        expect(proximo(4)).toBe(6);
    });
});