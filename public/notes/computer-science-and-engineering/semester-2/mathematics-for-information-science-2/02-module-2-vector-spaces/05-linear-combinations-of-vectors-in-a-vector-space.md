---
title: "Linear combinations of vectors in a vector space"
subject: "MATHEMATICS FOR INFORMATION SCIENCE – 2"
module: "Module 2: Vector Spaces"
branch: "Computer Science and Engineering"
semester: 2
topicId: "68b45b6e58474a0b135b5d13"
status: "completed"
scrapedAt: "2026-05-20T16:34:35.874Z"
---
All right, everyone, settle in! Welcome back to **Mathematics for Information Science – 2**. We've been on quite a journey through the fundamental building blocks of mathematics, and today, we're diving deep into a concept that’s absolutely central to understanding how we manipulate and analyze data in information science: **Linear Combinations of Vectors**.

This topic is the bedrock for so much of what we’ll do, from solving systems of equations, which you'll see in CO1, to understanding the very structure of vector spaces themselves, as highlighted in CO2. So, let's make sure we really grasp this.

### Module 2: Vector Spaces – The Foundation

Before we talk about *combinations*, let's quickly remind ourselves what a **vector space** is. Think of it as a playground for vectors. It’s a collection of objects (vectors) that you can add together and "scale" (multiply by a scalar, a simple number). The key properties are that these operations behave nicely – they're closed (adding two vectors in the space keeps you in the space) and associative, commutative, and so on. We've seen examples like $\mathbb{R}^n$ (n-dimensional real vectors) and spaces of polynomials. Understanding these structures is crucial for CO2.

Now, imagine you have a few "base" vectors in your vector space. Let’s call them $\mathbf{v}_1, \mathbf{v}_2, \dots, \mathbf{v}_k$. What if we want to create *new* vectors by using these base vectors? That's precisely where linear combinations come in.

### What is a Linear Combination?

At its heart, a **linear combination** of vectors is formed by taking those base vectors, multiplying each of them by a scalar (a simple number), and then adding up the results.

Let's say we have vectors $\mathbf{v}_1, \mathbf{v}_2, \dots, \mathbf{v}_k$ in a vector space $V$. A linear combination of these vectors is any vector $\mathbf{w}$ that can be expressed in the form:

$\mathbf{w} = c_1 \mathbf{v}_1 + c_2 \mathbf{v}_2 + \dots + c_k \mathbf{v}_k$

where $c_1, c_2, \dots, c_k$ are scalars.

Think of it like a recipe. You have ingredients (the vectors $\mathbf{v}_i$), and you have quantities (the scalars $c_i$). You mix them together by scaling and adding, and you get a final dish (the new vector $\mathbf{w}$).

**Why is this important?** Because almost *any* vector in a vector space can be expressed as a linear combination of a specific set of vectors. This idea is fundamental to describing the "span" of a set of vectors, which is a key concept for CO2.

### Everyday Analogies to Visualize Linear Combinations

Let's move away from abstract notation for a moment and make this relatable.

**Analogy 1: Mixing Colors**

Imagine you're an artist. You have a few primary colors: Red ($\mathbf{R}$), Blue ($\mathbf{B}$), and Yellow ($\mathbf{Y}$). You want to create various shades of other colors.

*   To get **Green**, you mix Blue and Yellow: $\text{Green} = 0 \cdot \mathbf{R} + 1 \cdot \mathbf{B} + 1 \cdot \mathbf{Y}$. Here, the scalars are 0, 1, and 1.
*   To get **Orange**, you mix Red and Yellow: $\text{Orange} = 1 \cdot \mathbf{R} + 0 \cdot \mathbf{B} + 1 \cdot \mathbf{Y}$. Scalars are 1, 0, 1.
*   To get a **Muddy Brown**, you might mix all three, perhaps with more Red and Yellow than Blue: $\text{Brown} = 2 \cdot \mathbf{R} + 0.5 \cdot \mathbf{B} + 1.5 \cdot \mathbf{Y}$. The scalars are 2, 0.5, and 1.5.

