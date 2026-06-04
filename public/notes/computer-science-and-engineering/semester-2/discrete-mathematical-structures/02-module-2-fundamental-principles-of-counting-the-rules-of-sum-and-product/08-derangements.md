---
title: "Derangements"
subject: "DISCRETE MATHEMATICAL STRUCTURES"
module: "Module 2: Fundamental Principles of Counting: The Rules of Sum and Product"
branch: "Computer Science and Engineering"
semester: 2
topicId: "68b45b6f58474a0b135b6006"
status: "completed"
scrapedAt: "2026-05-20T16:32:23.557Z"
---
# DISCRETE MATHEMATICAL STRUCTURES - Module 2: Fundamental Principles of Counting

## Topic: Derangements – When Nothing Stays in Place!

Welcome back, everyone! In our journey through the fascinating world of counting, we've already explored the powerful Rules of Sum and Product. Today, we’re going to dive into a very specific, yet incredibly important and often counter-intuitive, counting problem: **Derangements**.

Think about this: you have a stack of letters, each addressed to a specific person, and a matching set of envelopes. You want to put the letters into the envelopes, but, as a mischievous trick, you decide to put *every single letter into the wrong envelope*. How many ways can you do this? This, my friends, is the essence of a derangement!

### 1. What Exactly is a Derangement? (Connecting to CO2)

Before we get too deep, let's formalize this. A **derangement** of a set of objects is a permutation of the elements of the set, such that *no element appears in its original position*.

Let's say we have a set $S = \{1, 2, 3, \dots, n\}$. A permutation of $S$ is an arrangement of its elements. For example, if $n=3$, the set is $\{1, 2, 3\}$. The possible permutations are:
* (1, 2, 3) - Here, 1 is in position 1, 2 in position 2, 3 in position 3. Nothing moved!
* (1, 3, 2) - Here, 1 is in its original position.
* (2, 1, 3) - Here, 3 is in its original position.
* (2, 3, 1) - Here, *no element* is in its original position. This is a derangement!
* (3, 1, 2) - Here, *no element* is in its original position. This is also a derangement!
* (3, 2, 1) - Here, 2 is in its original position.

So, for $n=3$, there are 2 derangements.

This concept directly ties into **CO2: Apply fundamental counting principles, including permutations, combinations, and the pigeonhole principle, to solve problems related to combinatorial analysis and discrete structures.** Derangements are a specific type of permutation, and understanding how to count them is a key skill in combinatorial analysis.

### 2. Visualizing Derangements: The Hat-Check Problem (Relatable Example)

A classic way to think about derangements is the **hat-check problem**. Imagine a party with $n$ gentlemen, each leaving their hat at the coat check. When the hats are returned, they are given back randomly, one to each gentleman. What is the probability that *no gentleman receives his own hat*? This probability is directly related to the number of derangements.

Let's try a slightly more engaging scenario. Suppose we have four friends: Alice, Bob, Carol, and David. They decide to exchange gifts. Each person is supposed to give a gift to one other person, and each person is supposed to receive exactly one gift. Now, imagine they agree that *no one should receive a gift from themselves* (which is a bit strange, but for the sake of the example!). If they randomly distribute the gifts, how many ways can this happen so that *nobody gets their own gift back*?

This is a derangement problem for $n=4$. We'll figure out the exact number later, but you can see how this applies to real-world (or at least, party-world!) situations.

### 3. Counting Derangements: The Subfactorial (Introducing the Formula)

So, how do we count these elusive derangements? There isn't a simple direct application of the sum or product rules here, as the condition "no element in its original position" makes things tricky. We often use a technique called the **Principle of Inclusion-Exclusion** to derive the formula for derangements. This is a powerful tool in combinatorics, and it helps us count objects that satisfy certain properties (or, in this case, *don't* satisfy certain properties).

Let $D_n$ (or sometimes denoted as $!n$ or $d_n$) be the number of derangements of $n$ elements. The formula for $D_n$ is derived using inclusion-exclusion and looks like this:

$D_n = n! \left( 1 - \frac{1}{1!} + \frac{1}{2!} - \frac{1}{3!} + \dots + (-1)^n \frac{1}{n!} \right)$

This can also be written as:

$D_n = n! \sum_{k=0}^{n} \frac{(-1)^k}{k!}$

Let's unpack this formula, as it's crucial for exams and understanding.

