---
title: "Free vibration analysis: Natural frequencies and mode shapes, orthogonality of normal mode s."
subject: "STRUCTURAL DYNAMICS"
module: "Module 3: Response to general loading  – Duhamel Integral, damped and undamped systems."
branch: "Civil Engineering"
semester: 7
topicId: "689f15cf56b5e963ba81141f"
status: "completed"
scrapedAt: "2026-05-20T19:01:40.431Z"
---
# Structural Dynamics: Free Vibration Analysis

## Module 3: Response to General Loading - Duhamel Integral, Damped and Undamped Systems

### Topic: Free Vibration Analysis: Natural Frequencies and Mode Shapes, Orthogonality of Normal Modes

---

## 1. Introduction to Free Vibration Analysis

Free vibration analysis is a fundamental concept in structural dynamics. It describes the behavior of a structure when it is displaced from its equilibrium position and then allowed to oscillate without any external forcing. The motion is driven solely by the internal restoring forces of the system.

**Key Concepts:**

*   **Equilibrium Position:** The state where the net force acting on the structure is zero.
*   **Displacement:** Deviation from the equilibrium position.
*   **Restoring Force:** The force that acts to bring the structure back to its equilibrium position. This is typically proportional to the displacement (in linear systems).
*   **Inertia Force:** The force due to the mass of the structure and its acceleration.

**Importance of Free Vibration Analysis:**

*   **Understanding Fundamental Behavior:** It reveals the inherent dynamic characteristics of a structure.
*   **Basis for Forced Vibration:** The natural frequencies and mode shapes are crucial for understanding how a structure responds to external loads, including resonance.
*   **Design Criteria:** Natural frequencies are used to avoid resonance with expected forcing frequencies.
*   **Modal Analysis:** A cornerstone of seismic analysis and vibration control.

---

## 2. Undamped Free Vibration

This section focuses on systems where no energy is lost due to damping.

### 2.1. Single Degree of Freedom (SDOF) System

The simplest representation of a vibrating system is an SDOF system, consisting of a mass ($m$), a spring ($k$), and a dashpot (initially ignored for undamped analysis).

**Equation of Motion:**

The equation of motion for an undamped SDOF system can be derived using Newton's second law:

$$ m\ddot{x} + kx = 0 $$

Where:
*   $m$: Mass
*   $\ddot{x}$: Acceleration
*   $k$: Stiffness
*   $x$: Displacement from equilibrium

**Derivation:**

Consider a mass $m$ attached to a spring with stiffness $k$. If displaced by $x$, the spring exerts a restoring force $F_s = -kx$. By Newton's second law, $F_{net} = ma$, so:

$$ m\ddot{x} = -kx $$
$$ m\ddot{x} + kx = 0 $$

**Solution of the Equation of Motion:**

This is a second-order linear homogeneous ordinary differential equation. The general solution is assumed to be of the form:

$$ x(t) = A \cos(\omega_n t - \phi) $$

or equivalently:

$$ x(t) = C_1 \cos(\omega_n t) + C_2 \sin(\omega_n t) $$

Where:
*   $A$ and $\phi$ (or $C_1$ and $C_2$) are constants determined by initial conditions.
*   $\omega_n$ is the **natural circular frequency**.

**Natural Circular Frequency ($\omega_n$):**

By comparing the equation of motion with the standard form for simple harmonic motion ($ \ddot{x} + \omega_n^2 x = 0 $), we can identify:

$$ \omega_n^2 = \frac{k}{m} $$
$$ \omega_n = \sqrt{\frac{k}{m}} \quad (\text{radians/second}) $$

**Natural Frequency ($f_n$):**

The natural frequency is the frequency in Hertz (cycles per second).

$$ f_n = \frac{\omega_n}{2\pi} = \frac{1}{2\pi} \sqrt{\frac{k}{m}} \quad (\text{Hz}) $$

**Example:**

