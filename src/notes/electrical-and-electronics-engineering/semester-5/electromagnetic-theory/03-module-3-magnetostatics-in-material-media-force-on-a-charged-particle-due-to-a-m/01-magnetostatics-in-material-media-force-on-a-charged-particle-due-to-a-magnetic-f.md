---
title: "Magnetostatics in Material Media : Force on a charged particle due to a magnetic field, Force between two current carrying conductors, Magnetic Torque and Moment, Magnetization in materials, Magnetic boundary conditions, Inductance, Energy stored in magnetostatic fields."
subject: "ELECTROMAGNETIC THEORY"
module: "Module 3: Magnetostatics in Material Media : Force on a charged particle due to a magnetic field, Force between two current carrying conductors, Magnetic Torque and Moment, Magnetization in materials, Magnetic boundary conditions, Inductance, Energy stored in magnetostatic fields."
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f361b6"
status: "completed"
scrapedAt: "2026-05-23T16:21:52.827Z"
---
# Module 3: Magnetostatics in Material Media

This module delves into the behavior of magnetic fields within material media, expanding on the fundamental principles of magnetostatics. We will explore forces on charged particles and current-carrying conductors, the concepts of magnetic torque and moment, how materials respond to magnetic fields (magnetization), the conditions at material interfaces (boundary conditions), and the phenomena of inductance and energy storage.

## 1. Force on a Charged Particle due to a Magnetic Field (Lorentz Force)

**Key Concept:** A charged particle moving in a magnetic field experiences a force perpendicular to both its velocity and the magnetic field direction.

**Definition:** The Lorentz force is the combined force experienced by a charged particle due to electric and magnetic fields. In this context, we focus solely on the magnetic component.

**Formula:**
The magnetic force ($\mathbf{F}_m$) on a charge $q$ moving with velocity $\mathbf{v}$ in a magnetic field $\mathbf{B}$ is given by:

$$ \mathbf{F}_m = q (\mathbf{v} \times \mathbf{B}) $$

**Characteristics of the Lorentz Force:**

*   **Direction:** Determined by the right-hand rule for the cross product of $\mathbf{v}$ and $\mathbf{B}$.
*   **Magnitude:** $|\mathbf{F}_m| = |q| |\mathbf{v}| |\mathbf{B}| \sin(\theta)$, where $\theta$ is the angle between $\mathbf{v}$ and $\mathbf{B}$.
*   **Work Done:** The magnetic force does no work on a charged particle because it is always perpendicular to the velocity ($\mathbf{F}_m \cdot \mathbf{v} = 0$). This means a magnetic field can change the direction of motion but not the kinetic energy of a charged particle.

**Examples:**

*   **Circular Motion:** If a charged particle enters a uniform magnetic field perpendicular to its velocity, it will move in a circular path. The magnetic force acts as the centripetal force.
    *   Centripetal force: $F_c = \frac{mv^2}{r}$
    *   Lorentz force: $F_m = qvB$
    *   Equating them: $qvB = \frac{mv^2}{r} \implies r = \frac{mv}{qB}$ (Radius of circular path)
    *   Angular frequency: $\omega = \frac{v}{r} = \frac{qB}{m}$ (Cyclotron frequency)
*   **Helical Motion:** If a charged particle enters a uniform magnetic field with a velocity component parallel and perpendicular to the field, it will follow a helical path. The component parallel to the field remains unchanged, while the component perpendicular to the field results in circular motion.

**Textbook References:**
*   **Sadiku:** Chapter 5 (Magnetic Force and Torque)
*   **Hayt & Buck:** Chapter 5 (Magnetic Forces and Fields)

**Alignment with Course Outcomes:**
*   **CO1 (K3):** Applying vector cross product to determine force direction.
*   **CO2 (K3):** Understanding how velocity and magnetic field in different media influence force.

## 2. Force Between Two Current Carrying Conductors

**Key Concept:** Parallel conductors carrying currents in the same direction attract each other, while those with currents in opposite directions repel each other.

**Derivation:**

