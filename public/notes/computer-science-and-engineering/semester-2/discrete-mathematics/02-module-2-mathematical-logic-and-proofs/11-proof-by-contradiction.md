---
title: "Proof by Contradiction"
subject: "DISCRETE MATHEMATICS"
module: "Module 2: Mathematical logic and proofs"
branch: "Computer Science and Engineering"
semester: 2
topicId: "68b45b6f58474a0b135b5fa2"
status: "completed"
scrapedAt: "2026-05-20T16:33:03.640Z"
---
Absolutely! Let's dive into the fascinating world of Proof by Contradiction in Discrete Mathematics. This is a powerful technique, and once you grasp it, you'll find yourself using it more and more.

---

## Module 2: Mathematical Logic and Proofs

### Topic: Proof by Contradiction

Welcome, everyone! Today, we're going to explore one of the most elegant and, frankly, a bit tricky, methods of proving mathematical statements: **Proof by Contradiction**. This technique is a cornerstone in discrete mathematics and is crucial for understanding many algorithms and theoretical concepts in computer science. It directly supports our **CO1: Check the validity of predicates in Propositional and Quantified Propositional Logic using truth tables, deductive reasoning and inference theory**. By using contradiction, we are essentially employing a form of deductive reasoning to demonstrate that a statement must be true because its opposite leads to an illogical conclusion.

Think of it like a detective solving a crime. The detective doesn't necessarily prove who *did* commit the crime directly at first. Instead, they might gather evidence that eliminates all *other* suspects. Once they've shown that everyone else *couldn't* have done it, the remaining person must be the culprit. Proof by contradiction works in a very similar, logical fashion.

### What is Proof by Contradiction?

At its heart, proof by contradiction, also known as *reductio ad absurdum* (Latin for "reduction to absurdity"), is a method of proving a statement $P$ by showing that assuming the negation of $P$ (i.e., $\neg P$) leads to a contradiction. A contradiction is a statement that is always false, like "It is raining and it is not raining" ($Q \wedge \neg Q$).

So, the structure of a proof by contradiction is as follows:

1.  **Assume the opposite:** You start by assuming that the statement you want to prove is *false*. If you want to prove $P$, you assume $\neg P$.
2.  **Derive a contradiction:** Using logical steps, definitions, axioms, and previously proven theorems, you logically deduce consequences from your assumption ($\neg P$). Your goal is to arrive at a statement that is inherently contradictory (e.g., $Q \wedge \neg Q$).
3.  **Conclude the original statement:** Since assuming $\neg P$ led to a contradiction, and contradictions are impossible in a consistent logical system, your initial assumption ($\neg P$) must be false. If $\neg P$ is false, then $P$ must be true.

This ties directly into the principles of propositional logic. If we have a statement $P$, and we can show that $\neg P \implies \text{False}$, then by the principle of **implication equivalence** ($(\neg P \implies \text{False}) \equiv P$), we have proven $P$. This is a fundamental rule of inference.

Rosen, in Chapter 1 of his "Discrete Mathematics and its Applications," discusses the importance of logical reasoning, and proof by contradiction is a prime example of how we build sound arguments. He emphasizes that proofs are about establishing the truth of statements rigorously.

### Why is Proof by Contradiction Useful?

You might ask, "Why not just prove the statement directly?" Well, sometimes, proving a statement directly is incredibly difficult, if not impossible, using the tools we have. The "opposite" of a statement might be much easier to work with, and the contradiction it leads to might be immediately obvious.

Consider scenarios where proving something is true requires demonstrating the existence of something without a clear way to construct it. The negation might be easier to refute.

This technique is particularly powerful when dealing with statements about:

*   **Non-existence:** Proving that something *does not* exist is often best done by contradiction.
*   **Irrationality/Uniqueness:** Showing a number is irrational or that a solution is unique.
*   **Properties of Sets:** Proving that a certain property holds for all elements, or that no such element exists.

### Example 1: The Square Root of 2 is Irrational

This is a classic and a must-know example. Let's use proof by contradiction to show that $\sqrt{2}$ is irrational.

**What does it mean for a number to be rational?** A rational number can be expressed as a fraction $p/q$, where $p$ and $q$ are integers, and $q \neq 0$. We also assume that the fraction is in its **simplest form**, meaning that $p$ and $q$ have no common factors other than 1. That is, their greatest common divisor (GCD) is 1. This "simplest form" part is crucial for our contradiction.

**The Statement to Prove ($P$):** $\sqrt{2}$ is irrational.

**Step 1: Assume the Opposite ($\neg P$):**
Assume that $\sqrt{2}$ is rational.
This means we can write $\sqrt{2} = \frac{p}{q}$, where $p$ and $q$ are integers, $q \neq 0$, and $\text{gcd}(p, q) = 1$.

