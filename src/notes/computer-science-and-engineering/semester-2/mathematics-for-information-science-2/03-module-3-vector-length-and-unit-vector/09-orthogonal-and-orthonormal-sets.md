---
title: "Orthogonal and orthonormal sets"
subject: "MATHEMATICS FOR INFORMATION SCIENCE – 2"
module: "Module 3: Vector length and unit vector"
branch: "Computer Science and Engineering"
semester: 2
topicId: "68b45b6e58474a0b135b5d23"
status: "completed"
scrapedAt: "2026-05-20T16:34:46.676Z"
---
## MATHEMATICS FOR INFORMATION SCIENCE – 2

### Module 3: Vector Length and Unit Vector

#### Topic: Orthogonal and Orthonormal Sets

Welcome, everyone! In our journey through the fascinating world of linear algebra, we’ve already explored how to measure the ‘size’ of a vector – its length. Today, we’re going to delve into a concept that’s just as fundamental, if not more so, when we talk about how vectors *relate* to each other: **orthogonality**. Think of it as understanding if vectors are “at right angles” to one another in a generalized sense. This is a cornerstone for many algorithms and concepts in information science, from data compression to machine learning.

Our main goal today is to understand what it means for a set of vectors to be **orthogonal** and, a special case of that, **orthonormal**. We’ll see how these concepts directly tie into the Course Outcomes, particularly **CO3**, which is all about inner product spaces, orthonormalization, and solving least squares problems. Understanding orthogonality is the first crucial step towards those more advanced applications.

---

### 1. The Foundation: The Inner Product

Before we talk about vectors being "at right angles," we need to define what that means mathematically. We’ve all learned about the dot product in basic geometry, right? For two vectors $\mathbf{u} = [u_1, u_2]$ and $\mathbf{v} = [v_1, v_2]$ in $\mathbb{R}^2$, their dot product is $\mathbf{u} \cdot \mathbf{v} = u_1v_1 + u_2v_2$. This dot product is intimately linked to the angle between the vectors, through the famous formula: $\mathbf{u} \cdot \mathbf{v} = \|\mathbf{u}\| \|\mathbf{v}\| \cos \theta$.

In our course, Mathematics for Information Science – 2, we’re working with **inner product spaces**. These are vector spaces where we can generalize this notion of the dot product. For vectors $\mathbf{u}$ and $\mathbf{v}$ in an inner product space, the inner product is typically denoted as $\langle \mathbf{u}, \mathbf{v} \rangle$.

**Key Insight:** The inner product is the generalization of the dot product. It’s a way to "multiply" two vectors and get a scalar value. This scalar value carries crucial information about their relationship.

For real vector spaces, like the ones we’ll most commonly encounter, the inner product often *is* the dot product. So, for vectors $\mathbf{u} = [u_1, u_2, \dots, u_n]$ and $\mathbf{v} = [v_1, v_2, \dots, v_n]$ in $\mathbb{R}^n$, the inner product is:

$$
\langle \mathbf{u}, \mathbf{v} \rangle = \mathbf{u} \cdot \mathbf{v} = u_1v_1 + u_2v_2 + \dots + u_nv_n
$$

This is the standard inner product on $\mathbb{R}^n$. Kreyszig’s *Advanced Engineering Mathematics* and Larson’s *Elementary Linear Algebra* both cover these foundational definitions thoroughly. They’ll show you the properties of an inner product (linearity, symmetry, positive-definiteness), which are essential for proving theoretical results.

#### Connecting to Course Outcomes:

*   **CO3:** This is where it all begins! Understanding the inner product is directly enabling us to describe inner product spaces and their properties. Without this, we can't move forward.
*   **CO2:** Vector spaces are the environments where these operations live. The inner product is an operation defined *on* vector spaces.

---

### 2. The Heart of the Matter: Orthogonality

Now, let's get to orthogonality. What does it mean for two vectors to be "orthogonal"? In our familiar 2D or 3D space, we say two vectors are orthogonal if they are perpendicular, meaning the angle between them is 90 degrees ($\pi/2$ radians).

