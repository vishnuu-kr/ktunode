---
title: "push pull class B and class AB power amplifiers"
subject: "ANALOG CIRCUITS"
module: "Module 4: Power amplifiers: Classification"
branch: "Electronics and Communication Engineering"
semester: 3
topicId: "68a5c45db09ce205780fe2f9"
status: "completed"
scrapedAt: "2026-05-23T17:44:23.768Z"
---
# ANALOG CIRCUITS - Module 4: Power Amplifiers: Classification

## Topic: Push-Pull Class B and Class AB Power Amplifiers

---

### 1. Introduction to Power Amplifiers

**Definition:** Power amplifiers are designed to deliver a significant amount of power to a load, typically an output device like a loudspeaker or a motor. They are distinguished from small-signal amplifiers by their ability to handle larger voltage and current swings.

**Key Concepts:**
*   **Efficiency:** The ratio of output power to input DC power. A primary concern in power amplifier design.
*   **Distortion:** Unwanted alterations in the waveform of the amplified signal.
*   **Output Power:** The maximum power that can be delivered to the load.
*   **Heat Dissipation:** Power amplifiers generate heat due to inefficiencies, requiring heatsinks for proper operation.

**Classification of Power Amplifiers (Brief Overview for Context):**
Power amplifiers are classified based on their conduction angle ($\theta$), which is the portion of the input cycle during which the output transistor is active. Common classes include A, B, AB, C, D, E, F, G, H. This module focuses on Class B and Class AB.

---

### 2. Class B Push-Pull Power Amplifiers

**2.1 Principle of Operation:**
Class B amplifiers are designed for improved efficiency compared to Class A. They utilize two active devices (typically BJTs or MOSFETs) biased such that each device conducts for approximately 180 degrees of the input signal cycle. This configuration is commonly known as a **push-pull** amplifier.

*   **Push Operation:** One transistor amplifies the positive half-cycle of the input signal.
*   **Pull Operation:** The other transistor amplifies the negative half-cycle of the input signal.

**2.2 Circuit Configuration (BJT Emitter Follower Output Stage):**
A common Class B push-pull amplifier uses two complementary transistors (NPN and PNP for BJTs, or N-channel and P-channel for MOSFETs) in an emitter follower configuration.

```
[Conceptual Diagram of a Class B Push-Pull Amplifier (BJT Version)]

      Vcc
       |
      Rc1
       |
     C1 --+-- Input Signal (Vin)
           |
          C2
           |
       NPN Transistor (Q1) ----> Output (Vout) ----> Load (RL)
           |
       PNP Transistor (Q2) ----> Output (Vout) ----> Load (RL)
           |
      Rc2
       |
      Vee
```

**Explanation of Components:**
*   **Vcc, Vee:** DC supply voltages.
*   **Q1 (NPN), Q2 (PNP):** Complementary transistors.
*   **Input Signal:** Applied to the bases of both transistors.
*   **Output:** Taken from the emitters of the transistors, driving the load.
*   **Coupling Capacitors (C1, C2):** Used to couple the input signal and isolate DC bias.

**2.3 Biasing and Conduction:**
*   **Ideal Class B:** The transistors are biased at cutoff, meaning their base-emitter voltage ($V_{BE}$) is zero when there is no input signal.
*   **Conduction Angle:** Each transistor conducts for 180 degrees.
*   **Zero Signal:** Both transistors are OFF. No current flows to the load.

**2.4 Operation with Input Signal:**
*   **Positive Half-Cycle:** The NPN transistor (Q1) turns ON and conducts, amplifying the positive half of the input signal. The PNP transistor (Q2) remains OFF.
*   **Negative Half-Cycle:** The PNP transistor (Q2) turns ON and conducts, amplifying the negative half of the input signal. The NPN transistor (Q1) remains OFF.
*   **Output:** The amplified output signal is a combination of the amplified positive and negative half-cycles.

**2.5 Advantages of Class B:**
*   **High Efficiency:** Significantly higher than Class A, approaching 78.5% for ideal Class B.
*   **Low Quiescent Power Dissipation:** No DC bias current flows when there's no input signal, leading to minimal power waste.

