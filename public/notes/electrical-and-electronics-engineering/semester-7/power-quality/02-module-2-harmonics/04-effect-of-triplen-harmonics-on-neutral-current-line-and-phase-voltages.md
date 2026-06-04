---
title: "Effect of triplen harmonics on neutral current, line and phase voltages"
subject: "POWER QUALITY"
module: "Module 2: Harmonics  "
branch: "Electrical and Electronics Engineering"
semester: 7
topicId: "68a200872b85456187f36974"
status: "completed"
scrapedAt: "2026-05-23T16:38:51.126Z"
---
# Power Quality: Module 2 - Harmonics

## Topic: Effect of Triplen Harmonics on Neutral Current, Line and Phase Voltages

---

### Learning Outcomes Covered:

*   **LO1:** Understand the nature of triplen harmonics and their generation.
*   **LO2:** Analyze the impact of triplen harmonics on neutral current in three-phase systems.
*   **LO3:** Explain how triplen harmonics affect phase and line voltages.
*   **LO4:** Identify the consequences of increased neutral current and distorted voltages.
*   **LO5:** Relate the behavior of triplen harmonics to specific sources and mitigation strategies.

---

### Course Outcomes Aligned:

*   **CO1 (K2):** Identify the sources and effects of power quality problems. (This topic directly addresses the *effects* of a specific power quality problem - harmonics).
*   **CO2 (K3):** Apply Fourier concepts for harmonic analysis. (While not directly performing calculations, the understanding of triplen harmonics relies on the concept of harmonic orders derived from Fourier analysis).
*   **CO4 (K2):** Examine power quality mitigation techniques. (Understanding the problems caused by triplen harmonics is a prerequisite for designing mitigation strategies).

---

### Introduction to Harmonics

Harmonics are sinusoidal voltages or currents having frequencies that are integer multiples of the fundamental frequency (e.g., 50 Hz or 60 Hz). In a balanced three-phase system operating at the fundamental frequency $f$, the phase voltages are typically $120^\circ$ apart.

$$
\begin{aligned}
V_a &= V_m \sin(\omega t) \\
V_b &= V_m \sin(\omega t - 120^\circ) \\
V_c &= V_m \sin(\omega t + 120^\circ)
\end{aligned}
$$

Where $\omega = 2\pi f$.

**Source of Harmonics:** Non-linear loads are the primary cause of harmonic generation. These loads draw current that is not sinusoidal even when the voltage is sinusoidal. Examples include:

*   Rectifiers (DC power supplies, UPS, adjustable speed drives)
*   Switching power supplies
*   Incandescent lamps (though less common now)
*   Arc furnaces
*   Fluorescent lighting with magnetic ballasts

**Fourier Series:** Any non-sinusoidal periodic waveform can be represented as a sum of sinusoids, each at a frequency that is an integer multiple of the fundamental frequency.

$$
f(t) = A_0 + \sum_{n=1}^{\infty} [A_n \cos(n\omega t) + B_n \sin(n\omega t)]
$$

The components $A_0$ (DC component), $A_n \cos(n\omega t) + B_n \sin(n\omega t)$ (harmonic components), and the fundamental component ($n=1$) together form the non-sinusoidal waveform.

---

### Understanding Triplen Harmonics

**Definition:** Triplen harmonics are harmonics whose frequencies are odd multiples of the fundamental frequency that are also multiples of three. These include the 3rd, 9th, 15th, 21st, etc., harmonics.

**Key Property:** In a balanced three-phase system, triplen harmonics have specific phase relationships that are crucial to understanding their effects.

*   **Fundamental (n=1):** Phase shift of $120^\circ$ between phases.
*   **3rd Harmonic (n=3):** The phase shift between the 3rd harmonic components in each phase is $3 \times 120^\circ = 360^\circ$. This means the 3rd harmonic components in all three phases are **in phase**.
*   **Higher Triplen Harmonics (n=9, 15, 21...):** These also appear in phase across the three phases.

