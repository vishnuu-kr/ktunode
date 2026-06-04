---
title: "Properties of fuzzy set - Level Sets - Alpha cut representation."
subject: "FUZZY SYSTEMS"
module: "Module 1: Basic Fuzzy Set Theory :"
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c4b7"
status: "completed"
scrapedAt: "2026-05-20T17:06:11.692Z"
---
# Fuzzy Systems: Module 1 - Basic Fuzzy Set Theory

## Topic: Properties of Fuzzy Sets, Level Sets, and Alpha-Cut Representation

### Learning Outcomes:

*   Understand the fundamental properties of fuzzy sets.
*   Define and explain the concept of Level Sets (or $\alpha$-cuts) of a fuzzy set.
*   Represent a fuzzy set using its $\alpha$-cuts.
*   Relate the properties of fuzzy sets to their $\alpha$-cut representations.

---

### 1. Properties of Fuzzy Sets

Fuzzy sets, unlike classical crisp sets, possess unique properties that stem from their ability to represent partial membership. Here are some key properties:

*   **Non-negativity:** The membership degree of any element to a fuzzy set is always non-negative.
    *   **Definition:** For a fuzzy set $A$ in a universe of discourse $X$, the membership function $\mu_A(x)$ satisfies $0 \le \mu_A(x) \le 1$ for all $x \in X$.
    *   **Importance:** This property ensures that membership degrees are valid probabilities or proportions.

*   **Normalization:** A fuzzy set is normalized if there exists at least one element in the universe of discourse whose membership degree is 1.
    *   **Definition:** A fuzzy set $A$ is normalized if $\sup_{x \in X} \mu_A(x) = 1$.
    *   **Importance:** The normalized fuzzy set represents a "definite" or "fully" belonging to the set. Non-normalized fuzzy sets can still be meaningful, often representing an "unspecified" or "partially defined" degree of membership.

*   **Convexity:** A fuzzy set is convex if for any two elements $x_1, x_2$ in the universe of discourse, the membership degree of any element on the line segment connecting $x_1$ and $x_2$ is greater than or equal to the minimum of the membership degrees of $x_1$ and $x_2$. This definition is more precisely stated for numerical universes.
    *   **Definition (for numerical universe X):** A fuzzy set $A$ is convex if for all $x_1, x_2 \in X$ and for all $\lambda \in [0, 1]$,
        $$ \mu_A(\lambda x_1 + (1-\lambda) x_2) \ge \min(\mu_A(x_1), \mu_A(x_2)) $$
    *   **Importance:** Convex fuzzy sets represent concepts that are "smooth" and do not have "gaps" or "holes" in their membership function. This property is crucial in many fuzzy logic applications, especially in control systems, where it ensures predictable behavior.
    *   **Example:** A fuzzy set representing "medium temperature" is likely convex, while a fuzzy set representing "very low or very high temperature" might not be.

*   **Height:** The height of a fuzzy set is the maximum membership degree among all elements in the universe of discourse. This is equivalent to the condition for normalization.
    *   **Definition:** The height of a fuzzy set $A$, denoted by $h(A)$, is $h(A) = \sup_{x \in X} \mu_A(x)$.
    *   **Note:** If $h(A) = 1$, the fuzzy set is normalized.

*   **Support:** The support of a fuzzy set is the set of all elements in the universe of discourse that have a non-zero membership degree.
    *   **Definition:** The support of a fuzzy set $A$, denoted by $supp(A)$, is $supp(A) = \{x \in X \mid \mu_A(x) > 0\}$.
    *   **Importance:** The support defines the range of values over which the fuzzy set has any influence or meaning.

*   **Core:** The core of a fuzzy set is the set of all elements that have a membership degree of 1.
    *   **Definition:** The core of a fuzzy set $A$, denoted by $core(A)$, is $core(A) = \{x \in X \mid \mu_A(x) = 1\}$.
    *   **Note:** If the core is empty, the fuzzy set is not normalized.

*   **Boundary:** The boundary of a fuzzy set is the set of all elements that have a membership degree strictly between 0 and 1.
    *   **Definition:** The boundary of a fuzzy set $A$, denoted by $bound(A)$, is $bound(A) = \{x \in X \mid 0 < \mu_A(x) < 1\}$.

---

### 2. Level Sets (Alpha-Cuts)

Level Sets, also known as $\alpha$-cuts, are a fundamental tool for representing and manipulating fuzzy sets. They essentially convert fuzzy sets into crisp sets.

