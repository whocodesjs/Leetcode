# Returns the indices of two numbers in an array that add up to a target number.

class Solution:
    def twoSum(self, nums, target):
        num_to_index = {}
        
        for i, num in enumerate(nums):
            complement = target - num
            
            if complement in num_to_index:
                return [num_to_index[complement], i]
            
            num_to_index[num] = i
        
        return []
