## ZeroShot Prompting

The model is given a direct question or task without prior examples

## Structured Prompting

The model is given a output format in the examples - in the system prompt
This way the model follows a structured output

## Chain of Thought Prompting

In this, we essntially tell the model how to think with specific use cases
and examples, For example solving a math equation with specific steps
START -> PLAN -> PLAN -> PLAN -> END  
And continously prompt the API in a loop with previous outputs , unitil the
OUTPUT is received!
