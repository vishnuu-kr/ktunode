---
title: "Relations and Their Properties"
subject: "DISCRETE MATHEMATICS"
module: "Module 1: Sets and Subsets"
branch: "Computer Science and Engineering"
semester: 2
topicId: "68b45b6f58474a0b135b5f8d"
status: "completed"
scrapedAt: "2026-05-20T16:32:48.900Z"
---
Ah, welcome everyone! Today, we're diving into a truly fundamental concept in Discrete Mathematics, one that underpins so much of what we do in computer science and beyond: **Relations and Their Properties**. This is a crucial topic, and understanding it well will directly help us achieve **Course Outcome 3 (CO3): Classify binary relations into various types and illustrate an application for each type of binary relation, in Computer Science.**

Remember, our journey through Discrete Mathematics is like building a sturdy house. Sets are the bricks, and relations are how we connect those bricks to build walls, doors, and windows. Without understanding how things relate to each other, we can't build anything meaningful!

Let's start with the basics, building from what we already know about sets.

## Understanding Relations: Connecting the Dots

We've spent time talking about sets. A set is just a collection of distinct objects. Now, what if we want to express a connection or a link between elements from one set, or even between elements within the same set? That's precisely what a **relation** does.

Think about your daily life. You have relationships with people: you are a "student" of your professor, your professor is an "instructor" of you, you are a "friend" to your classmates. These are all examples of relations. In mathematics, we formalize these connections.

### What Exactly is a Relation?

Formally, a relation from a set $A$ to a set $B$ is simply a **subset of the Cartesian product $A \times B$**.

Now, I know "Cartesian product" might sound a bit intimidating, but it's quite straightforward. Remember from set theory, the Cartesian product $A \times B$ is the set of all possible ordered pairs $(a, b)$ where $a$ is an element of $A$ and $b$ is an element of $B$.

Let's take a relatable example.

**Example:** Imagine two sets:
*   Set $S = \{\text{Alice, Bob, Charlie}\}$ (students)
*   Set $C = \{\text{Math, Physics, Chemistry}\}$ (courses)

The Cartesian product $S \times C$ would be:
$S \times C = \{(\text{Alice, Math}), (\text{Alice, Physics}), (\text{Alice, Chemistry}), (\text{Bob, Math}), (\text{Bob, Physics}), (\text{Bob, Chemistry}), (\text{Charlie, Math}), (\text{Charlie, Physics}), (\text{Charlie, Chemistry})\}$

This $S \times C$ is the set of *all possible* student-course pairings.

A **relation** $R$ from $S$ to $C$ could be a subset of these pairings. For instance, let's define a relation $R$ called "Enrolled In" where $(s, c) \in R$ if student $s$ is enrolled in course $c$.

$R = \{(\text{Alice, Math}), (\text{Alice, Physics}), (\text{Bob, Math}), (\text{Charlie, Chemistry})\}$

This relation tells us who is enrolled in what. Alice is in Math and Physics, Bob is in Math, and Charlie is in Chemistry. Simple, right?

When a relation is between elements of the *same* set, say from $A$ to $A$, we call it a **binary relation on $A$**. This is very common. For example, the "less than" relation on the set of integers.

**Example (Relation on a single set):**
Let $A = \{1, 2, 3, 4\}$.
Let the relation $R$ be "is less than" (<).
So, $(a, b) \in R$ if $a < b$.

The pairs in $R$ would be:
$(1, 2), (1, 3), (1, 4)$
$(2, 3), (2, 4)$
$(3, 4)$

This is a relation on the set $A$. We can represent this relation using a set of ordered pairs, or visually using a directed graph (more on that later!).

### Types of Relations: Building Our Understanding

Now that we know what a relation is, let's explore its different characteristics. These characteristics are what allow us to classify relations, which is key for **CO3**. By understanding these properties, we can categorize relations and see how they apply to computer science problems.

