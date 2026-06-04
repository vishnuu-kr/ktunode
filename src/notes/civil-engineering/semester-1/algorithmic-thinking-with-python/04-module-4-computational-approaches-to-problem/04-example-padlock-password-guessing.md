---
title: "- Example: Padlock, Password guessing"
subject: "ALGORITHMIC THINKING WITH PYTHON"
module: "Module 4: COMPUTATIONAL APPROACHES TO PROBLEM"
branch: "Civil Engineering"
semester: 1
topicId: "68b54566d74ec52cc0912b81"
status: "completed"
scrapedAt: "2026-05-20T18:28:31.083Z"
---
# Module 4: Computational Approaches to Problem Solving

## Topic: Example: Padlock, Password Guessing

Welcome, everyone! In this session, we're going to dive deeper into **computational approaches to problem-solving** using a very relatable example: **guessing a padlock combination or a password.** Think about it – how many times have you forgotten a password or a lock combination and had to resort to trying different possibilities? This everyday experience is a fantastic way to understand core algorithmic thinking principles.

Our goal today is to see how we can systematically tackle such a problem using computational thinking. This directly ties into our course outcomes:

*   **CO1 (Utilize computing as a model):** We'll see how the process of guessing a combination can be modeled computationally.
*   **CO2 (Articulate and model a problem):** We'll break down the "guessing game" into clear steps and represent it.
*   **CO3 (Use effective algorithms and translate to programs):** We'll explore different strategies (algorithms) for guessing and think about how to implement them in Python.
*   **CO4 (Interpret problem-solving strategies):** We'll analyze different approaches and understand why some are better than others.

### 1. Understanding the Problem: The Padlock and Password Scenario

Let's start with the padlock. Imagine a simple three-digit padlock. The combination could be anything from 000 to 999. Our task, if we didn't know the combination, is to figure it out. How would you, as a human, approach this?

*   You might start with an educated guess, perhaps based on someone's birthday or a common number like 123.
*   If that fails, you'd systematically try another.

This process of trying possibilities is fundamentally what we'll be exploring computationally. In the context of our course, especially referencing works like **"Problem Solving & Programming Concepts" by Sprankle and Hubbard**, we understand that the first crucial step in solving any problem is to **clearly understand and define it.**

**The Problem:** Given a device (padlock or password system) that requires a specific sequence of characters (digits for a padlock, letters/numbers/symbols for a password) to unlock, and lacking the correct sequence, find the correct sequence through a series of attempts.

### 2. Modeling the Problem: Representing Possibilities

How can we represent all possible combinations for our padlock?

For a three-digit padlock, each digit can be any number from 0 to 9. This gives us 10 possibilities for the first digit, 10 for the second, and 10 for the third. The total number of combinations is $10 \times 10 \times 10 = 1000$.

This is a classic example of **combinatorics**, a field that deals with counting, arrangement, and combination of objects. If we were dealing with a password, say 4 characters long, where each character could be an uppercase letter (26 options), a lowercase letter (26 options), or a digit (10 options), the number of possibilities explodes! That's $62 \times 62 \times 62 \times 62$, a massive number. This growth in possibilities is important to consider when designing our computational approach.

So, our model needs to be able to represent and generate *all* these possibilities. This leads us to the idea of **generating sequences**.

### 3. Computational Approaches: Algorithms for Guessing

Now, how do we systematically try all these combinations? This is where **algorithms** come in. An algorithm, as discussed in texts like **"Computational Thinking: A Primer for Programmers and Data Scientists" by Venkatesh and Mukund**, is a step-by-step procedure or formula for solving a problem.

Let's consider a few algorithmic strategies:

#### a) The Brute-Force Approach: Trying Everything

The most straightforward approach is to try *every single possible combination* in a defined order until we find the correct one. This is often called a **brute-force** algorithm.

For our three-digit padlock:
1.  Start with 000. Try it.
2.  If it doesn't work, try 001.
3.  If that doesn't work, try 002.
4.  Continue this process sequentially: 003, 004, ..., 009, 010, 011, ..., 998, 999.

This is guaranteed to find the correct combination eventually, assuming it exists within the possible range. It's like systematically checking every lock on a giant keyring.

**How does this relate to CO3 (Use effective algorithms)?** The brute-force method *is* an algorithm. It's effective in that it *will* find the solution. However, is it the *most efficient*? For a small number of combinations, yes. But for complex passwords, it can become computationally infeasible.

