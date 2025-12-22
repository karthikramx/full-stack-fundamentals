# List Comprehensions
# A concise way to create lists (or modify existing ones) in a single line.

test = [i for i in range(1,100) if i%2==0]
print(test)

# print if a number is even or odd
print([ ("even",i) if i % 2 == 0 else ("odd",i) for i in range(1,10)])