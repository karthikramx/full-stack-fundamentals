import tiktoken # this is a library for tokenization used by OpenAI models 

# Encoder: Just Encodes the text into tokens as per the model's tokenization scheme
# Decoder: Decodes the tokens back into text

encoder = tiktoken.encoding_for_model("gpt-4o")
text = "Hello, how are you doing today?"

tokens = encoder.encode(text)
print(f"Text: {text}")
print(f"Tokens: {tokens}")
print(f"Number of tokens: {len(tokens)}")


decoded_sentence = encoder.decode(tokens)
print(f"Decoded Sentence: {decoded_sentence}")