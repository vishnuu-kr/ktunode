---
title: "Design of rigid pavements: Introduction to analysis and design of rigid pavements: Types of stresses -wheel load stress, warping stress, frictional stress and critical combination of stresses, Westergaard’s Analysis."
subject: "HIGHWAY MATERIALS AND DESIGN"
module: "Module 4: Design of rigid pavements: Introduction to analysis and design of rigid pavements: Types of stresses "
branch: "Civil Engineering"
semester: 7
topicId: "689f15cf56b5e963ba8114e3"
status: "completed"
scrapedAt: "2026-05-20T19:00:17.786Z"
---
# HIGHWAY MATERIALS AND DESIGN: Module 4 - Design of Rigid Pavements

## Introduction to Analysis and Design of Rigid Pavements: Types of Stresses

This module introduces the fundamental principles behind the design of rigid pavements, focusing on the various stresses that a concrete slab experiences and how these stresses are analyzed.

---

### Learning Outcomes Covered:

*   Understanding the different types of stresses acting on rigid pavement slabs.
*   Analyzing the sources and magnitudes of wheel load stresses.
*   Explaining the phenomenon and impact of warping stresses.
*   Describing frictional stresses and their influence.
*   Identifying critical combinations of stresses.
*   Understanding the principles of Westergaard's Analysis for rigid pavement design.

---

### 1. Introduction to Rigid Pavement Design

Rigid pavements are constructed using cement concrete, which provides a stiff and strong slab that distributes wheel loads over a wide area of the subgrade. This stiffness is crucial in minimizing load-induced deflections and stresses on the underlying soil. The design process aims to ensure the pavement can withstand the anticipated traffic loads and environmental factors without excessive cracking or distress over its design life.

---

### 2. Types of Stresses in Rigid Pavements

Rigid pavements are subjected to several types of stresses, primarily due to:

*   **Wheel Loads:** The weight of vehicles transmitted through tires.
*   **Temperature Variations:** Leading to expansion and contraction of the concrete slab.
*   **Moisture Variations:** Causing swelling or shrinking of the subgrade and potentially differential curling of the slab.
*   **Frictional Forces:** Resistance to movement of the slab against the subgrade or joint sealant.

The major stresses considered in the design are:

#### 2.1. Wheel Load Stress

This is the most significant stress caused by the direct application of traffic loads. The magnitude and distribution of wheel load stress depend on several factors:

*   **Magnitude of the Load:** Heavier loads induce higher stresses.
*   **Tire Pressure:** Higher tire pressures result in higher stresses.
*   **Radius of Load Repetition:** The distance from the edge or corner where the load is applied.
*   **Slab Thickness:** Thicker slabs can distribute loads more effectively, reducing stress.
*   **Modulus of Elasticity of Concrete ($E_c$):** Higher modulus leads to less deformation and lower stress.
*   **Modulus of Subgrade Reaction ($k$):** A stiffer subgrade (higher $k$) provides better support, reducing stress.

**Key Concepts:**

*   **Load Transfer:** Adjacent slabs or dowel bars help transfer load, reducing stress at the load location.
*   **Edge and Corner Loading:** Stresses are generally highest when the load is applied near the edge or at the corner of a slab.
*   **Radius of Relative Stiffness ($\ell$):** A crucial parameter in rigid pavement analysis, representing the slab's ability to resist bending. It's defined as:
    $\ell = \left(\frac{E_c h^3}{12(1-\mu^2)k}\right)^{1/4}$
    Where:
    *   $E_c$ = Modulus of Elasticity of Concrete
    *   $h$ = Thickness of the concrete slab
    *   $\mu$ = Poisson's ratio of concrete (typically 0.15)
    *   $k$ = Modulus of Subgrade Reaction

**Example:**

A heavy truck axle load applied directly over a corner of a concrete slab will induce significant tensile stress at the bottom of the slab, potentially leading to cracking.

#### 2.2. Warping Stress (Curling Stress)

Warping stresses arise due to differential temperature and moisture conditions between the top and bottom surfaces of the concrete slab, or between the interior and edges/corners.

**Types of Warping:**

*   **Temperature Warping:**
    *   **Daily Temperature Cycle:** During the day, the top surface is hotter than the bottom, causing the slab to curl upwards (negative curling). This creates tensile stress at the bottom and compressive stress at the top.
    *   **Nighttime Temperature:** At night, the top surface cools faster than the bottom, causing the slab to curl downwards (positive curling). This creates tensile stress at the top and compressive stress at the bottom.
*   **Moisture Warping:**
    *   **Higher Moisture Content at Top:** If the top surface has a higher moisture content than the bottom, it expands and curls upwards, similar to daytime temperature warping.
    *   **Higher Moisture Content at Bottom:** If the bottom has higher moisture content, it expands and curls downwards.