**2.6 Disadvantages of Class B:**
*   **Crossover Distortion:** This is the most significant drawback. At the transition point where one transistor turns OFF and the other turns ON, both transistors are momentarily OFF, causing a distortion in the output waveform, especially for small input signals.
*   **Requires Two Devices:** Necessitates complementary pairs of transistors, which can be costly and challenging to match perfectly.

**2.7 Crossover Distortion Analysis:**
*   When the input voltage is small, the base-emitter junction voltage ($V_{BE}$) of both transistors may not exceed the turn-on voltage (approximately 0.7V for silicon BJTs) for a portion of the cycle.
*   During this time, neither transistor conducts, resulting in a "dead zone" or "gap" in the output waveform.

**2.8 Distortion Minimization:**
To mitigate crossover distortion, Class AB amplifiers are introduced.

---

### 3. Class AB Push-Pull Power Amplifiers

**3.1 Principle of Operation:**
Class AB amplifiers are a compromise between Class A and Class B. They are biased such that each transistor conducts for slightly more than 180 degrees of the input signal cycle. This "slight overlap" in conduction significantly reduces or eliminates crossover distortion.

**3.2 Circuit Configuration:**
Similar to Class B, Class AB amplifiers use complementary output transistors in a push-pull configuration. The key difference lies in the **biasing network**.

```
[Conceptual Diagram of a Class AB Push-Pull Amplifier (BJT Version with Diode Biasing)]

      Vcc
       |
      Rc1
       |
     C1 --+-- Input Signal (Vin)
           |
          C2
           |
       NPN Transistor (Q1) ----> Output (Vout) ----> Load (RL)
           |
       PNP Transistor (Q2) ----> Output (Vout) ----> Load (RL)
           |
      Rc2
       |
      Vee
```

**Biasing for Class AB:**
The primary goal is to establish a small quiescent collector current ($I_{CQ}$) for each transistor, ensuring $V_{BE}$ is slightly above the turn-on voltage even with no input signal. Common biasing methods include:

*   **Diode Biasing (Two-Diode Bias):** Two diodes are placed in series with the base of the output transistors. The voltage drop across these diodes ($V_{D1} + V_{D2}$) provides the necessary forward bias to the base-emitter junctions of the transistors. For a specific quiescent current, the diode characteristics need to be matched to the transistor characteristics.
    *   **Reference (Boylestad & Nashelsky):** Chapter 10 discusses biasing techniques for power amplifiers, including diode biasing for Class AB operation. They explain how matching diode characteristics to transistor characteristics is crucial for stable quiescent currents.
*   **Transistor Biasing:** Using small signal transistors to set the bias for the power transistors.
*   **VBE Multiplier:** A circuit that provides a controllable bias voltage, allowing for adjustment of the quiescent current.

**3.3 Biasing and Conduction:**
*   **Quiescent Current ($I_{CQ}$):** Each transistor has a small, non-zero collector current flowing even when the input signal is zero. This $I_{CQ}$ is typically a few percent of the maximum output current.
*   **Conduction Angle:** Each transistor conducts for slightly more than 180 degrees. The exact angle depends on the magnitude of $I_{CQ}$ and the input signal level.
*   **Zero Signal:** Both transistors conduct a small quiescent current.

**3.4 Operation with Input Signal:**
*   **Positive Half-Cycle:** The NPN transistor (Q1) conducts more heavily, amplifying the positive half-cycle. The PNP transistor (Q2) still conducts a small quiescent current, but its conduction decreases as the positive input increases.
*   **Negative Half-Cycle:** The PNP transistor (Q2) conducts more heavily, amplifying the negative half-cycle. The NPN transistor (Q1) continues to conduct a small quiescent current, but its conduction decreases as the negative input increases.
*   **Transition:** Because both transistors are always conducting to some extent, the transition between them is smooth, and crossover distortion is eliminated.

**3.5 Advantages of Class AB:**
*   **Reduced/Eliminated Crossover Distortion:** This is the primary advantage, leading to a cleaner output waveform.
*   **Improved Efficiency (over Class A):** While not as high as ideal Class B, Class AB is still significantly more efficient than Class A.
*   **Lower Heat Dissipation (over Class A):** Due to higher efficiency.