When we talk about properties of relations, we are typically looking at relations defined on a *single* set, $A$. So, we're looking at subsets of $A \times A$.

#### 1. Reflexive Relation

A relation $R$ on a set $A$ is **reflexive** if for *every* element $a$ in $A$, the pair $(a, a)$ is in $R$.

Think of it like this: every element is related to itself in some way.

**Analogy:** Imagine a group of people. A "knows" relation would be reflexive if everyone knows themselves (which is trivially true, perhaps in a philosophical sense!). A "is married to" relation is *not* reflexive, because a person isn't married to themselves.

**Example:**
Let $A = \{1, 2, 3\}$.
The relation $R = \{(1, 1), (2, 2), (3, 3), (1, 2), (2, 1)\}$ is **reflexive** because $(1, 1)$, $(2, 2)$, and $(3, 3)$ are all in $R$.

The relation $R' = \{(1, 1), (2, 2), (1, 2), (2, 1)\}$ is **not reflexive** because $(3, 3)$ is missing.

*   **Computer Science Connection (CO3):** The "less than or equal to" ($\le$) relation on a set of numbers is reflexive. This is fundamental in sorting algorithms and data structures where we compare elements. If we represent relationships between nodes in a graph, self-loops at each node would indicate reflexivity.

#### 2. Symmetric Relation

A relation $R$ on a set $A$ is **symmetric** if whenever $(a, b)$ is in $R$, then $(b, a)$ must also be in $R$.

This means the relationship is "two-way." If $a$ is related to $b$, then $b$ is definitely related back to $a$.

**Analogy:** Friendship is a good example of a symmetric relation. If Alice is a friend of Bob, then Bob is a friend of Alice. The "is married to" relation is also symmetric. However, "is a child of" is *not* symmetric. If Alice is a child of Bob, Bob is not a child of Alice.

**Example:**
Let $A = \{a, b, c\}$.
The relation $R = \{(a, b), (b, a), (b, c), (c, b)\}$ is **symmetric**. See how for $(a, b)$ we have $(b, a)$, and for $(b, c)$ we have $(c, b)$?

The relation $R' = \{(a, b), (b, c), (c, b)\}$ is **not symmetric** because $(a, b)$ is in $R'$, but $(b, a)$ is not.

*   **Computer Science Connection (CO3):** In network topology, if we have a connection between two computers, it's often bidirectional. If computer A can send data to computer B, computer B can usually send data back to A. This "connectivity" or "communication link" relation is typically symmetric.

#### 3. Antisymmetric Relation

A relation $R$ on a set $A$ is **antisymmetric** if for any distinct elements $a$ and $b$ in $A$, if $(a, b)$ is in $R$, then $(b, a)$ cannot also be in $R$. More formally, if $(a, b) \in R$ and $(b, a) \in R$, then it must be the case that $a = b$.

This is a bit trickier to grasp at first. It's about preventing "opposite" pairs from existing *unless* the elements are the same. It's the "opposite" of symmetry in a way. If you have a relation going one way between *different* elements, you *cannot* have the relation going the other way between those same *different* elements.

**Analogy:** Think of "is strictly greater than" (>). If $a > b$, then it's impossible for $b > a$ when $a$ and $b$ are different numbers. The "is a child of" relation is also antisymmetric. If Alice is a child of Bob, Bob cannot be a child of Alice (since they are different people).

**Example:**
Let $A = \{1, 2, 3\}$.
The relation $R = \{(1, 2), (1, 3), (2, 3)\}$ is **antisymmetric**. Why? Because for any pair $(a, b)$ in $R$ where $a \neq b$, the pair $(b, a)$ is *not* in $R$. For example, $(1, 2) \in R$, but $(2, 1) \notin R$.

The relation $R' = \{(1, 2), (2, 1), (1, 3)\}$ is **not antisymmetric** because we have both $(1, 2) \in R'$ and $(2, 1) \in R'$. Since $1 \neq 2$, this violates the antisymmetric property.

