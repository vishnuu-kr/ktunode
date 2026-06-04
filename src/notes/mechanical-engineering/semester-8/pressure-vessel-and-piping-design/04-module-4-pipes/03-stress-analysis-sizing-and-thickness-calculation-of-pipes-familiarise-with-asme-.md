---
title: "Stress Analysis, sizing and thickness calculation of pipes (Familiarise with ASME B31.3)"
subject: "PRESSURE VESSEL AND PIPING DESIGN"
module: "Module 4: Pipes"
branch: "Mechanical Engineering"
semester: 8
topicId: "68a3fd1951d0cf4804464407"
status: "completed"
scrapedAt: "2026-05-20T18:23:38.012Z"
---
# Module 4: Pipes - Stress Analysis, Sizing, and Thickness Calculation (ASME B31.3)

## 1. Introduction to Piping Systems and ASME B31.3

### 1.1 What are Piping Systems?

Piping systems are a fundamental part of process plants and other industries, designed to transport fluids (liquids and gases) between different pieces of equipment. They are complex networks involving pipes, fittings, valves, flanges, and supports.

### 1.2 Introduction to ASME B31.3

**ASME B31.3: Process Piping** is a widely recognized and adopted code that establishes requirements for the design, fabrication, assembly, erection, examination, testing, and preparation for use of process piping. It covers piping in petroleum refineries, chemical plants, pharmaceutical plants, and many other industries.

**Key Purpose of ASME B31.3:** To ensure the safety and integrity of process piping systems under various operating conditions.

### 1.3 Scope of ASME B31.3

ASME B31.3 covers piping systems that:
*   Carry fluids at temperatures from -196°C (-325°F) to 1700°C (3100°F).
*   Operate at pressures from full vacuum up to 41.4 MPa (6000 psi).
*   Includes various types of materials, from metallic to non-metallic.
*   Covers a wide range of applications, including new construction and modifications.

**(Refer to Harvey, Chapter 15: Piping and Piping Design)**

## 2. Stress Analysis in Piping Systems

Stress analysis is crucial for ensuring that a piping system can safely withstand the internal pressure, external loads, and thermal expansion without failure.

### 2.1 Types of Stresses in Piping

*   **Pressure Stress:** Caused by the internal or external pressure acting on the pipe wall.
    *   **Hoop Stress (Circumferential Stress):** Acts along the circumference of the pipe. It is the dominant stress due to pressure.
    *   **Longitudinal Stress:** Acts along the length of the pipe. It includes pressure stress and stresses due to end closures (like flanges or caps).
*   **Thermal Stress:** Arises from the expansion or contraction of the pipe material due to temperature changes. If this expansion/contraction is restrained, it induces stresses.
*   **Weight Stress:** Caused by the weight of the pipe, fluid inside it, insulation, and any attached components (valves, etc.). This leads to bending stresses, especially in horizontal runs and at supports.
*   **Moment Stress:** Induced by external forces and moments, such as those from wind, seismic loads, or applied loads from machinery.
*   **Vibration Stress:** Can be caused by machinery, fluid pulsations, or flow-induced vibrations.
*   **Occasional Stresses:** Such as those from fluid hammer, relief valve discharge, or start-up/shut-down conditions.

### 2.2 Importance of Stress Analysis

*   **Preventing Failure:** To avoid yielding, rupture, fatigue, or buckling of the piping.
*   **Ensuring Safety:** Protecting personnel and the environment from leaks or catastrophic failures.
*   **Component Integrity:** Preventing excessive stress on connected equipment (e.g., pumps, heat exchangers) by managing the loads transmitted through the piping.
*   **Service Life:** Predicting and preventing fatigue failures due to repeated stress cycles.
*   **Compliance:** Meeting the requirements of design codes like ASME B31.3.

**(Refer to Harvey, Chapter 15: Piping and Piping Design; Moss, Chapter 7: Piping Stress Analysis)**

