---
title: "Deflection of Beams: Moment-Curvature relation – assumptions 
and limitations - Double Integration method – Macaulay’s method"
subject: "MECHANICS OF SOLIDS"
module: "Module 3: Stresses in Beams: Pure Bending – Flexure formula for beams "
branch: "Mechanical Engineering"
semester: 3
topicId: "68a3fd1251d0cf4804462cf9"
status: "completed"
scrapedAt: "2026-05-20T17:51:07.761Z"
---
# Mechanics of Solids: Module 3 - Stresses in Beams: Pure Bending – Flexure Formula for Beams (Continued)

## Topic: Deflection of Beams: Moment-Curvature Relation, Double Integration Method, Macaulay's Method

This section builds upon the concepts of stresses in beams under pure bending to understand how beams deform (deflect) under various loading conditions.

---

### 1. Moment-Curvature Relation

#### 1.1 Introduction to Beam Deflection

*   **Definition:** Deflection of a beam refers to the displacement of a point on the beam from its original unloaded position due to applied loads. It's a crucial aspect in structural design to ensure serviceability and prevent excessive deformation.
*   **Importance:**
    *   **Serviceability:** Excessive deflection can lead to aesthetic issues, functional problems (e.g., cracking of finishes), and discomfort to users.
    *   **Stiffness:** Beams are designed not only for strength but also for stiffness, which is directly related to their resistance to deflection.
    *   **Stability:** In some cases, excessive deflection can lead to instability.

#### 1.2 Derivation of the Moment-Curvature Relation

This relation connects the internal bending moment in a beam to its curvature.

*   **Assumptions (for Pure Bending leading to this relation):**
    1.  **Plane Sections Remain Plane:** Cross-sections that are plane before bending remain plane after bending. This implies that the longitudinal strain varies linearly across the depth of the beam.
    2.  **Homogeneous and Isotropic Material:** The material has uniform properties in all directions and at all points.
    3.  **Linear Elastic Material:** The material obeys Hooke's Law (stress is proportional to strain).
    4.  **Symmetric Beam or Loads:** The beam is symmetric about the plane of bending, or the loads are applied symmetrically.
    5.  **Small Deflections:** The deflections are small compared to the beam's dimensions, allowing for certain approximations. This means the neutral axis remains essentially horizontal and the curvature is small.
    6.  **No Axial Forces:** The bending is pure, meaning no axial forces are acting on the beam.

*   **Key Concepts:**
    *   **Neutral Axis (NA):** The axis within the beam where the longitudinal strain (and hence stress) is zero during bending. In pure bending of symmetric beams, it passes through the centroid of the cross-section.
    *   **Curvature (κ or 1/ρ):** The reciprocal of the radius of curvature ($\rho$). It represents how much a curve bends.

*   **Derivation Steps:**
    1.  Consider a small segment of a beam subjected to pure bending with a bending moment $M$.
    2.  Let the original length of this segment be $\Delta x$. After bending, it forms an arc of a circle with radius of curvature $\rho$. The new length of this segment becomes $\Delta s = \rho \Delta \theta$, where $\Delta \theta$ is the angle subtended by the arc at the center of curvature.
    3.  Consider a fiber at a distance $y$ from the neutral axis. Its original length is $\Delta x$. After bending, its new length is $(\rho + y) \Delta \theta$.
    4.  The strain ($\epsilon$) in this fiber is given by:
        $\epsilon = \frac{\text{Change in length}}{\text{Original length}} = \frac{(\rho + y)\Delta \theta - \rho \Delta \theta}{\rho \Delta \theta} = \frac{y \Delta \theta}{\rho \Delta \theta} = \frac{y}{\rho}$
    5.  From Hooke's Law, $\sigma = E \epsilon$. Substituting the strain:
        $\sigma = E \frac{y}{\rho}$
    6.  Now, consider the bending stress distribution. The resultant moment of the stresses across the cross-section must equal the applied bending moment $M$.
        $M = \int_A y \, d\sigma \, dA$ (Moment of stress couple about NA)
    7.  Substitute $\sigma = E \frac{y}{\rho}$:
        $M = \int_A y \left(E \frac{y}{\rho}\right) dA = \frac{E}{\rho} \int_A y^2 dA$
    8.  The term $\int_A y^2 dA$ is the second moment of area (or moment of inertia) of the cross-section about the neutral axis, denoted by $I$.
    9.  Therefore, $M = \frac{EI}{\rho}$.
    10. The curvature $\kappa$ is defined as $\kappa = \frac{1}{\rho}$.
    11. **Moment-Curvature Relation:**
        $$ \frac{1}{\rho} = \frac{M}{EI} $$
        or
        $$ \kappa = \frac{M}{EI} $$
    *   **Interpretation:** The curvature of a beam is directly proportional to the bending moment and inversely proportional to the flexural rigidity ($EI$). $E$ is the Young's modulus of the material, and $I$ is the moment of inertia of the cross-section about the neutral axis.

