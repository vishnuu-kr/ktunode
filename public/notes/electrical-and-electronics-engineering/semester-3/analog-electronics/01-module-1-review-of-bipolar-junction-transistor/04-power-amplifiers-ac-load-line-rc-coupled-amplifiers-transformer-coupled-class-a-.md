---
title: "Power Amplifiers  -AC load line – RC Coupled amplifiers – Transformer coupled Class A amplifiers – Class B amplifiers(Derivation of efficiency) – Class AB amplifiers – Class C and Class D amplifiers"
subject: "ANALOG ELECTRONICS"
module: "Module 1: Review of Bipolar Junction Transistor "
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200832b85456187f35b5b"
status: "completed"
scrapedAt: "2026-05-23T16:10:50.890Z"
---
# ANALOG ELECTRONICS - Module 1: Review of Bipolar Junction Transistor

## Topic: Power Amplifiers

This module section focuses on understanding and analyzing power amplifiers, their operating classes, and associated concepts like the AC load line. This is crucial for designing circuits that can deliver significant power to a load, a common requirement in many electronic systems.

### Learning Outcomes:

By the end of this topic, you should be able to:

*   Understand the fundamental purpose and operation of power amplifiers.
*   Analyze the behavior of power amplifiers using the AC load line.
*   Compare and contrast different types of power amplifiers (Class A, B, AB, C, D) based on their efficiency and distortion characteristics.
*   Derive the theoretical maximum efficiency for Class B amplifiers.
*   Understand the principles of RC coupled and transformer coupled Class A amplifiers.
*   Explain the operation and design considerations for Class AB, Class C, and Class D amplifiers.
*   Relate the concepts of power amplifiers to the design of amplifier circuits (CO1).

### 1. Introduction to Power Amplifiers

**Definition:** A power amplifier is a type of amplifier that takes a low-power input signal and amplifies it to a level sufficient to drive a significant load, such as a loudspeaker, motor, or antenna. Unlike small-signal amplifiers which focus on voltage or current gain, power amplifiers prioritize delivering power to the load.

**Key Characteristics:**

*   **High Power Output:** Capable of delivering substantial power to the load.
*   **Efficiency:** A critical parameter, as power amplifiers often dissipate significant heat. Higher efficiency means less wasted power as heat.
*   **Distortion:** The amplification process can introduce unwanted harmonics and intermodulation products. Minimizing distortion is important for signal fidelity.
*   **Heat Dissipation:** Due to high power levels, power transistors operate in their higher power regions, requiring effective heat sinking.

**Power Amplifier Stages:**

Power amplifiers are typically found as the final stage in a multi-stage amplifier system. They receive a voltage-amplified signal from a preceding small-signal amplifier and convert it into a power-amplified signal.

**Reference:**
*   **Boylestad & Nashelsky, "Electronic Devices and Circuit Theory":** Chapter 16 (Power Amplifiers) provides a comprehensive overview of power amplifier concepts.
*   **Paynter, "Introductory Electronic Devices and Circuits":** Chapters related to transistor amplifier configurations will likely touch upon the output stage.

### 2. The AC Load Line

The AC load line is a graphical tool used to analyze the performance of an amplifier, particularly concerning output voltage and current swings, saturation, and cutoff. For power amplifiers, it's essential for understanding how much power can be delivered without clipping or distortion.

**Concept:**

*   **DC Load Line:** Represents the path of the transistor's operating point (Q-point) under DC conditions. It's determined by the DC supply voltage ($V_{CC}$) and the DC load resistance ($R_L$). The equation is $V_{CE} = V_{CC} - I_C \cdot R_L$.
*   **AC Load Line:** Represents the path of the transistor's operating point under AC signal conditions. It takes into account the actual AC load connected to the amplifier's output, which might include biasing resistors and the actual load. The slope of the AC load line is determined by the effective AC load resistance ($R_{L(ac)}$).

**Relationship between DC and AC Load Lines:**

*   The Q-point of the transistor lies at the intersection of both the DC and AC load lines.
*   The AC load line is generally steeper than the DC load line, especially in transformer-coupled or impedance-matched circuits.

**Importance for Power Amplifiers:**

*   **Maximum Output Swing:** The AC load line helps determine the maximum possible undistorted output voltage and current swings.
*   **Avoiding Clipping:** Proper positioning of the Q-point on the AC load line is crucial to prevent the output signal from exceeding the transistor's voltage or current limits, leading to clipping.
*   **Power Dissipation:** The AC load line can also be used to estimate the power dissipated by the transistor under various operating conditions.

**Example:**

