---
title: "Operations on Fuzzy relations: union, intersection, complement, cartesian product."
subject: "FUZZY SYSTEMS"
module: "Module 2: Fuzzy Relations :"
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c4bb"
status: "completed"
scrapedAt: "2026-05-20T17:06:13.790Z"
---
# Fuzzy Systems: Module 2 - Fuzzy Relations: Operations on Fuzzy Relations

This module delves into the fundamental operations performed on fuzzy relations, extending the concepts of crisp set operations to the fuzzy domain. Understanding these operations is crucial for building and manipulating fuzzy systems.

## Learning Outcomes

Upon successful completion of this module, you will be able to:

*   Understand and apply the concepts of fuzzy set operations (union, intersection, complement) to fuzzy relations.
*   Define and compute the Cartesian product of fuzzy sets and its extension to fuzzy relations.
*   Analyze the properties of fuzzy relation operations.
*   Solve problems involving the application of fuzzy relation operations.

---

## 1. Introduction to Operations on Fuzzy Relations

Fuzzy relations, like crisp relations, can be manipulated using various set operations. These operations allow us to combine, modify, and extend fuzzy relations to create more complex fuzzy models. The core idea is to extend the familiar operations from fuzzy set theory to the context of relations.

---

## 2. Fuzzy Set Operations on Fuzzy Relations

Fuzzy relations are essentially fuzzy sets defined on the Cartesian product of two or more universes of discourse. Therefore, we can apply the standard fuzzy set operations to the membership degrees of the elements within a fuzzy relation.

### 2.1. Fuzzy Union of Fuzzy Relations

The fuzzy union of two fuzzy relations, $R_1$ and $R_2$, defined on the same product space $X \times Y$, results in a new fuzzy relation $R$ where the membership degree of a pair $(x, y)$ in $R$ is the **t-conorm** of the membership degrees of $(x, y)$ in $R_1$ and $R_2$.

**Definition:**
Let $R_1$ and $R_2$ be two fuzzy relations on $X \times Y$. Their fuzzy union, denoted by $R_1 \cup R_2$, is defined as:

$\mu_{R_1 \cup R_2}(x, y) = \mu_{R_1}(x, y) \oplus \mu_{R_2}(x, y)$

where $\oplus$ denotes a t-conorm.

**Common T-Conorms:**

*   **Maximum (Probabilistic Sum):** $\mu_{R_1}(x, y) \vee \mu_{R_2}(x, y) = \max(\mu_{R_1}(x, y), \mu_{R_2}(x, y))$
*   **Algebraic Sum:** $\mu_{R_1}(x, y) + \mu_{R_2}(x, y) - \mu_{R_1}(x, y) \cdot \mu_{R_2}(x, y)$
*   **Bounded Sum:** $\min(1, \mu_{R_1}(x, y) + \mu_{R_2}(x, y))$

**Example:**
Let $X = \{a, b\}$ and $Y = \{p, q\}$.
Consider two fuzzy relations:

$R_1 = \{(a, p): 0.7, (a, q): 0.3, (b, p): 0.5, (b, q): 0.9\}$
$R_2 = \{(a, p): 0.2, (a, q): 0.8, (b, p): 0.6, (b, q): 0.1\}$

Using the maximum t-conorm for union:

$R_1 \cup R_2 = \{(a, p): \max(0.7, 0.2), (a, q): \max(0.3, 0.8), (b, p): \max(0.5, 0.6), (b, q): \max(0.9, 0.1)\}$
$R_1 \cup R_2 = \{(a, p): 0.7, (a, q): 0.8, (b, p): 0.6, (b, q): 0.9\}$

---

### 2.2. Fuzzy Intersection of Fuzzy Relations

The fuzzy intersection of two fuzzy relations, $R_1$ and $R_2$, defined on the same product space $X \times Y$, results in a new fuzzy relation $R$ where the membership degree of a pair $(x, y)$ in $R$ is the **t-norm** of the membership degrees of $(x, y)$ in $R_1$ and $R_2$.

**Definition:**
Let $R_1$ and $R_2$ be two fuzzy relations on $X \times Y$. Their fuzzy intersection, denoted by $R_1 \cap R_2$, is defined as:

$\mu_{R_1 \cap R_2}(x, y) = \mu_{R_1}(x, y) \wedge \mu_{R_2}(x, y)$

where $\wedge$ denotes a t-norm.

**Common T-Norms:**

