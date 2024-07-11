from email_validator import validate_email, EmailNotValidError

try:
    email = "example@example.com"
    validation = validate_email(email)
    print("Email is valid:", validation)
except EmailNotValidError as e:
    print(str(e))
