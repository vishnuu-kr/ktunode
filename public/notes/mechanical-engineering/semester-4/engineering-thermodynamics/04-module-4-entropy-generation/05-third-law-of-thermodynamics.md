---
title: "Third law of thermodynamics"
subject: "ENGINEERING THERMODYNAMICS"
module: "Module 4: Entropy generation"
branch: "Mechanical Engineering"
semester: 4
topicId: "68a3fd1351d0cf4804462f6e"
status: "completed"
scrapedAt: "2026-05-20T17:53:49.422Z"
---
# ENGINEERING THERMODYNAMICS: MODULE 4 - ENTROPY GENERATION

## TOPIC: THIRD LAW OF THERMODYNAMICS

This topic delves into the Third Law of Thermodynamics, its implications for reaching absolute zero temperature, and its connection to entropy generation.

---

### LEARNING OUTCOMES

Upon successful completion of this topic, you will be able to:

*   **State the Third Law of Thermodynamics and its implications.** (CO1, CO2 - K1)
*   **Explain the concept of absolute zero temperature and its unattainability.** (CO1, CO2 - K1, K2)
*   **Define and calculate the entropy of pure substances at absolute zero.** (CO4 - K3)
*   **Understand the significance of entropy generation in relation to the Third Law.** (CO1, CO4 - K2)
*   **Relate the Third Law to the behavior of systems at very low temperatures.** (CO1, CO2 - K2)

---

### 1. INTRODUCTION TO THE THIRD LAW OF THERMODYNAMICS

The Third Law of Thermodynamics deals with the behavior of systems as they approach absolute zero temperature. It provides a reference point for entropy and helps us understand the ultimate limits of thermodynamic processes.

**Key Concept:** The Third Law establishes the value of entropy at absolute zero.

**Source Reference:**
*   Cengel, Boles, & Kanoğlu (2011), Chapter 12: Entropy
*   P.K. Nag (2017), Chapter 7: Third Law of Thermodynamics

---

### 2. STATEMENTS OF THE THIRD LAW

There are several equivalent statements of the Third Law of Thermodynamics. Two of the most common are:

*   **Planck's Statement:** "The entropy of a perfect crystal at absolute zero temperature is zero."
    *   **Perfect Crystal:** A crystalline solid where all atoms or molecules are arranged in a perfectly ordered, repeating pattern. There is only one possible microscopic arrangement (microstate) for such a system.
    *   **Absolute Zero Temperature (0 Kelvin or -273.15 °C):** The theoretical temperature at which all molecular motion ceases.

*   **Nernst's Statement (or the Heat Theorem):** "It is impossible by any procedure, no matter how idealized, to reduce any system to absolute zero in a finite number of operations."
    *   This statement highlights the unattainability of absolute zero. As a system approaches absolute zero, the amount of work required to further decrease its temperature increases infinitely.

**Key Concepts:**
*   **Perfect Crystal:** Zero entropy at 0 K.
*   **Absolute Zero (0 K):** The theoretical minimum temperature.
*   **Unattainability of Absolute Zero:** A fundamental limitation.

**Source Reference:**
*   Cengel, Boles, & Kanoğlu (2011), Chapter 12.
*   P.K. Nag (2017), Chapter 7.
*   Sonntag, Borgnakke, & VanWylen (2014), Chapter 12.

---

### 3. IMPLICATIONS OF THE THIRD LAW

The Third Law has significant implications for thermodynamics and the behavior of matter at low temperatures.

**3.1. The Absolute Scale of Entropy**

*   The Third Law provides a **reference point for entropy**. Before the Third Law, entropy was defined relative to an arbitrary constant (similar to how internal energy and enthalpy have arbitrary zero points).
*   By setting the entropy of a perfect crystal at absolute zero to be zero ($S = 0$ at $T = 0$ K), we can define an **absolute entropy scale**.
*   This allows for the calculation of **absolute entropy values** for substances at various temperatures and pressures.

**3.2. Unattainability of Absolute Zero**

