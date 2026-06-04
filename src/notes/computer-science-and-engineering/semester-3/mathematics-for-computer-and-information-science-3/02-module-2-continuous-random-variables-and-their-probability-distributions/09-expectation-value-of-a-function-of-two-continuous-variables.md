---
title: "Expectation value of a function of two continuous variables."
subject: "MATHEMATICS FOR COMPUTER AND INFORMATION SCIENCE-3"
module: "Module 2: Continuous random variables and their probability distributions"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ab53"
status: "completed"
scrapedAt: "2026-05-20T16:26:04.257Z"
---
# MATHEMATICS FOR COMPUTER AND INFORMATION SCIENCE-3
## Module 2: Continuous Random Variables and Their Probability Distributions
### Topic: Expectation Value of a Function of Two Continuous Variables

**Learning Outcomes:**

*   Understand the concept of joint probability density functions for two continuous random variables.
*   Calculate the expectation value of a function of two continuous random variables.
*   Apply the concept of expectation to solve practical problems involving two continuous variables.

**1. Key Concepts and Definitions**

*   **Joint Probability Density Function (PDF):**
    *   For two continuous random variables *X* and *Y*, the joint PDF *f(x, y)* describes the relative likelihood that the random vector (*X*, *Y*) will take on a specific value (*x*, *y*).
    *   *f(x, y)* must satisfy the following conditions:
        *   *f(x, y) ≥ 0* for all *x*, *y*.
        *   ∬ *f(x, y) dx dy = 1* (The total probability over the entire space must be 1).
    *   The probability that (*X*, *Y*) lies in a region *A* is given by:  *P((X, Y) ∈ A) = ∬<sub>A</sub> f(x, y) dx dy*

*   **Marginal PDFs:**
    *   The marginal PDF of *X* is obtained by integrating the joint PDF over all possible values of *Y*:
        *   *f<sub>X</sub>(x) = ∫ f(x, y) dy*
    *   Similarly, the marginal PDF of *Y* is:
        *   *f<sub>Y</sub>(y) = ∫ f(x, y) dx*

*   **Independence:**
    *   Two continuous random variables *X* and *Y* are independent if and only if:
        *   *f(x, y) = f<sub>X</sub>(x) * f<sub>Y</sub>(y)* for all *x*, *y*.

*   **Expectation Value (Expected Value or Mean):**
    *   For a single continuous random variable *X* with PDF *f(x)*, the expectation value is:
        *   *E[X] = ∫ x f(x) dx*
    *   For a function *g(X)* of a single continuous random variable *X*:
        *   *E[g(X)] = ∫ g(x) f(x) dx*

*   **Expectation Value of a Function of Two Continuous Variables:**
    *   Let *g(X, Y)* be a function of two continuous random variables *X* and *Y* with joint PDF *f(x, y)*. Then, the expectation value of *g(X, Y)* is:
        *   *E[g(X, Y)] = ∬ g(x, y) f(x, y) dx dy*

**2. Calculating the Expectation Value E[g(X, Y)]**

The formula *E[g(X, Y)] = ∬ g(x, y) f(x, y) dx dy* is the core of this topic.  Let's break down how to use it:

1.  **Identify the Function *g(X, Y)*:** Clearly define the function of the two random variables whose expected value you want to find.

2.  **Determine the Joint PDF *f(x, y)*:**  The joint PDF *f(x, y)* will either be given directly or must be derived from the problem statement.  Pay close attention to the support (the region where *f(x, y)* is non-zero).

3.  **Set Up the Double Integral:**  Substitute *g(x, y)* and *f(x, y)* into the double integral.  The limits of integration are determined by the support of the joint PDF.

4.  **Evaluate the Double Integral:** Evaluate the double integral with respect to either *x* or *y* first, and then evaluate the resulting single integral.

**3. Examples**

*   **Example 1: Simple Function**

    Let *X* and *Y* be continuous random variables with joint PDF *f(x, y) = 2* for 0 < *x* < *y* < 1, and *f(x, y) = 0* otherwise. Find *E[XY]*.

    *   *g(X, Y) = XY*
    *   *f(x, y) = 2* for 0 < *x* < *y* < 1
    *   *E[XY] = ∬ xy f(x, y) dx dy = ∫<sub>0</sub><sup>1</sup> ∫<sub>0</sub><sup>y</sup> xy(2) dx dy*
    *   *E[XY] = ∫<sub>0</sub><sup>1</sup> 2y [x<sup>2</sup>/2]<sub>0</sub><sup>y</sup> dy = ∫<sub>0</sub><sup>1</sup> y<sup>3</sup> dy*
    *   *E[XY] = [y<sup>4</sup>/4]<sub>0</sub><sup>1</sup> = 1/4*

