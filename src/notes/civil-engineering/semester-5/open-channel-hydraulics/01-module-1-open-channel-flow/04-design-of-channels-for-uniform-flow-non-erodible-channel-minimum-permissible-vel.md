---
title: "Design of channels for uniform flow-Non erodible channel- Minimum permissible velocity-best hydraulic section"
subject: "OPEN CHANNEL HYDRAULICS"
module: "Module 1: Open channel flow"
branch: "Civil Engineering"
semester: 5
topicId: "689f15cd56b5e963ba810ea6"
status: "completed"
scrapedAt: "2026-05-20T18:49:45.834Z"
---
# OPEN CHANNEL HYDRAULICS

## Module 1: Open Channel Flow

### Topic: Design of Channels for Uniform Flow - Non-Erodible Channels - Minimum Permissible Velocity - Best Hydraulic Section

---

### Learning Outcomes:

Upon completion of this topic, you should be able to:

*   Understand the principles of uniform flow in open channels.
*   Define and explain the concept of non-erodible channels.
*   Identify and explain the significance of minimum permissible velocity.
*   Determine the best hydraulic section for efficient flow.
*   Apply the principles of uniform flow and hydraulic design to practical problems.

---

### 1. Introduction to Uniform Flow

**Definition:** Uniform flow is a type of open channel flow where the flow depth, velocity, and cross-sectional area remain constant along the length of the channel. This means that the water surface is parallel to the channel bed.

**Conditions for Uniform Flow:**

*   **Constant Discharge (Q):** The amount of water flowing per unit time must be constant.
*   **Constant Cross-sectional Area (A):** The area of flow perpendicular to the direction of flow remains the same.
*   **Constant Wetted Perimeter (P):** The length of the channel boundary in contact with the flowing water is constant.
*   **Constant Mean Velocity (V):** The average velocity of the flow is constant.
*   **Constant Flow Depth (y):** The depth of water in the channel is constant.
*   **Constant Channel Geometry:** The shape and slope of the channel cross-section and bed are constant.
*   **Constant Roughness:** The roughness characteristics of the channel boundary are uniform.
*   **Water Surface Parallel to Channel Bed:** The slope of the energy grade line (EGL), hydraulic grade line (HGL), and water surface are all equal to the bed slope.

**Governing Equation:**

For uniform flow, the force of gravity driving the flow down the slope is balanced by the resistance forces due to friction. This is expressed by the **Manning's Equation**:

$$V = \frac{1}{n} R^{2/3} S_0^{1/2}$$

Where:
*   $V$ = Mean velocity of flow (m/s or ft/s)
*   $n$ = Manning's roughness coefficient (dimensionless, depends on the channel material)
*   $R$ = Hydraulic radius (m or ft)
*   $S_0$ = Slope of the channel bed (dimensionless)

**Hydraulic Radius (R):**

The hydraulic radius is a geometric property of the channel cross-section that relates the flow area to the wetted perimeter. It is a measure of the efficiency of the channel in conveying water.

$$R = \frac{A}{P}$$

Where:
*   $A$ = Cross-sectional area of flow (m² or ft²)
*   $P$ = Wetted perimeter (m or ft)

**Key Concept:** A larger hydraulic radius generally leads to a lower wetted perimeter relative to the flow area, resulting in less frictional resistance and thus higher velocity for a given slope and roughness.

---

### 2. Non-Erodible Channels

**Definition:** Non-erodible channels are those constructed with materials that are highly resistant to erosion or scouring by the flowing water. These materials can withstand the shear forces exerted by the flow without significant degradation.

**Characteristics of Non-Erodible Channel Materials:**

*   **High Shear Strength:** Ability to resist forces that tend to dislodge or move particles.
*   **Resistance to Abrasion:** Ability to withstand wear and tear from sediment particles carried by the flow.
*   **Cohesion (for some materials):** Particles stick together, providing stability.

**Common Non-Erodible Channel Materials:**

