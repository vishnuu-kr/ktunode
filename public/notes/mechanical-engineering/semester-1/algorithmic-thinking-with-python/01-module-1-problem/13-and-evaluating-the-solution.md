---
title: "and Evaluating the solution."
subject: "ALGORITHMIC THINKING WITH PYTHON"
module: "Module 1: PROBLEM"
branch: "Mechanical Engineering"
semester: 1
topicId: "68bd1e0bca560598cfa34a83"
status: "completed"
scrapedAt: "2026-05-20T17:36:14.304Z"
---
# Algorithmic Thinking with Python: Module 1 - The Problem: Understanding and Evaluating the Solution

Welcome to the exciting world of Algorithmic Thinking! In this first module, we're going to lay the foundation for everything we'll do in this course. And what's the most crucial starting point for any problem-solving endeavor? It's the **problem itself**! Before we even *think* about writing a single line of Python code, we need to become masters of understanding and defining the problem we're trying to solve. This isn't just about "what do I need to do?", but rather "what *exactly* am I trying to achieve, and how will I know if I've succeeded?"

This module will directly help us achieve our Course Outcomes:

*   **CO1: Utilize computing as a model for solving real-world problems.** (Knowledge Level: K2) - By understanding the problem, we learn how to frame it in a way that computing can address.
*   **CO2: Articulate a problem before attempting to solve it and prepare a clear and accurate model to represent the problem.** (Knowledge Level: K3) - This is the *heart* of this module! We'll be practicing how to clearly describe and model problems.
*   **CO3: Use effective algorithms to solve the formulated models and translate algorithms into executable programs.** (Knowledge Level: K3) - You can't have an effective algorithm if you don't fully grasp the problem it's supposed to solve.
*   **CO4: Interpret the problem-solving strategies, a systematic approach to solving computational problems, and essential Python programming skills** (Knowledge Level: K2) - Understanding the problem is the very first step in any systematic problem-solving strategy.

Think of it this way: if you're building a house, you wouldn't just start laying bricks, would you? You'd first need architectural plans, understanding the client's needs, the site's constraints, and what a "finished house" looks like. Our work in this module is like creating those essential blueprints for our computational solutions.

## The Art and Science of Understanding the Problem

So, what does it really mean to "understand a problem"? It’s more than just reading a sentence or two. It's about digging deep, asking questions, and seeing the problem from all angles. As George Pólya beautifully puts it in *How to Solve It*, understanding the problem is the first and most important step. He emphasizes understanding the data, the unknown, and the conditions that connect them.

### 1. What is the Problem, Really? (Defining and Articulating)

This is where we move from a vague idea to a concrete statement.

*   **Identify the Goal (The Unknown):** What is the ultimate objective? What are we trying to produce or achieve?
    *   *Example:* Instead of "make a program to sort numbers," it's "create a program that takes a list of unsorted integers and outputs a new list with those same integers arranged in ascending order." See the difference? We've specified the *input* (unsorted integers) and the *output* (ascending order list).
*   **Identify the Inputs:** What information or data do we have available to start with? What are the raw materials?
    *   *Example:* In our sorting problem, the input is the "list of unsorted integers." Is it always integers? Can it be empty? What's the maximum size? These are crucial details.
*   **Identify the Constraints:** What are the limitations or rules we must follow? These can be about time, memory, specific methods we must use or avoid, or even the format of the input/output.
    *   *Example:* A constraint might be that we can only use a specific sorting algorithm, or that the solution must run within a certain time limit.
*   **Identify the Desired Output:** What should the final result look like? What format should it be in? What are the success criteria?
    *   *Example:* For our sorting problem, the output is a "new list with those same integers arranged in ascending order."

Maureen Sprankle and Jim Hubbard, in *Problem Solving & Programming Concepts*, stress the importance of a clear problem definition. They often suggest writing down the problem statement in your own words. This forces you to process the information actively.

