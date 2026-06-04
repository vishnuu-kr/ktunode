---
title: "Extension Principle- Fuzzy arithmetic – fuzzy numbers, arithmetic operations on fuzzy numbers."
subject: "FUZZY SYSTEMS"
module: "Module 2: Fuzzy Relations :"
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c4bd"
status: "completed"
scrapedAt: "2026-05-20T17:06:15.180Z"
---
# Fuzzy Systems: Module 2: Fuzzy Relations - Extension Principle, Fuzzy Arithmetic

## Learning Outcomes

By the end of this module, you should be able to:

*   Understand the concept of the Extension Principle.
*   Define fuzzy numbers and their properties.
*   Perform arithmetic operations (addition, subtraction, multiplication, division) on fuzzy numbers.
*   Apply the Extension Principle to define fuzzy arithmetic operations.

---

## 1. The Extension Principle

The Extension Principle is a fundamental concept in fuzzy set theory that allows us to extend ordinary mathematical operations, defined on crisp numbers, to fuzzy sets. In essence, it provides a way to define the membership degree of the result of a fuzzy operation.

### 1.1 Core Idea

Given a function $f: X \to Y$ and a fuzzy set $A$ on $X$, the Extension Principle allows us to define a fuzzy set $B$ on $Y$ such that the membership degree of an element $y \in Y$ in $B$ is determined by the membership degrees of all elements $x \in X$ that map to $y$ under $f$.

### 1.2 Formal Definition

Let $A = \{ (x, \mu_A(x)) | x \in X \}$ be a fuzzy set on a universe of discourse $X$, and let $f: X \to Y$ be a function. The Extension Principle states that the fuzzy set $B = f(A)$ on $Y$ is defined as:

$$
B = f(A) = \left\{ \left( y, \mu_B(y) \right) | y \in Y \right\}
$$

where $\mu_B(y)$ is the membership function of $B$, given by:

$$
\mu_B(y) = \sup_{x \in X \text{ such that } f(x) = y} \{ \mu_A(x) \}
$$

**Explanation:**

*   For each element $y$ in the output space $Y$, its membership degree in the fuzzy set $B$ is the *maximum* membership degree of any element $x$ in the input space $X$ that maps to $y$ via the function $f$.
*   If no element in $X$ maps to $y$, then $\mu_B(y) = 0$.

### 1.3 A More General Form (for functions with multiple inputs)

If we have a function $f: X_1 \times X_2 \times \dots \times X_n \to Y$ and fuzzy sets $A_1, A_2, \dots, A_n$ on $X_1, X_2, \dots, X_n$ respectively, the fuzzy set $B = f(A_1, A_2, \dots, A_n)$ on $Y$ is defined as:

$$
\mu_B(y) = \sup_{x_1 \in X_1, \dots, x_n \in X_n \text{ such that } f(x_1, \dots, x_n) = y} \{ \min(\mu_{A_1}(x_1), \dots, \mu_{A_n}(x_n)) \}
$$

**Note:** The $\min$ operator here is for the standard T-norm. Other T-norms can also be used.

### 1.4 Example: Fuzzy Maximum

Let $A = \{ (1, 0.5), (2, 0.8), (3, 1.0) \}$ and $B = \{ (4, 0.7), (5, 0.9), (6, 0.4) \}$.
Let $f(x, y) = \max(x, y)$. We want to find $C = f(A, B)$ using the Extension Principle.

For $c \in \{1, 2, 3, 4, 5, 6\}$, we need to find $\mu_C(c) = \sup_{x \in A, y \in B \text{ s.t. } \max(x,y)=c} \{ \min(\mu_A(x), \mu_B(y)) \}$.

Let's calculate for a few values of $c$:

*   **For $c=1$**: No $(x, y)$ pair with $x \in \{1,2,3\}, y \in \{4,5,6\}$ satisfies $\max(x,y) = 1$. So, $\mu_C(1) = 0$.
*   **For $c=4$**:
    *   $\max(1, 4) = 4$. $\min(\mu_A(1), \mu_B(4)) = \min(0.5, 0.7) = 0.5$.
    *   $\max(2, 4) = 4$. $\min(\mu_A(2), \mu_B(4)) = \min(0.8, 0.7) = 0.7$.
    *   $\max(3, 4) = 4$. $\min(\mu_A(3), \mu_B(4)) = \min(1.0, 0.7) = 0.7$.
    *   $\sup \{0.5, 0.7, 0.7\} = 0.7$. So, $\mu_C(4) = 0.7$.
