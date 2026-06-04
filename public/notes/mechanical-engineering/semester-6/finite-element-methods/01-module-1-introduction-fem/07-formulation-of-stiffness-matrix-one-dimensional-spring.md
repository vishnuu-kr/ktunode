---
title: "Formulation of stiffness matrix- one dimensional spring"
subject: "FINITE ELEMENT METHODS"
module: "Module 1: Introduction FEM"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1651d0cf4804463842"
status: "completed"
scrapedAt: "2026-05-20T18:03:54.651Z"
---
# FINITE ELEMENT METHODS - Module 1: Introduction FEM

## Topic: Formulation of Stiffness Matrix - One-Dimensional Spring

This module introduces the fundamental principles of the Finite Element Method (FEM). We will begin by understanding the basic procedure of FEM and its application to simple structural problems. This topic focuses on formulating the stiffness matrix for a one-dimensional spring element, a foundational step in applying FEM to more complex systems.

---

### Learning Outcomes:

Upon successful completion of this topic, you will be able to:

*   **LO1:** Understand the basic procedure of FEM for a one-dimensional spring. (Aligns with CO1)
*   **LO2:** Define and derive the stiffness matrix for a one-dimensional spring element. (Aligns with CO3, K4)
*   **LO3:** Relate the stiffness matrix to the physical properties of a spring (stiffness and length).
*   **LO4:** Understand the concept of element stiffness matrix and its role in the global stiffness matrix. (Aligns with CO1)

---

### Course Outcomes Addressed:

*   **CO1:** To understand the governing equations of various physical phenomena and basic procedure of FEM. (Knowledge Level: K2)
*   **CO3:** Formulate shape functions and element strain displacement matrix of various element (Knowledge Level: K4) - *While shape functions are not explicitly derived for a simple spring in this introductory context, the concept of relating nodal displacements to internal states is implicitly present.*

---

### Key Concepts and Definitions:

*   **Finite Element Method (FEM):** A numerical technique for finding approximate solutions to boundary value problems. It works by dividing a large problem into many smaller, simpler parts, called finite elements.
*   **Element:** The simplest building block in FEM. For this topic, it's a one-dimensional spring.
*   **Nodes:** Points connecting elements. They represent the degrees of freedom (DOFs) where displacements are considered.
*   **Degrees of Freedom (DOFs):** The independent variables that describe the state of the system. For a one-dimensional spring, DOFs are typically the displacements at its ends.
*   **Stiffness Matrix (Element):** A matrix that relates the nodal forces to the nodal displacements for a single element. It represents the element's resistance to deformation.
*   **Governing Equation (for a spring):** Based on Hooke's Law, the force ($F$) in a spring is proportional to its deformation ($\Delta L$) by the spring stiffness ($k$): $F = k \cdot \Delta L$.
*   **Discretization:** The process of dividing a continuous domain into a finite number of elements.

---

### 1. The Basic Procedure of FEM (Applied to a Spring)

FEM involves the following general steps:

1.  **Preprocessing:**
    *   **Discretization:** Divide the physical system (e.g., a structure made of springs) into a finite number of elements.
    *   **Element Formulation:** Develop mathematical expressions for the behavior of a single element. This includes deriving the element stiffness matrix.
    *   **Assembly:** Combine the element stiffness matrices and load vectors to form the global stiffness matrix and global load vector for the entire system.
2.  **Solution:**
    *   **Boundary Conditions:** Apply known displacements or forces at specific nodes.
    *   **Solve System of Equations:** Solve the global system of equations to find the unknown nodal displacements.
3.  **Postprocessing:**
    *   **Calculate Element Quantities:** Use the nodal displacements to calculate strains, stresses, and forces within each element.

---

### 2. Formulation of the Stiffness Matrix for a One-Dimensional Spring Element

Let's consider a simple one-dimensional spring element connecting two nodes, say Node 1 and Node 2.

*   **Element Properties:**
    *   Spring stiffness: $k$
    *   Length of the element: $L$
*   **Nodal Displacements:**
    *   At Node 1: $u_1$
    *   At Node 2: $u_2$
*   **Nodal Forces:**
    *   At Node 1: $F_1$ (force acting at Node 1)
    *   At Node 2: $F_2$ (force acting at Node 2)

**Relationship between Forces and Displacements:**

Based on Hooke's Law, the force in the spring is $F = k \cdot (\text{change in length})$.
The change in length of the spring element is the difference in displacements of its ends: $\Delta L = u_2 - u_1$.

