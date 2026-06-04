---
title: "Spanning sets"
subject: "MATHEMATICS FOR INFORMATION SCIENCE – 2"
module: "Module 2: Vector Spaces"
branch: "Computer Science and Engineering"
semester: 2
topicId: "68b45b6e58474a0b135b5d14"
status: "completed"
scrapedAt: "2026-05-20T16:34:36.590Z"
---
## MATHEMATICS FOR INFORMATION SCIENCE – 2: Module 2 - Vector Spaces

### Topic: Spanning Sets – Building the Foundations of Vector Spaces

Hello everyone, and welcome back to our journey into the fascinating world of linear algebra! Today, we're diving into a crucial concept that forms the bedrock of vector spaces: **Spanning Sets**. Understanding spanning sets is absolutely key to grasping how we can represent and manipulate vectors. It’s directly linked to our **Course Outcome 2 (CO2)**, where we aim to understand vector spaces and subspaces and apply their properties. Think of it as learning how to build with a fundamental set of Lego bricks – once you know what you can build with a few basic pieces, you can construct almost anything!

**What's a Vector Space, Anyway? (A Quick Refresher)**

Before we talk about spanning sets, let's quickly recall what a vector space is. It's essentially a collection of objects (vectors) that you can add together and "scale" (multiply by a scalar, like a real number) in a way that satisfies certain rules. These rules ensure that addition and scaling behave nicely, much like how numbers behave. Think of 2D or 3D space – you can add vectors representing displacements, and you can stretch or shrink them. These are our familiar examples of vector spaces.

Now, where do spanning sets fit in?

### The Big Idea: Generating Vectors – Like a Recipe!

Imagine you're trying to cook a specific dish, and you have a set of core ingredients. A spanning set is like that core set of ingredients. If you have the right combination and amounts of these ingredients, you can create your dish. Similarly, if you have a set of vectors, and you can combine them using addition and scalar multiplication, you can "generate" *all* the other vectors in a particular vector space.

This concept of "generating" is precisely what a **spanning set** is all about.

**Definition: Spanning Set**

A set of vectors $S = \{\mathbf{v}_1, \mathbf{v}_2, \dots, \mathbf{v}_k\}$ in a vector space $V$ is called a **spanning set** for $V$ if *every* vector $\mathbf{v}$ in $V$ can be written as a **linear combination** of the vectors in $S$.

What’s a linear combination? It’s simply a sum of scalar multiples of the vectors. For example, if we have vectors $\mathbf{v}_1$ and $\mathbf{v}_2$, a linear combination would look like $c_1\mathbf{v}_1 + c_2\mathbf{v}_2$, where $c_1$ and $c_2$ are scalars.

So, if a set $S$ spans a vector space $V$, it means for *any* vector $\mathbf{v} \in V$, we can find scalars $c_1, c_2, \dots, c_k$ such that:

$\mathbf{v} = c_1\mathbf{v}_1 + c_2\mathbf{v}_2 + \dots + c_k\mathbf{v}_k$

**Connecting to CO2:** This directly helps us understand how a few fundamental vectors can *define* an entire vector space. If we know a spanning set, we know the "building blocks" of that space.

### Everyday Analogies for Spanning Sets

Let's make this more concrete with some analogies:

*   **The Primary Colors:** Think of the primary colors: red, yellow, and blue. With these three colors, you can mix and create virtually every other color you see. Red, yellow, and blue form a "spanning set" for the "vector space" of visible colors. You can't create green just from red and blue; you need yellow too. Similarly, in vector spaces, you need the *right* set of vectors.

*   **Directions on a Map:** In 2D space (like a flat map), we often use the standard basis vectors: $\mathbf{i} = (1, 0)$ pointing east, and $\mathbf{j} = (0, 1)$ pointing north. Any location on the map can be reached by going a certain distance east and a certain distance north. For example, to get to a point 3 units east and 2 units north, you'd combine them as $3\mathbf{i} + 2\mathbf{j}$. The set $\{\mathbf{i}, \mathbf{j}\}$ **spans** the 2D plane ($\mathbb{R}^2$).

