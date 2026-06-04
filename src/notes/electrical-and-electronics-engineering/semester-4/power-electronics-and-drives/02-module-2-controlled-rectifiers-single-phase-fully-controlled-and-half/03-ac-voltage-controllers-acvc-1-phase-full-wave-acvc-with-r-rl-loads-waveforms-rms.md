---
title: "AC voltage controllers (ACVC) – 1-phase full-wave ACVC with R & RL loads – waveforms – RMS output voltage - applications"
subject: "POWER ELECTRONICS AND DRIVES"
module: "Module 2: Controlled Rectifiers (Single Phase) – Fully controlled and half"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200842b85456187f35e25"
status: "completed"
scrapedAt: "2026-05-23T16:17:50.630Z"
---
# Module 2: Controlled Rectifiers (Single Phase) – Fully Controlled and Half

## Topic: AC Voltage Controllers (ACVC) – 1-Phase Full-Wave ACVC with R & RL Loads – Waveforms – RMS Output Voltage - Applications

---

### 1. Introduction to AC Voltage Controllers (ACVC)

**Learning Outcome Alignment:**
*   **LO:** Understand the operation of AC voltage controllers.
*   **CO2:** Understand the features of AC voltage Controllers and analyze the operation. (K3)

**Key Concepts:**
*   **AC Voltage Controller (ACVC):** A power electronic circuit that controls the RMS value of an AC voltage waveform. It does this by switching the AC voltage ON and OFF cyclically.
*   **Phase Control:** The technique used to control the output voltage by delaying the turn-on of switching devices with respect to the AC source voltage zero crossing.
*   **Load Voltage Control:** ACVCs are used to vary the AC voltage delivered to a load, unlike rectifiers which convert AC to DC.

**Importance:**
ACVCs are essential for applications requiring variable AC voltage control without changing the frequency.

**Textbook References:**
*   **Mohan, Undeland, Robbins (Wiley-India):** Chapter 5 (AC Voltage Controllers) discusses the fundamental principles and types of ACVCs.
*   **Rashid (Pearson Education):** Chapter 7 (AC Voltage Controllers) provides a detailed analysis of their operation with different loads.

---

### 2. 1-Phase Full-Wave AC Voltage Controller Configuration

**Learning Outcome Alignment:**
*   **LO:** Understand the configuration and operation of a 1-phase full-wave ACVC.
*   **CO2:** Understand the features of AC voltage Controllers and analyze the operation. (K3)

**Key Concepts:**
*   **Full-Wave Control:** The ACVC controls the voltage in both the positive and negative half-cycles of the AC input.
*   **Switching Devices:** Typically uses a pair of inverse-parallel thyristors (SCRs) or TRIACs. For a full-wave controller, two such pairs are used, connected across the load.
*   **Configuration:**
    *   Two inverse-parallel thyristors (SCR1 and SCR2) are connected in series with the load.
    *   Another set of two inverse-parallel thyristors (SCR3 and SCR4) are connected in series with the load, but phased 180 degrees apart from the first pair in terms of their conduction intervals.
    *   Alternatively, a single TRIAC can replace each pair of inverse-parallel SCRs, simplifying the circuit.

**Circuit Diagram (Conceptual using SCRs):**

```
       AC Source
        /   \
       /     \
      /-------\
      |       |
      |   SCR1|-----\
      |       |      \
      |------\|       |
      |       |       |
      |   SCR2|-----/LOAD/
      |       |      /
      |------/|     /
      |       |    /
      |   SCR3|---/
      |       |
      |------\|
      |       |
      |   SCR4|----
      |       |
      \-------/
       \     /
        \   /
     Ground
```

**Important Note:** A more common and simpler configuration for full-wave control uses two inverse-parallel thyristor pairs. One pair (e.g., T1, T2) conducts during the positive half-cycle, and the other pair (e.g., T3, T4) conducts during the negative half-cycle.

**Simplified Circuit Diagram (Conceptual using TRIACs):**

```
       AC Source
        /   \
       /     \
      /-------\
      |       |
      | TRIAC1|-----\
      |       |      \
      |------\|       |
      |       |       |
      | TRIAC2|-----/LOAD/
      |       |      /
      |------/|     /
      |       |    /
      \-------/
       \     /
        \   /
     Ground
```
*   TRIAC1 and TRIAC2 are connected in inverse-parallel configuration across the load.