*   **Concrete:** Widely used for its durability, smooth surface, and resistance to erosion.
*   **Stone Masonry:** Constructed with carefully selected and placed stones, often with mortar.
*   **Rock Excavation:** Channels carved through solid rock formations.
*   **Steel/Metal:** Used for specialized applications like flumes or chutes where high strength and durability are required.
*   **Bituminous/Asphaltic Concrete:** Offers good durability and a smooth surface.
*   **Tightly compacted earth with vegetation:** In some cases, well-vegetated and compacted earth channels can be considered non-erodible for moderate velocities.

**Importance in Design:**

For non-erodible channels, the primary design consideration shifts from preventing erosion to achieving **maximum flow efficiency** for a given discharge and available slope. This often involves selecting a channel shape that minimizes the wetted perimeter relative to the flow area, leading to a higher hydraulic radius.

---

### 3. Minimum Permissible Velocity

**Definition:** The minimum permissible velocity (also known as self-cleansing velocity or non-silting velocity) is the lowest velocity of flow required to prevent the deposition of suspended sediment particles within the channel.

**Why is it important?**

*   **Prevent Sedimentation:** If the velocity drops below this critical value, heavier sediment particles will settle out of the flow and accumulate in the channel.
*   **Maintain Flow Capacity:** Sediment deposition reduces the cross-sectional area of the channel, decreasing its capacity to carry water and potentially leading to blockages.
*   **Reduce Maintenance Costs:** Sediment removal is a costly and time-consuming maintenance activity.

**Factors Influencing Minimum Permissible Velocity:**

*   **Size and Specific Gravity of Sediment Particles:** Larger and heavier particles require higher velocities to keep them in suspension.
*   **Concentration of Sediment:** Higher sediment concentrations can lead to increased deposition.
*   **Channel Geometry:** The turbulence and shear stress distribution within the channel influence particle movement.
*   **Viscosity of the Fluid:** Affects the settling rate of particles.

**Typical Values:**

The minimum permissible velocity is typically determined based on empirical data and can range from **0.6 m/s to 1.0 m/s** for common sediment sizes (e.g., fine sand to silt).

**Application in Design:**

While for non-erodible channels, the focus is often on efficiency, if there's a concern about fine suspended solids or if the channel might carry some sediment, the design must ensure that the calculated uniform flow velocity is greater than or equal to the minimum permissible velocity for the expected sediment.

**Important Note:** In the context of *non-erodible channels*, the concern is usually not about the channel material eroding, but rather about the deposition of sediments *carried by the water*. Therefore, minimum permissible velocity is still a relevant design parameter if sediment is present.

---

### 4. Best Hydraulic Section

**Definition:** The best hydraulic section for a given cross-sectional area is the shape that yields the **maximum hydraulic radius (R)**. This is desirable because, according to Manning's equation, a larger hydraulic radius results in a higher velocity for a given slope and roughness.

**Objective:** To convey a specific discharge with the minimum cross-sectional area or minimum wetted perimeter, leading to more efficient flow and potentially smaller channel dimensions.

**Key Principle:** For a given area, the section with the minimum wetted perimeter is the most hydraulically efficient.

**Common Channel Shapes and Their Hydraulic Efficiency:**

Let's consider a fixed flow area 'A'. We want to find the shape that minimizes the wetted perimeter 'P'.

#### a) Rectangular Channel

*   **Section:** Width 'b', Depth 'y'
*   **Area (A):** $A = by$
*   **Wetted Perimeter (P):** $P = b + 2y$

For a fixed area $A$, $b = A/y$.
Substituting into $P$: $P = \frac{A}{y} + 2y$.

To find the minimum $P$, we differentiate $P$ with respect to $y$ and set it to zero:
$\frac{dP}{dy} = -\frac{A}{y^2} + 2 = 0$
$\frac{A}{y^2} = 2$
$y^2 = \frac{A}{2}$
$y = \sqrt{\frac{A}{2}}$

Since $A = by$, $b = \frac{A}{y} = \frac{A}{\sqrt{A/2}} = A \sqrt{\frac{2}{A}} = \sqrt{2A}$
Also, $b = 2y$.
This means that for a rectangular channel to have the best hydraulic section, its **width should be equal to twice its depth ($b = 2y$)**.

