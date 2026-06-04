---
title: "Flow through constant area duct with heat transfer (Rayleigh Flow): Assumptions, Governing equations, Rayleigh line on h-s and P-v diagram, Rayleigh relation for perfect gas, maximum possible heat addition, location of maximum enthalpy and entropy points, thermal chocking, Use of gas tables for Rayleigh flow."
subject: "COMPRESSIBLE FLUID FLOW"
module: "Module 3: Flow through constant area duct with heat transfer (Rayleigh Flow): Assumptions, Governing equations, Rayleigh line on h"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1651d0cf48044637df"
status: "completed"
scrapedAt: "2026-05-20T18:03:37.376Z"
---
# Module 3: Flow Through Constant Area Duct with Heat Transfer (Rayleigh Flow)

## 1. Introduction and Objectives

This module delves into the analysis of compressible fluid flow in a constant area duct when heat is added or removed. This scenario, known as **Rayleigh Flow**, is fundamental for understanding processes like combustion in gas turbines and ramjets, as well as heat exchangers.

**Learning Outcomes:**

*   Understand the fundamental assumptions and governing equations for Rayleigh flow. (CO1, K3)
*   Visualize and interpret the Rayleigh flow process on h-s and P-v diagrams. (CO1, K3)
*   Derive and apply the Rayleigh relation for a perfect gas. (CO4, K4)
*   Determine the maximum possible heat addition and the location of maximum enthalpy and entropy. (CO4, K4)
*   Comprehend the phenomenon of thermal choking and its implications. (CO4, K4)
*   Learn to utilize gas tables for solving Rayleigh flow problems. (CO4, K4)

**Course Outcomes Alignment:**

*   This module directly addresses **CO4** by focusing on the analysis of flow in a constant area duct with heat transfer.
*   The underlying principles of compressible flow are reinforced, contributing to **CO1**.

## 2. Assumptions for Rayleigh Flow

Rayleigh flow deals with steady, one-dimensional flow through a constant area duct with heat transfer. The following assumptions are typically made:

*   **Steady Flow:** Flow properties at any given point in the duct do not change with time.
*   **One-Dimensional Flow:** Flow properties are uniform across any given cross-section of the duct. Variations are considered only along the flow direction (x-axis).
*   **Constant Area Duct:** The cross-sectional area (A) of the duct remains constant along the flow path.
*   **No External Work:** No work is done by or on the fluid (e.g., no rotating shafts, no pumps, no turbines).
*   **No Body Forces:** Gravity and other body forces are neglected.
*   **Perfect Gas:** The fluid is assumed to behave as a perfect gas, satisfying the ideal gas law ($P = \rho RT$) and having constant specific heats (or specific heats that vary only with temperature).
*   **Heat Transfer:** Heat is added or removed from the fluid through the duct walls.

*   **Important Point:** While specific heats are often assumed constant for simplicity, in reality, they vary with temperature. For more accurate analysis, temperature-dependent specific heats can be considered, but this often necessitates numerical methods or specialized gas tables. (Shapiro, Vol I)

## 3. Governing Equations

The governing equations for Rayleigh flow are derived from the fundamental conservation principles applied to a control volume encompassing a differential length of the duct.

**3.1. Continuity Equation:**
For steady, one-dimensional flow, the mass flow rate ($\dot{m}$) is constant:
$\dot{m} = \rho A V = \text{constant}$
Since A is constant, the product $\rho V$ is constant.
$\frac{d(\rho V)}{dx} = 0$

**3.2. Momentum Equation:**
Considering the forces acting on a differential control volume: pressure forces and viscous shear forces. For a frictionless flow (or assuming shear forces are implicitly accounted for in heat transfer effects in simplified analysis), the momentum equation simplifies to:
$P + \rho V^2 = \text{constant}$
$\frac{dP}{dx} + \frac{d(\rho V^2)}{dx} = 0$

**3.3. Energy Equation:**
The steady flow energy equation for a control volume with heat addition (q) and no work is:
$h + \frac{V^2}{2} = \text{constant}$ (total enthalpy)
$\frac{dh}{dx} + V \frac{dV}{dx} = \frac{dq_{cv}}{dx}$

Where $dq_{cv}$ is the heat added per unit mass per unit length. Often, we work with $q$ as the heat added per unit mass.

**3.4. State Equation (Perfect Gas):**
$P = \rho R T$

**3.5. Specific Heat Relations:**
$c_p - c_v = R$
$\gamma = \frac{c_p}{c_v}$
$c_p = \frac{\gamma R}{\gamma-1}$
$c_v = \frac{R}{\gamma-1}$

### Important Note on Differential Forms:
We often derive differential forms of these equations to analyze the effect of heat addition on flow properties. Let's examine the impact of heat transfer on velocity and pressure.

