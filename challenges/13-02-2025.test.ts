import { minOperations } from './13-02-2025';

describe('minOperations', () => {
  test('minimum operations to exceed threshold value II', () => {
    expect(minOperations([2, 11, 10, 1, 3], 10)).toBe(2);
    expect(minOperations([1, 1, 2, 4, 9], 20)).toBe(4);
  });
});
