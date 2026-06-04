---
title: "Solving the least square problems."
subject: "MATHEMATICS FOR INFORMATION SCIENCE – 2"
module: "Module 3: Vector length and unit vector"
branch: "Computer Science and Engineering"
semester: 2
topicId: "68b45b6e58474a0b135b5d28"
status: "completed"
scrapedAt: "2026-05-20T16:34:50.258Z"
---
## MATHEMATICS FOR INFORMATION SCIENCE – 2
## Module 3: Vector Length and Unit Vector

### Topic: Solving the Least Squares Problems

Hello everyone, and welcome back to our journey through the fascinating world of Mathematics for Information Science! Today, we're diving into a topic that's absolutely central to many real-world applications, especially in data science and machine learning: **Solving the Least Squares Problems**. This is where we tackle situations where a perfect solution just isn't achievable, and we need to find the *best possible* approximate solution.

You might be wondering, "Why 'least squares'? What does that even mean?" Well, think about it like this: imagine you're trying to fit a trend line through a scatter of data points. It's very unlikely that all those points will lie perfectly on a single straight line. So, what do we do? We try to draw a line that minimizes the overall "error" or "distance" between the line and the data points. The "least squares" method is precisely about minimizing the *sum of the squares of these errors*. It's a cornerstone of how we make sense of noisy or incomplete data.

This topic directly ties into **Course Outcome 3 (CO3)**: "Describe inner product spaces and their properties, to apply orthonormalization process and to solve least square problems." We'll see how the concepts of vector length and inner products, which we've explored, are fundamental to developing and understanding the least squares solution. This isn't just abstract theory; it's about developing the tools to find the best fit when perfect fits are impossible.

Let's get started by setting the stage and understanding the problem we're trying to solve.

### 1. The Problem: When Systems of Equations Have No Exact Solution

We've spent a lot of time with systems of linear equations, like $Ax = b$. We know that if $A$ is square and invertible, there's a unique exact solution $x = A^{-1}b$. However, in information science, we often deal with scenarios where:

*   **The system is overdetermined:** We have more equations than unknowns. Think about trying to find the parameters of a model by collecting data from many different sources. You might have more data points than you have parameters to fit.
*   **The data is noisy:** Real-world measurements are rarely perfect. They contain errors, making it impossible to satisfy all equations simultaneously.

So, what happens when there's no vector $x$ that perfectly satisfies $Ax = b$? This is where the idea of a "least squares solution" comes in. Instead of an exact solution, we seek a vector $\hat{x}$ that makes $A\hat{x}$ "as close as possible" to $b$.

**Analogy:** Imagine you're a detective trying to pinpoint the location of a hidden treasure. You have several witnesses, each giving you a slightly different clue about the location. No single clue might be perfectly accurate, and they might even contradict each other a bit. Your goal isn't to find a place that perfectly satisfies *every single clue* (that might be impossible), but to find the location that is "closest" to satisfying all the clues on average. That "closest" location is your least squares estimate.

Formally, we want to find a vector $\hat{x}$ that minimizes the norm of the residual vector, $e = b - A\hat{x}$. That is, we want to minimize $||b - A\hat{x}||$. Since the norm is always non-negative, minimizing $||b - A\hat{x}||$ is equivalent to minimizing $||b - A\hat{x}||^2$. This is the "least squares" part! We are minimizing the sum of the squares of the components of the residual vector.

### 2. The Geometric Interpretation: Projection

This problem has a beautiful geometric interpretation. Let $A$ be an $m \times n$ matrix, so $Ax$ is a linear combination of the columns of $A$. Let $C(A)$ be the column space of $A$. The vector $A\hat{x}$ will always lie within the column space of $A$, because it's a linear combination of the columns of $A$.

We want to find $\hat{x}$ such that $A\hat{x}$ is the vector in $C(A)$ that is closest to $b$. This closest vector is precisely the **orthogonal projection of $b$ onto the column space of $A$**.

Let's call this projection $\hat{b}$. So, $\hat{b} = A\hat{x}$ is the projection of $b$ onto $C(A)$.