*   **Important Note:** A relation can be both symmetric and antisymmetric! This only happens if the relation is just the set of pairs $(a, a)$ for all $a \in A$. For example, the relation $R = \{(1,1), (2,2)\}$ on $A = \{1, 2\}$ is both symmetric and antisymmetric.

*   **Computer Science Connection (CO3):** The "less than" (<) relation on integers is antisymmetric. This is crucial for ordering data, like in binary search trees. If you have a node with value 5, and a child node with value 10, you know 5 < 10. You also know 10 is not < 5. This directional ordering is key.

#### 4. Transitive Relation

A relation $R$ on a set $A$ is **transitive** if whenever $(a, b)$ is in $R$ and $(b, c)$ is in $R$, then $(a, c)$ must also be in $R$.

This is the "chain reaction" property. If $a$ is related to $b$, and $b$ is related to $c$, then $a$ must also be related to $c$.

**Analogy:** Think of "is older than." If Alice is older than Bob, and Bob is older than Charlie, then Alice must be older than Charlie. This holds true. "Is a sibling of" is also transitive. If A is a sibling of B, and B is a sibling of C, then A is a sibling of C.

**Example:**
Let $A = \{1, 2, 3, 4\}$.
The relation $R = \{(1, 2), (2, 3), (1, 3), (3, 4)\}$ is **transitive**.
Let's check:
*   We have $(1, 2) \in R$ and $(2, 3) \in R$. Is $(1, 3) \in R$? Yes, it is.
*   We have $(2, 3) \in R$ and $(3, 4) \in R$. Is $(2, 4) \in R$? No, it's not. Oh, wait. My bad. This example is **NOT** transitive! I was trying to trick you. This is a common pitfall!
Let's correct it.

Let $A = \{1, 2, 3, 4\}$.
The relation $R = \{(1, 2), (2, 3), (1, 3), (3, 4), (2, 4)\}$ is **transitive**.
Let's check again:
*   $(1, 2) \in R$ and $(2, 3) \in R$. Is $(1, 3) \in R$? Yes.
*   $(1, 2) \in R$ and $(2, 4) \in R$. Is $(1, 4) \in R$? No, it's not.
So, this is also **NOT** transitive. See how easy it is to miss one! This is why we meticulously check all pairs.

Let's try a truly transitive example:
Let $A = \{1, 2, 3, 4\}$.
The relation $R = \{(1, 2), (2, 3), (3, 4), (1, 3), (2, 4), (1, 4)\}$ is **transitive**.
*   $(1, 2) \in R$ and $(2, 3) \in R \implies (1, 3) \in R$ (Yes)
*   $(1, 2) \in R$ and $(2, 4) \in R \implies (1, 4) \in R$ (Yes)
*   $(2, 3) \in R$ and $(3, 4) \in R \implies (2, 4) \in R$ (Yes)
And for all other combinations, either the "middle element" condition isn't met (e.g., if we have (1,3) we need a pair starting with 3, like (3,4)), or the resulting pair is already in the set.

The relation $R' = \{(1, 2), (2, 1)\}$ on $A = \{1, 2, 3\}$ is **not transitive**. We have $(1, 2) \in R'$ and $(2, 1) \in R'$, but $(1, 1)$ is not in $R'$.

*   **Computer Science Connection (CO3):** Transitivity is fundamental in many areas.
    *   **Reachability:** If you can reach city B from city A, and city C from city B, then you can reach city C from city A. This is a transitive relation. In computer networks, if host A can send a packet to host B, and host B can send to host C, then host A can reach host C (via B).
    *   **Precedence:** In task scheduling, if task A must complete before task B, and task B must complete before task C, then task A must complete before task C. This "precedes" relation is transitive.
    *   **Equivalence:** As we'll see later, relations that are reflexive, symmetric, and transitive are called equivalence relations, which partition sets into meaningful groups.

#### 5. Reflexive, Symmetric, and Transitive Relations

