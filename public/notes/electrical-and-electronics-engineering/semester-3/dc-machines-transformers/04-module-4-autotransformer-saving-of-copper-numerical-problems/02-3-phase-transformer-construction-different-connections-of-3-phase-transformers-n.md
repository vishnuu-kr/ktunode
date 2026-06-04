---
title: "3- phase transformer – construction - different connections of 3-phase transformers - Υ-Υ, Δ-Δ, Υ-Δ, Δ-Υ – numerical problems"
subject: "DC MACHINES & TRANSFORMERS"
module: "Module 4: Autotransformer – saving of copper – numerical problems"
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200832b85456187f35b33"
status: "completed"
scrapedAt: "2026-05-23T16:12:27.414Z"
---
# DC MACHINES & TRANSFORMERS - Module 4: Autotransformer – saving of copper – numerical problems

## Topic: 3-Phase Transformer – Construction, Different Connections, and Numerical Problems

This module delves into the fascinating world of three-phase transformers, their construction, various connection methods, and how to analyze their performance through numerical problems. While the module title mentions "Autotransformer – saving of copper," this specific topic focuses on **three-phase transformers**. We will cover the construction and connections of three-phase transformers, and then touch upon numerical problems related to their performance.

---

### 1. Introduction to Three-Phase Transformers

A three-phase transformer is essentially three single-phase transformers combined into one unit, designed to operate on a three-phase power system. They are crucial for stepping up or stepping down voltages in three-phase power transmission and distribution.

**Key Concept:** Three-phase power systems utilize three alternating voltages that are displaced from each other by 120 electrical degrees.

---

### 2. Construction of Three-Phase Transformers

The construction of a three-phase transformer is similar to that of a single-phase transformer, but scaled up for three phases.

*   **Core:**
    *   Three-phase transformers typically use a **three-limbed core** or a **five-limbed core**.
    *   **Three-limbed core:** This is the most common type. It consists of three vertical legs or limbs, on which the primary and secondary windings of each phase are wound. The magnetic flux produced by each phase returns through the outer yokes.
    *   **Five-limbed core:** This design has two additional limbs to provide a low-reluctance path for the tertiary flux, which arises due to unbalanced conditions or harmonics. This can improve performance in certain applications.
    *   The core is made of thin laminations of silicon steel (typically 0.35 mm to 0.5 mm thick) insulated from each other by a thin coat of varnish or oxide. This reduces eddy current losses.
    *   The laminations are stacked and clamped to form the core.

*   **Windings:**
    *   Each phase has a primary winding and a secondary winding.
    *   These windings are typically made of **copper** or **aluminum** conductors.
    *   The conductors are insulated with paper or enamel.
    *   **Concentric windings:** The primary and secondary windings for each phase are usually wound concentrically on the same limb. The high-voltage (HV) winding is often placed on the outside, and the low-voltage (LV) winding is placed on the inside, or vice-versa, depending on the design and insulation requirements.
    *   **Interleaved windings:** In some cases, the HV and LV windings are interleaved to reduce leakage reactance and improve voltage regulation.

*   **Tank and Cooling:**
    *   The assembled core and windings are housed in a steel tank filled with **transformer oil**.
    *   The oil serves as an **insulating medium** and a **cooling agent**.
    *   **Cooling methods:**
        *   **ONAN (Oil Natural Air Natural):** For smaller transformers, the oil circulates naturally by convection, and heat is dissipated to the surroundings through the tank walls.
        *   **ONAF (Oil Natural Air Forced):** Fans are used to blow air over the radiator fins, accelerating heat dissipation.
        *   **OFAN (Oil Forced Air Natural):** Pumps circulate the oil, and air circulation is natural.
        *   **OFAF (Oil Forced Air Forced):** Both oil circulation and air circulation are forced, providing efficient cooling for larger transformers.
        *   **OFWF (Oil Forced Water Forced):** For very large transformers, oil is circulated through a heat exchanger cooled by water.

*   **Bushings and Terminals:**
    *   Terminals for connecting the primary and secondary windings to the external circuit are brought out through insulated bushings on the tank.

*   **Conservator Tank and Breather:**
    *   A conservator tank, mounted above the main tank, allows for the expansion and contraction of the transformer oil due to temperature changes.
    *   A breather, filled with silica gel, is connected to the conservator tank to absorb moisture from the air entering the tank during contraction, preventing oil degradation.

**Reference Textbooks:**
*   P.S. Bimbhra, Chapter 12: Three-Phase Transformers (Constructional Details)
*   D. P. Kothari & I. J. Nagrath, Chapter 15: Three-Phase Transformers (Construction)
*   J.B. Gupta, Chapter 13: Three-Phase Transformers (Constructional Features)

**Course Outcome Alignment:**
*   **CO5:** Describe the constructional details and operation of 3-phase transformers. (Knowledge Level: K2)

---

### 3. Different Connections of Three-Phase Transformers

The primary and secondary windings of a three-phase transformer can be connected in various ways to achieve different voltage and current relationships. The most common connections are:

*   **Star (Y) Connection:**
    *   One end of each of the three windings is joined together to form a neutral point. The other ends are the line terminals.
    *   **Line Voltage ($V_L$) and Phase Voltage ($V_p$):** $V_L = \sqrt{3} V_p$
    *   **Line Current ($I_L$) and Phase Current ($I_p$):** $I_L = I_p$
    *   **Vector Relationship:** The line voltage leads the corresponding phase voltage by 30 degrees.

*   **Delta (Δ) Connection:**
    *   The three windings are connected in series to form a closed loop. There is no neutral point.
    *   **Line Voltage ($V_L$) and Phase Voltage ($V_p$):** $V_L = V_p$
    *   **Line Current ($I_L$) and Phase Current ($I_p$):** $I_L = \sqrt{3} I_p$
    *   **Vector Relationship:** The line current lags the corresponding phase current by 30 degrees.

---

#### 3.1. Primary to Secondary Connections

