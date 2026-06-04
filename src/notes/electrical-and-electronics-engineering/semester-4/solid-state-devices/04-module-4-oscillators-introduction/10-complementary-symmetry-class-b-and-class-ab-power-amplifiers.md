---
title: "complementary symmetry class B and class AB power amplifiers"
subject: "SOLID STATE DEVICES"
module: "Module 4: Oscillators: Introduction"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200852b85456187f35f9f"
status: "completed"
scrapedAt: "2026-05-23T16:19:01.497Z"
---
# SOLID STATE DEVICES: Module 4: Oscillators: Introduction - Complementary Symmetry Class B and Class AB Power Amplifiers

## 1. Introduction to Power Amplifiers

Power amplifiers are electronic amplifiers designed to significantly increase the amplitude (and therefore the power) of a signal, typically an audio or radio frequency signal. They are crucial in applications where a low-power signal needs to drive a load that requires substantial power, such as speakers in audio systems or antennas in radio transmitters.

**Key Concept:** Power amplifiers aim to deliver maximum power to the load with acceptable distortion and efficiency.

## 2. Classification of Power Amplifiers

Power amplifiers are classified based on their mode of operation, which dictates the portion of the input signal waveform for which the amplifier conducts. This classification directly impacts efficiency, distortion, and quiescent power dissipation.

*   **Class A:** Conduction angle of 360 degrees (always conducting). High fidelity, but very inefficient.
*   **Class B:** Conduction angle of 180 degrees (conducts for half a cycle). More efficient than Class A, but suffers from crossover distortion.
*   **Class AB:** Conduction angle between 180 and 360 degrees (conducts for slightly more than half a cycle). A compromise between Class A and Class B, offering improved linearity over Class B while maintaining reasonable efficiency.
*   **Class C:** Conduction angle less than 180 degrees (conducts for less than half a cycle). Highly efficient, but introduces significant distortion and is primarily used in RF applications where tuned circuits are used to reconstruct the desired waveform.
*   **Class D:** Employs switching techniques (PWM) for very high efficiency.

**Connection to Course Outcomes:** This section broadly sets the stage for CO5 (Design power amplifiers and voltage regulator circuits), as understanding the different classes is foundational to designing effective power amplifiers.

## 3. Class B Power Amplifiers

### 3.1. Principle of Operation

Class B amplifiers use a pair of transistors, typically BJTs or MOSFETs, arranged in a push-pull configuration. Each transistor amplifies one half of the input signal.

*   **Push-Pull Configuration:** Two active devices are used, one to amplify the positive half-cycle of the input signal and the other to amplify the negative half-cycle.
*   **No Quiescent Current:** Ideally, in Class B, the quiescent collector current ($I_{CQ}$) is zero. This means the transistors are only turned on when a signal is applied.

### 3.2. Complementary Symmetry Class B Amplifier

This is a very popular configuration for Class B amplifiers, utilizing a complementary pair of transistors: one NPN and one PNP (for BJTs) or one N-channel and one P-channel (for MOSFETs).

**Circuit Diagram (Conceptual using BJTs):**

```
       Vcc
        |
       Rc1 (Collector resistor for PNP)
        |
    PNP Transistor (e.g., 2N3906)
       / \
      /   \
Input O-----B1 (Base of PNP)
      \   /
       \ /
    NPN Transistor (e.g., 2N3904)
       / \
      /   \
     C2    B2 (Base of NPN)
      |     |
      Load  Output
      |     |
     GND   GND
```

*   **PNP Transistor:** Amplifies the positive half-cycle of the input signal. Its collector is connected to Vcc through a load resistor (or directly for simpler configurations).
*   **NPN Transistor:** Amplifies the negative half-cycle of the input signal. Its collector is connected to the negative supply (or GND in a single-supply system).
*   **Complementary Pair:** The NPN and PNP transistors have similar characteristics but opposite polarity.

**How it works:**

1.  **Positive Input Signal:** The NPN transistor is driven into cutoff (turned off). The PNP transistor conducts, amplifying the positive input signal and delivering current to the load.
2.  **Negative Input Signal:** The PNP transistor is driven into cutoff. The NPN transistor conducts, amplifying the negative input signal and delivering current to the load.

