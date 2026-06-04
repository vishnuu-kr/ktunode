---
title: "Introduction to theory of elasticity – 3D stress components in rectangular and cylindrical coordinate systems– strain-displacement relations (no derivation required) - constitutive equations (no derivation required)-stress transformation– octahedral shear stress-equations of equilibrium."
subject: "ADVANCED MECHANICS OF SOLIDS"
module: "Module 1: Introduction to theory of elasticity – 3D stress components in rectangular and cylindrical coordinate systems– strain"
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf480446325e"
status: "completed"
scrapedAt: "2026-05-20T17:51:11.366Z"
---
# ADVANCED MECHANICS OF SOLIDS - MODULE 1: INTRODUCTION TO THEORY OF ELASTICITY

## 1.1 Introduction to Theory of Elasticity

**Course Outcomes Addressed:** CO1 (K1 - Knowledge)

**Key Concepts:**

*   **Continuum Mechanics:** Assumes that the material is continuous and homogeneous, ignoring its atomic or molecular structure. This allows us to use differential equations to describe the behavior of solids.
*   **Elasticity:** The property of a material that allows it to deform under stress and return to its original shape and size when the stress is removed.
*   **Ideal Elastic Solid:** A hypothetical material that obeys Hooke's Law perfectly, meaning stress is directly proportional to strain.
*   **Stress:** Internal resistance of a material to an applied external force. It is force per unit area.
*   **Strain:** Deformation of a material under stress. It is a dimensionless quantity, often expressed as a ratio of deformation to original length.
*   **State of Stress/Strain:** The distribution of stress/strain at a point within a body.

**Importance:** The theory of elasticity provides a fundamental framework for analyzing the behavior of solid materials under load, enabling engineers to design safe and efficient structures and components. It bridges the gap between fundamental material properties and real-world engineering applications.

**Reference:**
*   **Timoshenko & Goodier:** Emphasizes the historical development and foundational principles of elasticity, particularly in early chapters.
*   **Srinath:** Provides a thorough introduction with a focus on mathematical formulation and applications.

---

## 1.2 3D Stress Components in Rectangular Coordinate System

**Course Outcomes Addressed:** CO1 (K1 - Knowledge)

**Key Concepts:**

*   **Stress Tensor:** A second-order tensor that describes the state of stress at a point. In a 3D rectangular (Cartesian) coordinate system (x, y, z), it is represented by a 3x3 matrix:

    ```
    [ σxx  σxy  σxz ]
    [ σyx  σyy  σyz ]
    [ σzx  σzy  σzz ]
    ```

*   **Normal Stresses ($\sigma_{ii}$):** Stresses acting perpendicular to a surface.
    *   $\sigma_{xx}$: Normal stress acting on a plane perpendicular to the x-axis, in the x-direction.
    *   $\sigma_{yy}$: Normal stress acting on a plane perpendicular to the y-axis, in the y-direction.
    *   $\sigma_{zz}$: Normal stress acting on a plane perpendicular to the z-axis, in the z-direction.

*   **Shear Stresses ($\sigma_{ij}$, where $i \neq j$):** Stresses acting parallel to a surface.
    *   $\sigma_{xy}$: Shear stress acting on a plane perpendicular to the x-axis, in the y-direction.
    *   $\sigma_{yx}$: Shear stress acting on a plane perpendicular to the y-axis, in the x-direction.
    *   Similarly for $\sigma_{xz}, \sigma_{zx}, \sigma_{yz}, \sigma_{zy}$.

*   **Symmetry of the Stress Tensor:** Due to the conservation of angular momentum, the stress tensor is symmetric, meaning $\sigma_{ij} = \sigma_{ji}$. Therefore, only six independent components are needed to describe the state of stress at a point: $\sigma_{xx}, \sigma_{yy}, \sigma_{zz}, \sigma_{xy}, \sigma_{xz}, \sigma_{yz}$.

**Example:** Consider a cube subjected to tensile stress in the x-direction and compressive stress in the y-direction.
*   $\sigma_{xx} = \text{Tensile stress}$
*   $\sigma_{yy} = \text{Compressive stress}$
*   $\sigma_{zz} = 0$ (assuming no stress in the z-direction)
*   All shear stresses are zero.

**Important Points to Remember:**
*   The first subscript indicates the direction of the normal to the plane, and the second subscript indicates the direction of the stress component.
*   The stress tensor is a fundamental concept for describing the internal forces within a deformed body.

