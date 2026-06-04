---
title: "Review of Coulomb’s law, Gauss’s law and Ampere’s current law."
subject: "ELECTROMAGNETICS"
module: "Module 1: Review of coordinate system"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c45fb09ce205780fe8cb"
status: "completed"
scrapedAt: "2026-05-23T17:56:26.154Z"
---
## ELECTROMAGNETICS - Module 1: Review of Coordinate Systems

### Topic: Review of Coulomb's Law, Gauss's Law, and Ampere's Current Law

---

### **Introduction**

This module serves as a foundational review of the fundamental laws governing electrostatics and magnetostatics. Understanding these laws is crucial for comprehending more advanced concepts in electromagnetics, particularly Maxwell's equations. We will revisit Coulomb's Law for the force between point charges, Gauss's Law relating electric flux to enclosed charge, and Ampere's Law connecting magnetic fields to current. This review aligns with **Course Outcome CO1: Summarize the basic mathematical concepts related to electromagnetic vector fields (Knowledge Level: K2)**.

---

### **1. Coulomb's Law**

**Key Concept:** Coulomb's Law describes the force exerted by one point charge on another. It is the electrostatic analogue of Newton's Law of Universal Gravitation.

**Definition:** The force between two point charges $q_1$ and $q_2$ separated by a distance $r$ is directly proportional to the product of their magnitudes and inversely proportional to the square of the distance between them. The force acts along the line joining the two charges.

**Mathematical Formulation:**

In vector form, the force $\vec{F}_{12}$ exerted by charge $q_1$ on charge $q_2$ is given by:

$$ \vec{F}_{12} = \frac{1}{4\pi\epsilon_0} \frac{q_1 q_2}{r^2} \hat{a}_{r12} $$

Where:
*   $q_1, q_2$: Magnitudes of the point charges.
*   $r$: Distance between the charges.
*   $\epsilon_0$: Permittivity of free space (a fundamental constant, approximately $8.854 \times 10^{-12}$ F/m).
*   $\hat{a}_{r12}$: Unit vector pointing from $q_1$ to $q_2$.

**Important Points:**
*   **Like charges repel, unlike charges attract.**
*   **Superposition Principle:** The total force on a charge due to a system of charges is the vector sum of the forces exerted by each individual charge.
    $$ \vec{F} = \sum_{i=1}^{n} \vec{F}_i $$
*   **Electric Field Intensity ($\vec{E}$):** The force per unit positive test charge.
    $$ \vec{E} = \frac{\vec{F}}{q_0} $$
    Therefore, the electric field due to a point charge $q$ at a distance $r$ is:
    $$ \vec{E} = \frac{1}{4\pi\epsilon_0} \frac{q}{r^2} \hat{a}_r $$
    Where $\hat{a}_r$ is the unit vector pointing radially away from the charge.