*   **Ingredients for a Simple Meal:** Suppose you want to make a basic pasta dish. Your "spanning set" of ingredients might be pasta, tomato sauce, and perhaps some garlic. With these, you can make many variations. If you want to make something *other* than a pasta dish, say, a stir-fry, your original ingredient set won't work. You need different "spanning vectors" for a different "vector space" (e.g., a space of Asian cuisine ingredients).

### Spanning Sets and Subspaces

Now, a spanning set doesn't *have* to span the *entire* vector space. It can also span a smaller collection of vectors within that space, which we call a **subspace**.

**Definition: Span of a Set**

The **span of a set of vectors $S = \{\mathbf{v}_1, \mathbf{v}_2, \dots, \mathbf{v}_k\}$**, denoted as $\text{span}(S)$ or $\text{span}(\mathbf{v}_1, \mathbf{v}_2, \dots, \mathbf{v}_k)$, is the set of *all possible linear combinations* of the vectors in $S$.

$\text{span}(S) = \{c_1\mathbf{v}_1 + c_2\mathbf{v}_2 + \dots + c_k\mathbf{v}_k \mid c_1, c_2, \dots, c_k \text{ are scalars}\}$

**Key Insight:** The span of any set of vectors is *always* a subspace of the original vector space. This is a crucial point and directly relates to **CO2**. Why?
1.  **Closure under Addition:** If you take two vectors from the span, say $\mathbf{u} = c_1\mathbf{v}_1 + \dots + c_k\mathbf{v}_k$ and $\mathbf{w} = d_1\mathbf{v}_1 + \dots + d_k\mathbf{v}_k$, their sum $\mathbf{u} + \mathbf{w} = (c_1+d_1)\mathbf{v}_1 + \dots + (c_k+d_k)\mathbf{v}_k$ is also a linear combination of the original vectors, so it's in the span.
2.  **Closure under Scalar Multiplication:** If you take a vector $\mathbf{u}$ from the span and multiply it by a scalar $a$, then $a\mathbf{u} = a(c_1\mathbf{v}_1 + \dots + c_k\mathbf{v}_k) = (ac_1)\mathbf{v}_1 + \dots + (ac_k)\mathbf{v}_k$, which is also a linear combination, and thus in the span.
3.  **Contains the Zero Vector:** If you set all scalars $c_i$ to zero, you get the zero vector ($0\mathbf{v}_1 + \dots + 0\mathbf{v}_k = \mathbf{0}$), which must be in any subspace.

**How this connects to textbooks:** Both Kreyszig (Chapter 4) and Larson (Chapter 4) extensively cover vector spaces and subspaces, and the concept of span is foundational to understanding these. They will show you proofs of why the span is a subspace, which is excellent for building a deep understanding.

### Examples of Spanning Sets

Let's work through some examples to solidify this.

**Example 1: Spanning $\mathbb{R}^2$**

Consider the vectors $\mathbf{v}_1 = (1, 0)$ and $\mathbf{v}_2 = (0, 1)$ in $\mathbb{R}^2$.
Can any vector $(a, b)$ in $\mathbb{R}^2$ be written as a linear combination of $\mathbf{v}_1$ and $\mathbf{v}_2$?
We need to find scalars $c_1, c_2$ such that:
$(a, b) = c_1(1, 0) + c_2(0, 1)$
$(a, b) = (c_1, 0) + (0, c_2)$
$(a, b) = (c_1, c_2)$
So, we can choose $c_1 = a$ and $c_2 = b$.
Thus, $\{\mathbf{v}_1, \mathbf{v}_2\}$ spans $\mathbb{R}^2$. This is why we call these the *standard basis vectors* for $\mathbb{R}^2$.

