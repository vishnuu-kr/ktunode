---
title: "Plotting Specific Energy Curves in Open Channel flow"
subject: "FLUID MECHANICS LAB"
module: "Module 12: Plotting Specific Energy Curves in Open Channel flow"
branch: "Civil Engineering"
semester: 3
topicId: "689f15cb56b5e963ba8108ec"
status: "completed"
scrapedAt: "2026-05-20T18:40:57.511Z"
---
# FLUID MECHANICS LAB

## Module 12: Plotting Specific Energy Curves in Open Channel Flow

### Topic: Plotting Specific Energy Curves in Open Channel Flow

---

### 1. Learning Outcomes:

*   **Understand the concept of specific energy** and its importance in open channel flow analysis.
*   **Derive and interpret the specific energy equation** for rectangular channels.
*   **Identify and explain the critical flow condition** and its relationship to minimum specific energy.
*   **Determine the alternate depths** of flow for a given specific energy.
*   **Plot specific energy curves** and understand their characteristic shape.
*   **Analyze the relationship between flow rate, depth, and specific energy** using the specific energy curve.
*   **Apply the concept of specific energy** to practical problems in open channel hydraulics, such as transitions and hydraulic jumps.

---

### 2. Key Concepts and Definitions:

#### 2.1 Specific Energy (E)

*   **Definition:** Specific energy is the energy per unit weight of fluid passing a given section of an open channel, measured with respect to the channel bed. It represents the sum of the flow depth and the velocity head.
*   **Formula:**
    $E = y + \frac{v^2}{2g}$
    Where:
    *   $E$ is the specific energy (m or ft)
    *   $y$ is the flow depth (m or ft)
    *   $v$ is the average velocity of the flow (m/s or ft/s)
    *   $g$ is the acceleration due to gravity ($9.81 \, \text{m/s}^2$ or $32.2 \, \text{ft/s}^2$)

#### 2.2 Velocity Head

*   **Definition:** The velocity head is the kinetic energy per unit weight of fluid. It's the height to which the fluid would rise if its kinetic energy were converted to potential energy.

#### 2.3 Flow Rate (Q) and Specific Energy

*   **Relationship:** The specific energy depends on the flow depth ($y$) and the flow rate ($Q$). For a constant flow rate, as the depth changes, the velocity changes, and thus the specific energy changes.
*   **Formula for Rectangular Channels:**
    For a rectangular channel with width $B$ and flow rate $Q$, the velocity $v$ can be expressed as:
    $v = \frac{Q}{A} = \frac{Q}{By}$
    Substituting this into the specific energy equation:
    $E = y + \frac{(\frac{Q}{By})^2}{2g} = y + \frac{Q^2}{2gB^2y^2}$
    This equation relates specific energy ($E$) to flow depth ($y$) for a constant flow rate ($Q$) and channel width ($B$).

#### 2.4 Critical Flow

*   **Definition:** Critical flow is the condition where the specific energy is at a minimum for a given flow rate. It represents a transition point between subcritical and supercritical flow.
*   **Characteristics:**
    *   Velocity head equals half the flow depth ($\frac{v^2}{2g} = \frac{y}{2}$).
    *   Froude Number ($Fr$) equals 1.
    *   Specific energy is at its minimum value for a given flow rate.
*   **Derivation of Critical Depth ($y_c$) for Rectangular Channels:**
    To find the minimum specific energy, we differentiate the specific energy equation with respect to $y$ and set the derivative to zero:
    $\frac{dE}{dy} = 1 - \frac{2Q^2}{2gB^2y^3} = 0$
    $1 = \frac{Q^2}{gB^2y^3}$
    $gB^2y^3 = Q^2$
    Rearranging for $y^3$:
    $y^3 = \frac{Q^2}{gB^2}$
    So, the critical depth ($y_c$) is:
    $y_c = \left(\frac{Q^2}{gB^2}\right)^{1/3}$
*   **Critical Velocity ($v_c$):**
    $v_c = \sqrt{gy_c}$
