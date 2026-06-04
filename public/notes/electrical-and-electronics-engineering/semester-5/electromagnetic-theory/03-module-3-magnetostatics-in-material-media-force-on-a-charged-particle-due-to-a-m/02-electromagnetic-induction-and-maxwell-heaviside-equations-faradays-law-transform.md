---
title: "Electromagnetic Induction and Maxwell- Heaviside Equations:  Faraday’s law, Transformer emf and Motional emf, Displacement Current, Maxwell-Heaviside equations."
subject: "ELECTROMAGNETIC THEORY"
module: "Module 3: Magnetostatics in Material Media : Force on a charged particle due to a magnetic field, Force between two current carrying conductors, Magnetic Torque and Moment, Magnetization in materials, Magnetic boundary conditions, Inductance, Energy stored in magnetostatic fields."
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f361b7"
status: "completed"
scrapedAt: "2026-05-23T16:21:53.529Z"
---
# Electromagnetic Theory: Module 3 - Magnetostatics in Material Media & Electromagnetic Induction

This module delves into the fascinating world of magnetostatics within material media, building upon foundational concepts. We will then transition to the dynamic realm of electromagnetic induction, culminating in the universally important Maxwell-Heaviside equations.

**Target Audience:** Students of Electromagnetic Theory

**Prerequisites:** Basic understanding of vector calculus, electrostatics, and magnetostatics.

---

## Table of Contents

1.  **Magnetostatics in Material Media Review (Briefly)**
    *   Force on a Charged Particle due to a Magnetic Field
    *   Force Between Two Current-Carrying Conductors
    *   Magnetic Torque and Moment
    *   Magnetization in Materials
    *   Magnetic Boundary Conditions
    *   Inductance
    *   Energy Stored in Magnetostatic Fields

2.  **Electromagnetic Induction**
    *   Faraday's Law of Electromagnetic Induction
    *   Transformer EMF
    *   Motional EMF
    *   Lenz's Law

3.  **Displacement Current**
    *   The Problem with Ampere's Law
    *   Introducing Displacement Current
    *   Continuity Equation in the Presence of Displacement Current

4.  **Maxwell-Heaviside Equations**
    *   Derivation and Significance
    *   The Four Fundamental Equations
    *   Physical Interpretation of Each Equation
    *   Relationship to Previous Laws

5.  **Practice Questions and Exercises**

6.  **Key Points to Remember**

---

## 1. Magnetostatics in Material Media Review (Briefly)

This section serves as a quick recap of key concepts from the first part of Module 3, essential for understanding the transition to electromagnetic induction.

*   **Force on a Charged Particle due to a Magnetic Field:**
    *   **Lorentz Force Law:** $\mathbf{F} = q(\mathbf{E} + \mathbf{v} \times \mathbf{B})$
        *   The magnetic component is $\mathbf{F}_m = q(\mathbf{v} \times \mathbf{B})$.
        *   **Key Concept:** The force is perpendicular to both velocity ($\mathbf{v}$) and magnetic field ($\mathbf{B}$).
        *   **Textbook Reference:** Sadiku, Chapter 5; Hayt & Buck, Chapter 5.

*   **Force Between Two Current-Carrying Conductors:**
    *   Two parallel conductors carrying currents $I_1$ and $I_2$ separated by distance $d$ experience a force per unit length given by:
        $\frac{F}{L} = \frac{\mu_0 I_1 I_2}{2 \pi d}$
    *   **Key Concept:** Parallel currents attract, antiparallel currents repel.
    *   **Textbook Reference:** Sadiku, Chapter 6; Hayt & Buck, Chapter 6.

*   **Magnetic Torque and Moment:**
    *   A current loop in a magnetic field experiences a torque: $\mathbf{T} = \mathbf{m} \times \mathbf{B}$
    *   Magnetic dipole moment: $\mathbf{m} = I \mathbf{A}$, where $I$ is current and $\mathbf{A}$ is the vector area of the loop.
    *   **Key Concept:** Torque tends to align the magnetic moment with the magnetic field.
    *   **Textbook Reference:** Sadiku, Chapter 7; Hayt & Buck, Chapter 7.

