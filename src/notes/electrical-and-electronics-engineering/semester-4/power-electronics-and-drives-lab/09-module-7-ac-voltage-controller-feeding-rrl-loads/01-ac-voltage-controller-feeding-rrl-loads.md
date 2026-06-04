---
title: "AC Voltage controller feeding R/RL loads"
subject: "POWER ELECTRONICS AND DRIVES LAB"
module: "Module 7: AC Voltage controller feeding R/RL loads"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200852b85456187f36141"
status: "completed"
scrapedAt: "2026-05-23T16:18:06.612Z"
---
## POWER ELECTRONICS AND DRIVES LAB: Module 7 - AC Voltage Controller Feeding R/RL Loads

---

### **1. Introduction to AC Voltage Controllers**

**1.1. Definition:**
An AC voltage controller, also known as a cyclo-converter (in its more complex form) or simply a voltage controller, is a power electronic circuit that converts an AC input voltage to a variable AC output voltage at the *same frequency*. This is typically achieved by switching semiconductor devices to chop the AC waveform.

**1.2. Purpose and Applications:**
*   **Load Voltage Control:** The primary purpose is to control the RMS value of the AC voltage delivered to a load.
*   **Speed Control of AC Motors:** Widely used for controlling the speed of induction motors and synchronous motors (though more complex than basic DC motor control).
*   **Lighting Control:** Dimming of incandescent and some types of fluorescent lighting.
*   **Heating Control:** Regulating the power supplied to resistive heating elements.
*   **Fan Speed Control:** Adjusting the speed of AC fans.

**1.3. Course Outcome Alignment:**
This topic directly addresses **CO2: Understand the features of phase-controlled rectifiers, AC voltage Controllers & Switching Regulators and Analyse the operation (Knowledge Level: K4)**. We will be analyzing the operation of AC voltage controllers in detail.

---

### **2. Basic Principles of AC Voltage Control**

**2.1. Principle of Operation:**
AC voltage control is achieved by controlling the conduction period of semiconductor switching devices (like TRIACs or SCRs) within each half-cycle of the AC input voltage. By varying the firing angle (the point in the AC cycle at which the device is triggered to conduct), the output voltage waveform is shaped, thereby controlling the RMS value.

**2.2. Key Concepts:**
*   **Firing Angle ($\alpha$):** The delay angle from the zero-crossing point of the AC voltage at which the thyristor or TRIAC is triggered into conduction.
*   **Conduction Angle ($\beta$):** The duration within a half-cycle for which the switching device conducts.
*   **Phase Angle Control:** The technique of varying the firing angle to control the output voltage.

**2.3. Important Textual References:**
*   **Umanand (2009):** Likely discusses the fundamental switching principles and the role of firing angle in waveform shaping.
*   **Mohan, Undeland, Robbins (2022):** Provides a comprehensive treatment of AC voltage controllers, including their configurations and mathematical analysis.
*   **Vithayathil (2010):** Explains the basic operation of thyristor-based AC voltage controllers.
*   **Hart (2010):** Offers insights into the switching behavior and control strategies.

---

### **3. AC Voltage Controller Configurations**

**3.1. Single-Phase AC Voltage Controllers:**

    *   **ON-OFF Control:**
        *   **Concept:** The load is connected to the AC source for a certain duration (ON time) and disconnected for another duration (OFF time) within each half-cycle or cycle.
        *   **Implementation:** Typically done using a contactor or a thyristor/TRIAC switched ON at the beginning of a half-cycle and turned OFF at the end of the half-cycle or at zero current.
        *   **Pros:** Simple, produces a voltage waveform that is either full sine wave or zero.
        *   **Cons:** Generates harmonics, poor output voltage regulation, significant switching losses if done frequently.

    *   **Phase Control:**
        *   **Concept:** Semiconductor switches (SCRs or TRIACs) are used to chop the AC waveform by controlling their conduction period within each half-cycle.
        *   **Key Devices:**
            *   **TRIAC:** A bidirectional semiconductor switch that can conduct in both forward and reverse directions. It's commonly used for AC voltage control as it can control both positive and negative half-cycles with a single device (when properly triggered).
            *   **Back-to-Back SCRs:** Two SCRs connected in inverse-parallel configuration. One SCR conducts during the positive half-cycle, and the other conducts during the negative half-cycle. This is a more robust approach for higher power applications.

