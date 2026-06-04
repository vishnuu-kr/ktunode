---
title: "non-homogeneous Solution"
subject: "DISCRETE MATHEMATICAL STRUCTURES"
module: "Module 4: Generating Function: Definitions and Examples"
branch: "Computer Science and Engineering"
semester: 2
topicId: "68b45b6f58474a0b135b601c"
status: "completed"
scrapedAt: "2026-05-20T16:32:38.086Z"
---
Absolutely! Here are comprehensive study notes on the non-homogeneous solution for generating functions in Discrete Mathematical Structures, designed to be engaging, informative, and exam-oriented.

---

## Module 4: Generating Functions - Definitions and Examples

### Topic: Non-Homogeneous Linear Recurrence Relations and Their Solutions Using Generating Functions

Hello everyone, and welcome back to our exploration of Discrete Mathematical Structures! Today, we're diving into a very powerful technique for solving recurrence relations: **Generating Functions**. Specifically, we'll focus on how generating functions help us tackle **non-homogeneous linear recurrence relations**. This is a crucial skill that directly ties into our course objectives, particularly CO4, where we aim to solve these types of relations.

Remember how we've been using generating functions to represent sequences? We've seen how they can simplify the process of finding closed-form expressions for sequences defined by simpler recurrence relations. Now, we're stepping it up a notch to deal with recurrence relations that have an "extra term" – the non-homogeneous part. Think of it like this: a homogeneous relation is like a system that just bounces back to its basic state, whereas a non-homogeneous one has an external influence or a starting "push" that keeps changing things.

#### 1. What are Non-Homogeneous Linear Recurrence Relations?

Before we jump into solving them, let's clearly define what we're talking about.

A **linear recurrence relation of order k** is an equation that expresses a term in a sequence as a linear combination of previous terms. For example, $a_n = c_1 a_{n-1} + c_2 a_{n-2} + \dots + c_k a_{n-k}$ where $c_i$ are constants.

Now, when we introduce a term that *doesn't* depend on previous terms of the sequence, or depends on $n$ in some way, the relation becomes **non-homogeneous**.

A **non-homogeneous linear recurrence relation of order k** with constant coefficients has the form:

$a_n = c_1 a_{n-1} + c_2 a_{n-2} + \dots + c_k a_{n-k} + f(n)$

where $c_1, c_2, \dots, c_k$ are constants, and $f(n)$ is a function of $n$ (or a constant, which is a special case of a function of $n$). This $f(n)$ is our **non-homogeneous term**.

**Think about it:**

*   **Homogeneous example:** The Fibonacci sequence, $F_n = F_{n-1} + F_{n-2}$. Here, $f(n) = 0$.
*   **Non-homogeneous example:** Imagine a bank account where you deposit a fixed amount each month, say $100, in addition to earning interest. If $a_n$ is the amount in the account after $n$ months, and you earn, say, 5% interest per month, the relation might look something like $a_n = 1.05 a_{n-1} + 100$. Here, $f(n) = 100$, which is a constant. This is a non-homogeneous relation. This connects to practical applications, which is important for CO4.

#### 2. The Generating Function Approach to Solving Non-Homogeneous Relations

So, how do we use generating functions to crack these? The core idea remains the same: represent the sequence $a_0, a_1, a_2, \dots$ by its generating function $A(x) = \sum_{n=0}^{\infty} a_n x^n$. Then, we manipulate the recurrence relation to solve for $A(x)$.

The process is quite systematic, and it's a great example of how we can use algebraic manipulation on power series to understand sequences. This technique is particularly effective when the non-homogeneous term $f(n)$ has a recognizable generating function itself.

Let's break down the steps involved:

**Step 1: Define the Generating Function**

Let $A(x) = \sum_{n=0}^{\infty} a_n x^n$ be the ordinary generating function for the sequence $\{a_n\}$.

**Step 2: Rewrite the Recurrence Relation**

Take the given non-homogeneous recurrence relation and multiply each term by $x^n$. Then, sum over all valid values of $n$. This is where the magic starts.

**Step 3: Substitute the Generating Function**

The goal is to express the sums of terms involving $a_n, a_{n-1}, \dots$ in terms of $A(x)$. This often involves shifting indices and using known generating function identities.

**Step 4: Solve for $A(x)$**

Once everything is expressed in terms of $A(x)$, we'll have an equation that we can algebraically solve for $A(x)$.

**Step 5: Decompose $A(x)$ and Find the Coefficients**

