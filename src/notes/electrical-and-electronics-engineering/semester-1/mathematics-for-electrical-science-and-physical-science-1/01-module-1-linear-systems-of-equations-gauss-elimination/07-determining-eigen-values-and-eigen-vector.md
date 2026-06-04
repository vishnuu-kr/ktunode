---
title: "Determining Eigen values and Eigen vector"
subject: "MATHEMATICS FOR ELECTRICAL SCIENCE AND PHYSICAL 
SCIENCE - 1"
module: "Module 1: Linear systems of equations: Gauss elimination"
branch: "Electrical and Electronics Engineering"
semester: 1
topicId: "68bd213e9ece2bdd875f94f6"
status: "completed"
scrapedAt: "2026-05-23T16:03:06.729Z"
---
# Module 1: Linear Systems of Equations: Gauss Elimination
## Topic: Determining Eigenvalues and Eigenvectors

Welcome, everyone! Today, we're going to dive into a really fascinating and incredibly important topic in linear algebra: **Eigenvalues and Eigenvectors**. You might be thinking, "Wait, we're talking about Gauss elimination, and now suddenly we're talking about eigenvalues?" That's a great observation! The beauty of mathematics is how different concepts connect. While Gauss elimination is our primary tool for solving systems of linear equations, understanding eigenvalues and eigenvectors often involves manipulating and solving linear systems, and it's fundamental to many areas of electrical science and physical science.

Remember our course outcome CO1: "Solve systems of linear equations and diagonalize matrices"? Determining eigenvalues and eigenvectors is absolutely central to matrix diagonalization. It’s the key that unlocks a deeper understanding of a matrix’s behavior and allows us to simplify complex problems.

### What are Eigenvalues and Eigenvectors? A Geometric Perspective

Let’s start with an analogy. Imagine you have a special kind of machine – a transformation machine. You feed it any object (represented by a vector), and it spits out a transformed object (another vector). Most of the time, when you transform an object, its direction and length change in a rather complicated way.

However, for certain special vectors, this transformation machine acts in a very simple manner. It might stretch or shrink the vector, or even flip its direction, but it **doesn't change the fundamental direction** of the vector. These special vectors are called **eigenvectors**, and the factor by which they are stretched or shrunk (or flipped) is called the **eigenvalue**.

Think of it like a spinning globe. If you point a laser beam along the Earth's axis of rotation, no matter how much the Earth spins, that laser beam will always point in the same direction (along the axis). The axis is like an eigenvector, and the amount of rotation per unit time might be related to an eigenvalue.

In mathematical terms, for a square matrix $A$, an **eigenvector** $v$ is a non-zero vector that, when multiplied by $A$, results in a vector that is simply a scaled version of $v$. This scaling factor is the **eigenvalue**, denoted by $\lambda$.

Mathematically, this relationship is expressed as:

$Av = \lambda v$

Here:
*   $A$ is an $n \times n$ square matrix (representing our transformation).
*   $v$ is a non-zero $n \times 1$ column vector (our eigenvector).
*   $\lambda$ is a scalar (our eigenvalue).

This equation is the heart of everything we'll discuss today. It tells us that applying the transformation $A$ to an eigenvector $v$ is equivalent to just scaling $v$ by the eigenvalue $\lambda$.

### Deriving the Characteristic Equation: How to Find Eigenvalues

Now, how do we find these special $\lambda$ and $v$ values? We need to rearrange our fundamental equation, $Av = \lambda v$, into a form we can solve.

Let’s move the $\lambda v$ term to the left side:
$Av - \lambda v = 0$

To subtract $\lambda v$ from $Av$, we need $\lambda v$ to be in the same "format" as $Av$. We can achieve this by multiplying $\lambda$ by the identity matrix $I$ of the same size as $A$ (an $n \times n$ identity matrix). So, $\lambda v = \lambda I v$.

Our equation becomes:
$Av - \lambda I v = 0$

Now, we can factor out the vector $v$:
$(A - \lambda I) v = 0$