**Textbook References:**
*   **Sadiku, 7th Ed.:** Chapter 2, Section 2.1 (Coulomb's Law and Electric Field Intensity).
*   **Hayt & Buck, 9th Ed.:** Chapter 2, Section 2-1 (Coulomb's Law and the Electric Field).

**Example:**
Calculate the force on a charge $q_1 = 2 \mu C$ at the origin due to a charge $q_2 = -3 \mu C$ at $(0, 4, 0)$ m.

*   $q_1 = 2 \times 10^{-6}$ C
*   $q_2 = -3 \times 10^{-6}$ C
*   Position of $q_1$: $\vec{r}_1 = (0, 0, 0)$
*   Position of $q_2$: $\vec{r}_2 = (0, 4, 0)$
*   Vector from $q_1$ to $q_2$: $\vec{R}_{12} = \vec{r}_2 - \vec{r}_1 = (0, 4, 0)$
*   Distance $r_{12} = |\vec{R}_{12}| = \sqrt{0^2 + 4^2 + 0^2} = 4$ m
*   Unit vector $\hat{a}_{r12} = \frac{\vec{R}_{12}}{r_{12}} = \frac{(0, 4, 0)}{4} = (0, 1, 0) = \hat{a}_y$

$$ \vec{F}_{21} = \frac{1}{4\pi\epsilon_0} \frac{q_2 q_1}{r_{12}^2} \hat{a}_{r21} $$
Note: We are calculating the force *on* $q_1$ *by* $q_2$. So we use $\vec{F}_{12}$ formula but swap $q_1, q_2$ and use $\hat{a}_{r21}$.
Let's calculate force on $q_2$ by $q_1$:
$$ \vec{F}_{12} = \frac{1}{4\pi\epsilon_0} \frac{q_1 q_2}{r_{12}^2} \hat{a}_{r12} $$
$$ \vec{F}_{12} = (9 \times 10^9) \frac{(2 \times 10^{-6})(-3 \times 10^{-6})}{4^2} (0, 1, 0) $$
$$ \vec{F}_{12} = (9 \times 10^9) \frac{-6 \times 10^{-12}}{16} (0, 1, 0) $$
$$ \vec{F}_{12} = -3.375 \times 10^{-3} (0, 1, 0) = -3.375 \hat{a}_y \text{ mN} $$
Since the charges are of opposite sign, they attract. The force on $q_2$ is towards $q_1$ (along $-\hat{a}_y$).

---

### **2. Gauss's Law**

**Key Concept:** Gauss's Law provides an alternative and often simpler method to calculate the electric field, especially for charge distributions with high symmetry. It relates the electric flux through a closed surface to the total electric charge enclosed within that surface.

**Definition:** The total electric flux out of any closed surface is equal to the total electric charge enclosed by the surface divided by the permittivity of free space.

**Mathematical Formulation:**

In integral form:
$$ \oint_S \vec{E} \cdot d\vec{S} = \frac{Q_{enc}}{\epsilon_0} $$

Where:
*   $S$: A closed surface (Gaussian surface).
*   $\vec{E}$: Electric field intensity.
*   $d\vec{S}$: Differential surface area vector, normal to the surface and pointing outwards.
*   $Q_{enc}$: Total charge enclosed within the surface $S$.

**Differential Form (Maxwell's First Equation):**
$$ \nabla \cdot \vec{E} = \frac{\rho}{\epsilon_0} $$
Where $\rho$ is the volume charge density.

**Important Points:**
*   **Gaussian Surface:** This is an imaginary closed surface chosen to simplify the flux calculation. It should be chosen such that $\vec{E}$ is either constant and perpendicular to the surface, or parallel to the surface (zero flux) over portions of the surface.
*   **Symmetry is key:** Gauss's Law is most useful when the charge distribution possesses spherical, cylindrical, or planar symmetry.
*   **Applications:** Used to derive the electric field for:
    *   Infinitely long line of charge
    *   Infinitely large plane of charge
    *   Uniformly charged sphere

**Textbook References:**
*   **Sadiku, 7th Ed.:** Chapter 4, Section 4.1 (Electric Flux and Gauss's Law).
*   **Hayt & Buck, 9th Ed.:** Chapter 4, Section 4-1 (Gauss's Law).
*   **Reddy, 1st Ed.:** Chapter 4, Section 4.1 (Gauss’s Law).

**Example:**
Find the electric field intensity of an infinitely long line of charge with uniform linear charge density $\lambda$ C/m, located along the z-axis.

*   **Symmetry:** Cylindrical symmetry.
*   **Gaussian Surface:** A cylinder of radius $r$ and length $L$, coaxial with the line charge.
*   **Flux Calculation:**
    *   Flux through the curved surface: $\vec{E}$ is radial, $d\vec{S}$ is radial. $\vec{E} \cdot d\vec{S} = E \, dS$.
    *   Flux through the top and bottom caps: $\vec{E}$ is radial, $d\vec{S}$ is axial. $\vec{E} \cdot d\vec{S} = 0$.
*   **Enclosed Charge:** $Q_{enc} = \lambda L$.
*   **Applying Gauss's Law:**
    $$ \oint_S \vec{E} \cdot d\vec{S} = \int_{curved} \vec{E} \cdot d\vec{S} + \int_{caps} \vec{E} \cdot d\vec{S} $$
    $$ \int_{curved} E \, dS = E \int_{curved} dS = E (2\pi r L) $$
    So, $E (2\pi r L) = \frac{\lambda L}{\epsilon_0}$
    $$ E = \frac{\lambda}{2\pi\epsilon_0 r} $$
*   **Electric Field Vector:** $\vec{E} = \frac{\lambda}{2\pi\epsilon_0 r} \hat{a}_r$ (in cylindrical coordinates).

---

### **3. Ampere's Current Law**

**Key Concept:** Ampere's Law relates the magnetic field intensity around a closed loop to the total electric current passing through the surface bounded by that loop. It is the magnetic analogue of Gauss's Law.

**Definition:** The line integral of the magnetic field intensity $\vec{H}$ around any closed path is equal to the net electric current $I$ that is enclosed by the path.

**Mathematical Formulation:**

In integral form:
$$ \oint_L \vec{H} \cdot d\vec{l} = I_{enc} $$

Where:
*   $L$: A closed path (Amperian loop).
*   $\vec{H}$: Magnetic field intensity.
*   $d\vec{l}$: Differential length vector along the path $L$.
*   $I_{enc}$: The total current passing through any surface bounded by the loop $L$.

**Differential Form (Maxwell's Third Equation - for static fields):**
$$ \nabla \times \vec{H} = \vec{J} $$
Where $\vec{J}$ is the current density.

**Important Points:**
*   **Amperian Loop:** Similar to the Gaussian surface, the Amperian loop should be chosen such that the calculation of the line integral is simplified. This typically occurs when $\vec{H}$ is constant and parallel to $d\vec{l}$, or when $\vec{H}$ is perpendicular to $d\vec{l}$ (zero contribution to the integral).
*   **Symmetry is key:** Ampere's Law is most useful for calculating magnetic fields of current distributions with high symmetry:
    *   Infinite line of current
    *   Infinite sheet of current
    *   Solenoid
    *   Toroid
*   **Displacement Current (for time-varying fields):** For time-varying fields, the current $I_{enc}$ in Ampere's Law must be replaced by the total current, which includes displacement current. This leads to the more general form of Ampere's Law within Maxwell's equations. However, for this review of *current* law, we focus on static or quasi-static cases.

**Textbook References:**
*   **Sadiku, 7th Ed.:** Chapter 5, Section 5.1 (Ampere's Law).
*   **Hayt & Buck, 9th Ed.:** Chapter 7, Section 7-1 (Ampere's Law).
*   **Reddy, 1st Ed.:** Chapter 5, Section 5.1 (Ampere’s Law).

**Example:**
Find the magnetic field intensity of an infinite line current $I$ along the z-axis.

*   **Symmetry:** Cylindrical symmetry.
*   **Amperian Loop:** A circle of radius $r$, centered on the z-axis, lying in a plane perpendicular to the z-axis.
*   **Line Integral Calculation:**
    *   By symmetry, $\vec{H}$ is azimuthal ($\hat{a}_{\phi}$) and constant in magnitude along the loop.
    *   $d\vec{l}$ is also in the azimuthal direction. $\vec{H} \cdot d\vec{l} = H \, dl$.
*   **Enclosed Current:** $I_{enc} = I$ (assuming the loop encircles the wire).
*   **Applying Ampere's Law:**
    $$ \oint_L \vec{H} \cdot d\vec{l} = \int_0^{2\pi r} H \, dl = H \int_0^{2\pi r} dl = H (2\pi r) $$
    So, $H (2\pi r) = I$
    $$ H = \frac{I}{2\pi r} $$
*   **Magnetic Field Intensity Vector:** $\vec{H} = \frac{I}{2\pi r} \hat{a}_{\phi}$ (in cylindrical coordinates).

---

### **4. Relationship to Course Outcomes**

*   **CO1: Summarize the basic mathematical concepts related to electromagnetic vector fields (Knowledge Level: K2)**
    *   This entire module directly addresses CO1 by reviewing the fundamental vector laws (Coulomb's Law, Gauss's Law, Ampere's Law) that define electric and magnetic fields. We use vector notation and calculus concepts (divergence, curl) in their differential forms.

---

### **5. Key Concepts and Definitions Summary**

| Law             | Concept                                                                                                  | Integral Form                                             | Differential Form ($\nabla$ operator) | Key Parameters                                                              | Symmetry Use                                      |
| :-------------- | :------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------- | :------------------------------------ | :-------------------------------------------------------------------------- | :-------------------------------------------------- |
| **Coulomb's Law** | Force between point charges; defines Electric Field Intensity ($\vec{E}$)                                | (Force) $\vec{F}_{12} = \frac{1}{4\pi\epsilon_0} \frac{q_1 q_2}{r^2} \hat{a}_{r12}$ | $\nabla \cdot \vec{E} = \frac{\rho}{\epsilon_0}$  | Charge ($q$), Distance ($r$), Permittivity ($\epsilon_0$)                 | N/A for calculation, but basis for symmetry analysis |
| **Gauss's Law**   | Relates electric flux through a closed surface to enclosed charge.                                       | $\oint_S \vec{E} \cdot d\vec{S} = \frac{Q_{enc}}{\epsilon_0}$ | $\nabla \cdot \vec{E} = \frac{\rho}{\epsilon_0}$  | Electric Field ($\vec{E}$), Surface Area ($S$), Enclosed Charge ($Q_{enc}$), Permittivity ($\epsilon_0$) | Spherical, Cylindrical, Planar                  |
| **Ampere's Law**  | Relates line integral of $\vec{H}$ around a closed loop to enclosed current.                             | $\oint_L \vec{H} \cdot d\vec{l} = I_{enc}$                 | $\nabla \times \vec{H} = \vec{J}$     | Magnetic Field ($\vec{H}$), Path Length ($L$), Enclosed Current ($I_{enc}$), Current Density ($\vec{J}$) | Cylindrical, Solenoidal, Toroidal                   |

---

### **6. Practice Questions and Exercises**

**Question 1:**
Two point charges, $q_1 = +5 \mu C$ and $q_2 = -10 \mu C$, are located at $(1, 0, 0)$ m and $(4, 0, 0)$ m respectively. Calculate the electric field intensity at the origin $(0, 0, 0)$.

**Question 2:**
An infinite plane of charge with uniform surface charge density $\rho_s = 2 \mu C/m^2$ lies in the xy-plane. Using Gauss's Law, determine the electric field intensity at a point $(0, 0, 5)$ m.

**Question 3:**
A long straight wire carries a current of 10 A along the z-axis. Calculate the magnetic field intensity at a point $(0, 2, 0)$ m.

**Question 4:**
State the condition under which Gauss's Law can be easily applied to calculate the electric field.

**Question 5:**
Is Ampere's Law valid for time-varying currents? Explain briefly.

---

### **7. Answers to Practice Questions**

**Answer 1:**
*   Charge $q_1 = 5 \times 10^{-6}$ C at $\vec{r}_1 = (1, 0, 0)$.
*   Charge $q_2 = -10 \times 10^{-6}$ C at $\vec{r}_2 = (4, 0, 0)$.
*   Point of interest: $\vec{r} = (0, 0, 0)$.

*   Electric field due to $q_1$ at the origin:
    *   Vector from $q_1$ to origin: $\vec{R}_{1} = (0,0,0) - (1,0,0) = (-1, 0, 0)$.
    *   Distance $r_1 = 1$ m.
    *   Unit vector $\hat{a}_{r1} = (-1, 0, 0) = -\hat{a}_x$.
    *   $\vec{E}_1 = \frac{1}{4\pi\epsilon_0} \frac{q_1}{r_1^2} \hat{a}_{r1} = (9 \times 10^9) \frac{5 \times 10^{-6}}{1^2} (-\hat{a}_x) = -45 \hat{a}_x \text{ kV/m}$.

*   Electric field due to $q_2$ at the origin:
    *   Vector from $q_2$ to origin: $\vec{R}_{2} = (0,0,0) - (4,0,0) = (-4, 0, 0)$.
    *   Distance $r_2 = 4$ m.
    *   Unit vector $\hat{a}_{r2} = (-1, 0, 0) = -\hat{a}_x$.
    *   $\vec{E}_2 = \frac{1}{4\pi\epsilon_0} \frac{q_2}{r_2^2} \hat{a}_{r2} = (9 \times 10^9) \frac{-10 \times 10^{-6}}{4^2} (-\hat{a}_x) = (9 \times 10^9) \frac{-10 \times 10^{-6}}{16} (-\hat{a}_x)$
    *   $\vec{E}_2 = (9 \times 10^9) (-0.625 \times 10^{-6}) (-\hat{a}_x) = 5.625 \hat{a}_x \text{ kV/m}$.

*   Total electric field: $\vec{E} = \vec{E}_1 + \vec{E}_2 = (-45 + 5.625) \hat{a}_x = -39.375 \hat{a}_x \text{ kV/m}$.

**Answer 2:**
For an infinite plane of charge, the electric field is perpendicular to the plane. We choose a cylindrical Gaussian surface penetrating the plane perpendicularly.
*   Surface charge density $\rho_s = 2 \mu C/m^2$.
*   Using Gauss's Law, $\oint_S \vec{E} \cdot d\vec{S} = \frac{Q_{enc}}{\epsilon_0}$.
*   Due to symmetry, $\vec{E}$ is uniform and perpendicular to the plane. The flux through the curved surface of the cylinder is zero.
*   Flux through the top cap: $E \cdot A$. Flux through the bottom cap: $E \cdot A$.
*   $Q_{enc} = \rho_s A$ (where $A$ is the area of the cap).
*   $2EA = \frac{\rho_s A}{\epsilon_0} \implies E = \frac{\rho_s}{2\epsilon_0}$.
*   $E = \frac{2 \times 10^{-6}}{2 \times 8.854 \times 10^{-12}} = \frac{10^{-6}}{8.854 \times 10^{-12}} \approx 112.9 \times 10^3 \text{ V/m} = 112.9 \text{ kV/m}$.
*   Since the charge is positive, the field points away from the plane. At $(0, 0, 5)$ m, the field is in the $+\hat{a}_z$ direction.
*   $\vec{E} = 112.9 \hat{a}_z \text{ kV/m}$.

**Answer 3:**
Using Ampere's Law for an infinite line current:
*   Current $I = 10$ A.
*   The point is $(0, 2, 0)$ m, which is at a radial distance $r=2$ m from the z-axis.
*   $H = \frac{I}{2\pi r} = \frac{10}{2\pi (2)} = \frac{10}{4\pi} \approx 0.796$ A/m.
*   The magnetic field is azimuthal. At $(0, 2, 0)$, the direction is $+\hat{a}_y$.
*   $\vec{H} = 0.796 \hat{a}_y \text{ A/m}$.

**Answer 4:**
Gauss's Law can be easily applied when the electric field has a high degree of symmetry (spherical, cylindrical, or planar) such that the flux integral $\oint_S \vec{E} \cdot d\vec{S}$ can be simplified by choosing an appropriate Gaussian surface where $\vec{E}$ is constant and perpendicular to the surface, or parallel to the surface.

**Answer 5:**
No, the integral form of Ampere's Law $\oint_L \vec{H} \cdot d\vec{l} = I_{enc}$ is only valid for **static or quasi-static fields**. For time-varying fields, it must be modified by Maxwell to include the displacement current term: $\oint_L \vec{H} \cdot d\vec{l} = I_{enc} + \frac{d\Phi_E}{dt}$, where $\frac{d\Phi_E}{dt}$ is the rate of change of electric flux. This leads to the differential form $\nabla \times \vec{H} = \vec{J} + \frac{\partial \vec{D}}{\partial t}$.

---

### **8. Important Points to Remember**

*   **Vector Nature:** All quantities (force, field, etc.) are vectors. Always consider magnitude and direction.
*   **Permittivity of Free Space ($\epsilon_0$):** A fundamental constant in electrostatics.
*   **Superposition:** The effect of multiple charges or currents is the sum of their individual effects.
*   **Symmetry:** Identifying symmetry is crucial for effectively using Gauss's Law and Ampere's Law.
*   **Gaussian Surface vs. Amperian Loop:** Gaussian surfaces are for electric fields (related to flux), while Amperian loops are for magnetic fields (related to line integral).
*   **Differential vs. Integral Forms:** Both forms are equivalent and provide different perspectives on the laws. The differential forms are more general and are the building blocks of Maxwell's Equations.

---

This concludes the review of Coulomb's Law, Gauss's Law, and Ampere's Current Law. These fundamental principles are essential for building a strong understanding of electromagnetics.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
