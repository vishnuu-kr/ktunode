---
title: "Rank and Nullity of a Linear Transformation"
subject: "MATHEMATICS FOR INFORMATION SCIENCE – 2"
module: "Module 4: Linear Transformations"
branch: "Computer Science and Engineering"
semester: 2
topicId: "68b45b6e58474a0b135b5d31"
status: "completed"
scrapedAt: "2026-05-20T16:34:56.584Z"
---
Absolutely! Let's dive into the fascinating world of Rank and Nullity of Linear Transformations. This is a crucial topic, directly linking to Course Outcome 4 (CO4) – understanding and applying the properties of linear transformations. Think of it as understanding the "efficiency" or "output capacity" of these transformations.

---

## Module 4: Linear Transformations – Rank and Nullity

Welcome back, everyone! In our previous sessions, we explored what linear transformations are – those special functions that map vectors from one vector space to another while preserving the structure of vector addition and scalar multiplication. Today, we're going to get a deeper understanding of *how* these transformations work by looking at two key concepts: their **Rank** and **Nullity**.

Understanding rank and nullity will help us answer some fundamental questions about linear transformations. For instance, how much "information" does the transformation preserve? Does it "collapse" a lot of vectors onto a single point? Or does it spread things out? These questions are vital in many areas of Information Science, from data compression to machine learning algorithms.

### 1. The Heart of the Matter: Image and Kernel of a Linear Transformation

Before we talk about rank and nullity, we need to be crystal clear about two fundamental concepts associated with any linear transformation $T: V \to W$:

*   **The Image (or Range) of $T$**: This is the set of all possible output vectors in the codomain $W$ that can be produced by applying the transformation $T$ to vectors in the domain $V$. Think of it as the "output space" or the "reach" of the transformation. We denote the image as $\text{Im}(T)$ or $R(T)$.
    Formally, $\text{Im}(T) = \{T(\mathbf{v}) \mid \mathbf{v} \in V\}$.

*   **The Kernel (or Null Space) of $T$**: This is the set of all vectors in the domain $V$ that the transformation $T$ maps to the zero vector in the codomain $W$. These are the vectors that get "crushed" or "annihilated" by the transformation. We denote the kernel as $\text{Ker}(T)$ or $N(T)$.
    Formally, $\text{Ker}(T) = \{\mathbf{v} \in V \mid T(\mathbf{v}) = \mathbf{0}_W\}$.

**Why are these important?** Because the image and kernel are not just arbitrary sets of vectors; they are **subspaces** of $W$ and $V$, respectively! This is a direct consequence of the linearity of $T$.

Let's quickly recall what it means to be a subspace. A non-empty subset $S$ of a vector space $X$ is a subspace if it's closed under vector addition and scalar multiplication. In simpler terms, if you take any two vectors in $S$ and add them, the result stays in $S$. And if you take any vector in $S$ and multiply it by a scalar, the result also stays in $S$. This property is inherited from the vector space $V$ and $W$ themselves because $T$ is linear.

**Think of it this way:** Imagine a factory (the vector space $V$) producing different goods (vectors). The transformation $T$ is a particular assembly line process. The *image* of $T$ is the collection of all finished products the assembly line can produce. The *kernel* of $T$ is the set of all raw materials that, when processed by this assembly line, turn into scrap metal (the zero vector in $W$). The fact that both are subspaces means that if the assembly line can produce product A and product B, it can also produce A+B (a combination of products) and $k \cdot$ A (a scaled version of product A). Similarly, if raw materials $\mathbf{v}_1$ and $\mathbf{v}_2$ both result in scrap, then any combination $c_1\mathbf{v}_1 + c_2\mathbf{v}_2$ will also result in scrap. This subspace property is key to everything that follows!

**Connection to Course Outcomes:** This directly relates to **CO2**, where we learn to understand vector spaces and subspaces and apply their properties. Here, we see that the image and kernel are concrete examples of subspaces, and their properties are fundamental to understanding transformations.

### 2. Quantifying the "Output" and "Input Annihilation": Rank and Nullity

Now that we have the image and kernel in hand, we can define their "sizes." In finite-dimensional vector spaces, the "size" of a subspace is its **dimension**.