Consider a common-emitter amplifier with a DC supply $V_{CC}$ and a collector resistor $R_C$. The AC load seen by the collector will be $R_C$ in parallel with any external AC load $R_L$.

*   **DC Load Line:** Slope = $-1/R_C$
*   **AC Load Line:** Slope = $-1/(R_C || R_L)$

**Reference:**
*   **Neaman, "Electronic Circuits: Analysis and Design":** Chapters on transistor biasing and amplifier analysis will cover AC load lines in detail.
*   **Boylestad & Nashelsky, "Electronic Devices and Circuit Theory":** This textbook provides detailed graphical analysis using load lines.

### 3. Class A Amplifiers

**Definition:** In a Class A amplifier, the active device (BJT or FET) conducts current for the **entire 360 degrees** of the input signal cycle.

**Characteristics:**

*   **High Fidelity:** Produces very little distortion because the transistor is always operating in its active region.
*   **Low Efficiency:**  A significant drawback. A large quiescent current flows even without an input signal, leading to substantial power dissipation.
*   **Simple Design:** Relatively easy to design and implement.

**Operation:**

*   The Q-point is typically set at the center of the DC load line to allow for maximum symmetrical output voltage and current swings.
*   The output signal is a faithful, amplified replica of the input signal.

**Types of Class A Amplifiers:**

*   **RC Coupled Class A Amplifier:**
    *   **Circuit:** The collector resistor ($R_C$) is bypassed for AC signals by a coupling capacitor ($C_C$). The AC load is primarily $R_C$ itself, or $R_C$ in parallel with the input impedance of the next stage.
    *   **Disadvantages:** The DC load line is determined by $R_C$, which limits the efficiency.  A large $R_C$ is needed for higher voltage swing, but this increases DC power dissipation.
    *   **Reference:** Paynter and Boylestad will have examples of simple RC coupled amplifiers.