*   **$n!$**: This is the total number of permutations without any restrictions.
*   **The sum part $\sum_{k=0}^{n} \frac{(-1)^k}{k!}$**: This is the alternating sum of reciprocals of factorials. As $n$ gets larger, this sum approaches $1/e$ (where $e$ is Euler's number, approximately 2.71828). So, for large $n$, $D_n \approx n!/e$.

**Why this formula works (Conceptual Link to Inclusion-Exclusion):**

Think about the total permutations ($n!$). We want to subtract those where *at least one* element is in its original place. But if we just subtract all permutations with item 1 fixed, item 2 fixed, etc., we've subtracted permutations with two items fixed too many times. Inclusion-Exclusion systematically corrects for this over-counting.

This formula is a direct outcome of applying combinatorial principles, which aligns with **CO2**.

### 4. Calculating Derangements: Examples in Action

Let's calculate the first few values of $D_n$. This is often tested in exams!

*   **$D_0$**: How many ways can you derange an empty set? There's only one way: do nothing! So, $D_0 = 1$.
    Using the formula: $D_0 = 0! \left( \frac{(-1)^0}{0!} \right) = 1 \times \frac{1}{1} = 1$.

*   **$D_1$**: For a single element $\{1\}$, the only permutation is (1). Here, 1 is in its original position. So, there are no derangements. $D_1 = 0$.
    Using the formula: $D_1 = 1! \left( \frac{(-1)^0}{0!} + \frac{(-1)^1}{1!} \right) = 1 \times \left( \frac{1}{1} - \frac{1}{1} \right) = 1 \times 0 = 0$.

*   **$D_2$**: For $\{1, 2\}$, permutations are (1, 2) and (2, 1).
    *   (1, 2): 1 is in position 1, 2 is in position 2. Not a derangement.
    *   (2, 1): 1 is in position 2, 2 is in position 1. *This is a derangement*.
    So, $D_2 = 1$.
    Using the formula: $D_2 = 2! \left( \frac{(-1)^0}{0!} + \frac{(-1)^1}{1!} + \frac{(-1)^2}{2!} \right) = 2 \times \left( 1 - 1 + \frac{1}{2} \right) = 2 \times \frac{1}{2} = 1$.

*   **$D_3$**: For $\{1, 2, 3\}$, we found $D_3 = 2$ earlier (permutations (2, 3, 1) and (3, 1, 2)).
    Using the formula: $D_3 = 3! \left( \frac{(-1)^0}{0!} + \frac{(-1)^1}{1!} + \frac{(-1)^2}{2!} + \frac{(-1)^3}{3!} \right) = 6 \times \left( 1 - 1 + \frac{1}{2} - \frac{1}{6} \right) = 6 \times \left( \frac{3}{6} - \frac{1}{6} \right) = 6 \times \frac{2}{6} = 2$.

*   **$D_4$**: For our Alice, Bob, Carol, David example:
    $D_4 = 4! \left( 1 - \frac{1}{1!} + \frac{1}{2!} - \frac{1}{3!} + \frac{1}{4!} \right) = 24 \times \left( 1 - 1 + \frac{1}{2} - \frac{1}{6} + \frac{1}{24} \right)$
    $D_4 = 24 \times \left( \frac{12}{24} - \frac{4}{24} + \frac{1}{24} \right) = 24 \times \frac{9}{24} = 9$.
    So, there are 9 ways for Alice, Bob, Carol, and David to exchange gifts such that no one gets their own gift back.

**Quick Recall Tip for Exams:** You might be asked to derive or use the formula for $D_n$. It's good to remember the first few values: $D_0=1, D_1=0, D_2=1, D_3=2, D_4=9, D_5=44, D_6=265$. These can sometimes be useful for verification or quick answers.

### 5. A Recurrence Relation for Derangements (Deeper Understanding)

The textbooks by Grimaldi and Veerarajan often introduce recurrence relations for combinatorial objects. Derangements also have a very elegant recurrence relation. This is important for understanding how $D_n$ relates to previous values, and it's a concept that ties into **CO4: Explain the concepts of... methods for solving first and second-order linear recurrence relations...**

Consider the first element, '1'. In a derangement of $\{1, 2, \dots, n\}$, '1' must go to some position $k$, where $k \neq 1$. There are $n-1$ choices for $k$. Let's say '1' goes to position $k$. Now, we have two cases for what happens to element $k$:

**Case 1: Element $k$ goes to position 1.**
If '1' goes to position $k$, and $k$ goes to position 1, then we have effectively swapped 1 and $k$. The remaining $n-2$ elements ($2, 3, \dots, k-1, k+1, \dots, n$) must also be deranged among their original positions. The number of ways to do this is $D_{n-2}$. Since there were $n-1$ choices for $k$, this case contributes $(n-1)D_{n-2}$ derangements.

**Case 2: Element $k$ does *not* go to position 1.**
If '1' goes to position $k$, and $k$ does *not* go to position 1, we can think of this slightly differently. We have $n-1$ elements left ($2, 3, \dots, n$) and $n-1$ positions left (all positions except $k$). We need to arrange these $n-1$ elements into the $n-1$ available positions such that:
*   Element $i$ (for $i \neq 1, k$) does not go to position $i$.
*   Element $k$ does not go to position 1.

This looks a bit messy, but consider relabeling. Imagine we want to derange the set $\{2, 3, \dots, n\}$ into positions $\{1, 2, \dots, k-1, k+1, \dots, n\}$. If we think of position '1' as the "forbidden" position for element $k$, and position '$i$' as forbidden for element '$i$' (for $i \neq 1, k$), this is exactly like deranging the $n-1$ elements $\{2, 3, \dots, n\}$ into $n-1$ positions, where element $k$ is not allowed in position 1. This is precisely the definition of a derangement of $n-1$ elements. The number of ways for this case is $D_{n-1}$. Again, since there were $n-1$ choices for $k$, this case contributes $(n-1)D_{n-1}$ derangements.

Combining both cases, we get the recurrence relation:

$D_n = (n-1)(D_{n-1} + D_{n-2})$ for $n \geq 2$.

With base cases $D_0 = 1$ and $D_1 = 0$.

Let's check this:
*   $D_2 = (2-1)(D_1 + D_0) = 1(0+1) = 1$. Correct!
*   $D_3 = (3-1)(D_2 + D_1) = 2(1+0) = 2$. Correct!
*   $D_4 = (4-1)(D_3 + D_2) = 3(2+1) = 3(3) = 9$. Correct!

This recurrence relation is often found in texts like Grimaldi's, providing a different perspective on counting derangements and serving as an excellent example of applying recurrence relations, linking to **CO4**.

### 6. Alternative Formula and its Relation to $D_n$ (Deeper Insight)

There's another way to express $D_n$ from the recurrence:

$D_n = n D_{n-1} + (-1)^n$ for $n \geq 1$.

Let's verify this:
*   $D_1 = 1 \cdot D_0 + (-1)^1 = 1 \cdot 1 - 1 = 0$. Correct!
*   $D_2 = 2 \cdot D_1 + (-1)^2 = 2 \cdot 0 + 1 = 1$. Correct!
*   $D_3 = 3 \cdot D_2 + (-1)^3 = 3 \cdot 1 - 1 = 2$. Correct!
*   $D_4 = 4 \cdot D_3 + (-1)^4 = 4 \cdot 2 + 1 = 8 + 1 = 9$. Correct!

This simpler recurrence is derived from the first one and is very useful for quick calculations or proving properties. It elegantly shows how the number of derangements grows.

### 7. Connection to Course Outcomes

Let's explicitly map how this topic helps achieve our course outcomes:

*   **CO1: Apply logical reasoning and formal methods...**: Derangements, especially their derivation using inclusion-exclusion, are a prime example of applying logical reasoning and formal methods to solve a counting problem. Understanding *why* the formula works requires careful logical steps.

*   **CO2: Apply fundamental counting principles...**: This is the most direct connection. We are applying principles of permutations and using a derived formula (which itself stems from basic counting) to solve a specific combinatorial problem.

*   **CO4: Explain the concepts of... methods for solving first and second-order linear recurrence relations...**: The recurrence relation $D_n = (n-1)(D_{n-1} + D_{n-2})$ and $D_n = n D_{n-1} + (-1)^n$ are perfect examples of recurrence relations. Understanding these helps build foundational knowledge for solving other recurrence problems.

### 8. Common Pitfalls and Exam Focus

*   **Confusing derangements with permutations:** Remember, derangements are a *subset* of permutations with a specific restriction.
*   **Forgetting the base cases:** $D_0=1$ and $D_1=0$ are crucial for using recurrence relations.
*   **Errors in applying the inclusion-exclusion formula:** Be careful with signs and factorials.
*   **Using the approximate formula $n!/e$ for exact counts:** This is only an approximation for large $n$. Exams usually require exact counts.

The derivation of the derangement formula using inclusion-exclusion, the direct formula itself, the recurrence relations, and applying these to specific problems are common themes in exams. Be prepared to calculate $D_n$ for small values of $n$ and to explain the concepts.

### 9. Summary and Takeaway

Derangements are permutations where *no element* stays in its original place. We can count them using the formula:

$D_n = n! \sum_{k=0}^{n} \frac{(-1)^k}{k!}$

Or, using the recurrence relations:
$D_n = (n-1)(D_{n-1} + D_{n-2})$ with $D_0=1, D_1=0$
$D_n = n D_{n-1} + (-1)^n$ with $D_0=1$

Remember these principles, and you'll be well-equipped to tackle any derangement problem!

---

## Sample Questions and Answers

**Q1. Conceptual Understanding:**
Explain the concept of a derangement and provide a real-world analogy for it.

**Answer:**
A derangement of a set of objects is a permutation of its elements such that no element appears in its original position. A common real-world analogy is the hat-check problem: if $n$ gentlemen check their hats and they are returned randomly, a derangement occurs if no gentleman receives his own hat. Another analogy is shuffling a deck of cards, where a derangement would mean that no card ends up in its original position (e.g., the 3 of hearts is not the 3rd card from the top, etc.).

**Q2. Calculation:**
Calculate the number of derangements for a set of 5 elements, $D_5$.

**Answer:**
We can use the formula:
$D_5 = 5! \left( \frac{1}{0!} - \frac{1}{1!} + \frac{1}{2!} - \frac{1}{3!} + \frac{1}{4!} - \frac{1}{5!} \right)$
$D_5 = 120 \left( 1 - 1 + \frac{1}{2} - \frac{1}{6} + \frac{1}{24} - \frac{1}{120} \right)$
$D_5 = 120 \left( \frac{60}{120} - \frac{20}{120} + \frac{5}{120} - \frac{1}{120} \right)$
$D_5 = 120 \left( \frac{44}{120} \right)$
$D_5 = 44$

Alternatively, using the recurrence $D_n = nD_{n-1} + (-1)^n$:
We know $D_4 = 9$.
$D_5 = 5 \times D_4 + (-1)^5 = 5 \times 9 - 1 = 45 - 1 = 44$.

**Q3. Derivation/Proof:**
Show that $D_n = n D_{n-1} + (-1)^n$ for $n \ge 1$.

**Answer:**
We start with the inclusion-exclusion formula:
$D_n = n! \sum_{k=0}^{n} \frac{(-1)^k}{k!} = n! \left( \frac{(-1)^0}{0!} + \frac{(-1)^1}{1!} + \dots + \frac{(-1)^{n-1}}{(n-1)!} + \frac{(-1)^n}{n!} \right)$
$D_n = n! \left( \sum_{k=0}^{n-1} \frac{(-1)^k}{k!} + \frac{(-1)^n}{n!} \right)$
$D_n = n! \sum_{k=0}^{n-1} \frac{(-1)^k}{k!} + n! \frac{(-1)^n}{n!}$
$D_n = n \left( (n-1)! \sum_{k=0}^{n-1} \frac{(-1)^k}{k!} \right) + (-1)^n$

By definition, $D_{n-1} = (n-1)! \sum_{k=0}^{n-1} \frac{(-1)^k}{k!}$.
Substituting this into the equation:
$D_n = n \times D_{n-1} + (-1)^n$.
This holds for $n \ge 1$, given the base case $D_0=1$.

**Q4. Application/Problem Solving:**
Six friends attend a party and each brings a homemade cookie to share. They decide to randomly distribute the cookies such that no one gets their own cookie back. How many ways can this be done?

**Answer:**
This is a derangement problem for $n=6$. We need to find $D_6$.
We can use the recurrence $D_n = n D_{n-1} + (-1)^n$.
We know $D_4 = 9$ and $D_5 = 44$.
$D_6 = 6 \times D_5 + (-1)^6$
$D_6 = 6 \times 44 + 1$
$D_6 = 264 + 1$
$D_6 = 265$

Therefore, there are 265 ways the cookies can be distributed such that no one gets their own cookie back.