The set of all colors you can possibly create by mixing Red, Blue, and Yellow is the *span* of $\{\mathbf{R}, \mathbf{B}, \mathbf{Y}\}$. Every achievable color is a linear combination of these primary colors.

**Analogy 2: Navigating a City Grid**

Suppose you're on a city map where streets run north-south and east-west (like $\mathbb{R}^2$). You have two fundamental "movement" vectors:
*   $\mathbf{i} = \langle 1, 0 \rangle$ (move one block East)
*   $\mathbf{j} = \langle 0, 1 \rangle$ (move one block North)

To get to any point on the grid, say, 3 blocks East and 2 blocks North from your starting point, you're performing a linear combination:

$\text{Destination} = 3 \cdot \mathbf{i} + 2 \cdot \mathbf{j} = 3 \cdot \langle 1, 0 \rangle + 2 \cdot \langle 0, 1 \rangle = \langle 3, 0 \rangle + \langle 0, 2 \rangle = \langle 3, 2 \rangle$.

The scalars here are 3 and 2. This works for any point $(x, y)$ in $\mathbb{R}^2$: $(x, y) = x \cdot \langle 1, 0 \rangle + y \cdot \langle 0, 1 \rangle$. The vectors $\langle 1, 0 \rangle$ and $\langle 0, 1 \rangle$ "span" the entire 2D plane.

### Examples in Action

Let's bring this back to more formal mathematical terms, referencing our textbooks like Kreyszig or Larson.

**Example 1: Vectors in $\mathbb{R}^3$**

Consider the vectors $\mathbf{v}_1 = \begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix}$ and $\mathbf{v}_2 = \begin{pmatrix} 4 \\ 5 \\ 6 \end{pmatrix}$ in $\mathbb{R}^3$.

Can we express the vector $\mathbf{w} = \begin{pmatrix} 7 \\ 9 \\ 11 \end{pmatrix}$ as a linear combination of $\mathbf{v}_1$ and $\mathbf{v}_2$?
We are asking: Are there scalars $c_1$ and $c_2$ such that $\mathbf{w} = c_1 \mathbf{v}_1 + c_2 \mathbf{v}_2$?

Let's set up the equation:
$\begin{pmatrix} 7 \\ 9 \\ 11 \end{pmatrix} = c_1 \begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix} + c_2 \begin{pmatrix} 4 \\ 5 \\ 6 \end{pmatrix}$

This expands to a system of linear equations:
1.  $c_1 + 4c_2 = 7$
2.  $2c_1 + 5c_2 = 9$
3.  $3c_1 + 6c_2 = 11$

This directly connects to **CO1: Solve system of linear equations**. To answer our question, we need to solve this system for $c_1$ and $c_2$. If we can find a unique solution (or even any solution), then $\mathbf{w}$ *is* a linear combination.

Let's try to solve it. From equation (1), $c_1 = 7 - 4c_2$. Substitute this into equation (2):
$2(7 - 4c_2) + 5c_2 = 9$
$14 - 8c_2 + 5c_2 = 9$
$14 - 3c_2 = 9$
$-3c_2 = 9 - 14$
$-3c_2 = -5$
$c_2 = \frac{5}{3}$

Now, find $c_1$:
$c_1 = 7 - 4c_2 = 7 - 4\left(\frac{5}{3}\right) = 7 - \frac{20}{3} = \frac{21}{3} - \frac{20}{3} = \frac{1}{3}$

So, we found $c_1 = \frac{1}{3}$ and $c_2 = \frac{5}{3}$. Now, we MUST check if these values satisfy the third equation:
$3c_1 + 6c_2 = 3\left(\frac{1}{3}\right) + 6\left(\frac{5}{3}\right) = 1 + 2(5) = 1 + 10 = 11$.

Yes, it does! So, $\mathbf{w} = \frac{1}{3} \mathbf{v}_1 + \frac{5}{3} \mathbf{v}_2$.
This means $\mathbf{w}$ **is** a linear combination of $\mathbf{v}_1$ and $\mathbf{v}_2$.

