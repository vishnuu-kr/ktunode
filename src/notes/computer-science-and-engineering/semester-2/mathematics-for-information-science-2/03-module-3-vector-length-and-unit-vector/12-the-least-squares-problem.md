---
title: "The least squares problem"
subject: "MATHEMATICS FOR INFORMATION SCIENCE – 2"
module: "Module 3: Vector length and unit vector"
branch: "Computer Science and Engineering"
semester: 2
topicId: "68b45b6e58474a0b135b5d26"
status: "completed"
scrapedAt: "2026-05-20T16:34:48.829Z"
---
Here are your comprehensive study notes on the Least Squares Problem, designed to be engaging, insightful, and directly relevant to your course outcomes.

---

# Module 3: Vector Length and Unit Vector - The Least Squares Problem

Welcome back, everyone! In this session, we're going to tackle a problem that is absolutely fundamental in many areas of Information Science, data analysis, and machine learning: **The Least Squares Problem**. You might have heard the term "fitting a line to data" – well, the least squares method is the most common and powerful way we do that. It's all about finding the "best" possible solution when an exact solution doesn't exist.

Our journey today will directly connect with **Course Outcome CO3: Describe inner product spaces and their properties, to apply orthonormalization process and to solve least square problems.** You'll see how the concepts we've been building with vector lengths and inner products directly lead us to understanding and solving this crucial problem.

## 1. The Problem: When There's No Exact Fit

Imagine you're collecting data. Let's say you're measuring the temperature outside over a few days and you want to see if there's a trend. You plot your points, and they don't fall perfectly on a straight line. This is incredibly common in real-world scenarios!

Mathematically, we often represent these data points as a system of linear equations. Suppose we have a system of equations $Ax = b$.
*   $A$ is a matrix representing our independent variables (like time, or in a more complex scenario, different features of data).
*   $x$ is the vector of unknown coefficients we want to find (like the slope and intercept of a line).
*   $b$ is the vector of our measured outcomes (like the temperatures).

Often, especially when we have more equations than unknowns (an **overdetermined system**), the system $Ax = b$ has **no exact solution**. Think about it: if you have 10 temperature readings, but you're trying to fit a line (which only has two parameters, slope and intercept), you have 10 "equations" but only 2 "unknowns". It's highly unlikely all 10 points will lie *exactly* on the same line.

So, what do we do? We can't find an $x$ that satisfies $Ax = b$ perfectly. Instead, we aim to find an $x$ that makes $Ax$ as "close" as possible to $b$. This is where "least squares" comes in.

### Analogy: The Busy Student's Schedule

Let's paint a picture. You're a student and you have a list of tasks you *need* to complete for your assignments (this is our $b$ vector). You also have a limited amount of time each day and some inherent capabilities for how quickly you can do certain types of tasks (these are represented by the columns of matrix $A$). You want to find the best schedule, or the "amount of effort" ($x$ vector) you should dedicate to each task, to get as close as possible to completing everything on time.

It's unlikely you can perfectly allocate your time to finish *every single task exactly* by its deadline, especially if you have more tasks than days! The least squares problem asks: "What's the schedule ($x$) that minimizes the total 'missed' amount across all tasks?"

## 2. Defining "Closeness": The Squared Error

How do we measure this "closeness"? We want to find an $x$ such that $Ax$ is "close" to $b$. The vector $Ax$ represents the "predicted" values based on our choice of $x$, and $b$ represents the "actual" measured values. The difference between them is the **error vector**:

$e = b - Ax$

We want to minimize the "size" or "magnitude" of this error vector. A common and mathematically convenient way to do this is to minimize the **squared length** (or squared norm) of the error vector. This is often called the **sum of squared errors (SSE)** or **residual sum of squares**.

Remember from our discussions on vector length, the squared length of a vector $v$ is given by $v^T v$. So, we want to minimize:

$||e||^2 = ||b - Ax||^2 = (b - Ax)^T (b - Ax)$

This is the core of the **least squares problem**: find the vector $\hat{x}$ (we use a hat to denote the "best" or "estimated" solution) that minimizes $||b - Ax||^2$.

