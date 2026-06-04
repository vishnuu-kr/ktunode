---
title: "Scott Connections (CO4)"
subject: "DC MACHINES & TRANSFORMERS LAB"
module: "Module 16: Scott Connections (CO4)"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200852b85456187f360e5"
status: "completed"
scrapedAt: "2026-05-23T16:15:46.201Z"
---
# DC MACHINES & TRANSFORMERS LAB - Module 16: Scott Connections (CO4)

**Course Outcome Addressed:** CO4: Examine the performance of individual and parallel connected single-phase transformers by conducting load/no-load tests (Knowledge Level: K3)

## 1. Introduction to Scott Connections

Scott connection, also known as the Scott-Tisza connection, is a method of connecting two single-phase transformers to obtain a balanced three-phase output from a two-phase input, or vice versa. This is particularly useful when a three-phase system needs to supply single-phase loads that are unequally distributed, or when a two-phase system needs to be converted to a three-phase system.

**Key Concepts:**

*   **Two-Phase System:** A power system with two alternating currents that are equal in magnitude and frequency but displaced in phase by 90 electrical degrees.
*   **Three-Phase System:** A power system with three alternating currents that are equal in magnitude and frequency but displaced in phase by 120 electrical degrees.
*   **Phase Displacement:** The angular difference between the phase voltages or currents in a polyphase system.

**Significance:**

*   **Conversion:** Allows for the conversion of a two-phase supply to a three-phase load or a three-phase supply to a two-phase load.
*   **Balancing Loads:** Useful for supplying unbalanced three-phase loads where traditional three-phase transformers might lead to significant imbalances.
*   **Flexibility:** Provides a flexible solution for specific power system configurations.

## 2. Scott Connection of Two Single-Phase Transformers

The Scott connection uses two single-phase transformers, typically referred to as the **main transformer** and the **teaser transformer**.

**2.1. Transformer Requirements:**

*   **Main Transformer:** A standard single-phase transformer with its primary winding connected across one phase of the two-phase supply. Its secondary winding is connected to two of the three output lines.
*   **Teaser Transformer:** A single-phase transformer with a special winding arrangement. Its primary winding is tapped at the midpoint (50% tap) and connected to the second phase of the two-phase supply. Its secondary winding is connected to the third output line and one of the output lines from the main transformer.

**2.2. Winding Connections (Two-Phase to Three-Phase):**

Let's consider a two-phase supply with voltages $V_{A}$ and $V_{B}$, where $V_{B}$ lags $V_{A}$ by 90 degrees.

**Primary Side (Two-Phase Input):**

*   **Main Transformer Primary:** Connected across phase A of the two-phase supply.
*   **Teaser Transformer Primary:** Connected across the midpoint of the main transformer's primary winding. This effectively connects it to a voltage that is 90 degrees out of phase with the main transformer primary voltage, creating the necessary phase shift.

**Secondary Side (Three-Phase Output):**

*   **Main Transformer Secondary:**
    *   One end connected to output line R.
    *   The other end connected to output line S.
*   **Teaser Transformer Secondary:**
    *   One end connected to output line T.
    *   The other end connected to the midpoint of the main transformer's secondary winding (which is connected between lines R and S).

**Diagrammatic Representation:**

*(A diagram illustrating the Scott connection would be highly beneficial here. It would show the two transformers, their primary windings connected to the two-phase supply (with the teaser primary tapped at 50%), and their secondary windings connected to form the three-phase output.)*

**2.3. Voltage and Current Relationships:**

Assuming identical turns ratio (N) for both transformers and neglecting magnetizing current:

*   **Primary Voltages:**
    *   $V_{main\_primary} = V_A$
    *   $V_{teaser\_primary} = V_A / 2$ (if the tap is at the midpoint, effectively half of $V_A$). However, for a proper 90-degree phase relationship, the teaser primary voltage should be phase-shifted and of a specific magnitude. In practice, the teaser transformer is designed with a primary winding rated for the full phase voltage, but it is tapped at 50% of its winding, and this tap is connected to the second phase of the two-phase supply. So, $V_{teaser\_primary}$ is effectively $V_B$ but derived from the two-phase supply. A better way to think about it is that the teaser primary winding is wound for a specific voltage, and this winding is connected to the second phase of the two-phase input.

