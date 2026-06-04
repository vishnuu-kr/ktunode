---
title: "Buckling and stability of long columns-Euler’s buckling/crippling load for 
columns with different end conditions- Euler equation derivation for both 
ends hinged only- Rankine’s formula"
subject: "MECHANICS OF SOLIDS"
module: "Module 4: Stress on an inclined plane due to Uniaxial stress"
branch: "Mechanical Engineering"
semester: 3
topicId: "68a3fd1251d0cf4804462cfd"
status: "completed"
scrapedAt: "2026-05-20T17:51:09.876Z"
---
## Mechanics of Solids - Module 4: Stress on an Inclined Plane due to Uniaxial Stress

**Topic:** Buckling and Stability of Long Columns

---

### Introduction to Column Buckling

Columns are structural members that are primarily subjected to **axial compressive loads**. When a slender column is subjected to a sufficiently large compressive load, it can suddenly deform laterally, causing a catastrophic failure. This phenomenon is known as **buckling**.

*   **Buckling:** A phenomenon where a slender structural member under compression suddenly undergoes a large lateral deflection.
*   **Critical Load (or Buckling Load/Crippling Load):** The minimum axial compressive load at which a column will buckle.

This topic focuses on the **stability of long columns** under axial compression and the determination of their buckling load.

---

### Euler's Buckling/Crippling Load for Columns with Different End Conditions

The stability of a column is highly dependent on how its ends are supported. Different end conditions affect the column's ability to resist buckling. Euler's formula provides a theoretical estimate for the buckling load of a column based on its material properties, length, and end conditions.

**Key Concepts:**

*   **Slenderness Ratio (λ):** A dimensionless quantity that represents the ratio of the column's length to its least radius of gyration. It is a crucial factor in determining whether a column will buckle or yield.
    *   $ \lambda = \frac{L}{k} $
        *   $L$: Length of the column
        *   $k$: Least radius of gyration ($k = \sqrt{\frac{I_{min}}{A}}$ where $I_{min}$ is the minimum moment of inertia and $A$ is the cross-sectional area).
*   **Radius of Gyration ($k$):** A property of a cross-section that indicates how the area is distributed about the centroidal axis. A smaller radius of gyration implies a greater susceptibility to buckling.
*   **Effective Length ($L_e$):** The equivalent length of a pinned-pinned column that would buckle under the same load. The effective length depends on the end conditions and is often expressed as $L_e = \mu L$, where $\mu$ is the effective length factor.

**Euler's Formula for Buckling Load ($P_{cr}$):**

The general form of Euler's formula for the buckling load of a column is:

$P_{cr} = \frac{\pi^2 EI}{(L_e)^2}$

Where:
*   $P_{cr}$: Euler's buckling load (N)
*   $E$: Modulus of elasticity of the column material (Pa)
*   $I$: Minimum moment of inertia of the column's cross-section (m⁴)
*   $L_e$: Effective length of the column (m)

**Effective Length Factors ($\mu$) for Different End Conditions:**

The effective length ($L_e$) is directly related to the actual length ($L$) by an effective length factor ($\mu$), which accounts for the end restraints.

