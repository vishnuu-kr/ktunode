---
title: "selection (if-else structure, case structure) and repetition (for, while, repeat-until loops)"
subject: "ALGORITHMIC THINKING WITH PYTHON"
module: "Module 2: ALGORITHM AND   PSEUDOCODE   REPRESENTATION:"
branch: "Civil Engineering"
semester: 1
topicId: "68b54566d74ec52cc0912b60"
status: "completed"
scrapedAt: "2026-05-20T18:28:09.641Z"
---
# ALGORITHMIC THINKING WITH PYTHON

## Module 2: Algorithm and Pseudocode Representation

### Topic: Selection and Repetition Structures

Welcome, everyone! In our journey through Algorithmic Thinking with Python, we've already touched upon the fundamental building blocks of how computers "think." Today, we're diving deep into two crucial control flow structures that empower algorithms to make decisions and repeat tasks: **Selection** and **Repetition**. These are the very tools that allow us to move beyond simple, linear instructions and create sophisticated solutions to complex problems. Think of it as moving from following a recipe for a single dish to planning a multi-course meal where the next step depends on how the previous one turned out!

This topic directly relates to our **Course Outcomes**:

*   **CO1 (Utilize computing as a model for solving real-world problems):** Understanding selection and repetition is foundational to modeling real-world scenarios. Many real-world situations involve choices (selection) and repeating actions until a condition is met (repetition).
*   **CO2 (Articulate a problem before attempting to solve it and prepare a clear and accurate model):** When you're modeling a problem, you'll naturally encounter situations where you need to decide "what to do next" or "how many times to do this." These structures are key to building that model.
*   **CO3 (Use effective algorithms to solve the formulated models and translate algorithms into executable programs):** The algorithms we design will heavily rely on these structures. Being able to correctly implement selection and repetition in pseudocode, and later in Python, is critical for creating functional programs.
*   **CO4 (Interpret the problem-solving strategies, a systematic approach to solving computational problems, and essential Python programming skills):** This module directly addresses the systematic approach to problem-solving by teaching us how to control the flow of our algorithms.

Let's start with **Selection**.

---

### 1. Selection Structures: Making Decisions

Imagine you're packing for a trip. You check the weather forecast. If it's sunny, you pack shorts. If it's raining, you pack an umbrella. This is a classic example of selection – your actions depend on a specific condition. In algorithms, we use selection structures to allow the program to choose between different paths of execution based on whether a certain condition is true or false.

#### 1.1 The `IF-ELSE` Structure

This is the most common and fundamental selection structure. It allows you to execute a block of code if a condition is true, and optionally, execute a different block of code if the condition is false.

**Core Idea:** "If this is true, do this. Otherwise (else), do that."

Let's think about a simple scenario: deciding whether to water a plant. A plant needs watering if the soil is dry.

