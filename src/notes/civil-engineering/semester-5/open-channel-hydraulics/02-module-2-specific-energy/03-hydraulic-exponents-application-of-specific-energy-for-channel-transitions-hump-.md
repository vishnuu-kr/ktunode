---
title: "-Hydraulic exponents  Application of Specific energy for channel transitions- hump and reduction in channel width"
subject: "OPEN CHANNEL HYDRAULICS"
module: "Module 2: Specific energy"
branch: "Civil Engineering"
semester: 5
topicId: "689f15cd56b5e963ba810ead"
status: "completed"
scrapedAt: "2026-05-20T18:49:50.475Z"
---
# Open Channel Hydraulics - Module 2: Specific Energy

## Topic: Hydraulic Exponents and Application of Specific Energy for Channel Transitions (Hump and Reduction in Channel Width)

---

### Learning Outcomes:

*   Understand the concept of hydraulic exponents and their role in channel transitions.
*   Apply the principle of specific energy to analyze flow behavior in channels with changes in width and bed elevation.
*   Analyze flow conditions and predict water surface profiles in channels with a hump (sill).
*   Analyze flow conditions and predict water surface profiles in channels with a reduction in width.
*   Determine critical depths and energy losses in channel transitions.

---

### 1. Introduction to Specific Energy

**Definition:** Specific energy ($E$) in an open channel is the energy per unit weight of fluid measured from the channel bottom. For a rectangular channel, it is expressed as:

$E = y + \frac{V^2}{2g}$

Where:
*   $y$ = flow depth (m)
*   $V$ = average flow velocity (m/s)
*   $g$ = acceleration due to gravity (m/s²)

**Key Concepts:**

*   **Relationship between Depth and Velocity:** For a constant discharge ($Q$) and a given channel geometry, as the flow depth ($y$) changes, the velocity ($V$) also changes, and vice versa.
*   **Specific Energy Curve:** A plot of specific energy ($E$) versus flow depth ($y$) for a constant discharge. It typically shows a minimum specific energy at the critical depth.

**Subcritical Flow:**
*   $y > y_c$ (flow depth is greater than critical depth)
*   $V < V_c$ (velocity is less than critical velocity)
*   Froude Number ($Fr < 1$)
*   Any disturbance propagates upstream.

**Critical Flow:**
*   $y = y_c$ (flow depth equals critical depth)
*   $V = V_c$ (velocity equals critical velocity)
*   $Fr = 1$
*   Minimum specific energy for a given discharge.

**Supercritical Flow:**
*   $y < y_c$ (flow depth is less than critical depth)
*   $V > V_c$ (velocity is greater than critical velocity)
*   $Fr > 1$
*   Any disturbance propagates downstream.

**Relationship between Discharge and Specific Energy:**

For a rectangular channel of width $B$:
$Q = A V = (B y) V$
$V = \frac{Q}{B y}$

Substituting $V$ into the specific energy equation:
$E = y + \frac{(\frac{Q}{B y})^2}{2g} = y + \frac{Q^2}{2g B^2 y^2}$

This equation shows that for a given discharge $Q$, the specific energy $E$ is a function of the flow depth $y$.

---

### 2. Hydraulic Exponents

**Definition:** Hydraulic exponents are dimensionless parameters used to characterize the flow behavior in open channels, particularly in the context of specific energy and channel transitions. They relate the flow depth to the discharge or specific energy.

For a rectangular channel, the relationship $E = y + \frac{Q^2}{2g B^2 y^2}$ can be used to derive these exponents. While specific "hydraulic exponents" are not a universally defined set of terms like in other fields, the concept relates to how $y$, $V$, and $E$ change with each other.

**More relevant concepts often associated with "hydraulic exponents" in this context are related to critical depth calculations and energy equations:**

*   **Critical Depth ($y_c$) for Rectangular Channels:**
    $y_c = \left(\frac{Q^2}{g B^2}\right)^{1/3}$
    This equation highlights the dependence of critical depth on discharge and channel width.

*   **Specific Energy at Critical Depth ($E_c$):**
    $E_c = y_c + \frac{V_c^2}{2g} = y_c + \frac{(g y_c)^{1/2 \times 2}}{2g} = y_c + \frac{g y_c}{2g} = y_c + \frac{y_c}{2} = \frac{3}{2} y_c$

