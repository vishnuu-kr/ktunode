---
title: "Buckingham’s theorem"
subject: "MECHANICS OF FLUID FLOW"
module: "Module 4: Dimensional  Analysis and Hydraulic similitude: Dimensional  analysis"
branch: "Civil Engineering"
semester: 4
topicId: "689f15cc56b5e963ba810a7f"
status: "completed"
scrapedAt: "2026-05-20T18:46:39.999Z"
---
# Mechanics of Fluid Flow: Module 4 - Dimensional Analysis and Hydraulic Similitude

## Topic: Buckingham's Pi Theorem

---

### Learning Outcomes:

*   **Understand the fundamental principles of dimensional analysis.**
*   **Be able to apply Buckingham's Pi theorem to simplify complex fluid flow problems.**
*   **Determine the number of independent dimensionless groups (Pi groups) required to describe a physical phenomenon.**
*   **Formulate dimensionless parameters from a given set of physical variables.**
*   **Recognize the limitations and advantages of dimensional analysis and Buckingham's theorem.**

---

### 1. Introduction to Dimensional Analysis

Dimensional analysis is a powerful mathematical technique used to simplify complex physical problems by reducing the number of variables involved. It is particularly useful in fluid mechanics where many phenomena are governed by a large number of parameters.

*   **Key Idea:** Physical laws are independent of the system of units used. Therefore, equations describing physical phenomena must be dimensionally homogeneous.

*   **Dimensions:** Fundamental physical quantities that cannot be expressed in terms of other quantities. The most common fundamental dimensions are:
    *   **Mass (M)**
    *   **Length (L)**
    *   **Time (T)**
    *   **Temperature (θ)** (sometimes included)
    *   **Electric Current (A)** (sometimes included)

*   **Units:** Arbitrary scales used to measure dimensions (e.g., meters, feet for length; kilograms, pounds for mass).

*   **Dimensional Homogeneity:** An equation is dimensionally homogeneous if the dimensions on both sides of the equation are the same.

    *   **Example:** Force ($F$) = Mass ($m$) × Acceleration ($a$)
        *   Dimensions of Force: $[F] = MLT^{-2}$
        *   Dimensions of Mass: $[m] = M$
        *   Dimensions of Acceleration: $[a] = LT^{-2}$
        *   Therefore, $[m][a] = M \times LT^{-2} = MLT^{-2}$, which is dimensionally homogeneous.

*   **Purpose of Dimensional Analysis:**
    *   Reduce the number of experimental variables, saving time and cost.
    *   Provide a rational basis for scaling up results from model experiments to prototype systems (hydraulic similitude).
    *   Help in developing empirical correlations and understanding the underlying physics of a phenomenon.

---

### 2. Buckingham's Pi Theorem

Buckingham's Pi theorem is a fundamental theorem in dimensional analysis that provides a systematic method for reducing the number of variables in a physical problem.

*   **Statement of the Theorem:** If a physical phenomenon is described by $n$ independent variables, and these variables involve $m$ fundamental dimensions, then the phenomenon can be described by $(n-m)$ independent dimensionless products, called Pi groups ($\pi$).

    *   **Mathematically:** $f(v_1, v_2, ..., v_n) = 0$
        where $v_i$ are the independent variables.
        The theorem states that this function can be rewritten in terms of $n-m$ dimensionless groups:
        $\phi(\pi_1, \pi_2, ..., \pi_{n-m}) = 0$

*   **Key Definitions:**
    *   **$n$:** Total number of independent variables involved in the problem.
    *   **$m$:** Number of fundamental dimensions involved (usually M, L, T).
    *   **$n-m$:** The number of independent dimensionless groups (Pi groups) required.

---

### 3. Steps to Apply Buckingham's Pi Theorem

To apply Buckingham's theorem, we follow a systematic procedure:

**Step 1: List all relevant variables.**
Identify all physical quantities that are believed to influence the phenomenon under consideration.

**Step 2: Determine the dimensions of each variable.**
Express each variable in terms of the fundamental dimensions (M, L, T, etc.).

**Step 3: Determine the number of fundamental dimensions ($m$).**
Count the number of fundamental dimensions required to express all the variables.

**Step 4: Determine the number of Pi groups ($n-m$).**
Calculate $n-m$, where $n$ is the total number of variables. This is the number of dimensionless groups we need to form.