**3.2. Basic Single-Phase AC Voltage Controller Circuits:**

    *   **With Resistive Load (R-Load):**
        *   **Circuit Diagram:** A TRIAC connected in series with the R-load and the AC source.
        *   **Operation:**
            *   When the gate pulse is applied, the TRIAC conducts.
            *   For a positive half-cycle, the TRIAC conducts from firing angle $\alpha$ to $\pi$ (180 degrees).
            *   For a negative half-cycle, the TRIAC conducts from $\pi + \alpha$ to $2\pi$ (360 degrees).
            *   The output voltage is effectively the portion of the input AC waveform that appears across the load during conduction.

    *   **With Inductive Load (RL-Load):**
        *   **Circuit Diagram:** Similar to the R-load, but with an inductor in series with the resistor.
        *   **Operation:**
            *   The presence of the inductor causes the load current to lag the voltage.
            *   **Crucial Point:** Due to the inductor, the current will not stop flowing at the point where the voltage crosses zero. The TRIAC (or SCR) will continue to conduct until the current through it drops to zero naturally (latching current). This happens *after* the voltage has crossed zero.
            *   **Commutation:** The natural turn-off of the thyristor when the current becomes zero is called natural commutation.
            *   **Effect on Output Voltage:** The output voltage waveform is further modified, and the conduction angle can extend beyond $\pi$ or $2\pi$ in a half-cycle.
            *   **Average Output Voltage:** The average output voltage calculation becomes more complex due to the inductive nature of the load and the delayed turn-off.

**3.3. Important Textual References:**
*   **Rashid (2014):** Provides detailed circuit diagrams and analysis for both R and RL loads.
*   **Lander (1993):** Offers explanations of TRIAC and SCR operation in AC voltage control circuits.
*   **Krein (2017):** Likely discusses the power transfer mechanisms and control strategies.
*   **Xiao (2021):** May cover modeling and simulation aspects of these circuits.

---

### **4. Analysis of AC Voltage Controllers**

**4.1. Output Voltage and RMS Value (R-Load):**

*   **Input Voltage:** $v_s(t) = V_m \sin(\omega t)$
*   **TRIAC Conduction:** From $\alpha$ to $\pi$ (positive half-cycle) and $\pi+\alpha$ to $2\pi$ (negative half-cycle).
*   **Output Voltage (for $0 \le \theta \le \alpha$ and $\pi \le \theta \le \pi+\alpha$):** $v_o(t) = 0$
*   **Output Voltage (for $\alpha \le \theta \le \pi$ and $\pi+\alpha \le \theta \le 2\pi$):** $v_o(t) = v_s(t) = V_m \sin(\omega t)$

*   **RMS Output Voltage ($V_{o,rms}$):**
    $$ V_{o,rms} = \sqrt{\frac{1}{2\pi} \int_0^{2\pi} v_o^2(\theta) d\theta} $$
    For a R-load with a TRIAC, this simplifies to:
    $$ V_{o,rms} = V_s \sqrt{\frac{1}{\pi} \int_{\alpha}^{\pi} \sin^2(\omega t) d\omega t} $$
    $$ V_{o,rms} = V_s \sqrt{\frac{1}{2\pi} (\pi - \alpha - \frac{1}{2}\sin(2\alpha))} $$
    where $V_s$ is the RMS input voltage.

*   **Average Output Voltage ($V_{o,avg}$):**
    $$ V_{o,avg} = \frac{1}{2\pi} \int_0^{2\pi} v_o(\theta) d\theta $$
    For a R-load with a TRIAC:
    $$ V_{o,avg} = \frac{V_m}{\pi} \int_{\alpha}^{\pi} \sin(\omega t) d\omega t $$
    $$ V_{o,avg} = \frac{V_m}{\pi} [-\cos(\omega t)]_{\alpha}^{\pi} = \frac{V_m}{\pi} (1 + \cos(\alpha)) $$

**4.2. Output Voltage and RMS Value (RL-Load):**

