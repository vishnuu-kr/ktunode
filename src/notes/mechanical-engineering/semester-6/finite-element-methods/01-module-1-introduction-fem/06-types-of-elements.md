---
title: "Types of elements"
subject: "FINITE ELEMENT METHODS"
module: "Module 1: Introduction FEM"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1651d0cf4804463841"
status: "completed"
scrapedAt: "2026-05-20T18:03:54.013Z"
---
# FINITE ELEMENT METHODS - Module 1: Introduction to FEM

## Topic: Types of Elements

**Learning Outcomes:**

*   To understand the different classifications of finite elements used in FEM.
*   To identify the characteristics and applications of various element types.
*   To recognize how element geometry and nodal degrees of freedom influence the analysis.

**Course Outcomes Alignment:**

*   **CO1 (K2):** Understanding the basic procedure of FEM, which includes the selection of appropriate element types.
*   **CO2 (K3):** Applying coordinate transformations and formulating shape functions, which are dependent on the chosen element type.

---

### 1. Introduction to Finite Elements

The finite element method (FEM) is a powerful numerical technique used to solve complex engineering and mathematical problems. At its core, FEM involves discretizing a continuous domain into smaller, interconnected subdomains called **finite elements**. These elements are defined by a set of **nodes**, which are points where the unknown variables (e.g., displacement, temperature) are calculated. The behavior of the solution within each element is approximated using **shape functions** (also known as interpolation functions).

The process of discretizing a domain into elements and defining their properties is crucial for setting up a FEM analysis. The choice of element type significantly impacts the accuracy, computational cost, and suitability of the analysis for a given problem.

---

### 2. Classification of Finite Elements

Finite elements can be classified based on several criteria:

*   **Geometry:** Based on the shape of the element.
*   **Dimensionality:** Based on the dimension of the problem being solved (1D, 2D, 3D).
*   **Number of Nodes:** Based on how many nodes define the element.
*   **Interpolation Functions:** Based on the type of polynomial used to approximate the solution within the element.
*   **Behavior:** Based on the physical phenomena they are designed to model.

Let's explore these classifications in detail.

#### 2.1. Classification Based on Geometry and Dimensionality

This is the most fundamental classification, describing the physical shape and dimension of the elements.

##### 2.1.1. One-Dimensional (1D) Elements

These elements are used to model problems in one spatial dimension, typically along a line or curve.

*   **Types:**
    *   **Line Elements:**
        *   **Two-node linear line element (line segment):** Has two nodes, one at each end. Assumes a linear variation of the unknown variable within the element.
        *   **Three-node quadratic line element (line segment):** Has three nodes, two at the ends and one at the midpoint. Assumes a quadratic variation.
*   **Applications:**
    *   Axial deformation of rods and bars.
    *   Torsion of shafts.
    *   Heat conduction in slender objects.
    *   Flow in pipes.
*   **Example:** A simple truss member subjected to axial load.

##### 2.1.2. Two-Dimensional (2D) Elements

These elements are used to model problems in two spatial dimensions, typically in a plane or on a surface.

*   **Types:**
    *   **Triangular Elements:**
        *   **Three-node linear triangle (constant strain triangle - CST):** Nodes at the vertices. Assumes linear variation of the unknown variable. This is the simplest 2D element.
        *   **Six-node quadratic triangle (linear strain triangle - LST):** Nodes at vertices and midpoints of edges. Assumes quadratic variation.
    *   **Quadrilateral Elements:**
        *   **Four-node linear quadrilateral (bilinear quadrilateral):** Nodes at the vertices. Assumes bilinear variation.
        *   **Eight-node quadratic quadrilateral (isoparametric quadrilateral):** Nodes at vertices and midpoints of edges. Assumes quadratic variation.
        *   **Nine-node serendipity quadrilateral:** Nodes at vertices, midpoints of edges, and center of the element.
*   **Applications:**
    *   Stress analysis of plates and shells.
    *   Heat conduction in thin plates.
    *   Fluid flow in channels.
    *   Electromagnetic field analysis.
*   **Example:** Analyzing the stress distribution in a thin plate with a hole.

##### 2.1.3. Three-Dimensional (3D) Elements

These elements are used to model problems in three spatial dimensions.

