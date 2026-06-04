---
title: "Cartesian Tensors"
subject: "MECHANICS OF FLUID FLOW"
module: "Module 1: Basic Concepts and Fundamentals: Fluid statics"
branch: "Civil Engineering"
semester: 4
topicId: "689f15cc56b5e963ba810a5e"
status: "completed"
scrapedAt: "2026-05-20T18:46:19.527Z"
---
# MECHANICS OF FLUID FLOW: Module 1 - Basic Concepts and Fundamentals: Fluid Statics

## Topic: Cartesian Tensors

---

### **1. Introduction to Cartesian Tensors**

**1.1 What is a Tensor?**

*   A tensor is a mathematical object that describes physical quantities in a way that is independent of the coordinate system used to represent them.
*   In essence, it's a generalization of scalars, vectors, and matrices.
*   Tensors are crucial in fluid mechanics for describing quantities that have both magnitude and direction, and whose behavior under coordinate transformations is well-defined.

**1.2 Why Cartesian Tensors in Fluid Mechanics?**

*   **Stress:** The internal forces within a fluid are represented by a stress tensor, which describes forces acting on surfaces in different directions.
*   **Strain Rate:** The deformation of a fluid element is described by a strain rate tensor.
*   **Viscosity:** The relationship between stress and strain rate in viscous fluids often involves a viscosity tensor.
*   **Anisotropy:** In some fluids, properties like viscosity or conductivity might vary with direction, requiring a tensorial representation.

---

### **2. Classification of Tensors by Rank (Order)**

The rank of a tensor refers to the number of indices required to specify its components.

**2.1 Rank 0 Tensors (Scalars)**

*   **Definition:** A scalar is a quantity that has only magnitude and is invariant under coordinate transformations.
*   **Examples:**
    *   Temperature ($T$)
    *   Pressure ($p$)
    *   Density ($\rho$)
    *   Mass ($m$)
*   **Notation:** A single letter (e.g., $T$, $p$, $\rho$).

**2.2 Rank 1 Tensors (Vectors)**

*   **Definition:** A vector is a quantity that has both magnitude and direction, and its components transform linearly under coordinate transformations.
*   **Examples:**
    *   Velocity ($\mathbf{v}$)
    *   Force ($\mathbf{F}$)
    *   Displacement ($\mathbf{x}$)
*   **Notation:** A bold letter (e.g., $\mathbf{v}$) or a letter with an arrow above it ($\vec{v}$). In component form, we use indices: $v_i$.

**2.3 Rank 2 Tensors**

*   **Definition:** A rank 2 tensor has both magnitude and directionality, and its components transform according to specific rules under coordinate transformations. They can be thought of as a linear mapping between two vectors, or as a matrix whose elements transform in a specific way.
*   **Examples:**
    *   **Stress Tensor ($\boldsymbol{\sigma}$):** Describes the forces acting on an internal surface within the fluid. Its components $\sigma_{ij}$ represent the force in the $i$-direction acting on a surface whose normal is in the $j$-direction.
    *   **Strain Rate Tensor ($\mathbf{D}$ or $\boldsymbol{\varepsilon}$):** Describes the rate of deformation of the fluid. Its components $D_{ij}$ or $\varepsilon_{ij}$ relate to the velocity gradients.
    *   **Viscosity Tensor ($\boldsymbol{\mu}$):** In anisotropic fluids, viscosity can be direction-dependent, requiring a tensor.
*   **Notation:** A bold letter with a double underline (e.g., $\boldsymbol{\sigma}$) or a single letter with two indices (e.g., $\sigma_{ij}$).

**2.4 Higher Rank Tensors**

*   Tensors can have ranks higher than 2, requiring more indices to describe their components. These are less common in introductory fluid mechanics but are used in more advanced topics like constitutive modeling or continuum mechanics.
*   **Example:** A rank 3 tensor might describe a relationship between a vector and a rank 2 tensor.

---

### **3. Cartesian Coordinate Systems and Transformations**

**3.1 Cartesian Coordinates**