**Step 5: Select repeating variables.**
Choose a set of $m$ repeating variables from the original list. These variables should:
    *   Contain all $m$ fundamental dimensions.
    *   Not be capable of forming a dimensionless group among themselves.
    *   Be independent of each other.
    *   Typically, choose variables that are simple, readily measurable, and represent fundamental aspects of the flow (e.g., length, velocity, density).

**Step 6: Form Pi groups.**
Each Pi group will be formed by combining one of the remaining non-repeating variables with the $m$ repeating variables.
    *   A general Pi group can be written as: $\pi_i = v_k \times R_1^{a} \times R_2^{b} \times ... \times R_m^{c}$, where $v_k$ is a non-repeating variable and $R_1, R_2, ..., R_m$ are the repeating variables.
    *   The exponents ($a, b, c$) are determined by requiring $\pi_i$ to be dimensionless.

**Step 7: Check for dimensional homogeneity and independence.**
Ensure each Pi group is dimensionless. Verify that the Pi groups are independent (i.e., one Pi group cannot be formed by combining other Pi groups).

---

### 4. Example: Drag Force on a Sphere

Let's determine the dimensionless parameters for the drag force ($F_D$) on a sphere moving through a fluid.

**Step 1: List all relevant variables.**
*   Drag Force ($F_D$)
*   Diameter of the sphere ($D$)
*   Velocity of the fluid relative to the sphere ($V$)
*   Density of the fluid ($\rho$)
*   Dynamic viscosity of the fluid ($\mu$)
*   Surface roughness of the sphere ($\epsilon$)

Total number of variables, $n = 6$.

**Step 2: Determine the dimensions of each variable.**
*   $F_D$: $[MLT^{-2}]$
*   $D$: $[L]$
*   $V$: $[LT^{-1}]$
*   $\rho$: $[ML^{-3}]$
*   $\mu$: $[ML^{-1}T^{-1}]$
*   $\epsilon$: $[L]$

**Step 3: Determine the number of fundamental dimensions ($m$).**
The fundamental dimensions involved are M, L, and T. So, $m = 3$.

**Step 4: Determine the number of Pi groups ($n-m$).**
Number of Pi groups = $n - m = 6 - 3 = 3$.
We expect to form 3 dimensionless groups.

**Step 5: Select repeating variables.**
We need to select $m=3$ repeating variables that contain M, L, and T and are independent. A common choice is:
*   $\rho$ (density) - $[ML^{-3}]$
*   $V$ (velocity) - $[LT^{-1}]$
*   $D$ (diameter) - $[L]$

Let's check if these can form a dimensionless group among themselves:
$\rho^a V^b D^c = (ML^{-3})^a (LT^{-1})^b (L)^c = M^a L^{-3a+b+c} T^{-b}$
For this to be dimensionless, the exponents must be zero:
$M: a = 0$
$T: -b = 0 \Rightarrow b = 0$
$L: -3a + b + c = 0 \Rightarrow -3(0) + 0 + c = 0 \Rightarrow c = 0$
Since the only way to make a dimensionless group is with all exponents zero, $\rho$, $V$, and $D$ are suitable repeating variables.

**Step 6: Form Pi groups.**
We have 3 non-repeating variables: $F_D$, $\mu$, and $\epsilon$.

**Pi Group 1: Involving $F_D$**
$\pi_1 = F_D \times \rho^a V^b D^c$
$[MLT^{-2}] \times [ML^{-3}]^a \times [LT^{-1}]^b \times [L]^c = M^{1+a} L^{1-3a+b+c} T^{-2-b}$
For $\pi_1$ to be dimensionless, the exponents must be zero:
$M: 1 + a = 0 \Rightarrow a = -1$
$T: -2 - b = 0 \Rightarrow b = -2$
$L: 1 - 3a + b + c = 0 \Rightarrow 1 - 3(-1) + (-2) + c = 0 \Rightarrow 1 + 3 - 2 + c = 0 \Rightarrow 2 + c = 0 \Rightarrow c = -2$

So, $\pi_1 = F_D \times \rho^{-1} V^{-2} D^{-2} = \frac{F_D}{\rho V^2 D^2}$

**Pi Group 2: Involving $\mu$**
$\pi_2 = \mu \times \rho^a V^b D^c$
$[ML^{-1}T^{-1}] \times [ML^{-3}]^a \times [LT^{-1}]^b \times [L]^c = M^{1+a} L^{-1-3a+b+c} T^{-1-b}$
For $\pi_2$ to be dimensionless, the exponents must be zero:
$M: 1 + a = 0 \Rightarrow a = -1$
$T: -1 - b = 0 \Rightarrow b = -1$
$L: -1 - 3a + b + c = 0 \Rightarrow -1 - 3(-1) + (-1) + c = 0 \Rightarrow -1 + 3 - 1 + c = 0 \Rightarrow 1 + c = 0 \Rightarrow c = -1$

