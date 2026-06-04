---
title: "CST and beam element"
subject: "FINITE ELEMENT METHODS"
module: "Module 3: Derivation of strain "
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf480446429b"
status: "completed"
scrapedAt: "2026-05-20T18:12:59.944Z"
---
# Finite Element Methods - Module 3: Derivation of Strain

## Topic: CST and Beam Element

### Introduction

This module focuses on deriving the strain within simple finite elements, specifically the Constant Strain Triangle (CST) and the beam element. Understanding how strain is related to nodal displacements is a fundamental step in applying the Finite Element Method (FEM) to solve structural mechanics problems. We will explore how different element geometries and assumptions lead to different strain-displacement relationships.

### Learning Outcomes Addressed in this Topic:

*   **LO 1: Understand the relationship between nodal displacements and strains for simple elements.** (Aligns with CO1, CO3)
*   **LO 2: Formulate the strain-displacement matrix for CST and beam elements.** (Aligns with CO3)
*   **LO 3: Explain the assumptions made in deriving strain for these elements.** (Aligns with CO1, CO3)
*   **LO 4: Apply these concepts to simple 2D and 1D structural problems.** (Aligns with CO3)

### Key Concepts and Definitions

*   **Strain:** A measure of deformation representing the relative displacement of points within a body. In continuum mechanics, for a 2D problem, strain is typically represented by the strain tensor:
    $$
    \mathbf{\epsilon} = \begin{bmatrix} \epsilon_x \\ \epsilon_y \\ \gamma_{xy} \end{bmatrix} = \begin{bmatrix} \frac{\partial u}{\partial x} \\ \frac{\partial v}{\partial y} \\ \frac{\partial u}{\partial y} + \frac{\partial v}{\partial x} \end{bmatrix}
    $$
    where $\epsilon_x$ is normal strain in the x-direction, $\epsilon_y$ is normal strain in the y-direction, and $\gamma_{xy}$ is shear strain.
*   **Displacement Field:** A function that describes the displacement of any point within an element in terms of nodal displacements.
*   **Shape Functions (or Basis Functions):** Functions that interpolate the displacement field within an element based on nodal displacements. They are typically denoted by $N_i(\xi, \eta)$ for 2D elements or $N_i(x)$ for 1D elements, where $i$ is the node number.
*   **Strain-Displacement Matrix (B-matrix):** A matrix that relates the strain vector ($\mathbf{\epsilon}$) to the nodal displacement vector ($\mathbf{d}$) of an element. The relationship is generally expressed as:
    $$
    \mathbf{\epsilon} = \mathbf{B} \mathbf{d}
    $$
*   **Constant Strain Triangle (CST):** A 3-noded triangular element where the strain components ($\epsilon_x, \epsilon_y, \gamma_{xy}$) are assumed to be constant throughout the element.
*   **Beam Element:** A 1D structural element characterized by its length and cross-sectional properties, capable of resisting axial force, shear force, and bending moment.

---

## 1. Constant Strain Triangle (CST) Element

The CST is one of the simplest 2D elements used in FEM for analyzing plane stress and plane strain problems.

### 1.1 Assumptions

*   **Linear Displacement Field:** The displacement within the element is assumed to vary linearly in the x and y directions.
    $$
    u(x, y) = a_1 + a_2 x + a_3 y
    $$
    $$
    v(x, y) = a_4 + a_5 x + a_6 y
    $$
    where $u$ and $v$ are displacements in the x and y directions, respectively, and $a_1$ through $a_6$ are constants.
*   **Constant Strain:** Due to the linear nature of the displacement field, the derivatives of the displacement components are constant. This leads to constant strain values throughout the element.
    *   $\frac{\partial u}{\partial x} = a_2$ (constant $\epsilon_x$)
    *   $\frac{\partial v}{\partial y} = a_5$ (constant $\epsilon_y$)
    *   $\frac{\partial u}{\partial y} = a_3$
    *   $\frac{\partial v}{\partial x} = a_5$
    *   $\gamma_{xy} = \frac{\partial u}{\partial y} + \frac{\partial v}{\partial x} = a_3 + a_5$ (constant $\gamma_{xy}$)

### 1.2 Derivation of Strain-Displacement Matrix (B)

**Step 1: Relate Constants to Nodal Displacements**

A CST element has 3 nodes, and each node has two degrees of freedom (DOFs) – displacement in the x-direction ($u_i$) and displacement in the y-direction ($v_i$). The nodal displacement vector for a CST element is:
$$
\mathbf{d} = \begin{bmatrix} u_1 \\ v_1 \\ u_2 \\ v_2 \\ u_3 \\ v_3 \end{bmatrix}
$$