**Reference:**
*   **Timoshenko & Goodier:** Chapter 1 provides a detailed introduction to stress components.
*   **Srinath:** Chapter 2 meticulously defines stress components and the stress tensor.
*   **Kazimi:** Offers a clear exposition of stress components with illustrative examples.

---

## 1.3 3D Stress Components in Cylindrical Coordinate System

**Course Outcomes Addressed:** CO1 (K1 - Knowledge), CO3 (K6 - Evaluation/Application - indirectly by enabling formulation for axisymmetric problems)

**Key Concepts:**

*   **Cylindrical Coordinates (r, θ, z):** Used for problems with cylindrical symmetry.
    *   `r`: Radial distance from the z-axis.
    *   `θ`: Azimuthal angle measured from the x-axis in the xy-plane.
    *   `z`: Axial coordinate, same as in Cartesian.

*   **Stress Tensor in Cylindrical Coordinates:** Represented by a 3x3 matrix:

    ```
    [ σrr  σrθ  σrz ]
    [ σθr  σθθ  σθz ]
    [ σzr  σzθ  σzz ]
    ```

*   **Normal Stresses ($\sigma_{ii}$):**
    *   $\sigma_{rr}$: Radial normal stress (perpendicular to the surface with normal in the r-direction).
    *   $\sigma_{\theta\theta}$: Circumferential or hoop stress (perpendicular to the surface with normal in the θ-direction).
    *   $\sigma_{zz}$: Axial normal stress (perpendicular to the surface with normal in the z-direction).

*   **Shear Stresses ($\sigma_{ij}$, where $i \neq j$):**
    *   $\sigma_{r\theta}$: Shear stress acting on a plane with normal in the r-direction, in the θ-direction (and vice versa, $\sigma_{\theta r} = \sigma_{r\theta}$).
    *   $\sigma_{rz}$: Shear stress acting on a plane with normal in the r-direction, in the z-direction (and vice versa, $\sigma_{zr} = \sigma_{rz}$).
    *   $\sigma_{\theta z}$: Shear stress acting on a plane with normal in the θ-direction, in the z-direction (and vice versa, $\sigma_{z\theta} = \sigma_{\theta z}$).

*   **Symmetry:** The stress tensor in cylindrical coordinates is also symmetric: $\sigma_{ij} = \sigma_{ji}$.

**Example:** A thick-walled cylinder subjected to internal pressure.
*   $\sigma_{rr}$ will be tensile and vary from the inner to the outer radius.
*   $\sigma_{\theta\theta}$ (hoop stress) will be tensile.
*   $\sigma_{zz}$ (axial stress) might be zero if the cylinder ends are open or subjected to specific boundary conditions.
*   Shear stresses are typically zero for purely radial pressure loading.

**Important Points to Remember:**
*   The transformation from Cartesian to cylindrical stress components is necessary for problems with rotational symmetry.
*   Understanding these components is crucial for analyzing pressure vessels, rotating discs, and other cylindrical structures.

**Reference:**
*   **Srinath:** Chapter 2 provides the transformation rules and stress components in cylindrical coordinates.
*   **Sadd:** Chapter 1 discusses different coordinate systems and their stress representations.

---

## 1.4 Strain-Displacement Relations (No Derivation Required)

**Course Outcomes Addressed:** CO1 (K1 - Knowledge)

**Key Concepts:**

*   **Strain Tensor:** A second-order tensor that describes the deformation at a point. In a 3D rectangular coordinate system, it is represented by a 3x3 matrix:

    ```
    [ εxx  εxy  εxz ]
    [ εyx  εyy  εyz ]
    [ εzx  εzy  εzz ]
    ```

*   **Normal Strains ($\varepsilon_{ii}$):**
    *   $\varepsilon_{xx} = \frac{\partial u}{\partial x}$: Normal strain in the x-direction.
    *   $\varepsilon_{yy} = \frac{\partial v}{\partial y}$: Normal strain in the y-direction.
    *   $\varepsilon_{zz} = \frac{\partial w}{\partial z}$: Normal strain in the z-direction.
    (where u, v, w are displacements in x, y, z directions respectively)