Consider a mass of 10 kg attached to a spring with stiffness 4000 N/m.
*   Natural circular frequency: $\omega_n = \sqrt{\frac{4000}{10}} = \sqrt{400} = 20$ rad/s
*   Natural frequency: $f_n = \frac{20}{2\pi} \approx 3.18$ Hz

### 2.2. Multi-Degree of Freedom (MDOF) Systems

For MDOF systems, we consider the structure as an assembly of discrete masses and springs. The general equation of motion is a matrix equation:

$$ \mathbf{M}\ddot{\mathbf{x}} + \mathbf{K}\mathbf{x} = \mathbf{0} $$

Where:
*   $\mathbf{M}$: Mass matrix (symmetric, positive definite)
*   $\mathbf{K}$: Stiffness matrix (symmetric, positive definite)
*   $\mathbf{x}$: Vector of nodal displacements

**Undamped Free Vibration Analysis for MDOF:**

We assume a solution of the form:

$$ \mathbf{x}(t) = \boldsymbol{\phi} \sin(\omega_n t) $$

Substituting this into the equation of motion:

$$ \mathbf{M}(\boldsymbol{\phi} (-\omega_n^2 \sin(\omega_n t))) + \mathbf{K}(\boldsymbol{\phi} \sin(\omega_n t)) = \mathbf{0} $$
$$ -\omega_n^2 \mathbf{M}\boldsymbol{\phi} \sin(\omega_n t) + \mathbf{K}\boldsymbol{\phi} \sin(\omega_n t) = \mathbf{0} $$

For this equation to hold for all times $t$, we must have:

$$ (\mathbf{K} - \omega_n^2 \mathbf{M})\boldsymbol{\phi} = \mathbf{0} $$

This is a **generalized eigenvalue problem**.

**Eigenvalue Problem:**

The equation $(\mathbf{K} - \omega_n^2 \mathbf{M})\boldsymbol{\phi} = \mathbf{0}$ has non-trivial solutions for $\boldsymbol{\phi}$ if and only if the determinant of the matrix $(\mathbf{K} - \omega_n^2 \mathbf{M})$ is zero:

$$ \det(\mathbf{K} - \omega_n^2 \mathbf{M}) = 0 $$

This determinant equation results in a polynomial in $\omega_n^2$. The roots of this polynomial give the **natural frequencies** ($\omega_n$).

**Natural Frequencies ($\omega_n$):**

Solving the determinant equation yields $n$ natural circular frequencies ($\omega_{n1}, \omega_{n2}, \dots, \omega_{nn}$), where $n$ is the number of degrees of freedom. These are typically ordered from smallest to largest.

**Mode Shapes ($\boldsymbol{\phi}$):**

For each natural frequency $\omega_{ni}$, there is a corresponding vector $\boldsymbol{\phi}_i$, which represents the **mode shape**. The mode shape describes the relative amplitudes and phases of the displacements of the degrees of freedom when the structure vibrates at that particular natural frequency.

$$ (\mathbf{K} - \omega_{ni}^2 \mathbf{M})\boldsymbol{\phi}_i = \mathbf{0} $$

**Key Points about Mode Shapes:**

*   Mode shapes are **vectors** representing the pattern of deformation.
*   They are determined **up to an arbitrary scaling factor**. We often normalize them (e.g., to a unit maximum displacement or unit mass-normalized).
*   Each mode shape corresponds to a specific natural frequency.

**Example: Two Degree of Freedom System (e.g., Two Masses on a Spring)**

Consider two masses $m_1, m_2$ connected by springs with stiffness $k_1, k_2, k_3$.
The mass matrix $\mathbf{M}$ and stiffness matrix $\mathbf{K}$ would be 2x2 matrices.
Solving $\det(\mathbf{K} - \omega_n^2 \mathbf{M}) = 0$ would yield two natural frequencies ($\omega_{n1}, \omega_{n2}$) and two corresponding mode shapes ($\boldsymbol{\phi}_1, \boldsymbol{\phi}_2$).

---

## 3. Damped Free Vibration

Now we consider systems where energy dissipation (damping) is present. Damping forces are typically proportional to velocity.