### 2.3 Stress Analysis Methods

*   **Analytical Methods:** Using fundamental equations to calculate stresses under simplified conditions (e.g., straight pipe under internal pressure).
*   **Finite Element Analysis (FEA):** A powerful numerical technique that divides the piping system into smaller elements to analyze complex geometries, loads, and boundary conditions. This is the standard for complex piping systems. Software like CAESAR II, AutoPIPE, or COMPRESS are commonly used.

### 2.4 Key Stress Criteria in ASME B31.3

ASME B31.3 categorizes stresses based on their duration and origin to ensure safe design. The code provides allowable stress values that must not be exceeded.

*   **Sustained Loads:** Stresses that are present during normal operation and are relatively constant over time (e.g., pressure, weight).
*   **Occasional Loads:** Stresses that occur infrequently (e.g., wind, seismic).
*   **Expansion Cases:** Stresses resulting from thermal expansion and contraction.

**Allowable Stress (S):** The maximum stress permitted by the code for a given material at a specific temperature. This is derived from the material's tensile and yield strengths, with safety factors applied.

**(Refer to ASME B31.3, Chapters II and III)**

## 3. Sizing and Thickness Calculation of Pipes

The primary goal of sizing and thickness calculation is to determine the minimum required wall thickness for a pipe to safely contain the fluid under the specified operating conditions.

### 3.1 Factors Influencing Pipe Sizing and Thickness

*   **Internal Pressure (P):** The most significant factor. Higher pressure requires thicker walls.
*   **Fluid Velocity:** While not directly part of the thickness calculation in ASME B31.3, velocity is critical for **erosion** and **noise**. Codes like B31.3 have velocity limits for certain fluids to prevent excessive wear. For sizing, flow rate and desired velocity are used to determine the required internal diameter.
*   **Temperature (T):** Affects the allowable stress of the material. Higher temperatures generally reduce allowable stress.
*   **Material Properties:**
    *   **Allowable Stress (S):** The primary material property used in thickness calculations.
    *   **Corrosion Allowance (CA):** An additional thickness added to account for material loss due to corrosion over the service life of the pipe.
*   **External Loads:** While not directly in the basic thickness formula, external loads (weight, bending moments) are considered in the overall stress analysis, and if they become critical, may necessitate a thicker pipe or a different material.
*   **Joining Method:** Different joining methods (welding, threading) have different stress considerations.
*   **Wall Thickness Factor (E):** Accounts for the quality of the pipe material and manufacturing process (e.g., seamless vs. welded).
*   **Joint Efficiency (Y):** For welded pipes, this factor accounts for the potential weakness of the weld compared to the base metal.

### 3.2 Basic Thickness Calculation Formula (ASME B31.3)

The fundamental formula for calculating the required minimum wall thickness for **butt-welded** pipe under internal pressure is given by:

$$ t_m = \frac{PD}{2(SE + PY)} + C_a $$

Where:

*   $t_m$: Minimum required wall thickness (mm or inches).
*   $P$: Internal design pressure (psi or MPa).
*   $D$: Outside diameter of the pipe (mm or inches).
*   $S$: Allowable stress value for the pipe material at the design temperature (psi or MPa).
*   $E$: Longitudinal weld joint quality factor (dimensionless). For seamless pipe, $E = 1.0$. For welded pipe, values depend on the welding and inspection method as per B31.3.
*   $Y$: Coefficient from B31.3, dependent on temperature and material. Generally, for temperatures below 482°C (900°F), $Y$ is typically 0.4 for ferritic steels and 0.7 for austenitic steels and other materials.
*   $C_a$: Corrosion allowance (mm or inches).

**Important Notes on the Formula:**

*   This is the basic formula for **butt-welded, straight pipe under internal pressure**.
*   Other formulas exist for **flanged joints** (which have additional stress considerations due to flange separation forces) and for **thread joints** (which have specific thickness requirements due to the thread roots).
*   The term $PY$ in the denominator accounts for the stress due to longitudinal pressure. The term $SE$ represents the allowable stress in the hoop direction.