*   **Magnetization in Materials:**
    *   Materials respond to magnetic fields by developing a magnetization vector $\mathbf{M}$.
    *   Three main types: Diamagnetic, Paramagnetic, Ferromagnetic.
    *   **Key Concept:** $\mathbf{M}$ represents the magnetic dipole moment per unit volume.
    *   **Textbook Reference:** Sadiku, Chapter 8; Hayt & Buck, Chapter 8.

*   **Magnetic Boundary Conditions:**
    *   Conditions for the behavior of tangential and normal components of $\mathbf{H}$ and $\mathbf{B}$ at the interface between two magnetic materials.
    *   $H_{t1} = H_{t2}$
    *   $B_{n1} = B_{n2}$
    *   **Key Concept:** Relates magnetic fields across material interfaces.
    *   **Textbook Reference:** Sadiku, Chapter 8; Hayt & Buck, Chapter 8.

*   **Inductance:**
    *   The ratio of magnetic flux linkage to the current producing it.
    *   Self-inductance ($L$): $\Phi = LI$.
    *   Mutual inductance ($M_{12}$): $\Phi_2 = M_{12} I_1$.
    *   **Key Concept:** A measure of opposition to change in current.
    *   **Textbook Reference:** Sadiku, Chapter 9; Hayt & Buck, Chapter 9.

*   **Energy Stored in Magnetostatic Fields:**
    *   Energy density: $w_m = \frac{1}{2} \mathbf{B} \cdot \mathbf{H} = \frac{1}{2 \mu} B^2 = \frac{1}{2} \mu H^2$.
    *   Total energy: $W_m = \int_V w_m \, dv$.
    *   **Key Concept:** Magnetic fields store energy.
    *   **Textbook Reference:** Sadiku, Chapter 9; Hayt & Buck, Chapter 9.

---

## 2. Electromagnetic Induction

Electromagnetic induction is the phenomenon of producing an electromotive force (EMF) across an electrical conductor in a changing magnetic field. This is a cornerstone of electric power generation and many other technologies.

### 2.1 Faraday's Law of Electromagnetic Induction

This law quantifies the relationship between a changing magnetic flux and the induced EMF.

*   **Statement:** The induced EMF in any closed circuit is equal to the negative of the time rate of change of the magnetic flux through the circuit.
*   **Mathematical Form:**
    $$ \mathcal{E} = -\frac{d\Phi_B}{dt} $$
    where:
    *   $\mathcal{E}$ is the induced electromotive force (EMF) in Volts (V).
    *   $\Phi_B$ is the magnetic flux through the circuit in Webers (Wb).
    *   $\frac{d\Phi_B}{dt}$ is the time rate of change of magnetic flux.

*   **Magnetic Flux ($\Phi_B$):**
    *   The measure of the total magnetic field passing through a given area.
    *   $\Phi_B = \int_S \mathbf{B} \cdot d\mathbf{a}$
    *   where $\mathbf{B}$ is the magnetic flux density and $d\mathbf{a}$ is a differential area vector.

*   **Integral Form of Faraday's Law:**
    $$ \oint_C \mathbf{E} \cdot d\mathbf{l} = -\frac{d}{dt} \int_S \mathbf{B} \cdot d\mathbf{a} $$
    *   The left side is the EMF induced in the closed loop $C$.
    *   The right side is the negative rate of change of magnetic flux through the surface $S$ bounded by $C$.
    *   **Key Concept:** A changing magnetic field *induces* an electric field. This induced electric field is non-conservative.

*   **Differential Form of Faraday's Law:**
    *   Using Stokes' theorem on the left side: $\oint_C \mathbf{E} \cdot d\mathbf{l} = \int_S (\nabla \times \mathbf{E}) \cdot d\mathbf{a}$.
    *   Equating this to the right side: $\int_S (\nabla \times \mathbf{E}) \cdot d\mathbf{a} = -\frac{d}{dt} \int_S \mathbf{B} \cdot d\mathbf{a}$.
    *   Assuming $\mathbf{B}$ is time-varying, we can bring the time derivative inside the integral: $\int_S (\nabla \times \mathbf{E}) \cdot d\mathbf{a} = -\int_S \frac{\partial \mathbf{B}}{\partial t} \cdot d\mathbf{a}$.
    *   For this to hold for any arbitrary surface $S$, the integrands must be equal:
        $$ \nabla \times \mathbf{E} = -\frac{\partial \mathbf{B}}{\partial t} $$
    *   **Key Concept:** This is one of Maxwell's fundamental equations. It states that a time-varying magnetic field is a source of a circulating electric field.
    *   **Textbook Reference:** Sadiku, Chapter 10; Hayt & Buck, Chapter 7.