The linear displacement fields can be expressed in terms of nodal coordinates $(x_i, y_i)$ and nodal displacements:
$$
u(x, y) = u_1 L_1(x, y) + u_2 L_2(x, y) + u_3 L_3(x, y)
$$
$$
v(x, y) = v_1 L_1(x, y) + v_2 L_2(x, y) + v_3 L_3(x, y)
$$
where $L_i(x, y)$ are the area or Lagrange shape functions for the triangle. For a CST, these shape functions are linear and can be expressed as:
$$
L_i(x, y) = \frac{1}{2A} (a_i + b_i x + c_i y)
$$
where $A$ is the area of the triangle, and $a_i, b_i, c_i$ are coefficients determined from the nodal coordinates.

Specifically, for a triangle with nodes $(x_1, y_1), (x_2, y_2), (x_3, y_3)$:
$$
\begin{bmatrix} u \\ v \end{bmatrix} = \begin{bmatrix} L_1 & 0 & L_2 & 0 & L_3 & 0 \\ 0 & L_1 & 0 & L_2 & 0 & L_3 \end{bmatrix} \begin{bmatrix} u_1 \\ v_1 \\ u_2 \\ v_2 \\ u_3 \\ v_3 \end{bmatrix}
$$
This can be written as:
$$
\begin{bmatrix} u \\ v \end{bmatrix} = \mathbf{N} \mathbf{d}
$$
where $\mathbf{N}$ is the element shape function matrix.

**Step 2: Express Shape Functions in Terms of x and y**

The shape functions $L_i$ are linear and can be written as:
$L_1 = \frac{1}{2A}(a_1 + b_1x + c_1y)$
$L_2 = \frac{1}{2A}(a_2 + b_2x + c_2y)$
$L_3 = \frac{1}{2A}(a_3 + b_3x + c_3y)$

The coefficients $a_i, b_i, c_i$ are related to the nodal coordinates:
$b_1 = y_2 - y_3$, $c_1 = x_3 - x_2$
$b_2 = y_3 - y_1$, $c_2 = x_1 - x_3$
$b_3 = y_1 - y_2$, $c_3 = x_2 - x_1$
$a_1 = x_2y_3 - x_3y_2$
$a_2 = x_3y_1 - x_1y_3$
$a_3 = x_1y_2 - x_2y_1$

And $2A = b_1x + c_1y + 2A$. A simpler form for $2A$ is:
$2A = (x_1(y_2 - y_3) + x_2(y_3 - y_1) + x_3(y_1 - y_2))$

**Step 3: Relate Displacement Field to Constants $a_1$ to $a_6$**

By matching the shape function formulation to the linear displacement field assumption:
$u(x,y) = (u_1 L_1 + u_2 L_2 + u_3 L_3)$
$v(x,y) = (v_1 L_1 + v_2 L_2 + v_3 L_3)$

The displacement can be written as:
$$
\begin{bmatrix} u \\ v \end{bmatrix} = \frac{1}{2A} \begin{bmatrix} (a_1+b_1x+c_1y) & 0 & (a_2+b_2x+c_2y) & 0 & (a_3+b_3x+c_3y) & 0 \\ 0 & (a_1+b_1x+c_1y) & 0 & (a_2+b_2x+c_2y) & 0 & (a_3+b_3x+c_3y) \end{bmatrix} \begin{bmatrix} u_1 \\ v_1 \\ u_2 \\ v_2 \\ u_3 \\ v_3 \end{bmatrix}
$$

This can be expressed as:
$$
\begin{bmatrix} u \\ v \end{bmatrix} = \frac{1}{2A} \begin{bmatrix} L_1 & 0 & L_2 & 0 & L_3 & 0 \\ 0 & L_1 & 0 & L_2 & 0 & L_3 \end{bmatrix} \mathbf{d}
$$

**Step 4: Derive Strain Components**

Using the strain-displacement relations:
$$
\epsilon_x = \frac{\partial u}{\partial x}
$$
$$
\epsilon_y = \frac{\partial v}{\partial y}
$$
$$
\gamma_{xy} = \frac{\partial u}{\partial y} + \frac{\partial v}{\partial x}
$$

From the displacement equations, and noting that $L_i$ are linear functions of $x$ and $y$:
$\frac{\partial L_i}{\partial x}$ and $\frac{\partial L_i}{\partial y}$ are constants.
Specifically:
$\frac{\partial L_i}{\partial x} = \frac{b_i}{2A}$
$\frac{\partial L_i}{\partial y} = \frac{c_i}{2A}$