**Textbook References:**
*   **Vithayathil (Tata McgrawHill):** Chapter 8 (AC Voltage Controllers) explains the various configurations, including full-wave control.
*   **Hart (McGrawHill):** Chapter 10 (AC Voltage Controllers) provides detailed circuit diagrams and explanations.

---

### 3. Operation with Resistive (R) Load

**Learning Outcome Alignment:**
*   **LO:** Analyze the operation of a full-wave ACVC with a resistive load and understand the output voltage waveforms.
*   **CO2:** Understand the features of AC voltage Controllers and analyze the operation. (K3)

**Key Concepts:**
*   **Firing Angle ($\alpha$):** The delay angle in degrees or radians from the zero crossing of the AC voltage at which the thyristors (or TRIAC) are triggered.
*   **Conduction Period:** The portion of the AC cycle during which the switching device conducts.
*   **Output Voltage Waveform:** The shape of the voltage across the load depends on the firing angle.

**Operation (using TRIACs for simplicity):**

1.  **Positive Half-Cycle ($0$ to $\pi$):**
    *   When the AC voltage is positive, TRIAC1 is capable of conducting.
    *   TRIAC1 is triggered at firing angle $\alpha$.
    *   TRIAC1 conducts from $\alpha$ to $\pi$.
    *   The load voltage during this interval is equal to the source voltage, $v_s = V_m \sin(\omega t)$.
    *   TRIAC1 turns off naturally at $\pi$ when the voltage across it becomes zero.

2.  **Negative Half-Cycle ($\pi$ to $2\pi$):**
    *   When the AC voltage is negative, TRIAC2 is capable of conducting.
    *   TRIAC2 is triggered at firing angle $\alpha + \pi$ (referenced from the start of the negative half-cycle, or $\pi + \alpha$ from the beginning of the positive cycle).
    *   TRIAC2 conducts from $\pi + \alpha$ to $2\pi$.
    *   The load voltage during this interval is equal to the source voltage, $v_s = V_m \sin(\omega t)$.
    *   TRIAC2 turns off naturally at $2\pi$ when the voltage across it becomes zero.

**Waveforms for Resistive Load:**

*   **Input Voltage ($v_s$):** A pure sine wave.
*   **Output Voltage ($v_o$):**
    *   For $0 < \omega t < \alpha$ and $\pi < \omega t < \pi + \alpha$: $v_o = 0$ (OFF state).
    *   For $\alpha < \omega t < \pi$: $v_o = V_m \sin(\omega t)$ (ON state).
    *   For $\pi + \alpha < \omega t < 2\pi$: $v_o = V_m \sin(\omega t)$ (ON state).
    *   The output waveform is a chopped sine wave. The higher the $\alpha$, the more of the sine wave is chopped, resulting in a lower RMS output voltage.

**Textbook References:**
*   **Rashid (Pearson Education):** Chapter 7.2 (Resistance Load) provides detailed waveform analysis.
*   **Lander (McGrawHill):** Chapter 6 (AC Voltage Controllers) illustrates waveforms with different firing angles.

---

### 4. RMS Output Voltage for Resistive Load

**Learning Outcome Alignment:**
*   **LO:** Calculate the RMS output voltage for a full-wave ACVC with a resistive load.
*   **CO2:** Understand the features of AC voltage Controllers and analyze the operation. (K3)

**Key Concepts:**
*   **RMS Value:** The root-mean-square value of a waveform, representing its effective heating capability.
*   **Formula:** The RMS output voltage ($V_{o,rms}$) for a full-wave ACVC with a resistive load is given by:

    $V_{o,rms} = V_s \sqrt{\frac{1}{\pi} \int_{\alpha}^{\pi} \sin^2(\omega t) d(\omega t) + \frac{1}{\pi} \int_{\pi+\alpha}^{2\pi} \sin^2(\omega t) d(\omega t)}$

    Where $V_s$ is the RMS input voltage and $V_m = \sqrt{2} V_s$ is the peak input voltage.

    After integration and simplification:

    $V_{o,rms} = V_s \sqrt{1 - \frac{2\alpha}{\pi} + \frac{1}{\pi} \sin(2\alpha)}$

    **Note:** This formula is valid for $0 \le \alpha \le \pi$. For $\alpha = 0$, $V_{o,rms} = V_s$. For $\alpha = \pi$, $V_{o,rms} = 0$.

**Example:**
If the RMS input voltage $V_s = 230V$ and the firing angle $\alpha = \frac{\pi}{2}$ (90 degrees), then:

$V_{o,rms} = 230 \sqrt{1 - \frac{2(\pi/2)}{\pi} + \frac{1}{\pi} \sin(2 \cdot \frac{\pi}{2})}$
$V_{o,rms} = 230 \sqrt{1 - 1 + \frac{1}{\pi} \sin(\pi)}$
$V_{o,rms} = 230 \sqrt{1 - 1 + \frac{1}{\pi} \cdot 0}$
$V_{o,rms} = 230 \sqrt{0} = 0V$

**Important Point:** The formula shows that as $\alpha$ increases, the RMS output voltage decreases.

**Textbook References:**
*   **Mohan, Undeland, Robbins (Wiley-India):** Section 5.3.1 (RMS output voltage for resistive load) provides the derivation.
*   **Hart (McGrawHill):** Section 10.2.1 (RMS output voltage) covers the mathematical derivation.

---

### 5. Operation with Inductive-Resistive (RL) Load

**Learning Outcome Alignment:**
*   **LO:** Analyze the operation of a full-wave ACVC with an RL load and understand the output voltage waveforms.
*   **CO2:** Understand the features of AC voltage Controllers and analyze the operation. (K3)

**Key Concepts:**
*   **Inductive Load:** Introduces a phase shift between voltage and current, causing the current to lag the voltage.
*   **Commutation:** Thyristors (SCRs) cannot turn off until the current through them becomes zero. With an inductive load, the current may continue to flow even after the voltage reverses or becomes zero, which affects the switching behavior.
*   **Extinction Angle ($\beta$):** The angle at which the current through the thyristor becomes zero, causing it to turn off. $\beta$ is greater than $\pi$ for the first half-cycle and greater than $2\pi$ for the second half-cycle.

**Operation (using TRIACs for simplicity):**

1.  **Positive Half-Cycle ($0$ to $\pi$):**
    *   TRIAC1 is triggered at firing angle $\alpha$.
    *   TRIAC1 conducts from $\alpha$ until the current becomes zero, at angle $\beta$.
    *   The load voltage during conduction is $v_o = V_m \sin(\omega t)$.
    *   If $\beta < \pi$, TRIAC1 turns off at $\beta$. The load voltage becomes zero until the next TRIAC turns on.
    *   If $\beta > \pi$ (which happens when the load has significant inductance and $\alpha$ is relatively low), the current continues to flow into the negative half-cycle, effectively "borrowing" energy from the source. In this case, TRIAC1 turns off at $2\pi$.

2.  **Negative Half-Cycle ($\pi$ to $2\pi$):**
    *   TRIAC2 is triggered at firing angle $\pi + \alpha$.
    *   TRIAC2 conducts from $\pi + \alpha$ until the current becomes zero, at angle $\beta' = \pi + \beta$.
    *   The load voltage during conduction is $v_o = V_m \sin(\omega t)$.
    *   TRIAC2 turns off at $\beta'$ if $\beta' < 2\pi$.
    *   If $\beta' > 2\pi$, TRIAC2 turns off at $3\pi$.

**Waveforms for RL Load:**

*   **Input Voltage ($v_s$):** A pure sine wave.
*   **Output Voltage ($v_o$):**
    *   For $0 < \omega t < \alpha$ and $\pi < \omega t < \pi + \alpha$: $v_o = 0$ (OFF state).
    *   For $\alpha < \omega t < \beta$: $v_o = V_m \sin(\omega t)$ (ON state).
    *   For $\beta < \omega t < \pi$ (if $\beta < \pi$): $v_o = 0$ (OFF state).
    *   For $\pi + \alpha < \omega t < \beta'$: $v_o = V_m \sin(\omega t)$ (ON state).
    *   For $\beta' < \omega t < 2\pi$ (if $\beta' < 2\pi$): $v_o = 0$ (OFF state).
    *   The presence of inductance can lead to situations where the voltage waveform is zero for a period between the turn-off of one device and the turn-on of the next, or the current continues to flow beyond the voltage zero crossing.

**Extinction Angle ($\beta$) Calculation for RL Load:**
For a given source voltage $v_s = V_m \sin(\omega t)$, load impedance $Z = R + jX_L$, and triggering angle $\alpha$, the current $i_L$ can be represented as:
$i_L(\omega t) = \frac{V_m}{Z} \sin(\omega t - \phi) + A e^{-\frac{R}{X_L}(\omega t - \alpha)}$
where $\tan(\phi) = \frac{X_L}{R}$ and $Z = \sqrt{R^2 + X_L^2}$.

