---
title: "constant current source."
subject: "LINEAR INTEGRATED CIRCUITS"
module: "Module 1: Differential Amplifiers:  Differential amplifier configurations using BJT"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe565"
status: "completed"
scrapedAt: "2026-05-23T17:49:38.661Z"
---
# Study Notes: Constant Current Source in Differential Amplifiers using BJT

**Subject:** LINEAR INTEGRATED CIRCUITS
**Module:** Module 1: Differential Amplifiers
**Topic:** Constant Current Source

---

### 1. Introduction to Constant Current Sources

*   **Definition:** A constant current source (CCS) is an electronic circuit that delivers a stable, predictable current regardless of variations in the voltage across it or the load it drives. In the context of differential amplifiers, it serves as a crucial component to provide a stable emitter current, which is essential for achieving high performance.

*   **Importance in Differential Amplifiers:**
    *   **Common-Mode Rejection Ratio (CMRR):** A well-designed CCS significantly improves the CMRR of a differential amplifier. By providing a constant current, it ensures that common-mode signals (signals present on both inputs) are effectively rejected. (Ref: Roy D. C. and S. B. Jain, Chapter 7; Sedra A. S. and K. C. Smith, Chapter 4)
    *   **Input Impedance:** A high output impedance of the CCS contributes to a higher input impedance of the differential amplifier.
    *   **Gain Stability:** The gain of a differential amplifier is inversely proportional to the emitter resistance. By using a CCS, which effectively presents a very high "resistance" to the emitter, the gain becomes less dependent on variations in transistor parameters or supply voltages, leading to more stable gain.
    *   **Symmetrical Operation:** For symmetrical operation of the differential pair, the emitter currents must be equal. A CCS helps achieve this by providing identical current to both emitters (if a single CCS is used).

*   **Ideal vs. Real Constant Current Source:**
    *   **Ideal:** An ideal CCS supplies a constant current irrespective of the voltage across it. It has infinite output impedance.
    *   **Real:** Real CCS circuits have a finite output impedance, meaning the current will vary slightly with voltage. The goal of practical CCS design is to maximize this output impedance.

---

### 2. Basic Constant Current Source using a BJT

The simplest form of a BJT-based CCS utilizes a single BJT biased to operate in its active region.

*   **Circuit Configuration:**
    *   A resistor ($R_E$) is connected in the emitter path of a transistor ($Q_1$).
    *   A voltage divider ($R_1$, $R_2$) is used to bias the base of $Q_1$.
    *   The emitter current is established by the voltage across $R_E$ and the value of $R_E$.

*   **Operation:**
    *   The base voltage ($V_B$) is set by the voltage divider.
    *   The emitter voltage ($V_E$) is approximately $V_B - V_{BE}$, where $V_{BE}$ is the base-emitter voltage drop (typically around 0.7V for silicon BJTs).
    *   The emitter current ($I_E$) is then given by $I_E = V_E / R_E = (V_B - V_{BE}) / R_E$.
    *   Since $V_B$ and $V_{BE}$ are relatively constant, $I_E$ is also relatively constant.
    *   The collector current ($I_C$) is approximately equal to the emitter current ($I_E$) when the transistor is in the active region ($I_C \approx I_E$). Therefore, this circuit acts as a constant current source supplying $I_C$.

*   **Analysis and Design Considerations:**
    *   **Current Calculation:** The desired current $I$ can be set by choosing $R_E$. For a stable base voltage $V_B$, the current through the voltage divider should be significantly larger than the base current ($I_B$) of $Q_1$.
    *   **Output Impedance ($r_o$):** The output impedance of this simple CCS is approximately equal to the transistor's output resistance ($r_o$) plus the resistance in the emitter path reflected to the collector.
        $r_o \approx R_C_{internal} + (\beta+1)R_E$
        where $R_C_{internal}$ is the internal output resistance of the BJT. A larger $R_E$ increases the output impedance.
    *   **Voltage Compliance:** The output voltage across the CCS must be sufficient to keep the transistor in the active region. The minimum collector voltage required is $V_{CE(sat)} \approx 0.2V$ for the transistor to be in saturation. To ensure it remains in the active region, $V_C \geq V_E + V_{BE}$.
    *   **Sensitivity to $V_{BE}$ Variations:** The current is sensitive to variations in $V_{BE}$ due to temperature changes.

