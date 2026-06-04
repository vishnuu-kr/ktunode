---
title: "Effects of harmonics on power system equipment and loads – transformers, capacitor banks, motors and telecommunication systems"
subject: "POWER QUALITY"
module: "Module 2: Harmonics  "
branch: "Electrical and Electronics Engineering"
semester: 7
topicId: "68a200872b85456187f36973"
status: "completed"
scrapedAt: "2026-05-23T16:38:49.783Z"
---
# POWER QUALITY - Module 2: Harmonics

## Topic: Effects of Harmonics on Power System Equipment and Loads

---

### Learning Outcomes:

*   Understand the impact of harmonic distortion on power system equipment.
*   Analyze the specific effects of harmonics on transformers.
*   Explain the consequences of harmonics on capacitor banks.
*   Describe the detrimental effects of harmonics on electric motors.
*   Investigate the interference of harmonics with telecommunication systems.

---

### Course Outcomes Addressed:

*   **CO1: Identify the sources and effects of power quality problems.** (Knowledge Level: K2) - This topic directly addresses the "effects" part of this outcome by detailing how harmonics impact various equipment.
*   **CO2: Apply Fourier concepts for harmonic analysis.** (Knowledge Level: K3) - While not directly applied in this specific topic's notes, understanding the *effects* necessitates acknowledging the harmonic components derived from Fourier analysis.

---

### Key Concepts and Definitions:

*   **Harmonics:** Sinusoidal components of a periodic waveform having frequencies that are integer multiples of the fundamental frequency.
*   **Total Harmonic Distortion (THD):** A measure of the extent of harmonic distortion present in a signal. It's typically expressed as a percentage of the fundamental component's amplitude.
    *   THD (voltage) = $\frac{\sqrt{V_2^2 + V_3^2 + V_4^2 + ...}}{V_1} \times 100\%$
    *   THD (current) = $\frac{\sqrt{I_2^2 + I_3^2 + I_4^2 + ...}}{I_1} \times 100\%$
    (Dugan et al., 2012)
*   **Harmonic Order:** The ratio of the harmonic frequency to the fundamental frequency. For example, a harmonic with a frequency three times the fundamental frequency is the 3rd harmonic.
*   **Triplen Harmonics:** Odd harmonics that are multiples of three (3rd, 9th, 15th, etc.). These are particularly problematic in three-phase systems.
*   **Interharmonics:** Frequencies that are not integer multiples of the fundamental frequency. While not the focus here, they are a related power quality issue.
*   **Resonance:** A condition where the impedance of a circuit becomes very low or very high at specific frequencies, leading to excessive voltage or current amplification. This is a critical concern with capacitors.

---

### Effects of Harmonics on Power System Equipment and Loads:

Harmonic distortion, while not always immediately catastrophic, leads to a range of detrimental effects on power system equipment, often manifesting as increased losses, reduced efficiency, premature aging, and potential failure.

---

#### 1. Transformers

Transformers are significantly affected by harmonic currents and voltages, primarily due to increased eddy current and hysteresis losses, and potential overheating.

*   **Increased Losses:**
    *   **Eddy Current Losses:** These losses are proportional to the square of the frequency. Higher frequencies in harmonics mean significantly increased eddy current losses within the transformer core. (Sankaran, 2002)
    *   **Hysteresis Losses:** These losses are roughly proportional to the frequency. While not as sensitive to frequency as eddy currents, they still contribute to increased losses.
*   **Overheating:**
    *   The increased eddy current and hysteresis losses translate directly into higher temperatures within the transformer.
    *   **"K-Factor" Rating:** Transformers designed for environments with significant harmonics are often rated with a "K-factor" which accounts for the increased losses due to harmonics. A K-4 rating, for example, is suitable for applications with significant 3rd, 5th, and 7th harmonics. (Dugan et al., 2012)
    *   **Circulating Currents in Winding:**
        *   In three-phase transformers, zero-sequence harmonics (triplens: 3rd, 9th, etc.) sum up in the neutral conductor, creating a significant neutral current.
        *   In delta-connected windings or tertiary windings, triplen harmonics can circulate within the winding itself, causing localized heating without contributing to useful output power.
*   **Core Saturation:** While less common from harmonic distortion alone, extremely high harmonic content, especially in conjunction with low voltage, could theoretically exacerbate core saturation issues.
*   **Reduced Efficiency:** Increased losses directly translate to reduced overall efficiency of the transformer.
*   **Audible Noise:** Core laminations can vibrate at harmonic frequencies, leading to an audible hum or buzzing sound from the transformer.

