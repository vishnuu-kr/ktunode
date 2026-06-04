---
title: "Capacitance of parallel plate capacitor, Coaxial and Spherical capacitors, Continuity equation, Boundary conditions, Poisson’s and Laplace’s Equations (solution not required)"
subject: "ELECTROMAGNETIC THEORY"
module: "Module 2: Electrostatic Fields in material media : Gauss’s law "
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f361b3"
status: "completed"
scrapedAt: "2026-05-23T16:21:51.349Z"
---
# Electromagnetic Theory: Module 2 - Electrostatic Fields in Material Media: Gauss's Law

**Subject:** Electromagnetic Theory
**Module:** Module 2: Electrostatic Fields in Material Media: Gauss's Law
**Topic:** Capacitance of parallel plate capacitor, Coaxial and Spherical capacitors, Continuity equation, Boundary conditions, Poisson’s and Laplace’s Equations (solution not required)

---

## 1. Capacitance of Capacitors

### 1.1 Definition of Capacitance

**Key Concept:** Capacitance ($C$) is a measure of a system's ability to store electrical energy in an electric field. It is defined as the ratio of the magnitude of the charge ($Q$) on either conductor to the potential difference ($V$) between them.

**Formula:**
$C = \frac{Q}{V}$

**Units:** Farad (F), where 1 Farad = 1 Coulomb/Volt.

**Important Points to Remember:**
*   Capacitance is a geometric property of the conductors and the dielectric material between them. It is independent of the charge or voltage.
*   The potential difference ($V$) is always taken as the potential of the positive conductor minus the potential of the negative conductor.
*   A capacitor stores energy. The energy stored is given by $W = \frac{1}{2}CV^2 = \frac{1}{2}QV = \frac{1}{2}\frac{Q^2}{C}$.

### 1.2 Capacitance of Parallel Plate Capacitor

**Description:** This is the simplest capacitor, consisting of two parallel conducting plates separated by a dielectric medium.

**Setup:**
*   Two parallel conducting plates of area $A$, separated by a distance $d$.
*   A dielectric material with permittivity $\epsilon$ fills the space between the plates.
*   Assume a uniform charge density $\rho_s$ on one plate and $-\rho_s$ on the other.

**Derivation (Conceptual Outline):**
1.  **Electric Field (E):** Using Gauss's Law in a dielectric medium (referencing Sadiku, Chapter 4), the electric field between the plates is approximately uniform and given by $E = \frac{\rho_s}{\epsilon}$.
2.  **Potential Difference (V):** The potential difference between the plates is the line integral of the electric field: $V = -\int E \cdot dl$. For a uniform field, $V = Ed$.
3.  **Charge (Q):** The total charge on a plate is $Q = \rho_s A$.
4.  **Capacitance (C):** Substitute $Q$ and $V$ into the capacitance formula $C = \frac{Q}{V}$.

**Formula:**
$C = \frac{\epsilon A}{d}$

**Example:** A parallel plate capacitor with plates of area $0.1 \, \text{m}^2$ separated by $1 \, \text{mm}$ in air ($\epsilon_0 \approx 8.854 \times 10^{-12} \, \text{F/m}$).
$C = \frac{(8.854 \times 10^{-12} \, \text{F/m}) \times (0.1 \, \text{m}^2)}{1 \times 10^{-3} \, \text{m}} \approx 0.8854 \, \text{nF}$

**Important Points to Remember:**
*   The capacitance increases with the area of the plates.
*   The capacitance decreases with the separation distance between the plates.
*   The capacitance increases with the permittivity of the dielectric material.

### 1.3 Capacitance of Coaxial Capacitor

**Description:** This capacitor consists of two concentric cylindrical conductors.

**Setup:**
*   Inner conductor of radius $a$.
*   Outer conductor of radius $b$.
*   Length of the cylinder $L$.
*   Dielectric material with permittivity $\epsilon$ filling the space between the conductors.

