---
title: "Marginal pmf"
subject: "MATHEMATICS FOR COMPUTER AND INFORMATION SCIENCE-3"
module: "Module 1: Random variables"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ab47"
status: "completed"
scrapedAt: "2026-05-20T16:25:56.322Z"
---
# MATHEMATICS FOR COMPUTER AND INFORMATION SCIENCE-3
## Module 1: Random Variables
### Topic: Marginal pmf

**Learning Outcomes:**

*   Understand the concept of a joint probability mass function (pmf).
*   Define marginal probability mass function (pmf) and differentiate it from joint pmf.
*   Calculate the marginal pmf of a random variable from a joint pmf.
*   Apply marginal pmf to solve probabilistic problems.

---

**1. Joint Probability Mass Function (Joint pmf)**

*   **Definition:** The joint probability mass function (joint pmf) of two discrete random variables, *X* and *Y*, denoted by *p(x, y)*, represents the probability that *X* takes on a specific value *x* and *Y* takes on a specific value *y* simultaneously.

    *   Mathematically: *p(x, y) = P(X = x, Y = y)*

*   **Properties of Joint pmf:**
    *   *0 ≤ p(x, y) ≤ 1* for all possible values of *x* and *y*.
    *   The sum of the probabilities over all possible pairs of values must equal 1:
        *   ∑<sub>x</sub>∑<sub>y</sub> *p(x, y) = 1*

*   **Example:** Consider rolling two fair dice, a red die (X) and a blue die (Y). The joint pmf *p(x, y)* would represent the probability of getting the number *x* on the red die and the number *y* on the blue die. Since each outcome is equally likely, *p(x, y) = 1/36* for all *x, y ∈ {1, 2, 3, 4, 5, 6}*.

**2. Marginal Probability Mass Function (Marginal pmf)**

*   **Definition:** The marginal probability mass function (marginal pmf) of a discrete random variable *X* is the probability mass function of *X* considered alone, irrespective of the value of the other random variable *Y*.  It's derived from the joint pmf.

*   **Calculation:**  The marginal pmf of *X*, denoted by *p<sub>X</sub>(x)*, is obtained by summing the joint pmf *p(x, y)* over all possible values of *Y*:

    *   *p<sub>X</sub>(x) = ∑<sub>y</sub> p(x, y)*

*   Similarly, the marginal pmf of *Y*, denoted by *p<sub>Y</sub>(y)*, is obtained by summing the joint pmf *p(x, y)* over all possible values of *X*:

    *   *p<sub>Y</sub>(y) = ∑<sub>x</sub> p(x, y)*

*   **Difference between Joint pmf and Marginal pmf:**

    | Feature       | Joint pmf *p(x, y)*                               | Marginal pmf *p<sub>X</sub>(x)* or *p<sub>Y</sub>(y)*        |
    |---------------|----------------------------------------------------|-------------------------------------------------------------|
    | Represents   | Probability of X = x AND Y = y                    | Probability of X = x (irrespective of Y) or Y = y (irrespective of X)|
    | Arguments     | Two variables (x, y)                               | One variable (x or y)                                    |
    | Calculation    | Usually given directly or derived from the problem | Calculated by summing the joint pmf over the other variable |

**3. Calculating Marginal pmf: Examples**

*   **Example 1: Two Dice** (Continuing from the previous example)

    *   Joint pmf: *p(x, y) = 1/36* for *x, y ∈ {1, 2, 3, 4, 5, 6}*
    *   Marginal pmf of X (Red Die):
        *   *p<sub>X</sub>(x) = ∑<sub>y=1</sub><sup>6</sup> p(x, y) = ∑<sub>y=1</sub><sup>6</sup> (1/36) = 6 * (1/36) = 1/6* for *x ∈ {1, 2, 3, 4, 5, 6}*
    *   Marginal pmf of Y (Blue Die):
        *   *p<sub>Y</sub>(y) = ∑<sub>x=1</sub><sup>6</sup> p(x, y) = ∑<sub>x=1</sub><sup>6</sup> (1/36) = 6 * (1/36) = 1/6* for *y ∈ {1, 2, 3, 4, 5, 6}*
    *   Interpretation:  The marginal pmf confirms that each die has an equal probability (1/6) of landing on any of its faces.