#### 1.3 Relation to Beam Deflection (for Small Deflections)

For small deflections, the curvature of the elastic curve (the deformed shape of the beam) can be approximated by the second derivative of the deflection with respect to $x$.

*   Let $y(x)$ be the deflection of the beam at a distance $x$ from the origin.
*   The slope of the elastic curve is $\frac{dy}{dx}$.
*   The curvature for a curve $y=f(x)$ is given by $\frac{y''}{(1 + (y')^2)^{3/2}}$.
*   Since deflections are small, the slope $\frac{dy}{dx}$ is very small. Therefore, $(y')^2$ is negligible compared to 1.
*   The curvature is approximately $\frac{d^2y}{dx^2}$.
*   Equating this to the moment-curvature relation:
    $$ \frac{d^2y}{dx^2} = \frac{M(x)}{EI} $$
    This is the fundamental differential equation for beam deflection.

#### 1.4 Assumptions and Limitations of the Moment-Curvature Relation and its Application to Deflection

*   **Assumptions:**
    *   **Small Deflections:** This is crucial. If deflections are large, the geometry changes significantly, the NA may not remain horizontal, and the relation $\frac{d^2y}{dx^2} \approx \frac{1}{\rho}$ breaks down.
    *   **Linear Elastic Material:** Assumes stress is proportional to strain, and the material returns to its original shape upon unloading.
    *   **Plane Sections Remain Plane:** Essential for linear strain distribution.
    *   **Homogeneous and Isotropic Material:** Simplifies the derivation of $\sigma = E\epsilon$.
    *   **Beam is Initially Straight:** The formula is derived for beams that are straight before loading.
    *   **Pure Bending (initially):** The derivation for $1/\rho = M/EI$ starts with pure bending. However, the equation $\frac{d^2y}{dx^2} = \frac{M(x)}{EI}$ is valid for beams subjected to transverse loads as long as the shear strains are negligible compared to bending strains. This is typically true for slender beams.

*   **Limitations:**
    *   **Large Deflections:** Not applicable. For large deflections, more complex non-linear analysis is required.
    *   **Material Failure:** If the stress exceeds the yield strength, the material behaves non-linearly, and the relation is invalid.
    *   **Shear Deformation:** The derivation assumes that shear deformation is negligible. This is generally true for slender beams (length much greater than depth). For deep beams, shear deformation can contribute significantly to the total deflection and needs to be accounted for separately.
    *   **Composite or Non-homogeneous Beams:** If $E$ varies across the cross-section, a transformed section approach or a modified moment of inertia is needed.
    *   **Non-planar Bending:** This derivation is for bending in a single plane.
    *   **Initial Curvature:** If the beam is initially curved, the equation needs modification.

---

### 2. Double Integration Method

This is a direct analytical method to solve the differential equation $\frac{d^2y}{dx^2} = \frac{M(x)}{EI}$ for beam deflection.

#### 2.1 Procedure

1.  **Determine the Bending Moment Equation, $M(x)$:**
    *   Draw the Shear Force Diagram (SFD) and Bending Moment Diagram (BMD) for the beam.
    *   Establish a coordinate system (usually with the origin at one end of the beam).
    *   Write the equation for the bending moment $M(x)$ as a function of $x$ along the length of the beam. This often requires dividing the beam into segments if the loading changes.

2.  **Substitute $M(x)$ into the Governing Equation:**
    $$ EI \frac{d^2y}{dx^2} = M(x) $$
    $$ \frac{d^2y}{dx^2} = \frac{M(x)}{EI} $$

3.  **Integrate Once to Find the Slope Equation:**
    Integrate the equation from step 2 with respect to $x$ to obtain the slope, $\frac{dy}{dx}$:
    $$ EI \frac{dy}{dx} = \int M(x) \, dx + C_1 $$
    $C_1$ is the first constant of integration.

4.  **Integrate Again to Find the Deflection Equation:**
    Integrate the slope equation with respect to $x$ to obtain the deflection, $y(x)$:
    $$ EI y(x) = \iint M(x) \, dx \, dx + C_1 x + C_2 $$
    $C_2$ is the second constant of integration.

5.  **Apply Boundary Conditions (BCs) to Determine Constants $C_1$ and $C_2$:**
    Boundary conditions are known values of deflection or slope at specific points on the beam (usually at supports). Common BCs include:
    *   **Simply Supported End:** Deflection is zero ($y=0$) at the support.
    *   **Fixed End:** Deflection is zero ($y=0$) and slope is zero ($\frac{dy}{dx}=0$) at the support.
    *   **Free End:** No specific BC for deflection or slope unless it's a cantilever with a known tip condition.

6.  **Write the Final Slope and Deflection Equations:**
    Substitute the values of $C_1$ and $C_2$ back into the equations from steps 3 and 4.

#### 2.2 Example: Simply Supported Beam with Uniformly Distributed Load (UDL)

*   **Problem:** A simply supported beam of length $L$ is subjected to a UDL of intensity $w$ per unit length. Find the deflection curve.
*   **Referencing Textbooks:** This is a classic example found in Bansal, Bhavikatti, Surendra Singh, and Rattan.

*   **Steps:**
    1.  **Bending Moment Equation:**
        *   Consider a section at distance $x$ from the left support A.
        *   Reactions at supports A and B are $R_A = R_B = \frac{wL}{2}$.
        *   Moment at section $x$: $M(x) = R_A x - \frac{w x^2}{2} = \frac{wL}{2} x - \frac{w x^2}{2}$.

    2.  **Governing Equation:**
        $$ EI \frac{d^2y}{dx^2} = \frac{wL}{2} x - \frac{w x^2}{2} $$

    3.  **First Integration (Slope):**
        $$ EI \frac{dy}{dx} = \int \left(\frac{wL}{2} x - \frac{w x^2}{2}\right) dx = \frac{wL}{2} \frac{x^2}{2} - \frac{w}{2} \frac{x^3}{3} + C_1 $$
        $$ EI \frac{dy}{dx} = \frac{wLx^2}{4} - \frac{wx^3}{6} + C_1 $$

    4.  **Second Integration (Deflection):**
        $$ EI y(x) = \int \left(\frac{wLx^2}{4} - \frac{wx^3}{6} + C_1\right) dx = \frac{wL}{4} \frac{x^3}{3} - \frac{w}{6} \frac{x^4}{4} + C_1 x + C_2 $$
        $$ EI y(x) = \frac{wLx^3}{12} - \frac{wx^4}{24} + C_1 x + C_2 $$

    5.  **Boundary Conditions:**
        *   At support A ($x=0$), deflection $y=0$.
        *   At support B ($x=L$), deflection $y=0$.

        *   **Applying BC at $x=0$:**
            $EI (0) = \frac{wL(0)^3}{12} - \frac{w(0)^4}{24} + C_1 (0) + C_2$
            $0 = 0 - 0 + 0 + C_2 \implies C_2 = 0$.

        *   **Applying BC at $x=L$ (with $C_2=0$):**
            $EI (0) = \frac{wL(L)^3}{12} - \frac{w(L)^4}{24} + C_1 (L) + 0$
            $0 = \frac{wL^4}{12} - \frac{wL^4}{24} + C_1 L$
            $0 = \frac{2wL^4 - wL^4}{24} + C_1 L$
            $0 = \frac{wL^4}{24} + C_1 L$
            $C_1 L = -\frac{wL^4}{24} \implies C_1 = -\frac{wL^3}{24}$.

    6.  **Final Deflection Equation:**
        Substitute $C_1$ and $C_2$:
        $$ EI y(x) = \frac{wLx^3}{12} - \frac{wx^4}{24} - \frac{wL^3}{24} x $$
        $$ y(x) = \frac{1}{EI} \left(\frac{wLx^3}{12} - \frac{wx^4}{24} - \frac{wL^3}{24} x\right) $$

    7.  **Maximum Deflection:**
        The maximum deflection occurs at the center of the beam ($x = L/2$) due to symmetry.
        $y_{max} = y(L/2) = \frac{1}{EI} \left(\frac{wL(L/2)^3}{12} - \frac{w(L/2)^4}{24} - \frac{wL^3}{24} \frac{L}{2}\right)$
        $y_{max} = \frac{1}{EI} \left(\frac{wL^4}{96} - \frac{wL^4}{384} - \frac{wL^4}{48}\right)$
        $y_{max} = \frac{wL^4}{EI} \left(\frac{1}{96} - \frac{1}{384} - \frac{1}{48}\right)$
        $y_{max} = \frac{wL^4}{EI} \left(\frac{4 - 1 - 8}{384}\right) = \frac{wL^4}{EI} \left(\frac{-5}{384}\right)$
        The negative sign indicates downward deflection.
        $$ y_{max} = -\frac{5wL^4}{384EI} $$

#### 2.3 Important Points for Double Integration Method

*   **Sign Convention for M(x):** Be consistent. Typically, sagging moments are positive, leading to positive curvature. If $M(x)$ is positive, $y''(x)$ is positive.
*   **Sign Convention for y(x):** Typically, downward deflection is negative.
*   **Piecewise Integration:** If the moment equation $M(x)$ is defined by different expressions over different segments of the beam, you need to apply the integration process segment by segment. The constants of integration ($C_1, C_2$, etc.) are determined by continuity conditions at the junction of segments (slope and deflection must be continuous) and the boundary conditions at the supports. This can become complex.

---

### 3. Macaulay's Method

Macaulay's method (also known as the method of discontinuity functions) is a more convenient approach for beam deflection when dealing with concentrated loads or sudden changes in distributed loads. It simplifies the process of handling piecewise moment equations by using special "Macaulay brackets" or "discontinuity functions."

#### 3.1 Macaulay Brackets

The Macaulay bracket $[x-a]^n$ is defined as:
*   $[x-a]^n = (x-a)^n$ if $x \ge a$
*   $[x-a]^n = 0$ if $x < a$

For $n=0$, it's $[x-a]^0$, which is a unit step function.

#### 3.2 Application to Bending Moment Equation

The key advantage is that we can write a single equation for the bending moment $M(x)$ that is valid over the entire beam, even if the loading changes.

*   **Example:** A beam with a point load $P$ at $x=a$ and a UDL of intensity $w$ starting at $x=b$.
    The bending moment equation can be written as:
    $M(x) = \text{(Moment due to left support reaction)} - \text{(Moment due to point load)} - \text{(Moment due to UDL)}$
    $M(x) = R_A x - P[x-a]^1 - \frac{w}{2}[x-b]^2$

*   **Integration of Macaulay Brackets:**
    *   $\int [x-a]^n dx = \frac{[x-a]^{n+1}}{n+1} + C$ (for $n \ge 0$)
    *   $\iint [x-a]^n dx dx = \frac{[x-a]^{n+2}}{(n+1)(n+2)} + C_1 x + C_2$ (for $n \ge 0$)

#### 3.3 Procedure

1.  **Draw SFD and BMD:** Understand the loading and support reactions.
2.  **Write a Single $M(x)$ Equation using Macaulay Brackets:**
    *   Establish a coordinate system.
    *   Start from one end (e.g., left).
    *   Include terms for reactions, point loads, and distributed loads.
    *   For a point load $P$ at $x=a$, the moment contribution is $-P[x-a]^1$.
    *   For a UDL of $w$ starting at $x=a$, the moment contribution is $-\frac{w}{2}[x-a]^2$.
    *   For a UDL of $w$ extending from $x=a$ to $x=b$, it's often easier to consider a UDL of $w$ from $x=a$ up to the end, and then cancel it out by adding a UDL of $-w$ from $x=b$. So, it becomes $-\frac{w}{2}[x-a]^2 + \frac{w}{2}[x-b]^2$.
3.  **Integrate Twice:** Integrate the $M(x)$ equation twice using the rules for Macaulay brackets.
    $EI \frac{d^2y}{dx^2} = M(x)$
    $EI \frac{dy}{dx} = \int M(x) dx + C_1$
    $EI y(x) = \iint M(x) dx dx + C_1 x + C_2$
4.  **Apply Boundary Conditions:** Use the same BCs as in the double integration method. The key is that at any point $x$, the Macaulay bracket $[x-a]$ will be zero if $x < a$. This means the terms for loads beyond the current point $x$ are automatically zero.

#### 3.4 Example: Simply Supported Beam with a Point Load at Mid-Span

*   **Problem:** A simply supported beam of length $L$ has a point load $P$ acting at its center ($x=L/2$). Find the deflection curve.
*   **Referencing Textbooks:** This example is common and well-covered.

*   **Steps:**
    1.  **Reactions:** $R_A = R_B = P/2$.
    2.  **$M(x)$ Equation using Macaulay Brackets:**
        *   Let's take the origin at the left support A.
        *   Moment due to $R_A$: $+R_A x = \frac{P}{2} x$.
        *   Moment due to point load $P$ at $x=L/2$: $-P [x - L/2]^1$.
        *   $M(x) = \frac{P}{2} x - P [x - L/2]^1$.

    3.  **Governing Equation:**
        $EI \frac{d^2y}{dx^2} = \frac{P}{2} x - P [x - L/2]^1$

    4.  **First Integration (Slope):**
        $EI \frac{dy}{dx} = \int \left(\frac{P}{2} x - P [x - L/2]^1\right) dx$
        $EI \frac{dy}{dx} = \frac{P}{2} \frac{x^2}{2} - P \frac{[x - L/2]^2}{2} + C_1$
        $EI \frac{dy}{dx} = \frac{Px^2}{4} - \frac{P}{2} [x - L/2]^2 + C_1$

    5.  **Second Integration (Deflection):**
        $EI y(x) = \int \left(\frac{Px^2}{4} - \frac{P}{2} [x - L/2]^2 + C_1\right) dx$
        $EI y(x) = \frac{P}{4} \frac{x^3}{3} - \frac{P}{2} \frac{[x - L/2]^3}{3} + C_1 x + C_2$
        $EI y(x) = \frac{Px^3}{12} - \frac{P}{6} [x - L/2]^3 + C_1 x + C_2$

    6.  **Boundary Conditions:**
        *   At $x=0$, $y=0$.
        *   At $x=L$, $y=0$.

        *   **Applying BC at $x=0$:**
            $EI (0) = \frac{P(0)^3}{12} - \frac{P}{6} [0 - L/2]^3 + C_1 (0) + C_2$
            $0 = 0 - \frac{P}{6} (0) + 0 + C_2 \implies C_2 = 0$. (Note: $[0-L/2]^3 = 0$ as $0 < L/2$).

        *   **Applying BC at $x=L$ (with $C_2=0$):**
            $EI (0) = \frac{P(L)^3}{12} - \frac{P}{6} [L - L/2]^3 + C_1 (L) + 0$
            $0 = \frac{PL^3}{12} - \frac{P}{6} [L/2]^3 + C_1 L$
            $0 = \frac{PL^3}{12} - \frac{P}{6} \frac{L^3}{8} + C_1 L$
            $0 = \frac{PL^3}{12} - \frac{PL^3}{48} + C_1 L$
            $0 = \frac{4PL^3 - PL^3}{48} + C_1 L$
            $0 = \frac{3PL^3}{48} + C_1 L$
            $0 = \frac{PL^3}{16} + C_1 L$
            $C_1 L = -\frac{PL^3}{16} \implies C_1 = -\frac{PL^2}{16}$.

    7.  **Final Deflection Equation:**
        $EI y(x) = \frac{Px^3}{12} - \frac{P}{6} [x - L/2]^3 - \frac{PL^2}{16} x$
        $$ y(x) = \frac{1}{EI} \left(\frac{Px^3}{12} - \frac{P}{6} [x - L/2]^3 - \frac{PL^2}{16} x\right) $$

    8.  **Maximum Deflection:**
        For this case, the maximum deflection occurs at $x = L/2$ (due to symmetry).
        $y_{max} = y(L/2) = \frac{1}{EI} \left(\frac{P(L/2)^3}{12} - \frac{P}{6} [L/2 - L/2]^3 - \frac{PL^2}{16} \frac{L}{2}\right)$
        $y_{max} = \frac{1}{EI} \left(\frac{P L^3}{96} - \frac{P}{6} [0]^3 - \frac{PL^3}{32}\right)$
        $y_{max} = \frac{1}{EI} \left(\frac{PL^3}{96} - 0 - \frac{3PL^3}{96}\right)$
        $y_{max} = \frac{1}{EI} \left(-\frac{2PL^3}{96}\right) = -\frac{PL^3}{48EI}$
        $$ y_{max} = -\frac{PL^3}{48EI} $$

#### 3.5 Example: Simply Supported Beam with UDL Over a Part of the Span

*   **Problem:** A simply supported beam of length $L$ is subjected to a UDL of intensity $w$ over its entire length. (This was solved using double integration, let's re-solve with Macaulay's method).
*   **Referencing Textbooks:** Same as before.

*   **Steps:**
    1.  **Reactions:** $R_A = R_B = \frac{wL}{2}$.
    2.  **$M(x)$ Equation using Macaulay Brackets:**
        *   Moment due to $R_A$: $+\frac{wL}{2} x$.
        *   Moment due to UDL $w$ from $x=0$ to $x=L$. We model this as a UDL of $w$ starting at $x=0$ and then cancelling it with a UDL of $-w$ starting at $x=L$.
        *   Moment due to UDL $w$ from $x=0$: $-\frac{w}{2} [x-0]^2 = -\frac{w x^2}{2}$.
        *   Moment due to UDL $-w$ from $x=L$: $+\frac{w}{2} [x-L]^2$.
        *   $M(x) = \frac{wL}{2} x - \frac{w x^2}{2} + \frac{w}{2} [x-L]^2$.
        *(Note: For this specific case of UDL over the entire span, the term $\frac{w}{2}[x-L]^2$ is zero for $x < L$. So, $M(x) = \frac{wL}{2} x - \frac{w x^2}{2}$ for the region $0 \le x \le L$, which is the same as the double integration method.)*

    3.  **Governing Equation:**
        $EI \frac{d^2y}{dx^2} = \frac{wL}{2} x - \frac{w x^2}{2} + \frac{w}{2} [x-L]^2$

    4.  **First Integration (Slope):**
        $EI \frac{dy}{dx} = \int \left(\frac{wL}{2} x - \frac{w x^2}{2} + \frac{w}{2} [x-L]^2\right) dx$
        $EI \frac{dy}{dx} = \frac{wL x^2}{4} - \frac{w x^3}{6} + \frac{w}{2} \frac{[x-L]^3}{3} + C_1$
        $EI \frac{dy}{dx} = \frac{wL x^2}{4} - \frac{w x^3}{6} + \frac{w}{6} [x-L]^3 + C_1$

    5.  **Second Integration (Deflection):**
        $EI y(x) = \int \left(\frac{wL x^2}{4} - \frac{w x^3}{6} + \frac{w}{6} [x-L]^3 + C_1\right) dx$
        $EI y(x) = \frac{wL x^3}{12} - \frac{w x^4}{24} + \frac{w}{6} \frac{[x-L]^4}{4} + C_1 x + C_2$
        $EI y(x) = \frac{wL x^3}{12} - \frac{w x^4}{24} + \frac{w}{24} [x-L]^4 + C_1 x + C_2$

    6.  **Boundary Conditions:**
        *   At $x=0$, $y=0$.
        *   At $x=L$, $y=0$.

        *   **Applying BC at $x=0$:**
            $EI (0) = \frac{wL (0)^3}{12} - \frac{w (0)^4}{24} + \frac{w}{24} [0-L]^4 + C_1 (0) + C_2$
            $0 = 0 - 0 + \frac{w}{24} (0) + 0 + C_2 \implies C_2 = 0$.

        *   **Applying BC at $x=L$ (with $C_2=0$):**
            $EI (0) = \frac{wL (L)^3}{12} - \frac{w (L)^4}{24} + \frac{w}{24} [L-L]^4 + C_1 (L) + 0$
            $0 = \frac{wL^4}{12} - \frac{wL^4}{24} + \frac{w}{24} [0]^4 + C_1 L$
            $0 = \frac{wL^4}{24} + 0 + C_1 L$
            $C_1 L = -\frac{wL^4}{24} \implies C_1 = -\frac{wL^3}{24}$.

    7.  **Final Deflection Equation:**
        $EI y(x) = \frac{wL x^3}{12} - \frac{w x^4}{24} + \frac{w}{24} [x-L]^4 - \frac{wL^3}{24} x$
        Since for $0 \le x \le L$, $[x-L]^4 = 0$, the equation for this region is:
        $EI y(x) = \frac{wL x^3}{12} - \frac{w x^4}{24} - \frac{wL^3}{24} x$
        $$ y(x) = \frac{1}{EI} \left(\frac{wL x^3}{12} - \frac{w x^4}{24} - \frac{wL^3}{24} x\right) $$
        This matches the result from the double integration method.

#### 3.6 Advantages of Macaulay's Method

*   **Simplicity:** Handles multiple loads and changes in loading with a single equation.
*   **Efficiency:** Reduces the need for piecewise integration and continuity conditions between segments.
*   **Less Error-Prone:** Fewer steps and fewer constants to determine if done correctly.

#### 3.7 Limitations of Macaulay's Method

*   **Same as Double Integration:** Still relies on the same fundamental assumptions (small deflections, linear elasticity, plane sections remain plane, etc.).
*   **Requires careful formulation of $M(x)$:** Incorrect setup of the Macaulay bracket terms can lead to wrong results.
*   **Still requires boundary conditions:** The constants of integration are determined by BCs.

---

### 4. Summary of Learning Outcomes and Course Outcomes Alignment

*   **Learning Outcomes:**
    *   **Moment-Curvature Relation:** Covered in Section 1.
    *   **Assumptions and Limitations:** Covered in Section 1.4.
    *   **Double Integration Method:** Covered in Section 2.
    *   **Macaulay's Method:** Covered in Section 3.

*   **Course Outcomes (COs):**
    *   **CO1 (Determine stresses and strains):** While this section focuses on deflection, understanding the moment-curvature relation ($M/EI$) is derived from the stress-strain relation ($\sigma=E\epsilon$) and the flexure formula ($\sigma = My/I$), so it's indirectly covered.
    *   **CO2 (Analyse torsion, SFD/BMD):** SFD and BMD are prerequisites for finding $M(x)$ in both methods.
    *   **CO3 (Determine stresses and deflections in beams):** This entire section is dedicated to determining deflections in beams. Stresses are implicitly handled by the $M/EI$ relation.
    *   **CO4 (Principal stresses, columns):** Not directly covered in this specific section.

---

### 5. Practice Questions and Exercises

**Question 1:**
A cantilever beam of length $L$ is subjected to a point load $P$ at its free end. Using the Double Integration method, determine the deflection curve and the maximum deflection.
*   **Answer:** $y(x) = -\frac{Px^2}{6EI}(3L - x)$, $y_{max} = -\frac{PL^3}{3EI}$ (at $x=L$).

**Question 2:**
For the cantilever beam described in Question 1, derive the deflection equation using Macaulay's method.
*   **Answer:** Set up $M(x) = -P[x-L]^1$. Integrating twice and applying BCs $y(0)=0$ and $y'(0)=0$ leads to $y(x) = \frac{P}{6EI}(x-L)^3$. For $0 \le x \le L$, this is $y(x) = -\frac{P}{6EI}(L-x)^3$, which can be shown to be equivalent to the result from Q1. *(Note: The negative sign in the Macaulay term is important to get the correct moment. Some conventions use the starting point as the origin for the brackets in cantilever cases.)*

    *   *Alternative setup for cantilever with origin at fixed end:*
        $M(x) = -Px$.
        $EI y'' = -Px$
        $EI y' = -Px^2/2 + C_1$
        $EI y = -Px^3/6 + C_1 x + C_2$
        BCs: $y(0)=0, y'(0)=0$.
        $C_2 = 0$, $C_1 = 0$.
        $y(x) = -Px^3/(6EI)$.

    *   *Using Macaulay's with origin at free end:*
        Let $x'$ be the distance from the free end. $x' = L-x$.
        $M(x') = Px'$.
        $EI y'' = Px'$
        $EI y' = Px'^2/2 + C_1$
        $EI y = Px'^3/6 + C_1 x' + C_2$
        BCs: $y(0)=0, y'(0)=0$ (at free end). $C_1=0, C_2=0$.
        $y(x') = Px'^3/(6EI)$.
        Substitute $x' = L-x$: $y(x) = P(L-x)^3/(6EI)$. This matches the previous result with the sign convention applied correctly.

**Question 3:**
A simply supported beam of length $L$ is subjected to a UDL of intensity $w$ over the first half of its span ($0 \le x \le L/2$). Using Macaulay's method, determine the deflection curve.
*   **Answer:**
    *   Reactions: $R_A = R_B = \frac{w(L/2)}{2} = \frac{wL}{4}$.
    *   $M(x) = \frac{wL}{4}x - \frac{w}{2}[x-0]^2 + \frac{w}{2}[x-L/2]^2$
    *   $EI y'' = \frac{wL}{4}x - \frac{w}{2}x^2 + \frac{w}{2}[x-L/2]^2$
    *   $EI y' = \frac{wLx^2}{8} - \frac{wx^3}{6} + \frac{w}{6}[x-L/2]^3 + C_1$
    *   $EI y = \frac{wLx^3}{24} - \frac{wx^4}{24} + \frac{w}{24}[x-L/2]^4 + C_1 x + C_2$
    *   BCs: $y(0)=0 \implies C_2=0$.
    *   $y(L)=0 \implies \frac{wL(L)^3}{24} - \frac{w(L)^4}{24} + \frac{w}{24}[L-L/2]^4 + C_1 L = 0$
    *   $0 - \frac{wL^4}{24} + \frac{w}{24}[L/2]^4 + C_1 L = 0$
    *   $-\frac{wL^4}{24} + \frac{wL^4}{384} + C_1 L = 0$
    *   $C_1 L = \frac{wL^4}{24} - \frac{wL^4}{384} = wL^4 (\frac{1}{24} - \frac{1}{384}) = wL^4 (\frac{16-1}{384}) = \frac{15wL^4}{384} = \frac{5wL^4}{128}$
    *   $C_1 = \frac{5wL^3}{128}$.
    *   $EI y(x) = \frac{wLx^3}{24} - \frac{wx^4}{24} + \frac{w}{24}[x-L/2]^4 + \frac{5wL^3}{128} x$
    *   $y(x) = \frac{w}{EI} \left( \frac{Lx^3}{24} - \frac{x^4}{24} + \frac{1}{24}[x-L/2]^4 + \frac{5L^3}{128} x \right)$

**Question 4:**
What are the main assumptions made when deriving the moment-curvature relationship and applying it to beam deflection? Briefly discuss the implications if these assumptions are violated.
*   **Answer:** See Section 1.4. Violations can lead to significant errors, especially for large deflections, non-linear materials, or deep beams (where shear deformation is significant).

---

### 6. Important Points to Remember

*   The fundamental equation for beam deflection is $\frac{d^2y}{dx^2} = \frac{M(x)}{EI}$.
*   The double integration method involves integrating this equation twice and using boundary conditions to find the constants.
*   Macaulay's method uses discontinuity functions $[x-a]^n$ to write a single bending moment equation for beams with multiple loads, simplifying the integration process.
*   Boundary conditions are crucial for determining the constants of integration. Common BCs include zero deflection and/or zero slope at supports.
*   The accuracy of these methods relies heavily on the assumption of small deflections and linear elastic behavior.
*   For cantilever beams, the origin is often placed at the fixed end to have simpler boundary conditions ($y=0, y'=0$).

---

### 7. Referencing and Content Incorporation

*   **R.K. Bansal (2012) & S. S. Bhavikatti (2013):** These textbooks provide comprehensive derivations of the moment-curvature relation, detailed steps for the double integration method with various examples (cantilevers, simply supported beams with point loads, UDLs, etc.), and explanations of Macaulay's method with similar examples. They emphasize the assumptions and limitations clearly.
*   **Surendra Singh (2013) & Rattan (2011):** These books also cover the same topics, often presenting the derivations and examples in a straightforward manner. They are good for reinforcing concepts and finding alternative problem-solving approaches.
*   **Hibbeler, Popov E., Beer & Johnston, Pytel & Kiusalaas:** These reference books provide a more in-depth theoretical background and often include advanced topics or a wider range of examples, which can be helpful for a deeper understanding. For instance, Hibbeler might discuss the physical interpretation of the curvature term more extensively.

The notes above are structured to reflect the common presentation of these topics in standard undergraduate mechanics of solids textbooks, incorporating the key concepts, procedures, and examples as found in the listed references. The emphasis on assumptions and limitations is a critical takeaway from all these texts.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
