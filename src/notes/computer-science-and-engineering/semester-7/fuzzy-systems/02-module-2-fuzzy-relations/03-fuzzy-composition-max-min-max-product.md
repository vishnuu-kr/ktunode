---
title: "Fuzzy composition- Max- min , Max – product."
subject: "FUZZY SYSTEMS"
module: "Module 2: Fuzzy Relations :"
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c4bc"
status: "completed"
scrapedAt: "2026-05-20T17:06:14.482Z"
---
# Fuzzy Systems: Module 2 - Fuzzy Relations

## Topic: Fuzzy Composition - Max-Min and Max-Product

### Learning Outcomes:

*   Understand the concept of fuzzy composition.
*   Learn and apply the Max-Min composition rule.
*   Learn and apply the Max-Product composition rule.
*   Distinguish between Max-Min and Max-Product compositions.
*   Understand the application of fuzzy composition in decision-making and inference.

---

### 1. Introduction to Fuzzy Composition

Fuzzy composition is a fundamental operation in fuzzy systems that allows us to combine fuzzy relations. It's analogous to the composition of relations in classical set theory, but adapted for the fuzzy domain. Essentially, it helps us to infer new fuzzy relationships or to propagate fuzzy information from one relation to another.

**Key Idea:** If we have a fuzzy set (or relation) $A$ and a fuzzy relation $R$ from $A$ to $B$, and another fuzzy relation $S$ from $B$ to $C$, fuzzy composition allows us to derive a fuzzy relation from $A$ to $C$.

**Analogy to Classical Relations:**
In classical set theory, if we have relations $R \subseteq X \times Y$ and $S \subseteq Y \times Z$, the composition $S \circ R$ is defined as:
$S \circ R = \{(x, z) \in X \times Z \mid \exists y \in Y \text{ such that } (x, y) \in R \text{ and } (y, z) \in S\}$

Fuzzy composition extends this by replacing the existential quantifier ($\exists$) and conjunction (AND) with fuzzy equivalents.

---

### 2. Fuzzy Composition - Max-Min Rule

The **Max-Min composition** is a widely used method for composing fuzzy relations. It leverages the **min** (t-norm) operator for conjunction and the **max** (s-norm) operator for disjunction.

**Definition:**
Given two fuzzy relations $R$ from set $X$ to set $Y$, and $S$ from set $Y$ to set $Z$, their Max-Min composition, denoted by $S \circ R$ (or $R \cdot S$), is a fuzzy relation from $X$ to $Z$ defined as:

$$ (S \circ R)(x, z) = \max_{y \in Y} \{\min(R(x, y), S(y, z))\} $$

where:
*   $R(x, y)$ is the membership degree of the pair $(x, y)$ in the fuzzy relation $R$.
*   $S(y, z)$ is the membership degree of the pair $(y, z)$ in the fuzzy relation $S$.
*   $\min(a, b)$ is the t-norm used to represent the fuzzy "AND" operation.
*   $\max_{y \in Y}\{\cdot\}$ is the s-norm used to represent the fuzzy "OR" operation across all intermediate elements $y \in Y$.

**Breakdown of the Formula:**

1.  **$\min(R(x, y), S(y, z))$:** For a fixed pair $(x, z)$, this part calculates the membership degree of the "path" from $x$ to $z$ *through* a specific intermediate element $y$. It captures the strength of the connection $x \to y \to z$ using the minimum membership value along this path.
2.  **$\max_{y \in Y}\{\cdot\}$:** This part then aggregates the membership degrees of all possible paths from $x$ to $z$ (i.e., for all $y \in Y$). It takes the maximum, meaning that if there's at least one strong path connecting $x$ to $z$, the resulting membership degree will be high.

**Example:**

Let $X = \{a, b\}$, $Y = \{p, q\}$, $Z = \{1, 2\}$.

Fuzzy Relation $R$ from $X$ to $Y$:
$R = \begin{pmatrix} 0.8 & 0.3 \\ 0.1 & 0.9 \end{pmatrix}$  (Row 1 for 'a', Row 2 for 'b'; Column 1 for 'p', Column 2 for 'q')
So, $R(a, p) = 0.8$, $R(a, q) = 0.3$, $R(b, p) = 0.1$, $R(b, q) = 0.9$.

