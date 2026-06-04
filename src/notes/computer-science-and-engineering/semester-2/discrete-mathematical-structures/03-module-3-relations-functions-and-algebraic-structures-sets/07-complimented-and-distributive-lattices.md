---
title: "Complimented and Distributive lattices"
subject: "DISCRETE MATHEMATICAL STRUCTURES"
module: "Module 3: Relations, Functions and Algebraic Structures: Sets"
branch: "Computer Science and Engineering"
semester: 2
topicId: "68b45b6f58474a0b135b600e"
status: "completed"
scrapedAt: "2026-05-20T16:32:28.700Z"
---
This is a fantastic request! Let's dive into the fascinating world of lattices, specifically complemented and distributive lattices. As your professor for Discrete Mathematical Structures, I'm excited to guide you through this topic, which is crucial for understanding abstract algebraic systems and their applications. Think of this as our lecture notes, designed to build your understanding from the ground up, connecting each concept to our broader course objectives.

---

## Module 3: Relations, Functions and Algebraic Structures: Sets

### Topic: Complemented and Distributive Lattices

Welcome back, everyone! Last time, we laid the groundwork for understanding relations and functions. Today, we're venturing into the realm of **Algebraic Structures**, specifically focusing on **lattices**. Lattices are more than just mathematical curiosities; they are fundamental to areas like set theory, logic, and computer science. We'll build upon our understanding of sets and explore how they can form these structured systems.

**Connecting to Course Outcomes:**

Before we get into the nitty-gritty, let's see how this topic aligns with our course objectives.

*   **CO3: Describe the concepts of sets, relations, and functions, and recognize the properties and structures of algebraic systems such as lattices, semigroups, monoids, groups, rings, and fields.**
    This topic directly addresses the "algebraic systems such as lattices" part of CO3. We'll be learning precisely *what* a lattice is and how to identify its defining properties.
*   **CO4: Explain the concepts of sets, relations, functions, algebraic structures such as groups and fields, and the methods for solving first and second-order linear recurrence relations using generating functions and other techniques.**
    Similar to CO3, we're deepening our understanding of algebraic structures, specifically lattices. By the end of this section, you'll be able to explain the defining characteristics of different types of lattices.
*   **CO1: Apply logical reasoning and formal methods to construct and verify logical arguments and proofs involving propositions, truth tables, logical equivalence, and quantifiers.**
    While we're not directly proving theorems about lattices today, the rigorous definitions and properties we'll explore rely heavily on logical reasoning. Understanding lattices will help you appreciate how logical structures are formalized, which is key for CO1.
*   **CO2: Apply fundamental counting principles, including permutations, combinations, and the pigeonhole principle, to solve problems related to combinatorial analysis and discrete structures.**
    Lattices often arise in combinatorial contexts. For instance, the power set of a set, ordered by inclusion, forms a lattice. Counting the elements or substructures within such lattices can involve combinatorial techniques.

So, as you can see, lattices are a vital piece of the puzzle in our journey through discrete mathematics!

---

### 1. What is a Lattice? A Foundation of Order

Let's start with the basics. At its core, a lattice is a **partially ordered set** where every pair of elements has a **unique least upper bound (join)** and a **unique greatest lower bound (meet)**.

Now, I know "partially ordered set" might sound a bit abstract, but think about how we naturally order things. We order numbers: 3 is less than 5. We order strings alphabetically: "apple" comes before "banana." In these cases, any two numbers or strings have a clear relationship – one is definitely less than or equal to the other. This is a **totally ordered set**.

However, not everything can be totally ordered. Consider your favorite fruits: apples, bananas, and oranges. Can you definitively say an apple is "less than" a banana? Not really, in a universally agreed-upon way. But we *can* say certain things. For example, if we consider categories like "fruit" and "citrus fruit," then "citrus fruit" is "less than" "fruit" in a hierarchical sense. This is where **partial order** comes in.

