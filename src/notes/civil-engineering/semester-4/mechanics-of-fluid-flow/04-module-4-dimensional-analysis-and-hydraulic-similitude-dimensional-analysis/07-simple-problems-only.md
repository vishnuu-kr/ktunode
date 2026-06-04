---
title: "simple problems only"
subject: "MECHANICS OF FLUID FLOW"
module: "Module 4: Dimensional  Analysis and Hydraulic similitude: Dimensional  analysis"
branch: "Civil Engineering"
semester: 4
topicId: "689f15cc56b5e963ba810a84"
status: "completed"
scrapedAt: "2026-05-20T18:46:43.450Z"
---
# Mechanics of Fluid Flow: Module 4 - Dimensional Analysis and Hydraulic Similitude

## Topic: Dimensional Analysis (Simple Problems)

This module introduces the powerful tools of dimensional analysis and hydraulic similitude, enabling us to simplify complex fluid flow problems by identifying the fundamental dimensionless parameters that govern them. We will focus on the application of these techniques to solve simpler problems.

---

### Learning Outcomes:

By the end of this topic, you will be able to:

*   **Understand the fundamental principles of dimensional analysis.**
*   **Identify the primary dimensions in fluid mechanics.**
*   **Apply dimensional analysis techniques (Buckingham Pi Theorem) to derive dimensionless groups.**
*   **Recognize and apply the concept of repeating variables.**
*   **Formulate dimensionally homogeneous equations.**
*   **Understand the significance of dimensionless numbers in fluid mechanics.**
*   **Solve simple fluid flow problems using dimensional analysis.**

---

### 1. Fundamental Principles of Dimensional Analysis

Dimensional analysis is a mathematical technique that uses the dimensions of physical quantities to simplify problems. It helps in:

*   **Reducing the number of variables:** Instead of dealing with many independent variables, we group them into a smaller number of dimensionless parameters.
*   **Organizing experimental data:** Dimensionless groups allow for more efficient and meaningful correlation of experimental results.
*   **Predicting the behavior of physical systems:** By understanding the relationships between dimensionless parameters, we can scale up or down results from models to prototypes.
*   **Checking the dimensional homogeneity of equations:** Ensuring that both sides of an equation have the same dimensions.

---

### 2. Primary Dimensions in Fluid Mechanics

In mechanics, we generally work with three fundamental or primary dimensions:

*   **Mass (M)**
*   **Length (L)**
*   **Time (T)**

However, in fluid mechanics, it is often more convenient to use the **Force (F)** dimension instead of Mass, because many fluid properties and forces are expressed in terms of force. The relationship between Force and Mass is given by Newton's second law:

*   **Force (F) = Mass (M) × Acceleration (L/T²)**
*   Therefore, **M = F * T² / L** or **M = F * L⁻¹ * T²**

This means we can work with either MLT or FLT systems. The FLT system is generally preferred in fluid mechanics.

**Common Derived Dimensions in Fluid Mechanics (using FLT system):**

| Quantity       | Symbol | Dimensions |
| :------------- | :----- | :--------- |
| Force          | F      | F          |
| Length         | L      | L          |
| Time           | T      | T          |
| Velocity       | V      | L/T        |
| Acceleration   | a      | L/T²       |
| Pressure       | p      | F/L²       |
| Density        | ρ      | M/L³       | (If using MLT: M/L³)
| Specific Weight| γ      | F/L³       | (ρg)
| Dynamic Viscosity | μ   | F*T/L²     | (ML⁻¹T⁻¹)
| Kinematic Viscosity | ν | L²/T       | (M⁰L²T⁻¹)
| Area           | A      | L²         |
| Volume         | V      | L³         |
| Mass flow rate | ṁ     | M/T        | (FL⁻¹T¹)
| Volume flow rate| Q     | L³/T       | (L³T⁻¹)
| Energy/Work    | E      | F*L        |
| Power          | P      | F*L/T      |

