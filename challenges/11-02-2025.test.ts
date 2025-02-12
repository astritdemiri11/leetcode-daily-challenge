import { removeOccurrences } from './11-02-2025';

describe('removeOccurrences', () => {
  test('remove occurrences in string', () => {
    expect(removeOccurrences('daabcbaabcbc', 'abc')).toBe('dab');
    expect(removeOccurrences('aabababa', 'aba')).toBe('ba');
    expect(removeOccurrences('axxxxyyyyb', 'xy')).toBe('ab');
  });
});
