---
title: "DC-DC Switching Regulators- Buck, Boost & Buck-Boost– Operation with Continuous conduction Waveforms– Effect of non-idealities such as capacitor ESR and inductor resistance (qualitative treatment only)- Design of filter inductance and capacitance- Selection of power devices"
subject: "POWER ELECTRONICS AND DRIVES"
module: "Module 2: Controlled Rectifiers (Single Phase) – Fully controlled and half"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200842b85456187f35e26"
status: "completed"
scrapedAt: "2026-05-23T16:17:51.421Z"
---
# POWER ELECTRONICS AND DRIVES

## Module 2: Controlled Rectifiers (Single Phase) – Fully Controlled and Half

---

## Topic: DC-DC Switching Regulators - Buck, Boost & Buck-Boost

**Learning Outcomes:**
* Understand the operation of basic DC-DC switching regulators (Buck, Boost, Buck-Boost) in continuous conduction mode.
* Analyze the waveforms associated with these converters in continuous conduction.
* Qualitatively understand the effect of non-idealities like capacitor ESR and inductor resistance on converter performance.
* Design basic filter inductance and capacitance for these regulators.
* Select appropriate power devices for these switching regulators.

**Course Outcomes Addressed:**
* **CO2:** Understand the features of switching regulators and analyze their operation. (Knowledge Level: K3)
* **CO4:** Understand the need for improved efficiency and load/source waveforms (implied by the need for stable DC output). (Knowledge Level: K2)

---

### 1. Introduction to DC-DC Switching Regulators

DC-DC switching regulators are power electronic converters that efficiently convert one DC voltage level to another. They achieve this by rapidly switching a power semiconductor device (like a MOSFET or IGBT) ON and OFF, thereby controlling the flow of energy between an input source and an output load, typically with the help of inductors and capacitors. This switching action allows for high efficiency compared to linear regulators, which dissipate power as heat.

**Key Concepts:**
* **Switching:** The core principle involves controlling the ON/OFF states of power semiconductor devices to regulate the output voltage.
* **Energy Storage Elements:** Inductors and capacitors are crucial for storing and releasing energy, smoothing the current and voltage, and thus regulating the output.
* **Duty Cycle (D):** The ratio of the ON time ($T_{on}$) of the switching device to the total switching period ($T_s = T_{on} + T_{off}$). It's a primary control parameter.
* **Switching Frequency ($f_s$):** The rate at which the switching device is turned ON and OFF. Higher frequencies allow for smaller passive components but can increase switching losses.
* **Continuous Conduction Mode (CCM):** The inductor current never drops to zero during a switching cycle. This is generally preferred for stable operation and lower ripple.

**Textbook References:**
* **Mohan, Undeland, Robbins (Wiley-India, 2022):** Chapter 1 introduces DC-DC converters.
* **Rashid (Pearson Education, 2014):** Chapter 11 covers DC-DC converters.
* **Lander (McGrawHill, 1993):** Chapter 5 discusses switching regulators.
* **Hart (McGrawHill, 2010):** Chapter 5 explores DC-DC converters.

---

### 2. Buck Converter (Step-Down Converter)

**Description:** The buck converter reduces a higher DC input voltage to a lower DC output voltage.

**Operation in Continuous Conduction Mode (CCM):**

*   **Mode 1: Switch ON (0 < t < DTs)**
    *   The main switching device (e.g., MOSFET) is turned ON.
    *   The input voltage ($V_{in}$) is applied across the inductor.
    *   The inductor current ($i_L$) increases linearly.
    *   The diode is reverse-biased and acts as an open circuit.
    *   The capacitor supplies the load current.

    *   **Waveforms:**
        *   $v_{sw}$ (switch voltage) = 0
        *   $i_L$ = Linearly increasing from $I_{L,min}$ to $I_{L,max}$
        *   $v_o$ = Approximately $V_{in} \cdot D$ (ideal)
        *   $i_{load}$ = Constant (ideal)

