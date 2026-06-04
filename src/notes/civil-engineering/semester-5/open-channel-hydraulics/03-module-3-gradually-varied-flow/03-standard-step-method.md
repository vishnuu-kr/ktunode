---
title: "Standard step method"
subject: "OPEN CHANNEL HYDRAULICS"
module: "Module 3: Gradually varied flow"
branch: "Civil Engineering"
semester: 5
topicId: "689f15cd56b5e963ba810eb1"
status: "completed"
scrapedAt: "2026-05-20T18:49:52.892Z"
---
# Open Channel Hydraulics: Module 3 - Gradually Varied Flow

## Topic: Standard Step Method

---

### Learning Outcomes

Upon successful completion of this topic, you will be able to:

*   Understand the fundamental principles of Gradually Varied Flow (GVF).
*   Derive the GVF differential equation.
*   Classify different types of GVF profiles.
*   Understand the concepts of reach, spatial step, and energy correction factor.
*   Apply the Standard Step Method (SSM) to calculate water surface profiles in open channels.
*   Discuss the assumptions and limitations of the SSM.
*   Recognize the significance of the SSM in practical open channel flow analysis.

---

### 1. Introduction to Gradually Varied Flow (GVF)

**1.1 Definition:**
Gradually Varied Flow (GVF) is a type of unsteady flow in open channels where the water surface elevation and flow depth change **gradually** along the length of the channel. This implies that the rate of change of depth with respect to distance is small, allowing for certain simplifying assumptions.

**1.2 Key Characteristics of GVF:**
*   **Slow changes:** Water depth, velocity, and cross-sectional area change slowly along the channel.
*   **Uniform flow is an approximation:** Unlike uniform flow where depth and velocity are constant, GVF involves variations.
*   **Supercritical vs. Subcritical:** GVF can occur in both subcritical (Froude number < 1) and supercritical (Froude number > 1) flow regimes, but the profiles behave differently.
*   **Causes of GVF:** Obstructions, changes in channel geometry (width, slope, roughness), control structures (weirs, gates), and the downstream influence of a control.

**1.3 Distinction from Rapidly Varied Flow (RVF):**
RVF involves abrupt changes in water depth and velocity over short distances (e.g., hydraulic jumps, drops). GVF, on the other hand, describes the smooth transition between flow conditions.

---

### 2. The GVF Differential Equation

The foundation for analyzing GVF is the energy equation applied over a differential length of the channel.

**2.1 Energy Equation for Open Channels:**
The specific energy ($E$) at a cross-section is given by:
$E = y + \frac{\alpha V^2}{2g}$

Where:
*   $y$ = flow depth
*   $\alpha$ = velocity distribution coefficient (often assumed as 1 for simplicity in GVF analysis)
*   $V$ = average flow velocity
*   $g$ = acceleration due to gravity

**2.2 Derivation:**
Consider two cross-sections 1 and 2 separated by a differential distance $dx$. Let $y_1$ and $y_2$ be the depths, and $E_1$ and $E_2$ be the specific energies at these sections. Applying the energy equation between sections 1 and 2:

$E_1 = E_2 + h_L$

Where $h_L$ is the head loss due to friction between sections 1 and 2.

$y_1 + \frac{V_1^2}{2g} = y_2 + \frac{V_2^2}{2g} + h_L$

For a differential distance $dx$: $y_2 = y_1 + dy$ and $V_2 = V_1 + dV$.
Also, $h_L = S_f dx$, where $S_f$ is the friction slope.

Substituting these into the energy equation:
$y + \frac{V^2}{2g} = (y + dy) + \frac{(V + dV)^2}{2g} + S_f dx$

Simplifying and neglecting higher-order terms ($dy^2$, $dV^2$, $dV \cdot dx$):
$y + \frac{V^2}{2g} = y + dy + \frac{V^2 + 2V dV}{2g} + S_f dx$
$0 = dy + \frac{V dV}{g} + S_f dx$

Rearranging to find $\frac{dy}{dx}$:
$\frac{dy}{dx} = -\frac{S_f + \frac{V}{g} \frac{dV}{dx}}{1}$

We also know that continuity requires $Q = A V$, where $Q$ is the discharge (constant for GVF) and $A$ is the cross-sectional area.
Differentiating $Q = AV$ with respect to $x$:
$0 = A \frac{dV}{dx} + V \frac{dA}{dx}$
$\frac{dV}{dx} = -\frac{V}{A} \frac{dA}{dx}$

Substituting this back into the $\frac{dy}{dx}$ equation:
$\frac{dy}{dx} = -\frac{S_f + \frac{V}{g} (-\frac{V}{A} \frac{dA}{dx})}{1}$
$\frac{dy}{dx} = -S_f + \frac{V^2}{gA} \frac{dA}{dx}$

We also know that for a channel of width $B$ at the water surface, $dA = B dy$. So, $\frac{dA}{dx} = B \frac{dy}{dx}$. This substitution seems circular. Instead, let's consider how area changes with depth. $A = A(y)$. Differentiating with respect to $x$: $\frac{dA}{dx} = \frac{dA}{dy} \frac{dy}{dx} = B \frac{dy}{dx}$. This is still problematic.

Let's go back to the derivation using $\frac{dE}{dx}$.
$\frac{dE}{dx} = \frac{d}{dx} (y + \frac{V^2}{2g}) = \frac{dy}{dx} + \frac{1}{2g} \frac{d(V^2)}{dx}$
$\frac{dE}{dx} = \frac{dy}{dx} + \frac{1}{2g} (2V \frac{dV}{dx}) = \frac{dy}{dx} + \frac{V}{g} \frac{dV}{dx}$

From the energy equation $E_1 - E_2 = h_L$, so $\frac{dE}{dx} = -\frac{h_L}{dx} = -S_f$.
Therefore:
$\frac{dy}{dx} + \frac{V}{g} \frac{dV}{dx} = -S_f$

Now, let's express $\frac{dV}{dx}$ in terms of $\frac{dy}{dx}$ using continuity $Q=AV$.
$dV = d(\frac{Q}{A}) = -\frac{Q}{A^2} dA = -\frac{V}{A} dA$
$\frac{dV}{dx} = -\frac{V}{A} \frac{dA}{dx}$

Substitute this into the energy equation:
$\frac{dy}{dx} + \frac{V}{g} (-\frac{V}{A} \frac{dA}{dx}) = -S_f$
$\frac{dy}{dx} - \frac{V^2}{gA} \frac{dA}{dx} = -S_f$

Recognizing that $\frac{dA}{dx}$ is related to the change in bed slope ($S_0$) and the change in water surface slope ($S_f$ is the slope of energy line).
The change in specific energy with distance is related to the bed slope and friction slope:
$\frac{dE}{dx} = S_0 - S_f$ (where $S_0$ is bed slope, positive for downsloping)

Let's rewrite the energy equation in terms of depth.
$E = y + \frac{Q^2}{2gA^2}$
$\frac{dE}{dx} = \frac{dy}{dx} + \frac{Q^2}{2g} \frac{d}{dx}(A^{-2})$
$\frac{dE}{dx} = \frac{dy}{dx} + \frac{Q^2}{2g} (-2A^{-3}) \frac{dA}{dx}$
$\frac{dE}{dx} = \frac{dy}{dx} - \frac{Q^2}{gA^3} \frac{dA}{dx}$

Substitute $Q=AV$:
$\frac{dE}{dx} = \frac{dy}{dx} - \frac{A^2V^2}{gA^3} \frac{dA}{dx}$
$\frac{dE}{dx} = \frac{dy}{dx} - \frac{V^2}{gA} \frac{dA}{dx}$

