---
title: "Uniform flow - Conveyance and section factor"
subject: "OPEN CHANNEL HYDRAULICS"
module: "Module 1: Open channel flow"
branch: "Civil Engineering"
semester: 5
topicId: "689f15cd56b5e963ba810ea4"
status: "completed"
scrapedAt: "2026-05-20T18:49:44.288Z"
---
# Open Channel Hydraulics: Module 1 - Open Channel Flow

## Topic: Uniform Flow - Conveyance and Section Factor

This topic focuses on the fundamental concept of uniform flow in open channels, exploring how to quantify the channel's ability to convey water (conveyance) and introducing the crucial "section factor."

---

### Learning Outcomes

By the end of this topic, you should be able to:

*   **Define uniform flow** and its characteristics.
*   **Identify the conditions** under which uniform flow occurs.
*   **Understand the concept of conveyance** and its significance in open channel design.
*   **Define and calculate the section factor** (K) for various channel cross-sections.
*   **Apply the concept of conveyance and section factor** to solve problems involving uniform flow.
*   **Relate Manning's equation** to conveyance and section factor.

---

### 1. Uniform Flow

**Definition:** Uniform flow is a type of open channel flow where the flow properties, such as velocity, depth, and cross-sectional area, remain **constant along the length of the channel**. This implies that the water surface, energy grade line (EGL), and hydraulic grade line (HGL) are all parallel to the channel bed.

**Key Characteristics:**

*   **Constant flow depth (y):** The depth of water does not change from one section to another along the flow path.
*   **Constant velocity (V):** The average velocity of the flow is the same at all sections.
*   **Constant cross-sectional area (A):** The area of water flowing through the channel remains constant.
*   **Constant wetted perimeter (P):** The length of the channel boundary in contact with the water remains constant.
*   **Slope of the energy grade line (S_f) = Slope of the hydraulic grade line (S_h) = Slope of the channel bed (S_0):** This is the defining characteristic. The friction slope equals the bed slope, meaning energy losses due to friction are exactly balanced by the potential energy loss due to the channel bed slope.

**Conditions for Uniform Flow:**

Uniform flow occurs when the following conditions are met:

*   **Constant channel geometry:** The cross-sectional shape and size of the channel do not change.
*   **Constant roughness:** The roughness of the channel bed and banks is uniform.
*   **Constant discharge (Q):** The volume of water flowing per unit time is constant.
*   **Constant flow depth (y):** As stated above, this is the primary indicator.

**Why is Uniform Flow Important?**

Uniform flow is an idealized but fundamental condition in open channel hydraulics. It simplifies analysis and serves as a basis for understanding more complex flow conditions. Many real-world open channels, especially long, straight, and prismatic ones (those with constant cross-section and slope), approximate uniform flow conditions. This makes it crucial for:

*   **Design of irrigation canals**
*   **Drainage channels**
*   **Wastewater conveyance systems**
*   **Predicting flow rates and depths**

---

### 2. Conveyance (K)

**Definition:** Conveyance (K) is a measure of the **capacity of an open channel to carry water under uniform flow conditions**. It quantifies how efficiently a channel can transport a given discharge at a specific depth. A higher conveyance value indicates a greater ability to carry water.

**Relationship with Discharge (Q):**

Conveyance is directly related to discharge. For a given channel geometry and roughness, discharge is proportional to conveyance.

**Units of Conveyance:**

The units of conveyance depend on the specific formula used, but generally, they represent the discharge per unit square root of slope. In the SI system, it's typically $\text{m}^{3}\text{/s}$. In the Imperial system, it's $\text{ft}^{3}\text{/s}$.

---

### 3. Manning's Equation and Conveyance

Manning's equation is the most widely used empirical formula for analyzing uniform flow in open channels. It relates discharge (Q) to channel geometry, roughness, and slope.

**Manning's Equation (SI Units):**

$$Q = \frac{1}{n} A R^{2/3} S_0^{1/2}$$

Where:

*   $Q$ = Discharge ($\text{m}^3/\text{s}$)
*   $n$ = Manning's roughness coefficient (dimensionless or with units of $\text{s/m}^{1/3}$) - A higher 'n' indicates rougher surfaces.
*   $A$ = Cross-sectional area of flow ($\text{m}^2$)
*   $R$ = Hydraulic radius ($m$) = $A/P$
*   $P$ = Wetted perimeter ($m$)
*   $S_0$ = Slope of the channel bed (dimensionless)

**Manning's Equation (Imperial Units):**

$$Q = 1.49 \frac{A}{n} R^{2/3} S_0^{1/2}$$

Where:

*   $Q$ = Discharge ($\text{ft}^3/\text{s}$)
*   $n$ = Manning's roughness coefficient (dimensionless)
*   $A$ = Cross-sectional area of flow ($\text{ft}^2$)
*   $R$ = Hydraulic radius ($ft$) = $A/P$
*   $P$ = Wetted perimeter ($ft$)
*   $S_0$ = Slope of the channel bed (dimensionless)

**Expressing Conveyance using Manning's Equation:**

By rearranging Manning's equation, we can explicitly define conveyance:

**Conveyance (K) = $\frac{Q}{\sqrt{S_0}}$**

Substituting this into Manning's equation, we get:

$$Q = K \sqrt{S_0}$$

Where:

**K = $\frac{1}{n} A R^{2/3}$ (for SI units)**

**K = $1.49 \frac{A}{n} R^{2/3}$ (for Imperial units)**

This form highlights that conveyance is a function of the channel geometry (A and R) and its roughness (n).

---

### 4. Section Factor (K)

**Definition:** The **section factor (K)** is a term that encapsulates the **geometric properties of the channel cross-section and its roughness**, and is directly proportional to the conveyance. It is essentially the part of Manning's equation that depends on the channel's shape and the material it's made from, excluding the slope.

**Key Points about Section Factor:**

*   **Represents geometric capacity:** It quantifies how well the channel's shape and size can carry water, irrespective of the driving force (slope).
*   **Roughness dependent:** It includes the Manning's roughness coefficient 'n'.
*   **Flow depth dependent:** Since A and R are functions of flow depth (y), the section factor (K) is also a function of flow depth. This means a channel's capacity to convey water changes with the water level.
*   **Crucial for comparison:** It allows for comparing the carrying capacity of different channel shapes and sizes at the same flow depth and roughness.

**Formula for Section Factor:**

*   **SI Units:**  $K = \frac{1}{n} A R^{2/3}$
*   **Imperial Units:** $K = 1.49 \frac{A}{n} R^{2/3}$

**Calculating Section Factor for Different Cross-Sections:**

The calculation of 'A' and 'P' is critical for determining 'K'.

**Example 1: Rectangular Channel**

Consider a rectangular channel with:
*   Width ($b$)
*   Flow depth ($y$)

**Calculations:**
*   Area ($A$) = $b \times y$
*   Wetted Perimeter ($P$) = $b + 2y$
*   Hydraulic Radius ($R$) = $A/P = \frac{b \times y}{b + 2y}$

**Section Factor (K) for Rectangular Channel (SI):**

$$K = \frac{1}{n} (b \times y) \left( \frac{b \times y}{b + 2y} \right)^{2/3}$$

**Important Point to Remember:** For a given rectangular channel, as the flow depth 'y' increases, both 'A' and 'R' increase, leading to an increase in the section factor 'K' and thus the conveyance.

**Example 2: Trapezoidal Channel**

Consider a trapezoidal channel with:
*   Bottom width ($b$)
*   Flow depth ($y$)
*   Side slope (z:1, meaning for every 1 unit vertical, there are 'z' units horizontal)

**Calculations:**
*   Area ($A$) = $(b + zy)y$
*   Wetted Perimeter ($P$) = $b + 2y\sqrt{1+z^2}$
*   Hydraulic Radius ($R$) = $A/P = \frac{(b + zy)y}{b + 2y\sqrt{1+z^2}}$

**Section Factor (K) for Trapezoidal Channel (SI):**

$$K = \frac{1}{n} (b + zy)y \left( \frac{(b + zy)y}{b + 2y\sqrt{1+z^2}} \right)^{2/3}$$

**Example 3: Circular Channel (Partially Filled)**

Consider a circular channel with:
*   Diameter ($D$)
*   Radius ($r = D/2$)
*   Flow depth ($y$)

**Calculations (Requires trigonometry):**
*   Let $\theta$ be the angle (in radians) subtended by the water surface at the center of the circle.
*   $\cos(\theta/2) = (r-y)/r = 1 - y/r$
*   $\theta = 2 \cos^{-1}(1 - y/r)$

*   Area ($A$) = $r^2 (\theta - \sin\theta)/2$
*   Wetted Perimeter ($P$) = $r\theta$
*   Hydraulic Radius ($R$) = $A/P = \frac{r^2 (\theta - \sin\theta)/2}{r\theta} = \frac{r (\theta - \sin\theta)}{2\theta}$

**Section Factor (K) for Circular Channel (SI):**

$$K = \frac{1}{n} \left[ \frac{r^2 (\theta - \sin\theta)}{2} \right] \left[ \frac{r (\theta - \sin\theta)}{2\theta} \right]^{2/3}$$

**Important Point to Remember:** For a circular channel, the section factor K is maximum when the depth is approximately 0.81 times the diameter.

