---
title: "Mathematical Induction"
subject: "DISCRETE MATHEMATICS"
module: "Module 3: Induction and Recurrences"
branch: "Computer Science and Engineering"
semester: 2
topicId: "68b45b6f58474a0b135b5fa7"
status: "completed"
scrapedAt: "2026-05-20T16:33:06.498Z"
---
Absolutely! Let's dive into the fascinating world of Mathematical Induction. Think of this as our whiteboard session, where we'll build a solid understanding of this powerful proof technique.

***

## Module 3: Induction and Recurrences

### Topic: Mathematical Induction

**(Introduction to the Topic and its Importance)**

Welcome, everyone! Today, we begin a journey into a fundamental proof technique in discrete mathematics: **Mathematical Induction**. You might be thinking, "Why do we need a special method for proofs?" Well, as we deal with sequences, algorithms, and structures that often depend on the *previous* step or state, we need a systematic way to prove that something holds true for an infinite number of cases – like proving a property for all positive integers.

Mathematical induction is your Swiss Army knife for proving statements about natural numbers. It’s like building a domino effect – if you can knock over the first domino, and you can show that *any* domino will knock over the *next* one, then you know all the dominoes will fall. This might sound simple, but its applications are vast, especially in computer science.

**(Connecting to Course Outcomes)**

Now, how does this relate to our course objectives?

*   **CO1 (Propositional and Quantified Logic):** Induction is a form of *deductive reasoning* applied to *quantified propositional logic*, specifically statements about natural numbers (e.g., "For all $n \ge 1$, property P(n) is true"). We'll be using logical implication extensively in our proofs.
*   **CO5 (Generating Functions and Recurrence Relations):** Many recurrence relations, which describe how sequences are built, can be proven correct using induction. If we derive a closed-form formula for a recurrence, induction is the go-to method to confirm our solution. Think about proving that a formula for the number of steps in a sorting algorithm holds for all input sizes.

So, as we explore induction, keep these connections in mind. We're not just learning a proof technique; we're building a tool that underpins much of our understanding in algorithms, data structures, and theoretical computer science.

### What is Mathematical Induction? The Core Idea

At its heart, mathematical induction is a method for proving that a statement $P(n)$ is true for all integers $n$ greater than or equal to some starting integer, usually $n=0$ or $n=1$. The formal structure of an inductive proof relies on two crucial steps:

1.  **The Basis Step (or Base Case):** You must show that the statement $P(n)$ is true for the smallest value of $n$ in your domain. This is your "first domino."
2.  **The Inductive Step:** You must show that *if* the statement $P(k)$ is true for some arbitrary integer $k \ge$ the starting integer, *then* the statement $P(k+1)$ must also be true. This is the crucial link that says, "If one domino falls, the next one will too."

If you can successfully demonstrate both these steps, then by the principle of mathematical induction, the statement $P(n)$ is true for all integers $n$ from the starting integer onwards.

Let's think about this with an analogy. Imagine you want to prove that you can reach any floor in a building, starting from the ground floor.

*   **Basis Step:** You need to show you can reach the *first* floor (e.g., the ground floor itself). This is the starting point.
*   **Inductive Step:** You need to show that *if* you can reach *any* floor (say, floor $k$), then you can definitely reach the *next* floor ($k+1$). This means assuming you have a way to get from floor $k$ to floor $k+1$.

If you can get to the first floor, and you know how to get from any floor to the next, then logically, you can get to the second, then the third, and so on, all the way up.

### Formalizing the Proof Structure

Let's make this more concrete. We want to prove $P(n)$ for all integers $n \ge n_0$.

**The Principle of Mathematical Induction:**
To prove that $P(n)$ is true for all integers $n \ge n_0$, we must do the following:

1.  **Basis Step (Base Case):** Show that $P(n_0)$ is true.
2.  **Inductive Step:** Assume that $P(k)$ is true for some arbitrary integer $k \ge n_0$. This assumption is called the **Inductive Hypothesis**. Then, show that $P(k+1)$ is true.

If both steps are completed successfully, then $P(n)$ is true for all integers $n \ge n_0$.

Rosen (8/e) and Lipson/Lipschutz (3/e) both present this structure very clearly. The key is the logical implication in the inductive step: $P(k) \implies P(k+1)$.

#### Example 1: Sum of the First $n$ Positive Integers

