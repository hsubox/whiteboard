# given string of characters, return true if the characters are a permuation of a palindrome and false otherwise

def can_make_palidrome(str):
    letter_freq = set([]);
    for c in str:
        if c in letter_freq:
            letter_freq.remove(c)
        else:
            letter_freq.add(c)
    if len(str) % 2 == 0 and len(letter_freq) == 0:
        return True
    elif len(str) % 2 != 0 and len(letter_freq) == 1:
        return True
    else:
        return False

assert can_make_palidrome("tacocat") == True
assert can_make_palidrome("tacotac") == True
assert can_make_palidrome("") == True
assert can_make_palidrome("abbb") == False

# this solution has run time O(n)
