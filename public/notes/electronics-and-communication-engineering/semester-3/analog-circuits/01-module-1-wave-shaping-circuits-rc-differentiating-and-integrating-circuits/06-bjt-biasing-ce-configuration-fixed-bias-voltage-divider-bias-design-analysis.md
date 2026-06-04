---
title: "BJT biasing (CE configuration)– fixed bias & voltage divider bias (Design & analysis)"
subject: "ANALOG CIRCUITS"
module: "Module 1: Wave Shaping Circuits: RC differentiating and integrating circuits"
branch: "Electronics and Communication Engineering"
semester: 3
topicId: "68a5c45db09ce205780fe2e3"
status: "completed"
scrapedAt: "2026-05-23T17:44:07.825Z"
---
# ANALOG CIRCUITS: Module 1: Wave Shaping Circuits: RC differentiating and integrating circuits
## Topic: BJT Biasing (CE Configuration) – Fixed Bias & Voltage Divider Bias (Design & Analysis)

---

### **Introduction to BJT Biasing**

Biasing a Bipolar Junction Transistor (BJT) is the process of establishing DC operating conditions for the transistor. This ensures that the transistor operates in its active region, where it can amplify signals. Proper biasing is crucial for the stable and predictable performance of amplifier circuits. The Common Emitter (CE) configuration is the most widely used for amplification.

This module focuses on two fundamental biasing techniques for BJTs in the CE configuration: Fixed Bias and Voltage Divider Bias. We will explore their design principles, analysis techniques, and the advantages/disadvantages of each.

---

### **Course Outcomes Addressed:**

*   **CO2: Analyze single stage and multistage BJT amplifier circuits using equivalent models.** (Knowledge Level: K3) - Understanding biasing is a prerequisite for analyzing amplifier circuits using AC equivalent models.
*   **CO1: Design wave shaping circuits using first order RC network and diodes. (Knowledge Level: K3)** - While this topic is on BJT biasing, it's foundational for understanding the DC operating point around which wave shaping circuits might be analyzed or designed in a broader context of analog circuit design.

---

### **Learning Outcomes:**

Upon completion of this topic, you should be able to:

*   Explain the need for proper biasing of a BJT in the CE configuration.
*   Describe the operation and circuit configuration of fixed bias.
*   Analyze fixed bias circuits to determine the quiescent point (Q-point) and other parameters.
*   Design a fixed bias circuit for a desired Q-point.
*   Describe the operation and circuit configuration of voltage divider bias.
*   Analyze voltage divider bias circuits, considering the effect of transistor parameters and load.
*   Design a voltage divider bias circuit for a desired Q-point, ensuring stability.
*   Compare and contrast fixed bias and voltage divider bias in terms of stability and complexity.

---

### **1. Fixed Bias Configuration**

**1.1 Circuit Configuration:**

The fixed bias configuration is the simplest biasing method. It uses a single resistor ($R_B$) to provide the base current ($I_B$) from the supply voltage ($V_{CC}$).

**Circuit Diagram:**

```
      V_CC
       |
       R_B
       |
       /-------> V_CE
      /
     B
    / \
   /   \
  C     E
  |     |
  R_C   R_E (Optional, for stabilization)
  |     |
  GND   GND
```

**Key Components:**

*   $V_{CC}$: DC Supply Voltage.
*   $R_B$: Base resistor, sets the base current.
*   $R_C$: Collector resistor, determines the collector voltage and current.
*   $R_E$: Emitter resistor (often used for stabilization, but not inherently part of the basic fixed bias circuit).

**1.2 Analysis:**

To analyze a fixed bias circuit, we apply Kirchhoff's Voltage Law (KVL) and Ohm's Law to the different loops. We assume the transistor is in the active region.

*   **Base Loop:**
    Applying KVL to the base loop (from $V_{CC}$ through $R_B$ to the base, then through the base-emitter junction to ground/emitter):
    $V_{CC} - I_B R_B - V_{BE} = 0$

    From this, we can find the base current:
    $I_B = \frac{V_{CC} - V_{BE}}{R_B}$

    *   **Important Point:** The value of $V_{BE}$ is typically assumed to be around 0.7V for silicon BJTs and 0.3V for germanium BJTs, but it can vary slightly.

*   **Collector Loop:**
    Applying KVL to the collector loop (from $V_{CC}$ through $R_C$ to the collector, then through the collector-emitter junction to ground/emitter):
    $V_{CC} - I_C R_C - V_{CE} = 0$

    The collector current is related to the base current by the current gain, $\beta$ (h_FE):
    $I_C = \beta I_B$

    Substituting this into the collector loop equation:
    $V_{CC} - (\beta I_B) R_C - V_{CE} = 0$

    From this, we can find the collector voltage:
    $V_{CE} = V_{CC} - I_C R_C$

*   **Emitter Current:**
    The emitter current is the sum of the base and collector currents:
    $I_E = I_B + I_C$
    Since $I_C = \beta I_B$, and $\beta$ is usually much larger than 1, $I_E \approx I_C$.
    $I_E \approx (\beta + 1) I_B$

**Quiescent Point (Q-point):**