How does our inner product help us here? Remember the dot product formula: $\mathbf{u} \cdot \mathbf{v} = \|\mathbf{u}\| \|\mathbf{v}\| \cos \theta$.
If $\theta = \pi/2$, then $\cos(\pi/2) = 0$. This means the entire product becomes zero, regardless of the lengths of the vectors!

**Definition: Orthogonal Vectors**

Two vectors $\mathbf{u}$ and $\mathbf{v}$ in an inner product space are called **orthogonal** if their inner product is zero:

$$
\langle \mathbf{u}, \mathbf{v} \rangle = 0
$$

**Think about it like this:** Imagine you’re navigating on a 2D map. If your path (vector $\mathbf{u}$) is strictly east-west, and your friend’s path (vector $\mathbf{v}$) is strictly north-south, you are traveling orthogonally. Your movements don't "interfere" with each other in a directional sense. In data science, this could mean two features or dimensions of your data are completely independent in a linear algebraic sense.

**Example 1: A simple dot product check**

Let $\mathbf{u} = [1, 2]$ and $\mathbf{v} = [-2, 1]$ in $\mathbb{R}^2$.
Their inner product (dot product) is:
$\langle \mathbf{u}, \mathbf{v} \rangle = (1)(-2) + (2)(1) = -2 + 2 = 0$.
So, $\mathbf{u}$ and $\mathbf{v}$ are orthogonal. You can visualize this: $\mathbf{u}$ goes 1 unit right and 2 units up. $\mathbf{v}$ goes 2 units left and 1 unit up. They form a perfect right angle.

**Example 2: Orthogonality in $\mathbb{R}^3$**

Consider $\mathbf{u} = [1, 0, 0]$ (the standard basis vector along the x-axis) and $\mathbf{v} = [0, 1, 0]$ (the standard basis vector along the y-axis).
$\langle \mathbf{u}, \mathbf{v} \rangle = (1)(0) + (0)(1) + (0)(0) = 0$.
They are orthogonal, as expected. What about $\mathbf{w} = [0, 0, 1]$ (z-axis)?
$\langle \mathbf{u}, \mathbf{w} \rangle = 0$ and $\langle \mathbf{v}, \mathbf{w} \rangle = 0$. All standard basis vectors are mutually orthogonal.

**Example 3: Functions as Vectors (This is where it gets really powerful for Info Sci!)**

In many applications, especially in signal processing and machine learning, we treat functions as vectors! The inner product can be defined as an integral. For continuous functions $f(x)$ and $g(x)$ on an interval $[a, b]$, a common inner product is:

$$
\langle f, g \rangle = \int_a^b f(x)g(x) \, dx
$$

Consider functions $f(x) = x$ and $g(x) = x^2$ on the interval $[-1, 1]$. Let’s check if they are orthogonal:

$$
\langle f, g \rangle = \int_{-1}^1 x \cdot x^2 \, dx = \int_{-1}^1 x^3 \, dx
$$

The integral of $x^3$ is $\frac{x^4}{4}$. Evaluating from -1 to 1:
$\frac{(1)^4}{4} - \frac{(-1)^4}{4} = \frac{1}{4} - \frac{1}{4} = 0$.
So, the functions $f(x)=x$ and $g(x)=x^2$ are orthogonal on $[-1, 1]$ in this function space! This might seem abstract, but it’s fundamental to concepts like Fourier series, where we decompose signals into orthogonal functions. This directly relates to **CO3** as we're working in an inner product space of functions.

#### Connecting to Course Outcomes:

*   **CO2, CO3:** Orthogonality is a key property of vectors in inner product spaces. It’s a direct consequence of the inner product definition.

---

### 3. Extending Orthogonality: Orthogonal Sets

What if we have more than two vectors? We can extend the idea of orthogonality to a *set* of vectors.

**Definition: Orthogonal Set of Vectors**

A set of vectors $\{\mathbf{v}_1, \mathbf{v}_2, \dots, \mathbf{v}_k\}$ in an inner product space is called **orthogonal** if every pair of distinct vectors in the set is orthogonal. That is:

$$
\langle \mathbf{v}_i, \mathbf{v}_j \rangle = 0 \quad \text{for all } i \neq j
$$

**Think of it like this:** Imagine a room. The floor can be considered a plane. If you have a stick standing straight up from the floor (perpendicular to the floor), and two other sticks lying flat on the floor, where one is aligned with the north-south axis and the other with the east-west axis, then these three sticks are mutually orthogonal. The stick pointing up is orthogonal to both floor sticks, and the two floor sticks are orthogonal to each other.

**Example 4: Orthogonality in $\mathbb{R}^3$ (again!)**

The standard basis vectors in $\mathbb{R}^3$:
$\mathbf{e}_1 = [1, 0, 0]$
$\mathbf{e}_2 = [0, 1, 0]$
$\mathbf{e}_3 = [0, 0, 1]$

Let's check the pairs:
$\langle \mathbf{e}_1, \mathbf{e}_2 \rangle = (1)(0) + (0)(1) + (0)(0) = 0$
$\langle \mathbf{e}_1, \mathbf{e}_3 \rangle = (1)(0) + (0)(0) + (0)(1) = 0$
$\langle \mathbf{e}_2, \mathbf{e}_3 \rangle = (0)(0) + (1)(0) + (0)(1) = 0$

Since all pairs are orthogonal, the set $\{\mathbf{e}_1, \mathbf{e}_2, \mathbf{e}_3\}$ is an orthogonal set. This is a very important property of standard basis vectors.

**Key Property of Orthogonal Sets:** If $\{\mathbf{v}_1, \mathbf{v}_2, \dots, \mathbf{v}_k\}$ is an orthogonal set of non-zero vectors in an inner product space, then these vectors are **linearly independent**. This is a significant result! It means that if you have a set of non-zero vectors that are mutually orthogonal, they can’t be expressed as a linear combination of each other (unless they are the zero vector, which we usually exclude from orthogonal sets for this property).

*How do we prove this?* Let's say we have a linear combination that equals the zero vector:
$c_1\mathbf{v}_1 + c_2\mathbf{v}_2 + \dots + c_k\mathbf{v}_k = \mathbf{0}$.
Now, take the inner product of this equation with $\mathbf{v}_i$ for some $i$:
$\langle \mathbf{v}_i, c_1\mathbf{v}_1 + c_2\mathbf{v}_2 + \dots + c_k\mathbf{v}_k \rangle = \langle \mathbf{v}_i, \mathbf{0} \rangle$.
Using the linearity of the inner product on the left and the property $\langle \mathbf{v}, \mathbf{0} \rangle = 0$ on the right:
$c_1\langle \mathbf{v}_i, \mathbf{v}_1 \rangle + c_2\langle \mathbf{v}_i, \mathbf{v}_2 \rangle + \dots + c_i\langle \mathbf{v}_i, \mathbf{v}_i \rangle + \dots + c_k\langle \mathbf{v}_i, \mathbf{v}_k \rangle = 0$.
Since the set is orthogonal, $\langle \mathbf{v}_i, \mathbf{v}_j \rangle = 0$ for all $j \neq i$. So, all terms except the $i$-th term vanish:
$c_i\langle \mathbf{v}_i, \mathbf{v}_i \rangle = 0$.
Since $\mathbf{v}_i$ is a non-zero vector, its inner product with itself, $\langle \mathbf{v}_i, \mathbf{v}_i \rangle = \|\mathbf{v}_i\|^2$, is strictly positive. Therefore, for the equation to hold, $c_i$ must be zero. This holds for every $i$, meaning all coefficients $c_1, \dots, c_k$ must be zero. Hence, the set is linearly independent.

This linear independence is a very powerful property in many areas, including designing basis functions for signal processing and in constructing bases for subspaces.

#### Connecting to Course Outcomes:

*   **CO2, CO3:** This property of linear independence for orthogonal sets is a key aspect of understanding vector spaces and inner product spaces.

---

### 4. The Special Case: Orthonormal Sets

Orthogonality is great, but sometimes we want a bit more. What if we also ensure that each vector in our orthogonal set has a length of 1? This leads us to **orthonormal sets**.