### 3.1. SDOF System with Damping

The equation of motion for a damped SDOF system is:

$$ m\ddot{x} + c\dot{x} + kx = 0 $$

Where:
*   $c$: Damping coefficient

**Solution of the Equation of Motion:**

We assume a solution of the form $x(t) = e^{\lambda t}$. Substituting this into the equation of motion:

$$ m\lambda^2 e^{\lambda t} + c\lambda e^{\lambda t} + k e^{\lambda t} = 0 $$
$$ (m\lambda^2 + c\lambda + k) e^{\lambda t} = 0 $$

This leads to the **characteristic equation**:

$$ m\lambda^2 + c\lambda + k = 0 $$

The roots of this quadratic equation are given by:

$$ \lambda = \frac{-c \pm \sqrt{c^2 - 4mk}}{2m} = -\frac{c}{2m} \pm \sqrt{\left(\frac{c}{2m}\right)^2 - \frac{k}{m}} $$

Let:
*   $\zeta = \frac{c}{2\sqrt{mk}}$: Damping ratio (dimensionless)
*   $\omega_n = \sqrt{\frac{k}{m}}$: Natural circular frequency

Then the roots become:

$$ \lambda = -\zeta\omega_n \pm \omega_n \sqrt{\zeta^2 - 1} $$

**Types of Damping:**

The behavior of the system depends on the value of the damping ratio $\zeta$:

1.  **Underdamped ($\zeta < 1$):**
    *   $c^2 - 4mk < 0$
    *   Roots are complex conjugates: $\lambda = -\zeta\omega_n \pm i\omega_n \sqrt{1 - \zeta^2}$
    *   The motion is oscillatory with decreasing amplitude.
    *   The **damped circular frequency** is: $\omega_d = \omega_n \sqrt{1 - \zeta^2}$
    *   The solution is of the form: $x(t) = e^{-\zeta\omega_n t} (C_1 \cos(\omega_d t) + C_2 \sin(\omega_d t))$

2.  **Critically Damped ($\zeta = 1$):**
    *   $c^2 - 4mk = 0$
    *   Roots are real and equal: $\lambda = -\omega_n$
    *   The system returns to equilibrium as quickly as possible without oscillation.
    *   The solution is of the form: $x(t) = (C_1 + C_2 t)e^{-\omega_n t}$

3.  **Overdamped ($\zeta > 1$):**
    *   $c^2 - 4mk > 0$
    *   Roots are real and distinct: $\lambda_1 = -\zeta\omega_n + \omega_n \sqrt{\zeta^2 - 1}$, $\lambda_2 = -\zeta\omega_n - \omega_n \sqrt{\zeta^2 - 1}$
    *   The system returns to equilibrium slowly without oscillation.
    *   The solution is of the form: $x(t) = C_1 e^{\lambda_1 t} + C_2 e^{\lambda_2 t}$

**Decay Rate:**

The term $e^{-\zeta\omega_n t}$ in the underdamped solution indicates the rate at which the amplitude decays. The value $\zeta\omega_n$ is related to the damping.

### 3.2. MDOF Systems with Damping

For MDOF systems, we consider the equation of motion:

$$ \mathbf{M}\ddot{\mathbf{x}} + \mathbf{C}\dot{\mathbf{x}} + \mathbf{K}\mathbf{x} = \mathbf{0} $$

Where $\mathbf{C}$ is the damping matrix.

**Proportional Damping (Rayleigh Damping):**

A common and convenient assumption is that the damping matrix is proportional to a linear combination of the mass and stiffness matrices:

$$ \mathbf{C} = a\mathbf{M} + b\mathbf{K} $$

Where $a$ and $b$ are constants. This type of damping is known as **Rayleigh damping**.

**Modal Damping:**

If we use the normal modes obtained from the undamped system ($\mathbf{M}\ddot{\mathbf{x}} + \mathbf{K}\mathbf{x} = \mathbf{0}$), we can decouple the equations of motion by applying a modal transformation: $\mathbf{x}(t) = \boldsymbol{\Phi} \mathbf{y}(t)$, where $\boldsymbol{\Phi}$ is the matrix of mode shapes.

