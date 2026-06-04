---
title: "Fatigue loading"
subject: "FAILURE ANALYSIS AND DESIGN"
module: "Module 2: Fatigue loading"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1751d0cf4804463dd7"
status: "completed"
scrapedAt: "2026-05-20T18:12:28.679Z"
---
# Module 2: Fatigue Loading - Study Notes

This module delves into the critical phenomenon of fatigue loading and its impact on material failure. Understanding fatigue is paramount for designing safe and reliable mechanical components.

## Table of Contents

1.  **Introduction to Fatigue Loading**
    *   Definition of Fatigue
    *   Mechanism of Fatigue Failure
    *   Stages of Fatigue
2.  **Factors Affecting Fatigue Loading**
    *   Stress Amplitude and Mean Stress
    *   Stress Concentration
    *   Surface Finish and Residual Stresses
    *   Environment
    *   Material Properties
3.  **Fatigue Testing and Data Representation**
    *   Uniaxial Fatigue Testing
    *   S-N Curves (Wöhler Curves)
    *   Endurance Limit and Fatigue Limit
    *   S-N-P Curves (Stress-Number of cycles-Probability of survival)
    *   Basquin's Law
    *   Coffin-Manson Relationship
4.  **Fatigue Life Prediction**
    *   Safe Life Design
    *   Fail-Safe Design
    *   Slow Crack Growth Design
    *   Miner's Rule (Cumulative Damage)
5.  **Fracture Mechanics Approach to Fatigue**
    *   Crack Initiation and Propagation
    *   Paris' Law
    *   Stress Intensity Factor (K)
    *   Fracture Toughness (K_IC)
6.  **Practice Questions and Answers**

---

## 1. Introduction to Fatigue Loading

### Definition of Fatigue

**Fatigue** is a localized progressive process by which material damage occurs and propagates when subjected to repeated or fluctuating stresses. It results in fracture, usually at stresses significantly below the static yield strength or ultimate tensile strength of the material.

*   **Key Concept:** Fatigue is a **progressive** failure mechanism.
*   **Reference:** Jones D. R. H. (1993) often emphasizes the localized nature of fatigue damage and its initiation at stress concentrations.

### Mechanism of Fatigue Failure

Fatigue failure is generally considered to occur in three distinct stages:

1.  **Crack Initiation:** Microscopic cracks or defects, often at stress concentration sites (e.g., surface imperfections, inclusions, sharp corners), begin to form.
2.  **Crack Propagation:** Once initiated, the crack grows incrementally with each stress cycle. This is a slow, stable process.
3.  **Final Fracture:** When the crack reaches a critical size, the remaining cross-section can no longer support the applied load, leading to rapid, brittle-like fracture.

*   **Key Concept:** Fatigue failure is a cumulative process that occurs over many stress cycles.
*   **Reference:** ASM Handbook, Vol. 11 (2002) provides extensive case studies illustrating these stages in real-world failures.

### Stages of Fatigue (Visualized)

Imagine a component under cyclic loading:

*   **Stage I (Initiation):** Small surface cracks form, often at slip bands or inclusions.
*   **Stage II (Propagation):** These cracks grow steadily under repeated stressing, creating characteristic "beach marks" on the fracture surface. These marks represent periods of intermittent crack growth.
*   **Stage III (Fracture):** The final fracture occurs when the remaining material fails due to overload. This region often appears rougher and more ductile than the fatigue crack growth region.

---

## 2. Factors Affecting Fatigue Loading

Several factors significantly influence a material's resistance to fatigue.

### Stress Amplitude and Mean Stress

*   **Stress Amplitude ($\sigma_a$):** Half the difference between the maximum and minimum stress in a cycle. Higher amplitude leads to shorter fatigue life.
    *   $\sigma_a = (\sigma_{max} - \sigma_{min}) / 2$
*   **Mean Stress ($\sigma_m$):** The average of the maximum and minimum stress in a cycle.
    *   $\sigma_m = (\sigma_{max} + \sigma_{min}) / 2$
*   **Stress Ratio (R):** The ratio of minimum stress to maximum stress.
    *   $R = \sigma_{min} / \sigma_{max}$
*   **Effect of Mean Stress:**
    *   **Tensile Mean Stress:** Generally reduces fatigue life.
    *   **Compressive Mean Stress:** Generally increases fatigue life.

*   **Key Concept:** The combination of stress amplitude and mean stress dictates fatigue life.
*   **Reference:** Collins (2013) extensively discusses the impact of mean stress on fatigue life, often presenting fatigue data in terms of $\sigma_a$ vs. $\sigma_m$ (Goodman diagrams, etc.).