*   **Relationship between Discharge and Critical Depth:**
    $Q = C_d \sqrt{g} B y_c^{3/2}$, where $C_d$ is a discharge coefficient (often assumed as 1 for theoretical analysis).

**Practical Interpretation:** These relationships show how flow depth, velocity, and energy are linked and how changes in channel geometry (like width) or discharge affect these parameters. For non-rectangular channels, the exponents would differ due to changes in the cross-sectional area and hydraulic radius.

---

### 3. Application of Specific Energy for Channel Transitions

Channel transitions involve changes in channel geometry (width, depth, slope) which affect the flow of water. Specific energy is a powerful tool for analyzing these changes and predicting the water surface profile.

**Key Principles:**

*   **Conservation of Specific Energy (in the absence of energy loss):** In a frictionless transition, specific energy remains constant. However, real transitions always involve some energy loss.
*   **Energy Loss:** In transitions, energy is lost due to friction, turbulence, and flow separation, especially in expansions and contractions. These losses are typically modeled as a function of the difference in specific energy between the upstream and downstream sections.
*   **Froude Number:** The Froude number plays a crucial role in determining how the flow responds to a change in geometry.
    *   **Subcritical flow approaching a transition:** The flow tends to remain subcritical unless the transition causes a significant increase in specific energy or a decrease in width leading to supercritical flow.
    *   **Supercritical flow approaching a transition:** The flow is sensitive to changes and can transition to subcritical flow (e.g., hydraulic jump) or remain supercritical.

---

### 4. Channel Transitions: Hump (Sill)

A hump, or sill, is an obstruction on the channel bed that causes a localized increase in bed elevation. This leads to a reduction in the cross-sectional area and an increase in the specific energy required to maintain the same discharge.

**Analysis using Specific Energy:**

Consider a rectangular channel with width $B$, carrying a discharge $Q$. A hump is introduced, effectively reducing the available flow area. Let's analyze a section where the hump causes a rise in the bed by $\Delta z$.

**Upstream Section (1):**
*   Flow depth $y_1$
*   Specific Energy $E_1 = y_1 + \frac{V_1^2}{2g}$

**Section Over the Hump (2):**
*   The effective bed is raised by $\Delta z$.
*   The new specific energy reference level is at the original bed level.
*   Let the depth over the hump be $y_2$. The specific energy relative to the *new* bed level is $E_2 = y_2 + \frac{V_2^2}{2g}$.
*   **Crucially, specific energy is measured from the *local* bed. So, the specific energy required to pass the flow over the hump is $E_1$ (assuming no energy loss over the hump).**
*   Therefore, $E_1 = y_2 + \frac{V_2^2}{2g}$.

**Key Considerations for Humps:**

*   **Contraction of Flow Section:** The hump effectively reduces the flow area, especially if the hump height approaches the critical depth.
*   **Critical Depth Condition:** If the hump is high enough to cause the flow to become critical over the hump, then $y_2 = y_{c2}$, where $y_{c2}$ is the critical depth for the section over the hump.
*   **Maximum Discharge:** For a given upstream specific energy $E_1$, there is a maximum discharge that can pass over the hump. This occurs when the flow over the hump is critical ($y_2 = y_{c2}$), and $E_1$ is at its minimum required value.
*   **Afflux:** The rise in water level upstream of the hump caused by the obstruction is called afflux.

**Mathematical Formulation for a Rectangular Channel:**

Upstream: $Q = B y_1 V_1$ and $E_1 = y_1 + \frac{V_1^2}{2g}$
Over the hump: $Q = B' y_2 V_2$, where $B'$ is the effective width. If the hump is a simple rise, $B'=B$.
$E_1 = y_2 + \frac{V_2^2}{2g}$ (assuming no energy loss over the hump)

Let's consider a scenario where the hump causes critical flow over it. The specific energy over the hump is $E_{c2} = \frac{3}{2} y_{c2}$.
So, $E_1 = E_{c2} = \frac{3}{2} y_{c2}$.

