---
title: "Earth pressure with layered backfill - Numerical problems"
subject: "FOUNDATION ENGINEERING"
module: "Module 1: Earth pressure "
branch: "Civil Engineering"
semester: 5
topicId: "689f15cd56b5e963ba810e2b"
status: "completed"
scrapedAt: "2026-05-20T18:48:26.354Z"
---
# FOUNDATION ENGINEERING: Module 1 - Earth Pressure with Layered Backfill

## Topic: Earth Pressure with Layered Backfill - Numerical Problems

---

### **1. Introduction to Earth Pressure**

*   **Definition:** Earth pressure is the lateral force exerted by soil on a retaining structure.
*   **Importance:** Understanding earth pressure is crucial for designing safe and economical retaining walls, basement walls, and other earth-retaining structures.
*   **Types of Earth Pressure:**
    *   **At-Rest Earth Pressure ($K_0$):** Exerted when the soil mass is not moving relative to the retaining structure. This is the initial state.
    *   **Active Earth Pressure ($K_a$):** Exerted when the retaining structure moves away from the soil, causing the soil to expand and mobilize its shear strength. This is the minimum lateral pressure.
    *   **Passive Earth Pressure ($K_p$):** Exerted when the retaining structure moves into the soil, compressing the soil and mobilizing its shear strength in the opposite direction. This is the maximum lateral pressure.

---

### **2. Earth Pressure in Layered Backfill**

*   **Concept:** When the backfill consists of layers of different soils, the earth pressure distribution is no longer uniform or simply triangular. The properties of each layer (unit weight, angle of internal friction, cohesion) influence the pressure exerted.
*   **Challenge:** Standard formulas for homogeneous backfill (Rankine or Coulomb) are not directly applicable. We need methods to account for the variations in soil properties.

---

### **3. Methods for Calculating Earth Pressure in Layered Backfill**

#### **3.1. Coefficient of Earth Pressure ($K$) Approach**

This is a common simplified approach that adapts the concepts of $K_0$, $K_a$, or $K_p$ to layered soils.

*   **General Principle:** Calculate the earth pressure from each layer individually, considering its properties and the pressure transmitted from the layers above.
*   **Key Parameters:**
    *   **Unit Weight ($\gamma$):** Weight of soil per unit volume.
    *   **Angle of Internal Friction ($\phi$):** Resistance to shearing within the soil.
    *   **Cohesion ($c$):** Force binding soil particles together.
    *   **Coefficient of Earth Pressure ($K$):** The ratio of lateral earth pressure to vertical earth pressure. This value changes depending on the soil layer and whether we are considering active, passive, or at-rest conditions.

*   **Calculating Pressure for Each Layer:**
    *   **Vertical Pressure ($p_v$):** The vertical pressure at the base of a layer is the sum of the vertical pressures from all layers above it.
        $p_{v,i} = \sum_{j=1}^{i} \gamma_j H_j$
        Where:
        *   $p_{v,i}$ is the vertical pressure at the base of layer $i$.
        *   $\gamma_j$ is the unit weight of layer $j$.
        *   $H_j$ is the thickness of layer $j$.
    *   **Lateral Pressure ($p_h$):** The lateral pressure at the base of a layer is typically calculated using the coefficient of earth pressure for that layer.
        $p_{h,i} = K_i \cdot p_{v,i} - \text{cohesion component (if applicable)}$

*   **Cohesion Component (for active pressure):** When cohesion is present, the minimum lateral pressure required to prevent movement (active condition) is not zero.
    *   Rankine Active Pressure with Cohesion: $p_a = \gamma z K_a - 2c\sqrt{K_a}$
    *   In layered backfill, this translates to: $p_{h,i} = K_i \cdot p_{v,i} - 2c_i\sqrt{K_i}$ (for active conditions)
    *   **Important Note:** The cohesion term only affects the pressure profile if the retaining wall is designed for active conditions and the soil has cohesion. For at-rest or passive conditions, cohesion is usually fully mobilized and doesn't create a "tension crack" effect.

