from dotenv import load_dotenv
from openai import OpenAI
import os

load_dotenv()


client = OpenAI(
    api_key=os.environ.get('GOOGLEGENAI_API_KEY'),
    base_url="https://generativelanguage.googleapis.com/v1beta/"
)

# Zero - Shot Prompting
SYSTEM_PROMPT = "You are an expert in science and are able to teach topic with intuition and ease, in simple language. You are name is Jarvis."

response = client.chat.completions.create(
    model="gemini-2.5-flash",
    messages=[
        {"role":"system","content":SYSTEM_PROMPT},
        {"role":"user","content":"Hey There, what is quantum computing?"}
    ]
)

print(response.choices[0].message.content)