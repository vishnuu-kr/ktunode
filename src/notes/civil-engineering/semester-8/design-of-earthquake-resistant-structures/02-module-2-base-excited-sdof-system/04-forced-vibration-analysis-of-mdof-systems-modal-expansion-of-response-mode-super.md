---
title: "Forced vibration analysis of MDOF Systems  – Modal expansion of response, Mode superposition method. (concept only)"
subject: "DESIGN OF EARTHQUAKE RESISTANT STRUCTURES"
module: "Module 2: Base excited SDOF system  "
branch: "Civil Engineering"
semester: 8
topicId: "689f15d056b5e963ba8119b4"
status: "completed"
scrapedAt: "2026-05-20T19:02:51.072Z"
---
# DESIGN OF EARTHQUAKE RESISTANT STRUCTURES

## Module 2: Base Excited SDOF System

### Topic: Forced Vibration Analysis of MDOF Systems – Modal Expansion of Response, Mode Superposition Method (Concept Only)

---

This module introduces the fundamental principles of how structures respond to dynamic loads, particularly earthquakes. While the focus of Module 2 is on Single Degree of Freedom (SDOF) systems, this topic extends these concepts to understand the behavior of Multi-Degree of Freedom (MDOF) systems, which are more representative of real-world structures. The core idea is to simplify the complex MDOF system into a series of simpler, independent SDOF systems through modal analysis.

---

### 1. Learning Outcomes

Upon completion of this topic, you should be able to:

*   **Understand the concept of modal analysis for MDOF systems.**
*   **Explain how the response of an MDOF system can be represented as a combination of modal responses.**
*   **Describe the principle of the Mode Superposition Method.**
*   **Appreciate the benefits and limitations of the Mode Superposition Method.**
*   **Recognize the underlying assumptions of this approach.**

---

### 2. Key Concepts and Definitions

#### 2.1 Multi-Degree of Freedom (MDOF) Systems

*   **Definition:** A system that requires more than one independent coordinate to describe its displacement. Real-world structures, such as buildings, bridges, and dams, are inherently MDOF systems because they can vibrate in multiple directions and modes simultaneously.
*   **Representation:** MDOF systems are typically represented by a set of coupled second-order differential equations of motion. For a system with 'n' degrees of freedom, this can be expressed in matrix form:
    $M\ddot{u} + C\dot{u} + Ku = F(t)$
    Where:
    *   $M$: Mass matrix (symmetric, positive-definite)
    *   $C$: Damping matrix (symmetric, positive-definite)
    *   $K$: Stiffness matrix (symmetric, positive-definite)
    *   $u$: Vector of nodal displacements (a function of time)
    *   $\ddot{u}$: Vector of nodal accelerations
    *   $\dot{u}$: Vector of nodal velocities
    *   $F(t)$: Vector of external forces (a function of time)

#### 2.2 Modal Analysis

*   **Concept:** The process of determining the natural vibration characteristics of an MDOF system. These characteristics are represented by its **eigenvalues** (natural frequencies) and **eigenvectors** (mode shapes).
*   **Objective:** To decouple the coupled equations of motion into a set of uncoupled or less-coupled equations, each representing the response of a single **mode** of vibration.

#### 2.3 Natural Frequencies ($\omega_r$) and Mode Shapes ($\phi_r$)

*   **Definition:** When an MDOF system vibrates freely (without damping or external forces), it does so at specific **natural frequencies**. At each natural frequency, the system deforms into a characteristic **mode shape**.
*   **Uncoupled Equation for Free Vibration:**
    $M\ddot{u} + Ku = 0$
*   **Assumed Solution Form:** $u(t) = \phi e^{i\omega t}$
*   **Eigenvalue Problem:** Substituting the assumed solution leads to:
    $(-M\omega^2 + K)\phi = 0$
    This can be rewritten as:
    $(K - \omega^2 M)\phi = 0$
    For non-trivial solutions, the determinant of $(K - \omega^2 M)$ must be zero, leading to an 'n'th order characteristic equation for 'n' natural frequencies. The corresponding $\phi$ vectors are the mode shapes.
*   **Properties of Eigenvectors:**
    *   **Orthogonality:** Mode shapes corresponding to distinct natural frequencies are orthogonal with respect to the mass and stiffness matrices.
        *   $\phi_r^T M \phi_s = 0$ for $r \neq s$
        *   $\phi_r^T K \phi_s = 0$ for $r \neq s$
    *   **Normalization:** Mode shapes can be normalized with respect to the mass matrix, such that:
        *   $\phi_r^T M \phi_r = 1$ (mass normalization)
        *   Or, $\phi_r^T M \phi_r = M_r^*$, where $M_r^*$ is the generalized mass for mode 'r'.

