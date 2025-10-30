# Reverse the order of characters in each word, but keep word order same.
# Input → "DoctorC interview prep"
# Output → "CrotcoD weivretni perp"

test = "here is a test string"

# split each word
# reverse is word
# join each word

print(" ".join([t[::-1] for t in test.split()]))