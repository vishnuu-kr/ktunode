---
title: "DC – DC Switch Mode Converters:  Buck, Boost and Buck-boost DC-DC converters."
subject: "POWER ELECTRONICS"
module: "Module 3: DC – DC Switch Mode Converters:  Buck, Boost and Buck"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe5fe"
status: "completed"
scrapedAt: "2026-05-23T17:52:12.691Z"
---
# Module 3: DC-DC Switch Mode Converters: Buck, Boost, and Buck-Boost Converters

## Introduction to DC-DC Converters

DC-DC converters are essential power electronic circuits that efficiently convert one DC voltage level to another. They are widely used in applications such as power supplies for electronic equipment, battery charging systems, electric vehicles, and renewable energy integration. Switch Mode Converters (SMCs) are the most common type of DC-DC converters due to their high efficiency, achieved by switching power semiconductor devices (like MOSFETs, IGBTs) on and off at high frequencies.

**Key Concepts:**

*   **Switching Frequency ($f_s$):** The rate at which the power semiconductor switch is turned on and off.
*   **Duty Cycle ($D$):** The fraction of time the switch is ON during one switching period. $D = \frac{t_{on}}{T_s}$, where $T_s = \frac{1}{f_s}$ is the switching period.
*   **Inductor:** Stores energy in its magnetic field when current flows through it and releases energy when the current decreases.
*   **Capacitor:** Stores energy in its electric field when voltage is applied across it and releases energy when the voltage decreases.
*   **Diode:** Acts as a one-way switch, allowing current to flow in only one direction.
*   **Switch (e.g., MOSFET, IGBT):** A controlled semiconductor device used to switch power in the converter.

**Textbook References:**
*   Umanand, L. (2014). *Power Electronics Essentials & Applications*. Wiley India. (Chapter 5: DC-DC Converters)
*   Rashid, M. H. (2011). *Power Electronics Circuits, Devices, and Applications*. Pearson India. (Chapter 11: DC-DC Converters)

---

## 3.1 Buck Converter (Step-Down Converter)

A Buck converter is a DC-DC converter that produces an output voltage ($V_o$) that is lower than the input voltage ($V_{in}$).

**Circuit Diagram:**

```
      Vin ---+-----> Switch (S) ----+----> Inductor (L) ----> Load (R) ----> GND
             |                       |                                     |
             |                       |                                   Capacitor (C)
             |                       |                                     |
             +------> Diode (D) ------+-------------------------------------+
```

**Key Components:**

*   **Switch (S):** Typically a MOSFET or IGBT.
*   **Diode (D):** A free-wheeling diode.
*   **Inductor (L):** Smooths the output current.
*   **Capacitor (C):** Smooths the output voltage.
*   **Load (R):** The device drawing power from the output.

**Operating Principle (Continuous Conduction Mode - CCM):**

The operation is analyzed in two modes, determined by the state of the switch (S).

**Mode 1: Switch ON ($0 < t \le DT_s$)**

1.  The switch (S) is closed.
2.  The input voltage $V_{in}$ is applied across the inductor.
3.  The inductor current ($i_L$) increases linearly.
4.  Energy is stored in the inductor.
5.  The diode (D) is reverse-biased and does not conduct.
6.  The capacitor charges the load.

    *   **Inductor Voltage:** $v_L = L \frac{di_L}{dt} = V_{in} - V_o$
    *   **Inductor Current Change:** $\Delta i_L = \frac{V_{in} - V_o}{L} DT_s$

**Mode 2: Switch OFF ($DT_s < t \le T_s$)**

1.  The switch (S) is open.
2.  The inductor tries to maintain the current flow by reversing its voltage polarity.
3.  The diode (D) becomes forward-biased, providing a path for the inductor current to flow.
4.  The inductor current ($i_L$) decreases linearly.
5.  Energy is released from the inductor to the load and the capacitor.

    *   **Inductor Voltage:** $v_L = L \frac{di_L}{dt} = -V_o$ (assuming the load voltage is constant for this analysis)
    *   **Inductor Current Change:** $\Delta i_L = \frac{-V_o}{L} (1-D)T_s$

