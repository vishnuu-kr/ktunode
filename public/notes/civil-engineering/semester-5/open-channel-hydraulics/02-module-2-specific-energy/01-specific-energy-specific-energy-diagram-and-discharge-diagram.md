---
title: "Specific energy- specific energy diagram and discharge diagram"
subject: "OPEN CHANNEL HYDRAULICS"
module: "Module 2: Specific energy"
branch: "Civil Engineering"
semester: 5
topicId: "689f15cd56b5e963ba810eab"
status: "completed"
scrapedAt: "2026-05-20T18:49:48.949Z"
---
# OPEN CHANNEL HYDRAULICS - Module 2: Specific Energy

## Topic: Specific Energy - Specific Energy Diagram and Discharge Diagram

This module delves into the concept of specific energy, a fundamental parameter in open channel flow analysis. We will explore how specific energy influences the flow characteristics and how these relationships are visualized through specific energy and discharge diagrams.

---

### **1. Specific Energy (E)**

**Definition:**
Specific energy is defined as the energy of the flow per unit weight of the fluid, measured from the channel bed. It represents the sum of the flow depth ($y$) and the kinetic energy of the flow per unit weight.

**Formula:**
$$E = y + \frac{v^2}{2g}$$
where:
*   $E$ = Specific Energy (meters or feet)
*   $y$ = Flow Depth (meters or feet)
*   $v$ = Average Flow Velocity (m/s or ft/s)
*   $g$ = Acceleration due to gravity (9.81 m/s² or 32.2 ft/s²)

**Alternative Expression using Discharge (Q) and Channel Geometry:**
Since velocity ($v$) is related to discharge ($Q$) and the cross-sectional area of flow ($A$), we can express specific energy in terms of discharge.
$$v = \frac{Q}{A}$$
Substituting this into the specific energy equation:
$$E = y + \frac{(Q/A)^2}{2g}$$
$$E = y + \frac{Q^2}{2gA^2}$$

**Key Concepts:**

*   **Energy Datum:** Specific energy is measured with respect to the channel bed.
*   **Kinetic Energy Correction Factor:** In non-uniform velocity distributions, a kinetic energy correction factor ($\alpha$) is often included: $E = y + \alpha \frac{v^2}{2g}$. For simplicity in many introductory treatments, $\alpha$ is often assumed to be 1.
*   **Relationship with Flow Depth:** For a given discharge, as the flow depth increases, the velocity decreases, and vice versa. This inverse relationship is crucial for understanding specific energy.

---

### **2. The Specific Energy Diagram (E-y Diagram)**

**Concept:**
The specific energy diagram is a graphical representation of the relationship between specific energy ($E$) and flow depth ($y$) for a *constant discharge* ($Q$).

**Construction:**

1.  **Equation:** $E = y + \frac{Q^2}{2gA^2}$
2.  **Variables:**
    *   **Independent Variable:** Flow Depth ($y$)
    *   **Dependent Variable:** Specific Energy ($E$)
3.  **Plotting:**
    *   The y-axis represents Specific Energy ($E$).
    *   The x-axis represents Flow Depth ($y$).
4.  **Key Features of the Curve:**
    *   **Asymptotic Line (y=E):** The line where $E=y$ is an asymptote. This represents a theoretical flow where the velocity is zero, which is not practically achievable for a non-zero discharge.
    *   **Minimum Specific Energy ($E_{min}$):** For a given discharge, there exists a minimum specific energy. This occurs at the **critical flow** condition.
    *   **Critical Depth ($y_c$):** The flow depth at which minimum specific energy occurs.
    *   **Supercritical Flow:** Flow depths *less than* the critical depth ($y < y_c$) correspond to high velocities and low depths. On the E-y diagram, these points lie on the left branch of the curve, where $E$ decreases as $y$ increases.
    *   **Subcritical Flow:** Flow depths *greater than* the critical depth ($y > y_c$) correspond to low velocities and high depths. On the E-y diagram, these points lie on the right branch of the curve, where $E$ increases as $y$ increases.
    *   **For a given Specific Energy (E > $E_{min}$):** There are *two* possible flow depths that yield the same specific energy. One is subcritical ($y > y_c$), and the other is supercritical ($y < y_c$). These are called **alternate depths** or **conjugate depths**.

