---
title: "Recursive (Inductive) definitions and recurrence relations"
subject: "DISCRETE MATHEMATICS"
module: "Module 3: Induction and Recurrences"
branch: "Computer Science and Engineering"
semester: 2
topicId: "68b45b6f58474a0b135b5fa9"
status: "completed"
scrapedAt: "2026-05-20T16:33:07.930Z"
---
Absolutely! Here are comprehensive study notes for "Recursive (Inductive) definitions and recurrence relations" from Discrete Mathematics Module 3, designed to be engaging, insightful, and exam-focused.

---

## Module 3: Induction and Recurrences - Topic: Recursive (Inductive) Definitions and Recurrence Relations

Hello everyone, and welcome back to our journey through Discrete Mathematics! In this session, we're going to dive into a truly fundamental concept that underpins so much of computer science and mathematics: **recursive definitions** and **recurrence relations**. If you've ever felt like you're playing a game of "what comes next?" with sequences or processes, then you're already on the right track!

Think about how we define things. Sometimes, we give a complete, explicit description. For example, "an even number is an integer divisible by 2." But often, especially in the world of algorithms and structures that build upon themselves, a definition that refers to itself is much more natural. That's where recursion comes in.

### 1. What are Recursive (Inductive) Definitions?

At its heart, a recursive definition provides two things:

*   **A Base Case (or Basis):** This is the starting point. It tells us what the simplest, most fundamental case of our object is. Without a base case, our definition would just go on forever, never actually defining anything concrete!
*   **A Recursive Step (or Inductive Step):** This is the rule that tells us how to build more complex cases from simpler ones. It's like a recipe: "If you know how to make *this*, you can use it to make *that*."

Let's try a simple analogy. Imagine you're defining what a "descendant" is in a family tree.