**(Refer to ASME B31.3, Section 304.1.2 - Minimum Wall Thickness)**

### 3.3 Determining Required Pipe Diameter (Sizing)

Pipe sizing is primarily driven by **flow rate** and **acceptable velocity**.

*   **Flow Rate ($Q$):** The volume of fluid to be transported per unit time (e.g., m³/hr, gpm).
*   **Fluid Velocity ($v$):** The speed at which the fluid travels through the pipe. Excessive velocity can lead to erosion, noise, vibration, and increased pressure drop. Too low a velocity might not be efficient or could lead to settling of solids.

The relationship between flow rate, velocity, and pipe cross-sectional area is:

$$ Q = A \times v $$

Where:
*   $Q$ is the volumetric flow rate.
*   $A$ is the cross-sectional area of the pipe ($A = \pi r^2 = \pi (D_i/2)^2$, where $D_i$ is the inside diameter).
*   $v$ is the fluid velocity.

**Procedure for Sizing:**

1.  **Determine the flow rate (Q)** for the process.
2.  **Select a target fluid velocity (v)** based on industry best practices, fluid properties (viscosity, corrosiveness), and desired efficiency. Typical ranges for liquids are 1-3 m/s (3-10 ft/s), and for gases, 15-30 m/s (50-100 ft/s).
3.  **Calculate the required cross-sectional area (A):** $A = Q/v$.
4.  **Calculate the required inside diameter ($D_i$):** $D_i = \sqrt{\frac{4A}{\pi}}$.
5.  **Select a standard pipe size** with an inside diameter equal to or greater than the calculated $D_i$. Pipe sizes are typically specified by Nominal Pipe Size (NPS) or DN (Diameter Nominal), which refer to standard outside diameters and scheduled wall thicknesses.

**(Refer to Harvey, Chapter 15: Piping and Piping Design; Brownell & Young, Chapter 5: Piping)**

### 3.4 Selecting Pipe Wall Thickness

Once the standard pipe size (and thus its outside diameter, $D$) is selected, the **schedule number** of the pipe is chosen to ensure the actual wall thickness is sufficient.

1.  **Calculate the required minimum thickness ($t_m$)** using the ASME B31.3 formula for the chosen operating pressure, temperature, material, and design conditions.
2.  **Select a standard pipe schedule** (e.g., Sch 40, Sch 80, Sch 160). The schedule number dictates the wall thickness for a given NPS.
3.  **Check the actual minimum wall thickness ($t_{actual}$)** provided by the selected schedule.
4.  **Ensure $t_{actual} \ge t_m$**. If not, a higher schedule number (thicker wall) must be selected.

**Important:** ASME B31.3 specifies that the **nominal wall thickness** ($t_n$) for pipe shall not be less than the required minimum thickness ($t_m$).

$$ t_n \ge t_m $$

The actual wall thickness of pipe is usually slightly larger than the nominal thickness. The minimum wall thickness for a pipe as manufactured is typically 7/8 of the nominal wall thickness.

$$ t_{actual, min} = 0.875 \times t_n $$

The code requires that the minimum wall thickness as manufactured must be at least $t_m$:

$$ 0.875 \times t_n \ge t_m $$

This implies the required nominal thickness is:

$$ t_n \ge \frac{t_m}{0.875} $$

**(Refer to ASME B31.3, Section 304.1.2 & Table A-1)**

## 4. Stress Analysis in Practice with ASME B31.3

While the basic thickness formula is for pressure containment, a comprehensive piping stress analysis addresses all types of loads and their combined effects.

### 4.1 Beyond Pressure: Thermal Expansion and Flexibility

A critical aspect of piping design is managing thermal expansion and contraction. When a hot fluid is introduced into a cold piping system, the pipes expand. If this expansion is not accommodated, it can generate significant stresses in the pipe and impose large loads on connected equipment and supports.

