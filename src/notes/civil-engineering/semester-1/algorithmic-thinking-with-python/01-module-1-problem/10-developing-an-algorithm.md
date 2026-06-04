---
title: "Developing an algorithm"
subject: "ALGORITHMIC THINKING WITH PYTHON"
module: "Module 1: PROBLEM"
branch: "Civil Engineering"
semester: 1
topicId: "68b54566d74ec52cc0912b54"
status: "completed"
scrapedAt: "2026-05-20T18:28:01.972Z"
---
# ALGORITHMIC THINKING WITH PYTHON

## Module 1: PROBLEM

## Topic: Developing an Algorithm

Welcome, everyone! In this module, we're going to lay the very foundation of everything we'll do in this course. We're talking about **Algorithmic Thinking**, and to do that, we first need to understand how we approach and define a **problem** before we even think about writing a single line of code. Today, we're diving into the art and science of **developing an algorithm**.

Think of an algorithm as a recipe. Just like you can't bake a cake without a recipe that tells you exactly what ingredients you need and in what order you need to combine them, you can't solve a computational problem without a clear set of instructions. And the first, most crucial step in creating that recipe is understanding the problem itself. This is where our first learning outcome comes into play: **understanding the problem**.

### 1. Understanding the Problem: The Crucial First Step

Before we even *dream* of an algorithm, we need to thoroughly understand the problem we're trying to solve. This might sound obvious, but you'd be surprised how many times people jump straight to solutions without fully grasping what needs to be solved. George Pólya, in his classic book "How to Solve It," emphasizes this incredibly well. He breaks down problem-solving into four stages, and the very first one is **Understanding the Problem**.

What does it mean to "understand" a problem? It means answering some critical questions:
*   What is the goal? What am I trying to achieve?
*   What information (inputs) do I have available?
*   What information (outputs) do I need to produce?
*   What are the constraints or limitations? Are there any rules I must follow?

Let's take a relatable example. Imagine you're planning a birthday party for a friend.

**Problem:** Plan a surprise birthday party for your friend, Sarah.

Now, let's "understand" this problem using our questions:

*   **Goal:** To throw a successful surprise party that Sarah will love.
*   **Inputs:** Sarah's birthday is next Saturday. She loves Italian food and has a lot of friends. She dislikes loud music. We have a budget of $200. Her favorite color is blue.
*   **Outputs:** A party venue booked, invitations sent, food arranged, decorations in place, and Sarah surprised!
*   **Constraints:** The party must be a surprise. The budget is $200. Sarah dislikes loud music. The party must be next Saturday.

See how by asking these questions, we start to get a much clearer picture? This deep understanding is directly linked to **Course Outcome 2 (CO2): Articulate a problem before attempting to solve it and prepare a clear and precise model to represent the problem.** When we can clearly state what we want to achieve and what we have to work with, we're already on our way to building a good model of the problem.

This process of clarifying inputs, outputs, and constraints helps us move from a vague idea to a concrete problem statement. It's about moving from "I need to do something" to "I need to achieve *this* using *these* resources, resulting in *that*."

### 2. Devising a Plan: The Bridge to the Algorithm

Once we understand the problem, the next step, as Pólya would say, is to **Devise a Plan**. This is where we start thinking about *how* we're going to solve it. This stage is all about strategy and is crucial for **Course Outcome 3 (CO3): Use effective algorithms to solve the formulated models and translate algorithms into executable programs.** If our plan is flawed, our algorithm will be too.

In our party planning example, the plan might involve:

1.  **Deciding on the Guest List:** Who should we invite? This depends on Sarah's friends.
2.  **Choosing a Venue:** Where can we have the party? A restaurant? Someone's house?
3.  **Selecting Food:** What kind of food? Given Sarah's preference for Italian.
4.  **Arranging Decorations:** How can we make it festive, keeping Sarah's dislike for loud music and love for blue in mind?
5.  **Sending Invitations:** How do we make sure everyone knows and keeps it a surprise?
6.  **The Surprise Element:** How do we get Sarah to the party without her suspecting?

This "plan" is essentially the high-level strategy. It breaks down the big problem into smaller, manageable sub-problems. This systematic approach is central to **Course Outcome 4 (CO4): Interpret the problem-solving strategies, a systematic approach to solving computational problems, and essential Python programming skills.**

