var firstMissingPositive = function(nums) {
    var swap = function(i, j) {
      var tmp = nums[i];
      nums[i] = nums[j];
      nums[j] = tmp;
    };

    for (let i = 0; i < nums.length; i++) {
      while (0 < nums[i] && nums[i] - 1 < nums.length
        && nums[i] != i + 1
        && nums[i] != nums[nums[i] - 1]) {
        swap(i, nums[i] - 1);
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != i + 1) {
      return i + 1;
    }
  }
  return nums.length + 1;
};

var A = [1, 2,3,5,6,7];
console.log(firstMissingPositive(A)); 