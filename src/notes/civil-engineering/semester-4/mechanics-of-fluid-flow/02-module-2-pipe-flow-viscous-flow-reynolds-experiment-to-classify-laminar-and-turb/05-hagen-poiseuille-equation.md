---
title: "Hagen Poiseuille equation"
subject: "MECHANICS OF FLUID FLOW"
module: "Module 2: Pipe Flow: Viscous flow: Reynolds experiment to classify laminar and turbulent flows"
branch: "Civil Engineering"
semester: 4
topicId: "689f15cc56b5e963ba810a6a"
status: "completed"
scrapedAt: "2026-05-20T18:46:26.999Z"
---
# MECHANICS OF FLUID FLOW: Module 2: Pipe Flow - Viscous Flow

## Topic: Hagen Poiseuille Equation

This module delves into the behavior of viscous fluids flowing through pipes. We'll explore how to characterize different flow regimes and derive a fundamental equation for calculating pressure drop in laminar pipe flow.

---

### Learning Outcomes

By the end of this topic, you will be able to:

*   Understand the conditions under which laminar flow occurs in pipes.
*   Explain the experimental basis for classifying laminar and turbulent flows (Reynolds Experiment).
*   Derive the Hagen-Poiseuille equation for laminar flow in a circular pipe.
*   Apply the Hagen-Poiseuille equation to solve problems related to pressure drop, flow rate, and viscosity in laminar pipe flow.
*   Recognize the limitations of the Hagen-Poiseuille equation.

---

### 1. Viscous Flow in Pipes: An Introduction

When a fluid flows through a pipe, it experiences internal resistance to motion due to the fluid's viscosity. This resistance manifests as friction between fluid layers and between the fluid and the pipe wall. This internal friction is what we refer to as **viscous flow**.

---

### 2. Reynolds Experiment and Flow Classification

**Key Concept:** The nature of fluid flow in a pipe can transition from smooth and orderly to chaotic and irregular. Osborne Reynolds' famous experiment in 1883 provided the foundation for classifying these flow regimes.

**Reynolds' Experiment:**

*   **Setup:** A glass tube through which water was flowing. A fine jet of colored dye was introduced at the center of the inlet of the tube. The flow rate could be varied by adjusting a valve.
*   **Observations:**
    *   **Low Flow Rates:** The dye stream remained as a single, well-defined filament, moving smoothly along the center of the tube. This indicated a **laminar flow**.
    *   **Intermediate Flow Rates:** As the flow rate increased, the dye stream began to waver and break up into swirling eddies, but the dye still didn't completely mix with the surrounding water for a significant distance. This indicated a transition zone.
    *   **High Flow Rates:** The dye stream immediately broke up and dispersed throughout the entire cross-section of the tube, indicating a chaotic and random mixing of fluid layers. This represented **turbulent flow**.

**Classification of Flow Regimes:**

Reynolds concluded that the transition from laminar to turbulent flow depends on a dimensionless parameter that characterizes the ratio of inertial forces to viscous forces. This parameter is known as the **Reynolds Number (Re)**.

**Definition of Reynolds Number (Re):**

The Reynolds number is defined as:

$Re = \frac{\text{Inertial Forces}}{\text{Viscous Forces}}$

For flow in a circular pipe, the formula is:

$Re = \frac{\rho V D}{\mu} = \frac{V D}{\nu}$

Where:

*   $\rho$ (rho): Density of the fluid (kg/m³ or lb/ft³)
*   $V$: Average velocity of the fluid (m/s or ft/s)
*   $D$: Diameter of the pipe (m or ft)
*   $\mu$ (mu): Dynamic viscosity of the fluid (Pa·s or lb/(ft·s))
*   $\nu$ (nu): Kinematic viscosity of the fluid ($\nu = \mu / \rho$) (m²/s or ft²/s)

**Flow Regimes based on Reynolds Number (for flow in pipes):**

*   **Laminar Flow (Re < 2300):** Characterized by smooth, orderly motion of fluid layers. Fluid particles move in parallel paths with no significant mixing between layers. The velocity profile is parabolic.
*   **Transitional Flow (2300 < Re < 4000):** A region where the flow can be either laminar or turbulent, or can fluctuate between the two.
*   **Turbulent Flow (Re > 4000):** Characterized by chaotic, irregular motion with significant mixing between fluid layers. Velocity fluctuates randomly.