*   **Condition:** Is the soil dry?
*   **If TRUE:** Water the plant.
*   **If FALSE:** Do nothing (don't water it).

In pseudocode, this looks like:

```pseudocode
IF soil_is_dry THEN
  Water the plant
END IF
```

But what if we want to do something even if the soil *isn't* dry? Perhaps we want to record that the plant was checked. This is where the `ELSE` part comes in.

```pseudocode
IF soil_is_dry THEN
  Water the plant
ELSE
  Record that the plant was checked and is moist
END IF
```

This `IF-ELSE` structure is powerful because it covers all possibilities for a single condition. The program *will* execute one of the two branches.

**Relatable Example:** Think about logging into a website.
*   **Condition:** Is the username and password correct?
*   **If TRUE:** Grant access and show the user's dashboard.
*   **If FALSE:** Show an error message "Invalid username or password."

This directly maps to **CO3** – we're using an algorithm (checking credentials) and translating it into a program's logic. We're also applying **CO1** by modeling a common real-world interaction.

**Pseudocode Illustration:**

```pseudocode
INPUT username
INPUT password

IF username = "Alice" AND password = "secure123" THEN
  DISPLAY "Welcome, Alice!"
ELSE
  DISPLAY "Login failed. Please check your credentials."
END IF
```

**Important Point:** The conditions in `IF` statements are typically comparisons. We use comparison operators like:
*   `=` (equal to)
*   `!=` (not equal to)
*   `>` (greater than)
*   `<` (less than)
*   `>=` (greater than or equal to)
*   `<=` (less than or equal to)

These comparisons result in a boolean value: `TRUE` or `FALSE`.

#### 1.2 The `CASE` Structure (or `IF-ELSIF-ELSE`)

What happens when you have *multiple* conditions to check, one after another? For instance, assigning a grade based on a score.

*   Score 90-100: Grade 'A'
*   Score 80-89: Grade 'B'
*   Score 70-79: Grade 'C'
*   Score 60-69: Grade 'D'
*   Score 0-59: Grade 'F'

Using only `IF-ELSE` for this would become cumbersome:

```pseudocode
IF score >= 90 THEN
  grade = "A"
ELSE
  IF score >= 80 THEN
    grade = "B"
  ELSE
    IF score >= 70 THEN
      grade = "C"
    ELSE
      IF score >= 60 THEN
        grade = "D"
      ELSE
        grade = "F"
      END IF
    END IF
  END IF
END IF
```

See how nested `IF-ELSE` statements can become hard to read? This is where the `CASE` structure (or often implemented as `IF-ELSIF-ELSE` in many languages) is invaluable. It allows us to check a single variable or expression against a list of possible values or ranges.

**Core Idea:** "Check this variable. If it matches value 1, do this. If it matches value 2, do that. If none of the above, do something else."

**Pseudocode Illustration (using `CASE`):**

```pseudocode
CASE OF score
  WHEN 90 TO 100: grade = "A"
  WHEN 80 TO 89: grade = "B"
  WHEN 70 TO 79: grade = "C"
  WHEN 60 TO 69: grade = "D"
  OTHERWISE:      grade = "F"
END CASE
```

This is much cleaner and more readable. It directly addresses **CO2** by providing a structured way to model complex decision-making. For exams, understanding the difference between `IF-ELSE` and `CASE` and when to use each is key. The `CASE` structure is often preferred when you have a single variable being tested against multiple discrete values or ranges.

**Reference Point:** Maureen Sprankle and Jim Hubbard's "Problem Solving & Programming Concepts" often emphasizes how clear pseudocode representation aids in algorithm design, and `CASE` structures are a prime example of this clarity for multi-way branching.

---

### 2. Repetition Structures: Doing Things Again and Again

Now, let's talk about repetition. Imagine you're folding laundry. You take one item, fold it, and then repeat the process for the next item until the pile is gone. This is repetition! In algorithms, repetition structures, also known as **loops**, allow us to execute a block of code multiple times. This is incredibly powerful for automating tasks that would be tedious or impossible to do manually.

#### 2.1 The `FOR` Loop

The `FOR` loop is typically used when you know in advance how many times you want to repeat an action. It's often used for iterating through a sequence of items or for performing an action a specific number of times.

**Core Idea:** "Do this action for each item in this collection, or do this action this many times."

**Relatable Example:** Imagine you have a list of chores to do each day:
*   Feed the dog
*   Water the plants
*   Take out the trash

If you want to do these chores every day for a week, you'd repeat the entire list. The `FOR` loop is perfect for this.

**Pseudocode Illustration:**

Let's say we want to print the numbers from 1 to 5:

```pseudocode
FOR count FROM 1 TO 5
  DISPLAY count
END FOR
```

This will output:
```
1
2
3
4
5
```

Notice how the `FOR` loop has a clear start and end point for the repetition. It often involves a "counter" variable (like `count` here) that tracks the progress of the loop. This is crucial for **CO3** as it's a direct way to implement repetitive algorithms.

**Python Connection:** In Python, this often translates to using `range()`. For example, `for count in range(1, 6):` would achieve the same.

**Exam Tip:** `FOR` loops are your go-to when you have a definite number of iterations. Think "for each item..." or "for X times...".

#### 2.2 The `WHILE` Loop

The `WHILE` loop is used when you want to repeat an action as long as a certain condition remains true. You don't necessarily know how many times it will run beforehand. The loop continues as long as the condition is met.

**Core Idea:** "Keep doing this as long as this condition is true."

**Relatable Example:** Think about waiting for a bus. You keep waiting (repeating the action of looking for the bus) *while* the bus has not yet arrived. Once the bus arrives, the condition becomes false, and you stop waiting.

*   **Condition:** Bus has not arrived.
*   **Action:** Wait.

**Pseudocode Illustration:**

Let's simulate waiting for a specific temperature to be reached in an oven.

```pseudocode
SET oven_temperature TO 50
SET target_temperature TO 180

WHILE oven_temperature < target_temperature
  DISPLAY "Oven is heating..."
  INCREMENT oven_temperature BY 10  // Simulate heating
  WAIT 1 minute // Simulate time passing
END WHILE

DISPLAY "Oven has reached the target temperature!"
```

This loop will continue to execute the display, increment, and wait steps as long as `oven_temperature` is less than `target_temperature`. Once `oven_temperature` becomes equal to or greater than `target_temperature`, the condition `oven_temperature < target_temperature` becomes false, and the loop terminates.

**Crucial Point:** Inside a `WHILE` loop, you *must* ensure that something eventually happens to make the condition false. Otherwise, you'll create an **infinite loop**, where the program gets stuck repeating forever! This is a common pitfall and a frequent exam question topic. For example, if we forgot to `INCREMENT oven_temperature`, the loop would never end because `oven_temperature` would always be 50, always less than 180.

This is a prime example of **CO3** – we're using an algorithm to control a process (heating) and translate it into a program's logic. It also ties into **CO4** by illustrating a systematic approach to problem-solving where we manage a repeating task based on a dynamic condition.

#### 2.3 The `REPEAT-UNTIL` Loop

The `REPEAT-UNTIL` loop is similar to the `WHILE` loop in that it repeats a block of code based on a condition. However, there's a key difference: the `REPEAT-UNTIL` loop *always* executes the code block *at least once* before checking the condition. The loop continues as long as the condition is *false*, and it terminates when the condition becomes *true*.

**Core Idea:** "Do this, then check if you should stop. Keep doing it until this condition is true."

**Relatable Example:** Think about asking a user for input until they provide valid input. You need to ask them *at least once* before you can check if their input is valid.

*   **Action:** Ask for user input.
*   **Condition to stop:** Input is valid.

**Pseudocode Illustration:**

Let's ask a user to enter a positive number.

```pseudocode
REPEAT
  DISPLAY "Please enter a positive number:"
  INPUT user_number
  IF user_number <= 0 THEN
    DISPLAY "That's not a positive number."
  END IF
UNTIL user_number > 0

DISPLAY "Thank you for entering a positive number: ", user_number
```

Here's how this works:
1.  The code inside `REPEAT` and `UNTIL` is executed. We display a message and get input.
2.  The `UNTIL` condition (`user_number > 0`) is checked.
3.  If `user_number > 0` is `FALSE` (meaning the number is 0 or negative), the loop goes back to the `REPEAT` statement and executes the code block again. We also display an error message.
4.  If `user_number > 0` is `TRUE` (meaning the number is positive), the loop terminates, and the program continues after the `UNTIL` statement.

**Key Distinction:**
*   `WHILE condition DO ... END WHILE` (checks *before* executing)
*   `REPEAT ... UNTIL condition` (executes *once*, then checks to see if it should *stop*)

This distinction is important for **CO2** when modeling scenarios where an action *must* happen at least once, like user interaction for input validation. It also directly helps with **CO3** by providing another way to implement algorithms for repetitive tasks.

**Exam Consideration:** You might be asked to convert a `WHILE` loop to a `REPEAT-UNTIL` loop, or vice versa, or to choose the most appropriate loop for a given problem. The key is to understand their behavior regarding the initial check and termination condition.

---

### Bringing It All Together: Examples and Pitfalls

Let's consider a slightly more complex problem that uses both selection and repetition.

**Problem:** Simulate a simple game where the user guesses a secret number between 1 and 10. The program should give hints ("Too high!" or "Too low!") and stop when the user guesses correctly. It should also limit the number of guesses to, say, 5.

This problem clearly involves:
*   **Repetition:** The user keeps guessing until they are correct or run out of tries. A `WHILE` or `REPEAT-UNTIL` loop is suitable here. Let's use `WHILE` to control the number of attempts.
*   **Selection:** Based on the guess, we need to decide if it's correct, too high, or too low. `IF-ELSIF-ELSE` is perfect for this.

**Pseudocode:**

```pseudocode
SET secret_number TO 7
SET max_guesses TO 5
SET guess_count TO 0
SET user_guessed_correctly TO FALSE

WHILE guess_count < max_guesses AND NOT user_guessed_correctly
  INCREMENT guess_count BY 1
  DISPLAY "Guess #", guess_count, ": Enter your guess (1-10):"
  INPUT user_guess

  IF user_guess = secret_number THEN
    DISPLAY "Congratulations! You guessed the number!"
    SET user_guessed_correctly TO TRUE // This will cause the WHILE loop to terminate
  ELSE IF user_guess < secret_number THEN
    DISPLAY "Too low! Try again."
  ELSE // user_guess must be > secret_number
    DISPLAY "Too high! Try again."
  END IF
END WHILE

IF NOT user_guessed_correctly THEN
  DISPLAY "You ran out of guesses. The secret number was ", secret_number
END IF
```

This pseudocode demonstrates how these structures work in tandem. The `WHILE` loop controls the overall game flow (number of attempts and whether the game is still "on"), while the `IF-ELSIF-ELSE` inside handles the logic for each individual guess. This is a direct application of **CO3**.

**Common Pitfalls to Remember for Exams:**

*   **Infinite Loops:** As mentioned, ensure your `WHILE` loop's condition will eventually become false.
*   **Off-by-One Errors:** Especially with `FOR` loops counting, be careful with your start and end values. If you want to count from 1 to 5, `FOR count FROM 1 TO 5` is correct. If your range is `range(1, 5)` in Python, it will go from 1 up to (but not including) 5, meaning 1, 2, 3, 4.
*   **Incorrect Conditions:** Ensure your comparison operators are correct for the logic you intend.
*   **Missing `ELSE`:** Sometimes, an `IF` statement without an `ELSE` is fine if there's no alternative action needed. However, understand what happens if the `IF` condition is false in that case (nothing happens for that particular `IF` block).
*   **`CASE` vs. `IF-ELSIF-ELSE`:** While they can sometimes achieve similar results, `CASE` is generally more readable for a single variable tested against many values. `IF-ELSIF-ELSE` is more flexible for compound conditions or conditions that don't neatly fit into a `CASE` structure.

---

### Summary and Key Takeaways

*   **Selection Structures (Decision Making):**
    *   `IF-ELSE`: For two-way decisions. If a condition is true, do one thing; otherwise, do another.
    *   `CASE` (or `IF-ELSIF-ELSE`): For multi-way decisions based on a single variable or expression. It improves readability compared to deeply nested `IF-ELSE` statements.
*   **Repetition Structures (Loops):**
    *   `FOR` Loop: Ideal when the number of iterations is known in advance.
    *   `WHILE` Loop: Repeats as long as a condition remains true. Essential to ensure the condition eventually becomes false to avoid infinite loops.
    *   `REPEAT-UNTIL` Loop: Repeats at least once, continuing until a condition becomes true. The condition is checked *after* each execution of the loop body.

Understanding and effectively using these structures is fundamental to designing any algorithm that goes beyond simple, sequential steps. They are the heart of creating dynamic, responsive, and efficient programs. As George Pólya emphasizes in "How to Solve It," understanding the structure of a problem is key to finding a solution. Selection and repetition structures are powerful tools for understanding and modeling many real-world problems computationally.

---

### Sample Questions with Answers

**Question 1 (Conceptual):**
Explain the primary difference between a `WHILE` loop and a `REPEAT-UNTIL` loop in terms of when the condition is checked.

**Answer:**
The primary difference lies in when the loop's condition is evaluated:
*   A **`WHILE` loop** checks its condition *before* executing the code block. If the condition is initially false, the code block within the loop will never be executed.
*   A **`REPEAT-UNTIL` loop** executes the code block *at least once* before checking its condition. The loop continues *until* the condition becomes true, meaning it will repeat if the condition is false.

This directly relates to **CO4** as it tests understanding of problem-solving strategies related to loop control.

**Question 2 (Exam-Oriented - Pseudocode/Logic):**
Consider the following pseudocode. What will be displayed if `x` is initially 5?

```pseudocode
SET x TO 5
IF x > 10 THEN
  DISPLAY "A"
ELSE IF x = 5 THEN
  DISPLAY "B"
ELSE
  DISPLAY "C"
END IF
```

**Answer:**
The pseudocode will display **"B"**.

**Reasoning:**
1.  The first condition `x > 10` is checked. Since `x` is 5, `5 > 10` is false.
2.  The `ELSE IF` condition `x = 5` is checked. Since `x` is 5, `5 = 5` is true.
3.  The code block associated with this `ELSE IF` is executed, which is `DISPLAY "B"`.
4.  Because a condition was met and its block executed, the subsequent `ELSE` block is skipped.

This question tests the understanding of **selection structures** and **CO3** (translating algorithms into executable logic).

**Question 3 (Conceptual/Application):**
You are designing an algorithm to process a list of student scores. You need to assign a grade: 'A' for scores >= 90, 'B' for scores >= 80 but < 90, 'C' for scores >= 70 but < 80, and 'F' otherwise. Which selection structure would be most appropriate and why?

**Answer:**
The **`CASE` structure** (or an `IF-ELSIF-ELSE` chain) would be most appropriate.

**Reasoning:**
We are evaluating a single variable (`score`) against multiple distinct ranges or values.
*   A `CASE` structure allows us to express these multiple conditions cleanly, making the pseudocode more readable and organized than a series of nested `IF-ELSE` statements. For example:

    ```pseudocode
    CASE OF score
      WHEN 90 TO 100: grade = "A"
      WHEN 80 TO 89: grade = "B"
      WHEN 70 TO 79: grade = "C"
      OTHERWISE:      grade = "F"
    END CASE
    ```
*   Using separate `IF-ELSE` statements would require extensive nesting, which can quickly become difficult to follow, as shown in earlier examples.

This demonstrates **CO2** (modeling a problem) and **CO3** (using effective algorithms) by choosing the most suitable control structure for clarity and efficiency.

**Question 4 (Exam-Oriented - Pitfall):**
Write a `WHILE` loop in pseudocode that prompts the user to enter a positive integer. If the user enters a non-positive integer, the loop should continue asking. What is a potential pitfall in implementing such a loop, and how would you avoid it?

**Answer:**
**Pseudocode:**

```pseudocode
SET user_input TO 0 // Initialize to a non-positive value to enter the loop

WHILE user_input <= 0
  DISPLAY "Please enter a positive integer:"
  INPUT user_input

  // Pitfall Check: Ensure the input is actually processed to change user_input
  // If the input line was missing, or if some logic prevented it from changing,
  // and user_input remained <= 0, we'd have an infinite loop.
END WHILE

DISPLAY "You entered: ", user_input
```

**Potential Pitfall:** The most significant pitfall is creating an **infinite loop**. This happens if the condition `user_input <= 0` never becomes false.

**How to Avoid It:**
1.  **Initialization:** Ensure `user_input` is initialized to a value that allows the loop to start (e.g., 0 or a negative number) if the condition requires it.
2.  **Progress within the Loop:** Crucially, the code *inside* the loop must contain logic that will eventually make the loop's condition false. In this case, the `INPUT user_input` statement must successfully update the `user_input` variable. If, for some reason, the input process failed or was skipped, and `user_input` retained its non-positive value, the loop would never terminate. The act of getting user input and assigning it to `user_input` is what guarantees progress towards fulfilling the `user_input > 0` condition.

This question targets **CO3** (translating algorithms) and **CO4** (understanding systematic approaches and common pitfalls).