### Stress Concentration

*   **Definition:** A geometric feature (e.g., holes, notches, fillets, sharp corners) that causes a localized increase in stress.
*   **Stress Concentration Factor ($K_t$):** The ratio of the maximum stress at a discontinuity to the nominal stress away from the discontinuity.
    *   $K_t = \sigma_{max, local} / \sigma_{nominal}$
*   **Effect on Fatigue:** Stress concentrations are primary sites for fatigue crack initiation. Even if the nominal stress is below the fatigue limit, a high stress concentration can lead to fatigue failure.

*   **Key Concept:** Fatigue life is highly sensitive to stress concentrations.
*   **Reference:** Kumar (1999) on fracture mechanics covers stress intensity factors, which are related to stress concentration. Jones (1993) also discusses case studies where stress concentrations were critical factors.

### Surface Finish and Residual Stresses

*   **Surface Finish:**
    *   **Rough Surfaces:** Have more initiation sites (scratches, pits) and therefore shorter fatigue lives.
    *   **Smooth Surfaces:** Generally have longer fatigue lives. Polishing can significantly improve fatigue resistance.
*   **Residual Stresses:** Stresses that remain in a material after processing, even in the absence of external load.
    *   **Compressive Residual Stresses:** Beneficial for fatigue life as they oppose applied tensile stresses, making crack initiation and propagation more difficult. Induced by processes like shot peening, case hardening, and nitriding.
    *   **Tensile Residual Stresses:** Detrimental to fatigue life. Induced by processes like welding and machining.

*   **Key Concept:** The surface condition and internal stresses are crucial for fatigue performance.
*   **Reference:** ASM Handbook, Vol. 11 (2002) details surface treatments and their impact on fatigue life.

### Environment

*   **Corrosion Fatigue:** Fatigue failure that occurs in a corrosive environment. The corrosive medium can accelerate crack initiation and growth by:
    *   Oxidizing the surface, creating crack-like defects.
    *   Penetrating cracks and wedging them open.
    *   Reducing the material's fracture toughness.
*   **Temperature:**
    *   **High Temperatures:** Can lead to creep-fatigue interaction, where creep deformation and fatigue interact to reduce life. Oxidation can also be accelerated.
    *   **Low Temperatures:** Can increase the notch sensitivity of some materials, potentially affecting fatigue.

*   **Key Concept:** The operating environment can dramatically alter fatigue behavior.
*   **Reference:** Collins (2013) has a dedicated section on environmental effects, including corrosion fatigue.

### Material Properties

*   **Yield Strength and Ultimate Tensile Strength:** Higher strength materials generally have better fatigue resistance, but ductility also plays a role.
*   **Ductility:** Materials with higher ductility can accommodate more plastic deformation before fracture, which can be beneficial for fatigue initiation. However, very ductile materials can be more susceptible to crack growth under certain conditions.
*   **Microstructure:** Grain size, presence of inclusions, and phase distribution influence fatigue crack initiation and propagation. Fine-grained materials are often stronger and more fatigue resistant.
*   **Hardness:** Often correlates with fatigue strength.

*   **Key Concept:** Material selection is fundamental to achieving desired fatigue performance.
*   **Reference:** Jones (1993) provides extensive data on the fatigue properties of various engineering materials.

---

## 3. Fatigue Testing and Data Representation

### Uniaxial Fatigue Testing

*   **Purpose:** To determine a material's response to cyclic loading.
*   **Method:** A specimen is subjected to a controlled cyclic stress or strain applied by a testing machine.
*   **Key Parameters Measured:**
    *   Maximum stress ($\sigma_{max}$)
    *   Minimum stress ($\sigma_{min}$)
    *   Number of cycles to failure (N)

### S-N Curves (Wöhler Curves)

*   **Definition:** A graphical representation of the relationship between the applied stress (S or $\sigma$) and the number of cycles to failure (N) for a specific material under specific testing conditions.
*   **Axes:**
    *   **Y-axis:** Stress Amplitude ($\sigma_a$) or Maximum Stress ($\sigma_{max}$) (often on a log scale).
    *   **X-axis:** Number of cycles to failure (N) (always on a log scale).
*   **Shape:** Typically shows a decreasing trend, meaning higher stresses lead to fewer cycles before failure.

*   **Key Concept:** S-N curves are the cornerstone of fatigue design and analysis.
*   **Reference:** All textbooks listed discuss S-N curves extensively. Collins (2013) provides detailed methodologies for constructing and interpreting them.

### Endurance Limit and Fatigue Limit

