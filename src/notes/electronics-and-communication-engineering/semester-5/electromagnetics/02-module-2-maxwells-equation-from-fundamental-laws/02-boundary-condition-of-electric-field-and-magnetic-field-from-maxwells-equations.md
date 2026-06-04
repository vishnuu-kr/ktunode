---
title: "Boundary condition of electric field and magnetic field from Maxwell’s equations."
subject: "ELECTROMAGNETICS"
module: "Module 2: Maxwell’s equation from fundamental laws."
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c45fb09ce205780fe8d1"
status: "completed"
scrapedAt: "2026-05-23T17:56:29.712Z"
---
# ELECTROMAGNETICS - Module 2: Maxwell's Equations from Fundamental Laws

## Topic: Boundary Conditions of Electric and Magnetic Fields from Maxwell's Equations

---

**Introduction:**

This topic delves into a crucial aspect of electromagnetics: how electric and magnetic fields behave at the interface between two different media. These behaviors are dictated by **boundary conditions**, which are derived directly from Maxwell's equations. Understanding these conditions is fundamental for analyzing electromagnetic phenomena in layered structures, such as waveguides, transmission lines, and optical devices. We will explore how the continuity or discontinuity of field components across an interface is governed by the properties of the materials involved.

---

### Learning Outcomes:

Upon successful completion of this topic, you will be able to:

*   **Apply Maxwell's equations to derive boundary conditions for electric and magnetic fields.** (CO2 - K3)
*   **Explain the physical significance of boundary conditions for electric and magnetic fields.** (CO1 - K2)
*   **Determine the behavior of electric and magnetic fields at the interface of two different dielectric or conducting media.** (CO2 - K3)
*   **Analyze the implications of boundary conditions on electromagnetic wave propagation and reflection/refraction.** (CO3 - K3)

---

### Key Concepts and Definitions:

*   **Maxwell's Equations:** The fundamental laws governing electric and magnetic fields. In differential form, they are:
    *   Gauss's Law for Electricity: $\nabla \cdot \mathbf{D} = \rho_v$
    *   Gauss's Law for Magnetism: $\nabla \cdot \mathbf{B} = 0$
    *   Faraday's Law of Induction: $\nabla \times \mathbf{E} = -\frac{\partial \mathbf{B}}{\partial t}$
    *   Ampere-Maxwell Law: $\nabla \times \mathbf{H} = \mathbf{J} + \frac{\partial \mathbf{D}}{\partial t}$
    *(Referenced from Sadiku, 7th Ed., Chapter 1)*
*   **Boundary Surface (Interface):** The common surface separating two distinct media.
*   **Surface Charge Density ($\rho_s$):** Electric charge per unit area residing on a surface.
*   **Surface Current Density ($\mathbf{J}_s$):** Electric current per unit width flowing along a surface.
*   **Electric Flux Density ($\mathbf{D}$):** $\mathbf{D} = \epsilon \mathbf{E}$, where $\epsilon$ is the permittivity of the medium.
*   **Magnetic Flux Density ($\mathbf{B}$):** $\mathbf{B} = \mu \mathbf{H}$, where $\mu$ is the permeability of the medium.
*   **Tangential Component:** The component of a vector parallel to the boundary surface.
*   **Normal Component:** The component of a vector perpendicular to the boundary surface.

---

### Derivation of Boundary Conditions:

We will derive the boundary conditions by considering a small "pillbox" or "loop" straddling the boundary, as suggested by Sadiku and Hayt & Buck.

#### 1. Boundary Conditions for Electric Field ($\mathbf{E}$) and Electric Flux Density ($\mathbf{D}$)

These conditions arise from Gauss's Law for Electricity ($\nabla \cdot \mathbf{D} = \rho_v$).

**a) Normal Component of $\mathbf{D}$:**

