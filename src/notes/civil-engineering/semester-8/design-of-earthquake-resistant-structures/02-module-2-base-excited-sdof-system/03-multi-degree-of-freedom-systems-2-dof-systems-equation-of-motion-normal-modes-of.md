---
title: "Multi degree of freedom systems  – 2 DOF systems- Equation of motion- Normal modes of vibrations and natural frequencies, MDOF systems: shear building idealization and equation of motion - Natural frequencies and mode shapes, orthogonality of normal modes."
subject: "DESIGN OF EARTHQUAKE RESISTANT STRUCTURES"
module: "Module 2: Base excited SDOF system  "
branch: "Civil Engineering"
semester: 8
topicId: "689f15d056b5e963ba8119b3"
status: "completed"
scrapedAt: "2026-05-20T19:02:50.335Z"
---
# DESIGN OF EARTHQUAKE RESISTANT STRUCTURES
## Module 2: Base Excited SDOF System
### Topic: Multi-Degree of Freedom (MDOF) Systems

---

### Introduction to MDOF Systems

*   **Definition:** A Multi-Degree of Freedom (MDOF) system is a dynamic system that requires more than one independent coordinate to describe its motion. Unlike Single Degree of Freedom (SDOF) systems, which can be represented by a single displacement coordinate, MDOF systems involve multiple interconnected masses and stiffnesses.

*   **Relevance to Earthquake Engineering:** Real-world structures, such as buildings, bridges, and dams, are inherently MDOF systems. They have multiple stories, columns, beams, and walls that can move and vibrate independently and in coordination during an earthquake. Understanding MDOF behavior is crucial for accurately predicting structural response and designing earthquake-resistant structures.

---

### 2 DOF Systems

*   **Definition:** A 2 Degree of Freedom (2 DOF) system is the simplest form of an MDOF system, requiring two independent coordinates to describe its motion.

*   **Examples:**
    *   A system with two masses connected by springs.
    *   A building with two stories, where each story's displacement is considered.
    *   A structure with two distinct vibration modes that are dominant.

*   **Equation of Motion for a 2 DOF System:**
    The general equation of motion for a discrete MDOF system under free vibration (no damping or external forces) is given by:
    $$[M]\{\ddot{u}(t)\} + [K]\{u(t)\} = \{0\}$$
    Where:
    *   $[M]$ is the mass matrix (symmetric and positive definite).
    *   $[K]$ is the stiffness matrix (symmetric and positive definite).
    *   $\{u(t)\}$ is the vector of displacements (e.g., $\{u_1(t), u_2(t)\}^T$).
    *   $\{\ddot{u}(t)\}$ is the vector of accelerations.

    For a 2 DOF system with masses $m_1$, $m_2$ and stiffnesses $k_1$, $k_2$, and $k_{12}$ (representing interaction between the two masses), the equation of motion can be written as:

    $$
    \begin{bmatrix} m_1 & 0 \\ 0 & m_2 \end{bmatrix} \begin{Bmatrix} \ddot{u}_1 \\ \ddot{u}_2 \end{Bmatrix} + \begin{bmatrix} k_1+k_{12} & -k_{12} \\ -k_{12} & k_2+k_{12} \end{bmatrix} \begin{Bmatrix} u_1 \\ u_2 \end{Bmatrix} = \begin{Bmatrix} 0 \\ 0 \end{Bmatrix}
    $$

    *   **$u_1(t)$:** Displacement of mass $m_1$.
    *   **$u_2(t)$:** Displacement of mass $m_2$.
    *   **$k_1$:** Stiffness of the spring supporting $m_1$ (or the stiffness of the first story).
    *   **$k_2$:** Stiffness of the spring supporting $m_2$ (or the stiffness of the second story).
    *   **$k_{12}$:** Stiffness of the inter-story spring (or stiffness connecting $m_1$ and $m_2$).

