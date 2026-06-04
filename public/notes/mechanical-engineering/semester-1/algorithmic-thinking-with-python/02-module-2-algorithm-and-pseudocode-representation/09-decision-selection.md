---
title: "decision (selection)"
subject: "ALGORITHMIC THINKING WITH PYTHON"
module: "Module 2: ALGORITHM AND   PSEUDOCODE   REPRESENTATION:"
branch: "Mechanical Engineering"
semester: 1
topicId: "68bd1e0bca560598cfa34a90"
status: "completed"
scrapedAt: "2026-05-20T17:36:23.858Z"
---
# Module 2: Algorithm and Pseudocode Representation: Decision (Selection)

Welcome, everyone, to our exciting journey into the heart of algorithmic thinking! In this module, we're laying the groundwork for how computers make choices, which is absolutely fundamental to solving problems with code. Today, we dive into *Decision*, or *Selection* as it's often called. This is where our algorithms start to get a bit more interesting than just following a straight line of instructions.

Think about your own life. Every day, you make countless decisions, right? "Should I take an umbrella?" depends on "Is it raining?". "Should I study for the exam?" depends on "Is the exam tomorrow?". These are all forms of decision-making. Algorithms are no different. They need to be able to evaluate conditions and then choose which path to follow based on those evaluations. This ability to *select* a course of action based on whether a condition is true or false is what we'll be focusing on.

This topic directly ties into our course objectives. Specifically, it helps us achieve **CO1: Utilize computing as a model for solving real-world problems** because many real-world problems involve choices. It also strongly supports **CO2: Articulate a problem before attempting to solve it and prepare a clear and accurate model to represent the problem**, as understanding the decision points is crucial for a good model. Ultimately, it empowers us for **CO3: Use effective algorithms to solve the formulated models and translate algorithms into executable programs**, because the selection structure is a core building block of most algorithms. And don't forget **CO4: Interpret the problem-solving strategies, a systematic approach to solving computational problems, and essential Python programming skills** – decision-making is a key strategy!

### The Essence of Decision Making in Algorithms

At its core, decision-making in algorithms revolves around **conditions**. A condition is a statement that can be evaluated as either true or false. We use these conditions to guide the flow of our algorithm.

Imagine you're programming a simple game. A character's movement might depend on whether a button is pressed. The condition here is "Is the 'move forward' button pressed?". If it's true, the character moves forward. If it's false, they stay put. This is the essence of selection.

#### Key Concepts: Conditions and Boolean Values

*   **Condition:** As we mentioned, a condition is an expression that yields a true or false result. In programming, these are often comparisons.
*   **Boolean Value:** The result of a condition is a **Boolean value**. There are only two Boolean values: `True` and `False`. Python, like many languages, uses these directly. Think of them as the fundamental "yes" or "no" that drives our decision-making.

**Example:**
Consider the condition "Is the temperature greater than 30 degrees Celsius?".
*   If the temperature *is* 35 degrees, the condition is `True`.
*   If the temperature *is* 25 degrees, the condition is `False`.

The reference book "Problem Solving & Programming Concepts" by Sprankle and Hubbard (a classic resource!) emphasizes that the ability to evaluate conditions is a cornerstone of programming logic. Without it, programs would be very rigid, simply executing instructions one after another without any adaptation to different situations.

### Representing Decisions: Pseudocode and Flowcharts

Before we get into Python syntax, it's vital to understand how we represent these decision structures in a more abstract way, independent of any specific programming language. This is where pseudocode and flowcharts come in.

#### Pseudocode for Decisions

Pseudocode is like writing an algorithm in plain English, but with a structured, logical format. It allows us to express the logic clearly, making it understandable to humans before we worry about the precise syntax of Python.

For decision-making, we typically use keywords like `IF`, `THEN`, `ELSE`, and `END IF`.

**The "IF-THEN" Structure:**
This is the simplest form of decision. It means, "If a certain condition is true, then do these specific steps."

**Pseudocode Example:**
```pseudocode
IF temperature IS greater than 30 THEN
  PRINT "It's hot! Drink plenty of water."
END IF
```

Here, `temperature IS greater than 30` is our condition. If it evaluates to `True`, the instruction inside the `THEN` and `END IF` block is executed. If it's `False`, that instruction is skipped.

**The "IF-THEN-ELSE" Structure:**
This is more powerful. It says, "If a condition is true, do one thing. Otherwise (if it's false), do something else."

**Pseudocode Example:**
```pseudocode
IF temperature IS greater than 30 THEN
  PRINT "It's hot! Drink plenty of water."
ELSE
  PRINT "Enjoy the pleasant weather."
END IF
```