**Important Point to Remember:** The values of 2300 and 4000 are approximate and can vary slightly depending on factors like pipe roughness and entrance conditions.

**Example 1:**

Water at 20°C flows through a pipe of diameter 0.05 m at an average velocity of 0.1 m/s. Determine if the flow is laminar or turbulent.

*   Density of water at 20°C ($\rho$) ≈ 998 kg/m³
*   Dynamic viscosity of water at 20°C ($\mu$) ≈ 1.002 x 10⁻³ Pa·s

**Calculation:**

$Re = \frac{\rho V D}{\mu} = \frac{(998 \text{ kg/m³}) \times (0.1 \text{ m/s}) \times (0.05 \text{ m})}{1.002 \times 10⁻³ \text{ Pa·s}}$

$Re = \frac{4.99 \text{ kg/(m·s)}}{1.002 \times 10⁻³ \text{ kg/(m·s)}} \approx 4980$

Since $Re \approx 4980 > 4000$, the flow is **turbulent**.

---

### 3. Derivation of the Hagen-Poiseuille Equation

**Key Concept:** The Hagen-Poiseuille equation describes the pressure drop ($\Delta P$) in a cylindrical pipe for **laminar, incompressible, steady flow** of a Newtonian fluid. It is derived by applying Newton's second law of motion to a fluid element within the pipe.

**Assumptions:**

1.  **Steady Flow:** Fluid properties (velocity, pressure) at any point do not change with time.
2.  **Laminar Flow:** Fluid moves in smooth layers.
3.  **Incompressible Fluid:** Fluid density is constant.
4.  **Newtonian Fluid:** Shear stress is directly proportional to the rate of shear strain ($\tau = \mu \frac{du}{dy}$).
5.  **Fully Developed Flow:** The velocity profile is constant along the length of the pipe. This means the flow has entered the pipe sufficiently far from the entrance for the velocity profile to stabilize.
6.  **Circular Pipe:** The derivation is for a pipe with a circular cross-section.
7.  **No Slip Condition:** The fluid velocity at the pipe wall is zero.

**Derivation Steps:**

Consider a cylindrical fluid element of radius $r$ and length $\Delta x$ within the pipe of radius $R$. The forces acting on this fluid element are:

*   **Pressure Force on the left face:** $P \cdot (\pi r^2)$
*   **Pressure Force on the right face:** $(P + \Delta P) \cdot (\pi r^2)$
*   **Shear Force on the cylindrical surface:** $-\tau \cdot (2\pi r \Delta x)$ (negative because it opposes motion)

For steady flow, the net force on the fluid element must be zero.
Summing the forces in the x-direction:

$P(\pi r^2) - (P + \Delta P)(\pi r^2) - \tau(2\pi r \Delta x) = 0$

$- \Delta P (\pi r^2) - \tau(2\pi r \Delta x) = 0$

$\Delta P = -\frac{2 \tau \Delta x}{r}$

Rearranging for shear stress $\tau$:

$\tau = -\frac{\Delta P \cdot r}{2 \Delta x}$

Let $\Delta x \to dx$ and $\Delta P \to dP$. Since pressure decreases with increasing x in the direction of flow, $dP/dx$ will be negative. We can write:

$\tau = -\frac{dP}{dx} \frac{r}{2}$

Now, applying the Newtonian fluid assumption ($\tau = \mu \frac{du}{dy}$), we need to relate velocity gradient $\frac{du}{dy}$ to the radial position $r$.
In pipe flow, it's more convenient to express the velocity gradient with respect to the radial coordinate $r$. The velocity $u$ decreases as $r$ increases from the center (where $r=0$) to the wall (where $r=R$). Thus, $\frac{du}{dr}$ is negative.

The shear stress is also related to the velocity gradient:

$\tau = \mu \frac{du}{dr}$

Equating the two expressions for shear stress:

$\mu \frac{du}{dr} = -\frac{dP}{dx} \frac{r}{2}$

Now, we integrate this equation with respect to $r$ to find the velocity profile $u(r)$:

$du = -\frac{1}{2\mu} \frac{dP}{dx} r \, dr$

$\int_{u_0}^{u(r)} du = -\frac{1}{2\mu} \frac{dP}{dx} \int_{0}^{r} r \, dr$

$u(r) - u_0 = -\frac{1}{2\mu} \frac{dP}{dx} \left[ \frac{r^2}{2} \right]_{0}^{r}$

$u(r) - u_0 = -\frac{1}{4\mu} \frac{dP}{dx} r^2$

At the center of the pipe ($r=0$), the velocity is maximum ($u_{max}$). So, $u(0) = u_{max}$.
Therefore, $u_{max} - u_0 = 0$, which implies $u_0 = u_{max}$.
This gives the velocity profile:

$u(r) = u_{max} - \frac{1}{4\mu} \frac{dP}{dx} r^2$

We know that at the pipe wall ($r=R$), the velocity is zero (no-slip condition). So, $u(R) = 0$.

$0 = u_{max} - \frac{1}{4\mu} \frac{dP}{dx} R^2$

$u_{max} = \frac{1}{4\mu} \frac{dP}{dx} R^2$

Substituting $u_{max}$ back into the velocity profile equation:

$u(r) = \frac{1}{4\mu} \frac{dP}{dx} R^2 - \frac{1}{4\mu} \frac{dP}{dx} r^2$

$u(r) = -\frac{1}{4\mu} \frac{dP}{dx} (R^2 - r^2)$

Note that $dP/dx$ is negative, so the velocity is positive. We can introduce a pressure drop $\Delta P = P_1 - P_2$ over a length $L$, so $\Delta P = -L \frac{dP}{dx}$, which means $\frac{dP}{dx} = -\frac{\Delta P}{L}$.

Substituting this into the velocity profile:

$u(r) = \frac{1}{4\mu} \frac{\Delta P}{L} (R^2 - r^2)$

This is the **parabolic velocity profile** for laminar flow in a pipe.

**To find the flow rate (Q):**

The volumetric flow rate $Q$ is the integral of the velocity over the cross-sectional area of the pipe. We consider a differential annular area $dA = 2\pi r \, dr$.

$Q = \int_{0}^{R} u(r) \, dA = \int_{0}^{R} \left( \frac{\Delta P}{4\mu L} (R^2 - r^2) \right) (2\pi r \, dr)$

$Q = \frac{2\pi \Delta P}{4\mu L} \int_{0}^{R} (R^2 r - r^3) \, dr$

$Q = \frac{\pi \Delta P}{2\mu L} \left[ R^2 \frac{r^2}{2} - \frac{r^4}{4} \right]_{0}^{R}$

$Q = \frac{\pi \Delta P}{2\mu L} \left( R^2 \frac{R^2}{2} - \frac{R^4}{4} \right)$

$Q = \frac{\pi \Delta P}{2\mu L} \left( \frac{R^4}{2} - \frac{R^4}{4} \right)$

$Q = \frac{\pi \Delta P}{2\mu L} \left( \frac{R^4}{4} \right)$

$Q = \frac{\pi R^4 \Delta P}{8\mu L}$

Since $D = 2R$, we have $R = D/2$, so $R^4 = (D/2)^4 = D^4/16$.

$Q = \frac{\pi (D^4/16) \Delta P}{8\mu L}$

$Q = \frac{\pi D^4 \Delta P}{128 \mu L}$

This is the **Hagen-Poiseuille Equation**.

**Alternative forms of the Hagen-Poiseuille Equation:**

*   **Solving for Pressure Drop ($\Delta P$):**
    $\Delta P = \frac{8 \mu L Q}{\pi R^4} = \frac{128 \mu L Q}{\pi D^4}$

*   **Using Kinematic Viscosity ($\nu$):** Since $\mu = \rho \nu$
    $\Delta P = \frac{8 \rho \nu L Q}{\pi R^4} = \frac{128 \rho \nu L Q}{\pi D^4}$

