---
title: "Aim: (i) To conduct short circuit analysis for symmetrical and unsymmetrical faults."
subject: "POWER SYSTEM LAB"
module: "Module 5: Short Circuit Analysis  – Symmetrical Faults and Unsymmetrical Faults"
branch: "Electrical and Electronics Engineering"
semester: 6
topicId: "68a200862b85456187f367ea"
status: "completed"
scrapedAt: "2026-05-23T16:30:56.460Z"
---
# Power System Lab: Module 5 - Short Circuit Analysis

## Topic Aim: To conduct short circuit analysis for symmetrical and unsymmetrical faults.

---

### **1. Introduction to Short Circuit Analysis**

Short circuit analysis is a critical aspect of power system studies. It involves determining the magnitude and characteristics of currents and voltages during fault conditions. This analysis is crucial for:

*   **Protection System Design:** Selecting appropriate circuit breakers, fuses, relays, and other protective devices to interrupt fault currents safely and quickly.
*   **Equipment Rating:** Ensuring that power system equipment (transformers, generators, conductors, switchgear) can withstand the thermal and mechanical stresses imposed by short circuit currents.
*   **System Stability:** Assessing the impact of faults on the stability of the power system and ensuring it remains operational or can be restored to a stable state.
*   **System Planning:** Evaluating the performance of the system under fault conditions and identifying areas for improvement.

---

### **2. Types of Faults in Power Systems**

Faults in power systems are typically classified as:

*   **Symmetrical Faults:** These are balanced faults where the system remains balanced, and all three phases are equally affected.
*   **Unsymmetrical Faults:** These are unbalanced faults where the system becomes unbalanced, and the effects on each phase are different.

---

### **3. Symmetrical Faults**

#### **3.1. Definition:**
A symmetrical fault is a fault that occurs when all three phases are short-circuited together, usually to ground. This is the most severe type of fault in terms of current magnitude, but it is also the least common.

#### **3.2. Types of Symmetrical Faults:**
*   **Three-Phase Fault (LLL):** All three phases are short-circuited together and/or to ground simultaneously. This is the most severe symmetrical fault.

#### **3.3. Analysis of Symmetrical Faults:**

**Key Concepts:**

*   **Per-Unit System:** Short circuit calculations are greatly simplified using the per-unit (p.u.) system. The per-unit value of a quantity is its actual value divided by a chosen base value for that quantity.
*   **Impedances:** The impedance of power system components (generators, transformers, transmission lines) is represented in p.u. The total impedance of the system up to the fault point is crucial.
*   **Sequence Networks:** For symmetrical faults, the positive, negative, and zero sequence networks are identical and can be analyzed as a single network.

**Procedure (using per-unit system):**

1.  **Base Selection:** Choose a suitable base MVA and base kV for the system.
2.  **Per-Unit Impedances:** Convert all component impedances (reactances are usually dominant in short circuit analysis) to per-unit values on the chosen base.
    *   For series components (lines, transformers): $Z_{p.u.} = Z_{actual} / Z_{base}$ where $Z_{base} = (kV^2) / MVA$.
    *   For shunt components (generators, motors): Impedances are usually given on their own rating and need to be converted to the system base.
3.  **Equivalent Circuit:** Draw the per-unit equivalent circuit for a three-phase fault. This typically consists of the generator's internal impedance, transformer impedances, and line impedances connected in series from the source to the fault point. For a symmetrical fault, only the positive sequence network is needed.
4.  **Fault Current Calculation:**
    *   The short circuit current ($I_{sc}$) is calculated using Ohm's Law: $I_{sc} = V_{source} / Z_{total}$ where $V_{source}$ is the prefault voltage at the fault location (usually taken as 1 p.u. or the system voltage at the point of fault) and $Z_{total}$ is the total equivalent impedance of the system up to the fault point in per-unit.
    *   The actual fault current in Amperes is: $I_{sc(actual)} = I_{sc(p.u.)} \times Base \ MVA / (\sqrt{3} \times Base \ kV)$.

**Example:**
Consider a simple system: a generator connected through a transformer to a transmission line.
*   Generator: 100 MVA, 13.8 kV, Xd = 0.2 p.u.
*   Transformer: 100 MVA, 13.8 kV / 69 kV, Xtr = 0.1 p.u.
*   Transmission Line: 69 kV, XL = 5 ohms.

**Task:** Calculate the three-phase fault current at the end of the transmission line.

