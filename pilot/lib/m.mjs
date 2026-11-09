export function median(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    throw new RangeError("median requires a non-empty list");
  }
  const s = [...numbers].sort((a, b) => a - b);
  const mid = Math.floor(s.length / 2);
  return s.length % 2 ? s[mid] : (s[mid - 1] + s[mid]) / 2;
}