**Example 2: Another Spanning Set for $\mathbb{R}^2$**

What about the set $S = \{\mathbf{u}_1 = (1, 1), \mathbf{u}_2 = (1, -1)\}$? Does this set span $\mathbb{R}^2$?
Let's try to represent an arbitrary vector $(a, b)$ as a linear combination:
$(a, b) = c_1(1, 1) + c_2(1, -1)$
$(a, b) = (c_1, c_1) + (c_2, -c_2)$
$(a, b) = (c_1 + c_2, c_1 - c_2)$

This gives us a system of linear equations:
1.  $c_1 + c_2 = a$
2.  $c_1 - c_2 = b$

We can solve this system. Adding the two equations gives $2c_1 = a + b$, so $c_1 = \frac{a+b}{2}$.
Subtracting the second equation from the first gives $2c_2 = a - b$, so $c_2 = \frac{a-b}{2}$.
Since we can find scalars $c_1$ and $c_2$ for *any* $(a, b)$, the set $S = \{(1, 1), (1, -1)\}$ also spans $\mathbb{R}^2$.
This shows there can be multiple spanning sets for the same vector space!

**Example 3: A Set That Does NOT Span $\mathbb{R}^2$**

Consider the set $T = \{\mathbf{w}_1 = (1, 2), \mathbf{w}_2 = (2, 4)\}$ in $\mathbb{R}^2$.
Notice that $\mathbf{w}_2 = 2\mathbf{w}_1$. These vectors are linearly dependent; they lie on the same line through the origin.
Let's try to represent an arbitrary vector $(a, b)$:
$(a, b) = c_1(1, 2) + c_2(2, 4)$
$(a, b) = (c_1 + 2c_2, 2c_1 + 4c_2)$
$(a, b) = (c_1 + 2c_2, 2(c_1 + 2c_2))$

This means that for *any* linear combination of $\mathbf{w}_1$ and $\mathbf{w}_2$, the second component will always be twice the first component. So, we can only generate vectors of the form $(x, 2x)$. We *cannot* generate a vector like $(1, 3)$, for instance.
Therefore, $T = \{(1, 2), (2, 4)\}$ does *not* span $\mathbb{R}^2$. It only spans the line defined by $y=2x$ within $\mathbb{R}^2$. This line is a subspace of $\mathbb{R}^2$.

**Connecting to CO1:** Determining if a set of vectors can span a space often involves solving systems of linear equations, which is a core skill for **CO1**. If the system for finding the scalars $c_i$ has a solution for all target vectors, the set spans. If it doesn't, it doesn't.

### Spanning Sets for Polynomial Spaces

Vector spaces aren't just about lists of numbers! They can also be spaces of polynomials, functions, matrices, etc.

Let $P_2$ be the vector space of all polynomials of degree at most 2. A general polynomial in $P_2$ looks like $p(x) = ax^2 + bx + c$.

Consider the set $S = \{1, x, x^2\}$.
Can any polynomial $ax^2 + bx + c$ in $P_2$ be written as a linear combination of $1, x, x^2$?
Yes! We can choose the scalars to be $a, b, c$:
$ax^2 + bx + c = c(1) + b(x) + a(x^2)$
Here, the coefficients $a, b, c$ are the scalars. So, the set $\{1, x, x^2\}$ spans $P_2$. This is the standard basis for $P_2$.

What about the set $S' = \{1+x, x, x^2\}$? Does this span $P_2$?
Let's try to represent $ax^2 + bx + c$.
$ax^2 + bx + c = c_1(1+x) + c_2(x) + c_3(x^2)$
$ax^2 + bx + c = c_1 + c_1x + c_2x + c_3x^2$
$ax^2 + bx + c = c_3x^2 + (c_1+c_2)x + c_1$

Comparing coefficients:
$c_3 = a$
$c_1 + c_2 = b$
$c_1 = c$

