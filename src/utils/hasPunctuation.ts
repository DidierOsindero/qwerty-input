export function hasPunctuation(string: string): boolean {
  for (const letter of string) {
    if ("!&?".includes(letter)) {
      return true;
    }
  }
  return false;
}
