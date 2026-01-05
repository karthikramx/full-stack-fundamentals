from google import genai

client = genai.Client(api_key="AIzaSyA0gZsek9AwBODVL_nQXX4wRQcLO4sZifY")

response = client.models.generate_content(
    model="gemini-2.5-flash",
    contents="Explain how AI works in a few words",
    
)

print(response.text)