Consider two long, straight, parallel conductors separated by a distance $d$.
*   Conductor 1 carries current $I_1$.
*   Conductor 2 carries current $I_2$.

The magnetic field produced by conductor 1 at the location of conductor 2 is given by Ampere's Law (for a long straight wire):

$$ \mathbf{B}_1 = \frac{\mu_0 I_1}{2\pi d} \hat{\mathbf{a}}_\phi $$

where $\hat{\mathbf{a}}_\phi$ is a unit vector tangential to the circular path around conductor 1. The direction of $\mathbf{B}_1$ depends on the direction of $I_1$ and the right-hand rule.

Now, conductor 2 carrying current $I_2$ is in this magnetic field $\mathbf{B}_1$. The force per unit length ($d\mathbf{F}/dL$) on conductor 2 is due to the Lorentz force on the moving charges within it. The current $I_2$ can be thought of as a collection of charge carriers moving with a drift velocity. The force density is $\mathbf{J} \times \mathbf{B}$, and for a conductor of cross-sectional area $A$, the force is $\int_V (\mathbf{J} \times \mathbf{B}) dV$. For a current $I$, this simplifies to $I (\mathbf{L} \times \mathbf{B})$.

So, the force per unit length on conductor 2 is:

$$ \frac{d\mathbf{F}_2}{dL} = I_2 (\hat{\mathbf{l}} \times \mathbf{B}_1) $$

where $\hat{\mathbf{l}}$ is the unit vector in the direction of $I_2$.

If $I_1$ and $I_2$ are in the same direction, and we consider the force on conductor 2:

*   Assume $I_1$ is in the $+\hat{\mathbf{z}}$ direction, conductor 2 is at $(d, 0)$ in cylindrical coordinates, and $I_2$ is in the $+\hat{\mathbf{z}}$ direction.
*   $\mathbf{B}_1$ at conductor 2 is in the $-\hat{\mathbf{y}}$ direction (using right-hand rule).
*   $\mathbf{F}_2/dL = I_2 (\hat{\mathbf{z}} \times (-\hat{\mathbf{y}})) = I_2 (-\hat{\mathbf{x}}) = -I_2 \hat{\mathbf{x}}$.
*   This means the force on conductor 2 is towards conductor 1 (attractive).

If $I_1$ and $I_2$ are in opposite directions, the force will be repulsive.

**Magnitude of Force per Unit Length:**

$$ \left|\frac{d\mathbf{F}}{dL}\right| = \frac{\mu_0 I_1 I_2}{2\pi d} $$

**Definition of Ampere:** The Ampere is defined such that two infinitely long parallel conductors, each carrying one Ampere and separated by one meter in vacuum, experience a force of $2 \times 10^{-7}$ Newtons per meter.

**Textbook References:**
*   **Sadiku:** Chapter 5 (Force Between Parallel Wires)
*   **Hayt & Buck:** Chapter 5 (Force Between Parallel Wires)

**Alignment with Course Outcomes:**
*   **CO1 (K3):** Applying vector cross product and understanding force direction.
*   **CO2 (K3):** Calculating magnetic fields produced by currents and forces in different media (using $\mu$ instead of $\mu_0$).

## 3. Magnetic Torque and Moment

**Key Concepts:**
*   **Magnetic Torque:** A current loop in a magnetic field experiences a torque that tends to align it with the field.
*   **Magnetic Dipole Moment:** A vector quantity characterizing the strength and orientation of a magnetic dipole.

**Magnetic Torque on a Current Loop:**

Consider a planar current loop with area $A$ carrying current $I$ placed in a uniform magnetic field $\mathbf{B}$. The force on each segment $d\mathbf{l}$ of the loop is $d\mathbf{F} = I (d\mathbf{l} \times \mathbf{B})$. The torque ($\mathbf{T}$) about the origin is given by $\mathbf{T} = \mathbf{r} \times d\mathbf{F}$, where $\mathbf{r}$ is the position vector from the origin to the segment.

For a planar loop, the net torque is given by:

$$ \mathbf{T} = I \mathbf{A} \times \mathbf{B} $$

where $\mathbf{A}$ is the vector area of the loop. The direction of $\mathbf{A}$ is given by the right-hand rule (thumb in the direction of current, fingers curl in the direction of $\mathbf{A}$).

**Magnetic Dipole Moment ($\mathbf{m}$):**

The magnetic dipole moment of a current loop is defined as:

$$ \mathbf{m} = I \mathbf{A} $$

Therefore, the torque can be expressed as:

$$ \mathbf{T} = \mathbf{m} \times \mathbf{B} $$

**Potential Energy of a Magnetic Dipole:**

The potential energy ($U$) of a magnetic dipole in an external magnetic field is:

$$ U = -\mathbf{m} \cdot \mathbf{B} $$

The dipole tends to orient itself such that its potential energy is minimized, which occurs when $\mathbf{m}$ is aligned with $\mathbf{B}$.

**Examples:**

*   **Electric Motor:** The torque on a current loop in a magnetic field is the fundamental principle behind electric motors.
*   **Compass Needle:** A compass needle is a small magnetic dipole that aligns itself with the Earth's magnetic field.

**Textbook References:**
*   **Sadiku:** Chapter 5 (Magnetic Torque)
*   **Hayt & Buck:** Chapter 5 (Torque on a Current Loop)

**Alignment with Course Outcomes:**
*   **CO1 (K3):** Applying vector cross product for torque calculation.
*   **CO2 (K3):** Understanding how magnetic fields influence current loops in materials.

## 4. Magnetization in Materials

**Key Concepts:**
*   **Magnetic Susceptibility ($\chi_m$):** A dimensionless quantity that measures how much a material is magnetized in response to an applied magnetic field.
*   **Magnetic Permeability ($\mu$):** A measure of a material's ability to support the formation of a magnetic field within itself.
*   **Magnetic Field Intensity ($\mathbf{H}$):** A vector field related to the magnetic flux density and magnetization.

**Magnetization Vector ($\mathbf{M}$):**

When a material is placed in a magnetic field, its constituent atoms or molecules may develop magnetic dipoles. Magnetization ($\mathbf{M}$) is the magnetic dipole moment per unit volume.

$$ \mathbf{M} = \frac{1}{V} \sum_{i=1}^N \mathbf{m}_i $$

**Relationship between $\mathbf{B}$, $\mathbf{H}$, and $\mathbf{M}$:**

In material media, the magnetic flux density $\mathbf{B}$ is related to the applied magnetic field and the material's response. The magnetic field intensity $\mathbf{H}$ is a concept introduced to simplify calculations in materials, essentially representing the magnetic field that would exist without the material.

In general:
$$ \mathbf{B} = \mu_0 (\mathbf{H} + \mathbf{M}) $$

**Constitutive Relations for Different Materials:**

The relationship between $\mathbf{H}$ and $\mathbf{M}$ depends on the type of material.

*   **Diamagnetic Materials:**
    *   $\mathbf{M}$ is weakly induced in the direction opposite to $\mathbf{H}$.
    *   $\chi_m < 0$ (small negative value, typically $10^{-5}$ to $10^{-6}$).
    *   $\mu_r = 1 + \chi_m < 1$ (slightly less than 1).
    *   $\mu = \mu_0 \mu_r \approx \mu_0$.
    *   Example: Water, copper, gold.

*   **Paramagnetic Materials:**
    *   $\mathbf{M}$ is weakly induced in the same direction as $\mathbf{H}$.
    *   $\chi_m > 0$ (small positive value, typically $10^{-3}$ to $10^{-5}$).
    *   $\mu_r = 1 + \chi_m > 1$ (slightly greater than 1).
    *   $\mu = \mu_0 \mu_r \approx \mu_0$.
    *   Example: Aluminum, platinum, oxygen.

