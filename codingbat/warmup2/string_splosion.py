
# Given a non-empty string like "Code" return a string like "CCoCodCode".

# string_splosion('Code') → 'CCoCodCode'
# string_splosion('abc') → 'aababc'
# string_splosion('ab') → 'aab'

def string_splosion(str):
    result = ""
    if len(str) > 0 :
        for i in range(0, len(str)):
            result += str[:i]
    return result+str

print(string_splosion('ab'))