Therefore:
$$
\frac{\partial u}{\partial x} = \frac{\partial}{\partial x} \sum_{i=1}^3 u_i L_i = \sum_{i=1}^3 u_i \frac{\partial L_i}{\partial x} = \frac{1}{2A} \sum_{i=1}^3 u_i b_i = \frac{1}{2A} (u_1 b_1 + u_2 b_2 + u_3 b_3)
$$
$$
\frac{\partial v}{\partial y} = \frac{\partial}{\partial y} \sum_{i=1}^3 v_i L_i = \sum_{i=1}^3 v_i \frac{\partial L_i}{\partial y} = \frac{1}{2A} \sum_{i=1}^3 v_i c_i = \frac{1}{2A} (v_1 c_1 + v_2 c_2 + v_3 c_3)
$$
$$
\frac{\partial u}{\partial y} = \frac{\partial}{\partial y} \sum_{i=1}^3 u_i L_i = \sum_{i=1}^3 u_i \frac{\partial L_i}{\partial y} = \frac{1}{2A} \sum_{i=1}^3 u_i c_i = \frac{1}{2A} (u_1 c_1 + u_2 c_2 + u_3 c_3)
$$
$$
\frac{\partial v}{\partial x} = \frac{\partial}{\partial x} \sum_{i=1}^3 v_i L_i = \sum_{i=1}^3 v_i \frac{\partial L_i}{\partial x} = \frac{1}{2A} \sum_{i=1}^3 v_i b_i = \frac{1}{2A} (v_1 b_1 + v_2 b_2 + v_3 b_3)
$$

Substituting these into the strain definitions:
$$
\epsilon_x = \frac{1}{2A} (u_1 b_1 + u_2 b_2 + u_3 b_3)
$$
$$
\epsilon_y = \frac{1}{2A} (v_1 c_1 + v_2 c_2 + v_3 c_3)
$$
$$
\gamma_{xy} = \frac{1}{2A} (u_1 c_1 + u_2 c_2 + u_3 c_3) + \frac{1}{2A} (v_1 b_1 + v_2 b_2 + v_3 b_3)
$$

**Step 5: Construct the B-matrix**

We want to express the strain vector $\mathbf{\epsilon}$ in terms of the nodal displacement vector $\mathbf{d}$:
$$
\mathbf{\epsilon} = \begin{bmatrix} \epsilon_x \\ \epsilon_y \\ \gamma_{xy} \end{bmatrix} = \mathbf{B} \mathbf{d}
$$

Rearranging the strain expressions to align with the $\mathbf{d}$ vector:
$$
\epsilon_x = \frac{1}{2A} \begin{bmatrix} b_1 & 0 & b_2 & 0 & b_3 & 0 \end{bmatrix} \begin{bmatrix} u_1 \\ v_1 \\ u_2 \\ v_2 \\ u_3 \\ v_3 \end{bmatrix}
$$
$$
\epsilon_y = \frac{1}{2A} \begin{bmatrix} 0 & c_1 & 0 & c_2 & 0 & c_3 \end{bmatrix} \begin{bmatrix} u_1 \\ v_1 \\ u_2 \\ v_2 \\ u_3 \\ v_3 \end{bmatrix}
$$
$$
\gamma_{xy} = \frac{1}{2A} \begin{bmatrix} c_1 & b_1 & c_2 & b_2 & c_3 & b_3 \end{bmatrix} \begin{bmatrix} u_1 \\ v_1 \\ u_2 \\ v_2 \\ u_3 \\ v_3 \end{bmatrix}
$$

Combining these into a single matrix equation for $\mathbf{\epsilon}$:
$$
\mathbf{\epsilon} = \frac{1}{2A} \begin{bmatrix}
b_1 & 0 & b_2 & 0 & b_3 & 0 \\
0 & c_1 & 0 & c_2 & 0 & c_3 \\
c_1 & b_1 & c_2 & b_2 & c_3 & b_3
\end{bmatrix} \begin{bmatrix} u_1 \\ v_1 \\ u_2 \\ v_2 \\ u_3 \\ v_3 \end{bmatrix}
$$

Thus, the strain-displacement matrix for the CST element is:
$$
\mathbf{B}_{CST} = \frac{1}{2A} \begin{bmatrix}
b_1 & 0 & b_2 & 0 & b_3 & 0 \\
0 & c_1 & 0 & c_2 & 0 & c_3 \\
c_1 & b_1 & c_2 & b_2 & c_3 & b_3
\end{bmatrix}
$$