*   **Mode 2: Switch OFF (DTs < t < Ts)**
    *   The main switching device is turned OFF.
    *   The inductor, now disconnected from the input source, tries to maintain its current.
    *   The diode becomes forward-biased and provides a path for the inductor current to flow to the load and capacitor.
    *   The inductor current ($i_L$) decreases linearly.
    *   The capacitor charges and supplies the load current.

    *   **Waveforms:**
        *   $v_{sw}$ = $V_{in}$
        *   $i_L$ = Linearly decreasing from $I_{L,max}$ to $I_{L,min}$
        *   $v_o$ = Approximately $V_{in} \cdot D$ (ideal)
        *   $i_{load}$ = Constant (ideal)

**Voltage Transfer Ratio (Ideal):**
$V_o = D \cdot V_{in}$

**Inductor Current Ripple ($\Delta i_L$):**
During the ON time, the voltage across the inductor is $V_{in} - V_o$.
$\Delta i_L = \frac{(V_{in} - V_o)}{L} \cdot D T_s = \frac{(V_{in} - V_{in}D)}{L} \cdot D T_s = \frac{V_{in}D(1-D)}{L f_s}$

**Output Voltage Ripple ($\Delta v_o$):**
During the OFF time, the capacitor discharges through the load and charges from the inductor. The ripple is primarily due to the charging/discharging of the output capacitor by the inductor current ripple.
$\Delta v_o \approx \frac{\Delta i_L}{8 C f_s}$

**Important Points to Remember (Buck Converter):**
*   The output voltage is always less than or equal to the input voltage.
*   The input current is pulsed (drawn only when the switch is ON).
*   The output voltage is smoothed by the LC filter.

---

### 3. Boost Converter (Step-Up Converter)

**Description:** The boost converter increases a lower DC input voltage to a higher DC output voltage.

**Operation in Continuous Conduction Mode (CCM):**

*   **Mode 1: Switch ON (0 < t < DTs)**
    *   The main switching device is turned ON.
    *   The inductor is directly connected across the input voltage source, causing its current ($i_L$) to increase linearly.
    *   The diode is reverse-biased and acts as an open circuit.
    *   The output capacitor supplies the load current.

    *   **Waveforms:**
        *   $v_{sw}$ = 0
        *   $i_L$ = Linearly increasing from $I_{L,min}$ to $I_{L,max}$
        *   $v_o$ = Constant (ideal)
        *   $i_{load}$ = Constant (ideal)

*   **Mode 2: Switch OFF (DTs < t < Ts)**
    *   The main switching device is turned OFF.
    *   The inductor, which has stored energy, tries to maintain its current.
    *   The diode becomes forward-biased, connecting the inductor in series with the input source to the output capacitor and load.
    *   The inductor current ($i_L$) decreases linearly.
    *   The inductor voltage ($v_L$) is now positive, charging the output capacitor and supplying the load.

    *   **Waveforms:**
        *   $v_{sw}$ = $V_{in}$
        *   $i_L$ = Linearly decreasing from $I_{L,max}$ to $I_{L,min}$
        *   $v_o$ = Constant (ideal)
        *   $i_{load}$ = Constant (ideal)

**Voltage Transfer Ratio (Ideal):**
$V_o = \frac{V_{in}}{1-D}$

**Inductor Current Ripple ($\Delta i_L$):**
During the ON time, the voltage across the inductor is $V_{in}$.
$\Delta i_L = \frac{V_{in}}{L} \cdot D T_s = \frac{V_{in}D}{L f_s}$

**Output Voltage Ripple ($\Delta v_o$):**
The output capacitor is charged by the inductor current when the switch is OFF. The ripple is related to the inductor current ripple.
$\Delta v_o \approx \frac{\Delta i_L}{2 C f_s}$ (This is a simplified approximation, a more accurate one considers the shape of the current pulse)
A more precise approximation for the ripple when the switch is OFF is:
$\Delta v_o \approx \frac{(I_{L,avg} - I_{load}) \cdot D T_s}{C} = \frac{(I_{L,avg} - \frac{V_o}{R}) \cdot D T_s}{C}$
Considering the average inductor current is slightly more than the load current.

