---
title: "Representing Relations Using Matrices"
subject: "DISCRETE MATHEMATICS"
module: "Module 1: Sets and Subsets"
branch: "Computer Science and Engineering"
semester: 2
topicId: "68b45b6f58474a0b135b5f90"
status: "completed"
scrapedAt: "2026-05-20T16:32:51.122Z"
---
## Discrete Mathematics: Module 1 - Sets and Subsets

### Topic: Representing Relations Using Matrices

Welcome, everyone, to our exploration of Discrete Mathematics! Today, we're diving into a very practical and visual way of understanding relationships between elements: **representing relations using matrices**. This might sound a bit technical at first, but trust me, it's a powerful tool that helps us organize and analyze information, especially in areas like computer science.

As we go through this, keep in mind our **Course Outcome 3 (CO3)**: "Classify binary relations into various types and illustrate an application for each type of binary relation, in Computer Science." Representing relations with matrices is a key part of *how* we can visualize and work with these relations, making it easier to classify them and see their applications.

### What's a Relation, Anyway? A Quick Recap

Before we jump into matrices, let's quickly refresh our understanding of what a relation is in mathematics. Think of a relation as a way to connect elements from one set to another, or even within the same set.

For instance, consider a set of students, $S = \{\text{Alice, Bob, Charlie}\}$, and a set of courses, $C = \{\text{Math, Physics, CS}\}$. A relation $R$ from $S$ to $C$ could represent which student is enrolled in which course. So, if Alice is in Math and CS, Bob is in Math, and Charlie is in Physics, we can describe this relation by listing pairs: $(Alice, Math), (Alice, CS), (Bob, Math), (Charlie, Physics)$.

Now, what if we're looking at relations within a single set? Let's say we have a set of numbers, $A = \{1, 2, 3\}$. A relation $R$ on $A$ could be "is less than or equal to". So, we'd have pairs like $(1,1), (1,2), (1,3), (2,2), (2,3), (3,3)$.

This is where matrices come in. They provide a structured grid to represent these connections.

### The Adjacency Matrix: Our Grid for Relations

Imagine you have two sets, set $A$ and set $B$. Let's say set $A$ has $m$ elements and set $B$ has $n$ elements. A relation $R$ from $A$ to $B$ is a subset of the Cartesian product $A \times B$.

To represent this relation using a matrix, we'll create an $m \times n$ matrix. Why $m \times n$? Because there are $m$ possible "sources" (elements from $A$) and $n$ possible "destinations" (elements from $B$).

Let's assign an order to the elements in each set. Suppose:
$A = \{a_1, a_2, \dots, a_m\}$
$B = \{b_1, b_2, \dots, b_n\}$

We'll construct an **$m \times n$ matrix**, let's call it $M$, where the rows correspond to the elements of $A$ and the columns correspond to the elements of $B$. The entry in the $i$-th row and $j$-th column, denoted by $M_{ij}$, will tell us if there's a connection from $a_i$ to $b_j$ in our relation $R$.

*   If $(a_i, b_j) \in R$, then $M_{ij} = 1$. (Meaning there *is* a relation.)
*   If $(a_i, b_j) \notin R$, then $M_{ij} = 0$. (Meaning there is *no* relation.)

This type of matrix is often called an **adjacency matrix** or **incidence matrix**, depending on the context (though "adjacency matrix" is more common for relations on a single set).

**Analogy:** Think of a bus schedule. Let the rows represent bus routes (e.g., Route 1, Route 2) and the columns represent destinations (e.g., Downtown, Airport, University). A '1' in a cell would mean that route goes to that destination, and a '0' means it doesn't. This is a very intuitive way to map out connections!

**Referencing the Textbooks:** You'll find a detailed explanation of this in Kenneth H. Rosen's "Discrete Mathematics and Its Applications." He often uses this matrix representation to visualize functions and relations, which is crucial for understanding their properties.

#### Example: Students and Courses

Let's revisit our student-course example:
$S = \{\text{Alice, Bob, Charlie}\}$
$C = \{\text{Math, Physics, CS}\}$
Relation $R$: Alice is enrolled in Math and CS; Bob is enrolled in Math; Charlie is enrolled in Physics.

Let's order the students: $a_1 = \text{Alice}, a_2 = \text{Bob}, a_3 = \text{Charlie}$.
Let's order the courses: $b_1 = \text{Math}, b_2 = \text{Physics}, b_3 = \text{CS}$.