*   **For $c=5$**:
    *   $\max(1, 5) = 5$. $\min(\mu_A(1), \mu_B(5)) = \min(0.5, 0.9) = 0.5$.
    *   $\max(2, 5) = 5$. $\min(\mu_A(2), \mu_B(5)) = \min(0.8, 0.9) = 0.8$.
    *   $\max(3, 5) = 5$. $\min(\mu_A(3), \mu_B(5)) = \min(1.0, 0.9) = 0.9$.
    *   $\sup \{0.5, 0.8, 0.9\} = 0.9$. So, $\mu_C(5) = 0.9$.
*   **For $c=6$**:
    *   $\max(1, 6) = 6$. $\min(\mu_A(1), \mu_B(6)) = \min(0.5, 0.4) = 0.4$.
    *   $\max(2, 6) = 6$. $\min(\mu_A(2), \mu_B(6)) = \min(0.8, 0.4) = 0.4$.
    *   $\max(3, 6) = 6$. $\min(\mu_A(3), \mu_B(6)) = \min(1.0, 0.4) = 0.4$.
    *   $\sup \{0.4, 0.4, 0.4\} = 0.4$. So, $\mu_C(6) = 0.4$.

Therefore, $C = f(A, B) = \{ (4, 0.7), (5, 0.9), (6, 0.4) \}$.

---

## 2. Fuzzy Arithmetic

Fuzzy arithmetic deals with arithmetic operations on fuzzy numbers. Fuzzy numbers are fuzzy sets that represent imprecise numerical quantities. The Extension Principle is the primary tool used to define these operations.

### 2.1 Fuzzy Numbers

A fuzzy number is a fuzzy subset of the real numbers ( $\mathbb{R}$) that is:

1.  **Normal:** There exists at least one element $x_0 \in \mathbb{R}$ such that $\mu_A(x_0) = 1$. (The peak of the membership function is at height 1).
2.  **Convex:** For any $x_1, x_2 \in \mathbb{R}$ and any $\lambda \in [0, 1]$, if $\mu_A(\lambda x_1 + (1-\lambda) x_2) \ge \min(\mu_A(x_1), \mu_A(x_2))$, then the fuzzy set is convex. Intuitively, the "hump" of the membership function is a single peak, and the set of elements with membership degree greater than or equal to some value $\alpha$ forms a contiguous interval.
3.  **Upper Semi-continuous:** The inverse image of any interval $[0, \alpha]$ is a closed set. This is usually satisfied by defining membership functions with continuous or piecewise continuous shapes.

**Common Representation: $\alpha$-cuts**

A key way to work with fuzzy numbers is through their $\alpha$-cuts. The $\alpha$-cut of a fuzzy number $A$ is the crisp set $A_\alpha$ containing all elements $x$ whose membership degree in $A$ is greater than or equal to $\alpha$:

$$
A_\alpha = \{ x \in \mathbb{R} | \mu_A(x) \ge \alpha \}
$$

For a fuzzy number, each $\alpha$-cut $A_\alpha$ (for $\alpha \in (0, 1]$) must be a non-empty closed interval $[a_\alpha, b_\alpha]$. The 0-cut, $A_0$, is the support of the fuzzy number, which is also a closed interval (possibly unbounded).

**Example: Triangular Fuzzy Number (TFN)**

A common type of fuzzy number is the triangular fuzzy number. It is characterized by three parameters $(a, b, c)$ where $a \le b \le c$. The membership function is typically defined as:

$$
\mu_A(x) = \begin{cases}
0 & \text{if } x < a \\
(x-a)/(b-a) & \text{if } a \le x \le b \\
(c-x)/(c-b) & \text{if } b < x \le c \\
0 & \text{if } x > c
\end{cases}
$$

The $\alpha$-cut of a TFN $(a, b, c)$ is given by $[a_\alpha, b_\alpha]$ where:
$a_\alpha = a + \alpha(b-a)$
$b_\alpha = c - \alpha(c-b)$

**Example:** Consider a fuzzy number $A$ representing "around 5", which is a triangular fuzzy number with parameters $(4, 5, 6)$.
$\mu_A(x) = \begin{cases}
0 & \text{if } x < 4 \\
x-4 & \text{if } 4 \le x \le 5 \\
6-x & \text{if } 5 < x \le 6 \\
0 & \text{if } x > 6
\end{cases}$

*   **$\alpha$-cut for $A$:** $A_\alpha = [4 + \alpha(5-4), 6 - \alpha(6-5)] = [4+\alpha, 6-\alpha]$ for $\alpha \in (0, 1]$.
    *   For $\alpha=0.5$: $A_{0.5} = [4+0.5, 6-0.5] = [4.5, 5.5]$. This interval represents the possible crisp values with at least 0.5 membership.

### 2.2 Arithmetic Operations on Fuzzy Numbers using $\alpha$-cuts

The Extension Principle can be applied to operations on fuzzy numbers by applying them to their $\alpha$-cuts.