**Important Points to Remember (Boost Converter):**
*   The output voltage is always greater than or equal to the input voltage.
*   The input current is continuous but can be highly discontinuous (pulsed) depending on the filter design at the input.
*   It has a right-half-plane zero, which can affect control loop stability.

---

### 4. Buck-Boost Converter (Inverting Converter)

**Description:** The buck-boost converter produces an output voltage that is inverted and can be higher or lower in magnitude than the input voltage.

**Operation in Continuous Conduction Mode (CCM):**

*   **Mode 1: Switch ON (0 < t < DTs)**
    *   The main switching device is turned ON.
    *   The inductor is connected across the input voltage source, and its current ($i_L$) increases linearly.
    *   The diode is reverse-biased, preventing current flow to the output.
    *   The output capacitor supplies the load current.

    *   **Waveforms:**
        *   $v_{sw}$ = 0
        *   $i_L$ = Linearly increasing from $I_{L,min}$ to $I_{L,max}$
        *   $v_o$ = Constant (ideal)
        *   $i_{load}$ = Constant (ideal)

*   **Mode 2: Switch OFF (DTs < t < Ts)**
    *   The main switching device is turned OFF.
    *   The inductor tries to maintain its current.
    *   The diode becomes forward-biased, connecting the inductor across the output load.
    *   The inductor current ($i_L$) decreases linearly, flowing from the inductor, through the diode, to the load and output capacitor.
    *   The output voltage is negative because of the diode's polarity.

    *   **Waveforms:**
        *   $v_{sw}$ = $V_{in}$
        *   $i_L$ = Linearly decreasing from $I_{L,max}$ to $I_{L,min}$
        *   $v_o$ = Constant (ideal)
        *   $i_{load}$ = Constant (ideal)

**Voltage Transfer Ratio (Ideal):**
$V_o = -\frac{D}{1-D} V_{in}$

**Inductor Current Ripple ($\Delta i_L$):**
During the ON time, the voltage across the inductor is $V_{in}$.
$\Delta i_L = \frac{V_{in}}{L} \cdot D T_s = \frac{V_{in}D}{L f_s}$

**Output Voltage Ripple ($\Delta v_o$):**
Similar to the boost converter, the output capacitor is charged by the inductor current when the switch is OFF.
$\Delta v_o \approx \frac{\Delta i_L}{2 C f_s}$ (simplified approximation)

**Important Points to Remember (Buck-Boost Converter):**
*   The output voltage polarity is inverted with respect to the input voltage.
*   The output voltage magnitude can be stepped up or down.
*   The input and output currents are discontinuous.

---

### 5. Effect of Non-Idealities (Qualitative Treatment)

**1. Capacitor Equivalent Series Resistance (ESR) ($R_{ESR}$):**
*   **Effect:** ESR causes a voltage drop proportional to the AC component of the current passing through the capacitor. This leads to an increase in the output voltage ripple. During the intervals when the capacitor is charging or discharging due to AC current, a power loss of $I_{ac}^2 \cdot R_{ESR}$ occurs within the capacitor, reducing efficiency.
*   **Qualitative Impact:**
    *   Increases output voltage ripple.
    *   Reduces converter efficiency.
    *   Can affect the dynamic response of the converter.

**2. Inductor Resistance ($R_L$):**
*   **Effect:** The DC resistance of the inductor winding causes a voltage drop equal to $I_L \cdot R_L$. This reduces the effective voltage across the switching elements or the capacitor, leading to a slight reduction in the output voltage compared to the ideal case. It also results in power loss ($I_L^2 \cdot R_L$), reducing efficiency.
*   **Qualitative Impact:**
    *   Reduces output voltage slightly.
    *   Reduces converter efficiency.
    *   Can cause the inductor current to be slightly asymmetric if not considered in design.

**Textbook References:**
*   **Mohan, Undeland, Robbins (Wiley-India, 2022):** Chapter 2 discusses non-idealities in passive components.
*   **Rashid (Pearson Education, 2014):** Chapter 11 elaborates on non-idealities.
*   **Krein (Oxford, 2017):** Chapter 3 covers component non-idealities.

---

### 6. Design of Filter Inductance and Capacitance

