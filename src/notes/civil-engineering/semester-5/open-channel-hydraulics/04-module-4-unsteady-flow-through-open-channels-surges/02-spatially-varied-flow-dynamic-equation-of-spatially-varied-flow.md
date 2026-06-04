---
title: "Spatially varied flow, dynamic equation of spatially varied flow"
subject: "OPEN CHANNEL HYDRAULICS"
module: "Module 4: Unsteady flow through open channels – Surges"
branch: "Civil Engineering"
semester: 5
topicId: "689f15cd56b5e963ba810eb8"
status: "completed"
scrapedAt: "2026-05-20T18:49:57.612Z"
---
# OPEN CHANNEL HYDRAULICS

## Module 4: Unsteady Flow Through Open Channels – Surges

### Topic: Spatially Varied Flow (SVF)

#### 1. Introduction to Spatially Varied Flow (SVF)

Spatially varied flow (SVF) is a type of open channel flow where the discharge ($Q$) changes along the length of the channel due to the addition or removal of water. This is in contrast to *uniform flow* where discharge is constant, and *non-uniform flow* (or *gradually varied flow*) where the depth changes but the discharge remains constant.

**Key Characteristics of SVF:**

*   **Discharge Variation:** The primary characteristic is that $Q$ is a function of distance along the channel, i.e., $Q = Q(x)$.
*   **Depth Variation:** Consequently, the flow depth ($y$) generally varies along the channel.
*   **Causes:** Addition of inflow (e.g., from tributaries, sprinklers) or removal of outflow (e.g., side weirs, spillways, seepage).
*   **Common Occurrences:** Spillways, stilling basins, side weirs, drainage channels, irrigation channels, culverts.

#### 2. Classification of Spatially Varied Flow

SVF can be classified based on the nature of the discharge variation and the flow regime.

**2.1. Classification Based on Discharge Variation:**

*   **Flow with increasing discharge:** Water is being added to the channel.
    *   **Example:** Flow in a channel receiving lateral inflow from a series of inlets or sprinklers.
*   **Flow with decreasing discharge:** Water is being removed from the channel.
    *   **Example:** Flow over a side weir or a spillway.

**2.2. Classification Based on Flow Profile:**

This classification is more detailed and considers the presence and location of the control section (where flow depth is uniquely determined by discharge) and the specific pattern of depth variation. It typically uses the **Froude number ($Fr$)** and the **rate of discharge variation**.

*   **Type 1 (dA/dx < 0, dQ/dx > 0):** Discharge increases, and the flow is subcritical ($Fr < 1$) upstream of the control.
*   **Type 2 (dA/dx > 0, dQ/dx > 0):** Discharge increases, and the flow is supercritical ($Fr > 1$) upstream of the control.
*   **Type 3 (dA/dx < 0, dQ/dx < 0):** Discharge decreases, and the flow is subcritical ($Fr < 1$) upstream of the control.
*   **Type 4 (dA/dx > 0, dQ/dx < 0):** Discharge decreases, and the flow is supercritical ($Fr > 1$) upstream of the control.
*   **Type 5:** Discharge increases and then decreases, or vice versa. This is less common and usually results from complex inflow/outflow patterns.

**Important Note:** The classifications above are based on the general behavior. More specific classifications exist depending on the rate of discharge change (mild, moderate, steep) and the flow regime.

#### 3. Governing Equation for Spatially Varied Flow

The dynamic equation for spatially varied flow is derived from the **conservation of momentum** principles. It relates the changes in depth and velocity to the forces acting on a control volume of the fluid.

**3.1. Derivation of the Dynamic Equation (using control volume analysis):**

Consider a control volume of length $dx$ along the channel bed. Let:

*   $Q$: Discharge at section $x$
*   $y$: Flow depth at section $x$
*   $A$: Flow area at section $x$ ($A = By$, where $B$ is the top width)
*   $V$: Average flow velocity at section $x$ ($V = Q/A$)
*   $S_0$: Bed slope
*   $S_f$: Friction slope
*   $S_u$: Slope of the energy line ($S_e = S_0 + S_f$)
*   $q_x$: Rate of lateral inflow per unit length of channel (positive for inflow, negative for outflow)
*   $P$: Wetted perimeter