**Why squared length?**
*   **Smoothness:** The squared length function is differentiable, which allows us to use calculus (taking derivatives) to find its minimum.
*   **Penalizes Large Errors:** Squaring the errors means that larger errors contribute much more significantly to the total error than smaller errors. This is often desirable in real-world applications.
*   **Connection to Inner Products:** As we know, $||v||^2 = v^T v$, which is an inner product, linking our problem to the inner product space concepts in CO3.

## 3. The Geometric Interpretation: Orthogonality

This is where things get really elegant and connect back to vector spaces. Let $W$ be the column space of matrix $A$. The vector $Ax$ is always a linear combination of the columns of $A$, meaning $Ax$ is always in the column space of $A$, or $Ax \in \text{Col}(A)$.

We are looking for an $x$ such that $Ax$ is the "closest" vector in $\text{Col}(A)$ to $b$.
Geometrically, the vector in a subspace that is closest to an external point is the **orthogonal projection** of that point onto the subspace.

So, the vector $A\hat{x}$ that minimizes $||b - Ax||^2$ is precisely the orthogonal projection of $b$ onto the column space of $A$. Let's call this projection $\hat{b}$:

$\hat{b} = \text{proj}_{\text{Col}(A)} b = A\hat{x}$

The key property of an orthogonal projection is that the *difference* between the original vector and its projection is orthogonal to the subspace. In our case, this means the error vector $e = b - A\hat{x}$ must be orthogonal to every vector in $\text{Col}(A)$.

If $e$ is orthogonal to all vectors in $\text{Col}(A)$, it must be orthogonal to each of the linearly independent columns of $A$. Let the columns of $A$ be $a_1, a_2, \ldots, a_n$. Then, for each column $a_i$:

$a_i^T e = 0$

We can stack all these equations into a single matrix equation. This is equivalent to saying that the error vector $e$ must be orthogonal to the entire column space of $A$. In terms of the matrix $A$, this means:

$A^T e = 0$

Substituting $e = b - A\hat{x}$:

$A^T (b - A\hat{x}) = 0$

This is a critical equation. Let's expand it:

$A^T b - A^T A \hat{x} = 0$

Rearranging this, we get the **Normal Equations**:

$A^T A \hat{x} = A^T b$

These are the equations we need to solve to find the least squares solution $\hat{x}$.

**Remember this:** The least squares solution $\hat{x}$ for $Ax=b$ is found by solving the Normal Equations $A^T A \hat{x} = A^T b$. This is a fundamental result!

## 4. Solving the Normal Equations

The Normal Equations $A^T A \hat{x} = A^T b$ form a new system of linear equations.
*   The matrix $A^T A$ is a square matrix.
*   The vector $A^T b$ is a known vector.

If $A^T A$ is invertible, then we can find a unique solution for $\hat{x}$:

$\hat{x} = (A^T A)^{-1} A^T b$

**When is $A^T A$ invertible?**
$A^T A$ is invertible if and only if the columns of $A$ are linearly independent. This is a very important condition! In most practical data science scenarios, we construct $A$ such that its columns are indeed linearly independent, ensuring a unique least squares solution. If the columns of $A$ are *not* linearly independent, $A^T A$ will be singular, and there will be infinitely many solutions. In such cases, we might use methods like Singular Value Decomposition (SVD) to find a particular "best" solution, but for our current scope, we focus on the case where columns of $A$ are linearly independent.

## 5. An Example: Fitting a Line to Data

Let's make this concrete. Suppose we have the following data points $(x, y)$: $(1, 2)$, $(2, 4)$, $(3, 5)$. We want to find the line $y = m x + c$ that best fits these points.

Our model is $y \approx mx + c$. We can write this as a system of equations:
*   For $(1, 2)$: $m(1) + c = 2$
*   For $(2, 4)$: $m(2) + c = 4$
*   For $(3, 5)$: $m(3) + c = 5$

This system can be written in matrix form $Ax = b$:

$\begin{pmatrix} 1 & 1 \\ 2 & 1 \\ 3 & 1 \end{pmatrix} \begin{pmatrix} m \\ c \end{pmatrix} = \begin{pmatrix} 2 \\ 4 \\ 5 \end{pmatrix}$

Here,
$A = \begin{pmatrix} 1 & 1 \\ 2 & 1 \\ 3 & 1 \end{pmatrix}$, $x = \begin{pmatrix} m \\ c \end{pmatrix}$, and $b = \begin{pmatrix} 2 \\ 4 \\ 5 \end{pmatrix}$.

