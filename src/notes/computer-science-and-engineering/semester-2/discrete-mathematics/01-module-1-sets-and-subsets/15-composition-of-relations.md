---
title: "Composition of relations"
subject: "DISCRETE MATHEMATICS"
module: "Module 1: Sets and Subsets"
branch: "Computer Science and Engineering"
semester: 2
topicId: "68b45b6f58474a0b135b5f8e"
status: "completed"
scrapedAt: "2026-05-20T16:32:49.612Z"
---
## Discrete Mathematics: Module 1 - Sets and Subsets

### Topic: Composition of Relations

**(Professor's Note:** Welcome back, everyone! Today, we're diving into a really fascinating and practical concept in discrete mathematics: the **composition of relations**. This topic might sound a bit abstract at first, but it's fundamental to understanding how we can combine and chain relationships together. Think of it like building a chain reaction, where one relationship leads to another. We’ll see how this directly connects to how computers process information and make decisions.)

**Connecting to Course Outcomes:**

Before we get started, let's see how this topic helps us achieve our course objectives.

*   **CO3: Classify binary relations into various types and illustrate an application for each type of binary relation, in Computer Science.** The composition of relations is a way to *create new relations* from existing ones. Understanding how we compose relations is crucial for analyzing and defining complex relationships in computer science, such as dependencies in software or connections in networks. We'll be building on our understanding of different types of relations by seeing how they interact.
*   **CO1: Check the validity of predicates in Propositional and Quantified Propositional Logic...** While not directly about logic predicates, the idea of a relationship existing between elements, and then composing these relationships, mirrors the way we think about implications and chains of reasoning. If A relates to B, and B relates to C, then there's an indirect relationship between A and C. This is similar to "if P implies Q, and Q implies R, then P implies R."

**(Professor's Note:** So, keep CO3 and CO1 in mind as we explore composition. We’re not just learning a new operation; we’re learning a way to model complex connections.)

---

### 1. What is a Relation? (A Quick Recap)

Remember from our earlier discussions, a **binary relation** $R$ from a set $A$ to a set $B$ is simply a subset of the Cartesian product $A \times B$. That is, $R \subseteq A \times B$. If $(a, b) \in R$, we say that $a$ is related to $b$ by $R$.

When we talk about relations *on a set* $A$, it means the relation is from $A$ to $A$, so $R \subseteq A \times A$.

**Example:** Let $A = \{1, 2, 3\}$ and $B = \{X, Y, Z\}$.
A relation $R$ from $A$ to $B$ could be $R = \{(1, X), (2, Y), (3, X)\}$. This means 1 is related to X, 2 to Y, and 3 to X.

Now, let's think about situations where we have *multiple* relations.

---

### 2. Introducing Composition of Relations

Imagine you have a set of students and a set of courses. Let's say:

*   Set $A$: Students $\{Alice, Bob, Charlie\}$
*   Set $B$: Courses $\{Math, Physics, Chemistry\}$

We could have a relation $R$ from $A$ to $B$ representing which student is enrolled in which course.
$R = \{\text{(Alice, Math), (Alice, Physics), (Bob, Math), (Charlie, Chemistry)}\}$

Now, suppose we have another set $C$:
*   Set $C$: Professors $\{Dr. Smith, Dr. Jones, Dr. Lee\}$

And a relation $S$ from $B$ to $C$, representing which professor teaches which course.
$S = \{\text{(Math, Dr. Smith), (Physics, Dr. Jones), (Chemistry, Dr. Lee)}\}$

Now, you might want to know: **Which students are taught by which professors?**

This is where the composition of relations comes in. We're looking for a relationship from Students ($A$) to Professors ($C$).

Let's think step-by-step:
*   Alice is enrolled in Math ($(\text{Alice, Math}) \in R$).
*   Math is taught by Dr. Smith ($(\text{Math, Dr. Smith}) \in S$).
*   Therefore, Alice is taught by Dr. Smith. This gives us a new relationship: $(\text{Alice, Dr. Smith})$.

*   Alice is enrolled in Physics ($(\text{Alice, Physics}) \in R$).
*   Physics is taught by Dr. Jones ($(\text{Physics, Dr. Jones}) \in S$).
*   Therefore, Alice is taught by Dr. Jones. New relationship: $(\text{Alice, Dr. Jones})$.

*   Bob is enrolled in Math ($(\text{Bob, Math}) \in R$).
*   Math is taught by Dr. Smith ($(\text{Math, Dr. Smith}) \in S$).
*   Therefore, Bob is taught by Dr. Smith. New relationship: $(\text{Bob, Dr. Smith})$.

*   Charlie is enrolled in Chemistry ($(\text{Charlie, Chemistry}) \in R$).
*   Chemistry is taught by Dr. Lee ($(\text{Chemistry, Dr. Lee}) \in S$).
*   Therefore, Charlie is taught by Dr. Lee. New relationship: $(\text{Charlie, Dr. Lee})$.

This new relationship, connecting students to professors via the courses they take, is the **composition** of $R$ and $S$.

---

### 3. Formal Definition of Composition

Let $R$ be a relation from set $A$ to set $B$, and $S$ be a relation from set $B$ to set $C$.
The **composition of $R$ and $S$**, denoted by $S \circ R$, is the relation from $A$ to $C$ defined as:

$S \circ R = \{ (a, c) \in A \times C \mid \exists b \in B, \text{ such that } (a, b) \in R \text{ and } (b, c) \in S \}$

**(Professor's Note:** Read this definition carefully. The key is the **existence of an intermediate element** $b$. For an element $a$ from $A$ to be related to an element $c$ from $C$ in the composed relation $S \circ R$, there *must* be some element $b$ in the middle set $B$ such that $a$ is related to $b$ in $R$, AND $b$ is related to $c$ in $S$.)

**Important Convention:** Notice the order of the notation: $S \circ R$. This is sometimes a point of confusion, especially when compared to function composition. In relations, if $R$ goes from $A \to B$ and $S$ goes from $B \to C$, we write $S \circ R$ for the relation from $A \to C$. Think of it as reading the relations from left to right: $R$ first, then $S$. This is the convention used by Rosen and many other texts. Some texts might use $R \circ S$, so always check the notation being used!

**Example Revisited (Formal Notation):**
$A = \{\text{Alice, Bob, Charlie}\}$
$B = \{\text{Math, Physics, Chemistry}\}$
$C = \{\text{Dr. Smith, Dr. Jones, Dr. Lee}\}$

$R = \{\text{(Alice, Math), (Alice, Physics), (Bob, Math), (Charlie, Chemistry)}\}$
$S = \{\text{(Math, Dr. Smith), (Physics, Dr. Jones), (Chemistry, Dr. Lee)}\}$

$S \circ R = \{ (a, c) \mid \exists b \in B, (a, b) \in R \text{ and } (b, c) \in S \}$

Let's trace it:
*   For $(a, c) = (\text{Alice, Dr. Smith})$: we need to find $b$ such that $(\text{Alice}, b) \in R$ and $(b, \text{Dr. Smith}) \in S$.
    *   If $b = \text{Math}$, then $(\text{Alice, Math}) \in R$ and $(\text{Math, Dr. Smith}) \in S$. Yes, this works! So, $(\text{Alice, Dr. Smith}) \in S \circ R$.

*   For $(a, c) = (\text{Alice, Dr. Jones})$: we need $b$ such that $(\text{Alice}, b) \in R$ and $(b, \text{Dr. Jones}) \in S$.
    *   If $b = \text{Physics}$, then $(\text{Alice, Physics}) \in R$ and $(\text{Physics, Dr. Jones}) \in S$. Yes! So, $(\text{Alice, Dr. Jones}) \in S \circ R$.

*   For $(a, c) = (\text{Bob, Dr. Smith})$: we need $b$ such that $(\text{Bob}, b) \in R$ and $(b, \text{Dr. Smith}) \in S$.
    *   If $b = \text{Math}$, then $(\text{Bob, Math}) \in R$ and $(\text{Math, Dr. Smith}) \in S$. Yes! So, $(\text{Bob, Dr. Smith}) \in S \circ R$.

*   For $(a, c) = (\text{Charlie, Dr. Lee})$: we need $b$ such that $(\text{Charlie}, b) \in R$ and $(b, \text{Dr. Lee}) \in S$.
    *   If $b = \text{Chemistry}$, then $(\text{Charlie, Chemistry}) \in R$ and $(\text{Chemistry, Dr. Lee}) \in S$. Yes! So, $(\text{Charlie, Dr. Lee}) \in S \circ R$.

Are there any other pairs?
*   $(\text{Alice, Dr. Lee})$? Alice takes Math and Physics. Math is taught by Dr. Smith, Physics by Dr. Jones. No intermediate for Dr. Lee.
*   $(\text{Bob, Dr. Jones})$? Bob takes Math. Math is taught by Dr. Smith. No intermediate for Dr. Jones.
*   $(\text{Bob, Dr. Lee})$? Bob takes Math. Math is taught by Dr. Smith. No intermediate for Dr. Lee.
*   $(\text{Charlie, Dr. Smith})$? Charlie takes Chemistry. Chemistry is taught by Dr. Lee. No intermediate for Dr. Smith.
*   $(\text{Charlie, Dr. Jones})$? Charlie takes Chemistry. Chemistry is taught by Dr. Lee. No intermediate for Dr. Jones.

So, the composed relation is:
$S \circ R = \{(\text{Alice, Dr. Smith}), (\text{Alice, Dr. Jones}), (\text{Bob, Dr. Smith}), (\text{Charlie, Dr. Lee})\}$

This represents the direct student-professor relationship through courses.

---

### 4. Composition of Relations on the Same Set

A very common scenario is when we have relations on the *same* set. Let $R$ be a relation on set $A$ (so $R \subseteq A \times A$) and $S$ also be a relation on set $A$ (so $S \subseteq A \times A$).

The composition $S \circ R$ is still defined as:
$S \circ R = \{ (a, c) \in A \times A \mid \exists b \in A, \text{ such that } (a, b) \in R \text{ and } (b, c) \in S \}$

**Example:** Let $A = \{1, 2, 3, 4\}$.
Let $R = \{(1, 2), (2, 3), (3, 1), (4, 4)\}$
Let $S = \{(1, 1), (2, 2), (3, 4), (4, 1)\}$

Let's find $S \circ R$:
We are looking for pairs $(a, c)$ where there's a $b$ such that $(a, b) \in R$ and $(b, c) \in S$.

*   $(1, 1)$: Can we find $b$ such that $(1, b) \in R$ and $(b, 1) \in S$?
    *   From $R$, $(1, 2)$ is a pair. Is $(2, 1) \in S$? No.
    *   No other pair in $R$ starts with 1.
    *   Wait, let's re-examine the definition. We pick an $(a,b) \in R$ and an $(b,c) \in S$.
    *   Take $(1, 2) \in R$. Now we look for pairs in $S$ starting with 2. We find $(2, 2) \in S$. So, we have a connection $1 \to 2 \to 2$. This gives us $(1, 2) \in S \circ R$.
    *   Take $(2, 3) \in R$. Now we look for pairs in $S$ starting with 3. We find $(3, 4) \in S$. So, we have a connection $2 \to 3 \to 4$. This gives us $(2, 4) \in S \circ R$.
    *   Take $(3, 1) \in R$. Now we look for pairs in $S$ starting with 1. We find $(1, 1) \in S$. So, we have a connection $3 \to 1 \to 1$. This gives us $(3, 1) \in S \circ R$.
    *   Take $(4, 4) \in R$. Now we look for pairs in $S$ starting with 4. We find $(4, 1) \in S$. So, we have a connection $4 \to 4 \to 1$. This gives us $(4, 1) \in S \circ R$.

Are there any other possibilities?
Let's check potential pairs $(a, c)$ from $A \times A$:
*   $(1, 1)$: $(1,2) \in R$. Need $(2,1) \in S$. No.
*   $(1, 2)$: $(1,2) \in R$. Need $(2,2) \in S$. Yes. So $(1,2) \in S \circ R$.
*   $(1, 4)$: $(1,2) \in R$. Need $(2,4) \in S$. No.
*   $(2, 1)$: $(2,3) \in R$. Need $(3,1) \in S$. No.
*   $(2, 2)$: $(2,3) \in R$. Need $(3,2) \in S$. No.
*   $(2, 4)$: $(2,3) \in R$. Need $(3,4) \in S$. Yes. So $(2,4) \in S \circ R$.
*   $(3, 1)$: $(3,1) \in R$. Need $(1,1) \in S$. Yes. So $(3,1) \in S \circ R$.
*   $(3, 2)$: $(3,1) \in R$. Need $(1,2) \in S$. No.
*   $(3, 4)$: $(3,1) \in R$. Need $(1,4) \in S$. No.
*   $(4, 1)$: $(4,4) \in R$. Need $(4,1) \in S$. Yes. So $(4,1) \in S \circ R$.
*   $(4, 2)$: $(4,4) \in R$. Need $(4,2) \in S$. No.
*   $(4, 4)$: $(4,4) \in R$. Need $(4,4) \in S$. No.

So, $S \circ R = \{(1, 2), (2, 4), (3, 1), (4, 1)\}$.

**(Professor's Note:** This process of checking can be tedious for larger sets. Using graphical representations (like directed graphs) can sometimes make this easier, which we'll touch upon.)

---

### 5. Composition with Powers of Relations

What happens if we compose a relation with itself?
Let $R$ be a relation on set $A$.
*   $R^1 = R$
*   $R^2 = R \circ R = \{ (a, c) \mid \exists b \in A, (a, b) \in R \text{ and } (b, c) \in R \}$
    This means $a$ is related to $c$ via $R$ in two steps.
*   $R^3 = R^2 \circ R = \{ (a, d) \mid \exists b, c \in A, (a, b) \in R, (b, c) \in R, \text{ and } (c, d) \in R \}$
    This means $a$ is related to $d$ via $R$ in three steps.
*   In general, $R^n = R^{n-1} \circ R$.

**Example:** Using $A = \{1, 2, 3, 4\}$ and $R = \{(1, 2), (2, 3), (3, 1), (4, 4)\}$.

Let's find $R^2 = R \circ R$:
We need $(a, c)$ where there's a $b$ with $(a, b) \in R$ and $(b, c) \in R$.

*   $(1, 2) \in R$. Now look for pairs in $R$ starting with 2. We find $(2, 3) \in R$. So $1 \to 2 \to 3$. This gives $(1, 3) \in R^2$.
*   $(2, 3) \in R$. Now look for pairs in $R$ starting with 3. We find $(3, 1) \in R$. So $2 \to 3 \to 1$. This gives $(2, 1) \in R^2$.
*   $(3, 1) \in R$. Now look for pairs in $R$ starting with 1. We find $(1, 2) \in R$. So $3 \to 1 \to 2$. This gives $(3, 2) \in R^2$.
*   $(4, 4) \in R$. Now look for pairs in $R$ starting with 4. We find $(4, 4) \in R$. So $4 \to 4 \to 4$. This gives $(4, 4) \in R^2$.

So, $R^2 = \{(1, 3), (2, 1), (3, 2), (4, 4)\}$.

Now let's find $R^3 = R^2 \circ R$:
We need $(a, d)$ where there's a $c$ with $(a, c) \in R^2$ and $(c, d) \in R$.

*   $(1, 3) \in R^2$. Look for pairs in $R$ starting with 3. We find $(3, 1) \in R$. So $1 \to 3 \to 1$. This gives $(1, 1) \in R^3$.
*   $(2, 1) \in R^2$. Look for pairs in $R$ starting with 1. We find $(1, 2) \in R$. So $2 \to 1 \to 2$. This gives $(2, 2) \in R^3$.
*   $(3, 2) \in R^2$. Look for pairs in $R$ starting with 2. We find $(2, 3) \in R$. So $3 \to 2 \to 3$. This gives $(3, 3) \in R^3$.
*   $(4, 4) \in R^2$. Look for pairs in $R$ starting with 4. We find $(4, 4) \in R$. So $4 \to 4 \to 4$. This gives $(4, 4) \in R^3$.

So, $R^3 = \{(1, 1), (2, 2), (3, 3), (4, 4)\}$.

**(Professor's Note:** What do you notice about $R^3$ here? It's the identity relation for this set! This is what happens when we explore powers of relations. It helps us understand reachability and cycles in relationships.)

---

### 6. Representing Relations: The Power of Graphs

How can we visualize these compositions? Directed graphs are your best friend here!

*   **A relation $R$ on set $A$ can be represented as a directed graph $G=(A, E)$** where an edge $(a, b)$ exists in $E$ if and only if $(a, b) \in R$.

**Example:** $A = \{1, 2, 3, 4\}$ and $R = \{(1, 2), (2, 3), (3, 1), (4, 4)\}$.

The graph for $R$ looks like this:
*   Nodes: 1, 2, 3, 4
*   Edges: $1 \to 2$, $2 \to 3$, $3 \to 1$, $4 \to 4$ (a self-loop on 4).

Now, let's think about $R^2$. For $(a, c) \in R^2$, there must be an intermediate node $b$ such that $a \to b$ and $b \to c$ are edges in the graph of $R$. This is essentially looking for paths of length 2 in the graph.

*   $1 \to 2$ (in R), and $2 \to 3$ (in R) $\implies 1 \to 3$ in $R^2$.
*   $2 \to 3$ (in R), and $3 \to 1$ (in R) $\implies 2 \to 1$ in $R^2$.
*   $3 \to 1$ (in R), and $1 \to 2$ (in R) $\implies 3 \to 2$ in $R^2$.
*   $4 \to 4$ (in R), and $4 \to 4$ (in R) $\implies 4 \to 4$ in $R^2$.

The graph for $R^2$ has edges: $1 \to 3$, $2 \to 1$, $3 \to 2$, $4 \to 4$.

Similarly, for $R^3$, we are looking for paths of length 3.
*   $1 \to 2 \to 3 \to 1 \implies 1 \to 1$ in $R^3$.
*   $2 \to 3 \to 1 \to 2 \implies 2 \to 2$ in $R^3$.
*   $3 \to 1 \to 2 \to 3 \implies 3 \to 3$ in $R^3$.
*   $4 \to 4 \to 4 \to 4 \implies 4 \to 4$ in $R^3$.

The graph for $R^3$ has edges: $1 \to 1$, $2 \to 2$, $3 \to 3$, $4 \to 4$. This is the identity relation $I_A$ on $A$.

**(Professor's Note:** Using graphs makes the "path finding" aspect of relation composition much clearer. When you see a question asking about compositions, especially powers of relations, sketching the graph can save you a lot of work and prevent errors.)

---

### 7. Properties of Relation Composition

Just like we analyze properties of sets and operations, we can look at properties of relation composition. This is where we really connect to more advanced discrete mathematics and computer science concepts.

Let $R$, $S$, $T$ be relations on a set $A$.

1.  **Associativity:** $(T \circ S) \circ R = T \circ (S \circ R)$.
    This means the grouping doesn't matter when composing three or more relations. The order of the relations ($R$, then $S$, then $T$) is what defines the final outcome.
    *   **Intuition:** Think of it like passing a message. If $R$ encodes, $S$ encrypts, and $T$ sends, then $(T \circ S) \circ R$ means: $R$ acts on input, then $S$ acts on that output, then $T$ acts on that output. $T \circ (S \circ R)$ means: $S$ acts on the output of $R$, then $T$ acts on that combined output. The end result is the same.
    *   **In Computer Science:** This is fundamental in pipelines or sequential processing. If you have a series of transformations applied to data, their order matters, but the intermediate grouping of how you apply them doesn't change the final result.

2.  **Identity Relation:** Let $I_A$ be the identity relation on set $A$, i.e., $I_A = \{(a, a) \mid a \in A\}$.
    For any relation $R$ on $A$:
    *   $R \circ I_A = R$
    *   $I_A \circ R = R$
    *   **Intuition:** The identity relation is like a "do nothing" operation. If you compose any relation with the identity, you get the original relation back. It's like multiplying a number by 1.
    *   **Rosen Text:** This property is discussed in Chapter 7 (Relations) when introducing properties of relations, often using the analogy of matrices where the identity matrix doesn't change the original matrix upon multiplication.

3.  **Commutativity:** Composition of relations is **not** generally commutative. That is, $S \circ R$ is usually **not** equal to $R \circ S$.
    *   **Why?**
        *   **Domain/Codomain Mismatch:** If $R: A \to B$ and $S: B \to C$, then $S \circ R: A \to C$. For $R \circ S$ to even be defined, $S$ must be from $B \to A$, and $R$ must be from $A \to B$. If $A=B=C$, then both are defined on the same set, but the order of traversal of intermediate elements is different.
        *   **Different Intermediate Elements:** Even if $R: A \to A$ and $S: A \to A$, $S \circ R$ requires an element $b$ such that $a \to b$ in $R$ and $b \to c$ in $S$. $R \circ S$ requires an element $d$ such that $a \to d$ in $S$ and $d \to c$ in $R$. These are different chains.
    *   **Example:** Back to $A = \{1, 2, 3, 4\}$, $R = \{(1, 2), (2, 3), (3, 1), (4, 4)\}$, $S = \{(1, 1), (2, 2), (3, 4), (4, 1)\}$.
        We found $S \circ R = \{(1, 2), (2, 4), (3, 1), (4, 1)\}$.
        Let's find $R \circ S$:
        We need $(a, c)$ where there's a $b$ with $(a, b) \in S$ and $(b, c) \in R$.
        *   $(1, 1) \in S$. Look for pairs in $R$ starting with 1. We find $(1, 2) \in R$. So $1 \to 1 \to 2$. This gives $(1, 2) \in R \circ S$.
        *   $(2, 2) \in S$. Look for pairs in $R$ starting with 2. We find $(2, 3) \in R$. So $2 \to 2 \to 3$. This gives $(2, 3) \in R \circ S$.
        *   $(3, 4) \in S$. Look for pairs in $R$ starting with 4. We find $(4, 4) \in R$. So $3 \to 4 \to 4$. This gives $(3, 4) \in R \circ S$.
        *   $(4, 1) \in S$. Look for pairs in $R$ starting with 1. We find $(1, 2) \in R$. So $4 \to 1 \to 2$. This gives $(4, 2) \in R \circ S$.

        So, $R \circ S = \{(1, 2), (2, 3), (3, 4), (4, 2)\}$.
        Clearly, $S \circ R \neq R \circ S$. This reinforces that the order matters!

4.  **Idempotence:** A relation $R$ is idempotent if $R \circ R = R$.
    *   **Example:** $A = \{1, 2\}$, $R = \{(1, 1), (2, 2)\}$. Then $R \circ R = \{(1, 1), (2, 2)\}$. So $R$ is idempotent. This is the identity relation $I_A$.
    *   **Example:** $A = \{1, 2, 3\}$, $R = \{(1, 2), (2, 3), (1, 3)\}$.
        $R^2 = R \circ R$:
        *   $(1, 2) \in R$ and $(2, 3) \in R \implies (1, 3) \in R^2$.
        *   $(1, 3) \in R$. No pairs in $R$ start with 3.
        *   $(2, 3) \in R$. No pairs in $R$ start with 3.
        So $R^2 = \{(1, 3)\}$.
        Since $R^2 \neq R$, $R$ is not idempotent.

5.  **Reflexivity, Symmetry, Transitivity:** While composition itself isn't directly one of these properties, the *result* of composition might have them.
    *   If $R$ and $S$ are reflexive, is $S \circ R$ reflexive?
        Let $R, S$ be reflexive on $A$. This means $(a, a) \in R$ and $(a, a) \in S$ for all $a \in A$.
        For $S \circ R$ to be reflexive, we need $(a, a) \in S \circ R$ for all $a$.
        This requires $\exists b$ such that $(a, b) \in R$ and $(b, a) \in S$.
        If we choose $b=a$, then $(a, a) \in R$ and $(a, a) \in S$. Does this guarantee $(a, a) \in S \circ R$?
        Let's re-check the definition for $S \circ R$: $\{(a, c) \mid \exists b, (a, b) \in R \text{ and } (b, c) \in S\}$.
        To show $(a, a) \in S \circ R$, we need $\exists b$ such that $(a, b) \in R$ and $(b, a) \in S$.
        Since $R$ and $S$ are reflexive, $(a, a) \in R$ and $(a, a) \in S$ for all $a$.
        So, if we take $b=a$, we have $(a, a) \in R$ and $(a, a) \in S$. Thus $(a, a) \in S \circ R$.
        Therefore, if $R$ and $S$ are reflexive, then $S \circ R$ is reflexive.

    *   If $R$ and $S$ are symmetric, is $S \circ R$ symmetric?
        Let $R, S$ be symmetric. If $(a, b) \in S \circ R$, then $\exists b'$ such that $(a, b') \in R$ and $(b', a) \in S$.
        We want to know if $(a, b) \in S \circ R$ implies $(b, a) \in S \circ R$.
        This means we need $\exists x$ such that $(b, x) \in R$ and $(x, a) \in S$.
        From $(a, b') \in R$, by symmetry of $R$, $(b', a) \in R$.
        From $(b', a) \in S$, by symmetry of $S$, $(a, b') \in S$.
        This doesn't seem to help. Let's use a counterexample.
        $A = \{1, 2, 3\}$. $R = \{(1, 2), (2, 1)\}$. $S = \{(2, 3), (3, 2)\}$.
        Both $R$ and $S$ are symmetric.
        $S \circ R$:
        *   $(1, 2) \in R$. Look for pairs in $S$ starting with 2: $(2, 3) \in S$. So $1 \to 2 \to 3$. Gives $(1, 3) \in S \circ R$.
        *   $(2, 1) \in R$. Look for pairs in $S$ starting with 1. No pairs.
        *   So $S \circ R = \{(1, 3)\}$. This is not symmetric, as $(3, 1) \notin S \circ R$.
        Therefore, the composition of two symmetric relations is not necessarily symmetric.

    *   If $R$ and $S$ are transitive, is $S \circ R$ transitive?
        Let $R, S$ be transitive. If $(a, b) \in S \circ R$ and $(b, c) \in S \circ R$, does $(a, c) \in S \circ R$?
        $(a, b) \in S \circ R \implies \exists x$ such that $(a, x) \in R$ and $(x, b) \in S$.
        $(b, c) \in S \circ R \implies \exists y$ such that $(b, y) \in R$ and $(y, c) \in S$.
        We want to show $\exists z$ such that $(a, z) \in R$ and $(z, c) \in S$.
        We have $(a, x) \in R$. We also have $(x, b) \in S$ and $(b, y) \in R$.
        Since $R$ is transitive, $(x, b) \in S$ and $(b, y) \in R$ doesn't directly combine to give a relation from $S$ to $R$.
        Let's use the definition $S \circ R$: $\{(a, c) \mid \exists b, (a, b) \in R, (b, c) \in S\}$.
        Assume $(a, b) \in S \circ R$ and $(b, c) \in S \circ R$.
        This means there exist $x$ and $y$ such that:
        1. $(a, x) \in R$ and $(x, b) \in S$
        2. $(b, y) \in R$ and $(y, c) \in S$

        We want to find a $z$ such that $(a, z) \in R$ and $(z, c) \in S$.
        We know $(a, x) \in R$. We need to find a $z$ such that $(x, z) \in R$ and $(z, c) \in S$ (which would mean $z=y$ and $x=b$ is not implied) OR $(a, z) \in R$ and $(z,c) \in S$.
        From (1), we have $(a,x) \in R$. From (2), we have $(b,y) \in R$. This doesn't help us combine $a$ to $z$.
        Let's try again.
        $(a, b) \in S \circ R \implies \exists x \in B$ s.t. $(a, x) \in R$ and $(x, b) \in S$.
        $(b, c) \in S \circ R \implies \exists y \in B$ s.t. $(b, y) \in R$ and $(y, c) \in S$.
        We want to show $(a, c) \in S \circ R$, which means we need $\exists z \in B$ s.t. $(a, z) \in R$ and $(z, c) \in S$.

        Consider $R = \{(1, 2), (2, 3)\}$, $S = \{(2, 3), (3, 1)\}$. Both are transitive (and not empty).
        $S \circ R$:
        *   $(1, 2) \in R$, $(2, 3) \in S \implies (1, 3) \in S \circ R$.
        *   $(2, 3) \in R$, $(3, 1) \in S \implies (2, 1) \in S \circ R$.
        $S \circ R = \{(1, 3), (2, 1)\}$.
        Is $S \circ R$ transitive?
        We have $(1, 3) \in S \circ R$ and $(3, 1) \in S \circ R$. This implies we need $(1, 1) \in S \circ R$.
        To get $(1, 1) \in S \circ R$, we need $\exists b$ s.t. $(1, b) \in R$ and $(b, 1) \in S$.
        $(1, 2) \in R$, but $(2, 1) \notin S$. No pair found.
        So, $S \circ R$ is not transitive.
        Therefore, the composition of two transitive relations is not necessarily transitive.

**(Professor's Note:** These property analyses are crucial. They highlight how operations can behave and are excellent fodder for exam questions. Remember to work through concrete examples when proving or disproving these properties!)

---

### 8. Application in Computer Science

Where do we see relation composition in action?

*   **Database Queries:** Imagine two tables: `Students` and `Enrollment`.
    *   `Students`: (StudentID, StudentName)
    *   `Enrollment`: (StudentID, CourseID)
    You might have a relation $R$ from `Students` to `CourseID` based on enrollment: $(s, c) \in R$ if student $s$ is enrolled in course $c$.
    Then, you might have another table `Courses` and a relation $S$ from `CourseID` to `CourseName`: $(c, n) \in S$ if course $c$ has name $n$.
    The composition $S \circ R$ would give you a relation from `Students` to `CourseName`: $(s, n) \in S \circ R$ if student $s$ is enrolled in a course with name $n$. This is how you'd join tables in SQL.

*   **Dependency Chains:** In software development or project management, you can define relations:
    *   $R$: Task A must be completed before Task B can start. ($A \to B$)
    *   $S$: Task B must be completed before Task C can start. ($B \to C$)
    The composition $S \circ R$ would tell you: Task A must be completed before Task C can start (indirectly, via Task B). This helps in scheduling and identifying critical paths.

*   **Graph Algorithms:** As we saw with powers of relations, composition is key in finding paths, cycles, and reachability in graphs.
    *   $R^n$ represents all possible paths of length exactly $n$.
    *   The **transitive closure** of a relation $R$, denoted $R^*$, is the union of all powers of $R$ up to $n$, where $n$ is the size of the set. $R^* = R^1 \cup R^2 \cup R^3 \cup \dots \cup R^n$. This indicates if there is *any* path from $a$ to $b$ using the relation $R$. Transitive closure is extremely important for understanding connectivity.

**(Professor's Note:** The link to transitive closure is a major takeaway. It's how we determine if something is reachable, which is vital in areas like network routing, state machines, and dependency analysis.)

---

### 9. Summary and Key Takeaways

*   **Composition of Relations ($S \circ R$):** Connects elements $a$ to $c$ if there's an intermediate element $b$ such that $a$ relates to $b$ in $R$ and $b$ relates to $c$ in $S$. The definition $\exists b, (a, b) \in R \text{ and } (b, c) \in S$ is paramount.
*   **Notation:** $S \circ R$ is the standard where $R$ is applied first, then $S$. Pay attention to the order!
*   **Powers of Relations ($R^n$):** $R^n$ represents relationships composed with themselves $n$ times, indicating paths of length $n$.
*   **Graphical Representation:** Directed graphs are excellent for visualizing relation composition and finding paths.
*   **Properties:** Composition is associative and works with the identity relation, but it's **not** commutative. The properties (reflexivity, symmetry, transitivity) of composed relations don't necessarily hold even if the original relations have them (except reflexivity).
*   **Applications:** Crucial in database joins, dependency analysis, and graph algorithms like finding reachability and transitive closure.

**(Professor's Note:** Remember this: composition is about chaining relationships. Think of it as a "handoff" from one relation to the next. Understanding the definition and how to trace it is half the battle. The other half is understanding its implications through properties and applications.)

---

### Sample Questions with Answers

**Question 1 (Conceptual Understanding):**
Let $A = \{1, 2, 3\}$ and $B = \{4, 5, 6\}$.
Let $R = \{(1, 4), (2, 5), (2, 6)\}$ be a relation from $A$ to $B$.
Let $S = \{(4, 5), (5, 6), (6, 4)\}$ be a relation from $B$ to $B$.
Find $S \circ R$.

**Answer 1:**
We need to find pairs $(a, c)$ where $a \in A$, $c \in B$, and there exists $b \in B$ such that $(a, b) \in R$ and $(b, c) \in S$.

Let's trace the possible paths:
*   Take $(1, 4) \in R$. Now look for pairs in $S$ starting with 4. We find $(4, 5) \in S$.
    So, we have $1 \xrightarrow{R} 4 \xrightarrow{S} 5$. This means $(1, 5) \in S \circ R$.
*   Take $(2, 5) \in R$. Now look for pairs in $S$ starting with 5. We find $(5, 6) \in S$.
    So, we have $2 \xrightarrow{R} 5 \xrightarrow{S} 6$. This means $(2, 6) \in S \circ R$.
*   Take $(2, 6) \in R$. Now look for pairs in $S$ starting with 6. We find $(6, 4) \in S$.
    So, we have $2 \xrightarrow{R} 6 \xrightarrow{S} 4$. This means $(2, 4) \in S \circ R$.

Are there any other combinations?
*   $(1, 4) \in R$. $(4, 5) \in S$. Done. Any other in $S$ starting with 4? No.
*   $(2, 5) \in R$. $(5, 6) \in S$. Done. Any other in $S$ starting with 5? No.
*   $(2, 6) \in R$. $(6, 4) \in S$. Done. Any other in $S$ starting with 6? No.

Therefore, $S \circ R = \{(1, 5), (2, 6), (2, 4)\}$.

---

**Question 2 (Properties and Powers):**
Let $A = \{a, b, c\}$ and $R = \{(a, a), (a, b), (b, c), (c, a)\}$.
Find $R^2$ and $R^3$. Is $R$ reflexive? Is $R$ transitive?

**Answer 2:**
**Finding $R^2 = R \circ R$:** We need pairs $(x, z)$ where $\exists y$ such that $(x, y) \in R$ and $(y, z) \in R$.
*   $(a, a) \in R$. Look for pairs in $R$ starting with $a$.
    *   $(a, a) \in R \implies a \to a \to a$. So $(a, a) \in R^2$.
    *   $(a, b) \in R \implies a \to a \to b$. So $(a, b) \in R^2$.
*   $(a, b) \in R$. Look for pairs in $R$ starting with $b$.
    *   $(b, c) \in R \implies a \to b \to c$. So $(a, c) \in R^2$.
*   $(b, c) \in R$. Look for pairs in $R$ starting with $c$.
    *   $(c, a) \in R \implies b \to c \to a$. So $(b, a) \in R^2$.
*   $(c, a) \in R$. Look for pairs in $R$ starting with $a$.
    *   $(a, a) \in R \implies c \to a \to a$. So $(c, a) \in R^2$.
    *   $(a, b) \in R \implies c \to a \to b$. So $(c, b) \in R^2$.

So, $R^2 = \{(a, a), (a, b), (a, c), (b, a), (c, a), (c, b)\}$.

**Finding $R^3 = R^2 \circ R$:** We need pairs $(x, w)$ where $\exists z$ such that $(x, z) \in R^2$ and $(z, w) \in R$.
*   $(a, a) \in R^2$. Look for pairs in $R$ starting with $a$.
    *   $(a, a) \in R \implies a \to a \to a$. So $(a, a) \in R^3$.
    *   $(a, b) \in R \implies a \to a \to b$. So $(a, b) \in R^3$.
*   $(a, b) \in R^2$. Look for pairs in $R$ starting with $b$.
    *   $(b, c) \in R \implies a \to b \to c$. So $(a, c) \in R^3$.
*   $(a, c) \in R^2$. Look for pairs in $R$ starting with $c$.
    *   $(c, a) \in R \implies a \to c \to a$. So $(a, a) \in R^3$. (Already listed)
*   $(b, a) \in R^2$. Look for pairs in $R$ starting with $a$.
    *   $(a, a) \in R \implies b \to a \to a$. So $(b, a) \in R^3$.
    *   $(a, b) \in R \implies b \to a \to b$. So $(b, b) \in R^3$.
*   $(c, a) \in R^2$. Look for pairs in $R$ starting with $a$.
    *   $(a, a) \in R \implies c \to a \to a$. So $(c, a) \in R^3$. (Already listed)
    *   $(a, b) \in R \implies c \to a \to b$. So $(c, b) \in R^3$. (Already listed)
*   $(c, b) \in R^2$. Look for pairs in $R$ starting with $b$.
    *   $(b, c) \in R \implies c \to b \to c$. So $(c, c) \in R^3$.

So, $R^3 = \{(a, a), (a, b), (a, c), (b, a), (b, b), (c, a), (c, b), (c, c)\}$.

**Is $R$ reflexive?**
For $R$ to be reflexive, we need $(x, x) \in R$ for all $x \in A$.
$A = \{a, b, c\}$.
We have $(a, a) \in R$.
We do **not** have $(b, b) \in R$.
We do **not** have $(c, c) \in R$.
So, $R$ is **not reflexive**.

**Is $R$ transitive?**
For $R$ to be transitive, if $(x, y) \in R$ and $(y, z) \in R$, then $(x, z) \in R$.
Let's check:
*   $(a, a) \in R$ and $(a, b) \in R$. Does $(a, b) \in R$? Yes. (Okay)
*   $(a, b) \in R$ and $(b, c) \in R$. Does $(a, c) \in R$? No. We have $(a, c) \in R^2$ but not in $R$.
Since we found one instance where transitivity fails, $R$ is **not transitive**.

**(Professor's Note:** This question tests your ability to apply the definition of composition and check the basic properties of relations. Remember that to show a property is false, you only need one counterexample!)

---

**Question 3 (Application/Reasoning):**
Consider a scenario where $R$ is a relation "is a prerequisite for" between computer science courses, and $S$ is a relation "is taught in the same semester as" between computer science courses.
If $R = \{(CS101, CS201), (CS101, CS202), (CS201, CS301)\}$ and $S = \{(CS201, CS202), (CS202, CS203)\}$.
What does the relation $S \circ R$ represent?

**Answer 3:**
The relation $S \circ R$ is defined as $\{(a, c) \mid \exists b, (a, b) \in R \text{ and } (b, c) \in S\}$.
Let's compute $S \circ R$:
*   Take $(a, b) = (\text{CS101}, \text{CS201}) \in R$.
    Now look for pairs in $S$ starting with $b = \text{CS201}$. We find $(\text{CS201}, \text{CS202}) \in S$.
    So, we have $\text{CS101} \xrightarrow{R} \text{CS201} \xrightarrow{S} \text{CS202}$.
    This implies $(\text{CS101}, \text{CS202}) \in S \circ R$.

*   Take $(a, b) = (\text{CS101}, \text{CS202}) \in R$.
    Now look for pairs in $S$ starting with $b = \text{CS202}$. We find $(\text{CS202}, \text{CS203}) \in S$.
    So, we have $\text{CS101} \xrightarrow{R} \text{CS202} \xrightarrow{S} \text{CS203}$.
    This implies $(\text{CS101}, \text{CS203}) \in S \circ R$.

*   Take $(a, b) = (\text{CS201}, \text{CS301}) \in R$.
    Now look for pairs in $S$ starting with $b = \text{CS301}$. There are no such pairs in $S$.

Therefore, $S \circ R = \{(\text{CS101}, \text{CS202}), (\text{CS101}, \text{CS203})\}$.

**What does it represent?**
*   $R$: "is a prerequisite for"
*   $S$: "is taught in the same semester as"

The composition $S \circ R$ tells us that if course $A$ is a prerequisite for course $B$ ($ (A, B) \in R $), and course $B$ is taught in the same semester as course $C$ ($ (B, C) \in S $), then course $A$ is related to course $C$ in the composed relation.

In this specific example:
*   $(\text{CS101}, \text{CS202}) \in S \circ R$ means: CS101 is a prerequisite for CS201, and CS201 is taught in the same semester as CS202. Therefore, CS101 is related to CS202. This implies CS101 must be completed before CS201, and CS201 is taken concurrently with CS202. So, CS101 must be completed before CS201 is taken.
*   $(\text{CS101}, \text{CS203}) \in S \circ R$ means: CS101 is a prerequisite for CS202, and CS202 is taught in the same semester as CS203. Therefore, CS101 must be completed before CS202 is taken, and CS202 is taken concurrently with CS203. This implies CS101 must be completed before CS202 is taken.

In essence, $S \circ R$ represents a relationship where "Course A must be completed (as a prerequisite for B), and Course B is taken concurrently with Course C." This indicates a scheduling or dependency chain where an earlier requirement leads to a concurrent study situation. It describes a scenario where an earlier course requirement sets up a situation for two courses to be taken together.