**Key Concepts:**

*   **Differential Expansion/Contraction:** The difference in temperature or moisture causes uneven expansion or contraction across the slab's depth.
*   **Bending Moment:** This differential expansion/contraction creates a bending moment within the slab.
*   **Tensile Stress:** The most critical aspect of warping stress is the tensile stress it induces, which can cause cracking.

**Example:**

On a hot sunny day, the top surface of a concrete slab can be significantly warmer than the bottom. This temperature difference causes the slab to curl upwards, inducing tensile stress at the bottom surface, which is critical when combined with other stresses.

#### 2.3. Frictional Stress

Frictional stresses are developed due to the resistance offered by the subgrade or subbase to the horizontal movement of the concrete slab. This horizontal movement is primarily caused by:

*   **Temperature Changes:** Expansion and contraction of the slab with temperature fluctuations.
*   **Moisture Changes:** Swelling and shrinking of the subgrade, leading to slab movement.

**Key Concepts:**

*   **Bonding:** The friction between the slab and the subgrade.
*   **Slab Movement:** As the slab expands or contracts, it tries to move horizontally.
*   **Tensile/Compressive Stress:**
    *   **Cooling/Drying:** Slab contracts, attempting to move outwards. Friction resists this movement, inducing tensile stress in the slab near the ends or joints.
    *   **Warming/Wetting:** Slab expands, attempting to move inwards. Friction resists this movement, inducing compressive stress in the slab near the ends or joints.
*   **Subgrade Support:** The nature of the subgrade (e.g., smooth asphalt vs. rough concrete) and the presence of a subbase influence the magnitude of frictional stress.

**Example:**

When the temperature drops significantly, a concrete slab contracts. If the subgrade is rough, there will be significant frictional resistance to this outward movement. This resistance creates tensile stress in the slab, particularly at the ends of the slab, which can lead to cracking.

#### 2.4. Critical Combination of Stresses

The design of rigid pavements involves considering the simultaneous effect of multiple stresses. The most critical design condition occurs when the stresses from different sources combine to produce the maximum tensile stress at critical locations within the slab.

**Key Concepts:**

*   **Superposition Principle:** The total stress at any point in the slab is the sum of stresses from different sources.
*   **Critical Locations:** These are typically the top or bottom fibers of the slab at the edge or corner, where tensile stresses are most likely to cause failure.
*   **Worst-Case Scenario:** Design must account for the combination of stresses that results in the highest tensile stress.

**Common Critical Combinations:**

1.  **Wheel Load Stress (Edge/Corner) + Warping Stress (Daytime):**
    *   This combination occurs when a wheel load is placed near the edge or corner during the daytime.
    *   Daytime warping creates upward curling, inducing tensile stress at the bottom of the slab.
    *   The wheel load also induces tensile stress at the bottom of the slab at the edge/corner.
    *   These stresses add up, making the bottom of the slab at the edge or corner the critical location.

2.  **Wheel Load Stress (Edge/Corner) + Warping Stress (Nighttime):**
    *   This combination occurs when a wheel load is placed near the edge or corner during the nighttime.
    *   Nighttime warping creates downward curling, inducing tensile stress at the top of the slab.
    *   The wheel load also induces tensile stress at the bottom of the slab at the edge/corner.
    *   While the stresses are in different locations (top vs. bottom), the combination needs to be assessed. However, the daytime combination is often more critical.

3.  **Wheel Load Stress (Interior) + Warping Stress (Daytime/Nighttime):**
    *   When the load is placed in the interior of the slab, the primary stress is from the wheel load. Warping stresses also exist.
    *   Daytime warping (upward curl) adds tensile stress at the bottom.
    *   Nighttime warping (downward curl) adds tensile stress at the top.
    *   The critical stress in the interior is typically at the top (due to nighttime warping) or bottom (due to daytime warping and wheel load).

4.  **Frictional Stress + Warping Stress:**
    *   During cold weather, contraction due to temperature drop can induce tensile stress at the ends of the slab due to friction. This can combine with downward warping stresses.

**Example:**

The most critical stress condition is often considered to be a combination of a heavy wheel load at the edge or corner of the slab during the hottest part of the day (maximum positive temperature difference, causing upward curling). This scenario creates significant tensile stress at the bottom of the slab, which is a common point of failure.

---

### 3. Westergaard's Analysis

Westergaard's analysis is a foundational theoretical approach for determining stresses in rigid pavements due to wheel loads. It treats the concrete slab as an elastic plate resting on a continuous elastic medium (the subgrade).

**Assumptions of Westergaard's Analysis:**

