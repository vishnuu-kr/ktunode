---
title: "Joint pmf of two discrete random variables"
subject: "MATHEMATICS FOR COMPUTER AND INFORMATION SCIENCE-3"
module: "Module 1: Random variables"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ab46"
status: "completed"
scrapedAt: "2026-05-20T16:25:55.608Z"
---
# MATHEMATICS FOR COMPUTER AND INFORMATION SCIENCE-3
## Module 1: Random Variables
### Topic: Joint pmf of Two Discrete Random Variables

**Learning Outcomes:**

*   Understand the concept of a joint probability mass function (pmf) for two discrete random variables.
*   Calculate probabilities of events involving two discrete random variables using the joint pmf.
*   Determine marginal pmfs from a joint pmf.
*   Determine if two discrete random variables are independent using their joint and marginal pmfs.
*   Compute expected values involving functions of two discrete random variables using their joint pmf.

---

**1. Key Concepts and Definitions**

*   **Random Variable:** A variable whose value is a numerical outcome of a random phenomenon.  We distinguish between discrete and continuous random variables.  A discrete random variable can only take a finite number of values or a countably infinite number of values.

*   **Joint Probability Mass Function (pmf):** For two discrete random variables *X* and *Y*, the joint pmf, denoted by *p(x, y)*, is the probability that *X* takes the value *x* and *Y* takes the value *y* simultaneously.

    *   Mathematically:  *p(x, y) = P(X = x, Y = y)*

*   **Properties of a Joint pmf:**

    *   *0 ≤ p(x, y) ≤ 1* for all *x* and *y*.  Probabilities must be between 0 and 1 inclusive.
    *   *∑<sub>x</sub> ∑<sub>y</sub> p(x, y) = 1*.  The sum of all probabilities over all possible values of *x* and *y* must equal 1.

*   **Marginal pmfs:**  The marginal pmf of a single variable *X* or *Y* can be derived from the joint pmf. They represent the probability distribution of that single variable, irrespective of the value of the other variable.

    *   Marginal pmf of *X*:  *p<sub>X</sub>(x) = ∑<sub>y</sub> p(x, y)*
    *   Marginal pmf of *Y*:  *p<sub>Y</sub>(y) = ∑<sub>x</sub> p(x, y)*

*   **Independence of Random Variables:** Two discrete random variables *X* and *Y* are independent if and only if:

    *   *p(x, y) = p<sub>X</sub>(x) * p<sub>Y</sub>(y)* for all possible values of *x* and *y*.  If this condition holds, knowing the value of one variable does not influence the probability distribution of the other.

*   **Expected Value of a Function of Two Random Variables:** If *g(X, Y)* is a function of two discrete random variables *X* and *Y*, then the expected value of *g(X, Y)* is:

    *   *E[g(X, Y)] = ∑<sub>x</sub> ∑<sub>y</sub> g(x, y) * p(x, y)*

---

**2. Calculating Probabilities Using the Joint pmf**

*   To find the probability of an event involving *X* and *Y*, sum the joint pmf values over the region of the (x, y) plane that defines the event.

    *   For example, to find *P(a ≤ X ≤ b, c ≤ Y ≤ d)*:
        *   *P(a ≤ X ≤ b, c ≤ Y ≤ d) = ∑<sub>x=a</sub><sup>b</sup> ∑<sub>y=c</sub><sup>d</sup> p(x, y)*

---

**3. Examples**

**Example 1:  Rolling Two Dice**

Let *X* be the outcome of the first die, and *Y* be the outcome of the second die. Assume both are fair, six-sided dice.

