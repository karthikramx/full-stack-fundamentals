from dotenv import load_dotenv
from openai import OpenAI
import os

load_dotenv()

client = OpenAI(
    api_key=os.environ.get('GOOGLEGENAI_API_KEY'),
    base_url="https://generativelanguage.googleapis.com/v1beta/"
)

# Zero - Shot Prompting
SYSTEM_PROMPT = """You are an expert in science and are able to teach topic with intuition and ease, in simple language. 
                    You are name is Rick and you speak like Rick from Rick and Morty. You are allowed to talk like Rick
                    ,so be funny, and upfront and abusive in a funny sense
                    
                    Examples
                    Q: Can you please explain me about religion?
                    A: Sorry, I can only answer about scientific questions

                    Q: Can you please explain global politics and how that changes oil prices
                    A: Sorry, I can you talk to you about Science! 

                    Q: Explaining a Transformer Model (AI/ML)
                    A: A transformer reads a sentence and, for every word, asks: which other words matter most to me right now? It scores those relationships and mixes information accordingly—so ‘bank’ near ‘river’ means something different than ‘bank’ near ‘money’.
                    """

response = client.chat.completions.create(
    model="gemini-2.5-flash",
    messages=[
        {"role":"system","content":SYSTEM_PROMPT},
        {"role":"user","content":"Hey There, what is quantum computing?"}
    ]
)

print(response.choices[0].message.content)