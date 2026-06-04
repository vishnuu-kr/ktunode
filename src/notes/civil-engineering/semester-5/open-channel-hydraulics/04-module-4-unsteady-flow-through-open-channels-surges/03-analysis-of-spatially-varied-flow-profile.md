---
title: "Analysis of spatially varied flow profile"
subject: "OPEN CHANNEL HYDRAULICS"
module: "Module 4: Unsteady flow through open channels – Surges"
branch: "Civil Engineering"
semester: 5
topicId: "689f15cd56b5e963ba810eb9"
status: "completed"
scrapedAt: "2026-05-20T18:49:58.423Z"
---
# OPEN CHANNEL HYDRAULICS - Module 4: Unsteady Flow Through Open Channels - Surges

## Topic: Analysis of Spatially Varied Flow Profile

---

### Learning Outcomes:

*   **Understand the concept of Spatially Varied Flow (SVF):** Recognize that SVF is a type of non-uniform flow where the discharge changes along the length of the channel.
*   **Differentiate between types of SVF:** Categorize SVF based on the direction of discharge variation and the nature of the cross-section.
*   **Derive and apply the momentum equation for SVF:** Understand the fundamental principles governing SVF and be able to use them for analysis.
*   **Analyze different SVF profiles:** Study common SVF profiles like those with gradually varied inflow, uniform inflow with side inflow, and uniform inflow with side outflow.
*   **Solve problems related to SVF:** Apply the derived equations to practical engineering scenarios.

---

### 1. Understanding the Concept of Spatially Varied Flow (SVF)

#### 1.1. Definition of Spatially Varied Flow (SVF)

*   **Spatially Varied Flow (SVF):** A type of **non-uniform flow** in open channels where the **discharge ($Q$) changes continuously along the channel's longitudinal axis**. This is in contrast to gradually varied flow (GVF) where the discharge is constant, and rapidly varied flow (RVF) where the changes are abrupt but over a short distance.

#### 1.2. Causes of SVF

SVF occurs due to:

*   **Addition of flow:** Inflow from tributaries, side weirs, lateral spillways, or irrigation channels.
*   **Subtraction of flow:** Outflow through side outlets, side weirs, sluice gates, or porous boundaries.

#### 1.3. Key Characteristics of SVF

*   **Discharge varies along the channel:** $Q = Q(x)$, where $x$ is the longitudinal distance.
*   **Depth ($y$) and velocity ($V$) also vary along the channel:** $y = y(x)$ and $V = V(x)$.
*   **Specific energy ($E = y + V^2 / 2g$) may or may not vary continuously.**
*   **The momentum correction factor ($\beta$) is crucial** for accurate analysis, especially in channels with non-uniform velocity distribution.

---

### 2. Differentiating Between Types of SVF

SVF can be classified based on two primary criteria:

#### 2.1. Based on Direction of Discharge Variation

*   **Type 1: Discharge Decreasing along the flow:** Caused by outflow from the channel (e.g., side weirs, side outlets). $dQ/dx < 0$.
*   **Type 2: Discharge Increasing along the flow:** Caused by inflow to the channel (e.g., tributaries, lateral spillways). $dQ/dx > 0$.

#### 2.2. Based on Nature of Cross-Section

*   **Uniform Section:** Channel cross-sectional area, width, and slope are constant.
*   **Non-uniform Section:** Channel geometry (width, slope, area) changes along the length.

#### 2.3. Based on Rate of Change of Discharge

*   **Gradually Varied Spatially Varied Flow (GV-SVF):** The change in discharge is gradual along the length, allowing for the application of standard GVF analysis techniques with modifications for changing discharge.
*   **Rapidly Varied Spatially Varied Flow (RV-SVF):** The change in discharge is abrupt over a short reach, often involving phenomena like hydraulic jumps.

**Focus of this Topic:** The analysis will primarily focus on **Gradually Varied Spatially Varied Flow (GV-SVF)** where the depth and velocity change gradually.

---

### 3. Deriving and Applying the Momentum Equation for SVF

The fundamental equation governing SVF is derived from the **conservation of momentum**.

#### 3.1. Momentum Equation Derivation (for a control volume)

Consider a control volume of length $\Delta x$ along the channel. Let the flow at section 1 (at $x$) be $Q$, with depth $y$, area $A$, and velocity $V$. At section 2 (at $x + \Delta x$), the flow is $Q + \Delta Q$, with depth $y + \Delta y$, area $A + \Delta A$, and velocity $V + \Delta V$.

**Assumptions:**

*   Flow is gradually varied.
*   Channel bottom is prismatic (constant slope $S_0$).
*   Cross-sectional area $A$ and flow width $T$ are functions of depth $y$.
*   Velocity distribution is non-uniform, requiring a momentum correction factor $\beta$.
*   Friction losses are represented by the Darcy-Weisbach equation or Chezy/Manning's formula.

**Forces acting on the control volume:**

1.  **Momentum Force in x-direction:**
    *   Inflow momentum flux: $\rho Q V = \rho A V^2$.
    *   Outflow momentum flux: $\rho (Q + \Delta Q)(V + \Delta V) = \rho (AV)(V + \Delta V)$.
    *   Net momentum force: $\rho (AV)(V + \Delta V) - \rho (AV)V = \rho A V \Delta V$.
    *   Alternatively, using $\beta$: $\beta_2 \frac{Q_2^2}{gA_2} - \beta_1 \frac{Q_1^2}{gA_1}$.
    *   For a small $\Delta x$, $Q_1 = Q$, $A_1 = A$, $Q_2 = Q + \Delta Q$, $A_2 = A + \Delta A$.
    *   Net momentum force = $\beta \frac{d}{dx} \left(\frac{Q^2}{gA}\right) \Delta x$.

