---
title: "Marginal pdf"
subject: "MATHEMATICS FOR PHYSICAL SCIENCE – 4"
module: "Module 2: Continuous random variables and their probability distributions"
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf4804462ec4"
status: "completed"
scrapedAt: "2026-05-20T17:54:43.217Z"
---
# MATHEMATICS FOR PHYSICAL SCIENCE – 4

## Module 2: Continuous Random Variables and Their Probability Distributions

### Topic: Marginal Probability Density Function (pdf)

**Learning Outcomes:**

*   Understand the concept of marginal probability density functions (pdf) for continuous random variables.
*   Learn how to derive marginal pdfs from a joint pdf.
*   Apply the concept of marginal pdfs in various physical science contexts.
*   Recognize the relationship between joint, marginal, and conditional pdfs.

---

### 1. Introduction to Joint and Marginal pdfs

When we deal with more than one random variable, we are interested in their *joint* behavior. For continuous random variables, this is described by a joint probability density function (pdf). The marginal pdf then helps us understand the behavior of a single random variable, ignoring the influence of the others.

**Key Concepts & Definitions:**

*   **Joint Probability Density Function (pdf) for Continuous Random Variables:**
    For two continuous random variables $X$ and $Y$, their joint pdf, denoted by $f_{XY}(x, y)$, is a non-negative function such that for any region $A$ in the $xy$-plane:
    $$P((X, Y) \in A) = \iint_A f_{XY}(x, y) \,dx\,dy$$
    The total probability must be 1, meaning:
    $$\iint_{-\infty}^{\infty} \int_{-\infty}^{\infty} f_{XY}(x, y) \,dx\,dy = 1$$

    *Reference: Devore J. L., Chapter 4.5*

*   **Marginal Probability Density Function (pdf):**
    Given a joint pdf $f_{XY}(x, y)$ for random variables $X$ and $Y$, the marginal pdf of $X$, denoted by $f_X(x)$, is obtained by integrating the joint pdf with respect to $Y$ over its entire range:
    $$f_X(x) = \int_{-\infty}^{\infty} f_{XY}(x, y) \,dy$$
    Similarly, the marginal pdf of $Y$, denoted by $f_Y(y)$, is obtained by integrating the joint pdf with respect to $X$ over its entire range:
    $$f_Y(y) = \int_{-\infty}^{\infty} f_{XY}(x, y) \,dx$$

    *Reference: Devore J. L., Chapter 4.5*

**Why are marginal pdfs important?**

Marginal pdfs allow us to analyze the distribution of individual random variables within a multivariate system, without needing to consider the complexity of their interactions. This is crucial in many physical science applications where we might be interested in the distribution of a single parameter, even if it's influenced by other factors.

---

### 2. Deriving Marginal pdfs

The process of finding marginal pdfs involves integration. The limits of integration are determined by the support of the joint distribution.

**Steps to Derive Marginal pdfs:**

1.  **Identify the Joint pdf:** Start with the given joint pdf, $f_{XY}(x, y)$.
2.  **Determine the Support:** Understand the region in the $xy$-plane where $f_{XY}(x, y) > 0$. This will define the limits of integration.
3.  **Integrate out the Other Variable:**
    *   To find $f_X(x)$, integrate $f_{XY}(x, y)$ with respect to $y$, keeping $x$ constant. The limits for $y$ will be determined by the support of the joint distribution for a fixed $x$.
    *   To find $f_Y(y)$, integrate $f_{XY}(x, y)$ with respect to $x$, keeping $y$ constant. The limits for $x$ will be determined by the support of the joint distribution for a fixed $y$.

**Important Points to Remember:**

*   The marginal pdfs must also be non-negative and integrate to 1 over their respective ranges.
*   The support of the marginal pdf $f_X(x)$ is the set of all $x$ values for which there exists some $y$ such that $f_{XY}(x, y) > 0$.

---

### 3. Examples in Physical Sciences

Let's illustrate with some examples.