*   **Joint pmf:** *p(x, y) = 1/36* for *x, y ∈ {1, 2, 3, 4, 5, 6}*.
*   **Marginal pmf of X:** *p<sub>X</sub>(x) = ∑<sub>y=1</sub><sup>6</sup> (1/36) = 6/36 = 1/6* for *x ∈ {1, 2, 3, 4, 5, 6}*.
*   **Marginal pmf of Y:** *p<sub>Y</sub>(y) = ∑<sub>x=1</sub><sup>6</sup> (1/36) = 6/36 = 1/6* for *y ∈ {1, 2, 3, 4, 5, 6}*.
*   **Independence:** Since *p(x, y) = (1/36) = (1/6) * (1/6) = p<sub>X</sub>(x) * p<sub>Y</sub>(y)*, *X* and *Y* are independent.
*   **Probability Calculation:**  *P(X + Y = 7)*. This corresponds to the pairs (1, 6), (2, 5), (3, 4), (4, 3), (5, 2), (6, 1).
    *   *P(X + Y = 7) = p(1, 6) + p(2, 5) + p(3, 4) + p(4, 3) + p(5, 2) + p(6, 1) = 6 * (1/36) = 1/6*

**Example 2: A Bivariate Distribution**

Consider two discrete random variables *X* and *Y* with the following joint pmf:

|       | Y = 0 | Y = 1 | Y = 2 |
| :---- | :---- | :---- | :---- |
| **X = 0** | 0.1   | 0.2   | 0.1   |
| **X = 1** | 0.2   | 0.3   | 0.1   |

*   **Verify it's a valid pmf:** Sum of all probabilities = 0.1 + 0.2 + 0.1 + 0.2 + 0.3 + 0.1 = 1.
*   **Marginal pmf of X:**
    *   *p<sub>X</sub>(0) = p(0, 0) + p(0, 1) + p(0, 2) = 0.1 + 0.2 + 0.1 = 0.4*
    *   *p<sub>X</sub>(1) = p(1, 0) + p(1, 1) + p(1, 2) = 0.2 + 0.3 + 0.1 = 0.6*
*   **Marginal pmf of Y:**
    *   *p<sub>Y</sub>(0) = p(0, 0) + p(1, 0) = 0.1 + 0.2 = 0.3*
    *   *p<sub>Y</sub>(1) = p(0, 1) + p(1, 1) = 0.2 + 0.3 = 0.5*
    *   *p<sub>Y</sub>(2) = p(0, 2) + p(1, 2) = 0.1 + 0.1 = 0.2*
*   **Independence:** Check if *p(x, y) = p<sub>X</sub>(x) * p<sub>Y</sub>(y)* for all x and y.  For instance:
    *   *p(0, 0) = 0.1*
    *   *p<sub>X</sub>(0) * p<sub>Y</sub>(0) = 0.4 * 0.3 = 0.12*
    *   Since 0.1 ≠ 0.12, *X* and *Y* are **not** independent.
*   **Probability Calculation:**  *P(X + Y ≤ 1)*.  This corresponds to the pairs (0, 0), (0, 1), (1, 0).
    *   *P(X + Y ≤ 1) = p(0, 0) + p(0, 1) + p(1, 0) = 0.1 + 0.2 + 0.2 = 0.5*
*   **Expected Value:**  Let *g(X, Y) = X * Y*.  Then,

    *   *E[X * Y] = (0 * 0 * 0.1) + (0 * 1 * 0.2) + (0 * 2 * 0.1) + (1 * 0 * 0.2) + (1 * 1 * 0.3) + (1 * 2 * 0.1) = 0 + 0 + 0 + 0 + 0.3 + 0.2 = 0.5*

---

**4. Practice Questions/Exercises**

**Question 1:**

Two fair coins are flipped. Let *X* be the number of heads on the first coin, and *Y* be the number of heads on the second coin.

(a)  Find the joint pmf *p(x, y)*.
(b)  Find the marginal pmfs *p<sub>X</sub>(x)* and *p<sub>Y</sub>(y)*.
(c)  Are *X* and *Y* independent?
(d)  Compute *P(X + Y = 1)*.
(e)  Compute *E[X + Y]*.

**Question 2:**

Suppose two random variables *X* and *Y* have the following joint pmf:

|       | Y = 1 | Y = 2 | Y = 3 |
| :---- | :---- | :---- | :---- |
| **X = 1** | 0.1   | 0.2   | 0.1   |
| **X = 2** | 0.2   | 0.1   | 0.3   |

(a)  Find the marginal pmfs *p<sub>X</sub>(x)* and *p<sub>Y</sub>(y)*.
(b)  Are *X* and *Y* independent?
(c)  Compute *P(X > Y)*.
(d)  Compute *E[X * Y]*.