**Derivation (Conceptual Outline):**
1.  **Electric Field (E):** Apply Gauss's Law to a cylindrical Gaussian surface of radius $r$ ($a < r < b$) and length $L$. The electric field is radial: $E = \frac{\lambda}{2\pi \epsilon r}$, where $\lambda$ is the charge per unit length on the inner conductor.
2.  **Potential Difference (V):** $V = -\int_a^b E \cdot dl = -\int_a^b \frac{\lambda}{2\pi \epsilon r} dr = -\frac{\lambda}{2\pi \epsilon} \ln(\frac{b}{a})$. The magnitude of the potential difference is $V = \frac{\lambda}{2\pi \epsilon} \ln(\frac{b}{a})$.
3.  **Charge (Q):** The total charge on the inner conductor of length $L$ is $Q = \lambda L$.
4.  **Capacitance (C):** Substitute $Q$ and $V$ into $C = \frac{Q}{V}$.

**Formula:**
$C = \frac{2\pi \epsilon L}{\ln(b/a)}$

**Example:** A coaxial cable with an inner conductor of radius $1 \, \text{mm}$ and an outer conductor of radius $5 \, \text{mm}$, filled with polyethylene ($\epsilon_r = 2.25$).
$C/L = \frac{2\pi (2.25 \times 8.854 \times 10^{-12} \, \text{F/m})}{\ln(5/1)} \approx \frac{1.256 \times 10^{-10} \, \text{F/m}}{1.609} \approx 7.8 \times 10^{-11} \, \text{F/m} = 78 \, \text{pF/m}$.

**Important Points to Remember:**
*   The capacitance is proportional to the length of the cylinder.
*   The capacitance increases as the ratio $b/a$ decreases (conductors closer).
*   The logarithm term in the denominator is crucial for this geometry.

### 1.4 Capacitance of Spherical Capacitor

**Description:** This capacitor consists of two concentric conducting spheres.

**Setup:**
*   Inner sphere of radius $a$.
*   Outer sphere of radius $b$.
*   Dielectric material with permittivity $\epsilon$ filling the space between the spheres.

**Derivation (Conceptual Outline):**
1.  **Electric Field (E):** Apply Gauss's Law to a spherical Gaussian surface of radius $r$ ($a < r < b$). The electric field is radial: $E = \frac{Q}{4\pi \epsilon r^2}$, where $Q$ is the charge on the inner sphere.
2.  **Potential Difference (V):** $V = -\int_a^b E \cdot dl = -\int_a^b \frac{Q}{4\pi \epsilon r^2} dr = -\frac{Q}{4\pi \epsilon} \left[-\frac{1}{r}\right]_a^b = -\frac{Q}{4\pi \epsilon} \left(\frac{1}{b} - \frac{1}{a}\right) = \frac{Q}{4\pi \epsilon} \left(\frac{1}{a} - \frac{1}{b}\right)$. The magnitude of the potential difference is $V = \frac{Q}{4\pi \epsilon} \left(\frac{1}{a} - \frac{1}{b}\right)$.
3.  **Capacitance (C):** Substitute $Q$ and $V$ into $C = \frac{Q}{V}$.

**Formula:**
$C = \frac{4\pi \epsilon}{\frac{1}{a} - \frac{1}{b}} = \frac{4\pi \epsilon ab}{b-a}$

**Example:** A spherical capacitor with an inner sphere of radius $2 \, \text{cm}$ and an outer sphere of radius $5 \, \text{cm}$, filled with vacuum ($\epsilon = \epsilon_0$).
$C = \frac{4\pi (8.854 \times 10^{-12} \, \text{F/m}) \times (0.02 \, \text{m}) \times (0.05 \, \text{m})}{0.05 \, \text{m} - 0.02 \, \text{m}} \approx \frac{1.112 \times 10^{-12} \, \text{Fm}}{0.03 \, \text{m}} \approx 3.71 \times 10^{-11} \, \text{F} = 37.1 \, \text{pF}$.

**Important Points to Remember:**
*   The capacitance increases as the radii $a$ and $b$ increase.
*   The capacitance increases as the difference $b-a$ decreases (conductors closer).
*   For $b \gg a$, the spherical capacitor approaches the capacitance of an isolated sphere, $C \approx 4\pi \epsilon a$.

---

