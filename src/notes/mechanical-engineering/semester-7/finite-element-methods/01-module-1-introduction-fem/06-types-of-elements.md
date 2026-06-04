---
title: "Types of elements"
subject: "FINITE ELEMENT METHODS"
module: "Module 1: Introduction FEM"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf480446428e"
status: "completed"
scrapedAt: "2026-05-20T18:12:52.372Z"
---
# FINITE ELEMENT METHODS

## Module 1: Introduction to FEM

### Topic: Types of Elements

---

### 1. Introduction to Element Types in FEM

The Finite Element Method (FEM) discretizes a continuous physical domain into smaller, interconnected subdomains called **finite elements**. The behavior of the physical phenomenon within each element is approximated by simple mathematical functions, typically polynomials, called **shape functions**. The choice of element type significantly impacts the accuracy, computational cost, and the types of problems that can be solved.

**Key Concept:** **Discretization:** The process of dividing a continuous domain into a finite number of elements.

**Connection to Course Outcomes:** This topic is fundamental to understanding how FEM works and forms the basis for CO1 (understanding governing equations and FEM procedure), CO2 (applying coordinate transformations and formulating shape functions), and CO3 (formulating shape functions).

**References:**

*   **Reddy (2009):** Chapter 2, "Elements and Shape Functions." Reddy emphasizes the foundational role of element selection and shape function formulation in FEM.
*   **Cook (2008):** Chapter 2, "Elements and Their Properties." Cook provides a practical overview of common element types and their applications.
*   **Bhavikatti (2008):** Chapter 2, "Finite Elements." Bhavikatti introduces the basic element types and their mathematical representation.
*   **Fish & Belytschko (2007):** Chapter 3, "Elements." This book delves into the mathematical underpinnings of various element formulations.

---

### 2. Classification of Elements

Elements can be broadly classified based on their **geometry (dimensionality)** and the **type of approximation (interpolation)** used within them.

#### 2.1. Based on Geometry (Dimensionality)

This classification is based on the spatial dimensions of the elements.

*   **0-D Elements (Point Elements):**
    *   **Description:** These are the simplest elements, representing a single point. They are often used to model discrete components like springs, dampers, or point masses.
    *   **Applications:** Structural analysis (springs), thermal analysis (lumped capacitance).
    *   **Example:** A single node representing a concentrated load or a spring connecting two structural components.

*   **1-D Elements (Line Elements):**
    *   **Description:** These elements have length and are characterized by two nodes at their ends. They are used to model structures or phenomena that are predominantly one-dimensional.
    *   **Types:**
        *   **Line Segment:** Straight line connecting two nodes.
        *   **Curved Line Segment:** Line segment with nodes at the ends and potentially at intermediate points along a curve.
    *   **Applications:**
        *   **Structural Mechanics:** Trusses, beams, frames, cables.
        *   **Heat Transfer:** Conduction along a rod.
        *   **Fluid Mechanics:** Flow in pipes.
    *   **Example:** A truss member connecting two joints, a beam in a frame.
    *   **References:**
        *   **Reddy (2009):** Chapter 2.1, "One-Dimensional Elements."
        *   **Cook (2008):** Chapter 2.2, "One-Dimensional Elements."

*   **2-D Elements (Area Elements):**
    *   **Description:** These elements have area and are used to model problems in two dimensions. They are typically defined on a plane.
    *   **Types:**
        *   **Triangular Elements:**
            *   **3-noded (Linear):** Nodes at the vertices. Linear variation of displacement/temperature within the element.
            *   **6-noded (Quadratic):** Nodes at vertices and midpoints of edges. Quadratic variation of displacement/temperature.
        *   **Quadrilateral Elements:**
            *   **4-noded (Linear - Bilinear):** Nodes at the vertices. Bilinear variation of displacement/temperature.
            *   **8-noded (Quadratic - Serendipity):** Nodes at vertices and midpoints of edges. Quadratic variation.
            *   **9-noded (Lagrangian):** Nodes at vertices, midpoints of edges, and the center of the element. Quadratic variation.
    *   **Applications:**
        *   **Structural Mechanics:** Plates, shells, plane stress, plane strain problems.
        *   **Heat Transfer:** Temperature distribution in flat plates.
        *   **Fluid Mechanics:** Flow in channels.
        *   **Electromagnetics:** Field analysis.
    *   **Example:** A thin plate under in-plane loads, a heat sink with uniform thickness.
    *   **References:**
        *   **Reddy (2009):** Chapter 2.2, "Two-Dimensional Elements."
        *   **Cook (2008):** Chapter 2.3, "Two-Dimensional Elements."
        *   **Bhavikatti (2008):** Chapter 3, "Two Dimensional Finite Elements."

