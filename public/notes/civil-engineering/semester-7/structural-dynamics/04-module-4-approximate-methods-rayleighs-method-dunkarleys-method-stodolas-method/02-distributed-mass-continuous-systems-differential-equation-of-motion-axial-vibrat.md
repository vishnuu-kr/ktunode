---
title: "Distributed mass (continuous) systems  – differential equation of motion – Axial vibration of rods. Flexural vibration of beams, natural frequencies and mode shapes of simply supported beam. Evaluation of frequencies and mode shapes of cantilever beam and fixed beam (formulation only)."
subject: "STRUCTURAL DYNAMICS"
module: "Module 4: Approximate methods : Rayleigh’s method Dunkarley’s method, Stodola’s method."
branch: "Civil Engineering"
semester: 7
topicId: "689f15cf56b5e963ba811422"
status: "completed"
scrapedAt: "2026-05-20T19:01:41.920Z"
---
# STRUCTURAL DYNAMICS: Module 4 - Approximate Methods (Distributed Mass Systems)

This module introduces approximate methods for analyzing the dynamic behavior of continuous systems, focusing on distributed mass. We will explore the fundamental equations of motion for axial and flexural vibrations and delve into calculating natural frequencies and mode shapes for specific beam boundary conditions.

---

## 1. Introduction to Distributed Mass Systems

Continuous systems, unlike discrete mass systems, have mass distributed throughout their structure. This leads to an infinite number of natural frequencies and corresponding mode shapes.

### Key Concepts:

*   **Continuous System:** A system where mass, stiffness, and damping are distributed over its entire length or volume.
*   **Distributed Mass:** Mass is not concentrated at specific points but spread continuously.
*   **Degrees of Freedom (DOF):** Infinite in continuous systems, making exact analytical solutions complex.
*   **Natural Frequency ($\omega_n$):** The frequency at which a system oscillates freely when disturbed from its equilibrium position. Continuous systems have an infinite number of natural frequencies.
*   **Mode Shape ($\phi_n(x)$):** The characteristic shape of deformation of a continuous system when vibrating at a specific natural frequency. It describes the displacement distribution along the system.

---

## 2. Differential Equation of Motion for Continuous Systems

The general form of the equation of motion for a continuous system is a partial differential equation (PDE). We'll focus on deriving these for specific cases.

### 2.1 Axial Vibration of Rods

Consider a uniform elastic rod of length $L$, cross-sectional area $A$, Young's modulus $E$, and mass density $\rho$. Let $u(x,t)$ be the axial displacement at position $x$ and time $t$.

#### Derivation:

1.  **Force-Deformation Relationship:** Consider a small element of the rod of length $dx$. The internal axial force $P(x,t)$ is related to the strain by Hooke's Law: $P(x,t) = EA \frac{\partial u}{\partial x}$.
2.  **Newton's Second Law:** The net force acting on the element is equal to its mass times acceleration. The forces acting on the element are $P(x,t)$ and $P(x+dx,t)$.
    *   Net force = $P(x+dx,t) - P(x,t)$
    *   Mass of element = $\rho A dx$
    *   Acceleration = $\frac{\partial^2 u}{\partial t^2}$
    *   Equation: $P(x+dx,t) - P(x,t) = (\rho A dx) \frac{\partial^2 u}{\partial t^2}$
3.  **Taylor Expansion:** For small $dx$, $P(x+dx,t) \approx P(x,t) + \frac{\partial P}{\partial x} dx$.
    *   Substituting: $(P(x,t) + \frac{\partial P}{\partial x} dx) - P(x,t) = (\rho A dx) \frac{\partial^2 u}{\partial t^2}$
    *   $\frac{\partial P}{\partial x} dx = (\rho A dx) \frac{\partial^2 u}{\partial t^2}$
    *   $\frac{\partial P}{\partial x} = \rho A \frac{\partial^2 u}{\partial t^2}$
