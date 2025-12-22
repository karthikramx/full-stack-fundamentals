

a = {}
print(type(a))  # <class 'dict'>    

# An Object is an instance of a Class
class MyClass:
    x = 5   

p1 = MyClass()
print(type(p1))  # <class '__main__.MyClass'>
print("p1 is an object of MyClass:", isinstance(p1, MyClass))  # True