The transformed equations of motion are:

$$ \ddot{\mathbf{y}}_i + 2\zeta_i \omega_{ni} \dot{\mathbf{y}}_i + \omega_{ni}^2 \mathbf{y}_i = 0 $$

Where $\zeta_i$ are the **modal damping ratios**. For proportional damping, the modal damping ratios are related to $a$ and $b$:

$$ \zeta_i = \frac{a}{2\omega_{ni}} + \frac{b\omega_{ni}}{2} $$

This means that different modes have different damping ratios, which is a realistic behavior for many structures.

**Key Point:** The concept of natural frequencies and mode shapes is primarily derived from the undamped system, as damping does not change these fundamental properties. However, damping significantly affects the *amplitude* and *duration* of the free vibration.

---

## 4. Orthogonality of Normal Modes

The mode shapes of a vibrating system have a very important property: they are orthogonal with respect to the mass and stiffness matrices. This property is crucial for simplifying analyses, especially in modal decomposition.

### 4.1. Orthogonality with Respect to Mass Matrix

For an MDOF system with $n$ degrees of freedom, the mode shapes $\boldsymbol{\phi}_i$ and $\boldsymbol{\phi}_j$ are orthogonal with respect to the mass matrix if $i \neq j$:

$$ \boldsymbol{\phi}_i^T \mathbf{M} \boldsymbol{\phi}_j = 0 \quad \text{for } i \neq j $$

**Proof (for Proportional Damping Systems):**

We know:
1.  $(\mathbf{K} - \omega_{ni}^2 \mathbf{M})\boldsymbol{\phi}_i = \mathbf{0} \implies \mathbf{K}\boldsymbol{\phi}_i = \omega_{ni}^2 \mathbf{M}\boldsymbol{\phi}_i$
2.  $(\mathbf{K} - \omega_{nj}^2 \mathbf{M})\boldsymbol{\phi}_j = \mathbf{0} \implies \mathbf{K}\boldsymbol{\phi}_j = \omega_{nj}^2 \mathbf{M}\boldsymbol{\phi}_j$

Multiply equation (1) by $\boldsymbol{\phi}_j^T$ from the left:
$$ \boldsymbol{\phi}_j^T \mathbf{K} \boldsymbol{\phi}_i = \omega_{ni}^2 \boldsymbol{\phi}_j^T \mathbf{M} \boldsymbol{\phi}_i $$

Multiply equation (2) by $\boldsymbol{\phi}_i^T$ from the left:
$$ \boldsymbol{\phi}_i^T \mathbf{K} \boldsymbol{\phi}_j = \omega_{nj}^2 \boldsymbol{\phi}_i^T \mathbf{M} \boldsymbol{\phi}_j $$

Since $\mathbf{K}$ is symmetric, $\mathbf{K}^T = \mathbf{K}$. Also, the transpose of a product is the product of the transposes in reverse order: $(\mathbf{A}\mathbf{B})^T = \mathbf{B}^T\mathbf{A}^T$.
Therefore, $\boldsymbol{\phi}_j^T \mathbf{K} \boldsymbol{\phi}_i = (\boldsymbol{\phi}_j^T \mathbf{K} \boldsymbol{\phi}_i)^T = \boldsymbol{\phi}_i^T \mathbf{K}^T \boldsymbol{\phi}_j = \boldsymbol{\phi}_i^T \mathbf{K} \boldsymbol{\phi}_j$.

Equating the left-hand sides of the two expressions:
$$ \omega_{ni}^2 \boldsymbol{\phi}_j^T \mathbf{M} \boldsymbol{\phi}_i = \omega_{nj}^2 \boldsymbol{\phi}_i^T \mathbf{M} \boldsymbol{\phi}_j $$