We can easily solve for $c_1, c_2, c_3$. From $c_1 = c$, we get $c = c$. From $c_3 = a$, we get $a=a$. And then $c_1+c_2 = b \implies c+c_2 = b \implies c_2 = b-c$.
Since we can find scalars $c_1, c_2, c_3$ for any $a, b, c$, the set $S' = \{1+x, x, x^2\}$ also spans $P_2$.

**Reference:** Deisenroth, Faisal, and Ong's "Mathematics for Machine Learning" often uses examples from function spaces and polynomial spaces, which is very relevant for information science applications. They'll show how these concepts extend beyond just $\mathbb{R}^n$.

### The Importance of Minimality and Efficiency

While a set might span a vector space, it's not always the *most efficient* way to do so. Think back to the primary colors. Could you create all colors with *more* than just red, yellow, and blue? Yes, you could add green, purple, etc. But red, yellow, and blue are the *minimal* set you need.

This leads us to related concepts like **linear independence** and **basis**, which we'll cover in future topics. A spanning set is often thought of in conjunction with linear independence to form a basis. A basis is a spanning set that is also linearly independent, meaning it's the most concise way to represent every vector.

**Exam Tip:** When asked if a set spans a space, the core task is to set up the equation for a linear combination and see if you can solve for the coefficients for *any* arbitrary vector in the target space. This usually boils down to checking if a system of linear equations has a solution. If the vectors are linearly dependent, they likely won't span a space of higher dimension than the "dimension" of the subspace they define.

### Summary of Key Takeaways

*   A **spanning set** for a vector space $V$ is a set of vectors whose linear combinations can generate *every* vector in $V$.
*   The **span of a set** is the collection of all possible linear combinations of those vectors.
*   The span of any set of vectors is always a **subspace**. This is a direct connection to **CO2**.
*   There can be **multiple spanning sets** for the same vector space or subspace.
*   Determining if a set spans often involves solving **systems of linear equations**, linking to **CO1**.
*   Understanding spanning sets is crucial for building more advanced concepts like bases, which are fundamental in many information science applications (e.g., data representation, signal processing).

Remember this: Spanning sets are the "ingredient lists" that allow you to "cook up" all the vectors in a given space. They show you the fundamental building blocks!

---

### Sample Questions and Answers

**Conceptual Question 1:**
Explain in your own words why the span of a set of vectors is always a subspace.

**Answer:**
The span of a set of vectors $\{ \mathbf{v}_1, \dots, \mathbf{v}_k \}$ is the set of all vectors that can be written as $c_1\mathbf{v}_1 + \dots + c_k\mathbf{v}_k$. To be a subspace, this set must be closed under addition and scalar multiplication, and it must contain the zero vector.
1.  **Zero Vector:** If we choose all scalars $c_i = 0$, we get $0\mathbf{v}_1 + \dots + 0\mathbf{v}_k = \mathbf{0}$, so the zero vector is in the span.
2.  **Closure under Addition:** If we take two vectors from the span, say $\mathbf{u} = a_1\mathbf{v}_1 + \dots + a_k\mathbf{v}_k$ and $\mathbf{w} = b_1\mathbf{v}_1 + \dots + b_k\mathbf{v}_k$, their sum is $\mathbf{u} + \mathbf{w} = (a_1+b_1)\mathbf{v}_1 + \dots + (a_k+b_k)\mathbf{v}_k$. Since $(a_i+b_i)$ are also scalars, the sum is also a linear combination of the original vectors, so it's in the span.
3.  **Closure under Scalar Multiplication:** If we take a vector $\mathbf{u} = a_1\mathbf{v}_1 + \dots + a_k\mathbf{v}_k$ from the span and multiply it by a scalar $c$, we get $c\mathbf{u} = c(a_1\mathbf{v}_1 + \dots + a_k\mathbf{v}_k) = (ca_1)\mathbf{v}_1 + \dots + (ca_k)\mathbf{v}_k$. Since $(ca_i)$ are also scalars, $c\mathbf{u}$ is also a linear combination of the original vectors, so it's in the span.
Because all three subspace conditions are met, the span of any set of vectors is indeed a subspace. This directly relates to **CO2**.