Based on the Star and Delta connections for the primary and secondary windings, we have the following combinations:

##### 3.1.1. Star-Star (Y-Y) Connection

*   **Primary Connection:** Star (Y)
*   **Secondary Connection:** Star (Y)

*   **Voltage Relationship:**
    *   $V_{L1} = \sqrt{3} V_{p1}$
    *   $V_{L2} = \sqrt{3} V_{p2}$
    *   The transformation ratio between line voltages is the same as the ratio between phase voltages: $\frac{V_{L1}}{V_{L2}} = \frac{V_{p1}}{V_{p2}} = a$ (where 'a' is the turns ratio per phase).

*   **Current Relationship:**
    *   $I_{L1} = I_{p1}$
    *   $I_{L2} = I_{p2}$
    *   The ratio of line currents is the inverse of the ratio of phase currents: $\frac{I_{L1}}{I_{L2}} = \frac{I_{p1}}{I_{p2}} = a$

*   **Advantages:**
    *   Allows for a neutral point on both primary and secondary sides. This is beneficial for grounding and for supplying single-phase loads.
    *   Can be used for both step-up and step-down applications.

*   **Disadvantages:**
    *   **Third Harmonic Voltage:** If the primary neutral is not solidly grounded or if there is no path for third harmonic currents, a third harmonic voltage can appear across the windings, distorting the output waveform.
    *   **Poor Voltage Regulation under Unbalanced Loads:** If the neutral is not properly grounded, the voltage regulation can be poor under unbalanced load conditions.

*   **Use of Tertiary Winding or Neutral Grounding:** To mitigate the third harmonic issue, a tertiary delta winding can be included in the Y-Y connected transformer, or the neutral points can be solidly grounded.

**Reference Textbooks:**
*   P.S. Bimbhra, Chapter 12: Star-Star Connection
*   D. P. Kothari & I. J. Nagrath, Chapter 15: Y-Y Connection
*   J.B. Gupta, Chapter 13: Star-Star (Y-Y) Connection

##### 3.1.2. Delta-Delta (Δ-Δ) Connection

*   **Primary Connection:** Delta (Δ)
*   **Secondary Connection:** Delta (Δ)

*   **Voltage Relationship:**
    *   $V_{L1} = V_{p1}$
    *   $V_{L2} = V_{p2}$
    *   The ratio of line voltages is the same as the ratio of phase voltages: $\frac{V_{L1}}{V_{L2}} = \frac{V_{p1}}{V_{p2}} = a$

*   **Current Relationship:**
    *   $I_{L1} = \sqrt{3} I_{p1}$
    *   $I_{L2} = \sqrt{3} I_{p2}$
    *   The ratio of line currents is the inverse of the ratio of phase currents: $\frac{I_{L1}}{I_{L2}} = \frac{I_{p1}}{I_{p2}} = a$

*   **Advantages:**
    *   **No Third Harmonic Issue:** The delta connection provides a path for third harmonic currents, thus eliminating the third harmonic voltage distortion.
    *   **Higher Short-Circuit Current Handling Capability:** Due to the delta connection, the phase windings carry only 1/√3 of the line current, making them more suitable for handling high short-circuit currents.
    *   **Can Operate in Open Delta:** If one phase winding fails, the remaining two can still supply about 57.7% of the rated power (open-delta connection).

*   **Disadvantages:**
    *   **No Neutral Point:** A neutral point is not available on either side, which is a limitation if grounding is required.
    *   **Higher Insulation Required:** The phase windings are subjected to the full line voltage, requiring higher insulation compared to the phase windings in a Y connection.

**Reference Textbooks:**
*   P.S. Bimbhra, Chapter 12: Delta-Delta Connection
*   D. P. Kothari & I. J. Nagrath, Chapter 15: Δ-Δ Connection
*   J.B. Gupta, Chapter 13: Delta-Delta (Δ-Δ) Connection

##### 3.1.3. Star-Delta (Y-Δ) Connection

*   **Primary Connection:** Star (Y)
*   **Secondary Connection:** Delta (Δ)

*   **Voltage Relationship:**
    *   $V_{L1} = \sqrt{3} V_{p1}$
    *   $V_{L2} = V_{p2}$
    *   The ratio of line voltages is: $\frac{V_{L1}}{V_{L2}} = \frac{\sqrt{3} V_{p1}}{V_{p2}} = \sqrt{3} a$ (where 'a' is the turns ratio per phase).
    *   Therefore, the line voltage ratio is $\frac{V_{L1}}{V_{L2}} = \sqrt{3} a$.

*   **Current Relationship:**
    *   $I_{L1} = I_{p1}$
    *   $I_{L2} = \sqrt{3} I_{p2}$
    *   The ratio of line currents is: $\frac{I_{L1}}{I_{L2}} = \frac{I_{p1}}{\frac{1}{\sqrt{3}} I_{p2}} = \sqrt{3} \frac{I_{p1}}{I_{p2}} = \sqrt{3} a$
    *   Therefore, the line current ratio is $\frac{I_{L1}}{I_{L2}} = \sqrt{3} a$.

*   **Applications:**
    *   Commonly used for **step-up transformers** in power generation stations (e.g., generator to transmission line). The generator is typically Y-connected (providing a neutral for grounding), and the transmission lines are often connected to a step-up transformer with a Delta primary and Star secondary. However, for step-up, it's usually Y (primary) - Δ (secondary). Let's clarify: For **step-up**, it's common to have Y-Δ. Generator (Y) → Step-up Transformer (Y-Δ) → Transmission Line. This provides a neutral for the generator. The Δ secondary isolates the transmission line from the generator's neutral harmonics.
    *   For **step-down** applications, it's commonly used where a 3-phase supply needs to be converted to a 3-wire 3-phase system without a neutral.

*   **Advantages:**
    *   The delta secondary can handle unbalanced loads better than a Y-secondary when there's no neutral connection.
    *   Third harmonic currents are circulated within the delta, preventing them from appearing in the line voltage.