**Steady-State Analysis:**

For steady-state operation, the change in inductor current over one switching period must be zero:
$\Delta i_L(\text{on}) + \Delta i_L(\text{off}) = 0$

$\frac{V_{in} - V_o}{L} DT_s + \frac{-V_o}{L} (1-D)T_s = 0$

Assuming $V_o$ is constant (due to the large output capacitor):
$(V_{in} - V_o)D - V_o(1-D) = 0$
$V_{in}D - V_oD - V_o + V_oD = 0$
$V_{in}D - V_o = 0$

$$V_o = D \cdot V_{in}$$

**Output Voltage:** $V_o = D \cdot V_{in}$

This equation shows that the output voltage is a fraction ($D$) of the input voltage, hence the name "step-down" converter.

**Efficiency:**

Ideal efficiency is 100%. In practice, losses occur due to:
*   Switching losses in S and D.
*   Conduction losses in S, D, and L.
*   Core losses in L.
*   Capacitance losses in C.

**Current Ripple:**

The current ripple in the inductor is $\Delta i_L = \frac{(V_{in} - V_o)DT_s}{L}$.
Substituting $V_o = DV_{in}$: $\Delta i_L = \frac{(V_{in} - DV_{in})DT_s}{L} = \frac{V_{in}D(1-D)T_s}{L}$.

**Important Points to Remember (Buck Converter):**

*   Output voltage $V_o$ is always less than input voltage $V_{in}$ ($0 \le D \le 1$).
*   The switch and diode are in series with the inductor and load.
*   The inductor current is always positive in CCM.
*   The output voltage is always positive and smaller than the input voltage.
*   The output voltage ripple is determined by the output capacitor and the load current.

**Course Outcome Alignment:**
*   **CO3:** Analyze different power converter circuits (Knowledge Level: K3) - This section provides the analysis of the Buck converter.

**Example:**
A Buck converter has $V_{in} = 24V$ and $D = 0.5$. Calculate the output voltage.
$V_o = D \cdot V_{in} = 0.5 \cdot 24V = 12V$.

---

## 3.2 Boost Converter (Step-Up Converter)

A Boost converter is a DC-DC converter that produces an output voltage ($V_o$) that is higher than the input voltage ($V_{in}$).

**Circuit Diagram:**

```
      Vin ---+-----> Inductor (L) ----+----> Switch (S) ----> Load (R) ----> GND
             |                       |                     |
             |                       |                   Capacitor (C)
             |                       |                     |
             +------> Diode (D) ------+---------------------+------> Output (+Vo)
```

**Key Components:**

*   **Inductor (L):** Stores energy when the switch is ON.
*   **Switch (S):** Typically a MOSFET or IGBT.
*   **Diode (D):** Allows energy transfer to the output.
*   **Capacitor (C):** Smooths the output voltage.
*   **Load (R):** The device drawing power from the output.

**Operating Principle (Continuous Conduction Mode - CCM):**

**Mode 1: Switch ON ($0 < t \le DT_s$)**

1.  The switch (S) is closed.
2.  The input voltage $V_{in}$ is applied across the inductor.
3.  The inductor current ($i_L$) increases linearly.
4.  Energy is stored in the inductor.
5.  The diode (D) is reverse-biased and does not conduct.
6.  The capacitor supplies the load current.

    *   **Inductor Voltage:** $v_L = L \frac{di_L}{dt} = V_{in}$
    *   **Inductor Current Change:** $\Delta i_L = \frac{V_{in}}{L} DT_s$

**Mode 2: Switch OFF ($DT_s < t \le T_s$)**

