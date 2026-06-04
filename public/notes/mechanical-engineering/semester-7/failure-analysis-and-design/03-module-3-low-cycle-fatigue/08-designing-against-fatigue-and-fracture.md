---
title: "Designing against fatigue and fracture"
subject: "FAILURE ANALYSIS AND DESIGN"
module: "Module 3: Low cycle fatigue"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1751d0cf4804463de9"
status: "completed"
scrapedAt: "2026-05-20T18:12:40.585Z"
---
# Module 3: Low Cycle Fatigue - Designing Against Fatigue and Fracture

This module focuses on understanding and preventing material failure due to fatigue, particularly under conditions involving significant plastic deformation (low cycle fatigue), and the application of fracture mechanics principles for designing against crack growth.

---

## 1. Introduction to Fatigue Design

Fatigue is a progressive and localized structural damage process that occurs when a material is subjected to cyclic loading. It is a leading cause of mechanical failure in engineering components. Designing against fatigue involves understanding the mechanisms of fatigue crack initiation and propagation and implementing strategies to prevent or delay failure.

**Key Concepts:**

*   **Fatigue:** Failure under repeated or fluctuating stresses that have a maximum value lower than the ultimate tensile strength of the material.
*   **Stress Concentration:** Localized increases in stress that occur at geometric discontinuities (e.g., holes, notches, sharp corners). These are critical sites for fatigue crack initiation.
*   **Cyclic Loading:** Loading that varies in magnitude, direction, or both, over time.
*   **Stress Amplitude ($\sigma_a$):** Half the range of applied stress. $\sigma_a = (\sigma_{max} - \sigma_{min}) / 2$.
*   **Mean Stress ($\sigma_m$):** The average of the maximum and minimum applied stress. $\sigma_m = (\sigma_{max} + \sigma_{min}) / 2$.
*   **Stress Ratio (R):** The ratio of minimum stress to maximum stress. $R = \sigma_{min} / \sigma_{max}$.
*   **Fatigue Life (N):** The number of stress cycles a material can withstand before failure.
*   **Endurance Limit/Fatigue Limit:** The stress amplitude below which a material can theoretically endure an infinite number of load cycles without fatigue failure. This is characteristic of ferrous alloys.
*   **Fatigue Strength:** The stress amplitude at which a material will fail after a specified number of cycles.

**Textbook References:**

*   **Jones D. R. H. (1993):** Likely discusses case studies involving fatigue failures and design implications. Focuses on macroscopic aspects.
*   **ASM Handbook Vol. 11 (2002):** Provides comprehensive data on fatigue properties of various materials and failure analysis techniques. Essential for practical design data.
*   **Collins, J. A. (2013):** Offers in-depth coverage of failure mechanisms and design principles, including fatigue.
*   **Kumar, P. (1999):** Focuses on fracture mechanics, which is crucial for designing against crack propagation.

---

## 2. Low Cycle Fatigue (LCF)

LCF occurs when components are subjected to repeated loads that cause significant plastic deformation in localized regions during each cycle. This typically happens in applications with relatively low cycle numbers but high stress/strain amplitudes, such as aircraft engine components, pressure vessels, and automotive parts operating under severe conditions.

**Key Concepts:**

*   **Strain-Controlled Fatigue:** In LCF, the applied load is often controlled by strain rather than stress.
*   **Plastic Strain:** In LCF, the stress-strain hysteresis loop exhibits a significant plastic component.
*   **Coﬃn-Manson Relationship:** An empirical relationship describing the fatigue life in LCF based on plastic strain amplitude.
    $\epsilon_{a,p} = \epsilon_f' (2N_f)^c$
    Where:
    *   $\epsilon_{a,p}$ is the plastic strain amplitude.
    *   $\epsilon_f'$ is the fatigue ductility coefficient (related to fracture ductility).
    *   $N_f$ is the number of cycles to failure.
    *   $c$ is the fatigue ductility exponent (typically between -0.5 and -0.7).
