---
title: "Endurance diagrams"
subject: "FAILURE ANALYSIS AND DESIGN"
module: "Module 2: Fatigue loading"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1751d0cf4804463ddc"
status: "completed"
scrapedAt: "2026-05-20T18:12:32.209Z"
---
# FAILURE ANALYSIS AND DESIGN

## Module 2: Fatigue Loading

### Topic: Endurance Diagrams

---

### 1. Introduction to Endurance Diagrams

**Purpose:** Endurance diagrams (also known as S-N diagrams or Wöhler curves) are graphical representations that illustrate the relationship between the applied stress (S) and the number of cycles to failure (N) for a material subjected to cyclic loading. They are fundamental tools for understanding and predicting fatigue life.

**Key Concepts:**

*   **Fatigue:** The progressive and localized structural damage that occurs when a material is subjected to cyclic loading. It is a form of cumulative damage.
*   **Stress Amplitude (S):** Typically, the stress amplitude ($\sigma_a$) is plotted on the y-axis. This is half the difference between the maximum and minimum stress in a cycle: $\sigma_a = (\sigma_{max} - \sigma_{min})/2$. In some cases, the maximum stress ($\sigma_{max}$) or the stress range ($\sigma_r = \sigma_{max} - \sigma_{min}$) might be plotted.
*   **Number of Cycles to Failure (N):** Plotted on the x-axis, usually on a logarithmic scale. This represents the number of stress cycles a material can withstand before fracturing.
*   **Endurance Limit (Fatigue Limit):** A stress level below which a material can theoretically withstand an infinite number of load cycles without fatigue failure. This is a characteristic of ferrous materials (like steel) and some titanium alloys.
*   **Fatigue Strength:** The stress level at which a material will fail after a specific number of cycles (e.g., $10^6$ or $10^7$ cycles). For materials without an endurance limit, fatigue strength is quoted for a finite life.
*   **Stress Ratio (R):** Defined as the ratio of the minimum stress to the maximum stress in a cycle: $R = \sigma_{min} / \sigma_{max}$. This significantly influences fatigue life. Common values are $R = -1$ (fully reversed) and $R = 0$ (zero to maximum tension).

**Importance:**

*   **Design Against Fatigue:** Allows engineers to select materials and design components to withstand expected cyclic loads for a desired service life.
*   **Material Characterization:** Provides a fundamental understanding of a material's fatigue resistance.
*   **Failure Analysis:** Helps in understanding why a component failed due to fatigue.

---

### 2. Construction and Interpretation of Endurance Diagrams

**Construction:**

Endurance diagrams are typically generated through a series of fatigue tests.

1.  **Specimen Preparation:** Standardized specimens (e.g., smooth cylindrical or notched specimens) are machined.
2.  **Fatigue Testing:** Multiple specimens are tested under controlled cyclic stress conditions (varying stress amplitudes, but often keeping the stress ratio constant, e.g., $R=-1$ for fully reversed bending).
3.  **Data Recording:** For each test, the applied stress amplitude ($\sigma_a$) and the number of cycles to failure (N) are recorded.
4.  **Plotting:** The recorded data points are plotted on a log-log scale with stress amplitude on the y-axis and cycles to failure on the x-axis.
5.  **Curve Fitting:** A curve is fitted through the data points. For many materials, this can be approximated by a power law relationship: $\sigma_a = aN^b$, where 'a' and 'b' are material constants.

**Interpretation:**

*   **High Stress, Low Life:** At high stress amplitudes, the material fails after a relatively small number of cycles.
*   **Low Stress, High Life:** As the stress amplitude decreases, the number of cycles to failure increases significantly.
*   **Endurance Limit (for some materials):** The curve may become horizontal at a certain stress level, indicating the endurance limit. Below this stress, failure is unlikely.
*   **Influence of Stress Ratio (R):** The position of the S-N curve is sensitive to the stress ratio. Higher R values (more tensile mean stress) generally lead to lower fatigue lives.

**Textbook References:**

