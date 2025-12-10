/**
 * Created by ZeroInfinity on 8/6/2017.
 */

function AtillaNoDuplicateSorting(arr) {
  if (!arr.length) return [];

  // Ensure all are integers
  // (could throw instead of silently converting)
  const ints = arr.map(n => {
    if (!Number.isInteger(n)) {
      throw new TypeError("Only integers are supported");
    }
    return n;
  });

  let min = Infinity;
  let max = -Infinity;
  for (const v of ints) {
    if (v < min) min = v;
    if (v > max) max = v;
  }

  const k = max - min + 1;

  // Bail out to normal sort if range is too big relative to n
  if (k > ints.length * 10) {
    // fallback: unique + sort
    return [...new Set(ints)].sort((a, b) => a - b);
  }

  const buckets = new Array(k);

  for (const v of ints) {
    const idx = v - min;
    buckets[idx] = v; // dedupe
  }

  const result = [];
  for (let i = 0; i < k; i++) {
    if (buckets[i] !== undefined) {
      result.push(buckets[i]);
    }
  }

  return result;
}

function generateRandomNumbersByquantityAndMax(quantity, max, min) {
  const arr = [];
  
  while (arr.length < quantity) {
    var candiateInt = Math.floor(Math.random() * (max - min) + min);
    arr.push(candiateInt);
  }

  return arr;
}

let numbers = generateRandomNumbersByquantityAndMax(1000000, 1000000, 900000);

console.time('sorting');
let sorted = AtillaNoDuplicateSorting(numbers);
console.timeLog('sorting');
console.timeEnd('sorting');
console.log('sorted', sorted.length);