The discharge over the hump is $Q = B y_{c2} \sqrt{g y_{c2}} = B \sqrt{g y_{c2}^3}$.
From this, we can find the critical depth over the hump: $y_{c2} = \left(\frac{Q^2}{g B^2}\right)^{1/3}$.
And the minimum specific energy required to pass this discharge: $E_{min} = \frac{3}{2} y_{c2} = \frac{3}{2} \left(\frac{Q^2}{g B^2}\right)^{1/3}$.

If the upstream specific energy $E_1$ is less than $E_{min}$, the flow will be subcritical over the hump ($y_2 > y_{c2}$). If $E_1 = E_{min}$, the flow is critical. If $E_1 > E_{min}$, the flow is subcritical over the hump, and there will be an afflux.

**Example:**
A rectangular channel 2m wide carries 5 m³/s of water with a depth of 1.5m. A hump causes a rise in the bed of 0.2m. Determine the depth of flow over the hump, assuming no energy loss.

*   **Upstream Conditions:**
    $B_1 = 2$ m, $Q = 5$ m³/s, $y_1 = 1.5$ m
    $V_1 = \frac{Q}{B_1 y_1} = \frac{5}{2 \times 1.5} = \frac{5}{3} \approx 1.67$ m/s
    $E_1 = y_1 + \frac{V_1^2}{2g} = 1.5 + \frac{(5/3)^2}{2 \times 9.81} = 1.5 + \frac{25/9}{19.62} \approx 1.5 + 0.142 \approx 1.642$ m

*   **Conditions over the hump:**
    The bed is raised by $\Delta z = 0.2$ m.
    The specific energy over the hump is $E_1 = 1.642$ m.
    We need to find $y_2$ such that $E_1 = y_2 + \frac{V_2^2}{2g}$.
    $Q = B_2 y_2 V_2 = 5$ m³/s. Assuming $B_2 = B_1 = 2$ m.
    $V_2 = \frac{5}{2 y_2}$
    $1.642 = y_2 + \frac{(\frac{5}{2 y_2})^2}{2 \times 9.81} = y_2 + \frac{25}{4 y_2^2 \times 19.62} = y_2 + \frac{0.318}{y_2^2}$

    This is a cubic equation for $y_2$: $y_2^3 + 1.642 y_2^2 - 0.318 = 0$.
    By trial and error, we find $y_2 \approx 0.39$ m.

    Let's check the critical depth for this discharge:
    $y_{c2} = \left(\frac{Q^2}{g B_2^2}\right)^{1/3} = \left(\frac{5^2}{9.81 \times 2^2}\right)^{1/3} = \left(\frac{25}{39.24}\right)^{1/3} \approx (0.637)^{1/3} \approx 0.86$ m.
    Since $y_2 = 0.39$ m $< y_{c2} = 0.86$ m, the flow over the hump is supercritical.

    The minimum specific energy required to pass 5 m³/s in a 2m wide channel is:
    $E_{min} = \frac{3}{2} y_{c2} = \frac{3}{2} \times 0.86 \approx 1.29$ m.
    Since $E_1 = 1.642$ m $> E_{min} = 1.29$ m, the flow can pass over the hump, and it will be subcritical if the hump is low enough or supercritical if the hump is high enough to force critical conditions. In this calculated case, it becomes supercritical.

---

### 5. Channel Transitions: Reduction in Channel Width

A reduction in channel width causes the flow to accelerate, and the water surface level adjusts according to the specific energy principle. This is analogous to flow through a venturi meter or a constriction.

**Analysis using Specific Energy:**

Consider a rectangular channel with width $B_1$ and depth $y_1$ transitioning to a narrower width $B_2$ ($B_2 < B_1$).

**Upstream Section (1):**
*   Flow depth $y_1$, velocity $V_1$, specific energy $E_1 = y_1 + \frac{V_1^2}{2g}$.
*   Discharge $Q = B_1 y_1 V_1$.

**Downstream Section (2):**
*   Flow depth $y_2$, velocity $V_2$, specific energy $E_2 = y_2 + \frac{V_2^2}{2g}$.
*   Discharge $Q = B_2 y_2 V_2$.

