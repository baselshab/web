function twoSum(nums, target) {
    const numIndices = {};
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (numIndices.hasOwnProperty(complement)) { return [numIndices[complement], i]; }
        numIndices[nums[i]] = i;
    }
    return [];
}
const nums = [2, 7, 11, 15];
const target = 9;
const result = twoSum(nums, target);
console.log(result); // Output: [0, 1]
