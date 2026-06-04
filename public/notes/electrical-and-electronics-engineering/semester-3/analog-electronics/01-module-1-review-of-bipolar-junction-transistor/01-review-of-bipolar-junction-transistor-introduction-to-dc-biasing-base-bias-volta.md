---
title: "Review of Bipolar Junction Transistor - Introduction to DC Biasing – Base Bias – Voltage Divider Bias"
subject: "ANALOG ELECTRONICS"
module: "Module 1: Review of Bipolar Junction Transistor "
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200832b85456187f35b58"
status: "completed"
scrapedAt: "2026-05-23T16:10:48.552Z"
---
# ANALOG ELECTRONICS - Module 1: Review of Bipolar Junction Transistor

## Topic: Introduction to DC Biasing – Base Bias – Voltage Divider Bias

---

### **1. Introduction to Bipolar Junction Transistors (BJTs)**

This section provides a foundational review of BJT operation, essential for understanding biasing techniques.

**1.1. What is a BJT?**

*   **Definition:** A Bipolar Junction Transistor (BJT) is a three-terminal semiconductor device used for amplifying or switching electronic signals. It consists of three semiconductor layers: emitter, base, and collector.
*   **Types:**
    *   **NPN:** Two N-type regions separated by a P-type region. Current flows from collector to emitter.
    *   **PNP:** Two P-type regions separated by an N-type region. Current flows from emitter to collector.
*   **Structure:**
    *   **Emitter:** Heavily doped, to inject carriers into the base.
    *   **Base:** Lightly doped and very thin, to control the flow of carriers from emitter to collector.
    *   **Collector:** Moderately doped and larger area, to collect the majority of carriers from the emitter.
*   **Junctions:**
    *   **Emitter-Base (EB) Junction:** Normally forward-biased.
    *   **Collector-Base (CB) Junction:** Normally reverse-biased.

**1.2. BJT Operating Regions**

The behavior of a BJT is categorized into three regions of operation, determined by the biasing of its junctions:

*   **Active Region:** EB junction is forward-biased, and CB junction is reverse-biased. This is the region where amplification occurs.
*   **Cut-off Region:** Both EB and CB junctions are reverse-biased. The transistor acts like an open switch, with minimal current flow.
*   **Saturation Region:** Both EB and CB junctions are forward-biased. The transistor acts like a closed switch, with maximum current flow.

**1.3. BJT Current Relationships**

*   **Emitter Current ($I_E$)**: $I_E = I_C + I_B$
*   **Collector Current ($I_C$)**: In the active region, $I_C = \beta I_B$, where $\beta$ (beta) or $h_{FE}$ is the DC current gain.
*   **Relationship between Emitter and Base Current**: $I_E = (\beta + 1) I_B$
*   **Collector Current in terms of Emitter Current**: $I_C = \alpha I_E$, where $\alpha \approx \frac{\beta}{\beta+1}$.
*   **Important Relationship**: $\beta = \frac{\alpha}{1-\alpha}$

**Key Concepts & Definitions:**

*   **Forward Bias:** Applying a voltage across a PN junction such that the positive terminal is connected to the P-type material and the negative terminal to the N-type material, allowing current to flow easily.
*   **Reverse Bias:** Applying a voltage across a PN junction such that the negative terminal is connected to the P-type material and the positive terminal to the N-type material, opposing current flow.
*   **DC Current Gain ($\beta$ or $h_{FE}$):** The ratio of collector current to base current in the active region. It is a crucial parameter for BJT operation. Typical values range from 50 to 300.
*   **Alpha ($\alpha$):** The ratio of collector current to emitter current in the active region.

**Reference:**
*   **Paynter (Pearson Education):** Provides a clear introduction to BJT structure, operation, and regions. Focuses on understanding the physical principles.
*   **Boylestad & Nashelsky (Pearson Education):** Offers a detailed mathematical treatment of BJT characteristics and current equations.
*   **Neaman (McGraw Hill):** Explains the device physics and its behavior in different operating regions.

---

### **2. Introduction to DC Biasing**

DC biasing is the process of setting the DC operating point (Q-point) of a transistor. The Q-point is defined by the DC collector current ($I_{CQ}$) and the DC collector-emitter voltage ($V_{CEQ}$). Proper biasing ensures that the transistor operates in the active region, allowing it to amplify signals effectively without distortion.

**2.1. Why is DC Biasing Necessary?**

*   **Active Region Operation:** To keep the transistor in the active region for amplification.
*   **Stability:** To ensure that the Q-point remains relatively stable even with variations in temperature or transistor parameters (like $\beta$).
*   **Signal Swing:** To allow maximum undistorted output voltage and current swing for an AC input signal.