When devising a plan, we might think about different strategies:

*   **Working Backwards:** Sometimes, especially with deadlines, you might start from the desired end result and work backward to figure out what needs to happen when. For the party, what needs to happen just before Sarah arrives? Invitations need to be out, food ordered, decorations up. What needs to happen before that? Venue booked, guest list finalized.
*   **Looking for Patterns:** If this is a recurring type of problem (like planning *any* party), we might look for common patterns in how we've done it before. In computation, this is often about recognizing that a task might be repeated and looking for ways to automate that repetition.
*   **Breaking Down the Problem:** As we saw with the party, dividing a large task into smaller, sequential steps is often the most effective way to proceed.

### 3. Carrying Out the Plan: The Birth of the Algorithm

This is where we translate our plan into concrete, step-by-step instructions. This is the actual **development of an algorithm**. An algorithm is a finite sequence of well-defined, computer-implementable instructions, typically to solve a class of specific problems or to perform a computation.

Let's take a simpler, computational example: **Calculating the average of three numbers.**

**Understanding the Problem:**
*   **Goal:** To find the average of three given numbers.
*   **Inputs:** Three numbers (let's call them `num1`, `num2`, `num3`).
*   **Outputs:** The average of these three numbers.
*   **Constraints:** The numbers are numerical.

**Devising a Plan:**
1.  Get the three numbers.
2.  Add the three numbers together.
3.  Divide the sum by 3.
4.  The result is the average.

Now, let's turn this plan into an **algorithm**. We can express this in a few ways. A common way is using pseudocode, which is like a detailed, human-readable description of the algorithm, but not tied to any specific programming language.

**Algorithm: Calculate Average of Three Numbers**

1.  **START**
2.  **INPUT** `num1`, `num2`, `num3` (These are the numbers we'll be given)
3.  **CALCULATE** `sum` = `num1` + `num2` + `num3`
4.  **CALCULATE** `average` = `sum` / 3
5.  **OUTPUT** `average` (This is the result we want to show)
6.  **END**

This is a very simple algorithm. Notice how each step is clear and unambiguous. There's no room for interpretation, which is essential for computer execution. This directly supports **CO3** by showing how we create the steps needed to solve a defined model.

Think about this in relation to **Course Outcome 1 (CO1): Utilize computing as a model for solving real-world problems.** We're using the structured, logical approach of computing to model a real-world task (calculating an average).

The reference book "Introduction to Computation and Programming using Python" by Guttag emphasizes this point: algorithms are the heart of computation. They are the precise recipes that enable computers to perform tasks.

**Key Characteristics of a Good Algorithm:**

*   **Input:** It must have zero or more well-defined inputs. (Like our `num1`, `num2`, `num3`).
*   **Output:** It must produce one or more well-defined outputs. (Like our `average`).
*   **Definiteness:** Each step must be clear, unambiguous, and precise. (No "add them approximately" or "mix until it looks right").
*   **Finiteness:** The algorithm must terminate after a finite number of steps. It can't go on forever.
*   **Effectiveness:** Each step must be basic enough that it can, in principle, be carried out by a person using only pencil and paper. It must be feasible.

These characteristics are fundamental for any algorithm you develop. You should always be able to check if your algorithm meets these criteria. For instance, in an exam, if you're asked to describe an algorithm, making sure you touch upon these properties will show a strong understanding.

### 4. Looking Back: Review and Refine

Pólya’s fourth stage is **Looking Back**. This means reviewing the solution and the method used. Did it work? Was the solution efficient? Could it have been done better? This is where we check our work and refine our approach. This is vital for developing robust solutions and aligns with the critical thinking aspect of **CO4**.

For our average calculation, we might ask:
*   Does it work for negative numbers? Yes.
*   Does it work if all numbers are the same? Yes.
*   What if we needed to average *many* numbers? Would this step-by-step listing of `num1`, `num2`, `num3` still be practical? Probably not. This points towards needing a more generalized approach, perhaps using a loop, which is a concept we'll explore later.

This review stage is also about efficiency. For simple tasks, it might not matter, but for complex problems, how fast an algorithm runs or how much memory it uses can be critical. "Computer Arithmetic Algorithms" by Israel Koren delves into the nuances of algorithm efficiency, which becomes increasingly important as problems scale.

**Putting it all together:**

Developing an algorithm isn't just about writing code. It's a structured process that starts with a deep understanding of the problem. It involves planning, carefully crafting step-by-step instructions, and then reviewing and refining those instructions. This entire process is what we mean by "algorithmic thinking."

Remember this: **The quality of your algorithm is directly proportional to the clarity of your problem understanding and the robustness of your plan.**

By the end of this course, you should be able to confidently take a real-world problem, translate it into a computational model, and then develop and implement an effective algorithm to solve it. This journey begins with mastering the skill of developing an algorithm.

---

### Sample Questions with Answers

**Conceptual Question 1:** What are the key characteristics of a good algorithm? Briefly explain each.

**Answer:** The key characteristics of a good algorithm are:
*   **Input:** It must have zero or more well-defined inputs. These are the data the algorithm operates on.
*   **Output:** It must produce one or more well-defined outputs. This is the result of the algorithm's computation.
*   **Definiteness:** Each step must be clear, unambiguous, and precise, leaving no room for interpretation.
*   **Finiteness:** The algorithm must terminate after a finite number of steps, ensuring it doesn't run indefinitely.
*   **Effectiveness:** Each step must be basic enough to be executable in principle, meaning it can be carried out manually with pencil and paper.

**Conceptual Question 2:** Why is it important to "understand the problem" before devising an algorithm? Relate this to one of the course outcomes.

**Answer:** Understanding the problem is the crucial first step because it ensures that we are solving the *right* problem and that we know exactly what we need to achieve. Without a clear understanding of the inputs, desired outputs, and any constraints, any algorithm we develop will likely be incorrect or incomplete. This directly relates to **Course Outcome 2 (CO2): Articulate a problem before attempting to solve it and prepare a clear and accurate model to represent the problem.** By thoroughly understanding the problem, we can define its boundaries and requirements, which is essential for creating an accurate model and subsequently an effective algorithm.

**Exam-Oriented Question 1:** You are asked to write an algorithm to find the largest number in a list of 5 numbers.
a) List the inputs and outputs for this algorithm.
b) Write the algorithm in pseudocode.
c) Identify which characteristic of a good algorithm is most challenged if the list could contain an infinite number of items.