We need a $3 \times 3$ matrix.

|       | Math ($b_1$) | Physics ($b_2$) | CS ($b_3$) |
| :---- | :----------- | :-------------- | :--------- |
| Alice ($a_1$) |      1       |        0        |     1      |
| Bob ($a_2$)   |      1       |        0        |     0      |
| Charlie ($a_3$) |      0       |        1        |     0      |

So, the matrix $M$ for this relation is:

$$
M = \begin{pmatrix}
1 & 0 & 1 \\
1 & 0 & 0 \\
0 & 1 & 0
\end{pmatrix}
$$

See how each '1' directly corresponds to a pair in our relation? $(Alice, Math), (Alice, CS), (Bob, Math), (Charlie, Physics)$. This matrix perfectly encapsulates the relation!

### Relations on a Single Set: The Square Matrix

When we have a relation $R$ on a single set, say $A$, where $A = \{a_1, a_2, \dots, a_n\}$, we are looking at a relation from $A$ to $A$. In this case, our matrix will be an $n \times n$ **square matrix**.

The $i$-th row and $j$-th column will tell us if $(a_i, a_j) \in R$.

$M_{ij} = 1$ if $(a_i, a_j) \in R$
$M_{ij} = 0$ if $(a_i, a_j) \notin R$

**Example: "Less Than or Equal To" Relation on {1, 2, 3}**

Let $A = \{1, 2, 3\}$ and the relation $R$ be "$\le$".
The pairs in $R$ are: $(1,1), (1,2), (1,3), (2,2), (2,3), (3,3)$.

Let's order the elements: $a_1=1, a_2=2, a_3=3$. We need a $3 \times 3$ matrix.

|     | 1 ($a_1$) | 2 ($a_2$) | 3 ($a_3$) |
| :-- | :-------- | :-------- | :-------- |
| 1 ($a_1$) |     1     |     1     |     1     |
| 2 ($a_2$) |     0     |     1     |     1     |
| 3 ($a_3$) |     0     |     0     |     1     |

The matrix $M$ is:

$$
M = \begin{pmatrix}
1 & 1 & 1 \\
0 & 1 & 1 \\
0 & 0 & 1
\end{pmatrix}
$$

**Important Note:** The diagonal elements ($M_{ii}$) tell us if an element is related to itself (i.e., if $(a_i, a_i) \in R$). This is key for identifying properties like reflexivity.

This matrix representation is particularly useful when we need to analyze properties of relations, like reflexivity, symmetry, and transitivity, which ties directly into **CO3**. We'll see how in a moment.

### Connecting Matrices to Relation Properties (CO3 Deep Dive)

This is where the power of matrices really shines, especially for **CO3**. We can *see* these properties directly in the matrix!

**1. Reflexive Relation:**
A relation $R$ on a set $A$ is reflexive if $(a, a) \in R$ for every element $a \in A$.
*   **Matrix Representation:** In the adjacency matrix $M$ for a relation on a single set $A$, a relation is reflexive if and only if **all the diagonal entries are 1**. That is, $M_{ii} = 1$ for all $i$.
    *   Look at our "less than or equal to" example matrix: all diagonal entries are 1. So, it's reflexive.

**2. Symmetric Relation:**
A relation $R$ on a set $A$ is symmetric if whenever $(a, b) \in R$, then $(b, a) \in R$ as well.
*   **Matrix Representation:** The matrix $M$ is symmetric if and only if **$M_{ij} = M_{ji}$ for all $i$ and $j$**. This means the matrix is equal to its transpose ($M = M^T$). Visually, the matrix is a mirror image across its main diagonal.
    *   Consider a relation "is a friend of" on a set of people. If Alice is a friend of Bob, then Bob is a friend of Alice. The matrix would be symmetric.

**3. Antisymmetric Relation:**
A relation $R$ on a set $A$ is antisymmetric if whenever $(a, b) \in R$ and $a \neq b$, then $(b, a) \notin R$.
*   **Matrix Representation:** For any pair of distinct indices $i$ and $j$ (where $i \neq j$), it's not possible to have both $M_{ij} = 1$ and $M_{ji} = 1$. In other words, **for $i \neq j$, at most one of $M_{ij}$ or $M_{ji}$ can be 1**. If $M_{ij}=1$ and $M_{ji}=1$, it's not antisymmetric.
    *   Our "less than or equal to" relation is antisymmetric. For example, $(1,2) \in R$ (so $M_{12}=1$), but $(2,1) \notin R$ (so $M_{21}=0$). The only time both $M_{ij}$ and $M_{ji}$ are 1 is when $i=j$ (the diagonal elements), which is allowed.

