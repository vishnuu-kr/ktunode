---
title: "Permutation group"
subject: "DISCRETE MATHEMATICS"
module: "Module 4: Group theory"
branch: "Computer Science and Engineering"
semester: 2
topicId: "68b45b6f58474a0b135b5fb2"
status: "completed"
scrapedAt: "2026-05-20T16:33:13.890Z"
---
## DISCRETE MATHEMATICS - MODULE 4: GROUP THEORY

### Topic: The Wonderful World of Permutations

Hello everyone! Welcome back to our exploration of Discrete Mathematics. Today, we’re diving into a particularly fascinating and powerful part of group theory: **Permutation Groups**. This topic is not just abstract theory; it’s deeply connected to many areas of computer science, from algorithms to cryptography. By the end of this session, you’ll understand what permutations are, how they form groups, and why they are so important.

You’ll recall from our earlier discussions on algebraic structures that a **group** is a set with an operation that satisfies certain properties: closure, associativity, existence of an identity element, and existence of inverse elements. Permutation groups are a prime example of this, and understanding them will solidify your grasp of abstract algebra, directly linking to **Course Outcome 6 (CO6)**, where we learn to illustrate abstract algebraic systems like groups.

Furthermore, the ability to count and arrange items is crucial in many areas of computer science. Permutations are at the heart of counting problems, and mastering this topic will directly contribute to your understanding of **Course Outcome 2 (CO2)**, where we solve counting problems using techniques like permutations and combinations.

### What Exactly is a Permutation?

Let’s start with the basics. Imagine you have a set of distinct objects. A **permutation** of this set is simply an arrangement or a reordering of its elements.

Think about it this way: Suppose you have three distinct colored balls: Red (R), Green (G), and Blue (B). How many different ways can you arrange these balls in a line?
You could have R G B, R B G, G R B, G B R, B R G, B G R. There are 6 distinct arrangements.

Formally, if we have a finite set *S*, a permutation of *S* is a bijection (a one-to-one and onto function) from *S* to itself.
If our set *S* has *n* elements, say *S = {1, 2, ..., n}*, a permutation *f* of *S* maps each element *i* in *S* to a unique element *f(i)* in *S*, such that no two elements are mapped to the same image.

**Analogy:** Imagine a line of *n* people. A permutation is like everyone in the line switching places, but everyone stays in the line, and each person ends up in a new, distinct spot.

**Notation:**
We often represent permutations in two ways:

1.  **Two-Line Notation:** This is a very clear way to show where each element goes. If we have a permutation *f* of *S = {1, 2, 3}* where *f(1) = 2, f(2) = 3, f(3) = 1*, we can write it as:

    $$
    \begin{pmatrix}
    1 & 2 & 3 \\
    2 & 3 & 1
    \end{pmatrix}
    $$

    This means '1 maps to 2', '2 maps to 3', and '3 maps to 1'.

2.  **Cycle Notation:** This is a more compact and often more useful notation, especially when dealing with group operations. A cycle represents elements moving cyclically. For the same permutation above, since 1 goes to 2, 2 goes to 3, and 3 goes back to 1, this forms a single cycle: **(1 2 3)**.
    If we had a permutation of *S = {1, 2, 3, 4}* where *f(1) = 2, f(2) = 1, f(3) = 4, f(4) = 3*, we could write it as:

    $$
    \begin{pmatrix}
    1 & 2 & 3 & 4 \\
    2 & 1 & 4 & 3
    \end{pmatrix}
    $$

    In cycle notation, this would be **(1 2)(3 4)**. The element 1 maps to 2, and 2 maps back to 1 (forming a cycle). Independently, 3 maps to 4, and 4 maps back to 3 (forming another cycle). Elements that map to themselves are usually omitted in cycle notation, as they form a 1-element cycle (e.g., (5)).

**Rosen & Krithivasan (8/e)** dedicates a significant portion to permutations and their notation, highlighting how they are bijections. Pay close attention to their examples of converting between two-line and cycle notation – it’s a fundamental skill.

### The Symmetric Group: All Possible Permutations

Now, let’s consider the set of *all* possible permutations of a set *S* with *n* elements. This set, along with the operation of **composition of permutations**, forms a very important algebraic structure called the **symmetric group**, denoted by $S_n$.

