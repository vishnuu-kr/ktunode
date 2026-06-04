---
title: "Cumulative damage in low cycle fatigue"
subject: "FAILURE ANALYSIS AND DESIGN"
module: "Module 3: Low cycle fatigue"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1751d0cf4804463de3"
status: "completed"
scrapedAt: "2026-05-20T18:12:36.400Z"
---
# Module 3: Low Cycle Fatigue - Cumulative Damage in Low Cycle Fatigue

## 1. Introduction to Low Cycle Fatigue (LCF) and Cumulative Damage

**Low Cycle Fatigue (LCF)** is a phenomenon where a material fails after a relatively small number of load cycles, typically less than $10^4$ or $10^5$ cycles. This occurs when the applied stresses or strains exceed the material's yield strength, leading to significant plastic deformation in each cycle.

**Cumulative Damage** in LCF refers to the accumulation of plastic strain over multiple loading cycles, which eventually leads to crack initiation and propagation, culminating in failure. Unlike high cycle fatigue where stresses are typically below the yield strength, in LCF, the cyclic plastic deformation is the primary driver of damage.

**Relevance to Learning Outcomes:**
*   This topic directly addresses the understanding of material behavior under various loading conditions (LO 1).
*   It touches upon predicting life, which is a core aspect of fatigue analysis (LO 2).
*   It lays the groundwork for understanding how damage accumulates, a precursor to fracture mechanics (LO 3).
*   It also relates to understanding advanced failure mechanisms, as LCF is a distinct failure mode (LO 4).

**Alignment with Course Outcomes:**
*   **CO1 (K2):** Understand material behavior under various loading conditions, specifically cyclic plastic deformation in LCF.
*   **CO2 (K1):** While S-N curves are for HCF, the concept of life prediction is central, and LCF life is often described by strain-life relationships.
*   **CO3 (K3):** Understanding how damage accumulates is fundamental to applying fracture mechanics principles to fatigue crack growth.
*   **CO4 (K2):** LCF itself is an advanced failure mechanism, and understanding its cumulative damage aspect is crucial.

## 2. Key Concepts and Definitions in LCF Cumulative Damage

*   **Plastic Strain:** The permanent deformation that occurs when stress exceeds the yield strength. In LCF, this is a significant component of the cyclic loading.
*   **Strain-Controlled Fatigue:** Testing where the strain range is controlled, which is characteristic of LCF.
*   **Stress-Strain Hysteresis Loop:** A graphical representation of the stress-strain behavior of a material during a single loading-unloading cycle. In LCF, these loops often show significant plastic deformation.
*   **Cyclic Hardening/Softening:** Materials can either become stronger (harden) or weaker (soften) with repeated cyclic plastic deformation.
    *   **Cyclic Hardening:** Increases yield strength and reduces plastic strain amplitude.
    *   **Cyclic Softening:** Decreases yield strength and increases plastic strain amplitude.
*   **Damage Accumulation Models:** Mathematical models used to predict fatigue life based on the severity and number of applied load cycles.

**Textbook References:**
*   **Jones D. R. H. (1993), *Engineering Materials 3–Materials Failure Analysis: Case Studies and Design Implications*:** Likely discusses plastic deformation in fatigue and provides case studies relevant to LCF.
*   **Collins, J. A. (2013), *Failure of Materials in Mechanical Design* (2nd Edition):** Offers detailed explanations of fatigue mechanisms, including LCF and the role of plastic strain.
*   **ASM Handbook, Vol. 11 (2002), *Failure Analysis and Prevention*:** Contains practical information on fatigue failure analysis, which would include LCF scenarios and damage assessment.

## 3. Strain-Life (Coffin-Manson) Approach for LCF

The Coffin-Manson relationship is a fundamental concept for predicting LCF life. It directly relates the plastic strain range to the fatigue life.

**The Coffin-Manson Equation:**
$\Delta\epsilon_p / 2 = \epsilon_f' (2N_f)^c$

Where:
*   $\Delta\epsilon_p$: The fully reversed plastic strain range.
*   $\epsilon_f'$: The fatigue ductility coefficient (representing the plastic strain intercept at one reversal, $2N_f = 1$).
*   $2N_f$: The number of reversals to failure (a reversal is half a cycle, so $2N_f$ is the total number of half-cycles).
*   $c$: The fatigue ductility exponent (typically between -0.5 and -0.7 for metals).