**Important:** Always be consistent with the system of dimensions you choose (MLT or FLT).

---

### 3. Dimensional Analysis Techniques: Buckingham Pi Theorem

The Buckingham Pi Theorem is the cornerstone of dimensional analysis. It states:

**If a physical phenomenon involving *n* independent variables can be described by a dimensionally homogeneous equation, then the relationship can be expressed in terms of *(n - k)* independent dimensionless products (Pi groups), where *k* is the number of fundamental dimensions required to express the variables.**

*   **n:** Total number of variables involved in the problem.
*   **k:** Number of fundamental dimensions (usually 3: M, L, T or F, L, T).
*   **(n - k):** The number of dimensionless Pi groups.

**Steps to Apply Buckingham Pi Theorem:**

1.  **List all relevant variables:** Identify all physical quantities that influence the phenomenon.
2.  **Determine the dimensions of each variable:** Express each variable in terms of the fundamental dimensions (e.g., FLT).
3.  **Determine the number of fundamental dimensions (k):** Count the number of independent dimensions used in step 2.
4.  **Calculate the number of Pi groups:** Number of Pi groups = n - k.
5.  **Choose repeating variables:** Select *k* variables from the list that are independent of each other and, when combined, contain all the fundamental dimensions. These repeating variables should be chosen judiciously. Good candidates often include:
    *   A geometric property (e.g., a characteristic length L).
    *   A kinematic property (e.g., velocity V).
    *   A dynamic property (e.g., density ρ or viscosity μ).
6.  **Form the Pi groups:** Combine the repeating variables with each of the remaining non-repeating variables to form dimensionless groups. Each Pi group will have the form:
    $$ \Pi_i = (\text{Variable}_1)^{x_1} (\text{Variable}_2)^{x_2} \dots (\text{Repeating Variable}_1)^{y_1} (\text{Repeating Variable}_2)^{y_2} \dots $$
    where $x_i$ and $y_i$ are exponents to be determined.
7.  **Determine the exponents:** Set the dimensions of each Pi group to be dimensionless (i.e., M⁰L⁰T⁰ or F⁰L⁰T⁰). This will result in a system of linear equations for the exponents.
8.  **Express the final relationship:** The relationship between the original variables can now be expressed as a function of the Pi groups:
    $$ \phi(\Pi_1, \Pi_2, \dots, \Pi_{n-k}) = 0 $$

---

### 4. The Concept of Repeating Variables

Choosing repeating variables is crucial for successful dimensional analysis. The *k* repeating variables must:

*   **Contain all the fundamental dimensions** (M, L, T or F, L, T).
*   **Be independent of each other.** This means you cannot form a dimensionless group by combining only the repeating variables.
*   **Be physically meaningful and representative** of the problem. Common choices are a characteristic length, velocity, and fluid property like density or viscosity.

---

### 5. Formulating Dimensionally Homogeneous Equations

A dimensionally homogeneous equation is one where the dimensions on both sides of the equation are identical. Dimensional analysis guarantees that the relationship expressed in terms of Pi groups will be dimensionally homogeneous.

---

### 6. Significance of Dimensionless Numbers in Fluid Mechanics

Dimensionless numbers are ratios of forces or characteristic quantities in a fluid flow. They represent the relative importance of different physical effects. By reducing a problem to dimensionless groups, we can understand the underlying physics and scale results from models to prototypes.

**Common Dimensionless Numbers in Fluid Mechanics:**

*   **Reynolds Number (Re):** Ratio of inertial forces to viscous forces. Crucial for determining flow regimes (laminar vs. turbulent).
    *   $Re = \frac{\rho V L}{\mu} = \frac{V L}{\nu}$
    *   Dimensions: M⁰L⁰T⁰ (or FLT⁰)

