class Chai:
    def __init__(self, sweetness_level, milk_level):
        self.sweetness_level = sweetness_level
        self.milk_level = milk_level

    def describe(self):
        return f"This chai has a sweetness level of {self.sweetness_level} and a milk level of {self.milk_level}."
    
    def is_sweet(self):
        return self.sweetness_level > 5
    
    def sip(self):
        return "Sipping the chai..."
    
    def add_sugar(self, amount):
        self.sweetness_level += amount
        return f"Added {amount} units of sugar. New sweetness level: {self.sweetness_level}"
    
    def add_milk(self, amount):
        self.milk_level += amount
        return f"Added {amount} units of milk. New milk level: {self.milk_level}"
    
my_chai = Chai(sweetness_level=7, milk_level=5)
print(my_chai.describe())
print(my_chai.is_sweet())




class Person: 
    def __init__(self):
        print("hello, person initiated!")

karthik = Person()
