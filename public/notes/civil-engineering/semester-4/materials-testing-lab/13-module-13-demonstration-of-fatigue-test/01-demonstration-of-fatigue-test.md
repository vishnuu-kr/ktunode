---
title: "Demonstration of Fatigue Test"
subject: "MATERIALS TESTING LAB"
module: "Module 13: Demonstration of Fatigue Test"
branch: "Civil Engineering"
semester: 4
topicId: "689f15cc56b5e963ba810d19"
status: "completed"
scrapedAt: "2026-05-20T18:45:48.199Z"
---
# MATERIALS TESTING LAB - Module 13: Demonstration of Fatigue Test

---

## 1. Introduction to Fatigue Testing

Fatigue is a phenomenon in materials science where materials fail under cyclic or repeated loading, even when the applied stress is well below the material's ultimate tensile strength or yield strength. Fatigue failure is catastrophic and often occurs without warning.

**Key Concepts:**

*   **Fatigue:** The weakening of a material caused by repeatedly applied loads.
*   **Cyclic Loading:** A type of loading where the stress or strain applied to a material varies over time in a repetitive pattern.
*   **Stress Amplitude ($\sigma_a$):** Half the range of the applied stress.  $\sigma_a = (\sigma_{max} - \sigma_{min}) / 2$.
*   **Mean Stress ($\sigma_m$):** The average of the maximum and minimum applied stress. $\sigma_m = (\sigma_{max} + \sigma_{min}) / 2$.
*   **Stress Range ($\Delta\sigma$):** The difference between the maximum and minimum applied stress. $\Delta\sigma = \sigma_{max} - \sigma_{min}$.
*   **Stress Ratio (R):** The ratio of the minimum stress to the maximum stress. $R = \sigma_{min} / \sigma_{max}$. Common R values include:
    *   $R = 0$: Completely reversed stress (tension to compression).
    *   $R = -1$: Alternating stress (tension to compression, equal magnitudes).
    *   $R = 0.1$: Fluctuating stress (zero to maximum tensile).
*   **Endurance Limit (or Fatigue Limit):** The stress level below which a material can withstand an infinite number of load cycles without failure. This is characteristic of some materials like steel.
*   **Fatigue Strength:** The stress level at which a material will fail after a specific number of cycles.
*   **Fatigue Life ($N_f$):** The number of cycles to failure for a given stress level.
*   **S-N Curve (Stress-Life Curve):** A plot of stress amplitude ($\sigma_a$) versus the logarithm of the number of cycles to failure ($\log N_f$). This is a fundamental tool for understanding fatigue behavior.
*   **Fracture Mechanics:** A field that studies the behavior of materials containing cracks or flaws. Fatigue crack growth is often analyzed using fracture mechanics principles.

---

## 2. Mechanisms of Fatigue Failure

Fatigue failure typically involves three distinct stages:

1.  **Crack Initiation:**
    *   Caused by microscopic stress concentrations at surface imperfections, inclusions, or grain boundaries.
    *   Repetitive slip within grains leads to the formation of persistent slip bands (PSBs).
    *   These PSBs can eventually develop into small cracks.
2.  **Crack Propagation:**
    *   The initiated crack grows with each applied stress cycle.
    *   This stage is characterized by crack tip plastic deformation and the formation of "beach marks" or "striations" on the fracture surface, which indicate the extent of crack growth per cycle.
    *   The rate of crack growth is often governed by fracture mechanics parameters like the stress intensity factor range ($\Delta K$).
3.  **Final Fracture:**
    *   When the crack reaches a critical size, the remaining cross-sectional area cannot support the applied load.
    *   A sudden, brittle fracture occurs, often similar to a tensile fracture.

**Visualizing Fatigue Fracture Surfaces:**

*   **Smooth area:** Represents the slow crack propagation phase, often showing beach marks.
*   **Rough/granular area:** Represents the final, rapid fracture.
*   **"Eyebrows" or "ears":** Indicate the direction of crack growth.

---

## 3. Types of Fatigue Tests

Fatigue tests are designed to simulate cyclic loading conditions and determine a material's fatigue life.

**Common Fatigue Testing Machines:**