**Solution Approach:**
1.  Choose Base: 100 MVA, 69 kV on the high voltage side.
2.  Convert impedances to per-unit on the chosen base.
    *   Transformer impedance (already on 100 MVA, 69 kV side): $X_{tr(p.u.)} = 0.1$ p.u.
    *   Transmission line impedance:
        *   $Z_{base\_line} = (69^2) / 100 = 4.761 \ \Omega$
        *   $X_{L(p.u.)} = 5 \ \Omega / 4.761 \ \Omega \approx 1.05$ p.u.
    *   Generator impedance: Need to convert to the 69 kV base.
        *   $Z_{base\_gen} = (13.8^2) / 100 = 1.9044 \ \Omega$
        *   $X_{gen(p.u. on 13.8kV)} = 0.2$
        *   Actual $X_{gen} = 0.2 \times 1.9044 \ \Omega = 0.38088 \ \Omega$
        *   To convert generator impedance to the 69 kV base, use the voltage ratio squared:
            *   $X_{gen(p.u. on 69kV)} = X_{gen(p.u. on 13.8kV)} \times (13.8/69)^2 = 0.2 \times (0.2)^2 = 0.2 \times 0.04 = 0.008$ p.u.
3.  Total impedance in p.u. for LLL fault at the end of the line:
    *   $Z_{total(p.u.)} = X_{gen(p.u.)} + X_{tr(p.u.)} + X_{L(p.u.)} = 0.008 + 0.1 + 1.05 = 1.158$ p.u.
4.  Fault current in p.u.:
    *   $I_{sc(p.u.)} = 1 \ p.u. / 1.158 \ p.u. \approx 0.8636$ p.u.
5.  Fault current in Amperes:
    *   $I_{sc(actual)} = 0.8636 \ p.u. \times 100 \ MVA / (\sqrt{3} \times 69 \ kV) \approx 7.26 \ kA$

**Important Note:** For symmetrical faults, the prefault voltage at the point of fault is assumed to be the nominal system voltage (1 p.u. if the system is not loaded, or slightly lower if loaded).

---

### **4. Unsymmetrical Faults**

#### **4.1. Definition:**
Unsymmetrical faults are unbalanced faults that cause significant voltage and current unbalances in the three phases. They are more common than symmetrical faults.

#### **4.2. Types of Unsymmetrical Faults:**
*   **Single Line-to-Ground Fault (SLG or AG):** One phase conductor is short-circuited to ground. This is the most common type of fault.
*   **Line-to-Line Fault (LL):** Two phase conductors are short-circuited together but not to ground.
*   **Double Line-to-Ground Fault (LLG):** Two phase conductors are short-circuited to each other and to ground.

#### **4.3. Analysis of Unsymmetrical Faults: The Method of Symmetrical Components**

**Key Concepts:**

*   **Symmetrical Components:** Any unbalanced three-phase system of phasors can be resolved into three balanced three-phase systems of phasors, called symmetrical components:
    *   **Positive Sequence Components ($V_a, V_b, V_c$):** These are phasors of equal magnitude and equal phase displacement (120 degrees), rotating in the same direction as the original system. They represent the balanced part of the system.
    *   **Negative Sequence Components ($V_{a1}, V_{b1}, V_{c1}$):** These are phasors of equal magnitude but with phase displacement opposite to the positive sequence components. They represent the unbalanced part of the system.
    *   **Zero Sequence Components ($V_{a0}, V_{b0}, V_{c0}$):** These are phasors of equal magnitude and zero phase displacement, meaning they are in phase with each other. They represent the unbalance due to ground or neutral connections.
*   **Sequence Networks:** To analyze unbalanced faults, we need to construct three separate networks:
    *   **Positive Sequence Network:** Represents the system impedances and sources for positive sequence currents and voltages. It is similar to the network used for symmetrical faults.
    *   **Negative Sequence Network:** Represents the system impedances for negative sequence currents. **Generators have zero negative sequence impedance.** Transformers have different negative sequence impedances depending on their connections (e.g., delta-grounded wye has zero negative sequence impedance path for negative sequence currents to flow to ground).
    *   **Zero Sequence Network:** Represents the system impedances for zero sequence currents. **Zero sequence currents can only flow if there is a path through ground and/or through windings with specific connections (e.g., grounded wye windings).** Generators have zero sequence impedance.
*   **Connection of Sequence Networks:** The three sequence networks are connected in specific ways at the point of fault to satisfy the fault conditions.

**Sequence Impedances (Per Unit):**

*   **Generators:** $Z_1$ (positive), $Z_2$ (negative), $Z_0$ (zero). Usually, $Z_1 \approx Z_2$, and $Z_0$ can be significantly different.
*   **Transformers:** $Z_{1tr}$, $Z_{2tr}$, $Z_{0tr}$. These depend on the winding connections.
    *   For a Y-Y transformer with solidly grounded neutral, $Z_{1tr} = Z_{2tr} = Z_{0tr}$.
    *   For a Y-Y transformer with ungrounded neutral, $Z_{0tr}$ is infinite.
    *   For a Delta-Y transformer, zero sequence currents cannot flow through the delta winding to ground, so $Z_{0tr}$ is infinite if the Y is ungrounded. If the Y is grounded, zero sequence currents can flow.
    *   For a Y-Delta transformer, zero sequence currents can flow within the delta winding, effectively blocking them from propagating to the Y side if the Y is ungrounded.