*   **3-D Elements (Volume Elements):**
    *   **Description:** These elements have volume and are used to model problems in three dimensions.
    *   **Types:**
        *   **Tetrahedral Elements:**
            *   **4-noded (Linear):** Nodes at vertices.
            *   **10-noded (Quadratic):** Nodes at vertices and midpoints of edges.
        *   **Hexahedral Elements (Cubic/Brick Elements):**
            *   **8-noded (Linear - Trilinear):** Nodes at vertices.
            *   **20-noded (Quadratic - Serendipity):** Nodes at vertices and midpoints of edges.
            *   **27-noded (Lagrangian):** Nodes at vertices, midpoints of edges, and the center of faces and the element.
        *   **Prismatic Elements (Wedges):** Have 6 nodes (linear) or higher.
        *   **Pyramidal Elements:** Have 5 nodes (linear) or higher.
    *   **Applications:**
        *   **Structural Mechanics:** Solid bodies, stress analysis in complex geometries.
        *   **Heat Transfer:** Temperature distribution in solid objects.
        *   **Fluid Mechanics:** Three-dimensional flow.
        *   **Geomechanics:** Soil and rock mechanics.
    *   **Example:** A solid cube under stress, a machine component.
    *   **References:**
        *   **Reddy (2009):** Chapter 2.3, "Three-Dimensional Elements."
        *   **Cook (2008):** Chapter 2.4, "Three-Dimensional Elements."
        *   **Bhavikatti (2008):** Chapter 5, "Three Dimensional Finite Elements."

#### 2.2. Based on Approximation (Interpolation) of the Variable

This classification is based on the order of the polynomial used to approximate the field variable (e.g., displacement, temperature) within the element.

*   **Linearly Varying Elements (First-Order Elements):**
    *   **Description:** The field variable varies linearly within the element. Shape functions are linear polynomials.
    *   **Characteristics:**
        *   Fewer degrees of freedom (DOFs) per element.
        *   Lower computational cost.
        *   Less accurate, especially for problems with significant gradients or bending.
        *   Can exhibit "shear locking" in certain situations (e.g., thin beams, plates).
    *   **Examples:**
        *   1-D: 2-noded line element.
        *   2-D: 3-noded triangular element (T3), 4-noded quadrilateral element (Q4).
        *   3-D: 4-noded tetrahedral element (Tetra4), 8-noded hexahedral element (Hex8).

*   **Quadratically Varying Elements (Second-Order Elements):**
    *   **Description:** The field variable varies quadratically within the element. Shape functions are quadratic polynomials.
    *   **Characteristics:**
        *   More DOFs per element.
        *   Higher computational cost.
        *   More accurate than linear elements, especially for problems with curvature or high gradients.
        *   Can better capture bending behavior and reduce locking issues.
    *   **Examples:**
        *   1-D: 3-noded line element.
        *   2-D: 6-noded triangular element (T6), 8-noded quadrilateral element (Q8/Q8S - Serendipity), 9-noded quadrilateral element (Q9 - Lagrangian).
        *   3-D: 10-noded tetrahedral element (Tetra10), 20-noded hexahedral element (Hex20/Hex20S), 27-noded hexahedral element (Hex27).

*   **Higher-Order Elements (Cubic, Quartic, etc.):**
    *   **Description:** The field variable varies with higher-order polynomials (cubic, quartic, etc.).
    *   **Characteristics:**
        *   Significantly more DOFs per element.
        *   Highest computational cost.
        *   Can achieve very high accuracy for smooth solutions.
        *   Less commonly used in general-purpose analysis due to computational expense.
    *   **Examples:** 4-noded beam elements with cubic shape functions (for bending), higher-order triangular or quadrilateral elements.