*   **Transformer Coupled Class A Amplifier:**
    *   **Circuit:** A transformer is used to couple the output of the amplifier to the load. The primary winding of the transformer is in the collector circuit.
    *   **Advantages:**
        *   **Improved Efficiency:** The transformer acts as an impedance transformer, allowing a better match between the transistor's output impedance and the load impedance, thus increasing efficiency. The effective AC load seen by the transistor is related to the turns ratio of the transformer ($R_{AC} = (N_P/N_S)^2 \cdot R_L$).
        *   **DC Isolation:** The transformer isolates the DC component of the collector current from the load.
    *   **Disadvantages:**
        *   **Bulkiness and Cost:** Transformers are bulky, heavy, and expensive, especially for low frequencies.
        *   **Frequency Response:** Transformers have limited frequency response due to parasitic capacitance and inductance.
        *   **Saturation:** The transformer core can saturate under large DC currents, causing distortion.
    *   **Theoretical Maximum Efficiency:**  Around 50% (when the DC bias current is chosen appropriately for the transformer's inductance).
    *   **Reference:** Boylestad & Nashelsky often dedicate sections to transformer coupling for power amplification.

**Important Point to Remember for Class A:** Always on, high fidelity, but very inefficient.

### 4. Class B Amplifiers

**Definition:** In a Class B amplifier, the active device conducts current for **exactly 180 degrees** of the input signal cycle.

**Characteristics:**

*   **Higher Efficiency than Class A:** Significantly more efficient because the device draws very little current when there is no input signal.
*   **Crossover Distortion:** A major drawback. When the input signal crosses zero, there's a period where both transistors in a push-pull configuration might be off, causing a distortion in the output waveform.
*   **Push-Pull Operation:** Class B amplifiers are almost always used in a push-pull configuration to amplify both the positive and negative halves of the input signal. This typically involves two transistors (e.g., PNP and NPN, or P-channel and N-channel MOSFETs) working in tandem.

**Operation (Push-Pull Configuration):**

*   Two transistors are used. One amplifies the positive half of the input signal, and the other amplifies the negative half.
*   When the input signal is zero, both transistors are ideally off, resulting in zero quiescent current.
*   As the input signal becomes positive, one transistor conducts. As it becomes negative, the other transistor conducts.

**Derivation of Efficiency for Class B Amplifiers:**

Let's consider a single-ended Class B amplifier for simplicity in derivation, though push-pull is more common for practical power output.

*   **Input Signal:** $v_i(t) = V_p \sin(\omega t)$
*   **Collector Current (half-sine wave):** $i_c(t) = I_{DC} + I_p \sin(\omega t)$ for $0 \le \omega t \le \pi$, and $0$ for $\pi \le \omega t \le 2\pi$.

To find the DC current ($I_{DC}$), we need to calculate the average value of the collector current over a full cycle:

$I_{DC} = \frac{1}{2\pi} \int_0^{2\pi} i_c(t) dt$

Since $i_c(t)$ is zero for $\pi \le \omega t \le 2\pi$:

$I_{DC} = \frac{1}{2\pi} \int_0^{\pi} (I_{DC, \text{peak}} + V_p \sin(\omega t)/R_L) dt$

This simplification can be tricky. A more direct approach is to consider the average current for a half-sine wave across the load $R_L$:

The peak current is $I_p = V_p / R_L$.
The collector current waveform is a half-sine wave. The average value of a half-sine wave is $I_{DC} = \frac{2 I_p}{\pi}$.

*   **Output Power ($P_{out}$):** This is the average power delivered to the load resistor $R_L$.
    $P_{out} = I_{rms}^2 \cdot R_L$
    The RMS value of a half-sine wave is $I_{rms} = I_p / 2$.
    $P_{out} = (I_p / 2)^2 \cdot R_L = \frac{I_p^2 R_L}{4}$
    Since $I_p = V_p / R_L$,
    $P_{out} = \frac{V_p^2}{4R_L}$

*   **Maximum Output Power:** This occurs when the transistor is driven to saturation (or close to it). The peak collector voltage swing is $V_{CC}$ and the peak collector current swing is $V_{CC}/R_L$. So, $V_p \approx V_{CC}$ and $I_p \approx V_{CC}/R_L$.
    $P_{out(max)} = \frac{V_{CC}^2}{4R_L}$

*   **Power Supplied by the Source ($P_{in}$):** This is the average power drawn from the DC supply.
    The DC collector current is $I_{DC} = \frac{2 I_p}{\pi} = \frac{2}{\pi} \left(\frac{V_p}{R_L}\right)$.
    The power supplied by the source is $P_{in} = V_{CC} \cdot I_{DC}$ (assuming a single-ended amplifier where the supply voltage is constant and the current drawn varies).
    $P_{in} = V_{CC} \cdot \frac{2 V_p}{\pi R_L}$

*   **Maximum Power Supplied by the Source:** This occurs when $V_p = V_{CC}$ and $I_p = V_{CC}/R_L$.
    $I_{DC(max)} = \frac{2 V_{CC}}{\pi R_L}$
    $P_{in(max)} = V_{CC} \cdot \frac{2 V_{CC}}{\pi R_L} = \frac{2 V_{CC}^2}{\pi R_L}$

*   **Efficiency ($\eta$):**
    $\eta = \frac{P_{out}}{P_{in}}$

    For maximum output power:
    $\eta_{max} = \frac{P_{out(max)}}{P_{in(max)}} = \frac{V_{CC}^2 / (4R_L)}{2 V_{CC}^2 / (\pi R_L)} = \frac{V_{CC}^2}{4R_L} \cdot \frac{\pi R_L}{2 V_{CC}^2} = \frac{\pi}{4}$

    $\eta_{max} \approx 0.7854$ or **78.54%**.

**For a push-pull Class B amplifier:**

*   The analysis is similar, but we consider two transistors. Each transistor handles half the load.
*   The power supplied by the $V_{CC}$ source for each transistor (assuming identical transistors and power delivery) is $V_{CC} \cdot I_{DC}$.
*   The total power supplied by the source is $P_{in} = 2 \cdot V_{CC} \cdot I_{DC}$ (where $I_{DC}$ is the average DC current of *one* transistor).
*   The total output power is $P_{out} = 2 \cdot P_{out(\text{single-ended})}$
*   The maximum efficiency remains **78.54%**.

**Reference:**
*   **Boylestad & Nashelsky:** Chapter 16 provides a thorough derivation of Class B amplifier efficiency.
*   **Paynter:** Likely discusses the principles of push-pull amplifiers.

### 5. Class AB Amplifiers

**Definition:** In a Class AB amplifier, the active device conducts current for **more than 180 degrees but less than 360 degrees** of the input signal cycle.

**Characteristics:**

*   **Compromise between Class A and Class B:** Offers a balance between fidelity and efficiency.
*   **Reduced Crossover Distortion:** By introducing a small quiescent current ($I_Q > 0$), the transistors are biased to be always slightly "on," eliminating or greatly reducing crossover distortion.
*   **Higher Efficiency than Class A:** More efficient than Class A because the quiescent current is much lower.
*   **Lower Efficiency than Class B:** Less efficient than Class B because of the quiescent current.
*   **Commonly Used:** Often preferred in audio power amplifiers for its good balance of performance.

**Operation (Push-Pull Configuration):**

*   Similar to Class B push-pull, but a small DC bias voltage is applied to the base (or gate) of each transistor, ensuring a small quiescent current flows through them even when there is no input signal.
*   This bias voltage "turns on" both transistors slightly, preventing the dead zone during the zero-crossing of the input signal.

**Design Considerations:**

*   The bias voltage can be set using diodes or a dedicated bias circuit.
*   The magnitude of the quiescent current affects both efficiency and distortion. A larger quiescent current reduces crossover distortion but also reduces efficiency.

**Reference:**
*   **Neaman:** Will discuss biasing techniques for Class AB operation.
*   **Boylestad & Nashelsky:** Covers Class AB amplifiers as a progression from Class B.

### 6. Class C Amplifiers

**Definition:** In a Class C amplifier, the active device conducts current for **less than 180 degrees** of the input signal cycle.

**Characteristics:**

*   **Very High Efficiency:** Can achieve efficiencies of 80-90% or even higher.
*   **High Distortion:** Produces a highly distorted output waveform, consisting of narrow pulses of current.
*   **Tuned Load:** Requires a tuned resonant circuit (e.g., an LC tank circuit) as the load. This resonant circuit filters out the harmonics and reconstructs the desired sinusoidal output signal.
*   **Narrow Bandwidth:** Primarily used in applications where the signal is already sinusoidal and in a narrow frequency band, such as radio frequency (RF) transmitters.

**Operation:**

*   The transistor is biased far into cutoff, so it only conducts when the input signal exceeds a certain positive voltage threshold.
*   The output current pulses excite the resonant circuit, which then oscillates at its resonant frequency, producing a clean sinusoidal output.

**Applications:**

*   RF power amplifiers in radio transmitters.
*   Frequency multipliers.

**Disadvantages:**

*   Not suitable for amplification of complex waveforms like audio signals due to high distortion.
*   Requires a tuned load.

**Reference:**
*   **Boylestad & Nashelsky:** Chapter 16 likely covers Class C amplifiers and their tuned loads.
*   **Neaman:** Discusses RF amplifier design, which often involves Class C operation.

### 7. Class D Amplifiers

**Definition:** Class D amplifiers are **switching amplifiers**. They do not amplify the input signal directly in an analog fashion. Instead, they convert the analog input signal into a series of digital pulses (PWM - Pulse Width Modulation or PDM - Pulse Density Modulation). These pulses are then amplified by switching transistors (operating as on/off switches), and finally, a low-pass filter reconstructs the amplified analog output signal.

**Characteristics:**

*   **Extremely High Efficiency:** Can achieve efficiencies of 90% and above. This is because the switching transistors are either fully on (low voltage drop, high current, low power dissipation) or fully off (zero current, zero power dissipation).
*   **Compact and Lightweight:** Due to high efficiency, less heat sinking is required, allowing for smaller and lighter designs.
*   **Complex Design:** Requires more complex circuitry for modulation and demodulation.
*   **Potential for EMI:** Switching action can generate electromagnetic interference (EMI), requiring careful design and filtering.

**Operation (PWM Example):**

1.  **Modulator:** The analog input signal is compared with a high-frequency triangular or sawtooth waveform.
2.  **PWM Signal Generation:** The output of the comparator is a pulse train where the **width** of the pulses varies proportionally to the amplitude of the analog input signal.
3.  **Switching Stage:** This PWM signal drives power transistors (e.g., MOSFETs) that switch the DC power supply voltage ON and OFF at the rate of the PWM signal.
4.  **Low-Pass Filter:** The output of the switching stage is a high-power pulse train. A low-pass filter (typically an LC filter) removes the high-frequency switching components, leaving behind the amplified analog signal.

**Applications:**

*   Audio power amplifiers (e.g., in home theaters, portable speakers).
*   Motor control.
*   Switching power supplies.

**Reference:**
*   **Neaman:** May cover advanced amplifier classes and digital switching techniques.
*   **Floyd, "Fundamentals of Analog Circuits":** Might offer a foundational understanding of switching circuits.
*   **Paynter:** Might provide an introduction to switching concepts.

### Practice Questions and Exercises:

1.  **Concept Check:**
    *   What is the primary difference between a small-signal amplifier and a power amplifier?
    *   Why is the AC load line more critical than the DC load line for determining the output power capability of an amplifier?
    *   What is the main advantage of Class A amplifiers, and what is their main disadvantage?

2.  **Class B Efficiency:**
    *   Derive the theoretical maximum efficiency for a Class B amplifier. (Show the steps clearly, as done in section 4).
    *   If a Class B amplifier delivers 10W of output power to a load of 8 ohms, what is the RMS value of the output voltage?

3.  **Comparison:**
    *   Compare and contrast Class A, Class B, and Class AB amplifiers in terms of:
        *   Conduction angle
        *   Efficiency
        *   Crossover distortion
        *   Typical applications

4.  **Class C Application:**
    *   Why is a tuned load essential for a Class C amplifier?
    *   Can a Class C amplifier be used for audio amplification? Explain why or why not.

5.  **Class D Understanding:**
    *   Briefly explain the principle of operation for a Class D amplifier.
    *   What is the main advantage of Class D amplifiers over other classes?

### Answers to Practice Questions:

1.  **Concept Check:**
    *   **Primary Difference:** Power amplifiers are designed to deliver significant power to a load, while small-signal amplifiers focus on voltage or current gain with minimal power output.
    *   **AC Load Line Importance:** The AC load line dictates the range of voltage and current swings the transistor can achieve without clipping, directly determining the maximum undistorted output power. The DC load line only defines the quiescent point.
    *   **Class A Advantage:** High fidelity (low distortion). **Disadvantage:** Very low efficiency.

2.  **Class B Efficiency:**
    *   (Refer to the detailed derivation in Section 4 of these notes).
    *   **Calculation:**
        $P_{out} = V_{rms}^2 / R_L$
        $10 \text{ W} = V_{rms}^2 / 8 \text{ ohms}$
        $V_{rms}^2 = 10 \text{ W} \times 8 \text{ ohms} = 80 \text{ V}^2$
        $V_{rms} = \sqrt{80} \approx 8.94 \text{ V}$

3.  **Comparison:**

    | Feature             | Class A                               | Class B                                      | Class AB                                          |
    | :------------------ | :------------------------------------ | :------------------------------------------- | :------------------------------------------------ |
    | **Conduction Angle**| 360°                                  | 180°                                         | >180°, <360°                                      |
    | **Efficiency**      | Very Low (Max ~25% for transformer-coupled) | High (Max ~78.54%)                           | Moderate (Higher than Class A, lower than Class B) |
    | **Crossover Distortion** | None                                  | Significant (unless push-pull with bias)     | Minimal to None                                   |
    | **Quiescent Current**| High                                  | Zero (ideally)                               | Small                                             |
    | **Applications**    | High-fidelity pre-amplifiers, some audio output stages | Push-pull audio output stages                 | Most audio power amplifiers, general-purpose power stages |

4.  **Class C Application:**
    *   **Tuned Load Essential:** The output of a Class C amplifier is a series of current pulses. The tuned resonant circuit (LC tank) stores energy during each pulse and releases it during the off-time of the transistor, allowing it to oscillate at its resonant frequency. This filtering action reconstructs the desired sinusoidal waveform and rejects unwanted harmonics.
    *   **Audio Amplification:** No, a Class C amplifier cannot be used for audio amplification. Audio signals are complex waveforms with varying amplitudes and frequencies over a wide range. The high distortion and narrow bandwidth of a Class C amplifier would severely degrade or destroy the audio signal quality.

5.  **Class D Understanding:**
    *   **Princ of Operation:** Class D amplifiers convert the analog input signal into a pulse-width modulated (PWM) or pulse-density modulated (PDM) digital signal. This digital signal then drives switching power transistors (MOSFETs or BJTs) that operate as on/off switches. A low-pass filter then reconstructs the amplified analog output signal from the high-power switching waveform.
    *   **Main Advantage:** Extremely high efficiency, leading to reduced heat dissipation, smaller size, and lighter weight compared to linear amplifier classes.

### Important Points to Remember:

*   **Power Amplifiers focus on power delivery, not just gain.**
*   **The AC load line is crucial for determining output swing and power capability.**
*   **Class A = Fidelity, Class B = Efficiency (with crossover distortion), Class AB = Balanced, Class C = Max Efficiency (RF only), Class D = Switching Efficiency.**
*   **Transformer coupling can improve Class A efficiency but has drawbacks.**
*   **Class B and AB are almost always used in push-pull configurations.**
*   **Class C requires a resonant tuned circuit.**
*   **Class D amplifiers are essentially switching circuits, not linear amplifiers in the traditional sense.**
*   **Efficiency is paramount in power amplifier design due to heat dissipation.**

This section provides a foundational understanding of power amplifiers. In subsequent modules, you will likely delve deeper into specific circuit designs and analysis techniques for these amplifier classes, directly contributing to **CO1: Design BJT and FET amplifier circuits**.