*   **Derivation:** Consider a small cylindrical pillbox with infinitesimal height $dh$ and cross-sectional area $dS$ straddling the boundary surface. The volume charge density within the pillbox is $\rho_v$.
    Applying the Divergence Theorem to Gauss's Law:
    $$ \oint_S \mathbf{D} \cdot d\mathbf{S} = \int_V \rho_v dV $$
    For our pillbox, the integral over the volume is $\rho_v dV = \rho_{avg} dS dh$.
    The flux through the top and bottom surfaces is $D_{1n} dS$ and $-D_{2n} dS$ respectively, where $D_{1n}$ and $D_{2n}$ are the normal components of $\mathbf{D}$ in medium 1 and medium 2. The flux through the side surfaces is negligible as $dh \to 0$.
    $$ D_{1n} dS - D_{2n} dS = \rho_s dS $$
    where $\rho_s$ is the surface charge density on the boundary.
    Dividing by $dS$ and taking the limit as $dh \to 0$:
    $$ D_{1n} - D_{2n} = \rho_s $$
    or
    $$ (\mathbf{D}_1 - \mathbf{D}_2) \cdot \hat{n}_{12} = \rho_s $$
    where $\hat{n}_{12}$ is the unit normal vector pointing from medium 2 to medium 1.

*   **Physical Significance:** This condition states that the discontinuity in the normal component of $\mathbf{D}$ across a boundary is equal to the surface charge density present on that boundary. If there is no surface charge ($\rho_s = 0$), the normal component of $\mathbf{D}$ is continuous.

*   **In terms of $\mathbf{E}$:** Since $\mathbf{D} = \epsilon \mathbf{E}$, we have:
    $$ \epsilon_1 E_{1n} - \epsilon_2 E_{2n} = \rho_s $$

*   **Important Point:** The normal component of $\mathbf{D}$ is discontinuous if there is a surface charge.

*(Referenced from Sadiku, 7th Ed., Section 2.11; Hayt & Buck, 9th Ed., Section 7.7)*

**b) Tangential Component of $\mathbf{E}$:**

*   **Derivation:** Consider a small rectangular loop of width $w$ and infinitesimal height $dh$ straddling the boundary. The loop is oriented such that two sides of length $w$ are parallel to the boundary, and two sides of length $dh$ are perpendicular to it.
    Applying Faraday's Law in integral form:
    $$ \oint_C \mathbf{E} \cdot d\mathbf{l} = -\int_S \frac{\partial \mathbf{B}}{\partial t} \cdot d\mathbf{S} $$
    The integral on the right side, the flux of $\frac{\partial \mathbf{B}}{\partial t}$, goes to zero as the height $dh \to 0$.
    The line integral is the sum of contributions from the four sides. The contributions from the sides perpendicular to the boundary are negligible as $dh \to 0$.
    $$ E_{t1} w - E_{t2} w = 0 $$
    where $E_{t1}$ and $E_{t2}$ are the tangential components of $\mathbf{E}$ in medium 1 and medium 2, respectively.
    Dividing by $w$:
    $$ E_{t1} - E_{t2} = 0 $$
    or
    $$ \mathbf{E}_{t1} = \mathbf{E}_{t2} $$

*   **Physical Significance:** This condition states that the tangential component of the electric field is continuous across the boundary. This means there is no "jump" in the electric field tangential to the surface. This is analogous to the conservation of energy for a charge moving along the boundary.

*   **Important Point:** The tangential component of $\mathbf{E}$ is always continuous across any boundary.

*(Referenced from Sadiku, 7th Ed., Section 2.11; Hayt & Buck, 9th Ed., Section 7.7)*

#### 2. Boundary Conditions for Magnetic Field ($\mathbf{B}$) and Magnetic Field Intensity ($\mathbf{H}$)

These conditions arise from Gauss's Law for Magnetism ($\nabla \cdot \mathbf{B} = 0$) and the Ampere-Maxwell Law ($\nabla \times \mathbf{H} = \mathbf{J} + \frac{\partial \mathbf{D}}{\partial t}$).

**a) Normal Component of $\mathbf{B}$:**

