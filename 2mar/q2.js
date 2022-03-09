var sortColors = function(nums) {
    function swap(i, j) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }

    let low = 0;
    let high = nums.length - 1;
    let mid = 0;

    while (mid <= high) {
    const n = nums[mid];

      if (n === 0) {
        swap(mid, low);
        low++;
        mid++;
      } else if (n === 2) {
        swap(mid, high);
        high--;
      } else {
        mid++;
      }
    }
};