**Important Point:** The choice between linear and quadratic elements is often a trade-off between accuracy and computational cost. For problems requiring high accuracy or with complex behavior (like bending), quadratic elements are preferred. For simpler problems or initial analyses, linear elements might suffice.

**Connection to Course Outcomes:** This directly supports CO2 and CO3, as the type of element dictates the form and order of shape functions and the resulting element matrices.

**References:**

*   **Reddy (2009):** Discusses linear and quadratic approximations throughout Chapter 2.
*   **Cook (2008):** Contrasts linear and higher-order elements in Chapter 2.
*   **Fish & Belytschko (2007):** Chapter 3 elaborates on the mathematical basis of these different orders of approximation.

---

### 3. Element Types Based on the Approximation of Behavior

Beyond geometry and interpolation order, elements can also be categorized by the specific physical behavior they are designed to represent.

#### 3.1. Structural Elements

*   **Line Elements (1-D):**
    *   **Truss Elements:** Assume axial deformation only. Cannot resist bending or shear.
    *   **Beam Elements:** Assume axial deformation, shear deformation, and bending. Can resist bending moments and shear forces. These often use cubic or higher-order shape functions for accurate bending representation (Reddy, 2009).
    *   **Bar Elements:** Similar to truss but may include some bending resistance depending on formulation.
    *   **Cable Elements:** Typically modeled as truss elements but with initial tension.

*   **Area Elements (2-D):**
    *   **Plane Stress Elements:** Used for thin structures loaded in their plane, where the stress perpendicular to the plane is assumed to be zero (e.g., a thin plate under in-plane forces).
    *   **Plane Strain Elements:** Used for long structures with uniform cross-sections and loads applied perpendicularly to the cross-section, where strains perpendicular to the plane are assumed to be zero (e.g., a dam, a tunnel).
    *   **Axisymmetric Elements:** Used for structures with axisymmetric geometry and loading. Reduces the 3-D problem to a 2-D problem, often using annular ring elements.
    *   **Plate Bending Elements:** Specifically formulated to capture bending stiffness and deflection of thin plates. Can be formulated using Kirchhoff or Mindlin plate theories (Reddy, 2009).
    *   **Shell Elements:** Used for thin or moderately thick curved surfaces that resist loads through in-plane stretching, bending, and shear. These are complex and can be formulated in various ways (Cook, 2008).

*   **Volume Elements (3-D):**
    *   **Solid Elements:** Used for general 3-D stress analysis of bulk materials.

#### 3.2. Thermal Elements

*   **1-D Thermal Elements:** Model heat conduction along rods or fins.
*   **2-D Thermal Elements:** Model heat conduction in flat plates or areas, can include convection and heat generation.
*   **3-D Thermal Elements:** Model heat conduction in solid objects, can include complex boundary conditions.

#### 3.3. Fluid Elements

*   **1-D Fluid Elements:** Model flow in pipes or channels.
*   **2-D and 3-D Fluid Elements:** Used for general fluid flow analysis (CFD), often coupled with convection and diffusion terms.

---

### 4. Element Formulation and Shape Functions

The choice of element type dictates the **shape functions**, which are fundamental to approximating the solution within an element. Shape functions interpolate the nodal values of the field variable (displacement, temperature, etc.) over the element.

**Key Concepts:**

*   **Shape Functions ($N_i$)**: Functions that relate the nodal values of a field variable to its value at any point within the element.
*   **Local Coordinates ($\xi, \eta, \zeta$)**: Normalized coordinate systems defined within each element, typically ranging from -1 to 1. This simplifies the formulation and allows for easy handling of elements of different shapes and sizes.
*   **Global Coordinates ($x, y, z$)**: The physical coordinates of the problem domain.
*   **Degrees of Freedom (DOFs)**: The unknown values at the nodes of the mesh (e.g., nodal displacements, nodal temperatures).

**Example: 1-D Line Element (2-noded)**