1.  The switch (S) is open.
2.  The inductor tries to maintain the current flow by reversing its voltage polarity.
3.  The diode (D) becomes forward-biased, providing a path for the inductor current to flow to the output.
4.  The inductor current ($i_L$) decreases linearly.
5.  Energy is transferred from the inductor to the capacitor and the load. The voltage across the inductor is now $V_{in} - V_o$ (or $V_L = V_{in} - V_o$ if considering series loop, but when analyzing current change, we look at the voltage across the inductor $V_L = -V_o + V_{in}$ which forces the current to decrease). More simply, the voltage across the inductor during this interval is $V_{in} - V_o$ but to simplify the current change analysis, the voltage applied across L is $V_{in} - V_o$. Or even more accurately, the voltage across L is $V_{in} - V_o$. However, the current change is calculated based on the voltage that drives the current, which is $V_{in} - V_o$. Wait, let's re-evaluate this. When S is OFF, the inductor current flows through D and the load. The voltage across the inductor is $V_L = V_{in} - V_o$ in series connection. But this is incorrect. The inductor is in series with Vin and the switch. When S is OFF, the inductor current flows through D to the load. The voltage across the inductor becomes $V_{in} - V_o$. Ah, that's incorrect. Let's consider the loop: $V_{in}$ source, inductor $L$, diode $D$, capacitor $C$, load $R$, and back to ground which is connected to the other side of $V_{in}$. When S is OFF, the inductor is connected in series with $V_{in}$ and then to the load via $D$ and $C$. The voltage across $L$ is $V_L = V_{in} - V_o$. This is still not quite right in terms of how it drives current *down*.

    Let's correct the voltage across the inductor during the OFF state for current decrease. When S is OFF, the inductor is connected to the input $V_{in}$ and then to the output through $D$. The current flowing out of the inductor must go through the load. The voltage across the inductor $v_L$ will be $V_{in} - V_o$ (series connection). This implies the current will decrease if $V_{in} < V_o$.

    Let's analyze the voltage across the inductor ($v_L$) during Mode 2:
    The inductor is now connected in series with the input voltage source and the output voltage source (effectively). The voltage across the inductor is $V_{in} - V_o$ to drive the current from its peak value down. Wait, this is still the same and doesn't make sense for current *decrease*.

    **Correction:** When the switch S is OFF, the inductor's magnetic field collapses, forcing the current to continue flowing. This current goes through the diode D to the output capacitor C and load R. The voltage across the inductor is the difference between the input voltage and the output voltage in a loop sense. However, for the purpose of analyzing the change in inductor current ($di_L/dt$), we consider the voltage that *drives* the current.
    During Mode 2 (Switch OFF), the inductor is connected in series with the input source ($V_{in}$) and the output circuit (diode, capacitor, load). The voltage across the inductor is $v_L = V_{in} - V_o$ IF the diode were not there or was reversed.
    With the diode conducting, the loop is $V_{in}$ -> L -> D -> C -> R -> GND. The voltage across the inductor during this period is $v_L = V_{in} - V_o$ where $V_o$ is the output voltage.

    Let's re-evaluate the current direction and voltage.
    When S is ON: Current flows from $V_{in}$ through L. $v_L = V_{in}$. Current increases.
    When S is OFF: Current flows from L through D to the load. The inductor's voltage polarity reverses. The circuit is now $V_{in}$ in series with L, and then D to the output. The voltage across the inductor is $v_L = V_{in} - V_o$. Wait, if $V_o > V_{in}$, and $v_L = V_{in} - V_o$, then $v_L$ is negative, meaning current decreases. This seems correct.

    *   **Inductor Voltage:** $v_L = L \frac{di_L}{dt} = V_{in} - V_o$
    *   **Inductor Current Change:** $\Delta i_L = \frac{V_{in} - V_o}{L} (1-D)T_s$

**Steady-State Analysis:**

For steady-state operation, the change in inductor current over one switching period must be zero:
$\Delta i_L(\text{on}) + \Delta i_L(\text{off}) = 0$

$\frac{V_{in}}{L} DT_s + \frac{V_{in} - V_o}{L} (1-D)T_s = 0$

