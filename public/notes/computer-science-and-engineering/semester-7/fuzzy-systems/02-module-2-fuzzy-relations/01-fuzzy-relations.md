---
title: "Fuzzy Relations :-"
subject: "FUZZY SYSTEMS"
module: "Module 2: Fuzzy Relations :"
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c4ba"
status: "completed"
scrapedAt: "2026-05-20T17:06:13.089Z"
---
# Fuzzy Systems: Module 2 - Fuzzy Relations

## Introduction to Fuzzy Relations

Fuzzy relations extend the concept of classical (crisp) relations to handle imprecise or vague relationships between elements of fuzzy sets. They are fundamental in representing and reasoning with fuzzy knowledge.

---

### Learning Outcome 1: Define and explain the concept of a fuzzy relation.

**Key Concept:** A fuzzy relation is a fuzzy subset of the Cartesian product of two or more universes of discourse. It captures the degree to which elements from these universes are related.

**Definition:**
A fuzzy relation $R$ on a universe of discourse $X$ is a fuzzy subset of $X \times X$. If $X = \{x_1, x_2, ..., x_n\}$, then $X \times X = \{(x_i, x_j) | x_i, x_j \in X\}$.
The membership function of $R$, denoted by $\mu_R$, assigns a degree of membership (between 0 and 1) to each pair $(x_i, x_j) \in X \times X$.

$$\mu_R: X \times X \to [0, 1]$$

**In simpler terms:**
*   **Crisp Relation:** Either two elements are related (membership 1) or they are not (membership 0).
*   **Fuzzy Relation:** Elements can be related to varying degrees.

**Example:**
Consider the universe of discourse $X = \{\text{young, middle-aged, old}\}$.
A fuzzy relation $R$ representing "age closeness" could be defined as:

*   young is related to young to degree 1.0
*   young is related to middle-aged to degree 0.7
*   young is related to old to degree 0.1

*   middle-aged is related to young to degree 0.7
*   middle-aged is related to middle-aged to degree 1.0
*   middle-aged is related to old to degree 0.6

*   old is related to young to degree 0.1
*   old is related to middle-aged to degree 0.6
*   old is related to old to degree 1.0

This can be represented by a membership matrix:

$$
R =
\begin{pmatrix}
1.0 & 0.7 & 0.1 \\
0.7 & 1.0 & 0.6 \\
0.1 & 0.6 & 1.0
\end{pmatrix}
$$

**Important Point to Remember:**
*   A fuzzy relation quantifies the strength of association between elements.

---

### Learning Outcome 2: Understand and represent fuzzy relations.

Fuzzy relations can be represented in several ways, similar to crisp relations, but using membership values.

**Representation Methods:**

1.  **Membership Matrix:**
    *   For two finite universes $X = \{x_1, ..., x_n\}$ and $Y = \{y_1, ..., y_m\}$, a fuzzy relation $R$ on $X \times Y$ can be represented by an $n \times m$ membership matrix.
    *   The element in the $i$-th row and $j$-th column is $\mu_R(x_i, y_j)$.

    **Example (Binary Relation on two sets):**
    $X = \{A, B\}$, $Y = \{1, 2, 3\}$
    Fuzzy relation $R$ on $X \times Y$: "X is associated with Y"

    $$
    \mu_R =
    \begin{pmatrix}
    0.8 & 0.2 & 0.1 \\
    0.5 & 0.9 & 0.3
    \end{pmatrix}
    $$
    This means:
    *   $\mu_R(A, 1) = 0.8$ (A is related to 1 to degree 0.8)
    *   $\mu_R(B, 2) = 0.9$ (B is related to 2 to degree 0.9)

2.  **Graphical Representation:**
    *   A directed graph where nodes represent elements of the universes.
    *   Edges between nodes are labeled with membership values (degrees of relation).

    **Example (using the age relation from LO1):**
    Nodes: young, middle-aged, old
    Edges:
    *   (young, young) with weight 1.0
    *   (young, middle-aged) with weight 0.7
    *   (young, old) with weight 0.1
    *   ... and so on for all pairs.