*   **Local Coordinate:** $\xi$ (ranges from -1 to 1).
*   **Nodes:** Node 1 at $\xi = -1$, Node 2 at $\xi = 1$.
*   **Shape Functions:**
    *   $N_1(\xi) = \frac{1}{2}(1 - \xi)$
    *   $N_2(\xi) = \frac{1}{2}(1 + \xi)$
*   **Properties:**
    *   $N_1(-1) = 1, N_1(1) = 0$
    *   $N_2(-1) = 0, N_2(1) = 1$
    *   $N_1(\xi) + N_2(\xi) = 1$ (partition of unity)
*   **Interpolation:** If $u_1$ and $u_2$ are the nodal values of the field variable at Node 1 and Node 2 respectively, the value at any point $\xi$ within the element is:
    $u(\xi) = N_1(\xi)u_1 + N_2(\xi)u_2$

**Example: 2-D Triangular Element (3-noded - T3)**

*   **Local Coordinates:** Area coordinates ($L_1, L_2, L_3$) or natural coordinates ($\xi, \eta$). Using area coordinates is common: $L_1 + L_2 + L_3 = 1$.
*   **Nodes:** Node 1 at $(L_1=1, L_2=0, L_3=0)$, Node 2 at $(L_1=0, L_2=1, L_3=0)$, Node 3 at $(L_1=0, L_2=0, L_3=1)$.
*   **Shape Functions:**
    *   $N_1(L_1, L_2, L_3) = L_1$
    *   $N_2(L_1, L_2, L_3) = L_2$
    *   $N_3(L_1, L_2, L_3) = L_3$
*   **Interpolation:**
    $u(L_1, L_2, L_3) = N_1 u_1 + N_2 u_2 + N_3 u_3$

**References:**

*   **Reddy (2009):** Chapter 2 provides detailed derivations of shape functions for various 1-D, 2-D, and 3-D elements.
*   **Cook (2008):** Chapter 2 also covers shape function derivation using interpolation polynomials.
*   **Fish & Belytschko (2007):** Chapter 3 extensively covers the mathematical formulation of shape functions, including the use of Lagrange polynomials and coordinate transformations.
*   **Bhavikatti (2008):** Chapter 2, 3, and 5 detail shape function calculations for different element types.

**Connection to Course Outcomes:** This section directly addresses CO2 (applying coordinate transformations and formulation of shape functions) and CO3 (formulate shape functions). Understanding shape functions is crucial for building the element stiffness and other matrices.

---

### 5. Isoparametric Elements

A significant advancement in FEM is the use of **isoparametric elements**. In these elements, the same interpolation functions (shape functions) are used to describe both the geometry of the element and the variation of the field variable within it.

**Key Concepts:**

*   **Isoparametric:** When the number of nodes used to describe the geometry is the same as the number of nodes used to describe the field variable interpolation.
*   **Subparametric:** When fewer nodes are used to describe the geometry than for field variable interpolation.
*   **Superparametric:** When more nodes are used to describe the geometry than for field variable interpolation.

**Advantages of Isoparametric Formulation:**

1.  **Geometric Flexibility:** Allows for the accurate modeling of curved boundaries and complex geometries using elements with nodes only at the vertices (e.g., quadratic quadrilaterals or tetrahedrons with mid-side nodes).
2.  **Unified Formulation:** Simplifies the development of FEM software, as the same algorithms can be used to evaluate integrals (e.g., stiffness matrix, load vectors) regardless of the element's geometric complexity.
3.  **Integration:** Integrals are typically evaluated in the natural (local) coordinate system using Gaussian quadrature.

**Example: 2-D Quadrilateral Element (4-noded - Q4)**

*   **Geometry Interpolation:**
    $x(\xi, \eta) = \sum_{i=1}^{4} N_i(\xi, \eta) x_i$
    $y(\xi, \eta) = \sum_{i=1}^{4} N_i(\xi, \eta) y_i$
    where $N_i$ are the bilinear shape functions, and $(x_i, y_i)$ are the coordinates of the four nodes.
*   **Field Variable Interpolation (e.g., displacement $u$):**
    $u(\xi, \eta) = \sum_{i=1}^{4} N_i(\xi, \eta) u_i$
    where $u_i$ are the nodal displacements.