*   **Normal Modes of Vibrations and Natural Frequencies:**
    *   **Concept:** MDOF systems possess multiple natural frequencies, each associated with a specific pattern of motion called a "mode shape". In free vibration, a system can oscillate in one of these "normal modes".
    *   **Procedure for finding Natural Frequencies and Mode Shapes:**
        1.  Assume a harmonic solution of the form: $\{u(t)\} = \{\phi\} \sin(\omega t)$, where $\{\phi\}$ is the mode shape vector and $\omega$ is the natural frequency.
        2.  Substitute this into the equation of motion: $[M]\{\ddot{u}(t)\} + [K]\{u(t)\} = \{0\}$.
        3.  This leads to: $[M]\{\phi\}(-\omega^2 \sin(\omega t)) + [K]\{\phi\} \sin(\omega t) = \{0\}$.
        4.  Simplifying, we get the **eigenvalue problem**:
            $$([K] - \omega^2 [M])\{\phi\} = \{0\}$$
        5.  To have a non-trivial solution ($\{\phi\} \neq \{0\}$), the determinant of the coefficient matrix must be zero:
            $$\det([K] - \omega^2 [M]) = 0$$
        6.  Solving this determinant equation yields the **natural frequencies** ($\omega_1, \omega_2, \dots, \omega_n$).
        7.  For each natural frequency $\omega_i$, substitute it back into the eigenvalue equation $([K] - \omega_i^2 [M])\{\phi_i\} = \{0\}$ to find the corresponding **mode shape** $\{\phi_i\}$.

    *   **Example for a 2 DOF System:**
        Consider a simple 2-mass, 2-spring system:
        $m_1 = m$, $m_2 = m$
        $k_1 = k$, $k_2 = k$
        $k_{12} = k'$

        $$
        [M] = \begin{bmatrix} m & 0 \\ 0 & m \end{bmatrix}, \quad [K] = \begin{bmatrix} 2k & -k' \\ -k' & 2k \end{bmatrix}
        $$

        The eigenvalue problem becomes:
        $$
        \left( \begin{bmatrix} 2k & -k' \\ -k' & 2k \end{bmatrix} - \omega^2 \begin{bmatrix} m & 0 \\ 0 & m \end{bmatrix} \right) \begin{Bmatrix} \phi_1 \\ \phi_2 \end{Bmatrix} = \begin{Bmatrix} 0 \\ 0 \end{Bmatrix}
        $$
        $$
        \begin{bmatrix} 2k - m\omega^2 & -k' \\ -k' & 2k - m\omega^2 \end{bmatrix} \begin{Bmatrix} \phi_1 \\ \phi_2 \end{Bmatrix} = \begin{Bmatrix} 0 \\ 0 \end{Bmatrix}
        $$
        Setting the determinant to zero:
        $(2k - m\omega^2)^2 - (-k')^2 = 0$
        $(2k - m\omega^2)^2 = (k')^2$
        $2k - m\omega^2 = \pm k'$

        **Natural Frequencies:**
        $m\omega^2 = 2k \mp k'$
        $\omega_1^2 = \frac{2k - k'}{m}$, $\omega_2^2 = \frac{2k + k'}{m}$

        **Mode Shapes:**
        For $\omega_1^2$:
        $(2k - m\omega_1^2)\phi_1 - k'\phi_2 = 0$
        $(k' + k')\phi_1 - k'\phi_2 = 0$
        $2k'\phi_1 = k'\phi_2 \implies \phi_2 = 2\phi_1$
        So, $\{\phi_1\} = \{1, 2\}^T$ (or any scalar multiple). This represents an in-phase motion where the second mass moves twice as much as the first.

        For $\omega_2^2$:
        $(2k - m\omega_2^2)\phi_1 - k'\phi_2 = 0$
        $(-k' - k')\phi_1 - k'\phi_2 = 0$
        $-2k'\phi_1 = k'\phi_2 \implies \phi_2 = -2\phi_1$
        So, $\{\phi_2\} = \{1, -2\}^T$ (or any scalar multiple). This represents an out-of-phase motion where the second mass moves twice as much as the first but in the opposite direction.

---

### MDOF Systems: Shear Building Idealization

*   **Concept:** A shear building is a simplified model used to represent the lateral stiffness of multi-story buildings during seismic analysis. It assumes that all lateral forces are resisted by the shear stiffness of the vertical elements (columns and shear walls), and that floors are rigid diaphragms in their own plane. The primary motion considered is lateral displacement, with no significant rotation of the floors or deformation within the floors themselves.

*   **Idealization Assumptions:**
    1.  **Rigid Floors:** Floors are assumed to be infinitely rigid in their plane (diaphragms), meaning all points on a floor displace by the same amount laterally.
    2.  **Vertical Load-Carrying Elements:** Columns or walls provide the lateral stiffness and are treated as springs connecting the floors.
    3.  **Shear Deformation Dominant:** The primary deformation mechanism considered is shear deformation of the vertical elements. Bending deformations are often neglected in simpler shear building models.
    4.  **No Torsional Effects:** For a basic 2D shear building, lateral displacements are considered only in one direction (e.g., in the x-direction), ignoring torsional effects.

*   **Equation of Motion for a Shear Building:**
    Consider a shear building with $n$ stories. Let $m_i$ be the mass located at the $i$-th floor and $k_i$ be the shear stiffness of the $i$-th story (provided by the columns/walls in that story). Let $u_i(t)$ be the lateral displacement of the $i$-th floor relative to the base.

    The equation of motion for a shear building can be derived by considering the forces acting on each floor (mass):
    *   Inertial force on mass $m_i$: $m_i \ddot{u}_i(t)$
    *   Shear force in the $i$-th story ($k_i$): $k_i (u_i - u_{i-1})$ (where $u_0 = 0$)
    *   Shear force in the $(i+1)$-th story ($k_{i+1}$): $k_{i+1} (u_{i+1} - u_i)$

    Applying Newton's second law to each mass $m_i$:
    $$m_i \ddot{u}_i(t) + k_i (u_i - u_{i-1}) - k_{i+1} (u_{i+1} - u_i) = 0$$
    (with appropriate boundary conditions: $u_0 = 0$ and $k_{n+1}$ term is zero).

    This can be expressed in matrix form:
    $$[M]\{\ddot{u}(t)\} + [K]\{u(t)\} = \{0\}$$

    Where:
    *   $[M]$ is the diagonal mass matrix: $M_{ii} = m_i$, $M_{ij} = 0$ for $i \neq j$.
    *   $[K]$ is the stiffness matrix for a shear building. For $n$ stories:

    $$
    [K] =
    \begin{bmatrix}
    k_1 + k_2 & -k_2 & 0 & \dots & 0 \\
    -k_2 & k_2 + k_3 & -k_3 & \dots & 0 \\
    0 & -k_3 & k_3 + k_4 & \dots & 0 \\
    \vdots & \vdots & \vdots & \ddots & \vdots \\
    0 & 0 & 0 & \dots & k_n
    \end{bmatrix}
    $$
    Note: Some definitions of $k_i$ might differ slightly depending on whether it's the stiffness of the $i$-th story element or the total stiffness from the $i$-th floor upwards. The matrix form above uses the stiffness of individual story elements.

*   **Natural Frequencies and Mode Shapes of Shear Buildings:**
    Similar to the 2 DOF case, the natural frequencies ($\omega_i$) and mode shapes ($\{\phi_i\}$) for an $n$-story shear building are found by solving the eigenvalue problem:
    $$([K] - \omega^2 [M])\{\phi\} = \{0\}$$

    *   **Natural Frequencies:** There will be $n$ natural frequencies. The lowest frequency corresponds to the fundamental mode of vibration, and higher frequencies correspond to higher modes.
    *   **Mode Shapes:** Each mode shape $\{\phi_i\}$ represents the relative displacement pattern of the floors for that particular mode.
        *   **Mode 1 (Fundamental Mode):** Typically shows a smooth, parabolic or roughly linear displacement profile across the height of the building. All floors move in the same direction.
        *   **Higher Modes:** Show more complex patterns, often with inflection points (points where the displacement is zero), indicating that some floors might move in opposite directions relative to each other.

    *   **Example for a 3-Story Shear Building:**
        $m_1, m_2, m_3$ = masses of stories 1, 2, 3
        $k_1, k_2, k_3$ = story stiffnesses of stories 1, 2, 3

        $$
        [M] = \begin{bmatrix} m_1 & 0 & 0 \\ 0 & m_2 & 0 \\ 0 & 0 & m_3 \end{bmatrix}, \quad [K] = \begin{bmatrix} k_1+k_2 & -k_2 & 0 \\ -k_2 & k_2+k_3 & -k_3 \\ 0 & -k_3 & k_3 \end{bmatrix}
        $$
        Solving $\det([K] - \omega^2 [M]) = 0$ would yield three natural frequencies $\omega_1, \omega_2, \omega_3$. For each $\omega_i$, solving $([K] - \omega_i^2 [M])\{\phi_i\} = \{0\}$ would give the corresponding mode shape $\{\phi_i\} = \{\phi_{i1}, \phi_{i2}, \phi_{i3}\}^T$.

---

### Orthogonality of Normal Modes

*   **Concept:** A fundamental property of the normal modes of vibration for systems with symmetric mass and stiffness matrices (like shear buildings and many other MDOF systems) is their orthogonality. This means that the modes are linearly independent and can be used to uncouple the equations of motion.

*   **Mathematical Statement:**
    For a system with symmetric mass matrix $[M]$ and stiffness matrix $[K]$, the normal modes $\{\phi_i\}$ corresponding to distinct natural frequencies $\omega_i$ are orthogonal with respect to both mass and stiffness:

    1.  **Orthogonality with respect to Mass:**
        $$\{\phi_i\}^T [M] \{\phi_j\} = 0 \quad \text{for } i \neq j$$
        This means that the weighted dot product of two different mode shapes, using the mass matrix as the weighting, is zero.

    2.  **Orthogonality with respect to Stiffness:**
        $$\{\phi_i\}^T [K] \{\phi_j\} = 0 \quad \text{for } i \neq j$$
        This means that the weighted dot product of two different mode shapes, using the stiffness matrix as the weighting, is zero.

*   **Derivation (using the eigenvalue equation):**
    We have:
    (1) $[K]\{\phi_i\} = \omega_i^2 [M]\{\phi_i\}$
    (2) $[K]\{\phi_j\} = \omega_j^2 [M]\{\phi_j\}$

    Multiply (1) by $\{\phi_j\}^T$ from the left:
    $\{\phi_j\}^T [K]\{\phi_i\} = \omega_i^2 \{\phi_j\}^T [M]\{\phi_i\}$

    Transpose (2) and multiply by $\{\phi_i\}$ from the right:
    $\{\phi_i\}^T [K]^T = \omega_j^2 \{\phi_i\}^T [M]^T$
    Since $[K]$ and $[M]$ are symmetric, $[K]^T = [K]$ and $[M]^T = [M]$.
    $\{\phi_i\}^T [K] = \omega_j^2 \{\phi_i\}^T [M]$
    Multiply by $\{\phi_j\}$ from the right:
    $\{\phi_i\}^T [K] \{\phi_j\} = \omega_j^2 \{\phi_i\}^T [M] \{\phi_j\}$

    Now, equate the two expressions for $\{\phi_i\}^T [K] \{\phi_j\}$:
    $\{\phi_j\}^T [K]\{\phi_i\} = \{\phi_i\}^T [K] \{\phi_j\}$
    $\omega_i^2 \{\phi_j\}^T [M]\{\phi_i\} = \omega_j^2 \{\phi_i\}^T [M] \{\phi_j\}$

    Since $[M]$ is symmetric, $\{\phi_j\}^T [M]\{\phi_i\} = \{\phi_i\}^T [M] \{\phi_j\}$. Let $M_{ij}^* = \{\phi_i\}^T [M] \{\phi_j\}$.
    $\omega_i^2 M_{ij}^* = \omega_j^2 M_{ij}^*$
    $(\omega_i^2 - \omega_j^2) M_{ij}^* = 0$

    If $\omega_i^2 \neq \omega_j^2$ (i.e., for distinct frequencies), then $M_{ij}^* = \{\phi_i\}^T [M] \{\phi_j\} = 0$. This proves mass orthogonality.

    Using $\{\phi_i\}^T [K] \{\phi_j\} = \omega_j^2 M_{ij}^*$ and $\{\phi_j\}^T [K]\{\phi_i\} = \omega_i^2 M_{ij}^*$, if $M_{ij}^*=0$, then $\{\phi_i\}^T [K] \{\phi_j\} = 0$ and $\{\phi_j\}^T [K]\{\phi_i\} = 0$. This proves stiffness orthogonality.

*   **Importance of Orthogonality:**
    *   **Modal Decomposition:** It allows the complex response of an MDOF system to be decomposed into the sum of responses of independent SDOF systems, each corresponding to a single mode of vibration. This is the basis of modal analysis.
    *   **Uncoupling Equations of Motion:** Through a transformation using modal coordinates, the coupled equations of motion for an MDOF system can be transformed into a set of uncoupled differential equations for each mode.

---

### Key Concepts and Definitions Summary

*   **MDOF System:** A dynamic system requiring more than one coordinate to describe its motion.
*   **2 DOF System:** A system with exactly two independent degrees of freedom.
*   **Equation of Motion:** Mathematical representation of the dynamic behavior of a system, relating inertial forces, damping forces, stiffness forces, and external forces. For free vibration, it's $[M]\{\ddot{u}\} + [K]\{u\} = \{0\}$.
*   **Mass Matrix $[M]$:** A square, symmetric, positive-definite matrix representing the inertial properties of the system.
*   **Stiffness Matrix $[K]$:** A square, symmetric, positive-definite matrix representing the elastic restoring forces of the system.
*   **Natural Frequency ($\omega$):** The frequency at which a system oscillates freely without any damping or external force. MDOF systems have multiple natural frequencies.
*   **Mode Shape ($\{\phi\}$):** The pattern of relative displacements of the system's degrees of freedom when vibrating at a specific natural frequency.
*   **Eigenvalue Problem:** The mathematical formulation $([K] - \omega^2 [M])\{\phi\} = \{0\}$ used to find natural frequencies (eigenvalues) and mode shapes (eigenvectors).
*   **Shear Building:** A simplified structural model idealizing multi-story buildings where floors are rigid diaphragms and lateral stiffness is provided by vertical elements acting as shear springs.
*   **Orthogonality of Normal Modes:** The property that different normal modes of vibration are independent, meaning their weighted dot products with respect to the mass or stiffness matrices are zero. This property is crucial for modal analysis.

---

### Important Points to Remember

*   Real structures are MDOF systems.
*   MDOF systems have multiple natural frequencies and corresponding mode shapes.
*   The lowest natural frequency is called the fundamental frequency, and its mode shape is the fundamental mode.
*   Shear building models are a common simplification for analyzing the lateral response of buildings.
*   Orthogonality of modes allows for the decomposition of complex MDOF response into simpler SDOF responses (modal analysis).
*   The number of degrees of freedom determines the number of natural frequencies and mode shapes.

---

### Practice Questions and Exercises

**Question 1:**
A 2 DOF system consists of two masses $m_1 = 1000$ kg and $m_2 = 2000$ kg, connected by springs with stiffness $k_1 = 50$ kN/m, $k_2 = 100$ kN/m, and an inter-story stiffness $k_{12} = 20$ kN/m.
a) Write down the mass and stiffness matrices for this system.
b) Calculate the natural frequencies of the system.
c) Determine the corresponding mode shapes.