This is an overdetermined system (3 equations, 2 unknowns). There's no exact line that passes through all three points. Let's find the least squares solution for $(m, c)$.

**Step 1: Compute $A^T A$**

$A^T = \begin{pmatrix} 1 & 2 & 3 \\ 1 & 1 & 1 \end{pmatrix}$

$A^T A = \begin{pmatrix} 1 & 2 & 3 \\ 1 & 1 & 1 \end{pmatrix} \begin{pmatrix} 1 & 1 \\ 2 & 1 \\ 3 & 1 \end{pmatrix} = \begin{pmatrix} (1\cdot1 + 2\cdot2 + 3\cdot3) & (1\cdot1 + 2\cdot1 + 3\cdot1) \\ (1\cdot1 + 1\cdot2 + 1\cdot3) & (1\cdot1 + 1\cdot1 + 1\cdot1) \end{pmatrix} = \begin{pmatrix} 1+4+9 & 1+2+3 \\ 1+2+3 & 1+1+1 \end{pmatrix} = \begin{pmatrix} 14 & 6 \\ 6 & 3 \end{pmatrix}$

**Step 2: Compute $A^T b$**

$A^T b = \begin{pmatrix} 1 & 2 & 3 \\ 1 & 1 & 1 \end{pmatrix} \begin{pmatrix} 2 \\ 4 \\ 5 \end{pmatrix} = \begin{pmatrix} (1\cdot2 + 2\cdot4 + 3\cdot5) \\ (1\cdot2 + 1\cdot4 + 1\cdot5) \end{pmatrix} = \begin{pmatrix} 2+8+15 \\ 2+4+5 \end{pmatrix} = \begin{pmatrix} 25 \\ 11 \end{pmatrix}$

**Step 3: Solve the Normal Equations $A^T A \hat{x} = A^T b$**

We need to solve:
$\begin{pmatrix} 14 & 6 \\ 6 & 3 \end{pmatrix} \begin{pmatrix} m \\ c \end{pmatrix} = \begin{pmatrix} 25 \\ 11 \end{pmatrix}$

We can use matrix inversion. First, find the determinant of $A^T A$:
$\det(A^T A) = (14 \cdot 3) - (6 \cdot 6) = 42 - 36 = 6$.
Since the determinant is non-zero, the matrix is invertible, and our columns of A were indeed linearly independent.

Now, find the inverse of $A^T A$:
$(A^T A)^{-1} = \frac{1}{6} \begin{pmatrix} 3 & -6 \\ -6 & 14 \end{pmatrix} = \begin{pmatrix} 1/2 & -1 \\ -1 & 7/3 \end{pmatrix}$

Finally, calculate $\hat{x}$:
$\hat{x} = (A^T A)^{-1} A^T b = \begin{pmatrix} 1/2 & -1 \\ -1 & 7/3 \end{pmatrix} \begin{pmatrix} 25 \\ 11 \end{pmatrix}$

$\hat{x} = \begin{pmatrix} (1/2 \cdot 25) + (-1 \cdot 11) \\ (-1 \cdot 25) + (7/3 \cdot 11) \end{pmatrix} = \begin{pmatrix} 12.5 - 11 \\ -25 + 77/3 \end{pmatrix} = \begin{pmatrix} 1.5 \\ (-75+77)/3 \end{pmatrix} = \begin{pmatrix} 1.5 \\ 2/3 \end{pmatrix}$

So, our least squares solution is $\hat{m} = 1.5$ and $\hat{c} = 2/3$.
The best-fitting line is $y = 1.5x + 2/3$.

Let's quickly check how well this line fits the original points:
*   For $(1, 2)$: $1.5(1) + 2/3 = 1.5 + 0.666... = 2.166...$ (close to 2)
*   For $(2, 4)$: $1.5(2) + 2/3 = 3 + 0.666... = 3.666...$ (close to 4)
*   For $(3, 5)$: $1.5(3) + 2/3 = 4.5 + 0.666... = 5.166...$ (close to 5)

The errors are:
$e_1 = 2 - 2.166... = -0.166...$
$e_2 = 4 - 3.666... = 0.333...$
$e_3 = 5 - 5.166... = -0.166...$

