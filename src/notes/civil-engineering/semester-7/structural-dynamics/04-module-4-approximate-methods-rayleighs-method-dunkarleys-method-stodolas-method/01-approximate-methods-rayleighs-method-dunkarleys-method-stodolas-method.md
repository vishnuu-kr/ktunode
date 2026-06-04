---
title: "Approximate methods : Rayleigh’s method Dunkarley’s method, Stodola’s method."
subject: "STRUCTURAL DYNAMICS"
module: "Module 4: Approximate methods : Rayleigh’s method Dunkarley’s method, Stodola’s method."
branch: "Civil Engineering"
semester: 7
topicId: "689f15cf56b5e963ba811421"
status: "completed"
scrapedAt: "2026-05-20T19:01:41.190Z"
---
# Structural Dynamics: Module 4 - Approximate Methods

## Introduction to Approximate Methods

In structural dynamics, we often encounter systems that are too complex to be solved analytically for their natural frequencies and mode shapes. This is especially true for multi-degree-of-freedom (MDOF) systems. Approximate methods provide powerful tools to estimate these fundamental dynamic characteristics when exact solutions are not feasible. These methods are particularly useful for determining the fundamental (lowest) natural frequency and the corresponding mode shape.

---

## 1. Rayleigh's Method

**Learning Outcome:** Understand and apply Rayleigh's method for estimating the fundamental natural frequency of a vibrating system.

### Key Concepts and Definitions

*   **Rayleigh's Method (also known as the Rayleigh-Ritz method in a broader context):** This is an iterative energy method that provides an upper bound for the fundamental natural frequency of a vibrating system. It is based on the principle that for any assumed mode shape, the maximum kinetic energy during free vibration equals the maximum potential energy stored in the system.
*   **Principle of Virtual Work/Energy Conservation:** In free vibration, the maximum kinetic energy attained by the system is equal to the maximum potential energy stored in the system.
*   **Kinetic Energy (T):** The energy of motion. For a discrete system with masses $m_i$ and velocities $\dot{x}_i$, $T = \frac{1}{2} \sum m_i \dot{x}_i^2$.
*   **Potential Energy (V):** The energy stored due to deformation. For a system with stiffnesses $k_i$ and displacements $x_i$, $V = \frac{1}{2} \sum k_i x_i^2$.
*   **Natural Frequency ($\omega$):** The frequency at which a system oscillates freely after being disturbed from its equilibrium position.
*   **Mode Shape ($\phi$):** The relative displacement of the different degrees of freedom of the system at a particular natural frequency.

### Theoretical Basis

Consider a system with $n$ degrees of freedom. For free vibration, the motion can be described as $x_i(t) = \phi_i \sin(\omega t + \theta)$.

*   **Maximum Kinetic Energy ($T_{max}$):**
    $T_{max} = \frac{1}{2} \sum m_i (\omega \phi_i)^2 = \frac{1}{2} \omega^2 \sum m_i \phi_i^2$

*   **Maximum Potential Energy ($V_{max}$):** This is related to the strain energy. Assuming a linear elastic system, the maximum strain energy is equal to the maximum potential energy stored in the springs.
    $V_{max} = \frac{1}{2} \sum k_i \phi_i^2$ (This is a simplified representation for discrete springs. For continuous systems or complex structures, it involves integration of stress and strain).

*   **Equating $T_{max}$ and $V_{max}$:**
    $\frac{1}{2} \omega^2 \sum m_i \phi_i^2 = \frac{1}{2} \sum k_i \phi_i^2$

*   **Rayleigh's Quotient:**
    $\omega^2 = \frac{\sum k_i \phi_i^2}{\sum m_i \phi_i^2}$

    This quotient is often expressed in matrix form:
    $\omega^2 = \frac{\phi^T K \phi}{\phi^T M \phi}$
    where $K$ is the stiffness matrix, $M$ is the mass matrix, and $\phi$ is the assumed mode shape vector.

### Application Steps

1.  **Assume a Mode Shape:** Propose a reasonable mode shape ($\phi$) for the lowest mode of vibration. This shape should satisfy the boundary conditions and represent the expected deformation. Often, a static deflection shape due to a representative load (e.g., self-weight) is used.
2.  **Calculate $V_{max}$:** Calculate the maximum potential energy using the assumed mode shape and the stiffness of the system.
3.  **Calculate $T_{max}$:** Calculate the maximum kinetic energy using the assumed mode shape and the masses of the system.
4.  **Calculate $\omega^2$:** Use Rayleigh's quotient to compute an estimate of the square of the fundamental natural frequency.
5.  **Iterate (Optional but Recommended):** The accuracy of the result depends on the assumed mode shape. For a better approximation, the calculated natural frequency and mode shape can be used to refine the assumed mode shape and repeat the process.

### Example: Cantilever Beam with a Concentrated Mass

Consider a uniform cantilever beam of length $L$, flexural rigidity $EI$, with a concentrated mass $m$ at the free end.

