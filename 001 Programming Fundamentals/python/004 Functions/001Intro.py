# In Python, sometimes you don’t know how many arguments a function will receive.
# Rather than defining fixed parameters, you can use:
# *args → for any number of positional arguments
# **kwargs → for any number of keyword arguments

def greet(*args):
    print(args)
    print(type(args))

namex = ["karthik","ram","manas","tulasi"]

greet()

def greetings(greeting, *names):
    print("this is the greetingsfunc")
    print(names)
    for name in names:
        print(greeting,":",name)

greetings("Hello",*namex)


def show_info(**kwargs):
    print(kwargs)

show_info(name="Tony", suit="Mark 85", power="Arc Reactor")


def describe_hero(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}: {value}")

describe_hero(name="Tony Stark", alias="Iron Man", team="Avengers")


def mission_report(title, *args, **kwargs):
    print(f"Mission: {title}")
    print("Agents Involved:", args)
    print("Mission Details:", kwargs)

mission_report(
    "Infinity War",
    "Tony", "Peter", "Strange",
    location="Titan",
    success=False
)