*   A system defined by three mutually perpendicular axes ($x_1, x_2, x_3$ or $x, y, z$).
*   Associated basis vectors: $\mathbf{e}_1, \mathbf{e}_2, \mathbf{e}_3$ (or $\mathbf{i}, \mathbf{j}, \mathbf{k}$), which are orthogonal and have unit magnitude.
*   Any vector $\mathbf{v}$ can be represented as: $\mathbf{v} = v_1 \mathbf{e}_1 + v_2 \mathbf{e}_2 + v_3 \mathbf{e}_3 = \sum_{j=1}^3 v_j \mathbf{e}_j$.
*   The components $v_j$ are the projections of the vector onto the basis vectors.

**3.2 Coordinate Transformations**

*   Consider transforming from a Cartesian coordinate system $(x_1, x_2, x_3)$ to another Cartesian system $(x'_1, x'_2, x'_3)$. This transformation can be achieved by a rotation.
*   Let the new basis vectors be $\mathbf{e}'_1, \mathbf{e}'_2, \mathbf{e}'_3$.
*   The relationship between the old and new basis vectors is given by direction cosines.
*   Let $a_{ij}$ be the cosine of the angle between the $i$-th new basis vector ($\mathbf{e}'_i$) and the $j$-th old basis vector ($\mathbf{e}_j$).
    *   $a_{ij} = \mathbf{e}'_i \cdot \mathbf{e}_j$

**3.3 Transformation of Vector Components**

*   If a vector $\mathbf{v}$ has components $v_j$ in the old system and $v'_i$ in the new system, then:
    *   $\mathbf{v} = \sum_{j=1}^3 v_j \mathbf{e}_j = \sum_{i=1}^3 v'_i \mathbf{e}'_i$
*   Since $\mathbf{e}'_i = \sum_{j=1}^3 a_{ij} \mathbf{e}_j$, substituting this into the second expression:
    *   $\mathbf{v} = \sum_{i=1}^3 v'_i \left( \sum_{j=1}^3 a_{ij} \mathbf{e}_j \right) = \sum_{j=1}^3 \left( \sum_{i=1}^3 a_{ij} v'_i \right) \mathbf{e}_j$
*   Comparing coefficients of $\mathbf{e}_j$:
    *   $v_j = \sum_{i=1}^3 a_{ij} v'_i$
*   This is the transformation rule for vector components when moving to a new coordinate system.
*   **Important:** The transformation matrix $A$ with elements $a_{ij}$ is an orthogonal matrix for rotations: $A A^T = I$. This means the inverse transformation is $v'_k = \sum_{j=1}^3 a_{kj} v_j$.

---

### **4. Tensor Notation: Einstein Summation Convention**

**4.1 The Convention**

*   When an index is repeated in a single term, it implies summation over all possible values of that index (usually from 1 to 3 in Cartesian systems).
*   The summation symbol ($\Sigma$) is omitted.
*   **Example:**
    *   $v_j = \sum_{i=1}^3 a_{ij} v'_i$ becomes $v_j = a_{ij} v'_i$.
    *   $\mathbf{v} \cdot \mathbf{w} = \sum_{i=1}^3 v_i w_i$ becomes $v_i w_i$.

**4.2 Types of Indices**

*   **Free Index:** Appears once in each term of an equation (e.g., $j$ in $v_j = a_{ij} v'_i$). Free indices must be the same on both sides of an equation and must be the same across all terms in a sum.
*   **Dummy Index:** Appears twice in a term (once as a subscript, once as a superscript, or twice as a subscript/superscript in Cartesian systems). It represents a summation and can be renamed without changing the meaning.
    *   Example: $v_i = a_{ij} v'_j$ is the same as $v_k = a_{kj} v'_j$.

**4.3 Rules for Summation Convention**

1.  A repeated index within a single term implies summation over the range of that index (e.g., $A_{ij} B_{jk} C_k$ means $A_{ij} B_{j1} C_1 + A_{ij} B_{j2} C_2 + A_{ij} B_{j3} C_3$).
2.  An index that appears only once in a term is a free index.
3.  The number of free indices must be the same on both sides of an equation.
4.  No index should appear more than twice in a single term.

---

### **5. Rank 2 Tensors and Their Transformations**

**5.1 General Transformation Rule**

*   A quantity $T_{kl}$ is a rank 2 tensor if its components transform according to the following rule when changing from a coordinate system with basis vectors $\mathbf{e}_j$ to a system with basis vectors $\mathbf{e}'_i$:
    *   $T'_{pq} = a_{pi} a_{qj} T_{ij}$
    *   where $a_{pi}$ is the cosine of the angle between $\mathbf{e}'_p$ and $\mathbf{e}_i$.
*   In summation notation: $T'_{pq} = a_{pi} a_{qj} T_{ij}$.

**5.2 Example: Stress Tensor Transformation**

Let $\boldsymbol{\sigma}$ be the stress tensor. In a coordinate system $(x_1, x_2, x_3)$, its components are $\sigma_{ij}$. In a rotated system $(x'_1, x'_2, x'_3)$ with direction cosines $a_{ij}$ (where $a_{ij} = \cos(\text{angle between } x'_i \text{ and } x_j)$), the new components $\sigma'_{pq}$ are given by:

$\sigma'_{pq} = a_{pi} a_{qj} \sigma_{ij}$

Using summation convention:

$\sigma'_{pq} = a_{pi} a_{qj} \sigma_{ij}$

**5.3 Symmetric Tensors**

*   A tensor $T_{ij}$ is symmetric if $T_{ij} = T_{ji}$ for all $i, j$.
*   **Examples in Fluid Mechanics:**
    *   **Stress Tensor ($\boldsymbol{\sigma}$):** In the absence of body couples, the stress tensor is symmetric ($\sigma_{ij} = \sigma_{ji}$).
    *   **Strain Rate Tensor ($\mathbf{D}$):** The strain rate tensor is always symmetric.
*   **Importance:** Symmetry reduces the number of independent components of a tensor. A symmetric rank 2 tensor in 3D has 6 independent components (compared to 9 for a non-symmetric one).

**5.4 Antisymmetric Tensors**

*   A tensor $A_{ij}$ is antisymmetric if $A_{ij} = -A_{ji}$ for all $i, j$.
*   **Property:** The diagonal elements of an antisymmetric tensor are always zero ($A_{ii} = 0$).
*   **Decomposition:** Any rank 2 tensor $T_{ij}$ can be decomposed into a symmetric part ($S_{ij}$) and an antisymmetric part ($A_{ij}$):
    *   $T_{ij} = S_{ij} + A_{ij}$
    *   $S_{ij} = \frac{1}{2}(T_{ij} + T_{ji})$
    *   $A_{ij} = \frac{1}{2}(T_{ij} - T_{ji})$
*   **Connection to Rotation:** The antisymmetric part of a rank 2 tensor is related to the angular velocity of a fluid element.

---

### **6. Important Tensor Operations**

**6.1 Contraction**

*   **Definition:** Setting a free index equal to a dummy index and summing. This reduces the rank of the tensor by 2.
*   **Example:** For a rank 2 tensor $T_{ij}$, contraction means setting $i=j$ and summing:
    *   $T_{ii} = T_{11} + T_{22} + T_{33}$
*   **Result:** The result of contracting the indices of a rank 2 tensor is a scalar (the trace of the tensor).
    *   Trace($\boldsymbol{T}$) = $T_{ii}$
*   **Application:** The trace of the stress tensor is related to the pressure. The trace of the strain rate tensor is related to the volumetric strain rate.

**6.2 Dot Product (Tensor-Vector)**

*   **Definition:** Contracting a tensor with a vector.
*   **Example:** Contracting a rank 2 tensor $T_{ij}$ with a vector $v_j$:
    *   $w_i = T_{ij} v_j$
*   **Result:** This operation results in a vector. This is how a stress tensor acts on a normal vector to produce a traction vector (force per unit area).

**6.3 Outer Product (Vector-Vector)**

*   **Definition:** Forming a rank 2 tensor from two vectors.
*   **Example:** For vectors $\mathbf{u}$ and $\mathbf{v}$ with components $u_i$ and $v_j$:
    *   $T_{ij} = u_i v_j$
*   **Result:** This forms a rank 2 tensor. For example, the rate of strain tensor can be formed from velocity gradients.

---

### **7. Identity Tensor (Kronecker Delta)**

**7.1 Definition**

*   The Kronecker delta ($\delta_{ij}$) is a rank 2 tensor defined as:
    *   $\delta_{ij} = 1$ if $i = j$
    *   $\delta_{ij} = 0$ if $i \neq j$
*   **Matrix Form:**
    $$
    \begin{pmatrix}
    1 & 0 & 0 \\
    0 & 1 & 0 \\
    0 & 0 & 1
    \end{pmatrix}
    $$
*   **Properties:** It represents the identity transformation. It behaves like a coordinate system (orthonormal basis vectors).

**7.2 Properties and Uses**

*   **Summation Property:** $\delta_{ij} V_j = V_i$ (contraction with a vector)
    *   This means $\delta_{ij}$ "picks out" the $i$-th component of the vector.
*   **Summation Property:** $\delta_{ij} T_{jk} = T_{ik}$ (contraction with a tensor)
    *   This means $\delta_{ij}$ selects the $i$-th row and $k$-th column of the tensor.
*   **Orthogonality:** The Kronecker delta components satisfy the orthogonality relations for direction cosines:
    *   $a_{ik} a_{jk} = \delta_{ij}$ (columns are orthonormal)
    *   $a_{ki} a_{kj} = \delta_{ij}$ (rows are orthonormal)

---

### **8. Tensor Representation in Fluid Mechanics**

**8.1 Stress Tensor ($\boldsymbol{\sigma}$)**

*   **Definition:** $\sigma_{ij}$ is the force per unit area in the $i$-direction acting on a surface with a normal in the $j$-direction.
*   **Physical Interpretation:**
    *   $\sigma_{11}, \sigma_{22}, \sigma_{33}$: Normal stresses (tension is positive)
    *   $\sigma_{12}, \sigma_{13}, \sigma_{21}, \sigma_{23}, \sigma_{31}, \sigma_{32}$: Shear stresses
*   **Newtonian Fluids:** For a Newtonian fluid, the stress tensor is related to the strain rate tensor ($\mathbf{D}$) and pressure ($p$):
    *   $\sigma_{ij} = -p \delta_{ij} + 2\mu D_{ij}$
    *   Where $\mu$ is the dynamic viscosity and $D_{ij}$ is the strain rate tensor component.
    *   The term $-p \delta_{ij}$ represents the isotropic pressure contribution.
    *   The term $2\mu D_{ij}$ represents the viscous stress contribution.
    *   Note: Some texts may use $\lambda$ and $\kappa$ for bulk and second viscosity coefficients, leading to $\sigma_{ij} = -\left(p - \kappa \nabla \cdot \mathbf{v}\right) \delta_{ij} + 2\mu D_{ij}$, where $p$ is thermodynamic pressure. For incompressible fluids, $\nabla \cdot \mathbf{v} = 0$, simplifying the pressure term.

**8.2 Strain Rate Tensor ($\mathbf{D}$)**

*   **Definition:** Describes the rate of deformation of a fluid element.
*   **Components:** Derived from velocity gradients.
    *   $v_i$ is the velocity vector.
    *   The velocity gradient tensor is $\frac{\partial v_i}{\partial x_j}$.
    *   The strain rate tensor is the symmetric part of the velocity gradient tensor:
        $D_{ij} = \frac{1}{2} \left( \frac{\partial v_i}{\partial x_j} + \frac{\partial v_j}{\partial x_i} \right)$
*   **Physical Interpretation:**
    *   $D_{ii} = \frac{\partial v_i}{\partial x_i}$ represents the rate of extensional strain along the $i$-axis.
    *   The sum $D_{11} + D_{22} + D_{33} = \frac{\partial v_1}{\partial x_1} + \frac{\partial v_2}{\partial x_2} + \frac{\partial v_3}{\partial x_3} = \nabla \cdot \mathbf{v}$ is the volumetric strain rate (rate of change of volume per unit volume).
    *   Off-diagonal components ($D_{ij}$ for $i \neq j$) represent shear strain rates.

---

### **9. Learning Outcomes Revisited**

By the end of this topic, you should be able to:

*   **Understand the need for tensors in fluid mechanics:** Recognize that scalars and vectors are insufficient for describing complex physical quantities like stress and strain in a coordinate-independent manner.
*   **Define and classify tensors by rank:** Differentiate between scalars (rank 0), vectors (rank 1), and rank 2 tensors, and understand the meaning of their indices.
*   **Understand Cartesian coordinate transformations:** Explain how components of vectors and tensors change under rotation of coordinate axes.
*   **Apply the Einstein summation convention:** Use the convention effectively to simplify tensor notation.
*   **Understand the transformation law for rank 2 tensors:** Apply the $a_{pi} a_{qj} T_{ij}$ rule.
*   **Recognize symmetric and antisymmetric tensors:** Understand their properties and significance (e.g., stress tensor symmetry, antisymmetric part related to rotation).
*   **Perform basic tensor operations:** Understand contraction and its results (scalar, trace), dot product (tensor-vector to vector), and outer product (vector-vector to rank 2 tensor).
*   **Understand the role of the Kronecker delta:** Recognize it as the identity tensor and its summation properties.
*   **Relate tensor quantities to physical concepts:** Understand the physical meaning of components of the stress and strain rate tensors.

---

### **10. Practice Questions**

**Question 1:**

If a vector $\mathbf{v}$ has components $v_1=2$, $v_2=-1$, $v_3=3$ in a Cartesian system, what are its components $v'_1, v'_2, v'_3$ in a new Cartesian system obtained by rotating the original system by $90^\circ$ about the $x_3$-axis (such that $x'_1$ aligns with $x_2$ and $x'_2$ aligns with $-x_1$)?

**Question 2:**

Given the rank 2 tensor $T_{ij}$ with components:
$$
T = \begin{pmatrix}
5 & 1 & 3 \\
1 & 4 & 2 \\
3 & 2 & 6
\end{pmatrix}
$$
(a) Is this tensor symmetric?
(b) Calculate the trace of the tensor ($T_{ii}$).
(c) Decompose $T_{ij}$ into its symmetric ($S_{ij}$) and antisymmetric ($A_{ij}$) parts.

**Question 3:**

Let $\mathbf{u}$ be a vector with components $u_i$ and $\mathbf{v}$ be a vector with components $v_j$. Show that the outer product $T_{ij} = u_i v_j$ transforms as a rank 2 tensor under coordinate rotation.

**Question 4:**

Using the Einstein summation convention, write out the full expression for the following:
(a) $A_{ij} B_j$
(b) $C_{iik}$
(c) $v_i = \delta_{ij} v_j$

**Question 5:**

The stress tensor $\sigma_{ij}$ transforms to $\sigma'_{pq} = a_{pi} a_{qj} \sigma_{ij}$. If the transformation is a pure rotation, prove that the transformed tensor $\sigma'_{pq}$ is also symmetric if the original tensor $\sigma_{ij}$ was symmetric.

---

### **11. Answers to Practice Questions**

**Answer 1:**

The rotation matrix for $90^\circ$ about the $x_3$-axis is:
$a_{ij} = \begin{pmatrix}
0 & 1 & 0 \\
-1 & 0 & 0 \\
0 & 0 & 1
\end{pmatrix}$

The transformation rule for vector components is $v'_i = a_{ij} v_j$.

$v'_1 = a_{1j} v_j = a_{11} v_1 + a_{12} v_2 + a_{13} v_3 = (0)(2) + (1)(-1) + (0)(3) = -1$
$v'_2 = a_{2j} v_j = a_{21} v_1 + a_{22} v_2 + a_{23} v_3 = (-1)(2) + (0)(-1) + (0)(3) = -2$
$v'_3 = a_{3j} v_j = a_{31} v_1 + a_{32} v_2 + a_{33} v_3 = (0)(2) + (0)(-1) + (1)(3) = 3$

So, $v'_1 = -1$, $v'_2 = -2$, $v'_3 = 3$.

**Answer 2:**

(a) The tensor is symmetric because $T_{ij} = T_{ji}$ for all $i, j$ (e.g., $T_{12}=1$, $T_{21}=1$; $T_{13}=3$, $T_{31}=3$; $T_{23}=2$, $T_{32}=2$).

(b) The trace is $T_{ii} = T_{11} + T_{22} + T_{33} = 5 + 4 + 6 = 15$.

(c)
Symmetric part: $S_{ij} = \frac{1}{2}(T_{ij} + T_{ji})$. Since $T_{ij} = T_{ji}$, $S_{ij} = T_{ij}$.
$$
S = \begin{pmatrix}
5 & 1 & 3 \\
1 & 4 & 2 \\
3 & 2 & 6
\end{pmatrix}
$$
Antisymmetric part: $A_{ij} = \frac{1}{2}(T_{ij} - T_{ji})$. Since $T_{ij} = T_{ji}$, $A_{ij} = 0$.
$$
A = \begin{pmatrix}
0 & 0 & 0 \\
0 & 0 & 0 \\
0 & 0 & 0
\end{pmatrix}
$$
Check: $S_{ij} + A_{ij} = T_{ij}$.

**Answer 3:**

Let $T'_{pq} = u'_p v'_q$.
We know that vector components transform as $u'_p = a_{pi} u_i$ and $v'_q = a_{qj} v_j$.
Substituting these into the expression for $T'_{pq}$:
$T'_{pq} = (a_{pi} u_i) (a_{qj} v_j)$
$T'_{pq} = a_{pi} a_{qj} (u_i v_j)$
Since $T_{ij} = u_i v_j$, we have:
$T'_{pq} = a_{pi} a_{qj} T_{ij}$
This is the transformation law for a rank 2 tensor, so the outer product $u_i v_j$ is indeed a rank 2 tensor.

**Answer 4:**

(a) $A_{ij} B_j = A_{i1} B_1 + A_{i2} B_2 + A_{i3} B_3$. The result is a vector with components $w_i = A_{ij} B_j$.

(b) $C_{iik} = C_{11k} + C_{22k} + C_{33k}$. This is a contraction of the first two indices of a rank 3 tensor $C_{iik}$. The result is a vector.

(c) $v_i = \delta_{ij} v_j = \delta_{i1} v_1 + \delta_{i2} v_2 + \delta_{i3} v_3$.
If $i=1$, $v_1 = (1)v_1 + (0)v_2 + (0)v_3 = v_1$.
If $i=2$, $v_2 = (0)v_1 + (1)v_2 + (0)v_3 = v_2$.
If $i=3$, $v_3 = (0)v_1 + (0)v_2 + (1)v_3 = v_3$.
This shows that $\delta_{ij}$ acts as the identity in contracting with a vector, effectively yielding the vector itself.

**Answer 5:**

Given $\sigma_{ij} = \sigma_{ji}$ and $\sigma'_{pq} = a_{pi} a_{qj} \sigma_{ij}$.
We want to show $\sigma'_{pq} = \sigma'_{qp}$.
Consider $\sigma'_{qp}$:
$\sigma'_{qp} = a_{qp} a_{kj} \sigma_{kj}$
Let's relabel the indices for clarity. If we use $a_{qi}$ and $a_{pj}$ for $\sigma'_{qp}$:
$\sigma'_{qp} = a_{qi} a_{pj} \sigma_{ij}$
Now, since the rotation matrix is orthogonal, $a_{qi} = a_{iq}$ and $a_{pj} = a_{jp}$.
So, $\sigma'_{qp} = a_{iq} a_{jp} \sigma_{ij}$.
We can rearrange the terms and swap dummy indices:
$\sigma'_{qp} = a_{pi} a_{qj} \sigma_{ji}$
Since the original tensor is symmetric, $\sigma_{ji} = \sigma_{ij}$:
$\sigma'_{qp} = a_{pi} a_{qj} \sigma_{ij}$
This is precisely the definition of $\sigma'_{pq}$. Therefore, $\sigma'_{pq} = \sigma'_{qp}$, meaning $\sigma'_{pq}$ is also symmetric.

---

### **12. Important Points to Remember**

*   **Coordinate Independence:** Tensors describe physical reality, not the chosen coordinate system.
*   **Rank:** Determines the number of indices needed.
*   **Einstein Summation Convention:** Essential for simplifying notation and understanding tensor algebra.
*   **Transformation Rules:** The core of tensor analysis – how components change under coordinate changes.
*   **Symmetry:** A key property of many physical tensors (like stress) that reduces independent components.
*   **Contraction:** Reduces tensor rank and often yields scalar or vector quantities with physical significance (e.g., trace, divergence).
*   **Kronecker Delta ($\delta_{ij}$):** The identity tensor, crucial for summation properties and basis transformations.
*   **Stress and Strain Rate:** Fundamental tensors in fluid mechanics directly related to fluid behavior.
