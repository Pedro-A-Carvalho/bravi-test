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
    expect(checkColchetes('([)]')).toBe(false);
    expect(checkColchetes('((())')).toBe(false);
    expect(checkColchetes('(()))')).toBe(false);
    expect(checkColchetes('({[}])')).toBe(false);
  });

  it('should return true for empty string', () => {
    expect(checkColchetes('')).toBe(true);
  });

  it('should return false for strings with only non-parentheses characters', () => {
    expect(checkColchetes('abc')).toBe(false);
    expect(checkColchetes('123')).toBe(false);
    expect(checkColchetes('!@#')).toBe(false);
  });

  it('should return false for strings with balanced parentheses and other characters', () => {
    expect(checkColchetes('(a[b]{c})')).toBe(false);
    expect(checkColchetes('a(b)c[d]e{f}')).toBe(false);
  });

  it('should return false for strings with unbalanced parentheses and other characters', () => {
    expect(checkColchetes('(a[b]{c}')).toBe(false);
    expect(checkColchetes('a(b]c[d]e{f}')).toBe(false);
  });
});