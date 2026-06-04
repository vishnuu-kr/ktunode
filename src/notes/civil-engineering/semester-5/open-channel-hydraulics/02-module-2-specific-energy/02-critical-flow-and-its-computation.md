---
title: "Critical flow and its computation"
subject: "OPEN CHANNEL HYDRAULICS"
module: "Module 2: Specific energy"
branch: "Civil Engineering"
semester: 5
topicId: "689f15cd56b5e963ba810eac"
status: "completed"
scrapedAt: "2026-05-20T18:49:49.693Z"
---
# Open Channel Hydraulics: Module 2 - Specific Energy

## Topic: Critical Flow and its Computation

---

### 1. Introduction to Specific Energy

**Definition:** Specific energy (E) is the energy per unit weight of fluid flowing in an open channel with respect to the channel bed. It's a crucial concept for understanding the behavior of flow in open channels, particularly at transitions and obstructions.

**Formula:**

$E = y + \frac{V^2}{2g}$

Where:
*   $E$: Specific Energy (m or ft)
*   $y$: Flow depth (m or ft)
*   $V$: Average flow velocity (m/s or ft/s)
*   $g$: Acceleration due to gravity ($9.81 \text{ m/s}^2$ or $32.2 \text{ ft/s}^2$)

**Key Concepts:**

*   **Energy Equation in Open Channels:** The specific energy accounts for the potential energy due to depth ($y$) and the kinetic energy per unit weight of the fluid ($\frac{V^2}{2g}$).
*   **Free Surface:** The specific energy is measured relative to the channel bed, and the free surface represents the top of the water.
*   **Relationship between Depth and Velocity:** For a constant specific energy, as the flow depth increases, the velocity decreases, and vice versa. This is because the total energy is conserved.

---

### 2. Specific Energy Diagram

**Concept:** The specific energy diagram graphically represents the relationship between specific energy (E) and flow depth (y) for a given discharge (Q) in an open channel.

**Construction:**

1.  **Fix Discharge (Q):** The specific energy diagram is constructed for a fixed discharge.
2.  **Calculate Specific Energy (E) for various Depths (y):** For each chosen flow depth ($y$), calculate the corresponding velocity ($V$) using the continuity equation ($Q = Ay$, where $A$ is the cross-sectional area) and then calculate the specific energy ($E$).
3.  **Plot:** Plot $y$ on the x-axis and $E$ on the y-axis.

**Characteristics of the Specific Energy Diagram:**

*   **Shape:** The diagram is typically a hyperbola-like curve.
*   **Minimum Specific Energy:** There exists a minimum specific energy ($E_{min}$) for a given discharge.
*   **Two possible depths for a given E (above E_min):** For any specific energy value greater than $E_{min}$, there are generally two possible flow depths: a **subcritical** depth (larger $y$) and a **supercritical** depth (smaller $y$).
*   **Nodes and Antinodes:** The minimum specific energy point is often referred to as a "node" or "critical point."

**Important Points:**

*   The area ($A$) and velocity ($V$) are dependent on the flow depth ($y$), which varies with the channel shape.

---

### 3. Critical Flow

**Definition:** Critical flow is the state of flow in an open channel where the specific energy is at its minimum for a given discharge. At critical flow, the flow is neither subcritical nor supercritical.

**Conditions for Critical Flow:**

*   **Minimum Specific Energy:** $E = E_{min}$
*   **Froude Number ($Fr$) = 1:** The Froude number is a dimensionless parameter that indicates the relative importance of inertial forces to gravitational forces.
    $Fr = \frac{V}{\sqrt{gD}}$
    Where:
    *   $Fr$: Froude Number
    *   $V$: Average flow velocity
    *   $g$: Acceleration due to gravity
    *   $D$: Hydraulic Depth ($D = \frac{A}{T}$)
        *   $A$: Cross-sectional area of flow
        *   $T$: Top width of the water surface

    Therefore, at critical flow: $\frac{V}{\sqrt{gD}} = 1$

*   **Relationship between Velocity and Depth:** At critical flow, the velocity is equal to the speed of a small gravity wave in the channel. This means that disturbances cannot propagate upstream.

---

### 4. Computation of Critical Flow

**Key Concept:** To compute critical flow, we need to find the flow depth ($y_c$) at which the specific energy is minimum. This can be achieved by differentiating the specific energy equation with respect to $y$ and setting it to zero.

**Derivation for a Rectangular Channel:**

For a rectangular channel of width $B$:
*   $A = By$
*   $V = \frac{Q}{A} = \frac{Q}{By}$
*   $D = \frac{A}{T} = \frac{By}{B} = y$