*   **Minimum Specific Energy ($E_{min}$ or $E_c$):**
    Substitute $y_c$ back into the specific energy equation:
    $E_c = y_c + \frac{v_c^2}{2g} = y_c + \frac{gy_c}{2g} = y_c + \frac{y_c}{2} = \frac{3}{2}y_c$

#### 2.5 Froude Number (Fr)

*   **Definition:** The Froude number is a dimensionless parameter that characterizes the flow regime in open channels. It's the ratio of the flow velocity to the wave velocity.
*   **Formula:**
    $Fr = \frac{v}{\sqrt{gy}}$
    Where:
    *   $v$ is the flow velocity
    *   $g$ is acceleration due to gravity
    *   $y$ is the flow depth
*   **Flow Regimes based on Froude Number:**
    *   $Fr < 1$: Subcritical flow (tranquil flow) - velocity is less than wave speed, disturbances propagate upstream.
    *   $Fr = 1$: Critical flow.
    *   $Fr > 1$: Supercritical flow (rapid flow) - velocity is greater than wave speed, disturbances cannot propagate upstream.

#### 2.6 Alternate Depths

*   **Definition:** For a given specific energy (greater than the minimum specific energy, $E_{min}$), there can be two different flow depths that result in the same specific energy. These depths are called alternate depths or conjugate depths.
*   **Graphical Interpretation:** On a specific energy curve, a horizontal line at a specific energy value ($E > E_{min}$) will intersect the curve at two points, representing the two alternate depths.
*   **Mathematical Relationship:**
    $E = y + \frac{Q^2}{2gB^2y^2}$
    Rearranging this into a cubic equation for $y$:
    $y^3 - Ey^2 + \frac{Q^2}{2gB^2} = 0$
    The roots of this cubic equation are the possible flow depths for the given $E$, $Q$, and $B$. Two of these roots will be positive and physically meaningful.

---

### 3. Plotting Specific Energy Curves:

#### 3.1 Steps for Plotting:

1.  **Choose a constant flow rate ($Q$) and channel width ($B$).**
2.  **Calculate the critical depth ($y_c$) and minimum specific energy ($E_c$).**
    *   $y_c = \left(\frac{Q^2}{gB^2}\right)^{1/3}$
    *   $E_c = \frac{3}{2}y_c$
3.  **Choose a range of flow depths ($y$).** The range should include values less than $y_c$ (supercritical flow) and values greater than $y_c$ (subcritical flow). Ensure $y > 0$.
4.  **For each chosen depth ($y$), calculate the velocity ($v$) and velocity head ($\frac{v^2}{2g}$).**
    *   $v = \frac{Q}{By}$
    *   $\frac{v^2}{2g} = \frac{Q^2}{2gB^2y^2}$
5.  **Calculate the specific energy ($E$) for each depth.**
    *   $E = y + \frac{v^2}{2g}$
6.  **Plot the specific energy ($E$) on the y-axis against the flow depth ($y$) on the x-axis.**
7.  **Mark the critical depth ($y_c$) and minimum specific energy ($E_c$) on the plot.**
8.  **Draw a horizontal line at a selected specific energy value ($E_{selected} > E_c$) to identify the alternate depths.**

#### 3.2 Characteristic Shape of the Specific Energy Curve:

*   **As $y$ approaches 0 (from the positive side):** The velocity $v = Q/(By)$ becomes very large, and thus the velocity head $v^2/(2g)$ becomes very large. Therefore, $E$ approaches infinity. The curve starts from infinity on the y-axis.
*   **As $y$ increases:** The velocity head decreases significantly, while the flow depth increases linearly. Initially, the decrease in velocity head dominates, causing $E$ to decrease.
*   **At critical depth ($y_c$):** Specific energy reaches its minimum value ($E_c$).
*   **As $y$ increases beyond $y_c$:** The flow depth increases linearly, and the velocity head ($v^2/(2g)$) continues to decrease but at a slower rate compared to the increase in $y$. The specific energy ($E$) starts to increase again, approaching $y$ asymptotically.
*   **The curve is asymmetric.**

