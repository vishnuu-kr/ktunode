---
title: "Factors affecting S-N-P curves"
subject: "FAILURE ANALYSIS AND DESIGN"
module: "Module 2: Fatigue loading"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1751d0cf4804463ddb"
status: "completed"
scrapedAt: "2026-05-20T18:12:31.510Z"
---
# Module 2: Fatigue Loading - Factors Affecting S-N-P Curves

## 1. Introduction to S-N-P Curves

**1.1 What is an S-N Curve?**

*   An S-N curve (Stress-Number of cycles) is a graphical representation that relates the stress amplitude (S) to the number of cycles to failure (N) for a material under cyclic loading.
*   It is a fundamental tool for predicting the fatigue life of a component.
*   **Stress Amplitude (S):** Typically represents the maximum stress in a cycle, or sometimes the alternating stress component. For many fatigue analyses, the *stress range* or *alternating stress* is used.
    *   **Stress Range (Δσ):** $\Delta\sigma = \sigma_{max} - \sigma_{min}$
    *   **Alternating Stress (σa):** $\sigma_a = \frac{\sigma_{max} - \sigma_{min}}{2} = \frac{\Delta\sigma}{2}$
    *   **Mean Stress (σm):** $\sigma_m = \frac{\sigma_{max} + \sigma_{min}}{2}$
*   **Number of Cycles to Failure (N):** The total number of stress cycles a material can withstand before fracturing.

**1.2 The "P" in S-N-P Curves: Probability of Survival**

*   Real-world fatigue is a probabilistic phenomenon. A given stress level will not result in the same fatigue life for every identical specimen due to variations in material properties, manufacturing processes, and surface finish.
*   **S-N-P Curve:** An S-N curve is extended to include the probability of survival (P). This means plotting S-N curves for different probabilities of survival (e.g., 50%, 90%, 99%).
*   **Interpretation:**
    *   A higher stress amplitude leads to a shorter fatigue life (lower N).
    *   For a given stress amplitude, a higher probability of survival means a lower expected fatigue life. Conversely, a lower probability of survival allows for a higher stress amplitude for the same life.

**1.3 Endurance Limit (or Fatigue Limit)**

*   For some materials, particularly ferrous alloys, there is a stress level below which fatigue failure will not occur, regardless of the number of cycles. This is the **endurance limit**.
*   For materials that do not exhibit an endurance limit (e.g., aluminum alloys, copper alloys), the S-N curve continues to decrease with increasing cycles, eventually becoming very shallow. The stress at which this shallow slope is reached is sometimes referred to as the **fatigue strength** at a specified number of cycles (e.g., fatigue strength at $10^7$ cycles).

**Key Concept:** S-N-P curves provide a statistical basis for fatigue life prediction, accounting for inherent material variability.

**References:**

*   **Jones (1993):** Likely discusses the general principles of fatigue testing and S-N curves, potentially with early examples.
*   **Collins (2013):** A core text for fatigue analysis, likely providing detailed explanations of S-N curves, stress parameters, and the statistical nature of fatigue.

## 2. Factors Affecting S-N-P Curves

The "factors affecting S-N-P curves" essentially means factors that influence where a specific material's S-N-P curve will lie. These factors can shift the entire curve up or down, or change its slope.

### 2.1 Material Properties

*   **Material Type:** Different materials have vastly different fatigue resistance.
    *   **Metals:** Ferrous alloys (steels, cast irons) generally have higher fatigue strength and endurance limits than non-ferrous alloys (aluminum, copper, titanium).
    *   **Polymers and Ceramics:** Exhibit different fatigue behaviors and are often characterized by different types of tests.
*   **Microstructure:**
    *   **Grain Size:** Finer grain sizes generally lead to higher fatigue strength as they impede crack propagation.
    *   **Phase Constituents:** The presence of hard phases (e.g., carbides in steel) can improve fatigue resistance.
    *   **Heat Treatment:** Processes like quenching, tempering, and annealing significantly alter microstructure and thus fatigue properties. For example, hardening steels generally increases fatigue strength.