**Important Note:** The values of $b_i$ and $c_i$ are constants derived from the coordinates of the element's nodes, making the $\mathbf{B}$ matrix constant for the entire CST element. This is why it's called the Constant Strain Triangle.

### 1.3 Example for CST

Consider a triangular element with nodes at:
Node 1: $(x_1, y_1) = (0, 0)$
Node 2: $(x_2, y_2) = (4, 0)$
Node 3: $(x_3, y_3) = (2, 3)$

**Calculate $b_i$ and $c_i$:**
$b_1 = y_2 - y_3 = 0 - 3 = -3$
$c_1 = x_3 - x_2 = 2 - 4 = -2$

$b_2 = y_3 - y_1 = 3 - 0 = 3$
$c_2 = x_1 - x_3 = 0 - 2 = -2$

$b_3 = y_1 - y_2 = 0 - 0 = 0$
$c_3 = x_2 - x_1 = 4 - 0 = 4$

**Calculate $2A$:**
$2A = x_1(y_2 - y_3) + x_2(y_3 - y_1) + x_3(y_1 - y_2)$
$2A = 0(0 - 3) + 4(3 - 0) + 2(0 - 0)$
$2A = 0 + 12 + 0 = 12$
$A = 6$

**Determine the B-matrix:**
$$
\mathbf{B}_{CST} = \frac{1}{12} \begin{bmatrix}
-3 & 0 & 3 & 0 & 0 & 0 \\
0 & -2 & 0 & -2 & 0 & 4 \\
-2 & -3 & -2 & 3 & 4 & 0
\end{bmatrix}
$$

If the nodal displacements are given as:
$u_1=0, v_1=0$
$u_2=0.01, v_2=0$
$u_3=0.005, v_3=0.002$

Then the strain vector is:
$$
\mathbf{\epsilon} = \frac{1}{12} \begin{bmatrix}
-3 & 0 & 3 & 0 & 0 & 0 \\
0 & -2 & 0 & -2 & 0 & 4 \\
-2 & -3 & -2 & 3 & 4 & 0
\end{bmatrix} \begin{bmatrix} 0 \\ 0 \\ 0.01 \\ 0 \\ 0.005 \\ 0.002 \end{bmatrix}
$$
$$
\mathbf{\epsilon} = \frac{1}{12} \begin{bmatrix}
-3(0) + 0(0) + 3(0.01) + 0(0) + 0(0.005) + 0(0.002) \\
0(0) + (-2)(0) + 0(0.01) + (-2)(0) + 0(0.005) + 4(0.002) \\
(-2)(0) + (-3)(0) + (-2)(0.01) + 3(0) + 4(0.005) + 0(0.002)
\end{bmatrix}
$$
$$
\mathbf{\epsilon} = \frac{1}{12} \begin{bmatrix}
0.03 \\
0.008 \\
-0.02 + 0.02
\end{bmatrix} = \frac{1}{12} \begin{bmatrix}
0.03 \\
0.008 \\
0
\end{bmatrix} = \begin{bmatrix}
0.0025 \\
0.00067 \\
0
\end{bmatrix}
$$

So, $\epsilon_x = 0.0025$, $\epsilon_y = 0.00067$, and $\gamma_{xy} = 0$.

---

## 2. Beam Element

Beam elements are used to analyze structures subjected to bending, shear, and axial loads. For simplicity, we will focus on a basic Euler-Bernoulli beam element, which is a common starting point.

### 2.1 Assumptions for Euler-Bernoulli Beam Theory

*   **Plane sections remain plane:** Cross-sections that are initially perpendicular to the beam's axis remain plane and perpendicular to the deformed axis.
*   **Negligible shear deformation:** Shear strains are considered negligible compared to bending strains. This is valid for slender beams.
*   **Small deflections:** The deflections and slopes are small enough that linear approximations can be used.
*   **Linear elastic material:** The material follows Hooke's law.
*   **Uniform cross-section:** The cross-sectional properties (area, moment of inertia) are constant along the length of the element.

### 2.2 Degrees of Freedom (DOFs)

A typical 2-noded beam element has 4 DOFs:
*   Two translational DOFs: vertical displacement ($v_1$, $v_2$) at each node.
*   Two rotational DOFs: rotation ($\theta_1$, $\theta_2$) at each node.

The nodal displacement vector for a beam element is:
$$
\mathbf{d} = \begin{bmatrix} v_1 \\ \theta_1 \\ v_2 \\ \theta_2 \end{bmatrix}
$$
(Note: Some formulations include axial displacement, making it 6 DOFs).

### 2.3 Derivation of Strain-Displacement Relationship