**Formalizing Partial Order:**
A relation $R$ on a set $S$ is a partial order if for all $a, b, c \in S$:
1.  **Reflexive:** $a R a$ (Every element is related to itself).
2.  **Antisymmetric:** If $a R b$ and $b R a$, then $a = b$ (If $a$ precedes $b$ and $b$ precedes $a$, they must be the same element).
3.  **Transitive:** If $a R b$ and $b R c$, then $a R c$ (If $a$ precedes $b$ and $b$ precedes $c$, then $a$ must precede $c$).

Think of the "divides" relation on positive integers. 2 divides 4, 4 divides 8, and 2 divides 8. This is a partial order. However, 2 and 3 are not related by divisibility (neither divides the other), so it's not a total order.

**Introducing Join and Meet:**
Now, for a partially ordered set to be a lattice, it needs two special operations:

*   **Join (Least Upper Bound - LUB):** For any two elements $a$ and $b$, their join, denoted by $a \vee b$, is the smallest element $c$ such that $a \le c$ and $b \le c$.
*   **Meet (Greatest Lower Bound - GLB):** For any two elements $a$ and $b$, their meet, denoted by $a \wedge b$, is the largest element $d$ such that $d \le a$ and $d \le b$.

**Analogy Time!**
Imagine a family tree. We can order individuals by "ancestry" (parent, grandparent, etc.). If we have two individuals, say Alice and Bob, their **join** (LUB) would be their common ancestor who is furthest down the family tree (their youngest common ancestor). Their **meet** (GLB) would be their common ancestor who is furthest up the tree (their oldest common ancestor, perhaps Adam and Eve in a very broad sense!).

**Example from Grimaldi:**
Consider the power set of $\{a, b\}$, denoted by $P(\{a, b\})$. The elements are $\emptyset, \{a\}, \{b\}, \{a, b\}$. The partial order is set inclusion ($\subseteq$).
Let's take $A = \{a\}$ and $B = \{b\}$.
*   What's the least upper bound (join) of $A$ and $B$ under $\subseteq$? It's the smallest set containing both $\{a\}$ and $\{b\}$. That's $\{a, b\}$. So, $\{a\} \vee \{b\} = \{a, b\}$.
*   What's the greatest lower bound (meet) of $A$ and $B$ under $\subseteq$? It's the largest set that is a subset of both $\{a\}$ and $\{b\}$. That's $\emptyset$. So, $\{a\} \wedge \{b\} = \emptyset$.

Every pair of elements in this power set has a unique LUB and GLB under set inclusion. Therefore, $(P(\{a, b\}), \subseteq)$ is a lattice. This is a very common and important example, often visualized using **Hasse diagrams**.

**Hasse Diagrams:** A Hasse diagram is a graphical representation of a partially ordered set. It omits loops (reflexivity) and transitive edges, drawing only the direct cover relationships. If $a < b$ and there's no $c$ such that $a < c < b$, we draw an edge upwards from $a$ to $b$.

For $P(\{a, b\})$:
```
      {a, b}
     /      \
   {a}      {b}
     \      /
       Ø
```
Here, the relation is "is a subset of." $\emptyset$ is the bottom element, and $\{a, b\}$ is the top element. From the diagram, you can visually confirm the joins and meets. For $\{a\}$ and $\{b\}$, the LUB is the element directly "above" them, which is $\{a, b\}$. The GLB is the element directly "below" them, which is $\emptyset$.

**Key Takeaway:** A lattice is a poset where every pair has a unique join and meet. This structure is fundamental, as it provides a consistent way to define "supremum" and "infimum" for any two elements. This connects directly to **CO3** and **CO4** as we are describing and explaining algebraic structures.

---

### 2. Types of Lattices: Complemented and Distributive

Now that we have a solid understanding of what a lattice is, let's explore some special types: complemented lattices and distributive lattices. These classifications add further structure and properties that make them particularly useful.

#### 2.1 Complemented Lattices