Sometimes, relations have combinations of these properties. These combinations are so important they have special names.

*   **Reflexive and Symmetric:** Not a specific named category we focus on for classification itself, but these properties often appear together.
*   **Reflexive and Transitive:** These relations are called **preorder relations**. They are very common in computer science, especially for defining ordering criteria.
*   **Symmetric and Transitive:** Again, not a primary named category on its own, but these can lead to interesting structures.
*   **Reflexive, Symmetric, and Transitive:** These are called **equivalence relations**. They are extremely important because they partition a set into disjoint subsets called equivalence classes. Every element in a class is related to every other element in that class, and no element in one class is related to an element in another class.

    *   **Computer Science Connection (CO3):** Equivalence relations are used everywhere!
        *   **Data Compression:** Grouping similar data items.
        *   **Type Systems:** In programming languages, if two variables have types that are considered equivalent (e.g., synonyms or compatible types), they can be treated similarly.
        *   **Graph Partitioning:** Grouping nodes in a graph that are strongly connected.

#### 6. Anti-reflexive Relation

A relation $R$ on a set $A$ is **anti-reflexive** if for *every* element $a$ in $A$, the pair $(a, a)$ is *not* in $R$.

This is the exact opposite of reflexive. No element is related to itself.

**Analogy:** "Is strictly taller than." No person is strictly taller than themselves. "Is the parent of." No one is their own parent.

**Example:**
Let $A = \{1, 2, 3\}$.
The relation $R = \{(1, 2), (2, 1), (1, 3)\}$ is **anti-reflexive** because none of the pairs $(1, 1), (2, 2), (3, 3)$ are in $R$.

The relation $R' = \{(1, 1), (1, 2)\}$ is **not anti-reflexive** because $(1, 1)$ is in $R'$.

*   **Computer Science Connection (CO3):** The "is strictly less than" (<) relation is anti-reflexive. The "divides" relation on integers is anti-reflexive if we exclude $a|a$ or specifically define it.

### Visualizing Relations: Graphs and Matrices

It's often helpful to visualize relations. There are two common ways:

#### 1. Directed Graphs (Digraphs)

A relation $R$ on a set $A$ can be represented by a directed graph where:
*   The elements of $A$ are the **vertices** (or nodes) of the graph.
*   For each ordered pair $(a, b)$ in $R$, there is a directed **edge** (or arrow) from vertex $a$ to vertex $b$.

**Example:**
Let $A = \{1, 2, 3\}$.
Consider the relation $R = \{(1, 2), (2, 1), (2, 3)\}$.

The directed graph would have three vertices labeled 1, 2, and 3.
*   An arrow from 1 to 2 (because $(1, 2) \in R$).
*   An arrow from 2 to 1 (because $(2, 1) \in R$).
*   An arrow from 2 to 3 (because $(2, 3) \in R$).

**How properties show up in digraphs:**
*   **Reflexive:** Each vertex has a self-loop (an arrow from the vertex to itself).
*   **Symmetric:** For every arrow from $a$ to $b$, there is a corresponding arrow from $b$ to $a$. The edges appear in pairs.
*   **Antisymmetric:** If there is an arrow from $a$ to $b$ and $b$ to $a$, then $a$ must be the same as $b$ (meaning only self-loops can have pairs going both ways). If $a \neq b$, you can't have arrows in both directions between $a$ and $b$.
*   **Transitive:** This is harder to see directly in the graph. It means if you can follow a path of arrows from $a$ to $b$ and then another path from $b$ to $c$, there must be a direct arrow from $a$ to $c$.

#### 2. Matrices

A relation $R$ from a set $A = \{a_1, a_2, \dots, a_m\}$ to a set $B = \{b_1, b_2, \dots, b_n\}$ can be represented by an $m \times n$ **Boolean matrix** $M$. The entry $M_{ij}$ is 1 if $(a_i, b_j) \in R$, and 0 otherwise.