*   **Transmission Lines:** $Z_{1L} = Z_{2L} = Z_{0L}$ (for most lines, though some long lines might have slight differences).

---

#### **4.3.1. Single Line-to-Ground Fault (SLG)**

**Fault Condition:** $V_a = 0$, $I_b = 0$, $I_c = 0$.

**Connection of Sequence Networks:**
*   The positive sequence network is connected in **series** with the negative sequence network.
*   The zero sequence network is connected in **parallel** with the combination of positive and negative sequence networks.
*   **The connection is such that $V_{a1} = V_{a2} = V_{a0}$ and $I_{a1} + I_{a2} + I_{a0} = I_{fault}$.**

**Procedure:**

1.  **Construct Sequence Networks:** Draw the positive, negative, and zero sequence networks for the system, including all relevant impedances in p.u.
2.  **Equivalent Sequence Network:** Connect the networks at the fault point as described above.
3.  **Calculate Sequence Currents:**
    *   The fault current is the sum of sequence currents at the fault point: $I_{fault} = I_{a1} + I_{a2} + I_{a0}$.
    *   For an SLG fault on phase 'a', the positive sequence current $I_{a1}$ is injected into the series combination of positive and negative sequence networks, and also into the zero sequence network in parallel.
    *   The equivalent impedance seen by the positive sequence current injected into this combined network is $Z_{eq} = Z_1 + Z_2 + Z_0$.
    *   Therefore, $I_{a1} = V_{source} / (Z_1 + Z_2 + Z_0)$, where $V_{source}$ is the prefault voltage (usually 1 p.u.).
    *   Since $Z_1 = Z_2$ for most components, $I_{a1} = V_{source} / (2Z_1 + Z_0)$.
    *   The negative and zero sequence currents are then: $I_{a2} = -I_{a1}$ and $I_{a0} = -I_{a1}$.
    *   The total fault current is $I_{fault} = 3 \times I_{a1}$ (since $I_{a2}$ and $I_{a0}$ are equal and opposite to $I_{a1}$ in magnitude, but flowing out of the phase 'a' current injection point, the total current in phase 'a' is $I_a = I_{a1} + I_{a2} + I_{a0}$).

4.  **Calculate Actual Fault Current:** $I_{fault(actual)} = I_{fault(p.u.)} \times Base \ MVA / (\sqrt{3} \times Base \ kV)$. (Note: For SLG fault, the current is line current, hence $\sqrt{3}$).

**Example:**
Consider the same system as before. Assume the generator has $Z_0 = 0.1$ p.u. and the transmission line has $Z_0 = 1.05$ p.u. (same as $Z_1$).

**Task:** Calculate the single line-to-ground fault current at the end of the transmission line.

**Solution Approach:**
1.  $Z_1$ (total positive sequence impedance) = $Z_{gen1(p.u.)} + Z_{tr1(p.u.)} + Z_{L1(p.u.)} = 0.008 + 0.1 + 1.05 = 1.158$ p.u.
2.  $Z_2$ (total negative sequence impedance) = $Z_{gen2(p.u.)} + Z_{tr2(p.u.)} + Z_{L2(p.u.)}$. Assuming $Z_2 = Z_1$ for all components (except generator where $Z_2=Z_1$ in subtransient period), $Z_2 = 1.158$ p.u.
3.  $Z_0$ (total zero sequence impedance) = $Z_{gen0(p.u.)} + Z_{tr0(p.u.)} + Z_{L0(p.u.)}$.
    *   Transformer zero sequence impedance depends on connections. Assuming a Y-Y transformer with grounded neutral for simplicity, $Z_{tr0} = Z_{tr1} = 0.1$ p.u.
    *   $Z_0 = 0.008 + 0.1 + 1.05 = 1.158$ p.u. (assuming $Z_{gen0} = Z_{gen1}$, $Z_{tr0}=Z_{tr1}$, $Z_{L0}=Z_{L1}$).
4.  Equivalent impedance for SLG fault: $Z_{eq} = Z_1 + Z_2 + Z_0 = 1.158 + 1.158 + 1.158 = 3.474$ p.u.
5.  Positive sequence fault current: $I_{a1(p.u.)} = 1 \ p.u. / 3.474 \ p.u. \approx 0.2879$ p.u.
6.  Total SLG fault current: $I_{fault(p.u.)} = 3 \times I_{a1(p.u.)} = 3 \times 0.2879 \approx 0.8637$ p.u.
7.  Actual fault current: $I_{fault(actual)} = 0.8637 \ p.u. \times 100 \ MVA / (\sqrt{3} \times 69 \ kV) \approx 7.26 \ kA$.