### 3.3. Advantages of Class B

*   **High Efficiency:** Significantly higher than Class A amplifiers because quiescent power dissipation is minimal (ideally zero).
*   **Reduced Quiescent Power:** Transistors are off when there's no input signal.

### 3.4. Disadvantages of Class B

*   **Crossover Distortion:** This is the most significant drawback. When the input signal transitions from positive to negative (or vice versa), there's a small dead zone where neither transistor is fully conducting, leading to distortion.

**Explanation of Crossover Distortion:**

For the NPN transistor to conduct, its base-emitter voltage ($V_{BE}$) must be greater than approximately 0.7V (for silicon BJTs). Similarly, for the PNP transistor, the base-emitter voltage ($V_{EB}$) must be greater than 0.7V.

When the input signal is near zero, both transistors are ideally off. As the input signal crosses zero, there's a small region where the signal is not sufficient to turn on either transistor's base-emitter junction. This results in a "gap" in the output waveform.

**Example:** Consider a sinusoidal input. When the sine wave crosses zero, the output waveform will have a flat spot or break before the other transistor starts conducting.

### 3.5. Design Considerations for Class B

*   **Transformer Coupling:** Historically, transformer coupling was used to isolate the DC bias and couple the output to the load. This introduced transformer losses and size.
*   **Direct Coupling (Complementary Symmetry):** The complementary symmetry arrangement with direct coupling to the load is more efficient and common.
*   **Biasing:** Ideally, no quiescent current. In practice, a small bias can be added to reduce crossover distortion (leading to Class AB).

**Reference:** Bell, D. A. (2008). *Electronic Devices and Circuits* (5th ed.). Oxford University Press. Chapter on Power Amplifiers discusses Class B operation and its limitations.

## 4. Class AB Power Amplifiers

### 4.1. Principle of Operation

Class AB amplifiers are designed to mitigate the crossover distortion inherent in Class B amplifiers by introducing a small quiescent current.

*   **Conduction Angle:** Greater than 180 degrees but less than 360 degrees.
*   **Small Quiescent Current ($I_{CQ}$):** A small DC current flows through each transistor even when no input signal is present. This ensures that the transistors are always partially conducting, bridging the gap around the zero-crossing point.

### 4.2. Complementary Symmetry Class AB Amplifier

The complementary symmetry configuration is also used for Class AB amplifiers. The key difference lies in the biasing.

**Circuit Diagram (Conceptual using BJTs):**

The circuit structure is identical to the Class B complementary symmetry amplifier. The modification is in how the bases of the NPN and PNP transistors are biased.

**Methods to achieve Class AB bias:**

1.  **Diode Biasing:** Placing two diodes in series with the bases of the transistors. The voltage drop across the diodes forward-biases the base-emitter junctions of the transistors to a small degree.
    *   **Circuit:** Diodes are placed between the input signal and the bases of the output transistors, with the anode of the diode connected to the input side for the NPN and the cathode connected to the input side for the PNP (or vice-versa depending on configuration).
    *   **Bias Voltage:** The voltage drop across the diodes ($V_{D1} + V_{D2}$) provides a small forward bias to the base-emitter junctions, ensuring a small $I_{CQ}$. Ideally, the diodes have similar temperature characteristics to the transistors.

    ```
           Vcc
            |
           Rc1
            |
        PNP Transistor
           / \
          /   \
    Input O-----B1 ---|>|--- Diode 1 --- Bias Voltage Source (optional)
          \   /
           \ /
        NPN Transistor
           / \
          /   \
         C2    B2 ---|<|--- Diode 2 --- Bias Voltage Source (optional)
          |     |
          Load  Output
          |     |
         GND   GND
    ```
    *Note: In a more typical implementation, the diodes are placed in series with the output of the input stage or directly between the bases of the output transistors, ensuring that the sum of the diode forward voltages provides the bias for the output transistors.*

2.  **Potentiometer Biasing:** Using a potentiometer to adjust the bias voltage applied to the bases of the output transistors. This allows for fine-tuning to minimize crossover distortion.

3.  **Zener Diode Biasing:** Using Zener diodes to establish a stable bias voltage.