*   **In terms of average velocity (V):** We know $Q = V \cdot A = V \cdot \frac{\pi D^2}{4}$.
    Substituting $Q$:
    $\Delta P = \frac{128 \mu L}{\pi D^4} \left( V \frac{\pi D^2}{4} \right)$
    $\Delta P = \frac{128 \mu L V \pi D^2}{4 \pi D^4}$
    $\Delta P = \frac{32 \mu L V}{D^2}$

    This form is very useful as pressure drop is often calculated using average velocity.

---

### 4. Applications of the Hagen-Poiseuille Equation

The Hagen-Poiseuille equation is crucial for analyzing laminar pipe flow in various engineering applications, including:

*   **Oil and Gas Pipelines:** Estimating pressure drop for oil flow in smaller diameter pipes.
*   **Hydraulic Systems:** Calculating pressure losses in lubrication systems and small hydraulic circuits.
*   **Medical Devices:** Understanding blood flow in capillaries or artificial blood vessels.
*   **Microfluidics:** Designing and analyzing flow in micro-channels.

---

### 5. Limitations of the Hagen-Poiseuille Equation

It is crucial to remember the assumptions under which the Hagen-Poiseuille equation was derived. It is only valid when:

*   **Flow is Laminar (Re < 2300):** The equation breaks down completely in transitional and turbulent flow regimes.
*   **Pipe is Circular and Smooth:** Roughness on the pipe walls increases frictional losses beyond what this equation predicts.
*   **Fluid is Newtonian and Incompressible:** Non-Newtonian fluids (like slurries or polymers) and compressible fluids (like gases at high pressure drops) will not follow this relationship.
*   **Flow is Fully Developed:** The equation does not account for entrance effects where the velocity profile is still developing.
*   **Steady Flow:** Fluctuations in flow rate will not be captured.

---

### 6. Practice Questions and Exercises

**Question 1:**

A lubricating oil with a dynamic viscosity of $0.05 \, \text{Pa} \cdot \text{s}$ and a density of $900 \, \text{kg/m}^3$ flows through a smooth pipe of diameter $0.02 \, \text{m}$ and length $10 \, \text{m}$. If the flow rate is $5 \times 10^{-5} \, \text{m}^3/\text{s}$, calculate the pressure drop across the pipe. Is the flow laminar?

**Solution 1:**

First, we need to check if the flow is laminar. We need the average velocity to calculate the Reynolds number.

$Q = V \cdot A$
$A = \frac{\pi D^2}{4} = \frac{\pi (0.02 \, \text{m})^2}{4} = \frac{\pi \times 0.0004}{4} = \pi \times 10^{-4} \, \text{m}^2$

$V = \frac{Q}{A} = \frac{5 \times 10^{-5} \, \text{m}^3/\text{s}}{\pi \times 10^{-4} \, \text{m}^2} = \frac{0.5}{\pi} \approx 0.159 \, \text{m/s}$

Now calculate the Reynolds number:

$Re = \frac{\rho V D}{\mu} = \frac{(900 \, \text{kg/m}^3) \times (0.159 \, \text{m/s}) \times (0.02 \, \text{m})}{0.05 \, \text{Pa} \cdot \text{s}}$

$Re = \frac{2.862}{0.05} = 57.24$

Since $Re = 57.24 < 2300$, the flow is **laminar**.

Now, we can use the Hagen-Poiseuille equation to calculate the pressure drop:

$\Delta P = \frac{128 \mu L Q}{\pi D^4}$

$\Delta P = \frac{128 \times (0.05 \, \text{Pa} \cdot \text{s}) \times (10 \, \text{m}) \times (5 \times 10^{-5} \, \text{m}^3/\text{s})}{\pi \times (0.02 \, \text{m})^4}$

$\Delta P = \frac{128 \times 0.05 \times 10 \times 5 \times 10^{-5}}{\pi \times (1.6 \times 10^{-7})}$

$\Delta P = \frac{0.0032}{\pi \times 1.6 \times 10^{-7}} = \frac{0.0032}{5.026 \times 10^{-7}} \approx 6368 \, \text{Pa}$

Alternatively, using the average velocity form:

$\Delta P = \frac{32 \mu L V}{D^2}$
$\Delta P = \frac{32 \times (0.05 \, \text{Pa} \cdot \text{s}) \times (10 \, \text{m}) \times (0.159 \, \text{m/s})}{(0.02 \, \text{m})^2}$
$\Delta P = \frac{32 \times 0.05 \times 10 \times 0.159}{0.0004}$
$\Delta P = \frac{0.2544}{0.0004} = 6360 \, \text{Pa}$ (Slight difference due to rounding of velocity)