*   **Calculating $K$ Values:**
    *   **Rankine Active Pressure Coefficient ($K_a$):** $K_a = \frac{1 - \sin\phi}{1 + \sin\phi}$
    *   **Rankine Passive Pressure Coefficient ($K_p$):** $K_p = \frac{1 + \sin\phi}{1 - \sin\phi}$
    *   **Rankine At-Rest Pressure Coefficient ($K_0$):** For normally consolidated soils, $K_0 \approx 1 - \sin\phi$. For overconsolidated soils, $K_0$ can be significantly higher. In the absence of specific information, $K_0$ is often assumed or provided in the problem.
    *   **Coulomb's Theory:** For active and passive conditions, Coulomb's theory provides more complex formulas that consider the wall friction angle ($\delta$) and the backfill inclination angle. However, for simplicity in introductory layered problems, Rankine values are often used unless specified.

*   **Pressure Distribution:** The pressure distribution at the interface between two layers needs careful consideration. The lateral pressure exerted by the lower layer on the structure is influenced by the vertical pressure transmitted through the upper layer, and the lateral pressure coefficient of the lower layer.

#### **3.2. Methods based on Shear Strength Mobilization (e.g., Janbu's Method for $K_0$)**

While Rankine and Coulomb are common, more advanced methods exist, particularly for at-rest conditions ($K_0$). These often involve numerical integration or iterative solutions to account for the continuous change in soil properties and stress state. For this module, we will focus on the $K$ coefficient approach which is more typical for introductory numerical problems.

---

### **4. Numerical Problem Solving Strategy**

1.  **Identify Layers:** Clearly define the different soil layers and their properties ($\gamma$, $\phi$, $c$).
2.  **Determine the Condition:** Is it active, passive, or at-rest pressure? This determines which $K$ value to use.
3.  **Calculate $K$ for Each Layer:** Use appropriate formulas (e.g., Rankine $K_a$) for each soil layer.
4.  **Calculate Vertical Pressure at Each Interface:** Starting from the top, calculate the cumulative vertical pressure at the base of each layer.
5.  **Calculate Lateral Pressure at Each Interface:** Apply the formula $p_h = K \cdot p_v - 2c\sqrt{K}$ (for active) or $p_h = K \cdot p_v$ (for at-rest/passive without cohesion) for each layer.
6.  **Determine the Pressure Profile:** Plot the pressure distribution diagram. The pressure will change slope at each interface due to the change in $\gamma$ and $K$.

---

### **5. Worked Examples**

#### **Example 1: Active Pressure with Two Layers (No Cohesion)**

A retaining wall supports a backfill consisting of two layers:
*   **Layer 1 (Top):** Thickness $H_1 = 4$ m, Unit weight $\gamma_1 = 18 \, \text{kN/m}^3$, $\phi_1 = 30^\circ$.
*   **Layer 2 (Bottom):** Thickness $H_2 = 3$ m, Unit weight $\gamma_2 = 20 \, \text{kN/m}^3$, $\phi_2 = 35^\circ$.

Calculate the earth pressure distribution on the wall assuming active conditions.

**Solution:**

**Step 1: Calculate $K$ values for each layer (Rankine Active).**
*   Layer 1 ($\phi_1 = 30^\circ$):
    $K_{a1} = \frac{1 - \sin 30^\circ}{1 + \sin 30^\circ} = \frac{1 - 0.5}{1 + 0.5} = \frac{0.5}{1.5} = \frac{1}{3} \approx 0.333$
*   Layer 2 ($\phi_2 = 35^\circ$):
    $K_{a2} = \frac{1 - \sin 35^\circ}{1 + \sin 35^\circ} = \frac{1 - 0.5736}{1 + 0.5736} = \frac{0.4264}{1.5736} \approx 0.271$

**Step 2: Calculate vertical pressures at interfaces.**
*   **At the top of the wall (z=0):** $p_{v,top} = 0$
*   **At the base of Layer 1 (z=4 m):**
    $p_{v1} = \gamma_1 H_1 = 18 \, \text{kN/m}^3 \times 4 \, \text{m} = 72 \, \text{kN/m}^2$