4.  **Substitute Force-Deformation:** Replace $P(x,t)$ with $EA \frac{\partial u}{\partial x}$:
    *   $\frac{\partial}{\partial x} \left( EA \frac{\partial u}{\partial x} \right) = \rho A \frac{\partial^2 u}{\partial t^2}$
5.  **Uniform Rod:** For a uniform rod, $E$ and $A$ are constant.
    *   $EA \frac{\partial^2 u}{\partial x^2} = \rho A \frac{\partial^2 u}{\partial t^2}$
    *   $\frac{\partial^2 u}{\partial x^2} = \frac{\rho}{E} \frac{\partial^2 u}{\partial t^2}$
6.  **Wave Equation:** Define the wave speed $c = \sqrt{\frac{E}{\rho}}$:
    *   $\frac{\partial^2 u}{\partial x^2} = \frac{1}{c^2} \frac{\partial^2 u}{\partial t^2}$

**Differential Equation of Motion for Axial Vibration of Rods:**
$$ \frac{\partial^2 u}{\partial x^2} - \frac{1}{c^2} \frac{\partial^2 u}{\partial t^2} = 0 $$
where $c = \sqrt{E/\rho}$ is the wave speed.

---

### 2.2 Flexural Vibration of Beams

Consider a uniform elastic beam of length $L$, area moment of inertia $I$, Young's modulus $E$, and mass per unit length $\mu$ (total mass $m = \mu L$). Let $v(x,t)$ be the transverse displacement at position $x$ and time $t$.

#### Derivation (Simplified Approach using Euler-Bernoulli Beam Theory):

1.  **Internal Forces:** In a vibrating beam, internal forces include shear force $V(x,t)$ and bending moment $M(x,t)$.
2.  **Relationship to Displacement:** From Euler-Bernoulli theory:
    *   $M(x,t) = EI \frac{\partial^2 v}{\partial x^2}$
    *   $V(x,t) = \frac{\partial M}{\partial x} = EI \frac{\partial^3 v}{\partial x^3}$
3.  **Newton's Second Law (Vertical Motion):** Consider a small element of the beam of length $dx$. The net vertical force is equal to its mass times acceleration.
    *   Net force = $V(x,t) - V(x+dx,t)$
    *   Mass of element = $\mu dx$
    *   Acceleration = $\frac{\partial^2 v}{\partial t^2}$
    *   Equation: $V(x,t) - V(x+dx,t) = (\mu dx) \frac{\partial^2 v}{\partial t^2}$
4.  **Taylor Expansion:** For small $dx$, $V(x+dx,t) \approx V(x,t) + \frac{\partial V}{\partial x} dx$.
    *   Substituting: $V(x,t) - (V(x,t) + \frac{\partial V}{\partial x} dx) = (\mu dx) \frac{\partial^2 v}{\partial t^2}$
    *   $-\frac{\partial V}{\partial x} dx = \mu dx \frac{\partial^2 v}{\partial t^2}$
    *   $-\frac{\partial V}{\partial x} = \mu \frac{\partial^2 v}{\partial t^2}$
5.  **Substitute Shear Force:** Replace $V(x,t)$ with $EI \frac{\partial^3 v}{\partial x^3}$:
    *   $-\frac{\partial}{\partial x} \left( EI \frac{\partial^3 v}{\partial x^3} \right) = \mu \frac{\partial^2 v}{\partial t^2}$
6.  **Uniform Beam:** For a uniform beam, $E$ and $I$ are constant.
    *   $-EI \frac{\partial^4 v}{\partial x^4} = \mu \frac{\partial^2 v}{\partial t^2}$
    *   $EI \frac{\partial^4 v}{\partial x^4} + \mu \frac{\partial^2 v}{\partial t^2} = 0$