### 2.2 Transformer EMF

This type of EMF is induced in a stationary conductor when the magnetic field passing through the circuit is changing with time. This is the principle behind transformers.

*   **Scenario:** A stationary coil or loop is placed in a time-varying magnetic field.
*   **Cause:** The magnetic flux linking the loop changes due to the changing magnetic field itself.
*   **Example:** The primary winding of a transformer creates a time-varying magnetic field, which induces an EMF in the stationary secondary winding.
*   **Mathematical Form:** $\mathcal{E}_{transformer} = -\frac{d\Phi_B}{dt}$ (where $\frac{d\Phi_B}{dt}$ is due to a time-varying $\mathbf{B}$ field).
*   **Key Concept:** Induced EMF in a stationary circuit due to a time-varying magnetic flux.

### 2.3 Motional EMF

This type of EMF is induced in a conductor that is moving through a magnetic field.

*   **Scenario:** A conductor (e.g., a wire segment, a loop) is moving in a region with a magnetic field.
*   **Cause:** The charges within the conductor experience a magnetic force as they move with the conductor. This force causes charge separation and creates an electric field, leading to an induced EMF.
*   **Mathematical Form:**
    *   Consider a small segment of conductor $d\mathbf{l}$ moving with velocity $\mathbf{v}$ in a magnetic field $\mathbf{B}$.
    *   The magnetic force on a charge $q$ is $\mathbf{F}_m = q(\mathbf{v} \times \mathbf{B})$.
    *   This force per unit charge is the electric field due to motion: $\mathbf{E}_{motional} = \mathbf{v} \times \mathbf{B}$.
    *   The motional EMF along a conductor of length $L$ is the integral of this field along the conductor:
        $$ \mathcal{E}_{motional} = \int_L (\mathbf{v} \times \mathbf{B}) \cdot d\mathbf{l} $$
    *   If the conductor is a closed loop moving, the motional EMF around the loop is:
        $$ \mathcal{E}_{motional} = \oint_L (\mathbf{v} \times \mathbf{B}) \cdot d\mathbf{l} $$
*   **Key Concept:** Induced EMF in a moving circuit due to the magnetic force on the charges within the conductor.
*   **Example:** A conducting rod sliding on rails in a uniform magnetic field. If the rod moves with velocity $\mathbf{v}$, the induced EMF is $\mathcal{E} = vBL$ (if $\mathbf{v}$, $\mathbf{B}$, and rod are mutually perpendicular).
*   **Textbook Reference:** Sadiku, Chapter 10; Hayt & Buck, Chapter 7.

### 2.4 Lenz's Law

Lenz's law provides the direction of the induced EMF and hence the induced current.

*   **Statement:** The direction of the induced current is such that it opposes the change in magnetic flux that produced it.
*   **Significance of the Negative Sign in Faraday's Law:** The negative sign in $\mathcal{E} = -\frac{d\Phi_B}{dt}$ inherently incorporates Lenz's Law.
*   **How it works:**
    *   If the magnetic flux through a loop is increasing, the induced current will create a magnetic field that opposes this increase (i.e., in the opposite direction to the external field).
    *   If the magnetic flux is decreasing, the induced current will create a magnetic field that opposes this decrease (i.e., in the same direction as the external field).
*   **Key Concept:** Conservation of energy. The induced current's magnetic field always opposes the change that caused it, preventing perpetual motion.

---

## 3. Displacement Current

The concept of displacement current was introduced by James Clerk Maxwell to make Ampere's law consistent with the principle of charge conservation in the presence of time-varying electric fields.

### 3.1 The Problem with Ampere's Law

