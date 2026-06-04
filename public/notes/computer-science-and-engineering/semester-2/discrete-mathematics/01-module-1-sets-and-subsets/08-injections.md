---
title: "Injections"
subject: "DISCRETE MATHEMATICS"
module: "Module 1: Sets and Subsets"
branch: "Computer Science and Engineering"
semester: 2
topicId: "68b45b6f58474a0b135b5f87"
status: "completed"
scrapedAt: "2026-05-20T16:32:44.453Z"
---
## Discrete Mathematics: Module 1 - Sets and Subsets

### Topic: Injections (One-to-One Functions)

Welcome, everyone! Today, we're diving into a fundamental concept in discrete mathematics that's absolutely crucial for understanding many areas of computer science: **Injections**, also known as **one-to-one functions**. This topic builds directly on our understanding of sets and functions, which we've been exploring. Think of it as a special kind of mapping where each element in our "input" set gets its own unique "output" in the "target" set.

Before we officially define injections, let's jog our memory about what a function is. A function $f$ from a set $A$ to a set $B$, denoted as $f: A \rightarrow B$, is a rule that assigns to *each* element $a \in A$ exactly *one* element $b \in B$. We call $A$ the **domain** and $B$ the **codomain**.

Now, what makes a function *special* enough to be called an injection? It’s all about ensuring that no two different inputs map to the same output.

#### What is an Injection (One-to-One Function)?

An injection, or a one-to-one function, from a set $A$ to a set $B$ is a function $f: A \rightarrow B$ such that for any two distinct elements $a_1, a_2 \in A$, their images under $f$ are also distinct in $B$.

In simpler terms, if $a_1$ and $a_2$ are different elements from our domain $A$, then their corresponding elements $f(a_1)$ and $f(a_2)$ in the codomain $B$ must also be different.

We can state this formally using a conditional statement:

**Formal Definition:** A function $f: A \rightarrow B$ is an injection if and only if for all $a_1, a_2 \in A$, if $a_1 \neq a_2$, then $f(a_1) \neq f(a_2)$.

Now, in mathematics, it's often easier to prove things using the contrapositive. The contrapositive of "If $P$, then $Q$" is "If not $Q$, then not $P$". In our case, if $f(a_1) = f(a_2)$, then it *must* be that $a_1 = a_2$. This is a very handy way to check if a function is an injection, and it’s a form you’ll see frequently in proofs.

**Alternative (Contrapositive) Definition:** A function $f: A \rightarrow B$ is an injection if and only if for all $a_1, a_2 \in A$, if $f(a_1) = f(a_2)$, then $a_1 = a_2$.

Remember this alternative definition! It's often more straightforward to work with when you're trying to prove a function is one-to-one.

#### Why are Injections Important? (Connecting to Course Outcomes)

This concept of "one-to-one" correspondence is incredibly powerful and touches upon several of our course outcomes:

*   **CO1: Check the validity of predicates in Propositional and Quantified Propositional Logic:** While injections are about functions, the logical structure of their definitions ("for all...", "if... then...") is deeply rooted in quantified logic. Understanding how to prove or disprove properties of functions like injections uses the same logical reasoning skills you'll apply to propositional logic.
*   **CO2: Solve counting problems:** Injections are fundamental to counting. When we talk about permutations, for instance, we're essentially creating injections from a set of positions to a set of items. If we want to arrange $k$ items from a set of $n$, we're defining an injection from the set of $k$ chosen positions to the set of $n$ items. The number of such injections is what we calculate with permutations.
*   **CO3: Classify binary relations into various types and illustrate an application for each type of binary relation:** A function itself can be viewed as a special type of binary relation. An injection is then a one-to-one binary relation. In computer science, mappings between data structures or algorithms that preserve uniqueness are often injections. For example, a unique identifier assignment for database records is an injection.

#### Examples of Injections

Let's make this concrete with some examples.

**Example 1: Numbers and Their Squares**

Consider the function $f: \mathbb{Z} \rightarrow \mathbb{Z}$ defined by $f(x) = x^2$, where $\mathbb{Z}$ represents the set of all integers.