For a beam element, the primary deformation considered is due to bending. The strain in a beam due to bending is related to the curvature of the neutral axis.

**Curvature:** The curvature ($\kappa$) of a beam is defined as the second derivative of the deflection curve:
$$
\kappa = \frac{d^2v}{dx^2}
$$

**Strain due to bending:** For a point at a distance $y$ from the neutral axis, the normal strain $\epsilon_x$ is given by:
$$
\epsilon_x = -y \kappa = -y \frac{d^2v}{dx^2}
$$
where the negative sign arises from the convention where positive curvature bends the beam downwards.

**Shape Functions for Beam Displacement:**
We need to define the transverse displacement $v(x)$ within the beam element using shape functions. For a cubic interpolation, we can define four shape functions, $N_{v1}, N_{\theta1}, N_{v2}, N_{\theta2}$, such that:
$$
v(x) = v_1 N_{v1}(x) + \theta_1 N_{\theta1}(x) + v_2 N_{v2}(x) + \theta_2 N_{\theta2}(x)
$$
Or in matrix form:
$$
v(x) = \mathbf{N}_v(x) \mathbf{d}
$$
where $\mathbf{N}_v(x) = \begin{bmatrix} N_{v1}(x) & N_{\theta1}(x) & N_{v2}(x) & N_{\theta2}(x) \end{bmatrix}$.

The standard Hermite cubic shape functions for a beam element of length $L$ (with local coordinate $x$ varying from 0 to $L$) are:
$$
N_{v1}(x) = 2\left(\frac{x}{L}\right)^3 - 3\left(\frac{x}{L}\right)^2 + 1
$$
$$
N_{\theta1}(x) = \left(\frac{x}{L}\right)^3 - 2\left(\frac{x}{L}\right)^2 + \frac{x}{L}
$$
$$
N_{v2}(x) = -2\left(\frac{x}{L}\right)^3 + 3\left(\frac{x}{L}\right)^2
$$
$$
N_{\theta2}(x) = \left(\frac{x}{L}\right)^3 - \left(\frac{x}{L}\right)^2
$$

**Calculating the second derivative of $v(x)$:**
$$
\frac{dv}{dx} = \frac{d}{dx} \sum_{i=1}^4 v_i N_i(x) = \sum_{i=1}^4 v_i \frac{dN_i}{dx}
$$
$$
\frac{d^2v}{dx^2} = \frac{d^2}{dx^2} \sum_{i=1}^4 v_i N_i(x) = \sum_{i=1}^4 v_i \frac{d^2N_i}{dx^2}
$$

Let's find the derivatives of the shape functions with respect to $x$. It's often easier to work with a dimensionless coordinate $\xi = x/L$, where $0 \le \xi \le 1$.
$x = L\xi$.
$\frac{d}{dx} = \frac{1}{L}\frac{d}{d\xi}$
$\frac{d^2}{dx^2} = \frac{1}{L^2}\frac{d^2}{d\xi^2}$

The shape functions in terms of $\xi$:
$N_{v1}(\xi) = 2\xi^3 - 3\xi^2 + 1$
$N_{\theta1}(\xi) = \xi^3 - 2\xi^2 + \xi$
$N_{v2}(\xi) = -2\xi^3 + 3\xi^2$
$N_{\theta2}(\xi) = \xi^3 - \xi^2$

First derivatives with respect to $\xi$:
$\frac{dN_{v1}}{d\xi} = 6\xi^2 - 6\xi$
$\frac{dN_{\theta1}}{d\xi} = 3\xi^2 - 4\xi + 1$
$\frac{dN_{v2}}{d\xi} = -6\xi^2 + 6\xi$
$\frac{dN_{\theta2}}{d\xi} = 3\xi^2 - 2\xi$

Second derivatives with respect to $\xi$:
$\frac{d^2N_{v1}}{d\xi^2} = 12\xi - 6$
$\frac{d^2N_{\theta1}}{d\xi^2} = 6\xi - 4$
$\frac{d^2N_{v2}}{d\xi^2} = -12\xi + 6$
$\frac{d^2N_{\theta2}}{d\xi^2} = 6\xi - 2$

Now, substitute back into $\frac{d^2v}{dx^2}$:
$$
\frac{d^2v}{dx^2} = \frac{1}{L^2} \left[ \frac{d^2N_{v1}}{d\xi^2} v_1 + \frac{d^2N_{\theta1}}{d\xi^2} \theta_1 + \frac{d^2N_{v2}}{d\xi^2} v_2 + \frac{d^2N_{\theta2}}{d\xi^2} \theta_2 \right]
$$
$$
\frac{d^2v}{dx^2} = \frac{1}{L^2} \left[ (12\xi - 6) v_1 + (6\xi - 4) \theta_1 + (-12\xi + 6) v_2 + (6\xi - 2) \theta_2 \right]
$$

