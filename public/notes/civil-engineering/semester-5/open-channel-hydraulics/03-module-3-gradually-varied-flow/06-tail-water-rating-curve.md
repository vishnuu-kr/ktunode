---
title: "tail water rating curve"
subject: "OPEN CHANNEL HYDRAULICS"
module: "Module 3: Gradually varied flow"
branch: "Civil Engineering"
semester: 5
topicId: "689f15cd56b5e963ba810eb4"
status: "completed"
scrapedAt: "2026-05-20T18:49:55.273Z"
---
# Open Channel Hydraulics: Module 3 - Gradually Varied Flow

## Topic: Tailwater Rating Curve

### Learning Outcomes:

Upon successful completion of this topic, you should be able to:

*   Understand the concept and purpose of a tailwater rating curve.
*   Identify the factors influencing tailwater conditions.
*   Explain the methods for constructing a tailwater rating curve.
*   Relate tailwater rating curves to gradually varied flow analysis.
*   Apply tailwater rating curves in practical hydraulic design and analysis.

---

### 1. Introduction to Tailwater Rating Curve

#### 1.1 What is Tailwater?

*   **Definition:** Tailwater refers to the water surface elevation at the downstream end of a reach of an open channel or a hydraulic structure (like a weir, sluice gate, or culvert).
*   It represents the **downstream control** on the flow regime within the channel reach.
*   The tailwater level is crucial as it influences the energy gradient and, consequently, the depth of flow in the upstream portion of the channel.

#### 1.2 Purpose of a Tailwater Rating Curve

*   **Relationship between Discharge and Water Surface Elevation:** A tailwater rating curve graphically represents the relationship between the discharge ($Q$) flowing through a channel or past a control structure and the corresponding tailwater depth or water surface elevation ($y_{TW}$ or $E_{TW}$).
*   **Downstream Control for Gradually Varied Flow (GVF):** In GVF analysis, the tailwater rating curve serves as the **downstream boundary condition**. This allows us to calculate the water surface profile along the channel.
*   **Design and Operation of Hydraulic Structures:** It is essential for designing and operating structures that control flow, such as bridges, culverts, spillways, and weirs, as it dictates the backwater effects.
*   **Floodplain Mapping and Flood Risk Assessment:** Understanding tailwater conditions helps in predicting water levels during floods and assessing associated risks.
*   **Navigation and Waterway Management:** It informs decisions regarding navigable depths and potential obstructions.

---

### 2. Factors Influencing Tailwater Conditions

The tailwater level at the downstream end of a channel reach is influenced by a variety of factors, primarily related to the downstream conditions and the flow itself.

#### 2.1 Downstream Channel Geometry

*   **Channel Cross-section:** The width, depth, and shape of the downstream channel affect its capacity to carry flow and the resulting water surface elevation. A wider or deeper channel generally leads to lower tailwater levels for a given discharge.
*   **Channel Slope:** A steeper downstream slope will typically result in lower tailwater elevations compared to a flatter slope for the same discharge.
*   **Roughness:** The roughness of the downstream channel bed and banks influences the energy losses due to friction, thereby affecting the tailwater level.

#### 2.2 Downstream Hydraulic Structures

*   **Weirs, Gates, Dams:** These structures act as controls and significantly raise the tailwater level. The opening of a gate or the crest height of a weir directly dictates the downstream water surface.
*   **Culverts:** The tailwater level at the outlet of a culvert is influenced by the downstream channel or body of water it discharges into.

#### 2.3 Downstream Water Body

*   **Confluence with a Larger River:** Discharging into a larger river or a lake will generally result in a higher and more stable tailwater elevation compared to discharging into a smaller stream.
*   **Tidal Influence:** In coastal areas, tidal fluctuations will directly impact the tailwater levels.
*   **Storage in Downstream Reservoir/Lake:** Any storage capacity downstream can buffer changes in discharge and influence tailwater.

#### 2.4 Upstream Flow Rate ($Q$)

*   As the upstream discharge increases, the tailwater level generally also increases, although the relationship is typically non-linear.

---

### 3. Constructing a Tailwater Rating Curve

There are several methods to construct a tailwater rating curve, ranging from empirical observations to complex hydraulic modeling.

#### 3.1 Empirical Methods (Field Measurements)