This is often the trickiest part. We'll use techniques like partial fraction decomposition and known series expansions (like the geometric series $\frac{1}{1-x} = \sum_{n=0}^{\infty} x^n$) to rewrite $A(x)$ in a form where we can easily identify the coefficients $a_n$. The coefficient of $x^n$ in the resulting power series will be our solution $a_n$.

This process relies heavily on our understanding of generating functions for common sequences, a topic we've already covered. It's a testament to how building blocks in math connect!

#### 3. Illustrative Examples

Let's work through a couple of examples to solidify these steps. These examples are typical of what you might encounter in exams and are crucial for building your problem-solving skills (CO4).

**Example 1: A Simple Non-Homogeneous Relation**

Consider the recurrence relation:
$a_n = 3a_{n-1} + 2$, for $n \ge 1$, with $a_0 = 1$.

Here, the non-homogeneous term is $f(n) = 2$.

*   **Step 1: Generating Function**
    Let $A(x) = \sum_{n=0}^{\infty} a_n x^n = a_0 + a_1 x + a_2 x^2 + \dots$

*   **Step 2: Rewrite the Recurrence**
    The relation is $a_n = 3a_{n-1} + 2$. We need to sum this for $n \ge 1$:
    $\sum_{n=1}^{\infty} a_n x^n = \sum_{n=1}^{\infty} (3a_{n-1} + 2) x^n$
    $\sum_{n=1}^{\infty} a_n x^n = 3 \sum_{n=1}^{\infty} a_{n-1} x^n + 2 \sum_{n=1}^{\infty} x^n$

*   **Step 3: Substitute the Generating Function**
    Let's look at each part of the equation:
    *   The left side is $\sum_{n=1}^{\infty} a_n x^n = A(x) - a_0$.
    *   The first term on the right is $3 \sum_{n=1}^{\infty} a_{n-1} x^n$. If we let $m = n-1$, this becomes $3 \sum_{m=0}^{\infty} a_m x^{m+1} = 3x \sum_{m=0}^{\infty} a_m x^m = 3x A(x)$.
    *   The second term on the right is $2 \sum_{n=1}^{\infty} x^n$. This is a geometric series starting from $x$, so $\sum_{n=1}^{\infty} x^n = x + x^2 + x^3 + \dots = \frac{x}{1-x}$. (Remember, $\sum_{n=0}^{\infty} x^n = \frac{1}{1-x}$).

    Substituting these back into the equation from Step 2:
    $A(x) - a_0 = 3x A(x) + \frac{2x}{1-x}$

*   **Step 4: Solve for $A(x)$**
    We know $a_0 = 1$.
    $A(x) - 1 = 3x A(x) + \frac{2x}{1-x}$
    $A(x) - 3x A(x) = 1 + \frac{2x}{1-x}$
    $A(x)(1 - 3x) = \frac{1(1-x) + 2x}{1-x}$
    $A(x)(1 - 3x) = \frac{1 + x}{1-x}$
    $A(x) = \frac{1+x}{(1-x)(1-3x)}$

*   **Step 5: Decompose $A(x)$ and Find Coefficients**
    Now we need to express $A(x)$ as a sum of simpler fractions whose coefficients we know. We'll use partial fraction decomposition.
    $\frac{1+x}{(1-x)(1-3x)} = \frac{A}{1-x} + \frac{B}{1-3x}$
    $1+x = A(1-3x) + B(1-x)$

    To find $A$, let $x=1$:
    $1+1 = A(1-3(1)) + B(1-1)$
    $2 = A(-2)$
    $A = -1$

    To find $B$, let $x=1/3$:
    $1 + \frac{1}{3} = A(1-3(\frac{1}{3})) + B(1-\frac{1}{3})$
    $\frac{4}{3} = A(0) + B(\frac{2}{3})$
    $\frac{4}{3} = \frac{2}{3} B$
    $B = 2$

    So, $A(x) = \frac{-1}{1-x} + \frac{2}{1-3x}$.

    Now we can recognize these as geometric series:
    $\frac{1}{1-x} = \sum_{n=0}^{\infty} x^n$
    $\frac{1}{1-3x} = \frac{1}{1-(3x)} = \sum_{n=0}^{\infty} (3x)^n = \sum_{n=0}^{\infty} 3^n x^n$

    Therefore,
    $A(x) = - \sum_{n=0}^{\infty} x^n + 2 \sum_{n=0}^{\infty} 3^n x^n$
    $A(x) = \sum_{n=0}^{\infty} (-1)x^n + \sum_{n=0}^{\infty} (2 \cdot 3^n) x^n$
    $A(x) = \sum_{n=0}^{\infty} (2 \cdot 3^n - 1) x^n$

    By comparing the coefficients of $x^n$, we get our solution:
    $a_n = 2 \cdot 3^n - 1$.

    Let's quickly check:
    $a_0 = 2 \cdot 3^0 - 1 = 2 \cdot 1 - 1 = 1$. Correct.
    For $n=1$: $a_1 = 2 \cdot 3^1 - 1 = 6 - 1 = 5$.
    Using the recurrence: $a_1 = 3a_0 + 2 = 3(1) + 2 = 5$. Correct.
    For $n=2$: $a_2 = 2 \cdot 3^2 - 1 = 2 \cdot 9 - 1 = 17$.
    Using the recurrence: $a_2 = 3a_1 + 2 = 3(5) + 2 = 17$. Correct.

    This is a fantastic result and demonstrates the power of the method! This is exactly the kind of detailed problem-solving that will help you master CO4.