## 2. Continuity Equation

**Key Concept:** The continuity equation describes the conservation of charge. It states that the time rate of decrease of charge in any volume is equal to the net outward current through the surface of that volume.

**Mathematical Formulation:**
*   **Differential form:** $\nabla \cdot \mathbf{J} + \frac{\partial \rho}{\partial t} = 0$
    *   $\mathbf{J}$: Current density vector (vectorial flow of charge per unit area).
    *   $\rho$: Volume charge density.
    *   $\frac{\partial \rho}{\partial t}$: Rate of change of charge density within the volume.
    *   $\nabla \cdot \mathbf{J}$: Divergence of current density, representing the net outward flow of current from a point.

*   **Integral form:** $\oint_S \mathbf{J} \cdot d\mathbf{S} + \frac{d}{dt} \int_V \rho dV = 0$
    *   $\oint_S \mathbf{J} \cdot d\mathbf{S}$: Net outward current flux through a closed surface $S$.
    *   $\frac{d}{dt} \int_V \rho dV$: Rate of change of total charge within volume $V$.

**Explanation:**
The equation essentially states that the rate at which charge leaves a region is equal to the rate at which the charge density decreases within that region. If charge is conserved, charge cannot be created or destroyed; it can only flow from one place to another.

**Application in Electrostatics:**
In **electrostatic fields**, the charge density $\rho$ is constant in time, meaning $\frac{\partial \rho}{\partial t} = 0$. Therefore, the continuity equation simplifies to:
$\nabla \cdot \mathbf{J} = 0$

This implies that in electrostatics, the current density vector is solenoidal (its divergence is zero). This makes sense because in electrostatics, charges are assumed to be stationary, so there is no flow of charge. However, the continuity equation is fundamental for understanding time-varying fields and current flow in conductors.

**Relating to Ohm's Law:**
Using Ohm's Law in point form, $\mathbf{J} = \sigma \mathbf{E}$, where $\sigma$ is conductivity.
Substituting into the electrostatic continuity equation:
$\nabla \cdot (\sigma \mathbf{E}) = 0$
If $\sigma$ is constant:
$\sigma (\nabla \cdot \mathbf{E}) = 0$
Since $\sigma \neq 0$, this implies $\nabla \cdot \mathbf{E} = 0$. However, from Gauss's law in free space, $\nabla \cdot \mathbf{E} = \frac{\rho}{\epsilon_0}$. So, $\frac{\rho}{\epsilon_0} = 0$, which means $\rho = 0$ in the interior of a conductor in electrostatic equilibrium. This is a crucial result.

**Important Points to Remember:**
*   The continuity equation is a statement of charge conservation.
*   It applies to both static and dynamic fields.
*   In electrostatics, it leads to the conclusion that charge density is zero inside a conductor.

---

## 3. Boundary Conditions

**Key Concept:** Boundary conditions describe how electric and magnetic fields behave at the interface between different materials. These conditions are derived from the integral forms of Maxwell's equations.

### 3.1 Boundary Conditions for Electric Fields

These conditions apply at the interface between two different media (e.g., dielectric to dielectric, conductor to dielectric).

**Assumptions:**
*   Medium 1 has permittivity $\epsilon_1$ and medium 2 has permittivity $\epsilon_2$.
*   The interface is a planar surface.
*   We consider the behavior of the tangential component of $\mathbf{E}$ and the normal component of the electric displacement field $\mathbf{D}$.

#### 3.1.1 Tangential Component of E

**Key Concept:** The tangential component of the electric field is continuous across the boundary between two media.

**Derivation (Conceptual):** Apply the integral form of Faraday's Law around a small rectangular loop enclosing a segment of the boundary. In electrostatics, $\oint \mathbf{E} \cdot d\mathbf{l} = 0$.

**Formula:**
$E_{t1} = E_{t2}$
where $E_{t1}$ is the tangential component of $\mathbf{E}$ in medium 1 and $E_{t2}$ is the tangential component of $\mathbf{E}$ in medium 2.

#### 3.1.2 Normal Component of D