For a relation on a single set $A = \{a_1, a_2, \dots, a_n\}$, we use an $n \times n$ matrix.

**Example:**
Let $A = \{1, 2, 3\}$ and $R = \{(1, 2), (2, 1), (2, 3)\}$.
The elements are $a_1=1, a_2=2, a_3=3$.
The relation matrix $M$ is:

       1 2 3
    1 [0 1 0]
    2 [1 0 1]
    3 [0 0 0]

The rows and columns correspond to the elements of $A$ in order.

**How properties show up in matrices:**
*   **Reflexive:** The main diagonal (from top-left to bottom-right) consists entirely of 1s.
*   **Symmetric:** The matrix is symmetric about its main diagonal. This means $M_{ij} = M_{ji}$ for all $i, j$.
*   **Antisymmetric:** If $M_{ij} = 1$ and $i \neq j$, then $M_{ji}$ must be 0. Alternatively, if $M_{ij} = 1$ and $M_{ji} = 1$, then $i$ must equal $j$.
*   **Transitive:** This is more complex to check directly from the matrix. It often involves matrix multiplication (specifically, checking if $M^2$ has 1s in appropriate places, and then $M^3$, etc., up to $M^n$). A relation $R$ is transitive if and only if $R \circ R \subseteq R$, where $\circ$ denotes relation composition. In matrix terms, if $M$ is the matrix for $R$, then the matrix for $R \circ R$ is $M^2$ (using Boolean matrix multiplication: $C_{ij} = \bigvee_k (A_{ik} \wedge B_{kj})$). So, $R$ is transitive if $M \circ M \le M$ element-wise.

### Important Relation Types for CO3

Let's summarize the key relation types that are essential for **CO3**.

*   **Reflexive:** $(a, a) \in R$ for all $a \in A$.
*   **Symmetric:** If $(a, b) \in R$, then $(b, a) \in R$.
*   **Antisymmetric:** If $(a, b) \in R$ and $(b, a) \in R$, then $a = b$.
*   **Transitive:** If $(a, b) \in R$ and $(b, c) \in R$, then $(a, c) \in R$.

Combinations are also vital:

*   **Equivalence Relation:** Reflexive, Symmetric, AND Transitive.
    *   *CS Example:* Grouping files based on their creation date. All files created on Jan 1, 2023, are equivalent.

*   **Partial Order Relation:** Reflexive, Antisymmetric, AND Transitive.
    *   *CS Example:* Task dependencies in a project. If Task A must finish before Task B, and Task B before Task C, then A must finish before C.

Remember this: the properties tell us about the *structure* of the relationship.

### Relation Composition

Just like we can compose functions, we can compose relations! If we have relation $R$ from $A$ to $B$ and relation $S$ from $B$ to $C$, we can define a new relation $S \circ R$ from $A$ to $C$.

The relation $S \circ R$ consists of pairs $(a, c)$ such that there exists an element $b \in B$ for which $(a, b) \in R$ and $(b, c) \in S$.

**Analogy:** If $R$ is "is a parent of" and $S$ is "is a sibling of", then $S \circ R$ would mean "is a sibling of a parent of". So, if Alice is a parent of Bob ($(\text{Alice, Bob}) \in R$), and Bob is a sibling of Carol ($(\text{Bob, Carol}) \in S$), then Alice is a sibling of Carol's parent ($(\text{Alice, Carol}) \in S \circ R$).

**Example:**
Let $A = \{1, 2, 3\}$, $B = \{a, b, c\}$, $C = \{x, y, z\}$.
$R = \{(1, a), (2, b), (3, a)\}$ from $A$ to $B$.
$S = \{(a, x), (b, y), (b, z)\}$ from $B$ to $C$.

