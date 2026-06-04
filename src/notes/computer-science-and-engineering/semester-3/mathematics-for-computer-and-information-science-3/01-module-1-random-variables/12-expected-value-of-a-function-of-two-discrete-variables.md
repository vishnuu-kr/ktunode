---
title: "Expected value of a function of two discrete variables."
subject: "MATHEMATICS FOR COMPUTER AND INFORMATION SCIENCE-3"
module: "Module 1: Random variables"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ab49"
status: "completed"
scrapedAt: "2026-05-20T16:25:57.754Z"
---
## MATHEMATICS FOR COMPUTER AND INFORMATION SCIENCE-3
## Module 1: Random Variables
## Topic: Expected Value of a Function of Two Discrete Variables

**Learning Outcomes:**

*   Understand the concept of joint probability mass function (PMF) for two discrete random variables.
*   Calculate the expected value of a function of two discrete random variables.
*   Apply the concepts to solve problems related to expected value in computer and information science contexts.

**1. Joint Probability Mass Function (PMF) for Two Discrete Random Variables**

*   **Definition:** Let *X* and *Y* be two discrete random variables.  The joint probability mass function (PMF), denoted by *p(x, y)*, gives the probability that *X* takes on the value *x* and *Y* takes on the value *y* simultaneously.  Formally:

    *   *p(x, y) = P(X = x, Y = y)*

*   **Properties of a Joint PMF:**

    *   *0 ≤ p(x, y) ≤ 1* for all possible values of *x* and *y*.
    *   ∑<sub>x</sub>∑<sub>y</sub> *p(x, y) = 1* (The sum of probabilities over all possible values of *x* and *y* equals 1).

*   **Marginal PMFs:** The marginal PMFs represent the probability distributions of the individual random variables *X* and *Y*.  They can be derived from the joint PMF as follows:

    *   Marginal PMF of *X*:  *p<sub>X</sub>(x) = ∑<sub>y</sub> p(x, y)* (Sum the joint PMF over all possible values of *y*).
    *   Marginal PMF of *Y*:  *p<sub>Y</sub>(y) = ∑<sub>x</sub> p(x, y)* (Sum the joint PMF over all possible values of *x*).

*   **Independence:** Two discrete random variables *X* and *Y* are said to be independent if and only if:

    *   *p(x, y) = p<sub>X</sub>(x) * p<sub>Y</sub>(y)* for all values of *x* and *y*.

**2. Expected Value of a Function of Two Discrete Random Variables**

*   **Definition:** Let *X* and *Y* be two discrete random variables with joint PMF *p(x, y)*, and let *g(X, Y)* be a function of *X* and *Y*.  The expected value of *g(X, Y)*, denoted by *E[g(X, Y)]*, is defined as:

    *   *E[g(X, Y)] = ∑<sub>x</sub>∑<sub>y</sub> g(x, y) * p(x, y)*

*   **Linearity of Expectation:**  For constants *a* and *b*, and functions *g<sub>1</sub>(X,Y)* and *g<sub>2</sub>(X,Y)*:

    *   *E[a*g<sub>1</sub>(X, Y) + b*g<sub>2</sub>(X, Y)] = a*E[g<sub>1</sub>(X, Y)] + b*E[g<sub>2</sub>(X, Y)]*

*   **Expected Value of a Product (Independent Variables):**  If *X* and *Y* are independent, then:

    *   *E[X*Y] = E[X] * E[Y]*

*   **Special Case: Expected Value of a Random Variable:**  If *g(X,Y) = X*, then *E[X] = ∑<sub>x</sub>∑<sub>y</sub> x * p(x, y) = ∑<sub>x</sub> x * p<sub>X</sub>(x)*.  Similarly, if *g(X,Y) = Y*, then *E[Y] = ∑<sub>x</sub>∑<sub>y</sub> y * p(x, y) = ∑<sub>y</sub> y * p<sub>Y</sub>(y)*.

**3. Examples**

*   **Example 1:  Simple Game**

    Suppose you play a game where you roll two fair dice.  Let *X* be the value of the first die and *Y* be the value of the second die.  Let *g(X, Y) = X + Y* be the sum of the two dice.  Find *E[g(X, Y)]*.

    *   Since the dice are fair and independent, *p(x, y) = (1/6) * (1/6) = 1/36* for all *x, y ∈ {1, 2, 3, 4, 5, 6}*.

    *   *E[X + Y] = ∑<sub>x=1</sub><sup>6</sup>∑<sub>y=1</sub><sup>6</sup> (x + y) * (1/36)*

    *   We can also use linearity of expectation:  *E[X + Y] = E[X] + E[Y]*.  Since each die is fair, *E[X] = E[Y] = (1+2+3+4+5+6)/6 = 3.5*.

    *   Therefore, *E[X + Y] = 3.5 + 3.5 = 7*.