*   **Endurance Limit (or Fatigue Limit):** The stress level below which a material can endure an infinite number of stress cycles without failing. Primarily observed in ferrous metals (e.g., steels) and titanium alloys.
*   **Fatigue Strength:** The stress level at which a material fails after a specific finite number of cycles (e.g., $10^6$ or $10^7$ cycles). Non-ferrous metals (e.g., aluminum, copper) and polymers typically do not exhibit a distinct endurance limit but rather a stress level where the S-N curve becomes nearly horizontal.

*   **Key Concept:** The endurance limit represents a threshold for infinite fatigue life.
*   **Reference:** Jones (1993) clarifies the distinction between endurance limit and fatigue strength for different material classes.

### S-N-P Curves (Stress-Number of cycles-Probability of survival)

*   **Purpose:** To account for the statistical nature of fatigue. Fatigue lives for a given stress level are not identical for all specimens; there is inherent variability.
*   **Representation:** A family of S-N curves, each representing a different probability of survival (e.g., 50%, 90%, 99%).
*   **Application:** Used for designing components where a very high probability of survival is required, avoiding catastrophic failures.

*   **Key Concept:** Fatigue data is inherently probabilistic.
*   **Reference:** Collins (2013) and ASM Handbook (2002) both discuss the importance of considering the probability of survival in fatigue design.

### Basquin's Law

*   **Description:** An empirical relationship that describes the relationship between stress amplitude and fatigue life in the high-cycle fatigue (HCF) regime, where fatigue is primarily driven by elastic deformation.
*   **Equation:** $\sigma_a = \sigma'_f (2N_f)^b$
    *   $\sigma_a$: Stress amplitude
    *   $\sigma'_f$: Fatigue strength coefficient (related to the true fracture strength)
    *   $N_f$: Number of cycles to failure
    *   $b$: Fatigue strength exponent (typically between -0.05 and -0.15, indicating a slope on a log-log S-N plot)

*   **Key Concept:** Basquin's Law models fatigue in the elastic region.
*   **Reference:** Commonly used in fatigue analysis texts, including Collins (2013).

### Coffin-Manson Relationship (Hysteresis Loop)

*   **Description:** An empirical relationship that describes the relationship between plastic strain amplitude and fatigue life in the low-cycle fatigue (LCF) regime, where fatigue is primarily driven by plastic deformation.
*   **Equation:** $\Delta\epsilon_p / 2 = \epsilon'_f (2N_f)^c$
    *   $\Delta\epsilon_p / 2$: Plastic strain amplitude
    *   $\epsilon'_f$: Fatigue ductility coefficient (related to the true fracture ductility)
    *   $N_f$: Number of cycles to failure
    *   $c$: Fatigue ductility exponent (typically between -0.5 and -0.7)
*   **Total Strain:** The total strain amplitude ($\Delta\epsilon / 2$) is the sum of elastic and plastic strain: $\Delta\epsilon / 2 = \Delta\epsilon_e / 2 + \Delta\epsilon_p / 2$.

*   **Key Concept:** Coffin-Manson describes fatigue in the plastic region.
*   **Reference:** Found in most fracture mechanics and fatigue texts, including Kumar (1999) and Collins (2013).

---

## 4. Fatigue Life Prediction

Designing for fatigue involves selecting a strategy to ensure a component can withstand the expected cyclic loading.

### Safe Life Design

*   **Concept:** Design the component to have a fatigue life greater than the expected service life, with a significant safety factor.
*   **Method:** Based on S-N curves and fatigue limit, calculate the maximum allowable stress for the desired life.
*   **Limitations:** Requires accurate knowledge of applied stresses and material properties. Failure can still occur if the actual stresses or material behavior deviates from the assumptions.

*   **Key Concept:** Aim to avoid fatigue failure entirely within the design life.
*   **Reference:** Jones (1993) often highlights this as a traditional design approach.

### Fail-Safe Design

*   **Concept:** Design the component such that if a fatigue crack does initiate and propagate, it will not lead to sudden catastrophic failure.
*   **Methods:**
    *   **Redundancy:** Incorporating multiple load paths so that if one element fails, the load is redistributed.
    *   **Slow Crack Growth:** Designing so that a crack grows slowly enough to be detected during routine inspections.
*   **Application:** Common in aerospace structures and bridges.

*   **Key Concept:** Ensure failure is gradual and detectable.
*   **Reference:** ASM Handbook, Vol. 11 (2002) discusses design philosophies like fail-safe.

### Slow Crack Growth Design

