# Remove duplicates from a list 
data = [1,2,3,4,4,5]
data = list(set(data))
print("Ans1:",data)

# Create a dictionary where the key is a number from 1–5,
print("Ans2:",{i:i**3 for i in range(1,6)})

# Extract names longer than 4 characters:
names = ["Sam", "Peter", "John", "Mike", "Amy"]
print("Ans3:",[name for name in names if len(name)>4])

# Flatten this 2D list 
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
print("Ans4:",[num for row in matrix for num in row])

# args and kwargs
def testFunction(*args, **kwargs):
    for name in args:
        print(kwargs['title'],name)

testFunction("karthik","manas",title="engineer")