**Definition: Orthonormal Set of Vectors**

A set of vectors $\{\mathbf{u}_1, \mathbf{u}_2, \dots, \mathbf{u}_k\}$ is called **orthonormal** if it is orthogonal *and* each vector has a length (norm) of 1. That is:

$$
\langle \mathbf{u}_i, \mathbf{u}_j \rangle = \begin{cases} 1 & \text{if } i = j \\ 0 & \text{if } i \neq j \end{cases}
$$

This can be compactly written as $\langle \mathbf{u}_i, \mathbf{u}_j \rangle = \delta_{ij}$, where $\delta_{ij}$ is the Kronecker delta.

**Think of it like this:** If orthogonal vectors are like directions at right angles (north, east, up), then orthonormal vectors are like standardized measuring sticks along those directions. They are not just at right angles, but they also have a unit length, making them ideal for building coordinate systems.

**Example 5: Standard Basis Vectors are Orthonormal**

In $\mathbb{R}^3$, the set $\{\mathbf{e}_1, \mathbf{e}_2, \mathbf{e}_3\}$ we saw earlier is not only orthogonal but also orthonormal because:
$\|\mathbf{e}_1\| = \sqrt{1^2 + 0^2 + 0^2} = 1$
$\|\mathbf{e}_2\| = \sqrt{0^2 + 1^2 + 0^2} = 1$
$\|\mathbf{e}_3\| = \sqrt{0^2 + 0^2 + 1^2} = 1$

And we already confirmed they are orthogonal. So, $\{\mathbf{e}_1, \mathbf{e}_2, \mathbf{e}_3\}$ is an orthonormal set.

**Example 6: Converting an Orthogonal Set to an Orthonormal Set**

Suppose we have an orthogonal set of non-zero vectors $\{\mathbf{v}_1, \mathbf{v}_2, \dots, \mathbf{v}_k\}$. To make it orthonormal, we simply normalize each vector. Normalizing a vector means dividing it by its length. The normalized vector is often denoted with a hat, $\hat{\mathbf{u}}$.

So, if $\mathbf{u}_i = \frac{\mathbf{v}_i}{\|\mathbf{v}_i\|}$ for each $i=1, \dots, k$, then the set $\{\mathbf{u}_1, \mathbf{u}_2, \dots, \mathbf{u}_k\}$ is an orthonormal set.

Let's take our earlier example: $\mathbf{v}_1 = [1, 2]$ and $\mathbf{v}_2 = [-2, 1]$. We know they are orthogonal.
Let's find their lengths:
$\|\mathbf{v}_1\| = \sqrt{1^2 + 2^2} = \sqrt{1+4} = \sqrt{5}$
$\|\mathbf{v}_2\| = \sqrt{(-2)^2 + 1^2} = \sqrt{4+1} = \sqrt{5}$

Now, let's normalize them:
$\mathbf{u}_1 = \frac{\mathbf{v}_1}{\|\mathbf{v}_1\|} = \frac{1}{\sqrt{5}}[1, 2] = [\frac{1}{\sqrt{5}}, \frac{2}{\sqrt{5}}]$
$\mathbf{u}_2 = \frac{\mathbf{v}_2}{\|\mathbf{v}_2\|} = \frac{1}{\sqrt{5}}[-2, 1] = [-\frac{2}{\sqrt{5}}, \frac{1}{\sqrt{5}}]$

The set $\{\mathbf{u}_1, \mathbf{u}_2\}$ is an orthonormal set. You can check:
$\langle \mathbf{u}_1, \mathbf{u}_1 \rangle = (\frac{1}{\sqrt{5}})^2 + (\frac{2}{\sqrt{5}})^2 = \frac{1}{5} + \frac{4}{5} = \frac{5}{5} = 1$.
$\langle \mathbf{u}_2, \mathbf{u}_2 \rangle = (-\frac{2}{\sqrt{5}})^2 + (\frac{1}{\sqrt{5}})^2 = \frac{4}{5} + \frac{1}{5} = \frac{5}{5} = 1$.
$\langle \mathbf{u}_1, \mathbf{u}_2 \rangle = (\frac{1}{\sqrt{5}})(-\frac{2}{\sqrt{5}}) + (\frac{2}{\sqrt{5}})(\frac{1}{\sqrt{5}}) = -\frac{2}{5} + \frac{2}{5} = 0$.
So, indeed, it's an orthonormal set.