Let's find $S \circ R$:
*   We have $(1, a) \in R$. Since $(a, x) \in S$, we get $(1, x) \in S \circ R$.
*   We have $(2, b) \in R$. Since $(b, y) \in S$, we get $(2, y) \in S \circ R$.
*   We have $(2, b) \in R$. Since $(b, z) \in S$, we get $(2, z) \in S \circ R$.
*   We have $(3, a) \in R$. Since $(a, x) \in S$, we get $(3, x) \in S \circ R$.

So, $S \circ R = \{(1, x), (2, y), (2, z), (3, x)\}$.

**How relation composition relates to properties:**
Composition is fundamental for understanding transitivity. A relation $R$ is transitive if and only if $R \circ R \subseteq R$. That is, composing the relation with itself results in a subset of the original relation.

### Bridging to Course Outcomes

As we've seen, understanding these properties directly addresses **CO3: Classify binary relations into various types and illustrate an application for each type of binary relation, in Computer Science.**

*   **Classification:** We classify relations as reflexive, symmetric, antisymmetric, transitive, or combinations thereof.
*   **Applications:** We've touched upon applications in:
    *   **Networks:** Connectivity (symmetric).
    *   **Databases:** Linking records.
    *   **Algorithms:** Sorting (antisymmetric, transitive for order), scheduling (transitive), partitioning data (equivalence relations).
    *   **Data Structures:** Binary search trees (antisymmetric, transitive).
    *   **Formal Systems:** Defining logical structures.

### What to Remember for Exams?

1.  **Definitions are Key:** Be able to clearly define reflexive, symmetric, antisymmetric, and transitive. Know the conditions for each.
2.  **Checking Properties:** Given a relation (as a set of pairs, a graph, or a matrix), be able to determine which properties it possesses. This often involves carefully checking all pairs. Don't just eyeball it!
3.  **Recognizing Combinations:** Know what an equivalence relation (reflexive, symmetric, transitive) and a partial order relation (reflexive, antisymmetric, transitive) are, and be able to identify them.
4.  **Visual Representation:** Understand how properties translate to directed graphs and matrices.
5.  **Counterexamples:** If a relation *isn't* a property, you need to provide a specific counterexample. For instance, if it's not symmetric, show a pair $(a, b) \in R$ where $(b, a) \notin R$.
6.  **Relation Composition:** Be able to perform relation composition and understand its connection to transitivity.

The material here is foundational. Rosen's "Discrete Mathematics and Its Applications" is excellent for providing formal definitions and numerous examples. Schaum's Outlines are fantastic for practice problems and getting a solid grasp on the "how-to" for checking properties.

Let's solidify this with some practice questions.

---

## Sample Questions and Answers

**Q1. Conceptual Understanding:**
Explain the difference between a symmetric relation and an antisymmetric relation. Provide an example of a relation that is neither symmetric nor antisymmetric.

**Answer:**
*   **Symmetric:** A relation $R$ on a set $A$ is symmetric if for every pair $(a, b) \in R$, the pair $(b, a)$ is also in $R$. This means the relationship is bidirectional. If $a$ relates to $b$, then $b$ must relate to $a$.
*   **Antisymmetric:** A relation $R$ on a set $A$ is antisymmetric if whenever $(a, b) \in R$ and $(b, a) \in R$, it must be that $a = b$. This means that if two *distinct* elements are related in both directions, it's not allowed.

**Key Difference:** Symmetry allows pairs like $(a, b)$ and $(b, a)$ when $a \neq b$. Antisymmetry *prohibits* such pairs for distinct $a$ and $b$; the only way for $(a, b)$ and $(b, a)$ to both be in $R$ is if $a=b$ (i.e., they are self-loops).