**Solution 1:**
a)
$$
[M] = \begin{bmatrix} 1000 & 0 \\ 0 & 2000 \end{bmatrix} \text{ kg}
$$
$$
[K] = \begin{bmatrix} 50+20 & -20 \\ -20 & 100+20 \end{bmatrix} = \begin{bmatrix} 70 & -20 \\ -20 & 120 \end{bmatrix} \text{ kN/m} = \begin{bmatrix} 70000 & -20000 \\ -20000 & 120000 \end{bmatrix} \text{ N/m}
$$

b) The eigenvalue problem is $([K] - \omega^2 [M])\{\phi\} = \{0\}$.
$$
\det \begin{bmatrix} 70000 - 1000\omega^2 & -20000 \\ -20000 & 120000 - 2000\omega^2 \end{bmatrix} = 0
$$
$(70000 - 1000\omega^2)(120000 - 2000\omega^2) - (-20000)(-20000) = 0$
$(70 - \omega^2)(120 - 2\omega^2) \times 10^6 - 400 \times 10^6 = 0$
$(70 - \omega^2)(120 - 2\omega^2) - 400 = 0$
$8400 - 140\omega^2 - 120\omega^2 + 2\omega^4 - 400 = 0$
$2\omega^4 - 260\omega^2 + 8000 = 0$
$\omega^4 - 130\omega^2 + 4000 = 0$

