---
title: "Variable Head Permeability"
subject: "GEOTECHNICAL ENGINEERING LAB"
module: "Module 12: Permeability Test"
branch: "Civil Engineering"
semester: 5
topicId: "689f15cd56b5e963ba811013"
status: "completed"
scrapedAt: "2026-05-20T18:48:59.525Z"
---
# Geotechnical Engineering Lab: Module 12 - Permeability Test
## Topic: Variable Head Permeability Test

---

### 1. Introduction to Permeability

*   **Definition:** Permeability is a measure of a soil's ability to transmit water. It is a crucial property for understanding groundwater flow, seepage, consolidation, and the design of various geotechnical structures like dams, foundations, and drainage systems.
*   **Importance:**
    *   Estimating seepage rates through dams and embankments.
    *   Determining the rate of settlement in foundations.
    *   Designing drainage systems and filters.
    *   Assessing the efficiency of dewatering operations.
    *   Evaluating the potential for soil liquefaction.
*   **Governing Law:** Darcy's Law, which states that the flow rate (Q) through a porous medium is directly proportional to the hydraulic gradient (i) and the cross-sectional area (A) of flow, and inversely proportional to the length of the flow path (L).

    $Q = k \times A \times i$

    Where:
    *   $Q$ = Discharge per unit time (e.g., $m^3/s$, $cm^3/s$)
    *   $k$ = Coefficient of Permeability (e.g., $m/s$, $cm/s$) - the property we aim to determine.
    *   $A$ = Cross-sectional area of flow (e.g., $m^2$, $cm^2$)
    *   $i$ = Hydraulic Gradient ($h/L$) - the change in head divided by the length of the flow path.

### 2. Coefficient of Permeability (k)

*   **Definition:** The coefficient of permeability (k) is the discharge velocity (Q/A) under a unit hydraulic gradient (i=1). It is a fundamental property that depends on the soil's properties (grain size distribution, void ratio, shape of particles) and the properties of the fluid (viscosity, density, temperature).
*   **Units:** Typically expressed in $cm/s$ or $m/s$.
*   **Factors Affecting k:**
    *   **Grain Size and Distribution:** Larger and more uniformly graded particles generally lead to higher permeability.
    *   **Void Ratio (e):** Higher void ratios result in larger pore spaces and thus higher permeability.
    *   **Particle Shape:** Rounded particles allow for easier flow compared to angular particles.
    *   **Degree of Saturation:** For saturated soils, permeability is constant. Unsaturated soils have lower permeability due to air filling some pores.
    *   **Temperature of Water:** Viscosity of water decreases with increasing temperature, leading to higher permeability.
    *   **Presence of Fissures or Cracks:** These can significantly increase the bulk permeability of a soil mass.

### 3. Types of Permeability Tests

*   **Constant Head Permeability Test:** Suitable for coarse-grained soils (sands, gravels) where permeability is relatively high. The hydraulic head across the sample remains constant during the test.
*   **Variable Head Permeability Test (Falling Head Permeability Test):** Suitable for fine-grained soils (silts, clays) where permeability is low. The hydraulic head across the sample decreases over time as water drains out. This is the focus of our current topic.

### 4. Variable Head Permeability Test: Principles