Equating this to $S_0 - S_f$:
$\frac{dy}{dx} - \frac{V^2}{gA} \frac{dA}{dx} = S_0 - S_f$

Now, let's relate $\frac{dA}{dx}$ to $\frac{dy}{dx}$. For a given change in depth $dy$, the change in area $dA$ is $B dy$, where $B$ is the top width.
So, $\frac{dA}{dx} = \frac{dA}{dy} \frac{dy}{dx} = B \frac{dy}{dx}$.

Substituting this into the equation:
$\frac{dy}{dx} - \frac{V^2}{gA} (B \frac{dy}{dx}) = S_0 - S_f$
$\frac{dy}{dx} (1 - \frac{V^2 B}{gA}) = S_0 - S_f$

We know that $A = T \cdot y$ for rectangular channels, and $B = T$, so $\frac{dA}{dy} = B$.
The Froude Number $Fr = \frac{V}{\sqrt{gD}}$, where $D$ is the hydraulic depth. For general channels, $D = A/B$.
So, $Fr^2 = \frac{V^2}{g(A/B)} = \frac{V^2 B}{gA}$.

Therefore, the GVF differential equation is:
$\frac{dy}{dx} (1 - Fr^2) = S_0 - S_f$

**GVF Differential Equation:**
$\frac{dy}{dx} = \frac{S_0 - S_f}{1 - Fr^2}$

This equation is fundamental for analyzing GVF. It relates the rate of change of water depth ($dy/dx$) to the difference between the bed slope ($S_0$) and the friction slope ($S_f$), and the Froude number ($Fr$).

---

### 3. GVF Profile Classification

The GVF equation is crucial for understanding how water surface profiles are formed. The classification is based on the relative values of actual depth ($y$), normal depth ($y_n$), and critical depth ($y_c$), and the slopes ($S_0$, $S_f$).

**3.1 Key Depths:**
*   **Normal Depth ($y_n$):** The depth at which uniform flow occurs for a given discharge ($Q$), channel geometry, and roughness ($S_f = S_0$).
*   **Critical Depth ($y_c$):** The depth at which the Froude number is 1 ($Fr = 1$). This corresponds to minimum specific energy for a given discharge. $\frac{V_c^2}{gD_c} = 1$.

**3.2 Types of Slopes:**
*   **Mild Slope (M):** $S_0 < S_f$ for uniform flow, meaning $S_0 < S_{0n}$ (where $S_{0n}$ is the normal flow friction slope, which equals $S_0$). This implies $y_n > y_c$.
*   **Steep Slope (S):** $S_0 > S_f$ for uniform flow, meaning $S_0 > S_{0n}$. This implies $y_n < y_c$.
*   **Horizontal Slope (H):** $S_0 = 0$. This implies $y_n = \infty$ (theoretically) and $y_c$ exists.
*   **Adverse Slope (A):** $S_0 < 0$ (channel slopes upwards). Uniform flow is not possible. $y_n = \infty$ (theoretically).

**3.3 Profile Classification (Based on $y$, $y_n$, $y_c$ and $S_0$, $S_f$):**

The classification scheme uses letters to denote the slope type and numbers to denote the position of the water surface relative to $y_n$ and $y_c$.

**Slope Types:**
*   **M-Type (Mild):** $S_0 < S_c$ ($y_n > y_c$). This includes mild slopes and horizontal/adverse slopes where $y_n$ is conceptually infinite or very large.
*   **S-Type (Steep):** $S_0 > S_c$ ($y_n < y_c$).
*   **C-Type (Critical):** $S_0 = S_c$ ($y_n = y_c$).
*   **H-Type (Horizontal):** $S_0 = 0$.
*   **A-Type (Adverse):** $S_0 < 0$.

**Profile Numbers (Position of Water Surface):**

*   **Profile 1 (y > $y_n$ and y > $y_c$):** Water surface is above both normal and critical depths.
    *   On Mild slopes: M1 (water surface above $y_n$, which is above $y_c$).
    *   On Horizontal slopes: H1 (water surface above $y_c$).
    *   On Adverse slopes: A1 (water surface above $y_c$, where $y_n$ is infinite).
*   **Profile 2 (y < $y_n$ and y > $y_c$):** Water surface is below normal depth but above critical depth.
    *   On Mild slopes: M2 (water surface between $y_n$ and $y_c$).
    *   On Steep slopes: S2 (water surface above $y_c$, but below $y_n$).
    *   On Critical slopes: C2 (water surface above $y_c$, which equals $y_n$).
*   **Profile 3 (y < $y_n$ and y < $y_c$):** Water surface is below both normal and critical depths.
    *   On Mild slopes: M3 (water surface below $y_c$, but above $y_n$ - this is incorrect, M3 means $y_n > y > y_c$ not possible. M3 is $y_c > y > y_n$ for mild slope, this is wrong. M3 is $y_n > y > y_c$ not possible. M3 is $y_n>y_c>y$).
    *   On Mild slopes: M3 (water surface between $y_c$ and $y_n$, but lower than $y_c$). This profile occurs when the flow is subcritical but transitioning towards critical depth from above.
    *   On Steep slopes: S3 (water surface below $y_c$, but above $y_n$).
    *   On Critical slopes: C3 (water surface below $y_c$, which equals $y_n$).

**Let's re-examine the profile positions carefully:**

The GVF equation $\frac{dy}{dx} = \frac{S_0 - S_f}{1 - Fr^2}$ dictates the behavior.
We need to consider the signs of ($S_0 - S_f$) and ($1 - Fr^2$).

*   **$S_0 - S_f$:**
    *   Positive if $y < y_n$ (friction slope $S_f$ is larger than $S_0$).
    *   Negative if $y > y_n$ (friction slope $S_f$ is smaller than $S_0$).
*   **$1 - Fr^2$:**
    *   Positive if $Fr < 1$ (subcritical flow, $y > y_c$).
    *   Negative if $Fr > 1$ (supercritical flow, $y < y_c$).

**Combinations leading to $\frac{dy}{dx}$:**

1.  **Mild Slope ($S_0 < S_c \implies y_n > y_c$):**
    *   **M1:** $y > y_n > y_c$.
        *   $S_0 - S_f < 0$ (since $y > y_n \implies S_f > S_0$).
        *   $1 - Fr^2 > 0$ (since $y > y_c$, subcritical).
        *   $\frac{dy}{dx} = \frac{(-)}{(+)} = (-)$. Depth decreases. Water surface approaches $y_n$ from above.
    *   **M2:** $y_n > y > y_c$.
        *   $S_0 - S_f > 0$ (since $y < y_n \implies S_f < S_0$).
        *   $1 - Fr^2 > 0$ (since $y > y_c$, subcritical).
        *   $\frac{dy}{dx} = \frac{(+)}{(+)} = (+)$. Depth increases. Water surface approaches $y_n$ from below.
    *   **M3:** $y_c > y_n > y$. (This is where the initial description was confused. M3 is when $y_n > y_c > y$ for mild slope. This means $y$ is below $y_c$ and below $y_n$).
        *   Let's re-check: For Mild slope, $y_n > y_c$.
        *   **M1:** $y > y_n$. So $y > y_n > y_c$. Subcritical. $S_0-S_f < 0$, $1-Fr^2 > 0$. $dy/dx < 0$. (Decreasing depth, approaching $y_n$ from above).
        *   **M2:** $y_n > y > y_c$. Subcritical. $S_0-S_f > 0$, $1-Fr^2 > 0$. $dy/dx > 0$. (Increasing depth, approaching $y_n$ from below).
        *   **M3:** $y_n > y_c > y$. Supercritical. $S_0-S_f > 0$, $1-Fr^2 < 0$. $dy/dx < 0$. (Decreasing depth, approaching $y_c$ from above).