Substitute into the Froude Number definition:
$Fr = \frac{V}{\sqrt{gy}} = \frac{Q/By}{\sqrt{gy}} = \frac{Q}{B y \sqrt{gy}} = \frac{Q}{B \sqrt{gy^3}}$

For critical flow, $Fr = 1$:
$1 = \frac{Q}{B \sqrt{gy_c^3}}$
$Q = B \sqrt{gy_c^3}$

Rearranging to find critical depth ($y_c$):
$y_c^3 = \frac{Q^2}{gB^2}$
$y_c = \left(\frac{Q^2}{gB^2}\right)^{1/3}$

**Alternative approach using specific energy minimization:**

$E = y + \frac{Q^2}{2gA^2}$

Differentiate $E$ with respect to $y$ and set $\frac{dE}{dy} = 0$:
$\frac{dE}{dy} = 1 + \frac{Q^2}{2g} \frac{d}{dy}(A^{-2}) = 0$
$1 + \frac{Q^2}{2g} (-2A^{-3}) \frac{dA}{dy} = 0$
$1 - \frac{Q^2}{gA^3} \frac{dA}{dy} = 0$

We know that $\frac{dA}{dy} = T$ (the top width).
$1 = \frac{Q^2}{gA^3} T$
$gA^3 = Q^2 T$

This is the general condition for critical flow in any channel shape.

For a rectangular channel ($A=By$, $T=B$):
$g(By_c)^3 = Q^2 B$
$gB^3 y_c^3 = Q^2 B$
$y_c^3 = \frac{Q^2}{gB^2}$
$y_c = \left(\frac{Q^2}{gB^2}\right)^{1/3}$

**Critical Velocity ($V_c$):**

Once $y_c$ is known, the critical velocity can be calculated using the continuity equation:
$V_c = \frac{Q}{A_c}$
Where $A_c$ is the cross-sectional area at critical depth $y_c$.

**Computation Steps for Critical Flow:**

1.  **Identify Channel Geometry:** Determine the cross-sectional shape of the channel (e.g., rectangular, trapezoidal, triangular).
2.  **Know the Discharge (Q):** This is typically given.
3.  **Express Area (A) and Top Width (T) in terms of Flow Depth (y):** For the given channel shape, derive formulas for $A(y)$ and $T(y)$.
4.  **Apply the Critical Flow Condition:** Use the general condition $gA^3 = Q^2 T$ or the specific condition for the channel shape.
5.  **Solve for Critical Depth ($y_c$):** This usually involves solving a polynomial equation for $y_c$. Numerical methods may be required for non-rectangular channels.
6.  **Calculate Critical Velocity ($V_c$):** Use $V_c = Q/A_c$, where $A_c$ is the area at $y_c$.

---

### 5. Examples and Practice Questions

**Example 1: Rectangular Channel**

A rectangular channel is 3 m wide and carries a discharge of $15 \text{ m}^3/\text{s}$. Determine the critical depth and critical velocity. Take $g = 9.81 \text{ m/s}^2$.

**Solution:**
Given:
*   Width, $B = 3 \text{ m}$
*   Discharge, $Q = 15 \text{ m}^3/\text{s}$
*   $g = 9.81 \text{ m/s}^2$

Using the formula for critical depth in a rectangular channel:
$y_c = \left(\frac{Q^2}{gB^2}\right)^{1/3}$
$y_c = \left(\frac{(15 \text{ m}^3/\text{s})^2}{(9.81 \text{ m/s}^2)(3 \text{ m})^2}\right)^{1/3}$
$y_c = \left(\frac{225 \text{ m}^6/\text{s}^2}{9.81 \text{ m/s}^2 \times 9 \text{ m}^2}\right)^{1/3}$
$y_c = \left(\frac{225}{88.29}\right)^{1/3} \text{ m}$
$y_c = (2.548)^{1/3} \text{ m}$
$y_c \approx 1.365 \text{ m}$

Now, calculate the critical velocity:
First, find the cross-sectional area at critical depth ($A_c$):
$A_c = B \times y_c = 3 \text{ m} \times 1.365 \text{ m} = 4.095 \text{ m}^2$

Then, calculate the critical velocity:
$V_c = \frac{Q}{A_c} = \frac{15 \text{ m}^3/\text{s}}{4.095 \text{ m}^2}$
$V_c \approx 3.663 \text{ m/s}$

**Example 2: Trapezoidal Channel**