**2.2. The Q-point (Quiescent Point)**

*   **Definition:** The DC operating point of a transistor, determined by the DC voltages and currents when no AC signal is applied.
*   **Importance:**
    *   **Stability:** A stable Q-point is crucial for predictable amplifier performance.
    *   **Signal Swing:** The Q-point should be set in the middle of the active region to allow for maximum positive and negative excursions of the output signal without clipping.

**Key Concepts & Definitions:**

*   **DC Operating Point (Q-point):** The steady-state DC conditions (voltage and current) at the transistor terminals when no AC input signal is applied.
*   **Quiescent Collector Current ($I_{CQ}$):** The DC collector current at the Q-point.
*   **Quiescent Collector-Emitter Voltage ($V_{CEQ}$):** The DC collector-emitter voltage at the Q-point.
*   **Load Line:** A graphical representation of the relationship between $I_C$ and $V_{CE}$ for a given circuit. The Q-point lies on the DC load line.

**Reference:**
*   **Floyd (Pearson Education):** Emphasizes the practical aspects of biasing and the importance of the Q-point for stable amplification.
*   **Bell (Oxford Higher Education):** Discusses the concept of the load line and its role in determining the operating region.

---

### **3. Base Bias (Fixed Bias)**

Base bias is the simplest form of BJT biasing. It uses a single resistor ($R_B$) connected from the DC supply voltage ($V_{CC}$) to the base of the transistor.

**3.1. Circuit Diagram**

```
      VCC
       |
       RB
       |
       +------o Base (B)
       |      |
       |      C
      VCE     |
       |      E
       |      |
      GND     RC
       |
      GND
```

*   **Components:**
    *   $V_{CC}$: DC supply voltage.
    *   $R_B$: Base resistor.
    *   $R_C$: Collector resistor.
    *   BJT: The transistor.

**3.2. DC Analysis**

To determine the Q-point, we analyze the DC circuit:

*   **Base-Emitter Loop:**
    *   Apply Kirchhoff's Voltage Law (KVL) around the base-emitter loop:
        $V_{CC} - I_B R_B - V_{BE} = 0$
    *   Therefore, the base current is:
        $I_B = \frac{V_{CC} - V_{BE}}{R_B}$
    *   We assume $V_{BE} \approx 0.7 \text{ V}$ for silicon transistors and $V_{BE} \approx 0.3 \text{ V}$ for germanium transistors.

*   **Collector-Emitter Loop:**
    *   Apply KVL around the collector-emitter loop:
        $V_{CC} - I_C R_C - V_{CE} = 0$
    *   Therefore, the collector-emitter voltage is:
        $V_{CE} = V_{CC} - I_C R_C$

*   **Collector Current:**
    *   In the active region, $I_C = \beta I_B$.
    *   Substituting the expression for $I_B$:
        $I_C = \beta \left( \frac{V_{CC} - V_{BE}}{R_B} \right)$

**3.3. Q-point Calculation**

*   $I_{CQ} = \beta I_{BQ}$
*   $V_{CEQ} = V_{CC} - I_{CQ} R_C$

**3.4. Stability of Base Bias**

*   **Disadvantage:** Base bias is highly dependent on the transistor's $\beta$ value. Since $\beta$ can vary significantly with temperature and between different transistors of the same type, the Q-point is not very stable.
*   **Impact of $\beta$ variation:** If $\beta$ changes, $I_C$ will change proportionally, shifting the Q-point.
*   **Collector-Emitter Voltage Stability:** The $V_{CE}$ also depends on $I_C$, so it also becomes unstable.

**3.5. Example**

Consider a base-biased transistor circuit with $V_{CC} = 12 \text{ V}$, $R_B = 100 \text{ k}\Omega$, $R_C = 1 \text{ k}\Omega$, and a transistor with $\beta = 100$. Assume $V_{BE} = 0.7 \text{ V}$.

*   **Calculate $I_B$:**
    $I_B = \frac{12 \text{ V} - 0.7 \text{ V}}{100 \text{ k}\Omega} = \frac{11.3 \text{ V}}{100 \times 10^3 \Omega} = 0.113 \text{ mA}$

*   **Calculate $I_C$:**
    $I_C = \beta I_B = 100 \times 0.113 \text{ mA} = 11.3 \text{ mA}$

*   **Calculate $V_{CE}$:**
    $V_{CE} = V_{CC} - I_C R_C = 12 \text{ V} - (11.3 \text{ mA})(1 \text{ k}\Omega) = 12 \text{ V} - 11.3 \text{ V} = 0.7 \text{ V}$