*   **Hydraulic Radius (R):** $R = \frac{A}{P} = \frac{by}{b+2y} = \frac{by}{2y+2y} = \frac{by}{4y} = \frac{b}{4} = \frac{2y}{4} = \frac{y}{2}$
    (When $b=2y$)

#### b) Trapezoidal Channel

*   **Section:** Bottom width 'b', depth 'y', side slope 'z' (horizontal:vertical)
*   **Area (A):** $A = (b + zy)y$
*   **Wetted Perimeter (P):** $P = b + 2y\sqrt{1+z^2}$

For a fixed area $A$, we express $b$ in terms of $y$ and $z$: $b = \frac{A}{y} - zy$.
Substituting into $P$: $P = (\frac{A}{y} - zy) + 2y\sqrt{1+z^2}$.

To find the minimum $P$, we differentiate $P$ with respect to $y$ (treating $z$ as a constant for a specific trapezoidal shape) and set it to zero:
$\frac{dP}{dy} = -\frac{A}{y^2} - z + 2\sqrt{1+z^2} = 0$
$\frac{A}{y^2} = 2\sqrt{1+z^2} - z$
$y^2 = \frac{A}{2\sqrt{1+z^2} - z}$
$y = \sqrt{\frac{A}{2\sqrt{1+z^2} - z}}$

Now, we relate $b$ and $y$:
$b = \frac{A}{y} - zy$
We want the section with minimum $P$ for a given $A$. For trapezoidal channels, the condition for the best hydraulic section is when the flow depth $y$ is such that the **top width is twice the bottom width ($b+2zy = 2b$)** or equivalently, the **side slope length ($y\sqrt{1+z^2}$) is equal to the average of the top and bottom widths ($(b+2zy)/2$)**.
A more fundamental condition for the best hydraulic section of a trapezoid is when the wetted perimeter is minimized for a given area, which leads to:

**Condition for Best Hydraulic Trapezoidal Section:**
The flow depth $y$ is such that the radial depth (distance from the channel bed to the free surface along the side slope) is equal to the hydraulic radius $R$.
Alternatively, it can be shown that the side slope length $s = y\sqrt{1+z^2}$ is equal to the top width $T = b + 2zy$.
Also, the condition $A/P = R$ implies a relationship between $y$, $b$, and $z$.
The most commonly cited condition for the best hydraulic trapezoidal section is when the **side slope length is equal to the flow depth divided by the sine of the angle the side slope makes with the horizontal**. However, a more practical derivation leads to the following relationships:

For a given area $A$ and side slope $z$, the hydraulic radius $R$ is maximized when:
$\frac{d}{dy}(A/P) = 0$
This leads to the condition:
$b = 2y(\sqrt{1+z^2} - z)$

Substituting this $b$ back into the perimeter equation:
$P = 2y(\sqrt{1+z^2} - z) + 2y\sqrt{1+z^2}$
$P = 2y\sqrt{1+z^2} - 2yz + 2y\sqrt{1+z^2}$
$P = 4y\sqrt{1+z^2} - 2yz$

And the area $A = (b+zy)y = (2y\sqrt{1+z^2} - 2yz + zy)y = (2y\sqrt{1+z^2} - yz)y = 2y^2\sqrt{1+z^2} - y^2z$.
$A = y^2(2\sqrt{1+z^2} - z)$
$y = \sqrt{\frac{A}{2\sqrt{1+z^2} - z}}$

The hydraulic radius $R = \frac{A}{P} = \frac{y^2(2\sqrt{1+z^2} - z)}{4y\sqrt{1+z^2} - 2yz} = \frac{y(2\sqrt{1+z^2} - z)}{4\sqrt{1+z^2} - 2z}$

**Special Case: Semicircular Channel**
A semicircular channel is the most hydraulically efficient section for a given area, as it has the minimum wetted perimeter for a given flow area.
*   Radius of semicircle = $r$
*   Area ($A$) = $\frac{1}{2}\pi r^2$
*   Wetted Perimeter ($P$) = $\pi r$
*   Hydraulic Radius ($R$) = $A/P = (\frac{1}{2}\pi r^2) / (\pi r) = r/2$