*   As stated by Nernst, absolute zero is unattainable. This is a crucial point.
*   **Why is it unattainable?** As a system approaches 0 K, its entropy approaches a minimum value (zero for a perfect crystal). To extract more heat and further lower the temperature, one would need to extract infinitesimal amounts of energy while the system is already at a state of minimal disorder. This becomes increasingly difficult and requires infinite steps or infinite resources.

**3.3. Behavior of Specific Heat at Absolute Zero**

*   For any substance in a stable thermodynamic equilibrium, its **specific heat capacity approaches zero as the temperature approaches absolute zero** ($c_p \to 0$ as $T \to 0$ K, and $c_v \to 0$ as $T \to 0$ K).
*   This is consistent with the idea that molecular motion is ceasing.
*   This behavior is crucial for calculating absolute entropy values.

**3.4. Calculation of Absolute Entropy**

The absolute entropy of a substance at a given temperature $T$ and pressure $P$ can be calculated by integrating the specific heat capacity from absolute zero up to the desired state.

*   **For solids:**
    $S(T) = S(0 \, \text{K}) + \int_{0}^{T} c_p \, d(\ln T)$
    Since $S(0 \, \text{K}) = 0$ for a perfect crystal:
    $S(T) = \int_{0}^{T} c_p \, \frac{dT}{T}$

    *   This integration needs to account for any phase changes (e.g., melting, solid-solid transformations) that occur between 0 K and $T$. The entropy change during a phase change at temperature $T_{tr}$ is given by $\Delta S = \frac{h_{tr}}{T_{tr}}$, where $h_{tr}$ is the latent heat of transformation.

*   **For liquids and gases:**
    The calculation becomes more complex as it needs to include the entropy of fusion (melting) and vaporization, as well as the temperature dependence of specific heats for each phase.

    $S(T) = S_{solid}(T_{melt}) + \frac{h_{fusion}}{T_{melt}} + S_{liquid}(T_{boil}) + \frac{h_{vaporization}}{T_{boil}} + \int_{T_{boil}}^{T} c_{p,gas} \, \frac{dT}{T}$

**Key Concepts:**
*   **Absolute Entropy Scale:** Entropy values relative to zero at 0 K.
*   **Specific Heat Capacity:** Approaches zero as $T \to 0$ K.
*   **Phase Transitions:** Entropy changes associated with melting, vaporization, etc.

**Source Reference:**
*   Cengel, Boles, & Kanoğlu (2011), Chapter 12.
*   P.K. Nag (2017), Chapter 7.
*   Moran & Shapiro (2006), Chapter 10.
*   Sonntag, Borgnakke, & VanWylen (2014), Chapter 12.

---

### 4. ENTROPY GENERATION AND THE THIRD LAW

While the Third Law primarily sets a baseline for entropy, it also informs our understanding of entropy generation in real processes.

*   **Irreversible Processes and Entropy Generation:** All real-world processes are irreversible to some extent, leading to entropy generation. The entropy of the universe ($S_{universe}$) always increases in any real process: $\Delta S_{universe} = \Delta S_{system} + \Delta S_{surroundings} > 0$.
*   **Approaching Absolute Zero and Entropy Generation:** As a system approaches absolute zero, the ability to generate entropy through irreversible processes diminishes. This is because the available energy to drive these processes becomes extremely limited.
*   **Minimum Entropy at 0 K:** The Third Law implies that systems strive towards a state of minimum entropy (zero for a perfect crystal) as they approach absolute zero. This is the state of perfect order.

**Key Concept:** The Third Law provides the "ground truth" for entropy, which is zero at absolute zero for perfect crystals. This helps in quantifying the entropy generated in any process relative to this baseline.

**Source Reference:**
*   Cengel, Boles, & Kanoğlu (2011), Chapter 6 (Entropy Generation).

---

### 5. CONCEPTS RELATED TO THE THIRD LAW

**5.1. Statistical Interpretation of Entropy**

*   From a statistical mechanics perspective, entropy ($S$) is related to the number of possible microscopic arrangements (microstates, $\Omega$) of a system that correspond to a given macroscopic state:
    $S = k \ln \Omega$
    where $k$ is the Boltzmann constant ($1.3806 \times 10^{-23}$ J/K).