2.  **Steep Slope ($S_0 > S_c \implies y_n < y_c$):**
    *   **S1:** $y > y_c > y_n$. Subcritical.
        *   $S_0 - S_f < 0$ (since $y > y_n$, $S_f > S_0$).
        *   $1 - Fr^2 > 0$ (since $y > y_c$, subcritical).
        *   $\frac{dy}{dx} = \frac{(-)}{(+)} = (-)$. Depth decreases. Water surface approaches $y_n$ from above.
    *   **S2:** $y_c > y > y_n$. Subcritical (this is wrong, $y_c > y > y_n$ is not possible as $y_c > y_n$). Let's correct.
        *   **S1:** $y > y_c$. So $y > y_c > y_n$. Subcritical. $S_0-S_f < 0$, $1-Fr^2 > 0$. $dy/dx < 0$. (Decreasing depth, approaching $y_n$ from above).
        *   **S2:** $y_c > y > y_n$. Subcritical. $S_0-S_f > 0$, $1-Fr^2 > 0$. $dy/dx > 0$. (Increasing depth, approaching $y_c$ from below).
        *   **S3:** $y_c > y_n > y$. Supercritical. $S_0-S_f > 0$, $1-Fr^2 < 0$. $dy/dx < 0$. (Decreasing depth, approaching $y_n$ from above).

3.  **Critical Slope ($S_0 = S_c \implies y_n = y_c$):**
    *   **C1:** $y > y_n = y_c$. Subcritical.
        *   $S_0 - S_f < 0$ (since $y > y_n$).
        *   $1 - Fr^2 > 0$ (since $y > y_c$).
        *   $\frac{dy}{dx} = \frac{(-)}{(+)} = (-)$. Depth decreases towards $y_n$.
    *   **C2:** $y_n = y_c > y$. Supercritical.
        *   $S_0 - S_f > 0$ (since $y < y_n$).
        *   $1 - Fr^2 < 0$ (since $y < y_c$).
        *   $\frac{dy}{dx} = \frac{(+)}{(-)} = (-)$. Depth decreases towards $y_n$.

4.  **Horizontal Slope ($S_0 = 0 \implies y_n \to \infty$, $y_c$ exists):**
    *   **H1:** $y > y_c$. Subcritical.
        *   $S_0 - S_f = -S_f < 0$.
        *   $1 - Fr^2 > 0$ (since $y > y_c$).
        *   $\frac{dy}{dx} = \frac{(-)}{(+)} = (-)$. Depth decreases, approaching $y_c$.
    *   **H2:** $y_c > y$. Supercritical.
        *   $S_0 - S_f = -S_f < 0$.
        *   $1 - Fr^2 < 0$ (since $y < y_c$).
        *   $\frac{dy}{dx} = \frac{(-)}{(-)} = (+)$. Depth increases, approaching $y_c$.

5.  **Adverse Slope ($S_0 < 0 \implies y_n \to \infty$, $y_c$ exists):**
    *   **A1:** $y > y_c$. Subcritical.
        *   $S_0 - S_f < 0$ (since $S_0$ is negative and $S_f$ is positive).
        *   $1 - Fr^2 > 0$ (since $y > y_c$).
        *   $\frac{dy}{dx} = \frac{(-)}{(+)} = (-)$. Depth decreases, approaching $y_c$.
    *   **A2:** $y_c > y$. Supercritical.
        *   $S_0 - S_f < 0$.
        *   $1 - Fr^2 < 0$ (since $y < y_c$).
        *   $\frac{dy}{dx} = \frac{(-)}{(-)} = (+)$. Depth increases, approaching $y_c$.

**Summary of Profile Behavior:**

| Slope Type | Condition            | $\frac{dy}{dx}$ | Profile | Depth Trend                 | Approaching Depth |
| :--------- | :------------------- | :-------------- | :------ | :-------------------------- | :---------------- |
| Mild       | $y > y_n > y_c$      | -               | M1      | Decreasing                  | $y_n$             |
| Mild       | $y_n > y > y_c$      | +               | M2      | Increasing                  | $y_n$             |
| Mild       | $y_n > y_c > y$      | -               | M3      | Decreasing                  | $y_c$             |
| Steep      | $y > y_c > y_n$      | -               | S1      | Decreasing                  | $y_n$             |
| Steep      | $y_c > y > y_n$      | +               | S2      | Increasing                  | $y_c$             |
| Steep      | $y_c > y_n > y$      | -               | S3      | Decreasing                  | $y_n$             |
| Critical   | $y > y_n = y_c$      | -               | C1      | Decreasing                  | $y_n$             |
| Critical   | $y_n = y_c > y$      | -               | C2      | Decreasing                  | $y_n$             |
| Horizontal | $y > y_c$            | -               | H1      | Decreasing                  | $y_c$             |
| Horizontal | $y_c > y$            | +               | H2      | Increasing                  | $y_c$             |
| Adverse    | $y > y_c$            | -               | A1      | Decreasing                  | $y_c$             |
| Adverse    | $y_c > y$            | +               | A2      | Increasing                  | $y_c$             |

*Note: For S2 and C2, the flow is subcritical and approaches critical depth. For M3, S3, C2, H2, A2, the flow is supercritical and approaches critical or normal depth.*

---

### 4. The Standard Step Method (SSM)

The Standard Step Method is a numerical technique used to calculate water surface profiles for GVF. It's an iterative procedure that divides the channel into a series of reaches (segments) and calculates the water surface elevation at the end of each reach.

**4.1 Fundamental Principle:**
The SSM is based on solving the GVF differential equation $\frac{dy}{dx} = \frac{S_0 - S_f}{1 - Fr^2}$ numerically. It uses a finite difference approach.

**4.2 Key Concepts:**

*   **Reach:** A segment of the channel between two cross-sections. The length of the reach is $dx$.
*   **Spatial Step ($dx$):** The length of the reach. The choice of $dx$ affects the accuracy and computational effort. Smaller $dx$ leads to higher accuracy but more iterations.
*   **Energy Correction Factor ($\alpha$):** Accounts for the non-uniform distribution of velocity across a cross-section. For GVF analysis, it's often assumed to be 1.0 to simplify calculations, but it can be calculated if velocity distribution data is available. $\alpha = \frac{\int_A v^3 dA}{V^3 A}$.
*   **Friction Slope ($S_f$):** The slope of the energy grade line. It's typically calculated using Manning's equation:
    $V = \frac{k}{n} R^{2/3} S_f^{1/2}$
    Where:
    *   $k$ = 1.0 (SI units) or 1.49 (US customary units)
    *   $n$ = Manning's roughness coefficient
    *   $R$ = Hydraulic radius ($A/P$, where $P$ is wetted perimeter)
    *   $S_f$ = $\frac{n^2 V^2}{k^2 R^{4/3}}$

**4.3 The Standard Step Equation:**
We can derive a discrete form of the GVF equation to calculate the depth change over a reach $dx$.
Starting from the energy equation between two cross-sections $i$ and $i+1$ separated by a distance $dx$:

$E_i + h_L = E_{i+1}$