#### 3.3 Example: Plotting a Specific Energy Curve for a Rectangular Channel

**Given:**
*   Flow rate, $Q = 5 \, \text{m}^3/\text{s}$
*   Channel width, $B = 2 \, \text{m}$
*   Acceleration due to gravity, $g = 9.81 \, \text{m/s}^2$

**Calculations:**

1.  **Critical Depth ($y_c$):**
    $y_c = \left(\frac{Q^2}{gB^2}\right)^{1/3} = \left(\frac{5^2}{9.81 \times 2^2}\right)^{1/3} = \left(\frac{25}{39.24}\right)^{1/3} \approx (0.637)^{1/3} \approx 0.86 \, \text{m}$

2.  **Minimum Specific Energy ($E_c$):**
    $E_c = \frac{3}{2}y_c = \frac{3}{2} \times 0.86 \approx 1.29 \, \text{m}$

3.  **Calculate Specific Energy for various depths ($y$):**
    We need to calculate $E = y + \frac{Q^2}{2gB^2y^2}$
    Let's pre-calculate the constant term: $\frac{Q^2}{2gB^2} = \frac{5^2}{2 \times 9.81 \times 2^2} = \frac{25}{78.48} \approx 0.3185$
    So, $E = y + \frac{0.3185}{y^2}$

    | Depth ($y$) [m] | Velocity ($v = Q/By$) [m/s] | Velocity Head ($v^2/2g$) [m] | Specific Energy ($E = y + v^2/2g$) [m] | Froude Number ($Fr = v/\sqrt{gy}$) | Flow Regime |
    | :-------------- | :---------------------------- | :--------------------------- | :--------------------------------------- | :-------------------------------- | :---------- |
    | 0.2             | $5 / (2 \times 0.2) = 12.5$   | $12.5^2 / (2 \times 9.81) \approx 7.97$ | $0.2 + 7.97 = 8.17$                      | $12.5 / \sqrt{9.81 \times 0.2} \approx 27.9$ | Supercritical |
    | 0.4             | $5 / (2 \times 0.4) = 6.25$   | $6.25^2 / (2 \times 9.81) \approx 1.99$ | $0.4 + 1.99 = 2.39$                      | $6.25 / \sqrt{9.81 \times 0.4} \approx 9.9$  | Supercritical |
    | **0.86 (yc)**   | $5 / (2 \times 0.86) \approx 2.91$ | $2.91^2 / (2 \times 9.81) \approx 0.43$ | $0.86 + 0.43 = 1.29$                     | $2.91 / \sqrt{9.81 \times 0.86} \approx 1.0$  | Critical    |
    | 1.0             | $5 / (2 \times 1.0) = 2.5$    | $2.5^2 / (2 \times 9.81) \approx 0.32$ | $1.0 + 0.32 = 1.32$                      | $2.5 / \sqrt{9.81 \times 1.0} \approx 0.80$  | Subcritical |
    | 1.5             | $5 / (2 \times 1.5) \approx 1.67$ | $1.67^2 / (2 \times 9.81) \approx 0.14$ | $1.5 + 0.14 = 1.64$                      | $1.67 / \sqrt{9.81 \times 1.5} \approx 0.55$  | Subcritical |
    | 2.0             | $5 / (2 \times 2.0) = 1.25$   | $1.25^2 / (2 \times 9.81) \approx 0.08$ | $2.0 + 0.08 = 2.08$                      | $1.25 / \sqrt{9.81 \times 2.0} \approx 0.39$  | Subcritical |

**(Plotting this data will yield the characteristic specific energy curve.)**

---

### 4. Analysis and Applications:

#### 4.1 Interpretation of the Specific Energy Curve:

*   **Supercritical Flow Region ($y < y_c$):** For a given specific energy in this region, a small increase in depth causes a large decrease in specific energy. The flow is fast and shallow.
*   **Subcritical Flow Region ($y > y_c$):** For a given specific energy in this region, a small increase in depth causes a small increase in specific energy. The flow is slow and deep.
*   **Alternate Depths:** If the flow rate is constant, and the specific energy is fixed at $E_{selected} > E_c$, there are two possible depths. The shallower depth is in the supercritical region, and the deeper depth is in the subcritical region. The critical depth $y_c$ is the only depth that occurs at the minimum specific energy.

#### 4.2 Practical Applications:

*   **Channel Transitions:**
    *   **Constriction (Width Decrease):** For a given flow rate, a decrease in channel width ($B$) will increase the velocity. If the energy is conserved, the specific energy curve shifts to the left. This can cause a rise in water level (depth) in the subcritical region to maintain the same specific energy, or a drop in water level in the supercritical region.
    *   **Expansion (Width Increase):** An increase in channel width will decrease the velocity.
*   **Hydraulic Jump:**
    *   A hydraulic jump is a phenomenon where supercritical flow transitions to subcritical flow. This transition occurs with a rapid rise in water level and significant energy dissipation.
    *   The depths before and after the jump (conjugate depths) have the same specific energy. They lie on the specific energy curve at different points corresponding to the same $E$ value.
    *   The specific energy upstream of the jump is higher than the specific energy downstream because energy is lost in the turbulent mixing. However, the *specific energy* calculation for conjugate depths assumes energy conservation *between* those two points, implying that the depths are indeed alternate depths for a given specific energy if we ignore the energy loss during the jump itself. The actual energy downstream will be lower due to dissipation.
*   **Weirs and Gates:** Used to control flow and can induce changes in water depth and energy.

---

### 5. Practice Questions:

**Question 1:**
A rectangular channel is 3 meters wide and carries a flow of $15 \, \text{m}^3/\text{s}$. Calculate the critical depth and the minimum specific energy. If the specific energy is $3.0 \, \text{m}$, what are the possible depths of flow?

**Question 2:**
Explain why the specific energy curve for a given flow rate in a rectangular channel is asymmetric and has a minimum value.

**Question 3:**
Consider a trapezoidal channel with a bottom width of 2 m and side slopes of 1 horizontal to 1 vertical. If the flow rate is $10 \, \text{m}^3/\text{s}$ and the flow depth is 1.5 m, calculate the specific energy and the Froude number. Is the flow subcritical or supercritical?

---

### 6. Answers to Practice Questions:

**Answer 1:**

*   **Given:** $Q = 15 \, \text{m}^3/\text{s}$, $B = 3 \, \text{m}$, $g = 9.81 \, \text{m/s}^2$.
*   **Critical Depth ($y_c$):**
    $y_c = \left(\frac{Q^2}{gB^2}\right)^{1/3} = \left(\frac{15^2}{9.81 \times 3^2}\right)^{1/3} = \left(\frac{225}{88.29}\right)^{1/3} \approx (2.55)^{1/3} \approx 1.37 \, \text{m}$
*   **Minimum Specific Energy ($E_c$):**
    $E_c = \frac{3}{2}y_c = \frac{3}{2} \times 1.37 \approx 2.05 \, \text{m}$
*   **Alternate Depths for $E = 3.0 \, \text{m}$:**
    We use the specific energy equation: $E = y + \frac{Q^2}{2gB^2y^2}$
    $3.0 = y + \frac{15^2}{2 \times 9.81 \times 3^2 \times y^2}$
    $3.0 = y + \frac{225}{176.58 \times y^2}$
    $3.0 = y + \frac{1.274}{y^2}$
    Multiply by $y^2$:
    $3.0y^2 = y^3 + 1.274$
    Rearrange into a cubic equation:
    $y^3 - 3.0y^2 + 1.274 = 0$

    By trial and error or numerical methods, we find the positive roots:
    *   $y_1 \approx 0.65 \, \text{m}$ (Supercritical depth)
    *   $y_2 \approx 2.77 \, \text{m}$ (Subcritical depth)

    *(Note: Solving cubic equations for depth is often done numerically or graphically in practice.)*