*   **Rotating Beam Fatigue Tester:** A specimen with a circular cross-section is subjected to bending. As the specimen rotates, the stress at the top surface alternates from maximum tensile to maximum compressive.
*   **Axial Fatigue Tester:** The specimen is subjected to direct tension-compression or tension-tension cyclic loading along its longitudinal axis.
*   **Torsion Fatigue Tester:** The specimen is subjected to cyclic torsional (twisting) loads.
*   **Vibration Fatigue Tester:** Used for components subjected to vibrational loads, often simulating operating conditions.

**Typical Specimen Geometry:**

*   Often hourglass-shaped or with a reduced gauge section to ensure failure occurs in a controlled area.
*   Surface finish is critical as surface imperfections can initiate fatigue cracks. Polished specimens generally exhibit longer fatigue lives.

---

## 4. Demonstration of a Fatigue Test (Practical Aspects)

During a demonstration, the following aspects are typically observed and explained:

**Objective of the Demonstration:**

*   To illustrate the process of fatigue testing.
*   To show how a material fails under cyclic loading.
*   To understand the influence of stress level on fatigue life.

**Procedure (General):**

1.  **Specimen Preparation:** Select an appropriate fatigue specimen. Ensure it's clean and free from significant defects.
2.  **Machine Setup:**
    *   Mount the specimen securely in the fatigue testing machine.
    *   Input the desired cyclic loading parameters:
        *   **Load Amplitude/Stress Amplitude:** The magnitude of the cyclic load.
        *   **Mean Load/Stress:** The average load during the cycle.
        *   **Frequency (Hz):** The rate at which the cycles are applied. Higher frequencies can lead to heating effects.
        *   **Stress Ratio (R).**
3.  **Test Initiation:** Start the fatigue testing machine.
4.  **Monitoring:**
    *   Observe the cyclic loading and ensure it's stable.
    *   Monitor for any unusual noises or vibrations.
    *   Some machines may have built-in strain gauges to monitor deformation.
    *   The machine typically stops automatically when the specimen fractures.
5.  **Data Acquisition:** Record the applied stress level and the number of cycles to failure ($N_f$).
6.  **Post-Test Analysis:**
    *   Examine the fracture surface of the failed specimen to identify fatigue features (beach marks, final fracture zone).
    *   Measure the original cross-sectional area to confirm stress calculations.

**Key Observations During Demonstration:**

*   **Gradual Loading:** The machine applies a repetitive load.
*   **No Visible Deformation (initially):** For many tests, especially below the yield strength, macroscopic deformation might not be apparent until just before failure.
*   **Sudden Fracture:** The specimen will eventually break suddenly.
*   **Fracture Surface Appearance:** The contrast between the smooth fatigue zone and the rough final fracture zone.

---

## 5. Factors Affecting Fatigue Life

Several factors can significantly influence a material's resistance to fatigue:

*   **Stress Level:** Higher stress levels lead to shorter fatigue lives. This is the primary variable in an S-N curve.
*   **Stress Concentration Factors:** Geometric discontinuities (holes, notches, fillets) can significantly reduce fatigue life by creating localized high stresses.
    *   **Notch Sensitivity:** The degree to which a material is affected by stress concentrations.
*   **Surface Finish:** Rough surfaces or surface defects (scratches, pits) act as crack initiation sites, reducing fatigue life. Polishing can improve fatigue performance.
*   **Mean Stress:** A tensile mean stress generally reduces fatigue life, while a compressive mean stress can improve it.
*   **Material Properties:**
    *   **Strength:** Higher strength materials generally have higher fatigue strengths.
    *   **Ductility:** More ductile materials can deform plastically at crack tips, which can sometimes arrest crack growth, but excessive ductility can lead to lower endurance limits in some cases.
    *   **Microstructure:** Heat treatments, grain size, and the presence of inclusions all affect fatigue resistance.
*   **Environment:**
    *   **Corrosion:** Corrosive environments can lead to **corrosion fatigue**, where the combined effects of corrosion and cyclic loading drastically reduce fatigue life.
    *   **Temperature:** High temperatures can lead to creep-fatigue interactions. Low temperatures can make materials more brittle.
*   **Loading Frequency:** While frequency itself might not be the primary driver, it can influence fatigue life through:
    *   **Heating:** Higher frequencies can cause self-heating of the specimen due to internal friction, which can affect material properties and potentially accelerate crack growth.
    *   **Environmental Effects:** At very low frequencies, more time is available for environmental degradation (e.g., oxidation at crack tips).

---