*   **The Rank of $T$**: The rank of a linear transformation $T$, denoted as $\text{rank}(T)$, is the dimension of its image (or range).
    $$ \text{rank}(T) = \dim(\text{Im}(T)) $$
    The rank tells us the "dimensionality of the output space." It's the number of linearly independent output vectors that $T$ can produce. It measures how much "spread" or "information" the transformation retains and maps into the codomain.

*   **The Nullity of $T$**: The nullity of a linear transformation $T$, denoted as $\text{nullity}(T)$ or $\text{dim}(\text{Ker}(T))$, is the dimension of its kernel (or null space).
    $$ \text{nullity}(T) = \dim(\text{Ker}(T)) $$
    The nullity tells us the "dimensionality of the input space that gets mapped to zero." It measures how much "redundancy" or "information loss" occurs due to the transformation.

**Analogy Time:** Imagine a sculptor (the transformation $T$) working with a block of clay (the vector space $V$) to create a statue (vectors in $W$).
*   The **rank** is like the number of distinct, independent features or dimensions of the final statue that are clearly visible. A higher rank means a more detailed and "spread out" statue.
*   The **nullity** is like the amount of clay from the original block that the sculptor discards or mashes into a single ball of scrap (the zero vector). A higher nullity means more of the original material is essentially "lost" or compressed.

**Textbook Connection:** Both Kreyszig and Larson provide formal definitions of rank and nullity based on the dimensions of the image and kernel. This is a core concept in their discussions of linear transformations.

### 3. The Fundamental Relationship: The Rank-Nullity Theorem

This is arguably the most important theorem we'll encounter today, directly impacting **CO4**. It establishes a beautiful and powerful connection between the rank and nullity of a linear transformation.

**The Rank-Nullity Theorem:** For any linear transformation $T: V \to W$, where $V$ is a finite-dimensional vector space, the dimension of the domain $V$ is equal to the sum of the dimension of the image (rank) and the dimension of the kernel (nullity).
$$ \dim(V) = \text{rank}(T) + \text{nullity}(T) $$

**Why is this so significant?** It tells us that if we know any two of these quantities, we can immediately determine the third. It's like a conservation law for dimensions in the context of linear transformations.

Let's try to grasp the intuition behind this. The entire domain $V$ is being mapped to somewhere in $W$. Some vectors in $V$ get mapped to the zero vector in $W$ (the kernel), and others get mapped to non-zero vectors in $W$ (the image). The kernel and the image, in a sense, "partition" the domain. The rank-nullity theorem quantifies this partitioning in terms of dimensions.