**Mathematical Representation (for 3rd Harmonic):**

Assuming a fundamental voltage as $V_a = V_1 \sin(\omega t)$.
The corresponding 3rd harmonic in phase 'a' is $V_{a3} = V_{3m} \sin(3\omega t)$.

For a balanced system:
*   Phase 'a': $V_a = V_1 \sin(\omega t) + V_3 \sin(3\omega t)$
*   Phase 'b': $V_b = V_1 \sin(\omega t - 120^\circ) + V_3 \sin(3\omega t - 360^\circ) = V_1 \sin(\omega t - 120^\circ) + V_3 \sin(3\omega t)$
*   Phase 'c': $V_c = V_1 \sin(\omega t + 120^\circ) + V_3 \sin(3\omega t + 360^\circ) = V_1 \sin(\omega t + 120^\circ) + V_3 \sin(3\omega t)$

**Observation:** The 3rd harmonic components ($V_3 \sin(3\omega t)$) are identical in all three phases. The same applies to the 9th, 15th, etc., harmonics.

---

### Effect of Triplen Harmonics on Neutral Current

**Scenario:** Consider a balanced three-phase load where each phase is connected between the phase conductor and neutral.

**Analysis of Neutral Current:** The current in the neutral conductor ($I_n$) is the vector sum of the phase currents ($I_a, I_b, I_c$).

$$
I_n = I_a + I_b + I_c
$$

**Impact of Triplen Harmonics:**

*   **Fundamental and Non-Triplen Harmonics:** In a balanced three-phase system, the fundamental currents and non-triplen harmonic currents ($5^{th}$, $7^{th}$, $11^{th}$, etc.) cancel each other out in the neutral conductor due to their $120^\circ$ phase displacement.
    *   Example for fundamental: $I_a \angle 0^\circ + I_b \angle -120^\circ + I_c \angle +120^\circ = 0$
    *   Example for 5th harmonic: $I_{a5} \angle 0^\circ + I_{b5} \angle -5 \times 120^\circ + I_{c5} \angle +5 \times 120^\circ$. Since $5 \times 120^\circ = 600^\circ$, which is equivalent to $240^\circ$ or $-120^\circ$. The phase shifts are $0^\circ$, $-600^\circ \equiv -240^\circ \equiv +120^\circ$, and $+600^\circ \equiv +240^\circ \equiv -120^\circ$. So, the 5th harmonic currents also cancel out.

*   **Triplen Harmonics:** As established, triplen harmonic currents (3rd, 9th, 15th, etc.) are in phase across all three phases.
    *   Example for 3rd harmonic: $I_{a3} \angle 0^\circ + I_{b3} \angle -3 \times 120^\circ + I_{c3} \angle +3 \times 120^\circ$.
    *   Since $3 \times 120^\circ = 360^\circ \equiv 0^\circ$, the phase shifts are $0^\circ$, $0^\circ$, and $0^\circ$.
    *   Therefore, $I_n = I_{a3} + I_{b3} + I_{c3}$.

**Consequence:** If a three-phase system draws significant triplen harmonic currents, these currents **add up** in the neutral conductor. This can lead to:

1.  **Overheating of the Neutral Conductor:** The neutral conductor is typically sized to carry the neutral current component from unbalanced loads or single-phase loads connected between phase and neutral. It's often not sized to handle the sum of phase currents, especially if these are rich in triplen harmonics. This can lead to the neutral conductor exceeding its thermal limits.
2.  **Increased Energy Losses:** Higher currents in the neutral conductor result in increased $I^2R$ losses, contributing to overall system inefficiency.
3.  **Tripping of Protective Devices:** If the neutral current exceeds the rating of its protective device (e.g., circuit breaker or fuse), it can cause nuisance tripping.