The Q-point represents the DC operating point of the transistor. It is defined by the values of $I_C$ and $V_{CE}$ when no AC signal is applied. For fixed bias, the Q-point is $(I_{CQ}, V_{CEQ})$, where $I_{CQ}$ and $V_{CEQ}$ are the DC collector current and collector-emitter voltage, respectively.

**1.3 Design:**

To design a fixed bias circuit, we need to select appropriate values for $R_B$ and $R_C$ to achieve a desired Q-point ($I_{CQ}, V_{CEQ}$).

**Steps for Design:**

1.  **Choose a desired $I_{CQ}$:** This is often chosen to be a significant fraction of the maximum possible collector current without saturation, or based on amplifier gain requirements.
2.  **Choose a desired $V_{CEQ}$:** This is typically set in the middle of the output voltage swing ($V_{CE,sat} \approx 0.2V$ to $0.3V$ and $V_{CE,cutoff} = V_{CC}$) to maximize the output voltage swing. A common choice is $V_{CEQ} \approx V_{CC}/2$.
3.  **Calculate $R_C$:** Using the collector loop equation:
    $R_C = \frac{V_{CC} - V_{CEQ}}{I_{CQ}}$
4.  **Calculate required $I_B$:** Using the transistor's current gain ($\beta = h_{FE}$):
    $I_{BQ} = \frac{I_{CQ}}{\beta}$
5.  **Calculate $R_B$:** Using the base loop equation:
    $R_B = \frac{V_{CC} - V_{BE}}{I_{BQ}}$

**1.4 Stability of Fixed Bias:**

Fixed bias is highly sensitive to variations in $\beta$ and $V_{BE}$.

*   **Variation in $\beta$:** If $\beta$ changes (due to manufacturing tolerances or temperature), $I_B$ remains relatively constant (determined by $V_{CC}$, $R_B$, and $V_{BE}$), but $I_C = \beta I_B$ will vary significantly. This leads to a shift in the Q-point, potentially causing distortion or even pushing the transistor out of the active region.
*   **Variation in $V_{BE}$:** Temperature changes can affect $V_{BE}$ (typically -2mV/$^\circ$C). This also impacts $I_B$ and consequently $I_C$.

**Disadvantages:**

*   Poor Q-point stability against variations in transistor parameters and temperature.
*   Requires knowledge of $\beta$ for proper design, which can vary widely.

**Reference:** Boylestad and Nashelsky (11th ed., 2015), Chapter 6.

---

### **2. Voltage Divider Bias Configuration**

**2.1 Circuit Configuration:**

The voltage divider bias configuration provides a more stable Q-point compared to fixed bias. It uses a voltage divider network ($R_1$ and $R_2$) to set the base voltage, which in turn sets the base current and collector current. An emitter resistor ($R_E$) is also typically included for improved stability.

**Circuit Diagram:**

```
      V_CC
       |
     -----
     |   |
     R_1 R_C
     |   |-------> V_CE
     |   B
     ----- / \
     |    /   \
     R_2 C     E
     |   |     |
     ----/     R_E
     |         |
     GND       GND
```

**Key Components:**

*   $V_{CC}$: DC Supply Voltage.
*   $R_1$, $R_2$: Voltage divider resistors.
*   $R_C$: Collector resistor.
*   $R_E$: Emitter resistor, crucial for stability.

**2.2 Analysis:**

The analysis involves determining the base voltage ($V_B$) and then the base current ($I_B$).

*   **Voltage Divider Analysis:**
    The voltage divider formed by $R_1$ and $R_2$ sets the voltage at the junction of $R_1$, $R_2$, and the base of the transistor.
    The voltage at the junction of $R_1$ and $R_2$ (ignoring the loading effect of the base for initial approximation) is:
    $V_{B\_ideal} = V_{CC} \frac{R_2}{R_1 + R_2}$

    However, the transistor base draws current ($I_B$), which loads the voltage divider. A more accurate analysis can be done using the **Thévenin equivalent circuit** for the base network.

    **Thévenin Equivalent of the Base Network:**
    *   **Thévenin Voltage ($V_{BB}$):** This is the open-circuit voltage across the base terminal.
        $V_{BB} = V_{CC} \frac{R_2}{R_1 + R_2}$ (Same as $V_{B\_ideal}$ if $R_1$ and $R_2$ are much larger than $R_B$ of the transistor, which is usually the case.)
    *   **Thévenin Resistance ($R_{BB}$):** This is the equivalent resistance seen from the base terminal when $V_{CC}$ is shorted to ground.
        $R_{BB} = R_1 || R_2 = \frac{R_1 R_2}{R_1 + R_2}$

    Now, the base circuit can be simplified to a single loop with $V_{BB}$, $R_{BB}$, the base-emitter junction ($V_{BE}$), and the emitter resistor ($R_E$).

*   **Base Loop (Thévenin Equivalent):**
    Applying KVL to the simplified base loop:
    $V_{BB} - I_B R_{BB} - V_{BE} - I_E R_E = 0$

    We know that $I_E = (\beta + 1) I_B$. Substituting this:
    $V_{BB} - I_B R_{BB} - V_{BE} - (\beta + 1) I_B R_E = 0$

    Solving for $I_B$:
    $V_{BB} - V_{BE} = I_B (R_{BB} + (\beta + 1) R_E)$
    $I_B = \frac{V_{BB} - V_{BE}}{R_{BB} + (\beta + 1) R_E}$