Where:
*   $E_i = y_i + \alpha \frac{V_i^2}{2g}$
*   $E_{i+1} = y_{i+1} + \alpha \frac{V_{i+1}^2}{2g}$
*   $h_L = \bar{S}_f dx$, where $\bar{S}_f$ is the average friction slope over the reach.

$y_i + \alpha \frac{V_i^2}{2g} = y_{i+1} + \alpha \frac{V_{i+1}^2}{2g} + \bar{S}_f dx$

Rearranging to solve for $y_{i+1}$ (assuming we know $y_i$ and want to find $y_{i+1}$):

$y_{i+1} = y_i + \alpha \frac{V_i^2}{2g} - \alpha \frac{V_{i+1}^2}{2g} - \bar{S}_f dx$

This form requires knowing $y_{i+1}$ to calculate $V_{i+1}$ and $\bar{S}_f$, making it implicit. A common approach is to use an **average friction slope** for the reach, or assume the friction slope at the upstream section approximates the average.

A more widely used form of the standard step equation directly calculates the reach length ($dx$) required to change the water surface elevation by a small amount. However, it's more common to solve for the depth at the next section.

**Iterative Procedure for Forward Calculation (From Upstream to Downstream):**

Let's assume we know the water depth $y_i$ at cross-section $i$. We want to find the depth $y_{i+1}$ at cross-section $i+1$, which is a distance $dx$ downstream.