*   **Disadvantages:**
    *   No neutral point on the secondary side.
    *   The primary neutral needs proper grounding to ensure stable operation and prevent voltage distortion.

**Reference Textbooks:**
*   P.S. Bimbhra, Chapter 12: Star-Delta Connection
*   D. P. Kothari & I. J. Nagrath, Chapter 15: Y-Δ Connection
*   J.B. Gupta, Chapter 13: Star-Delta (Y-Δ) Connection

##### 3.1.4. Delta-Star (Δ-Y) Connection

*   **Primary Connection:** Delta (Δ)
*   **Secondary Connection:** Star (Y)

*   **Voltage Relationship:**
    *   $V_{L1} = V_{p1}$
    *   $V_{L2} = \sqrt{3} V_{p2}$
    *   The ratio of line voltages is: $\frac{V_{L1}}{V_{L2}} = \frac{V_{p1}}{\sqrt{3} V_{p2}} = \frac{a}{\sqrt{3}}$ (where 'a' is the turns ratio per phase).
    *   Therefore, the line voltage ratio is $\frac{V_{L1}}{V_{L2}} = \frac{a}{\sqrt{3}}$.

*   **Current Relationship:**
    *   $I_{L1} = \sqrt{3} I_{p1}$
    *   $I_{L2} = I_{p2}$
    *   The ratio of line currents is: $\frac{I_{L1}}{I_{L2}} = \frac{\sqrt{3} I_{p1}}{I_{p2}} = \sqrt{3} a$
    *   Therefore, the line current ratio is $\frac{I_{L1}}{I_{L2}} = \sqrt{3} a$.

*   **Applications:**
    *   Commonly used for **step-down transformers** in distribution systems (e.g., transmission line voltage to distribution voltage). This provides a neutral for grounding on the secondary side, which is essential for distribution systems.
    *   A common configuration is to step down from a high transmission voltage (e.g., 400 kV) to a lower distribution voltage (e.g., 11 kV or 33 kV).

*   **Advantages:**
    *   Provides a neutral point on the secondary side, which is essential for grounding and for supplying single-phase loads.
    *   The delta primary can handle third harmonics generated in the system.

*   **Disadvantages:**
    *   The line voltage on the secondary is $\sqrt{3}$ times the phase voltage of the primary. This means the secondary winding carries $\sqrt{3}$ times the current of the primary winding for the same power.
    *   The line currents are not in phase with the phase currents of the primary. There is a phase shift of 30 degrees between the line currents and the phase currents. Specifically, secondary line currents lag primary line currents by 30 degrees.

**Reference Textbooks:**
*   P.S. Bimbhra, Chapter 12: Delta-Star Connection
*   D. P. Kothari & I. J. Nagrath, Chapter 15: Δ-Y Connection
*   J.B. Gupta, Chapter 13: Delta-Star (Δ-Y) Connection

---

#### 3.2. Phase Displacement

A significant characteristic of three-phase transformer connections is the **phase displacement** between the primary and secondary line voltages.

*   **Y-Y:** 0° or 180° displacement (depending on winding direction and terminal marking). No inherent phase shift between line voltages.
*   **Δ-Δ:** 0° or 180° displacement. No inherent phase shift between line voltages.
*   **Y-Δ:** 30° phase displacement. Typically, secondary line voltages lag primary line voltages by 30°.
*   **Δ-Y:** 30° phase displacement. Typically, secondary line voltages lag primary line voltages by 30°.

**Important Point:** The phase displacement is crucial when connecting transformers in parallel or for specific system requirements. For parallel operation, the phase displacement must be the same for all transformers.

**Vector Groups:** To standardize and identify the phase displacement and winding connections, three-phase transformers are classified into **vector groups**. The vector group indicates the winding connection (Y, D, or Z for zig-zag) and the phase displacement between the primary and secondary line voltages.

*   **Example:** Yd11 indicates a Star-Delta connection where the secondary line voltage leads the primary line voltage by 330° (or lags by 30°). The "11" denotes the clock hour, representing the angle in units of 30°. So, 11 * 30° = 330°.

---

### 4. Numerical Problems on Three-Phase Transformers

These problems typically involve:
*   Calculating line and phase voltages/currents for different connections.
*   Determining the transformation ratio.
*   Calculating power, apparent power, and efficiency.
*   Analyzing the effect of unbalanced loads (though this might be more advanced).

**Key Formulas Recap:**

| Connection | Line Voltage Ratio ($V_{L1}/V_{L2}$) | Line Current Ratio ($I_{L1}/I_{L2}$) | Phase Voltage Ratio ($V_{p1}/V_{p2}$) | Phase Current Ratio ($I_{p1}/I_{p2}$) | Phase Shift (Secondary wrt Primary Line Voltage) |
| :--------- | :------------------------------- | :------------------------------- | :------------------------------- | :------------------------------- | :---------------------------------------------- |
| Y-Y        | $a$                              | $a$                              | $a$                              | $a$                              | 0°                                              |
| Δ-Δ        | $a$                              | $a$                              | $a$                              | $a$                              | 0°                                              |
| Y-Δ        | $\sqrt{3}a$                      | $\sqrt{3}a$                      | $a$                              | $a$                              | 30° Lag (typically)                             |
| Δ-Y        | $a/\sqrt{3}$                     | $\sqrt{3}a$                      | $a$                              | $a$                              | 30° Lag (typically)                             |

*Where $a = N_1/N_2$ is the turns ratio per phase.*

---

**Example Problem 1:**

A 3-phase, 50 Hz, 4000/400 V, Y-Δ connected transformer has a line current of 100 A on the high-voltage side. Calculate:
a) The phase current on the high-voltage side.
b) The line voltage on the low-voltage side.
c) The phase voltage on the low-voltage side.
d) The phase current on the low-voltage side.
e) The line current on the low-voltage side.
f) The total apparent power delivered by the transformer.

**Solution:**