2.  **Force due to Pressure:**
    *   Upstream pressure force: $P_1 = \rho g \bar{y}_1 A_1 = \rho g \beta_1 A_1 \bar{y}_1$ (where $\bar{y}_1$ is the centroid of area $A_1$). For simplicity in derivation, we can use hydrostatic pressure distribution: $\beta_1 \frac{Q_1^2}{gA_1}$ is more accurately represented as the momentum flux, not pressure. The hydrostatic force is integrated over the area.
    *   The force on the upstream face is $\int_{0}^{y} \rho g (y - \eta) T(\eta) d\eta$, where $T(\eta)$ is the width at height $\eta$. This is equal to $\rho g \bar{y} A = \rho g (\beta A) $. So, the force at section 1 is $\beta_1 \frac{Q_1^2}{gA_1}$ effectively.
    *   Net pressure force (considering component along flow): $(\beta_2 \frac{Q_2^2}{gA_2}) - (\beta_1 \frac{Q_1^2}{gA_1}) \approx \frac{d}{dx} \left( \beta \frac{Q^2}{gA} \right) \Delta x$. This represents the change in momentum flux.

3.  **Force due to Gravity:**
    *   Component of weight acting along the channel: $-W \sin \theta$.
    *   $W = \rho g A \Delta x$ (for a unit width control volume if prismatic).
    *   $W \sin \theta \approx W S_0 = \rho g A S_0 \Delta x$.
    *   Force due to gravity = $-\rho g A S_0 \Delta x$.

4.  **Force due to Friction (Drag Force):**
    *   Friction force acts opposing the flow.
    *   Using Manning's formula: $V = \frac{1.486}{n} R^{2/3} S_f^{1/2}$.
    *   Shear stress $\tau_0 = \rho g R S_f$, where $S_f$ is the friction slope.
    *   Force of friction = $-\tau_0 P \Delta x = -\rho g R S_f P \Delta x$, where $P$ is the wetted perimeter.
    *   For a control volume, the friction force is $F_f = -\tau_0 P \Delta x$.
    *   This can be expressed as a force per unit volume: $-\tau_0 \frac{P}{A} \Delta x = -\rho g R S_f \frac{P}{A} \Delta x$.
    *   Alternatively, the energy loss per unit length is $S_f$, so the force opposing motion due to friction is $F_f = \rho g A S_f$.

5.  **Force due to Lateral Discharge (if any):**
    *   Let $q$ be the lateral discharge per unit length. $q = \frac{dQ}{dx}$.
    *   If flow is added laterally ($q>0$), there's a force component from the incoming water.
    *   If flow is subtracted laterally ($q<0$), this is an outflow.

**Applying the Momentum Principle:**

Sum of forces in the x-direction = Rate of change of momentum in the x-direction.

Considering the forces and momentum flux changes over $\Delta x$:

$$ \left(\beta \frac{Q^2}{gA}\right)_1 - \left(\beta \frac{Q^2}{gA}\right)_2 + (\text{Pressure force})_1 - (\text{Pressure force})_2 + (\text{Gravity force}) + (\text{Friction force}) + (\text{Lateral inflow/outflow force}) = 0 $$

A more refined derivation using the control volume integral form of the momentum equation leads to:

$$ \frac{d}{dx} \left( \beta \frac{Q^2}{gA} \right) + \frac{d}{dx} \left( \int_{0}^{y} p dA \right) - \rho g A S_0 \Delta x + \tau_0 P \Delta x + \left[ \frac{d}{dx} \left( \frac{Q^2}{gA} \right) \right]_{lateral} = 0 $$

For gradually varied flow, the net external forces are balanced by the change in momentum flux.

A simplified form of the momentum equation for SVF is:

$$ \frac{d}{dx} \left( \frac{Q^2}{gA} \right) + \frac{dE}{dx} = S_0 - S_f $$

Where $E = y + V^2/2g$ is the specific energy.

For SVF, where $Q = Q(x)$, we need to consider the lateral change in momentum.

The most commonly used form of the momentum equation for SVF, often referred to as the **Specific Force Equation** or the **Momentum Equation for SVF**, is derived by considering the forces acting on a differential control volume and the momentum flux.

$$ \frac{d}{dx} \left( \frac{Q^2}{gA} \right) + \frac{d}{dx}(F_p) = S_0 - S_f $$

Where $F_p = \int_0^y \rho g (y-\eta) T(\eta) d\eta$ is the hydrostatic force component.

A more practical form, developed by Y.N. Suen and others, relates the change in specific force $M = \frac{Q^2}{gA} + \bar{y}A$ (where $\bar{y}$ is the depth of the centroid of the cross-section) to the forces.

However, a more straightforward approach for analysis is often to consider the momentum equation in terms of forces acting on a slice.

Consider a control volume from $x$ to $x + \Delta x$.
The forces are:
1.  Net momentum flux change: $\left(\beta \frac{Q^2}{gA}\right)_{x+\Delta x} - \left(\beta \frac{Q^2}{gA}\right)_x$
2.  Net hydrostatic force: $F_{p,x} - F_{p,x+\Delta x}$
3.  Component of weight along the channel: $-\rho g A S_0 \Delta x$
4.  Friction force: $-\rho g A S_f \Delta x$
5.  Lateral momentum flux change: If lateral discharge $q$ is per unit length, then the change in momentum flux due to this lateral inflow at the boundary must be considered.

A simplified momentum equation for SVF considering uniform width $T$ and constant $\beta$:

$$ \frac{d}{dx} \left( \beta \frac{Q^2}{gA} \right) + \frac{d}{dx} \left( \frac{A y_{c}}{1} \right) = S_0 - S_f $$

Where $y_c$ is the depth of the centroid. For a rectangular channel, $y_c = y/2$, so $A y_c = (T y) (y/2) = T y^2/2$.
$\frac{d}{dx} \left( \frac{A y_c}{1} \right) = \frac{d}{dx} \left( \frac{T y^2}{2} \right) = \frac{T}{2} (2y \frac{dy}{dx}) = T y \frac{dy}{dx}$.

So, for a rectangular channel:
$$ \frac{d}{dx} \left( \beta \frac{Q^2}{g(Ty)} \right) + T y \frac{dy}{dx} = S_0 - S_f $$

**The most useful form for SVF analysis relates the slope of the energy line ($S_e = S_f$ in steady flow) to the slope of the water surface ($S_w = dy/dx$) and the slope of the channel bed ($S_0$).**

The general energy equation for SVF is:
$$ \frac{dE}{dx} = S_0 - S_f + \frac{1}{gA} \frac{d}{dx} \left(\frac{Q^2}{\beta}\right) $$

