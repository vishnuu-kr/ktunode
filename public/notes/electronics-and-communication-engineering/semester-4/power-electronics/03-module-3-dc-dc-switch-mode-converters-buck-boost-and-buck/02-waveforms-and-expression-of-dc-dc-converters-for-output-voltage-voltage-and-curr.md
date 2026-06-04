---
title: "Waveforms and expression of DC-DC converters for output voltage, voltage and current ripple under continuous conduction mode."
subject: "POWER ELECTRONICS"
module: "Module 3: DC – DC Switch Mode Converters:  Buck, Boost and Buck"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe5ff"
status: "completed"
scrapedAt: "2026-05-23T17:52:13.412Z"
---
Here are comprehensive study notes for the topic "Waveforms and expression of DC-DC converters for output voltage, voltage and current ripple under continuous conduction mode" for Module 3: DC – DC Switch Mode Converters (Buck, Boost, and Buck-Boost) in Power Electronics.

---

# Module 3: DC-DC Switch Mode Converters - Buck, Boost, and Buck-Boost

## Topic: Waveforms and Expressions for Output Voltage, Voltage, and Current Ripple under Continuous Conduction Mode (CCM)

This module focuses on the fundamental operation and analysis of three essential DC-DC switch-mode converters: the Buck converter, the Boost converter, and the Buck-Boost converter. We will delve into their circuit configurations, operating principles, and derive key expressions for their output voltage, and the voltage and current ripple under continuous conduction mode (CCM).

---

### Learning Outcomes Addressed in this Topic:

*   **Analyze the operation of basic DC-DC converters (Buck, Boost, Buck-Boost) in CCM.** (Directly aligns with CO3)
*   **Derive expressions for the output voltage of Buck, Boost, and Buck-Boost converters in CCM.** (Directly aligns with CO3)
*   **Derive expressions for output voltage ripple and inductor current ripple in CCM for these converters.** (Directly aligns with CO3)
*   **Understand the role of duty cycle and switching frequency in shaping converter performance.** (Supports CO3)

---

### Key Concepts and Definitions:

*   **DC-DC Converter:** A power electronic circuit that converts a DC voltage from one level to another, typically with high efficiency.
*   **Switch Mode Converter:** A DC-DC converter that utilizes switching elements (like MOSFETs, IGBTs) operating in ON/OFF states to achieve voltage conversion.
*   **Continuous Conduction Mode (CCM):** A mode of operation where the inductor current never drops to zero during a switching cycle. This is the most common and desirable mode for efficient operation.
*   **Duty Cycle (D):** The ratio of the ON time of the switching element to the total switching period. $D = t_{on} / T_s$, where $T_s$ is the switching period.
*   **Switching Period ($T_s$):** The reciprocal of the switching frequency ($f_s$). $T_s = 1/f_s$.
*   **Inductor:** A passive electronic component that stores energy in a magnetic field when electric current flows through it. Crucial for energy transfer in these converters.
*   **Capacitor:** A passive electronic component that stores electrical energy in an electric field. Used for filtering the output voltage.
*   **Switching Element:** Typically a MOSFET or IGBT, used to control the flow of current in the converter.
*   **Diode:** A semiconductor device that allows current to flow in only one direction. Acts as a freewheeling or rectifying element.
*   **Voltage Ripple:** The AC component superimposed on the DC output voltage. Lower ripple is generally desired.
*   **Current Ripple:** The AC component superimposed on the average DC inductor current.
*   **Energy Transfer:** The fundamental principle behind these converters is the storage and release of energy in the inductor.

---

## 1. Buck Converter (Step-Down Converter)

**Circuit Configuration:**

The Buck converter consists of a switch (S), a diode (D), an inductor (L), and an output capacitor (C). The input voltage $V_{in}$ is applied through the switch and inductor to the load $R$.

**Basic Operation in CCM:**

The operation can be divided into two intervals within a switching period $T_s$:

*   **Interval 1: Switch ON ($0 \le t \le DT_s$)**
    *   The switch S is closed.
    *   The inductor is connected directly to the input voltage $V_{in}$.
    *   The inductor current ($i_L$) increases linearly.
    *   The diode is reverse-biased and does not conduct.
    *   The capacitor supplies the load current during this interval.

*   **Interval 2: Switch OFF ($DT_s \le t \le T_s$)**
    *   The switch S is open.
    *   The inductor current tends to continue flowing, but now it flows through the diode (freewheeling).
    *   The inductor current decreases linearly.
    *   The diode is forward-biased and conducts.
    *   The capacitor is charged by the inductor current.

**Waveforms:**

*(Illustrative description of waveforms - actual diagrams would be essential for a visual learner)*

*   **Switch Voltage ($v_S$):** $V_{in}$ when OFF, 0 when ON.
*   **Diode Voltage ($v_D$):** 0 when conducting (ON), $-V_{in}$ when reverse-biased (OFF).
*   **Inductor Voltage ($v_L$):** $V_{in} - V_o$ when ON, $-V_o$ when OFF (assuming $v_C \approx V_o$).
*   **Inductor Current ($i_L$):** Rises linearly when ON, falls linearly when OFF. It is a triangular waveform centered around the average output current ($I_o$).
*   **Capacitor Current ($i_C$):** The difference between inductor current and load current ($i_L - I_o$). It is a triangular waveform.
*   **Output Voltage ($v_o$):** Ideally a constant DC voltage. In reality, it has a small AC ripple superimposed on the DC value.

**Derivation of Output Voltage ($V_o$):**

Applying the principle of volt-second balance to the inductor over one switching period:

$\int_{0}^{T_s} v_L dt = 0$

$\int_{0}^{DT_s} (V_{in} - V_o) dt + \int_{DT_s}^{T_s} (-V_o) dt = 0$

$(V_{in} - V_o)DT_s + (-V_o)(T_s - DT_s) = 0$

$V_{in}DT_s - V_oDT_s - V_oT_s + V_oDT_s = 0$

$V_{in}DT_s - V_oT_s = 0$

**$V_o = D V_{in}$**

This is the fundamental voltage conversion ratio for a Buck converter.

**Derivation of Inductor Current Ripple ($\Delta i_L$):**

During the ON time ($DT_s$), the inductor voltage is $v_L = V_{in} - V_o$.
Using $v_L = L \frac{di_L}{dt}$:

$\Delta i_L = \frac{v_L}{L} \Delta t = \frac{V_{in} - V_o}{L} (DT_s)$

Substitute $V_o = DV_{in}$:

$\Delta i_L = \frac{V_{in} - DV_{in}}{L} (DT_s) = \frac{V_{in}(1-D)}{L} (DT_s)$

**$\Delta i_L = \frac{V_{in}DT_s(1-D)}{L} = \frac{V_{in}D(1-D)}{f_sL}$**

This is the peak-to-peak ripple in the inductor current. For CCM, the minimum inductor current must be greater than zero: $I_{L,min} > 0$. The average inductor current $I_L = I_o = V_o/R$. The minimum current is $I_o - \Delta i_L/2$. So, $V_o/R > \Delta i_L/2$.

**Derivation of Output Voltage Ripple ($\Delta v_o$):**

The output capacitor $C$ filters the current ripple from the inductor. The output voltage ripple is primarily due to the charge drawn by the load and the AC component of the inductor current. The dominant component of the output voltage ripple is often attributed to the capacitor's Equivalent Series Resistance (ESR). However, if ESR is neglected, the ripple is due to the charging and discharging of the capacitor by the AC component of the inductor current.

The AC component of the inductor current is a triangular waveform. The capacitor current $i_C(t)$ is approximately the AC component of $i_L(t)$. The peak value of this triangular current is $\Delta i_L/2$.
The ripple on the output voltage is approximately the charge that flows into (or out of) the capacitor during the interval when the capacitor current is not supplying the load. A common approximation is to consider the ripple due to the charge/discharge by the triangular current pulse:

