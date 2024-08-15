# Given an array of ints length 3, return an array with the elements
#  "rotated left" so {1, 2, 3} yields {2, 3, 1}.

# rotate_left3([1, 2, 3]) → [2, 3, 1]
# rotate_left3([5, 11, 9]) → [11, 9, 5]
# rotate_left3([7, 0, 0]) → [0, 0, 7]

def rotate_left3(nums):
    arr = [] 
    for i in range(len(nums)):
        if i != 0:
            arr.append(nums[i])
    arr.append(nums[0])    
    return arr

print(rotate_left3([1,2,3]))