*   **Example 2: A More Complex Function**

    Let *X* and *Y* have a joint PDF *f(x, y) = x + y* for 0 < *x* < 1 and 0 < *y* < 1, and *f(x, y) = 0* otherwise. Find *E[X<sup>2</sup> + Y]*.

    *   *g(X, Y) = X<sup>2</sup> + Y*
    *   *f(x, y) = x + y* for 0 < *x* < 1 and 0 < *y* < 1
    *   *E[X<sup>2</sup> + Y] = ∬ (x<sup>2</sup> + y) (x + y) dx dy = ∫<sub>0</sub><sup>1</sup> ∫<sub>0</sub><sup>1</sup> (x<sup>3</sup> + x<sup>2</sup>y + xy + y<sup>2</sup>) dx dy*
    *   *E[X<sup>2</sup> + Y] = ∫<sub>0</sub><sup>1</sup> [x<sup>4</sup>/4 + x<sup>3</sup>y/3 + x<sup>2</sup>y/2 + xy<sup>2</sup>]<sub>0</sub><sup>1</sup> dy = ∫<sub>0</sub><sup>1</sup> (1/4 + y/3 + y/2 + y<sup>2</sup>) dy*
    *   *E[X<sup>2</sup> + Y] = [y/4 + y<sup>2</sup>/6 + y<sup>2</sup>/4 + y<sup>3</sup>/3]<sub>0</sub><sup>1</sup> = 1/4 + 1/6 + 1/4 + 1/3 = 1/2 + 1/2 = 1*

*   **Example 3: Independent Variables**

    Suppose *X* and *Y* are independent random variables, *X* is uniformly distributed on (0, 1) and *Y* is exponentially distributed with rate parameter λ = 1.  Find *E[XY]*.

    *   Since *X* and *Y* are independent, *f(x, y) = f<sub>X</sub>(x) * f<sub>Y</sub>(y)*.
    *   *f<sub>X</sub>(x) = 1* for 0 < *x* < 1 (Uniform distribution)
    *   *f<sub>Y</sub>(y) = e<sup>-y</sup>* for *y* > 0 (Exponential distribution)
    *   *f(x, y) = e<sup>-y</sup>* for 0 < *x* < 1 and *y* > 0
    *   *E[XY] = ∬ xy f(x, y) dx dy = ∫<sub>0</sub><sup>1</sup> ∫<sub>0</sub><sup>∞</sup> xy e<sup>-y</sup> dy dx*
    *   *E[XY] = ∫<sub>0</sub><sup>1</sup> x dx  ∫<sub>0</sub><sup>∞</sup> y e<sup>-y</sup> dy* (Separating the integrals due to independence)
    *   *E[XY] = [x<sup>2</sup>/2]<sub>0</sub><sup>1</sup> * [-y e<sup>-y</sup> - e<sup>-y</sup>]<sub>0</sub><sup>∞</sup>* (Integration by parts for the second integral)
    *   *E[XY] = (1/2) * (0 - (-0 - 1)) = 1/2*

**4. Application Problems**

Many problems in computer science can be modeled using functions of random variables. Examples include:

*   **Performance Analysis:**  If *X* is the time to complete a task and *Y* is the memory used, you might want to find *E[XY]* to understand the relationship between time and memory consumption.
*   **Networking:**  If *X* is the packet size and *Y* is the transmission time, you might want to find *E[X/Y]* (average data rate).
*   **Machine Learning:** In some models, parameters can be considered random variables. The expectation of a loss function which depends on two random model parameters might be desired.

**5. Practice Questions/Exercises**

1.  Let *X* and *Y* be continuous random variables with joint PDF *f(x, y) = cxy* for 0 < *x* < 2 and 0 < *y* < 1, and 0 otherwise.
    *   (a) Find the value of *c*.
    *   (b) Find *E[X + Y]*.

2.  The joint PDF of *X* and *Y* is given by *f(x, y) = x + y* for 0 < *x* < 1 and 0 < *y* < 1, and 0 otherwise. Find *E[X<sup>2</sup>Y]*.

