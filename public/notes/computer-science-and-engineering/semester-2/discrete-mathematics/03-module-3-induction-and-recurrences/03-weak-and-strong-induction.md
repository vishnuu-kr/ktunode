---
title: "Weak and Strong induction"
subject: "DISCRETE MATHEMATICS"
module: "Module 3: Induction and Recurrences"
branch: "Computer Science and Engineering"
semester: 2
topicId: "68b45b6f58474a0b135b5fa8"
status: "completed"
scrapedAt: "2026-05-20T16:33:07.217Z"
---
# Module 3: Induction and Recurrences - Weak and Strong Induction

Welcome everyone! In this module, we're diving into two incredibly powerful proof techniques: **Mathematical Induction**, specifically its "weak" and "strong" forms. These are your go-to tools when you need to prove something is true for an infinite number of cases, typically for all positive integers (or starting from some integer). Think of it like a chain reaction: if you can show the first domino falls, and then show that *any* domino falling causes the next one to fall, then you've just proven that *all* the dominoes will fall! This is fundamental to so many areas of computer science, from analyzing algorithms to proving properties of data structures.

Our journey today will equip you with the ability to rigorously prove statements about sequences, algorithms, and combinatorial properties. This directly ties into several of our Course Outcomes, especially:

*   **CO1 (Knowledge Level: K3):** While induction itself is a proof technique, the statements we prove often involve predicates and quantifiers. Understanding how to form and verify these predicates is crucial.
*   **CO2 (Knowledge Level: K3):** Many counting problems, especially those involving recursive definitions or properties of structures built inductively, can be solved using induction.
*   **CO5 (Knowledge Level: K3):** This is a direct hit! Induction is the bedrock for understanding and solving recurrence relations, which we'll explore further.

Let's get started by understanding the core idea of induction.

## The Essence of Mathematical Induction: The Domino Analogy

Imagine a long line of dominoes, perfectly lined up. To make them all fall, what do you need to do?

1.  **Push the first domino.** If the first one doesn't fall, none of the others will.
2.  **Ensure that if any domino falls, it knocks over the next one.** If there's a gap, or a domino is placed in a way that it only tips forward, then the chain reaction stops.

This is precisely what mathematical induction does. We want to prove a statement, let's call it $P(n)$, which is true for all integers $n$ greater than or equal to some starting value (usually $n=1$).

### The Principle of Mathematical Induction (Weak Induction)

The principle of mathematical induction is stated as follows:

To prove that a statement $P(n)$ is true for all integers $n \ge n_0$, we need to do two things:

1.  **Base Case (or Basis Step):** Show that $P(n_0)$ is true. This is like pushing the first domino.
2.  **Inductive Step:** Show that for any integer $k \ge n_0$, if $P(k)$ is true, then $P(k+1)$ must also be true. This is like showing that any falling domino knocks over the next one.

If we can successfully demonstrate both of these steps, then we can conclude that $P(n)$ is true for all integers $n \ge n_0$. Why? Because $P(n_0)$ is true. Then, by the inductive step, since $P(n_0)$ is true, $P(n_0+1)$ must be true. Since $P(n_0+1)$ is true, $P(n_0+2)$ must be true, and so on, for all subsequent integers. It's a logical chain that never breaks.

This form is often called "weak induction" because in the inductive step, we only assume the truth of $P(k)$ to prove $P(k+1)$. We’ll soon see a more powerful variation.

Let's solidify this with an example.

#### Example 1: Sum of the First $n$ Positive Integers

Let's prove the statement: $P(n): 1 + 2 + 3 + \dots + n = \frac{n(n+1)}{2}$ for all integers $n \ge 1$.

**Step 1: Base Case**
We need to show that $P(1)$ is true.
$P(1)$ states: $1 = \frac{1(1+1)}{2}$.
$1 = \frac{1(2)}{2}$
$1 = 1$.
This is true! Our first domino is pushed.