*   **System:** Single degree of freedom (DOF) system with mass $m$ at the free end.
*   **Stiffness ($k$):** For a cantilever beam with a load at the end, the deflection $y$ is given by $y = \frac{PL^3}{3EI}$. Therefore, the stiffness is $k = \frac{P}{y} = \frac{3EI}{L^3}$.
*   **Assumed Mode Shape:** The static deflection of a cantilever beam under a tip load is a cubic polynomial. For a single DOF system, we are essentially representing the displacement of the mass. The most straightforward assumption is that the mass moves horizontally, and the beam bends to match this displacement. However, for Rayleigh's method applied to a continuous system, we need to consider the deflection profile of the beam. Let's assume the deflection $y(x)$ of the beam is approximated by a function proportional to the static deflection shape. A common assumption is $y(x) = C(1 - \cos(\frac{\pi x}{2L}))$, which is a reasonable approximation for the first mode shape of a cantilever beam.
    For the concentrated mass at the tip ($x=L$), the displacement is $\phi = y(L) = C(1 - \cos(\frac{\pi}{2})) = C$.
    So, $\phi(x) = \phi \left(\frac{y(x)}{y(L)}\right)$.
    The Rayleigh quotient is $\omega^2 = \frac{\int_0^L EI (\frac{d^2 y}{dx^2})^2 dx}{\int_0^L m(x) y^2(x) dx}$. (For a distributed mass system).

    However, for a single DOF system with mass $m$ at the end, we can simplify it to a mass-spring system with stiffness $k = \frac{3EI}{L^3}$.
    The equation of motion is $m\ddot{x} + kx = 0$.
    The natural frequency is $\omega = \sqrt{\frac{k}{m}} = \sqrt{\frac{3EI}{mL^3}}$.

    **Let's use Rayleigh's method on a slightly more complex scenario: A simply supported beam with a concentrated mass $m$ at the center.**

    *   **System:** A simply supported beam of length $L$, $EI$, with mass $m$ at $x=L/2$.
    *   **Stiffness:** The static deflection at the center of a simply supported beam under a central load $P$ is $y_{center} = \frac{PL^3}{48EI}$. So, the effective stiffness is $k = \frac{P}{y_{center}} = \frac{48EI}{L^3}$.
    *   **Assumed Mode Shape:** The static deflection shape of a simply supported beam under a central load is given by:
        $y(x) = \frac{P}{48EI} (3L^2x - 4x^3)$ for $0 \le x \le L/2$.
        The maximum deflection is at $x=L/2$: $y_{max} = \frac{P}{48EI} (3L^2(\frac{L}{2}) - 4(\frac{L}{2})^3) = \frac{P}{48EI} (\frac{3L^3}{2} - \frac{4L^3}{8}) = \frac{P}{48EI} (\frac{3L^3}{2} - \frac{L^3}{2}) = \frac{PL^3}{48EI}$.
        So, the assumed mode shape can be represented as $\phi(x) = \frac{y(x)}{y_{max}} = \frac{1}{2} (3(\frac{x}{L}) - 4(\frac{x}{L})^3)$ for $0 \le x \le L/2$.
        The displacement of the mass at the center is $\phi = 1$ (by normalizing).

    *   **Applying Rayleigh's Quotient:**
        $\omega^2 = \frac{\sum k_i \phi_i^2}{\sum m_i \phi_i^2}$
        Since we have a concentrated mass at the center, the system can be modeled as a single DOF. The stiffness $k$ is the effective stiffness that relates the force at the center to the displacement at the center.
        $k = \frac{48EI}{L^3}$ (as calculated above).
        The mass is $m$.
        The assumed mode shape for the single DOF is $\phi = 1$.

        $\omega^2 = \frac{k \phi^2}{m \phi^2} = \frac{k}{m} = \frac{48EI}{mL^3}$.
        $\omega = \sqrt{\frac{48EI}{mL^3}}$.

    *   **Important Point:** For continuous systems, applying Rayleigh's method involves integrating over the structure. The assumed mode shape should be a function of position along the structure.

### Important Points to Remember

*   Rayleigh's method provides an **upper bound** for the fundamental natural frequency. The more accurate the assumed mode shape, the closer the calculated frequency will be to the true fundamental frequency.
*   The accuracy is highest for the **fundamental mode**. For higher modes, the accuracy can be significantly reduced with a simple assumed shape.
*   A good starting point for the assumed mode shape is the **static deflection** due to a representative load or self-weight.
*   The method is particularly powerful for complex structures where analytical solutions are difficult.

---

## 2. Dunkarley's Method (Stodola-Dunkerley Method)

**Learning Outcome:** Understand and apply Dunkerley's method for estimating the fundamental natural frequency, especially for systems with multiple degrees of freedom.

### Key Concepts and Definitions

*   **Dunkerley's Method:** This method is an iterative approach that aims to find the fundamental natural frequency by initially considering the system as a series of single DOF systems. It's particularly useful for structures where it's difficult to establish a good initial guess for the overall mode shape as required by Rayleigh's method.
*   **Principle:** The method calculates the static deflection of each mass due to a unit force applied at that mass location, while all other masses are assumed to be removed (effectively giving them zero stiffness for the static deflection calculation). The reciprocals of the natural frequencies of these individual systems are then summed to approximate the reciprocal of the fundamental natural frequency of the combined system.
*   **Static Deflection (${\delta}_{ii}$):** The deflection at mass $i$ due to a unit force applied at mass $i$, assuming all other masses are not present (or rather, the influence of other masses on the static deflection is considered via the flexibility influence coefficients).
*   **Flexibility Influence Coefficients (${\alpha}_{ij}$):** The deflection at point $i$ due to a unit force applied at point $j$. In this context, for Dunkerley's method, we are primarily interested in the diagonal terms ${\alpha}_{ii}$ (deflection at $i$ due to force at $i$).

### Theoretical Basis

For a system with $n$ degrees of freedom, let $m_i$ be the masses and $k_i$ be the effective stiffness associated with each mass.