A **complemented lattice** is a lattice that has a **least element** (often denoted by 0 or $\hat{0}$) and a **greatest element** (often denoted by 1 or $\hat{1}$), such that for every element $a$ in the lattice, there exists an element $b$ (called a **complement** of $a$) with the property:
$a \vee b = 1$ and $a \wedge b = 0$.

**Think of it like this:** Imagine a toolbox with compartments. You have a main compartment (the "greatest element," 1) and a small reject bin (the "least element," 0). For every tool ($a$), there's a way to pair it up with another tool or accessory ($b$) such that when combined, they utilize the entire toolbox's capacity ($a \vee b = 1$) and leave nothing extra or unassigned ($a \wedge b = 0$).

**Important Note:** The complement is not necessarily unique. If it *is* unique for every element, then it's called a **uniquely complemented lattice**.

**Example: The Power Set Lattice**
Let's revisit the power set lattice $(P(S), \subseteq)$ where $S$ is a finite set.
*   The least element is $\emptyset$ (the empty set).
*   The greatest element is $S$ (the universal set).
*   For any subset $A \subseteq S$, its complement is $S \setminus A$, the set of elements in $S$ but not in $A$.
    *   $A \cup (S \setminus A) = S$ (Join is the union, which is the greatest element).
    *   $A \cap (S \setminus A) = \emptyset$ (Meet is the intersection, which is the least element).

So, the power set lattice is a **complemented lattice**. This is a very important example.

**Relating to Logic (CO1):**
In Boolean algebra, which is a type of complemented distributive lattice, the join is often represented by OR ($\vee$) and the meet by AND ($\wedge$). The complement is NOT ($\neg$). If $p$ is a proposition, then $p \vee (\neg p) = \text{True}$ and $p \wedge (\neg p) = \text{False}$. This directly mirrors the definition of a complement in a Boolean lattice. This connection helps solidify your understanding of logical equivalences and the structure of Boolean logic, a key part of **CO1**.

**What to look for in an exam:** When asked if a lattice is complemented, check for the existence of a 0 and a 1, and then for each element, try to find its complement. The power set example is a classic.

---

#### 2.2 Distributive Lattices

A lattice is called **distributive** if it satisfies the distributive laws:
1.  **Left Distributive Law:** $a \wedge (b \vee c) = (a \wedge b) \vee (a \wedge c)$ for all $a, b, c$ in the lattice.
2.  **Right Distributive Law:** $a \vee (b \wedge c) = (a \vee b) \wedge (a \vee c)$ for all $a, b, c$ in the lattice.

In a distributive lattice, the operations of meet and join distribute over each other, much like multiplication distributes over addition in standard arithmetic ($a \times (b + c) = (a \times b) + (a \times c)$).

**Analogy:** Think about scheduling events.
*   Let $a$ be "attend the lecture."
*   Let $b$ be "study the textbook."
*   Let $c$ be "work on homework."

The left distributive law ($a \wedge (b \vee c) = (a \wedge b) \vee (a \wedge c)$) might mean:
"Attending the lecture AND (studying the textbook OR working on homework)" is the same as "(Attending the lecture AND studying the textbook) OR (Attending the lecture AND working on homework)." This makes sense – if you have to do both studying and homework, and also attend the lecture, it's equivalent to attending the lecture while doing studying, OR attending the lecture while doing homework.

The right distributive law ($a \vee (b \wedge c) = (a \vee b) \wedge (a \vee c)$) might mean:
"Attending the lecture OR (studying the textbook AND working on homework)" is the same as "(Attending the lecture OR studying the textbook) AND (Attending the lecture OR working on homework)." This also feels intuitive: if you have to attend the lecture, or do both studying and homework, it's the same as saying you must be available for the lecture *and* also available for either the lecture or the studying, and available for either the lecture or the homework.

**Important Connection:** As mentioned before, **Boolean algebras are a classic example of complemented distributive lattices**. The power set lattice under set union and intersection is also distributive.