What does "orthogonal projection" mean in this context? It means that the residual vector, $e = b - \hat{b} = b - A\hat{x}$, must be **orthogonal** to the entire column space $C(A)$.

Recall our discussion on inner products and orthogonality! If $e$ is orthogonal to $C(A)$, it means that $e$ is orthogonal to every column of $A$. Mathematically, this means that the dot product of $e$ with each column of $A$ is zero.

We can express this orthogonality condition concisely using the transpose of $A$. The columns of $A$ form the rows of $A^T$. So, $A^T e = 0$.

Substituting $e = b - A\hat{x}$, we get:

$$A^T (b - A\hat{x}) = 0$$

This equation is the key! It's the fundamental equation that allows us to solve for $\hat{x}$.

### 3. Deriving the Normal Equations

Let's expand the equation $A^T (b - A\hat{x}) = 0$:

$$A^T b - A^T A\hat{x} = 0$$

Rearranging this, we get:

$$A^T A\hat{x} = A^T b$$

These are called the **Normal Equations**. They form a new system of linear equations for $\hat{x}$. Notice that if $A$ is $m \times n$, then $A^T$ is $n \times m$, and $A^T A$ is an $n \times n$ matrix. This is a square system!

**Important Point:** The normal equations provide the solution to the least squares problem. Our goal now is to solve this system for $\hat{x}$.

### 4. Solving the Normal Equations

To solve $A^T A\hat{x} = A^T b$, we can proceed as follows:

**Case 1: $A^T A$ is invertible**

This is the most common scenario, especially when the columns of $A$ are linearly independent. If $A^T A$ is invertible, we can directly solve for $\hat{x}$:

$$\hat{x} = (A^T A)^{-1} A^T b$$

This formula gives us the unique least squares solution.

**Recall from CO1:** This involves matrix inversion and multiplication, concepts we've covered!

**Example 1 (Fitting a line):** Suppose we have data points $(1, 2), (2, 3), (3, 5)$. We want to find a line $y = mx + c$ that best fits these points. We can set up the system of equations:

$m(1) + c = 2$
$m(2) + c = 3$
$m(3) + c = 5$

In matrix form, $Ax = b$:

$$
\begin{pmatrix}
1 & 1 \\
2 & 1 \\
3 & 1
\end{pmatrix}
\begin{pmatrix}
m \\
c
\end{pmatrix}
=
\begin{pmatrix}
2 \\
3 \\
5
\end{pmatrix}
$$

Here, $A = \begin{pmatrix} 1 & 1 \\ 2 & 1 \\ 3 & 1 \end{pmatrix}$ and $b = \begin{pmatrix} 2 \\ 3 \\ 5 \end{pmatrix}$. This is an overdetermined system. Let's find the least squares solution for $m$ and $c$.

First, calculate $A^T$:
$A^T = \begin{pmatrix} 1 & 2 & 3 \\ 1 & 1 & 1 \end{pmatrix}$

Next, calculate $A^T A$:
$A^T A = \begin{pmatrix} 1 & 2 & 3 \\ 1 & 1 & 1 \end{pmatrix} \begin{pmatrix} 1 & 1 \\ 2 & 1 \\ 3 & 1 \end{pmatrix} = \begin{pmatrix} (1 \cdot 1 + 2 \cdot 2 + 3 \cdot 3) & (1 \cdot 1 + 2 \cdot 1 + 3 \cdot 1) \\ (1 \cdot 1 + 1 \cdot 2 + 1 \cdot 3) & (1 \cdot 1 + 1 \cdot 1 + 1 \cdot 1) \end{pmatrix} = \begin{pmatrix} 1+4+9 & 1+2+3 \\ 1+2+3 & 1+1+1 \end{pmatrix} = \begin{pmatrix} 14 & 6 \\ 6 & 3 \end{pmatrix}$