*   **Example 2:  Customer Satisfaction and Product Usage**

    *   Let X be a random variable representing customer satisfaction (1: Dissatisfied, 2: Neutral, 3: Satisfied).
    *   Let Y be a random variable representing product usage level (1: Low, 2: Medium, 3: High).
    *   Assume the following joint pmf:

        |       | Y=1 (Low) | Y=2 (Medium) | Y=3 (High) |
        |-------|----------|-------------|------------|
        | X=1 (Dissatisfied) | 0.1      | 0.05       | 0.02       |
        | X=2 (Neutral)      | 0.15     | 0.1        | 0.08       |
        | X=3 (Satisfied)    | 0.05      | 0.2        | 0.25       |

    *   Calculate the marginal pmf of X (Customer Satisfaction):
        *   *p<sub>X</sub>(1) = p(1, 1) + p(1, 2) + p(1, 3) = 0.1 + 0.05 + 0.02 = 0.17*
        *   *p<sub>X</sub>(2) = p(2, 1) + p(2, 2) + p(2, 3) = 0.15 + 0.1 + 0.08 = 0.33*
        *   *p<sub>X</sub>(3) = p(3, 1) + p(3, 2) + p(3, 3) = 0.05 + 0.2 + 0.25 = 0.50*
        *   Interpretation:  17% of customers are dissatisfied, 33% are neutral, and 50% are satisfied, regardless of product usage.

    *   Calculate the marginal pmf of Y (Product Usage):
        *   *p<sub>Y</sub>(1) = p(1, 1) + p(2, 1) + p(3, 1) = 0.1 + 0.15 + 0.05 = 0.30*
        *   *p<sub>Y</sub>(2) = p(1, 2) + p(2, 2) + p(3, 2) = 0.05 + 0.1 + 0.2 = 0.35*
        *   *p<sub>Y</sub>(3) = p(1, 3) + p(2, 3) + p(3, 3) = 0.02 + 0.08 + 0.25 = 0.35*
        *   Interpretation: 30% of customers use the product at a low level, 35% at a medium level, and 35% at a high level, regardless of satisfaction.

**4. Applying Marginal pmf to solve probabilistic problems**

*   **Example:** Using the customer satisfaction and product usage example, what is the probability that a customer is satisfied?

    *   We want to find *P(X = 3)*.  This is directly given by the marginal pmf of X:  *p<sub>X</sub>(3) = 0.50*

*   **Another Example:** What is the probability a customer uses the product at a medium level?

    *   We want to find *P(Y = 2)*. This is directly given by the marginal pmf of Y: *p<sub>Y</sub>(2) = 0.35*

**5. Practice Questions/Exercises**

1.  **Problem:** Two light bulbs are selected at random from a box containing 5 bulbs, of which 2 are defective. Let *X* be the number of defective bulbs in the first selection and *Y* be the number of defective bulbs in the second selection. The joint pmf is given as follows:

    |       | Y=0   | Y=1   | Y=2   |
    |-------|-------|-------|-------|
    | X=0   | 3/10  | 3/10  | 1/10  |
    | X=1   | 3/10  | 0     | 0     |
    | X=2   | 0     | 0     | 0     |

    Calculate the marginal pmf of X and Y.

    **Answer:**

    *   *p<sub>X</sub>(0) = 3/10 + 3/10 + 1/10 = 7/10*
    *   *p<sub>X</sub>(1) = 3/10 + 0 + 0 = 3/10*
    *   *p<sub>X</sub>(2) = 0 + 0 + 0 = 0*
    *   *p<sub>Y</sub>(0) = 3/10 + 3/10 + 0 = 6/10 = 3/5*
    *   *p<sub>Y</sub>(1) = 3/10 + 0 + 0 = 3/10*
    *   *p<sub>Y</sub>(2) = 1/10 + 0 + 0 = 1/10*

2.  **Problem:** A company sells two types of products, A and B. Let X be the number of units of product A sold in a day and Y be the number of units of product B sold in a day. The joint pmf is given as follows:
    p(x,y) = k(x+y) where x and y take values 0,1,2,3.
    a) Find the value of k.
    b) Find the marginal probability distribution of X and Y.

    **Answer:**
    a) Since sum of all probabilities is 1, sum[x=0 to 3] sum[y=0 to 3] k(x+y) = 1
    k * sum[x=0 to 3] [x+0 + x+1 + x+2 + x+3] =1
    k * [0+1+2+3 + 1+2+3+4 + 2+3+4+5 + 3+4+5+6] = 1
    k * [6+10+14+18] =1
    k * 48 = 1
    k = 1/48.
    b) marginal distribution of X:
    p(X=0) = sum[y=0 to 3] k(0+y) = k(0+1+2+3) = k(6) = 6/48 = 1/8
    p(X=1) = sum[y=0 to 3] k(1+y) = k(1+2+3+4) = k(10) = 10/48 = 5/24
    p(X=2) = sum[y=0 to 3] k(2+y) = k(2+3+4+5) = k(14) = 14/48 = 7/24
    p(X=3) = sum[y=0 to 3] k(3+y) = k(3+4+5+6) = k(18) = 18/48 = 3/8

    marginal distribution of Y:
    p(Y=0) = sum[x=0 to 3] k(x+0) = k(0+1+2+3) = k(6) = 6/48 = 1/8
    p(Y=1) = sum[x=0 to 3] k(x+1) = k(1+2+3+4) = k(10) = 10/48 = 5/24
    p(Y=2) = sum[x=0 to 3] k(x+2) = k(2+3+4+5) = k(14) = 14/48 = 7/24
    p(Y=3) = sum[x=0 to 3] k(x+3) = k(3+4+5+6) = k(18) = 18/48 = 3/8

**6. Important Points to Remember:**

*   The marginal pmf gives the probability distribution of a single random variable, ignoring the other variable(s) in the joint distribution.
*   The sum of the probabilities in a marginal pmf must equal 1.
*   Calculating the marginal pmf is a key step in many probabilistic analyses, particularly when you need to analyze a single variable's behavior.
*  When calculating probabilities based on one variable only and the joint pmf is given, marginal pmf is used.