*   **Challenge:** The current lags the voltage, and the thyristor turns off when the current reaches zero, which may occur after the voltage has passed zero.
*   **Conduction Angle:** The conduction angle for each half-cycle, $\beta$, is generally greater than $\pi - \alpha$.
*   **Determining $\beta$:** For an RL load, the current is given by $i_L(t) = \frac{V_m}{Z} \sin(\omega t - \phi - \alpha) + K e^{-j(\omega t - \alpha)}$, where $Z = \sqrt{R^2 + (\omega L)^2}$ and $\phi = \tan^{-1}(\frac{\omega L}{R})$. At the end of conduction, $i_L(\beta) = 0$. Solving this equation for $\beta$ is crucial for calculating the output voltage.
*   **RMS Output Voltage ($V_{o,rms}$ for RL-Load):** The calculation is more complex and involves integrating the voltage waveform over the conduction period, which is determined by $\beta$. The general form is:
    $$ V_{o,rms} = V_s \sqrt{\frac{1}{\pi} \int_{\alpha}^{\beta} \sin^2(\omega t) d\omega t} $$
    The term $\beta$ depends on the load impedance and firing angle.

**4.3. Harmonics:**
*   **Source of Harmonics:** The switching operation inherently introduces harmonic components into the output voltage and current waveforms.
*   **Impact:** These harmonics can cause interference with other electronic equipment, increased losses in the load, and distortion of the AC supply waveform.
*   **Control:** The harmonic content is a function of the firing angle. Wider conduction angles (lower $\alpha$) generally result in lower harmonic content.

**4.4. Important Textual References:**
*   **Agrawal (2006):** Provides detailed mathematical derivations for RMS and average values for different loads and firing angles.
*   **Mohan, Undeland, Robbins (2022):** Offers in-depth analysis of harmonics and power factor for AC voltage controllers.
*   **Vithayathil (2010):** Explains the concepts of conduction angle and its dependence on load.
*   **Hart (2010):** Discusses the output voltage and current waveforms and their analysis.

---

### **5. Practical Considerations and Laboratory Experiments**

**5.1. Devices Used:**
*   **TRIAC:** Typically used for single-phase low to medium power applications. Requires a gate trigger circuit.
*   **Back-to-back SCRs:** Used for higher power applications, requiring separate gate trigger circuits for each SCR.
*   **DIAC:** Often used as a trigger device for TRIACs, providing a sharp trigger pulse.

**5.2. Gate Triggering Circuits:**
*   **Purpose:** To provide a controlled gate current to trigger the thyristors/TRIACs at the desired firing angle.
*   **Common Circuits:**
    *   **RC Triggering:** A simple circuit using a resistor, capacitor, and a DIAC/TRIAC for triggering. The firing angle is varied by changing the resistor value.
    *   **UJT Triggering:** Universal Triggering Circuits based on Unijunction Transistors.
    *   **Microcontroller-based triggering:** Modern approaches use microcontrollers to generate precise firing pulses.

**5.3. Load Types:**
*   **Resistive Load:** Heating elements, incandescent lamps.
*   **Inductive Load:** Motors, transformers.

**5.4. Laboratory Experiments:**
*   **Familiarization with TRIAC/SCR characteristics:** Observing V-I characteristics.
*   **Building a simple R-load AC voltage controller:** Using a TRIAC and an RC trigger circuit.
*   **Measuring output RMS voltage:** Using a true RMS voltmeter for varying firing angles.
*   **Observing output voltage and current waveforms:** Using an oscilloscope for R and RL loads.
*   **Effect of firing angle on output voltage:** Plotting $V_{o,rms}$ vs. $\alpha$.
*   **Experimenting with an RL load:** Observing the behavior of current and voltage waveforms, and the effect of inductance on conduction angle.
*   **Calculating power factor:** For R and RL loads.

**5.5. Course Outcome Alignment:**
This section directly supports **CO1: Understand the operation of modern power semiconductor devices, its characteristics and Design & Select suitable gate driver circuits & heatsinks (Knowledge Level: K5)** by focusing on the practical aspects of device selection and trigger circuit design. It also supports **CO2: Understand the features of phase-controlled rectifiers, AC voltage Controllers & Switching Regulators and Analyse the operation (Knowledge Level: K4)** by enabling practical analysis through experiments.

