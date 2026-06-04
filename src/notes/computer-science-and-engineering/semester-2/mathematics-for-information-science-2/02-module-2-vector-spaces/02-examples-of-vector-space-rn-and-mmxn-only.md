---
title: "Examples of vector space – Rn and Mmxn only"
subject: "MATHEMATICS FOR INFORMATION SCIENCE – 2"
module: "Module 2: Vector Spaces"
branch: "Computer Science and Engineering"
semester: 2
topicId: "68b45b6e58474a0b135b5d10"
status: "completed"
scrapedAt: "2026-05-20T16:34:33.715Z"
---
Absolutely! Let's dive into the fascinating world of vector spaces, focusing on our key examples, $R^n$ and $M_{m \times n}$. This module, Module 2, is absolutely foundational for everything we'll do later in Mathematics for Information Science – 2. Understanding these building blocks will directly help us achieve Course Outcomes CO1, CO2, CO3, and CO4. So, let's get started with a clear picture of what makes these sets of objects "vector spaces."

---

## Module 2: Vector Spaces – Examples of $R^n$ and $M_{m \times n}$

Welcome, everyone! Today, we're going to explore the fundamental concept of a **vector space**. Think of a vector space as a mathematical playground where we can add "things" together and "scale" them, and importantly, these operations behave in a predictable and well-behaved manner. This predictability is what allows us to do powerful things in data science, like solving systems of equations, understanding transformations, and much more.

Our main focus today will be on two very important and common types of vector spaces: the set of all n-tuples, denoted as $R^n$, and the set of all $m \times n$ matrices, denoted as $M_{m \times n}$. Understanding these will directly help us with **CO2: Understand the concepts of vector spaces and subspaces and to apply their properties.**

### What Makes a Vector Space?

Before we jump into our examples, let's quickly remind ourselves of the defining properties of a vector space. A set $V$ of objects (which we'll call "vectors") is a vector space if it's closed under two operations: **vector addition** and **scalar multiplication**, and if these operations satisfy ten specific axioms. Don't let the number ten scare you; most of them are quite intuitive.

Let $u, v, w$ be vectors in $V$ and $c, d$ be scalars (real numbers, in our case).