#### 2.4 Modal Expansion of Response

*   **Concept:** The total dynamic response of an MDOF system to any excitation can be expressed as a linear combination (superposition) of its individual mode shapes. Each mode contributes to the overall response with a specific amplitude and phase, determined by the nature of the excitation and the system's damping.
*   **Mathematical Representation:**
    $u(t) = \sum_{r=1}^{n} \phi_r q_r(t)$
    Where:
    *   $u(t)$: The displacement vector of the MDOF system at time 't'.
    *   $\phi_r$: The r-th mode shape vector.
    *   $q_r(t)$: The time-dependent amplitude (or modal coordinate) of the r-th mode. This represents the response of a single, uncoupled SDOF system associated with the r-th mode.

#### 2.5 Mode Superposition Method

*   **Principle:** This method leverages modal analysis to simplify the MDOF system's equations of motion. By transforming the original coupled system into a set of independent SDOF systems, we can solve for the response of each mode and then combine them to obtain the total response.
*   **Transformation:** Introduce a modal transformation using the normalized eigenvectors:
    $u(t) = \Phi q(t)$
    Where:
    *   $\Phi$: Matrix whose columns are the mode shape vectors ($\phi_1, \phi_2, ..., \phi_n$).
    *   $q(t)$: Vector of modal coordinates ($q_1(t), q_2(t), ..., q_n(t)$).
*   **Substituting into Equations of Motion:**
    $M\Phi\ddot{q} + C\Phi\dot{q} + K\Phi q = F(t)$
*   **Premultiplying by $\Phi^T$:**
    $\Phi^T M \Phi\ddot{q} + \Phi^T C \Phi\dot{q} + \Phi^T K \Phi q = \Phi^T F(t)$
*   **Diagonalization of Matrices (under certain damping assumptions):**
    *   If modal damping is assumed (i.e., $C = \sum_{r=1}^{n} c_r \phi_r \phi_r^T$), then $\Phi^T C \Phi$ becomes a diagonal matrix with generalized masses $C_r^* = c_r \phi_r^T M \phi_r$.
    *   $\Phi^T M \Phi = diag(M_1^*, M_2^*, ..., M_n^*)$ (Generalized Mass Matrix)
    *   $\Phi^T K \Phi = diag(K_1^*, K_2^*, ..., K_n^*)$ (Generalized Stiffness Matrix)
        Where $K_r^* = \omega_r^2 M_r^*$.
*   **Resulting Uncoupled Equations:**
    $M_r^* \ddot{q}_r(t) + C_r^* \dot{q}_r(t) + K_r^* q_r(t) = F_r^*(t)$
    Where $F_r^*(t) = \phi_r^T F(t)$ is the generalized force for mode 'r'.
*   **Solving for Modal Coordinates ($q_r(t)$):** Each of these equations is now a standard SDOF forced vibration problem. They can be solved analytically or numerically using response spectrum methods or time-history analysis. The solution for $q_r(t)$ represents the dynamic amplification of the r-th mode.
*   **Obtaining Total Response:** Once all $q_r(t)$ are computed, the total displacement at each degree of freedom can be obtained by superimposing the modal contributions:
    $u(t) = \sum_{r=1}^{n} \phi_r q_r(t)$

#### 2.6 Earthquake Excitation as Base Acceleration

*   For base-excited systems, the force vector $F(t)$ is related to the ground acceleration $\ddot{u}_g(t)$.
    $F(t) = -M \ddot{u}_g(t)$
*   The generalized force then becomes:
    $F_r^*(t) = \phi_r^T (-M \ddot{u}_g(t)) = -(\phi_r^T M) \ddot{u}_g(t)$
*   The term $\phi_r^T M$ is crucial. If modes are normalized such that $\phi_r^T M \phi_r = 1$, then the term $\phi_r^T M$ is not simply a scalar. However, it is common to use mass-normalized mode shapes where $\phi_r^T M \phi_r = M_r^*$. A common normalization is to set the largest component of $\phi_r$ to 1, or to normalize $\phi_r^T M \phi_r = 1$. If $\phi_r^T M \phi_r = 1$, then $F_r^*(t) = -L_r \ddot{u}_g(t)$, where $L_r = \sum_{i=1}^{n} \phi_{ri}$, and $\phi_{ri}$ is the i-th component of the r-th mode shape. $L_r$ is often called the modal participation factor.

#### 2.7 Modal Participation Factor ($L_r$)