So, $\pi_2 = \mu \times \rho^{-1} V^{-1} D^{-1} = \frac{\mu}{\rho V D}$

**Pi Group 3: Involving $\epsilon$**
$\pi_3 = \epsilon \times \rho^a V^b D^c$
$[L] \times [ML^{-3}]^a \times [LT^{-1}]^b \times [L]^c = M^a L^{1-3a+b+c} T^{-b}$
For $\pi_3$ to be dimensionless, the exponents must be zero:
$M: a = 0$
$T: -b = 0 \Rightarrow b = 0$
$L: 1 - 3a + b + c = 0 \Rightarrow 1 - 3(0) + 0 + c = 0 \Rightarrow 1 + c = 0 \Rightarrow c = -1$

So, $\pi_3 = \epsilon \times \rho^0 V^0 D^{-1} = \frac{\epsilon}{D}$

**Step 7: Check for dimensional homogeneity and independence.**
*   $\pi_1 = \frac{F_D}{\rho V^2 D^2}$: $[\frac{MLT^{-2}}{(ML^{-3})(LT^{-1})^2(L)^2}] = [\frac{MLT^{-2}}{ML^{-3}L^2T^{-2}}] = [\frac{MLT^{-2}}{ML^{-1}T^{-2}}] = [M^0L^2T^0]$ - Incorrect. Let's recheck the exponents for $\pi_1$.

**Rechecking Pi Group 1:**
$\pi_1 = F_D \times \rho^a V^b D^c$
$[MLT^{-2}] \times [ML^{-3}]^a \times [LT^{-1}]^b \times [L]^c = M^{1+a} L^{1-3a+b+c} T^{-2-b}$
$M: 1 + a = 0 \Rightarrow a = -1$
$T: -2 - b = 0 \Rightarrow b = -2$
$L: 1 - 3a + b + c = 0 \Rightarrow 1 - 3(-1) + (-2) + c = 0 \Rightarrow 1 + 3 - 2 + c = 0 \Rightarrow 2 + c = 0 \Rightarrow c = -2$
So, $\pi_1 = F_D \times \rho^{-1} V^{-2} D^{-2} = \frac{F_D}{\rho V^2 D^2}$

Let's re-check the dimensions of the result:
$\frac{F_D}{\rho V^2 D^2} = \frac{[MLT^{-2}]}{[ML^{-3}][LT^{-1}]^2[L]^2} = \frac{[MLT^{-2}]}{[ML^{-3}][L^2T^{-2}][L^2]} = \frac{[MLT^{-2}]}{[ML^{2-3+2}T^{-2}]} = \frac{[MLT^{-2}]}{[ML^1T^{-2}]}$ - Still incorrect. There must be a calculation error in the exponents.

Let's re-calculate the exponents for $\pi_1$ carefully:
$\pi_1 = F_D \times \rho^a V^b D^c$
Dimensions: $[MLT^{-2}] \times [ML^{-3}]^a \times [LT^{-1}]^b \times [L]^c = M^{1+a} L^{1-3a+b+c} T^{-2-b}$
For dimensionless:
$M: 1+a = 0 \implies a = -1$
$T: -2-b = 0 \implies b = -2$
$L: 1-3a+b+c = 0 \implies 1 - 3(-1) + (-2) + c = 0 \implies 1 + 3 - 2 + c = 0 \implies 2 + c = 0 \implies c = -2$

Ah, the fundamental dimensions for $\rho$ are $ML^{-3}$.
$F_D$: $[MLT^{-2}]$
$\rho$: $[ML^{-3}]$
$V$: $[LT^{-1}]$
$D$: $[L]$

$\pi_1 = F_D \times \rho^a V^b D^c$
$[MLT^{-2}] \times [ML^{-3}]^a \times [LT^{-1}]^b \times [L]^c = M^{1+a} L^{1-3a+b+c} T^{-2-b}$
$M: 1+a = 0 \implies a = -1$
$T: -2-b = 0 \implies b = -2$
$L: 1-3a+b+c = 0 \implies 1 - 3(-1) + (-2) + c = 0 \implies 1+3-2+c = 0 \implies 2+c = 0 \implies c=-2$