**Think about it like this:** Imagine you're asked to bake a cake for a friend's birthday.
*   **Goal:** Bake a delicious birthday cake.
*   **Inputs:** Flour, sugar, eggs, milk, butter, frosting ingredients, birthday candles.
*   **Constraints:** Needs to be gluten-free, ready by 3 PM, must fit on a standard cake stand.
*   **Output:** A decorated, gluten-free cake, ready by 3 PM, with candles.

Without this detailed understanding, you might end up with a regular cake when your friend needed gluten-free, or it might be ready at 5 PM instead of 3 PM. In computing, these "misses" can be much more costly.

### 2. Devising a Plan: Modeling the Problem

Once we understand the problem, we need a way to represent it. This is where modeling comes in. A model is a simplified representation of the real-world problem that we can work with.

*   **Why Model?**
    *   **Simplification:** Real-world problems are often complex. A model helps us focus on the essential elements.
    *   **Visualization:** Models can help us "see" the problem and potential solutions.
    *   **Communication:** A good model helps us communicate our understanding of the problem to others.
    *   **Foundation for Algorithms:** The model guides us in designing the steps (the algorithm) to solve the problem.

*   **Types of Models (and how they relate to computing):**
    *   **Verbal Descriptions:** As we've discussed, clearly stating the problem in words. (CO2)
    *   **Flowcharts:** These are visual diagrams that show the sequence of operations in an algorithm. They use standard symbols to represent different actions (like processing, input/output, decision points). They are fantastic for understanding the *flow* of logic.
        *   *Analogy:* Think of a flowchart as a recipe's step-by-step instructions laid out visually, showing you exactly what to do at each stage and when to make choices (like "if the mixture is too dry, add more milk").
    *   **Pseudocode:** This is a way to describe an algorithm using a combination of natural language and programming-like structures. It's not actual code, but it's structured enough to be easily translated into any programming language. It’s like writing down the recipe steps in a structured, logical way that’s halfway between English and programming syntax.
        *   *Example (for sorting):*
            ```
            FUNCTION sort_list(unsorted_list)
              FOR each element in unsorted_list
                FIND the smallest element remaining
                ADD it to a new_sorted_list
              RETURN new_sorted_list
            END FUNCTION
            ```
        *   This is extremely useful for bridging the gap between understanding the problem (CO2) and designing an algorithm (CO3).
    *   **Data Structures:** How will we organize the input data? For our sorting problem, a "list" or "array" is a common data structure. Choosing the right data structure is crucial for efficient problem-solving. Donald Treffinger, Scott Isaksen, and Brian Stead-Doval, in *Creative Problem Solving*, highlight that understanding the components of a problem is key to finding creative solutions, and data structures are the components of our computational "ingredients."

*   **Example: Calculating the Average of a List of Numbers**
    *   **Problem Statement:** Given a list of numbers, calculate their arithmetic mean (average).
    *   **Goal:** Calculate the average.
    *   **Input:** A list of numbers (e.g., `[10, 20, 30, 40]`).
    *   **Constraints:** The list might be empty. The numbers could be integers or decimals.
    *   **Output:** A single number representing the average.
    *   **Model (Pseudocode):**
        ```
        FUNCTION calculate_average(number_list)
          IF number_list is empty THEN
            RETURN "Cannot calculate average of an empty list"
          ELSE
            sum = 0
            count = 0
            FOR each number in number_list
              sum = sum + number
              count = count + 1
            END FOR
            average = sum / count
            RETURN average
          END IF
        END FUNCTION
        ```
    *   This pseudocode clearly outlines the steps: handle the empty case, initialize variables, loop through the list to sum and count, then perform the division. This directly supports CO2 and sets us up for CO3.

## Evaluating the Solution: Did We Actually Solve It?

Understanding the problem and creating a plan is vital, but how do we know if our plan, and the resulting solution (which will eventually be code), actually *works* and is any good? This is where evaluation comes in.