*   **Froude Number (Fr):** Ratio of inertial forces to gravitational forces. Important for open-channel flow, ship hydrodynamics, and wave phenomena.
    *   $Fr = \frac{V}{\sqrt{g L}}$
    *   Dimensions: M⁰L⁰T⁰ (or FLT⁰)

*   **Mach Number (M):** Ratio of fluid velocity to the speed of sound. Important for compressible flow.
    *   $M = \frac{V}{c}$
    *   Dimensions: M⁰L⁰T⁰

*   **Weber Number (We):** Ratio of inertial forces to surface tension forces. Important for phenomena involving free surfaces and atomization.
    *   $We = \frac{\rho V^2 L}{\sigma}$
    *   Dimensions: M⁰L⁰T⁰

*   **Euler Number (Eu):** Ratio of pressure forces to inertial forces. Related to pressure drop and forces.
    *   $Eu = \frac{\Delta p}{\rho V^2}$
    *   Dimensions: M⁰L⁰T⁰

**Hydraulic Similitude:** Two flows are said to be similar if the ratios of corresponding forces are equal. This is achieved when all corresponding dimensionless numbers are equal.

*   **Geometric Similitude:** The ratio of corresponding linear dimensions is constant.
*   **Kinematic Similitude:** The velocity at corresponding points is proportional.
*   **Dynamic Similitude:** The forces at corresponding points are proportional.

---

### 7. Simple Problems Using Dimensional Analysis

Let's work through some examples. We will use the **FLT** system for dimensions.

**Example 1: Drag Force on a Sphere**

The drag force ($F_D$) on a sphere moving through a fluid depends on the following variables:
*   Diameter of the sphere ($D$)
*   Velocity of the fluid ($V$)
*   Density of the fluid ($\rho$)
*   Dynamic viscosity of the fluid ($\mu$)

Find the dimensionless groups that govern this phenomenon.

**Solution:**

1.  **List Variables:** $F_D, D, V, \rho, \mu$
    *   Number of variables, $n = 5$.

2.  **Dimensions (FLT system):**
    *   $F_D$: F (Force)
    *   $D$: L (Length)
    *   $V$: L/T (Velocity)
    *   $\rho$: M/L³ $\rightarrow$ (F*T²/L) / L³ = F*T²*L⁻⁴ (Density)
    *   $\mu$: F*T/L² (Dynamic Viscosity)

3.  **Number of Fundamental Dimensions (k):**
    The dimensions involved are F, L, T.
    *   $k = 3$.

4.  **Number of Pi Groups:**
    *   Number of Pi groups = $n - k = 5 - 3 = 2$.
    We expect two Pi groups: $\Pi_1$ and $\Pi_2$.

5.  **Choose Repeating Variables:**
    We need 3 repeating variables that contain F, L, and T. Let's choose:
    *   $\rho$ (F*T²*L⁻⁴) - Contains F, T, L
    *   $V$ (L/T) - Contains L, T
    *   $D$ (L) - Contains L

    Let's check if they are independent:
    *   Can we form a dimensionless group from $\rho, V, D$?
        $\rho^a V^b D^c = (F T^2 L^{-4})^a (L T^{-1})^b (L)^c = F^a T^{2a-b} L^{-4a+b+c}$
        For dimensionless:
        a = 0 (for F)
        2a - b = 0 $\implies$ b = 0
        -4a + b + c = 0 $\implies$ c = 0
        Since all exponents must be zero, they are independent.