This is a homogeneous system of linear equations. We’re looking for a non-zero solution for $v$. A homogeneous system of linear equations has a non-trivial (non-zero) solution if and only if the determinant of the coefficient matrix is zero. In our case, the coefficient matrix is $(A - \lambda I)$.

So, for non-zero eigenvectors $v$ to exist, we must have:

$\det(A - \lambda I) = 0$

This equation is called the **characteristic equation** of the matrix $A$. Solving this polynomial equation for $\lambda$ will give us the **eigenvalues** of matrix $A$.

**Remember this:** The eigenvalues are the roots of the characteristic equation $\det(A - \lambda I) = 0$.

Let’s consider an example. Suppose we have a 2x2 matrix:

$A = \begin{pmatrix} 4 & 1 \\ 2 & 3 \end{pmatrix}$

To find the eigenvalues, we first need to construct the matrix $(A - \lambda I)$:

$A - \lambda I = \begin{pmatrix} 4 & 1 \\ 2 & 3 \end{pmatrix} - \lambda \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} = \begin{pmatrix} 4-\lambda & 1 \\ 2 & 3-\lambda \end{pmatrix}$

Now, we compute the determinant and set it to zero:

$\det(A - \lambda I) = (4-\lambda)(3-\lambda) - (1)(2) = 0$

Expand this out:
$12 - 4\lambda - 3\lambda + \lambda^2 - 2 = 0$
$\lambda^2 - 7\lambda + 10 = 0$

This is our characteristic equation. We can solve this quadratic equation for $\lambda$. Factoring it, we get:
$(\lambda - 2)(\lambda - 5) = 0$

So, the eigenvalues are $\lambda_1 = 2$ and $\lambda_2 = 5$.

**Connection to CO1:** Finding the eigenvalues of a matrix is a direct step towards diagonalizing the matrix, which is a core part of CO1.

### Finding Eigenvectors for Each Eigenvalue

Once we have the eigenvalues, we need to find the corresponding eigenvectors. For each eigenvalue $\lambda$, we go back to the equation $(A - \lambda I) v = 0$ and solve for the vector $v$. This is where our Gauss elimination skills might come in handy!

Let’s continue with our example matrix $A = \begin{pmatrix} 4 & 1 \\ 2 & 3 \end{pmatrix}$. We found eigenvalues $\lambda_1 = 2$ and $\lambda_2 = 5$.

#### For $\lambda_1 = 2$:

We substitute $\lambda = 2$ into $(A - \lambda I) v = 0$:

$(A - 2I) v = 0$

$\begin{pmatrix} 4-2 & 1 \\ 2 & 3-2 \end{pmatrix} \begin{pmatrix} v_1 \\ v_2 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}$

$\begin{pmatrix} 2 & 1 \\ 2 & 1 \end{pmatrix} \begin{pmatrix} v_1 \\ v_2 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}$

This gives us the system of equations:
$2v_1 + v_2 = 0$
$2v_1 + v_2 = 0$

Notice that both equations are identical. This is expected! If they weren't, it would mean something went wrong in calculating the eigenvalue. This redundancy means we have one free variable. Let $v_1 = t$ (where $t$ is any non-zero scalar, since eigenvectors must be non-zero). Then, from the first equation, $v_2 = -2v_1 = -2t$.

So, the eigenvector $v$ corresponding to $\lambda_1 = 2$ is of the form:

$v = \begin{pmatrix} t \\ -2t \end{pmatrix} = t \begin{pmatrix} 1 \\ -2 \end{pmatrix}$

We usually pick the simplest non-zero representative, so for $\lambda_1 = 2$, a corresponding eigenvector is $v_1 = \begin{pmatrix} 1 \\ -2 \end{pmatrix}$.

**Let's check our work:**
$Av_1 = \begin{pmatrix} 4 & 1 \\ 2 & 3 \end{pmatrix} \begin{pmatrix} 1 \\ -2 \end{pmatrix} = \begin{pmatrix} 4(1) + 1(-2) \\ 2(1) + 3(-2) \end{pmatrix} = \begin{pmatrix} 4-2 \\ 2-6 \end{pmatrix} = \begin{pmatrix} 2 \\ -4 \end{pmatrix}$
And $\lambda_1 v_1 = 2 \begin{pmatrix} 1 \\ -2 \end{pmatrix} = \begin{pmatrix} 2 \\ -4 \end{pmatrix}$.
They match! So, our calculation is correct.