Now, calculate $A^T b$:
$A^T b = \begin{pmatrix} 1 & 2 & 3 \\ 1 & 1 & 1 \end{pmatrix} \begin{pmatrix} 2 \\ 3 \\ 5 \end{pmatrix} = \begin{pmatrix} (1 \cdot 2 + 2 \cdot 3 + 3 \cdot 5) \\ (1 \cdot 2 + 1 \cdot 3 + 1 \cdot 5) \end{pmatrix} = \begin{pmatrix} 2 + 6 + 15 \\ 2 + 3 + 5 \end{pmatrix} = \begin{pmatrix} 23 \\ 10 \end{pmatrix}$

So, the normal equations are:
$\begin{pmatrix} 14 & 6 \\ 6 & 3 \end{pmatrix} \begin{pmatrix} m \\ c \end{pmatrix} = \begin{pmatrix} 23 \\ 10 \end{pmatrix}$

To solve this, we can find the inverse of $A^T A$. The determinant of $A^T A$ is $(14 \cdot 3) - (6 \cdot 6) = 42 - 36 = 6$. Since the determinant is non-zero, the matrix is invertible.

$(A^T A)^{-1} = \frac{1}{6} \begin{pmatrix} 3 & -6 \\ -6 & 14 \end{pmatrix}$

Now, find $\hat{x} = (A^T A)^{-1} A^T b$:
$\begin{pmatrix} m \\ c \end{pmatrix} = \frac{1}{6} \begin{pmatrix} 3 & -6 \\ -6 & 14 \end{pmatrix} \begin{pmatrix} 23 \\ 10 \end{pmatrix} = \frac{1}{6} \begin{pmatrix} (3 \cdot 23 - 6 \cdot 10) \\ (-6 \cdot 23 + 14 \cdot 10) \end{pmatrix} = \frac{1}{6} \begin{pmatrix} 69 - 60 \\ -138 + 140 \end{pmatrix} = \frac{1}{6} \begin{pmatrix} 9 \\ 2 \end{pmatrix} = \begin{pmatrix} 9/6 \\ 2/6 \end{pmatrix} = \begin{pmatrix} 1.5 \\ 1/3 \end{pmatrix}$

So, the least squares solution is $m = 1.5$ and $c = 1/3$. The best-fit line is $y = 1.5x + 1/3$.

**Relatable Example:** Imagine you're calibrating a sensor. You take measurements at known input values:
*   Input 1, Output 1.9
*   Input 2, Output 3.2
*   Input 3, Output 4.9

You expect a linear relationship Output = $m \times$ Input + $c$. The data isn't perfect. Using the least squares method, we found the best line that represents this relationship, which helps us understand the sensor's behavior and predict its output for unseen inputs. This is a classic application in signal processing and control systems.

**Case 2: $A^T A$ is not invertible**

This happens when the columns of $A$ are linearly dependent. In such cases, there isn't a unique least squares solution. Instead, there's an infinite number of solutions that minimize $||b - A\hat{x}||$. Often, we're interested in the solution with the smallest norm, which can be found using techniques like the Moore-Penrose pseudoinverse. For our current scope, and as often presented in introductory texts like Kreyszig or Larson, we'll focus on the invertible case.

### 5. Connection to Orthogonalization and Orthonormal Bases (CO3)

Remember **CO3**: "Describe inner product spaces and their properties, to apply orthonormalization process and to solve least square problems." How does orthogonalization fit in?

If the columns of $A$ are not linearly independent, or even if they are but we want a more robust way to solve, we can use the Gram-Schmidt process to find an orthonormal basis for the column space of $A$. Let $q_1, q_2, \dots, q_r$ be an orthonormal basis for $C(A)$, where $r$ is the rank of $A$.

The projection of $b$ onto $C(A)$ can then be calculated using the orthonormal basis vectors:

$$\hat{b} = \text{proj}_{C(A)} b = (b \cdot q_1)q_1 + (b \cdot q_2)q_2 + \dots + (b \cdot q_r)q_r$$

This can be written in matrix form. If $Q$ is a matrix whose columns are $q_1, \dots, q_r$, then $\hat{b} = Q(Q^T b)$. Since $Q^T Q = I$ (identity matrix), this is simpler.