3.  **Membership Function Formula:**
    *   Explicitly defining the membership function $\mu_R(x, y)$.

    **Example (using the age relation from LO1):**
    $\mu_R(\text{young}, \text{young}) = 1.0$
    $\mu_R(\text{young}, \text{middle-aged}) = 0.7$
    $\mu_R(\text{young}, \text{old}) = 0.1$
    ... and so on.

**Important Points to Remember:**
*   The choice of representation depends on the context and the number of elements in the universes.
*   Membership matrices are common for smaller, discrete universes.

---

### Learning Outcome 3: Define and compute various types of fuzzy relations.

Several types of fuzzy relations are defined based on properties analogous to crisp relations (reflexivity, symmetry, transitivity).

**1. Binary Fuzzy Relations:**
*   These are fuzzy relations on $X \times X$ (or $X \times Y$).
*   They are defined by a membership function $\mu_R: X \times X \to [0, 1]$.

**2. Cylindrical Fuzzy Relations:**
*   These are fuzzy relations defined on the Cartesian product of multiple universes, e.g., $X_1 \times X_2 \times ... \times X_n$.
*   The membership function is $\mu_R: X_1 \times X_2 \times ... \times X_n \to [0, 1]$.

**Properties of Fuzzy Relations (on $X \times X$):**

*   **Reflexivity:** $R$ is reflexive if $\mu_R(x, x) = 1$ for all $x \in X$.
    *   **Meaning:** Every element is related to itself to the maximum degree.
    *   **Example:** The "age closeness" relation from LO1 is reflexive.

*   **Symmetry:** $R$ is symmetric if $\mu_R(x, y) = \mu_R(y, x)$ for all $x, y \in X$.
    *   **Meaning:** If $x$ is related to $y$ to degree $a$, then $y$ is related to $x$ to degree $a$.
    *   **Example:** The "age closeness" relation is symmetric.

*   **Antisymmetry:** $R$ is antisymmetric if $\mu_R(x, y) = 1$ implies $\mu_R(y, x) = 1$ only if $x=y$. A stronger fuzzy definition: $\mu_R(x, y) > 0$ and $\mu_R(y, x) > 0$ implies $x=y$. Or $\min(\mu_R(x, y), \mu_R(y, x)) = 0$ if $x \neq y$.
    *   **Meaning:** If $x$ is related to $y$ and $y$ is related to $x$ (to some degree), then $x$ must be equal to $y$.
    *   **Example:** A relation "x is strictly greater than y" (e.g., $x > y$) would be antisymmetric in a fuzzy sense. If $x > y$ to degree $a$, then $y > x$ to degree $0$.

*   **Transitivity:** $R$ is transitive if for any $x, y, z \in X$, $\mu_R(x, z) \ge \sup_{y \in X} \{\min(\mu_R(x, y), \mu_R(y, z))\}$.
    *   **Meaning:** If $x$ is related to $y$ to degree $a$ and $y$ is related to $z$ to degree $b$, then $x$ is related to $z$ to at least degree $\min(a, b)$. This is known as **max-min transitivity**.
    *   **Example:** A relation like "is taller than" or "is similar to" can be transitive.

*   **Other forms of Transitivity:**
    *   **Max-product transitivity:** $\mu_R(x, z) \ge \sup_{y \in X} \{\mu_R(x, y) \times \mu_R(y, z)\}$
    *   **Max-average transitivity:** $\mu_R(x, z) \ge \sup_{y \in X} \{0.5 \times (\mu_R(x, y) + \mu_R(y, z))\}$

**Composition of Fuzzy Relations:**

*   **Composition of $R$ (on $X \times Y$) and $S$ (on $Y \times Z$) to get $T$ (on $X \times Z$):**
    *   **Max-min composition ($T = R \circ S$):** $\mu_T(x, z) = \sup_{y \in Y} \{\min(\mu_R(x, y), \mu_S(y, z))\}$
    *   **Max-product composition ($T = R \bullet S$):** $\mu_T(x, z) = \sup_{y \in Y} \{\mu_R(x, y) \times \mu_S(y, z)\}$