*   For a perfect crystal at absolute zero, there is only one possible microstate ($\Omega = 1$). Therefore, $S = k \ln(1) = 0$. This provides a microscopic justification for the Third Law.

**5.2. Uniqueness of the Ground State**

*   The Third Law implies that at absolute zero, the system settles into its unique lowest energy state (ground state).
*   If a substance has multiple possible lowest energy states (e.g., due to structural disorder that persists even at 0 K), it is said to have a "residual entropy."

**5.3. Third Law Violations (Hypothetical)**

*   While absolute zero is unattainable, theoretical scenarios where the Third Law might be violated are generally considered in contexts of highly non-equilibrium or exotic states of matter. For standard thermodynamic analysis, the Third Law holds.

**Key Concepts:**
*   **Boltzmann Constant:** Relates microscopic and macroscopic properties.
*   **Microstates and Macrostates:** Statistical basis of entropy.
*   **Ground State:** Lowest energy state of a system.
*   **Residual Entropy:** Entropy remaining at 0 K due to disorder.

**Source Reference:**
*   Cengel, Boles, & Kanoğlu (2011), Chapter 12.
*   Moran & Shapiro (2006), Chapter 10.
*   Sonntag, Borgnakke, & VanWylen (2014), Chapter 12.
*   Ansermet & Brechet (2019), Chapter 3.

---

### 6. EXAMPLES

**Example 1: Absolute Entropy of a Perfect Crystal**

