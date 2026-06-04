---
title: "Gradually varied flow- Dynamic equation of gradually varied flow- different forms"
subject: "OPEN CHANNEL HYDRAULICS"
module: "Module 3: Gradually varied flow"
branch: "Civil Engineering"
semester: 5
topicId: "689f15cd56b5e963ba810eaf"
status: "completed"
scrapedAt: "2026-05-20T18:49:51.274Z"
---
# Open Channel Hydraulics: Module 3 - Gradually Varied Flow

## Topic: Gradually Varied Flow - Dynamic Equation and its Forms

### Learning Outcomes:

Upon completion of this topic, you will be able to:

*   Understand the concept of Gradually Varied Flow (GVF).
*   Derive and understand the dynamic equation of gradually varied flow.
*   Identify and explain the different forms of the dynamic equation.
*   Apply the dynamic equation to analyze GVF profiles.
*   Recognize the significance of the conveyance factor and friction slope in GVF analysis.
*   Understand the concept of normal depth and critical depth and their relationship to GVF.

---

### 1. Introduction to Gradually Varied Flow (GVF)

**Definition:** Gradually Varied Flow (GVF) is a type of unsteady, non-uniform flow in open channels where the water surface slope, energy line slope, and channel bed slope are all different from each other, but the rate of change of flow properties (depth, velocity, etc.) along the channel is gradual. This means that the flow can be considered as **quasi-uniform** over short reaches.

**Key Characteristics of GVF:**

*   **Depth varies along the channel:** Unlike uniform flow, the flow depth changes progressively.
*   **Velocity varies along the channel:** As depth changes, the velocity also changes.
*   **Specific energy varies along the channel:** The specific energy (E = y + V²/2g) is not constant.
*   **Rate of change is slow:** The changes in flow depth and velocity are not abrupt.
*   **Energy loss is significant:** Friction plays a crucial role in the energy loss, and this loss is accounted for in the dynamic equation.

**Contrast with other flow types:**

*   **Uniform Flow:** Depth, velocity, and energy line slope are constant along the channel.
*   **Rapidly Varied Flow (RVF):** Significant and abrupt changes in flow depth and velocity occur over short distances (e.g., hydraulic jump, spillway).

---

### 2. The Dynamic Equation of Gradually Varied Flow

The dynamic equation of GVF is derived by considering the energy balance along a short reach of the channel. It relates the change in water surface elevation to the forces acting on the fluid.

**Derivation:**

Consider a short reach of open channel of length $dx$. Let:

*   $y$: Flow depth
*   $V$: Average velocity
*   $A$: Cross-sectional area of flow
*   $T$: Top width of the free surface
*   $S_f$: Friction slope (slope of the energy line)
*   $S_0$: Bed slope of the channel