So, $\pi_1 = F_D \rho^{-1} V^{-2} D^{-2} = \frac{F_D}{\rho V^2 D^2}$.
Let's re-check the dimensions of the denominator:
$\rho V^2 D^2 = [ML^{-3}] \times [LT^{-1}]^2 \times [L]^2 = [ML^{-3}] \times [L^2T^{-2}] \times [L^2] = [ML^{-3+2+2}T^{-2}] = [ML^1T^{-2}]$
So, $\pi_1 = \frac{[MLT^{-2}]}{[MLT^{-2}]}$ which is dimensionless. This is correct!

**Checking Pi Group 2:**
$\pi_2 = \mu \times \rho^a V^b D^c$
$[ML^{-1}T^{-1}] \times [ML^{-3}]^a \times [LT^{-1}]^b \times [L]^c = M^{1+a} L^{-1-3a+b+c} T^{-1-b}$
$M: 1+a = 0 \implies a = -1$
$T: -1-b = 0 \implies b = -1$
$L: -1-3a+b+c = 0 \implies -1 - 3(-1) + (-1) + c = 0 \implies -1 + 3 - 1 + c = 0 \implies 1+c = 0 \implies c = -1$
So, $\pi_2 = \mu \rho^{-1} V^{-1} D^{-1} = \frac{\mu}{\rho V D}$. This is the Reynolds number ($Re$).
Dimensions: $\frac{[ML^{-1}T^{-1}]}{[ML^{-3}][LT^{-1}][L]} = \frac{[ML^{-1}T^{-1}]}{[ML^{1-3+1}T^{-1}]} = \frac{[ML^{-1}T^{-1}]}{[ML^{-1}T^{-1}]}$, which is dimensionless.

**Checking Pi Group 3:**
$\pi_3 = \epsilon \times \rho^a V^b D^c$
$[L] \times [ML^{-3}]^a \times [LT^{-1}]^b \times [L]^c = M^a L^{1-3a+b+c} T^{-b}$
$M: a = 0$
$T: -b = 0 \implies b = 0$
$L: 1-3a+b+c = 0 \implies 1 - 3(0) + 0 + c = 0 \implies 1+c = 0 \implies c = -1$
So, $\pi_3 = \epsilon \rho^0 V^0 D^{-1} = \frac{\epsilon}{D}$. This is the relative roughness.
Dimensions: $\frac{[L]}{[L]}$, which is dimensionless.

**The resulting dimensionless groups are:**
$\pi_1 = \frac{F_D}{\rho V^2 D^2}$
$\pi_2 = \frac{\mu}{\rho V D}$ (Reynolds number, $Re$)
$\pi_3 = \frac{\epsilon}{D}$ (Relative roughness)

The relationship can be expressed as:
$f(\frac{F_D}{\rho V^2 D^2}, \frac{\mu}{\rho V D}, \frac{\epsilon}{D}) = 0$

This can be rewritten as:
$\frac{F_D}{\rho V^2 D^2} = \phi(\frac{\mu}{\rho V D}, \frac{\epsilon}{D})$

The term $\frac{F_D}{\rho V^2 D^2}$ is related to the drag coefficient ($C_D$).
$C_D = \frac{F_D}{\frac{1}{2}\rho V^2 A}$, where $A$ is a reference area. For a sphere, $A = \frac{\pi D^2}{4}$.
So, $\frac{F_D}{\rho V^2 D^2} = \frac{C_D \frac{1}{2}\rho V^2 (\frac{\pi D^2}{4})}{\rho V^2 D^2} = \frac{1}{4}\pi C_D$.

Therefore, the relationship becomes:
$\frac{1}{4}\pi C_D = \phi(Re, \frac{\epsilon}{D})$
or simply, $C_D = f'(Re, \frac{\epsilon}{D})$.

This shows that the drag coefficient depends only on the Reynolds number and the relative roughness, significantly reducing the number of parameters for experimental investigation.

---

### 5. Choosing Repeating Variables - Guidelines

The choice of repeating variables can affect the form of the Pi groups, but not the number of Pi groups or the fundamental relationship between them. However, choosing them wisely can lead to more meaningful and interpretable dimensionless groups.

*   **Include a characteristic length:** Usually a linear dimension of the system (e.g., diameter, length, width).
*   **Include a characteristic velocity:** Usually related to the flow (e.g., free-stream velocity, mean velocity).
*   **Include a fluid property:** Such as density or viscosity.
*   **The set of repeating variables must contain all the fundamental dimensions.**
*   **The repeating variables must be able to form a dimensionless group among themselves only if all exponents are zero.**

