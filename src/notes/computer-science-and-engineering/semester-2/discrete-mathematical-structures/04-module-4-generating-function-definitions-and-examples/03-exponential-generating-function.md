---
title: "Exponential Generating Function"
subject: "DISCRETE MATHEMATICAL STRUCTURES"
module: "Module 4: Generating Function: Definitions and Examples"
branch: "Computer Science and Engineering"
semester: 2
topicId: "68b45b6f58474a0b135b6018"
status: "completed"
scrapedAt: "2026-05-20T16:32:35.242Z"
---
# Module 4: Generating Functions: Definitions and Examples
## Topic: Exponential Generating Functions

Hello everyone! Welcome back to our journey through Discrete Mathematical Structures. Today, we're diving deeper into the fascinating world of generating functions, and specifically, we're going to explore **Exponential Generating Functions (EGFs)**. We've already touched upon ordinary generating functions, which are fantastic for many combinatorial problems. But as we'll see, EGFs have a special role to play when our counting problems involve **arrangements or permutations**, especially when dealing with distinct objects or positions.

Think of it this way: if ordinary generating functions are like telling us "how many ways can we select items?", exponential generating functions are more like asking "how many ways can we arrange these selected items in specific positions?". This distinction is crucial and will become clearer as we go.

### 1. What is an Exponential Generating Function?

Let's start with a formal definition, but don't let it intimidate you! We'll break it down with examples.

An **exponential generating function (EGF)** for a sequence of numbers $\{a_n\}_{n=0}^\infty$ is defined as:

$$
EGF(x) = \sum_{n=0}^\infty a_n \frac{x^n}{n!}
$$

Notice the key difference from ordinary generating functions: the presence of the $\frac{x^n}{n!}$ term instead of just $x^n$. This "extra" $n!$ in the denominator is what gives EGFs their power in dealing with permutations.

Let's unpack this definition and see how it connects with our course objectives.

*   **CO2 (Counting Principles):** EGFs are deeply rooted in the fundamental counting principles, particularly permutations. When we count arrangements, factorials often appear. The $\frac{x^n}{n!}$ term is precisely designed to capture this factorial behavior, making it easier to model problems involving ordered selections.
*   **CO4 (Recurrence Relations & Generating Functions):** Just like ordinary generating functions, EGFs can be used to solve linear recurrence relations, especially those that arise from problems with permutations. They offer a different, sometimes more intuitive, way to handle such problems compared to traditional methods.

**Why the $\frac{x^n}{n!}$?**

Let's consider a simple scenario. Suppose we want to count the number of ways to choose $n$ distinct items from a set of $k$ distinct items and arrange them in a line. This is a permutation, denoted as $P(k, n)$ or $_kP_n$, and the formula is $\frac{k!}{(k-n)!}$.

Now, if we were to build an EGF for a sequence $a_n$ where $a_n$ represents the number of ways to do something with $n$ distinct objects, the $\frac{x^n}{n!}$ term helps us isolate the part that corresponds to *arrangements*. When we multiply EGFs, the convolution operation naturally aligns with the rules of counting permutations.

### 2. Relating EGFs to Combinatorial Problems: The Heart of the Matter

The real power of EGFs lies in their ability to model combinatorial problems involving arrangements. Let's explore this with some illustrative examples.

#### Example 1: Permutations of Distinct Objects

Suppose we want to form words of length $k$ using letters from the English alphabet, where each letter can be used at most once. How many such words can we form? This is simply the number of permutations of $k$ items chosen from 26 distinct letters, which is $P(26, k) = \frac{26!}{(26-k)!}$.

Let's try to construct an EGF for the number of permutations of $k$ distinct items chosen from a set of size $n$. This is $P(n, k) = \frac{n!}{(n-k)!}$.

Consider a simpler problem: how many ways can we arrange $k$ distinct items selected from a set of $n$ distinct items? This is precisely $P(n, k)$.

Let's think about building words. If we have a set of distinct letters, say $\{A, B, C\}$, and we want to form words of length 2:
*   AB
*   AC
*   BA
*   BC
*   CA
*   CB
There are $P(3, 2) = \frac{3!}{1!} = 6$ ways.

Now, let's consider the EGF for sequences where $a_n$ is the number of ways to arrange $n$ distinct objects. This is $n!$.
So, the EGF would be:
$$
\sum_{n=0}^\infty n! \frac{x^n}{n!} = \sum_{n=0}^\infty x^n = \frac{1}{1-x}
$$
This looks like an ordinary generating function result, but wait! The coefficient of $\frac{x^n}{n!}$ in this EGF is $n!$, which is indeed the number of ways to arrange $n$ distinct objects.

**Key Insight:** If $a_n$ is the number of ways to *arrange* $n$ distinct items with certain properties, then the EGF is $\sum_{n=0}^\infty a_n \frac{x^n}{n!}$.

#### Example 2: Distributing Distinct Objects into Distinct Boxes

Let's say we have $n$ distinct balls and $k$ distinct boxes. We want to place exactly $m$ balls into one specific box, say box 1.
First, we need to *choose* $m$ balls from the $n$ distinct balls. The number of ways to do this is $\binom{n}{m}$.
Then, we need to *arrange* these $m$ chosen balls into the box (if the order within the box matters, which is usually implied in problems leading to EGFs). However, for a single box, the arrangement might not matter. The key is *which* $m$ balls go into box 1. This is $\binom{n}{m}$.

This is where we need to be careful with problem interpretation. EGFs are typically used when the *order of selection matters* and *objects are distinct*.

Let's rephrase a typical problem that calls for EGFs:
"How many ways can we form a $k$-letter word using letters from the alphabet $\{A, B, C, \dots, Z\}$ such that no letter is repeated?"
This is $P(26, k)$.

Consider the EGF for selecting and arranging $k$ distinct items from a set of $n$ distinct items.
Let $a_k$ be the number of ways to arrange $k$ distinct items. This is $k!$.
The EGF for the sequence $a_k = k!$ is:
$$
EGF(x) = \sum_{k=0}^\infty k! \frac{x^k}{k!} = \sum_{k=0}^\infty x^k = \frac{1}{1-x}
$$
The coefficient of $\frac{x^k}{k!}$ is $k!$, which is exactly what we want for arrangements of $k$ distinct items.

Now, if we have a specific set of $n$ distinct items, and we want to form arrangements of length $k$ using these items (no repetition), the number of ways is $P(n, k)$.
The EGF for the number of permutations of $k$ items chosen from $n$ distinct items, for a fixed $n$, is related to the EGF for choosing items and then arranging them.

Let's look at Grimaldi (5th Ed.) Chapter 8, Section 8.2, on Exponential Generating Functions. Grimaldi explains that if $a_n$ is the number of ways to arrange $n$ distinct objects subject to certain conditions, then $A(x) = \sum_{n=0}^\infty a_n \frac{x^n}{n!}$ is the EGF.

**A very common scenario for EGFs:** Problems involving distributing distinct objects into distinct boxes.

Imagine we have $n$ distinct students and we want to assign them to $k$ distinct committees. Suppose each committee has specific requirements for its members, or we are interested in specific roles within committees.

Let's take a classic example: "In how many ways can we award gold, silver, and bronze medals to $n$ contestants in a race?"
Here, we have $n$ distinct contestants, and we are selecting 3 of them and assigning them specific ordered positions (gold, silver, bronze). This is a permutation $P(n, 3) = n(n-1)(n-2)$.

