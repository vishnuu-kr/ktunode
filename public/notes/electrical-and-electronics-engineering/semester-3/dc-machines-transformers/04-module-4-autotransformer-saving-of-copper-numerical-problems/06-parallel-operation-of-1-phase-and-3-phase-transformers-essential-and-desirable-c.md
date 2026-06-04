---
title: "Parallel operation of 1-phase and 3-phase transformers - essential and desirable conditions"
subject: "DC MACHINES & TRANSFORMERS"
module: "Module 4: Autotransformer – saving of copper – numerical problems"
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200832b85456187f35b37"
status: "completed"
scrapedAt: "2026-05-23T16:12:30.312Z"
---
# DC MACHINES & TRANSFORMERS - Module 4: Autotransformer – saving of copper – numerical problems

## Topic: Parallel Operation of 1-Phase and 3-Phase Transformers

This module focuses on the practical aspects of transformer operation, specifically the parallel connection of transformers and the concept of autotransformers. While the topic description mentions autotransformers, this specific section delves into the parallel operation, which is a crucial aspect of transformer application in power systems.

---

### 1. Introduction to Transformer Parallel Operation

**Why Parallel Operation?**

Transformers are frequently connected in parallel to:

*   **Meet Increasing Load Demands:** When a single transformer's capacity is insufficient for the growing load, additional transformers can be added in parallel.
*   **Improve Reliability:** If one transformer fails, the load can be automatically or manually transferred to the other operating transformers, minimizing downtime.
*   **Increase Efficiency:** By connecting transformers of different ratings, the overall efficiency can be improved under varying load conditions. A smaller transformer can be switched in for light loads, and larger ones for heavier loads.
*   **Facilitate Maintenance:** Transformers can be taken offline for maintenance or repair without interrupting the power supply.

**Basic Principle:**

When transformers are connected in parallel, they share the total load connected to the common busbars. The load is divided among the parallel transformers in proportion to their individual ratings (and inversely proportional to their impedances).

---

### 2. Parallel Operation of Single-Phase Transformers

#### 2.1. Essential Conditions for Parallel Operation

These conditions **must** be met for safe and efficient parallel operation. Failure to meet these will result in circulating currents, overheating, and potential damage.

*   **Same Voltage Ratio (Turns Ratio):**
    *   **Description:** The ratio of primary voltage to secondary voltage (or vice-versa) must be identical for all transformers connected in parallel. This ensures that at no-load, the induced voltages in the secondaries are equal.
    *   **Why it's essential:** If the voltage ratios differ, even slightly, there will be a voltage difference between the secondary terminals of the parallel transformers when connected to the same primary voltage. This voltage difference will drive a circulating current, even under no-load conditions, leading to power loss and overheating.
    *   **Reference (Bimbhra):** Chapter 8, "Parallel Operation of Transformers." Bimbhra emphasizes that identical voltage ratios prevent a "primary circulating current" from flowing.
    *   **Knowledge Level:** K2 (Understanding the fundamental requirement).

*   **Same Polarity:**
    *   **Description:** When connecting the primary windings to the common primary bus and secondary windings to the common secondary bus, the polarity of each transformer's secondary must be the same as others. This means the instantaneous polarity of the voltage at the terminals connected to the common secondary bus must be identical.
    *   **Why it's essential:** Incorrect polarity connection effectively reverses the connection of one transformer's secondary. This creates a voltage difference between the secondary terminals equal to twice the induced secondary voltage, resulting in a very large circulating current that can damage the transformers and the system.
    *   **Reference (Kothari & Nagrath):** Chapter 6, "Single-Phase Transformers." Kothari & Nagrath discuss polarity testing and its importance for parallel operation.
    *   **Knowledge Level:** K2 (Understanding the fundamental requirement).

*   **Same Per-Unit Impedance (for equal load sharing):**
    *   **Description:** While not strictly essential for parallel operation itself, having the same per-unit (p.u.) impedance is **crucial for equitable load sharing**. The ratio of impedances dictates how the load is divided.
    *   **Why it's essential for load sharing:** The load current shared by each transformer is inversely proportional to its impedance. If impedances are significantly different, the transformer with the lower impedance will carry a disproportionately larger share of the load, potentially overloading it.
    *   **Formula for load sharing:**
        Let $I_1, I_2, \dots, I_n$ be the load currents shared by transformers 1, 2, ..., n.
        Let $Z_{eq1}, Z_{eq2}, \dots, Z_{eqn}$ be the equivalent impedances (referred to the common winding, usually secondary).
        Then, $I_k = I_{total} \times \frac{Z_{eq\_total} / Z_{eq\_k}}{\sum_{i=1}^{n} (Z_{eq\_total} / Z_{eq\_i})}$, where $Z_{eq\_total}$ is the total equivalent impedance of the parallel combination.
        A simpler form for two transformers: $\frac{I_1}{I_2} = \frac{Z_{eq2}}{Z_{eq1}}$.
        If impedances are expressed in per unit on their own base ($Z_{p.u.1}, Z_{p.u.2}$), and their ratings ($S_1, S_2$) are considered, the load sharing is proportional to their ratings *if* their per-unit impedances are equal.
        $I_1 \propto S_1$ and $I_2 \propto S_2$ when $Z_{p.u.1} = Z_{p.u.2}$.
    *   **Reference (Gupta):** Chapter 10, "Parallel Operation of Transformers." Gupta provides detailed derivations and examples on load sharing based on impedance.
    *   **Knowledge Level:** K3 (Analyzing the impact of impedance on load sharing).