**Proving it (Intuitive Sketch):** While a formal proof involves constructing a basis for the kernel and extending it to a basis for $V$, the core idea is that if we have a basis for the kernel, say $\{\mathbf{k}_1, \dots, \mathbf{k}_m\}$, these are $m$ linearly independent vectors that get mapped to zero. The remaining basis vectors for $V$ (let's call them $\{\mathbf{v}_1, \dots, \mathbf{v}_p\}$) must then be mapped to linearly independent, non-zero vectors in the image, forming a basis for $\text{Im}(T)$. The total number of basis vectors for $V$ is $m+p$, which is precisely $\text{nullity}(T) + \text{rank}(T)$.

**Example to Illustrate:**
Let $T: \mathbb{R}^3 \to \mathbb{R}^2$ be defined by $T(x, y, z) = (x+y, y+z)$.
Here, $V = \mathbb{R}^3$ and $W = \mathbb{R}^2$. The dimension of $V$ is $\dim(\mathbb{R}^3) = 3$.

1.  **Find the Kernel (Null Space):**
    We need to find $(x, y, z)$ such that $T(x, y, z) = (0, 0)$.
    This means:
    $x+y = 0 \implies x = -y$
    $y+z = 0 \implies z = -y$
    So, any vector in the kernel is of the form $(-y, y, -y) = y(-1, 1, -1)$.
    The kernel is spanned by the single vector $(-1, 1, -1)$. Thus, $\text{Ker}(T) = \text{span}(\{(-1, 1, -1)\})$.
    The dimension of the kernel is $\text{nullity}(T) = 1$.

2.  **Find the Image (Range):**
    The image is the set of all possible output vectors $(x+y, y+z)$.
    Let's see what happens when we apply $T$ to the standard basis vectors of $\mathbb{R}^3$:
    $T(1, 0, 0) = (1, 0)$
    $T(0, 1, 0) = (1, 1)$
    $T(0, 0, 1) = (0, 1)$
    The image is spanned by these vectors: $\text{Im}(T) = \text{span}(\{(1, 0), (1, 1), (0, 1)\})$.
    However, we need the dimension of the image, which means finding a basis. Notice that $(1, 1) = (1, 0) + (0, 1)$. So, $(1, 1)$ is linearly dependent on $(1, 0)$ and $(0, 1)$.
    A basis for $\text{Im}(T)$ is $\{(1, 0), (0, 1)\}$.
    The dimension of the image is $\text{rank}(T) = 2$.

3.  **Verify the Rank-Nullity Theorem:**
    $\dim(V) = 3$
    $\text{rank}(T) + \text{nullity}(T) = 2 + 1 = 3$.
    The theorem holds! $\dim(\mathbb{R}^3) = \text{rank}(T) + \text{nullity}(T)$.

**Practical Example: Data Compression (PCA Connection)**
Imagine you have a dataset of high-dimensional vectors (e.g., images with many pixels). A linear transformation, like Principal Component Analysis (PCA), can be used to reduce the dimensionality.
*   The original space is $V$.
*   The transformation $T$ (e.g., projection onto principal components) maps $V$ to a lower-dimensional space $W$.
*   The **rank** of this transformation tells you the dimensionality of the "essential information" that is preserved.
*   The **nullity** tells you how many dimensions from the original data are being "squashed" into nothing (the zero vector in the lower-dimensional space).
The rank-nullity theorem here shows that the total "information capacity" (dimension of $V$) is accounted for by the information preserved (rank) and the information lost (nullity). If you want to preserve more information (increase rank), you might have to accept less information loss (decrease nullity, which is usually what we want to minimize).

**Connection to Course Outcomes:** This theorem is the cornerstone of **CO4**, as it directly links the properties of linear transformations (rank and nullity) to the structure of the vector spaces involved. It's also relevant to **CO1** when considering how transformations affect systems of linear equations, as we'll see next.

### 4. Rank, Nullity, and Matrices: A Practical Approach

In practice, we often represent linear transformations using matrices. If $T: V \to W$ is a linear transformation, and $V$ and $W$ are finite-dimensional vector spaces with chosen bases, then $T$ can be represented by a unique matrix $A$. If $\dim(V) = n$ and $\dim(W) = m$, then $A$ will be an $m \times n$ matrix.

The key insight here is that the rank and nullity of the linear transformation are directly related to the properties of its matrix representation.

*   **Rank of a Linear Transformation vs. Rank of its Matrix:**
    The **rank of a linear transformation** $T$ is equal to the **rank of its matrix representation** $A$. The rank of a matrix $A$ is the dimension of its column space (or equivalently, its row space). The column space of $A$ is precisely the image of the linear transformation $T$ when $V = \mathbb{R}^n$ and $W = \mathbb{R}^m$.
    $$ \text{rank}(T) = \text{rank}(A) = \dim(\text{Im}(T)) = \dim(\text{Col}(A)) $$
    How do we find the rank of a matrix? By reducing it to row echelon form (or reduced row echelon form) and counting the number of non-zero rows (or equivalently, the number of pivot columns).

*   **Nullity of a Linear Transformation vs. Null Space of its Matrix:**
    The **nullity of a linear transformation** $T$ is equal to the dimension of the null space of its matrix representation $A$. The null space of $A$ is the set of all vectors $\mathbf{x}$ such that $A\mathbf{x} = \mathbf{0}$. This is exactly the kernel of the transformation $T$.
    $$ \text{nullity}(T) = \text{nullity}(A) = \dim(\text{Ker}(T)) = \dim(\text{Null}(A)) $$
    How do we find the nullity of a matrix? We solve the homogeneous system $A\mathbf{x} = \mathbf{0}$. The set of solutions forms the null space, and its dimension is the nullity. If the reduced row echelon form has $n$ columns and $r$ pivot columns, then there are $n-r$ free variables, and the nullity is $n-r$.

**The Rank-Nullity Theorem in Matrix Terms:** For an $m \times n$ matrix $A$:
$$ n = \text{rank}(A) + \text{nullity}(A) $$
Here, $n$ is the number of columns in $A$, which corresponds to the dimension of the domain $\mathbb{R}^n$.

**Example: Using Matrices**
Let's revisit our previous example: $T: \mathbb{R}^3 \to \mathbb{R}^2$ defined by $T(x, y, z) = (x+y, y+z)$.
The standard matrix representation for $T$ is:
$$ A = \begin{pmatrix} 1 & 1 & 0 \\ 0 & 1 & 1 \end{pmatrix} $$
Here, $n=3$ (dimension of the domain $\mathbb{R}^3$) and $m=2$ (dimension of the codomain $\mathbb{R}^2$).

1.  **Find Rank(A):**
    The matrix $A$ is already in row echelon form. It has two non-zero rows.
    $$ \text{rank}(A) = 2 $$
    This matches our previous $\text{rank}(T)$.

2.  **Find Nullity(A):**
    We need to solve $A\mathbf{x} = \mathbf{0}$:
    $$ \begin{pmatrix} 1 & 1 & 0 \\ 0 & 1 & 1 \end{pmatrix} \begin{pmatrix} x \\ y \\ z \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix} $$
    This gives the equations:
    $x+y = 0$
    $y+z = 0$
    From the second equation, $z = -y$.
    From the first equation, $x = -y$.
    The solution vector is $\begin{pmatrix} -y \\ y \\ -y \end{pmatrix} = y \begin{pmatrix} -1 \\ 1 \\ -1 \end{pmatrix}$.
    The null space is spanned by $\begin{pmatrix} -1 \\ 1 \\ -1 \end{pmatrix}$.
    $$ \text{nullity}(A) = 1 $$
    This matches our previous $\text{nullity}(T)$.