**What is Composition?**
When we talk about composing permutations, we're essentially applying one permutation after another. If we have two permutations, $f$ and $g$, the composition $f \circ g$ means applying $g$ first, and then applying $f$ to the result.
Using our example of $S = \{1, 2, 3\}$:
Let $f = \begin{pmatrix} 1 & 2 & 3 \\ 2 & 3 & 1 \end{pmatrix}$ (cycle notation (1 2 3))
Let $g = \begin{pmatrix} 1 & 2 & 3 \\ 1 & 3 & 2 \end{pmatrix}$ (cycle notation (2 3))

What is $f \circ g$?
We start with an element, say 1.
First, apply $g$: $g(1) = 1$.
Then, apply $f$ to the result: $f(1) = 2$.
So, $(f \circ g)(1) = 2$.

Now for 2:
First, apply $g$: $g(2) = 3$.
Then, apply $f$: $f(3) = 1$.
So, $(f \circ g)(2) = 1$.

And for 3:
First, apply $g$: $g(3) = 2$.
Then, apply $f$: $f(2) = 3$.
So, $(f \circ g)(3) = 3$.

Therefore, $f \circ g = \begin{pmatrix} 1 & 2 & 3 \\ 2 & 1 & 3 \end{pmatrix}$, which in cycle notation is **(1 2)**.

**Key Point:** Composition of permutations is **not commutative** in general. That is, $f \circ g$ is usually not the same as $g \circ f$. Let's check our example:
What is $g \circ f$?
For 1: $f(1) = 2$, then $g(2) = 3$. So $(g \circ f)(1) = 3$.
For 2: $f(2) = 3$, then $g(3) = 2$. So $(g \circ f)(2) = 2$.
For 3: $f(3) = 1$, then $g(1) = 1$. So $(g \circ f)(3) = 1$.
So, $g \circ f = \begin{pmatrix} 1 & 2 & 3 \\ 3 & 2 & 1 \end{pmatrix}$, which is **(1 3)**.
Indeed, $(f \circ g) = (1 2)$ and $(g \circ f) = (1 3)$, so $f \circ g \neq g \circ f$. This is a crucial difference from some other algebraic structures we might encounter.

**The Symmetric Group $S_n$ is a Group:**
Let's verify why $S_n$ with composition forms a group:

1.  **Closure:** If you compose two permutations of a set, the result is also a permutation of that set. This is because composition of bijections is always a bijection.
2.  **Associativity:** The composition of functions is associative. That is, for any permutations $f, g, h$, $(f \circ g) \circ h = f \circ (g \circ h)$. Think of it as the order of applying the *operations* matters, not the order of *grouping* them.
3.  **Identity Element:** The identity permutation, denoted by *e* or $id$, is the permutation where every element maps to itself. In two-line notation:
    $$
    \begin{pmatrix}
    1 & 2 & \dots & n \\
    1 & 2 & \dots & n
    \end{pmatrix}
    $$
    or in cycle notation, it's an empty product or just 1. For any permutation *f*, $f \circ e = e \circ f = f$.
4.  **Inverse Element:** For every permutation *f*, there exists an inverse permutation $f^{-1}$ such that $f \circ f^{-1} = f^{-1} \circ f = e$. If $f$ maps *i* to *j*, then $f^{-1}$ maps *j* back to *i*.
    In two-line notation, to find the inverse, you simply swap the rows and then reorder the columns to put the top row in natural order.
    Example: $f = \begin{pmatrix} 1 & 2 & 3 \\ 2 & 3 & 1 \end{pmatrix}$.
    Swap rows: $\begin{pmatrix} 2 & 3 & 1 \\ 1 & 2 & 3 \end{pmatrix}$.
    Reorder top row to (1 2 3): $\begin{pmatrix} 1 & 2 & 3 \\ 3 & 1 & 2 \end{pmatrix}$.
    So, $f^{-1} = \begin{pmatrix} 1 & 2 & 3 \\ 3 & 1 & 2 \end{pmatrix}$. In cycle notation, if $f = (1 2 3)$, then $f^{-1} = (1 3 2)$.

**Size of $S_n$:**
The number of elements in $S_n$ is $n!$ (n factorial), because for the first element, there are *n* choices, for the second, *n-1* choices, and so on. This is a direct connection to **CO2**.

### Permutation Groups: Subgroups of Symmetric Groups

While the symmetric group $S_n$ is itself a group, often in practice we deal with specific *subsets* of permutations that also form a group. These are called **permutation groups**. A permutation group is a subgroup of some symmetric group $S_n$.