Let's think about the EGF for awarding *one* medal (say, gold) to one of $n$ distinct contestants.
We choose 1 contestant out of $n$, and assign them the gold medal. The number of ways is $\binom{n}{1} = n$.
The EGF for this would involve $a_k$ being the number of ways to award a "type of award" to $k$ distinct contestants.

Let's consider the number of ways to select and arrange $k$ distinct items from a set of $n$ distinct items.
For a fixed $n$, the number of ways to select and arrange $k$ items is $P(n, k)$.
The EGF for the sequence $P(n, k)$ as a function of $k$ (for a fixed $n$) is not directly what we usually construct. Instead, we often use EGFs for properties of the *set* of objects being arranged.

**The Key Idea (Veerarajan, 1st Ed., Chapter 7, Section 7.3):**
If we are partitioning a set of $n$ distinct objects into $k$ non-empty indistinguishable boxes, and then arranging the contents of each box, we use EGFs.

However, a simpler and more direct application is when we are arranging distinct objects into *distinct* positions or categories.

Consider the number of ways to seat $k$ distinct people in $n$ distinct chairs.
This is $P(n, k) = \frac{n!}{(n-k)!}$.

Let's construct an EGF for the number of ways to select and arrange $k$ items from a set of $n$ items, where $a_k$ is the number of ways to arrange $k$ items.
The number of ways to arrange $k$ distinct items from a set of $m$ distinct items is $P(m, k)$.

Let's focus on the building blocks. What is the EGF for assigning *one* distinct item to a specific position?
Suppose we have $n$ distinct items. For the first position, we have $n$ choices. For the second, $n-1$, and so on.

Let's think about the structure of the problem. We are often dealing with assigning distinct objects to distinct "slots" or "roles".

**Example: Permutations with Repetition Allowed (but with a twist)**
Suppose we want to form words of length $k$ using letters from $\{A, B, C\}$.
If repetition is allowed, there are $3^k$ such words.

Now, what if we want to form words of length $k$ using letters from $\{A, B, C\}$ such that:
*   The letter 'A' can appear at most twice.
*   The letters 'B' and 'C' can appear any number of times.

This is where EGFs shine. We can build the EGF for each letter and then multiply them.

*   **For letter 'A':** It can appear 0, 1, or 2 times.
    *   0 times: We need to select 0 'A's and arrange them. There's 1 way. The term is $1 \cdot \frac{x^0}{0!} = 1$.
    *   1 time: We need to select 1 'A' and arrange it. There's 1 way to select 'A', and 1 way to arrange it in its position. If we have $k$ positions, and we want to place one 'A', we choose 1 position out of $k$, $\binom{k}{1}$ ways. This seems complicated.

Let's use the rule of thumb provided by textbooks like Grimaldi:
*   If $a_n$ is the number of ways to arrange $n$ distinct objects with certain properties, the EGF is $A(x) = \sum_{n=0}^\infty a_n \frac{x^n}{n!}$.
*   If $b_n$ is the number of ways to select $n$ objects (with repetition allowed) from a category, the ordinary generating function is often used for that category.

Consider the problem: "How many ways can we form a $k$-letter word using the letters $\{A, B, C\}$ if 'A' appears at most twice, and 'B' and 'C' can appear any number of times?"

Let's focus on building the EGF for each type of letter.

*   **Letter 'A':** Can appear 0, 1, or 2 times.
    *   Number of ways to select 0 'A's: $\binom{n}{0} = 1$.
    *   Number of ways to select 1 'A': $\binom{n}{1} = n$.
    *   Number of ways to select 2 'A's: $\binom{n}{2} = \frac{n(n-1)}{2}$.

This is confusing. The $n$ in $\binom{n}{k}$ is the total number of items available. Here, we are building a word of length $k$.

Let's go back to the property of EGFs from Grimaldi, Section 8.2:
"Suppose we want to form a $k$-letter word using letters from $\{a_1, a_2, \dots, a_m\}$, where letter $a_i$ can be used at most $c_i$ times."

The EGF for the availability of letter $a_i$ is:
$G_i(x) = \sum_{j=0}^{c_i} \frac{x^j}{j!}$

The EGF for the *total* number of such $k$-letter words is the product of these individual EGFs:
$G(x) = G_1(x) G_2(x) \dots G_m(x)$.
The coefficient of $\frac{x^k}{k!}$ in $G(x)$ will be the number of $k$-letter words.

**Example: Forming $k$-letter words using $\{A, B, C\}$ where 'A' appears at most twice, and 'B', 'C' any number of times.**

*   **Letter 'A':** At most twice. EGF is $1 + \frac{x}{1!} + \frac{x^2}{2!}$.
*   **Letter 'B':** Any number of times. EGF is $1 + \frac{x}{1!} + \frac{x^2}{2!} + \dots = \sum_{j=0}^\infty \frac{x^j}{j!} = e^x$.
*   **Letter 'C':** Any number of times. EGF is $e^x$.

The combined EGF is:
$G(x) = \left(1 + x + \frac{x^2}{2}\right) e^x e^x = \left(1 + x + \frac{x^2}{2}\right) e^{2x}$

Now, we need to find the coefficient of $\frac{x^k}{k!}$ in this $G(x)$.
Let's expand $e^{2x}$: $e^{2x} = \sum_{j=0}^\infty \frac{(2x)^j}{j!} = \sum_{j=0}^\infty \frac{2^j x^j}{j!}$.

$G(x) = \left(1 + x + \frac{x^2}{2}\right) \left(\sum_{j=0}^\infty \frac{2^j x^j}{j!}\right)$

We are looking for the coefficient of $\frac{x^k}{k!}$. This means we need to find the term with $x^k$ and then multiply it by $k!$.

Let's expand $G(x)$:
$G(x) = 1 \cdot \sum_{j=0}^\infty \frac{2^j x^j}{j!} + x \cdot \sum_{j=0}^\infty \frac{2^j x^j}{j!} + \frac{x^2}{2} \cdot \sum_{j=0}^\infty \frac{2^j x^j}{j!}$

$G(x) = \sum_{j=0}^\infty \frac{2^j x^j}{j!} + \sum_{j=0}^\infty \frac{2^j x^{j+1}}{j!} + \sum_{j=0}^\infty \frac{2^j x^{j+2}}{2 \cdot j!}$

To find the coefficient of $x^k$, we need to set the powers of $x$ to $k$:
1.  In $\sum_{j=0}^\infty \frac{2^j x^j}{j!}$, we need $j=k$. The term is $\frac{2^k x^k}{k!}$.
2.  In $\sum_{j=0}^\infty \frac{2^j x^{j+1}}{j!}$, we need $j+1=k$, so $j=k-1$. The term is $\frac{2^{k-1} x^k}{(k-1)!}$.
3.  In $\sum_{j=0}^\infty \frac{2^j x^{j+2}}{2 \cdot j!}$, we need $j+2=k$, so $j=k-2$. The term is $\frac{2^{k-2} x^k}{2 \cdot (k-2)!}$.

So, the coefficient of $x^k$ in $G(x)$ is:
$\frac{2^k}{k!} + \frac{2^{k-1}}{(k-1)!} + \frac{2^{k-2}}{2 \cdot (k-2)!}$

This is the coefficient of $x^k$. The EGF states that the term is $a_k \frac{x^k}{k!}$.
So, $a_k \frac{x^k}{k!} = \left(\frac{2^k}{k!} + \frac{2^{k-1}}{(k-1)!} + \frac{2^{k-2}}{2 \cdot (k-2)!}\right) x^k$.