**Example: 2-D Quadrilateral Element (8-noded - Q8 Serendipity)**

*   **Geometry Interpolation:**
    $x(\xi, \eta) = \sum_{i=1}^{8} N_i(\xi, \eta) x_i$
    $y(\xi, \eta) = \sum_{i=1}^{8} N_i(\xi, \eta) y_i$
    where $N_i$ are the quadratic shape functions for an 8-noded quadrilateral, and $(x_i, y_i)$ are the coordinates of the eight nodes.
*   **Field Variable Interpolation:**
    $u(\xi, \eta) = \sum_{i=1}^{8} N_i(\xi, \eta) u_i$

**References:**

*   **Reddy (2009):** Chapter 2.5, "Isoparametric Elements."
*   **Cook (2008):** Chapter 2.7, "Isoparametric Elements."
*   **Fish & Belytschko (2007):** Chapter 3.6, "Isoparametric Elements."
*   **Hutton (2009):** Chapter 7, "Isoparametric Elements." This book often provides clear explanations of the mathematical transformations involved.

**Connection to Course Outcomes:** This directly supports CO5 (Study the concept of iso parametric elements and analyze iso parametric formulations). Isoparametric elements are crucial for accurate modeling of real-world geometries.

---

### 6. Selection Criteria for Elements

The choice of element type depends on several factors:

1.  **Problem Geometry:**
    *   **Shape:** For straight boundaries, linear elements (triangles, quadrilaterals) are often sufficient. For curved boundaries, quadratic or isoparametric elements are necessary for accuracy.
    *   **Dimensionality:** 1-D, 2-D, or 3-D analysis is determined by the geometry of the domain and the nature of the loading.

2.  **Accuracy Requirements:**
    *   Higher-order elements generally provide higher accuracy for a given mesh density, especially for problems involving bending, stress concentrations, or complex deformation patterns.
    *   Linear elements can be used if coarse meshes are acceptable or if the solution is expected to be smooth.

3.  **Computational Resources:**
    *   Higher-order elements and finer meshes lead to larger systems of equations, increasing computational time and memory requirements.
    *   A balance must be struck between accuracy and computational cost.

4.  **Physical Phenomena:**
    *   Specific element formulations are needed for different phenomena (e.g., beam elements for bending, plate elements for thin plates, solid elements for 3-D stress).

5.  **Convergence:**
    *   Elements must satisfy convergence requirements (completeness and continuity) to ensure that the FEM solution approaches the exact solution as the mesh is refined.

**References:**

*   **Segerlind (2010):** Chapter 1 discusses the fundamental aspects of FEM and element selection.
*   **Ramamurthi (2010):** Provides practical considerations for element selection in various applications.
*   **General FEM Textbooks:** All textbooks cover this as a key consideration in applying FEM.

**Connection to Course Outcomes:** This helps in applying the knowledge from previous sections to practical problem-solving, indirectly supporting all COs by guiding the initial setup of an FEM analysis.

---

### 7. Practice Questions and Exercises

**Question 1:**
What is the primary advantage of using isoparametric elements compared to non-isoparametric elements?
a) They require fewer nodes.
b) They simplify the formulation of element stiffness matrices.
c) They allow for the accurate representation of curved boundaries.
d) They always yield more accurate results.

**Answer:**
c) They allow for the accurate representation of curved boundaries.

**Question 2:**
Classify the following elements based on their dimensionality and typical interpolation order:
a) A 2-noded beam element
b) A 6-noded triangular element
c) An 8-noded hexahedral element

**Answer:**
a) 1-D, Linear (typically, though beam theory requires higher-order for bending)
b) 2-D, Quadratic
c) 3-D, Linear

**Question 3:**
Consider a 2-D plane stress problem involving a thin plate with a curved edge. Which type of element would be most suitable for accurately modeling this curved edge? Explain why.

**Answer:**
An isoparametric quadrilateral or triangular element with mid-side nodes (quadratic elements) would be most suitable. This is because isoparametric formulation allows the element's geometry to be defined using the same shape functions that interpolate the displacement field. Quadratic shape functions enable the element to represent curves accurately, which is essential for modeling the curved edge of the plate. Linear elements, with straight edges, would require a mesh of many small elements to approximate the curve, leading to a loss of accuracy and increased computational cost.