**Example:** A transformer supplying a large number of variable frequency drives (VFDs) will likely experience higher operating temperatures and reduced lifespan if not specifically designed for harmonic mitigation.

**Important Point:** The 3rd harmonic (and other triplens) is particularly problematic for transformers due to the tendency of these currents to circulate within windings and create substantial neutral currents in three-phase systems.

---

#### 2. Capacitor Banks

Capacitor banks are crucial for power factor correction but are highly susceptible to resonance conditions when harmonics are present.

*   **Overvoltage and Overcurrent:**
    *   Capacitors have an impedance that is inversely proportional to frequency ($Z_C = \frac{1}{j\omega C}$). As frequency increases, capacitive reactance decreases.
    *   When the system's inductive reactance (from transformers, lines, etc.) and the capacitor's capacitive reactance combine, they can create a parallel or series resonant circuit.
    *   **Parallel Resonance:** Occurs when inductive reactance equals capacitive reactance. At this frequency, the circuit presents a very high impedance, leading to amplified voltage across the capacitor.
    *   **Series Resonance:** Occurs at a lower frequency where the capacitor's reactance equals the inductor's reactance. This leads to very high circulating currents within the capacitor.
*   **Resonance-Induced Failures:**
    *   If a resonant frequency coincides with a dominant harmonic frequency in the system, the amplified voltage or current can exceed the capacitor's rating, leading to rapid failure (explosion or fire). (Bollen, 1999)
    *   The presence of nonlinear loads that generate harmonics (like VFDs, SMPS) can create resonant conditions with existing power factor correction capacitor banks.
*   **Increased Reactive Power:** Even without resonance, higher harmonic frequencies mean the capacitor is absorbing more reactive power at those frequencies, contributing to higher overall currents and potentially overloading the capacitor.
*   **Dielectric Stress:** Harmonic voltages can impose additional stress on the capacitor's dielectric material, leading to premature aging and degradation.

**Example:** A facility with many computers (using switch-mode power supplies) might inject significant 3rd, 5th, and 7th harmonics. If these harmonics are close to the resonant frequency of an installed capacitor bank, it can lead to severe overvoltage and failure of the capacitor.

**Important Point:** Capacitor banks are particularly vulnerable to harmonic resonance. Their capacitance, when combined with system inductance, can create a resonant circuit at a specific frequency, leading to excessive voltage or current.

---

#### 3. Motors

Harmonics affect AC induction motors by increasing losses, reducing efficiency, causing vibration, and potentially leading to premature failure.

*   **Increased Losses and Overheating:**
    *   **Stator Winding Losses:** Harmonic currents flowing through the stator windings cause additional $I^2R$ losses, leading to increased heating.
    *   **Rotor Losses:** Harmonics induce currents in the rotor bars, causing additional $I^2R$ losses in the rotor. The frequency of these rotor currents is generally higher than fundamental frequency rotor currents, leading to increased rotor heating.
    *   **Core Losses:** Increased eddy current and hysteresis losses in the stator and rotor iron due to harmonic frequencies.
*   **Reduced Torque and Efficiency:**
    *   The harmonic voltage and current components produce torques that are not synchronized with the fundamental frequency torque. These can be positive (contributing to rotation) or negative (opposing rotation).
    *   The presence of negative sequence harmonic torques, in particular, reduces the net output torque and efficiency of the motor. (Singh et al., 2015)
*   **Increased Vibration and Noise:**
    *   Harmonic currents can create oscillating magnetic fields in the air gap, leading to pulsating torques. These pulsating torques can excite mechanical resonances in the motor structure, resulting in increased vibration and audible noise.
*   **Over-Voltages on Insulation:** Higher harmonic voltage content can increase the peak voltage stress on the motor winding insulation, potentially leading to insulation breakdown and failure over time.
*   **Reduced Lifespan:** The cumulative effect of increased heating, vibration, and insulation stress can significantly shorten the operational life of an electric motor.

**Example:** A motor powered by a VFD that is not properly filtered can experience higher operational temperatures, reduced torque output, and increased noise due to harmonic distortion.

**Important Point:** Harmonics in motors lead to extra heating, reduced torque, and increased vibration due to the creation of non-synchronous magnetic fields.

---

#### 4. Telecommunication Systems

Harmonics can cause significant interference with telecommunication systems, leading to noise, degradation of signal quality, and malfunction. This is a critical aspect of power quality for mixed-use facilities.