Let's prove the well-known formula for the sum of the first $n$ positive integers:
$P(n): 1 + 2 + 3 + \dots + n = \frac{n(n+1)}{2}$ for all integers $n \ge 1$.

**(Basis Step)**
We need to show that $P(1)$ is true.
When $n=1$, the left side of the equation is just $1$.
The right side is $\frac{1(1+1)}{2} = \frac{1(2)}{2} = 1$.
Since $1 = 1$, the statement $P(1)$ is true. Our first domino has fallen!

**(Inductive Step)**
Assume that $P(k)$ is true for some arbitrary integer $k \ge 1$.
**Inductive Hypothesis:** $1 + 2 + 3 + \dots + k = \frac{k(k+1)}{2}$

Now, we need to show that $P(k+1)$ is true. That is, we need to show:
$1 + 2 + 3 + \dots + k + (k+1) = \frac{(k+1)((k+1)+1)}{2} = \frac{(k+1)(k+2)}{2}$

Let's start with the left side of $P(k+1)$ and use our inductive hypothesis:
$1 + 2 + 3 + \dots + k + (k+1)$
We can group the first $k$ terms:
$(1 + 2 + 3 + \dots + k) + (k+1)$
By the inductive hypothesis, we know what the sum of the first $k$ terms is:
$\frac{k(k+1)}{2} + (k+1)$

Now, we need to algebraically manipulate this to get the right side of $P(k+1)$. Let's find a common denominator:
$\frac{k(k+1)}{2} + \frac{2(k+1)}{2}$
Combine the terms:
$\frac{k(k+1) + 2(k+1)}{2}$
Notice that $(k+1)$ is a common factor in the numerator. Let's factor it out:
$\frac{(k+1)(k + 2)}{2}$

And there you have it! This is exactly the right side of $P(k+1)$.
So, we have shown that if $P(k)$ is true, then $P(k+1)$ is true.

**(Conclusion)**
Since the basis step ($P(1)$) is true and the inductive step ($P(k) \implies P(k+1)$) is true, by the principle of mathematical induction, the formula $1 + 2 + 3 + \dots + n = \frac{n(n+1)}{2}$ is true for all integers $n \ge 1$.

**What to remember for exams:**
*   Clearly state $P(n)$.
*   Clearly state and prove the Basis Step.
*   Clearly state the Inductive Hypothesis.
*   Clearly state what you need to prove for $P(k+1)$.
*   Use the Inductive Hypothesis algebraically to show $P(k+1)$ is true.
*   Conclude by referencing the principle of mathematical induction.

#### Example 2: A Property Related to Powers of 2

Let's try another one. Prove that for all integers $n \ge 0$, $1 + 2 + 4 + \dots + 2^n = 2^{n+1} - 1$.

Here, our statement $P(n)$ is: $1 + 2 + 4 + \dots + 2^n = 2^{n+1} - 1$.
Our starting integer $n_0$ is $0$.

**(Basis Step)**
We need to check $P(0)$.
Left side: The sum goes up to $2^0$, which is just $1$.
Right side: $2^{0+1} - 1 = 2^1 - 1 = 2 - 1 = 1$.
Since $1 = 1$, $P(0)$ is true.

**(Inductive Step)**
Assume $P(k)$ is true for some arbitrary integer $k \ge 0$.
**Inductive Hypothesis:** $1 + 2 + 4 + \dots + 2^k = 2^{k+1} - 1$.

We need to show $P(k+1)$ is true. That is, we need to show:
$1 + 2 + 4 + \dots + 2^k + 2^{k+1} = 2^{(k+1)+1} - 1 = 2^{k+2} - 1$.

Let's start with the left side of $P(k+1)$:
$1 + 2 + 4 + \dots + 2^k + 2^{k+1}$
Group the first $k+1$ terms (from $2^0$ to $2^k$):
$(1 + 2 + 4 + \dots + 2^k) + 2^{k+1}$
Using the Inductive Hypothesis:
$(2^{k+1} - 1) + 2^{k+1}$
Now, combine like terms:
$2 \cdot 2^{k+1} - 1$
Using exponent rules ($a^m \cdot a^n = a^{m+n}$):
$2^1 \cdot 2^{k+1} - 1 = 2^{1+(k+1)} - 1 = 2^{k+2} - 1$.

This matches the right side of $P(k+1)$.

**(Conclusion)**
Since $P(0)$ is true and $P(k) \implies P(k+1)$ for all $k \ge 0$, by the principle of mathematical induction, $1 + 2 + 4 + \dots + 2^n = 2^{n+1} - 1$ for all integers $n \ge 0$.

