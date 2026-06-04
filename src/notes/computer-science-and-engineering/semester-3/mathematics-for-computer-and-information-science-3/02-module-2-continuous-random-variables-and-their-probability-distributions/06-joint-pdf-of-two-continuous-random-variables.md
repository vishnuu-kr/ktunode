---
title: "Joint pdf of two Continuous random variables"
subject: "MATHEMATICS FOR COMPUTER AND INFORMATION SCIENCE-3"
module: "Module 2: Continuous random variables and their probability distributions"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ab50"
status: "completed"
scrapedAt: "2026-05-20T16:26:02.111Z"
---
# MATHEMATICS FOR COMPUTER AND INFORMATION SCIENCE-3

## Module 2: Continuous Random Variables and Their Probability Distributions

### Topic: Joint PDF of Two Continuous Random Variables

**Learning Outcomes:**

*   Understand the concept of a joint probability density function (PDF) for two continuous random variables.
*   Calculate probabilities involving two continuous random variables using the joint PDF.
*   Determine marginal PDFs from the joint PDF.
*   Determine if two continuous random variables are independent based on their joint PDF.
*   Calculate the conditional PDF of one variable given the other.
*   Calculate expected values and covariances related to joint PDFs.

**1. Key Concepts and Definitions**

*   **Joint Probability Density Function (Joint PDF):** A function f(x, y) that describes the relative likelihood for a continuous random variable (X, Y) to take on a specific value at any given point (x, y).

*   **Properties of a Joint PDF:**
    *   f(x, y) ≥ 0 for all x, y  (Non-negativity)
    *   ∫∫ f(x, y) dx dy = 1 (Integration over the entire space equals 1).  The limits of integration depend on the support (region where f(x, y) is non-zero).
    *   P(a ≤ X ≤ b, c ≤ Y ≤ d) = ∫<sub>c</sub><sup>d</sup>∫<sub>a</sub><sup>b</sup> f(x, y) dx dy (Probability of X being between a and b AND Y being between c and d is the integral of the joint PDF over that region).

*   **Support:** The region in the x-y plane where the joint PDF, f(x, y), is non-zero.  Outside this region, f(x, y) = 0.

*   **Marginal PDF:** The probability density function of a single random variable from the joint distribution.

    *   Marginal PDF of X:  f<sub>X</sub>(x) = ∫ f(x, y) dy (Integrate the joint PDF with respect to y over its entire range).
    *   Marginal PDF of Y:  f<sub>Y</sub>(y) = ∫ f(x, y) dx (Integrate the joint PDF with respect to x over its entire range).

*   **Independence:**  Two continuous random variables X and Y are independent if and only if their joint PDF is the product of their marginal PDFs: f(x, y) = f<sub>X</sub>(x) * f<sub>Y</sub>(y) for all x and y.  Equivalently, if the region defined by X and Y being jointly within some bounds A and B respectively equals P(X is in A) * P(Y is in B).

*   **Conditional PDF:** The probability density function of one random variable given the value of the other.

    *   Conditional PDF of X given Y = y: f<sub>X|Y</sub>(x|y) = f(x, y) / f<sub>Y</sub>(y) ,  provided f<sub>Y</sub>(y) > 0
    *   Conditional PDF of Y given X = x: f<sub>Y|X</sub>(y|x) = f(x, y) / f<sub>X</sub>(x) ,  provided f<sub>X</sub>(x) > 0

*   **Expected Value:**

    *   E[g(X, Y)] = ∫∫ g(x, y) f(x, y) dx dy
    *   E[X] = ∫∫ x f(x, y) dx dy = ∫ x f<sub>X</sub>(x) dx
    *   E[Y] = ∫∫ y f(x, y) dx dy = ∫ y f<sub>Y</sub>(y) dy

*   **Covariance:**  A measure of how much two random variables change together.

    *   Cov(X, Y) = E[(X - E[X])(Y - E[Y])] = E[XY] - E[X]E[Y]
    *   Where E[XY] = ∫∫ xy f(x, y) dx dy

*   **Correlation:** A scaled version of covariance which gives a dimensionless quantity between -1 and 1.

    *   ρ(X, Y) = Cov(X, Y) / (σ<sub>X</sub> σ<sub>Y</sub>) where σ<sub>X</sub> and σ<sub>Y</sub> are the standard deviations of X and Y respectively.

**2. Examples**

**Example 1:  Verifying a Joint PDF**

Consider the joint PDF:

f(x, y) = c * x * y,   0 < x < 1, 0 < y < 2
f(x, y) = 0, otherwise.

(a) Find the value of c that makes this a valid joint PDF.
(b) Calculate P(0 < X < 0.5, 1 < Y < 1.5).