*   **Electromagnetic Interference (EMI):**
    *   **Inductive Coupling:** Harmonic currents flowing in power conductors generate oscillating magnetic fields that can be picked up by nearby communication cables (e.g., telephone lines, data cables). This induces unwanted voltages and currents in the communication system.
    *   **Capacitive Coupling:** Harmonic voltages present on power conductors can create oscillating electric fields that are picked up by nearby communication cables.
*   **Common Impedance Coupling:**
    *   If power and communication systems share a common ground or neutral conductor, harmonic currents flowing in the power system can create voltage drops across this shared impedance, which are then superimposed onto the communication signals. (Dugan et al., 2012)
*   **Effects on Communication Signals:**
    *   **Noise and Distortion:** The induced harmonic voltages and currents act as noise, distorting the desired communication signal. This can lead to:
        *   Reduced data transmission rates.
        *   Increased bit error rates (BER).
        *   Degraded voice quality (e.g., hum, buzz).
    *   **Malfunction of Sensitive Equipment:** Modern telecommunication equipment, including modems, routers, and digital signal processors, are designed for clean power and can be highly sensitive to even small levels of harmonic distortion. This can cause them to malfunction or shut down.
*   **Increased Neutral Current:** In commercial buildings with many single-phase nonlinear loads (like computers), the 3rd harmonic current can be substantial. This current flows in the neutral conductor. If this neutral conductor is run in parallel with communication cables or shares pathways, the magnetic fields generated by the harmonic neutral current can induce significant noise in the communication lines.

**Example:** A telecommunication data center located near an industrial plant with many VFDs might experience intermittent network issues or data corruption due to harmonic interference from the industrial power system.

**Important Point:** Harmonics can inject noise and disrupt sensitive telecommunication equipment through EMI and common impedance coupling. Proper separation of power and communication pathways, shielding, and filtering are crucial.

---

### Practice Questions:

1.  **What type of harmonic is particularly problematic for transformers and why?**
    *   **Answer:** The 3rd harmonic (and other triplens) is particularly problematic because it can circulate within delta-connected windings and create large currents in the neutral conductor of three-phase systems, leading to excessive heating.
2.  **Explain the primary danger of harmonics to capacitor banks.**
    *   **Answer:** The primary danger is the potential for harmonic resonance. If a dominant harmonic frequency matches the resonant frequency of the capacitor bank in combination with system inductance, it can lead to severe overvoltage or overcurrent, causing the capacitor to fail.
3.  **List three detrimental effects of harmonics on AC induction motors.**
    *   **Answer:** Three detrimental effects are:
        *   Increased stator and rotor winding losses (overheating).
        *   Reduced output torque and efficiency.
        *   Increased vibration and noise.
4.  **How can harmonic distortion in the power system affect telephone lines running in the same conduit?**
    *   **Answer:** Harmonic currents create oscillating magnetic fields that can inductively couple into telephone lines. Harmonic voltages create oscillating electric fields that can capacitively couple. Both introduce noise and distortion into the telephone signals, potentially leading to communication errors or malfunctions.
5.  **Define "K-Factor" in the context of transformers.**
    *   **Answer:** The K-factor is a rating assigned to transformers that accounts for the increased losses caused by harmonic currents. A higher K-factor indicates the transformer is designed to handle higher levels of harmonic distortion.

---

### Summary of Key Points to Remember:

*   **Harmonics Increase Losses:** Harmonics generally increase all types of losses (resistive, core) in electrical equipment, leading to overheating and reduced efficiency.
*   **Transformers:** Suffer from increased eddy current and hysteresis losses, potentially leading to overheating and reduced lifespan. Triplen harmonics are a major concern.
*   **Capacitor Banks:** Are highly susceptible to harmonic resonance, which can cause catastrophic failure.
*   **Motors:** Experience increased heating, reduced torque, lower efficiency, and increased vibration due to harmonic currents.
*   **Telecommunication Systems:** Are vulnerable to interference from harmonic magnetic and electric fields, leading to noise and data errors.
*   **THD is a key metric:** Understanding THD for voltage and current helps quantify the severity of harmonic problems.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


### References:

*   Dugan, R. C., Me Granaghen, M. F., & Beaty, H. W. (2012). *Electrical Power System Quality*. McGraw-Hill.
*   Sankaran, C. (2002). *Power Quality*. CRC Press.
*   Bollen, M. H. B. (1999). *Understanding Power Quality Problems*. Wiley-IEEE Press.
*   Singh, B., Chandra, A., & Al-Haddad, K. (2015). *Power Quality Problems and Mitigation Techniques*. John Wiley and Sons Ltd.

---