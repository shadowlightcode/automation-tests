
# Return the sum of the numbers in the array, returning 0 for an empty array. 
# Except the number 13 is very unlucky, so it does not count
# and numbers that come immediately after a 13 also do not count.

# sum13([1, 2, 2, 1]) → 6
# sum13([1, 1]) → 2
# sum13([1, 2, 2, 1, 13]) → 6

def sum13(nums): 
    sum=0
    count = 0 
    for i in range(len(nums)):
        if (nums[i]!=13 and i == 0) or (nums[i]!=13 and nums[i-1]!=13):
            sum += nums[i]
    return sum

print(sum13([13, 13]))