| End Conditions                                    | Diagram                                    | Effective Length ($L_e$) | Effective Length Factor ($\mu$) |
| :------------------------------------------------ | :----------------------------------------- | :----------------------- | :------------------------------ |
| **Both ends pinned (hinged)**                     | ![Pinned-Pinned Column](https://i.imgur.com/8z8z8zW.png) | $L$                      | $1.0$                           |
| **One end fixed, one end free**                   | ![Fixed-Free Column](https://i.imgur.com/7z9z9z9.png) | $2L$                     | $2.0$                           |
| **Both ends fixed**                               | ![Fixed-Fixed Column](https://i.imgur.com/3x3x3x3.png) | $0.5L$                   | $0.5$                           |
| **One end fixed, one end pinned**                 | ![Fixed-Pinned Column](https://i.imgur.com/4y4y4y4.png) | $0.7L$                   | $0.7$                           |

**Important Note:** Euler's formula is applicable only for **long columns** where the buckling stress is below the proportional limit of the material. It assumes that the material remains elastic.

---

### Euler Equation Derivation for Both Ends Hinged

This is a fundamental derivation in column stability.

**Assumptions:**

1.  The column is perfectly straight initially.
2.  The load is applied axially and gradually.
3.  The column material is homogeneous, isotropic, and obeys Hooke's Law (elastic behavior).
4.  The column is slender and buckling occurs before yielding.
5.  Lateral deflection is small.
6.  Ends are pinned (hinged), allowing rotation but preventing lateral movement.

**Derivation:**

Consider a column of length $L$ subjected to an axial compressive load $P$. Let the column deflect laterally by an amount $y$ at a distance $x$ from the fixed end.

*   **Bending Moment ($M$):** Due to the lateral deflection, a bending moment is induced at any cross-section. The bending moment is proportional to the lateral deflection and is directed to resist the buckling.
    *   $M = -Py$ (The negative sign indicates that the moment opposes the deflection).

*   **Flexural Rigidity:** The product of the Young's modulus ($E$) and the moment of inertia ($I$) of the cross-section.

*   **Differential Equation of the Elastic Curve:** From the theory of bending, the relationship between bending moment and the curvature of the elastic curve is:
    $M = EI \frac{d^2y}{dx^2}$

*   **Combining the Equations:** Equating the two expressions for the bending moment:
    $EI \frac{d^2y}{dx^2} = -Py$

    Rearranging the equation:
    $\frac{d^2y}{dx^2} + \frac{P}{EI}y = 0$

    This is a second-order linear homogeneous differential equation of the form $\frac{d^2y}{dx^2} + k^2y = 0$, where $k^2 = \frac{P}{EI}$.

*   **General Solution:** The general solution to this differential equation is:
    $y(x) = A \sin(kx) + B \cos(kx)$
    where $A$ and $B$ are constants of integration.

*   **Applying Boundary Conditions (Pinned-Pinned ends):**
    *   At $x=0$ (one end), $y=0$.
    *   At $x=L$ (other end), $y=0$.

    Applying the first boundary condition ($y(0) = 0$):
    $0 = A \sin(k \cdot 0) + B \cos(k \cdot 0)$
    $0 = A \cdot 0 + B \cdot 1$
    $B = 0$

    So, the equation becomes: $y(x) = A \sin(kx)$

    Applying the second boundary condition ($y(L) = 0$):
    $0 = A \sin(kL)$

    For a non-trivial solution (i.e., $A \neq 0$ for buckling to occur), we must have:
    $\sin(kL) = 0$

    This implies:
    $kL = n\pi$, where $n = 1, 2, 3, ...$

*   **Finding the Critical Load:** Substituting $k = \sqrt{\frac{P}{EI}}$:
    $\sqrt{\frac{P}{EI}} L = n\pi$
    $\frac{P}{EI} L^2 = (n\pi)^2$
    $P = \frac{n^2 \pi^2 EI}{L^2}$

    The minimum load for buckling occurs when $n=1$ (this corresponds to the first mode of buckling, where the column forms a single half-sine wave).
    Therefore, the Euler's buckling load ($P_{cr}$) for a pinned-pinned column is:

    $P_{cr} = \frac{\pi^2 EI}{L^2}$

    This is Euler's formula for a column with both ends hinged.

---

### Rankine's Formula

Rankine's formula is an empirical formula used to estimate the buckling load for columns that are not necessarily very long. It accounts for both **buckling (Euler's regime)** and **crushing (yield strength)**. It is particularly useful for intermediate-length columns.

**Concept:**

Rankine's formula is based on the idea that the total strain in the column at failure is the sum of the elastic strain (due to buckling) and the inelastic strain (due to crushing). The reciprocal of the buckling load is related to the reciprocal of the Euler buckling load and the reciprocal of the crushing load.

**Formula:**

$\frac{1}{P_{cr}} = \frac{1}{P_E} + \frac{1}{P_C}$

Where:
*   $P_{cr}$: Rankine's crippling load (N)
*   $P_E$: Euler's buckling load for the column with appropriate end conditions ($P_E = \frac{\pi^2 EI}{L_e^2}$)
*   $P_C$: Crushing load, which is the load at which the column will crush or yield if it were very short. $P_C = \sigma_c A$, where $\sigma_c$ is the crushing strength (or yield strength in compression) of the material and $A$ is the cross-sectional area.

**Rewriting Rankine's Formula:**

The formula can be rewritten in a more practical form:

$P_{cr} = \frac{\sigma_c A}{1 + a (\frac{L_e}{k})^2}$

Where:
*   $\sigma_c$: Crushing strength of the material (often taken as the yield strength in compression or a specific empirical value).
*   $A$: Cross-sectional area of the column.
*   $a$: Rankine's constant, which depends on the end conditions and the material's cross-sectional shape.
    *   For mild steel, $a \approx 1/7500$.
    *   For cast iron, $a \approx 1/1600$.
*   $L_e$: Effective length of the column.
*   $k$: Least radius of gyration of the column's cross-section.
*   $\frac{L_e}{k}$: Slenderness ratio.

**Derivation of the Practical Form:**

Starting with $\frac{1}{P_{cr}} = \frac{1}{P_E} + \frac{1}{P_C}$:

Substitute $P_E = \frac{\pi^2 EI}{L_e^2}$ and $P_C = \sigma_c A$:

$\frac{1}{P_{cr}} = \frac{1}{\frac{\pi^2 EI}{L_e^2}} + \frac{1}{\sigma_c A}$

$\frac{1}{P_{cr}} = \frac{L_e^2}{\pi^2 EI} + \frac{1}{\sigma_c A}$

Divide by $A$ and rearrange:

$\frac{1}{P_{cr}A} = \frac{L_e^2}{\pi^2 E I A} + \frac{1}{\sigma_c A^2}$

Multiply by $A$:

$\frac{1}{P_{cr}} = \frac{L_e^2}{\pi^2 EI} + \frac{1}{\sigma_c A}$

Now, relate $I$ to $k$: $I = Ak^2$.

$\frac{1}{P_{cr}} = \frac{L_e^2}{\pi^2 E (Ak^2)} + \frac{1}{\sigma_c A}$

$\frac{1}{P_{cr}} = \frac{1}{A} \left( \frac{L_e^2}{\pi^2 E k^2} + \frac{1}{\sigma_c} \right)$

To match the form $P_{cr} = \frac{\sigma_c A}{1 + a (\frac{L_e}{k})^2}$, let's manipulate the expression inside the parenthesis on the right side:

$\frac{L_e^2}{\pi^2 E k^2} + \frac{1}{\sigma_c} = \frac{\sigma_c L_e^2 + \pi^2 E k^2}{\sigma_c \pi^2 E k^2}$

So, $\frac{1}{P_{cr}} = \frac{1}{A} \left( \frac{\sigma_c L_e^2 + \pi^2 E k^2}{\sigma_c \pi^2 E k^2} \right)$

$P_{cr} = \frac{A \sigma_c \pi^2 E k^2}{\sigma_c L_e^2 + \pi^2 E k^2}$

Divide numerator and denominator by $\sigma_c \pi^2 E k^2$:

$P_{cr} = \frac{A}{\frac{\sigma_c L_e^2}{\sigma_c \pi^2 E k^2} + \frac{\pi^2 E k^2}{\sigma_c \pi^2 E k^2}}$

$P_{cr} = \frac{A}{\frac{L_e^2}{\pi^2 E k^2} + \frac{1}{\sigma_c}}$

This is not quite the standard form. Let's work backwards from the standard form:

$P_{cr} = \frac{\sigma_c A}{1 + a (\frac{L_e}{k})^2}$

$\frac{1}{P_{cr}} = \frac{1 + a (\frac{L_e}{k})^2}{\sigma_c A} = \frac{1}{\sigma_c A} + \frac{a L_e^2}{\sigma_c A k^2}$

Compare this with $\frac{1}{P_{cr}} = \frac{L_e^2}{\pi^2 EI} + \frac{1}{\sigma_c A}$:

$\frac{L_e^2}{\pi^2 EI} = \frac{a L_e^2}{\sigma_c A k^2}$

$\frac{1}{\pi^2 E I} = \frac{a}{\sigma_c A k^2}$

Substitute $I = Ak^2$:

$\frac{1}{\pi^2 E (Ak^2)} = \frac{a}{\sigma_c A k^2}$

$\frac{1}{\pi^2 E} = \frac{a}{\sigma_c}$

$a = \frac{\sigma_c}{\pi^2 E}$

This shows the relationship between the constant 'a' and the material properties. The practical form $P_{cr} = \frac{\sigma_c A}{1 + a (\frac{L_e}{k})^2}$ is often used with empirical values for 'a'.

**When is Rankine's Formula Used?**

*   For intermediate-length columns where both yielding and buckling can occur.
*   When experimental data is available to determine the constant 'a'.

---

### Learning Outcomes Addressed:

*   **CO1: Determine the stresses and strains in deformable bodies subjected to different types of external loads and thermal effects.**
    *   While this module is focused on buckling, the underlying principle of stress within the column before buckling is elastic. The Euler load is derived based on the elastic modulus ($E$) and the bending stresses induced by lateral deflection. Rankine's formula further incorporates the material's yield/crushing strength ($\sigma_c$).

*   **CO2: Analyse the torsion of circular bars and draw the shear force and bending moment diagrams for beams.**
    *   This outcome is not directly addressed by this specific topic.

*   **CO3: Determine the stresses and deflections in beams subjected to transverse loads.**
    *   The derivation of Euler's formula for columns utilizes the fundamental beam bending equation ($M = EI \frac{d^2y}{dx^2}$), which is also central to analyzing stresses and deflections in beams. The concept of lateral deflection is directly analogous to beam deflection.

*   **CO4: Determine analytically and graphically the principal stresses and planes for structural members subjected to loads and analyse the strength of columns.**
    *   This is the most directly relevant outcome. We are analytically determining the strength of columns by calculating their buckling loads using Euler's and Rankine's formulas. The concept of stability under axial load is crucial for column strength analysis.

---

### Important Points to Remember:

*   **Buckling is a stability failure, not a strength failure.** It occurs when the equilibrium of the column becomes unstable.
*   **Euler's formula is valid for long, slender columns** where buckling occurs before yielding.
*   **End conditions significantly affect the buckling load.** Pinned-pinned is the weakest, while fixed-fixed is the strongest.
*   **Slenderness ratio ($L/k$) is a critical parameter.** Higher slenderness ratio means a higher chance of buckling.
*   **Radius of gyration ($k$) indicates resistance to buckling.** A smaller $k$ means less resistance.
*   **Rankine's formula is an empirical approach** that accounts for both buckling and yielding, suitable for intermediate-length columns.
*   **The crushing strength ($\sigma_c$) and Rankine's constant ($a$) are material-dependent.**

---

### Examples:

**Example 1 (Euler's Formula - Pinned-Pinned Column):**
A steel column of length 3m, 20mm x 40mm rectangular cross-section, is pinned at both ends. Calculate the Euler buckling load.
Given: $E_{steel} = 200 \text{ GPa} = 200 \times 10^9 \text{ N/m}^2$.

**Solution:**
1.  **Calculate Moment of Inertia (I):** For a rectangle, $I = \frac{bh^3}{12}$. We need the *minimum* moment of inertia.
    *   $b = 20 \text{ mm} = 0.02 \text{ m}$, $h = 40 \text{ mm} = 0.04 \text{ m}$
    *   $I_{2-2} = \frac{0.02 \times (0.04)^3}{12} = 2.667 \times 10^{-7} \text{ m}^4$
    *   $I_{1-1} = \frac{0.04 \times (0.02)^3}{12} = 0.2667 \times 10^{-7} \text{ m}^4$
    *   Minimum $I = I_{min} = 0.2667 \times 10^{-7} \text{ m}^4$

2.  **Determine Effective Length ($L_e$):** For pinned-pinned ends, $L_e = L = 3 \text{ m}$.

3.  **Calculate Euler Buckling Load ($P_{cr}$):**
    $P_{cr} = \frac{\pi^2 EI}{L_e^2}$
    $P_{cr} = \frac{\pi^2 \times (200 \times 10^9 \text{ N/m}^2) \times (0.2667 \times 10^{-7} \text{ m}^4)}{(3 \text{ m})^2}$
    $P_{cr} = \frac{9.8696 \times 200 \times 10^9 \times 0.2667 \times 10^{-7}}{9}$
    $P_{cr} = \frac{5264.1}{9} \text{ N}$
    $P_{cr} \approx 584.9 \text{ kN}$

**Example 2 (Rankine's Formula):**
A cast-iron column of length 2m, circular cross-section with diameter 50mm, has one end fixed and the other end pinned. Calculate the buckling load using Rankine's formula.
Given:
*   Crushing strength of cast iron ($\sigma_c$) = 800 MPa = $800 \times 10^6 \text{ N/m}^2$.
*   $E_{cast iron} = 100 \text{ GPa} = 100 \times 10^9 \text{ N/m}^2$.
*   Rankine's constant ($a$) for cast iron = $1/1600$.

**Solution:**
1.  **Calculate Moment of Inertia (I):** For a circular cross-section, $I = \frac{\pi d^4}{64}$.
    *   $d = 50 \text{ mm} = 0.05 \text{ m}$
    *   $I = \frac{\pi (0.05)^4}{64} = 3.068 \times 10^{-7} \text{ m}^4$

2.  **Calculate Cross-sectional Area (A):**
    *   $A = \frac{\pi d^2}{4} = \frac{\pi (0.05)^2}{4} = 1.963 \times 10^{-3} \text{ m}^2$

3.  **Determine Effective Length ($L_e$):** For one end fixed and one end pinned, $L_e = 0.7L$.
    *   $L_e = 0.7 \times 2 \text{ m} = 1.4 \text{ m}$

4.  **Calculate Slenderness Ratio Term:**
    *   First, find radius of gyration $k$: $k = \sqrt{\frac{I}{A}} = \sqrt{\frac{3.068 \times 10^{-7} \text{ m}^4}{1.963 \times 10^{-3} \text{ m}^2}} = 0.0125 \text{ m}$
    *   $\frac{L_e}{k} = \frac{1.4 \text{ m}}{0.0125 \text{ m}} = 112$
    *   $(\frac{L_e}{k})^2 = (112)^2 = 12544$

5.  **Calculate Rankine's Crippling Load ($P_{cr}$):**
    $P_{cr} = \frac{\sigma_c A}{1 + a (\frac{L_e}{k})^2}$
    $P_{cr} = \frac{(800 \times 10^6 \text{ N/m}^2) \times (1.963 \times 10^{-3} \text{ m}^2)}{1 + \frac{1}{1600} \times 12544}$
    $P_{cr} = \frac{1570400 \text{ N}}{1 + 7.84}$
    $P_{cr} = \frac{1570400 \text{ N}}{8.84}$
    $P_{cr} \approx 177647 \text{ N} \approx 177.6 \text{ kN}$

---

### Practice Questions:

1.  A steel column of length $2.5$ m has a solid circular cross-section of diameter $50$ mm. If both ends of the column are fixed, determine the crippling load. Assume $E_{steel} = 200$ GPa.
    *   **Answer:** Approximately 303.7 kN

2.  A column with a rectangular cross-section of $30$ mm $\times$ $60$ mm and length $2$ m is subjected to an axial compressive load. The column is pinned at both ends. If the crushing strength of the material is $300$ MPa and the Rankine's constant $a = 1/8000$, calculate the buckling load using Rankine's formula. Assume $E = 210$ GPa.
    *   **Answer:** Approximately 226.8 kN

3.  Compare the buckling loads for a column of length $L$ with (a) both ends hinged, (b) both ends fixed, and (c) one end fixed and the other end free, for the same material and cross-section.
    *   **Hint:** The ratio of buckling loads will be $P_{cr, hinged} : P_{cr, fixed} : P_{cr, fixed-free}$. Since $P_{cr} \propto \frac{1}{L_e^2}$, and $L_e = L, L/2, 2L$ respectively, the ratio will be $1 : 4 : 1/4$.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |


### References:

*   **Mechanics of Solids by R.K.Bansal (Laxmi Publications, 2012):** Chapter on Columns and Struts.
*   **Strength of Materials by Surendra Singh (S. K. Kataria & Sons, 2013):** Chapter on Columns and Struts.
*   **Mechanics of Materials by R. C. Hibbeler (Pearson Higher Education, 2018):** Chapter on Buckling.
*   **Engineering Mechanics of Solids by Popov E (PHI, 2002):** Chapter on Columns.

---