*   **Objective:** To determine the coefficient of permeability ($k$) for fine-grained soils.
*   **Setup:** A soil sample is placed in a cylindrical permeameter. A standpipe (burette or graduated tube) is connected to the top of the sample, and the bottom of the sample is connected to a drain. The standpipe is filled with water to a certain height ($h_1$). As water flows through the soil sample and out, the water level in the standpipe decreases, causing the head to fall.
*   **Underlying Theory (Derivation):**
    *   Consider a small time interval $dt$. During this time, the head falls from $h$ to $h - dh$ (note that $dh$ will be negative since the head is falling). The change in volume of water in the standpipe is $dV_{standpipe} = a \times (-dh)$, where 'a' is the cross-sectional area of the standpipe.
    *   The volume of water flowing through the soil sample during this time is $dV_{soil} = Q \times dt$.
    *   According to Darcy's Law, $Q = k \times i \times A$, where:
        *   $k$ = Coefficient of Permeability
        *   $i$ = Hydraulic gradient across the soil sample = $(h/L)$ (assuming the water level in the standpipe is the head, and L is the length of the soil sample)
        *   $A$ = Cross-sectional area of the soil sample.
    *   Therefore, $Q = k \times (h/L) \times A$.
    *   The volume of water flowing through the soil is equal to the volume of water lost from the standpipe: $dV_{soil} = dV_{standpipe}$.
    *   $Q \times dt = -a \times dh$.
    *   Substituting Q: $(k \times (h/L) \times A) \times dt = -a \times dh$.
    *   Rearranging to separate variables: $(k \times A / (a \times L)) dt = -(dh/h)$.
    *   Integrate both sides from time $t_1$ to $t_2$, and corresponding heads from $h_1$ to $h_2$:
        $\int_{t_1}^{t_2} (k \times A / (a \times L)) dt = -\int_{h_1}^{h_2} (dh/h)$
    *   $(k \times A / (a \times L)) [t]_{t_1}^{t_2} = -[\ln h]_{h_1}^{h_2}$
    *   $(k \times A / (a \times L)) (t_2 - t_1) = -(\ln h_2 - \ln h_1)$
    *   $(k \times A / (a \times L)) (t_2 - t_1) = \ln(h_1/h_2)$
    *   Rearranging to solve for k:

        $k = \frac{2.303 \times a \times L}{A \times (t_2 - t_1)} \times \log_{10} \left(\frac{h_1}{h_2}\right)$

        *   **Note:** Some texts use natural logarithm 'ln'. If using natural logarithm:
            $k = \frac{a \times L}{A \times (t_2 - t_1)} \times \ln \left(\frac{h_1}{h_2}\right)$
            The factor 2.303 converts base-10 log to natural log.

### 5. Equipment and Procedure

*   **Equipment:**
    *   **Permeameter:** Cylindrical mold to hold the soil sample. It typically has porous stones at the top and bottom to allow water passage while retaining the soil.
    *   **Standpipe (Burette/Graduated Tube):** A transparent tube of known cross-sectional area 'a', used to observe the falling water level.
    *   **Stopwatch:** To measure the time taken for the water level to drop.
    *   **Measuring Cylinder/Beaker:** To collect water.
    *   **Vernier Calipers/Ruler:** To measure the dimensions of the soil sample (length 'L', diameter 'D').
    *   **Balance:** To measure the mass of soil.
    *   **Oven:** For moisture content determination.
    *   **Water:** Clean water.
    *   **Tapping Hammer:** For compacting the soil sample.

*   **Procedure:**
    1.  **Sample Preparation:**
        *   Determine the dry unit weight and void ratio of the soil for which the test is to be performed. This is usually done by preparing a compacted soil sample within the permeameter at a specified density.
        *   Measure the internal diameter of the permeameter to calculate the cross-sectional area (A) of the soil sample ($A = \pi D^2 / 4$).
        *   Fill the permeameter mold with soil at the desired density and water content. Compact the soil carefully to achieve uniformity.
        *   Measure the length (L) of the compacted soil sample.
        *   Place a porous stone at the bottom of the mold, then the soil sample, and another porous stone on top. Ensure a good fit to prevent leakage.
        *   Assemble the permeameter.

    2.  **Test Setup:**
        *   Connect the standpipe (burette) to the permeameter. Ensure it has a uniform internal cross-sectional area 'a'.
        *   Fill the standpipe with de-aired water to a high initial head ($h_1$).
        *   Open the inlet valve to the permeameter and allow water to saturate the soil sample from the bottom up. This prevents trapped air.
        *   Once the soil is saturated, adjust the water level in the standpipe to a suitable starting head ($h_1$).

    3.  **Performing the Test:**
        *   Start the stopwatch ($t_1 = 0$) as soon as the water level in the standpipe reaches the initial head ($h_1$).
        *   Observe the water level in the standpipe.
        *   Stop the stopwatch ($t_2$) when the water level falls to a second, lower head ($h_2$). Record the time and the final head.
        *   Repeat the test by refilling the standpipe to the initial head ($h_1$) and measuring the time to fall to the same final head ($h_2$). This helps ensure reliability and average the results.
        *   Perform at least three such observations.

    4.  **Post-Test:**
        *   Measure the temperature of the water.
        *   Remove the soil sample and determine its moisture content and dry unit weight if not already known.