**Step 2: Inductive Step**
We need to show that for any integer $k \ge 1$, if $P(k)$ is true, then $P(k+1)$ is true.
Assume $P(k)$ is true. This means we assume:
$1 + 2 + 3 + \dots + k = \frac{k(k+1)}{2}$  (This is our **Inductive Hypothesis** – the assumption that $P(k)$ is true).

Now, we need to prove $P(k+1)$ is true, which means we need to show:
$1 + 2 + 3 + \dots + k + (k+1) = \frac{(k+1)((k+1)+1)}{2} = \frac{(k+1)(k+2)}{2}$.

Let's start with the left-hand side of $P(k+1)$ and use our inductive hypothesis.
$1 + 2 + 3 + \dots + k + (k+1) = (1 + 2 + 3 + \dots + k) + (k+1)$

See what we did there? We just grouped the first $k$ terms. Now, we can substitute the assumed value of this sum from our inductive hypothesis:
$= \frac{k(k+1)}{2} + (k+1)$

Now, it's just algebra to manipulate this into the right-hand side of $P(k+1)$:
$= \frac{k(k+1)}{2} + \frac{2(k+1)}{2}$  (Getting a common denominator)
$= \frac{k(k+1) + 2(k+1)}{2}$
$= \frac{(k+1)(k + 2)}{2}$  (Factoring out $(k+1)$)

And look! This is exactly the right-hand side of $P(k+1)$.
So, we have shown that if $P(k)$ is true, then $P(k+1)$ is also true.

**Conclusion:**
By the principle of mathematical induction, the statement $1 + 2 + 3 + \dots + n = \frac{n(n+1)}{2}$ is true for all integers $n \ge 1$.

This example is a classic and often found in textbooks like Rosen's "Discrete Mathematics and its Applications." It's a great illustration of how the inductive hypothesis directly helps us prove the next case.

### What if the Statement Starts Later?

Sometimes, our statement might not be true for $n=1$, but it might be true for $n=5$ onwards. No problem! We just adjust our base case. If $P(n)$ is true for all $n \ge n_0$, our base case is $P(n_0)$.

#### Example 2: Inequality Proof

Let's prove that $n^2 < 2^n$ for all integers $n \ge 5$.

Here, our starting point $n_0$ is 5.

**Step 1: Base Case**
We need to show $P(5)$ is true: $5^2 < 2^5$.
$25 < 32$. This is true.

**Step 2: Inductive Step**
Assume $P(k)$ is true for some integer $k \ge 5$. That is, assume $k^2 < 2^k$.
We need to show $P(k+1)$ is true: $(k+1)^2 < 2^{k+1}$.

Let's start with $(k+1)^2$:
$(k+1)^2 = k^2 + 2k + 1$.

From our inductive hypothesis, we know $k^2 < 2^k$. So, we can write:
$(k+1)^2 < 2^k + 2k + 1$.

Now, we need to show that $2^k + 2k + 1 < 2^{k+1}$. If we can show this, then we've effectively bridged the gap: $(k+1)^2 < 2^k + 2k + 1 < 2^{k+1}$.

The inequality we need to prove is $2^k + 2k + 1 < 2^{k+1}$, which simplifies to $2k + 1 < 2^{k+1} - 2^k = 2^k$.
So, we need to prove $2k + 1 < 2^k$ for $k \ge 5$.

Let's quickly check this sub-problem using a mini-induction (or just by observation for small values):
For $k=5$: $2(5) + 1 = 11$, and $2^5 = 32$. $11 < 32$. True.
For $k=6$: $2(6) + 1 = 13$, and $2^6 = 64$. $13 < 64$. True.