**Example 1: Uniform Distribution over a Region**

Suppose the joint pdf of two random variables $X$ and $Y$ (representing, for instance, the coordinates of a particle's position within a specific boundary) is given by:
$$f_{XY}(x, y) = \begin{cases} c & \text{if } 0 \le x \le 1, 0 \le y \le 2 \\ 0 & \text{otherwise} \end{cases}$$

First, let's find the constant $c$. The integral of the joint pdf over its support must be 1:
$$\int_0^2 \int_0^1 c \,dx\,dy = 1$$
$$c \int_0^2 \left[ x \right]_0^1 \,dy = 1$$
$$c \int_0^2 1 \,dy = 1$$
$$c [y]_0^2 = 1$$
$$2c = 1 \implies c = \frac{1}{2}$$

So, the joint pdf is:
$$f_{XY}(x, y) = \begin{cases} \frac{1}{2} & \text{if } 0 \le x \le 1, 0 \le y \le 2 \\ 0 & \text{otherwise} \end{cases}$$

Now, let's find the marginal pdfs:

**Marginal pdf of X:**
$$f_X(x) = \int_{-\infty}^{\infty} f_{XY}(x, y) \,dy$$
For a fixed $x$ between 0 and 1, $y$ ranges from 0 to 2.
$$f_X(x) = \int_0^2 \frac{1}{2} \,dy = \frac{1}{2} [y]_0^2 = \frac{1}{2} (2 - 0) = 1$$
So, $f_X(x) = 1$ for $0 \le x \le 1$, and 0 otherwise. This is a uniform distribution on $[0, 1]$.

**Marginal pdf of Y:**
$$f_Y(y) = \int_{-\infty}^{\infty} f_{XY}(x, y) \,dx$$
For a fixed $y$ between 0 and 2, $x$ ranges from 0 to 1.
$$f_Y(y) = \int_0^1 \frac{1}{2} \,dx = \frac{1}{2} [x]_0^1 = \frac{1}{2} (1 - 0) = \frac{1}{2}$$
So, $f_Y(y) = \frac{1}{2}$ for $0 \le y \le 2$, and 0 otherwise. This is a uniform distribution on $[0, 2]$.

*This example demonstrates how marginal pdfs can simplify the analysis of individual variables when their joint behavior is known.*

**Example 2: Exponentially Distributed Variables (Physical Science Context: Radioactive Decay)**

Consider two independent random variables $T_1$ and $T_2$ representing the lifetimes of two radioactive particles. Let their lifetimes follow exponential distributions with rates $\lambda_1$ and $\lambda_2$, respectively. Their joint pdf is $f_{T_1T_2}(t_1, t_2) = \lambda_1 e^{-\lambda_1 t_1} \lambda_2 e^{-\lambda_2 t_2}$ for $t_1 \ge 0, t_2 \ge 0$.

However, we might be interested in the distribution of the *total time* until both particles decay, $T = T_1 + T_2$. This requires a different approach, but if we are given a joint pdf for $T_1$ and $T_2$, we can find their marginals.

Let's consider a slightly different scenario. Suppose the joint pdf of the time $T_1$ of the first decay and the time $T_2$ of the second decay is given by:
$$f_{T_1 T_2}(t_1, t_2) = \begin{cases} \lambda^2 e^{-\lambda (t_1+t_2)} & \text{if } 0 \le t_1 \le t_2 \\ 0 & \text{otherwise} \end{cases}$$
This might represent a situation where the second event can only occur after the first.

**Marginal pdf of $T_1$:**
$$f_{T_1}(t_1) = \int_{-\infty}^{\infty} f_{T_1 T_2}(t_1, t_2) \,dt_2$$
For a fixed $t_1 \ge 0$, $t_2$ ranges from $t_1$ to $\infty$.
$$f_{T_1}(t_1) = \int_{t_1}^{\infty} \lambda^2 e^{-\lambda (t_1+t_2)} \,dt_2$$
$$f_{T_1}(t_1) = \lambda^2 e^{-\lambda t_1} \int_{t_1}^{\infty} e^{-\lambda t_2} \,dt_2$$
$$f_{T_1}(t_1) = \lambda^2 e^{-\lambda t_1} \left[ \frac{e^{-\lambda t_2}}{-\lambda} \right]_{t_1}^{\infty}$$
$$f_{T_1}(t_1) = \lambda^2 e^{-\lambda t_1} \left( 0 - \frac{e^{-\lambda t_1}}{-\lambda} \right)$$
$$f_{T_1}(t_1) = \lambda^2 e^{-\lambda t_1} \left( \frac{e^{-\lambda t_1}}{\lambda} \right) = \lambda e^{-2\lambda t_1}$$
So, $f_{T_1}(t_1) = \lambda e^{-2\lambda t_1}$ for $t_1 \ge 0$.

**Marginal pdf of $T_2$:**
$$f_{T_2}(t_2) = \int_{-\infty}^{\infty} f_{T_1 T_2}(t_1, t_2) \,dt_1$$
For a fixed $t_2 \ge 0$, $t_1$ ranges from 0 to $t_2$.
$$f_{T_2}(t_2) = \int_0^{t_2} \lambda^2 e^{-\lambda (t_1+t_2)} \,dt_1$$
$$f_{T_2}(t_2) = \lambda^2 e^{-\lambda t_2} \int_0^{t_2} e^{-\lambda t_1} \,dt_1$$
$$f_{T_2}(t_2) = \lambda^2 e^{-\lambda t_2} \left[ \frac{e^{-\lambda t_1}}{-\lambda} \right]_0^{t_2}$$
$$f_{T_2}(t_2) = \lambda^2 e^{-\lambda t_2} \left( \frac{e^{-\lambda t_2}}{-\lambda} - \frac{e^0}{-\lambda} \right)$$
$$f_{T_2}(t_2) = \lambda^2 e^{-\lambda t_2} \left( \frac{e^{-\lambda t_2}}{-\lambda} + \frac{1}{\lambda} \right)$$
$$f_{T_2}(t_2) = -\lambda e^{-2\lambda t_2} + \lambda e^{-\lambda t_2} = \lambda e^{-\lambda t_2} (1 - e^{-\lambda t_2})$$
So, $f_{T_2}(t_2) = \lambda e^{-\lambda t_2} - \lambda e^{-2\lambda t_2}$ for $t_2 \ge 0$.

*This example shows how to handle integration over non-trivial limits defined by the relationship between variables.*

---

### 4. Relationship with Conditional pdfs

Marginal pdfs are foundational for understanding conditional probability distributions.

**Key Concepts & Definitions:**

*   **Conditional Probability Density Function (pdf):**
    Given the joint pdf $f_{XY}(x, y)$, the conditional pdf of $Y$ given $X=x$ is defined as:
    $$f_{Y|X}(y|x) = \frac{f_{XY}(x, y)}{f_X(x)} \quad \text{if } f_X(x) > 0$$
    Similarly, the conditional pdf of $X$ given $Y=y$ is:
    $$f_{X|Y}(x|y) = \frac{f_{XY}(x, y)}{f_Y(y)} \quad \text{if } f_Y(y) > 0$$

    *Reference: Devore J. L., Chapter 4.6*

**Relationship:**
The formula for conditional pdfs clearly shows that the joint pdf can be expressed as:
$$f_{XY}(x, y) = f_{Y|X}(y|x) f_X(x)$$
$$f_{XY}(x, y) = f_{X|Y}(x|y) f_Y(y)$$

This implies that we can obtain the joint pdf by multiplying a marginal pdf by a conditional pdf. Conversely, if we have the joint pdf, we can derive both marginal and conditional pdfs.

**Connection to Independence:**
If $X$ and $Y$ are independent continuous random variables, then their joint pdf is the product of their marginal pdfs: $f_{XY}(x, y) = f_X(x) f_Y(y)$. In this case, the conditional pdfs are equal to the marginal pdfs:
$$f_{Y|X}(y|x) = \frac{f_X(x) f_Y(y)}{f_X(x)} = f_Y(y)$$
$$f_{X|Y}(x|y) = \frac{f_X(x) f_Y(y)}{f_Y(y)} = f_X(x)$$

*Understanding marginal pdfs is crucial for defining and working with conditional distributions, which are vital for modeling cause-and-effect or sequential relationships between variables.*

---

### 5. Practice Questions and Exercises

**Question 1:**
Let the joint pdf of two continuous random variables $X$ and $Y$ be given by:
$$f_{XY}(x, y) = \begin{cases} 6xy^2 & \text{if } 0 \le x \le 1, 0 \le y \le 1 \\ 0 & \text{otherwise} \end{cases}$$
Find the marginal pdfs $f_X(x)$ and $f_Y(y)$.

**Solution 1:**
**Marginal pdf of X:**
$$f_X(x) = \int_{-\infty}^{\infty} f_{XY}(x, y) \,dy$$
For $0 \le x \le 1$, $y$ ranges from 0 to 1.
$$f_X(x) = \int_0^1 6xy^2 \,dy = 6x \left[ \frac{y^3}{3} \right]_0^1 = 6x \left( \frac{1^3}{3} - 0 \right) = 6x \left( \frac{1}{3} \right) = 2x$$
So, $f_X(x) = 2x$ for $0 \le x \le 1$, and 0 otherwise.

**Marginal pdf of Y:**
$$f_Y(y) = \int_{-\infty}^{\infty} f_{XY}(x, y) \,dx$$
For $0 \le y \le 1$, $x$ ranges from 0 to 1.
$$f_Y(y) = \int_0^1 6xy^2 \,dx = 6y^2 \left[ \frac{x^2}{2} \right]_0^1 = 6y^2 \left( \frac{1^2}{2} - 0 \right) = 6y^2 \left( \frac{1}{2} \right) = 3y^2$$
So, $f_Y(y) = 3y^2$ for $0 \le y \le 1$, and 0 otherwise.

---

**Question 2:**
The joint pdf of the position $(X, Y)$ of a particle is given by:
$$f_{XY}(x, y) = \begin{cases} \frac{1}{\pi} & \text{if } x^2 + y^2 \le 1 \\ 0 & \text{otherwise} \end{cases}$$
This describes a particle uniformly distributed within a unit circle. Find the marginal pdfs $f_X(x)$ and $f_Y(y)$.

**Solution 2:**
This involves integration over a circular region, which is best done using polar coordinates. However, for the marginals, we can integrate in Cartesian coordinates.

**Marginal pdf of X:**
$$f_X(x) = \int_{-\infty}^{\infty} f_{XY}(x, y) \,dy$$
For a fixed $x$ such that $-1 \le x \le 1$, the possible values of $y$ are constrained by $x^2 + y^2 \le 1$, which means $-\sqrt{1-x^2} \le y \le \sqrt{1-x^2}$.
$$f_X(x) = \int_{-\sqrt{1-x^2}}^{\sqrt{1-x^2}} \frac{1}{\pi} \,dy$$
$$f_X(x) = \frac{1}{\pi} [y]_{-\sqrt{1-x^2}}^{\sqrt{1-x^2}} = \frac{1}{\pi} (\sqrt{1-x^2} - (-\sqrt{1-x^2})) = \frac{2}{\pi} \sqrt{1-x^2}$$
So, $f_X(x) = \frac{2}{\pi} \sqrt{1-x^2}$ for $-1 \le x \le 1$, and 0 otherwise. This is the pdf of the arcsine distribution.

**Marginal pdf of Y:**
By symmetry of the circular region, the marginal pdf of $Y$ will be the same as that of $X$.
$$f_Y(y) = \frac{2}{\pi} \sqrt{1-y^2} \quad \text{for } -1 \le y \le 1$$

*This example requires careful consideration of integration limits based on the geometry of the joint distribution.*

---

**Question 3 (Conceptual):**
If two continuous random variables $X$ and $Y$ are independent, how does their joint pdf relate to their marginal pdfs? What does this imply about the conditional pdfs?

**Solution 3:**
If $X$ and $Y$ are independent, their joint pdf is the product of their marginal pdfs: $f_{XY}(x, y) = f_X(x) f_Y(y)$.
This implies that the conditional pdfs are equal to the marginal pdfs:
$f_{Y|X}(y|x) = \frac{f_{XY}(x, y)}{f_X(x)} = \frac{f_X(x) f_Y(y)}{f_X(x)} = f_Y(y)$.
Similarly, $f_{X|Y}(x|y) = f_X(x)$.
In essence, knowing the value of one variable provides no information about the distribution of the other.

---

### 6. Important Points to Remember

*   **Integration is Key:** Finding marginal pdfs from a joint pdf involves integration.
*   **Limits Matter:** The limits of integration for the marginal pdfs are determined by the support of the joint pdf.
*   **Marginal $\neq$ Joint:** A marginal pdf describes a single variable, while a joint pdf describes the behavior of multiple variables together.
*   **Independence Simplifies:** For independent variables, $f_{XY}(x, y) = f_X(x) f_Y(y)$, and marginals equal conditionals.
*   **Validation:** Always check that your derived marginal pdfs are non-negative and integrate to 1.
*   **Applications:** Marginal pdfs are fundamental for understanding and modeling individual components of systems described by multivariate distributions in physics, engineering, and other sciences. For instance, analyzing the distribution of a specific force or flux, even when it's part of a larger system with interacting forces.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=p_di4ateumM) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=tyDKR4FG3Yw) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=S0hG_mS9bV4) |


### 7. Textbook and Reference Material Integration

*   **Devore J. L.:** This text provides the foundational definitions and examples of joint and marginal pdfs for continuous random variables in Chapter 4. The examples and practice problems in this module are consistent with the approach taken in Devore's book.
*   **Papoulis & Pillai:** For a more in-depth treatment of probability distributions in the context of stochastic processes, Papoulis and Pillai's book offers advanced perspectives that build upon the concepts of marginal pdfs.
*   **Ross S. M.:** Ross's book offers similar coverage of these topics, often with a strong emphasis on applications in engineering and problem-solving strategies.
*   **Sastry S. S.:** While Sastry's book focuses on numerical analysis, the integration techniques required to compute marginal pdfs are directly applicable. Understanding how to approximate these integrals numerically (as discussed in Sastry) can be a useful skill if analytical integration is challenging.
*   **Chapra & Canale:** Similar to Sastry, Chapra and Canale's "Numerical Methods for Engineers" is highly relevant when analytical integration of complex joint pdfs is not feasible. Techniques like numerical integration (e.g., trapezoidal rule, Simpson's rule) can be employed to approximate marginal pdfs.

---

### Alignment with Course Outcomes

*   **CO1 (Discrete RVs):** While this module focuses on continuous RVs, the underlying concept of understanding distributions and their properties is shared. This module complements CO1 by building a similar understanding for continuous cases.
*   **CO2 (Continuous RVs):** This module directly addresses CO2 by explaining the concept and properties of continuous random variables, specifically through the lens of marginal pdfs derived from joint distributions. The examples provided help in applying these concepts to random phenomena.
*   **CO3 (Estimation & Hypothesis Testing):** Understanding marginal distributions is a precursor to statistical inference. Knowing the distribution of individual variables (via marginals) is essential for estimating population parameters and performing hypothesis tests on those parameters.
*   **CO4 (Numerical Methods):** The ability to integrate, both analytically and numerically, is critical for working with continuous probability distributions. When analytical integration for marginal pdfs becomes difficult, numerical methods become indispensable, directly linking to CO4.

---