*   **Base Case:** A person is a descendant of themselves. (This might seem obvious, but it's crucial for the recursion to stop!)
*   **Recursive Step:** A person is a descendant of someone if they are a child of that someone, OR if they are a descendant of someone's child.

See how the definition of "descendant" refers back to "descendant"? This is the essence of recursion.

#### Examples of Recursive Definitions

**Example 1: Factorial Function**

You've probably encountered the factorial function ($n!$) before. Explicitly, $n! = n \times (n-1) \times \dots \times 2 \times 1$. But we can define it recursively:

*   **Base Case:** $0! = 1$.
*   **Recursive Step:** For any integer $n > 0$, $n! = n \times (n-1)!$.

Let's see this in action:
$3! = 3 \times (3-1)! = 3 \times 2!$
Now we need $2!$:
$2! = 2 \times (2-1)! = 2 \times 1!$
And $1!$:
$1! = 1 \times (1-1)! = 1 \times 0!$
And finally, using the base case:
$0! = 1$.
Substituting back: $1! = 1 \times 1 = 1$.
Then, $2! = 2 \times 1 = 2$.
And $3! = 3 \times 2 = 6$.

This recursive definition perfectly captures the idea of building up the factorial. This is a core example often found in texts like **Rosen & Krithivasan (8/e)**.

**Example 2: Fibonacci Numbers**

The Fibonacci sequence is another classic. It's often introduced with the first two terms: $0, 1, 1, 2, 3, 5, 8, \dots$. How do we get from one term to the next? By adding the previous two!

*   **Base Cases:** $f_0 = 0$ and $f_1 = 1$.
*   **Recursive Step:** For any integer $n > 1$, $f_n = f_{n-1} + f_{n-2}$.

Let's calculate a few terms:
$f_2 = f_1 + f_0 = 1 + 0 = 1$
$f_3 = f_2 + f_1 = 1 + 1 = 2$
$f_4 = f_3 + f_2 = 2 + 1 = 3$
$f_5 = f_4 + f_3 = 3 + 2 = 5$
And so on.

This recursive definition is wonderfully elegant and is a prime example of how we can describe sequences. The Fibonacci sequence appears in many natural phenomena, from the branching of trees to the arrangement of leaves on a stem, making it a relatable example.

**Connection to Course Outcomes:**
This directly relates to **CO5: Explain Generating Functions and solve First Order and Second Order Linear Recurrence Relations with Constant Coefficients (Knowledge Level: K3)**. While we're just introducing the definitions here, understanding *how* these sequences are defined recursively is the first step to analyzing them and eventually solving them using techniques like generating functions.

### 2. What are Recurrence Relations?

A **recurrence relation** is an equation that defines a sequence recursively. Essentially, it's a mathematical formula that relates a term in a sequence to its preceding terms. If we're talking about a sequence denoted by $a_0, a_1, a_2, \dots$, a recurrence relation typically looks like:

$a_n = f(a_{n-1}, a_{n-2}, \dots, a_{n-k}, n)$

where $f$ is some function.

So, our factorial and Fibonacci examples are also recurrence relations!

*   $a_n = n \cdot a_{n-1}$ for $n > 0$, with $a_0 = 1$ (for factorial).
*   $a_n = a_{n-1} + a_{n-2}$ for $n > 1$, with $a_0 = 0, a_1 = 1$ (for Fibonacci).

**Why are Recurrence Relations Important?**

They are fundamental for describing:

*   **Algorithms:** Many algorithms break down a problem into smaller subproblems of the same type. The time complexity or the number of operations can often be expressed using recurrence relations.
*   **Data Structures:** The way data is organized and processed in structures like trees and linked lists can be analyzed using recurrence relations.
*   **Combinatorial Problems:** Counting the number of ways to do something, especially when it involves steps that depend on previous steps, often leads to recurrence relations.

Let's think about an algorithm for a moment. Suppose you have a function that sorts a list of $n$ items using a divide-and-conquer approach (like Merge Sort). It splits the list in half, sorts each half recursively, and then merges the sorted halves. If $T(n)$ is the time it takes to sort $n$ items, a simplified recurrence relation for the time complexity might look something like:

$T(n) = 2T(n/2) + O(n)$ (where $O(n)$ is the time to merge)

This tells us that the time to sort $n$ items is twice the time to sort $n/2$ items, plus some work for merging. This is a powerful way to model algorithmic efficiency.

**Connection to Course Outcomes:**
This is the very foundation for **CO5**. Understanding these relations allows us to move towards solving them. For instance, a recurrence like $a_n = 2a_{n-1} + 1$ (with a base case) can be solved to find an explicit formula for $a_n$.

#### Types of Recurrence Relations (Briefly)

While we'll delve deeper into solving them later, it's good to know there are different flavors:

*   **Linear vs. Non-linear:** Linear recurrence relations express the current term as a linear combination of previous terms (e.g., $a_n = 2a_{n-1} + 3a_{n-2}$). Non-linear ones involve products or more complex functions of previous terms (e.g., $a_n = a_{n-1}^2$).
*   **Homogeneous vs. Non-homogeneous:** A linear recurrence relation is homogeneous if there's no term that doesn't involve previous terms of the sequence (e.g., $a_n = 2a_{n-1}$). If there is such a term (like a constant or a function of $n$), it's non-homogeneous (e.g., $a_n = 2a_{n-1} + 3$).
*   **With Constant Coefficients vs. With Variable Coefficients:** Constant coefficients means the multipliers for the previous terms are constants (e.g., $a_n = 3a_{n-1} - 2a_{n-2}$). Variable coefficients means these multipliers can depend on $n$ (e.g., $a_n = n \cdot a_{n-1}$).

**Key takeaway:** Recurrence relations are the *language* for describing processes that build upon themselves.

### 3. Connecting Recursive Definitions and Recurrence Relations

It's important to see that a recursive definition *implies* a recurrence relation.

*   The **recursive step** in a recursive definition *is* the recurrence relation.
*   The **base case(s)** are the initial conditions needed to "start" the recurrence relation.

Without the base cases, the recurrence relation is like an engine with no fuel – it can't produce any output.

Let's consider the sum of the first $n$ positive integers, $S_n = 1 + 2 + \dots + n$.

**Recursive Definition:**
*   **Base Case:** $S_1 = 1$.
*   **Recursive Step:** For $n > 1$, $S_n = S_{n-1} + n$.

**Recurrence Relation:**
$S_n = S_{n-1} + n$ for $n > 1$, with $S_1 = 1$.

To find $S_4$:
$S_4 = S_3 + 4$
$S_3 = S_2 + 3$
$S_2 = S_1 + 2$
$S_1 = 1$ (Base Case)

Substituting back:
$S_2 = 1 + 2 = 3$
$S_3 = 3 + 3 = 6$
$S_4 = 6 + 4 = 10$.

This confirms $S_4 = 1+2+3+4 = 10$.

**Connection to Course Outcomes:**
Again, this ties into **CO5**. This simple example shows how we can calculate sequence terms directly from the relation. The next step is to find a *closed-form* or *explicit* formula, which we'll explore in later parts of the module.

### 4. Examples of Recurrence Relations in Computer Science

Recurrence relations are not just abstract mathematical tools; they are the very fabric of many CS concepts.

**Example 1: Tower of Hanoi**

The Tower of Hanoi is a classic puzzle. You have three rods and a set of disks of different sizes, stacked in decreasing order of size on one rod. The goal is to move the entire stack to another rod, obeying these rules:
1.  Only one disk can be moved at a time.
2.  A disk can be placed only on top of a larger disk.
3.  A disk cannot be placed on top of a smaller disk.

Let $H_n$ be the minimum number of moves required to transfer $n$ disks from one rod to another.

*   **Base Case:** $H_1 = 1$. To move one disk, you just move it directly.
*   **Recursive Step:** To move $n$ disks from source to destination:
    1.  Move the top $n-1$ disks from the source rod to the auxiliary rod (this takes $H_{n-1}$ moves).
    2.  Move the largest disk (the $n^{th}$ disk) from the source rod to the destination rod (this takes 1 move).
    3.  Move the $n-1$ disks from the auxiliary rod to the destination rod, on top of the largest disk (this takes another $H_{n-1}$ moves).

So, the recurrence relation is:
$H_n = H_{n-1} + 1 + H_{n-1} = 2H_{n-1} + 1$ for $n \ge 2$, with $H_1 = 1$.

Let's trace it:
$H_1 = 1$
$H_2 = 2H_1 + 1 = 2(1) + 1 = 3$
$H_3 = 2H_2 + 1 = 2(3) + 1 = 7$
$H_4 = 2H_3 + 1 = 2(7) + 1 = 15$

It looks like $H_n = 2^n - 1$. We'll be able to prove this later using induction! This is a perfect example of a problem where recursion naturally models the solution.

**Connection to Course Outcomes:**
This directly feeds into **CO5**. It's a linear, non-homogeneous recurrence relation with constant coefficients ($a_n = 2a_{n-1} + 1$). Understanding how to derive this relation is crucial for solving it. It also demonstrates how a recursive definition (of the problem's solution) leads to a recurrence relation.