Let $x = \omega^2$. Then $x^2 - 130x + 4000 = 0$.
Using the quadratic formula: $x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$
$x = \frac{130 \pm \sqrt{(-130)^2 - 4(1)(4000)}}{2(1)}$
$x = \frac{130 \pm \sqrt{16900 - 16000}}{2}$
$x = \frac{130 \pm \sqrt{900}}{2}$
$x = \frac{130 \pm 30}{2}$

$x_1 = \frac{130 - 30}{2} = \frac{100}{2} = 50$
$x_2 = \frac{130 + 30}{2} = \frac{160}{2} = 80$

So, $\omega_1^2 = 50 \text{ rad}^2/\text{s}^2$ and $\omega_2^2 = 80 \text{ rad}^2/\text{s}^2$.
$\omega_1 = \sqrt{50} \approx 7.07$ rad/s
$\omega_2 = \sqrt{80} \approx 8.94$ rad/s

c) For $\omega_1^2 = 50$:
$\begin{bmatrix} 70000 - 1000(50) & -20000 \\ -20000 & 120000 - 2000(50) \end{bmatrix} \begin{Bmatrix} \phi_{11} \\ \phi_{12} \end{Bmatrix} = \begin{Bmatrix} 0 \\ 0 \end{Bmatrix}$
$\begin{bmatrix} 20000 & -20000 \\ -20000 & 20000 \end{bmatrix} \begin{Bmatrix} \phi_{11} \\ \phi_{12} \end{Bmatrix} = \begin{Bmatrix} 0 \\ 0 \end{Bmatrix}$
$20000\phi_{11} - 20000\phi_{12} = 0 \implies \phi_{11} = \phi_{12}$
Mode shape 1: $\{\phi_1\} = \{1, 1\}^T$ (in-phase motion)