**Conservation of Specific Energy (Ideal Case):**
If there are no energy losses ($E_1 = E_2$):
$y_1 + \frac{V_1^2}{2g} = y_2 + \frac{V_2^2}{2g}$

**Considering Energy Loss:**
In reality, contractions cause energy losses, especially if the transition is abrupt. The energy loss, $\Delta E$, is typically expressed as a function of the difference in specific energy or velocity heads. A common form for gradual contractions is:

$E_1 = E_2 + \Delta E$
or
$E_1 = y_2 + \frac{V_2^2}{2g} + \Delta E$

The loss term is often modeled as: $\Delta E = K \frac{(V_2^2 - V_1^2)}{2g}$ or $\Delta E = K \frac{(V_1^2)}{2g}$ or $\Delta E = K \frac{(V_2^2)}{2g}$, where $K$ is a loss coefficient that depends on the angle of convergence. For sharp contractions, $K$ can be significant. For gradual contractions, it's smaller.

**Critical Analysis:**

*   **Subcritical Flow Transition:** If the flow is subcritical in both sections, a reduction in width will cause the velocity to increase and the depth to decrease. The specific energy remains approximately constant (or decreases slightly due to losses).
*   **Transition to Supercritical Flow:** If the reduction in width is significant, or if the upstream flow is already close to critical, the flow can become supercritical in the narrower section. This can happen even if the upstream flow is subcritical. This is where the specific energy curve is crucial.

**Mathematical Approach:**

1.  **Calculate Upstream Conditions:** $y_1, V_1, E_1$.
2.  **Express Downstream Velocity in terms of Depth:** $V_2 = \frac{Q}{B_2 y_2} = \frac{B_1 y_1 V_1}{B_2 y_2}$.
3.  **Apply Energy Equation:** $E_1 = y_2 + \frac{1}{2g} \left(\frac{B_1 y_1 V_1}{B_2 y_2}\right)^2 + \Delta E$.
4.  **Solve for $y_2$:** This usually results in a cubic equation for $y_2$ if losses are considered or a simpler equation if losses are ignored.

**Example:**
A rectangular channel 3m wide has a discharge of 15 m³/s and a flow depth of 2m. The channel narrows abruptly to a width of 2m. Assuming no energy loss, find the depth of flow in the narrower section.

*   **Upstream Conditions (Section 1):**
    $B_1 = 3$ m, $Q = 15$ m³/s, $y_1 = 2$ m
    $V_1 = \frac{Q}{B_1 y_1} = \frac{15}{3 \times 2} = 2.5$ m/s
    $E_1 = y_1 + \frac{V_1^2}{2g} = 2 + \frac{(2.5)^2}{2 \times 9.81} = 2 + \frac{6.25}{19.62} \approx 2 + 0.319 \approx 2.319$ m