### Variations of Induction

Sometimes, the simple "one step at a time" induction isn't enough, or the inductive hypothesis needs a bit more power. This leads to variations.

#### 1. Strong Induction (or Course-of-Values Induction)

In standard induction, we assume $P(k)$ is true to prove $P(k+1)$. In **Strong Induction**, we assume that $P(i)$ is true for *all* integers $i$ such that $n_0 \le i \le k$, to prove $P(k+1)$.

This sounds like a lot more to assume, but it's actually logically equivalent to standard induction. The power comes when a statement $P(k+1)$ might depend not just on $P(k)$, but on several previous statements.

**The Principle of Strong Mathematical Induction:**
To prove that $P(n)$ is true for all integers $n \ge n_0$, we must do the following:

1.  **Basis Step:** Show that $P(n_0)$ is true.
2.  **Inductive Step:** Assume that $P(i)$ is true for all integers $i$ such that $n_0 \le i \le k$, where $k \ge n_0$. This is the **Strong Inductive Hypothesis**. Then, show that $P(k+1)$ is true.

If both steps are successful, then $P(n)$ is true for all integers $n \ge n_0$.

**Analogy:** Imagine you're packing for a trip and want to ensure you have the right clothes for every day of a two-week vacation.
*   **Basis Step:** You pack for Day 1.
*   **Strong Inductive Step:** You assume you have packed appropriately for *all days up to Day $k$*. Based on this comprehensive packing plan for the first $k$ days, you then plan what to pack for Day $k+1$.

This is useful because sometimes a problem's solution at step $k+1$ might rely on the solutions of steps $k$, $k-1$, or even earlier steps.

#### Example 3: Prime Factorization

Let's use strong induction to prove that every integer greater than 1 is either prime or can be written as a product of primes.

Let $P(n)$ be the statement: "For an integer $n > 1$, $n$ is prime or $n$ is a product of primes."
We want to prove this for all integers $n \ge 2$. So, $n_0 = 2$.

**(Basis Step)**
We check $P(2)$. The integer $2$ is prime. So, $P(2)$ is true.

**(Inductive Step)**
Assume that for some integer $k \ge 2$, $P(i)$ is true for all integers $i$ such that $2 \le i \le k$. This is our **Strong Inductive Hypothesis**.
We need to show that $P(k+1)$ is true. That is, $(k+1)$ is either prime or a product of primes.

Consider the integer $k+1$.
There are two possibilities for $k+1$:

*   **Case 1: $k+1$ is prime.** If $k+1$ is prime, then by definition, it is a product of primes (a product with just one factor, itself). So $P(k+1)$ is true.

*   **Case 2: $k+1$ is composite (not prime).** If $k+1$ is composite, then by definition, it can be written as a product of two smaller positive integers, say $k+1 = ab$, where $1 < a < k+1$ and $1 < b < k+1$.
    Since $a$ and $b$ are integers greater than 1 and strictly less than $k+1$, they fall within the range covered by our strong inductive hypothesis. Specifically, $2 \le a \le k$ and $2 \le b \le k$.
    Therefore, by our strong inductive hypothesis, both $a$ and $b$ are either prime or a product of primes.
    If $a$ is prime, it's a product of primes. If $a$ is a product of primes, say $a = p_1 p_2 \dots p_m$, then $k+1 = (p_1 p_2 \dots p_m)b$.
    Similarly, if $b$ is prime, it's a product of primes. If $b$ is a product of primes, say $b = q_1 q_2 \dots q_n$, then $k+1 = a(q_1 q_2 \dots q_n)$.
    Combining these, $k+1 = ab = (p_1 \dots p_m)(q_1 \dots q_n)$ (or just $a$ if $b$ is prime, or $b$ if $a$ is prime, or $p_1 \dots p_m q_1 \dots q_n$ if both are composite). In any case, $k+1$ is a product of the prime factors of $a$ and the prime factors of $b$. Thus, $k+1$ is a product of primes. So $P(k+1)$ is true.

In both cases, $k+1$ is either prime or a product of primes.

**(Conclusion)**
Since $P(2)$ is true and our strong inductive step holds, by the principle of strong mathematical induction, every integer greater than 1 is either prime or can be written as a product of primes.

