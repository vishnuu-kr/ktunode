---
title: "Recurrence Relations: First-order linear recurrence relations with constant coefficients – homogeneous, non-homogeneous Solution"
subject: "DISCRETE MATHEMATICAL STRUCTURES"
module: "Module 4: Generating Function: Definitions and Examples"
branch: "Computer Science and Engineering"
semester: 2
topicId: "68b45b6f58474a0b135b6019"
status: "completed"
scrapedAt: "2026-05-20T16:32:35.958Z"
---
# DISCRETE MATHEMATICAL STRUCTURES: Module 4 - Generating Functions

## Topic: Recurrence Relations: First-Order Linear Recurrence Relations with Constant Coefficients – Homogeneous and Non-Homogeneous Solutions

Welcome, everyone! In this session, we're diving into a fundamental concept in Discrete Mathematics that's crucial for understanding many computational processes and combinatorial problems: **Recurrence Relations**. Specifically, we'll be focusing on a particular type: **first-order linear recurrence relations with constant coefficients**. This might sound a bit technical, but trust me, once we break it down, you'll see how elegantly it describes sequences and how we can find precise formulas for them. This topic is key to achieving **Course Outcome 4 (CO4)**, where we aim to explain methods for solving recurrence relations.

### What Exactly is a Recurrence Relation?

Think about sequences. You're probably familiar with sequences like the Fibonacci sequence (0, 1, 1, 2, 3, 5, 8, ...), where each term is the sum of the two preceding ones. Or an arithmetic progression (2, 4, 6, 8, ...) where you add a constant difference. A recurrence relation is simply a mathematical rule that defines a sequence where each term is expressed as a function of its **preceding terms**.

Imagine you're saving money. Let $S_n$ be the amount of money you have after $n$ months. If you start with $100 and save $20 each month, you can describe your savings with a recurrence relation:

$S_n = S_{n-1} + 20$ for $n \ge 1$

And to make this relation complete, we need a starting point, an **initial condition**:

$S_0 = 100$

This simple example tells us that your savings after $n$ months depend on your savings from the previous month ($S_{n-1}$) plus an additional $20. Without the initial condition ($S_0 = 100$), this rule could describe infinitely many savings plans!

So, a recurrence relation, in essence, is an equation that recursively defines a sequence.

### First-Order Linear Recurrence Relations with Constant Coefficients

Now, let's narrow our focus. We're interested in first-order recurrence relations. "First-order" means that each term in the sequence depends only on the **immediately preceding term**.

"Linear" means that the preceding term appears in its first power – no squares, no cubes, no products of terms like $a_n * a_{n-1}$.

And "constant coefficients" means that the numbers multiplying the terms in the relation are constants, not dependent on $n$.

So, a general form of such a relation looks like this:

$a_n = c \cdot a_{n-1} + d$ for $n \ge 1$