**Commonly Used Repeating Variables:**
*   **Velocity ($V$)** - $[LT^{-1}]$
*   **Length ($L$ or $D$)** - $[L]$
*   **Density ($\rho$)** - $[ML^{-3}]$
*   **Viscosity ($\mu$)** - $[ML^{-1}T^{-1}]$ (if velocity and length are already chosen)

**Example:** If we had chosen $\mu$, $V$, and $D$ as repeating variables for the drag force problem:
*   $\mu$: $[ML^{-1}T^{-1}]$
*   $V$: $[LT^{-1}]$
*   $D$: $[L]$
Can these form a dimensionless group?
$\mu^a V^b D^c = (ML^{-1}T^{-1})^a (LT^{-1})^b (L)^c = M^a L^{-a+b+c} T^{-a-b}$
$M: a = 0$
$T: -a-b = 0 \implies -0-b = 0 \implies b = 0$
$L: -a+b+c = 0 \implies -0+0+c = 0 \implies c = 0$
Yes, they can only form a dimensionless group if all exponents are zero. So, $\mu, V, D$ are suitable repeating variables.

Let's form the Pi groups using $\mu, V, D$ as repeating variables:
*   $n=6$, $m=3$, $n-m=3$ Pi groups.
*   Repeating variables: $\mu, V, D$
*   Non-repeating variables: $F_D, \rho, \epsilon$

**Pi Group 1: Involving $F_D$**
$\pi_1 = F_D \mu^a V^b D^c$
$[MLT^{-2}] \times [ML^{-1}T^{-1}]^a \times [LT^{-1}]^b \times [L]^c = M^{1+a} L^{1-a+b+c} T^{-2-a-b}$
$M: 1+a = 0 \implies a = -1$
$T: -2-a-b = 0 \implies -2-(-1)-b = 0 \implies -2+1-b = 0 \implies -1-b = 0 \implies b = -1$
$L: 1-a+b+c = 0 \implies 1-(-1)+(-1)+c = 0 \implies 1+1-1+c = 0 \implies 1+c = 0 \implies c = -1$
So, $\pi_1 = F_D \mu^{-1} V^{-1} D^{-1} = \frac{F_D}{\mu V D}$.

**Pi Group 2: Involving $\rho$**
$\pi_2 = \rho \mu^a V^b D^c$
$[ML^{-3}] \times [ML^{-1}T^{-1}]^a \times [LT^{-1}]^b \times [L]^c = M^{1+a} L^{-3-a+b+c} T^{-a-b}$
$M: 1+a = 0 \implies a = -1$
$T: -a-b = 0 \implies -(-1)-b = 0 \implies 1-b = 0 \implies b = 1$
$L: -3-a+b+c = 0 \implies -3-(-1)+1+c = 0 \implies -3+1+1+c = 0 \implies -1+c = 0 \implies c = 1$
So, $\pi_2 = \rho \mu^{-1} V^1 D^1 = \frac{\rho V D}{\mu}$. This is the inverse of the Reynolds number ($1/Re$).

**Pi Group 3: Involving $\epsilon$**
$\pi_3 = \epsilon \mu^a V^b D^c$
$[L] \times [ML^{-1}T^{-1}]^a \times [LT^{-1}]^b \times [L]^c = M^a L^{1-a+b+c} T^{-a-b}$
$M: a = 0$
$T: -a-b = 0 \implies -0-b = 0 \implies b = 0$
$L: 1-a+b+c = 0 \implies 1-0+0+c = 0 \implies 1+c = 0 \implies c = -1$
So, $\pi_3 = \epsilon \mu^0 V^0 D^{-1} = \frac{\epsilon}{D}$.

The dimensionless groups are $\frac{F_D}{\mu V D}$, $\frac{\rho V D}{\mu}$, and $\frac{\epsilon}{D}$.
The relationship is $f(\frac{F_D}{\mu V D}, \frac{\rho V D}{\mu}, \frac{\epsilon}{D}) = 0$.
$\frac{F_D}{\mu V D} = \phi(\frac{\rho V D}{\mu}, \frac{\epsilon}{D})$
$\frac{F_D}{\mu V D} = \phi(Re, \frac{\epsilon}{D})$

This shows that the choice of repeating variables does not change the fundamental relationship, only the form of the Pi groups. The first set of groups ($\frac{F_D}{\rho V^2 D^2}$, $\frac{\mu}{\rho V D}$, $\frac{\epsilon}{D}$) is more conventional because it results in the standard drag coefficient ($C_D$) and Reynolds number ($Re$).

