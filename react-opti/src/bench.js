const nbs = (new Array(1_000_000)).fill(0).map(() => Math.random());

function findLowerCount(arrayNbs, val) {
  return arrayNbs.filter((el) => el < val).length;
}

// Sans memoisation
console.time('findLowerCount');
console.log(findLowerCount(nbs, 0.5)); // 498630
console.timeEnd('findLowerCount'); // 71.366ms

console.time('findLowerCount');
console.log(findLowerCount(nbs, 0.5)); // 498630
console.timeEnd('findLowerCount'); // 60.217ms

console.time('findLowerCount');
console.log(findLowerCount(nbs, 0.5)); // 498630
console.timeEnd('findLowerCount'); // 43.323ms