Fuzzy Relation $S$ from $Y$ to $Z$:
$S = \begin{pmatrix} 0.7 & 0.2 \\ 0.5 & 0.6 \end{pmatrix}$ (Row 1 for 'p', Row 2 for 'q'; Column 1 for '1', Column 2 for '2')
So, $S(p, 1) = 0.7$, $S(p, 2) = 0.2$, $S(q, 1) = 0.5$, $S(q, 2) = 0.6$.

Now, let's compute $S \circ R$ (Max-Min composition) from $X$ to $Z$. We need to find the membership degrees for pairs $(x, z)$:

*   **$(a, 1)$:**
    $(S \circ R)(a, 1) = \max\{\min(R(a, p), S(p, 1)), \min(R(a, q), S(q, 1))\}$
    $(S \circ R)(a, 1) = \max\{\min(0.8, 0.7), \min(0.3, 0.5)\}$
    $(S \circ R)(a, 1) = \max\{0.7, 0.3\} = 0.7$

*   **$(a, 2)$:**
    $(S \circ R)(a, 2) = \max\{\min(R(a, p), S(p, 2)), \min(R(a, q), S(q, 2))\}$
    $(S \circ R)(a, 2) = \max\{\min(0.8, 0.2), \min(0.3, 0.6)\}$
    $(S \circ R)(a, 2) = \max\{0.2, 0.3\} = 0.3$

*   **$(b, 1)$:**
    $(S \circ R)(b, 1) = \max\{\min(R(b, p), S(p, 1)), \min(R(b, q), S(q, 1))\}$
    $(S \circ R)(b, 1) = \max\{\min(0.1, 0.7), \min(0.9, 0.5)\}$
    $(S \circ R)(b, 1) = \max\{0.1, 0.5\} = 0.5$

*   **$(b, 2)$:**
    $(S \circ R)(b, 2) = \max\{\min(R(b, p), S(p, 2)), \min(R(b, q), S(q, 2))\}$
    $(S \circ R)(b, 2) = \max\{\min(0.1, 0.2), \min(0.9, 0.6)\}$
    $(S \circ R)(b, 2) = \max\{0.1, 0.6\} = 0.6$

So, the Max-Min composition $S \circ R$ is:
$S \circ R = \begin{pmatrix} 0.7 & 0.3 \\ 0.5 & 0.6 \end{pmatrix}$

---

### 3. Fuzzy Composition - Max-Product Rule

The **Max-Product composition** (also known as Max-Average or other variations depending on the choice of t-norm and s-norm) uses the **product** t-norm for conjunction and the **max** s-norm for disjunction.

**Definition:**
Given two fuzzy relations $R$ from set $X$ to set $Y$, and $S$ from set $Y$ to set $Z$, their Max-Product composition, denoted by $S \odot R$, is a fuzzy relation from $X$ to $Z$ defined as:

$$ (S \odot R)(x, z) = \max_{y \in Y} \{R(x, y) \times S(y, z)\} $$

where:
*   $R(x, y)$ is the membership degree of the pair $(x, y)$ in the fuzzy relation $R$.
*   $S(y, z)$ is the membership degree of the pair $(y, z)$ in the fuzzy relation $S$.
*   $a \times b$ is the product t-norm used to represent the fuzzy "AND" operation.
*   $\max_{y \in Y}\{\cdot\}$ is the s-norm used to represent the fuzzy "OR" operation across all intermediate elements $y \in Y$.

**Breakdown of the Formula:**

1.  **$R(x, y) \times S(y, z)$:** For a fixed pair $(x, z)$, this part calculates the membership degree of the "path" from $x$ to $z$ *through* a specific intermediate element $y$ using multiplication.
2.  **$\max_{y \in Y}\{\cdot\}$:** Similar to Max-Min, this aggregates the membership degrees of all possible paths from $x$ to $z$ by taking the maximum.

**Example (using the same relations as before):**

Let $X = \{a, b\}$, $Y = \{p, q\}$, $Z = \{1, 2\}$.

Fuzzy Relation $R$ from $X$ to $Y$:
$R = \begin{pmatrix} 0.8 & 0.3 \\ 0.1 & 0.9 \end{pmatrix}$

Fuzzy Relation $S$ from $Y$ to $Z$:
$S = \begin{pmatrix} 0.7 & 0.2 \\ 0.5 & 0.6 \end{pmatrix}$

Now, let's compute $S \odot R$ (Max-Product composition) from $X$ to $Z$:

*   **$(a, 1)$:**
    $(S \odot R)(a, 1) = \max\{R(a, p) \times S(p, 1), R(a, q) \times S(q, 1)\}$
    $(S \odot R)(a, 1) = \max\{0.8 \times 0.7, 0.3 \times 0.5\}$
    $(S \odot R)(a, 1) = \max\{0.56, 0.15\} = 0.56$

*   **$(a, 2)$:**
    $(S \odot R)(a, 2) = \max\{R(a, p) \times S(p, 2), R(a, q) \times S(q, 2)\}$
    $(S \odot R)(a, 2) = \max\{0.8 \times 0.2, 0.3 \times 0.6\}$
    $(S \odot R)(a, 2) = \max\{0.16, 0.18\} = 0.18$

*   **$(b, 1)$:**
    $(S \odot R)(b, 1) = \max\{R(b, p) \times S(p, 1), R(b, q) \times S(q, 1)\}$
    $(S \odot R)(b, 1) = \max\{0.1 \times 0.7, 0.9 \times 0.5\}$
    $(S \odot R)(b, 1) = \max\{0.07, 0.45\} = 0.45$

*   **$(b, 2)$:**
    $(S \odot R)(b, 2) = \max\{R(b, p) \times S(p, 2), R(b, q) \times S(q, 2)\}$
    $(S \odot R)(b, 2) = \max\{0.1 \times 0.2, 0.9 \times 0.6\}$
    $(S \odot R)(b, 2) = \max\{0.02, 0.54\} = 0.54$

So, the Max-Product composition $S \odot R$ is:
$S \odot R = \begin{pmatrix} 0.56 & 0.18 \\ 0.45 & 0.54 \end{pmatrix}$

---

### 4. Comparison of Max-Min and Max-Product Composition

| Feature        | Max-Min Composition                          | Max-Product Composition                       |
| :------------- | :------------------------------------------- | :-------------------------------------------- |
| **T-Norm**     | Minimum (t-norm)                             | Product (t-norm)                              |
| **S-Norm**     | Maximum (s-norm)                             | Maximum (s-norm)                              |
| **Calculation**| $\max_{y} \{\min(R(x, y), S(y, z))\}$        | $\max_{y} \{R(x, y) \times S(y, z)\}$          |
| **Interpretation** | The strength of a path is limited by its weakest link. The overall strength is the strongest path. | The strength of a path is the product of its links. The overall strength is the strongest path. |
| **Output Range** | $[0, 1]$                                     | $[0, 1]$                                      |
| **Sensitivity**| Less sensitive to small values. If any link is very weak (close to 0), $\min$ will result in 0. | More sensitive to small values. The product of two small values can become very small. |
| **Behavior**   | Tends to produce higher membership degrees overall compared to Max-Product for the same input relations. | Tends to produce lower membership degrees overall compared to Max-Min. |

**Intuitive Difference:**

*   **Max-Min:** Think of it as a series of switches. If any switch in a series is off (membership 0), the whole path is off. You want the strongest *overall* path.
*   **Max-Product:** Think of it as a continuous flow. The amount of flow through a path is the product of the capacities of its links. You want the path with the highest flow.

**Example of the difference:**
Let $R(x, y) = 0.1$ and $S(y, z) = 0.1$.
*   Max-Min: $\min(0.1, 0.1) = 0.1$
*   Max-Product: $0.1 \times 0.1 = 0.01$

The Max-Min composition is more forgiving of weak links than the Max-Product composition.

---

### 5. Applications of Fuzzy Composition

Fuzzy composition is crucial for inferring fuzzy relationships and making decisions in fuzzy logic systems.

*   **Fuzzy Inference Systems (FIS):** Composition is used to combine fuzzy rules. If we have rules like:
    *   IF $X$ is $A$ AND $Y$ is $B$, THEN $Z$ is $C$.
    *   IF $X$ is $A$ AND $Y$ is $B$, THEN $Z$ is $D$.
    When the premise ($X$ is $A$ AND $Y$ is $B$) is evaluated for a given input, the resulting fuzzy set for the consequent ($Z$ is $C$ or $Z$ is $D$) is determined using composition. The final output for $Z$ is then typically a combination of these derived fuzzy sets.

*   **Reasoning and Decision Making:** If we have a fuzzy preference relation $R$ (e.g., person $i$ prefers option $x$ over option $y$) and a fuzzy relation $S$ representing a transitive closure or another aspect of preference, composing them can reveal overall preference rankings or facilitate multi-criteria decision making.