**Mathematical Derivation of Minimum Specific Energy (Critical Flow):**
To find the minimum specific energy, we differentiate the specific energy equation with respect to $y$ and set the derivative to zero, assuming $Q$ is constant.
$$E = y + \frac{Q^2}{2gA^2}$$
$$\frac{dE}{dy} = 1 + \frac{d}{dy}\left(\frac{Q^2}{2gA^2}\right) = 0$$
Using the chain rule, $\frac{d}{dy}(A^{-2}) = -2A^{-3}\frac{dA}{dy}$.
$$\frac{dE}{dy} = 1 + \frac{Q^2}{2g}(-2A^{-3}\frac{dA}{dy}) = 0$$
$$1 - \frac{Q^2}{gA^3}\frac{dA}{dy} = 0$$
$$1 = \frac{Q^2}{gA^3}\frac{dA}{dy}$$
Rearranging, we get:
$$\frac{Q^2}{gA^3}\frac{dA}{dy} = 1$$
We know that $Q = Av$, so $Q^2 = A^2v^2$.
$$\frac{A^2v^2}{gA^3}\frac{dA}{dy} = 1$$
$$\frac{v^2}{gA}\frac{dA}{dy} = 1$$
Also, for open channels, the Froude number ($Fr$) is defined as $Fr = \frac{v}{\sqrt{gD}}$, where $D$ is the hydraulic depth ($D = \frac{A}{T}$, and $T$ is the top width).
So, $\frac{v^2}{gD} = Fr^2$.
Substituting $D = A/T$:
$$\frac{v^2}{g(A/T)}\frac{dA}{dy} = 1$$
$$\frac{v^2T}{gA}\frac{dA}{dy} = 1$$
The term $\frac{T}{A}\frac{dA}{dy}$ is related to the rate of change of cross-sectional area with depth.
A key condition for minimum specific energy is when the Froude number ($Fr$) is equal to 1.
$$Fr = \frac{v}{\sqrt{gD}} = 1 \implies v = \sqrt{gD}$$
Substituting $v = Q/A$ and $D = A/T$:
$$\frac{Q}{A} = \sqrt{g\frac{A}{T}}$$
Squaring both sides:
$$\frac{Q^2}{A^2} = g\frac{A}{T}$$
$$Q^2 = \frac{gA^3}{T}$$
Therefore, the condition for minimum specific energy is:
$$\frac{Q^2}{gA^3} = \frac{1}{T}$$
Or, equivalently:
$$v^2 = g \frac{A}{T} = gD$$
This implies that minimum specific energy occurs at critical flow, where $Fr = 1$.

**Minimum Specific Energy ($E_{min}$) Calculation:**
$$E_{min} = y_c + \frac{v_c^2}{2g}$$
Since $v_c^2 = gD_c$, we have:
$$E_{min} = y_c + \frac{gD_c}{2g} = y_c + \frac{D_c}{2}$$
where $y_c$ is the critical depth and $D_c$ is the critical hydraulic depth.

---

### **3. The Discharge Diagram (Q-y Diagram)**

**Concept:**
The discharge diagram is a graphical representation of the relationship between discharge ($Q$) and flow depth ($y$) for a *constant specific energy* ($E$).

**Construction:**

1.  **Equation:** $Q = \sqrt{2gA^2(E-y)}$
2.  **Variables:**
    *   **Independent Variable:** Flow Depth ($y$)
    *   **Dependent Variable:** Discharge ($Q$)
3.  **Plotting:**
    *   The y-axis represents Discharge ($Q$).
    *   The x-axis represents Flow Depth ($y$).