**Step 2: Derive a Contradiction:**
If $\sqrt{2} = \frac{p}{q}$, then squaring both sides gives us:
$2 = \frac{p^2}{q^2}$
Multiplying by $q^2$, we get:
$2q^2 = p^2$

This equation tells us that $p^2$ is an even number (because it's equal to 2 times an integer).

*A key lemma we'll use here is: If the square of an integer is even, then the integer itself must be even.* (You can prove this lemma by contradiction too! Assume $n$ is odd, $n=2k+1$, then $n^2 = (2k+1)^2 = 4k^2+4k+1 = 2(2k^2+2k)+1$, which is odd. So if $n^2$ is even, $n$ cannot be odd, thus $n$ must be even.)

Since $p^2$ is even, $p$ must also be even.
If $p$ is even, then we can write $p = 2k$ for some integer $k$.

Now, substitute this back into our equation $2q^2 = p^2$:
$2q^2 = (2k)^2$
$2q^2 = 4k^2$

Divide both sides by 2:
$q^2 = 2k^2$

This new equation tells us that $q^2$ is an even number (because it's equal to 2 times an integer).
Using our lemma again, since $q^2$ is even, $q$ must also be even.

So, we've concluded that $p$ is even AND $q$ is even.
What does this mean? It means that both $p$ and $q$ have a common factor of 2.

**BUT**, in Step 1, we made the crucial assumption that the fraction $\frac{p}{q}$ was in its simplest form, meaning $\text{gcd}(p, q) = 1$. We just showed that $p$ and $q$ are *both* even, which implies they have a common factor of 2.

This is our **contradiction**! We assumed $\text{gcd}(p, q) = 1$, and our logical deductions led us to $\text{gcd}(p, q) \ge 2$. The statement "gcd(p, q) = 1" and the statement "gcd(p, q) $\ge$ 2" cannot both be true.

**Step 3: Conclude the Original Statement:**
Since our initial assumption (that $\sqrt{2}$ is rational) led to a contradiction, that assumption must be false.
Therefore, $\sqrt{2}$ must be **irrational**.

Remember this one! It's a benchmark for understanding proof by contradiction. The key was the assumption of the fraction being in simplest form, which we then violated.

### Example 2: There Are Infinitely Many Prime Numbers

This proof is attributed to Euclid and is another elegant use of contradiction. It relates to **CO1** as we are dealing with a quantified statement ("There exist infinitely many primes").

**The Statement to Prove ($P$):** There are infinitely many prime numbers.

**Step 1: Assume the Opposite ($\neg P$):**
Assume that there are only a finite number of prime numbers.
If there are finitely many primes, we can list them all: $p_1, p_2, p_3, \dots, p_n$, where $p_n$ is the largest prime number.

**Step 2: Derive a Contradiction:**
Let's construct a new number, $N$, by multiplying all these primes together and adding 1:
$N = (p_1 \times p_2 \times p_3 \times \dots \times p_n) + 1$

Now, consider this number $N$. According to the **Fundamental Theorem of Arithmetic**, every integer greater than 1 is either a prime number itself or can be represented as a unique product of prime numbers.

So, $N$ must have at least one prime factor. Let's call this prime factor $p$.

*   **Possibility A:** $p$ is one of the primes in our list ($p_1, p_2, \dots, p_n$).
    If $p$ is one of these primes, then $p$ divides the product $(p_1 \times p_2 \times \dots \times p_n)$.
    However, we also know that $N = (p_1 \times p_2 \times \dots \times p_n) + 1$.
    If $p$ divides both $N$ and $(p_1 \times p_2 \times \dots \times p_n)$, then $p$ must also divide their difference: $N - (p_1 \times p_2 \times \dots \times p_n)$.
    But this difference is just 1. So, $p$ must divide 1.
    The only prime number that divides 1 is... well, no prime number divides 1 in the way we mean it here. No prime number divides 1 cleanly. This leads to a contradiction.

*   **Possibility B:** $p$ is a prime number not in our list ($p_1, p_2, \dots, p_n$).
    This also contradicts our assumption that our list $p_1, p_2, \dots, p_n$ contained *all* prime numbers.

In both cases, we arrive at a contradiction. The number $N$ must have a prime factor, but that prime factor cannot be any of the primes in our assumed finite list.

**Step 3: Conclude the Original Statement:**
Our assumption that there is a finite number of primes led to a contradiction. Therefore, the assumption must be false.
Hence, there must be **infinitely many prime numbers**.

This proof is beautiful because it doesn't actually *find* a new prime, it just proves that if you *think* you have found all primes, you can always construct a number that *must* have a prime factor you haven't accounted for. This is great for **CO1** because it shows how we can reason about quantified statements.

### Example 3: Pigeonhole Principle (Conceptual Example)

While the Pigeonhole Principle itself is a statement, proving *its consequences* often uses contradiction. Let's illustrate how the principle works and where contradiction might arise.

The Pigeonhole Principle states: If $n$ items are put into $m$ containers, with $n > m$, then at least one container must contain more than one item.

**Statement:** In any group of 13 people, at least two of them share the same birth month.

**Understanding the mapping:**
*   **Items (Pigeons):** The 13 people.
*   **Containers (Pigeonholes):** The 12 months of the year.

Here, $n=13$ and $m=12$. Since $n > m$, by the Pigeonhole Principle, at least one month must have more than one person assigned to it.

**Proof by Contradiction:**

**Statement to Prove ($P$):** In any group of 13 people, at least two share the same birth month.

**Step 1: Assume the Opposite ($\neg P$):**
Assume that no two people in a group of 13 share the same birth month. This means *all 13 people have different birth months*.

**Step 2: Derive a Contradiction:**
If all 13 people have different birth months, it implies that we need 13 distinct birth months.
However, there are only 12 months in a year.
This is a contradiction: we cannot assign 13 different birth months if only 12 months exist.

**Step 3: Conclude the Original Statement:**
Our assumption that all 13 people have different birth months led to a contradiction. Therefore, the assumption must be false.
Hence, in any group of 13 people, at least two of them must share the same birth month.

This is a direct application of the principle, and the contradiction arises from an impossible assignment of distinct items to fewer categories. This directly relates to **CO2: Solve counting problems by applying the elementary counting techniques**. Understanding how to prove these techniques are sound (often via contradiction) is important.

### Example 4: Set Theory and Existence

Let's consider a slightly more abstract example involving sets.

**Statement to Prove ($P$):** For any two distinct sets $A$ and $B$, if $A \subseteq B$ and $B \subseteq A$, then $A = B$.

**Step 1: Assume the Opposite ($\neg P$):**
Assume that $A \neq B$, even though $A \subseteq B$ and $B \subseteq A$.
If $A \neq B$, it means that either there's an element in $A$ that's not in $B$, OR there's an element in $B$ that's not in $A$.

**Step 2: Derive a Contradiction:**
We are given:
1.  $A \subseteq B$: This means that every element $x$ in $A$ is also in $B$. (Symbolically: $\forall x (x \in A \implies x \in B)$).
2.  $B \subseteq A$: This means that every element $y$ in $B$ is also in $A$. (Symbolically: $\forall y (y \in B \implies y \in A)$).

Now, let's re-examine our assumption $\neg P$, which states $A \neq B$.
If $A \neq B$, then there must exist an element $x$ such that $(x \in A \text{ and } x \notin B)$ OR $(x \in B \text{ and } x \notin A)$.

*   **Case 1: Assume there exists an element $x$ such that $x \in A$ and $x \notin B$.**
    But we are given $A \subseteq B$. This condition ($A \subseteq B$) states that *if* $x \in A$, *then* $x \in B$.
    So, the existence of an $x$ with $x \in A$ and $x \notin B$ directly contradicts the given condition $A \subseteq B$.

*   **Case 2: Assume there exists an element $x$ such that $x \in B$ and $x \notin A$.**
    But we are given $B \subseteq A$. This condition ($B \subseteq A$) states that *if* $x \in B$, *then* $x \in A$.
    So, the existence of an $x$ with $x \in B$ and $x \notin A$ directly contradicts the given condition $B \subseteq A$.

In either case that arises from $A \neq B$, we immediately hit a contradiction with one of our given premises ($A \subseteq B$ or $B \subseteq A$).

**Step 3: Conclude the Original Statement:**
Our assumption that $A \neq B$ (given $A \subseteq B$ and $B \subseteq A$) leads to a contradiction. Therefore, the assumption must be false.
Hence, if $A \subseteq B$ and $B \subseteq A$, then $A = B$.

This proof demonstrates how assumptions about inequalities can clash with definitions of inclusions. This is a fundamental concept in set theory and is related to how we define equality of sets, a core idea in understanding relations and orderings, relevant to **CO3** and **CO4**.

### Common Pitfalls and Tips for Proof by Contradiction

1.  **Forgetting the "Simplest Form" Clause:** In the $\sqrt{2}$ proof, if you forget to mention that $p/q$ is in simplest form, you can't reach the contradiction that $p$ and $q$ are both even and thus share a factor of 2.
2.  **Confusing "Not P" with an Arbitrary False Statement:** You must negate the *entire* statement you are trying to prove. For "all $x$, $P(x)$ is true," the negation is "there exists an $x$ such that $P(x)$ is false." For "there exists an $x$, $P(x)$ is true," the negation is "for all $x$, $P(x)$ is false."
3.  **Not Reaching a True Contradiction:** A contradiction isn't just "this is inconvenient." It must be a logical impossibility like $Q \wedge \neg Q$. For example, showing that $N$ is a very large number isn't a contradiction; showing that $N$ is prime AND composite is a contradiction.
4.  **Getting Lost in the Logic:** Write down your steps clearly. What is your current assumption? What rule are you using? What conclusion does it lead to? Keep track of the initial premises you are allowed to use.

**Exam Tip:** When asked to prove something, consider if proof by contradiction is the most straightforward path. If the statement is negative (e.g., "does not exist") or involves properties that are hard to build up directly (like irrationality), contradiction is often a good choice. Always start your proof by clearly stating what you are assuming (the negation of what you want to prove).

### Summary of Proof by Contradiction

*   **When to use it:** When direct proof seems difficult, especially for statements about non-existence, irrationality, uniqueness, or when the negation of the statement is easier to analyze.
*   **How it works:**
    1.  Assume the statement to be proven is false ($\neg P$).
    2.  Derive a logical contradiction ($Q \wedge \neg Q$) from this assumption.
    3.  Conclude that the assumption must be false, meaning the original statement ($P$) is true.
*   **Key requirement:** The ability to clearly identify and articulate a contradiction. This often hinges on specific definitions or fundamental axioms.

This method is a powerful tool in your mathematical arsenal, directly enhancing your ability to reason logically and validate statements as per **CO1**. Mastering it will also help you understand the foundations of many counting principles (**CO2**) and logical structures used throughout computer science.

---

### Sample Questions and Answers

**Conceptual Question 1:** What is the fundamental principle behind proof by contradiction?

**Answer:** The fundamental principle is that if assuming a statement is false leads to a logically impossible situation (a contradiction), then the original statement must be true. This relies on the law of the excluded middle, which states that a proposition is either true or false.

**Conceptual Question 2:** Give an example of a type of statement that is often best proven using contradiction.

**Answer:** Statements asserting non-existence (e.g., "there is no largest integer") or irrationality (e.g., "$\sqrt{2}$ is irrational") are often best proven by contradiction.

**Exam-Oriented Question 1:** Prove that there is no integer $n$ such that $n^2 = 2$.

**Answer:**
We want to prove: There is no integer $n$ such that $n^2 = 2$.
This is equivalent to proving: For all integers $n$, $n^2 \neq 2$.

**Step 1: Assume the opposite.**
Assume there *does* exist an integer $n$ such that $n^2 = 2$.

**Step 2: Derive a contradiction.**
If $n^2 = 2$, then $n$ must be $\sqrt{2}$ or $-\sqrt{2}$.
We know from our earlier discussion that $\sqrt{2}$ is irrational. An irrational number cannot be an integer.
Therefore, if $n^2 = 2$, $n$ cannot be an integer.
This contradicts our initial assumption that $n$ *is* an integer.

**Step 3: Conclude the original statement.**
Our assumption that there exists an integer $n$ such that $n^2 = 2$ leads to a contradiction (that $n$ must be an integer and $n$ cannot be an integer).
Therefore, the assumption must be false.
Hence, there is no integer $n$ such that $n^2 = 2$.

**Exam-Oriented Question 2:** Prove that if $x$ is a real number such that $x^2 - 6x + 5 = 0$, then $x$ is not equal to $3$.

**Answer:**
We want to prove: If $x^2 - 6x + 5 = 0$, then $x \neq 3$.

**Step 1: Assume the opposite.**
Assume that there exists a real number $x$ such that $x^2 - 6x + 5 = 0$, AND that $x = 3$.

**Step 2: Derive a contradiction.**
If $x = 3$, let's substitute this into the equation $x^2 - 6x + 5 = 0$:
$(3)^2 - 6(3) + 5 = 0$
$9 - 18 + 5 = 0$
$-9 + 5 = 0$
$-4 = 0$

This statement, $-4 = 0$, is a clear contradiction. It is logically impossible.

**Step 3: Conclude the original statement.**
Our assumption that ($x^2 - 6x + 5 = 0$ AND $x = 3$) leads to a contradiction ($-4 = 0$).
Therefore, the assumption must be false.
Since the premise $x^2 - 6x + 5 = 0$ is given, the part of the assumption that must be false is $x = 3$.
Hence, if $x^2 - 6x + 5 = 0$, then $x \neq 3$.

---
I hope this detailed explanation of Proof by Contradiction makes sense and feels intuitive! It's a technique that truly showcases the power and beauty of logical deduction. Keep practicing with these examples and you'll become quite adept at it!