Given:
*   $V_{L1}$ (HV line voltage) = 4000 V
*   $V_{L2}$ (LV line voltage) = 400 V
*   Connection: Y-Δ
*   $I_{L1}$ (HV line current) = 100 A

The turns ratio per phase $a = \frac{N_1}{N_2} = \frac{V_{p1}}{V_{p2}}$.
In a Y-Δ connection, $V_{L1} = \sqrt{3} V_{p1}$ and $V_{L2} = V_{p2}$.
So, $a = \frac{V_{L1}/\sqrt{3}}{V_{L2}} = \frac{4000/\sqrt{3}}{400} = \frac{4000}{400\sqrt{3}} = \frac{10}{\sqrt{3}}$.

a) **Phase current on the high-voltage side ($I_{p1}$):**
For Y-connected primary, $I_{L1} = I_{p1}$.
$I_{p1} = 100$ A.

b) **Line voltage on the low-voltage side ($V_{L2}$):**
Given as 400 V.

c) **Phase voltage on the low-voltage side ($V_{p2}$):**
For Δ-connected secondary, $V_{L2} = V_{p2}$.
$V_{p2} = 400$ V.

d) **Phase current on the low-voltage side ($I_{p2}$):**
We know $I_{L2} = \sqrt{3} I_{p2}$.
First, let's find $I_{L2}$. Using the current ratio for Y-Δ: $\frac{I_{L1}}{I_{L2}} = \sqrt{3}a$.
$\frac{100}{I_{L2}} = \sqrt{3} \times \frac{10}{\sqrt{3}} = 10$.
$I_{L2} = \frac{100}{10} = 10$ A.
Now, $I_{p2} = \frac{I_{L2}}{\sqrt{3}} = \frac{10}{\sqrt{3}} \approx 5.77$ A.

e) **Line current on the low-voltage side ($I_{L2}$):**
Calculated above as 10 A.

f) **Total apparent power delivered ($S$):**
We can use either the high-voltage or low-voltage side.
Using the HV side: $S = \sqrt{3} V_{L1} I_{L1} = \sqrt{3} \times 4000 \times 100 = 400\sqrt{3} \times 1000 = 400000\sqrt{3} \approx 692820$ VA or 692.82 kVA.
Using the LV side: $S = \sqrt{3} V_{L2} I_{L2} = \sqrt{3} \times 400 \times 10 = 4000\sqrt{3} \approx 6928.2$ VA or 6.93 kVA.

**Wait, there's a mistake in my calculation of $I_{L2}$ or $a$. Let's recheck the transformation ratio.**

The voltage transformation ratio per phase is $a = \frac{V_{p1}}{V_{p2}}$.
For Y-Δ: $V_{p1} = V_{L1}/\sqrt{3}$ and $V_{p2} = V_{L2}$.
So, $a = \frac{4000/\sqrt{3}}{400} = \frac{10}{\sqrt{3}}$. This is correct.

The current transformation ratio per phase is also $a = \frac{I_{p1}}{I_{p2}}$.
For Y-Δ: $I_{p1} = I_{L1}$ and $I_{p2} = I_{L2}/\sqrt{3}$.
So, $a = \frac{I_{L1}}{I_{L2}/\sqrt{3}} = \frac{\sqrt{3}I_{L1}}{I_{L2}}$.

Now, let's use the power relationship. Assuming ideal transformer, power on HV side = power on LV side.
$\sqrt{3} V_{L1} I_{L1} = \sqrt{3} V_{L2} I_{L2}$
$4000 \times 100 = 400 \times I_{L2}$
$I_{L2} = \frac{400000}{400} = 1000$ A.

Let's re-calculate phase currents using this correct $I_{L2}$:
d) **Phase current on the low-voltage side ($I_{p2}$):**
For Δ-connected secondary, $I_{L2} = \sqrt{3} I_{p2}$.
$I_{p2} = \frac{I_{L2}}{\sqrt{3}} = \frac{1000}{\sqrt{3}} \approx 577.35$ A.

e) **Line current on the low-voltage side ($I_{L2}$):**
Calculated as 1000 A.

f) **Total apparent power delivered ($S$):**
Using the HV side: $S = \sqrt{3} V_{L1} I_{L1} = \sqrt{3} \times 4000 \times 100 = 400000\sqrt{3} \approx 692.82$ kVA.
Using the LV side: $S = \sqrt{3} V_{L2} I_{L2} = \sqrt{3} \times 400 \times 1000 = 400000\sqrt{3} \approx 692.82$ kVA.

**Corrected Answers:**
a) $I_{p1} = 100$ A
b) $V_{L2} = 400$ V
c) $V_{p2} = 400$ V
d) $I_{p2} \approx 577.35$ A
e) $I_{L2} = 1000$ A
f) $S \approx 692.82$ kVA

**Important Point:** Always ensure consistency in voltage and current ratios. For Y-Δ, $V_L$ ratio involves $\sqrt{3}$ but $I_L$ ratio also involves $\sqrt{3}$.

---

**Example Problem 2:**

A 3-phase, 11 kV/400 V, Δ-Y transformer has a secondary line current of 250 A. The primary phase current is 15 A. Calculate:
a) The apparent power of the transformer.
b) The turns ratio per phase ($a = N_1/N_2$).
c) The primary line current.
d) The secondary phase voltage.

**Solution:**

Given:
*   $V_{L1}$ (HV line voltage) = 11 kV = 11000 V
*   $V_{L2}$ (LV line voltage) = 400 V
*   Connection: Δ-Y
*   $I_{L2}$ (LV line current) = 250 A
*   $I_{p1}$ (Primary phase current) = 15 A

a) **Apparent power of the transformer ($S$):**
Using the LV side: $S = \sqrt{3} V_{L2} I_{L2} = \sqrt{3} \times 400 \times 250 = 100000\sqrt{3} \approx 173205$ VA or 173.2 kVA.