At $\omega t = \alpha$, $i_L = 0$. At $\omega t = \beta$, $i_L = 0$.
Solving for $\beta$ requires finding the root of the current equation where it becomes zero after $\alpha$.

**Important Point:** The extinction angle $\beta$ depends on $\alpha$, the load resistance $R$, and the load inductance $L$ (or the impedance angle $\phi$). For a given $\alpha$, increasing the inductance (increasing $\phi$) will increase $\beta$. If $\beta$ exceeds the end of the half-cycle ($\pi$ or $2\pi$), the turn-off timing changes.

**Textbook References:**
*   **Rashid (Pearson Education):** Chapter 7.3 (RL Load) discusses the impact of inductance and commutation.
*   **Vithayathil (Tata McgrawHill):** Chapter 8.3 (Operation with RL Load) provides a detailed analysis of the current and voltage waveforms.
*   **Umanand (Wiley-India):** Chapter 4 (AC Voltage Controllers) explains the effect of inductive loads.

---

### 6. RMS Output Voltage for RL Load

**Learning Outcome Alignment:**
*   **LO:** Calculate the RMS output voltage for a full-wave ACVC with an RL load.
*   **CO2:** Understand the features of AC voltage Controllers and analyze the operation. (K3)

**Key Concepts:**
*   **Complex Waveform:** The RMS voltage calculation becomes more complex due to the variable conduction intervals ($\alpha$ to $\beta$ and $\pi+\alpha$ to $\beta'$) and potential zero-voltage gaps.

**General Formula:**
The RMS output voltage ($V_{o,rms}$) for an RL load is given by:

$V_{o,rms} = V_s \sqrt{\frac{1}{\pi} \int_{\alpha}^{\beta} \sin^2(\omega t) d(\omega t) + \frac{1}{\pi} \int_{\pi+\alpha}^{\beta'} \sin^2(\omega t) d(\omega t)}$

Where $\beta$ and $\beta'$ are the extinction angles in the positive and negative half-cycles, respectively.

**Simplification:**
If we assume that $\beta < \pi$ and $\beta' < 2\pi$, the integral part for the positive half-cycle is:
$\frac{1}{\pi} \int_{\alpha}^{\beta} \sin^2(\omega t) d(\omega t) = \frac{1}{2\pi} [\omega t - \frac{1}{2}\sin(2\omega t)]_{\alpha}^{\beta}$
$= \frac{1}{2\pi} [(\beta - \alpha) - \frac{1}{2}(\sin(2\beta) - \sin(2\alpha))]$

The same expression applies to the negative half-cycle, resulting in:

$V_{o,rms} = V_s \sqrt{\frac{1}{2\pi} [(\beta - \alpha) - \frac{1}{2}(\sin(2\beta) - \sin(2\alpha))] + \frac{1}{2\pi} [(\beta' - (\pi+\alpha)) - \frac{1}{2}(\sin(2\beta') - \sin(2(\pi+\alpha)))]}$

**Crucial Point:** The exact calculation of $V_{o,rms}$ for an RL load requires knowing the extinction angles $\beta$ and $\beta'$, which are themselves functions of $\alpha$, $R$, and $L$. This often requires numerical methods or pre-calculated tables for specific load parameters.

**Important Note:** For very small firing angles ($\alpha$) and significant inductance, the current might not turn off within the half-cycle. In such cases, the integration limits would need to be adjusted (e.g., $\alpha$ to $2\pi$ for the first device if it doesn't turn off at $\pi$).

**Textbook References:**
*   **Mohan, Undeland, Robbins (Wiley-India):** Section 5.3.2 (RMS output voltage for RL load) discusses the complexities.
*   **Rashid (Pearson Education):** Chapter 7.3.2 (RMS value of output voltage for RL load) covers the formula and its dependence on $\beta$.

---

### 7. Applications of AC Voltage Controllers

**Learning Outcome Alignment:**
*   **LO:** Identify and understand the practical applications of AC voltage controllers.
*   **CO2:** Understand the features of AC voltage Controllers and analyze the operation. (K3)
*   **CO4:** Understand the need for improved efficiency, improved reliability, improved load & source waveforms and improved utility interface. (K2)

**Key Application Areas:**

1.  **Lighting Control:**
    *   **Dimming of Incandescent Lamps:** By controlling the RMS voltage supplied to the lamps, their brightness can be adjusted.
    *   **Advantages:** Energy saving, adjustable ambiance.

2.  **Heater Control:**
    *   **Industrial Heating:** Precise control of temperature in electric furnaces, ovens, and heating elements.
    *   **Advantages:** Energy efficiency, precise temperature regulation.

3.  **Fan and Pump Speed Control:**
    *   **Variable Speed Fans:** In HVAC systems, ACVCs can control the speed of AC fans, leading to energy savings by matching airflow to demand.
    *   **Pump Control:** Adjusting the speed of AC motor-driven pumps in water supply systems or industrial processes.
    *   **Advantages:** Energy savings, reduced noise, precise control.

4.  **AC Motor Speed Control (Simple):**
    *   **Induction Motors:** While not providing a wide speed range or smooth starting, ACVCs can offer simple and inexpensive speed control for some types of AC motors by varying the RMS voltage. This is often referred to as "voltage control" for induction motors.
    *   **Limitations:** Reduced torque at lower speeds, potential for increased current draw and heating.
    *   **Consideration for CO4:** Improving efficiency by matching motor speed to load requirements.

5.  **AC Voltage Stabilization:**
    *   Can be used to maintain a stable AC output voltage despite fluctuations in the AC input voltage, although specialized voltage regulators are usually preferred for critical applications.

6.  **Welding Control:**
    *   Adjusting the power output in certain types of AC welding machines.

**Important Point for CO4:** ACVCs offer a way to control power delivered to a load, which can lead to improved energy efficiency by matching the power to the specific requirement of the application, rather than operating at full power unnecessarily.

**Textbook References:**
*   **Mohan, Undeland, Robbins (Wiley-India):** Chapter 5.6 (Applications) lists various uses.
*   **Hart (McGrawHill):** Chapter 10.4 (Applications) provides practical examples.
*   **Dubey (Narosa):** Chapter 12 (AC Voltage Controllers) also covers applications in motor drives.

---

### 8. Advantages and Disadvantages of AC Voltage Controllers

**Learning Outcome Alignment:**
*   **LO:** Understand the pros and cons of using AC voltage controllers.
*   **CO2:** Understand the features of AC voltage Controllers and analyze the operation. (K3)
*   **CO4:** Understand the need for improved efficiency, improved reliability, improved load & source waveforms and improved utility interface. (K2)

**Advantages:**

*   **Simple and Cost-Effective:** Relatively simple circuits and fewer components compared to some other AC voltage control methods.
*   **Wide Range of Control:** Can control the output voltage from zero up to the full input voltage by adjusting the firing angle.
*   **Energy Saving:** By reducing the power delivered to the load, they can save energy, especially in applications like fan and heater control (CO4).
*   **Silent Operation:** Solid-state switching results in silent operation compared to some electromechanical control methods.
*   **Fast Response:** Can respond quickly to changes in control signals.

**Disadvantages:**

*   **Harmonic Distortion:** The switching action creates harmonic distortion in both the input current and the output voltage waveforms. This can affect the power factor and potentially cause interference with other equipment (CO4).
*   **Poor Power Factor:** The phase control and non-sinusoidal waveforms result in a poor input power factor, especially at reduced voltage levels.
*   **Line Commutation Limitations:** Relies on the AC source voltage to turn off the thyristors (line commutation), which limits their operation in some scenarios.
*   **Limited to AC Loads:** Cannot be used to produce a DC output.
*   **Heating:** The switching losses and harmonic currents can lead to increased heating of the power devices and the load.
*   **Limited Speed Control for Motors:** For induction motors, simple voltage control is not as efficient or effective as variable frequency drives (VFDs), especially for applications requiring good torque at low speeds.

**Textbook References:**
*   **Mohan, Undeland, Robbins (Wiley-India):** Chapter 5.5 (Advantages and disadvantages) summarizes these points.
*   **Rashid (Pearson Education):** Chapter 7.4 (Advantages and disadvantages) provides a good overview.

---

### 9. Practice Questions and Answers

**1. Question:** A single-phase full-wave AC voltage controller using TRIACs is used to control the power delivered to a resistive load. If the RMS input voltage is $230V$ and the firing angle is set to $\alpha = 60^\circ$. Calculate the RMS output voltage.

**Answer:**
Using the formula for RMS output voltage with a resistive load:
$V_{o,rms} = V_s \sqrt{1 - \frac{2\alpha}{\pi} + \frac{1}{\pi} \sin(2\alpha)}$

Given: $V_s = 230V$, $\alpha = 60^\circ = \frac{\pi}{3}$ radians.

$V_{o,rms} = 230 \sqrt{1 - \frac{2(\pi/3)}{\pi} + \frac{1}{\pi} \sin(2 \cdot \frac{\pi}{3})}$
$V_{o,rms} = 230 \sqrt{1 - \frac{2}{3} + \frac{1}{\pi} \sin(\frac{2\pi}{3})}$
$V_{o,rms} = 230 \sqrt{\frac{1}{3} + \frac{1}{\pi} \cdot \frac{\sqrt{3}}{2}}$
$V_{o,rms} = 230 \sqrt{0.3333 + \frac{1}{3.14159} \cdot 0.8660}$
$V_{o,rms} = 230 \sqrt{0.3333 + 0.2757}$
$V_{o,rms} = 230 \sqrt{0.6090}$
$V_{o,rms} = 230 \times 0.7804$
$V_{o,rms} \approx 179.5V$

**2. Question:** What is the primary advantage of using an AC voltage controller for dimming incandescent lamps?
    a) Improved power factor
    b) Reduced harmonic distortion
    c) Energy saving and adjustable brightness
    d) Increased lamp life due to voltage stabilization