**4. Transitive Relation:**
A relation $R$ on a set $A$ is transitive if whenever $(a, b) \in R$ and $(b, c) \in R$, then $(a, c) \in R$.
*   **Matrix Representation:** This is where matrix multiplication comes in handy. A relation $R$ is transitive if and only if $M^k$ has a 1 in the $(i, j)$ position whenever $M^i$ has a 1 in the $(i, j)$ position for all $i, j$. More practically, if $M$ is the adjacency matrix for a relation $R$ on a set with $n$ elements, then $R$ is transitive if and only if $M^n$ has zeros in all positions where $M$ has zeros, *or* more precisely, if $M \cdot M = M^2$ implies that if $(a,b) \in R$ and $(b,c) \in R$, then $(a,c) \in R$.
    A more direct way to check transitivity using matrices is: **$M$ is transitive if and only if $M \cdot M$ (matrix multiplication) results in a matrix where if $M_{ij} = 1$ for any $i \ne j$, then $M_{ji}$ must be 0 (antisymmetric condition) and $M_{ij} \lor M_{ji} \le 1$ for $i \ne j$.**
    A more robust check for transitivity involves checking $M^2, M^3, \dots, M^n$. If $M^k_{ij} = 1$ for any $k \in \{2, \dots, n\}$, then $M_{ij}$ must also be 1. A more straightforward check is that $M$ is transitive if $M \cdot M \leq M$ (where the inequality is element-wise, and $1+1$ is treated as 1 in this context, similar to boolean matrix multiplication).
    Let's try to explain this without diving too deep into matrix powers right now, as that’s for later modules. For transitivity: If you can go from $a_i$ to $a_k$ *through* some $a_j$ (meaning $M_{ij}=1$ and $M_{jk}=1$), then you must also be able to go directly from $a_i$ to $a_k$ (meaning $M_{ik}=1$).
    In terms of matrices: if $M_{ij}=1$ and $M_{jk}=1$, then $M_{ik}$ must be 1. This is precisely what happens when you perform matrix multiplication. The $(i, k)$ entry of $M^2$ is calculated as $\sum_{j=1}^n M_{ij} M_{jk}$. If there is any $j$ such that $M_{ij}=1$ and $M_{jk}=1$, then the sum will be at least 1. For transitivity, we require that if this sum is $\ge 1$, then $M_{ik}$ must be 1. This is captured by the condition that $M \cdot M \le M$ (using boolean matrix multiplication, where $1+1=1$).

**Let's look at our "less than or equal to" example again:**
$$
M = \begin{pmatrix}
1 & 1 & 1 \\
0 & 1 & 1 \\
0 & 0 & 1
\end{pmatrix}
$$
Is it transitive?
If $(1,2) \in R$ and $(2,3) \in R$, then $(1,3) \in R$. Yes, this holds.
Matrix check: $M \cdot M$:
The (1,1) entry: $M_{11}M_{11} + M_{12}M_{21} + M_{13}M_{31} = 1 \cdot 1 + 1 \cdot 0 + 1 \cdot 0 = 1$. So $M^2_{11}=1$. This is fine because $M_{11}=1$.
The (1,3) entry: $M_{11}M_{13} + M_{12}M_{23} + M_{13}M_{33} = 1 \cdot 1 + 1 \cdot 1 + 1 \cdot 1 = 3$.
In boolean matrix multiplication, $1+1=1$, so the result is 1.
$M^2_{13} = 1$. Since $M_{13}=1$, this is consistent with transitivity.
What if we had $(1,2) \in R$ and $(2,1) \in R$? This is not the case for "$\le$". If it were, we would need $(1,1) \in R$, which is true. But if we had relation $R'$ where $(1,2) \in R'$ and $(2,1) \in R'$ and $(1,3) \in R'$ and $(3,2) \in R'$, then for transitivity we would need $(1,1) \in R'$, $(2,2) \in R'$, $(3,3) \in R'$ (from loops), and $(1,2) \in R'$, $(2,1) \in R'$, $(1,3) \in R'$, $(3,2) \in R'$. If we also had $(2,3) \in R'$ and $(3,1) \in R'$, then we'd need $(2,1) \in R'$ and $(1,3) \in R'$, which is given.

