
# Return the sum of the numbers in the array, 
# except ignore sections of numbers starting with a 6 and 
# extending to the next 7 (every 6 will be followed by at least one 7). 
# Return 0 for no numbers.

# sum67([1, 2, 2]) → 5
# sum67([1, 2, 2, 6, 99, 99, 7]) → 5
# sum67([1, 1, 6, 7, 2]) → 4

def sum67(nums):
    total_sum = 0
    ignore_section = False
    
    for num in nums:
        if num == 6:
            ignore_section = True
        if not ignore_section:
            total_sum += num
        if num == 7 and ignore_section:
            ignore_section = False

    return total_sum

print(sum67([1, 6, 2, 6, 2, 7, 1, 6, 99, 99, 7]))