6.  **Form Pi Groups:**
    *   **$\Pi_1$:** Combine $\rho, V, D$ with $F_D$ (the dependent variable).
        $\Pi_1 = \rho^a V^b D^c F_D$
        $(F T^2 L^{-4})^a (L T^{-1})^b (L)^c (F)^1 = F^0 L^0 T^0$
        $F^{a+1} T^{2a-b} L^{-4a+b+c} = F^0 L^0 T^0$

        Equating exponents:
        *   F: $a+1 = 0 \implies a = -1$
        *   T: $2a-b = 0 \implies 2(-1) - b = 0 \implies b = -2$
        *   L: $-4a+b+c = 0 \implies -4(-1) + (-2) + c = 0 \implies 4 - 2 + c = 0 \implies c = -2$

        So, $\Pi_1 = \rho^{-1} V^{-2} D^{-2} F_D = \frac{F_D}{\rho V^2 D^2}$

    *   **$\Pi_2$:** Combine $\rho, V, D$ with $\mu$ (the remaining variable).
        $\Pi_2 = \rho^a V^b D^c \mu$
        $(F T^2 L^{-4})^a (L T^{-1})^b (L)^c (F T L^{-2}) = F^0 L^0 T^0$
        $F^{a+1} T^{2a-b+1} L^{-4a+b+c-2} = F^0 L^0 T^0$

        Equating exponents:
        *   F: $a+1 = 0 \implies a = -1$
        *   T: $2a-b+1 = 0 \implies 2(-1) - b + 1 = 0 \implies -2 - b + 1 = 0 \implies b = -1$
        *   L: $-4a+b+c-2 = 0 \implies -4(-1) + (-1) + c - 2 = 0 \implies 4 - 1 + c - 2 = 0 \implies 1 + c = 0 \implies c = -1$

        So, $\Pi_2 = \rho^{-1} V^{-1} D^{-1} \mu = \frac{\mu}{\rho V D}$