*   **Ampere's Law:** $\oint_C \mathbf{H} \cdot d\mathbf{l} = I_{enc}$ (where $I_{enc}$ is the conduction current enclosed by the loop $C$).
*   **Consider a charging capacitor:**
    *   As a capacitor charges, there is a conduction current $I_c$ flowing into the positive plate and out of the negative plate.
    *   Between the plates, there is no conduction current, only an increasing electric field and hence an increasing electric flux.
    *   If we apply Ampere's law to a loop encircling the wire leading to one of the plates, we find $I_{enc} = I_c$.
    *   However, if we choose a surface that passes *between* the plates of the capacitor (and is bounded by the same loop), the enclosed conduction current is zero ($I_{enc} = 0$). This leads to a contradiction if $I_c \neq 0$.

### 3.2 Introducing Displacement Current

*   Maxwell's insight was to add a second term to Ampere's circuital law, which represents the "current" associated with a changing electric field. This is the displacement current.
*   **Displacement Current Density ($\mathbf{J}_D$):**
    *   Defined as $\mathbf{J}_D = \frac{\partial \mathbf{D}}{\partial t}$, where $\mathbf{D} = \epsilon \mathbf{E}$ is the electric flux density.
*   **Displacement Current ($I_D$):**
    *   The flux of $\mathbf{J}_D$ through a surface $S$: $I_D = \int_S \mathbf{J}_D \cdot d\mathbf{a} = \int_S \frac{\partial \mathbf{D}}{\partial t} \cdot d\mathbf{a}$.
*   **Modified Ampere's Law (Ampere-Maxwell Law):**
    *   The total current enclosed by the loop is the sum of conduction current and displacement current.
    *   **Integral Form:**
        $$ \oint_C \mathbf{H} \cdot d\mathbf{l} = \int_S \mathbf{J}_c \cdot d\mathbf{a} + \int_S \frac{\partial \mathbf{D}}{\partial t} \cdot d\mathbf{a} $$
    *   **Differential Form:**
        $$ \nabla \times \mathbf{H} = \mathbf{J}_c + \frac{\partial \mathbf{D}}{\partial t} $$
    *   **Key Concept:** A time-varying electric field creates a magnetic field, just as conduction current does. This is crucial for the existence of electromagnetic waves.
    *   **Textbook Reference:** Sadiku, Chapter 10; Hayt & Buck, Chapter 7.

### 3.3 Continuity Equation in the Presence of Displacement Current

*   The continuity equation expresses the conservation of charge: $\nabla \cdot \mathbf{J}_c = -\frac{\partial \rho}{\partial t}$.
*   Taking the divergence of the modified Ampere-Maxwell Law:
    $$ \nabla \cdot (\nabla \times \mathbf{H}) = \nabla \cdot \mathbf{J}_c + \nabla \cdot \frac{\partial \mathbf{D}}{\partial t} $$
*   Since the divergence of a curl is always zero ($\nabla \cdot (\nabla \times \mathbf{H}) = 0$), we get:
    $$ 0 = \nabla \cdot \mathbf{J}_c + \frac{\partial}{\partial t} (\nabla \cdot \mathbf{D}) $$
*   Using Gauss's Law for electricity, $\nabla \cdot \mathbf{D} = \rho$, we substitute this into the equation:
    $$ 0 = \nabla \cdot \mathbf{J}_c + \frac{\partial \rho}{\partial t} $$
*   This is exactly the continuity equation! This shows that the introduction of displacement current makes Ampere's Law consistent with charge conservation in situations with changing electric fields.

---

## 4. Maxwell-Heaviside Equations

James Clerk Maxwell unified all known laws of electricity and magnetism into a set of four partial differential equations, now known as Maxwell's equations. The Maxwell-Heaviside formulation uses vector notation and is the standard form used today. These equations describe how electric and magnetic fields are generated and altered by each other and by charges and currents.

### 4.1 Derivation and Significance

Maxwell derived these equations by synthesizing:
*   Gauss's Law for Electricity (from Faraday)
*   Gauss's Law for Magnetism (from Faraday)
*   Faraday's Law of Induction
*   Ampere's Law, modified by the addition of displacement current.