**Flexibility Analysis:** This analysis aims to determine if the piping system has sufficient flexibility to absorb thermal movements without overstressing components or causing excessive loads on connected equipment.

**Key Concepts in Flexibility Analysis:**

*   **Restraints and Supports:** These elements control the movement of the piping. Spring hangers allow vertical movement, rigid supports restrict it, and guides control lateral movement while allowing axial expansion.
*   **Expansion Loops and Bellows:** These are designed to absorb thermal expansion.
*   **Allowable Expansion Stress:** ASME B31.3 defines allowable stresses for expansion and occasional loads, which are typically higher than those for sustained loads. This is often referred to as the "expansion stress range."
*   **Stress Intensification Factors (SIFs):** Used to account for stress concentrations at fittings (elbows, tees) and other geometric discontinuities, which are not adequately represented by simple beam theory.

**(Refer to Moss, Chapter 7: Piping Stress Analysis; Harvey, Chapter 15: Piping and Piping Design)**

### 4.2 Stress Categories and Allowable Limits (ASME B31.3)

ASME B31.3 defines several stress categories and provides specific allowable limits for each:

1.  **Shallow Well Pressure Stress ($S_A$):** This is the calculated stress due to internal pressure, using a simplified formula similar to the one above, but for specific components like thin-walled elbows.

2.  **Longitudinal Stress due to Pressure ($S_L$):** The sum of the stress due to internal pressure and the stress due to longitudinal end forces.

3.  **Sustained Stress ($S_{sust}$):** The sum of stresses due to pressure, weight, and occasional external loads. The allowable limit for sustained stress is generally the **allowable stress (S)** for the material at the operating temperature.

    $S_{sust} \le S$

4.  **Expansion Stress Range ($S_{exp}$):** The difference between the maximum and minimum stress occurring in a cycle due to thermal expansion, weight, and occasional external loads. The allowable expansion stress range is typically $S_h + f \times (A_e - S_A)$, where:
    *   $S_h$: Allowable stress at the maximum temperature of the cycle.
    *   $f$: A stress range reduction factor (e.g., 1.0 for a single cycle, 0.5 for many cycles).
    *   $A_e$: Allowable stress range (a value specified by the code, often related to $S_h$ and the yield strength at ambient temperature).
    *   $S_A$: Stress from sustained loads.

    The code requires that the calculated expansion stress range ($S_{exp}$) must be less than or equal to the allowable expansion stress range.

    $S_{exp} \le S_h + f(A_e - S_A)$

5.  **Occasional Loads:** Stresses due to infrequent loads like wind or seismic events are limited to higher values, usually related to the yield strength of the material.

**(Refer to ASME B31.3, Chapter II, Section 302.3.5 - Stresses)**

### 4.3 Practice Example: Pipe Thickness Calculation

**Problem:**
Calculate the minimum required wall thickness ($t_m$) for a 4-inch Schedule 40 carbon steel pipe (ASTM A106 Grade B) operating at 20 barg (2 MPa gauge) and 150°C. Assume a corrosion allowance of 1.5 mm. Atmospheric pressure is 0.1 MPa absolute.

**Given:**
*   Pipe Size: 4-inch NPS
*   Schedule: Schedule 40
*   Material: ASTM A106 Grade B
*   Design Pressure ($P$): 2 MPa gauge + 0.1 MPa (atmospheric) = 2.1 MPa absolute. Convert to psi: 2.1 MPa * 145.038 psi/MPa ≈ 304.6 psi.
*   Design Temperature ($T$): 150°C. Convert to °F: (150 * 9/5) + 32 = 302°F.
*   Corrosion Allowance ($C_a$): 1.5 mm. Convert to inches: 1.5 mm / 25.4 mm/inch ≈ 0.059 inches.