**Assumptions:**

*   Steady flow (though the discharge varies spatially).
*   Uniform velocity distribution across the flow cross-section.
*   The lateral inflow/outflow occurs perpendicular to the main channel flow.
*   Negligible shear stress at the free surface.

**Momentum Equation in the x-direction:**

The net force acting on the control volume must equal the net momentum outflow.

**Forces acting on the control volume:**

1.  **Pressure force at section $x$:** $P_1 = \bar{P}_1 A_1 = \frac{1}{2} \rho g y_1^2 B_1$ (approximating hydrostatic pressure distribution, $\bar{P}$ is the average pressure). For a control volume of length $dx$, the forces at the ends are considered. The upstream pressure force is $P_x = \bar{P}A$.
2.  **Pressure force at section $x+dx$:** $P_{x+dx} = \bar{P}_{x+dx} A_{x+dx}$.
3.  **Weight of water in the control volume:** $W_x = (\rho g A dx) \sin(\theta) \approx \rho g A dx S_0$ (where $\theta$ is the bed slope angle, and $\sin \theta \approx \tan \theta = S_0$). This force acts downwards.
4.  **Shear force due to friction:** $F_f = \tau_0 P dx$, where $\tau_0$ is the shear stress at the bed. The friction slope is defined as $S_f = \tau_0 / (\rho g R)$, where $R$ is the hydraulic radius. So, $F_f = \rho g R S_f P dx$. This force opposes the motion.

**Momentum Flux Out of the control volume:**

The momentum flux at section $x+dx$ is $(Q+\frac{dQ}{dx}dx) (V + \frac{dV}{dx}dx) \frac{\rho}{A}$.
The momentum flux at section $x$ is $QV \frac{\rho}{A}$.

**Net momentum outflow = (Momentum flux at $x+dx$) - (Momentum flux at $x$)**

The momentum flux is actually $\dot{m}V = ( \rho A V ) V = \rho A V^2 = \rho Q V$.

So, net momentum outflow = $\frac{d(\rho Q V)}{dx} dx$.

**Applying Newton's Second Law (Sum of Forces = Rate of Change of Momentum):**

Sum of forces in x-direction = $\rho g A dx S_0 - \tau_0 P dx + (\bar{P}A)_{x} - (\bar{P}A)_{x+dx}$

The pressure term $(\bar{P}A)_{x} - (\bar{P}A)_{x+dx} = - \frac{d(\bar{P}A)}{dx} dx$.
The term $\bar{P}A$ represents the force due to hydrostatic pressure. For a channel with a free surface, $\bar{P}A = \int_0^y \rho g (y-\eta) B(\eta) d\eta$. For a rectangular channel, $B(\eta)=B$, and $\bar{P}A = \int_0^y \rho g (y-\eta) B d\eta = \rho g B [y\eta - \frac{\eta^2}{2}]_0^y = \rho g B (y^2 - \frac{y^2}{2}) = \frac{1}{2} \rho g B y^2 = \frac{1}{2} \rho g A y$.
So, $\frac{d(\bar{P}A)}{dx} = \frac{d(\frac{1}{2} \rho g A y)}{dx}$.

Net force = $\rho g A S_0 dx - \tau_0 P dx - \frac{d(\frac{1}{2} \rho g A y)}{dx} dx$

Rate of change of momentum = $\frac{d(\rho Q V)}{dx} dx = \frac{d(\rho Q^2/A)}{dx} dx$

Equating forces and momentum change:
$\rho g A S_0 dx - \tau_0 P dx - \frac{d(\frac{1}{2} \rho g A y)}{dx} dx = \frac{d(\rho Q^2/A)}{dx} dx$