**Observation:** In this specific example, the SLG fault current is similar to the LLL fault current. This is coincidental and depends on the relative values of $Z_0$. In many practical systems, $Z_0$ is smaller than $Z_1$, leading to larger SLG fault currents than LLL fault currents.

---

#### **4.3.2. Line-to-Line Fault (LL)**

**Fault Condition:** $V_a$, $V_b$, $V_c$ are voltages. $V_a \ne V_b \ne V_c$.
*   Phase voltages at fault point: $V_a = 0$, $V_b = 0$.
*   Phase currents: $I_a = 0$, $I_b$, $I_c$.
*   Current relation: $I_b = -I_c$.

**Connection of Sequence Networks:**
*   The positive sequence network is connected in **parallel** with the negative sequence network.
*   The zero sequence network is **not involved** (no path to ground for zero sequence current).
*   **The connection is such that $V_{a1} = V_{a2}$ and $I_{a1} = -I_{a2}$.**

**Procedure:**

1.  **Construct Sequence Networks:** Draw the positive and negative sequence networks.
2.  **Equivalent Sequence Network:** Connect the positive and negative sequence networks in parallel at the fault point.
3.  **Calculate Sequence Currents:**
    *   The equivalent impedance seen by the positive sequence current injected into this parallel combination is $Z_{eq} = (Z_1 \times Z_2) / (Z_1 + Z_2)$.
    *   $I_{a1} = V_{source} / Z_{eq} = V_{source} / ((Z_1 \times Z_2) / (Z_1 + Z_2)) = V_{source} \times (Z_1 + Z_2) / (Z_1 \times Z_2)$.
    *   Since $I_{a1} = -I_{a2}$, $I_{a2} = -V_{source} \times (Z_1 + Z_2) / (Z_1 \times Z_2)$.
    *   The fault currents in phases 'b' and 'c' are:
        *   $I_{b(fault)} = I_{a1} + a^2 I_{a2} + a I_{a0}$
        *   $I_{c(fault)} = I_{a1} + a I_{a2} + a^2 I_{a0}$
    *   Since $I_{a0} = 0$, and assuming $Z_1=Z_2$, $I_{a1} = V_{source} / (Z_1/2)$. Thus $I_{a2} = -V_{source} / (Z_1/2)$.
    *   $I_{b(fault)} = V_{source}/(Z_1/2) + a^2(-V_{source}/(Z_1/2)) = (V_{source}/(Z_1/2)) (1 - a^2) = (V_{source}/(Z_1/2)) (1 - (-0.5 - j0.866)) = (V_{source}/(Z_1/2)) (1.5 + j0.866)$
    *   $I_{c(fault)} = V_{source}/(Z_1/2) + a(-V_{source}/(Z_1/2)) = (V_{source}/(Z_1/2)) (1 - a) = (V_{source}/(Z_1/2)) (1 - (-0.5 + j0.866)) = (V_{source}/(Z_1/2)) (1.5 - j0.866)$
    *   A simpler way: $I_{b(fault)} = I_{a1} - I_{a2} = I_{a1} - (-I_{a1}) = 2 I_{a1}$. Similarly, $I_{c(fault)} = I_{a1} - I_{a2} = 2 I_{a1}$. This is incorrect.
    *   Correct calculation: $I_{b(fault)} = I_{a1} + a^2 I_{a2}$. Since $I_{a2} = -I_{a1}$, $I_{b(fault)} = I_{a1} - a^2 I_{a1} = I_{a1}(1-a^2)$. And $I_{c(fault)} = I_{a1} + a I_{a2} = I_{a1} - a I_{a1} = I_{a1}(1-a)$.
    *   $1-a^2 = 1 - (-0.5 - j0.866) = 1.5 + j0.866$.
    *   $1-a = 1 - (-0.5 + j0.866) = 1.5 - j0.866$.
    *   The magnitude $|1-a^2| = \sqrt{1.5^2 + 0.866^2} = \sqrt{2.25 + 0.75} = \sqrt{3}$.
    *   So, the LL fault current magnitude is $I_{LL(fault)} = |I_{a1}| \times \sqrt{3}$.
    *   Since $I_{a1} = V_{source} / (Z_1 + Z_2)/2$, $I_{LL(fault)} = (V_{source} / ((Z_1+Z_2)/2)) \times \sqrt{3}$. If $Z_1=Z_2$, $I_{LL(fault)} = (V_{source} / Z_1) \times \sqrt{3}$.