**Example 2: Binary Search**

Binary search is an efficient algorithm for finding an item in a sorted array. If the array has $n$ elements:

*   If the array is empty, the item is not found.
*   Otherwise, compare the item with the middle element.
    *   If they match, you found it!
    *   If the item is smaller, search the left half.
    *   If the item is larger, search the right half.

Let $T(n)$ be the worst-case number of comparisons for binary search on an array of size $n$.

*   **Base Case:** $T(0) = 0$ (or $T(1)=1$ depending on how you count). Let's use $T(1)=1$ for simplicity, meaning one comparison for a single element.
*   **Recursive Step:** In the worst case, we compare the item with the middle element and then recurse on one of the halves. The size of the halves is approximately $n/2$.
    $T(n) = T(\lfloor n/2 \rfloor) + 1$ for $n > 1$.

This recurrence relation beautifully captures the "divide and conquer" nature of binary search. The time complexity grows logarithmically, which is a direct consequence of this recurrence.

**Connection to Course Outcomes:**
This example touches upon algorithm analysis, which is heavily reliant on recurrence relations. While not explicitly asked for in CO5 (which focuses on solving linear recurrences), understanding how to *formulate* these relations is a prerequisite for more advanced analysis and is implicitly supported by the module's theme. It highlights the practical relevance of this topic.

### 5. The Importance of Base Cases - A Word of Caution!

I cannot stress this enough: **base cases are critical**. Without them, your recursive definition is incomplete, and your recurrence relation is unsolvable.

Consider the factorial defined as $n! = n \times (n-1)!$ without a base case. What is $3!$?
$3! = 3 \times 2!$
$2! = 2 \times 1!$
$1! = 1 \times 0!$
$0! = 0 \times (-1)!$
$(-1)! = -1 \times (-2)!$
...and it never stops!

Or, consider a recurrence $a_n = a_{n-1}$ with no base case. What is $a_3$?
$a_3 = a_2 = a_1 = a_0 = a_{-1} = \dots$
You can't determine a value. However, if you had $a_3 = a_2$ with $a_0 = 5$ as a base case (but the relation only applies for $n \ge 1$), you still have a problem because $a_0$ doesn't help you get to $a_3$. You need a base case that's "reachable" by the recurrence.

For $a_n = a_{n-1}$, if you want to find $a_3$, you need either $a_0, a_1,$ or $a_2$ defined. The most common approach is to define $a_0$.

**Exam Tip:** When asked to define something recursively or to write a recurrence relation, always ensure you have the correct and sufficient base cases.

### 6. Conclusion of this Section

We've explored the fundamental concepts of recursive (inductive) definitions and recurrence relations.

*   A **recursive definition** provides a base case and a recursive step to define objects.
*   A **recurrence relation** is an equation that defines a sequence in terms of its previous terms, along with initial conditions (base cases).

These concepts are the bedrock for understanding sequences, algorithms, and many combinatorial problems. They are the essential prelude to solving recurrence relations, which we will tackle next. Remember that every recursive definition has a corresponding recurrence relation and base cases, and vice-versa.