*   **Collector Current ($I_C$):**
    $I_C = \beta I_B = \beta \frac{V_{BB} - V_{BE}}{R_{BB} + (\beta + 1) R_E}$

*   **Emitter Current ($I_E$):**
    $I_E = I_B + I_C = (\beta + 1) I_B = (\beta + 1) \frac{V_{BB} - V_{BE}}{R_{BB} + (\beta + 1) R_E}$

*   **Emitter Voltage ($V_E$):**
    $V_E = I_E R_E = (\beta + 1) I_B R_E$

*   **Base Voltage ($V_B$):**
    $V_B = V_{BE} + V_E = V_{BE} + I_E R_E$

*   **Collector Voltage ($V_C$):**
    Applying KVL to the collector loop:
    $V_{CC} - I_C R_C - V_{CE} - I_E R_E = 0$
    $V_C = V_{CC} - I_C R_C$
    Also, $V_C = V_{CE} + V_E$, so $V_{CE} = V_C - V_E$.

**2.3 Design:**

The design of a voltage divider bias circuit aims to achieve a stable Q-point that is less sensitive to variations in $\beta$. The inclusion of $R_E$ significantly improves stability.

**Design Guidelines & Stability:**

*   **Rule of Thumb for Stability:** To ensure that the transistor loading does not significantly affect the voltage divider, the current through $R_2$ ($I_{R2}$) should be significantly larger than the base current ($I_B$). A common guideline is:
    $I_{R2} \ge 10 \times I_{B,max}$ or $I_{R2} \ge 5 \times I_{B,max}$
    This implies that $R_1$ and $R_2$ should be chosen such that the current through them is relatively high.
    If $I_{R2} \gg I_B$, then $V_B \approx V_{BB}$, and the base voltage is largely independent of $I_B$.

*   **Emitter Resistor ($R_E$) Role:** The emitter resistor $R_E$ provides **negative feedback** when there are variations.
    *   If $\beta$ increases, $I_C$ increases, leading to a larger $I_E$.
    *   The larger $I_E$ causes a greater voltage drop across $R_E$ ($V_E = I_E R_E$).
    *   Since $V_B$ is relatively constant (due to the voltage divider), the increase in $V_E$ leads to a decrease in $V_{BE} = V_B - V_E$.
    *   A decrease in $V_{BE}$ reduces $I_B$ and consequently $I_C$, counteracting the initial increase.
    *   This negative feedback mechanism stabilizes the Q-point.

*   **Designing for Stability:** Choose $R_E$ to be sufficiently large to provide good stabilization. A common guideline for $\beta$ stabilization is to ensure that the voltage drop across $R_E$ is significantly larger than $V_{BE}$:
    $I_E R_E \gg V_{BE}$ (e.g., $I_E R_E \approx 10 V_{BE}$)
    This simplifies the analysis significantly.

**Simplified Analysis (Assuming $I_E R_E \gg V_{BE}$ and $I_{R2} \gg I_B$):**

If $I_E R_E \gg V_{BE}$, then the term $V_{BE}$ in the $I_B$ equation becomes negligible:
$I_B \approx \frac{V_{BB}}{R_{BB} + (\beta + 1) R_E}$

If $I_{R2} \gg I_B$, then $V_B \approx V_{BB}$:
$V_E \approx V_B - V_{BE}$ (still need $V_{BE}$ if not neglecting)
Let's use $V_E = I_E R_E$.
$V_B = V_{BE} + V_E$

A more robust simplified approach relies on the emitter resistor.
If $R_E$ is chosen such that $I_E R_E \gg V_{BE}$:
Then $V_E \approx V_B$.
And since $V_B \approx V_{BB}$ (if $R_1 || R_2 \gg R_B$), we have $V_E \approx V_{BB}$.
$I_E = \frac{V_E}{R_E} \approx \frac{V_{BB}}{R_E}$
$I_C = \beta I_B \approx I_E \approx \frac{V_{BB}}{R_E}$

This simplified approach shows that $I_C$ is primarily determined by $V_{BB}$ and $R_E$, and is less dependent on $\beta$.

**Steps for Design (Targeting Stability):**

1.  **Choose a desired Q-point:** $I_{CQ}$ and $V_{CEQ}$.
2.  **Determine $V_E$:** A good starting point for stability is to set $V_E$ to be a significant fraction of $V_{CC}$, for example, $V_E \approx 0.1 V_{CC}$ to $0.2 V_{CC}$. This ensures $I_E R_E \gg V_{BE}$.
3.  **Calculate $R_E$:**
    $R_E = \frac{V_E}{I_{EQ}}$, where $I_{EQ}$ is the desired quiescent emitter current ($I_{EQ} \approx I_{CQ}$).
4.  **Calculate $V_B$:**
    $V_B = V_{BE} + V_E$. Assume $V_{BE} \approx 0.7V$.