#### For $\lambda_2 = 5$:

Now, we substitute $\lambda = 5$ into $(A - \lambda I) v = 0$:

$(A - 5I) v = 0$

$\begin{pmatrix} 4-5 & 1 \\ 2 & 3-5 \end{pmatrix} \begin{pmatrix} v_1 \\ v_2 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}$

$\begin{pmatrix} -1 & 1 \\ 2 & -2 \end{pmatrix} \begin{pmatrix} v_1 \\ v_2 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}$

This gives us the system:
$-v_1 + v_2 = 0$
$2v_1 - 2v_2 = 0$

Again, the equations are dependent. The second equation is just $-2$ times the first. From $-v_1 + v_2 = 0$, we get $v_2 = v_1$.
Let $v_1 = s$ (where $s$ is any non-zero scalar). Then $v_2 = s$.

So, the eigenvector $v$ corresponding to $\lambda_2 = 5$ is of the form:

$v = \begin{pmatrix} s \\ s \end{pmatrix} = s \begin{pmatrix} 1 \\ 1 \end{pmatrix}$

A corresponding eigenvector is $v_2 = \begin{pmatrix} 1 \\ 1 \end{pmatrix}$.

**Let's check:**
$Av_2 = \begin{pmatrix} 4 & 1 \\ 2 & 3 \end{pmatrix} \begin{pmatrix} 1 \\ 1 \end{pmatrix} = \begin{pmatrix} 4(1) + 1(1) \\ 2(1) + 3(1) \end{pmatrix} = \begin{pmatrix} 5 \\ 5 \end{pmatrix}$
And $\lambda_2 v_2 = 5 \begin{pmatrix} 1 \\ 1 \end{pmatrix} = \begin{pmatrix} 5 \\ 5 \end{pmatrix}$.
They match! Our eigenvector calculation for $\lambda_2=5$ is also correct.

**Important Note:** Any non-zero scalar multiple of an eigenvector is also an eigenvector for the same eigenvalue. For example, for $\lambda_1=2$, $\begin{pmatrix} 2 \\ -4 \end{pmatrix}$ or $\begin{pmatrix} -1 \\ 2 \end{pmatrix}$ are also valid eigenvectors. We typically choose the simplest form.

### Using Gauss Elimination to Solve $(A - \lambda I)v = 0$

Sometimes, the system $(A - \lambda I) v = 0$ is not immediately obvious how to solve, especially for larger matrices. This is where Gauss elimination (or Gauss-Jordan elimination) shines.

Let's take an example where we might need it more explicitly. Consider matrix $B$:

$B = \begin{pmatrix} 3 & -2 & 0 \\ -2 & 6 & -2 \\ 0 & -2 & 3 \end{pmatrix}$

First, find eigenvalues. The characteristic equation is $\det(B - \lambda I) = 0$.

$B - \lambda I = \begin{pmatrix} 3-\lambda & -2 & 0 \\ -2 & 6-\lambda & -2 \\ 0 & -2 & 3-\lambda \end{pmatrix}$

Calculating the determinant:
$(3-\lambda)[(6-\lambda)(3-\lambda) - (-2)(-2)] - (-2)[(-2)(3-\lambda) - 0] + 0 = 0$
$(3-\lambda)[18 - 6\lambda - 3\lambda + \lambda^2 - 4] + 2[-6 + 2\lambda] = 0$
$(3-\lambda)[\lambda^2 - 9\lambda + 14] + (-12 + 4\lambda) = 0$
$3\lambda^2 - 27\lambda + 42 - \lambda^3 + 9\lambda^2 - 14\lambda - 12 + 4\lambda = 0$
$-\lambda^3 + 12\lambda^2 - 37\lambda + 30 = 0$
$\lambda^3 - 12\lambda^2 + 37\lambda - 30 = 0$