### 1. Verification: Does it do what it's supposed to do?

Verification is about checking if the solution correctly implements the algorithm and meets the problem's requirements.

*   **Testing with Examples:** This is the most common way. We use different inputs to see if the output is as expected.
    *   **"Happy Path" or Typical Cases:** Test with inputs that are representative of normal usage. (e.g., sorting a list `[5, 2, 8, 1]`)
    *   **Edge Cases:** These are the unusual or boundary conditions that might break a program if not handled correctly.
        *   *Empty Input:* What happens if the list is empty? (e.g., sorting `[]`)
        *   *Single Element:* What happens with just one item? (e.g., sorting `[7]`)
        *   *All Same Elements:* What if all numbers are identical? (e.g., sorting `[3, 3, 3]`)
        *   *Already Sorted:* What if the input is already in the desired order? (e.g., sorting `[1, 2, 3, 4]`)
        *   *Reverse Sorted:* What if the input is in the opposite order? (e.g., sorting `[4, 3, 2, 1]`)
    *   **Invalid Inputs:** What if the input isn't what we expect? (e.g., trying to sort a list of words instead of numbers, though we might constrain this earlier).
*   **Manual Tracing:** Go through the algorithm step-by-step with a small, simple input and "mentally" execute it, keeping track of variable values. This is like checking your math homework by hand before submitting it.
*   **Code Reviews (later in your journey):** Having others look at your code to find errors.

**Key Idea:** You must test your solution with a variety of inputs, especially those "corner cases" that are often overlooked. A solution that works for one input isn't necessarily correct for all valid inputs. This is a crucial part of ensuring CO3 (using effective algorithms) and CO4 (interpreting strategies).

### 2. Validation: Does it solve the *right* problem?

This is a slightly higher-level question. Even if your solution works perfectly according to your model, does it actually solve the *original real-world problem*?

*   **Revisit the Problem Statement:** Go back to the initial description and requirements. Does the output *mean* what the user or stakeholder needs?
*   **User Feedback:** If possible, get feedback from the person who requested the solution. They are the ultimate judges of whether the problem has been solved to their satisfaction.
*   **Efficiency and Performance:** Is the solution *good enough*?
    *   **Time Complexity:** How long does the solution take to run, especially as the input size grows? Is it practical? (We'll delve deeper into this in later modules).
    *   **Space Complexity:** How much memory does the solution use? Is it within acceptable limits?
    *   *Analogy:* Imagine you built a fantastic bread-making machine. It produces perfect loaves (verification). But it takes 5 hours to bake one loaf, and it uses the electricity of a small town! While it *works*, it's not a *good* solution for a typical home baker (validation failure regarding efficiency).
    *   Israel Koren's *Computer Arithmetic Algorithms* highlights that even correct algorithms can have vastly different performance characteristics, making evaluation of efficiency critical.

**Remember this:** Verification asks, "Are we building the product right?" while validation asks, "Are we building the right product?" Both are essential for a successful computational solution.

### Connecting to Learning Outcomes and Course Objectives

Throughout this module, we're building the skills needed for:

*   **CO1 (Utilize computing as a model):** By breaking down problems and creating models, we're learning to see how computing can be applied.
*   **CO2 (Articulate and model problems):** This is our primary focus. Defining the goal, inputs, constraints, and outputs, and then representing them through flowcharts or pseudocode, directly addresses this outcome.
*   **CO3 (Use effective algorithms):** We can't design *effective* algorithms if we don't first deeply understand the problem and its requirements. Our planning phase directly leads to algorithm design.
*   **CO4 (Interpret problem-solving strategies):** Understanding the problem and devising a plan are the first two fundamental stages of any systematic problem-solving strategy, which we will build upon throughout the course.

## Practical Tips for Problem Understanding and Evaluation

*   **Ask Questions Relentlessly:** Don't be afraid to ask "why?" or "what if?" Understand the context.
*   **Write it Down:** Whether it's pseudocode, a flowchart, or a simple list of inputs/outputs, putting it on paper (or screen) makes it concrete.
*   **Use Examples:** Concrete examples are your best friends for understanding and testing.
*   **Think About the Edges:** Always consider the extreme or unusual cases. They often reveal hidden flaws.
*   **Iterate:** Problem-solving is rarely linear. You might define the problem, start planning, realize you missed something about the problem, and go back. That's perfectly normal! The process described by Spielman et al. in *Psychology (Sec. Problem Solving)* often involves cycles of understanding, planning, and executing.

By mastering the art of defining and evaluating problems, we set ourselves up for success in every subsequent step of algorithmic thinking and Python programming. This foundational understanding is what separates a "programmer who just writes code" from a "computational problem-solver."

---

## Sample Questions and Answers

**1. Conceptual Question:**
According to George Pólya's approach in *How to Solve It*, what are the fundamental components you need to understand about a problem before devising a plan?

**Answer:**
Pólya emphasizes understanding:
*   **The Unknown:** What is the desired result or output? What are you trying to find?
*   **The Data:** What information or inputs are available to you?
*   **The Conditions:** What are the relationships between the data and the unknown? What rules or constraints govern the problem?

Understanding these three elements is crucial for effectively formulating the problem and moving towards a solution.

**2. Exam-Oriented Question:**
You are asked to write a Python program to calculate the area of a rectangle.

*   **Problem Statement:** "Create a program to calculate the area of a rectangle."

Which of the following is the *most* complete and clear problem definition, including necessary components for planning an algorithm?

    a) Input: length, width. Output: area.
    b) Problem: Calculate rectangle area. Needs length and width. Returns area.
    c) Goal: Calculate the area of a rectangle. Input: Two positive numbers representing length and width. Output: A single positive number representing the area, calculated as length multiplied by width. Constraint: Inputs must be positive.
    d) We need to multiply length by width to get the area.