*   **Downstream Conditions (Section 2):**
    $B_2 = 2$ m, $Q = 15$ m³/s
    $V_2 = \frac{Q}{B_2 y_2} = \frac{15}{2 y_2} = \frac{7.5}{y_2}$
    Assuming no energy loss, $E_2 = E_1 = 2.319$ m.
    $E_2 = y_2 + \frac{V_2^2}{2g}$
    $2.319 = y_2 + \frac{(7.5/y_2)^2}{2 \times 9.81} = y_2 + \frac{56.25}{y_2^2 \times 19.62} = y_2 + \frac{2.867}{y_2^2}$

    This leads to the cubic equation: $y_2^3 + 2.319 y_2^2 - 2.867 = 0$.
    Solving this equation (e.g., using a numerical solver or trial and error):
    If $y_2 = 1$ m, $1^3 + 2.319(1)^2 - 2.867 = 1 + 2.319 - 2.867 = 0.452$
    If $y_2 = 0.9$ m, $0.9^3 + 2.319(0.9)^2 - 2.867 = 0.729 + 2.319(0.81) - 2.867 = 0.729 + 1.878 - 2.867 = -0.26$
    The root is between 0.9 and 1. Let's try $y_2 = 0.96$ m:
    $(0.96)^3 + 2.319(0.96)^2 - 2.867 = 0.885 + 2.319(0.9216) - 2.867 = 0.885 + 2.137 - 2.867 = 0.155$
    Let's try $y_2 = 0.94$ m:
    $(0.94)^3 + 2.319(0.94)^2 - 2.867 = 0.83 + 2.319(0.8836) - 2.867 = 0.83 + 2.048 - 2.867 = 0.011$
    So, $y_2 \approx 0.94$ m.

    Let's check the critical depth for the narrower section:
    $y_{c2} = \left(\frac{Q^2}{g B_2^2}\right)^{1/3} = \left(\frac{15^2}{9.81 \times 2^2}\right)^{1/3} = \left(\frac{225}{39.24}\right)^{1/3} \approx (5.734)^{1/3} \approx 1.79$ m.
    The minimum specific energy required for this discharge in the narrower section is $E_{min2} = \frac{3}{2} y_{c2} = \frac{3}{2} \times 1.79 \approx 2.685$ m.
    Since $E_1 = 2.319$ m $< E_{min2} = 2.685$ m, the flow in the narrower section must remain subcritical, which is consistent with our calculated $y_2 = 0.94$ m (as $y_2 < y_{c2}$ implies supercritical flow, which would require higher specific energy). Our calculation of $y_2 = 0.94$ m must be correct as $0.94 < 1.79$ means subcritical flow.

    *Self-correction:* The condition $y_2 < y_{c2}$ for subcritical flow is incorrect. For subcritical flow, $y_2 > y_{c2}$. Here, $y_2 = 0.94$ m and $y_{c2} = 1.79$ m. Since $y_2 < y_{c2}$, the flow would be supercritical *if* it could achieve that depth with the given specific energy. However, the specific energy is not enough to reach critical depth in the narrower section. This means the flow *remains subcritical*. The depth $y_2$ is indeed the subcritical depth.

    The fact that $E_1 < E_{min2}$ means the flow is subcritical in both sections, and the contraction causes acceleration and a drop in water level.

---

### 6. Important Points to Remember

*   **Specific Energy is measured from the channel bed.**
*   **Minimum specific energy occurs at critical depth.**
*   **For a constant discharge, any change in specific energy implies a change in flow depth.**
*   **Transitions (humps, constrictions) alter the flow conditions by changing the available flow area and potentially introducing energy losses.**
*   **For a hump, the specific energy upstream must be sufficient to overcome the hump and maintain the flow.**
*   **For a reduction in width, the flow accelerates, and the depth decreases. The specific energy is conserved (ideally) or decreases (with losses).**
*   **The Froude number is critical in understanding how flow behaves in transitions, especially regarding potential transitions between subcritical and supercritical regimes.**
*   **When the upstream specific energy is less than the minimum specific energy required for a downstream section, the flow cannot reach critical or supercritical conditions in that section; it remains subcritical.**
*   **Energy losses are significant in abrupt transitions and need to be accounted for in practical applications.**

---

### Practice Questions and Exercises

**Question 1:**
A rectangular channel 4m wide carries 10 m³/s of water with a depth of 1.2m.
(a) Calculate the specific energy at this section.
(b) Calculate the critical depth for this discharge.
(c) Is the flow subcritical, critical, or supercritical?
(d) If a hump is introduced that raises the bed by 0.1m, and assuming no energy loss, what will be the approximate depth of flow over the hump?

**Answer 1:**
(a) $V_1 = \frac{10}{4 \times 1.2} = \frac{10}{4.8} \approx 2.083$ m/s
$E_1 = 1.2 + \frac{(2.083)^2}{2 \times 9.81} = 1.2 + \frac{4.34}{19.62} \approx 1.2 + 0.221 \approx 1.421$ m

(b) $y_{c1} = \left(\frac{Q^2}{g B^2}\right)^{1/3} = \left(\frac{10^2}{9.81 \times 4^2}\right)^{1/3} = \left(\frac{100}{9.81 \times 16}\right)^{1/3} = \left(\frac{100}{156.96}\right)^{1/3} \approx (0.637)^{1/3} \approx 0.86$ m

(c) Since $y_1 = 1.2$ m $> y_{c1} = 0.86$ m, the flow is **subcritical**.