*   **Total Strain Amplitude ($\epsilon_a$):** The sum of elastic and plastic strain amplitudes.
    $\epsilon_a = \epsilon_{a,e} + \epsilon_{a,p}$
    $\epsilon_a = \frac{\sigma_a}{E} + \epsilon_{a,p}$
    Where $E$ is the Young's modulus.
*   **Modiﬁed Coﬃn-Manson Relationship:** Relates total strain amplitude to fatigue life.
    $\epsilon_a = \epsilon_f' (2N_f)^c + \frac{\sigma_f'}{E} (2N_f)^b$
    Where:
    *   $\epsilon_f'$ is the fatigue ductility coefficient.
    *   $c$ is the fatigue ductility exponent.
    *   $\sigma_f'$ is the fatigue strength coefficient.
    *   $b$ is the fatigue strength exponent (related to work hardening).

**Textbook References:**

*   **Collins, J. A. (2013):** Likely provides detailed treatment of strain-based fatigue and the Coﬃn-Manson relationship.
*   **Jones D. R. H. (1993):** May present case studies involving LCF failures.

**Learning Outcomes Covered:**

*   **CO1:** Understanding material behavior under cyclic loading with plastic deformation.
*   **CO2:** Remembering parameters relevant to LCF life prediction (strain amplitude, Coﬃn-Manson parameters).

---

## 3. Designing Against Fatigue

Effective fatigue design aims to prevent crack initiation, arrest crack growth, or ensure that any crack grows to a detectable size before catastrophic failure.

**Strategies for Fatigue Design:**

1.  **Material Selection:**
    *   Choose materials with high fatigue strength and ductility.
    *   Consider the presence of an endurance limit for high-cycle fatigue applications.
    *   Materials with higher fracture toughness are generally more resistant to fatigue crack propagation.
    *   **Reference:** ASM Handbook Vol. 11 provides extensive fatigue data for various materials.

2.  **Geometry Optimization (Stress Concentration Reduction):**
    *   **Fillets and Radii:** Introduce generous radii at corners and transitions to reduce stress concentrations.
    *   **Avoid Sharp Notches:** Minimize sharp re-entrant angles.
    *   **Smooth Surfaces:** Surface finish plays a crucial role; rough surfaces act as crack initiation sites.
    *   **Example:** Replacing a sharp corner in a shaft with a large fillet radius can significantly increase fatigue life.
    *   **Textbook Reference:** Jones D. R. H. (1993) likely details how geometric discontinuities influence fatigue.

3.  **Surface Treatments:**
    *   **Shot Peening:** Induces compressive residual stresses on the surface, which suppress crack initiation and propagation.
    *   **Nitriding/Carburizing:** Creates a hard, wear-resistant surface layer with beneficial residual stresses.
    *   **Polishing:** Improves surface finish and removes surface defects.
    *   **Textbook Reference:** ASM Handbook Vol. 11 often covers surface engineering techniques for fatigue life enhancement.

4.  **Load Reduction and Control:**
    *   **Reduce Stress Amplitude:** The most effective way to increase fatigue life.
    *   **Control Mean Stress:** Tensile mean stresses generally reduce fatigue life, while compressive mean stresses increase it.
    *   **Minimize Vibrations:** Unwanted cyclic loading can lead to fatigue.
    *   **Reference:** Collins, J. A. (2013) discusses load management in design.

5.  **Life Prediction Methods:**
    *   **S-N Curves (Stress-Life):** Used for High Cycle Fatigue (HCF). Relates stress amplitude to cycles to failure.
    *   **Strain-Life Curves (ε-N Curves):** Used for Low Cycle Fatigue (LCF). Relates strain amplitude (elastic and plastic) to cycles to failure.
    *   **Fracture Mechanics Approach:** Used for fatigue crack propagation analysis.

**Learning Outcomes Covered:**

*   **CO1:** Understanding the influence of material properties and loading on fatigue life.
*   **CO2:** Applying S-N-P curves and endurance diagrams for life prediction in HCF.
*   **CO3:** (Foundation for) Designing against crack initiation.