*   **Strength Level:** Higher tensile strength generally correlates with higher fatigue strength. However, this relationship is not linear and can be affected by other factors.
*   **Ductility:** While higher strength is often desired, excessive brittleness can lead to premature fatigue crack initiation. A balance is often sought.

**Example:** A hardened and tempered steel will have a significantly higher S-N curve (higher fatigue strength) compared to the same steel in its annealed state.

**Key Concept:** Material's inherent properties dictate its baseline fatigue performance.

**References:**

*   **Jones (1993):** Will likely discuss material selection for fatigue applications and the influence of material type.
*   **ASM Handbook Vol. 11 (2002):** This is an excellent resource for detailed data on fatigue properties of various engineering materials and the effects of processing.
*   **Collins (2013):** Will elaborate on how material science principles translate to fatigue behavior.

### 2.2 Surface Conditions

Surface condition is arguably one of the most critical factors affecting fatigue life, as fatigue cracks typically initiate at the surface.

*   **Surface Finish (Roughness):**
    *   **Rough Surfaces:** Stress concentrations at microscopic valleys and defects act as crack initiation sites, leading to a lower fatigue life. A rough surface will shift the S-N curve downwards.
    *   **Smooth Surfaces:** Polished surfaces reduce the likelihood of crack initiation and significantly improve fatigue life.
*   **Surface Treatments:**
    *   **Shot Peening/Peening:** Induces compressive residual stresses on the surface. Compressive stresses oppose tensile stresses in the applied load, making crack initiation and propagation more difficult. This can dramatically increase fatigue life, effectively shifting the S-N curve upwards.
    *   **Case Hardening (e.g., Carburizing, Nitriding):** Creates a hard, wear-resistant surface layer with high fatigue strength. These processes also often induce beneficial compressive residual stresses.
    *   **Plating/Coating:** The effect depends on the coating material and its adhesion. Some coatings can improve fatigue life, while others (especially brittle coatings under tension) can degrade it.
    *   **Machining Marks:** Scratches, tool marks, and burrs act as stress raisers.
*   **Surface Defects:**
    *   **Cracks:** Existing microcracks are direct starting points for fatigue crack growth.
    *   **Inclusions:** Non-metallic inclusions (e.g., sulfides, oxides) at the surface can act as initiation sites.
    *   **Voids/Pores:** Surface porosity or voids can act as stress concentrators.

**Example:** A smoothly polished steel rod tested under fatigue will have a significantly higher fatigue life than a rod with a rough machined surface at the same stress amplitude. Shot peening a component can extend its fatigue life by 50-200% or more.

**Key Concept:** The surface is the most vulnerable area for fatigue crack initiation; therefore, surface condition is paramount.

**References:**

*   **Jones (1993):** Will likely cover case studies where surface finish or treatments were crucial to failure or prevention.
*   **ASM Handbook Vol. 11 (2002):** Contains extensive information on surface treatments and their effects on fatigue.
*   **Collins (2013):** Will detail how surface treatments alter stress states and influence crack initiation.

### 2.3 Stress Concentration Factors

*   **Geometric Discontinuities:** Features like holes, notches, fillets, keyways, and threads create localized stress concentrations.
*   **Stress Concentration Factor ($K_t$):** A dimensionless factor that quantifies the ratio of the maximum local stress ($\sigma_{max}$) to the nominal or average stress ($\sigma_{nom}$) in a component. $\sigma_{max} = K_t \sigma_{nom}$.
*   **Effect on S-N Curves:**
    *   $K_t > 1$ leads to higher local stresses, promoting earlier crack initiation.
    *   For fatigue, it's more accurate to use the **Fatigue Stress Concentration Factor ($K_f$)**. $K_f$ is often less than $K_t$ due to the beneficial effects of plasticity at the notch root (which blunts the notch) and the fact that fatigue cracks initiate from small regions.
    *   The S-N curve for a notched component will lie below that of a smooth specimen at the same nominal stress. The reduction factor is often related to $K_f$.