**Solution:**

(a) To be a valid joint PDF, the integral over the entire support must equal 1.

∫∫ f(x, y) dx dy = 1
∫<sub>0</sub><sup>2</sup>∫<sub>0</sub><sup>1</sup> c * x * y dx dy = 1
c ∫<sub>0</sub><sup>2</sup> y [x<sup>2</sup>/2]<sub>0</sub><sup>1</sup> dy = 1
c ∫<sub>0</sub><sup>2</sup> y/2 dy = 1
c [y<sup>2</sup>/4]<sub>0</sub><sup>2</sup> = 1
c (4/4) = 1
c = 1

Therefore, the joint PDF is f(x, y) = x * y,   0 < x < 1, 0 < y < 2.

(b) P(0 < X < 0.5, 1 < Y < 1.5) = ∫<sub>1</sub><sup>1.5</sup>∫<sub>0</sub><sup>0.5</sup> x * y dx dy

= ∫<sub>1</sub><sup>1.5</sup> y [x<sup>2</sup>/2]<sub>0</sub><sup>0.5</sup> dy
= ∫<sub>1</sub><sup>1.5</sup> y (0.25/2) dy
= (1/8) [y<sup>2</sup>/2]<sub>1</sub><sup>1.5</sup>
= (1/8) (2.25/2 - 1/2)
= (1/8) (1.25/2)
= 1.25/16
= 0.078125

**Example 2: Finding Marginal PDFs and Independence**

Using the joint PDF from Example 1:  f(x, y) = x * y,   0 < x < 1, 0 < y < 2.

(a) Find the marginal PDF of X, f<sub>X</sub>(x).
(b) Find the marginal PDF of Y, f<sub>Y</sub>(y).
(c) Are X and Y independent?

**Solution:**

(a) f<sub>X</sub>(x) = ∫ f(x, y) dy = ∫<sub>0</sub><sup>2</sup> x * y dy = x [y<sup>2</sup>/2]<sub>0</sub><sup>2</sup> = x (4/2) = 2x, for 0 < x < 1
f<sub>X</sub>(x) = 0, otherwise.

(b) f<sub>Y</sub>(y) = ∫ f(x, y) dx = ∫<sub>0</sub><sup>1</sup> x * y dx = y [x<sup>2</sup>/2]<sub>0</sub><sup>1</sup> = y (1/2) = y/2, for 0 < y < 2
f<sub>Y</sub>(y) = 0, otherwise.

(c) To check for independence, we see if f(x, y) = f<sub>X</sub>(x) * f<sub>Y</sub>(y)

f<sub>X</sub>(x) * f<sub>Y</sub>(y) = (2x) * (y/2) = x * y = f(x, y)

Therefore, X and Y *are* independent.

**Example 3: Conditional PDF**

Using the same joint PDF: f(x, y) = x * y,   0 < x < 1, 0 < y < 2.  (And we know X and Y are independent!)

Find the conditional PDF of X given Y = y, f<sub>X|Y</sub>(x|y).

**Solution:**

f<sub>X|Y</sub>(x|y) = f(x, y) / f<sub>Y</sub>(y) = (x * y) / (y/2) = 2x, for 0 < x < 1, given 0 < y < 2.
f<sub>X|Y</sub>(x|y) = 0, otherwise.

Notice that the conditional PDF of X given Y = y *is* the same as the marginal PDF of X. This is because X and Y are independent!  Knowing the value of Y doesn't change our probability density for X.

**Example 4: Expected Value and Covariance**

Suppose X and Y have the joint PDF: f(x,y) = 8xy, 0 < x < y < 1.

(a) Find E[X].
(b) Find E[Y].
(c) Find E[XY].
(d) Find Cov(X,Y).

**Solution:**

(a) E[X] = ∫∫ x f(x, y) dx dy = ∫<sub>0</sub><sup>1</sup> ∫<sub>0</sub><sup>y</sup> x * 8xy dx dy = ∫<sub>0</sub><sup>1</sup> 8y ∫<sub>0</sub><sup>y</sup> x<sup>2</sup> dx dy
= ∫<sub>0</sub><sup>1</sup> 8y [x<sup>3</sup>/3]<sub>0</sub><sup>y</sup> dy = ∫<sub>0</sub><sup>1</sup> 8y (y<sup>3</sup>/3) dy = (8/3) ∫<sub>0</sub><sup>1</sup> y<sup>4</sup> dy
= (8/3) [y<sup>5</sup>/5]<sub>0</sub><sup>1</sup> = (8/3) (1/5) = 8/15