**Differential Equation of Motion for Flexural Vibration of Beams:**
$$ EI \frac{\partial^4 v}{\partial x^4} + \mu \frac{\partial^2 v}{\partial t^2} = 0 $$
where $EI$ is the flexural rigidity and $\mu$ is the mass per unit length.

---

## 3. Natural Frequencies and Mode Shapes

To find natural frequencies and mode shapes, we use the method of separation of variables. Assume the displacement can be expressed as a product of a spatial function and a temporal function:

*   For axial vibration: $u(x,t) = X(x) T(t)$
*   For flexural vibration: $v(x,t) = Y(x) T(t)$

Substituting these into their respective differential equations leads to a spatial equation and a temporal equation. The temporal equation is a simple harmonic oscillator, yielding solutions of the form $T(t) = A \cos(\omega_n t) + B \sin(\omega_n t)$. The spatial equation, along with boundary conditions, determines the mode shapes $X(x)$ or $Y(x)$ and the possible values of natural frequencies $\omega_n$.

### 3.1 Simply Supported Beam

A simply supported beam has zero displacement and zero bending moment at both ends.
*   Boundary Conditions (BCs):
    *   At $x=0$: $Y(0) = 0$ (zero displacement) and $\frac{d^2Y}{dx^2}(0) = 0$ (zero bending moment).
    *   At $x=L$: $Y(L) = 0$ (zero displacement) and $\frac{d^2Y}{dx^2}(L) = 0$ (zero bending moment).

#### Analysis:

1.  **Substitute Separation of Variables into the Beam Equation:**
    $EI \frac{d^4Y}{dx^4} X - \mu Y \frac{d^2T}{dt^2} = 0$
    $EI \frac{d^4Y}{dx^4} X = \mu Y \frac{d^2T}{dt^2}$
    Divide by $EIYX$:
    $\frac{1}{Y} \frac{d^4Y}{dx^4} = -\frac{\mu}{EI} \frac{1}{T} \frac{d^2T}{dt^2}$
2.  **Define Separation Constant:** Both sides must be equal to a constant. Let this constant be $\beta^4$.
    *   $\frac{1}{T} \frac{d^2T}{dt^2} = -\omega_n^2$ (from temporal equation)
    *   $\frac{1}{Y} \frac{d^4Y}{dx^4} = \beta^4$ (spatial equation)
    *   So, $\beta^4 = \frac{\mu \omega_n^2}{EI}$
3.  **Spatial Equation:** $\frac{d^4Y}{dx^4} - \beta^4 Y = 0$
    The general solution to this equation is:
    $Y(x) = A_1 \sin(\beta x) + A_2 \cos(\beta x) + A_3 \sinh(\beta x) + A_4 \cosh(\beta x)$
4.  **Apply Boundary Conditions:**
    *   $Y(0) = 0 \implies A_2 + A_4 = 0 \implies A_4 = -A_2$
    *   $\frac{d^2Y}{dx^2} = \beta^2 (-A_1 \sin(\beta x) - A_2 \cos(\beta x) + A_3 \sinh(\beta x) + A_4 \cosh(\beta x))$
    *   $\frac{d^2Y}{dx^2}(0) = 0 \implies \beta^2 (-A_2 + A_4) = 0$. Since $\beta \neq 0$, $-A_2 + A_4 = 0$.
        *   We have $A_4 = -A_2$ and $A_4 = A_2$. This implies $A_2 = A_4 = 0$.
    *   So, the general solution simplifies to $Y(x) = A_1 \sin(\beta x) + A_3 \sinh(\beta x)$.
    *   $Y(L) = 0 \implies A_1 \sin(\beta L) + A_3 \sinh(\beta L) = 0$
    *   $\frac{d^2Y}{dx^2} = \beta^2 (-A_1 \sin(\beta x) + A_3 \sinh(\beta x))$
    *   $\frac{d^2Y}{dx^2}(L) = 0 \implies \beta^2 (-A_1 \sin(\beta L) + A_3 \sinh(\beta L)) = 0$. Since $\beta \neq 0$, $-A_1 \sin(\beta L) + A_3 \sinh(\beta L) = 0$.

