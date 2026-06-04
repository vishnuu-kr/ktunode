---
title: "Maxwell’s equation from fundamental laws."
subject: "ELECTROMAGNETICS"
module: "Module 2: Maxwell’s equation from fundamental laws."
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c45fb09ce205780fe8d0"
status: "completed"
scrapedAt: "2026-05-23T17:56:28.997Z"
---
# ELECTROMAGNETICS - Module 2: Maxwell’s Equations from Fundamental Laws

This module delves into the foundational laws of electromagnetism and demonstrates how they are unified and extended by Maxwell's Equations. We will explore the mathematical framework, the physical significance of each equation, and their implications for understanding electromagnetic phenomena.

**Course Outcomes Addressed:**
*   **CO1:** Summarize the basic mathematical concepts related to electromagnetic vector fields. (Knowledge Level: K2)
*   **CO2:** Apply Maxwell’s equations in different forms to diverse electromagnetic problems. (Knowledge Level: K3)

**Textbook References:**
*   Elements of Electromagnetics by Matthew N. O. Sadiku (Sadiku)
*   Engineering Electromagnetics by William Hayt and John Buck (Hayt & Buck)
*   Electromagnetic Waves and Transmission Lines by Y Mallikarjuna Reddy (Reddy)

**Reference Book References:**
*   Schaum’s Outline of Elctromagnetics by Mahmood Nahvi; Joseph Edminister (Schaum's)
*   Engineering Electromagnetics Essentials by B N Basu (Basu)

---

## 1. Introduction to Fundamental Laws of Electromagnetism

Before diving into Maxwell's Equations, it's crucial to recall the fundamental laws upon which they are built. These laws describe the behavior of electric and magnetic fields and their sources (charges and currents).

### 1.1 Coulomb's Law

**Definition:** Coulomb's Law quantifies the electrostatic force between two point charges.
*   The force is directly proportional to the product of the magnitudes of the charges.
*   The force is inversely proportional to the square of the distance between them.
*   The force acts along the line joining the two charges.

**Mathematical Formulation:**
$$ \mathbf{F} = \frac{1}{4\pi\epsilon_0} \frac{q_1 q_2}{r^2} \hat{\mathbf{r}} $$
Where:
*   $\mathbf{F}$ is the force vector.
*   $q_1, q_2$ are the magnitudes of the two point charges.
*   $r$ is the distance between the charges.
*   $\hat{\mathbf{r}}$ is the unit vector pointing from one charge to the other.
*   $\epsilon_0$ is the permittivity of free space ($\approx 8.854 \times 10^{-12} \, \text{F/m}$).

**Key Concept:** The force between charges can be attractive (opposite charges) or repulsive (like charges).

**Sadiku:** Chapter 2 covers electrostatics and Coulomb's Law in detail.
**Hayt & Buck:** Chapter 2 also provides a thorough treatment of electrostatics and Coulomb's Law.

### 1.2 Gauss's Law for Electric Fields

**Definition:** Gauss's Law relates the electric flux through any closed surface to the net electric charge enclosed within that surface.

**Mathematical Formulation (Integral Form):**
$$ \oint_S \mathbf{D} \cdot d\mathbf{S} = Q_{enc} $$
Where:
*   $\mathbf{D}$ is the electric flux density (or electric displacement).
*   $d\mathbf{S}$ is an infinitesimal area vector element of the closed surface $S$.
*   $Q_{enc}$ is the total charge enclosed by the surface $S$.

**Relationship with Electric Field:** $\mathbf{D} = \epsilon_0 \mathbf{E}$ in free space, or $\mathbf{D} = \epsilon \mathbf{E}$ in a material medium with permittivity $\epsilon$.
$$ \oint_S \epsilon \mathbf{E} \cdot d\mathbf{S} = Q_{enc} $$

**Mathematical Formulation (Differential Form):**
$$ \nabla \cdot \mathbf{D} = \rho_v $$
Where:
*   $\rho_v$ is the volume charge density.

**Physical Significance:** Gauss's Law indicates that electric field lines originate from positive charges and terminate on negative charges. The divergence of the electric field is proportional to the source (charge density). This is one of Maxwell's four equations.

**Example:** For a uniformly charged infinite line, Gauss's Law can be used to derive the electric field. Consider a cylindrical Gaussian surface coaxial with the line. The electric flux is only through the curved surface.

**Sadiku:** Chapter 2.
**Hayt & Buck:** Chapter 4.
**Reddy:** Chapter 2.

### 1.3 Ampere's Circuital Law

**Definition:** Ampere's Law states that the line integral of the magnetic field intensity ($\mathbf{H}$) around any closed loop is equal to the total current ($I_{enc}$) passing through the surface enclosed by the loop.

**Mathematical Formulation (Integral Form):**
$$ \oint_C \mathbf{H} \cdot d\mathbf{l} = I_{enc} $$
Where:
*   $\mathbf{H}$ is the magnetic field intensity.
*   $d\mathbf{l}$ is an infinitesimal length vector element along the closed loop $C$.
*   $I_{enc}$ is the total current enclosed by the loop $C$.

**Relationship with Magnetic Flux Density:** $\mathbf{B} = \mu_0 \mathbf{H}$ in free space, or $\mathbf{B} = \mu \mathbf{H}$ in a material medium with permeability $\mu$.

**Mathematical Formulation (Differential Form):**
$$ \nabla \times \mathbf{H} = \mathbf{J} $$
Where:
*   $\mathbf{J}$ is the current density.

**Physical Significance:** Ampere's Law describes how electric currents create magnetic fields. The curl of the magnetic field intensity is proportional to the current density.

**Example:** For a long straight conductor carrying a current $I$, Ampere's Law can be used to find the magnetic field at a distance $r$ from the conductor. A circular loop of radius $r$ around the conductor encloses the current $I$.

**Important Point to Remember:** Ampere's Law as stated above is only valid for **steady currents** (DC). This is where Maxwell's crucial addition comes in.

**Sadiku:** Chapter 5.
**Hayt & Buck:** Chapter 6.
**Reddy:** Chapter 3.

### 1.4 Faraday's Law of Induction

**Definition:** Faraday's Law states that a time-varying magnetic field induces an electromotive force (EMF) in any closed circuit. The induced EMF is equal to the negative of the time rate of change of the magnetic flux through the circuit.

**Mathematical Formulation (Integral Form):**
$$ \oint_C \mathbf{E} \cdot d\mathbf{l} = -\frac{d\Phi_B}{dt} $$
Where:
*   $\mathbf{E}$ is the electric field intensity.
*   $d\mathbf{l}$ is an infinitesimal length vector element along the closed loop $C$.
*   $\Phi_B = \int_S \mathbf{B} \cdot d\mathbf{S}$ is the magnetic flux through the surface $S$ enclosed by the loop $C$.
*   $\frac{d\Phi_B}{dt}$ is the time rate of change of magnetic flux.

**Mathematical Formulation (Differential Form):**
$$ \nabla \times \mathbf{E} = -\frac{\partial \mathbf{B}}{\partial t} $$

**Physical Significance:** This law explains how changing magnetic fields can generate electric fields, which is the principle behind electric generators and transformers. The curl of the electric field is proportional to the negative of the time rate of change of the magnetic flux density.

**Example:** A changing magnetic flux through a coil of wire induces a voltage across the coil.

**Sadiku:** Chapter 7.
**Hayt & Buck:** Chapter 7.
**Reddy:** Chapter 3.

### 1.5 Gauss's Law for Magnetic Fields

**Definition:** Gauss's Law for Magnetic Fields states that there are no magnetic monopoles. This means that magnetic field lines always form closed loops, and the net magnetic flux through any closed surface is always zero.

**Mathematical Formulation (Integral Form):**
$$ \oint_S \mathbf{B} \cdot d\mathbf{S} = 0 $$
Where:
*   $\mathbf{B}$ is the magnetic flux density.
*   $d\mathbf{S}$ is an infinitesimal area vector element of the closed surface $S$.

**Mathematical Formulation (Differential Form):**
$$ \nabla \cdot \mathbf{B} = 0 $$

**Physical Significance:** This law implies that magnetic field lines never start or end; they are continuous and form closed loops. It's a fundamental property of magnetism.

**Sadiku:** Chapter 5.
**Hayt & Buck:** Chapter 7.
**Reddy:** Chapter 3.

---

## 2. Maxwell's Equations: Unification and Extension

James Clerk Maxwell unified these fundamental laws and introduced a crucial term to Ampere's Law, leading to a complete and consistent set of equations that describe all classical electromagnetic phenomena, including electromagnetic waves.

### 2.1 The Continuity Equation

**Definition:** The continuity equation expresses the principle of conservation of electric charge. It states that the rate of decrease of charge in any volume is equal to the net outward current flow from that volume.

**Mathematical Formulation:**
$$ \nabla \cdot \mathbf{J} + \frac{\partial \rho_v}{\partial t} = 0 $$
or in integral form:
$$ \oint_S \mathbf{J} \cdot d\mathbf{S} = -\frac{d}{dt} \int_V \rho_v \, dV $$

**Derivation/Connection:**
From Gauss's Law (differential form): $\nabla \cdot \mathbf{D} = \rho_v$.
Differentiating with respect to time: $\nabla \cdot \frac{\partial \mathbf{D}}{\partial t} = \frac{\partial \rho_v}{\partial t}$.
We know that $\mathbf{J} = \sigma \mathbf{E}$ for a conducting medium, and $\mathbf{D} = \epsilon \mathbf{E}$, so $\mathbf{J} = \sigma \frac{\mathbf{D}}{\epsilon}$.

If we consider $\mathbf{D} = \epsilon \mathbf{E}$, then $\nabla \cdot (\epsilon \mathbf{E}) = \rho_v$, so $\nabla \cdot \mathbf{D} = \rho_v$.
Taking the divergence of $\mathbf{D}$: $\nabla \cdot \mathbf{D} = \rho_v$.
Taking the time derivative: $\nabla \cdot \frac{\partial \mathbf{D}}{\partial t} = \frac{\partial \rho_v}{\partial t}$.

The continuity equation essentially states that the divergence of current density is equal to the negative time rate of change of charge density.

**Sadiku:** Chapter 3.
**Hayt & Buck:** Chapter 4.
**Reddy:** Chapter 2.

### 2.2 The Displacement Current

**Problem with Ampere's Law:** Ampere's Law in its original form ($\nabla \times \mathbf{H} = \mathbf{J}$) is not consistent with the continuity equation when dealing with time-varying fields, particularly in situations like a charging capacitor.

Consider a charging capacitor with a current $I$ flowing into it. The charge on the capacitor plates increases, and the electric field between the plates also increases. If we apply Ampere's Law with a loop enclosing the wire carrying the current, we get a non-zero magnetic field. However, if we choose a surface that passes through the gap between the capacitor plates, the enclosed current is zero, leading to a contradiction.

**Maxwell's Solution:** Maxwell postulated that a changing electric flux also produces a magnetic field, similar to how a current does. This new term is called the **displacement current**.

The electric flux is $\Phi_E = \int_S \mathbf{D} \cdot d\mathbf{S}$. The rate of change of electric flux is $\frac{\partial \Phi_E}{\partial t} = \frac{\partial}{\partial t} \int_S \mathbf{D} \cdot d\mathbf{S}$.
In differential form, the displacement current density is $\mathbf{J}_d = \frac{\partial \mathbf{D}}{\partial t}$.

**Modified Ampere's Law:** Maxwell's contribution was to add the displacement current density to the conduction current density in Ampere's Law.

**Mathematical Formulation (Integral Form):**
$$ \oint_C \mathbf{H} \cdot d\mathbf{l} = I_{enc} + I_{d,enc} = \int_S \mathbf{J} \cdot d\mathbf{S} + \int_S \frac{\partial \mathbf{D}}{\partial t} \cdot d\mathbf{S} $$
Where:
*   $I_{enc} = \int_S \mathbf{J} \cdot d\mathbf{S}$ is the conduction current enclosed.
*   $I_{d,enc} = \int_S \frac{\partial \mathbf{D}}{\partial t} \cdot d\mathbf{S}$ is the displacement current enclosed.

**Mathematical Formulation (Differential Form):**
$$ \nabla \times \mathbf{H} = \mathbf{J} + \frac{\partial \mathbf{D}}{\partial t} $$

**Consistency with Continuity Equation:**
Taking the divergence of the modified Ampere's Law:
$$ \nabla \cdot (\nabla \times \mathbf{H}) = \nabla \cdot \mathbf{J} + \nabla \cdot \frac{\partial \mathbf{D}}{\partial t} $$
Since the divergence of a curl is always zero ($\nabla \cdot (\nabla \times \mathbf{H}) = 0$):
$$ 0 = \nabla \cdot \mathbf{J} + \frac{\partial}{\partial t} (\nabla \cdot \mathbf{D}) $$
Using Gauss's Law ($\nabla \cdot \mathbf{D} = \rho_v$):
$$ 0 = \nabla \cdot \mathbf{J} + \frac{\partial \rho_v}{\partial t} $$
This is exactly the continuity equation, showing that Maxwell's modification makes Ampere's Law consistent with charge conservation.

**Example:** Charging a parallel-plate capacitor. The conduction current $I$ flows into one plate. Between the plates, the current density is zero, but the electric field is increasing. The displacement current density is $\frac{\partial \mathbf{D}}{\partial t}$. For a parallel-plate capacitor with plates of area $A$, $Q = \epsilon_0 E A$. So, $\frac{\partial Q}{\partial t} = \epsilon_0 A \frac{\partial E}{\partial t}$. The displacement current is $I_d = \epsilon_0 A \frac{\partial E}{\partial t}$. This displacement current is equal to the conduction current $I$ flowing into the plate, resolving the inconsistency.

**Sadiku:** Chapter 7.
**Hayt & Buck:** Chapter 7.
**Reddy:** Chapter 3.

---

## 3. Maxwell's Equations in Different Forms

Maxwell's Equations are typically presented in two forms: integral and differential.

### 3.1 Maxwell's Equations in Differential Form

These equations describe the behavior of electric and magnetic fields at every point in space and time.

1.  **Gauss's Law for Electric Fields:**
    $$ \nabla \cdot \mathbf{D} = \rho_v $$
    *   **Physical Meaning:** Electric field lines originate from positive charges and terminate on negative charges. The divergence of $\mathbf{D}$ is the volume charge density.

2.  **Gauss's Law for Magnetic Fields:**
    $$ \nabla \cdot \mathbf{B} = 0 $$
    *   **Physical Meaning:** There are no magnetic monopoles. Magnetic field lines are always closed loops. The divergence of $\mathbf{B}$ is always zero.

3.  **Faraday's Law of Induction:**
    $$ \nabla \times \mathbf{E} = -\frac{\partial \mathbf{B}}{\partial t} $$
    *   **Physical Meaning:** A time-varying magnetic field induces an electric field. This is the basis of electromagnetic induction.

4.  **Ampere-Maxwell Law:**
    $$ \nabla \times \mathbf{H} = \mathbf{J} + \frac{\partial \mathbf{D}}{\partial t} $$
    *   **Physical Meaning:** Electric currents and time-varying electric fields both produce magnetic fields.

**CO1 Alignment:** These equations utilize vector calculus operators like divergence ($\nabla \cdot$) and curl ($\nabla \times$), which are fundamental to describing electromagnetic vector fields.

**Sadiku:** Chapter 7.
**Hayt & Buck:** Chapter 7.
**Reddy:** Chapter 3.

### 3.2 Maxwell's Equations in Integral Form

These equations relate the fields to macroscopic quantities like enclosed charges and currents. They are particularly useful for problems with symmetry.

1.  **Gauss's Law for Electric Fields:**
    $$ \oint_S \mathbf{D} \cdot d\mathbf{S} = Q_{enc} = \int_V \rho_v \, dV $$
    *   **Physical Meaning:** The total outward electric flux through any closed surface is equal to the total enclosed charge.

2.  **Gauss's Law for Magnetic Fields:**
    $$ \oint_S \mathbf{B} \cdot d\mathbf{S} = 0 $$
    *   **Physical Meaning:** The total outward magnetic flux through any closed surface is zero.

3.  **Faraday's Law of Induction:**
    $$ \oint_C \mathbf{E} \cdot d\mathbf{l} = -\frac{d}{dt} \int_S \mathbf{B} \cdot d\mathbf{S} $$
    *   **Physical Meaning:** The electromotive force (EMF) around any closed circuit is equal to the negative rate of change of magnetic flux through the surface bounded by the circuit.

4.  **Ampere-Maxwell Law:**
    $$ \oint_C \mathbf{H} \cdot d\mathbf{l} = \int_S \mathbf{J} \cdot d\mathbf{S} + \frac{d}{dt} \int_S \mathbf{D} \cdot d\mathbf{S} $$
    *   **Physical Meaning:** The line integral of $\mathbf{H}$ around a closed loop equals the total current (conduction + displacement) crossing any surface bounded by the loop.

**CO1 Alignment:** These forms utilize line integrals and surface integrals of vector fields, reinforcing the understanding of how fields behave over regions.

**Sadiku:** Chapter 7.
**Hayt & Buck:** Chapter 7.
**Reddy:** Chapter 3.

### 3.3 Constitutive Relations

These equations relate the auxiliary fields ($\mathbf{D}$ and $\mathbf{H}$) to the primary fields ($\mathbf{E}$ and $\mathbf{B}$) and the properties of the medium.

*   **Electric Field:** $\mathbf{D} = \epsilon \mathbf{E}$
    *   $\epsilon$ is the permittivity of the medium. For free space, $\epsilon = \epsilon_0$. For linear, isotropic, homogeneous (LIH) media, $\epsilon$ is a scalar constant.
*   **Magnetic Field:** $\mathbf{B} = \mu \mathbf{H}$
    *   $\mu$ is the permeability of the medium. For free space, $\mu = \mu_0$. For LIH media, $\mu$ is a scalar constant.
*   **Conductivity:** $\mathbf{J} = \sigma \mathbf{E}$
    *   $\sigma$ is the conductivity of the medium. This relation applies to conducting materials and is related to Ohm's Law in point form.

**CO1 Alignment:** These relations are essential for relating different vector fields and understanding how medium properties influence electromagnetic behavior.

**Sadiku:** Chapter 2, 5, 7.
**Hayt & Buck:** Chapter 4, 6, 7.
**Reddy:** Chapter 2, 3.

### 3.4 The Continuity Equation

As discussed earlier, the continuity equation is an inherent consequence of Maxwell's equations and represents the conservation of charge.

$$ \nabla \cdot \mathbf{J} + \frac{\partial \rho_v}{\partial t} = 0 $$

**CO1 Alignment:** Reinforces the concept of charge conservation as a fundamental principle.

**Sadiku:** Chapter 3.
**Hayt & Buck:** Chapter 4.
**Reddy:** Chapter 2.

---

## 4. Maxwell's Equations in Free Space and Source-Free Regions

In free space (no charges or currents, $\rho_v = 0$, $\mathbf{J} = 0$) and source-free regions within materials ($\rho_v = 0$, $\mathbf{J} = 0$), Maxwell's equations simplify significantly.

**Differential Form in Free Space:**
1.  $$ \nabla \cdot \mathbf{E} = 0 $$ (Since $\rho_v = 0$, and $\mathbf{D} = \epsilon_0 \mathbf{E}$)
2.  $$ \nabla \cdot \mathbf{B} = 0 $$
3.  $$ \nabla \times \mathbf{E} = -\frac{\partial \mathbf{B}}{\partial t} $$
4.  $$ \nabla \times \mathbf{B} = \mu_0 \epsilon_0 \frac{\partial \mathbf{E}}{\partial t} $$ (Since $\mathbf{J} = 0$, $\mathbf{D} = \epsilon_0 \mathbf{E}$, and $\mathbf{H} = \mathbf{B}/\mu_0$)

**Key Insight:** The last two equations (Faraday's Law and the modified Ampere's Law) show a strong coupling between time-varying electric and magnetic fields. A changing magnetic field creates an electric field, and a changing electric field creates a magnetic field. This interplay is the foundation of electromagnetic waves.

### 4.1 Derivation of Wave Equation from Maxwell's Equations

Let's derive the wave equation for the electric field in a source-free, charge-free medium (where $\mu = \mu_0$, $\epsilon = \epsilon_0$, $\rho_v = 0$, $\mathbf{J} = 0$).

1.  Start with Faraday's Law: $$ \nabla \times \mathbf{E} = -\frac{\partial \mathbf{B}}{\partial t} $$
2.  Take the curl of both sides: $$ \nabla \times (\nabla \times \mathbf{E}) = -\nabla \times \frac{\partial \mathbf{B}}{\partial t} $$
3.  Use the vector identity $\nabla \times (\nabla \times \mathbf{A}) = \nabla (\nabla \cdot \mathbf{A}) - \nabla^2 \mathbf{A}$:
    $$ \nabla (\nabla \cdot \mathbf{E}) - \nabla^2 \mathbf{E} = -\frac{\partial}{\partial t} (\nabla \times \mathbf{B}) $$
4.  Since $\rho_v = 0$, $\nabla \cdot \mathbf{E} = 0$.
    $$ 0 - \nabla^2 \mathbf{E} = -\frac{\partial}{\partial t} (\nabla \times \mathbf{B}) $$
    $$ \nabla^2 \mathbf{E} = \frac{\partial}{\partial t} (\nabla \times \mathbf{B}) $$
5.  Substitute the Ampere-Maxwell Law ($\nabla \times \mathbf{B} = \mu \epsilon \frac{\partial \mathbf{E}}{\partial t}$):
    $$ \nabla^2 \mathbf{E} = \frac{\partial}{\partial t} \left( \mu \epsilon \frac{\partial \mathbf{E}}{\partial t} \right) $$
    $$ \nabla^2 \mathbf{E} = \mu \epsilon \frac{\partial^2 \mathbf{E}}{\partial t^2} $$

This is the **wave equation** for the electric field. A similar equation can be derived for the magnetic field $\mathbf{H}$ (or $\mathbf{B}$).

**General Wave Equation:**
$$ \nabla^2 \mathbf{A} = \frac{1}{v^2} \frac{\partial^2 \mathbf{A}}{\partial t^2} $$
Where:
*   $\mathbf{A}$ represents the vector field ($\mathbf{E}$ or $\mathbf{H}$).
*   $v$ is the speed of propagation.

In free space, $v = \frac{1}{\sqrt{\mu_0 \epsilon_0}} = c$ (speed of light), which is approximately $3 \times 10^8$ m/s.

**CO2 Alignment:** This derivation directly shows how Maxwell's equations lead to the propagation of electromagnetic waves, a core concept in electromagnetics.
**CO3 Alignment:** Understanding the wave equation is fundamental to analyzing wave reflection, refraction, and power density.

**Sadiku:** Chapter 7.
**Hayt & Buck:** Chapter 7.
**Reddy:** Chapter 4.

---

## 5. Electromagnetic Waves

The interplay described by Maxwell's equations in source-free regions leads to the existence of electromagnetic waves.

### 5.1 Properties of Electromagnetic Waves

*   **Transverse Nature:** Both electric and magnetic fields are perpendicular to the direction of propagation.
*   **Self-propagating:** They do not require a medium to propagate.
*   **Speed of Propagation:** $v = \frac{1}{\sqrt{\mu\epsilon}}$ in a medium, $c = \frac{1}{\sqrt{\mu_0\epsilon_0}}$ in free space.
*   **In-phase:** The electric and magnetic fields reach their maximum, minimum, and zero values simultaneously.
*   **Perpendicular Orientation:** The electric and magnetic fields are perpendicular to each other.
*   **Energy Transport:** Electromagnetic waves carry energy, characterized by the Poynting vector.

### 5.2 The Poynting Vector

**Definition:** The Poynting vector $\mathbf{S}$ describes the directional energy flux density (the rate of energy transfer per unit area) of an electromagnetic field.

**Mathematical Formulation:**
$$ \mathbf{S} = \mathbf{E} \times \mathbf{H} $$
Units: W/m$^2$

**Physical Significance:** The direction of $\mathbf{S}$ indicates the direction of energy flow, and its magnitude represents the power per unit area.

**Example:** For a plane wave propagating in the $+z$ direction, $\mathbf{E} = E_0 \cos(\omega t - kz) \hat{\mathbf{x}}$ and $\mathbf{H} = H_0 \cos(\omega t - kz) \hat{\mathbf{y}}$, where $H_0 = E_0 / \eta$ and $\eta$ is the intrinsic impedance of the medium.
$$ \mathbf{S} = (\mathbf{E}) \times (\mathbf{H}) = (E_0 \cos(\omega t - kz) \hat{\mathbf{x}}) \times (H_0 \cos(\omega t - kz) \hat{\mathbf{y}}) $$
$$ \mathbf{S} = E_0 H_0 \cos^2(\omega t - kz) (\hat{\mathbf{x}} \times \hat{\mathbf{y}}) = E_0 H_0 \cos^2(\omega t - kz) \hat{\mathbf{z}} $$
The average power density is $\langle S \rangle = \frac{1}{2} E_0 H_0 = \frac{1}{2} \frac{E_0^2}{\eta}$.

**CO3 Alignment:** The Poynting vector is central to understanding the power carried by electromagnetic waves.

**Sadiku:** Chapter 8.
**Hayt & Buck:** Chapter 9.
**Reddy:** Chapter 4.

---

## 6. Practice Questions and Exercises

**Question 1 (CO1):**
State the differential form of the four Maxwell's equations and briefly explain the physical significance of each.

**Answer 1:**
1.  $\nabla \cdot \mathbf{D} = \rho_v$: Gauss's Law for Electric Fields - Electric field lines originate from positive charges and terminate on negative charges. The divergence of $\mathbf{D}$ is the volume charge density.
2.  $\nabla \cdot \mathbf{B} = 0$: Gauss's Law for Magnetic Fields - There are no magnetic monopoles. Magnetic field lines are always closed loops.
3.  $\nabla \times \mathbf{E} = -\frac{\partial \mathbf{B}}{\partial t}$: Faraday's Law of Induction - A time-varying magnetic field induces an electric field.
4.  $\nabla \times \mathbf{H} = \mathbf{J} + \frac{\partial \mathbf{D}}{\partial t}$: Ampere-Maxwell Law - Electric currents and time-varying electric fields (displacement current) produce magnetic fields.

**Question 2 (CO2):**
Consider a parallel-plate capacitor with circular plates of radius $a$ separated by a distance $d$. The capacitor is being charged by a current $I$. Assume the electric field between the plates is uniform and perpendicular to the plates.
(a) Find the displacement current density $\mathbf{J}_d$ between the plates.
(b) Calculate the total displacement current $I_d$ between the plates.
(c) If a loop of radius $r < a$ is drawn in the mid-plane between the plates, use the integral form of the Ampere-Maxwell Law to find the magnetic field intensity $\mathbf{H}$ at a distance $r$ from the center.

**Answer 2:**
Let the charge on the capacitor plates be $q(t)$, and the current charging it be $I = \frac{dq}{dt}$.
The electric field between the plates is $\mathbf{E} = \frac{q}{\epsilon_0 A} \hat{\mathbf{z}}$, where $A = \pi a^2$ is the area of the plates.
The electric flux density is $\mathbf{D} = \epsilon_0 \mathbf{E} = \frac{q}{A} \hat{\mathbf{z}}$.

(a) The displacement current density is $\mathbf{J}_d = \frac{\partial \mathbf{D}}{\partial t} = \frac{\partial}{\partial t} \left(\frac{q}{A} \hat{\mathbf{z}}\right) = \frac{1}{A} \frac{dq}{dt} \hat{\mathbf{z}} = \frac{I}{A} \hat{\mathbf{z}}$.

(b) The total displacement current $I_d$ through a surface between the plates is the integral of $\mathbf{J}_d$ over that surface. For the area of the plates ($A$):
$I_d = \int_A \mathbf{J}_d \cdot d\mathbf{S} = \int_A \frac{I}{A} \hat{\mathbf{z}} \cdot dA \hat{\mathbf{z}} = \frac{I}{A} \int_A dA = \frac{I}{A} \cdot A = I$.
So, the total displacement current between the plates is equal to the conduction current $I$ flowing into the plates.

(c) For a loop of radius $r < a$ in the mid-plane, the enclosed conduction current is $I_{enc} = 0$. The enclosed displacement current is $I_{d,enc} = \int_S \mathbf{J}_d \cdot d\mathbf{S}$, where $S$ is the circular surface of radius $r$.
$I_{d,enc} = \int_0^r \left(\frac{I}{\pi a^2} \hat{\mathbf{z}}\right) \cdot (2\pi \rho \, d\rho \hat{\mathbf{z}}) = \frac{I}{\pi a^2} 2\pi \int_0^r \rho \, d\rho = \frac{2I}{a^2} \left[\frac{\rho^2}{2}\right]_0^r = \frac{2I}{a^2} \frac{r^2}{2} = \frac{I r^2}{a^2}$.

Using the integral form of the Ampere-Maxwell Law: $\oint_C \mathbf{H} \cdot d\mathbf{l} = I_{enc} + I_{d,enc}$.
For a circular loop of radius $r$, $\oint_C \mathbf{H} \cdot d\mathbf{l} = H_\phi (2\pi r)$ if $\mathbf{H} = H_\phi \hat{\boldsymbol{\phi}}$.
$H_\phi (2\pi r) = 0 + \frac{I r^2}{a^2}$.
$H_\phi = \frac{I r^2}{a^2 (2\pi r)} = \frac{I r}{2\pi a^2}$.
So, $\mathbf{H} = \frac{I r}{2\pi a^2} \hat{\boldsymbol{\phi}}$ for $r < a$.

**Question 3 (CO3):**
If the electric field in free space is given by $\mathbf{E}(z, t) = E_0 \cos(\omega t - kz) \hat{\mathbf{x}}$, find the corresponding magnetic field $\mathbf{H}(z, t)$.

**Answer 3:**
Using Faraday's Law in differential form: $\nabla \times \mathbf{E} = -\mu_0 \frac{\partial \mathbf{H}}{\partial t}$.
$\nabla \times \mathbf{E} = \nabla \times (E_0 \cos(\omega t - kz) \hat{\mathbf{x}}) = E_0 \frac{\partial}{\partial z} (\cos(\omega t - kz)) \hat{\mathbf{y}}$
$\nabla \times \mathbf{E} = E_0 (-k) (-\sin(\omega t - kz)) \hat{\mathbf{y}} = E_0 k \sin(\omega t - kz) \hat{\mathbf{y}}$.

So, $E_0 k \sin(\omega t - kz) \hat{\mathbf{y}} = -\mu_0 \frac{\partial \mathbf{H}}{\partial t}$.
Let $\mathbf{H} = H_0 \sin(\omega t - kz) \hat{\mathbf{y}}$. Then $\frac{\partial \mathbf{H}}{\partial t} = H_0 \omega \cos(\omega t - kz) \hat{\mathbf{y}}$. This doesn't match.
Let's try $\mathbf{H} = H_0 \cos(\omega t - kz) \hat{\mathbf{y}}$. Then $\frac{\partial \mathbf{H}}{\partial t} = -H_0 \omega \sin(\omega t - kz) \hat{\mathbf{y}}$.

Substituting this into Faraday's Law:
$E_0 k \sin(\omega t - kz) \hat{\mathbf{y}} = -\mu_0 (-H_0 \omega \sin(\omega t - kz) \hat{\mathbf{y}}) = \mu_0 H_0 \omega \sin(\omega t - kz) \hat{\mathbf{y}}$.
Equating the magnitudes: $E_0 k = \mu_0 H_0 \omega$.
We know that the wave speed $c = \omega/k = 1/\sqrt{\mu_0 \epsilon_0}$. So, $k = \omega \sqrt{\mu_0 \epsilon_0}$.
$E_0 (\omega \sqrt{\mu_0 \epsilon_0}) = \mu_0 H_0 \omega$.
$E_0 \sqrt{\mu_0 \epsilon_0} = \mu_0 H_0$.
$H_0 = \frac{E_0}{\mu_0 \sqrt{\mu_0 \epsilon_0}} = \frac{E_0}{\sqrt{\mu_0/\epsilon_0}} = \frac{E_0}{\eta_0}$, where $\eta_0 = \sqrt{\mu_0/\epsilon_0}$ is the intrinsic impedance of free space.

Thus, $\mathbf{H}(z, t) = \frac{E_0}{\eta_0} \cos(\omega t - kz) \hat{\mathbf{y}}$.

---

## 7. Important Points to Remember

*   **Maxwell's Equations are the cornerstone of classical electromagnetics.** They unify electricity, magnetism, and light.
*   **The displacement current is Maxwell's key contribution.** It makes Ampere's Law consistent with charge conservation and explains electromagnetic radiation.
*   **Four fundamental equations govern electromagnetic fields.** Two are for static fields (Gauss's Laws), and two describe how fields change with time (Faraday's Law and Ampere-Maxwell Law).
*   **The integral and differential forms are equivalent.** The choice depends on the problem's symmetry and context.
*   **In source-free regions, Maxwell's equations predict the existence of electromagnetic waves** that propagate at the speed of light.
*   **The Poynting vector describes energy flow** in electromagnetic fields.
*   **Constitutive relations** link the field quantities ($\mathbf{E}, \mathbf{D}, \mathbf{B}, \mathbf{H}$) based on the properties of the medium.

---

## 8. Self-Assessment

*   Can you explain the physical meaning of each of Maxwell's four equations?
*   How does the displacement current resolve the inconsistency in Ampere's Law for time-varying fields?
*   Can you derive the wave equation from Maxwell's equations in a source-free region?
*   What is the Poynting vector, and what does it represent?
*   How do constitutive relations connect the different electromagnetic field vectors?

This comprehensive set of notes covers Module 2, focusing on the derivation and significance of Maxwell's Equations, aligning with the specified course outcomes.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