4.  **Key Features of the Curve:**
    *   **Maximum Discharge ($Q_{max}$):** For a given specific energy, there exists a maximum discharge. This also occurs at the **critical flow** condition.
    *   **Critical Depth ($y_c$):** The flow depth at which maximum discharge occurs for a given specific energy.
    *   **Supercritical Flow:** Flow depths *less than* the critical depth ($y < y_c$) correspond to high velocities and low depths. On the Q-y diagram, these points lie on the left branch of the curve, where $Q$ increases as $y$ increases.
    *   **Subcritical Flow:** Flow depths *greater than* the critical depth ($y > y_c$) correspond to low velocities and high depths. On the Q-y diagram, these points lie on the right branch of the curve, where $Q$ decreases as $y$ increases.
    *   **For a given Discharge (Q < $Q_{max}$):** There are *two* possible flow depths that yield the same discharge, given a constant specific energy. One is subcritical ($y > y_c$), and the other is supercritical ($y < y_c$). These are again called **alternate depths** or **conjugate depths**.

**Mathematical Derivation of Maximum Discharge (Critical Flow):**
To find the maximum discharge for a constant specific energy, we differentiate the discharge equation with respect to $y$ and set the derivative to zero.
$$Q = \sqrt{2gA^2(E-y)}$$
$$\frac{dQ}{dy} = \frac{1}{2\sqrt{2gA^2(E-y)}} \cdot \frac{d}{dy}(2gA^2(E-y))$$
$$\frac{dQ}{dy} = \frac{2g}{2Q} \cdot \frac{d}{dy}(A^2E - A^2y)$$
$$\frac{dQ}{dy} = \frac{g}{Q} \cdot (E \cdot 2A \frac{dA}{dy} - (A^2 + 2Ay\frac{dA}{dy}))$$
Setting $\frac{dQ}{dy} = 0$ implies the numerator is zero:
$$E \cdot 2A \frac{dA}{dy} - A^2 - 2Ay\frac{dA}{dy} = 0$$
$$2A \frac{dA}{dy} (E - y) - A^2 = 0$$
We know $E = y + \frac{v^2}{2g}$, so $E-y = \frac{v^2}{2g}$.
$$2A \frac{dA}{dy} \left(\frac{v^2}{2g}\right) - A^2 = 0$$
$$\frac{A v^2}{g} \frac{dA}{dy} - A^2 = 0$$
$$\frac{v^2}{g} \frac{dA}{dy} - A = 0$$
$$\frac{v^2}{g} \frac{dA}{dy} = A$$
This can be rewritten as:
$$v^2 = g \frac{A}{dA/dy}$$
Recall from the specific energy analysis that minimum $E$ occurs when $v^2 = gD$.
So, maximum $Q$ for a given $E$ also occurs at critical flow conditions, $Fr=1$.

**Maximum Discharge ($Q_{max}$) Calculation:**
$$Q_{max} = \sqrt{2gA_c^2(E - y_c)}$$
where $A_c$ is the cross-sectional area at critical depth $y_c$.

---

### **4. Important Points to Remember**

*   **Specific Energy is Energy above the Bed:** It's not total energy.
*   **Constant Discharge for E-y Diagram:** The shape of the E-y curve is for a fixed flow rate.
*   **Constant Specific Energy for Q-y Diagram:** The shape of the Q-y curve is for a fixed energy level.
*   **Critical Flow ($Fr=1$) is Key:** It represents the point of minimum specific energy (for a given Q) and maximum discharge (for a given E).
*   **Alternate Depths:** For any specific energy greater than the minimum, there are two flow depths (supercritical and subcritical) that have the same specific energy.
*   **Conjugate Depths:** Similarly, for any discharge less than the maximum, there are two flow depths (supercritical and subcritical) that have the same discharge, provided the specific energy is sufficient.
*   **Energy Loss:** In reality, energy is lost due to friction and turbulence. These diagrams represent ideal conditions without energy loss.
*   **Non-rectangular Channels:** The calculations for area ($A$) and top width ($T$) become more complex for non-rectangular channels, affecting the shape of the curves.

---

### **5. Examples**

**Example 1: Specific Energy Diagram for a Rectangular Channel**