The key takeaway for transitivity is that if a path of length 2 exists, a direct edge must also exist. The matrix power $M^2$ tells you about paths of length 2. If $M^2_{ij} > 0$, then there is a path of length 2 from $a_i$ to $a_j$. For transitivity, this implies $M_{ij}$ must also be 1.

**Relating to CO3:** By examining the structure of these matrices, we can quickly determine if a relation is reflexive, symmetric, antisymmetric, or transitive. This makes it much easier to classify relations and understand their behavior in computer science applications. For instance, a symmetric relation might represent "connected by an edge" in a graph, while an antisymmetric relation could be "is a sub-task of" where one sub-task cannot also be a parent task of itself (in a strict sense).

### Applications in Computer Science

The ability to represent relations with matrices is not just an academic exercise; it's fundamental in computer science.

1.  **Graph Theory:** In computer science, graphs are everywhere! Nodes represent entities (like computers in a network, cities, or states in an algorithm), and edges represent connections or relationships between them. The adjacency matrix is precisely the matrix representation of a graph's adjacency relation.
    *   **Example:** Think of a social network. Each person is a node, and an edge exists if two people are friends. The adjacency matrix would show who is friends with whom. If the relation is "is friends with," the matrix should be symmetric. If it's "follows," it might not be.
    *   **CO3 Connection:** This directly illustrates an application for binary relations (friendship, following) in computer science. The matrix helps us analyze the network structure.

2.  **Database Systems:** Relations are the core of relational databases. Tables represent relations, and the entries in the table correspond to pairs in the relation. While not always explicitly using 0s and 1s, the underlying concept of relationships and their structure is matrix-like.
    *   **Example:** A database table might store information about products and their suppliers. The relation could be "supplies." If a product $P$ is supplied by supplier $S$, we have a pair $(P, S)$. A matrix could represent this, showing which supplier supplies which product.

3.  **State Machines and Automata:** In the study of finite automata and state machines, relations are used to define transitions between states. An adjacency matrix can represent the transition relation, showing which state you move to from a current state given an input symbol.
    *   **CO3 Connection:** This is a direct application of relations (state transitions) in computer science, and matrices are used to model these transitions.

### Operations on Relations via Matrices

What's really neat is that operations on relations often translate into operations on their matrices.

