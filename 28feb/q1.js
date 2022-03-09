function hell(arr, target) {
    for (let i = 1; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] == target) {
                return [i, j]
            }
        }
    }
};
nums=[1,2,3,4,5]
let target = 5;

console.log(hell(nums, target));