3.  **Verify Rank-Nullity Theorem:**
    Number of columns of $A$ is $n=3$.
    $\text{rank}(A) + \text{nullity}(A) = 2 + 1 = 3$.
    $n = \text{rank}(A) + \text{nullity}(A)$ holds.

**Connection to Course Outcomes:** This section is crucial for **CO4** as it shows how to practically compute rank and nullity using matrix operations, a skill often tested in exams. It also reinforces **CO1** by showing how the properties of the transformation matrix relate to solving linear systems.

### 5. Rank, Nullity, and Solving Systems of Linear Equations

The concepts of rank and nullity provide profound insights into the nature of solutions to systems of linear equations. Consider a system $A\mathbf{x} = \mathbf{b}$, where $A$ is an $m \times n$ matrix.

*   **Existence of Solutions:** A system $A\mathbf{x} = \mathbf{b}$ has a solution if and only if $\mathbf{b}$ is in the column space of $A$. This means $\text{Im}(T)$ must contain $\mathbf{b}$ (if we think of $T$ as the transformation defined by $A$). This is equivalent to saying that the rank of the augmented matrix $[A|\mathbf{b}]$ must be equal to the rank of the matrix $A$.
    $$ \text{rank}(A) = \text{rank}([A|\mathbf{b}]) \iff \text{A solution exists} $$

*   **Uniqueness of Solutions:** If a solution exists, it is unique if and only if the null space of $A$ contains only the zero vector. This means the nullity of $A$ must be zero.
    $$ \text{nullity}(A) = 0 \iff \text{Solution is unique (if it exists)} $$

**Combining these with the Rank-Nullity Theorem:**
Recall that for an $m \times n$ matrix $A$, $n = \text{rank}(A) + \text{nullity}(A)$.