Assuming $V_o$ is constant:
$V_{in}D + (V_{in} - V_o)(1-D) = 0$
$V_{in}D + V_{in} - V_{in}D - V_o(1-D) = 0$
$V_{in} - V_o(1-D) = 0$
$V_{in} = V_o(1-D)$

$$V_o = \frac{V_{in}}{1-D}$$

This equation shows that the output voltage is higher than the input voltage when $D < 1$, hence the name "step-up" converter.

**Efficiency:**

Similar to the Buck converter, ideal efficiency is 100%, with practical losses reducing it.

**Current Ripple:**

The current ripple in the inductor is $\Delta i_L = \frac{V_{in}DT_s}{L}$.

**Important Points to Remember (Boost Converter):**

*   Output voltage $V_o$ is always greater than input voltage $V_{in}$ ($D < 1 \implies 1-D < 1 \implies \frac{1}{1-D} > 1$).
*   The switch and inductor are in series with the input.
*   The diode connects the inductor to the output when the switch is OFF.
*   The output voltage is always positive and greater than the input voltage.
*   The output voltage can become very high as $D$ approaches 1, leading to large voltage stresses on the switch and diode.

**Course Outcome Alignment:**
*   **CO3:** Analyze different power converter circuits (Knowledge Level: K3) - This section provides the analysis of the Boost converter.

**Example:**
A Boost converter has $V_{in} = 12V$ and $D = 0.7$. Calculate the output voltage.
$V_o = \frac{V_{in}}{1-D} = \frac{12V}{1-0.7} = \frac{12V}{0.3} = 40V$.

---

## 3.3 Buck-Boost Converter (Inverting Converter)

A Buck-Boost converter produces an output voltage ($V_o$) that is either lower (buck) or higher (boost) than the input voltage ($V_{in}$), and it is also **inverted** (negative polarity).

**Circuit Diagram:**

```
      Vin ---+-----> Switch (S) ----+----> Diode (D) ----> Load (R) ----> GND
             |                       |                     |
             |                       |                   Capacitor (C)
             |                       |                     |
             +------> Inductor (L) --+---------------------+------> Output (-Vo)
```

**Key Components:**

*   **Switch (S):** Typically a MOSFET or IGBT.
*   **Inductor (L):** Stores energy when the switch is ON.
*   **Diode (D):** Transfers energy to the output.
*   **Capacitor (C):** Smooths the output voltage.
*   **Load (R):** The device drawing power from the output.

**Operating Principle (Continuous Conduction Mode - CCM):**

**Mode 1: Switch ON ($0 < t \le DT_s$)**

1.  The switch (S) is closed.
2.  The input voltage $V_{in}$ is applied across the inductor.
3.  The inductor current ($i_L$) increases linearly.
4.  Energy is stored in the inductor.
5.  The diode (D) is reverse-biased and does not conduct.
6.  The capacitor supplies the load current.

    *   **Inductor Voltage:** $v_L = L \frac{di_L}{dt} = V_{in}$
    *   **Inductor Current Change:** $\Delta i_L = \frac{V_{in}}{L} DT_s$

**Mode 2: Switch OFF ($DT_s < t \le T_s$)**