**Important Takeaway:** To determine if a vector is a linear combination of others, you set up a system of linear equations and try to solve it. If a solution exists, it is.

**Example 2: Polynomials**

Consider the vector space of polynomials of degree at most 2, denoted $P_2$. A basis for this space is $\{1, x, x^2\}$.
Let's take two polynomials: $p_1(x) = 1 + x$ and $p_2(x) = x^2 - 1$.
Can we write the polynomial $q(x) = 2x^2 + x - 1$ as a linear combination of $p_1(x)$ and $p_2(x)$?

We are looking for scalars $c_1, c_2$ such that:
$q(x) = c_1 p_1(x) + c_2 p_2(x)$

$2x^2 + x - 1 = c_1 (1 + x) + c_2 (x^2 - 1)$
$2x^2 + x - 1 = c_1 + c_1 x + c_2 x^2 - c_2$

Now, we group terms by powers of $x$:
$2x^2 + 1x - 1 = c_2 x^2 + c_1 x + (c_1 - c_2)$

For these polynomials to be equal, the coefficients of corresponding powers of $x$ must be equal. This gives us a system of equations:
*   Coefficient of $x^2$: $c_2 = 2$
*   Coefficient of $x^1$: $c_1 = 1$
*   Constant term: $c_1 - c_2 = -1$

Let's check if these values are consistent. We have $c_1 = 1$ and $c_2 = 2$. Plugging them into the third equation:
$1 - 2 = -1$. This is true!

So, $q(x) = 1 \cdot p_1(x) + 2 \cdot p_2(x)$.
$q(x) = 1 \cdot (1+x) + 2 \cdot (x^2 - 1) = 1 + x + 2x^2 - 2 = 2x^2 + x - 1$.

Yes, $q(x)$ is a linear combination of $p_1(x)$ and $p_2(x)$.

**Common Pitfall:** When dealing with polynomials, don't forget to match coefficients of *all* powers, including those that might be zero in one of the polynomials.

### Connection to Course Outcomes

Let's explicitly link this back to our Course Outcomes (COs).

*   **CO1: Solve system of linear equations, to evaluate eigen values and eigen vectors of matrices and to diagonalize matrices.**
    *   As you saw in Example 1, determining if a vector is a linear combination *is* solving a system of linear equations. The existence (or non-existence) of a solution directly answers the question. Later in this module and in subsequent ones, we’ll see how matrix representations of linear transformations (CO4) and solving systems are deeply intertwined with linear combinations. Eigenvalues and eigenvectors themselves are specific examples where a vector is combined with a scalar in a very particular way (scaling of itself).

*   **CO2: Understand the concepts of vector spaces and subspaces and to apply their properties.**
    *   This is the core of where linear combinations fit.
        *   **Span:** The set of *all possible* linear combinations of a set of vectors $\{\mathbf{v}_1, \dots, \mathbf{v}_k\}$ is called the **span** of these vectors, denoted $\text{span}(\{\mathbf{v}_1, \dots, \mathbf{v}_k\})$. This span is itself a vector space (or more specifically, a subspace of the original vector space). So, when we talk about whether a vector $\mathbf{w}$ can be written as a linear combination, we're essentially asking if $\mathbf{w}$ is *in the span* of the given vectors. This is a critical application of vector space properties.
        *   **Basis:** If a set of vectors $\{\mathbf{v}_1, \dots, \mathbf{v}_k\}$ spans a vector space $V$ and is linearly independent, it forms a **basis** for $V$. This means *every* vector in $V$ can be written as a *unique* linear combination of the basis vectors. This uniqueness is incredibly powerful. For instance, in $\mathbb{R}^3$, the standard basis vectors $\mathbf{e}_1 = \begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix}, \mathbf{e}_2 = \begin{pmatrix} 0 \\ 1 \\ 0 \end{pmatrix}, \mathbf{e}_3 = \begin{pmatrix} 0 \\ 0 \\ 1 \end{pmatrix}$ allow us to represent any vector $\begin{pmatrix} x \\ y \\ z \end{pmatrix}$ as the unique linear combination $x\mathbf{e}_1 + y\mathbf{e}_2 + z\mathbf{e}_3$.