**Why is the unit length important?**
When you have an orthonormal set $\{\mathbf{u}_1, \mathbf{u}_2, \dots, \mathbf{u}_k\}$, it simplifies many calculations. For instance, if you want to express a vector $\mathbf{x}$ as a linear combination of these orthonormal vectors: $\mathbf{x} = c_1\mathbf{u}_1 + c_2\mathbf{u}_2 + \dots + c_k\mathbf{u}_k$.

Finding the coefficients $c_i$ becomes super easy! Remember how we found coefficients for orthogonal sets? We had $c_i = \frac{\langle \mathbf{x}, \mathbf{v}_i \rangle}{\langle \mathbf{v}_i, \mathbf{v}_i \rangle}$.
But if the set is orthonormal, $\langle \mathbf{u}_i, \mathbf{u}_i \rangle = 1$. So the formula simplifies to:

$$
c_i = \langle \mathbf{x}, \mathbf{u}_i \rangle
$$

This means the coefficients are simply the inner products of $\mathbf{x}$ with each orthonormal basis vector. This is a fundamental concept in projection and approximation, and it’s directly addressed in **CO3** when we talk about applying orthonormalization. Libraries like NumPy in Python use highly optimized versions of these calculations.

**Example 7: Expressing a vector using an orthonormal basis**

Let $\mathbf{x} = [3, 4]$ and our orthonormal set be $\{\mathbf{u}_1, \mathbf{u}_2\} = \{[\frac{1}{\sqrt{5}}, \frac{2}{\sqrt{5}}], [-\frac{2}{\sqrt{5}}, \frac{1}{\sqrt{5}}]\}$.
We want to find $c_1, c_2$ such that $\mathbf{x} = c_1\mathbf{u}_1 + c_2\mathbf{u}_2$.

$c_1 = \langle \mathbf{x}, \mathbf{u}_1 \rangle = (3)(\frac{1}{\sqrt{5}}) + (4)(\frac{2}{\sqrt{5}}) = \frac{3+8}{\sqrt{5}} = \frac{11}{\sqrt{5}}$
$c_2 = \langle \mathbf{x}, \mathbf{u}_2 \rangle = (3)(-\frac{2}{\sqrt{5}}) + (4)(\frac{1}{\sqrt{5}}) = \frac{-6+4}{\sqrt{5}} = -\frac{2}{\sqrt{5}}$

So, $\mathbf{x} = \frac{11}{\sqrt{5}}\mathbf{u}_1 - \frac{2}{\sqrt{5}}\mathbf{u}_2$.
Let's check:
$\frac{11}{\sqrt{5}}[\frac{1}{\sqrt{5}}, \frac{2}{\sqrt{5}}] - \frac{2}{\sqrt{5}}[-\frac{2}{\sqrt{5}}, \frac{1}{\sqrt{5}}] = [\frac{11}{5}, \frac{22}{5}] - [-\frac{4}{5}, \frac{2}{5}] = [\frac{11}{5} - (-\frac{4}{5}), \frac{22}{5} - \frac{2}{5}] = [\frac{15}{5}, \frac{20}{5}] = [3, 4] = \mathbf{x}$.
It works perfectly!

**Key takeaway for exams:** When you see questions about representing vectors or finding coefficients with respect to a basis, *always* check if the basis is orthonormal. If it is, your life becomes much simpler! This is a common simplification in problems.

#### Connecting to Course Outcomes:

*   **CO3:** Orthonormal sets are crucial for orthonormalization processes (like the Gram-Schmidt process, which we'll touch upon in later modules) and for solving least squares problems. The simple projection formula $c_i = \langle \mathbf{x}, \mathbf{u}_i \rangle$ is a direct application.
*   **CO1, CO2:** Having an orthonormal basis simplifies many matrix operations and vector space concepts. For instance, if you can diagonalize a matrix using an orthonormal basis of eigenvectors, it's a very clean result.

---

### 5. Why is this important for Information Science?

You might be thinking, "Okay, perpendicular vectors are nice, but how does this help me analyze data or build models?" The answer is: immensely!

*   **Data Representation and Dimensionality Reduction:** In high-dimensional data, finding orthogonal or orthonormal directions that capture the most variance (like in Principal Component Analysis - PCA) is key. These directions form an orthonormal basis, allowing us to represent data efficiently in a lower-dimensional space. Think of it as finding the most important "angles" and "lengths" to describe your data.
*   **Signal Processing:** As we saw with functions, Fourier series decompose signals into orthogonal functions (like sines and cosines). This allows us to analyze frequencies within a signal.
*   **Machine Learning Algorithms:** Many algorithms, from Support Vector Machines (SVMs) to deep learning architectures, rely on finding optimal hyperplanes or feature spaces. Orthogonality and orthonormal bases are implicitly or explicitly used to achieve this separation or representation. For instance, the orthogonality of basis functions simplifies the training process.
*   **Error Minimization:** In least squares problems (addressed in CO3), we often seek an approximation that is "closest" to the true solution. This approximation is often found by projecting the true solution onto a subspace, and orthonormal bases make this projection calculation straightforward.
*   **Linear Transformations:** When a linear transformation is represented by a matrix, if that matrix has orthonormal columns (forming an orthonormal basis for its column space), it preserves lengths and angles. These are called orthogonal matrices, and they are very special and useful in computations.

**In essence, orthonormal bases provide a clean, efficient, and robust framework for many data-driven tasks.** They simplify calculations and make theoretical properties more apparent.

---

### Quick Recap for Exams:

*   **Orthogonal Vectors:** $\langle \mathbf{u}, \mathbf{v} \rangle = 0$. Think "perpendicular" in a generalized sense.
*   **Orthogonal Set:** All pairs of distinct vectors have an inner product of zero. $\{\mathbf{v}_1, \dots, \mathbf{v}_k\}$ means $\langle \mathbf{v}_i, \mathbf{v}_j \rangle = 0$ for $i \neq j$.
*   **Key Property:** Non-zero orthogonal sets are linearly independent.
*   **Orthonormal Set:** Orthogonal *and* each vector has a length of 1. $\{\mathbf{u}_1, \dots, \mathbf{u}_k\}$ means $\langle \mathbf{u}_i, \mathbf{u}_j \rangle = \delta_{ij}$.
*   **Simple Coefficient Calculation:** If $\{\mathbf{u}_1, \dots, \mathbf{u}_k\}$ is orthonormal, then for $\mathbf{x} = c_1\mathbf{u}_1 + \dots + c_k\mathbf{u}_k$, the coefficients are $c_i = \langle \mathbf{x}, \mathbf{u}_i \rangle$.

---

### Sample Questions and Answers:

**Question 1 (Conceptual):**
Explain why an orthogonal set of non-zero vectors is always linearly independent.

**Answer:**
An orthogonal set of non-zero vectors $\{\mathbf{v}_1, \mathbf{v}_2, \dots, \mathbf{v}_k\}$ is linearly independent because if we assume a linear combination equals the zero vector, $c_1\mathbf{v}_1 + c_2\mathbf{v}_2 + \dots + c_k\mathbf{v}_k = \mathbf{0}$, then by taking the inner product with any $\mathbf{v}_i$ from the set, all terms except $c_i\langle \mathbf{v}_i, \mathbf{v}_i \rangle$ vanish due to orthogonality ($\langle \mathbf{v}_i, \mathbf{v}_j \rangle = 0$ for $i \neq j$). This leaves us with $c_i\langle \mathbf{v}_i, \mathbf{v}_i \rangle = 0$. Since $\mathbf{v}_i$ is non-zero, $\langle \mathbf{v}_i, \mathbf{v}_i \rangle = \|\mathbf{v}_i\|^2 > 0$. Thus, $c_i$ must be 0. This holds for all $i$, proving all coefficients are zero, which is the definition of linear independence.

**Question 2 (Application/Exam Style):**
Consider the vectors $\mathbf{v}_1 = [1, 1, 0]$ and $\mathbf{v}_2 = [1, -1, 2]$ in $\mathbb{R}^3$.
(a) Are $\mathbf{v}_1$ and $\mathbf{v}_2$ orthogonal?
(b) Find unit vectors $\mathbf{u}_1$ and $\mathbf{u}_2$ that are in the directions of $\mathbf{v}_1$ and $\mathbf{v}_2$, respectively.
(c) Is the set $\{\mathbf{u}_1, \mathbf{u}_2\}$ an orthonormal set? Justify your answer.

**Answer:**
We use the standard dot product as the inner product in $\mathbb{R}^3$.

(a) To check for orthogonality, we compute the dot product:
$\langle \mathbf{v}_1, \mathbf{v}_2 \rangle = (1)(1) + (1)(-1) + (0)(2) = 1 - 1 + 0 = 0$.
Since the dot product is 0, $\mathbf{v}_1$ and $\mathbf{v}_2$ are orthogonal.

(b) To find unit vectors, we normalize $\mathbf{v}_1$ and $\mathbf{v}_2$ by dividing them by their respective lengths.
First, find the lengths:
$\|\mathbf{v}_1\| = \sqrt{1^2 + 1^2 + 0^2} = \sqrt{1+1+0} = \sqrt{2}$.
$\|\mathbf{v}_2\| = \sqrt{1^2 + (-1)^2 + 2^2} = \sqrt{1+1+4} = \sqrt{6}$.

Now, normalize:
$\mathbf{u}_1 = \frac{\mathbf{v}_1}{\|\mathbf{v}_1\|} = \frac{1}{\sqrt{2}}[1, 1, 0] = [\frac{1}{\sqrt{2}}, \frac{1}{\sqrt{2}}, 0]$.
$\mathbf{u}_2 = \frac{\mathbf{v}_2}{\|\mathbf{v}_2\|} = \frac{1}{\sqrt{6}}[1, -1, 2] = [\frac{1}{\sqrt{6}}, -\frac{1}{\sqrt{6}}, \frac{2}{\sqrt{6}}]$.

(c) For $\{\mathbf{u}_1, \mathbf{u}_2\}$ to be an orthonormal set, it must satisfy two conditions:
1.  It must be orthogonal: $\langle \mathbf{u}_1, \mathbf{u}_2 \rangle = 0$.
2.  Each vector must have a length of 1: $\|\mathbf{u}_1\| = 1$ and $\|\mathbf{u}_2\| = 1$.

From part (b), by construction, $\|\mathbf{u}_1\| = \frac{\|\mathbf{v}_1\|}{\|\mathbf{v}_1\|} = 1$ and $\|\mathbf{u}_2\| = \frac{\|\mathbf{v}_2\|}{\|\mathbf{v}_2\|} = 1$. So the unit length condition is met.

Now let's check orthogonality for $\mathbf{u}_1$ and $\mathbf{u}_2$:
$\langle \mathbf{u}_1, \mathbf{u}_2 \rangle = (\frac{1}{\sqrt{2}})(\frac{1}{\sqrt{6}}) + (\frac{1}{\sqrt{2}})(-\frac{1}{\sqrt{6}}) + (0)(\frac{2}{\sqrt{6}})$
$\langle \mathbf{u}_1, \mathbf{u}_2 \rangle = \frac{1}{\sqrt{12}} - \frac{1}{\sqrt{12}} + 0 = 0$.

Since both conditions (orthogonality and unit length) are met, the set $\{\mathbf{u}_1, \mathbf{u}_2\}$ is an orthonormal set.

---

This covers our introduction to orthogonal and orthonormal sets. Remember, these concepts are not just abstract mathematical ideas; they are the building blocks for many powerful tools in information science. Keep these definitions and properties clear in your mind, and you’ll find many subsequent topics fall into place much more easily!