*   **Example:** Design a simple CCS to provide approximately 1mA current. Assume $V_{CC} = 15V$, $V_{BE} = 0.7V$.
    *   Let's choose $R_2$ to draw 10 times the base current of $Q_1$ to ensure a stable $V_B$. If $I_C \approx 1mA$, then $I_B \approx 1mA / \beta$. Assuming $\beta=100$, $I_B \approx 10\mu A$. Let the current through $R_2$ be $I_{R2} \approx 100\mu A$.
    *   Let $V_B \approx 5V$. Then $R_2 = V_B / I_{R2} = 5V / 100\mu A = 50k\Omega$.
    *   $R_1$ is connected between $V_{CC}$ and $V_B$. The current through $R_1$ is $I_{R1} = (V_{CC} - V_B) / R_1$. For stability, $I_{R1} \approx I_{R2}$, so $(15V - 5V) / R_1 \approx 100\mu A$. $R_1 = 10V / 100\mu A = 100k\Omega$.
    *   Now, to set $I_E \approx 1mA$. $V_E = V_B - V_{BE} = 5V - 0.7V = 4.3V$.
    *   $R_E = V_E / I_E = 4.3V / 1mA = 4.3k\Omega$.
    *   This circuit will provide a constant current of approximately 1mA.

---

### 3. Improved Constant Current Source using a Diode-Biased CCS

To reduce the dependence of the CCS current on $V_{BE}$ variations (due to temperature or transistor replacement), a diode can be used for biasing.

*   **Circuit Configuration:**
    *   A diode ($D_1$) is placed in series with a resistor ($R_1$) and connected to the base of the CCS transistor ($Q_1$).
    *   The emitter of $Q_1$ is connected to $R_E$.

*   **Operation:**
    *   The voltage across the diode is approximately constant (e.g., $V_{D1} \approx 0.7V$).
    *   The voltage across $R_1$ is $V_{R1} = V_{CC} - V_{BE} - V_{D1}$.
    *   The emitter current is $I_E = (V_{CC} - V_{BE} - V_{D1} - V_{CE}) / R_E$. This is not ideal as it still depends on $V_{CE}$ of $Q_1$.
    *   A better configuration involves using the diode to set the base voltage of $Q_1$ with a resistor.