Since $\mathbf{M}$ is symmetric, $\mathbf{M}^T = \mathbf{M}$. So, $\boldsymbol{\phi}_j^T \mathbf{M} \boldsymbol{\phi}_i = (\boldsymbol{\phi}_j^T \mathbf{M} \boldsymbol{\phi}_i)^T = \boldsymbol{\phi}_i^T \mathbf{M}^T \boldsymbol{\phi}_j = \boldsymbol{\phi}_i^T \mathbf{M} \boldsymbol{\phi}_j$.

Let $m_{ij} = \boldsymbol{\phi}_i^T \mathbf{M} \boldsymbol{\phi}_j$. Then the equation becomes:
$$ \omega_{ni}^2 m_{ij} = \omega_{nj}^2 m_{ij} $$
$$ (\omega_{ni}^2 - \omega_{nj}^2) m_{ij} = 0 $$

Since the natural frequencies are distinct ($\omega_{ni} \neq \omega_{nj}$ for $i \neq j$), for this equation to hold, we must have:
$$ m_{ij} = \boldsymbol{\phi}_i^T \mathbf{M} \boldsymbol{\phi}_j = 0 \quad \text{for } i \neq j $$
This proves the orthogonality with respect to the mass matrix.

### 4.2. Orthogonality with Respect to Stiffness Matrix

Similarly, the mode shapes are orthogonal with respect to the stiffness matrix if $i \neq j$:

$$ \boldsymbol{\phi}_i^T \mathbf{K} \boldsymbol{\phi}_j = 0 \quad \text{for } i \neq j $$

**Proof:**

From step 1 of the mass orthogonality proof: $\mathbf{K}\boldsymbol{\phi}_i = \omega_{ni}^2 \mathbf{M}\boldsymbol{\phi}_i$.
Multiply by $\boldsymbol{\phi}_j^T$ from the left: $\boldsymbol{\phi}_j^T \mathbf{K} \boldsymbol{\phi}_i = \omega_{ni}^2 \boldsymbol{\phi}_j^T \mathbf{M} \boldsymbol{\phi}_i$.

From step 2 of the mass orthogonality proof: $\mathbf{K}\boldsymbol{\phi}_j = \omega_{nj}^2 \mathbf{M}\boldsymbol{\phi}_j$.
Multiply by $\boldsymbol{\phi}_i^T$ from the left: $\boldsymbol{\phi}_i^T \mathbf{K} \boldsymbol{\phi}_j = \omega_{nj}^2 \boldsymbol{\phi}_i^T \mathbf{M} \boldsymbol{\phi}_j$.

Since $\mathbf{K}$ is symmetric, $\boldsymbol{\phi}_j^T \mathbf{K} \boldsymbol{\phi}_i = \boldsymbol{\phi}_i^T \mathbf{K} \boldsymbol{\phi}_j$.
So, $\omega_{ni}^2 \boldsymbol{\phi}_j^T \mathbf{M} \boldsymbol{\phi}_i = \omega_{nj}^2 \boldsymbol{\phi}_i^T \mathbf{M} \boldsymbol{\phi}_j$.

We already proved that $\boldsymbol{\phi}_j^T \mathbf{M} \boldsymbol{\phi}_i = 0$ for $i \neq j$.
Substituting this into the equation above:
$\omega_{ni}^2 (0) = \omega_{nj}^2 (0)$, which is $0=0$. This doesn't directly prove stiffness orthogonality.

Let's use the relationship $\mathbf{K}\boldsymbol{\phi}_i = \omega_{ni}^2 \mathbf{M}\boldsymbol{\phi}_i$:
Consider $\boldsymbol{\phi}_i^T \mathbf{K} \boldsymbol{\phi}_j$.
We know $\mathbf{K}\boldsymbol{\phi}_j = \omega_{nj}^2 \mathbf{M}\boldsymbol{\phi}_j$.
So, $\boldsymbol{\phi}_i^T \mathbf{K} \boldsymbol{\phi}_j = \boldsymbol{\phi}_i^T (\omega_{nj}^2 \mathbf{M}\boldsymbol{\phi}_j) = \omega_{nj}^2 \boldsymbol{\phi}_i^T \mathbf{M}\boldsymbol{\phi}_j$.