**Example:**
Consider a system with phase currents containing fundamental, 3rd, and 5th harmonic components:
$I_a = I_{a1} + I_{a3} + I_{a5}$
$I_b = I_{b1} + I_{b3} + I_{b5}$
$I_c = I_{c1} + I_{c3} + I_{c5}$

Assuming balanced conditions for fundamental and non-triplen harmonics:
$I_{a1} + I_{b1} + I_{c1} = 0$
$I_{a5} + I_{b5} + I_{c5} = 0$

Assuming the 3rd harmonic components are in phase:
$I_{a3}$, $I_{b3}$, $I_{c3}$ are all in phase.
Let $I_{a3} = I_{b3} = I_{c3} = I_3$.

Then, the neutral current is:
$I_n = (I_{a1} + I_{b1} + I_{c1}) + (I_{a3} + I_{b3} + I_{c3}) + (I_{a5} + I_{b5} + I_{c5})$
$I_n = 0 + (I_3 + I_3 + I_3) + 0$
$I_n = 3 \times I_3$

**Important Note:** This summation effect is particularly pronounced in systems with single-phase loads connected to a three-phase supply, as these loads draw current from the neutral conductor. Non-linear loads connected in delta configurations do not contribute to neutral current problems as there is no neutral path. However, if they are connected to a wye system, their harmonic currents still circulate within the phases and, if triplen, will sum up in the neutral.

**Reference:** Dugan et al. (2012) and Sankaran (2002) extensively discuss the impact of non-linear loads and the resulting harmonic currents, including the special case of triplen harmonics and their effect on neutral conductors.

---

### Effect of Triplen Harmonics on Line and Phase Voltages

**Phase Voltages:**
The phase voltage is the voltage between a phase conductor and the neutral point.

$$
V_a = V_{a1} + V_{a3} + V_{a5} + ...
$$

Where $V_{a1}$ is the fundamental component, $V_{a3}$ is the 3rd harmonic component, etc.

Triplen harmonics, being in phase across all phases, do not inherently cause a phase-to-neutral voltage imbalance. If the source voltages are perfectly balanced and contain triplen harmonics, the phase voltages will still have the fundamental $120^\circ$ phase separation at each harmonic order.

However, the **presence** of triplen harmonics means the phase voltage waveform is distorted. The zero crossings of the fundamental voltage and the triplen harmonic voltages will not coincide, leading to a non-sinusoidal shape.

**Effect of Triplen Harmonics on Line Voltages:**
The line voltage is the voltage between two phase conductors (e.g., $V_{ab} = V_a - V_b$).

$$
V_{ab} = (V_{a1} - V_{b1}) + (V_{a3} - V_{b3}) + (V_{a5} - V_{b5}) + ...
$$

Let's analyze the triplen harmonic components:

*   **3rd Harmonic:** $V_{a3}$ and $V_{b3}$ are in phase. Therefore, $V_{a3} - V_{b3} = 0$.
*   **Higher Triplen Harmonics (9th, 15th, etc.):** Similarly, the higher triplen harmonic voltage components are also in phase across the phases. Thus, their differences ($V_{a9} - V_{b9}$, $V_{a15} - V_{b15}$, etc.) are zero.

**Consequence:** Triplen harmonics, being in phase across the phases, **do not contribute to the line voltage distortion** in a balanced three-phase system. The line voltage will primarily reflect the fundamental frequency and non-triplen harmonics.

**However, there are nuances:**

1.  **Unbalanced Systems:** If the system is unbalanced (either in voltage or load), or if there are faults, the phase relationships of harmonics can change. In such cases, triplen harmonics might appear in the line voltage.
2.  **Neutral Impedance:** If the neutral conductor has a significant impedance or is open-circuited (e.g., in a four-wire system where the neutral is not connected), the triplen harmonic currents cannot flow easily through the neutral. This can cause the triplen harmonic voltages to appear across the phases, leading to distorted phase voltages and potentially causing the triplen harmonic voltages to shift relative to each other, thus appearing in the line voltage.
3.  **Delta Windings:** Triplen harmonic currents generated by non-linear loads in a wye-connected system with a neutral can circulate in delta-connected windings if present, or in parallel paths.