1.  **Knowns at Section $i$:**
    *   $y_i$ (water depth)
    *   $A_i$ (cross-sectional area)
    *   $P_i$ (wetted perimeter)
    *   $R_i = A_i / P_i$ (hydraulic radius)
    *   $V_i = Q / A_i$ (average velocity)
    *   $Fr_i = V_i / \sqrt{g R_i'}$ (Froude number, where $R_i'$ is hydraulic depth $A_i/B_i$)
    *   $S_{f,i}$ (friction slope at section $i$, calculated using Manning's)

2.  **Estimate for Section $i+1$:**
    *   **Guess $y_{i+1}$**: A reasonable guess is $y_{i+1} \approx y_i$ or $y_{i+1} \approx y_i - (S_0 - S_{f,i}) dx$. For subcritical flow, $y$ tends to increase downstream, so we might guess $y_{i+1} > y_i$. For supercritical flow, $y$ tends to decrease, so $y_{i+1} < y_i$.

3.  **Calculate Properties at Section $i+1$ based on the guess of $y_{i+1}$:**
    *   $A_{i+1}$ (using the assumed $y_{i+1}$)
    *   $P_{i+1}$ (using the assumed $y_{i+1}$)
    *   $R_{i+1} = A_{i+1} / P_{i+1}$
    *   $V_{i+1} = Q / A_{i+1}$
    *   $Fr_{i+1} = V_{i+1} / \sqrt{g R_{i+1}'}$ (where $R_{i+1}' = A_{i+1}/B_{i+1}$)
    *   $S_{f,i+1}$ (using Manning's equation)

4.  **Calculate Average Friction Slope ($\bar{S}_f$):**
    *   $\bar{S}_f = \frac{S_{f,i} + S_{f,i+1}}{2}$ (using average of slopes at $i$ and $i+1$)
    *   Alternatively, use a weighted average or assume $S_{f,i+1} \approx S_{f,i}$ for small $dx$.

5.  **Apply the Standard Step Equation:**
    $y_{i+1} = y_i + \alpha \frac{V_i^2}{2g} - \alpha \frac{V_{i+1}^2}{2g} - \bar{S}_f dx$

6.  **Iterate:**
    *   Compare the calculated $y_{i+1}$ with the guessed $y_{i+1}$. If they are not close enough (within a tolerance), use the calculated $y_{i+1}$ as the new guess and repeat steps 3-5 until convergence.

**4.4 Backward Calculation (From Downstream to Upstream):**

When a control section (like a weir or gate) dictates the water surface upstream, a backward calculation is necessary. The equation is rearranged to solve for $y_i$ given $y_{i+1}$:

$y_i = y_{i+1} + \alpha \frac{V_{i+1}^2}{2g} - \alpha \frac{V_i^2}{2g} + \bar{S}_f dx$

The iterative process is similar, but we guess $y_i$ and calculate it, iterating until convergence.

**4.5 Energy Correction Factor ($\alpha$) and Reach Length ($dx$):**

*   **Energy Correction Factor ($\alpha$):**
    *   It's often assumed $\alpha = 1.0$ for simplicity, especially in introductory contexts or when detailed velocity profiles are unavailable.
    *   When velocity variations are significant, $\alpha$ can be greater than 1.0. For wide rectangular channels, $\alpha$ is often close to 1.0. For non-rectangular channels, it can be larger.
    *   A common approach is to use $\alpha = 1.0$ unless otherwise specified.

*   **Reach Length ($dx$):**
    *   The choice of $dx$ is a trade-off between accuracy and computational effort.
    *   For highly varying profiles (e.g., near hydraulic jumps or control structures), smaller $dx$ is preferred.
    *   For gently sloping profiles, larger $dx$ can be used.
    *   A common approach is to set a target change in water surface elevation or depth per step, which implicitly determines $dx$.

**4.6 Practical Implementation:**

The SSM is typically implemented using spreadsheets or computer programs due to the repetitive nature of the calculations. The channel is divided into segments based on available cross-section data.

**Steps in a typical SSM calculation:**

1.  **Define Channel Geometry:** Cross-section data (area, wetted perimeter, top width) at various locations along the channel.
2.  **Determine Flow Conditions:** Discharge ($Q$), bed slope ($S_0$), and Manning's roughness coefficient ($n$).
3.  **Identify Boundary Conditions:** Upstream or downstream control, normal depth, critical depth.
4.  **Choose Direction of Calculation:** Forward (upstream to downstream) or Backward (downstream to upstream).
5.  **Select an Initial Cross-Section and Depth:**
    *   If calculating forward from upstream, you might start with normal depth or a specified depth.
    *   If calculating backward from a control, you start with the depth at the control.
6.  **Iteratively Calculate Depth and Energy:**
    *   For each reach, calculate $y_{i+1}$ (or $y_i$ if calculating backward) using the standard step equation.
    *   Repeat until the end of the desired reach is reached or convergence criteria are met.

---

### 5. Assumptions and Limitations of the SSM

**5.1 Assumptions:**

*   **Gradually Varied Flow:** The rate of change of depth and velocity is small over the length of a reach.
*   **One-Dimensional Flow:** Velocity and depth are averaged over each cross-section. Vertical and lateral variations are neglected.
*   **Constant Discharge ($Q$):** The flow rate is constant throughout the reach being analyzed.
*   **Negligible Cross-Sectional Velocity Components:** Flow is primarily along the longitudinal axis.
*   **Steady Flow:** The flow conditions at each cross-section do not change with time.
*   **Constant Roughness Coefficient ($n$):** Manning's $n$ is assumed constant for a given reach or the entire channel.
*   **Constant Bed Slope ($S_0$):** Assumed constant between adjacent cross-sections.
*   **Negligible Hydrostatic Pressure Distribution:** The vertical acceleration is small, so pressure is approximately hydrostatic.
*   **Velocity Distribution Coefficient ($\alpha$):** Often assumed to be 1.0 for simplicity.

**5.2 Limitations:**

*   **Accuracy near Rapid Changes:** The method is less accurate in regions of Rapidly Varied Flow (RVF), such as hydraulic jumps, contractions, or expansions where the GVF assumptions are violated.
*   **Sensitivity to Reach Length:** The choice of $dx$ significantly impacts accuracy. Very large $dx$ can lead to large errors, while very small $dx$ can be computationally intensive.
*   **Boundary Condition Dependency:** The accuracy of the entire profile calculation depends heavily on the accuracy of the boundary condition specified (e.g., the depth at the control section).
*   **Non-uniform Velocity:** Assuming $\alpha=1$ can introduce errors if the velocity distribution is highly non-uniform.
*   **Unsteady Flow:** The method is not directly applicable to unsteady flow conditions without modifications.
*   **Non-Prismatic Channels:** While adaptable to non-prismatic channels, the calculation of geometric properties ($A$, $P$, $B$, $R$) at intermediate points can be complex.

---

### 6. Examples and Practice Questions

**Example 1: Calculating the Water Surface Profile in a Rectangular Channel**

**Problem:**
A rectangular channel is 5 m wide and has a slope of $S_0 = 0.001$. It carries a discharge of $Q = 10 \text{ m}^3/\text{s}$. The Manning's roughness coefficient is $n = 0.015$. The normal depth for this flow is $y_n = 1.5$ m. The critical depth is $y_c = 0.8$ m. The channel transitions to a mild slope downstream, where the water surface elevation is controlled by a weir, resulting in a depth of $y_{control} = 1.3$ m at a section located 100 m upstream of the section where $y = 1.5$ m. Calculate the water surface elevation at a section 100 m further upstream using the Standard Step Method.

**Solution Approach:**

This is a backward calculation problem (from control upstream). We know $y$ at the control section and want to find $y$ at a section 100 m upstream. The profile is likely M2 since $y_n (1.5) > y_c (0.8)$ (Mild slope) and the control depth $y_{control} (1.3)$ is between $y_n$ and $y_c$. The upstream section will also be in the M2 regime.

Let's denote the control section as section 2 ($y_2 = 1.3$ m) and the upstream section as section 1 ($y_1 = ?$). The distance $dx = 100$ m.

**Calculations for Section 2 ($y_2 = 1.3$ m):**
*   $Q = 10 \text{ m}^3/\text{s}$
*   $B_2 = 5$ m
*   $A_2 = B_2 \times y_2 = 5 \times 1.3 = 6.5 \text{ m}^2$
*   $P_2 = B_2 + 2y_2 = 5 + 2(1.3) = 7.6$ m
*   $R_2 = A_2 / P_2 = 6.5 / 7.6 = 0.855$ m
*   $V_2 = Q / A_2 = 10 / 6.5 = 1.538$ m/s
*   $S_{f,2} = \frac{n^2 V_2^2}{R_2^{4/3}} = \frac{(0.015)^2 (1.538)^2}{(0.855)^{4/3}} = \frac{0.000225 \times 2.365}{0.808} \approx 0.000656$
*   $Fr_2 = \frac{V_2}{\sqrt{g (A_2/B_2)}} = \frac{1.538}{\sqrt{9.81 \times (6.5/5)}} = \frac{1.538}{\sqrt{12.75}} = \frac{1.538}{3.57} \approx 0.431$ (Subcritical)
*   Assume $\alpha_2 = 1.0$
*   $E_2 = y_2 + \alpha_2 \frac{V_2^2}{2g} = 1.3 + 1.0 \times \frac{(1.538)^2}{2 \times 9.81} = 1.3 + \frac{2.365}{19.62} = 1.3 + 0.121 = 1.421$ m

**Standard Step Method (Backward Calculation):**
We want to find $y_1$ at section 1, which is $dx = 100$ m upstream.
The equation is: $y_1 = y_2 + \alpha_2 \frac{V_2^2}{2g} - \alpha_1 \frac{V_1^2}{2g} + \bar{S}_f dx$
Rearranging for $y_1$ requires iteration since $V_1$, $A_1$, $P_1$, $R_1$, $S_{f,1}$, $\alpha_1$, $Fr_1$ all depend on $y_1$.

**Iteration Process:**

1.  **Guess $y_1$:** Let's guess $y_1 = 1.4$ m (slightly higher than $y_2$, as it's upstream in subcritical flow).
    *   $A_1 = 5 \times 1.4 = 7.0 \text{ m}^2$
    *   $P_1 = 5 + 2(1.4) = 7.8$ m
    *   $R_1 = 7.0 / 7.8 = 0.897$ m
    *   $V_1 = 10 / 7.0 = 1.429$ m/s
    *   $S_{f,1} = \frac{(0.015)^2 (1.429)^2}{(0.897)^{4/3}} = \frac{0.000225 \times 2.042}{0.852} \approx 0.000539$
    *   Assume $\alpha_1 = 1.0$
    *   $\bar{S}_f = \frac{S_{f,1} + S_{f,2}}{2} = \frac{0.000539 + 0.000656}{2} \approx 0.0005975$
    *   Calculate required $y_1$ using the SSM equation:
        $y_1^{calc} = 1.3 + 1.0 \times \frac{(1.538)^2}{2 \times 9.81} - 1.0 \times \frac{(1.429)^2}{2 \times 9.81} + 0.0005975 \times 100$
        $y_1^{calc} = 1.3 + 0.121 - 0.104 + 0.05975 = 1.37675$ m

2.  **Compare and Re-guess:** Guessed $y_1 = 1.4$ m, calculated $y_1^{calc} = 1.37675$ m. The difference is about 0.023 m. Let's use $y_1 = 1.377$ m for the next iteration.

3.  **Iteration 2 (Guess $y_1 = 1.377$ m):**
    *   $A_1 = 5 \times 1.377 = 6.885 \text{ m}^2$
    *   $P_1 = 5 + 2(1.377) = 7.754$ m
    *   $R_1 = 6.885 / 7.754 = 0.888$ m
    *   $V_1 = 10 / 6.885 = 1.452$ m/s
    *   $S_{f,1} = \frac{(0.015)^2 (1.452)^2}{(0.888)^{4/3}} = \frac{0.000225 \times 2.108}{0.838} \approx 0.000568$
    *   $\bar{S}_f = \frac{0.000568 + 0.000656}{2} \approx 0.000612$
    *   Calculate required $y_1$:
        $y_1^{calc} = 1.3 + 0.121 - 1.0 \times \frac{(1.452)^2}{2 \times 9.81} + 0.000612 \times 100$
        $y_1^{calc} = 1.3 + 0.121 - 0.108 + 0.0612 = 1.3742$ m

4.  **Compare and Re-guess:** Guessed $y_1 = 1.377$ m, calculated $y_1^{calc} = 1.3742$ m. The difference is about 0.0028 m. This is reasonably close.
    The water surface elevation at the upstream section is approximately $1.374$ m.

**(Note: For higher accuracy, more iterations or a numerical solver would be used. Also, the $Fr$ number is calculated for reference but not directly used in this backward standard step equation formulation. The key is correctly calculating $S_f$ and energy terms.)**

---

**Practice Question 1:**

A rectangular channel 4 m wide and with a Manning's $n = 0.02$ carries a discharge of $Q = 15 \text{ m}^3/\text{s}$. The bed slope is $S_0 = 0.002$. The normal depth ($y_n$) is 1.2 m, and the critical depth ($y_c$) is 0.7 m.

Calculate the depth of flow at a section 50 m downstream of a control structure that maintains a depth of $y = 1.4$ m at the structure. Assume $\alpha = 1.0$. Use the Standard Step Method (forward calculation).

**Answer:**

**Knowns:**
*   Channel width, $B = 4$ m
*   Manning's $n = 0.02$
*   Discharge, $Q = 15 \text{ m}^3/\text{s}$
*   Bed slope, $S_0 = 0.002$
*   Normal depth, $y_n = 1.2$ m
*   Critical depth, $y_c = 0.7$ m
*   $g = 9.81 \text{ m/s}^2$
*   Reach length, $dx = 50$ m
*   Control depth (Section 1), $y_1 = 1.4$ m

**Analysis:**
*   The slope is mild ($S_0 < S_c$ since $y_n > y_c$).
*   The control depth $y_1 = 1.4$ m is greater than $y_n = 1.2$ m. This indicates an M1 profile.
*   We expect the depth to decrease downstream in an M1 profile, approaching $y_n$.

**Calculations for Section 1 ($y_1 = 1.4$ m):**
*   $A_1 = B \times y_1 = 4 \times 1.4 = 5.6 \text{ m}^2$
*   $P_1 = B + 2y_1 = 4 + 2(1.4) = 6.8$ m
*   $R_1 = A_1 / P_1 = 5.6 / 6.8 = 0.8235$ m
*   $V_1 = Q / A_1 = 15 / 5.6 = 2.679$ m/s
*   $S_{f,1} = \frac{n^2 V_1^2}{R_1^{4/3}} = \frac{(0.02)^2 (2.679)^2}{(0.8235)^{4/3}} = \frac{0.0004 \times 7.177}{0.765} \approx 0.00374$
*   $Fr_1 = \frac{V_1}{\sqrt{g (A_1/B)}} = \frac{2.679}{\sqrt{9.81 \times (5.6/4)}} = \frac{2.679}{\sqrt{13.734}} = \frac{2.679}{3.706} \approx 0.723$ (Subcritical)
*   $E_1 = y_1 + \alpha \frac{V_1^2}{2g} = 1.4 + 1.0 \times \frac{(2.679)^2}{2 \times 9.81} = 1.4 + \frac{7.177}{19.62} = 1.4 + 0.366 = 1.766$ m

**Standard Step Method (Forward Calculation):**
We want to find $y_2$ at section 2, $dx = 50$ m downstream.
The equation is: $y_2 = y_1 + \alpha \frac{V_1^2}{2g} - \alpha \frac{V_2^2}{2g} - \bar{S}_f dx$
Rearranging for $y_2$ requires iteration since $V_2$, $A_2$, $P_2$, $R_2$, $S_{f,2}$, $\alpha_2$, $Fr_2$ all depend on $y_2$.

**Iteration Process:**

1.  **Guess $y_2$:** Since it's M1, depth should decrease. Let's guess $y_2 = 1.3$ m (lower than $y_1 = 1.4$ m).
    *   $A_2 = 4 \times 1.3 = 5.2 \text{ m}^2$
    *   $P_2 = 4 + 2(1.3) = 6.6$ m
    *   $R_2 = 5.2 / 6.6 = 0.7879$ m
    *   $V_2 = 15 / 5.2 = 2.885$ m/s
    *   $S_{f,2} = \frac{(0.02)^2 (2.885)^2}{(0.7879)^{4/3}} = \frac{0.0004 \times 8.323}{0.734} \approx 0.00454$
    *   $\bar{S}_f = \frac{S_{f,1} + S_{f,2}}{2} = \frac{0.00374 + 0.00454}{2} \approx 0.00414$
    *   Calculate required $y_2$ using the SSM equation:
        $y_2^{calc} = 1.4 + 1.0 \times \frac{(2.679)^2}{2 \times 9.81} - 1.0 \times \frac{(2.885)^2}{2 \times 9.81} - 0.00414 \times 50$
        $y_2^{calc} = 1.4 + 0.366 - 0.427 - 0.207 = 1.136$ m

2.  **Compare and Re-guess:** Guessed $y_2 = 1.3$ m, calculated $y_2^{calc} = 1.136$ m. The guess was too high. Let's try $y_2 = 1.15$ m for the next iteration.

3.  **Iteration 2 (Guess $y_2 = 1.15$ m):**
    *   $A_2 = 4 \times 1.15 = 4.6 \text{ m}^2$
    *   $P_2 = 4 + 2(1.15) = 6.3$ m
    *   $R_2 = 4.6 / 6.3 = 0.7302$ m
    *   $V_2 = 15 / 4.6 = 3.261$ m/s
    *   $S_{f,2} = \frac{(0.02)^2 (3.261)^2}{(0.7302)^{4/3}} = \frac{0.0004 \times 10.634}{0.671} \approx 0.00633$
    *   $\bar{S}_f = \frac{0.00374 + 0.00633}{2} \approx 0.005035$
    *   Calculate required $y_2$:
        $y_2^{calc} = 1.4 + 0.366 - 1.0 \times \frac{(3.261)^2}{2 \times 9.81} - 0.005035 \times 50$
        $y_2^{calc} = 1.4 + 0.366 - 0.545 - 0.25175 = 0.970$ m

4.  **Compare and Re-guess:** Guessed $y_2 = 1.15$ m, calculated $y_2^{calc} = 0.970$ m. The guess was still too high, but we are getting closer to the normal depth of 1.2 m. Let's try $y_2 = 1.0$ m for the next iteration.

5.  **Iteration 3 (Guess $y_2 = 1.0$ m):**
    *   $A_2 = 4 \times 1.0 = 4.0 \text{ m}^2$
    *   $P_2 = 4 + 2(1.0) = 6.0$ m
    *   $R_2 = 4.0 / 6.0 = 0.6667$ m
    *   $V_2 = 15 / 4.0 = 3.75$ m/s
    *   $S_{f,2} = \frac{(0.02)^2 (3.75)^2}{(0.6667)^{4/3}} = \frac{0.0004 \times 14.0625}{0.577} \approx 0.00975$
    *   $\bar{S}_f = \frac{0.00374 + 0.00975}{2} \approx 0.006745$
    *   Calculate required $y_2$:
        $y_2^{calc} = 1.4 + 0.366 - 1.0 \times \frac{(3.75)^2}{2 \times 9.81} - 0.006745 \times 50$
        $y_2^{calc} = 1.4 + 0.366 - 0.715 - 0.33725 = 0.71375$ m

6.  **Compare and Re-guess:** Guessed $y_2 = 1.0$ m, calculated $y_2^{calc} = 0.714$ m. The guess was too high again. Notice that the calculated depth is approaching $y_c = 0.7$ m. This means the reach is significant enough to cause a transition towards critical depth if it were steep. However, it's a mild slope.

Let's restart with a better first guess, recognizing the target is below 1.4. Since normal depth is 1.2, the depth will be between 1.4 and 1.2.

**Revised Iteration 1 (Guess $y_2 = 1.25$ m):**
*   $A_2 = 4 \times 1.25 = 5.0 \text{ m}^2$
*   $P_2 = 4 + 2(1.25) = 6.5$ m
*   $R_2 = 5.0 / 6.5 = 0.7692$ m
*   $V_2 = 15 / 5.0 = 3.0$ m/s
*   $S_{f,2} = \frac{(0.02)^2 (3.0)^2}{(0.7692)^{4/3}} = \frac{0.0004 \times 9.0}{0.717} \approx 0.00502$
*   $\bar{S}_f = \frac{0.00374 + 0.00502}{2} \approx 0.00438$
*   Calculate required $y_2$:
    $y_2^{calc} = 1.4 + 0.366 - 1.0 \times \frac{(3.0)^2}{2 \times 9.81} - 0.00438 \times 50$
    $y_2^{calc} = 1.4 + 0.366 - 0.459 - 0.219 = 1.088$ m

**Revised Iteration 2 (Guess $y_2 = 1.1$ m):**
*   $A_2 = 4 \times 1.1 = 4.4 \text{ m}^2$
*   $P_2 = 4 + 2(1.1) = 6.2$ m
*   $R_2 = 4.4 / 6.2 = 0.7097$ m
*   $V_2 = 15 / 4.4 = 3.409$ m/s
*   $S_{f,2} = \frac{(0.02)^2 (3.409)^2}{(0.7097)^{4/3}} = \frac{0.0004 \times 11.621}{0.647} \approx 0.00718$
*   $\bar{S}_f = \frac{0.00374 + 0.00718}{2} \approx 0.00546$
*   Calculate required $y_2$:
    $y_2^{calc} = 1.4 + 0.366 - 1.0 \times \frac{(3.409)^2}{2 \times 9.81} - 0.00546 \times 50$
    $y_2^{calc} = 1.4 + 0.366 - 0.592 - 0.273 = 0.901$ m

The depth is decreasing rapidly. The next guess should be lower.
**Revised Iteration 3 (Guess $y_2 = 0.9$ m):**
*   $A_2 = 4 \times 0.9 = 3.6 \text{ m}^2$
*   $P_2 = 4 + 2(0.9) = 5.8$ m
*   $R_2 = 3.6 / 5.8 = 0.6207$ m
*   $V_2 = 15 / 3.6 = 4.167$ m/s
*   $S_{f,2} = \frac{(0.02)^2 (4.167)^2}{(0.6207)^{4/3}} = \frac{0.0004 \times 17.362}{0.528} \approx 0.01315$
*   $\bar{S}_f = \frac{0.00374 + 0.01315}{2} \approx 0.008445$
*   Calculate required $y_2$:
    $y_2^{calc} = 1.4 + 0.366 - 1.0 \times \frac{(4.167)^2}{2 \times 9.81} - 0.008445 \times 50$
    $y_2^{calc} = 1.4 + 0.366 - 0.889 - 0.42225 = 0.45475$ m

This is very close to critical depth ($y_c = 0.7$ m). My initial guess of $y_2 = 1.3$ was reasonable. Let's recheck the first iteration's calculation.

Let's re-evaluate the equation form: $y_{i+1} = y_i + E_i - E_{i+1} - \bar{S}_f dx$
Or using the direct GVF equation derived for discrete steps:
$y_{i+1} = y_i + \frac{(S_0 - \bar{S}_f) dx}{1 - \bar{Fr}^2}$ is not the standard step.

The SSM equation: $y_{i+1} = y_i + \frac{\alpha}{2g}(V_i^2 - V_{i+1}^2) - \bar{S}_f dx$

Let's retrace with a better iterative approach:
**Section 1: $y_1 = 1.4$ m, $E_1 = 1.766$ m, $S_{f,1} = 0.00374$**

**Iteration 1 for Section 2:**
*   **Guess $y_2 = 1.3$ m**
    *   $A_2=5.2, P_2=6.8, R_2=0.7879, V_2=2.885, S_{f,2}=0.00454$
    *   $\bar{S}_f = (0.00374 + 0.00454)/2 = 0.00414$
    *   $E_2 = y_2 + \alpha V_2^2/(2g) = 1.3 + 1.0 * (2.885)^2 / (2*9.81) = 1.3 + 0.427 = 1.727$ m
    *   $E_{i+1}^{calc} = E_i - \bar{S}_f dx = 1.766 - 0.00414 * 50 = 1.766 - 0.207 = 1.559$ m
    *   Now, find $y_2$ for $E_2 = 1.559$ m: $1.559 = y_2 + V_2^2/(2g) = y_2 + (15/A_2)^2/(2g)$
    *   $1.559 = y_2 + (15/(4y_2))^2/(2g)$
    *   $1.559 = y_2 + 225/(32y_2^2)$
    *   Rearrange into a cubic equation for $y_2$: $y_2^3 \times 1.559 - y_2^4 + 225/32 = 0$ - this is hard to solve.

Let's use the implicit form: $y_2 = y_1 + E_1 - E_2 - \bar{S}_f dx$. We need $E_2$ which depends on $y_2$.
$y_2 = y_1 + \frac{V_1^2}{2g} - \frac{V_2^2}{2g} - \bar{S}_f dx$
$y_2 = 1.4 + 0.366 - \frac{(15/(4y_2))^2}{2 \times 9.81} - 0.00414 \times 50$
$y_2 = 1.766 - \frac{225}{784.8 y_2^2} - 0.207$
$y_2 = 1.559 - 0.2866 / y_2^2$
$y_2 + 0.2866 / y_2^2 = 1.559$

**Iterating for $y_2$ using the refined equation:**
*   **Guess $y_2 = 1.3$ m**
    $1.3 + 0.2866 / (1.3)^2 = 1.3 + 0.2866 / 1.69 = 1.3 + 0.1695 = 1.4695$. This is less than 1.559. We need $y_2$ to be higher.
*   **Guess $y_2 = 1.35$ m**
    $1.35 + 0.2866 / (1.35)^2 = 1.35 + 0.2866 / 1.8225 = 1.35 + 0.1572 = 1.5072$. Still less than 1.559.
*   **Guess $y_2 = 1.38$ m**
    $1.38 + 0.2866 / (1.38)^2 = 1.38 + 0.2866 / 1.9044 = 1.38 + 0.1505 = 1.5305$. Closer.
*   **Guess $y_2 = 1.40$ m**
    $1.40 + 0.2866 / (1.40)^2 = 1.40 + 0.2866 / 1.96 = 1.40 + 0.1462 = 1.5462$. Closer.
*   **Guess $y_2 = 1.41$ m**
    $1.41 + 0.2866 / (1.41)^2 = 1.41 + 0.2866 / 1.9881 = 1.41 + 0.1441 = 1.5541$. Very close to 1.559.
*   **Guess $y_2 = 1.415$ m**
    $1.415 + 0.2866 / (1.415)^2 = 1.415 + 0.2866 / 2.0022 = 1.415 + 0.1431 = 1.5581$. Very close to 1.559.

**Final Answer for Practice Question 1:** The depth of flow at the section 50 m downstream is approximately **1.415 m**.

---

**Practice Question 2:**

A wide rectangular channel ($B=10$ m) with $n=0.018$ carries $Q=5 \text{ m}^3/\text{s}$. The bed slope is $S_0=0.0005$. Calculate the water surface elevation at a section 150 m upstream of a control section where the depth is $y=0.6$ m. Assume $\alpha=1.0$. The normal depth for this channel is $y_n = 2.0$ m, and the critical depth is $y_c = 0.3$ m.

**Answer:**

**Knowns:**
*   Channel width, $B = 10$ m
*   Manning's $n = 0.018$
*   Discharge, $Q = 5 \text{ m}^3/\text{s}$
*   Bed slope, $S_0 = 0.0005$
*   Normal depth, $y_n = 2.0$ m
*   Critical depth, $y_c = 0.3$ m
*   $g = 9.81 \text{ m/s}^2$
*   Reach length, $dx = 150$ m
*   Control depth (Section 2), $y_2 = 0.6$ m

**Analysis:**
*   The slope is mild ($S_0 < S_c$ since $y_n > y_c$).
*   The control depth $y_2 = 0.6$ m is greater than $y_c = 0.3$ m and less than $y_n = 2.0$ m. This indicates an M2 profile.
*   We expect the depth to increase upstream in an M2 profile, approaching $y_n$.

**Calculations for Section 2 ($y_2 = 0.6$ m):**
*   $A_2 = B \times y_2 = 10 \times 0.6 = 6.0 \text{ m}^2$
*   $P_2 = B + 2y_2 = 10 + 2(0.6) = 11.2$ m
*   $R_2 = A_2 / P_2 = 6.0 / 11.2 = 0.5357$ m
*   $V_2 = Q / A_2 = 5 / 6.0 = 0.8333$ m/s
*   $S_{f,2} = \frac{n^2 V_2^2}{R_2^{4/3}} = \frac{(0.018)^2 (0.8333)^2}{(0.5357)^{4/3}} = \frac{0.000324 \times 0.6944}{0.430} \approx 0.000524$
*   $Fr_2 = \frac{V_2}{\sqrt{g (A_2/B)}} = \frac{0.8333}{\sqrt{9.81 \times (6.0/10)}} = \frac{0.8333}{\sqrt{5.886}} = \frac{0.8333}{2.426} \approx 0.343$ (Subcritical)
*   $E_2 = y_2 + \alpha \frac{V_2^2}{2g} = 0.6 + 1.0 \times \frac{(0.8333)^2}{2 \times 9.81} = 0.6 + \frac{0.6944}{19.62} = 0.6 + 0.0354 = 0.6354$ m

**Standard Step Method (Backward Calculation):**
We want to find $y_1$ at section 1, $dx = 150$ m upstream.
Equation: $y_1 = y_2 + \alpha \frac{V_2^2}{2g} - \alpha \frac{V_1^2}{2g} + \bar{S}_f dx$
$y_1 = E_2 - \frac{V_1^2}{2g} + \bar{S}_f dx$
$y_1 = 0.6354 - \frac{(5/(10y_1))^2}{2 \times 9.81} + \bar{S}_f \times 150$
$y_1 = 0.6354 - \frac{0.25}{19.62 y_1^2} + \bar{S}_f \times 150$
$y_1 = 0.6354 - 0.01274 / y_1^2 + \bar{S}_f \times 150$

We need to estimate $\bar{S}_f$. Let's assume $S_{f,1} \approx S_{f,2} \approx 0.000524$.
$\bar{S}_f \approx 0.000524$.
$y_1 = 0.6354 - 0.01274 / y_1^2 + 0.000524 \times 150$
$y_1 = 0.6354 - 0.01274 / y_1^2 + 0.0786$
$y_1 = 0.714 - 0.01274 / y_1^2$
$y_1 + 0.01274 / y_1^2 = 0.714$

**Iterating for $y_1$:**
*   **Guess $y_1 = 0.7$ m** (Since it's M2, depth increases upstream from $y_2=0.6$ towards $y_n=2.0$)
    $0.7 + 0.01274 / (0.7)^2 = 0.7 + 0.01274 / 0.49 = 0.7 + 0.0260 = 0.7260$. This is slightly higher than 0.714. We need a lower $y_1$.
*   **Guess $y_1 = 0.69$ m**
    $0.69 + 0.01274 / (0.69)^2 = 0.69 + 0.01274 / 0.4761 = 0.69 + 0.02675 = 0.71675$. Closer.
*   **Guess $y_1 = 0.688$ m**
    $0.688 + 0.01274 / (0.688)^2 = 0.688 + 0.01274 / 0.4733 = 0.688 + 0.0269 = 0.7149$. Very close to 0.714.

Let's check $S_{f,1}$ with $y_1 = 0.688$:
*   $A_1 = 10 \times 0.688 = 6.88 \text{ m}^2$
*   $P_1 = 10 + 2(0.688) = 11.376$ m
*   $R_1 = 6.88 / 11.376 = 0.6048$ m
*   $V_1 = 5 / 6.88 = 0.7267$ m/s
*   $S_{f,1} = \frac{(0.018)^2 (0.7267)^2}{(0.6048)^{4/3}} = \frac{0.000324 \times 0.5281}{0.478} \approx 0.000358$

This $S_{f,1}$ is quite different from $S_{f,2}$ (0.000524). So, the initial $\bar{S}_f$ assumption might be a bit off. Let's recalculate with a better average.

**Recalculating with updated $\bar{S}_f$:**
Let's retry the iteration using the full equation and updating $\bar{S}_f$ each time.

**Section 2:** $y_2 = 0.6$ m, $E_2 = 0.6354$ m, $S_{f,2} = 0.000524$

**Iteration 1 for Section 1:**
*   **Guess $y_1 = 0.7$ m**
    *   $A_1 = 7.0, P_1 = 11.4, R_1 = 0.6140, V_1 = 0.7143$
    *   $S_{f,1} = \frac{(0.018)^2 (0.7143)^2}{(0.6140)^{4/3}} = \frac{0.000324 \times 0.5102}{0.491} \approx 0.000337$
    *   $\bar{S}_f = (0.000337 + 0.000524)/2 = 0.0004305$
    *   $E_{i+1}^{calc} = E_2 - \bar{S}_f dx = 0.6354 - 0.0004305 \times 150 = 0.6354 - 0.064575 = 0.5708$ m
    *   Find $y_1$ for $E_1 = 0.5708$ m: $0.5708 = y_1 + (5/(10y_1))^2/(2g) = y_1 + 0.01274 / y_1^2$
    *   Guess $y_1 = 0.58$ (since the calculated $E$ is lower, implies lower $y$)
        $0.58 + 0.01274 / (0.58)^2 = 0.58 + 0.01274 / 0.3364 = 0.58 + 0.0378 = 0.6178$. Still lower than 0.5708.
    *   Guess $y_1 = 0.55$
        $0.55 + 0.01274 / (0.55)^2 = 0.55 + 0.01274 / 0.3025 = 0.55 + 0.0421 = 0.5921$. Closer.
    *   Guess $y_1 = 0.54$
        $0.54 + 0.01274 / (0.54)^2 = 0.54 + 0.01274 / 0.2916 = 0.54 + 0.0437 = 0.5837$.
    *   Guess $y_1 = 0.535$
        $0.535 + 0.01274 / (0.535)^2 = 0.535 + 0.01274 / 0.2862 = 0.535 + 0.0445 = 0.5795$.
    *   Guess $y_1 = 0.53$
        $0.53 + 0.01274 / (0.53)^2 = 0.53 + 0.01274 / 0.2809 = 0.53 + 0.0453 = 0.5753$. Very close.

**Final Answer for Practice Question 2:** The depth of flow at the section 150 m upstream is approximately **0.53 m**.

---

### 7. Key Points to Remember

*   **GVF Definition:** Gradual changes in water depth along the channel.
*   **GVF Equation:** $\frac{dy}{dx} = \frac{S_0 - S_f}{1 - Fr^2}$. Understand the meaning of each term.
*   **Profile Classification:** Based on $y$, $y_n$, $y_c$, and slopes ($S_0$, $S_f$). Knowing the profile type helps predict depth trends.
*   **Standard Step Method:** A numerical technique to calculate GVF profiles.
*   **Forward vs. Backward Calculation:** Choose based on the location of the control.
*   **Iterative Process:** The SSM is iterative, requiring repeated calculations until convergence.
*   **Assumptions:** Be aware of the assumptions (1D, steady, gradual changes) that limit the accuracy of the SSM.
*   **Manning's Equation:** Essential for calculating the friction slope ($S_f$).
*   **Energy Correction Factor ($\alpha$):** Often assumed 1.0 but can be significant if velocity distribution is highly non-uniform.
*   **Reach Length ($dx$):** Impacts accuracy; smaller $dx$ is more accurate but computationally intensive.

---