**Answer:**
The correct answer is **c**.

**Reasoning:**
*   **a) Input/Output only:** While it mentions inputs and outputs, it lacks the goal, constraints, and a clear definition of what "area" means in this context (e.g., units). It doesn't specify if inputs can be negative or zero.
*   **b) Informal:** It's informal and doesn't clearly define the *type* of input or output or any constraints.
*   **c) Comprehensive:** This option clearly states the **goal** (calculate area), specifies the **inputs** with their types and expected properties (two positive numbers for length and width), defines the **output** with its type and meaning (single positive number), and explicitly states a **constraint** (inputs must be positive). This level of detail is essential for creating a robust algorithm and later, Python code. It addresses CO2 directly.
*   **d) Solution hint, not problem definition:** This option describes *how* to solve it (multiply length by width), not what the problem *is*. It skips the crucial steps of defining the goal, inputs, and constraints.

**3. Scenario-Based Question (Connecting to CO4):**
You've developed a program that calculates shipping costs based on weight and destination. The program runs quickly and gives a numerical output. However, customers are complaining that the costs are often incorrect. Based on our module's discussion on problem evaluation, what is the likely issue, and which step of problem-solving might have been overlooked?

**Answer:**
The likely issue is a failure in **validation**.

**Reasoning:**
The program might be performing the calculations *correctly* based on the defined algorithm and inputs (meaning it passed **verification**), but it's not solving the *actual* problem the customers perceive. This suggests that either:
*   The original problem statement was not fully understood or accurately represented.
*   The initial model of the problem didn't capture all the necessary conditions or rules for calculating shipping costs (e.g., different pricing tiers, special handling fees, tax implications).
*   User feedback (a crucial part of validation) was not adequately considered.

The step likely overlooked is the thorough **validation** of the solution against the real-world requirements and user expectations, even if the program technically "works" according to its internal logic. This directly relates to CO4, as it involves interpreting the effectiveness of the problem-solving strategy.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