A rectangular channel 3 m wide carries a discharge of 15 m³/s. Calculate the specific energy for flow depths of 1 m, 1.5 m, and 2 m. Sketch the specific energy diagram for this discharge and indicate the critical depth.

**Solution:**

**Given:**
*   Width ($B$) = 3 m
*   Discharge ($Q$) = 15 m³/s
*   $g$ = 9.81 m/s²

**Calculations:**
The cross-sectional area ($A$) for a rectangular channel is $A = B \times y$.

*   **For y = 1 m:**
    *   $A = 3 \times 1 = 3$ m²
    *   $v = Q/A = 15 / 3 = 5$ m/s
    *   $E = y + v^2/(2g) = 1 + 5^2/(2 \times 9.81) = 1 + 25/19.62 = 1 + 1.27 = 2.27$ m

*   **For y = 1.5 m:**
    *   $A = 3 \times 1.5 = 4.5$ m²
    *   $v = Q/A = 15 / 4.5 = 3.33$ m/s
    *   $E = y + v^2/(2g) = 1.5 + 3.33^2/(2 \times 9.81) = 1.5 + 11.09/19.62 = 1.5 + 0.57 = 2.07$ m

*   **For y = 2 m:**
    *   $A = 3 \times 2 = 6$ m²
    *   $v = Q/A = 15 / 6 = 2.5$ m/s
    *   $E = y + v^2/(2g) = 2 + 2.5^2/(2 \times 9.81) = 2 + 6.25/19.62 = 2 + 0.32 = 2.32$ m

**Finding Critical Depth ($y_c$):**
The critical flow condition for a rectangular channel is $y_c = (Q^2 / (gB^2))^{1/3}$.
$y_c = (15^2 / (9.81 \times 3^2))^{1/3} = (225 / (9.81 \times 9))^{1/3} = (225 / 88.29)^{1/3} = (2.549)^{1/3} \approx 1.366$ m

**Minimum Specific Energy ($E_{min}$):**
$E_{min} = 1.5 y_c = 1.5 \times 1.366 \approx 2.049$ m

**Sketching the Specific Energy Diagram:**
Plot the points (y, E): (1, 2.27), (1.5, 2.07), (2, 2.32).
The critical depth $y_c \approx 1.366$ m. The minimum specific energy is $E_{min} \approx 2.049$ m.
The diagram will show a curve starting from $E=y$ asymptotically, dropping to a minimum at $y_c$ and $E_{min}$, and then rising again. The calculated points will lie on this curve.

**Interpretation:**
*   At y = 1 m, the flow is supercritical ($y < y_c$).
*   At y = 1.5 m, the flow is close to critical ($y \approx y_c$).
*   At y = 2 m, the flow is subcritical ($y > y_c$).

---

**Example 2: Discharge Diagram for a Rectangular Channel**

A rectangular channel 2 m wide has a specific energy of 3 m. Determine the possible flow depths and sketch the discharge diagram for this specific energy, indicating the critical flow condition.

**Solution:**

**Given:**
*   Width ($B$) = 2 m
*   Specific Energy ($E$) = 3 m
*   $g$ = 9.81 m/s²

**Finding Critical Depth ($y_c$) and Maximum Discharge ($Q_{max}$):**
The minimum specific energy for a rectangular channel is $E_{min} = 1.5 y_c$.
So, $y_c = E_{min} / 1.5$.
However, $E$ is given as 3 m. We need to find $y_c$ such that $E_{min}$ for that $y_c$ is related to the given $E$.
Alternatively, we know that maximum discharge occurs at critical flow where $v_c = \sqrt{gD_c}$. For a rectangular channel, $D_c = A_c/T_c = (B \cdot y_c) / B = y_c$.
So, $v_c = \sqrt{g y_c}$.
The specific energy at critical flow is $E_{min} = y_c + v_c^2/(2g) = y_c + (g y_c)/(2g) = y_c + y_c/2 = 1.5 y_c$.
For a given specific energy $E$, the critical flow condition occurs when $E = 1.5 y_c$.
Therefore, $y_c = E / 1.5 = 3 / 1.5 = 2$ m.