*   **Minimum (Standard Intersection):** $\mu_{R_1}(x, y) \wedge \mu_{R_2}(x, y) = \min(\mu_{R_1}(x, y), \mu_{R_2}(x, y))$
*   **Algebraic Product:** $\mu_{R_1}(x, y) \cdot \mu_{R_2}(x, y)$
*   **Bounded Product:** $\max(0, \mu_{R_1}(x, y) + \mu_{R_2}(x, y) - 1)$

**Example:**
Using the same $R_1$ and $R_2$ from the union example:

$R_1 = \{(a, p): 0.7, (a, q): 0.3, (b, p): 0.5, (b, q): 0.9\}$
$R_2 = \{(a, p): 0.2, (a, q): 0.8, (b, p): 0.6, (b, q): 0.1\}$

Using the minimum t-norm for intersection:

$R_1 \cap R_2 = \{(a, p): \min(0.7, 0.2), (a, q): \min(0.3, 0.8), (b, p): \min(0.5, 0.6), (b, q): \min(0.9, 0.1)\}$
$R_1 \cap R_2 = \{(a, p): 0.2, (a, q): 0.3, (b, p): 0.5, (b, q): 0.1\}$

---

### 2.3. Fuzzy Complement of a Fuzzy Relation

The fuzzy complement of a fuzzy relation $R$, defined on $X \times Y$, results in a new fuzzy relation $R^c$ where the membership degree of a pair $(x, y)$ in $R^c$ is the **complement** of the membership degree of $(x, y)$ in $R$.

**Definition:**
Let $R$ be a fuzzy relation on $X \times Y$. Its fuzzy complement, denoted by $R^c$ or $\bar{R}$, is defined as:

$\mu_{R^c}(x, y) = 1 - \mu_R(x, y)$

This is a standard fuzzy complement. Other generalized fuzzy complements exist but are less commonly used in introductory contexts.

**Example:**
Using $R_1$ from the previous examples:

$R_1 = \{(a, p): 0.7, (a, q): 0.3, (b, p): 0.5, (b, q): 0.9\}$

The fuzzy complement of $R_1$ is:

$R_1^c = \{(a, p): 1 - 0.7, (a, q): 1 - 0.3, (b, p): 1 - 0.5, (b, q): 1 - 0.9\}$
$R_1^c = \{(a, p): 0.3, (a, q): 0.7, (b, p): 0.5, (b, q): 0.1\}$

**Important Note on Complements:**
The complement operation distributes over t-norms and t-conorms in a generalized way through De Morgan's laws for fuzzy sets:
*   $(R_1 \cap R_2)^c = R_1^c \cup R_2^c$
*   $(R_1 \cup R_2)^c = R_1^c \cap R_2^c$
This holds true for standard fuzzy complements and corresponding t-norms/t-conorms.

---

## 3. Cartesian Product of Fuzzy Relations

The Cartesian product of fuzzy relations extends the concept of the Cartesian product of fuzzy sets to relations. It allows us to combine elements from different product spaces to form a higher-order fuzzy relation.

### 3.1. Cartesian Product of Two Fuzzy Relations

The Cartesian product of two fuzzy relations, $R_1$ on $X \times Y$ and $R_2$ on $U \times V$, results in a fuzzy relation on $(X \times Y) \times (U \times V)$, which can also be represented as $X \times Y \times U \times V$.

**Definition:**
Let $R_1 \subseteq X \times Y$ and $R_2 \subseteq U \times V$ be fuzzy relations. Their Cartesian product, denoted by $R_1 \times R_2$, is a fuzzy relation on $(X \times Y) \times (U \times V)$ defined as:

$\mu_{R_1 \times R_2}((x, y), (u, v)) = \mu_{R_1}(x, y) \wedge \mu_{R_2}(u, v)$

where $\wedge$ is a t-norm (typically the minimum or algebraic product).

**Example:**
Let $X = \{a\}$, $Y = \{p\}$, $U = \{1\}$, $V = \{2\}$.
Let $R_1 = \{(a, p): 0.8\}$ on $X \times Y$.
Let $R_2 = \{(1, 2): 0.7\}$ on $U \times V$.

The Cartesian product $R_1 \times R_2$ is a fuzzy relation on $(X \times Y) \times (U \times V)$, which is $\{(a, p), (1, 2)\}$.

