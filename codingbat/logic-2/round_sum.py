
# For this problem, we will round an int value up to the next multiple of 10
# if its rightmost digit is 5 or more, so 15 rounds up to 20. 
# Alternately, round down to the previous multiple of 10 if its rightmost digit is less than 5,
# so 12 rounds down to 10. 
# Given 3 ints, a b c, return the sum of their rounded values. 
# To avoid code repetition, write a separate helper "def round10(num):" and call it 3 times. 
# Write the helper entirely below and at the same indent level as round_sum().

# round_sum(16, 17, 18) → 60
# round_sum(12, 13, 14) → 30
# round_sum(6, 4, 4) → 10

def round_sum(a, b, c):
    arr = []
    arr.append(a)
    arr.append(b)
    arr.append(c)
    for i in range(len(arr)):
        leftovers = arr[i]%10
        if leftovers >= 5:
            arr[i] = arr[i]+10-leftovers
        elif leftovers < 5:
            arr[i] = arr[i]-leftovers
    return arr[0] + arr[1] +arr[2]


print(round_sum(6, 4, 4))