**Answer:** c) Energy saving and adjustable brightness
*   **Explanation:** ACVCs reduce the power delivered to the lamp, saving energy and allowing for brightness adjustment. They do not inherently improve the power factor or reduce harmonic distortion. While reduced power might indirectly affect lamp life, it's not the primary advantage of the control mechanism itself.

**3. Question:** Briefly explain why an AC voltage controller with an inductive load has a different current waveform and turn-off behavior compared to a resistive load.

**Answer:**
With an inductive load, the current lags the voltage. This means that by the time the voltage across the switching device (e.g., TRIAC) tries to go to zero or reverse, the inductive current might still be flowing. Thyristors (and TRIACs) can only turn off when the current through them drops to zero. Therefore, for an inductive load, the switching device might continue to conduct beyond the zero crossing of the voltage, into the next half-cycle, or until the inductive current naturally decays to zero (the extinction angle $\beta$). This effect alters the output voltage waveform and makes the calculation of RMS output voltage more complex as the conduction period is determined by the extinction angle rather than just the firing angle and the end of the half-cycle.

**4. Question:** For a full-wave AC voltage controller with a resistive load, if the firing angle $\alpha$ is increased from $0^\circ$ to $180^\circ$, how does the RMS output voltage change?

**Answer:**
As the firing angle $\alpha$ increases from $0^\circ$ to $180^\circ$, the RMS output voltage ($V_{o,rms}$) **decreases**.
*   When $\alpha = 0^\circ$, the devices conduct for the entire cycle, and $V_{o,rms} = V_s$.
*   As $\alpha$ increases, more of the AC waveform is chopped off, reducing the average and RMS values of the output voltage.
*   When $\alpha = 180^\circ$, the devices never conduct, and $V_{o,rms} = 0V$.

---

### 10. Summary and Key Takeaways

*   **AC Voltage Controllers (ACVCs)** are power electronic circuits used to control the RMS value of an AC voltage waveform delivered to a load by cyclically switching the AC voltage ON and OFF.
*   A **1-phase full-wave ACVC** uses pairs of inverse-parallel thyristors or TRIACs to control voltage in both positive and negative half-cycles.
*   The **firing angle ($\alpha$)** is the key control parameter, determining when the switching devices turn ON.
*   For a **resistive load**, the output voltage waveform is a chopped sine wave. The RMS output voltage is given by $V_{o,rms} = V_s \sqrt{1 - \frac{2\alpha}{\pi} + \frac{1}{\pi} \sin(2\alpha)}$.
*   For an **RL load**, the current lags the voltage, and the switching devices turn off at an **extinction angle ($\beta$)** which is greater than the firing angle and depends on the load impedance and firing angle. This makes the output waveform and RMS voltage calculation more complex.
*   Common applications include **lighting dimming, heater control, and fan/pump speed control**.
*   **Advantages** include simplicity and energy saving, while **disadvantages** include harmonic distortion and poor power factor.
*   ACVCs contribute to **improved efficiency (CO4)** by allowing power to be matched to the load requirement.

---