*   **Jones (1993) - Chapter 7: Fatigue:** Discusses the fundamentals of fatigue testing and the interpretation of S-N curves.
*   **Collins (2013) - Chapter 4: Fatigue Failure:** Provides detailed insights into the generation and use of S-N diagrams in design.
*   **ASM Handbook, Vol. 11 (2002) - Chapter 1: Fatigue and Fracture:** Covers standard testing procedures and the factors influencing fatigue behavior, including R-ratio effects.

---

### 3. Factors Affecting Fatigue Life and Endurance Diagrams

**Understanding the influence of various factors is crucial for accurate fatigue life prediction.**

**Factors:**

*   **Material Properties:**
    *   **Tensile Strength:** Generally, materials with higher tensile strength have higher fatigue strength.
    *   **Ductility:** Higher ductility can sometimes lead to longer fatigue lives by allowing for some plastic deformation at crack tips, which can arrest crack growth. However, excessive ductility can lead to lower endurance limits in some cases.
    *   **Microstructure:** Grain size, presence of inclusions, and heat treatment significantly affect fatigue strength. Fine-grained structures often exhibit better fatigue resistance.
    *   **Hardness:** Often correlates with fatigue strength. Harder materials generally have higher fatigue strength.
    *   **Presence of Defects:** Surface finish, internal flaws (inclusions, pores, laps) act as stress concentrators and initiation sites for fatigue cracks, drastically reducing fatigue life.

*   **Loading Conditions:**
    *   **Stress Amplitude ($\sigma_a$):** The primary driver of fatigue.
    *   **Stress Ratio (R):** As mentioned, higher R values (more tensile mean stress) reduce fatigue life.
    *   **Mean Stress ($\sigma_m$):** The average stress over a cycle. Tensile mean stresses are detrimental, while compressive mean stresses can be beneficial. Various diagrammatic approaches (e.g., Goodman, Soderberg, Gerber diagrams) are used to account for mean stress effects.
    *   **Frequency:** For many metals at room temperature, fatigue life is not significantly affected by frequency unless heating occurs due to hysteresis. At elevated temperatures or in polymers, frequency can be a critical factor.
    *   **Loading Type:** Bending, axial, torsional, or combined loading stresses have different effects.

*   **Environmental Factors:**
    *   **Temperature:** Elevated temperatures can reduce fatigue strength due to creep-fatigue interaction and oxidation. Very low temperatures can sometimes lead to brittle fracture.
    *   **Corrosion:** Corrosive environments can significantly accelerate fatigue crack initiation and growth (corrosion fatigue), often leading to much shorter lives than in air.

*   **Geometric Factors:**
    *   **Stress Concentration:** Notches, holes, fillets, and surface irregularities create localized regions of high stress, acting as fatigue crack initiation sites. This is accounted for by the fatigue stress concentration factor ($K_f$) or notch sensitivity.
    *   **Surface Finish:** Smooth surfaces generally have better fatigue performance than rough surfaces due to fewer crack initiation sites.

**Textbook References:**

*   **Jones (1993) - Chapter 7: Fatigue:** Details the influence of mean stress, stress concentration, and surface finish.
*   **Collins (2013) - Chapter 4: Fatigue Failure:** Explains the impact of material properties, loading conditions, and environmental factors on fatigue behavior.
*   **ASM Handbook, Vol. 11 (2002) - Chapter 1: Fatigue and Fracture:** Provides extensive data on how various factors influence fatigue life for different materials.

---

### 4. Endurance Diagrams for Different Materials and Loading Conditions

**Diversity in Fatigue Behavior:**

Not all materials exhibit an endurance limit. This is a key distinction when interpreting endurance diagrams.

*   **Ferrous Alloys (e.g., Steels, Cast Irons):** Many steels exhibit a distinct endurance limit, meaning the S-N curve becomes horizontal. Cast irons generally have lower fatigue strengths than steels and may not have a well-defined endurance limit.

