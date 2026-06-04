---
title: "Formulation of stiffness matrix- one dimensional spring"
subject: "FINITE ELEMENT METHODS"
module: "Module 1: Introduction FEM"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf480446428f"
status: "completed"
scrapedAt: "2026-05-20T18:12:53.074Z"
---
# FINITE ELEMENT METHODS - Module 1: Introduction FEM

## Topic: Formulation of Stiffness Matrix - One-Dimensional Spring

---

### **1. Introduction to Finite Element Method (FEM)**

**1.1 What is FEM?**

The Finite Element Method (FEM) is a powerful numerical technique used to find approximate solutions to boundary value problems governed by partial differential equations. It's widely used in engineering and physics to analyze complex physical phenomena like structural mechanics, heat transfer, fluid flow, and electromagnetics.

**1.2 The FEM Procedure (General Overview)**

The core idea of FEM is to discretize a complex domain (the problem's physical object or space) into smaller, simpler subdomains called **finite elements**. These elements are connected at specific points called **nodes**. By analyzing the behavior of each element and assembling them, we can approximate the behavior of the entire structure.

The general FEM procedure involves:

1.  **Discretization:** Dividing the continuous domain into a finite number of elements and nodes.
2.  **Element Formulation:** Developing mathematical equations (e.g., stiffness matrices) for each element.
3.  **Assembly:** Combining the element equations into a global system of equations that represents the entire structure.
4.  **Application of Boundary Conditions:** Incorporating known values (e.g., fixed displacements, applied forces) into the global equations.
5.  **Solution:** Solving the system of algebraic equations to obtain nodal unknowns (e.g., displacements, temperatures).
6.  **Post-processing:** Deriving other quantities of interest (e.g., stresses, strains) from the nodal solutions.

**1.3 Key Concepts & Definitions:**

*   **Domain:** The physical region over which the problem is defined.
*   **Element:** A small, simple subdomain of the original domain.
*   **Node:** A point where elements are connected. Nodes are typically located at the element boundaries.
*   **Degree of Freedom (DOF):** An unknown quantity at a node (e.g., displacement, rotation, temperature).
*   **Element Stiffness Matrix ([k]):** A matrix that relates the nodal forces to the nodal displacements for a single element. It represents the element's resistance to deformation.
*   **Global Stiffness Matrix ([K]):** The assembled stiffness matrix for the entire structure, representing the relationship between all nodal forces and displacements.
*   **Displacement Vector {d}:** A vector containing the unknown nodal displacements.
*   **Force Vector {f}:** A vector containing the applied nodal forces.
*   **Element Equations:** Mathematical relationships governing the behavior of an element.
*   **Global Equations:** Assembled equations representing the entire structure.

**1.4 Learning Outcome Alignment:**

*   **CO1 (K2):** This section introduces the fundamental concepts and the basic procedure of FEM, aligning with the knowledge level of understanding governing equations and the FEM process.

**1.5 Textbook References:**

*   **Reddy, J.N. (2009):** Chapter 1 provides a foundational introduction to FEM, including its historical development and general steps.
*   **Cook, R.D. (2008):** Chapter 1 covers the basic concepts of discretization, elements, nodes, and the FEM approach.
*   **Bhavikatti, S.S. (2008):** Chapter 1 introduces the basic idea of FEM and its application.
*   **Fish, J., & Belytschko, T. (2007):** Chapter 1 offers an introductory overview of FEM and its problem-solving capabilities.

---

### **2. Formulation of Stiffness Matrix - One-Dimensional Spring Element**

This section focuses on deriving the stiffness matrix for the simplest type of element: a one-dimensional spring. This serves as a building block for understanding more complex elements.

**2.1 Physical Interpretation of a Spring Element**

A spring element is characterized by its stiffness, typically denoted by '$k$'. It resists deformation. The force required to stretch or compress a spring is directly proportional to the amount of deformation, described by Hooke's Law:

$$F = k \Delta L$$

where:
*   $F$ is the force applied
*   $k$ is the spring stiffness
*   $\Delta L$ is the change in length (deformation)

**2.2 Defining the One-Dimensional Spring Element**

Consider a simple one-dimensional spring element connecting two nodes, Node 1 and Node 2.

*   **Nodes:** Let Node 1 have displacement $u_1$ and Node 2 have displacement $u_2$.
*   **Element Stiffness:** Let the stiffness of the spring element be $k$.
*   **Forces:** Let $f_1$ be the force acting at Node 1 and $f_2$ be the force acting at Node 2.

**2.3 Developing the Element Equations (Using Direct Equilibrium Approach)**

We can derive the element stiffness matrix by considering the forces and displacements at the nodes.

**Assumption:** The spring is oriented along a single axis (e.g., x-axis).

**2.3.1 Behavior of Node 1:**

When a displacement $u_1$ is applied at Node 1, and Node 2 is held fixed ($u_2 = 0$), the spring undergoes a deformation equal to $u_1$. The force $f_1$ exerted by the spring at Node 1 is then:

$$f_1 = k (u_1 - u_2)$$

Since $u_2 = 0$, we have:

$$f_1 = k u_1$$

From Newton's third law (action-reaction), the force $f_2$ at Node 2 due to the deformation at Node 1 is equal and opposite to $f_1$:

$$f_2 = -f_1 = -k u_1$$

So, when $u_2 = 0$:
*   $f_1 = k u_1$
*   $f_2 = -k u_1$

**2.3.2 Behavior of Node 2:**

When a displacement $u_2$ is applied at Node 2, and Node 1 is held fixed ($u_1 = 0$), the spring undergoes a deformation equal to $u_2$. The force $f_2$ exerted by the spring at Node 2 is then:

$$f_2 = k (u_2 - u_1)$$

Since $u_1 = 0$, we have:

$$f_2 = k u_2$$

From Newton's third law, the force $f_1$ at Node 1 due to the deformation at Node 2 is equal and opposite to $f_2$:

$$f_1 = -f_2 = -k u_2$$

So, when $u_1 = 0$:
*   $f_1 = -k u_2$
*   $f_2 = k u_2$

**2.3.3 Assembling the Element Stiffness Matrix:**

We can combine these relationships into a matrix form:

$$\begin{bmatrix} f_1 \\ f_2 \end{bmatrix} = \begin{bmatrix} \dots & \dots \\ \dots & \dots \end{bmatrix} \begin{bmatrix} u_1 \\ u_2 \end{bmatrix}$$

Let's fill in the matrix based on the above observations:

*   **First row (for $f_1$):**
    *   When $u_1=1, u_2=0$, $f_1 = k$. So the first entry is $k$.
    *   When $u_1=0, u_2=1$, $f_1 = -k$. So the second entry is $-k$.
    *   Thus, $f_1 = k u_1 - k u_2$.

*   **Second row (for $f_2$):**
    *   When $u_1=1, u_2=0$, $f_2 = -k$. So the first entry is $-k$.
    *   When $u_1=0, u_2=1$, $f_2 = k$. So the second entry is $k$.
    *   Thus, $f_2 = -k u_1 + k u_2$.

Combining these, the element stiffness matrix $[k]^e$ for a one-dimensional spring element is:

$$[k]^e = \begin{bmatrix} k & -k \\ -k & k \end{bmatrix}$$

And the element force-displacement relationship is:

$$\begin{Bmatrix} f_1 \\ f_2 \end{Bmatrix}^e = \begin{bmatrix} k & -k \\ -k & k \end{bmatrix} \begin{Bmatrix} u_1 \\ u_2 \end{Bmatrix}$$

This equation is valid for any deformation, as the relationship is linear.

**2.4 Learning Outcome Alignment:**

*   **CO1 (K2):** Understanding the governing equation ($F=k\Delta L$) for a spring and how it relates to nodal forces and displacements.
*   **CO3 (K4):** Formulating the stiffness matrix for a 1D spring element, which is a fundamental step in FEM analysis.

**2.5 Textbook References:**

*   **Reddy, J.N. (2009):** Chapter 3, Section 3.2.1, discusses the stiffness matrix for a bar element, which is analogous to a spring element with axial stiffness.
*   **Cook, R.D. (2008):** Chapter 3, Section 3.2, derives the stiffness matrix for a two-node truss element, which is directly applicable to a spring.
*   **Bhavikatti, S.S. (2008):** Chapter 3, Section 3.2, covers the stiffness matrix of a 1D bar element.
*   **Fish, J., & Belytschko, T. (2007):** Chapter 2, Section 2.2, introduces the stiffness matrix for a 1D bar element.
*   **Segerlind, L.J. (2010):** Chapter 4, Section 4.2, explains the derivation of the stiffness matrix for a bar element.
*   **Ramamurthi, G. (2nd Ed.):** Likely covers basic stiffness matrix formulations, including bar elements.
*   **Hutton, D.V. (2009):** Chapter 3, Section 3.3, derives the stiffness matrix for a 1D bar element.

**2.6 Important Points to Remember:**

*   The stiffness matrix is **symmetric**.
*   The sum of entries in each column (and row) of the stiffness matrix is **zero**. This reflects the conservation of force.
*   The element stiffness matrix represents the internal forces generated within the element due to its deformation.

---

### **3. Example: Simple Spring Assembly**

Let's consider a system of two spring elements connected in series.

**Problem:**
A system consists of two springs, Element 1 with stiffness $k_1$ and Element 2 with stiffness $k_2$, connected end-to-end. The system is subjected to a force $P$ at the free end of Element 2. The other end (of Element 1) is fixed. Determine the displacement at the junction of the two springs and at the free end.

**Solution Steps using FEM:**

1.  **Discretization:**
    *   Nodes: 3 nodes are identified. Node 1 (fixed end), Node 2 (junction), Node 3 (free end).
    *   Elements: Two elements. Element 1 connects Node 1 and Node 2. Element 2 connects Node 2 and Node 3.

2.  **Element Stiffness Matrices:**
    *   **Element 1 (connecting nodes 1 and 2):**
        $$[k]^1 = \begin{bmatrix} k_1 & -k_1 \\ -k_1 & k_1 \end{bmatrix}$$
        The nodal displacements are $u_1$ and $u_2$. The nodal forces are $f_1$ and $f_2$.

    *   **Element 2 (connecting nodes 2 and 3):**
        $$[k]^2 = \begin{bmatrix} k_2 & -k_2 \\ -k_2 & k_2 \end{bmatrix}$$
        The nodal displacements are $u_2$ and $u_3$. The nodal forces are $f_2'$ and $f_3$.

3.  **Assembly of Global Stiffness Matrix:**
    The global system equation is $\{F\} = [K] \{U\}$, where $\{F\}$ is the global force vector and $\{U\}$ is the global displacement vector.
    The global force vector is $\{F\}^T = \begin{bmatrix} F_1 & F_2 & F_3 \end{bmatrix}$.
    The global displacement vector is $\{U\}^T = \begin{bmatrix} u_1 & u_2 & u_3 \end{bmatrix}$.
    The global stiffness matrix $[K]$ is of size 3x3. We assemble it by placing the element stiffness matrices at their corresponding nodal locations:

    $$[K] = \begin{bmatrix} k_1 & -k_1 & 0 \\ -k_1 & k_1 + k_2 & -k_2 \\ 0 & -k_2 & k_2 \end{bmatrix}$$

    *   Row 1: From Element 1, $k_1$ at (1,1), $-k_1$ at (1,2).
    *   Row 2: From Element 1, $-k_1$ at (2,1). From Element 2, $k_2$ at (2,2), $-k_2$ at (2,3). So, $-k_1 + k_2$ at (2,2).
    *   Row 3: From Element 2, $-k_2$ at (3,2), $k_2$ at (3,3).

4.  **Application of Boundary Conditions:**
    *   The system is fixed at Node 1: $u_1 = 0$.
    *   A force $P$ is applied at Node 3: $F_3 = P$.
    *   There is no external force at Node 1: $F_1 = 0$.
    *   At the junction (Node 2), the forces from Element 1 and Element 2 must balance the applied external force (if any). In this case, no external force is applied at Node 2, so $F_2 = 0$.

    The global system becomes:
    $$\begin{Bmatrix} 0 \\ 0 \\ P \end{Bmatrix} = \begin{bmatrix} k_1 & -k_1 & 0 \\ -k_1 & k_1 + k_2 & -k_2 \\ 0 & -k_2 & k_2 \end{bmatrix} \begin{Bmatrix} 0 \\ u_2 \\ u_3 \end{Bmatrix}$$

5.  **Solution:**
    We can solve this system of equations. Due to the boundary condition $u_1 = 0$, we can reduce the matrix and vector size by removing the first row and first column.

    The reduced system is:
    $$\begin{Bmatrix} 0 \\ P \end{Bmatrix} = \begin{bmatrix} k_1 + k_2 & -k_2 \\ -k_2 & k_2 \end{bmatrix} \begin{Bmatrix} u_2 \\ u_3 \end{Bmatrix}$$

    Now we have two equations:
    (1) $0 = (k_1 + k_2)u_2 - k_2 u_3$
    (2) $P = -k_2 u_2 + k_2 u_3$

    From equation (1):
    $(k_1 + k_2)u_2 = k_2 u_3$
    $u_3 = \frac{k_1 + k_2}{k_2} u_2$

    Substitute this into equation (2):
    $P = -k_2 u_2 + k_2 \left(\frac{k_1 + k_2}{k_2} u_2\right)$
    $P = -k_2 u_2 + (k_1 + k_2) u_2$
    $P = k_1 u_2 + k_2 u_2 - k_2 u_2$
    $P = k_1 u_2$
    $$u_2 = \frac{P}{k_1}$$

    Now, substitute $u_2$ back into the expression for $u_3$:
    $u_3 = \frac{k_1 + k_2}{k_2} \left(\frac{P}{k_1}\right)$
    $$u_3 = P \left(\frac{k_1 + k_2}{k_1 k_2}\right) = P \left(\frac{1}{k_2} + \frac{1}{k_1}\right)$$

    This result is consistent with classical mechanics for springs in series, where the total compliance is the sum of individual compliances ($1/k_{total} = 1/k_1 + 1/k_2$).

**6. Practice Questions/Exercises:**

1.  **Question:** A single spring element with stiffness $k = 500 \, \text{N/m}$ connects two nodes. The displacement at Node 1 is $u_1 = 0.01 \, \text{m}$ and the displacement at Node 2 is $u_2 = 0.02 \, \text{m}$. Calculate the forces $f_1$ and $f_2$ at Node 1 and Node 2, respectively.
    **Answer:**
    Using the element stiffness matrix:
    $$[k]^e = \begin{bmatrix} 500 & -500 \\ -500 & 500 \end{bmatrix}$$
    $$\begin{Bmatrix} f_1 \\ f_2 \end{Bmatrix}^e = \begin{bmatrix} 500 & -500 \\ -500 & 500 \end{bmatrix} \begin{Bmatrix} 0.01 \\ 0.02 \end{Bmatrix}$$
    $$f_1 = (500)(0.01) + (-500)(0.02) = 5 - 10 = -5 \, \text{N}$$
    $$f_2 = (-500)(0.01) + (500)(0.02) = -5 + 10 = 5 \, \text{N}$$
    So, $f_1 = -5 \, \text{N}$ and $f_2 = 5 \, \text{N}$.

2.  **Question:** Consider a single spring element with stiffness $k$. If the displacement vector is $\{u\}^T = \begin{bmatrix} 0.02 & 0.05 \end{bmatrix} \, \text{m}$ and the element stiffness matrix is $[k] = \begin{bmatrix} 100 & -100 \\ -100 & 100 \end{bmatrix} \, \text{N/m}$, what is the force vector $\{f\}^T$?
    **Answer:**
    $$\begin{Bmatrix} f_1 \\ f_2 \end{Bmatrix} = \begin{bmatrix} 100 & -100 \\ -100 & 100 \end{bmatrix} \begin{Bmatrix} 0.02 \\ 0.05 \end{Bmatrix}$$
    $$f_1 = (100)(0.02) + (-100)(0.05) = 2 - 5 = -3 \, \text{N}$$
    $$f_2 = (-100)(0.02) + (100)(0.05) = -2 + 5 = 3 \, \text{N}$$
    The force vector is $\{f\}^T = \begin{bmatrix} -3 & 3 \end{Bmatrix} \, \text{N}$.

3.  **Question:** Two spring elements are connected in parallel. Element 1 has stiffness $k_1 = 200 \, \text{N/m}$ and Element 2 has stiffness $k_2 = 300 \, \text{N/m}$. They both connect Node A to Node B. Derive the equivalent stiffness matrix for this parallel combination assuming Node A has displacement $u_A$ and Node B has displacement $u_B$.
    **Answer:**
    For a single spring element connecting nodes $i$ and $j$ with stiffness $k$:
    $$[k]^e = \begin{bmatrix} k & -k \\ -k & k \end{Bmatrix}$$
    Element 1:
    $$[k]^1 = \begin{bmatrix} k_1 & -k_1 \\ -k_1 & k_1 \end{Bmatrix} = \begin{bmatrix} 200 & -200 \\ -200 & 200 \end{bmatrix}$$
    Element 2:
    $$[k]^2 = \begin{bmatrix} k_2 & -k_2 \\ -k_2 & k_2 \end{Bmatrix} = \begin{bmatrix} 300 & -300 \\ -300 & 300 \end{bmatrix}$$
    When elements are in parallel, their stiffness matrices are added at the corresponding nodal locations to form the global stiffness matrix. Assuming Node A is global node 1 and Node B is global node 2:
    $$[K]_{parallel} = [k]^1 + [k]^2$$
    $$[K]_{parallel} = \begin{bmatrix} 200 & -200 \\ -200 & 200 \end{bmatrix} + \begin{bmatrix} 300 & -300 \\ -300 & 300 \end{bmatrix}$$
    $$[K]_{parallel} = \begin{bmatrix} 500 & -500 \\ -500 & 500 \end{bmatrix}$$
    This is equivalent to a single spring with stiffness $k_{eq} = k_1 + k_2 = 200 + 300 = 500 \, \text{N/m}$.

---

### **4. Relating to Course Outcomes**

*   **CO1 (K2):** This module provides the foundational understanding of the FEM process and introduces the governing equation for a basic spring element.
*   **CO2 (K3):** While not directly covered in this specific topic of "formulation of stiffness matrix," the concept of nodal displacements and forces is a precursor to understanding coordinate transformations and shape functions in later modules.
*   **CO3 (K4):** The core of this topic is the formulation of the stiffness matrix for a 1D spring element, directly aligning with this outcome.
*   **CO4 (K5):** This topic focuses on the formulation of stiffness matrices. Stress and strain calculations using energy methods or weighted residual formulations are typically covered in later modules once the stiffness matrices for various element types are established.
*   **CO5 (K4):** Similarly, iso-parametric elements are a more advanced topic and are not directly addressed in the basic formulation of a 1D spring element's stiffness matrix.

---

This concludes the introduction to the formulation of the stiffness matrix for a one-dimensional spring element. This fundamental concept is critical for understanding more complex FEM applications.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