Let $A$ and $B$ be two fuzzy numbers. For any $\alpha \in [0, 1]$, their $\alpha$-cuts are crisp intervals:
$A_\alpha = [a_\alpha, b_\alpha]$
$B_\alpha = [c_\alpha, d_\alpha]$

If $f$ is a function on real numbers (e.g., $f(x, y) = x+y$), then the $\alpha$-cut of the fuzzy number $C = f(A, B)$ is given by:

$$
C_\alpha = f(A_\alpha, B_\alpha)
$$

where $f(A_\alpha, B_\alpha)$ denotes the application of the crisp function $f$ to the intervals $A_\alpha$ and $B_\alpha$.

**For interval arithmetic:**
If $I_1 = [a, b]$ and $I_2 = [c, d]$, then:
*   $I_1 + I_2 = [a+c, b+d]$
*   $I_1 - I_2 = [a-d, b-c]$
*   $I_1 \times I_2 = [\min(ac, ad, bc, bd), \max(ac, ad, bc, bd)]$
*   $I_1 / I_2 = [\min(a/c, a/d, b/c, b/d), \max(a/c, a/d, b/c, b/d)]$ (assuming $0 \notin I_2$)

---

### 2.3 Addition of Fuzzy Numbers

Let $A$ and $B$ be fuzzy numbers. Their sum $C = A + B$ is defined such that its $\alpha$-cut is:

$$
C_\alpha = A_\alpha + B_\alpha = [a_\alpha + c_\alpha, b_\alpha + d_\alpha]
$$

**Example: Addition of Triangular Fuzzy Numbers**

Let $A = (1, 2, 3)$ and $B = (4, 5, 6)$.
$A_\alpha = [1+\alpha, 3-\alpha]$
$B_\alpha = [4+\alpha, 6-\alpha]$

$C_\alpha = A_\alpha + B_\alpha = [(1+\alpha) + (4+\alpha), (3-\alpha) + (6-\alpha)]$
$C_\alpha = [5+2\alpha, 9-2\alpha]$

To find the fuzzy number representation of $C$, we can use the definition of TFNs. For a TFN $(p, q, r)$, the $\alpha$-cut is $[p+\alpha(q-p), r-\alpha(r-q)]$.
Comparing $C_\alpha = [5+2\alpha, 9-2\alpha]$ with the general form:
$p+\alpha(q-p) = 5+2\alpha$
$r-\alpha(r-q) = 9-2\alpha$

From the first equation:
If $\alpha=0$, $p=5$.
If $\alpha=1$, $p+(q-p) = q = 5+2(1) = 7$.
So, $p=5, q=7$.

From the second equation:
If $\alpha=0$, $r=9$.
If $\alpha=1$, $r-(r-q) = q = 9-2(1) = 7$.
So, $q=7, r=9$.

Thus, $A+B = (5, 7, 9)$.

---

### 2.4 Subtraction of Fuzzy Numbers

Let $A$ and $B$ be fuzzy numbers. Their difference $C = A - B$ is defined such that its $\alpha$-cut is:

$$
C_\alpha = A_\alpha - B_\alpha = [a_\alpha - d_\alpha, b_\alpha - c_\alpha]
$$

**Example: Subtraction of Triangular Fuzzy Numbers**

Let $A = (1, 2, 3)$ and $B = (4, 5, 6)$.
$A_\alpha = [1+\alpha, 3-\alpha]$
$B_\alpha = [4+\alpha, 6-\alpha]$

$C_\alpha = A_\alpha - B_\alpha = [(1+\alpha) - (6-\alpha), (3-\alpha) - (4+\alpha)]$
$C_\alpha = [1+\alpha - 6+\alpha, 3-\alpha - 4-\alpha]$
$C_\alpha = [-5+2\alpha, -1-2\alpha]$

This result is not a standard interval representation for a convex fuzzy number (the lower bound increases with $\alpha$, the upper bound decreases). This indicates that direct subtraction of $\alpha$-cuts can lead to non-convex fuzzy numbers or fuzzy numbers whose shape is not easily represented by standard forms like TFNs.

**Alternative for $A-B$: $A+(-B)$**
Let's consider $-B$. If $B = (4, 5, 6)$, then $-B = (-6, -5, -4)$.
$(-B)_\alpha = [-6+\alpha, -4-\alpha]$ (obtained by negating the bounds and reversing their order).

Now, $A + (-B)$:
$A_\alpha = [1+\alpha, 3-\alpha]$
$(-B)_\alpha = [-6+\alpha, -4-\alpha]$

$C_\alpha = A_\alpha + (-B)_\alpha = [(1+\alpha) + (-6+\alpha), (3-\alpha) + (-4-\alpha)]$
$C_\alpha = [-5+2\alpha, -1-2\alpha]$

This gives the same result as direct subtraction. The issue is that for a fuzzy number $B$, the fuzzy number $-B$ has its $\alpha$-cut defined as:
$(-B)_\alpha = [-d_\alpha, -c_\alpha]$

