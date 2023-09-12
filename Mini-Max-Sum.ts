function miniMaxSum(arr: number[]): string {
  let min: number = Number.MAX_SAFE_INTEGER;
  let max: number = Number.MIN_SAFE_INTEGER;
  let sum: number = 0;

  for (const num of arr) {
    sum += num;
    min = Math.min(min, num);
    max = Math.max(max, num);
  }

  return `${sum - max} ${sum - min}`;
}

console.log(miniMaxSum([1, 2, 3, 4, 5])); // Should print "10 14"