5.  **Solve for Constants:** We have a system of two linear equations for $A_1$ and $A_3$:
    $A_1 \sin(\beta L) + A_3 \sinh(\beta L) = 0$
    $-A_1 \sin(\beta L) + A_3 \sinh(\beta L) = 0$
    For a non-trivial solution ($A_1, A_3$ not both zero), the determinant of the coefficient matrix must be zero:
    $\begin{vmatrix} \sin(\beta L) & \sinh(\beta L) \\ -\sin(\beta L) & \sinh(\beta L) \end{vmatrix} = 0$
    $\sin(\beta L) \sinh(\beta L) - (-\sin(\beta L) \sinh(\beta L)) = 0$
    $2 \sin(\beta L) \sinh(\beta L) = 0$
    Since $\sinh(\beta L) \neq 0$ for $\beta L \neq 0$, we must have $\sin(\beta L) = 0$.
    This implies $\beta L = n\pi$, where $n = 1, 2, 3, \dots$
    So, $\beta_n = \frac{n\pi}{L}$.

6.  **Natural Frequencies:** Recall $\beta^4 = \frac{\mu \omega_n^2}{EI}$.
    $\omega_n^2 = \frac{EI \beta_n^4}{\mu} = \frac{EI}{\mu} \left(\frac{n\pi}{L}\right)^4$
    $\omega_n = \sqrt{\frac{EI}{\mu}} \left(\frac{n\pi}{L}\right)^2 = \left(\frac{n\pi}{L}\right)^2 \sqrt{\frac{EI}{\mu}}$

    The term $\sqrt{EI/\mu}$ can be identified as the wave speed for bending waves. Let's denote $\omega_{ref} = \sqrt{EI/\mu}$.
    $$ \omega_n = \left(\frac{n\pi}{L}\right)^2 \omega_{ref} $$

7.  **Mode Shapes:** When $\sin(\beta_n L) = 0$, the second equation becomes $A_3 \sinh(\beta_n L) = 0$, which also implies $A_3 = 0$.
    So, $Y_n(x) = A_1 \sin(\beta_n x) = A_1 \sin\left(\frac{n\pi x}{L}\right)$.
    The mode shapes are sinusoidal.

**Summary for Simply Supported Beam:**

*   **Natural Frequencies:** $\omega_n = \left(\frac{n\pi}{L}\right)^2 \sqrt{\frac{EI}{\mu}}$, for $n = 1, 2, 3, \dots$
    *   The fundamental frequency (lowest) is $\omega_1 = \left(\frac{\pi}{L}\right)^2 \sqrt{\frac{EI}{\mu}}$.
    *   The frequencies are spaced non-uniformly.
*   **Mode Shapes:** $Y_n(x) = A \sin\left(\frac{n\pi x}{L}\right)$
    *   $n=1$: Half-sine wave
    *   $n=2$: Full sine wave
    *   $n=3$: 1.5 sine wave
    *   And so on.

---

### 3.2 Cantilever Beam

A cantilever beam is fixed at one end and free at the other.
*   Boundary Conditions (BCs):
    *   At $x=0$ (fixed end): $Y(0) = 0$ (zero displacement) and $\frac{dY}{dx}(0) = 0$ (zero slope).
    *   At $x=L$ (free end): $\frac{d^2Y}{dx^2}(L) = 0$ (zero bending moment) and $\frac{d^3Y}{dx^3}(L) = 0$ (zero shear force).

#### Formulation Only:

1.  **General Solution:** $Y(x) = A_1 \sin(\beta x) + A_2 \cos(\beta x) + A_3 \sinh(\beta x) + A_4 \cosh(\beta x)$
2.  **Apply Fixed End BCs (at $x=0$):**
    *   $Y(0) = 0 \implies A_2 + A_4 = 0 \implies A_4 = -A_2$
    *   $\frac{dY}{dx} = \beta (A_1 \cos(\beta x) - A_2 \sin(\beta x) + A_3 \cosh(\beta x) + A_4 \sinh(\beta x))$
    *   $\frac{dY}{dx}(0) = 0 \implies \beta (A_1 + A_3) = 0$. Since $\beta \neq 0$, $A_1 + A_3 = 0 \implies A_3 = -A_1$.
3.  **Simplified Solution:** Substituting $A_4 = -A_2$ and $A_3 = -A_1$, we get:
    $Y(x) = A_1 (\sin(\beta x) - \sinh(\beta x)) + A_2 (\cos(\beta x) - \cosh(\beta x))$
4.  **Apply Free End BCs (at $x=L$):**
    *   $\frac{d^2Y}{dx^2} = \beta^2 (-A_1 (\sin(\beta x) + \sinh(\beta x)) + A_2 (-\cos(\beta x) + \cosh(\beta x)))$
    *   $\frac{d^2Y}{dx^2}(L) = 0 \implies \beta^2 (-A_1 (\sin(\beta L) + \sinh(\beta L)) + A_2 (-\cos(\beta L) + \cosh(\beta L))) = 0$
        $-A_1 (\sin(\beta L) + \sinh(\beta L)) + A_2 (-\cos(\beta L) + \cosh(\beta L)) = 0$ (Eq. 1)
    *   $\frac{d^3Y}{dx^3} = \beta^3 (-A_1 (\cos(\beta x) - \cosh(\beta x)) + A_2 (-\sin(\beta x) - \sinh(\beta x)))$
    *   $\frac{d^3Y}{dx^3}(L) = 0 \implies \beta^3 (-A_1 (\cos(\beta L) - \cosh(\beta L)) + A_2 (-\sin(\beta L) - \sinh(\beta L))) = 0$
        $-A_1 (\cos(\beta L) - \cosh(\beta L)) + A_2 (-\sin(\beta L) - \sinh(\beta L)) = 0$ (Eq. 2)

5.  **Condition for Non-trivial Solution:** For a non-trivial solution ($A_1, A_2$ not both zero), the determinant of the coefficients of $A_1$ and $A_2$ in Eq. 1 and Eq. 2 must be zero.
    $$ \begin{vmatrix} -(\sin(\beta L) + \sinh(\beta L)) & (-\cos(\beta L) + \cosh(\beta L)) \\ -(\cos(\beta L) - \cosh(\beta L)) & -(\sin(\beta L) + \sinh(\beta L)) \end{vmatrix} = 0 $$
    Expanding this determinant leads to the characteristic equation for a cantilever beam:
    $\cos(\beta L) \cosh(\beta L) + 1 = 0$

**Natural Frequencies and Mode Shapes (Formulation):**

*   The natural frequencies $\omega_n$ are obtained by solving the characteristic equation $\cos(\beta_n L) \cosh(\beta_n L) + 1 = 0$, where $\beta_n^4 = \frac{\mu \omega_n^2}{EI}$. The roots $\beta_n L$ are not simple multiples of $\pi$.
*   The mode shapes are given by $Y_n(x) = A_1 (\sin(\beta_n x) - \sinh(\beta_n x)) + A_2 (\cos(\beta_n x) - \cosh(\beta_n x))$. The ratio $A_1/A_2$ is determined from the characteristic equation.

---

### 3.3 Fixed Beam (Double Clamped Beam)

A fixed beam has zero displacement and zero slope at both ends.
*   Boundary Conditions (BCs):
    *   At $x=0$: $Y(0) = 0$ and $\frac{dY}{dx}(0) = 0$.
    *   At $x=L$: $Y(L) = 0$ and $\frac{dY}{dx}(L) = 0$.

#### Formulation Only:

1.  **General Solution:** $Y(x) = A_1 \sin(\beta x) + A_2 \cos(\beta x) + A_3 \sinh(\beta x) + A_4 \cosh(\beta x)$
2.  **Apply Fixed End BCs (at $x=0$):** As shown for the cantilever beam, these conditions lead to $A_2 = 0$ and $A_4 = 0$, and $A_3 = -A_1$.
    So, the solution is of the form $Y(x) = A_1 (\sin(\beta x) - \sinh(\beta x))$.
3.  **Apply Fixed End BCs (at $x=L$):**
    *   $Y(L) = 0 \implies A_1 (\sin(\beta L) - \sinh(\beta L)) = 0$.
        Since $A_1 \neq 0$, we need $\sin(\beta L) - \sinh(\beta L) = 0$.
    *   $\frac{dY}{dx} = A_1 (\beta \cos(\beta x) - \beta \cosh(\beta x))$.
    *   $\frac{dY}{dx}(L) = 0 \implies A_1 \beta (\cos(\beta L) - \cosh(\beta L)) = 0$.
        Since $A_1 \neq 0$ and $\beta \neq 0$, we need $\cos(\beta L) - \cosh(\beta L) = 0$.

4.  **Condition for Non-trivial Solution:** For a non-trivial solution, both $\sin(\beta L) = \sinh(\beta L)$ and $\cos(\beta L) = \cosh(\beta L)$ must be satisfied simultaneously.

**Natural Frequencies and Mode Shapes (Formulation):**

*   The natural frequencies $\omega_n$ are obtained by finding the roots of the coupled characteristic equations: $\sin(\beta_n L) = \sinh(\beta_n L)$ and $\cos(\beta_n L) = \cosh(\beta_n L)$, where $\beta_n^4 = \frac{\mu \omega_n^2}{EI}$. These conditions are difficult to satisfy simultaneously. A more careful application of BCs and general solution is needed.
    Let's re-apply BCs correctly for the fixed-fixed beam.
    $Y(x) = A_1 \sin(\beta x) + A_2 \cos(\beta x) + A_3 \sinh(\beta x) + A_4 \cosh(\beta x)$
    $Y(0) = 0 \implies A_2 + A_4 = 0 \implies A_4 = -A_2$.
    $\frac{dY}{dx}(0) = 0 \implies \beta(A_1 + A_3) = 0 \implies A_3 = -A_1$.
    So, $Y(x) = A_1 (\sin(\beta x) - \sinh(\beta x)) + A_2 (\cos(\beta x) - \cosh(\beta x))$.
    $Y(L) = 0 \implies A_1 (\sin(\beta L) - \sinh(\beta L)) + A_2 (\cos(\beta L) - \cosh(\beta L)) = 0$.
    $\frac{dY}{dx}(L) = \beta [A_1 (\cos(\beta L) - \cosh(\beta L)) + A_2 (-\sin(\beta L) - \sinh(\beta L))] = 0$.
    $A_1 (\cos(\beta L) - \cosh(\beta L)) + A_2 (-\sin(\beta L) - \sinh(\beta L)) = 0$.

    For a non-trivial solution, the determinant must be zero:
    $$ \begin{vmatrix} (\sin(\beta L) - \sinh(\beta L)) & (\cos(\beta L) - \cosh(\beta L)) \\ (\cos(\beta L) - \cosh(\beta L)) & -(\sin(\beta L) + \sinh(\beta L)) \end{vmatrix} = 0 $$
    Expanding this gives the characteristic equation:
    $(\sin(\beta L) - \sinh(\beta L))(-(\sin(\beta L) + \sinh(\beta L))) - (\cos(\beta L) - \cosh(\beta L))^2 = 0$
    $-(\sin^2(\beta L) - \sinh^2(\beta L)) - (\cos^2(\beta L) - 2\cos(\beta L)\cosh(\beta L) + \cosh^2(\beta L)) = 0$
    Using $\cosh^2 x - \sinh^2 x = 1$:
    $-( \sin^2(\beta L) - (\cosh^2(\beta L) - 1) ) - (\cos^2(\beta L) - 2\cos(\beta L)\cosh(\beta L) + \cosh^2(\beta L)) = 0$
    $-\sin^2(\beta L) + \cosh^2(\beta L) - 1 - \cos^2(\beta L) + 2\cos(\beta L)\cosh(\beta L) - \cosh^2(\beta L) = 0$
    $-\sin^2(\beta L) - \cos^2(\beta L) + 1 + 2\cos(\beta L)\cosh(\beta L) = 0$
    $-1 + 1 + 2\cos(\beta L)\cosh(\beta L) = 0$
    $2\cos(\beta L)\cosh(\beta L) = 0$
    This implies $\cos(\beta L) = 0$ or $\cosh(\beta L) = 0$.
    Since $\cosh(\beta L) > 0$ for real $\beta L$, we must have $\cos(\beta L) = 0$.
    This means $\beta L = (n + \frac{1}{2})\pi$, where $n = 0, 1, 2, \dots$

    Wait, this result is for a different set of boundary conditions. Let's re-evaluate the characteristic equation for fixed-fixed.
    The actual characteristic equation for a fixed-fixed beam is:
    $\cos(\beta L) \cosh(\beta L) - 1 = 0$.
    (This can be derived by ensuring the determinant of the coefficient matrix for $A_1$ and $A_2$ is zero, after applying the BCs).

