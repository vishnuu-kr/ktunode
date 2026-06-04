---
title: "Poisson and Laplace equations, Determination of voltage and electric field using Laplace and Poisson’s equation."
subject: "ELECTROMAGNETICS"
module: "Module 1: Review of coordinate system"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c45fb09ce205780fe8ce"
status: "completed"
scrapedAt: "2026-05-23T17:56:28.282Z"
---
# ELECTROMAGNETICS: Module 1 - Review of Coordinate Systems

## Topic: Poisson and Laplace Equations, Determination of Voltage and Electric Field using Laplace and Poisson’s Equation

---

### 1. Introduction: The Foundation of Electrostatics

This topic builds upon the fundamental concepts of electrostatics, particularly the relationship between electric potential ($\ V$) and electric field ($\ \mathbf{E}$). We will explore how to determine these quantities in various scenarios using powerful differential equations: Poisson's and Laplace's equations. This is crucial for understanding charge distributions, potential distributions, and the resulting electric fields in different media.

---

### 2. Review of Key Concepts from Electrostatics

Before delving into Poisson's and Laplace's equations, let's recap essential concepts:

*   **Electric Potential ($\ V$):** The work done per unit charge to move a charge from a reference point to a specific point in an electric field. It's a scalar quantity.
    *   Relationship with Electric Field: $\ \mathbf{E} = -\nabla V$
        *   This means the electric field is the negative gradient of the electric potential. The electric field points in the direction of the steepest decrease in potential.
        *   *(Sadiku, Chapter 4)*
*   **Gauss's Law:** Relates the electric flux through a closed surface to the enclosed charge: $\ \oint_S \mathbf{D} \cdot d\mathbf{S} = Q_{enc}$
    *   Differential form (in terms of electric field and permittivity): $\ \nabla \cdot \mathbf{D} = \rho_v$ and $\ \nabla \cdot \mathbf{E} = \frac{\rho_v}{\epsilon}$
        *   Where $\ \rho_v$ is the volume charge density and $\ \epsilon$ is the permittivity of the medium.
        *   *(Hayt & Buck, Chapter 5)*
*   **Dielectric Material:** Materials that do not conduct electricity well but can be polarized by an applied electric field. Their behavior is characterized by permittivity ($\ \epsilon$).
*   **Boundary Conditions:** Conditions that must be satisfied at the interface between different dielectric materials or between conductors and dielectrics. These are essential for solving problems involving multiple regions.

---

### 3. Poisson's Equation

Poisson's equation is a second-order partial differential equation that describes the relationship between the electric potential and the volume charge density within a region.

#### 3.1 Derivation of Poisson's Equation

We start from Gauss's Law in its differential form:

$\ \nabla \cdot \mathbf{E} = \frac{\rho_v}{\epsilon}$

We know that the electric field is related to the electric potential by:

$\ \mathbf{E} = -\nabla V$

Substituting this into Gauss's Law:

$\ \nabla \cdot (-\nabla V) = \frac{\rho_v}{\epsilon}$

$-\nabla^2 V = \frac{\rho_v}{\epsilon}$

**$\ \nabla^2 V = -\frac{\rho_v}{\epsilon}$**

This is **Poisson's Equation**.

*   $\ \nabla^2$ is the **Laplacian operator**. Its form depends on the coordinate system being used.

#### 3.2 The Laplacian Operator ($\nabla^2$)

The Laplacian operator is defined as the divergence of the gradient: $\ \nabla^2 = \nabla \cdot \nabla$.

*   **Cartesian Coordinates (x, y, z):**
    $\ \nabla^2 V = \frac{\partial^2 V}{\partial x^2} + \frac{\partial^2 V}{\partial y^2} + \frac{\partial^2 V}{\partial z^2}$
*   **Cylindrical Coordinates (r, $\phi$, z):**
    $\ \nabla^2 V = \frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial V}{\partial r}\right) + \frac{1}{r^2}\frac{\partial^2 V}{\partial \phi^2} + \frac{\partial^2 V}{\partial z^2}$