**3.6 Disadvantages of Class AB:**
*   **Higher Quiescent Power Dissipation (than Class B):** The small quiescent current leads to some power loss even without an input signal.
*   **Complexity:** Requires a more sophisticated biasing circuit than Class B.
*   **Thermal Runaway Risk:** If the quiescent current is set too high and the ambient temperature increases, the transistors can heat up, increasing their current, which further increases their temperature, potentially leading to runaway. Careful thermal design and component selection are necessary.
    *   **Reference (Sedra & Smith):** Chapter 14 on Power Amplifiers discusses thermal considerations and the potential for thermal runaway, emphasizing the importance of negative feedback and proper biasing to prevent it. They also highlight the trade-off between crossover distortion and quiescent power dissipation.

---

### 4. Performance Metrics and Calculations (Conceptual)

**4.1 Efficiency:**

*   **Class B Efficiency:** Theoretical maximum of $\frac{\pi}{4} \approx 78.5\%$.
*   **Class AB Efficiency:** Generally lower than ideal Class B but higher than Class A, typically in the range of 50-70%.

**4.2 Power Dissipation:**

*   **Class B:** Very low quiescent power dissipation. Power dissipation occurs primarily during signal amplification.
*   **Class AB:** Has a non-zero quiescent power dissipation due to $I_{CQ}$. Total power dissipation is the sum of quiescent dissipation and signal-dependent dissipation.

**4.3 Distortion:**

*   **Class B:** Suffers from crossover distortion, especially at low signal levels.
*   **Class AB:** Significantly reduces or eliminates crossover distortion. May introduce other forms of distortion (e.g., harmonic distortion) at high signal levels, which can be managed with negative feedback.

**4.4 Harmonic Distortion:**
*   **Reference (Bogart, Beasley, Rico):** Discusses harmonic distortion and its analysis in power amplifiers. They explain how push-pull configurations inherently cancel even-order harmonics, which is beneficial for signal purity.

---

### 5. Design Considerations

*   **Transistor Selection:** Choosing transistors with appropriate voltage, current, and power ratings. Complementary pairs need to have similar characteristics.
*   **Biasing Circuit Design:** Ensuring stable quiescent current and minimal sensitivity to temperature variations.
*   **Heatsinking:** Proper heatsinking is crucial to dissipate the heat generated by the output transistors, preventing them from overheating and failing.
*   **Load Matching:** Optimizing the amplifier's output to deliver maximum power to the load.
*   **Power Supply Decoupling:** Using capacitors to prevent noise from the power supply from affecting the amplifier's operation.

---

### 6. Learning Outcomes Addressed

*   **CO1 (Wave Shaping):** While not directly about wave shaping, understanding the amplifier's behavior with signals is related. The distortion in Class B is a form of waveform alteration.
*   **CO2 (BJT Amplifier Analysis):** This topic directly involves analyzing BJT circuits in a push-pull configuration.
*   **CO3 (Feedback in Oscillators):** While not directly covered, negative feedback is often employed in power amplifiers to reduce distortion and improve stability, a concept related to feedback principles.
*   **CO4 (Power Amplifier Design):** This entire module is dedicated to understanding and designing power amplifiers, specifically Class B and AB.

---

### 7. Important Points to Remember

*   **Push-pull** configuration uses two active devices to amplify opposite halves of the input signal.
*   **Class B** offers high efficiency but suffers from **crossover distortion**.
*   **Class AB** provides a compromise by biasing transistors to conduct slightly more than 180 degrees, **eliminating crossover distortion** at the cost of some quiescent power dissipation.
*   The key difference between Class B and Class AB is the **biasing network** that sets the quiescent current.
*   **Efficiency** and **distortion** are the primary performance metrics to consider.
*   **Thermal management** (heatsinking) is critical for power amplifiers.
*   Push-pull configurations inherently cancel **even-order harmonics**.

---

### 8. Practice Questions and Exercises

**Question 1:**
Explain the primary disadvantage of a Class B push-pull power amplifier and how it arises.

**Answer 1:**
The primary disadvantage of a Class B push-pull amplifier is **crossover distortion**. This occurs at the point where the input signal crosses zero. At this point, the base-emitter voltage of both transistors is below their turn-on voltage (approximately 0.7V for silicon BJTs). Consequently, both transistors are momentarily OFF, creating a "dead zone" or gap in the output waveform, particularly noticeable with small input signals.

---

**Question 2:**
What is the main advantage of a Class AB amplifier over a Class B amplifier?