*   **Concept:** Focus on controlling the crack propagation phase. Components are designed to tolerate the presence of cracks up to a certain size without immediate failure.
*   **Method:** Typically employs fracture mechanics principles to predict crack growth rates. Regular inspections are crucial to monitor crack size.
*   **Relationship to Fail-Safe:** Often a subset or implementation of fail-safe design.

*   **Key Concept:** Manage crack growth to allow for inspection and timely repair/replacement.
*   **Reference:** Kumar (1999) and Collins (2013) are essential for understanding the principles behind slow crack growth design.

### Miner's Rule (Cumulative Damage)

*   **Concept:** A linear cumulative damage rule used to estimate the fatigue life of a component subjected to variable amplitude loading (where the stress level changes over time).
*   **Assumption:** The damage incurred at each stress level is independent and additive. The fatigue life is a fraction of the total life consumed by each stress level.
*   **Equation:** $\sum (n_i / N_i) = 1$
    *   $n_i$: Number of cycles applied at stress level $i$
    *   $N_i$: Fatigue life at stress level $i$ (obtained from the S-N curve)
*   **Application:** Used to estimate the life of components subjected to complex, non-constant load histories.

*   **Key Concept:** Damage accumulates linearly with each stress cycle.
*   **Limitations:** Assumes linear damage accumulation, doesn't account for mean stress effects or interactions between different stress levels.
*   **Reference:** Widely covered in fatigue texts. Collins (2013) provides detailed examples of applying Miner's Rule.

---

## 5. Fracture Mechanics Approach to Fatigue

This approach focuses on the behavior of existing cracks rather than crack initiation.

### Crack Initiation and Propagation

*   **Initiation:** As discussed earlier, this occurs at stress concentrations or material defects.
*   **Propagation:** Once a crack exists, cyclic stress causes it to grow. The driving force for this growth is related to the stress intensity at the crack tip.

### Paris' Law

*   **Description:** A fundamental law in fracture mechanics that relates the rate of fatigue crack growth per cycle (da/dN) to the stress intensity factor range ($\Delta K$).
*   **Equation:** $da/dN = C (\Delta K)^m$
    *   $da/dN$: Rate of crack growth per cycle (e.g., mm/cycle)
    *   $\Delta K$: Stress intensity factor range ($\Delta K = Y \Delta\sigma \sqrt{\pi a}$, where Y is a geometry factor, $\Delta\sigma$ is the stress range, and $a$ is the crack length)
    *   $C$ and $m$: Material constants determined experimentally for the specific material and environment.
*   **Significance:** Allows prediction of crack growth over time and determination of the number of cycles required for a crack to grow from an initial size to a critical size.

*   **Key Concept:** Fatigue crack growth is controlled by the stress intensity factor range.
*   **Reference:** Kumar (1999) is the primary resource for understanding Paris' Law and its applications.

### Stress Intensity Factor (K)

*   **Definition:** A parameter in fracture mechanics that characterizes the stress field at the tip of a crack. It quantifies the magnitude of the stress singularity at the crack front.
*   **Equation for a through-thickness crack in a plate under uniform tension:** $K = Y \sigma \sqrt{\pi a}$
    *   $K$: Stress intensity factor
    *   $Y$: Geometry factor (depends on crack shape and specimen geometry)
    *   $\sigma$: Applied nominal stress
    *   $a$: Crack length
*   **Stress Intensity Factor Range ($\Delta K$):** The difference between the maximum and minimum stress intensity factor during a stress cycle. This is the key parameter in Paris' Law for fatigue crack growth.

### Fracture Toughness (K_IC)

*   **Definition:** The critical stress intensity factor at which a crack will propagate unstably (leading to fracture) in a brittle manner. It is a material property that quantifies the material's resistance to fracture in the presence of a sharp crack.
*   **Significance:** If the calculated stress intensity factor ($K$) reaches the material's fracture toughness ($K_{IC}$), fracture will occur.
*   **Application in Fatigue:** Used to determine the critical crack size ($a_c$) for a given applied stress. Once a crack reaches $a_c$, it will fail.

*   **Key Concept:** Fracture toughness defines the limit of crack stability.
*   **Reference:** Kumar (1999) dedicates significant content to K_IC and its role in fracture mechanics.

---

## 6. Practice Questions and Answers

**Question 1 (CO1, CO2):**
Describe the three stages of fatigue failure. How does a stress concentration affect the fatigue life of a component?

**Answer 1:**
The three stages of fatigue failure are:
1.  **Crack Initiation:** Microscopic cracks form at stress concentration sites or material defects.
2.  **Crack Propagation:** The initiated crack grows incrementally with each stress cycle.
3.  **Final Fracture:** The crack reaches a critical size, leading to rapid failure of the remaining cross-section.