**What is a Subgroup?**
A subset *H* of a group *G* is called a subgroup if *H* itself forms a group under the same operation as *G*.
To check if a non-empty subset *H* of a group *G* is a subgroup, we can use the **Subgroup Test**:
*   *H* is a subgroup of *G* if and only if for all $a, b \in H$, the element $a \cdot b^{-1}$ is also in *H*.

**Examples of Permutation Groups:**

1.  **The Alternating Group $A_n$:** This is a very important subgroup of $S_n$. It consists of all **even permutations** in $S_n$. A permutation is called *even* if it can be written as a product of an even number of transpositions (2-cycles), and *odd* if it requires an odd number of transpositions.
    *   **Transposition:** A permutation that swaps exactly two elements and leaves all others fixed. For example, (1 2) is a transposition.
    *   **Parity of a Permutation:** Every permutation can be written as a product of transpositions. While the specific transpositions may differ, the *parity* (whether the number of transpositions is even or odd) is always the same for a given permutation. This is a fundamental result often covered when discussing permutations in texts like **Schaum's Outline of Discrete Mathematics**.
    *   $A_n$ has order $n!/2$ for $n \ge 2$. It's a subgroup because the product of two even permutations is even, the identity is even, and the inverse of an even permutation is even.

    **Example in $S_3$**: The elements are:
    *   $e = \begin{pmatrix} 1 & 2 & 3 \\ 1 & 2 & 3 \end{pmatrix}$ (0 transpositions - even)
    *   $(1 2) = \begin{pmatrix} 1 & 2 & 3 \\ 2 & 1 & 3 \end{pmatrix}$ (1 transposition - odd)
    *   $(1 3) = \begin{pmatrix} 1 & 2 & 3 \\ 3 & 2 & 1 \end{pmatrix}$ (1 transposition - odd)
    *   $(2 3) = \begin{pmatrix} 1 & 2 & 3 \\ 1 & 3 & 2 \end{pmatrix}$ (1 transposition - odd)
    *   $(1 2 3) = \begin{pmatrix} 1 & 2 & 3 \\ 2 & 3 & 1 \end{pmatrix}$ (can be written as (1 3)(1 2) - 2 transpositions - even)
    *   $(1 3 2) = \begin{pmatrix} 1 & 2 & 3 \\ 3 & 1 & 2 \end{pmatrix}$ (can be written as (1 2)(1 3) - 2 transpositions - even)

    The even permutations in $S_3$ are $e$, $(1 2 3)$, and $(1 3 2)$. So $A_3 = \{e, (1 2 3), (1 3 2)\}$. You can verify that this set forms a group under composition.

2.  **Dihedral Groups ($D_n$):** These groups represent the symmetries of a regular n-gon. They include rotations and reflections. While they can be represented using permutations of the vertices, they are often introduced as a distinct type of group in introductory abstract algebra. They are indeed permutation groups as the symmetries permute the vertices of the polygon.

**Real-world Connection (for CO2 and CO6):**
Think about shuffling a deck of cards. Each shuffle is a permutation. A standard deck has 52 cards, so the set of all possible shuffles is a tiny part of $S_{52}$ (which is an enormous group!). Specific shuffling techniques might generate sequences of permutations that form a cyclic group or other subgroups.

Consider a Rubik's Cube. Each move on a Rubik's Cube is a permutation of the small colored faces (cubies). The set of all possible states of a Rubik's Cube reachable from the solved state forms a permutation group, which is a subgroup of the symmetric group on the 48 movable cubies. This illustrates **CO6** and shows how complex structures can be understood using group theory.

### Cayley's Theorem: Every Group is a Permutation Group!

This is a truly profound result, stated by Arthur Cayley. **Cayley's Theorem** asserts that every abstract group *G* is isomorphic to a subgroup of the symmetric group on its own elements. In simpler terms, any group you can imagine, no matter how abstract it seems, can be represented as a group of permutations. This means that the study of permutation groups is fundamental to understanding *all* groups.