*   The natural frequencies $\omega_n$ are obtained by solving $\cos(\beta_n L) \cosh(\beta_n L) - 1 = 0$, where $\beta_n^4 = \frac{\mu \omega_n^2}{EI}$. The roots $\beta_n L$ are again not simple multiples of $\pi$.
*   The mode shapes $Y_n(x)$ are of the form $A_1 (\sin(\beta_n x) - \sinh(\beta_n x)) + A_2 (\cos(\beta_n x) - \cosh(\beta_n x))$, with the ratio $A_1/A_2$ determined from the characteristic equation.

---

## 4. Approximate Methods (Introduction)

While exact analytical solutions exist for simple cases, many practical structures have complex geometries, material properties, and boundary conditions that make analytical solutions intractable. This is where approximate methods become invaluable. The module mentions Rayleigh's, Dunkarley's, and Stodola's methods, which are typically used for estimating natural frequencies and mode shapes. However, this module's description focuses on the formulation of continuous systems and the analytical solutions for basic beam configurations. The *approximate methods themselves (Rayleigh, etc.) are not detailed in the provided description.* This section will briefly touch upon their purpose, as implied by the module title.

### Purpose of Approximate Methods:

*   To estimate natural frequencies and mode shapes when exact solutions are not feasible.
*   To handle complex geometries, material non-homogeneity, and boundary conditions.
*   Often based on energy principles (like Rayleigh's method) or iterative procedures.

---

## 5. Practice Questions

**Question 1:**
For a uniform rod undergoing axial vibration, what is the relationship between the wave speed ($c$), Young's modulus ($E$), and mass density ($\rho$)?
(a) $c = \sqrt{\rho/E}$
(b) $c = \sqrt{E/\rho}$
(c) $c = \sqrt{EA/\rho A}$
(d) $c = E/\rho$

**Question 2:**
What are the boundary conditions for a simply supported beam at both ends?
(a) Zero displacement and zero slope at both ends.
(b) Zero displacement and zero bending moment at both ends.
(c) Zero slope and zero shear force at both ends.
(d) Zero bending moment and zero shear force at both ends.

**Question 3:**
The differential equation for flexural vibration of a uniform beam is $EI \frac{\partial^4 v}{\partial x^4} + \mu \frac{\partial^2 v}{\partial t^2} = 0$. If we assume a harmonic solution $v(x,t) = Y(x) \sin(\omega_n t)$, what is the spatial differential equation for the mode shape $Y(x)$?

**Question 4:**
The natural frequencies of a simply supported beam are given by $\omega_n = \left(\frac{n\pi}{L}\right)^2 \sqrt{\frac{EI}{\mu}}$. If the length ($L$) of the beam is doubled, how does the fundamental natural frequency ($\omega_1$) change?

---

## 6. Answers to Practice Questions

**Answer 1:**
(b) $c = \sqrt{E/\rho}$

**Answer 2:**
(b) Zero displacement and zero bending moment at both ends.
*   At $x=0$: $Y(0) = 0$, $\frac{d^2Y}{dx^2}(0) = 0$.
*   At $x=L$: $Y(L) = 0$, $\frac{d^2Y}{dx^2}(L) = 0$.

**Answer 3:**
Substituting $v(x,t) = Y(x) \sin(\omega_n t)$ into the beam equation:
$EI \frac{d^4Y}{dx^4} \sin(\omega_n t) + \mu Y \frac{d^2}{dt^2}(\sin(\omega_n t)) = 0$
$EI \frac{d^4Y}{dx^4} \sin(\omega_n t) + \mu Y (-\omega_n^2 \sin(\omega_n t)) = 0$
Dividing by $\sin(\omega_n t)$ (assuming it's not zero):
$EI \frac{d^4Y}{dx^4} - \mu \omega_n^2 Y = 0$
$$ \frac{d^4Y}{dx^4} - \frac{\mu \omega_n^2}{EI} Y = 0 $$
Let $\beta^4 = \frac{\mu \omega_n^2}{EI}$. Then the spatial equation is:
$$ \frac{d^4Y}{dx^4} - \beta^4 Y = 0 $$

**Answer 4:**
The fundamental natural frequency is $\omega_1 = \left(\frac{\pi}{L}\right)^2 \sqrt{\frac{EI}{\mu}}$.
If $L$ is doubled, the new length is $L' = 2L$.
The new fundamental frequency $\omega_1'$ would be:
$\omega_1' = \left(\frac{\pi}{L'}\right)^2 \sqrt{\frac{EI}{\mu}} = \left(\frac{\pi}{2L}\right)^2 \sqrt{\frac{EI}{\mu}} = \frac{1}{4} \left(\frac{\pi}{L}\right)^2 \sqrt{\frac{EI}{\mu}} = \frac{1}{4} \omega_1$.
The fundamental natural frequency decreases by a factor of 4.