Now, calculate $Q_{max}$ at $y_c = 2$ m and $E = 3$ m.
$A_c = B \times y_c = 2 \times 2 = 4$ m²
$Q_{max} = \sqrt{2gA_c^2(E - y_c)} = \sqrt{2 \times 9.81 \times 4^2 \times (3 - 2)}$
$Q_{max} = \sqrt{2 \times 9.81 \times 16 \times 1} = \sqrt{313.92} \approx 17.72$ m³/s

**Finding Possible Flow Depths for a Given Discharge (e.g., Q = 15 m³/s):**
For $Q=15$ m³/s, $E=3$ m, $B=2$ m.
$Q = \sqrt{2gA^2(E-y)} \implies Q^2 = 2gA^2(E-y)$
$15^2 = 2 \times 9.81 \times (2y)^2 \times (3-y)$
$225 = 19.62 \times 4y^2 \times (3-y)$
$225 = 78.48 y^2 (3-y)$
$225 = 235.44 y^2 - 78.48 y^3$
$78.48 y^3 - 235.44 y^2 + 225 = 0$

We know that one of the roots is $y_c = 2$ m (critical flow), which would correspond to $Q_{max}$ if $E$ was the minimum specific energy at $y_c$. However, here $E=3$ is a given energy. We need to find $y$ values for $Q=15$.

Let's try solving the cubic equation.
For $y=1$ m:
$Q = \sqrt{2 \times 9.81 \times (2 \times 1)^2 \times (3-1)} = \sqrt{19.62 \times 4 \times 2} = \sqrt{156.96} \approx 12.53$ m³/s

For $y=1.5$ m:
$Q = \sqrt{2 \times 9.81 \times (2 \times 1.5)^2 \times (3-1.5)} = \sqrt{19.62 \times 6^2 \times 1.5} = \sqrt{19.62 \times 36 \times 1.5} = \sqrt{1059.48} \approx 32.55$ m³/s

The question asks for *possible* flow depths for a given specific energy and a discharge *less than* $Q_{max}$. Let's rephrase to find flow depths that give a specific discharge *given* E=3.

Consider $Q=10$ m³/s with $E=3$ m and $B=2$ m.
$10^2 = 2 \times 9.81 \times (2y)^2 \times (3-y)$
$100 = 78.48 y^2 (3-y)$
$100 = 235.44 y^2 - 78.48 y^3$
$78.48 y^3 - 235.44 y^2 + 100 = 0$

We know $y_c = 2$ m. Let's try values around $y_c$.
If $y=0.8$ m (supercritical):
$A = 2 \times 0.8 = 1.6$ m²
$Q = \sqrt{2 \times 9.81 \times (1.6)^2 \times (3-0.8)} = \sqrt{19.62 \times 2.56 \times 2.2} = \sqrt{110.53} \approx 10.51$ m³/s

If $y=2.5$ m (subcritical):
$A = 2 \times 2.5 = 5$ m²
$Q = \sqrt{2 \times 9.81 \times (5)^2 \times (3-2.5)} = \sqrt{19.62 \times 25 \times 0.5} = \sqrt{245.25} \approx 15.66$ m³/s

So for $Q=10.51$ m³/s, the depths are approximately 0.8 m and 2.5 m.

**Sketching the Discharge Diagram:**
The diagram will show a curve for $E=3$ m. The peak of the curve is at $y_c = 2$ m, with $Q_{max} \approx 17.72$ m³/s.
The curve starts from $y=0, Q=0$, rises to the peak at $(2, 17.72)$, and then decreases.
For any $Q < 17.72$, there will be two depths: one $y < 2$ m (supercritical) and one $y > 2$ m (subcritical).

---

### **6. Practice Questions/Exercises**

**Question 1:**
A rectangular channel 4 m wide carries a discharge of 20 m³/s. Calculate the specific energy when the flow depth is 1.2 m. Also, determine the critical depth and the minimum specific energy for this discharge.

