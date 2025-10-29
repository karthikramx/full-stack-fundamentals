# This is a dynamic array
# ordered, changeable, and allow duplicates

# Key traits:
# Ordered → maintains the order you insert elements.
# Mutable → you can change items.
# Allows duplicates.
# Indexed → can access items via index like numbers[0].

numbers = [1,2,3,3,5]
numbers.append(6)
numbers.remove(2)
print(numbers)

x = ['test','test2']
print(x)
x.insert(1,'hello')
print(x)
x.reverse()
print(x)