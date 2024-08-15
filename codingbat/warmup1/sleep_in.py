
# The parameter weekday is True if it is a weekday, 
# and the parameter vacation is True if we are on vacation.
# We sleep in if it is not a weekday or we're on vacation. 
# Return True if we sleep in.

# sleep_in(False, False) → True
# sleep_in(True, False) → False
# sleep_in(False, True) → True

def main():
    print(sleep_in(True, True))

def sleep_in(weekday, vacation):
    if weekday == True and vacation == False :
        return False
    
    return True
   
if __name__ == "__main__":
    main()

# Solution can be better 
# This can be shortened to: return(not weekday or vacation)