For $\omega_2^2 = 80$:
$\begin{bmatrix} 70000 - 1000(80) & -20000 \\ -20000 & 120000 - 2000(80) \end{bmatrix} \begin{Bmatrix} \phi_{21} \\ \phi_{22} \end{Bmatrix} = \begin{Bmatrix} 0 \\ 0 \end{Bmatrix}$
$\begin{bmatrix} -10000 & -20000 \\ -20000 & -40000 \end{bmatrix} \begin{Bmatrix} \phi_{21} \\ \phi_{22} \end{Bmatrix} = \begin{Bmatrix} 0 \\ 0 \end{Bmatrix}$
$-10000\phi_{21} - 20000\phi_{22} = 0 \implies \phi_{21} = -2\phi_{22}$
Mode shape 2: $\{\phi_2\} = \{2, -1\}^T$ (out-of-phase motion, mass 1 moves twice as much as mass 2 in the opposite direction)

---

**Question 2:**
Explain the concept of orthogonality of normal modes for MDOF systems and state its significance in structural dynamics.

**Solution 2:**
*   **Concept:** Orthogonality of normal modes means that for a system with symmetric mass and stiffness matrices, the mode shape vectors $\{\phi_i\}$ and $\{\phi_j\}$ corresponding to distinct natural frequencies $\omega_i$ and $\omega_j$ satisfy the following conditions:
    *   $\{\phi_i\}^T [M] \{\phi_j\} = 0$ for $i \neq j$ (Mass orthogonality)
    *   $\{\phi_i\}^T [K] \{\phi_j\} = 0$ for $i \neq j$ (Stiffness orthogonality)