**Answer:** The pressure drop is approximately $6368 \, \text{Pa}$, and the flow is laminar.

**Question 2:**

Calculate the maximum velocity for the flow in Question 1.

**Solution 2:**

From the derivation, we know that $u_{max} = 2 \times V_{avg}$.

$u_{max} = 2 \times 0.159 \, \text{m/s} = 0.318 \, \text{m/s}$

Alternatively, using the derived formula:
$u_{max} = \frac{\Delta P R^2}{4 \mu L}$
We know $R = D/2 = 0.01 \, \text{m}$.
$u_{max} = \frac{(6368 \, \text{Pa}) \times (0.01 \, \text{m})^2}{4 \times (0.05 \, \text{Pa} \cdot \text{s}) \times (10 \, \text{m})}$
$u_{max} = \frac{6368 \times 0.0001}{0.2} = \frac{0.6368}{0.2} = 3.184 \, \text{m/s}$

**Wait, there's a discrepancy! Let's re-check the formula for $u_{max}$ from the derivation.**

The correct relation is: $u_{max} = \frac{\Delta P R^2}{4 \mu L}$.
And we also derived $u_{max} = \frac{1}{4\mu} \frac{dP}{dx} R^2 = \frac{1}{4\mu} \frac{\Delta P}{L} R^2$. This is correct.

Let's re-examine the relation $u(r) = u_{max} - \frac{1}{4\mu} \frac{dP}{dx} r^2$.
And $u(R) = 0$. So $u_{max} = \frac{1}{4\mu} \frac{dP}{dx} R^2$.
The average velocity $V = \frac{Q}{A} = \frac{\pi R^4 \Delta P / (8\mu L)}{\pi R^2 / 4} = \frac{\pi R^4 \Delta P}{8\mu L} \frac{4}{\pi R^2} = \frac{R^2 \Delta P}{2\mu L}$.
This means $u_{max} = 2V$.

Let's use $V=0.159$ m/s for $u_{max}$ calculation.

$u_{max} = \frac{R^2 \Delta P}{2 \mu L} = \frac{(0.01 \text{ m})^2 \times 6368 \text{ Pa}}{2 \times 0.05 \text{ Pa} \cdot \text{s} \times 10 \text{ m}} = \frac{0.0001 \times 6368}{0.1} = \frac{0.6368}{0.1} = 6.368 \text{ m/s}$.

There seems to be a misunderstanding. Let's revisit the velocity profile derivation and the relationship between $u_{max}$ and $V$.

From $u(r) = \frac{\Delta P}{4\mu L} (R^2 - r^2)$:
Maximum velocity occurs at $r=0$, so $u_{max} = \frac{\Delta P R^2}{4\mu L}$.

Let's recalculate $u_{max}$ using the derived $\Delta P$ and the known parameters:
$u_{max} = \frac{(6368 \, \text{Pa}) \times (0.01 \, \text{m})^2}{4 \times (0.05 \, \text{Pa} \cdot \text{s}) \times (10 \, \text{m})}$
$u_{max} = \frac{6368 \times 0.0001}{0.2} = \frac{0.6368}{0.2} = 3.184 \, \text{m/s}$

Okay, now the $u_{max}$ calculation matches the $2V$ relation ($2 \times 0.159 = 0.318$, not 3.184). There is an error in my reasoning or calculation.

Let's carefully re-examine the average velocity calculation:
$Q = 5 \times 10^{-5} \, \text{m}^3/\text{s}$
$A = \pi \times 10^{-4} \, \text{m}^2$
$V = \frac{Q}{A} = \frac{5 \times 10^{-5}}{\pi \times 10^{-4}} = \frac{0.5}{\pi} \approx 0.159 \, \text{m/s}$. This is correct.