**Significance:**
*   **Unified Theory:** They provide a complete and unified description of electromagnetic phenomena.
*   **Electromagnetic Waves:** They predicted the existence of electromagnetic waves that travel at the speed of light, thereby unifying light, electricity, and magnetism.
*   **Foundation for Electromagnetics:** All phenomena in classical electromagnetics can be derived from these equations.
*   **CO3 Alignment:** These equations are the culmination of understanding the basic laws of electricity and magnetism and are crucial for deriving and applying electromagnetic principles.

### 4.2 The Four Fundamental Equations

Here are the Maxwell-Heaviside equations in differential form, applicable in any medium:

1.  **Gauss's Law for Electricity:**
    $$ \nabla \cdot \mathbf{D} = \rho_v $$
    *   Relates the divergence of the electric flux density ($\mathbf{D}$) to the volume charge density ($\rho_v$).
    *   **Meaning:** Electric charges are the sources or sinks of electric flux density. Electric field lines originate from positive charges and terminate on negative charges.
    *   **Material Dependence:** $\mathbf{D} = \epsilon \mathbf{E}$, where $\epsilon$ is the permittivity of the medium.
    *   **Textbook Reference:** Sadiku, Chapter 2; Hayt & Buck, Chapter 2.

2.  **Gauss's Law for Magnetism:**
    $$ \nabla \cdot \mathbf{B} = 0 $$
    *   States that the divergence of the magnetic flux density ($\mathbf{B}$) is zero everywhere.
    *   **Meaning:** There are no magnetic monopoles (isolated north or south poles). Magnetic field lines always form closed loops. They do not begin or end at charges.
    *   **Textbook Reference:** Sadiku, Chapter 5; Hayt & Buck, Chapter 5.

3.  **Faraday's Law of Induction:**
    $$ \nabla \times \mathbf{E} = -\frac{\partial \mathbf{B}}{\partial t} $$
    *   Relates the curl of the electric field ($\mathbf{E}$) to the time rate of change of the magnetic flux density ($\mathbf{B}$).
    *   **Meaning:** A time-varying magnetic field induces a circulating electric field. This is the basis of electromagnetic induction.
    *   **Textbook Reference:** Sadiku, Chapter 10; Hayt & Buck, Chapter 7.

4.  **Ampere-Maxwell Law:**
    $$ \nabla \times \mathbf{H} = \mathbf{J}_c + \frac{\partial \mathbf{D}}{\partial t} $$
    *   Relates the curl of the magnetic field intensity ($\mathbf{H}$) to the conduction current density ($\mathbf{J}_c$) and the displacement current density ($\frac{\partial \mathbf{D}}{\partial t}$).
    *   **Meaning:** Both conduction currents and time-varying electric flux densities create circulating magnetic fields.
    *   **Material Dependence:** $\mathbf{B} = \mu \mathbf{H}$, where $\mu$ is the permeability of the medium.
    *   **Textbook Reference:** Sadiku, Chapter 10; Hayt & Buck, Chapter 7.

### 4.3 Physical Interpretation of Each Equation

| Equation                     | Name                       | Physical Interpretation                                                                      | Source Term                 | Response Term     |
| :--------------------------- | :------------------------- | :----------------------------------------------------------------------------------------- | :-------------------------- | :---------------- |
| $\nabla \cdot \mathbf{D} = \rho_v$ | Gauss's Law for Electricity | Electric charges are sources/sinks of the electric flux density.                             | Electric Charge ($\rho_v$)  | Electric Flux Density ($\mathbf{D}$) |
| $\nabla \cdot \mathbf{B} = 0$  | Gauss's Law for Magnetism  | Magnetic monopoles do not exist; magnetic field lines are continuous closed loops.         | None                        | Magnetic Flux Density ($\mathbf{B}$) |
| $\nabla \times \mathbf{E} = -\frac{\partial \mathbf{B}}{\partial t}$ | Faraday's Law of Induction | A time-varying magnetic field induces a circulating electric field.                          | Time-varying $\mathbf{B}$ | Electric Field ($\mathbf{E}$) |
| $\nabla \times \mathbf{H} = \mathbf{J}_c + \frac{\partial \mathbf{D}}{\partial t}$ | Ampere-Maxwell Law         | Conduction currents and time-varying electric flux densities create circulating magnetic fields. | Conduction Current ($\mathbf{J}_c$), Time-varying $\mathbf{D}$ | Magnetic Field Intensity ($\mathbf{H}$) |