**Non-Distributive Example (A Pitfall!):**
Not all lattices are distributive. A classic example is the lattice of subspaces of a vector space (though this might be a bit advanced for our current scope). A simpler one, often used in textbooks like Grimaldi, is the **lattice of divisors of an integer**.
Consider the divisors of 12: {1, 2, 3, 4, 6, 12}. The partial order is "divides."
Let's check the distributive law: $a \wedge (b \vee c) = (a \wedge b) \vee (a \wedge c)$.
Take $a=2$, $b=3$, $c=4$.
*   $b \vee c$ (LUB of 3 and 4) is the least common multiple (LCM) of 3 and 4, which is 12. So, $b \vee c = 12$.
*   $a \wedge (b \vee c) = 2 \wedge 12$. The greatest common divisor (GCD) of 2 and 12 is 2. So, $a \wedge (b \vee c) = 2$.

Now the right side:
*   $a \wedge b = 2 \wedge 3$. GCD(2, 3) = 1.
*   $a \wedge c = 2 \wedge 4$. GCD(2, 4) = 2.
*   $(a \wedge b) \vee (a \wedge c) = 1 \vee 2$. LCM(1, 2) = 2.

In this case, $2 = 2$. The left distributive law holds for these elements.

Let's try another set of elements. Consider the divisors of 30: {1, 2, 3, 5, 6, 10, 15, 30}.
Let $a=6$, $b=10$, $c=15$.
*   $b \vee c = \text{lcm}(10, 15) = 30$.
*   $a \wedge (b \vee c) = 6 \wedge 30 = \text{gcd}(6, 30) = 6$.

Now the right side:
*   $a \wedge b = \text{gcd}(6, 10) = 2$.
*   $a \wedge c = \text{gcd}(6, 15) = 3$.
*   $(a \wedge b) \vee (a \wedge c) = 2 \vee 3 = \text{lcm}(2, 3) = 6$.

Still holds! This example is often used to *show* distributivity. A common non-distributive example is the lattice of subspaces of $\mathbb{R}^3$ or a specific lattice called the "diamond lattice" or "pentagon lattice" if you order elements differently.

**A Classic Non-Distributive Lattice: The "Diamond" Lattice**
Consider a lattice with elements {0, a, b, c, 1} where 0 is the least element, 1 is the greatest, $a, b, c$ are "middle" elements.
Let:
*   $a \vee b = c$
*   $a \wedge b = 0$
*   $a \vee c = 1$
*   $a \wedge c = a$
*   $b \vee c = 1$
*   $b \wedge c = b$
*   $a \vee 0 = a$, $a \wedge 0 = 0$
*   $b \vee 0 = b$, $b \wedge 0 = 0$
*   $c \vee 0 = c$, $c \wedge 0 = 0$
*   $a \vee 1 = 1$, $a \wedge 1 = a$
*   $b \vee 1 = 1$, $b \wedge 1 = b$
*   $c \vee 1 = 1$, $c \wedge 1 = c$

Now, let's test distributivity with $a$, $b$, and $c$.
Consider $a \wedge (b \vee c)$:
$a \wedge (b \vee c) = a \wedge 1 = a$.

Consider $(a \wedge b) \vee (a \wedge c)$:
$(a \wedge b) \vee (a \wedge c) = 0 \vee a = a$.
This particular case *does* hold.

Let's try $a \vee (b \wedge c)$:
$a \vee (b \wedge c) = a \vee b = c$.

Consider $(a \vee b) \wedge (a \vee c)$:
$(a \vee b) \wedge (a \vee c) = c \wedge 1 = c$.
This also holds.

Ah, my apologies! The standard "diamond" lattice IS distributive. The common non-distributive example is often shown with **five elements** but with different relationships, sometimes called the "modular lattice" example which is distributive for 3 elements but not for 4 elements. Let's use a clearer example of non-distributivity.

**Grimaldi's Example: Lattice of Subsets of {1,2,3,4} where the size of subset is even or odd.**
This is getting complex, so let's stick to the core concept and a more standard demonstration of non-distributivity.

