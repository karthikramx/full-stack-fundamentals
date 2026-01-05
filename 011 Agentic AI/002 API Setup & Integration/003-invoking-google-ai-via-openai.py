import openai
from dotenv import load_dotenv
from openai import OpenAI
import os

load_dotenv()

print(os.environ.get('GOOGLEGENAI_API_KEY'))

client = OpenAI(
    api_key=os.environ.get('GOOGLEGENAI_API_KEY'),
    base_url="https://generativelanguage.googleapis.com/v1beta/"
)

response = client.chat.completions.create(
    model="gemini-2.5-flash",
    messages=[
        {"role":"user","content":"Hey There, what is quantum computing?"}
    ]
)

print(response.choices[0].message.content)