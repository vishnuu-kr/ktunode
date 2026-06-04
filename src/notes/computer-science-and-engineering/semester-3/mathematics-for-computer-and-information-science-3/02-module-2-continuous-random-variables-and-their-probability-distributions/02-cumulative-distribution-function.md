---
title: "Cumulative distribution function"
subject: "MATHEMATICS FOR COMPUTER AND INFORMATION SCIENCE-3"
module: "Module 2: Continuous random variables and their probability distributions"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ab4c"
status: "completed"
scrapedAt: "2026-05-20T16:25:59.187Z"
---
## Mathematics for Computer and Information Science - 3

**Module 2: Continuous Random Variables and Their Probability Distributions**

**Topic: Cumulative Distribution Function (CDF)**

**Learning Outcomes:**

*   Understand the definition of a Cumulative Distribution Function (CDF) for continuous random variables.
*   Be able to calculate the CDF given a Probability Density Function (PDF).
*   Be able to interpret the CDF and use it to find probabilities.
*   Understand the properties of a CDF.
*   Be able to sketch the graph of a CDF.

**1. Key Concepts and Definitions**

*   **Continuous Random Variable:** A random variable that can take on any value within a given range (interval). Examples include height, temperature, time.

*   **Probability Density Function (PDF):**  A function, usually denoted by  *f(x)*, that describes the relative likelihood for a continuous random variable to take on a given value. Key properties:
    *   *f(x) ≥ 0* for all *x*.
    *   The area under the curve of *f(x)* over its entire range is equal to 1:  ∫ *f(x) dx* = 1  (integrated over the support of the random variable).
    *   P(a ≤ X ≤ b) = ∫<sub>a</sub><sup>b</sup> *f(x) dx*  (The probability that X lies between a and b is the integral of the PDF from a to b).

*   **Cumulative Distribution Function (CDF):**  The CDF, usually denoted by *F(x)*, gives the probability that a random variable *X* takes on a value less than or equal to *x*.  For a continuous random variable, it is defined as:

    *   *F(x) = P(X ≤ x) = ∫<sub>-∞</sub><sup>x</sup> f(t) dt*

    where *f(t)* is the Probability Density Function (PDF) and the integral is taken from negative infinity to *x*.  Note the change of variable to *t* within the integral to avoid confusion.

**2. Calculating the CDF given a PDF**

To find the CDF, *F(x)*, from a PDF, *f(x)*:

1.  **Identify the PDF, *f(x)*:**  Make sure you know the function defining the probability density.
2.  **Determine the Support of the PDF:**  This is the interval where *f(x)* is non-zero.  Outside this interval, *f(x) = 0*.
3.  **Integrate the PDF:**  Calculate the definite integral of *f(t)* from -∞ to *x*:   *F(x) = ∫<sub>-∞</sub><sup>x</sup> f(t) dt*. This will often require splitting the integral into parts based on the support of *f(x)*. Remember the integral of 0 is a constant.
4.  **Define the CDF Piecewise:**  The CDF will often be defined piecewise, taking into account the different regions:
    *   *F(x) = 0*  for *x* less than the lower bound of the support.
    *   *F(x) = ∫<sub>lower bound</sub><sup>x</sup> f(t) dt*  for *x* within the support.
    *   *F(x) = 1* for *x* greater than the upper bound of the support.

**3. Interpreting the CDF and Finding Probabilities**

*   *F(x)* represents the probability that the random variable *X* is less than or equal to *x*.

*   To find the probability that *X* lies between *a* and *b*:

    *   P(a ≤ X ≤ b) = *F(b) - F(a)*

*   To find the probability that *X* is greater than *a*:

    *   P(X > a) = 1 - *F(a)*

*   The probability that *X = a* for a continuous distribution is *0*. Thus:
    *   P(X < a) = P(X ≤ a) = F(a)

**4. Properties of a CDF**

1.  **Non-decreasing:** *F(x)* is a non-decreasing function.  If *a < b*, then *F(a) ≤ F(b)*.  This means the probability of being less than or equal to a larger value is always greater than or equal to the probability of being less than or equal to a smaller value.

2.  **Range:** *0 ≤ F(x) ≤ 1*  for all *x*.  The probability of any event must be between 0 and 1.

3.  **Limits:**
    *   lim<sub>x→-∞</sub> *F(x)* = 0  (As *x* approaches negative infinity, the probability of *X* being less than or equal to *x* approaches 0).
    *   lim<sub>x→+∞</sub> *F(x)* = 1  (As *x* approaches positive infinity, the probability of *X* being less than or equal to *x* approaches 1).

4.  **Right-Continuous:**  *F(x)* is right-continuous. This means lim<sub>x→a<sup>+</sup></sub> *F(x)* = *F(a)*.

5.  **Relationship to PDF:** *F'(x) = f(x)* (The derivative of the CDF is the PDF).

**5. Sketching the Graph of a CDF**

1.  **Identify Key Points:** Determine the values of *F(x)* at the boundaries of the support and any points where the definition of *f(x)* changes.
2.  **Plot the Points:** Plot the key points on a graph with *x* on the horizontal axis and *F(x)* on the vertical axis. Remember *F(x)* will range from 0 to 1.
3.  **Draw the Curve:** Connect the points with a non-decreasing curve.  The curve will be horizontal outside the support of the PDF (where *F(x) = 0* or *F(x) = 1*). Since F(x) is the integral of the PDF, it will be a continuous function. The steepness of the slope is related to the value of the PDF, where a high PDF value means a steep gradient of the CDF at that point.
4.  **Note Discontinuities (if applicable):** While less common with continuous distributions, be aware of potential discontinuities in the CDF.  Continuous random variables won't usually exhibit these.