**A Simpler Way to Spot Non-Distributivity (from Grimaldi):**
A lattice is non-distributive if and only if it contains a sublattice isomorphic to the "pentagon lattice" or the "diamond lattice" (which is actually distributive, a common confusion!). The non-distributive case is often referred to as the *pentagon* lattice.

**The "Pentagon" Lattice:**
Elements {0, a, b, c, 1}
0 < a < c < 1
0 < b < c < 1
And also: a < b, b < a does NOT hold, c is the join of a and b, c is the meet of a and b, etc.
Let's draw it:
```
      1
     /|\
    / | \
   a  c  b
    \ | /
     \|/
      0
```
This diagram shows:
$a \vee b = c$
$a \wedge b = 0$
$a \vee c = c$
$a \wedge c = a$
$b \vee c = c$
$b \wedge c = b$
$0$ is least, $1$ is greatest.

Now, let's test $a \vee (b \wedge c)$:
$a \vee (b \wedge c) = a \vee b = c$.

Let's test $(a \vee b) \wedge (a \vee c)$:
$(a \vee b) \wedge (a \vee c) = c \wedge c = c$.
This also holds!

My apologies for the confusion; standard introductory examples often lead to this point. The key is to remember the *definition* of distributivity.

**A Guaranteed Non-Distributive Lattice:**
Consider a lattice with elements $\{0, a, b, c, d, 1\}$ where:
*   0 is the minimum, 1 is the maximum.
*   $a \vee b = d$, $a \wedge b = 0$
*   $a \vee c = d$, $a \wedge c = 0$
*   $b \vee c = d$, $b \wedge c = 0$
*   $d$ is "above" $a, b, c$.
*   $a < d < 1$, $b < d < 1$, $c < d < 1$.
*   $d \vee 1 = 1$, $d \wedge 1 = d$.

Let's check $a \wedge (b \vee c)$:
$a \wedge (b \vee c) = a \wedge d = a$.

Now $(a \wedge b) \vee (a \wedge c)$:
$(a \wedge b) \vee (a \wedge c) = 0 \vee 0 = 0$.

Since $a \neq 0$, the left distributive law $a \wedge (b \vee c) = (a \wedge b) \vee (a \wedge c)$ fails. This structure, when properly defined, leads to a non-distributive lattice. This is crucial for **CO3** and **CO4** – you need to be able to distinguish between different types of algebraic structures.

**Exam Tip:** When asked to prove a lattice is distributive, systematically check the two distributive laws for all possible combinations of $a, b, c$. If you find even one counterexample, it's not distributive. If it's a known structure like a power set, you can state its properties.

---

### 3. Boolean Lattices: The Best of Both Worlds

As we touched upon, **Boolean lattices** are a special class of lattices that are *both* complemented *and* distributive.

**Definition:** A lattice $L$ is a **Boolean lattice** (or **Boolean algebra**) if it is:
1.  **Distributive:** $a \wedge (b \vee c) = (a \wedge b) \vee (a \wedge c)$ and $a \vee (b \wedge c) = (a \vee b) \wedge (a \vee c)$.
2.  **Complemented:** For every $a \in L$, there exists $a' \in L$ such that $a \vee a' = 1$ and $a \wedge a' = 0$, where 0 is the least element and 1 is the greatest element.

**Why are they important?**
Boolean lattices are the mathematical foundation for **Boolean logic**, which is fundamental to computer science. The logic gates in your computer (AND, OR, NOT) operate on Boolean values, and the operations in a Boolean lattice correspond directly to these gates.

