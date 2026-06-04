---
title: "Electrostatic Fields : Coulomb’s Law, Electric Field Intensity, Force and Field due to system of charges, Gauss’s Law - integral form, Electric Flux Density, Field due to line of charge, surface and volume charge distributions."
subject: "ELECTROMAGNETIC THEORY"
module: "Module 1: Mathematical Preliminaries : Rectangular, Cylindrical and Spherical Coordinate Systems "
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f361b0"
status: "completed"
scrapedAt: "2026-05-23T16:21:49.935Z"
---
# Electromagnetic Theory: Module 1 - Electrostatic Fields

This module introduces the fundamental concepts of electrostatic fields, laying the groundwork for understanding electromagnetic phenomena. We will explore Coulomb's Law, the electric field, and its behavior under various charge distributions, all within the context of different coordinate systems.

**Course Outcomes addressed in this module:**

*   **CO1: Apply vector calculus in Electricity and Magnetism. (Knowledge Level: K3)** - This module relies heavily on vector algebra and will introduce vector calculus operations as we progress.
*   **CO2: Compute electric and magnetic fields in different media (Knowledge Level: K3)** - We will begin by computing electric fields due to static charges.

---

## 1. Coulomb's Law and Electric Field Intensity

### 1.1 Coulomb's Law

**Key Concept:** Coulomb's Law describes the force between two point charges.

**Definition:** The force $\mathbf{F}$ between two point charges $q_1$ and $q_2$ separated by a distance $R$ in a vacuum is:

*   **Proportional to the product of the charges:** $F \propto |q_1 q_2|$
*   **Inversely proportional to the square of the distance between them:** $F \propto \frac{1}{R^2}$
*   **Acts along the line joining the charges.**

**Mathematical Formulation:**

In vector form, the force exerted by charge $q_1$ on charge $q_2$ is:

$$ \mathbf{F}_{12} = \frac{1}{4\pi\epsilon_0} \frac{q_1 q_2}{R^2} \hat{\mathbf{a}}_{12} $$

Where:

*   $\epsilon_0$ is the permittivity of free space (vacuum) $\approx 8.854 \times 10^{-12} \text{ F/m}$.
*   $R$ is the distance between the two charges.
*   $\hat{\mathbf{a}}_{12}$ is a unit vector pointing from $q_1$ to $q_2$.

**Important Points:**

*   The force is attractive if the charges have opposite signs and repulsive if they have the same sign.
*   The constant $\frac{1}{4\pi\epsilon_0}$ is often written as $k$, where $k = 8.987 \times 10^9 \text{ Nm}^2/\text{C}^2$.
*   In a medium with permittivity $\epsilon$, the force is reduced by a factor of $\frac{\epsilon}{\epsilon_0} = \epsilon_r$ (relative permittivity or dielectric constant).
    $$ \mathbf{F}_{12} = \frac{1}{4\pi\epsilon} \frac{q_1 q_2}{R^2} \hat{\mathbf{a}}_{12} $$

**Reference:** Sadiku, Chapter 2.1; Hayt & Buck, Chapter 2.1.

### 1.2 Electric Field Intensity ($\mathbf{E}$)

**Key Concept:** The electric field intensity at a point is the force per unit positive test charge placed at that point.

**Definition:** The electric field intensity $\mathbf{E}$ at a point $P$ due to a source charge $Q$ is defined as the force $\mathbf{F}$ experienced by a positive test charge $q_t$ placed at $P$, divided by the test charge:

$$ \mathbf{E} = \lim_{q_t \to 0} \frac{\mathbf{F}}{q_t} $$

**Mathematical Formulation:**

If a point charge $Q$ is located at the origin, the electric field intensity at a point $P$ with position vector $\mathbf{r}$ is:

$$ \mathbf{E} = \frac{1}{4\pi\epsilon_0} \frac{Q}{r^2} \hat{\mathbf{a}}_r $$

Where:

*   $r$ is the distance from the source charge $Q$ to point $P$.
*   $\hat{\mathbf{a}}_r$ is the unit vector pointing from $Q$ to $P$.

**Important Points:**

*   The electric field is a vector quantity.
*   The unit of electric field intensity is Volts per meter (V/m) or Newtons per Coulomb (N/C).
*   The electric field exists even if there is no test charge present; it is a property of the source charge and the space around it.

**Reference:** Sadiku, Chapter 2.1; Hayt & Buck, Chapter 2.1.

---

## 2. Force and Field Due to System of Charges

### 2.1 Principle of Superposition

**Key Concept:** The electric field at any point due to a system of charges is the vector sum of the electric fields due to each individual charge.

**Mathematical Formulation:**

For a system of $N$ point charges $q_1, q_2, ..., q_N$ located at positions $\mathbf{r}_1, \mathbf{r}_2, ..., \mathbf{r}_N$, the electric field intensity $\mathbf{E}$ at a point $P$ with position vector $\mathbf{r}$ is:

$$ \mathbf{E}(\mathbf{r}) = \sum_{i=1}^{N} \mathbf{E}_i(\mathbf{r}) = \sum_{i=1}^{N} \frac{1}{4\pi\epsilon_0} \frac{q_i}{|\mathbf{r} - \mathbf{r}_i|^2} \frac{\mathbf{r} - \mathbf{r}_i}{|\mathbf{r} - \mathbf{r}_i|} $$

**Example:**

Find the electric field at the origin due to two point charges: $q_1 = 1 \mu C$ at $(1, 0, 0)$ and $q_2 = -2 \mu C$ at $(0, 1, 0)$.

*   Position vector of $q_1$: $\mathbf{r}_1 = \hat{\mathbf{i}}$
*   Position vector of $q_2$: $\mathbf{r}_2 = \hat{\mathbf{j}}$
*   Point of interest: origin, $\mathbf{r} = 0$.

Force from $q_1$ on a test charge at the origin:
$\mathbf{F}_{1} = \frac{1}{4\pi\epsilon_0} \frac{q_1 q_t}{(1)^2} \hat{\mathbf{a}}_{10}$
$\hat{\mathbf{a}}_{10}$ is a unit vector from $(1,0,0)$ to $(0,0,0)$, which is $-\hat{\mathbf{i}}$.
$\mathbf{E}_1 = \frac{1}{4\pi\epsilon_0} \frac{1 \times 10^{-6}}{1^2} (-\hat{\mathbf{i}}) = -9 \times 10^3 \hat{\mathbf{i}} \text{ V/m}$ (assuming $1/(4\pi\epsilon_0) = 9 \times 10^9$)

Force from $q_2$ on a test charge at the origin:
$\mathbf{F}_{2} = \frac{1}{4\pi\epsilon_0} \frac{q_2 q_t}{(\sqrt{1^2+1^2})^2} \hat{\mathbf{a}}_{20}$
$\hat{\mathbf{a}}_{20}$ is a unit vector from $(0,1,0)$ to $(0,0,0)$, which is $-\hat{\mathbf{j}}$.
$\mathbf{E}_2 = \frac{1}{4\pi\epsilon_0} \frac{-2 \times 10^{-6}}{(\sqrt{2})^2} (-\hat{\mathbf{j}}) = \frac{1}{4\pi\epsilon_0} \frac{-2 \times 10^{-6}}{2} (-\hat{\mathbf{j}}) = 9 \times 10^9 \times (-1 \times 10^{-6}) (-\hat{\mathbf{j}}) = 9 \times 10^3 \hat{\mathbf{j}} \text{ V/m}$

Total Electric Field:
$\mathbf{E} = \mathbf{E}_1 + \mathbf{E}_2 = -9 \times 10^3 \hat{\mathbf{i}} + 9 \times 10^3 \hat{\mathbf{j}} \text{ V/m}$