The goal of the output filter (typically an LC filter) is to reduce the output voltage and current ripple to acceptable levels.

**General Design Steps:**

1.  **Specify Required Output Voltage Ripple ($\Delta V_o$):** This is usually a percentage of the output voltage or an absolute value.
2.  **Specify Inductor Current Ripple ($\Delta I_L$):** A common design choice is to set $\Delta I_L$ to be between 20% and 40% of the average load current ($I_{load,avg}$). This ensures CCM operation for a wide range of loads.
3.  **Select Switching Frequency ($f_s$):** Higher frequencies allow for smaller components but increase switching losses.
4.  **Calculate Required Inductance (L):**
    *   Rearrange the ripple formulas derived earlier for each converter type.
    *   **Buck:** $L \geq \frac{V_{in}D(1-D)}{f_s \Delta I_L}$
    *   **Boost:** $L \geq \frac{V_{in}D}{f_s \Delta I_L}$
    *   **Buck-Boost:** $L \geq \frac{V_{in}D}{f_s \Delta I_L}$
    *   Choose a standard inductor value that is greater than or equal to the calculated minimum. Also, consider the inductor's saturation current rating (must be higher than peak inductor current $I_{L,peak} = I_{L,avg} + \Delta I_L/2$).

5.  **Calculate Required Capacitance (C):**
    *   The capacitance value is determined by the acceptable output voltage ripple and the inductor current ripple.
    *   **Buck:** $C \geq \frac{\Delta I_L}{8 f_s \Delta V_o}$ (Using the approximation $\Delta V_o \approx \frac{\Delta i_L}{8 C f_s}$)
    *   **Boost:** $C \geq \frac{\Delta I_L}{2 f_s \Delta V_o}$ (Using the approximation $\Delta V_o \approx \frac{\Delta i_L}{2 C f_s}$)
    *   **Buck-Boost:** $C \geq \frac{\Delta I_L}{2 f_s \Delta V_o}$ (Using the approximation $\Delta V_o \approx \frac{\Delta i_L}{2 C f_s}$)
    *   Crucially, for practical design, the **ESR of the capacitor** is often the dominant factor in output ripple. The ripple due to ESR is $\Delta V_o = \Delta I_L \cdot R_{ESR}$. Therefore, you must select a capacitor with an ESR low enough to meet the ripple specification: $R_{ESR} \leq \frac{\Delta V_o}{\Delta I_L}$. Low-ESR capacitors (like ceramic or polymer capacitors) are typically used.

**Example Design Scenario (Buck Converter):**
*   $V_{in} = 24V$
*   $V_o = 12V$
*   $I_{load,avg} = 2A$
*   $f_s = 100kHz$
*   Allowable $\Delta V_o = 100mV$ (1% of $V_o$)

1.  **Duty Cycle:** $D = V_o / V_{in} = 12V / 24V = 0.5$
2.  **Desired Inductor Ripple:** Let's target $\Delta I_L = 30\%$ of $I_{load,avg} = 0.3 \times 2A = 0.6A$.
3.  **Calculate Inductance (L):**
    $L \geq \frac{V_{in}D(1-D)}{f_s \Delta I_L} = \frac{24V \times 0.5 \times (1-0.5)}{100 \times 10^3 Hz \times 0.6A} = \frac{6}{60 \times 10^3} = 0.1 \times 10^{-3} H = 100 \mu H$.
    Choose $L = 100 \mu H$.
    Peak inductor current: $I_{L,peak} = I_{load,avg} + \Delta I_L/2 = 2A + 0.6A/2 = 2.3A$. Ensure inductor has a saturation current rating $> 2.3A$.
4.  **Calculate Capacitance (C):**
    Using the ESR-dominant ripple: $R_{ESR} \leq \frac{\Delta V_o}{\Delta I_L} = \frac{100mV}{0.6A} \approx 0.167 \Omega$. Select a low-ESR capacitor with $R_{ESR} < 0.167 \Omega$.
    Using the capacitance ripple formula: $C \geq \frac{\Delta I_L}{8 f_s \Delta V_o} = \frac{0.6A}{8 \times 100 \times 10^3 Hz \times 0.1V} = \frac{0.6}{8 \times 10^4} = 0.75 \times 10^{-6} F = 0.75 \mu F$.
    This capacitance value is very small. In practice, you'd choose a capacitor based on its ESR requirement and other factors like voltage rating, RMS current rating, and physical size. A $10 \mu F$ or $22 \mu F$ low-ESR ceramic or polymer capacitor is a typical choice, ensuring the ripple requirement is met.