**Total Strain Range:**
The total strain range ($\Delta\epsilon$) is the sum of the elastic and plastic strain ranges:
$\Delta\epsilon = \Delta\epsilon_e + \Delta\epsilon_p$

**Manson-Universality Relationship (Combining Elastic and Plastic Components):**
A more comprehensive approach combines the elastic and plastic components:
$\Delta\epsilon / 2 = (\sigma_f' / E) (2N_f)^b + \epsilon_f' (2N_f)^c$

Where:
*   $\Delta\epsilon / 2$: The plastic strain amplitude.
*   $\sigma_f'$: The fatigue strength coefficient.
*   $E$: Young's modulus.
*   $b$: The fatigue strength exponent.
*   $c$: The fatigue ductility exponent.

**How it relates to Cumulative Damage:**
The Coffin-Manson relationship implies that each cycle contributes a fixed amount of plastic strain damage. However, in reality, cyclic hardening or softening can alter the plastic strain range per cycle, making the damage accumulation non-linear.

**Example:**
Consider a component subjected to a constant plastic strain range. The Coffin-Manson relation suggests that the life will be determined by this constant strain range. If the material cyclically hardens, the plastic strain range might decrease over time, potentially extending the life beyond what the initial Coffin-Manson prediction suggests. Conversely, cyclic softening would reduce the life.

**Important Point to Remember:** The Coffin-Manson approach is primarily based on **strain amplitude**, and it is the **plastic strain component** that dictates LCF life.

## 4. Cumulative Damage Models for LCF

When a component is subjected to varying load amplitudes (and thus varying strain amplitudes), simple application of the Coffin-Manson law is insufficient. Cumulative damage models are needed.

### 4.1 Miner's Rule (Linear Damage Rule)

Miner's rule is the most basic cumulative damage rule, originally developed for high cycle fatigue but often adapted for LCF. It assumes that the damage from each load level is independent and linearly additive.

**Miner's Rule Equation:**
$\sum_{i=1}^{k} \frac{n_i}{N_i} = 1$

Where:
*   $n_i$: The number of cycles experienced at the $i$-th stress/strain level.
*   $N_i$: The fatigue life (number of cycles) at the $i$-th stress/strain level, determined from a strain-life curve (Coffin-Manson).
*   $k$: The total number of different load/strain levels.

**Application in LCF:**
For LCF, $N_i$ would be determined using the Coffin-Manson equation for each strain level $\Delta\epsilon_{p,i}$.

**Limitations of Miner's Rule for LCF:**
*   **Neglects the sequence of loading:** Assumes damage is independent of the order of applied loads.
*   **Assumes linear damage accumulation:** Ignores the effects of cyclic hardening or softening, which can alter the damage per cycle. For example, a few high-strain cycles followed by many low-strain cycles might be more damaging than the reverse sequence if the high-strain cycles cause significant hardening or softening.
*   **Doesn't account for crack growth interactions:** In LCF, crack initiation and propagation are closely linked, and Miner's rule treats them somewhat separately.

**Textbook Reference:**
*   **Collins, J. A. (2013), *Failure of Materials in Mechanical Design*:** Likely discusses Miner's rule and its limitations in detail, especially in the context of variable amplitude loading.

### 4.2 Modifications and Extensions to Miner's Rule

Given the limitations of the basic Miner's rule, several modifications have been proposed, although they are more complex to apply.

#### 4.2.1 Corten-Dolan Rule (Damage Curve)

This rule accounts for the fact that damage doesn't start until a certain number of cycles (an "initiation" period) and then increases more rapidly. It introduces a non-linear damage accumulation.

#### 4.2.2 Transition Approach (e.g., Modified Miner's Rule)

This approach recognizes that the damage rate might change significantly as the material transitions from crack initiation to crack propagation.

#### 4.2.3 Models Accounting for Cyclic Hardening/Softening

More advanced models try to incorporate the evolving material properties. For example, one could adjust the $N_i$ value for subsequent cycles if significant cyclic hardening or softening is observed.

**Example of considering cyclic softening:**
If a material exhibits significant cyclic softening, the plastic strain range in subsequent cycles will be larger than initially predicted. This means the effective $N_i$ for those later cycles will be shorter than the initial $N_i$ calculated based on the initial plastic strain range.

**Important Point to Remember:** Miner's rule is a good starting point for cumulative damage in LCF, but its validity is limited. For critical applications or when significant cyclic hardening/softening is expected, more sophisticated models or experimental data are required.

## 5. Factors Affecting Cumulative Damage in LCF

Several factors can influence how damage accumulates in LCF:

*   **Strain Amplitude Sequence:** As mentioned, the order of applied strain amplitudes significantly impacts cumulative damage due to cyclic hardening/softening and crack growth interactions.
    *   **Example:** A few high-amplitude cycles might cause significant plastic deformation, leading to crack initiation. Subsequent lower-amplitude cycles might then propagate this crack more effectively than if the low-amplitude cycles were applied first.
*   **Cyclic Stress-Strain Behavior:** The material's response to cyclic loading (hardening or softening) directly affects the plastic strain per cycle, and thus the damage accumulation rate.
*   **Mean Stress/Strain:** The presence of a mean stress or strain can influence fatigue crack initiation and growth, potentially affecting cumulative damage. A tensile mean stress generally reduces fatigue life.
*   **Temperature:** Elevated temperatures can lead to creep-fatigue interaction, significantly altering damage accumulation mechanisms and life. Creep can contribute to deformation and crack growth even at lower stress levels than would cause fatigue alone.
*   **Environment:** Corrosive environments can accelerate crack initiation and growth, leading to higher cumulative damage rates.
*   **Surface Finish and Residual Stresses:** Surface defects act as stress concentrators, promoting crack initiation. Residual stresses can either retard or accelerate crack growth, impacting cumulative damage.

**Textbook References:**
*   **Jones D. R. H. (1993), *Engineering Materials 3–Materials Failure Analysis: Case Studies and Design Implications*:** Case studies might illustrate the impact of environmental factors or surface conditions on fatigue failure.
*   **ASM Handbook, Vol. 11 (2002), *Failure Analysis and Prevention*:** Likely covers surface treatments and environmental effects on fatigue.
*   **Collins, J. A. (2013), *Failure of Materials in Mechanical Design*:** Will likely detail the effects of temperature, environment, and mean stress on fatigue behavior.
*   **Kumar, P. (1999), *Elements of Fracture Mechanics*:** While focused on fracture mechanics, it would provide background on how stress intensity factors (influenced by mean stress and crack size) affect crack growth rates, relevant to cumulative damage.

**Alignment with Course Outcomes:**
*   **LO 1 (K2):** Understanding these factors requires knowledge of how materials behave under different conditions.
*   **LO 2 (K1):** Some factors, like mean stress, are considered in S-N curves, but LCF has its own nuances.
*   **LO 3 (K3):** The influence of these factors on crack growth is directly related to fracture mechanics.
*   **LO 4 (K2):** Temperature and environmental effects are explicitly mentioned as advanced failure mechanisms.

## 6. Practice Questions and Exercises

**Question 1:**
A component is designed to withstand a certain number of load cycles. It is subjected to three blocks of loading:
*   Block 1: 10,000 cycles at a plastic strain range of $0.005$
*   Block 2: 5,000 cycles at a plastic strain range of $0.008$
*   Block 3: 20,000 cycles at a plastic strain range of $0.003$

Using the Coffin-Manson relationship, $\Delta\epsilon_p / 2 = \epsilon_f' (2N_f)^c$, with $\epsilon_f' = 0.4$ and $c = -0.6$:
a) Calculate the fatigue life ($2N_f$) for each strain range.
b) Using Miner's rule, estimate the total fatigue life of the component.

