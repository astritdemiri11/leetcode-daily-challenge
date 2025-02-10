import { clearDigits } from './10-02-2025';

describe('clearDigits', () => {
  test('delete nothing if no digits are included in string', () => {
    expect(clearDigits('')).toBe('');
    expect(clearDigits('abc')).toBe('abc');
  });

  test('delete all digits and the closest non-digit character to its left', () => {
    expect(clearDigits('cb34')).toBe('');
  });
});