*   **Problem:** Consider a hypothetical perfect crystal of a monatomic substance at 0 K. What is its entropy?
*   **Solution:** According to the Third Law (Planck's statement), the entropy of a perfect crystal at absolute zero is zero.
    $S_{crystal}(0 \, \text{K}) = 0 \, \text{J/(mol} \cdot \text{K)}$
    This corresponds to a single microstate ($\Omega=1$), as all atoms are in their designated, fixed positions.

**Example 2: Entropy Change of a Solid**

*   **Problem:** Calculate the absolute entropy of solid aluminum at 298 K, given that its specific heat at constant pressure can be approximated by $c_p(T) = aT^3$, where $a = 3.1 \times 10^{-5} \, \text{J/(mol} \cdot \text{K}^4)$. Assume aluminum is a perfect crystal down to 0 K.
*   **Solution:**
    We use the formula for absolute entropy of a solid:
    $S(T) = \int_{0}^{T} c_p \, \frac{dT}{T}$
    $S(298 \, \text{K}) = \int_{0}^{298} (aT^3) \, \frac{dT}{T} = \int_{0}^{298} aT^2 \, dT$
    $S(298 \, \text{K}) = a \left[ \frac{T^3}{3} \right]_{0}^{298} = \frac{a}{3} (298)^3$
    $S(298 \, \text{K}) = \frac{3.1 \times 10^{-5}}{3} (298)^3 \, \text{J/(mol} \cdot \text{K)}$
    $S(298 \, \text{K}) \approx \frac{3.1 \times 10^{-5}}{3} \times 2.646 \times 10^7 \, \text{J/(mol} \cdot \text{K)}$
    $S(298 \, \text{K}) \approx 27.26 \, \text{J/(mol} \cdot \text{K)}$

    *(Note: Actual entropy values are typically found in tables, which account for more complex specific heat behavior and phase changes.)*

**Example 3: Unattainability of Absolute Zero**

*   **Scenario:** Imagine a refrigerator trying to cool a substance down to 0 K.
*   **Explanation:** As the substance gets colder, its internal energy and molecular motion decrease. To remove the remaining heat, the refrigerator would have to perform work. However, as $T \to 0$, the Carnot efficiency ($1 - T_{low}/T_{high}$) approaches 1. To extract even a small amount of heat from a reservoir at $T_{low}$ close to 0 K, the work input required becomes infinitely large, making the process impractical and theoretically impossible in a finite number of steps.

---

### 7. PRACTICE QUESTIONS AND EXERCISES

**Question 1 (CO1, CO2 - K1):**
State the Third Law of Thermodynamics in your own words. What is the significance of this law?

**Question 2 (CO1, CO2 - K2):**
Explain why absolute zero temperature is considered unattainable based on the Third Law.

**Question 3 (CO4 - K3):**
A diatomic gas is cooled from 300 K to 50 K. Assume the gas remains in a single phase and its molar specific heat capacity at constant volume is given by $c_v(T) = A + BT^2$. Show how you would calculate the absolute entropy change of the gas. (No need to solve numerically).

**Question 4 (CO1, CO4 - K2):**
What is residual entropy, and how does it relate to the Third Law of Thermodynamics?

**Question 5 (CO2, CO4 - K2):**
How does the concept of entropy generation in irreversible processes relate to the Third Law's statement about absolute zero?

---

### 8. ANSWERS TO PRACTICE QUESTIONS

**Answer 1:**
The Third Law of Thermodynamics states that the entropy of a perfect crystal at absolute zero temperature (0 Kelvin) is zero. This means it's impossible to reach absolute zero in a finite number of steps. Its significance lies in establishing an absolute scale for entropy and defining the behavior of systems at their lowest possible energy state.

**Answer 2:**
Absolute zero is unattainable because, as a system approaches 0 K, its entropy approaches a minimum value (zero for a perfect crystal). To further reduce the temperature, one would need to remove infinitesimal amounts of heat from a system with minimal thermal energy. This process requires an increasingly larger amount of work in each successive step, making it impossible to reach 0 K in a finite number of operations.

**Answer 3:**
The absolute entropy change of the gas would be calculated by integrating the specific heat capacity from 0 K to the initial and final temperatures:
$\Delta S = S(50 \, \text{K}) - S(300 \, \text{K})$
Using the absolute entropy formula $S(T) = \int_{0}^{T} c_v \, \frac{dT}{T}$, and assuming $S(0 \, \text{K}) = 0$:
$S(50 \, \text{K}) = \int_{0}^{50} (A + BT^2) \, \frac{dT}{T} = \int_{0}^{50} (\frac{A}{T} + BT) \, dT$
$S(300 \, \text{K}) = \int_{0}^{300} (A + BT^2) \, \frac{dT}{T} = \int_{0}^{300} (\frac{A}{T} + BT) \, dT$
$\Delta S = \int_{0}^{50} (\frac{A}{T} + BT) \, dT - \int_{0}^{300} (\frac{A}{T} + BT) \, dT$
$\Delta S = \int_{50}^{300} -(\frac{A}{T} + BT) \, dT = -[A \ln T + \frac{1}{2}BT^2]_{50}^{300}$

**Answer 4:**
Residual entropy is the entropy that a substance still possesses at 0 K due to imperfections or disorder that persists even at this theoretical minimum temperature (e.g., glassy states, isotopic mixtures). It signifies that the substance is not a perfect crystal at 0 K, meaning $\Omega > 1$ for its ground state, and thus its entropy is greater than zero.

**Answer 5:**
The Third Law establishes the entropy of a perfect crystal at 0 K as zero. This provides a fundamental baseline for entropy. Entropy generation, which occurs in all real, irreversible processes, represents an increase in the total entropy of the system and its surroundings from this baseline. As systems approach absolute zero, the capacity for generating significant entropy decreases, as the system is already nearing its lowest entropy state.

---

### 9. IMPORTANT POINTS TO REMEMBER

*   **Third Law:** Entropy of a perfect crystal at 0 K is zero ($S = 0$ at $T=0$ K).
*   **Unattainability:** Absolute zero (0 K) cannot be reached in a finite number of steps.
*   **Absolute Entropy:** The Third Law allows for the calculation of absolute entropy values.
*   **Specific Heat:** $c_p \to 0$ and $c_v \to 0$ as $T \to 0$ K.
*   **Statistical Basis:** $S = k \ln \Omega$, where $\Omega=1$ for a perfect crystal at 0 K.
*   **Residual Entropy:** Non-zero entropy at 0 K due to disorder.

---

This concludes the notes for the Third Law of Thermodynamics. Please refer to your textbooks for more detailed explanations and examples.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