5.  **Design the Voltage Divider ($R_1, R_2$):**
    *   To ensure $V_B \approx V_{BB}$ and $I_{R2} \gg I_B$, choose a current through the divider network that is 5-10 times the estimated maximum base current.
    *   Let $I_{divider} = \frac{V_{CC}}{R_1+R_2}$. Aim for $I_{divider} \approx 10 \times I_{BQ}$.
    *   We have $V_{BB} = V_{CC} \frac{R_2}{R_1 + R_2}$.
    *   So, $V_B = V_{CC} \frac{R_2}{R_1 + R_2}$.
    *   This gives one equation: $R_1 + R_2 = \frac{V_{CC}}{I_{divider}}$.
    *   And another: $V_B = V_{CC} \frac{R_2}{R_1 + R_2}$.
    *   Substitute $R_1 = \frac{V_{CC}}{I_{divider}} - R_2$ into the second equation:
        $V_B = V_{CC} \frac{R_2}{\frac{V_{CC}}{I_{divider}}}$
        $V_B = V_{CC} \frac{R_2 I_{divider}}{V_{CC}}$
        $V_B = R_2 I_{divider}$
        $R_2 = \frac{V_B}{I_{divider}}$
    *   Once $R_2$ is found, $R_1$ can be calculated: $R_1 = \frac{V_{CC}}{I_{divider}} - R_2$.
6.  **Calculate $R_C$:**
    Apply KVL to the collector loop:
    $V_{CC} - I_{CQ} R_C - V_{CEQ} - V_E = 0$
    $R_C = \frac{V_{CC} - V_{CEQ} - V_E}{I_{CQ}}$

**Reference:** Boylestad and Nashelsky (11th ed., 2015), Chapter 6. Sedra and Smith (6th ed., 2013), Chapter 3.

---

### **3. Comparison: Fixed Bias vs. Voltage Divider Bias**

| Feature          | Fixed Bias                                | Voltage Divider Bias                         |
| :--------------- | :---------------------------------------- | :------------------------------------------- |
| **Complexity**   | Simple (fewer components)                 | More complex (more components)               |
| **Stability**    | Poor stability against $\beta$ and $V_{BE}$ variations | Good stability against $\beta$ and $V_{BE}$ variations |
| **Design**       | Requires precise $\beta$ value            | Less sensitive to $\beta$, more stable      |
| **Cost**         | Lower component cost                      | Higher component cost                        |
| **Applications** | Simple, non-critical applications         | Most amplifier circuits, sensitive designs   |

---

### **Key Points to Remember:**

*   **Biasing:** Establishing DC operating conditions for the transistor to ensure active region operation.
*   **Q-point:** The DC operating point $(I_{CQ}, V_{CEQ})$ is crucial for amplifier performance.
*   **Fixed Bias:** Simplest but least stable. Highly dependent on $\beta$.
*   **Voltage Divider Bias:** More stable due to the voltage divider network and emitter resistor ($R_E$), which provides negative feedback.
*   **Thévenin Equivalent:** A powerful tool for analyzing the base circuit in voltage divider bias.
*   **Stability Factors:** The voltage divider bias is designed to minimize the dependence of the Q-point on variations in $\beta$ and $V_{BE}$.
*   **Design Goals:** Choose resistor values to achieve the desired Q-point and ensure sufficient stability.

---

### **Example Problems and Solutions**

**Example 1: Fixed Bias Analysis**

Given a fixed bias circuit with $V_{CC} = 12V$, $R_B = 100k\Omega$, $R_C = 1k\Omega$. The transistor has $\beta = 100$ and $V_{BE} = 0.7V$.

**Solution:**

1.  **Calculate $I_B$:**
    $I_B = \frac{V_{CC} - V_{BE}}{R_B} = \frac{12V - 0.7V}{100k\Omega} = \frac{11.3V}{100k\Omega} = 0.113mA$

2.  **Calculate $I_C$:**
    $I_C = \beta I_B = 100 \times 0.113mA = 11.3mA$

3.  **Calculate $V_{CE}$:**
    $V_{CE} = V_{CC} - I_C R_C = 12V - (11.3mA \times 1k\Omega) = 12V - 11.3V = 0.7V$

    **Q-point:** $(I_{CQ} = 11.3mA, V_{CEQ} = 0.7V)$

**Example 2: Fixed Bias Design**

Design a fixed bias circuit for a transistor with $\beta = 150$ to operate at a Q-point of $I_{CQ} = 5mA$ and $V_{CEQ} = 6V$. Assume $V_{CC} = 12V$ and $V_{BE} = 0.7V$.

**Solution:**

1.  **Calculate $R_C$:**
    $R_C = \frac{V_{CC} - V_{CEQ}}{I_{CQ}} = \frac{12V - 6V}{5mA} = \frac{6V}{5mA} = 1.2k\Omega$

2.  **Calculate required $I_B$:**
    $I_{BQ} = \frac{I_{CQ}}{\beta} = \frac{5mA}{150} \approx 0.0333mA$

3.  **Calculate $R_B$:**
    $R_B = \frac{V_{CC} - V_{BE}}{I_{BQ}} = \frac{12V - 0.7V}{0.0333mA} = \frac{11.3V}{0.0333mA} \approx 339.3k\Omega$
    Choose a standard resistor value close to this, e.g., $330k\Omega$ or $340k\Omega$.