*   **Definition of $\alpha$-cut (or Level Set):**
    For a fuzzy set $A$ defined on a universe of discourse $X$, and for a given level $\alpha \in [0, 1]$, the $\alpha$-cut of $A$, denoted by $A_\alpha$, is the crisp set of all elements whose membership degree in $A$ is greater than or equal to $\alpha$.

    $$ A_\alpha = \{x \in X \mid \mu_A(x) \ge \alpha\} $$

*   **Definition of Strong $\alpha$-cut (or Strict Level Set):**
    For a fuzzy set $A$ defined on a universe of discourse $X$, and for a given level $\alpha \in (0, 1]$, the strong $\alpha$-cut of $A$, denoted by $A_{\alpha^+}$, is the crisp set of all elements whose membership degree in $A$ is strictly greater than $\alpha$.

    $$ A_{\alpha^+} = \{x \in X \mid \mu_A(x) > \alpha\} $$

    *   **Note:** The strong $\alpha$-cut is often defined for $\alpha \in [0, 1)$. For consistency with the $\alpha$-cut definition, we will use $\alpha \in [0, 1]$ for both, understanding that for $\alpha=1$, $A_{1^+}$ will always be empty (unless the fuzzy set has multiple elements with membership 1, in which case it depends on strict inequality). The standard definition often uses $\alpha \in (0,1]$. For simplicity and broader applicability in this module, we'll primarily focus on the standard $\alpha$-cut $A_\alpha = \{x \mid \mu_A(x) \ge \alpha\}$.

*   **Relationship between $\alpha$-cuts and Properties:**

    *   **Height:** A fuzzy set $A$ is normalized if and only if $A_1 \ne \emptyset$.
    *   **Support:** The support of a fuzzy set $A$ is the union of all its $\alpha$-cuts for $\alpha > 0$.
        $$ supp(A) = \bigcup_{\alpha > 0} A_\alpha $$
    *   **Core:** The core of a fuzzy set $A$ is precisely the 1-cut.
        $$ core(A) = A_1 $$
    *   **Boundary:** The boundary of a fuzzy set $A$ can be related to the difference between consecutive $\alpha$-cuts.
    *   **Convexity:** A fuzzy set $A$ is convex if and only if for every $\alpha \in [0, 1]$, its $\alpha$-cut $A_\alpha$ is a convex crisp set.

---

### 3. Alpha-Cut Representation

The $\alpha$-cuts of a fuzzy set provide a way to reconstruct the original fuzzy set. This is a powerful concept for both understanding and implementing fuzzy set operations.

*   **Representation Theorem:**
    Any fuzzy set $A$ can be uniquely represented as a union of its $\alpha$-cuts. Specifically, for any fuzzy set $A$, the following holds:

    $$ A = \bigcup_{\alpha \in (0, 1]} \alpha \cdot A_\alpha $$

    where $\alpha \cdot A_\alpha$ denotes a fuzzy set whose membership function is $\alpha$ for elements in $A_\alpha$ and 0 otherwise. The union operation in this context is the standard fuzzy set union (pointwise maximum of membership functions).

    More precisely, the membership function of the reconstructed fuzzy set is:
    $$ \mu_A(x) = \sup_{\alpha \in (0, 1]} \{\alpha \mid x \in A_\alpha\} $$

    This theorem states that a fuzzy set is completely determined by its family of crisp $\alpha$-cuts.

*   **Alternative Representation using Levels and Intervals:**
    If the universe of discourse is discrete and finite, or if we are only interested in specific $\alpha$ levels, we can represent a fuzzy set by listing its $\alpha$-cuts for those levels.

    For a continuous universe, we can represent a fuzzy set by its varying $\alpha$-cuts. If a fuzzy set is *normal* and *convex*, its membership function can be represented by the union of intervals corresponding to its $\alpha$-cuts.