**Strain-Displacement Matrix (B-matrix) for Bending:**
We can write the strain as $\epsilon_x(x, y) = -y \frac{d^2v}{dx^2}$.
The nodal displacement vector is $\mathbf{d} = \begin{bmatrix} v_1 \\ \theta_1 \\ v_2 \\ \theta_2 \end{bmatrix}$.

$$
\epsilon_x(x, y) = -y \frac{1}{L^2} \begin{bmatrix} (12\xi - 6) & (6\xi - 4) & (-12\xi + 6) & (6\xi - 2) \end{bmatrix} \begin{bmatrix} v_1 \\ \theta_1 \\ v_2 \\ \theta_2 \end{bmatrix}
$$
$$
\epsilon_x(x, y) = -y \frac{1}{L^2} \begin{bmatrix} (12\frac{x}{L} - 6) & (6\frac{x}{L} - 4) & (-12\frac{x}{L} + 6) & (6\frac{x}{L} - 2) \end{bmatrix} \mathbf{d}
$$

The B-matrix for beam bending is therefore:
$$
\mathbf{B}_{beam}(x, y) = -y \frac{1}{L^2} \begin{bmatrix} (12\frac{x}{L} - 6) & (6\frac{x}{L} - 4) & (-12\frac{x}{L} + 6) & (6\frac{x}{L} - 2) \end{bmatrix}
$$

**Important Considerations for Beam Elements:**

*   **Strain is not constant:** Unlike the CST, the strain in a beam element varies with both the axial position $x$ and the vertical position $y$.
*   **Inclusion of Axial Strain:** If axial displacement ($u$) is also considered, the B-matrix would be larger and include terms related to axial deformation. For a full 2D beam element formulation (considering shear and axial effects), a more complex displacement field and corresponding B-matrix are used (often involving higher-order polynomials or specialized shape functions).
*   **Shear Deformation:** Euler-Bernoulli theory neglects shear deformation. Timoshenko beam theory includes shear deformation, which requires different shape functions and leads to a different B-matrix.

### 2.4 Example for Beam Element

Consider a beam element of length $L=1$ meter.
Nodal displacements: $v_1 = 0.01$ m, $\theta_1 = 0.002$ rad, $v_2 = 0.005$ m, $\theta_2 = -0.001$ rad.
Let's calculate the strain at $x = 0.5$ m and $y = 0.05$ m (5 cm from the neutral axis).

Here, $L=1$, $x=0.5$, $\xi = x/L = 0.5$.
$$
\frac{d^2v}{dx^2} \Big|_{x=0.5} = \frac{1}{1^2} \left[ (12(0.5) - 6) (0.01) + (6(0.5) - 4) (0.002) + (-12(0.5) + 6) (0.005) + (6(0.5) - 2) (-0.001) \right]
$$
$$
\frac{d^2v}{dx^2} \Big|_{x=0.5} = \left[ (6 - 6) (0.01) + (3 - 4) (0.002) + (-6 + 6) (0.005) + (3 - 2) (-0.001) \right]
$$
$$
\frac{d^2v}{dx^2} \Big|_{x=0.5} = \left[ 0(0.01) + (-1)(0.002) + 0(0.005) + (1)(-0.001) \right]
$$
$$
\frac{d^2v}{dx^2} \Big|_{x=0.5} = -0.002 - 0.001 = -0.003 \text{ m}^{-1}
$$

Now, calculate the strain:
$$
\epsilon_x(x=0.5, y=0.05) = -y \frac{d^2v}{dx^2} \Big|_{x=0.5}
$$
$$
\epsilon_x(0.5, 0.05) = -(0.05 \text{ m}) (-0.003 \text{ m}^{-1}) = 0.00015
$$

The normal strain at $x=0.5$ m and $y=0.05$ m is $0.00015$.

---

### Practice Questions

**Question 1 (CST):**
A CST element has nodes at $(0,0), (5,0), (2,4)$. Calculate the $b_i$ and $c_i$ values and the area of the element.

**Question 2 (CST):**
For the CST element in Question 1, if the nodal displacements are:
$u_1=0, v_1=0$
$u_2=0.002, v_2=0.001$
$u_3=0.001, v_3=0.003$
Calculate the strain vector ($\epsilon_x, \epsilon_y, \gamma_{xy}$) within the element.

