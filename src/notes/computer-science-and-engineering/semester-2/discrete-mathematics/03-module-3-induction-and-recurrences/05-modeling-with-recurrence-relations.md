---
title: "Modeling with Recurrence Relations"
subject: "DISCRETE MATHEMATICS"
module: "Module 3: Induction and Recurrences"
branch: "Computer Science and Engineering"
semester: 2
topicId: "68b45b6f58474a0b135b5faa"
status: "completed"
scrapedAt: "2026-05-20T16:33:08.643Z"
---
## Module 3: Induction and Recurrences - Modeling with Recurrence Relations

Welcome, everyone! Today, we're diving into a fascinating area of discrete mathematics: **Recurrence Relations**. Think of them as powerful tools that allow us to describe sequences of numbers, often arising from real-world problems, in a very structured way. We'll see how these seemingly abstract mathematical concepts have practical applications, connecting directly with several of our course objectives, especially in counting and understanding how things grow or change over time.

**Connecting to Our Course Outcomes:**

As we explore recurrence relations, keep these in mind:

*   **CO2 (Counting Problems):** Many counting problems, especially those involving sequences of operations or configurations, can be beautifully modeled using recurrence relations. Think about how many ways you can climb stairs, or how many valid sequences of operations exist – these often translate into recurrence relations.
*   **CO5 (Generating Functions and Recurrence Relations):** This is our primary link. We'll not only learn to *define* recurrence relations but also how to *solve* them, often using techniques like generating functions, which we'll touch upon in future sessions and is explicitly part of this outcome. Understanding the modeling part is crucial for applying those solving techniques effectively.

Let's get started by understanding what a recurrence relation actually is.

### What is a Recurrence Relation?

At its heart, a recurrence relation is an equation that defines a sequence where each term is expressed as a function of its preceding terms. It's like a recipe: to make the next dish, you need to know the ingredients from the previous dishes.

Think about a sequence like Fibonacci numbers: 0, 1, 1, 2, 3, 5, 8, ...
How is each number related to the ones before it? Well, each number is the sum of the two preceding ones.
So, we can write this as:
$F_n = F_{n-1} + F_{n-2}$ for $n \geq 2$.

Here, $F_n$ is the $n$-th term in the sequence, and it's defined in terms of $F_{n-1}$ and $F_{n-2}$. This equation, along with **initial conditions** (or **base cases**), which tell us where to start, forms a complete definition of the sequence. For Fibonacci, our initial conditions are $F_0 = 0$ and $F_1 = 1$.

*   **Key Concept: Recurrence Relation:** An equation that defines a sequence in terms of previous terms.
*   **Key Concept: Initial Conditions/Base Cases:** The starting values of the sequence that anchor the recurrence. Without them, the relation is like a car with an engine but no fuel – it can't go anywhere!

**Why are they useful?**

Recurrence relations are incredibly powerful for **modeling**. They allow us to capture the dynamic behavior of systems where the state at one step depends on the state at previous steps. This is incredibly common in computer science and mathematics.

### Modeling with Recurrence Relations: Bringing Concepts to Life

Let's explore how we can translate real-world scenarios into these mathematical equations. This is where CO2 and CO5 really come into play – we're using mathematical tools to solve counting and sequential problems.

#### 1. Counting Problems: The Stair Climbing Analogy

Imagine you are climbing a staircase with $n$ steps. You can take either one step or two steps at a time. How many different ways can you climb the staircase?

Let $W_n$ be the number of ways to climb $n$ steps.

*   **Base Cases:**
    *   For 1 step ($n=1$), there's only one way: take one step. So, $W_1 = 1$.
    *   For 2 steps ($n=2$), you can take two single steps (1, 1) or one double step (2). So, $W_2 = 2$.

*   **Recursive Step:** Now, consider climbing $n$ steps. What was your *last* step?
    *   You could have taken a single step from step $n-1$. The number of ways to reach step $n-1$ is $W_{n-1}$. From there, you take one more step to reach step $n$.
    *   Or, you could have taken a double step from step $n-2$. The number of ways to reach step $n-2$ is $W_{n-2}$. From there, you take two steps to reach step $n$.

