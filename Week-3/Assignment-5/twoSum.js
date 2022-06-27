// // Method1: use map() Method

function twoSum(nums, target) {
  let map = new Map();
  const length = nums.length;
  for (let i = 0; i < length; i++) {
    // 因為最後要回傳索引，所以將 key 設為數值，value 設為索引
    map.set(nums[i], i);
    goal = target - nums[i];
    //扣掉兩數之和的其中之一，再判斷剩下的該數是否"存在"且"索引不重複"
    if (map.has(goal) && i != map.get(goal)) {
      return [map.get(goal), i];
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
    goal = target - nums[i];
    // (goal in obj) 的寫法表示：判斷 goal 的值有沒有出現在 obj 的 key
    if (goal in obj && i != obj[goal]) {
      return [obj[goal], i];
    }
  }
  return "Not found";
}
*/