**Answer 2:**
The main advantage of a Class AB amplifier over a Class B amplifier is the **elimination or significant reduction of crossover distortion**. This is achieved by biasing the output transistors to conduct for slightly more than 180 degrees of the input cycle, ensuring that one transistor is always active when the other is transitioning.

---

**Question 3:**
A Class AB amplifier has a quiescent collector current of 20mA for each transistor. If the supply voltage is $\pm 12V$ and the load is $8\Omega$, conceptually how would you analyze the power dissipation of this amplifier at no-signal conditions?

**Answer 3:**
At no-signal conditions:
*   Each transistor draws a quiescent collector current ($I_{CQ} = 20mA$).
*   The quiescent power dissipation in the NPN transistor ($Q1$) is $P_{DQ1} = V_{CC} \times I_{CQ}$.
*   The quiescent power dissipation in the PNP transistor ($Q2$) is $P_{DQ2} = |V_{EE}| \times I_{CQ}$.
*   Total quiescent power dissipation is $P_{DQ(total)} = P_{DQ1} + P_{DQ2}$.
Assuming $V_{CC} = 12V$ and $V_{EE} = -12V$:
$P_{DQ1} = 12V \times 0.020A = 0.24W$
$P_{DQ2} = |-12V| \times 0.020A = 0.24W$
Total quiescent power dissipation $= 0.24W + 0.24W = 0.48W$. This power is dissipated as heat even without an input signal. The load power is $0W$ at no signal.

---

**Question 4:**
Compare the theoretical maximum efficiencies of Class A, Class B, and Class AB power amplifiers.

**Answer 4:**
*   **Class A:** Theoretical maximum efficiency is 25% (for transformer-coupled) or 50% (for direct-coupled with proper load).
*   **Class B:** Theoretical maximum efficiency is $\frac{\pi}{4} \approx 78.5\%$.
*   **Class AB:** Theoretical maximum efficiency is between Class A and Class B, typically in the range of 50-70%, depending on the quiescent current and signal levels.

---

**Question 5 (Design/Analysis Focus):**
Consider a complementary-symmetry Class B push-pull amplifier driving a loudspeaker with a resistance of $R_L$. If the supply voltage is $V_{CC}$, and assuming ideal transistors, derive an expression for the maximum output AC power that can be delivered to the load.

**Answer 5:**
Let the peak output voltage across the load be $V_p$. In a Class B amplifier, the output voltage can swing from $-(V_{CC} - V_{CE(sat)})$ to $+(V_{CC} - V_{CE(sat}) \approx V_{CC}$ (assuming saturation voltages are negligible for simplicity). So, $V_p \approx V_{CC}$.

The RMS value of a sinusoidal voltage is $V_{rms} = \frac{V_p}{\sqrt{2}}$.
Therefore, the RMS output voltage is $V_{out(rms)} \approx \frac{V_{CC}}{\sqrt{2}}$.

The maximum output AC power delivered to the load is given by:
$P_{out(max)} = \frac{V_{out(rms)}^2}{R_L} \approx \frac{(V_{CC}/\sqrt{2})^2}{R_L} = \frac{V_{CC}^2/2}{R_L} = \frac{V_{CC}^2}{2R_L}$.

This derivation highlights how the maximum output power is directly related to the supply voltage and load resistance.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


### 9. References and Further Reading

*   **Electronic Devices and Circuit Theory** by Robert Boylestad and L Nashelsky: Chapters on Power Amplifiers (specifically focusing on Class B and AB operation, biasing, efficiency, and distortion).
*   **Microelectronic Circuits** by Sedra A. S. and K. C. Smith: Chapter on Power Amplifiers, covering Class B and AB circuits, crossover distortion, biasing methods, and thermal considerations.
*   **Electronic Circuits and Devices** by Theodore F. Bogart; Beasley, Jeffrey S.; Guillermo Rico: Sections on power amplifiers, discussing push-pull configurations, Class B and AB operation, and distortion analysis.
*   **Fundamentals of Microelectronics** by Razavi B.: Chapter on power amplifiers provides a good conceptual understanding and practical design insights.
*   **Electronic Devices and Circuits** by David A Bell: Coverage of power amplifier classes, focusing on the operational principles and practical aspects.

---