**Calculation of LL fault current:**
*   $Z_{eq} = (Z_1 \times Z_2) / (Z_1 + Z_2)$.
*   If $Z_1 = Z_2$, then $Z_{eq} = Z_1^2 / (2Z_1) = Z_1/2$.
*   $I_{a1(p.u.)} = V_{source} / (Z_1/2) = 2 V_{source} / Z_1$.
*   $I_{b(fault)(p.u.)} = I_{a1(p.u.)}(1-a^2)$.
*   $I_{c(fault)(p.u.)} = I_{a1(p.u.)}(1-a)$.
*   The magnitude of the fault current in phases b and c is $|I_{b(fault)}| = |I_{c(fault)}| = |I_{a1}| \times |1-a^2| = |I_{a1}| \sqrt{3}$.
*   So, $I_{LL(fault)(p.u.)} = (2 V_{source} / Z_1) \times \sqrt{3}$. If $V_{source}=1$, $I_{LL(fault)(p.u.)} = 2\sqrt{3} / Z_1$.

**Example (using previous system):**
1.  $Z_1 = 1.158$ p.u., $Z_2 = 1.158$ p.u.
2.  $Z_{eq} = Z_1/2 = 1.158/2 = 0.579$ p.u.
3.  $I_{a1(p.u.)} = 1 \ p.u. / 0.579 \ p.u. \approx 1.727$ p.u.
4.  $I_{b(fault)(p.u.)} = I_{a1(p.u.)}(1-a^2) \approx 1.727 \times (1.5 + j0.866) \approx 2.59 + j1.496$.
5.  $I_{c(fault)(p.u.)} = I_{a1(p.u.)}(1-a) \approx 1.727 \times (1.5 - j0.866) \approx 2.59 - j1.496$.
6.  Magnitude of fault current: $|I_{LL(fault)}| = |I_{a1}| \sqrt{3} \approx 1.727 \times \sqrt{3} \approx 2.99$ p.u.
7.  Actual fault current: $I_{LL(fault)(actual)} = 2.99 \ p.u. \times 100 \ MVA / (\sqrt{3} \times 69 \ kV) \approx 25.0 \ kA$.

---

#### **4.3.3. Double Line-to-Ground Fault (LLG)**

**Fault Condition:** Two phases short-circuited to each other and to ground.
*   Phase voltages at fault point: $V_a$, $V_b = 0$, $V_c = 0$.
*   Phase currents: $I_a = 0$, $I_b$, $I_c$.
*   Current relation: $I_b + I_c = I_{ground}$.

**Connection of Sequence Networks:**
*   The positive, negative, and zero sequence networks are connected in **parallel**.
*   **The connection is such that $V_{a1} = V_{a2} = V_{a0}$.**

**Procedure:**

1.  **Construct Sequence Networks:** Draw the positive, negative, and zero sequence networks.
2.  **Equivalent Sequence Network:** Connect the positive, negative, and zero sequence networks in parallel at the fault point.
3.  **Calculate Sequence Currents:**
    *   The equivalent impedance seen by the positive sequence current injected into this parallel combination is $Z_{eq} = (Z_1 \times Z_2 \times Z_0) / (Z_1 Z_2 + Z_1 Z_0 + Z_2 Z_0)$.
    *   $I_{a1} = V_{source} / Z_{eq}$.
    *   $I_{a2} = -I_{a1} \times (Z_1 / Z_2)$.
    *   $I_{a0} = -I_{a1} \times (Z_1 / Z_0)$.
    *   If $Z_1 = Z_2$, then $I_{a2} = -I_{a1}$.
    *   The fault currents are then calculated using the symmetrical component transformations. For LLG fault on phases 'b' and 'c' to ground:
        *   $I_{b(fault)} = I_{a1} + a^2 I_{a2} + a I_{a0}$
        *   $I_{c(fault)} = I_{a1} + a I_{a2} + a^2 I_{a0}$
    *   Assuming $Z_1=Z_2$, $I_{a1} = V_{source} / ((Z_1 \times Z_0) / (2Z_1 + Z_0))$.
    *   $I_{a1} = V_{source} (2Z_1 + Z_0) / (Z_1 Z_0)$.
    *   $I_{a2} = -I_{a1}$.
    *   $I_{a0} = -I_{a1} (Z_1 / Z_0)$.
    *   $I_{b(fault)} = I_{a1} + a^2(-I_{a1}) + a(-I_{a1} Z_1/Z_0) = I_{a1} (1 - a^2 - a Z_1/Z_0)$.
    *   $I_{c(fault)} = I_{a1} + a(-I_{a1}) + a^2(-I_{a1} Z_1/Z_0) = I_{a1} (1 - a - a^2 Z_1/Z_0)$.