**Example 3: Voltage Divider Bias Analysis**

Given a voltage divider bias circuit with $V_{CC} = 15V$, $R_1 = 100k\Omega$, $R_2 = 10k\Omega$, $R_C = 2.2k\Omega$, $R_E = 1k\Omega$. The transistor has $\beta = 120$ and $V_{BE} = 0.7V$.

**Solution:**

1.  **Calculate Thévenin Equivalent:**
    *   $V_{BB} = V_{CC} \frac{R_2}{R_1 + R_2} = 15V \frac{10k\Omega}{100k\Omega + 10k\Omega} = 15V \frac{10}{110} \approx 1.36V$
    *   $R_{BB} = R_1 || R_2 = \frac{100k\Omega \times 10k\Omega}{100k\Omega + 10k\Omega} = \frac{1000}{110} k\Omega \approx 9.09k\Omega$

2.  **Calculate $I_B$:**
    $I_B = \frac{V_{BB} - V_{BE}}{R_{BB} + (\beta + 1) R_E} = \frac{1.36V - 0.7V}{9.09k\Omega + (120 + 1) \times 1k\Omega} = \frac{0.66V}{9.09k\Omega + 121k\Omega} = \frac{0.66V}{130.09k\Omega} \approx 0.00507mA$

3.  **Calculate $I_C$:**
    $I_C = \beta I_B = 120 \times 0.00507mA \approx 0.608mA$

4.  **Calculate $I_E$:**
    $I_E = (\beta + 1) I_B = 121 \times 0.00507mA \approx 0.613mA$

5.  **Calculate $V_E$:**
    $V_E = I_E R_E = 0.613mA \times 1k\Omega \approx 0.613V$

6.  **Calculate $V_B$:**
    $V_B = V_{BE} + V_E = 0.7V + 0.613V = 1.313V$
    *(Note: This is close to $V_{BB}$, confirming the approximation that $I_B$ is small compared to the current through $R_2$)*

7.  **Calculate $V_C$:**
    $V_C = V_{CC} - I_C R_C = 15V - (0.608mA \times 2.2k\Omega) = 15V - 1.338V \approx 13.66V$

8.  **Calculate $V_{CE}$:**
    $V_{CE} = V_C - V_E = 13.66V - 0.613V \approx 13.05V$

    **Q-point:** $(I_{CQ} \approx 0.608mA, V_{CEQ} \approx 13.05V)$

**Example 4: Voltage Divider Bias Design**

Design a voltage divider bias circuit for a transistor with $\beta_{min} = 80$ and $\beta_{max} = 200$. The desired Q-point is $I_{CQ} = 2mA$ and $V_{CEQ} = 5V$. Assume $V_{CC} = 12V$ and $V_{BE} = 0.7V$. We want to ensure that $I_{CQ}$ does not vary by more than $\pm 10\%$ due to $\beta$ variations.

**Solution Strategy:**

The key to stable design is to make the emitter resistor ($R_E$) dominate the biasing. A common strategy is to set $V_E$ to be significantly larger than $V_{BE}$ and to have the current through $R_1||R_2$ be significantly larger than the base current.

1.  **Set $V_E$ for stability:** Let's aim for $V_E \approx 0.2 V_{CC} = 0.2 \times 12V = 2.4V$. This ensures $V_E \gg V_{BE}$.
2.  **Calculate $R_E$:**
    $R_E = \frac{V_E}{I_{EQ}} = \frac{2.4V}{2mA} = 1.2k\Omega$
3.  **Calculate $V_B$:**
    $V_B = V_{BE} + V_E = 0.7V + 2.4V = 3.1V$
4.  **Design $R_1$ and $R_2$:**
    *   We need $V_B \approx V_{BB}$. So, $V_{BB} = 3.1V$.
    *   $V_{BB} = V_{CC} \frac{R_2}{R_1 + R_2} \implies 3.1V = 12V \frac{R_2}{R_1 + R_2}$
    *   $\frac{R_2}{R_1 + R_2} = \frac{3.1}{12} \implies R_1 + R_2 = R_2 \frac{12}{3.1} \implies R_1 = R_2 (\frac{12}{3.1} - 1) = R_2 (\frac{12 - 3.1}{3.1}) = R_2 \frac{8.9}{3.1} \approx 2.87 R_2$
    *   Let's also ensure the divider current is about 10 times the maximum expected base current. For $\beta_{max}=200$, $I_{BQ,max} = \frac{2mA}{200} = 0.01mA$.
    *   So, $I_{R2} \approx 10 \times 0.01mA = 0.1mA$.
    *   $V_B = I_{R2} R_2 \implies 3.1V = 0.1mA \times R_2 \implies R_2 = \frac{3.1V}{0.1mA} = 31k\Omega$.
    *   Using $R_1 \approx 2.87 R_2$, $R_1 \approx 2.87 \times 31k\Omega \approx 89k\Omega$.
    *   Let's choose standard values: $R_2 = 30k\Omega$ and $R_1 = 91k\Omega$.
    *   Recalculate $V_{BB}$ with these values: $V_{BB} = 12V \frac{30k\Omega}{91k\Omega + 30k\Omega} = 12V \frac{30}{121} \approx 2.975V$. This is close to our target $3.1V$.