---

## 4. Fracture Mechanics and Designing Against Fracture

Fracture mechanics provides a quantitative approach to understanding crack initiation and propagation, allowing engineers to design components that can tolerate existing flaws or predict the remaining life of a cracked structure.

**Key Concepts:**

*   **Fracture:** The separation of a body into two or more parts under the action of applied stresses.
*   **Crack:** A pre-existing discontinuity in the material.
*   **Stress Intensity Factor (K):** A parameter that quantifies the stress field at the crack tip. It is a function of applied stress, crack size, and geometry.
    *   **Mode I (Opening Mode):** Occurs when the crack surfaces move directly apart.
    *   **Mode II (Shearing Mode):** Occurs when the crack surfaces slide over each other in a direction perpendicular to the crack front.
    *   **Mode III (Tearing Mode):** Occurs when the crack surfaces slide over each other in a direction parallel to the crack front.
    *   For Mode I, the stress intensity factor is given by: $K_I = Y \sigma \sqrt{\pi a}$
        Where:
        *   $Y$ is a geometry-dependent factor.
        *   $\sigma$ is the applied nominal stress.
        *   $a$ is the crack length.

*   **Fracture Toughness ($K_{IC}$):** The critical stress intensity factor at which a crack will propagate unstably in a brittle fracture mode (Mode I). It is a material property.
    *   Failure occurs when $K_I \ge K_{IC}$.

*   **Crack Propagation:** The gradual growth of a crack under cyclic loading (fatigue crack growth) or static loading (if $K_I$ reaches $K_{IC}$).

*   **Fatigue Crack Growth Rate (da/dN):** The rate at which a fatigue crack grows per applied stress cycle. This is often described by **Paris' Law**:
    $\frac{da}{dN} = C (\Delta K)^m$
    Where:
    *   $a$ is the crack length.
    *   $N$ is the number of cycles.
    *   $\Delta K$ is the range of the stress intensity factor ($\Delta K = Y \Delta \sigma \sqrt{\pi a}$).
    *   $C$ and $m$ are material constants, determined experimentally.

*   **Threshold Stress Intensity Factor Range ($\Delta K_{th}$):** The minimum stress intensity factor range below which fatigue cracks do not propagate.

*   **Critical Crack Length ($a_c$):** The maximum crack size a structure can tolerate before catastrophic fracture occurs, given the applied stress and fracture toughness.
    $K_{IC} = Y \sigma \sqrt{\pi a_c}$
    $a_c = \frac{1}{\pi} \left( \frac{K_{IC}}{Y \sigma} \right)^2$

*   **Safe Life Design:** Design for a life where no crack initiates.
*   **Fail-Safe Design:** Design with redundant load paths so that failure of one component does not lead to catastrophic failure of the entire structure.
*   **Damage Tolerant Design:** Design to ensure that even if cracks exist or initiate, they will grow at a slow, detectable rate, allowing for inspection and repair before critical failure. This is the most common approach for fatigue-sensitive structures.

**Textbook References:**

*   **Kumar, P. (1999):** This is the primary resource for fracture mechanics principles, covering stress intensity factors, fracture toughness, and crack growth.
*   **Collins, J. A. (2013):** Likely integrates fracture mechanics concepts into broader failure analysis and design.
*   **Jones D. R. H. (1993):** Case studies might illustrate fracture mechanics principles in real-world failures.

**Learning Outcomes Covered:**

*   **CO3:** Apply principles of fracture mechanics to analyze and design against crack initiation and propagation.
*   **CO1:** Understand material behavior (fracture toughness) under fracture conditions.

---

## 5. Advanced Failure Mechanisms and Design Considerations

Beyond basic fatigue and fracture, other mechanisms can influence component life, especially in demanding applications.

**Key Concepts:**