**Key Concept:** The normal component of the electric displacement field ($\mathbf{D}$) changes at the boundary by an amount equal to the surface charge density ($\rho_s$) present at the interface.

**Derivation (Conceptual):** Apply Gauss's Law in its integral form to a small pillbox surface that straddles the boundary. The net flux is related to the enclosed charge, which includes the surface charge.

**Formula:**
$D_{n1} - D_{n2} = \rho_s$
or in terms of $\mathbf{E}$:
$\epsilon_1 E_{n1} - \epsilon_2 E_{n2} = \rho_s$
where $D_{n1} = \epsilon_1 E_{n1}$ and $D_{n2} = \epsilon_2 E_{n2}$ are the normal components of $\mathbf{D}$ in medium 1 and medium 2, respectively.

**Special Case: Conductor-Dielectric Boundary ($\rho_s = 0$ if no free charge exists on the surface):**
If there is no surface charge, then $D_{n1} = D_{n2}$.
If medium 1 is a conductor (infinite conductivity, so $\mathbf{E}$ inside is zero in electrostatics) and medium 2 is a dielectric:
*   $\mathbf{E}_1 = 0$ inside the conductor.
*   $E_{t1} = 0$. Therefore, $E_{t2} = 0$ in the dielectric adjacent to the conductor. This means the electric field is perpendicular to the surface of a conductor in electrostatic equilibrium.
*   $\epsilon_1 E_{n1} = \epsilon_2 E_{n2}$. Since $\mathbf{E}_1 = 0$, $E_{n1} = 0$. So, $0 = \epsilon_2 E_{n2}$, which implies $E_{n2} = 0$ if $\epsilon_2 \neq 0$. This seems to contradict the presence of electric field. However, this is where the $\rho_s$ term becomes important.
    *   If medium 1 is a conductor, $\mathbf{E}_1=0$. Let medium 2 be a dielectric.
    *   $E_{t1}=E_{t2}$. Since $\mathbf{E}_1=0$, $E_{t1}=0$, so $E_{t2}=0$. This means the electric field in the dielectric is perpendicular to the surface.
    *   $D_{n1} - D_{n2} = \rho_s$. Since $\mathbf{E}_1=0$, $D_{n1} = \epsilon_1 E_{n1} = 0$. So, $-\epsilon_2 E_{n2} = \rho_s$.
    *   This means $E_{n2} = -\frac{\rho_s}{\epsilon_2}$. The normal component of the electric field in the dielectric is non-zero and directed away from the surface if $\rho_s$ is negative (positive charge on the conductor). The surface charge density $\rho_s$ exists on the conductor's surface.

**Summary of Boundary Conditions for E:**
*   $E_{t1} = E_{t2}$ (Tangential E is continuous)
*   $\epsilon_1 E_{n1} - \epsilon_2 E_{n2} = \rho_s$ (Normal D changes by $\rho_s$)

#### 3.1.3 Boundary Conditions for H (Magnetostatics, but relevant for completeness)

These are analogous to the electric field boundary conditions, but involve magnetic field $\mathbf{H}$ and magnetic flux density $\mathbf{B}$.

*   **Tangential component of H:** $H_{t1} - H_{t2} = K$ (where $K$ is the surface current density)
*   **Normal component of B:** $B_{n1} = B_{n2}$ (Normal B is continuous)

**Important Points to Remember:**
*   Boundary conditions are essential for solving problems involving multiple materials.
*   They ensure that the solutions for the fields are consistent across interfaces.
*   The continuity of tangential $\mathbf{E}$ and the discontinuity of normal $\mathbf{D}$ are key.

---

## 4. Poisson's and Laplace's Equations

**Key Concept:** These are second-order partial differential equations that describe the electrostatic potential in regions of space where there is no charge or where charge distribution is known. They are fundamental to solving electrostatic problems, especially in regions without free charges or when using methods like separation of variables.

### 4.1 Poisson's Equation

**Description:** Poisson's equation relates the electrostatic potential ($\phi$) to the volume charge density ($\rho$) in a region.

