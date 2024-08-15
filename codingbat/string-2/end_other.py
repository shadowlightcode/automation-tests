
# Given two strings, return True if either of the strings appears at the very end of the other string, 
# ignoring upper/lower case differences (in other words, the computation should not be "case sensitive"). 
# Note: s.lower() returns the lowercase version of a string.

# end_other('Hiabc', 'abc') → True
# end_other('AbC', 'HiaBc') → True
# end_other('abc', 'abXabc') → True

def end_other(a, b):
 r_a = a.lower()
 r_b = b.lower()
  if len(r_a) > len(r_b):
    return r_a.endswith(r_b)
  else: return r_b.endswith(r_a)