*   **Derivation:** Consider the same small cylindrical pillbox used for $\mathbf{D}$, but apply Gauss's Law for Magnetism:
    $$ \oint_S \mathbf{B} \cdot d\mathbf{S} = 0 $$
    For the pillbox, the flux through the top and bottom surfaces is $B_{1n} dS$ and $-B_{2n} dS$. The flux through the side surfaces is negligible.
    $$ B_{1n} dS - B_{2n} dS = 0 $$
    Dividing by $dS$ and taking the limit as $dh \to 0$:
    $$ B_{1n} - B_{2n} = 0 $$
    or
    $$ B_{1n} = B_{2n} $$
    This means the normal component of $\mathbf{B}$ is continuous.

*   **Physical Significance:** This condition states that the normal component of the magnetic flux density is continuous across the boundary. This is a direct consequence of the absence of magnetic monopoles.

*   **In terms of $\mathbf{H}$:** Since $\mathbf{B} = \mu \mathbf{H}$, we have:
    $$ \mu_1 H_{1n} = \mu_2 H_{2n} $$
    This shows that the normal component of $\mathbf{H}$ is discontinuous if the permeabilities of the two media are different.

*   **Important Point:** The normal component of $\mathbf{B}$ is always continuous across any boundary.

*(Referenced from Sadiku, 7th Ed., Section 2.11; Hayt & Buck, 9th Ed., Section 7.10)*

**b) Tangential Component of $\mathbf{H}$:**

*   **Derivation:** Consider the same small rectangular loop straddling the boundary used for $\mathbf{E}$. Apply the Ampere-Maxwell Law in integral form:
    $$ \oint_C \mathbf{H} \cdot d\mathbf{l} = \int_S (\mathbf{J} + \frac{\partial \mathbf{D}}{\partial t}) \cdot d\mathbf{S} $$
    The integral of $\frac{\partial \mathbf{D}}{\partial t}$ over the infinitesimal volume of the loop goes to zero as the height $dh \to 0$.
    The integral of the conduction current density $\mathbf{J}$ through the surface of the loop is also zero if there is no volume current density within the loop. However, if there is a surface current density $\mathbf{J}_s$ flowing along the boundary, this current will be enclosed by the loop.
    The loop integral is:
    $$ H_{t1} w - H_{t2} w = I_{enclosed} $$
    where $I_{enclosed}$ is the total current enclosed by the loop. If the surface current density is $\mathbf{J}_s$, then $I_{enclosed} = J_s w$, where $J_s$ is the component of $\mathbf{J}_s$ tangential to the loop. Assuming the loop is oriented such that the side of length $w$ along the boundary encloses the current:
    $$ H_{t1} w - H_{t2} w = J_s w $$
    Dividing by $w$:
    $$ H_{t1} - H_{t2} = J_s $$
    or
    $$ (\mathbf{H}_1 - \mathbf{H}_2) \times \hat{n}_{12} = \mathbf{J}_s $$
    where $\hat{n}_{12}$ is the unit normal vector pointing from medium 2 to medium 1, and $\mathbf{J}_s$ is the surface current density.

*   **Physical Significance:** This condition states that the discontinuity in the tangential component of $\mathbf{H}$ across a boundary is equal to the surface current density present on that boundary. If there is no surface current ($\mathbf{J}_s = 0$), the tangential component of $\mathbf{H}$ is continuous.

*   **Important Point:** The tangential component of $\mathbf{H}$ is discontinuous if there is a surface current.

*(Referenced from Sadiku, 7th Ed., Section 2.11; Hayt & Buck, 9th Ed., Section 7.10)*

---

### Summary of Boundary Conditions:

Let medium 1 be on side of the boundary with normal $\hat{n}_1$ and medium 2 be on the side with normal $\hat{n}_2 = -\hat{n}_1$. Let $\hat{n}_{12}$ be the normal pointing from medium 2 to medium 1.

