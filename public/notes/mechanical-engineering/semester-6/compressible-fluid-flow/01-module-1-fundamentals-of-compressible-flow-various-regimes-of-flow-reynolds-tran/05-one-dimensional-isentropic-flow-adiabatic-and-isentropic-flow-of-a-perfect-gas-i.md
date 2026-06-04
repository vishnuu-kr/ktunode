---
title: "One Dimensional isentropic flow: adiabatic and isentropic flow of a perfect gas, isentropic flow in ducts of varying cross-sections, nozzles, mass flow rate, critical properties, chocking, impulse function, operation of nozzle under varying pressure ratios–Use of gas tables."
subject: "COMPRESSIBLE FLUID FLOW"
module: "Module 1: Fundamentals of compressible flow: Various regimes of flow, Reynolds transport theorem"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1651d0cf48044637da"
status: "completed"
scrapedAt: "2026-05-20T18:03:35.272Z"
---
# COMPRESSIBLE FLUID FLOW

## Module 1: Fundamentals of Compressible Flow

### Topic: One-Dimensional Isentropic Flow

This module introduces the fundamental concepts of compressible fluid flow, focusing on the behavior of gases when their density changes significantly. We will begin by defining various flow regimes and then delve into the Reynolds Transport Theorem, a crucial tool for analyzing fluid systems. This specific topic will concentrate on the idealized scenario of one-dimensional isentropic flow.

---

### 1.1 Introduction to Compressible Flow Regimes

Compressible flow is characterized by significant density variations. The Mach number ($M$) is the key parameter defining these regimes.

*   **Mach Number (M):** Defined as the ratio of the flow velocity ($V$) to the local speed of sound ($a$).
    $M = \frac{V}{a}$
    The speed of sound for a perfect gas is given by: $a = \sqrt{\gamma R T}$, where:
    *   $\gamma$ is the ratio of specific heats (e.g., 1.4 for air).
    *   $R$ is the specific gas constant.
    *   $T$ is the absolute temperature.