Divide by $dx$:
$\rho g A S_0 - \tau_0 P - \frac{d(\frac{1}{2} \rho g A y)}{dx} = \frac{d(\rho Q^2/A)}{dx}$

$\rho g A S_0 - \rho g R P S_f - \frac{1}{2} \rho g \frac{d(A y)}{dx} = \rho \frac{d(Q^2/A)}{dx}$

Remembering $A=By$ for rectangular channels, $\frac{d(Ay)}{dx} = \frac{d(By^2)}{dx}$.
Also, $\frac{d(Q^2/A)}{dx} = \frac{d(Q^2/By)}{dx}$.

A more useful form is obtained by considering the specific energy ($E = y + V^2/(2g)$) and the specific force ($F = A y_{c} + Q^2/(gA)$), where $y_c$ is the depth of the centroid of the cross-section from the free surface. For a rectangular channel with a shallow depth, $y_c \approx y/2$.
The specific force is $F = \int_0^y B(y-\eta) d\eta + Q^2/(gA)$. For a rectangular channel, $F = B y^2/2 + Q^2/(gBy)$.

The dynamic equation for SVF relates the slope of the water surface ($dy/dx$) to the bed slope, friction slope, and the rate of discharge change.

**The General Dynamic Equation for Spatially Varied Flow:**

$$
\frac{dy}{dx} = \frac{S_0 - S_f - \frac{V}{g} \frac{d V}{dx} - \frac{V^2}{gA} \frac{dA}{dx}}{1 - \frac{V^2}{g \frac{dA}{dy}}}
$$

This form is general. For SVF, we also have $Q = Q(x)$, so $V = Q/A$.

Let's consider the rate of discharge change. $Q = AV$.
$\frac{dQ}{dx} = A \frac{dV}{dx} + V \frac{dA}{dx}$.
So, $A \frac{dV}{dx} = \frac{dQ}{dx} - V \frac{dA}{dx}$.

Substituting $A \frac{dV}{dx}$ into the general equation:
$$
\frac{dy}{dx} = \frac{S_0 - S_f - \frac{V}{g} (\frac{1}{A} (\frac{dQ}{dx} - V \frac{dA}{dx})) - \frac{V^2}{gA} \frac{dA}{dx}}{1 - \frac{V^2}{g \frac{dA}{dy}}}
$$

$$
\frac{dy}{dx} = \frac{S_0 - S_f - \frac{V}{gA}\frac{dQ}{dx} + \frac{V^2}{gA}\frac{dA}{dx} - \frac{V^2}{gA} \frac{dA}{dx}}{1 - \frac{V^2}{g \frac{dA}{dy}}}
$$

$$
\frac{dy}{dx} = \frac{S_0 - S_f - \frac{V}{gA}\frac{dQ}{dx}}{1 - \frac{V^2}{g \frac{dA}{dy}}}
$$

This is the **Spatially Varied Flow (SVF) Equation**.

Let's define the rate of discharge variation as $q_x = \frac{dQ}{dx}$.
And the geometric parameter $m = \frac{1}{B} \frac{dA}{dy}$. For a rectangular channel, $A = By$, so $dA/dy = B$, and $m = B/B = 1$.
For other channel shapes, $m$ will differ.

Also, $V = Q/A$.

The equation can be rewritten as:
$$
\frac{dy}{dx} = \frac{S_0 - S_f - \frac{Q}{gA^2}q_x}{1 - \frac{Q^2}{gA^2 \frac{dA}{dy}}}
$$

And using the Froude number $Fr = V / \sqrt{g/ (dA/dy)}$, so $Fr^2 = V^2 / (g \frac{dA}{dy})$.

$$
\frac{dy}{dx} = \frac{S_0 - S_f - \frac{V}{gA}q_x}{1 - Fr^2}
$$

This is a crucial form of the SVF equation.