*   **Union of Relations ($R_1 \cup R_2$):** If $M_1$ and $M_2$ are the matrices for $R_1$ and $R_2$, then the matrix for $R_1 \cup R_2$ is $M_1 + M_2$ (element-wise addition), where we cap the sum at 1 (i.e., $1+0=1, 0+1=1, 1+1=1$, or $M_{ij} \lor M'_{ij}$). This is essentially a "bitwise OR" operation on the matrices.
*   **Intersection of Relations ($R_1 \cap R_2$):** The matrix for $R_1 \cap R_2$ is $M_1 \cdot M_2$ (element-wise multiplication), where $1 \cdot 1 = 1$, and $1 \cdot 0 = 0, 0 \cdot 1 = 0, 0 \cdot 0 = 0$. This is a "bitwise AND" operation ($M_{ij} \land M'_{ij}$).
*   **Composition of Relations:** This is a bit more complex and involves matrix multiplication, which we'll cover in detail in later modules. But remember, the matrix form makes these operations systematic.

### Example Walkthrough: Symmetry and Antisymmetry

Let's try another example to solidify the property checks.
Set $A = \{a, b, c\}$.
Relation $R = \{(a,a), (b,b), (c,c), (a,b), (b,a)\}$.

Matrix $M$:
$$
M = \begin{pmatrix}
1 & 1 & 0 \\
1 & 1 & 0 \\
0 & 0 & 1
\end{pmatrix}
$$

*   **Reflexive?** Diagonal elements are $(1,1), (1,1), (1)$. All are 1. Yes, it is reflexive.
*   **Symmetric?** Check if $M_{ij} = M_{ji}$.
    *   $M_{12} = 1$, $M_{21} = 1$. They are equal.
    *   $M_{13} = 0$, $M_{31} = 0$. They are equal.
    *   $M_{23} = 0$, $M_{32} = 0$. They are equal.
    Yes, the matrix is symmetric, so the relation is symmetric.
*   **Antisymmetric?** Check if for $i \neq j$, we don't have both $M_{ij}=1$ and $M_{ji}=1$.
    *   For $i=1, j=2$, $M_{12}=1$ and $M_{21}=1$. Since $i \neq j$, having both equal to 1 means it's NOT antisymmetric.
    *   So, the relation is not antisymmetric.

This example clearly shows how we can use the matrix to check these properties.

### Thinking Ahead: Posets and Lattices (CO4)

While our focus today is on matrices for general relations, remember that certain types of relations, like partial orders, are crucial for **CO4**. The matrix representation helps us identify these structures. For instance, a relation that is reflexive, antisymmetric, and transitive is a partial order. We can see these properties directly in its adjacency matrix. Understanding these properties through their matrix representations is a stepping stone to grasping posets and lattices.

### Summary and Key Takeaways

*   Relations can be effectively represented using matrices, which provides a clear visual and computational tool.
*   For a relation $R$ from set $A$ ($|A|=m$) to set $B$ ($|B|=n$), we use an $m \times n$ matrix where $M_{ij}=1$ if $(a_i, b_j) \in R$ and 0 otherwise.
*   For relations on a single set $A$ ($|A|=n$), we use an $n \times n$ square matrix (adjacency matrix).
*   **Crucially for CO3:**
    *   Reflexivity means all diagonal entries are 1.
    *   Symmetry means the matrix is symmetric ($M = M^T$, $M_{ij} = M_{ji}$).
    *   Antisymmetry means for $i \neq j$, at most one of $M_{ij}$ or $M_{ji}$ is 1.
    *   Transitivity is checked using matrix powers, particularly $M^2 \le M$ (in boolean matrix arithmetic).
*   These matrix representations are fundamental in computer science for analyzing graphs, databases, and state machines.

Remember these connections between the visual matrix and the abstract properties of relations. It's a powerful concept that will serve you well!

---

### Sample Questions and Answers

**1. Conceptual Question:**
Explain why the adjacency matrix of a symmetric relation on a set $A$ must be symmetric itself.

**Answer:**
A relation $R$ on a set $A$ is symmetric if for any two elements $a, b \in A$, if $(a, b) \in R$, then $(b, a) \in R$. Let $M$ be the adjacency matrix for $R$, where $A = \{a_1, a_2, \dots, a_n\}$. The entry $M_{ij}$ is 1 if $(a_i, a_j) \in R$, and 0 otherwise.
If the relation is symmetric, then whenever $M_{ij} = 1$ (meaning $(a_i, a_j) \in R$), it must also be true that $(a_j, a_i) \in R$. This implies that $M_{ji}$ must also be 1.
Conversely, if $M_{ij} = 0$ (meaning $(a_i, a_j) \notin R$), then by the definition of symmetry, it cannot be the case that $(a_j, a_i) \in R$ while $(a_i, a_j) \notin R$. If $(a_j, a_i)$ were in $R$, then $(a_i, a_j)$ would also have to be in $R$ for symmetry. Since $(a_i, a_j) \notin R$, it must be that $(a_j, a_i) \notin R$, which means $M_{ji} = 0$.
Therefore, for every pair $(i, j)$, $M_{ij} = M_{ji}$. This is the definition of a symmetric matrix. The matrix visually mirrors itself across the main diagonal, just as the relation is symmetric in its pairings.

**2. Exam-Oriented Question:**
Let $A = \{1, 2, 3, 4\}$ and let $R$ be the relation defined by $R = \{(x, y) \mid x \text{ divides } y\}$.
(a) Construct the adjacency matrix for $R$.
(b) Is $R$ reflexive? Symmetric? Antisymmetric? Transitive? Justify your answers using the matrix.

**Answer:**
First, let's list the pairs in the relation $R$ on set $A = \{1, 2, 3, 4\}$:
$R = \{(1,1), (1,2), (1,3), (1,4), (2,2), (2,4), (3,3), (4,4)\}$.

(a) Construct the adjacency matrix for $R$.
Let $a_1=1, a_2=2, a_3=3, a_4=4$. We need a $4 \times 4$ matrix.
$M_{ij} = 1$ if $i$ divides $j$.

$$
M = \begin{pmatrix}
1 & 1 & 1 & 1 \\  % 1 divides 1,2,3,4
1 & 1 & 0 & 1 \\  % 2 divides 1(no),2(yes),3(no),4(yes)
0 & 0 & 1 & 0 \\  % 3 divides 1(no),2(no),3(yes),4(no)
0 & 0 & 0 & 1   % 4 divides 1(no),2(no),3(no),4(yes)
\end{pmatrix}
$$

(b) Analyze the properties:

*   **Reflexive?** A relation is reflexive if all diagonal entries are 1.
    Looking at the matrix $M$, the diagonal entries are $M_{11}=1, M_{22}=1, M_{33}=1, M_{44}=1$.
    **Yes, $R$ is reflexive.**

*   **Symmetric?** A relation is symmetric if its adjacency matrix is symmetric ($M_{ij} = M_{ji}$ for all $i,j$).
    Let's check:
    $M_{12} = 1$, but $M_{21} = 0$. Since $M_{12} \neq M_{21}$, the matrix is not symmetric.
    **No, $R$ is not symmetric.** (Because 1 divides 2, but 2 does not divide 1).

*   **Antisymmetric?** A relation is antisymmetric if for $i \neq j$, we do not have both $M_{ij}=1$ and $M_{ji}=1$.
    Let's check pairs where $i \neq j$:
    For $(i,j)=(1,2)$: $M_{12}=1$ and $M_{21}=0$. This pair is fine.
    For $(i,j)=(1,3)$: $M_{13}=1$ and $M_{31}=0$. This pair is fine.
    For $(i,j)=(2,4)$: $M_{24}=1$ and $M_{42}=0$. This pair is fine.
    We need to check all pairs where $i \neq j$ and $M_{ij}=1$. If for any such pair, $M_{ji}$ is also 1, then it's not antisymmetric.
    In our matrix, for any $i \neq j$, if $M_{ij}=1$ (meaning $i$ divides $j$), it is never the case that $j$ divides $i$ unless $i=j$. For example, 2 divides 4 ($M_{24}=1$), but 4 does not divide 2 ($M_{42}=0$).
    Since for all $i \neq j$, we don't have both $M_{ij}=1$ and $M_{ji}=1$.
    **Yes, $R$ is antisymmetric.**

*   **Transitive?** A relation is transitive if whenever $(a,b) \in R$ and $(b,c) \in R$, then $(a,c) \in R$.
    Using matrices, we can check if $M^2 \le M$ (using boolean matrix arithmetic).
    Let's find $M^2$. The $(i,k)$ entry of $M^2$ is $\sum_{j=1}^4 M_{ij} M_{jk}$.
    Consider $i=1, j=2, k=4$. We have $M_{12}=1$ (1 divides 2) and $M_{24}=1$ (2 divides 4). For transitivity, we need $M_{14}$ to be 1 (1 divides 4), which it is.
    Consider $i=2, j=2, k=4$. We have $M_{22}=1$ (2 divides 2) and $M_{24}=1$ (2 divides 4). For transitivity, we need $M_{24}$ to be 1 (2 divides 4), which it is.
    Let's check a case where $M_{ij}=1$ and $M_{jk}=1$ leads to $M_{ik}=1$. For example, $1|2$ and $2|4$, so we need $1|4$, which is true ($M_{12}=1, M_{24}=1 \implies M_{14}=1$).
    What if we have $i$ divides $j$ and $j$ divides $k$? Does $i$ always divide $k$? Yes, if $j=k$, then $i$ divides $j$ implies $i$ divides $k$. If $i=j$, then $j$ divides $k$ implies $i$ divides $k$. If $k=i$, then $i$ divides $j$ and $j$ divides $i$ implies $i=j$ for positive integers, so $i$ divides $i$.
    Let's try to find a counterexample for transitivity (i.e., find $i,j,k$ such that $M_{ij}=1, M_{jk}=1$ but $M_{ik}=0$).
    This doesn't seem possible with the "divides" relation on positive integers. If $i|j$ and $j|k$, then it is a property of integers that $i|k$.
    Let's verify with the matrix. For instance, to check $M_{14}$:
    $M^2_{14} = M_{11}M_{14} + M_{12}M_{24} + M_{13}M_{34} + M_{14}M_{44}$
    $M^2_{14} = 1 \cdot 1 + 1 \cdot 1 + 1 \cdot 0 + 1 \cdot 1 = 1 + 1 + 0 + 1 = 4$.
    In boolean matrix arithmetic, $M^2_{14}=1$. Since $M_{14}=1$, this is consistent with transitivity.
    We need to check all combinations. Given the nature of the "divides" relation, it inherently possesses transitivity.
    **Yes, $R$ is transitive.**