A trapezoidal channel has a bottom width of $4 \text{ m}$ and side slopes of 1 horizontal to 1 vertical ($z=1$). The discharge is $20 \text{ m}^3/\text{s}$. Calculate the critical depth. Take $g = 9.81 \text{ m/s}^2$.

**Solution:**
Given:
*   Bottom width, $b = 4 \text{ m}$
*   Side slopes, $z = 1$ (meaning 1 horizontal for 1 vertical)
*   Discharge, $Q = 20 \text{ m}^3/\text{s}$
*   $g = 9.81 \text{ m/s}^2$

For a trapezoidal channel, the cross-sectional area $A$ and top width $T$ at a depth $y$ are:
*   $A = (b + zy)y = (4 + 1y)y = 4y + y^2$
*   $T = b + 2zy = 4 + 2(1)y = 4 + 2y$

The critical flow condition is $gA^3 = Q^2 T$.
Substituting the expressions for $A$ and $T$:
$9.81 \times (4y_c + y_c^2)^3 = (20)^2 \times (4 + 2y_c)$
$9.81 \times (4y_c + y_c^2)^3 = 400 \times (4 + 2y_c)$

This is a complex polynomial equation that needs to be solved numerically. We can guess values for $y_c$ and check the equality.

Let's try a few values:
*   If $y_c = 1 \text{ m}$:
    $A = 4(1) + 1^2 = 5 \text{ m}^2$
    $T = 4 + 2(1) = 6 \text{ m}$
    $gA^3 = 9.81 \times 5^3 = 9.81 \times 125 = 1226.25$
    $Q^2 T = 400 \times 6 = 2400$
    LHS < RHS. Need higher $y_c$.

*   If $y_c = 1.5 \text{ m}$:
    $A = 4(1.5) + 1.5^2 = 6 + 2.25 = 8.25 \text{ m}^2$
    $T = 4 + 2(1.5) = 4 + 3 = 7 \text{ m}$
    $gA^3 = 9.81 \times (8.25)^3 = 9.81 \times 561.5 = 5508.3$
    $Q^2 T = 400 \times 7 = 2800$
    LHS > RHS. Need lower $y_c$.

*   If $y_c = 1.3 \text{ m}$:
    $A = 4(1.3) + 1.3^2 = 5.2 + 1.69 = 6.89 \text{ m}^2$
    $T = 4 + 2(1.3) = 4 + 2.6 = 6.6 \text{ m}$
    $gA^3 = 9.81 \times (6.89)^3 = 9.81 \times 327.1 = 3208.9$
    $Q^2 T = 400 \times 6.6 = 2640$
    LHS > RHS. Closer.

*   If $y_c = 1.25 \text{ m}$:
    $A = 4(1.25) + 1.25^2 = 5 + 1.5625 = 6.5625 \text{ m}^2$
    $T = 4 + 2(1.25) = 4 + 2.5 = 6.5 \text{ m}$
    $gA^3 = 9.81 \times (6.5625)^3 = 9.81 \times 282.6 = 2772.3$
    $Q^2 T = 400 \times 6.5 = 2600$
    LHS is slightly larger than RHS, indicating $y_c$ is slightly less than 1.25 m.

Using a numerical solver or iterative approach, the critical depth is approximately $y_c \approx 1.22 \text{ m}$.

**Practice Questions:**