Using the minimum t-norm:
$\mu_{R_1 \times R_2}(((a, p), (1, 2))) = \mu_{R_1}(a, p) \wedge \mu_{R_2}(1, 2) = 0.8 \wedge 0.7 = 0.7$

So, $R_1 \times R_2 = \{((a, p), (1, 2)): 0.7\}$.

### 3.2. Cartesian Product of a Fuzzy Relation with a Fuzzy Set

This is a special case where one of the relations is a singleton relation (effectively a fuzzy set).

**Definition:**
Let $R$ be a fuzzy relation on $X \times Y$ and $A$ be a fuzzy set on $Z$. The Cartesian product $R \times A$ is a fuzzy relation on $(X \times Y) \times Z$ defined as:

$\mu_{R \times A}((x, y), z) = \mu_R(x, y) \wedge \mu_A(z)$

where $\wedge$ is a t-norm.

**Example:**
Let $X = \{a\}$, $Y = \{p\}$.
$R = \{(a, p): 0.8\}$ on $X \times Y$.
Let $Z = \{1, 2\}$ and $A = \{1: 0.6, 2: 0.9\}$ on $Z$.

The Cartesian product $R \times A$ is a fuzzy relation on $(X \times Y) \times Z$, which is $\{(a, p), 1\}$ and $\{(a, p), 2\}$.

Using the minimum t-norm:
$\mu_{R \times A}((a, p), 1) = \mu_R(a, p) \wedge \mu_A(1) = 0.8 \wedge 0.6 = 0.6$
$\mu_{R \times A}((a, p), 2) = \mu_R(a, p) \wedge \mu_A(2) = 0.8 \wedge 0.9 = 0.8$

So, $R \times A = \{((a, p), 1): 0.6, ((a, p), 2): 0.8\}$.

---

## 4. Properties of Fuzzy Relation Operations

Fuzzy relation operations inherit many properties from fuzzy set operations.

### 4.1. Properties of Union (T-Conorm)

Assuming the maximum t-conorm:

*   **Commutativity:** $R_1 \cup R_2 = R_2 \cup R_1$
    $\mu_{R_1 \cup R_2}(x, y) = \max(\mu_{R_1}(x, y), \mu_{R_2}(x, y)) = \max(\mu_{R_2}(x, y), \mu_{R_1}(x, y)) = \mu_{R_2 \cup R_1}(x, y)$
*   **Associativity:** $(R_1 \cup R_2) \cup R_3 = R_1 \cup (R_2 \cup R_3)$
    $\max(\max(\mu_{R_1}, \mu_{R_2}), \mu_{R_3}) = \max(\mu_{R_1}, \max(\mu_{R_2}, \mu_{R_3}))$
*   **Idempotence:** $R \cup R = R$
    $\max(\mu_R(x, y), \mu_R(x, y)) = \mu_R(x, y)$
*   **Identity Element (Empty Relation):** $R \cup \emptyset = R$ (where $\emptyset$ is the relation with all membership degrees as 0)
    $\max(\mu_R(x, y), 0) = \mu_R(x, y)$
*   **Absorption Laws:**
    *   $R_1 \cup (R_1 \cap R_2) = R_1$
    *   $R_1 \cap (R_1 \cup R_2) = R_1$

### 4.2. Properties of Intersection (T-Norm)

Assuming the minimum t-norm:

*   **Commutativity:** $R_1 \cap R_2 = R_2 \cap R_1$
    $\min(\mu_{R_1}(x, y), \mu_{R_2}(x, y)) = \min(\mu_{R_2}(x, y), \mu_{R_1}(x, y))$
*   **Associativity:** $(R_1 \cap R_2) \cap R_3 = R_1 \cap (R_2 \cap R_3)$
    $\min(\min(\mu_{R_1}, \mu_{R_2}), \mu_{R_3}) = \min(\mu_{R_1}, \min(\mu_{R_2}, \mu_{R_3}))$
*   **Idempotence:** $R \cap R = R$
    $\min(\mu_R(x, y), \mu_R(x, y)) = \mu_R(x, y)$
*   **Identity Element (Universal Relation):** $R \cap U = R$ (where $U$ is the relation with all membership degrees as 1)
    $\min(\mu_R(x, y), 1) = \mu_R(x, y)$

### 4.3. Properties of Complement

*   **Complementation Law:** $R \cup R^c = U$ (Universal relation, all membership degrees are 1)
    $\max(\mu_R(x, y), 1 - \mu_R(x, y)) = 1$