7.  **Express Final Relationship:**
    The relationship can be expressed as:
    $$ \phi(\Pi_1, \Pi_2) = 0 $$
    $$ \phi\left(\frac{F_D}{\rho V^2 D^2}, \frac{\mu}{\rho V D}\right) = 0 $$

    It is conventional to express the dependent variable as a function of the other dimensionless groups. We can rearrange the Pi groups to a more common form.
    *   The second Pi group is the inverse of the Reynolds number: $Re = \frac{\rho V D}{\mu}$.
    *   We can rearrange the first Pi group by multiplying by a constant (which doesn't affect the dimensionless nature) or by taking its inverse. A common form for drag is:
        $$ \frac{F_D}{\frac{1}{2}\rho V^2 A} = C_D $$
        where $A$ is a reference area (for a sphere, $A = \pi D^2/4$).
        Let's try to get the drag coefficient $C_D$.

        Consider $\Pi_1 = \frac{F_D}{\rho V^2 D^2}$. We need to introduce the area. Let's use $D^2$ as a proxy for area here.
        Let's rewrite the relationship as:
        $$ \frac{F_D}{\rho V^2 D^2} = f\left(\frac{\rho V D}{\mu}\right) $$
        $$ F_D = \rho V^2 D^2 f\left(\frac{\rho V D}{\mu}\right) $$

        To relate it to the standard drag coefficient:
        $F_D = C_D \times \frac{1}{2} \rho V^2 A$. For a sphere, $A = \pi D^2/4$.
        $F_D = C_D \times \frac{1}{2} \rho V^2 (\frac{\pi D^2}{4})$
        $F_D = (\frac{\pi}{8}) C_D \rho V^2 D^2$

        Comparing this with our derived equation:
        $(\frac{\pi}{8}) C_D \rho V^2 D^2 = \rho V^2 D^2 f\left(\frac{\rho V D}{\mu}\right)$
        $C_D = \frac{8}{\pi} f\left(\frac{\rho V D}{\mu}\right)$

        This shows that the drag coefficient ($C_D$) is a function of the Reynolds number ($Re$).
        $$ C_D = f(Re) $$

**Example 2: Pressure Drop in a Pipe**

The pressure drop ($\Delta p$) in a horizontal pipe of length $L$ and diameter $d$ depends on:
*   Velocity of the fluid ($V$)
*   Density of the fluid ($\rho$)
*   Dynamic viscosity of the fluid ($\mu$)
*   Diameter of the pipe ($d$)
*   Length of the pipe ($L$)

Find the dimensionless groups.

**Solution:**

1.  **List Variables:** $\Delta p, V, \rho, \mu, d, L$
    *   Number of variables, $n = 6$.

2.  **Dimensions (FLT system):**
    *   $\Delta p$: F/L² (Pressure)
    *   $V$: L/T (Velocity)
    *   $\rho$: F*T²*L⁻⁴ (Density)
    *   $\mu$: F*T/L² (Dynamic Viscosity)
    *   $d$: L (Length)
    *   $L$: L (Length)

3.  **Number of Fundamental Dimensions (k):**
    The dimensions involved are F, L, T.
    *   $k = 3$.

4.  **Number of Pi Groups:**
    *   Number of Pi groups = $n - k = 6 - 3 = 3$.
    We expect three Pi groups: $\Pi_1, \Pi_2, \Pi_3$.

5.  **Choose Repeating Variables:**
    We need 3 repeating variables. Let's choose:
    *   $\rho$ (F*T²*L⁻⁴)
    *   $V$ (L/T)
    *   $d$ (L)
    These contain F, L, T and are independent.

6.  **Form Pi Groups:**
    *   **$\Pi_1$:** Combine $\rho, V, d$ with $\Delta p$.
        $\Pi_1 = \rho^a V^b d^c \Delta p$
        $(F T^2 L^{-4})^a (L T^{-1})^b (L)^c (F L^{-2}) = F^0 L^0 T^0$
        $F^{a+1} T^{2a-b} L^{-4a+b+c-2} = F^0 L^0 T^0$

        Equating exponents:
        *   F: $a+1 = 0 \implies a = -1$
        *   T: $2a-b = 0 \implies 2(-1) - b = 0 \implies b = -2$
        *   L: $-4a+b+c-2 = 0 \implies -4(-1) + (-2) + c - 2 = 0 \implies 4 - 2 + c - 2 = 0 \implies c = 0$

        So, $\Pi_1 = \rho^{-1} V^{-2} d^0 \Delta p = \frac{\Delta p}{\rho V^2}$ (This is the Euler number, Eu).

    *   **$\Pi_2$:** Combine $\rho, V, d$ with $\mu$.
        $\Pi_2 = \rho^a V^b d^c \mu$
        $(F T^2 L^{-4})^a (L T^{-1})^b (L)^c (F T L^{-2}) = F^0 L^0 T^0$
        $F^{a+1} T^{2a-b+1} L^{-4a+b+c-2} = F^0 L^0 T^0$

        Equating exponents:
        *   F: $a+1 = 0 \implies a = -1$
        *   T: $2a-b+1 = 0 \implies 2(-1) - b + 1 = 0 \implies b = -1$
        *   L: $-4a+b+c-2 = 0 \implies -4(-1) + (-1) + c - 2 = 0 \implies 4 - 1 + c - 2 = 0 \implies c = -1$

        So, $\Pi_2 = \rho^{-1} V^{-1} d^{-1} \mu = \frac{\mu}{\rho V d}$ (Inverse of Reynolds number, $1/Re$).

    *   **$\Pi_3$:** Combine $\rho, V, d$ with $L$.
        $\Pi_3 = \rho^a V^b d^c L$
        $(F T^2 L^{-4})^a (L T^{-1})^b (L)^c (L) = F^0 L^0 T^0$
        $F^{a} T^{2a-b} L^{-4a+b+c+1} = F^0 L^0 T^0$

        Equating exponents:
        *   F: $a = 0$
        *   T: $2a-b = 0 \implies 2(0) - b = 0 \implies b = 0$
        *   L: $-4a+b+c+1 = 0 \implies -4(0) + 0 + c + 1 = 0 \implies c = -1$

        So, $\Pi_3 = \rho^0 V^0 d^{-1} L = \frac{L}{d}$ (Ratio of lengths).

7.  **Express Final Relationship:**
    The relationship can be expressed as:
    $$ \phi(\Pi_1, \Pi_2, \Pi_3) = 0 $$
    $$ \phi\left(\frac{\Delta p}{\rho V^2}, \frac{\mu}{\rho V d}, \frac{L}{d}\right) = 0 $$

    We can write the dependent Pi group as a function of the others:
    $$ \frac{\Delta p}{\rho V^2} = f\left(\frac{\rho V d}{\mu}, \frac{L}{d}\right) $$
    This implies that the pressure drop per unit kinetic energy density is a function of the Reynolds number ($Re = \frac{\rho V d}{\mu}$) and the length-to-diameter ratio ($L/d$).

    For pipe flow, the pressure drop is often expressed as $\Delta p = f \frac{L}{d} \frac{\rho V^2}{2}$, where $f$ is the Darcy friction factor.
    Let's see if we can connect our result.
    $\frac{\Delta p}{\rho V^2} = \frac{f}{2} \frac{L}{d}$.
    So, $\frac{f}{2} \frac{L}{d} = f\left(\frac{\rho V d}{\mu}, \frac{L}{d}\right)$.
    $f = 2 \times f\left(Re, \frac{L}{d}\right)$.
    This means the friction factor is a function of Reynolds number and the L/d ratio.

---

### Practice Questions & Exercises:

1.  **Dimensions of Variables:** Determine the dimensions of the following quantities in the FLT system:
    *   Power
    *   Surface Tension
    *   Angular Velocity

2.  **Buckingham Pi Theorem Application:** The thrust ($T$) developed by a propeller depends on its diameter ($D$), speed of rotation ($N$), fluid density ($\rho$), fluid viscosity ($\mu$), and the advance velocity ($V$). Determine the dimensionless groups using the Buckingham Pi theorem.

3.  **Similitude:** A model ship is tested in a towing tank. The ship has a length of 10m. The model ship is 1m long. The ship speed is 15 m/s.
    *   What is the characteristic length for the model?
    *   To achieve dynamic similitude, which dimensionless number must be kept the same between the model and the prototype?
    *   Calculate the corresponding speed of the model in the towing tank. (Assume gravitational forces are dominant, i.e., Froude similitude).

4.  **Deriving a Formula:** The discharge ($Q$) from a pump is found to depend on the head ($H$), the angular speed ($N$), and the impeller diameter ($D$). Derive a dimensionally homogeneous expression for $Q$.

---

### Answers to Practice Questions:

1.  **Dimensions of Variables (FLT system):**
    *   **Power (P):** Work/Time = (Force × Length) / Time = F * L / T
    *   **Surface Tension ($\sigma$):** Force/Length = F / L
    *   **Angular Velocity ($\omega$):** Angle/Time = 1 / T = T⁻¹

2.  **Buckingham Pi Theorem Application (Propeller Thrust):**
    *   Variables: $T, D, N, \rho, \mu, V$ ($n=6$)
    *   Dimensions (FLT):
        *   $T$: F
        *   $D$: L
        *   $N$: T⁻¹ (radians are dimensionless)
        *   $\rho$: F*T²*L⁻⁴
        *   $\mu$: F*T/L²
        *   $V$: L/T
    *   Number of dimensions, $k=3$ (F, L, T).
    *   Number of Pi groups = $n-k = 6-3 = 3$.

    *   Repeating variables: $\rho, V, D$ (or $\rho, V, N$ or $\rho, D, N$, but let's stick with $\rho, V, D$).
    *   Forming Pi groups:
        *   $\Pi_1 = \frac{T}{\rho V^2 D^2}$ (Thrust coefficient)
        *   $\Pi_2 = \frac{\rho V D}{\mu}$ (Reynolds number)
        *   $\Pi_3 = \frac{V}{ND}$ (Advance ratio)

    *   Relationship: $\phi\left(\frac{T}{\rho V^2 D^2}, \frac{\rho V D}{\mu}, \frac{V}{ND}\right) = 0$
        Or: $\frac{T}{\rho V^2 D^2} = \phi\left(\frac{\rho V D}{\mu}, \frac{V}{ND}\right)$

3.  **Similitude:**
    *   Characteristic length for the model: Since geometric similitude requires the ratio of corresponding lengths to be constant, $L_{model}/L_{prototype} = 1m/10m = 1/10$.
    *   Dimensionless number for dynamic similitude: For ship speeds and large water bodies, gravitational forces and inertial forces are dominant. Thus, Froude similitude is usually required. The characteristic dimensionless number is the Froude number ($Fr$).
    *   Corresponding speed of the model:
        $Fr_{model} = Fr_{prototype}$
        $\frac{V_{model}}{\sqrt{g L_{model}}} = \frac{V_{prototype}}{\sqrt{g L_{prototype}}}$
        $\frac{V_{model}}{1m} = \frac{15 m/s}{10m}$
        $V_{model} = 15 m/s \times \frac{1m}{10m} = 1.5 m/s$

4.  **Deriving a Formula (Pump Discharge):**
    *   Variables: $Q, H, N, D$ ($n=4$)
    *   Dimensions (FLT):
        *   $Q$: L³/T
        *   $H$: L (Head is a length)
        *   $N$: T⁻¹
        *   $D$: L
    *   Number of dimensions, $k=2$ (L, T). (Force is not directly involved in these variables' fundamental dimensions).

    *   Number of Pi groups = $n-k = 4-2 = 2$.

    *   Repeating variables: Let's choose $D$ and $N$.
        *   $D$: L
        *   $N$: T⁻¹
        These two contain L and T and are independent.

    *   Forming Pi groups:
        *   $\Pi_1$: Combine $D, N$ with $Q$.
            $\Pi_1 = D^a N^b Q$
            $(L)^a (T^{-1})^b (L^3 T^{-1}) = L^0 T^0$
            $L^{a+3} T^{-b-1} = L^0 T^0$
            Equating exponents:
            *   L: $a+3 = 0 \implies a = -3$
            *   T: $-b-1 = 0 \implies b = -1$
            So, $\Pi_1 = D^{-3} N^{-1} Q = \frac{Q}{ND^3}$ (This is sometimes called the flow coefficient).

        *   $\Pi_2$: Combine $D, N$ with $H$.
            $\Pi_2 = D^a N^b H$
            $(L)^a (T^{-1})^b (L) = L^0 T^0$
            $L^{a+1} T^{-b} = L^0 T^0$
            Equating exponents:
            *   L: $a+1 = 0 \implies a = -1$
            *   T: $-b = 0 \implies b = 0$
            So, $\Pi_2 = D^{-1} N^0 H = \frac{H}{D}$ (This is the head parameter).

    *   Relationship: $\phi(\Pi_1, \Pi_2) = 0 \implies \phi\left(\frac{Q}{ND^3}, \frac{H}{D}\right) = 0$
        Or, expressing the dependent group as a function:
        $$ \frac{Q}{ND^3} = f\left(\frac{H}{D}\right) $$
        This is the characteristic equation for a pump. It states that the flow coefficient is a function of the head parameter.

---

### Important Points to Remember:

*   **Consistency is Key:** Always use the same system of dimensions (MLT or FLT) throughout your analysis.
*   **Choose Repeating Variables Wisely:** They must contain all fundamental dimensions and be independent.
*   **Number of Pi Groups:** Always equal to (number of variables - number of fundamental dimensions).
*   **Dimensionless Numbers:** Represent ratios of forces and are crucial for understanding the physics and scaling.
*   **Buckingham Pi Theorem:** A powerful tool for reducing complexity and organizing experimental data.
*   **Model Testing:** Dimensional analysis and similitude are essential for scaling results from models to prototypes.

---

This concludes Module 4, Topic: Dimensional Analysis (Simple Problems). You are now equipped to apply these fundamental principles to a variety of fluid flow problems.