Where $E = y + \frac{V^2}{2g} = y + \frac{Q^2}{2gA^2}$.
$\frac{dE}{dx} = \frac{dy}{dx} + \frac{1}{2g} \frac{d}{dx} \left(\frac{Q^2}{A^2}\right)$

For rectangular channels, $A = Ty$, $V = Q/Ty$.
$E = y + \frac{Q^2}{2g(Ty)^2} = y + \frac{Q^2}{2gT^2y^2}$

$\frac{dE}{dx} = \frac{dy}{dx} + \frac{Q^2}{2gT^2} \frac{d}{dx}(y^{-2})$
$\frac{dE}{dx} = \frac{dy}{dx} + \frac{Q^2}{2gT^2} (-2y^{-3} \frac{dy}{dx})$
$\frac{dE}{dx} = \frac{dy}{dx} - \frac{Q^2}{gT^2y^3} \frac{dy}{dx} = \frac{dy}{dx} \left(1 - \frac{Q^2}{gA^2} \frac{A}{T} \frac{1}{y} \right) = \frac{dy}{dx} \left(1 - \frac{Q^2 T}{g T^2 y^2} \frac{1}{y} \right)$
$\frac{dE}{dx} = \frac{dy}{dx} \left(1 - \frac{Q^2}{g A^2} \right)$ (Mistake here, this is not $dE/dx$ for GVF).

Let's use the fundamental force balance directly.
The momentum equation for steady flow in an open channel states:
$$ \frac{d}{dx} \left( \beta \frac{Q^2}{gA} \right) + \frac{d}{dx} (\text{hydrostatic force}) = S_0 - S_f $$

For SVF, the term $\frac{d}{dx} \left( \beta \frac{Q^2}{gA} \right)$ captures the change in momentum flux due to both varying $Q$ and varying $A$.

A very useful formulation for SVF is based on the **variation of specific force ($M$)**:
$M = \frac{Q^2}{gA} + \bar{y}A$, where $\bar{y}$ is the depth to the centroid.

The momentum equation can be written as:
$$ \frac{dM}{dx} = S_0 - S_f + \text{forces due to lateral inflow/outflow} $$

For a rectangular channel with width $T$, $A = Ty$, $\bar{y} = y/2$.
$M = \frac{Q^2}{gTy} + \frac{y}{2} (Ty) = \frac{Q^2}{gTy} + \frac{Ty^2}{2}$

$$ \frac{dM}{dx} = \frac{d}{dx} \left(\frac{Q^2}{gTy}\right) + \frac{d}{dx} \left(\frac{Ty^2}{2}\right) $$
$$ \frac{dM}{dx} = \frac{Q^2}{gT} \frac{d}{dx}(y^{-1}) + \frac{T}{2} (2y \frac{dy}{dx}) $$
$$ \frac{dM}{dx} = \frac{Q^2}{gT} (-y^{-2} \frac{dy}{dx}) + T y \frac{dy}{dx} $$
$$ \frac{dM}{dx} = \frac{dy}{dx} \left( Ty - \frac{Q^2}{gTy^2} \right) = \frac{dy}{dx} \left( Ty - \frac{Q^2}{gA^2} \frac{A}{T} \right) $$
$$ \frac{dM}{dx} = \frac{dy}{dx} \left( Ty - \frac{Q^2}{gA^2} \frac{A}{T} \right) $$

This still seems complicated. Let's use the standard derivation of the GVF equation and adapt it for SVF.

The general GVF equation is:
$$ \frac{dy}{dx} = \frac{S_0 - S_f}{1 - \frac{Q^2 T}{gA^3}} = \frac{S_0 - S_f}{1 - F_r^2} $$
Where $F_r = V/\sqrt{gD}$ and $D$ is the hydraulic depth ($A/T$).

For SVF, we must account for the change in $Q$ along $x$.
Let $q$ be the lateral inflow per unit length ($q = dQ/dx$).
The momentum equation needs to incorporate the momentum of the lateral inflow.

Consider a control volume from $x$ to $x+\Delta x$.
The rate of momentum entering the control volume is $\rho \frac{Q^2}{A} + \rho q V_{lateral}$.
The rate of momentum leaving is $\rho \frac{(Q+\Delta Q)^2}{A+\Delta A}$.
The net force is the sum of pressure forces, gravity forces, and friction forces.

A simplified equation often presented for SVF, particularly for the case of uniform inflow with side inflow or outflow, is derived from the momentum equation applied to a differential control volume.

The momentum equation for steady SVF can be written as:

$$ \frac{d}{dx} \left( \frac{Q^2}{gA} \right) + \frac{d}{dx} (F_p) = S_0 - S_f $$

where $F_p = \int_0^y \rho g (y-\eta) T(\eta) d\eta$ is the hydrostatic force component.

For a rectangular channel of width $T$: $A = Ty$, $F_p = \frac{1}{2} \rho g T y^2$.
$$ \frac{d}{dx} \left( \frac{Q^2}{gTy} \right) + \frac{d}{dx} \left( \frac{1}{2} \rho g T y^2 \right) = S_0 - S_f $$
$$ \frac{Q^2}{gT} \frac{d}{dx}(y^{-1}) + \frac{1}{2} \rho g T (2y \frac{dy}{dx}) = S_0 - S_f $$
$$ \frac{Q^2}{gT} (-y^{-2} \frac{dy}{dx}) + \rho g T y \frac{dy}{dx} = S_0 - S_f $$
$$ \frac{dy}{dx} \left( \rho g T y - \frac{Q^2}{gTy^2} \right) = S_0 - S_f $$
$$ \frac{dy}{dx} \left( \rho g y - \frac{Q^2}{gA^2} \right) T = S_0 - S_f $$
$$ \frac{dy}{dx} \left( \frac{A}{T} - \frac{Q^2}{gA^2} \right) = S_0 - S_f $$
$$ \frac{dy}{dx} \left( D - \frac{Q^2}{gA^2} \right) = S_0 - S_f $$
$$ \frac{dy}{dx} = \frac{S_0 - S_f}{D - \frac{Q^2}{gA^2}} = \frac{S_0 - S_f}{D(1 - \frac{Q^2}{gA^2 D})} = \frac{S_0 - S_f}{D(1 - F_r^2)} $$