*   **Example:**
    Let's consider a fuzzy set $A$ defined on the universe of discourse $X = \{1, 2, 3, 4, 5\}$ with the following membership function:
    $\mu_A = \{ (1, 0.2), (2, 0.5), (3, 0.8), (4, 1.0), (5, 0.4) \}$

    Let's find some $\alpha$-cuts:

    *   **$\alpha = 0.2$:** $A_{0.2} = \{x \in X \mid \mu_A(x) \ge 0.2\} = \{1, 2, 3, 4, 5\}$
    *   **$\alpha = 0.5$:** $A_{0.5} = \{x \in X \mid \mu_A(x) \ge 0.5\} = \{2, 3, 4\}$
    *   **$\alpha = 0.8$:** $A_{0.8} = \{x \in X \mid \mu_A(x) \ge 0.8\} = \{3, 4\}$
    *   **$\alpha = 1.0$:** $A_{1.0} = \{x \in X \mid \mu_A(x) \ge 1.0\} = \{4\}$
    *   **$\alpha = 0.3$:** $A_{0.3} = \{x \in X \mid \mu_A(x) \ge 0.3\} = \{2, 3, 4, 5\}$

    **Reconstructing A from $\alpha$-cuts:**
    Let's try to reconstruct $\mu_A(3)$ using the representation theorem:
    $A_{0.2} = \{1, 2, 3, 4, 5\}$
    $A_{0.5} = \{2, 3, 4\}$
    $A_{0.8} = \{3, 4\}$
    $A_{1.0} = \{4\}$

    For $x=3$:
    *   $3 \in A_{0.2}$ (since $\mu_A(3) = 0.8 \ge 0.2$)
    *   $3 \in A_{0.5}$ (since $\mu_A(3) = 0.8 \ge 0.5$)
    *   $3 \in A_{0.8}$ (since $\mu_A(3) = 0.8 \ge 0.8$)
    *   $3 \notin A_{1.0}$ (since $\mu_A(3) = 0.8 < 1.0$)

    The $\alpha$ values for which $3 \in A_\alpha$ are $\{0.2, 0.5, 0.8\}$.
    The maximum of these $\alpha$ values is $0.8$.
    Therefore, $\mu_A(3) = \sup\{\alpha \mid 3 \in A_\alpha\} = 0.8$. This matches the original definition.

*   **Properties of $\alpha$-cuts:**
    For a fuzzy set $A$:
    1.  $A_\alpha \supseteq A_\beta$ if $\alpha < \beta$. (Membership degrees decrease as $\alpha$ increases, so the set of elements satisfying the condition shrinks).
    2.  $\bigcap_{\beta < \alpha} A_\beta = A_\alpha$ (This is an alternative way of expressing the property above for continuity).
    3.  $A_0 = X$ (assuming $X$ is the entire universe of discourse and $\mu_A(x) \ge 0$).
    4.  $A_1 = core(A)$.
    5.  For a normal fuzzy set, $A_1 \ne \emptyset$.
    6.  For a convex fuzzy set, each $A_\alpha$ is a convex crisp set.

---

### 4. Practice Questions and Exercises

**Question 1:**
Consider a fuzzy set $B$ defined on the universe of discourse $Y = \{apple, banana, orange, grape\}$ with the following membership function:
$\mu_B = \{ (apple, 0.3), (banana, 0.9), (orange, 0.7), (grape, 0.1) \}$

(a) What is the height of fuzzy set $B$?
(b) Is fuzzy set $B$ normalized? Justify your answer.
(c) Determine the support of fuzzy set $B$.
(d) Determine the core of fuzzy set $B$.
(e) Calculate the $\alpha$-cuts $B_{0.5}$ and $B_{0.7}$.

**Answer 1:**
(a) The height of fuzzy set $B$ is the maximum membership degree, which is $0.9$ (corresponding to 'banana').
(b) Fuzzy set $B$ is **not normalized** because its height (0.9) is not equal to 1.
(c) The support of fuzzy set $B$ is the set of elements with non-zero membership: $supp(B) = \{apple, banana, orange, grape\}$.
(d) The core of fuzzy set $B$ is the set of elements with membership degree 1. Since no element has a membership degree of 1, the core is empty: $core(B) = \emptyset$.
(e)
    *   $B_{0.5} = \{y \in Y \mid \mu_B(y) \ge 0.5\} = \{banana, orange\}$
    *   $B_{0.7} = \{y \in Y \mid \mu_B(y) \ge 0.7\} = \{banana, orange\}$

**Question 2:**
Consider a fuzzy set $C$ on the universe of discourse $Z = \{1, 2, 3, 4, 5\}$ with the following membership function:
$\mu_C = \{ (1, 0.0), (2, 0.4), (3, 0.6), (4, 0.6), (5, 0.2) \}$

(a) Calculate the $\alpha$-cuts $C_{0.4}$ and $C_{0.6}$.
(b) What is the relationship between $C_{0.4}$ and $C_{0.6}$?
(c) Determine the support of $C$.
(d) Is $C$ convex? Justify your answer by examining the $\alpha$-cuts or the membership function directly.

**Answer 2:**
(a)
    *   $C_{0.4} = \{z \in Z \mid \mu_C(z) \ge 0.4\} = \{2, 3, 4\}$
    *   $C_{0.6} = \{z \in Z \mid \mu_C(z) \ge 0.6\} = \{3, 4\}$