**Question 3 (Beam):**
A beam element of length $L=2$ m is subjected to nodal displacements $v_1=0.02$ m, $\theta_1=0.01$ rad, $v_2=0.01$ m, $\theta_2=-0.005$ rad. Calculate the curvature $\frac{d^2v}{dx^2}$ at the mid-point ($x=1$ m) of the element.

**Question 4 (Beam):**
For the beam element and displacements in Question 3, calculate the normal strain $\epsilon_x$ at:
a) $x = 0.5$ m, $y = 0.03$ m
b) $x = 1.5$ m, $y = -0.02$ m (assuming $y$ is distance from neutral axis, positive upwards)

---

### Answers to Practice Questions

**Answer 1:**
Nodes: (0,0), (5,0), (2,4)
$x_1=0, y_1=0$; $x_2=5, y_2=0$; $x_3=2, y_3=4$

$b_1 = y_2 - y_3 = 0 - 4 = -4$
$c_1 = x_3 - x_2 = 2 - 5 = -3$

$b_2 = y_3 - y_1 = 4 - 0 = 4$
$c_2 = x_1 - x_3 = 0 - 2 = -2$

$b_3 = y_1 - y_2 = 0 - 0 = 0$
$c_3 = x_2 - x_1 = 5 - 0 = 5$

Area $A$:
$2A = x_1(y_2 - y_3) + x_2(y_3 - y_1) + x_3(y_1 - y_2)$
$2A = 0(0 - 4) + 5(4 - 0) + 2(0 - 0)$
$2A = 0 + 20 + 0 = 20$
$A = 10$

**Answer 2:**
$L = \begin{bmatrix} b_1 & 0 & b_2 & 0 & b_3 & 0 \\ 0 & c_1 & 0 & c_2 & 0 & c_3 \\ c_1 & b_1 & c_2 & b_2 & c_3 & b_3 \end{bmatrix} = \begin{bmatrix} -4 & 0 & 4 & 0 & 0 & 0 \\ 0 & -3 & 0 & -2 & 0 & 5 \\ -3 & -4 & -2 & 4 & 5 & 0 \end{bmatrix}$
$2A = 20$, so $\frac{1}{2A} = \frac{1}{20}$

$\mathbf{d} = \begin{bmatrix} 0 \\ 0 \\ 0.002 \\ 0.001 \\ 0.001 \\ 0.003 \end{bmatrix}$

$\mathbf{\epsilon} = \frac{1}{20} \begin{bmatrix} -4 & 0 & 4 & 0 & 0 & 0 \\ 0 & -3 & 0 & -2 & 0 & 5 \\ -3 & -4 & -2 & 4 & 5 & 0 \end{bmatrix} \begin{bmatrix} 0 \\ 0 \\ 0.002 \\ 0.001 \\ 0.001 \\ 0.003 \end{bmatrix}$
$\mathbf{\epsilon} = \frac{1}{20} \begin{bmatrix} (-4)(0) + (4)(0.002) \\ (-3)(0) + (-2)(0.001) + (5)(0.003) \\ (-3)(0) + (-4)(0) + (-2)(0.002) + (4)(0.001) + (5)(0.001) \end{bmatrix}$
$\mathbf{\epsilon} = \frac{1}{20} \begin{bmatrix} 0.008 \\ -0.002 + 0.015 \\ -0.004 + 0.004 + 0.005 \end{bmatrix} = \frac{1}{20} \begin{bmatrix} 0.008 \\ 0.013 \\ 0.005 \end{bmatrix}$
$\mathbf{\epsilon} = \begin{bmatrix} 0.0004 \\ 0.00065 \\ 0.00025 \end{bmatrix}$

So, $\epsilon_x = 0.0004$, $\epsilon_y = 0.00065$, $\gamma_{xy} = 0.00025$.

**Answer 3:**
$L=2$ m, $x=1$ m. $\xi = x/L = 1/2 = 0.5$.
$v_1 = 0.02, \theta_1 = 0.01, v_2 = 0.01, \theta_2 = -0.005$.

$\frac{d^2N_{v1}}{d\xi^2} = 12\xi - 6 = 12(0.5) - 6 = 6 - 6 = 0$
$\frac{d^2N_{\theta1}}{d\xi^2} = 6\xi - 4 = 6(0.5) - 4 = 3 - 4 = -1$
$\frac{d^2N_{v2}}{d\xi^2} = -12\xi + 6 = -12(0.5) + 6 = -6 + 6 = 0$
$\frac{d^2N_{\theta2}}{d\xi^2} = 6\xi - 2 = 6(0.5) - 2 = 3 - 2 = 1$

