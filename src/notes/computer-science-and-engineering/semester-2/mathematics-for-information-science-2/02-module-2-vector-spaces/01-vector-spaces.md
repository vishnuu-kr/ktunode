---
title: "Vector Spaces"
subject: "MATHEMATICS FOR INFORMATION SCIENCE – 2"
module: "Module 2: Vector Spaces"
branch: "Computer Science and Engineering"
semester: 2
topicId: "68b45b6e58474a0b135b5d0f"
status: "completed"
scrapedAt: "2026-05-20T16:34:33.001Z"
---
Absolutely! Let's dive into the fascinating world of Vector Spaces. Think of this as our guided tour through a fundamental concept in Mathematics for Information Science.

## Module 2: Vector Spaces – The Foundation of Our Mathematical Toolkit

Welcome, everyone! In this module, we're going to build a really strong foundation by understanding what a **Vector Space** is. This might sound abstract at first, but trust me, it's a concept that underpins so much of what we do in information science, from machine learning algorithms to data analysis and beyond. We'll see how this connects directly to our **Course Outcomes (COs)**, especially CO2: understanding and applying the properties of vector spaces and subspaces.

### What Exactly is a Vector Space? More Than Just Arrows!

When you hear the word "vector," your mind might immediately jump to arrows in physics or geometry, representing direction and magnitude. And you're not wrong! But in mathematics, the concept of a vector space is much broader and more powerful. It's a collection of "things" – we call them **vectors** – that we can add together and scale (multiply by a number), and these operations behave in a very specific, predictable way.

Let's think about this with an analogy. Imagine a box of LEGO bricks. You can:

1.  **Combine bricks:** If you have a red brick and a blue brick, you can put them together to form a larger structure.
2.  **Scale bricks:** If you have a small LEGO car, you can imagine making a larger version of it by using bigger bricks or more of them.

A vector space is similar. It's a set of objects (our "vectors") for which we have two main operations: **vector addition** and **scalar multiplication**. But it's not just any set. These operations must follow a set of rules, almost like a "constitution" for our collection of vectors. These rules ensure that our operations are well-behaved and consistent.

Let's formally introduce the definition. A **Vector Space** $V$ over a field $F$ (usually the real numbers $\mathbb{R}$ or complex numbers $\mathbb{C}$) is a non-empty set of objects (called vectors) equipped with two operations:
1.  **Vector Addition:** $\oplus: V \times V \to V$ (takes two vectors, gives one vector)
2.  **Scalar Multiplication:** $\odot: F \times V \to V$ (takes a scalar from $F$ and a vector from $V$, gives one vector)

These operations must satisfy the following **ten axioms**:

**Axioms of Vector Addition:**
1.  **Closure under Addition:** For any $\mathbf{u}, \mathbf{v} \in V$, $\mathbf{u} \oplus \mathbf{v} \in V$. (If you add two vectors in the space, you get another vector in the same space. Like our LEGOs – combining two bricks keeps you within the realm of LEGOs.)
2.  **Commutativity of Addition:** For any $\mathbf{u}, \mathbf{v} \in V$, $\mathbf{u} \oplus \mathbf{v} = \mathbf{v} \oplus \mathbf{u}$. (The order of addition doesn't matter. $\mathbf{u} + \mathbf{v}$ is the same as $\mathbf{v} + \mathbf{u}$.)
3.  **Associativity of Addition:** For any $\mathbf{u}, \mathbf{v}, \mathbf{w} \in V$, $(\mathbf{u} \oplus \mathbf{v}) \oplus \mathbf{w} = \mathbf{u} \oplus (\mathbf{v} \oplus \mathbf{w})$. (When adding three or more vectors, how you group them for addition doesn't change the final sum. Like grouping LEGO bricks – it doesn't matter if you add the red and blue first, then the green, or the blue and green first, then the red.)
4.  **Existence of a Zero Vector:** There exists an element $\mathbf{0} \in V$ such that for every $\mathbf{u} \in V$, $\mathbf{u} \oplus \mathbf{0} = \mathbf{u}$. (There's a special "nothing" vector that, when added to any other vector, leaves it unchanged. Think of a single LEGO brick that doesn't do anything when you add it to your structure – it's the identity element for addition.)
5.  **Existence of Additive Inverse:** For every $\mathbf{u} \in V$, there exists an element $-\mathbf{u} \in V$ such that $\mathbf{u} \oplus (-\mathbf{u}) = \mathbf{0}$. (For every vector, there's an "opposite" vector that, when added, results in the zero vector. If you push a LEGO brick forward, there's a corresponding "pull back" operation.)

**Axioms of Scalar Multiplication:**
6.  **Closure under Scalar Multiplication:** For any $c \in F$ and $\mathbf{u} \in V$, $c \odot \mathbf{u} \in V$. (If you scale a vector by a number from the field, you still get a vector in the same space. Making a LEGO car bigger keeps it a LEGO car.)
7.  **Distributivity of Scalar Multiplication with Respect to Vector Addition:** For any $c \in F$ and $\mathbf{u}, \mathbf{v} \in V$, $c \odot (\mathbf{u} \oplus \mathbf{v}) = (c \odot \mathbf{u}) \oplus (c \odot \mathbf{v})$. (Scaling a sum of vectors is the same as scaling each vector individually and then adding them. If you want to double the size of a LEGO structure made of two parts, you can double each part and then join them, or join the parts and then double the whole structure.)
8.  **Distributivity of Scalar Multiplication with Respect to Scalar Addition:** For any $c, d \in F$ and $\mathbf{u} \in V$, $(c+d) \odot \mathbf{u} = (c \odot \mathbf{u}) \oplus (d \odot \mathbf{u})$. (Adding two scalars and then scaling a vector is the same as scaling the vector by each scalar individually and then adding the results.)
9.  **Associativity of Scalar Multiplication:** For any $c, d \in F$ and $\mathbf{u} \in V$, $(cd) \odot \mathbf{u} = c \odot (d \odot \mathbf{u})$. (When you have multiple scalars multiplying a vector, the order or grouping of the scalar multiplication doesn't matter. It's like scaling a LEGO car to twice its size, and then doubling that again – it's the same as just making it four times its original size.)
10. **Existence of Multiplicative Identity:** For any $\mathbf{u} \in V$, $1 \odot \mathbf{u} = \mathbf{u}$. (Multiplying a vector by the scalar 1 leaves it unchanged. The number 1 is special – it doesn't alter the vector's magnitude or direction.)

Phew! That's a lot of rules. But remember, these rules are designed to capture the fundamental algebraic properties of familiar vector operations. If a set of objects and operations satisfy all ten, then we can confidently call it a vector space. This is crucial for **CO2** – understanding these properties allows us to work with a wide variety of mathematical objects as if they were vectors.

### Examples of Vector Spaces: Where Do We See These?

Let's make this concrete. What kind of "things" can be vectors?

#### 1. The Familiar $ \mathbb{R}^n $

This is probably the most intuitive example.
*   **Vectors:** Ordered $n$-tuples of real numbers, like $\mathbf{v} = (v_1, v_2, \ldots, v_n)$.
*   **Vector Addition:** Component-wise addition: $\mathbf{u} + \mathbf{v} = (u_1+v_1, u_2+v_2, \ldots, u_n+v_n)$.
*   **Scalar Multiplication:** Component-wise multiplication: $c\mathbf{v} = (cv_1, cv_2, \ldots, cv_n)$.

**Example for Information Science:** Consider a dataset with $n$ features for each data point. Each data point can be represented as a vector in $\mathbb{R}^n$. For instance, if we're analyzing customer data, a vector might represent (Age, Income, Purchase Frequency, Last Purchase Value). Adding two customer vectors might represent a hypothetical "average" customer, and scaling a customer vector could represent scaling their income or age for some analysis. This directly relates to **CO1** (working with systems of equations, which often involve vectors) and **CO2**.

Kreyszig's "Advanced Engineering Mathematics" (Chapter 4) and Larson's "Elementary Linear Algebra" (Chapter 4) both delve deeply into $\mathbb{R}^n$ as the quintessential example.

#### 2. Spaces of Matrices

This might surprise you! Matrices can also form vector spaces.
*   **Vectors:** Matrices of a fixed size, say $m \times n$.
*   **Vector Addition:** Standard matrix addition.
*   **Scalar Multiplication:** Standard scalar multiplication of matrices.

**Example:** Let $V$ be the set of all $2 \times 2$ matrices with real entries.
$$ V = \left\{ \begin{pmatrix} a & b \\ c & d \end{pmatrix} \mid a, b, c, d \in \mathbb{R} \right\} $$
You can add two $2 \times 2$ matrices, and you get another $2 \times 2$ matrix. You can multiply a $2 \times 2$ matrix by a scalar, and you get another $2 \times 2$ matrix. All ten axioms hold. This is essential for understanding transformations between vector spaces later on, which ties into **CO4**.

#### 3. Spaces of Polynomials

Did you know polynomials can be vectors?
*   **Vectors:** Polynomials of degree at most $n$. Let $P_n$ be the set of all polynomials of degree $\le n$ with real coefficients.
    $$ P_n = \{ a_n x^n + a_{n-1} x^{n-1} + \dots + a_1 x + a_0 \mid a_i \in \mathbb{R} \} $$
*   **Vector Addition:** $(p(x) + q(x))$ as usual.
*   **Scalar Multiplication:** $(c \cdot p(x))$ as usual.

**Example:** Consider $P_2$, the space of polynomials of degree at most 2.
Let $p(x) = 2x^2 + 3x - 1$ and $q(x) = -x^2 + 5$.
Then $p(x) + q(x) = (2x^2+3x-1) + (-x^2+5) = x^2 + 3x + 4$. This is still a polynomial of degree at most 2.
And $5 \cdot p(x) = 5(2x^2+3x-1) = 10x^2 + 15x - 5$, also in $P_2$.
All axioms hold. This is incredibly useful in areas like approximation theory and numerical methods in data science.

#### 4. Spaces of Functions

This is a very rich area.
*   **Vectors:** Functions from a set $D$ to a field $F$. Let $C(D)$ be the set of all continuous functions from $D$ to $\mathbb{R}$.
*   **Vector Addition:** $(f+g)(x) = f(x) + g(x)$ for all $x \in D$.
*   **Scalar Multiplication:** $(c \cdot f)(x) = c \cdot f(x)$ for all $x \in D$.

**Example:** The set of all continuous real-valued functions on the interval $[0, 1]$, denoted $C[0,1]$, forms a vector space. If $f$ and $g$ are continuous, then $f+g$ is continuous. If $f$ is continuous and $c$ is a scalar, then $c \cdot f$ is continuous. All axioms are satisfied. Think of signal processing, where signals are functions – you can add two signals (superposition) and scale them. This connects to **CO3** as we'll later explore inner products on function spaces.

#### 5. The Trivial Vector Space

*   **Vector:** Just the zero vector, $\{ \mathbf{0} \}$.
*   **Addition:** $\mathbf{0} + \mathbf{0} = \mathbf{0}$.
*   **Scalar Multiplication:** $c \cdot \mathbf{0} = \mathbf{0}$.

This space satisfies all axioms. It's simple, but it's important to remember that even the "simplest" cases can be vector spaces.

### Subspaces: Smaller Vector Spaces Within Larger Ones

Just as a subset can be a vector space, a subset of a vector space can itself be a vector space, provided it "plays by the same rules" within itself. We call such subsets **Subspaces**.

Think of our LEGO analogy again. If you have a large box of assorted LEGOs (our vector space $V$), a subset of these LEGOs that are all, say, red and can only be combined with other red LEGOs to form larger red LEGO structures, and can be scaled (e.g., by doubling their size) to remain red LEGO structures, then this subset of red LEGOs forms a smaller, self-contained system – a subspace.

Formally, a subset $W$ of a vector space $V$ is a **Subspace** of $V$ if $W$ itself is a vector space under the same operations of vector addition and scalar multiplication defined on $V$.

To check if a subset $W$ is a subspace, we don't need to verify all ten axioms again! This is a huge shortcut. We only need to check three conditions, which are derived from the axioms:

A subset $W$ of a vector space $V$ is a subspace if and only if:
1.  **Non-empty:** $W$ contains the zero vector of $V$. That is, $\mathbf{0} \in W$. (This is Axiom 4).
2.  **Closure under Addition:** For any $\mathbf{u}, \mathbf{v} \in W$, $\mathbf{u} + \mathbf{v} \in W$. (This is Axiom 1).
3.  **Closure under Scalar Multiplication:** For any $c \in F$ and $\mathbf{u} \in W$, $c\mathbf{u} \in W$. (This is Axiom 6).

If these three are met, all other axioms will automatically hold because they are inherited from the parent space $V$. This is a key aspect of **CO2**.

#### Examples of Subspaces

Let's look at our previous examples and see what their subspaces are.

**1. Subspaces of $ \mathbb{R}^n $:**

*   The set $W = \{ (x, 0) \mid x \in \mathbb{R} \}$ is a subspace of $\mathbb{R}^2$.
    *   Is it non-empty? Yes, $(0,0) \in W$ (when $x=0$).
    *   Is it closed under addition? If $(x_1, 0) \in W$ and $(x_2, 0) \in W$, then $(x_1, 0) + (x_2, 0) = (x_1+x_2, 0)$. Since $x_1+x_2$ is a real number, $(x_1+x_2, 0) \in W$. Yes.
    *   Is it closed under scalar multiplication? If $c \in \mathbb{R}$ and $(x, 0) \in W$, then $c(x, 0) = (cx, 0)$. Since $cx$ is a real number, $(cx, 0) \in W$. Yes.
    So, $W$ is a subspace of $\mathbb{R}^2$. Geometrically, this is the x-axis within the 2D plane.
*   The set $W = \{ (x, y, 0) \mid x, y \in \mathbb{R} \}$ is a subspace of $\mathbb{R}^3$. Geometrically, this is the xy-plane in 3D space.
*   **Any line through the origin**, **any plane through the origin**, and the **entire space $\mathbb{R}^n$ itself** are subspaces of $\mathbb{R}^n$.
*   The set of vectors $(x,y)$ where $x+y=0$ is also a subspace of $\mathbb{R}^2$.

*What is NOT a subspace of $\mathbb{R}^2$?*
*   The set $W = \{ (x, 1) \mid x \in \mathbb{R} \}$. This line doesn't pass through the origin. If you take $(x_1, 1)$ and $(x_2, 1)$, their sum is $(x_1+x_2, 2)$, which is not of the form $(x, 1)$. So it fails closure under addition (and isn't non-empty in the required sense, as it doesn't contain $\mathbf{0}=(0,0)$). This is a common pitfall in exams – always check for the zero vector!

**2. Subspaces of Polynomial Spaces:**

*   $P_n$ is a subspace of $P_{n+1}$ (polynomials of degree $\le n$ are also polynomials of degree $\le n+1$).
*   The set of all even polynomials $W = \{ p(x) \in P_n \mid p(-x) = p(x) \}$ is a subspace of $P_n$. If $p(x)$ and $q(x)$ are even, then $(p+q)(-x) = p(-x) + q(-x) = p(x) + q(x) = (p+q)(x)$. Also, $(c \cdot p)(-x) = c \cdot p(-x) = c \cdot p(x) = (c \cdot p)(x)$. The zero polynomial is even. So, it's a subspace.

**3. Subspaces of Function Spaces:**

*   The set of all continuous functions $C[a,b]$ is a subspace of the set of all functions $F[a,b]$ from $[a,b]$ to $\mathbb{R}$. If $f$ and $g$ are continuous, their sum $f+g$ is continuous. If $f$ is continuous and $c$ is a scalar, $c \cdot f$ is continuous. The zero function ($f(x)=0$ for all $x$) is continuous. So $C[a,b]$ is a subspace.

This concept of subspaces is directly addressed in **CO2**. Understanding which sets of mathematical objects form subspaces is key to simplifying problems and building more complex structures. For example, when we talk about the solution space of a homogeneous system of linear equations, we are talking about a subspace. This links directly to **CO1**.

### Connecting to Course Outcomes

Let's recap how this topic directly supports our course objectives:

*   **CO1: Solve system of linear equations, to evaluate eigen values and eigen vectors of matrices and to diagonalize matrices.**
    *   The set of solutions to a homogeneous system of linear equations $A\mathbf{x} = \mathbf{0}$ forms a subspace (called the null space or kernel of $A$). Understanding vector spaces allows us to know that if $\mathbf{x}_1$ and $\mathbf{x}_2$ are solutions, then so is $\mathbf{x}_1 + \mathbf{x}_2$ and $c\mathbf{x}_1$. This structural understanding is vital for solving these systems efficiently and for understanding the properties of matrices, eigenvalues, and eigenvectors. For example, the eigenspace corresponding to an eigenvalue is a subspace.

*   **CO2: Understand the concepts of vector spaces and subspaces and to apply their properties.**
    *   This entire topic is dedicated to this outcome! We've learned the definition of a vector space, its axioms, and the criteria for identifying subspaces. Applying these properties allows us to classify different mathematical structures and know how they behave under addition and scalar multiplication.

*   **CO3: Describe inner product spaces and their properties, to apply orthonormalization process and to solve least square problems.**
    *   While we haven't touched on inner products yet, vector spaces are the *pre-requisite* for inner product spaces. An inner product is an operation defined on a vector space that allows us to measure lengths and angles. So, the foundational understanding of vector spaces is essential before we can even define or work with inner product spaces.

*   **CO4: Understand the concept of linear transformation and to apply its properties, to find the rank and nullity of a linear transformation and to find the matrices of linear transformations.**
    *   Linear transformations are mappings between vector spaces that preserve the vector space operations (addition and scalar multiplication). So, to understand linear transformations, we first need to understand the spaces they act upon. Later, we'll see how matrices represent linear transformations, and that the domain and codomain of these transformations are vector spaces.

### Common Pitfalls and Exam Tips

*   **Forgetting the Zero Vector:** When checking for subspaces, always, always, ALWAYS verify that the zero vector of the parent space is in the subset. This is the most common mistake students make.
*   **Confusing Closure:** Make sure you're checking closure correctly. For a subspace $W$ of $V$, if $\mathbf{u}, \mathbf{v} \in W$, then $\mathbf{u}+\mathbf{v}$ must also be in $W$. Don't get it confused with operations that might take you out of $W$.
*   **Generalizing Too Quickly:** While intuition from $\mathbb{R}^n$ is helpful, remember that vector spaces can be abstract. Always refer back to the ten axioms or the three subspace criteria when in doubt.
*   **Exam Focus:** Expect questions that ask you to prove whether a given set is a vector space or a subspace. You'll need to explicitly state the checks for the zero vector, closure under addition, and closure under scalar multiplication.

### Summary

So, to sum up our exploration of vector spaces:

*   A **vector space** is a set with defined addition and scalar multiplication operations that satisfy ten specific axioms. These axioms ensure predictable and consistent behavior.
*   Examples range from the familiar $\mathbb{R}^n$ to spaces of matrices, polynomials, and functions.
*   A **subspace** is a subset of a vector space that is itself a vector space under the same operations. We can check for subspaces by verifying three conditions: the presence of the zero vector, closure under addition, and closure under scalar multiplication.
*   These concepts are fundamental building blocks for understanding linear equations, transformations, eigenvalues, and more, directly supporting all our Course Outcomes.

Keep these ideas in mind as we move forward. The more comfortable you are with what constitutes a vector space and a subspace, the easier it will be to grasp the subsequent topics.

***

## Sample Questions and Answers

Here are a few questions to test your understanding, ranging from conceptual to more applied.

**Question 1 (Conceptual):**
Is the set of all vectors in $\mathbb{R}^3$ of the form $(a, b, c)$ where $a \ge 0$ a subspace of $\mathbb{R}^3$? Justify your answer.

**Answer:**
No, this set is not a subspace of $\mathbb{R}^3$.
Let $W = \{ (a, b, c) \in \mathbb{R}^3 \mid a \ge 0 \}$.
To be a subspace, $W$ must satisfy three conditions:
1.  **Non-empty (contains the zero vector):** The zero vector in $\mathbb{R}^3$ is $(0, 0, 0)$. Here, $a=0$, which satisfies $a \ge 0$. So, $(0, 0, 0) \in W$. This condition is met.
2.  **Closure under Addition:** Let $\mathbf{u} = (a_1, b_1, c_1) \in W$ and $\mathbf{v} = (a_2, b_2, c_2) \in W$. This means $a_1 \ge 0$ and $a_2 \ge 0$.
    Then $\mathbf{u} + \mathbf{v} = (a_1+a_2, b_1+b_2, c_1+c_2)$. Since $a_1 \ge 0$ and $a_2 \ge 0$, their sum $a_1+a_2 \ge 0$. Thus, $\mathbf{u} + \mathbf{v} \in W$. This condition is met.
3.  **Closure under Scalar Multiplication:** Let $c \in \mathbb{R}$ and $\mathbf{u} = (a, b, c) \in W$, where $a \ge 0$.
    Then $c\mathbf{u} = (ca, cb, cc)$. For $W$ to be closed under scalar multiplication, $ca$ must be $\ge 0$ for *any* scalar $c$.
    Let's choose $c = -1$. Then $c\mathbf{u} = (-a, -b, -c)$. If $a > 0$, then $-a < 0$. This resulting vector is not in $W$ because its first component is negative.
    Since we found a scalar $c=-1$ and a vector $\mathbf{u} \in W$ such that $c\mathbf{u} \notin W$, the set $W$ is not closed under scalar multiplication.

**Therefore, $W$ is not a subspace of $\mathbb{R}^3$.** This directly tests understanding of subspace criteria (CO2).

**Question 2 (Application):**
Consider the set $W$ of all $2 \times 2$ matrices $A$ such that $A^T = A$ (i.e., $A$ is symmetric). Is $W$ a subspace of the vector space of all $2 \times 2$ matrices? Justify your answer.

**Answer:**
Yes, $W$ is a subspace of the vector space of all $2 \times 2$ matrices.
Let $V$ be the vector space of all $2 \times 2$ matrices, and $W = \{ A \in V \mid A^T = A \}$.
We check the three conditions for $W$ to be a subspace:

1.  **Non-empty (contains the zero vector):** The zero vector in $V$ is the $2 \times 2$ zero matrix:
    $$ \mathbf{0} = \begin{pmatrix} 0 & 0 \\ 0 & 0 \end{pmatrix} $$
    The transpose of the zero matrix is $\mathbf{0}^T = \begin{pmatrix} 0 & 0 \\ 0 & 0 \end{pmatrix} = \mathbf{0}$.
    Since $\mathbf{0}^T = \mathbf{0}$, the zero matrix is in $W$. This condition is met.

2.  **Closure under Addition:** Let $A, B \in W$. This means $A^T = A$ and $B^T = B$.
    We need to check if $A+B \in W$, which means we need to check if $(A+B)^T = A+B$.
    Using properties of matrix transpose: $(A+B)^T = A^T + B^T$.
    Since $A^T=A$ and $B^T=B$, we have $A^T + B^T = A + B$.
    Therefore, $(A+B)^T = A+B$. So, $A+B \in W$. This condition is met.

3.  **Closure under Scalar Multiplication:** Let $c \in \mathbb{R}$ and $A \in W$. This means $A^T = A$.
    We need to check if $cA \in W$, which means we need to check if $(cA)^T = cA$.
    Using properties of matrix transpose: $(cA)^T = c A^T$.
    Since $A^T = A$, we have $c A^T = c A$.
    Therefore, $(cA)^T = cA$. So, $cA \in W$. This condition is met.

Since all three conditions are satisfied, $W$ is a subspace of the vector space of all $2 \times 2$ matrices. This relates to **CO2** and is a step towards understanding matrices in transformations (**CO4**).

**Question 3 (Conceptual Link to CO1):**
Consider the set of solutions to the homogeneous linear system $2x + 3y - z = 0$ and $x - y + 2z = 0$. Explain why this set of solutions forms a subspace of $\mathbb{R}^3$.

**Answer:**
The set of solutions to a homogeneous system of linear equations $A\mathbf{x} = \mathbf{0}$ always forms a subspace of $\mathbb{R}^n$ (where $n$ is the number of variables). Let $W$ be the set of solutions to the given system:
$$ W = \{ (x, y, z) \in \mathbb{R}^3 \mid 2x + 3y - z = 0 \text{ and } x - y + 2z = 0 \} $$
We verify the three subspace conditions:

1.  **Non-empty (contains the zero vector):** The zero vector in $\mathbb{R}^3$ is $(0, 0, 0)$.
    Substituting into the equations:
    $2(0) + 3(0) - 0 = 0$ (True)
    $0 - 0 + 2(0) = 0$ (True)
    Since $(0,0,0)$ satisfies both equations, it is a solution and hence $(0,0,0) \in W$. This condition is met.

2.  **Closure under Addition:** Let $\mathbf{u} = (x_1, y_1, z_1) \in W$ and $\mathbf{v} = (x_2, y_2, z_2) \in W$.
    This means:
    $2x_1 + 3y_1 - z_1 = 0$
    $x_1 - y_1 + 2z_1 = 0$
    and
    $2x_2 + 3y_2 - z_2 = 0$
    $x_2 - y_2 + 2z_2 = 0$
    Consider the sum $\mathbf{u} + \mathbf{v} = (x_1+x_2, y_1+y_2, z_1+z_2)$. We need to check if it satisfies the system:
    For the first equation:
    $2(x_1+x_2) + 3(y_1+y_2) - (z_1+z_2) = (2x_1 + 3y_1 - z_1) + (2x_2 + 3y_2 - z_2) = 0 + 0 = 0$.
    For the second equation:
    $(x_1+x_2) - (y_1+y_2) + 2(z_1+z_2) = (x_1 - y_1 + 2z_1) + (x_2 - y_2 + 2z_2) = 0 + 0 = 0$.
    Since $\mathbf{u} + \mathbf{v}$ satisfies both equations, $\mathbf{u} + \mathbf{v} \in W$. This condition is met.

3.  **Closure under Scalar Multiplication:** Let $c \in \mathbb{R}$ and $\mathbf{u} = (x_1, y_1, z_1) \in W$.
    This means:
    $2x_1 + 3y_1 - z_1 = 0$
    $x_1 - y_1 + 2z_1 = 0$
    Consider the scalar multiple $c\mathbf{u} = (cx_1, cy_1, cz_1)$. We need to check if it satisfies the system:
    For the first equation:
    $2(cx_1) + 3(cy_1) - (cz_1) = c(2x_1 + 3y_1 - z_1) = c(0) = 0$.
    For the second equation:
    $(cx_1) - (cy_1) + 2(cz_1) = c(x_1 - y_1 + 2z_1) = c(0) = 0$.
    Since $c\mathbf{u}$ satisfies both equations, $c\mathbf{u} \in W$. This condition is met.

Since all three conditions are satisfied, the set of solutions forms a subspace of $\mathbb{R}^3$. This is a direct demonstration of how vector space concepts relate to solving linear systems (CO1) and understanding subspace properties (CO2).

I hope this detailed breakdown helps solidify your understanding of Vector Spaces! Let me know if any part needs further clarification.