*   **Q-point:** ($I_{CQ} = 11.3 \text{ mA}$, $V_{CEQ} = 0.7 \text{ V}$)

**Important Point to Remember:**
*   Base bias is simple but suffers from poor stability due to its reliance on the transistor's $\beta$.

**Reference:**
*   **Paynter (Pearson Education):** Introduces base bias as a fundamental biasing technique, highlighting its simplicity.
*   **Boylestad & Nashelsky (Pearson Education):** Provides detailed derivations for base bias calculations and discusses its limitations.
*   **Floyd (Pearson Education):** Uses practical examples to illustrate base bias circuit analysis.

---

### **4. Voltage Divider Bias**

Voltage divider bias is a widely used biasing technique that provides excellent Q-point stability. It uses two resistors ($R_1$ and $R_2$) to form a voltage divider network at the base, and a collector resistor ($R_C$). An emitter resistor ($R_E$) is often included for even greater stability.

**4.1. Circuit Diagram**

```
      VCC
       |
       R1
       |
       +------o Base (B)
       |      |
       R2     C
       |      |
      GND     RC
              |
              +------o Collector (C)
              |
              RE
              |
             GND
```

*   **Components:**
    *   $V_{CC}$: DC supply voltage.
    *   $R_1$, $R_2$: Voltage divider resistors.
    *   $R_C$: Collector resistor.
    *   $R_E$: Emitter resistor.
    *   BJT: The transistor.

**4.2. DC Analysis (with $R_E$)**

The analysis involves determining the equivalent circuit for the biasing network.

*   **Step 1: Thevenin Equivalent of the Base Circuit**
    *   The resistors $R_1$ and $R_2$ form a voltage divider. We can find the Thevenin equivalent voltage ($V_{TH}$) and Thevenin equivalent resistance ($R_{TH}$) as seen from the base.
    *   **Thevenin Voltage ($V_{TH}$):**
        $V_{TH} = V_{CC} \frac{R_2}{R_1 + R_2}$
    *   **Thevenin Resistance ($R_{TH}$):** This is the parallel combination of $R_1$ and $R_2$ (with $V_{CC}$ shorted).
        $R_{TH} = R_1 || R_2 = \frac{R_1 R_2}{R_1 + R_2}$

*   **Step 2: Analyze the Thevenin Equivalent Circuit**
    *   The circuit now looks like a simple series circuit with $V_{TH}$, $R_{TH}$, the base-emitter junction ($V_{BE}$), and the emitter resistor ($R_E$).
    *   Apply KVL around the base-emitter-emitter resistor loop:
        $V_{TH} - I_B R_{TH} - V_{BE} - I_E R_E = 0$

*   **Step 3: Express $I_E$ in terms of $I_B$**
    *   We know that $I_E = (\beta + 1) I_B$.

*   **Step 4: Substitute and Solve for $I_B$**
    *   Substitute $I_E$ into the KVL equation:
        $V_{TH} - I_B R_{TH} - V_{BE} - (\beta + 1) I_B R_E = 0$
    *   Rearrange to solve for $I_B$:
        $V_{TH} - V_{BE} = I_B (R_{TH} + (\beta + 1) R_E)$
        $I_B = \frac{V_{TH} - V_{BE}}{R_{TH} + (\beta + 1) R_E}$

*   **Step 5: Calculate $I_C$ and $V_{CE}$**
    *   **Collector Current ($I_C$):**
        $I_C = \beta I_B$
    *   **Emitter Current ($I_E$):**
        $I_E = I_C + I_B \approx I_C$ (since $\beta$ is usually large)
        Also, $I_E = \frac{V_{TH} - V_{BE}}{R_{TH}/\beta + R_E}$ (This form is also useful)
        A more direct calculation for $I_E$ using KVL:
        $V_{TH} = I_E R_E + V_{BE} + I_B R_{TH}$
        $V_{TH} = I_E R_E + V_{BE} + \frac{I_E}{\beta+1} R_{TH}$
        $V_{TH} - V_{BE} = I_E \left( R_E + \frac{R_{TH}}{\beta+1} \right)$
        $I_E = \frac{V_{TH} - V_{BE}}{R_E + \frac{R_{TH}}{\beta+1}}$
        Then $I_C \approx I_E$.

    *   **Collector-Emitter Voltage ($V_{CE}$):**
        Apply KVL around the collector-emitter loop:
        $V_{CC} - I_C R_C - V_{CE} - I_E R_E = 0$
        $V_{CE} = V_{CC} - I_C R_C - I_E R_E$
        Since $I_E \approx I_C$, a common approximation is:
        $V_{CE} \approx V_{CC} - I_C (R_C + R_E)$

