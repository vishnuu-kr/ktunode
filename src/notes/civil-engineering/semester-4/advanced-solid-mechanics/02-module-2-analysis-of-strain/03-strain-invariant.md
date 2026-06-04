---
title: "Strain Invariant"
subject: "ADVANCED SOLID MECHANICS"
module: "Module 2: Analysis of strain"
branch: "Civil Engineering"
semester: 4
topicId: "689f15cb56b5e963ba8109f6"
status: "completed"
scrapedAt: "2026-05-20T18:42:33.504Z"
---
# Advanced Solid Mechanics: Module 2 - Analysis of Strain

## Topic: Strain Invariants

---

### Learning Outcomes:

Upon completion of this topic, you will be able to:

*   Understand the concept of strain invariants.
*   Identify and derive the first, second, and third strain invariants.
*   Explain the physical significance of strain invariants.
*   Apply strain invariants in stress-strain relationships.
*   Utilize strain invariants for simplifying complex strain analyses.

---

### 1. Introduction to Strain Invariants

**Concept:**
Strain invariants are scalar quantities derived from the components of the strain tensor that remain unchanged regardless of the chosen coordinate system. In essence, they represent fundamental, intrinsic properties of the deformation state, independent of how we choose to describe it.

**Why are they important?**
*   **Coordinate System Independence:** They allow us to make statements about the deformation state without being tied to a specific orientation of our measurement axes.
*   **Simplification:** They can simplify complex constitutive equations (stress-strain relationships) by focusing on fundamental deformation characteristics.
*   **Physical Interpretation:** Certain invariants have clear physical meanings, such as the volume change and the angular distortion.

**The Strain Tensor:**
Recall that the infinitesimal strain tensor ($\epsilon$) in Cartesian coordinates is given by:

$$
\mathbf{\epsilon} =
\begin{bmatrix}
\epsilon_{xx} & \epsilon_{xy} & \epsilon_{xz} \\
\epsilon_{yx} & \epsilon_{yy} & \epsilon_{yz} \\
\epsilon_{zx} & \epsilon_{zy} & \epsilon_{zz}
\end{bmatrix}
$$

Where:
*   $\epsilon_{xx}$, $\epsilon_{yy}$, $\epsilon_{zz}$ are normal strains in the x, y, and z directions, respectively.
*   $\epsilon_{xy} = \epsilon_{yx}$, $\epsilon_{xz} = \epsilon_{zx}$, $\epsilon_{yz} = \epsilon_{zy}$ are shear strains.

---

### 2. Derivation of Strain Invariants

The strain invariants are derived from the characteristic equation of the strain tensor:

$$
\det(\mathbf{\epsilon} - \lambda \mathbf{I}) = 0
$$

where $\lambda$ represents the principal strains, and $\mathbf{I}$ is the identity matrix. This cubic equation in $\lambda$ can be written in the general form:

$$
-\lambda^3 + I_1 \lambda^2 - I_2 \lambda + I_3 = 0
$$

The coefficients $I_1$, $I_2$, and $I_3$ are the strain invariants.

#### 2.1. First Strain Invariant ($I_1$)

**Definition:**
The first strain invariant is the trace of the strain tensor.

**Derivation:**
For a general 3x3 matrix, the characteristic equation is given by:
$-\lambda^3 + \text{tr}(\mathbf{A})\lambda^2 - \frac{1}{2}[(\text{tr}(\mathbf{A}))^2 - \text{tr}(\mathbf{A}^2)]\lambda + \det(\mathbf{A}) = 0$

Comparing this to the general form $-\lambda^3 + I_1 \lambda^2 - I_2 \lambda + I_3 = 0$, we get:

$I_1 = \text{tr}(\mathbf{\epsilon}) = \epsilon_{xx} + \epsilon_{yy} + \epsilon_{zz}$

**Physical Significance:**
*   $I_1$ is directly related to the **volumetric strain** or **dilatation**.
*   If $\Delta V$ is the change in volume of a small material element with initial volume $V_0$, then:
    $\frac{\Delta V}{V_0} = \epsilon_{xx} + \epsilon_{yy} + \epsilon_{zz} = I_1$