1.  **Consider each mass as a separate system:** For each mass $m_i$, determine its associated stiffness $k_i$. This $k_i$ can be thought of as the stiffness that, when acted upon by a unit force, causes a unit displacement at the location of mass $i$ when all other masses are absent. More precisely, it's the inverse of the static deflection at mass $i$ when a unit force is applied at mass $i$ and all other masses are ignored or their influence on the static deflection at $i$ is accounted for through influence coefficients.

    If we consider the system to have stiffness coefficients $a_{ij}$ (deflection at $i$ due to unit force at $j$), then the static deflection at mass $i$ due to a unit force at mass $i$ is $a_{ii}$. The natural frequency of this single DOF system is $\omega_i = \sqrt{\frac{1}{a_{ii} m_i}}$.

2.  **Dunkerley's Formula:** The reciprocal of the square of the fundamental natural frequency ($\omega_1$) is approximately the sum of the reciprocals of the squares of the natural frequencies of the individual systems:

    $\frac{1}{\omega_1^2} \approx \sum_{i=1}^n \frac{1}{\omega_i^2}$

    Substituting the expression for $\omega_i$:
    $\frac{1}{\omega_1^2} \approx \sum_{i=1}^n \frac{a_{ii} m_i}{1}$
    $\frac{1}{\omega_1^2} \approx \sum_{i=1}^n a_{ii} m_i$

    Where $a_{ii}$ is the static deflection at mass $i$ when a unit force is applied at mass $i$.

### Application Steps

1.  **Determine Static Deflection Coefficients ($a_{ii}$):** For each mass $m_i$, calculate the static deflection at the location of $m_i$ when a unit force is applied at $m_i$. This typically involves using influence coefficients from a stiffness or flexibility matrix analysis. For a discrete mass system, $a_{ii}$ is the deflection at coordinate $i$ due to a unit force applied at coordinate $i$, with all other masses acting. The stiffness matrix $K$ is related to the flexibility matrix $A$ by $K = A^{-1}$. The diagonal elements of the flexibility matrix $A$ are $a_{ii}$.
2.  **Calculate $a_{ii} m_i$:** Multiply each static deflection coefficient by its corresponding mass.
3.  **Sum the Products:** Sum all the $a_{ii} m_i$ values.
4.  **Calculate $\omega_1^2$:** The square of the fundamental natural frequency is the reciprocal of this sum: $\omega_1^2 = \frac{1}{\sum_{i=1}^n a_{ii} m_i}$.
5.  **Calculate $\omega_1$:** Take the square root to get the estimated fundamental natural frequency.

### Example: Three-Mass System on a Simply Supported Beam

Consider a simply supported beam of length $L$ with three equal masses $m$ attached at $x = L/4$, $x = L/2$, and $x = 3L/4$. We need to find the flexibility influence coefficients $a_{ij}$ (deflection at $i$ due to unit force at $j$).

For a simply supported beam, the deflection $y(x)$ due to a load $P$ at $x_0$ is:
$y(x) = \frac{P}{6EI} \begin{cases} x(L-x_0)(L^2 - x_0^2 - (L-x_0)^2) & \text{for } x \le x_0 \\ x_0(L-x)(L^2 - x^2 - (L-x_0)^2) & \text{for } x \ge x_0 \end{cases}$

The flexibility influence coefficients $a_{ij}$ are the deflections at $x_i$ due to a unit force at $x_j$. Let's assume $L=4$ units for simplicity.
Mass locations: $x_1 = 1$, $x_2 = 2$, $x_3 = 3$.
Let's calculate the $a_{ii}$ values.

*   **$a_{11}$:** Deflection at $x=1$ due to unit force at $x=1$.
    Here, $P=1$, $x=1$, $x_0=1$.
    $a_{11} = \frac{1}{6EI} (1(4-1)(4^2 - 1^2 - (4-1)^2)) = \frac{1}{6EI} (3(16 - 1 - 9)) = \frac{1}{6EI} (3(6)) = \frac{18}{6EI} = \frac{3}{EI}$.

*   **$a_{22}$:** Deflection at $x=2$ due to unit force at $x=2$.
    Here, $P=1$, $x=2$, $x_0=2$.
    $a_{22} = \frac{1}{6EI} (2(4-2)(4^2 - 2^2 - (4-2)^2)) = \frac{1}{6EI} (2(2)(16 - 4 - 4)) = \frac{1}{6EI} (4(8)) = \frac{32}{6EI} = \frac{16}{3EI}$.

*   **$a_{33}$:** Deflection at $x=3$ due to unit force at $x=3$.
    Here, $P=1$, $x=3$, $x_0=3$.
    $a_{33} = \frac{1}{6EI} (3(4-3)(4^2 - 3^2 - (4-3)^2)) = \frac{1}{6EI} (3(1)(16 - 9 - 1)) = \frac{1}{6EI} (3(6)) = \frac{18}{6EI} = \frac{3}{EI}$.

Now, applying Dunkerley's formula:
$\frac{1}{\omega_1^2} \approx a_{11}m_1 + a_{22}m_2 + a_{33}m_3$
Since all masses are equal to $m$:
$\frac{1}{\omega_1^2} \approx m (\frac{3}{EI}) + m (\frac{16}{3EI}) + m (\frac{3}{EI})$
$\frac{1}{\omega_1^2} \approx m \frac{1}{EI} (3 + \frac{16}{3} + 3) = m \frac{1}{EI} (6 + \frac{16}{3}) = m \frac{1}{EI} (\frac{18+16}{3}) = m \frac{34}{3EI}$

$\omega_1^2 \approx \frac{3EI}{34m}$
$\omega_1 \approx \sqrt{\frac{3EI}{34m}}$

### Important Points to Remember