It seems true. Let's quickly prove $2k+1 < 2^k$ for $k \ge 5$ by induction.
Base case $k=5$: $11 < 32$, true.
Inductive step: Assume $2k+1 < 2^k$ for $k \ge 5$.
We want to show $2(k+1)+1 < 2^{k+1}$.
$2(k+1)+1 = (2k+1) + 2$.
By our hypothesis, $2k+1 < 2^k$.
So, $(2k+1) + 2 < 2^k + 2$.
We need to show $2^k + 2 < 2^{k+1}$.
$2^k + 2 < 2 \cdot 2^k$
$2 < 2 \cdot 2^k - 2^k$
$2 < 2^k$.
This is true for all $k \ge 2$. Since our $k$ is $\ge 5$, it's definitely true.
So, we've confirmed that $2k + 1 < 2^k$ for $k \ge 5$.

Now, going back to our main proof:
$(k+1)^2 < 2^k + 2k + 1$
Since $2k + 1 < 2^k$ for $k \ge 5$, we have:
$2^k + 2k + 1 < 2^k + 2^k = 2 \cdot 2^k = 2^{k+1}$.

Therefore, $(k+1)^2 < 2^{k+1}$.

**Conclusion:**
By the principle of mathematical induction, $n^2 < 2^n$ for all integers $n \ge 5$.

This example illustrates a common scenario where you might need to prove an auxiliary inequality as part of your inductive step. This is a very "K3" (application/analysis) level problem.

## The "Stronger" Version: Strong Induction

Now, let's talk about **Strong Induction**. Sometimes, proving that $P(k)$ implies $P(k+1)$ isn't enough. We might need to assume that *all* preceding cases, $P(n_0), P(n_0+1), \dots, P(k)$, are true to prove $P(k+1)$. This is where strong induction comes in.

### The Principle of Strong Mathematical Induction

To prove that a statement $P(n)$ is true for all integers $n \ge n_0$, we need to do two things:

1.  **Base Case:** Show that $P(n_0)$ is true.
2.  **Inductive Step:** Show that for any integer $k \ge n_0$, if $P(i)$ is true for all integers $i$ such that $n_0 \le i \le k$, then $P(k+1)$ is also true.

The crucial difference is in the inductive hypothesis. Instead of assuming only $P(k)$ is true, we assume $P(n_0), P(n_0+1), \dots, P(k)$ are *all* true. It's like saying, "If any domino *up to* the $k$-th one falls, it will knock over the $(k+1)$-th one."

**Is Strong Induction More Powerful than Weak Induction?**

This is a common question. It might seem like it, right? But here's a key insight: **Strong induction is logically equivalent to weak induction.** Any statement provable by strong induction can also be proven by weak induction, and vice-versa.

Think about it: If you can prove $P(k+1)$ using the assumption that $P(n_0), P(n_0+1), \dots, P(k)$ are all true, you can actually define a new statement, say $Q(k)$, which is actually the conjunction (AND) of all these statements: $Q(k) = P(n_0) \land P(n_0+1) \land \dots \land P(k)$.
Then, your strong induction proof essentially shows that $Q(k) \implies P(k+1)$.
You can then use weak induction on $Q(k)$:
*   Base case: $Q(n_0)$ is just $P(n_0)$, which we prove.
*   Inductive step: Assume $Q(k)$ is true. This means $P(n_0), \dots, P(k)$ are true. By the strong inductive step, this implies $P(k+1)$ is true. So, $Q(k) \land P(k+1)$ is true. But $Q(k+1)$ is $P(n_0) \land \dots \land P(k) \land P(k+1)$, which is simply $Q(k) \land P(k+1)$. Thus, $Q(k) \implies Q(k+1)$.

So, while the *method* of proof for strong induction might feel more direct or natural for certain problems, it doesn't let you prove anything that weak induction can't. The choice often comes down to which approach makes the inductive step easier to formulate and execute.

### When is Strong Induction Particularly Useful?

Strong induction shines when the truth of $P(k+1)$ depends on the truth of more than just $P(k)$. A prime example is proving properties of recursively defined sequences where a term depends on multiple previous terms, or in problems involving prime factorization or game theory.