**Exam-Oriented Question 2:**
Determine if the set of vectors $S = \{(1, 0, 1), (0, 1, 1), (1, 1, 2)\}$ spans $\mathbb{R}^3$.

**Answer:**
To determine if $S$ spans $\mathbb{R}^3$, we need to check if any arbitrary vector $(a, b, c) \in \mathbb{R}^3$ can be written as a linear combination of the vectors in $S$. That is, can we find scalars $c_1, c_2, c_3$ such that:
$(a, b, c) = c_1(1, 0, 1) + c_2(0, 1, 1) + c_3(1, 1, 2)$

This expands to the following system of linear equations:
$a = c_1 + c_3$
$b = c_2 + c_3$
$c = c_1 + c_2 + 2c_3$

We can rewrite this system in matrix form:
$\begin{pmatrix} 1 & 0 & 1 \\ 0 & 1 & 1 \\ 1 & 1 & 2 \end{pmatrix} \begin{pmatrix} c_1 \\ c_2 \\ c_3 \end{pmatrix} = \begin{pmatrix} a \\ b \\ c \end{pmatrix}$

For the set $S$ to span $\mathbb{R}^3$, this system must have a solution for *any* $(a, b, c)$. This is equivalent to checking if the matrix $\begin{pmatrix} 1 & 0 & 1 \\ 0 & 1 & 1 \\ 1 & 1 & 2 \end{pmatrix}$ is invertible, or equivalently, if its determinant is non-zero.

Let's calculate the determinant of the matrix:
$\begin{vmatrix} 1 & 0 & 1 \\ 0 & 1 & 1 \\ 1 & 1 & 2 \end{vmatrix} = 1 \begin{vmatrix} 1 & 1 \\ 1 & 2 \end{vmatrix} - 0 \begin{vmatrix} 0 & 1 \\ 1 & 2 \end{vmatrix} + 1 \begin{vmatrix} 0 & 1 \\ 1 & 1 \end{vmatrix}$
$= 1( (1)(2) - (1)(1) ) - 0 + 1( (0)(1) - (1)(1) )$
$= 1(2 - 1) + 1(0 - 1)$
$= 1(1) + 1(-1)$
$= 1 - 1 = 0$

Since the determinant is 0, the matrix is singular, meaning the system of equations does not have a unique solution for all $(a, b, c)$. In fact, because the third row $(1, 1, 2)$ is the sum of the first two rows $(1, 0, 1) + (0, 1, 1)$, the third vector is a linear combination of the first two. This means the vectors are linearly dependent and lie on a plane, not the entire 3D space.

Therefore, the set $S$ does **not** span $\mathbb{R}^3$. It spans a subspace of $\mathbb{R}^3$ (specifically, the plane defined by the linear combinations of its vectors). This exercise is a prime example of applying **CO1** to solve a problem related to vector spaces.

**Conceptual Question 3:**
Is the set $S = \{\mathbf{0}\}$ (containing only the zero vector) a spanning set for any vector space $V$? Explain.

**Answer:**
The set $S = \{\mathbf{0}\}$ can only generate the zero vector itself, through any scalar multiplication ($c \cdot \mathbf{0} = \mathbf{0}$). Therefore, $S$ is a spanning set *only* for the trivial vector space $\{\mathbf{0}\}$. For any other vector space $V$ that contains non-zero vectors (like $\mathbb{R}^2$ or $P_2$), the set $S = \{\mathbf{0}\}$ cannot generate those non-zero vectors. Thus, it's not a spanning set for any $V \neq \{\mathbf{0}\}$. This connects to **CO2** by showing the property of minimal spanning sets.