*   **Types:**
    *   **Tetrahedral Elements:**
        *   **Four-node linear tetrahedron:** Nodes at the vertices. Assumes linear variation.
        *   **Ten-node quadratic tetrahedron:** Nodes at vertices and midpoints of edges. Assumes quadratic variation.
    *   **Hexahedral (Brick) Elements:**
        *   **Eight-node linear hexahedron:** Nodes at the vertices. Assumes trilinear variation.
        *   **Twenty-node quadratic hexahedron:** Nodes at vertices and midpoints of edges. Assumes quadratic variation.
    *   **Prismatic and Pyramidal Elements:** Less commonly used but can be useful for transitioning between different mesh types or for specific geometries.
*   **Applications:**
    *   Stress analysis of solid structures (e.g., machine parts, bridges).
    *   Heat transfer in solid bodies.
    *   Fluid flow in complex geometries.
    *   Analysis of composite materials.
*   **Example:** Stress analysis of a solid engine block.

#### 2.2. Classification Based on Number of Nodes and Shape Functions

This classification focuses on the detail within an element and how the primary variable is approximated.

##### 2.2.1. Linear Elements (First-order)

*   **Description:** These elements use linear shape functions. The variation of the unknown variable within the element is linear.
*   **Characteristics:**
    *   Fewer nodes per element (e.g., 2 nodes for line, 3 for triangle, 4 for quadrilateral).
    *   Simpler to formulate.
    *   Lower computational cost.
    *   Tend to be "stiffer" and can underestimate displacements.
    *   Can lead to inaccurate results in regions of high stress gradients or bending.
*   **Example:** 2-node line element, 3-node CST.

##### 2.2.2. Quadratic Elements (Second-order)

*   **Description:** These elements use quadratic shape functions. The variation of the unknown variable within the element is quadratic.
*   **Characteristics:**
    *   More nodes per element (e.g., 3 nodes for line, 6 for triangle, 8 or 9 for quadrilateral).
    *   More complex to formulate.
    *   Higher computational cost.
    *   Can capture bending and stress concentrations more accurately than linear elements.
    *   Generally provide more accurate results for a given mesh density compared to linear elements.
*   **Example:** 3-node quadratic line element, 6-node LST, 8-node isoparametric quadrilateral.

##### 2.2.3. Higher-order Elements (Third-order and above)

*   **Description:** These elements use cubic or higher-order polynomial shape functions.
*   **Characteristics:**
    *   Even more nodes per element.
    *   Most complex to formulate and computationally expensive.
    *   Can provide very high accuracy for problems with smooth solutions.
    *   Often used in specialized applications where extreme accuracy is required.

**Important Point (Reddy, 3rd Ed., Chapter 2):** The choice between linear and quadratic elements depends on the problem complexity and desired accuracy. For problems with significant bending or rapidly changing stress fields, quadratic elements are generally preferred.

#### 2.3. Classification Based on Behavior/Formulation

This classification relates to how the element is formulated and the physical behavior it models.

##### 2.3.1. Serendipity Elements

*   **Description:** Elements that have nodes only on their boundary (edges and corners) and no interior nodes. The order of interpolation is determined by the number of nodes along the sides.
*   **Characteristics:**
    *   Efficient in terms of the number of degrees of freedom (DOFs) for a given polynomial order.
    *   Commonly used for quadrilateral and hexahedral elements.
*   **Example:** The 8-node serendipity quadrilateral (Lagrangian quadrilateral).

##### 2.3.2. Lagrangian Elements

*   **Description:** Elements that can have both boundary nodes and interior nodes. The interpolation is defined over a parent domain.
*   **Characteristics:**
    *   Offer more flexibility in defining element behavior.
    *   Can include internal nodes to capture more complex variations.
*   **Example:** The 9-node Lagrangian quadrilateral (which includes a center node).

##### 2.3.3. Isoparametric Elements

*   **Description:** Elements where the number of nodes used for geometry definition is the same as the number of nodes used for interpolation of the field variable. The element's geometry in the physical domain is mapped from a simple parent (reference) domain (e.g., a square or triangle) using the same shape functions used for displacement interpolation.
*   **Characteristics:**
    *   Enables modeling of curved boundaries and complex shapes accurately.
    *   Revolutionized FEM for practical applications.
    *   Involves coordinate transformations using Jacobian matrices.
*   **Example:** 8-node isoparametric quadrilateral, 10-node isoparametric tetrahedron.
*   **Reference:** This is a key concept for CO5. (Fish & Belytschko, 2nd Ed., Chapter 6; Cook, 3rd Ed., Chapter 7).

##### 2.3.4. Subparametric Elements

*   **Description:** Elements where the number of nodes used for geometry definition is less than the number of nodes used for interpolation of the field variable.
*   **Characteristics:**
    *   Used when a simpler geometric representation is sufficient, but a higher-order interpolation is needed for accuracy.
    *   Less common than isoparametric elements.

