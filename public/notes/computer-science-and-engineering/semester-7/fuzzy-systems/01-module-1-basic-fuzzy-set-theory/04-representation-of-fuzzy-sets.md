---
title: "Representation of Fuzzy sets."
subject: "FUZZY SYSTEMS"
module: "Module 1: Basic Fuzzy Set Theory :"
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c4b4"
status: "completed"
scrapedAt: "2026-05-20T17:06:09.583Z"
---
# Fuzzy Systems: Module 1 - Basic Fuzzy Set Theory
## Topic: Representation of Fuzzy Sets

### Learning Outcomes:

Upon completion of this topic, you will be able to:

*   Understand the limitations of classical (crisp) sets and the need for fuzzy sets.
*   Define a fuzzy set and its membership function.
*   Represent fuzzy sets using various methods.
*   Understand and apply the concepts of the universe of discourse and support of a fuzzy set.
*   Distinguish between different types of fuzzy sets based on their representation.

---

### 1. Introduction: Why Fuzzy Sets?

Classical set theory (also known as crisp set theory) deals with elements that either *belong* to a set or *do not belong* to a set. This is a binary concept (0 or 1). However, many real-world phenomena and human reasoning involve vagueness, imprecision, and partial membership.

**Example:**
*   **Crisp Set:** "Numbers greater than 5" in the universe of discourse {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}. The number 6 belongs (membership 1), and the number 5 does not (membership 0).
*   **Fuzzy Concept:** "Tall people." What is the exact height that defines a "tall person"? Is someone 1.80m tall exactly "tall" and someone 1.79m tall not "tall"? This is a difficult distinction to make with crisp sets. Fuzzy sets allow for degrees of membership.

---

### 2. Definition of a Fuzzy Set

A **fuzzy set** $A$ in a universe of discourse $X$ is characterized by a **membership function** $\mu_A(x)$, which assigns a real number between 0 and 1 to each element $x$ in $X$.

*   $\mu_A(x)$: Represents the **degree of membership** of element $x$ in fuzzy set $A$.
*   $\mu_A(x) = 1$: $x$ fully belongs to fuzzy set $A$.
*   $\mu_A(x) = 0$: $x$ does not belong to fuzzy set $A$.
*   $0 < \mu_A(x) < 1$: $x$ partially belongs to fuzzy set $A$.

**Mathematical Definition:**
A fuzzy set $A$ on a universe of discourse $X$ is a set of pairs $(x, \mu_A(x))$ where $x \in X$ and $\mu_A(x) \in [0, 1]$.
$$ A = \{ (x, \mu_A(x)) \mid x \in X \} $$

---

### 3. Universe of Discourse (U)

The **universe of discourse** (or simply universe) $X$ is the collection of all possible elements relevant to a particular problem. It's the domain over which the fuzzy set is defined.

**Example:**
*   For the fuzzy set "temperature," the universe of discourse could be the range of possible temperatures, e.g., $X = [0^\circ C, 50^\circ C]$.
*   For the fuzzy set "age," the universe of discourse could be $X = [0, 100]$ years.

---

### 4. Support of a Fuzzy Set

The **support** of a fuzzy set $A$ is the set of all elements $x$ in the universe of discourse $X$ for which the membership degree is **non-zero**.

$$ \text{support}(A) = \{ x \in X \mid \mu_A(x) > 0 \} $$

**Example:**
Let $X = \{1, 2, 3, 4, 5, 6, 7\}$ and a fuzzy set $A$ be defined by:
$A = \{ (1, 0.2), (2, 0.5), (3, 0.8), (4, 1.0), (5, 0.7), (6, 0.3), (7, 0) \}$

The support of $A$ is:
$$ \text{support}(A) = \{1, 2, 3, 4, 5, 6\} $$
Note that element 7 is not included because its membership degree is 0.

---

### 5. Representations of Fuzzy Sets

Fuzzy sets can be represented in several ways, depending on the context and the nature of the universe of discourse.

#### 5.1. Tabular Representation