*   **Direct Measurement:** The most straightforward method is to measure the tailwater depth ($y_{TW}$) or water surface elevation ($E_{TW}$) at the downstream end of the channel reach for various known discharge rates ($Q$).
*   **Procedure:**
    1.  Measure the discharge ($Q$) at the downstream control point (e.g., using a flow meter, velocity-area method, or a calibrated structure).
    2.  Measure the corresponding tailwater elevation ($E_{TW}$) or depth ($y_{TW}$) using a staff gauge or other water level measuring device.
    3.  Repeat these measurements for a range of discharge conditions, covering anticipated operational or flood scenarios.
    4.  Plot the measured $E_{TW}$ (or $y_{TW}$) against $Q$ to create the empirical tailwater rating curve.

*   **Limitations:**
    *   Requires site access and favorable conditions for measurement.
    *   May not cover all possible flow scenarios, especially extreme flood events.
    *   Accuracy depends on the precision of discharge and water level measurements.

#### 3.2 Analytical Methods (Based on Downstream Controls)

This method involves analyzing the hydraulic characteristics of the downstream control structure or channel reach.

*   **Method 3.2.1: Control Structure (e.g., Weir, Sluice Gate)**
    *   **Concept:** The tailwater rating curve is derived from the known stage-discharge relationship of the downstream control structure.
    *   **Example:** For a **broad-crested weir**, the discharge ($Q$) is related to the head over the weir ($H$) by an equation like $Q = C_d L \sqrt{2g} H^{3/2}$, where $C_d$ is the discharge coefficient and $L$ is the weir length. If the tailwater level is controlled by the weir, then the downstream water surface elevation will be a function of the head over the weir and the weir crest elevation.
    *   **Procedure:**
        1.  Determine the governing hydraulic equation for the downstream control structure.
        2.  For a range of tailwater elevations ($E_{TW}$), calculate the corresponding discharge ($Q$) that would occur if that elevation were maintained by the control. This often involves an iterative process or solving the structure's equation for $Q$ given $E_{TW}$.
        3.  Plot $E_{TW}$ vs. $Q$ to get the tailwater rating curve.

*   **Method 3.2.2: Downstream Channel Reach (No Distinct Control)**
    *   **Concept:** If there's no single controlling structure, the tailwater rating curve is determined by performing a Gradually Varied Flow (GVF) analysis for the downstream channel reach.
    *   **Procedure:**
        1.  **Define the Downstream Boundary Condition:** This is typically the water surface elevation at the very end of the reach where it discharges into a lake, river, or other body of water. This might be a known elevation or derived from another rating curve.
        2.  **Assume a Discharge ($Q$):** Start with a known discharge value.
        3.  **Calculate the Normal Depth ($y_n$) and Critical Depth ($y_c$)** for the given discharge in the downstream channel reach.
        4.  **Perform GVF Calculation (e.g., using numerical methods like the standard step method):** Starting from the known downstream boundary condition, step upstream, calculating the water surface elevation at each cross-section.
        5.  **Determine the Tailwater Elevation ($E_{TW}$):** The water surface elevation calculated at the *upstream end of the downstream reach* (which is the downstream end of the reach of interest for GVF analysis) is the tailwater elevation corresponding to the assumed discharge.
        6.  **Repeat for Different Discharges:** Repeat steps 2-5 for a range of discharge values.
        7.  **Plot the Tailwater Rating Curve:** Plot the calculated $E_{TW}$ against the assumed $Q$.

#### 3.3 Numerical Modeling

*   **Concept:** Advanced hydraulic modeling software (e.g., HEC-RAS, Mike 21) can simulate flow in open channels, including GVF and turbulent flow.
*   **Procedure:**
    1.  **Model Setup:** Create a detailed geometric model of the channel system, including cross-sections, channel slopes, roughness coefficients, and any hydraulic structures.
    2.  **Boundary Conditions:** Specify upstream and downstream boundary conditions. The downstream boundary condition can be a known water surface elevation, a rating curve, or a flow rate into a larger body of water.
    3.  **Simulation:** Run the model for various upstream discharge hydrographs or steady-state flow rates.
    4.  **Extract Results:** The model output will provide water surface elevations at all cross-sections for each simulated flow. The water surface elevation at the downstream end of the reach of interest is the tailwater elevation.
    5.  **Construct Curve:** Plot the extracted tailwater elevations against their corresponding discharges.

---

