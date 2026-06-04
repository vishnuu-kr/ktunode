---
title: "Extension of instrument range using instrument transformers (CT and PT)."
subject: "CIRCUITS AND MEASUREMENTS LAB"
module: "Module 9: Extension of instrument range using instrument transformers (CT and PT)."
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200842b85456187f35cf3"
status: "completed"
scrapedAt: "2026-05-23T16:11:59.093Z"
---
# CIRCUITS AND MEASUREMENTS LAB

## Module 9: Extension of Instrument Range Using Instrument Transformers (CT and PT)

### Topic: Extension of Instrument Range Using Instrument Transformers (CT and PT)

---

### 1. Introduction to Instrument Transformers

**1.1 Purpose of Instrument Transformers:**
Instrument transformers are essential devices used to extend the range of measuring instruments (like ammeters and voltmeters) to measure high AC currents and voltages that would otherwise be unsafe or impractical to measure directly. They also serve to isolate the measuring instruments from the high voltage circuits, thereby protecting the operator and the instrument.

**1.2 Types of Instrument Transformers:**
There are two primary types of instrument transformers:
*   **Current Transformers (CTs):** Used to reduce high alternating currents to a lower, measurable value.
*   **Potential Transformers (PTs) or Voltage Transformers (VTs):** Used to reduce high alternating voltages to a lower, measurable value.

---

### 2. Current Transformers (CTs)

**2.1 Principle of Operation:**
A CT is essentially a step-up transformer for voltage but a step-down transformer for current. It consists of a primary winding (usually a few turns of thick wire) connected in series with the high-current line, and a secondary winding (many turns of thinner wire) connected to a low-range ammeter. The primary current induces a magnetic flux in the core, which in turn induces a voltage in the secondary winding, driving a secondary current.

**2.2 Ideal CT:**
An ideal CT would have a transformation ratio ($N$) equal to the ratio of the primary current ($I_p$) to the secondary current ($I_s$), and no excitation current.

*   **Transformation Ratio ($N$):** $N = \frac{\text{Number of turns in secondary winding} (N_s)}{\text{Number of turns in primary winding} (N_p)} = \frac{I_p}{I_s}$
*   **Ideal Relationship:** $I_p \times N_p = I_s \times N_s$

**2.3 Actual CT:**
In a real CT, a portion of the primary ampere-turns is used to magnetize the core (excitation ampere-turns), and the remaining ampere-turns are available to induce the secondary current.

*   $I_p \times N_p = I_e + I_s \times N_s$
    *   $I_e$: Excitation current (used for magnetization and losses).
    *   $I_p$: Primary current.
    *   $I_s$: Secondary current.
    *   $N_p$: Primary turns.
    *   $N_s$: Secondary turns.

**2.4 CT Ratio and Turns Ratio:**
*   **Turns Ratio ($N_{tr}$):** $\frac{N_s}{N_p}$
*   **Nominal Ratio (Rated Ratio):** $\frac{\text{Rated Primary Current}}{\text{Rated Secondary Current}}$ (e.g., 100/5 A)
*   **Actual Ratio:** $\frac{\text{Actual Primary Current}}{\text{Actual Secondary Current}}$

**2.5 Ratio Error:**
Ratio error is the difference between the ideal current ratio and the actual current ratio, expressed as a percentage.

*   **Ratio Error (%) =** $\frac{k_n I_s - I_p}{I_p} \times 100$
    *   $k_n$: Nominal Ratio ($\frac{\text{Rated Primary Current}}{\text{Rated Secondary Current}}$)

**2.6 Phase Angle Error:**
Phase angle error ($\delta$) is the angle between the primary current vector and the reversed secondary current vector. In an ideal CT, this angle is zero.

**2.7 Factors Affecting CT Performance:**
*   **Core Material:** High permeability materials are preferred.
*   **Frequency:** CTs are designed for specific frequencies.
*   **Burden:** The impedance connected to the secondary terminals of the CT. A higher burden can increase errors.
*   **Saturation:** If the magnetic flux exceeds the saturation flux density of the core, the CT performance degrades significantly, leading to large ratio and phase angle errors.