**Key takeaway for strong induction:** When proving $P(k+1)$, you can assume $P(i)$ for *any* $i$ up to $k$. This is super helpful for problems where the outcome at step $k+1$ depends on multiple prior steps, like in proving properties of recursive algorithms or combinatorial structures. Think of the Fibonacci sequence – calculating $F_n$ requires $F_{n-1}$ and $F_{n-2}$, so strong induction is more natural here.

#### 2. Proof by Weak Induction vs. Strong Induction

It's important to note that "weak induction" is just the standard induction we first discussed. The difference lies in the strength of the inductive hypothesis.

*   **Weak Induction (Standard):** Assumes $P(k)$ to prove $P(k+1)$.
*   **Strong Induction:** Assumes $P(i)$ for $n_0 \le i \le k$ to prove $P(k+1)$.

As mentioned, they are logically equivalent. If you can prove something with weak induction, you can prove it with strong induction, and vice-versa. Sometimes, one form is just more natural or easier to write for a particular problem.

**When to choose which?**
*   If $P(k+1)$ directly or indirectly depends only on $P(k)$, weak induction is often sufficient and simpler.
*   If $P(k+1)$ depends on $P(k)$, $P(k-1)$, or any previous statement $P(i)$ where $i < k+1$, strong induction is usually more straightforward to apply.

#### 3. Proof by Mathematical Induction with Variations on the Basis Step

While $n \ge 1$ or $n \ge 0$ are common starting points, sometimes the property might only hold for $n \ge n_0$ where $n_0$ is some other integer. The process remains the same: identify the correct starting point for your basis step.

**Example:** Proving a property of polygons with $n$ sides, where $n$ must be at least 3. The basis step would be for $n=3$.

#### 4. Nested Induction (Less Common in Introductory Courses)

Occasionally, you might encounter proofs that require nested induction, where one inductive proof is part of another. This is more advanced and not typically covered in an introductory discrete math course unless specifically mentioned.

### Examples with Real-World Intuition

Let's try to visualize induction with some everyday scenarios, beyond just dominoes.

#### Scenario 1: Stacking Cups

Imagine you have a set of identical cups, and you want to show that you can build a stable tower of any height $n \ge 1$.

*   **The Statement $P(n)$:** A tower of $n$ cups can be built stably.
*   **Basis Step (n=1):** Can you build a tower of 1 cup stably? Yes, you just place one cup. $P(1)$ is true.
*   **Inductive Step:**
    *   **Inductive Hypothesis:** Assume that a tower of $k$ cups can be built stably ($P(k)$ is true).
    *   **Goal:** Show that a tower of $k+1$ cups can be built stably ($P(k+1)$ is true).
    *   **The Logic:** If you have a stable tower of $k$ cups, you can simply place one more cup on top of the $k$-th cup to create a tower of $k+1$ cups. Since the base tower is stable, and the new cup is placed on a stable surface, the new tower of $k+1$ cups is also stable.

This is a very intuitive example of weak induction. The ability to build $k+1$ cups relies directly on the ability to build $k$ cups.

#### Scenario 2: Sharing a Cake with Friends

Suppose you have a cake and you want to distribute it among friends. Let's say you have a rule for dividing it.

Imagine you have a large rectangular cake. You want to show that any cake can be cut into pieces such that each piece is a perfect square. (This is a bit of a contrived example, but helps visualize the logic.)