**How does it work?**
For each element *g* in a group *G*, we can define a permutation $\lambda_g$ of the set *G* itself, where $\lambda_g(x) = g \cdot x$ for any $x \in G$. This mapping $\lambda_g$ is a bijection (it's a permutation).
The set of all such $\lambda_g$ for $g \in G$ forms a group under composition, and this group is isomorphic to *G*.

This is a bit more advanced, but the core idea is that permutations are like the "building blocks" of all groups. This reinforces the importance of permutation groups for **CO6**.

### Applications and Relevance

Permutation groups are not just theoretical constructs; they have wide-ranging applications in computer science and beyond:

*   **Algorithm Design and Analysis:** Many algorithms involve rearranging data. Understanding permutations helps in analyzing their efficiency. For example, sorting algorithms can be viewed in terms of permutations.
*   **Cryptography:** Permutation ciphers, like the transposition cipher, directly use permutations to scramble messages. Modern cryptography also relies on complex group-theoretic principles, often involving permutations.
*   **Coding Theory:** Error-correcting codes can be constructed using permutation groups.
*   **Combinatorics and Counting:** As we've seen, permutations are fundamental to counting arrangements, which is vital for **CO2**.
*   **Computational Group Theory:** Software systems use permutation group representations to study finite groups.

### How to Approach Permutation Group Problems (Exam Tips)

1.  **Master Notation:** Be comfortable with both two-line and cycle notation. Being able to convert between them quickly is essential.
2.  **Composition:** Practice composing permutations. Remember the order of application (right to left for $f \circ g$). Look for patterns when composing cycles.
3.  **Cycle Decomposition:** Practice decomposing permutations into disjoint cycles. This is key to determining parity and understanding the structure.
4.  **Identify Groups:** When given a set of permutations, check if they satisfy the group properties (closure, associativity, identity, inverse). The subgroup test is your friend!
5.  **Subgroups:** Recognize common subgroups like the alternating group $A_n$. Understand the concept of order of a group and order of an element.
6.  **Relate to CO2:** When asked to count arrangements, think if permutations are the right tool. If you need to arrange *k* items out of *n*, it's $P(n,k) = n!/(n-k)!$. This is the size of certain permutation groups.
7.  **Relate to CO6:** Always think about the group properties. If you are asked to prove something is a group, you *must* check all four axioms.

**Common Pitfalls:**
*   Forgetting that permutation composition is not commutative.
*   Making mistakes in cycle decomposition or composition.
*   Confusing the symmetric group $S_n$ with a permutation group that is a *subgroup* of $S_n$.
*   Not verifying all group axioms when asked to prove a set is a group.

### Summary of Key Takeaways

*   A **permutation** is a reordering of elements of a set, formally a bijection from the set to itself.
*   We use **two-line notation** and **cycle notation** to represent permutations. Cycle notation is particularly useful for composition.
*   The **symmetric group $S_n$** is the set of all permutations of *n* elements, with composition as the operation. It has $n!$ elements.
*   A **permutation group** is a subgroup of some symmetric group.
*   **Even** and **odd** permutations are classified by the parity of the number of transpositions they can be decomposed into. The **alternating group $A_n$** consists of all even permutations in $S_n$.
*   **Cayley's Theorem** shows that every group can be viewed as a permutation group.

Remember these concepts, practice the notation and operations, and you'll find permutation groups to be a very rewarding topic. They are fundamental to understanding many other areas of mathematics and computer science.

---

### Sample Questions and Answers

**Q1. (Conceptual - CO6)**
Let $S = \{a, b, c\}$. Consider the permutation $f$ of $S$ defined by $f(a) = b$, $f(b) = c$, and $f(c) = a$.
(a) Write $f$ in two-line notation.
(b) Write $f$ in cycle notation.
(c) Is $f$ an even or odd permutation? Justify your answer.
(d) If $g$ is another permutation of $S$ given by $g(a) = a$, $g(b) = c$, $g(c) = b$, find $f \circ g$ in cycle notation.

**Answer:**
(a) Two-line notation:
$$
\begin{pmatrix}
a & b & c \\
b & c & a
\end{pmatrix}
$$
(b) Cycle notation: $(a b c)$. This shows $a \to b \to c \to a$.

(c) To determine parity, we can decompose it into transpositions. The cycle $(a b c)$ can be written as the product of two transpositions: $(a c)(a b)$. Since it's a product of 2 transpositions, it's an **even** permutation.

(d) First, write $g$ in cycle notation: $g = (b c)$.
We need to find $f \circ g$, which means applying $g$ first, then $f$.
*   For $a$: $g(a) = a$. Then $f(a) = b$. So $(f \circ g)(a) = b$.
*   For $b$: $g(b) = c$. Then $f(c) = a$. So $(f \circ g)(b) = a$.
*   For $c$: $g(c) = b$. Then $f(b) = c$. So $(f \circ g)(c) = c$.
Thus, $f \circ g$ maps $a \to b$, $b \to a$, and $c \to c$.
In cycle notation, this is $(a b)$.

**Q2. (Exam-Oriented - CO2, CO6)**
Consider the set $H = \{\begin{pmatrix} 1 & 2 & 3 \\ 1 & 2 & 3 \end{pmatrix}, \begin{pmatrix} 1 & 2 & 3 \\ 2 & 3 & 1 \end{pmatrix}, \begin{pmatrix} 1 & 2 & 3 \\ 3 & 1 & 2 \end{pmatrix}\}$ from the symmetric group $S_3$.
Prove that $H$ is a subgroup of $S_3$ under the operation of composition.

**Answer:**
To prove $H$ is a subgroup of $S_3$, we need to show it satisfies the closure property, contains the identity element, and contains inverses for all its elements. We can also use the subgroup test for a more concise proof.

Let $e = \begin{pmatrix} 1 & 2 & 3 \\ 1 & 2 & 3 \end{pmatrix}$, $f = \begin{pmatrix} 1 & 2 & 3 \\ 2 & 3 & 1 \end{pmatrix}$ (which is $(1 2 3)$ in cycle notation), and $g = \begin{pmatrix} 1 & 2 & 3 \\ 3 & 1 & 2 \end{pmatrix}$ (which is $(1 3 2)$ in cycle notation). So $H = \{e, f, g\}$.

**Method 1: Checking Axioms Directly**
1.  **Identity Element:** The identity permutation $e$ is clearly in $H$.
2.  **Closure:** We need to check all possible compositions of elements within $H$.
    *   $e \circ e = e \in H$
    *   $e \circ f = f \in H$
    *   $f \circ e = f \in H$
    *   $e \circ g = g \in H$
    *   $g \circ e = g \in H$
    *   $f \circ f = f \circ (1 2 3) = (1 2 3) \circ (1 2 3) = (1 3 2) = g \in H$
    *   $g \circ g = g \circ (1 3 2) = (1 3 2) \circ (1 3 2) = (1 2 3) = f \in H$
    *   $f \circ g = f \circ (1 3 2) = (1 2 3) \circ (1 3 2) = (1 2 3) \circ ((1 2)(1 3)) = (1 2) \circ (1 3) \circ (1 2) = (1 2)(1 3 2) = e \in H$
    *   $g \circ f = g \circ (1 2 3) = (1 3 2) \circ (1 2 3) = (1 3 2) \circ ((1 3)(1 2)) = (1 3)(1 2)(1 3) = (1 3)(1 2 3) = e \in H$
    All compositions result in an element of $H$. Thus, $H$ is closed under composition.

3.  **Inverse Element:**
    *   $e^{-1} = e \in H$.
    *   $f^{-1} = (1 2 3)^{-1} = (1 3 2) = g \in H$. (We found this in the composition checks: $f \circ g = e$).
    *   $g^{-1} = (1 3 2)^{-1} = (1 2 3) = f \in H$. (We found this in the composition checks: $g \circ f = e$).
    Every element in $H$ has its inverse within $H$.

Since $H$ contains the identity, is closed under composition, and contains inverses, it forms a group.

**Method 2: Using the Subgroup Test**
We need to show that for any $x, y \in H$, $x \circ y^{-1} \in H$.
We already know $e, f, g$ are the elements.
Inverses are $e^{-1}=e$, $f^{-1}=g$, $g^{-1}=f$.

We need to check the following combinations for $x \circ y^{-1}$:
*   $e \circ e^{-1} = e \circ e = e \in H$.
*   $e \circ f^{-1} = e \circ g = g \in H$.
*   $e \circ g^{-1} = e \circ f = f \in H$.
*   $f \circ e^{-1} = f \circ e = f \in H$.
*   $f \circ f^{-1} = f \circ g = e \in H$. (Already checked this composition).
*   $f \circ g^{-1} = f \circ f = g \in H$. (Already checked this composition).
*   $g \circ e^{-1} = g \circ e = g \in H$.
*   $g \circ f^{-1} = g \circ g = f \in H$. (Already checked this composition).
*   $g \circ g^{-1} = g \circ f = e \in H$. (Already checked this composition).

Since for all pairs $x, y \in H$, $x \circ y^{-1} \in H$, $H$ is a subgroup of $S_3$.

**Note:** This group $H$ is actually the cyclic group of order 3, denoted $C_3$, and it is also the alternating group $A_3$. It's also isomorphic to the group of integers modulo 3 under addition, $(\mathbb{Z}_3, +)$. This connects directly to **CO6**.

---