The relation $u_{max} = 2V$ is for the *average* velocity.
The velocity profile is $u(r) = u_{max} (1 - (r/R)^2)$.
The average velocity $V = \frac{1}{A} \int_A u(r) dA = \frac{1}{\pi R^2} \int_0^R u_{max} (1 - (r/R)^2) 2\pi r dr$
$V = \frac{2 u_{max}}{R^2} \int_0^R (r - r^3/R^2) dr = \frac{2 u_{max}}{R^2} [\frac{r^2}{2} - \frac{r^4}{4R^2}]_0^R$
$V = \frac{2 u_{max}}{R^2} (\frac{R^2}{2} - \frac{R^2}{4}) = \frac{2 u_{max}}{R^2} (\frac{R^2}{4}) = \frac{u_{max}}{2}$.
So, $u_{max} = 2V$. This is correct.

Where did $3.184 \, \text{m/s}$ come from for $u_{max}$?

Let's check the formula $\Delta P = \frac{32 \mu L V}{D^2}$.
This is correct.

Let's re-calculate $u_{max}$ using the $2V$ relationship with the correct $V$.
$V = \frac{0.5}{\pi} \approx 0.15915 \, \text{m/s}$
$u_{max} = 2 \times V = 2 \times 0.15915 \, \text{m/s} \approx 0.3183 \, \text{m/s}$

Now, let's use the $u_{max}$ formula:
$u_{max} = \frac{\Delta P R^2}{4 \mu L} = \frac{(6368 \, \text{Pa}) \times (0.01 \, \text{m})^2}{4 \times (0.05 \, \text{Pa} \cdot \text{s}) \times (10 \, \text{m})}$
$u_{max} = \frac{6368 \times 0.0001}{0.2} = \frac{0.6368}{0.2} = 3.184 \, \text{m/s}$.

There is still a fundamental issue. The $u_{max}$ calculated from $\Delta P$ is much larger.
Let's re-verify the Hagen-Poiseuille equation for $\Delta P$.

$\Delta P = \frac{128 \mu L Q}{\pi D^4}$. This is correct.
$Q = V A = V (\pi D^2/4)$.

$\Delta P = \frac{128 \mu L}{\pi D^4} (V \frac{\pi D^2}{4}) = \frac{32 \mu L V}{D^2}$. This is correct.

Let's assume $V=0.159$ m/s is correct.
Let's calculate $\Delta P$ from this $V$ using the formula:
$\Delta P = \frac{32 \times 0.05 \times 10 \times 0.159}{0.02^2} = \frac{2.544}{0.0004} = 6360 \, \text{Pa}$. This matches.

Now, $u_{max} = 2V = 2 \times 0.159 = 0.318 \, \text{m/s}$.

Let's try to calculate $V$ from the $\Delta P$ formula with a known $u_{max}$:
$u_{max} = \frac{\Delta P R^2}{4 \mu L}$
$3.184 \, \text{m/s} = \frac{6368 \, \text{Pa} \times (0.01 \, \text{m})^2}{4 \times 0.05 \, \text{Pa} \cdot \text{s} \times 10 \, \text{m}}$
$3.184 \, \text{m/s} = \frac{0.6368}{0.2} = 3.184 \, \text{m/s}$.

This means that the calculated $u_{max}$ from the formula using $\Delta P$ IS correct. The discrepancy comes from the $u_{max}=2V$ relation.

Let's re-verify the derivation of $u_{max} = 2V$.
$V = \frac{1}{\pi R^2} \int_0^R u(r) 2\pi r dr$
$u(r) = u_{max} (1 - (r/R)^2)$
$V = \frac{2 u_{max}}{R^2} \int_0^R (r - r^3/R^2) dr = \frac{2 u_{max}}{R^2} [\frac{r^2}{2} - \frac{r^4}{4R^2}]_0^R$
$V = \frac{2 u_{max}}{R^2} (\frac{R^2}{2} - \frac{R^2}{4}) = \frac{2 u_{max}}{R^2} \frac{R^2}{4} = \frac{u_{max}}{2}$.
So $u_{max} = 2V$. This derivation is standard and correct.

**Let's step back and check the numbers in the problem statement.**
$Q = 5 \times 10^{-5} \, \text{m}^3/\text{s}$
$D = 0.02 \, \text{m} \implies R = 0.01 \, \text{m}$
$L = 10 \, \text{m}$
$\mu = 0.05 \, \text{Pa} \cdot \text{s}$
$\rho = 900 \, \text{kg/m}^3$

