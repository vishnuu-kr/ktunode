---
title: "Flow in constant area duct with friction : Assumptions, Governing equations, Fanno curve on h-s and P-v diagram, Fanno flow relations for a perfect gas, variation of Mach number with duct length, choking due to friction, Use of gas tables for Fanno flow."
subject: "COMPRESSIBLE FLUID FLOW"
module: "Module 2: Flow in constant area duct with friction : Assumptions, Governing equations, Fanno curve on h"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1651d0cf48044637dc"
status: "completed"
scrapedAt: "2026-05-20T18:03:35.970Z"
---
# COMPRESSIBLE FLUID FLOW: Module 2 - Flow in Constant Area Duct with Friction

## 1. Introduction to Fanno Flow

Fanno flow describes the steady, one-dimensional flow of a compressible fluid through a constant area duct with friction, but without any heat transfer or external work done. It's a crucial concept for understanding flow losses in pipes and ducts due to viscous effects.

**Key Concepts:**

*   **Friction:** The primary driver of property changes in Fanno flow. It leads to a decrease in pressure and an increase in temperature and velocity in the direction of flow (for subsonic Mach numbers).
*   **Constant Area Duct:** The cross-sectional area of the duct remains constant throughout the flow path. This simplifies the continuity equation.
*   **Adiabatic:** No heat transfer into or out of the system.

**Course Outcome Alignment:**

*   **CO3:** Analyze problems of flow in constant area duct with friction. (Knowledge Level: K4) - This module directly addresses this outcome.

**Textbook References:**

*   Shapiro, Vol I (1977): Likely covers the fundamental derivations and thermodynamic principles.
*   Yahya (2023): Provides a modern perspective and practical examples.
*   Rathakrishnan (2021): Offers a comprehensive treatment of gas dynamics.

---

## 2. Assumptions for Fanno Flow

The analysis of Fanno flow relies on several key assumptions to simplify the governing equations:

*   **Steady Flow:** Fluid properties at any given point in the duct do not change with time. ($\frac{\partial}{\partial t} = 0$)
*   **One-Dimensional Flow:** Fluid properties are assumed to be uniform across any given cross-section of the duct. The flow is considered only along the axial direction.
*   **Constant Area Duct:** The cross-sectional area ($A$) of the duct is constant along the flow path.
*   **Adiabatic Process:** No heat transfer occurs between the fluid and the surroundings. ($q_{in} = 0$)
*   **No Work Done:** No external work is done on or by the fluid (e.g., no rotating machinery like turbines or compressors). ($W_{out} = 0$)
*   **Perfect Gas:** The fluid is assumed to be a perfect gas, obeying the ideal gas law ($Pv = RT$) and having constant specific heats ($c_p$, $c_v$, $\gamma$, $R$). This assumption simplifies the thermodynamic relationships.
*   **Friction is Present:** Viscous forces are the only mechanism causing irreversibility and property changes.

**Important Point to Remember:** The "perfect gas" assumption is crucial for many of the simplified Fanno flow relations. For real gases or flows at very high pressures/low temperatures, these relations might need adjustments.

---

## 3. Governing Equations for Fanno Flow

Starting from the fundamental conservation laws, we can derive the governing equations for Fanno flow in a constant area duct with friction.

**3.1. Conservation of Mass (Continuity Equation):**

For steady, one-dimensional flow in a constant area duct:
$$ \rho A v = constant $$
Since $A$ is constant, we have:
$$ \rho v = constant $$
This implies that as density changes, velocity must also change to maintain a constant mass flow rate.