Here:
*   $a_n$ is the current term.
*   $a_{n-1}$ is the preceding term.
*   $c$ is the constant coefficient for the preceding term.
*   $d$ is a constant term (or sometimes it can also be a function of $n$, but for "constant coefficients" we're dealing with $d$ being a constant).

This structure is quite common. For instance, consider a population model. If a population of bacteria doubles every hour ($c=2$) and a constant influx of 5 new bacteria is introduced every hour ($d=5$), and we start with 10 bacteria ($a_0 = 10$), the recurrence relation would be:

$a_n = 2a_{n-1} + 5$, with $a_0 = 10$.

This form, $a_n = c \cdot a_{n-1} + d$, is the bedrock of our discussion.

### Two Main Flavors: Homogeneous and Non-Homogeneous

Within this general form, we can categorize recurrence relations into two main types based on the presence of that constant term $d$.

#### 1. Homogeneous First-Order Linear Recurrence Relations with Constant Coefficients

These are the simpler ones. They have the form:

$a_n = c \cdot a_{n-1}$ for $n \ge 1$

Here, the next term is simply a constant multiple of the previous term. No extra additive constant is involved.

**Think of it like this:** Imagine you have a special plant that grows by a factor of 1.5 every week (that's our $c=1.5$). If you start with a plant that's 10 cm tall ($a_0 = 10$), how tall will it be after $n$ weeks?

$a_n = 1.5 \cdot a_{n-1}$
$a_0 = 10$

Let's trace it out:
*   $a_0 = 10$
*   $a_1 = 1.5 \cdot a_0 = 1.5 \cdot 10 = 15$
*   $a_2 = 1.5 \cdot a_1 = 1.5 \cdot 15 = 22.5$
*   $a_3 = 1.5 \cdot a_2 = 1.5 \cdot 22.5 = 33.75$

Notice a pattern here?
$a_n = c \cdot a_{n-1} = c \cdot (c \cdot a_{n-2}) = c^2 \cdot a_{n-2} = c^2 \cdot (c \cdot a_{n-3}) = c^3 \cdot a_{n-3} = \dots$

If we continue this $n$ times, we get:

$a_n = c^n \cdot a_0$

This is the general solution for a homogeneous first-order linear recurrence relation with a constant coefficient! It's a beautiful, clean formula.

**Key takeaway for homogeneous relations:** The solution is an exponential form, directly related to the initial value and the constant multiplier. This aligns with **CO4** as it's a method for solving recurrence relations.

**Example (from Grimaldi):**
Consider the recurrence relation $a_n = 5a_{n-1}$ for $n \ge 1$, with $a_0 = 3$.
Using our formula: $a_n = 5^n \cdot a_0 = 5^n \cdot 3 = 3 \cdot 5^n$.
So, $a_0 = 3 \cdot 5^0 = 3 \cdot 1 = 3$.
$a_1 = 3 \cdot 5^1 = 15$. (Checking: $a_1 = 5a_0 = 5 \cdot 3 = 15$. Correct!)
$a_2 = 3 \cdot 5^2 = 3 \cdot 25 = 75$. (Checking: $a_2 = 5a_1 = 5 \cdot 15 = 75$. Correct!)

The solution is $a_n = 3 \cdot 5^n$.

#### 2. Non-Homogeneous First-Order Linear Recurrence Relations with Constant Coefficients

Now, what happens when we have that extra term, $d$?

$a_n = c \cdot a_{n-1} + d$ for $n \ge 1$

This is called a "non-homogeneous" relation because of the presence of the constant term $d$ (if $d$ were a function of $n$, say $f(n)$, then it would be $a_n = c \cdot a_{n-1} + f(n)$ and still non-homogeneous).

Let's revisit our savings example: $S_n = S_{n-1} + 20$, with $S_0 = 100$.
Here, $c=1$ and $d=20$.

Let's trace it:
*   $S_0 = 100$
*   $S_1 = S_0 + 20 = 100 + 20 = 120$
*   $S_2 = S_1 + 20 = 120 + 20 = 140$
*   $S_3 = S_2 + 20 = 140 + 20 = 160$

We can see the pattern here is an arithmetic progression: $100, 120, 140, 160, \dots$. The general form for an arithmetic progression is $a_n = a_0 + n \cdot (\text{common difference})$. In our case, the common difference is $d=20$. So, $S_n = 100 + n \cdot 20$.

But how do we derive this systematically for any $c$ and $d$? The general approach for solving non-homogeneous linear recurrence relations is often based on the **principle of superposition**. This means the general solution ($a_n$) is the sum of two parts:

$a_n = a_n^{(h)} + a_n^{(p)}$

where:
*   $a_n^{(h)}$ is the **homogeneous solution** (the solution to the same relation without the non-homogeneous term, i.e., $a_n = c \cdot a_{n-1}$).
*   $a_n^{(p)}$ is a **particular solution** (any specific solution that satisfies the original non-homogeneous relation).

This is a powerful concept in mathematics, often encountered in differential equations as well. For **CO4**, understanding this decomposition is crucial.

#### Finding the Homogeneous Solution ($a_n^{(h)}$)

We already know how to do this! For $a_n = c \cdot a_{n-1}$, the homogeneous solution is:

$a_n^{(h)} = A \cdot c^n$

where $A$ is a constant that we'll determine using the initial conditions.

#### Finding the Particular Solution ($a_n^{(p)}$)

This is where the "guess and check" or "method of undetermined coefficients" comes in. We make an educated guess about the form of the particular solution based on the non-homogeneous term $d$.

**Case 1: If $d$ is a non-zero constant.**
We guess that the particular solution is also a constant, say $a_n^{(p)} = K$.
Substitute this into the non-homogeneous recurrence relation:
$K = c \cdot K + d$
$K - cK = d$
$K(1 - c) = d$

If $c \ne 1$:
$K = \frac{d}{1-c}$

So, if $c \ne 1$, a particular solution is $a_n^{(p)} = \frac{d}{1-c}$.

**Case 2: If $d$ is a non-zero constant AND $c = 1$.**
This is our savings example ($S_n = S_{n-1} + 20$, where $c=1, d=20$).
If we try $a_n^{(p)} = K$, we get $K = 1 \cdot K + d$, which simplifies to $0 = d$. This only works if $d=0$, but we assumed $d$ is non-zero. So, a constant guess doesn't work here.

When $c=1$, the homogeneous part is $a_n^{(h)} = A \cdot 1^n = A$. The general solution would be $a_n = A + a_n^{(p)}$. If $a_n^{(p)}$ is a constant $K$, then $a_n = A+K$, which is still a constant. But our savings sequence is clearly not constant!

So, when $c=1$ and $d$ is a non-zero constant, we must guess a particular solution that is *linear* in $n$. Let's try $a_n^{(p)} = Kn$.
Substitute into $a_n = a_{n-1} + d$:
$Kn = K(n-1) + d$
$Kn = Kn - K + d$
$0 = -K + d$
$K = d$

So, if $c=1$ and $d \ne 0$, a particular solution is $a_n^{(p)} = dn$.

**Case 3: If $d$ is zero.**
If $d=0$, the relation is $a_n = c \cdot a_{n-1}$. This is the homogeneous case we already solved, where $a_n^{(h)} = a_0 \cdot c^n$. There's no non-homogeneous term, so no separate particular solution is needed; the homogeneous solution is the complete solution.

#### Combining for the General Solution

Now, let's put it all together for $a_n = c \cdot a_{n-1} + d$:

**Scenario A: $c \ne 1$**
*   Homogeneous solution: $a_n^{(h)} = A \cdot c^n$
*   Particular solution: $a_n^{(p)} = \frac{d}{1-c}$
*   General solution: $a_n = a_n^{(h)} + a_n^{(p)} = A \cdot c^n + \frac{d}{1-c}$

To find $A$, we use the initial condition, say $a_0$.
$a_0 = A \cdot c^0 + \frac{d}{1-c}$
$a_0 = A + \frac{d}{1-c}$
$A = a_0 - \frac{d}{1-c}$

So, the full solution is:
$a_n = \left(a_0 - \frac{d}{1-c}\right) \cdot c^n + \frac{d}{1-c}$

**Scenario B: $c = 1$ (and $d \ne 0$)**
*   Homogeneous solution: $a_n^{(h)} = A \cdot 1^n = A$
*   Particular solution: $a_n^{(p)} = dn$
*   General solution: $a_n = a_n^{(h)} + a_n^{(p)} = A + dn$

To find $A$, we use the initial condition $a_0$:
$a_0 = A + d \cdot 0$
$a_0 = A$

So, the full solution is:
$a_n = a_0 + dn$

This perfectly matches our savings example!

**Remember this:** The method of undetermined coefficients is your best friend for finding the particular solution. The form of your guess depends on the form of the non-homogeneous term.

#### Example (from Veerarajan):

Let's solve $a_n = 3a_{n-1} + 4$ with $a_0 = 2$.

Here, $c=3$ and $d=4$. Since $c \ne 1$, we use Scenario A.
1.  **Homogeneous Solution:** $a_n^{(h)} = A \cdot 3^n$.
2.  **Particular Solution:** The non-homogeneous term is a constant (4). So, we guess $a_n^{(p)} = K$.
    Substitute into the relation: $K = 3K + 4 \implies -2K = 4 \implies K = -2$.
    So, $a_n^{(p)} = -2$.
3.  **General Solution:** $a_n = a_n^{(h)} + a_n^{(p)} = A \cdot 3^n - 2$.
4.  **Find A using initial condition:** $a_0 = 2$.
    $a_0 = A \cdot 3^0 - 2$
    $2 = A \cdot 1 - 2$
    $2 = A - 2$
    $A = 4$.

Therefore, the specific solution is $a_n = 4 \cdot 3^n - 2$.

Let's check:
*   $a_0 = 4 \cdot 3^0 - 2 = 4 \cdot 1 - 2 = 2$. (Correct)
*   $a_1 = 4 \cdot 3^1 - 2 = 4 \cdot 3 - 2 = 12 - 2 = 10$.
    Checking with the recurrence: $a_1 = 3a_0 + 4 = 3(2) + 4 = 6 + 4 = 10$. (Correct)
*   $a_2 = 4 \cdot 3^2 - 2 = 4 \cdot 9 - 2 = 36 - 2 = 34$.
    Checking with the recurrence: $a_2 = 3a_1 + 4 = 3(10) + 4 = 30 + 4 = 34$. (Correct)

This matches **CO4** by demonstrating a method to solve recurrence relations.

#### Another Example (when $c=1$):

Let's solve $a_n = a_{n-1} + 5$ with $a_0 = 10$.
Here, $c=1$ and $d=5$. We use Scenario B.
1.  **Homogeneous Solution:** $a_n^{(h)} = A \cdot 1^n = A$.
2.  **Particular Solution:** Since $c=1$ and $d=5$ (a non-zero constant), we guess $a_n^{(p)} = Kn$.
    Substitute into the relation: $Kn = K(n-1) + 5$
    $Kn = Kn - K + 5$
    $0 = -K + 5 \implies K = 5$.
    So, $a_n^{(p)} = 5n$.
3.  **General Solution:** $a_n = a_n^{(h)} + a_n^{(p)} = A + 5n$.
4.  **Find A using initial condition:** $a_0 = 10$.
    $a_0 = A + 5(0)$
    $10 = A + 0 \implies A = 10$.

Therefore, the specific solution is $a_n = 10 + 5n$.

This is an arithmetic progression starting at 10 with a common difference of 5, which makes perfect sense!

### Connection to Generating Functions (Brief Preview)

You might wonder why this topic is in a module about generating functions. While we've solved these first-order relations using direct methods, generating functions provide a powerful, unified approach to solving *any* linear recurrence relation with constant coefficients, regardless of order.

A generating function $G(x)$ for a sequence $a_0, a_1, a_2, \dots$ is a power series:
$G(x) = a_0 + a_1 x + a_2 x^2 + a_3 x^3 + \dots = \sum_{n=0}^{\infty} a_n x^n$

The idea is to take the recurrence relation, multiply each term by $x^n$, and sum over all possible $n$. This transforms the recurrence relation into an algebraic equation in terms of $G(x)$. Solving for $G(x)$ and then finding its coefficient of $x^n$ gives us the solution $a_n$.

For example, with $a_n = c \cdot a_{n-1} + d$ and initial condition $a_0$:
Let $G(x) = \sum_{n=0}^{\infty} a_n x^n$.
We know $\sum_{n=1}^{\infty} a_n x^n = G(x) - a_0$.
Also, $\sum_{n=1}^{\infty} c \cdot a_{n-1} x^n = c x \sum_{n=1}^{\infty} a_{n-1} x^{n-1} = c x \sum_{m=0}^{\infty} a_m x^m = c x G(x)$.
And $\sum_{n=1}^{\infty} d x^n = d (x + x^2 + x^3 + \dots) = d \frac{x}{1-x}$ (assuming $|x|<1$).

So, $G(x) - a_0 = c x G(x) + d \frac{x}{1-x}$.
$G(x)(1 - cx) = a_0 + d \frac{x}{1-x}$
$G(x) = \frac{a_0}{1-cx} + \frac{dx}{(1-x)(1-cx)}$

By using partial fraction decomposition and the known series expansions for geometric series ($\frac{1}{1-rx} = \sum_{n=0}^{\infty} (rx)^n = \sum_{n=0}^{\infty} r^n x^n$), we can extract the coefficient $a_n$. This is a more advanced technique, but it shows the power of generating functions as promised in **CO4**.

### Importance and Application

Understanding how to solve first-order linear recurrence relations with constant coefficients is fundamental. These types of relations appear in:

*   **Computer Science:** Analyzing algorithms, like the time complexity of recursive functions. For instance, if a problem of size $n$ is broken down into a subproblem of size $n-1$ and requires constant work $d$, its recurrence might look like $T(n) = T(n-1) + d$.
*   **Finance:** Calculating loan payments, compound interest, or annuities.
*   **Biology:** Simple population growth models.
*   **Combinatorics:** Counting arrangements or sequences with specific properties.

For **CO2** (counting principles) and **CO1** (logical reasoning), recurrence relations provide a framework to build and analyze counts. For **CO3** (sets, relations, functions), recurrence relations are a specific type of function definition.

### Common Pitfalls and Exam Tips

1.  **Don't forget the initial condition:** It's essential for finding the specific solution. Many students can find the general form but forget to use the initial condition to find the specific constant.
2.  **Distinguish $c=1$ and $c \ne 1$ cases:** The method for finding the particular solution changes significantly when $c=1$. Always check this value.
3.  **Correctly identify $c$ and $d$:** Ensure you're matching the terms correctly in the $a_n = c \cdot a_{n-1} + d$ format.
4.  **Be careful with signs:** Especially when solving for $K$ or $A$.
5.  **Checking your solution:** Always plug your final solution back into the original recurrence relation and check it against the initial condition. This is the easiest way to catch errors.

### Sample Questions and Answers

**Q1. Conceptual Question:**
What is the difference between a homogeneous and a non-homogeneous linear recurrence relation with constant coefficients?

**Answer:**
A **homogeneous** linear recurrence relation with constant coefficients has the form $a_n = c \cdot a_{n-1}$, where all terms involve the preceding term $a_{n-1}$ multiplied by a constant $c$, and there are no additional constant terms or functions of $n$. In contrast, a **non-homogeneous** relation of this type, $a_n = c \cdot a_{n-1} + d$, includes an extra term ($d$) that does not depend on any previous term of the sequence. This additive term $d$ is what makes the relation "non-homogeneous."

**Q2. Solving Homogeneous Relation:**
Find the specific solution for the recurrence relation $a_n = -2a_{n-1}$ with $a_0 = 5$.

**Answer:**
This is a homogeneous first-order linear recurrence relation with constant coefficient $c = -2$.
The general solution is $a_n = A \cdot c^n$.
Substituting $c = -2$: $a_n = A \cdot (-2)^n$.
Now, use the initial condition $a_0 = 5$:
$a_0 = A \cdot (-2)^0$
$5 = A \cdot 1$
$A = 5$.
So, the specific solution is $a_n = 5 \cdot (-2)^n$.

**Q3. Solving Non-Homogeneous Relation (c $\ne$ 1):**
Solve the recurrence relation $a_n = 4a_{n-1} + 3$ with $a_0 = 1$.

**Answer:**
Here, $c=4$ and $d=3$. Since $c \ne 1$, we use the formula $a_n = A \cdot c^n + \frac{d}{1-c}$.
1.  **Homogeneous part:** $a_n^{(h)} = A \cdot 4^n$.
2.  **Particular part:** $a_n^{(p)} = \frac{d}{1-c} = \frac{3}{1-4} = \frac{3}{-3} = -1$.
3.  **General solution:** $a_n = A \cdot 4^n - 1$.
4.  **Use initial condition $a_0 = 1$**:
    $1 = A \cdot 4^0 - 1$
    $1 = A \cdot 1 - 1$
    $1 = A - 1 \implies A = 2$.
The specific solution is $a_n = 2 \cdot 4^n - 1$.

**Q4. Solving Non-Homogeneous Relation (c = 1):**
A bank account starts with $500. Each month, it earns 2% interest on the current balance, and an additional $50 is deposited at the end of the month. Write a recurrence relation for the balance after $n$ months and find a closed-form solution.

**Answer:**
Let $B_n$ be the balance after $n$ months.
The balance at the start of month $n$ is $B_{n-1}$.
It earns 2% interest: $0.02 \cdot B_{n-1}$.
The new balance after interest is $B_{n-1} + 0.02 B_{n-1} = 1.02 B_{n-1}$.
Then, an additional $50 is deposited.
So, the recurrence relation is $B_n = 1.02 B_{n-1} + 50$.
The initial balance is $B_0 = 500$.

This is a non-homogeneous first-order linear recurrence relation with constant coefficients, where $c = 1.02$ and $d = 50$. Since $c \ne 1$, we use Scenario A: $a_n = A \cdot c^n + \frac{d}{1-c}$.

1.  **Homogeneous part:** $B_n^{(h)} = A \cdot (1.02)^n$.
2.  **Particular part:** $B_n^{(p)} = \frac{d}{1-c} = \frac{50}{1-1.02} = \frac{50}{-0.02} = -2500$.
3.  **General solution:** $B_n = A \cdot (1.02)^n - 2500$.
4.  **Use initial condition $B_0 = 500$**:
    $500 = A \cdot (1.02)^0 - 2500$
    $500 = A \cdot 1 - 2500$
    $500 = A - 2500 \implies A = 3000$.

The specific solution for the balance is $B_n = 3000 \cdot (1.02)^n - 2500$.

This concludes our exploration of first-order linear recurrence relations with constant coefficients. Mastering these will give you a strong foundation for more complex recurrence relations and the powerful techniques of generating functions!