**How Class AB operation reduces Crossover Distortion:**

By having a small $I_{CQ}$, the output transistors are already partially turned on when the input signal crosses zero. This eliminates the "dead zone" where neither transistor was conducting, resulting in a smoother transition and reduced distortion.

### 4.3. Advantages of Class AB

*   **Reduced Crossover Distortion:** Significantly less crossover distortion compared to Class B.
*   **Good Efficiency:** More efficient than Class A, though slightly less efficient than ideal Class B.

### 4.4. Disadvantages of Class AB

*   **Slightly Higher Quiescent Power:** Due to the presence of a small quiescent current, there's some power dissipation even without a signal.
*   **Bias Stability:** Maintaining a stable quiescent current, especially with temperature variations, can be a design challenge.

**Example:** A common application is in audio amplifiers, where Class AB offers a good balance between sound quality (low distortion) and power efficiency.

**Reference:** Boylested, R., & Nashelsky, L. (2017). *Electronic Devices and Circuit Theory* (11th ed.). Pearson. Chapter 13 (Power Amplifiers) provides detailed analysis of Class B and Class AB configurations, including biasing techniques. Sedra & Smith (2013) also offers thorough coverage in their Power Amplifiers chapter.

## 5. Key Concepts and Definitions

*   **Conduction Angle:** The portion of the input signal waveform during which the active device conducts.
*   **Quiescent Current ($I_{CQ}$):** The DC collector current flowing through the output transistor(s) when no input signal is applied.
*   **Crossover Distortion:** Distortion occurring in Class B amplifiers as the input signal passes through zero, where neither output transistor is conducting.
*   **Push-Pull Configuration:** An amplifier arrangement using two active devices to amplify opposite halves of the input signal, resulting in higher power output and reduced distortion.
*   **Complementary Symmetry:** A push-pull configuration using a complementary pair of active devices (NPN/PNP or N-channel/P-channel MOSFETs).
*   **Efficiency ($\eta$):** The ratio of AC power delivered to the load to the total DC power supplied.
    *   $\eta = \frac{P_{out(AC)}}{P_{DC}}$
*   **Power Dissipation:** The power lost as heat within the amplifier circuit.

## 6. Analysis of Complementary Symmetry Class B and AB Power Amplifiers

This section will delve into the performance metrics such as efficiency, distortion, and power output.

### 6.1. Class B Power Amplifier Analysis

Assuming a sinusoidal input voltage $v_i = V_p \sin(\omega t)$ and ideal transistors with $V_{BE(on)} = 0$, $V_{CE(sat)} = 0$.

*   **Output Voltage:** $v_o = V_p \sin(\omega t)$.
*   **Collector Current:**
    *   For the NPN transistor (amplifying negative half): $i_{C1} = \frac{V_p}{R_L} \sin(\omega t)$ for $\pi \le \omega t \le 2\pi$, and $i_{C1} = 0$ otherwise.
    *   For the PNP transistor (amplifying positive half): $i_{C2} = \frac{V_p}{R_L} \sin(\omega t)$ for $0 \le \omega t \le \pi$, and $i_{C2} = 0$ otherwise.
