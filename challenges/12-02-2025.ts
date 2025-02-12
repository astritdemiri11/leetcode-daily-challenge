// Description: https://leetcode.com/problems/max-sum-of-a-pair-with-equal-sum-of-digits/description/

export function maximumSum(nums: number[]): number {
  let maxValue = -1;

  if (nums.length < 2) {
    return maxValue;
  }

  const digitsSums: Record<number, number> = {};

  for (const num of nums) {
    let digitSum = 0;
    let tempNum = num;

    while (tempNum > 0) {
      digitSum += tempNum % 10;
      tempNum = Math.floor(tempNum / 10);
    }

    if (digitsSums[digitSum]) {
      maxValue = Math.max(maxValue, num + digitsSums[digitSum]);
    }

    digitsSums[digitSum] = Math.max(digitsSums[digitSum] ?? 0, num);
  }

  return maxValue;
}
