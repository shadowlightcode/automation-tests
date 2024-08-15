
# Given an array length 1 or more of ints, 
# return the difference between the largest and smallest values in the array. 
# Note: the built-in min(v1, v2) and max(v1, v2) functions return the smaller or larger of two values.

# big_diff([10, 3, 5, 6]) → 7
# big_diff([7, 2, 10, 9]) → 8
# big_diff([2, 10, 7, 2]) → 8

def big_diff(nums):
    small = 0
    big = 0
    if len(nums) >= 1 :
        for i in range(len(nums)):
            big = max(big, nums[i])
            if i == 0:
                small = min(big, nums[i])
            else: small = min(small, nums[i])

    return big-small    

print(big_diff([10, 3, 5, 6]))