*   **Notch Sensitivity:** Some materials are more sensitive to notches than others. This is related to material properties like ductility and grain size. Fine-grained, ductile materials tend to be less notch-sensitive.

**Example:** A shaft with a sharp fillet radius will have a much lower fatigue life than a shaft with a generous fillet radius, even if the nominal stress is the same. The sharp fillet has a higher $K_t$ and $K_f$.

**Key Concept:** Geometric discontinuities amplify local stresses, acting as artificial stress raisers and significantly reducing fatigue life.

**References:**

*   **Jones (1993):** Likely to feature examples of fatigue failures due to stress concentrations.
*   **Collins (2013):** Will dedicate significant sections to stress concentrations, $K_t$, and $K_f$, and their application in fatigue design.
*   **Kumar (1999):** While focused on fracture mechanics, the concept of stress singularities at crack tips is related, and Kumar might touch upon stress concentrations as origins of cracks.

### 2.4 Mean Stress

*   **Definition:** The steady, non-reversing component of the cyclic stress.
*   **Effect:** Mean stress has a significant impact on fatigue life.
    *   **Tensile Mean Stress:** Reduces fatigue life. It helps a crack open and propagate.
    *   **Compressive Mean Stress:** Increases fatigue life. It tends to close cracks or prevent them from forming.
*   **Fatigue Diagrams (e.g., Modified Goodman, Gerber, Soderberg):** These diagrams plot the alternating stress against the mean stress for a given fatigue life (or the fatigue limit). They show that as mean stress increases (in tension), the allowable alternating stress decreases.
*   **Surface Treatment Impact:** Surface treatments like shot peening introduce compressive residual stresses, which act as a negative mean stress, significantly improving fatigue performance.

**Example:** A component subjected to alternating tension-compression ($R = -1$) will have a higher fatigue life than the same component subjected to a load that cycles between zero and a maximum tensile stress ($R = 0$), even if the alternating stress amplitude is the same.

**Key Concept:** The presence of a tensile mean stress detrimental to fatigue life, while compressive mean stress is beneficial.

**References:**

*   **Jones (1993):** May discuss the influence of mean stress on specific failure case studies.
*   **ASM Handbook Vol. 11 (2002):** Will contain data and charts illustrating mean stress effects.
*   **Collins (2013):** Provides comprehensive coverage of mean stress effects and fatigue design diagrams.

### 2.5 Loading Type and Frequency

*   **Loading Type:**
    *   **Axial (Tension-Tension, Tension-Compression):** Standard for S-N curves.
    *   **Bending:** Generally results in higher fatigue lives than axial loading for the same maximum stress, as only the surface is subjected to the maximum stress.
    *   **Torsional:** Fatigue behavior under torsion can be different from axial or bending.
    *   **Combined Loading:** The most complex scenario, often requiring analysis of critical locations and failure criteria for mixed-mode fatigue.
*   **Frequency:** For typical engineering materials tested at room temperature, fatigue life is generally not significantly affected by the loading frequency in the range of 1 Hz to 1000 Hz. However, at very high frequencies or in specific environments, frequency can become a factor.
    *   **High-Frequency Effects:** Can lead to adiabatic heating, potentially affecting material properties and introducing thermal stress.
    *   **Environmental Effects at Low Frequencies:** In corrosive environments, longer exposure times at low frequencies can allow corrosion to interact with fatigue (corrosion fatigue).

**Example:** A component undergoing bending fatigue will typically survive more cycles than a component under axial fatigue at the same maximum stress.

**Key Concept:** The type of cyclic stress (axial, bending, torsion) influences the stress distribution and thus the fatigue behavior. Frequency is usually less critical unless thermal or environmental effects dominate.

**References:**