*   **Case 1: Exactly One Solution**
    This happens when $\text{rank}(A) = \text{rank}([A|\mathbf{b}])$ (a solution exists) AND $\text{nullity}(A) = 0$ (the solution is unique).
    If $\text{nullity}(A)=0$, then by the Rank-Nullity Theorem, $\text{rank}(A) = n$.
    So, for exactly one solution, we need:
    $\text{rank}(A) = n$ and $\text{rank}([A|\mathbf{b}]) = n$.
    This implies $A$ must be a square matrix ($m=n$) and invertible.

*   **Case 2: Infinitely Many Solutions**
    This happens when $\text{rank}(A) = \text{rank}([A|\mathbf{b}])$ (a solution exists) AND $\text{nullity}(A) > 0$ (the solution is not unique).
    If $\text{nullity}(A) > 0$, then by the Rank-Nullity Theorem, $\text{rank}(A) < n$.
    So, for infinitely many solutions, we need:
    $\text{rank}(A) = \text{rank}([A|\mathbf{b}])$ AND $\text{rank}(A) < n$.

*   **Case 3: No Solution**
    This happens when $\text{rank}(A) < \text{rank}([A|\mathbf{b}])$.

**Example: System of Equations**
Consider the system:
$x + 2y + z = 5$
$2x + 4y + 2z = 10$
$3x + 6y + 3z = 15$

The augmented matrix is:
$$ [A|\mathbf{b}] = \begin{pmatrix} 1 & 2 & 1 & | & 5 \\ 2 & 4 & 2 & | & 10 \\ 3 & 6 & 3 & | & 15 \end{pmatrix} $$
The coefficient matrix $A$ is:
$$ A = \begin{pmatrix} 1 & 2 & 1 \\ 2 & 4 & 2 \\ 3 & 6 & 3 \end{pmatrix} $$
The domain is $\mathbb{R}^3$, so $n=3$.

Let's row reduce the augmented matrix:
$R_2 \leftarrow R_2 - 2R_1$
$R_3 \leftarrow R_3 - 3R_1$
$$ \begin{pmatrix} 1 & 2 & 1 & | & 5 \\ 0 & 0 & 0 & | & 0 \\ 0 & 0 & 0 & | & 0 \end{pmatrix} $$
Now, let's look at the rank of $A$ and $[A|\mathbf{b}]$:
*   The row-reduced form of $A$ (ignoring the last column) is $\begin{pmatrix} 1 & 2 & 1 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix}$.
    $\text{rank}(A) = 1$ (one non-zero row).
*   The row-reduced augmented matrix is $\begin{pmatrix} 1 & 2 & 1 & | & 5 \\ 0 & 0 & 0 & | & 0 \\ 0 & 0 & 0 & | & 0 \end{pmatrix}$.
    $\text{rank}([A|\mathbf{b}]) = 1$ (one non-zero row).

Since $\text{rank}(A) = \text{rank}([A|\mathbf{b}]) = 1$, a solution exists.
Now, let's find the nullity of $A$. The number of columns is $n=3$.
By the Rank-Nullity Theorem for matrices:
$n = \text{rank}(A) + \text{nullity}(A)$
$3 = 1 + \text{nullity}(A)$
$\text{nullity}(A) = 2$.

Since $\text{nullity}(A) = 2 > 0$, there are infinitely many solutions.
Let's find them:
From the reduced augmented matrix, we have $x + 2y + z = 5$.
The free variables are $y$ and $z$. Let $y = s$ and $z = t$.
Then $x = 5 - 2y - z = 5 - 2s - t$.
The solution set is:
$\begin{pmatrix} x \\ y \\ z \end{pmatrix} = \begin{pmatrix} 5 - 2s - t \\ s \\ t \end{pmatrix} = \begin{pmatrix} 5 \\ 0 \\ 0 \end{pmatrix} + s \begin{pmatrix} -2 \\ 1 \\ 0 \end{pmatrix} + t \begin{pmatrix} -1 \\ 0 \\ 1 \end{pmatrix}$.
This shows infinitely many solutions, corresponding to the nullity of 2.

**Exam Tip:** When asked about the number of solutions to $A\mathbf{x} = \mathbf{b}$, always focus on comparing $\text{rank}(A)$ and $\text{rank}([A|\mathbf{b}])$, and then use $\text{nullity}(A)$ (derived from the rank-nullity theorem) to distinguish between zero, one, or infinite solutions.