However, semicircular channels are not always practical to construct.

**Commonly Used 'Near-Best' Hydraulic Sections:**

While a semicircle is the ultimate best, trapezoidal sections are very common in practice. The side slope $z$ is often chosen based on the stability of the bank material. Common side slopes are 1:1 ($z=1$), 1.5:1 ($z=1.5$), or 2:1 ($z=2$).

For a trapezoidal channel with a side slope of 1:1 ($z=1$), the condition for the best hydraulic section is when $b = 2y(\sqrt{1^2+1^2} - 1) = 2y(\sqrt{2} - 1) \approx 0.828y$.
The top width $T = b + 2zy = 0.828y + 2(1)y = 2.828y$.
The hydraulic radius $R = y/2$.

**Considerations for Practical Design:**

*   **Stability:** Side slopes must be stable for the channel material.
*   **Construction Cost:** Simpler shapes (like rectangular or standard trapezoids) are often cheaper to build.
*   **Maneuverability:** Wider, shallower channels might be preferred for access or maintenance.
*   **Available Space:** Site constraints can dictate the maximum width or depth.

**Example: Designing a Rectangular Channel for Best Hydraulic Section**

Design a rectangular channel to carry a discharge $Q = 5$ m³/s, with a bed slope $S_0 = 0.001$ and Manning's roughness coefficient $n = 0.015$. The channel should be of the best hydraulic section.

**Solution:**

1.  **Requirement for Best Hydraulic Rectangular Section:** $b = 2y$.
2.  **Hydraulic Radius:** $R = y/2$.
3.  **Manning's Equation:** $Q = AV = A \frac{1}{n} R^{2/3} S_0^{1/2}$
4.  **Area (A):** $A = by = (2y)y = 2y^2$.
5.  **Substitute A and R into Manning's Equation:**
    $5 = (2y^2) \frac{1}{0.015} (\frac{y}{2})^{2/3} (0.001)^{1/2}$
    $5 = \frac{2y^2}{0.015} \frac{y^{2/3}}{2^{2/3}} \sqrt{0.001}$
    $5 = \frac{2}{0.015} \frac{1}{1.587} \sqrt{0.001} y^{2 + 2/3}$
    $5 = 133.33 \times 0.630 \times 0.0316 y^{8/3}$
    $5 = 2.67 y^{8/3}$
6.  **Solve for y:**
    $y^{8/3} = \frac{5}{2.67} \approx 1.87$
    $y = (1.87)^{3/8} \approx (1.87)^{0.375}$
    $y \approx 1.25$ m

7.  **Calculate b:**
    $b = 2y = 2 \times 1.25 = 2.5$ m

**Therefore, the optimal dimensions for a rectangular channel of best hydraulic section are a width of 2.5 m and a depth of 1.25 m.**

---

### 5. Design of Channels for Uniform Flow

The general procedure for designing an open channel for uniform flow involves:

1.  **Determine Discharge (Q):** This is usually a requirement of the project (e.g., irrigation, drainage, water supply).
2.  **Select Channel Material and Estimate Roughness (n):** Based on the chosen material (concrete, earth, etc.), select an appropriate Manning's 'n' value.
3.  **Choose a Channel Shape:** Rectangular, trapezoidal, triangular, or circular, considering practical aspects and hydraulic efficiency.
4.  **Determine Bed Slope ($S_0$):** Often dictated by the topography of the site.
5.  **Consider Minimum Permissible Velocity:** If sediment is expected, ensure the design velocity is adequate.
6.  **Iterative Design Process:**
    *   **Assume a dimension or a relationship (e.g., best hydraulic section).**
    *   **Calculate the Hydraulic Radius (R).**
    *   **Use Manning's Equation to calculate the flow velocity (V) or discharge (Q).**
    *   **If the calculated value doesn't match the requirement, adjust the dimensions and repeat.**

**Design Steps for a Given Discharge and Slope (General):**