So, if $B = (4, 5, 6)$, then $B_\alpha = [4+\alpha, 6-\alpha]$.
$-B$ should have $(-B)_\alpha = [-(6-\alpha), -(4+\alpha)] = [-6+\alpha, -4-\alpha]$.

Let's recheck the TFN parameters for $-B$.
If $-B = (p', q', r')$, then $(-B)_\alpha = [p'+\alpha(q'-p'), r'-\alpha(r'-q')]$.
Comparing with $[-6+\alpha, -4-\alpha]$:
$p'= -6$.
$q' = p' + (\text{coefficient of } \alpha) = -6 + 1 = -5$.
$r'= -4$.
$q' = r' - (\text{coefficient of } \alpha) = -4 - 1 = -5$.
So, $-B = (-6, -5, -4)$.

Now, $A + (-B)$:
$A_\alpha = [1+\alpha, 3-\alpha]$
$(-B)_\alpha = [-6+\alpha, -4-\alpha]$

$C_\alpha = A_\alpha + (-B)_\alpha = [(1+\alpha) + (-6+\alpha), (3-\alpha) + (-4-\alpha)]$
$C_\alpha = [-5+2\alpha, -1-2\alpha]$

This is indeed the correct $\alpha$-cut. If we were to express this as a TFN $(p, q, r)$, then:
$p= -5$
$q= p + (\text{coeff of } \alpha) = -5 + 2 = -3$
$r= -1$
$q= r - (\text{coeff of } \alpha) = -1 - 2 = -3$
So, $A-B = (-5, -3, -1)$.

**Important Note on Subtraction:** Direct subtraction of interval bounds $(a_\alpha - d_\alpha, b_\alpha - c_\alpha)$ can result in $\alpha$-cuts that are not of the form $[p+\alpha(q-p), r-\alpha(r-q)]$ for TFNs. However, the resulting fuzzy number, if it can be represented, is correctly obtained by $A+(-B)$. The $\alpha$-cuts derived from $A_\alpha - B_\alpha$ *do* define the resulting fuzzy number, even if it's not a TFN.

---

### 2.5 Multiplication of Fuzzy Numbers

Let $A$ and $B$ be fuzzy numbers. Their product $C = A \times B$ is defined such that its $\alpha$-cut is:

$$
C_\alpha = A_\alpha \times B_\alpha = [a_\alpha, b_\alpha] \times [c_\alpha, d_\alpha]
$$

$$
C_\alpha = [\min(a_\alpha c_\alpha, a_\alpha d_\alpha, b_\alpha c_\alpha, b_\alpha d_\alpha), \max(a_\alpha c_\alpha, a_\alpha d_\alpha, b_\alpha c_\alpha, b_\alpha d_\alpha)]
$$

**Example: Multiplication of Triangular Fuzzy Numbers**

Let $A = (1, 2, 3)$ and $B = (4, 5, 6)$.
$A_\alpha = [1+\alpha, 3-\alpha]$
$B_\alpha = [4+\alpha, 6-\alpha]$

We need to calculate the bounds of $A_\alpha \times B_\alpha$. The bounds of $A_\alpha$ are $a_\alpha = 1+\alpha$ and $b_\alpha = 3-\alpha$. The bounds of $B_\alpha$ are $c_\alpha = 4+\alpha$ and $d_\alpha = 6-\alpha$.

Let's evaluate the four products of the endpoints:
1.  $a_\alpha c_\alpha = (1+\alpha)(4+\alpha) = 4 + 5\alpha + \alpha^2$
2.  $a_\alpha d_\alpha = (1+\alpha)(6-\alpha) = 6 + 5\alpha - \alpha^2$
3.  $b_\alpha c_\alpha = (3-\alpha)(4+\alpha) = 12 + \alpha - \alpha^2$
4.  $b_\alpha d_\alpha = (3-\alpha)(6-\alpha) = 18 - 9\alpha + \alpha^2$

To find the minimum and maximum for $C_\alpha$, we need to analyze these expressions over $\alpha \in [0, 1]$.

Let's check the endpoints $\alpha=0$ and $\alpha=1$:
*   At $\alpha=0$: $A_0 = [1, 3]$, $B_0 = [4, 6]$. Products: $1 \times 4=4, 1 \times 6=6, 3 \times 4=12, 3 \times 6=18$.
    $C_0 = [\min(4,6,12,18), \max(4,6,12,18)] = [4, 18]$.
*   At $\alpha=1$: $A_1 = [2, 2]$, $B_1 = [5, 5]$. Products: $2 \times 5=10, 2 \times 5=10, 2 \times 5=10, 2 \times 5=10$.
    $C_1 = [\min(10), \max(10)] = [10, 10]$.

Now, consider the derivatives with respect to $\alpha$ to find potential extrema within $(0, 1)$.
*   $f_1(\alpha) = 4 + 5\alpha + \alpha^2 \implies f_1'(\alpha) = 5 + 2\alpha > 0$ for $\alpha \in [0, 1]$. Increasing.
*   $f_2(\alpha) = 6 + 5\alpha - \alpha^2 \implies f_2'(\alpha) = 5 - 2\alpha > 0$ for $\alpha \in [0, 1]$. Increasing.
*   $f_3(\alpha) = 12 + \alpha - \alpha^2 \implies f_3'(\alpha) = 1 - 2\alpha$. Zero at $\alpha=0.5$. Max at $\alpha=0.5$: $12+0.5-0.25 = 12.25$. Min at $\alpha=0$ (12) and $\alpha=1$ (12).
*   $f_4(\alpha) = 18 - 9\alpha + \alpha^2 \implies f_4'(\alpha) = -9 + 2\alpha < 0$ for $\alpha \in [0, 1]$. Decreasing.

Let's check values at $\alpha=0.5$:
$A_{0.5} = [4.5, 5.5]$
$B_{0.5} = [4.5, 5.5]$
Products: $4.5 \times 4.5 = 20.25$, $4.5 \times 5.5 = 24.75$, $5.5 \times 4.5 = 24.75$, $5.5 \times 5.5 = 30.25$.
$C_{0.5} = [\min(20.25, 24.75, 24.75, 30.25), \max(20.25, 24.75, 24.75, 30.25)] = [20.25, 30.25]$.

Comparing values at $\alpha=0, 0.5, 1$:
Lower bounds: $4$ (at $\alpha=0$), $20.25$ (at $\alpha=0.5$), $10$ (at $\alpha=1$).
The minimum lower bound is $4$ at $\alpha=0$.
The maximum lower bound is $20.25$ at $\alpha=0.5$.

Upper bounds: $18$ (at $\alpha=0$), $30.25$ (at $\alpha=0.5$), $10$ (at $\alpha=1$).
The minimum upper bound is $10$ at $\alpha=1$.
The maximum upper bound is $30.25$ at $\alpha=0.5$.

So, $C_\alpha = [\min_{0 \le \beta \le 1} \{ \text{products at } \beta \}, \max_{0 \le \beta \le 1} \{ \text{products at } \beta \} ]$.
This requires finding the actual minimum and maximum of these quadratic functions over $[0,1]$.

This process is computationally intensive and often leads to fuzzy numbers that are not easily represented in simple forms like TFNs. For TFNs, multiplication often results in a fuzzy number whose membership function is not triangular.

**Approximation for TFNs:**
A common simplification for TFNs $A=(a,b,c)$ and $B=(d,e,f)$ is to approximate the product as a TFN:
$A \times B \approx (ad, be, cf)$.
For $A=(1, 2, 3)$ and $B=(4, 5, 6)$, this would be $(1 \times 4, 2 \times 5, 3 \times 6) = (4, 10, 18)$.

Let's check the $\alpha$-cuts for $(4, 10, 18)$:
$C'_\alpha = [4+\alpha(10-4), 18-\alpha(18-10)] = [4+6\alpha, 18-8\alpha]$.

Comparing this with the actual $C_\alpha = [\min(\dots), \max(\dots)]$ found earlier:
At $\alpha=0$: $C_0 = [4, 18]$, $C'_0 = [4, 18]$. Matches.
At $\alpha=1$: $C_1 = [10, 10]$, $C'_1 = [4+6, 18-8] = [10, 10]$. Matches.
At $\alpha=0.5$: $C_{0.5} = [20.25, 30.25]$, $C'_{0.5} = [4+3, 18-4] = [7, 14]$. Does not match.

This shows that the simple $(ad, be, cf)$ approximation is often inaccurate, especially for non-unit centered TFNs.

---

### 2.6 Division of Fuzzy Numbers

Let $A$ and $B$ be fuzzy numbers. Their quotient $C = A / B$ is defined such that its $\alpha$-cut is:

$$
C_\alpha = A_\alpha / B_\alpha = [a_\alpha, b_\alpha] / [c_\alpha, d_\alpha]
$$

$$
C_\alpha = [\min(a_\alpha/c_\alpha, a_\alpha/d_\alpha, b_\alpha/c_\alpha, b_\alpha/d_\alpha), \max(a_\alpha/c_\alpha, a_\alpha/d_\alpha, b_\alpha/c_\alpha, b_\alpha/d_\alpha)]
$$

**Important Condition:** The denominator fuzzy number $B$ must not have any possibility of being zero. This means $0$ should not be in the support of $B$, and if $B_\alpha$ includes 0 for any $\alpha > 0$, division is undefined. For practical purposes, we often assume $B$ is strictly positive or strictly negative.

**Example: Division of Triangular Fuzzy Numbers**

Let $A = (1, 2, 3)$ and $B = (4, 5, 6)$. Both are positive.
$A_\alpha = [1+\alpha, 3-\alpha]$
$B_\alpha = [4+\alpha, 6-\alpha]$

We need to calculate the bounds of $A_\alpha / B_\alpha$.
Bounds of $A_\alpha$: $a_\alpha = 1+\alpha$, $b_\alpha = 3-\alpha$.
Bounds of $B_\alpha$: $c_\alpha = 4+\alpha$, $d_\alpha = 6-\alpha$.

Evaluate the four quotients of the endpoints:
1.  $a_\alpha / c_\alpha = (1+\alpha) / (4+\alpha)$
2.  $a_\alpha / d_\alpha = (1+\alpha) / (6-\alpha)$
3.  $b_\alpha / c_\alpha = (3-\alpha) / (4+\alpha)$
4.  $b_\alpha / d_\alpha = (3-\alpha) / (6-\alpha)$

Let's check endpoints $\alpha=0$ and $\alpha=1$:
*   At $\alpha=0$: $A_0 = [1, 3]$, $B_0 = [4, 6]$. Quotients: $1/4=0.25, 1/6 \approx 0.167, 3/4=0.75, 3/6=0.5$.
    $C_0 = [\min(0.25, 0.167, 0.75, 0.5), \max(0.25, 0.167, 0.75, 0.5)] = [0.167, 0.75]$.
*   At $\alpha=1$: $A_1 = [2, 2]$, $B_1 = [5, 5]$. Quotients: $2/5=0.4$.
    $C_1 = [\min(0.4), \max(0.4)] = [0.4, 0.4]$.

Analyzing the derivatives of these rational functions over $[0, 1]$ is even more complex than for multiplication.

**Approximation for TFNs:**
A common simplification for TFNs $A=(a,b,c)$ and $B=(d,e,f)$ is to approximate the division as a TFN:
$A / B \approx (a/f, b/e, c/d)$. (Note the reversal of bounds for the denominator).
For $A=(1, 2, 3)$ and $B=(4, 5, 6)$:
$A / B \approx (1/6, 2/5, 3/4) = (0.167, 0.4, 0.75)$.

Let's check the $\alpha$-cuts for $(0.167, 0.4, 0.75)$:
$C'_\alpha = [0.167+\alpha(0.4-0.167), 0.75-\alpha(0.75-0.4)]$
$C'_\alpha = [0.167+0.233\alpha, 0.75-0.35\alpha]$.

At $\alpha=0$: $C'_0 = [0.167, 0.75]$. Matches $C_0$.
At $\alpha=1$: $C'_1 = [0.167+0.233, 0.75-0.35] = [0.4, 0.4]$. Matches $C_1$.

This approximation seems reasonable for the endpoints, but the intermediate values might differ significantly.

---

### 2.7 Other Operations

The Extension Principle can be applied to any crisp function. For example:
*   **Fuzzy Power:** $A^n$ can be defined using $f(x) = x^n$.
*   **Fuzzy Minimum:** $\min(A, B)$ can be defined using $f(x, y) = \min(x, y)$.

---

## 3. Key Concepts and Definitions to Remember

*   **Extension Principle:** A method to extend crisp functions to fuzzy sets, defining the membership of the output fuzzy set.
*   **Fuzzy Number:** A normal, convex, and upper semi-continuous fuzzy subset of real numbers.
*   **$\alpha$-cut:** The crisp interval $A_\alpha = \{ x | \mu_A(x) \ge \alpha \}$. For fuzzy numbers, $A_\alpha$ is a closed interval $[a_\alpha, b_\alpha]$ for $\alpha \in (0, 1]$.
*   **Fuzzy Arithmetic:** Performing arithmetic operations on fuzzy numbers using the Extension Principle, often by applying operations to their $\alpha$-cuts.
*   **Interval Arithmetic:** Operations on crisp intervals, used as the building blocks for fuzzy arithmetic.
    *   $[a, b] + [c, d] = [a+c, b+d]$
    *   $[a, b] - [c, d] = [a-d, b-c]$
    *   $[a, b] \times [c, d] = [\min(ac, ad, bc, bd), \max(ac, ad, bc, bd)]$
*   **Approximations for TFNs:** Simple rules like $(ad, be, cf)$ for multiplication or $(a/f, b/e, c/d)$ for division are often used for convenience but may sacrifice accuracy.

---

## 4. Practice Questions

1.  Let $A = \{ (1, 0.2), (2, 0.7), (3, 1.0), (4, 0.5) \}$ and $B = \{ (5, 0.3), (6, 0.8), (7, 1.0) \}$. Let $f(x, y) = x + y$. Using the Extension Principle, find the membership degree of 8 in $C = f(A, B)$.

2.  Consider a triangular fuzzy number $A = (2, 5, 8)$.
    a) Write its membership function.
    b) Find its $\alpha$-cut $A_\alpha$.
    c) Calculate $A_{0.5}$.