**Energy Equation (Bernoulli's Principle applied to GVF):**

The energy at the upstream section (x) is $E_1 = y_1 + \frac{V_1^2}{2g}$.
The energy at the downstream section (x + dx) is $E_2 = y_2 + \frac{V_2^2}{2g}$.

The difference in energy ($E_1 - E_2$) is equal to the energy loss due to friction ($h_f$) over the reach $dx$.

$E_1 - E_2 = h_f$

$E_1 - E_2 = (y_1 - y_2) + (\frac{V_1^2}{2g} - \frac{V_2^2}{2g})$

Let $dy = y_2 - y_1$ and $dV = V_2 - V_1$.
Let $dE = E_2 - E_1$.

$dE = dy + d(\frac{V^2}{2g})$

The slope of the energy line, $S_f$, is the rate of energy loss per unit length of the channel.
$S_f = -\frac{dE}{dx}$ (The negative sign indicates energy loss)

Therefore, $-S_f dx = dy + d(\frac{V^2}{2g})$

**Expressing $V$ and $A$ in terms of $y$:**

Assuming the flow rate $Q$ is constant along the reach $dx$ (i.e., steady flow, but non-uniform depth):
$Q = A \cdot V$
$V = \frac{Q}{A}$

Now, let's differentiate $V^2/2g$ with respect to $x$:
$d(\frac{V^2}{2g}) = \frac{1}{2g} \cdot 2V \cdot dV = \frac{V}{g} dV$

Substitute $V = Q/A$:
$d(\frac{V^2}{2g}) = \frac{Q}{gA} d(\frac{Q}{A}) = \frac{Q}{gA} \cdot Q \cdot d(\frac{1}{A})$
$d(\frac{V^2}{2g}) = \frac{Q^2}{gA^2} (-\frac{dA}{A^2}) = -\frac{Q^2}{gA^3} dA$

Recall that $dA = T \cdot dy$. Substituting this:
$d(\frac{V^2}{2g}) = -\frac{Q^2}{gA^3} T dy$

Substitute $Q = AV$:
$d(\frac{V^2}{2g}) = -\frac{(AV)^2}{gA^3} T dy = -\frac{A^2V^2}{gA^3} T dy = -\frac{V^2}{gA} T dy$

This expression seems a bit complex. Let's try a simpler approach using the relationship between energy gradient and depth gradient.

From $E = y + \frac{V^2}{2g}$, and $V = Q/A$.
$E = y + \frac{Q^2}{2gA^2}$

The slope of the energy line is $\frac{dE}{dx}$.
$\frac{dE}{dx} = \frac{dy}{dx} + \frac{d}{dx}(\frac{Q^2}{2gA^2})$

We know that the slope of the energy line $S_f$ is negative.
$S_f = \frac{dE}{dx}$ (using the convention where $S_f$ is positive for friction loss)
So, $\frac{dE}{dx} = -S_f$.

$\frac{dy}{dx} + \frac{d}{dx}(\frac{Q^2}{2gA^2}) = -S_f$

Now, let's differentiate $\frac{Q^2}{2gA^2}$ with respect to $x$.
$\frac{d}{dx}(\frac{Q^2}{2gA^2}) = \frac{Q^2}{2g} \frac{d}{dx}(A^{-2}) = \frac{Q^2}{2g} (-2 A^{-3} \frac{dA}{dx})$
$= -\frac{Q^2}{gA^3} \frac{dA}{dx}$

We also know that $dA = T dy$. So, $\frac{dA}{dx} = T \frac{dy}{dx}$.
Substituting this:
$\frac{d}{dx}(\frac{Q^2}{2gA^2}) = -\frac{Q^2}{gA^3} (T \frac{dy}{dx})$

Now, substitute this back into the energy equation:
$\frac{dy}{dx} - \frac{Q^2}{gA^3} T \frac{dy}{dx} = -S_f$

Factor out $\frac{dy}{dx}$:
$\frac{dy}{dx} (1 - \frac{Q^2 T}{gA^3}) = -S_f$

Rearrange to solve for $\frac{dy}{dx}$:
$\frac{dy}{dx} = \frac{-S_f}{1 - \frac{Q^2 T}{gA^3}}$

**Recognizing the Froude Number:**

The Froude number ($F_r$) for a channel of arbitrary cross-section is defined as:
$F_r = \frac{V}{\sqrt{g D_h}}$
where $D_h$ is the hydraulic depth, $D_h = \frac{A}{T}$.

So, $F_r^2 = \frac{V^2}{g (A/T)} = \frac{V^2 T}{gA}$.

Substituting $Q = AV$, so $Q^2 = A^2V^2$:
$F_r^2 = \frac{A^2V^2 T}{gA^2} = \frac{A^2V^2 T}{g(AV)^2/V^2} = \frac{A V^2 T}{g A^2} = \frac{V^2 T}{gA}$

Wait, this definition seems incorrect for arbitrary cross-sections. Let's use the standard definition:
$F_r^2 = \frac{V^2}{g D_h} = \frac{V^2}{g (A/T)} = \frac{V^2 T}{gA}$.

Now substitute $Q=AV$:
$F_r^2 = \frac{(Q/A)^2 T}{gA} = \frac{Q^2 T}{gA^3}$.

So, the term in the parenthesis is $1 - F_r^2$.

**The Dynamic Equation of Gradually Varied Flow:**

$\frac{dy}{dx} = \frac{S_f - S_0}{1 - F_r^2}$

Where:
*   $\frac{dy}{dx}$: Slope of the water surface
*   $S_f$: Friction slope (slope of the energy line)
*   $S_0$: Bed slope of the channel (assumed positive for downstream direction)
*   $F_r$: Froude Number

**Important Note on Slopes:**

*   In many textbooks, $S_0$ is considered positive for a sloping bed (downstream).
*   $S_f$ is also typically considered positive representing friction loss.
*   The energy slope $\frac{dE}{dx}$ is always negative, indicating energy loss.
*   The water surface slope $\frac{dy}{dx}$ can be positive, negative, or zero.

Let's re-examine the derivation using the relation between the bed slope and friction slope.

The slope of the energy line ($S_f$) is the rate of energy loss per unit length.
$S_f = -\frac{dE}{dx}$

We have $E = y + \frac{V^2}{2g}$.
$\frac{dE}{dx} = \frac{dy}{dx} + \frac{1}{2g} \frac{d(V^2)}{dx}$

We also know that the slope of the energy line is related to the bed slope ($S_0$) and the water surface slope ($\frac{dy}{dx}$).
$S_f = S_0 + \frac{dy}{dx}$ (This assumes $S_0$ and $\frac{dy}{dx}$ are positive for downstream increase).

Let's use a coordinate system where the x-axis is horizontal and the y-axis is vertical upwards. The channel bed is at elevation $z$.
The energy line elevation is $E = z + y + \frac{V^2}{2g}$.
The slope of the energy line is $\frac{dE}{dx}$.
$\frac{dE}{dx} = \frac{dz}{dx} + \frac{dy}{dx} + \frac{d}{dx}(\frac{V^2}{2g})$

$\frac{dz}{dx}$ is the slope of the channel bed. Let's call it $S_0$ (positive for falling bed).
$\frac{dE}{dx} = S_0 + \frac{dy}{dx} + \frac{d}{dx}(\frac{V^2}{2g})$

The energy loss per unit length is $- \frac{dE}{dx}$. This is the friction slope $S_f$.
$-S_f = S_0 + \frac{dy}{dx} + \frac{d}{dx}(\frac{V^2}{2g})$

We previously found: $\frac{d}{dx}(\frac{V^2}{2g}) = -\frac{V^2}{gA} T \frac{dy}{dx} \cdot \frac{dA}{dy}$ (this step was incorrect with $dA=Tdy$)
Correct: $d(\frac{V^2}{2g}) = -\frac{V^2}{gA} dA$ where $dA = T dy$. So $d(\frac{V^2}{2g}) = -\frac{V^2 T}{gA} dy$.

Now, let's consider the change in specific energy $dE$ over a length $dx$ where the depth change is $dy$.
$E = y + \frac{V^2}{2g}$
$dE = dy + d(\frac{V^2}{2g})$

The change in energy grade line slope ($S_f$) is related to the depth change and bed slope.
$S_f = \text{slope of energy line}$
$S_f = \frac{dE}{dx} = \frac{d}{dx}(y + \frac{V^2}{2g})$
$S_f = \frac{dy}{dx} + \frac{d}{dx}(\frac{V^2}{2g})$

This expression for $S_f$ assumes that $S_f$ is positive for energy loss.
The slope of the energy line can also be related to the bed slope $S_0$ and the water surface slope $\frac{dy}{dx}$.
If $S_0$ is the slope of the channel bed (positive for downward slope), then the energy line slope is $S_f = S_0 + \frac{dy}{dx}$. This is valid when $S_0$ and $\frac{dy}{dx}$ are positive for downstream increase in elevation.

So, $\frac{dy}{dx} = S_f - S_0$. This is for uniform flow where $S_f = S_0$.

Let's go back to the derivation that leads to the Froude number.
Starting from $E = y + \frac{Q^2}{2gA^2}$.
$\frac{dE}{dx} = \frac{dy}{dx} + \frac{Q^2}{2g} \frac{d}{dx}(A^{-2})$
$\frac{dE}{dx} = \frac{dy}{dx} + \frac{Q^2}{2g}(-2A^{-3}\frac{dA}{dx}) = \frac{dy}{dx} - \frac{Q^2}{gA^3} \frac{dA}{dx}$

Now, the energy loss per unit length is $S_f$. So, $\frac{dE}{dx} = -S_f$.
$-S_f = \frac{dy}{dx} - \frac{Q^2}{gA^3} \frac{dA}{dx}$

Also, $\frac{dA}{dx} = \frac{dA}{dy} \frac{dy}{dx}$. We know $\frac{dA}{dy} = T$.
So, $\frac{dA}{dx} = T \frac{dy}{dx}$.

Substituting this into the equation:
$-S_f = \frac{dy}{dx} - \frac{Q^2}{gA^3} (T \frac{dy}{dx})$
$-S_f = \frac{dy}{dx} (1 - \frac{Q^2 T}{gA^3})$

Rearranging for $\frac{dy}{dx}$:
$\frac{dy}{dx} = \frac{-S_f}{1 - \frac{Q^2 T}{gA^3}}$

Now, let's consider the relationship between $S_f$, $S_0$, and $\frac{dy}{dx}$.
The slope of the energy line is the sum of the bed slope and the slope of the water surface relative to the bed.
$S_f = S_0 + \frac{dy}{dx}$ (This assumes $S_0$ and $\frac{dy}{dx}$ are positive for upward slope).

Let's use a consistent sign convention. Assume x increases downstream, and y increases upwards.
The bed elevation is $z$. The water surface elevation is $y$. The energy line elevation is $E = y + \frac{V^2}{2g}$.
The bed slope is $S_0 = -\frac{dz}{dx}$ (positive for downward slope).
The water surface slope is $\frac{dy}{dx}$.
The energy line slope is $\frac{dE}{dx} = \frac{dz}{dx} + \frac{dy}{dx} + \frac{d}{dx}(\frac{V^2}{2g})$.

The friction slope $S_f$ is defined as the rate of energy loss per unit length.
$S_f = -\frac{dE}{dx}$.

So, $S_f = -(\frac{dz}{dx} + \frac{dy}{dx} + \frac{d}{dx}(\frac{V^2}{2g}))$.
$S_f = -(-\frac{dz}{dx}) - \frac{dy}{dx} - \frac{d}{dx}(\frac{V^2}{2g})$
$S_f = S_0 - \frac{dy}{dx} - \frac{d}{dx}(\frac{V^2}{2g})$

We have $\frac{d}{dx}(\frac{V^2}{2g}) = -\frac{Q^2 T}{gA^3} \frac{dy}{dx}$.
$S_f = S_0 - \frac{dy}{dx} - (-\frac{Q^2 T}{gA^3} \frac{dy}{dx})$
$S_f = S_0 - \frac{dy}{dx} + \frac{Q^2 T}{gA^3} \frac{dy}{dx}$
$S_f = S_0 + \frac{dy}{dx} (\frac{Q^2 T}{gA^3} - 1)$

Rearranging for $\frac{dy}{dx}$:
$\frac{dy}{dx} (\frac{Q^2 T}{gA^3} - 1) = S_f - S_0$
$\frac{dy}{dx} = \frac{S_f - S_0}{\frac{Q^2 T}{gA^3} - 1}$

This is the negative of the previous form. Let's stick to the most commonly used form.

The fundamental dynamic equation for GVF is often written as:

$\frac{dy}{dx} = \frac{S_0 - S_f}{1 - \frac{V^2 T}{gA}}$

Where:
*   $S_0$: Bed slope (assumed positive for downstream)
*   $S_f$: Friction slope (slope of the energy line, positive for energy loss)
*   $\frac{dy}{dx}$: Slope of the water surface
*   $V$: Average flow velocity
*   $T$: Top width of the free surface
*   $A$: Cross-sectional area of flow
*   $g$: Acceleration due to gravity

**Key Insight:** The term $\frac{V^2 T}{gA}$ is related to the Froude number. For arbitrary cross-sections, $F_r^2 = \frac{V^2}{g D_h} = \frac{V^2}{g (A/T)} = \frac{V^2 T}{gA}$.

So the equation can also be written as:

$\frac{dy}{dx} = \frac{S_0 - S_f}{1 - F_r^2}$

**Important Note on Slopes Convention:**
In this common form:
*   $S_0$ is the slope of the channel bed (positive if the bed slopes downwards in the direction of flow).
*   $S_f$ is the slope of the energy line (also positive if the energy line slopes downwards in the direction of flow, indicating energy loss).
*   Therefore, $S_0 - S_f$ is the slope of the water surface relative to the energy line.

---

### 3. Different Forms of the Dynamic Equation

The dynamic equation can be expressed in various forms by substituting different relationships for $S_f$, $V$, and $A$.

#### Form 1: In terms of Depth ($y$) and Friction Slope ($S_f$)

This is the fundamental form derived above:
$$ \frac{dy}{dx} = \frac{S_0 - S_f}{1 - F_r^2} = \frac{S_0 - S_f}{1 - \frac{V^2 T}{gA}} $$

**Expressing $S_f$ using Manning's Equation:**

For most open channel flow analyses, Manning's equation is used to determine the friction slope.
$V = \frac{1.49}{n} R^{2/3} S_f^{1/2}$ (US Customary Units)
$V = \frac{1}{n} R^{2/3} S_f^{1/2}$ (SI Units)

Where:
*   $n$: Manning's roughness coefficient
*   $R$: Hydraulic radius ($R = A/P$, where $P$ is the wetted perimeter)

From Manning's equation, we can express $S_f$:
$S_f = (\frac{Vn}{1.49 R^{2/3}})^2$ (US)
$S_f = (\frac{Vn}{R^{2/3}})^2$ (SI)

Substituting $V = Q/A$:
$S_f = (\frac{Qn}{A R^{2/3}})^2$ (US)
$S_f = (\frac{Qn}{A R^{2/3}})^2$ (SI)

Substitute this $S_f$ into the dynamic equation:
$$ \frac{dy}{dx} = \frac{S_0 - (\frac{Qn}{A R^{2/3}})^2}{1 - \frac{Q^2 T}{gA^3}} $$
(Using US units for $n$ and $Q$ is cubic ft/sec, $A$ and $R$ in ft)

**Example Calculation of $S_f$:**
Consider a rectangular channel with width $B$, depth $y$, and flow $Q$.
$A = B \cdot y$
$P = B + 2y$
$R = \frac{B y}{B + 2y}$
$S_f = (\frac{Qn}{B y (\frac{B y}{B + 2y})^{2/3}})^2$

This equation shows how the water surface slope $\frac{dy}{dx}$ changes with depth $y$.

---

#### Form 2: In terms of Specific Energy ($E$)

We can also express the dynamic equation in terms of the rate of change of specific energy.
We know $S_f = -\frac{dE}{dx}$.

Substitute this into the equation $\frac{dy}{dx} = \frac{S_0 - S_f}{1 - F_r^2}$:
$\frac{dy}{dx} = \frac{S_0 - (-\frac{dE}{dx})}{1 - F_r^2}$
$\frac{dy}{dx} = \frac{S_0 + \frac{dE}{dx}}{1 - F_r^2}$

Rearranging for $\frac{dE}{dx}$:
$\frac{dE}{dx} = \frac{dy}{dx} (1 - F_r^2) - S_0$

This form is less commonly used for direct integration but highlights the relationship between the changes in specific energy and water surface elevation.

---

#### Form 3: In terms of Depth of Flow ($y$) and Conveyance ($K$)

This form is particularly useful for analysis of GVF profiles.
The **conveyance** ($K$) of a channel section is a measure of its capacity to convey flow. It is defined as:
$K = \frac{A}{n} R^{2/3}$ (US Customary Units)
$K = \frac{A}{n} R^{2/3}$ (SI Units)

Using Manning's equation, $V = \frac{K}{A} S_f^{1/2}$.
The flow rate $Q = AV = K S_f^{1/2}$.
Therefore, $S_f = (\frac{Q}{K})^2$.

Substitute this $S_f$ into the dynamic equation:
$$ \frac{dy}{dx} = \frac{S_0 - (\frac{Q}{K})^2}{1 - \frac{Q^2 T}{gA^3}} $$

**Expressing $K$ in terms of $y$:**
For different channel shapes, $K$ is a function of $y$.
*   **Rectangular Channel:** $A = By$, $P = B+2y$, $R = \frac{By}{B+2y}$.
    $K = \frac{By}{n} (\frac{By}{B+2y})^{2/3}$
*   **Trapezoidal Channel:** $A = (b+my)y$, $P = b+2y\sqrt{1+m^2}$, $R = \frac{(b+my)y}{b+2y\sqrt{1+m^2}}$.
    $K = \frac{(b+my)y}{n} (\frac{(b+my)y}{b+2y\sqrt{1+m^2}})^{2/3}$

**The Equation in terms of $y$ and $K$:**
$$ \frac{dy}{dx} = \frac{S_0 - \frac{Q^2}{K^2}}{1 - \frac{Q^2 T}{gA^3}} $$

This form is convenient because $Q$, $S_0$, $n$, $m$ (for trapezoidal), and $g$ are usually constant for a given channel reach. We need to evaluate $K$, $A$, and $T$ as functions of $y$.

---

#### Form 4: Non-dimensional Form (using specific force)

This form is less common in introductory courses but is important in advanced analysis. It often involves the concept of specific force. The specific force $F$ is defined as $F = A \cdot (\frac{V^2}{g} + y)$.

This form isn't as directly useful for profile calculation as the previous ones.

---

### 4. Key Concepts Related to GVF Equation

**Normal Depth ($y_n$):**

*   **Definition:** The flow depth where the water surface slope is equal to the bed slope ($S_0 = S_f$).
*   **Characteristic:** In uniform flow, $S_0 = S_f$. In GVF, the flow approaches normal depth asymptotically.
*   **Implication from the equation:** When $S_0 = S_f$, $\frac{dy}{dx} = 0$. This means the water surface is horizontal (which is an idealization) when it reaches normal depth. In reality, the slope becomes very small.

**Critical Depth ($y_c$):**

*   **Definition:** The flow depth where the Froude number is equal to 1 ($F_r = 1$). This corresponds to minimum specific energy for a given flow rate.
*   **Characteristic:** Occurs at critical flow conditions.
*   **Implication from the equation:** When $F_r = 1$, the denominator $(1 - F_r^2)$ becomes zero.
    *   If $S_0 - S_f > 0$ (mild slope condition), $\frac{dy}{dx} \to \infty$. This indicates a very steep water surface slope as it approaches critical depth.
    *   If $S_0 - S_f < 0$ (steep slope condition), $\frac{dy}{dx} \to -\infty$.

**Froude Number ($F_r$):**

*   **Definition:** $F_r = \frac{V}{\sqrt{g D_h}} = \frac{V}{\sqrt{g (A/T)}}$.
*   **Significance:** Indicates the relative importance of inertial forces to gravitational forces.
    *   $F_r < 1$: Subcritical flow (Tranquil flow) - depth is greater than critical depth. Waves can travel upstream.
    *   $F_r = 1$: Critical flow.
    *   $F_r > 1$: Supercritical flow (Rapid flow) - depth is less than critical depth. Waves cannot travel upstream.

**Friction Slope ($S_f$):**

*   **Definition:** The slope of the energy grade line, representing the energy loss per unit length due to friction.
*   **Calculation:** Typically calculated using Manning's or Chezy's equation.
*   **Behavior in GVF:** $S_f$ varies with depth $y$ (and therefore with $x$). For a given flow rate $Q$, $S_f$ decreases as $y$ increases.

**Bed Slope ($S_0$):**

*   **Definition:** The slope of the channel bed.
*   **Classification of channels based on slope:**
    *   **Mild Slope:** $S_0 < S_{cn}$ (where $S_{cn}$ is the slope for normal depth at critical depth, i.e., $y_n > y_c$).
    *   **Critical Slope:** $S_0 = S_{cn}$ (i.e., $y_n = y_c$).
    *   **Steep Slope:** $S_0 > S_{cn}$ (i.e., $y_n < y_c$).
    *   **Horizontal Slope:** $S_0 = 0$.
    *   **Adverse Slope:** $S_0 < 0$.

**Relationship between $y_n$, $y_c$, and $S_0$:**

*   **Mild Slope ($S_0 < S_{cn}$):** $y_n > y_c$. Normal depth is greater than critical depth.
*   **Critical Slope ($S_0 = S_{cn}$):** $y_n = y_c$. Normal depth equals critical depth.
*   **Steep Slope ($S_0 > S_{cn}$):** $y_n < y_c$. Normal depth is less than critical depth.

---

### 5. GVF Profile Classification

The classification of GVF profiles is based on the relative positions of the actual water surface profile and the normal depth line ($y_n$) and critical depth line ($y_c$). There are 13 possible GVF profiles, categorized into 5 main types:

*   **Type 1: $y > y_n > y_c$ (Mild Slope)**
    *   Water surface slope $\frac{dy}{dx} = \frac{S_0 - S_f}{1 - F_r^2}$.
    *   $S_0$ is constant (mild).
    *   $S_f$ decreases as $y$ increases.
    *   $F_r$ decreases as $y$ increases (since $V$ decreases as $y$ increases for constant $Q$).
    *   As $y \to \infty$, $S_f \to 0$ (ideal smooth channel) and $F_r \to 0$. $\frac{dy}{dx} \to S_0$. The slope approaches the bed slope.
    *   As $y \to y_n$, $S_f \to S_0$, so $\frac{dy}{dx} \to 0$. The water surface becomes horizontal.
    *   Profile is **M1**.

*   **Type 2: $y_n > y > y_c$ (Mild Slope)**
    *   $\frac{dy}{dx}$ is positive. The water surface rises as it moves downstream.
    *   Profile is **M2**.

*   **Type 3: $y_c > y > y_n$ (Mild Slope) - NOT POSSIBLE as $y_n > y_c$**

---

Let's consider the sign of $\frac{dy}{dx} = \frac{S_0 - S_f}{1 - F_r^2}$ based on the relationship between $y$, $y_n$, and $y_c$.

**Cases Based on Slope and Depth:**

**A. Mild Slope ($S_0 < S_{cn}$, hence $y_n > y_c$)**

1.  **Profile M1:** $y > y_n$
    *   $S_0 > 0$
    *   $S_f < S_0$ (since $y > y_n$)
    *   $F_r < 1$ (since $y > y_c$)
    *   $\frac{dy}{dx} = \frac{+}{-} = -$ (Wait, this is wrong. $y>y_n$ means $S_f$ is smaller than for $y_n$, so $S_0-S_f$ should be positive if $S_0$ is constant and $S_f$ decreases with $y$).
    Let's be careful:
    At $y=y_n$, $S_f = S_0$.
    If $y > y_n$, then $S_f < S_0$. Thus, $S_0 - S_f > 0$.
    If $y > y_c$, then $F_r < 1$. Thus, $1 - F_r^2 > 0$.
    So, $\frac{dy}{dx} = \frac{+}{+} = +$. This means the water surface rises downstream.
    *   As $x \to \infty$, $y \to y_n$.
    *   As $x \to -\infty$, $y \to \infty$.
    *   Profile is **M1**. The water surface is above the normal depth line and approaches it asymptotically.

2.  **Profile M2:** $y_n > y > y_c$
    *   $S_0 > 0$
    *   $S_f > S_0$ (since $y < y_n$)
    *   $F_r < 1$ (since $y < y_c$ implies $y_n > y_c$, so $y$ is still in subcritical region)
    *   $\frac{dy}{dx} = \frac{S_0 - S_f}{1 - F_r^2} = \frac{-}{+} = -$. The water surface falls downstream.
    *   As $x \to \infty$, $y \to y_n$.
    *   As $x \to -\infty$, $y \to y_c$.
    *   Profile is **M2**. The water surface is between the normal depth and critical depth lines.

3.  **Profile M3:** $y_c > y$ (This is for supercritical flow, not mild slope). This case is not applicable for mild slope.

**B. Steep Slope ($S_0 > S_{cn}$, hence $y_n < y_c$)**

1.  **Profile S1:** $y > y_c$
    *   $S_0 > 0$
    *   $S_f < S_0$ (since $y > y_n$, and $y_n < y_c$, so $y$ is definitely above $y_n$ as well)
    *   $F_r < 1$ (since $y > y_c$)
    *   $\frac{dy}{dx} = \frac{S_0 - S_f}{1 - F_r^2} = \frac{+}{+} = +$. The water surface rises downstream.
    *   As $x \to \infty$, $y \to y_n$.
    *   As $x \to -\infty$, $y \to \infty$.
    *   Profile is **S1**. Water surface is above both normal and critical depth lines.

2.  **Profile S2:** $y_c > y > y_n$
    *   $S_0 > 0$
    *   $S_f > S_0$ (since $y < y_n$)
    *   $F_r > 1$ (since $y < y_c$)
    *   $\frac{dy}{dx} = \frac{S_0 - S_f}{1 - F_r^2} = \frac{-}{-} = +$. The water surface rises downstream.
    *   As $x \to \infty$, $y \to y_n$.
    *   As $x \to -\infty$, $y \to y_c$.
    *   Profile is **S2**. Water surface is between critical and normal depth lines.

3.  **Profile S3:** $y_n > y$
    *   $S_0 > 0$
    *   $S_f > S_0$ (since $y < y_n$)
    *   $F_r > 1$ (since $y < y_n < y_c$, so $y$ is in supercritical region)
    *   $\frac{dy}{dx} = \frac{S_0 - S_f}{1 - F_r^2} = \frac{-}{-} = +$. The water surface rises downstream.
    *   As $x \to \infty$, $y \to y_n$.
    *   As $x \to -\infty$, $y \to y_c$.
    *   Profile is **S3**. Water surface is below the normal depth line.

**C. Critical Slope ($S_0 = S_{cn}$, hence $y_n = y_c$)**

1.  **Profile C1:** $y > y_n (= y_c)$
    *   $S_0 > 0$
    *   $S_f < S_0$ (since $y > y_n$)
    *   $F_r < 1$ (since $y > y_c$)
    *   $\frac{dy}{dx} = \frac{S_0 - S_f}{1 - F_r^2} = \frac{+}{+} = +$. Water surface rises.
    *   As $x \to \infty$, $y \to y_n$.
    *   As $x \to -\infty$, $y \to \infty$.
    *   Profile is **C1**.

2.  **Profile C2:** $y_c (= y_n) > y$
    *   $S_0 > 0$
    *   $S_f > S_0$ (since $y < y_n$)
    *   $F_r > 1$ (since $y < y_c$)
    *   $\frac{dy}{dx} = \frac{S_0 - S_f}{1 - F_r^2} = \frac{-}{-} = +$. Water surface rises.
    *   As $x \to \infty$, $y \to y_n$.
    *   As $x \to -\infty$, $y \to y_c$.
    *   Profile is **C2**.

**D. Horizontal Slope ($S_0 = 0$)**

1.  **Profile H1:** $y > y_c$
    *   $S_0 = 0$
    *   $S_f > 0$ (always)
    *   $F_r < 1$ (since $y > y_c$)
    *   $\frac{dy}{dx} = \frac{0 - S_f}{1 - F_r^2} = \frac{-}{+} = -$. Water surface falls.
    *   As $x \to \infty$, $y \to y_c$ (where $S_f \to 0$ theoretically, but friction exists).
    *   As $x \to -\infty$, $y \to \infty$.
    *   Profile is **H1**.

2.  **Profile H2:** $y_c > y$
    *   $S_0 = 0$
    *   $S_f > 0$
    *   $F_r > 1$ (since $y < y_c$)
    *   $\frac{dy}{dx} = \frac{0 - S_f}{1 - F_r^2} = \frac{-}{-} = +$. Water surface rises.
    *   As $x \to \infty$, $y \to y_c$.
    *   As $x \to -\infty$, $y \to \infty$.
    *   Profile is **H2**.

**E. Adverse Slope ($S_0 < 0$)**

1.  **Profile A1:** $y > y_c$
    *   $S_0 < 0$
    *   $S_f > 0$
    *   $F_r < 1$ (since $y > y_c$)
    *   $\frac{dy}{dx} = \frac{S_0 - S_f}{1 - F_r^2} = \frac{-}{-} = +$. Water surface rises.
    *   As $x \to \infty$, $y \to y_c$ (where $S_f \to |S_0|$ for steady flow, meaning $S_f$ must balance the adverse slope).
    *   As $x \to -\infty$, $y \to \infty$.
    *   Profile is **A1**.

2.  **Profile A2:** $y_c > y$
    *   $S_0 < 0$
    *   $S_f > 0$
    *   $F_r > 1$ (since $y < y_c$)
    *   $\frac{dy}{dx} = \frac{S_0 - S_f}{1 - F_r^2} = \frac{-}{-} = +$. Water surface rises.
    *   As $x \to \infty$, $y \to y_c$.
    *   As $x \to -\infty$, $y \to \infty$.
    *   Profile is **A2**.

---

### 6. Practice Questions and Exercises

**Question 1:**
Derive the dynamic equation for gradually varied flow and explain the significance of each term.

**Answer:**
The dynamic equation is derived from the energy equation applied over a short reach of the channel. It can be expressed as:
$$ \frac{dy}{dx} = \frac{S_0 - S_f}{1 - F_r^2} $$
Where:
*   $\frac{dy}{dx}$ is the slope of the water surface.
*   $S_0$ is the bed slope (positive for downstream).
*   $S_f$ is the friction slope (positive for energy loss).
*   $F_r$ is the Froude number ($F_r = V/\sqrt{g D_h}$).

*   **Significance:**
    *   The equation relates the rate of change of water depth to the difference between the bed slope and the friction slope, modified by the Froude number.
    *   When $S_0 = S_f$, $\frac{dy}{dx} = 0$, indicating normal depth.
    *   When $F_r = 1$, the denominator is zero, indicating a very steep water surface slope as it approaches critical depth.
    *   The sign of $\frac{dy}{dx}$ determines whether the water surface is rising or falling downstream, leading to the classification of GVF profiles.

**Question 2:**
Calculate the friction slope ($S_f$) for a rectangular channel 5m wide carrying a discharge of 10 m³/s at a depth of 2m. Assume Manning's 'n' = 0.015.

**Answer:**
*   Channel width, $B = 5$ m
*   Flow depth, $y = 2$ m
*   Discharge, $Q = 10$ m³/s
*   Manning's 'n' = 0.015

1.  **Calculate Area ($A$):**
    $A = B \cdot y = 5 \text{ m} \cdot 2 \text{ m} = 10 \text{ m}^2$

2.  **Calculate Wetted Perimeter ($P$):**
    $P = B + 2y = 5 \text{ m} + 2(2 \text{ m}) = 9 \text{ m}$

3.  **Calculate Hydraulic Radius ($R$):**
    $R = A/P = 10 \text{ m}^2 / 9 \text{ m} = 1.111 \text{ m}$

4.  **Calculate Velocity ($V$):**
    $V = Q/A = 10 \text{ m}^3/\text{s} / 10 \text{ m}^2 = 1 \text{ m/s}$

5.  **Calculate Friction Slope ($S_f$) using Manning's Equation (SI Units):**
    $V = \frac{1}{n} R^{2/3} S_f^{1/2}$
    $S_f^{1/2} = \frac{Vn}{R^{2/3}} = \frac{(1 \text{ m/s})(0.015)}{(1.111 \text{ m})^{2/3}}$
    $R^{2/3} = (1.111)^{0.6667} \approx 1.108$
    $S_f^{1/2} = \frac{0.015}{1.108} \approx 0.01354$
    $S_f = (0.01354)^2 \approx 0.0001833$

    **Therefore, the friction slope $S_f \approx 0.0001833$.**

**Question 3:**
Explain how the GVF profile is affected by the relationship between the water surface slope and the bed slope in a mild channel.

**Answer:**
In a mild channel, the normal depth ($y_n$) is greater than the critical depth ($y_c$).

*   **Profile M1 ($y > y_n$):** The water surface is above the normal depth line. Here, $S_0 > S_f$ and $F_r < 1$. The term $S_0 - S_f$ is positive, and $1 - F_r^2$ is positive. Thus, $\frac{dy}{dx} > 0$. The water surface rises in the downstream direction, approaching the normal depth line asymptotically.

*   **Profile M2 ($y_n > y > y_c$):** The water surface is between the normal depth and critical depth lines. Here, $S_0 < S_f$ and $F_r < 1$. The term $S_0 - S_f$ is negative, and $1 - F_r^2$ is positive. Thus, $\frac{dy}{dx} < 0$. The water surface falls in the downstream direction, approaching the critical depth line asymptotically.

**Question 4:**
What is the condition for normal depth and what is its significance in GVF analysis?

**Answer:**
**Condition for Normal Depth:** Normal depth ($y_n$) occurs when the friction slope ($S_f$) is equal to the bed slope ($S_0$).

**Significance:**
*   In uniform flow, $S_f = S_0$, and the depth is constant, equal to the normal depth.
*   In gradually varied flow, the water surface profile approaches the normal depth line asymptotically. This means that as the flow progresses along the channel, the depth tends towards $y_n$, and the slope of the water surface ($\frac{dy}{dx}$) tends towards zero.
*   Normal depth is a reference depth that is crucial for classifying GVF profiles and determining the type of GVF that will occur.

---

### 7. Important Points to Remember

*   **GVF is non-uniform flow:** Depth and velocity change along the channel, but gradually.
*   The **dynamic equation** $\frac{dy}{dx} = \frac{S_0 - S_f}{1 - F_r^2}$ is the cornerstone for GVF analysis.
*   **$S_f$ is calculated using Manning's or Chezy's equation** and depends on flow depth.
*   **Normal depth ($y_n$)** is where $S_f = S_0$.
*   **Critical depth ($y_c$)** is where $F_r = 1$.
*   The relative values of $y$, $y_n$, and $y_c$, along with the channel slope ($S_0$), determine the **GVF profile type**.
*   The **conveyance ($K$)** is a useful term for expressing the GVF equation in a form that is often easier to work with, especially for integration.
*   GVF profiles are classified into 13 types, but commonly grouped into 5 main categories (M, S, C, H, A) based on channel slope and relative depth.
*   Understanding these profiles is essential for designing channels, predicting water surface elevations, and analyzing flow behavior under different conditions.

---