*   **Spherical Coordinates (r, $\theta$, $\phi$):**
    $\ \nabla^2 V = \frac{1}{r^2}\frac{\partial}{\partial r}\left(r^2\frac{\partial V}{\partial r}\right) + \frac{1}{r^2\sin\theta}\frac{\partial}{\partial \theta}\left(\sin\theta\frac{\partial V}{\partial \theta}\right) + \frac{1}{r^2\sin^2\theta}\frac{\partial^2 V}{\partial \phi^2}$

#### 3.3 When to Use Poisson's Equation

Poisson's equation is used when there is a **non-zero volume charge density ($\rho_v$)** within the region of interest. This is common in situations involving:

*   Space charge regions in semiconductors.
*   Charged dielectric materials.
*   Finding the potential distribution around a continuous charge distribution.
*   *(Reddy, Chapter 2)*

---

### 4. Laplace's Equation

Laplace's equation is a special case of Poisson's equation that applies when there are **no charges** in the region of interest ($\rho_v = 0$).

#### 4.1 Derivation of Laplace's Equation

From Poisson's equation:

$\ \nabla^2 V = -\frac{\rho_v}{\epsilon}$

If $\ \rho_v = 0$ in the region of interest, then:

**$\ \nabla^2 V = 0$**

This is **Laplace's Equation**.

#### 4.2 When to Use Laplace's Equation

Laplace's equation is used when:

*   The region of interest is charge-free.
*   The problem involves conductors with specified potentials.
*   Solving for potential in dielectric materials between conductors when the free charge is only on the conductors.
*   *(Sadiku, Chapter 4)*
*   *(Hayt & Buck, Chapter 7)*

#### 4.3 Uniqueness Theorem

Laplace's equation is fundamental to the **uniqueness theorem**, which states that a solution to Laplace's equation that satisfies given boundary conditions is unique. This is a powerful tool because it means if we can find *any* solution that meets the boundary conditions, it must be *the* correct solution.

---

### 5. Determining Voltage and Electric Field

The primary goal of using Poisson's and Laplace's equations is to determine the electric potential ($\ V$) and subsequently the electric field ($\ \mathbf{E}$).

#### 5.1 Steps to Determine Voltage and Electric Field:

1.  **Identify the Region of Interest:** Clearly define the space where you need to find the potential and field.
2.  **Determine the Charge Distribution:** Identify if there is any volume charge density ($\rho_v$) in the region.
    *   If $\rho_v \neq 0$, use Poisson's equation.
    *   If $\rho_v = 0$, use Laplace's equation.
3.  **Choose the Appropriate Coordinate System:** Select the coordinate system (Cartesian, cylindrical, or spherical) that best suits the geometry of the problem.
4.  **Formulate the Differential Equation:** Write down Poisson's or Laplace's equation in the chosen coordinate system.
5.  **Apply Boundary Conditions:** These are crucial. They typically involve the potential on conducting surfaces or the continuity of potential and the normal component of the electric field (or displacement field) at interfaces.
    *   **Dirichlet Boundary Conditions:** The potential is specified on the boundary (e.g., potential on a conductor is constant).
    *   **Neumann Boundary Conditions:** The normal derivative of the potential is specified on the boundary (equivalent to specifying the normal component of the electric field).
6.  **Solve the Differential Equation:** Solve the partial differential equation subject to the boundary conditions to find the potential $\ V(\text{coordinates})$. This is often the most challenging step and may involve techniques like separation of variables or numerical methods.
    *   *(Nahvi & Edminister, Chapter 6)*
7.  **Calculate the Electric Field:** Once the potential $\ V$ is known, calculate the electric field using $\ \mathbf{E} = -\nabla V$.

---

### 6. Examples

#### Example 1: Potential between two parallel conducting plates (Laplace's Equation)

**Problem:** Two infinite parallel conducting plates are separated by a distance $d$. The plate at $x=0$ is held at potential $V_1$ and the plate at $x=d$ is held at potential $V_2$. Find the potential and electric field between the plates.

**Solution:**