3.  Let $A = (1, 3, 5)$ and $B = (2, 4, 6)$ be two triangular fuzzy numbers. Calculate $A+B$ using the $\alpha$-cut method and express the result as a triangular fuzzy number.

4.  Let $A = (1, 3, 5)$ and $B = (2, 4, 6)$ be two triangular fuzzy numbers.
    a) Calculate $A-B$ using the $\alpha$-cut method and express the result as a triangular fuzzy number.
    b) What are the potential issues with direct subtraction of fuzzy numbers?

5.  Let $A = (1, 2, 3)$ and $B = (0, 1, 2)$. Assume $A$ and $B$ are fuzzy numbers whose $\alpha$-cuts are given by:
    $A_\alpha = [1+\alpha, 3-\alpha]$
    $B_\alpha = [0+\alpha, 2-\alpha] = [\alpha, 2-\alpha]$
    Calculate $C = A / B$ using the $\alpha$-cut method. What is $C_\alpha$?

---

## 5. Answers to Practice Questions

1.  We need to find $\mu_C(8) = \sup_{x \in A, y \in B \text{ s.t. } x+y=8} \{ \min(\mu_A(x), \mu_B(y)) \}$.
    Possible $(x, y)$ pairs summing to 8:
    *   $x=1, y=7$: $\min(\mu_A(1), \mu_B(7)) = \min(0.2, 1.0) = 0.2$.
    *   $x=2, y=6$: $\min(\mu_A(2), \mu_B(6)) = \min(0.7, 0.8) = 0.7$.
    *   $x=3, y=5$: $\min(\mu_A(3), \mu_B(5)) = \min(1.0, 0.3) = 0.3$.
    (Note: $x=4$ doesn't pair with any $y$ in $B$ to sum to 8).
    $\mu_C(8) = \sup \{0.2, 0.7, 0.3\} = 0.7$.

2.  $A = (2, 5, 8)$.
    a) Membership function:
    $\mu_A(x) = \begin{cases}
    0 & \text{if } x < 2 \\
    (x-2)/(5-2) = (x-2)/3 & \text{if } 2 \le x \le 5 \\
    (8-x)/(8-5) = (8-x)/3 & \text{if } 5 < x \le 8 \\
    0 & \text{if } x > 8
    \end{cases}$
    b) $\alpha$-cut $A_\alpha$:
    For $a_\alpha$: $(x-2)/3 = \alpha \implies x-2 = 3\alpha \implies x = 2+3\alpha$. So, $a_\alpha = 2+3\alpha$.
    For $b_\alpha$: $(8-x)/3 = \alpha \implies 8-x = 3\alpha \implies x = 8-3\alpha$. So, $b_\alpha = 8-3\alpha$.
    $A_\alpha = [2+3\alpha, 8-3\alpha]$ for $\alpha \in (0, 1]$.

    c) $A_{0.5}$: Substitute $\alpha = 0.5$ into $A_\alpha$.
    $A_{0.5} = [2+3(0.5), 8-3(0.5)] = [2+1.5, 8-1.5] = [3.5, 6.5]$.

