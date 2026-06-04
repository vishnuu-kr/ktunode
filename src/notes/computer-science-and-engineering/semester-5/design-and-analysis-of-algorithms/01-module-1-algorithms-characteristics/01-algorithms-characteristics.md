---
title: "Algorithms – Characteristics"
subject: "DESIGN AND ANALYSIS OF ALGORITHMS"
module: "Module 1: Algorithms – Characteristics"
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162760fc9aa1fdbc8b541"
status: "completed"
scrapedAt: "2026-05-20T16:45:26.819Z"
---
## DESIGN AND ANALYSIS OF ALGORITHMS - MODULE 1: Algorithms – Characteristics
**Topic: Algorithms – Characteristics**

**Learning Outcomes:**

*   Understand the concept of an algorithm and its fundamental characteristics.
*   Identify and explain the key characteristics of a well-defined algorithm: Finiteness, Definiteness, Input, Output, Effectiveness.
*   Apply these characteristics to evaluate whether a given procedure is an algorithm.
*   Distinguish between different representations of algorithms (e.g., natural language, pseudocode, flowcharts).

---

### 1.  Introduction: What is an Algorithm?

*   **Definition:** An algorithm is a well-defined, step-by-step procedure for solving a problem or accomplishing a specific task. It's a finite sequence of unambiguous instructions, that, when executed, produces a specific output from a given input.

*   **Analogy:** Think of a recipe. It's a set of instructions (the algorithm) that takes ingredients (the input) and produces a dish (the output).

### 2. Key Characteristics of an Algorithm

A procedure must possess the following characteristics to be considered an algorithm:

*   **Finiteness:**
    *   **Definition:** An algorithm must terminate after a finite number of steps.  It shouldn't run indefinitely.
    *   **Explanation:** A program that runs forever is not an algorithm.
    *   **Example:**
        *   **Algorithm:**  Calculating the sum of the first N natural numbers (where N is a positive integer).
        *   **Non-Algorithm:** A program that continuously prompts the user for input without ever providing a result or stopping.

*   **Definiteness (Unambiguity):**
    *   **Definition:** Each instruction in an algorithm must be clear, precise, and unambiguous. There should be no room for interpretation.
    *   **Explanation:**  Each step should have only one possible meaning.
    *   **Example:**
        *   **Definite Instruction:** `Set x = x + 1`.  This unambiguously increments the value of x by 1.
        *   **Ambiguous Instruction:** `Do something with x`.  What "something" needs to be clearly defined.
*   **Input:**
    *   **Definition:** An algorithm must have zero or more well-defined inputs.
    *   **Explanation:** The input is the data that the algorithm receives to operate on. An algorithm doesn't necessarily need input, but it often does.
    *   **Example:**
        *   **Algorithm with Input:** Sorting an array of numbers. The array is the input.
        *   **Algorithm without Input:**  Generating the first 10 prime numbers.
*   **Output:**
    *   **Definition:** An algorithm must produce at least one well-defined output.
    *   **Explanation:**  The output is the result of the algorithm's processing. It's the solution to the problem the algorithm is designed to solve.
    *   **Example:**
        *   **Algorithm:** Calculating the factorial of a number. The factorial is the output.
*   **Effectiveness (Feasibility):**
    *   **Definition:**  Each instruction in an algorithm must be basic enough to be carried out, in principle, by a person using only pencil and paper. The algorithm must also be feasible with the available resources.
    *   **Explanation:** The instruction should be practically executable.  It shouldn't be an abstract or impossible task.
    *   **Example:**
        *   **Effective Instruction:** `Add two numbers`.  This is a basic arithmetic operation.
        *   **Ineffective Instruction:** `Solve all undecidable problems`.  This is impossible.

### 3. Representations of Algorithms

Algorithms can be represented in various ways:

*   **Natural Language:** Describing the steps in plain English or another human language.
    *   **Pros:** Easy to understand initially.
    *   **Cons:** Can be verbose, ambiguous, and difficult to translate into code.
    *   **Example:**
        "To find the largest number in a list:  Go through each number in the list.  If the current number is larger than the largest number found so far, replace the largest number found so far with the current number.  After going through all the numbers, the largest number found so far is the largest number in the list."

*   **Pseudocode:** A structured way of expressing an algorithm that uses a combination of natural language and programming language constructs.
    *   **Pros:** More precise than natural language, easier to translate into code than natural language.
    *   **Cons:** Less formal than a programming language.
    *   **Example:**
        ```
        Algorithm FindLargest(list)
            largest = list[0]
            for each number in list:
                if number > largest:
                    largest = number
            return largest
        ```