To find $a_k$, we need to match the coefficients of $\frac{x^k}{k!}$.
$a_k = k! \left(\frac{2^k}{k!} + \frac{2^{k-1}}{(k-1)!} + \frac{2^{k-2}}{2 \cdot (k-2)!}\right)$
$a_k = 2^k + k \cdot 2^{k-1} + \frac{k(k-1)}{2} \cdot 2^{k-2}$

This formula for $a_k$ gives the number of $k$-letter words under the given constraints.

**Let's check for k=1:**
$a_1 = 2^1 + 1 \cdot 2^0 + \frac{1(0)}{2} \cdot 2^{-1} = 2 + 1 + 0 = 3$.
The possible 1-letter words are A, B, C. Correct.

**Let's check for k=2:**
$a_2 = 2^2 + 2 \cdot 2^1 + \frac{2(1)}{2} \cdot 2^0 = 4 + 4 + 1 \cdot 1 = 9$.
Possible 2-letter words:
AA, AB, AC, BA, BB, BC, CA, CB, CC.
Wait, the constraint is 'A' at most twice. So AA is allowed.
All 9 words are allowed. Correct.

**Let's check for k=3:**
$a_3 = 2^3 + 3 \cdot 2^2 + \frac{3(2)}{2} \cdot 2^1 = 8 + 3 \cdot 4 + 3 \cdot 2 = 8 + 12 + 6 = 26$.
Possible 3-letter words:
*   AAA: Not allowed (A appears 3 times).
*   AAB, ABA, BAA: Allowed (A appears twice). 3 ways.
*   AAC, ACA, CAA: Allowed (A appears twice). 3 ways.
*   ABB, BAB, BBA: Allowed (A appears once). 3 ways.
*   ABC, ACB, BAC, BCA, CAB, CBA: Allowed (A appears once). 6 ways.
*   ACC, CAC, CCA: Allowed (A appears once). 3 ways.
*   BBB, BBC, BCB, CBB, BCC, CBC, CCB, CCC: Allowed (A appears zero times). 8 ways.

Total ways:
Words with two 'A's: 3 (AAB) + 3 (AAC) = 6 ways.
Words with one 'A': 3 (ABB) + 6 (ABC) + 3 (ACC) = 12 ways.
Words with zero 'A's: 8 ways.
Total = 6 + 12 + 8 = 26. Correct!

This example highlights the power of EGFs. We break down the problem based on the allowed occurrences of each distinct object (letter in this case), construct an EGF for each, and then multiply them. The coefficient of $\frac{x^k}{k!}$ gives the answer for words of length $k$.

**Connection to COs:**
*   **CO2:** This problem is a direct application of counting principles (permutations, combinations for limited occurrences) framed within a generating function context.
*   **CO4:** We are essentially finding a formula for a sequence defined by combinatorial constraints. While we didn't solve a recurrence relation directly here, the technique used (building EGFs from building blocks) is transferable to recurrence relations.

### 3. Key Properties and Operations with EGFs

Just like with ordinary generating functions, EGFs have useful properties and operations that make them powerful tools.

**a) Sum Rule for EGFs:**
If $a_n$ is the number of ways to form an object of size $n$ using method 1, and $b_n$ is the number of ways to form it using method 2, and these methods are mutually exclusive, then the total number of ways is $a_n + b_n$.
The EGF for $a_n + b_n$ is $A(x) + B(x)$, where $A(x)$ and $B(x)$ are the EGFs for $a_n$ and $b_n$ respectively.

**b) Product Rule for EGFs (The "Convolution" of EGFs):**
This is where EGFs differ significantly from ordinary generating functions. If $A(x) = \sum_{n=0}^\infty a_n \frac{x^n}{n!}$ and $B(x) = \sum_{n=0}^\infty b_n \frac{x^n}{n!}$, then their product $C(x) = A(x)B(x) = \sum_{n=0}^\infty c_n \frac{x^n}{n!}$ where:

$$
c_n = \sum_{k=0}^n \binom{n}{k} a_k b_{n-k}
$$

**What does this mean in combinatorics?**
Remember our distinct objects into distinct boxes example. Let's say $a_k$ is the number of ways to choose and arrange $k$ distinct items for "task 1" from a set of $N_1$ items. Let $b_{n-k}$ be the number of ways to choose and arrange $(n-k)$ distinct items for "task 2" from a set of $N_2$ items.

The product $A(x)B(x)$ gives an EGF for forming a combined object of size $n$. The coefficient $c_n$ represents the number of ways to partition a set of $n$ distinct objects into two groups: a group of $k$ objects for task 1 and a group of $n-k$ objects for task 2. The $\binom{n}{k}$ term accounts for choosing which $k$ of the $n$ objects go to task 1, and the $a_k b_{n-k}$ accounts for the ways to arrange them for their respective tasks.

**Analogy:** Imagine you are organizing a party for $n$ guests.
*   Task 1: Select and arrange some guests for a dance performance. $a_k$ is the number of ways to select $k$ guests and arrange them for the dance. EGF is $A(x)$.
*   Task 2: Select and arrange some guests for a musical performance. $b_{n-k}$ is the number of ways to select $n-k$ guests and arrange them for the music. EGF is $B(x)$.

The coefficient $c_n$ in $A(x)B(x)$ would be the number of ways to select $n$ guests in total, partition them into two groups of size $k$ and $n-k$, arrange the first group for dancing, and arrange the second group for music. The $\binom{n}{k}$ selects which $k$ out of $n$ go to the dance, and then $a_k$ arranges them, and $b_{n-k}$ arranges the remaining ones for music.

**Example using the Product Rule:**
Suppose we want to form a committee of $k$ people from a group of $n$ distinct individuals, where $m$ of these individuals are designated as "speakers" and the remaining $n-m$ are "non-speakers". We want to select $p$ speakers and $q$ non-speakers, with $p+q=k$.

Let $A(x)$ be the EGF for selecting and arranging speakers. If we can choose $p$ speakers from $m$ and arrange them, the number of ways is $P(m, p)$.
Let $B(x)$ be the EGF for selecting and arranging non-speakers. If we can choose $q$ non-speakers from $n-m$ and arrange them, the number of ways is $P(n-m, q)$.

This is not quite right. The EGF product rule is about partitioning a set of $n$ distinct items into two groups, one of size $k$ and the other of size $n-k$, and then performing arrangements within each group.

Let's re-examine the product rule: $c_n = \sum_{k=0}^n \binom{n}{k} a_k b_{n-k}$.
$a_k$ is the number of ways to do something with $k$ distinct items (arrangement $k$ items).
$b_{n-k}$ is the number of ways to do something with $n-k$ distinct items (arrangement $n-k$ items).
$\binom{n}{k}$ is choosing $k$ items from $n$.

Consider distributing $n$ distinct items into two distinct boxes, Box 1 and Box 2.
Let $a_k$ be the number of ways to arrange $k$ distinct items. $a_k = k!$. EGF $A(x) = \sum_{k=0}^\infty k! \frac{x^k}{k!} = \frac{1}{1-x}$.
Let $b_{n-k}$ be the number of ways to arrange $n-k$ distinct items. $b_{n-k} = (n-k)!$. EGF $B(x) = \frac{1}{1-x}$.

The product $A(x)B(x) = \left(\frac{1}{1-x}\right) \left(\frac{1}{1-x}\right) = \frac{1}{(1-x)^2}$.
We know that $\frac{1}{(1-x)^2} = \sum_{n=0}^\infty (n+1)x^n$. This is an ordinary generating function.

