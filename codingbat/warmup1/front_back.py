
# Given a string, return a new string where the first 
# and last chars have been exchanged.

# front_back('code') → 'eodc'
# front_back('') → 'a'
# front_back('ab') → 'ba'

def front_back(str):

    if len(str)>1:
        result = str[len(str)-1]
        for i in range(1, len(str)-1):
            result +=str[i]
        return result + str[0]
    return str

print(front_back(''))