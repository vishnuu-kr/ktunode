---
title: "Electrostatic Fields in material media : Gauss’s law - point form, Electric potential, Relation between E and V, Field due to electric dipole, Energy density in static electric fields, Conduction and Convection Current, Ohm’s law in point form, Resistance,"
subject: "ELECTROMAGNETIC THEORY"
module: "Module 2: Electrostatic Fields in material media : Gauss’s law "
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f361b2"
status: "completed"
scrapedAt: "2026-05-23T16:21:50.636Z"
---
# Electromagnetic Theory - Module 2: Electrostatic Fields in Material Media & Gauss's Law

This module delves into the behavior of electrostatic fields within various material media, building upon the fundamental principles of Gauss's Law. We will explore the point form of Gauss's Law, the concept of electric potential, the relationship between electric field and potential, and the characteristics of electric dipoles. Furthermore, we will examine energy storage in electrostatic fields, the nature of electric currents (conduction and convection), Ohm's Law in its differential form, and the concept of resistance.

---

## **Module 2: Electrostatic Fields in Material Media & Gauss's Law**

### **1. Gauss's Law in Point Form**

Gauss's Law, in its integral form, relates the electric flux through a closed surface to the enclosed charge:

$$ \oint_S \mathbf{D} \cdot d\mathbf{S} = Q_{enc} $$

Where:
*   $\mathbf{D}$ is the electric displacement field.
*   $d\mathbf{S}$ is the differential area vector.
*   $Q_{enc}$ is the total charge enclosed by the surface $S$.

**Key Concept: Divergence Theorem**
The divergence theorem relates a volume integral of the divergence of a vector field to the surface integral of that vector field over the boundary of the volume:

$$ \oint_S \mathbf{A} \cdot d\mathbf{S} = \int_V (\nabla \cdot \mathbf{A}) dV $$

**Derivation of Gauss's Law in Point Form:**
Applying the divergence theorem to Gauss's Law:

$$ \int_V (\nabla \cdot \mathbf{D}) dV = Q_{enc} $$

The enclosed charge can also be expressed as the volume integral of the volume charge density $\rho_v$:

$$ Q_{enc} = \int_V \rho_v dV $$

Equating the two volume integrals:

$$ \int_V (\nabla \cdot \mathbf{D}) dV = \int_V \rho_v dV $$

For this equality to hold for any arbitrary volume $V$, the integrands must be equal:

$$ \nabla \cdot \mathbf{D} = \rho_v $$

This is the **point form of Gauss's Law**. It states that the divergence of the electric displacement field at any point is equal to the volume charge density at that point.

**Significance:**
*   **Local Relationship:** This form establishes a local relationship between the electric field (represented by $\mathbf{D}$) and its source (charge density).
*   **Fundamental Law:** It's a fundamental law of electrostatics, analogous to the divergence of the electric field being related to charge density.
*   **Vector Calculus Application (CO1):** Demonstrates the application of the divergence operator, a core concept in vector calculus, to electrostatic phenomena.

**Textbook Reference:**
*   Sadiku, Chapter 2: Electric Fields in Dielectrics. Hayt & Buck, Chapter 4: Conductors and Dielectrics.

**Example:**
Consider a uniformly charged sphere of radius $R$ and volume charge density $\rho_v$.
*   **Inside the sphere ($r < R$):** Using Gauss's Law in point form, $\nabla \cdot \mathbf{D} = \rho_v$. For spherical symmetry, $\mathbf{D} = D_r(r) \hat{\mathbf{r}}$. Then $\nabla \cdot \mathbf{D} = \frac{1}{r^2} \frac{\partial}{\partial r}(r^2 D_r) = \rho_v$. Integrating, we find $D_r(r) = \frac{\rho_v r}{3}$.
*   **Outside the sphere ($r > R$):** For $r > R$, the enclosed charge density is zero. Thus, $\nabla \cdot \mathbf{D} = 0$, implying $\mathbf{D} = 0$ in regions outside the sphere if there are no other charges.