*   $S_0$: Bed slope (positive for downward sloping bed).
*   $S_f$: Friction slope (positive value, typically calculated using Manning's equation).
*   $V$: Average velocity at section $x$.
*   $A$: Flow area at section $x$.
*   $q_x = dQ/dx$: Rate of discharge variation (positive for inflow, negative for outflow).
*   $Fr$: Froude number at section $x$.

**Interpretation of the SVF Equation:**

The sign of $dy/dx$ depends on the signs of the numerator and denominator.

*   **Denominator $(1 - Fr^2)$:**
    *   If $Fr < 1$ (subcritical flow), $1 - Fr^2 > 0$.
    *   If $Fr > 1$ (supercritical flow), $1 - Fr^2 < 0$.
*   **Numerator $(S_0 - S_f - \frac{V}{gA}q_x)$:**
    *   $S_0 - S_f$ represents the slope of the total energy line for uniform flow.
    *   The term $\frac{V}{gA}q_x$ is the effect of discharge variation.
        *   If $q_x > 0$ (inflow), and $V, A$ are positive, this term is positive. It tends to decrease the water surface slope ($dy/dx$).
        *   If $q_x < 0$ (outflow), this term is negative. It tends to increase the water surface slope ($dy/dx$).

**3.2. Simplified Forms and Special Cases:**

**3.2.1. Flow with Decreasing Discharge (Side Weirs/Spillways):**

Here, $q_x = dQ/dx < 0$. The term $-\frac{V}{gA}q_x$ becomes positive.
The equation is:
$$
\frac{dy}{dx} = \frac{S_0 - S_f + \frac{V}{gA}|q_x|}{1 - Fr^2}
$$
where $|q_x|$ is the magnitude of outflow per unit length.

**3.2.2. Flow with Increasing Discharge (Lateral Inflow):**

Here, $q_x = dQ/dx > 0$. The term $-\frac{V}{gA}q_x$ becomes negative.
The equation is:
$$
\frac{dy}{dx} = \frac{S_0 - S_f - \frac{V}{gA}q_x}{1 - Fr^2}
$$
where $q_x$ is the magnitude of inflow per unit length.

**3.2.3. Rectangular Channel (m=1):**

For a rectangular channel, $A = By$ and $dA/dy = B$.
$V = Q/(By)$. $Fr^2 = V^2/(g/B \cdot B) = V^2/gB$. This is incorrect.
For a rectangular channel $dA/dy = B$. Critical depth $y_c$ is defined by $V_c^2/g = y_c$. Or $Q^2/(gA^2) = y_c/B$. $Q^2/(g B^2 y_c^2) = y_c/B$. $Q^2/(gB y_c^3) = 1$. $y_c = (Q^2/(gB^2))^{1/3}$. This seems wrong.

Let's re-evaluate $Fr$. $Fr = V/\sqrt{g D}$, where $D$ is the hydraulic depth $A/T$ (T=top width). For a rectangular channel, $D = By/B = y$.
So, $Fr = V/\sqrt{g y}$.
$Fr^2 = V^2 / (gy)$.
The denominator term becomes $1 - V^2/(gy)$.
The SVF equation for a rectangular channel:
$$
\frac{dy}{dx} = \frac{S_0 - S_f - \frac{V}{gA}q_x}{1 - V^2/(gy)}
$$
Substituting $A = By$ and $V=Q/(By)$:
$$
\frac{dy}{dx} = \frac{S_0 - S_f - \frac{Q}{g(By)^2}q_x}{1 - \frac{Q^2}{g(By)^2 y}} = \frac{S_0 - S_f - \frac{Q q_x}{g B^2 y^2}}{1 - \frac{Q^2}{g B^3 y^3}}
$$
Wait, $V^2/(gy) = (Q/(By))^2 / (gy) = Q^2 / (B^2 y^3 g)$.
So the denominator is $1 - Q^2 / (g B^2 y^3)$. This is incorrect.

Let's go back to the general form:
$$
\frac{dy}{dx} = \frac{S_0 - S_f - \frac{V}{gA}q_x}{1 - \frac{V^2}{g \frac{dA}{dy}}}
$$
For rectangular channel $A=By$, $dA/dy = B$. $V=Q/A$.
$$
\frac{dy}{dx} = \frac{S_0 - S_f - \frac{Q}{g(By)}\frac{dQ}{dx}}{1 - \frac{Q^2/(By)^2}{g B}} = \frac{S_0 - S_f - \frac{Q}{g B y}\frac{dQ}{dx}}{1 - \frac{Q^2}{g B^2 y^2}}
$$
Still seems off. Let's check the definition of Froude number $Fr$. It is defined with respect to hydraulic depth.
$D = A/T$, where T is the top width. For rectangular $D=y$.
So $Fr = V/\sqrt{gD} = V/\sqrt{gy}$.
$Fr^2 = V^2/(gy)$.

$$
\frac{dy}{dx} = \frac{S_0 - S_f - \frac{V}{gA}q_x}{1 - Fr^2}
$$
Using $A=By$ and $V=Q/A$, $Fr^2=V^2/(gy)$:
$$
\frac{dy}{dx} = \frac{S_0 - S_f - \frac{Q}{g(By)}\frac{dQ}{dx}}{1 - \frac{V^2}{gy}} = \frac{S_0 - S_f - \frac{Q}{g B y}q_x}{1 - \frac{(Q/By)^2}{gy}} = \frac{S_0 - S_f - \frac{Q q_x}{g B y}}{1 - \frac{Q^2}{g B^2 y^3}}
$$
This equation looks more consistent. The denominator term $1 - Q^2/(g B^2 y^3)$ is related to $1-Fr^2$.
$Fr^2 = V^2/(gy) = (Q/By)^2/(gy) = Q^2/(g B^2 y^3)$.

So, the SVF equation for a **rectangular channel** is:
$$
\frac{dy}{dx} = \frac{S_0 - S_f - \frac{Q}{g B y}\frac{dQ}{dx}}{1 - \frac{Q^2}{g B^2 y^3}}
$$
where $Q$ and $y$ are functions of $x$, and $dQ/dx$ is the rate of discharge variation.

**Example:** Flow over a side weir.
Here, $q_x = dQ/dx$ is negative (outflow). Let the weir discharge per unit length be $q$. Then $dQ/dx = -q$.
The equation becomes:
$$
\frac{dy}{dx} = \frac{S_0 - S_f - \frac{Q}{g B y}(-q)}{1 - \frac{Q^2}{g B^2 y^3}} = \frac{S_0 - S_f + \frac{Q q}{g B y}}{1 - \frac{Q^2}{g B^2 y^3}}
$$
At the weir crest, flow can become supercritical. If $Q^2/(g B^2 y^3) \approx 1$, then the denominator approaches zero, leading to a rapid change in depth (often a hydraulic jump or transition).

**3.3. Solving the SVF Equation:**

The SVF equation is a first-order, non-linear ordinary differential equation. It is usually solved numerically due to the complex relationship between $y$, $Q$, $S_f$, and $q_x$.

**Numerical Methods:**

*   **Finite Difference Method:** Discretize the channel into segments and solve for depth at each segment iteratively.
*   **Finite Element Method:** Another numerical approach.
*   **Method of Characteristics:** Can be used for unsteady SVF.

**Key Parameters for Solving:**

*   Channel geometry (bed slope $S_0$, cross-sectional shape, roughness coefficient).
*   Discharge distribution $Q(x)$.
*   Rate of discharge variation $q_x = dQ/dx$.
*   Boundary conditions (e.g., depth at the start or end of the reach).

#### 4. Practice Questions and Exercises

**Question 1:**
Define Spatially Varied Flow (SVF) and distinguish it from uniform and gradually varied flow. What are the common causes of SVF?

**Answer 1:**
*   **SVF:** Open channel flow where discharge varies along the channel length due to addition or removal of water.
*   **Uniform Flow:** Discharge and depth are constant along the channel.
*   **Gradually Varied Flow (GVF):** Discharge is constant, but depth changes gradually.
*   **Causes:** Lateral inflow (tributaries, sprinklers), lateral outflow (side weirs, spillways, seepage).

**Question 2:**
State the general form of the dynamic equation for spatially varied flow. Explain each term in the equation.

**Answer 2:**
The general form is:
$$
\frac{dy}{dx} = \frac{S_0 - S_f - \frac{V}{gA}q_x}{1 - Fr^2}
$$
*   $dy/dx$: Slope of the water surface.
*   $S_0$: Bed slope (positive for downward slope).
*   $S_f$: Friction slope (positive value, represents energy loss due to friction).
*   $V$: Average velocity at section $x$.
*   $A$: Flow area at section $x$.
*   $q_x = dQ/dx$: Rate of discharge variation per unit length (positive for inflow, negative for outflow).
*   $Fr$: Froude number ($V/\sqrt{g D}$, where $D$ is hydraulic depth $A/T$).

**Question 3:**
Consider a wide rectangular channel ($B = 10$ m) with a mild bed slope ($S_0 = 0.001$) and Manning's roughness coefficient $n = 0.02$. The flow is subcritical, and discharge is decreasing due to a side weir with a lateral discharge of $q = 0.5 \, \text{m}^3/\text{s}$ per meter length of the channel. At a certain section ($x=0$), the flow depth is $y = 1.5$ m and the discharge is $Q = 10 \, \text{m}^3/\text{s}$. Calculate the slope of the water surface ($dy/dx$) at this section. Assume the flow is uniform at this section before the lateral discharge significantly affects it (i.e., $S_f \approx S_0$).

**Answer 3:**
Given:
*   $B = 10$ m
*   $S_0 = 0.001$
*   $n = 0.02$
*   $q = 0.5 \, \text{m}^3/\text{s}$ (lateral discharge per meter length)
*   $Q = 10 \, \text{m}^3/\text{s}$
*   $y = 1.5$ m

Since $q_x = dQ/dx$ and discharge is decreasing, $q_x = -q = -0.5 \, \text{m}^3/\text{s}/\text{m}$.

1.  **Calculate Area ($A$) and Velocity ($V$):**
    $A = B \times y = 10 \, \text{m} \times 1.5 \, \text{m} = 15 \, \text{m}^2$
    $V = Q/A = 10 \, \text{m}^3/\text{s} / 15 \, \text{m}^2 = 0.667 \, \text{m/s}$

2.  **Calculate Froude Number ($Fr$):**
    Hydraulic radius $R = A/P = (By)/(B+2y) = (10 \times 1.5) / (10 + 2 \times 1.5) = 15 / 13 = 1.154$ m. (This is needed for $S_f$, but not $Fr$).
    For rectangular channel, hydraulic depth $D = A/T = By/B = y$.
    $Fr = V/\sqrt{gy} = 0.667 / \sqrt{9.81 \times 1.5} = 0.667 / \sqrt{14.715} = 0.667 / 3.836 = 0.174$
    $Fr^2 = 0.174^2 = 0.0303$

3.  **Calculate Friction Slope ($S_f$) using Manning's equation:**
    $V = (1/n) R^{2/3} S_f^{1/2}$
    $0.667 = (1/0.02) (1.154)^{2/3} S_f^{1/2}$
    $0.667 = 50 \times (1.125) S_f^{1/2}$
    $0.667 = 56.25 S_f^{1/2}$
    $S_f^{1/2} = 0.667 / 56.25 = 0.01186$
    $S_f = (0.01186)^2 = 0.000141$

    *Self-correction:* The problem statement suggests assuming $S_f \approx S_0$. Let's use that for simplicity as per the question's hint, but in a real scenario, we'd calculate it.
    Assuming $S_f \approx S_0 = 0.001$.

4.  **Calculate $dy/dx$ using the SVF equation:**
    $$
    \frac{dy}{dx} = \frac{S_0 - S_f - \frac{V}{gA}q_x}{1 - Fr^2}
    $$
    Term $\frac{V}{gA}q_x = \frac{0.667 \, \text{m/s}}{9.81 \, \text{m/s}^2 \times 15 \, \text{m}^2} \times (-0.5 \, \text{m}^3/\text{s}/\text{m})$
    $\frac{V}{gA}q_x = \frac{0.667}{147.15} \times (-0.5) = 0.00453 \times (-0.5) = -0.002265$

    Numerator: $S_0 - S_f - \frac{V}{gA}q_x = 0.001 - 0.001 - (-0.002265) = 0.002265$

    Denominator: $1 - Fr^2 = 1 - 0.0303 = 0.9697$

    $\frac{dy}{dx} = \frac{0.002265}{0.9697} \approx 0.002336$

    The water surface is rising at this section.

**Question 4:**
What happens to the water surface slope ($dy/dx$) in the SVF equation when the flow is:
a) Subcritical ($Fr < 1$) and there is lateral inflow ($q_x > 0$).
b) Supercritical ($Fr > 1$) and there is lateral outflow ($q_x < 0$).