**Example 2: A Slightly More Complex Non-Homogeneous Term**

Let's consider:
$a_n = a_{n-1} + 2^n$, for $n \ge 1$, with $a_0 = 1$.

The non-homogeneous term here is $f(n) = 2^n$.

*   **Step 1: Generating Function**
    $A(x) = \sum_{n=0}^{\infty} a_n x^n$.

*   **Step 2: Rewrite the Recurrence**
    Summing $a_n = a_{n-1} + 2^n$ for $n \ge 1$:
    $\sum_{n=1}^{\infty} a_n x^n = \sum_{n=1}^{\infty} a_{n-1} x^n + \sum_{n=1}^{\infty} 2^n x^n$

*   **Step 3: Substitute the Generating Function**
    *   Left side: $\sum_{n=1}^{\infty} a_n x^n = A(x) - a_0$.
    *   First term on right: $\sum_{n=1}^{\infty} a_{n-1} x^n = x \sum_{n=1}^{\infty} a_{n-1} x^{n-1} = x \sum_{m=0}^{\infty} a_m x^m = x A(x)$.
    *   Second term on right: $\sum_{n=1}^{\infty} (2x)^n$. This is a geometric series starting from $(2x)^1$: $\sum_{n=1}^{\infty} (2x)^n = \frac{2x}{1-2x}$. (Remember, $\sum_{n=0}^{\infty} r^n = \frac{1}{1-r}$ for $|r|<1$. So $\sum_{n=1}^{\infty} r^n = \frac{1}{1-r} - 1 = \frac{1 - (1-r)}{1-r} = \frac{r}{1-r}$).

    Substituting these back:
    $A(x) - a_0 = x A(x) + \frac{2x}{1-2x}$

*   **Step 4: Solve for $A(x)$**
    With $a_0 = 1$:
    $A(x) - 1 = x A(x) + \frac{2x}{1-2x}$
    $A(x) - x A(x) = 1 + \frac{2x}{1-2x}$
    $A(x)(1 - x) = \frac{1(1-2x) + 2x}{1-2x}$
    $A(x)(1 - x) = \frac{1}{1-2x}$
    $A(x) = \frac{1}{(1-x)(1-2x)}$

*   **Step 5: Decompose $A(x)$ and Find Coefficients**
    Using partial fractions:
    $\frac{1}{(1-x)(1-2x)} = \frac{A}{1-x} + \frac{B}{1-2x}$
    $1 = A(1-2x) + B(1-x)$

    Let $x=1$:
    $1 = A(1-2) + B(0)$
    $1 = -A \implies A = -1$

    Let $x=1/2$:
    $1 = A(0) + B(1-\frac{1}{2})$
    $1 = B(\frac{1}{2}) \implies B = 2$

    So, $A(x) = \frac{-1}{1-x} + \frac{2}{1-2x}$.

    Now we expand these using geometric series:
    $\frac{1}{1-x} = \sum_{n=0}^{\infty} x^n$
    $\frac{1}{1-2x} = \sum_{n=0}^{\infty} (2x)^n = \sum_{n=0}^{\infty} 2^n x^n$

    Therefore,
    $A(x) = - \sum_{n=0}^{\infty} x^n + 2 \sum_{n=0}^{\infty} 2^n x^n$
    $A(x) = \sum_{n=0}^{\infty} (-1)x^n + \sum_{n=0}^{\infty} (2 \cdot 2^n) x^n$
    $A(x) = \sum_{n=0}^{\infty} (2^{n+1} - 1) x^n$

    The solution is:
    $a_n = 2^{n+1} - 1$.

    Let's check:
    $a_0 = 2^{0+1} - 1 = 2^1 - 1 = 1$. Correct.
    For $n=1$: $a_1 = 2^{1+1} - 1 = 2^2 - 1 = 3$.
    Using recurrence: $a_1 = a_0 + 2^1 = 1 + 2 = 3$. Correct.
    For $n=2$: $a_2 = 2^{2+1} - 1 = 2^3 - 1 = 7$.
    Using recurrence: $a_2 = a_1 + 2^2 = 3 + 4 = 7$. Correct.

    Isn't that neat? The generating function method elegantly handles the changing $2^n$ term.