*   Dunkerley's method generally provides a **lower bound** for the fundamental natural frequency (or an approximation that is usually on the lower side). This is because it neglects the inertial effects of other masses when calculating the static deflection for each mass.
*   It is a good starting point when an initial guess for the mode shape is not readily available.
*   The accuracy improves as the number of degrees of freedom increases.
*   It is essential to accurately determine the flexibility influence coefficients ($a_{ii}$).

---

## 3. Stodola's Method (or Iteration Method)

**Learning Outcome:** Understand and apply Stodola's method (also known as the fundamental iteration method or slope-deflection method) for estimating the fundamental natural frequency and mode shape.

### Key Concepts and Definitions

*   **Stodola's Method:** This is an iterative method used to find the fundamental natural frequency and mode shape of a multi-degree-of-freedom system. It starts with an assumed mode shape and repeatedly applies the stiffness and mass matrices (or their equivalent operations) to refine the mode shape and estimate the frequency.
*   **Iteration:** The process of repeatedly applying a set of operations to improve an approximation.
*   **Static Deflection (Influence Coefficients):** The deflection at various points due to a static load. This is essentially the flexibility matrix.
*   **Inertial Forces:** Forces generated due to mass and acceleration ($m\ddot{x}$). In free vibration, these are proportional to mass and the square of the frequency ($m\omega^2 x$).

### Theoretical Basis

The equation of motion for free vibration is:
$M\ddot{x} + Kx = 0$

For harmonic motion $x(t) = \phi \sin(\omega t)$, $\ddot{x}(t) = -\omega^2 \phi \sin(\omega t)$.
Substituting this into the equation of motion:
$-M\omega^2 \phi + K\phi = 0$
$(K - \omega^2 M)\phi = 0$

This is an eigenvalue problem. $\omega^2$ are the eigenvalues and $\phi$ are the eigenvectors.

Stodola's method approximates this by treating the inertial forces as equivalent static loads.
Let $\phi^{(0)}$ be an initial guess for the mode shape.
The inertial force vector is $F_{inertial} = M\phi^{(0)}$.

1.  **Step 1: Calculate Static Deflections:** Apply the inertial forces from the previous step as static loads and calculate the resulting static deflections. This is done using the flexibility matrix $A = K^{-1}$.
    $\phi^{(1)} = A (M \phi^{(0)})$

2.  **Step 2: Normalize and Calculate Frequency Estimate:** The resulting deflection vector $\phi^{(1)}$ should be proportional to the true mode shape. Normalize this vector (e.g., by setting the largest component to 1 or by summing components). The ratio of the inertial force to the displacement in a chosen coordinate (say, coordinate $j$) gives an estimate of $\omega^2$.
    $\omega^2 \approx \frac{(M\phi^{(0)})_j}{(\phi^{(1)})_j}$

3.  **Step 3: Repeat:** Use the normalized $\phi^{(1)}$ as the new $\phi^{(0)}$ for the next iteration and repeat steps 1 and 2.
    $\phi^{(2)} = A (M \phi^{(1)})$
    $\omega^2 \approx \frac{(M\phi^{(1)})_j}{(\phi^{(2)})_j}$

The ratio $\frac{(M\phi^{(k)})_j}{(\phi^{(k+1)})_j}$ converges to the fundamental eigenvalue $\omega_1^2$.

### Application Steps