**Derivation (Conceptual):**
Start with Gauss's Law in differential form in a dielectric medium:
$\nabla \cdot \mathbf{D} = \rho$
Substitute $\mathbf{D} = \epsilon \mathbf{E}$ and $\mathbf{E} = -\nabla \phi$:
$\nabla \cdot (\epsilon (-\nabla \phi)) = \rho$
If $\epsilon$ is constant in the region:
$-\epsilon \nabla \cdot (\nabla \phi) = \rho$
$-\epsilon \nabla^2 \phi = \rho$

**Formula:**
$\nabla^2 \phi = -\frac{\rho}{\epsilon}$

where:
*   $\phi$ is the scalar electrostatic potential.
*   $\nabla^2$ is the Laplacian operator. In Cartesian coordinates, $\nabla^2 = \frac{\partial^2}{\partial x^2} + \frac{\partial^2}{\partial y^2} + \frac{\partial^2}{\partial z^2}$.
*   $\rho$ is the volume charge density.
*   $\epsilon$ is the permittivity of the medium.

**Application:**
*   Used to find the electrostatic potential in a region with a known charge distribution.
*   Examples include finding the potential inside a charged sphere or between charged plates.

### 4.2 Laplace's Equation

**Description:** Laplace's equation is a special case of Poisson's equation that applies to regions where there is no charge density ($\rho = 0$).

**Derivation (Conceptual):**
Set $\rho = 0$ in Poisson's equation.

**Formula:**
$\nabla^2 \phi = 0$

**Application:**
*   Used to find the electrostatic potential in charge-free regions, subject to boundary conditions.
*   Essential for problems like finding the potential in a region bounded by conductors at specified potentials.
*   Examples include finding the potential between two concentric spheres at different potentials, or in a corner region between two conducting plates.

**Relationship to Uniqueness Theorems:**
Solutions to Laplace's equation are unique given specific boundary conditions. This is important because it means if we find a potential function that satisfies Laplace's equation and the boundary conditions, it is the only possible solution.

**Important Points to Remember:**
*   Poisson's equation governs potential in the presence of charges.
*   Laplace's equation governs potential in charge-free regions.
*   The Laplacian operator $\nabla^2$ is central to both equations.
*   Solutions to these equations are unique if boundary conditions are provided.
*   Solving these equations is a core task in electrostatics, though the note specifies that solutions are not required for this topic.

---

## 5. Practice Questions and Answers

**1. Question (Capacitance):**
A parallel plate capacitor has plates of area $0.05 \, \text{m}^2$ and is separated by a dielectric material with a dielectric constant $k = 4$ and thickness $d = 2 \, \text{mm}$. Calculate the capacitance if the dielectric is vacuum. Then, calculate the capacitance with the dielectric.

**Answer:**
*   Capacitance with vacuum ($C_0$):
    $C_0 = \frac{\epsilon_0 A}{d} = \frac{(8.854 \times 10^{-12} \, \text{F/m}) \times (0.05 \, \text{m}^2)}{2 \times 10^{-3} \, \text{m}} \approx 2.21 \times 10^{-10} \, \text{F} = 221 \, \text{pF}$
*   Capacitance with dielectric ($C$):
    $C = k C_0 = 4 \times 221 \, \text{pF} = 884 \, \text{pF}$

**2. Question (Boundary Conditions):**
At the interface between two dielectric media, the electric field in medium 1 (with $\epsilon_1 = 2\epsilon_0$) is $\mathbf{E}_1 = (10\mathbf{a}_x + 5\mathbf{a}_y + 20\mathbf{a}_z) \, \text{V/m}$. The interface is the $xy$-plane, and medium 2 is vacuum ($\epsilon_2 = \epsilon_0$). If there is no surface charge density at the interface ($\rho_s = 0$), find the electric field $\mathbf{E}_2$ in medium 2.

**Answer:**
The tangential components of $\mathbf{E}$ are continuous: $E_{t1} = E_{t2}$.
The normal component of $\mathbf{D}$ is continuous because $\rho_s = 0$: $D_{n1} = D_{n2}$.