**Important Point to Remember:**
The first strain invariant ($I_1$) represents the volumetric strain of the material element.

#### 2.2. Second Strain Invariant ($I_2$)

**Definition:**
The second strain invariant is the sum of the principal minors of the strain tensor.

**Derivation:**
From the characteristic equation:
$I_2 = \frac{1}{2}[(\text{tr}(\mathbf{\epsilon}))^2 - \text{tr}(\mathbf{\epsilon}^2)]$

Let's expand this:
$\text{tr}(\mathbf{\epsilon}) = \epsilon_{xx} + \epsilon_{yy} + \epsilon_{zz}$
$(\text{tr}(\mathbf{\epsilon}))^2 = (\epsilon_{xx} + \epsilon_{yy} + \epsilon_{zz})^2 = \epsilon_{xx}^2 + \epsilon_{yy}^2 + \epsilon_{zz}^2 + 2\epsilon_{xy}^2 + 2\epsilon_{xz}^2 + 2\epsilon_{yz}^2$ (using $\epsilon_{xy} = \epsilon_{yx}$ etc.)

$\mathbf{\epsilon}^2 = \begin{bmatrix}
\epsilon_{xx} & \epsilon_{xy} & \epsilon_{xz} \\
\epsilon_{yx} & \epsilon_{yy} & \epsilon_{yz} \\
\epsilon_{zx} & \epsilon_{zy} & \epsilon_{zz}
\end{bmatrix}
\begin{bmatrix}
\epsilon_{xx} & \epsilon_{xy} & \epsilon_{xz} \\
\epsilon_{yx} & \epsilon_{yy} & \epsilon_{yz} \\
\epsilon_{zx} & \epsilon_{zy} & \epsilon_{zz}
\end{bmatrix}$

$\text{tr}(\mathbf{\epsilon}^2) = (\epsilon_{xx}^2 + \epsilon_{xy}\epsilon_{yx} + \epsilon_{xz}\epsilon_{zx}) + (\epsilon_{yx}\epsilon_{xy} + \epsilon_{yy}^2 + \epsilon_{yz}\epsilon_{zy}) + (\epsilon_{zx}\epsilon_{xz} + \epsilon_{zy}\epsilon_{yz} + \epsilon_{zz}^2)$
$\text{tr}(\mathbf{\epsilon}^2) = \epsilon_{xx}^2 + \epsilon_{yy}^2 + \epsilon_{zz}^2 + 2\epsilon_{xy}^2 + 2\epsilon_{yz}^2 + 2\epsilon_{zx}^2$