*   **CO3: Describe inner product spaces and their properties, to apply orthonormalization process and to solve least square problems.**
    *   While linear combinations don't directly involve inner products, the concepts are closely related. For example, in orthonormalization (like Gram-Schmidt), we construct new orthogonal vectors as linear combinations of the original ones. Also, least squares problems often involve projecting a vector onto the subspace spanned by a set of vectors. This projection is found using linear combinations.

*   **CO4: Understand the concept of linear transformation and to apply its properties, to find the rank and nullity of a linear transformation and to find the matrices of linear transformations.**
    *   This is a huge connection! If $T: V \to W$ is a linear transformation, then for any vector $\mathbf{v}$ that is a linear combination of $\mathbf{v}_1, \dots, \mathbf{v}_k$: $\mathbf{v} = c_1 \mathbf{v}_1 + \dots + c_k \mathbf{v}_k$, the image of $\mathbf{v}$ under $T$ is given by:
        $T(\mathbf{v}) = T(c_1 \mathbf{v}_1 + \dots + c_k \mathbf{v}_k) = c_1 T(\mathbf{v}_1) + \dots + c_k T(\mathbf{v}_k)$.
        This property, that linear transformations preserve linear combinations, is fundamental. It means if we know how $T$ acts on a set of vectors that span a space, we know how it acts on *all* vectors in that space. The matrix of a linear transformation is precisely built upon how it transforms the basis vectors, which are then used to form linear combinations representing any vector.

### Key Concepts to Remember

*   A **linear combination** of vectors $\mathbf{v}_1, \dots, \mathbf{v}_k$ is any vector of the form $c_1 \mathbf{v}_1 + \dots + c_k \mathbf{v}_k$, where $c_i$ are scalars.
*   To check if a vector $\mathbf{w}$ is a linear combination of $\{\mathbf{v}_1, \dots, \mathbf{v}_k\}$, set up the equation $\mathbf{w} = c_1 \mathbf{v}_1 + \dots + c_k \mathbf{v}_k$ and solve the resulting system of linear equations for the scalars $c_i$.
*   The **span** of a set of vectors is the set of all possible linear combinations of those vectors. The span forms a subspace.
*   Understanding linear combinations is crucial for understanding **bases**, **dimension**, **linear transformations**, and solving **systems of linear equations**.

### Exam-Oriented Tips

*   **Direct Question:** "Is vector $\mathbf{w}$ a linear combination of vectors $\mathbf{v}_1, \mathbf{v}_2$?" This is a classic. You *must* set up the system and solve it. If there's no solution, the answer is "No." If there is a solution, the answer is "Yes," and you should state the scalars.
*   **System Consistency:** Pay attention to whether the system of equations derived from a linear combination is consistent. If it's inconsistent, the vector is not a linear combination. This often happens when you have more vectors in the combination than dimensions of the space, or if the vectors are "linearly dependent" in a way that prevents forming a specific target vector.
*   **Polynomials:** Be careful to match coefficients for all powers of $x$ (or whatever variable). A polynomial $ax^2+bx+c$ can be thought of as a vector $\begin{pmatrix} a \\ b \\ c \end{pmatrix}$ in a specific vector space context, and the same principles apply.
*   **Span Questions:** "Find the span of vectors $\{\mathbf{v}_1, \mathbf{v}_2\}$." This means describing all possible linear combinations. For $\mathbb{R}^2$ or $\mathbb{R}^3$, this often means describing a line, a plane, or the entire space. If you can show any vector in $\mathbb{R}^2$ can be written as $c_1\mathbf{v}_1+c_2\mathbf{v}_2$, then the span is all of $\mathbb{R}^2$ (provided $\mathbf{v}_1, \mathbf{v}_2$ are linearly independent).