**Answer 1:**
a) **For Block 1 ($\Delta\epsilon_p = 0.005$):**
   $0.005 / 2 = 0.4 (2N_f)^(-0.6)$
   $0.0025 = 0.4 (2N_f)^(-0.6)$
   $(2N_f)^(-0.6) = 0.0025 / 0.4 = 0.00625$
   $2N_f = (0.00625)^(-1/0.6) = (0.00625)^(-1.6667)$
   $2N_f \approx 32,768$ cycles

**For Block 2 ($\Delta\epsilon_p = 0.008$):**
   $0.008 / 2 = 0.4 (2N_f)^(-0.6)$
   $0.004 = 0.4 (2N_f)^(-0.6)$
   $(2N_f)^(-0.6) = 0.004 / 0.4 = 0.01$
   $2N_f = (0.01)^(-1/0.6) = (0.01)^(-1.6667)$
   $2N_f \approx 15,157$ cycles

**For Block 3 ($\Delta\epsilon_p = 0.003$):**
   $0.003 / 2 = 0.4 (2N_f)^(-0.6)$
   $0.0015 = 0.4 (2N_f)^(-0.6)$
   $(2N_f)^(-0.6) = 0.0015 / 0.4 = 0.00375$
   $2N_f = (0.00375)^(-1/0.6) = (0.00375)^(-1.6667)$
   $2N_f \approx 65,536$ cycles