*   **Flow Regimes:**
    *   **Incompressible Flow:** $M < 0.3$. Density variations are negligible. Standard incompressible flow equations (e.g., Bernoulli's equation) apply.
    *   **Subsonic Flow:** $0.3 \le M < 1$. Density variations are significant.
    *   **Sonic Flow:** $M = 1$. The flow velocity equals the speed of sound.
    *   **Supersonic Flow:** $1 < M < 5$. The flow velocity exceeds the speed of sound. Wave phenomena (shocks) occur.
    *   **Hypersonic Flow:** $M > 5$. Extremely high velocities, often accompanied by dissociation and ionization.

**Key Concept:** The behavior of a fluid changes drastically as it transitions between these Mach number regimes. Compressible flow analysis is essential when Mach numbers are significant.

---

### 1.2 Reynolds Transport Theorem (RTT)

The Reynolds Transport Theorem provides a way to relate the rate of change of a property for a *control volume* to the rate of change of that property for a corresponding *system* (a fixed mass of fluid). This is fundamental for deriving conservation laws (mass, momentum, energy) in fluid mechanics.

*   **System vs. Control Volume:**
    *   **System:** A fixed mass of fluid. Properties are tracked as they move with the fluid.
    *   **Control Volume (CV):** A region in space. Fluid flows in and out. We are interested in the state of the region, not the specific fluid particles.

*   **The Theorem:** For any extensive property $\mathcal{B}$ and its corresponding intensive property $\beta = \mathcal{B}/\text{mass}$, the rate of change of $\mathcal{B}$ for a system is equal to the rate of change of $\mathcal{B}$ within the control volume plus the net rate of $\mathcal{B}$ leaving the control volume due to flow across its boundaries.

    $\frac{d\mathcal{B}_{sys}}{dt} = \frac{d}{dt} \int_{CV} \beta \rho \, d\mathcal{B} + \int_{CS} \beta \rho (\vec{V} \cdot \vec{n}) \, dA$

    Where:
    *   $\frac{d\mathcal{B}_{sys}}{dt}$: Rate of change of property $\mathcal{B}$ for the system.
    *   $\int_{CV} \beta \rho \, d\mathcal{B}$: Rate of change of property $\mathcal{B}$ within the control volume.
    *   $\int_{CS} \beta \rho (\vec{V} \cdot \vec{n}) \, dA$: Net rate of property $\mathcal{B}$ crossing the control surface (CS) at rate $\rho (\vec{V} \cdot \vec{n}) \, dA$.
        *   $\rho$: Fluid density.
        *   $\vec{V}$: Velocity vector.
        *   $\vec{n}$: Outward normal vector to the surface.
        *   $dA$: Differential area element.

*   **Application to One-Dimensional Flow:** For one-dimensional flow in a duct, the control volume is typically a section of the duct. The control surface consists of two cross-sections (inlet and outlet) and the duct walls.

    $\frac{d\mathcal{B}_{sys}}{dt} = \frac{\partial}{\partial t} \int_{CV} \beta \rho \, d\mathcal{B} + \sum_{out} \beta \dot{m} - \sum_{in} \beta \dot{m}$

    Where $\dot{m} = \rho AV$ is the mass flow rate.

**Key Concept:** RTT allows us to translate conservation principles, initially formulated for systems, into forms applicable to control volumes, which are easier to analyze in most fluid flow problems.

---

### 1.3 Adiabatic and Isentropic Flow of a Perfect Gas

This section focuses on a simplified but important case: one-dimensional flow of a perfect gas that is both adiabatic and reversible (isentropic).

*   **Perfect Gas:** A gas that obeys the ideal gas law ($PV = mRT$) and has constant specific heats ($\gamma$ and $c_p$).
*   **Adiabatic Process:** No heat transfer into or out of the system ($Q=0$).
*   **Isentropic Process:** A process that is both adiabatic and reversible. For a perfect gas with constant specific heats, this means the entropy remains constant ($s = \text{constant}$).

The thermodynamic relations for an isentropic process of a perfect gas are:

*   **Pressure-Volume:** $P v^\gamma = \text{constant}$ or $\frac{P_2}{P_1} = \left(\frac{v_2}{v_1}\right)^{-\gamma} = \left(\frac{\rho_2}{\rho_1}\right)^{\gamma}$
*   **Temperature-Volume:** $T v^{\gamma-1} = \text{constant}$ or $\frac{T_2}{T_1} = \left(\frac{v_2}{v_1}\right)^{-(\gamma-1)} = \left(\frac{\rho_2}{\rho_1}\right)^{\gamma-1}$
*   **Temperature-Pressure:** $T P^{(1-\gamma)/\gamma} = \text{constant}$ or $\frac{T_2}{T_1} = \left(\frac{P_2}{P_1}\right)^{(\gamma-1)/\gamma}$
*   **Temperature-Density:** $T/\rho^{\gamma-1} = \text{constant}$ (Derived from ideal gas law and $Pv^\gamma = const$)

**Governing Equations for 1D Isentropic Flow:**

By applying RTT to conservation of mass, momentum, and energy for a differential control volume in a duct with varying cross-sectional area, we can derive fundamental relationships.

*   **Continuity Equation:** $\frac{d\rho}{\rho} + \frac{dV}{V} + \frac{dA}{A} = 0$
*   **Momentum Equation:** $dP + \rho V dV = 0$ (Neglecting wall friction and gravity)
    *   Dividing by $P$: $\frac{dP}{P} + \frac{\rho V^2}{P} \frac{dV}{V} = 0$
    *   Since $a^2 = \gamma P/\rho$, we have $\frac{\rho V^2}{P} = \gamma M^2$.
    *   So, $\frac{dP}{P} + \gamma M^2 \frac{dV}{V} = 0$
*   **Energy Equation (for adiabatic flow):** $c_p dT + V dV = 0$
    *   Using $c_p = \frac{\gamma R}{\gamma-1}$ and $a^2 = \gamma RT$, $dT = \frac{1}{\gamma-1} \frac{da^2}{\gamma R} = \frac{a^2}{\gamma-1} \frac{d(\gamma RT)}{a^2} = \frac{a^2}{\gamma-1} \frac{dT}{T}$. This is incorrect.
    *   Correctly, $c_p dT = -V dV$. Divide by $a^2$: $\frac{c_p}{\gamma R T} dT = -\frac{V dV}{a^2}$.
    *   Using $c_p = \frac{\gamma R}{\gamma-1}$: $\frac{\gamma R}{(\gamma-1) R T} dT = -\frac{V dV}{a^2}$
    *   $\frac{\gamma}{\gamma-1} \frac{dT}{T} = -M^2 \frac{dV}{V}$

**Combining Equations:**

From continuity: $\frac{dV}{V} = -\frac{d\rho}{\rho} - \frac{dA}{A}$
Substitute into momentum: $dP + \rho V (-\frac{d\rho}{\rho} - \frac{dA}{A}) = 0 \implies \frac{dP}{P} - \frac{a^2}{a^2} \frac{d\rho}{\rho} - \frac{a^2}{a^2} \frac{dA}{A} = 0 \implies \frac{dP}{P} - \frac{1}{\gamma} \frac{d\rho}{\rho} - \frac{dA}{A} = 0$. This is not leading to the standard Mach wave relation directly.

Let's restart with the combined relation for $dV/V$:
From $\frac{dP}{P} + \gamma M^2 \frac{dV}{V} = 0$, we get $\frac{dV}{V} = -\frac{1}{\gamma M^2} \frac{dP}{P}$.
From the energy equation $c_p dT = -V dV$, and for isentropic process $dP = a^2 d\rho$ and $dT = \frac{a^2}{\gamma R} \frac{d\rho}{\rho} = \frac{a^2}{\gamma T} \frac{dT}{T}$ incorrect.
For isentropic process: $dP = a^2 d\rho$.
Also, $c_p dT = -V dV$. Using $c_p = \frac{\gamma R}{\gamma-1}$: $\frac{\gamma R}{\gamma-1} dT = -V dV$.
And $a^2 = \gamma RT \implies T = \frac{a^2}{\gamma R}$.
$\frac{\gamma R}{\gamma-1} d\left(\frac{a^2}{\gamma R}\right) = -V dV \implies \frac{1}{\gamma-1} da^2 = -V dV$.
$da^2 = -(\gamma-1) V dV$.
Divide by $a^2$: $\frac{da^2}{a^2} = -(\gamma-1) \frac{V dV}{a^2} = -(\gamma-1) M^2 \frac{dV}{V}$.
This gives the relation between change in speed and change in speed of sound.

Now combine with continuity: $\frac{d\rho}{\rho} + \frac{dV}{V} + \frac{dA}{A} = 0$.
For isentropic flow, $\frac{d\rho}{\rho} = \frac{1}{\gamma} \frac{dP}{P}$.
So, $\frac{1}{\gamma} \frac{dP}{P} + \frac{dV}{V} + \frac{dA}{A} = 0$.
Substitute $\frac{dP}{P} = -\frac{\gamma M^2 dV}{V}$:
$\frac{1}{\gamma} (-\gamma M^2 \frac{dV}{V}) + \frac{dV}{V} + \frac{dA}{A} = 0$
$-M^2 \frac{dV}{V} + \frac{dV}{V} + \frac{dA}{A} = 0$
$(1-M^2) \frac{dV}{V} + \frac{dA}{A} = 0$
$\frac{dV}{V} = -\frac{1}{1-M^2} \frac{dA}{A}$

This is the **Mach wave relation** or the **fundamental equation for 1D isentropic flow**.

**Important Consequences of the Mach Wave Relation:**

*   **Subsonic Flow ($M < 1$):** $(1-M^2) > 0$.
    *   $\frac{dV}{V} = -\frac{1}{\text{positive}} \frac{dA}{A}$.
    *   If area increases ($dA/A > 0$, e.g., diffuser), velocity decreases ($dV/V < 0$).
    *   If area decreases ($dA/A < 0$, e.g., nozzle), velocity increases ($dV/V > 0$).
    *   This is consistent with everyday fluid behavior.

*   **Supersonic Flow ($M > 1$):** $(1-M^2) < 0$.
    *   $\frac{dV}{V} = -\frac{1}{\text{negative}} \frac{dA}{A} = \frac{1}{\text{positive}} \frac{dA}{A}$.
    *   If area increases ($dA/A > 0$, e.g., supersonic nozzle/divergent section), velocity increases ($dV/V > 0$).
    *   If area decreases ($dA/A < 0$, e.g., supersonic diffuser/convergent section), velocity decreases ($dV/V < 0$).
    *   This is counter-intuitive compared to subsonic flow and is a hallmark of compressible flow.

*   **Sonic Flow ($M = 1$):** $(1-M^2) = 0$.
    *   For $dV/V$ to remain finite, we must have $dA/A = 0$ when $M=1$, provided the numerator $1-M^2$ is not zero.
    *   If $dA/A$ is non-zero, then for $M=1$, $dV/V$ would be infinite, which is not physically possible.
    *   This implies that the velocity can only reach sonic speed ($M=1$) at a point where the area is minimum (a throat).

**Important Points to Remember:**
*   For subsonic flow, a converging passage accelerates the flow.
*   For supersonic flow, a *diverging* passage accelerates the flow.
*   For flow to transition from subsonic to supersonic, a converging-diverging (de Laval) nozzle is required.

**Reference:** Shapiro, Vol I, Chapter 5. Yahya, Chapter 3. Rathakrishnan, Chapter 3.

---

### 1.4 Isentropic Flow in Ducts of Varying Cross-Sections (Nozzles)

Nozzles are devices designed to accelerate fluid flow, typically from low velocity to high velocity. For isentropic flow, their geometry is crucial.

*   **Convergent Nozzle:** A nozzle with a decreasing cross-sectional area.
    *   Can accelerate subsonic flow up to sonic speed ($M=1$) at the exit, but only if the exit pressure is low enough.
    *   If the exit pressure is too high, the flow remains purely subsonic.

*   **Convergent-Divergent (de Laval) Nozzle:** A nozzle with a converging section followed by a diverging section.
    *   **Converging Section:** Accelerates subsonic flow towards the throat.
    *   **Throat:** The point of minimum area. This is where Mach number can reach unity ($M=1$) if conditions are right.
    *   **Diverging Section:** Accelerates supersonic flow if the flow at the throat is sonic.

**Key Equations relating Flow Properties to Mach Number (for 1D Isentropic Flow):**

These equations express various flow properties (pressure, temperature, density, velocity) as ratios relative to their values at the sonic condition (denoted by subscript '*').

*   **Area-Mach Relation:** $\frac{A}{A^*} = \frac{1}{M} \left[ \frac{1 + \frac{\gamma-1}{2} M^2}{1 + \frac{\gamma-1}{2}} \right]^{\frac{\gamma+1}{2(\gamma-1)}}$
    *   This is a fundamental relationship derived from combining continuity, momentum, and energy equations. It shows how the area changes with Mach number.
    *   $A^*$ is the area of the throat where $M=1$.

*   **Pressure-Mach Relation:** $\frac{P}{P_0} = \left[ 1 + \frac{\gamma-1}{2} M^2 \right]^{-\frac{\gamma}{\gamma-1}}$
    *   $P_0$ is the stagnation pressure (total pressure), the pressure the fluid would have if brought isentropically to rest.

*   **Temperature-Mach Relation:** $\frac{T}{T_0} = \left[ 1 + \frac{\gamma-1}{2} M^2 \right]^{-1}$
    *   $T_0$ is the stagnation temperature (total temperature).

*   **Density-Mach Relation:** $\frac{\rho}{\rho_0} = \left[ 1 + \frac{\gamma-1}{2} M^2 \right]^{-\frac{1}{\gamma-1}}$

*   **Velocity-Mach Relation:** $V = M a = M \sqrt{\gamma R T}$
    *   We can also express $V$ in terms of stagnation properties:
        $V = \sqrt{2 c_p (T_0 - T)} = \sqrt{2 \frac{\gamma R}{\gamma-1} (T_0 - T_0 [1 + \frac{\gamma-1}{2} M^2]^{-1})}$
        $V = \sqrt{2 \frac{\gamma R T_0}{\gamma-1} \left(1 - [1 + \frac{\gamma-1}{2} M^2]^{-1}\right)}$
        $V = \sqrt{\frac{2 \gamma R T_0}{\gamma-1} \left(\frac{\frac{\gamma-1}{2} M^2}{1 + \frac{\gamma-1}{2} M^2}\right)} = \sqrt{\frac{2 \gamma R T_0}{\gamma-1} \frac{(\gamma-1)M^2}{2 + (\gamma-1)M^2}}$
        $V = \sqrt{\frac{2 \gamma R T_0 M^2}{2 + (\gamma-1)M^2}} = M \sqrt{\frac{2 \gamma R T_0}{2 + (\gamma-1)M^2}}$
        This shows $V$ in terms of $M$ and stagnation properties.

**Important Point:** These relations are derived assuming isentropic flow and are valid for both subsonic and supersonic flow, provided $M \neq 1$ for the area-mach relation.

**Reference:** Shapiro, Vol I, Chapter 5. Yahya, Chapter 3. Rathakrishnan, Chapter 3.

---

### 1.5 Mass Flow Rate ($\dot{m}$)

The mass flow rate through a duct is given by:

$\dot{m} = \rho V A$

For isentropic flow, we can express $\rho$ and $V$ in terms of Mach number and stagnation properties:

$\dot{m} = \rho_0 \left[ 1 + \frac{\gamma-1}{2} M^2 \right]^{-\frac{1}{\gamma-1}} \cdot M \sqrt{\frac{2 \gamma R T_0}{2 + (\gamma-1)M^2}} \cdot A$

This can be simplified by expressing it in terms of the throat area $A^*$:

$\dot{m} = A^* P_0 \sqrt{\frac{\gamma}{R T_0}} \left( \frac{1 + \frac{\gamma-1}{2} M^2}{1 + \frac{\gamma-1}{2}} \right)^{-\frac{\gamma+1}{2(\gamma-1)}} M$

This equation shows that for a given stagnation condition ($P_0, T_0$) and throat area ($A^*$), the mass flow rate is uniquely determined by the Mach number $M$.

**Maximum Mass Flow Rate:**
The mass flow rate reaches its maximum value at the throat ($M=1$).
$\dot{m}_{max} = A^* P_0 \sqrt{\frac{\gamma}{R T_0}} \left( \frac{1 + \frac{\gamma-1}{2}}{1 + \frac{\gamma-1}{2}} \right)^{-\frac{\gamma+1}{2(\gamma-1)}} \cdot 1 = A^* P_0 \sqrt{\frac{\gamma}{R T_0}} \left( \frac{1+\frac{\gamma-1}{2}}{1} \right)^{-\frac{\gamma+1}{2(\gamma-1)}}$

Let's re-evaluate the $M=1$ expression directly from $\dot{m} = \rho V A$:
At $M=1$, $V=a = \sqrt{\gamma R T^*}$ and $T^* = T_0 / (1 + \frac{\gamma-1}{2})$.
So $V^* = \sqrt{\gamma R T_0 / (1 + \frac{\gamma-1}{2})}$.
$\rho^* = \rho_0 / (1 + \frac{\gamma-1}{2})^{1/(\gamma-1)}$.
$\dot{m}_{max} = \rho^* V^* A^* = \rho_0 \left(1 + \frac{\gamma-1}{2}\right)^{-1/(\gamma-1)} \sqrt{\gamma R T_0} \left(1 + \frac{\gamma-1}{2}\right)^{-1/2} A^*$
$\dot{m}_{max} = A^* P_0 \sqrt{\frac{\gamma}{R T_0}} \left(1 + \frac{\gamma-1}{2}\right)^{-\frac{1}{\gamma-1}-\frac{1}{2}} = A^* P_0 \sqrt{\frac{\gamma}{R T_0}} \left(1 + \frac{\gamma-1}{2}\right)^{-\frac{\gamma+1}{2(\gamma-1)}}$
This is the correct expression for maximum mass flow rate.

**Important Point:** For a given nozzle geometry (fixed $A^*$) and stagnation conditions, the mass flow rate is limited by the sonic velocity at the throat.

---

### 1.6 Critical Properties

Critical properties are those at the sonic condition ($M=1$). They are denoted by an asterisk (*).

*   **Critical Velocity:** $a^* = \sqrt{\gamma R T^*}$
*   **Critical Temperature:** $T^* = \frac{T_0}{1 + \frac{\gamma-1}{2}}$
*   **Critical Pressure:** $P^* = \frac{P_0}{\left(1 + \frac{\gamma-1}{2}\right)^{\frac{\gamma}{\gamma-1}}}$
*   **Critical Density:** $\rho^* = \frac{\rho_0}{\left(1 + \frac{\gamma-1}{2}\right)^{\frac{1}{\gamma-1}}}$
*   **Critical Area:** $A^*$ is the area at the throat where $M=1$.

**Reference:** Shapiro, Vol I, Chapter 5. Yahya, Chapter 3. Rathakrishnan, Chapter 3.

---

### 1.7 Choking

Choking is the phenomenon where the mass flow rate through a nozzle reaches its maximum possible value, and any further reduction in back pressure will not increase the mass flow rate. This occurs when the flow at the throat of a nozzle becomes sonic ($M=1$).

*   **Conditions for Choking:**
    1.  The flow at the narrowest section (throat) of a nozzle reaches sonic velocity ($M=1$).
    2.  This requires a sufficient pressure ratio between the stagnation chamber and the exit.

*   **Choking Pressure Ratio:** For a converging-diverging nozzle, choking occurs when the pressure at the throat ($P_t$) is equal to the critical pressure ($P^*$).
    $P_t = P^* = P_0 \left(\frac{2}{\gamma+1}\right)^{\frac{\gamma}{\gamma-1}}$

*   **Back Pressure and Flow Regimes:**
    *   If the back pressure ($P_b$) is higher than $P^*$, the flow may not reach $M=1$ at the throat. It will be subsonic throughout the nozzle, and the mass flow rate will be less than maximum.
    *   If $P_b$ is reduced such that $P_t$ becomes equal to $P^*$, choking occurs. The mass flow rate reaches its maximum, and the Mach number at the throat is 1.
    *   If $P_b$ is further reduced below $P^*$, the flow in the diverging section will be supersonic. The pressure at the throat remains $P^*$, and the Mach number at the throat remains 1. The mass flow rate also remains constant at its maximum.
    *   The pressure at the exit of the nozzle will be somewhere between $P^*$ and $P_b$. The exact expansion depends on the nozzle geometry and the external pressure.

**Important Point:** Choking is a condition where the mass flow rate is maximized and is insensitive to further reductions in back pressure, as long as the sonic condition at the throat is maintained.

**Reference:** Shapiro, Vol I, Chapter 5. Yahya, Chapter 3. Rathakrishnan, Chapter 3.

---

### 1.8 Impulse Function

The impulse function, often denoted by $I$, is related to the momentum flux across a cross-section. It is useful in analyzing the thrust generated by a nozzle.

For one-dimensional flow, the impulse function per unit area is given by:

$I/A = P + \rho V^2$

Let's examine this in terms of Mach number for isentropic flow:

*   $\rho = \rho_0 \left[ 1 + \frac{\gamma-1}{2} M^2 \right]^{-\frac{1}{\gamma-1}}$
*   $P = P_0 \left[ 1 + \frac{\gamma-1}{2} M^2 \right]^{-\frac{\gamma}{\gamma-1}}$
*   $V = M a = M \sqrt{\gamma R T} = M \sqrt{\gamma R T_0 \left[ 1 + \frac{\gamma-1}{2} M^2 \right]^{-1}}$
*   $\rho V^2 = \rho_0 \left[ 1 + \frac{\gamma-1}{2} M^2 \right]^{-\frac{1}{\gamma-1}} \cdot M^2 \gamma R T_0 \left[ 1 + \frac{\gamma-1}{2} M^2 \right]^{-1}$
    $\rho V^2 = \rho_0 \gamma R T_0 M^2 \left[ 1 + \frac{\gamma-1}{2} M^2 \right]^{-\frac{1}{\gamma-1}-1}$
    Since $P_0 = \rho_0 R T_0$, and $\gamma R T_0 = \gamma P_0/\rho_0$.
    $\rho V^2 = P_0 \gamma M^2 \left[ 1 + \frac{\gamma-1}{2} M^2 \right]^{-\frac{\gamma+1}{\gamma-1}}$

So, $I/A = P_0 \left[ 1 + \frac{\gamma-1}{2} M^2 \right]^{-\frac{\gamma}{\gamma-1}} + P_0 \gamma M^2 \left[ 1 + \frac{\gamma-1}{2} M^2 \right]^{-\frac{\gamma+1}{\gamma-1}}$
$I/A = P_0 \left[ 1 + \frac{\gamma-1}{2} M^2 \right]^{-\frac{\gamma+1}{\gamma-1}} \left\{ \left[ 1 + \frac{\gamma-1}{2} M^2 \right] + \gamma M^2 \right\}$
$I/A = P_0 \left[ 1 + \frac{\gamma-1}{2} M^2 \right]^{-\frac{\gamma+1}{\gamma-1}} \left\{ 1 + \frac{\gamma-1}{2} M^2 + \gamma M^2 \right\}$
$I/A = P_0 \left[ 1 + \frac{\gamma-1}{2} M^2 \right]^{-\frac{\gamma+1}{\gamma-1}} \left\{ 1 + M^2 \frac{\gamma-1+2\gamma}{2} \right\} = P_0 \left[ 1 + \frac{\gamma-1}{2} M^2 \right]^{-\frac{\gamma+1}{\gamma-1}} \left\{ 1 + M^2 \frac{3\gamma-1}{2} \right\}$

This form is not particularly common. A more practical use of the impulse function is in relating the thrust of a nozzle to the change in impulse function across the nozzle.

The net force on a control volume is related to the rate of change of momentum within the CV and the momentum flux across the CV. For a nozzle with inlet and exit, the net force exerted by the nozzle walls on the fluid is equal to the rate of change of momentum of the fluid. The reaction force on the nozzle is the thrust.

Thrust $F = \dot{m} V_{exit} + (P_{exit} - P_{ambient}) A_{exit}$
In terms of impulse function, the force exerted on the fluid passing through the nozzle is:
$F_{fluid} = (P_{exit} + \rho_{exit} V_{exit}^2) A_{exit} - (P_{inlet} + \rho_{inlet} V_{inlet}^2) A_{inlet}$

The impulse function ($P + \rho V^2$) represents the momentum flux per unit area plus the pressure.

**Reference:** Anderson, Chapter 4. Rathakrishnan, Chapter 3.

---

### 1.9 Operation of Nozzle Under Varying Pressure Ratios – Use of Gas Tables

Gas tables are pre-calculated tables that provide the values of various dimensionless flow properties as a function of Mach number for isentropic flow of a perfect gas with a specific $\gamma$. They are extremely useful for solving compressible flow problems without repetitive calculations.

*   **Gas Table Contents:** Typically include ratios for:
    *   Pressure: $P/P_0$
    *   Temperature: $T/T_0$
    *   Density: $\rho/\rho_0$
    *   Area: $A/A^*$ (Mach number-area relation)
    *   Velocity: $V/\sqrt{\gamma R T_0}$
    *   Stagnation enthalpy $h_0$, etc.

*   **Using Gas Tables:**
    1.  **Identify Knowns:** Stagnation conditions ($P_0, T_0$), nozzle geometry ($A$, $A^*$), and either exit pressure ($P_b$) or exit Mach number ($M_b$).
    2.  **Determine Mach Number:**
        *   If $P_b$ is known, calculate $P_b/P_0$. Look up this value in the $P/P_0$ column of the gas table to find the corresponding Mach number ($M_b$).
        *   If $M_b$ is known, directly use it to find other ratios.
        *   If the area ratio $A/A^*$ is known, look this up in the $A/A^*$ column to find $M$.
    3.  **Calculate Flow Properties:** Once $M$ is determined, use the other columns in the gas table to find ratios like $P/P_0$, $T/T_0$, $\rho/\rho_0$, etc. Then, multiply these ratios by the stagnation values ($P_0, T_0$) to get actual properties.

*   **Nozzle Operation with Varying Back Pressure ($P_b$):**

    Consider a nozzle connected to a stagnation chamber at $P_0$ and expanding to an ambient pressure $P_b$. The throat area is $A^*$.

    1.  **High Back Pressure ($P_b > P_{choke}$):** The exit pressure $P_{exit}$ will be equal to $P_b$. The flow throughout the nozzle remains subsonic. The Mach number at the throat is less than 1. Mass flow rate is not maximum.

    2.  **Choking Condition ($P_b \approx P^*$):** As $P_b$ is reduced, the exit pressure $P_{exit}$ also reduces, and the Mach number at the throat increases. Choking occurs when the flow at the throat becomes sonic ($M=1$), meaning $P_{exit} = P^*$. The mass flow rate is maximum.

    3.  **Supersonic Flow ($P_b < P^*$):** As $P_b$ is reduced further below $P^*$, the throat still remains sonic ($M=1$, $P_t = P^*$). The flow accelerates to supersonic speeds in the diverging section. The exit Mach number $M_{exit}$ becomes greater than 1. The exit pressure $P_{exit}$ is now greater than $P_b$.
        *   **Ideal Expansion ($P_{exit} = P_b$):** The flow expands isentropically from $M=1$ at the throat to $M_{exit} > 1$, and the exit pressure $P_{exit}$ exactly matches the back pressure $P_b$. This occurs for a specific back pressure $P_b$ that results in $P_{exit}$ matching $P_b$ from the gas table.
        *   **Under-expansion ($P_{exit} > P_b$):** If $P_b$ is further reduced, the nozzle exit pressure $P_{exit}$ will be greater than $P_b$. The flow is still supersonic at the exit, but it has not expanded as much as it could. The flow will undergo further expansion to ambient pressure outside the nozzle, often creating expansion waves and a visible plume. Mass flow rate is maximum and constant.
        *   **Over-expansion ($P_{exit} < P_b$):** If the back pressure $P_b$ is increased from the ideal expansion condition but is still below $P^*$, the exit pressure $P_{exit}$ becomes less than $P_b$. This creates a condition where the external pressure is higher than the nozzle exit pressure. This can lead to the formation of shock waves within the nozzle (e.g., oblique shocks, normal shocks), which cause a significant loss in thrust and efficiency. The flow in the diverging section might not be isentropic. If a shock forms at the exit, it means the flow is still supersonic at the exit *before* the shock. If a shock forms *inside* the nozzle, it will move upstream until it detaches from the nozzle exit.

**Important Point:** Gas tables are essential tools for efficiently solving problems involving 1D isentropic flow by providing a direct link between Mach number and various flow property ratios. Understanding the different nozzle operating regimes based on back pressure is crucial.

**Reference:** Yahya, Chapter 3. Rathakrishnan, Chapter 3. Anderson, Chapter 4.

---

### Practice Questions/Exercises

**Question 1:** Air at stagnation conditions of $P_0 = 500$ kPa and $T_0 = 500$ K expands isentropically through a nozzle. The throat area is $A^* = 0.01 \, m^2$. Calculate the mass flow rate through the nozzle if the exit Mach number is $M_{exit} = 2.0$. (Assume $\gamma = 1.4$, $R = 287 \, J/kg \cdot K$).

**Solution:**
First, we need to find the stagnation density $\rho_0$:
$\rho_0 = \frac{P_0}{R T_0} = \frac{500 \times 10^3 \, Pa}{287 \, J/kg \cdot K \times 500 \, K} = 3.484 \, kg/m^3$.

Next, calculate the maximum mass flow rate (choked flow rate) using the throat area and stagnation conditions:
$\dot{m}_{max} = A^* P_0 \sqrt{\frac{\gamma}{R T_0}} \left(1 + \frac{\gamma-1}{2}\right)^{-\frac{\gamma+1}{2(\gamma-1)}}$
$\dot{m}_{max} = 0.01 \, m^2 \times 500 \times 10^3 \, Pa \times \sqrt{\frac{1.4}{287 \, J/kg \cdot K \times 500 \, K}} \times \left(1 + \frac{1.4-1}{2}\right)^{-\frac{1.4+1}{2(1.4-1)}}$
$\dot{m}_{max} = 0.01 \times 500 \times 10^3 \times \sqrt{\frac{1.4}{143500}} \times (1.2)^{-3.5}$
$\dot{m}_{max} = 0.01 \times 500 \times 10^3 \times \sqrt{9.756 \times 10^{-6}} \times 0.5006$
$\dot{m}_{max} = 0.01 \times 500 \times 10^3 \times 0.003123 \times 0.5006 \approx 15.63 \, kg/s$.

Since the exit Mach number is $M_{exit} = 2.0 > 1$, the nozzle is choked, and the mass flow rate is the maximum mass flow rate.
Therefore, $\dot{m} = 15.63 \, kg/s$.

**Question 2:** Air enters a nozzle with stagnation conditions $P_0 = 200$ kPa and $T_0 = 400$ K. The nozzle has a throat area $A^* = 0.005 \, m^2$. If the back pressure is $P_b = 50$ kPa, determine the Mach number at the exit, the exit pressure, and whether the flow is ideally expanded, under-expanded, or over-expanded. Use gas tables (for $\gamma = 1.4$).

**Solution:**
First, find the critical pressure $P^*$ for choked flow:
$P^* = P_0 \left(\frac{2}{\gamma+1}\right)^{\frac{\gamma}{\gamma-1}} = 200 \, kPa \left(\frac{2}{1.4+1}\right)^{\frac{1.4}{1.4-1}} = 200 \, kPa \left(\frac{2}{2.4}\right)^{3.5} = 200 \, kPa (0.8333)^{3.5} \approx 200 \, kPa \times 0.4914 = 98.28 \, kPa$.

The back pressure $P_b = 50$ kPa is less than the critical pressure $P^* = 98.28$ kPa. This indicates that the nozzle will be choked, and the flow in the diverging section will be supersonic.

Now, we need to find the exit Mach number ($M_{exit}$) that corresponds to an exit pressure $P_{exit}$ equal to the back pressure $P_b = 50$ kPa. This requires using gas tables.
We need to find $M_{exit}$ such that $P_{exit}/P_0 = 50 \, kPa / 200 \, kPa = 0.25$.

Looking up the value 0.25 in the $P/P_0$ column of a standard gas table for $\gamma=1.4$:
We find that $P/P_0 \approx 0.25$ corresponds to $M \approx 2.25$.

So, the exit Mach number is $M_{exit} \approx 2.25$.
The exit pressure is $P_{exit} = P_b = 50$ kPa (since the flow expands isentropically to match the back pressure).

Comparing $P_{exit}$ with $P_b$: In this case, $P_{exit} = P_b$. So, the flow is **ideally expanded**.

If $P_b$ were lower than 50 kPa (e.g., 30 kPa), then $P_{exit}$ would still be 50 kPa (corresponding to $M=2.25$), and $P_b$ would be less than $P_{exit}$, indicating under-expansion.
If $P_b$ were higher than 50 kPa but still below $P^*$ (e.g., 70 kPa), then $P_{exit}$ would be 70 kPa, and $P_b$ would be greater than $P_{exit}$, indicating over-expansion (and potential shock formation).

**Question 3:** For a converging-diverging nozzle, prove that $M=1$ can only occur at a minimum area (throat).

**Solution:**
Start with the continuity equation for 1D flow:
$\frac{d\rho}{\rho} + \frac{dV}{V} + \frac{dA}{A} = 0$

For isentropic flow of a perfect gas, we have the momentum equation:
$dP + \rho V dV = 0 \implies \frac{dP}{P} + \gamma M^2 \frac{dV}{V} = 0 \implies \frac{dV}{V} = -\frac{1}{\gamma M^2} \frac{dP}{P}$.

Also, for isentropic flow, $P = P_0 (1 + \frac{\gamma-1}{2} M^2)^{-\frac{\gamma}{\gamma-1}}$. Differentiating this with respect to $M$ and dividing by $P$ gives:
$\frac{dP}{P} = -\frac{\gamma}{\gamma-1} \left(1 + \frac{\gamma-1}{2} M^2\right)^{-1} \cdot \frac{\gamma-1}{2} \cdot 2M \, dM = -\gamma M \left(1 + \frac{\gamma-1}{2} M^2\right)^{-1} dM$.
So, $\frac{dP}{P} = -\frac{\gamma M^2}{1 + \frac{\gamma-1}{2} M^2} \frac{dM}{M}$.

Substituting $\frac{dP}{P}$ into the $\frac{dV}{V}$ expression:
$\frac{dV}{V} = -\frac{1}{\gamma M^2} \left(-\frac{\gamma M^2}{1 + \frac{\gamma-1}{2} M^2} \frac{dM}{M}\right) = \frac{1}{1 + \frac{\gamma-1}{2} M^2} \frac{dM}{M}$.
This relates change in velocity to change in Mach number.

Now, consider the density change for isentropic flow. We know $P/\rho^\gamma = \text{constant}$. Differentiating this gives $dP - \gamma P \frac{d\rho}{\rho} = 0$, so $\frac{d\rho}{\rho} = \frac{1}{\gamma} \frac{dP}{P}$.
Substitute the expression for $\frac{dP}{P}$:
$\frac{d\rho}{\rho} = \frac{1}{\gamma} \left(-\frac{\gamma M^2}{1 + \frac{\gamma-1}{2} M^2} \frac{dM}{M}\right) = -\frac{M}{1 + \frac{\gamma-1}{2} M^2} \frac{dM}{M}$. This is not useful.

Let's use the relation $a^2 = \gamma RT$ and $P = \rho RT \implies P/\rho = RT$.
For isentropic flow, $P \rho^{-\gamma} = C \implies P = C \rho^\gamma$.
$RT = P/\rho = C \rho^{\gamma-1}$.
$T = \frac{C}{R} \rho^{\gamma-1}$.
$a^2 = \gamma RT = \frac{\gamma C}{R} \rho^{\gamma-1}$.
$a = \sqrt{\frac{\gamma C}{R}} \rho^{\frac{\gamma-1}{2}}$.
So, $a \propto \rho^{\frac{\gamma-1}{2}}$.
Taking logarithm: $\ln a = \ln C' + \frac{\gamma-1}{2} \ln \rho$.
Differentiating: $\frac{da}{a} = \frac{\gamma-1}{2} \frac{d\rho}{\rho}$.

Now we have:
$\frac{d\rho}{\rho} = \frac{2}{\gamma-1} \frac{da}{a}$.
We also know $M = V/a$. Differentiating $\ln M = \ln V - \ln a$:
$\frac{dM}{M} = \frac{dV}{V} - \frac{da}{a}$.

Substitute the relation between $\frac{dV}{V}$ and $\frac{dA}{A}$: $(1-M^2) \frac{dV}{V} + \frac{dA}{A} = 0 \implies \frac{dV}{V} = -\frac{1}{1-M^2} \frac{dA}{A}$.

Substitute $\frac{d\rho}{\rho}$ into the continuity equation:
$\frac{2}{\gamma-1} \frac{da}{a} - \frac{1}{1-M^2} \frac{dA}{A} + \frac{dA}{A} = 0$. This is incorrect.

Let's go back to:
1. $\frac{d\rho}{\rho} + \frac{dV}{V} + \frac{dA}{A} = 0$
2. $dP + \rho V dV = 0 \implies \frac{dP}{P} = -\gamma M^2 \frac{dV}{V}$
3. $c_p dT + V dV = 0 \implies \frac{dT}{T} = -\frac{\gamma-1}{2} M^2 \frac{dV}{V}$ (by dividing by $c_p T$ and using $a^2=\gamma R T$)

From $P = \rho RT$, $\frac{dP}{P} = \frac{d\rho}{\rho} + \frac{dT}{T}$.
Substitute relations for $dP/P$ and $dT/T$:
$-\gamma M^2 \frac{dV}{V} = \frac{d\rho}{\rho} - \frac{\gamma-1}{2} M^2 \frac{dV}{V}$.
$\frac{d\rho}{\rho} = -\gamma M^2 \frac{dV}{V} + \frac{\gamma-1}{2} M^2 \frac{dV}{V} = -M^2 (\gamma - \frac{\gamma-1}{2}) \frac{dV}{V} = -M^2 \frac{\gamma+1}{2} \frac{dV}{V}$.

Now substitute this $\frac{d\rho}{\rho}$ into continuity:
$-M^2 \frac{\gamma+1}{2} \frac{dV}{V} + \frac{dV}{V} + \frac{dA}{A} = 0$
$\frac{dV}{V} \left(1 - M^2 \frac{\gamma+1}{2}\right) + \frac{dA}{A} = 0$. This is also not the standard relation.

Let's use the derived relation: $\frac{dV}{V} = -\frac{1}{1-M^2} \frac{dA}{A}$.
We need to show that $M=1$ implies $dA/A = 0$.

From $P/P_0 = (1 + \frac{\gamma-1}{2} M^2)^{-\frac{\gamma}{\gamma-1}}$,
$P = P_0 \left(1 + \frac{\gamma-1}{2} M^2\right)^{-\frac{\gamma}{\gamma-1}}$.
From $T/T_0 = (1 + \frac{\gamma-1}{2} M^2)^{-1}$,
$T = T_0 \left(1 + \frac{\gamma-1}{2} M^2\right)^{-1}$.
From $\rho/\rho_0 = (1 + \frac{\gamma-1}{2} M^2)^{-\frac{1}{\gamma-1}}$,
$\rho = \rho_0 \left(1 + \frac{\gamma-1}{2} M^2\right)^{-\frac{1}{\gamma-1}}$.

Now consider the mass flow rate $\dot{m} = \rho V A$.
$\dot{m} = \rho_0 \left(1 + \frac{\gamma-1}{2} M^2\right)^{-\frac{1}{\gamma-1}} \cdot M \sqrt{\gamma R T_0} \left(1 + \frac{\gamma-1}{2} M^2\right)^{-\frac{1}{2}} \cdot A$
$\dot{m} = \rho_0 \sqrt{\gamma R T_0} \cdot M \left(1 + \frac{\gamma-1}{2} M^2\right)^{-\frac{1}{\gamma-1}-\frac{1}{2}} \cdot A$
$\dot{m} = A \frac{P_0}{\sqrt{RT_0}} \sqrt{\frac{\gamma}{T_0}} \cdot M \left(1 + \frac{\gamma-1}{2} M^2\right)^{-\frac{\gamma+1}{2(\gamma-1)}} = A \frac{P_0}{\sqrt{RT_0}} \sqrt{\frac{\gamma}{T_0}} \cdot M \left(\frac{1 + \frac{\gamma-1}{2} M^2}{1}\right)^{-\frac{\gamma+1}{2(\gamma-1)}}$ -- Mistake in formula derivation.

Let's use the known result for mass flow rate in terms of $A^*$:
$\dot{m} = A^* P_0 \sqrt{\frac{\gamma}{R T_0}} \left( \frac{1 + \frac{\gamma-1}{2} M^2}{1 + \frac{\gamma-1}{2}} \right)^{-\frac{\gamma+1}{2(\gamma-1)}} M$

The mass flow rate $\dot{m}$ must be continuous along the duct.
$\dot{m} = \rho V A = \text{constant}$.
$A = \frac{\dot{m}}{\rho V}$.

We know that the maximum mass flow rate occurs at $M=1$.
$\dot{m}_{max} = A^* P_0 \sqrt{\frac{\gamma}{R T_0}} \left( \frac{1 + \frac{\gamma-1}{2}}{1 + \frac{\gamma-1}{2}} \right)^{-\frac{\gamma+1}{2(\gamma-1)}} \cdot 1 = A^* P_0 \sqrt{\frac{\gamma}{R T_0}} \left( \frac{2}{\gamma+1} \right)^{\frac{\gamma+1}{2(\gamma-1)}}$

For $M=1$, we have a specific area $A$ corresponding to this mass flow rate.
$A = \frac{\dot{m}_{max}}{\rho^* V^*} = \frac{A^* P_0 \sqrt{\frac{\gamma}{R T_0}} \left( \frac{2}{\gamma+1} \right)^{\frac{\gamma+1}{2(\gamma-1)}}}{\rho_0 (\frac{2}{\gamma+1})^{1/(\gamma-1)} \sqrt{\gamma R T_0} (\frac{2}{\gamma+1})^{1/2} }$
$A = \frac{A^* P_0 \sqrt{\frac{\gamma}{R T_0}} \left( \frac{2}{\gamma+1} \right)^{\frac{\gamma+1}{2(\gamma-1)}}}{\frac{P_0}{RT_0} (\frac{2}{\gamma+1})^{1/(\gamma-1)} \sqrt{\gamma R T_0} (\frac{2}{\gamma+1})^{1/2} }$
$A = A^* \frac{P_0}{\sqrt{RT_0}} \sqrt{\frac{\gamma}{T_0}} \frac{\left( \frac{2}{\gamma+1} \right)^{\frac{\gamma+1}{2(\gamma-1)}}}{\frac{P_0}{RT_0} (\frac{2}{\gamma+1})^{\frac{\gamma+1}{2(\gamma-1)}} (\frac{2}{\gamma+1})^{\frac{1}{2}} }$
$A = A^* \frac{P_0}{\sqrt{RT_0}} \sqrt{\frac{\gamma}{T_0}} \frac{1}{\frac{P_0}{RT_0} (\frac{2}{\gamma+1})^{\frac{1}{2}} } = A^* \frac{P_0 RT_0}{P_0} \sqrt{\frac{\gamma}{T_0^2}} \frac{1}{(\frac{2}{\gamma+1})^{\frac{1}{2}}} = A^* \frac{RT_0}{1} \frac{\sqrt{\gamma}}{T_0} \sqrt{\frac{\gamma+1}{2}}$
$A = A^* \sqrt{\gamma \frac{\gamma+1}{2}}$. This is still not correct.

Let's use the Area-Mach relation:
$\frac{A}{A^*} = \frac{1}{M} \left[ \frac{1 + \frac{\gamma-1}{2} M^2}{1 + \frac{\gamma-1}{2}} \right]^{\frac{\gamma+1}{2(\gamma-1)}}$

We need to show that if $M=1$, then $A=A^*$.
Substitute $M=1$:
$\frac{A}{A^*} = \frac{1}{1} \left[ \frac{1 + \frac{\gamma-1}{2}}{1 + \frac{\gamma-1}{2}} \right]^{\frac{\gamma+1}{2(\gamma-1)}} = 1 \cdot [1]^{\frac{\gamma+1}{2(\gamma-1)}} = 1$.
So, $A = A^*$ when $M=1$.

This means that the area where $M=1$ is the throat area $A^*$. The area $A^*$ is the minimum area in a converging-diverging nozzle. If the area were to decrease further after the throat ($A < A^*$), and the flow were sonic at the throat ($M=1$), the equation $A/A^* = 1/M(...)$ would require $M > 1$ to have $A < A^*$, which contradicts $M=1$ at minimum area. Conversely, if the area increases after the throat ($A > A^*$), the equation allows for $M > 1$.

Therefore, Mach number $M=1$ occurs at the minimum area (throat).

---

### Important Points to Remember:

*   **Mach Number is Key:** Differentiates compressible flow regimes.
*   **Isentropic Flow:** Adiabatic and reversible. Simplifies analysis significantly.
*   **Perfect Gas Assumptions:** Valid for many gases at moderate pressures and temperatures.
*   **Mach Wave Relation:** $(1-M^2) \frac{dV}{V} + \frac{dA}{A} = 0$ is the governing equation for area changes.
*   **Convergent vs. Divergent:** Convergent passages accelerate subsonic flow; divergent passages accelerate supersonic flow.
*   **De Laval Nozzle:** Essential for achieving supersonic speeds.
*   **Choking:** Occurs at $M=1$ at the throat when pressure ratio is low enough, leading to maximum mass flow rate.
*   **Critical Properties:** Conditions at $M=1$.
*   **Gas Tables:** Indispensable tools for solving 1D isentropic flow problems.
*   **Nozzle Operation:** Dictated by the back pressure relative to critical and ambient pressures, leading to ideal, under-, or over-expansion.

---

### Alignment with Course Outcomes:

*   **CO1: Understand the basic concepts of compressible fluid mechanics (Knowledge Level: K3)**
    *   Covered by introducing flow regimes, Mach number, perfect gas, adiabatic/isentropic concepts, RTT.

*   **CO2: Analyze problems in one dimensional isentropic compressible flow. (Knowledge Level: K4)**
    *   Covered by deriving and applying the Mach wave relation, using gas tables, calculating mass flow rate, understanding nozzle behavior, and solving problems involving pressure ratios and Mach numbers.

---

This concludes Module 1, Topic 1. The next modules will build upon these fundamentals to analyze more complex phenomena in compressible flow.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