This is the most basic way to represent a fuzzy set, especially for discrete universes of discourse. It lists each element and its corresponding membership degree.

**Example:**
Universe of Discourse $X = \{ \text{very low}, \text{low}, \text{medium}, \text{high}, \text{very high} \}$
Fuzzy Set: "Comfortable Temperature" (let's call it $CT$)

$CT = \{ (\text{very low}, 0.1), (\text{low}, 0.4), (\text{medium}, 0.9), (\text{high}, 0.3), (\text{very high}, 0.0) \}$

#### 5.2. Set of Pairs Representation

This is essentially the mathematical definition.

**Example:**
Universe of Discourse $X = \{1, 2, 3, 4, 5\}$
Fuzzy Set: $B$

$B = \{ (1, 0.2), (2, 0.7), (3, 1.0), (4, 0.5), (5, 0.1) \}$

#### 5.3. Graphical Representation (Membership Functions)

This is a very intuitive way to visualize fuzzy sets, especially for continuous universes of discourse. The membership function $\mu_A(x)$ is plotted against the elements $x$ in the universe of discourse.

Common shapes for membership functions include:
*   **Triangular:** Defined by three parameters (left base, peak, right base).
*   **Trapezoidal:** Defined by four parameters (left base, left shoulder, right shoulder, right base).
*   **Gaussian:** Defined by a center and a standard deviation.
*   **Singleton:** A single point with membership 1, all others 0.

**Example (Continuous Universe):**
Universe of Discourse $X = [0, 10]$ (e.g., speed of a vehicle)
Fuzzy Set: "Slow Speed" ($SS$)

A possible membership function for "Slow Speed" could be a triangular function:
$\mu_{SS}(x) = \begin{cases} 0 & \text{if } x < 0 \\ x/2 & \text{if } 0 \le x \le 2 \\ (4-x)/2 & \text{if } 2 < x \le 4 \\ 0 & \text{if } x > 4 \end{cases}$

This can be visualized as a triangle with a base from 0 to 4 and a peak at $x=2$ with $\mu_{SS}(2)=1$.

**Graphically:**
```
Membership Degree
        ^
        |
      1 +-------*-------+
        |     /   \     |
        |    /     \    |
      0.5 +--/-------\--+
        | /         \   |
        |/           \  |
      0 +-------------+---+------> Speed (x)
        0     1     2     3     4
```

#### 5.4. Algebraic Representation (Linguistic Variables and Terms)

Fuzzy sets are often used to represent linguistic terms associated with linguistic variables.

*   **Linguistic Variable:** A variable whose values are words or sentences in a natural or artificial language (e.g., "temperature," "speed," "age").
*   **Linguistic Term:** A particular value of a linguistic variable (e.g., "cold," "warm," "hot" for the variable "temperature").

Each linguistic term is represented by a fuzzy set with a specific membership function.

**Example:**
Linguistic Variable: "Age"
Linguistic Terms: "Young," "Middle-aged," "Old"

*   **Young:** Represented by a fuzzy set with a membership function that is high for low ages and decreases as age increases.
*   **Middle-aged:** Represented by a fuzzy set with a membership function that is high for middle ages and decreases towards younger and older ages.
*   **Old:** Represented by a fuzzy set with a membership function that is high for older ages and decreases as age decreases.

The specific shape of these membership functions (e.g., triangular, trapezoidal) is chosen based on expert knowledge or data.

#### 5.5. Alpha-Cut (or $\alpha$-Level Set)

An $\alpha$-cut of a fuzzy set $A$ is a crisp set containing all elements $x$ whose membership degree in $A$ is greater than or equal to $\alpha$.

$$ A_\alpha = \{ x \in X \mid \mu_A(x) \ge \alpha \} $$

Where $\alpha \in [0, 1]$.

**Example:**
Using the fuzzy set $A$ from section 5.2:
$A = \{ (1, 0.2), (2, 0.7), (3, 1.0), (4, 0.5), (5, 0.1) \}$

Let's find the $\alpha$-cuts for different values of $\alpha$:

*   $A_{0.1} = \{ x \in X \mid \mu_A(x) \ge 0.1 \} = \{1, 2, 3, 4, 5\}$
*   $A_{0.5} = \{ x \in X \mid \mu_A(x) \ge 0.5 \} = \{2, 3, 4\}$
*   $A_{0.8} = \{ x \in X \mid \mu_A(x) \ge 0.8 \} = \{3\}$
*   $A_{1.0} = \{ x \in X \mid \mu_A(x) \ge 1.0 \} = \{3\}$
*   $A_{1.1} = \{ x \in X \mid \mu_A(x) \ge 1.1 \} = \emptyset$ (empty set)

**Usefulness of $\alpha$-cuts:** $\alpha$-cuts are important because they allow us to convert fuzzy set operations into crisp set operations, which are computationally easier. A fuzzy set can be completely defined by its $\alpha$-cuts (this is related to the decomposition theorem of fuzzy sets).

---

### 6. Types of Fuzzy Sets Based on Representation

While the core idea is the membership function, how that function is defined leads to different ways of thinking about fuzzy sets.

*   **Discrete Fuzzy Sets:** Defined over a discrete universe of discourse. Represented by lists or tables of elements and their membership degrees.
*   **Continuous Fuzzy Sets:** Defined over a continuous universe of discourse. Typically represented by graphical membership functions or algebraic expressions for these functions.
*   **Singleton Fuzzy Sets:** A special case where the membership function is 1 for a single element $x_0$ and 0 for all other elements. $\mu_A(x_0) = 1$, $\mu_A(x) = 0$ for $x \neq x_0$. These are rarely used in practice for representing vague concepts but appear in some fuzzy logic operations.
*   **Normal Fuzzy Sets:** A fuzzy set $A$ is called **normal** if its membership function has a maximum value of 1.
    $$ \exists x_0 \in X \text{ such that } \mu_A(x_0) = 1 $$
    Most fuzzy sets used to represent linguistic terms are normal.
*   **Convex Fuzzy Sets:** A fuzzy set $A$ is called **convex** if the line segment connecting any two points in its $\alpha$-cut $A_\alpha$ is fully contained within $A_\alpha$ for all $\alpha \in [0, 1]$. Graphically, this means the "peak" of the membership function is not flanked by regions of lower membership that would create "dips." Triangular, trapezoidal, and Gaussian shapes are convex.

---

### 7. Key Points to Remember

*   Fuzzy sets handle **vagueness and imprecision** through degrees of membership.
*   The **membership function ($\mu_A(x)$)** is the core of a fuzzy set, mapping elements to membership values in $[0, 1]$.
*   The **universe of discourse ($X$)** defines the domain of possible elements.
*   The **support** includes elements with non-zero membership.
*   **Representations** include tabular, set of pairs, graphical (membership functions), and algebraic (linguistic variables).
*   **$\alpha$-cuts** are crisp sets derived from fuzzy sets and are crucial for fuzzy set operations.
*   **Normal fuzzy sets** have at least one element with full membership (degree 1).
*   **Convex fuzzy sets** have a "smooth" or "hill-like" membership function profile.

---

### Practice Questions

1.  **Define a fuzzy set and its membership function.**
2.  **What is the universe of discourse, and why is it important in fuzzy set theory?**
3.  **Given a discrete universe $X = \{10, 20, 30, 40, 50\}$ and a fuzzy set $F$ defined as:**
    $F = \{ (10, 0.1), (20, 0.4), (30, 0.9), (40, 0.6), (50, 0.0) \}$
    *   a) What is the support of fuzzy set $F$?
    *   b) Find the $\alpha$-cuts $F_{0.4}$ and $F_{0.9}$.
