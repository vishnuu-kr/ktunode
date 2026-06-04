---
title: "Dimensional  Analysis and Hydraulic similitude: Dimensional  analysis"
subject: "MECHANICS OF FLUID FLOW"
module: "Module 4: Dimensional  Analysis and Hydraulic similitude: Dimensional  analysis"
branch: "Civil Engineering"
semester: 4
topicId: "689f15cc56b5e963ba810a7e"
status: "completed"
scrapedAt: "2026-05-20T18:46:39.311Z"
---
# Mechanics of Fluid Flow: Module 4 - Dimensional Analysis and Hydraulic Similitude

## Topic: Dimensional Analysis

This module introduces the powerful techniques of dimensional analysis, which allows us to simplify complex fluid flow problems by reducing the number of variables involved. This is achieved by grouping these variables into dimensionless parameters, which are fundamental to understanding and scaling experimental results.

### Learning Outcomes:

Upon successful completion of this topic, you will be able to:

1.  **Understand the fundamental principles of dimensions and units.**
2.  **Apply the principle of dimensional homogeneity to equations.**
3.  **Master the Buckingham Pi Theorem for deriving dimensionless parameters.**
4.  **Identify and apply common dimensionless numbers in fluid mechanics.**
5.  **Formulate dimensionless relationships for various fluid flow phenomena.**
6.  **Understand the concept of hydraulic similitude and its applications.**

---

### 1. Fundamental Principles of Dimensions and Units

#### Key Concepts:

*   **Dimension:** A fundamental physical quantity, such as length, mass, or time, used to describe a physical property. Dimensions are abstract concepts.
*   **Unit:** A specific measure of a dimension, such as meters (m) for length, kilograms (kg) for mass, or seconds (s) for time. Units are concrete realizations of dimensions.

#### Primary Dimensions:

The most commonly used set of primary dimensions is the **MLT system**:

*   **M:** Mass
*   **L:** Length
*   **T:** Time

Other systems exist, such as the FLT system (Force, Length, Time), but MLT is generally preferred in fluid mechanics.

#### Derived Dimensions:

Dimensions of other physical quantities can be expressed as combinations of primary dimensions.

**Examples:**

*   **Velocity (V):** Length per unit time $\rightarrow$ **L/T** or **LT⁻¹**
*   **Acceleration (a):** Velocity per unit time $\rightarrow$ **(L/T)/T** = **L/T²** or **LT⁻²**
*   **Force (F):** Mass times acceleration $\rightarrow$ **M * (L/T²)** = **MLT⁻²**
*   **Pressure (P):** Force per unit area $\rightarrow$ **(MLT⁻²)/L²** = **ML⁻¹T⁻²**
*   **Energy (E):** Force times distance $\rightarrow$ **(MLT⁻²) * L** = **ML²T⁻²**
*   **Kinematic Viscosity (ν):** Viscosity / Density $\rightarrow$ **(ML⁻¹T⁻¹)/(ML⁻³) ** = **L²/T** or **L²T⁻¹**
*   **Dynamic Viscosity (μ):** Force times time per unit area $\rightarrow$ **(MLT⁻²)*T/L²** = **ML⁻¹T⁻¹**

---

### 2. Principle of Dimensional Homogeneity

#### Key Concept:

The principle of dimensional homogeneity states that any physically correct equation must have the same dimensions on both sides of the equation. Each term in an equation must also be dimensionally homogeneous.

#### Application:

This principle is crucial for:

*   **Checking the correctness of equations:** If an equation is dimensionally inconsistent, it is physically incorrect.
*   **Determining unknown exponents:** If some exponents in an equation are unknown, dimensional homogeneity can help determine them.
*   **Scaling experimental results:** It forms the basis for developing dimensionless parameters that allow scaling of results from models to prototypes.

#### Example:

Consider the equation for the force exerted by a fluid on a submerged object (drag force), which might be proposed as:

$F_D = \rho V^2 L^2$

Where:
*   $F_D$ = Drag Force (MLT⁻²)
*   $\rho$ = Density (ML⁻³)
*   $V$ = Velocity (LT⁻¹)
*   $L$ = Characteristic Length (L)

Let's check the dimensions:

*   **Left Side (LHS):** Dimensions of $F_D$ are **MLT⁻²**
*   **Right Side (RHS):** Dimensions of $\rho V^2 L^2$ are $(ML⁻³) \times (LT⁻¹)^2 \times L^2 = ML⁻³ \times L²T⁻² \times L² = ML^{( -3 + 2 + 2)} T⁻² = ML³T⁻²$