b) **Using Miner's Rule:**
   Damage from Block 1 ($D_1$) = $n_1 / N_1 = 10,000 / 32,768 \approx 0.305$
   Damage from Block 2 ($D_2$) = $n_2 / N_2 = 5,000 / 15,157 \approx 0.330$
   Damage from Block 3 ($D_3$) = $n_3 / N_3 = 20,000 / 65,536 \approx 0.305$

   Total Damage ($D_{total}$) = $D_1 + D_2 + D_3 = 0.305 + 0.330 + 0.305 = 0.940$

   According to Miner's rule, failure occurs when Total Damage = 1.
   If the component survives these blocks and then continues to be loaded at the same strain levels, it would fail after approximately $1 / 0.940$ times the total number of cycles experienced, which implies failure would occur in the next block of loading if the pattern repeated.
   However, a more direct interpretation is that the component has accumulated 0.940 units of damage.

**Question 2:**
Discuss the limitations of Miner's rule when applied to low cycle fatigue, especially considering potential cyclic hardening or softening of the material.

**Answer 2:**
Miner's rule assumes that the damage incurred in each cycle is constant and independent of the load history. In LCF:
1.  **Cyclic Hardening/Softening:** If a material cyclically hardens, the plastic strain range per cycle decreases over time, making the damage accumulation less severe than predicted by Miner's rule (using initial $N_i$). Conversely, if it softens, the plastic strain range increases, accelerating damage and leading to premature failure compared to Miner's prediction.
2.  **Load Sequence Effects:** The order of loading matters. A few high-strain cycles that initiate cracks may be followed by lower-strain cycles. These low-strain cycles might propagate the existing cracks more effectively than if the low-strain cycles were applied first, leading to a higher actual damage accumulation. Miner's rule ignores these sequence effects.
3.  **Interaction Effects:** Microstructural changes occurring during fatigue damage can interact. For instance, dislocations generated during early cycles can influence the behavior in later cycles.

**Question 3:**
Explain the significance of the fatigue ductility coefficient ($\epsilon_f'$) and the fatigue ductility exponent ($c$) in the Coffin-Manson relationship.

**Answer 3:**
*   **Fatigue Ductility Coefficient ($\epsilon_f'$):** This parameter represents the plastic strain amplitude at failure when the fatigue life is one reversal ($2N_f = 1$). It is essentially the intercept of the plastic strain-life curve on the strain axis. A higher $\epsilon_f'$ indicates a greater capacity of the material to withstand plastic deformation before failure, implying higher ductility.
*   **Fatigue Ductility Exponent ($c$):** This parameter dictates the slope of the plastic strain-life curve on a log-log plot. It is typically negative, indicating that as the plastic strain range increases, the fatigue life decreases. The value of $c$ (usually between -0.5 and -0.7 for metals) quantifies how sensitive the fatigue life is to changes in plastic strain. A more negative exponent means that even small increases in plastic strain lead to a significant reduction in fatigue life.

**Important Point to Remember:** These coefficients ($\epsilon_f'$ and $c$) are material-specific properties determined through strain-controlled fatigue testing and are crucial for accurately predicting LCF life using the Coffin-Manson approach.

## 7. Important Points to Remember for Cumulative Damage in LCF

*   **LCF is dominated by plastic strain:** Unlike HCF, where elastic strain is dominant, LCF life is governed by the magnitude of cyclic plastic strain.
*   **Coffin-Manson is the cornerstone:** The strain-life approach (Coffin-Manson) is the primary method for predicting LCF life.
*   **Variable amplitude loading requires cumulative damage models:** For realistic loading scenarios, models like Miner's rule are necessary to sum damage from different strain levels.
*   **Miner's rule has significant limitations in LCF:** Be aware of its shortcomings regarding load sequence, cyclic hardening/softening, and interaction effects.
*   **Cyclic hardening/softening fundamentally alters damage:** These phenomena can significantly affect the plastic strain per cycle and therefore the cumulative damage rate.
*   **Temperature and environment are critical:** For many applications, these factors can interact with LCF mechanisms and dramatically change the cumulative damage and overall fatigue life.

This comprehensive set of notes should provide a solid foundation for understanding cumulative damage in low cycle fatigue, covering the key concepts, predictive models, influencing factors, and practical considerations.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