Let's try to find integer roots. Possible roots are divisors of 30: $\pm1, \pm2, \pm3, \pm5, \pm6, \pm10, \pm15, \pm30$.
If $\lambda=2$: $8 - 12(4) + 37(2) - 30 = 8 - 48 + 74 - 30 = 82 - 78 = 4 \neq 0$.
If $\lambda=3$: $27 - 12(9) + 37(3) - 30 = 27 - 108 + 111 - 30 = 138 - 138 = 0$. So $\lambda_1 = 3$ is an eigenvalue.
If $\lambda=5$: $125 - 12(25) + 37(5) - 30 = 125 - 300 + 185 - 30 = 310 - 330 = -20 \neq 0$.
If $\lambda=6$: $216 - 12(36) + 37(6) - 30 = 216 - 432 + 222 - 30 = 438 - 462 = -24 \neq 0$.

Let's use polynomial division or synthetic division with $\lambda=3$.
$(\lambda^3 - 12\lambda^2 + 37\lambda - 30) / (\lambda - 3) = \lambda^2 - 9\lambda + 10$.

Now we solve $\lambda^2 - 9\lambda + 10 = 0$. Using the quadratic formula $\lambda = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$:
$\lambda = \frac{9 \pm \sqrt{(-9)^2 - 4(1)(10)}}{2(1)} = \frac{9 \pm \sqrt{81 - 40}}{2} = \frac{9 \pm \sqrt{41}}{2}$.

So, our eigenvalues are $\lambda_1 = 3$, $\lambda_2 = \frac{9 + \sqrt{41}}{2}$, and $\lambda_3 = \frac{9 - \sqrt{41}}{2}$. These eigenvalues are common in problems related to oscillations and stability in physical systems.

Now let's find the eigenvectors.

#### For $\lambda_1 = 3$:

We solve $(B - 3I)v = 0$:
$\begin{pmatrix} 3-3 & -2 & 0 \\ -2 & 6-3 & -2 \\ 0 & -2 & 3-3 \end{pmatrix} \begin{pmatrix} v_1 \\ v_2 \\ v_3 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}$

$\begin{pmatrix} 0 & -2 & 0 \\ -2 & 3 & -2 \\ 0 & -2 & 0 \end{pmatrix} \begin{pmatrix} v_1 \\ v_2 \\ v_3 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}$

The augmented matrix for Gauss elimination is:
$\left(\begin{array}{ccc|c} 0 & -2 & 0 & 0 \\ -2 & 3 & -2 & 0 \\ 0 & -2 & 0 & 0 \end{array}\right)$

Let's swap R1 and R2 to get a pivot in the top left:
$\left(\begin{array}{ccc|c} -2 & 3 & -2 & 0 \\ 0 & -2 & 0 & 0 \\ 0 & -2 & 0 & 0 \end{array}\right)$

Divide R1 by -2:
$\left(\begin{array}{ccc|c} 1 & -3/2 & 1 & 0 \\ 0 & -2 & 0 & 0 \\ 0 & -2 & 0 & 0 \end{array}\right)$

Divide R2 by -2:
$\left(\begin{array}{ccc|c} 1 & -3/2 & 1 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & -2 & 0 & 0 \end{array}\right)$

Now, use R2 to eliminate the entry in R3: R3 = R3 + 2*R2
$\left(\begin{array}{ccc|c} 1 & -3/2 & 1 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 0 & 0 \end{array}\right)$

This system is in row echelon form. Let's write it back as equations:
$v_1 - \frac{3}{2}v_2 + v_3 = 0$
$v_2 = 0$

Since $v_2=0$, substitute this into the first equation:
$v_1 - \frac{3}{2}(0) + v_3 = 0$
$v_1 + v_3 = 0 \implies v_3 = -v_1$.

We have two free variables here ($v_1$ and $v_3$ are related). Let $v_1 = t$. Then $v_3 = -t$.
So, the eigenvector is of the form $v = \begin{pmatrix} t \\ 0 \\ -t \end{pmatrix} = t \begin{pmatrix} 1 \\ 0 \\ -1 \end{pmatrix}$.