*   **Control Systems:** In fuzzy controllers, compositional operators are used to aggregate the results from different fuzzy rules that are activated by the input fuzzy sets. This aggregation step, which often involves composition, determines the final fuzzy output that is then defuzzified.

**Example Application: Inferring a Fuzzy Relation**

Suppose we have the following fuzzy information:

*   **Fuzzy Set $A$** (e.g., "temperature is hot"): $\mu_A = \{ \text{value}_1: 0.7, \text{value}_2: 0.3 \}$
*   **Fuzzy Relation $R$** (e.g., "if temperature is hot, then comfort is high"):
    $R = \begin{pmatrix} \text{high} & \text{medium} \\ 0.9 & 0.2 \end{pmatrix}$ (Here, the first row corresponds to the 'hot' antecedent of $A$, and columns represent fuzzy consequents for comfort).

We want to infer the degree of "comfort is high" given that the temperature is "hot". This can be done by composing the fuzzy set $A$ with the fuzzy relation $R$.

Let's treat $A$ as a fuzzy row vector: $A = \begin{pmatrix} 0.7 & 0.3 \end{pmatrix}$ (where columns correspond to the antecedents of $R$).

Using Max-Min composition ($A \circ R$):
$(A \circ R)_{\text{high}} = \max\{\min(A(\text{value}_1), R(\text{value}_1, \text{high})), \min(A(\text{value}_2), R(\text{value}_2, \text{high}))\}$
$(A \circ R)_{\text{high}} = \max\{\min(0.7, 0.9), \min(0.3, 0.2)\}$
$(A \circ R)_{\text{high}} = \max\{0.7, 0.2\} = 0.7$

Using Max-Product composition ($A \odot R$):
$(A \odot R)_{\text{high}} = \max\{A(\text{value}_1) \times R(\text{value}_1, \text{high}), A(\text{value}_2) \times R(\text{value}_2, \text{high})\}$
$(A \odot R)_{\text{high}} = \max\{0.7 \times 0.9, 0.3 \times 0.2\}$
$(A \odot R)_{\text{high}} = \max\{0.63, 0.06\} = 0.63$

This shows how the initial fuzzy input ($A$) is propagated through the fuzzy relation ($R$) to produce a fuzzy output (degree of comfort).

---

### 6. Important Points to Remember

*   **Fuzzy Composition** is the process of combining fuzzy relations to derive new fuzzy relations.
*   **Max-Min Composition** uses the $\min$ operator for conjunction (AND) and $\max$ for disjunction (OR). It's defined as $(S \circ R)(x, z) = \max_{y \in Y} \{\min(R(x, y), S(y, z))\}$.
*   **Max-Product Composition** uses the product operator for conjunction (AND) and $\max$ for disjunction (OR). It's defined as $(S \odot R)(x, z) = \max_{y \in Y} \{R(x, y) \times S(y, z)\}$.
*   The choice between Max-Min and Max-Product (or other t-norm/s-norm combinations) depends on the desired behavior and the nature of the problem being modeled.
*   Max-Min is generally more robust to very low membership values in individual links.
*   Max-Product is more sensitive to low membership values due to the multiplication.
*   Composition is a core mechanism for fuzzy inference and decision-making.

---

### Practice Questions and Exercises

**Question 1:**
Given the following fuzzy relations $R$ (from $X=\{x_1, x_2\}$ to $Y=\{y_1, y_2\}$) and $S$ (from $Y=\{y_1, y_2\}$ to $Z=\{z_1, z_2\}$):

$R = \begin{pmatrix} 0.6 & 0.8 \\ 0.3 & 0.5 \end{pmatrix}$
$S = \begin{pmatrix} 0.7 & 0.2 \\ 0.4 & 0.9 \end{pmatrix}$

Calculate the Max-Min composition $S \circ R$.

**Answer 1:**
We need to calculate the membership degrees for all pairs $(x_i, z_j)$:

*   $(x_1, z_1): \max\{\min(R(x_1, y_1), S(y_1, z_1)), \min(R(x_1, y_2), S(y_2, z_1))\}$
    $= \max\{\min(0.6, 0.7), \min(0.8, 0.4)\}$
    $= \max\{0.6, 0.4\} = 0.6$

*   $(x_1, z_2): \max\{\min(R(x_1, y_1), S(y_1, z_2)), \min(R(x_1, y_2), S(y_2, z_2))\}$
    $= \max\{\min(0.6, 0.2), \min(0.8, 0.9)\}$
    $= \max\{0.2, 0.8\} = 0.8$

