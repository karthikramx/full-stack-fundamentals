# Fast API Server

from fastapi import FastAPI, HTTPException
from ollama import Client
from pydantic import BaseModel

app = FastAPI()

client = Client(
    host="http://localhost:11434"
)

class ChatRequest(BaseModel):
    user_message: str

@app.get("/")
def read_root():
    return {"Status":"Hello World"}

@app.get("/contact-us")
def contact_details():
    return {"Email":"karthik.ram@gmail.com","LinkedIn":"/in/linkedin"}

# Call Ollama - this will talk to the model locally! 
@app.post("/chat-ollama")
def chat_with_ollama(request: ChatRequest):
    print("Received request:", request.user_message)
    try:
        messages = [{"role":"system","content":"You are god"},{"role":"user","content":request.user_message}]
        response = client.chat(
            model='hermes3:3b-llama3.2-q2_K',
            messages=messages
        )
        # Extract the message content from the response
        return {"response": response['message']['content']}
    except Exception as e:
        return {"error": f"Failed to get response from Ollama: {str(e)}"}

