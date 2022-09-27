var nums = [2, 1, 3, 1, 2, 2, 2, 2, 1];

console.log('getPeacks():', getPeacks());
function getPeacks() {
  var pos = [];
  var peaks = [];
  for (let i = 0; i < nums.length; i++) {
    console.log('nums[i]:', nums[i]);
    var currNum = nums[i];
    if (nums[i - 1] <= currNum && nums[i + 1] <= currNum) {
      if (peaks.includes(currNum)) continue;
      pos.push(i);
      peaks.push(currNum);
    }
  }

  return { pos, peaks };
}
// console.log('nums[10]:', nums[10]);
// function getPeacks() {
//   var pos = [];
//   var peaks = [];
//   nums.forEach((currNum, idx) => {
//     if (nums[idx - 1] <= currNum && nums[idx + 1] <= currNum) {
//       pos.push(idx);
//       peaks.push(currNum);
//     }
//   });
//   return { pos, peaks };
// }