We need the coefficient of $\frac{x^n}{n!}$ in the product of EGFs.
$A(x) = \sum_{k=0}^\infty k! \frac{x^k}{k!}$
$B(x) = \sum_{j=0}^\infty j! \frac{x^j}{j!}$

$A(x)B(x) = \left(\sum_{k=0}^\infty k! \frac{x^k}{k!}\right) \left(\sum_{j=0}^\infty j! \frac{x^j}{j!}\right)$
$= \sum_{n=0}^\infty \left(\sum_{k=0}^n \frac{k!}{k!} \frac{j!}{j!} \cdot n! \right) \frac{x^n}{n!}$  (This is not how it works directly)

Let's use the formula for $c_n$:
$c_n = \sum_{k=0}^n \binom{n}{k} a_k b_{n-k}$.
With $a_k = k!$ and $b_{n-k} = (n-k)!$:
$c_n = \sum_{k=0}^n \frac{n!}{k!(n-k)!} \cdot k! \cdot (n-k)! = \sum_{k=0}^n n! = (n+1) n!$.

So, the EGF for distributing $n$ distinct items into two distinct boxes, where the order of items in each box matters, is:
$C(x) = \sum_{n=0}^\infty (n+1)n! \frac{x^n}{n!} = \sum_{n=0}^\infty (n+1) x^n$.

Let's verify this with the product of EGFs:
$A(x) = \sum_{k=0}^\infty k! \frac{x^k}{k!}$
$B(x) = \sum_{j=0}^\infty j! \frac{x^j}{j!}$

Their product is:
$C(x) = \left( \sum_{k=0}^\infty k! \frac{x^k}{k!} \right) \left( \sum_{j=0}^\infty j! \frac{x^j}{j!} \right)$
The coefficient of $\frac{x^n}{n!}$ in $C(x)$ is $c_n = \sum_{k=0}^n \binom{n}{k} k! \cdot j!$ where $j=n-k$.
$c_n = \sum_{k=0}^n \frac{n!}{k!(n-k)!} k! (n-k)! = \sum_{k=0}^n n! = (n+1)n!$.
This matches!

**What does this result $(n+1)n!$ represent?**
It means there are $(n+1)n!$ ways to distribute $n$ distinct items into two distinct boxes, arranging the items within each box.
Let's verify for $n=1$. We have item {1}.
Box 1, Box 2.
1.  Item {1} in Box 1. Box 2 is empty. Arrangements: {1} in Box 1, {} in Box 2. 1 way.
2.  Item {1} in Box 2. Box 1 is empty. Arrangements: {} in Box 1, {1} in Box 2. 1 way.
Total ways = 2.
Formula: $(1+1)1! = 2$. Correct.

Let's verify for $n=2$. Items {1, 2}.
Box 1, Box 2.
Possible distributions and arrangements:
*   {1, 2} in Box 1, {} in Box 2: Arrangements for Box 1 are (1, 2) and (2, 1). 2 ways.
*   {} in Box 1, {1, 2} in Box 2: Arrangements for Box 2 are (1, 2) and (2, 1). 2 ways.
*   {1} in Box 1, {2} in Box 2: Arrangement for Box 1 is (1). Arrangement for Box 2 is (2). 1 way.
*   {2} in Box 1, {1} in Box 2: Arrangement for Box 1 is (2). Arrangement for Box 2 is (1). 1 way.
Total ways = 2 + 2 + 1 + 1 = 6.
Formula: $(2+1)2! = 3 \times 2 = 6$. Correct.

This confirms the product rule's utility. The ability to partition $n$ distinct items into a group of $k$ (to be arranged according to $A(x)$) and a group of $n-k$ (to be arranged according to $B(x)$), with the $\binom{n}{k}$ factor, is fundamental.

**c) Derivatives of EGFs:**
If $A(x) = \sum_{n=0}^\infty a_n \frac{x^n}{n!}$, then $A'(x) = \sum_{n=1}^\infty a_n \frac{n x^{n-1}}{n!} = \sum_{n=1}^\infty a_n \frac{x^{n-1}}{(n-1)!}$.
Let $m = n-1$. Then $A'(x) = \sum_{m=0}^\infty a_{m+1} \frac{x^m}{m!}$.
So, the derivative of an EGF for $\{a_n\}$ is the EGF for $\{a_{n+1}\}$.

**Example:** Let $A(x) = e^x = \sum_{n=0}^\infty \frac{x^n}{n!}$. Here $a_n = 1$ for all $n$.
$A'(x) = e^x$. The EGF for $\{a_{n+1}\}$ should also be $e^x$, which is true since $a_{n+1}=1$ for all $n$.

Consider $A(x) = \frac{1}{1-x} = \sum_{n=0}^\infty x^n$. This is an ordinary generating function.
Let's consider the EGF for permutations, $P(x) = \sum_{n=0}^\infty n! \frac{x^n}{n!} = \frac{1}{1-x}$.
The derivative $P'(x) = \frac{1}{(1-x)^2}$.
According to the property, this should be the EGF for $\{a_{n+1}\}$ where $a_n = n!$.
So, $\{a_{n+1}\} = \{(n+1)!\}$.
The EGF for $\{(n+1)!\}$ is $\sum_{n=0}^\infty (n+1)! \frac{x^n}{n!} = \sum_{n=0}^\infty (n+1) x^n$.
Hmm, this doesn't match $\frac{1}{(1-x)^2}$.

There seems to be a mix-up of ordinary and exponential generating functions in my thought process here. Let's clarify.

When we talk about operations on EGFs like derivatives, it's crucial that we are consistently using the EGF definition $\sum a_n \frac{x^n}{n!}$.

Let $A(x) = \sum_{n=0}^\infty a_n \frac{x^n}{n!}$.
Then $A'(x) = \sum_{n=1}^\infty a_n \frac{nx^{n-1}}{n!} = \sum_{n=1}^\infty a_n \frac{x^{n-1}}{(n-1)!}$.
Let $m = n-1$, so $n = m+1$.
$A'(x) = \sum_{m=0}^\infty a_{m+1} \frac{x^m}{m!}$.
This means if $A(x)$ is the EGF for $a_0, a_1, a_2, \dots$, then $A'(x)$ is the EGF for $a_1, a_2, a_3, \dots$. The sequence is shifted.

Let's retry the permutation example:
The EGF for the number of permutations of $k$ distinct items is $P(x) = \sum_{k=0}^\infty k! \frac{x^k}{k!} = \frac{1}{1-x}$.
Here, $a_k = k!$.
$P'(x) = \frac{d}{dx}\left(\frac{1}{1-x}\right) = \frac{1}{(1-x)^2}$.
According to the property, this should be the EGF for the sequence $a_{k+1} = (k+1)!$.
Let's check the EGF for $\{(k+1)!\}$:
$\sum_{k=0}^\infty (k+1)! \frac{x^k}{k!} = \sum_{k=0}^\infty (k+1) x^k$.

Is $\frac{1}{(1-x)^2}$ equal to $\sum_{k=0}^\infty (k+1) x^k$? Yes, it is.
This shows the derivative property holds. The derivative of the EGF for permutations of $k$ items is the EGF for permutations of $k+1$ items. This isn't particularly illuminating for solving problems but is a consistent property.