b) **Turns ratio per phase ($a = N_1/N_2$):**
For Δ-Y connection: $V_{L1} = V_{p1}$ and $V_{L2} = \sqrt{3} V_{p2}$.
Turns ratio $a = \frac{V_{p1}}{V_{p2}} = \frac{V_{L1}}{V_{L2}/\sqrt{3}} = \frac{11000}{400/\sqrt{3}} = \frac{11000\sqrt{3}}{400} = \frac{110\sqrt{3}}{4} = 27.5\sqrt{3} \approx 47.6$

c) **Primary line current ($I_{L1}$):**
For Δ-connected primary, $I_{L1} = \sqrt{3} I_{p1}$.
$I_{L1} = \sqrt{3} \times 15 = 15\sqrt{3} \approx 25.98$ A.

Let's verify this using the current ratio per phase.
$a = \frac{I_{p1}}{I_{p2}}$.
For Δ-Y: $I_{p1} = I_{L1}/\sqrt{3}$ and $I_{p2} = I_{L2}$.
So, $a = \frac{I_{L1}/\sqrt{3}}{I_{L2}} = \frac{I_{L1}}{\sqrt{3}I_{L2}}$.
Using the previously calculated $I_{L1} = 15\sqrt{3}$ A and given $I_{L2} = 250$ A:
$a = \frac{15\sqrt{3}}{\sqrt{3} \times 250} = \frac{15}{250} = 0.06$.

**There is an inconsistency.** The turns ratio $a$ calculated from voltage and current must be the same. Let's re-examine the ratios carefully.

**Voltage Ratio:**
$V_{L1} = V_{p1}$
$V_{L2} = \sqrt{3} V_{p2}$
$a = \frac{V_{p1}}{V_{p2}} = \frac{V_{L1}}{V_{L2}/\sqrt{3}} = \frac{11000}{400/\sqrt{3}} = 27.5\sqrt{3} \approx 47.61$

**Current Ratio:**
$I_{L1} = \sqrt{3} I_{p1}$
$I_{L2} = I_{p2}$
$a = \frac{I_{p1}}{I_{p2}} = \frac{I_{L1}/\sqrt{3}}{I_{L2}}$

From power equality: $\sqrt{3} V_{L1} I_{L1} = \sqrt{3} V_{L2} I_{L2}$
$11000 \times I_{L1} = 400 \times 250$
$I_{L1} = \frac{400 \times 250}{11000} = \frac{100000}{11000} = \frac{100}{11} \approx 9.09$ A.

Now let's use this $I_{L1}$ to calculate the turns ratio from current:
$a = \frac{I_{L1}/\sqrt{3}}{I_{L2}} = \frac{(100/11)/\sqrt{3}}{250} = \frac{100}{11\sqrt{3} \times 250} = \frac{100}{2750\sqrt{3}} = \frac{2}{55\sqrt{3}} \approx 0.021$.

**This is still not matching.** The problem statement likely implies that the given primary phase current of 15 A is a **given condition** for the primary side, not necessarily derived from the same power output as the secondary. Let's assume the turns ratio is derived from voltage and then check the current balance.

Let's use the voltage-derived turns ratio $a \approx 47.61$.
$a = \frac{N_1}{N_2} = \frac{V_{p1}}{V_{p2}} = \frac{V_{L1}}{V_{L2}/\sqrt{3}}$

Using the current relation $a = \frac{I_{p1}}{I_{p2}} = \frac{I_{L1}/\sqrt{3}}{I_{L2}}$.
$I_{p1} = 15$ A.
$I_{p2} = I_{L2} = 250$ A.
So, $a = \frac{15}{250} = 0.06$.

This indicates a contradiction in the problem statement as given, or my interpretation of the "primary phase current is 15 A" is flawed.

**Let's assume the question meant:** The primary has a phase current of 15 A **for some operating condition**, and the secondary has a line current of 250 A. If the transformer is operating at full load, and the voltage ratings are as given, we should use the power balance.

**Revised Approach:**

1.  **Calculate apparent power ($S$) from the secondary side (given $V_{L2}$, $I_{L2}$):**
    $S = \sqrt{3} V_{L2} I_{L2} = \sqrt{3} \times 400 \times 250 = 173205$ VA or 173.2 kVA.

2.  **Calculate the primary line current ($I_{L1}$) assuming full load power transfer:**
    $S = \sqrt{3} V_{L1} I_{L1}$
    $173205 = \sqrt{3} \times 11000 \times I_{L1}$
    $I_{L1} = \frac{173205}{\sqrt{3} \times 11000} = \frac{173205}{19052.6} \approx 9.09$ A.

3.  **Calculate the turns ratio per phase ($a$) from voltage ratings:**
    $a = \frac{V_{p1}}{V_{p2}} = \frac{V_{L1}}{V_{L2}/\sqrt{3}} = \frac{11000}{400/\sqrt{3}} = \frac{11000\sqrt{3}}{400} = 27.5\sqrt{3} \approx 47.61$.

4.  **Calculate the primary phase current ($I_{p1}$) from the primary line current ($I_{L1}$) and connection type (Δ):**
    For Δ-connected primary, $I_{L1} = \sqrt{3} I_{p1}$.
    $I_{p1} = \frac{I_{L1}}{\sqrt{3}} = \frac{9.09}{\sqrt{3}} \approx 5.25$ A.

**The given primary phase current of 15 A is inconsistent with the secondary line current of 250 A if the transformer is operating at its rated voltage and carrying full load.**

**Assuming the question intended to give valid values for the calculations:**

Let's assume the primary side has a line voltage of 11 kV and the secondary has a line voltage of 400 V. The transformer is Δ-Y connected. The primary line current is to be calculated given secondary line current.

**Let's re-interpret the question:**

A 3-phase, 11 kV/400 V, Δ-Y transformer is operating. The secondary line current is 250 A.
Calculate:
a) The apparent power of the transformer.
b) The turns ratio per phase ($a = N_1/N_2$) if the voltage ratings are the primary and secondary ratings.
c) The primary line current.
d) The primary phase current.
e) The secondary phase voltage.