This looks like the GVF equation, but it is derived using the momentum principle which is correct for SVF. However, this equation doesn't explicitly show the effect of $dQ/dx$.

**The crucial part is how the $dQ/dx$ term affects the momentum equation.**

The correct momentum equation for steady spatially varied flow is:

$$ \frac{d}{dx} \left( \frac{Q^2}{gA} \right) + \frac{d}{dx} (F_p) - (S_0 - S_f)A = 0 \quad (\text{for flow without lateral change}) $$

When there is lateral discharge $q$ per unit length (positive for inflow, negative for outflow):
The change in momentum flux due to lateral flow must be considered.

For a control volume $\Delta x$, the lateral inflow is $q \Delta x$.
The momentum of this lateral inflow entering the control volume depends on its velocity.

**General Momentum Equation for SVF:**

$$ \frac{d}{dx} \left( \frac{Q^2}{gA} \right) + \frac{d}{dx} (F_p) - A(S_0 - S_f) + \rho q \left( V_{lat} - V \right) = 0 $$

Where $V_{lat}$ is the velocity of the lateral inflow and $V$ is the main channel velocity.
Often, $V_{lat}$ is assumed to be negligible or aligned with the main flow.
If $q$ is the lateral discharge per unit length, the momentum flux added is $\rho q V_{lat}$.

A common form, particularly for rectangular channels where $A=Ty$, $F_p = \frac{1}{2} \rho g T y^2$:

$$ \frac{d}{dx} \left( \frac{Q^2}{gTy} \right) + \frac{d}{dx} \left( \frac{1}{2} \rho g T y^2 \right) - T y (S_0 - S_f) + \rho q (V_{lat} - V) = 0 $$
$$ \frac{dy}{dx} \left( Ty - \frac{Q^2}{gTy^2} \right) - T y (S_0 - S_f) + \rho q (V_{lat} - V) = 0 $$
$$ \frac{dy}{dx} \left( D - \frac{Q^2}{gA^2} \right) = S_0 - S_f - \frac{\rho q (V_{lat} - V)}{A} $$
$$ \frac{dy}{dx} = \frac{S_0 - S_f - \frac{\rho q (V_{lat} - V)}{A}}{D - \frac{Q^2}{gA^2}} $$
$$ \frac{dy}{dx} = \frac{S_0 - S_f - \frac{q (V_{lat} - V)}{yV}}{D(1 - F_r^2)} $$

This form explicitly includes the lateral discharge term.

#### 3.2. Application to Different SVF Scenarios

We use numerical integration (e.g., finite difference method) for solving these equations as they are differential equations.

**Common cases:**

*   **Case 1: Gradually varied inflow at the upstream end (GVF profile with changing $Q$)**
    *   Here $q=0$ along the reach, but $Q$ varies with $x$. The equation becomes the GVF equation with $Q(x)$.