The sum of squared errors is $(-0.166...)^2 + (0.333...)^2 + (-0.166...)^2$, which is indeed minimized by these values of $m$ and $c$.

**Common Pitfall:** Forgetting to transpose the matrix $A$ when calculating $A^T$ or $A^T A$. Double-check your matrix multiplications!

## 6. Connection to Linear Regression and Statistics

The least squares method is the bedrock of **linear regression**, a core technique in statistics and machine learning. When we perform linear regression to model the relationship between a dependent variable (like temperature) and one or more independent variables (like time, or other factors), we are essentially solving a least squares problem.

The coefficients we find ($\hat{m}$ and $\hat{c}$ in our example) are estimates of the true underlying parameters that govern the relationship. The method provides the "best linear unbiased estimator" (BLUE) of these parameters under certain statistical assumptions, as shown by the Gauss-Markov theorem. This means it's not just a mathematical trick; it has strong statistical justification.

Your textbooks, like Kreyszig's *Advanced Engineering Mathematics* and Larson's *Elementary Linear Algebra*, cover these foundational aspects. Deisenroth, Faisal, and Ong's *Mathematics for Machine Learning* and Strang's *Linear algebra and learning from data* dive even deeper into the applications and broader context within machine learning. They all explain how minimizing the sum of squared errors provides these optimal linear estimators.

## 7. Towards Orthogonalization and Other Methods

While solving the Normal Equations directly is straightforward when $A^T A$ is well-behaved, it can sometimes lead to numerical instability if $A$ is "ill-conditioned" (columns are almost linearly dependent). In such cases, or when dealing with very large matrices, other methods are preferred.

One such method involves using an **orthonormal basis** for the column space of $A$. If we can transform $A$ into a matrix $Q$ whose columns form an orthonormal set, the calculation becomes much simpler. This is where the **Gram-Schmidt process** (which we touched upon in our discussions of orthonormalization for CO3) becomes highly relevant.

If $A = QR$, where $Q$ has orthonormal columns and $R$ is upper triangular, then:
$A^T A = (QR)^T (QR) = R^T Q^T Q R = R^T I R = R^T R$

And the Normal Equations become:
$R^T R \hat{x} = (QR)^T b = R^T Q^T b$

If $R$ is invertible (which is usually the case if $A$ has full column rank), we can multiply by $(R^T)^{-1}$:
$R \hat{x} = Q^T b$

This system $R \hat{x} = Q^T b$ is an upper triangular system, which is very easy to solve using back-substitution. This approach, often derived from **QR decomposition**, is numerically more stable than directly forming and inverting $A^T A$.

Another powerful technique that handles least squares problems and is central to many machine learning algorithms is **Singular Value Decomposition (SVD)**. SVD decomposes $A$ into $U \Sigma V^T$, and using this, we can find the least squares solution in a very robust way, even when $A^T A$ is singular.

However, for the scope of this module and understanding the core concept, solving the Normal Equations is our primary focus.

## Summary and Key Takeaways for Exams

*   **What is the Least Squares Problem?** It's about finding the best approximate solution $\hat{x}$ to an overdetermined system of linear equations $Ax = b$, by minimizing the squared length of the error vector $||b - Ax||^2$.
*   **The Normal Equations:** These are the core: $A^T A \hat{x} = A^T b$. They arise from requiring the error vector $b - A\hat{x}$ to be orthogonal to the column space of $A$.
*   **The Solution:** If $A^T A$ is invertible (i.e., columns of $A$ are linearly independent), the unique solution is $\hat{x} = (A^T A)^{-1} A^T b$.
*   **Geometric Interpretation:** The vector $A\hat{x}$ is the orthogonal projection of $b$ onto the column space of $A$.
*   **Applications:** Crucial for linear regression, curve fitting, and many data analysis tasks in Information Science.
*   **Numerical Stability:** While direct solution of Normal Equations is key, be aware of QR decomposition and SVD for more numerically robust solutions in practice, especially with ill-conditioned matrices.

Remember, the power of least squares lies in its ability to give us the "best guess" when perfect prediction isn't possible, using the elegance of linear algebra and inner product spaces.

---

## Sample Questions and Answers