Since the dimensions on the LHS ($MLT⁻²$) are not equal to the dimensions on the RHS ($ML³T⁻²$), this proposed equation is dimensionally inconsistent and therefore incorrect. A correct form would involve a dimensionless coefficient, like $F_D = C_D \frac{1}{2} \rho V^2 A$, where $A$ is the reference area.

---

### 3. Buckingham Pi Theorem

#### Key Concept:

The Buckingham Pi Theorem is a fundamental theorem in dimensional analysis. It states that if there are 'n' variables in a physically dimensionally homogeneous problem, and these variables involve 'm' fundamental dimensions, then the problem can be expressed as $(n-m)$ independent dimensionless groups. Each dimensionless group is called a "Pi" ($\pi$) group.

**Mathematically:**

If a physical phenomenon is described by a function $f(v_1, v_2, ..., v_n) = 0$, where $v_i$ are the $n$ variables involved, and these variables depend on $m$ fundamental dimensions, then the relationship can be expressed in terms of $(n-m)$ dimensionless groups:

$\phi(\pi_1, \pi_2, ..., \pi_{n-m}) = 0$

#### Steps for Applying Buckingham Pi Theorem:

1.  **List all the relevant variables:** Identify all the physical quantities that affect the phenomenon under investigation.
2.  **Determine the dimensions of each variable:** Express each variable in terms of the fundamental dimensions (e.g., MLT).
3.  **Determine the number of fundamental dimensions (m):** Count the number of independent fundamental dimensions involved (usually 3: M, L, T).
4.  **Calculate the number of Pi groups (n-m):** Subtract the number of fundamental dimensions from the total number of variables.
5.  **Choose repeating variables:** Select a set of 'm' repeating variables from the list. These variables must be able to form all the fundamental dimensions. Common choices for repeating variables are those that are physically important and represent fundamental dimensions (e.g., density $\rho$, velocity $V$, characteristic length $L$).
6.  **Form the Pi groups:** Combine the remaining $(n-m)$ non-repeating variables, one at a time, with the repeating variables to form dimensionless groups. This is done by setting the product of the variables raised to unknown powers equal to a dimensionless quantity:
    $\pi_i = v_1^{a} v_2^{b} v_3^{c} ... v_k^{x}$
    where $v_1, v_2, v_3$ are the repeating variables and $v_k$ is the non-repeating variable.
7.  **Determine the exponents (a, b, c, x):** Use the principle of dimensional homogeneity to set the dimensions of the $\pi$ group to unity (M⁰L⁰T⁰). This will give a system of linear equations to solve for the unknown exponents.
8.  **Express the final result:** Write the relationship between the Pi groups as $\phi(\pi_1, \pi_2, ..., \pi_{n-m}) = 0$.

#### Important Considerations for Choosing Repeating Variables:

*   They must contain all the fundamental dimensions.
*   They should not be dimensionally homogeneous among themselves (e.g., don't choose both velocity and acceleration as repeating variables).
*   They should be physically representative of the problem.

---

### 4. Common Dimensionless Numbers in Fluid Mechanics

Dimensionless numbers are groups of variables that represent fundamental physical phenomena. They are extremely useful for scaling experimental results and understanding the relative importance of different forces.

| Dimensionless Number | Symbol | Definition                                   | Primary Dimensions | Significance                                                                                                     |
| :----------------- | :----- | :------------------------------------------- | :----------------- | :--------------------------------------------------------------------------------------------------------------- |
| **Reynolds Number**  | Re     | $\frac{\rho V L}{\mu} = \frac{VL}{\nu}$      | M⁰L⁰T⁰             | Ratio of inertial forces to viscous forces. Crucial for understanding flow regimes (laminar vs. turbulent).      |
| **Froude Number**    | Fr     | $\sqrt{\frac{V^2}{g L}}$                     | M⁰L⁰T⁰             | Ratio of inertial forces to gravitational forces. Important in free-surface flows (open channels, ship wakes). |
| **Mach Number**      | M      | $\frac{V}{c}$                                | M⁰L⁰T⁰             | Ratio of flow velocity to the speed of sound. Important in compressible flow.                                     |
| **Euler Number**     | Eu     | $\frac{\Delta P}{\frac{1}{2} \rho V^2}$      | M⁰L⁰T⁰             | Ratio of pressure forces to inertial forces. Relates pressure drop to dynamic pressure.                            |
| **Weber Number**     | We     | $\frac{\rho V^2 L}{\sigma}$                  | M⁰L⁰T⁰             | Ratio of inertial forces to surface tension forces. Important in atomization and droplet formation.                |
| **Strouhal Number**  | St     | $\frac{f L}{V}$                              | M⁰L⁰T⁰             | Ratio of characteristic time scale to flow time scale. Important in unsteady flows and vortex shedding.          |
| **Rossby Number**    | Ro     | $\frac{V}{f_c L}$                            | M⁰L⁰T⁰             | Ratio of inertial forces to Coriolis forces. Important in geophysical fluid dynamics (large-scale flows).        |
| **Prandtl Number**   | Pr     | $\frac{\mu c_p}{k} = \frac{\nu}{\alpha}$     | M⁰L⁰T⁰             | Ratio of momentum diffusivity to thermal diffusivity. Relates momentum and heat transfer.                         |

*   Where:
    *   $\rho$ = Density
    *   $V$ = Velocity
    *   $L$ = Characteristic Length
    *   $\mu$ = Dynamic Viscosity
    *   $\nu$ = Kinematic Viscosity
    *   $g$ = Acceleration due to gravity
    *   $c$ = Speed of sound
    *   $\Delta P$ = Pressure difference
    *   $\sigma$ = Surface tension
    *   $f$ = Frequency
    *   $f_c$ = Coriolis parameter
    *   $c_p$ = Specific heat at constant pressure
    *   $k$ = Thermal conductivity
    *   $\alpha$ = Thermal diffusivity

---

### 5. Formulating Dimensionless Relationships for Fluid Flow Phenomena

This involves applying the Buckingham Pi Theorem to specific problems.

#### Example Problem: Flow through a Pipe

Let's determine the relationship for the pressure drop ($\Delta P$) in a pipe of length $L$ and diameter $D$, with a fluid of density $\rho$ and dynamic viscosity $\mu$, flowing at an average velocity $V$.

1.  **List variables:** $\Delta P, L, D, \rho, \mu, V$
    *   Number of variables ($n$) = 6

2.  **Determine dimensions:**
    *   $\Delta P$: ML⁻¹T⁻²
    *   $L$: L
    *   $D$: L
    *   $\rho$: ML⁻³
    *   $\mu$: ML⁻¹T⁻¹
    *   $V$: LT⁻¹

3.  **Number of fundamental dimensions (m):** M, L, T $\rightarrow$ m = 3

4.  **Number of Pi groups (n-m):** $6 - 3 = 3$ Pi groups.

5.  **Choose repeating variables:** Let's choose $\rho, V, D$ as they are physically important and contain all dimensions.
    *   $\rho$: ML⁻³
    *   $V$: LT⁻¹
    *   $D$: L

6.  **Form Pi groups:** We need to form 3 Pi groups using the non-repeating variables $\Delta P, L, \mu$.

    *   **$\pi_1$ (involving $\Delta P$):**
        $\pi_1 = \rho^a V^b D^c (\Delta P)$
        Dimensions: $M^0L^0T^0 = (ML⁻³)^a (LT⁻¹)^b (L)^c (ML⁻¹T⁻²)$
        $M^0L^0T^0 = M^{a+1} L^{-3a+b+c-1} T^{-b-2}$

        Equating exponents:
        *   M: $a + 1 = 0 \implies a = -1$
        *   T: $-b - 2 = 0 \implies b = -2$
        *   L: $-3a + b + c - 1 = 0 \implies -3(-1) + (-2) + c - 1 = 0 \implies 3 - 2 + c - 1 = 0 \implies c = 0$

        So, $\pi_1 = \rho^{-1} V^{-2} D^0 (\Delta P) = \frac{\Delta P}{\rho V^2}$

    *   **$\pi_2$ (involving $L$):**
        $\pi_2 = \rho^a V^b D^c (L)$
        Dimensions: $M^0L^0T^0 = (ML⁻³)^a (LT⁻¹)^b (L)^c (L)$
        $M^0L^0T^0 = M^{a} L^{-3a+b+c+1} T^{-b}$

        Equating exponents:
        *   M: $a = 0$
        *   T: $-b = 0 \implies b = 0$
        *   L: $-3a + b + c + 1 = 0 \implies -3(0) + 0 + c + 1 = 0 \implies c = -1$

        So, $\pi_2 = \rho^0 V^0 D^{-1} L = \frac{L}{D}$
        (Note: It's more conventional to form the Reynolds number. Let's try forming a Pi group with $\mu$ first, as that will lead to Re).

    *   **Let's re-form Pi groups systematically.** We have variables: $\Delta P, L, D, \rho, \mu, V$. Repeating: $\rho, V, D$. Non-repeating: $\Delta P, L, \mu$.

    *   **$\pi_1$ (involving $\Delta P$):** Already calculated. $\pi_1 = \frac{\Delta P}{\rho V^2}$. This is related to the Euler number.

    *   **$\pi_2$ (involving $\mu$):**
        $\pi_2 = \rho^a V^b D^c (\mu)$
        Dimensions: $M^0L^0T^0 = (ML⁻³)^a (LT⁻¹)^b (L)^c (ML⁻¹T⁻¹)$
        $M^0L^0T^0 = M^{a+1} L^{-3a+b+c-1} T^{-b-1}$

        Equating exponents:
        *   M: $a + 1 = 0 \implies a = -1$
        *   T: $-b - 1 = 0 \implies b = -1$
        *   L: $-3a + b + c - 1 = 0 \implies -3(-1) + (-1) + c - 1 = 0 \implies 3 - 1 + c - 1 = 0 \implies c = -1$

        So, $\pi_2 = \rho^{-1} V^{-1} D^{-1} \mu = \frac{\mu}{\rho V D}$.
        It is conventional to invert this and multiply by constants for common forms.
        Let's form $\pi_2'$ as $\frac{\rho V D}{\mu}$. This is the Reynolds number (Re).

    *   **$\pi_3$ (involving $L$):**
        $\pi_3 = \rho^a V^b D^c (L)$
        Dimensions: $M^0L^0T^0 = (ML⁻³)^a (LT⁻¹)^b (L)^c (L)$
        $M^0L^0T^0 = M^{a} L^{-3a+b+c+1} T^{-b}$

        Equating exponents:
        *   M: $a = 0$
        *   T: $-b = 0 \implies b = 0$
        *   L: $-3a + b + c + 1 = 0 \implies -3(0) + 0 + c + 1 = 0 \implies c = -1$

        So, $\pi_3 = \rho^0 V^0 D^{-1} L = \frac{L}{D}$. This is the length-to-diameter ratio.

7.  **Final Relationship:**
    $\phi(\pi_1, \pi_2', \pi_3) = 0$
    $\phi\left(\frac{\Delta P}{\rho V^2}, \frac{\rho V D}{\mu}, \frac{L}{D}\right) = 0$

    This can be rewritten as:
    $\frac{\Delta P}{\rho V^2} = f\left(\frac{\rho V D}{\mu}, \frac{L}{D}\right)$

    Or, more commonly expressed using friction factor $f_f$ (related to $\Delta P$):
    $\Delta P = f_f \frac{L}{D} \frac{\rho V^2}{2}$

    The dimensionless group $\frac{\Delta P}{\rho V^2}$ is related to the Euler number, and $\frac{\rho V D}{\mu}$ is the Reynolds number. The relationship discovered through dimensional analysis indicates that the pressure drop is a function of the Reynolds number and the aspect ratio of the pipe. This is the basis for the Moody chart, which relates friction factor to Reynolds number and relative roughness.

---

### 6. Hydraulic Similitude

#### Key Concept:

Hydraulic similitude exists between a model and a prototype when the ratio of corresponding forces in the model and prototype are equal. It allows experimental results obtained on a smaller scale model to be used to predict the behavior of a full-scale prototype.

For complete hydraulic similitude, three types of similitude must be satisfied:

1.  **Geometric Similitude:** The model and prototype must be identical in shape, but differ in size. The ratio of corresponding linear dimensions must be constant.
    *   $L_m / L_p = \text{constant}$ (scale factor, $\lambda$)

2.  **Kinematic Similitude:** The velocities at corresponding points in the model and prototype must be proportional to the scale factor and have the same direction. The ratio of corresponding velocities must be constant.
    *   $V_m / V_p = \text{constant}$
    *   This also implies that the ratio of accelerations and time intervals must be constant.

3.  **Dynamic Similitude:** The ratios of corresponding forces acting on corresponding particles in the model and prototype must be equal. This is the most crucial and often the most difficult to achieve.

#### Laws of Similitude (based on Buckingham Pi Theorem):

To achieve dynamic similitude, the ratios of corresponding dimensionless numbers must be equal between the model and the prototype.

**Example: Reynolds Number Similitude**

If viscous forces are dominant (e.g., flow in pipes), dynamic similitude is achieved when the Reynolds numbers are equal:

$Re_m = Re_p$
$\frac{\rho_m V_m D_m}{\mu_m} = \frac{\rho_p V_p D_p}{\mu_p}$

**Example: Froude Number Similitude**

If gravitational forces are dominant (e.g., flow in open channels, ship models), dynamic similitude is achieved when the Froude numbers are equal:

$Fr_m = Fr_p$
$\sqrt{\frac{V_m^2}{g_m L_m}} = \sqrt{\frac{V_p^2}{g_p L_p}}$

If $g_m = g_p$, then $\frac{V_m}{\sqrt{L_m}} = \frac{V_p}{\sqrt{L_p}}$. This implies that the velocity scale is related to the square root of the length scale: $V_m / V_p = \sqrt{L_m / L_p}$.

#### Applications of Hydraulic Similitude:

*   **Testing hydraulic structures:** Dams, spillways, canals, and barrages are tested using scale models in laboratories.
*   **Testing vehicles:** Airplanes and ships are tested in wind tunnels and towing tanks, respectively.
*   **Predicting behavior:** Understanding how changes in design parameters will affect performance.

#### Challenges in Achieving Similitude:

It is often impossible to satisfy all relevant dimensionless numbers simultaneously. In such cases, engineers must prioritize which dimensionless numbers are most important for the specific problem.

**Example:** For ship models, both Reynolds number and Froude number are important. If we scale the model such that Froude numbers match, the Reynolds numbers will likely not match due to the small size of the model and potentially lower velocities, leading to different flow regimes. In such cases, corrections are made, or a combination of model testing and theoretical analysis is used.

---

### Practice Questions and Exercises

1.  **Determine the dimensions of the following quantities:**
    *   Power
    *   Surface Tension
    *   Kinematic Viscosity

2.  **Check the dimensional homogeneity of the following equation:**
    $Q = C \sqrt{\frac{2 g h^3}{3}}$
    Where:
    *   $Q$ is flow rate (Volume/Time)
    *   $C$ is a dimensionless constant
    *   $g$ is acceleration due to gravity
    *   $h$ is a characteristic length

3.  **Using the Buckingham Pi Theorem, derive the dimensionless groups for the drag force ($F_D$) on a sphere moving through a fluid. The variables involved are:**
    *   Drag Force ($F_D$)
    *   Fluid Density ($\rho$)
    *   Fluid Viscosity ($\mu$)
    *   Fluid Velocity ($V$)
    *   Diameter of the sphere ($D$)

4.  **For a model of a spillway, the following dimensionless number is important: $Fr = V / \sqrt{gL}$. If the scale of the model to the prototype is 1:20 (model:prototype) and the prototype velocity is 5 m/s, what should be the velocity of the water in the model for Froude similitude?**

---

### Answers to Practice Questions

1.  **Dimensions:**
    *   **Power (P):** Work/Time = (Force * Distance)/Time = (MLT⁻² * L)/T = **ML²T⁻³**
    *   **Surface Tension ($\sigma$):** Force/Length = (MLT⁻²)/L = **MT⁻²**
    *   **Kinematic Viscosity ($\nu$):** Viscosity/Density = (ML⁻¹T⁻¹)/(ML⁻³) = **L²T⁻¹**

2.  **Dimensional Homogeneity Check:**
    *   $Q$: Volume/Time = L³/T = **L³T⁻¹**
    *   $C$: Dimensionless (M⁰L⁰T⁰)
    *   $g$: Acceleration due to gravity = L/T² = **L¹T⁻²**
    *   $h$: Length = **L¹**

    Dimensions of the right side:
    $C \sqrt{\frac{2 g h^3}{3}} = M^0L^0T^0 \sqrt{\frac{L^1T^{-2} \cdot (L^1)^3}{M^0L^0T^0}} = \sqrt{\frac{L^4T^{-2}}{1}} = (L^4T^{-2})^{1/2} = L^2T^{-1}$

    Dimensions of LHS ($Q$): L³T⁻¹
    Dimensions of RHS: L²T⁻¹

    The equation is **not dimensionally homogeneous**. There might be a missing length dimension in the original equation, or a mistake in the formula. For example, if it was $Q = C L \sqrt{\frac{2 g h}{3}}$, it would be dimensionally correct.

3.  **Deriving Dimensionless Groups for Drag Force on a Sphere:**
    *   Variables: $F_D, \rho, \mu, V, D$ ($n=5$)
    *   Dimensions:
        *   $F_D$: MLT⁻²
        *   $\rho$: ML⁻³
        *   $\mu$: ML⁻¹T⁻¹
        *   $V$: LT⁻¹
        *   $D$: L
    *   Fundamental Dimensions: M, L, T ($m=3$)
    *   Number of Pi groups: $n-m = 5-3 = 2$

    *   Repeating Variables: Choose $\rho, V, D$ (they contain M, L, T).

    *   **$\pi_1$ (involving $F_D$):**
        $\pi_1 = \rho^a V^b D^c (F_D)$
        $M^0L^0T^0 = (ML⁻³)^a (LT⁻¹)^b (L)^c (MLT⁻²)$
        $M^0L^0T^0 = M^{a+1} L^{-3a+b+c+1} T^{-b-2}$

        *   M: $a+1 = 0 \implies a = -1$
        *   T: $-b-2 = 0 \implies b = -2$
        *   L: $-3a+b+c+1 = 0 \implies -3(-1) + (-2) + c + 1 = 0 \implies 3 - 2 + c + 1 = 0 \implies c = -2$

        $\pi_1 = \rho^{-1} V^{-2} D^{-2} F_D = \frac{F_D}{\rho V^2 D^2}$

    *   **$\pi_2$ (involving $\mu$):**
        $\pi_2 = \rho^a V^b D^c (\mu)$
        $M^0L^0T^0 = (ML⁻³)^a (LT⁻¹)^b (L)^c (ML⁻¹T⁻¹)$
        $M^0L^0T^0 = M^{a+1} L^{-3a+b+c-1} T^{-b-1}$

        *   M: $a+1 = 0 \implies a = -1$
        *   T: $-b-1 = 0 \implies b = -1$
        *   L: $-3a+b+c-1 = 0 \implies -3(-1) + (-1) + c - 1 = 0 \implies 3 - 1 + c - 1 = 0 \implies c = -1$

        $\pi_2 = \rho^{-1} V^{-1} D^{-1} \mu = \frac{\mu}{\rho V D}$

    *   **Final Relationship:**
        $\phi(\pi_1, \pi_2) = 0 \implies \phi\left(\frac{F_D}{\rho V^2 D^2}, \frac{\mu}{\rho V D}\right) = 0$
        This can be written as:
        $\frac{F_D}{\rho V^2 D^2} = f\left(\frac{\rho V D}{\mu}\right)$

        The term $\frac{\rho V D}{\mu}$ is the Reynolds number (Re). The term $\frac{F_D}{\rho V^2 D^2}$ is related to the drag coefficient ($C_D$). So, $C_D = f(Re)$.

4.  **Velocity for Froude Similitude:**
    Given scale ratio $\lambda = L_m / L_p = 1/20$.
    Prototype velocity $V_p = 5$ m/s.
    For Froude similitude: $Fr_m = Fr_p$
    $\frac{V_m}{\sqrt{g_m L_m}} = \frac{V_p}{\sqrt{g_p L_p}}$

    Assuming $g_m = g_p$, we get:
    $\frac{V_m}{V_p} = \frac{\sqrt{L_m}}{\sqrt{L_p}} = \sqrt{\frac{L_m}{L_p}} = \sqrt{\lambda}$
    $V_m = V_p \sqrt{\lambda}$
    $V_m = 5 \text{ m/s} \times \sqrt{\frac{1}{20}}$
    $V_m = 5 \text{ m/s} \times \frac{1}{\sqrt{20}} \approx 5 \text{ m/s} \times 0.2236$
    $V_m \approx 1.118 \text{ m/s}$

    The velocity of the water in the model should be approximately 1.118 m/s.

---

### Important Points to Remember:

*   **Dimensions vs. Units:** Dimensions are fundamental quantities, units are specific measures.
*   **Dimensional Homogeneity:** The bedrock of dimensional analysis. Every term in a correct physical equation must have the same dimensions.
*   **Buckingham Pi Theorem:** A systematic method to reduce the number of variables in a problem by forming dimensionless groups. The number of dimensionless groups is $n-m$.
*   **Repeating Variables:** Must be chosen carefully to contain all fundamental dimensions and not be dimensionally homogeneous among themselves.
*   **Dimensionless Numbers:** Represent ratios of forces and are crucial for scaling experimental results and understanding flow phenomena.
*   **Hydraulic Similitude:** Essential for model testing, requires geometric, kinematic, and dynamic similitude.
*   **Dynamic Similitude:** Achieved when corresponding dimensionless numbers are equal between model and prototype.
*   **Challenges:** It's often impossible to satisfy all dimensionless numbers simultaneously; prioritization and corrections are necessary.
