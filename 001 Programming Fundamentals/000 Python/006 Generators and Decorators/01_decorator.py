# Implement a decorator to log function execution time 

import time 

def measure_time(func):
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        print(f"the fuction too: {time.time() - start} seconds")
        return result
    return wrapper

@measure_time
def run_loop(t=5):
    for i in range(t):
        time.sleep(i)


run_loop()