*   **Example 2: Error Detection in Data Transmission**

    A communication system transmits binary data. Let *X* be the number of bits sent in a message, and *Y* be the number of bits received correctly.  Suppose the joint PMF is given by:

    |       | Y=0  | Y=1  | Y=2  |
    | :---- | :--- | :--- | :--- |
    | **X=0** | 0.1  | 0    | 0    |
    | **X=1** | 0.05 | 0.7  | 0    |
    | **X=2** | 0.02 | 0.03 | 0.1  |

    Let *g(X, Y) = X - Y* be the number of errors in the received message. Calculate *E[g(X, Y)] = E[X-Y]*.

    *   *E[X - Y] = ∑<sub>x=0</sub><sup>2</sup>∑<sub>y=0</sub><sup>2</sup> (x - y) * p(x, y)*

    *   *E[X - Y] = (0-0)*0.1 + (0-1)*0 + (0-2)*0 + (1-0)*0.05 + (1-1)*0.7 + (1-2)*0 + (2-0)*0.02 + (2-1)*0.03 + (2-2)*0.1*

    *   *E[X - Y] = 0 + 0 + 0 + 0.05 + 0 + 0 + 0.04 + 0.03 + 0 = 0.12*

    Therefore, the expected number of errors is 0.12.

*   **Example 3: Resource Allocation**

    Consider a server allocating resources to two tasks. Let *X* be the amount of resource allocated to task 1 and *Y* be the amount allocated to task 2. The joint probability *p(x,y)* represents the probability of a particular allocation. Let *g(X,Y) = X*Y* represent the "efficiency" of the allocation. Compute *E[XY]* to understand the average efficiency.  Assume a given joint PMF (details omitted here for brevity, but would need to be provided for a complete problem).

**4. Practice Questions/Exercises**

1.  **Given the joint PMF:**

    |       | Y=0   | Y=1   | Y=2   |
    | :---- | :---- | :---- | :---- |
    | **X=0** | 0.1   | 0.2   | 0.05  |
    | **X=1** | 0.05  | 0.3   | 0.1   |
    | **X=2** | 0.05  | 0.1   | 0.05  |

    a)  Calculate *E[X]*.
    b)  Calculate *E[Y]*.
    c)  Calculate *E[XY]*.

2.  Two random variables *X* and *Y* are independent, with *E[X] = 2* and *E[Y] = 3*. What is *E[XY]*?

3.  Suppose *X* represents the number of packets successfully transmitted across a network, and *Y* represents the number of retransmissions needed.  A hypothetical joint PMF is provided below. Let *g(X, Y) = X - 2Y* represent a metric where successful packets are positively weighted and retransmissions are negatively weighted. Calculate E[g(X,Y)].

    |       | Y=0   | Y=1   |
    | :---- | :---- | :---- |
    | **X=0** | 0.1   | 0.1   |
    | **X=1** | 0.2   | 0.2   |
    | **X=2** | 0.1   | 0.2   |
    |

**Answer Key:**

1.  a) *E[X] = 0*0.35 + 1*0.45 + 2*0.2 = 0.85*
    b) *E[Y] = 0*0.2 + 1*0.6 + 2*0.2 = 1*
    c) *E[XY] = 0*0*0.1 + 0*1*0.2 + 0*2*0.05 + 1*0*0.05 + 1*1*0.3 + 1*2*0.1 + 2*0*0.05 + 2*1*0.1 + 2*2*0.05 = 0.8*

2.  Since *X* and *Y* are independent, *E[XY] = E[X] * E[Y] = 2 * 3 = 6*.

3. E[X - 2Y] =  (0-0)*0.1 + (0-2)*0.1 + (1-0)*0.2 + (1-2)*0.2 + (2-0)*0.1 + (2-2)*0.2 = 0 - 0.2 + 0.2 - 0.2 + 0.2 + 0 = 0

**5. Important Points to Remember**

*   Always verify that the given function *p(x, y)* is a valid joint PMF (i.e., the sum of all probabilities equals 1 and each probability is between 0 and 1).
*   Understand the difference between joint, marginal, and conditional probabilities.
*   Linearity of expectation can greatly simplify calculations.
*   Independence simplifies the calculation of *E[XY]*.
*   The examples show applications of expected value in information science contexts like error analysis in communication systems. Understanding expected value is useful in many situations, like analyzing average algorithm performance, network traffic management and evaluating system reliability.

This document provides a comprehensive overview of the expected value of a function of two discrete variables. By understanding the concepts, examples, and practice questions, you should be well-prepared to apply this knowledge in various applications related to computer and information science. Remember to practice solving problems to solidify your understanding.