---

### 7. Selection of Power Devices

The primary power switching devices used in DC-DC converters are MOSFETs and IGBTs. Diodes (often Schottky diodes for their low forward voltage drop and fast switching speed) are also critical components.

**1. Power MOSFETs:**
*   **Advantages:** Low on-state resistance ($R_{DS(on)}$) leading to low conduction losses, fast switching speeds, simple gate drive requirements, good for lower to medium voltages and currents.
*   **Disadvantages:** Voltage rating limitations, body diode can be slow and have a high $V_{F}$ (Forward Voltage) which can cause significant losses during the freewheeling period in Buck and Buck-Boost converters.
*   **Selection Criteria:**
    *   **Drain-Source Voltage ($V_{DS}$):** Must be significantly higher than the maximum voltage it will experience (e.g., $V_{DS} > 1.5 \times V_{in}$ for Buck, $V_{DS} > 1.5 \times (V_{in} + V_o)$ for Boost and Buck-Boost).
    *   **Drain Current ($I_D$):** Continuous current rating must be higher than the peak inductor current. Pulsed current rating is also important.
    *   **On-State Resistance ($R_{DS(on)}$):** Lower $R_{DS(on)}$ means lower conduction losses ($P_{cond} = I_{RMS}^2 \cdot R_{DS(on)}$).
    *   **Gate Charge ($Q_g$), Input Capacitance ($C_{iss}$):** Affect switching speed and gate drive power. Lower values are desirable for high-frequency operation.
    *   **Body Diode Characteristics:** Crucial for asynchronous converters (those without a separate freewheeling diode). Look for fast recovery and low $V_F$. Often, a fast Schottky diode is placed in antiparallel with the MOSFET to bypass the body diode.

**2. Insulated Gate Bipolar Transistors (IGBTs):**
*   **Advantages:** Higher voltage and current handling capability than MOSFETs, lower on-state voltage drop than bipolar transistors.
*   **Disadvantages:** Slower switching speeds than MOSFETs (leading to higher switching losses), requires a more complex gate drive circuit (higher voltage swings).
*   **Selection Criteria:**
    *   **Collector-Emitter Voltage ($V_{CE}$):** Similar voltage margin as for MOSFETs.
    *   **Collector Current ($I_C$):** Similar current rating considerations.
    *   **On-State Voltage ($V_{CE(sat)}$):** Lower $V_{CE(sat)}$ is better for conduction losses.
    *   **Switching Speed:** Important for determining switching losses ($P_{sw} \approx 0.5 \cdot V \cdot I \cdot (T_{rise} + T_{fall}) \cdot f_s$).

**3. Diodes:**
*   **Purpose:** Used as freewheeling diodes in Buck and Buck-Boost converters, and as the main switching element in diode-rectified converters or synchronous converters.
*   **Selection Criteria:**
    *   **Reverse Voltage ($V_R$):** Must be higher than the maximum reverse voltage it will experience.
    *   **Forward Current ($I_F$):** Average and RMS current ratings must be sufficient.
    *   **Forward Voltage Drop ($V_F$):** Lower $V_F$ reduces conduction losses. Schottky diodes are preferred for their low $V_F$ and fast switching.
    *   **Reverse Recovery Time ($t_{rr}$):** Crucial for minimizing switching losses during turn-on of the complementary switch or turn-off of the diode itself. Fast recovery diodes are essential.

**Textbook References:**
*   **Mohan, Undeland, Robbins (Wiley-India, 2022):** Chapter 3 discusses power semiconductor devices.
*   **Rashid (Pearson Education, 2014):** Chapter 2 covers semiconductor devices.
*   **Vithayathil (Tata McgrawHill, 2010):** Chapter 3 discusses power semiconductor devices.
*   **Hart (McGrawHill, 2010):** Chapter 3 covers power semiconductor devices.