*   **Same Frequency:**
    *   **Description:** The AC power source frequency must be the same for all transformers.
    *   **Why it's essential:** Transformers are designed for a specific frequency. Operating them at different frequencies can lead to issues with magnetic flux, core saturation, and excitation currents, affecting performance and potentially causing damage.
    *   **Knowledge Level:** K2 (Understanding the operational requirement).

#### 2.2. Desirable Conditions for Parallel Operation

These conditions improve the efficiency and effectiveness of parallel operation but are not strictly mandatory for preventing damage.

*   **Same Impedance Percentage (or same per-unit impedance on the same base):**
    *   **Description:** As discussed above, having the same percentage impedance (or p.u. impedance on a common base) ensures that the load is shared in proportion to their kVA ratings.
    *   **Why it's desirable:** This leads to optimal utilization of all connected transformers and prevents overloading of any single unit. If the p.u. impedances are equal, the current division is directly proportional to the kVA ratings.
    *   **Reference (Murugesh Kumar):** Chapter 5, "Parallel Operation of Transformers." Murugesh Kumar details how to calculate the required impedance for equitable load sharing.
    *   **Knowledge Level:** K3 (Applying principles to achieve desired outcomes).

*   **Same kVA Rating (Not essential but preferred):**
    *   **Description:** Ideally, transformers connected in parallel should have the same kVA rating.
    *   **Why it's desirable:** If transformers have different kVA ratings but the same p.u. impedance, the larger transformer will naturally carry more load. However, if the p.u. impedances are also different, the load sharing becomes complex and might not be optimal. Connecting transformers with significantly different kVA ratings can lead to one transformer being heavily loaded while others are lightly loaded, reducing overall efficiency.
    *   **Example:** Two transformers, 100 kVA and 50 kVA, connected in parallel with same p.u. impedance. If the total load is 120 kVA, the 100 kVA transformer will carry 80 kVA and the 50 kVA transformer will carry 40 kVA. The 100 kVA transformer is operating at 80% of its capacity, while the 50 kVA transformer is operating at 80% of its capacity. This is good. However, if the p.u. impedances were different, the load sharing would be dictated by these impedances.
    *   **Knowledge Level:** K3 (Analyzing trade-offs and optimal configurations).

*   **Same Impedance Angle (or same resistance/reactance ratio):**
    *   **Description:** The phase angle of the impedance ($Z = R + jX$) should be the same for all parallel transformers. This implies the ratio of resistance to reactance ($R/X$) should be the same.
    *   **Why it's desirable:** Equal impedance angles ensure that the power factors at which the transformers operate are the same. If the angles differ, the transformer with the higher reactance angle will supply a larger portion of the reactive power component of the load, potentially leading to unequal power factor sharing and voltage regulation issues.
    *   **Reference (Gupta):** Gupta provides formulas for calculating the circulating current due to differences in impedance angles.
    *   **Knowledge Level:** K3 (Analyzing the impact of impedance components on performance).

#### 2.3. Consequences of Not Meeting Essential Conditions

*   **Different Voltage Ratios:** Circulating current (no-load loss) between secondaries. Overheating, reduced efficiency, potential damage.
*   **Incorrect Polarity:** Very large circulating current, potentially destroying transformers.
*   **Different Frequencies:** Operational instability, core saturation, excessive noise.

---

### 3. Parallel Operation of Three-Phase Transformers

The principles for single-phase transformers largely extend to three-phase transformers, with additional considerations for the winding connections.

#### 3.1. Essential Conditions for Parallel Operation (3-Phase)

*   **Same Voltage Ratio (Line-to-Line):**
    *   **Description:** The line-to-line voltage ratios of all transformers must be identical.
    *   **Why it's essential:** Similar to single-phase, unequal voltage ratios (line-to-line) will cause circulating currents between the phases.
    *   **Knowledge Level:** K2.

*   **Same Polarity and Phase Displacement:**
    *   **Description:** The phase displacement between the primary and secondary line voltages must be the same for all transformers. This relates to the vector group designation (e.g., Dyn11, Yyn0).
    *   **Why it's essential:** If phase displacements differ (e.g., connecting a Yyn0 transformer with a Dyn11 transformer), there will be a phase difference between corresponding secondary line voltages. This will lead to large circulating currents, even under no-load, due to voltage phase differences.
    *   **Reference (Kothari & Nagrath):** Chapter 13, "Three-Phase Transformers." They explain vector groups and their importance in parallel operation.
    *   **Knowledge Level:** K2.

