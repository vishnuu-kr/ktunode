---
title: "Sample problems *"
subject: "ALGORITHMIC THINKING WITH PYTHON"
module: "Module 2: ALGORITHM AND   PSEUDOCODE   REPRESENTATION:"
branch: "Mechanical Engineering"
semester: 1
topicId: "68bd1e0bca560598cfa34a8c"
status: "completed"
scrapedAt: "2026-05-20T17:36:21.059Z"
---
# Algorithmic Thinking with Python: Module 2 - Algorithm and Pseudocode Representation: Sample Problems

Welcome back, everyone! In our previous sessions, we laid the groundwork for understanding what algorithms are and why they are fundamental to computing. We learned that an algorithm is essentially a step-by-step procedure or a set of rules to be followed in calculations or other problem-solving operations, especially by a computer. And we also touched upon pseudocode as a way to express these algorithms in a human-readable format, bridging the gap between human language and computer code.

Today, we're diving into the heart of this module: **Sample Problems**. This is where theory meets practice. We'll take the concepts we’ve learned and apply them to real-world (or at least, relatable!) scenarios. This is crucial for solidifying your understanding and, importantly, for achieving our course objectives.

Let's revisit those objectives for a moment. We want to:

*   **CO1: Utilize computing as a model for solving real-world problems.** By working through sample problems, we’ll see how we can break down everyday challenges into computational steps.
*   **CO2: Articulate a problem before attempting to solve it and prepare a clear and accurate model to represent the problem.** This module is all about that articulation and modeling process. We'll practice defining our problems precisely.
*   **CO3: Use effective algorithms to solve the formulated models and translate algorithms into executable programs.** Today, we’ll focus on designing those effective algorithms and expressing them in pseudocode, the precursor to coding.
*   **CO4: Interpret the problem-solving strategies, a systematic approach to solving computational problems, and essential Python programming skills.** Our sample problems will showcase these strategies and build the foundational thinking needed for Python.

Remember George Pólya's classic book, "How to Solve It"? He emphasizes understanding the problem, devising a plan, carrying out the plan, and looking back. This is precisely the journey we'll embark on with each sample problem.

## The Power of Breaking Down Problems: A Core Skill

Before we jump into specific examples, let's reinforce this idea: the ability to break down a complex problem into smaller, manageable steps is arguably the most critical skill in algorithmic thinking. It’s like peeling an onion, layer by layer. Maureen Sprankle and Jim Hubbard, in their book "Problem Solving & Programming Concepts," stress this decomposition as a key programming principle.

Think about something as simple as making a cup of tea. It sounds trivial, right? But if we were to write an algorithm for it, what would it look like?

*   **Understand the Problem:** The goal is to produce a hot, drinkable cup of tea.
*   **Devise a Plan:** What are the steps?
    1.  Get a mug.
    2.  Get a tea bag.
    3.  Boil water.
    4.  Put the tea bag in the mug.
    5.  Pour hot water into the mug.
    6.  Let it steep for a few minutes.
    7.  Remove the tea bag.
    8.  (Optional) Add milk and/or sugar.
    9.  Stir.
    10. Enjoy.

See? Even a simple task requires a sequence of well-defined steps. Now, imagine if we had to tell a robot to make tea! Each of these steps would need to be even more granular: "Get a mug" might involve locating the cupboard, opening it, grasping a mug, and moving it to the counter. This is the essence of computational thinking – transforming real-world tasks into precise, logical sequences.

### Defining Our Terms: Algorithms and Pseudocode Refresher

Just a quick recap:

*   **Algorithm:** A finite sequence of well-defined, computer-implementable instructions, typically to solve a class of specific problems or to perform a computation. It’s the *what* and *how* of the solution.
*   **Pseudocode:** An informal, high-level description of the operating principle of a computer program or other algorithm. It uses the structural conventions of a normal programming language but is intended for human reading rather than machine reading. Think of it as a blueprint or a recipe written in a structured, but not strictly bound, language. It helps us think through the logic *before* we get bogged down in the syntax of a specific programming language like Python.

This distinction is important, and understanding it will help you clearly articulate your problem-solving process (CO2) and design effective algorithms (CO3).

## Sample Problem 1: Calculating the Area of a Rectangle

Let's start with a classic, foundational problem: calculating the area of a rectangle. This is a great way to practice expressing a simple mathematical concept algorithmically.

**Problem Statement:** Design an algorithm to calculate the area of a rectangle, given its length and width.

**Thinking Through the Problem (CO2):**

What do we need to solve this?
1.  We need the dimensions of the rectangle: its length and its width. These are our *inputs*.
2.  We need to know *how* to calculate the area. The formula is Area = Length × Width. This is our *processing* step.
3.  We need to present the result. This is our *output*.

**Developing the Algorithm (CO3):**