*   **Important Considerations During Setup and Execution:**
    *   **Saturation:** Ensure the soil sample is fully saturated to avoid air entrapment, which can significantly affect permeability.
    *   **Uniformity of Sample:** Compact the soil uniformly within the mold.
    *   **Water Temperature:** Keep the water temperature constant as it affects viscosity. Record the temperature for potential correction.
    *   **Standpipe Area:** The cross-sectional area 'a' of the standpipe should be small enough to allow for a measurable drop in head over a reasonable time.
    *   **Head Drop:** The head drop ($h_1 - h_2$) should be significant enough to be measured accurately but not so large that it causes a substantial change in the hydraulic gradient during the observation interval. A common practice is to observe the head drop from $h_1$ to $h_2$, where $h_2$ is approximately half of $h_1$.

### 6. Calculations

*   **Formula:**
    $k = \frac{2.303 \times a \times L}{A \times \Delta t} \times \log_{10} \left(\frac{h_1}{h_2}\right)$
    Where:
    *   $k$ = Coefficient of Permeability ($cm/s$)
    *   $a$ = Cross-sectional area of standpipe ($cm^2$)
    *   $L$ = Length of soil sample ($cm$)
    *   $A$ = Cross-sectional area of soil sample ($cm^2$)
    *   $\Delta t = t_2 - t_1$ = Time taken for the head to fall from $h_1$ to $h_2$ ($s$)
    *   $h_1$ = Initial head ($cm$)
    *   $h_2$ = Final head ($cm$)

*   **Temperature Correction:**
    The coefficient of permeability ($k$) is temperature-dependent due to the change in the viscosity of water. The determined value is usually corrected to a standard temperature, typically 20°C.
    $k_{20} = k_T \times \frac{\mu_T}{\mu_{20}}$
    Where:
    *   $k_{20}$ = Coefficient of Permeability at 20°C
    *   $k_T$ = Coefficient of Permeability at test temperature ($T$)
    *   $\mu_T$ = Viscosity of water at test temperature ($T$)
    *   $\mu_{20}$ = Viscosity of water at 20°C

    *Typical Viscosity Values (in centipoise, cp):*
    *   15°C: 1.15 cp
    *   20°C: 1.00 cp
    *   25°C: 0.89 cp

    **Example Correction:** If the test was conducted at 25°C and the calculated k is $5 \times 10^{-6} cm/s$, then:
    $k_{20} = (5 \times 10^{-6} cm/s) \times \frac{0.89 cp}{1.00 cp} = 4.45 \times 10^{-6} cm/s$.

### 7. Learning Outcomes Coverage

*   **Understanding the principle of permeability and Darcy's Law:** Covered in sections 1 and 3.
*   **Familiarity with the Variable Head Permeability Test apparatus:** Covered in section 5 (Equipment).
*   **Knowledge of the laboratory procedure for conducting the Variable Head Permeability Test:** Covered in section 5 (Procedure).
*   **Ability to calculate the coefficient of permeability from test data:** Covered in section 6 (Calculations).
*   **Understanding the factors affecting permeability and the need for temperature correction:** Covered in sections 2 and 6.

### 8. Practice Questions and Exercises

**Question 1:**
A variable head permeability test was conducted on a soil sample. The dimensions of the soil sample were:
*   Length ($L$) = 10 cm
*   Diameter = 5 cm
The standpipe had a diameter of 1 cm.
The initial head ($h_1$) was 60 cm and the final head ($h_2$) was 30 cm. The time taken for this head drop ($\Delta t$) was 45 seconds.
Calculate the coefficient of permeability ($k$) of the soil sample.

**Solution 1:**
*   Calculate the cross-sectional area of the soil sample ($A$):
    $A = \pi \times (D/2)^2 = \pi \times (5/2)^2 = \pi \times (2.5)^2 = 19.635 \, cm^2$