**Solution to the re-interpreted question:**

a) **Apparent power ($S$):**
$S = \sqrt{3} V_{L2} I_{L2} = \sqrt{3} \times 400 \times 250 = 173205$ VA or 173.2 kVA.

b) **Turns ratio per phase ($a = N_1/N_2$):**
$a = \frac{V_{p1}}{V_{p2}}$. For Δ-Y: $V_{p1} = V_{L1}$ and $V_{p2} = V_{L2}/\sqrt{3}$.
$a = \frac{11000}{400/\sqrt{3}} = \frac{11000\sqrt{3}}{400} = 27.5\sqrt{3} \approx 47.61$.

c) **Primary line current ($I_{L1}$):**
Assuming the transformer is operating at rated power:
$S = \sqrt{3} V_{L1} I_{L1}$
$173205 = \sqrt{3} \times 11000 \times I_{L1}$
$I_{L1} = \frac{173205}{\sqrt{3} \times 11000} = \frac{173205}{19052.6} \approx 9.09$ A.

d) **Primary phase current ($I_{p1}$):**
For Δ-connected primary, $I_{L1} = \sqrt{3} I_{p1}$.
$I_{p1} = \frac{I_{L1}}{\sqrt{3}} = \frac{9.09}{\sqrt{3}} \approx 5.25$ A.

e) **Secondary phase voltage ($V_{p2}$):**
For Y-connected secondary, $V_{L2} = \sqrt{3} V_{p2}$.
$V_{p2} = \frac{V_{L2}}{\sqrt{3}} = \frac{400}{\sqrt{3}} \approx 230.94$ V.

**This revised problem makes sense and allows for consistent calculations.**

**Practice Question 1:**

A 1000 kVA, 66 kV/11 kV, 3-phase transformer is connected in Δ-Y. The HV side is connected to a 66 kV, 3-phase supply. Calculate:
a) The line voltage and phase voltage on the HV side.
b) The line current and phase current on the HV side if the transformer delivers full rated kVA.
c) The line voltage and phase voltage on the LV side.
d) The line current and phase current on the LV side.
e) The phase shift between the HV and LV line voltages.

**Answers:**

a) HV Line Voltage ($V_{L1}$) = 66 kV, HV Phase Voltage ($V_{p1}$) = 66 kV (since it's Δ-connected primary).
b) HV Line Current ($I_{L1}$):
$S = \sqrt{3} V_{L1} I_{L1}$
$1000 \times 10^3 = \sqrt{3} \times 66 \times 10^3 \times I_{L1}$
$I_{L1} = \frac{1000}{66\sqrt{3}} \approx 8.75$ A.
HV Phase Current ($I_{p1}$):
For Δ, $I_{L1} = \sqrt{3} I_{p1} \Rightarrow I_{p1} = I_{L1}/\sqrt{3} = 8.75/\sqrt{3} \approx 5.05$ A.

c) LV Line Voltage ($V_{L2}$):
The voltage ratio per phase is $a = V_{p1}/V_{p2} = V_{L1}/(V_{L2}/\sqrt{3})$.
$a = \frac{66000}{11000/\sqrt{3}} = \frac{66\sqrt{3}}{11} = 6\sqrt{3} \approx 10.39$.
So, $V_{L2}/\sqrt{3} = V_{p2} = V_{p1}/a = 66000 / (6\sqrt{3}) \approx 6351.6$ V.
$V_{L2} = \sqrt{3} V_{p2} = \sqrt{3} \times 6351.6 \approx 11000$ V or 11 kV.

d) LV Phase Current ($I_{p2}$):
The current ratio per phase is $a = I_{p1}/I_{p2}$.
$I_{p2} = I_{p1}/a = 5.05 / (6\sqrt{3}) \approx 0.485$ A.
LV Line Current ($I_{L2}$):
For Y, $I_{L2} = I_{p2} = 0.485$ A.

**Wait, there's a mistake in my calculation again. Let's re-check the current on the LV side.**
Power on LV side should be same as HV side (1000 kVA).
$S = \sqrt{3} V_{L2} I_{L2}$
$1000 \times 10^3 = \sqrt{3} \times 11 \times 10^3 \times I_{L2}$
$I_{L2} = \frac{1000}{11\sqrt{3}} \approx 52.5$ A.

Now let's find the phase current $I_{p2}$ from this $I_{L2}$:
For Y-connected secondary, $I_{L2} = I_{p2}$.
So, $I_{p2} \approx 52.5$ A.

Let's re-check the turns ratio using currents.
$a = I_{p1}/I_{p2} = 5.05 / 52.5 \approx 0.096$.
This is drastically different from the voltage-derived ratio of 10.39.

**The mistake is in assuming the current calculations from the kVA rating were directly tied to the phase current values calculated earlier.** The problem should be solved by ensuring power balance and using the connection rules.

**Corrected Solution for Practice Question 1:**

Given:
*   $S_{rated} = 1000$ kVA
*   $V_{L1} = 66$ kV
*   $V_{L2} = 11$ kV
*   Connection: Δ-Y

a) **Line voltage and phase voltage on the HV side:**
$V_{L1} = 66$ kV. Since the primary is Δ-connected, $V_{p1} = V_{L1} = 66$ kV.

b) **Line current and phase current on the HV side:**
$S = \sqrt{3} V_{L1} I_{L1}$
$1000 \times 10^3 = \sqrt{3} \times 66 \times 10^3 \times I_{L1}$
$I_{L1} = \frac{1000}{66\sqrt{3}} \approx 8.75$ A.
For Δ-connected primary, $I_{p1} = I_{L1} / \sqrt{3} = 8.75 / \sqrt{3} \approx 5.05$ A.