Let's think about the steps involved.

1.  **Start.** Every algorithm needs a clear beginning.
2.  **Input:** We need to get the length and the width. Let’s assume we'll ask the user to provide these values.
3.  **Process:** We’ll multiply the length by the width to get the area.
4.  **Output:** We’ll display the calculated area.
5.  **End.** Every algorithm needs a clear end.

**Representing the Algorithm in Pseudocode:**

Now, let's translate these steps into pseudocode. We'll use clear, descriptive keywords.

```
ALGORITHM CalculateRectangleArea
// This algorithm calculates the area of a rectangle.

// Input:
//   length: a number representing the length of the rectangle
//   width: a number representing the width of the rectangle

// Output:
//   area: a number representing the calculated area

BEGIN
    // Get the length from the user
    DISPLAY "Enter the length of the rectangle:"
    READ length

    // Get the width from the user
    DISPLAY "Enter the width of the rectangle:"
    READ width

    // Calculate the area
    area = length * width

    // Display the result
    DISPLAY "The area of the rectangle is: ", area
END
```

**Connecting to Course Outcomes:**

*   **CO2:** We clearly articulated the problem, identified inputs (length, width), the process (multiplication), and the output (area). This pseudocode is our model.
*   **CO3:** We designed a simple, effective algorithm and represented it. The multiplication operation is straightforward.

**Exam Tip:** For simple problems like this, the exam might ask you to:
*   Identify the inputs, outputs, and processing steps.
*   Write the pseudocode for a given problem.
*   Explain the difference between input, processing, and output.

Remember, pseudocode is about clarity. Use words like `GET`, `READ`, `INPUT`, `DISPLAY`, `PRINT`, `CALCULATE`, `SET`, `ASSIGN` to make your intentions obvious.

## Sample Problem 2: Finding the Largest Number in a List

Let's step it up slightly. Imagine you have a list of numbers, and you need to find the largest one. This is a common task in data analysis and programming.

**Problem Statement:** Design an algorithm to find the largest number in a given list of numbers.

**Thinking Through the Problem (CO2):**

What do we need?
1.  A list of numbers to examine. This is our *input*.
2.  A way to compare numbers and keep track of the biggest one found so far. This is our *processing* logic.
3.  The single largest number from the list. This is our *output*.

This problem introduces a new concept: **iteration** (going through each item in a list) and **comparison**. It also involves **keeping state** – remembering the largest number seen *up to this point*. This is a fundamental pattern in many algorithms.

Let's think about how *we* would do this manually. If I give you a list of numbers, say [15, 7, 23, 11, 5], you’d likely:
*   Look at the first number (15) and say, "Okay, 15 is the biggest so far."
*   Look at the next number (7). Is it bigger than 15? No. So, 15 is still the biggest.
*   Look at the next number (23). Is it bigger than 15? Yes! So, now 23 is the biggest.
*   Look at 11. Is it bigger than 23? No. 23 remains the biggest.
*   Look at 5. Is it bigger than 23? No. 23 remains the biggest.
*   We've reached the end of the list. The largest number is 23.

This manual process gives us the core logic for our algorithm.

**Developing the Algorithm (CO3):**

Based on our manual approach, here are the steps:

1.  **Start.**
2.  **Input:** Get the list of numbers.
3.  **Initialization:** We need a variable to store the "largest number found so far." A good starting point is to assume the *first* number in the list is the largest initially. Let's call this variable `max_value`.
4.  **Iteration:** We then need to go through *each remaining number* in the list (from the second number onwards).
5.  **Comparison:** For each number, we compare it with our current `max_value`.
6.  **Update:** If the current number is greater than `max_value`, we update `max_value` to be this new, larger number.
7.  **Continue:** We repeat steps 5 and 6 until we have checked all numbers in the list.
8.  **Output:** Once we have gone through the entire list, the final `max_value` will be the largest number. Display this.
9.  **End.**

**Representing the Algorithm in Pseudocode:**

Let's translate this into pseudocode. We'll use a loop structure for iteration.

```
ALGORITHM FindLargestNumber
// This algorithm finds the largest number in a list of numbers.

// Input:
//   numbers: a list of numbers (e.g., [15, 7, 23, 11, 5])

// Output:
//   max_value: the largest number found in the list

BEGIN
    // Check if the list is empty. If so, we can't find a largest number.
    IF numbers is empty THEN
        DISPLAY "The list is empty. Cannot find the largest number."
        EXIT // Terminate the algorithm
    END IF

    // Initialize max_value with the first element of the list
    max_value = numbers[0]

    // Iterate through the list starting from the second element
    FOR EACH number IN numbers FROM index 1 TO end of list DO
        // Compare the current number with the current max_value
        IF number > max_value THEN
            // If the current number is larger, update max_value
            max_value = number
        END IF
    END FOR

    // Display the result
    DISPLAY "The largest number in the list is: ", max_value
END
```