*   **Total Output Current:** $i_o(t) = i_{C1} + i_{C2} = \frac{V_p}{R_L} \sin(\omega t)$ (for the portion of the cycle where it's non-zero).
*   **RMS Output Current:** $I_{o(rms)} = \frac{V_p}{R_L \sqrt{2}} = \frac{V_{load(rms)}}{R_L}$.
*   **RMS Output Voltage:** $V_{o(rms)} = \frac{V_p}{\sqrt{2}}$.
*   **AC Power Delivered to Load:** $P_{out(AC)} = V_{o(rms)} I_{o(rms)} = \frac{V_p^2}{2R_L}$.
*   **Maximum AC Power (for $V_p = V_{CC}$):** $P_{out(max)} = \frac{V_{CC}^2}{2R_L}$.
*   **DC Power Supplied:** In a Class B amplifier with split supplies ($\pm V_{CC}$), each transistor draws current for half a cycle. The total DC power is drawn from both supplies.
    *   Consider the NPN transistor. The current is $i_{C1}$. The average current drawn from the negative supply (or returned to the positive supply, depending on the reference) is related to the average of the absolute value of the current.
    *   A simpler way for split supplies ($\pm V_{CC}$): Each half-circuit acts like a Class A amplifier operating with a sine wave as its output current. The average current drawn from each supply is $I_{DC} = \frac{V_p}{\pi R_L}$.
    *   Total DC Power: $P_{DC} = (V_{CC} \times I_{DC(NPN)}) + (V_{CC} \times I_{DC(PNP)}) = 2 V_{CC} \frac{V_p}{\pi R_L}$.
*   **Maximum DC Power Supplied (for $V_p = V_{CC}$):** $P_{DC(max)} = \frac{2V_{CC}^2}{\pi R_L}$.
*   **Theoretical Maximum Efficiency:**
    *   $\eta_{max} = \frac{P_{out(max)}}{P_{DC(max)}} = \frac{V_{CC}^2 / (2R_L)}{2V_{CC}^2 / (\pi R_L)} = \frac{\pi}{4} \approx 78.5\%$.

**Important Point:** For a single-supply Class B amplifier where the load is coupled through a capacitor and the collectors are connected to $V_{CC}$, the analysis for DC power is different. The output current is still a sine wave (excluding crossover). However, the DC current drawn from the supply is the average of the current through the output transistors. For a sine wave of amplitude $V_p$, the average value of the rectified sine wave (which is what each transistor sees) is $\frac{2V_p}{\pi}$. So, $I_{DC} = \frac{2V_p}{\pi R_L}$. And $P_{DC} = V_{CC} I_{DC} = V_{CC} \frac{2V_p}{\pi R_L}$.

### 6.2. Class AB Power Amplifier Analysis

The analysis for Class AB is more complex due to the quiescent current.

*   **Quiescent Current ($I_{CQ}$):** A small, non-zero current.
*   **Output Current:** The output current is still approximately sinusoidal, but the quiescent current adds a DC component to the instantaneous collector currents of the individual transistors.
    *   For NPN: $i_{C1}(t) = I_{CQ} + i_{1}'(t)$ where $i_{1}'(t)$ is the signal component.
    *   For PNP: $i_{C2}(t) = I_{CQ} + i_{2}'(t)$ where $i_{2}'(t)$ is the signal component.
    *   In a properly biased Class AB, $i_{1}'(t)$ is positive for the negative half-cycle of input, and $i_{2}'(t)$ is positive for the positive half-cycle of input.
*   **Efficiency:** Slightly lower than theoretical Class B due to quiescent power dissipation ($P_{DQ} = V_{CC} \times (I_{CQ} \text{ from NPN} + I_{CQ} \text{ from PNP})$ if using split supplies, or $V_{CC} \times (I_{CQ1} + I_{CQ2})$ for single supply).
    *   The presence of $I_{CQ}$ means the transistors are never completely off.
    *   The maximum efficiency is less than 78.5%.

**Bias Point Selection:** The choice of $I_{CQ}$ is critical.

*   **Too small $I_{CQ}$:** Crossover distortion will be present.
*   **Too large $I_{CQ}$:** Increases quiescent power dissipation and reduces efficiency.
*   **Optimal $I_{CQ}$:** Just enough to eliminate crossover distortion. This typically occurs when the sum of the diode drops used for biasing is approximately equal to the $V_{BE(on)}$ required to turn on the transistors.

**Reference:** Millman, J., & Halkias, C. (2010). *Integrated Electronics* (2nd ed.). McGraw Hill. Chapter 15 provides a detailed mathematical analysis of power amplifier efficiency and distortion for different classes.

## 7. Design Example and Practice Questions

### 7.1. Design Example: Class AB Complementary Symmetry Amplifier

**Problem:** Design a Class AB complementary symmetry power amplifier using NPN (e.g., 2N3904) and PNP (e.g., 2N3906) transistors to deliver approximately 1W AC power to an 8-ohm load when powered from a $\pm$15V dual supply. Assume a sinusoidal input signal.

**Solution Steps:**

1.  **Determine Load Voltage and Current:**
    *   $P_{out(AC)} = 1W$.
    *   Assuming a sinusoidal output, $P_{out(AC)} = \frac{V_{p}^2}{2R_L} = \frac{V_{rms}^2}{R_L}$.
    *   Let's target a reasonable voltage swing. If $V_{p} = V_{CC} = 15V$, then $P_{out(max)} = \frac{15^2}{2 \times 8} = \frac{225}{16} \approx 14W$. This is much higher than 1W, so we need to ensure our input signal is limited or the bias is set such that clipping doesn't occur at 1W output.
    *   Let's work backward from the desired power. To get 1W into 8 ohms:
        *   $P_{out(AC)} = \frac{V_{rms}^2}{R_L} \Rightarrow V_{rms} = \sqrt{P_{out(AC)} \times R_L} = \sqrt{1W \times 8\Omega} = \sqrt{8} \approx 2.83V_{rms}$.
        *   The peak voltage is $V_p = V_{rms} \times \sqrt{2} = 2.83 \times \sqrt{2} \approx 4V$.
    *   So, we need an input signal that will result in a peak output voltage of about 4V across the 8-ohm load. This is well within the $\pm 15V$ supply limits.

2.  **Determine Quiescent Current ($I_{CQ}$):**
    *   To eliminate crossover distortion, we need a small $I_{CQ}$. Let's aim for $I_{CQ} \approx 10mA$. This is a typical starting point.
    *   This quiescent current will flow through the load even with no signal. The DC voltage across the load will be $V_{load(DC)} = I_{CQ} \times R_L = 10mA \times 8\Omega = 80mV$. This is negligible.

3.  **Select Biasing Components (Diode Biasing):**
    *   We need to forward-bias the base-emitter junctions of the output transistors. Using two silicon diodes in series between the output of a driver stage (or the input terminals of the output transistors) is common.
    *   The sum of the forward voltage drops of these two diodes should be approximately equal to the $V_{BE(on)}$ required to turn on the output transistors (around 0.7V + 0.7V = 1.4V, to ensure both are slightly on).
    *   Let's use two standard silicon diodes (e.g., 1N4148) which have a forward voltage drop of about 0.7V each at moderate currents.

4.  **Calculate DC Supply Current:**
    *   The quiescent current in each transistor is $I_{CQ} = 10mA$.
    *   The DC current drawn from each supply will be related to the quiescent current. In a split-supply Class AB, the average DC current drawn from each supply is approximately $I_{DC(supply)} \approx I_{CQ}$.
    *   Total DC Power Dissipation (quiescent): $P_{DQ} = (V_{CC} \times I_{CQ}) + (-V_{CC} \times I_{CQ}) \approx 2 \times 15V \times 10mA = 300mW$. This is the power dissipated when there's no signal.

5.  **Choose Output Transistors:**
    *   NPN: 2N3904 (or higher power variants like TIP31)
    *   PNP: 2N3906 (or higher power variants like TIP32)
    *   Ensure the chosen transistors can handle the peak currents. For a 4V peak into 8 ohms, the peak current is $4V / 8\Omega = 0.5A$. The transistors should have a continuous collector current rating significantly higher than this (e.g., > 1A).

6.  **Heat Sinking:**
    *   The maximum power dissipated by each transistor will be roughly half the total AC power plus the quiescent power, distributed.
    *   Maximum power output for each transistor when driving 1W into 8 ohms (4V peak) from $\pm 15V$ supply: The average power delivered by each transistor is $\frac{P_{out(AC)}}{2} = 0.5W$.
    *   The quiescent power per transistor is $P_{DQ\_per\_transistor} = V_{CC} \times I_{CQ} = 15V \times 10mA = 0.15W$.
    *   So, each transistor might dissipate around $0.5W + 0.15W = 0.65W$ under the 1W output condition. Transistors like 2N3904/3906 might require heat sinks for continuous operation at this power level. Higher power transistors are recommended for higher power outputs.

**Final Design Considerations:**

*   **Input Driver Stage:** The complementary symmetry output stage needs a driver stage to provide sufficient current and voltage gain to drive the bases of the output transistors. This driver stage could be a Class A amplifier.
*   **Protection:** Overcurrent and thermal protection circuits might be necessary for robust designs.

### 7.2. Practice Questions

**Question 1:**
Explain the primary disadvantage of a Class B power amplifier and how it is overcome in a Class AB amplifier. (Knowledge Level: K3)

**Answer:** The primary disadvantage of a Class B amplifier is crossover distortion, which occurs when the input signal transitions through zero, causing a brief period where neither output transistor conducts. Class AB amplifiers overcome this by introducing a small quiescent current, ensuring that the output transistors are always partially conducting, thereby eliminating the crossover gap.

**Question 2:**
A complementary symmetry Class B power amplifier is powered by $\pm 12V$ supplies and delivers a peak output voltage of $10V$ to an $8\Omega$ load. Calculate:
    a) The peak output current.
    b) The RMS output voltage.
    c) The AC power delivered to the load.
    d) The DC power supplied by the $\pm 12V$ supplies (assume ideal Class B operation).
    e) The theoretical maximum efficiency of this amplifier class. (Knowledge Level: K4)