**Answer 2:**
The specific energy curve is asymmetric because the velocity head term ($v^2/2g = Q^2/(2gB^2y^2)$) is inversely proportional to the square of the depth, while the depth term ($y$) is linearly proportional to the depth.
*   **As $y \to 0$:** The velocity head dominates and goes to infinity, causing the curve to start from infinity on the y-axis.
*   **As $y \to \infty$:** The velocity head becomes negligible compared to the depth, so $E \approx y$, and the curve becomes asymptotic to the line $E=y$.
The minimum specific energy occurs at the critical depth ($y_c$) where the Froude number is 1. At depths less than $y_c$, the flow is supercritical, and small changes in depth lead to large changes in velocity head. At depths greater than $y_c$, the flow is subcritical, and changes in depth have a less pronounced effect on the velocity head, leading to a more gradual increase in specific energy.

**Answer 3:**

*   **Given:** $B = 2 \, \text{m}$, side slopes 1:1, $Q = 10 \, \text{m}^3/\text{s}$, $y = 1.5 \, \text{m}$.
*   **Area of Flow (A):** For a trapezoidal channel with side slopes $m$ (horizontal to vertical), $A = (B + my)y$. Here $m=1$.
    $A = (2 + 1 \times 1.5) \times 1.5 = (2 + 1.5) \times 1.5 = 3.5 \times 1.5 = 5.25 \, \text{m}^2$.
*   **Velocity (v):**
    $v = Q/A = 10 \, \text{m}^3/\text{s} / 5.25 \, \text{m}^2 \approx 1.90 \, \text{m/s}$.
*   **Specific Energy (E):**
    $E = y + \frac{v^2}{2g} = 1.5 \, \text{m} + \frac{(1.90 \, \text{m/s})^2}{2 \times 9.81 \, \text{m/s}^2} = 1.5 \, \text{m} + \frac{3.61}{19.62} \, \text{m} \approx 1.5 \, \text{m} + 0.18 \, \text{m} = 1.68 \, \text{m}$.
*   **Froude Number (Fr):** For a trapezoidal channel, $Fr = \frac{v}{\sqrt{g D_h}}$, where $D_h$ is the hydraulic depth.
    Hydraulic Depth ($D_h$) = $A/T$, where $T$ is the top width.
    Top width $T = B + 2my = 2 + 2 \times 1 \times 1.5 = 2 + 3 = 5 \, \text{m}$.
    $D_h = 5.25 \, \text{m}^2 / 5 \, \text{m} = 1.05 \, \text{m}$.
    $Fr = \frac{1.90 \, \text{m/s}}{\sqrt{9.81 \, \text{m/s}^2 \times 1.05 \, \text{m}}} = \frac{1.90}{\sqrt{10.299}} \approx \frac{1.90}{3.21} \approx 0.59$.
*   **Flow Regime:** Since $Fr < 1$, the flow is **subcritical**.

---

### 7. Important Points to Remember:

*   Specific energy is the total energy per unit weight measured from the channel bed.
*   For a constant flow rate, specific energy has a minimum value at the critical flow condition ($Fr=1$).
*   The specific energy curve plots $E$ vs. $y$ for a constant $Q$.
*   For any specific energy value greater than the minimum, there are two possible depths (alternate depths), one subcritical and one supercritical.
*   The critical depth ($y_c$) is the only depth that occurs at the minimum specific energy.
*   Understanding specific energy is crucial for analyzing changes in flow conditions, such as those occurring in channel transitions and hydraulic jumps.
*   The Froude number is a key parameter in classifying flow regimes (subcritical, critical, supercritical).
*   While the calculation of alternate depths for a given specific energy assumes energy conservation *between* those depths, real-world phenomena like hydraulic jumps involve significant energy dissipation.