3.  $A = (1, 3, 5)$, $B = (2, 4, 6)$.
    $A_\alpha = [1+\alpha(3-1), 5-\alpha(5-3)] = [1+2\alpha, 5-2\alpha]$
    $B_\alpha = [2+\alpha(4-2), 6-\alpha(6-4)] = [2+2\alpha, 6-2\alpha]$

    $C_\alpha = A_\alpha + B_\alpha = [(1+2\alpha) + (2+2\alpha), (5-2\alpha) + (6-2\alpha)]$
    $C_\alpha = [3+4\alpha, 11-4\alpha]$

    To express as a TFN $(p, q, r)$:
    $p+\alpha(q-p) = 3+4\alpha \implies p=3, q=3+4=7$.
    $r-\alpha(r-q) = 11-4\alpha \implies r=11, q=11-4=7$.
    So, $A+B = (3, 7, 11)$.

4.  $A = (1, 3, 5)$, $B = (2, 4, 6)$.
    $A_\alpha = [1+2\alpha, 5-2\alpha]$
    $B_\alpha = [2+2\alpha, 6-2\alpha]$

    a) $C_\alpha = A_\alpha - B_\alpha = [(1+2\alpha) - (6-2\alpha), (5-2\alpha) - (2+2\alpha)]$
    $C_\alpha = [1+2\alpha-6+2\alpha, 5-2\alpha-2-2\alpha]$
    $C_\alpha = [-5+4\alpha, 3-4\alpha]$

    To express as a TFN $(p, q, r)$:
    $p+\alpha(q-p) = -5+4\alpha \implies p=-5, q=-5+4=-1$.
    $r-\alpha(r-q) = 3-4\alpha \implies r=3, q=3-4=-1$.
    So, $A-B = (-5, -1, 3)$.

    b) Potential issues with direct subtraction:
    *   The resulting $\alpha$-cuts might not form a TFN (or other simple fuzzy number representation) as the upper and lower bounds might not be linear in $\alpha$ with the same slope.
    *   The "center" of the interval ($a_\alpha$ and $b_\alpha$) might not behave as expected. For instance, in $A-B$, the lower bound increases with $\alpha$, and the upper bound decreases with $\alpha$, which is correct for this operation, but sometimes this can lead to non-convexity if not handled carefully.