Curvature $\kappa = \frac{d^2v}{dx^2} = \frac{1}{L^2} \sum \frac{d^2N_i}{d\xi^2} d_i$
$\kappa = \frac{1}{2^2} [ (0)(0.02) + (-1)(0.01) + (0)(0.01) + (1)(-0.005) ]$
$\kappa = \frac{1}{4} [ 0 - 0.01 - 0 - 0.005 ] = \frac{1}{4} [-0.015] = -0.00375 \text{ m}^{-1}$

**Answer 4:**
a) $x = 0.5$ m, $y = 0.03$ m. $L=2$ m.
$\xi = x/L = 0.5/2 = 0.25$.
$\frac{d^2N_{v1}}{d\xi^2} = 12(0.25) - 6 = 3 - 6 = -3$
$\frac{d^2N_{\theta1}}{d\xi^2} = 6(0.25) - 4 = 1.5 - 4 = -2.5$
$\frac{d^2N_{v2}}{d\xi^2} = -12(0.25) + 6 = -3 + 6 = 3$
$\frac{d^2N_{\theta2}}{d\xi^2} = 6(0.25) - 2 = 1.5 - 2 = -0.5$

$\kappa = \frac{1}{L^2} \sum \frac{d^2N_i}{d\xi^2} d_i = \frac{1}{4} [ (-3)(0.02) + (-2.5)(0.01) + (3)(0.01) + (-0.5)(-0.005) ]$
$\kappa = \frac{1}{4} [ -0.06 - 0.025 + 0.03 + 0.0025 ] = \frac{1}{4} [-0.0525] = -0.013125 \text{ m}^{-1}$

$\epsilon_x = -y \kappa = -(0.03 \text{ m}) (-0.013125 \text{ m}^{-1}) = 0.00039375$

b) $x = 1.5$ m, $y = -0.02$ m.
$\xi = x/L = 1.5/2 = 0.75$.
$\frac{d^2N_{v1}}{d\xi^2} = 12(0.75) - 6 = 9 - 6 = 3$
$\frac{d^2N_{\theta1}}{d\xi^2} = 6(0.75) - 4 = 4.5 - 4 = 0.5$
$\frac{d^2N_{v2}}{d\xi^2} = -12(0.75) + 6 = -9 + 6 = -3$
$\frac{d^2N_{\theta2}}{d\xi^2} = 6(0.75) - 2 = 4.5 - 2 = 2.5$

$\kappa = \frac{1}{L^2} \sum \frac{d^2N_i}{d\xi^2} d_i = \frac{1}{4} [ (3)(0.02) + (0.5)(0.01) + (-3)(0.01) + (2.5)(-0.005) ]$
$\kappa = \frac{1}{4} [ 0.06 + 0.005 - 0.03 - 0.0125 ] = \frac{1}{4} [0.0225] = 0.005625 \text{ m}^{-1}$

$\epsilon_x = -y \kappa = -(-0.02 \text{ m}) (0.005625 \text{ m}^{-1}) = 0.0001125$

---

### Important Points to Remember

*   **CST Assumptions:** Linear displacement field, constant strain.
*   **CST B-matrix:** Constant entries, depends on element geometry ($b_i, c_i$) and area ($A$).
*   **Beam Assumptions (Euler-Bernoulli):** Plane sections remain plane and perpendicular to the neutral axis, negligible shear deformation.
*   **Beam Strain:** Varies with position along the beam ($x$) and distance from the neutral axis ($y$). It's directly proportional to curvature.
*   **Beam B-matrix:** Contains terms that are functions of $x$ (or $\xi$) and $y$.
*   **Understanding the shape functions and their derivatives is crucial for deriving the B-matrix.**
*   **The B-matrix links nodal displacements to strains, a core step in the FEM formulation.**

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |


### References

*   **Reddy, J. N. (2009).** *An Introduction to the Finite Element Method*. McGrawHillEducation. (Chapter 7 covers 2D elements, Chapter 9 covers beam elements).
*   **Cook, R. D. (2008).** *Concepts and Applications of Finite Element Analysis*. Wiley. (Chapter 5 on 2D elasticity, Chapter 7 on beams).
*   **Bhavikatti, S. S. (2008).** *Finite Element Analysis*. New Age Publisher. (Chapters on 2D and beam elements).
*   **Fish, J., & Belytschko, T. (2007).** *A First Course in Finite Elements*. John Wiley & Sons. (Chapters on plane stress/strain and beam theory).

---

This concludes the study notes for the CST and beam elements in Module 3, focusing on the derivation of strain. These elements form the basis for understanding more complex finite elements and their applications in structural analysis.