5.  **Calculate $R_C$:**
    $V_{CEQ} = V_{CC} - I_{CQ} R_C - V_E$
    $5V = 12V - 2mA \times R_C - 2.4V$
    $5V = 9.6V - 2mA \times R_C$
    $2mA \times R_C = 9.6V - 5V = 4.6V$
    $R_C = \frac{4.6V}{2mA} = 2.3k\Omega$.

    **Designed Circuit:** $V_{CC}=12V, R_1=91k\Omega, R_2=30k\Omega, R_C=2.3k\Omega, R_E=1.2k\Omega$.

    **Stability Check (with $\beta_{min}=80$):**
    *   $V_{BB} \approx 2.975V$ (same)
    *   $R_{BB} = 91k\Omega || 30k\Omega = \frac{91 \times 30}{121} k\Omega \approx 22.56k\Omega$
    *   $I_B = \frac{V_{BB} - V_{BE}}{R_{BB} + (\beta + 1) R_E} = \frac{2.975V - 0.7V}{22.56k\Omega + (80 + 1) \times 1.2k\Omega} = \frac{2.275V}{22.56k\Omega + 81 \times 1.2k\Omega} = \frac{2.275V}{22.56k\Omega + 97.2k\Omega} = \frac{2.275V}{119.76k\Omega} \approx 0.0190mA$
    *   $I_C = \beta I_B = 80 \times 0.0190mA \approx 1.52mA$
    *   $I_{CQ}$ varied from $2mA$ to $1.52mA$. The change is $0.48mA$.
    *   Percentage change: $\frac{2mA - 1.52mA}{2mA} \times 100\% = \frac{0.48mA}{2mA} \times 100\% = 24\%$.

    **Hmm, this change is larger than the desired 10%.** This indicates that our initial assumption for $V_E$ or the divider current needs adjustment. Let's try making $V_E$ even larger.

    **Revised Design Strategy:** Let's aim for $V_E \approx 0.25 V_{CC} = 0.25 \times 12V = 3V$.
    *   $R_E = \frac{V_E}{I_{EQ}} = \frac{3V}{2mA} = 1.5k\Omega$.
    *   $V_B = V_{BE} + V_E = 0.7V + 3V = 3.7V$.
    *   We need $V_B \approx V_{BB}$. So $V_{BB} = 3.7V$.
    *   $V_{BB} = V_{CC} \frac{R_2}{R_1 + R_2} \implies 3.7V = 12V \frac{R_2}{R_1 + R_2}$
    *   $\frac{R_2}{R_1 + R_2} = \frac{3.7}{12} \implies R_1 = R_2 (\frac{12}{3.7} - 1) = R_2 (\frac{12 - 3.7}{3.7}) = R_2 \frac{8.3}{3.7} \approx 2.24 R_2$.
    *   Divider current $I_{R2} \approx 10 \times I_{BQ,max} = 0.1mA$.
    *   $R_2 = \frac{V_B}{I_{R2}} = \frac{3.7V}{0.1mA} = 37k\Omega$. Let's choose $R_2 = 36k\Omega$.
    *   $R_1 \approx 2.24 \times 36k\Omega \approx 80.64k\Omega$. Let's choose $R_1 = 82k\Omega$.
    *   Recalculate $V_{BB}$ with $R_1=82k\Omega, R_2=36k\Omega$: $V_{BB} = 12V \frac{36k\Omega}{82k\Omega + 36k\Omega} = 12V \frac{36}{118} \approx 3.65V$. This is close to $3.7V$.
    *   Recalculate $R_{BB} = 82k\Omega || 36k\Omega = \frac{82 \times 36}{118} k\Omega \approx 24.98k\Omega$.

    *   **Calculate $R_C$:**
        $V_{CEQ} = V_{CC} - I_{CQ} R_C - V_E$
        $5V = 12V - 2mA \times R_C - 3V$
        $5V = 9V - 2mA \times R_C$
        $2mA \times R_C = 9V - 5V = 4V$
        $R_C = \frac{4V}{2mA} = 2k\Omega$.

    **Revised Designed Circuit:** $V_{CC}=12V, R_1=82k\Omega, R_2=36k\Omega, R_C=2k\Omega, R_E=1.5k\Omega$.

    **Stability Check (with $\beta_{min}=80$):**
    *   $V_{BB} \approx 3.65V$
    *   $R_{BB} \approx 24.98k\Omega$
    *   $I_B = \frac{V_{BB} - V_{BE}}{R_{BB} + (\beta + 1) R_E} = \frac{3.65V - 0.7V}{24.98k\Omega + (80 + 1) \times 1.5k\Omega} = \frac{2.95V}{24.98k\Omega + 81 \times 1.5k\Omega} = \frac{2.95V}{24.98k\Omega + 121.5k\Omega} = \frac{2.95V}{146.48k\Omega} \approx 0.0201mA$
    *   $I_C = \beta I_B = 80 \times 0.0201mA \approx 1.61mA$

    **Stability Check (with $\beta_{max}=200$):**
    *   $I_B = \frac{V_{BB} - V_{BE}}{R_{BB} + (\beta + 1) R_E} = \frac{3.65V - 0.7V}{24.98k\Omega + (200 + 1) \times 1.5k\Omega} = \frac{2.95V}{24.98k\Omega + 201 \times 1.5k\Omega} = \frac{2.95V}{24.98k\Omega + 301.5k\Omega} = \frac{2.95V}{326.48k\Omega} \approx 0.00904mA$
    *   $I_C = \beta I_B = 200 \times 0.00904mA \approx 1.81mA$

    **Q-point analysis:**
    *   For $\beta=80$, $I_{CQ} \approx 1.61mA$.
    *   For $\beta=200$, $I_{CQ} \approx 1.81mA$.
    *   Target was $2mA$. The variation is from $1.61mA$ to $1.81mA$.
    *   Percentage variation from the average of $(1.61+1.81)/2 = 1.71mA$: $\frac{2mA - 1.71mA}{1.71mA} \times 100\% = \frac{0.29mA}{1.71mA} \times 100\% \approx 17\%$.

    This is still not within 10%. Achieving very tight stability requires careful iteration or using design equations that explicitly incorporate stability factors. For educational purposes, the process illustrates the trade-offs. A higher $R_E$ and a higher divider current ($I_{R2}$) generally lead to better stability.