Let $P(n)$ be the statement: "A rectangular cake of size $m \times n$ can be cut into square pieces." (This might be tricky to prove for all $m, n$ without more constraints, but let's focus on the inductive *structure*).

A more direct cake analogy might be for something like: "If you can cut a rectangular cake into $k$ pieces, you can cut it into $k+1$ pieces."

*   **Statement $P(k)$:** A cake can be cut into $k$ pieces.
*   **Basis Step ($P(1)$):** A cake can be cut into 1 piece (i.e., not cut at all). True.
*   **Inductive Step:** Assume a cake can be cut into $k$ pieces. To get $k+1$ pieces, you simply take one of the existing $k$ pieces and cut it into two. This increases the total number of pieces by one, resulting in $k+1$ pieces. $P(k) \implies P(k+1)$.

This analogy works well for demonstrating the step-by-step increase in the number of items.

#### Scenario 3: Following a Recipe with Dependencies

Consider a complex recipe. Let's say a recipe for a multi-layered cake.

*   **Statement $P(n)$:** For a cake with $n$ layers, the recipe can be followed successfully.
*   **Basis Step ($P(1)$):** The recipe for a 1-layer cake is followed successfully. True.
*   **Strong Inductive Step:** Assume that for any cake requiring up to $k$ layers, the recipe has been followed successfully for all sub-recipes up to $k$ layers ($P(i)$ for $1 \le i \le k$ is true).
    *   **Goal:** Show that the recipe for a $k+1$ layer cake can be followed successfully ($P(k+1)$ is true).
    *   **The Logic:** To make a $k+1$ layer cake, you might need to prepare certain components that are themselves cakes of fewer layers, or have specific properties that depend on the successful completion of earlier steps. For example, maybe layer $k+1$ needs a special frosting that can only be made after layers 1 through $k$ are prepared and cooled. If you assume that all sub-recipes for $i \le k$ layers have been done correctly (Strong Inductive Hypothesis), then you have all the necessary base components and knowledge to prepare the $(k+1)^{th}$ layer and finish the cake.

This is where strong induction shines. The success of step $k+1$ depends on the success of *all* preceding steps, not just step $k$.

### Common Pitfalls and How to Avoid Them

*   **Forgetting the Basis Step:** This is like having a perfect domino-to-domino tipping mechanism but never pushing the first domino. Your entire chain of logic is broken if the starting point isn't valid. Always, always prove $P(n_0)$.
*   **Confusing Weak and Strong Induction:** While equivalent, choose the one that fits the problem structure better. If you're trying to use weak induction on a problem that clearly needs the assumption of multiple previous steps, it will be very difficult, if not impossible.
*   **Errors in Algebra:** The inductive step often involves algebraic manipulation. Be meticulous! A small mistake here can invalidate your proof. Double-check your factoring, exponent rules, and equation solving.
*   **Not Clearly Stating the Inductive Hypothesis:** The hypothesis is the *assumption* you make about $P(k)$ (or $P(i)$ for $i \le k$). Make sure it's explicit.
*   **Proving $P(k) \implies P(k)$:** This is a common error. You are not trying to show that if $P(k)$ is true, it remains true. You are trying to show that if $P(k)$ is true, then $P(k+1)$ must also be true.

### Connecting to Course Outcomes Again

Let's briefly revisit how induction directly supports our course objectives:

*   **CO1 (Logic):** Induction is a direct application of *quantified logic* and *deductive reasoning*. The structure $P(n_0) \land (\forall k \ge n_0, P(k) \implies P(k+1)) \implies \forall n \ge n_0, P(n)$ is a fundamental logical inference.
*   **CO5 (Recurrences):** When we solve a recurrence relation like $a_n = 2a_{n-1}$ with $a_1=3$ to get $a_n = 3 \cdot 2^{n-1}$, we use induction to *prove* that our derived formula is indeed the correct solution for all $n \ge 1$. This is critical for verifying algorithmic correctness, for instance, in analyzing the time complexity of recursive algorithms.

### Sample Questions and Answers

Let's test your understanding with some practice problems.

---

**Question 1 (Conceptual):**
Explain the role of the "Basis Step" and the "Inductive Step" in a mathematical induction proof. Why are both necessary?

**Answer:**
The **Basis Step** (or Base Case) establishes that the statement $P(n)$ is true for the smallest integer $n_0$ in the domain of interest. It acts as the starting point, the "first domino."
The **Inductive Step** demonstrates that if the statement $P(n)$ is true for an arbitrary integer $k \ge n_0$, then it must also be true for the next integer, $k+1$. This is done by assuming $P(k)$ is true (the Inductive Hypothesis) and logically deriving $P(k+1)$. This step establishes the "domino effect" – that each domino will tip the next.
Both steps are necessary because:
1.  **Basis Step alone:** Just showing $P(n_0)$ is true doesn't tell us anything about $P(n_0+1)$, $P(n_0+2)$, etc.
2.  **Inductive Step alone:** If we don't have a valid basis step, the implication $P(k) \implies P(k+1)$ never "kicks in." It's like having the mechanism to tip the next domino, but no way to start the process.

Thus, the combination of a valid start and a valid chain reaction ensures the property holds for all integers from the starting point onwards.

---

**Question 2 (Weak Induction Proof):**
Prove that for all integers $n \ge 1$, the sum of the first $n$ odd positive integers is $n^2$.
That is, prove $1 + 3 + 5 + \dots + (2n-1) = n^2$.

**Answer:**
Let $P(n)$ be the statement: $1 + 3 + 5 + \dots + (2n-1) = n^2$.
We want to prove $P(n)$ for all integers $n \ge 1$.

**Basis Step:**
For $n=1$, the left side is the first odd positive integer, which is $2(1)-1 = 1$.
The right side is $1^2 = 1$.
Since $1=1$, $P(1)$ is true.

**Inductive Step:**
Assume $P(k)$ is true for some arbitrary integer $k \ge 1$.
**Inductive Hypothesis:** $1 + 3 + 5 + \dots + (2k-1) = k^2$.

We need to show that $P(k+1)$ is true. That is, we need to show:
$1 + 3 + 5 + \dots + (2k-1) + (2(k+1)-1) = (k+1)^2$.
Simplifying the last term: $2(k+1)-1 = 2k+2-1 = 2k+1$.
So we need to show: $1 + 3 + 5 + \dots + (2k-1) + (2k+1) = (k+1)^2$.

Let's start with the left side of $P(k+1)$:
$1 + 3 + 5 + \dots + (2k-1) + (2k+1)$
Using the inductive hypothesis, we can replace the sum of the first $k$ terms:
$(1 + 3 + 5 + \dots + (2k-1)) + (2k+1) = k^2 + (2k+1)$.

Now, we need to show this equals $(k+1)^2$:
$k^2 + 2k + 1$
This is a perfect square trinomial, which factors as $(k+1)^2$.

So, $k^2 + 2k + 1 = (k+1)^2$.
This matches the right side of $P(k+1)$.

**Conclusion:**
Since the basis step $P(1)$ is true, and the inductive step ($P(k) \implies P(k+1)$) is true for all $k \ge 1$, by the principle of mathematical induction, the statement $1 + 3 + 5 + \dots + (2n-1) = n^2$ is true for all integers $n \ge 1$.

---

**Question 3 (Strong Induction Proof):**
Prove that every integer $n \ge 2$ can be expressed as a product of prime numbers. (This is the Fundamental Theorem of Arithmetic, which can be proven by induction).

**Answer:**
Let $P(n)$ be the statement: "$n$ can be expressed as a product of prime numbers."
We want to prove $P(n)$ for all integers $n \ge 2$. So, $n_0=2$.

**Basis Step:**
For $n=2$, the number 2 is prime. A prime number is considered a product of primes (with one factor). So, $P(2)$ is true.

**Inductive Step (using Strong Induction):**
Assume that for some integer $k \ge 2$, $P(i)$ is true for all integers $i$ such that $2 \le i \le k$.
**Strong Inductive Hypothesis:** For all integers $i$ with $2 \le i \le k$, $i$ can be expressed as a product of primes.

We need to show that $P(k+1)$ is true, i.e., $k+1$ can be expressed as a product of primes.

Consider the integer $k+1$.
There are two possibilities for $k+1$:

*   **Case 1: $k+1$ is prime.**
    If $k+1$ is prime, then by definition, it is a product of primes (with one factor, $k+1$ itself). Thus, $P(k+1)$ is true.

*   **Case 2: $k+1$ is composite (not prime).**
    If $k+1$ is composite, then $k+1$ can be written as a product of two integers $a$ and $b$, where $1 < a < k+1$ and $1 < b < k+1$.
    Since $a$ and $b$ are integers greater than 1 and strictly less than $k+1$, they fall within the range covered by our strong inductive hypothesis: $2 \le a \le k$ and $2 \le b \le k$.
    Therefore, by our strong inductive hypothesis, both $a$ and $b$ can be expressed as a product of primes.
    Let $a = p_1 p_2 \dots p_m$ and $b = q_1 q_2 \dots q_n$, where $p_i$ and $q_j$ are prime numbers.
    Then, $k+1 = a \cdot b = (p_1 p_2 \dots p_m) \cdot (q_1 q_2 \dots q_n)$.
    This shows that $k+1$ is a product of primes. Thus, $P(k+1)$ is true.

In both cases, $k+1$ can be expressed as a product of primes.

**Conclusion:**
Since the basis step $P(2)$ is true, and the strong inductive step holds (i.e., if $P(i)$ is true for all $2 \le i \le k$, then $P(k+1)$ is true), by the principle of strong mathematical induction, every integer $n \ge 2$ can be expressed as a product of prime numbers.

---

That concludes our deep dive into mathematical induction. Remember, practice is key! Work through many examples from your textbooks and problem sets to build confidence and fluency. Keep these principles sharp, and you'll find them incredibly useful throughout your studies.