*   **Ferromagnetic Materials:**
    *   $\mathbf{M}$ is strongly induced in the same direction as $\mathbf{H}$, leading to very high magnetization.
    *   $\chi_m$ can be very large and is not constant; it depends on the history of the field (hysteresis).
    *   $\mu_r$ can be in the hundreds or thousands.
    *   $\mu = \mu_0 \mu_r$ is significantly greater than $\mu_0$.
    *   Exhibit spontaneous magnetization even in the absence of an external field.
    *   Example: Iron, nickel, cobalt.

**Simplified Relation for Linear, Isotropic Materials:**

For linear and isotropic materials (where $\chi_m$ is a scalar and constant), we have:

$$ \mathbf{M} = \chi_m \mathbf{H} $$

Substituting this into the $\mathbf{B}$ equation:
$$ \mathbf{B} = \mu_0 (\mathbf{H} + \chi_m \mathbf{H}) = \mu_0 (1 + \chi_m) \mathbf{H} $$
$$ \mathbf{B} = \mu_0 \mu_r \mathbf{H} = \mu \mathbf{H} $$

where $\mu = \mu_0 \mu_r$ is the permeability of the material, and $\mu_r = 1 + \chi_m$ is the relative permeability.

**Origin of Magnetization:**

*   **Orbital motion of electrons:** Electrons orbiting the nucleus create tiny current loops.
*   **Spin of electrons:** Electrons possess intrinsic angular momentum, which gives them a magnetic dipole moment (like a spinning charge).

**Textbook References:**
*   **Sadiku:** Chapter 11 (Magnetization)
*   **Hayt & Buck:** Chapter 6 (Magnetic Properties of Materials)

**Alignment with Course Outcomes:**
*   **CO2 (K3):** Computing magnetic fields in different material media by understanding $\mu$ and $\chi_m$.
*   **CO3 (K3):** Understanding the role of $\mathbf{M}$ in relating Maxwell's equations in different media.

## 5. Magnetic Boundary Conditions

**Key Concept:** The behavior of magnetic fields ($\mathbf{B}$ and $\mathbf{H}$) at the interface between two different magnetic materials.

**Boundary Conditions:**

These are derived from the integral forms of Maxwell's equations. Consider an interface between material 1 (properties $\mu_1$) and material 2 (properties $\mu_2$).

1.  **Discontinuity in Magnetic Flux Density ($\mathbf{B}$):**
    The normal component of $\mathbf{B}$ is continuous across the boundary. This is because there are no magnetic "charges" (monopoles).

    $$ \mathbf{B}_1 \cdot \hat{\mathbf{n}}_{12} = \mathbf{B}_2 \cdot \hat{\mathbf{n}}_{12} $$
    or
    $$ B_{1n} = B_{2n} $$

    where $\hat{\mathbf{n}}_{12}$ is the unit normal vector pointing from material 1 to material 2.

2.  **Discontinuity in Magnetic Field Intensity ($\mathbf{H}$):**
    The tangential component of $\mathbf{H}$ is discontinuous across the boundary if there is a surface current density ($\mathbf{K}$) at the interface. If there is no surface current ($\mathbf{K}=0$), then the tangential component of $\mathbf{H}$ is continuous.

    $$ \hat{\mathbf{n}}_{12} \times (\mathbf{H}_2 - \mathbf{H}_1) = \mathbf{K} $$

    If $\mathbf{K} = 0$ (no free surface current):
    $$ \hat{\mathbf{n}}_{12} \times \mathbf{H}_2 = \hat{\mathbf{n}}_{12} \times \mathbf{H}_1 $$
    or
    $$ H_{1t} = H_{2t} $$

**Derived Relationships:**

Using $\mathbf{B} = \mu \mathbf{H}$, we can relate the tangential components of $\mathbf{B}$:

$$ \mathbf{H}_1 = \frac{\mathbf{B}_1}{\mu_1} \quad \text{and} \quad \mathbf{H}_2 = \frac{\mathbf{B}_2}{\mu_2} $$

Substituting into the tangential $\mathbf{H}$ boundary condition (assuming $\mathbf{K}=0$):