*   **At the base of Layer 2 (z=7 m):**
    $p_{v2} = \gamma_1 H_1 + \gamma_2 H_2 = 72 \, \text{kN/m}^2 + (20 \, \text{kN/m}^3 \times 3 \, \text{m}) = 72 + 60 = 132 \, \text{kN/m}^2$

**Step 3: Calculate lateral pressures at interfaces.**
*   **Top of the wall (z=0):** $p_{h,top} = 0$
*   **At the base of Layer 1 (z=4 m):** This pressure is exerted by Layer 1.
    $p_{h1} = K_{a1} \cdot p_{v1} = 0.333 \times 72 \, \text{kN/m}^2 \approx 24 \, \text{kN/m}^2$
*   **At the base of Layer 2 (z=7 m):** This pressure is exerted by Layer 2, considering the vertical pressure from both layers.
    $p_{h2} = K_{a2} \cdot p_{v2} = 0.271 \times 132 \, \text{kN/m}^2 \approx 35.77 \, \text{kN/m}^2$

**Pressure Distribution:**
*   From $z=0$ to $z=4$ m: Pressure increases linearly from 0 to 24 kN/m².
*   From $z=4$ to $z=7$ m: Pressure increases linearly from 24 kN/m² (at the interface) to 35.77 kN/m² (at the base). The slope changes at $z=4$ m because of the change in $K$ and $\gamma$.

**Pressure Profile:**
*   At $z=0$: $p_h = 0$
*   At $z=4$: $p_h = K_{a1} \times (\gamma_1 H_1) = 0.333 \times (18 \times 4) = 24 \, \text{kN/m}^2$
*   At $z=7$: $p_h = K_{a2} \times (\gamma_1 H_1 + \gamma_2 H_2) = 0.271 \times (18 \times 4 + 20 \times 3) = 0.271 \times (72 + 60) = 0.271 \times 132 = 35.77 \, \text{kN/m}^2$

#### **Example 2: Active Pressure with Two Layers (with Cohesion)**

A retaining wall supports a backfill consisting of two layers:
*   **Layer 1 (Top):** Thickness $H_1 = 3$ m, Unit weight $\gamma_1 = 17 \, \text{kN/m}^3$, $\phi_1 = 30^\circ$, $c_1 = 10 \, \text{kN/m}^2$.
*   **Layer 2 (Bottom):** Thickness $H_2 = 4$ m, Unit weight $\gamma_2 = 19 \, \text{kN/m}^3$, $\phi_2 = 35^\circ$, $c_2 = 5 \, \text{kN/m}^2$.

Calculate the earth pressure distribution on the wall assuming active conditions.

**Solution:**

**Step 1: Calculate $K$ values for each layer (Rankine Active).**
*   Layer 1 ($\phi_1 = 30^\circ$): $K_{a1} = \frac{1 - \sin 30^\circ}{1 + \sin 30^\circ} = \frac{1}{3} \approx 0.333$
*   Layer 2 ($\phi_2 = 35^\circ$): $K_{a2} = \frac{1 - \sin 35^\circ}{1 + \sin 35^\circ} \approx 0.271$

**Step 2: Calculate vertical pressures at interfaces.**
*   **At the base of Layer 1 (z=3 m):**
    $p_{v1} = \gamma_1 H_1 = 17 \, \text{kN/m}^3 \times 3 \, \text{m} = 51 \, \text{kN/m}^2$
*   **At the base of Layer 2 (z=7 m):**
    $p_{v2} = \gamma_1 H_1 + \gamma_2 H_2 = 51 \, \text{kN/m}^2 + (19 \, \text{kN/m}^3 \times 4 \, \text{m}) = 51 + 76 = 127 \, \text{kN/m}^2$

**Step 3: Calculate lateral pressures at interfaces, including cohesion.**
*   **At the base of Layer 1 (z=3 m):**
    $p_{h1} = K_{a1} \cdot p_{v1} - 2c_1\sqrt{K_{a1}}$
    $p_{h1} = 0.333 \times 51 \, \text{kN/m}^2 - 2 \times 10 \, \text{kN/m}^2 \times \sqrt{0.333}$
    $p_{h1} = 17.0 \, \text{kN/m}^2 - 20 \times 0.577 \, \text{kN/m}^2$
    $p_{h1} = 17.0 - 11.54 = 5.46 \, \text{kN/m}^2$
    *   **Important:** If $2c\sqrt{K_a} > \gamma z K_a$, the lateral pressure is zero, implying a tension crack would form. In this case, the pressure is $5.46 \, \text{kN/m}^2$, which is positive.