A corresponding eigenvector for $\lambda_1 = 3$ is $v_1 = \begin{pmatrix} 1 \\ 0 \\ -1 \end{pmatrix}$.

**Check:**
$Bv_1 = \begin{pmatrix} 3 & -2 & 0 \\ -2 & 6 & -2 \\ 0 & -2 & 3 \end{pmatrix} \begin{pmatrix} 1 \\ 0 \\ -1 \end{pmatrix} = \begin{pmatrix} 3(1)-2(0)+0(-1) \\ -2(1)+6(0)-2(-1) \\ 0(1)-2(0)+3(-1) \end{pmatrix} = \begin{pmatrix} 3 \\ -2+2 \\ -3 \end{pmatrix} = \begin{pmatrix} 3 \\ 0 \\ -3 \end{pmatrix}$.
And $\lambda_1 v_1 = 3 \begin{pmatrix} 1 \\ 0 \\ -1 \end{pmatrix} = \begin{pmatrix} 3 \\ 0 \\ -3 \end{pmatrix}$. It matches.

For the other eigenvalues $\lambda_2 = \frac{9 + \sqrt{41}}{2}$ and $\lambda_3 = \frac{9 - \sqrt{41}}{2}$, the process would be similar, but the algebra would involve these irrational numbers. The fundamental approach of setting up $(B - \lambda I)v = 0$ and solving the linear system remains the same.

**Common Pitfall:** When solving $(A - \lambda I)v = 0$, students sometimes forget that $v$ must be non-zero. This is why we look for solutions when $\det(A - \lambda I) = 0$. If you get $v=0$ as the only solution, it means you made a mistake in finding $\lambda$.

### Eigenvalues and Eigenvectors in Electrical and Physical Science

Why do we care so much about eigenvalues and eigenvectors? They are not just abstract mathematical concepts. They have very real applications:

1.  **System Stability Analysis (Electrical Engineering & Control Theory):** In circuits or control systems, the behavior of the system over time is often described by differential equations. When these are converted into matrix form, the eigenvalues of the system matrix determine the stability.
    *   If all eigenvalues have negative real parts, the system is stable and will return to equilibrium after a disturbance.
    *   If any eigenvalue has a positive real part, the system is unstable.
    *   If eigenvalues have zero real parts, the system might oscillate or exhibit neutral stability.
    *   Think of a suspension bridge: if disturbed, it should settle back. An unstable system might wobble more and more. The eigenvalues tell us which scenario is happening. (Relates to CO2 and CO3).

2.  **Vibrational Analysis (Mechanical & Structural Engineering):** In mechanical systems, like a bridge, a building, or even a molecule, eigenvalues correspond to the natural frequencies of vibration, and eigenvectors describe the mode shapes of these vibrations. When you pluck a guitar string, it vibrates at specific frequencies (eigenvalues) in specific patterns (eigenvectors). Understanding these helps engineers design structures that can withstand resonant frequencies.

3.  **Principal Component Analysis (PCA) (Data Science & Signal Processing):** Eigenvalues and eigenvectors are used to reduce the dimensionality of data while retaining the most important information. Eigenvectors point in the directions of maximum variance in the data, and eigenvalues indicate how much variance is in those directions. This is crucial for processing large datasets and extracting meaningful patterns. (Relates to signals and systems).

4.  **Quantum Mechanics (Physics):** In quantum mechanics, physical observables (like energy, momentum) are represented by operators (which behave like matrices). The eigenvalues of these operators represent the possible measurable values of the observable, and the eigenvectors are the corresponding quantum states. For example, the eigenvalues of the Hamiltonian operator are the energy levels of an atom. This is a fundamental concept in understanding atomic and molecular behavior.

5.  **Matrix Diagonalization (Linear Algebra & Numerical Methods):** As mentioned earlier, finding eigenvalues and eigenvectors allows us to diagonalize a matrix $A$. If $P$ is a matrix whose columns are the eigenvectors of $A$, and $D$ is a diagonal matrix with the corresponding eigenvalues on the diagonal, then $A = PDP^{-1}$. This transformation simplifies many calculations, like computing high powers of $A$ ($A^k = PD^kP^{-1}$), which is incredibly useful in iterated processes or simulations. This directly links to CO1.

