// Description: https://leetcode.com/problems/remove-all-occurrences-of-a-substring/description/

export function removeOccurrences(s: string, part: string): string {
  let previousLength = 0;

  do {
    previousLength = s.length;
    s = s.replace(part, '');
  } while (s.length < previousLength);

  return s;
}