---

### 6. Common Dimensionless Numbers in Fluid Mechanics

Buckingham's theorem helps derive many important dimensionless numbers that characterize fluid flow phenomena. Some prominent examples include:

*   **Reynolds Number ($Re$)**: Represents the ratio of inertial forces to viscous forces.
    *   $Re = \frac{\rho V L}{\mu}$
    *   Crucial for determining flow regimes (laminar vs. turbulent).

*   **Froude Number ($Fr$)**: Represents the ratio of inertial forces to gravitational forces.
    *   $Fr = \frac{V}{\sqrt{g L}}$
    *   Important for open channel flows, ship hydrodynamics, and flows with free surfaces.

*   **Mach Number ($M$)**: Represents the ratio of flow velocity to the speed of sound.
    *   $M = \frac{V}{c}$
    *   Essential for compressible flows.

*   **Euler Number ($Eu$)**: Represents the ratio of pressure forces to inertial forces.
    *   $Eu = \frac{\Delta p}{\frac{1}{2}\rho V^2}$
    *   Used in analyzing pressure drops and forces.

*   **Weber Number ($We$)**: Represents the ratio of inertial forces to surface tension forces.
    *   $We = \frac{\rho V^2 L}{\sigma}$
    *   Important for flows involving free surfaces and atomization.

*   **Strouhal Number ($St$)**: Represents the ratio of characteristic time scales (unsteady motion to characteristic time).
    *   $St = \frac{f L}{V}$
    *   Used for vortex shedding and unsteady flows.

*   **Prandtl Number ($Pr$)**: Represents the ratio of momentum diffusivity to thermal diffusivity.
    *   $Pr = \frac{\mu/\rho}{\alpha} = \frac{\nu}{\alpha}$
    *   Important in heat transfer and boundary layer analysis.

---

### 7. Advantages and Limitations of Buckingham's Theorem

**Advantages:**

*   **Reduces the number of variables:** Significantly simplifies experimental design and analysis.
*   **Provides a basis for scaling:** Enables the use of models to predict the behavior of full-scale prototypes (hydraulic similitude).
*   **Reveals fundamental relationships:** Helps in understanding the underlying physics by grouping variables into dimensionless parameters.
*   **Assists in developing empirical correlations:** Guides the formulation of equations from experimental data.
*   **Systematic approach:** Provides a clear, step-by-step method for analyzing problems.

**Limitations:**

*   **Does not predict the form of the function:** Buckingham's theorem only tells us the number of Pi groups, not the exact mathematical relationship between them. The functional form must be determined experimentally or from theory.
*   **Requires identification of all relevant variables:** If an important variable is missed, the resulting Pi groups will not fully describe the phenomenon. Conversely, including irrelevant variables can lead to unnecessary complexity.
*   **Choice of repeating variables can be subjective:** While it doesn't change the outcome, a poor choice can lead to less intuitive dimensionless groups.
*   **Does not handle dimensionless constants:** Buckingham's theorem doesn't inherently account for dimensionless constants that might appear in the physical laws (e.g., $\pi$ in some formulas).
*   **Does not explain the physical meaning of each Pi group:** While common Pi groups have established meanings, others might be obscure without further analysis.

---

### 8. Practice Questions

**Question 1:**
For a laminar jet of liquid impinging on a flat surface, the jet radius ($r$) depends on the nozzle diameter ($d$), jet velocity ($V$), liquid density ($\rho$), and liquid viscosity ($\mu$). Using Buckingham's Pi theorem, determine the number of dimensionless groups and express the relationship in terms of these groups.

**Question 2:**
The power ($P$) required to drive a fan depends on the fan diameter ($D$), fan speed ($N$), air density ($\rho$), and air pressure ($p$). Determine the dimensionless parameters for this system.

**Question 3:**
The velocity ($V$) of a surface wave depends on the acceleration due to gravity ($g$), the depth of the water ($h$), and the wavelength ($\lambda$). Determine the dimensionless groups describing this phenomenon.

---

### 9. Answers to Practice Questions

**Answer 1:**
*   **Variables:** $r, d, V, \rho, \mu$
*   **Number of variables ($n$):** 5
*   **Dimensions:**
    *   $r$: $[L]$
    *   $d$: $[L]$
    *   $V$: $[LT^{-1}]$
    *   $\rho$: $[ML^{-3}]$
    *   $\mu$: $[ML^{-1}T^{-1}]$
