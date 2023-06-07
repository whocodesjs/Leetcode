/** Returns the indices of two numbers in an array that add up to a target number.*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const twoSum = (nums, target) => {
  const map = new Map();
   
  for (let i = 0; i < nums.length; i++) { 
    const complement = target - nums[i];
    
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    
    map.set(nums[i], i);
  }
  
  return [];
};