### Connection to Gaussian Elimination and Solving Linear Systems

The primary connection of eigenvalues and eigenvectors to the Gauss elimination module is in the **process of finding the eigenvectors**. Once we have an eigenvalue $\lambda$, we need to solve the homogeneous system $(A - \lambda I)v = 0$. This is a system of linear equations, and Gauss elimination (or its variants like Gauss-Jordan elimination) is the standard method to find the general solution.

When we apply Gauss elimination to $(A - \lambda I)v = 0$, we transform the augmented matrix $[A - \lambda I | 0]$ into row-echelon or reduced row-echelon form. From this reduced form, we identify the free variables and express the dependent variables in terms of these free variables. The basis vectors for the null space of $(A - \lambda I)$ are the eigenvectors corresponding to $\lambda$.

For example, in our matrix $B$ analysis for $\lambda_1 = 3$, we used Gauss elimination on:
$\begin{pmatrix} 0 & -2 & 0 & 0 \\ -2 & 3 & -2 & 0 \\ 0 & -2 & 0 & 0 \end{pmatrix}$
to arrive at:
$\left(\begin{array}{ccc|c} 1 & -3/2 & 1 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 0 & 0 \end{array}\right)$
which then allowed us to determine that $v_2=0$ and $v_1 + v_3 = 0$. Without Gauss elimination, solving this system for $v_1, v_2, v_3$ would be much more cumbersome.

### Summary and Key Takeaways

*   **Eigenvectors** are special non-zero vectors whose direction remains unchanged when a linear transformation (represented by a matrix $A$) is applied.
*   **Eigenvalues** ($\lambda$) are the scaling factors by which eigenvectors are stretched or shrunk by the transformation.
*   The fundamental relationship is $Av = \lambda v$.
*   To find eigenvalues, we solve the **characteristic equation**: $\det(A - \lambda I) = 0$. The eigenvalues are the roots of this polynomial.
*   To find eigenvectors for a specific eigenvalue $\lambda$, we solve the homogeneous linear system $(A - \lambda I)v = 0$. This is where **Gauss elimination** is a crucial tool.
*   Eigenvalues and eigenvectors are vital for understanding system stability, natural frequencies of vibration, data analysis, and quantum mechanics.
*   The process of finding eigenvectors directly utilizes techniques learned for solving linear systems.

This topic truly bridges the gap between solving systems of equations and understanding the intrinsic properties of linear transformations, which is essential for your studies in electrical science and physical science.

---

## Sample Questions and Answers

**Question 1 (Conceptual):**
Explain the geometric interpretation of an eigenvalue and its corresponding eigenvector.

**Answer:**
Geometrically, an eigenvector $v$ of a matrix $A$ is a non-zero vector whose direction is preserved when the transformation represented by $A$ is applied. The eigenvalue $\lambda$ associated with this eigenvector is the factor by which the eigenvector is scaled. If $\lambda > 1$, the eigenvector is stretched; if $0 < \lambda < 1$, it is shrunk; if $\lambda < 0$, it is scaled and its direction is reversed; if $\lambda = 1$, it remains unchanged; if $\lambda = 0$, it is mapped to the zero vector. It's like having "invariant directions" under the transformation.

**Question 2 (Procedural):**
Find the eigenvalues and eigenvectors of the matrix $M = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$.

**Answer:**
1.  **Find Eigenvalues:**
    Set up the characteristic equation $\det(M - \lambda I) = 0$.
    $M - \lambda I = \begin{pmatrix} 2-\lambda & 1 \\ 1 & 2-\lambda \end{pmatrix}$
    $\det(M - \lambda I) = (2-\lambda)(2-\lambda) - (1)(1) = (2-\lambda)^2 - 1 = 0$
    $4 - 4\lambda + \lambda^2 - 1 = 0$
    $\lambda^2 - 4\lambda + 3 = 0$
    Factoring: $(\lambda - 1)(\lambda - 3) = 0$
    The eigenvalues are $\lambda_1 = 1$ and $\lambda_2 = 3$.

