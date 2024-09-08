import { checkColchetes } from './utils';

describe('checkColchetes', () => {
  it('should return true for balanced parentheses', () => {
    expect(checkColchetes('()')).toBe(true);
    expect(checkColchetes('[]')).toBe(true);
    expect(checkColchetes('{}')).toBe(true);
    expect(checkColchetes('({[]})')).toBe(true);
  });

  it('should return false for unbalanced parentheses', () => {
    expect(checkColchetes('(')).toBe(false);
    expect(checkColchetes(')')).toBe(false);
    expect(checkColchetes('[')).toBe(false);
    expect(checkColchetes(']')).toBe(false);
    expect(checkColchetes('{')).toBe(false);
    expect(checkColchetes('}')).toBe(false);
    expect(checkColchetes('({[})')).toBe(false);
    expect(checkColchetes('a')).toBe(false);
  });
});