*   **Double Complementation:** $(R^c)^c = R$
    $1 - (1 - \mu_R(x, y)) = \mu_R(x, y)$
*   **De Morgan's Laws:**
    *   $(R_1 \cap R_2)^c = R_1^c \cup R_2^c$
    *   $(R_1 \cup R_2)^c = R_1^c \cap R_2^c$

### 4.4. Properties of Cartesian Product

*   **Associativity (for t-norms):** $(R_1 \times R_2) \times R_3 = R_1 \times (R_2 \times R_3)$ (assuming the same t-norm for all operations)
*   **Distributivity over Union (for t-norms):**
    *   $R_1 \times (R_2 \cup R_3) = (R_1 \times R_2) \cup (R_1 \times R_3)$
    *   $(R_1 \cup R_2) \times R_3 = (R_1 \times R_3) \cup (R_2 \times R_3)$
*   **Distributivity over Intersection (for t-norms):**
    *   $R_1 \times (R_2 \cap R_3) = (R_1 \times R_2) \cap (R_1 \times R_3)$
    *   $(R_1 \cap R_2) \times R_3 = (R_1 \times R_3) \cap (R_2 \times R_3)$

---

## 5. Practice Questions and Exercises

**Question 1:**
Let $X = \{x_1, x_2\}$ and $Y = \{y_1, y_2\}$. Given the fuzzy relations $R_1$ and $R_2$:

$R_1 = \begin{pmatrix} 0.8 & 0.2 \\ 0.4 & 0.7 \end{pmatrix}$ (matrix representation where rows correspond to $x_1, x_2$ and columns to $y_1, y_2$)
$R_2 = \begin{pmatrix} 0.3 & 0.9 \\ 0.6 & 0.1 \end{pmatrix}$

a) Compute $R_1 \cup R_2$ using the maximum t-conorm.
b) Compute $R_1 \cap R_2$ using the minimum t-norm.
c) Compute $R_1^c$.

**Answer 1:**

a) $R_1 \cup R_2 = \begin{pmatrix} \max(0.8, 0.3) & \max(0.2, 0.9) \\ \max(0.4, 0.6) & \max(0.7, 0.1) \end{pmatrix} = \begin{pmatrix} 0.8 & 0.9 \\ 0.6 & 0.7 \end{pmatrix}$

b) $R_1 \cap R_2 = \begin{pmatrix} \min(0.8, 0.3) & \min(0.2, 0.9) \\ \min(0.4, 0.6) & \min(0.7, 0.1) \end{pmatrix} = \begin{pmatrix} 0.3 & 0.2 \\ 0.4 & 0.1 \end{pmatrix}$

c) $R_1^c = \begin{pmatrix} 1-0.8 & 1-0.2 \\ 1-0.4 & 1-0.7 \end{pmatrix} = \begin{pmatrix} 0.2 & 0.8 \\ 0.6 & 0.3 \end{pmatrix}$

---

**Question 2:**
Let $R_1$ be a fuzzy relation on $\{a, b\} \times \{p, q\}$ defined as $R_1 = \{(a, p): 0.7, (a, q): 0.4, (b, p): 0.9, (b, q): 0.2\}$.
Let $R_2$ be a fuzzy relation on $\{1, 2\} \times \{x, y\}$ defined as $R_2 = \{(1, x): 0.5, (1, y): 0.8, (2, x): 0.3, (2, y): 0.6\}$.

Compute the Cartesian product $R_1 \times R_2$ using the algebraic product t-norm. The resulting relation will be on $(\{a, b\} \times \{p, q\}) \times (\{1, 2\} \times \{x, y\})$.

**Answer 2:**
The Cartesian product involves pairs of pairs. For example, $((a, p), (1, x))$.
$\mu_{R_1 \times R_2}(((a, p), (1, x))) = \mu_{R_1}(a, p) \cdot \mu_{R_2}(1, x) = 0.7 \cdot 0.5 = 0.35$
$\mu_{R_1 \times R_2}(((a, p), (1, y))) = \mu_{R_1}(a, p) \cdot \mu_{R_2}(1, y) = 0.7 \cdot 0.8 = 0.56$
$\mu_{R_1 \times R_2}(((a, p), (2, x))) = \mu_{R_1}(a, p) \cdot \mu_{R_2}(2, x) = 0.7 \cdot 0.3 = 0.21$
$\mu_{R_1 \times R_2}(((a, p), (2, y))) = \mu_{R_1}(a, p) \cdot \mu_{R_2}(2, y) = 0.7 \cdot 0.6 = 0.42$