**From ASME B31.3 Tables (for illustration purposes):**
*   For 4-inch NPS, the outside diameter ($D$) is 4.500 inches.
*   For ASTM A106 Grade B at 302°F, the allowable stress ($S$) is approximately 18,900 psi (this value should be looked up precisely in the latest edition of B31.3).
*   For ferritic steels at 150°C (302°F), the coefficient $Y$ is 0.4.
*   For seamless pipe (or assuming a high joint quality factor for welded pipe), $E = 1.0$.

**Calculation:**

Using the formula: $t_m = \frac{PD}{2(SE + PY)} + C_a$

$t_m = \frac{(304.6 \text{ psi}) \times (4.500 \text{ inches})}{2 \times (18900 \text{ psi} \times 1.0 + 304.6 \text{ psi} \times 0.4)} + 0.059 \text{ inches}$

$t_m = \frac{1370.7}{2 \times (18900 + 121.84)} + 0.059$

$t_m = \frac{1370.7}{2 \times 19021.84} + 0.059$

$t_m = \frac{1370.7}{38043.68} + 0.059$

$t_m = 0.0350 + 0.059$

$t_m = 0.094 \text{ inches}$

**Selecting Pipe:**
For 4-inch NPS, Schedule 40 pipe has a nominal wall thickness ($t_n$) of 0.237 inches.

**Check:**
Is the actual minimum wall thickness (0.875 * 0.237 = 0.207 inches) greater than or equal to the required minimum thickness ($t_m$)?
$0.207 \text{ inches} \ge 0.094 \text{ inches}$. Yes.

Therefore, a 4-inch Schedule 40 pipe is adequate for pressure containment and corrosion allowance. However, a full stress analysis would be needed to verify its adequacy against thermal expansion, weight, and other loads.

### 4.4 Practice Example: Pipe Sizing

**Problem:**
A process requires transporting 50 m³/hr of water at 25°C. The recommended velocity for water in process piping is between 1.5 to 2.5 m/s to balance pressure drop and erosion.

**Given:**
*   Flow Rate ($Q$): 50 m³/hr. Convert to m³/s: 50 / 3600 = 0.0139 m³/s.
*   Recommended Velocity Range ($v$): 1.5 - 2.5 m/s.

**Calculations:**

**Option 1: Target velocity = 1.5 m/s**
Required Area ($A$) = $Q/v$ = 0.0139 m³/s / 1.5 m/s = 0.00927 m²
Required Inside Diameter ($D_i$) = $\sqrt{\frac{4A}{\pi}}$ = $\sqrt{\frac{4 \times 0.00927}{\pi}}$ = $\sqrt{0.0118} \approx 0.109$ m or 109 mm.

**Option 2: Target velocity = 2.5 m/s**
Required Area ($A$) = $Q/v$ = 0.0139 m³/s / 2.5 m/s = 0.00556 m²
Required Inside Diameter ($D_i$) = $\sqrt{\frac{4A}{\pi}}$ = $\sqrt{\frac{4 \times 0.00556}{\pi}}$ = $\sqrt{0.00708} \approx 0.084$ m or 84 mm.

**Selecting Pipe:**
The required inside diameter is between 84 mm and 109 mm.
We need to look at standard pipe sizes (DN or NPS). Common sizes around this range are:
*   DN 80 (3-inch NPS) - OD ≈ 88.9 mm, various wall thicknesses.
*   DN 100 (4-inch NPS) - OD ≈ 114.3 mm, various wall thicknesses.

Let's check DN 80 (3-inch NPS):
If we select a 3-inch NPS pipe, its actual inside diameter will depend on the schedule. For example, Sch 40 has an ID of 3.068 inches (≈ 77.9 mm). This is less than the required 84 mm at 2.5 m/s, so 3-inch Sch 40 is likely too small.
If we select a 3-inch NPS pipe with a thicker wall, say Sch 80, its ID is 2.900 inches (≈ 73.7 mm), even smaller.