**Analogy:** Think of this like a treasure hunt. You have a map (the list) and you’re looking for the biggest gem. You pick up the first gem you find and say, "This is the biggest I've seen so far." Then you move to the next spot on the map. If you find a bigger gem, you swap it out. You keep doing this until you've explored all the spots. The gem you're holding at the end is the largest.

**Connecting to Course Outcomes:**

*   **CO1 & CO2:** We've taken a common task (finding the max) and modelled it computationally. We defined the input (list), output (max value), and the necessary processing logic, including handling edge cases like an empty list.
*   **CO3:** We designed an algorithm that uses iteration and conditional logic (the `IF` statement). This is a very common and important algorithmic pattern.
*   **CO4:** This problem directly demonstrates a systematic problem-solving strategy: initialize, iterate, compare, and update.

**Exam Tip:** Problems involving lists, finding maximums/minimums, or performing operations on each element often require **loops** and **conditional statements**. Be comfortable with how to represent these in pseudocode. Also, consider edge cases: what if the list is empty? What if all numbers are the same? Your algorithm should ideally handle these.

## Sample Problem 3: Calculating the Average of Numbers

Let's try one more, building on our list processing skills. Calculating an average is a very common operation.

**Problem Statement:** Design an algorithm to calculate the average of a list of numbers.

**Thinking Through the Problem (CO2):**

To calculate an average, what do we need?
1.  A list of numbers. This is our *input*.
2.  The *sum* of all the numbers in the list. This requires iterating and adding.
3.  The *count* of how many numbers are in the list. This is simply the length of the list.
4.  The formula for average: Average = Sum / Count. This is our *processing* step.
5.  The calculated average. This is our *output*.

**Developing the Algorithm (CO3):**

1.  **Start.**
2.  **Input:** Get the list of numbers.
3.  **Handle Empty List:** If the list is empty, we cannot calculate an average (division by zero is undefined!). We should handle this.
4.  **Initialization:** We need two variables: one to keep track of the `sum` (start it at 0) and one for the `count` (which will be the length of the list).
5.  **Iteration & Summation:** Go through each number in the list. For each number, add it to the `sum`.
6.  **Calculation:** After iterating through all numbers, calculate the `average` by dividing the `sum` by the `count`.
7.  **Output:** Display the calculated `average`.
8.  **End.**

**Representing the Algorithm in Pseudocode:**

```
ALGORITHM CalculateAverage
// This algorithm calculates the average of numbers in a list.

// Input:
//   numbers: a list of numbers

// Output:
//   average: the average of the numbers in the list

BEGIN
    // Check if the list is empty
    IF numbers is empty THEN
        DISPLAY "The list is empty. Cannot calculate average."
        EXIT
    END IF

    // Initialize sum and count
    sum = 0
    count = length of numbers // Or initialize count to 0 and increment in loop

    // Iterate through the list and calculate the sum
    FOR EACH number IN numbers DO
        sum = sum + number
        // If we didn't get count initially, we'd increment it here:
        // count = count + 1
    END FOR

    // Calculate the average
    average = sum / count

    // Display the result
    DISPLAY "The average of the numbers is: ", average
END
```

**Refinement (Exam Focus):** Notice that in the pseudocode, I mentioned we could get the `count` initially or increment it within the loop. For a list, getting its length directly is often more efficient. Python, for instance, has a `len()` function. When designing algorithms, think about the most straightforward way to get the information you need.

**Connecting to Course Outcomes:**

*   **CO1 & CO2:** Again, we’ve modelled a real-world calculation (average) computationally. We've identified inputs, outputs, and the necessary steps, including handling potential errors like division by zero.
*   **CO3:** This algorithm uses iteration (the `FOR EACH` loop) and arithmetic operations. It combines summing and then dividing.
*   **CO4:** This reinforces the systematic approach of breaking down a problem into distinct phases: input, initialization, processing (summation and division), and output, while also considering error conditions.

**Common Pitfall:** Forgetting to handle the case of an empty list when calculating an average is a very common mistake. Always think about those edge cases!

## Bringing It All Together: The Importance of Structure

What we've seen in these sample problems is a consistent pattern:

1.  **Understand the Problem:** Clearly define what needs to be achieved. What are the inputs? What is the desired output?
2.  **Devise a Plan (Design the Algorithm):** Break the problem into smaller steps. Think about the logic, including any necessary comparisons, repetitions (loops), or decisions (conditionals).
3.  **Represent the Plan (Pseudocode):** Write down the algorithm in a clear, human-readable format using pseudocode. This is your blueprint.
4.  **Review and Refine:** Look over your pseudocode. Does it make sense? Does it handle all necessary cases? Is it efficient?