c) **Line voltage and phase voltage on the LV side:**
The voltage ratio per phase is $a = V_{p1} / V_{p2}$.
For Δ-Y, $V_{p1} = V_{L1}$ and $V_{p2} = V_{L2}/\sqrt{3}$.
$a = \frac{66000}{11000/\sqrt{3}} = \frac{66\sqrt{3}}{11} = 6\sqrt{3} \approx 10.39$.
$V_{p2} = V_{p1} / a = 66000 / (6\sqrt{3}) \approx 6351.6$ V.
Since the secondary is Y-connected, $V_{L2} = \sqrt{3} V_{p2} = \sqrt{3} \times 6351.6 \approx 11000$ V or 11 kV. This matches the given LV rating.

d) **Line current and phase current on the LV side:**
We can use the power equation or the current ratio. Let's use power.
$S = \sqrt{3} V_{L2} I_{L2}$
$1000 \times 10^3 = \sqrt{3} \times 11 \times 10^3 \times I_{L2}$
$I_{L2} = \frac{1000}{11\sqrt{3}} \approx 52.5$ A.
For Y-connected secondary, $I_{p2} = I_{L2} = 52.5$ A.

Let's verify this with the current ratio:
$a = I_{p1} / I_{p2}$
$10.39 = 5.05 / I_{p2}$
$I_{p2} = 5.05 / 10.39 \approx 0.486$ A.
This is incorrect. The issue is in applying the turns ratio to both voltage and current separately without ensuring they are consistent with the winding connections.

**The fundamental relationship is: $V_{p1}/V_{p2} = I_{p2}/I_{p1}$ for an ideal transformer.**

Let's use the power balance correctly.
$S = \sqrt{3} V_{L1} I_{L1} = \sqrt{3} V_{L2} I_{L2}$
$V_{L1} I_{L1} = V_{L2} I_{L2}$
$66000 \times 8.75 = 11000 \times I_{L2}$
$I_{L2} = \frac{66000 \times 8.75}{11000} = 6 \times 8.75 = 52.5$ A. This matches the power calculation.

Now, let's re-verify the phase currents:
$I_{p1} = I_{L1}/\sqrt{3} = 8.75/\sqrt{3} \approx 5.05$ A. (Correct)
$I_{p2} = I_{L2} = 52.5$ A. (Correct for Y secondary)

Now check the current ratio $a = I_{p2}/I_{p1}$ (note the inversion in current ratio compared to voltage ratio).
$a = 52.5 / 5.05 \approx 10.4$.
This matches the voltage-derived turns ratio $a \approx 10.39$.

e) **Phase shift between the HV and LV line voltages:**
For a Δ-Y connection, there is a 30° phase shift. Typically, the secondary line voltage lags the primary line voltage by 30°.

**Final Corrected Answers for Practice Question 1:**

a) HV Line Voltage ($V_{L1}$) = 66 kV, HV Phase Voltage ($V_{p1}$) = 66 kV.
b) HV Line Current ($I_{L1}$) $\approx 8.75$ A, HV Phase Current ($I_{p1}$) $\approx 5.05$ A.
c) LV Line Voltage ($V_{L2}$) = 11 kV, LV Phase Voltage ($V_{p2}$) $\approx 6351.6$ V.
d) LV Line Current ($I_{L2}$) $\approx 52.5$ A, LV Phase Current ($I_{p2}$) $\approx 52.5$ A.
e) Phase shift is 30° (typically secondary lags primary).

---

**Practice Question 2:**

A 3-phase, 33 kV/11 kV, Y-Y connected transformer has a line voltage ratio of 3. The primary line current is 50 A. Calculate:
a) The phase voltage ratio.
b) The phase current ratio.
c) The line current on the secondary side.
d) The total apparent power.

**Answers:**

Given:
*   $V_{L1} = 33$ kV, $V_{L2} = 11$ kV
*   Connection: Y-Y
*   $I_{L1} = 50$ A

a) **Phase voltage ratio:**
For Y-Y, $V_{L1}/V_{L2} = V_{p1}/V_{p2} = a$.
$a = 33 kV / 11 kV = 3$.

b) **Phase current ratio:**
For Y-Y, $I_{L1}/I_{L2} = I_{p1}/I_{p2} = a$.
$I_{p1} = I_{L1} = 50$ A.
$a = I_{p1}/I_{p2} \Rightarrow 3 = 50 / I_{p2} \Rightarrow I_{p2} = 50/3 \approx 16.67$ A.

c) **Line current on the secondary side ($I_{L2}$):**
For Y-Y, $I_{L2} = I_{p2}$.
$I_{L2} = 16.67$ A.

d) **Total apparent power ($S$):**
$S = \sqrt{3} V_{L1} I_{L1} = \sqrt{3} \times 33 \times 10^3 \times 50 = 1650\sqrt{3} \times 10^3 \approx 2858.6 \times 10^3$ VA or 2858.6 kVA.

---

### 5. Autotransformer – Saving of Copper (Brief Mention from Module Title)

While the primary focus of this topic is three-phase transformers, the module title also mentions "Autotransformer – saving of copper." An autotransformer uses a single winding that serves as both the primary and secondary, with a common portion. This significantly reduces the amount of copper required compared to a two-winding transformer for the same power transfer, especially when the voltage ratio is close to 1.

**Formula for Copper Saving:**
Copper saving (%) = $100 \times (1 - \frac{1}{a})$
where 'a' is the voltage ratio (HV/LV).

**Important Point:** Autotransformers are efficient and cost-effective when the voltage ratio is close to unity. However, they have drawbacks like reduced isolation between primary and secondary, and poor voltage regulation.

---

### 6. Summary and Key Takeaways

*   **Construction:** Three-phase transformers are built using stacked laminations, concentric windings, and are typically oil-cooled.
*   **Connections:** The primary and secondary windings can be connected in Star (Y) or Delta (Δ).
*   **Common Connections:** Y-Y, Δ-Δ, Y-Δ, Δ-Y.
*   **Voltage & Current Ratios:** Each connection has specific relationships between line and phase voltages and currents, involving factors of $\sqrt{3}$ and the phase turns ratio 'a'.
*   **Phase Displacement:** Y-Δ and Δ-Y connections introduce a 30° phase shift between primary and secondary line voltages, classified by vector groups.
*   **Applications:** Y-Y for isolation and grounding, Δ-Δ for third harmonic elimination and open-delta operation, Y-Δ for stepping up, and Δ-Y for stepping down.
*   **Numerical Problems:** Focus on applying the correct connection rules, voltage/current relationships, and power balance equations.