*   **Significance:**
    *   **Modal Analysis:** Orthogonality is the mathematical basis for modal analysis, which is a powerful technique for analyzing the dynamic response of MDOF systems.
    *   **Uncoupling Equations:** It allows the coupled equations of motion of an MDOF system to be transformed into a set of uncoupled, simpler equations for each mode. This means the response of the system can be analyzed as the superposition of the responses of several independent SDOF systems.
    *   **Simplification:** By decoupling the equations, it simplifies the process of calculating the overall response of the structure under dynamic loads like earthquakes.

---

**Question 3:**
A 2-story shear building has masses $m_1 = 100$ tons and $m_2 = 80$ tons. The story stiffnesses are $k_1 = 20000$ kN/m and $k_2 = 15000$ kN/m. Calculate the natural frequencies and mode shapes. (Assume 1 ton = 1000 kg).

**Solution 3:**
$m_1 = 100 \times 1000 = 100000$ kg
$m_2 = 80 \times 1000 = 80000$ kg
$k_1 = 20000$ kN/m $= 20 \times 10^6$ N/m
$k_2 = 15000$ kN/m $= 15 \times 10^6$ N/m

Mass Matrix:
$$[M] = \begin{bmatrix} 100000 & 0 \\ 0 & 80000 \end{bmatrix}$$

