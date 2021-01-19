const numbers = [
    [1, 2, 3, 4],
    [3, 6, [5, 6], 8, 2,[2, 4], 9],
    [4, 2, [6, 7, [2, 6, 1]]]
];


const sum = (nums) => {
    for (element of nums) {
        if (element.length>1) {
            return sum(element) + sum(nums.slice(1))
        }
        else {
            break;
        }
    }
   if (nums.length===0) {
        return 0;
    }
    else {
        return parseInt(nums[0]) + sum(nums.slice(1));
}
}

console.log(sum(numbers));