**Example of Max-min composition:**
$X = \{A, B\}$, $Y = \{1, 2\}$, $Z = \{P, Q\}$

$R$ on $X \times Y$:
$$
\mu_R =
\begin{pmatrix}
0.8 & 0.2 \\
0.5 & 0.9
\end{pmatrix}
$$

$S$ on $Y \times Z$:
$$
\mu_S =
\begin{pmatrix}
0.7 & 0.3 \\
0.4 & 0.6
\end{pmatrix}
$$

Calculate $T = R \circ S$:
$\mu_T(A, P) = \sup\{\min(\mu_R(A, 1), \mu_S(1, P)), \min(\mu_R(A, 2), \mu_S(2, P))\}$
$\mu_T(A, P) = \sup\{\min(0.8, 0.7), \min(0.2, 0.4)\}$
$\mu_T(A, P) = \sup\{0.7, 0.2\} = 0.7$

$\mu_T(A, Q) = \sup\{\min(\mu_R(A, 1), \mu_S(1, Q)), \min(\mu_R(A, 2), \mu_S(2, Q))\}$
$\mu_T(A, Q) = \sup\{\min(0.8, 0.3), \min(0.2, 0.6)\}$
$\mu_T(A, Q) = \sup\{0.3, 0.2\} = 0.3$

$\mu_T(B, P) = \sup\{\min(\mu_R(B, 1), \mu_S(1, P)), \min(\mu_R(B, 2), \mu_S(2, P))\}$
$\mu_T(B, P) = \sup\{\min(0.5, 0.7), \min(0.9, 0.4)\}$
$\mu_T(B, P) = \sup\{0.5, 0.4\} = 0.5$

$\mu_T(B, Q) = \sup\{\min(\mu_R(B, 1), \mu_S(1, Q)), \min(\mu_R(B, 2), \mu_S(2, Q))\}$
$\mu_T(B, Q) = \sup\{\min(0.5, 0.3), \min(0.9, 0.6)\}$
$\mu_T(B, Q) = \sup\{0.3, 0.6\} = 0.6$

So, the membership matrix for $T = R \circ S$ is:
$$
\mu_T =
\begin{pmatrix}
0.7 & 0.3 \\
0.5 & 0.6
\end{pmatrix}
$$

**Important Points to Remember:**
*   Max-min composition is the most common form of fuzzy relation composition.
*   The properties (reflexivity, symmetry, transitivity) are generalizations of crisp relation properties.

---

### Learning Outcome 4: Understand the properties of fuzzy relations and how to check them.

This outcome focuses on identifying and verifying the properties discussed in LO3.

**How to Check Properties:**

*   **Reflexivity:**
    *   Examine the diagonal elements of the membership matrix for a relation on $X \times X$.
    *   If all diagonal elements $\mu_R(x, x)$ are 1, the relation is reflexive.

*   **Symmetry:**
    *   For a matrix representation, check if the matrix is symmetric across the main diagonal.
    *   $\mu_R(x, y) = \mu_R(y, x)$ for all pairs.

*   **Transitivity (Max-min):**
    *   For every triplet $(x, y, z)$, calculate $\min(\mu_R(x, y), \mu_R(y, z))$.
    *   Find the maximum of these minimums over all possible intermediate elements $y$. Let this be $m_{xz}$.
    *   Check if $\mu_R(x, z) \ge m_{xz}$ for all $x, z$.

**Example: Checking Transitivity (Max-min) for the Age Relation:**
$X = \{\text{young, middle-aged, old}\}$

$$
R =
\begin{pmatrix}
1.0 & 0.7 & 0.1 \\
0.7 & 1.0 & 0.6 \\
0.1 & 0.6 & 1.0
\end{pmatrix}
$$

Let's check for (young, middle-aged, old):
$x = \text{young}$, $y = \text{middle-aged}$, $z = \text{old}$

$\mu_R(\text{young}, \text{middle-aged}) = 0.7$
$\mu_R(\text{middle-aged}, \text{old}) = 0.6$