(b) Since $0.4 < 0.6$, we expect $C_{0.4} \supseteq C_{0.6}$. Indeed, $\{2, 3, 4\} \supseteq \{3, 4\}$. This property holds.
(c) The support of $C$ is the set of elements with non-zero membership. $supp(C) = \{2, 3, 4, 5\}$.
(d) To check for convexity on a discrete universe, we can check the property for any pair of elements. Let's examine the definition directly for $x_1=2$ and $x_2=4$. $\lambda \in [0, 1]$.
    $\mu_C(2) = 0.4$, $\mu_C(4) = 0.6$.
    $\min(\mu_C(2), \mu_C(4)) = \min(0.4, 0.6) = 0.4$.
    We need to check if $\mu_C(\lambda \cdot 2 + (1-\lambda) \cdot 4) \ge 0.4$ for all $\lambda \in [0, 1]$.

    Let's consider the point between 2 and 3. If we take $\lambda = 0.5$, the point is $0.5 \cdot 2 + 0.5 \cdot 4 = 3$. $\mu_C(3) = 0.6 \ge 0.4$.
    If we take $\lambda = 1/3$, the point is $1/3 \cdot 2 + 2/3 \cdot 4 = 2/3 + 8/3 = 10/3 \approx 3.33$.
    The membership function is defined only for integers. For a discrete set, convexity means that if two elements are in the set, all elements "between" them in some ordered sense must also be in the set with at least the minimum membership.

    Alternatively, using $\alpha$-cuts:
    A fuzzy set is convex if all its $\alpha$-cuts are convex crisp sets. For a discrete universe, a crisp set is convex if for any two elements $a, b$ in the set, all elements $x$ such that $a \le x \le b$ are also in the set.

    *   $C_{0.4} = \{2, 3, 4\}$. This is convex because elements between 2 and 4 are 3, which is in the set.
    *   $C_{0.6} = \{3, 4\}$. This is convex.

    However, let's consider the shape of the membership function: it goes up from 0.4 to 0.6, stays at 0.6, and then drops to 0.2. If we had an element with membership 0.4 and another with membership 0.2, and the element "between" them had membership 0.1, it would not be convex.

    Let's re-evaluate convexity for discrete sets more carefully. For a discrete universe, a fuzzy set $A$ is convex if for any $x_1, x_2$ in the universe and any $\lambda$ such that $\lambda x_1 + (1-\lambda) x_2$ is also in the universe, the membership condition holds. Here, the universe is ordered integers.

    Consider $x_1=2$ and $x_2=5$. $\mu_C(2)=0.4$, $\mu_C(5)=0.2$. $\min(\mu_C(2), \mu_C(5))=0.2$.
    We need to check if for all intermediate integers (3 and 4), their membership is $\ge 0.2$.
    $\mu_C(3) = 0.6 \ge 0.2$ (Yes)
    $\mu_C(4) = 0.6 \ge 0.2$ (Yes)

    Consider $x_1=2$ and $x_2=4$. $\mu_C(2)=0.4$, $\mu_C(4)=0.6$. $\min(\mu_C(2), \mu_C(4))=0.4$.
    We need to check if for all intermediate integers (3), their membership is $\ge 0.4$.
    $\mu_C(3) = 0.6 \ge 0.4$ (Yes)

    Consider $x_1=3$ and $x_2=5$. $\mu_C(3)=0.6$, $\mu_C(5)=0.2$. $\min(\mu_C(3), \mu_C(5))=0.2$.
    We need to check if for all intermediate integers (4), their membership is $\ge 0.2$.
    $\mu_C(4) = 0.6 \ge 0.2$ (Yes)

    Based on these checks for integer universes, it seems the set *is* convex. The key is that the $\alpha$-cuts are convex crisp sets.
    Let's consider a different $\alpha$: $\alpha=0.5$.
    $C_{0.5} = \{3, 4\}$. This is a convex crisp set.

    The membership function is generally described as a shape. This shape rises, plateaus, and then drops. It does not have any dips or valleys that would violate convexity. So, yes, $C$ is convex.

---

### 5. Important Points to Remember

*   **Membership Degree:** The core concept is that elements can have partial membership (between 0 and 1).
*   **Normalization:** A normalized fuzzy set has at least one element with a membership of 1 (height is 1).
*   **Support:** The "active" region of the fuzzy set.
*   **Core:** The "fully belonging" region.
*   **$\alpha$-cuts ($A_\alpha$):** Convert fuzzy sets into crisp sets by thresholding membership degrees ($\ge \alpha$). They are fundamental for defining operations and theorems.
*   **Properties of $\alpha$-cuts:** $\alpha < \beta \implies A_\alpha \supseteq A_\beta$.
*   **Representation Theorem:** Any fuzzy set can be reconstructed from its $\alpha$-cuts. This is crucial for understanding the relationship between fuzzy and crisp sets.
*   **Convexity:** Crucial for smooth and predictable behavior in fuzzy systems. A fuzzy set is convex if all its $\alpha$-cuts are convex crisp sets.