1.  The switch (S) is open.
2.  The inductor tries to maintain the current flow by reversing its voltage polarity.
3.  The diode (D) becomes forward-biased, providing a path for the inductor current to flow to the output.
4.  The inductor current ($i_L$) decreases linearly.
5.  Energy is transferred from the inductor to the capacitor and the load. The voltage across the inductor is $v_L = -V_o$ (where $V_o$ is the magnitude of the output voltage, so the actual voltage is $V_o$ but it's negative). The actual voltage across the inductor is $v_L = V_{in} - V_o'$ where $V_o'$ is the negative output voltage. So $V_{in} - V_o' = L di_L/dt$. Since $V_o'$ is negative, $V_{in} - (-|V_o|) = V_{in} + |V_o|$. This is not correct.

    **Correction:** When S is OFF, the inductor current continues to flow. It now goes through D, C, and R. The voltage across the inductor is such that it drives this current. The loop is essentially $V_{in}$ source connected to L and S. When S is OFF, the energy from L is delivered to the output. The voltage across the inductor is related to the output voltage.

    Let's consider the loop where the inductor voltage is applied: When S is OFF, the voltage across the inductor is $V_L = -V_o'$ where $V_o'$ is the negative output voltage. More precisely, the voltage across the inductor is the voltage that forces the current to decrease.
    The actual voltage across the inductor is the source voltage minus the voltage dropped across other components in the loop. When S is OFF, the loop is $V_{in}$, L, D, C, R. The voltage across the inductor is $V_L = V_{in} - V_o'$ (where $V_o'$ is the negative output voltage). So $V_L = V_{in} - (-|V_o|) = V_{in} + |V_o|$. This is still confusing.

    Let's re-examine the polarity of the inductor voltage. During Mode 1 (S ON), $v_L = V_{in}$. The current increases.
    During Mode 2 (S OFF), the inductor's current direction must be maintained. The current flows from the inductor's positive terminal to its negative terminal, through the diode to the output. So, the voltage across the inductor is $V_L = -|V_o|$. This is the voltage that causes the current to decrease.

    *   **Inductor Voltage:** $v_L = L \frac{di_L}{dt} = -|V_o|$ (where $|V_o|$ is the magnitude of the output voltage)
    *   **Inductor Current Change:** $\Delta i_L = \frac{-|V_o|}{L} (1-D)T_s$

**Steady-State Analysis:**

For steady-state operation, the change in inductor current over one switching period must be zero:
$\Delta i_L(\text{on}) + \Delta i_L(\text{off}) = 0$

$\frac{V_{in}}{L} DT_s + \frac{-|V_o|}{L} (1-D)T_s = 0$

Assuming $|V_o|$ is constant:
$V_{in}D - |V_o|(1-D) = 0$
$V_{in}D = |V_o|(1-D)$

$$|V_o| = \frac{D}{1-D} V_{in}$$

Since the output voltage is inverted, $V_o = - \frac{D}{1-D} V_{in}$.

This equation shows that the output voltage magnitude is related to the input voltage by a factor $\frac{D}{1-D}$.

**Efficiency:**

Similar to other converters, efficiency is affected by various losses.

**Current Ripple:**

The current ripple in the inductor is $\Delta i_L = \frac{V_{in}DT_s}{L}$.

**Important Points to Remember (Buck-Boost Converter):**

*   Output voltage is inverted (negative).
*   The output voltage magnitude can be less than, equal to, or greater than the input voltage, depending on the duty cycle $D$.
*   The inductor is directly connected to the input voltage when the switch is ON.
*   The inductor is connected to the output when the switch is OFF.
*   High voltage stress on the switch when the output voltage is high.

**Course Outcome Alignment:**
*   **CO3:** Analyze different power converter circuits (Knowledge Level: K3) - This section provides the analysis of the Buck-Boost converter.

**Example:**
A Buck-Boost converter has $V_{in} = 12V$ and $D = 0.6$. Calculate the output voltage.
$|V_o| = \frac{D}{1-D} V_{in} = \frac{0.6}{1-0.6} \cdot 12V = \frac{0.6}{0.4} \cdot 12V = 1.5 \cdot 12V = 18V$.
So, the output voltage is $V_o = -18V$.

---

## 3.4 Comparison of Buck, Boost, and Buck-Boost Converters

