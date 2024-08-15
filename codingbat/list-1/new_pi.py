# Return an int array length 3 containing the first 3 digits of pi, {3, 1, 4}.

# make_pi() → [3, 1, 4]

def make_pi():
    arr = []
    pi = "3.14"
    splitted = pi.split(".")
    mystr = splitted[1]

    arr.append(splitted[0])
    arr.append(mystr[0])
    arr.append(mystr[1])
    return arr

make_pi()    