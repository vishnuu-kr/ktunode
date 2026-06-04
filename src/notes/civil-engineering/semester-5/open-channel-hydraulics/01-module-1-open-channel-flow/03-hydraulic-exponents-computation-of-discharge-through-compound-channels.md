---
title: "Hydraulic exponents Computation of discharge through compound channels"
subject: "OPEN CHANNEL HYDRAULICS"
module: "Module 1: Open channel flow"
branch: "Civil Engineering"
semester: 5
topicId: "689f15cd56b5e963ba810ea5"
status: "completed"
scrapedAt: "2026-05-20T18:49:45.050Z"
---
# Open Channel Hydraulics: Module 1 - Open Channel Flow

## Topic: Hydraulic Exponents & Computation of Discharge through Compound Channels

---

### 1. Introduction to Open Channel Flow

*   **Definition:** Open channel flow is the flow of a liquid in a conduit with a free surface, exposed to atmospheric pressure. Examples include rivers, canals, sewers, and streams.
*   **Key Difference from Pipe Flow:** The presence of a free surface is the defining characteristic. This means the depth of flow is not constant and can vary depending on the flow conditions.
*   **Governing Principles:** The fundamental principles of fluid mechanics, particularly conservation of mass (continuity) and conservation of energy (Bernoulli's equation), are applied.
*   **Classification of Open Channel Flow:**
    *   **Based on Velocity Variation:**
        *   **Uniform Flow:** Depth, velocity, and cross-sectional area are constant along the length of the channel.
        *   **Non-uniform Flow (Varied Flow):** Depth, velocity, and cross-sectional area change along the length of the channel.
            *   **Gradually Varied Flow (GVF):** Changes are gradual, and the energy equation can be applied with reasonable accuracy.
            *   **Rapidly Varied Flow (RVF):** Changes are abrupt, often occurring due to hydraulic jumps or changes in channel geometry.
    *   **Based on Surface Profile:** (Related to GVF)
        *   **Mild Slope (M):** Normal depth ($y_n$) is greater than critical depth ($y_c$).
        *   **Critical Slope (C):** Normal depth ($y_n$) is equal to critical depth ($y_c$).
        *   **Steep Slope (S):** Normal depth ($y_n$) is less than critical depth ($y_c$).
        *   **Horizontal Slope (H):** Slope is zero.
        *   **Adverse Slope (A):** Slope is upward, causing flow to decelerate.
    *   **Based on Time Variation:**
        *   **Steady Flow:** Flow properties (velocity, depth) at any point do not change with time.
        *   **Unsteady Flow:** Flow properties change with time.

---

### 2. Key Concepts and Definitions for Discharge Computation

*   **Discharge (Q):** The volume of fluid passing through a cross-section per unit time.
    *   **Formula:** $Q = A \times V$
        *   $A$: Cross-sectional area of flow (m²)
        *   $V$: Average velocity of flow (m/s)
*   **Wetted Perimeter (P):** The length of the boundary of the channel cross-section that is in contact with the fluid.
*   **Hydraulic Radius (R):** The ratio of the cross-sectional area to the wetted perimeter.
    *   **Formula:** $R = A / P$
        *   This is a measure of the "efficiency" of the channel shape for carrying flow. A larger hydraulic radius generally implies less resistance.
*   **Mean Velocity (V):** The average velocity across the entire cross-section.
*   **Chezy's Formula:** An empirical formula for calculating mean velocity in uniform flow.
    *   **Formula:** $V = C \sqrt{RS}$
        *   $C$: Chezy's coefficient (dimensionless or units of m¹/²s⁻¹) – depends on channel roughness and fluid properties.
        *   $R$: Hydraulic radius (m)
        *   $S$: Bed slope of the channel (dimensionless)
*   **Manning's Formula:** A widely used empirical formula for calculating mean velocity in uniform flow, which provides a more nuanced relationship for the roughness coefficient.
    *   **Formula:** $V = \frac{1}{n} R^{2/3} S^{1/2}$ (SI Units)
    *   **Formula:** $V = \frac{1.49}{n} R^{2/3} S^{1/2}$ (US Customary Units)
        *   $n$: Manning's roughness coefficient (dimensionless or units of s m⁻¹/³) – depends on the material and condition of the channel boundary. Lower $n$ values indicate smoother surfaces and higher velocities.
        *   $R$: Hydraulic radius (m)
        *   $S$: Bed slope of the channel (dimensionless)
*   **Hydraulic Exponents (in the context of Manning's Formula):** The exponents applied to the hydraulic radius and slope in Manning's formula are fundamental to understanding how these parameters influence velocity and discharge.
    *   For $V = \frac{1}{n} R^{2/3} S^{1/2}$:
        *   Exponent of Hydraulic Radius ($R$): **2/3**
        *   Exponent of Slope ($S$): **1/2**
    *   These exponents indicate that velocity is more sensitive to changes in hydraulic radius than to changes in slope, and both are directly proportional to velocity.
*   **Discharge (Q) using Manning's Formula:**
    *   **Formula:** $Q = A \times V = A \times (\frac{1}{n} R^{2/3} S^{1/2})$
    *   **Formula:** $Q = \frac{A}{n} R^{2/3} S^{1/2}$
    *   **Formula:** $Q = \frac{A}{n} (\frac{A}{P})^{2/3} S^{1/2}$
    *   **Formula:** $Q = \frac{1}{n} A^{5/3} P^{-2/3} S^{1/2}$

---

### 3. Computation of Discharge Through Compound Channels

*   **Definition of Compound Channel:** A channel whose cross-section can be divided into two or more distinct geometric sections, typically representing a main channel and one or more floodplains or berms.
*   **Why Separate Sections?** Floodplains often have significantly different roughness coefficients ($n$ values) compared to the main channel due to vegetation, debris, etc. Ignoring this difference would lead to inaccurate discharge calculations.
*   **Methodology: The "Unit" Method (or Composite Section Method):**
    1.  **Divide the Cross-Section:** Mentally or graphically divide the compound channel into several simpler geometric shapes (e.g., rectangles, trapezoids). These divisions are typically made at points where the slope of the bank changes significantly or where the material/roughness changes (e.g., at the edge of the main channel and the floodplain).
    2.  **Calculate Geometric Properties for Each Section:** For each individual section ($i$):
        *   Calculate the **area ($A_i$)**.
        *   Calculate the **wetted perimeter ($P_i$)**.
        *   Calculate the **hydraulic radius ($R_i = A_i / P_i$)**.
        *   Determine the **Manning's roughness coefficient ($n_i$)** for that specific section.
    3.  **Calculate Discharge for Each Section:** Using Manning's formula, calculate the discharge ($Q_i$) that would flow through each section *if it were flowing independently*.
        *   $Q_i = \frac{A_i}{n_i} R_i^{2/3} S^{1/2}$
    4.  **Sum the Discharges:** The total discharge through the compound channel is the sum of the discharges from each individual section.
        *   $Q_{total} = \sum Q_i = Q_1 + Q_2 + Q_3 + ...$
*   **Important Consideration: Water Surface Alignment:** The water surface is assumed to be horizontal across the entire cross-section for each individual section's calculation. This implies that all subsections are assumed to be flowing at the same slope ($S$), which is a key assumption for uniform flow in compound channels.
*   **Determining $n$ values:** This is crucial. Referencing standard tables for Manning's $n$ based on channel lining and condition is essential.
    *   **Main Channel Examples:** Concrete (0.013), Earth, clean (0.020-0.025), Earth, gravel (0.025-0.035).
    *   **Floodplain Examples:** Short grass (0.030-0.050), Tall grass/weeds (0.050-0.100), Forested (0.070-0.150).
*   **Determining Slope ($S$):** In uniform flow, the energy grade line slope, hydraulic grade line slope, and bed slope are all equal. So, the bed slope of the channel is used.

---

### 4. Examples

**Example 1: Simple Rectangular Channel**

Calculate the discharge in a rectangular channel 3m wide and 1.5m deep, made of concrete, with a bed slope of 0.001. Assume Manning's $n = 0.013$.

*   **Given:**
    *   Width ($B$) = 3 m
    *   Depth ($y$) = 1.5 m
    *   Slope ($S$) = 0.001
    *   Manning's $n$ = 0.013
*   **Calculations:**
    *   Area ($A$) = $B \times y = 3 \times 1.5 = 4.5$ m²
    *   Wetted Perimeter ($P$) = $B + 2y = 3 + 2(1.5) = 3 + 3 = 6$ m
    *   Hydraulic Radius ($R$) = $A / P = 4.5 / 6 = 0.75$ m
    *   Discharge ($Q$) = $\frac{A}{n} R^{2/3} S^{1/2}$
        *   $Q = \frac{4.5}{0.013} (0.75)^{2/3} (0.001)^{1/2}$
        *   $Q = \frac{4.5}{0.013} (0.8255) (0.03162)$
        *   $Q = 346.15 \times 0.8255 \times 0.03162$
        *   $Q \approx 9.04$ m³/s

**Example 2: Compound Channel Discharge**

Consider a compound channel with the following cross-section:
*   **Main Channel:** Rectangular, 5m wide, 2m deep, made of concrete ($n_1 = 0.013$).
*   **Floodplains:** Two identical floodplains on either side of the main channel. Each floodplain is a rectangle, 10m wide and extending 2m above the main channel, covered with short grass ($n_2 = 0.035$).
*   **Channel Slope:** $S = 0.0005$.

**Solution:**

We need to divide the channel into sections. Let's consider the main channel as Section 1 and the two floodplains as Sections 2 and 3.

**Section 1 (Main Channel):**
*   Width ($B_1$) = 5 m
*   Depth ($y_1$) = 2 m
*   Area ($A_1$) = $B_1 \times y_1 = 5 \times 2 = 10$ m²
*   Wetted Perimeter ($P_1$) = $B_1 + 2y_1 = 5 + 2(2) = 5 + 4 = 9$ m
*   Hydraulic Radius ($R_1$) = $A_1 / P_1 = 10 / 9 = 1.111$ m
*   Manning's $n_1$ = 0.013
*   Slope ($S$) = 0.0005
*   Discharge ($Q_1$) = $\frac{A_1}{n_1} R_1^{2/3} S^{1/2}$
    *   $Q_1 = \frac{10}{0.013} (1.111)^{2/3} (0.0005)^{1/2}$
    *   $Q_1 = 769.23 \times (1.0695) \times (0.02236)$
    *   $Q_1 \approx 184.73$ m³/s

**Section 2 (Left Floodplain):**
*   This section is above the main channel. Its bottom width is 10m. The water depth in this section is the same as the depth of the main channel in this specific flow condition, which is 2m.
*   Width ($B_2$) = 10 m
*   Depth ($y_2$) = 2 m (This is the depth over the floodplain in this scenario, extending from the top of the main channel).
*   Area ($A_2$) = $B_2 \times y_2 = 10 \times 2 = 20$ m²
*   Wetted Perimeter ($P_2$) = $B_2$ (only the bottom is wetted) = 10 m
*   Hydraulic Radius ($R_2$) = $A_2 / P_2 = 20 / 10 = 2$ m
*   Manning's $n_2$ = 0.035
*   Slope ($S$) = 0.0005
*   Discharge ($Q_2$) = $\frac{A_2}{n_2} R_2^{2/3} S^{1/2}$
    *   $Q_2 = \frac{20}{0.035} (2)^{2/3} (0.0005)^{1/2}$
    *   $Q_2 = 571.43 \times (1.5874) \times (0.02236)$
    *   $Q_2 \approx 203.31$ m³/s

**Section 3 (Right Floodplain):**
*   Identical to Section 2.
*   Area ($A_3$) = 20 m²
*   Wetted Perimeter ($P_3$) = 10 m
*   Hydraulic Radius ($R_3$) = 2 m
*   Manning's $n_3$ = 0.035
*   Discharge ($Q_3$) = $\frac{A_3}{n_3} R_3^{2/3} S^{1/2}$
    *   $Q_3 \approx 203.31$ m³/s

**Total Discharge:**
*   $Q_{total} = Q_1 + Q_2 + Q_3$
*   $Q_{total} = 184.73 + 203.31 + 203.31$
*   $Q_{total} \approx 591.35$ m³/s

---

### 5. Practice Questions/Exercises

**Question 1:**
A trapezoidal canal has a bottom width of 4m, side slopes of 1:1 (horizontal:vertical), and a flow depth of 1.8m. The canal is lined with stone masonry, for which Manning's $n = 0.017$. If the canal slope is 0.0004, calculate the discharge using Manning's formula.

**Question 2:**
A rectangular channel is 5m wide and carries a discharge of 10 m³/s. If the Manning's roughness coefficient $n = 0.015$ and the slope is 0.001, determine the depth of flow.

**Question 3:**
Consider a compound channel with the following data:
*   **Main Channel:** Rectangular, 6m wide, 2.5m deep, concrete lining ($n_1 = 0.013$).
*   **Floodplains:** Two identical floodplains, each 15m wide, extending 2.5m above the main channel, with dense vegetation ($n_2 = 0.050$).
*   **Channel Slope:** $S = 0.0006$.
Calculate the total discharge through the compound channel assuming uniform flow.

---

### 6. Answers to Practice Questions

**Answer 1:**
*   **Given:** Bottom width ($B$) = 4m, Side slopes = 1:1, Depth ($y$) = 1.8m, $n = 0.017$, $S = 0.0004$.
*   **Calculations:**
    *   For a 1:1 side slope, the top width ($T$) = $B + 2y = 4 + 2(1.8) = 4 + 3.6 = 7.6$ m.
    *   Area ($A$) = $(B + y) \times y = (4 + 1.8) \times 1.8 = 5.8 \times 1.8 = 10.44$ m².
    *   Wetted Perimeter ($P$) = $B + 2 \sqrt{y^2 + (\text{side slope})^2} = 4 + 2 \sqrt{1.8^2 + 1^2} = 4 + 2 \sqrt{3.24 + 1} = 4 + 2 \sqrt{4.24} = 4 + 2(2.059) = 4 + 4.118 = 8.118$ m.
    *   Hydraulic Radius ($R$) = $A / P = 10.44 / 8.118 = 1.286$ m.
    *   Discharge ($Q$) = $\frac{A}{n} R^{2/3} S^{1/2}$
        *   $Q = \frac{10.44}{0.017} (1.286)^{2/3} (0.0004)^{1/2}$
        *   $Q = 614.12 \times (1.1808) \times (0.020)$
        *   $Q \approx 14.51$ m³/s

**Answer 2:**
This is a trial-and-error problem as the depth ($y$) is unknown, which affects both Area ($A$) and Wetted Perimeter ($P$).
*   **Given:** Width ($B$) = 5m, $Q = 10$ m³/s, $n = 0.015$, $S = 0.001$.
*   **Manning's Formula for Discharge:** $Q = \frac{A}{n} R^{2/3} S^{1/2}$
    *   $10 = \frac{A}{0.015} R^{2/3} (0.001)^{1/2}$
    *   $10 = \frac{A}{0.015} R^{2/3} (0.03162)$
    *   $10 = 2.073 \times A \times R^{2/3}$
    *   $A \times R^{2/3} = 10 / 2.073 = 4.824$
*   **For a Rectangular Channel:**
    *   $A = B \times y = 5y$
    *   $P = B + 2y = 5 + 2y$
    *   $R = A/P = \frac{5y}{5+2y}$
*   **Substitute into the equation:**
    *   $(5y) \times \left(\frac{5y}{5+2y}\right)^{2/3} = 4.824$
*   **Trial and Error:**
    *   **Try $y = 0.5$ m:**
        *   $A = 5 \times 0.5 = 2.5$ m²
        *   $P = 5 + 2 \times 0.5 = 5 + 1 = 6$ m
        *   $R = 2.5 / 6 = 0.4167$ m
        *   $A \times R^{2/3} = 2.5 \times (0.4167)^{2/3} = 2.5 \times 0.5546 = 1.3865$ (Too low)
    *   **Try $y = 1.0$ m:**
        *   $A = 5 \times 1.0 = 5$ m²
        *   $P = 5 + 2 \times 1.0 = 5 + 2 = 7$ m
        *   $R = 5 / 7 = 0.7143$ m
        *   $A \times R^{2/3} = 5 \times (0.7143)^{2/3} = 5 \times 0.7856 = 3.928$ (Still too low)
    *   **Try $y = 1.2$ m:**
        *   $A = 5 \times 1.2 = 6$ m²
        *   $P = 5 + 2 \times 1.2 = 5 + 2.4 = 7.4$ m
        *   $R = 6 / 7.4 = 0.8108$ m
        *   $A \times R^{2/3} = 6 \times (0.8108)^{2/3} = 6 \times 0.8606 = 5.1636$ (Close, slightly high)
    *   **Try $y = 1.15$ m:**
        *   $A = 5 \times 1.15 = 5.75$ m²
        *   $P = 5 + 2 \times 1.15 = 5 + 2.3 = 7.3$ m
        *   $R = 5.75 / 7.3 = 0.7877$ m
        *   $A \times R^{2/3} = 5.75 \times (0.7877)^{2/3} = 5.75 \times 0.8442 = 4.854$ (Very close to 4.824)

*   **Therefore, the depth of flow is approximately 1.15 m.**

**Answer 3:**
**Section 1 (Main Channel):**
*   Width ($B_1$) = 6 m
*   Depth ($y_1$) = 2.5 m
*   Area ($A_1$) = $B_1 \times y_1 = 6 \times 2.5 = 15$ m²
*   Wetted Perimeter ($P_1$) = $B_1 + 2y_1 = 6 + 2(2.5) = 6 + 5 = 11$ m
*   Hydraulic Radius ($R_1$) = $A_1 / P_1 = 15 / 11 = 1.364$ m
*   Manning's $n_1$ = 0.013
*   Slope ($S$) = 0.0006
*   Discharge ($Q_1$) = $\frac{A_1}{n_1} R_1^{2/3} S^{1/2}$
    *   $Q_1 = \frac{15}{0.013} (1.364)^{2/3} (0.0006)^{1/2}$
    *   $Q_1 = 1153.85 \times (1.227) \times (0.02449)$
    *   $Q_1 \approx 344.55$ m³/s

**Section 2 (Left Floodplain):**
*   Width ($B_2$) = 15 m
*   Depth ($y_2$) = 2.5 m
*   Area ($A_2$) = $B_2 \times y_2 = 15 \times 2.5 = 37.5$ m²
*   Wetted Perimeter ($P_2$) = $B_2 = 15$ m (only the bottom is wetted)
*   Hydraulic Radius ($R_2$) = $A_2 / P_2 = 37.5 / 15 = 2.5$ m
*   Manning's $n_2$ = 0.050
*   Slope ($S$) = 0.0006
*   Discharge ($Q_2$) = $\frac{A_2}{n_2} R_2^{2/3} S^{1/2}$
    *   $Q_2 = \frac{37.5}{0.050} (2.5)^{2/3} (0.0006)^{1/2}$
    *   $Q_2 = 750 \times (1.842) \times (0.02449)$
    *   $Q_2 \approx 33.86$ m³/s

**Section 3 (Right Floodplain):**
*   Identical to Section 2.
*   $Q_3 \approx 33.86$ m³/s

**Total Discharge:**
*   $Q_{total} = Q_1 + Q_2 + Q_3$
*   $Q_{total} = 344.55 + 33.86 + 33.86$
*   $Q_{total} \approx 412.27$ m³/s

---

### 7. Important Points to Remember

*   **Manning's Formula is empirical:** It is based on observations and is widely used for uniform flow conditions.
*   **Accuracy depends heavily on 'n' value:** Choosing the correct Manning's roughness coefficient is critical for accurate discharge calculations.
*   **Compound channels require sectioning:** Always divide a compound channel into simpler geometric sections with similar roughness characteristics.
*   **Water surface is assumed horizontal:** In the composite section method, each section is treated as if it has a horizontal water surface, and they all share the same longitudinal slope.
*   **Hydraulic Radius is key:** The hydraulic radius ($R = A/P$) is a measure of flow efficiency and directly influences velocity.
*   **Hydraulic Exponents (2/3 for R, 1/2 for S):** Understand how these exponents dictate the sensitivity of velocity to changes in hydraulic radius and slope.
*   **Uniform Flow Assumption:** The methods discussed are primarily for uniform flow. For varied flow, more complex calculations involving the energy equation are needed.
*   **Units Consistency:** Ensure all units are consistent when using Manning's formula (SI or US Customary).

---