$$ \hat{\mathbf{n}}_{12} \times \left(\frac{\mathbf{B}_2}{\mu_2} - \frac{\mathbf{B}_1}{\mu_1}\right) = 0 $$

This implies that the tangential components of $\mathbf{B}/\mu$ are equal:

$$ \frac{B_{1t}}{\mu_1} = \frac{B_{2t}}{\mu_2} $$

**Summary of Boundary Conditions:**

*   **Normal Component of $\mathbf{B}$ is Continuous:** $B_{1n} = B_{2n}$
*   **Tangential Component of $\mathbf{H}$ is Continuous (if $\mathbf{K}=0$):** $H_{1t} = H_{2t}$
*   **Relationship between Tangential Components of $\mathbf{B}$:** $\frac{B_{1t}}{\mu_1} = \frac{B_{2t}}{\mu_2}$

**Example:**

Consider the interface between air ($\mu_a \approx \mu_0$) and a ferromagnetic material ($\mu_f \gg \mu_0$). If a magnetic field $\mathbf{B}_a$ in air has a tangential component $B_{at}$ and a normal component $B_{an}$, then in the ferromagnetic material:

*   $B_{fn} = B_{an}$
*   $\frac{B_{ft}}{\mu_f} = \frac{B_{at}}{\mu_a}$  $\implies B_{ft} = B_{at} \frac{\mu_f}{\mu_a}$

Since $\mu_f \gg \mu_a$, the tangential component of $\mathbf{B}$ in the ferromagnetic material will be much larger than in air. Conversely, the tangential component of $\mathbf{H}$ will be much smaller in the ferromagnetic material ($H_{ft} = B_{ft}/\mu_f = B_{at}/\mu_a = H_{at}$). This means the field lines tend to become more normal to the surface when entering a material with higher permeability.

**Textbook References:**
*   **Sadiku:** Chapter 9 (Boundary Value Problems in Cartesian Coordinates - although focus is on E-fields, principles apply) & Chapter 7 (Magnetostatic Boundary Conditions)
*   **Hayt & Buck:** Chapter 7 (Magnetic Boundary Conditions)
*   **Griffiths:** Chapter 5 (Electrodynamics - discusses boundary conditions for E and B fields)

**Alignment with Course Outcomes:**
*   **CO2 (K3):** Applying boundary conditions to determine magnetic fields across material interfaces.
*   **CO3 (K3):** Understanding how discontinuities in fields are managed at material interfaces.

## 6. Inductance

**Key Concepts:**
*   **Inductance (L):** A measure of a circuit element's ability to store energy in a magnetic field when an electric current flows through it. It is the ratio of magnetic flux linkage to the current.
*   **Self-Inductance:** Inductance of a single circuit element due to its own magnetic field.
*   **Mutual Inductance:** Inductance between two circuits due to the magnetic field of one linking the other.
*   **Flux Linkage ($\lambda$):** The total magnetic flux passing through all the turns of a coil. $\lambda = N\Phi$, where $N$ is the number of turns and $\Phi$ is the flux through each turn.

**Self-Inductance ($L_{11}$ or $L$):**

When a current $I_1$ flows through a circuit (coil), it produces a magnetic field. This field creates a magnetic flux $\Phi_{11}$ that passes through the circuit itself.

*   **Definition:** $L = \frac{\lambda}{I} = \frac{N\Phi}{I}$

The self-inductance $L$ is a geometric property of the circuit and the medium.

**Derivation of Inductance:**

1.  Assume a current $I$ flowing in the circuit.
2.  Calculate the magnetic field $\mathbf{H}$ produced by the current.
3.  Calculate the magnetic flux density $\mathbf{B} = \mu \mathbf{H}$.
4.  Calculate the total magnetic flux $\Phi$ passing through the circuit (or a reference surface).
5.  Calculate the flux linkage $\lambda = N\Phi$.
6.  Find $L = \lambda/I$.

**Examples:**