**Example of Neither Symmetric nor Antisymmetric:**
Let $A = \{1, 2, 3\}$ and $R = \{(1, 2), (2, 3)\}$.
*   **Not Symmetric:** We have $(1, 2) \in R$, but $(2, 1) \notin R$.
*   **Not Antisymmetric:** We don't have any pairs $(a, b)$ and $(b, a)$ where $a \neq b$ both in $R$. However, to be strictly antisymmetric, it must not have any pair $(a,b)$ and $(b,a)$ for $a \neq b$. This relation doesn't violate it by having both, but it also doesn't satisfy the conditions of being symmetric or antisymmetric. A better example to illustrate "neither" might be $R = \{(1,2), (2,3), (3,1)\}$. This is not symmetric because $(2,1) \notin R$, $(3,2) \notin R$, $(1,3) \notin R$. It is not antisymmetric because for $(1,2)$ we don't have $(2,1)$ etc. Now consider $R = \{(1,2), (2,1), (1,3)\}$. This relation is *not* symmetric because $(3,1) \notin R$. It is *not* antisymmetric because $(1,2) \in R$ and $(2,1) \in R$ with $1 \neq 2$.

**Q2. Application-Based:**
Consider a relation $R$ on the set of all computer files, where $(file_1, file_2) \in R$ if $file_1$ has the same size as $file_2$.
What properties does this relation possess? Justify your answer.

**Answer:**
This relation $R$ possesses the following properties:
1.  **Reflexive:** For any file $f$, the size of $f$ is equal to the size of $f$. So, $(f, f) \in R$ for all files $f$.
2.  **Symmetric:** If $file_1$ has the same size as $file_2$, then $file_2$ must also have the same size as $file_1$. Thus, if $(file_1, file_2) \in R$, then $(file_2, file_1) \in R$.
3.  **Transitive:** If $file_1$ has the same size as $file_2$, and $file_2$ has the same size as $file_3$, then it logically follows that $file_1$ must have the same size as $file_3$. So, if $(file_1, file_2) \in R$ and $(file_2, file_3) \in R$, then $(file_1, file_3) \in R$.

Since the relation is reflexive, symmetric, and transitive, it is an **equivalence relation**. This is a very important classification as it means we can group files into "equivalence classes" based on their size.

**Q3. Property Checking (Matrix/Graph):**
Let $A = \{a, b, c\}$ and the relation $R$ be represented by the adjacency matrix:
$$
M = \begin{pmatrix}
1 & 0 & 1 \\
0 & 1 & 0 \\
1 & 0 & 0
\end{pmatrix}
$$
Determine if $R$ is reflexive, symmetric, antisymmetric, and transitive.

**Answer:**
The elements of $A$ are $a, b, c$, corresponding to rows/columns 1, 2, 3 respectively.
$R = \{(a, a), (b, b), (a, c), (c, a)\}$

*   **Reflexive?** For $R$ to be reflexive, all diagonal elements ($M_{11}, M_{22}, M_{33}$) must be 1.
    $M_{11}=1$, $M_{22}=1$, $M_{33}=0$.
    Since $M_{33}$ is 0, the relation is **not reflexive**.

*   **Symmetric?** For $R$ to be symmetric, $M_{ij}$ must equal $M_{ji}$ for all $i, j$. We check the upper triangle against the lower triangle:
    *   $M_{12}=0, M_{21}=0$ (Match)
    *   $M_{13}=1, M_{31}=1$ (Match)
    *   $M_{23}=0, M_{32}=0$ (Match)
    All corresponding elements are equal. Thus, the relation is **symmetric**.

*   **Antisymmetric?** For $R$ to be antisymmetric, if $M_{ij}=1$ and $i \neq j$, then $M_{ji}$ must be 0.
    *   We have $M_{13}=1$ and $1 \neq 3$. Is $M_{31}=0$? No, $M_{31}=1$.
    Since $(a, c) \in R$ and $(c, a) \in R$ with $a \neq c$, the relation is **not antisymmetric**.