1.  A wide rectangular channel carries a discharge of $5 \text{ m}^3/\text{s}$ per meter width. Calculate the critical depth and critical velocity. ($g = 9.81 \text{ m/s}^2$)
2.  For a given discharge in a channel, what is the condition for critical flow in terms of Froude Number?
3.  Explain the significance of the specific energy diagram.
4.  A trapezoidal channel with a bottom width of $5 \text{ m}$ and side slopes of 2 horizontal to 1 vertical carries a discharge of $30 \text{ m}^3/\text{s}$. Calculate the critical depth. ($g = 9.81 \text{ m/s}^2$) (Hint: You'll need to use numerical methods or a solver).

---

### 6. Answers to Practice Questions

**Answer 1:**
For a wide rectangular channel ($B \to \infty$), specific discharge $q = Q/B$ is often used.
Given $q = 5 \text{ m}^3/\text{s}/\text{m}$.
Critical depth in a rectangular channel: $y_c = \left(\frac{q^2}{g}\right)^{1/3}$
$y_c = \left(\frac{(5 \text{ m}^3/\text{s}/\text{m})^2}{9.81 \text{ m/s}^2}\right)^{1/3}$
$y_c = \left(\frac{25}{9.81}\right)^{1/3} \text{ m}$
$y_c = (2.548)^{1/3} \text{ m}$
$y_c \approx 1.365 \text{ m}$

Critical velocity: $V_c = \frac{q}{y_c} = \frac{5 \text{ m}^3/\text{s}/\text{m}}{1.365 \text{ m}} \approx 3.663 \text{ m/s}$

**Answer 2:**
The condition for critical flow in terms of Froude Number is $Fr = 1$.

**Answer 3:**
The specific energy diagram graphically illustrates the relationship between specific energy ($E$) and flow depth ($y$) for a constant discharge. It shows that for a given discharge, there is a minimum specific energy. For any specific energy value greater than the minimum, there are two possible flow depths: one subcritical and one supercritical. The point of minimum specific energy corresponds to critical flow.

**Answer 4:**
Given:
*   Bottom width, $b = 5 \text{ m}$
*   Side slopes, $z = 2$
*   Discharge, $Q = 30 \text{ m}^3/\text{s}$
*   $g = 9.81 \text{ m/s}^2$

For a trapezoidal channel:
*   $A = (b + zy)y = (5 + 2y)y = 5y + 2y^2$
*   $T = b + 2zy = 5 + 2(2)y = 5 + 4y$

Critical flow condition: $gA^3 = Q^2 T$
$9.81 \times (5y_c + 2y_c^2)^3 = (30)^2 \times (5 + 4y_c)$
$9.81 \times (5y_c + 2y_c^2)^3 = 900 \times (5 + 4y_c)$

Let's try values for $y_c$:
*   If $y_c = 1 \text{ m}$:
    $A = 5(1) + 2(1)^2 = 7 \text{ m}^2$
    $T = 5 + 4(1) = 9 \text{ m}$
    $gA^3 = 9.81 \times 7^3 = 9.81 \times 343 = 3365.43$
    $Q^2 T = 900 \times 9 = 8100$
    LHS < RHS. Need higher $y_c$.

*   If $y_c = 1.5 \text{ m}$:
    $A = 5(1.5) + 2(1.5)^2 = 7.5 + 2(2.25) = 7.5 + 4.5 = 12 \text{ m}^2$
    $T = 5 + 4(1.5) = 5 + 6 = 11 \text{ m}$
    $gA^3 = 9.81 \times 12^3 = 9.81 \times 1728 = 16951.68$
    $Q^2 T = 900 \times 11 = 9900$
    LHS > RHS. Need lower $y_c$.

*   If $y_c = 1.3 \text{ m}$:
    $A = 5(1.3) + 2(1.3)^2 = 6.5 + 2(1.69) = 6.5 + 3.38 = 9.88 \text{ m}^2$
    $T = 5 + 4(1.3) = 5 + 5.2 = 10.2 \text{ m}$
    $gA^3 = 9.81 \times (9.88)^3 = 9.81 \times 964.5 = 9461.7$
    $Q^2 T = 900 \times 10.2 = 9180$
    LHS > RHS. Closer.

*   If $y_c = 1.28 \text{ m}$:
    $A = 5(1.28) + 2(1.28)^2 = 6.4 + 2(1.6384) = 6.4 + 3.2768 = 9.6768 \text{ m}^2$
    $T = 5 + 4(1.28) = 5 + 5.12 = 10.12 \text{ m}$
    $gA^3 = 9.81 \times (9.6768)^3 = 9.81 \times 905.3 = 8880.9$
    $Q^2 T = 900 \times 10.12 = 9108$
    LHS < RHS.

Using a numerical solver, the critical depth is approximately $y_c \approx 1.295 \text{ m}$.

---

### 7. Important Points to Remember

*   **Specific Energy (E):** $E = y + \frac{V^2}{2g}$. It's energy per unit weight relative to the channel bed.
*   **Minimum Specific Energy:** For a given discharge, there's a unique minimum specific energy.
*   **Critical Flow:** The state where specific energy is minimum.
*   **Froude Number ($Fr$):** $Fr = \frac{V}{\sqrt{gD}}$. $Fr < 1$ is subcritical, $Fr > 1$ is supercritical, and $Fr = 1$ is critical flow.
*   **General Critical Flow Condition:** $gA^3 = Q^2 T$. This is crucial for solving critical depth for any channel shape.
*   **Rectangular Channel Critical Depth:** $y_c = \left(\frac{Q^2}{gB^2}\right)^{1/3}$ or $y_c = \left(\frac{q^2}{g}\right)^{1/3}$ for specific discharge.
*   **Critical Velocity:** The velocity at critical depth, $V_c = Q/A_c$.
*   **Wave Propagation:** At critical flow, the flow velocity equals the speed of small gravity waves. This means a disturbance cannot propagate upstream.