*   **Inductance of a Solenoid:**
    *   For a long solenoid of length $l$, radius $a$, and $N$ turns, carrying current $I$:
    *   Magnetic field inside: $H = NI/l$
    *   Magnetic flux density: $B = \mu NI/l$
    *   Flux through one turn (area $\pi a^2$): $\Phi = B (\pi a^2) = \mu \frac{NI}{l} (\pi a^2)$
    *   Flux linkage: $\lambda = N\Phi = N \left(\mu \frac{NI}{l} \pi a^2\right) = \mu \frac{N^2 \pi a^2}{l} I$
    *   Self-inductance: $L = \frac{\lambda}{I} = \frac{\mu N^2 (\pi a^2)}{l}$
    *   Note: $N/l$ is the number of turns per unit length.

*   **Inductance of a Toroid:** Similar calculations can be done for a toroid.

**Mutual Inductance ($L_{12}$ or $M_{12}$):**

When a current $I_1$ flows in circuit 1, it produces a magnetic field that may link with circuit 2, creating a flux $\Phi_{12}$ in circuit 2. Similarly, current $I_2$ in circuit 2 creates flux $\Phi_{21}$ in circuit 1.

*   **Definition:** $L_{12} = \frac{\lambda_2}{I_1} = \frac{N_2\Phi_{12}}{I_1}$ and $L_{21} = \frac{\lambda_1}{I_2} = \frac{N_1\Phi_{21}}{I_2}$

By Maxwell's reciprocity theorem, $L_{12} = L_{21}$ for stationary media. We often denote this as $M$.

**Applications:** Transformers, inductors in electronic circuits.

**Textbook References:**
*   **Sadiku:** Chapter 7 (Inductance)
*   **Hayt & Buck:** Chapter 7 (Inductance)
*   **Kraus & Carver:** Chapter 7 (Inductance)

**Alignment with Course Outcomes:**
*   **CO2 (K3):** Calculating inductance based on geometry and material properties ($\mu$).
*   **CO3 (K3):** Understanding the relationship between changing magnetic fields and induced voltages (Faraday's Law, not explicitly covered in this module's scope but foundational to inductance).

## 7. Energy Stored in Magnetostatic Fields

**Key Concept:** Energy is stored in the magnetic field generated by currents.

**Energy Density:**

The energy density ($w_m$) is the energy stored per unit volume in a magnetic field.

$$ w_m = \frac{1}{2} \mathbf{B} \cdot \mathbf{H} $$

In linear, isotropic materials:
$$ w_m = \frac{1}{2} (\mu \mathbf{H}) \cdot \mathbf{H} = \frac{1}{2} \mu H^2 $$
or
$$ w_m = \frac{1}{2} \mathbf{B} \cdot \left(\frac{\mathbf{B}}{\mu}\right) = \frac{1}{2} \frac{B^2}{\mu} $$

**Total Energy Stored:**

The total energy ($W$) stored in a magnetic field over a volume $V$ is the integral of the energy density:

$$ W = \int_V w_m \, dV = \int_V \frac{1}{2} \mathbf{B} \cdot \mathbf{H} \, dV $$

**Energy Stored in an Inductor:**

For an inductor with inductance $L$ carrying current $I$, the energy stored is:

$$ W = \frac{1}{2} L I^2 $$

**Derivation of Energy Stored:**

Consider building up the current in an inductor from 0 to $I$. The voltage across the inductor is $v = L \frac{dI}{dt}$. The power delivered to the inductor is $P = vI = L I \frac{dI}{dt}$.

The total energy supplied is the integral of power over time:
$$ W = \int_0^T P \, dt = \int_0^T L I \frac{dI}{dt} \, dt $$
$$ W = \int_0^I L I \, dI = \frac{1}{2} L I^2 $$

This energy is stored in the magnetic field created by the current.

**Relationship to Work Done:**
The energy stored in the magnetic field is equal to the total work done by the source in establishing the magnetic field by driving the current against the induced back EMF.

**Textbook References:**
*   **Sadiku:** Chapter 7 (Energy Stored in Magnetic Field)
*   **Hayt & Buck:** Chapter 7 (Energy Stored in Magnetic Field)