*   **Collins (2013):** Will discuss different loading modes and their impact on fatigue.
*   **ASM Handbook Vol. 11 (2002):** May have data for fatigue under different loading types.

### 2.6 Environmental Factors

*   **Corrosion Fatigue:** The combined action of cyclic stress and a corrosive environment.
    *   **Mechanism:** The corrosive medium can attack the metal surface, creating pits or localized corrosion damage that act as stress raisers. It can also participate in crack tip chemistry, accelerating crack growth.
    *   **Effect:** Leads to a dramatic reduction in fatigue life compared to testing in air. The "endurance limit" may disappear entirely in aggressive environments.
    *   **Severity:** Depends on the environment's corrosivity and the material's susceptibility.
*   **Temperature:**
    *   **Elevated Temperatures:** Can reduce fatigue strength due to creep-fatigue interaction. Materials soften, and creep deformation can occur, which may lead to crack initiation and growth mechanisms different from isothermal fatigue. Fatigue life generally decreases with increasing temperature.
    *   **Low Temperatures:** Can sometimes increase fatigue strength, but brittle fracture can become a concern if the ductile-to-brittle transition temperature is exceeded.
*   **Radiation:** Can alter material properties, leading to embrittlement and affecting fatigue resistance in nuclear applications.

**Example:** A steel component operating in a saltwater environment will experience significantly shorter fatigue life than a similar component operating in a dry, inert environment, even at the same stress amplitude.

**Key Concept:** External environments can synergistically degrade fatigue resistance, often by initiating damage that assists cyclic crack growth.

**References:**

*   **Jones (1993):** Likely to feature case studies involving corrosion fatigue or high-temperature failures.
*   **ASM Handbook Vol. 11 (2002):** Provides extensive information on corrosion fatigue and high-temperature fatigue behavior.
*   **Collins (2013):** Will cover environmental effects and their mechanisms in detail.
*   **CO4 Alignment:** This section directly addresses advanced failure mechanisms like corrosion and high-temperature effects.

## 3. Connecting Factors to S-N-P Curves

Each of the factors discussed above will **shift** or **modify** the S-N-P curve of a material.

*   **Higher strength material, polished surface, beneficial residual stresses, no stress concentration, or compressive mean stress:** These conditions will shift the S-N-P curve **upwards** (higher stress for a given life, or longer life at a given stress).
*   **Lower strength material, rough surface, tensile residual stresses, sharp notches, or tensile mean stress, corrosive environment:** These conditions will shift the S-N-P curve **downwards** (lower stress for a given life, or shorter life at a given stress).

**Important Point:** When designing for fatigue, it's crucial to consider the *worst-case scenario* for the intended application environment and manufacturing processes to ensure a sufficient probability of survival. This often involves applying **}$K_f$ (fatigue stress concentration factor) for geometry and **}$K_e$ (environmental/surface factor) to the baseline S-N curve.

## 4. Practice Questions and Exercises

**Question 1:**
Explain why an S-N-P curve is preferred over a simple S-N curve for critical engineering applications. (CO1, CO2)

**Answer 1:**
An S-N-P curve incorporates the probability of survival, acknowledging the inherent variability in material properties, manufacturing processes, and testing conditions. A simple S-N curve represents an average behavior. For critical applications where failure could have severe consequences (e.g., aircraft components, medical implants), designing based on a high probability of survival (e.g., 99%) ensures greater reliability and safety than relying on average life predictions.

**Question 2:**
List at least three factors that can significantly *reduce* the fatigue life of a steel component compared to its baseline S-N curve obtained from smooth specimens in a laboratory. (CO2)

**Answer 2:**
Three factors that can reduce fatigue life are:
1.  **Rough surface finish:** Acts as stress raisers, promoting crack initiation.
2.  **Tensile residual stresses:** Oppose applied tensile stress, making crack initiation and propagation easier.
3.  **Sharp geometric notches or holes:** Create high stress concentrations, leading to premature crack initiation.
4.  **Corrosive environment:** Damages the surface and accelerates crack growth.