---

### 7. Self-Assessment Questions

1.  Describe the main components of a three-phase transformer.
2.  Explain the advantages and disadvantages of a Y-Y connected transformer.
3.  What is the purpose of a delta-connected tertiary winding in a Y-Y transformer?
4.  In a Δ-Y transformer, how is the line voltage related to the phase voltage on both the primary and secondary sides?
5.  A 3-phase, 3300/440 V, 50 Hz, Δ-Y connected transformer has 200 turns on the primary delta-connected winding per phase and 20 turns on the secondary star-connected winding per phase. If the primary line current is 10 A, calculate the secondary line current.

**Answers to Self-Assessment Questions:**

1.  Main components include the core, windings (primary and secondary), tank, cooling system (radiators, fans, oil), conservator, breather, and bushings.
2.  **Advantages:** Provides neutral on both sides, suitable for grounding and single-phase loads. **Disadvantages:** Prone to third harmonic voltages if neutral is not properly handled, poor voltage regulation under unbalanced loads if neutral is not earthed.
3.  A delta-connected tertiary winding in a Y-Y transformer provides a path for third harmonic currents, thus eliminating the third harmonic voltage across the phase windings and improving the waveform of the induced voltages.
4.  In a Δ-Y transformer:
    *   **Primary (Δ):** Line voltage ($V_{L1}$) = Phase voltage ($V_{p1}$).
    *   **Secondary (Y):** Line voltage ($V_{L2}$) = $\sqrt{3}$ * Phase voltage ($V_{p2}$).
5.  Given:
    *   $V_{L1} = 3300$ V, $V_{L2} = 440$ V
    *   Connection: Δ-Y
    *   $N_{p1} = 200$ turns/phase, $N_{s1} = 20$ turns/phase (assuming 's1' refers to secondary winding turns)
    *   $I_{L1} = 10$ A

    Turns ratio per phase, $a = N_{p1}/N_{s1} = 200/20 = 10$.

    For Δ-Y connection:
    *   $V_{p1} = V_{L1} = 3300$ V
    *   $V_{p2} = V_{L2}/\sqrt{3} = 440/\sqrt{3} \approx 254$ V.

    The voltage ratio per phase: $a_{voltage} = V_{p1}/V_{p2} = 3300 / (440/\sqrt{3}) = (3300 \times \sqrt{3}) / 440 = 7.5\sqrt{3} \approx 12.99$.

    For an ideal transformer, the turns ratio must be consistent for voltage and current. Let's use the voltage-derived turns ratio to find the current.
    $a_{voltage} = N_{p1}/N_{s1} = 12.99$.

    Now, consider the current relationship for Δ-Y:
    $I_{p1} = I_{L1}/\sqrt{3} = 10/\sqrt{3} \approx 5.77$ A.
    $I_{p2} = I_{L2}$ (since secondary is Y-connected).

    Using the current ratio: $a_{current} = I_{p2}/I_{p1}$ (note: current ratio is inverse of voltage ratio).
    So, $a_{current} = N_{s1}/N_{p1} = 20/200 = 0.1$.

    This reveals an inconsistency in the problem statement if the turns and voltage ratings are both to be used simultaneously. Typically, the voltage rating dictates the turns ratio.

    Let's assume the voltage ratio and connection type are correct and the turns per phase are given to verify this.
    The voltage ratio per phase is $a = 12.99$.

    $I_{p1} = I_{L1}/\sqrt{3} = 10/\sqrt{3} \approx 5.77$ A.
    $I_{p2} = I_{p1}/a_{voltage} = 5.77 / 12.99 \approx 0.444$ A.
    Secondary line current $I_{L2} = I_{p2}$ (for Y secondary).
    $I_{L2} \approx 0.444$ A.

    **If we strictly use the given turns ratio $N_{p1}/N_{s1} = 10$:**
    $a = 10$.
    Then $V_{p1}/V_{p2} = 10 \Rightarrow 3300/V_{p2} = 10 \Rightarrow V_{p2} = 330$ V.
    $V_{L2} = \sqrt{3} V_{p2} = \sqrt{3} \times 330 \approx 571.5$ V. This contradicts the given 440 V.

    **Let's assume the voltage ratings and connection type are the primary source of truth, and the given primary current is for that scenario.**
    $V_{L1} = 3300$ V, $V_{L2} = 440$ V, Δ-Y.
    $a = V_{p1}/V_{p2} = 3300 / (440/\sqrt{3}) = 12.99$.
    $I_{L1} = 10$ A.
    $I_{p1} = I_{L1}/\sqrt{3} = 10/\sqrt{3} \approx 5.77$ A.
    $I_{p2} = I_{p1}/a = 5.77 / 12.99 \approx 0.444$ A.
    $I_{L2} = I_{p2} = 0.444$ A.

    The question is likely flawed in its parameters. However, if forced to answer based on voltage ratings and connection, the secondary line current is approximately 0.444 A. If we assume the turns ratio is correct (10) and primary line current is 10 A, then:
    $I_{p1} = 10/\sqrt{3} \approx 5.77$ A.
    $I_{p2} = I_{p1}/10 = 5.77/10 = 0.577$ A.
    $I_{L2} = I_{p2} = 0.577$ A.

    **Assuming the voltage ratings and connection type are the most reliable:**
    Secondary line current $\approx 0.444$ A.

---

This comprehensive set of notes covers the construction, various connections of three-phase transformers, their advantages, disadvantages, applications, and includes numerical examples to solidify understanding, aligning with the specified course outcomes.