Is this function an injection? Let's use our contrapositive definition. Suppose $f(a_1) = f(a_2)$. This means $a_1^2 = a_2^2$. Does this imply $a_1 = a_2$? Not necessarily! For example, if $a_1 = 2$, then $f(2) = 2^2 = 4$. If $a_2 = -2$, then $f(-2) = (-2)^2 = 4$. Here, $f(2) = f(-2)$, but $2 \neq -2$. So, this function $f(x) = x^2$ from $\mathbb{Z}$ to $\mathbb{Z}$ is **not** an injection. Different inputs (2 and -2) lead to the same output (4).

**Example 2: Positive Numbers and Their Squares**

Now, let's modify our previous example slightly. Consider the function $g: \mathbb{Z}^+ \rightarrow \mathbb{Z}^+$ defined by $g(x) = x^2$, where $\mathbb{Z}^+$ represents the set of positive integers.

Is this function an injection? Let $a_1, a_2 \in \mathbb{Z}^+$ such that $g(a_1) = g(a_2)$. This means $a_1^2 = a_2^2$. Since $a_1$ and $a_2$ are both positive, taking the square root of both sides yields $a_1 = a_2$. Because we are restricted to positive integers, we no longer have the issue of negative counterparts. So, $g(x) = x^2$ from $\mathbb{Z}^+$ to $\mathbb{Z}^+$ **is** an injection.

Think about it: if you're squaring positive numbers, $1^2=1$, $2^2=4$, $3^2=9$. No two different positive numbers will ever give you the same square.

**Example 3: Assigning Student IDs**

Imagine a university that assigns a unique student ID number to each student. Let $S$ be the set of all students enrolled in the university, and let $ID$ be the set of all possible student ID numbers. We can define a function $assign\_id: S \rightarrow ID$ where $assign\_id(student) = student's ID number$.

Is this function an injection? Yes, by definition! A university's student ID system is designed so that no two students have the same ID. If student A has ID 101, no other student can have ID 101. So, if $assign\_id(student_1) = assign\_id(student_2)$, it must be that $student_1 = student_2$. This is a perfect real-world example of an injection. This relates to **CO3** – a unique identifier is a one-to-one mapping.

**Example 4: Mapping Letters to Their Position in the Alphabet**

Let $A = \{'a', 'b', 'c', ..., 'z'\}$ be the set of lowercase English letters, and $B = \{1, 2, 3, ..., 26\}$ be the set of positive integers from 1 to 26. Consider the function $pos: A \rightarrow B$ where $pos(letter) = the letter's position in the alphabet$.

For instance, $pos('a') = 1$, $pos('b') = 2$, $pos('z') = 26$. Is this an injection? Yes! Each letter has a unique position. If $pos(letter_1) = pos(letter_2)$, it means they are both at the same position in the alphabet, which implies $letter_1$ must be the same as $letter_2$. This is an injection. This also relates to **CO3**.

**Example 5: Functions that are NOT Injections**

Let's consider a function $f: \{1, 2, 3\} \rightarrow \{a, b, c, d\}$ defined as:
$f(1) = a$
$f(2) = b$
$f(3) = a$

Here, we have $f(1) = a$ and $f(3) = a$. Since $1 \neq 3$, but $f(1) = f(3)$, this function is **not** an injection. Two different inputs (1 and 3) map to the same output ($a$).

#### When Can an Injection Exist?

A crucial point to remember regarding injections is about the sizes of the sets involved.

**Pigeonhole Principle (informal connection):** If you have more pigeons than pigeonholes, at least one pigeonhole must contain more than one pigeon. In the context of functions, if the domain ($A$) has more elements than the codomain ($B$), and you try to define a function $f: A \rightarrow B$, then by the Pigeonhole Principle, at least two elements from $A$ *must* map to the same element in $B$. Therefore, no injection can exist from a larger set to a smaller set.

**Theorem (from Rosen, 8th Ed., Chapter 2.3):** If there exists an injection from set $A$ to set $B$, then $|A| \le |B|$.

This is an incredibly important consequence. If you're asked to determine if an injection can exist between two sets, just compare their sizes!

*   If $|A| > |B|$, no injection is possible from $A$ to $B$.
*   If $|A| \le |B|$, an injection *might* be possible.

This theorem is fundamental for understanding counting principles and is directly related to **CO2**.

#### Visualizing Injections

Think of a function as drawing arrows from elements in the domain to elements in the codomain.

*   For a function to be an injection, no two arrows can point to the same element in the codomain. Each element in the codomain can be the endpoint of at most one arrow.

Let's visualize our examples:

**Example 1 (Not Injection):** $f: \mathbb{Z} \rightarrow \mathbb{Z}$, $f(x) = x^2$
Domain: ..., -2, -1, 0, 1, 2, ...
Codomain: ..., -2, -1, 0, 1, 2, 3, 4, ...

Arrows:
-1 -> 1
1 -> 1 (Two arrows pointing to 1)
-2 -> 4
2 -> 4 (Two arrows pointing to 4)

See? Multiple arrows (from -1 and 1) are pointing to the same output (1). This is the visual cue for "not an injection."

**Example 4 (Injection):** $pos: \{'a', 'b', 'c'\} \rightarrow \{1, 2, 3\}$
Domain: 'a', 'b', 'c'
Codomain: 1, 2, 3

Arrows:
'a' -> 1
'b' -> 2
'c' -> 3

Here, each element in the codomain (1, 2, 3) is the target of exactly one arrow. This is the visual representation of an injection.

#### Injections and Counting (CO2 Connection)

As I mentioned, injections are deeply tied to counting.

**Permutations:** A permutation of a set of $n$ objects is an arrangement of those objects in a specific order. If we have a set $S = \{s_1, s_2, ..., s_n\}$, a permutation can be thought of as a function $f: \{1, 2, ..., n\} \rightarrow S$ which maps the position (1st, 2nd, ..., nth) to the object at that position. This function must be an injection because each position is assigned a unique object, and each object is placed in a unique position. The number of permutations of $n$ distinct objects is $n!$, which is the number of possible injections from a set of $n$ positions to a set of $n$ objects.

**Choosing $k$ items from $n$ and arranging them (Permutations $P(n, k)$):** Suppose we want to select $k$ items from a set of $n$ distinct items and arrange them in order. This is equivalent to creating an injection from the set of $k$ positions to the set of $n$ items.
Let the $k$ positions be $P = \{1, 2, ..., k\}$ and the $n$ items be $I = \{i_1, i_2, ..., i_n\}$.
We define a function $f: P \rightarrow I$.
For the first position, we have $n$ choices for an item.
For the second position, since we can't repeat an item (it must be an injection), we have $n-1$ choices.
...
For the $k$-th position, we have $n-(k-1) = n-k+1$ choices.

So, the total number of such injections (ordered arrangements) is $n \times (n-1) \times \dots \times (n-k+1)$. This is precisely the formula for permutations, $P(n, k) = \frac{n!}{(n-k)!}$. This demonstrates how the property of being an injection directly underpins counting techniques.

#### Summary and Key Takeaways

*   An **injection** (or **one-to-one function**) $f: A \rightarrow B$ ensures that no two distinct elements in the domain $A$ map to the same element in the codomain $B$.
*   The formal definition is: for all $a_1, a_2 \in A$, if $a_1 \neq a_2$, then $f(a_1) \neq f(a_2)$.
*   A more practical definition for proof is: for all $a_1, a_2 \in A$, if $f(a_1) = f(a_2)$, then $a_1 = a_2$. **Always remember this!**
*   An injection can only exist from set $A$ to set $B$ if $|A| \le |B|$. This is a direct consequence of the Pigeonhole Principle and a crucial theorem.
*   Injections are fundamental to counting, particularly in understanding permutations, which are ordered arrangements of distinct objects.
*   Real-world examples include unique student IDs, assigning unique serial numbers, or mapping distinct letters to their positions.

Understanding injections is a stepping stone to understanding more complex mappings like bijections (which are both injective and surjective), and they form the backbone of many combinatorial arguments and computer science applications like hashing and data indexing.

---

### Sample Questions with Answers

**Q1. Conceptual Understanding:**
Define an injection (one-to-one function) in your own words and provide the formal mathematical definition. Explain why the function $f(x) = 2x + 1$ from the set of integers $\mathbb{Z}$ to $\mathbb{Z}$ is an injection.

**Answer:**
*   **In my own words:** An injection is like a strict rule where every unique input from our starting set gets its own unique output in the target set. No two different inputs can ever land on the same output.
*   **Formal Definition:** A function $f: A \rightarrow B$ is an injection if for all $a_1, a_2 \in A$, if $a_1 \neq a_2$, then $f(a_1) \neq f(a_2)$. Alternatively, and often more useful for proofs: for all $a_1, a_2 \in A$, if $f(a_1) = f(a_2)$, then $a_1 = a_2$.
*   **Proof for $f(x) = 2x + 1$ from $\mathbb{Z}$ to $\mathbb{Z}$:**
    Let $a_1, a_2 \in \mathbb{Z}$ such that $f(a_1) = f(a_2)$.
    This means $2a_1 + 1 = 2a_2 + 1$.
    Subtracting 1 from both sides, we get $2a_1 = 2a_2$.
    Dividing both sides by 2, we get $a_1 = a_2$.
    Since $f(a_1) = f(a_2)$ implies $a_1 = a_2$, the function $f(x) = 2x + 1$ is an injection.