**Connection to Course Outcomes:** This section directly ties into **CO1** (solving systems of linear equations) by providing a theoretical framework using rank and nullity. It also solidifies the understanding of **CO4** by linking matrix properties to the behavior of transformations.

### 6. Key Takeaways and Summary

Let's recap the essential points about Rank and Nullity of Linear Transformations:

*   **Image (Range):** The set of all possible outputs. It's a subspace of the codomain.
*   **Kernel (Null Space):** The set of all inputs that map to the zero vector. It's a subspace of the domain.
*   **Rank:** The dimension of the Image ($\dim(\text{Im}(T))$). Measures the "output dimension."
*   **Nullity:** The dimension of the Kernel ($\dim(\text{Ker}(T))$). Measures the "dimension of input mapped to zero."
*   **Rank-Nullity Theorem:** For a linear transformation $T: V \to W$ where $V$ is finite-dimensional, $\dim(V) = \text{rank}(T) + \text{nullity}(T)$. This is a fundamental relationship.
*   **Matrix Connection:** The rank and nullity of a linear transformation $T$ are equal to the rank and nullity of its matrix representation $A$. For an $m \times n$ matrix $A$, $n = \text{rank}(A) + \text{nullity}(A)$.
*   **Solving Systems $A\mathbf{x} = \mathbf{b}$:**
    *   No solution if $\text{rank}(A) < \text{rank}([A|\mathbf{b}])$.
    *   Exactly one solution if $\text{rank}(A) = \text{rank}([A|\mathbf{b}]) = n$ (i.e., $\text{nullity}(A)=0$).
    *   Infinitely many solutions if $\text{rank}(A) = \text{rank}([A|\mathbf{b}]) < n$ (i.e., $\text{nullity}(A)>0$).

**Remember this:** The Rank-Nullity Theorem is your best friend when dealing with dimensions and understanding the behavior of linear transformations. For matrices, always reduce to row echelon form to find the rank (number of non-zero rows) and use the rank-nullity theorem to find the nullity (number of columns - rank).

---

### Sample Questions and Answers

**Conceptual Questions:**

1.  **Question:** What does the nullity of a linear transformation tell us about the input vectors?
    **Answer:** The nullity of a linear transformation $T$ tells us the dimension of the kernel (or null space) of $T$. The kernel is the set of all vectors in the domain that are mapped to the zero vector in the codomain. Therefore, the nullity quantifies the "amount" of input information that gets "squashed" or "annihilated" by the transformation. A nullity of $k$ means there are $k$ linearly independent vectors in the domain that all map to the zero vector.

2.  **Question:** State the Rank-Nullity Theorem and explain its significance.
    **Answer:** The Rank-Nullity Theorem states that for a linear transformation $T: V \to W$, where $V$ is a finite-dimensional vector space, the dimension of the domain $V$ is equal to the sum of the dimension of the image (rank) and the dimension of the kernel (nullity):
    $$ \dim(V) = \text{rank}(T) + \text{nullity}(T) $$
    Its significance lies in providing a fundamental relationship between the input space, the output space, and the information lost by the transformation. It implies a trade-off: if a transformation preserves more dimensions in its output (higher rank), it must collapse more dimensions in its input to zero (higher nullity), and vice-versa.

**Exam-Oriented Questions:**

