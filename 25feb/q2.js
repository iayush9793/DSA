let sorted_array_test = ['a','b','d','e','f','g','h','i','x','z'];
let target = 10;

function binarySearch(arr, numberToBeSearched) {
    let l = 0;
    let u = arr.length - 1;
    let mid = l + (u - l)/2

    while(l <= u) {
        let mid = Math.floor(l + (u - l)/2);
        
        if (arr[mid] === numberToBeSearched) {
            return true;
        }
        if (arr[mid] < numberToBeSearched) {
            l = mid + 1;
        } else {
            u = mid - 1;
        }
    }

    return false;
}
console.log('Alphabet exists', binarySearch(sorted_array_test, 'z'));