### 4. Tailwater Rating Curve and Gradually Varied Flow (GVF)

The tailwater rating curve is the **cornerstone** for conducting GVF analysis.

#### 4.1 Role in GVF Analysis

*   **Downstream Boundary Condition:** In GVF, we typically know the upstream flow rate ($Q$) and either the upstream water surface elevation or the channel slope. To determine the water surface profile along the channel, we need a condition at the downstream end.
*   **Connecting Upstream and Downstream:** The tailwater rating curve allows us to determine the water surface elevation at the downstream end of the reach for any given upstream discharge. This enables the step-by-step calculation of the water surface profile from downstream to upstream (or vice-versa, depending on the GVF profile type).

#### 4.2 Using the Tailwater Rating Curve in GVF Calculations

Let's consider the standard step method for GVF:

1.  **Define the Reach:** Identify the upstream and downstream ends of the channel reach for which you want to calculate the water surface profile.
2.  **Determine Upstream Flow ($Q$) and Boundary Condition:** You know the discharge ($Q$). You might also know the upstream water surface elevation ($E_{up}$), or it might be a normal depth ($y_n$) if the upstream reach is long and influences the flow depth.
3.  **Determine Tailwater Elevation ($E_{TW}$):** Using the **tailwater rating curve**, find the tailwater elevation ($E_{TW}$) corresponding to the upstream discharge ($Q$). This $E_{TW}$ becomes the water surface elevation at the downstream end of your analysis reach ($E_{down}$).
4.  **Calculate GVF Profile:**
    *   **If the GVF is M1, M2, M3, or S1, S2, S3:** You start from the downstream end where you know $E_{down} = E_{TW}$ and step *upstream*.
    *   **If the GVF is A1, A2, A3, or C1, C2, C3:** You might start from the upstream end and step *downstream*, but the tailwater condition is still essential to verify if the calculated profile eventually "connects" to the tailwater rating curve downstream. In practice, it's often easier to start from the known control point (which could be the downstream tailwater condition).

**Example:** You need to calculate the water surface profile in a channel reach upstream of a bridge. The upstream discharge is 100 m³/s. You have a tailwater rating curve for the river downstream of the bridge.

*   **Step 1:** From the tailwater rating curve, find the tailwater elevation at $Q = 100$ m³/s. Let's say it's 5.0 m.
*   **Step 2:** This means the water surface elevation at the downstream end of the bridge's influence (i.e., at the bridge soffit or downstream of it) is 5.0 m.
*   **Step 3:** Now, using this 5.0 m as the downstream water surface elevation for the reach *upstream* of the bridge, you can perform the GVF calculation (e.g., standard step method) to find the water surface elevations at various cross-sections upstream of the bridge.

#### 4.3 Classification of GVF based on Tailwater

The relationship between the normal depth ($y_n$) and the tailwater depth ($y_{TW}$) at a given discharge helps classify the GVF profile:

*   **Mild Slope (S-curves: S1, S2, S3):** $y_n > y_c$.
    *   $y_{TW} > y_n$: Water surface is above normal depth. Profile is **M1** (if $y_{TW} > y_c$) or **M2** (if $y_c > y_{TW} > 0$). The "M" stands for "mild."
    *   $y_{TW} = y_n$: Water surface is at normal depth. Profile is **M1** (if $y_n > y_c$).
    *   $y_{TW} < y_n$: Water surface is below normal depth. Profile is **M3** (if $y_{TW} > y_c$) or **M2** (if $y_c > y_{TW}$).

*   **Steep Slope (C-curves: C1, C2, C3):** $y_n < y_c$.
    *   $y_{TW} > y_c$: Water surface is above critical depth. Profile is **A1** (if $y_{TW} > y_n$) or **A2** (if $y_n > y_{TW}$). The "A" stands for "steep."
    *   $y_{TW} = y_c$: Water surface is at critical depth. Profile is **A1** (if $y_c > y_n$).
    *   $y_{TW} < y_c$: Water surface is below critical depth. Profile is **A3** (if $y_{TW} > y_n$) or **A2** (if $y_n > y_{TW}$).

*   **Horizontal Slope (H-curves: H1, H2, H3):** $y_n = \infty$.
    *   $y_{TW} > y_c$: Water surface is above critical depth. Profile is **H1** (if $y_{TW} > 0$) or **H2** (if $y_{TW} > 0$).
    *   $y_{TW} = y_c$: Water surface is at critical depth. Profile is **H1** (if $y_c > 0$).
    *   $y_{TW} < y_c$: Water surface is below critical depth. Profile is **H3** (if $y_{TW} > 0$).