**Axioms of Vector Addition:**
1.  **Closure:** $u + v$ is in $V$. (If you add two vectors, you get another vector in the same space).
2.  **Commutativity:** $u + v = v + u$. (Order of addition doesn't matter).
3.  **Associativity:** $(u + v) + w = u + (v + w)$. (Grouping of addition doesn't matter).
4.  **Existence of Zero Vector:** There exists a zero vector $\mathbf{0}$ in $V$ such that $u + \mathbf{0} = u$ for all $u$ in $V$. (There's a special "nothing" vector that doesn't change anything when added).
5.  **Existence of Negative Vector:** For every $u$ in $V$, there exists an additive inverse $-u$ in $V$ such that $u + (-u) = \mathbf{0}$. (Every vector has an opposite that cancels it out).

**Axioms of Scalar Multiplication:**
6.  **Closure:** $c \cdot u$ is in $V$. (If you multiply a vector by a number, you get another vector in the same space).
7.  **Distributivity over Vector Addition:** $c \cdot (u + v) = c \cdot u + c \cdot v$. (Scaling distributes over adding vectors).
8.  **Distributivity over Scalar Addition:** $(c + d) \cdot u = c \cdot u + d \cdot u$. (Adding scalars distributes over scaling a vector).
9.  **Associativity of Scalar Multiplication:** $(cd) \cdot u = c \cdot (d \cdot u)$. (Grouping of scalar multiplication doesn't matter).
10. **Existence of Multiplicative Identity:** $1 \cdot u = u$. (Multiplying by 1 doesn't change the vector).

Most of the time, when we deal with sets of familiar mathematical objects like n-tuples or matrices, these axioms are automatically satisfied. Our job is to recognize *that* they are satisfied.

---

### Example 1: The Vector Space $R^n$

Let's start with our first major example: $R^n$.

**What is $R^n$?**
$R^n$ is the set of all ordered *n*-tuples of real numbers. Think of it as a list of $n$ real numbers, where the order matters.

A typical element in $R^n$ looks like this:
$v = (v_1, v_2, \ldots, v_n)$
where each $v_i$ is a real number.

We can represent these as column vectors, which is often more convenient for matrix operations:
$$
v = \begin{pmatrix} v_1 \\ v_2 \\ \vdots \\ v_n \end{pmatrix}
$$

**Vector Addition in $R^n$:**
If we have two vectors $u = (u_1, u_2, \ldots, u_n)$ and $v = (v_1, v_2, \ldots, v_n)$ in $R^n$, their sum is defined component-wise:
$u + v = (u_1 + v_1, u_2 + v_2, \ldots, u_n + v_n)$

Or in column form:
$$
u + v = \begin{pmatrix} u_1 \\ u_2 \\ \vdots \\ u_n \end{pmatrix} + \begin{pmatrix} v_1 \\ v_2 \\ \vdots \\ v_n \end{pmatrix} = \begin{pmatrix} u_1 + v_1 \\ u_2 + v_2 \\ \vdots \\ u_n + v_n \end{pmatrix}
$$

**Scalar Multiplication in $R^n$:**
If $c$ is a real number (a scalar) and $v = (v_1, v_2, \ldots, v_n)$ is a vector in $R^n$, the scalar product is defined by multiplying each component by $c$:
$c \cdot v = (c \cdot v_1, c \cdot v_2, \ldots, c \cdot v_n)$

Or in column form:
$$
c \cdot v = c \begin{pmatrix} v_1 \\ v_2 \\ \vdots \\ v_n \end{pmatrix} = \begin{pmatrix} c \cdot v_1 \\ c \cdot v_2 \\ \vdots \\ c \cdot v_n \end{pmatrix}
$$

**Why is $R^n$ a Vector Space? Let's Check the Axioms!**

Let's briefly touch upon why $R^n$ satisfies the vector space axioms. This is crucial for **CO2**.

*   **Axiom 1 (Closure under Addition):** If $u$ and $v$ are in $R^n$, then $u+v$ is also an $n$-tuple of real numbers, so it's in $R^n$. Easy.
*   **Axiom 2 (Commutativity of Addition):** $u+v = (u_1+v_1, \ldots, u_n+v_n)$ and $v+u = (v_1+u_1, \ldots, v_n+u_n)$. Since addition of real numbers is commutative ($u_i+v_i = v_i+u_i$), the vectors are equal.
*   **Axiom 3 (Associativity of Addition):** Similar to commutativity, $(u+v)+w$ and $u+(v+w)$ will be equal because addition of real numbers is associative.
*   **Axiom 4 (Zero Vector):** The zero vector in $R^n$ is the $n$-tuple of all zeros: $\mathbf{0} = (0, 0, \ldots, 0)$. Adding this to any vector $u$ just adds zeros to each component, leaving $u$ unchanged.
*   **Axiom 5 (Negative Vector):** For any vector $u = (u_1, \ldots, u_n)$, its negative is $-u = (-u_1, \ldots, -u_n)$. Adding $u$ and $-u$ component-wise results in $(0, \ldots, 0)$, the zero vector.
*   **Axiom 6 (Closure under Scalar Multiplication):** If $c$ is a scalar and $v$ is in $R^n$, then $c \cdot v$ is also an $n$-tuple of real numbers, hence in $R^n$.
*   **Axioms 7-10 (Distributivity and Associativity of Scalar Multiplication):** These also hold because the properties of real number arithmetic (distributivity, associativity) carry over to the component-wise operations. For example, for Axiom 7: $c \cdot (u+v) = c \cdot (u_1+v_1, \ldots, u_n+v_n) = (c(u_1+v_1), \ldots, c(u_n+v_n))$. Using the distributive property of real numbers, this becomes $(cu_1+cv_1, \ldots, cu_n+cv_n)$, which is exactly $c \cdot u + c \cdot v$.

**Think of it this way:**
Imagine you're giving directions in a city using a grid system.
*   In $R^2$, a vector might be "go 3 blocks East, 5 blocks North" – represented as (3, 5).
*   Adding vectors is like combining directions: "go 3 East, 5 North" + "go 2 West, 4 North" = "go 1 East, 9 North", which is (3, 5) + (-2, 4) = (1, 9). (Note: West is negative East).
*   Scalar multiplication is like scaling a journey: If you want to go twice as far in the same direction, you multiply each component by 2. If your original direction was (3, 5), going twice as far is (6, 10).

This intuition is key for **CO2**. $R^n$ provides a framework for any problem that can be described by a list of $n$ numerical quantities. This is *huge* in data science! Your dataset might be represented as a collection of rows, where each row is an $n$-tuple (a feature vector).

**Connection to Course Outcomes:**

*   **CO1 (Solving Linear Equations, Eigenvalues, etc.):** $R^n$ is the natural "home" for vectors that appear in systems of linear equations ($Ax=b$). For example, if $A$ is an $m \times n$ matrix, then $x$ is in $R^n$ and $b$ is in $R^m$. Eigenvectors and eigenvalues are also defined for vectors in $R^n$ (specifically, for square matrices).
*   **CO2 (Vector Spaces and Subspaces):** $R^n$ itself *is* a vector space. We often talk about *subspaces* of $R^n$, like lines or planes passing through the origin, which also satisfy the vector space axioms. This is where the geometric intuition of vectors comes into play.
*   **CO3 (Inner Product Spaces):** $R^n$ can be made into an inner product space by defining a dot product (or scalar product). The standard dot product of $u=(u_1, \ldots, u_n)$ and $v=(v_1, \ldots, v_n)$ is $u \cdot v = u_1v_1 + \ldots + u_nv_n$. This is fundamental for concepts like length, angle, and orthogonality, which are used in least squares and many machine learning algorithms.
*   **CO4 (Linear Transformations):** Linear transformations often map vectors from one $R^n$ space to another $R^m$ space. For instance, a rotation or scaling in 2D is a transformation from $R^2$ to $R^2$.

**Kreyszig's Perspective:** Kreyszig (10th ed., Chapter 4) extensively covers $R^n$ as a vector space and introduces the standard operations and properties. He emphasizes that these operations are defined component-wise and directly satisfy the axioms, making $R^n$ a fundamental example.

**Larson's Perspective:** Larson (8th ed., Chapter 4) also builds up from the concept of vectors as directed line segments and then generalizes to n-tuples, clearly demonstrating the algebraic properties that make $R^n$ a vector space. He’s great at providing geometric interpretations for $R^2$ and $R^3$.

---

### Example 2: The Vector Space $M_{m \times n}$

Now, let's move to our second important example: $M_{m \times n}$, the set of all $m \times n$ matrices.

**What is $M_{m \times n}$?**
$M_{m \times n}$ is the set of all rectangular arrays of real numbers with $m$ rows and $n$ columns.

A typical element in $M_{m \times n}$ looks like this:
$$
A = \begin{pmatrix}
a_{11} & a_{12} & \cdots & a_{1n} \\
a_{21} & a_{22} & \cdots & a_{2n} \\
\vdots & \vdots & \ddots & \vdots \\
a_{m1} & a_{m2} & \cdots & a_{mn}
\end{pmatrix}
$$
where each $a_{ij}$ is a real number.

**Vector Addition in $M_{m \times n}$:**
If $A$ and $B$ are two $m \times n$ matrices, their sum $A+B$ is also an $m \times n$ matrix obtained by adding corresponding entries:
$$
(A+B)_{ij} = A_{ij} + B_{ij}
$$
This means:
$$
A+B = \begin{pmatrix}
a_{11}+b_{11} & a_{12}+b_{12} & \cdots & a_{1n}+b_{1n} \\
a_{21}+b_{21} & a_{22}+b_{22} & \cdots & a_{2n}+b_{2n} \\
\vdots & \vdots & \ddots & \vdots \\
a_{m1}+b_{m1} & a_{m2}+b_{m2} & \cdots & a_{mn}+b_{mn}
\end{pmatrix}
$$

**Scalar Multiplication in $M_{m \times n}$:**
If $c$ is a scalar and $A$ is an $m \times n$ matrix, the scalar product $c \cdot A$ is an $m \times n$ matrix where each entry is multiplied by $c$:
$$
(c \cdot A)_{ij} = c \cdot A_{ij}
$$
This means:
$$
c \cdot A = \begin{pmatrix}
c \cdot a_{11} & c \cdot a_{12} & \cdots & c \cdot a_{1n} \\
c \cdot a_{21} & c \cdot a_{22} & \cdots & c \cdot a_{2n} \\
\vdots & \vdots & \ddots & \vdots \\
c \cdot a_{m1} & c \cdot a_{m2} & \cdots & c \cdot a_{mn}
\end{pmatrix}
$$

**Why is $M_{m \times n}$ a Vector Space?**

Similar to $R^n$, $M_{m \times n}$ satisfies all the vector space axioms because of the properties of real number arithmetic. Let's think about it:

*   **Closure under Addition:** If $A$ and $B$ are $m \times n$ matrices, their sum $A+B$ is also an $m \times n$ matrix. (Remember, you can only add matrices of the same dimensions).
*   **Commutativity/Associativity of Addition:** These hold because addition of individual entries $a_{ij} + b_{ij}$ is commutative and associative for real numbers.
*   **Zero Vector:** The zero vector in $M_{m \times n}$ is the $m \times n$ matrix where every entry is 0. Adding this "zero matrix" to any matrix $A$ leaves $A$ unchanged.
*   **Negative Vector:** For any matrix $A$, its negative is $-A$, where each entry is the negative of the corresponding entry in $A$.
*   **Closure under Scalar Multiplication:** If $c$ is a scalar and $A$ is an $m \times n$ matrix, $c \cdot A$ is also an $m \times n$ matrix.
*   **Distributivity/Associativity of Scalar Multiplication:** These properties of real numbers extend to the matrix operations component-wise.

**Analogy Time:**
Think of matrices as spreadsheets or databases with a fixed number of rows and columns.
*   If you have two teams' performance statistics for $m$ games, with $n$ different metrics per game (e.g., points scored, assists, etc.), these could be represented as $m \times n$ matrices, say $T_1$ and $T_2$.
*   Adding these matrices $T_1 + T_2$ would give you a new matrix where each entry is the sum of the corresponding entries from the two teams. For instance, if $a_{ij}$ is Team 1's points in game $i$ and $b_{ij}$ is Team 2's points in game $i$, then $(T_1+T_2)_{ij}$ is their combined points in game $i$. This makes sense.
*   Scalar multiplication: If you wanted to see how the statistics would look if they were scaled by a factor of, say, 1.5 (perhaps for a hypothetical scenario or to normalize), you'd multiply every entry in the matrix by 1.5.

This structure allows us to model many real-world scenarios where data is organized in tabular form.

**Connection to Course Outcomes:**

*   **CO1 (Solving Linear Equations, Eigenvalues, etc.):** Matrices are central to systems of linear equations ($Ax=b$), where $A$ is an $m \times n$ matrix. Eigenvalues and eigenvectors are primarily studied for square matrices ($n \times n$). Matrix operations (addition, multiplication) are foundational for solving these problems.
*   **CO2 (Vector Spaces and Subspaces):** $M_{m \times n}$ is itself a vector space. We can also discuss subspaces within $M_{m \times n}$, such as the set of all symmetric matrices ($A=A^T$) or skew-symmetric matrices ($A=-A^T$) for square matrices, which are themselves vector spaces.
*   **CO3 (Inner Product Spaces):** We can define an inner product on $M_{m \times n}$ (e.g., the Frobenius inner product) which allows us to talk about orthogonality and norms of matrices. This is less common in introductory courses but becomes important in more advanced linear algebra and its applications.
*   **CO4 (Linear Transformations):** Every linear transformation from $R^n$ to $R^m$ can be represented by an $m \times n$ matrix. Matrix multiplication is precisely the operation that applies a linear transformation to a vector. This is a *very* important connection. If $T: R^n \to R^m$ is a linear transformation, there exists a unique $m \times n$ matrix $A$ such that $T(x) = Ax$ for all $x \in R^n$. This is a core concept for **CO4**.

**Deisenroth, Faisal, Ong's Perspective:** In "Mathematics for Machine Learning," matrices are presented as fundamental data structures. They are not just arrays but objects that represent linear mappings. Their view emphasizes the role of matrices in data representation and manipulation, which aligns perfectly with our goals.

**Strang's Perspective:** Gilbert Strang, in "Linear Algebra and Learning from Data," views matrices as central to understanding data. He often discusses the space of $m \times n$ matrices and its properties, highlighting their role in transformations and solving systems of equations.

**Common Pitfall:** Remember that matrix addition requires matrices of the *same* dimensions. You can't add a $2 \times 3$ matrix to a $3 \times 2$ matrix using the standard matrix addition.

---

### Summary and Key Takeaways

Today, we've established that both $R^n$ (the space of $n$-tuples) and $M_{m \times n}$ (the space of $m \times n$ matrices) are fundamental examples of vector spaces.

*   **$R^n$**: Think of it as lists or vectors of numbers. It's crucial for representing data points, states in a system, and solutions to equations. Its geometric interpretations are powerful, especially for $n=2$ and $n=3$.
*   **$M_{m \times n}$**: Think of it as tables or grids of numbers. It's essential for representing linear transformations, data matrices, and coefficients in systems of equations.

**Remember this:** The operations of vector addition and scalar multiplication in both $R^n$ and $M_{m \times n}$ are defined component-wise (or entry-wise) and naturally satisfy the vector space axioms. This makes them our go-to examples.

Our understanding of these spaces directly supports all our course outcomes:
*   **CO1**: We'll use $R^n$ and $M_{m \times n}$ heavily when solving linear systems and analyzing eigenvalues.
*   **CO2**: We've just laid the groundwork for what makes them vector spaces, and we'll build on this with subspaces.
*   **CO3**: $R^n$ (via the dot product) is the primary example of an inner product space.
*   **CO4**: Matrices in $M_{m \times n}$ *are* the tools we use to represent linear transformations between spaces like $R^n$ and $R^m$.

Keep these definitions and properties in mind as we move forward. They are the bedrock of much of what we'll learn in this course!

---

### Sample Questions with Answers

**Question 1 (Conceptual - CO2):**
Is the set of all $2 \times 2$ matrices with real entries a vector space? Justify your answer by referencing the defining properties.

**Answer:**
Yes, the set of all $2 \times 2$ matrices with real entries, denoted as $M_{2 \times 2}$, is a vector space.
To justify this, we need to show that it satisfies the vector space axioms with respect to matrix addition and scalar multiplication.
1.  **Closure under Addition:** If $A$ and $B$ are $2 \times 2$ matrices, their sum $A+B$ is also a $2 \times 2$ matrix.
2.  **Commutativity of Addition:** For $2 \times 2$ matrices $A, B$, $A+B = B+A$ because their corresponding entries $a_{ij} + b_{ij} = b_{ij} + a_{ij}$.
3.  **Associativity of Addition:** For $2 \times 2$ matrices $A, B, C$, $(A+B)+C = A+(B+C)$.
4.  **Zero Vector:** The $2 \times 2$ zero matrix $\begin{pmatrix} 0 & 0 \\ 0 & 0 \end{pmatrix}$ exists in $M_{2 \times 2}$ and $A + \mathbf{0} = A$.
5.  **Additive Inverse:** For any $2 \times 2$ matrix $A$, its negative $-A$ (where each entry is negated) exists in $M_{2 \times 2}$ and $A + (-A) = \mathbf{0}$.
6.  **Closure under Scalar Multiplication:** If $c$ is a scalar and $A$ is a $2 \times 2$ matrix, $c \cdot A$ is also a $2 \times 2$ matrix.
7.  **Distributivity over Vector Addition:** $c(A+B) = cA + cB$.
8.  **Distributivity over Scalar Addition:** $(c+d)A = cA + dA$.
9.  **Associativity of Scalar Multiplication:** $(cd)A = c(dA)$.
10. **Multiplicative Identity:** $1 \cdot A = A$.

Since all axioms are satisfied due to the properties of real number arithmetic applied entry-wise, $M_{2 \times 2}$ is a vector space.

**Question 2 (Application - CO1, CO4):**
Let $T: R^2 \to R^2$ be a linear transformation defined by $T(x) = Ax$, where $A = \begin{pmatrix} 2 & 1 \\ -1 & 3 \end{pmatrix}$.
a) What is $T((1, 0))$?
b) What is $T((2, 3))$?
c) Is $T$ a function from $R^2$ to $R^2$? Explain.

**Answer:**
a) To find $T((1, 0))$, we need to compute $A \begin{pmatrix} 1 \\ 0 \end{pmatrix}$:
$A \begin{pmatrix} 1 \\ 0 \end{pmatrix} = \begin{pmatrix} 2 & 1 \\ -1 & 3 \end{pmatrix} \begin{pmatrix} 1 \\ 0 \end{pmatrix} = \begin{pmatrix} (2)(1) + (1)(0) \\ (-1)(1) + (3)(0) \end{pmatrix} = \begin{pmatrix} 2 \\ -1 \end{pmatrix}$.
So, $T((1, 0)) = (2, -1)$.

b) To find $T((2, 3))$, we need to compute $A \begin{pmatrix} 2 \\ 3 \end{pmatrix}$:
$A \begin{pmatrix} 2 \\ 3 \end{pmatrix} = \begin{pmatrix} 2 & 1 \\ -1 & 3 \end{pmatrix} \begin{pmatrix} 2 \\ 3 \end{pmatrix} = \begin{pmatrix} (2)(2) + (1)(3) \\ (-1)(2) + (3)(3) \end{pmatrix} = \begin{pmatrix} 4 + 3 \\ -2 + 9 \end{pmatrix} = \begin{pmatrix} 7 \\ 7 \end{pmatrix}$.
So, $T((2, 3)) = (7, 7)$.

c) Yes, $T$ is a function from $R^2$ to $R^2$.
The input vectors are in $R^2$ (they are 2-tuples of real numbers, represented as column vectors of size $2 \times 1$).
The matrix $A$ is $2 \times 2$. When we multiply a $2 \times 2$ matrix by a $2 \times 1$ vector, the result is a $2 \times 1$ vector, which represents an element of $R^2$. Therefore, the transformation maps elements from $R^2$ to $R^2$. This is a direct application of the concept that matrices represent linear transformations between Euclidean spaces.

---