We know $\hat{b} = A\hat{x}$. So, $A\hat{x} = Q Q^T b$.

This approach is particularly useful when $A$ is not tall and skinny (i.e., $m \gg n$), or when we are concerned about numerical stability. The matrix $Q^T A$ will have a special structure that simplifies the normal equations. In fact, $A = QR$, where $Q$ has orthonormal columns and $R$ is upper triangular. Then $A^T A = (QR)^T (QR) = R^T Q^T Q R = R^T R$.

And $A^T b = (QR)^T b = R^T Q^T b$. The normal equations become $R^T R \hat{x} = R^T Q^T b$. If $R$ is invertible (which it is if $A$ has full column rank), then $R \hat{x} = Q^T b$. This system is an upper triangular system, which is very easy to solve using back-substitution.

This connection to orthogonalization (as mentioned in CO3) provides an alternative and often numerically superior method for solving least squares problems, especially in computational contexts. Textbooks like Strang's "Linear Algebra and Learning from Data" heavily emphasize this $QR$ decomposition approach.

### 6. Why "Least Squares"? The Role of Vector Length

Let's revisit why squaring the errors is so important. We are minimizing $||b - A\hat{x}||$.

Recall that the Euclidean norm (or length) of a vector $v$ is $||v|| = \sqrt{v_1^2 + v_2^2 + \dots + v_m^2}$.
So, $||b - A\hat{x}||^2 = (b - A\hat{x})^T (b - A\hat{x})$.
Expanding this, we get $b^T b - b^T A\hat{x} - \hat{x}^T A^T b + \hat{x}^T A^T A\hat{x}$.
Since $b^T A\hat{x}$ is a scalar, its transpose $(b^T A\hat{x})^T = \hat{x}^T A^T b$ is equal to itself.
So, $||b - A\hat{x}||^2 = b^T b - 2\hat{x}^T A^T b + \hat{x}^T A^T A\hat{x}$.

To find the minimum, we can take the derivative with respect to $\hat{x}$ and set it to zero. Using matrix calculus rules, the derivative of $c^T x$ is $c$, and the derivative of $x^T C x$ is $2Cx$ (if $C$ is symmetric, which $A^T A$ is).
So, the derivative of $||b - A\hat{x}||^2$ with respect to $\hat{x}$ is $-2 A^T b + 2 A^T A \hat{x}$.
Setting this to zero: $-2 A^T b + 2 A^T A \hat{x} = 0$, which simplifies to $A^T A \hat{x} = A^T b$. This confirms our normal equations.

The squaring is essential because it makes the objective function (the sum of squared errors) a quadratic form, which has a unique minimum that we can find using calculus. If we just minimized the sum of absolute errors $||b - A\hat{x}||_1$, the problem becomes more complex (linear programming).

### 7. Summary and Key Takeaways

*   **The Problem:** We seek to solve systems of linear equations $Ax=b$ that are overdetermined or inconsistent, meaning no exact solution exists.
*   **The Goal:** Find a vector $\hat{x}$ that minimizes the residual error $||b - A\hat{x}||$.
*   **The Method:** We minimize the sum of squared errors, leading to the **Normal Equations**: $A^T A\hat{x} = A^T b$.
*   **The Solution (if $A^T A$ is invertible):** $\hat{x} = (A^T A)^{-1} A^T b$.
*   **Geometric Interpretation:** The vector $A\hat{x}$ is the orthogonal projection of $b$ onto the column space of $A$. The residual $b - A\hat{x}$ is orthogonal to the column space of $A$.
*   **Connection to CO3:** The concept of orthogonality is fundamental. Orthonormalization techniques (like Gram-Schmidt leading to $QR$ decomposition) provide alternative, often more stable, ways to solve the least squares problem.

**Remember this:** Whenever you encounter a system of equations that might not have an exact solution, or when dealing with real-world data that is inherently noisy, the least squares method is your go-to tool for finding the "best possible" approximate solution. The normal equations are the workhorse for this.

### Sample Questions and Answers

**Question 1 (Conceptual):** Explain in your own words why we "square" the errors when solving least squares problems.

