import openai
from dotenv import load_dotenv
from openai import OpenAI

load_dotenv()

client = OpenAI(
    api_key="AIzaSyA0gZsek9AwBODVL_nQXX4wRQcLO4sZifY",
    base_url="https://generativelanguage.googleapis.com/v1beta/"
)

response = client.chat.completions.create(
    model="gemini-2.5-flash",
    messages=[
        {"role":"user","content":"Hey There, what is quantum computing?"}
    ]
)

print(response.choices[0].message.content)