**Answer 1:**
*   $A = 4 \times 1.2 = 4.8$ m²
*   $v = 20 / 4.8 = 4.167$ m/s
*   $E = 1.2 + (4.167)^2 / (2 \times 9.81) = 1.2 + 17.36 / 19.62 = 1.2 + 0.885 = 2.085$ m

*   Critical Depth ($y_c$):
    $y_c = (Q^2 / (gB^2))^{1/3} = (20^2 / (9.81 \times 4^2))^{1/3} = (400 / (9.81 \times 16))^{1/3} = (400 / 156.96)^{1/3} = (2.548)^{1/3} \approx 1.366$ m

*   Minimum Specific Energy ($E_{min}$):
    $E_{min} = 1.5 y_c = 1.5 \times 1.366 \approx 2.049$ m

**Question 2:**
For the same channel in Question 1, if the specific energy is 2.5 m, calculate the possible flow depths.

**Answer 2:**
We need to solve $E = y + Q^2 / (2gA^2)$ with $E=2.5$ m, $Q=20$ m³/s, $B=4$ m, $g=9.81$ m/s².
$2.5 = y + (20)^2 / (2 \times 9.81 \times (4y)^2)$
$2.5 = y + 400 / (19.62 \times 16y^2)$
$2.5 = y + 400 / (313.92 y^2)$
$2.5 = y + 1.274 / y^2$
Multiply by $y^2$:
$2.5y^2 = y^3 + 1.274$
$y^3 - 2.5y^2 + 1.274 = 0$

We know that $y_c \approx 1.366$ m corresponds to $E_{min} \approx 2.049$ m. Since our given $E=2.5$ m is greater than $E_{min}$, there should be two possible depths.
We can test values:
*   If $y = 0.8$ m (supercritical): $E = 0.8 + (20 / (4 \times 0.8))^2 / (2 \times 9.81) = 0.8 + (5)^2 / 19.62 = 0.8 + 25 / 19.62 = 0.8 + 1.27 = 2.07$ m (This is below 2.5 m, so the flow depth for Q=20 with E=2.5 will be different)

Let's re-evaluate using the cubic equation. We know $y_c \approx 1.366$ m. One depth should be less than $y_c$ and the other greater.
Let's test $y=0.8$ m: $0.8^3 - 2.5(0.8)^2 + 1.274 = 0.512 - 2.5(0.64) + 1.274 = 0.512 - 1.6 + 1.274 = 0.186 \neq 0$.

Let's test values systematically:
*   Try $y=0.7$: $0.7^3 - 2.5(0.7)^2 + 1.274 = 0.343 - 2.5(0.49) + 1.274 = 0.343 - 1.225 + 1.274 = 0.392$
*   Try $y=0.6$: $0.6^3 - 2.5(0.6)^2 + 1.274 = 0.216 - 2.5(0.36) + 1.274 = 0.216 - 0.9 + 1.274 = 0.59$
*   Try $y=0.5$: $0.5^3 - 2.5(0.5)^2 + 1.274 = 0.125 - 2.5(0.25) + 1.274 = 0.125 - 0.625 + 1.274 = 0.774$

It seems my initial calculation for $y=0.8$ leading to $E=2.07$ was correct for $Q=20$. This implies for $E=2.5$, the supercritical depth will be *less than* 0.8 m.

Let's try $y=0.75$:
$E = 0.75 + (20 / (4 \times 0.75))^2 / (2 \times 9.81) = 0.75 + (20/3)^2 / 19.62 = 0.75 + (6.667)^2 / 19.62 = 0.75 + 44.44 / 19.62 = 0.75 + 2.265 = 3.015$ m (This is too high, so the supercritical depth is between 0.75 and 0.8).

Let's try solving the cubic equation numerically or graphically.
For $y \approx 0.78$ m:
$E = 0.78 + (20 / (4 \times 0.78))^2 / (2 \times 9.81) = 0.78 + (20/3.12)^2 / 19.62 = 0.78 + (6.41)^2 / 19.62 = 0.78 + 41.09 / 19.62 = 0.78 + 2.09 = 2.87$ m