In this case, if the temperature is 35 degrees, the first message is printed. If the temperature is 25 degrees, the second message is printed. The `ELSE` clause provides an alternative action.

**Connecting to Learning Outcomes:**
This pseudocode representation directly aids **CO2: Articulate a problem before attempting to solve it and prepare a clear and accurate model to represent the problem**. By writing down decisions in pseudocode, we're forcing ourselves to think through the logic and structure of our solution, making the model clearer. This then naturally leads to **CO3: Use effective algorithms to solve the formulated models**, as the pseudocode IS the algorithm at this stage.

#### Flowcharts for Decisions

Flowcharts use graphical symbols to represent the steps of an algorithm. They provide a visual way to understand the flow of control.

*   **Start/End:** Oval shape.
*   **Process/Instruction:** Rectangle shape.
*   **Decision:** Diamond shape. This is where our conditions live!
*   **Input/Output:** Parallelogram shape.
*   **Flow lines:** Arrows connecting the symbols.

**Flowchart Example (IF-THEN-ELSE):**

```
      +---------+
      |  START  |
      +---------+
            |
            v
      +-----------+
      |   READ    |
      | temperature |
      +-----------+
            |
            v
      +-------------------+
      | temperature > 30? |
      +---------+---------+
                / \
               /   \
              /     \
      (True) /       \ (False)
            /         \
           v           v
  +-----------------+   +---------------------+
  | PRINT "Hot!"    |   | PRINT "Pleasant." |
  +-----------------+   +---------------------+
           \               /
            \             /
             \           /
              +---------+
              |   END   |
              +---------+
```

Notice how the diamond shape has two outgoing arrows, typically labeled "True" (or "Yes") and "False" (or "No"), representing the two possible paths. Flowcharts are excellent for visualizing the branching nature of decision structures, as highlighted in **CO4: Interpret the problem-solving strategies**.

### Nested Decisions: Making More Complex Choices

What if our decision itself depends on another decision? This is called **nesting**. Just like Russian nesting dolls, one decision structure can be placed inside another.

Let's say we want to decide what to wear based on temperature, but *only* if it's also raining.

**Pseudocode Example (Nested IF-THEN-ELSE):**

```pseudocode
IF it IS raining THEN
  IF temperature IS less than 10 THEN
    PRINT "Wear a warm coat and scarf."
  ELSE IF temperature IS less than 20 THEN
    PRINT "Wear a jacket."
  ELSE
    PRINT "You might need an umbrella, but can probably wear a light jacket."
  END IF
ELSE  // it is NOT raining
  IF temperature IS greater than 25 THEN
    PRINT "Wear shorts and a t-shirt."
  ELSE
    PRINT "Wear trousers and a t-shirt."
  END IF
END IF
```

This example, inspired by how we naturally handle multiple conditions, illustrates how complex scenarios can be broken down. The outer `IF it IS raining` controls whether we even consider the temperature-based clothing advice for rain. If it's not raining, we jump to the `ELSE` part of the outer `IF` and make a different temperature-based decision.

**Connecting to Course Outcomes:**
Nested decisions are crucial for **CO3: Use effective algorithms to solve the formulated models**. Many real-world problems require these layered choices. Understanding nesting also deepens our grasp of **CO1: Utilize computing as a model for solving real-world problems**, as it allows us to model more nuanced situations.

### Multiple Alternative Decisions: The "ELSE IF" (or "ELIF")

Sometimes, we don't just have two options (true/false); we might have several possible outcomes based on different conditions. For example, grading a student's score:
*   Score >= 90 is 'A'
*   Score >= 80 is 'B'
*   Score >= 70 is 'C'
*   ...and so on.

We can chain `IF-THEN-ELSE` structures, but a more elegant way is to use `ELSE IF` (or `ELIF` in Python). This checks conditions sequentially.

**Pseudocode Example (Multiple Alternatives):**

```pseudocode
IF score IS greater than or equal to 90 THEN
  PRINT "Grade: A"
ELSE IF score IS greater than or equal to 80 THEN
  PRINT "Grade: B"
ELSE IF score IS greater than or equal to 70 THEN
  PRINT "Grade: C"
ELSE IF score IS greater than or equal to 60 THEN
  PRINT "Grade: D"
ELSE
  PRINT "Grade: F"
END IF
```