$\mu_{R_1 \times R_2}(((a, q), (1, x))) = \mu_{R_1}(a, q) \cdot \mu_{R_2}(1, x) = 0.4 \cdot 0.5 = 0.20$
$\mu_{R_1 \times R_2}(((a, q), (1, y))) = \mu_{R_1}(a, q) \cdot \mu_{R_2}(1, y) = 0.4 \cdot 0.8 = 0.32$
$\mu_{R_1 \times R_2}(((a, q), (2, x))) = \mu_{R_1}(a, q) \cdot \mu_{R_2}(2, x) = 0.4 \cdot 0.3 = 0.12$
$\mu_{R_1 \times R_2}(((a, q), (2, y))) = \mu_{R_1}(a, q) \cdot \mu_{R_2}(2, y) = 0.4 \cdot 0.6 = 0.24$

$\mu_{R_1 \times R_2}(((b, p), (1, x))) = \mu_{R_1}(b, p) \cdot \mu_{R_2}(1, x) = 0.9 \cdot 0.5 = 0.45$
$\mu_{R_1 \times R_2}(((b, p), (1, y))) = \mu_{R_1}(b, p) \cdot \mu_{R_2}(1, y) = 0.9 \cdot 0.8 = 0.72$
$\mu_{R_1 \times R_2}(((b, p), (2, x))) = \mu_{R_1}(b, p) \cdot \mu_{R_2}(2, x) = 0.9 \cdot 0.3 = 0.27$
$\mu_{R_1 \times R_2}(((b, p), (2, y))) = \mu_{R_1}(b, p) \cdot \mu_{R_2}(2, y) = 0.9 \cdot 0.6 = 0.54$

$\mu_{R_1 \times R_2}(((b, q), (1, x))) = \mu_{R_1}(b, q) \cdot \mu_{R_2}(1, x) = 0.2 \cdot 0.5 = 0.10$
$\mu_{R_1 \times R_2}(((b, q), (1, y))) = \mu_{R_1}(b, q) \cdot \mu_{R_2}(1, y) = 0.2 \cdot 0.8 = 0.16$
$\mu_{R_1 \times R_2}(((b, q), (2, x))) = \mu_{R_1}(b, q) \cdot \mu_{R_2}(2, x) = 0.2 \cdot 0.3 = 0.06$
$\mu_{R_1 \times R_2}(((b, q), (2, y))) = \mu_{R_1}(b, q) \cdot \mu_{R_2}(2, y) = 0.2 \cdot 0.6 = 0.12$

---

**Question 3:**
Let $R_1$ and $R_2$ be fuzzy relations. Which of the following properties are generally true for fuzzy relations and their operations (assuming standard min/max operations)?
a) $(R_1 \cup R_2)^c = R_1^c \cap R_2^c$
b) $R_1 \cap R_1^c = R_1$
c) $(R_1 \cap R_2)^c = R_1^c \cup R_2^c$
d) $R_1 \times (R_2 \cup R_3) = (R_1 \times R_2) \cup (R_1 \times R_3)$

**Answer 3:**
a) True (De Morgan's Law for fuzzy sets)
b) False (Should be $R_1 \cap R_1^c = \emptyset$, the empty relation)
c) True (De Morgan's Law for fuzzy sets)
d) True (Distributivity of Cartesian Product over Union)

---

## 6. Important Points to Remember

*   **Choice of T-norm/T-conorm:** The specific choice of t-norm (for intersection) and t-conorm (for union) can significantly impact the resulting fuzzy relation. The minimum and maximum are the most common, but others exist and are used in specific applications.
*   **Membership Degrees:** Operations on fuzzy relations are performed element-wise on their membership degrees.
*   **Cartesian Product Universes:** Be mindful of the product spaces on which the resulting relations are defined, especially when dealing with Cartesian products.
*   **Generalization of Crisp Operations:** Fuzzy relation operations are direct generalizations of their crisp counterparts, maintaining many of the fundamental properties.
*   **De Morgan's Laws:** These are crucial for understanding the relationship between union, intersection, and complement in the fuzzy context.

---
This concludes Module 2 on Operations on Fuzzy Relations. Understanding these operations is fundamental to subsequent topics in Fuzzy Systems, such as fuzzy composition.