**Question 3:**
A component is designed with a machined slot.
a) How would this slot affect the S-N curve compared to a smooth component of the same material? (CO2)
b) What is the term used to quantify this effect on fatigue strength, and how does it differ from a static stress concentration factor? (CO3)

**Answer 3:**
a) The machined slot, acting as a geometric discontinuity, will cause stress concentration, leading to a *downward shift* of the S-N curve. This means that for any given number of cycles, the allowable stress will be lower, or at any given stress level, the component will have a shorter fatigue life.

b) The term used to quantify this effect on fatigue strength is the **Fatigue Stress Concentration Factor ($K_f$)**. It differs from the static Stress Concentration Factor ($K_t$) because $K_f$ accounts for the blunting effect of localized plasticity at the notch root and the finite size of crack initiation sites, which make the material less sensitive to the sharp geometry than it would be under static loading. Thus, $K_f$ is generally less than $K_t$.

**Question 4:**
How does shot peening improve the fatigue life of a component? Relate your answer to the factors affecting S-N curves. (CO2)

**Answer 4:**
Shot peening improves fatigue life by introducing **beneficial compressive residual stresses** into the surface layer of the component. These compressive stresses counteract any applied tensile stresses during service, making it more difficult for fatigue cracks to initiate at the surface and harder for them to propagate once initiated. This effectively shifts the S-N curve upwards, increasing the allowable stress for a given fatigue life or extending the life at a given stress. It also improves surface finish to some extent.

**Question 5:**
Consider a component made of aluminum alloy. Will it likely have an endurance limit? Explain the implications for fatigue design. (CO1, CO2)

**Answer 5:**
Aluminum alloys typically **do not exhibit a distinct endurance limit**. Their S-N curves continue to decrease gradually with increasing cycles, albeit at a very shallow slope beyond a certain point. This means that theoretically, failure can occur at any stress level if enough cycles are applied. The implication for fatigue design is that instead of designing to an endurance limit, engineers must specify a **fatigue strength** at a very high number of cycles (e.g., $10^7$ or $10^8$ cycles) that is considered "infinite life" for the application. This requires careful selection of the design life and corresponding allowable stress.

## 5. Important Points to Remember

*   **S-N-P curves are fundamental for fatigue life prediction, incorporating statistical variability.**
*   **Surface condition is paramount:** Roughness, defects, and surface treatments significantly alter fatigue life.
*   **Stress concentrations** (quantified by $K_f$) dramatically reduce fatigue life.
*   **Mean stress effects** are critical: tensile mean stress is detrimental, compressive mean stress is beneficial.
*   **Material properties** (type, microstructure, strength) set the baseline fatigue resistance.
*   **Environmental factors** (corrosion, temperature) can severely degrade fatigue performance.
*   **Fatigue failures are often initiated at the surface** due to these combined factors.
*   **Aluminum alloys generally lack an endurance limit**, requiring design based on fatigue strength at a high number of cycles.

## 6. Alignment with Course Outcomes

*   **CO1 (Failure theories, material behavior):** Understanding S-N-P curves is core to understanding fatigue as a failure mechanism and material behavior under cyclic loads.
*   **CO2 (Fatigue loading, S-N-P curves, endurance diagrams):** This entire module is dedicated to these concepts. The factors discussed directly explain why fatigue life varies and how S-N-P curves are constructed and interpreted.
*   **CO3 (Fracture mechanics):** While this topic focuses on fatigue initiation and life prediction via S-N curves, the underlying mechanism of crack growth connects to fracture mechanics. Understanding stress concentration, for instance, is a bridge. Advanced fatigue analysis might use fracture mechanics to predict crack propagation life.
*   **CO4 (Advanced mechanisms):** Environmental factors (corrosion fatigue) and high-temperature effects are explicitly covered as factors influencing S-N-P curves, aligning directly with this outcome.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
