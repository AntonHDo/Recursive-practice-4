/***********************************************************************
Write a recursive function called `sort` that takes an array of integers, `nums`
and returns an array containing those integers sorted from least to greatest.

Your function should accept a default argument called `sorted` which
holds the currently sorted elements. Each recursive step should add
the smallest number in the `nums` array to the end of `sorted`.

There are many ways to accomplish this task but here's a simple algorithm:

1. Check the base case: If `nums` is empty, then return `sorted`
2. Otherwise, find the smallest element in `nums`
3. Add the smallest element to the end of `sorted`
4. Remove the smallest element from `nums`
5. Recursively call `sort()` with updated `sorted` and `nums`

Examples:

sort([4,1,6,3,1,7]); // [1, 1, 3, 4, 6, 7]
sort([0, 1, -3]); // [-3, 0, 1]
sort([]); // []
***********************************************************************/


function sort(nums, sorted = []) {
    // Your code here
    if (nums.length === 0) {
        return sorted;
    }
    let currSmallest = nums[0];
    let smallestIndex = 0;
    nums.forEach((num, i) => {
        if (num < currSmallest) {
            currSmallest = num;
            smallestIndex = i;
        }
    })

    sorted.push(currSmallest);
    nums.splice(smallestIndex, 1)
    return sort(nums, sorted);
}



// function sort(nums, sorted = []) {
//     debugger

//     if (nums.length === 0) { // keep
//         return sorted
//     } else { // find smallest num, use splice,
//         debugger
//         return sort(nums.slice(2).concat(nums[0] < nums[1] ? nums[0] : nums[1]), sorted)
//         // [0,1,-3]     [-3  0          0     < 1 = 0
//     }

// }
// debugger
console.log(sort([4, 1, 6, 3, 1, 7])); // [1, 1, 3, 4, 6, 7]
console.log(sort([0, 1, -3])); // [-3, 0, 1]
// sort([]); // []

// [0,1,-3] = 0th loop
// [1,-3] = 1st loop 0 => sorted[]
// [-3] = 2nd loop 0,1=>
// [] = 3rd


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
module.exports = sort;