**Reference:** Sadiku, Chapter 2.2; Hayt & Buck, Chapter 2.2.

---

## 3. Gauss's Law - Integral Form

**Key Concept:** Gauss's Law relates the electric flux through a closed surface to the net charge enclosed within that surface. It is particularly useful for calculating electric fields when there is symmetry.

**Definition:** The total electric flux out of any closed surface is equal to the total electric charge enclosed within that surface.

**Mathematical Formulation:**

$$ \oint_S \mathbf{E} \cdot d\mathbf{S} = \frac{Q_{enc}}{\epsilon_0} $$

Where:

*   $\oint_S$ denotes the integral over the closed surface $S$.
*   $\mathbf{E}$ is the electric field intensity.
*   $d\mathbf{S} = \hat{\mathbf{n}} dS$ is a differential surface area vector, where $\hat{\mathbf{n}}$ is the outward unit normal vector.
*   $Q_{enc}$ is the total charge enclosed by the surface $S$.

**Important Points:**

*   Gauss's Law is a fundamental law of electromagnetism, derived from Coulomb's Law.
*   The choice of the closed surface (Gaussian surface) is crucial for simplifying the calculation. The surface should be chosen such that $\mathbf{E}$ is either perpendicular or parallel to $d\mathbf{S}$, or $\mathbf{E}$ is constant over the surface.
*   This law is applicable to any distribution of charge, but it is most useful for symmetric charge distributions.

**Reference:** Sadiku, Chapter 4.1; Hayt & Buck, Chapter 4.1.

---

## 4. Electric Flux Density ($\mathbf{D}$)

**Key Concept:** Electric flux density is a vector field that represents the "flow" of electric flux, independent of the medium's permittivity.

**Definition:** Electric flux density $\mathbf{D}$ is defined in terms of the electric field intensity $\mathbf{E}$ and the permittivity of the medium $\epsilon$:

$$ \mathbf{D} = \epsilon \mathbf{E} $$