### Sample Questions and Answers

**Q1. Conceptual Understanding:**
Explain in your own words what it means for a vector $\mathbf{b}$ to be a linear combination of vectors $\mathbf{v}_1$ and $\mathbf{v}_2$.

**A1:** It means that you can obtain vector $\mathbf{b}$ by starting with $\mathbf{v}_1$ and $\mathbf{v}_2$, scaling each of them by some numbers (scalars), and then adding the scaled vectors together. If you think of vectors as directions or movements, it means you can reach the "destination" represented by $\mathbf{b}$ by taking a certain number of steps in the direction of $\mathbf{v}_1$ and a certain number of steps in the direction of $\mathbf{v}_2$.

**Q2. Application in $\mathbb{R}^3$:**
Determine if the vector $\mathbf{u} = \begin{pmatrix} 1 \\ 5 \\ -3 \end{pmatrix}$ can be expressed as a linear combination of the vectors $\mathbf{v}_1 = \begin{pmatrix} 1 \\ 0 \\ 1 \end{pmatrix}$ and $\mathbf{v}_2 = \begin{pmatrix} 2 \\ 1 \\ -1 \end{pmatrix}$.

**A2:**
We need to find scalars $c_1, c_2$ such that $\mathbf{u} = c_1 \mathbf{v}_1 + c_2 \mathbf{v}_2$.
$\begin{pmatrix} 1 \\ 5 \\ -3 \end{pmatrix} = c_1 \begin{pmatrix} 1 \\ 0 \\ 1 \end{pmatrix} + c_2 \begin{pmatrix} 2 \\ 1 \\ -1 \end{pmatrix}$
This gives the system of equations:
1.  $c_1 + 2c_2 = 1$
2.  $0c_1 + 1c_2 = 5 \implies c_2 = 5$
3.  $c_1 - c_2 = -3$

From equation (2), we get $c_2 = 5$.
Substitute $c_2 = 5$ into equation (1):
$c_1 + 2(5) = 1$
$c_1 + 10 = 1$
$c_1 = 1 - 10 = -9$

Now, we must check if these values ($c_1 = -9, c_2 = 5$) satisfy the third equation:
$c_1 - c_2 = -9 - 5 = -14$.
The third equation requires $c_1 - c_2 = -3$. Since $-14 \neq -3$, the system is inconsistent.

Therefore, $\mathbf{u}$ **cannot** be expressed as a linear combination of $\mathbf{v}_1$ and $\mathbf{v}_2$.

**Q3. Polynomials:**
Let $p_1(x) = x+1$ and $p_2(x) = x^2-x$. Is the polynomial $q(x) = 2x^2 + 3$ a linear combination of $p_1(x)$ and $p_2(x)$?

**A3:**
We want to find scalars $c_1, c_2$ such that $q(x) = c_1 p_1(x) + c_2 p_2(x)$.
$2x^2 + 0x + 3 = c_1(x+1) + c_2(x^2-x)$
$2x^2 + 0x + 3 = c_1x + c_1 + c_2x^2 - c_2x$
$2x^2 + 0x + 3 = c_2x^2 + (c_1 - c_2)x + c_1$

Equating coefficients of like powers of $x$:
*   $x^2$: $c_2 = 2$
*   $x^1$: $c_1 - c_2 = 0$
*   $x^0$ (constant): $c_1 = 3$

From the $x^2$ coefficient, we get $c_2 = 2$.
From the constant term, we get $c_1 = 3$.
Now we check the $x^1$ coefficient: $c_1 - c_2 = 3 - 2 = 1$.
However, the coefficient of $x$ in $q(x)$ is $0$. Since $1 \neq 0$, the system is inconsistent.

Therefore, $q(x)$ **is not** a linear combination of $p_1(x)$ and $p_2(x)$.

That wraps up our introduction to linear combinations! Remember, this is a foundational concept that unlocks much of linear algebra and its applications in information science. Keep practicing these examples, and don't hesitate to ask questions as we build on this.