$A = \pi R^2 = \pi (0.01)^2 = \pi \times 10^{-4} \, \text{m}^2$
$V = Q/A = (5 \times 10^{-5}) / (\pi \times 10^{-4}) = 0.5/\pi \approx 0.15915 \, \text{m/s}$.

$u_{max} = 2V = 2 \times 0.15915 \approx 0.3183 \, \text{m/s}$.

Now, let's use the $\Delta P$ to calculate $u_{max}$:
$\Delta P = 6368 \, \text{Pa}$ (calculated earlier).
$u_{max} = \frac{\Delta P R^2}{4 \mu L} = \frac{6368 \times (0.01)^2}{4 \times 0.05 \times 10} = \frac{0.6368}{0.2} = 3.184 \, \text{m/s}$.

The issue might be in how the velocity profile is defined or interpreted.
Let's look at the derivation of $\Delta P$ again.
$\tau = -\frac{dP}{dx} \frac{r}{2}$
$\mu \frac{du}{dr} = -\frac{dP}{dx} \frac{r}{2}$
$u(r) = -\frac{1}{4\mu} \frac{dP}{dx} r^2 + C_1$.
Using $u(R)=0$, $0 = -\frac{1}{4\mu} \frac{dP}{dx} R^2 + C_1 \implies C_1 = \frac{1}{4\mu} \frac{dP}{dx} R^2$.
$u(r) = \frac{1}{4\mu} \frac{dP}{dx} (R^2 - r^2)$.
Here, $\frac{dP}{dx}$ is negative. Let $\frac{dP}{dx} = -k$ where $k > 0$.
$u(r) = \frac{k}{4\mu} (R^2 - r^2)$.
Maximum velocity $u_{max}$ is at $r=0$: $u_{max} = \frac{k R^2}{4\mu}$.
So, $k = \frac{4\mu u_{max}}{R^2}$.
$\frac{dP}{dx} = -\frac{4\mu u_{max}}{R^2}$.
Also, we have $\Delta P = -L \frac{dP}{dx} \implies \frac{dP}{dx} = -\frac{\Delta P}{L}$.
Therefore, $-\frac{\Delta P}{L} = -\frac{4\mu u_{max}}{R^2}$.
$\Delta P = \frac{4\mu L u_{max}}{R^2}$.
This means $u_{max} = \frac{\Delta P R^2}{4 \mu L}$. This formula is correct and leads to $3.184 \, \text{m/s}$.

Now, if $u_{max} = 3.184 \, \text{m/s}$, then $V = u_{max}/2 = 3.184 / 2 = 1.592 \, \text{m/s}$.
But our calculated $V$ from $Q$ was $0.159 \, \text{m/s}$.

**This implies there's a numerical error in my previous calculations or the interpretation of the question's numerical values.**

Let's re-calculate $Q$ from $V=0.15915$ and $u_{max} = 2V = 0.3183$.
$Q = V \cdot A = 0.15915 \times (\pi \times 10^{-4}) \approx 5 \times 10^{-5} \, \text{m}^3/\text{s}$. This is consistent.

Let's re-calculate $u_{max}$ from the $\Delta P$ value using the correct formula:
$u_{max} = \frac{\Delta P R^2}{4 \mu L} = \frac{6368 \times (0.01)^2}{4 \times 0.05 \times 10} = \frac{0.6368}{0.2} = 3.184 \, \text{m/s}$.

There is a factor of 10 error in the calculation of $u_{max}$ from the $\Delta P$ expression, or in the $\Delta P$ calculation itself.

Let's re-calculate $\Delta P$:
$\Delta P = \frac{128 \mu L Q}{\pi D^4} = \frac{128 \times (0.05) \times (10) \times (5 \times 10^{-5})}{\pi \times (0.02)^4}$
Numerator: $128 \times 0.05 \times 10 \times 5 \times 10^{-5} = 6.4 \times 5 \times 10^{-5} = 32 \times 10^{-5} = 0.00032$.
Denominator: $\pi \times (0.02)^4 = \pi \times 1.6 \times 10^{-7} \approx 5.0265 \times 10^{-7}$.
$\Delta P = \frac{0.00032}{5.0265 \times 10^{-7}} \approx 636.8 \, \text{Pa}$.

