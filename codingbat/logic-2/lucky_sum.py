# Given 3 int values, a b c, return their sum. 
# However, if one of the values is 13 then it does not count towards the sum 
# and values to its right do not count. 
# So for example, if b is 13, then both b and c do not count.

# lucky_sum(1, 2, 3) → 6
# lucky_sum(1, 2, 13) → 3
# lucky_sum(1, 13, 3) → 1

def lucky_sum(a, b, c):
    arr = []
  arr.append(a)
  arr.append(b)
  arr.append(c)
  for i in range(len(arr)):
    if arr[i] == 13:
      return 0
    elif arr[i+1] == 13:
      return arr[0]
    elif arr[i+2] == 13:
      return arr[0] + arr[1]
    else: return a+b+c   

#Alternative
def lucky_sum(a, b, c):
    arr = [a, b, c]
    for i in range(len(arr)):
        if arr[i] == 13:
            return sum(arr[:i])  # Return the sum up to the element before 13
    return sum(arr)