**d) Integration of EGFs:**
If $A(x) = \sum_{n=0}^\infty a_n \frac{x^n}{n!}$, then $\int_0^x A(t) dt = \int_0^x \left(\sum_{n=0}^\infty a_n \frac{t^n}{n!}\right) dt$.
$\int_0^x A(t) dt = \sum_{n=0}^\infty a_n \int_0^x \frac{t^n}{n!} dt = \sum_{n=0}^\infty a_n \left[\frac{t^{n+1}}{(n+1)!}\right]_0^x = \sum_{n=0}^\infty a_n \frac{x^{n+1}}{(n+1)!}$.
Let $m=n+1$, so $n=m-1$.
$\int_0^x A(t) dt = \sum_{m=1}^\infty a_{m-1} \frac{x^m}{m!}$.
The integral of an EGF for $\{a_n\}$ is the EGF for the sequence $\{0, a_0, a_1, a_2, \dots \}$, i.e., $\{a_{m-1}\}$ where $a_{-1}=0$.

**Example:**
Let $A(x) = e^x = \sum_{n=0}^\infty \frac{x^n}{n!}$. Here $a_n = 1$.
$\int_0^x e^t dt = [e^t]_0^x = e^x - 1$.
According to the property, this should be the EGF for $\{a_{m-1}\}$ where $a_{m-1}=1$ for $m-1 \ge 0$, and $a_{-1}=0$.
So the sequence is $\{0, 1, 1, 1, \dots\}$.
The EGF for this sequence is $0 \cdot \frac{x^0}{0!} + 1 \cdot \frac{x^1}{1!} + 1 \cdot \frac{x^2}{2!} + \dots = \left(\sum_{m=0}^\infty \frac{x^m}{m!}\right) - 1 = e^x - 1$.
This matches!

### 4. Using EGFs to Solve Recurrence Relations

Just as with ordinary generating functions, EGFs can be used to solve linear recurrence relations, particularly those arising from combinatorial problems involving permutations.

**Example: Number of permutations of $n$ elements with no fixed points (derangements).**
Let $D_n$ be the number of derangements of $n$ elements.
The recurrence relation for $D_n$ is:
$D_n = (n-1)(D_{n-1} + D_{n-2})$ for $n \ge 2$.
with $D_0 = 1$ and $D_1 = 0$.

Let $E(x) = \sum_{n=0}^\infty D_n \frac{x^n}{n!}$ be the EGF for derangements.

We need to manipulate the recurrence to fit the EGF form.
Divide the recurrence by $n!$:
$\frac{D_n}{n!} = \frac{(n-1)(D_{n-1} + D_{n-2})}{n!} = \frac{n-1}{n} \frac{D_{n-1}}{(n-1)!} + \frac{n-1}{n} \frac{D_{n-2}}{n!}$
$\frac{D_n}{n!} = \frac{n-1}{n} \frac{D_{n-1}}{(n-1)!} + \frac{D_{n-2}}{n(n-1)!}$

This doesn't look easy to convert to the EGF sum. Let's try a different approach.

Consider the structure of derangements. A derangement of $n$ items is a permutation where no item is in its original position.
Suppose we pick an element, say element 1. It must go to some position $k \ne 1$. There are $n-1$ choices for $k$.
Two cases:
1.  Element $k$ goes to position 1. Then we have $n-2$ elements left to derange, which is $D_{n-2}$ ways.
2.  Element $k$ does NOT go to position 1. Then we have $n-1$ elements left, and we need to arrange them such that element $k$ does not go to position 1, and for $i \ne 1, k$, element $i$ does not go to position $i$. This is equivalent to deranging $n-1$ elements if we relabel position 1 as the "forbidden" position for element $k$. This gives $D_{n-1}$ ways.

So, $D_n = (n-1)(D_{n-1} + D_{n-2})$. This is the recurrence we started with.

Let's use the generating function $E(x) = \sum_{n=0}^\infty D_n \frac{x^n}{n!}$.
Multiply the recurrence by $\frac{x^n}{n!}$ and sum from $n=2$ to $\infty$:
$\sum_{n=2}^\infty D_n \frac{x^n}{n!} = \sum_{n=2}^\infty (n-1) D_{n-1} \frac{x^n}{n!} + \sum_{n=2}^\infty (n-1) D_{n-2} \frac{x^n}{n!}$

Left side: $\sum_{n=2}^\infty D_n \frac{x^n}{n!} = E(x) - D_0 \frac{x^0}{0!} - D_1 \frac{x^1}{1!} = E(x) - 1 - 0 = E(x) - 1$.

First term on the right:
$\sum_{n=2}^\infty (n-1) D_{n-1} \frac{x^n}{n!} = \sum_{n=2}^\infty D_{n-1} \frac{(n-1) x^n}{n!} = \sum_{n=2}^\infty D_{n-1} \frac{x^n}{(n-1)!}$
Let $m = n-1$. When $n=2, m=1$. When $n \to \infty, m \to \infty$.
$\sum_{m=1}^\infty D_m \frac{x^{m+1}}{m!} = x \sum_{m=1}^\infty D_m \frac{x^m}{m!} = x (E(x) - D_0) = x(E(x) - 1)$.

Second term on the right:
$\sum_{n=2}^\infty (n-1) D_{n-2} \frac{x^n}{n!} = \sum_{n=2}^\infty D_{n-2} \frac{(n-1) x^n}{n!}$
This is tricky. Let's rewrite $n-1$ as $(n)(n-1)/n$. No.
Let's rewrite the term as $\frac{D_{n-2}}{(n-2)!} \frac{(n-1)}{n}$. Still not clean.

Let's try to get the terms involving $E(x)$ directly.
Consider $x E'(x) = x \sum_{n=1}^\infty D_n \frac{x^{n-1}}{(n-1)!} = \sum_{n=1}^\infty D_n \frac{x^n}{(n-1)!}$.
The first term on the RHS is $\sum_{n=2}^\infty D_{n-1} \frac{x^n}{(n-1)!}$.
Let $k=n-1$, so $n=k+1$.
$\sum_{k=1}^\infty D_k \frac{x^{k+1}}{k!} = x \sum_{k=1}^\infty D_k \frac{x^k}{k!} = x(E(x) - D_0) = x(E(x) - 1)$. This part is correct.

Now, the second term: $\sum_{n=2}^\infty (n-1) D_{n-2} \frac{x^n}{n!}$.
We want something like $D_{n-2} \frac{x^{n-2}}{(n-2)!}$.
Let's rewrite $(n-1)/n!$ as $1/(n-1)! \cdot (n-1)/n$. No.
Let's rewrite $n!$ in the denominator: $n! = n(n-1)(n-2)!$.
$\sum_{n=2}^\infty D_{n-2} \frac{(n-1) x^n}{n(n-1)(n-2)!} = \sum_{n=2}^\infty D_{n-2} \frac{x^n}{n(n-2)!}$
This is still not yielding a clean form.

**Alternative approach from Grimaldi (Chapter 8, Section 8.3):**
The recurrence is $D_n = n D_{n-1} + (-1)^n$.
Let $E(x) = \sum_{n=0}^\infty D_n \frac{x^n}{n!}$.
Multiply by $\frac{x^n}{n!}$ and sum from $n=1$:
$\sum_{n=1}^\infty D_n \frac{x^n}{n!} = \sum_{n=1}^\infty n D_{n-1} \frac{x^n}{n!} + \sum_{n=1}^\infty (-1)^n \frac{x^n}{n!}$

Left side: $E(x) - D_0 = E(x) - 1$.