*   Meet ($\wedge$) corresponds to the AND gate.
*   Join ($\vee$) corresponds to the OR gate.
*   Complement ($'$) corresponds to the NOT gate.

**Examples of Boolean Lattices:**

1.  **The Power Set Lattice $(P(S), \subseteq)$:** As we saw, it's complemented and distributive. So, $(P(S), \cup, \cap, S \setminus A)$ is a Boolean algebra.
2.  **The Lattice of Propositions (or Statements) under Logical Operations:** If we consider a set of propositions and order them by implication ($\implies$), and define join as logical OR ($\vee$) and meet as logical AND ($\wedge$), and the complement as NOT ($\neg$), this forms a Boolean algebra, provided we have a "False" element (0) and a "True" element (1).
3.  **The Two-Element Lattice $B_2$:** This lattice has only two elements, 0 and 1.
    *   $0 \vee 0 = 0$, $0 \wedge 0 = 0$
    *   $1 \vee 1 = 1$, $1 \wedge 1 = 1$
    *   $0 \vee 1 = 1$, $0 \wedge 1 = 0$
    *   Complement of 0 is 1, and complement of 1 is 0.
    This is a complemented distributive lattice and forms the basis of propositional logic.

**Connections to Course Outcomes:**
*   **CO3 & CO4:** Understanding Boolean lattices directly enhances your knowledge of algebraic structures.
*   **CO1:** Boolean algebra is the bedrock of propositional logic. The distributive laws and complementation properties are fundamental logical equivalences you'll use when simplifying or verifying logical statements. For example, recognizing that $p \wedge (q \vee r) \equiv (p \wedge q) \vee (p \wedge r)$ is an application of the distributive property in Boolean logic.

**Exam Note:** Many questions in exams will revolve around identifying whether a given lattice is distributive, complemented, or both (Boolean). Always check the definitions carefully. The power set example is your go-to for a simple, concrete, complemented distributive lattice.

---

### Summary: The Core Concepts

Let's quickly recap the key takeaways from our exploration of complemented and distributive lattices.

*   **Lattice:** A partially ordered set where every pair of elements has a unique least upper bound (join, $\vee$) and greatest lower bound (meet, $\wedge$).
*   **Complemented Lattice:** A lattice with a least element (0) and a greatest element (1), where for every element $a$, there's a complement $a'$ such that $a \vee a' = 1$ and $a \wedge a' = 0$.
*   **Distributive Lattice:** A lattice where the distributive laws hold: $a \wedge (b \vee c) = (a \wedge b) \vee (a \wedge c)$ and $a \vee (b \wedge c) = (a \vee b) \wedge (a \vee c)$.
*   **Boolean Lattice:** A lattice that is *both* complemented *and* distributive. These are critically important for understanding logic and computer science.

**Remember this:** When you're given a lattice and asked about its properties, always go back to the definitions. Draw the Hasse diagram if possible, and test the required properties for generic elements. The power set lattice is your best friend for understanding complemented distributive lattices.

---

### Sample Questions with Answers

Here are a few questions to test your understanding, covering both conceptual and exam-oriented aspects:

**Question 1 (Conceptual - CO3, CO4):**
What are the defining characteristics of a lattice? Explain the terms "join" and "meet" using a simple analogy.

**Answer:**
A lattice is a partially ordered set (poset) where every pair of elements has a unique least upper bound (join) and a unique greatest lower bound (meet).
*   **Join (LUB):** The smallest element that is greater than or equal to both elements.
    *   *Analogy:* Think of two different project deadlines. The join would be the *later* of the two deadlines, as it's the earliest point in time by which *both* deadlines have passed.
*   **Meet (GLB):** The largest element that is less than or equal to both elements.
    *   *Analogy:* Using the same deadlines, the meet would be the *earlier* of the two deadlines, as it's the latest point in time where *both* deadlines are still in the future.

**Question 2 (Exam-Oriented - CO3, CO4):**
Consider the lattice $(D_{10}, |)$, where $D_{10}$ is the set of positive divisors of 10, ordered by the "divides" relation ($a | b$). The elements are $\{1, 2, 5, 10\}$. Is this lattice distributive? Justify your answer.

**Answer:**
The elements of the lattice are $\{1, 2, 5, 10\}$. The relations are defined by divisibility.
*   Least element (0) = 1
*   Greatest element (1) = 10
*   $1 | x$ for all $x$.
*   $x | 10$ for $x \in \{1, 2, 5, 10\}$.
*   $2 | 10$, $5 | 10$.
*   $2$ and $5$ are incomparable (neither divides the other).

Let's check the distributive laws. A lattice is distributive if $a \wedge (b \vee c) = (a \wedge b) \vee (a \wedge c)$ and $a \vee (b \wedge c) = (a \vee b) \wedge (a \vee c)$ for all $a, b, c$.
In the context of divisors, $\wedge$ is the greatest common divisor (GCD) and $\vee$ is the least common multiple (LCM).

Let's test with $a=2, b=2, c=5$:
*   $a \wedge (b \vee c) = 2 \wedge (\text{lcm}(2, 5)) = 2 \wedge 10 = \text{gcd}(2, 10) = 2$.
*   $(a \wedge b) \vee (a \wedge c) = (\text{gcd}(2, 2)) \vee (\text{gcd}(2, 5)) = 2 \vee 1 = \text{lcm}(2, 1) = 2$.
The left distributive law holds for these elements.

Let's test with $a=2, b=1, c=5$:
*   $a \wedge (b \vee c) = 2 \wedge (\text{lcm}(1, 5)) = 2 \wedge 5 = \text{gcd}(2, 5) = 1$.
*   $(a \wedge b) \vee (a \wedge c) = (\text{gcd}(2, 1)) \vee (\text{gcd}(2, 5)) = 1 \vee 1 = \text{lcm}(1, 1) = 1$.
The left distributive law holds.

In fact, the lattice of divisors of any integer is distributive. So, yes, $(D_{10}, |)$ is distributive.

**Question 3 (Conceptual - CO3, CO4, CO1):**
Is the power set lattice $(P(S), \subseteq)$ a complemented lattice? If so, identify the least element, the greatest element, and the complement of an arbitrary element $A \in P(S)$.

**Answer:**
Yes, the power set lattice $(P(S), \subseteq)$ is a complemented lattice.
*   **Least Element (0):** The empty set, $\emptyset$.
*   **Greatest Element (1):** The set $S$ itself.
*   **Complement of $A \in P(S)$:** For any subset $A$ of $S$, its complement is the set of elements in $S$ that are not in $A$. This is denoted as $S \setminus A$ or $A^c$.
    *   We know that $A \cup (S \setminus A) = S$, so $A \vee (S \setminus A) = 1$.
    *   We know that $A \cap (S \setminus A) = \emptyset$, so $A \wedge (S \setminus A) = 0$.
    Therefore, $S \setminus A$ is the complement of $A$. This connection is fundamental to Boolean logic (CO1), where the complement is analogous to the NOT operation.

**Question 4 (Exam-Oriented - CO3, CO4):**
What makes a lattice a "Boolean lattice"? Provide one example of a Boolean lattice.

**Answer:**
A lattice is called a **Boolean lattice** if it satisfies two key properties:
1.  It must be **distributive**. This means the distributive laws hold: $a \wedge (b \vee c) = (a \wedge b) \vee (a \wedge c)$ and $a \vee (b \wedge c) = (a \vee b) \wedge (a \vee c)$.
2.  It must be **complemented**. This means there's a least element (0) and a greatest element (1), and for every element $a$, there exists a complement $a'$ such that $a \vee a' = 1$ and $a \wedge a' = 0$.

**Example:** The power set of any set $S$, ordered by set inclusion ($\subseteq$), with set union ($\cup$) as join and set intersection ($\cap$) as meet, is a Boolean lattice. This is often denoted as $(P(S), \cup, \cap)$.

---

I hope these notes and examples provide a clear and comprehensive understanding of complemented and distributive lattices. These structures are essential for building a strong foundation in discrete mathematics and its applications. Keep practicing with different examples, and don't hesitate to ask questions! We'll continue building on these ideas in our next session.