Donald Treffinger and his colleagues, in "Creative Problem Solving," talk about preparation, incubation, illumination, and verification. While not directly programming terms, they mirror this algorithmic process. Preparation is understanding the problem, incubation is letting the ideas simmer (devising the plan), illumination is the "aha!" moment when you see the solution, and verification is checking your work. Pseudocode is a key tool in that verification phase *before* you write actual code.

As we move towards Python, remember that the pseudocode you write is like a high-level sketch. It captures the *logic*. The actual Python code will be the detailed implementation, translating these logical steps into a language the computer understands. John V. Guttag's "Introduction to Computation and Programming using Python" emphasizes this transition from abstract thinking to concrete implementation.

So, keep practicing with these types of problems. Think about everyday tasks, simple math problems, or data manipulation tasks, and try to describe them step-by-step. The more you practice, the more intuitive algorithmic thinking will become. And remember, the goal isn't just to solve the problem, but to understand *how* you solved it – that systematic approach is your most valuable takeaway.

---

## Sample Questions and Answers

Here are a few questions to test your understanding, covering both conceptual aspects and how these might appear in an exam.

**Question 1 (Conceptual - CO2, CO4):**
Explain the difference between an algorithm and pseudocode. Why is it important to create pseudocode before writing actual program code?

**Answer:**
An **algorithm** is a fundamental, step-by-step procedure or set of rules designed to solve a specific problem or perform a computation. It's the logical sequence of operations.

**Pseudocode**, on the other hand, is a *representation* of an algorithm. It's a way to express the algorithm using a structured, informal language that is understandable to humans but not necessarily executable by a computer. It uses keywords common in programming languages but focuses on clarity over strict syntax.

It's important to create pseudocode before writing actual program code because:
*   **Clarity of Logic:** It allows you to focus entirely on the logic of the solution without getting bogged down in the syntax of a particular programming language (like Python's specific rules for loops, variables, etc.). This helps ensure you have a correct plan before implementation. (Addresses CO2 - articulating the problem and preparing a model).
*   **Error Detection:** You can more easily spot logical flaws or missed steps in pseudocode than in actual code, making debugging easier and less time-consuming.
*   **Communication:** Pseudocode can be easily shared and understood by other programmers or stakeholders, even if they don't know the specific programming language being used.
*   **Foundation for Coding:** It acts as a blueprint, making the transition to writing actual code much smoother and more organized. (Addresses CO3 - translating algorithms into executable programs).

**Question 2 (Exam Style - CO3):**
Write the pseudocode for an algorithm that asks a user for their age and then determines if they are old enough to vote (assuming the voting age is 18).

**Answer:**

```
ALGORITHM CheckVotingAge
// This algorithm checks if a user is old enough to vote.

// Input:
//   age: an integer representing the user's age

// Output:
//   A message indicating if the user can vote.

BEGIN
    // Prompt user for their age
    DISPLAY "Please enter your age:"
    READ age

    // Check if the age is 18 or greater
    IF age >= 18 THEN
        // If they are old enough, display a voting message
        DISPLAY "You are old enough to vote!"
    ELSE
        // If they are too young, display a different message
        DISPLAY "You are not yet old enough to vote."
    END IF
END
```

**Reasoning:**
This pseudocode follows the standard algorithm structure: START, INPUT, PROCESSING (IF-THEN-ELSE), OUTPUT, END. It clearly defines the input (`age`), the decision logic (`age >= 18`), and the two possible outputs based on that decision. This demonstrates a simple conditional logic used in programming.

**Question 3 (Conceptual/Application - CO1, CO3):**
Imagine you are designing an algorithm for a robot to water plants. What are some of the "inputs" the robot might need, and what is a basic "processing" step involved?

**Answer:**
This question asks us to apply algorithmic thinking to a real-world scenario, connecting to CO1 and CO3.

*   **Possible Inputs:**
    *   **Moisture level of the soil:** The robot needs to know if the plant actually needs water. This could be an input from a soil moisture sensor.
    *   **Amount of water to dispense:** This could be a predefined value for each plant type or determined by the moisture level.
    *   **Plant identification:** If the robot handles multiple plants, it needs to know *which* plant it's currently interacting with to apply the correct watering amount.
    *   **Time of day:** Some plants prefer watering at specific times.
    *   **Battery level:** The robot needs to know if it has enough power to complete the task.

*   **Basic Processing Step Example:**
    *   **Conditional Watering:** A core processing step would be comparing the current soil moisture level (input) to a predefined threshold.
        *   `IF soil_moisture < desired_moisture_level THEN`
        *   `    // Activate watering mechanism`
        *   `ELSE`
        *   `    // Do not water`
        *   `END IF`

This illustrates how real-world problems are broken down into inputs and logical processing steps that can then be translated into an algorithm and eventually code.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
