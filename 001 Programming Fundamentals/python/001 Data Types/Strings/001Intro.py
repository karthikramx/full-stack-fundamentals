# Basics of string manipulation

s = "karthik ram"
print(len(s))         
print(s[0])          
print(s[-1])          
print(s[2:5])        
print(s[::-1])   
print(s[::-1])

print(s.title())
print(s.split(" "))
print(" ".join(["karthik","ram"]))
print(s.replace('k',"X"))

# Reverse a string
test =  " this is a test string"
print(test[::-1])

# Count vowels in a string
vowels = "aeiou"
print(sum(1 for i in test if i in vowels))

# Check Palindrome
testPalidrome = "malayalam"
print(testPalidrome == testPalidrome[::-1])

# Remove duplicates while maintianing order
print("".join(dict.fromkeys(testPalidrome)))

# Frequency count
from collections import Counter
print(Counter("karthik ram"))