*   **Specify Q, $S_0$, n.**
*   **Select channel shape and side slope (if applicable).**
*   **Choose a trial depth 'y' or width 'b'.**
*   **Calculate Area (A) and Wetted Perimeter (P) based on the trial dimension and shape.**
*   **Calculate Hydraulic Radius (R = A/P).**
*   **Calculate Velocity (V = (1/n) * R^(2/3) * $S_0^{1/2}$).**
*   **Calculate Discharge (Q_calculated = V * A).**
*   **Compare Q_calculated with the required Q.** Adjust the trial dimension if necessary and repeat.

**Example: Designing a Trapezoidal Channel**

Design a trapezoidal channel for a discharge $Q = 10$ m³/s, with a bed slope $S_0 = 0.001$ and Manning's $n = 0.020$. The channel banks have a stable side slope of 1.5:1 (z = 1.5). Assume the channel should be of the best hydraulic section for this side slope.

**Solution:**

1.  **Given:** $Q = 10$ m³/s, $S_0 = 0.001$, $n = 0.020$, $z = 1.5$.
2.  **Best Hydraulic Trapezoidal Section Condition:** We need to find $y$ and $b$ such that $b = 2y(\sqrt{1+z^2} - z)$.
    $b = 2y(\sqrt{1+(1.5)^2} - 1.5)$
    $b = 2y(\sqrt{1+2.25} - 1.5)$
    $b = 2y(\sqrt{3.25} - 1.5)$
    $b = 2y(1.803 - 1.5)$
    $b = 2y(0.303)$
    $b = 0.606y$
3.  **Area (A):** $A = (b + zy)y = (0.606y + 1.5y)y = (2.106y)y = 2.106y^2$.
4.  **Wetted Perimeter (P):** $P = b + 2y\sqrt{1+z^2} = 0.606y + 2y(1.803) = 0.606y + 3.606y = 4.212y$.
5.  **Hydraulic Radius (R):** $R = A/P = (2.106y^2) / (4.212y) = y/2$.
6.  **Manning's Equation:** $Q = A \frac{1}{n} R^{2/3} S_0^{1/2}$
    $10 = (2.106y^2) \frac{1}{0.020} (\frac{y}{2})^{2/3} (0.001)^{1/2}$
    $10 = \frac{2.106y^2}{0.020} \frac{y^{2/3}}{2^{2/3}} \sqrt{0.001}$
    $10 = 105.3 y^2 \frac{y^{2/3}}{1.587} \times 0.0316$
    $10 = 105.3 \times 0.630 \times 0.0316 y^{8/3}$
    $10 = 2.105 y^{8/3}$
7.  **Solve for y:**
    $y^{8/3} = \frac{10}{2.105} \approx 4.75$
    $y = (4.75)^{3/8} \approx (4.75)^{0.375}$
    $y \approx 1.78$ m
8.  **Calculate b:**
    $b = 0.606y = 0.606 \times 1.78 \approx 1.08$ m

**Therefore, the dimensions for the best hydraulic trapezoidal section are approximately a bottom width of 1.08 m and a flow depth of 1.78 m (with side slopes of 1.5:1).**

---

### 6. Practice Questions and Exercises

**Question 1:**
Define uniform flow in an open channel. What are the conditions necessary for uniform flow to occur?

**Answer:**
Uniform flow is defined as open channel flow where the flow depth, velocity, and cross-sectional area remain constant along the length of the channel. The water surface is parallel to the channel bed. The conditions for uniform flow are: constant discharge, constant cross-sectional area, constant wetted perimeter, constant mean velocity, constant flow depth, constant channel geometry, constant roughness, and the energy grade line slope equals the bed slope.

**Question 2:**
What is a non-erodible channel, and why is it important in hydraulic design? Give examples of materials used for non-erodible channels.

**Answer:**
A non-erodible channel is constructed with materials that are highly resistant to erosion or scouring by flowing water. This is important because it allows for the design of more hydraulically efficient channels without the primary concern of the channel walls breaking down. Examples include concrete, stone masonry, and rock excavation.

**Question 3:**
Explain the concept of minimum permissible velocity and its significance in the design of open channels.