**Answer:**
a)
*   **Inputs:** A list containing 5 numbers.
*   **Outputs:** The largest number found in the list.

b)
**Algorithm: Find Largest of Five Numbers**
1.  **START**
2.  **INPUT** `number_list` (A list of 5 numbers)
3.  **SET** `largest_number` = `number_list[0]` (Assume the first number is the largest initially)
4.  **FOR EACH** `number` in `number_list` from the second element onwards:
5.      **IF** `number` > `largest_number`:
6.          **SET** `largest_number` = `number`
7.  **OUTPUT** `largest_number`
8.  **END**

c) The characteristic most challenged if the list could contain an infinite number of items is **Finiteness**. An algorithm must terminate after a finite number of steps. If the list is infinite, a simple loop that iterates through all items would never end, thus violating the finiteness property.

**Exam-Oriented Question 2:** Consider the task of making a cup of tea. Explain how this process can be viewed as developing an algorithm, identifying the problem, plan, execution, and review stages.

**Answer:**
*   **Problem Understanding:** The goal is to create a palatable cup of tea. Inputs might include tea leaves/bag, water, a kettle, a mug, sugar, milk. Outputs should be a hot, brewed cup of tea. Constraints could be available ingredients, desired strength, or the need for it to be "drinkable."
*   **Devising a Plan:** The general plan involves heating water, steeping the tea, and adding desired additions. Specific steps could be: 1. Fill kettle with water. 2. Boil water. 3. Place tea bag/leaves in mug. 4. Pour hot water into mug. 5. Steep for 3 minutes. 6. Remove tea bag/leaves. 7. Add sugar and milk if desired.
*   **Carrying Out the Plan (Algorithm Execution):** Following the steps precisely: filling the kettle, boiling, steeping, pouring, and adding additions. Each step is a definite instruction.
*   **Looking Back (Review):** After making the tea, you taste it. Is it too strong? Too weak? Not sweet enough? This feedback allows you to adjust the algorithm for the next time – perhaps steeping for less time, using more water, or adding more sugar. This mirrors refining computational algorithms for better results or efficiency.