*   The concrete slab is homogeneous, elastic, and isotropic.
*   The subgrade acts as a dense liquid (Winkler foundation), characterized by the modulus of subgrade reaction ($k$).
*   The load is applied uniformly over a circular or elliptical area (often simplified as a point load or a load distributed over a circular area representing tire contact).
*   The analysis considers bending stresses due to the applied load.

**Westergaard's Formulas for Stresses:**

Westergaard developed formulas for stresses at different load positions:

*   **a) Stress at the Interior of the Slab:**
    *   The load is far from any edge or corner.
    *   The stress is primarily due to bending.
    *   $\sigma_{\text{interior}} = \frac{3q}{2h^2} \left[ 1 + \left(\frac{a_a}{a_i}\right) + 3(1-\mu) \right]$  (Simplified form)
    *   **Actual Westergaard Formula (more complex):**  $\sigma_{\text{interior}} = \frac{3P}{2h^2} \left[ 1 + \frac{0.52 \mu + 0.103}{(a_i/\ell)^2} \right]$  (approximate for $a_i/\ell > 1.75$)
        *   Where $P$ is the wheel load.
        *   $a_i$ is the radius of the loaded area (or an effective radius).
        *   $q$ is the tire pressure.
        *   This formula generally results in lower stresses than edge or corner loading.

*   **b) Stress at the Edge of the Slab:**
    *   The load is applied near the edge, but not at the corner.
    *   The edge acts as a free boundary, influencing stress distribution.
    *   Westergaard's analysis considers two cases for edge loading:
        *   **Load near the edge, away from joints:** The stress is influenced by the slab's stiffness and the subgrade support.
        *   **Load at the edge, at a joint:** Load transfer mechanisms (dowels) are assumed to be present, affecting stress.
    *   **Simplified Edge Stress Formula:** $\sigma_{\text{edge}} = \frac{3P}{2h^2} \left[ 1.5 + 0.76 \left( \frac{a_e}{\ell} \right)^{0.5} \right]$ (approximate, for $a_e/\ell < 1.5$)
        *   Where $a_e$ is the radius of the loaded area.
        *   This stress is generally higher than interior stress.

*   **c) Stress at the Corner of the Slab:**
    *   This is typically the **most critical loading condition** as it results in the highest tensile stress.
    *   The corner acts as a free corner in both directions, leading to significant bending.
    *   **Westergaard's Corner Stress Formula:** $\sigma_{\text{corner}} = \frac{3P}{h^2} \left[ 1 - \left(\frac{a_c}{\ell}\right)^{0.5} \right]$ (approximate)
        *   Where $a_c$ is the radius of the loaded area.
        *   This formula is an approximation and is generally considered to overestimate stresses for larger loads or thicker slabs. However, it highlights the severe stress concentration at the corner.

**Radius of Loaded Area ($a$):**

The actual tire contact area is elliptical. For analysis, it's often approximated as a circle.

