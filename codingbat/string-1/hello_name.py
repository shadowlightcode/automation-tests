# Given a string name, e.g. "Bob", return a greeting of the form "Hello Bob!".

# hello_name('Bob') → 'Hello Bob!'
# hello_name('Alice') → 'Hello Alice!'
# hello_name('X') → 'Hello X!'

def hello_name(name):
    return f'Hello {name}!'

print(hello_name('Bob'))