*   **Contact Fatigue (Rolling Contact Fatigue):** Occurs in components subjected to repeated contact stresses, such as bearings and gears. Characterized by subsurface crack initiation and spalling or pitting on the surface.
    *   **Subsurface Cracks:** Often initiate at inclusions or material defects below the surface where shear stresses are highest.
    *   **Surface Cracks:** Can initiate due to adhesion and shear stresses at the contact interface.
    *   **Design Considerations:** Material cleanliness, surface hardness, lubrication, and reduction of contact pressure.
    *   **Reference:** ASM Handbook Vol. 11 provides detailed information on contact fatigue.

*   **High-Temperature Effects:**
    *   **Creep:** Time-dependent plastic deformation under sustained stress at elevated temperatures.
    *   **Creep-Fatigue Interaction:** Cyclic loading at high temperatures can lead to accelerated fatigue crack growth due to creep mechanisms.
    *   **Thermal Fatigue:** Cyclic plastic deformation caused by thermal expansion and contraction during repeated heating and cooling cycles.
    *   **Oxidation and Embrittlement:** High temperatures can degrade material properties through oxidation or internal embrittlement.
    *   **Design Considerations:** Selection of high-temperature alloys, consideration of creep-fatigue life prediction models, thermal stress analysis.
    *   **Reference:** Collins, J. A. (2013) and Jones D. R. H. (1993) might discuss failures in high-temperature environments.

*   **Corrosion Fatigue:** Fatigue crack initiation and propagation accelerated by a corrosive environment.
    *   **Mechanism:** Corrosion products can wedge open crack tips, increasing the effective stress intensity factor, or the environment can directly attack the crack tip.
    *   **Design Considerations:** Material selection (corrosion-resistant alloys), protective coatings, cathodic protection, control of the corrosive environment.
    *   **Reference:** ASM Handbook Vol. 11 and Collins, J. A. (2013) cover corrosion fatigue.

*   **Environmental Degradation:** Beyond corrosion, other environmental factors like humidity, chemical exposure, or radiation can impact material properties and fatigue life.

**Learning Outcomes Covered:**

*   **CO4:** Understand advanced failure mechanisms (contact fatigue, high-temperature effects, corrosion) and their impact on design.

---

## 6. Important Points to Remember

*   **Fatigue is a critical failure mode:** It is responsible for a significant percentage of mechanical failures.
*   **Stress concentrations are critical:** They are the primary sites for fatigue crack initiation. Always design to minimize them.
*   **LCF is strain-driven:** Focus on controlling strain ranges in LCF analysis.
*   **Fracture mechanics is essential for crack growth:** It allows for quantitative prediction of fatigue life and safe operating limits.
*   **Damage tolerance is key:** Design structures to accommodate flaws and allow for inspection.
*   **Surface condition matters:** Surface finish and residual stresses (e.g., from shot peening) significantly influence fatigue life.
*   **Environment plays a role:** Corrosion and high temperatures can drastically alter fatigue behavior.
*   **No single theory covers all cases:** A combination of approaches (S-N, strain-life, fracture mechanics) is often needed for comprehensive fatigue design.

---

## 7. Practice Questions and Exercises

**Question 1 (CO2):**
A component is subjected to a fully reversed axial stress of 250 MPa. The material has a fatigue strength coefficient $\sigma_f' = 550$ MPa and a fatigue strength exponent $b = -0.12$. Estimate the fatigue life of the component using the fatigue strength component of the modified Coﬃn-Manson relation. (Assume plastic strain component is negligible in this HCF regime).

*   **Answer:**
    The relationship for HCF is often approximated as $\sigma_a = \sigma_f'(2N_f)^b$.
    Here, $\sigma_a = 250$ MPa, $\sigma_f' = 550$ MPa, $b = -0.12$.
    $250 = 550 (2N_f)^{-0.12}$
    $\frac{250}{550} = (2N_f)^{-0.12}$
    $0.4545 = (2N_f)^{-0.12}$
    Take the reciprocal of both sides:
    $\frac{1}{0.4545} = (2N_f)^{0.12}$
    $2.20 = (2N_f)^{0.12}$
    To solve for $2N_f$, raise both sides to the power of $(1/0.12)$:
    $(2.20)^{1/0.12} = 2N_f$
    $(2.20)^{8.333} = 2N_f$
    $2N_f \approx 15860$ cycles.
    So, the fatigue life $N_f \approx 7930$ cycles.