From the momentum equation:
$dP + d(\rho V^2) = 0$
$dP + d(\rho V)V + \rho V dV = 0$
Since $d(\rho V) = 0$ (continuity), we get:
$dP + \rho V dV = 0$  (Equation 3.4)

From the energy equation and relating enthalpy to specific heat:
$dh + V dV = dq$
$c_p dT + V dV = dq$ (Equation 3.5)

Combining Equation 3.4 and 3.5, and using $c_p = (\frac{\partial h}{\partial T})_P$, and $dP = (\frac{\partial P}{\partial T})_\rho dT + (\frac{\partial P}{\partial \rho})_T d\rho$, and $V^2 = (\frac{\partial P}{\partial \rho})_s$, etc. is complex.

A more direct approach to see the effect of heat transfer on velocity is by considering the energy equation ($h + \frac{V^2}{2} = H_{total}$) and the definition of enthalpy ($h = c_p T$ for perfect gas with constant $c_p$).
$c_p T + \frac{V^2}{2} = \text{constant}$

Differentiating with respect to heat addition ($q$):
$c_p \frac{dT}{dq} + V \frac{dV}{dq} = 0$
$\frac{dV}{dq} = -\frac{c_p}{V} \frac{dT}{dq}$

Now consider the effect of heat addition on temperature and pressure.
From $P + \rho V^2 = \text{constant}$, let's analyze the change in $P$ and $\rho$ with heat transfer.
We have $PV = RT\rho$ and $P = \rho V^2$ (approximately for choked flow analysis).
Consider the term $\rho V^2$. If $V$ increases, $\rho$ must decrease significantly for $\rho V^2$ to remain constant if $P$ changes.

Let's use the relationship between enthalpy and velocity from the energy equation: $V^2 = 2(H_{total} - h)$.
And the momentum equation: $P + \rho V^2 = P_0$ (where $P_0$ is the stagnation pressure in a constant area duct with heat transfer).

From $P + \rho V^2 = \text{constant}$:
$dP + d(\rho V^2) = 0$
$dP + d(\frac{P}{RT} V^2) = 0$ (using ideal gas law)
$dP + \frac{V^2}{RT} dP + P d(\frac{V^2}{RT}) = 0$
$dP (1 + \frac{V^2}{RT}) = -P d(\frac{V^2}{RT})$

Consider the velocity $V$ and Mach number $M = V/a$, where $a = \sqrt{\gamma RT}$.
$V = M \sqrt{\gamma RT}$
$V^2 = M^2 \gamma RT$
$\frac{V^2}{RT} = M^2 \gamma$

So, $dP(1 + M^2 \gamma) = -P d(M^2 \gamma)$.
If $\gamma$ is constant: $dP(1 + \gamma M^2) = -P \gamma d(M^2)$.

Now consider the energy equation: $h + \frac{V^2}{2} = \text{constant}$
$c_p T + \frac{V^2}{2} = \text{constant}$
$dT + \frac{V}{c_p} dV = \frac{dq}{c_p}$

If heat is added ($dq > 0$):
*   **Subsonic Flow ($M < 1$):** As heat is added, $T$ tends to increase. To maintain $h + V^2/2 = \text{constant}$, $V$ must increase. As $V$ increases, $\rho$ must decrease for continuity ($\rho V = \text{constant}$). The term $\rho V^2$ will change. If $V$ increases, $\rho$ decreases. If $V^2$ increases faster than $\rho$ decreases, $\rho V^2$ increases. For $\rho V^2$ to remain constant, $P$ must decrease. Therefore, for subsonic flow, heat addition increases velocity, decreases density, and decreases pressure.
*   **Supersonic Flow ($M > 1$):** As heat is added, $T$ tends to increase. To maintain $h + V^2/2 = \text{constant}$, $V$ must decrease. As $V$ decreases, $\rho$ must increase for continuity. The term $\rho V^2$ will change. If $V$ decreases, $V^2$ decreases. If $\rho$ increases significantly, $\rho V^2$ might increase or decrease. For $\rho V^2$ to remain constant, $P$ must increase. Therefore, for supersonic flow, heat addition decreases velocity, increases density, and increases pressure.

This observation is crucial and is summarized by the **Rayleigh relation**.

## 4. Rayleigh Relation for a Perfect Gas

The Rayleigh relation connects the changes in flow properties due to heat addition. We can derive a relationship between Mach number and heat addition from the governing equations.

From $P + \rho V^2 = \text{constant}$ and $P = \rho R T$:
$P + \frac{P}{RT} V^2 = \text{constant}$
$P(1 + \frac{V^2}{RT}) = \text{constant}$
$P(1 + \gamma M^2) = \text{constant}$ (Equation 3.6)