---

**5. Solutions to Practice Questions**

**Question 1 Solution:**

(a)  Possible values for *X* and *Y* are {0, 1}.  Since the coins are fair, each outcome (HH, HT, TH, TT) has probability 1/4.

    *   *p(0, 0) = P(X = 0, Y = 0) = P(TT) = 1/4*
    *   *p(0, 1) = P(X = 0, Y = 1) = P(TH) = 1/4*
    *   *p(1, 0) = P(X = 1, Y = 0) = P(HT) = 1/4*
    *   *p(1, 1) = P(X = 1, Y = 1) = P(HH) = 1/4*

(b)  Marginal pmfs:

    *   *p<sub>X</sub>(0) = p(0, 0) + p(0, 1) = 1/4 + 1/4 = 1/2*
    *   *p<sub>X</sub>(1) = p(1, 0) + p(1, 1) = 1/4 + 1/4 = 1/2*
    *   *p<sub>Y</sub>(0) = p(0, 0) + p(1, 0) = 1/4 + 1/4 = 1/2*
    *   *p<sub>Y</sub>(1) = p(0, 1) + p(1, 1) = 1/4 + 1/4 = 1/2*

(c)  Independence:  *p(x, y) = p<sub>X</sub>(x) * p<sub>Y</sub>(y)* for all x, y.

    *   For example: *p(0, 0) = 1/4* and *p<sub>X</sub>(0) * p<sub>Y</sub>(0) = (1/2) * (1/2) = 1/4*.
    *   Since this holds for all values, *X* and *Y* are independent.

(d)  *P(X + Y = 1) = p(0, 1) + p(1, 0) = 1/4 + 1/4 = 1/2*

(e)  *E[X + Y] = (0 + 0) * (1/4) + (0 + 1) * (1/4) + (1 + 0) * (1/4) + (1 + 1) * (1/4) = 0 + 1/4 + 1/4 + 2/4 = 1*

**Question 2 Solution:**

(a) Marginal pmfs:

    *   *p<sub>X</sub>(1) = p(1, 1) + p(1, 2) + p(1, 3) = 0.1 + 0.2 + 0.1 = 0.4*
    *   *p<sub>X</sub>(2) = p(2, 1) + p(2, 2) + p(2, 3) = 0.2 + 0.1 + 0.3 = 0.6*

    *   *p<sub>Y</sub>(1) = p(1, 1) + p(2, 1) = 0.1 + 0.2 = 0.3*
    *   *p<sub>Y</sub>(2) = p(1, 2) + p(2, 2) = 0.2 + 0.1 = 0.3*
    *   *p<sub>Y</sub>(3) = p(1, 3) + p(2, 3) = 0.1 + 0.3 = 0.4*

(b)  Independence: Check if *p(x, y) = p<sub>X</sub>(x) * p<sub>Y</sub>(y)* for all x and y.

    *   For instance: *p(1, 1) = 0.1*
    *   *p<sub>X</sub>(1) * p<sub>Y</sub>(1) = 0.4 * 0.3 = 0.12*
    *   Since 0.1 ≠ 0.12, *X* and *Y* are **not** independent.

(c)  *P(X > Y)* corresponds to the pairs (2, 1).
    *   *P(X > Y) = p(2, 1) = 0.2*

(d)  *E[X * Y] = (1 * 1 * 0.1) + (1 * 2 * 0.2) + (1 * 3 * 0.1) + (2 * 1 * 0.2) + (2 * 2 * 0.1) + (2 * 3 * 0.3) = 0.1 + 0.4 + 0.3 + 0.4 + 0.4 + 1.8 = 3.4*

---

**6. Important Points to Remember**

*   Always verify that the joint pmf sums to 1.
*   Independence is a crucial concept. Make sure you understand the condition *p(x, y) = p<sub>X</sub>(x) * p<sub>Y</sub>(y)*.
*   Be careful when calculating probabilities – ensure you are summing over the correct region of the (x, y) plane.
*   The joint pmf provides a complete description of the relationship between two discrete random variables.