*   **Shear Strains ($\varepsilon_{ij}$, where $i \neq j$):**
    *   $\varepsilon_{xy} = \frac{1}{2} \left( \frac{\partial u}{\partial y} + \frac{\partial v}{\partial x} \right)$: Shear strain associated with the xy-plane.
    *   $\varepsilon_{yz} = \frac{1}{2} \left( \frac{\partial v}{\partial z} + \frac{\partial w}{\partial y} \right)$: Shear strain associated with the yz-plane.
    *   $\varepsilon_{zx} = \frac{1}{2} \left( \frac{\partial w}{\partial x} + \frac{\partial u}{\partial z} \right)$: Shear strain associated with the zx-plane.

*   **Symmetry of the Strain Tensor:** The strain tensor is also symmetric: $\varepsilon_{ij} = \varepsilon_{ji}$.

*   **Infinitesimal Deformation:** These relations are valid for small deformations (linear elasticity).

**Example:** If a small element of material undergoes pure shear in the xy-plane, the displacements might be $u = \gamma xy / 2$ and $v = \gamma xy / 2$, where $\gamma$ is the shear angle.
*   $\varepsilon_{xx} = 0$
*   $\varepsilon_{yy} = 0$
*   $\varepsilon_{xy} = \frac{1}{2} (\frac{\partial (\gamma xy/2)}{\partial y} + \frac{\partial (\gamma xy/2)}{\partial x}) = \frac{1}{2} (\frac{\gamma x}{2} + \frac{\gamma y}{2}) = \frac{\gamma}{4}(x+y)$
    *(Correction: For pure shear, $u = cy$ and $v = cx$ would result in $\varepsilon_{xy} = c$. A common representation for pure shear strain is when $\varepsilon_{xx} = \varepsilon_{yy} = 0$ and $\varepsilon_{xy} \neq 0$. For example, if $u = -\gamma y / 2$ and $v = \gamma x / 2$, then $\varepsilon_{xy} = \frac{1}{2}(\frac{\partial (-\gamma y/2)}{\partial y} + \frac{\partial (\gamma x/2)}{\partial x}) = \frac{1}{2}(-\gamma/2 + \gamma/2) = 0$. This highlights the importance of understanding the exact definition used in the text. Let's use a standard definition where rotation is excluded from strain.)*

    A more direct example for shear strain: Consider a rectangular element deformed such that its sides, initially parallel to x and y axes, now make angles $\phi_{xy}$ with them. The shear strain $\gamma_{xy}$ is the change in the angle between two initially perpendicular lines. If a line along the x-axis deforms to have direction cosines $(1, \frac{\partial v}{\partial x}, 0)$ and a line along the y-axis deforms to have direction cosines $(\frac{\partial u}{\partial y}, 1, 0)$, the change in the angle between them is $\gamma_{xy} = \frac{\partial u}{\partial y} + \frac{\partial v}{\partial x}$.

**Important Points to Remember:**
*   Strain is directly related to the displacement field.
*   These relations are fundamental for bridging the gap between applied forces and material deformation.
*   The strain tensor is symmetric.

**Reference:**
*   **Timoshenko & Goodier:** Chapter 1 discusses strain and its relation to displacement.
*   **Srinath:** Chapter 2 details the strain-displacement relations in Cartesian and cylindrical coordinates.
*   **Kazimi:** Provides a clear explanation of how displacements lead to strains.

---

## 1.5 Constitutive Equations (No Derivation Required)

**Course Outcomes Addressed:** CO1 (K1 - Knowledge)

**Key Concepts:**

*   **Constitutive Equations:** Mathematical relationships that link stress and strain for a specific material. They define the material's mechanical behavior.

*   **Hooke's Law (Linear Elasticity):** For an isotropic, homogeneous, and linearly elastic material, the relationship between stress and strain is given by generalized Hooke's Law.

    *   **In terms of Lamé Parameters ($\lambda, \mu$):**
        *   $\sigma_{ij} = \lambda \epsilon_{kk} \delta_{ij} + 2\mu \epsilon_{ij}$
        *   Where $\epsilon_{kk} = \varepsilon_{xx} + \varepsilon_{yy} + \varepsilon_{zz}$ (volumetric strain) and $\delta_{ij}$ is the Kronecker delta ($\delta_{ij}=1$ if $i=j$, $\delta_{ij}=0$ if $i\neq j$).
        *   $\mu$ is the shear modulus (or modulus of rigidity).
        *   $\lambda$ is the Lamé's first parameter.

    *   **In terms of Young's Modulus (E) and Poisson's Ratio ($\nu$):**
        *   $\varepsilon_{xx} = \frac{1}{E} [\sigma_{xx} - \nu(\sigma_{yy} + \sigma_{zz})]$
        *   $\varepsilon_{yy} = \frac{1}{E} [\sigma_{yy} - \nu(\sigma_{xx} + \sigma_{zz})]$
        *   $\varepsilon_{zz} = \frac{1}{E} [\sigma_{zz} - \nu(\sigma_{xx} + \sigma_{yy})]$
        *   $\varepsilon_{xy} = \frac{1}{G} \sigma_{xy} = \frac{1+\nu}{E} \sigma_{xy}$ (where $G$ is the shear modulus, $G = \frac{E}{2(1+\nu)}$)
        *   Similarly for $\varepsilon_{yz}$ and $\varepsilon_{zx}$.

*   **Isotropic Material:** Material properties are the same in all directions.
*   **Homogeneous Material:** Material properties are the same at all points.
*   **Elastic Material:** Returns to its original shape after unloading.

**Example:** For a uniaxial tensile test along the x-axis: $\sigma_{xx} = \sigma$, $\sigma_{yy} = 0$, $\sigma_{zz} = 0$.
*   $\varepsilon_{xx} = \frac{\sigma}{E}$
*   $\varepsilon_{yy} = -\frac{\nu \sigma}{E}$
*   $\varepsilon_{zz} = -\frac{\nu \sigma}{E}$

**Important Points to Remember:**
*   Constitutive equations are material-dependent.
*   Generalized Hooke's Law is the foundation for linear elasticity.
*   The relationship between Lamé parameters, E, $\nu$, and G is critical.

**Reference:**
*   **Timoshenko & Goodier:** Chapter 1 extensively covers Hooke's Law and material properties.
*   **Srinath:** Chapter 2 details generalized Hooke's Law in various forms.
*   **Kazimi:** Provides a good overview of constitutive models for elastic materials.
*   **Sadd:** Discusses various constitutive models including generalized Hooke's Law.

---

## 1.6 Stress Transformation

**Course Outcomes Addressed:** CO1 (K1 - Knowledge)

**Key Concepts:**

*   **Stress Transformation:** The process of finding the stress components on a plane with a different orientation than the principal axes. This is essential for determining the maximum stresses or stresses on a specific plane.

*   **Mohr's Circle for Stress:** A graphical method to visualize stress transformation in 2D. For 3D stress, it's more complex, involving multiple circles.

*   **Equations for Stress Transformation (2D):** Given stress components $\sigma_x, \sigma_y, \tau_{xy}$ in a coordinate system (x, y), the stress components $\sigma_{x'}, \sigma_{y'}, \tau_{x'y'}$ in a rotated system (x', y') by an angle $\theta$ are:
    *   $\sigma_{x'} = \frac{\sigma_x + \sigma_y}{2} + \frac{\sigma_x - \sigma_y}{2} \cos(2\theta) + \tau_{xy} \sin(2\theta)$
    *   $\sigma_{y'} = \frac{\sigma_x + \sigma_y}{2} - \frac{\sigma_x - \sigma_y}{2} \cos(2\theta) - \tau_{xy} \sin(2\theta)$
    *   $\tau_{x'y'} = -\frac{\sigma_x - \sigma_y}{2} \sin(2\theta) + \tau_{xy} \cos(2\theta)$

*   **Principal Stresses:** The maximum and minimum normal stresses acting on a plane where the shear stress is zero. These occur at specific orientations called principal planes. The values are the roots of the characteristic equation of the stress tensor.

*   **Maximum Shear Stress:** The maximum shear stress occurs on planes oriented at 45 degrees to the principal planes.

*   **3D Stress Transformation:** For 3D, transformation involves a rotation matrix. The stress tensor components on a new coordinate system $(\mathbf{n}_1, \mathbf{n}_2, \mathbf{n}_3)$ related to the original $(\mathbf{e}_1, \mathbf{e}_2, \mathbf{e}_3)$ by a rotation matrix $[a_{ij}]$ (where $a_{ij} = \mathbf{n}_i \cdot \mathbf{e}_j$) are given by:
    *   $\sigma'_{ij} = a_{ik} a_{jl} \sigma_{kl}$

**Example:** Consider a 2D plane stress state with $\sigma_x = 100$ MPa, $\sigma_y = 50$ MPa, $\tau_{xy} = 20$ MPa. Find the stresses on a plane rotated by $\theta = 30^\circ$.
*   $\sigma_{x'} = \frac{100+50}{2} + \frac{100-50}{2} \cos(60^\circ) + 20 \sin(60^\circ)$
    $= 75 + 25(0.5) + 20(\frac{\sqrt{3}}{2}) = 75 + 12.5 + 17.32 = 104.82$ MPa
*   $\sigma_{y'} = 75 - 25(0.5) - 20(\frac{\sqrt{3}}{2}) = 75 - 12.5 - 17.32 = 45.18$ MPa
*   $\tau_{x'y'} = -\frac{100-50}{2} \sin(60^\circ) + 20 \cos(60^\circ)$
    $= -25(\frac{\sqrt{3}}{2}) + 20(0.5) = -21.65 + 10 = -11.65$ MPa

**Important Points to Remember:**
*   Stress is a tensor quantity and its components depend on the chosen coordinate system.
*   Principal stresses and maximum shear stresses are invariant properties of the stress state.
*   Understanding stress transformation is critical for failure analysis.

**Reference:**
*   **Timoshenko & Goodier:** Chapter 1 covers stress transformation and principal stresses.
*   **Srinath:** Chapter 3 provides detailed equations for stress transformation and Mohr's circle.
*   **Kazimi:** Explains stress transformation with practical examples.

---

## 1.7 Octahedral Shear Stress

**Course Outcomes Addressed:** CO1 (K1 - Knowledge)

**Key Concepts:**

*   **Octahedral Planes:** Three planes in a stress state that are inclined at equal angles (54.74 degrees) to the three principal stress axes. They are often called planes of maximum shear distortion.

*   **Octahedral Normal Stress ($\sigma_{oct}$):** The normal stress acting on the octahedral planes. It is the average of the principal stresses.
    *   $\sigma_{oct} = \frac{\sigma_1 + \sigma_2 + \sigma_3}{3}$
    *   This represents the hydrostatic component of stress.

*   **Octahedral Shear Stress ($\tau_{oct}$):** The shear stress acting on the octahedral planes. It is a measure of the distortional component of the stress state.
    *   $\tau_{oct} = \frac{1}{3} \sqrt{(\sigma_1 - \sigma_2)^2 + (\sigma_2 - \sigma_3)^2 + (\sigma_3 - \sigma_1)^2}$
    *   This is directly related to the deviatoric stress tensor.

**Importance:**
*   Octahedral shear stress is often used in plasticity and fracture mechanics theories as a criterion for yielding or failure.
*   It provides a measure of the intensity of shear deformation independent of the orientation of the coordinate system.

**Example:** If the principal stresses are $\sigma_1 = 100$ MPa, $\sigma_2 = 50$ MPa, $\sigma_3 = 20$ MPa.
*   $\sigma_{oct} = \frac{100 + 50 + 20}{3} = \frac{170}{3} = 56.67$ MPa
*   $\tau_{oct} = \frac{1}{3} \sqrt{(100 - 50)^2 + (50 - 20)^2 + (20 - 100)^2}$
    $= \frac{1}{3} \sqrt{(50)^2 + (30)^2 + (-80)^2} = \frac{1}{3} \sqrt{2500 + 900 + 6400}$
    $= \frac{1}{3} \sqrt{9800} \approx \frac{1}{3} (99) \approx 33$ MPa

**Important Points to Remember:**
*   Octahedral stresses are invariant with respect to coordinate transformations.
*   $\sigma_{oct}$ represents the hydrostatic stress, and $\tau_{oct}$ represents the deviatoric stress.

**Reference:**
*   **Srinath:** Chapter 3 discusses octahedral shear stress and its significance.
*   **Sadd:** Chapter 1 introduces invariant stress measures, including octahedral stress.

---

## 1.8 Equations of Equilibrium

**Course Outcomes Addressed:** CO1 (K1 - Knowledge)

**Key Concepts:**

*   **Equations of Equilibrium:** A set of differential equations that express the balance of forces acting on an infinitesimal element of material. They ensure that the element is in static equilibrium.

*   **In Rectangular Coordinates (x, y, z):** For a body in equilibrium, the following equations must be satisfied:
    *   $\frac{\partial \sigma_{xx}}{\partial x} + \frac{\partial \sigma_{xy}}{\partial y} + \frac{\partial \sigma_{xz}}{\partial z} + X = 0$
    *   $\frac{\partial \sigma_{yx}}{\partial x} + \frac{\partial \sigma_{yy}}{\partial y} + \frac{\partial \sigma_{yz}}{\partial z} + Y = 0$
    *   $\frac{\partial \sigma_{zx}}{\partial x} + \frac{\partial \sigma_{zy}}{\partial y} + \frac{\partial \sigma_{zz}}{\partial z} + Z = 0$
    Where (X, Y, Z) are the components of body forces per unit volume acting on the element.

*   **In Cylindrical Coordinates (r, θ, z):** For a body in equilibrium, the equations are:
    *   $\frac{\partial \sigma_{rr}}{\partial r} + \frac{1}{r} \frac{\partial \sigma_{r\theta}}{\partial \theta} + \frac{\partial \sigma_{rz}}{\partial z} + \frac{\sigma_{rr} - \sigma_{\theta\theta}}{r} + R = 0$
    *   $\frac{1}{r} \frac{\partial \sigma_{\theta\theta}}{\partial \theta} + \frac{\partial \sigma_{r\theta}}{\partial r} + \frac{\partial \sigma_{\theta z}}{\partial z} + \frac{2}{r} \sigma_{r\theta} + \Theta = 0$
    *   $\frac{\partial \sigma_{zr}}{\partial r} + \frac{1}{r} \frac{\partial \sigma_{z\theta}}{\partial \theta} + \frac{\partial \sigma_{zz}}{\partial z} + Z = 0$
    Where (R, $\Theta$, Z) are the components of body forces per unit volume.

*   **Body Forces:** Forces that act on the volume of the material, such as gravity or electromagnetic forces.

**Important Points to Remember:**
*   These equations are fundamental for any stress analysis in continuum mechanics.
*   They relate the spatial variation of stress components to the applied body forces.
*   The number of independent stress components (6) matches the number of equilibrium equations.

**Reference:**
*   **Timoshenko & Goodier:** Chapter 1 presents the equations of equilibrium in Cartesian coordinates.
*   **Srinath:** Chapter 2 provides the equations of equilibrium in both Cartesian and cylindrical coordinates.
*   **Kazimi:** Discusses the physical meaning and application of equilibrium equations.

---

## Practice Questions and Exercises

1.  **Stress Tensor:** For a 2D plane stress state, the stress components at a point are $\sigma_x = 50$ MPa, $\sigma_y = -20$ MPa, and $\tau_{xy} = 15$ MPa. What are the stress components on a plane oriented at $45^\circ$ counterclockwise from the x-axis?
    *   **Answer:**
        *   $\sigma_{x'} = \frac{50 + (-20)}{2} + \frac{50 - (-20)}{2} \cos(90^\circ) + 15 \sin(90^\circ) = \frac{30}{2} + 0 + 15(1) = 15 + 15 = 30$ MPa
        *   $\sigma_{y'} = \frac{30}{2} - 0 - 15(1) = 15 - 15 = 0$ MPa
        *   $\tau_{x'y'} = -\frac{50 - (-20)}{2} \sin(90^\circ) + 15 \cos(90^\circ) = -\frac{70}{2}(1) + 0 = -35$ MPa

2.  **Strain-Displacement:** If the displacement field is given by $u = ax^2$, $v = by^2$, and $w = cz^2$, find the strain components $\varepsilon_{xx}$, $\varepsilon_{yy}$, $\varepsilon_{zz}$, $\varepsilon_{xy}$, $\varepsilon_{yz}$, $\varepsilon_{zx}$.
    *   **Answer:**
        *   $\varepsilon_{xx} = \frac{\partial u}{\partial x} = 2ax$
        *   $\varepsilon_{yy} = \frac{\partial v}{\partial y} = 2by$
        *   $\varepsilon_{zz} = \frac{\partial w}{\partial z} = 2cz$
        *   $\varepsilon_{xy} = \frac{1}{2}(\frac{\partial u}{\partial y} + \frac{\partial v}{\partial x}) = \frac{1}{2}(0 + 0) = 0$
        *   $\varepsilon_{yz} = \frac{1}{2}(\frac{\partial v}{\partial z} + \frac{\partial w}{\partial y}) = \frac{1}{2}(0 + 0) = 0$
        *   $\varepsilon_{zx} = \frac{1}{2}(\frac{\partial w}{\partial x} + \frac{\partial u}{\partial z}) = \frac{1}{2}(0 + 0) = 0$

3.  **Constitutive Equations:** A long cylindrical rod of radius $R$ is subjected to a uniform tensile stress $\sigma_z$ along its axis and a uniform pressure $p$ on its outer surface. Assuming linear elastic, isotropic material, write the strain components $\varepsilon_{rr}$, $\varepsilon_{\theta\theta}$, and $\varepsilon_{zz}$ in terms of $\sigma_z$, $p$, E, and $\nu$. (Use cylindrical coordinates).
    *   **Answer:**
        *   Stress components: $\sigma_{rr} = -p$, $\sigma_{\theta\theta} = 0$, $\sigma_{zz} = \sigma_z$. (Assuming no radial stress variation and no shear stresses).
        *   $\varepsilon_{rr} = \frac{1}{E} [\sigma_{rr} - \nu(\sigma_{\theta\theta} + \sigma_{zz})] = \frac{1}{E} [-p - \nu(0 + \sigma_z)] = -\frac{p + \nu \sigma_z}{E}$
        *   $\varepsilon_{\theta\theta} = \frac{1}{E} [\sigma_{\theta\theta} - \nu(\sigma_{rr} + \sigma_{zz})] = \frac{1}{E} [0 - \nu(-p + \sigma_z)] = \frac{\nu(p - \sigma_z)}{E}$
        *   $\varepsilon_{zz} = \frac{1}{E} [\sigma_{zz} - \nu(\sigma_{rr} + \sigma_{\theta\theta})] = \frac{1}{E} [\sigma_z - \nu(-p + 0)] = \frac{\sigma_z + \nu p}{E}$

4.  **Equilibrium:** Consider a differential element of fluid in equilibrium. If the only body force is gravity acting in the -z direction ($X=0, Y=0, Z=-\rho g$), and the stress state is hydrostatic ($\sigma_{xx} = \sigma_{yy} = \sigma_{zz} = -p$), what are the equilibrium equations?
    *   **Answer:**
        *   $\frac{\partial (-p)}{\partial x} + \frac{\partial (0)}{\partial y} + \frac{\partial (0)}{\partial z} + 0 = 0 \implies -\frac{\partial p}{\partial x} = 0$
        *   $\frac{\partial (0)}{\partial x} + \frac{\partial (-p)}{\partial y} + \frac{\partial (0)}{\partial z} + 0 = 0 \implies -\frac{\partial p}{\partial y} = 0$
        *   $\frac{\partial (0)}{\partial x} + \frac{\partial (0)}{\partial y} + \frac{\partial (-p)}{\partial z} - \rho g = 0 \implies -\frac{\partial p}{\partial z} - \rho g = 0 \implies \frac{\partial p}{\partial z} = -\rho g$
        These equations show that pressure changes only in the direction of gravity, as expected for hydrostatic pressure.

---

## Summary and Key Takeaways

*   **Stress and Strain as Tensors:** Stress and strain at a point are completely described by tensors, which have 9 components but are symmetric, reducing independent components to 6.
*   **Coordinate Systems:** Understanding stress and strain in both rectangular and cylindrical coordinate systems is crucial for analyzing different geometries.
*   **Hooke's Law:** The fundamental constitutive relationship for linear elastic materials, linking stress and strain through material properties like E, $\nu$, and G.
*   **Stress Transformation:** Stress components change with the orientation of the surface, and concepts like principal stresses and maximum shear stress are invariant properties.
*   **Octahedral Stresses:** Provide invariant measures of hydrostatic and deviatoric stress, useful in advanced material models.
*   **Equations of Equilibrium:** Essential for ensuring force balance within a material element and are the starting point for formulating elasticity problems.
*   **Continuum Assumption:** The foundation of the theory of elasticity, allowing for continuous mathematical treatment of materials.

This module lays the groundwork for understanding how forces cause deformation in solid materials and provides the mathematical tools to analyze these phenomena. The relationships established here are foundational for subsequent modules dealing with specific problem-solving techniques in advanced mechanics of solids.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