**Answer:**
    a) Peak output current ($I_p$): $I_p = V_p / R_L = 10V / 8\Omega = 1.25A$.
    b) RMS output voltage ($V_{rms}$): $V_{rms} = V_p / \sqrt{2} = 10V / \sqrt{2} \approx 7.07V$.
    c) AC power delivered to the load ($P_{out(AC)}$): $P_{out(AC)} = V_{rms}^2 / R_L = (7.07V)^2 / 8\Omega \approx 50W / 8\Omega = 6.25W$. Alternatively, $P_{out(AC)} = V_p^2 / (2R_L) = (10V)^2 / (2 \times 8\Omega) = 100 / 16 = 6.25W$.
    d) DC power supplied ($P_{DC}$): Assuming split supplies ($\pm V_{CC}$), $P_{DC} = 2 V_{CC} \frac{V_p}{\pi R_L} = 2 \times 12V \times \frac{10V}{\pi \times 8\Omega} = 24 \times \frac{10}{8\pi} = 24 \times \frac{1.25}{\pi} \approx 24 \times 0.398 \approx 9.55W$.
    e) Theoretical maximum efficiency: $\eta_{max} = \frac{\pi}{4} \approx 78.5\%$.

**Question 3:**
What is the role of diodes in a diode-biased Class AB complementary symmetry amplifier? (Knowledge Level: K3)