**Alignment with Course Outcomes:**
*   **CO2 (K3):** Calculating energy density and total energy in magnetic fields within materials.
*   **CO1 (K3):** Applying integration to sum up energy densities over a volume.

---

## Practice Questions and Answers

**Question 1:**
A proton ($q = 1.6 \times 10^{-19}$ C, $m = 1.67 \times 10^{-27}$ kg) moves with a velocity $\mathbf{v} = 10^6 \hat{\mathbf{x}}$ m/s in a uniform magnetic field $\mathbf{B} = 0.5 \hat{\mathbf{y}}$ T. Calculate the magnetic force acting on the proton.

**Answer 1:**
The Lorentz force is $\mathbf{F}_m = q (\mathbf{v} \times \mathbf{B})$.
$\mathbf{v} \times \mathbf{B} = (10^6 \hat{\mathbf{x}}) \times (0.5 \hat{\mathbf{y}}) = 0.5 \times 10^6 (\hat{\mathbf{x}} \times \hat{\mathbf{y}}) = 0.5 \times 10^6 \hat{\mathbf{z}}$ T m/s.
$\mathbf{F}_m = (1.6 \times 10^{-19} \text{ C}) \times (0.5 \times 10^6 \hat{\mathbf{z}} \text{ T m/s}) = 0.8 \times 10^{-13} \hat{\mathbf{z}}$ N.
The force is in the $+\hat{\mathbf{z}}$ direction.

**Question 2:**
Two parallel wires are 5 cm apart and carry currents of 10 A and 5 A in the same direction. Calculate the force per unit length between the wires.

**Answer 2:**
The force per unit length between two parallel wires is given by $\frac{dF}{dL} = \frac{\mu_0 I_1 I_2}{2\pi d}$.
Given: $I_1 = 10$ A, $I_2 = 5$ A, $d = 0.05$ m, $\mu_0 = 4\pi \times 10^{-7}$ T m/A.
$\frac{dF}{dL} = \frac{(4\pi \times 10^{-7} \text{ T m/A}) \times (10 \text{ A}) \times (5 \text{ A})}{2\pi \times 0.05 \text{ m}}$
$\frac{dF}{dL} = \frac{2 \times 10^{-7} \times 50}{0.05} = \frac{100 \times 10^{-7}}{0.05} = \frac{1 \times 10^{-5}}{0.05} = 20 \times 10^{-5} \text{ N/m} = 2 \times 10^{-4} \text{ N/m}$.
Since the currents are in the same direction, the force is attractive.

**Question 3:**
A rectangular coil of dimensions 2 cm $\times$ 3 cm has 100 turns and carries a current of 50 mA. It is placed in a uniform magnetic field of 0.2 T. What is the maximum torque the coil can experience?

**Answer 3:**
The torque on a current loop is $\mathbf{T} = \mathbf{m} \times \mathbf{B}$. The magnitude is $T = m B \sin\theta$.
The maximum torque occurs when $\sin\theta = 1$ (i.e., the loop area vector is perpendicular to the magnetic field).
Area $A = (0.02 \text{ m}) \times (0.03 \text{ m}) = 0.0006 \text{ m}^2$.
Current $I = 50 \text{ mA} = 0.05 \text{ A}$.
Number of turns $N = 100$.
Magnetic dipole moment $m = N I A = 100 \times 0.05 \text{ A} \times 0.0006 \text{ m}^2 = 0.003 \text{ A m}^2$.
Maximum Torque $T_{max} = m B = (0.003 \text{ A m}^2) \times (0.2 \text{ T}) = 0.0006 \text{ N m} = 6 \times 10^{-4} \text{ N m}$.

**Question 4:**
A material has a relative permeability of 500. If it is placed in a magnetic field intensity of 100 A/m, what is the magnetic flux density in the material? Assume the material is linear and isotropic.