**Calculation of LLG fault current:**
*   If $Z_1=Z_2$: $Z_{eq} = (Z_1^2 Z_0) / (Z_1^2 + 2 Z_1 Z_0) = Z_1^2 Z_0 / (Z_1(Z_1+2Z_0)) = Z_1 Z_0 / (Z_1 + 2Z_0)$.
*   $I_{a1(p.u.)} = V_{source} / Z_{eq} = V_{source} (Z_1 + 2Z_0) / (Z_1 Z_0)$.
*   $I_{a2(p.u.)} = -I_{a1(p.u.)}$.
*   $I_{a0(p.u.)} = -I_{a1(p.u.)} (Z_1 / Z_0)$.
*   $I_{b(fault)(p.u.)} = I_{a1(p.u.)} (1 - a^2 - a Z_1/Z_0)$.
*   $I_{c(fault)(p.u.)} = I_{a1(p.u.)} (1 - a - a^2 Z_1/Z_0)$.

**Example (using previous system):**
1.  $Z_1 = 1.158$ p.u., $Z_2 = 1.158$ p.u., $Z_0 = 1.158$ p.u.
2.  $Z_{eq} = (1.158 \times 1.158 \times 1.158) / (1.158 \times 1.158 + 1.158 \times 1.158 + 1.158 \times 1.158) = (1.158^3) / (3 \times 1.158^2) = 1.158 / 3 = 0.386$ p.u.
3.  $I_{a1(p.u.)} = 1 \ p.u. / 0.386 \ p.u. \approx 2.59$ p.u.
4.  $I_{a2(p.u.)} = -I_{a1(p.u.)} \approx -2.59$ p.u.
5.  $I_{a0(p.u.)} = -I_{a1(p.u.)} (Z_1/Z_0) = -2.59 \times (1.158/1.158) = -2.59$ p.u.
6.  $I_{b(fault)(p.u.)} = I_{a1} + a^2 I_{a2} + a I_{a0} \approx 2.59 + (-0.5-j0.866)(-2.59) + (-0.5+j0.866)(-2.59) = 2.59 + (1.345 + j2.24) + (1.345 - j2.24) \approx 2.59 + 2.69 = 5.28$ p.u. (Approximation, needs careful calculation).
    Let's use the formula $I_{b(fault)(p.u.)} = I_{a1(p.u.)} (1 - a^2 - a Z_1/Z_0)$
    $I_{b(fault)(p.u.)} \approx 2.59 \times (1 - (-0.5 - j0.866) - (-0.5 + j0.866) \times 1) = 2.59 \times (1 + 0.5 + j0.866 + 0.5 - j0.866) = 2.59 \times 2 = 5.18$ p.u.
7.  $I_{c(fault)(p.u.)} = I_{a1} + a I_{a2} + a^2 I_{a0} \approx 2.59 + (-0.5+j0.866)(-2.59) + (-0.5-j0.866)(-2.59) = 2.59 + (1.345 - j2.24) + (1.345 + j2.24) \approx 2.59 + 2.69 = 5.28$ p.u.
    Using the formula $I_{c(fault)(p.u.)} = I_{a1(p.u.)} (1 - a - a^2 Z_1/Z_0)$
    $I_{c(fault)(p.u.)} \approx 2.59 \times (1 - (-0.5 + j0.866) - (-0.5 - j0.866) \times 1) = 2.59 \times (1 + 0.5 - j0.866 + 0.5 + j0.866) = 2.59 \times 2 = 5.18$ p.u.
8.  Actual fault current: $I_{LLG(fault)(actual)} = 5.18 \ p.u. \times 100 \ MVA / (\sqrt{3} \times 69 \ kV) \approx 43.3 \ kA$.

**Observation:** The LLG fault current can be very high, especially when $Z_0$ is small and the neutral is effectively grounded.

---

### **5. Software Tools for Short Circuit Analysis**

*   **ETAP (Electrical Transient Analyzer Program):** A comprehensive software suite for power system analysis, including short circuit calculations according to ANSI, IEC, and other standards.
*   **PSCAD/EMTDC:** Primarily for electromagnetic transient analysis, but also capable of short circuit studies.
*   **MATLAB/Simulink:** With specialized toolboxes like Power System Analysis Toolbox (PSAT) or Simscape Electrical.
*   **PowerWorld Simulator:** A graphical power system simulator that can perform short circuit analysis.

These tools automate the process of per-unit conversion, network construction, and calculation, significantly reducing manual effort and potential for errors. They are essential for analyzing large and complex power systems.

---

### **6. Practical Considerations and Standards**

*   **Standards:** Short circuit calculations are performed according to industry standards like:
    *   **ANSI/IEEE C37.010:** American National Standard for Electric Power Systems and Equipment - Voltage Ratings from 0.6 to 38 kV - Metal-Enclosed Switchgear.
    *   **IEC 60909:** International Electrotechnical Commission standards for calculation of short-circuit currents.