1.  **Assume an Initial Mode Shape ($\phi^{(0)}$):** Start with a reasonable guess for the fundamental mode shape. A common choice is a static deflection due to self-weight or a uniform load.
2.  **Apply Inertial Forces:** Multiply the assumed mode shape vector by the mass matrix to obtain the inertial force vector: $F^{(0)} = M \phi^{(0)}$.
3.  **Calculate Static Deflections:** Apply these inertial forces as static loads to the structure. The resulting deflections represent the next approximation of the mode shape: $\phi^{(1)} = A F^{(0)}$, where $A$ is the flexibility matrix ($A = K^{-1}$).
4.  **Normalize and Estimate Frequency:** Normalize the vector $\phi^{(1)}$ (e.g., by dividing by its largest component or by its Euclidean norm). Then, calculate an estimate of $\omega^2$ by taking the ratio of the inertial forces to the corresponding displacements at a chosen coordinate (or by using the Rayleigh quotient on the current mode shape and mass/stiffness).
    $\lambda^{(1)} = \frac{\phi^{(1)T} M \phi^{(1)}}{\phi^{(1)T} K \phi^{(1)}}$ (This uses the Rayleigh quotient with the current approximation)
    Alternatively, using the definition of the method: $\omega^2 \approx \frac{(M\phi^{(1)})_j}{(\phi^{(1)})_j}$ (This is often the simpler approach for Stodola's method).

5.  **Iterate:** Use the normalized $\phi^{(1)}$ as the new $\phi^{(0)}$ and repeat steps 2-4. Continue iterating until the estimated natural frequency and mode shape converge to the desired accuracy.

### Example: Two-Mass System

Consider a system with two masses $m_1, m_2$ and stiffnesses $k_1, k_2$ such that $m_1=m_2=m$ and $k_1=k_2=k$.

*   **Stiffness Matrix (K):**
    $K = \begin{bmatrix} k_1+k_2 & -k_2 \\ -k_2 & k_2 \end{bmatrix} = \begin{bmatrix} 2k & -k \\ -k & k \end{bmatrix}$

*   **Mass Matrix (M):**
    $M = \begin{bmatrix} m_1 & 0 \\ 0 & m_2 \end{bmatrix} = \begin{bmatrix} m & 0 \\ 0 & m \end{bmatrix}$

*   **Flexibility Matrix (A = K⁻¹):**
    $det(K) = (2k)(k) - (-k)(-k) = 2k^2 - k^2 = k^2$
    $A = \frac{1}{k^2} \begin{bmatrix} k & k \\ k & 2k \end{bmatrix} = \frac{1}{k} \begin{bmatrix} 1 & 1 \\ 1 & 2 \end{bmatrix}$
    So, $a_{11} = 1/k$, $a_{12} = 1/k$, $a_{21} = 1/k$, $a_{22} = 2/k$.

*   **Iteration:**

    *   **Iteration 0: Assume $\phi^{(0)} = \begin{bmatrix} 1 \\ 1 \end{bmatrix}$** (Equal motion, a plausible first guess for the fundamental mode).

    *   **Iteration 1:**
        *   Inertial Forces: $F^{(0)} = M \phi^{(0)} = \begin{bmatrix} m & 0 \\ 0 & m \end{bmatrix} \begin{bmatrix} 1 \\ 1 \end{bmatrix} = \begin{bmatrix} m \\ m \end{bmatrix}$.
        *   Static Deflections: $\phi^{(1)} = A F^{(0)} = \frac{1}{k} \begin{bmatrix} 1 & 1 \\ 1 & 2 \end{bmatrix} \begin{bmatrix} m \\ m \end{bmatrix} = \frac{m}{k} \begin{bmatrix} 1+1 \\ 1+2 \end{bmatrix} = \frac{m}{k} \begin{bmatrix} 2 \\ 3 \end{bmatrix}$.
        *   Normalization: Let's normalize by making the first component 1.
            $\phi^{(1)}_{norm} = \frac{1}{2} \begin{bmatrix} 2 \\ 3 \end{bmatrix} = \begin{bmatrix} 1 \\ 1.5 \end{bmatrix}$.
        *   Frequency Estimate (using coordinate 1):
            $\omega^2 \approx \frac{(M\phi^{(1)})_1}{(\phi^{(1)})_{norm, 1}} = \frac{m}{1} = m$.
            (Note: $M\phi^{(1)}$ is proportional to $\phi^{(1)}$ if M is diagonal and $\phi^{(1)}$ components are scaled. Let's use $\phi^{(1)}$ itself: $\omega^2 \approx \frac{(F^{(0)})_1}{(\phi^{(1)})_{norm, 1}} = \frac{m}{1} = m$. This seems incorrect. The formula should be $\omega^2 \approx \frac{(M \phi^{(k)})_j}{(\phi^{(k+1)})_j}$ where $\phi^{(k+1)} = A M \phi^{(k)}$. Let's re-evaluate the frequency estimate.

        A better way to estimate the frequency using the current approximation is the Rayleigh quotient:
        $\omega^2 \approx \frac{(\phi^{(1)})_{norm}^T K (\phi^{(1)})_{norm}}{(\phi^{(1)})_{norm}^T M (\phi^{(1)})_{norm}}$

        Let's use the original $\phi^{(1)} = \frac{m}{k} \begin{bmatrix} 2 \\ 3 \end{bmatrix}$ for the calculation of $\omega^2$.
        $K\phi^{(1)} = \begin{bmatrix} 2k & -k \\ -k & k \end{bmatrix} \frac{m}{k} \begin{bmatrix} 2 \\ 3 \end{bmatrix} = \frac{m}{k} \begin{bmatrix} 4k-3k \\ -2k+3k \end{bmatrix} = \frac{m}{k} \begin{bmatrix} k \\ k \end{bmatrix} = m \begin{bmatrix} 1 \\ 1 \end{bmatrix}$.
        $(\phi^{(1)})^T K \phi^{(1)} = (\frac{m}{k} \begin{bmatrix} 2 & 3 \end{bmatrix}) (m \begin{bmatrix} 1 \\ 1 \end{bmatrix}) = \frac{m^2}{k} (2+3) = \frac{5m^2}{k}$.
        $M\phi^{(1)} = \begin{bmatrix} m & 0 \\ 0 & m \end{bmatrix} \frac{m}{k} \begin{bmatrix} 2 \\ 3 \end{bmatrix} = \frac{m^2}{k} \begin{bmatrix} 2 \\ 3 \end{bmatrix}$.
        $(\phi^{(1)})^T M \phi^{(1)} = (\frac{m}{k} \begin{bmatrix} 2 & 3 \end{bmatrix}) (\frac{m^2}{k} \begin{bmatrix} 2 \\ 3 \end{bmatrix}) = \frac{m^3}{k^2} (4+9) = \frac{13m^3}{k^2}$.

        $\omega^2 \approx \frac{5m^2/k}{13m^3/k^2} = \frac{5m^2}{k} \frac{k^2}{13m^3} = \frac{5k}{13m}$.
        This is an estimate for $\omega^2$.

    *   **Iteration 2:**
        *   Use $\phi^{(1)}_{norm} = \begin{bmatrix} 1 \\ 1.5 \end{bmatrix}$ as $\phi^{(0)}$.
        *   Inertial Forces: $F^{(1)} = M \phi^{(0)} = \begin{bmatrix} m & 0 \\ 0 & m \end{bmatrix} \begin{bmatrix} 1 \\ 1.5 \end{bmatrix} = \begin{bmatrix} m \\ 1.5m \end{bmatrix}$.
        *   Static Deflections: $\phi^{(2)} = A F^{(1)} = \frac{1}{k} \begin{bmatrix} 1 & 1 \\ 1 & 2 \end{bmatrix} \begin{bmatrix} m \\ 1.5m \end{bmatrix} = \frac{m}{k} \begin{bmatrix} 1+1.5 \\ 1+3 \end{bmatrix} = \frac{m}{k} \begin{bmatrix} 2.5 \\ 4 \end{bmatrix}$.
        *   Normalization: $\phi^{(2)}_{norm} = \frac{1}{2.5} \begin{bmatrix} 2.5 \\ 4 \end{bmatrix} = \begin{bmatrix} 1 \\ 1.6 \end{bmatrix}$.
        *   Frequency Estimate (using Rayleigh quotient with $\phi^{(2)}_{norm}$):
            $K\phi^{(2)}_{norm} = \begin{bmatrix} 2k & -k \\ -k & k \end{bmatrix} \begin{bmatrix} 1 \\ 1.6 \end{bmatrix} = \begin{bmatrix} 2k - 1.6k \\ -k + 1.6k \end{bmatrix} = \begin{bmatrix} 0.4k \\ 0.6k \end{bmatrix}$.
            $(\phi^{(2)}_{norm})^T K \phi^{(2)}_{norm} = \begin{bmatrix} 1 & 1.6 \end{bmatrix} \begin{bmatrix} 0.4k \\ 0.6k \end{bmatrix} = 0.4k + 0.96k = 1.36k$.
            $M\phi^{(2)}_{norm} = \begin{bmatrix} m & 0 \\ 0 & m \end{bmatrix} \begin{bmatrix} 1 \\ 1.6 \end{bmatrix} = \begin{bmatrix} m \\ 1.6m \end{bmatrix}$.
            $(\phi^{(2)}_{norm})^T M \phi^{(2)}_{norm} = \begin{bmatrix} 1 & 1.6 \end{bmatrix} \begin{bmatrix} m \\ 1.6m \end{bmatrix} = m + 2.56m = 3.56m$.

            $\omega^2 \approx \frac{1.36k}{3.56m} \approx 0.382 \frac{k}{m}$.

        Comparing this to the exact solution for a two-mass system:
        $\omega^2 = \frac{k}{m} \frac{3 \pm \sqrt{5}}{2}$
        Fundamental frequency $\omega_1^2 \approx 0.38197 \frac{k}{m}$.
        The second iteration is already very close.

### Important Points to Remember

*   Stodola's method is an iterative technique that converges to the fundamental mode shape and frequency.
*   The accuracy depends on the quality of the initial guess and the number of iterations performed.
*   It's essential to normalize the mode shape at each iteration.
*   The method requires knowledge of the mass and stiffness matrices or their inverse (flexibility matrix).
*   This method is also known as the **fundamental iteration method** or the **slope-deflection method** in some contexts.

---

## Practice Questions

**Question 1 (Rayleigh's Method):**
A simply supported beam of length $L$, flexural rigidity $EI$, has a concentrated mass $m$ at its mid-span. Using Rayleigh's method and assuming the mode shape is parabolic (i.e., $y(x) = C(x^2 - Lx)$ for $0 \le x \le L/2$, and similarly for the other half), estimate the fundamental natural frequency.

**Question 2 (Dunkerley's Method):**
Consider a system with two masses $m_1 = 10$ kg and $m_2 = 20$ kg. The static deflection at mass 1 due to a unit force at mass 1 is $a_{11} = 0.05$ m/N, and the static deflection at mass 2 due to a unit force at mass 2 is $a_{22} = 0.12$ m/N. Also, the static deflection at mass 1 due to a unit force at mass 2 is $a_{12} = 0.08$ m/N, and at mass 2 due to a unit force at mass 1 is $a_{21} = 0.08$ m/N. Use Dunkerley's method to estimate the fundamental natural frequency.

**Question 3 (Stodola's Method):**
For the two-mass system described in Question 2, if $k_1 = 200$ N/m and $k_2 = 100$ N/m (and the connecting spring has stiffness $k_{12} = 100$ N/m, leading to the flexibility coefficients given), use Stodola's method to estimate the fundamental natural frequency and mode shape. Start with an initial guess of $\phi^{(0)} = \begin{bmatrix} 1 \\ 0.5 \end{bmatrix}$.

---

## Answers to Practice Questions

**Answer 1 (Rayleigh's Method):**
For a simply supported beam with a central mass $m$, the effective stiffness $k$ is related to the static deflection at the center due to a central load $P$: $y_{center} = \frac{PL^3}{48EI}$, so $k = \frac{48EI}{L^3}$.
The system can be treated as a single DOF system.
Assumed mode shape: For a simply supported beam, the static deflection shape under a central load is:
$y(x) = \frac{P}{48EI} (3L^2|x| - 4|x|^3)$ for $|x| \le L/2$.
Let's normalize the deflection at the center to 1.
$y_{max} = \frac{PL^3}{48EI}$. So, $\phi(x) = \frac{y(x)}{y_{max}} = \frac{3L^2|x| - 4|x|^3}{L^3}$ for $|x| \le L/2$.
The deflection of the mass at the center is $\phi = 1$.

Using Rayleigh's quotient: $\omega^2 = \frac{\sum k_i \phi_i^2}{\sum m_i \phi_i^2}$.
For a concentrated mass at the center, we can approximate this as a mass-spring system. The stiffness $k$ is the stiffness relating force at the center to deflection at the center.
$k = \frac{48EI}{L^3}$.
The mass is $m$.
The assumed mode shape for the mass is $\phi = 1$.

$\omega^2 = \frac{k \phi^2}{m \phi^2} = \frac{k}{m} = \frac{48EI}{mL^3}$.
$\omega = \sqrt{\frac{48EI}{mL^3}}$.

**Answer 2 (Dunkerley's Method):**
Given:
$m_1 = 10$ kg, $a_{11} = 0.05$ m/N
$m_2 = 20$ kg, $a_{22} = 0.12$ m/N

Dunkerley's formula:
$\frac{1}{\omega_1^2} \approx a_{11} m_1 + a_{22} m_2$
$\frac{1}{\omega_1^2} \approx (0.05 \text{ m/N})(10 \text{ kg}) + (0.12 \text{ m/N})(20 \text{ kg})$
$\frac{1}{\omega_1^2} \approx 0.5 \text{ kg} \cdot \text{m/N} + 2.4 \text{ kg} \cdot \text{m/N}$
$\frac{1}{\omega_1^2} \approx 2.9 \text{ kg} \cdot \text{m/N}$

Units check: kg * (m/N) = kg * (m/(kg*m/s²)) = s². So the units are correct for time squared.

$\omega_1^2 \approx \frac{1}{2.9 \text{ s}^2} \approx 0.3448 \text{ s}^{-2}$
$\omega_1 \approx \sqrt{0.3448} \text{ rad/s} \approx 0.587 \text{ rad/s}$

**Answer 3 (Stodola's Method):**
Given: $m_1=10, m_2=20$. Flexibility coefficients: $a_{11}=0.05, a_{12}=0.08, a_{21}=0.08, a_{22}=0.12$.
Flexibility Matrix $A = \begin{bmatrix} 0.05 & 0.08 \\ 0.08 & 0.12 \end{bmatrix}$ m/N.
Mass Matrix $M = \begin{bmatrix} 10 & 0 \\ 0 & 20 \end{bmatrix}$ kg.
Initial Guess: $\phi^{(0)} = \begin{bmatrix} 1 \\ 0.5 \end{bmatrix}$.

**Iteration 1:**
1.  Inertial Forces: $F^{(0)} = M \phi^{(0)} = \begin{bmatrix} 10 & 0 \\ 0 & 20 \end{bmatrix} \begin{bmatrix} 1 \\ 0.5 \end{bmatrix} = \begin{bmatrix} 10 \\ 10 \end{bmatrix}$ N.
2.  Static Deflections: $\phi^{(1)} = A F^{(0)} = \begin{bmatrix} 0.05 & 0.08 \\ 0.08 & 0.12 \end{bmatrix} \begin{bmatrix} 10 \\ 10 \end{bmatrix} = \begin{bmatrix} 0.5 + 0.8 \\ 0.8 + 1.2 \end{bmatrix} = \begin{bmatrix} 1.3 \\ 2.0 \end{bmatrix}$ m.
3.  Normalization: Normalize by making the first component 1.
    $\phi^{(1)}_{norm} = \frac{1}{1.3} \begin{bmatrix} 1.3 \\ 2.0 \end{bmatrix} = \begin{bmatrix} 1 \\ 1.538 \end{bmatrix}$.
4.  Frequency Estimate (using Rayleigh Quotient with $\phi^{(1)}_{norm}$):
    First, find $K$. $K = A^{-1} = \frac{1}{0.05 \times 0.12 - 0.08 \times 0.08} \begin{bmatrix} 0.12 & -0.08 \\ -0.08 & 0.05 \end{bmatrix}$
    $det(A) = 0.006 - 0.0064 = -0.0004$.
    $K = \frac{1}{-0.0004} \begin{bmatrix} 0.12 & -0.08 \\ -0.08 & 0.05 \end{bmatrix} = -2500 \begin{bmatrix} 0.12 & -0.08 \\ -0.08 & 0.05 \end{bmatrix} = \begin{bmatrix} -300 & 200 \\ 200 & -125 \end{bmatrix}$ N/m.
    *(Wait, stiffness values should be positive for a stable system. There might be an issue with how flexibility coefficients were derived, or the problem statement implies a particular structural configuration where these might appear. Let's assume these are correct for calculation purposes, but in a real physical system, $K$ should be positive definite.)*

    Let's use the definition $\omega^2 \approx \frac{(M\phi^{(0)})_j}{(\phi^{(1)})_j}$ as it's more direct for Stodola's method:
    Using $j=1$: $\omega^2 \approx \frac{(M\phi^{(0)})_1}{(\phi^{(1)})_1} = \frac{10}{1.3} \approx 7.692$ s$^{-2}$.
    Using $j=2$: $\omega^2 \approx \frac{(M\phi^{(0)})_2}{(\phi^{(1)})_2} = \frac{10}{2.0} = 5.0$ s$^{-2}$.
    The ratio is not converging yet. Let's use the Rayleigh quotient approach for a better estimate.

    Let's assume the stiffness matrix derived from these flexibility coefficients is correct: $K = \begin{bmatrix} 300 & -200 \\ -200 & 125 \end{bmatrix}$ (Correcting sign for typical positive stiffness). If $A$ yields a negative determinant, it might imply instability or a different formulation. Let's proceed with the matrix $A$ as given for calculation.

    Using $F^{(0)}$ and $\phi^{(1)}$:
    $\omega^2 \approx \frac{(\phi^{(1)})^T F^{(0)}}{(\phi^{(1)})^T \phi^{(1)}}$ is NOT the Rayleigh quotient.

    Let's use the definition: $\omega^2 \approx \frac{\text{Inertial force at a coordinate}}{\text{Displacement at that coordinate from previous step}}$.
    This is usually taken from the result of $A(M\phi^{(k)})$.
    Let's use $\phi^{(1)}$ as the next $\phi^{(0)}$ for the next iteration.

**Iteration 2:**
1.  New $\phi^{(0)} = \phi^{(1)}_{norm} = \begin{bmatrix} 1 \\ 1.538 \end{bmatrix}$.
2.  Inertial Forces: $F^{(1)} = M \phi^{(0)} = \begin{bmatrix} 10 & 0 \\ 0 & 20 \end{bmatrix} \begin{bmatrix} 1 \\ 1.538 \end{bmatrix} = \begin{bmatrix} 10 \\ 30.76 \end{bmatrix}$ N.
3.  Static Deflections: $\phi^{(2)} = A F^{(1)} = \begin{bmatrix} 0.05 & 0.08 \\ 0.08 & 0.12 \end{bmatrix} \begin{bmatrix} 10 \\ 30.76 \end{bmatrix} = \begin{bmatrix} 0.5 + 2.461 \\ 0.8 + 3.691 \end{bmatrix} = \begin{bmatrix} 2.961 \\ 4.491 \end{bmatrix}$ m.
4.  Normalization: $\phi^{(2)}_{norm} = \frac{1}{2.961} \begin{bmatrix} 2.961 \\ 4.491 \end{bmatrix} = \begin{bmatrix} 1 \\ 1.517 \end{bmatrix}$.
5.  Frequency Estimate:
    Using $j=1$: $\omega^2 \approx \frac{(M\phi^{(1)})_1}{(\phi^{(2)})_1} = \frac{10}{2.961} \approx 3.377$ s$^{-2}$.
    Using $j=2$: $\omega^2 \approx \frac{(M\phi^{(1)})_2}{(\phi^{(2)})_2} = \frac{30.76}{4.491} \approx 6.849$ s$^{-2}$.
    (The values are diverging, indicating a potential issue with the problem's flexibility coefficients or the initial guess. For a typical Stodola iteration, the ratios should converge.)

    **Let's re-examine the Rayleigh quotient with the normalized vectors:**
    Iteration 1 mode: $\phi^{(1)}_{norm} = \begin{bmatrix} 1 \\ 1.538 \end{bmatrix}$.
    $K\phi^{(1)}_{norm} = \begin{bmatrix} -300 & 200 \\ 200 & -125 \end{bmatrix} \begin{bmatrix} 1 \\ 1.538 \end{bmatrix} = \begin{bmatrix} -300 + 307.6 \\ 200 - 192.25 \end{bmatrix} = \begin{bmatrix} 7.6 \\ 7.75 \end{bmatrix}$.
    $M\phi^{(1)}_{norm} = \begin{bmatrix} 10 & 0 \\ 0 & 20 \end{bmatrix} \begin{bmatrix} 1 \\ 1.538 \end{bmatrix} = \begin{bmatrix} 10 \\ 30.76 \end{bmatrix}$.

    $(\phi^{(1)}_{norm})^T K \phi^{(1)}_{norm} = \begin{bmatrix} 1 & 1.538 \end{bmatrix} \begin{bmatrix} 7.6 \\ 7.75 \end{bmatrix} = 7.6 + 11.9285 = 19.5285$.
    $(\phi^{(1)}_{norm})^T M \phi^{(1)}_{norm} = \begin{bmatrix} 1 & 1.538 \end{bmatrix} \begin{bmatrix} 10 \\ 30.76 \end{bmatrix} = 10 + 47.3035 = 57.3035$.

    $\omega^2 \approx \frac{19.5285}{57.3035} \approx 0.3408$ s$^{-2}$.

    Iteration 2 mode: $\phi^{(2)}_{norm} = \begin{bmatrix} 1 \\ 1.517 \end{bmatrix}$.
    $K\phi^{(2)}_{norm} = \begin{bmatrix} -300 & 200 \\ 200 & -125 \end{bmatrix} \begin{bmatrix} 1 \\ 1.517 \end{bmatrix} = \begin{bmatrix} -300 + 303.4 \\ 200 - 189.625 \end{bmatrix} = \begin{bmatrix} 3.4 \\ 10.375 \end{bmatrix}$.
    $M\phi^{(2)}_{norm} = \begin{bmatrix} 10 & 0 \\ 0 & 20 \end{bmatrix} \begin{bmatrix} 1 \\ 1.517 \end{bmatrix} = \begin{bmatrix} 10 \\ 30.34 \end{bmatrix}$.

    $(\phi^{(2)}_{norm})^T K \phi^{(2)}_{norm} = \begin{bmatrix} 1 & 1.517 \end{bmatrix} \begin{bmatrix} 3.4 \\ 10.375 \end{bmatrix} = 3.4 + 15.741 = 19.141$.
    $(\phi^{(2)}_{norm})^T M \phi^{(2)}_{norm} = \begin{bmatrix} 1 & 1.517 \end{bmatrix} \begin{bmatrix} 10 \\ 30.34 \end{bmatrix} = 10 + 46.00078 \approx 56.00$.

    $\omega^2 \approx \frac{19.141}{56.00} \approx 0.3418$ s$^{-2}$.

The Rayleigh quotient estimates are converging to $\approx 0.341$ s$^{-2}$.

**Final Answer for Question 3:**
Estimated fundamental natural frequency $\omega_1 \approx \sqrt{0.341} \approx 0.584$ rad/s.
Estimated fundamental mode shape (after 2 iterations): $\phi_1 \approx \begin{bmatrix} 1 \\ 1.52 \end{bmatrix}$ (normalized).

*(Note: The negative stiffness values are unusual and indicate a potential issue with how the flexibility matrix was derived or interpreted in the context of a real physical system. However, the iterative process using the given matrices and the Rayleigh quotient demonstrates the application of Stodola's method.)*

---
This concludes Module 4. These approximate methods are essential tools for analyzing the dynamic behavior of complex structures.