*   **At the base of Layer 2 (z=7 m):**
    $p_{h2} = K_{a2} \cdot p_{v2} - 2c_2\sqrt{K_{a2}}$
    $p_{h2} = 0.271 \times 127 \, \text{kN/m}^2 - 2 \times 5 \, \text{kN/m}^2 \times \sqrt{0.271}$
    $p_{h2} = 34.42 \, \text{kN/m}^2 - 10 \times 0.521 \, \text{kN/m}^2$
    $p_{h2} = 34.42 - 5.21 = 29.21 \, \text{kN/m}^2$

**Pressure Distribution:**
*   From $z=0$ to $z=3$ m: The pressure profile starts at zero at $z=0$. It increases linearly with depth from the formula $p_h = K_{a1}(\gamma_1 z) - 2c_1\sqrt{K_{a1}}$. At $z=3$ m, the pressure reaches $5.46 \, \text{kN/m}^2$.
*   From $z=3$ to $z=7$ m: The pressure at the interface ($z=3$ m) is $5.46 \, \text{kN/m}^2$. The pressure at the base of this layer ($z=7$ m) is $29.21 \, \text{kN/m}^2$. The pressure increases linearly between these two points, with the slope determined by $K_{a2}$ and $\gamma_2$.

**Pressure Profile:**
*   At $z=0$: $p_h = 0$
*   At $z=3$: $p_h = 5.46 \, \text{kN/m}^2$
*   At $z=7$: $p_h = 29.21 \, \text{kN/m}^2$

**Important Visualisation:** For the first layer, the pressure starts at 0, dips down due to the cohesion term (if it was negative or reduced the positive pressure significantly), and then increases. A common approach is to consider the pressure distribution: a rectangle due to cohesion (acting downwards) and a triangle due to the soil weight. However, the simplified formula $p_h = K p_v - 2c\sqrt{K}$ directly gives the resultant pressure. If $2c\sqrt{K_a} > \gamma z K_a$, the resultant pressure is zero, and a tension crack is assumed to have formed. In such cases, the pressure in that layer is often taken as zero up to the depth where the condition becomes $\gamma z K_a \ge 2c\sqrt{K_a}$.

---

### **6. Important Points to Remember**

*   **Layered backfill requires individual calculation for each layer.**
*   **Vertical pressure is cumulative:** The vertical pressure at any depth is the sum of the unit weights of all layers above that depth multiplied by their respective thicknesses.
*   **Lateral pressure depends on the properties of the specific layer and the vertical pressure transmitted to it.**
*   **Cohesion reduces the lateral pressure in active conditions.** If the cohesion effect ($2c\sqrt{K_a}$) is larger than the pressure from soil weight ($\gamma z K_a$), the lateral pressure is taken as zero, assuming a tension crack.
*   **At the interface of two layers, the lateral pressure exerted by the lower layer is calculated using its own $K$ value and the total vertical pressure up to that point.**
*   **Pressure distribution diagrams are essential for visualizing the stress on the retaining structure.** The diagram will have stepped changes in slope at the interfaces of different soil layers.

---

### **7. Practice Questions**

**Question 1:**
A retaining wall supports a backfill with the following layers:
*   Layer 1 (Top): $H_1 = 3$ m, $\gamma_1 = 18 \, \text{kN/m}^3$, $\phi_1 = 30^\circ$.
*   Layer 2 (Bottom): $H_2 = 5$ m, $\gamma_2 = 20 \, \text{kN/m}^3$, $\phi_2 = 38^\circ$.
Assuming active conditions and neglecting cohesion, calculate the lateral earth pressure at the base of each layer and the total resultant force on the wall.