$\Delta v_o \approx \frac{\Delta i_L}{8Cf_s}$ (This is an approximation, a more precise derivation can be complex depending on the waveform assumption.)

**Reference:**
*   *Power Electronics Essentials & Applications* by L Umanand (Wiley India) discusses the Buck converter in Chapter 7.
*   *Power Electronics Circuits, Devices, and Applications* by Muhammad H Rashid (Pearson India) covers the Buck converter in Chapter 11.

---

## 2. Boost Converter (Step-Up Converter)

**Circuit Configuration:**

The Boost converter has a switch (S), a diode (D), an inductor (L), and an output capacitor (C). The inductor is in series with the input voltage, and the switch is connected in parallel with the inductor and load.

**Basic Operation in CCM:**

*   **Interval 1: Switch ON ($0 \le t \le DT_s$)**
    *   The switch S is closed.
    *   The inductor is connected directly across the input voltage $V_{in}$.
    *   The inductor current ($i_L$) increases linearly.
    *   The diode is reverse-biased and does not conduct.
    *   The output capacitor and load are supplied by energy stored in the inductor from the previous cycle (or by load current itself if any charge remains).

*   **Interval 2: Switch OFF ($DT_s \le t \le T_s$)**
    *   The switch S is open.
    *   The inductor current tends to continue flowing, and it now flows through the diode (forward-biased) to the output capacitor and the load.
    *   The inductor current decreases linearly.
    *   The diode conducts.
    *   Energy is transferred from the inductor to the output.

**Waveforms:**

*   **Switch Voltage ($v_S$):** 0 when ON, $V_o$ when OFF.
*   **Diode Voltage ($v_D$):** $-V_o$ when reverse-biased (OFF), 0 when conducting (ON).
*   **Inductor Voltage ($v_L$):** $V_{in}$ when ON, $V_{in} - V_o$ when OFF.
*   **Inductor Current ($i_L$):** Rises linearly when ON, falls linearly when OFF. It is a triangular waveform.
*   **Capacitor Current ($i_C$):** The difference between inductor current and load current ($i_L - I_o$).
*   **Output Voltage ($v_o$):** Ideally a constant DC voltage. Ripple is superimposed.

**Derivation of Output Voltage ($V_o$):**

Applying the principle of volt-second balance to the inductor over one switching period:

$\int_{0}^{T_s} v_L dt = 0$

$\int_{0}^{DT_s} V_{in} dt + \int_{DT_s}^{T_s} (V_{in} - V_o) dt = 0$

$V_{in}DT_s + (V_{in} - V_o)(T_s - DT_s) = 0$

$V_{in}DT_s + V_{in}T_s - V_{in}DT_s - V_oT_s + V_oDT_s = 0$

$V_{in}T_s - V_oT_s + V_oDT_s = 0$

$V_{in}T_s = V_oT_s - V_oDT_s = V_oT_s(1-D)$

**$V_o = \frac{V_{in}}{1-D}$**

This is the fundamental voltage conversion ratio for a Boost converter. Note that for $D=1$, $V_o$ approaches infinity, which highlights the step-up capability.

**Derivation of Inductor Current Ripple ($\Delta i_L$):**

During the ON time ($DT_s$), the inductor voltage is $v_L = V_{in}$.
Using $v_L = L \frac{di_L}{dt}$:

$\Delta i_L = \frac{v_L}{L} \Delta t = \frac{V_{in}}{L} (DT_s)$

**$\Delta i_L = \frac{V_{in}DT_s}{L} = \frac{V_{in}D}{f_sL}$**

For CCM, $I_{L,min} > 0$, where $I_L = I_o/(1-D)$. So, $I_o/(1-D) > \Delta i_L/2$.

**Derivation of Output Voltage Ripple ($\Delta v_o$):**