Since these are the only two possibilities for your last move, and they are mutually exclusive (you can't take a single step *and* a double step as your very last move), the total number of ways to reach step $n$ is the sum of the ways to reach $n-1$ and the ways to reach $n-2$.

Therefore, the recurrence relation is:
$W_n = W_{n-1} + W_{n-2}$ for $n \geq 3$.

Look familiar? This is the Fibonacci sequence again, but with slightly different initial conditions! If we start with $W_1=1$ and $W_2=2$, our sequence will be 1, 2, 3, 5, 8, ... (These are actually Fibonacci numbers shifted: $W_n = F_{n+1}$).

**Why is this a good example?** It's relatable, and it clearly shows how a problem involving choices and sequences of actions can be broken down into smaller, similar subproblems, leading directly to a recurrence relation. This is a classic example found in many introductory discrete mathematics texts, including Rosen's "Discrete Mathematics and Its Applications" (8/e), often used to illustrate the power of this modeling technique.

#### 2. Growth of Populations (Simplified)

Let's consider a simplified model of population growth. Suppose a population of rabbits doubles every month, but each month, 5 rabbits die due to a disease.

Let $P_n$ be the population of rabbits at the end of month $n$.

*   **Base Case:** Let's say we start with 10 rabbits at the beginning (end of month 0). So, $P_0 = 10$.

*   **Recursive Step:** At the end of month $n$, the population from the previous month ($P_{n-1}$) doubles. So we have $2 \times P_{n-1}$ rabbits. However, 5 rabbits die.
    Thus, the recurrence relation is:
    $P_n = 2 P_{n-1} - 5$ for $n \geq 1$.

Let's calculate a few terms:
*   $P_0 = 10$
*   $P_1 = 2 \times P_0 - 5 = 2 \times 10 - 5 = 20 - 5 = 15$
*   $P_2 = 2 \times P_1 - 5 = 2 \times 15 - 5 = 30 - 5 = 25$
*   $P_3 = 2 \times P_2 - 5 = 2 \times 25 - 5 = 50 - 5 = 45$

This recurrence relation models a dynamic system where the next state is determined by the previous state with some constant modification. This is a common pattern in modeling various phenomena, from compound interest to simple iterative algorithms.

#### 3. Tower of Hanoi Puzzle

This is a classic puzzle and a very elegant example of recurrence. The puzzle involves moving a stack of disks of different sizes from a source peg to a destination peg, using an auxiliary peg. The rules are:
1.  Only one disk can be moved at a time.
2.  A larger disk cannot be placed on top of a smaller disk.
3.  All disks must be moved.

Let $M_n$ be the minimum number of moves required to transfer $n$ disks from the source peg to the destination peg.

*   **Base Case:** For 1 disk ($n=1$), it takes just 1 move. So, $M_1 = 1$.

*   **Recursive Step:** To move $n$ disks from source to destination:
    1.  Move the top $n-1$ disks from the source peg to the auxiliary peg, using the destination peg as the auxiliary. This takes $M_{n-1}$ moves.
    2.  Move the largest disk (the $n$-th disk) from the source peg to the destination peg. This takes 1 move.
    3.  Move the $n-1$ disks from the auxiliary peg to the destination peg, using the source peg as the auxiliary. This again takes $M_{n-1}$ moves.

So, the total number of moves is $M_n = M_{n-1} + 1 + M_{n-1}$.
This simplifies to:
$M_n = 2 M_{n-1} + 1$ for $n \geq 2$.

Let's compute the first few terms:
*   $M_1 = 1$
*   $M_2 = 2 \times M_1 + 1 = 2 \times 1 + 1 = 3$
*   $M_3 = 2 \times M_2 + 1 = 2 \times 3 + 1 = 7$
*   $M_4 = 2 \times M_3 + 1 = 2 \times 7 + 1 = 15$

It seems like $M_n = 2^n - 1$. We can prove this using induction later, but the key here is understanding how the problem's structure naturally leads to a recursive definition. This puzzle is a prime example of how breaking down a problem into smaller, identical subproblems is the essence of recursion and leads to recurrence relations. This is a concept you'll find extensively discussed in texts like "Schaum's Outline of Discrete Mathematics" by Lipson and Lipschutz, which often uses such puzzles to build intuition.

### Types of Recurrence Relations

Recurrence relations can be classified in several ways. Understanding these classifications helps us know what tools we might use to solve them.

#### 1. Linear vs. Non-linear

*   **Linear Recurrence Relation:** A recurrence relation is linear if the terms in the relation are linear combinations of preceding terms. This means no terms are multiplied together, and no functions (like sine, log, etc.) are applied to the terms themselves.
    *   *Example:* $a_n = 2a_{n-1} + 3a_{n-2}$ is linear.
    *   *Example:* $a_n = a_{n-1}^2 + a_{n-2}$ is non-linear because of the $a_{n-1}^2$ term.

#### 2. Homogeneous vs. Non-homogeneous

*   **Homogeneous Linear Recurrence Relation:** A linear recurrence relation where there is no term that is a constant or depends only on $n$ (i.e., no "forcing" term).
    *   *Example:* $a_n = 2a_{n-1} + 3a_{n-2}$ is homogeneous.
    *   *Example:* $a_n = 2a_{n-1} + 5$ is non-homogeneous because of the '+ 5' term. The '5' is a constant that doesn't depend on previous terms of the sequence.

*   **Non-homogeneous Linear Recurrence Relation:** A linear recurrence relation that includes a term depending only on $n$ (or a constant). This term is often called the "non-homogeneous part" or "forcing function."
    *   *Example:* $a_n = 3a_{n-1} + n^2$ is non-homogeneous.

#### 3. Constant Coefficients vs. Variable Coefficients

*   **Constant Coefficients:** The coefficients of the preceding terms are constants.
    *   *Example:* $a_n = 5a_{n-1} - 6a_{n-2}$ has constant coefficients (5 and -6).
    *   *Example:* $n a_n = a_{n-1}$ has variable coefficients (the coefficient of $a_n$ is $n$).

Most of the techniques we will learn in this module, especially those related to CO5, focus on **linear, homogeneous recurrence relations with constant coefficients**, and **linear, non-homogeneous recurrence relations with constant coefficients**. These are often the most encountered and have well-defined methods for solving them.

### Building Recurrence Relations: A General Approach

When you encounter a problem and want to model it with a recurrence relation, here’s a good strategy to follow:

1.  **Understand the Problem:** What is changing? What are the states? How does one state lead to the next?
2.  **Define the Sequence:** Assign a variable (like $a_n, S_n, C_n$) to represent the quantity you are trying to count or model at step $n$.
3.  **Identify Base Cases:** Determine the initial values for small values of $n$ (usually $n=0$ or $n=1$, and possibly $n=2$). These are essential to start the recurrence.
4.  **Find the Recursive Step:** Express the term $a_n$ in terms of previous terms ($a_{n-1}, a_{n-2}$, etc.). This is the crucial part where you break down the problem for step $n$ into subproblems of steps $n-1, n-2, \ldots$.
5.  **Check the Relation:** Test your recurrence relation with your base cases to see if it generates the correct sequence for small values of $n$.

**Example: Counting Bit Strings without Consecutive 0s**

Let's try this on a slightly more complex counting problem. How many bit strings of length $n$ do not have consecutive 0s?

1.  **Problem:** Count bit strings of length $n$ with no '00'.
2.  **Define Sequence:** Let $a_n$ be the number of such bit strings of length $n$.
3.  **Base Cases:**
    *   $n=1$: Bit strings are "0", "1". Both are valid. So, $a_1 = 2$.
    *   $n=2$: Bit strings are "00", "01", "10", "11". Only "01", "10", "11" are valid. So, $a_2 = 3$.
4.  **Recursive Step:** Consider a valid bit string of length $n$. What can the last bit be?
    *   **Case 1: The string ends with '1'.** If the string ends with '1', then the first $n-1$ bits can form any valid bit string of length $n-1$ without consecutive 0s. The number of such strings is $a_{n-1}$. Adding a '1' at the end doesn't create consecutive 0s.
    *   **Case 2: The string ends with '0'.** If the string ends with '0', then to avoid consecutive 0s, the $(n-1)$-th bit *must* be '1'. So, the string must look like `...10`. The first $n-2$ bits must form a valid bit string of length $n-2$ without consecutive 0s. The number of such strings is $a_{n-2}$.
    Since these two cases are exhaustive and mutually exclusive, the total number of valid strings of length $n$ is the sum of strings from Case 1 and Case 2.

    Therefore, the recurrence relation is:
    $a_n = a_{n-1} + a_{n-2}$ for $n \geq 3$.

    Let's check:
    *   $a_1 = 2$
    *   $a_2 = 3$
    *   $a_3$: Using the recurrence, $a_3 = a_2 + a_1 = 3 + 2 = 5$.
        Let's list them for $n=3$: "010", "011", "101", "110", "111". Yes, there are 5.
    *   $a_4$: Using the recurrence, $a_4 = a_3 + a_2 = 5 + 3 = 8$.
        Valid strings: "0101", "0110", "0111", "1010", "1011", "1101", "1110", "1111". (8 strings).

This sequence, 2, 3, 5, 8, ..., is again related to Fibonacci numbers! Specifically, $a_n = F_{n+2}$. This shows how different counting problems can converge to similar mathematical structures. This is a good illustration of how understanding the underlying recursive structure of a problem is key, which is very much in line with what we aim for in CO2.

### What's Next?

Modeling is the first, and arguably the most creative, step. The next crucial step, which we will delve into in subsequent sessions, is **solving** these recurrence relations. Knowing how to derive $a_n = 2a_{n-1} + 3a_{n-2}$ is great, but being able to find a closed-form expression (like $a_n = C_1 \cdot 3^n + C_2 \cdot (-1)^n$) is what allows us to quickly calculate $a_{100}$ without computing all intermediate terms. This directly ties into CO5.

**Remember this:** The power of recurrence relations lies in their ability to decompose complex problems into simpler, self-similar subproblems. Mastering the art of translating problems into these relations is a fundamental skill in discrete mathematics.

---

### Sample Questions and Answers

Here are a few questions to test your understanding of modeling with recurrence relations.

**Question 1 (Conceptual):**
What are the two essential components needed to fully define a sequence using a recurrence relation? Explain why both are necessary.

**Answer 1:**
The two essential components are:
1.  **The Recurrence Relation itself:** This is the formula that defines a term in the sequence as a function of preceding terms (e.g., $a_n = f(a_{n-1}, a_{n-2}, \ldots)$). It describes the *rule* of progression.
2.  **Initial Conditions (or Base Cases):** These are the explicit values of one or more of the first terms of the sequence (e.g., $a_0 = x, a_1 = y$).

They are both necessary because the recurrence relation alone defines an infinite family of sequences (one for each possible set of starting values). The initial conditions "pin down" which specific sequence we are interested in. Without base cases, the recurrence relation can't be computed; without the recurrence relation, the base cases don't tell us how the sequence continues.

**Question 2 (Modeling):**
A bank account starts with $1000. Each month, the bank adds 5% interest to the current balance, and then $50 is withdrawn for a monthly fee. Model this situation with a recurrence relation.

**Answer 2:**
Let $B_n$ be the balance in the bank account at the end of month $n$.

*   **Initial Condition:** The account starts with $1000. So, $B_0 = 1000$.

*   **Recurrence Relation:** At the end of month $n$, the balance from the previous month ($B_{n-1}$) first accrues 5% interest. This means the balance becomes $B_{n-1} + 0.05 \times B_{n-1} = 1.05 \times B_{n-1}$. After the interest is added, $50 is withdrawn.
    Therefore, the balance at the end of month $n$ is:
    $B_n = 1.05 B_{n-1} - 50$, for $n \geq 1$.

This is a linear, non-homogeneous recurrence relation with constant coefficients.

**Question 3 (Connections to Counting - CO2):**
Consider a rectangular grid of $m \times n$ squares. A path is made by starting at the top-left corner and moving only right or down, until you reach the bottom-right corner. How many such paths are there? Model this problem using a recurrence relation if you were only allowed to move right or down. (Hint: This is related to binomial coefficients, but try to model it recursively first).

**Answer 3:**
Let $P(m, n)$ be the number of paths from the top-left corner to the square at row $m$ and column $n$ of an $m \times n$ grid (using 0-based indexing for simplicity, so the grid goes from $(0,0)$ to $(m-1, n-1)$). We want to find $P(m, n)$.

*   **Base Cases:**
    *   To reach any square in the first row (row 0), you can only move right. So, $P(0, j) = 1$ for all $j \geq 0$.
    *   To reach any square in the first column (column 0), you can only move down. So, $P(i, 0) = 1$ for all $i \geq 0$.

*   **Recurrence Relation:** To reach the square $(i, j)$, the last move must have come from either:
    *   The square $(i-1, j)$ by moving down.
    *   The square $(i, j-1)$ by moving right.

    Since these are the only two possibilities for the last move, and they are mutually exclusive, the total number of paths to $(i, j)$ is the sum of the paths to $(i-1, j)$ and the paths to $(i, j-1)$.
    So, the recurrence relation is:
    $P(i, j) = P(i-1, j) + P(i, j-1)$ for $i > 0$ and $j > 0$.

This recurrence, with the base cases for the first row and first column, is precisely how Pascal's Triangle is constructed, and its solution is known to be the binomial coefficient $\binom{i+j}{i}$ or $\binom{i+j}{j}$. This illustrates how a combinatorial problem can be naturally described by a recurrence relation, directly linking to CO2.
