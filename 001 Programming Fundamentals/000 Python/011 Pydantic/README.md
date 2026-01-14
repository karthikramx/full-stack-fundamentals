# Pydantic

### About

Pydantic makes Python type hints do real work at runtime by validating, parsing, and serializing data—turning messy external inputs like API payloads or config files into safe, typed objects without boilerplate code. Created out of frustration that type hints were ignored at runtime, it prevents subtle bugs from bad data early and scales to high-performance needs

The core problem you are trying to solve is that of validating, type - checking
Instead of wrting multiple condition on the input provided,
With the following pain points..

- Repetitive checks for every field.
- Easy to forget a check (bug).
- Messy error responses.
- No IDE autocomplete on data['name'] (is it data.name? Who knows).
- No single source of truth for "what is a valid user?"

Pydantic does two things

- Data Validation
- Setting Management
- Data Parsing and validation
- API Development
- Config Management
- Data Serialization / Deserialization