| Field Component       | Condition                                    | Governing Law     | Discontinuity due to |
| :-------------------- | :------------------------------------------- | :---------------- | :------------------- |
| **Normal $\mathbf{D}$** | $D_{1n} - D_{2n} = \rho_s$                   | Gauss's Law (E)   | Surface Charge ($\rho_s$) |
| **Tangential $\mathbf{E}$** | $E_{t1} - E_{t2} = 0 \implies E_{t1} = E_{t2}$ | Faraday's Law     | None                 |
| **Normal $\mathbf{B}$** | $B_{1n} - B_{2n} = 0 \implies B_{1n} = B_{2n}$ | Gauss's Law (M)   | None                 |
| **Tangential $\mathbf{H}$** | $H_{t1} - H_{t2} = J_s$                      | Ampere-Maxwell Law | Surface Current ($\mathbf{J}_s$) |

*(Referenced from Sadiku, 7th Ed., Table 2.1; Hayt & Buck, 9th Ed., Table 7.1)*

---

### Examples:

**Example 1: Interface between two Dielectrics ($\rho_s = 0, \mathbf{J}_s = 0$)**

Consider the interface between two lossless dielectric media with permittivities $\epsilon_1, \epsilon_2$ and permeabilities $\mu_1, \mu_2$. Assume no free charges or currents on the interface.

*   **Normal $\mathbf{D}$:** $D_{1n} - D_{2n} = 0 \implies D_{1n} = D_{2n}$
    Since $\mathbf{D}_1 = \epsilon_1 \mathbf{E}_1$ and $\mathbf{D}_2 = \epsilon_2 \mathbf{E}_2$, we have $\epsilon_1 E_{1n} = \epsilon_2 E_{2n}$.
    This means the normal component of $\mathbf{D}$ is continuous, but the normal component of $\mathbf{E}$ is discontinuous if $\epsilon_1 \neq \epsilon_2$.

*   **Tangential $\mathbf{E}$:** $E_{t1} = E_{t2}$
    The tangential component of $\mathbf{E}$ is continuous.

*   **Normal $\mathbf{B}$:** $B_{1n} = B_{2n}$
    The normal component of $\mathbf{B}$ is continuous. Since $\mathbf{B}_1 = \mu_1 \mathbf{H}_1$ and $\mathbf{B}_2 = \mu_2 \mathbf{H}_2$, we have $\mu_1 H_{1n} = \mu_2 H_{2n}$.
    The normal component of $\mathbf{H}$ is discontinuous if $\mu_1 \neq \mu_2$.

*   **Tangential $\mathbf{H}$:** $H_{t1} = H_{t2}$
    The tangential component of $\mathbf{H}$ is continuous.

**Example 2: Interface between a Dielectric and a Perfect Conductor ($\rho_s$ and $\mathbf{J}_s$ may exist)**

Consider a perfect conductor as medium 2, characterized by infinite conductivity. Inside a perfect conductor, the electric field and current density must be zero ($\mathbf{E}_{inside} = 0, \mathbf{J}_{inside} = 0$). For a time-varying field, $\mathbf{E}_{inside}=0$ implies $\mathbf{D}_{inside}=0$.

Let medium 1 be a dielectric and medium 2 be a perfect conductor. Let $\hat{n}$ be the outward normal from the conductor into the dielectric.

*   **Normal $\mathbf{D}$:** $D_{1n} - D_{2n} = \rho_s$
    Since medium 2 is a conductor, $\mathbf{D}_2 = \epsilon_2 \mathbf{E}_2 = 0$ (because $\mathbf{E}_2=0$ inside the conductor).
    So, $D_{1n} = \rho_s$. This implies the normal component of $\mathbf{D}$ in the dielectric is equal to the surface charge density on the conductor.

*   **Tangential $\mathbf{E}$:** $E_{t1} = E_{t2}$
    Since $\mathbf{E}_2 = 0$ inside the conductor, $E_{t1} = 0$.
    This means the tangential component of the electric field must be zero at the surface of a perfect conductor. The electric field lines must be perpendicular to the surface of a perfect conductor.

*   **Normal $\mathbf{B}$:** $B_{1n} = B_{2n}$
    Since $\nabla \cdot \mathbf{B} = 0$ and $\mathbf{B}$ is continuous across the boundary. If the field $\mathbf{B}_2$ inside the conductor is known, we can relate it to $\mathbf{B}_1$. For static fields, $\mathbf{B}$ can penetrate a conductor. However, for time-varying fields in perfect conductors, $\mathbf{B}$ is often considered to be zero inside due to perfect shielding (skin effect).

