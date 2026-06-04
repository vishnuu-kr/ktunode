---
title: "Derivation of strain -displacement relation- B matrix- bar"
subject: "FINITE ELEMENT METHODS"
module: "Module 3: Derivation of strain "
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf480446429a"
status: "completed"
scrapedAt: "2026-05-20T18:12:59.240Z"
---
# Finite Element Methods: Module 3 - Derivation of Strain

## Topic: Derivation of Strain-Displacement Relation - B Matrix - Bar Element

### Introduction

This module focuses on understanding how strain is related to the displacements within a finite element. We will specifically derive these relationships for a simple one-dimensional bar element, which is fundamental to understanding more complex FEM formulations. This is crucial for understanding CO1, CO2, and CO3.

### Learning Outcomes Covered:

*   **LO1: Understand the governing equations of various physical phenomena and basic procedure of FEM.** (Implicitly covered by understanding how strain arises from displacements, which is a core physical phenomenon in mechanics of materials).
*   **LO2: Apply the coordinate transformation and formulation of shape functions of various element.** (We will see how strain relates to displacements through shape functions, and while explicit coordinate transformation isn't the primary focus here, the concept of local vs. global coordinates is relevant).
*   **LO3: Formulate shape functions and element strain displacement matrix of various element.** (This is the core outcome addressed by this topic. We will derive the strain-displacement matrix, often denoted as the **B** matrix, for a bar element).

### Key Concepts and Definitions

*   **Strain:** A measure of the deformation of a material. In the context of mechanics, it represents the relative displacement of particles in the body. For a one-dimensional bar, strain is defined as the change in length per unit original length.
    *   **Formula (1D):** $\epsilon_x = \frac{du}{dx}$
        *   Where $\epsilon_x$ is the strain in the x-direction and $u$ is the displacement in the x-direction.
*   **Displacement:** The change in position of a point in a body due to applied forces or other stimuli.
*   **Bar Element:** The simplest finite element. It is a one-dimensional element with two nodes, capable of transmitting axial force only.
*   **Shape Functions (N):** Functions that define the displacement field within an element in terms of nodal displacements. They are typically polynomial functions and have the property that at a node, the shape function value is 1, and at all other nodes, it is 0.
*   **Strain-Displacement Matrix (B Matrix):** A matrix that relates the strain vector to the nodal displacement vector. It is derived from the strain-displacement relationship using shape functions.
*   **Nodal Displacements:** The displacements of the nodes of a finite element.
*   **Strain Vector:** A vector containing the strain components. For a 1D bar element, this vector simply contains the axial strain.

### Derivation of Strain-Displacement Relation for a 1D Bar Element

Let's consider a one-dimensional bar element of length $L$.
*   The element has two nodes, Node 1 and Node 2.
*   Let the axial displacement at Node 1 be $u_1$ and at Node 2 be $u_2$.
*   Let $x$ be the coordinate along the bar, with $x=0$ at Node 1 and $x=L$ at Node 2.

**1. Assume a Displacement Field within the Element:**

For a simple bar element, we assume a linear displacement field across the element. This is achieved using linear shape functions.

Let the displacement $u(x)$ at any point $x$ within the element be expressed as:
$u(x) = N_1(x) u_1 + N_2(x) u_2$

Where $N_1(x)$ and $N_2(x)$ are the shape functions for Node 1 and Node 2, respectively.

**Formulation of Linear Shape Functions:**

The shape functions must satisfy the following conditions:
*   $N_1(x=0) = 1$, $N_1(x=L) = 0$
*   $N_2(x=0) = 0$, $N_2(x=L) = 1$

For a linear variation, we can define them as:
$N_1(x) = 1 - \frac{x}{L}$
$N_2(x) = \frac{x}{L}$

**Check the properties:**
*   At $x=0$: $N_1(0) = 1 - 0/L = 1$, $N_2(0) = 0/L = 0$. (Correct)
*   At $x=L$: $N_1(L) = 1 - L/L = 0$, $N_2(L) = L/L = 1$. (Correct)

So, the displacement field can be written as:
$u(x) = (1 - \frac{x}{L}) u_1 + (\frac{x}{L}) u_2$

This can be written in matrix form:
$u(x) = \begin{bmatrix} 1 - \frac{x}{L} & \frac{x}{L} \end{bmatrix} \begin{Bmatrix} u_1 \\ u_2 \end{Bmatrix}$

Let $\mathbf{u} = \begin{Bmatrix} u_1 \\ u_2 \end{Bmatrix}$ be the vector of nodal displacements.
Let $\mathbf{N}(x) = \begin{bmatrix} 1 - \frac{x}{L} & \frac{x}{L} \end{bmatrix}$ be the shape function matrix.
Then, $u(x) = \mathbf{N}(x) \mathbf{u}$

**(Ref: Reddy, Chapter 3.2, Page 61)**
**(Ref: Cook, Chapter 5, Page 104)**

**2. Derive the Strain-Displacement Relationship:**

The strain in a one-dimensional bar is the derivative of the displacement with respect to the axial coordinate:
$\epsilon_x = \frac{du}{dx}$

Substitute the expression for $u(x)$:
$\epsilon_x = \frac{d}{dx} \left( (1 - \frac{x}{L}) u_1 + (\frac{x}{L}) u_2 \right)$

Differentiate with respect to $x$:
$\epsilon_x = (-\frac{1}{L}) u_1 + (\frac{1}{L}) u_2$

**3. Formulate the B Matrix:**

We want to express the strain in the form $\epsilon_x = \mathbf{B} \mathbf{u}$, where $\mathbf{u} = \begin{Bmatrix} u_1 \\ u_2 \end{Bmatrix}$.

From the derived strain equation:
$\epsilon_x = \begin{bmatrix} -\frac{1}{L} & \frac{1}{L} \end{bmatrix} \begin{Bmatrix} u_1 \\ u_2 \end{Bmatrix}$

Therefore, the **B matrix** for a 1D bar element is:
$\mathbf{B} = \begin{bmatrix} -\frac{1}{L} & \frac{1}{L} \end{bmatrix}$

**(Ref: Reddy, Chapter 3.2, Page 62)**
**(Ref: Bhavikatti, Chapter 4, Page 66)**
**(Ref: Fish & Belytschko, Chapter 3, Page 59)**

**Important Points to Remember about the B Matrix for a Bar Element:**

*   The **B** matrix is **constant** for a linear bar element because the shape functions are linear, and their derivatives are constants.
*   The **B** matrix is directly related to the spatial derivatives of the shape functions.
*   It has dimensions of (number of strain components) x (number of nodal displacements). For a 1D bar, it's 1x2.
*   The **B** matrix is crucial for stiffness matrix formulation ($[k] = \int_V [B]^T [E] [B] dV$) and stress calculation ($[\sigma] = [E] [\epsilon] = [E] [B] \{\mathbf{u}\}$).

### Example

Consider a bar element of length $L = 100$ mm.
The nodal displacements are $u_1 = 0.5$ mm and $u_2 = 1.2$ mm.

**1. Determine the B Matrix:**
$\mathbf{B} = \begin{bmatrix} -\frac{1}{100} & \frac{1}{100} \end{bmatrix} = \begin{bmatrix} -0.01 & 0.01 \end{bmatrix}$ mm$^{-1}$

**2. Calculate the Strain:**
$\epsilon_x = \mathbf{B} \mathbf{u} = \begin{bmatrix} -0.01 & 0.01 \end{bmatrix} \begin{Bmatrix} 0.5 \\ 1.2 \end{Bmatrix}$
$\epsilon_x = (-0.01 \times 0.5) + (0.01 \times 1.2)$
$\epsilon_x = -0.005 + 0.012$
$\epsilon_x = 0.007$ mm/mm (or unitless)

**3. Interpret the Result:**
The strain in the bar element is 0.007. This means the length of the element has increased by 0.7% of its original length.

### Connection to Course Outcomes:

*   **CO1 (K2):** Understanding the concept of strain as a physical phenomenon directly linked to displacement.
*   **CO2 (K3):** The derivation relies on linear shape functions for the bar element.
*   **CO3 (K4):** This entire topic is about formulating the element strain displacement matrix (B matrix) for a bar element.

### Practice Questions

1.  A 1D bar element has a length of 500 mm. If the nodal displacements are $u_1 = 0.2$ mm and $u_2 = 0.5$ mm, what is the strain in the element?
2.  Derive the strain-displacement relation for a 1D bar element using linear shape functions. Clearly show the derivation of the **B** matrix.
3.  Explain the significance of the **B** matrix in the Finite Element Method. What are its dimensions for a 1D bar element?

### Answers to Practice Questions

1.  **Answer:**
    *   **B Matrix:** $\mathbf{B} = \begin{bmatrix} -\frac{1}{500} & \frac{1}{500} \end{bmatrix} = \begin{bmatrix} -0.002 & 0.002 \end{bmatrix}$ mm$^{-1}$
    *   **Nodal Displacement Vector:** $\mathbf{u} = \begin{Bmatrix} 0.2 \\ 0.5 \end{Bmatrix}$ mm
    *   **Strain Calculation:** $\epsilon_x = \mathbf{B} \mathbf{u} = \begin{bmatrix} -0.002 & 0.002 \end{bmatrix} \begin{Bmatrix} 0.2 \\ 0.5 \end{Bmatrix} = (-0.002 \times 0.2) + (0.002 \times 0.5) = -0.0004 + 0.001 = 0.0006$ mm/mm.

2.  **Answer:**
    *   Assume displacement field: $u(x) = N_1(x)u_1 + N_2(x)u_2$
    *   Linear shape functions: $N_1(x) = 1 - x/L$, $N_2(x) = x/L$.
    *   Displacement in matrix form: $u(x) = \begin{bmatrix} 1 - x/L & x/L \end{bmatrix} \begin{Bmatrix} u_1 \\ u_2 \end{Bmatrix}$
    *   Strain definition: $\epsilon_x = \frac{du}{dx}$
    *   Substitute displacement: $\epsilon_x = \frac{d}{dx} \left( (1 - x/L)u_1 + (x/L)u_2 \right) = (-1/L)u_1 + (1/L)u_2$
    *   **B Matrix:** $\epsilon_x = \begin{bmatrix} -1/L & 1/L \end{bmatrix} \begin{Bmatrix} u_1 \\ u_2 \end{Bmatrix}$, so $\mathbf{B} = \begin{bmatrix} -1/L & 1/L \end{bmatrix}$.

3.  **Answer:**
    *   **Significance:** The **B** matrix is fundamental in FEM as it directly links the element strains to its nodal displacements. It is a key component in deriving the element stiffness matrix ($[k] = \int_V [B]^T [D] [B] dV$, where [D] is the material property matrix, often just [E] for 1D bar) and in calculating element stresses ($[\sigma] = [D] [\epsilon] = [D] [B] \{\mathbf{u}\}$).
    *   **Dimensions for 1D bar element:** The **B** matrix has dimensions 1x2. The '1' represents the single strain component (axial strain), and the '2' represents the two nodal displacements ($u_1, u_2$).

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |


### References

*   Reddy, J. N. (2009). *An Introduction to Finite Element Method* (3rd ed.). McGrawHillEducation. (Chapter 3)
*   Cook, R. D. (2008). *Concepts and Applications of Finite Element Method* (3rd ed.). Wiley. (Chapter 5)
*   Bhavikatti, S. S. (2008). *Finite Element Analysis* (3rd ed.). New Age Publisher. (Chapter 4)
*   Fish, J., & Belytschko, T. (2007). *A First Course in Finite Elements* (2nd ed.). John Wiley & Sons, Ltd. (Chapter 3)
*   Segerlind, L. J. (2010). *Applied Finite Element Analysis* (2nd ed.). John Wiley and Sons.
*   Ramamurthi, G. *Applied Finite Element Analysis*. I K International Publishing House Pvt. Ltd. (2nd Edition)
*   Hutton, D. V. (2009). *Fundamentals of Finite Element Methods* (3rd ed.). McGrawHillEducation.

This concludes the notes for the derivation of the strain-displacement relation and the **B** matrix for a 1D bar element. This foundational understanding is critical for subsequent topics in FEM.