*   **For Interior Loading:** $a_i = \sqrt{1.5 \times \text{Area of contact}} = \sqrt{1.5 \times \frac{P}{\text{tire pressure}}}$
*   **For Edge Loading:** $a_e = \sqrt{1.5 \times \frac{P}{\text{tire pressure}}}$ (often taken as the same as $a_i$, or a slightly modified value to represent the load's proximity to the edge).
*   **For Corner Loading:** $a_c = \sqrt{1.5 \times \frac{P}{\text{tire pressure}}}$

**Important Considerations for Westergaard's Analysis:**

*   **Radius of Relative Stiffness ($\ell$):** This parameter is crucial for determining which formula to use and the magnitude of stress.
*   **Modulus of Subgrade Reaction ($k$):** This is a key input and is usually determined from plate load tests.
*   **Dowel Action:** Westergaard's original analysis assumed no load transfer at joints. For edge and corner loading, the presence of dowel bars significantly reduces stresses. Later modifications and design procedures (e.g., PCA, AASHTO) account for this.
*   **Warping and Frictional Stresses:** Westergaard's original analysis primarily focused on wheel load stresses. Subsequent developments by others (like were incorporated into later design methods) added considerations for warping and frictional stresses.

---

### 4. Practice Questions and Exercises

**Question 1:**

Define the modulus of subgrade reaction ($k$) and explain its significance in rigid pavement design.

**Answer:**
The modulus of subgrade reaction ($k$) is a measure of the stiffness or load-supporting capacity of the subgrade (or subbase). It is defined as the pressure required to produce a unit deflection of the subgrade surface, typically expressed in MPa/m or pci (lb/in³/inch). A higher $k$ value indicates a stiffer and more supportive subgrade. Its significance lies in its direct impact on the radius of relative stiffness ($\ell$), which in turn governs the magnitude of stresses induced by wheel loads. A higher $k$ leads to a larger $\ell$, meaning the slab can distribute loads over a wider area, resulting in lower bending stresses.

**Question 2:**

List the three primary types of stresses experienced by rigid pavement slabs and briefly describe their cause.

**Answer:**
The three primary types of stresses are:
1.  **Wheel Load Stress:** Caused by the direct application of traffic loads transmitted through tires.
2.  **Warping Stress (Curling Stress):** Caused by differential temperature or moisture gradients between the top and bottom surfaces of the slab, leading to uneven expansion or contraction.
3.  **Frictional Stress:** Developed due to the resistance of the subgrade to the horizontal movement of the slab caused by temperature and moisture changes.

**Question 3:**

Which loading condition typically results in the highest tensile stress in a rigid pavement slab, and why?

**Answer:**
Corner loading typically results in the highest tensile stress. This is because the corner of the slab acts as a free boundary in two directions, causing significant bending and stress concentration. When a wheel load is placed at the corner, the slab attempts to bend downwards, creating tensile stress at the bottom of the slab directly under the load and extending across the corner.

**Question 4:**

Calculate the radius of relative stiffness ($\ell$) for a concrete slab with the following properties:
*   Modulus of Elasticity of Concrete ($E_c$) = 30,000 MPa
*   Slab Thickness ($h$) = 200 mm
*   Modulus of Subgrade Reaction ($k$) = 60 MN/m³ (or 60 N/mm³)
*   Poisson's Ratio ($\mu$) = 0.15

**Answer:**
First, convert all units to be consistent. Let's use MPa and mm.
$E_c = 30,000 \text{ MPa}$
$h = 200 \text{ mm}$
$k = 60 \text{ MN/m}^3 = 60 \times 10^6 \text{ N/m}^3 = 60 \times 10^6 \text{ N} / (1000 \text{ mm})^3 = 60 \times 10^6 \text{ N} / 10^9 \text{ mm}^3 = 0.06 \text{ N/mm}^3$
$\mu = 0.15$

The formula for the radius of relative stiffness is:
$\ell = \left(\frac{E_c h^3}{12(1-\mu^2)k}\right)^{1/4}$

$\ell = \left(\frac{30,000 \text{ MPa} \times (200 \text{ mm})^3}{12(1-0.15^2) \times 0.06 \text{ N/mm}^3}\right)^{1/4}$
$\ell = \left(\frac{30,000 \times 8,000,000}{12(1-0.0225) \times 0.06}\right)^{1/4}$
$\ell = \left(\frac{240 \times 10^9}{12(0.9775) \times 0.06}\right)^{1/4}$
$\ell = \left(\frac{240 \times 10^9}{11.73 \times 0.06}\right)^{1/4}$
$\ell = \left(\frac{240 \times 10^9}{0.7038}\right)^{1/4}$
$\ell = (340.99 \times 10^9)^{1/4}$
$\ell \approx (3.41 \times 10^{11})^{1/4}$
$\ell \approx 429.3 \text{ mm}$

So, the radius of relative stiffness is approximately 429.3 mm.

**Question 5:**

Describe a scenario where the combination of wheel load stress and warping stress could lead to a critical failure condition in a rigid pavement.

**Answer:**
A critical failure condition can occur when a heavy wheel load is applied near the edge or corner of a concrete slab during the hottest part of the day. In this scenario:
*   The **wheel load** creates tensile stress at the bottom of the slab due to bending.
*   The high daytime temperature causes the top surface of the slab to expand more than the bottom, resulting in **upward curling**. This curling induces additional tensile stress at the bottom of the slab.
When these two tensile stresses add up at the bottom of the slab at the edge or corner, the resulting maximum tensile stress can exceed the flexural strength of the concrete, leading to cracking and potential failure.

---

### 5. Important Points to Remember

*   **Rigid pavements are designed to resist bending stresses.**
*   **Wheel load stresses are most critical at the edge and corner.**
*   **Warping stresses are caused by differential temperature and moisture, inducing bending.**
*   **Frictional stresses arise from slab movement against the subgrade.**
*   **The critical combination of stresses dictates the pavement's design.** Typically, it's a wheel load at the edge/corner combined with daytime warping.
*   **Westergaard's analysis provides theoretical solutions for wheel load stresses.**
*   **The radius of relative stiffness ($\ell$) is a key parameter in rigid pavement analysis.**
*   **Higher $E_c$, thicker slab ($h$), and higher $k$ all increase $\ell$ and reduce stresses.**
*   **Modern design procedures (like AASHTO) build upon Westergaard's principles and incorporate more sophisticated analysis and load transfer mechanisms.**

---