### 4.4 Relation to Basic Laws and Course Outcomes

*   **CO1 (Vector Calculus):** All Maxwell's equations are expressed using vector calculus operators (divergence, curl, gradient implicitly through $\mathbf{D} = \epsilon \mathbf{E}$ and $\mathbf{B} = \mu \mathbf{H}$).
*   **CO2 (Fields in Media):** The equations involve $\mathbf{D}$ and $\mathbf{B}$, which are defined in terms of $\mathbf{E}$, $\mathbf{H}$, and material properties ($\epsilon$, $\mu$).
*   **CO3 (Deduce Maxwell-Heaviside Equations):** The derivation of these equations from fundamental laws (Gauss's law, Faraday's law, Ampere's law) is a core part of this topic.
*   **CO4 (EM Waves):** When combined with constitutive relations and assumed to be in a source-free vacuum or lossless dielectric, Maxwell's equations lead directly to the wave equation, demonstrating the existence and propagation of electromagnetic waves.

---

## 5. Practice Questions and Exercises

**Instructions:** Attempt the following questions. Refer to textbooks for detailed derivations and formulas.

1.  **Faraday's Law Application:** A square loop of side $a$ is placed in a uniform magnetic field $\mathbf{B} = B_0 \cos(\omega t) \hat{k}$. If the loop lies in the xy-plane with its center at the origin, calculate the induced EMF in the loop. (CO2, CO3)
    *   **Answer:** $\mathcal{E} = -B_0 \omega a^2 \sin(\omega t)$. The EMF is induced due to the time-varying magnetic flux.

2.  **Motional EMF:** A conducting rod of length $L$ moves with a constant velocity $\mathbf{v}$ perpendicular to a uniform magnetic field $\mathbf{B}$. If the rod is oriented along the y-axis, $\mathbf{v} = v \hat{i}$, and $\mathbf{B} = B \hat{k}$, calculate the motional EMF induced across the ends of the rod. (CO1, CO2)
    *   **Answer:** $\mathcal{E}_{motional} = \int_0^L (\mathbf{v} \times \mathbf{B}) \cdot d\mathbf{l}$. Here, $d\mathbf{l} = dy \hat{j}$.
    *   $\mathbf{v} \times \mathbf{B} = (v \hat{i}) \times (B \hat{k}) = -vB \hat{j}$.
    *   $(\mathbf{v} \times \mathbf{B}) \cdot d\mathbf{l} = (-vB \hat{j}) \cdot (dy \hat{j}) = -vB dy$.
    *   $\mathcal{E}_{motional} = \int_0^L -vB dy = -vBL$. The magnitude of the motional EMF is $vBL$. The negative sign indicates the direction according to the chosen coordinate system and the sign convention of the integral.

3.  **Displacement Current Calculation:** Consider a parallel-plate capacitor with circular plates of radius $R$ separated by a distance $d$. The voltage across the capacitor is $V(t) = V_0 \sin(\omega t)$. Assume the electric field between the plates is uniform.
    *   a) Calculate the conduction current density $\mathbf{J}_c$ in the wires connecting to the plates.
    *   b) Calculate the displacement current density $\mathbf{J}_D$ between the plates.
    *   c) Calculate the total displacement current $I_D$ passing through the surface midway between the plates. (CO3)
    *   **Answer:**
        *   a) $C = \frac{\epsilon_0 \pi R^2}{d}$, $Q(t) = CV(t) = \frac{\epsilon_0 \pi R^2}{d} V_0 \sin(\omega t)$.
           $I_c = \frac{dQ}{dt} = \frac{\epsilon_0 \pi R^2 V_0 \omega}{d} \cos(\omega t)$.
           $\mathbf{J}_c = \frac{I_c}{\pi R^2} \hat{a}$ (in the wire). So, $J_c = \frac{\epsilon_0 V_0 \omega}{d} \cos(\omega t)$.
        *   b) $\mathbf{E}(t) = \frac{V(t)}{d} \hat{k} = \frac{V_0 \sin(\omega t)}{d} \hat{k}$.
           $\mathbf{D}(t) = \epsilon_0 \mathbf{E}(t) = \frac{\epsilon_0 V_0 \sin(\omega t)}{d} \hat{k}$.
           $\mathbf{J}_D = \frac{\partial \mathbf{D}}{\partial t} = \frac{\epsilon_0 V_0 \omega \cos(\omega t)}{d} \hat{k}$.
           So, $J_D = \frac{\epsilon_0 V_0 \omega \cos(\omega t)}{d}$.
        *   c) $I_D = \int_S \mathbf{J}_D \cdot d\mathbf{a}$. For a surface midway between the plates with area $\pi R^2$, $d\mathbf{a} = dA \hat{k}$.
           $I_D = \int_0^{\pi R^2} \frac{\epsilon_0 V_0 \omega \cos(\omega t)}{d} dA = \frac{\epsilon_0 V_0 \omega \cos(\omega t)}{d} (\pi R^2) = I_c$.
           This shows that $I_D = I_c$, validating Ampere-Maxwell law.