*   **Same Per-Unit Impedance (for equal load sharing):**
    *   **Description:** The per-unit impedance (usually calculated on the transformer's own kVA rating and voltage) should be the same for all transformers.
    *   **Why it's essential for load sharing:** Similar to single-phase, equitable load sharing of the kVA is achieved when per-unit impedances are equal. The total three-phase load will be shared proportionally to the kVA ratings.
    *   **Knowledge Level:** K3.

*   **Same Frequency:**
    *   **Description:** The source frequency must be the same.
    *   **Why it's essential:** Same reasons as single-phase transformers.
    *   **Knowledge Level:** K2.

#### 3.2. Desirable Conditions for Parallel Operation (3-Phase)

*   **Same kVA Rating:**
    *   **Description:** Ideally, all transformers should have the same kVA rating.
    *   **Why it's desirable:** Ensures balanced loading and efficient utilization. If ratings differ, load sharing depends on both kVA and p.u. impedance.
    *   **Knowledge Level:** K3.

*   **Same Impedance Percentage (or same per-unit impedance on the same base):**
    *   **Description:** As mentioned earlier, equal p.u. impedance ensures load sharing proportional to kVA ratings.
    *   **Why it's desirable:** Optimal load distribution.
    *   **Knowledge Level:** K3.

*   **Same Impedance Angle (or same resistance/reactance ratio):**
    *   **Description:** Same impedance angles for all transformers.
    *   **Why it's desirable:** Ensures balanced power factor operation and voltage regulation across all transformers.
    *   **Knowledge Level:** K3.

*   **Same Vector Group (Crucial for load sharing and preventing circulating currents):**
    *   **Description:** While technically a phase displacement of 0 degrees between phases is essential, having identical vector groups simplifies operation. For example, connecting Dyn11 with Dyn11 is straightforward. Connecting Dyn11 with Dyn1 is possible but requires careful consideration of the 30-degree phase shift and its impact on load sharing. However, it's generally not recommended to connect transformers with different phase shifts as it leads to significant circulating currents.
    *   **Why it's desirable:** Minimizes circulating currents and ensures that the phase relationships between primary and secondary voltages are consistent.
    *   **Reference (Bimbhra):** Chapter 8 discusses vector groups and their implications for parallel operation.
    *   **Knowledge Level:** K2 (Understanding the concept of vector groups).

#### 3.3. Load Sharing in 3-Phase Parallel Operation

*   **Rule:** Load is shared in proportion to kVA ratings, provided per-unit impedances are equal.
*   **Calculation:**
    Let $S_1, S_2, \dots, S_n$ be the kVA ratings of the transformers.
    Let $Z_{p.u.1}, Z_{p.u.2}, \dots, Z_{p.u.n}$ be their per-unit impedances.
    If $Z_{p.u.1} = Z_{p.u.2} = \dots = Z_{p.u.n}$, then the load kVA ($S_k$) shared by transformer $k$ is:
    $S_k = S_{total} \times \frac{S_k}{S_{total\_rated}}$, where $S_{total\_rated} = S_1 + S_2 + \dots + S_n$.
    This simplifies to:
    $S_k = S_{total} \times \frac{S_k}{\sum S_i}$.
*   **If per-unit impedances differ:**
    Let $Z_{eq1}, Z_{eq2}, \dots, Z_{eqn}$ be the equivalent impedances referred to a common base.
    The load current $I_k$ carried by transformer $k$ is:
    $I_k = I_{total} \times \frac{Y_k}{\sum Y_i}$, where $Y_i = 1/Z_{eqi}$ is the admittance.
    This means the load is shared in proportion to the admittances (inversely proportional to impedances).
    *   **Reference (Gupta):** Provides detailed methods for calculating load sharing when impedances differ, including considering the impedance angles.
    *   **Knowledge Level:** K3.

---

### 4. Numerical Problems & Practice Questions

The core of Module 4, as indicated by the topic "numerical problems," lies in applying these conditions to solve practical scenarios. While this section doesn't delve into autotransformer calculations, it's crucial to understand that the parallel operation principles are fundamental.

#### Practice Questions

**Question 1 (Single-Phase):**
Two single-phase transformers, T1 and T2, are to be operated in parallel.
Transformer T1: 100 kVA, 11000 V / 440 V, impedance 1.2% + j5.2%
Transformer T2: 150 kVA, 11000 V / 440 V, impedance 1.0% + j4.8%

(a) Are the essential conditions for parallel operation met? (Assume same frequency and polarity).
(b) Calculate the per-unit impedance for each transformer on its own base.
(c) If the total load connected is 200 kVA at a power factor of 0.8 lagging, calculate the load (in kVA and kW) shared by each transformer.
(d) What is the overall power factor of the combined operation?

**Answer 1:**

(a) **Essential Conditions:**
    *   Voltage Ratio: Both have 11000V/440V. **Met.**
    *   Frequency: Assumed same. **Met.**
    *   Polarity: Assumed same. **Met.**
    *   Per-unit Impedance: Not necessarily equal, but this is a desirable condition for load sharing.

(b) **Per-Unit Impedance:**
    *   **T1:** $Z_{p.u.1} = \sqrt{1.2^2 + 5.2^2} \% = \sqrt{1.44 + 27.04} \% = \sqrt{28.48} \% \approx 5.337 \%$
    *   **T2:** $Z_{p.u.2} = \sqrt{1.0^2 + 4.8^2} \% = \sqrt{1.00 + 23.04} \% = \sqrt{24.04} \% \approx 4.903 \%$

(c) **Load Sharing:**
    Since per-unit impedances are not equal, load sharing will not be strictly proportional to kVA ratings. We need to work with admittances (reciprocal of impedances). It's easier to use percent impedances directly for this calculation.
    Let's convert the percent impedances to their base values on a common base voltage (e.g., 440V).
    Base Impedance on secondary side: $Z_{base} = \frac{V_{rated}^2}{S_{rated}} = \frac{(440V)^2}{100000 VA} = \frac{193600}{100000} = 1.936 \Omega$.
    For T1: $Z_{eq1} = 0.05337 \times 1.936 \Omega \approx 0.1033 \Omega$.
    For T2: $Z_{eq2} = 0.04903 \times 1.936 \Omega \approx 0.0949 \Omega$.

    Admittances:
    $Y_1 = 1/Z_{eq1} \approx 1/0.1033 \approx 9.68 \, S$
    $Y_2 = 1/Z_{eq2} \approx 1/0.0949 \approx 10.54 \, S$

    Total Admittance $Y_{total} = Y_1 + Y_2 \approx 9.68 + 10.54 = 20.22 \, S$.

    Load share in terms of current (since kVA is proportional to current at same voltage):
    Current share for T1 ($I_1$) $\propto Y_1$: $I_1 = I_{total} \times \frac{Y_1}{Y_{total}} = I_{total} \times \frac{9.68}{20.22} \approx 0.4787 \, I_{total}$
    Current share for T2 ($I_2$) $\propto Y_2$: $I_2 = I_{total} \times \frac{Y_2}{Y_{total}} = I_{total} \times \frac{10.54}{20.22} \approx 0.5213 \, I_{total}$

    Total load is 200 kVA. The voltage is 440V.
    $I_{total} = \frac{200000 VA}{440 V} = 454.54 \, A$.
    $I_1 = 0.4787 \times 454.54 A \approx 217.58 A$.
    $I_2 = 0.5213 \times 454.54 A \approx 236.96 A$.

    Load in kVA:
    $S_1 = V \times I_1 = 440 V \times 217.58 A = 95735.2 VA \approx 95.74 \, kVA$.
    $S_2 = V \times I_2 = 440 V \times 236.96 A = 104262.4 VA \approx 104.26 \, kVA$.

    Check: $95.74 + 104.26 = 200 \, kVA$.

    Load in kW:
    Total load is 200 kVA at 0.8 PF. Total kW = $200 \times 0.8 = 160 \, kW$.
    Power factor for T1 ($PF_1$): Impedance angle of T1 is $atan(5.2/1.2) \approx 77.05^{\circ}$.
    Power factor for T2 ($PF_2$): Impedance angle of T2 is $atan(4.8/1.0) \approx 78.46^{\circ}$.
    Since the impedance angles are different, the power factor at which each transformer operates will also be different. The total load has a power factor of 0.8 lagging. We can assume the load current is lagging the voltage by $cos^{-1}(0.8) = 36.87^{\circ}$.

    The current $I_1$ lags the voltage by $77.05^{\circ}$ and $I_2$ lags the voltage by $78.46^{\circ}$.
    To find the kW shared, we need to calculate the real power components.
    $P_1 = S_1 \times \cos(\theta_{total} + \theta_{Z1}) = 95.74 \times \cos(36.87^{\circ} + 77.05^{\circ}) = 95.74 \times \cos(113.92^{\circ}) = 95.74 \times (-0.405) \approx -38.8 \, kVA$. This approach is incorrect as it assumes fixed phase angles for the load current relative to the voltage.

    A simpler approach for load sharing of real power when total PF is known and impedance angles differ:
    Let $Z_{eq1} = R_1 + jX_1$ and $Z_{eq2} = R_2 + jX_2$.
    $R_1$ (for T1) = $0.1033 \times \cos(77.05^{\circ}) \approx 0.1033 \times 0.224 \approx 0.0231 \Omega$.
    $X_1$ (for T1) = $0.1033 \times \sin(77.05^{\circ}) \approx 0.1033 \times 0.974 \approx 0.1006 \Omega$.
    $R_2$ (for T2) = $0.0949 \times \cos(78.46^{\circ}) \approx 0.0949 \times 0.199 \approx 0.0189 \Omega$.
    $X_2$ (for T2) = $0.0949 \times \sin(78.46^{\circ}) \approx 0.0949 \times 0.979 \approx 0.0929 \Omega$.

    Let the common voltage be $V$. $I_1 = V / (R_1 + jX_1)$ and $I_2 = V / (R_2 + jX_2)$.
    Total current $I_{total} = I_1 + I_2$.
    Let $I_{total} = I_{total\_mag} \angle -\phi_{total}$ where $\phi_{total} = 36.87^{\circ}$.
    This becomes complex to solve analytically by hand.

    **Let's re-evaluate the load sharing based on the ratio of admittances for the total current:**
    $I_1 = I_{total} \frac{Y_1}{Y_1+Y_2}$ and $I_2 = I_{total} \frac{Y_2}{Y_1+Y_2}$.
    The impedance angles dictate the power factor of the current supplied by each transformer.
    T1 supplies current with $PF_1 = \cos(77.05^{\circ}) \approx 0.224$ (highly lagging).
    T2 supplies current with $PF_2 = \cos(78.46^{\circ}) \approx 0.199$ (highly lagging).

    If total load is $S_{total} = P_{total} + jQ_{total}$, where $P_{total} = 160 kW$ and $Q_{total} = 200 \sin(36.87^{\circ}) \approx 120 kVAR$.
    This is also complicated.

    **Let's simplify the problem and assume we only need to find the kVA share:**
    The kVA shared is proportional to the current shared:
    $S_1 \approx 95.74 \, kVA$
    $S_2 \approx 104.26 \, kVA$

    If the question implies kW sharing based on the total kW and the current share:
    T1 kW share: $I_1 \times V \times PF_{actual\_T1}$. But $PF_{actual\_T1}$ depends on the load's power factor.

    **Let's assume an alternative scenario where load sharing is approximated by ratings if p.u. impedance magnitude is close:**
    If we consider only the magnitude of per-unit impedances: $Z_{p.u.1} = 5.337\%$ and $Z_{p.u.2} = 4.903\%$.
    Admittance magnitudes: $Y_{p.u.1} = 1/5.337 \approx 0.1874$, $Y_{p.u.2} = 1/4.903 \approx 0.2039$.
    $Y_{p.u.total} = 0.1874 + 0.2039 = 0.3913$.
    Current share for T1 = $I_{total} \times (0.1874 / 0.3913) \approx 0.479 \, I_{total}$.
    Current share for T2 = $I_{total} \times (0.2039 / 0.3913) \approx 0.521 \, I_{total}$.
    This gives similar kVA shares as calculated above.

    To find the actual kW and kVAR sharing requires solving for the currents when their sum is the total load current with its specific power factor. This involves complex numbers.

    **Let's use a simplified approach based on current division:**
    Let $I_{total}$ be the load current. $I_{total} = I_1 + I_2$.
    $I_1 = \frac{I_{total} Y_1}{Y_1+Y_2}$ and $I_2 = \frac{I_{total} Y_2}{Y_1+Y_2}$.
    The impedance angle of T1 is $\alpha_1 = 77.05^{\circ}$. The impedance angle of T2 is $\alpha_2 = 78.46^{\circ}$.
    The load power factor angle is $\phi = 36.87^{\circ}$.
    The current supplied by T1 will have a power factor angle of $-\alpha_1$ relative to its voltage.
    The current supplied by T2 will have a power factor angle of $-\alpha_2$ relative to its voltage.
    The total load current is $I_{load}$ lagging the voltage $V$ by $\phi$.
    $I_1 = I_{1\_mag} \angle (\phi - \alpha_1)$ if we assume voltage is reference $0^{\circ}$ and load current angle is $\phi$. This is incorrect.

    Let's consider the parallel connection on the secondary side. Let $V$ be the secondary voltage (say $0^{\circ}$).
    The total load current $I_{load} = (200 \text{ kVA} / 440 \text{ V}) \times 0.8 PF \text{ lagging} = 454.54 A \angle -36.87^{\circ}$.
    $Z_{eq1} = 0.1033 \angle 77.05^{\circ} \Omega$.
    $Z_{eq2} = 0.0949 \angle 78.46^{\circ} \Omega$.

    $I_1 = V / Z_{eq1} = (440 / 0.1033) \angle (0^{\circ} - 77.05^{\circ}) = 4259.4 \angle -77.05^{\circ} A$.
    $I_2 = V / Z_{eq2} = (440 / 0.0949) \angle (0^{\circ} - 78.46^{\circ}) = 4636.5 \angle -78.46^{\circ} A$.
    $I_1 + I_2 = (4259.4 \cos(-77.05^{\circ}) + j 4259.4 \sin(-77.05^{\circ})) + (4636.5 \cos(-78.46^{\circ}) + j 4636.5 \sin(-78.46^{\circ}))$
    $I_1 = (4259.4 \times 0.224) + j (4259.4 \times -0.974) = 954.1 - j 4148.1 A$.
    $I_2 = (4636.5 \times 0.199) + j (4636.5 \times -0.979) = 922.7 - j 4539.1 A$.
    $I_1 + I_2 = (954.1 + 922.7) + j (-4148.1 - 4539.1) = 1876.8 - j 8687.2 A$.
    This sum is not equal to the load current $I_{load} = 454.54 \angle -36.87^{\circ} = (454.54 \cos(-36.87^{\circ}) + j 454.54 \sin(-36.87^{\circ})) = 363.6 - j 272.7 A$.

    There is a misunderstanding in how the load is shared. The load current is the SUM of the currents from the transformers.
    $I_{load} = I_1 + I_2$.
    The currents $I_1$ and $I_2$ are determined by the impedances $Z_1$ and $Z_2$.
    $I_1 = V/Z_1$ and $I_2 = V/Z_2$. This implies infinite busbar current if impedances are not matched.

    **Correct approach for load sharing when impedances differ:**
    The load is divided according to the admittances:
    $I_1 = I_{total} \times \frac{Y_1}{Y_1+Y_2}$ and $I_2 = I_{total} \times \frac{Y_2}{Y_1+Y_2}$.
    $Y_1 = 1/Z_{eq1}$ and $Y_2 = 1/Z_{eq2}$.
    $Z_{eq1}$ and $Z_{eq2}$ are complex impedances.

    $Y_1 = 1/(0.1033 \angle 77.05^{\circ}) = 0.0968 \angle -77.05^{\circ} S$.
    $Y_2 = 1/(0.0949 \angle 78.46^{\circ}) = 0.1054 \angle -78.46^{\circ} S$.

    $Y_1 = 0.0968 (\cos(-77.05^{\circ}) + j \sin(-77.05^{\circ})) = 0.0968 (0.224 - j 0.974) = 0.0217 - j 0.0943 S$.
    $Y_2 = 0.1054 (\cos(-78.46^{\circ}) + j \sin(-78.46^{\circ})) = 0.1054 (0.199 - j 0.979) = 0.0209 - j 0.1032 S$.

    $Y_{total} = Y_1 + Y_2 = (0.0217 + 0.0209) + j (-0.0943 - 0.1032) = 0.0426 - j 0.1975 S$.
    Magnitude of total admittance: $|Y_{total}| = \sqrt{0.0426^2 + (-0.1975)^2} \approx \sqrt{0.00181 + 0.0390} \approx \sqrt{0.0408} \approx 0.202 S$.
    Angle of total admittance: $\theta_Y = atan(-0.1975/0.0426) \approx atan(-4.636) \approx -77.8^{\circ}$.
    So, $Y_{total} \approx 0.202 \angle -77.8^{\circ} S$.

    Load current $I_{load} = 454.54 \angle -36.87^{\circ} A$.

    $I_1 = I_{load} \times \frac{Y_1}{Y_{total}} = (454.54 \angle -36.87^{\circ}) \times \frac{0.0968 \angle -77.05^{\circ}}{0.202 \angle -77.8^{\circ}}$
    $I_1 = (454.54 \angle -36.87^{\circ}) \times (0.479 \angle 0.75^{\circ})$
    $I_1 = (454.54 \times 0.479) \angle (-36.87^{\circ} + 0.75^{\circ}) = 217.7 \angle -36.12^{\circ} A$.

    $I_2 = I_{load} \times \frac{Y_2}{Y_{total}} = (454.54 \angle -36.87^{\circ}) \times \frac{0.1054 \angle -78.46^{\circ}}{0.202 \angle -77.8^{\circ}}$
    $I_2 = (454.54 \angle -36.87^{\circ}) \times (0.5218 \angle -0.66^{\circ})$
    $I_2 = (454.54 \times 0.5218) \angle (-36.87^{\circ} - 0.66^{\circ}) = 237.2 \angle -37.53^{\circ} A$.

    Check: $I_1 + I_2 = (217.7 \cos(-36.12^{\circ}) + j 217.7 \sin(-36.12^{\circ})) + (237.2 \cos(-37.53^{\circ}) + j 237.2 \sin(-37.53^{\circ}))$
    $I_1 = 176.4 - j 128.2 A$.
    $I_2 = 187.5 - j 144.5 A$.
    $I_1 + I_2 = (176.4 + 187.5) + j (-128.2 - 144.5) = 363.9 - j 272.7 A$.
    This matches the load current $I_{load} = 363.6 - j 272.7 A$.

    Now calculate kW and kVA for each:
    **Transformer T1:**
    $S_1 = V \times I_1^* = 440 \angle 0^{\circ} \times 217.7 \angle 36.12^{\circ} = 95788 \angle 36.12^{\circ} VA$.
    $S_1 = 95.79 \angle 36.12^{\circ} kVA$.
    $P_1 = 95.79 \cos(36.12^{\circ}) = 95.79 \times 0.808 \approx 77.35 \, kW$.
    $Q_1 = 95.79 \sin(36.12^{\circ}) = 95.79 \times 0.589 \approx 56.43 \, kVAR$.
    $PF_1 = \cos(36.12^{\circ}) = 0.808$ lagging.

    **Transformer T2:**
    $S_2 = V \times I_2^* = 440 \angle 0^{\circ} \times 237.2 \angle 37.53^{\circ} = 104368 \angle 37.53^{\circ} VA$.
    $S_2 = 104.37 \angle 37.53^{\circ} kVA$.
    $P_2 = 104.37 \cos(37.53^{\circ}) = 104.37 \times 0.793 \approx 82.74 \, kW$.
    $Q_2 = 104.37 \sin(37.53^{\circ}) = 104.37 \times 0.609 \approx 63.56 \, kVAR$.
    $PF_2 = \cos(37.53^{\circ}) = 0.793$ lagging.

    Check:
    Total kW = $77.35 + 82.74 = 100.09 \, kW$. This is incorrect. Total kW should be 160 kW.
    Where is the error? The impedance angles are causing a difference in power factor.

    Let's revisit the calculation of current division based on admittance.
    $I_1 = I_{load} \frac{Y_1}{Y_{total}}$ and $I_2 = I_{load} \frac{Y_2}{Y_{total}}$.
    $I_{load}$ is the total current required by the load.
    The calculation of $I_1$ and $I_2$ is correct.
    The issue might be in the assumption that $V$ is $0^{\circ}$ and the load current $I_{load}$ is at $-36.87^{\circ}$.

    Let's re-examine the division of power.
    Total kVA = 200 kVA. Total kW = 160 kW. Total kVAR = 120 kVAR.
    $S_1 = 95.79 \angle 36.12^{\circ} kVA$ (Magnitude $95.79$, angle $36.12^{\circ}$).
    $S_2 = 104.37 \angle 37.53^{\circ} kVA$ (Magnitude $104.37$, angle $37.53^{\circ}$).
    Sum of S1 and S2:
    $S_1 = 77.35 + j56.43 \, kVA$
    $S_2 = 82.74 + j63.56 \, kVA$
    $S_{total\_calculated} = (77.35 + 82.74) + j(56.43 + 63.56) = 160.09 + j120.00 \, kVA$.
    This now matches the total load (160 kW + j120 kVAR).

    So, the load sharing is:
    **Transformer T1:**
    *   kVA shared: $95.79 \, kVA$.
    *   kW shared: $77.35 \, kW$.
    *   kVAR shared: $56.43 \, kVAR$.
    *   Power factor: $\cos(36.12^{\circ}) = 0.808$ lagging.

    **Transformer T2:**
    *   kVA shared: $104.37 \, kVA$.
    *   kW shared: $82.74 \, kW$.
    *   kVAR shared: $63.56 \, kVAR$.
    *   Power factor: $\cos(37.53^{\circ}) = 0.793$ lagging.

(d) **Overall Power Factor:**
    The overall power factor is that of the total load, which is given as 0.8 lagging.
    The individual transformers operate at different power factors (0.808 lagging and 0.793 lagging) due to the difference in their impedance angles.

**Question 2 (3-Phase):**
Three 3-phase transformers are connected in parallel to supply a total load of 500 kVA at 0.85 PF lagging.
Transformer A: 200 kVA, 33 kV/11 kV, Dyn11, Impedance 1.2% + j5%
Transformer B: 200 kVA, 33 kV/11 kV, Dyn11, Impedance 1.0% + j4.5%
Transformer C: 100 kVA, 33 kV/11 kV, Dyn11, Impedance 1.5% + j5.5%

(a) Verify the essential conditions for parallel operation.
(b) Calculate the per-unit impedance for each transformer on its own base (consider magnitude).
(c) Calculate the load (in kVA) shared by each transformer.
(d) If the total load were 500 kVA at unity power factor, calculate the kVA shared by each transformer.

**Answer 2:**

(a) **Essential Conditions:**
    *   Voltage Ratio: All are 33 kV/11 kV. **Met.**
    *   Frequency: Assumed same. **Met.**
    *   Polarity/Phase Displacement: All are Dyn11. **Met.**
    *   Per-unit Impedance: Not equal. This is a desirable condition, not essential for preventing damage, but crucial for equitable load sharing.

(b) **Per-Unit Impedance (Magnitude):**
    *   **Transformer A:** $Z_{p.u.A} = \sqrt{1.2^2 + 5^2} \% = \sqrt{1.44 + 25} \% = \sqrt{26.44} \% \approx 5.142 \%$
    *   **Transformer B:** $Z_{p.u.B} = \sqrt{1.0^2 + 4.5^2} \% = \sqrt{1.00 + 20.25} \% = \sqrt{21.25} \% \approx 4.609 \%$
    *   **Transformer C:** $Z_{p.u.C} = \sqrt{1.5^2 + 5.5^2} \% = \sqrt{2.25 + 30.25} \% = \sqrt{32.5} \% \approx 5.701 \%$

(c) **Load Sharing (kVA):**
    Since per-unit impedances are not equal, load sharing is proportional to the per-unit admittances. It's easier to work with admittances directly. Let's use the per-unit impedance magnitudes as a proxy for admittance magnitude for simpler calculation if we assume power factor contribution is similar.
    However, for accuracy, we need to use the complex per-unit admittances.

    Let's first determine the total per-unit admittance of the combination.
    $Y_{p.u.A} = 1/Z_{p.u.A} = 1/(5.142 \angle atan(5/1.2)) = 1/(5.142 \angle 76.38^{\circ}) \% = 0.1945 \angle -76.38^{\circ} \%$.
    $Y_{p.u.B} = 1/Z_{p.u.B} = 1/(4.609 \angle atan(4.5/1.0)) \% = 1/(4.609 \angle 77.47^{\circ}) \% = 0.2170 \angle -77.47^{\circ} \%$.
    $Y_{p.u.C} = 1/Z_{p.u.C} = 1/(5.701 \angle atan(5.5/1.5)) \% = 1/(5.701 \angle 74.73^{\circ}) \% = 0.1754 \angle -74.73^{\circ} \%$.

    Convert to rectangular form:
    $Y_{p.u.A} = 0.1945 (\cos(-76.38^{\circ}) + j \sin(-76.38^{\circ})) \% = 0.1945 (0.236 - j 0.972) \% = 0.0459 - j 0.1891 \%$.
    $Y_{p.u.B} = 0.2170 (\cos(-77.47^{\circ}) + j \sin(-77.47^{\circ})) \% = 0.2170 (0.217 - j 0.976) \% = 0.0471 - j 0.2117 \%$.
    $Y_{p.u.C} = 0.1754 (\cos(-74.73^{\circ}) + j \sin(-74.73^{\circ})) \% = 0.1754 (0.263 - j 0.965) \% = 0.0461 - j 0.1693 \%$.

    Total per-unit admittance:
    $Y_{p.u.total} = (0.0459 + 0.0471 + 0.0461) + j (-0.1891 - 0.2117 - 0.1693) \%$
    $Y_{p.u.total} = 0.1391 - j 0.5701 \%$.
    Magnitude: $|Y_{p.u.total}| = \sqrt{0.1391^2 + (-0.5701)^2} \% = \sqrt{0.01935 + 0.3250} \% = \sqrt{0.34435} \% \approx 0.5868 \%$.
    Angle: $\theta_Y = atan(-0.5701/0.1391) \approx atan(-4.098) \approx -76.35^{\circ}$.
    $Y_{p.u.total} \approx 0.5868 \angle -76.35^{\circ} \%$.

    Load is 500 kVA at 0.85 PF lagging.
    Total current on its base: $I_{load} = (500 \, kVA) / (33 \, kV \times \sqrt{3}) \times (1/\text{base_kVA})$. Let's use kVA directly.
    The load share is proportional to the ratio of individual admittance to total admittance.
    $S_A = S_{total} \times \frac{Y_{p.u.A}}{Y_{p.u.total}} = 500 \times \frac{0.1945 \angle -76.38^{\circ} \%}{0.5868 \angle -76.35^{\circ} \%} = 500 \times 0.3315 \angle -0.03^{\circ}$.
    $S_A = 165.75 \angle -0.03^{\circ} kVA \approx 165.75 kVA$.
    $P_A = 165.75 \cos(-0.03^{\circ}) \approx 165.74 kW$.

    $S_B = S_{total} \times \frac{Y_{p.u.B}}{Y_{p.u.total}} = 500 \times \frac{0.2170 \angle -77.47^{\circ} \%}{0.5868 \angle -76.35^{\circ} \%} = 500 \times 0.370 \angle -1.12^{\circ}$.
    $S_B = 185.0 \angle -1.12^{\circ} kVA \approx 185.0 kVA$.
    $P_B = 185.0 \cos(-1.12^{\circ}) \approx 184.78 kW$.

    $S_C = S_{total} \times \frac{Y_{p.u.C}}{Y_{p.u.total}} = 500 \times \frac{0.1754 \angle -74.73^{\circ} \%}{0.5868 \angle -76.35^{\circ} \%} = 500 \times 0.299 \angle 1.62^{\circ}$.
    $S_C = 149.5 \angle 1.62^{\circ} kVA \approx 149.5 kVA$.
    $P_C = 149.5 \cos(1.62^{\circ}) \approx 149.11 kW$.

    Total kVA = $165.75 + 185.0 + 149.5 = 500.25 \, kVA$. (Slight rounding difference).

    **Load Sharing (kVA):**
    *   Transformer A: $165.75 \, kVA$.
    *   Transformer B: $185.0 \, kVA$.
    *   Transformer C: $149.5 \, kVA$.

    Let's verify the power factor and kW/kVAR sharing.
    Total load: 500 kVA at 0.85 PF lagging.
    Total kW = $500 \times 0.85 = 425 \, kW$.
    Total kVAR = $500 \times \sin(acos(0.85)) = 500 \times 0.5268 \approx 263.4 \, kVAR$.

    Transformer A: operates at its impedance angle of $76.38^{\circ}$.
    $P_A = 165.75 \cos(76.38^{\circ}) \approx 165.75 \times 0.236 \approx 39.12 \, kW$. Incorrect.
    The power factor of the load is $0.85$ lagging ($31.79^{\circ}$).
    The angle of impedance of A is $76.38^{\circ}$.
    The angle of admittance of A is $-76.38^{\circ}$.

    Let $I_{load} = I_{load} \angle -31.79^{\circ}$.
    $I_A = I_{load} \times \frac{Y_{p.u.A}}{Y_{p.u.total}}$.
    $Y_{p.u.A} = 0.1945 \angle -76.38^{\circ}$.
    $Y_{p.u.total} = 0.5868 \angle -76.35^{\circ}$.
    Ratio = $(0.1945/0.5868) \angle (-76.38 - (-76.35)) = 0.3315 \angle -0.03^{\circ}$.
    $I_A = I_{load} \times (0.3315 \angle -0.03^{\circ})$.
    $P_A = |I_A|^2 R_A$. This method is getting too complex for a study note without computational tools.

    **Simpler approach for kVA sharing:** If per-unit impedances are different, load sharing is by admittance. The calculated kVA values are the correct answer for part (c).

(d) **Load Sharing (Unity Power Factor):**
    If the total load is 500 kVA at unity power factor, the load angle is $0^{\circ}$.
    $I_{load} = I_{load} \angle 0^{\circ}$.
    $S_A = 500 \times \frac{Y_{p.u.A}}{Y_{p.u.total}} = 500 \times (0.3315 \angle -0.03^{\circ})$.
    This implies that the magnitude of the share remains the same, but the power factor at which each transformer operates will be different.
    $S_A \approx 165.75 \, kVA$.
    $S_B \approx 185.0 \, kVA$.
    $S_C \approx 149.5 \, kVA$.

    The question asks for kVA shared. These values are the kVA shared. The power factor of the load influences the distribution of kW and kVAR, but the kVA sharing itself is primarily determined by the admittances.

---

### 5. Key Points to Remember

*   **Essential conditions are non-negotiable.** Deviations lead to severe problems.
*   **Same voltage ratio and polarity are paramount.**
*   **Same per-unit impedance is crucial for equitable load sharing.**
*   **Same frequency and vector group are necessary for proper operation.**
*   **Load sharing is inversely proportional to impedance (directly proportional to admittance).**
*   **If per-unit impedances are equal, load sharing is proportional to kVA ratings.**
*   **Differing impedance angles lead to unequal power factor sharing.**
*   **Parallel operation increases system reliability and flexibility.**

---

### 6. Relevant Textbooks and Course Outcomes Alignment

*   **Textbooks:**
    *   **Bimbhra (Ch 8):** Covers parallel operation of single and three-phase transformers, essential conditions, and load sharing. Aligns with CO4 and CO5.
    *   **Kothari & Nagrath (Ch 6, 13):** Discusses transformer connections, vector groups, and parallel operation. Aligns with CO4 and CO5.
    *   **Gupta (Ch 10):** Provides comprehensive treatment of parallel operation, including detailed numerical methods and analysis of circulating currents. Aligns with CO4 and CO5.
    *   **Murugesh Kumar (Ch 5):** Focuses on the practical aspects of parallel operation and load sharing calculations. Aligns with CO4 and CO5.

*   **Course Outcomes:**
    *   **CO1 & CO2 & CO3:** These outcomes relate to DC machines and are not directly covered in this specific *topic* of parallel operation of AC transformers. However, the understanding of electrical principles and load sharing is transferable.
    *   **CO4:** "Analyse the performance of 1-phase transformer and auto-transformer under various load conditions." This topic directly contributes by explaining how single-phase transformers perform when connected in parallel, which is a critical aspect of their operation under load.
    *   **CO5:** "Describe the constructional details and operation of 3-phase transformers." This topic expands on the operation aspect by explaining how 3-phase transformers are connected in parallel for system operation.

---