*   **Number of fundamental dimensions ($m$):** 3 (M, L, T)
*   **Number of Pi groups ($n-m$):** $5 - 3 = 2$

*   **Repeating variables:** Choose $d, V, \rho$ (contain L, LT⁻¹, ML⁻³)
    *   $d$: $[L]$
    *   $V$: $[LT^{-1}]$
    *   $\rho$: $[ML^{-3}]$

*   **Pi Group 1 (involving $\mu$):**
    $\pi_1 = \mu d^a V^b \rho^c$
    $[ML^{-1}T^{-1}] \times [L]^a \times [LT^{-1}]^b \times [ML^{-3}]^c = M^{1+c} L^{-1+a+b-3c} T^{-1-b}$
    $M: 1+c = 0 \implies c = -1$
    $T: -1-b = 0 \implies b = -1$
    $L: -1+a+b-3c = 0 \implies -1+a+(-1)-3(-1) = 0 \implies -1+a-1+3 = 0 \implies 1+a = 0 \implies a = -1$
    $\pi_1 = \mu d^{-1} V^{-1} \rho^{-1} = \frac{\mu}{\rho V d}$ (Inverse Reynolds Number, $1/Re$)

*   **Pi Group 2 (involving $r$):**
    $\pi_2 = r d^a V^b \rho^c$
    $[L] \times [L]^a \times [LT^{-1}]^b \times [ML^{-3}]^c = M^c L^{1+a+b-3c} T^{-b}$
    $M: c = 0$
    $T: -b = 0 \implies b = 0$
    $L: 1+a+b-3c = 0 \implies 1+a+0-3(0) = 0 \implies 1+a = 0 \implies a = -1$
    $\pi_2 = r d^{-1} V^0 \rho^0 = \frac{r}{d}$ (Radius ratio)

*   **Relationship:** $f(\frac{\mu}{\rho V d}, \frac{r}{d}) = 0 \implies \frac{r}{d} = \phi(\frac{\rho V d}{\mu})$

**Answer 2:**
*   **Variables:** $P, D, N, \rho, p$
*   **Number of variables ($n$):** 5
*   **Dimensions:**
    *   $P$: $[ML^2T^{-3}]$ (Energy/time)
    *   $D$: $[L]$
    *   $N$: $[T^{-1}]$ (Rotational speed)
    *   $\rho$: $[ML^{-3}]$
    *   $p$: $[ML^{-1}T^{-2}]$ (Pressure)
*   **Number of fundamental dimensions ($m$):** 3 (M, L, T)
*   **Number of Pi groups ($n-m$):** $5 - 3 = 2$

*   **Repeating variables:** Choose $D, N, \rho$ (contain L, T⁻¹, ML⁻³)
    *   $D$: $[L]$
    *   $N$: $[T^{-1}]$
    *   $\rho$: $[ML^{-3}]$

*   **Pi Group 1 (involving $P$):**
    $\pi_1 = P D^a N^b \rho^c$
    $[ML^2T^{-3}] \times [L]^a \times [T^{-1}]^b \times [ML^{-3}]^c = M^{1+c} L^{2+a-3c} T^{-3-b}$
    $M: 1+c = 0 \implies c = -1$
    $T: -3-b = 0 \implies b = -3$
    $L: 2+a-3c = 0 \implies 2+a-3(-1) = 0 \implies 2+a+3 = 0 \implies 5+a = 0 \implies a = -5$
    $\pi_1 = P D^{-5} N^{-3} \rho^{-1} = \frac{P}{\rho N^3 D^5}$ (Power Coefficient)

*   **Pi Group 2 (involving $p$):**
    $\pi_2 = p D^a N^b \rho^c$
    $[ML^{-1}T^{-2}] \times [L]^a \times [T^{-1}]^b \times [ML^{-3}]^c = M^{1+c} L^{-1+a-3c} T^{-2-b}$
    $M: 1+c = 0 \implies c = -1$
    $T: -2-b = 0 \implies b = -2$
    $L: -1+a-3c = 0 \implies -1+a-3(-1) = 0 \implies -1+a+3 = 0 \implies 2+a = 0 \implies a = -2$
    $\pi_2 = p D^{-2} N^{-2} \rho^{-1} = \frac{p}{\rho N^2 D^2}$ (Pressure Coefficient)

*   **Relationship:** $f(\frac{P}{\rho N^3 D^5}, \frac{p}{\rho N^2 D^2}) = 0 \implies \frac{P}{\rho N^3 D^5} = \phi(\frac{p}{\rho N^2 D^2})$