*   **Dry Bed:** If the tailwater level is so low that it cannot sustain flow even at critical depth, the channel may be dry for a portion of its length.

---

### 5. Practical Applications

*   **Bridge Design:** Determining afflux (increase in upstream water level due to the bridge) requires knowing the tailwater conditions downstream of the bridge.
*   **Culvert Design:** The capacity of a culvert is limited by the tailwater level, which affects whether the flow is subcritical or supercritical, and whether pressure flow occurs.
*   **Levee Design:** To ensure a levee protects an area, its crest must be higher than the design flood level, which is influenced by upstream GVF and downstream tailwater conditions.
*   **Irrigation Canal Operation:** Tailwater levels in the downstream network affect the water distribution and the operating levels of gates and structures.
*   **Environmental Flow Studies:** Understanding tailwater conditions is important for assessing habitat suitability and ecological impacts.

---

### 6. Example Problem

**Scenario:** A rectangular concrete channel (Manning's $n=0.013$) has a width of 5 meters and a bottom slope of 0.001. It discharges into a river where the tailwater rating curve is given by $y_{TW} = 0.002 Q^{0.6}$ (where $y_{TW}$ is in meters and $Q$ is in m³/s). We need to find the water surface profile for a flow of $Q = 20$ m³/s in the channel.

**Solution:**

1.  **Channel Properties:**
    *   Width ($B$) = 5 m
    *   Slope ($S_0$) = 0.001
    *   Manning's $n$ = 0.013

2.  **Calculate Normal Depth ($y_n$) for $Q = 20$ m³/s:**
    *   Area ($A$) = $B \times y_n = 5 y_n$
    *   Wetted Perimeter ($P$) = $B + 2 y_n = 5 + 2 y_n$
    *   Hydraulic Radius ($R$) = $A/P = 5 y_n / (5 + 2 y_n)$
    *   Manning's Equation: $Q = \frac{1}{n} A R^{2/3} S_0^{1/2}$
    *   $20 = \frac{1}{0.013} (5 y_n) \left(\frac{5 y_n}{5 + 2 y_n}\right)^{2/3} (0.001)^{1/2}$
    *   $20 = 1538.46 (5 y_n) \left(\frac{5 y_n}{5 + 2 y_n}\right)^{2/3} (0.0316)$
    *   $20 \approx 243.1 (y_n) \left(\frac{5 y_n}{5 + 2 y_n}\right)^{2/3}$

    *   *Iterative solution for $y_n$*:
        *   Try $y_n = 1.0$ m: $R = 5(1)/(5+2(1)) = 5/7 \approx 0.714$. $Q = \frac{1}{0.013}(5)(0.714)^{2/3}(0.001)^{1/2} \approx 11.9$ m³/s. (Too low)
        *   Try $y_n = 1.2$ m: $R = 5(1.2)/(5+2(1.2)) = 6/(5+2.4) = 6/7.4 \approx 0.811$. $Q = \frac{1}{0.013}(5 \times 1.2)(0.811)^{2/3}(0.001)^{1/2} \approx 16.5$ m³/s. (Still too low)
        *   Try $y_n = 1.3$ m: $R = 5(1.3)/(5+2(1.3)) = 6.5/(5+2.6) = 6.5/7.6 \approx 0.855$. $Q = \frac{1}{0.013}(5 \times 1.3)(0.855)^{2/3}(0.001)^{1/2} \approx 18.7$ m³/s. (Getting closer)
        *   Try $y_n = 1.35$ m: $R = 5(1.35)/(5+2(1.35)) = 6.75/(5+2.7) = 6.75/7.7 \approx 0.877$. $Q = \frac{1}{0.013}(5 \times 1.35)(0.877)^{2/3}(0.001)^{1/2} \approx 19.8$ m³/s. (Very close)
    *   So, $y_n \approx 1.35$ m.

3.  **Calculate Critical Depth ($y_c$):**
    *   Critical flow occurs when the Froude number ($Fr$) = 1.
    *   $Fr^2 = \frac{Q^2 T}{g A^3} = 1$, where $T$ is the top width.
    *   For a rectangular channel, $T = B = 5$ m.
    *   $A = B y_c = 5 y_c$.
    *   $\frac{(20)^2 (5)}{9.81 (5 y_c)^3} = 1$
    *   $\frac{400 \times 5}{9.81 \times 125 y_c^3} = 1$
    *   $\frac{2000}{1226.25 y_c^3} = 1$
    *   $y_c^3 = \frac{2000}{1226.25} \approx 1.63$
    *   $y_c = (1.63)^{1/3} \approx 1.17$ m.

4.  **Determine Tailwater Elevation ($y_{TW}$):**
    *   Using the tailwater rating curve: $y_{TW} = 0.002 Q^{0.6}$
    *   For $Q = 20$ m³/s: $y_{TW} = 0.002 (20)^{0.6} = 0.002 \times 8.434 \approx 0.0169$ m.
    *   *Note:* The tailwater rating curve is usually given as water surface elevation relative to a datum. If it's given as depth, ensure consistency. Assuming this $y_{TW}$ is the depth *above* some base level, and if the channel bottom is at elevation 0, then $E_{TW} = y_{TW}$. However, tailwater is often expressed as a *water surface elevation*. Let's re-evaluate this. A more common tailwater rating curve might be expressed as $E_{TW} = f(Q)$ where $E_{TW}$ is an elevation. If this $y_{TW}$ is the depth above the *downstream channel bed*, we'd need to know the elevation of that bed. For simplicity here, let's assume the tailwater rating curve is actually giving the water surface elevation relative to the channel bottom of our analysis reach, so $E_{TW} = y_{TW}$. This is a simplification for the example. In a real case, you'd determine $E_{TW}$ at the downstream end based on the downstream conditions. Let's assume the downstream channel bed is at elevation 0. Then the tailwater depth is $\approx 0.0169$ m, meaning the tailwater *surface elevation* is $\approx 0.0169$ m.

5.  **Classify the GVF:**
    *   Slope: $S_0 = 0.001$. Since $y_n > y_c$ (1.35 m > 1.17 m), the slope is mild.
    *   Tailwater depth vs. Normal depth: $y_{TW} \approx 0.0169$ m.
    *   $y_{TW} < y_c$ (0.0169 m < 1.17 m).
    *   Comparing to the mild slope classifications:
        *   $y_{TW} > y_n$ (Not met)
        *   $y_{TW} = y_n$ (Not met)
        *   $y_{TW} < y_n$ (Met, $0.0169 < 1.35$)
    *   Therefore, since $y_{TW} < y_c$, this is an **M3** profile. The water surface starts at the tailwater elevation (0.0169 m) and rises as it moves upstream towards normal depth (1.35 m).

6.  **GVF Calculation (Standard Step Method - Example for one step upstream):**
    *   Assume the downstream end of our reach is cross-section 1, with $E_1 = 0.0169$ m. We want to find $E_2$ at a cross-section upstream.
    *   Let's say we want to find the water surface elevation at a point where the channel is still rectangular with width 5m, and we take a step upstream.
    *   The GVF equation integrated is: $\Delta x = \int_{y_1}^{y_2} \frac{A_2 - A_1}{S_0 - S_f} dy$ (in its differential form).
    *   For the standard step method, we approximate this. Let's assume we are moving from $E_1$ to $E_2$.
    *   We need the average friction slope $S_{f,avg}$ over the interval.
    *   $E_1 = 0.0169$ m (downstream boundary). $A_1 = 5 \times 0.0169 = 0.0845$ m². $R_1 = (5 \times 0.0169) / (5 + 2 \times 0.0169) \approx 0.163 / 5.0338 \approx 0.0325$ m.
    *   $S_{f1} = \frac{n^2 V_1^2}{2.208 R_1^{4/3}} = \frac{0.013^2 (20/0.0845)^2}{2.208 (0.0325)^{4/3}} = \frac{0.000169 \times (236.69)^2}{2.208 \times 0.0453} \approx \frac{9404.5}{0.0999} \approx 94138$ (This friction slope is excessively high due to the very low flow depth and small hydraulic radius). This indicates the flow is extremely shallow and likely not well-represented by standard Manning's for such small depths, or the tailwater rating is unusual.

    *   **Let's reconsider the tailwater rating curve's meaning for a more practical outcome.** A more realistic scenario might be that the downstream river has a significant influence.
    *   **Revised Example Scenario:** Assume the downstream river has a normal depth of $y_{n,river} = 2.0$ m for $Q=20$ m³/s, and it's a mild slope. Then the tailwater elevation at the junction would be $E_{TW} = 2.0$ m (assuming the river bed is at datum 0).
    *   **Recalculate Tailwater Elevation ($E_{TW}$) for $Q = 20$ m³/s:** If $E_{TW} = 2.0$ m.
    *   **GVF Classification with $E_{TW} = 2.0$ m:**
        *   Normal depth $y_n = 1.35$ m. Critical depth $y_c = 1.17$ m. Slope is mild.
        *   Tailwater depth $y_{TW} = 2.0$ m.
        *   $y_{TW} > y_n$ (2.0 m > 1.35 m).
        *   Therefore, this is an **M1** profile. The water surface starts at 2.0 m downstream and decreases towards normal depth (1.35 m) upstream.

    *   **GVF Calculation (Standard Step Method - for M1 profile):**
        *   Start at downstream (cross-section 1): $E_1 = 2.0$ m.
        *   $A_1 = 5 \times 2.0 = 10$ m².
        *   $R_1 = (5 \times 2.0) / (5 + 2 \times 2.0) = 10 / 9 \approx 1.11$ m.
        *   $V_1 = Q/A_1 = 20 / 10 = 2.0$ m/s.
        *   $S_{f1} = \frac{n^2 V_1^2}{2.208 R_1^{4/3}} = \frac{0.013^2 (2.0)^2}{2.208 (1.11)^{4/3}} = \frac{0.000169 \times 4}{2.208 \times 1.20} = \frac{0.000676}{2.65} \approx 0.000255$ (This is a reasonable friction slope).

        *   Now, let's find the water surface elevation at a cross-section 100 m upstream. We need to estimate $E_2$ such that the energy equation holds approximately:
        *   $E_1 + Z_1 = E_2 + Z_2 + h_f$
        *   For a prismatic channel, $Z_1 = Z_2$. So, $E_1 = E_2 + h_f$.
        *   $E_1 = y_1 + V_1^2/(2g) \approx 2.0 + 2.0^2/(2 \times 9.81) = 2.0 + 0.204 = 2.204$ m (Total Energy at section 1).
        *   We need to find $E_2$ and $y_2$ such that the average friction slope ($S_{f,avg} = (S_{f1} + S_{f2})/2$) allows us to step upstream by $\Delta x = 100$ m.
        *   $E_2 \approx E_1 - S_{f,avg} \Delta x$.
        *   Let's guess $E_2 = 2.1$ m. Then $y_2 = 2.1$ m.
        *   $A_2 = 5 \times 2.1 = 10.5$ m².
        *   $R_2 = (5 \times 2.1) / (5 + 2 \times 2.1) = 10.5 / 9.2 \approx 1.14$ m.
        *   $V_2 = Q/A_2 = 20 / 10.5 \approx 1.905$ m/s.
        *   $S_{f2} = \frac{0.013^2 (1.905)^2}{2.208 (1.14)^{4/3}} = \frac{0.000169 \times 3.63}{2.208 \times 1.25} = \frac{0.000613}{2.76} \approx 0.000222$.
        *   $S_{f,avg} = (0.000255 + 0.000222)/2 = 0.0002385$.
        *   Estimated $E_2 = E_1 - S_{f,avg} \Delta x = 2.204 - 0.0002385 \times 100 = 2.204 - 0.02385 = 2.180$ m.

        *   Our guessed $E_2 = 2.1$ m. The calculated $E_2 = 2.180$ m. They are not close enough. The actual $E_2$ will be higher than our guess.
        *   Let's try guessing $E_2 = 2.15$ m. Then $y_2 = 2.15$ m.
        *   $A_2 = 5 \times 2.15 = 10.75$ m².
        *   $R_2 = (5 \times 2.15) / (5 + 2 \times 2.15) = 10.75 / 9.3 \approx 1.156$ m.
        *   $V_2 = 20 / 10.75 \approx 1.86$ m/s.
        *   $S_{f2} = \frac{0.013^2 (1.86)^2}{2.208 (1.156)^{4/3}} = \frac{0.000169 \times 3.46}{2.208 \times 1.27} = \frac{0.000585}{2.80} \approx 0.000209$.
        *   $S_{f,avg} = (0.000255 + 0.000209)/2 = 0.000232$.
        *   Estimated $E_2 = E_1 - S_{f,avg} \Delta x = 2.204 - 0.000232 \times 100 = 2.204 - 0.0232 = 2.181$ m.

        *   Now, our guess $E_2 = 2.15$ m, and the calculated $E_2 = 2.181$ m. Still not matching. The true $E_2$ is likely higher.
        *   This iterative process for standard step method would continue until convergence for $E_2$. The water surface elevation decreases as we move upstream from 2.0 m towards the normal depth of 1.35 m.

---

### 7. Practice Questions

1.  **Definition:** What is meant by "tailwater" in open channel hydraulics?
2.  **Purpose:** List at least three reasons why a tailwater rating curve is important in hydraulic design.
3.  **Factors:** Identify two factors that would typically cause an increase in tailwater levels for a given discharge.
4.  **Construction:** Briefly describe one method for constructing a tailwater rating curve.
5.  **GVF Application:** Explain the role of a tailwater rating curve as a boundary condition in Gradually Varied Flow analysis.
6.  **Profile Classification:** If a channel has a mild slope, and at a certain discharge, the tailwater depth ($y_{TW}$) is greater than the normal depth ($y_n$), which GVF profile type (e.g., M1, M2, M3) would you expect? (Assume $y_{TW} > y_c$).
7.  **Problem Solving:** A trapezoidal channel with a bottom width of 4m, side slopes of 1:1, and a Manning's n of 0.020 discharges into a reservoir. The channel slope is 0.0005. For a flow of 30 m³/s, the reservoir water surface elevation is observed to be 3.5 m above the channel invert at the downstream end. Calculate the normal depth and critical depth for this flow in the channel. Then, determine the GVF profile type, assuming the channel invert is at elevation 0.

---

### 8. Answers to Practice Questions

1.  **Definition:** Tailwater is the water surface elevation at the downstream end of a channel reach or a hydraulic structure, representing the downstream control on the flow.
2.  **Purpose:**
    *   Provides the downstream boundary condition for GVF analysis.
    *   Essential for designing hydraulic structures (bridges, culverts, weirs).
    *   Used in floodplain mapping and flood risk assessment.
    *   Informs operational decisions for water management.
3.  **Factors:**
    *   Discharge ($Q$) increasing.
    *   Downstream control structure (e.g., a newly installed weir or a closed sluice gate).
    *   Upstream channel constricting.
    *   Confluence with a larger river or lake.
4.  **Construction:**
    *   **Empirical:** Measure tailwater levels at the downstream end for various known flow rates. Plot these values to create the curve.
    *   **Analytical:** Use the hydraulic equations of a downstream control structure (like a weir or gate) to relate discharge to tailwater elevation.
    *   **Numerical Modeling:** Use software like HEC-RAS to simulate flow and extract tailwater conditions.
5.  **GVF Application:** The tailwater rating curve provides the water surface elevation at the downstream end of the reach for a given upstream discharge. This value serves as the known starting point for calculating the water surface profile using methods like the standard step method, especially for subcritical flows where the profile is computed from downstream to upstream.
6.  **Profile Classification:** If the slope is mild, $y_{TW} > y_n$, and $y_{TW} > y_c$, the profile is **M1**.
7.  **Problem Solving:**
    *   **Channel Properties:** Bottom width ($B$) = 4 m, side slopes ($m$) = 1, slope ($S_0$) = 0.0005, Manning's $n$ = 0.020, $Q = 30$ m³/s.
    *   **Normal Depth ($y_n$):** For a trapezoidal channel, $A = (B+my)y = (4+y)y$, $P = B+2y\sqrt{1+m^2} = 4+2y\sqrt{2} \approx 4+2.828y$, $R = A/P = (4y+y^2)/(4+2.828y)$.
        Manning's: $30 = \frac{1}{0.020} \frac{(4y_n+y_n^2)}{(4+2.828y_n)^{2/3}} (4+y_n) (0.0005)^{1/2}$
        $30 = 50 \frac{(4y_n+y_n^2)}{(4+2.828y_n)^{2/3}} (0.02236)$
        $30 \approx 1.118 \frac{(4y_n+y_n^2)}{(4+2.828y_n)^{2/3}}$
        *   *Iterative solution*:
            *   Try $y_n = 2.0$ m: $A = (4+2)2 = 12$. $P = 4+2.828(2) = 9.656$. $R = 12/9.656 = 1.243$. $Q = \frac{1}{0.020} (12) (1.243)^{2/3} (0.0005)^{1/2} \approx 600 \times 12 \times 1.156 \times 0.02236 \approx 18.6$ m³/s (Too low).
            *   Try $y_n = 2.5$ m: $A = (4+2.5)2.5 = 16.25$. $P = 4+2.828(2.5) = 11.07$. $R = 16.25/11.07 = 1.468$. $Q = \frac{1}{0.020} (16.25) (1.468)^{2/3} (0.0005)^{1/2} \approx 812.5 \times 16.25 \times 1.273 \times 0.02236 \approx 37.2$ m³/s (A bit high).
            *   Try $y_n = 2.35$ m: $A = (4+2.35)2.35 = 14.7875$. $P = 4+2.828(2.35) = 10.67$. $R = 14.7875/10.67 = 1.386$. $Q = \frac{1}{0.020} (14.7875) (1.386)^{2/3} (0.0005)^{1/2} \approx 739.375 \times 14.7875 \times 1.235 \times 0.02236 \approx 31.5$ m³/s (Close enough).
        *   **Normal Depth ($y_n$) $\approx 2.35$ m.**

    *   **Critical Depth ($y_c$):**
        *   $Q^2 T / (g A^3) = 1$.
        *   $A = (4+y_c)y_c$. $T = B+2my_c = 4+2y_c$.
        *   $\frac{30^2 (4+2y_c)}{9.81 ((4+y_c)y_c)^3} = 1$
        *   $\frac{900 (4+2y_c)}{9.81 (4y_c+y_c^2)^3} = 1$
        *   *Iterative solution*:
            *   Try $y_c = 1.5$ m: $A = (4+1.5)1.5 = 8.25$. $T = 4+2(1.5) = 7$. $Q^2 T / (g A^3) = 30^2 \times 7 / (9.81 \times 8.25^3) = 900 \times 7 / (9.81 \times 561.7) \approx 6300 / 5509 \approx 1.14$ (Too high, need larger $y_c$).
            *   Try $y_c = 1.6$ m: $A = (4+1.6)1.6 = 8.96$. $T = 4+2(1.6) = 7.2$. $Q^2 T / (g A^3) = 30^2 \times 7.2 / (9.81 \times 8.96^3) = 900 \times 7.2 / (9.81 \times 720.3) \approx 6480 / 7066 \approx 0.917$ (Too low, need smaller $y_c$).
            *   Try $y_c = 1.57$ m: $A = (4+1.57)1.57 = 8.77$. $T = 4+2(1.57) = 7.14$. $Q^2 T / (g A^3) = 30^2 \times 7.14 / (9.81 \times 8.77^3) = 900 \times 7.14 / (9.81 \times 674.4) \approx 6426 / 6616 \approx 0.971$ (Close).
        *   **Critical Depth ($y_c$) $\approx 1.57$ m.**

    *   **GVF Profile Type:**
        *   Slope is mild ($y_n > y_c$, 2.35 m > 1.57 m).
        *   Tailwater Elevation ($E_{TW}$) = 3.5 m (given).
        *   Tailwater Depth ($y_{TW}$) = 3.5 m (assuming channel invert at elevation 0).
        *   Compare tailwater depth to normal depth: $y_{TW} = 3.5$ m, $y_n = 2.35$ m.
        *   $y_{TW} > y_n$.
        *   Since the slope is mild and $y_{TW} > y_n$ (and $y_{TW} > y_c$), the profile is **M1**.

---

### Important Points to Remember

*   The tailwater rating curve is a **downstream control** relationship ($Q$ vs. $E_{TW}$ or $y_{TW}$).
*   It is essential for **Gradually Varied Flow (GVF) analysis**, providing the downstream boundary condition.
*   **Field measurements** are the most direct way to establish a tailwater rating curve, but analytical or numerical methods are used when measurements are not feasible.
*   The **type of downstream control** (structure, natural reach, confluence) dictates how the tailwater rating curve is derived.
*   Understanding tailwater conditions is crucial for the design and operation of various hydraulic structures and for assessing flood risks.
*   The classification of GVF profiles (M, C, H, A, S curves) depends on the channel slope, normal depth, critical depth, and tailwater conditions.