From $h + \frac{V^2}{2} = \text{constant}$ and $h = c_p T$:
$c_p T + \frac{V^2}{2} = \text{constant}$
Dividing by $c_p T$:
$1 + \frac{V^2}{2 c_p T} = \frac{\text{constant}}{c_p T}$
Using $a^2 = \gamma RT$ and $c_p = \frac{\gamma R}{\gamma-1}$:
$\frac{V^2}{2 c_p T} = \frac{V^2}{2 (\frac{\gamma R}{\gamma-1}) T} = \frac{(\gamma-1) V^2}{2 \gamma R T} = \frac{\gamma-1}{2 \gamma} \frac{V^2}{RT} = \frac{\gamma-1}{2 \gamma} M^2$
So, $1 + \frac{\gamma-1}{2} M^2 = \frac{\text{constant}}{c_p T}$
$\frac{c_p T}{1 + \frac{\gamma-1}{2} M^2} = \text{constant}$ (related to stagnation enthalpy)

Now, let's combine Equation 3.6 and the expression for $\frac{c_p T}{1 + \frac{\gamma-1}{2} M^2}$.
Let the constant in Equation 3.6 be $C_1$ and the constant in the energy equation be $C_2$.
$P = \frac{C_1}{1 + \gamma M^2}$
$T = \frac{C_2}{c_p (1 + \frac{\gamma-1}{2} M^2)}$

We also have $\rho = \frac{P}{RT}$.
$\rho = \frac{C_1 / (1 + \gamma M^2)}{R \cdot C_2 / (c_p (1 + \frac{\gamma-1}{2} M^2))}$
$\rho = \frac{C_1 c_p}{C_2 R} \frac{1 + \frac{\gamma-1}{2} M^2}{1 + \gamma M^2}$

Mass flow rate: $\dot{m} = \rho A V = \rho A M a = \rho A M \sqrt{\gamma RT}$
$\dot{m} = A M \sqrt{\gamma R} \sqrt{RT} \rho$
$\dot{m} = A M \sqrt{\gamma R} \sqrt{R \frac{C_2}{c_p (1 + \frac{\gamma-1}{2} M^2)}} \frac{C_1 c_p}{C_2 R} \frac{1 + \frac{\gamma-1}{2} M^2}{1 + \gamma M^2}$
$\dot{m} = A M \sqrt{\frac{\gamma R^2 C_2}{c_p (1 + \frac{\gamma-1}{2} M^2)}} \frac{C_1 c_p}{C_2 R} \frac{1 + \frac{\gamma-1}{2} M^2}{1 + \gamma M^2}$
$\dot{m} = A \frac{C_1}{\sqrt{C_2}} \sqrt{\frac{\gamma c_p}{R}} M \frac{1 + \frac{\gamma-1}{2} M^2}{1 + \gamma M^2}$

Since $\dot{m}$ and $A$ are constant, the term:
$f(M) = \frac{M(1 + \frac{\gamma-1}{2} M^2)}{1 + \gamma M^2}$ must be constant.
This is a fundamental result of Rayleigh flow, relating Mach number to the ratio of stagnation enthalpy and density.

A more useful form of the Rayleigh relation is derived from the ratio of properties at two different Mach numbers ($M_1$ and $M_2$) in the same duct with heat transfer:

$\frac{P_2}{P_1} = \frac{1 + \gamma M_1^2}{1 + \gamma M_2^2}$
$\frac{T_2}{T_1} = \frac{a_2^2}{a_1^2} = \frac{M_2^2 c_{p} T_2 / (c_p T_2)}{M_1^2 c_{p} T_1 / (c_p T_1)} = \frac{T_2}{T_1} \frac{M_1^2}{M_2^2}$
$\frac{T_2}{T_1} = \frac{c_{p1} T_1 (1 + \frac{\gamma-1}{2} M_1^2)}{c_{p2} T_2 (1 + \frac{\gamma-1}{2} M_2^2)}$ (using energy equation $h/c_p T = 1+\frac{\gamma-1}{2}M^2$)
$\frac{T_2}{T_1} = \frac{1 + \frac{\gamma-1}{2} M_1^2}{1 + \frac{\gamma-1}{2} M_2^2} \frac{1 + \gamma M_2^2}{1 + \gamma M_1^2}$ (using temperature ratio relation derived from $h+V^2/2=const$ and $P+\rho V^2=const$)
$\frac{\rho_2}{\rho_1} = \frac{1 + \gamma M_1^2}{1 + \gamma M_2^2} \frac{1 + \frac{\gamma-1}{2} M_2^2}{1 + \frac{\gamma-1}{2} M_1^2}$

These relations are derived by considering the continuity, momentum, energy, and ideal gas equations and eliminating terms. (Yahya, Chapter 8)

The key Rayleigh relation that is most commonly used relates the Mach number to the heat added, and can be expressed as:

$\frac{q}{c_p T_0} = \frac{1 - M^2}{1 + \gamma M^2} \frac{1 + \frac{\gamma-1}{2} M^2}{\frac{\gamma-1}{2}}$ (This form is complex, it's easier to work with ratios)

A more practical form is obtained by considering the total enthalpy $H_0 = h + \frac{V^2}{2} = c_p T + \frac{V^2}{2}$.
The Mach number effect on flow properties due to heat addition can be summarized by:
*   If $M < 1$, adding heat increases $V$, decreases $P$, increases $T$.
*   If $M > 1$, adding heat decreases $V$, increases $P$, increases $T$.
*   If $M = 1$, adding heat increases $T$ and $P$ and decreases $V$ (but $V$ is already sonic, so it will decrease towards supersonic).

## 5. Rayleigh Line on h-s and P-v Diagrams

The locus of states reachable by heat addition in a constant area duct for a perfect gas is called the **Rayleigh line**.

**5.1. h-s Diagram:**
*   **Constant Area, Constant Mass Flux:** The condition $\rho V A = \text{constant}$ implies $\rho V = \text{constant}$.
*   **Momentum Equation:** $P + \rho V^2 = \text{constant}$.
*   **Energy Equation:** $h + \frac{V^2}{2} = \text{constant} = H_0$ (total enthalpy).

From the energy equation, $V^2 = 2(H_0 - h)$. Substituting this into the momentum equation:
$P + \rho (2(H_0 - h)) = \text{constant}$
$P + 2\rho H_0 - 2\rho h = \text{constant}$

Using $P = \rho RT$:
$RT + 2H_0 - 2h = \frac{\text{constant}}{\rho}$
$RT + 2H_0 - 2h = \frac{\text{constant}}{P/RT} = \frac{RT \cdot \text{constant}}{P}$

This approach is getting complicated. A simpler way to visualize is by considering the properties.
Let $M_1$ be a subsonic state and $M_2$ be a supersonic state reached by adding heat.

*   **Subsonic to Supersonic Transition:**
    *   As heat is added to a subsonic flow ($M < 1$), $V$ increases, $P$ decreases, $T$ increases. The state moves to the right and up on an h-s diagram (increasing h and s).
    *   As heat is added to a supersonic flow ($M > 1$), $V$ decreases, $P$ increases, $T$ increases. The state also moves to the right and up on an h-s diagram (increasing h and s).

The Rayleigh line shows states that can be reached from each other through heat transfer. The line starts from a subsonic state, passes through the sonic state ($M=1$), and ends in a supersonic state (or vice versa if heat is removed).

*   **The h-s diagram:** For a fixed mass flow rate, each point on the diagram represents a state $(h, s)$. Heat addition increases $h$ and $s$ (for a real process). The Rayleigh line shows the possible combinations of $h$ and $s$ reachable.
    *   The curve will have a maximum entropy point.
    *   The curve will generally be tilted to the right and upwards.
    *   It connects subsonic states to supersonic states.

**5.2. P-v Diagram:**
*   **Subsonic Flow:** Heat addition leads to $V$ increasing, $\rho$ decreasing (so $v=1/\rho$ increases), and $P$ decreasing. On a P-v diagram, this is a movement to the right and down.
*   **Supersonic Flow:** Heat addition leads to $V$ decreasing, $\rho$ increasing (so $v$ decreases), and $P$ increasing. On a P-v diagram, this is a movement to the left and up.

*   **The Rayleigh Line:**
    *   The Rayleigh line is a curve on the P-v diagram.
    *   It starts in the subsonic region (higher pressure, lower specific volume).
    *   It passes through a point corresponding to sonic velocity ($M=1$).
    *   It ends in the supersonic region (lower pressure, higher specific volume).
    *   The shape of the curve reflects the opposite behaviors of subsonic and supersonic flows with heat addition.
    *   The sonic condition ($M=1$) corresponds to the point of maximum heat addition.

(Rathakrishnan, Chapter 6)

## 6. Maximum Possible Heat Addition and Location of Maximum Enthalpy and Entropy Points

**6.1. Maximum Possible Heat Addition:**

The maximum possible heat addition for a given initial state in a Rayleigh flow occurs when the flow becomes **choked** ($M=1$). This is because adding more heat beyond this point would require a decrease in mass flow rate or a violation of the governing equations for a constant area duct.

Mathematically, the heat addition per unit mass is related to the change in stagnation enthalpy. For a given initial state, the maximum total enthalpy is reached at the sonic condition ($M=1$).

Let the initial state be state 1, and the state where $M=1$ be state 'c' (choked). The heat added per unit mass is $q = h_c - h_1 + \frac{V_c^2 - V_1^2}{2}$.

Using the energy equation ($h + V^2/2 = \text{constant}$), and the relation derived from momentum ($P + \rho V^2 = \text{constant}$), it can be shown that the maximum heat addition occurs when $M=1$. This corresponds to the point where the Rayleigh curve on the h-s diagram reaches its maximum enthalpy or temperature for a given initial mass flux.

**6.2. Location of Maximum Enthalpy:**

The enthalpy ($h$) of a perfect gas is directly proportional to temperature ($h = c_p T$). Therefore, the location of maximum enthalpy is the location of **maximum temperature**.

From the energy equation, $h + V^2/2 = H_0$.
As heat is added, $h$ increases and $V$ increases (in subsonic flow) or decreases (in supersonic flow).
The point of maximum temperature (and thus maximum enthalpy) occurs at $M=1$.

*   **Proof:** From $c_p T + V^2/2 = H_0$, and $V = M a = M \sqrt{\gamma RT}$, $V^2 = M^2 \gamma RT$.
    $c_p T + \frac{M^2 \gamma RT}{2} = H_0$
    $T (c_p + \frac{M^2 \gamma R}{2}) = H_0$
    $T = \frac{H_0}{c_p + \frac{M^2 \gamma R}{2}}$
    To maximize T, the denominator must be minimized.
    $c_p + \frac{M^2 \gamma R}{2} = \frac{\gamma R}{\gamma-1} + \frac{M^2 \gamma R}{2} = \gamma R (\frac{1}{\gamma-1} + \frac{M^2}{2})$
    This term is minimized when $M^2$ is such that its derivative with respect to $M$ is zero, when considering the combined effect of heat transfer.

A more direct way to see this is from the Rayleigh relation for temperature:
$\frac{T}{T^*} = \frac{(1+\gamma M^{*2})(1+\frac{\gamma-1}{2} M^{*2})}{(1+\gamma M^2)(1+\frac{\gamma-1}{2} M^2)}$ where $M^*$ is the Mach number of the sonic state and $T^*$ is the temperature at the sonic state.
The maximum temperature occurs at $M=1$, where $T=T^*$, but this is incorrect because heat is being added.

The point of maximum temperature occurs when $d(h+V^2/2)/dq = 0$, which is at $M=1$.
The temperature at the choked condition ($M=1$), denoted as $T^*$, is not necessarily the maximum possible temperature. The maximum temperature is achieved at the point of maximum heat addition.

Let's reconsider the energy equation: $h + \frac{V^2}{2} = H_0$.
For a perfect gas, $h = c_p T$.
$c_p T + \frac{V^2}{2} = H_0$.
Maximum temperature occurs when $V$ is minimum for a given $H_0$.
In Rayleigh flow, as heat is added:
*   Subsonic ($M<1$): $V$ increases, $T$ increases.
*   Supersonic ($M>1$): $V$ decreases, $T$ increases.

The point of maximum temperature is indeed at $M=1$.
$T_{max} = T^* = \frac{H_0}{c_p + \frac{\gamma R}{2}} = \frac{H_0}{c_p (1 + \frac{\gamma-1}{2})} = \frac{H_0}{c_p (\frac{\gamma+1}{2})}$

**6.3. Location of Maximum Entropy:**

The entropy change for a perfect gas is given by:
$s_2 - s_1 = c_p \ln\left(\frac{T_2}{T_1}\right) - R \ln\left(\frac{P_2}{P_1}\right)$

Using the Rayleigh relations for $T$ and $P$:
$\frac{T_2}{T_1} = \frac{1 + \frac{\gamma-1}{2} M_1^2}{1 + \frac{\gamma-1}{2} M_2^2} \frac{1 + \gamma M_2^2}{1 + \gamma M_1^2}$
$\frac{P_2}{P_1} = \frac{1 + \gamma M_1^2}{1 + \gamma M_2^2}$

Substituting these into the entropy equation and differentiating with respect to Mach number, we find that **entropy is maximum at the sonic condition ($M=1$)**.

*   **Proof Sketch:** Let $T_1$ and $P_1$ be fixed. The change in entropy depends on the ratios $T_2/T_1$ and $P_2/P_1$. As heat is added, the flow can transition from subsonic to supersonic. The maximum entropy is reached at the point where the flow becomes sonic ($M=1$). Beyond this point, adding more heat leads to a decrease in entropy if the transition is from supersonic to sonic. However, in a constant area duct, the flow can only become choked at $M=1$. For a fixed initial state, the maximum achievable entropy is at $M=1$.

(Anderson, Chapter 11)

## 7. Thermal Choking

**Thermal choking** is a phenomenon in Rayleigh flow where the addition of heat causes the flow to reach sonic velocity ($M=1$) at a particular point in the duct. Once the flow reaches $M=1$, further heat addition would lead to a decrease in mass flow rate unless the duct area were changed, or it would require moving to a state with lower velocity and higher pressure (which is not possible with continued heat addition in the same manner).

**Conditions for Thermal Choking:**

*   Occurs in a constant area duct.
*   Involves heat addition.
*   The flow reaches $M=1$.

**Implications of Thermal Choking:**

1.  **Maximum Heat Addition:** The point of thermal choking corresponds to the maximum possible heat addition for a given initial state and constant duct area.
2.  **Maximum Temperature and Entropy:** Both maximum temperature and maximum entropy are reached at the choked condition ($M=1$).
3.  **Control Parameter:** If the heat addition rate is a controlled parameter, the flow can be forced to choke.
4.  **Reverse Effect:** If the flow is supersonic and heat is removed, it can decelerate and reach sonic velocity ($M=1$). This is sometimes referred to as "cold choking" or simply a change in flow regime due to heat removal.

**Example:** Consider a ramjet engine. Combustion within the engine can be modeled as heat addition in a constant area duct. If too much fuel is burned (excessive heat addition), the flow can choke, limiting the mass flow rate and potentially affecting engine performance.

*   **Important Point:** For subsonic flow, heat addition increases Mach number. For supersonic flow, heat addition decreases Mach number. Therefore, heat addition can transition a subsonic flow to sonic and then to supersonic, or a supersonic flow to sonic. The $M=1$ condition is a critical point.

## 8. Use of Gas Tables for Rayleigh Flow

Gas tables are pre-calculated tables of flow properties for isentropic flow, normal shocks, and sometimes for Rayleigh flow. They simplify the process of solving compressible flow problems by providing values for different Mach numbers without the need for iterative calculations.

For Rayleigh flow, gas tables typically provide ratios of properties relative to the sonic condition ($M=1$) where $M^*=1$. The properties at the sonic condition are denoted by an asterisk (*).

Commonly tabulated functions for Rayleigh flow include:

*   **$M$**: Mach number
*   **$T/T^*$**: Ratio of static temperature to static temperature at $M=1$
*   **$P/P^*$**: Ratio of static pressure to static pressure at $M=1$
*   **$\rho/\rho^*$**: Ratio of static density to static density at $M=1$
*   **$V/V^*$**: Ratio of velocity to velocity at $M=1$ (Note: $V^* = a^* = \sqrt{\gamma R T^*}$)
*   **$T_0/T_0^*$**: Ratio of stagnation temperature to stagnation temperature at $M=1$
*   **$P_0/P_0^*$**: Ratio of stagnation pressure to stagnation pressure at $M=1$
*   **$G/G^*$ or $(m\sqrt{RT_0})/ (m\sqrt{RT_0^*})$**: Related to mass flux, where $G = \rho V$. The term $(m\sqrt{RT_0})/(m\sqrt{RT_0^*})$ is often tabulated. $G/G^* = (\rho/\rho^*) (V/V^*)$.
*   **$q/c_p T_0^*$**: Ratio of heat added per unit mass to $c_p T_0^*$

**How to Use Gas Tables for Rayleigh Flow:**

1.  **Identify the known state:** You usually know the Mach number ($M_1$) and one other property (e.g., pressure $P_1$, temperature $T_1$, or stagnation pressure $P_{01}$).
2.  **Find corresponding values in the table:** Look up the row corresponding to $M_1$. Obtain values like $P_1/P^*$, $T_1/T^*$, $P_{01}/P_0^*$, etc.
3.  **Determine the choked state properties:** Using the known property, calculate the properties at the choked condition ($M=1$). For example, if $P_1$ is known, $P^* = P_1 / (P_1/P^*)$.
4.  **Determine the target state properties:** If you are given the amount of heat added, you can find the corresponding Mach number ($M_2$) by iterating on the gas table or using a function that relates heat addition to Mach number (e.g., $q/c_p T_0^*$). Once $M_2$ is found, you can use the table to find the ratios for $M_2$ (e.g., $P_2/P^*$, $T_2/T^*$).
5.  **Calculate actual properties at the target state:** Using the calculated properties at the choked condition, find the actual properties at the target state. For example, $P_2 = P^* \times (P_2/P^*)$.

**Example Problem (Conceptual):**

Air enters a constant area duct at $M_1 = 0.2$, $P_1 = 100$ kPa, $T_1 = 300$ K. Heat is added such that the exit Mach number is $M_2 = 0.8$. Find the exit pressure $P_2$ and temperature $T_2$.

*   **Step 1 & 2:** Look up $M_1 = 0.2$ in the Rayleigh flow gas table. Obtain $P_1/P^*$, $T_1/T^*$.
*   **Step 3:** Calculate $P^*$ and $T^*$ using $P_1$ and $T_1$.
*   **Step 4:** Look up $M_2 = 0.8$ in the gas table. Obtain $P_2/P^*$ and $T_2/T^*$.
*   **Step 5:** Calculate $P_2 = P^* \times (P_2/P^*)$ and $T_2 = T^* \times (T_2/T^*)$.

(Yahya, Chapter 8 provides detailed tables and examples.)

## 9. Practice Questions and Exercises

1.  **Conceptual Question:** For a subsonic flow in a constant area duct, what is the effect of heat addition on velocity, pressure, and density? What happens to these properties if the flow is supersonic and heat is added? (CO4, K3)
2.  **Rayleigh Relation Application:** Air enters a constant area duct at $M_1 = 0.3$ and $P_1 = 200$ kPa. Heat is added to the flow until the pressure at the exit is $P_2 = 150$ kPa. Assuming air is a perfect gas with $\gamma = 1.4$, find the exit Mach number $M_2$. (CO4, K4)
    *   **Hint:** Use the Rayleigh relation for pressure ratio: $\frac{P_2}{P_1} = \frac{1 + \gamma M_1^2}{1 + \gamma M_2^2}$.
3.  **Maximum Heat Addition:** In a Rayleigh flow, what condition signifies the maximum possible heat addition in a constant area duct? Explain why. (CO4, K3)
4.  **Gas Table Usage:** Air enters a constant area duct at $M_1 = 0.5$ with $T_0 = 600$ K. Heat is added such that $T_0$ at the exit is 550 K. What is the exit Mach number $M_2$? (Assume $\gamma = 1.4$). Use the gas table relation for $T_0/T_0^*$. (CO4, K4)
    *   **Hint:** You need to find $M_1$, then $T_{01}/T_0^*$. Calculate $T_0^* = T_{01} / (T_{01}/T_0^*)$. Then, find $M_2$ by iterating on the table such that $T_{02}/T_0^* = T_{02}/(T_0^*/(T_{01}/T_0^*)) = 550 K / T_0^*$.
5.  **Diagram Interpretation:** Sketch the Rayleigh line on an h-s diagram and a P-v diagram. Indicate the direction of heat addition and the location of the sonic point ($M=1$), maximum enthalpy, and maximum entropy. (CO1, K3)

---

### Answers to Practice Questions:

1.  **Conceptual Question:**
    *   **Subsonic flow with heat addition:** Velocity increases, pressure decreases, density decreases.
    *   **Supersonic flow with heat addition:** Velocity decreases, pressure increases, density increases.

2.  **Rayleigh Relation Application:**
    Given: $M_1 = 0.3$, $P_1 = 200$ kPa, $P_2 = 150$ kPa, $\gamma = 1.4$.
    Rayleigh relation for pressure: $\frac{P_2}{P_1} = \frac{1 + \gamma M_1^2}{1 + \gamma M_2^2}$
    $\frac{150}{200} = \frac{1 + 1.4 \times (0.3)^2}{1 + 1.4 \times M_2^2}$
    $0.75 = \frac{1 + 1.4 \times 0.09}{1 + 1.4 M_2^2}$
    $0.75 = \frac{1 + 0.126}{1 + 1.4 M_2^2}$
    $0.75 = \frac{1.126}{1 + 1.4 M_2^2}$
    $0.75 (1 + 1.4 M_2^2) = 1.126$
    $0.75 + 1.05 M_2^2 = 1.126$
    $1.05 M_2^2 = 1.126 - 0.75$
    $1.05 M_2^2 = 0.376$
    $M_2^2 = \frac{0.376}{1.05} \approx 0.358$
    $M_2 = \sqrt{0.358} \approx 0.598$
    **Answer:** $M_2 \approx 0.598$.

3.  **Maximum Heat Addition:**
    The maximum possible heat addition in a constant area duct for Rayleigh flow occurs when the flow becomes **choked**, i.e., the Mach number reaches unity ($M=1$). This is because at $M=1$, the flow is at sonic velocity, and any further heat addition would either require a decrease in mass flow rate or lead to a state that cannot be sustained in a constant area duct under these conditions. The choked condition corresponds to the point of maximum total enthalpy accumulation for a given initial state.

4.  **Gas Table Usage:**
    Given: $M_1 = 0.5$, $T_0 = 600$ K, $T_{0, \text{exit}} = 550$ K, $\gamma = 1.4$.
    From Rayleigh flow gas tables (for $\gamma=1.4$):
    At $M_1 = 0.5$: $T_{01}/T_0^* \approx 1.0976$
    Calculate $T_0^* = T_{01} / (T_{01}/T_0^*) = 600 \text{ K} / 1.0976 \approx 546.65$ K.
    Now we need to find $M_2$ such that $T_{02}/T_0^* = T_{0, \text{exit}} / T_0^* = 550 \text{ K} / 546.65 \text{ K} \approx 1.0061$.
    Looking up values in the gas table for $T_0/T_0^* \approx 1.0061$:
    This value is very close to the sonic condition ($M=1$), where $T_0/T_0^* = 1$.
    Let's recheck the calculation.

    Ah, the question implies that heat is added, causing $T_0$ to change. However, $T_0$ in Rayleigh flow changes only if there is work done or heat added. The problem states heat is added, and the exit $T_0$ is lower than the inlet $T_0$. This implies **heat is removed**.

    Let's assume the intent was: Air enters at $M_1 = 0.5$, $T_0 = 600$ K. Heat is *added* such that $T_0$ at the exit is 650 K.
    If $T_{0, \text{exit}} = 650$ K:
    $T_0^* = T_{01} / (T_{01}/T_0^*) = 600 \text{ K} / 1.0976 \approx 546.65$ K.
    Then $T_{02}/T_0^* = 650 \text{ K} / 546.65 \text{ K} \approx 1.189$.
    Looking up $T_0/T_0^* \approx 1.189$ in the gas table for Rayleigh flow:
    At $M=0.3$, $T_0/T_0^* \approx 1.176$.
    At $M=0.31$, $T_0/T_0^* \approx 1.186$.
    At $M=0.32$, $T_0/T_0^* \approx 1.196$.
    So, $M_2$ is between 0.31 and 0.32. Let's interpolate for $M_2 \approx 0.315$.

    **If the problem meant heat is removed to get $T_0 = 550$ K:**
    $T_0^* \approx 546.65$ K.
    $T_{02}/T_0^* = 550 \text{ K} / 546.65 \text{ K} \approx 1.0061$.
    From the table, $T_0/T_0^*$ decreases as Mach number decreases from 1 in supersonic flow and increases as Mach number increases from 1 in subsonic flow.
    To get $T_0/T_0^* = 1.0061$, this would correspond to a supersonic flow decelerating towards sonic speed.
    At $M=1.2$, $T_0/T_0^* \approx 1.0054$.
    At $M=1.1$, $T_0/T_0^* \approx 1.027$.
    So, $M_2$ would be slightly less than 1.2. Let's interpolate between $M=1.1$ and $M=1.2$.
    $M$ | $T_0/T_0^*$
    --|-----------
    1.1 | 1.027
    1.15| (interpolate)
    1.2 | 1.0054

    The value 1.0061 is closer to 1.0054. Let's check values slightly above 1.2.
    At $M=1.21$, $T_0/T_0^* \approx 1.003$.
    So, $M_2$ would be slightly less than 1.2.

    **Answer (Assuming heat added and $T_{0,exit}=650$K):** $M_2 \approx 0.315$.
    **Answer (Assuming heat removed and $T_{0,exit}=550$K):** $M_2 \approx 1.19$.

    *Note: Gas tables for Rayleigh flow are often specific to the source. The exact values might vary slightly.*

5.  **Diagram Interpretation:**

    **h-s Diagram:**
    *   Draw a curve representing states $(h,s)$.
    *   The curve starts from a subsonic region (e.g., $M < 1$).
    *   As heat is added, $h$ and $s$ increase, moving the state to the right and upwards.
    *   The curve reaches a peak at the sonic condition ($M=1$), representing maximum entropy and maximum enthalpy.
    *   Beyond the sonic point (if flow transitions to supersonic), further heat addition continues to increase $h$ and $s$, but the slope changes.
    *   Label the direction of heat addition (arrow pointing along the curve).
    *   Label the point $M=1$ as the location of maximum enthalpy and maximum entropy.

    **P-v Diagram:**
    *   Draw a P-v plane.
    *   The Rayleigh line is a curve.
    *   It starts in the subsonic region (e.g., higher P, lower v). Heat addition causes P to decrease and v to increase (as V increases and rho decreases). So, the curve moves down and to the right.
    *   It passes through the sonic condition ($M=1$), which is the point of maximum heat addition.
    *   In the supersonic region (lower P, higher v), heat addition causes P to increase and v to decrease (as V decreases and rho increases). So, the curve moves up and to the left.
    *   The curve typically forms a "banana" shape, with the peak of the "banana" (in terms of heat added) being at $M=1$.
    *   Label the direction of heat addition.

## 10. Summary and Key Takeaways

*   **Rayleigh flow** describes steady, one-dimensional flow with heat transfer in a constant area duct.
*   Key assumptions include steady flow, one-dimensionality, constant area, no work, perfect gas, and heat addition/removal.
*   The governing equations are the continuity, momentum, energy, and ideal gas equations.
*   The **Rayleigh relation** connects changes in flow properties with Mach number due to heat transfer.
*   On **h-s and P-v diagrams**, the locus of states reachable by heat addition forms the **Rayleigh line**.
*   **Thermal choking** occurs when heat addition leads to $M=1$.
*   The point of **maximum heat addition, maximum enthalpy, and maximum entropy** is at the choked condition ($M=1$).
*   **Gas tables** are essential tools for simplifying calculations in Rayleigh flow analysis by providing pre-computed property ratios relative to the sonic condition.

This module provides a strong foundation for understanding how heat transfer affects compressible flows, which is critical for analyzing gas turbine engines, ramjets, and heat exchangers.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