The output capacitor $C$ is charged by the inductor current when the switch is OFF. The inductor current falls from its peak value to its minimum value during this interval, which is $(1-D)T_s$. The AC component of the inductor current is responsible for the output voltage ripple.

The average current through the capacitor is zero. The AC component of the inductor current is a triangular wave with peak-to-peak value $\Delta i_L$. The output voltage ripple can be approximated by considering the charge delivered to the capacitor by the AC component of the inductor current.

$\Delta v_o \approx \frac{\Delta i_L}{8Cf_s}$ (Again, this is an approximation for the ripple magnitude).

**Reference:**
*   *Power Electronics Essentials & Applications* by L Umanand (Wiley India) discusses the Boost converter in Chapter 8.
*   *Power Electronics Circuits, Devices, and Applications* by Muhammad H Rashid (Pearson India) covers the Boost converter in Chapter 12.

---

## 3. Buck-Boost Converter (Inverting Converter)

**Circuit Configuration:**

The Buck-Boost converter uses a switch (S), a diode (D), an inductor (L), and an output capacitor (C). The inductor is in series with the input voltage. The switch and diode are arranged such that the output voltage is inverted relative to the input voltage.

**Basic Operation in CCM:**

*   **Interval 1: Switch ON ($0 \le t \le DT_s$)**
    *   The switch S is closed.
    *   The inductor is connected across the input voltage $V_{in}$.
    *   The inductor current ($i_L$) increases linearly.
    *   The diode is reverse-biased and does not conduct.
    *   The output capacitor and load are supplied by energy stored in the capacitor from the previous cycle.

*   **Interval 2: Switch OFF ($DT_s \le t \le T_s$)**
    *   The switch S is open.
    *   The inductor current tends to continue flowing. It now flows through the diode (forward-biased) to the output capacitor and the load.
    *   The inductor current decreases linearly.
    *   The diode conducts.
    *   Energy is transferred from the inductor to the output.

**Waveforms:**

*   **Switch Voltage ($v_S$):** 0 when ON, $V_{in}$ when OFF.
*   **Diode Voltage ($v_D$):** $-V_{in}$ when reverse-biased (OFF), $-V_o$ when conducting (ON) (assuming $V_o$ is negative).
*   **Inductor Voltage ($v_L$):** $V_{in}$ when ON, $V_{in} - V_o$ when OFF (since $V_o$ is negative, $V_{in} - V_o > V_{in}$).
*   **Inductor Current ($i_L$):** Rises linearly when ON, falls linearly when OFF. It is a triangular waveform.
*   **Capacitor Current ($i_C$):** The difference between inductor current and load current ($i_L - |I_o|$).
*   **Output Voltage ($v_o$):** A negative DC voltage. Ripple is superimposed.

**Derivation of Output Voltage ($V_o$):**

Applying the principle of volt-second balance to the inductor over one switching period:

$\int_{0}^{T_s} v_L dt = 0$

$\int_{0}^{DT_s} V_{in} dt + \int_{DT_s}^{T_s} (V_{in} - V_o) dt = 0$

$V_{in}DT_s + (V_{in} - V_o)(T_s - DT_s) = 0$

$V_{in}DT_s + V_{in}T_s - V_{in}DT_s - V_oT_s + V_oDT_s = 0$

$V_{in}T_s - V_oT_s + V_oDT_s = 0$

$V_{in}T_s = V_oT_s(1-D)$

**$V_o = -\frac{V_{in}D}{1-D}$**

The negative sign indicates the inversion of the output voltage. The magnitude of the output voltage is $|V_o| = \frac{V_{in}D}{1-D}$.

**Derivation of Inductor Current Ripple ($\Delta i_L$):**

During the ON time ($DT_s$), the inductor voltage is $v_L = V_{in}$.
Using $v_L = L \frac{di_L}{dt}$:

$\Delta i_L = \frac{v_L}{L} \Delta t = \frac{V_{in}}{L} (DT_s)$