**Mathematical Formulation (Gauss's Law in terms of $\mathbf{D}$):**

Gauss's Law can also be expressed in terms of $\mathbf{D}$:

$$ \oint_S \mathbf{D} \cdot d\mathbf{S} = Q_{enc} $$

**Important Points:**

*   The unit of $\mathbf{D}$ is Coulombs per square meter ($C/m^2$).
*   $\mathbf{D}$ is a more fundamental quantity than $\mathbf{E}$ when dealing with materials, as it is independent of the material's permittivity.
*   In vacuum, $\epsilon = \epsilon_0$, so $\mathbf{D} = \epsilon_0 \mathbf{E}$.

**Reference:** Sadiku, Chapter 4.2; Hayt & Buck, Chapter 4.2.

---

## 5. Fields Due to Line, Surface, and Volume Charge Distributions

When charges are not concentrated at points but are distributed over lines, surfaces, or volumes, we need to integrate Coulomb's law or use Gauss's law to find the electric field.

### 5.1 Field Due to Line of Charge

**Key Concept:** A line charge distribution has charge per unit length.

**Definition:** A line charge distribution is characterized by a linear charge density $\rho_l$ (charge per unit length), typically in C/m.

**Mathematical Formulation:**

For a differential length element $dl'$ of a line charge with density $\rho_l$, the differential electric field $d\mathbf{E}$ at point $P$ is:

$$ d\mathbf{E} = \frac{1}{4\pi\epsilon_0} \frac{\rho_l dl'}{|\mathbf{r} - \mathbf{r}'|^2} \frac{\mathbf{r} - \mathbf{r}'}{|\mathbf{r} - \mathbf{r}'|} $$

The total electric field is obtained by integrating this expression over the entire line charge.

$$ \mathbf{E} = \int_{L'} d\mathbf{E} = \int_{L'} \frac{1}{4\pi\epsilon_0} \frac{\rho_l dl'}{|\mathbf{r} - \mathbf{r}'|^2} \frac{\mathbf{r} - \mathbf{r}'}{|\mathbf{r} - \mathbf{r}'|} $$

**Example (Infinite Line Charge):**

Consider an infinitely long straight line charge along the z-axis with uniform linear charge density $\rho_l$. We can use Gauss's Law with a cylindrical Gaussian surface of radius $\rho$ and height $h$, centered on the z-axis.

*   The electric field will be radial, $\mathbf{E} = E_\rho \hat{\mathbf{a}}_\rho$.
*   The flux through the top and bottom caps of the cylinder is zero because $\mathbf{E}$ is perpendicular to the normal vector $\hat{\mathbf{a}}_z$.
*   The flux through the cylindrical surface is $E_\rho \cdot (2\pi \rho h)$.
*   The enclosed charge is $Q_{enc} = \rho_l h$.

Applying Gauss's Law:

$$ \oint_S \mathbf{E} \cdot d\mathbf{S} = E_\rho (2\pi \rho h) = \frac{\rho_l h}{\epsilon_0} $$

Solving for $E_\rho$:

$$ E_\rho = \frac{\rho_l}{2\pi \epsilon_0 \rho} $$

So, the electric field for an infinite line charge is:

$$ \mathbf{E} = \frac{\rho_l}{2\pi \epsilon_0 \rho} \hat{\mathbf{a}}_\rho $$

**Reference:** Sadiku, Chapter 2.3, 4.3; Hayt & Buck, Chapter 2.3, 4.2.

### 5.2 Field Due to Surface of Charge

**Key Concept:** A surface charge distribution has charge per unit area.

**Definition:** A surface charge distribution is characterized by a surface charge density $\rho_s$ (charge per unit area), typically in $C/m^2$.

**Mathematical Formulation:**

For a differential area element $dS'$ of a surface charge with density $\rho_s$, the differential electric field $d\mathbf{E}$ at point $P$ is:

$$ d\mathbf{E} = \frac{1}{4\pi\epsilon_0} \frac{\rho_s dS'}{|\mathbf{r} - \mathbf{r}'|^2} \frac{\mathbf{r} - \mathbf{r}'}{|\mathbf{r} - \mathbf{r}'|} $$

The total electric field is obtained by integrating this expression over the entire surface.

$$ \mathbf{E} = \int_S d\mathbf{E} = \int_S \frac{1}{4\pi\epsilon_0} \frac{\rho_s dS'}{|\mathbf{r} - \mathbf{r}'|^2} \frac{\mathbf{r} - \mathbf{r}'}{|\mathbf{r} - \mathbf{r}'|} $$

**Example (Infinite Sheet of Charge):**

Consider an infinite sheet of charge in the xy-plane with uniform surface charge density $\rho_s$. Using Gauss's Law with a cylindrical Gaussian surface passing perpendicularly through the sheet, with cross-sectional area $A$ and height $2h$:

*   The electric field will be perpendicular to the sheet, $\mathbf{E} = E_z \hat{\mathbf{a}}_z$.
*   The flux through the side walls of the cylinder is zero as $\mathbf{E}$ is parallel to the surface.
*   The flux through the top and bottom caps is $E_z \cdot A$ for each cap, so $2 E_z A$ in total.
*   The enclosed charge is $Q_{enc} = \rho_s A$.

Applying Gauss's Law:

$$ \oint_S \mathbf{E} \cdot d\mathbf{S} = 2 E_z A = \frac{\rho_s A}{\epsilon_0} $$

Solving for $E_z$:

$$ E_z = \frac{\rho_s}{2\epsilon_0} $$

So, the electric field for an infinite sheet of charge is:

$$ \mathbf{E} = \frac{\rho_s}{2\epsilon_0} \hat{\mathbf{a}}_n $$

Where $\hat{\mathbf{a}}_n$ is the unit normal vector pointing away from the sheet.

**Reference:** Sadiku, Chapter 2.4, 4.4; Hayt & Buck, Chapter 4.2.

### 5.3 Field Due to Volume of Charge

**Key Concept:** A volume charge distribution has charge per unit volume.

**Definition:** A volume charge distribution is characterized by a volume charge density $\rho_v$ (charge per unit volume), typically in $C/m^3$.

**Mathematical Formulation:**

For a differential volume element $dv'$ of a volume charge with density $\rho_v$, the differential electric field $d\mathbf{E}$ at point $P$ is:

$$ d\mathbf{E} = \frac{1}{4\pi\epsilon_0} \frac{\rho_v dv'}{|\mathbf{r} - \mathbf{r}'|^2} \frac{\mathbf{r} - \mathbf{r}'}{|\mathbf{r} - \mathbf{r}'|} $$

The total electric field is obtained by integrating this expression over the entire volume.

$$ \mathbf{E} = \int_V d\mathbf{E} = \int_V \frac{1}{4\pi\epsilon_0} \frac{\rho_v dv'}{|\mathbf{r} - \mathbf{r}'|^2} \frac{\mathbf{r} - \mathbf{r}'}{|\mathbf{r} - \mathbf{r}'|} $$

**Example (Uniformly Charged Sphere):**

For a uniformly charged sphere of radius $R$ and volume charge density $\rho_v$, we would use Gauss's Law.

*   **Outside the sphere ($r > R$):** Choose a spherical Gaussian surface of radius $r$. The enclosed charge is $Q_{enc} = \rho_v \frac{4}{3}\pi R^3$.
    $$ \oint_S \mathbf{E} \cdot d\mathbf{S} = E_r (4\pi r^2) = \frac{\rho_v \frac{4}{3}\pi R^3}{\epsilon_0} $$
    $$ E_r = \frac{\rho_v R^3}{3\epsilon_0 r^2} = \frac{Q_{total}}{4\pi\epsilon_0 r^2} $$
    This is the same field as a point charge at the center.

*   **Inside the sphere ($r < R$):** Choose a spherical Gaussian surface of radius $r$. The enclosed charge is $Q_{enc} = \rho_v \frac{4}{3}\pi r^3$.
    $$ \oint_S \mathbf{E} \cdot d\mathbf{S} = E_r (4\pi r^2) = \frac{\rho_v \frac{4}{3}\pi r^3}{\epsilon_0} $$
    $$ E_r = \frac{\rho_v r}{3\epsilon_0} $$

**Reference:** Sadiku, Chapter 2.5, 4.5; Hayt & Buck, Chapter 4.3.

---

## Important Points to Remember

*   **Coulomb's Law:** Force between point charges.
*   **Electric Field:** Force per unit test charge.
*   **Superposition Principle:** Vector sum of fields from multiple charges.
*   **Gauss's Law:** Relates flux through a closed surface to enclosed charge. Crucial for symmetric problems.
*   **Electric Flux Density ($\mathbf{D}$):** $\mathbf{D} = \epsilon \mathbf{E}$. In vacuum, $\mathbf{D} = \epsilon_0 \mathbf{E}$.
*   **Charge Distributions:**
    *   Line charge density ($\rho_l$): C/m
    *   Surface charge density ($\rho_s$): C/m$^2$
    *   Volume charge density ($\rho_v$): C/m$^3$
*   **Symmetry is Key:** Gauss's Law is most effective when there is high symmetry (spherical, cylindrical, planar).

---

## Practice Questions and Exercises

**Q1. (Point Charge Field):** A point charge of $+50 \mu C$ is located at $(2, -1, -1)$. Find the electric field intensity at point $P(8, 2, -3)$.

**Answer:**
The position vector of the charge is $\mathbf{r}_q = 2\hat{\mathbf{i}} - \hat{\mathbf{j}} - \hat{\mathbf{k}}$.
The position vector of point $P$ is $\mathbf{r}_p = 8\hat{\mathbf{i}} + 2\hat{\mathbf{j}} - 3\hat{\mathbf{k}}$.
The vector from the charge to point $P$ is $\mathbf{R} = \mathbf{r}_p - \mathbf{r}_q = (8-2)\hat{\mathbf{i}} + (2-(-1))\hat{\mathbf{j}} + (-3-(-1))\hat{\mathbf{k}} = 6\hat{\mathbf{i}} + 3\hat{\mathbf{j}} - 2\hat{\mathbf{k}}$.
The distance $R = |\mathbf{R}| = \sqrt{6^2 + 3^2 + (-2)^2} = \sqrt{36 + 9 + 4} = \sqrt{49} = 7$.
The unit vector $\hat{\mathbf{a}}_R = \frac{\mathbf{R}}{R} = \frac{6\hat{\mathbf{i}} + 3\hat{\mathbf{j}} - 2\hat{\mathbf{k}}}{7}$.
The electric field intensity is:
$\mathbf{E} = \frac{1}{4\pi\epsilon_0} \frac{q}{R^2} \hat{\mathbf{a}}_R = (9 \times 10^9) \frac{50 \times 10^{-6}}{7^2} \left(\frac{6\hat{\mathbf{i}} + 3\hat{\mathbf{j}} - 2\hat{\mathbf{k}}}{7}\right)$
$\mathbf{E} = (9 \times 10^9) \frac{50 \times 10^{-6}}{49} \left(\frac{6\hat{\mathbf{i}} + 3\hat{\mathbf{j}} - 2\hat{\mathbf{k}}}{7}\right)$
$\mathbf{E} = \frac{450 \times 10^3}{49 \times 7} (6\hat{\mathbf{i}} + 3\hat{\mathbf{j}} - 2\hat{\mathbf{k}})$
$\mathbf{E} = \frac{450000}{343} (6\hat{\mathbf{i}} + 3\hat{\mathbf{j}} - 2\hat{\mathbf{k}}) \approx 1311.95 (6\hat{\mathbf{i}} + 3\hat{\mathbf{j}} - 2\hat{\mathbf{k}})$
$\mathbf{E} \approx 7871.7 \hat{\mathbf{i}} + 3935.9 \hat{\mathbf{j}} - 2623.9 \hat{\mathbf{k}} \text{ V/m}$.

**Q2. (Gauss's Law Application):** An infinite volume charge with uniform density $\rho_v$ fills the region $x^2 + y^2 \le a^2$. Find the electric field $\mathbf{E}$ inside and outside the cylinder.

**Answer:**
This requires a cylindrical Gaussian surface.
*   **Inside ($r \le a$):** $Q_{enc} = \rho_v (\pi r^2 h)$.
    $\oint_S \mathbf{E} \cdot d\mathbf{S} = E_r (2\pi r h) = \frac{\rho_v \pi r^2 h}{\epsilon_0}$
    $E_r = \frac{\rho_v r}{2\epsilon_0}$. Thus, $\mathbf{E} = \frac{\rho_v r}{2\epsilon_0} \hat{\mathbf{a}}_r$.
*   **Outside ($r \ge a$):** $Q_{enc} = \rho_v (\pi a^2 h)$.
    $\oint_S \mathbf{E} \cdot d\mathbf{S} = E_r (2\pi r h) = \frac{\rho_v \pi a^2 h}{\epsilon_0}$
    $E_r = \frac{\rho_v a^2}{2\epsilon_0 r}$. Thus, $\mathbf{E} = \frac{\rho_v a^2}{2\epsilon_0 r} \hat{\mathbf{a}}_r$.

**Q3. (Line Charge Field):** A finite length line charge $\rho_l$ lies on the z-axis from $z=0$ to $z=L$. Find the electric field at a point $(0, y, 0)$ on the y-axis.

**Answer:**
This involves integration of the Coulomb's Law formula for a line charge.
$d\mathbf{E} = \frac{1}{4\pi\epsilon_0} \frac{\rho_l dz'}{(y^2 + (z')^2)} \frac{-(z')\hat{\mathbf{k}} + y\hat{\mathbf{j}}}{\sqrt{y^2 + (z')^2}}$.
Integrating from $z'=0$ to $z'=L$ and considering symmetry, we get:
$\mathbf{E} = \frac{\rho_l}{4\pi\epsilon_0} \left[ \frac{L}{\sqrt{y^2 + L^2}} \frac{1}{y} \hat{\mathbf{j}} + \frac{1}{y} \hat{\mathbf{j}} \right]$ (This is a simplified result, the full derivation requires careful integration.)
The vector pointing from the source element $dz'$ at $(0,0,z')$ to the point $(0,y,0)$ is $\mathbf{R} = y\hat{\mathbf{j}} - z'\hat{\mathbf{k}}$.
$R = \sqrt{y^2 + (z')^2}$.
$\hat{\mathbf{a}}_R = \frac{y\hat{\mathbf{j}} - z'\hat{\mathbf{k}}}{\sqrt{y^2 + (z')^2}}$.
$d\mathbf{E} = \frac{1}{4\pi\epsilon_0} \frac{\rho_l dz'}{(y^2 + (z')^2)} \frac{y\hat{\mathbf{j}} - z'\hat{\mathbf{k}}}{\sqrt{y^2 + (z')^2}} = \frac{\rho_l}{4\pi\epsilon_0} \frac{y\hat{\mathbf{j}} - z'\hat{\mathbf{k}}}{(y^2 + (z')^2)^{3/2}} dz'$.
Integrating for $\mathbf{E}$:
$\mathbf{E} = \int_0^L \frac{\rho_l}{4\pi\epsilon_0} \frac{y\hat{\mathbf{j}} - z'\hat{\mathbf{k}}}{(y^2 + (z')^2)^{3/2}} dz'$
$\mathbf{E} = \frac{\rho_l}{4\pi\epsilon_0} \left[ y\hat{\mathbf{j}} \int_0^L \frac{dz'}{(y^2 + (z')^2)^{3/2}} - \hat{\mathbf{k}} \int_0^L \frac{z' dz'}{(y^2 + (z')^2)^{3/2}} \right]$.
Using standard integrals:
$\int \frac{dx}{(a^2+x^2)^{3/2}} = \frac{x}{a^2\sqrt{a^2+x^2}}$.
$\int \frac{x dx}{(a^2+x^2)^{3/2}} = -\frac{1}{\sqrt{a^2+x^2}}$.
So,
$\mathbf{E} = \frac{\rho_l}{4\pi\epsilon_0} \left[ y\hat{\mathbf{j}} \left( \frac{z'}{y^2\sqrt{y^2+(z')^2}} \right|_0^L \right) - \hat{\mathbf{k}} \left( -\frac{1}{\sqrt{y^2+(z')^2}} \right|_0^L \right]$
$\mathbf{E} = \frac{\rho_l}{4\pi\epsilon_0} \left[ y\hat{\mathbf{j}} \left( \frac{L}{y^2\sqrt{y^2+L^2}} \right) + \hat{\mathbf{k}} \left( \frac{1}{\sqrt{y^2+L^2}} - \frac{1}{y} \right) \right]$
$\mathbf{E} = \frac{\rho_l}{4\pi\epsilon_0} \left[ \frac{L}{y\sqrt{y^2+L^2}} \hat{\mathbf{j}} + \left( \frac{1}{\sqrt{y^2+L^2}} - \frac{1}{y} \right) \hat{\mathbf{k}} \right]$.

---

This module provides the foundational principles of electrostatics, essential for understanding all subsequent topics in electromagnetic theory. Mastering these concepts, particularly the use of vector calculus and the application of Gauss's Law for symmetric charge distributions, will be crucial for success.