A stress concentration significantly *reduces* the fatigue life of a component. It increases the local stress, providing a more favorable condition for crack initiation. Even if the nominal stress is below the material's fatigue limit, a high stress concentration can cause fatigue failure.

---

**Question 2 (CO2):**
What is the difference between an endurance limit and a fatigue strength? Which type of metal typically exhibits an endurance limit?

**Answer 2:**
*   **Endurance Limit (or Fatigue Limit):** The stress level below which a material can withstand an infinite number of load cycles without fatigue failure.
*   **Fatigue Strength:** The stress level at which a material will fail after a specific, finite number of load cycles (e.g., $10^6$ or $10^7$ cycles).

Ferrous metals (like steels) and titanium alloys typically exhibit an endurance limit. Non-ferrous metals (like aluminum and copper alloys) usually do not have a distinct endurance limit and their S-N curves tend to level off at very high cycle numbers, indicating a fatigue strength rather than a true limit.

---

**Question 3 (CO2, CO3):**
A component is subjected to a fatigue stress that varies from $\sigma_{min} = 50$ MPa to $\sigma_{max} = 200$ MPa. Calculate the stress amplitude ($\sigma_a$) and the mean stress ($\sigma_m$).

**Answer 3:**
*   **Stress Amplitude ($\sigma_a$):**
    $\sigma_a = (\sigma_{max} - \sigma_{min}) / 2 = (200 \text{ MPa} - 50 \text{ MPa}) / 2 = 150 \text{ MPa} / 2 = 75 \text{ MPa}$
*   **Mean Stress ($\sigma_m$):**
    $\sigma_m = (\sigma_{max} + \sigma_{min}) / 2 = (200 \text{ MPa} + 50 \text{ MPa}) / 2 = 250 \text{ MPa} / 2 = 125 \text{ MPa}$

---

**Question 4 (CO2):**
Explain the purpose of S-N-P curves in fatigue analysis.

**Answer 4:**
S-N-P curves (Stress-Number of cycles-Probability of survival) are used to account for the inherent statistical variability in fatigue behavior. Instead of a single S-N curve representing an average behavior, S-N-P curves provide a family of curves, each associated with a specific probability of survival (e.g., 90%, 99%). This allows engineers to design components for a desired level of reliability, ensuring that the probability of fatigue failure is acceptably low for the intended application.

---

**Question 5 (CO3):**
What is the fundamental equation of Paris' Law, and what does it describe?

**Answer 5:**
Paris' Law is: $da/dN = C (\Delta K)^m$
It describes the rate of fatigue crack growth per cycle ($da/dN$) as a function of the stress intensity factor range ($\Delta K$). $C$ and $m$ are material constants. The law is crucial for predicting how quickly a fatigue crack will grow under cyclic loading and for estimating the remaining life of a component containing a crack.

---

**Question 6 (CO1, CO4):**
A component fails due to repeated loading. If the operating environment involves saltwater, what additional failure mechanism should be considered, and how might it affect the fatigue life?

**Answer 6:**
If the operating environment involves saltwater, **corrosion fatigue** should be considered. Saltwater can significantly reduce the fatigue life of a component compared to operating in a dry or clean environment. The corrosive medium can:
1.  Create micro-cracks or pits on the surface, acting as crack initiation sites.
2.  Penetrate existing cracks, wedge them open, and increase the stress intensity factor at the crack tip.
3.  Accelerate crack growth rates.

This means that the fatigue life in a corrosive environment will typically be much shorter, and failure might occur at lower stress levels or fewer cycles than predicted based on dry testing.

---

**IMPORTANT POINTS TO REMEMBER:**

*   Fatigue is a **progressive, cumulative** failure mechanism, often occurring at stresses below the yield strength.
*   **Stress concentrations, surface finish, and mean stress** are critical factors that drastically influence fatigue life.
*   S-N curves are essential for **high-cycle fatigue**, while the Coffin-Manson relationship is used for **low-cycle fatigue**.
*   **Miner's Rule** allows for the estimation of fatigue life under variable amplitude loading.
*   **Fracture mechanics**, particularly Paris' Law, is vital for understanding and predicting **fatigue crack propagation**.
*   **Endurance limit** is a stress threshold for infinite life, primarily in ferrous metals.
*   **Environmental factors**, especially corrosion, can severely degrade fatigue performance.
*   Design strategies include **safe-life, fail-safe, and slow crack growth** to manage fatigue risk.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