**$\Delta i_L = \frac{V_{in}DT_s}{L} = \frac{V_{in}D}{f_sL}$**

For CCM, the minimum inductor current must be greater than zero. The average inductor current is $|I_o| / D$. So, $|I_o|/D > \Delta i_L/2$.

**Derivation of Output Voltage Ripple ($\Delta v_o$):**

The output capacitor is charged by the inductor current when the switch is OFF. The interval is $(1-D)T_s$. The AC component of the inductor current is responsible for the output voltage ripple.

The AC component of the inductor current is a triangular wave with peak-to-peak value $\Delta i_L$. The output voltage ripple can be approximated by considering the charge delivered to the capacitor by the AC component of the inductor current.

$\Delta v_o \approx \frac{\Delta i_L}{8Cf_s}$ (Approximation for ripple magnitude).

**Reference:**
*   *Power Electronics Essentials & Applications* by L Umanand (Wiley India) discusses the Buck-Boost converter in Chapter 9.
*   *Power Electronics Circuits, Devices, and Applications* by Muhammad H Rashid (Pearson India) covers the Buck-Boost converter in Chapter 13.

---

### Important Points to Remember:

*   **CCM is crucial for efficient operation.** It avoids the erratic behavior and increased losses associated with Discontinuous Conduction Mode (DCM).
*   **Duty Cycle (D) is the primary control parameter.** It directly determines the voltage conversion ratio for all three converters.
*   **Inductor value (L) and switching frequency ($f_s$) influence ripple.** Higher L or higher $f_s$ generally lead to lower current ripple.
*   **Capacitor value (C) influences output voltage ripple.** Higher C generally leads to lower output voltage ripple.
*   **Buck converter steps down voltage.** $V_o = D V_{in}$.
*   **Boost converter steps up voltage.** $V_o = V_{in} / (1-D)$.
*   **Buck-Boost converter steps up/down and inverts voltage.** $V_o = -V_{in} D / (1-D)$.
*   **Inductor current ripple is critical for CCM.** It must not reach zero. The minimum current is $I_{L,min} = I_{L,avg} - \Delta i_L/2$. For CCM, $I_{L,min} > 0$.
*   **Output voltage ripple is a key performance indicator.** It is affected by capacitor value, ESR, and the AC component of the inductor current.

---

### Practice Questions and Exercises:

**Question 1:**
A Buck converter is operating in CCM with $V_{in} = 24V$, $V_o = 12V$, $L = 100\mu H$, $f_s = 100kHz$.
a) Calculate the duty cycle $D$.
b) Calculate the peak-to-peak inductor current ripple $\Delta i_L$.
c) If the load resistance $R = 10\Omega$, calculate the average inductor current $I_L$.
d) Is the converter operating in CCM if the minimum inductor current is 0.5A?

**Question 2:**
A Boost converter has $V_{in} = 12V$. If the duty cycle $D = 0.6$, what is the output voltage $V_o$? If the inductor is $L = 50\mu H$ and the switching frequency is $f_s = 50kHz$, calculate the inductor current ripple $\Delta i_L$.

**Question 3:**
For a Buck-Boost converter, $V_{in} = 10V$ and $D = 0.5$.
a) Calculate the output voltage $V_o$.
b) If $L = 20\mu H$ and $f_s = 200kHz$, calculate the peak-to-peak inductor current ripple $\Delta i_L$.
c) What is the magnitude of the output voltage $|V_o|$?

**Question 4:**
Derive the expression for the output voltage of a Buck converter using energy balance principles for the inductor over one switching cycle.

---

### Answers to Practice Questions:

**Answer 1:**
a) $V_o = D V_{in} \Rightarrow 12V = D \times 24V \Rightarrow D = 0.5$
b) $\Delta i_L = \frac{V_{in}DT_s(1-D)}{L} = \frac{24V \times 0.5 \times (1/100kHz) \times (1-0.5)}{100\mu H} = \frac{24 \times 0.5 \times 10^{-5} \times 0.5}{100 \times 10^{-6}} = \frac{6 \times 10^{-6}}{100 \times 10^{-6}} = 0.06A = 60mA$.
c) $I_L = I_o = V_o/R = 12V / 10\Omega = 1.2A$.
d) $I_{L,min} = I_L - \Delta i_L/2 = 1.2A - 60mA/2 = 1.2A - 30mA = 1.17A$. Since $1.17A > 0.5A$, the converter is operating in CCM.

**Answer 2:**
a) $V_o = \frac{V_{in}}{1-D} = \frac{12V}{1-0.6} = \frac{12V}{0.4} = 30V$.
b) $\Delta i_L = \frac{V_{in}D}{f_sL} = \frac{12V \times 0.6}{50kHz \times 50\mu H} = \frac{7.2V}{50 \times 10^3 Hz \times 50 \times 10^{-6} H} = \frac{7.2V}{2.5} = 2.88A$.

**Answer 3:**
a) $V_o = -\frac{V_{in}D}{1-D} = -\frac{10V \times 0.5}{1-0.5} = -\frac{5V}{0.5} = -10V$.
b) $\Delta i_L = \frac{V_{in}D}{f_sL} = \frac{10V \times 0.5}{200kHz \times 20\mu H} = \frac{5V}{200 \times 10^3 Hz \times 20 \times 10^{-6} H} = \frac{5V}{4} = 1.25A$.
c) $|V_o| = 10V$.

**Answer 4:**
During the ON time ($DT_s$), the inductor voltage is $V_{in}$. The energy stored in the inductor increases by $\frac{1}{2}L I_{L,max}^2 - \frac{1}{2}L I_{L,min}^2$. The change in inductor current is $\Delta i_L = (V_{in}/L)DT_s$.
During the OFF time ($(1-D)T_s$), the inductor voltage is $V_{in}-V_o$. The change in inductor current is $\Delta i_L = ((V_{in}-V_o)/L)(1-D)T_s$.
Since the inductor current change must be the same in magnitude over a cycle, we equate the expressions for $\Delta i_L$:
$\frac{V_{in}}{L}DT_s = \frac{V_o-V_{in}}{L}(1-D)T_s$ (taking $V_o-V_{in}$ as the voltage across the inductor when switch is OFF and considering positive current flow to define $\Delta i_L$).
$V_{in}D = (V_o-V_{in})(1-D)$
$V_{in}D = V_o - V_oD - V_{in} + V_{in}D$
$0 = V_o - V_oD - V_{in}$
$V_{in} = V_o(1-D)$
$V_o = V_{in}/(1-D)$ --- **Wait, this is for Boost Converter. Let's re-evaluate for Buck.**

**Correction for Answer 4 (Buck Converter):**
During the ON time ($DT_s$), inductor voltage is $V_{in}-V_o$. $\Delta i_L = \frac{V_{in}-V_o}{L}DT_s$.
During the OFF time ($(1-D)T_s$), inductor voltage is $-V_o$. $\Delta i_L = \frac{-(-V_o)}{L}(1-D)T_s = \frac{V_o}{L}(1-D)T_s$.
Equating magnitudes of $\Delta i_L$:
$\frac{V_{in}-V_o}{L}DT_s = \frac{V_o}{L}(1-D)T_s$
$(V_{in}-V_o)D = V_o(1-D)$
$V_{in}D - V_oD = V_o - V_oD$
$V_{in}D = V_o$
**$V_o = D V_{in}$** (This is the correct expression for the Buck converter).

---

This set of notes covers the fundamental aspects of the Buck, Boost, and Buck-Boost converters in CCM, focusing on their output voltage and current ripple expressions, and aligns with the specified learning and course outcomes. Remember to refer to the textbooks for detailed circuit diagrams and more in-depth theoretical derivations.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