*   **Flowcharts:** A graphical representation of an algorithm using symbols to represent different operations and control flow.
    *   **Pros:**  Visually appealing and easy to understand the flow of control.
    *   **Cons:** Can become complex for large algorithms.
    *   **Example:** (Imagine a flowchart here: Start -> Input List -> Initialize largest = first element -> Loop through the list -> Compare current element with largest -> If current element > largest, largest = current element -> End Loop -> Output largest -> End)

*   **Programming Languages:**  Expressing the algorithm in a formal programming language like Python, Java, C++, etc.
    *   **Pros:** Directly executable by a computer.
    *   **Cons:** Requires knowledge of the programming language.
    *   **Example:**
        ```python
        def find_largest(numbers):
            largest = numbers[0]
            for number in numbers:
                if number > largest:
                    largest = number
            return largest
        ```

### 4. Applying Algorithm Characteristics: Examples

Let's analyze a few procedures to determine if they are algorithms:

*   **Procedure 1:** Printing all prime numbers between 1 and 100.
    *   **Analysis:** Finiteness (yes, terminates after checking all numbers up to 100), Definiteness (yes, the steps for checking primality are well-defined), Input (none), Output (the list of prime numbers), Effectiveness (yes, primality testing can be done with basic operations).
    *   **Conclusion:** This is an algorithm.

*   **Procedure 2:**  Sorting a list of numbers.
    *   **Analysis:** Finiteness (yes, with a sorting algorithm like bubble sort or merge sort), Definiteness (yes, the steps are clearly defined in the chosen sorting algorithm), Input (the list of numbers), Output (the sorted list), Effectiveness (yes, sorting operations are basic and feasible).
    *   **Conclusion:** This is an algorithm (provided a specific sorting algorithm is chosen).

*   **Procedure 3:**  Finding a solution to any problem.
    *   **Analysis:** Finiteness (no, there's no guarantee of termination), Definiteness (no, "any problem" is too broad and undefined, and there's no specific solution method), Input (undefined), Output (undefined), Effectiveness (highly unlikely to be effective for *all* problems).
    *   **Conclusion:** This is NOT an algorithm. It lacks definiteness and finiteness.

*   **Procedure 4:** A loop that continues infinitely printing "Hello, world!".
    *   **Analysis:** Finiteness (no, it never terminates), Definiteness (yes, the printing step is well-defined), Input (none), Output (infinite "Hello, world!" messages), Effectiveness (yes, printing is a basic operation).
    *   **Conclusion:** This is NOT an algorithm because it violates the finiteness property. It is simply a non-terminating program.

### 5. Practice Questions/Exercises:

1.  **Is the following procedure an algorithm? Why or why not?**

    *   *Procedure:* "To find the best restaurant: Ask everyone you meet until you find the best one."

    *   *Answer:* No, this is not an algorithm. It violates several characteristics:
        *   **Finiteness:** There is no guarantee of termination. You could keep asking forever and never find the "best" one, or run out of people to ask.
        *   **Definiteness:** The concept of "best" is subjective and not well-defined.  What criteria are being used to judge "best"?

2.  **Describe the differences between natural language and pseudocode for representing algorithms.**

    *   *Answer:* Natural language is easier to understand initially but can be ambiguous and difficult to translate into code. Pseudocode is more structured and precise, bridging the gap between natural language and programming languages. Pseudocode is generally preferred for its clarity and ease of translation.

3.  **Given the following procedure, identify which characteristics of an algorithm it violates (if any):**

    ```
    Loop:
      Read a number x from input
      If x is positive, go back to Loop
    ```

    *   *Answer:* This procedure violates the **output** characteristic. While it has input (number x), it never produces any output.  It simply loops if the input is positive. It also might violate finiteness if the input is always positive.

4.  **Write pseudocode for an algorithm that takes two numbers as input and returns their sum.**

    *   *Answer:*

    ```
    Algorithm SumNumbers(number1, number2)
      sum = number1 + number2
      return sum
    ```

### 6. Important Points to Remember:

*   **Finiteness is crucial.**  An algorithm *must* eventually terminate.
*   **Definiteness is key to eliminating ambiguity.** Each step must have a single, clear interpretation.
*   **Effectiveness ensures the algorithm is practically executable.**
*   An algorithm should always produce a **well-defined output**.
*   Different representations of algorithms serve different purposes, with pseudocode often striking a good balance between clarity and precision.