*   **Non-Ferrous Alloys (e.g., Aluminum Alloys, Copper Alloys, Titanium Alloys):**
    *   **Aluminum Alloys:** Typically do not have a true endurance limit. Their S-N curves continue to slope downwards even at very high cycles (e.g., $10^8$ or $10^9$ cycles). Fatigue strength is usually specified at a finite life (e.g., $10^8$ cycles).
    *   **Titanium Alloys:** Some titanium alloys exhibit an endurance limit, while others behave more like aluminum alloys.
    *   **Copper Alloys:** Generally do not show a pronounced endurance limit.

*   **Polymers and Composites:** These materials have different fatigue mechanisms and their fatigue behavior is highly dependent on temperature, frequency, and environmental conditions. Their S-N curves are typically more complex and do not exhibit an endurance limit in the same way as metals.

**Effect of Stress Ratio (R) on Endurance Diagrams:**

Endurance diagrams are often presented for a specific stress ratio, most commonly $R=-1$ (fully reversed). However, real-world applications involve various stress ratios.

*   **Stress Ratio Diagrams:** To account for the effect of mean stress, multiple S-N curves for different stress ratios ($R=-1, R=0, R=0.5$, etc.) can be plotted together. Alternatively, mean stress diagrams (like the Goodman diagram) can be used, where stress amplitude is plotted against mean stress for a constant fatigue life.

**Notched vs. Smooth Specimens:**

*   **Smooth Specimens:** Provide baseline material fatigue properties.
*   **Notched Specimens:** Account for stress concentration effects. The fatigue strength of notched components is generally lower than that of smooth specimens at the same stress ratio. The fatigue notch factor ($K_f$) relates the fatigue strength of a notched specimen to that of a smooth specimen: $K_f = S_{plain} / S_{notched}$ (at the same life).

**Textbook References:**

*   **Jones (1993) - Chapter 7: Fatigue:** Discusses fatigue properties of various material classes.
*   **Collins (2013) - Chapter 4: Fatigue Failure:** Explains the impact of different stress ratios and notch effects on fatigue life.
*   **ASM Handbook, Vol. 11 (2002) - Chapter 1: Fatigue and Fracture:** Contains extensive S-N data for numerous alloys under various loading conditions and stress ratios.

---

### 5. Endurance Diagrams for Life Prediction and Design

**Using Endurance Diagrams for Design:**

Endurance diagrams are crucial for designing components to meet specific life requirements.

**Steps:**

1.  **Determine Operating Stress Range:** Analyze the expected cyclic stresses in the component during its service life. This often involves identifying the stress amplitude and mean stress.
2.  **Consider Load Spectrum:** In many applications, the load is not constant but varies in a spectrum. This requires methods like Miner's Rule (for cumulative damage) to estimate total fatigue life.
3.  **Select a Suitable S-N Curve:** Choose the appropriate S-N curve based on the material of construction, geometry (including stress concentrations), surface finish, and the relevant stress ratio. If a specific S-N curve for the exact configuration isn't available, conservative estimates are made.
4.  **Apply a Factor of Safety (FOS):** To account for uncertainties in material properties, loading, manufacturing, and environmental factors, a factor of safety is applied. The allowable stress for design is typically the stress from the S-N curve divided by the FOS.
    *   **For materials with an endurance limit:** Allowable stress = Endurance Limit / FOS (for infinite life design, if operating stresses are below this).
    *   **For materials without an endurance limit:** Allowable stress = Fatigue Strength at desired life / FOS.
5.  **Design Component:** Ensure the actual operating stresses are below the calculated allowable stress.

**Example of Life Prediction:**

Suppose a steel component is subjected to a fully reversed bending stress of 200 MPa. From its S-N curve (for $R=-1$), the material has an endurance limit of 250 MPa. Since the applied stress (200 MPa) is below the endurance limit (250 MPa), the component is predicted to have an infinite fatigue life.

If the applied stress were 300 MPa, it would be above the endurance limit. The S-N curve shows that at 300 MPa, failure occurs at $10^5$ cycles. Therefore, the predicted fatigue life is $10^5$ cycles.