Let's try $y=0.76$ m:
$E = 0.76 + (20 / (4 \times 0.76))^2 / (2 \times 9.81) = 0.76 + (20/3.04)^2 / 19.62 = 0.76 + (6.579)^2 / 19.62 = 0.76 + 43.28 / 19.62 = 0.76 + 2.206 = 2.966$ m

Let's try $y=0.755$ m:
$E = 0.755 + (20 / (4 \times 0.755))^2 / (2 \times 9.81) = 0.755 + (20/3.02)^2 / 19.62 = 0.755 + (6.623)^2 / 19.62 = 0.755 + 43.86 / 19.62 = 0.755 + 2.235 = 2.99$ m

It looks like the supercritical depth is very close to 0.75 m for E=2.5. Let's test $y=0.75$ again.
$E = 0.75 + (20/(4 \times 0.75))^2/(2 \times 9.81) = 0.75 + (6.667)^2/19.62 = 0.75 + 44.44/19.62 = 0.75 + 2.265 = 3.015$. This is slightly over.
So the supercritical depth is slightly less than 0.75 m, say $y_1 \approx 0.745$ m.

Now for the subcritical depth:
We know $y_c \approx 1.366$ m. The subcritical depth must be greater than $y_c$.
Let's try $y = 1.8$ m:
$E = 1.8 + (20 / (4 \times 1.8))^2 / (2 \times 9.81) = 1.8 + (20/7.2)^2 / 19.62 = 1.8 + (2.778)^2 / 19.62 = 1.8 + 7.717 / 19.62 = 1.8 + 0.393 = 2.193$ m (Too low)

Let's try $y = 2.0$ m:
$E = 2.0 + (20 / (4 \times 2.0))^2 / (2 \times 9.81) = 2.0 + (20/8)^2 / 19.62 = 2.0 + (2.5)^2 / 19.62 = 2.0 + 6.25 / 19.62 = 2.0 + 0.318 = 2.318$ m (Still too low)

Let's try $y = 2.2$ m:
$E = 2.2 + (20 / (4 \times 2.2))^2 / (2 \times 9.81) = 2.2 + (20/8.8)^2 / 19.62 = 2.2 + (2.273)^2 / 19.62 = 2.2 + 5.166 / 19.62 = 2.2 + 0.263 = 2.463$ m (Close!)

Let's try $y = 2.22$ m:
$E = 2.22 + (20 / (4 \times 2.22))^2 / (2 \times 9.81) = 2.22 + (20/8.88)^2 / 19.62 = 2.22 + (2.252)^2 / 19.62 = 2.22 + 5.071 / 19.62 = 2.22 + 0.258 = 2.478$ m

Let's try $y=2.25$ m:
$E = 2.25 + (20 / (4 \times 2.25))^2 / (2 \times 9.81) = 2.25 + (20/9)^2 / 19.62 = 2.25 + (2.222)^2 / 19.62 = 2.25 + 4.937 / 19.62 = 2.25 + 0.252 = 2.502$ m (Very close!)

So, the possible flow depths are approximately $y_1 \approx 0.745$ m and $y_2 \approx 2.25$ m.

**Question 3:**
Describe the difference between the specific energy diagram and the discharge diagram.

**Answer 3:**
*   **Specific Energy Diagram (E-y):** Plots Specific Energy (E) against Flow Depth (y) for a **constant discharge (Q)**. It shows how energy requirements change with depth for a fixed flow rate. The minimum point on the curve corresponds to critical flow.
*   **Discharge Diagram (Q-y):** Plots Discharge (Q) against Flow Depth (y) for a **constant specific energy (E)**. It shows the maximum discharge achievable for a given energy level, which occurs at critical flow.

**Question 4:**
At what condition does minimum specific energy occur? What is the Froude number at this condition?

**Answer 4:**
Minimum specific energy occurs at the **critical flow** condition. The Froude number ($Fr$) at this condition is **$Fr = 1$**.

---

This concludes Module 2: Specific Energy. Understanding the concepts of specific energy and its graphical representations (E-y and Q-y diagrams) is vital for analyzing various open channel flow phenomena like hydraulic jumps and transitions.