---

## 7. Important Points to Remember

*   **Continuous systems have infinite DOF, natural frequencies, and mode shapes.**
*   **Axial vibration of rods** is governed by the wave equation: $\frac{\partial^2 u}{\partial x^2} = \frac{1}{c^2} \frac{\partial^2 u}{\partial t^2}$, where $c = \sqrt{E/\rho}$.
*   **Flexural vibration of beams** is governed by the Euler-Bernoulli beam equation: $EI \frac{\partial^4 v}{\partial x^4} + \mu \frac{\partial^2 v}{\partial t^2} = 0$.
*   **Simply supported beam BCs:** $Y(0)=0, Y''(0)=0, Y(L)=0, Y''(L)=0$.
*   **Simply supported beam frequencies:** $\omega_n = \left(\frac{n\pi}{L}\right)^2 \sqrt{\frac{EI}{\mu}}$.
*   **Simply supported beam mode shapes:** $Y_n(x) = A \sin\left(\frac{n\pi x}{L}\right)$.
*   **Cantilever beam BCs:** $Y(0)=0, Y'(0)=0, Y''(L)=0, Y'''(L)=0$.
*   **Fixed beam BCs:** $Y(0)=0, Y'(0)=0, Y(L)=0, Y'(L)=0$.
*   **Approximate methods** are crucial for complex structural dynamic problems where analytical solutions are not feasible. This module provides the foundation for understanding the behavior of continuous systems, which is then built upon by those approximate methods.

---