---

### 5. Practice Questions and Exercises

**Question 1:**
A rectangular concrete channel is 3 meters wide and carries water at a depth of 1.5 meters. The channel slope is 0.001. The Manning's roughness coefficient ($n$) for concrete is 0.013.
(a) Calculate the cross-sectional area ($A$).
(b) Calculate the wetted perimeter ($P$).
(c) Calculate the hydraulic radius ($R$).
(d) Calculate the section factor ($K$).
(e) Calculate the discharge ($Q$) using Manning's equation.

**Answer 1:**
Given: $b = 3 \, m$, $y = 1.5 \, m$, $S_0 = 0.001$, $n = 0.013$

(a) $A = b \times y = 3 \, m \times 1.5 \, m = 4.5 \, m^2$
(b) $P = b + 2y = 3 \, m + 2 \times 1.5 \, m = 3 \, m + 3 \, m = 6 \, m$
(c) $R = A/P = 4.5 \, m^2 / 6 \, m = 0.75 \, m$
(d) $K = \frac{1}{n} A R^{2/3} = \frac{1}{0.013} (4.5 \, m^2) (0.75 \, m)^{2/3}$
    $K = 76.92 \times 4.5 \times (0.75)^{0.6667} \approx 76.92 \times 4.5 \times 0.8137 \approx 282.0 \, m^{8/3}$
    *(Note: The unit $m^{8/3}$ for K arises from the formula. For practical use, it's often treated as a composite unit with discharge and slope.)*
(e) $Q = K \sqrt{S_0} = 282.0 \, m^{8/3} \times \sqrt{0.001} = 282.0 \times 0.0316 \approx 8.91 \, m^3/s$

**Question 2:**
A trapezoidal canal has a bottom width of 5 ft, side slopes of 2:1 ($z=2$), and carries water at a depth of 3 ft. The Manning's roughness coefficient ($n$) is 0.020. The channel slope is 0.0005.
(a) Calculate the section factor ($K$) for this channel at the given depth. (Use Imperial units).
(b) Calculate the discharge ($Q$).

**Answer 2:**
Given: $b = 5 \, ft$, $y = 3 \, ft$, $z = 2$, $n = 0.020$, $S_0 = 0.0005$

(a) $A = (b + zy)y = (5 + 2 \times 3) \times 3 = (5 + 6) \times 3 = 11 \times 3 = 33 \, ft^2$
    $P = b + 2y\sqrt{1+z^2} = 5 + 2 \times 3 \times \sqrt{1+2^2} = 5 + 6 \times \sqrt{5} = 5 + 6 \times 2.236 = 5 + 13.416 = 18.416 \, ft$
    $R = A/P = 33 \, ft^2 / 18.416 \, ft \approx 1.792 \, ft$
    $K = 1.49 \frac{A}{n} R^{2/3} = 1.49 \frac{33 \, ft^2}{0.020} (1.792 \, ft)^{2/3}$
    $K = 1.49 \times 1650 \times (1.792)^{0.6667} \approx 2458.5 \times 1.473 \approx 3620 \, ft^{7/3}$
    *(Note: The unit $ft^{7/3}$ for K arises from the formula.)*

(b) $Q = K \sqrt{S_0} = 3620 \, ft^{7/3} \times \sqrt{0.0005} = 3620 \times 0.02236 \approx 80.9 \, ft^3/s$

**Question 3:**
Which of the following statements about uniform flow is INCORRECT?
(a) The water surface is parallel to the channel bed.
(b) The flow depth is constant along the channel.
(c) The energy grade line is parallel to the channel bed.
(d) The friction slope is greater than the bed slope.

**Answer 3:**
(d) The friction slope is **equal** to the bed slope in uniform flow.

---

### 6. Important Points to Remember

*   **Uniform flow is the bedrock of open channel analysis.** Understanding its conditions is essential.
*   **Manning's equation is your primary tool** for uniform flow calculations.
*   **Conveyance (K)** is a powerful concept that quantifies a channel's carrying capacity.
*   **The section factor (K)**, derived from Manning's equation, combines geometric and roughness properties.
*   **Section factor is flow-depth dependent.** It changes as the water level in the channel changes.
*   **Accurate calculation of Area (A) and Wetted Perimeter (P)** is crucial for correct section factor calculation.
*   **Manning's roughness coefficient (n)** is a critical parameter. Choosing the correct 'n' value based on the channel material and condition is vital for accurate results.
*   **Units must be consistent** when using Manning's equation (either all SI or all Imperial).

---

This concludes the notes for Uniform Flow - Conveyance and Section Factor. Remember to practice applying these concepts to various channel shapes and conditions.