2.  **Find Eigenvectors:**

    *   **For $\lambda_1 = 1$:**
        Solve $(M - 1I)v = 0$:
        $\begin{pmatrix} 2-1 & 1 \\ 1 & 2-1 \end{pmatrix} \begin{pmatrix} v_1 \\ v_2 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}$
        $\begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix} \begin{pmatrix} v_1 \\ v_2 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}$
        This gives the equation $v_1 + v_2 = 0$, or $v_2 = -v_1$.
        Let $v_1 = t$, then $v_2 = -t$. The eigenvector is $v_1 = t \begin{pmatrix} 1 \\ -1 \end{pmatrix}$.
        A representative eigenvector is $\begin{pmatrix} 1 \\ -1 \end{pmatrix}$.

    *   **For $\lambda_2 = 3$:**
        Solve $(M - 3I)v = 0$:
        $\begin{pmatrix} 2-3 & 1 \\ 1 & 2-3 \end{pmatrix} \begin{pmatrix} v_1 \\ v_2 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}$
        $\begin{pmatrix} -1 & 1 \\ 1 & -1 \end{pmatrix} \begin{pmatrix} v_1 \\ v_2 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}$
        This gives the equation $-v_1 + v_2 = 0$, or $v_2 = v_1$.
        Let $v_1 = s$, then $v_2 = s$. The eigenvector is $v_2 = s \begin{pmatrix} 1 \\ 1 \end{pmatrix}$.
        A representative eigenvector is $\begin{pmatrix} 1 \\ 1 \end{pmatrix}$.