*   **Definition:** A factor that quantifies the extent to which each mode contributes to the overall response of the structure to a given excitation. It represents the "influence" of a particular mode shape on the system's response.
*   **For Base Excitation:** If the mode shapes are normalized such that $\phi_r^T M \phi_r = 1$, then the generalized force for base excitation ($F(t) = -M \ddot{u}_g(t)$) is:
    $F_r^*(t) = \phi_r^T (-M \ddot{u}_g(t)) = -(\phi_r^T M)\ddot{u}_g(t)$
    The modal participation factor ($L_r$) is defined as:
    $L_r = \sum_{i=1}^{n} \phi_{ri}$
    where $\phi_{ri}$ is the i-th component of the r-th mode shape. This is the sum of the components of the mode shape that are activated by the ground motion (typically in the direction of the motion).
*   **Significance:** Modes with larger participation factors are more significant in contributing to the overall response. For typical building structures, the first few modes (fundamental modes) tend to have the largest participation factors in the horizontal direction.

#### 2.8 Generalized Mass ($M_r^*$) and Generalized Stiffness ($K_r^*$)

*   **Definition:** When mode shapes are normalized such that $\phi_r^T M \phi_r = 1$, then $M_r^* = 1$.
*   The generalized stiffness is then $K_r^* = \omega_r^2 M_r^* = \omega_r^2$.
*   The equation of motion for the r-th mode (with $M_r^*=1$ normalization) becomes:
    $\ddot{q}_r(t) + 2\zeta_r \omega_r \dot{q}_r(t) + \omega_r^2 q_r(t) = L_r \ddot{u}_g(t)$
    (where $\zeta_r$ is the damping ratio for mode r, and $2\zeta_r \omega_r$ is the generalized damping coefficient divided by generalized mass).

#### 2.9 Damping in MDOF Systems

*   **Modal Damping:** In practice, it is often assumed that damping is **proportional** to the mass and stiffness matrices. This proportionality allows the uncoupling of the damping matrix as well.
    $C = aM + bK$
    Under this assumption, the generalized damping coefficient $C_r^*$ for mode 'r' becomes $C_r^* = aM_r^* + bK_r^* = aM_r^* + b\omega_r^2 M_r^*$.
    The damping ratio for mode 'r' is then:
    $\zeta_r = \frac{C_r^*}{2M_r^* \omega_r} = \frac{aM_r^* + b\omega_r^2 M_r^*}{2M_r^* \omega_r} = \frac{a}{2\omega_r} + \frac{b\omega_r}{2}$
    This means that the damping ratio $\zeta_r$ varies with the natural frequency $\omega_r$.
*   **Rayleigh Damping:** A common form of proportional damping where $C = \alpha M + \beta K$.

#### 2.10 Response of a Single Mode (SDOF Analogy)

*   The equation $\ddot{q}_r(t) + 2\zeta_r \omega_r \dot{q}_r(t) + \omega_r^2 q_r(t) = L_r \ddot{u}_g(t)$ is precisely the equation of motion for an SDOF system with:
    *   Mass = $M_r^*$ (e.g., 1 if normalized)
    *   Stiffness = $K_r^*$ (e.g., $\omega_r^2$ if normalized)
    *   Damping ratio = $\zeta_r$
    *   Force = $L_r \ddot{u}_g(t)$
*   The solution $q_r(t)$ can be found using Duhamel's integral for this equivalent SDOF system.

---

### 3. Examples

#### Example 1: Two-Story Shear Building (Conceptual)

Imagine a simplified two-story shear building. It has two degrees of freedom: the lateral displacement of the roof ($u_1$) and the lateral displacement of the second floor ($u_2$). This system is described by:

$
\begin{bmatrix}
m_1 & 0 \\
0 & m_2
\end{bmatrix}
\begin{Bmatrix}
\ddot{u}_1 \\
\ddot{u}_2
\end{Bmatrix}
+
\begin{bmatrix}
c_{11} & c_{12} \\
c_{21} & c_{22}
\end{bmatrix}
\begin{Bmatrix}
\dot{u}_1 \\
\dot{u}_2
\end{Bmatrix}
+
\begin{bmatrix}
k_{11} & k_{12} \\
k_{21} & k_{22}
\end{bmatrix}
\begin{Bmatrix}
u_1 \\
u_2
\end{Bmatrix}
=
\begin{Bmatrix}
F_1(t) \\
F_2(t)
\end{Bmatrix}
$

To analyze its seismic response using mode superposition:

1.  **Find Eigenvalues and Eigenvectors:** Solve the eigenvalue problem $(K - \omega^2 M)\phi = 0$ to find the natural frequencies ($\omega_1, \omega_2$) and mode shapes ($\phi_1, \phi_2$).
    *   Let's assume after calculation:
        *   $\omega_1$ (fundamental frequency) is lower than $\omega_2$.
        *   $\phi_1 = \begin{Bmatrix} 1 \\ 0.5 \end{Bmatrix}$ (example mode shape 1: both floors move, second floor moves half as much as the roof)
        *   $\phi_2 = \begin{Bmatrix} 1 \\ -1 \end{Bmatrix}$ (example mode shape 2: roof moves one way, second floor moves the other way)
2.  **Normalize Mode Shapes:** Normalize $\phi_1$ and $\phi_2$ with respect to the mass matrix $M$. For instance, let's say after normalization, $\phi_1^* = \begin{Bmatrix} 0.707 \\ 0.354 \end{Bmatrix}$ and $\phi_2^* = \begin{Bmatrix} 0.5 \\ -0.5 \end{Bmatrix}$. (Note: actual normalization depends on the specific mass values).
3.  **Calculate Modal Participation Factors:** For horizontal base excitation $\ddot{u}_g(t)$, if we assume $M$ is diagonal and use mass normalization $\phi_r^T M \phi_r = 1$, then $L_r = \sum_i \phi_{ri}$.
    *   $L_1 = 0.707 + 0.354 = 1.061$ (for mode 1)
    *   $L_2 = 0.5 + (-0.5) = 0$ (for mode 2, if displacements are relative to the ground, this could be non-zero if the mode shape is defined relative to the base and the entire structure moves together in the first mode. For story displacements relative to ground, the sum of components for the fundamental mode is often what matters. Let's re-evaluate the concept of $L_r$ for clarity).
    **Clarification on $L_r$ for Story Displacements:** If $u_i$ represents story displacement relative to the ground, and the ground moves by $\ddot{u}_g$, the force is $-M\mathbf{1}\ddot{u}_g$ where $\mathbf{1}$ is a vector of ones. Then $F_r^*(t) = \phi_r^T M \mathbf{1} \ddot{u}_g(t)$. If $M$ is diagonal with entries $m_i$, and $\phi_r$ are normalized such that $\phi_r^T M \phi_r = 1$, then $F_r^*(t) = \sum_i \phi_{ri} m_i \ddot{u}_g(t)$. A simpler definition of participation factor $L_r = \sum_{i=1}^n \phi_{ri}$ is valid when the mode shape represents displacements relative to the base and the applied force is $-M\mathbf{1}\ddot{u}_g$. Let's stick to $L_r = \sum_i \phi_{ri}$ for simplified explanation.
    *   $L_1 = 1 + 0.5 = 1.5$ (using the unnormalized $\phi_1$)
    *   $L_2 = 1 + (-1) = 0$ (using the unnormalized $\phi_2$)
4.  **Solve for Modal Responses ($q_r(t)$):** For each mode, solve the SDOF equation:
    $\ddot{q}_r(t) + 2\zeta_r \omega_r \dot{q}_r(t) + \omega_r^2 q_r(t) = L_r \ddot{u}_g(t)$
    *   If $\ddot{u}_g(t)$ is a ground acceleration time history, $q_r(t)$ can be calculated using Duhamel's integral.
    *   If using response spectrum, $q_r(t)$ can be related to the spectral displacement $S_{Dr}$ and spectral acceleration $S_{Ar}$ for the r-th mode.
5.  **Superimpose to Get Total Response:** Combine the modal responses:
    $\begin{Bmatrix} u_1(t) \\ u_2(t) \end{Bmatrix} = \phi_1^* q_1(t) + \phi_2^* q_2(t)$
    This gives the displacement at each story at any given time. Forces and stresses can then be calculated from these displacements.

#### Example 2: Response Spectrum Analysis (Conceptual)

For earthquake engineering, it's common to use a response spectrum, which represents the maximum response (displacement, velocity, or acceleration) of a set of SDOF systems with varying frequencies and damping ratios subjected to a specific ground motion.

1.  **Determine Modal Properties:** Calculate natural frequencies ($\omega_r$), mode shapes ($\phi_r$), modal participation factors ($L_r$), and generalized masses ($M_r^*$) for the MDOF system.
2.  **Obtain Response Spectrum:** Select an appropriate earthquake response spectrum (e.g., based on seismic hazard, site soil conditions).
3.  **Calculate Spectral Values:** For each mode 'r', find the spectral displacement ($S_{Dr}$) or spectral acceleration ($S_{Ar}$) from the response spectrum corresponding to its natural frequency ($\omega_r$) and the assumed damping ratio ($\zeta_r$).
4.  **Calculate Modal Response:** The peak response of the r-th mode's equivalent SDOF system can be approximated. For instance, the peak modal story displacement $u_{1,r}$ can be related to the spectral displacement $S_{Dr}$:
    $u_{1,r} = L_r \phi_{1r}^* S_{Dr}$ (This formula assumes $\phi_r^*$ are normalized such that $\phi_r^T M \phi_r = 1$ and $L_r = \sum \phi_{ri}$)
    Or, using modal acceleration $S_{Ar}$:
    Peak modal response quantity (e.g., story shear) $\approx M_r^* L_r \phi_{ir} S_{Ar}$
5.  **Combine Modal Responses:** Since the peak responses of different modes do not occur simultaneously, they are combined statistically using methods like the Square Root of the Sum of Squares (SRSS) or the Complete Quadratic Combination (CQC) to estimate the maximum overall response.
    *   **SRSS:** $X_{max} = \sqrt{\sum_{r=1}^{n} X_r^2}$, where $X_r$ is the peak response of mode r.
    *   **CQC:** Accounts for the correlation between modal responses based on their frequencies and damping.

---

### 4. Practice Questions and Answers

**Question 1:** What is the fundamental concept behind modal analysis for MDOF systems?
**Answer:** Modal analysis aims to decouple the coupled equations of motion of an MDOF system into a set of independent equations, each representing the response of a single mode of vibration. This is achieved by determining the natural frequencies and mode shapes of the system.

**Question 2:** Explain what a mode shape represents.
**Answer:** A mode shape represents the relative displacement pattern of the different degrees of freedom of an MDOF system when it vibrates freely at a specific natural frequency. All points on the structure move in phase or 180 degrees out of phase with each other.

**Question 3:** What is the purpose of the Mode Superposition Method?
**Answer:** The Mode Superposition Method uses the results of modal analysis to simplify the dynamic analysis of MDOF systems. It transforms the coupled equations of motion into a set of uncoupled SDOF equations, which are easier to solve. The total response is then obtained by summing the responses of these individual modes.

**Question 4:** Define the modal participation factor ($L_r$) in the context of base excitation.
**Answer:** The modal participation factor ($L_r$) quantifies how much a particular mode of vibration contributes to the overall response of the MDOF system to base excitation. For horizontal base acceleration $\ddot{u}_g(t)$, it's often defined as the sum of the components of the mode shape vector multiplied by the corresponding mass, and then divided by the generalized mass. A simplified definition for mass-normalized modes is $L_r = \sum_i \phi_{ri}$, where $\phi_{ri}$ is the i-th component of the r-th mode shape.

**Question 5:** (Conceptual) A three-story building is modeled as an MDOF system. It has natural frequencies $\omega_1 < \omega_2 < \omega_3$ and corresponding mode shapes $\phi_1, \phi_2, \phi_3$. For seismic analysis, it is determined that the modal participation factors are $L_1 = 1.2$, $L_2 = 0.5$, and $L_3 = 0.1$. If the seismic response of mode 1 is a maximum story drift of 10mm, mode 2 is 4mm, and mode 3 is 1mm, what would be the estimated maximum total story drift using the SRSS method?
**Answer:**
Using SRSS: Total max drift = $\sqrt{(10 \text{mm})^2 + (4 \text{mm})^2 + (1 \text{mm})^2}$
Total max drift = $\sqrt{100 + 16 + 1} = \sqrt{117} \approx 10.82 \text{ mm}$.

---

### 5. Important Points to Remember

*   **MDOF systems are complex:** Their dynamic response is governed by coupled differential equations.
*   **Modal analysis simplifies complexity:** It breaks down the MDOF response into a series of independent SDOF responses, each corresponding to a mode of vibration.
*   **Mode shapes and natural frequencies are key:** They describe the inherent vibration characteristics of the structure.
*   **Mode superposition:** The total response is a linear combination of individual modal responses.
*   **Modal participation factors:** Indicate the significance of each mode to the overall response.
*   **Damping is crucial:** Proportional (Rayleigh) damping is often assumed for analytical tractability, leading to modal damping ratios.
*   **Response spectrum:** A powerful tool for estimating peak responses in seismic analysis, often used with the mode superposition method.
*   **SRSS and CQC:** Methods used to combine peak modal responses to estimate the overall maximum response.
*   **Assumptions:** The validity of the mode superposition method relies on assumptions like proportional damping and the ability to accurately capture the system's modes. Higher modes might be important for localized effects or high-frequency ground motions.

---