*   **Transitive?** For $R$ to be transitive, if $(a, b) \in R$ and $(b, c) \in R$, then $(a, c) \in R$.
    Let's check for paths of length 2:
    *   We have $(a, a) \in R$ and $(a, c) \in R$. Is $(a, c) \in R$? Yes, it is. (From $M_{11}$ and $M_{13}$, check $M_{13}$)
    *   We have $(c, a) \in R$ and $(a, a) \in R$. Is $(c, a) \in R$? Yes, it is. (From $M_{31}$ and $M_{11}$, check $M_{31}$)
    *   We have $(a, c) \in R$ and $(c, a) \in R$. Is $(a, a) \in R$? Yes, it is. (From $M_{13}$ and $M_{31}$, check $M_{11}$)
    *   We have $(a, a) \in R$ and $(a, a) \in R$. Is $(a, a) \in R$? Yes.
    *   We have $(b, b) \in R$ and $(b, b) \in R$. Is $(b, b) \in R$? Yes.

    Are there any other combinations? What if we have $(a,c)$ and we need a pair starting with $c$? We have $(c,a)$. So we check if $(a,a)$ is in $R$. It is.
    What if we have $(c,a)$ and we need a pair starting with $a$? We have $(a,a)$ and $(a,c)$.
    If we take $(c,a)$ and $(a,a)$, we require $(c,a)$, which is in $R$.
    If we take $(c,a)$ and $(a,c)$, we require $(c,c)$, which is NOT in $R$ ($M_{33}=0$).
    Therefore, the relation is **not transitive**.

To confirm transitivity using matrices, we'd compute $M^2$ using Boolean matrix multiplication.
$M^2 = \begin{pmatrix}
1 & 0 & 1 \\
0 & 1 & 0 \\
1 & 0 & 0
\end{pmatrix} \begin{pmatrix}
1 & 0 & 1 \\
0 & 1 & 0 \\
1 & 0 & 0
\end{pmatrix} = \begin{pmatrix}
(1\cdot1 + 0\cdot0 + 1\cdot1) & (1\cdot0 + 0\cdot1 + 1\cdot0) & (1\cdot1 + 0\cdot0 + 1\cdot0) \\
(0\cdot1 + 1\cdot0 + 0\cdot1) & (0\cdot0 + 1\cdot1 + 0\cdot0) & (0\cdot1 + 1\cdot0 + 0\cdot0) \\
(1\cdot1 + 0\cdot0 + 0\cdot1) & (1\cdot0 + 0\cdot1 + 0\cdot0) & (1\cdot1 + 0\cdot0 + 0\cdot0)
\end{pmatrix}$
Using Boolean arithmetic (OR for +, AND for $\cdot$):
$M^2 = \begin{pmatrix}
(1 \lor 0 \lor 1) & (0 \lor 0 \lor 0) & (1 \lor 0 \lor 0) \\
(0 \lor 0 \lor 0) & (0 \lor 1 \lor 0) & (0 \lor 0 \lor 0) \\
(1 \lor 0 \lor 0) & (0 \lor 0 \lor 0) & (1 \lor 0 \lor 0)
\end{pmatrix} = \begin{pmatrix}
1 & 0 & 1 \\
0 & 1 & 0 \\
1 & 0 & 1
\end{pmatrix}$

For transitivity, $R \circ R$ must be a subset of $R$. In matrix terms, $M^2$ (element-wise) must be $\le M$.
Comparing $M^2$ with $M$:
$M^2 = \begin{pmatrix} 1 & 0 & 1 \\ 0 & 1 & 0 \\ 1 & 0 & 1 \end{pmatrix}$
$M   = \begin{pmatrix} 1 & 0 & 1 \\ 0 & 1 & 0 \\ 1 & 0 & 0 \end{pmatrix}$
The element at $M^2_{33}$ is 1, but the corresponding element in $M_{33}$ is 0. This means $M^2$ has a 1 where $M$ has a 0, violating the condition $M^2 \le M$. Therefore, the relation is **not transitive**.

---
Keep practicing these concepts, and don't hesitate to draw out the graphs or write down the matrices. The more you work with them, the more intuitive these properties will become. This is a fantastic foundation for everything else we'll cover!