**Aha! The error was in the calculation of $\Delta P$!**

Let's re-do the $\Delta P$ calculation:
$\Delta P = \frac{128 \times 0.05 \times 10 \times 5 \times 10^{-5}}{\pi \times (0.00000016)} = \frac{0.00032}{\pi \times 1.6 \times 10^{-7}} \approx 636.8 \, \text{Pa}$.

Now, using this corrected $\Delta P$:
$u_{max} = \frac{\Delta P R^2}{4 \mu L} = \frac{636.8 \times (0.01)^2}{4 \times 0.05 \times 10} = \frac{636.8 \times 0.0001}{0.2} = \frac{0.06368}{0.2} = 0.3184 \, \text{m/s}$.

This matches $u_{max} = 2V = 2 \times 0.15915 = 0.3183 \, \text{m/s}$.

**So, the corrected calculation for Question 1 and the answer for Question 2 are:**

**Question 1 (Corrected):**

A lubricating oil with a dynamic viscosity of $0.05 \, \text{Pa} \cdot \text{s}$ and a density of $900 \, \text{kg/m}^3$ flows through a smooth pipe of diameter $0.02 \, \text{m}$ and length $10 \, \text{m}$. If the flow rate is $5 \times 10^{-5} \, \text{m}^3/\text{s}$, calculate the pressure drop across the pipe. Is the flow laminar?

**Solution 1 (Corrected):**

$V \approx 0.159 \, \text{m/s}$
$Re \approx 57.24$ (Flow is laminar)

$\Delta P = \frac{128 \mu L Q}{\pi D^4} = \frac{128 \times (0.05 \, \text{Pa} \cdot \text{s}) \times (10 \, \text{m}) \times (5 \times 10^{-5} \, \text{m}^3/\text{s})}{\pi \times (0.02 \, \text{m})^4}$

$\Delta P = \frac{0.00032}{\pi \times 1.6 \times 10^{-7}} \approx 636.8 \, \text{Pa}$

**Answer:** The pressure drop is approximately $636.8 \, \text{Pa}$, and the flow is laminar.

**Question 2 (Corrected):**

Calculate the maximum velocity for the flow in Question 1.

**Solution 2 (Corrected):**

$u_{max} = 2V$
$V \approx 0.159 \, \text{m/s}$
$u_{max} \approx 2 \times 0.159 \, \text{m/s} = 0.318 \, \text{m/s}$

Alternatively:
$u_{max} = \frac{\Delta P R^2}{4 \mu L} = \frac{636.8 \, \text{Pa} \times (0.01 \, \text{m})^2}{4 \times 0.05 \, \text{Pa} \cdot \text{s} \times 10 \, \text{m}} = \frac{0.06368}{0.2} = 0.3184 \, \text{m/s}$

**Answer:** The maximum velocity is approximately $0.318 \, \text{m/s}$.

---

### 7. Key Points to Remember

*   **Reynolds Number (Re):** The primary criterion for distinguishing laminar from turbulent flow. $Re < 2300$ is laminar, $Re > 4000$ is turbulent.
*   **Laminar Flow Velocity Profile:** Parabolic, with maximum velocity at the center.
*   **Hagen-Poiseuille Equation:** Valid only for laminar, steady, incompressible, Newtonian flow in smooth, circular pipes.
*   **Forms of Hagen-Poiseuille:**
    *   $\Delta P = \frac{128 \mu L Q}{\pi D^4}$ (Commonly used for flow rate given)
    *   $\Delta P = \frac{32 \mu L V}{D^2}$ (Commonly used for average velocity given)
*   **Maximum Velocity in Laminar Flow:** $u_{max} = 2V_{avg}$ and $u_{max} = \frac{\Delta P R^2}{4 \mu L}$.
*   **Pressure Drop is Proportional to:**
    *   Viscosity ($\mu$)
    *   Length ($L$)
    *   Flow rate ($Q$)
*   **Pressure Drop is Inversely Proportional to:**
    *   Fourth power of Diameter ($D^4$) or Radius ($R^4$)

---