**6. Examples**

**Example 1:**

Let's say a continuous random variable *X* has the following PDF:

*   *f(x) = x/8  for 0 ≤ x ≤ 4*
*   *f(x) = 0  otherwise*

**Find the CDF, *F(x)*.**

**Solution:**

1.  **Identify the PDF:**  Given above.
2.  **Determine the Support:**  0 ≤ x ≤ 4
3.  **Integrate the PDF:**

    *   For *x < 0*:   *F(x) = ∫<sub>-∞</sub><sup>x</sup> 0 dt = 0*
    *   For *0 ≤ x ≤ 4*:  *F(x) = ∫<sub>-∞</sub><sup>0</sup> 0 dt + ∫<sub>0</sub><sup>x</sup> (t/8) dt = 0 + [t<sup>2</sup>/16]<sub>0</sub><sup>x</sup> = x<sup>2</sup>/16*
    *   For *x > 4*:   *F(x) = ∫<sub>-∞</sub><sup>0</sup> 0 dt + ∫<sub>0</sub><sup>4</sup> (t/8) dt + ∫<sub>4</sub><sup>x</sup> 0 dt = 0 + [t<sup>2</sup>/16]<sub>0</sub><sup>4</sup> + 0 = 1*

4.  **Define the CDF Piecewise:**

    *   *F(x) = 0  for x < 0*
    *   *F(x) = x<sup>2</sup>/16  for 0 ≤ x ≤ 4*
    *   *F(x) = 1  for x > 4*

**Example 2:**

Using the CDF from Example 1, find:

a)  P(X ≤ 2)
b)  P(1 ≤ X ≤ 3)
c)  P(X > 3)

**Solution:**

a) P(X ≤ 2) = F(2) = (2<sup>2</sup>)/16 = 4/16 = 1/4

b) P(1 ≤ X ≤ 3) = F(3) - F(1) = (3<sup>2</sup>)/16 - (1<sup>2</sup>)/16 = 9/16 - 1/16 = 8/16 = 1/2

c) P(X > 3) = 1 - F(3) = 1 - (3<sup>2</sup>)/16 = 1 - 9/16 = 7/16

**Example 3: Uniform Distribution**

Let *X* be a uniform random variable on the interval [a, b]. The PDF is:

* f(x) = 1/(b-a) for a ≤ x ≤ b
* f(x) = 0 otherwise

Then the CDF is:

* F(x) = 0 for x < a
* F(x) = (x-a)/(b-a) for a ≤ x ≤ b
* F(x) = 1 for x > b

**7. Practice Questions/Exercises**

1.  **Question:** A continuous random variable *X* has the following PDF:

    *   *f(x) = (3/8)x<sup>2</sup>  for 0 ≤ x ≤ 2*
    *   *f(x) = 0  otherwise*

    a) Find the CDF, *F(x)*.
    b) Calculate P(X ≤ 1).
    c) Calculate P(1 ≤ X ≤ 1.5).
    d) Calculate P(X > 1.5).

    **Answer:**

    a)
        * F(x) = 0 for x < 0
        * F(x) = x<sup>3</sup>/8 for 0 ≤ x ≤ 2
        * F(x) = 1 for x > 2

    b)  P(X ≤ 1) = F(1) = (1)<sup>3</sup>/8 = 1/8

    c)  P(1 ≤ X ≤ 1.5) = F(1.5) - F(1) = (1.5)<sup>3</sup>/8 - (1)<sup>3</sup>/8 = 3.375/8 - 1/8 = 2.375/8 = 0.296875

    d) P(X > 1.5) = 1 - F(1.5) = 1 - (1.5)<sup>3</sup>/8 = 1 - 3.375/8 = 1 - 0.421875 = 0.578125

2.  **Question:** Let *X* be a continuous random variable with CDF:

    * F(x) = 0 for x < 0
    * F(x) = x<sup>2</sup> for 0 ≤ x ≤ 1
    * F(x) = 1 for x > 1

    Find the PDF *f(x)*.

    **Answer:**
    Take the derivative of F(x):
        * f(x) = 0 for x < 0
        * f(x) = 2x for 0 ≤ x ≤ 1
        * f(x) = 0 for x > 1

3.  **Question:** Sketch the CDF for the uniform distribution given in Example 3 where a = 2 and b = 6. Indicate the values of F(x) at x = 2, x = 4, and x = 6.

    **Answer:**

    * F(x) = 0 for x < 2
    * F(x) = (x-2)/4 for 2 ≤ x ≤ 6
    * F(x) = 1 for x > 6

    * F(2) = 0
    * F(4) = (4-2)/4 = 1/2 = 0.5
    * F(6) = (6-2)/4 = 1

    The CDF will be a horizontal line at F(x) = 0 for x < 2, a straight line with a slope of 1/4 from (2, 0) to (6, 1), and a horizontal line at F(x) = 1 for x > 6.

**8. Important Points to Remember**

*   The CDF represents a cumulative probability.
*   The CDF is non-decreasing and bounded between 0 and 1.
*   The CDF is crucial for calculating probabilities associated with continuous random variables.
*   The CDF is the integral of the PDF.  The PDF is the derivative of the CDF (where it exists).
*   Understanding the support of the PDF is essential for finding the CDF.
*   For continuous distributions, the probability of a random variable taking on a specific value is zero.  We are interested in probabilities within intervals.