| Feature           | Buck Converter                 | Boost Converter                | Buck-Boost Converter           |
| :---------------- | :----------------------------- | :----------------------------- | :----------------------------- |
| **Primary Function** | Step-down voltage              | Step-up voltage                | Inverted step-up/down voltage  |
| **Output Voltage** | $V_o = D \cdot V_{in}$         | $V_o = \frac{V_{in}}{1-D}$     | $V_o = -\frac{D}{1-D} V_{in}$ |
| **Voltage Polarity** | Same as input                  | Same as input                  | Inverted (negative)            |
| **Inductor Current** | Ripple, always positive (CCM)  | Ripple, always positive (CCM)  | Ripple, always positive (CCM)  |
| **Switch Connection**| Series with load               | Series with input              | Series with input              |
| **Diode Connection** | Parallel to switch (backwards) | Parallel to switch (backwards) | Parallel to switch (backwards) |
| **Voltage Stress (Switch/Diode)** | $V_{in}$                       | $V_o$ (high when D approaches 1) | $V_{in} + |V_o|$ (can be high) |
| **Input Current** | Pulsating                      | Smoother                       | Pulsating                      |
| **Output Current** | Smoother                       | Pulsating                      | Smoother                       |

**Textbook References:**
*   Rashid, M. H. (2011). *Power Electronics Circuits, Devices, and Applications*. Pearson India. (Chapter 11, Section 11.7: Comparison of DC-DC Converter Topologies)

---

## 3.5 Design Considerations for DC-DC Converters

When designing these converters, several factors need to be considered:

1.  **Component Selection:**
    *   **Switch (MOSFET/IGBT):** Must withstand the voltage stress and handle the peak current. Low on-resistance ($R_{ds(on)}$) for conduction losses, fast switching for reduced switching losses.
    *   **Diode:** Needs to be a fast-recovery diode (Schottky diode is often preferred for lower forward voltage drop and faster switching). Must withstand reverse voltage and handle peak current.
    *   **Inductor (L):** Determined by the desired current ripple ($\Delta i_L$) and switching frequency ($f_s$). The inductor must not saturate under peak current.
        *   **Buck:** $L \ge \frac{(V_{in} - V_o)DT_s}{ \Delta i_L}$ or $L \ge \frac{V_o(1-D)T_s}{\Delta i_L}$
        *   **Boost:** $L \ge \frac{V_{in}DT_s}{\Delta i_L}$
        *   **Buck-Boost:** $L \ge \frac{V_{in}DT_s}{\Delta i_L}$
    *   **Capacitor (C):** Determined by the desired output voltage ripple ($\Delta V_o$) and the load current. Equivalent series resistance (ESR) is also important for voltage ripple.
        *   **Buck:** $C \ge \frac{\Delta i_L}{8 f_s \Delta V_o}$
        *   **Boost:** $C \ge \frac{I_o (1-D)}{f_s \Delta V_o}$ (approximate, considering capacitor charge current)
        *   **Buck-Boost:** $C \ge \frac{I_o}{f_s \Delta V_o}$ (approximate, considering capacitor charge current)

2.  **Switching Frequency ($f_s$):**
    *   Higher frequency allows for smaller passive components (L and C) but increases switching losses.
    *   Lower frequency reduces switching losses but requires larger components.
    *   Typical frequencies range from tens of kHz to MHz.

3.  **Duty Cycle Range:**
    *   The duty cycle determines the voltage conversion ratio.
    *   For Buck and Boost, $D$ is typically limited to avoid excessive stress or inefficient operation. For Boost, $D \to 1$ leads to very high output voltage. For Buck-Boost, $D \to 1$ leads to very high output voltage magnitude.

4.  **Continuous Conduction Mode (CCM) vs. Discontinuous Conduction Mode (DCM):**
    *   **CCM:** Inductor current never drops to zero. Provides smoother input/output current. Preferred for higher power applications.
    *   **DCM:** Inductor current drops to zero during part of the switching cycle. Can lead to higher efficiency at light loads but with a more complex analysis and potentially higher voltage/current stresses. The analysis presented above is for CCM.

**Textbook References:**
*   Umanand, L. (2014). *Power Electronics Essentials & Applications*. Wiley India. (Chapter 5: DC-DC Converters - Design Aspects)
*   Mohan, N., Undeland, T. M., & Robbins, W. P. (2003). *Power Electronics Converters, Applications, and Design*. Wiley India. (Chapter 8: DC-DC Converters - Design Considerations)