#### Example 3: Prime Factorization

Let's prove that every integer greater than 1 is divisible by at least one prime number.

Let $P(n)$ be the statement: "Integer $n$ is divisible by at least one prime number." We want to show this is true for all $n \ge 2$.

**Step 1: Base Case**
We need to show $P(2)$ is true.
Is 2 divisible by at least one prime number? Yes, 2 is prime itself, and it's divisible by 2. So $P(2)$ is true.

**Step 2: Inductive Step**
We need to show that for any integer $k \ge 2$, if $P(i)$ is true for all integers $i$ such that $2 \le i \le k$, then $P(k+1)$ is true.

Let's consider the integer $k+1$. There are two possibilities:

*   **Case 1: $k+1$ is a prime number.**
    If $k+1$ is prime, then it is divisible by itself, and since $k+1$ is prime, $P(k+1)$ is true.

*   **Case 2: $k+1$ is a composite number.**
    If $k+1$ is composite, then by definition, it can be written as a product of two integers, say $k+1 = ab$, where $a$ and $b$ are integers such that $1 < a < k+1$ and $1 < b < k+1$.
    This means $a$ is an integer such that $2 \le a \le k$.
    Since $a$ is in the range $[2, k]$, our inductive hypothesis states that $P(a)$ is true.
    This means that $a$ is divisible by at least one prime number, say $p$.
    So, $p | a$.
    Since $a | (k+1)$ (because $k+1 = ab$), and $p | a$, by the transitivity of divisibility, it follows that $p | (k+1)$.
    Therefore, $k+1$ is divisible by a prime number $p$, which means $P(k+1)$ is true.

In both cases (whether $k+1$ is prime or composite), $P(k+1)$ is true.

**Conclusion:**
By the principle of strong mathematical induction, every integer greater than 1 is divisible by at least one prime number.

This is a beautiful example of strong induction. Notice how in Case 2, we didn't just rely on $P(k)$ being true; we relied on $P(a)$ being true for some $a < k+1$. This is the hallmark of where strong induction is most natural. This proof technique is foundational in number theory.

#### Example 4: Coin Problem (Recurrence Relation Example)

Let's say you have a supply of 3-cent and 5-cent stamps. What amounts can you form using these stamps? It turns out you can form any amount greater than or equal to 8 cents. Let's try to prove this using strong induction.

Let $P(n)$ be the statement: "The amount $n$ cents can be formed using 3-cent and 5-cent stamps." We want to show $P(n)$ is true for all $n \ge 8$.

**Step 1: Base Cases**
We need to show $P(8), P(9), P(10)$ are true. Why three? Because we'll likely use multiples of 3 and 5. If we're trying to make $n$ cents, and we use a 3-cent stamp, we need to make $n-3$. If we use a 5-cent stamp, we need to make $n-5$. To ensure we can always make the *previous* required amount, it's wise to establish a few base cases.

*   $P(8)$: Can we make 8 cents? Yes, one 3-cent and one 5-cent stamp ($3+5=8$). True.
*   $P(9)$: Can we make 9 cents? Yes, three 3-cent stamps ($3+3+3=9$). True.
*   $P(10)$: Can we make 10 cents? Yes, two 5-cent stamps ($5+5=10$). True.

**Step 2: Inductive Step**
We need to show that for any integer $k \ge 10$, if $P(i)$ is true for all $8 \le i \le k$, then $P(k+1)$ is true.

Consider the amount $k+1$.
Since $k \ge 10$, we have $k+1 \ge 11$.
Let's try to make $k+1$ cents. Consider the amount $(k+1) - 3 = k-2$.
Since $k \ge 10$, $k-2 \ge 8$.
This means $k-2$ is an integer in the range $[8, k]$.
By our inductive hypothesis, $P(k-2)$ is true, meaning we can form the amount $k-2$ cents using 3-cent and 5-cent stamps.
Let's say we used $x$ 3-cent stamps and $y$ 5-cent stamps to make $k-2$ cents. So, $3x + 5y = k-2$.