##### 2.3.5. Superparametric Elements

*   **Description:** Elements where the number of nodes used for geometry definition is greater than the number of nodes used for interpolation of the field variable.
*   **Characteristics:**
    *   Used when a more detailed geometric definition is required than what can be achieved with the interpolation order.
    *   Less common than isoparametric elements.

#### 2.4. Classification Based on Degrees of Freedom (DOFs)

The DOFs at each node dictate the type of analysis and the nature of the solution being sought.

*   **Scalar DOFs:** Represent a single scalar quantity at a node (e.g., temperature, potential).
    *   Example: Heat transfer analysis using bar elements or 2D heat elements.
*   **Vector DOFs:** Represent multiple components of a vector quantity at a node (e.g., displacement, rotation).
    *   Example: Structural analysis using frame elements (displacement and rotation at nodes).
    *   A 2D structural element might have 2 translational DOFs per node.
    *   A 3D structural element might have 3 translational and 3 rotational DOFs per node.

#### 2.5. Classification Based on Application

Elements can also be classified by the specific physical problem they are tailored to solve.

*   **Structural Elements:** Designed to model mechanical behavior (stress, strain, displacement).
    *   Bar elements, beam elements, truss elements, frame elements, plate elements, shell elements, solid elements.
*   **Heat Transfer Elements:** Designed to model temperature and heat flux.
    *   1D conduction elements, 2D conduction elements, 3D conduction elements, convection elements.
*   **Fluid Flow Elements:** Designed to model velocity, pressure, and flow rate.
    *   Streamline elements, potential flow elements.
*   **Acoustic Elements:** Designed to model sound pressure.

---

### 3. Key Concepts and Definitions

*   **Node:** A point in the finite element mesh where the primary variables are calculated.
*   **Element:** A small, interconnected subdomain of the continuous domain.
*   **Mesh:** A collection of finite elements that discretize the entire domain.
*   **Degrees of Freedom (DOFs):** The unknown variables at each node of an element.
*   **Shape Function (Interpolation Function):** A function that approximates the variation of the unknown variable within an element based on the nodal values. These functions are typically denoted by $N_i$, where $i$ is the node number. The relationship is generally of the form:
    $u(x) = \sum_{i=1}^{n} N_i(x) u_i$
    where $u(x)$ is the unknown variable at position $x$, $n$ is the number of nodes, $N_i(x)$ is the shape function for node $i$, and $u_i$ is the value of the unknown variable at node $i$.
*   **Element Stiffness Matrix ($[k]_e$):** A matrix relating nodal forces to nodal displacements for a single element.
*   **Element Force Vector ($\{f\}_e$):** A vector of nodal forces acting on an element.
*   **Jacobian Matrix:** A matrix used in coordinate transformations, particularly for isoparametric elements, to relate differentials in the physical domain to differentials in the parent domain.

---

### 4. Examples of Element Formulations (Brief Overview)

While the detailed formulation of shape functions and matrices is covered in later modules, understanding the basic types is crucial.

#### 4.1. Two-Node Linear Line Element

*   **Geometry:** A line segment between nodes 1 and 2.
*   **Shape Functions (in local coordinate $\xi$ where $-1 \le \xi \le 1$):**
    $N_1(\xi) = \frac{1-\xi}{2}$
    $N_2(\xi) = \frac{1+\xi}{2}$
*   **Interpolation:** $u(\xi) = N_1(\xi) u_1 + N_2(\xi) u_2$
*   **DOFs:** $u_1, u_2$ (e.g., axial displacements)

#### 4.2. Three-Node Linear Triangular Element (CST)

*   **Geometry:** A triangle with nodes 1, 2, 3 at the vertices.
*   **Shape Functions (in natural coordinates $L_1, L_2, L_3$ where $L_1+L_2+L_3=1$):**
    $N_1(L_1, L_2, L_3) = L_1$
    $N_2(L_1, L_2, L_3) = L_2$
    $N_3(L_1, L_2, L_3) = L_3$
*   **Interpolation:** $u(x,y) = N_1 u_1 + N_2 u_2 + N_3 u_3$
*   **DOFs:** $u_1, u_2, u_3$ (e.g., displacements in x and y at each node, so 6 DOFs total for a 2D element).
*   **Key Point:** In CST, the strain within the element is constant.

#### 4.3. Four-Node Linear Quadrilateral Element