**Answer 4:**
The SVF equation:
$$
\frac{dy}{dx} = \frac{S_0 - S_f - \frac{V}{gA}q_x}{1 - Fr^2}
$$

a) **Subcritical ($Fr < 1$) and lateral inflow ($q_x > 0$):**
*   Denominator $(1 - Fr^2)$ is positive.
*   Term $\frac{V}{gA}q_x$ is positive.
*   Numerator: $(S_0 - S_f) - (\text{positive term})$.
    *   If the bed slope and friction slope are such that $(S_0 - S_f)$ is positive (e.g., mild slope and subcritical flow where $S_0 > S_f$), the numerator might still be positive, leading to $dy/dx > 0$ (rising water surface).
    *   If $(S_0 - S_f)$ is negative (e.g., steep slope or adverse slope), the numerator might become negative, leading to $dy/dx < 0$ (falling water surface).
    *   **In general, the positive term $(-\frac{V}{gA}q_x)$ counteracts the effect of $S_0 - S_f$, making the water surface slope less steep or even causing it to rise in subcritical flow where it would normally fall.**

b) **Supercritical ($Fr > 1$) and lateral outflow ($q_x < 0$):**
*   Denominator $(1 - Fr^2)$ is negative.
*   Term $\frac{V}{gA}q_x$ is negative. So, $-\frac{V}{gA}q_x$ is positive.
*   Numerator: $(S_0 - S_f) - (\text{negative term, which is positive correction})$. So, $(S_0 - S_f) + |\frac{V}{gA}q_x|$.
    *   Assuming $S_0$ is positive and $S_f$ is positive, the numerator will generally be positive (as $S_0$ usually dominates $S_f$ in typical scenarios unless $S_f$ is very large).
*   Therefore, $dy/dx = (\text{positive numerator}) / (\text{negative denominator}) = \text{negative}$.
    **The water surface slope will be negative (falling). The lateral outflow tends to make the water surface drop more sharply than in non-varied supercritical flow.**

#### 5. Important Points to Remember

*   **SVF is about changing discharge:** The core concept is $Q \neq constant$.
*   **Momentum Principle is key:** The SVF equation is derived from momentum conservation.
*   **Froude Number is critical:** The term $1 - Fr^2$ in the denominator governs the behavior of the water surface slope, especially near critical conditions.
*   **Discharge variation term ($-\frac{V}{gA}q_x$) is crucial:** It directly modifies the driving forces for depth change.
*   **Lateral inflow ($q_x > 0$) tends to reduce the rate of depth decrease (or increase depth).**
*   **Lateral outflow ($q_x < 0$) tends to increase the rate of depth decrease.**
*   **Numerical solutions are common:** The SVF equation is complex and typically solved numerically.
*   **Rectangular channel simplification:** For rectangular channels, the denominator becomes $1 - Q^2 / (g B^2 y^3)$.

---