4.  **Describe two different ways to represent a fuzzy set graphically.**
5.  **Explain the difference between a crisp set and a fuzzy set with an example.**
6.  **What is a linguistic variable and a linguistic term in the context of fuzzy sets?**
7.  **Is the following fuzzy set normal? Explain why or why not.**
    $G = \{ (a, 0.3), (b, 0.7), (c, 1.0), (d, 0.5) \}$
8.  **Consider a fuzzy set representing "low speed" with a triangular membership function on the universe of discourse $X = [0, 60]$ (km/h), with parameters (0, 20, 40). Sketch this membership function and describe its shape.**

---

### Answers to Practice Questions

1.  **Definition of a fuzzy set and its membership function:**
    A fuzzy set $A$ in a universe of discourse $X$ is a collection of elements $x$ from $X$, each associated with a **degree of membership** $\mu_A(x) \in [0, 1]$. The membership function $\mu_A(x)$ quantifies this degree. Mathematically, $A = \{ (x, \mu_A(x)) \mid x \in X \}$.
2.  **Universe of Discourse:**
    The universe of discourse ($X$) is the set of all possible elements relevant to a specific problem. It's important because it defines the domain over which the fuzzy set and its membership function are defined. Without it, the membership degrees are contextless.
3.  **Given fuzzy set $F$:**
    $X = \{10, 20, 30, 40, 50\}$
    $F = \{ (10, 0.1), (20, 0.4), (30, 0.9), (40, 0.6), (50, 0.0) \}$
    *   a) **Support of $F$**: The support of $F$ is the set of elements with non-zero membership.
        $$ \text{support}(F) = \{10, 20, 30, 40\} $$
    *   b) **$\alpha$-cuts**:
        *   $F_{0.4} = \{ x \in X \mid \mu_F(x) \ge 0.4 \} = \{20, 30, 40\}$
        *   $F_{0.9} = \{ x \in X \mid \mu_F(x) \ge 0.9 \} = \{30\}$