**Answer:**
The minimum permissible velocity is the lowest velocity of flow required to prevent the deposition of suspended sediment particles within the channel. Its significance lies in preventing sedimentation, maintaining the designed flow capacity, and reducing maintenance costs associated with sediment removal.

**Question 4:**
For a rectangular channel, what is the condition for it to be of the best hydraulic section? If the flow area is 10 m², what would be the dimensions of a rectangular channel of the best hydraulic section?

**Answer:**
The condition for a rectangular channel to be of the best hydraulic section is that its width ($b$) must be equal to twice its depth ($y$), i.e., $b = 2y$.
If $A = 10$ m²:
$A = by = (2y)y = 2y^2$
$10 = 2y^2 \Rightarrow y^2 = 5 \Rightarrow y = \sqrt{5} \approx 2.24$ m
$b = 2y = 2 \times 2.24 = 4.48$ m
So, the dimensions are approximately 4.48 m width and 2.24 m depth.

**Question 5:**
A trapezoidal channel with a side slope of 1:1 ($z=1$) needs to carry a discharge of 20 m³/s with a bed slope of 0.0005 and Manning's $n = 0.018$. Design the channel for the best hydraulic section.

**Answer:**
Given: $Q = 20$ m³/s, $S_0 = 0.0005$, $n = 0.018$, $z = 1$.
For best hydraulic trapezoidal section with $z=1$: $b = 2y(\sqrt{1+1^2} - 1) = 2y(\sqrt{2} - 1) = 2y(1.414 - 1) = 2y(0.414) = 0.828y$.
Area $A = (b+zy)y = (0.828y + 1y)y = 1.828y^2$.
Wetted Perimeter $P = b + 2y\sqrt{1+z^2} = 0.828y + 2y\sqrt{1+1^2} = 0.828y + 2y\sqrt{2} = 0.828y + 2.828y = 3.656y$.
Hydraulic Radius $R = A/P = (1.828y^2) / (3.656y) = y/2$.

Manning's Equation: $Q = A \frac{1}{n} R^{2/3} S_0^{1/2}$
$20 = (1.828y^2) \frac{1}{0.018} (\frac{y}{2})^{2/3} (0.0005)^{1/2}$
$20 = \frac{1.828y^2}{0.018} \frac{y^{2/3}}{1.587} \sqrt{0.0005}$
$20 = 101.56 y^2 \times 0.630 \times 0.0224 y^{2/3}$
$20 = 1.437 y^{8/3}$

Solve for $y$:
$y^{8/3} = \frac{20}{1.437} \approx 13.92$
$y = (13.92)^{3/8} \approx (13.92)^{0.375}$
$y \approx 2.75$ m

Calculate $b$:
$b = 0.828y = 0.828 \times 2.75 \approx 2.28$ m

**Therefore, the designed dimensions are a bottom width of approximately 2.28 m and a flow depth of 2.75 m, with side slopes of 1:1.**

---

### Important Points to Remember:

*   **Uniform flow** implies a stable flow condition where parameters like depth and velocity are constant.
*   **Manning's Equation** is the fundamental tool for analyzing uniform flow.
*   **Hydraulic Radius (R = A/P)** is crucial for channel efficiency; a larger R means less friction.
*   **Non-erodible channels** allow for designs prioritizing hydraulic efficiency.
*   **Minimum permissible velocity** is essential to prevent sediment deposition, even in non-erodible channels if sediment is present.
*   The **best hydraulic section** is the shape that maximizes the hydraulic radius for a given area, leading to the highest velocity.
*   For **rectangular channels**, the best hydraulic section has $b = 2y$.
*   For **trapezoidal channels**, the best hydraulic section depends on the side slope ($z$), with conditions like $b = 2y(\sqrt{1+z^2} - z)$ and $R = y/2$ for the optimal $z=60^\circ$ (i.e., $z = \tan(60^\circ) = \sqrt{3}$). However, the general condition $b = 2y(\sqrt{1+z^2} - z)$ applies for any chosen $z$.
*   **Practical design** must balance hydraulic efficiency with construction feasibility, stability, and cost.

---