(b) E[Y] = ∫∫ y f(x, y) dx dy = ∫<sub>0</sub><sup>1</sup> ∫<sub>0</sub><sup>y</sup> y * 8xy dx dy = ∫<sub>0</sub><sup>1</sup> 8y<sup>2</sup> ∫<sub>0</sub><sup>y</sup> x dx dy
= ∫<sub>0</sub><sup>1</sup> 8y<sup>2</sup> [x<sup>2</sup>/2]<sub>0</sub><sup>y</sup> dy = ∫<sub>0</sub><sup>1</sup> 8y<sup>2</sup> (y<sup>2</sup>/2) dy = 4 ∫<sub>0</sub><sup>1</sup> y<sup>4</sup> dy
= 4 [y<sup>5</sup>/5]<sub>0</sub><sup>1</sup> = 4/5

(c) E[XY] = ∫∫ xy f(x, y) dx dy = ∫<sub>0</sub><sup>1</sup> ∫<sub>0</sub><sup>y</sup> xy * 8xy dx dy = ∫<sub>0</sub><sup>1</sup> 8y<sup>2</sup> ∫<sub>0</sub><sup>y</sup> x<sup>2</sup> dx dy
= ∫<sub>0</sub><sup>1</sup> 8y<sup>2</sup> [x<sup>3</sup>/3]<sub>0</sub><sup>y</sup> dy = ∫<sub>0</sub><sup>1</sup> 8y<sup>2</sup> (y<sup>3</sup>/3) dy = (8/3) ∫<sub>0</sub><sup>1</sup> y<sup>5</sup> dy
= (8/3) [y<sup>6</sup>/6]<sub>0</sub><sup>1</sup> = (8/3)(1/6) = 4/9

(d) Cov(X, Y) = E[XY] - E[X]E[Y] = 4/9 - (8/15)(4/5) = 4/9 - 32/75 = (300 - 288) / 675 = 12/675 = 4/225

**3. Practice Questions/Exercises with Answers**

1.  **Problem:** The joint PDF of X and Y is given by f(x, y) = k(x + y) for 0 < x < 1 and 0 < y < 1.

    (a) Find the value of k.
    (b) Find P(X < 0.5, Y < 0.5).
    (c) Find the marginal PDF of X.
    (d) Are X and Y independent?

    **Answer:**

    (a) k = 1
    (b) 1/4
    (c) f<sub>X</sub>(x) = x + 1/2, 0 < x < 1.
    (d) No, X and Y are *not* independent.

2.  **Problem:** The joint PDF of X and Y is given by f(x, y) = 24xy for x > 0, y > 0, and x + y < 1.

    (a) Verify that this is a valid joint PDF.
    (b) Find P(X < 0.25, Y < 0.25).
    (c) Find the marginal PDF of X, f<sub>X</sub>(x).
    (d) Find E[X].

    **Answer:**
    (a) Verify ∫∫ f(x,y) dx dy = 1 over the appropriate support.
    (b) P(X < 0.25, Y < 0.25) = 0.009765625
    (c) f<sub>X</sub>(x) = 12x(1-x)<sup>2</sup> ,  0 < x < 1
    (d) E[X] = 2/5

3.  **Problem:** X and Y have joint PDF f(x,y) =  ce<sup>-(x+y)</sup> for x > 0, y > 0.

    (a)  Find the value of 'c' that makes f(x,y) a valid pdf.
    (b)  Are X and Y independent?
    (c)  Find E[X].
    (d)  Find P(X < 1, Y < 1)

    **Answer:**
    (a) c = 1
    (b) Yes, X and Y are independent.
    (c) E[X] = 1
    (d) P(X < 1, Y < 1) = (1 - e<sup>-1</sup>)<sup>2</sup> ≈ 0.3996

**4. Important Points to Remember**

*   Always check if the joint PDF integrates to 1 over its support.
*   To determine independence, check if f(x, y) = f<sub>X</sub>(x) * f<sub>Y</sub>(y). If this holds for *all* x and y within the support, then X and Y are independent.  If you find *any* (x,y) values for which the equation *doesn't* hold, the variables are dependent.
*   The limits of integration are crucial and depend on the support of the joint PDF.  Visualizing the support region can be very helpful.
*   When calculating conditional PDFs, remember that you are conditioning on a specific value of the other variable. Make sure the denominator (the marginal PDF) is greater than zero at that point.
*   If X and Y are independent, then Cov(X, Y) = 0.  However, Cov(X, Y) = 0 does *not* necessarily imply independence!  It only means there is no *linear* relationship between X and Y.
*   Carefully define the region when calculating probabilities involving joint PDFs. Drawing a picture of the region can help avoid errors.