**Answer 4:**
For linear, isotropic materials, $\mathbf{B} = \mu \mathbf{H} = \mu_0 \mu_r \mathbf{H}$.
Given: $\mu_r = 500$, $H = 100$ A/m, $\mu_0 = 4\pi \times 10^{-7}$ T m/A.
$B = (4\pi \times 10^{-7} \text{ T m/A}) \times 500 \times (100 \text{ A/m})$
$B = 4\pi \times 10^{-7} \times 5 \times 10^4 = 20\pi \times 10^{-3}$ T $\approx 62.8 \times 10^{-3}$ T = 62.8 mT.

**Question 5:**
At the interface between two magnetic materials, the normal component of $\mathbf{B}_1$ is $0.5$ T and the normal component of $\mathbf{B}_2$ is $0.5$ T. If the tangential component of $\mathbf{H}_1$ is $1000$ A/m and $\mu_1 = 100 \mu_0$, what is the tangential component of $\mathbf{H}_2$? Assume no surface current.

**Answer 5:**
The normal components of $\mathbf{B}$ are continuous: $B_{1n} = B_{2n} = 0.5$ T.
The tangential components of $\mathbf{H}$ are continuous if there is no surface current: $H_{1t} = H_{2t}$.
Therefore, $H_{2t} = 1000$ A/m.
(Note: The information about $\mathbf{B}_2$ and $\mu_1$ is not needed to find $H_{2t}$ if there's no surface current.)

**Question 6:**
A solenoid with inductance $L = 10$ mH carries a current of 2 A. Calculate the energy stored in its magnetic field.

**Answer 6:**
The energy stored in an inductor is $W = \frac{1}{2} L I^2$.
Given: $L = 10 \text{ mH} = 10 \times 10^{-3}$ H, $I = 2$ A.
$W = \frac{1}{2} \times (10 \times 10^{-3} \text{ H}) \times (2 \text{ A})^2$
$W = \frac{1}{2} \times 10 \times 10^{-3} \times 4 = 20 \times 10^{-3}$ J = 20 mJ.

---

## Important Points to Remember

*   **Lorentz Force:** $\mathbf{F} = q(\mathbf{v} \times \mathbf{B})$. Perpendicular to $\mathbf{v}$ and $\mathbf{B}$, does no work.
*   **Force on Current Element:** $d\mathbf{F} = I(d\mathbf{l} \times \mathbf{B})$.
*   **Force between Parallel Wires:** $dF/dL = \mu_0 I_1 I_2 / (2\pi d)$. Attraction for same direction, repulsion for opposite.
*   **Magnetic Torque:** $\mathbf{T} = \mathbf{m} \times \mathbf{B}$, where $\mathbf{m} = I\mathbf{A}$ is the magnetic dipole moment.
*   **Magnetization:** $\mathbf{M}$ is magnetic dipole moment per unit volume. $\mathbf{B} = \mu_0(\mathbf{H} + \mathbf{M})$.
*   **Constitutive Relation:** For linear, isotropic media: $\mathbf{B} = \mu \mathbf{H} = \mu_0 \mu_r \mathbf{H}$, and $\mathbf{M} = \chi_m \mathbf{H}$, with $\mu_r = 1 + \chi_m$.
*   **Boundary Conditions:**
    *   $B_{1n} = B_{2n}$ (Normal $\mathbf{B}$ is continuous)
    *   $H_{1t} = H_{2t}$ (Tangential $\mathbf{H}$ is continuous if $\mathbf{K}=0$)
    *   $B_{1t}/\mu_1 = B_{2t}/\mu_2$ (Tangential $\mathbf{B}$ components relationship)
*   **Inductance:** $L = N\Phi/I$. Relates flux linkage to current.
*   **Energy Stored:** $W = \int \frac{1}{2} \mathbf{B} \cdot \mathbf{H} \, dV = \frac{1}{2} L I^2$. Energy is stored in the magnetic field.

---

This comprehensive set of notes covers the key concepts, definitions, formulas, and applications for Module 3: Magnetostatics in Material Media, aligning with the provided learning and course outcomes. Remember to consult your textbooks (Sadiku and Hayt/Buck) for detailed derivations and further examples.