Therefore, the force in the spring can be expressed as:
$F = k (u_2 - u_1)$

Now, let's consider the forces acting *at the nodes*. These forces are external forces applied to the element.

*   **Force at Node 1 ($F_1$):** This is the force required to pull/push Node 1 by $u_1$ while Node 2 is at $u_2$. The force acting at Node 1 is equal in magnitude and opposite in direction to the force acting at Node 2 (due to Newton's third law, considering the internal force within the spring). If the spring is in tension, the force at Node 1 is pulling to the right (positive), and the force at Node 2 is pulling to the left (negative).

    $F_1 = k (u_2 - u_1)$

*   **Force at Node 2 ($F_2$):** This is the force required to pull/push Node 2 by $u_2$ while Node 1 is at $u_1$.

    $F_2 = k (u_1 - u_2) = -k (u_2 - u_1)$

**Matrix Representation:**

We can express these nodal forces in terms of nodal displacements using a matrix equation:

$$ \begin{bmatrix} F_1 \\ F_2 \end{bmatrix} = \begin{bmatrix} k & -k \\ -k & k \end{bmatrix} \begin{bmatrix} u_1 \\ u_2 \end{bmatrix} $$

This matrix $\begin{bmatrix} k & -k \\ -k & k \end{bmatrix}$ is the **element stiffness matrix** for a one-dimensional spring, often denoted as $[k]^e$.

$$ [k]^e = \begin{bmatrix} k & -k \\ -k & k \end{bmatrix} $$

**Important Note on Coordinate System:**

The formulation above assumes a **local coordinate system** where the displacement $u$ is along the axis of the spring. If the spring is oriented at an angle in a global coordinate system, a coordinate transformation would be necessary (as per LOs related to CO2 and CO3). However, for this introductory topic, we assume the spring is aligned with the axis of displacement.

---

### 3. Relation to Physical Properties

The element stiffness matrix $[k]^e$ directly reflects the physical properties of the spring:

*   **$k$ (Spring Stiffness):** The magnitude of the diagonal terms and the magnitude of the off-diagonal terms are directly proportional to $k$. A stiffer spring (larger $k$) will result in larger forces for the same displacements.
*   **$L$ (Length):** While not explicitly present in the $k$ and $-k$ terms for a basic spring, the *effective stiffness* $k$ of a continuous material like a rod or beam is often dependent on its length (e.g., $k = EA/L$ for axial stiffness of a rod). For a simple spring element, we are given a pre-defined stiffness $k$.

---

### 4. Assembly of Global Stiffness Matrix (Conceptual)

While we won't delve into detailed assembly here, it's important to understand that the element stiffness matrices are assembled to form a larger **global stiffness matrix** for the entire structure.

Consider a simple structure with two springs (Element 1 and Element 2) and three nodes (Node 1, Node 2, Node 3).

*   **Element 1:** Connects Node 1 and Node 2. Its stiffness matrix is $[k]_1^e = \begin{bmatrix} k_1 & -k_1 \\ -k_1 & k_1 \end{bmatrix}$.
*   **Element 2:** Connects Node 2 and Node 3. Its stiffness matrix is $[k]_2^e = \begin{bmatrix} k_2 & -k_2 \\ -k_2 & k_2 \end{bmatrix}$.

When assembling, the contributions of each element to the global stiffness matrix $[K]$ are added. For instance, the stiffness associated with the displacement $u_2$ will receive contributions from both Element 1 and Element 2, because Node 2 is common to both.

The global system of equations is of the form:

$$ [K] \{U\} = \{F\} $$

Where:
*   $[K]$ is the global stiffness matrix.
*   $\{U\}$ is the vector of global nodal displacements.
*   $\{F\}$ is the vector of global nodal forces.

---

### Examples:

**Example 1: Single Spring Element**

Consider a spring with stiffness $k = 1000 \, \text{N/m}$. What is its element stiffness matrix?

*   **Solution:**
    Using the formula $[k]^e = \begin{bmatrix} k & -k \\ -k & k \end{bmatrix}$:
    $$ [k]^e = \begin{bmatrix} 1000 & -1000 \\ -1000 & 1000 \end{bmatrix} \, \text{N/m} $$

If Node 1 has displacement $u_1 = 0.01 \, \text{m}$ and Node 2 has displacement $u_2 = 0.02 \, \text{m}$, then the nodal forces are:

$$ \begin{bmatrix} F_1 \\ F_2 \end{bmatrix} = \begin{bmatrix} 1000 & -1000 \\ -1000 & 1000 \end{bmatrix} \begin{bmatrix} 0.01 \\ 0.02 \end{bmatrix} = \begin{bmatrix} 1000(0.01) - 1000(0.02) \\ -1000(0.01) + 1000(0.02) \end{bmatrix} = \begin{bmatrix} 10 - 20 \\ -10 + 20 \end{bmatrix} = \begin{bmatrix} -10 \\ 10 \end{bmatrix} \, \text{N} $$

*   **Interpretation:**
    *   $F_1 = -10 \, \text{N}$: A force of 10 N is acting at Node 1 in the negative direction.
    *   $F_2 = 10 \, \text{N}$: A force of 10 N is acting at Node 2 in the positive direction.
    *   This indicates the spring is under tension, and the internal force is 10 N.

---

### Practice Questions and Exercises:

**Question 1:**
A one-dimensional spring element has a stiffness of $k = 5000 \, \text{N/m}$. Formulate its element stiffness matrix.

**Answer 1:**
The element stiffness matrix is:
$$ [k]^e = \begin{bmatrix} 5000 & -5000 \\ -5000 & 5000 \end{bmatrix} \, \text{N/m} $$

**Question 2:**
For the spring element in Question 1, if the nodal displacements are $u_1 = 0.005 \, \text{m}$ and $u_2 = 0.008 \, \text{m}$, calculate the nodal forces $F_1$ and $F_2$.

**Answer 2:**
$$ \begin{bmatrix} F_1 \\ F_2 \end{bmatrix} = \begin{bmatrix} 5000 & -5000 \\ -5000 & 5000 \end{bmatrix} \begin{bmatrix} 0.005 \\ 0.008 \end{bmatrix} = \begin{bmatrix} 5000(0.005) - 5000(0.008) \\ -5000(0.005) + 5000(0.008) \end{bmatrix} = \begin{bmatrix} 25 - 40 \\ -25 + 40 \end{bmatrix} = \begin{bmatrix} -15 \\ 15 \end{bmatrix} \, \text{N} $$
So, $F_1 = -15 \, \text{N}$ and $F_2 = 15 \, \text{N}$.

**Question 3:**
What happens to the element stiffness matrix if the stiffness $k$ of the spring is doubled?

**Answer 3:**
If the stiffness $k$ is doubled, each entry in the element stiffness matrix will be doubled. For example, if $k$ becomes $2k$, the matrix will be $\begin{bmatrix} 2k & -2k \\ -2k & 2k \end{bmatrix}$. This means the element will be twice as stiff, requiring twice the force for the same displacement.

---

### Important Points to Remember:

*   The stiffness matrix $[k]^e$ for a one-dimensional spring element relates nodal forces to nodal displacements.
*   For a spring with stiffness $k$, the element stiffness matrix is $\begin{bmatrix} k & -k \\ -k & k \end{bmatrix}$.
*   The diagonal terms represent the stiffness contribution at that node, while off-diagonal terms represent the influence of displacement at one node on the force at another.
*   The sum of each row (or column) in the element stiffness matrix should be zero, reflecting the conservation of forces within an isolated element.
*   This fundamental element stiffness matrix is the building block for assembling the global stiffness matrix of more complex structures.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |


### References and Content Incorporation:

*   **J.N. Reddy, "An Introduction to Finite Element Method":** This book provides a rigorous foundation for deriving element matrices, including those for structural elements. Chapter 4 on "One-Dimensional Problems" would detail the formulation of the stiffness matrix based on continuum mechanics principles, albeit with shape functions which are implicitly satisfied by the linear behavior of a spring.
*   **R.D. Cook, "Concepts and Applications of Finite Element Method":** Cook's text is known for its practical approach. It would present the spring as an ideal element to introduce stiffness matrix concepts. The derivation would likely focus on the force-displacement relationship leading directly to the matrix form.
*   **S.S. Bhavikatti, "Finite Element Analysis":** Bhavikatti's book often covers basic elements like springs and bars early on. The formulation presented here aligns with his introductory examples of deriving element stiffness matrices.
*   **J. Fish and T. Belytschko, "A First Course in Finite Elements":** This text would also present the spring element as a simple case to illustrate the process of developing element stiffness matrices from physical laws (Hooke's Law).

The formulation presented above is a standard and widely accepted method found in all these introductory texts for understanding the stiffness matrix concept for a discrete spring element. The knowledge level for CO1 and CO3 is addressed by understanding the basic procedure and forming the element stiffness matrix, respectively.

---