**Cumulative Damage (Miner's Rule):**

When a component is subjected to varying stress levels, Miner's Rule is used to estimate the total fatigue life. It states that fatigue damage accumulates linearly, and failure occurs when the sum of the fractional lives used at each stress level equals unity.

$\sum (N_i / N_{fi}) = 1$

Where:
*   $N_i$ = Number of cycles applied at stress level $\sigma_i$.
*   $N_{fi}$ = Number of cycles to failure at stress level $\sigma_i$ (obtained from the S-N curve).

**Textbook References:**

*   **Jones (1993) - Chapter 7: Fatigue:** Covers practical design applications of fatigue data and Miner's Rule.
*   **Collins (2013) - Chapter 4: Fatigue Failure:** Provides comprehensive guidance on using fatigue diagrams for design, including safety factors and cumulative damage.
*   **ASM Handbook, Vol. 11 (2002) - Chapter 1: Fatigue and Fracture:** Offers methodologies for life prediction and the application of fatigue data in design.
*   **Prashant Kumar (1999) - Chapter 5: Fatigue:** Discusses crack initiation, propagation, and cumulative damage models.

---

### 6. Practice Questions and Exercises

**Question 1:**

Define "Endurance Limit" and explain for which class of materials it is a significant characteristic. (CO2, K1)

**Answer:**
The Endurance Limit (or Fatigue Limit) is the stress level below which a material can theoretically withstand an infinite number of load cycles without experiencing fatigue failure. This characteristic is primarily observed in ferrous materials, such as steels and some titanium alloys.

---

**Question 2:**

A component made of an aluminum alloy is designed to withstand cyclic loading. The relevant S-N curve for this alloy shows a fatigue strength of 150 MPa at $10^7$ cycles. If the component is subjected to a stress amplitude of 180 MPa with a stress ratio $R=-1$, predict its fatigue life. What would be the design stress for infinite life if a factor of safety of 2 is required? (CO2, K1; CO3, K3 - indirectly through design application)

**Answer:**
*   **Predicting Fatigue Life:** The applied stress (180 MPa) is higher than the fatigue strength at $10^7$ cycles (150 MPa). Aluminum alloys typically do not have a true endurance limit, meaning their fatigue strength decreases with increasing cycles. If the applied stress is *higher* than the fatigue strength at any given cycle count, failure will occur *before* that cycle count. Without a specific S-N curve for stresses above $10^7$ cycles, or a more detailed curve, we cannot precisely predict life. However, if the stress were *lower* than 150 MPa, say 120 MPa, we would interpolate on the S-N curve. Given the problem statement, it's more likely asking for a comparison. If the operational stress is *higher* than the stated fatigue strength at $10^7$ cycles, the fatigue life will be *less than* $10^7$ cycles. A more precise prediction would require a specific point on the S-N curve at 180 MPa.
*   **Design Stress for Infinite Life:** Since aluminum alloys generally do not have a true endurance limit, designing for "infinite life" is typically interpreted as designing for a very large number of cycles (e.g., $10^8$ or $10^9$). If we assume the fatigue strength at $10^7$ cycles (150 MPa) is the best available data point, and that the stress continues to decrease with more cycles, we would need to consult a more detailed S-N curve or consider a fatigue strength at a higher cycle count. However, if we interpret the question to mean "designing to a fatigue strength that is *guaranteed* to last for a very long time," and if we assume (conservatively) that 150 MPa is the stress limit for a very high cycle count, then:
    *   Design stress for infinite life = Fatigue Strength at very high cycles / FOS.
    *   Using 150 MPa as a hypothetical "very high cycle" strength: Design stress = 150 MPa / 2 = 75 MPa.
    *   *Note: This is a simplified assumption. In practice, one would use a fatigue strength value for a specified high cycle count, e.g., $10^8$ cycles, if available.*

---

**Question 3:**

Explain how the presence of a small internal void (inclusion) in a metal component can significantly reduce its fatigue life compared to a component with a perfectly smooth internal structure. (CO1, K2; CO2, K1)

**Answer:**
Internal voids or inclusions act as significant stress concentrators. Under cyclic loading, the stress at the tip of the void or inclusion can become much higher than the nominal applied stress. This localized high stress can initiate a fatigue crack. Once a crack initiates, it can propagate through the material with each subsequent stress cycle, eventually leading to failure. The sharper the void/inclusion and the higher the local stress, the faster the crack will grow and the shorter the overall fatigue life will be. This is why material quality and the absence of internal defects are critical for fatigue performance.

---

**Question 4:**

Describe the concept of "fatigue strength" and how it differs from "endurance limit." (CO2, K1)

**Answer:**
*   **Fatigue Strength:** Refers to the stress level at which a material will fail after a specific, finite number of cycles (e.g., $10^6$ or $10^7$ cycles). It is a point on the sloping portion of the S-N curve.
*   **Endurance Limit (Fatigue Limit):** Is a stress level below which a material can endure an infinite number of cycles without fatigue failure. It is represented by the horizontal portion of the S-N curve for materials that exhibit this behavior.

---

**Question 5:**

A steel shaft is designed to operate under cyclic bending loads. The expected maximum stress is 400 MPa and the minimum stress is -200 MPa. The S-N curve for the steel (for fully reversed loading, $R=-1$) shows an endurance limit of 300 MPa and a fatigue strength of 500 MPa at $10^5$ cycles. Estimate the fatigue life of the shaft using Miner's Rule and assuming a simplified two-level stress spectrum: (a) 50% of the time the stress is $\sigma_a = 400$ MPa (with $\sigma_m=0$) and (b) 50% of the time the stress is $\sigma_a = 200$ MPa (with $\sigma_m=0$). (CO2, K1; CO3, K3)

**Answer:**
*   **Calculate Stress Amplitude and Mean Stress for each spectrum:**
    *   (a) $\sigma_{max} = 400$ MPa, $\sigma_{min} = -400$ MPa (assuming fully reversed for simplicity based on $R=-1$ data). So $\sigma_a = (400 - (-400))/2 = 400$ MPa. $\sigma_m = 0$.
    *   (b) $\sigma_{max} = 200$ MPa, $\sigma_{min} = -200$ MPa (assuming fully reversed for simplicity). So $\sigma_a = (200 - (-200))/2 = 200$ MPa. $\sigma_m = 0$.
*   **Determine $N_f$ for each stress level from S-N data:**
    *   For $\sigma_a = 400$ MPa: This stress is below the endurance limit (300 MPa). However, the question provides fatigue strength at $10^5$ cycles as 500 MPa. This means that at 400 MPa, the life will be *longer* than $10^5$ cycles. Let's assume a linear relationship on the log-log plot for simplicity in the sloping region.
    *   For $\sigma_a = 200$ MPa: This stress is below the endurance limit (300 MPa). Therefore, it is expected to have an infinite life ($N_f \rightarrow \infty$).
*   **Apply Miner's Rule:**
    *   Let $f_a = 0.5$ be the fraction of time at stress level (a), and $f_b = 0.5$ be the fraction of time at stress level (b).
    *   The total life $N_{total}$ will be influenced by the finite-life stress.
    *   Damage fraction from level (a) = $f_a / N_{fa}$.
    *   Damage fraction from level (b) = $f_b / N_{fb}$.
    *   Since $N_{fb} \rightarrow \infty$, the damage fraction from level (b) is 0.
    *   Therefore, we only need to consider the damage from level (a).
    *   **Crucial Point:** The provided S-N data is insufficient to determine $N_f$ for 400 MPa if it's below the endurance limit (300 MPa). The question implies a simplified model. If we *assume* the 500 MPa at $10^5$ cycles is a point in the sloping region and the endurance limit is indeed 300 MPa, then any stress below 300 MPa theoretically has infinite life. However, the provided numbers create ambiguity.

    *   **Re-interpreting the question based on common exam scenarios:** It's likely intended that both stress levels are used for cumulative damage, implying that maybe the endurance limit is lower or the application context is different. Let's assume, for the sake of demonstrating Miner's Rule, that the S-N curve passes through (500 MPa, $10^5$ cycles) and (300 MPa, $\infty$ cycles).
        *   For $\sigma_a = 400$ MPa: Since 400 MPa is between 300 MPa and 500 MPa, its $N_f$ will be between $10^5$ and $\infty$.
        *   For $\sigma_a = 200$ MPa: This is below 300 MPa, so $N_f \rightarrow \infty$.

    *   **If we assume a simplified power law for the sloping part:** Let $\sigma_a = aN^b$.
        *   Using (500 MPa, $10^5$ cycles): $500 = a(10^5)^b$.
        *   Using (300 MPa, $\infty$ cycles) is tricky with power law. Let's assume a different point or re-evaluate.

    *   **Let's assume a more direct interpretation for an exercise:**
        *   Stress level 1: $\sigma_a = 400$ MPa. This is above the endurance limit (300 MPa), but below the fatigue strength at $10^5$ cycles (500 MPa). Let's assume the S-N relationship is $\sigma_a = 500 (N/10^5)^{-0.1}$ (a common exponent).
            *   $400 = 500 (N_1/10^5)^{-0.1}$
            *   $0.8 = (N_1/10^5)^{-0.1}$
            *   $(0.8)^{-10} = N_1/10^5$
            *   $N_1 = 10^5 \times (0.8)^{-10} \approx 10^5 \times 9.31 \approx 9.31 \times 10^5$ cycles.
        *   Stress level 2: $\sigma_a = 200$ MPa. This is below the endurance limit (300 MPa). So $N_2 \rightarrow \infty$.

    *   **Miner's Rule:**
        *   Total Damage = (Fraction of time at $\sigma_a=400$) / $N_1$ + (Fraction of time at $\sigma_a=200$) / $N_2$
        *   Total Damage = $(0.5) / (9.31 \times 10^5) + (0.5) / \infty$
        *   Total Damage = $0.5 / (9.31 \times 10^5) + 0$
        *   Total Damage $\approx 0.537 \times 10^{-6}$
        *   Total Life = $1 / \text{Total Damage} = 1 / (0.537 \times 10^{-6}) \approx 1.86 \times 10^6$ cycles.

    *   **Final Answer based on the most common interpretation of such problems:** The shaft is expected to survive for approximately $1.86 \times 10^6$ cycles.

---

### 7. Important Points to Remember

*   **S-N curves are graphical tools relating stress to cycles for fatigue failure.**
*   **Endurance Limit is a stress below which fatigue failure is theoretically infinite.** This is characteristic of ferrous metals.
*   **Aluminum and other non-ferrous alloys typically do not have an endurance limit.** Their fatigue strength is specified at a finite life.
*   **Stress amplitude and stress ratio (R) are critical parameters.** Tensile mean stress (higher R) reduces fatigue life.
*   **Defects, surface finish, and stress concentrations significantly reduce fatigue life.**
*   **Miner's Rule provides a method for estimating fatigue life under variable amplitude loading.**
*   **Factors of safety are essential in fatigue design** to account for uncertainties.

---

### 8. Alignment with Course Outcomes

*   **CO1 (Understand theories of failure and material behavior):** Endurance diagrams are a primary tool for understanding fatigue failure behavior.
*   **CO2 (Remember factors affecting fatigue loading, S-N-P curves, and endurance diagrams for life prediction):** This entire topic is dedicated to understanding these factors and their use in life prediction.
*   **CO3 (Apply principles of fracture mechanics to analyse and design against crack initiation and propagation):** While not explicitly fracture mechanics, fatigue is a crack initiation and propagation phenomenon, and understanding S-N curves is the first step in designing against it. Fracture mechanics is used for crack growth analysis, which complements fatigue life prediction.
*   **CO4 (Understand advanced failure mechanisms):** Endurance diagrams are the foundation upon which more advanced concepts like corrosion fatigue or creep-fatigue interaction are built.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