---

### **6. Practice Questions and Answers**

**Question 1:** What is the main advantage of using a TRIAC over two back-to-back SCRs in a single-phase AC voltage controller for low-power applications?

**Answer 1:** The main advantage of using a TRIAC is its **simplicity**. A single TRIAC can control both the positive and negative half-cycles of the AC waveform, requiring only one gate control circuit. Two back-to-back SCRs require two separate devices and two gate control circuits.

**Question 2:** An AC voltage controller feeding a purely resistive load is operated with a firing angle $\alpha = 60^\circ$. If the RMS input voltage is 230V, calculate the RMS output voltage.

**Answer 2:**
Given: $V_s = 230$ V (RMS), $\alpha = 60^\circ = \pi/3$ radians.
The formula for RMS output voltage for a resistive load is:
$V_{o,rms} = V_s \sqrt{\frac{1}{2\pi} (\pi - \alpha - \frac{1}{2}\sin(2\alpha))}$

First, calculate $2\alpha$: $2\alpha = 120^\circ = 2\pi/3$ radians.
$\sin(2\alpha) = \sin(120^\circ) = \sqrt{3}/2 \approx 0.866$

$V_{o,rms} = 230 \sqrt{\frac{1}{2\pi} (\pi - \frac{\pi}{3} - \frac{1}{2}\frac{\sqrt{3}}{2})}$
$V_{o,rms} = 230 \sqrt{\frac{1}{2\pi} (\frac{2\pi}{3} - \frac{\sqrt{3}}{4})}$
$V_{o,rms} = 230 \sqrt{\frac{1}{2\pi} (2.094 - 0.433)}$
$V_{o,rms} = 230 \sqrt{\frac{1.661}{2\pi}}$
$V_{o,rms} = 230 \sqrt{0.2644}$
$V_{o,rms} = 230 \times 0.5142$
$V_{o,rms} \approx 118.27$ V

Therefore, the RMS output voltage is approximately **118.27 V**.

**Question 3:** How does the presence of an inductor in the load affect the turn-off condition of a thyristor in an AC voltage controller compared to a purely resistive load?

**Answer 3:** In a purely resistive load, the current through the thyristor becomes zero simultaneously with the voltage across it (at zero crossings). Therefore, the thyristor turns off naturally at the zero crossing of the voltage. However, in an inductive load, the **current lags the voltage**. This means that even when the voltage waveform crosses zero and becomes negative, the inductive current will continue to flow in the same direction and will only become zero at a later point in time (when the inductor's stored energy is dissipated). The thyristor will therefore continue to conduct until this current zero point, which is called **natural commutation**. This extends the conduction period beyond the zero voltage crossing, influencing the output voltage waveform and the calculation of RMS values.

**Question 4:** What is the primary parameter that is varied to control the output voltage in a phase-controlled AC voltage controller?

**Answer 4:** The primary parameter varied is the **firing angle ($\alpha$)**. By adjusting the delay from the zero-crossing of the AC input voltage to the point where the switching device is triggered, the conduction period within each half-cycle is controlled, thus regulating the output voltage.

---

### **7. Important Points to Remember**

*   AC voltage controllers vary the **RMS output voltage** at the **same frequency** as the input.
*   The core principle is **phase angle control** using semiconductor switches.
*   **TRIACs** are commonly used for single-phase AC voltage control due to their bidirectional switching capability.
*   **Back-to-back SCRs** are an alternative for higher power applications.
*   For **resistive loads**, the conduction angle is directly related to the firing angle ($\alpha$), typically from $\alpha$ to $\pi$ in each half-cycle.
*   For **inductive loads**, the current lags the voltage, and the thyristor turns off when the **current becomes zero** (natural commutation), which occurs after the voltage zero crossing. This extends the conduction angle.
*   The RMS output voltage is a function of the input RMS voltage and the firing angle ($\alpha$), and for inductive loads, also the load impedance.
*   The switching operation introduces **harmonics** into the output waveform.
*   **Gate trigger circuits** are essential for controlling the firing angle. RC trigger circuits with DIACs are common for TRIACs.
*   In the lab, focus on observing and measuring voltage/current waveforms, RMS values, and the effect of the firing angle on R and RL loads.

---