$\min(\mu_R(\text{young}, \text{middle-aged}), \mu_R(\text{middle-aged}, \text{old})) = \min(0.7, 0.6) = 0.6$

Now we need to compare this with $\mu_R(\text{young}, \text{old})$.
$\mu_R(\text{young}, \text{old}) = 0.1$

Is $0.1 \ge 0.6$? No.
Therefore, this relation is **not** transitive by the max-min definition.

**Let's check for (young, young, old):**
$x = \text{young}$, $y = \text{young}$, $z = \text{old}$

$\mu_R(\text{young}, \text{young}) = 1.0$
$\mu_R(\text{young}, \text{old}) = 0.1$

$\min(\mu_R(\text{young}, \text{young}), \mu_R(\text{young}, \text{old})) = \min(1.0, 0.1) = 0.1$

Compare with $\mu_R(\text{young}, \text{old})$:
$\mu_R(\text{young}, \text{old}) = 0.1$

Is $0.1 \ge 0.1$? Yes.

We would need to check all $3^3 = 27$ combinations of $(x, y, z)$ to confirm or deny transitivity for the entire relation.

**Important Points to Remember:**
*   Checking transitivity can be computationally intensive for large universes.
*   It's crucial to specify which type of transitivity is being checked (max-min, max-product, etc.).

---

### Learning Outcome 5: Understand the concept of fuzzy equivalence relations.

**Definition:**
A fuzzy relation $R$ on a universe of discourse $X$ is called a **fuzzy equivalence relation** if it satisfies the following properties:
1.  **Reflexivity:** $\mu_R(x, x) = 1$ for all $x \in X$.
2.  **Symmetry:** $\mu_R(x, y) = \mu_R(y, x)$ for all $x, y \in X$.
3.  **Transitivity (Max-min):** $\mu_R(x, z) \ge \min(\mu_R(x, y), \mu_R(y, z))$ for all $x, y, z \in X$.

**Significance:**
Fuzzy equivalence relations partition the universe into fuzzy equivalence classes. Elements within the same class are "similar" to a high degree.

**How to obtain a fuzzy equivalence relation:**

*   **From a fuzzy similarity relation:** A fuzzy relation $R$ is a fuzzy similarity relation if it is reflexive and symmetric.
*   **From a fuzzy tolerance relation:** A fuzzy relation $R$ is a fuzzy tolerance relation if it is reflexive and symmetric. (Often used interchangeably with similarity relation).
*   **By fuzzy reflexive transitive closure:** If $R$ is reflexive and symmetric, its fuzzy reflexive transitive closure $R^{**}$ is an equivalence relation.
    *   $R^* = R \circ R \circ \dots \circ R$ (transitive closure, often with max-min composition)
    *   $R^{**} = R^* \circ R$ (reflexive transitive closure, to ensure reflexivity is maintained)
    *   If $R$ is symmetric, $R \circ R = R \circ R \circ R$.

**Example:**
Let $X = \{a, b, c\}$.
Consider a fuzzy relation $R$ given by the matrix:
$$
R =
\begin{pmatrix}
1.0 & 0.8 & 0.2 \\
0.8 & 1.0 & 0.7 \\
0.2 & 0.7 & 1.0
\end{pmatrix}
$$

1.  **Reflexivity:** Diagonal elements are all 1.0. **Yes**.
2.  **Symmetry:** The matrix is symmetric. $\mu_R(a, b) = 0.8 = \mu_R(b, a)$, etc. **Yes**.
3.  **Transitivity (Max-min):** Let's check a few cases.
    *   $(a, b, c)$: $\min(\mu_R(a, b), \mu_R(b, c)) = \min(0.8, 0.7) = 0.7$.
        $\mu_R(a, c) = 0.2$. Is $0.2 \ge 0.7$? **No**.
        So, this relation is **not** a fuzzy equivalence relation.