*   **Case 2: Uniform inflow with side inflow (Type 2 SVF)**
    *   $Q = Q_0 + \int_0^x q(x') dx'$.
    *   If $q$ is constant, $Q = Q_0 + qx$.
    *   The equation above with $q > 0$ and $V_{lat}$ needs to be solved.

*   **Case 3: Uniform inflow with side outflow (Type 1 SVF)**
    *   $Q = Q_0 - \int_0^x q(x') dx'$.
    *   If $q$ is constant, $Q = Q_0 - qx$.
    *   The equation above with $q < 0$ needs to be solved.

**Key Simplification for Analysis:**
The **Momentum Function** and **Specific Force Function** are crucial.
Specific Force $M = \frac{Q^2}{gA} + \bar{y}A$.
$dM/dx = S_0 - S_f - \text{momentum of lateral inflow}$.

For a rectangular channel, $M = \frac{Q^2}{gTy} + \frac{Ty^2}{2}$.
The rate of change of $M$ with respect to $x$ depends on $Q$, $y$, $T$, and $S_0$, $S_f$.

---

### 4. Analyzing Different SVF Profiles

The analysis of SVF profiles involves determining how the water surface and flow depth change along the channel due to lateral inflows or outflows.

#### 4.1. Case 1: Gradually Varied Flow with Varying Discharge (No Lateral Inflow/Outflow)

*   **Scenario:** A channel section where the discharge is not constant but changes gradually due to a change in the upstream boundary condition or a very long channel segment with distributed losses.
*   **Equation:** The standard GVF equation is used, but $Q$ is a function of $x$.
    $$ \frac{dy}{dx} = \frac{S_0 - S_f}{1 - F_r^2} $$
    where $F_r = V/\sqrt{gD}$, and $V = Q(x)/A$.

#### 4.2. Case 2: Uniform Inflow with Side Inflow (Type 2 SVF)

*   **Scenario:** A channel with a constant initial discharge $Q_0$ and a uniform lateral inflow $q$ per unit length along a reach. Examples:
    *   Tributaries contributing uniformly along a river reach.
    *   Lateral spillways or irrigation channels discharging at a constant rate per unit length.
*   **Discharge:** $Q(x) = Q_0 + qx$.
*   **Profile Analysis:** We need to solve the SVF momentum equation numerically. The water surface will generally rise as flow increases downstream.
    *   The Froude number $F_r = V/\sqrt{gD}$ will increase downstream if $q$ is positive.
    *   The critical depth $y_c$ (where $F_r=1$) will occur where $V = \sqrt{gD}$. As $Q$ increases, $V$ increases, so $y_c$ might decrease if $A$ doesn't increase proportionally.
*   **Example:** A rectangular channel of width $T$, bottom slope $S_0$, Manning's $n$. Initial discharge $Q_0$ at $x=0$. Uniform lateral inflow $q$ per unit length.
    We need to solve:
    $$ \frac{dy}{dx} = \frac{S_0 - S_f(y, Q(x))}{1 - F_r(y, Q(x))^2} $$
    where $Q(x) = Q_0 + qx$, $V(x) = Q(x)/(Ty)$, $S_f(y, Q(x)) = \frac{n^2 V(x)^2}{2.208 R(y)^{4/3}}$ (for SI units), $F_r = V/\sqrt{gy}$.

#### 4.3. Case 3: Uniform Inflow with Side Outflow (Type 1 SVF)

*   **Scenario:** A channel with an initial discharge $Q_0$ and a uniform lateral outflow $q$ per unit length along a reach. Examples:
    *   Side weirs discharging water from a channel.
    *   Percolation losses from a canal.
*   **Discharge:** $Q(x) = Q_0 - qx$. (Note $q$ is defined as positive outflow here).
*   **Profile Analysis:** The discharge decreases downstream.
    *   The velocity $V = Q(x)/(Ty)$ decreases downstream if $T$ is constant.
    *   The Froude number $F_r$ will likely decrease downstream.
    *   The water surface typically rises downstream as flow is subtracted (unless the initial flow is supercritical and a hydraulic jump occurs).
*   **Example:** A rectangular channel of width $T$, bottom slope $S_0$, Manning's $n$. Initial discharge $Q_0$ at $x=0$. Uniform lateral outflow $q$ per unit length.
    We need to solve:
    $$ \frac{dy}{dx} = \frac{S_0 - S_f(y, Q(x))}{1 - F_r(y, Q(x))^2} $$
    where $Q(x) = Q_0 - qx$, $V(x) = Q(x)/(Ty)$, $S_f(y, Q(x)) = \frac{n^2 V(x)^2}{2.208 R(y)^{4/3}}$, $F_r = V/\sqrt{gy}$.

#### 4.4. Types of SVF Profiles

Based on the combination of Froude number and the effect of lateral discharge, different profiles can emerge:

*   **Type 2 SVF Profiles (Lateral Inflow):**
    *   **Mild Slope (Subcritical Flow):** If initial flow is subcritical ($y > y_c$), and lateral inflow increases discharge, the Froude number increases. The water surface generally rises. If the flow becomes supercritical, the profile can transition.
    *   **Steep Slope (Supercritical Flow):** If initial flow is supercritical ($y < y_c$), lateral inflow further increases discharge and velocity, maintaining supercritical flow. The water surface generally falls.
    *   **Critical Slope:** If initial flow is near critical, lateral inflow can lead to complex profile changes, potentially including a transition.

*   **Type 1 SVF Profiles (Lateral Outflow):**
    *   **Mild Slope (Subcritical Flow):** If initial flow is subcritical ($y > y_c$), and lateral outflow decreases discharge, the velocity and Froude number decrease. The water surface generally rises as the velocity decreases and the flow tends towards critical depth.
    *   **Steep Slope (Supercritical Flow):** If initial flow is supercritical ($y < y_c$), lateral outflow further reduces discharge and velocity. The water surface generally falls, moving away from critical depth.
    *   **Transition:** In some cases, particularly with lateral outflow from supercritical flow, a hydraulic jump may form.

#### 4.5. Analysis Methods

*   **Analytical Solutions:** Limited to very specific and simplified cases (e.g., uniform $q$, rectangular channels).
*   **Numerical Integration:** The most common method. The SVF momentum equation is solved numerically using techniques like:
    *   Finite Difference Method (FDM)
    *   Finite Element Method (FEM)
    *   Finite Volume Method (FVM)
    *   Standard Step Method (adapted for varying $Q$)

---

### 5. Solving Problems Related to SVF

The primary challenge in solving SVF problems is the need for numerical integration.

#### 5.1. Steps for Solving SVF Problems

1.  **Identify the scenario:** Determine if it's inflow or outflow, uniform or non-uniform lateral discharge, and the channel geometry.
2.  **Define the reach:** Specify the start and end points of the reach for analysis.
3.  **Establish initial conditions:** At the start of the reach, define the discharge ($Q_0$) and water depth ($y_0$).
4.  **Formulate the governing equation:** Write down the appropriate SVF momentum equation. For rectangular channels, the simplified form is often used.
5.  **Express $Q(x)$ and $S_f$:** Define $Q(x)$ based on the lateral discharge and $S_f$ as a function of $y$ and $Q$ (e.g., using Manning's or Chezy's formula).
6.  **Numerical Integration:**
    *   Divide the reach into small segments of length $\Delta x$.
    *   At each step $i$, use the values of $Q_i$ and $y_i$ to calculate $dy/dx$ using the SVF equation.
    *   Estimate the depth at the next step ($y_{i+1}$) using a numerical method (e.g., Euler's method, Modified Euler's method, Runge-Kutta).
        *   **Euler's Method (Simple, less accurate):** $y_{i+1} = y_i + (dy/dx)_i \Delta x$
        *   **Modified Euler's Method (More accurate):**
            *   Predict $y_{i+1}^* = y_i + (dy/dx)_i \Delta x$
            *   Calculate $(dy/dx)_{i+1}^*$ using $y_{i+1}^*$.
            *   Correct $y_{i+1} = y_i + \frac{1}{2} [(dy/dx)_i + (dy/dx)_{i+1}^*] \Delta x$.
    *   Update $Q_{i+1} = Q(x_{i+1})$.
7.  **Check for critical depth and hydraulic jumps:** If the computed slope $dy/dx$ becomes very large (approaching infinity as $F_r \to 1$), or if there's a sudden change in flow regime, it might indicate a critical section or a hydraulic jump.

#### 5.2. Example Problem: Analysis of Side Weir Profile

**Problem Statement:**
A rectangular channel with width $T = 5 \, \text{m}$, bottom slope $S_0 = 0.001$, and Manning's roughness coefficient $n = 0.025$. The channel carries an initial discharge of $Q_0 = 15 \, \text{m}^3/\text{s}$ at section $x=0$. A side weir is constructed along the channel, causing a uniform lateral outflow of $q = 1 \, \text{m}^3/\text{s}$ per meter length. Determine the water surface profile along the channel for the first 100 meters.

**Solution Approach:**

1.  **Channel Properties:** $T=5 \, \text{m}$, $S_0 = 0.001$, $n=0.025$.
2.  **Initial Condition:** $Q_0 = 15 \, \text{m}^3/\text{s}$ at $x=0$. Assume an initial depth $y_0$ is known or calculated (e.g., by assuming normal depth or a specific upstream control). Let's assume $y_0 = 1.5 \, \text{m}$ for illustration.
3.  **Lateral Outflow:** $q = 1 \, \text{m}^3/\text{s}$ per meter. This means $Q(x) = Q_0 - qx$.
4.  **Governing Equation (Rectangular Channel):**
    $$ \frac{dy}{dx} = \frac{S_0 - S_f}{1 - F_r^2} $$
    where $Q(x) = 15 - 1x$, $V(x) = Q(x) / (5y)$, $R(y) = y$ (for wide channel or assuming hydraulic radius is approximately depth $y$ for simplicity in calculation, more accurately $R = A/P = 5y / (5+2y)$), $S_f = \frac{n^2 V(x)^2}{2.208 R(y)^{4/3}}$.
    $F_r^2 = \frac{V(x)^2}{gy} = \frac{Q(x)^2}{g(5y)^2 y} = \frac{Q(x)^2}{25 g y^3}$.

5.  **Numerical Integration (using Modified Euler Method):**

    Let's start with $x=0$, $Q=15$, $y=1.5$.
    *   $V = 15 / (5 \times 1.5) = 2 \, \text{m/s}$.
    *   $R = (5 \times 1.5) / (5 + 2 \times 1.5) = 7.5 / 8 = 0.9375 \, \text{m}$.
    *   $S_f = \frac{0.025^2 \times 2^2}{2.208 \times (0.9375)^{4/3}} = \frac{0.000625 \times 4}{2.208 \times 0.876} \approx 0.00130$.
    *   $F_r^2 = \frac{2^2}{9.81 \times 1.5} = \frac{4}{14.715} \approx 0.2718$.
    *   $\frac{dy}{dx} = \frac{0.001 - 0.00130}{1 - 0.2718} = \frac{-0.00030}{0.7282} \approx -0.000412$.

    Let $\Delta x = 10 \, \text{m}$.

    **Step 1: $x=0$ to $x=10$**
    *   $(dy/dx)_0 \approx -0.000412$.
    *   Predict $y_{10}^* = y_0 + (dy/dx)_0 \Delta x = 1.5 + (-0.000412) \times 10 = 1.49588 \, \text{m}$.
    *   $Q_{10} = 15 - 1 \times 10 = 5 \, \text{m}^3/\text{s}$.
    *   Calculate $(dy/dx)_{10}^*$ using $y_{10}^* = 1.49588$ and $Q_{10} = 5$.
        *   $V_{10}^* = 5 / (5 \times 1.49588) \approx 0.6686 \, \text{m/s}$.
        *   $R_{10}^* = (5 \times 1.49588) / (5 + 2 \times 1.49588) = 7.4794 / 7.99176 \approx 0.9358 \, \text{m}$.
        *   $S_{f,10}^* = \frac{0.025^2 \times (0.6686)^2}{2.208 \times (0.9358)^{4/3}} \approx \frac{0.000625 \times 0.447}{2.208 \times 0.873} \approx 0.000155$.
        *   $F_{r,10}^{*2} = \frac{(0.6686)^2}{9.81 \times 1.49588} = \frac{0.447}{14.675} \approx 0.0305$.
        *   $(dy/dx)_{10}^* = \frac{0.001 - 0.000155}{1 - 0.0305} = \frac{0.000845}{0.9695} \approx 0.000872$.
    *   Correct $y_{10} = y_0 + \frac{1}{2} [(dy/dx)_0 + (dy/dx)_{10}^*] \Delta x = 1.5 + \frac{1}{2} [-0.000412 + 0.000872] \times 10 = 1.5 + 0.00023 \times 10 = 1.5023 \, \text{m}$.

    **Step 2: $x=10$ to $x=20$**
    *   Now use $y_{10} = 1.5023 \, \text{m}$ and $Q_{10} = 5 \, \text{m}^3/\text{s}$.
    *   Calculate $(dy/dx)_{10}$ using $y_{10}$ and $Q_{10}$.
        *   $V_{10} = 5 / (5 \times 1.5023) \approx 0.6656 \, \text{m/s}$.
        *   $R_{10} = (5 \times 1.5023) / (5 + 2 \times 1.5023) = 7.5115 / 8.0046 \approx 0.9384 \, \text{m}$.
        *   $S_{f,10} = \frac{0.025^2 \times (0.6656)^2}{2.208 \times (0.9384)^{4/3}} \approx \frac{0.000625 \times 0.443}{2.208 \times 0.877} \approx 0.000153$.
        *   $F_{r,10}^2 = \frac{(0.6656)^2}{9.81 \times 1.5023} = \frac{0.443}{14.738} \approx 0.0300$.
        *   $(dy/dx)_{10} = \frac{0.001 - 0.000153}{1 - 0.0300} = \frac{0.000847}{0.9700} \approx 0.000873$.

    *   Predict $y_{20}^* = y_{10} + (dy/dx)_{10} \Delta x = 1.5023 + (0.000873) \times 10 = 1.51103 \, \text{m}$.
    *   $Q_{20} = 15 - 1 \times 20 = -5 \, \text{m}^3/\text{s}$. (This indicates the assumed outflow rate is too high to maintain positive flow for 20m. Let's re-evaluate the problem setup or the $\Delta x$).

    **Correction:** The problem statement should have a lateral outflow rate such that $Q$ remains positive over the reach of interest, or the analysis should stop when $Q$ becomes zero or negative. Let's assume a lower outflow rate for a more meaningful example.

    **Revised Problem Statement:**
    A rectangular channel with width $T = 5 \, \text{m}$, bottom slope $S_0 = 0.001$, and Manning's roughness coefficient $n = 0.025$. The channel carries an initial discharge of $Q_0 = 15 \, \text{m}^3/\text{s}$ at section $x=0$. A side weir is constructed along the channel, causing a uniform lateral outflow of $q = 0.1 \, \text{m}^3/\text{s}$ per meter length. Determine the water surface profile along the channel for the first 100 meters.

    **Revised Solution Approach:**
    *   $Q(x) = 15 - 0.1x$.
    *   At $x=100$, $Q(100) = 15 - 0.1 \times 100 = 5 \, \text{m}^3/\text{s}$. This is valid.

    **Step 1 (Same as before): $x=0$ to $x=10$**
    *   $Q_0 = 15$, $y_0 = 1.5$.
    *   $(dy/dx)_0 \approx -0.000412$.
    *   $y_{10}^* = 1.49588 \, \text{m}$.
    *   $Q_{10} = 15 - 0.1 \times 10 = 14 \, \text{m}^3/\text{s}$.
    *   Calculate $(dy/dx)_{10}^*$ using $y_{10}^* = 1.49588$ and $Q_{10} = 14$.
        *   $V_{10}^* = 14 / (5 \times 1.49588) \approx 1.873 \, \text{m/s}$.
        *   $R_{10}^* = (5 \times 1.49588) / (5 + 2 \times 1.49588) \approx 7.4794 / 7.99176 \approx 0.9358 \, \text{m}$.
        *   $S_{f,10}^* = \frac{0.025^2 \times (1.873)^2}{2.208 \times (0.9358)^{4/3}} \approx \frac{0.000625 \times 3.508}{2.208 \times 0.873} \approx 0.00118$.
        *   $F_{r,10}^{*2} = \frac{(1.873)^2}{9.81 \times 1.49588} = \frac{3.508}{14.675} \approx 0.239$.
        *   $(dy/dx)_{10}^* = \frac{0.001 - 0.00118}{1 - 0.239} = \frac{-0.00018}{0.761} \approx -0.000236$.
    *   Correct $y_{10} = y_0 + \frac{1}{2} [(dy/dx)_0 + (dy/dx)_{10}^*] \Delta x = 1.5 + \frac{1}{2} [-0.000412 + (-0.000236)] \times 10 = 1.5 + \frac{1}{2} (-0.000648) \times 10 = 1.5 - 0.00324 = 1.49676 \, \text{m}$.

    **Step 2: $x=10$ to $x=20$**
    *   Now use $y_{10} = 1.49676 \, \text{m}$ and $Q_{10} = 14 \, \text{m}^3/\text{s}$.
    *   Calculate $(dy/dx)_{10}$ using $y_{10}$ and $Q_{10}$.
        *   $V_{10} = 14 / (5 \times 1.49676) \approx 1.871 \, \text{m/s}$.
        *   $R_{10} = (5 \times 1.49676) / (5 + 2 \times 1.49676) \approx 7.4838 / 7.99352 \approx 0.9363 \, \text{m}$.
        *   $S_{f,10} = \frac{0.025^2 \times (1.871)^2}{2.208 \times (0.9363)^{4/3}} \approx \frac{0.000625 \times 3.497}{2.208 \times 0.873} \approx 0.00117$.
        *   $F_{r,10}^2 = \frac{(1.871)^2}{9.81 \times 1.49676} = \frac{3.497}{14.684} \approx 0.238$.
        *   $(dy/dx)_{10} = \frac{0.001 - 0.00117}{1 - 0.238} = \frac{-0.00017}{0.762} \approx -0.000223$.

    *   Predict $y_{20}^* = y_{10} + (dy/dx)_{10} \Delta x = 1.49676 + (-0.000223) \times 10 = 1.49453 \, \text{m}$.
    *   $Q_{20} = 15 - 0.1 \times 20 = 13 \, \text{m}^3/\text{s}$.
    *   Calculate $(dy/dx)_{20}^*$ using $y_{20}^* = 1.49453$ and $Q_{20} = 13$.
        *   $V_{20}^* = 13 / (5 \times 1.49453) \approx 1.739 \, \text{m/s}$.
        *   ... and so on.

    This iterative process would continue until $x=100 \, \text{m}$. The resulting $y$ values at each $x$ define the water surface profile.

#### 5.3. Practice Questions

1.  **Conceptual:** Explain the difference between Gradually Varied Flow (GVF) and Spatially Varied Flow (SVF). What are the primary reasons SVF occurs?
2.  **Derivation:** Briefly describe how the momentum principle is applied to derive the governing equation for steady, gradually varied SVF in a rectangular channel.
3.  **Profile Identification:** A rectangular channel with a mild slope carries flow under subcritical conditions. A uniform side weir causes lateral outflow. Describe how the water surface profile is expected to change downstream and explain why.
4.  **Calculation (Simplified):** A rectangular channel $T=3 \, \text{m}$, $S_0=0.0005$, $n=0.02$. Initial discharge $Q_0=5 \, \text{m}^3/\text{s}$ at $x=0$. Lateral inflow $q=0.2 \, \text{m}^3/\text{s}$ per meter length. Assume initial depth $y_0=1.2 \, \text{m}$. Calculate the slope of the water surface ($dy/dx$) at $x=0$.
5.  **Numerical Setup:** For the problem above, set up the calculation for the depth $y_{10}$ at $x=10 \, \text{m}$ using the Modified Euler method, given $y_0=1.2 \, \text{m}$. You don't need to complete the calculation, just show the steps.

#### 5.4. Answers to Practice Questions

1.  **Conceptual:**
    *   **GVF:** Discharge ($Q$) is constant along the channel length. Depth and velocity vary.
    *   **SVF:** Discharge ($Q$) varies along the channel length. Depth and velocity also vary.
    *   **Reasons for SVF:** Addition of flow (tributaries, spillways) or subtraction of flow (weirs, outlets) from the channel.

2.  **Derivation:** The momentum principle states that the sum of external forces acting on a control volume equals the net rate of momentum flow out of the control volume. For SVF in a rectangular channel, these forces include:
    *   Net momentum flux change (due to changing $Q$ and $A$).
    *   Hydrostatic force on the cross-sections.
    *   Component of gravity along the bed ($A S_0$).
    *   Friction force ($A S_f$).
    *   Momentum associated with lateral inflow/outflow.
    Applying this balance and simplifying for steady, gradually varied flow leads to an ordinary differential equation for $dy/dx$ that includes terms for $Q(x)$, $A(y)$, $S_0$, $S_f$, and $q$.

3.  **Profile Identification:**
    *   The channel is subcritical, so $y > y_c$. The initial slope of the water surface will be mild ($dy/dx > 0$).
    *   Lateral outflow decreases discharge ($Q$) downstream.
    *   As $Q$ decreases, velocity ($V=Q/A$) decreases, and the Froude number ($F_r=V/\sqrt{gD}$) decreases.
    *   Since the flow is subcritical, a decrease in velocity and Froude number generally causes the water surface to rise (the flow is moving away from the critical condition). The water surface profile will be an **M-type curve**. The rate of rise will likely diminish as the discharge decreases and the Froude number becomes smaller.

4.  **Calculation (Simplified):**
    *   $T=3 \, \text{m}$, $S_0=0.0005$, $n=0.02$. $Q_0=5 \, \text{m}^3/\text{s}$. $q=0.2 \, \text{m}^3/\text{s/m}$.
    *   At $x=0$, $Q = Q_0 = 5 \, \text{m}^3/\text{s}$.
    *   Assume $y_0 = 1.2 \, \text{m}$.
    *   $A_0 = T y_0 = 3 \times 1.2 = 3.6 \, \text{m}^2$.
    *   $V_0 = Q_0 / A_0 = 5 / 3.6 \approx 1.389 \, \text{m/s}$.
    *   $R_0 = A_0 / P_0 = 3.6 / (3 + 2 \times 1.2) = 3.6 / 5.4 \approx 0.667 \, \text{m}$.
    *   $S_{f0} = \frac{n^2 V_0^2}{2.208 R_0^{4/3}} = \frac{0.02^2 \times (1.389)^2}{2.208 \times (0.667)^{4/3}} = \frac{0.0004 \times 1.929}{2.208 \times 0.536} \approx \frac{0.00077}{1.183} \approx 0.000651$.
    *   $F_{r0}^2 = \frac{V_0^2}{gy_0} = \frac{(1.389)^2}{9.81 \times 1.2} = \frac{1.929}{11.772} \approx 0.1639$.
    *   $dy/dx = \frac{S_0 - S_{f0}}{1 - F_{r0}^2} = \frac{0.0005 - 0.000651}{1 - 0.1639} = \frac{-0.000151}{0.8361} \approx -0.0001806$.

5.  **Numerical Setup (Modified Euler):**
    *   Given: $x_0 = 0$, $y_0 = 1.2 \, \text{m}$, $Q_0 = 5 \, \text{m}^3/\text{s}$.
    *   Calculate $(dy/dx)_0$ as in Q4: $(dy/dx)_0 \approx -0.0001806$.
    *   $\Delta x = 10 \, \text{m}$.
    *   **Prediction step for $y_{10}^*$:**
        *   $y_{10}^* = y_0 + (dy/dx)_0 \Delta x = 1.2 + (-0.0001806) \times 10 = 1.2 - 0.001806 = 1.198194 \, \text{m}$.
    *   **Update discharge for $x=10 \, \text{m}$:**
        *   $Q_{10} = Q_0 - q \Delta x = 5 - 0.2 \times 10 = 3 \, \text{m}^3/\text{s}$.
    *   **Calculation of $(dy/dx)_{10}^*$:**
        *   Use $y = y_{10}^* = 1.198194 \, \text{m}$ and $Q = Q_{10} = 3 \, \text{m}^3/\text{s}$.
        *   $A_{10}^* = T y_{10}^* = 3 \times 1.198194 = 3.594582 \, \text{m}^2$.
        *   $V_{10}^* = Q_{10} / A_{10}^* = 3 / 3.594582 \approx 0.8345 \, \text{m/s}$.
        *   $R_{10}^* = A_{10}^* / P_{10}^* = 3.594582 / (3 + 2 \times 1.198194) = 3.594582 / 5.396388 \approx 0.6661 \, \text{m}$.
        *   $S_{f,10}^* = \frac{n^2 (V_{10}^*)^2}{2.208 (R_{10}^*)^{4/3}} = \frac{0.02^2 \times (0.8345)^2}{2.208 \times (0.6661)^{4/3}} = \frac{0.0004 \times 0.6964}{2.208 \times 0.5356} \approx \frac{0.0002786}{1.182} \approx 0.000236$.
        *   $F_{r,10}^{*2} = \frac{(V_{10}^*)^2}{g y_{10}^*} = \frac{(0.8345)^2}{9.81 \times 1.198194} = \frac{0.6964}{11.754} \approx 0.0592$.
        *   $(dy/dx)_{10}^* = \frac{S_0 - S_{f,10}^*}{1 - F_{r,10}^{*2}} = \frac{0.0005 - 0.000236}{1 - 0.0592} = \frac{0.000264}{0.9408} \approx 0.000281$.
    *   **Correction step for $y_{10}$:**
        *   $y_{10} = y_0 + \frac{1}{2} [(dy/dx)_0 + (dy/dx)_{10}^*] \Delta x = 1.2 + \frac{1}{2} [-0.0001806 + 0.000281] \times 10 = 1.2 + \frac{1}{2} [0.0001004] \times 10 = 1.2 + 0.000502 = 1.200502 \, \text{m}$.

---

### 6. Important Points to Remember

*   **SVF vs. GVF:** The fundamental difference is the change in discharge ($Q$) along the channel.
*   **Momentum Equation is Key:** The analysis of SVF relies on the momentum equation, which is more complex than the energy equation used for GVF alone.
*   **Numerical Methods are Essential:** Most SVF problems require numerical integration (e.g., finite difference methods) due to the complex nature of the governing differential equations.
*   **Froude Number:** The Froude number plays a critical role in determining the shape of SVF profiles, especially near critical conditions.
*   **Lateral Discharge:** The rate and location of lateral inflows or outflows significantly influence the water surface profile.
*   **Type 1 vs. Type 2:** Understanding whether discharge is increasing (Type 2) or decreasing (Type 1) is crucial for predicting profile behavior.
*   **Hydraulic Jumps:** Be aware that SVF can lead to hydraulic jumps if the flow transitions from supercritical to subcritical due to changes in discharge or channel geometry.
*   **Assumptions:** Be mindful of the assumptions made (e.g., steady flow, gradual variation, constant roughness, prismatic channel) and their limitations.

---
