# Given a string, return the count of the number of times that a substring length 2 appears 
# in the string and also as the last 2 chars of the string,
# so "hixxxhi" yields 1 (we won't count the end substring).

#Нужно пояснение задачи!

# last2('hixxhi') → 1  len = 6     
# last2('xaxxaxaxx') → 1
# last2('axxxaaxx') → 2

def last2(str):
    count = 0
    if len(str) >= 2 :
        count = 1
        start = str[:3]
        temp=""
        for i in range(3, len(str)):
            temp += str[i]
            if len(temp) == 3 and start == temp:
                count = count+1
                temp = ""
            elif len(temp) == 3 and start != temp: 
                temp = temp[1:3]                
    return count
    

print(last2('aer'))

# def last2(str):
#   # Screen out too-short string case.
#   if len(str) < 2:
#     return 0
  
#   # last 2 chars, can be written as str[-2:]
#   last2 = str[len(str)-2:]
#   count = 0
  
#   # Check each substring length 2 starting at i
#   for i in range(len(str)-2):
#     sub = str[i:i+2]
#     if sub == last2:
#       count = count + 1

#   return count