#### 4. Connection to Course Outcomes

Let's explicitly connect what we've done here to our course outcomes:

*   **CO1 (Logical Reasoning and Proofs):** The entire process of manipulating the recurrence relation, summing series, and using algebraic identities relies on logical reasoning. The partial fraction decomposition and series expansion are formal methods. Proving the correctness of our final solution by checking against the recurrence relation is a form of proof.
*   **CO2 (Counting Principles):** While not directly counting in this specific topic, the underlying generating function theory is deeply rooted in combinatorics. For instance, the coefficients of a generating function *represent* counts of objects. The ability to manipulate these functions for recurrence relations indirectly supports combinatorial problem-solving.
*   **CO3 (Sets, Relations, Functions, Algebraic Systems):** We are dealing with sequences (sets of numbers indexed by integers), recurrence relations (a type of function), and manipulating power series, which are elements of formal power series rings – a type of algebraic structure. Understanding how these concepts interact is key.
*   **CO4 (Solving Recurrence Relations):** This is the most direct link! We have explicitly used generating functions to solve first-order linear non-homogeneous recurrence relations. This demonstrates a core method for solving such relations. The understanding of $f(n)$ and how its generating function integrates into the solution is paramount.

#### 5. Tips for Success and Common Pitfalls

*   **Mastering Generating Functions for Common Series:** Be absolutely comfortable with the generating functions for $1/(1-x)^k$, $1/(1-ax)$, $x^n$, $n$, etc. These are your building blocks. (See Grimaldi or Veerarajan for tables of common generating functions).
*   **Index Shifting:** The most common errors happen when shifting indices in the summations. Be super careful with $\sum_{n=1}^{\infty} a_{n-1} x^n$. It *always* becomes $x A(x)$ (or $x(A(x) - a_0)$ if the sum starts from $n=1$).
*   **Partial Fractions:** Practice your partial fraction decomposition. A correct decomposition is vital for getting the final coefficients right.
*   **Geometric Series starting from $n=1$:** Remember that $\sum_{n=1}^{\infty} r^n = \frac{r}{1-r}$. This is a frequent point of error.
*   **Non-Homogeneous Term:** The choice of how to handle $f(n)$ is crucial. If $f(n)$ is a polynomial, exponential, or product of these, its generating function is usually manageable.

**Remember this:** The generating function approach transforms a problem about sequences and recurrence relations into an algebraic problem about power series. Solving the algebraic problem then gives us the solution to the original sequence problem. It's a beautiful bridge between different mathematical domains.

This method is also a foundational concept for more advanced topics in discrete mathematics and computer science, such as analyzing algorithms. So, understanding it well will serve you greatly!

---

### Sample Questions and Answers

**Conceptual Question 1:** What is the fundamental difference between a homogeneous and a non-homogeneous linear recurrence relation?

**Answer:** A homogeneous linear recurrence relation expresses a term as a linear combination of previous terms where the "forcing" or "non-homogeneous" term is zero. In contrast, a non-homogeneous linear recurrence relation includes an additional term, $f(n)$, that depends on $n$ (or is a constant), which is not part of the linear combination of previous sequence terms. This $f(n)$ term is what "drives" or "perturbs" the system.

**Conceptual Question 2:** Why is partial fraction decomposition essential when using generating functions to solve recurrence relations?

**Answer:** Partial fraction decomposition is essential because it breaks down a complex rational function (the generating function $A(x)$ we obtain) into a sum of simpler rational functions, typically of the form $\frac{c}{1-ax}$. These simpler forms are directly recognizable as the generating functions of known sequences (like geometric progressions). By decomposing $A(x)$ into these basic building blocks, we can then identify the coefficient of $x^n$ for each part, and thus determine the formula for $a_n$.

**Exam-Oriented Question 1:** Solve the recurrence relation $a_n = 2a_{n-1} + n$ for $n \ge 1$, with $a_0 = 1$, using generating functions.