**Key Takeaway:** Think of recursive definitions as a way to build things step-by-step, and recurrence relations as the mathematical recipe that describes that building process.

---

### Sample Questions with Answers

**Q1. Conceptual Question:** Explain the difference between a recursive definition and a recurrence relation.

**Answer:**
A **recursive definition** defines an object (like a number, a set, or a function) by specifying:
1.  **Base Case(s):** The simplest instance(s) of the object.
2.  **Recursive Step:** A rule that shows how to construct new instances from existing ones.

A **recurrence relation** is an equation that defines a sequence where each term is related to the preceding terms. It also requires **initial conditions** (or base cases) to be fully defined.

The **recursive step** of a recursive definition *is* the recurrence relation, and the **base case(s)** of the recursive definition provide the initial conditions for the recurrence relation. They are two sides of the same coin, describing self-referential processes.

**Q2. Example-Based Question:**
Define the sequence $a_n$ recursively, where $a_n$ is the number of regions a plane is divided into by $n$ lines, where no two lines are parallel and no three intersect at a single point.

**Answer:**
Let $L_n$ be the number of regions the plane is divided into by $n$ lines with no two parallel and no three concurrent.

*   **Base Case:** For $n=0$ lines, there is 1 region (the entire plane). So, $L_0 = 1$.
*   **Recursive Step:** Consider adding the $n^{th}$ line to a plane already divided by $n-1$ lines according to the rules. This $n^{th}$ line will intersect each of the previous $n-1$ lines at distinct points. These $n-1$ intersection points divide the $n^{th}$ line into $n$ segments. Each of these segments cuts an existing region into two. Therefore, adding the $n^{th}$ line increases the number of regions by $n$.
    So, for $n \ge 1$, $L_n = L_{n-1} + n$.

Thus, the recursive definition is:
$L_0 = 1$
$L_n = L_{n-1} + n$ for $n \ge 1$.

The recurrence relation is $L_n = L_{n-1} + n$ with the initial condition $L_0 = 1$.

*   $L_0 = 1$
*   $L_1 = L_0 + 1 = 1 + 1 = 2$ (A single line divides the plane into 2 regions)
*   $L_2 = L_1 + 2 = 2 + 2 = 4$ (Two intersecting lines divide the plane into 4 regions)
*   $L_3 = L_2 + 3 = 4 + 3 = 7$ (Three lines, no two parallel, no three concurrent, divide into 7 regions)

This question tests the ability to translate a problem description into a mathematical recurrence, which is a key skill.

**Q3. Exam-Oriented Question:**
Write a recurrence relation for the number of bit strings of length $n$ that do not have consecutive 0s.

**Answer:**
Let $a_n$ be the number of bit strings of length $n$ that do not have consecutive 0s.

Consider a valid bit string of length $n$. It can end in either '1' or '0'.

*   **Case 1: The string ends in '1'.**
    The first $n-1$ bits can form any valid bit string of length $n-1$. So, there are $a_{n-1}$ such strings.
*   **Case 2: The string ends in '0'.**
    If the string ends in '0', the $(n-1)^{th}$ bit *must* be '1' to avoid consecutive 0s. The first $n-2$ bits can form any valid bit string of length $n-2$. So, there are $a_{n-2}$ such strings.

Combining these two disjoint cases, we get the recurrence relation:
$a_n = a_{n-1} + a_{n-2}$ for $n \ge 2$.

Now we need the base cases:
*   For $n=1$: The valid strings are "0" and "1". So, $a_1 = 2$.
*   For $n=2$: The valid strings are "01", "10", "11". So, $a_2 = 3$.
    (Note: "00" is invalid).

Let's check if our recurrence works with these base cases. If we use $a_0=1$ (for the empty string, which vacuously has no consecutive 0s), then $a_2 = a_1 + a_0 = 2 + 1 = 3$, which matches. So, we can use:
$a_0 = 1$ (length 0 string: "")
$a_1 = 2$ (length 1 strings: "0", "1")
$a_n = a_{n-1} + a_{n-2}$ for $n \ge 2$.

This is the Fibonacci sequence shifted! Specifically, $a_n = F_{n+2}$, where $F_k$ is the $k^{th}$ Fibonacci number with $F_0=0, F_1=1$.

This type of question is common in exams, asking you to model a counting problem with a recurrence. Recognizing the Fibonacci sequence is a bonus.

---
That concludes our introduction to recursive definitions and recurrence relations. Keep these ideas in mind as we move forward; they are fundamental building blocks for much of what we'll do in discrete mathematics and computer science!