**Answer:** The diodes are used to provide a small forward bias voltage to the base-emitter junctions of the output transistors. Their forward voltage drop ensures that the transistors have a small quiescent current ($I_{CQ}$) flowing through them, even when there is no input signal. This eliminates the crossover distortion inherent in Class B operation.

**Question 4:**
Compare Class B and Class AB complementary symmetry amplifiers in terms of efficiency and distortion. (Knowledge Level: K3)

**Answer:**
*   **Efficiency:** Class B is theoretically more efficient (up to 78.5%) because its quiescent power dissipation is ideally zero. Class AB is less efficient due to its non-zero quiescent current, which leads to quiescent power dissipation.
*   **Distortion:** Class B suffers from significant crossover distortion. Class AB, by eliminating the crossover gap, has much lower distortion, especially around the zero-crossing point of the signal.

## 8. Important Points to Remember

*   **Class B:** High efficiency, zero quiescent current, suffers from crossover distortion.
*   **Class AB:** Compromise between Class A and Class B; offers reduced distortion over Class B with good efficiency.
*   **Complementary Symmetry:** Utilizes NPN/PNP or N-channel/P-channel pairs for push-pull operation.
*   **Crossover Distortion:** The gap in the output waveform when the input signal passes through zero in Class B amplifiers.
*   **Biasing for Class AB:** Essential to introduce a small quiescent current, often achieved using diodes or potentiometers to forward-bias the output transistors.
*   **Efficiency vs. Distortion:** There's a trade-off. Higher efficiency (Class B) often comes with higher distortion, while lower distortion (Class AB, Class A) comes with lower efficiency.
*   **Power Dissipation:** Always consider the power dissipated as heat in the transistors, which determines the need for heat sinks.

This concludes the study notes on complementary symmetry Class B and Class AB power amplifiers. These concepts are fundamental to understanding how power amplifiers operate and are key for achieving CO5.