**Question 3 (Application/Exam-Oriented):**
Consider a system described by the matrix $A = \begin{pmatrix} -1 & 2 \\ -2 & -1 \end{pmatrix}$. Determine if the system is stable. What physical phenomenon do the eigenvalues relate to in such a system? (Hint: Think about systems of differential equations in the form $\mathbf{x}' = A\mathbf{x}$).

**Answer:**
1.  **Find Eigenvalues:**
    Characteristic equation: $\det(A - \lambda I) = 0$.
    $A - \lambda I = \begin{pmatrix} -1-\lambda & 2 \\ -2 & -1-\lambda \end{pmatrix}$
    $\det(A - \lambda I) = (-1-\lambda)(-1-\lambda) - (2)(-2) = (-1-\lambda)^2 + 4 = 0$
    $(1+\lambda)^2 + 4 = 0$
    $(1+\lambda)^2 = -4$
    $1+\lambda = \pm \sqrt{-4} = \pm 2i$
    $\lambda = -1 \pm 2i$

    The eigenvalues are $\lambda_1 = -1 + 2i$ and $\lambda_2 = -1 - 2i$.

2.  **Determine Stability:**
    For a system $\mathbf{x}' = A\mathbf{x}$, stability is determined by the real parts of the eigenvalues.
    The real part of both eigenvalues is $\text{Re}(\lambda_1) = \text{Re}(\lambda_2) = -1$.
    Since the real parts are negative, the system is **stable**. This means that any small perturbation from an equilibrium point will decay over time, and the system will return to equilibrium.

3.  **Physical Phenomenon:**
    In systems of differential equations, particularly those modeling physical phenomena like oscillations or damped motion, eigenvalues often correspond to the **frequency and damping characteristics** of the system.
    *   The imaginary part of the eigenvalues ($ \pm 2i $) corresponds to oscillatory behavior (a frequency of 2).
    *   The negative real part ($ -1 $) indicates damping, meaning these oscillations will decay over time.
    Thus, eigenvalues in this context describe a **damped oscillatory motion**. Think of a mass-spring-damper system where the oscillations gradually die out. If the real part were positive, the oscillations would grow, leading to instability.

**Question 4 (Connection to Gauss Elimination):**
For the matrix $C = \begin{pmatrix} 2 & 0 & 0 \\ 0 & 1 & 1 \\ 0 & 1 & 1 \end{pmatrix}$, find an eigenvalue and its corresponding eigenvector. Show how Gauss elimination is used to find the eigenvector.

**Answer:**
1.  **Find Eigenvalues:**
    $C - \lambda I = \begin{pmatrix} 2-\lambda & 0 & 0 \\ 0 & 1-\lambda & 1 \\ 0 & 1 & 1-\lambda \end{pmatrix}$
    $\det(C - \lambda I) = (2-\lambda) \det \begin{pmatrix} 1-\lambda & 1 \\ 1 & 1-\lambda \end{pmatrix} - 0 + 0$
    $= (2-\lambda) [(1-\lambda)^2 - 1] = 0$
    This gives us two possibilities:
    *   $2-\lambda = 0 \implies \lambda_1 = 2$.
    *   $(1-\lambda)^2 - 1 = 0 \implies (1-\lambda)^2 = 1 \implies 1-\lambda = \pm 1$.
        *   $1-\lambda = 1 \implies \lambda_2 = 0$.
        *   $1-\lambda = -1 \implies \lambda_3 = 2$.

    So, the eigenvalues are $\lambda_1 = 2$ (with multiplicity 2) and $\lambda_2 = 0$. Let's find the eigenvector for $\lambda = 0$.

2.  **Find Eigenvector for $\lambda = 0$:**
    Solve $(C - 0I)v = 0$, which is $Cv = 0$.
    $\begin{pmatrix} 2 & 0 & 0 \\ 0 & 1 & 1 \\ 0 & 1 & 1 \end{pmatrix} \begin{pmatrix} v_1 \\ v_2 \\ v_3 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}$

    Using Gauss elimination on the augmented matrix:
    $\left(\begin{array}{ccc|c} 2 & 0 & 0 & 0 \\ 0 & 1 & 1 & 0 \\ 0 & 1 & 1 & 0 \end{array}\right)$

    *   Divide R1 by 2:
        $\left(\begin{array}{ccc|c} 1 & 0 & 0 & 0 \\ 0 & 1 & 1 & 0 \\ 0 & 1 & 1 & 0 \end{array}\right)$

    *   Subtract R2 from R3 (R3 = R3 - R2):
        $\left(\begin{array}{ccc|c} 1 & 0 & 0 & 0 \\ 0 & 1 & 1 & 0 \\ 0 & 0 & 0 & 0 \end{array}\right)$

    The matrix is now in row echelon form. The equations are:
    $v_1 = 0$
    $v_2 + v_3 = 0$

    From $v_2 + v_3 = 0$, we have $v_3 = -v_2$.
    We have $v_1=0$, and $v_2$ is a free variable. Let $v_2 = t$. Then $v_3 = -t$.
    The eigenvector is $v = \begin{pmatrix} 0 \\ t \\ -t \end{pmatrix} = t \begin{pmatrix} 0 \\ 1 \\ -1 \end{pmatrix}$.
    A representative eigenvector for $\lambda = 0$ is $\begin{pmatrix} 0 \\ 1 \\ -1 \end{pmatrix}$.

    **(Note on $\lambda=2$):** For $\lambda=2$, we would solve $(C-2I)v=0$:
    $\begin{pmatrix} 0 & 0 & 0 \\ 0 & -1 & 1 \\ 0 & 1 & -1 \end{pmatrix} \begin{pmatrix} v_1 \\ v_2 \\ v_3 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}$
    The equations are $0=0$, $-v_2+v_3=0$, and $v_2-v_3=0$.
    This means $v_2=v_3$. $v_1$ is a free variable.
    So, eigenvectors are of the form $\begin{pmatrix} s \\ t \\ t \end{pmatrix} = s\begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix} + t\begin{pmatrix} 0 \\ 1 \\ 1 \end{pmatrix}$.
    Basis eigenvectors for $\lambda=2$ are $\begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix}$ and $\begin{pmatrix} 0 \\ 1 \\ 1 \end{pmatrix}$. This illustrates that for repeated eigenvalues, there might be multiple linearly independent eigenvectors.
