import { maximumSum } from './12-02-2025';

describe('maximumSum', () => {
  test('max sum of a pair with equal sum of digits', () => {
    expect(maximumSum([18, 43, 36, 13, 7])).toBe(54);
    expect(
      maximumSum([
        229, 398, 269, 317, 420, 464, 491, 218, 439, 153, 482, 169, 411, 93,
        147, 50, 347, 210, 251, 366, 401,
      ]),
    ).toBe(973);
    expect(maximumSum([10, 12, 19, 14])).toBe(-1);
  });
});