1.  **Region of Interest:** The space between the plates, $0 \le x \le d$.
2.  **Charge Distribution:** The plates themselves are conductors, but the region *between* them is assumed to be charge-free ($\rho_v = 0$).
3.  **Coordinate System:** Cartesian coordinates are suitable due to the planar geometry.
4.  **Differential Equation:** Since $\rho_v = 0$, we use Laplace's equation:
    $\ \nabla^2 V = \frac{\partial^2 V}{\partial x^2} + \frac{\partial^2 V}{\partial y^2} + \frac{\partial^2 V}{\partial z^2} = 0$
    Since the potential only varies with $x$, $\frac{\partial^2 V}{\partial y^2} = 0$ and $\frac{\partial^2 V}{\partial z^2} = 0$.
    Thus, $\frac{d^2 V}{dx^2} = 0$.
5.  **Boundary Conditions:**
    *   $V(x=0) = V_1$
    *   $V(x=d) = V_2$
6.  **Solve:** Integrating $\frac{d^2 V}{dx^2} = 0$ twice with respect to $x$:
    $\frac{dV}{dx} = A$
    $V(x) = Ax + B$
    Apply boundary conditions:
    *   $V(0) = A(0) + B = V_1 \implies B = V_1$
    *   $V(d) = Ad + B = V_2 \implies Ad + V_1 = V_2 \implies A = \frac{V_2 - V_1}{d}$
    So, the potential is:
    **$V(x) = \frac{V_2 - V_1}{d}x + V_1$**
7.  **Electric Field:**
    $\ \mathbf{E} = -\nabla V = -\frac{\partial V}{\partial x}\hat{\mathbf{a}}_x$
    $\ \mathbf{E} = -\frac{d}{dx}\left(\frac{V_2 - V_1}{d}x + V_1\right)\hat{\mathbf{a}}_x$
    **$\ \mathbf{E} = -\frac{V_2 - V_1}{d}\hat{\mathbf{a}}_x = \frac{V_1 - V_2}{d}\hat{\mathbf{a}}_x$**
    The electric field is uniform and points from the higher potential plate to the lower potential plate.

#### Example 2: Potential in a charged dielectric sphere (Poisson's Equation)

**Problem:** A sphere of radius $a$ has a uniform volume charge density $\rho_0$. Find the electric potential both inside ($r < a$) and outside ($r > a$) the sphere.

**Solution:**

1.  **Region of Interest:** Inside ($r < a$) and outside ($r > a$) the sphere.
2.  **Charge Distribution:**
    *   Inside ($r < a$): $\rho_v = \rho_0$ (uniform)
    *   Outside ($r > a$): $\rho_v = 0$
3.  **Coordinate System:** Spherical coordinates are appropriate.
4.  **Differential Equation:**
    *   Inside ($r < a$): Poisson's equation $\nabla^2 V = -\frac{\rho_0}{\epsilon}$
        In spherical coordinates, assuming radial symmetry ($\frac{\partial V}{\partial \theta} = \frac{\partial V}{\partial \phi} = 0$):
        $\frac{1}{r^2}\frac{d}{dr}\left(r^2\frac{dV}{dr}\right) = -\frac{\rho_0}{\epsilon}$
    *   Outside ($r > a$): Laplace's equation $\nabla^2 V = 0$
        In spherical coordinates, assuming radial symmetry:
        $\frac{1}{r^2}\frac{d}{dr}\left(r^2\frac{dV}{dr}\right) = 0$
5.  **Boundary Conditions:**
    *   **Symmetry:** At $r=0$, $\frac{dV}{dr} = 0$ (electric field must be zero at the center of a uniformly charged sphere).
    *   **Continuity of Potential:** At $r=a$, the potential inside and outside must be the same: $V_{in}(a) = V_{out}(a)$.
    *   **Continuity of Electric Field (or Normal Derivative of Potential):** At $r=a$, the normal component of $\mathbf{E}$ must be continuous.
        $\mathbf{E}_{in} = -\nabla V_{in} = -\frac{dV_{in}}{dr}\hat{\mathbf{a}}_r$
        $\mathbf{E}_{out} = -\nabla V_{out} = -\frac{dV_{out}}{dr}\hat{\mathbf{a}}_r$
        So, $\frac{dV_{in}}{dr}\Big|_{r=a} = \frac{dV_{out}}{dr}\Big|_{r=a}$.
    *   **Behavior at Infinity:** As $r \to \infty$, the potential should go to zero: $V_{out}(\infty) = 0$.