**Question 2 (CO3):**
A plate with a central crack of length $2a = 40$ mm is subjected to a uniform tensile stress $\sigma = 150$ MPa. The material has a fracture toughness $K_{IC} = 50 \text{ MPa}\sqrt{\text{m}}$. The geometry factor for this crack configuration is $Y = 1.0$. Determine if the plate will fracture. If not, calculate the critical crack length for fracture under the same stress.

*   **Answer:**
    Given: $2a = 40$ mm, so $a = 20$ mm $= 0.02$ m.
    $\sigma = 150$ MPa $= 150 \times 10^6$ Pa.
    $K_{IC} = 50 \text{ MPa}\sqrt{\text{m}} = 50 \times 10^6 \text{ Pa}\sqrt{\text{m}}$.
    $Y = 1.0$.

    First, calculate the current stress intensity factor $K_I$:
    $K_I = Y \sigma \sqrt{\pi a}$
    $K_I = 1.0 \times (150 \times 10^6 \text{ Pa}) \times \sqrt{\pi \times 0.02 \text{ m}}$
    $K_I = 150 \times 10^6 \times \sqrt{0.06283} \text{ Pa}\sqrt{\text{m}}$
    $K_I = 150 \times 10^6 \times 0.25066 \text{ Pa}\sqrt{\text{m}}$
    $K_I \approx 37.6 \times 10^6 \text{ Pa}\sqrt{\text{m}} = 37.6 \text{ MPa}\sqrt{\text{m}}$

    Compare $K_I$ with $K_{IC}$:
    $37.6 \text{ MPa}\sqrt{\text{m}} < 50 \text{ MPa}\sqrt{\text{m}}$.
    Since $K_I < K_{IC}$, the plate will **not** fracture under the current conditions.

    Now, calculate the critical crack length $a_c$ for fracture:
    $K_{IC} = Y \sigma \sqrt{\pi a_c}$
    $a_c = \frac{1}{\pi} \left( \frac{K_{IC}}{Y \sigma} \right)^2$
    $a_c = \frac{1}{\pi} \left( \frac{50 \times 10^6 \text{ Pa}\sqrt{\text{m}}}{1.0 \times (150 \times 10^6 \text{ Pa})} \right)^2$
    $a_c = \frac{1}{\pi} \left( \frac{50}{150} \right)^2$
    $a_c = \frac{1}{\pi} \left( \frac{1}{3} \right)^2$
    $a_c = \frac{1}{\pi} \times \frac{1}{9}$
    $a_c \approx \frac{1}{3.14159 \times 9}$
    $a_c \approx \frac{1}{28.274} \text{ m}$
    $a_c \approx 0.03536 \text{ m} = 35.36 \text{ mm}$

    The critical crack length is approximately 35.36 mm. Since the current crack length is 20 mm, there is still significant margin before fracture. The critical total crack length ($2a_c$) would be approximately 70.72 mm.

**Question 3 (CO4):**
Briefly describe one major design consideration for components subjected to contact fatigue.

*   **Answer:**
    A major design consideration for components subjected to contact fatigue is **material cleanliness and surface integrity**. Subsurface cracks, which are a common initiation site for contact fatigue (leading to spalling), often initiate at internal material defects such as inclusions, voids, or grain boundaries. Therefore, using cleaner materials with fewer internal defects and ensuring a smooth, defect-free surface finish can significantly improve resistance to contact fatigue. Proper heat treatment to achieve the desired hardness profile also plays a crucial role.

---

This concludes the notes for "Designing Against Fatigue and Fracture" in Module 3: Low Cycle Fatigue. Remember to consult the provided textbooks for more detailed examples and specific material data.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