**Key Observation:** The primary impact of triplen harmonics is on the neutral current. Their effect on line voltages is minimal in ideal, balanced systems.

**Reference:** Bollen (1999) highlights how harmonic voltage magnitudes affect phase and line voltages, and the special phase relationships of triplen harmonics are critical in understanding why they primarily impact the neutral.

---

### Sources of Triplen Harmonics

Triplen harmonics are predominantly generated by the following types of loads:

1.  **Single-Phase Loads Connected to a Three-Phase Four-Wire System:**
    *   **Switching Power Supplies (SMPS):** Found in computers, chargers, LED drivers, etc. These convert AC to DC using rectifiers and switching elements, drawing pulsed currents rich in odd harmonics, including the 3rd. When many such single-phase loads are connected between phase and neutral, their 3rd harmonic currents sum up in the neutral.
    *   **Fluorescent Lighting with Magnetic Ballasts:** Older fluorescent lights with magnetic ballasts draw non-sinusoidal currents.
    *   **Uninterruptible Power Supplies (UPS):** Many UPS systems employ rectifiers and PWM converters that are significant sources of harmonics.

2.  **Three-Phase Loads with Neutral Connection (Wye-Connected):**
    *   **Three-Phase Rectifiers:** Used in industrial processes, motor drives, and DC power supplies.
    *   **Three-Phase UPS Systems:** Similar to single-phase UPS, these often generate triplen harmonics.

3.  **Delta-Connected Loads (Circulating Currents):**
    *   While delta-connected loads do not draw neutral current, triplen harmonic currents generated within them can circulate within the delta winding. This can cause overheating and additional harmonic generation.

**Example:** A typical office building with many computers, printers, and other electronic devices plugged into single-phase outlets connected to a three-phase distribution system will invariably draw significant 3rd harmonic currents. These currents will add up in the neutral conductor, potentially causing issues.

**Reference:** Singh et al. (2015) provides detailed insights into various load types and their harmonic emission characteristics, categorizing which loads are particularly prone to generating triplen harmonics.

---

### Consequences of Triplen Harmonic Issues

*   **Overheating of Neutral Conductor:** As discussed, this is a primary concern, leading to potential fire hazards and insulation degradation.
*   **Overheating of Transformers:**
    *   **Wye-connected transformers with a neutral connection:** Triplen harmonic currents flowing through the neutral can cause increased losses in the transformer windings and core, leading to overheating.
    *   **K-factor transformers:** These are specifically designed to handle harmonic currents. They have a larger neutral conductor and are designed to mitigate the effects of harmonics.
    *   **Delta-connected windings:** While they don't have a neutral, triplen harmonics can circulate in delta windings, causing overheating.
*   **Equipment Malfunction and Overheating:** Electronic equipment not designed for significant harmonic distortion might malfunction or overheat due to distorted voltage waveforms or excessive neutral current.
*   **Nuisance Tripping of Protective Devices:** Overheating of the neutral can lead to its protective device tripping, interrupting the supply to loads.
*   **Reduced System Efficiency:** Increased $I^2R$ losses in conductors and transformer windings lead to lower overall system efficiency.
*   **Communication Interference:** High-frequency harmonics can sometimes interfere with communication systems operating nearby.

---

### Mitigation Techniques (Briefly touching upon relevance)

Understanding the effects of triplen harmonics informs mitigation strategies:

1.  **Neutral Conductor Sizing:** Oversizing the neutral conductor to at least 100% (and often 150% or 200%) of the phase conductor capacity is crucial in systems with significant non-linear loads.
2.  **K-Factor Transformers:** Using transformers with a K-factor rating appropriate for the expected harmonic levels.
3.  **Harmonic Filters:**
    *   **Passive Filters:** Tuned LC circuits can be used to shunt specific harmonics (like the 3rd or 5th) to ground. However, care must be taken to avoid creating parallel resonance.
    *   **Active Harmonic Filters (AHFs):** These inject compensating currents to cancel out the harmonic currents generated by loads, offering a dynamic and effective solution.
4.  **Phase Shifting Transformers:** For delta-wye transformers, using a delta winding can help to trap triplen harmonic currents within the delta, preventing them from entering the wye side or the neutral.
5.  **3-Phase Loads:** Employing three-phase, balanced loads where possible, as they generally do not contribute to neutral current issues.
6.  **Load Balancing:** While balancing loads does not eliminate harmonics, it can prevent the summation of fundamental unbalanced currents in the neutral.

**Reference:** Singh et al. (2015) and Dugan et al. (2012) provide comprehensive details on these mitigation techniques.

---

### Key Points to Remember:

*   **Triplen harmonics are odd harmonics that are multiples of three (3rd, 9th, 15th, etc.).**
*   **In a balanced three-phase system, triplen harmonic voltages and currents are in phase across all three phases.**
*   **The most significant effect of triplen harmonics is the summation of their currents in the neutral conductor, leading to high neutral currents.**
*   **High neutral currents can cause overheating of the neutral conductor and transformers, and lead to nuisance tripping of protective devices.**
*   **Triplen harmonics do NOT directly contribute to line voltage distortion in balanced systems because their phase-shifted versions are still in phase.**
*   **Single-phase non-linear loads connected to a three-phase four-wire system are primary sources of triplen harmonic currents in the neutral.**
*   **Proper sizing of the neutral conductor and the use of K-factor transformers or harmonic filters are common mitigation strategies.**

---

### Practice Questions:

1.  **Question:** What are triplen harmonics? List the first three triplen harmonic orders.
    *   **Answer:** Triplen harmonics are sinusoidal voltages or currents with frequencies that are odd multiples of the fundamental frequency and are also multiples of three. The first three triplen harmonic orders are the 3rd, 9th, and 15th harmonics.

2.  **Question:** Explain why triplen harmonic currents sum up in the neutral conductor of a three-phase four-wire system.
    *   **Answer:** In a balanced three-phase system, the fundamental and non-triplen harmonic currents ($5^{th}$, $7^{th}$, etc.) are $120^\circ$ out of phase and thus cancel each other out in the neutral. However, triplen harmonics (3rd, 9th, 15th, etc.) have phase shifts that result in them being in phase across all three phases ($3 \times 120^\circ = 360^\circ$ for the 3rd harmonic). Therefore, their currents add arithmetically in the neutral conductor.

3.  **Question:** What is the primary concern associated with high neutral currents caused by triplen harmonics?
    *   **Answer:** The primary concern is the potential for overheating of the neutral conductor, which can lead to insulation degradation, increased energy losses, nuisance tripping of protective devices, and even fire hazards. Overheating of transformers is also a significant concern.

4.  **Question:** How do triplen harmonics affect line voltages in a balanced three-phase system? Justify your answer.
    *   **Answer:** In a balanced three-phase system, triplen harmonics have the same phase relationship in all three phases (they are in phase). When calculating line voltage ($V_{ab} = V_a - V_b$), the triplen harmonic components in $V_a$ and $V_b$ are identical and in phase, so their difference is zero. Therefore, triplen harmonics do not contribute to line voltage distortion in balanced systems.

5.  **Question:** Provide two common sources of triplen harmonics.
    *   **Answer:** Two common sources are:
        *   Single-phase non-linear loads like computers, LED drivers, and switching power supplies connected to the neutral.
        *   Three-phase loads that draw pulsed currents, such as three-phase rectifiers or certain types of UPS systems.

---

### End of Module 2 - Harmonics (Topic: Effect of Triplen Harmonics)

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