**2.8 Construction of CTs:**
*   **Window Type (Ring Type):** The primary conductor (busbar or cable) passes through a toroidal core with secondary winding. This is common for high currents.
*   **Bar Type:** A fixed primary bar is integrated with the secondary winding and core.
*   **Primary Winding Type:** The primary can be a single turn (bar type) or multiple turns.

**2.9 Application in Extending Ammeter Range:**
If an ammeter with a range of 0-5 A is to be used for measuring currents up to 100 A, a CT with a nominal ratio of 100/5 A is used. The CT primary is connected in series with the 100 A line, and the ammeter is connected to the CT secondary. The ammeter will then read a scaled-down current, which can be multiplied by the CT ratio (100/5 = 20) to get the actual line current.

**Example:**
A 100/5 A CT is used with a 0-5 A ammeter to measure a line current of 75 A.
The CT ratio ($k_n$) is 20.
The scaled-down current on the ammeter will be $I_s = \frac{I_p}{k_n} = \frac{75}{20} = 3.75$ A.
The measured current is 3.75 A.
The actual line current is $3.75 \text{ A} \times 20 = 75$ A.

---

### 3. Potential Transformers (PTs) / Voltage Transformers (VTs)

**3.1 Principle of Operation:**
A PT is a step-down transformer for voltage. It consists of a primary winding connected in parallel across the high-voltage line and a secondary winding connected to a low-range voltmeter. The voltage across the primary induces a voltage in the secondary, which is proportional to the turns ratio.

**3.2 Ideal PT:**
An ideal PT would have a transformation ratio ($N$) equal to the ratio of the primary voltage ($V_p$) to the secondary voltage ($V_s$), and no excitation current.

*   **Transformation Ratio ($N$):** $N = \frac{\text{Number of turns in primary winding} (N_p)}{\text{Number of turns in secondary winding} (N_s)} = \frac{V_p}{V_s}$
*   **Ideal Relationship:** $V_p \times N_s = V_s \times N_p$ (Note: $N$ is defined differently than for CTs, often as $N_p/N_s$). Let's stick to the common convention where the ratio is stated as Rated Primary Voltage / Rated Secondary Voltage.

**3.3 Actual PT:**
In a real PT, a portion of the primary voltage is dropped across the winding impedance (resistance and leakage reactance), and there's also an excitation current component.

*   $V_p \approx V_s + I_s Z_s + V_e$
    *   $V_p$: Primary voltage.
    *   $V_s$: Secondary voltage.
    *   $I_s$: Secondary current (drawn by the voltmeter and other connected loads).
    *   $Z_s$: Impedance of the secondary winding.
    *   $V_e$: Voltage required for excitation current.

**3.4 PT Ratio and Turns Ratio:**
*   **Turns Ratio ($N_{tr}$):** $\frac{N_p}{N_s}$
*   **Nominal Ratio (Rated Ratio):** $\frac{\text{Rated Primary Voltage}}{\text{Rated Secondary Voltage}}$ (e.g., 11 kV / 110 V)
*   **Actual Ratio:** $\frac{\text{Actual Primary Voltage}}{\text{Actual Secondary Voltage}}$

**3.5 Ratio Error:**
Ratio error is the difference between the ideal voltage ratio and the actual voltage ratio, expressed as a percentage.

*   **Ratio Error (%) =** $\frac{k_n V_s - V_p}{V_p} \times 100$
    *   $k_n$: Nominal Ratio ($\frac{\text{Rated Primary Voltage}}{\text{Rated Secondary Voltage}}$)

**3.6 Phase Angle Error:**
Phase angle error ($\phi$) is the angle between the primary voltage vector and the reversed secondary voltage vector. In an ideal PT, this angle is zero.

**3.7 Factors Affecting PT Performance:**
*   **Core Material:** Similar to CTs, high permeability materials are used.
*   **Frequency:** PTs are designed for specific frequencies.
*   **Burden:** The impedance connected to the secondary terminals (primarily the voltmeter).
*   **Saturation:** While less of a concern for PTs compared to CTs in normal operation, severe overvoltages can lead to saturation.

**3.8 Construction of PTs:**
PTs are typically wound transformers with a primary winding of many turns of fine wire and a secondary winding of fewer turns of fine wire, designed for low voltage. They are often oil-immersed for insulation and cooling, especially for high voltage applications.