*   **Geometry:** A rectangle or general quadrilateral with nodes 1, 2, 3, 4 at the vertices.
*   **Shape Functions (in local coordinates $\xi, \eta$ where $-1 \le \xi, \eta \le 1$):**
    $N_1(\xi, \eta) = \frac{1}{4}(1-\xi)(1-\eta)$
    $N_2(\xi, \eta) = \frac{1}{4}(1+\xi)(1-\eta)$
    $N_3(\xi, \eta) = \frac{1}{4}(1+\xi)(1+\eta)$
    $N_4(\xi, \eta) = \frac{1}{4}(1-\xi)(1+\eta)$
*   **Interpolation:** $u(\xi, \eta) = \sum_{i=1}^{4} N_i(\xi, \eta) u_i$
*   **DOFs:** $u_1, u_2, u_3, u_4$ (e.g., displacements in x and y at each node, so 8 DOFs total for a 2D element).
*   **Key Point:** This element assumes bilinear variation. For curved boundaries, it's often used in its isoparametric form.

---

### 5. Important Points to Remember

*   **Element Type Selection:** The choice of element type is a critical first step in FEM analysis and depends on:
    *   Geometry of the domain (straight vs. curved boundaries).
    *   Nature of the solution (smooth vs. sharp gradients, bending behavior).
    *   Required accuracy.
    *   Available computational resources.
*   **Mesh Refinement:** For linear elements, increasing the mesh density (using more smaller elements) is often necessary to achieve good accuracy, especially for bending problems. Quadratic elements can achieve similar accuracy with coarser meshes.
*   **Continuity:** Higher-order elements generally provide better continuity of the solution across element boundaries, which can be important for certain problems.
*   **Isoparametric Formulation:** Essential for handling complex geometries with curved boundaries accurately. It uses the same shape functions to define both geometry and the field variable.

---

### 6. Practice Questions and Exercises

**Question 1:**
Classify the following elements based on their geometry and number of nodes:
a) A line segment with two nodes at its ends.
b) A triangle with nodes at its three vertices.
c) A quadrilateral with nodes at its four corners and the midpoints of its four sides.

**Answer 1:**
a) Two-node linear line element (1D).
b) Three-node linear triangular element (2D).
c) Eight-node quadratic quadrilateral element (2D).

---

**Question 2:**
Which type of element would be more suitable for analyzing a beam experiencing significant bending? Explain why.

**Answer 2:**
Quadratic elements (e.g., 3-node quadratic line element or higher-order beam elements) would be more suitable for analyzing a beam experiencing significant bending. This is because quadratic elements use quadratic shape functions, which can capture the curvature and bending deformation more accurately than linear elements, which assume a linear variation. Linear elements tend to be "stiffer" and may underestimate the deflection and stresses in bending.

---

**Question 3:**
Define isoparametric elements and explain their advantage.

**Answer 3:**
**Definition:** Isoparametric elements are finite elements where the same set of shape functions is used to interpolate both the geometry of the element and the variation of the unknown field variable (e.g., displacement, temperature) within the element.

**Advantage:** The primary advantage of isoparametric elements is their ability to accurately model domains with **curved boundaries**. By using shape functions that can represent curves, isoparametric elements allow for a more faithful discretization of complex geometries without the need for an excessive number of linear elements, which would be required to approximate curves. This leads to more accurate solutions and more efficient meshing for practical engineering problems.

---

**Question 4:**
List at least three different types of 2D finite elements and one application for each.

**Answer 4:**
1.  **Three-node linear triangle (CST):** Application: Initial analysis of stress distribution in thin plates, modeling of simple triangular regions.
2.  **Four-node linear quadrilateral:** Application: Stress analysis of rectangular or general quadrilaterals, mesh generation for simpler geometries.
3.  **Eight-node quadratic quadrilateral:** Application: More accurate stress analysis of plates and shells with curved boundaries, capturing stress concentrations.

---

**Question 5:**
What is the difference between Serendipity and Lagrangian elements, particularly in terms of node placement?

**Answer 5:**
The key difference lies in the placement of nodes:

*   **Serendipity Elements:** Have nodes only on the boundary (edges and corners) of the element. They do not have any interior nodes.
*   **Lagrangian Elements:** Can have nodes located on the boundary as well as within the interior of the element.

This distinction often relates to the formulation and the number of degrees of freedom for a given polynomial order. Serendipity elements are generally more efficient in terms of DOFs for higher-order polynomials.

---

This concludes the introduction to the types of finite elements. Understanding these classifications is fundamental to selecting the appropriate element for any given FEM problem.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