*   **Tangential $\mathbf{H}$:** $H_{t1} - H_{t2} = J_s$
    If $\mathbf{B}_2 = 0$ inside the conductor, then $\mathbf{H}_2 = 0$ (assuming $\mu_2$ is finite).
    So, $H_{t1} = J_s$. This means the tangential component of the magnetic field in the dielectric is equal to the surface current density on the conductor. The magnetic field lines are "bent" at the surface of a perfect conductor by the surface current.

**Example 3: Interface between a Dielectric and a Perfect Magnetic Conductor ($\rho_m$ and $\mathbf{J}_{ms}$ may exist)**

A perfect magnetic conductor is a hypothetical material with infinite magnetic conductivity. It repels magnetic fields. Inside a perfect magnetic conductor, $\mathbf{H} = 0$ and $\mathbf{B} = 0$.

Let medium 1 be a dielectric and medium 2 be a perfect magnetic conductor.

*   **Normal $\mathbf{H}$:** $H_{1n} - H_{2n} = K_{ms}$ (magnetic surface current density). Assuming $K_{ms}=0$.
    Since $\mathbf{H}_2 = 0$, $H_{1n} = 0$. This means the normal component of $\mathbf{H}$ must be zero at the surface of a perfect magnetic conductor. Magnetic field lines must be tangential to the surface.

*   **Tangential $\mathbf{E}$:** $E_{t1} = E_{t2}$
    Since $\mathbf{H}_2 = 0$ inside the conductor, if $\mathbf{B}_2 = 0$, then $\frac{\partial \mathbf{B}_2}{\partial t} = 0$. Faraday's law $\nabla \times \mathbf{E}_2 = -\frac{\partial \mathbf{B}_2}{\partial t}$ implies that the tangential component of $\mathbf{E}_2$ can be anything if $\mathbf{B}_2=0$. However, a simpler way to think is using the relationship from Ampere's Law: $\nabla \times \mathbf{H} = \mathbf{J} + \frac{\partial \mathbf{D}}{\partial t}$. If $\mathbf{H}=0$, then $\frac{\partial \mathbf{D}_2}{\partial t} = 0$ (assuming $\mathbf{J}_2=0$). This means $\mathbf{D}_2$ must be constant in time. The condition $E_{t1} = E_{t2}$ still holds.

*   **Normal $\mathbf{D}$:** $D_{1n} - D_{2n} = \rho_s$
    The normal component of $\mathbf{D}$ is related to the surface charge.

*   **Tangential $\mathbf{B}$:** $B_{t1} = B_{t2}$
    Since $\mathbf{B}_2 = 0$, $B_{t1} = 0$. This means the tangential component of the magnetic field must be zero at the surface of a perfect magnetic conductor. Magnetic field lines must be perpendicular to the surface.

*(Referenced from Basu, 1st Ed., Chapter 3; Nahvi & Edminister, 5th Ed., Chapter 8)*

---

### Practice Questions and Exercises:

**Question 1:**
State the four boundary conditions for electric and magnetic fields at the interface between two media. For each condition, mention the physical law from which it is derived and the quantity (surface charge or surface current) that can cause a discontinuity.

**Answer:**
*   **Normal $\mathbf{D}$:** $D_{1n} - D_{2n} = \rho_s$. Derived from Gauss's Law for Electricity. Discontinuity due to surface charge density ($\rho_s$).
*   **Tangential $\mathbf{E}$:** $E_{t1} = E_{t2}$. Derived from Faraday's Law. Tangential component is always continuous.
*   **Normal $\mathbf{B}$:** $B_{1n} = B_{2n}$. Derived from Gauss's Law for Magnetism. Normal component is always continuous.
*   **Tangential $\mathbf{H}$:** $H_{t1} - H_{t2} = J_s$. Derived from Ampere-Maxwell Law. Discontinuity due to surface current density ($\mathbf{J}_s$).