**Solution:**
Let $A(x) = \sum_{n=0}^{\infty} a_n x^n$. The recurrence is $a_n - 2a_{n-1} = n$.
Summing from $n=1$ to $\infty$:
$\sum_{n=1}^{\infty} a_n x^n - 2 \sum_{n=1}^{\infty} a_{n-1} x^n = \sum_{n=1}^{\infty} n x^n$

*   $\sum_{n=1}^{\infty} a_n x^n = A(x) - a_0 = A(x) - 1$.
*   $\sum_{n=1}^{\infty} a_{n-1} x^n = x \sum_{n=1}^{\infty} a_{n-1} x^{n-1} = x \sum_{k=0}^{\infty} a_k x^k = x A(x)$.
*   The generating function for $n$ is $\sum_{n=0}^{\infty} n x^n = \frac{x}{(1-x)^2}$. Since our sum starts from $n=1$, and for $n=0$ the term is $0 \cdot x^0 = 0$, this is fine. $\sum_{n=1}^{\infty} n x^n = \frac{x}{(1-x)^2}$.

Substituting these into the equation:
$(A(x) - 1) - 2x A(x) = \frac{x}{(1-x)^2}$
$A(x)(1 - 2x) = 1 + \frac{x}{(1-x)^2}$
$A(x)(1 - 2x) = \frac{(1-x)^2 + x}{(1-x)^2} = \frac{1 - 2x + x^2 + x}{(1-x)^2} = \frac{1 - x + x^2}{(1-x)^2}$
$A(x) = \frac{1 - x + x^2}{(1-x)^2 (1-2x)}$

Now, partial fractions for $A(x)$:
$\frac{1 - x + x^2}{(1-x)^2 (1-2x)} = \frac{A}{1-x} + \frac{B}{(1-x)^2} + \frac{C}{1-2x}$
$1 - x + x^2 = A(1-x)(1-2x) + B(1-2x) + C(1-x)^2$
$1 - x + x^2 = A(1 - 3x + 2x^2) + B(1-2x) + C(1 - 2x + x^2)$

Let $x=1$: $1 - 1 + 1 = A(0) + B(1-2) + C(0) \implies 1 = -B \implies B = -1$.
Let $x=1/2$: $1 - \frac{1}{2} + \frac{1}{4} = A(0) + B(0) + C(1-\frac{1}{2})^2 \implies \frac{3}{4} = C(\frac{1}{4}) \implies C = 3$.
Let $x=0$: $1 = A(1) + B(1) + C(1) \implies 1 = A + B + C \implies 1 = A - 1 + 3 \implies 1 = A + 2 \implies A = -1$.

So, $A(x) = \frac{-1}{1-x} - \frac{1}{(1-x)^2} + \frac{3}{1-2x}$.

Now we find the coefficients:
*   $\frac{-1}{1-x} = -1 \sum_{n=0}^{\infty} x^n = \sum_{n=0}^{\infty} (-1)x^n$. Coefficient of $x^n$ is $-1$.
*   $\frac{1}{(1-x)^2} = \sum_{n=0}^{\infty} (n+1)x^n$. So, $\frac{-1}{(1-x)^2} = \sum_{n=0}^{\infty} -(n+1)x^n$. Coefficient of $x^n$ is $-(n+1)$.
*   $\frac{3}{1-2x} = 3 \sum_{n=0}^{\infty} (2x)^n = \sum_{n=0}^{\infty} 3 \cdot 2^n x^n$. Coefficient of $x^n$ is $3 \cdot 2^n$.

Combining the coefficients for $x^n$:
$a_n = -1 - (n+1) + 3 \cdot 2^n$
$a_n = -1 - n - 1 + 3 \cdot 2^n$
$a_n = 3 \cdot 2^n - n - 2$.

Let's check:
$a_0 = 3 \cdot 2^0 - 0 - 2 = 3 - 2 = 1$. Correct.
$a_1 = 3 \cdot 2^1 - 1 - 2 = 6 - 3 = 3$.
Using recurrence: $a_1 = 2a_0 + 1 = 2(1) + 1 = 3$. Correct.
$a_2 = 3 \cdot 2^2 - 2 - 2 = 12 - 4 = 8$.
Using recurrence: $a_2 = 2a_1 + 2 = 2(3) + 2 = 8$. Correct.

The solution is $a_n = 3 \cdot 2^n - n - 2$.

---

I hope these notes provide a clear and comprehensive understanding of solving non-homogeneous recurrence relations using generating functions. Keep practicing, and don't hesitate to refer back to your textbooks like Grimaldi and Veerarajan for more examples and detailed explanations. Happy studying!