*   **Secondary Voltages (per phase if ideal):**
    *   Let the turns ratio be $N = N_{primary} / N_{secondary}$.
    *   $V_{main\_secondary} = V_A / N$
    *   $V_{teaser\_secondary} = V_B / N$

*   **Output Line Voltages (for a balanced three-phase load):**
    *   Line R: Connected to one end of the main secondary.
    *   Line S: Connected to the other end of the main secondary.
    *   Line T: Connected to one end of the teaser secondary and the midpoint of the main secondary.

    To achieve balanced three-phase voltages ($V_R$, $V_S$, $V_T$) displaced by 120 degrees, the secondary windings must be designed such that the voltage across the main secondary ($V_{main\_secondary}$) and the voltage across the teaser secondary ($V_{teaser\_secondary}$) are appropriately related.

    For a balanced three-phase output, the voltage induced in the teaser secondary winding needs to be equal in magnitude to the voltage induced in half of the main secondary winding, and phase-shifted by 90 degrees.

    Consider the main transformer secondary voltage $V_{RS}$. The teaser transformer's primary is connected to $V_B$. The teaser transformer's secondary $V_T'$ is connected to $V_R$ and the midpoint of $V_{RS}$.

    Let's assume $V_A = V_{\phi} \angle 0^\circ$ and $V_B = V_{\phi} \angle -90^\circ$.

    If both transformers have a turns ratio of 1:1 for simplicity, and the main transformer primary is connected to $V_A$, and the teaser transformer primary is connected to $V_B$ (with appropriate winding design):

    *   $V_{main\_secondary}$ between points X and Y (representing connections to R and S) will be $V_{\phi} \angle 0^\circ$.
    *   $V_{teaser\_secondary}$ between points Z and W (representing connections to T and midpoint of RS) will be $V_{\phi} \angle -90^\circ$.

    If point W is connected to the midpoint of the main secondary (which means it's essentially connected to a point at half the voltage of the main secondary if we consider R and S as terminals), then to get balanced three-phase output:

    The main transformer secondary is connected between lines R and S. Let's assume the voltage $V_{RS}$ has a certain magnitude and phase.
    The teaser transformer secondary is connected between line T and the midpoint of the main transformer secondary.

    To obtain balanced three-phase voltages:
    *   $V_R$ and $V_S$ will have a voltage difference $V_{main\_secondary}$.
    *   $V_T$ and the midpoint of $V_{main\_secondary}$ will have a voltage difference $V_{teaser\_secondary}$.

    For balanced three-phase output (120-degree phase displacement), the voltage generated by the teaser transformer secondary must be equal in magnitude to the voltage generated by half of the main transformer secondary winding and phase-shifted by 90 degrees.

    **Crucial Design Aspect:** The teaser transformer's primary winding is designed with a tap at the 50% point. This tap is connected to the second phase of the two-phase supply. The voltage across the entire primary winding of the teaser transformer is thus $V_B$, and the voltage across the tapped portion (connected to the supply) is $V_B$. The voltage induced in the secondary of the teaser transformer will be proportional to $V_B$, and the voltage induced in the secondary of the main transformer will be proportional to $V_A$.

    To achieve balanced three-phase output, the **turns ratio** of the teaser transformer is typically adjusted. A common practice is to use a main transformer with a turns ratio of 1:1 and a teaser transformer with a turns ratio of approximately 0.866:1 (or adjusted to provide the correct voltage magnitude for balancing).

    **Simplified Voltage Relationship for Balanced 3-Phase Output:**

    Let $V_A$ and $V_B$ be the two-phase input voltages, with $V_B$ lagging $V_A$ by 90 degrees.
    Let $V_{RS}$, $V_{ST}$, $V_{TR}$ be the three-phase output voltages.

    If the main transformer has a turns ratio $n_1$ and the teaser transformer has a turns ratio $n_2$:

    $V_{RS} \approx V_A / n_1$
    $V_{TS} \approx V_B / n_2$

    For balanced three-phase output, we need:
    *   $|V_{RS}| = |V_{ST}| = |V_{TR}|$
    *   $V_{ST}$ and $V_{TR}$ phase-shifted by 120 degrees relative to each other and $V_{RS}$.

    The connection ensures this phase shift. Specifically, the voltage $V_T$ is generated by the teaser transformer, and it's connected in series with half of the main transformer's secondary to form the other two lines of the three-phase system.

    **Example:**
    If the two-phase supply is 100V at 0 degrees and 100V at -90 degrees.
    Let the main transformer be 1:1 and the teaser transformer be 0.866:1.

    $V_{RS} \approx 100V \angle 0^\circ$
    $V_{main\_secondary} = 100V \angle 0^\circ$
    $V_{teaser\_secondary} \approx (100V / 0.866) \angle -90^\circ = 115.47V \angle -90^\circ$

    The connection is such that one end of the main secondary is R, the other is S. The teaser secondary is connected between T and the midpoint of RS.
    The voltage $V_{TS}$ will be the phasor difference between the voltage at T and the voltage at S.
    The voltage $V_{TR}$ will be the phasor difference between the voltage at T and the voltage at R.

    This requires careful voltage balancing by choosing appropriate turns ratios. The key is that the voltage generated by the teaser transformer secondary is equal in magnitude to the voltage generated by half of the main transformer secondary winding and is phase-shifted by 90 degrees.

    **Simplified View for Lab:**
    *   Main transformer primary connected to phase 1 of the two-phase input.
    *   Teaser transformer primary connected to phase 2 of the two-phase input.
    *   Main transformer secondary connected to two of the three output lines (e.g., R and S).
    *   Teaser transformer secondary connected to the third output line (T) and the midpoint of the main transformer secondary.

    **Important Note:** For perfect balance, the teaser transformer's primary winding must be designed to handle the full phase voltage of the two-phase input, and it's tapped at the center. The voltage appearing across the tapped part is then half the voltage across the entire primary winding. However, for the Scott connection to work as intended, the voltage induced in the teaser secondary needs to be specifically related to the voltage induced in the main secondary to create 120-degree phase shifts. This is often achieved by using a main transformer with a specific ratio and a teaser transformer with a different ratio, or by designing the teaser transformer with a special winding.

    **In the lab context, you'll be given transformers specifically designed for Scott connections.**

## 3. Performance Examination (CO4)

The primary goal of this lab is to examine the performance of Scott-connected transformers. This involves conducting load and no-load tests, similar to those performed on single-phase or parallel-connected transformers.

**3.1. Tests to be Conducted:**

*   **No-Load Test:** To determine the core losses and magnetizing reactance.
*   **Short-Circuit Test:** To determine the winding resistances and leakage reactances.
*   **Load Test:** To determine the voltage regulation, efficiency, and observe the behavior under varying load conditions.

**3.2. Equipment Required:**

*   Two single-phase transformers suitable for Scott connection (often one standard and one with a 50% tap on the primary).
*   Two-phase AC supply (variable voltage).
*   Three-phase load bank (resistive, inductive, or both).
*   Voltmeter (AC).
*   Ammeter (AC).
*   Wattmeter (AC).
*   Rheostats (for variable loads).
*   Connecting wires.

**3.3. Procedure for No-Load Test:**

1.  **Connections:**
    *   Connect the primary of the main transformer across one phase of the two-phase supply.
    *   Connect the primary of the teaser transformer to the midpoint of the main transformer's primary winding.
    *   Connect the secondary of the main transformer to two output lines (e.g., R and S).
    *   Connect the secondary of the teaser transformer to the third output line (T) and the midpoint of the main transformer's secondary (between R and S).
    *   Connect a voltmeter, ammeter, and wattmeter in series with the primary of the main transformer to measure input voltage, current, and power.
    *   Connect voltmeters to measure the voltages across the secondary terminals (R-S, S-T, T-R) to check for balance.
    *   Keep the secondary side open-circuited (no load connected).

2.  **Operation:**
    *   Start with the variable AC supply at zero voltage.
    *   Gradually increase the voltage to the rated primary voltage of the main transformer.
    *   Record the primary voltage ($V_{0}$), primary current ($I_{0}$), and primary power ($P_{0}$) for the main transformer.
    *   Simultaneously, record the secondary line voltages ($V_{RS}$, $V_{ST}$, $V_{TR}$) to check the degree of balance.

3.  **Calculations (from No-Load Test):**
    *   **Core Losses ($P_{core}$):** Since the excitation current is very small, the power measured is approximately equal to the core losses at rated voltage. $P_{core} \approx P_{0}$.
    *   **Magnetizing Branch Parameters (Equivalent Circuit):**
        *   The input impedance on no-load is $Z_{NL} = V_{0} / I_{0}$.
        *   The equivalent resistance representing core loss is $R_c = V_{0}^2 / P_{0}$.
        *   The equivalent reactance representing magnetization is $X_m$. First, calculate the parallel impedance $Z_{eq} = R_c || jX_m = \frac{R_c jX_m}{R_c + jX_m}$. We know $Z_{NL}$ from the test.
        *   Alternatively, we can find the component of no-load current which is the magnetizing current and the component which is the core loss current.
            *   $I_{w}$ (iron loss component) $= I_{0} \cos(\phi_{0}) = P_{0} / V_{0}$.
            *   $I_{m}$ (magnetizing component) $= I_{0} \sin(\phi_{0}) = \sqrt{I_{0}^2 - I_{w}^2}$.
            *   $R_c = V_{0} / I_{w}$.
            *   $X_m = V_{0} / I_{m}$.

**3.4. Procedure for Short-Circuit Test:**

1.  **Connections:**
    *   Make the Scott connection as before.
    *   **Short-circuit the secondary terminals** (R, S, T) together or short-circuit the terminals where the load would normally be connected.
    *   Connect a voltmeter, ammeter, and wattmeter in series with the primary of the main transformer.
    *   The primary side is connected to the variable AC supply.

2.  **Operation:**
    *   Start with the variable AC supply at zero voltage.
    *   Gradually increase the voltage until the **rated current flows in the secondary windings** (or rated current flows in the primary of the main transformer). Be cautious not to exceed rated currents.
    *   Record the primary voltage ($V_{sc}$), primary current ($I_{sc}$), and primary power ($P_{sc}$) for the main transformer.
    *   Also, record the current flowing in the primary of the teaser transformer (if possible) and the secondary line currents to ensure they are approximately equal and at rated value.

3.  **Calculations (from Short-Circuit Test):**
    *   **Equivalent Impedance ($Z_{eq}$):** $Z_{eq} = V_{sc} / I_{sc}$.
    *   **Equivalent Resistance ($R_{eq}$):** The power measured on short circuit ($P_{sc}$) is primarily due to the winding copper losses. $P_{sc} = I_{sc}^2 R_{eq}$. Therefore, $R_{eq} = P_{sc} / I_{sc}^2$. This $R_{eq}$ is the equivalent resistance referred to the primary side of the main transformer.
    *   **Equivalent Reactance ($X_{eq}$):** $Z_{eq}^2 = R_{eq}^2 + X_{eq}^2$. So, $X_{eq} = \sqrt{Z_{eq}^2 - R_{eq}^2}$. This $X_{eq}$ is the equivalent leakage reactance referred to the primary side.

    **Referral to Secondary:**
    These equivalent parameters ($R_{eq}$, $X_{eq}$) are for the main transformer. For the teaser transformer, similar calculations would be made if it were tested individually or if its primary side were accessible for the SC test. In the Scott connection, the overall impedance of the combined unit is what matters. For detailed analysis, it's often assumed that the equivalent parameters of the main and teaser transformers are determined separately.

    **Important:** In a Scott connection, it is crucial that both transformers have similar impedance characteristics for balanced operation. The $R_{eq}$ and $X_{eq}$ determined from the main transformer's SC test are often used as representative values for the entire Scott connection, assuming both transformers are identical or closely matched.

**3.5. Procedure for Load Test:**

1.  **Connections:**
    *   Make the Scott connection as before.
    *   Connect the three-phase load bank to the output terminals R, S, and T.
    *   Connect instruments to measure input quantities (primary voltage, current, power of the main transformer) and output quantities (secondary line voltages, line currents, total three-phase power).

2.  **Operation:**
    *   Start with no load connected to the secondary.
    *   Gradually apply the rated voltage to the primary of the main transformer.
    *   Adjust the load bank to draw different load currents, starting from no load and going up to rated load. Ensure the load is applied as equally as possible to all three output lines for balanced operation, or to specifically test unbalanced conditions.
    *   For each load step, record:
        *   Primary voltage ($V_1$), primary current ($I_1$), primary power ($P_1$) for the main transformer.
        *   Secondary line voltages ($V_{RS}$, $V_{ST}$, $V_{TR}$).
        *   Secondary line currents ($I_R$, $I_S$, $I_T$).
        *   Total three-phase output power ($P_{out}$).

3.  **Calculations (from Load Test):**
    *   **Efficiency ($\eta$):**
        The efficiency is calculated as:
        $\eta = (P_{out} / P_{in}) \times 100\%$
        Where $P_{in} = P_1$ (measured input power to the main transformer).

    *   **Voltage Regulation (VR):**
        Voltage regulation is the change in secondary voltage from no-load to full-load, expressed as a percentage of the full-load voltage. For a three-phase system, it's typically calculated for each line or an average.
        $VR = \frac{|V_{NL} - V_{FL}|}{|V_{FL}|} \times 100\%$
        Where $V_{NL}$ is the no-load voltage (measured in the no-load test) and $V_{FL}$ is the full-load voltage. It's important to note which line voltage is being considered, or an average can be taken. Ideally, the Scott connection should provide balanced voltages, so $V_{NL}$ and $V_{FL}$ for each line should be monitored.

    *   **Losses at Different Loads:**
        *   Total losses = $P_{in} - P_{out}$.
        *   **Constant Losses (Core Losses):** From the no-load test, $P_{core} \approx P_0$.
        *   **Variable Losses (Copper Losses):** These are proportional to the square of the current. $P_{cu} = I^2 R_{eq}$. In a Scott connection, this needs to be considered for both transformers. If we assume identical transformers with equivalent resistance $R_{eq}$ (referred to primary), the total copper loss would be approximately $I_{1\_main}^2 R_{eq\_main} + I_{1\_teaser}^2 R_{eq\_teaser}$. If the transformers are identical, $R_{eq\_main} = R_{eq\_teaser} = R_{eq}$.
            *   The current in the primary of the main transformer ($I_{1\_main}$) is measured.
            *   The current in the primary of the teaser transformer ($I_{1\_teaser}$) is harder to measure directly in the lab if it's tapped at the midpoint. However, the current in the main transformer's primary is related to the total load and the phase voltages.
            *   A simplified approach for copper loss calculation can be to use the measured input current and an equivalent resistance. $P_{cu} \approx I_{1\_main}^2 R_{eq\_main} + I_{1\_teaser}^2 R_{eq\_teaser}$. If both transformers are identical with $R_{eq}$ (referred to their respective primaries), and the current in their primaries are $I_{p1}$ and $I_{p2}$, then $P_{cu} = I_{p1}^2 R_{eq} + I_{p2}^2 R_{eq}$.
            *   In practice, for the Scott connection, the copper losses are more complex to attribute precisely to each transformer's primary due to the tapping. A common approximation is to consider the total copper losses as related to the total apparent power delivered.

    **Practical Approach to Losses:**
    Total Losses = Input Power - Output Power.
    Total Losses = Core Losses + Copper Losses.
    $P_{losses} = P_{core} + P_{cu}$
    $P_{cu} = P_{losses} - P_{core}$

    **Efficiency Calculation Verification:**
    Calculate efficiency using the formula:
    $\eta = \frac{P_{out}}{P_{out} + P_{core} + P_{cu\_estimated}}$
    Where $P_{cu\_estimated}$ can be estimated based on the load current and the equivalent resistance determined from the short-circuit test.

## 4. Key Concepts and Definitions for Scott Connections

*   **Main Transformer:** The single-phase transformer whose primary is connected directly across one phase of the two-phase supply.
*   **Teaser Transformer:** The single-phase transformer whose primary is connected to the midpoint of the main transformer's primary winding. It is designed to produce the necessary 90-degree phase shift.
*   **Two-Phase Supply:** An AC power supply with two voltages displaced by 90 degrees.
*   **Three-Phase Supply:** An AC power supply with three voltages displaced by 120 degrees.
*   **Scott-Tisza Connection:** Another name for the Scott connection, acknowledging the contributions of Scott and Tisza.
*   **Phase Balance:** In a three-phase system, having equal magnitudes of phase voltages and currents displaced by 120 degrees. The Scott connection aims to achieve this from a two-phase input.
*   **Unbalanced Load:** A load where the currents drawn by the phases are not equal in magnitude or phase. Scott connections can handle unbalanced loads better than some other three-phase configurations.
*   **Voltage Regulation:** A measure of the change in terminal voltage from no-load to full-load.
*   **Efficiency:** The ratio of output power to input power.

## 5. Important Points to Remember

*   **Transformer Matching:** For optimal performance and balanced output, the two single-phase transformers used in a Scott connection should have identical ratings and similar impedance characteristics.
*   **Teaser Transformer Design:** The teaser transformer's primary winding is typically designed with a tap at the 50% mark. This is crucial for creating the 90-degree phase shift in the primary circuit.
*   **Turns Ratio:** The turns ratios of the main and teaser transformers are critical for achieving a balanced three-phase output. Often, the teaser transformer has a slightly different turns ratio than the main transformer.
*   **Phase Shift:** The Scott connection intrinsically creates a 90-degree phase shift between the voltages applied to the primaries of the two transformers, which, when combined with the secondary winding configurations, results in a 120-degree phase shift for the three-phase output.
*   **Load Balancing:** While Scott connections can handle unbalanced loads, they are most efficient and provide the most balanced output when supplying balanced loads.
*   **Instrumentation:** Accurate measurement of voltages, currents, and power is essential for performance analysis. Ensure all instruments are properly calibrated and connected.
*   **Safety:** Always follow standard laboratory safety procedures when working with electrical equipment and high voltages.

## 6. Practice Questions and Exercises

**Q1:** What is the primary purpose of using a Scott connection for transformers?
**Answer:** To convert a two-phase supply to a three-phase supply, or vice versa, and to provide flexibility in handling unbalanced loads.

**Q2:** Briefly describe the roles of the main transformer and the teaser transformer in a Scott connection.
**Answer:** The main transformer's primary is connected across one phase of the two-phase supply, and its secondary forms two lines of the three-phase output. The teaser transformer's primary is connected to the midpoint of the main transformer's primary, and its secondary forms the third line of the three-phase output, connected to the midpoint of the main transformer's secondary.

**Q3:** If a two-phase supply has voltages $V_A = 100V \angle 0^\circ$ and $V_B = 100V \angle -90^\circ$, and the main transformer has a turns ratio of 1:1, what would be the ideal voltage induced in the secondary of the teaser transformer (assuming a suitable turns ratio for balance) to achieve a balanced three-phase output?
**Answer:** To achieve a balanced three-phase output, the teaser transformer's secondary voltage magnitude needs to be equal to the main transformer's secondary voltage magnitude, and phase-shifted by 90 degrees relative to the main secondary voltage. So, if $V_{main\_secondary} = 100V \angle 0^\circ$, then $V_{teaser\_secondary}$ needs to be approximately $100V \angle -90^\circ$. This implies the teaser transformer's turns ratio needs to be adjusted accordingly.

**Q4:** How are core losses determined from the no-load test of a Scott connection?
**Answer:** The core losses are approximately equal to the total power input measured during the no-load test ($P_0$), as the copper losses are negligible due to the very small no-load current.

**Q5:** How are the equivalent resistance ($R_{eq}$) and reactance ($X_{eq}$) of the Scott connection typically determined?
**Answer:** These are usually determined from the short-circuit test, where the secondary is short-circuited, and measurements of input voltage, current, and power are taken. The equivalent resistance is calculated as $R_{eq} = P_{sc} / I_{sc}^2$, and the equivalent reactance is calculated as $X_{eq} = \sqrt{(V_{sc}/I_{sc})^2 - R_{eq}^2}$. These values are typically representative of the main transformer and assumed to be similar for the teaser transformer.

**Q6:** Explain how to calculate the efficiency of a Scott connection.
**Answer:** Efficiency ($\eta$) is calculated as the ratio of output power ($P_{out}$) to input power ($P_{in}$): $\eta = (P_{out} / P_{in}) \times 100\%$. $P_{in}$ is the total power consumed by the primary side (e.g., measured on the main transformer's primary).

**Q7:** What is voltage regulation and how is it calculated for a Scott connection?
**Answer:** Voltage regulation is the percentage change in secondary terminal voltage from no-load to full-load. It is calculated as $VR = \frac{|V_{NL} - V_{FL}|}{|V_{FL}|} \times 100\%$. For a Scott connection, it's important to monitor the voltage regulation of all three output lines.