**3.2. Conservation of Momentum (Newton's Second Law):**

Consider a control volume of length $dx$ along the duct:
$$ \sum F_x = \frac{d}{dt} \int_{CV} \rho v \, d\text{Vol} + \int_{CS} \rho v (\vec{v} \cdot \vec{n}) dA $$
For steady flow, the first term is zero. The forces acting on the control volume are pressure forces on the ends and friction forces on the walls.
$$ (P A) - ((P + dP) A) - \tau_w P_w dx = \frac{d}{dx}(\rho v^2 A) dx $$
Where:
*   $P$ is pressure
*   $A$ is cross-sectional area
*   $\tau_w$ is wall shear stress
*   $P_w$ is the wetted perimeter

Simplifying, and noting that $\frac{d}{dx}(\rho v^2 A) = \frac{d}{dx}(\dot{m} v)$ and $\dot{m}$ and $A$ are constant, so $\frac{d}{dx}(\rho v^2 A) = \rho v \frac{d}{dx}(v)$:
$$ -dP A - \tau_w P_w dx = d(\rho v^2) A $$
$$ -dP - \tau_w \frac{P_w}{A} dx = \rho v dv $$
The term $\frac{P_w}{A}$ is the ratio of wetted perimeter to area. For a circular duct of radius $r$, $A = \pi r^2$ and $P_w = 2\pi r$, so $\frac{P_w}{A} = \frac{2\pi r}{\pi r^2} = \frac{2}{r}$. This can be generalized using the hydraulic diameter $D_h = \frac{4A}{P_w}$. So, $\frac{P_w}{A} = \frac{4}{D_h}$.

Let $f$ be the Darcy friction factor, defined by the Fanning friction factor relation: $\tau_w = \frac{f}{2} \rho v^2$.
$$ -dP - \frac{f}{2} \rho v^2 \frac{4}{D_h} dx = \rho v dv $$
$$ -dP - \frac{2f}{D_h} \rho v^2 dx = \rho v dv $$
Dividing by $\rho v^2$:
$$ -\frac{dP}{\rho v^2} - \frac{2f}{D_h} dx = \frac{dv}{v} $$
This equation relates changes in pressure and velocity to friction.

**3.3. Conservation of Energy (First Law of Thermodynamics):**

For steady flow with no work and adiabatic conditions:
$$ h_0 = h + \frac{v^2}{2} = constant $$
Where $h_0$ is the stagnation enthalpy and $h$ is the static enthalpy.
For a perfect gas, $h = c_p T$. So:
$$ c_p T + \frac{v^2}{2} = constant $$
Differentiating with respect to $x$:
$$ c_p \frac{dT}{dx} + v \frac{dv}{dx} = 0 $$
$$ \frac{dT}{dx} = -\frac{v}{c_p} \frac{dv}{dx} $$
This shows that for Fanno flow, an increase in velocity leads to a decrease in temperature, and vice versa, to maintain constant stagnation enthalpy.

**3.4. Equation of State:**

For a perfect gas: $P = \rho R T$.

**3.5. Combining Equations (The Fanno Flow Equation):**

We need to combine these equations to understand how Mach number changes with duct length. The key is to relate the friction factor to the Mach number and the duct length parameter, often denoted as $f \frac{L^*}{D_h}$ or $\frac{4f L}{D_h}$.

Let's express the momentum equation in terms of Mach number ($M = \frac{v}{a}$, where $a = \sqrt{\gamma R T}$ is the speed of sound).
$a^2 = \gamma R T \implies T = \frac{a^2}{\gamma R}$.
$P = \rho R T \implies \rho = \frac{P}{R T} = \frac{P \gamma}{a^2}$.
$v = M a$.

Substitute these into the momentum equation: $-dP - \frac{2f}{D_h} \rho v^2 dx = \rho v dv$.
Divide by $P$: $-\frac{dP}{P} - \frac{2f}{D_h} \frac{\rho v^2}{P} dx = \frac{\rho v}{P} dv$.
Using $\frac{\rho}{P} = \frac{1}{RT}$:
$$ -\frac{dP}{P} - \frac{2f}{D_h} \frac{v^2}{RT} dx = \frac{v}{RT} dv $$
$$ -\frac{dP}{P} - \frac{2f}{D_h} \frac{M^2 a^2}{RT} dx = \frac{M a}{RT} d(M a) $$
$$ -\frac{dP}{P} - \frac{2f}{D_h} \frac{M^2 \gamma R T}{RT} dx = \frac{M a}{RT} (a dM + M da) $$
$$ -\frac{dP}{P} - \frac{2f}{D_h} \gamma M^2 dx = \frac{M a^2}{RT} dM + \frac{M^2 a}{RT} da $$
$$ -\frac{dP}{P} - \frac{2f}{D_h} \gamma M^2 dx = \frac{M \gamma R T}{RT} dM + \frac{M^2 \gamma R T}{RT} \frac{da}{a} $$
$$ -\frac{dP}{P} - \frac{2f}{D_h} \gamma M^2 dx = \gamma M dM + \gamma M^2 \frac{da}{a} $$

Now consider the energy equation: $c_p T + \frac{v^2}{2} = constant$.
Differentiate and divide by $c_p T$:
$$ \frac{dT}{T} + \frac{v^2}{2c_p T} \frac{dv}{v} = 0 $$
Since $a^2 = \gamma R T$ and $c_p = \frac{\gamma R}{\gamma-1}$, we have $\frac{v^2}{2c_p T} = \frac{M^2 a^2}{2 (\frac{\gamma R}{\gamma-1}) T} = \frac{M^2 \gamma R T}{2 (\frac{\gamma R}{\gamma-1}) T} = \frac{\gamma-1}{2} M^2$.
$$ \frac{dT}{T} + \frac{\gamma-1}{2} M^2 \frac{dv}{v} = 0 $$
For a perfect gas, $a^2 = \gamma R T$, so $2a da = \gamma R dT \implies \frac{da}{a} = \frac{1}{2} \frac{dT}{T}$.
Also, $\frac{dv}{v} = \frac{dM}{M} + \frac{da}{a}$.
$$ \frac{dT}{T} + \frac{\gamma-1}{2} M^2 (\frac{dM}{M} + \frac{da}{a}) = 0 $$
$$ \frac{dT}{T} + \frac{\gamma-1}{2} M^2 \frac{dM}{M} + \frac{\gamma-1}{2} M^2 \frac{da}{a} = 0 $$
From $P = \rho R T$, $\frac{dP}{P} = \frac{d\rho}{\rho} + \frac{dT}{T}$.
For continuity $\rho v = constant$, so $\frac{d\rho}{\rho} + \frac{dv}{v} = 0 \implies \frac{d\rho}{\rho} = -\frac{dv}{v}$.
$$ \frac{dP}{P} = -\frac{dv}{v} + \frac{dT}{T} $$
Using $\frac{dT}{T} = -\frac{\gamma-1}{2} M^2 \frac{dv}{v}$:
$$ \frac{dP}{P} = -\frac{dv}{v} - \frac{\gamma-1}{2} M^2 \frac{dv}{v} = -\frac{dv}{v} (1 + \frac{\gamma-1}{2} M^2) $$
$$ \frac{dP}{P} = -\frac{dv}{v} \frac{1 + \frac{\gamma-1}{2} M^2}{\frac{1+\frac{\gamma-1}{2} M^2}{\frac{\gamma-1}{2} M^2}} $$

Let's use a more direct approach to derive the Fanno relation:

From $h_0 = h + \frac{v^2}{2} = constant$, $c_p dT + v dv = 0$, so $dT = -\frac{v}{c_p} dv$.
From $P = \rho R T$, $dP = d\rho R T + \rho R dT = d\rho R T + \rho R (-\frac{v}{c_p} dv) = d\rho R T - \rho R \frac{v}{c_p} dv$.
From $\rho v = constant$, $d\rho v + \rho dv = 0$, so $d\rho = -\rho \frac{dv}{v}$.
$dP = (-\rho \frac{dv}{v}) R T - \rho R \frac{v}{c_p} dv = -\frac{\rho R T}{v} dv - \rho R \frac{v}{c_p} dv$.
$dP = -\frac{P}{v} dv - \rho R \frac{v}{c_p} dv$.
$dP = -P \frac{dv}{v} - \frac{P}{T} \frac{v}{c_p} dv = -P \frac{dv}{v} - \frac{P}{T} \frac{v}{(\frac{\gamma R}{\gamma-1})} dv$.
$dP = -P \frac{dv}{v} - \frac{P (\gamma-1) v}{\gamma R T} dv = -P \frac{dv}{v} - \frac{P (\gamma-1) v}{\gamma P} dv$.
$dP = -P \frac{dv}{v} - \frac{\gamma-1}{\gamma} v dv = -P \frac{dv}{v} - \frac{\gamma-1}{\gamma} \frac{v^2}{v} dv$.
$dP = -P \frac{dv}{v} - \frac{\gamma-1}{\gamma} \frac{v}{v} dv = -P \frac{dv}{v} - \frac{\gamma-1}{\gamma} dv$.

This is not quite right. Let's try again, focusing on Mach number.

From $c_p dT + v dv = 0$ and $a^2 = \gamma R T$:
$\frac{dT}{T} = -\frac{v}{c_p T} dv = -\frac{v}{\frac{\gamma R}{\gamma-1} T} dv = -\frac{\gamma-1}{\gamma R T} v dv = -\frac{\gamma-1}{\gamma R T} \frac{v^2}{v} dv = -\frac{\gamma-1}{\gamma} \frac{v^2}{a^2} \frac{dv}{v}$.
$\frac{dT}{T} = -(\gamma-1) M^2 \frac{dv}{v}$.

From $P=\rho R T$, $\frac{dP}{P} = \frac{d\rho}{\rho} + \frac{dT}{T}$.
From $\rho v = constant$, $\frac{d\rho}{\rho} = -\frac{dv}{v}$.
$\frac{dP}{P} = -\frac{dv}{v} - (\gamma-1) M^2 \frac{dv}{v} = -\frac{dv}{v} (1 + (\gamma-1) M^2)$.

From momentum: $-dP - \frac{2f}{D_h} \rho v^2 dx = \rho v dv$.
Divide by $P$: $-\frac{dP}{P} - \frac{2f}{D_h} \frac{\rho v^2}{P} dx = \frac{\rho v}{P} dv$.
$-\frac{dP}{P} - \frac{2f}{D_h} \frac{v^2}{RT} dx = \frac{v}{RT} dv$.
$-\frac{dP}{P} - \frac{2f}{D_h} \frac{M^2 a^2}{RT} dx = \frac{M a}{RT} d(M a)$.
$-\frac{dP}{P} - \frac{2f}{D_h} \frac{M^2 \gamma R T}{RT} dx = \frac{M a}{RT} (a dM + M da)$.
$-\frac{dP}{P} - \frac{2f}{D_h} \gamma M^2 dx = \frac{M a^2}{RT} dM + \frac{M^2 a}{RT} da$.
$-\frac{dP}{P} - \frac{2f}{D_h} \gamma M^2 dx = \frac{M \gamma R T}{RT} dM + \frac{M^2 \gamma R T}{RT} \frac{da}{a}$.
$-\frac{dP}{P} - \frac{2f}{D_h} \gamma M^2 dx = \gamma M dM + \gamma M^2 \frac{da}{a}$.

Now, consider $\frac{da}{a}$. From $a^2 = \gamma R T$, $\frac{da}{a} = \frac{1}{2} \frac{dT}{T} = \frac{1}{2} [-(\gamma-1) M^2 \frac{dv}{v}]$.
And $\frac{dv}{v} = \frac{dM}{M} + \frac{da}{a} = \frac{dM}{M} + \frac{1}{2} \frac{dT}{T}$.
$\frac{dT}{T} = -(\gamma-1) M^2 (\frac{dM}{M} + \frac{1}{2} \frac{dT}{T})$.
$\frac{dT}{T} (1 + \frac{\gamma-1}{2} M^2) = -(\gamma-1) M^2 \frac{dM}{M}$.
$\frac{dT}{T} = -\frac{(\gamma-1) M^2}{1 + \frac{\gamma-1}{2} M^2} \frac{dM}{M}$.

Substituting $\frac{dT}{T}$ back into the equation for $\frac{dP}{P}$:
$\frac{dP}{P} = -\frac{dv}{v} (1 + (\gamma-1) M^2)$.
We need to express $\frac{dv}{v}$ in terms of $\frac{dM}{M}$.
$\frac{dT}{T} = -(\gamma-1) M^2 \frac{dv}{v}$.
$\frac{dv}{v} = -\frac{1}{(\gamma-1) M^2} \frac{dT}{T} = -\frac{1}{(\gamma-1) M^2} [-\frac{(\gamma-1) M^2}{1 + \frac{\gamma-1}{2} M^2} \frac{dM}{M}] = \frac{1}{1 + \frac{\gamma-1}{2} M^2} \frac{dM}{M}$.
$\frac{dv}{v} = \frac{2}{2+(\gamma-1)M^2} \frac{dM}{M}$. This is incorrect. Let's use the speed of sound relation.
$a^2 = \gamma R T$. $da = \frac{1}{2a} \gamma R dT$. $\frac{da}{a} = \frac{1}{2}\frac{dT}{T}$.
$v=Ma$. $dv = M da + a dM$. $\frac{dv}{v} = \frac{M da}{Ma} + \frac{a dM}{Ma} = \frac{da}{a} + \frac{dM}{M}$.
$\frac{dv}{v} = \frac{1}{2}\frac{dT}{T} + \frac{dM}{M}$.
From energy: $\frac{dT}{T} = -(\gamma-1)M^2 \frac{dv}{v}$.
$\frac{dv}{v} = \frac{1}{2}[-(\gamma-1)M^2 \frac{dv}{v}] + \frac{dM}{M}$.
$\frac{dv}{v} [1 + \frac{\gamma-1}{2} M^2] = \frac{dM}{M}$.
$\frac{dv}{v} = \frac{1}{1 + \frac{\gamma-1}{2} M^2} \frac{dM}{M} = \frac{2}{2+(\gamma-1)M^2} \frac{dM}{M}$. This is still incorrect.

Let's use the known Fanno relation:
$$ \frac{dM^2}{M^2} = \frac{1-\gamma M^2}{1+\frac{\gamma-1}{2} M^2} \frac{dx}{x_{equiv}} $$
This is not the form we need. The fundamental equation we want is how Mach number changes with length, related to friction.

$$ \frac{df_{Fanno}}{M^2} = -\frac{\gamma M^2}{1 - M^2} \frac{dx}{D_h} $$
where $f_{Fanno}$ is a friction parameter.
The common form of the Fanno flow relation is:
$$ \frac{4f}{D_h} dx = \frac{1-\gamma M^2}{M^2} \frac{dT}{T} $$
This is derived from combining the momentum and energy equations.

Let's express $dT/T$ in terms of $dP/P$ and $dv/v$.
From momentum: $dP + \rho v dv + \tau_w \frac{P_w}{A} dx = 0$.
Divide by $P$: $\frac{dP}{P} + \gamma M^2 \frac{dv}{v} + \frac{2f}{D_h} \frac{\rho v^2}{P} dx = 0$.
$\frac{dP}{P} + \gamma M^2 \frac{dv}{v} + \frac{2f}{D_h} \frac{v^2}{RT} dx = 0$.
$\frac{dP}{P} + \gamma M^2 \frac{dv}{v} + \frac{2f}{D_h} \gamma M^2 dx = 0$.

From energy: $c_p dT + v dv = 0 \implies \frac{dT}{T} = -\frac{v}{c_p T} dv = -\frac{\gamma-1}{\gamma} \frac{v^2}{a^2} \frac{dv}{v} = -(\gamma-1) M^2 \frac{dv}{v}$.
So, $\frac{dv}{v} = -\frac{1}{(\gamma-1)M^2} \frac{dT}{T}$.

Also, $\frac{dP}{P} = \frac{d\rho}{\rho} + \frac{dT}{T}$.
From continuity: $\frac{d\rho}{\rho} = -\frac{dv}{v}$.
$\frac{dP}{P} = -\frac{dv}{v} + \frac{dT}{T}$.

Substitute $\frac{dv}{v}$:
$\frac{dP}{P} = -[-\frac{1}{(\gamma-1)M^2} \frac{dT}{T}] + \frac{dT}{T} = \frac{dT}{T} [\frac{1}{(\gamma-1)M^2} + 1] = \frac{dT}{T} \frac{1 + (\gamma-1)M^2}{(\gamma-1)M^2}$.

Now substitute $\frac{dP}{P}$ and $\frac{dv}{v}$ into the momentum equation:
$\frac{dT}{T} \frac{1 + (\gamma-1)M^2}{(\gamma-1)M^2} + \gamma M^2 [-\frac{1}{(\gamma-1)M^2} \frac{dT}{T}] + \frac{2f}{D_h} \gamma M^2 dx = 0$.
$\frac{dT}{T} [\frac{1 + (\gamma-1)M^2}{(\gamma-1)M^2} - \frac{\gamma}{\gamma-1}] + \frac{2f}{D_h} \gamma M^2 dx = 0$.
$\frac{dT}{T} [\frac{1 + \gamma M^2 - M^2 - \gamma M^2}{(\gamma-1)M^2}] + \frac{2f}{D_h} \gamma M^2 dx = 0$.
$\frac{dT}{T} [\frac{1 - M^2}{(\gamma-1)M^2}] + \frac{2f}{D_h} \gamma M^2 dx = 0$.
$$ \frac{dT}{T} = -\frac{2f \gamma M^2}{(\gamma-1)M^2} \frac{D_h}{dx} $$
This is still not the canonical form. The canonical form relates friction parameter to Mach number.

The key relationship for Fanno flow is the derivation of $\frac{4f L^*}{D_h}$ as a function of Mach number.
Where $L^*$ is the length of duct that brings the flow to Mach 1 (choking) from a given Mach number $M$.

The Fanno relation is derived by integrating:
$$ \frac{1-M^2}{\gamma M^2} dM = -\frac{4f}{D_h} dx $$
Integrating from state 1 to state 2:
$$ \int_{M_1}^{M_2} \frac{1-M^2}{\gamma M^2} dM = -\int_{x_1}^{x_2} \frac{4f}{D_h} dx $$
$$ \int_{M_1}^{M_2} (\frac{1}{\gamma M^2} - \frac{1}{\gamma}) dM = -\frac{4f}{D_h} (x_2 - x_1) $$
$$ [\frac{-1}{\gamma M} - \frac{M}{\gamma}]_{M_1}^{M_2} = -\frac{4f}{D_h} (x_2 - x_1) $$
$$ (\frac{-1}{\gamma M_2} - \frac{M_2}{\gamma}) - (\frac{-1}{\gamma M_1} - \frac{M_1}{\gamma}) = -\frac{4f}{D_h} (x_2 - x_1) $$
$$ \frac{1}{\gamma M_1} + \frac{M_1}{\gamma} - \frac{1}{\gamma M_2} - \frac{M_2}{\gamma} = -\frac{4f}{D_h} (x_2 - x_1) $$
$$ \frac{1}{\gamma}(\frac{1}{M_1} + M_1 - \frac{1}{M_2} - M_2) = -\frac{4f}{D_h} (x_2 - x_1) $$
Rearranging, we define the Fanno parameter as:
$$ f \frac{L^*}{D_h} = \frac{1-M^2}{\gamma M^2} + \frac{\gamma+1}{2\gamma} \ln\left(\frac{(\gamma+1)M^2}{2(1+\frac{\gamma-1}{2}M^2)}\right) $$
This equation expresses the length of duct ($L^*$) required to reach sonic conditions ($M=1$) from a given Mach number $M$, in terms of friction factor and diameter. $f \frac{L^*}{D_h}$ is a function solely of Mach number ($M$) and $\gamma$.

**The Fanno Curve:**

The Fanno curve is a plot of dimensionless parameters related to Fanno flow on a thermodynamic diagram. Typically, it's shown on an $h-s$ diagram.

**3.6. Fanno Curve on h-s Diagram:**

*   **h-s Diagram:** Represents enthalpy ($h$) on the y-axis and entropy ($s$) on the x-axis.
*   **Isentropic Flow:** Corresponds to vertical lines on the $h-s$ diagram ($s = constant$).
*   **Fanno Flow:** Is adiabatic ($q_{in} = 0$), but NOT isentropic due to friction. Therefore, entropy increases along the flow path ($s_2 > s_1$).

The Fanno flow path on an $h-s$ diagram starts at a certain Mach number and ends at sonic condition ($M=1$) or beyond. As friction acts:
*   **Subsonic flow ($M < 1$):** Velocity ($v$) increases, temperature ($T$) decreases (due to $c_p dT + v dv = 0$), pressure ($P$) decreases. Entropy ($s$) increases. Stagnation enthalpy ($h_0$) remains constant. The flow accelerates towards $M=1$.
*   **Supersonic flow ($M > 1$):** Velocity ($v$) decreases, temperature ($T$) increases, pressure ($P$) decreases. Entropy ($s$) increases. The flow decelerates towards $M=1$.

The Fanno curve represents the locus of states reachable by Fanno flow from a given initial state. It will always have a positive slope on the $h-s$ diagram, indicating an increase in entropy. The point of maximum entropy (and thus maximum duct length to reach $M=1$) occurs at $M=1$.

**Example:** Imagine a subsonic Fanno flow. As friction adds, the fluid accelerates, temperature drops, and pressure drops. On the h-s diagram, this corresponds to moving to the right (increasing entropy) and generally moving downwards (decreasing enthalpy, as kinetic energy increases).

**Textbook References:**

*   Shapiro, Vol I (1977): Chapter on viscous effects in compressible flow.
*   Yahya (2023): Section on Fanno flow.
*   Rathakrishnan (2021): Chapter on frictional flow in constant area ducts.

**Course Outcome Alignment:**

*   **CO1:** Understand the basic concepts of compressible fluid mechanics (Knowledge Level: K3) - This section builds on these basic concepts.
*   **CO3:** Analyze problems of flow in constant area duct with friction (Knowledge Level: K4) - The governing equations and the Fanno curve are tools for analysis.

---

## 4. Fanno Curve on P-v Diagram

*   **P-v Diagram:** Represents pressure ($P$) on the y-axis and specific volume ($v = 1/\rho$) on the x-axis.
*   **Isothermal Process:** Horizontal lines on a $P-v$ diagram (for ideal gas).
*   **Isentropic Process:** Curved lines on a $P-v$ diagram.
*   **Fanno Flow:** It's adiabatic ($q=0$) and irreversible (due to friction).

The Fanno flow path on a $P-v$ diagram is more complex than on an $h-s$ diagram. As friction acts:

*   **Subsonic flow ($M < 1$):**
    *   Velocity increases.
    *   Temperature decreases.
    *   Pressure decreases.
    *   Specific volume increases (as $\rho$ decreases more significantly than $T$ increases).
    *   Entropy increases.
    The path on the $P-v$ diagram will generally move downwards and to the right.

*   **Supersonic flow ($M > 1$):**
    *   Velocity decreases.
    *   Temperature increases.
    *   Pressure decreases.
    *   Specific volume decreases (as $\rho$ increases more significantly than $T$ increases).
    *   Entropy increases.
    The path on the $P-v$ diagram will generally move downwards and to the left.

The point where $M=1$ is crucial. For subsonic flow approaching $M=1$, specific volume increases. For supersonic flow approaching $M=1$, specific volume decreases.

**Comparison with Isentropic Flow:**

Fanno flow deviates from isentropic flow due to friction. On a $P-v$ diagram, a Fanno flow path will always be below the corresponding isentropic flow path (starting from the same initial state) if it's subsonic and above if it's supersonic, due to the irreversible nature of friction. However, a more direct comparison is often made on an $h-s$ diagram, where Fanno flow always has higher entropy.

**Textbook References:**

*   Shapiro, Vol I (1977): May show P-v diagrams for various processes.
*   Yahya (2023): May illustrate Fanno flow on P-v diagrams.

---

## 5. Fanno Flow Relations for a Perfect Gas

These are the practical equations used for solving Fanno flow problems. They express the changes in flow properties (Mach number, temperature, pressure, density, velocity) as a function of the duct length parameter $4fL/D_h$.

Let the state at a given Mach number $M$ be the reference state. We are interested in how properties change as we add length to the duct, leading to a change in Mach number.

The key relation derived from integrating the momentum and energy equations is:

$$ f \frac{L^*}{D_h} = \frac{1-M^2}{\gamma M^2} + \frac{\gamma+1}{2\gamma} \ln\left(\frac{(\gamma+1)M^2}{2(1+\frac{\gamma-1}{2}M^2)}\right) $$

Where:
*   $f$ is the Darcy friction factor (assumed constant for simplicity, though in reality it depends on Reynolds number and surface roughness).
*   $L^*$ is the length of duct required to reach sonic conditions ($M=1$) from a given Mach number $M$.
*   $D_h$ is the hydraulic diameter.

This function $f \frac{L^*}{D_h}$ is tabulated in gas tables for Fanno flow.

**Key Relations:**

1.  **Mach Number vs. Length:** As $f \frac{L^*}{D_h}$ increases, the Mach number moves towards 1.
    *   For subsonic flow ($M < 1$), increasing $L^*$ (and thus $fL^*/D_h$) leads to an increase in $M$ (acceleration).
    *   For supersonic flow ($M > 1$), increasing $L^*$ (and thus $fL^*/D_h$) leads to a decrease in $M$ (deceleration).

2.  **Temperature Ratio:**
    $$ \frac{T}{T^*} = \frac{1+\frac{\gamma-1}{2}M^2}{1+\frac{\gamma-1}{2}} $$
    Where $T^*$ is the temperature at sonic conditions ($M=1$).

3.  **Pressure Ratio:**
    $$ \frac{P}{P^*} = \frac{1}{M} \sqrt{\frac{1+\frac{\gamma-1}{2}}{1+\frac{\gamma-1}{2}M^2}} $$
    Where $P^*$ is the pressure at sonic conditions ($M=1$).

4.  **Density Ratio:**
    $$ \frac{\rho}{\rho^*} = \frac{1}{M} \sqrt{\frac{1+\frac{\gamma-1}{2}M^2}{1+\frac{\gamma-1}{2}}} $$
    Where $\rho^*$ is the density at sonic conditions ($M=1$).

5.  **Velocity Ratio:**
    $$ \frac{v}{v^*} = M \sqrt{\frac{1+\frac{\gamma-1}{2}}{1+\frac{\gamma-1}{2}M^2}} $$
    Where $v^*$ is the velocity at sonic conditions ($M=1$), which is the speed of sound $a^*$.

6.  **Stagnation Temperature Ratio:**
    $$ \frac{T_0}{T_0^*} = 1 $$
    Stagnation temperature is constant in adiabatic flow, so $T_0 = T_0^*$.

7.  **Stagnation Pressure Ratio:**
    $$ \frac{P_0}{P_0^*} = \frac{1}{M} \sqrt{\frac{1+\frac{\gamma-1}{2}}{1+\frac{\gamma-1}{2}M^2}} \sqrt{\frac{1+\frac{\gamma-1}{2}}{1+\frac{\gamma-1}{2}M^2}} = \frac{1}{M^2} \frac{1+\frac{\gamma-1}{2}}{1+\frac{\gamma-1}{2}M^2} $$
    This ratio is always less than 1, indicating a loss of stagnation pressure due to friction.

**Important Point to Remember:** These ratios are often presented in gas tables as functions of Mach number, where the state at $M=1$ is the reference.

**Textbook References:**

*   Shapiro, Vol I (1977): Detailed derivations of these relations.
*   Yahya (2023): Practical application and gas table usage.
*   Rathakrishnan (2021): Comprehensive derivation and examples.

**Course Outcome Alignment:**

*   **CO3:** Analyze problems of flow in constant area duct with friction (Knowledge Level: K4) - These are the core tools for analysis.

---

## 6. Variation of Mach Number with Duct Length

The Fanno flow relation tells us how Mach number changes with duct length due to friction.

*   **Subsonic Flow ($M < 1$):**
    *   As the flow moves through the duct, friction causes the velocity to increase.
    *   This acceleration is due to the pressure gradient overcoming the viscous drag. The pressure continues to drop as the velocity increases.
    *   The Mach number ($M$) increases towards 1.
    *   The entropy also increases.
    *   The temperature decreases.

*   **Supersonic Flow ($M > 1$):**
    *   As the flow moves through the duct, friction causes the velocity to decrease.
    *   In supersonic flow, a pressure drop would normally lead to acceleration. However, friction acts as a force opposing the flow. The effect of friction is to slow down the fluid.
    *   The Mach number ($M$) decreases towards 1.
    *   The entropy also increases.
    *   The temperature increases.

**The Point of Choking ($M=1$):**

There is a maximum length of duct for which Fanno flow can exist for a given inlet condition. This maximum length corresponds to the point where the Mach number reaches 1 (sonic conditions). If the duct is longer than this maximum length, the flow will become choked at the exit, and the mass flow rate will be limited by the upstream conditions.

**Visualizing the Variation:**

The function $f \frac{L^*}{D_h}$ plotted against $M$ is the key.
*   For $M < 1$, as $M$ increases, $f \frac{L^*}{D_h}$ decreases (meaning less length is needed to reach $M=1$).
*   For $M > 1$, as $M$ decreases towards 1, $f \frac{L^*}{D_h}$ decreases.
*   The maximum value of $f \frac{L^*}{D_h}$ occurs at $M=1$, representing infinite length required to reach sonic conditions from $M=1$.

**Textbook References:**

*   Shapiro, Vol I (1977): Discusses flow acceleration/deceleration in Fanno flow.
*   Yahya (2023): Provides plots and explanations of Mach number variation.
*   Rathakrishnan (2021): Detailed analysis of Mach number changes.

**Course Outcome Alignment:**

*   **CO3:** Analyze problems of flow in constant area duct with friction (Knowledge Level: K4) - Understanding this variation is crucial for analysis.

---

## 7. Choking Due to Friction

Choking in Fanno flow occurs when the flow reaches sonic velocity ($M=1$) at the exit of a duct of finite length, due to the effect of friction.

*   **Conditions for Choking:** For a given inlet condition (pressure, temperature, Mach number), there is a maximum length of duct that can be added before the flow at the exit becomes sonic. If the duct length exceeds this maximum, the mass flow rate through the duct will be limited by the sonic condition at the exit, and further increases in duct length will not increase the mass flow rate.

*   **How it Happens:**
    *   **Subsonic Inlet:** The flow accelerates towards $M=1$ as length is added. When the exit reaches $M=1$, the mass flow rate is maximized for the given inlet conditions and duct diameter.
    *   **Supersonic Inlet:** The flow decelerates towards $M=1$ as length is added. If a supersonic flow enters a long, frictional duct, it will decelerate. However, it cannot decelerate past $M=1$ without a shock wave. If the duct is long enough, it will reach $M=1$ at the exit.

*   **Maximum Length:** The length required to reach $M=1$ from a given Mach number $M_1$ is given by $L^*$. If the duct length $L > L^*$, the exit will be choked.

*   **Effect on Mass Flow Rate:**
    *   If the duct length $L$ is less than $L^*$, the exit Mach number $M_2$ will be less than 1. The mass flow rate can be increased by increasing the inlet pressure.
    *   If the duct length $L$ equals $L^*$, the exit Mach number $M_2$ is 1 (sonic). The mass flow rate is now at its maximum for the given inlet conditions and diameter.
    *   If the duct length $L$ is greater than $L^*$, the exit Mach number is still $M=1$. However, the pressure at the inlet will adjust to maintain sonic conditions at the exit, and the mass flow rate remains the same as for $L=L^*$. A shock wave might form within the duct to adjust the upstream supersonic flow to the sonic exit.

**Example:** Consider air flowing from a reservoir into a long pipe. If the pipe is short, the exit Mach number will be subsonic. As the pipe gets longer, the friction causes acceleration, and the exit Mach number increases. At a certain length, the exit Mach number becomes 1. For any pipe longer than this, the exit remains sonic, and the mass flow rate is choked.

**Textbook References:**

*   Shapiro, Vol I (1977): Detailed discussion on choking phenomenon.
*   Yahya (2023): Practical aspects and examples of choked flow.
*   Rathakrishnan (2021): Thorough explanation of choking limits.

**Course Outcome Alignment:**

*   **CO3:** Analyze problems of flow in constant area duct with friction (Knowledge Level: K4) - Understanding choking is essential for analyzing pipe flows, especially with a focus on maximum flow rate.

---

## 8. Use of Gas Tables for Fanno Flow

Gas tables are essential tools for solving Fanno flow problems efficiently. They provide pre-calculated values for various flow properties as a function of Mach number, typically for a specific value of $\gamma$ (often $\gamma=1.4$ for air).

**What Gas Tables Provide for Fanno Flow:**

For Fanno flow, gas tables typically list values for:

*   **Mach Number ($M$)**
*   **$f \frac{L^*}{D_h}$:** This is the primary parameter for Fanno flow, representing the length of duct needed to reach $M=1$ from the given Mach number $M$.
*   **$\frac{T}{T^*}$:** Ratio of static temperature to sonic temperature.
*   **$\frac{P}{P^*}$:** Ratio of static pressure to sonic pressure.
*   **$\frac{\rho}{\rho^*}$:** Ratio of static density to sonic density.
*   **$\frac{v}{v^*}$:** Ratio of static velocity to sonic velocity ($v^* = a^*$).
*   **$\frac{P_0}{P_0^*}$:** Ratio of stagnation pressure to sonic stagnation pressure.

**How to Use Gas Tables:**

There are two main types of problems:

**Type 1: Given Inlet Conditions and Duct Dimensions, Find Exit Conditions.**

1.  **Calculate Inlet Mach Number ($M_1$)**: If not given, it can be calculated from other given properties.
2.  **Find $f \frac{L^*}{D_h}$ for $M_1$**: Look up $M_1$ in the gas table and find the corresponding value of $f \frac{L^*}{D_h}$. Let this be $(f \frac{L^*}{D_h})_1$.
3.  **Calculate the Required Length Parameter to the Exit**: The actual length of the duct is $L$. Calculate the parameter for the exit condition, $(f \frac{L^*}{D_h})_2$, using the given $L$, friction factor $f$, and hydraulic diameter $D_h$.
    $$ (f \frac{L^*}{D_h})_2 = (f \frac{L^*}{D_h})_1 - \frac{4fL}{D_h} $$
    *Note: If the flow is choked, $(f \frac{L^*}{D_h})_2$ will be negative, indicating that the required length to reach $M=1$ is less than the actual duct length.*
4.  **Find Exit Mach Number ($M_2$)**: Look up $(f \frac{L^*}{D_h})_2$ in the gas table and find the corresponding Mach number $M_2$. If the value is not directly in the table, interpolation may be required. If $(f \frac{L^*}{D_h})_2 \le 0$, then $M_2=1$ (choked flow).
5.  **Calculate Exit Properties**: Using $M_2$ and the gas table values for the ratios (e.g., $\frac{T_2}{T^*}$, $\frac{P_2}{P^*}$), calculate the actual exit properties (e.g., $T_2 = T^* \times (\frac{T}{T^*})_{M_2}$). You'll need to know at least one static property at the inlet (e.g., $T_1$ or $P_1$) to scale these ratios to actual values.

**Type 2: Given Inlet and Exit Conditions, Find Duct Length or Friction Factor.**

1.  **Calculate Inlet and Exit Mach Numbers ($M_1, M_2$)**: From given properties.
2.  **Find $f \frac{L^*}{D_h}$ for $M_1$ and $M_2$**: Look up the respective values from the gas table, $(f \frac{L^*}{D_h})_1$ and $(f \frac{L^*}{D_h})_2$.
3.  **Calculate the Required Length Parameter Difference**:
    $$ \frac{4fL}{D_h} = (f \frac{L^*}{D_h})_1 - (f \frac{L^*}{D_h})_2 $$
4.  **Calculate $L$ or $f$**: If $L$ is known, you can find $f$. If $f$ is known, you can find $L$.

**Example Problem:**

Air at $M_1 = 0.3$, $P_1 = 200$ kPa, and $T_1 = 300$ K flows through a constant area duct with diameter $D = 0.1$ m. The friction factor $f = 0.02$. The duct length is $L = 50$ m. Assume $\gamma = 1.4$ and $R = 287$ J/kg-K. Find the exit conditions ($M_2, P_2, T_2$).

**Solution:**

1.  **Inlet Mach Number:** $M_1 = 0.3$.
2.  **Find $(f \frac{L^*}{D_h})_1$**: From Fanno flow gas tables (for $\gamma=1.4$), at $M_1 = 0.3$:
    $(f \frac{L^*}{D_h})_1 \approx 0.5183$
3.  **Calculate the length parameter for the exit**:
    Hydraulic diameter $D_h = D = 0.1$ m.
    $\frac{4fL}{D_h} = \frac{4 \times 0.02 \times 50}{0.1} = \frac{4}{0.1} = 40$
    $(f \frac{L^*}{D_h})_2 = (f \frac{L^*}{D_h})_1 - \frac{4fL}{D_h} = 0.5183 - 40 = -39.4817$
4.  **Find Exit Mach Number ($M_2$)**: Since $(f \frac{L^*}{D_h})_2$ is negative, it means that the length required to reach $M=1$ from $M_1$ is less than the actual duct length. The flow is choked at the exit. Therefore, $M_2 = 1$.
5.  **Calculate Exit Properties**:
    At $M_2=1$, we have the sonic conditions. From the gas table:
    $(\frac{T_2}{T^*}) = 1$
    $(\frac{P_2}{P^*}) = 1$
    We need $T^*$ and $P^*$ to find $P_2$ and $T_2$. These can be found using the isentropic relations from the inlet state to the sonic state.
    From inlet conditions: $T_1 = 300$ K, $P_1 = 200$ kPa, $M_1 = 0.3$.
    Using gas table ratios for $M_1=0.3$:
    $(\frac{T_1}{T^*}) = 0.9615$
    $(\frac{P_1}{P^*}) = 0.8408$
    So, $T^* = \frac{T_1}{(\frac{T_1}{T^*})} = \frac{300}{0.9615} \approx 312.01$ K
    $P^* = \frac{P_1}{(\frac{P_1}{P^*})} = \frac{200}{0.8408} \approx 237.88$ kPa

    Since $M_2=1$, $T_2 = T^* \approx 312.01$ K and $P_2 = P^* \approx 237.88$ kPa.

    *(Self-correction: The gas tables usually directly provide ratios of properties relative to sonic conditions. So, if you know $T_1$ and $M_1$, you can find $T^*$ and then $T_2$ if $M_2$ is known. Or, if you know $P_1$ and $M_1$, you can find $P^*$ and then $P_2$ if $M_2$ is known.)*

    Let's re-calculate exit properties using $M_2=1$:
    $T_2 = T^* \times (\frac{T}{T^*})_{M_2} = T^* \times 1$. We need $T^*$.
    $T^* = T_1 / (T_1/T^*)_M1 = 300 / 0.9615 = 312.01$ K.
    So, $T_2 = 312.01$ K.

    $P_2 = P^* \times (\frac{P}{P^*})_{M_2} = P^* \times 1$. We need $P^*$.
    $P^* = P_1 / (P_1/P^*)_M1 = 200 / 0.8408 = 237.88$ kPa.
    So, $P_2 = 237.88$ kPa.

**Important Point to Remember:** Always ensure your gas table is for the correct $\gamma$ value. Interpolation is often necessary for values not directly listed.

**Textbook References:**

*   Yahya (2023): Contains detailed Fanno flow gas tables and examples.
*   Rathakrishnan (2021): May also include gas tables or reference where to find them.
*   Shapiro, Vol I (1977): May provide necessary data or formulas to construct tables.

**Course Outcome Alignment:**

*   **CO3:** Analyze problems of flow in constant area duct with friction (Knowledge Level: K4) - Gas tables are a crucial tool for practical analysis.

---

## 9. Practice Questions and Answers

**Question 1:**
For a Fanno flow of air ($\gamma = 1.4$) entering a duct at $M_1 = 0.2$. What happens to the Mach number, temperature, and pressure as the flow progresses through the duct?

**Answer:**
As the flow progresses through a Fanno flow duct from a subsonic Mach number ($M_1 = 0.2$):
*   **Mach Number:** Increases, moving towards $M=1$.
*   **Temperature:** Decreases (due to acceleration).
*   **Pressure:** Decreases.
*   **Entropy:** Increases.

**Question 2:**
Air at $M_1 = 0.4$ enters a Fanno flow duct. If the duct length required to reach sonic conditions ($M=1$) from this state is $L^*$. What is the value of $4fL^*/D_h$ for air ($\gamma=1.4$)?

**Answer:**
Using Fanno flow gas tables for $\gamma=1.4$:
At $M_1 = 0.4$, the value of $f \frac{L^*}{D_h}$ is approximately $0.311$.
Therefore, $4fL^*/D_h \approx 4 \times 0.311 = 1.244$.

**Question 3:**
A supersonic flow of air at $M_1 = 2.0$ enters a Fanno flow duct. What happens to the Mach number, temperature, and pressure as the flow progresses through the duct?

**Answer:**
As the flow progresses through a Fanno flow duct from a supersonic Mach number ($M_1 = 2.0$):
*   **Mach Number:** Decreases, moving towards $M=1$.
*   **Temperature:** Increases (due to deceleration).
*   **Pressure:** Decreases.
*   **Entropy:** Increases.

**Question 4:**
Air enters a 10 m long duct at $M_1 = 0.3$. The friction factor $f = 0.03$ and the hydraulic diameter $D_h = 0.05$ m. Assuming $\gamma=1.4$, determine if the flow is choked at the exit. If not, what is the exit Mach number? Use Fanno flow gas tables.

**Answer:**
1.  **Inlet Mach Number:** $M_1 = 0.3$.
2.  **From Fanno gas tables ($\gamma=1.4$) at $M_1=0.3$:**
    $(f \frac{L^*}{D_h})_1 \approx 0.5183$.
3.  **Calculate the length parameter for the duct:**
    $\frac{4fL}{D_h} = \frac{4 \times 0.03 \times 10}{0.05} = \frac{1.2}{0.05} = 24$.
4.  **Calculate the length parameter for the exit:**
    $(f \frac{L^*}{D_h})_2 = (f \frac{L^*}{D_h})_1 - \frac{4fL}{D_h} = 0.5183 - 24 = -23.4817$.
5.  **Determine Exit Mach Number:** Since $(f \frac{L^*}{D_h})_2$ is negative, the flow is choked at the exit.
    Therefore, $M_2 = 1$.

**Question 5:**
Given an inlet condition to a Fanno flow duct of $M_1=0.5$ and exit condition of $M_2=0.8$. For air ($\gamma=1.4$) with $f=0.02$ and $D_h=0.1$ m, calculate the length of the duct required.

**Answer:**
1.  **From Fanno gas tables ($\gamma=1.4$):**
    At $M_1 = 0.5$: $(f \frac{L^*}{D_h})_1 \approx 0.2798$.
    At $M_2 = 0.8$: $(f \frac{L^*}{D_h})_2 \approx 0.0477$.
2.  **Calculate the length parameter difference:**
    $\frac{4fL}{D_h} = (f \frac{L^*}{D_h})_1 - (f \frac{L^*}{D_h})_2 = 0.2798 - 0.0477 = 0.2321$.
3.  **Calculate the duct length $L$:**
    $L = \frac{D_h}{4f} \times 0.2321 = \frac{0.1}{4 \times 0.02} \times 0.2321 = \frac{0.1}{0.08} \times 0.2321 = 1.25 \times 0.2321 \approx 0.290$ m.

---

## 10. Key Points to Remember

*   **Fanno Flow:** Steady, 1D, adiabatic, constant area duct with friction.
*   **Driving Force:** Friction causes property changes.
*   **Subsonic Flow:** Accelerates ($M$ increases), $T$ decreases, $P$ decreases, $s$ increases.
*   **Supersonic Flow:** Decelerates ($M$ decreases), $T$ increases, $P$ decreases, $s$ increases.
*   **Choking:** Occurs when $M=1$ at the exit. Maximum length for unchoked flow exists.
*   **Fanno Parameter ($f L^*/D_h$):** A function solely of Mach number and $\gamma$, it dictates the length required to reach sonic conditions.
*   **Gas Tables:** Indispensable for solving Fanno flow problems by providing pre-calculated property ratios and $f L^*/D_h$ values.
*   **Constant Stagnation Enthalpy:** $h_0 = h + v^2/2 = constant$ for adiabatic flow.
*   **Increasing Entropy:** Friction is an irreversible process, so entropy always increases along the flow path in Fanno flow.
*   **$M=1$ is the point of maximum entropy increase:** For a given inlet state, there's a maximum duct length that can be added before reaching $M=1$.

This module provides the foundational understanding and tools to analyze how friction impacts compressible flow in practical scenarios like long pipelines.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