**Question 2:**
Consider the interface between a dielectric medium ($\epsilon_1, \mu_1$) and a perfect conductor. If the electric field in the dielectric just above the interface is $\mathbf{E}_1 = 100\mathbf{a}_x + 200\mathbf{a}_y + 300\mathbf{a}_z \, \text{V/m}$, and the interface is the xy-plane ($z=0$), with the dielectric occupying the region $z>0$, what is the tangential component of the electric field at the surface of the conductor?

**Answer:**
The tangential component of the electric field is continuous across the interface. Since the interface is the xy-plane, the tangential components are $\mathbf{E}_{t1} = E_{1x}\mathbf{a}_x + E_{1y}\mathbf{a}_y = 100\mathbf{a}_x + 200\mathbf{a}_y \, \text{V/m}$. The normal component is $\mathbf{E}_{1n} = E_{1z}\mathbf{a}_z = 300\mathbf{a}_z \, \text{V/m}$.
The boundary condition for the tangential electric field is $E_{t1} = E_{t2}$.
Since the second medium is a perfect conductor, the electric field inside it is zero: $\mathbf{E}_2 = 0$. Therefore, the tangential component of the electric field at the surface of the conductor, $\mathbf{E}_{t2}$, is also zero.
Thus, $E_{t1} = 0$. This means the electric field in the dielectric must be perpendicular to the surface of the perfect conductor.
The given electric field $\mathbf{E}_1 = 100\mathbf{a}_x + 200\mathbf{a}_y + 300\mathbf{a}_z$ has tangential components $100\mathbf{a}_x + 200\mathbf{a}_y$. For this field to exist at the boundary of a perfect conductor (where $E_t$ must be zero), it implies that the tangential components must vanish. This indicates that the given $\mathbf{E}_1$ is not a valid field configuration at the boundary of a perfect conductor.
**Revisiting the question:** If the question asks for the tangential component of the electric field *in the dielectric* just above the interface, then it is $100\mathbf{a}_x + 200\mathbf{a}_y \, \text{V/m}$. However, the boundary condition for a perfect conductor states that the *tangential* E-field must be zero. So, if this field existed, it would violate the boundary condition.
**Clarification for a valid scenario:** For a valid scenario at the interface of a perfect conductor, the electric field in the dielectric must be purely normal to the surface. For example, if $\mathbf{E}_1 = 300\mathbf{a}_z \, \text{V/m}$ at $z=0^+$, then $E_{t1} = 0$, and $E_{t2} = 0$, satisfying the boundary condition.

Let's rephrase the question to be more insightful:
**Question 2 (Revised):**
Consider the interface between a dielectric medium ($\epsilon_1, \mu_1$) and a perfect conductor. If the electric field in the dielectric just above the interface is $\mathbf{E}_1 = 100\mathbf{a}_x + 200\mathbf{a}_y + 300\mathbf{a}_z \, \text{V/m}$, and the interface is the xy-plane ($z=0$), with the dielectric occupying the region $z>0$. What is the surface charge density $\rho_s$ on the conductor?

**Answer:**
The boundary condition for the normal component of $\mathbf{D}$ is $D_{1n} - D_{2n} = \rho_s$.
Inside the perfect conductor ($z<0$), $\mathbf{E}_2 = 0$, so $\mathbf{D}_2 = \epsilon_2 \mathbf{E}_2 = 0$.
Therefore, $D_{1n} = \rho_s$.
The normal component of $\mathbf{E}_1$ is $E_{1z} = 300 \, \text{V/m}$.
So, $\rho_s = \epsilon_1 E_{1n} = \epsilon_1 E_{1z} = 300 \epsilon_1 \, \text{C/m}^2$.
The tangential component of $\mathbf{E}_1$ is $\mathbf{E}_{t1} = 100\mathbf{a}_x + 200\mathbf{a}_y \, \text{V/m}$. The boundary condition states $E_{t1} = E_{t2}$. Since $\mathbf{E}_2=0$, $E_{t2}=0$. This implies $E_{t1}$ must be zero. The given field $\mathbf{E}_1$ has a non-zero tangential component, meaning it violates the boundary condition for a perfect conductor. In a realistic scenario, for this $\mathbf{E}_1$ to exist, the medium would not be a perfect conductor, or the field would be different. Assuming a valid scenario where $\mathbf{E}_1$ is purely normal to the boundary, i.e., $\mathbf{E}_1 = 300\mathbf{a}_z \, \text{V/m}$, then $E_{t1}=0$, and $\rho_s = 300\epsilon_1 \, \text{C/m}^2$.