**Answer 1:**
*   **Layer 1:**
    *   $K_{a1} = \frac{1 - \sin 30^\circ}{1 + \sin 30^\circ} = 0.333$
    *   $p_{v1} = \gamma_1 H_1 = 18 \times 3 = 54 \, \text{kN/m}^2$
    *   $p_{h1} = K_{a1} \cdot p_{v1} = 0.333 \times 54 = 17.98 \, \text{kN/m}^2$ (at base of layer 1)
*   **Layer 2:**
    *   $K_{a2} = \frac{1 - \sin 38^\circ}{1 + \sin 38^\circ} = \frac{1 - 0.6157}{1 + 0.6157} = \frac{0.3843}{1.6157} \approx 0.238$
    *   $p_{v2} = \gamma_1 H_1 + \gamma_2 H_2 = 54 + (20 \times 5) = 54 + 100 = 154 \, \text{kN/m}^2$
    *   $p_{h2} = K_{a2} \cdot p_{v2} = 0.238 \times 154 = 36.65 \, \text{kN/m}^2$ (at base of layer 2)

*   **Total Force:**
    *   Force from Layer 1: $F_1 = \frac{1}{2} p_{h1} H_1 = \frac{1}{2} \times 17.98 \times 3 = 26.97 \, \text{kN/m}$
    *   Force from Layer 2: $F_2 = p_{h1} H_2 + \frac{1}{2} (p_{h2} - p_{h1}) H_2$ (trapezoidal area)
        $F_2 = 17.98 \times 5 + \frac{1}{2} (36.65 - 17.98) \times 5 = 89.9 + \frac{1}{2} (18.67) \times 5 = 89.9 + 46.68 = 136.58 \, \text{kN/m}$
    *   Total Force $F = F_1 + F_2 = 26.97 + 136.58 = 163.55 \, \text{kN/m}$

**Question 2:**
A retaining wall supports a backfill with the following layers:
*   Layer 1 (Top): $H_1 = 4$ m, $\gamma_1 = 17 \, \text{kN/m}^3$, $\phi_1 = 32^\circ$, $c_1 = 8 \, \text{kN/m}^2$.
*   Layer 2 (Bottom): $H_2 = 3$ m, $\gamma_2 = 19 \, \text{kN/m}^3$, $\phi_2 = 36^\circ$, $c_2 = 4 \, \text{kN/m}^2$.
Assuming active conditions, determine the lateral earth pressure at the base of each layer.

**Answer 2:**
*   **Layer 1:**
    *   $K_{a1} = \frac{1 - \sin 32^\circ}{1 + \sin 32^\circ} = \frac{1 - 0.5299}{1 + 0.5299} = \frac{0.4701}{1.5299} \approx 0.307$
    *   $p_{v1} = \gamma_1 H_1 = 17 \times 4 = 68 \, \text{kN/m}^2$
    *   Cohesion term: $2c_1\sqrt{K_{a1}} = 2 \times 8 \times \sqrt{0.307} = 16 \times 0.554 = 8.86 \, \text{kN/m}^2$
    *   Pressure from weight: $\gamma_1 H_1 K_{a1} = 68 \times 0.307 = 20.88 \, \text{kN/m}^2$
    *   $p_{h1} = 20.88 - 8.86 = 12.02 \, \text{kN/m}^2$ (at base of layer 1)

*   **Layer 2:**
    *   $K_{a2} = \frac{1 - \sin 36^\circ}{1 + \sin 36^\circ} = \frac{1 - 0.5878}{1 + 0.5878} = \frac{0.4122}{1.5878} \approx 0.260$
    *   $p_{v2} = \gamma_1 H_1 + \gamma_2 H_2 = 68 + (19 \times 3) = 68 + 57 = 125 \, \text{kN/m}^2$
    *   Cohesion term: $2c_2\sqrt{K_{a2}} = 2 \times 4 \times \sqrt{0.260} = 8 \times 0.510 = 4.08 \, \text{kN/m}^2$
    *   Pressure from weight: $p_{v2} K_{a2} = 125 \times 0.260 = 32.5 \, \text{kN/m}^2$
    *   $p_{h2} = 32.5 - 4.08 = 28.42 \, \text{kN/m}^2$ (at base of layer 2)

---

This concludes the study notes for Earth Pressure with Layered Backfill. Remember to practice more problems to solidify your understanding.