**Question 4:**
Explain the concept of "locking" in finite element analysis, particularly in the context of beam and plate elements. How can using higher-order elements or specific formulations help mitigate this issue?

**Answer:**
"Locking" is a phenomenon where finite elements exhibit excessive stiffness, leading to inaccurate results, especially for problems involving bending.

*   **Shear Locking:** Occurs in thin beam and plate elements (especially linear ones) when the shear deformation becomes unrealistically constrained by the element formulation. The element is too stiff in shear.
*   **Membrane/Extensional Locking:** Can occur in thin plate bending elements when the in-plane stretching stiffness dominates the bending stiffness inappropriately.

**Mitigation:**
*   **Higher-Order Elements:** Quadratic elements, with their richer interpolation capabilities, can often capture bending behavior more accurately and are less prone to locking than linear elements.
*   **Reduced Integration:** Using fewer integration points than theoretically required for Gaussian quadrature can sometimes alleviate locking by reducing the contribution of the overly stiff terms.
*   **Mixed Methods:** Formulating elements using a mixed approach that independently interpolates displacements and strains can also prevent locking.
*   **Specific Element Formulations:** Development of specialized beam and plate elements (e.g., Assumed Natural Strain (ANS) elements, discrete Kirchhoff elements) are designed to avoid locking.

**Question 5:**
What is the difference between plane stress and plane strain conditions, and what types of elements are typically used for each?

**Answer:**
*   **Plane Stress:** Assumes that stresses perpendicular to the plane of analysis are zero ($\sigma_z = \tau_{xz} = \tau_{yz} = 0$), while strains in the plane can be non-zero. This is characteristic of thin structures loaded in their plane, where the thickness is small compared to the in-plane dimensions (e.g., a thin plate under in-plane tension). **Elements:** 2-D quadrilateral or triangular elements are used.

*   **Plane Strain:** Assumes that strains perpendicular to the plane of analysis are zero ($\epsilon_z = \gamma_{xz} = \gamma_{yz} = 0$), while stresses in the plane can be non-zero. This is characteristic of long structures with uniform cross-sections and loads applied perpendicularly to the cross-section, where deformation in the thickness direction is prevented by the surrounding material (e.g., a dam, a tunnel). **Elements:** 2-D quadrilateral or triangular elements are used, but the constitutive material properties (stress-strain relations) are modified to reflect the plane strain condition.

---

### 8. Important Points to Remember

*   **Element Choice is Crucial:** The type of element selected has a significant impact on accuracy, computational cost, and the types of physical phenomena that can be modeled.
*   **Geometry and Interpolation Order:** Elements are classified by their shape (1-D, 2-D, 3-D) and the order of the polynomial used for interpolation (linear, quadratic, etc.).
*   **Isoparametric Formulation:** A powerful technique where the same shape functions describe both geometry and the field variable, enabling accurate modeling of curved boundaries.
*   **Shape Functions:** These functions interpolate nodal values and are fundamental to deriving element matrices. They must satisfy the partition of unity property.
*   **Local vs. Global Coordinates:** Natural (local) coordinates simplify derivations, and coordinate transformations are used to relate them to global coordinates.
*   **Trade-offs:** There's a constant trade-off between element complexity (accuracy) and computational cost.
*   **Convergence:** Elements must satisfy criteria like completeness and continuity to ensure the FEM solution converges to the true solution.
*   **Locking:** A potential issue with certain element formulations (especially linear elements in bending) that leads to artificial stiffness.

---

### 9. Conclusion

Understanding the various types of finite elements is a cornerstone of applying the Finite Element Method effectively. From simple line elements to complex 3-D solid elements, each has its strengths and weaknesses. The choice depends heavily on the specific problem, required accuracy, and available computational resources. The development of isoparametric elements has been particularly instrumental in allowing FEM to handle complex geometries encountered in real-world engineering applications. This foundational knowledge of element types and their formulation directly prepares students for understanding and applying more advanced FEM concepts covered in subsequent modules.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