Let's check DN 100 (4-inch NPS):
For 4-inch NPS, Sch 40 has an ID of 4.026 inches (≈ 102.3 mm).
At this ID, the velocity would be:
$v = Q/A = 0.0139 \text{ m³/s} / (\pi (0.1023 \text{ m}/2)^2) \approx 0.0139 / 0.00821 \approx 1.69 \text{ m/s}$.
This velocity (1.69 m/s) falls within the recommended range of 1.5-2.5 m/s.

**Conclusion:**
A 4-inch Schedule 40 pipe would be a suitable choice for this application based on flow rate and velocity considerations. The actual wall thickness would then be calculated based on pressure and temperature.

## 5. Connection to Course Outcomes

*   **CO1: Explain the design considerations of various shell type pressure vessels (Knowledge Level: K2)**
    *   While this module focuses on pipes, the understanding of internal pressure as a primary design driver for thickness and stress is directly transferable to pressure vessels. Pressure calculations and the role of material properties are foundational.
*   **CO2: Explain the design considerations of thick cylinders under various kind of loadings (Knowledge Level: K2)**
    *   The basic thickness calculation for pipes under internal pressure is a direct application of thin-walled cylinder theory. While pipes are often considered thin-walled, the underlying principles of hoop and longitudinal stresses are relevant to thick cylinders, which experience more complex stress distributions.
*   **CO3: Apply design concepts in the design of shell and supports of vertical and horizontal pressure vessels and solve problems involving the thickness and stiffener support requirements of cylinders under buckling loads (Knowledge Level: K3)**
    *   This module provides the foundation for thickness calculation based on pressure. The concept of allowable stress and the influence of temperature are directly applicable to pressure vessel shell design. Understanding how loads (pressure, weight) induce stresses is critical.
*   **CO4: Solve problems involving pipe stress and flexibility analysis and also understand the fracture based design concepts of pressure vessels (Knowledge Level: K3)**
    *   This module heavily focuses on pipe stress analysis, including thermal expansion and the importance of flexibility. This directly addresses the "pipe stress and flexibility analysis" part of CO4. The concept of allowable stress and material properties is also a precursor to understanding fracture mechanics in pressure vessels, as material toughness and allowable stress levels are key inputs in fracture analysis.

## 6. Important Points to Remember

*   **ASME B31.3 is the governing code for Process Piping.**
*   **Pressure, Temperature, and Material Properties are key inputs for thickness calculation.**
*   **Corrosion Allowance is crucial for long-term integrity.**
*   **Pipe Sizing is dictated by flow rate and desired fluid velocity.**
*   **Thermal expansion is a major consideration in piping design and requires flexibility analysis.**
*   **A comprehensive stress analysis considers pressure, weight, thermal, and occasional loads.**
*   **Always refer to the latest edition of ASME B31.3 for accurate allowable stresses, coefficients, and design rules.**
*   **Software tools are essential for complex piping stress analysis.**

## 7. Practice Questions

**Question 1:**
A seamless pipe is designed to carry steam at a pressure of 500 psi and a temperature of 500°F. The pipe material is stainless steel with an allowable stress ($S$) of 20,000 psi at this temperature. The pipe has an outside diameter ($D$) of 6.625 inches. Assume a $Y$ coefficient of 0.7 for this material at this temperature and no corrosion allowance ($C_a = 0$).
Calculate the minimum required wall thickness ($t_m$) for this pipe.

**Question 2:**
A process requires a flow rate of 100 GPM (Gallons Per Minute) of a viscous liquid. The recommended velocity range is 3 to 5 ft/s.
a) Calculate the required inside diameter for a velocity of 3 ft/s.
b) Calculate the required inside diameter for a velocity of 5 ft/s.
c) Suggest a standard pipe size (NPS) that would be suitable for this application, considering you'd want to be within the recommended velocity range.

**Question 3:**
What is the primary difference in design considerations between sustained loads and expansion loads in piping systems, and how does ASME B31.3 account for this difference in allowable stresses?