*   Calculate the cross-sectional area of the standpipe ($a$):
    $a = \pi \times (d/2)^2 = \pi \times (1/2)^2 = \pi \times (0.5)^2 = 0.785 \, cm^2$
*   Given values:
    $L = 10 \, cm$
    $h_1 = 60 \, cm$
    $h_2 = 30 \, cm$
    $\Delta t = 45 \, s$

*   Apply the formula:
    $k = \frac{2.303 \times a \times L}{A \times \Delta t} \times \log_{10} \left(\frac{h_1}{h_2}\right)$
    $k = \frac{2.303 \times 0.785 \, cm^2 \times 10 \, cm}{19.635 \, cm^2 \times 45 \, s} \times \log_{10} \left(\frac{60 \, cm}{30 \, cm}\right)$
    $k = \frac{18.107}{883.575} \times \log_{10} (2)$
    $k = 0.02049 \times 0.30103$
    $k = 0.00617 \, cm/s$

**Question 2:**
A soil sample has a coefficient of permeability of $2.5 \times 10^{-5} \, cm/s$ when tested at a water temperature of 15°C. Calculate the coefficient of permeability at 20°C using the provided viscosity values.

**Solution 2:**
*   Given: $k_T = 2.5 \times 10^{-5} \, cm/s$ at $T = 15^\circ C$.
*   Viscosity at 15°C ($\mu_{15}$) = 1.15 cp
*   Viscosity at 20°C ($\mu_{20}$) = 1.00 cp

*   Apply the temperature correction formula:
    $k_{20} = k_{15} \times \frac{\mu_{15}}{\mu_{20}}$
    $k_{20} = (2.5 \times 10^{-5} \, cm/s) \times \frac{1.15 \, cp}{1.00 \, cp}$
    $k_{20} = 2.5 \times 1.15 \times 10^{-5} \, cm/s$
    $k_{20} = 2.875 \times 10^{-5} \, cm/s$

**Question 3:**
Why is the Variable Head Permeability Test preferred over the Constant Head Test for fine-grained soils? Explain with reference to the typical range of permeability values for different soil types.

**Solution 3:**
The Variable Head Permeability Test is preferred for fine-grained soils (silts and clays) because these soils have a low coefficient of permeability ($k$ typically in the range of $10^{-5}$ to $10^{-8} cm/s$). In such soils, the flow rate is very slow.

*   **Constant Head Test Limitation:** If a constant head test were used for fine-grained soils, a very small hydraulic gradient would be required to achieve a measurable flow rate. This would lead to extremely slow drainage and potentially impractical test durations. The small flow rates would also be difficult to measure accurately with standard laboratory equipment.
*   **Variable Head Test Advantage:** The variable head test utilizes a falling head in a standpipe. This means the hydraulic gradient starts at its maximum value and decreases as the head falls. For a given standpipe, this allows for a larger head drop and thus a more easily measurable time for the test to complete, even with low flow rates. The formula for the variable head test is derived to account for this changing gradient.

In contrast, coarse-grained soils (sands and gravels) have higher permeability ($k$ typically in the range of $10^{-1}$ to $10^{-3} cm/s$) and allow for much faster flow. For these soils, the constant head test is more appropriate because the head can be maintained constant without excessive difficulty, and the flow rate is readily measurable.

### 9. Important Points to Remember

*   **Test Applicability:** Variable head test is for fine-grained soils (low permeability). Constant head test is for coarse-grained soils (high permeability).
*   **Darcy's Law:** The foundation of permeability testing.
*   **Temperature Correction:** Always correct $k$ to a standard temperature (usually 20°C) for comparison.
*   **Saturation is Crucial:** Air entrapment significantly reduces permeability. Saturate the sample from the bottom up.
*   **Standpipe Area ('a'):** Should be small enough to give a measurable head drop over a reasonable time.
*   **Head Drop ('h1' to 'h2'):** Should be significant enough for accurate timing, but the change in gradient during the observation period should be minimized by choosing appropriate $h_1$ and $h_2$. A drop of 50% of the initial head is often recommended.
*   **Uniformity:** The soil sample should be homogeneous and compacted uniformly to ensure consistent flow.

---
