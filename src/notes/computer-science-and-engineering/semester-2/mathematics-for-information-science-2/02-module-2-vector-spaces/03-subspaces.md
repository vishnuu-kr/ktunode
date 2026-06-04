---
title: "Subspaces"
subject: "MATHEMATICS FOR INFORMATION SCIENCE – 2"
module: "Module 2: Vector Spaces"
branch: "Computer Science and Engineering"
semester: 2
topicId: "68b45b6e58474a0b135b5d11"
status: "completed"
scrapedAt: "2026-05-20T16:34:34.437Z"
---
# MATHEMATICS FOR INFORMATION SCIENCE – 2

## Module 2: Vector Spaces

### Topic: Subspaces

**(Professor's Note:** Welcome, everyone! In our journey through the fascinating world of linear algebra, we've already established what a vector space is. Think of it as a vast universe where vectors live, interact, and follow certain rules – addition and scalar multiplication. Today, we're going to zoom in on specific, well-behaved *regions* within these universes. We're talking about **subspaces**. Understanding subspaces is absolutely crucial, not just for the theoretical beauty of it, but because they are the building blocks for so many advanced concepts we'll encounter, especially in areas like machine learning and data analysis. This topic directly ties into **CO2: Understand the concepts of vector spaces and subspaces and to apply their properties.** We'll see how these smaller structures inherit the "rules of the game" from the larger vector space they belong to. Let's dive in!)

### What Exactly is a Subspace?

Imagine you have a giant city – that's your vector space. Within this city, there are specific neighborhoods, perhaps a financial district, a residential area, or a park. These neighborhoods are *part* of the city, they use the same roads, power grid, and water supply as the rest of the city, but they have their own distinct character and boundaries. A subspace is very much like one of these well-defined neighborhoods within the larger city of a vector space.

Formally, a **subspace** of a vector space $V$ is a non-empty subset $W$ of $V$ that is itself a vector space under the same addition and scalar multiplication operations as $V$.

Now, this definition might sound a bit circular: "a subspace is a subset that is itself a vector space." But here's the clever part, and this is a key takeaway for exams: to prove that a subset $W$ of a vector space $V$ is a subspace, we don't need to re-verify *all* the vector space axioms for $W$. Why? Because $W$ inherits most of these properties directly from $V$.

Think about it: if vectors in $W$ can be added, and the result of that addition is still within $W$, that's a property inherited from $V$. Same for scalar multiplication. So, what are the *essential* checks we need to perform? This leads us to the **Subspace Test**.

### The Subspace Test: The Essential Checks

To determine if a subset $W$ of a vector space $V$ is a subspace, we only need to verify three crucial conditions. If these hold, then $W$ is indeed a subspace. Let's look at them, and I'll explain why each one is so important.

**(Professor's Note:** This is a fundamental concept you absolutely *must* remember. If you can nail the subspace test, you can identify subspaces with confidence. It’s like having a universal key to unlock whether a particular set of vectors plays by the same rules as the larger space.)

Let $V$ be a vector space and $W$ be a subset of $V$. $W$ is a subspace of $V$ if and only if:

1.  **Closure under Addition:** For any two vectors $\mathbf{u}$ and $\mathbf{v}$ in $W$, their sum $\mathbf{u} + \mathbf{v}$ must also be in $W$.
    *   **Why this is crucial:** If adding two "neighborhood" vectors takes you outside the neighborhood, then it's not a self-contained unit that follows the same rules. In our city analogy, if going from one house in the financial district to another house in the financial district somehow lands you in a park that's *not* considered part of the financial district, then the financial district isn't behaving like a proper, closed-off neighborhood.

2.  **Closure under Scalar Multiplication:** For any vector $\mathbf{u}$ in $W$ and any scalar $c$, the scalar multiple $c\mathbf{u}$ must also be in $W$.
    *   **Why this is crucial:** This means you can "stretch" or "shrink" any vector within $W$ using any scalar, and the resulting vector must still stay within $W$. If you take a vector representing a certain direction and length within your neighborhood and scale it up, and it suddenly points to a location outside your neighborhood, then your neighborhood isn't closed under scaling.

3.  **The Zero Vector:** The zero vector of $V$, denoted by $\mathbf{0}$, must be in $W$.
    *   **Why this is crucial:** This one might seem a bit subtle, but it's a direct consequence of the other two. If $W$ is non-empty (which is condition 0, implicitly stated, but good to remember!), pick any vector $\mathbf{w}$ in $W$. By condition 2 (closure under scalar multiplication), $0\mathbf{w}$ must also be in $W$. And we know that $0\mathbf{w} = \mathbf{0}$ for any vector. So, the zero vector is automatically included if $W$ is non-empty and closed under scalar multiplication. However, explicitly checking for the zero vector is often the easiest first step. If $\mathbf{0}$ isn't in $W$, you can stop right there – it's not a subspace.

**(Recall from Kreyszig, Chapter 4, Section 4.1 or Larson, Chapter 4, Section 4.1):** These are the fundamental properties that define a subspace. They ensure that the subset $W$ "behaves" like a vector space in its own right.

### Examples to Build Intuition

Let's make this concrete with examples.

**Example 1: The Trivial Subspace**

*   **Vector Space:** $V = \mathbb{R}^2$, the set of all 2D vectors.
*   **Subset:** $W = \{ \mathbf{0} \}$, the set containing only the zero vector $(0,0)$.
*   **Is it a subspace?**
    1.  **Zero Vector:** The zero vector $(0,0)$ is indeed in $W$. Check!
    2.  **Closure under Addition:** The only vector in $W$ is $\mathbf{0}$. So, $\mathbf{0} + \mathbf{0} = \mathbf{0}$. Is $\mathbf{0}$ in $W$? Yes. Check!
    3.  **Closure under Scalar Multiplication:** For any scalar $c$ and $\mathbf{0} \in W$, $c\mathbf{0} = \mathbf{0}$. Is $\mathbf{0}$ in $W$? Yes. Check!

    Therefore, $W = \{ \mathbf{0} \}$ is a subspace of $\mathbb{R}^2$. This is called the **trivial subspace**. Every vector space has at least these two subspaces: the trivial subspace and the space itself.

**Example 2: The Space Itself**

*   **Vector Space:** $V$ (any vector space).
*   **Subset:** $W = V$.
*   **Is it a subspace?** By definition, $V$ is a vector space. So, $W=V$ is always a subspace of $V$.

**Example 3: Lines Through the Origin in $\mathbb{R}^2$**

Let's consider a familiar geometric concept.

*   **Vector Space:** $V = \mathbb{R}^2$.
*   **Subset:** $W$ be the set of all vectors in $\mathbb{R}^2$ that lie on the x-axis. A vector on the x-axis can be written as $(x, 0)$, where $x$ is any real number. So, $W = \{ (x, 0) \mid x \in \mathbb{R} \}$.
*   **Is it a subspace?**
    1.  **Zero Vector:** Does $(0,0)$ belong to $W$? Yes, when $x=0$, we get $(0,0)$. Check!
    2.  **Closure under Addition:** Let $\mathbf{u} = (x_1, 0)$ and $\mathbf{v} = (x_2, 0)$ be two vectors in $W$.
        Then $\mathbf{u} + \mathbf{v} = (x_1, 0) + (x_2, 0) = (x_1 + x_2, 0)$.
        Is this resulting vector in $W$? Yes, because its second component is 0. Let $x = x_1 + x_2$. Then $\mathbf{u} + \mathbf{v} = (x, 0)$, which is of the form required for $W$. Check!
    3.  **Closure under Scalar Multiplication:** Let $\mathbf{u} = (x_1, 0)$ be in $W$ and $c$ be any scalar.
        Then $c\mathbf{u} = c(x_1, 0) = (cx_1, 0)$.
        Is this resulting vector in $W$? Yes, because its second component is 0. Let $x = cx_1$. Then $c\mathbf{u} = (x, 0)$, which is of the form required for $W$. Check!

    Since all three conditions are met, the x-axis (the set of vectors of the form $(x,0)$) is a subspace of $\mathbb{R}^2$. The same logic applies to the y-axis, $W = \{ (0, y) \mid y \in \mathbb{R} \}$. What about any line passing through the origin? Yes, any line passing through the origin in $\mathbb{R}^2$ is a subspace of $\mathbb{R}^2$. This is a crucial geometric understanding.

**(Think about this:** What if the line *didn't* pass through the origin? For example, the line $y = x + 1$? Would that be a subspace? Let's test it. The zero vector $(0,0)$ is not on the line $y = x + 1$ (since $0 \neq 0+1$). So, right away, it fails condition 3. A line not passing through the origin cannot be a subspace.)

**Example 4: $\mathbb{R}^1$ as a Subspace of $\mathbb{R}^2$**

This is a bit of a conceptual leap, but vital.

*   **Vector Space:** $V = \mathbb{R}^2$.
*   **Subset:** $W = \{ (x, 0) \mid x \in \mathbb{R} \}$. (This is the x-axis we just discussed).
*   **Is it a subspace?** Yes, we proved it in Example 3.

Now, let's relate this to the structure. The set $W$ consists of vectors that look like $(x,0)$. If we *ignore* the second component, we can see that these vectors are essentially behaving like 1-dimensional vectors, $(x)$. The set of all 1-dimensional vectors is $\mathbb{R}^1$. So, $W$ is a representation of $\mathbb{R}^1$ embedded within $\mathbb{R}^2$. This shows how $\mathbb{R}^1$ can be viewed as a subspace of $\mathbb{R}^2$.

**(This relates to CO2:** We are understanding how a smaller space ($\mathbb{R}^1$, in a sense) can be a subspace within a larger space ($\mathbb{R}^2$). This is foundational for understanding how different dimensional spaces relate.)

**Example 5: A Plane Through the Origin in $\mathbb{R}^3$**

*   **Vector Space:** $V = \mathbb{R}^3$.
*   **Subset:** $W$ be the set of all vectors in $\mathbb{R}^3$ lying on the xy-plane. These are vectors of the form $(x, y, 0)$, where $x, y \in \mathbb{R}$. So, $W = \{ (x, y, 0) \mid x, y \in \mathbb{R} \}$.
*   **Is it a subspace?**
    1.  **Zero Vector:** $(0,0,0)$ is in $W$ (when $x=0, y=0$). Check!
    2.  **Closure under Addition:** Let $\mathbf{u} = (x_1, y_1, 0)$ and $\mathbf{v} = (x_2, y_2, 0)$ be in $W$.
        $\mathbf{u} + \mathbf{v} = (x_1+x_2, y_1+y_2, 0)$. This is in $W$. Check!
    3.  **Closure under Scalar Multiplication:** Let $\mathbf{u} = (x_1, y_1, 0)$ be in $W$ and $c$ be a scalar.
        $c\mathbf{u} = (cx_1, cy_1, 0)$. This is in $W$. Check!

    So, the xy-plane is a subspace of $\mathbb{R}^3$. By similar logic, any plane passing through the origin in $\mathbb{R}^3$ is a subspace of $\mathbb{R}^3$.

**Example 6: A Set That Is NOT a Subspace**

Let's see where the test can fail.

*   **Vector Space:** $V = \mathbb{R}^2$.
*   **Subset:** $W$ be the set of all vectors in $\mathbb{R}^2$ whose first component is non-negative. $W = \{ (x, y) \mid x \geq 0, y \in \mathbb{R} \}$. (This is the right half of the plane, including the y-axis).
*   **Is it a subspace?**
    1.  **Zero Vector:** $(0,0)$ is in $W$ because $0 \geq 0$. Check!
    2.  **Closure under Addition:** Let $\mathbf{u} = (1, 0)$ and $\mathbf{v} = (2, 1)$. Both are in $W$ because their first components are non-negative.
        $\mathbf{u} + \mathbf{v} = (1+2, 0+1) = (3, 1)$. The first component is 3, which is $\geq 0$. So, $\mathbf{u}+\mathbf{v}$ is in $W$. This condition seems to hold so far. Let's pick different vectors: $\mathbf{u} = (1, 2)$ and $\mathbf{v} = (3, -4)$. Both are in $W$. $\mathbf{u}+\mathbf{v} = (4, -2)$. The first component 4 is $\geq 0$. It seems to hold.
    3.  **Closure under Scalar Multiplication:** Let $\mathbf{u} = (2, 3)$ be in $W$. This vector is in $W$ because $2 \geq 0$. Let $c = -1$.
        Then $c\mathbf{u} = -1(2, 3) = (-2, -3)$.
        Is $(-2, -3)$ in $W$? No, because its first component, -2, is not $\geq 0$.
        **Failure!** $W$ is not closed under scalar multiplication.

    Therefore, $W$ is not a subspace of $\mathbb{R}^2$.

**(Common Pitfall:** Students sometimes get lazy on scalar multiplication or addition. Always try a "worst-case" scenario for your counterexample. Here, choosing a negative scalar was key to exposing the failure.)

### Subspaces of Polynomial Spaces

Let's move beyond $\mathbb{R}^n$ to other types of vector spaces.

Consider the vector space $P_n$, the set of all polynomials of degree at most $n$. For example, $P_2$ contains polynomials like $3x^2 - 5x + 1$, $2x + 7$, $-4x^2$, etc. The "vectors" here are the polynomials.

**Example 7: Polynomials of a Specific Degree**

*   **Vector Space:** $V = P_2$ (polynomials of degree at most 2, e.g., $a_2x^2 + a_1x + a_0$).
*   **Subset:** $W$ be the set of all polynomials in $P_2$ of degree exactly 1. For example, $2x+1$, $-x+5$, $3x$.
*   **Is it a subspace?**
    1.  **Zero Vector:** The zero polynomial is $0x^2 + 0x + 0 = 0$. Does this have degree exactly 1? No, it's usually considered to have degree $-\infty$ or is undefined. Even if we consider it degree 0, it's not degree 1.
        Let's re-evaluate. The zero polynomial is indeed in $P_2$. But the definition of $W$ says *exactly* degree 1. The zero polynomial doesn't fit that.
        So, $W$ does not contain the zero vector of $V$. Failure!

    Therefore, the set of polynomials of exactly degree 1 is NOT a subspace of $P_2$.

**(Important Distinction:** Be careful with "at most" vs. "exactly." "At most" usually leads to subspaces, while "exactly" often doesn't because of the zero vector.)

**Example 8: Polynomials of Degree Less Than or Equal to $k$**

*   **Vector Space:** $V = P_n$.
*   **Subset:** $W$ be the set of all polynomials in $P_n$ of degree at most $k$, where $0 \leq k \leq n$.
    So, $W = \{ p(x) \in P_n \mid \deg(p(x)) \leq k \}$.
*   **Is it a subspace?**
    1.  **Zero Vector:** The zero polynomial has degree $-\infty$ (or is undefined), which is certainly $\leq k$. So, the zero polynomial is in $W$. Check!
    2.  **Closure under Addition:** Let $p(x)$ and $q(x)$ be in $W$. This means $\deg(p(x)) \leq k$ and $\deg(q(x)) \leq k$.
        When we add $p(x) + q(x)$, the degree of the sum is at most the maximum of the degrees of $p(x)$ and $q(x)$. So, $\deg(p(x) + q(x)) \leq \max(\deg(p(x)), \deg(q(x))) \leq k$.
        Thus, $p(x) + q(x)$ is also in $W$. Check!
    3.  **Closure under Scalar Multiplication:** Let $p(x)$ be in $W$ and $c$ be a scalar.
        Then $\deg(p(x)) \leq k$.
        When we multiply $c \cdot p(x)$ by a scalar $c \neq 0$, the degree does not change. If $c=0$, the result is the zero polynomial, which has degree $-\infty \leq k$.
        So, $\deg(c \cdot p(x)) \leq k$.
        Thus, $c \cdot p(x)$ is also in $W$. Check!

    Therefore, the set of polynomials of degree at most $k$ (where $k \leq n$) is a subspace of $P_n$.

**(Connection to CO2:** This shows a clear application of understanding subspace properties. If you're dealing with polynomial data, knowing that sets of polynomials with bounded degrees form subspaces is fundamental.)

### Span and Subspaces

A very important concept related to subspaces is the idea of a **span**. The span of a set of vectors is the set of all possible linear combinations of those vectors.

Let $S = \{ \mathbf{v}_1, \mathbf{v}_2, \ldots, \mathbf{v}_m \}$ be a set of vectors in a vector space $V$. The **span of $S$**, denoted $\text{span}(S)$, is the set of all vectors $\mathbf{w}$ that can be written as:
$\mathbf{w} = c_1\mathbf{v}_1 + c_2\mathbf{v}_2 + \ldots + c_m\mathbf{v}_m$, where $c_1, c_2, \ldots, c_m$ are scalars.

**(Key Theorem – From Larson, Chapter 4, Section 4.3 or Kreyszig, Chapter 4, Section 4.2):** The span of any set of vectors in a vector space $V$ is always a subspace of $V$.

*   **Why is this true?** Let's think about it intuitively and then see the formal proof.
    *   **Intuition:** Imagine you have a few "direction vectors" from your neighborhood. If you can only create new locations by combining these directions (scaling them and adding them), are you always going to stay within the neighborhood? Yes! Because scaling is allowed, and adding vectors that are already within the span is allowed. The span is the *smallest* subspace containing the set of vectors $S$.
    *   **Formal Proof (the "why" behind the theorem):** Let $W = \text{span}(S)$.
        1.  **Zero Vector:** Is $\mathbf{0} \in W$? Yes, because we can choose all scalars $c_i$ to be zero: $\mathbf{0} = 0\mathbf{v}_1 + \ldots + 0\mathbf{v}_m$. So, the zero vector is in the span. Check!
        2.  **Closure under Addition:** Let $\mathbf{u} \in W$ and $\mathbf{v} \in W$.
            Since $\mathbf{u} \in W$, it's a linear combination of vectors in $S$: $\mathbf{u} = a_1\mathbf{v}_1 + \ldots + a_m\mathbf{v}_m$.
            Since $\mathbf{v} \in W$, it's a linear combination of vectors in $S$: $\mathbf{v} = b_1\mathbf{v}_1 + \ldots + b_m\mathbf{v}_m$.
            Then, $\mathbf{u} + \mathbf{v} = (a_1\mathbf{v}_1 + \ldots + a_m\mathbf{v}_m) + (b_1\mathbf{v}_1 + \ldots + b_m\mathbf{v}_m)$.
            Rearranging (using associativity and commutativity of vector addition and scalar multiplication):
            $\mathbf{u} + \mathbf{v} = (a_1+b_1)\mathbf{v}_1 + \ldots + (a_m+b_m)\mathbf{v}_m$.
            This is a new linear combination of vectors in $S$ (with scalars $a_i+b_i$). So, $\mathbf{u} + \mathbf{v}$ is in $W$. Check!
        3.  **Closure under Scalar Multiplication:** Let $\mathbf{u} \in W$ and $c$ be a scalar.
            Since $\mathbf{u} \in W$, $\mathbf{u} = a_1\mathbf{v}_1 + \ldots + a_m\mathbf{v}_m$.
            Then, $c\mathbf{u} = c(a_1\mathbf{v}_1 + \ldots + a_m\mathbf{v}_m)$.
            Distributing the scalar $c$:
            $c\mathbf{u} = (ca_1)\mathbf{v}_1 + \ldots + (ca_m)\mathbf{v}_m$.
            This is also a linear combination of vectors in $S$ (with scalars $ca_i$). So, $c\mathbf{u}$ is in $W$. Check!

    Thus, $\text{span}(S)$ is indeed a subspace.

**(Application to CO2 and CO1:** The concept of span is fundamental. If we can express a vector space or a subspace as the span of a set of vectors, we've effectively "generated" that space. This is crucial for understanding bases and dimensions, which feed into solving systems of linear equations (CO1) and understanding the structure of vector spaces (CO2).)

**Example 9: Span in $\mathbb{R}^3$**

*   **Vector Space:** $V = \mathbb{R}^3$.
*   **Set of Vectors:** $S = \{ (1, 0, 0), (0, 1, 0) \}$.
*   **What is $\text{span}(S)$?** It's the set of all vectors of the form $c_1(1, 0, 0) + c_2(0, 1, 0) = (c_1, c_2, 0)$.
    This is the set of all vectors in $\mathbb{R}^3$ whose third component is zero.
    Geometrically, this is the xy-plane in $\mathbb{R}^3$.
    As we've seen, the xy-plane is a subspace of $\mathbb{R}^3$. This confirms the theorem.

**Example 10: Span of a Single Vector**

*   **Vector Space:** $V = \mathbb{R}^2$.
*   **Set of Vectors:** $S = \{ (2, 3) \}$.
*   **What is $\text{span}(S)$?** It's the set of all vectors of the form $c(2, 3) = (2c, 3c)$, where $c \in \mathbb{R}$.
    What does this look like geometrically? It's the set of all scalar multiples of the vector $(2,3)$. This is precisely the line passing through the origin and the point $(2,3)$ in $\mathbb{R}^2$.
    As we discussed earlier, a line through the origin in $\mathbb{R}^2$ is a subspace.

**(Relating to CO1:** If we consider the standard basis vectors $\mathbf{e}_1 = (1,0)$ and $\mathbf{e}_2 = (0,1)$ for $\mathbb{R}^2$, then $\text{span}(\{\mathbf{e}_1, \mathbf{e}_2\}) = \mathbb{R}^2$. This means $\mathbb{R}^2$ is generated by its standard basis. If you can represent any vector in $\mathbb{R}^2$ as a linear combination of $\mathbf{e}_1$ and $\mathbf{e}_2$, then you've "solved" the space in a sense.)

### Fundamental Subspaces of a Matrix (Connecting to CO1)

This is where our understanding of subspaces becomes critical for solving systems of linear equations and understanding matrices. For any matrix $A$ of size $m \times n$, we can associate several important subspaces:

1.  **Column Space (Col($A$))**: This is the subspace of $\mathbb{R}^m$ spanned by the columns of $A$.
    *   If $A = \begin{pmatrix} \mathbf{a}_1 & \mathbf{a}_2 & \ldots & \mathbf{a}_n \end{pmatrix}$, where $\mathbf{a}_i \in \mathbb{R}^m$, then $\text{Col}(A) = \text{span}(\{ \mathbf{a}_1, \mathbf{a}_2, \ldots, \mathbf{a}_n \})$.
    *   **Significance:** The column space tells us about the possible solutions to $A\mathbf{x} = \mathbf{b}$. A solution exists if and only if $\mathbf{b}$ is in the column space of $A$. This is a direct link to **CO1**.

2.  **Null Space (Nul($A$))**: This is the set of all vectors $\mathbf{x}$ in $\mathbb{R}^n$ such that $A\mathbf{x} = \mathbf{0}$.
    *   $Nul(A) = \{ \mathbf{x} \in \mathbb{R}^n \mid A\mathbf{x} = \mathbf{0} \}$.
    *   **Significance:** The null space is the solution space of the homogeneous system $A\mathbf{x} = \mathbf{0}$. This is the set of all vectors that get "annihilated" by the matrix $A$. Understanding the null space is key to finding general solutions to linear systems. This also strongly ties into **CO1**.
    *   **Is it a subspace?** Yes!
        1.  Zero Vector: $A\mathbf{0} = \mathbf{0}$, so $\mathbf{0} \in Nul(A)$.
        2.  Closure under Addition: If $A\mathbf{u} = \mathbf{0}$ and $A\mathbf{v} = \mathbf{0}$, then $A(\mathbf{u}+\mathbf{v}) = A\mathbf{u} + A\mathbf{v} = \mathbf{0} + \mathbf{0} = \mathbf{0}$. So $\mathbf{u}+\mathbf{v} \in Nul(A)$.
        3.  Closure under Scalar Multiplication: If $A\mathbf{u} = \mathbf{0}$, then $A(c\mathbf{u}) = c(A\mathbf{u}) = c(\mathbf{0}) = \mathbf{0}$. So $c\mathbf{u} \in Nul(A)$.

3.  **Row Space (Row($A$))**: This is the subspace of $\mathbb{R}^n$ spanned by the rows of $A$. It's equivalent to the column space of $A^T$.
    *   **Significance:** The row space is related to the linear dependence among the rows and is crucial in understanding concepts like rank.

4.  **Left Null Space (Nul($A^T$))**: This is the subspace of $\mathbb{R}^m$ spanned by vectors $\mathbf{y}$ such that $A^T\mathbf{y} = \mathbf{0}$. This is the null space of $A^T$.

**(Professor's Note:** These four fundamental subspaces (column space, null space, row space, and left null space) are interconnected and form the "Four Fundamental Subspaces Theorem." They provide a complete picture of the information encoded within a matrix $A$. For an $m \times n$ matrix $A$:
*   Col($A$) and Nul($A^T$) are subspaces of $\mathbb{R}^m$.
*   Row($A$) and Nul($A$) are subspaces of $\mathbb{R}^n$.
*   Importantly, $\text{Col}(A) \cap \text{Nul}(A) = \{ \mathbf{0} \}$ and $\text{Row}(A) \cap \text{Nul}(A^T) = \{ \mathbf{0} \}$.
*   Also, $\dim(\text{Col}(A)) = \text{rank}(A)$ and $\dim(\text{Nul}(A)) = n - \text{rank}(A)$ (the Rank-Nullity Theorem, linking dimensions). These are powerful results you'll see applied heavily!)

**Example 11: Finding the Null Space and Column Space**

Let $A = \begin{pmatrix} 1 & 2 & 3 \\ 2 & 4 & 6 \end{pmatrix}$.

*   **Null Space:** We need to solve $A\mathbf{x} = \mathbf{0}$.
    $\begin{pmatrix} 1 & 2 & 3 \\ 2 & 4 & 6 \end{pmatrix} \begin{pmatrix} x_1 \\ x_2 \\ x_3 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}$
    The second row is just twice the first row, so it doesn't add new information. We only have the equation $x_1 + 2x_2 + 3x_3 = 0$.
    Let $x_2 = s$ and $x_3 = t$ be free variables. Then $x_1 = -2s - 3t$.
    The solution vector is $\mathbf{x} = \begin{pmatrix} -2s - 3t \\ s \\ t \end{pmatrix} = s \begin{pmatrix} -2 \\ 1 \\ 0 \end{pmatrix} + t \begin{pmatrix} -3 \\ 0 \\ 1 \end{pmatrix}$.
    So, the Null Space is $Nul(A) = \text{span}\left\{ \begin{pmatrix} -2 \\ 1 \\ 0 \end{pmatrix}, \begin{pmatrix} -3 \\ 0 \\ 1 \end{pmatrix} \right\}$. This is a 2-dimensional subspace of $\mathbb{R}^3$.

*   **Column Space:** The columns are $\mathbf{a}_1 = \begin{pmatrix} 1 \\ 2 \end{pmatrix}$ and $\mathbf{a}_2 = \begin{pmatrix} 2 \\ 4 \end{pmatrix}$ and $\mathbf{a}_3 = \begin{pmatrix} 3 \\ 6 \end{pmatrix}$.
    $Col(A) = \text{span}\left\{ \begin{pmatrix} 1 \\ 2 \end{pmatrix}, \begin{pmatrix} 2 \\ 4 \end{pmatrix}, \begin{pmatrix} 3 \\ 6 \end{pmatrix} \right\}$.
    Notice that $\mathbf{a}_2 = 2\mathbf{a}_1$ and $\mathbf{a}_3 = 3\mathbf{a}_1$. So, the span is just the span of the first column (or any of them, as they are all multiples of each other).
    $Col(A) = \text{span}\left\{ \begin{pmatrix} 1 \\ 2 \end{pmatrix} \right\}$. This is the line passing through the origin and $(1,2)$ in $\mathbb{R}^2$. It's a 1-dimensional subspace of $\mathbb{R}^2$.

    This example shows that the dimension of the column space is the rank of the matrix (here, rank is 1), and the dimension of the null space is $n - \text{rank}$ (here, $3 - 1 = 2$). This fits the Rank-Nullity Theorem.

### Summary and Key Takeaways

**(Professor's Final Thoughts:** We've covered a lot of ground today! Understanding subspaces is a cornerstone of linear algebra. Remember that a subspace is a "closed" subset that respects the operations of vector addition and scalar multiplication. The subspace test is your tool for verification. Always remember:
*   A subspace must contain the zero vector.
*   A subspace must be closed under addition.
*   A subspace must be closed under scalar multiplication.
*   The span of any set of vectors is always a subspace.
*   The null space and column space are fundamental subspaces of a matrix with profound implications for solving linear systems (CO1) and understanding the structure of linear transformations (CO4).

Keep practicing identifying subspaces in different contexts – from geometric lines and planes to polynomial sets and matrix-related spaces. This will build the intuition you need for tackling more complex problems.)

**Key Concepts to Remember:**

*   **Subspace Definition:** A non-empty subset $W$ of a vector space $V$ that is itself a vector space under the same operations.
*   **Subspace Test:**
    1.  $\mathbf{0} \in W$
    2.  $\mathbf{u}, \mathbf{v} \in W \implies \mathbf{u} + \mathbf{v} \in W$
    3.  $\mathbf{u} \in W, c \in \mathbb{R} \implies c\mathbf{u} \in W$
*   **Span($S$):** The set of all linear combinations of vectors in $S$. $\text{span}(S)$ is always a subspace.
*   **Fundamental Subspaces of a Matrix $A$ ($m \times n$):**
    *   **Column Space (Col($A$)):** Subspace of $\mathbb{R}^m$ spanned by columns of $A$.
    *   **Null Space (Nul($A$)):** Subspace of $\mathbb{R}^n$ such that $A\mathbf{x} = \mathbf{0}$.
    *   **Row Space (Row($A$)):** Subspace of $\mathbb{R}^n$ spanned by rows of $A$.
    *   **Left Null Space (Nul($A^T$)):** Subspace of $\mathbb{R}^m$ such that $A^T\mathbf{y} = \mathbf{0}$.

---

### Sample Questions and Answers

**Question 1 (Conceptual):**
State the three conditions that a non-empty subset $W$ of a vector space $V$ must satisfy to be considered a subspace of $V$.

**Answer:**
For a non-empty subset $W$ of a vector space $V$ to be a subspace, it must satisfy:
1.  **Closure under Addition:** For any two vectors $\mathbf{u}, \mathbf{v} \in W$, their sum $\mathbf{u} + \mathbf{v}$ must also be in $W$.
2.  **Closure under Scalar Multiplication:** For any vector $\mathbf{u} \in W$ and any scalar $c$, the scalar multiple $c\mathbf{u}$ must also be in $W$.
3.  **Contains the Zero Vector:** The zero vector $\mathbf{0}$ of $V$ must be an element of $W$. (Note: This is often implied by the other two if $W$ is non-empty, but it's good practice to check explicitly as it's often the easiest failure point).

**Question 2 (Application):**
Determine if the set $W = \{ (x, y) \in \mathbb{R}^2 \mid y = 2x + 1 \}$ is a subspace of $\mathbb{R}^2$. Justify your answer.

**Answer:**
We need to check the subspace test.
1.  **Zero Vector:** The zero vector in $\mathbb{R}^2$ is $(0,0)$. For $(0,0)$ to be in $W$, its second component (0) must equal $2 \times (\text{first component}) + 1$. So, $0 = 2(0) + 1$, which simplifies to $0 = 1$. This is false.
    Since the zero vector $(0,0)$ is not in $W$, $W$ fails the first condition.

Therefore, $W$ is **not** a subspace of $\mathbb{R}^2$. (This set represents a line that does not pass through the origin.)

**Question 3 (Application with Span):**
Let $S = \{ \begin{pmatrix} 1 \\ -1 \end{pmatrix}, \begin{pmatrix} 2 \\ 3 \end{pmatrix} \}$ be a set of vectors in $\mathbb{R}^2$. Is $\text{span}(S) = \mathbb{R}^2$? Justify your answer.

**Answer:**
The span of $S$ is the set of all linear combinations:
$c_1 \begin{pmatrix} 1 \\ -1 \end{pmatrix} + c_2 \begin{pmatrix} 2 \\ 3 \end{pmatrix} = \begin{pmatrix} c_1 + 2c_2 \\ -c_1 + 3c_2 \end{pmatrix}$.
For $\text{span}(S)$ to be equal to $\mathbb{R}^2$, any vector $\begin{pmatrix} a \\ b \end{pmatrix}$ in $\mathbb{R}^2$ must be expressible in this form for some scalars $c_1, c_2$. This means the system of equations:
$c_1 + 2c_2 = a$
$-c_1 + 3c_2 = b$
must have a solution for all $a, b \in \mathbb{R}$.

We can check if the vectors in $S$ are linearly independent. The determinant of the matrix formed by these vectors as columns is:
$\det \begin{pmatrix} 1 & 2 \\ -1 & 3 \end{pmatrix} = (1)(3) - (2)(-1) = 3 + 2 = 5$.
Since the determinant is non-zero (5), the vectors $\begin{pmatrix} 1 \\ -1 \end{pmatrix}$ and $\begin{pmatrix} 2 \\ 3 \end{pmatrix}$ are linearly independent.

In $\mathbb{R}^2$, any set of two linearly independent vectors spans the entire space. Therefore, $\text{span}(S) = \mathbb{R}^2$.

**Question 4 (Matrix Subspaces):**
Let $A = \begin{pmatrix} 1 & 0 & -1 \\ 0 & 1 & 2 \\ 0 & 0 & 0 \end{pmatrix}$. Find the null space of $A$.

**Answer:**
We need to find all $\mathbf{x} = \begin{pmatrix} x_1 \\ x_2 \\ x_3 \end{pmatrix}$ such that $A\mathbf{x} = \mathbf{0}$.
$\begin{pmatrix} 1 & 0 & -1 \\ 0 & 1 & 2 \\ 0 & 0 & 0 \end{pmatrix} \begin{pmatrix} x_1 \\ x_2 \\ x_3 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}$

This gives the system of equations:
1. $x_1 - x_3 = 0 \implies x_1 = x_3$
2. $x_2 + 2x_3 = 0 \implies x_2 = -2x_3$
3. $0 = 0$

The variable $x_3$ is a free variable. Let $x_3 = t$.
Then $x_1 = t$ and $x_2 = -2t$.
The solution vector is $\mathbf{x} = \begin{pmatrix} t \\ -2t \\ t \end{pmatrix} = t \begin{pmatrix} 1 \\ -2 \\ 1 \end{pmatrix}$.

The null space of $A$ is $Nul(A) = \text{span}\left\{ \begin{pmatrix} 1 \\ -2 \\ 1 \end{pmatrix} \right\}$. This is a 1-dimensional subspace of $\mathbb{R}^3$.