---

## Answers to Practice Questions

**Answer 1:**
*   $P = 500$ psi
*   $D = 6.625$ inches
*   $S = 20,000$ psi
*   $E = 1.0$ (seamless pipe)
*   $Y = 0.7$
*   $C_a = 0$

Using the formula $t_m = \frac{PD}{2(SE + PY)} + C_a$:
$t_m = \frac{(500 \text{ psi}) \times (6.625 \text{ inches})}{2 \times (20000 \text{ psi} \times 1.0 + 500 \text{ psi} \times 0.7)} + 0 \text{ inches}$
$t_m = \frac{3312.5}{2 \times (20000 + 350)}$
$t_m = \frac{3312.5}{2 \times 20350}$
$t_m = \frac{3312.5}{40700}$
$t_m \approx 0.0814$ inches

So, the minimum required wall thickness is approximately 0.0814 inches.

**Answer 2:**
First, convert GPM to ft³/s:
1 GPM = 0.00044708 ft³/s
$Q = 100 \text{ GPM} = 100 \times 0.00044708 \text{ ft³/s} = 0.044708 \text{ ft³/s}$

a) For $v = 3$ ft/s:
Required Area ($A$) = $Q/v = 0.044708 \text{ ft³/s} / 3 \text{ ft/s} \approx 0.014903 \text{ ft²}$
Required Inside Diameter ($D_i$) = $\sqrt{\frac{4A}{\pi}} = \sqrt{\frac{4 \times 0.014903}{\pi}} \approx \sqrt{0.01900} \approx 0.1378$ ft
Convert to inches: $0.1378 \text{ ft} \times 12 \text{ in/ft} \approx 1.65$ inches.

b) For $v = 5$ ft/s:
Required Area ($A$) = $Q/v = 0.044708 \text{ ft³/s} / 5 \text{ ft/s} \approx 0.0089416 \text{ ft²}$
Required Inside Diameter ($D_i$) = $\sqrt{\frac{4A}{\pi}} = \sqrt{\frac{4 \times 0.0089416}{\pi}} \approx \sqrt{0.01139} \approx 0.1067$ ft
Convert to inches: $0.1067 \text{ ft} \times 12 \text{ in/ft} \approx 1.28$ inches.

c) The required inside diameter is between 1.28 inches and 1.65 inches.
Standard pipe sizes (NPS) and their typical inside diameters:
*   1-inch NPS: ID ≈ 1.049 inches (too small)
*   1.25-inch NPS: ID ≈ 1.380 inches
*   1.5-inch NPS: ID ≈ 1.610 inches

A 1.5-inch NPS pipe would be a suitable choice. With an ID of 1.610 inches, the velocity would be:
$v = Q/A = 0.044708 \text{ ft³/s} / (\pi (1.610 \text{ in}/2 / 12 \text{ in/ft})^2) \approx 0.044708 / 0.01783 \approx 2.51 \text{ ft/s}$.
This velocity is within the recommended range.

**Answer 3:**
*   **Sustained Loads:** These are loads that are continuously present during normal operation, primarily internal pressure and the weight of the pipe, fluid, and insulation. They are expected to be present for the majority of the piping system's life. ASME B31.3 limits the sum of stresses from sustained loads to the **allowable stress ($S$)** of the material at the operating temperature, to prevent yielding and creep.
*   **Expansion Loads:** These loads arise from thermal expansion and contraction when the pipe temperature changes. They cause cyclic stress ranges over the operational life. ASME B31.3 allows for a higher **expansion stress range** than the sustained stress limit. This is because materials can withstand more stress for short durations or in cyclic loading, provided the total stress range over a cycle does not exceed a calculated limit (often $S_h + f(A_e - S_A)$). This flexibility is crucial to prevent fatigue failure and to limit forces on connected equipment. The code incorporates stress intensification factors (SIFs) to accurately account for stress concentrations at fittings under these cyclic loads.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
