import openai
from dotenv import load_dotenv
from openai import OpenAI

load_dotenv()

client = OpenAI()

response = client.chat.completions.create(
    model="gpt-4o",
    messages=[
        {"role":"user","content":"Hey There, what is quantum computing?"}
    ]
)

print(response.choices[0].message.content)