Since $\boldsymbol{\phi}_i^T \mathbf{M}\boldsymbol{\phi}_j = 0$ for $i \neq j$, it follows that:
$$ \boldsymbol{\phi}_i^T \mathbf{K} \boldsymbol{\phi}_j = \omega_{nj}^2 (0) = 0 \quad \text{for } i \neq j $$
This proves the orthogonality with respect to the stiffness matrix.

### 4.3. Normalization of Mode Shapes

To simplify calculations, mode shapes are often normalized. Two common normalization schemes:

1.  **Mass Normalization:**
    $$ \boldsymbol{\phi}_i^T \mathbf{M} \boldsymbol{\phi}_i = 1 $$
    After mass normalization, the orthogonality conditions become:
    *   $\boldsymbol{\phi}_i^T \mathbf{M} \boldsymbol{\phi}_j = \delta_{ij}$ (Kronecker delta)
    *   $\boldsymbol{\phi}_i^T \mathbf{K} \boldsymbol{\phi}_j = \omega_{ni}^2 \delta_{ij}$

2.  **Stiffness Normalization:**
    $$ \boldsymbol{\phi}_i^T \mathbf{K} \boldsymbol{\phi}_i = 1 $$
    This leads to:
    *   $\boldsymbol{\phi}_i^T \mathbf{M} \boldsymbol{\phi}_j = \frac{1}{\omega_{nj}^2} \delta_{ij}$
    *   $\boldsymbol{\phi}_i^T \mathbf{K} \boldsymbol{\phi}_j = \delta_{ij}$

Mass normalization is generally preferred as it directly relates to kinetic energy and simplifies modal equations.

### 4.4. Significance of Orthogonality

*   **Decoupling of Equations:** The orthogonality property allows the coupled equations of motion for an MDOF system to be decoupled into a set of independent SDOF equations when using modal coordinates. This is fundamental for modal analysis techniques.
*   **Modal Decomposition:** Any system response can be expressed as a linear combination of its normal modes. The orthogonality properties help in determining the contribution of each mode to the overall response.
*   **System Identification:** In experimental modal analysis, orthogonality helps in identifying distinct modes and their associated properties.

---

## 5. Practice Questions and Exercises

**Question 1 (SDOF - Undamped):**
A mass of 5 kg is supported by a spring with stiffness 2000 N/m.
(a) Calculate the natural circular frequency.
(b) Calculate the natural frequency in Hz.
(c) If the mass is displaced by 0.1 m and released from rest, what is the equation of motion?

**Question 2 (SDOF - Damped):**
Consider a system with $m = 10$ kg, $k = 1000$ N/m, and $c = 100$ Ns/m.
(a) Determine the damping ratio $\zeta$.
(b) Classify the damping (underdamped, critically damped, or overdamped).
(c) Calculate the damped natural circular frequency if applicable.
(d) Write the form of the solution for the displacement $x(t)$.

**Question 3 (MDOF - Concepts):**
For a multi-degree of freedom system, what is the generalized eigenvalue problem used to find natural frequencies and mode shapes?
What is the physical meaning of a mode shape?

**Question 4 (Orthogonality):**
State the orthogonality conditions for the normal modes of an MDOF system with respect to the mass and stiffness matrices. Why is this property important?

---

## 6. Answers to Practice Questions

**Answer 1:**
(a) $\omega_n = \sqrt{\frac{k}{m}} = \sqrt{\frac{2000}{5}} = \sqrt{400} = 20$ rad/s.
(b) $f_n = \frac{\omega_n}{2\pi} = \frac{20}{2\pi} \approx 3.18$ Hz.
(c) The equation of motion is $5\ddot{x} + 2000x = 0$.
The initial conditions are $x(0) = 0.1$ m and $\dot{x}(0) = 0$.
The solution is $x(t) = A \cos(\omega_n t - \phi)$.
$A = 0.1$ (initial displacement).
$\dot{x}(t) = -A\omega_n \sin(\omega_n t - \phi)$.
$\dot{x}(0) = -A\omega_n \sin(-\phi) = A\omega_n \sin(\phi) = 0$. Since $A \neq 0$ and $\omega_n \neq 0$, $\sin(\phi) = 0$, so $\phi = 0$.
Thus, $x(t) = 0.1 \cos(20t)$.