**Question 3:**
An electromagnetic wave is incident upon the interface between two dielectric media. What is the condition for the tangential component of the electric field across the boundary? Does it depend on the surface charge density?

**Answer:**
The boundary condition for the tangential component of the electric field is $E_{t1} = E_{t2}$. This means the tangential component of the electric field is continuous across the boundary between two dielectric media. This condition is derived from Faraday's Law and does not depend on the surface charge density. The surface charge density only affects the normal component of the electric flux density $\mathbf{D}$.

---

### Important Points to Remember:

*   Boundary conditions are direct consequences of Maxwell's equations applied to interfaces.
*   The tangential component of $\mathbf{E}$ is always continuous.
*   The normal component of $\mathbf{B}$ is always continuous.
*   Surface charges cause discontinuity in the normal component of $\mathbf{D}$.
*   Surface currents cause discontinuity in the tangential component of $\mathbf{H}$.
*   Perfect conductors require the tangential $\mathbf{E}$ and normal $\mathbf{D}$ (or $\mathbf{E}$) to be zero and non-zero, respectively, with specific surface charge distributions.
*   Perfect magnetic conductors require the tangential $\mathbf{B}$ and normal $\mathbf{H}$ to be zero.

---

### Alignment with Course Outcomes:

*   **CO1: Summarize the basic mathematical concepts related to electromagnetic vector fields. (Knowledge Level: K2)**
    This topic reinforces the understanding of vector fields ($\mathbf{E}, \mathbf{D}, \mathbf{B}, \mathbf{H}$) and their components (tangential, normal) through the derivation of boundary conditions.

*   **CO2: Apply Maxwell’s equations in different forms to diverse electromagnetic problems. (Knowledge Level: K3)**
    This topic directly applies Maxwell's equations (Gauss's Laws, Faraday's Law, Ampere-Maxwell Law) in their differential and integral forms to derive practical conditions used in solving electromagnetic problems involving multiple media.

*   **CO3: Analyze reflection, refraction and power density of electromagnetic waves. (Knowledge Level: K3)**
    Boundary conditions are the *foundation* for analyzing phenomena like reflection and refraction of electromagnetic waves at interfaces. By satisfying these conditions, we can determine the reflected and transmitted fields, and subsequently, the reflection and transmission coefficients and power density.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


### Further Reading:

*   **Sadiku, M. N. O. (2018). *Elements of Electromagnetics* (7th ed.). Oxford University Press.** (Chapter 2: Electric Fields in material space; specifically, Section 2.11 on Boundary Conditions)
*   **Hayt, W. H., & Buck, J. A. (2019). *Engineering Electromagnetics* (9th ed.). McGraw-Hill Higher Education.** (Chapter 7: Dielectric Materials and Capacitance; specifically, Section 7.7 on Boundary conditions for electrostatics and Section 7.10 on Boundary conditions for magnetostatics)
*   **Reddy, Y. M. (2015). *Electromagnetic Waves and Transmission Lines*. The Orient Blackswan.** (Relevant sections on wave propagation and interfaces)
*   **Nahvi, M., & Edminister, J. (2019). *Schaum's Outline of Electromagnetics* (5th ed.). McGraw-Hill.** (Chapter 8 on Boundary value problems and Chapter 10 on Waves)
*   **Basu, B. N. (2015). *Engineering Electromagnetics Essentials*. The Orient Blackswan.** (Chapter 3 on Electrostatic boundary conditions and Chapter 5 on Magnetostatic boundary conditions)

---

This concludes the study notes for boundary conditions of electric and magnetic fields from Maxwell's equations. Remember to practice applying these conditions to various scenarios to solidify your understanding.