**3.9 Application in Extending Voltmeter Range:**
If a voltmeter with a range of 0-150 V is to be used for measuring voltages up to 11 kV, a PT with a nominal ratio of 11 kV / 110 V (or 11000/110) is used. The PT primary is connected across the 11 kV line, and the voltmeter is connected to the PT secondary. The voltmeter will read a scaled-down voltage, which can be multiplied by the PT ratio (11000/110 = 100) to get the actual line voltage.

**Example:**
An 11 kV / 110 V PT is used with a 0-150 V voltmeter to measure a line voltage of 8.8 kV.
The PT ratio ($k_n$) is 100.
The scaled-down voltage on the voltmeter will be $V_s = \frac{V_p}{k_n} = \frac{8800 \text{ V}}{100} = 88$ V.
The measured voltage is 88 V.
The actual line voltage is $88 \text{ V} \times 100 = 8800$ V or 8.8 kV.

---

### 4. Important Considerations and Safety Precautions

**4.1 CT Secondary Circuit:**
*   **NEVER open-circuit the secondary of a CT while the primary is energized.** This can lead to dangerously high voltages across the secondary terminals due to the inductive nature of the winding and the absence of a voltage-limiting counter-balancing flux. The induced voltage can be thousands of volts, posing a severe shock hazard.
*   Always short-circuit the secondary terminals of a CT when the instrument is removed or when the CT is not in use.
*   The burden on the CT secondary should not exceed its rated burden for accurate measurements.

**4.2 PT Secondary Circuit:**
*   The secondary of a PT can be open-circuited without significant danger, as it is primarily a voltage source. However, connecting a very low impedance load can cause excessive current.
*   The burden on the PT secondary should not exceed its rated burden.

**4.3 Interconnection of CTs and PTs:**
*   CTs are used in series with the line to measure current.
*   PTs are used in parallel with the line to measure voltage.
*   For measuring power in AC circuits, both CTs and PTs are used. The CT primary is in series with the line, and the PT primary is in parallel with the line. The voltmeter is connected to the PT secondary, and the ammeter is connected to the CT secondary.

---

### 5. Alignment with Course Outcomes (COs)

*   **CO1: Analyse voltage current phasor relations of RLC circuits (Knowledge Level: K3):** Understanding the operation of CTs and PTs involves analyzing the magnetic flux, induced voltages, and currents, which are governed by phasor relationships and transformer principles. The errors in CTs and PTs (ratio and phase angle) directly relate to deviations from ideal phasor relationships.
*   **CO2: Verify DC network theorems by setting up various electric circuits (Knowledge Level: K3):** While this module focuses on AC circuits, the fundamental understanding of circuit analysis and measurement is prerequisite.
*   **CO3: Measure power in single and three phase circuits by various methods (Knowledge Level: K3):** Instrument transformers (CTs and PTs) are crucial for measuring power in high voltage/high current AC systems. Without them, power measurement would be impractical and unsafe. The instruments (wattmeter, voltmeter, ammeter) connected to CT/PT secondaries derive their readings from the scaled-down values provided by these transformers.
*   **CO4: Determine the calibration characteristics of various meters used in electrical systems (Knowledge Level: K3):** CTs and PTs are part of the system used to calibrate higher range meters. By using a known lower range meter with a CT/PT, we effectively extend the calibration range of that low-range meter. The accuracy of the CT/PT itself needs to be accounted for in such calibrations.
*   **CO5: Determine magnetic characteristics of different electrical devices (Knowledge Level: K3):** The core materials and magnetic behavior of CTs and PTs are central to their operation and performance. Understanding their magnetization curves and saturation points is crucial for understanding their errors.
*   **CO6: Analyse the characteristics of various types of transducer systems (Knowledge Level: K3):** CTs and PTs can be considered as transducers that convert high current/voltage into a proportional low current/voltage, allowing standard measuring instruments to be used. Their characteristics (ratio, phase angle, burden) are analogous to the specifications of other transducers.
*   **CO7: Determine electrical parameters using various bridges (Knowledge Level: K3):** This module complements bridge measurements by providing methods to measure electrical parameters in high-power systems where direct bridge connection might be impossible.
*   **CO8: Develop simulation models of electric circuits using modern simulation tools. (Knowledge Level: K3):** Students can simulate the behavior of CTs and PTs, including their errors and the impact of burden, using circuit simulation software. This reinforces theoretical understanding.

---