**How it works:** The computer checks `score IS greater than or equal to 90`. If true, it prints "Grade: A" and *skips* all the subsequent `ELSE IF` and `ELSE` parts. If the first condition is false, it moves to the next `ELSE IF` and checks that condition. This continues until a condition is met, or if none are met, the final `ELSE` block is executed.

**Important Point to Remember:** The order of these conditions *matters*! If we put `score IS greater than or equal to 70` before `score IS greater than or equal to 90`, any score of 95 would incorrectly be assigned a 'C' because the first condition (`>= 70`) would be met. This is a common pitfall exam questions might test, so always think about the order of checks for multiple alternatives!

This sequential checking is a powerful problem-solving strategy (CO4) that helps us build accurate models (CO2).

### Common Comparison Operators

To form our conditions, we use comparison operators. These are the tools that allow us to compare values.

*   `>` : Greater than
*   `<` : Less than
*   `>=`: Greater than or equal to
*   `<=`: Less than or equal to
*   `==`: Equal to (Note the double equals! A single equals `=` is for assignment.)
*   `!=`: Not equal to

**Example Usage in Conditions:**
*   `age >= 18`
*   `userName == "admin"`
*   `balance != 0`

These operators are fundamental to forming any logical expression that can be evaluated to `True` or `False`. George Pólya's "How to Solve It" emphasizes breaking down complex problems into smaller, manageable steps. Here, these operators are the tools for creating those logical steps.

### Logical Operators: Combining Conditions

What if our decision depends on *multiple* conditions being true or false simultaneously? For instance, "I'll go for a picnic if the weather is sunny *and* it's a weekend." This requires combining conditions using **logical operators**.

The three main logical operators are:
1.  **AND:** The overall condition is `True` only if *both* individual conditions are `True`.
    *   Example: `isSunny AND isWeekend`
2.  **OR:** The overall condition is `True` if *at least one* of the individual conditions is `True`.
    *   Example: `isLate OR hasAssignment`
3.  **NOT:** This reverses the Boolean value of a condition. If a condition is `True`, `NOT condition` is `False`, and vice-versa.
    *   Example: `NOT isFoggy`

**Example Scenario:**
Let's say we're designing a system for a smart home to turn on the lights.
*   Lights turn on if `(time IS after sunset) AND (nobody IS home)`
*   Lights also turn on if `(motion IS detected) AND (nobody IS home) AND (NOT isDaylight)`

**Pseudocode Example with Logical Operators:**

```pseudocode
IF (time IS after sunset) AND (nobody IS home) THEN
  TURN ON lights
ELSE IF (motion IS detected) AND (nobody IS home) AND (NOT isDaylight) THEN
  TURN ON lights
ELSE
  TURN OFF lights // or do nothing
END IF
```

**Important Note on Truth Tables:** Understanding how AND, OR, and NOT work together is crucial.
*   `True AND True` is `True`
*   `True AND False` is `False`
*   `False AND False` is `False`
*   `True OR True` is `True`
*   `True OR False` is `True`
*   `False OR False` is `False`
*   `NOT True` is `False`
*   `NOT False` is `True`

These logical operators allow us to build very sophisticated decision-making processes, directly supporting **CO1: Utilize computing as a model for solving real-world problems** by enabling us to represent complex real-world rules.

### Why is This Important? Connecting to the "Big Picture"

Understanding decision structures (selection) is not just about writing `IF` statements. It's about developing the ability to think algorithmically, to break down problems into logical steps, and to create solutions that can adapt to different inputs and situations. This aligns perfectly with **CO4: Interpret the problem-solving strategies**.

As Donald Treffinger and colleagues discuss in "Creative Problem Solving," the ability to explore different options and choose the best course of action is central to creativity. In programming, decision structures are our primary tools for this exploration and selection.