**1. Conceptual Question:** Why do we typically try to minimize the *squared* length of the error vector in the least squares problem, rather than just the length?

**Answer:** We minimize the squared length for several reasons, which are crucial for mathematical tractability and practical desirability. Firstly, the squared length function, $||e||^2 = e^T e$, is a smooth (differentiable) function of the components of $e$. This allows us to use calculus, specifically by taking derivatives and setting them to zero, to find the minimum. Minimizing the length $||e||$ would involve a square root, making differentiation more complex. Secondly, squaring the errors heavily penalizes larger errors more than smaller ones, which is often a desired property in real-world modeling. Finally, the squared length has a direct connection to the inner product, aligning with the vector space concepts we've studied.

**2. Calculation Question:** Given the data points $(1, 1)$, $(2, 3)$, $(3, 2)$, find the least squares line $y = mx + c$ that best fits these points.

**Answer:**
First, set up the matrix equation $Ax=b$ for the model $y = mx+c$.
For the given points:
$1m + c = 1$
$2m + c = 3$
$3m + c = 2$

This translates to:
$A = \begin{pmatrix} 1 & 1 \\ 2 & 1 \\ 3 & 1 \end{pmatrix}$, $x = \begin{pmatrix} m \\ c \end{pmatrix}$, $b = \begin{pmatrix} 1 \\ 3 \\ 2 \end{pmatrix}$

Now, we solve the Normal Equations $A^T A \hat{x} = A^T b$.

**Compute $A^T A$:**
$A^T = \begin{pmatrix} 1 & 2 & 3 \\ 1 & 1 & 1 \end{pmatrix}$
$A^T A = \begin{pmatrix} 1 & 2 & 3 \\ 1 & 1 & 1 \end{pmatrix} \begin{pmatrix} 1 & 1 \\ 2 & 1 \\ 3 & 1 \end{pmatrix} = \begin{pmatrix} (1+4+9) & (1+2+3) \\ (1+2+3) & (1+1+1) \end{pmatrix} = \begin{pmatrix} 14 & 6 \\ 6 & 3 \end{pmatrix}$

**Compute $A^T b$:**
$A^T b = \begin{pmatrix} 1 & 2 & 3 \\ 1 & 1 & 1 \end{pmatrix} \begin{pmatrix} 1 \\ 3 \\ 2 \end{pmatrix} = \begin{pmatrix} (1+6+6) \\ (1+3+2) \end{pmatrix} = \begin{pmatrix} 13 \\ 6 \end{pmatrix}$

**Solve $A^T A \hat{x} = A^T b$:**
$\begin{pmatrix} 14 & 6 \\ 6 & 3 \end{pmatrix} \begin{pmatrix} m \\ c \end{pmatrix} = \begin{pmatrix} 13 \\ 6 \end{pmatrix}$

We can solve this system. Multiply the second equation by 2:
$12m + 6c = 12$
Subtract this from the first equation:
$(14m + 6c) - (12m + 6c) = 13 - 12$
$2m = 1 \implies m = 0.5$

Substitute $m=0.5$ into the second original equation $6m + 3c = 6$:
$6(0.5) + 3c = 6$
$3 + 3c = 6$
$3c = 3 \implies c = 1$

So, the least squares line is $\hat{y} = 0.5x + 1$.

**3. Conceptual Understanding (CO3 Link):** How does the concept of orthogonality help us derive the Normal Equations?

**Answer:** The core idea is that the best-fit line $A\hat{x}$ must be the orthogonal projection of the actual data vector $b$ onto the column space of $A$. By definition of orthogonal projection, the error vector $e = b - A\hat{x}$ must be orthogonal to every vector in the column space of $A$. This means $e$ must be orthogonal to each of the columns of $A$. Mathematically, if $a_i$ is a column of $A$, then $a_i^T e = 0$. Stacking these individual orthogonality conditions for all columns of $A$ leads to the matrix equation $A^T e = 0$. Substituting $e = b - A\hat{x}$ into this equation gives $A^T (b - A\hat{x}) = 0$, which expands to the Normal Equations: $A^T b - A^T A \hat{x} = 0$, or $A^T A \hat{x} = A^T b$. This derivation beautifully links the geometric notion of orthogonality in inner product spaces to the algebraic solution of the least squares problem.

---