**Answer 2:**
(a) $\omega_n = \sqrt{\frac{k}{m}} = \sqrt{\frac{1000}{10}} = \sqrt{100} = 10$ rad/s.
$\zeta = \frac{c}{2\sqrt{mk}} = \frac{100}{2\sqrt{10 \times 1000}} = \frac{100}{2\sqrt{10000}} = \frac{100}{2 \times 100} = 0.5$.
(b) Since $\zeta = 0.5 < 1$, the damping is **underdamped**.
(c) $\omega_d = \omega_n \sqrt{1 - \zeta^2} = 10 \sqrt{1 - (0.5)^2} = 10 \sqrt{1 - 0.25} = 10 \sqrt{0.75} \approx 10 \times 0.866 = 8.66$ rad/s.
(d) $x(t) = e^{-\zeta\omega_n t} (C_1 \cos(\omega_d t) + C_2 \sin(\omega_d t))$
$x(t) = e^{-0.5 \times 10 t} (C_1 \cos(8.66 t) + C_2 \sin(8.66 t))$
$x(t) = e^{-5t} (C_1 \cos(8.66 t) + C_2 \sin(8.66 t))$

**Answer 3:**
The generalized eigenvalue problem is $(\mathbf{K} - \omega_n^2 \mathbf{M})\boldsymbol{\phi} = \mathbf{0}$.
$\omega_n^2$ are the eigenvalues and $\boldsymbol{\phi}$ are the eigenvectors (mode shapes).
The physical meaning of a mode shape is the **pattern of relative displacement** of the degrees of freedom when the structure vibrates at a specific natural frequency. It describes the shape of deformation for that particular mode of vibration, irrespective of the amplitude.

**Answer 4:**
Orthogonality conditions for normal modes $\boldsymbol{\phi}_i$ and $\boldsymbol{\phi}_j$:
*   **With respect to mass matrix:** $\boldsymbol{\phi}_i^T \mathbf{M} \boldsymbol{\phi}_j = 0$ for $i \neq j$.
*   **With respect to stiffness matrix:** $\boldsymbol{\phi}_i^T \mathbf{K} \boldsymbol{\phi}_j = 0$ for $i \neq j$.

Importance:
These properties are fundamental for **modal analysis**. They allow the coupled equations of motion of an MDOF system to be **decoupled** into independent SDOF equations by using modal transformation. This greatly simplifies the analysis of system response to dynamic loads and is essential for techniques like modal superposition.

---

## 7. Important Points to Remember

*   **Natural Frequency ($\omega_n$):** The inherent frequency of oscillation of a system when disturbed from equilibrium and allowed to vibrate freely.
*   **Mode Shape ($\boldsymbol{\phi}$):** The pattern of relative displacements of the degrees of freedom during free vibration. It's defined up to a scaling factor.
*   **Undamped Free Vibration (MDOF):** Governed by $(\mathbf{K} - \omega_n^2 \mathbf{M})\boldsymbol{\phi} = \mathbf{0}$, a generalized eigenvalue problem.
*   **Damped Free Vibration (SDOF):** Behavior classified by the damping ratio $\zeta$. The motion decays over time.
*   **Orthogonality:** Mode shapes are orthogonal with respect to the mass and stiffness matrices, a crucial property for simplifying MDOF analysis.
*   **Mass Normalization:** A common practice to scale mode shapes such that $\boldsymbol{\phi}_i^T \mathbf{M} \boldsymbol{\phi}_i = 1$.
*   **Damping does NOT change natural frequencies or mode shapes** but affects the amplitude and rate of decay of free vibrations.

---