So, $(\text{tr}(\mathbf{\epsilon}))^2 - \text{tr}(\mathbf{\epsilon}^2) = 2\epsilon_{xx}\epsilon_{yy} + 2\epsilon_{yy}\epsilon_{zz} + 2\epsilon_{zz}\epsilon_{xx} - 2\epsilon_{xy}^2 - 2\epsilon_{yz}^2 - 2\epsilon_{zx}^2$ (careful expansion needed here for full accuracy, let's re-evaluate)

Let's use the definition of principal minors directly. For a 3x3 matrix $\mathbf{A}$:
$I_1 = A_{11} + A_{22} + A_{33}$
$I_2 = \begin{vmatrix} A_{11} & A_{12} \\ A_{21} & A_{22} \end{vmatrix} + \begin{vmatrix} A_{11} & A_{13} \\ A_{31} & A_{33} \end{vmatrix} + \begin{vmatrix} A_{22} & A_{23} \\ A_{32} & A_{33} \end{vmatrix}$
$I_3 = \det(\mathbf{A})$

Applying this to the strain tensor $\mathbf{\epsilon}$:

$I_2 = (\epsilon_{xx}\epsilon_{yy} - \epsilon_{xy}^2) + (\epsilon_{xx}\epsilon_{zz} - \epsilon_{xz}^2) + (\epsilon_{yy}\epsilon_{zz} - \epsilon_{yz}^2)$

**Physical Significance:**
*   $I_2$ is related to the **change in the square of the area** of a plane. More precisely, it's related to the shear deformation and the distortional component of strain.
*   In 2D, the second invariant is related to the area change of a small disk.
*   It represents the sum of the changes in area of the three principal planes, scaled by their initial areas.

**Important Point to Remember:**
The second strain invariant ($I_2$) captures information about the distortion or angular change within the material, independent of volumetric changes.

#### 2.3. Third Strain Invariant ($I_3$)

**Definition:**
The third strain invariant is the determinant of the strain tensor.

**Derivation:**
$I_3 = \det(\mathbf{\epsilon}) = \epsilon_{xx}(\epsilon_{yy}\epsilon_{zz} - \epsilon_{yz}^2) - \epsilon_{xy}(\epsilon_{yx}\epsilon_{zz} - \epsilon_{yz}\epsilon_{zx}) + \epsilon_{xz}(\epsilon_{yx}\epsilon_{zy} - \epsilon_{yy}\epsilon_{zx})$

Using $\epsilon_{xy} = \epsilon_{yx}$, $\epsilon_{xz} = \epsilon_{zx}$, $\epsilon_{yz} = \epsilon_{zy}$:
$I_3 = \epsilon_{xx}(\epsilon_{yy}\epsilon_{zz} - \epsilon_{yz}^2) - \epsilon_{xy}(2\epsilon_{xy}\epsilon_{zz} - \epsilon_{yz}\epsilon_{zx}) + \epsilon_{xz}(\epsilon_{xy}\epsilon_{yz} - \epsilon_{yy}\epsilon_{xz})$
$I_3 = \epsilon_{xx}\epsilon_{yy}\epsilon_{zz} - \epsilon_{xx}\epsilon_{yz}^2 - 2\epsilon_{xy}^2\epsilon_{zz} + 2\epsilon_{xy}\epsilon_{yz}\epsilon_{zx} + \epsilon_{xy}\epsilon_{yz}\epsilon_{xz} - \epsilon_{yy}\epsilon_{xz}^2$

Simplifying and grouping terms (note that the $2\epsilon_{xy}\epsilon_{yz}\epsilon_{zx}$ term will combine with another term):
$I_3 = \epsilon_{xx}\epsilon_{yy}\epsilon_{zz} + 2\epsilon_{xy}\epsilon_{yz}\epsilon_{zx} - \epsilon_{xx}\epsilon_{yz}^2 - \epsilon_{yy}\epsilon_{xz}^2 - \epsilon_{zz}\epsilon_{xy}^2$

**Physical Significance:**
*   $I_3$ is related to the **product of the principal strains**.
*   It represents the **change in volume of a unit cube**.

**Important Point to Remember:**
The third strain invariant ($I_3$) is the determinant of the strain tensor and signifies the overall volumetric change, similar to $I_1$ but in a multiplicative sense.

---

### 3. Strain Invariants in Principal Coordinates

When the strain tensor is transformed into its principal coordinate system, the off-diagonal shear strain components become zero. Let the principal strains be $\epsilon_1, \epsilon_2, \epsilon_3$. The strain tensor in principal coordinates is:

$$
\mathbf{\epsilon}_p =
\begin{bmatrix}
\epsilon_1 & 0 & 0 \\
0 & \epsilon_2 & 0 \\
0 & 0 & \epsilon_3
\end{bmatrix}
$$

The strain invariants in this system are:

*   **First Invariant ($I_1$):**
    $I_1 = \epsilon_1 + \epsilon_2 + \epsilon_3$ (Sum of principal strains)

*   **Second Invariant ($I_2$):**
    $I_2 = (\epsilon_1\epsilon_2 - 0^2) + (\epsilon_1\epsilon_3 - 0^2) + (\epsilon_2\epsilon_3 - 0^2)$
    $I_2 = \epsilon_1\epsilon_2 + \epsilon_2\epsilon_3 + \epsilon_3\epsilon_1$ (Sum of products of principal strains taken two at a time)

*   **Third Invariant ($I_3$):**
    $I_3 = \det(\mathbf{\epsilon}_p) = \epsilon_1\epsilon_2\epsilon_3$ (Product of principal strains)

This demonstrates that the values of the invariants are the same regardless of the coordinate system used.

---

### 4. Application of Strain Invariants

#### 4.1. Relating Strain to Principal Strains

The characteristic equation:
$-\lambda^3 + I_1 \lambda^2 - I_2 \lambda + I_3 = 0$
where $\lambda = \epsilon_1, \epsilon_2, \epsilon_3$.

This equation allows us to find the principal strains if the invariants are known, or vice-versa.

#### 4.2. Constitutive Relations (Hooke's Law)

In linear elasticity, stress and strain are related by Hooke's Law. Many constitutive models can be expressed more compactly using strain invariants. For an isotropic material, the stress tensor $\sigma$ can be related to the strain tensor $\epsilon$ as:

$\sigma = 2\mu \epsilon + \lambda_L \text{tr}(\epsilon) \mathbf{I}$

where $\mu$ is the shear modulus, and $\lambda_L$ is the Lamé parameter.
Notice that $\text{tr}(\epsilon)$ is the first strain invariant, $I_1$.

$\sigma = 2\mu \epsilon + \lambda_L I_1 \mathbf{I}$

This form highlights the role of the first strain invariant in the isotropic constitutive relationship. More complex invariants are also used in developing and verifying constitutive models, especially for materials exhibiting non-linear behavior or anisotropy.

#### 4.3. Simplification of Strain Analysis

Consider a complex strain state described by a strain tensor in a specific coordinate system. Calculating principal strains or other derived quantities directly can be cumbersome. If we can easily compute the strain invariants, we can then use the characteristic equation or other invariant-based relations to simplify the analysis.

For example, if we are given a strain tensor and asked to find the maximum shear strain, we first find the principal strains. The calculation of principal strains involves finding the roots of the characteristic equation, which is directly related to the strain invariants.

---

### 5. Practice Questions and Exercises

**Question 1:**
Given the following strain tensor in Cartesian coordinates:
$$
\mathbf{\epsilon} =
\begin{bmatrix}
0.002 & 0.001 & 0.000 \\
0.001 & 0.003 & 0.002 \\
0.000 & 0.002 & 0.004
\end{bmatrix}
$$
Calculate the three strain invariants ($I_1, I_2, I_3$).

**Solution 1:**
*   **First Invariant ($I_1$):**
    $I_1 = \epsilon_{xx} + \epsilon_{yy} + \epsilon_{zz} = 0.002 + 0.003 + 0.004 = 0.009$

*   **Second Invariant ($I_2$):**
    $I_2 = (\epsilon_{xx}\epsilon_{yy} - \epsilon_{xy}^2) + (\epsilon_{xx}\epsilon_{zz} - \epsilon_{xz}^2) + (\epsilon_{yy}\epsilon_{zz} - \epsilon_{yz}^2)$
    $I_2 = (0.002 \times 0.003 - 0.001^2) + (0.002 \times 0.004 - 0.000^2) + (0.003 \times 0.004 - 0.002^2)$
    $I_2 = (0.000006 - 0.000001) + (0.000008 - 0) + (0.000012 - 0.000004)$
    $I_2 = 0.000005 + 0.000008 + 0.000008 = 0.000021$

*   **Third Invariant ($I_3$):**
    $I_3 = \det(\mathbf{\epsilon}) = \epsilon_{xx}(\epsilon_{yy}\epsilon_{zz} - \epsilon_{yz}^2) - \epsilon_{xy}(\epsilon_{yx}\epsilon_{zz} - \epsilon_{yz}\epsilon_{zx}) + \epsilon_{xz}(\epsilon_{yx}\epsilon_{zy} - \epsilon_{yy}\epsilon_{zx})$
    $I_3 = 0.002((0.003)(0.004) - (0.002)^2) - 0.001((0.001)(0.004) - (0.002)(0.000)) + 0.000(\dots)$
    $I_3 = 0.002(0.000012 - 0.000004) - 0.001(0.000004 - 0)$
    $I_3 = 0.002(0.000008) - 0.001(0.000004)$
    $I_3 = 0.000000016 - 0.000000004 = 0.000000012$

**Question 2:**
For a state of pure shear in the xy-plane with shear strain $\gamma_{xy}$, the strain tensor is:
$$
\mathbf{\epsilon} =
\begin{bmatrix}
0 & \gamma_{xy}/2 & 0 \\
\gamma_{xy}/2 & 0 & 0 \\
0 & 0 & 0
\end{bmatrix}
$$
Calculate the strain invariants for this case.

**Solution 2:**
*   **First Invariant ($I_1$):**
    $I_1 = \epsilon_{xx} + \epsilon_{yy} + \epsilon_{zz} = 0 + 0 + 0 = 0$

*   **Second Invariant ($I_2$):**
    $I_2 = (\epsilon_{xx}\epsilon_{yy} - \epsilon_{xy}^2) + (\epsilon_{xx}\epsilon_{zz} - \epsilon_{xz}^2) + (\epsilon_{yy}\epsilon_{zz} - \epsilon_{yz}^2)$
    $I_2 = (0 \times 0 - (\gamma_{xy}/2)^2) + (0 \times 0 - 0^2) + (0 \times 0 - 0^2)$
    $I_2 = -(\gamma_{xy}/2)^2 = -\frac{\gamma_{xy}^2}{4}$

*   **Third Invariant ($I_3$):**
    $I_3 = \det(\mathbf{\epsilon}) = 0$ (Since the tensor has a zero row/column and is upper/lower triangular in form)

**Question 3:**
A material element is subjected to uniaxial strain $\epsilon_{xx} = \epsilon_0$, and $\epsilon_{yy} = \epsilon_{zz} = 0$, with all shear strains being zero.
$$
\mathbf{\epsilon} =
\begin{bmatrix}
\epsilon_0 & 0 & 0 \\
0 & 0 & 0 \\
0 & 0 & 0
\end{bmatrix}
$$
What are the strain invariants? What does this imply about the change in volume?

**Solution 3:**
*   **First Invariant ($I_1$):**
    $I_1 = \epsilon_{xx} + \epsilon_{yy} + \epsilon_{zz} = \epsilon_0 + 0 + 0 = \epsilon_0$

*   **Second Invariant ($I_2$):**
    $I_2 = (0 \times 0 - 0^2) + (\epsilon_0 \times 0 - 0^2) + (0 \times 0 - 0^2) = 0$

*   **Third Invariant ($I_3$):**
    $I_3 = \det(\mathbf{\epsilon}) = \epsilon_0 \times 0 \times 0 = 0$

**Implication for Volume Change:**
$I_1 = \epsilon_0$ represents the volumetric strain. If $\epsilon_0 > 0$, the material expands in volume. If $\epsilon_0 < 0$, it contracts. However, the fact that $I_2=0$ and $I_3=0$ implies that the deformation is purely axial and does not involve any shear or significant multidimensional volumetric changes (except along the axial direction).

---

### 6. Important Points to Remember

*   **Definition:** Strain invariants are scalar quantities derived from the strain tensor that are independent of the coordinate system.
*   **Three Invariants:** For a 3D strain tensor, there are three fundamental invariants: $I_1$ (trace), $I_2$ (sum of principal minors), and $I_3$ (determinant).
*   **Physical Significance:**
    *   $I_1$: Volumetric strain (dilatation).
    *   $I_2$: Related to distortion and shear deformation.
    *   $I_3$: Product of principal strains, also related to volumetric change.
*   **Principal Coordinates:** In the principal coordinate system, the invariants simplify to the sum, sum of pairwise products, and product of the principal strains ($\epsilon_1, \epsilon_2, \epsilon_3$).
*   **Characteristic Equation:** The invariants form the coefficients of the characteristic equation of the strain tensor, which helps in finding principal strains: $-\lambda^3 + I_1 \lambda^2 - I_2 \lambda + I_3 = 0$.
*   **Applications:** Strain invariants are crucial in simplifying constitutive equations (like Hooke's Law for isotropic materials) and in analyzing stress-strain behavior independently of orientation.

---