**Q2. Application/Comparison:**
Consider two functions:
1.  $g: \mathbb{R} \rightarrow \mathbb{R}$ defined by $g(x) = |x|$ (absolute value).
2.  $h: \mathbb{R}^+ \rightarrow \mathbb{R}$ defined by $h(x) = x^2$. ($\mathbb{R}^+$ is the set of positive real numbers)

Are these functions injections? Justify your answers.

**Answer:**
1.  **$g(x) = |x|$ from $\mathbb{R}$ to $\mathbb{R}$:**
    This function is **not** an injection. For example, $g(2) = |2| = 2$ and $g(-2) = |-2| = 2$. Here, $2 \neq -2$, but $g(2) = g(-2)$. Different inputs (2 and -2) map to the same output (2).

2.  **$h(x) = x^2$ from $\mathbb{R}^+$ to $\mathbb{R}$:**
    This function **is** an injection. Let $a_1, a_2 \in \mathbb{R}^+$ such that $h(a_1) = h(a_2)$. This means $a_1^2 = a_2^2$. Since both $a_1$ and $a_2$ are positive real numbers, taking the positive square root of both sides gives $a_1 = a_2$. Therefore, the function is an injection.

**Q3. Exam-oriented (Counting/CO2):**
How many different ways can you award first, second, and third place in a race with 10 participants? Explain how this relates to injections.

**Answer:**
This problem is about selecting 3 participants from 10 and arranging them in a specific order (1st, 2nd, 3rd). This is a permutation problem.

*   **Calculation:** The number of ways to choose and arrange 3 participants from 10 is given by the permutation formula $P(n, k) = \frac{n!}{(n-k)!}$.
    Here, $n=10$ (total participants) and $k=3$ (places to award).
    So, $P(10, 3) = \frac{10!}{(10-3)!} = \frac{10!}{7!} = 10 \times 9 \times 8 = 720$.
    There are 720 ways to award the places.

*   **Relation to Injections:** This problem can be modeled as finding the number of injections from the set of places $\{1^{st}, 2^{nd}, 3^{rd}\}$ to the set of participants $\{P_1, P_2, ..., P_{10}\}$.
    Let $A = \{1^{st}, 2^{nd}, 3^{rd}\}$ and $B = \{P_1, P_2, ..., P_{10}\}$.
    We are defining a function $f: A \rightarrow B$, where $f(\text{place}) = \text{participant awarded that place}$.
    For the function to be valid for awarding distinct places to distinct participants, it must be an injection:
    *   For $1^{st}$ place, there are 10 choices of participants.
    *   For $2^{nd}$ place, since the participant for $1^{st}$ place cannot also get $2^{nd}$ place (injection property), there are 9 remaining choices.
    *   For $3^{rd}$ place, there are 8 remaining choices.
    The total number of such injective mappings is $10 \times 9 \times 8 = 720$. This confirms that counting ordered arrangements is equivalent to counting injections from the set of positions to the set of available items.

**Q4. Conceptual/Logical Reasoning (CO1 connection):**
Suppose you are given two finite sets, $A$ and $B$. If $|A| > |B|$, can an injection exist from $A$ to $B$? Briefly explain why or why not, referencing a key principle.

**Answer:**
No, an injection cannot exist from set $A$ to set $B$ if $|A| > |B|$.
This is a direct consequence of the **Pigeonhole Principle**. If we consider the elements of set $A$ as "pigeons" and the elements of set $B$ as "pigeonholes," and we are trying to map each pigeon to a pigeonhole (define a function $f: A \rightarrow B$), then if there are more pigeons than pigeonholes, at least one pigeonhole must contain more than one pigeon. In function terms, this means at least two distinct elements from $A$ would map to the same element in $B$. This violates the definition of an injection, which requires that distinct elements in $A$ map to distinct elements in $B$. Therefore, if $|A| > |B|$, no injection from $A$ to $B$ is possible.
