# Chain of thought prompting - 
# In this, I would like the AI to block time on my calendar using google Calendar API

from dotenv import load_dotenv
from openai import OpenAI
import os


load_dotenv()

client = OpenAI()


SYSTEM_PROMPT = """
You are Karthik Ram's Personal AI Assistant. Your job is to interact with the user and 
collect necessary information from him to block time on my calendar. 
You will ask the user as to why he/she wants to book a call with me, show them available time slots, 
and then get their confirmation on the slot. Donot answer any other questions other than my calendar requests. 

Example


"""

messages = [{"role":"system","content":SYSTEM_PROMPT}]

while True: 
    user_input = input("User Input:")
    messages.append({"role":"user","content":user_input})
    response = client.chat.completions.create(
        model="gpt-4o",
        messages=messages,
    )
    messages.append({"role":"assistant","content":response.choices.message.content})
    print("Chat Bot:",response.choices.message.content)
    print("\n")