Let's modify it to be transitive.
Suppose we compute the fuzzy reflexive transitive closure of a reflexive and symmetric relation $R'$.
If $R'$ was reflexive and symmetric, we can calculate $R'^{**} = R' \circ R'$.
$R'_{**}(x, z) = \sup_{y \in X} \{\min(\mu_{R'}(x, y), \mu_{R'}(y, z))\}$

**Example of Fuzzy Equivalence Classes:**
Consider a relation that is already a fuzzy equivalence relation.
$X = \{1, 2, 3, 4\}$
$$
R =
\begin{pmatrix}
1.0 & 0.9 & 0.3 & 0.3 \\
0.9 & 1.0 & 0.3 & 0.3 \\
0.3 & 0.3 & 1.0 & 0.8 \\
0.3 & 0.3 & 0.8 & 1.0
\end{pmatrix}
$$
This relation is reflexive and symmetric. Let's assume it's also max-min transitive.

We can see two groups of high similarity: $\{1, 2\}$ and $\{3, 4\}$.
The fuzzy equivalence classes are not crisp sets but fuzzy sets.

*   **Equivalence class of 1:**
    $\mu_{[1]}(1) = \mu_R(1, 1) = 1.0$
    $\mu_{[1]}(2) = \mu_R(1, 2) = 0.9$
    $\mu_{[1]}(3) = \mu_R(1, 3) = 0.3$
    $\mu_{[1]}(4) = \mu_R(1, 4) = 0.3$
    Class 1: $\{(1, 1.0), (2, 0.9), (3, 0.3), (4, 0.3)\}$

*   **Equivalence class of 3:** (Due to symmetry, class of 3 is the same as class of 4)
    $\mu_{[3]}(1) = \mu_R(3, 1) = 0.3$
    $\mu_{[3]}(2) = \mu_R(3, 2) = 0.3$
    $\mu_{[3]}(3) = \mu_R(3, 3) = 1.0$
    $\mu_{[3]}(4) = \mu_R(3, 4) = 0.8$
    Class 3: $\{(1, 0.3), (2, 0.3), (3, 1.0), (4, 0.8)\}$

**Important Points to Remember:**
*   Fuzzy equivalence relations generalize the concept of partitioning a set.
*   They are characterized by reflexivity, symmetry, and max-min transitivity.

---

## Module 2 Practice Questions and Answers

**Question 1:**
Given a universe $X = \{A, B\}$ and a fuzzy relation $R$ defined by the membership matrix:
$$
\mu_R =
\begin{pmatrix}
1.0 & 0.5 \\
0.5 & 1.0
\end{pmatrix}
$$
Is this relation reflexive, symmetric, and transitive (using max-min)? Justify your answers.

**Answer 1:**
*   **Reflexive:** Yes, because the diagonal elements $\mu_R(A, A)$ and $\mu_R(B, B)$ are both 1.0.
*   **Symmetric:** Yes, because $\mu_R(A, B) = 0.5$ and $\mu_R(B, A) = 0.5$. The matrix is symmetric.
*   **Transitive (Max-min):** We need to check for all triplets $(x, y, z)$.
    *   Consider $(A, A, B)$: $\min(\mu_R(A, A), \mu_R(A, B)) = \min(1.0, 0.5) = 0.5$.
        Is $\mu_R(A, B) \ge 0.5$? Yes, $0.5 \ge 0.5$.
    *   Consider $(A, B, A)$: $\min(\mu_R(A, B), \mu_R(B, A)) = \min(0.5, 0.5) = 0.5$.
        Is $\mu_R(A, A) \ge 0.5$? Yes, $1.0 \ge 0.5$.
    *   Consider $(B, A, B)$: $\min(\mu_R(B, A), \mu_R(A, B)) = \min(0.5, 0.5) = 0.5$.
        Is $\mu_R(B, B) \ge 0.5$? Yes, $1.0 \ge 0.5$.
    *   Consider $(B, B, A)$: $\min(\mu_R(B, B), \mu_R(B, A)) = \min(1.0, 0.5) = 0.5$.
        Is $\mu_R(B, A) \ge 0.5$? Yes, $0.5 \ge 0.5$.
    *   The cases with $x=y=z$ are trivially true since $\min(1.0, 1.0) = 1.0 \ge 1.0$.
    Since all checks pass, the relation **is** transitive (max-min).

**Question 2:**
Let $X = \{1, 2, 3\}$ and $Y = \{a, b\}$. A fuzzy relation $R$ on $X \times Y$ is given by:
$$
\mu_R =
\begin{pmatrix}
0.7 & 0.2 \\
0.9 & 0.4 \\
0.1 & 0.8
\end{pmatrix}
$$
Let $S$ be another fuzzy relation on $Y \times Z$ where $Z = \{p, q\}$:
$$
\mu_S =
\begin{pmatrix}
0.6 & 0.3 \\
0.5 & 0.9
\end{pmatrix}
$$
Compute the max-min composition $T = R \circ S$.

**Answer 2:**
We need to compute $\mu_T(x, z) = \sup_{y \in Y} \{\min(\mu_R(x, y), \mu_S(y, z))\}$.

*   $\mu_T(1, p) = \sup\{\min(\mu_R(1, a), \mu_S(a, p)), \min(\mu_R(1, b), \mu_S(b, p))\}$
    $\mu_T(1, p) = \sup\{\min(0.7, 0.6), \min(0.2, 0.5)\}$
    $\mu_T(1, p) = \sup\{0.6, 0.2\} = 0.6$

*   $\mu_T(1, q) = \sup\{\min(\mu_R(1, a), \mu_S(a, q)), \min(\mu_R(1, b), \mu_S(b, q))\}$
    $\mu_T(1, q) = \sup\{\min(0.7, 0.3), \min(0.2, 0.9)\}$
    $\mu_T(1, q) = \sup\{0.3, 0.2\} = 0.3$

*   $\mu_T(2, p) = \sup\{\min(\mu_R(2, a), \mu_S(a, p)), \min(\mu_R(2, b), \mu_S(b, p))\}$
    $\mu_T(2, p) = \sup\{\min(0.9, 0.6), \min(0.4, 0.5)\}$
    $\mu_T(2, p) = \sup\{0.6, 0.4\} = 0.6$

*   $\mu_T(2, q) = \sup\{\min(\mu_R(2, a), \mu_S(a, q)), \min(\mu_R(2, b), \mu_S(b, q))\}$
    $\mu_T(2, q) = \sup\{\min(0.9, 0.3), \min(0.4, 0.9)\}$
    $\mu_T(2, q) = \sup\{0.3, 0.4\} = 0.4$

*   $\mu_T(3, p) = \sup\{\min(\mu_R(3, a), \mu_S(a, p)), \min(\mu_R(3, b), \mu_S(b, p))\}$
    $\mu_T(3, p) = \sup\{\min(0.1, 0.6), \min(0.8, 0.5)\}$
    $\mu_T(3, p) = \sup\{0.1, 0.5\} = 0.5$

*   $\mu_T(3, q) = \sup\{\min(\mu_R(3, a), \mu_S(a, q)), \min(\mu_R(3, b), \mu_S(b, q))\}$
    $\mu_T(3, q) = \sup\{\min(0.1, 0.3), \min(0.8, 0.9)\}$
    $\mu_T(3, q) = \sup\{0.1, 0.8\} = 0.8$

So, the membership matrix for $T = R \circ S$ is:
$$
\mu_T =
\begin{pmatrix}
0.6 & 0.3 \\
0.6 & 0.4 \\
0.5 & 0.8
\end{pmatrix}
$$

---

## Key Takeaways from Module 2

*   Fuzzy relations extend crisp relations by using membership degrees from $[0, 1]$.
*   They can be represented by membership matrices, graphs, or explicit membership functions.
*   Key properties like reflexivity, symmetry, and transitivity are generalized for fuzzy relations.
*   Max-min and max-product are common composition operators for fuzzy relations.
*   A fuzzy equivalence relation is reflexive, symmetric, and max-min transitive, partitioning the universe into fuzzy equivalence classes.
*   Fuzzy relations are the backbone for representing knowledge and performing reasoning in fuzzy systems.

---