**4.3. Stability of Voltage Divider Bias**

*   **Advantage:** Voltage divider bias offers superior stability compared to base bias.
*   **Reason:** The inclusion of $R_E$ and the voltage divider network ($R_1$, $R_2$) reduces the circuit's sensitivity to variations in $\beta$.
*   **Emitter Resistor's Role ($R_E$):** $R_E$ provides negative feedback. If $\beta$ increases, $I_C$ increases, which in turn increases $I_E$. This increased $I_E$ across $R_E$ causes $V_{BE}$ to decrease (due to $V_{BE} = V_{TH} - I_E R_E$), which counteracts the initial increase in $I_B$ and $I_C$. This negative feedback mechanism stabilizes the Q-point.

**4.4. Design Considerations for Stability**

*   **Rule of Thumb:** For good stability, the current flowing through the voltage divider ($I_{R1}$) should be at least 10 times the base current ($I_B$).
    *   $I_{R1} = \frac{V_{CC}}{R_1 + R_2}$ (approximately, assuming $R_2$ is connected to ground)
    *   $I_B = \frac{I_C}{\beta}$
    *   So, $\frac{V_{CC}}{R_1 + R_2} \ge 10 \frac{I_C}{\beta_{min}}$ (where $\beta_{min}$ is the minimum expected $\beta$)
    *   This implies that $R_1$ and $R_2$ should be chosen such that their parallel combination ($R_{TH}$) is much smaller than $\beta R_E$. A common guideline is $R_{TH} \le \frac{\beta_{min} R_E}{10}$.

**4.5. Example**

Consider a voltage divider biased transistor circuit with $V_{CC} = 15 \text{ V}$, $R_1 = 47 \text{ k}\Omega$, $R_2 = 10 \text{ k}\Omega$, $R_C = 1 \text{ k}\Omega$, $R_E = 1 \text{ k}\Omega$. Assume $\beta = 100$ and $V_{BE} = 0.7 \text{ V}$.

*   **Calculate $V_{TH}$:**
    $V_{TH} = 15 \text{ V} \times \frac{10 \text{ k}\Omega}{47 \text{ k}\Omega + 10 \text{ k}\Omega} = 15 \text{ V} \times \frac{10}{57} \approx 2.63 \text{ V}$

*   **Calculate $R_{TH}$:**
    $R_{TH} = \frac{47 \text{ k}\Omega \times 10 \text{ k}\Omega}{47 \text{ k}\Omega + 10 \text{ k}\Omega} = \frac{470}{57} \text{ k}\Omega \approx 8.25 \text{ k}\Omega$

*   **Calculate $I_E$:**
    $I_E = \frac{V_{TH} - V_{BE}}{R_E + \frac{R_{TH}}{\beta+1}} = \frac{2.63 \text{ V} - 0.7 \text{ V}}{1 \text{ k}\Omega + \frac{8.25 \text{ k}\Omega}{101}} = \frac{1.93 \text{ V}}{1 \text{ k}\Omega + 0.0817 \text{ k}\Omega} = \frac{1.93 \text{ V}}{1.0817 \text{ k}\Omega} \approx 1.78 \text{ mA}$

*   **Calculate $I_C$:**
    $I_C \approx I_E = 1.78 \text{ mA}$ (or $I_C = \beta I_B$. First, calculate $I_B = \frac{I_E}{\beta+1} = \frac{1.78 \text{ mA}}{101} \approx 0.0176 \text{ mA}$. Then $I_C = 100 \times 0.0176 \text{ mA} \approx 1.76 \text{ mA}$)

*   **Calculate $V_{CE}$:**
    $V_{CE} = V_{CC} - I_C R_C - I_E R_E = 15 \text{ V} - (1.78 \text{ mA})(1 \text{ k}\Omega) - (1.78 \text{ mA})(1 \text{ k}\Omega)$
    $V_{CE} = 15 \text{ V} - 1.78 \text{ V} - 1.78 \text{ V} = 11.44 \text{ V}$

*   **Q-point:** ($I_{CQ} \approx 1.78 \text{ mA}$, $V_{CEQ} \approx 11.44 \text{ V}$)

**Important Points to Remember:**
*   Voltage divider bias provides excellent stability due to the voltage divider network and the emitter resistor ($R_E$).
*   $R_E$ provides negative feedback, stabilizing the Q-point against variations in $\beta$.
*   Thevenin equivalent analysis simplifies the calculation of the biasing circuit.