Stiffness Matrix:
$$[K] = \begin{bmatrix} k_1+k_2 & -k_2 \\ -k_2 & k_2 \end{bmatrix} = \begin{bmatrix} 20 \times 10^6 + 15 \times 10^6 & -15 \times 10^6 \\ -15 \times 10^6 & 15 \times 10^6 \end{bmatrix} = \begin{bmatrix} 35 \times 10^6 & -15 \times 10^6 \\ -15 \times 10^6 & 15 \times 10^6 \end{bmatrix}$$

Eigenvalue Problem: $\det([K] - \omega^2 [M]) = 0$
$$
\det \begin{bmatrix} 35 \times 10^6 - 100000\omega^2 & -15 \times 10^6 \\ -15 \times 10^6 & 15 \times 10^6 - 80000\omega^2 \end{bmatrix} = 0
$$
$(35 - \omega^2/1000)(15 - 80\omega^2/1000000) \times 10^{12} - 225 \times 10^{12} = 0$
Let $\Omega = \omega^2$.
$(35 - 0.1\Omega)(15 - 0.08\Omega) - 225 = 0$
$525 - 2.8\Omega - 1.5\Omega + 0.008\Omega^2 - 225 = 0$
$0.008\Omega^2 - 4.3\Omega + 300 = 0$
Multiply by 1000: $8\Omega^2 - 4300\Omega + 300000 = 0$
$\Omega^2 - \frac{4300}{8}\Omega + \frac{300000}{8} = 0$
$\Omega^2 - 537.5\Omega + 37500 = 0$

Using the quadratic formula for $\Omega = \omega^2$:
$\Omega = \frac{537.5 \pm \sqrt{(537.5)^2 - 4(1)(37500)}}{2}$
$\Omega = \frac{537.5 \pm \sqrt{288906.25 - 150000}}{2}$
$\Omega = \frac{537.5 \pm \sqrt{138906.25}}{2}$
$\Omega = \frac{537.5 \pm 372.70}{2}$

$\Omega_1 = \frac{537.5 - 372.70}{2} = \frac{164.8}{2} = 82.4$
$\Omega_2 = \frac{537.5 + 372.70}{2} = \frac{910.2}{2} = 455.1$

Natural Frequencies:
$\omega_1^2 = 82.4 \implies \omega_1 = \sqrt{82.4} \approx 9.08$ rad/s
$\omega_2^2 = 455.1 \implies \omega_2 = \sqrt{455.1} \approx 21.33$ rad/s

Mode Shapes:
For $\omega_1^2 = 82.4$:
$(35 \times 10^6 - 100000 \times 82.4)\phi_{11} - 15 \times 10^6 \phi_{12} = 0$
$(35 \times 10^6 - 8.24 \times 10^6)\phi_{11} - 15 \times 10^6 \phi_{12} = 0$
$26.76 \times 10^6 \phi_{11} - 15 \times 10^6 \phi_{12} = 0$
$26.76 \phi_{11} = 15 \phi_{12} \implies \phi_{12} = \frac{26.76}{15} \phi_{11} \approx 1.78 \phi_{11}$
Mode shape 1: $\{\phi_1\} = \{1, 1.78\}^T$ (slightly curved, in-phase)

For $\omega_2^2 = 455.1$:
$(35 \times 10^6 - 100000 \times 455.1)\phi_{21} - 15 \times 10^6 \phi_{22} = 0$
$(35 \times 10^6 - 45.51 \times 10^6)\phi_{21} - 15 \times 10^6 \phi_{22} = 0$
$-10.51 \times 10^6 \phi_{21} - 15 \times 10^6 \phi_{22} = 0$
$-10.51 \phi_{21} = 15 \phi_{22} \implies \phi_{21} = -\frac{15}{10.51} \phi_{22} \approx -1.43 \phi_{22}$
Mode shape 2: $\{\phi_2\} = \{1.43, -1\}^T$ (more pronounced curvature, out-of-phase)

---
**End of Module 2 Notes on MDOF Systems**