From a problem-solving perspective (inspired by Pólya's "How to Solve It"), decision structures allow us to:
1.  **Understand the problem:** Identify the different scenarios or cases that need to be handled.
2.  **Devise a plan:** Outline the sequence of checks and actions for each scenario.
3.  **Carry out the plan:** Translate this logic into pseudocode or code.
4.  **Look back:** Test the algorithm with various inputs to ensure it handles all cases correctly.

This systematic approach, where decisions are a key part, is what makes algorithms powerful. They aren't just recipes; they are intelligent instructions that can reason and adapt. This is the essence of algorithmic thinking.

---

## Sample Questions and Answers

Here are some questions to test your understanding, covering both conceptual and exam-oriented aspects.

**Question 1 (Conceptual):**
What is the fundamental purpose of a decision (selection) structure in an algorithm?

**Answer 1:**
The fundamental purpose of a decision (selection) structure is to allow an algorithm to **choose** between different courses of action based on whether a specific **condition** evaluates to `True` or `False`. This enables algorithms to be dynamic and respond to varying inputs or situations, rather than executing a fixed, linear sequence of instructions.

**Question 2 (Conceptual/Exam-Oriented):**
Explain the difference between the `IF-THEN` and `IF-THEN-ELSE` structures in pseudocode.

**Answer 2:**
*   **`IF-THEN`:** This structure executes a specific block of statements *only if* a given condition is `True`. If the condition is `False`, the statements within the `IF-THEN` block are skipped entirely. It handles one possible outcome.
*   **`IF-THEN-ELSE`:** This structure provides two alternative paths. If the condition is `True`, one block of statements is executed. If the condition is `False`, a *different* block of statements (under the `ELSE` clause) is executed. It handles both the `True` and `False` outcomes of a condition.

**Question 3 (Exam-Oriented - Logic):**
Consider the following pseudocode fragment:

```pseudocode
IF age >= 18 THEN
  PRINT "Eligible to vote."
ELSE IF age < 0 THEN  // Pitfall question!
  PRINT "Invalid age."
ELSE
  PRINT "Not eligible to vote."
END IF
```
What would be printed if `age` is `15`? What if `age` is `-5`? Explain why.

**Answer 3:**
*   If `age` is `15`:
    The first condition, `age >= 18`, is `False` (15 is not greater than or equal to 18).
    The program then checks the next condition, `age < 0`. Since 15 is not less than 0, this is also `False`.
    Finally, the `ELSE` block is executed, and `PRINT "Not eligible to vote."` will be displayed.

*   If `age` is `-5`:
    The first condition, `age >= 18`, is `False` (-5 is not greater than or equal to 18).
    The program then checks the next condition, `age < 0`. Since -5 *is* less than 0, this condition is `True`.
    The `PRINT "Invalid age."` statement within this `ELSE IF` block will be executed.

**Explanation of the Pitfall:** This question highlights the importance of the *order* of checks in multiple alternative structures. While `age < 0` is indeed an invalid age, it's checked *after* the primary eligibility check. A more robust design would handle invalid ages first. A better sequence might be:

```pseudocode
IF age < 0 THEN
  PRINT "Invalid age."
ELSE IF age >= 18 THEN
  PRINT "Eligible to vote."
ELSE
  PRINT "Not eligible to vote."
END IF
```
In this improved version, an age of `-5` would correctly trigger "Invalid age," and an age of `15` would correctly trigger "Not eligible to vote."

**Question 4 (Conceptual/Exam-Oriented - Logical Operators):**
What is the result of `(True OR False) AND (False AND True)`?

**Answer 4:**
Let's break it down:
1.  `(True OR False)` evaluates to `True` (because at least one part is `True`).
2.  `(False AND True)` evaluates to `False` (because for `AND` to be `True`, both parts must be `True`).
3.  Now we have `True AND False`.
4.  `True AND False` evaluates to `False`.

So, the final result is `False`. This demonstrates how logical operators combine Boolean values.

**Question 5 (Exam-Oriented - Problem Modeling):**
You are designing an algorithm to control a heating system. The system should:
*   Turn on the heater if the temperature is below 18 degrees Celsius.
*   If the temperature is between 18 and 22 degrees Celsius (inclusive), the heater should remain off, but a fan should turn on if the temperature is above 20 degrees.
*   If the temperature is above 22 degrees Celsius, nothing special needs to happen (heater and fan remain off).

Write pseudocode to represent this logic.

**Answer 5:**

```pseudocode
IF temperature IS less than 18 THEN
  TURN ON heater
ELSE IF temperature IS less than or equal to 22 THEN // This covers 18 to 22
  IF temperature IS greater than 20 THEN
    TURN ON fan
  END IF
// ELSE temperature IS greater than 22 - no action needed, implicitly handled by falling through
END IF
```

**Reasoning for the Pseudocode:**
*   The first `IF` handles temperatures strictly below 18.
*   The `ELSE IF temperature IS less than or equal to 22` catches everything from 18 up to and including 22.
*   Inside this second condition, a nested `IF temperature IS greater than 20` specifically targets the sub-range of 21 and 22 for the fan. Temperatures 18, 19, and 20 will pass this nested `IF` and do nothing more, which is correct.
*   Temperatures above 22 are implicitly handled because they don't meet the first `IF` or the `ELSE IF` conditions, and there's no further `ELSE` to catch them, meaning no action is taken for them, which is also correct according to the requirements.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