4.  **Maxwell's Equations in Vacuum (Source-Free):** Write down Maxwell's equations in a source-free vacuum. (CO3)
    *   **Answer:**
        *   $\nabla \cdot \mathbf{E} = 0$
        *   $\nabla \cdot \mathbf{B} = 0$
        *   $\nabla \times \mathbf{E} = -\frac{\partial \mathbf{B}}{\partial t}$
        *   $\nabla \times \mathbf{B} = \mu_0 \epsilon_0 \frac{\partial \mathbf{E}}{\partial t}$

5.  **Lenz's Law Application:** A bar magnet is moved towards a stationary conducting loop. Describe the direction of the induced current in the loop using Lenz's law, assuming the magnet's north pole is approaching. (CO4)
    *   **Answer:** As the north pole approaches, the magnetic flux through the loop increases in the direction of the approaching magnet's field. According to Lenz's law, the induced current will create a magnetic field that opposes this increase. Therefore, the induced current will flow in a direction that creates a magnetic field pointing away from the approaching magnet. This means the loop will behave like a magnet with its north pole facing the approaching north pole of the bar magnet, causing a repulsive force.

---

## 6. Key Points to Remember

*   **Faraday's Law:** Changing magnetic flux induces EMF ($\mathcal{E} = -\frac{d\Phi_B}{dt}$), implying $\nabla \times \mathbf{E} = -\frac{\partial \mathbf{B}}{\partial t}$.
*   **Transformer EMF:** Induced EMF in a stationary circuit due to a time-varying magnetic field.
*   **Motional EMF:** Induced EMF in a moving conductor due to the Lorentz force acting on charges ($\mathcal{E}_{motional} = \int (\mathbf{v} \times \mathbf{B}) \cdot d\mathbf{l}$).
*   **Lenz's Law:** The direction of induced current opposes the change in flux that produced it. The negative sign in Faraday's Law captures this.
*   **Displacement Current:** A time-varying electric field acts as a source of magnetic field, just like conduction current ($\mathbf{J}_D = \frac{\partial \mathbf{D}}{\partial t}$).
*   **Ampere-Maxwell Law:** $\nabla \times \mathbf{H} = \mathbf{J}_c + \frac{\partial \mathbf{D}}{\partial t}$ is a fundamental Maxwell equation that includes both conduction and displacement currents.
*   **Maxwell's Equations:** A set of four vector differential equations that form the foundation of classical electromagnetics and predict the existence of electromagnetic waves. They are:
    1.  $\nabla \cdot \mathbf{D} = \rho_v$
    2.  $\nabla \cdot \mathbf{B} = 0$
    3.  $\nabla \times \mathbf{E} = -\frac{\partial \mathbf{B}}{\partial t}$
    4.  $\nabla \times \mathbf{H} = \mathbf{J}_c + \frac{\partial \mathbf{D}}{\partial t}$
*   **Wave Propagation:** Maxwell's equations in a source-free medium predict that time-varying electric and magnetic fields propagate as electromagnetic waves, with the speed of light.

---
This module bridges the gap between static and dynamic electromagnetic phenomena, highlighting the crucial role of changing fields and introducing the foundational equations that govern all electromagnetic interactions. Understanding these concepts is vital for comprehending wave propagation and various electromagnetic applications.
