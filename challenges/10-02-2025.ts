// Description: https://leetcode.com/problems/clear-digits/description/

export function clearDigits(s: string): string {
  const charsWithNoDigits: string[] = [];

  for(const char of s) {
    if (isNaN(+char)) {
      charsWithNoDigits.push(char);
      continue;
    }

    charsWithNoDigits.pop();
  }

  return charsWithNoDigits.join("");
}
