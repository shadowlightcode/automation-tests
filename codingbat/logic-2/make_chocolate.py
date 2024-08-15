# We want make a package of goal kilos of chocolate. 
# We have small bars (1 kilo each) and big bars (5 kilos each). 
# Return the number of small bars to use, assuming we always use big bars before small bars.
# Return -1 if it can't be done.

# make_chocolate(4, 1, 9) → 4
# make_chocolate(4, 1, 10) → -1
# make_chocolate(4, 1, 7) → 2

def make_chocolate(small, big, goal):
    max_big = min(big, goal // 5)  # Use as many big bars as possible, but not more than necessary
    remainder = goal - max_big * 5  # Calculate how much is left to reach the goal using small bars
    if remainder <= small:
        return remainder  # Return the number of small bars needed
    else:
        return -1 

print(make_chocolate(3,1,9))