## 6. Fatigue Testing Applications

Fatigue testing is crucial in many engineering fields to ensure the safety and reliability of components that experience repeated loading during their service life.

*   **Aerospace:** Aircraft wings, fuselage components, engine parts are subjected to significant cyclic loading from turbulence, engine vibrations, and pressurization cycles.
*   **Automotive:** Axles, crankshafts, suspension components, and wheels experience constant stress cycles from driving.
*   **Civil Engineering:** Bridges, buildings, and pipelines can be subjected to vibrations from traffic, wind, and seismic activity.
*   **Mechanical Engineering:** Rotating shafts, gears, springs, and machine tools are all prone to fatigue.
*   **Biomedical Engineering:** Implants like hip and knee replacements are subjected to millions of load cycles from walking.

---

## 7. Learning Outcomes Coverage

This document covers the following learning outcomes for Module 13: Demonstration of Fatigue Test:

*   **Understanding the fundamental concept of fatigue:** Covered in Section 1 and 2.
*   **Identifying the stages of fatigue failure:** Covered in Section 2.
*   **Recognizing common types of fatigue tests and machines:** Covered in Section 3.
*   **Explaining the typical procedure and observations during a fatigue test demonstration:** Covered in Section 4.
*   **Discussing factors that influence fatigue life:** Covered in Section 5.
*   **Appreciating the importance of fatigue testing in engineering applications:** Covered in Section 6.

---

## 8. Practice Questions and Answers

**Question 1:** Define fatigue and explain why it is a critical failure mechanism in engineering design.
**Answer:** Fatigue is the weakening of a material caused by repeatedly applied loads. It is critical because failure can occur at stress levels significantly below the material's static strength, often without obvious warning, leading to catastrophic structural collapse.

**Question 2:** List the three stages of fatigue failure and briefly describe each.
**Answer:**
1.  **Crack Initiation:** Formation of microscopic cracks at stress concentration sites.
2.  **Crack Propagation:** Gradual growth of the crack with each load cycle.
3.  **Final Fracture:** Rapid failure when the crack reaches a critical size.

**Question 3:** What is an S-N curve, and what information does it provide?
**Answer:** An S-N curve (Stress-Life curve) plots the stress amplitude ($\sigma_a$) against the logarithm of the number of cycles to failure ($\log N_f$). It provides a graphical representation of a material's fatigue strength at different life expectancies and can indicate an endurance limit.

**Question 4:** How does a surface defect, like a scratch, affect the fatigue life of a component?
**Answer:** A surface defect acts as a stress concentrator and a potential crack initiation site. This means that fatigue cracks will tend to start at the defect, reducing the number of cycles the material can withstand before failure compared to a smooth surface.

**Question 5:** You are conducting a fatigue test on a steel specimen at a constant stress amplitude. If you increase the frequency of the applied load, how might this affect the measured fatigue life, and why?
**Answer:** Increasing the frequency *might* slightly decrease the fatigue life. At higher frequencies, self-heating due to internal friction can occur. This elevated temperature can reduce the material's yield strength and stiffness, potentially accelerating crack growth. Additionally, at very low frequencies, environmental factors might have more time to affect the crack tip. However, for many common metals and typical frequencies in a lab setting, the frequency effect might be secondary compared to the stress amplitude.

**Question 6:** Give two examples of components in everyday life that are susceptible to fatigue failure.
**Answer:**
1.  An airplane's wing (subjected to bending and lift variations).
2.  A car's axle or driveshaft (subjected to torsional and bending stresses from driving).

---

## 9. Important Points to Remember

*   **Fatigue is a crack growth phenomenon.** Most of a fatigue life is spent in crack propagation.
*   **Surface quality is paramount.** Smooth surfaces significantly improve fatigue life.
*   **Stress concentrations must be avoided or managed.** Notches and holes dramatically reduce fatigue life.
*   **Cyclic loading is the cause.** Even small stresses, applied repeatedly, can cause failure.
*   **Fracture surfaces provide clues.** Beach marks and striations are tell-tale signs of fatigue.
*   **S-N curves are essential for design.** They help engineers select materials and determine safe operating stress levels for components with expected service lives.
*   **Corrosion fatigue is much more severe** than either corrosion or fatigue alone.
*   **Mean stress significantly impacts fatigue life.** Tensile mean stress is generally detrimental.

---
