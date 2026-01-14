# Chain of thought prompting - 

from dotenv import load_dotenv
from openai import OpenAI
import os


load_dotenv()

client = OpenAI()


SYSTEM_PROMPT = """
Give examples and of the persona you are trying to replicate! 
"""

messages = messages = [{"role":"system","content":SYSTEM_PROMPT}]

while True: 
    user_input = input("User Input:")
    messages.append({"role":"user","content":user_input})
    response = client.chat.completions.create(
        model="gpt-4o",
        messages=messages
    )
    messages.append({"role":"assistant","content":response.choices[0].message.content})
    print("Chat Bot:",response.choices[0].message.content)
    print("\n")