**Answer:** We square the errors to transform the problem of minimizing the length of the residual vector into a problem of minimizing a quadratic function. This quadratic function has a single, well-defined minimum that can be found using calculus by setting the derivative to zero. This process leads to the well-known normal equations. Squaring also ensures all errors contribute positively to the sum of squares, regardless of their sign, and penalizes larger errors more heavily.

**Question 2 (Exam-Oriented):** Consider the system of equations:
$x + 2y = 5$
$3x + 4y = 11$
$5x + 6y = 17$

Find the least squares solution for $x$ and $y$.

**Answer:**
The system can be written as $Ax=b$, where:
$A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \\ 5 & 6 \end{pmatrix}$, $x = \begin{pmatrix} x \\ y \end{pmatrix}$, $b = \begin{pmatrix} 5 \\ 11 \\ 17 \end{pmatrix}$

We need to solve the normal equations $A^T A\hat{x} = A^T b$.

1.  Calculate $A^T$:
    $A^T = \begin{pmatrix} 1 & 3 & 5 \\ 2 & 4 & 6 \end{pmatrix}$

2.  Calculate $A^T A$:
    $A^T A = \begin{pmatrix} 1 & 3 & 5 \\ 2 & 4 & 6 \end{pmatrix} \begin{pmatrix} 1 & 2 \\ 3 & 4 \\ 5 & 6 \end{pmatrix} = \begin{pmatrix} 1+9+25 & 2+12+30 \\ 2+12+30 & 4+16+36 \end{pmatrix} = \begin{pmatrix} 35 & 44 \\ 44 & 56 \end{pmatrix}$

3.  Calculate $A^T b$:
    $A^T b = \begin{pmatrix} 1 & 3 & 5 \\ 2 & 4 & 6 \end{pmatrix} \begin{pmatrix} 5 \\ 11 \\ 17 \end{pmatrix} = \begin{pmatrix} 5+33+85 \\ 10+44+102 \end{pmatrix} = \begin{pmatrix} 123 \\ 156 \end{pmatrix}$

4.  The normal equations are:
    $\begin{pmatrix} 35 & 44 \\ 44 & 56 \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 123 \\ 156 \end{pmatrix}$

5.  Find the inverse of $A^T A$:
    Determinant of $A^T A = (35 \times 56) - (44 \times 44) = 1960 - 1936 = 24$.
    $(A^T A)^{-1} = \frac{1}{24} \begin{pmatrix} 56 & -44 \\ -44 & 35 \end{pmatrix}$

6.  Solve for $\begin{pmatrix} x \\ y \end{pmatrix} = (A^T A)^{-1} A^T b$:
    $\begin{pmatrix} x \\ y \end{pmatrix} = \frac{1}{24} \begin{pmatrix} 56 & -44 \\ -44 & 35 \end{pmatrix} \begin{pmatrix} 123 \\ 156 \end{pmatrix}$
    $\begin{pmatrix} x \\ y \end{pmatrix} = \frac{1}{24} \begin{pmatrix} (56 \times 123) - (44 \times 156) \\ (-44 \times 123) + (35 \times 156) \end{pmatrix}$
    $\begin{pmatrix} x \\ y \end{pmatrix} = \frac{1}{24} \begin{pmatrix} 6888 - 6864 \\ -5412 + 5460 \end{pmatrix} = \frac{1}{24} \begin{pmatrix} 24 \\ 48 \end{pmatrix} = \begin{pmatrix} 1 \\ 2 \end{pmatrix}$

The least squares solution is $x=1$ and $y=2$.

*(Self-check: Notice that for this specific problem, the exact solution for the first two equations is $x=1, y=2$. Let's check the third equation: $5(1) + 6(2) = 5 + 12 = 17$. This means the system actually *had* an exact solution, and the least squares solution coincides with it. This is a good reminder that if an exact solution exists, the least squares method will find it!)*

This concludes our exploration of solving least squares problems. I hope this gives you a solid foundation for understanding and applying this critical technique! Keep practicing these calculations, and remember the geometric intuition – it really helps!