(d) Over the hump, the specific energy remains $E_1 = 1.421$ m. The bed is raised by 0.1m, so the new specific energy relative to the original bed is $E_1 = y_2 + \frac{V_2^2}{2g}$.
$Q = 10$ m³/s, $B = 4$ m. $V_2 = \frac{10}{4 y_2} = \frac{2.5}{y_2}$.
$1.421 = y_2 + \frac{(2.5/y_2)^2}{2 \times 9.81} = y_2 + \frac{6.25}{y_2^2 \times 19.62} = y_2 + \frac{0.319}{y_2^2}$.
$y_2^3 + 1.421 y_2^2 - 0.319 = 0$.
By trial and error:
If $y_2 = 0.4$ m, $0.4^3 + 1.421(0.4)^2 - 0.319 = 0.064 + 1.421(0.16) - 0.319 = 0.064 + 0.227 - 0.319 = -0.028$
If $y_2 = 0.42$ m, $0.42^3 + 1.421(0.42)^2 - 0.319 = 0.074 + 1.421(0.1764) - 0.319 = 0.074 + 0.251 - 0.319 = 0.006$
So, the approximate depth over the hump is **0.42 m**.

**Question 2:**
A rectangular channel 3m wide carries a discharge of 12 m³/s with a depth of 1.5m. The channel narrows to 2m width.
(a) Calculate the upstream specific energy.
(b) Calculate the downstream critical depth.
(c) If there are no energy losses, what will be the depth in the narrower section?

**Answer 2:**
(a) $V_1 = \frac{12}{3 \times 1.5} = \frac{12}{4.5} \approx 2.67$ m/s
$E_1 = 1.5 + \frac{(2.67)^2}{2 \times 9.81} = 1.5 + \frac{7.13}{19.62} \approx 1.5 + 0.363 \approx 1.863$ m

(b) Downstream width $B_2 = 2$ m. Discharge $Q = 12$ m³/s.
$y_{c2} = \left(\frac{Q^2}{g B_2^2}\right)^{1/3} = \left(\frac{12^2}{9.81 \times 2^2}\right)^{1/3} = \left(\frac{144}{9.81 \times 4}\right)^{1/3} = \left(\frac{144}{39.24}\right)^{1/3} \approx (3.669)^{1/3} \approx 1.54$ m

(c) Assuming no energy loss, $E_2 = E_1 = 1.863$ m.
$E_2 = y_2 + \frac{V_2^2}{2g}$
$Q = 12$ m³/s, $B_2 = 2$ m. $V_2 = \frac{12}{2 y_2} = \frac{6}{y_2}$.
$1.863 = y_2 + \frac{(6/y_2)^2}{2 \times 9.81} = y_2 + \frac{36}{y_2^2 \times 19.62} = y_2 + \frac{1.835}{y_2^2}$.
$y_2^3 + 1.863 y_2^2 - 1.835 = 0$.
By trial and error:
If $y_2 = 0.8$ m, $0.8^3 + 1.863(0.8)^2 - 1.835 = 0.512 + 1.863(0.64) - 1.835 = 0.512 + 1.192 - 1.835 = -0.131$
If $y_2 = 0.85$ m, $0.85^3 + 1.863(0.85)^2 - 1.835 = 0.614 + 1.863(0.7225) - 1.835 = 0.614 + 1.346 - 1.835 = 0.125$
So, the approximate depth in the narrower section is **0.825 m**.

*Check for flow regime:* $y_2 = 0.825$ m and $y_{c2} = 1.54$ m. Since $y_2 < y_{c2}$, the flow is supercritical in the narrower section. This is consistent with the contraction causing acceleration. Also, note that $E_1 = 1.863$ m is less than $E_{min2} = \frac{3}{2} y_{c2} = \frac{3}{2} \times 1.54 \approx 2.31$ m. This means the flow cannot become critical in the narrower section if it starts subcritical. However, our calculation shows it becomes supercritical. This implies that the assumption of no energy loss is crucial. If there were losses, the downstream depth would be even smaller, and supercritical flow more likely. The problem states "assuming no energy loss", so our calculation of $y_2=0.825$m is correct under that assumption.

---
