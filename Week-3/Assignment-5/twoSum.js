// Method1: use map() Method

function twoSum(nums, target) {
  let map = new Map();
  const length = nums.length;
  for (let i = 0; i < length; i++) {
    // 因為最後要回傳索引，所以將 key 設為數值，value 設為索引
    map.set(nums[i], i);
  }
  for (let j = 0; j < length; j++) {
    goal = target - nums[j];
    //扣掉兩數之和的其中之一，再判斷剩下的該數是否"存在"且"索引不重複"
    if (map.has(goal) && j != map.get(goal)) {
      return [j, map.get(goal)];
    }
  }
  return "Not found";
}

console.log(twoSum([2, 7, 11, 15], 9));

// Method2: use object() Method
/*
function twoSum(nums, target) {
  let obj = {};
  const length = nums.length;
  for (let i = 0; i < length; i++) {
    obj[nums[i]] = i;
  }
  for (let j = 0; j < length; j++) {
    goal = target - nums[j];
    // (goal in obj) 的寫法表示：判斷 goal 的值有沒有出現在 obj 的 key
    if (goal in obj && j != obj[goal]) {
      return [j, obj[goal]];
    }
  }
  return "Not found";
}
*/