5.  $A_\alpha = [1+\alpha, 3-\alpha]$
    $B_\alpha = [\alpha, 2-\alpha]$
    We assume $B$ is strictly positive for division. $B_0 = [0, 2]$. Since $0 \in B_0$, division by $B$ might be problematic if not handled by assuming $B$ has a strictly positive support. If we proceed, we must ensure $0 \notin B_\alpha$ for any $\alpha$. $B_\alpha$ is $[\alpha, 2-\alpha]$. For $\alpha=1$, $B_1=[1,1]$. For $\alpha=0$, $B_0=[0,2]$. If we restrict $\alpha$ to $(0,1]$, then $0 \notin B_\alpha$ for $\alpha > 0$. Let's proceed with $\alpha \in (0, 1]$.

    $C_\alpha = A_\alpha / B_\alpha = [1+\alpha, 3-\alpha] / [\alpha, 2-\alpha]$
    The four endpoints are:
    1.  $(1+\alpha) / \alpha$
    2.  $(1+\alpha) / (2-\alpha)$
    3.  $(3-\alpha) / \alpha$
    4.  $(3-\alpha) / (2-\alpha)$

    Let's analyze these for $\alpha \in (0, 1]$.
    *   As $\alpha \to 0^+$, $(1+\alpha)/\alpha \to +\infty$. This indicates the lower bound of the result tends to infinity, suggesting the approximation or the operation might be problematic for fuzzy numbers that cross zero or have zero in their support.
    *   Let's check $\alpha=0.5$:
        $A_{0.5} = [1.5, 2.5]$
        $B_{0.5} = [0.5, 1.5]$
        Quotients: $1.5/0.5 = 3$, $1.5/1.5 = 1$, $2.5/0.5 = 5$, $2.5/1.5 \approx 1.67$.
        $C_{0.5} = [\min(3, 1, 5, 1.67), \max(3, 1, 5, 1.67)] = [1, 5]$.

    *   Let's check $\alpha=1$:
        $A_1 = [2, 2]$
        $B_1 = [1, 1]$
        Quotient: $2/1 = 2$.
        $C_1 = [2, 2]$.

    The $\alpha$-cut $C_\alpha$ is defined by finding the minimum and maximum of these four expressions over the interval $\alpha \in (0, 1]$. This is complex. For example, the minimum of $(1+\alpha)/\alpha$ over $(0,1]$ is not defined (approaches 1 as $\alpha \to 1$).

    **Formal Answer for $C_\alpha$:**
    $C_\alpha = \left[ \min \left( \frac{1+\alpha}{\alpha}, \frac{1+\alpha}{2-\alpha}, \frac{3-\alpha}{\alpha}, \frac{3-\alpha}{2-\alpha} \right), \max \left( \frac{1+\alpha}{\alpha}, \frac{1+\alpha}{2-\alpha}, \frac{3-\alpha}{\alpha}, \frac{3-\alpha}{2-\alpha} \right) \right]$ for $\alpha \in (0, 1]$.

    **Note:** Division is the most complex operation. Often, specialized fuzzy number types (like positive fuzzy numbers) are assumed to simplify calculations, or approximations are used.

---

## 6. Important Points to Remember

*   The Extension Principle is the theoretical foundation for fuzzy arithmetic.
*   $\alpha$-cuts provide a practical way to compute fuzzy arithmetic operations by reducing them to interval arithmetic.
*   Addition and subtraction of fuzzy numbers (represented by TFNs) generally result in fuzzy numbers of the same type.
*   Multiplication and division of fuzzy numbers, especially TFNs, often result in fuzzy numbers that are no longer of the same type (e.g., not triangular) and can be computationally challenging to characterize precisely. Approximations are common in practice.
*   Care must be taken with operations involving division by fuzzy numbers, particularly when the denominator might be zero.

---
This concludes Module 2 on Fuzzy Relations, focusing on the Extension Principle and Fuzzy Arithmetic.