6.  **Solve:**
    *   **Outside ($r > a$):**
        $\frac{d}{dr}\left(r^2\frac{dV_{out}}{dr}\right) = 0$
        $r^2\frac{dV_{out}}{dr} = C_1$
        $\frac{dV_{out}}{dr} = \frac{C_1}{r^2}$
        $V_{out}(r) = -\frac{C_1}{r} + C_2$
        Using $V_{out}(\infty) = 0 \implies C_2 = 0$.
        $V_{out}(r) = -\frac{C_1}{r}$
        Using continuity of potential: $V_{out}(a) = V_{in}(a)$.
        Using continuity of normal derivative: $\frac{dV_{out}}{dr}\Big|_{r=a} = -\frac{C_1}{a^2}$.
    *   **Inside ($r < a$):**
        $\frac{d}{dr}\left(r^2\frac{dV_{in}}{dr}\right) = -\frac{\rho_0}{\epsilon}r^2$
        $r^2\frac{dV_{in}}{dr} = -\frac{\rho_0}{\epsilon}\frac{r^3}{3} + C_3$
        $\frac{dV_{in}}{dr} = -\frac{\rho_0}{3\epsilon}r + \frac{C_3}{r^2}$
        $V_{in}(r) = -\frac{\rho_0}{6\epsilon}r^2 + \frac{C_3'}{r} + C_4$
        Using symmetry at $r=0$, $\frac{dV_{in}}{dr}(0) = 0$, which implies $C_3 = 0$.
        So, $V_{in}(r) = -\frac{\rho_0}{6\epsilon}r^2 + C_4$.
        Now apply continuity at $r=a$:
        $V_{in}(a) = -\frac{\rho_0}{6\epsilon}a^2 + C_4 = V_{out}(a) = -\frac{C_1}{a}$
        $\frac{dV_{in}}{dr}\Big|_{r=a} = -\frac{\rho_0}{3\epsilon}a = \frac{dV_{out}}{dr}\Big|_{r=a} = -\frac{C_1}{a^2}$
        From the derivative continuity: $C_1 = \frac{\rho_0}{3\epsilon}a^3$.
        Substitute $C_1$ into the potential continuity equation:
        $-\frac{\rho_0}{6\epsilon}a^2 + C_4 = -\frac{1}{a}\left(\frac{\rho_0}{3\epsilon}a^3\right) = -\frac{\rho_0}{3\epsilon}a^2$
        $C_4 = -\frac{\rho_0}{3\epsilon}a^2 + \frac{\rho_0}{6\epsilon}a^2 = -\frac{\rho_0}{6\epsilon}a^2$
        So, the potential inside is:
        **$V_{in}(r) = -\frac{\rho_0}{6\epsilon}r^2 - \frac{\rho_0}{6\epsilon}a^2 = -\frac{\rho_0}{6\epsilon}(r^2 + a^2)$**
        And the potential outside is:
        **$V_{out}(r) = -\frac{C_1}{r} = -\frac{1}{r}\left(\frac{\rho_0}{3\epsilon}a^3\right) = -\frac{\rho_0 a^3}{3\epsilon r}$**
7.  **Electric Field:**
    *   Inside ($r < a$):
        $\mathbf{E}_{in} = -\frac{dV_{in}}{dr}\hat{\mathbf{a}}_r = -\frac{d}{dr}\left(-\frac{\rho_0}{6\epsilon}(r^2 + a^2)\right)\hat{\mathbf{a}}_r$
        $\mathbf{E}_{in} = -\left(-\frac{\rho_0}{6\epsilon}(2r)\right)\hat{\mathbf{a}}_r = \frac{\rho_0 r}{3\epsilon}\hat{\mathbf{a}}_r$
        *(This matches the result from Gauss's Law for a uniformly charged sphere)*
    *   Outside ($r > a$):
        $\mathbf{E}_{out} = -\frac{dV_{out}}{dr}\hat{\mathbf{a}}_r = -\frac{d}{dr}\left(-\frac{\rho_0 a^3}{3\epsilon r}\right)\hat{\mathbf{a}}_r$
        $\mathbf{E}_{out} = -\left(\frac{\rho_0 a^3}{3\epsilon r^2}\right)\hat{\mathbf{a}}_r = -\frac{\rho_0 a^3}{3\epsilon r^2}\hat{\mathbf{a}}_r$
        *(This also matches Gauss's Law, where the sphere behaves like a point charge at the center with charge $Q = \rho_0 \frac{4}{3}\pi a^3$)*

---

### 7. Practice Questions and Exercises

**(Note: Answers are provided after each question for self-assessment.)**

**Question 1:**
State Poisson's equation and Laplace's equation in Cartesian coordinates. Under what conditions is each equation applicable?

**Answer:**
*   **Poisson's Equation:** $\nabla^2 V = \frac{\partial^2 V}{\partial x^2} + \frac{\partial^2 V}{\partial y^2} + \frac{\partial^2 V}{\partial z^2} = -\frac{\rho_v}{\epsilon}$
    Applicable when there is a non-zero volume charge density ($\rho_v$) in the region of interest.
*   **Laplace's Equation:** $\nabla^2 V = \frac{\partial^2 V}{\partial x^2} + \frac{\partial^2 V}{\partial y^2} + \frac{\partial^2 V}{\partial z^2} = 0$
    Applicable when the region of interest is charge-free ($\rho_v = 0$).

---

**Question 2:**
The electric potential in a charge-free region is given by $V(x, y, z) = 5x^2 - 3y^2 + 2z^2$ V.
(a) Verify that this potential satisfies Laplace's equation.
(b) Calculate the electric field $\mathbf{E}$ in this region.

**Answer:**
(a) $\nabla^2 V = \frac{\partial^2 V}{\partial x^2} + \frac{\partial^2 V}{\partial y^2} + \frac{\partial^2 V}{\partial z^2}$
$\frac{\partial V}{\partial x} = 10x$, $\frac{\partial^2 V}{\partial x^2} = 10$
$\frac{\partial V}{\partial y} = -6y$, $\frac{\partial^2 V}{\partial y^2} = -6$
$\frac{\partial V}{\partial z} = 4z$, $\frac{\partial^2 V}{\partial z^2} = 4$
$\nabla^2 V = 10 + (-6) + 4 = 8 \neq 0$.
**Correction:** The potential given does *not* satisfy Laplace's equation. Let's assume a corrected potential that *does* satisfy Laplace's equation. A simple modification would be $V(x, y, z) = 5x^2 - 5y^2$.
Let's re-evaluate with $V(x, y, z) = 5x^2 - 5y^2$:
$\frac{\partial V}{\partial x} = 10x$, $\frac{\partial^2 V}{\partial x^2} = 10$
$\frac{\partial V}{\partial y} = -10y$, $\frac{\partial^2 V}{\partial y^2} = -10$
$\frac{\partial V}{\partial z} = 0$, $\frac{\partial^2 V}{\partial z^2} = 0$
$\nabla^2 V = 10 + (-10) + 0 = 0$. Yes, it satisfies Laplace's equation.

(b) $\mathbf{E} = -\nabla V = -\left(\frac{\partial V}{\partial x}\hat{\mathbf{a}}_x + \frac{\partial V}{\partial y}\hat{\mathbf{a}}_y + \frac{\partial V}{\partial z}\hat{\mathbf{a}}_z\right)$
$\mathbf{E} = -(10x\hat{\mathbf{a}}_x - 10y\hat{\mathbf{a}}_y + 0\hat{\mathbf{a}}_z)$
**$\mathbf{E} = -10x\hat{\mathbf{a}}_x + 10y\hat{\mathbf{a}}_y$**

---

**Question 3:**
A region in space has a uniform volume charge density $\rho_v = \rho_0$ for $0 \le x \le a$ and $\rho_v = 0$ elsewhere. Find the potential $V(x)$ in this region, assuming $V=0$ at $x=0$ and $x=a$. (Hint: This is a 1D problem).

**Answer:**
We need to solve Poisson's equation in each region and apply boundary conditions.

*   **Region 1: $0 \le x \le a$ ($\rho_v = \rho_0$)**
    Poisson's equation: $\frac{d^2 V_1}{dx^2} = -\frac{\rho_0}{\epsilon}$
    Integrate twice:
    $\frac{dV_1}{dx} = -\frac{\rho_0}{\epsilon}x + C_1$
    $V_1(x) = -\frac{\rho_0}{2\epsilon}x^2 + C_1x + C_2$

*   **Region 2: $x > a$ ($\rho_v = 0$)**
    Laplace's equation: $\frac{d^2 V_2}{dx^2} = 0$
    Integrate twice:
    $\frac{dV_2}{dx} = C_3$
    $V_2(x) = C_3x + C_4$

*   **Boundary Conditions:**
    1.  $V_1(0) = 0 \implies C_2 = 0$. So, $V_1(x) = -\frac{\rho_0}{2\epsilon}x^2 + C_1x$.
    2.  $V_1(a) = V_2(a)$ (Continuity of potential at $x=a$)
        $-\frac{\rho_0}{2\epsilon}a^2 + C_1a = C_3a + C_4$
    3.  $\frac{dV_1}{dx}(a) = \frac{dV_2}{dx}(a)$ (Continuity of electric field at $x=a$)
        $-\frac{\rho_0}{\epsilon}a + C_1 = C_3$
    4.  As $x \to \infty$, $V_2(x)$ must remain finite. For a 1D problem this is less restrictive, but if we consider the field, it must go to zero. If $C_3 \neq 0$, then $V_2(x) \to \pm \infty$ as $x \to \infty$. So, $C_3=0$.
        This implies $\frac{dV_2}{dx} = 0$, meaning the electric field is zero outside this charged region, which is reasonable for an infinite slab.
        So, $C_3=0$.

    Now use $C_3=0$ in the other equations:
    From condition 3: $-\frac{\rho_0}{\epsilon}a + C_1 = 0 \implies C_1 = \frac{\rho_0 a}{\epsilon}$.
    From condition 2: $-\frac{\rho_0}{2\epsilon}a^2 + \left(\frac{\rho_0 a}{\epsilon}\right)a = 0 \cdot a + C_4$
    $-\frac{\rho_0}{2\epsilon}a^2 + \frac{\rho_0 a^2}{\epsilon} = C_4$
    $\frac{\rho_0 a^2}{2\epsilon} = C_4$.

*   **Resulting Potentials:**
    *   For $0 \le x \le a$:
        **$V_1(x) = -\frac{\rho_0}{2\epsilon}x^2 + \frac{\rho_0 a}{\epsilon}x = \frac{\rho_0}{2\epsilon}(2ax - x^2)$**
    *   For $x > a$:
        **$V_2(x) = \frac{\rho_0 a^2}{2\epsilon}$** (Constant potential outside)

---

**Question 4:**
Consider a cylindrical capacitor consisting of an inner conductor of radius $a$ and an outer conductor of radius $b$. The inner conductor is at potential $V_0$ and the outer conductor is at $0$ V. Assume the region between the conductors is charge-free. Use Laplace's equation to find the potential and electric field.
*(Hint: This problem is best solved in cylindrical coordinates.)*

**Answer:**
1.  **Region:** $a \le r \le b$.
2.  **Charge:** Charge-free, $\rho_v = 0$.
3.  **Coordinate System:** Cylindrical.
4.  **Differential Equation:** Laplace's equation in cylindrical coordinates, with radial symmetry (potential only depends on $r$, not $\phi$ or $z$):
    $\frac{1}{r}\frac{d}{dr}\left(r\frac{dV}{dr}\right) = 0$
5.  **Boundary Conditions:**
    *   $V(r=a) = V_0$
    *   $V(r=b) = 0$
6.  **Solve:**
    $\frac{d}{dr}\left(r\frac{dV}{dr}\right) = 0$
    $r\frac{dV}{dr} = C_1$
    $\frac{dV}{dr} = \frac{C_1}{r}$
    $V(r) = C_1 \ln(r) + C_2$
    Apply boundary conditions:
    *   $V(a) = C_1 \ln(a) + C_2 = V_0$
    *   $V(b) = C_1 \ln(b) + C_2 = 0$
    Subtracting the second equation from the first:
    $C_1 (\ln(a) - \ln(b)) = V_0$
    $C_1 \ln(a/b) = V_0 \implies C_1 = \frac{V_0}{\ln(a/b)} = -\frac{V_0}{\ln(b/a)}$
    Substitute $C_1$ into the second equation to find $C_2$:
    $-\frac{V_0}{\ln(b/a)} \ln(b) + C_2 = 0 \implies C_2 = \frac{V_0 \ln(b)}{\ln(b/a)}$
    So, the potential is:
    **$V(r) = -\frac{V_0}{\ln(b/a)} \ln(r) + \frac{V_0 \ln(b)}{\ln(b/a)} = \frac{V_0}{\ln(b/a)} (\ln(b) - \ln(r)) = \frac{V_0}{\ln(b/a)} \ln\left(\frac{b}{r}\right)$**

7.  **Electric Field:**
    $\mathbf{E} = -\nabla V = -\frac{dV}{dr}\hat{\mathbf{a}}_r$
    $\mathbf{E} = -\left(-\frac{V_0}{\ln(b/a)}\frac{1}{r}\right)\hat{\mathbf{a}}_r = \frac{V_0}{r\ln(b/a)}\hat{\mathbf{a}}_r$
    **$\mathbf{E}(r) = \frac{V_0}{r\ln(b/a)}\hat{\mathbf{a}}_r$**
    The field is radial and decreases with $r$, as expected.

---

### 8. Important Points to Remember

*   **Poisson's Equation:** $\nabla^2 V = -\frac{\rho_v}{\epsilon}$. Use when there's a volume charge density.
*   **Laplace's Equation:** $\nabla^2 V = 0$. Use when the region is charge-free.
*   **Relationship:** Laplace's equation is a special case of Poisson's equation when $\rho_v = 0$.
*   **Electric Field from Potential:** $\mathbf{E} = -\nabla V$.
*   **Boundary Conditions are Key:** The uniqueness theorem guarantees that a solution satisfying the boundary conditions is the correct solution.
*   **Choice of Coordinate System:** Select the system that best matches the problem's geometry to simplify the Laplacian operator and the solution process.
*   **Common Boundary Conditions:** Potential specified on conductor surfaces (Dirichlet), normal derivative of potential specified (Neumann).
*   **Uniqueness Theorem:** For a given region, a solution to Laplace's or Poisson's equation that satisfies the boundary conditions is unique. This means if you find a valid solution, it's the only one.
    *   *(Basu, Chapter 3)*

---

### 9. Alignment with Course Outcomes

This topic directly addresses:

*   **CO1: Summarize the basic mathematical concepts related to electromagnetic vector fields. (Knowledge Level: K2)**
    *   Understanding the relationship $\mathbf{E} = -\nabla V$, the Laplacian operator, and the differential equations $\nabla^2 V = -\rho_v/\epsilon$ and $\nabla^2 V = 0$ are foundational mathematical concepts for vector fields.
*   **CO2: Apply Maxwell’s equations in different forms to diverse electromagnetic problems. (Knowledge Level: K3)**
    *   Poisson's and Laplace's equations are derived from Gauss's Law (one of Maxwell's equations) and are essential tools for solving electrostatic problems. Applying them to different geometries (parallel plates, spheres, cylinders) demonstrates the application of these principles.

---

This concludes the notes for Poisson and Laplace equations and their application in determining voltage and electric fields. Remember to practice solving problems with varying geometries and boundary conditions to solidify your understanding.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