**Answer 3:**
*   **Variables:** $V, g, h, \lambda$
*   **Number of variables ($n$):** 4
*   **Dimensions:**
    *   $V$: $[LT^{-1}]$
    *   $g$: $[LT^{-2}]$
    *   $h$: $[L]$
    *   $\lambda$: $[L]$
*   **Number of fundamental dimensions ($m$):** 2 (L, T) - Note: Mass (M) is not involved.
*   **Number of Pi groups ($n-m$):** $4 - 2 = 2$

*   **Repeating variables:** Choose $g, \lambda$ (contain LT⁻² and L)
    *   $g$: $[LT^{-2}]$
    *   $\lambda$: $[L]$

*   **Pi Group 1 (involving $V$):**
    $\pi_1 = V g^a \lambda^b$
    $[LT^{-1}] \times [LT^{-2}]^a \times [L]^b = L^{1+a+b} T^{-1-2a}$
    $T: -1-2a = 0 \implies a = -1/2$
    $L: 1+a+b = 0 \implies 1+(-1/2)+b = 0 \implies 1/2+b = 0 \implies b = -1/2$
    $\pi_1 = V g^{-1/2} \lambda^{-1/2} = \frac{V}{\sqrt{g \lambda}}$ (Froude Number, if $\lambda$ is characteristic length)

*   **Pi Group 2 (involving $h$):**
    $\pi_2 = h g^a \lambda^b$
    $[L] \times [LT^{-2}]^a \times [L]^b = L^{1+a+b} T^{-2a}$
    $T: -2a = 0 \implies a = 0$
    $L: 1+a+b = 0 \implies 1+0+b = 0 \implies 1+b = 0 \implies b = -1$
    $\pi_2 = h g^0 \lambda^{-1} = \frac{h}{\lambda}$ (Depth ratio)

*   **Relationship:** $f(\frac{V}{\sqrt{g \lambda}}, \frac{h}{\lambda}) = 0 \implies \frac{V}{\sqrt{g \lambda}} = \phi(\frac{h}{\lambda})$

*(Self-correction: For wave velocity, it's usually $V/\sqrt{gh}$, so $h$ might be a better characteristic length than $\lambda$. Let's re-try with $g, h$ as repeating variables)*

*   **Repeating variables (Alternative):** Choose $g, h$ (contain LT⁻² and L)
    *   $g$: $[LT^{-2}]$
    *   $h$: $[L]$

*   **Pi Group 1 (involving $V$):**
    $\pi_1 = V g^a h^b$
    $[LT^{-1}] \times [LT^{-2}]^a \times [L]^b = L^{1+a+b} T^{-1-2a}$
    $T: -1-2a = 0 \implies a = -1/2$
    $L: 1+a+b = 0 \implies 1+(-1/2)+b = 0 \implies 1/2+b = 0 \implies b = -1/2$
    $\pi_1 = V g^{-1/2} h^{-1/2} = \frac{V}{\sqrt{gh}}$ (Froude Number)

*   **Pi Group 2 (involving $\lambda$):**
    $\pi_2 = \lambda g^a h^b$
    $[L] \times [LT^{-2}]^a \times [L]^b = L^{1+a+b} T^{-2a}$
    $T: -2a = 0 \implies a = 0$
    $L: 1+a+b = 0 \implies 1+0+b = 0 \implies 1+b = 0 \implies b = -1$
    $\pi_2 = \lambda g^0 h^{-1} = \frac{\lambda}{h}$ (Wavelength ratio)

*   **Relationship:** $f(\frac{V}{\sqrt{gh}}, \frac{\lambda}{h}) = 0 \implies \frac{V}{\sqrt{gh}} = \phi(\frac{\lambda}{h})$

This second choice of repeating variables yields the more commonly recognized form for surface wave velocity.

---

### 10. Important Points to Remember

*   **Dimensional homogeneity is the foundation of dimensional analysis.**
*   **Buckingham's Pi theorem is a systematic method to reduce variables.**
*   **The number of Pi groups is $n-m$, where $n$ is the number of variables and $m$ is the number of fundamental dimensions.**
*   **Repeating variables must be chosen carefully to include all fundamental dimensions and be independent.**
*   **The theorem does not provide the functional form of the relationship, only the structure.**
*   **Understanding the physical meaning of dimensionless numbers (like Reynolds number) is crucial for interpreting results.**
*   **Dimensional analysis is a powerful tool for simplifying complex fluid mechanics problems and for guiding experimental design.**

---