---

## 3.6 Course Outcomes Mapping

*   **CO1: Outline the operation of power semiconductor devices and its characteristics. (Knowledge Level: K2)**
    *   While this module focuses on converters, understanding the operation of the switches (MOSFETs, IGBTs) and diodes is crucial for their application in these converters. The "ON" and "OFF" states of these devices are fundamental to the converter's operation. (Implicitly covered).

*   **CO3: Analyze different power converter circuits (Knowledge Level: K3)**
    *   This entire module (Buck, Boost, Buck-Boost) directly addresses this outcome by providing detailed operational analysis, steady-state equations, and key characteristics of these converter circuits.

---

## Practice Questions and Answers

**Question 1:**
A Buck converter is operating with an input voltage of $V_{in} = 15V$ and a duty cycle of $D = 0.6$. What is the output voltage?
**Answer:**
$V_o = D \cdot V_{in} = 0.6 \cdot 15V = 9V$.

**Question 2:**
A Boost converter is required to step up a voltage of $V_{in} = 5V$ to $V_o = 20V$. What is the duty cycle required?
**Answer:**
We use the formula $V_o = \frac{V_{in}}{1-D}$.
$20V = \frac{5V}{1-D}$
$1-D = \frac{5V}{20V} = 0.25$
$D = 1 - 0.25 = 0.75$.

**Question 3:**
A Buck-Boost converter is supplied with $V_{in} = 10V$. If the duty cycle is $D = 0.5$, what is the output voltage?
**Answer:**
We use the formula $V_o = -\frac{D}{1-D} V_{in}$.
$V_o = -\frac{0.5}{1-0.5} \cdot 10V = -\frac{0.5}{0.5} \cdot 10V = -1 \cdot 10V = -10V$.

**Question 4:**
For a Buck converter, if the input voltage is $V_{in}$ and the duty cycle is $D$, what is the maximum voltage that the switching element (transistor) needs to block when it is OFF?
**Answer:**
When the switch is OFF, it is in series with the input voltage source and the load (via the diode). The voltage across the switch is equal to the input voltage $V_{in}$.

**Question 5:**
In a Boost converter, what happens to the output voltage as the duty cycle $D$ approaches 1?
**Answer:**
As $D \to 1$, the denominator $(1-D) \to 0$. Therefore, the output voltage $V_o = \frac{V_{in}}{1-D}$ approaches infinity. This highlights the significant voltage stress on the switching element and diode.

**Question 6:**
Which of the following converters requires an inductor that is directly connected to the input voltage source for energy storage during the ON state?
a) Buck Converter
b) Boost Converter
c) Buck-Boost Converter
d) All of the above
**Answer:**
b) Boost Converter and c) Buck-Boost Converter.
In the Buck converter, the inductor is in series with the load. In the Boost and Buck-Boost converters, the inductor is directly connected in series with the input voltage source when the switch is ON, for charging.

---

## Summary and Key Takeaways

*   **Buck Converter:** Steps down DC voltage. $V_o = D \cdot V_{in}$. Output voltage is positive.
*   **Boost Converter:** Steps up DC voltage. $V_o = \frac{V_{in}}{1-D}$. Output voltage is positive.
*   **Buck-Boost Converter:** Inverts and steps up or down DC voltage. $V_o = -\frac{D}{1-D} V_{in}$. Output voltage is negative.
*   The duty cycle ($D$) is the primary control parameter for voltage regulation in these converters.
*   Inductors and capacitors are crucial for energy storage and filtering, affecting ripple and efficiency.
*   Component selection (switch, diode, L, C) depends on input/output voltage, current, switching frequency, and desired ripple.
*   High switching frequencies allow smaller passive components but increase switching losses.
*   Understanding the voltage and current stresses on the switching elements and diodes is vital for reliable design.

This concludes Module 3 on DC-DC Switch Mode Converters: Buck, Boost, and Buck-Boost converters.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