---

### **Practice Questions:**

1.  **Fixed Bias Analysis:** A BJT with $\beta = 120$ and $V_{BE} = 0.7V$ is used in a fixed bias circuit with $V_{CC} = 10V$, $R_B = 50k\Omega$, and $R_C = 1k\Omega$. Calculate the quiescent collector current ($I_{CQ}$) and collector-emitter voltage ($V_{CEQ}$).
2.  **Fixed Bias Design:** Design a fixed bias circuit for a transistor with $\beta = 200$ to achieve a Q-point of $I_{CQ} = 10mA$ and $V_{CEQ} = 7V$. Assume $V_{CC} = 15V$ and $V_{BE} = 0.7V$.
3.  **Voltage Divider Bias Analysis:** For the circuit with $V_{CC} = 18V$, $R_1 = 120k\Omega$, $R_2 = 20k\Omega$, $R_C = 2.7k\Omega$, $R_E = 1.5k\Omega$, and a transistor with $\beta = 150$, $V_{BE} = 0.7V$. Calculate the Q-point ($I_{CQ}$, $V_{CEQ}$).
4.  **Voltage Divider Bias Design (Stability Focus):** Design a voltage divider bias circuit for $V_{CC} = 12V$. The desired Q-point is $I_{CQ} = 1mA$, $V_{CEQ} = 6V$. The transistor has $\beta$ ranging from 100 to 300. Aim to keep $I_{CQ}$ within $\pm 15\%$ of the target due to $\beta$ variations. Assume $V_{BE} = 0.7V$.
5.  **Comparison:** Briefly explain why voltage divider bias is preferred over fixed bias for amplifier circuits.

---

### **Answers to Practice Questions:**

1.  **Fixed Bias Analysis:**
    *   $I_B = \frac{10V - 0.7V}{50k\Omega} = \frac{9.3V}{50k\Omega} = 0.186mA$
    *   $I_C = 120 \times 0.186mA = 22.32mA$
    *   $V_{CE} = 10V - (22.32mA \times 1k\Omega) = 10V - 22.32V = -12.32V$.
    *   **Conclusion:** The transistor is saturated. The calculation of $V_{CE}$ shows that the collector voltage would be negative, which implies saturation (since $V_{CE,sat} \approx 0.2V$). Let's recalculate assuming saturation.
        If saturated, $V_{CE} \approx 0.2V$.
        $I_C = \frac{V_{CC} - V_{CE,sat}}{R_C} = \frac{10V - 0.2V}{1k\Omega} = \frac{9.8V}{1k\Omega} = 9.8mA$.
        This is the actual $I_{CQ}$.
        The initial calculation of $I_B$ is still correct: $0.186mA$.
        With $I_C = 9.8mA$, the required $I_B$ for active region would be $I_B = \frac{9.8mA}{120} \approx 0.0817mA$. Since the actual $I_B$ is $0.186mA$, the transistor is indeed saturated.
    *   **Q-point:** $(I_{CQ} \approx 9.8mA, V_{CEQ} \approx 0.2V)$

2.  **Fixed Bias Design:**
    *   $R_C = \frac{15V - 7V}{10mA} = \frac{8V}{10mA} = 800\Omega$ (Choose $820\Omega$ as standard)
    *   $I_{BQ} = \frac{10mA}{200} = 0.05mA$
    *   $R_B = \frac{15V - 0.7V}{0.05mA} = \frac{14.3V}{0.05mA} = 286k\Omega$ (Choose $270k\Omega$ or $300k\Omega$)