*   **Prefault Conditions:** The prefault load current should be considered, although it is often neglected for large power systems as fault currents are significantly larger.
*   **Transformer Tap Positions:** The tap positions of transformers affect the system voltages and thus the fault currents. Analysis should consider various tap settings.
*   **Generator Contribution:** Generators have varying reactances ($X_d'', X_d', X_d$) which represent subtransient, transient, and steady-state conditions. For short circuit calculations, subtransient reactance ($X_d''$) is typically used to determine the initial symmetrical RMS current.
*   **System Type:** The calculation method might vary slightly depending on whether it's a radial system, interconnected system, or islanded system.

---

### **7. Aim of the Practical/Lab Session**

**(i) To conduct short circuit analysis for symmetrical and unsymmetrical faults.**

**This involves:**

1.  **Manual Calculation:** Performing the calculations for different fault types (LLL, SLG, LL, LLG) for a given simple power system network using the principles discussed above. This reinforces the understanding of the underlying theory.
2.  **Software Simulation:** Using a power system analysis software (like ETAP, PSAT, etc.) to model the same system and conduct the short circuit analysis. Comparing the results from manual calculations with the software results.
3.  **Interpreting Results:** Understanding the significance of the calculated fault currents for protection system design and equipment rating.

---

### **8. Practice Questions**

**Question 1:** A $100$ MVA, $11$ kV generator with $X_d = 0.2$ p.u. is connected through a $200$ MVA, $11/132$ kV transformer with $X_{tr} = 0.1$ p.u. to a transmission line with an impedance of $50 + j150$ ohms.
    (a) Calculate the three-phase fault current at the end of the transmission line.
    (b) If the transformer neutral is solidly grounded, and the generator neutral is also solidly grounded, calculate the single line-to-ground fault current at the end of the transmission line. Assume $X_0$ for the generator is $0.1$ p.u. and for the line is $j150$ ohms. The transformer has $X_{0tr} = X_{tr}$.

**Answer 1:**

**System Base:** $200$ MVA, $132$ kV on the transmission line side.

**Per-Unit Impedances:**
*   Transformer: $X_{tr(p.u.)} = 0.1$ p.u.
*   Transmission Line: $Z_{base(line)} = (132 \text{ kV})^2 / 200 \text{ MVA} = 17424 / 200 = 87.12 \ \Omega$.
    $X_{L(p.u.)} = j150 \ \Omega / 87.12 \ \Omega = j1.722$ p.u.
*   Generator: Convert to 132 kV base. First, convert to system base MVA.
    $X_{gen(p.u. on 11kV)} = 0.2$ p.u.
    $X_{gen(p.u. on 200MVA)} = X_{gen(p.u. on 11kV)} \times (100 \text{ MVA} / 200 \text{ MVA}) \times (11 \text{ kV} / 11 \text{ kV})^2 = 0.2 \times 0.5 = 0.1$ p.u.
    Now convert to 132 kV base:
    $X_{gen(p.u. on 132kV)} = X_{gen(p.u. on 200MVA, 11kV)} \times (11 \text{ kV} / 132 \text{ kV})^2 = 0.1 \times (1/12)^2 = 0.1 \times (1/144) = 0.000694$ p.u.

**Total Positive Sequence Impedance:**
$Z_1 = X_{gen(p.u.)} + X_{tr(p.u.)} + X_{L(p.u.)} = 0.000694 + 0.1 + j1.722 \approx 0.1007 + j1.722$ p.u.
Let's approximate $Z_1 \approx j1.823$ p.u. for simplicity in manual calculations.

**(a) Three-Phase Fault Current:**
*   $Z_{total(p.u.)} = Z_1 \approx j1.823$ p.u.
*   $I_{sc(p.u.)} = 1 \text{ p.u.} / j1.823 \text{ p.u.} \approx -j0.5485$ p.u.
*   $I_{sc(actual)} = 0.5485 \text{ p.u.} \times 200 \text{ MVA} / (\sqrt{3} \times 132 \text{ kV}) \approx 0.5485 \times 200 / (\sqrt{3} \times 132) \approx 2.42 \text{ kA}$ (magnitude).

**(b) Single Line-to-Ground Fault Current:**
*   Assume $Z_2 = Z_1 \approx j1.823$ p.u.
*   $Z_0$: Assume $X_{0gen} = 0.1 \times (11/132)^2 = 0.1/144 = 0.000694$ p.u.
    Assume $X_{0tr} = X_{tr} = 0.1$ p.u.
    Assume $X_{0L} = X_{L} = j1.722$ p.u.
    $Z_0 = X_{0gen} + X_{0tr} + X_{0L} \approx 0.000694 + 0.1 + j1.722 \approx 0.1007 + j1.722 \approx j1.823$ p.u.
*   $Z_{eq} = Z_1 + Z_2 + Z_0 \approx j1.823 + j1.823 + j1.823 = j5.469$ p.u.
*   $I_{a1(p.u.)} = 1 \text{ p.u.} / j5.469 \text{ p.u.} \approx -j0.1828$ p.u.
*   $I_{fault(p.u.)} = 3 \times I_{a1(p.u.)} = 3 \times (-j0.1828) = -j0.5484$ p.u.
*   $I_{fault(actual)} = 0.5484 \text{ p.u.} \times 200 \text{ MVA} / (\sqrt{3} \times 132 \text{ kV}) \approx 2.42 \text{ kA}$ (magnitude).

---

**Question 2:** Explain the concept of symmetrical components and how they are used to analyze unsymmetrical faults. What is the relationship between positive, negative, and zero sequence networks for each type of fault?

**Answer 2:**
*   **Symmetrical Components:** Any unbalanced three-phase system of phasors can be decomposed into three balanced systems of phasors: positive, negative, and zero sequence components. They are related by the operator 'a' ($a = e^{j120^\circ}$).
    *   $V_a = V_{a1} + V_{a2} + V_{a0}$
    *   $V_b = a^2 V_{a1} + a V_{a2} + V_{a0}$
    *   $V_c = a V_{a1} + a^2 V_{a2} + V_{a0}$
    Similarly for currents.
*   **Analysis of Unsymmetrical Faults:** The method allows us to analyze unbalanced faults by studying the behavior of each sequence component in its respective sequence network.
*   **Sequence Network Connections:**
    *   **SLG Fault:** Positive, negative, and zero sequence networks are connected in **series** at the fault point, and the three combinations are then in parallel. (Or: Positive and Negative in series, then this combination in parallel with Zero). The condition is $V_{a1} = V_{a2} = V_{a0}$.
    *   **LL Fault:** Positive and negative sequence networks are connected in **parallel**. Zero sequence network is not involved. The condition is $V_{a1} = V_{a2}$.
    *   **LLG Fault:** Positive, negative, and zero sequence networks are connected in **parallel**. The condition is $V_{a1} = V_{a2} = V_{a0}$.

---

### **9. Important Points to Remember**

*   **Fault Severity:** LLL faults are generally the most severe in terms of current magnitude, followed by LLG, LL, and SLG. However, SLG faults are the most common.
*   **Per-Unit System:** Essential for simplifying calculations. Ensure correct base selection and conversions.
*   **Sequence Impedances:** Accurate values of $Z_1, Z_2, Z_0$ for all components are crucial for unsymmetrical fault analysis. The values depend on the equipment type and its internal construction/connections.
*   **Sequence Network Connections:** The specific connection of sequence networks at the fault point is the key to solving unsymmetrical faults.
*   **Subtransient Reactance:** For initial fault current calculations, subtransient reactance ($X_d''$ for generators) is used.
*   **Symmetrical Components:** Understanding the relationship between phase quantities and sequence quantities is fundamental.
*   **Software Utilization:** Leverage software tools for complex systems and for verification of manual calculations.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


### **10. Textbook References**

1.  **"Elements of Power System Analysis" by William D. Stevenson Jr.** (Classic textbook covering fault analysis in detail).
2.  **"Power System Analysis and Design" by J. Duncan Glover, M. Shah Dhat, and Thomas J. Overbye.** (Provides a comprehensive approach to power system analysis, including short circuits).
3.  **"Power System Stability and Control" by P. M. Anderson.** (While focused on stability, it has relevant sections on fault calculations).
4.  **"Electrical Power Systems" by V. K. Mehta and Rohit Mehta.** (Good for fundamental concepts and examples).

---

### **11. Alignment with Course Outcomes**

*   **CO1: Develop mathematical models and conduct steady state and transient analysis of power system networks using standard / dedicated software. (Knowledge Level: K3)**
    *   This module directly addresses CO1 by requiring the development of mathematical models (using per-unit system and symmetrical components) and the application of these models to conduct steady-state analysis (short circuit currents) for various fault conditions. The use of software for simulation is also a direct component.
*   **CO2: Conduct appropriate tests for any power system component as per standards to analyse their performance. (Knowledge Level: K3)**
    *   While this module focuses on calculation rather than direct testing, the understanding gained from short circuit analysis is essential for interpreting the results of fault current tests. Knowing the expected fault currents helps in designing tests to verify the performance of protective devices (like circuit breakers) under fault conditions as per standards. The impedance values used in calculations are derived from component characteristics, which could be obtained through testing.

---