**Reference:**
*   **Boylestad & Nashelsky (Pearson Education):** Provides a thorough analysis of voltage divider bias, including the stability factor and design considerations.
*   **Neaman (McGraw Hill):** Explains the impact of $R_E$ on stability and the process of designing for a specific Q-point.
*   **Floyd (Pearson Education):** Offers practical design steps and examples for voltage divider bias circuits.
*   **Gayaward (PHI Learning):** Discusses voltage divider bias in the context of general amplifier design.

---

### **5. Practice Questions and Exercises**

**Question 1 (Base Bias):**
A BJT with $\beta = 50$ is used in a base bias circuit with $V_{CC} = 10 \text{ V}$, $R_B = 200 \text{ k}\Omega$, and $R_C = 500 \Omega$. Assume $V_{BE} = 0.7 \text{ V}$. Calculate the DC collector current ($I_C$) and collector-emitter voltage ($V_{CE}$).

**Answer 1:**
*   $I_B = \frac{V_{CC} - V_{BE}}{R_B} = \frac{10 \text{ V} - 0.7 \text{ V}}{200 \text{ k}\Omega} = \frac{9.3 \text{ V}}{200 \times 10^3 \Omega} = 0.0465 \text{ mA}$
*   $I_C = \beta I_B = 50 \times 0.0465 \text{ mA} = 2.325 \text{ mA}$
*   $V_{CE} = V_{CC} - I_C R_C = 10 \text{ V} - (2.325 \text{ mA})(500 \Omega) = 10 \text{ V} - 1.1625 \text{ V} = 8.8375 \text{ V}$
*   **Q-point:** ($I_{CQ} = 2.325 \text{ mA}$, $V_{CEQ} = 8.8375 \text{ V}$)

---

**Question 2 (Voltage Divider Bias):**
For the following voltage divider bias circuit, determine the Q-point ($I_C$ and $V_{CE}$). Given: $V_{CC} = 12 \text{ V}$, $R_1 = 33 \text{ k}\Omega$, $R_2 = 6.8 \text{ k}\Omega$, $R_C = 1 \text{ k}\Omega$, $R_E = 470 \Omega$, $\beta = 150$, $V_{BE} = 0.7 \text{ V}$.

**Answer 2:**
*   **Thevenin Voltage ($V_{TH}$):**
    $V_{TH} = 12 \text{ V} \times \frac{6.8 \text{ k}\Omega}{33 \text{ k}\Omega + 6.8 \text{ k}\Omega} = 12 \text{ V} \times \frac{6.8}{39.8} \approx 2.05 \text{ V}$
*   **Thevenin Resistance ($R_{TH}$):**
    $R_{TH} = \frac{33 \text{ k}\Omega \times 6.8 \text{ k}\Omega}{33 \text{ k}\Omega + 6.8 \text{ k}\Omega} = \frac{224.4}{39.8} \text{ k}\Omega \approx 5.64 \text{ k}\Omega$
*   **Emitter Current ($I_E$):**
    $I_E = \frac{V_{TH} - V_{BE}}{R_E + \frac{R_{TH}}{\beta+1}} = \frac{2.05 \text{ V} - 0.7 \text{ V}}{470 \Omega + \frac{5640 \Omega}{151}} = \frac{1.35 \text{ V}}{470 \Omega + 37.35 \Omega} = \frac{1.35 \text{ V}}{507.35 \Omega} \approx 2.66 \text{ mA}$
*   **Collector Current ($I_C$):**
    $I_C \approx I_E = 2.66 \text{ mA}$ (or $I_C = \beta I_B = 150 \times \frac{2.66 \text{ mA}}{151} \approx 2.65 \text{ mA}$)
*   **Collector-Emitter Voltage ($V_{CE}$):**
    $V_{CE} = V_{CC} - I_C R_C - I_E R_E = 12 \text{ V} - (2.66 \text{ mA})(1 \text{ k}\Omega) - (2.66 \text{ mA})(470 \Omega)$
    $V_{CE} = 12 \text{ V} - 2.66 \text{ V} - 1.25 \text{ V} = 8.09 \text{ V}$
*   **Q-point:** ($I_{CQ} \approx 2.66 \text{ mA}$, $V_{CEQ} \approx 8.09 \text{ V}$)

---

### **6. Alignment with Course Outcomes**

*   **CO1: Design BJT and FET amplifier circuits (Knowledge Level: K3)**
    *   Understanding DC biasing techniques (Base Bias, Voltage Divider Bias) is fundamental for designing amplifier circuits. This module provides the foundational knowledge of setting the DC operating point, which is crucial for amplifier operation. The calculations and analysis performed here directly support the ability to design biased circuits.

---