3.  Let *X* and *Y* be independent random variables, each uniformly distributed on the interval (0, 1). Find *E[X<sup>2</sup> + Y<sup>2</sup>]*.

**6. Solutions to Practice Questions/Exercises**

1.  (a) To find *c*, we use the property ∬ *f(x, y) dx dy = 1*. So,
    ∫<sub>0</sub><sup>1</sup> ∫<sub>0</sub><sup>2</sup> *cxy dx dy = 1*
    *c ∫<sub>0</sub><sup>1</sup> y [x<sup>2</sup>/2]<sub>0</sub><sup>2</sup> dy = 1*
    *c ∫<sub>0</sub><sup>1</sup> 2y dy = 1*
    *c [y<sup>2</sup>]<sub>0</sub><sup>1</sup> = 1*
    *c = 1*. Therefore, *c = 1/2* (Typo fixed). *f(x,y) = (1/2)xy*. Then *c ∫<sub>0</sub><sup>1</sup> y dy = 1/2 = 1* implies *c=1*. Thus the answer is *c=1*.

    (b)  *E[X + Y] = ∬ (x + y) (xy) dx dy = ∫<sub>0</sub><sup>1</sup> ∫<sub>0</sub><sup>2</sup> (x<sup>2</sup>y + xy<sup>2</sup>) dx dy*
    *E[X + Y] = ∫<sub>0</sub><sup>1</sup> [x<sup>3</sup>y/3 + x<sup>2</sup>y<sup>2</sup>/2]<sub>0</sub><sup>2</sup> dy = ∫<sub>0</sub><sup>1</sup> (8y/3 + 2y<sup>2</sup>) dy*
    *E[X + Y] = [4y<sup>2</sup>/3 + 2y<sup>3</sup>/3]<sub>0</sub><sup>1</sup> = 4/3 + 2/3 = 2*

2.  *E[X<sup>2</sup>Y] = ∬ x<sup>2</sup>y (x + y) dx dy = ∫<sub>0</sub><sup>1</sup> ∫<sub>0</sub><sup>1</sup> (x<sup>3</sup>y + x<sup>2</sup>y<sup>2</sup>) dx dy*
    *E[X<sup>2</sup>Y] = ∫<sub>0</sub><sup>1</sup> [x<sup>4</sup>y/4 + x<sup>3</sup>y<sup>2</sup>/3]<sub>0</sub><sup>1</sup> dy = ∫<sub>0</sub><sup>1</sup> (y/4 + y<sup>2</sup>/3) dy*
    *E[X<sup>2</sup>Y] = [y<sup>2</sup>/8 + y<sup>3</sup>/9]<sub>0</sub><sup>1</sup> = 1/8 + 1/9 = 17/72*

3.  Since *X* and *Y* are independent and uniformly distributed on (0, 1), *f<sub>X</sub>(x) = 1* and *f<sub>Y</sub>(y) = 1* for 0 < *x* < 1 and 0 < *y* < 1. Therefore, *f(x, y) = 1*.

    *E[X<sup>2</sup> + Y<sup>2</sup>] = ∬ (x<sup>2</sup> + y<sup>2</sup>) dx dy = ∫<sub>0</sub><sup>1</sup> ∫<sub>0</sub><sup>1</sup> (x<sup>2</sup> + y<sup>2</sup>) dx dy*
    *E[X<sup>2</sup> + Y<sup>2</sup>] = ∫<sub>0</sub><sup>1</sup> [x<sup>3</sup>/3 + xy<sup>2</sup>]<sub>0</sub><sup>1</sup> dy = ∫<sub>0</sub><sup>1</sup> (1/3 + y<sup>2</sup>) dy*
    *E[X<sup>2</sup> + Y<sup>2</sup>] = [y/3 + y<sup>3</sup>/3]<sub>0</sub><sup>1</sup> = 1/3 + 1/3 = 2/3*

**7. Important Points to Remember**

*   Always verify that your joint PDF integrates to 1.
*   Pay close attention to the limits of integration, as they are defined by the support of the joint PDF.
*   If *X* and *Y* are independent, the joint PDF is the product of the marginal PDFs, which can significantly simplify the calculation.
*   Practice setting up the double integrals carefully. A correct setup is essential for getting the correct result.
*   Understand the different ways the joint PDF can be presented to you in a problem (e.g. given explicitly, defined piecewise, implicitly through independence).