*   **More Common Diode-Biased CCS (Improved:**
    *   A resistor ($R_1$) is connected between $V_{CC}$ and the base of $Q_1$.
    *   A diode ($D_1$) is connected in series with $R_1$.
    *   The emitter of $Q_1$ is connected to $R_E$.
    *   The voltage at the base of $Q_1$ is $V_B = V_{CC} - V_{R1} - V_{D1}$. If $V_{R1}$ is negligible (by making $R_1$ very small and drawing significant current), then $V_B \approx V_{CC} - V_{D1}$. This is incorrect.

    *   **Correct Diode-Biased CCS Configuration:**
        *   A resistor ($R_1$) is connected between $V_{CC}$ and the base of $Q_1$.
        *   A diode ($D_1$) is connected in series with $R_1$ and $V_{CC}$.
        *   The base of $Q_1$ is connected to the junction of $R_1$ and $D_1$.
        *   The emitter of $Q_1$ is connected to $R_E$.
        *   The emitter current is $I_E = (V_B - V_{BE}) / R_E$.
        *   The base voltage is $V_B = V_{CC} - I_{R1} \cdot R_1 - V_{D1}$.
        *   **To make it stable, we need $V_B$ to be stable.** A common approach is to use a diode to set the base-emitter voltage difference.

    *   **Let's consider the Velleux CCS (often seen in textbooks):**
        *   A voltage divider sets the base of $Q_1$.
        *   An emitter resistor $R_E$ is used.
        *   A diode is used in series with the base bias resistor to compensate for $V_{BE}$ variations.

    *   **The Widlar Current Source (often presented as a CCS):** While primarily for low currents, it's a good example of reducing $V_{BE}$ dependence. It uses a single transistor and a resistor in the emitter, but with a large resistor to limit emitter current, making it very sensitive to $V_{BE}$.

    *   **Revised understanding of Diode-Biased CCS for current compensation:** The goal is to make the emitter voltage track the base voltage more closely.

    *   **Using a reference diode for bias:** A Zener diode can provide a stable reference voltage for biasing.
        *   $V_{Ref}$ (Zener voltage) $\rightarrow$ Voltage divider $\rightarrow$ Base of $Q_1$.
        *   This ensures $V_B$ is stable, leading to stable $I_E$.

---

### 4. The Wilson Current Mirror

The Wilson current mirror is a more advanced CCS that provides a higher output impedance and better current matching compared to a simple current mirror. It's commonly used in differential amplifiers for both the tail current and for creating matching current sources for the collector loads.

*   **Circuit Configuration:**
    *   Consists of three transistors ($Q_1, Q_2, Q_3$).
    *   $Q_1$ acts as the reference transistor, establishing the current.
    *   $Q_2$ and $Q_3$ are matched transistors forming the current mirror.
    *   $Q_2$ is connected in a diode-connected configuration (collector tied to base).
    *   $Q_3$ mirrors the current from $Q_2$ to its collector.
    *   A fourth transistor ($Q_4$) is often added to improve performance or form a more advanced Wilson mirror.

*   **Operation:**
    *   A reference current ($I_{ref}$) is established through $Q_1$. This current is usually set by a simple CCS.
    *   The base voltage of $Q_1$ is set by the emitter resistor and its base bias.
    *   The collector of $Q_1$ is connected to the bases of $Q_2$ and $Q_3$.
    *   The emitter of $Q_1$ is connected to the collector of $Q_2$.
    *   $Q_2$ (diode-connected) has its base and collector tied together, and its emitter is connected to the collector of $Q_1$.
    *   $Q_3$ receives the same base voltage as $Q_2$.
    *   The current through $Q_3$ is designed to be equal to the reference current $I_{ref}$ flowing through $Q_1$.

*   **Analysis and Design Considerations:**
    *   **Current Equation:** For an ideal Wilson current mirror with perfectly matched transistors, the output current ($I_{out}$) is equal to the reference current ($I_{ref}$).
        $I_{ref} = (V_{B1} - V_{BE1}) / R_E$ (where $V_{B1}$ is the base voltage of $Q_1$).
        For ideal matching, $I_{out} = I_{C3} = I_{ref}$.
    *   **Output Impedance:** The Wilson current mirror offers a significantly higher output impedance than a simple current mirror, typically in the order of $R_{out} \approx \beta r_o$. This is because any change in the output voltage is fed back through $Q_2$, which helps to maintain the current more constant.
    *   **Improved Current Matching:** The feedback mechanism involving $Q_1$ and $Q_2$ helps to improve the matching between the reference current and the mirrored current, even with mismatches in transistor parameters.
    *   **Voltage Compliance:** The output current source requires a certain minimum voltage to keep the mirroring transistor ($Q_3$) in the active region. This is typically $V_{CE3} \geq V_{CE(sat)} \approx 0.2V$.

*   **Example:** A Wilson current mirror is used in the tail of a differential amplifier. If a tail current of 2mA is required, and the reference current is established by a CCS with $R_E = 2k\Omega$ and $V_B = 4.7V$.
    *   $I_{ref} = (4.7V - 0.7V) / 2k\Omega = 4V / 2k\Omega = 2mA$.
    *   The Wilson current mirror will then supply approximately 2mA as the tail current to the differential pair.

---

### 5. Basic BJT Current Source in Differential Amplifier Configurations

*   **Tail Current Source:** The most common application is as the "tail" current source for the differential pair. This provides the constant current that splits between the two emitters of the differential amplifier.
    *   **Circuit:** A BJT CCS (simple or improved) is connected to the common emitters of the differential pair.
    *   **Benefit:** Ensures equal emitter currents for symmetrical operation, thus improving CMRR and providing a stable differential gain.

*   **Collector Current Sources (Active Loads):** In certain differential amplifier configurations, BJT CCS circuits can be used as active loads in the collectors to achieve higher voltage gain.
    *   **Circuit:** A CCS is used instead of a passive collector resistor.
    *   **Benefit:** The high output impedance of the CCS acts as a high resistance load, leading to higher voltage gain.

---

### 6. Key Concepts and Important Points to Remember

*   **Purpose:** To provide a stable, predictable current independent of voltage variations across it.
*   **Critical for Differential Amplifiers:** Improves CMRR, input impedance, and gain stability.
*   **Simple CCS:** Uses a single BJT and an emitter resistor. Current is set by $I_E = (V_B - V_{BE}) / R_E$.
*   **Output Impedance of Simple CCS:** $r_o \approx R_{C_{internal}} + (\beta+1)R_E$. Higher $R_E$ means higher output impedance.
*   **Wilson Current Mirror:** Offers better output impedance and current matching than simple mirrors.
*   **Voltage Compliance:** The minimum voltage required to keep the CCS transistor in the active region.
*   **Temperature Sensitivity:** Simple CCS are sensitive to $V_{BE}$ variations due to temperature. Diode biasing can help compensate for this.
*   **Choice of CCS:** Depends on the required current accuracy, output impedance, and application.

---

### 7. Practice Questions and Exercises

**Question 1:**
A simple BJT constant current source is implemented with a transistor $Q_1$, an emitter resistor $R_E = 5k\Omega$, and a base bias voltage $V_B = 6V$. Assume $V_{BE} = 0.7V$.
(a) Calculate the emitter current ($I_E$).
(b) If the transistor's $\beta = 100$ and its internal output resistance $r_o = 100k\Omega$, estimate the output impedance of this current source.
(c) What is the primary advantage of using this CCS in a differential amplifier?

**Answer 1:**
(a) $I_E = (V_B - V_{BE}) / R_E = (6V - 0.7V) / 5k\Omega = 5.3V / 5k\Omega = 1.06mA$.
    Assuming $I_C \approx I_E$, the current supplied is approximately 1.06mA.
(b) The output impedance is approximately $r_o \approx R_{C_{internal}} + (\beta+1)R_E$.
    Assuming $R_{C_{internal}}$ is large enough to be comparable to the effect of the emitter resistance term:
    $r_o \approx r_o + (\beta+1)R_E = 100k\Omega + (100+1) \times 5k\Omega = 100k\Omega + 101 \times 5k\Omega = 100k\Omega + 505k\Omega = 605k\Omega$.
    A more common approximation for the output impedance of a simple CCS is $R_{out} \approx r_o + \beta R_E$, which is also very high. If $r_o$ is neglected compared to $\beta R_E$, it's $\beta R_E$.
    Let's use the more accurate expression for output resistance of a transistor in common-emitter: $r_{out} = r_o + (\beta+1)R_E$.
    So, the output impedance of the CCS is approximately $r_o$ of the CCS transistor itself plus the emitter resistance reflected to the collector.
    $Z_{out} \approx r_{o1} + (\beta_1+1)R_E$. If $r_{o1} = 100k\Omega$, then $Z_{out} \approx 100k\Omega + (101)(5k\Omega) = 100k\Omega + 505k\Omega = 605k\Omega$. This is a very high output impedance.
(c) The primary advantage is improved Common-Mode Rejection Ratio (CMRR) and stable differential gain.

**Question 2:**
What is the main drawback of a simple BJT constant current source, and how can it be mitigated?

**Answer 2:**
The main drawback of a simple BJT constant current source is its sensitivity to variations in the base-emitter voltage ($V_{BE}$) due to temperature changes or transistor parameter variations. This can lead to the output current changing significantly. This can be mitigated by using diode biasing techniques to create a stable reference voltage for the base, or by employing more complex circuits like the Wilson current mirror.

**Question 3:**
Describe the basic structure and operation of a Wilson current mirror. What advantage does it offer over a simple current mirror?

**Answer 3:**
The Wilson current mirror typically uses four transistors. A reference current is established through a reference transistor ($Q_1$). The collector of $Q_1$ is connected to the bases of two other transistors ($Q_2, Q_3$), which form the current mirror. $Q_2$ is usually diode-connected (collector tied to base), and its emitter is connected to the collector of $Q_1$. $Q_3$ mirrors the current from $Q_2$ to its collector, providing the output current. A fourth transistor ($Q_4$) can be used to improve performance.

The Wilson current mirror offers a significantly higher output impedance and better current matching accuracy compared to a simple current mirror due to its internal feedback mechanism. This makes it more suitable for applications requiring precise and stable current mirroring.

---

### 8. Alignment with Course Outcomes

*   **CO1 (Summarize concepts):** This topic directly contributes to understanding differential amplifier configurations by explaining the role and implementation of constant current sources, a fundamental building block. The explanation of how CCS improves CMRR aligns with this outcome. (Knowledge Level: K2)
*   **CO2 (Design circuits):** While this module focuses on understanding, the ability to calculate resistor values for a desired current in a simple CCS directly relates to basic design principles. (Knowledge Level: K3 - applied in practice).
*   **CO3 (Choose IC chips):** Understanding the characteristics and performance of different CCS circuits (simple vs. Wilson) helps in choosing appropriate ICs or designing circuits where CCS is implemented as part of a larger IC. (Knowledge Level: K2)
*   **CO4 (Implement applications):** The practical implementation of a differential amplifier would involve incorporating a constant current source. This topic provides the theoretical basis for that implementation. (Knowledge Level: K3 - applied in practice).

---

This comprehensive set of study notes provides a thorough understanding of constant current sources as they relate to bipolar junction transistor (BJT) differential amplifier configurations, aligning with the specified learning and course outcomes.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