---

### 8. Practice Questions and Answers

**Question 1:**
A buck converter operates with $V_{in} = 20V$, $V_o = 5V$, and $I_{load} = 1A$. If the switching frequency is $50kHz$ and the inductor value is $100 \mu H$, calculate the inductor current ripple.

**Answer 1:**
The duty cycle for a buck converter is $D = V_o / V_{in} = 5V / 20V = 0.25$.
The inductor current ripple is given by:
$\Delta i_L = \frac{V_{in}D(1-D)}{L f_s} = \frac{20V \times 0.25 \times (1-0.25)}{100 \times 10^{-6} H \times 50 \times 10^3 Hz} = \frac{20 \times 0.25 \times 0.75}{5} = \frac{3.75}{5} = 0.75 A$.

**Question 2:**
A boost converter has $V_{in} = 12V$, $V_o = 30V$, and $I_{load} = 2A$. The switching frequency is $80kHz$ and the inductor value is $50 \mu H$. What is the required duty cycle for this operation?

**Answer 2:**
For a boost converter, the voltage transfer ratio is $V_o = V_{in} / (1-D)$.
Rearranging for D: $1-D = V_{in} / V_o$.
$D = 1 - (V_{in} / V_o) = 1 - (12V / 30V) = 1 - 0.4 = 0.6$.
The required duty cycle is 0.6 or 60%.

**Question 3:**
In a buck-boost converter, what is the effect of increasing the capacitor's ESR on the output voltage ripple?

**Answer 3:**
Increasing the capacitor's ESR leads to a larger voltage drop across the ESR due to the AC component of the capacitor current. This directly increases the output voltage ripple.

**Question 4:**
For a buck converter to step down from $30V$ to $15V$ at $3A$ with a switching frequency of $150kHz$, and a desired inductor current ripple of $40\%$ of the load current, what is the minimum inductance required?

**Answer 4:**
*   Duty Cycle: $D = V_o / V_{in} = 15V / 30V = 0.5$.
*   Desired Inductor Ripple: $\Delta I_L = 0.40 \times I_{load,avg} = 0.40 \times 3A = 1.2A$.
*   Minimum Inductance:
    $L \geq \frac{V_{in}D(1-D)}{f_s \Delta I_L} = \frac{30V \times 0.5 \times (1-0.5)}{150 \times 10^3 Hz \times 1.2A} = \frac{30 \times 0.25}{180 \times 10^3} = \frac{7.5}{180 \times 10^3} \approx 41.67 \times 10^{-6} H = 41.67 \mu H$.
    The minimum inductance required is approximately $41.67 \mu H$.

**Question 5:**
Which type of power semiconductor switch is generally preferred for lower voltage/current applications due to its low on-state resistance and fast switching speed?

**Answer 5:**
Power MOSFETs.

---

### 9. Highlight Important Points to Remember

*   **Buck:** Steps down voltage ($V_o \le V_{in}$). Input current is pulsed.
*   **Boost:** Steps up voltage ($V_o \ge V_{in}$). Input current is continuous but can be filtered.
*   **Buck-Boost:** Inverts voltage ($V_o$ is negative) and can step up or down magnitude. Both input and output currents are discontinuous.
*   **CCM:** Inductor current never reaches zero. Preferred for stability and reduced ripple.
*   **Duty Cycle (D):** The primary control parameter for regulating output voltage.
*   **Capacitor ESR:** Significantly impacts output voltage ripple and efficiency. Always consider it in practical designs.
*   **Inductor Current Ripple:** Choose a value (e.g., 20-40% of load current) to ensure CCM and influence component selection.
*   **Power Device Selection:** Crucial factors are voltage/current ratings, conduction losses ($R_{DS(on)}$ or $V_{CE(sat)}$), and switching losses (determined by switching times and frequency).
*   **Diode Characteristics:** For freewheeling, Schottky diodes are often preferred due to low $V_F$ and fast recovery.

---