3.  **Voltage Divider Bias Analysis:**
    *   $V_{BB} = 18V \frac{20k\Omega}{120k\Omega + 20k\Omega} = 18V \frac{20}{140} = 18V \frac{1}{7} \approx 2.57V$
    *   $R_{BB} = \frac{120k\Omega \times 20k\Omega}{140k\Omega} = \frac{2400}{140} k\Omega \approx 17.14k\Omega$
    *   $I_B = \frac{2.57V - 0.7V}{17.14k\Omega + (150 + 1) \times 1.5k\Omega} = \frac{1.87V}{17.14k\Omega + 151 \times 1.5k\Omega} = \frac{1.87V}{17.14k\Omega + 226.5k\Omega} = \frac{1.87V}{243.64k\Omega} \approx 0.00768mA$
    *   $I_C = 150 \times 0.00768mA \approx 1.15mA$
    *   $I_E = I_B + I_C \approx 1.15mA$
    *   $V_E = I_E R_E = 1.15mA \times 1.5k\Omega \approx 1.725V$
    *   $V_C = V_{CC} - I_C R_C = 18V - (1.15mA \times 2.7k\Omega) = 18V - 3.105V \approx 14.895V$
    *   $V_{CE} = V_C - V_E = 14.895V - 1.725V \approx 13.17V$
    *   **Q-point:** $(I_{CQ} \approx 1.15mA, V_{CEQ} \approx 13.17V)$

4.  **Voltage Divider Bias Design (Stability Focus):**
    *   Target $I_{CQ} = 1mA$. $\beta_{min}=100, \beta_{max}=300$.
    *   Let's aim for $V_E \approx 0.25 V_{CC} = 0.25 \times 12V = 3V$.
    *   $R_E = \frac{V_E}{I_{EQ}} = \frac{3V}{1mA} = 3k\Omega$.
    *   $V_B = V_{BE} + V_E = 0.7V + 3V = 3.7V$.
    *   $V_{BB} \approx 3.7V$.
    *   $V_{BB} = 12V \frac{R_2}{R_1 + R_2} \implies \frac{R_2}{R_1 + R_2} = \frac{3.7}{12}$.
    *   $R_1 = R_2 (\frac{12}{3.7} - 1) \approx 2.24 R_2$.
    *   Max $I_B$ for $\beta=100$: $I_{BQ,max} = \frac{1mA}{100} = 0.01mA$.
    *   Let divider current $I_{R2} \approx 10 \times I_{BQ,max} = 0.1mA$.
    *   $R_2 = \frac{V_B}{I_{R2}} = \frac{3.7V}{0.1mA} = 37k\Omega$. Choose $R_2 = 36k\Omega$.
    *   $R_1 \approx 2.24 \times 36k\Omega \approx 80.64k\Omega$. Choose $R_1 = 82k\Omega$.
    *   Check $V_{BB}$: $V_{BB} = 12V \frac{36k\Omega}{82k\Omega + 36k\Omega} \approx 3.65V$. Close to $3.7V$.
    *   Calculate $R_C$: $V_{CEQ} = V_{CC} - I_{CQ} R_C - V_E$.
        $6V = 12V - 1mA \times R_C - 3V$.
        $6V = 9V - 1mA \times R_C$.
        $1mA \times R_C = 3V$.
        $R_C = 3k\Omega$.

    *   **Designed Circuit:** $V_{CC}=12V, R_1=82k\Omega, R_2=36k\Omega, R_C=3k\Omega, R_E=3k\Omega$.

    *   **Stability Check:**
        *   $R_{BB} = 82k\Omega || 36k\Omega \approx 24.98k\Omega$.
        *   For $\beta=100$: $I_B = \frac{3.65V - 0.7V}{24.98k\Omega + (101) \times 3k\Omega} = \frac{2.95V}{24.98k\Omega + 303k\Omega} = \frac{2.95V}{327.98k\Omega} \approx 0.00899mA$.
        *   $I_C = 100 \times 0.00899mA \approx 0.90mA$.
        *   For $\beta=300$: $I_B = \frac{3.65V - 0.7V}{24.98k\Omega + (301) \times 3k\Omega} = \frac{2.95V}{24.98k\Omega + 903k\Omega} = \frac{2.95V}{927.98k\Omega} \approx 0.00318mA$.
        *   $I_C = 300 \times 0.00318mA \approx 0.95mA$.

        *   The range of $I_{CQ}$ is from $0.90mA$ to $0.95mA$. The average is $0.925mA$.
        *   Percentage variation from target ($1mA$): $\frac{1mA - 0.95mA}{1mA} \times 100\% = 5\%$ for the upper bound, and $\frac{1mA - 0.90mA}{1mA} \times 100\% = 10\%$ for the lower bound.
        *   This meets the $\pm 15\%$ (effectively $\pm 10\%$ on the lower side in this case) stability requirement.

5.  **Comparison:**
    Voltage divider bias is preferred over fixed bias because it provides significantly better stability for the transistor's operating point (Q-point). The Q-point in fixed bias is highly sensitive to variations in the transistor's current gain ($\beta$) and the base-emitter voltage ($V_{BE}$), which can change due to manufacturing tolerances and temperature fluctuations. Voltage divider bias, with its use of two resistors ($R_1$ and $R_2$) to set a more constant base voltage and an emitter resistor ($R_E$) which provides negative feedback, makes the Q-point much less dependent on these transistor parameters. This leads to more reliable and consistent amplifier performance, especially over a range of operating conditions. While it uses more components, the improved stability is often a critical requirement in analog circuit design.

---
---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