First term on the right:
$\sum_{n=1}^\infty n D_{n-1} \frac{x^n}{n!} = \sum_{n=1}^\infty D_{n-1} \frac{x^n}{(n-1)!}$
Let $m = n-1$.
$\sum_{m=0}^\infty D_m \frac{x^{m+1}}{m!} = x \sum_{m=0}^\infty D_m \frac{x^m}{m!} = x E(x)$.

Second term on the right:
$\sum_{n=1}^\infty (-1)^n \frac{x^n}{n!}$
This is the Taylor series for $e^{-x} - 1$. (Since $e^x = \sum \frac{x^n}{n!}$, $e^{-x} = \sum \frac{(-x)^n}{n!} = \sum (-1)^n \frac{x^n}{n!}$. The sum starts from $n=1$, so it's $e^{-x} - 1$).

Putting it all together:
$E(x) - 1 = x E(x) + (e^{-x} - 1)$
$E(x) - 1 = x E(x) + e^{-x} - 1$
$E(x) - x E(x) = e^{-x}$
$E(x)(1-x) = e^{-x}$
$E(x) = \frac{e^{-x}}{1-x}$

Now, we need to find the coefficient of $\frac{x^n}{n!}$ in $E(x) = \frac{e^{-x}}{1-x}$.
$e^{-x} = \sum_{k=0}^\infty \frac{(-x)^k}{k!} = \sum_{k=0}^\infty (-1)^k \frac{x^k}{k!}$
$\frac{1}{1-x} = \sum_{j=0}^\infty x^j$

$E(x) = \left(\sum_{k=0}^\infty (-1)^k \frac{x^k}{k!}\right) \left(\sum_{j=0}^\infty x^j\right)$
We are looking for the coefficient of $\frac{x^n}{n!}$.
Let's find the coefficient of $x^n$ first.
The coefficient of $x^n$ in $E(x)$ is $\sum_{k=0}^n \left((-1)^k \frac{1}{k!}\right) \cdot 1$.
So, the term with $x^n$ is $\left(\sum_{k=0}^n \frac{(-1)^k}{k!}\right) x^n$.

Since $E(x) = \sum_{n=0}^\infty D_n \frac{x^n}{n!}$, the coefficient of $\frac{x^n}{n!}$ is $D_n$.
We have $\left(\sum_{k=0}^n \frac{(-1)^k}{k!}\right) x^n = D_n \frac{x^n}{n!}$.
Multiply both sides by $n!$:
$D_n = n! \left(\sum_{k=0}^n \frac{(-1)^k}{k!}\right)$

This gives the formula for derangements: $D_n = n! \left(1 - \frac{1}{1!} + \frac{1}{2!} - \dots + \frac{(-1)^n}{n!}\right)$.

**Connection to COs:**
*   **CO4:** This is a prime example of using generating functions (specifically EGFs) to solve a recurrence relation that arises from a combinatorial problem. It demonstrates the application of these tools for finding explicit formulas for sequences.
*   **CO2:** The derivation relies on understanding the combinatorial meaning of the recurrence relation for derangements.

### 5. Examples of EGFs in Action

Let's summarize some standard EGFs and their combinatorial interpretations, as found in textbooks like Veerarajan and Grimaldi.

| Sequence ($a_n$)                        | Combinatorial Interpretation                                                                                                   | EGF $A(x) = \sum a_n \frac{x^n}{n!}$ | Value of $A(x)$       |
| :------------------------------------ | :----------------------------------------------------------------------------------------------------------------------------- | :---------------------------------- | :-------------------- |
| $a_n = 1$                             | Number of ways to arrange $n$ distinct items (just the identity).                                                                | $\sum \frac{x^n}{n!}$               | $e^x$                 |
| $a_n = k!$                            | Number of ways to arrange $n$ distinct items, chosen from $k$ categories, each category allowing any number of items. (Not quite!) | $\sum n! \frac{x^n}{n!}$            | $\frac{1}{1-x}$       |
| $a_n = P(m, n) = \frac{m!}{(m-n)!}$   | Number of ways to arrange $n$ distinct items chosen from $m$ distinct items.                                                   | $\sum P(m, n) \frac{x^n}{n!}$       | $(1+x)^m$             |
| $a_n = C(m, n) = \binom{m}{n}$        | Number of ways to choose $n$ distinct items from $m$ distinct items (order doesn't matter for the selection part itself).      | $\sum \binom{m}{n} \frac{x^n}{n!}$   | $(1+x)^m$             |
| $a_n =$ number of ways to form $n$-letter words with restrictions on letters. | As seen in the "A, B, C" example.                                                                              | Product of individual EGFs          | Varies.               |

**Let's clarify the $P(m,n)$ and $C(m,n)$ cases:**
These results come from the generalized binomial theorem:
$(1+x)^m = \sum_{n=0}^\infty \binom{m}{n} x^n$.
To get an EGF for $P(m, n)$, we can write $P(m, n) = \binom{m}{n} n!$.
So, the EGF for $P(m, n)$ is $\sum_{n=0}^\infty P(m, n) \frac{x^n}{n!} = \sum_{n=0}^\infty \binom{m}{n} n! \frac{x^n}{n!} = \sum_{n=0}^\infty \binom{m}{n} x^n$.
This sum is precisely $(1+x)^m$.

So, $(1+x)^m$ is the EGF for the number of ways to select and arrange $n$ items from $m$ distinct items.

**Example:** Number of ways to form a 3-letter word using distinct letters from $\{A, B, C, D\}$.
Here $m=4, n=3$. The number of ways is $P(4, 3) = 4 \times 3 \times 2 = 24$.
The EGF is $(1+x)^4$.
We need the coefficient of $\frac{x^3}{3!}$ in $(1+x)^4$.
$(1+x)^4 = \sum_{n=0}^\infty \binom{4}{n} x^n = \binom{4}{0} + \binom{4}{1}x + \binom{4}{2}x^2 + \binom{4}{3}x^3 + \binom{4}{4}x^4$.
We want the term that looks like $a_3 \frac{x^3}{3!}$.
The $x^3$ term is $\binom{4}{3} x^3 = 4x^3$.
So, $a_3 \frac{x^3}{3!} = 4x^3$.
$a_3 = 4 \times 3! = 4 \times 6 = 24$. This is correct.

This confirms that $(1+x)^m$ is indeed the EGF for permutations of $n$ items chosen from $m$.

**Let's consider a problem using this:**
"How many ways can we award Gold, Silver, and Bronze medals to 5 contestants?"
This is equivalent to selecting 3 contestants from 5 and arranging them in order (Gold, Silver, Bronze).
Here $m=5$ (contestants) and we are choosing and arranging $n=3$ (medals).
The EGF is $(1+x)^5$. We need the coefficient of $\frac{x^3}{3!}$.
$(1+x)^5 = \sum_{k=0}^\infty \binom{5}{k} x^k$.
The term with $x^3$ is $\binom{5}{3} x^3 = 10 x^3$.
So, $a_3 \frac{x^3}{3!} = 10 x^3$.
$a_3 = 10 \times 3! = 10 \times 6 = 60$.
This is $P(5, 3) = 5 \times 4 \times 3 = 60$. Correct.

### 6. Summary and Key Takeaways

*   **Definition:** An EGF for a sequence $\{a_n\}$ is $A(x) = \sum_{n=0}^\infty a_n \frac{x^n}{n!}$.
*   **Purpose:** EGFs are primarily used for problems involving **arrangements of distinct objects**, or problems that can be modeled by permutations. They are distinct from ordinary generating functions, which are typically used for selections where order doesn't matter.
*   **The $\frac{x^n}{n!}$ factor:** This factor is the "signature" of EGFs and is crucial for handling the factorial nature of permutations.
*   **Product Rule:** The product of two EGFs $A(x)$ and $B(x)$ yields an EGF whose coefficient of $\frac{x^n}{n!}$ is $c_n = \sum_{k=0}^n \binom{n}{k} a_k b_{n-k}$. This represents partitioning $n$ distinct items into two groups of size $k$ and $n-k$, applying $a_k$ arrangements to the first group and $b_{n-k}$ to the second.
*   **Key EGFs:**
    *   $e^x$ is the EGF for $a_n = 1$ (identity arrangement).
    *   $\frac{1}{1-x}$ is the EGF for $a_n = n!$ (any arrangement of $n$ distinct items).
    *   $(1+x)^m$ is the EGF for $a_n = P(m, n)$ (arrangements of $n$ items chosen from $m$).
*   **Applications:** Solving recurrence relations (like derangements), counting words with letter restrictions, distributing distinct items into distinct boxes with ordered arrangements.
*   **Connection to COs:** EGFs directly support **CO2** by formalizing counting principles for permutations and **CO4** by providing a method to solve recurrence relations that often model these permutation-based problems.

Remember, the choice between ordinary generating functions and exponential generating functions depends on whether the problem emphasizes selections (ordinary GF) or arrangements/permutations (exponential GF).

### 7. Sample Questions with Answers

**Question 1 (Conceptual):**
What is the fundamental difference between an ordinary generating function and an exponential generating function, and when would you choose to use one over the other?

**Answer:**
The fundamental difference lies in the form of the terms in their series expansion. An ordinary generating function (OGF) for a sequence $\{a_n\}$ is $A(x) = \sum_{n=0}^\infty a_n x^n$, while an exponential generating function (EGF) is $E(x) = \sum_{n=0}^\infty a_n \frac{x^n}{n!}$.

You would choose an OGF when the problem involves:
*   **Selections or combinations** where the order of elements does not matter.
*   Problems where the total number of ways to form a collection of size $n$ is $a_n$.

You would choose an EGF when the problem involves:
*   **Arrangements or permutations** of distinct objects.
*   Problems where the order of elements is significant, or where objects are being placed into distinct positions or roles.
*   Problems that can be modeled by assigning distinct items to distinct bins, where the order within the bins matters.

**Question 2 (Application):**
How many ways can a committee of 4 people be selected from 7 men and 5 women, such that the committee has 2 men and 2 women, and among the men, one is designated as the chairperson and the other as the secretary?

**Answer:**
This problem involves selection and then specific arrangements (roles) for a subset of the selected items. This is a cue for EGFs.

Let's break it down:
1.  **Selecting Men:** We need to select 2 men from 7, and then designate one as chairperson and the other as secretary. This is equivalent to selecting 2 men and arranging them in 2 specific roles. The number of ways to do this is $P(7, 2) = \frac{7!}{(7-2)!} = 7 \times 6 = 42$.
    The EGF for selecting and arranging $k$ items from $m$ is $(1+x)^m$. For men, $m=7$. The EGF is $(1+x)^7$. We are interested in the selection of $k=2$ men for roles.

2.  **Selecting Women:** We need to select 2 women from 5, and there are no special roles assigned to them. This is a combination. The number of ways is $\binom{5}{2} = \frac{5!}{2!3!} = 10$.
    The EGF for selecting $k$ items from $m$ (where order doesn't matter for the selection itself) is $ \frac{(1+x)^m}{k!} $ if we just want the count for a specific $k$. However, if we consider the EGF for the number of ways to select $k$ women from 5, it's $\binom{5}{k}$. The EGF for $\binom{5}{k}$ is $(1+x)^5$.

We need to select 2 men and 2 women. The total committee size is 4.
The problem can be viewed as:
*   Selecting 2 men from 7 and arranging them in roles: Number of ways is $P(7, 2)$. EGF for this contribution is related to $(1+x)^7$. Specifically, the term for $k=2$ from $\sum P(7,k)\frac{x^k}{k!}$ would be $P(7,2)\frac{x^2}{2!}$.
*   Selecting 2 women from 5: Number of ways is $\binom{5}{2}$. EGF for this contribution is related to $(1+x)^5$. Specifically, the term for $k=2$ from $\sum \binom{5}{k}\frac{x^k}{k!}$ would be $\binom{5}{2}\frac{x^2}{2!}$.

The product of EGFs for these independent choices is:
$EGF_{men}(x) = \sum_{k=0}^7 P(7, k) \frac{x^k}{k!} = (1+x)^7$
$EGF_{women}(x) = \sum_{k=0}^5 \binom{5}{k} \frac{x^k}{k!} = (1+x)^5$

The combined EGF for forming a committee of size $n$ by selecting $k$ men for roles and $n-k$ women is the product of their respective EGFs. We want a committee of size 4.
$EGF_{total}(x) = EGF_{men}(x) \cdot EGF_{women}(x) = (1+x)^7 \cdot (1+x)^5 = (1+x)^{12}$.

We are looking for a committee of 4 people (2 men and 2 women). This implies we need to find the coefficient of $\frac{x^4}{4!}$ in the product. However, the EGF for $P(m,k)$ already accounts for the $k!$ factor.

Let's use the product rule: $c_n = \sum_{k=0}^n \binom{n}{k} a_k b_{n-k}$.
Here, $n=4$ (total committee size).
$a_k$ is the number of ways to select and arrange $k$ men for roles from 7 men. This is $P(7, k)$.
$b_{n-k}$ is the number of ways to select $n-k$ women from 5 women. This is $\binom{5}{n-k}$.

We need $k=2$ men and $n-k=2$ women.
So, $a_2 = P(7, 2) = 42$.
And $b_2 = \binom{5}{2} = 10$.

The number of ways to form the committee of size 4 with 2 men (in roles) and 2 women is given by the coefficient of $\frac{x^4}{4!}$ in $EGF_{total}(x) = (1+x)^{12}$.
$a_4 = 4! \times (\text{coefficient of } x^4 \text{ in } (1+x)^{12})$.
Coefficient of $x^4$ in $(1+x)^{12}$ is $\binom{12}{4}$.
$a_4 = \binom{12}{4} \times 4! = \frac{12!}{4!8!} \times 4! = \frac{12!}{8!} = P(12, 4)$.

This suggests that $(1+x)^{12}$ is the EGF for selecting and arranging 4 items from 12 distinct items. This is correct.

Let's re-evaluate the product rule application.
The EGF for arranging $k$ items from $m$ is $(1+x)^m$.
The EGF for selecting $k$ items from $m$ is also $(1+x)^m$ if we want the count $a_k = \binom{m}{k}$, where the coefficient of $\frac{x^k}{k!}$ is $a_k$.
If $A(x) = \sum P(m,k) \frac{x^k}{k!} = (1+x)^m$
If $B(x) = \sum \binom{p}{k} \frac{x^k}{k!} = (1+x)^p$

The product $C(x) = A(x)B(x) = (1+x)^m (1+x)^p = (1+x)^{m+p}$.
The coefficient of $\frac{x^n}{n!}$ in $C(x)$ is $c_n = \sum_{k=0}^n \binom{n}{k} a_k b_{n-k}$.
$a_k = P(m,k)$ and $b_{n-k} = \binom{p}{n-k}$.
$c_n = \sum_{k=0}^n \binom{n}{k} P(m,k) \binom{p}{n-k}$.

This means $c_n$ is the number of ways to select $n$ items from $m+p$ total items, by choosing $k$ items from the first $m$ and arranging them, and choosing $n-k$ items from the next $p$ and just selecting them.

In our problem:
$m=7$ (men, for roles)
$p=5$ (women, no roles)
We need a committee of $n=4$ people.
So, $c_4 = \sum_{k=0}^4 \binom{4}{k} P(7,k) \binom{5}{4-k}$.

Let's compute this sum:
*   k=0: $\binom{4}{0} P(7,0) \binom{5}{4} = 1 \times 1 \times 5 = 5$ (0 men, 4 women)
*   k=1: $\binom{4}{1} P(7,1) \binom{5}{3} = 4 \times 7 \times 10 = 280$ (1 man in role, 3 women)
*   k=2: $\binom{4}{2} P(7,2) \binom{5}{2} = 6 \times 42 \times 10 = 2520$ (2 men in roles, 2 women)
*   k=3: $\binom{4}{3} P(7,3) \binom{5}{1} = 4 \times (7 \times 6 \times 5) \times 5 = 4 \times 210 \times 5 = 4200$ (3 men in roles, 1 woman)
*   k=4: $\binom{4}{4} P(7,4) \binom{5}{0} = 1 \times (7 \times 6 \times 5 \times 4) \times 1 = 1 \times 840 \times 1 = 840$ (4 men in roles, 0 women)

Total = $5 + 280 + 2520 + 4200 + 840 = 7845$.

Let's check if this matches $P(12,4)$, which would be the answer if all 12 people were distinguishable and 4 were selected for specific roles. $P(12,4) = 12 \times 11 \times 10 \times 9 = 11880$.
The current question is more nuanced: only men have roles.

The EGF for selecting $k$ men from 7 and arranging them in $k$ specific roles is $\sum_{k=0}^7 P(7,k) \frac{x^k}{k!} = (1+x)^7$.
The EGF for selecting $j$ women from 5 (no roles) is $\sum_{j=0}^5 \binom{5}{j} \frac{x^j}{j!} = (1+x)^5$.

The product $(1+x)^7 (1+x)^5 = (1+x)^{12}$ is the EGF for selecting $n$ people from the combined group of 12 and assigning them roles. This is not what we want.

We need to use the product rule correctly with the appropriate base sequences.
Sequence for men: $a_k = P(7, k)$ for $k \le 7$, 0 otherwise.
Sequence for women: $b_j = \binom{5}{j}$ for $j \le 5$, 0 otherwise.

The resulting sequence $c_n = \sum_{k=0}^n \binom{n}{k} a_k b_{n-k}$.
We want $n=4$. We need $k$ men and $4-k$ women.
$k$ can range from 0 to 4.
$a_k$ is $P(7,k)$ for $k \in \{0,1,2,3,4\}$.
$b_{4-k}$ is $\binom{5}{4-k}$ for $4-k \in \{0,1,2,3,4\}$, which means $k \in \{0,1,2,3,4\}$.
So, the range of $k$ is fine.

The sum we calculated is correct: 7845.

**Question 3 (Problem Solving):**
Find the number of $k$-letter sequences that can be formed using the letters $\{A, B, C\}$ if the letter $A$ can appear at most once, and the letters $B$ and $C$ can appear any number of times.

**Answer:**
This is a problem where we can use EGFs for letter constraints.

*   **Letter 'A':** Can appear 0 or 1 time.
    The EGF for 'A' is: $G_A(x) = \frac{x^0}{0!} + \frac{x^1}{1!} = 1 + x$.

*   **Letter 'B':** Can appear any number of times.
    The EGF for 'B' is: $G_B(x) = \sum_{j=0}^\infty \frac{x^j}{j!} = e^x$.

*   **Letter 'C':** Can appear any number of times.
    The EGF for 'C' is: $G_C(x) = e^x$.

The total EGF for forming $k$-letter sequences is the product of these EGFs:
$G(x) = G_A(x) \cdot G_B(x) \cdot G_C(x) = (1+x) \cdot e^x \cdot e^x = (1+x)e^{2x}$.

We need to find the coefficient of $\frac{x^k}{k!}$ in $G(x)$.
$G(x) = (1+x) \sum_{j=0}^\infty \frac{(2x)^j}{j!} = (1+x) \sum_{j=0}^\infty \frac{2^j x^j}{j!}$
$G(x) = \sum_{j=0}^\infty \frac{2^j x^j}{j!} + x \sum_{j=0}^\infty \frac{2^j x^j}{j!} = \sum_{j=0}^\infty \frac{2^j x^j}{j!} + \sum_{j=0}^\infty \frac{2^j x^{j+1}}{j!}$

To find the coefficient of $\frac{x^k}{k!}$, we need the terms that produce $x^k$.
1.  From $\sum_{j=0}^\infty \frac{2^j x^j}{j!}$: we need $j=k$. The term is $\frac{2^k x^k}{k!}$.
2.  From $\sum_{j=0}^\infty \frac{2^j x^{j+1}}{j!}$: we need $j+1=k$, so $j=k-1$. The term is $\frac{2^{k-1} x^k}{(k-1)!}$.

The term with $x^k$ in $G(x)$ is $\frac{2^k x^k}{k!} + \frac{2^{k-1} x^k}{(k-1)!}$.
So, $a_k \frac{x^k}{k!} = \frac{2^k x^k}{k!} + \frac{2^{k-1} x^k}{(k-1)!}$.

To find $a_k$, we match the coefficients of $\frac{x^k}{k!}$:
$a_k = k! \left(\frac{2^k}{k!} + \frac{2^{k-1}}{(k-1)!}\right)$
$a_k = 2^k + k \cdot 2^{k-1}$

So, the number of $k$-letter sequences is $2^k + k \cdot 2^{k-1}$.

Let's check for $k=1$: $a_1 = 2^1 + 1 \cdot 2^0 = 2 + 1 = 3$. Sequences: A, B, C. Correct.
Let's check for $k=2$: $a_2 = 2^2 + 2 \cdot 2^1 = 4 + 4 = 8$. Sequences:
AA (not allowed, A appears once max) - WRONG. The derivation of $a_k$ is correct for the EGF.
The coefficient of $\frac{x^k}{k!}$ is $a_k$.
$a_k = k! \left( \frac{2^k}{k!} + \frac{2^{k-1}}{(k-1)!} \right) = 2^k + k 2^{k-1}$.

The $k$-letter sequences are formed by choosing positions for 'A' (if any) and filling the rest with 'B's and 'C's.
Case 1: No 'A'. All $k$ positions filled with 'B' or 'C'. $2^k$ ways.
Case 2: One 'A'. Choose position for 'A': $k$ ways. The remaining $k-1$ positions filled with 'B' or 'C': $2^{k-1}$ ways. Total: $k \cdot 2^{k-1}$ ways.
Total = $2^k + k \cdot 2^{k-1}$. This matches the formula.

For $k=2$: $a_2 = 2^2 + 2 \cdot 2^1 = 4 + 4 = 8$.
Sequences:
From Case 1 (no A): BB, BC, CB, CC (4 ways)
From Case 2 (one A): AB, AC, BA, CA (4 ways)
Total = 8. Correct.

This concludes our deep dive into Exponential Generating Functions. I hope you found this exploration insightful and that it clarifies their unique power in discrete mathematics!