*   $(x_2, z_1): \max\{\min(R(x_2, y_1), S(y_1, z_1)), \min(R(x_2, y_2), S(y_2, z_1))\}$
    $= \max\{\min(0.3, 0.7), \min(0.5, 0.4)\}$
    $= \max\{0.3, 0.4\} = 0.4$

*   $(x_2, z_2): \max\{\min(R(x_2, y_1), S(y_1, z_2)), \min(R(x_2, y_2), S(y_2, z_2))\}$
    $= \max\{\min(0.3, 0.2), \min(0.5, 0.9)\}$
    $= \max\{0.2, 0.5\} = 0.5$

So, $S \circ R = \begin{pmatrix} 0.6 & 0.8 \\ 0.4 & 0.5 \end{pmatrix}$

---

**Question 2:**
Using the same fuzzy relations $R$ and $S$ from Question 1, calculate the Max-Product composition $S \odot R$.

**Answer 2:**
We need to calculate the membership degrees for all pairs $(x_i, z_j)$:

*   $(x_1, z_1): \max\{R(x_1, y_1) \times S(y_1, z_1), R(x_1, y_2) \times S(y_2, z_1)\}$
    $= \max\{0.6 \times 0.7, 0.8 \times 0.4\}$
    $= \max\{0.42, 0.32\} = 0.42$

*   $(x_1, z_2): \max\{R(x_1, y_1) \times S(y_1, z_2), R(x_1, y_2) \times S(y_2, z_2)\}$
    $= \max\{0.6 \times 0.2, 0.8 \times 0.9\}$
    $= \max\{0.12, 0.72\} = 0.72$

*   $(x_2, z_1): \max\{R(x_2, y_1) \times S(y_1, z_1), R(x_2, y_2) \times S(y_2, z_1)\}$
    $= \max\{0.3 \times 0.7, 0.5 \times 0.4\}$
    $= \max\{0.21, 0.20\} = 0.21$

*   $(x_2, z_2): \max\{R(x_2, y_1) \times S(y_1, z_2), R(x_2, y_2) \times S(y_2, z_2)\}$
    $= \max\{0.3 \times 0.2, 0.5 \times 0.9\}$
    $= \max\{0.06, 0.45\} = 0.45$

So, $S \odot R = \begin{pmatrix} 0.42 & 0.72 \\ 0.21 & 0.45 \end{pmatrix}$

---

**Question 3:**
Compare the results of the Max-Min and Max-Product compositions from Question 1 and 2. Discuss why the membership degrees differ.

**Answer 3:**
Comparing the results:
Max-Min: $\begin{pmatrix} 0.6 & 0.8 \\ 0.4 & 0.5 \end{pmatrix}$
Max-Product: $\begin{pmatrix} 0.42 & 0.72 \\ 0.21 & 0.45 \end{pmatrix}$

In general, for the same input relations, the Max-Min composition tends to yield higher or equal membership degrees than the Max-Product composition. Let's look at specific cells:

*   **(x1, z1):** Max-Min = 0.6, Max-Product = 0.42. The Max-Min composition uses $\min(0.6, 0.7) = 0.6$ for one path, which is higher than the Max-Product's $0.6 \times 0.7 = 0.42$.
*   **(x1, z2):** Max-Min = 0.8, Max-Product = 0.72. The Max-Min uses $\min(0.8, 0.9) = 0.8$, while Max-Product uses $0.8 \times 0.9 = 0.72$.
*   **(x2, z1):** Max-Min = 0.4, Max-Product = 0.21. Max-Min uses $\min(0.5, 0.4) = 0.4$, while Max-Product uses $0.5 \times 0.4 = 0.20$.
*   **(x2, z2):** Max-Min = 0.5, Max-Product = 0.45. Max-Min uses $\min(0.5, 0.9) = 0.5$, while Max-Product uses $0.5 \times 0.9 = 0.45$.

The difference arises because the $\min$ operation is more forgiving of lower membership values. When two membership values are multiplied, the result is typically smaller than the minimum of the two values, especially when the values are less than 1. The Max-Min composition preserves more of the high membership values from the original relations, as it is limited only by the weakest link in a path, not by the product of the links. Conversely, the product operation tends to "dampen" the membership values, leading to generally lower results in the Max-Product composition.