4.  **Graphical Representations:**
    *   **Membership Function Plot:** Plotting the membership degree ($\mu_A(x)$) on the y-axis against the elements ($x$) on the x-axis. Common shapes are triangular, trapezoidal, Gaussian, etc.
    *   **Set of Points:** For discrete sets, a scatter plot of $(x, \mu_A(x))$ pairs can be considered a graphical representation.
5.  **Crisp Set vs. Fuzzy Set:**
    *   **Crisp Set:** Elements either belong fully (membership 1) or not at all (membership 0). Example: "Even numbers" in $\{1, 2, 3, 4, 5\}$. The set is $\{2, 4\}$. 2 has membership 1, 3 has membership 0.
    *   **Fuzzy Set:** Elements can have partial membership (degree between 0 and 1). Example: "Medium height" for people. Someone 1.70m might have $\mu_{MediumHeight}(1.70) = 0.8$.
6.  **Linguistic Variable and Term:**
    *   **Linguistic Variable:** A variable whose values are natural language words or phrases (e.g., "speed").
    *   **Linguistic Term:** A specific value of a linguistic variable, represented by a fuzzy set (e.g., "slow," "medium," "fast" for "speed").
7.  **Normality of Fuzzy Set $G$:**
    $G = \{ (a, 0.3), (b, 0.7), (c, 1.0), (d, 0.5) \}$
    Yes, fuzzy set $G$ is **normal** because there is an element ($c$) with a membership degree of 1.0.
8.  **Triangular Membership Function for "Low Speed":**
    Universe $X = [0, 60]$ km/h.
    Triangular membership function with parameters (0, 20, 40).
    *   Left base: 0
    *   Peak: 20 (membership degree is 1)
    *   Right base: 40 (membership degree is 0)

    **Sketch:**
    ```
    Membership Degree
            ^
            |
          1 +       /\
            |      /  \
            |     /    \
          0.5 +----+----+
            |   /      \
            |  /        \
          0 +---------------------> Speed (km/h)
            0   10  20  30  40  50  60
    ```
    The function starts at 0 membership at 0 km/h, linearly increases to full membership (1) at 20 km/h, then linearly decreases back to 0 membership at 40 km/h. Speeds above 40 km/h have 0 membership in "low speed."