**Relatable Analogy:** Imagine you've lost your house key and you know it's somewhere in your cluttered garage. A brute-force approach would be to systematically search every single item, box by box, drawer by drawer, until you find it. It will work, but it might take a very long time.

**Python Connection:** In Python, we can generate these sequences using loops and string manipulation. For example, to generate all 3-digit combinations, we might use nested loops:

```python
for i in range(10): # For the first digit
    for j in range(10): # For the second digit
        for k in range(10): # For the third digit
            combination = f"{i}{j}{k}" # Format as a 3-digit string
            print(combination) # In a real scenario, we'd test this combination
```

This code generates numbers from 000 to 999. The `f"{i}{j}{k}"` part is important for formatting. Without it, `f"{1}{2}{3}"` would give "123", but if we wanted "007", we'd need formatting like `f"{i:03d}"` which ensures a minimum of three digits, padding with leading zeros. This attention to detail is key in programming, echoing the precision needed in algorithm design, as highlighted in **"Introduction to Computation and Programming using Python" by Guttag.**

#### b) Smarter Guessing: Leveraging Information (If Available)

What if we have some additional information? For instance, if we know the combination isn't 000, we can skip that. Or, if we're trying to guess a *person's* password, we might guess common passwords first: "password", "123456", "qwerty", etc. This is a form of **heuristic**, a practical method not guaranteed to be optimal, perfect, or rational, but sufficient for the immediate goals.

This relates to **"How to Solve It" by George Pólya**, where he emphasizes understanding the problem and looking for connections. If we can make educated guesses based on patterns or common knowledge, we might solve the problem much faster than a pure brute-force method.

**Example:** Trying common passwords first is like trying the most likely hiding spots for your lost house key first (e.g., your pocket, the doorknob, the usual key bowl) before searching the entire garage.

**Python Connection:** We could create a list of common passwords and try them before resorting to a full brute-force.

```python
common_passwords = ["password", "123456", "qwerty", "admin"]
for pwd in common_passwords:
    print(f"Trying common password: {pwd}")
    # Test the password

# Then, if none of these work, proceed to brute-force...
```

This blends algorithmic strategy with domain knowledge (what are common passwords).

#### c) Avoiding Redundancy: Efficient Brute-Force

In our initial brute-force example, we generated "001", "002", etc. If we were to implement this without care, we might accidentally test "123" multiple times. A good algorithm avoids redundant computations. Our nested loop structure naturally handles this by systematically moving through the number space without repetition.

This efficiency is critical, especially when the search space is vast. Think about **"Computer Arithmetic Algorithms" by Israel Koren**. While that book focuses on numerical algorithms, the underlying principle of efficient calculation and avoiding wasted effort applies universally. We want our algorithm to be as efficient as possible.

### 4. Analyzing the Algorithms: When is Brute-Force Best?

The brute-force approach, while simple, has significant implications for performance.

*   **When the search space is small:** For our 3-digit padlock (1000 combinations), brute-force is perfectly fine. It's quick for a computer to check 1000 possibilities.
*   **When no other information is available:** If we have no clues about the combination, brute-force is the only guaranteed method.
*   **When complexity is high:** For a password with many characters and a large character set (e.g., 8 characters, including uppercase, lowercase, numbers, and symbols), the number of combinations can be in the billions or trillions. A brute-force attack might take years or even centuries with current computing power. In such cases, brute-force is *infeasible*.

This is where **"Psychology (Sec.. Problem Solving.)" by Spielman et al.** might offer insights into cognitive limitations and how we might approach problems that seem overwhelming. Computationally, it means we need to think about complexity and the limitations of our tools.

**Key Takeaway:** The choice of algorithm depends heavily on the problem's constraints and the size of the solution space. For password cracking (a real-world application of this concept), attackers often use **dictionary attacks** (trying words from a dictionary) or **hybrid attacks** (combining dictionary words with numbers or symbols) before resorting to pure brute-force, because they are faster if the password is a common word or phrase.

### 5. Connecting to Course Outcomes

Let's recap how this padlock/password guessing example illuminates our course objectives:

*   **CO1 (Utilize computing as a model):** We've modeled the problem of finding a combination as generating and testing a sequence of possibilities. This is a common pattern in many computational problems.
*   **CO2 (Articulate and model a problem):** We clearly defined the problem (finding a sequence) and modeled the solution space (all possible sequences).
*   **CO3 (Use effective algorithms and translate to programs):** We explored the brute-force algorithm and considered a heuristic approach. We also saw how to translate the brute-force idea into Python code using loops and string formatting. The effectiveness depends on the problem size.
*   **CO4 (Interpret problem-solving strategies):** We compared brute-force with more informed guessing strategies, understanding the trade-offs between simplicity, guarantee of a solution, and efficiency.

### Summary and Key Points to Remember

*   **Problem Definition is Key:** Before coding, understand exactly what you're trying to solve. For our example, it’s finding a specific sequence.
*   **Representing Possibilities:** Think about how to systematically generate *all* potential solutions. This is the "search space."
*   **Brute-Force:** A simple, guaranteed method that tries every possibility. Great for small search spaces.
*   **Efficiency Matters:** For large search spaces, brute-force can be too slow. Consider smarter approaches if possible.
*   **Algorithms are Recipes:** They are step-by-step instructions. Different recipes (algorithms) can solve the same problem with varying levels of success or speed.
*   **Python Tools:** Loops (`for`, `while`) and string manipulation are essential for generating and testing possibilities.

This example, while simple, is a powerful illustration of fundamental computational thinking. We move from understanding a real-world scenario to creating a model, designing systematic steps (algorithms), and considering their efficiency.

***

## Sample Questions with Answers

**1. Conceptual Question:** What is the primary difference between a brute-force algorithm and a heuristic algorithm in the context of password guessing?

**Answer:**
The **brute-force algorithm** guarantees to find the solution by systematically trying *every single possible combination* within the defined search space. It's exhaustive but can be very slow for large search spaces.
A **heuristic algorithm**, on the other hand, uses educated guesses or rules of thumb to find a solution. It aims for a good-enough solution quickly, often by prioritizing more probable options (like common passwords). It's not guaranteed to find the absolute best or correct solution, but it's often much faster if the heuristics are effective.

**Reasoning:** This question tests the understanding of two fundamental algorithmic approaches. The answer highlights the core difference: guarantee vs. speed/probability.

**2. Exam-Oriented Question:** You are tasked with creating a Python program to find a 4-digit PIN code (0000-9999). Which algorithmic approach would be most suitable, and why? Provide a Python snippet demonstrating how you might generate the combinations.

**Answer:**
For a 4-digit PIN code, the search space is from 0000 to 9999, which is 10,000 combinations ($10^4$). This is a relatively small number for a computer to check. Therefore, a **brute-force approach** is the most suitable and guarantees finding the PIN if it exists. It's simple to implement and efficient enough for this scale.

**Python Snippet (Demonstrating Generation):**

```python
def find_pin_brute_force():
    for i in range(10000): # Iterate from 0 to 9999
        # Format the number as a 4-digit string with leading zeros
        pin_guess = f"{i:04d}"
        print(f"Attempting PIN: {pin_guess}")
        # In a real scenario, you would 'test' this pin_guess here.
        # For example: if check_pin(pin_guess): return pin_guess
    return "PIN not found (should not happen for this problem scope)"

# Example usage:
# find_pin_brute_force()
```

**Reasoning:**
The question assesses the ability to choose an appropriate algorithm based on problem constraints (size of the search space). It also requires demonstrating basic Python coding skills related to the concept, specifically generating sequential possibilities with correct formatting (padding with zeros using f-strings `f"{i:04d}"`). The explanation of why brute-force is suitable is crucial.

**3. Conceptual Question:** Why might a brute-force password cracking attempt fail or be impractical for a strong, modern password (e.g., 12 characters with mixed case letters, numbers, and symbols)?

**Answer:**
A strong, modern password has an astronomically large number of possible combinations. If a password is 12 characters long, and each character can be one of, say, 90 possibilities (uppercase, lowercase, numbers, common symbols), the total number of combinations is $90^{12}$. This number is incredibly vast (approximately $2.8 \times 10^{23}$). A brute-force algorithm would need to test each of these combinations. Even with the fastest computers, it would take an unfeasibly long time – potentially thousands or millions of years – to try all possibilities. Therefore, brute-force becomes computationally **infeasible** for such complex passwords, making other methods (or the password's strength itself) a barrier.

**Reasoning:** This question probes the understanding of algorithmic complexity and its real-world implications. It emphasizes the exponential growth of possibilities and the practical limits of computing power, linking back to the importance of efficient algorithms and problem analysis.