Now, to make $k+1$ cents, we can take the combination that makes $k-2$ cents and add one more 3-cent stamp.
The new total would be $(3x + 5y) + 3 = (k-2) + 3 = k+1$.
This new combination uses $x+1$ 3-cent stamps and $y$ 5-cent stamps.
Thus, $P(k+1)$ is true.

**Conclusion:**
By the principle of strong mathematical induction, any amount of $n$ cents, where $n \ge 8$, can be formed using 3-cent and 5-cent stamps.

This is a classic problem, often called the Frobenius Coin Problem or the coin problem. It's a great illustration of how strong induction is helpful for problems where the solution for $n$ relies on solutions for earlier values, but not necessarily just the immediately preceding one. This example relates to **CO2** (solving counting problems) and **CO5** (recurrence relations, as the ability to make amount $n$ depends on the ability to make $n-3$ or $n-5$).

### What About the "Gap" in the Coin Problem?

In the coin problem, we had base cases for 8, 9, and 10. Then, we proved $P(k+1)$ assuming $P(i)$ for $8 \le i \le k$, and our proof specifically used $P(k-2)$.

Why $k-2$? Because if we're trying to make $k+1$, we think about using a 3-cent stamp. That leaves us needing to make $(k+1)-3 = k-2$.
If $k+1$ is prime, we don't need to worry about prior cases.
If $k+1$ is composite, say $k+1 = 3x + 5y$.
If $y \ge 1$ (we used at least one 5-cent stamp), then $k+1 - 5 = 3x + 5(y-1)$. This means $k+1$ can be formed if $k+1-5 = k-4$ can be formed.
If $y=0$, then $k+1 = 3x$. In this case, $k+1$ must be a multiple of 3. If $k+1$ is a multiple of 3, say $k+1=3m$, and $m \ge 3$ (since $k+1 \ge 8$, $m \ge 3$), we can make $k+1$ using $m$ 3-cent stamps.

The proof I presented using $k-2$ is simpler and covers all cases as long as $k-2 \ge 8$.
Let's re-examine the proof strategy if we use the idea of "removing a stamp".
To form $k+1$:
1.  If $k+1$ is prime, we're done (but we're proving for $n \ge 8$, so we need to be careful).
2.  If $k+1$ is composite, $k+1 = ab$.
    We can say:
    If we can form $k+1-3$, and then add a 3-cent stamp, we're good. This requires $k+1-3 = k-2 \ge 8$. This works for $k \ge 10$.
    What if we can't? This strategy assumes $P(k-2)$ is true.
    The formulation using the "if $y \ge 1$" logic is more robust for demonstrating why strong induction is natural here.
    Let's stick to the proof $P(k+1)$ by considering $P(k-2)$:
    If $P(k-2)$ is true, then $k-2 = 3x + 5y$.
    Then $k+1 = (k-2) + 3 = 3x + 5y + 3 = 3(x+1) + 5y$.
    This shows that if we can make $k-2$, we can make $k+1$.
    This implies that if $P(i)$ is true for all $8 \le i \le k$, then $P(k+1)$ is true.
    The crucial part is that $k-2$ is indeed within the range $[8, k]$ when $k \ge 10$.
    So the inductive step is valid.

This kind of reasoning is very common when dealing with recurrence relations, and it directly maps to **CO5**.

## Connecting to Other Course Outcomes

While induction primarily focuses on proving statements for all integers, it underpins many concepts in Discrete Mathematics:

*   **CO1 (Propositional and Quantified Logic):** The statements $P(n)$ that we prove are essentially quantified statements ($\forall n \ge n_0, P(n)$). The structure of an inductive proof involves logical implication (if $P(k)$ then $P(k+1)$). Understanding how to construct and verify these logical statements is key.
*   **CO2 (Counting Techniques):** Many combinatorial identities or properties of counting methods can be proven using induction. For example, proving formulas for combinations or permutations, or proving that a certain recursive counting process yields a correct result.
*   **CO5 (Generating Functions and Recurrence Relations):** This is perhaps the most direct link. Recurrence relations, like $a_n = 2a_{n-1} + 1$ or $a_n = a_{n-1} + a_{n-2}$, define sequences where a term depends on previous terms. Induction is the primary tool used to prove that a closed-form solution (like $a_n = 2^n - 1$ for $a_n = 2a_{n-1} + 1$ with $a_0=0$) correctly solves the recurrence relation for all $n$.

## Common Pitfalls and Tips for Success

1.  **Forgetting the Base Case:** This is like not pushing the first domino. Always, always, *always* check the base case. If it fails, your entire proof is invalid.
2.  **Incorrect Inductive Hypothesis:** Make sure your inductive hypothesis ($P(k)$ is true, or $P(i)$ is true for $n_0 \le i \le k$) is stated correctly.
3.  **Algebraic Errors:** The inductive step often requires careful algebraic manipulation. Double-check your steps, especially when factoring or dealing with exponents.
4.  **Not Using the Inductive Hypothesis:** The most common mistake in the inductive step is to prove $P(k+1)$ without actually using the assumption that $P(k)$ (or the previous cases) are true. You must show how the assumed truth of the previous case(s) *leads* to the truth of the current case.
5.  **Confusing Weak and Strong Induction:** While equivalent, choose the form that makes your proof easiest. If $P(k+1)$ clearly depends on multiple preceding cases, reach for strong induction.
6.  **"Proof by Example" Fallacy:** Induction proves for *all* integers $n \ge n_0$. Showing it works for $n=5$ and $n=6$ is not a proof. It's just a good way to test your understanding and potentially find your base cases or understand the inductive step.

**Exam Tip:** When asked to prove a statement using induction, explicitly state:
*   The statement $P(n)$.
*   The base case and show it's true.
*   The inductive hypothesis.
*   The inductive step, clearly showing how the hypothesis leads to the conclusion for $P(k+1)$.
*   A concluding sentence.

## Summary of Key Concepts

*   **Mathematical Induction:** A powerful proof technique for statements about integers.
*   **Weak Induction:** Requires proving a base case $P(n_0)$ and showing $P(k) \implies P(k+1)$ for $k \ge n_0$.
*   **Strong Induction:** Requires proving a base case $P(n_0)$ and showing that if $P(i)$ is true for all $n_0 \le i \le k$, then $P(k+1)$ is true for $k \ge n_0$.
*   **Inductive Hypothesis:** The assumption that $P(k)$ (or previous cases) is true.
*   **Base Case:** The starting point of the induction.
*   **Inductive Step:** The step that shows the implication from one case to the next.

Remember, induction is about establishing a chain reaction of truth. Get the first domino to fall, and ensure that any falling domino will topple the next, and you've proven your statement for all subsequent dominoes!

---

## Sample Questions and Answers

**Question 1 (Conceptual):**
Explain the difference between weak and strong induction. Which one is more powerful, and why?

**Answer:**
The core difference lies in the **inductive hypothesis**.
*   **Weak Induction:** Assumes only that $P(k)$ is true to prove $P(k+1)$.
*   **Strong Induction:** Assumes that $P(i)$ is true for *all* integers $i$ from the base case $n_0$ up to $k$ (i.e., $P(n_0) \land P(n_0+1) \land \dots \land P(k)$) to prove $P(k+1)$.

Neither induction principle is strictly more powerful than the other in terms of the types of statements they can prove. They are logically equivalent. Any statement provable by strong induction can be proven by weak induction, and vice versa. The choice between them often depends on which formulation makes the inductive step easier to construct. Strong induction is naturally suited for problems where the solution to a case $k+1$ depends on the solutions of multiple preceding cases.