*   $\mathbf{E}_1 = E_{t1} + E_{n1} = (10\mathbf{a}_x + 5\mathbf{a}_y) + 20\mathbf{a}_z$.
*   $E_{t1} = 10\mathbf{a}_x + 5\mathbf{a}_y$. Thus, $E_{t2} = 10\mathbf{a}_x + 5\mathbf{a}_y$.
*   $E_{n1} = 20$.
*   $D_{n1} = \epsilon_1 E_{n1} = (2\epsilon_0)(20) = 40\epsilon_0$.
*   Since $D_{n1} = D_{n2}$, $D_{n2} = 40\epsilon_0$.
*   $D_{n2} = \epsilon_2 E_{n2} = \epsilon_0 E_{n2}$.
*   Therefore, $\epsilon_0 E_{n2} = 40\epsilon_0 \implies E_{n2} = 40 \, \text{V/m}$.
*   So, $\mathbf{E}_2 = E_{t2} + E_{n2}\mathbf{a}_z = (10\mathbf{a}_x + 5\mathbf{a}_y + 40\mathbf{a}_z) \, \text{V/m}$.

**3. Question (Continuity Equation):**
If the current density in a conductor is $\mathbf{J} = (x^2+y^2)\mathbf{a}_x + (y^2+z^2)\mathbf{a}_y + (z^2+x^2)\mathbf{a}_z \, \text{A/m}^2$, and the charge density is $\rho = \rho_0 (x^2+y^2+z^2)$, find the rate of change of charge density $\frac{\partial \rho}{\partial t}$.

**Answer:**
From the continuity equation, $\nabla \cdot \mathbf{J} + \frac{\partial \rho}{\partial t} = 0$.
First, calculate $\nabla \cdot \mathbf{J}$:
$\nabla \cdot \mathbf{J} = \frac{\partial}{\partial x}(x^2+y^2) + \frac{\partial}{\partial y}(y^2+z^2) + \frac{\partial}{\partial z}(z^2+x^2)$
$\nabla \cdot \mathbf{J} = (2x) + (2y) + (2z) = 2(x+y+z)$

Now, use the continuity equation:
$2(x+y+z) + \frac{\partial \rho}{\partial t} = 0$
$\frac{\partial \rho}{\partial t} = -2(x+y+z)$

Note: This implies that if the current density has this form, the charge density would have to change in time to satisfy conservation. If it were an electrostatic condition, this $\mathbf{J}$ would not be possible with a non-zero charge density.

**4. Question (Poisson's/Laplace's):**
Write down Poisson's and Laplace's equations in Cartesian coordinates.

**Answer:**
*   **Poisson's Equation:** $\frac{\partial^2 \phi}{\partial x^2} + \frac{\partial^2 \phi}{\partial y^2} + \frac{\partial^2 \phi}{\partial z^2} = -\frac{\rho}{\epsilon}$
*   **Laplace's Equation:** $\frac{\partial^2 \phi}{\partial x^2} + \frac{\partial^2 \phi}{\partial y^2} + \frac{\partial^2 \phi}{\partial z^2} = 0$

---

## 6. Important Points to Remember

*   **Capacitance:** $C = Q/V$. Geometric property. Units: Farad.
*   **Capacitor Formulas:**
    *   Parallel Plate: $C = \frac{\epsilon A}{d}$
    *   Coaxial: $C = \frac{2\pi \epsilon L}{\ln(b/a)}$
    *   Spherical: $C = \frac{4\pi \epsilon ab}{b-a}$
*   **Continuity Equation:** $\nabla \cdot \mathbf{J} + \frac{\partial \rho}{\partial t} = 0$ (Charge Conservation). In electrostatics, $\mathbf{J}=0$ and $\frac{\partial \rho}{\partial t}=0$.
*   **Boundary Conditions:**
    *   $E_{t1} = E_{t2}$ (Tangential E is continuous)
    *   $D_{n1} - D_{n2} = \rho_s$ (Normal D has a discontinuity equal to surface charge density)
*   **Poisson's Equation:** $\nabla^2 \phi = -\frac{\rho}{\epsilon}$ (Potential in charge-filled regions)
*   **Laplace's Equation:** $\nabla^2 \phi = 0$ (Potential in charge-free regions)

---