---

### **2. Electric Potential (V)**

Electric potential is a scalar quantity that represents the amount of potential energy per unit charge at a point in an electric field.

**Definition:**
The electric potential difference between two points $A$ and $B$ in an electric field $\mathbf{E}$ is defined as the work done by the electric field in moving a unit positive charge from $A$ to $B$.

$$ V_{BA} = V_B - V_A = -\int_A^B \mathbf{E} \cdot d\mathbf{l} $$

The absolute electric potential $V$ at a point $P$ with respect to a reference point (usually infinity) is the work done by the field in moving a unit positive charge from the reference point to $P$.

$$ V(P) = -\int_{\text{ref}}^P \mathbf{E} \cdot d\mathbf{l} $$

**Key Concepts:**
*   **Scalar Quantity:** Unlike the electric field, potential is a scalar, making calculations easier.
*   **Conservative Field:** The electric field is conservative, meaning the work done is independent of the path taken.
*   **Units:** Measured in Volts (V), where 1 Volt = 1 Joule/Coulomb.

**Reference Point:** For isolated charges or systems, the potential at infinity is usually taken as zero.

**Textbook Reference:**
*   Sadiku, Chapter 2: Electric Potential. Hayt & Buck, Chapter 4: Electric Potential.

**Example:**
Consider a point charge $Q$ at the origin. The electric field is $\mathbf{E} = \frac{Q}{4\pi\epsilon_0 r^2} \hat{\mathbf{r}}$.
The potential at a distance $r$ from the charge is:

$$ V(r) = -\int_\infty^r \frac{Q}{4\pi\epsilon_0 r'^2} \hat{\mathbf{r}} \cdot d\mathbf{l} $$

Taking $d\mathbf{l} = dr' \hat{\mathbf{r}}$:

$$ V(r) = -\int_\infty^r \frac{Q}{4\pi\epsilon_0 r'^2} dr' = -\frac{Q}{4\pi\epsilon_0} \left[ -\frac{1}{r'} \right]_\infty^r = \frac{Q}{4\pi\epsilon_0 r} $$

This is the potential due to a point charge.

---

### **3. Relation between E and V**

The electric field and electric potential are intimately related. The electric field is the negative gradient of the electric potential.

**Key Equation:**
$$ \mathbf{E} = -\nabla V $$

Where:
*   $\mathbf{E}$ is the electric field vector.
*   $\nabla$ is the del operator (gradient operator).
*   $V$ is the electric potential scalar field.

**Explanation:**
The gradient of a scalar field points in the direction of the greatest rate of increase of the scalar field. The negative sign indicates that the electric field points in the direction of the greatest rate of decrease of the electric potential. Lines of constant potential are called equipotential lines (or surfaces in 3D). The electric field is always perpendicular to these equipotential lines/surfaces.

**Vector Calculus Application (CO1):**
This relation highlights the fundamental link between a vector field ($\mathbf{E}$) and its associated scalar potential field ($V$) through the gradient operator.

**Components in Different Coordinate Systems:**
*   **Cartesian:** $\mathbf{E} = -\left(\frac{\partial V}{\partial x}\hat{\mathbf{a}}_x + \frac{\partial V}{\partial y}\hat{\mathbf{a}}_y + \frac{\partial V}{\partial z}\hat{\mathbf{a}}_z\right)$
*   **Cylindrical:** $\mathbf{E} = -\left(\frac{\partial V}{\partial \rho}\hat{\mathbf{a}}_\rho + \frac{1}{\rho}\frac{\partial V}{\partial \phi}\hat{\mathbf{a}}_\phi + \frac{\partial V}{\partial z}\hat{\mathbf{a}}_z\right)$
*   **Spherical:** $\mathbf{E} = -\left(\frac{\partial V}{\partial r}\hat{\mathbf{a}}_r + \frac{1}{r\sin\theta}\frac{\partial V}{\partial \theta}\hat{\mathbf{a}}_\theta + \frac{1}{r\sin\theta}\frac{\partial V}{\partial \phi}\hat{\mathbf{a}}_\phi\right)$

**Textbook Reference:**
*   Sadiku, Chapter 2: Electric Potential. Hayt & Buck, Chapter 4: Electric Potential.

**Example:**
If the electric potential is given by $V(x,y,z) = x^2y + y^2z + z^2x$, then the electric field is:

$$ \mathbf{E} = -\nabla(x^2y + y^2z + z^2x) $$
$$ \mathbf{E} = -\left(\frac{\partial}{\partial x}(x^2y + y^2z + z^2x)\hat{\mathbf{a}}_x + \frac{\partial}{\partial y}(x^2y + y^2z + z^2x)\hat{\mathbf{a}}_y + \frac{\partial}{\partial z}(x^2y + y^2z + z^2x)\hat{\mathbf{a}}_z\right) $$
$$ \mathbf{E} = -(2xy + z^2)\hat{\mathbf{a}}_x - (x^2 + 2yz)\hat{\mathbf{a}}_y - (y^2 + 2zx)\hat{\mathbf{a}}_z $$

---

### **4. Field Due to Electric Dipole**

An electric dipole consists of two equal and opposite charges separated by a small distance.

**Key Concepts:**
*   **Dipole Moment ($\mathbf{p}$):** A vector quantity defined as the product of the charge magnitude ($q$) and the vector pointing from the negative to the positive charge ($d$):
    $$ \mathbf{p} = q\mathbf{d} $$
    The unit of dipole moment is Coulomb-meter (C-m).
*   **Dipole Potential:** The potential at a point $P$ due to a dipole located at the origin is given by:
    $$ V(\mathbf{r}) = \frac{1}{4\pi\epsilon_0} \frac{\mathbf{p} \cdot \mathbf{r}}{r^3} $$
    Where $\mathbf{r}$ is the position vector of point $P$ from the dipole center.
*   **Dipole Field:** The electric field can be found by taking the negative gradient of the dipole potential. For a dipole aligned along the z-axis ($\mathbf{p} = p\hat{\mathbf{z}}$), the field in spherical coordinates is:
    $$ \mathbf{E}(\mathbf{r}) = \frac{p}{4\pi\epsilon_0 r^3} (2\cos\theta\hat{\mathbf{a}}_r + \sin\theta\hat{\mathbf{a}}_\theta) $$
    Where $\theta$ is the angle between $\mathbf{p}$ and $\mathbf{r}$.

**Significance:**
*   **Molecular Physics:** Dipoles are fundamental to understanding the behavior of molecules in electric fields (e.g., polarization).
*   **Electromagnetic Radiation:** Dipoles are a primary source of electromagnetic radiation.
*   **CO2 Application:** Understanding how electric fields are generated by charge distributions.

**Textbook Reference:**
*   Sadiku, Chapter 2: Dipoles. Hayt & Buck, Chapter 4: Electric Dipole.

**Example:**
Consider a dipole with $\mathbf{p} = 5 \times 10^{-10} \hat{\mathbf{z}}$ C-m at the origin. Find the potential at point $P(r=2, \theta=\pi/4, \phi=0)$ in spherical coordinates.

$$ V(r, \theta, \phi) = \frac{1}{4\pi\epsilon_0} \frac{\mathbf{p} \cdot \mathbf{r}}{r^3} $$
Here, $\mathbf{p} \cdot \mathbf{r} = (5 \times 10^{-10} \hat{\mathbf{z}}) \cdot (2 \hat{\mathbf{r}}) = 10 \times 10^{-10} \cos(\pi/4)$ since $\hat{\mathbf{z}} \cdot \hat{\mathbf{r}} = \cos\theta$.
$$ \mathbf{p} \cdot \mathbf{r} = 10 \times 10^{-10} \times \frac{\sqrt{2}}{2} = 5\sqrt{2} \times 10^{-10} \text{ C-m}^2 $$
$$ V = \frac{1}{4\pi\epsilon_0} \frac{5\sqrt{2} \times 10^{-10}}{(2)^3} = (9 \times 10^9) \frac{5\sqrt{2} \times 10^{-10}}{8} \approx 6.36 \text{ V} $$

---

### **5. Energy Density in Static Electric Fields**

Energy is stored in the electric field itself. Energy density refers to the amount of energy stored per unit volume.

**Key Concepts:**
*   **Work Done to Assemble Charges:** The energy stored in an electrostatic field is equal to the work done to assemble the charges from infinity to their final positions.
*   **Energy Density ($w_e$):**
    $$ w_e = \frac{1}{2} \epsilon |\mathbf{E}|^2 $$
    Where:
    *   $\epsilon$ is the permittivity of the medium.
    *   $|\mathbf{E}|$ is the magnitude of the electric field.

**Total Stored Energy:** The total energy stored in a volume $V$ is the integral of the energy density over that volume:

$$ W_e = \int_V w_e dV = \int_V \frac{1}{2} \epsilon |\mathbf{E}|^2 dV $$

**Alternative Expression using $\mathbf{D}$ and $V$:**
Since $\mathbf{E} = -\nabla V$, and assuming a linear, isotropic medium where $\mathbf{D} = \epsilon\mathbf{E}$:

$$ W_e = \frac{1}{2} \int_V \mathbf{D} \cdot \mathbf{E} dV $$

**Significance:**
*   **Energy Storage:** Explains how electric fields can store energy.
*   **Capacitors:** Crucial for understanding the energy storage capacity of capacitors.
*   **CO2 Application:** Relates to the energy associated with electric fields in different configurations.

**Textbook Reference:**
*   Sadiku, Chapter 2: Energy Stored in an Electric Field. Hayt & Buck, Chapter 4: Energy and Energy Density.

**Example:**
Consider a parallel-plate capacitor with plate area $A$ and separation $d$, filled with a dielectric of permittivity $\epsilon$. The electric field between the plates is $E = V/d$, where $V$ is the voltage.

The energy density is $w_e = \frac{1}{2} \epsilon \left(\frac{V}{d}\right)^2$.
The total stored energy is $W_e = w_e \times (\text{Volume}) = \frac{1}{2} \epsilon \left(\frac{V}{d}\right)^2 \times (Ad) = \frac{1}{2} \frac{\epsilon A}{d} V^2$.
Since capacitance $C = \frac{\epsilon A}{d}$, we get $W_e = \frac{1}{2} CV^2$, which is the familiar formula for energy stored in a capacitor.

---

### **6. Conduction and Convection Current**

Current is the flow of electric charge. We distinguish between two types: conduction and convection.

**6.1 Conduction Current**

**Definition:**
Conduction current is the flow of electric charge through a conductive medium due to an applied electric field. This is the most common type of current.

**Key Concepts:**
*   **Drift Velocity ($\mathbf{u}_d$):** The average velocity attained by charge carriers in a material due to an electric field.
*   **Current Density ($\mathbf{J}$):** The amount of charge flowing per unit area per unit time.
    $$ \mathbf{J} = \rho_v \mathbf{u}_d $$
    Where $\rho_v$ is the volume charge density of the charge carriers.
*   **Conductivity ($\sigma$):** A material property that quantifies how easily charge carriers move through it.
*   **Total Conduction Current ($I$):** The integral of the current density over a surface $S$:
    $$ I = \oint_S \mathbf{J} \cdot d\mathbf{S} $$

**Textbook Reference:**
*   Sadiku, Chapter 1: Electric Current. Hayt & Buck, Chapter 4: Conductors and Dielectrics.

**Example:**
In a wire of cross-sectional area $A$ carrying current $I$, the current density is $J = I/A$ (assuming uniform current distribution). If the charge carriers are electrons with charge density $\rho_e$ and drift velocity $u_d$, then $J = -\rho_e u_d$.

---

**6.2 Convection Current**

**Definition:**
Convection current is the flow of electric charge due to the physical movement of charged bodies or particles. The charges themselves are moving.

**Key Concepts:**
*   **No External Electric Field Required:** Unlike conduction current, convection current can exist without an applied electric field causing the drift.
*   **Charge Velocity ($\mathbf{v}$):** The velocity of the charged particles or bodies.
*   **Convection Current Density ($\mathbf{J}_{conv}$):**
    $$ \mathbf{J}_{conv} = \rho_v \mathbf{v} $$
    Where $\rho_v$ is the volume charge density of the moving charges.

**Examples:**
*   **Moving Charged Particles:** An electron beam in a vacuum tube.
*   **Charged Objects:** A charged rotating disk or a charged cloud.
*   **Fluid Flow:** If the fluid is charged, its flow constitutes a convection current.

**Difference from Conduction Current:**
The key distinction lies in the mechanism of charge transport. Conduction current is charge movement *within* a conductor driven by an electric field. Convection current is the movement of *charged entities themselves*.

**Textbook Reference:**
*   Hayt & Buck, Chapter 4: Conductors and Dielectrics (may discuss charge movement in general). Sadiku focuses more on conduction.

**Example:**
Consider a charged belt moving at a velocity $\mathbf{v}$. If the belt has a uniform surface charge density $\rho_s$ and width $w$ moving in the y-direction, the convection current density would be related to $\rho_s \mathbf{v}$.

---

### **7. Ohm's Law in Point Form**

Ohm's Law, in its macroscopic form, relates voltage, current, and resistance. The point form extends this to the microscopic level.

**Key Concepts:**
*   **Relationship between $\mathbf{J}$ and $\mathbf{E}$:** Ohm's Law in point form states that the current density $\mathbf{J}$ at a point in a conductive medium is directly proportional to the electric field $\mathbf{E}$ at that point.
*   **Ohmic Materials:** Materials that obey this relationship are called ohmic.
*   **Conductivity ($\sigma$):** The constant of proportionality between $\mathbf{J}$ and $\mathbf{E}$.

**Equation:**
$$ \mathbf{J} = \sigma \mathbf{E} $$

**Derivation from Macroscopic Ohm's Law:**
For a uniform conductor of length $l$ and cross-sectional area $A$, the macroscopic Ohm's Law is $V = IR$.
We know $\mathbf{E} = - \nabla V \approx - (V/l) \hat{\mathbf{a}}_l$ (assuming a uniform field along the length).
And $I = \oint_S \mathbf{J} \cdot d\mathbf{S} = JA$ (assuming current is perpendicular to area).
Resistance $R = l/(\sigma A)$.
Substituting these into $V = IR$:
$(El) = (JA) (l/\sigma A)$
$El = J l / \sigma$
$E = J / \sigma \implies \mathbf{J} = \sigma \mathbf{E}$.

**Conductance and Resistivity:**
*   **Conductivity ($\sigma$):** Inverse of resistivity. Units: Siemens per meter (S/m).
*   **Resistivity ($\rho_r$):** The inverse of conductivity ($\rho_r = 1/\sigma$). It's a measure of a material's opposition to current flow. Units: Ohm-meter ($\Omega$-m).

**Significance:**
*   **Microscopic Behavior:** Describes current flow at the material level.
*   **Material Properties:** Directly relates current density to electric field via material conductivity.
*   **Vector Calculus Application (CO1, CO2):** Connects field concepts ($\mathbf{E}$) with charge transport ($\mathbf{J}$) through material properties ($\sigma$).

**Textbook Reference:**
*   Sadiku, Chapter 1: Ohm's Law. Hayt & Buck, Chapter 4: Conductors and Dielectrics.

**Example:**
In a copper wire with conductivity $\sigma = 5.8 \times 10^7$ S/m, and an electric field of $E = 0.01$ V/m, the current density is:
$J = \sigma E = (5.8 \times 10^7 \text{ S/m}) \times (0.01 \text{ V/m}) = 5.8 \times 10^5 \text{ A/m}^2$.

---

### **8. Resistance**

Resistance is a property of an electrical component that opposes the flow of electric current.

**Definition:**
Resistance ($R$) is the ratio of the voltage difference ($V$) across a component to the current ($I$) flowing through it.

$$ R = \frac{V}{I} $$

**Key Concepts:**
*   **Ohmic Resistance:** For ohmic materials, resistance is constant and independent of voltage or current.
*   **Relationship to Material Properties:** Resistance of a conductor depends on its material (resistivity), length, and cross-sectional area.
    $$ R = \frac{\rho_r l}{A} = \frac{l}{\sigma A} $$
    Where:
    *   $\rho_r$ is resistivity.
    *   $l$ is the length of the conductor.
    *   $A$ is the cross-sectional area.
    *   $\sigma$ is conductivity.
*   **Power Dissipation:** Resistance causes energy loss in the form of heat (Joule heating).
    $$ P = I^2R = \frac{V^2}{R} = VI $$

**Units:** Measured in Ohms ($\Omega$).

**Significance:**
*   **Circuit Analysis:** A fundamental parameter in analyzing electrical circuits.
*   **Energy Conversion:** Resistance is responsible for converting electrical energy into heat.
*   **CO2 Application:** Understanding how materials impede current flow is crucial for predicting circuit behavior.

**Textbook Reference:**
*   Sadiku, Chapter 1: Resistance. Hayt & Buck, Chapter 4: Conductors and Dielectrics.

**Example:**
A 10-meter long aluminum wire with a cross-sectional area of $2 \text{ mm}^2$ has a resistivity of $\rho_r = 2.82 \times 10^{-8} \Omega$-m. Calculate its resistance.

$$ R = \frac{\rho_r l}{A} = \frac{(2.82 \times 10^{-8} \Omega\text{-m})(10 \text{ m})}{2 \times 10^{-6} \text{ m}^2} $$
$$ R = \frac{28.2 \times 10^{-8}}{2 \times 10^{-6}} \Omega = 14.1 \times 10^{-2} \Omega = 0.141 \Omega $$

---

### **Important Points to Remember:**

*   **Gauss's Law in Point Form ($\nabla \cdot \mathbf{D} = \rho_v$):** A local statement relating electric displacement field divergence to charge density.
*   **$\mathbf{E} = -\nabla V$:** The electric field is the negative gradient of the electric potential. Electric field lines are perpendicular to equipotential surfaces.
*   **Dipole Moment ($\mathbf{p} = q\mathbf{d}$):** A measure of the strength and orientation of an electric dipole.
*   **Energy Density ($w_e = \frac{1}{2}\epsilon |\mathbf{E}|^2$):** Energy is stored in the electric field.
*   **Current Density ($\mathbf{J}$):** Flow of charge per unit area. Conduction current is driven by $\mathbf{E}$, convection current is due to physical movement of charges.
*   **Ohm's Law in Point Form ($\mathbf{J} = \sigma \mathbf{E}$):** Relates current density to electric field via conductivity.
*   **Resistance ($R = \rho_r l / A$):** Opposition to current flow, dependent on material properties and geometry.

---

### **Practice Questions and Exercises**

**Question 1 (Gauss's Law Point Form):**
A spherically symmetric charge distribution has a volume charge density $\rho_v(r) = \rho_0 (1 - r/R)$ for $0 \le r \le R$ and $\rho_v(r) = 0$ for $r > R$. Find the electric displacement field $\mathbf{D}$ everywhere.

**Answer:**
*   **For $r \le R$**:
    $Q_{enc} = \int_0^r \rho_v(r') 4\pi r'^2 dr' = \int_0^r \rho_0 (1 - r'/R) 4\pi r'^2 dr'$
    $Q_{enc} = 4\pi \rho_0 \int_0^r (r'^2 - r'^3/R) dr' = 4\pi \rho_0 \left[\frac{r'^3}{3} - \frac{r'^4}{4R}\right]_0^r$
    $Q_{enc} = 4\pi \rho_0 \left(\frac{r^3}{3} - \frac{r^4}{4R}\right)$
    Using Gauss's Law, $D_r(r) \cdot 4\pi r^2 = Q_{enc}$
    $D_r(r) = \frac{\rho_0}{r^2} \left(\frac{r^3}{3} - \frac{r^4}{4R}\right) = \rho_0 \left(\frac{r}{3} - \frac{r^2}{4R}\right)$
    $\mathbf{D}(r) = \rho_0 \left(\frac{r}{3} - \frac{r^2}{4R}\right) \hat{\mathbf{r}}$

*   **For $r > R$**:
    $Q_{enc} = \int_0^R \rho_v(r') 4\pi r'^2 dr' = 4\pi \rho_0 \left(\frac{R^3}{3} - \frac{R^4}{4R}\right) = 4\pi \rho_0 \left(\frac{R^3}{3} - \frac{R^3}{4}\right) = 4\pi \rho_0 \frac{R^3}{12} = \frac{\pi \rho_0 R^3}{3}$
    $D_r(r) \cdot 4\pi r^2 = Q_{enc}$
    $D_r(r) = \frac{Q_{enc}}{4\pi r^2} = \frac{\pi \rho_0 R^3 / 3}{4\pi r^2} = \frac{\rho_0 R^3}{12 r^2}$
    $\mathbf{D}(r) = \frac{\rho_0 R^3}{12 r^2} \hat{\mathbf{r}}$

**Question 2 (E and V Relation):**
If the electric potential in a region of space is given by $V(x, y, z) = 5x^2 - 3y^2 + 2z$. Find the electric field $\mathbf{E}$ in that region.

**Answer:**
$\mathbf{E} = -\nabla V = -\left(\frac{\partial V}{\partial x}\hat{\mathbf{a}}_x + \frac{\partial V}{\partial y}\hat{\mathbf{a}}_y + \frac{\partial V}{\partial z}\hat{\mathbf{a}}_z\right)$
$\mathbf{E} = -\left(10x \hat{\mathbf{a}}_x - 6y \hat{\mathbf{a}}_y + 2 \hat{\mathbf{a}}_z\right)$
$\mathbf{E} = -10x \hat{\mathbf{a}}_x + 6y \hat{\mathbf{a}}_y - 2 \hat{\mathbf{a}}_z$

**Question 3 (Dipole Field):**
A dipole with moment $\mathbf{p} = 10 \hat{\mathbf{z}}$ nC-m is located at the origin. Calculate the electric field at a point $P$ which is 1 meter away from the origin along the z-axis.

**Answer:**
For a point on the z-axis ($\theta=0$), $\mathbf{p} \cdot \mathbf{r} = p r \cos(0) = pr$.
The dipole field formula in spherical coordinates:
$\mathbf{E}(\mathbf{r}) = \frac{p}{4\pi\epsilon_0 r^3} (2\cos\theta\hat{\mathbf{a}}_r + \sin\theta\hat{\mathbf{a}}_\theta)$
At $\theta=0$, $\cos\theta=1$ and $\sin\theta=0$.
$\mathbf{E}(r, 0, 0) = \frac{p}{4\pi\epsilon_0 r^3} (2\hat{\mathbf{a}}_r) = \frac{2p}{4\pi\epsilon_0 r^3} \hat{\mathbf{a}}_r$
Given $p = 10 \times 10^{-9}$ C-m and $r = 1$ m:
$\mathbf{E} = \frac{2 \times (10 \times 10^{-9} \text{ C-m})}{4\pi (8.854 \times 10^{-12} \text{ F/m}) (1 \text{ m})^3} \hat{\mathbf{a}}_r$
$\mathbf{E} = \frac{20 \times 10^{-9}}{1.112 \times 10^{-10}} \hat{\mathbf{a}}_r \approx 180 \hat{\mathbf{a}}_r$ V/m.
Since the point is on the z-axis, $\hat{\mathbf{a}}_r = \hat{\mathbf{z}}$.
So, $\mathbf{E} = 180 \hat{\mathbf{z}}$ V/m.

**Question 4 (Ohm's Law and Resistance):**
A cylindrical conductor of length $L$ and radius $a$ is made of a material with resistivity $\rho_r$.
(a) Find the resistance of the conductor.
(b) If a voltage $V$ is applied across the ends of the conductor, find the electric field $\mathbf{E}$ and the current density $\mathbf{J}$ inside the conductor.

**Answer:**
(a) The cross-sectional area is $A = \pi a^2$.
$R = \frac{\rho_r L}{A} = \frac{\rho_r L}{\pi a^2}$

(b) The electric field is approximately uniform along the length if the voltage is applied uniformly across the ends.
$E = \frac{V}{L}$ (magnitude)
Assuming the conductor is aligned along the z-axis and voltage is applied such that $V(L) - V(0) = V$, then $\mathbf{E} = -\frac{V}{L} \hat{\mathbf{z}}$ (if potential decreases along z) or $\mathbf{E} = \frac{V}{L} \hat{\mathbf{z}}$ (if potential increases along z). Let's assume $\mathbf{E} = \frac{V}{L} \hat{\mathbf{z}}$.
Using Ohm's Law in point form, $\mathbf{J} = \sigma \mathbf{E} = \frac{1}{\rho_r} \mathbf{E}$.
$\mathbf{J} = \frac{1}{\rho_r} \frac{V}{L} \hat{\mathbf{z}} = \frac{V}{\rho_r L} \hat{\mathbf{z}}$.
We can verify this with $I = JA = \frac{V}{\rho_r L} (\pi a^2)$.
And $R = V/I = V / \frac{V \pi a^2}{\rho_r L} = \frac{\rho_r L}{\pi a^2}$, which matches part (a).

---

### **Alignment with Course Outcomes:**

*   **CO1 (Vector Calculus):**
    *   Gauss's Law in point form ($\nabla \cdot \mathbf{D} = \rho_v$) uses the divergence operator.
    *   Relation between $\mathbf{E}$ and $V$ ($\mathbf{E} = -\nabla V$) uses the gradient operator.
    *   Current density and total current involve vector integrals.

*   **CO2 (Compute Fields in Different Media):**
    *   The entire module deals with fields in media (dielectrics, conductors).
    *   Calculating $\mathbf{D}$ and $\mathbf{E}$ due to various charge distributions in materials.
    *   Understanding how conductivity ($\sigma$) affects fields.

*   **CO3 (Deduce Maxwell-Heaviside Equations):**
    *   Gauss's Law in point form is one of Maxwell's equations.
    *   Ohm's Law in point form is crucial for understanding conduction current, which is a component in one of Maxwell's equations (Ampere's Law with displacement current, $\nabla \times \mathbf{H} = \mathbf{J} + \frac{\partial \mathbf{D}}{\partial t}$, where $\mathbf{J}$ is often $\sigma\mathbf{E}$).

*   **CO4 & CO5 (Electromagnetic Waves/Transmission Lines):**
    *   While this module focuses on electrostatics, the understanding of fields, potentials, energy density, and current is foundational for later modules on dynamics and wave propagation. Concepts like permittivity and conductivity are critical parameters in wave propagation.

---

This comprehensive study note covers the key aspects of Module 2, aiming to provide a solid understanding of electrostatic fields in material media and Gauss's law, while aligning with the stated learning and course outcomes. Remember to consult the provided textbooks for deeper insights and additional examples.