---

**Question 2 (Exam-Oriented - Weak Induction):**
Prove that the sum of the first $n$ odd positive integers is $n^2$. That is, prove $1 + 3 + 5 + \dots + (2n-1) = n^2$ for all integers $n \ge 1$.

**Answer:**
Let $P(n)$ be the statement: $1 + 3 + 5 + \dots + (2n-1) = n^2$.

**1. Base Case:**
For $n=1$, the statement $P(1)$ is: $1 = 1^2$, which is $1=1$. This is true.

**2. Inductive Hypothesis:**
Assume $P(k)$ is true for some integer $k \ge 1$. That is, assume:
$1 + 3 + 5 + \dots + (2k-1) = k^2$.

**3. Inductive Step:**
We need to show that $P(k+1)$ is true. $P(k+1)$ states:
$1 + 3 + 5 + \dots + (2k-1) + (2(k+1)-1) = (k+1)^2$.
The last term is $(2k+2-1) = 2k+1$. So we need to show:
$1 + 3 + 5 + \dots + (2k-1) + (2k+1) = (k+1)^2$.

Let's start with the left-hand side and use our inductive hypothesis:
$(1 + 3 + 5 + \dots + (2k-1)) + (2k+1)$
$= k^2 + (2k+1)$  (Using the inductive hypothesis)
$= k^2 + 2k + 1$
$= (k+1)^2$  (Factoring the quadratic)

This is the right-hand side of $P(k+1)$. Thus, we have shown that if $P(k)$ is true, then $P(k+1)$ is true.

**Conclusion:**
By the principle of mathematical induction, $1 + 3 + 5 + \dots + (2n-1) = n^2$ for all integers $n \ge 1$.

---

**Question 3 (Exam-Oriented - Strong Induction):**
Use strong induction to prove that any integer $n \ge 2$ can be written as a product of primes.

**Answer:**
Let $P(n)$ be the statement: "Integer $n$ can be written as a product of primes." We want to prove this for all integers $n \ge 2$.

**1. Base Case:**
For $n=2$, $P(2)$ states that 2 can be written as a product of primes. Since 2 is itself a prime number, it is considered a product of one prime. Thus, $P(2)$ is true.

**2. Inductive Hypothesis:**
Assume that for some integer $k \ge 2$, $P(i)$ is true for all integers $i$ such that $2 \le i \le k$. This means every integer from 2 to $k$ can be written as a product of primes.

**3. Inductive Step:**
We need to show that $P(k+1)$ is true. Consider the integer $k+1$.
There are two possibilities for $k+1$:

*   **Case 1: $k+1$ is a prime number.**
    If $k+1$ is prime, then it is a product of one prime (itself). So, $P(k+1)$ is true.

*   **Case 2: $k+1$ is a composite number.**
    If $k+1$ is composite, then it can be written as a product of two integers $a$ and $b$, where $1 < a < k+1$ and $1 < b < k+1$.
    Since $1 < a < k+1$, it means $a$ is an integer in the range $2 \le a \le k$.
    By our inductive hypothesis, since $a$ is in this range, $P(a)$ is true, meaning $a$ can be written as a product of primes: $a = p_1 p_2 \dots p_m$.
    Similarly, since $1 < b < k+1$, it means $b$ is an integer in the range $2 \le b \le k$.
    By our inductive hypothesis, $P(b)$ is true, meaning $b$ can be written as a product of primes: $b = q_1 q_2 \dots q_r$.
    Now, $k+1 = ab = (p_1 p_2 \dots p_m)(q_1 q_2 \dots q_r)$.
    This shows that $k+1$ can be written as a product of primes, so $P(k+1)$ is true.

In both cases, $P(k+1)$ is true.

**Conclusion:**
By the principle of strong mathematical induction, every integer $n \ge 2$ can be written as a product of primes.

---