3.  **Question:** Let $T: \mathbb{R}^4 \to \mathbb{R}^3$ be a linear transformation with the matrix representation $A = \begin{pmatrix} 1 & 2 & 0 & -1 \\ 2 & 4 & 1 & 0 \\ 0 & 0 & 1 & 1 \end{pmatrix}$. Find the rank and nullity of $T$.
    **Answer:**
    The domain is $\mathbb{R}^4$, so $n=4$. The matrix $A$ is $3 \times 4$.
    To find the rank, we row reduce $A$:
    $R_2 \leftarrow R_2 - 2R_1$:
    $$ \begin{pmatrix} 1 & 2 & 0 & -1 \\ 0 & 0 & 1 & 2 \\ 0 & 0 & 1 & 1 \end{pmatrix} $$
    $R_3 \leftarrow R_3 - R_2$:
    $$ \begin{pmatrix} 1 & 2 & 0 & -1 \\ 0 & 0 & 1 & 2 \\ 0 & 0 & 0 & -1 \end{pmatrix} $$
    $R_3 \leftarrow -R_3$:
    $$ \begin{pmatrix} 1 & 2 & 0 & -1 \\ 0 & 0 & 1 & 2 \\ 0 & 0 & 0 & 1 \end{pmatrix} $$
    The matrix is now in row echelon form. It has 3 non-zero rows.
    So, $\text{rank}(A) = 3$.
    Since $\text{rank}(T) = \text{rank}(A)$, we have $\text{rank}(T) = 3$.

    Now, using the Rank-Nullity Theorem for matrices:
    $n = \text{rank}(A) + \text{nullity}(A)$
    $4 = 3 + \text{nullity}(A)$
    $\text{nullity}(A) = 4 - 3 = 1$.
    Since $\text{nullity}(T) = \text{nullity}(A)$, we have $\text{nullity}(T) = 1$.

    Therefore, the rank of $T$ is 3, and the nullity of $T$ is 1.

4.  **Question:** For the system of linear equations $A\mathbf{x} = \mathbf{b}$, determine if there is no solution, exactly one solution, or infinitely many solutions. Justify your answer using ranks.
    System:
    $x + y + z = 1$
    $2x + 2y + 2z = 2$
    $3x + y + 2z = 3$

    **Answer:**
    The augmented matrix $[A|\mathbf{b}]$ is:
    $$ [A|\mathbf{b}] = \begin{pmatrix} 1 & 1 & 1 & | & 1 \\ 2 & 2 & 2 & | & 2 \\ 3 & 1 & 2 & | & 3 \end{pmatrix} $$
    The coefficient matrix $A$ is $3 \times 3$, so $n=3$.

    Row reduce the augmented matrix:
    $R_2 \leftarrow R_2 - 2R_1$:
    $$ \begin{pmatrix} 1 & 1 & 1 & | & 1 \\ 0 & 0 & 0 & | & 0 \\ 3 & 1 & 2 & | & 3 \end{pmatrix} $$
    $R_3 \leftarrow R_3 - 3R_1$:
    $$ \begin{pmatrix} 1 & 1 & 1 & | & 1 \\ 0 & 0 & 0 & | & 0 \\ 0 & -2 & -1 & | & 0 \end{pmatrix} $$
    Swap $R_2$ and $R_3$:
    $$ \begin{pmatrix} 1 & 1 & 1 & | & 1 \\ 0 & -2 & -1 & | & 0 \\ 0 & 0 & 0 & | & 0 \end{pmatrix} $$
    The coefficient matrix $A$ reduced is $\begin{pmatrix} 1 & 1 & 1 \\ 0 & -2 & -1 \\ 0 & 0 & 0 \end{pmatrix}$. It has 2 non-zero rows.
    So, $\text{rank}(A) = 2$.

    The augmented matrix $[A|\mathbf{b}]$ reduced is $\begin{pmatrix} 1 & 1 & 1 & | & 1 \\ 0 & -2 & -1 & | & 0 \\ 0 & 0 & 0 & | & 0 \end{pmatrix}$. It also has 2 non-zero rows.
    So, $\text{rank}([A|\mathbf{b}]) = 2$.

    Since $\text{rank}(A) = \text{rank}([A|\mathbf{b}]) = 2$, a solution exists.
    Now we check the nullity:
    $n = \text{rank}(A) + \text{nullity}(A)$
    $3 = 2 + \text{nullity}(A)$
    $\text{nullity}(A) = 1$.

    Since $\text{nullity}(A) = 1 > 0$, there are infinitely many solutions.

    **Justification:** $\text{rank}(A) = \text{rank}([A|\mathbf{b}])$ indicates the existence of at least one solution. $\text{nullity}(A) = 1$ means the solution is not unique, leading to infinitely many solutions.

---

That's a comprehensive look at Rank and Nullity! I hope this clarifies these important concepts and their connections to the broader topics in linear algebra and information science. Keep practicing these ideas, and don't hesitate to ask questions!