**Question 4 (Application to Recurrence Relations):**
A sequence is defined by $a_0 = 3$ and $a_n = 2a_{n-1} + 1$ for $n \ge 1$. Use induction to prove that $a_n = 2^{n+1} - 1$.

**Answer:**
The statement to prove is $P(n): a_n = 2^{n+1} - 1$ for $n \ge 0$.

**1. Base Case:**
For $n=0$, the definition gives $a_0 = 3$.
The formula gives $a_0 = 2^{0+1} - 1 = 2^1 - 1 = 2 - 1 = 1$.
Wait, there's a mismatch! $3 \ne 1$. Let's re-read the question.

*(Self-correction: It's crucial to get the base case right. If the formula doesn't match the definition, the formula is likely incorrect for the given recurrence and base case, or there's a typo in the question. Let's assume there's a typo and the formula should be $a_n = 2^{n+1} - 1$. No, that's what's given. Let's check the recurrence and definition again. If $a_0=3$, then $a_1 = 2(3)+1=7$. The formula gives $a_1 = 2^{1+1}-1 = 2^2-1 = 4-1=3$. This still doesn't match.)*

*(Let's try to derive the formula myself for $a_0=3$ and $a_n = 2a_{n-1} + 1$.
$a_0 = 3$
$a_1 = 2(3)+1 = 7$
$a_2 = 2(7)+1 = 15$
$a_3 = 2(15)+1 = 31$
The sequence is 3, 7, 15, 31...
This looks like $2^1-1, 2^2-1, 2^3-1, 2^4-1$ if indexed from $a_0=1$.
If $a_0=1$, then $a_1=3, a_2=7, a_3=15$. The formula $a_n = 2^{n+1}-1$ works for $a_0=1$.

Let's re-evaluate the proposed formula $a_n = 2^{n+1} - 1$ for the given $a_0=3$ and $a_n = 2a_{n-1} + 1$.
If $a_n = C \cdot 2^n - 1$ for some constant $C$.
$a_0 = C \cdot 2^0 - 1 = C - 1$. If $a_0=3$, then $C-1=3$, so $C=4$.
This suggests the formula might be $a_n = 4 \cdot 2^n - 1 = 2^2 \cdot 2^n - 1 = 2^{n+2} - 1$.

Let's test this derived formula $a_n = 2^{n+2} - 1$ for $a_0=3$ and $a_n = 2a_{n-1} + 1$.
Base Case ($n=0$): $a_0 = 2^{0+2} - 1 = 2^2 - 1 = 4 - 1 = 3$. This matches the given $a_0$.

Now, let's prove $a_n = 2^{n+2} - 1$ using induction.

**1. Base Case:**
For $n=0$, $a_0 = 3$. The formula gives $2^{0+2} - 1 = 2^2 - 1 = 4 - 1 = 3$. The base case holds.

**2. Inductive Hypothesis:**
Assume $P(k)$ is true for some integer $k \ge 0$. That is, assume $a_k = 2^{k+2} - 1$.

**3. Inductive Step:**
We need to show $P(k+1)$ is true, i.e., $a_{k+1} = 2^{(k+1)+2} - 1 = 2^{k+3} - 1$.
From the recurrence relation:
$a_{k+1} = 2a_k + 1$.
Now, substitute our inductive hypothesis for $a_k$:
$a_{k+1} = 2(2^{k+2} - 1) + 1$
$a_{k+1} = 2 \cdot 2^{k+2} - 2 \cdot 1 + 1$
$a_{k+1} = 2^{k+2+1} - 2 + 1$
$a_{k+1} = 2^{k+3} - 1$.
This matches the formula for $P(k+1)$.

**Conclusion:**
By the principle of mathematical induction, $a_n = 2^{n+2} - 1$ for all integers $n \ge 0$.

*(Note to student: This question highlights the importance of verifying the base case and ensuring the formula provided correctly matches the recursive definition. Often, problems like this in exams are carefully constructed so the given formula *does* match the definition.)*
