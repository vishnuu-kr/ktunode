---
title: "voltage divider bias"
subject: "SOLID STATE DEVICES"
module: "Module 1: Wave shaping circuits : First order RC low pass and high pass filters"
branch: "Electrical and Electronics Engineering"
semester: 4
topicId: "68a200852b85456187f35f7b"
status: "completed"
scrapedAt: "2026-05-23T16:18:35.643Z"
---
# SOLID STATE DEVICES: Module 1: Wave Shaping Circuits: First-Order RC Low Pass and High Pass Filters - Voltage Divider Bias

## Introduction

This module introduces fundamental concepts in solid-state devices, focusing on wave-shaping circuits. Within this context, we will explore the crucial technique of **voltage divider bias** for Bipolar Junction Transistors (BJTs). Understanding biasing is essential for stable and predictable transistor operation, particularly in amplifier circuits. While the module title emphasizes RC filters, the ability to properly bias a transistor is a prerequisite for analyzing and designing such circuits when BJTs are involved. This section will lay the groundwork for understanding how to set a stable operating point for a BJT.

## 1. BJT Biasing: The Need for a Stable Operating Point

Before delving into RC filters, it's vital to understand why we need to bias a BJT. A transistor, like any active electronic component, needs to be set to a specific operating region (cutoff, active, or saturation) to perform its intended function, such as amplification or switching.

*   **Purpose of Biasing:** To establish a DC operating point (Q-point) for the transistor. The Q-point represents the DC collector current ($I_C$) and collector-emitter voltage ($V_{CE}$) when no AC signal is applied.
*   **Importance of Stability:** The Q-point should remain relatively constant despite variations in:
    *   **Transistor parameters:** Specifically, the current gain ($\beta$) which can vary significantly from one transistor to another and with temperature.
    *   **Temperature:** Changes in temperature can affect transistor characteristics.
*   **Why Fixed Bias is Insufficient:** Simple fixed bias circuits, where the base is connected directly to a voltage source through a resistor, are highly sensitive to $\beta$ variations, making them unstable.

## 2. Voltage Divider Bias: A Stable Biasing Method

The **voltage divider bias** circuit is a widely used and effective method for achieving a stable Q-point for BJTs. It utilizes a voltage divider network to set the base voltage, which in turn dictates the emitter current and consequently the collector current.

**Key Concept:** The voltage divider network (typically two resistors, $R_1$ and $R_2$) creates a stable base voltage that is less dependent on $\beta$.

### 2.1 Circuit Configuration

A typical voltage divider bias circuit for an NPN BJT is shown below:

```
      Vcc
       |
       Rc
       |
    C--+--Vce
       |
      Q1 (BJT)
     /  \
    B----R2----GND
    |    |
    Rb1  Re
    |    |
    Vcc  GND
```

**Components:**

*   $V_{cc}$: DC supply voltage.
*   $R_1$ and $R_2$: Resistors forming the voltage divider network for the base.
*   $R_c$: Collector resistor, which drops voltage and allows for output signal development.
*   $R_e$: Emitter resistor, which provides negative feedback for stabilization.
*   $Q_1$: The NPN BJT.

### 2.2 Analysis of the Voltage Divider Bias Circuit

The analysis involves finding the Q-point ($I_C$ and $V_{CE}$) in the DC domain. We can simplify the circuit using the **Thévenin equivalent** at the base terminal.

#### 2.2.1 Thévenin Equivalent Circuit

**Step 1: Remove the transistor** and consider the network formed by $V_{cc}$, $R_1$, and $R_2$.

**Step 2: Calculate the Thévenin voltage ($V_{BB}$ or $V_{Th}$) seen at the base terminal.**
$V_{BB} = V_{cc} \times \frac{R_2}{R_1 + R_2}$

**Step 3: Calculate the Thévenin resistance ($R_{BB}$ or $R_{Th}$) looking back into the base circuit.**
$R_{BB} = R_1 || R_2 = \frac{R_1 \times R_2}{R_1 + R_2}$

**The Thévenin equivalent circuit at the base is:**

```
     Vcc
      |
      Rc
      |
   C--+--Vce
      |
     Q1 (BJT)
    /  \
   B-----(R_BB)----V_BB
   |
   Re
   |
  GND
```

#### 2.2.2 DC Analysis with Thévenin Equivalent

Now, apply Kirchhoff's Voltage Law (KVL) to the base-emitter loop and the collector-emitter loop of the Thévenin equivalent circuit.

**Base-Emitter Loop:**
$V_{BB} = I_B R_{BB} + V_{BE} + I_E R_e$

**Relationship between $I_C$, $I_E$, and $I_B$:**
$I_E = I_C + I_B$
$I_E = \beta I_B + I_B = (\beta + 1) I_B$
$I_C = \alpha I_E$, where $\alpha = \frac{\beta}{\beta + 1}$

**Substitute $I_B = \frac{I_E}{\beta + 1}$ into the base-emitter loop equation:**
$V_{BB} = \frac{I_E}{\beta + 1} R_{BB} + V_{BE} + I_E R_e$

**Rearrange to solve for $I_E$:**
$V_{BB} - V_{BE} = I_E \left( \frac{R_{BB}}{\beta + 1} + R_e \right)$
$I_E = \frac{V_{BB} - V_{BE}}{\frac{R_{BB}}{\beta + 1} + R_e}$

**Important Approximation (for stable biasing):**
If $R_e \gg \frac{R_{BB}}{\beta + 1}$, which is usually true for stable designs, the equation simplifies to:
$I_E \approx \frac{V_{BB} - V_{BE}}{R_e}$

**Calculate $I_C$ and $V_{CE}$:**
$I_C = \alpha I_E \approx \frac{\beta}{\beta + 1} I_E$
*(Often, $\alpha \approx 1$ is a good approximation when $\beta$ is large, so $I_C \approx I_E$)*

$V_{CE} = V_{cc} - I_C R_c - I_E R_e$
Substitute $I_E \approx I_C$:
$V_{CE} \approx V_{cc} - I_C (R_c + R_e)$

**Q-Point:** The Q-point is $(I_C, V_{CE})$.

### 2.3 Stability Analysis and Design Considerations

The stability of the Q-point is a crucial design aspect. The voltage divider bias offers good stability due to the emitter resistor $R_e$.

**Stability Factor (S):** A measure of how much $I_C$ changes with changes in reverse saturation current ($I_{CO}$). For voltage divider bias, the stability factor is approximately:
$S \approx \frac{R_{BB} + R_{BE}}{R_{BB} + R_{BE} + (\beta + 1)R_e}$
Where $R_{BE} \approx V_{BE}/I_B$.

**Key Design Principle:** To achieve good stability, **$R_e$ should be large enough** compared to $R_{BB}/\beta$.

*   **Rule of Thumb for Stability:** Choose $R_2$ such that the current through $R_2$ ($I_{R2}$) is significantly larger than the base current ($I_B$). A common guideline is $I_{R2} \ge 10 \times I_B$. This ensures that $V_{BB}$ is relatively independent of $I_B$.

    $I_{R2} = \frac{V_{BB}}{R_2} = \frac{V_{cc}}{R_1 + R_2}$

    So, $\frac{V_{cc}}{R_1 + R_2} \ge 10 \times \frac{I_C}{\beta_{max}}$ (using $I_B = I_C/\beta_{max}$ for the maximum base current).

*   **Emitter Resistor ($R_e$):** Its primary role is to provide negative feedback, which stabilizes the emitter current against variations in $\beta$ and $V_{BE}$. A larger $R_e$ generally leads to better stability.

*   **Collector Resistor ($R_c$):** Determines the voltage drop across it and influences the quiescent collector current. It also sets the maximum allowable AC output voltage swing.

*   **Setting the Q-point:**
    1.  Decide on a desired $I_C$ and $V_{CE}$.
    2.  Choose $V_{BE}$ (typically 0.7V for silicon).
    3.  Choose a stable $I_E$. A good starting point is $I_E \approx I_C$.
    4.  From $I_E \approx \frac{V_{BB} - V_{BE}}{R_e}$, choose $R_e$ based on a desired $V_{BB}$. A common choice for $V_{BB}$ is around $10-15\%$ of $V_{cc}$ or a value that ensures sufficient base current.
    5.  Once $R_e$ and $V_{BB}$ are chosen, determine $R_1$ and $R_2$ to create $V_{BB}$ and $R_{BB}$, satisfying the stability condition.
    6.  Calculate $R_c$ from $V_{CE} = V_{cc} - I_C R_c - I_E R_e$.

### 2.4 Example Calculation (Boylested & Nashelsky, 11/e)

Let's consider a common design scenario:

**Given:**
*   NPN BJT with $\beta = 100$ (assume this is $\beta_{min}$)
*   $V_{cc} = 15V$
*   $R_1 = 47k\Omega$
*   $R_2 = 10k\Omega$
*   $R_c = 1k\Omega$
*   $R_e = 0.5k\Omega$
*   $V_{BE} = 0.7V$

**Find the Q-point ($I_C$, $V_{CE}$) and verify stability.**

**Solution:**

1.  **Thévenin Equivalent:**
    $V_{BB} = V_{cc} \times \frac{R_2}{R_1 + R_2} = 15V \times \frac{10k\Omega}{47k\Omega + 10k\Omega} = 15V \times \frac{10}{57} \approx 2.63V$
    $R_{BB} = R_1 || R_2 = \frac{47k\Omega \times 10k\Omega}{47k\Omega + 10k\Omega} = \frac{470}{57} k\Omega \approx 8.25k\Omega$

2.  **Emitter Current ($I_E$):**
    Using the simplified formula for stable circuits:
    $I_E \approx \frac{V_{BB} - V_{BE}}{R_e} = \frac{2.63V - 0.7V}{0.5k\Omega} = \frac{1.93V}{0.5k\Omega} = 3.86mA$

    Using the more accurate formula:
    $I_E = \frac{V_{BB} - V_{BE}}{\frac{R_{BB}}{\beta + 1} + R_e} = \frac{2.63V - 0.7V}{\frac{8.25k\Omega}{100 + 1} + 0.5k\Omega} = \frac{1.93V}{81.68\Omega + 500\Omega} = \frac{1.93V}{581.68\Omega} \approx 3.32mA$

    *Note: The approximation is valid if $R_e$ is sufficiently large. Here, the difference is noticeable. For design, we'd typically ensure $R_e$ is larger relative to $R_{BB}/\beta$. However, for analysis, we'll use the accurate value.*

3.  **Collector Current ($I_C$):**
    Assuming $\beta = 100$, $\alpha = \frac{100}{101} \approx 0.99$
    $I_C = \alpha I_E \approx 0.99 \times 3.32mA \approx 3.29mA$
    *(If we assume $I_C \approx I_E$ for approximation, $I_C \approx 3.32mA$)*

4.  **Collector-Emitter Voltage ($V_{CE}$):**
    $V_{CE} = V_{cc} - I_C R_c - I_E R_e$
    $V_{CE} \approx 15V - (3.29mA)(1k\Omega) - (3.32mA)(0.5k\Omega)$
    $V_{CE} \approx 15V - 3.29V - 1.66V \approx 10.05V$

**Q-Point:** $(I_C \approx 3.29mA, V_{CE} \approx 10.05V)$

**Stability Check (using rule of thumb):**
Current through $R_2$: $I_{R2} = \frac{V_{BB}}{R_2} = \frac{2.63V}{10k\Omega} = 0.263mA$
Base current $I_B = \frac{I_E}{\beta + 1} = \frac{3.32mA}{101} \approx 0.033mA$
$I_{R2} (0.263mA) \gg 10 \times I_B (0.33mA)$. The rule of thumb ($I_{R2} \ge 10 \times I_B$) is *not* strictly met here, indicating moderate stability. For better stability, $R_1$ could be smaller or $R_2$ larger, increasing $I_{R2}$.

**Textbook Reference:** This analysis aligns with the methods presented in **Boylested & Nashelsky, Chapter 2** regarding BJT biasing and DC analysis.

### 2.5 Impact on RC Filter Performance

While voltage divider bias itself doesn't directly involve capacitors and resistors in the *wave-shaping* sense, it sets the DC operating conditions of the transistor. If this BJT is part of an amplifier that then uses RC networks for filtering or coupling, the stable Q-point ensures that the amplifier's characteristics (gain, frequency response) are predictable and not drifting due to transistor parameter variations.

For instance, in a common-emitter amplifier configuration with voltage divider bias, the AC emitter resistance ($r_e$) is part of the overall AC equivalent circuit. The DC bias determines the quiescent emitter current ($I_E$), which in turn sets the value of $r_e = V_T / I_E$, where $V_T$ is the thermal voltage (approximately 25mV at room temperature). A stable $I_E$ leads to a stable $r_e$, directly impacting the amplifier's AC gain and input/output impedances.

## 3. Voltage Divider Bias for PNP Transistors

The same principles apply to PNP transistors, with the polarities of voltages and currents reversed.

**Circuit Configuration:**

```
      GND
       |
       Rc
       |
    C--+--Vce
       |
    Q1 (PNP)
   /     \
  B-------R2----Vcc
  |       |
  Rb1     Re
  |       |
 GND     GND
```

**Analysis:**
*   $V_{BB}$ will be negative with respect to ground.
*   $I_E$ will flow out of the emitter.
*   $V_{BE}$ will be positive for the base relative to the emitter (or negative for emitter relative to base).
*   $V_{CE}$ will be negative.

**Thévenin Equivalent:**
$V_{BB} = V_{cc} \times \frac{R_1}{R_1 + R_2}$ (voltage divider between $V_{cc}$ and GND, $R_1$ and $R_2$ swapped compared to NPN with respect to polarity)
$R_{BB} = R_1 || R_2$

**Base-Emitter Loop (KVL from $V_{BB}$ to $V_{cc}$):**
$V_{BB} + I_B R_{BB} + V_{EB} + I_E R_e = V_{cc}$
*(Note: $V_{EB} = -V_{BE}$, and $V_{BE}$ is usually considered positive when the base is more positive than the emitter for NPN, so $V_{EB}$ would be positive for PNP)*

Let's consider KVL from emitter to base:
$I_E R_e + V_{EB} + I_B R_{BB} = V_{BB}$
$I_E R_e + V_{BE} + I_B R_{BB} = V_{BB}$ (using $V_{BE}$ as the magnitude for PNP as well, meaning $V_B - V_E$)

With $I_B = I_E / (\beta+1)$:
$I_E R_e + V_{BE} + \frac{I_E}{\beta+1} R_{BB} = V_{BB}$
$I_E \left( R_e + \frac{R_{BB}}{\beta+1} \right) = V_{BB} - V_{BE}$
$I_E = \frac{V_{BB} - V_{BE}}{R_e + \frac{R_{BB}}{\beta+1}}$

**Collector Voltage:**
$V_{CE} = V_c - V_E$
$V_E = I_E R_e$
$V_C = V_{cc} - I_C R_c$
$V_{CE} = V_{cc} - I_C R_c - I_E R_e$

**Textbook Reference:** The principles of PNP biasing are consistent with NPN biasing, as discussed in **Bell, Chapter 3**, where both types of transistors are covered.

## 4. Practice Questions and Exercises

1.  **(CO1: K4)** For the given NPN BJT voltage divider bias circuit with $V_{cc} = 12V$, $R_1 = 33k\Omega$, $R_2 = 6.8k\Omega$, $R_c = 1.5k\Omega$, $R_e = 0.47k\Omega$, and $\beta = 120$. Assume $V_{BE} = 0.7V$.
    a.  Calculate the Thévenin equivalent voltage ($V_{BB}$) and resistance ($R_{BB}$) seen at the base.
    b.  Calculate the quiescent emitter current ($I_E$) and collector current ($I_C$).
    c.  Determine the collector-emitter voltage ($V_{CE}$).
    d.  Is the transistor operating in the active region? Justify your answer.

2.  **(CO1: K4)** Design a voltage divider bias circuit for an NPN transistor with the following specifications: $V_{cc} = 18V$, desired $I_C \approx 5mA$, desired $V_{CE} \approx 7V$, and $\beta = 150$. Choose values for $R_1$, $R_2$, $R_c$, and $R_e$ that provide good stability.

3.  **(CO1: K4)** How does the value of the emitter resistor ($R_e$) affect the stability of the Q-point in a voltage divider bias circuit?

4.  **(CO1: K4)** If $R_2$ in a voltage divider bias circuit is increased, how does this affect $V_{BB}$ and the stability of the bias circuit?

## 5. Answers to Practice Questions

1.  **Solution:**
    a.  $V_{BB} = 12V \times \frac{6.8k\Omega}{33k\Omega + 6.8k\Omega} = 12V \times \frac{6.8}{39.8} \approx 2.05V$
        $R_{BB} = 33k\Omega || 6.8k\Omega = \frac{33 \times 6.8}{33 + 6.8} k\Omega = \frac{224.4}{39.8} k\Omega \approx 5.64k\Omega$

    b.  Using the accurate formula:
        $I_E = \frac{V_{BB} - V_{BE}}{\frac{R_{BB}}{\beta + 1} + R_e} = \frac{2.05V - 0.7V}{\frac{5.64k\Omega}{120 + 1} + 0.47k\Omega} = \frac{1.35V}{46.6\Omega + 470\Omega} = \frac{1.35V}{516.6\Omega} \approx 2.61mA$
        $I_C = \alpha I_E = \frac{120}{121} \times 2.61mA \approx 2.59mA$

    c.  $V_{CE} = V_{cc} - I_C R_c - I_E R_e$
        $V_{CE} = 12V - (2.59mA)(1.5k\Omega) - (2.61mA)(0.47k\Omega)$
        $V_{CE} = 12V - 3.885V - 1.227V \approx 6.89V$

    d.  Yes, the transistor is operating in the active region because $V_{CE} > V_{CE(sat)}$ and $I_C > 0$. $V_{CE} \approx 6.89V$ is significantly larger than the typical saturation voltage $V_{CE(sat)} \approx 0.2V$.

2.  **Design Approach (Illustrative, there are multiple valid solutions):**
    *   Let's choose $R_e$ to set a good emitter voltage, say $V_E \approx 1.5V$.
        $I_E \approx I_C = 5mA$.
        $R_e = V_E / I_E = 1.5V / 5mA = 300\Omega$. (Choose a standard value like $330\Omega$).
    *   Assume $V_{BE} = 0.7V$. Then $V_{BB} = V_E + V_{BE} = 1.5V + 0.7V = 2.2V$.
    *   To ensure stability, let the current through $R_2$ be about 10 times the base current.
        $I_B = I_C / \beta = 5mA / 150 = 0.033mA$.
        So, $I_{R2} \approx 10 \times 0.033mA = 0.33mA$.
    *   $R_2 = V_{BB} / I_{R2} = 2.2V / 0.33mA \approx 6.67k\Omega$. (Choose a standard value like $6.8k\Omega$).
    *   Now determine $R_1$. $V_{BB} = V_{cc} \times \frac{R_2}{R_1 + R_2}$.
        $2.2V = 18V \times \frac{6.8k\Omega}{R_1 + 6.8k\Omega}$
        $\frac{2.2}{18} = \frac{6.8}{R_1 + 6.8}$
        $0.122 \approx \frac{6.8}{R_1 + 6.8}$
        $R_1 + 6.8 \approx \frac{6.8}{0.122} \approx 55.7k\Omega$
        $R_1 \approx 55.7k\Omega - 6.8k\Omega = 48.9k\Omega$. (Choose a standard value like $47k\Omega$ or $51k\Omega$). Let's choose $R_1 = 51k\Omega$.
    *   Calculate $R_c$:
        $V_{CE} = V_{cc} - I_C R_c - I_E R_e$
        $7V = 18V - (5mA) R_c - (5mA)(330\Omega)$
        $7V = 18V - 5mA R_c - 1.65V$
        $5mA R_c = 18V - 1.65V - 7V = 9.35V$
        $R_c = \frac{9.35V}{5mA} = 1.87k\Omega$. (Choose a standard value like $1.8k\Omega$ or $2k\Omega$). Let's choose $R_c = 1.8k\Omega$.

    **Final Design Values (Example):** $R_1 = 51k\Omega$, $R_2 = 6.8k\Omega$, $R_c = 1.8k\Omega$, $R_e = 330\Omega$.
    *(It's good practice to re-calculate the Q-point with these standard values to ensure it's close to the target).*

3.  **Answer:** The emitter resistor ($R_e$) is the primary component responsible for stabilizing the emitter current against variations in $\beta$ and $V_{BE}$. A larger $R_e$ provides more negative feedback. If $I_E$ tends to increase (due to increased $\beta$ or $V_{BE}$), the voltage drop $I_E R_e$ increases. This increased emitter voltage then reduces the base-emitter voltage ($V_{BE}$), which in turn counteracts the initial increase in $I_E$. Conversely, if $I_E$ tends to decrease, $R_e$ helps to maintain it. Thus, a larger $R_e$ improves stability.

4.  **Answer:** If $R_2$ is increased in a voltage divider bias circuit:
    *   **$V_{BB}$ will increase.** This is because the voltage divider ratio ($R_2 / (R_1 + R_2)$) increases.
    *   **Stability will generally improve** *if* the original design had insufficient current through $R_2$ relative to $I_B$. A larger $R_2$ (or smaller $R_1$) leads to a larger current $I_{R2}$ flowing through the voltage divider. This makes the base voltage ($V_{BB}$) less sensitive to changes in the base current ($I_B$), which is a key factor in the stability of the Q-point. However, if $R_2$ becomes too large, it can lead to a very small $V_{BB}$, potentially biasing the transistor out of the active region or requiring a very small $R_e$ which reduces stability.

## 6. Important Points to Remember

*   **Q-Point:** The DC operating point ($I_C$, $V_{CE}$) is crucial for transistor operation.
*   **Stability:** Voltage divider bias provides superior stability compared to fixed bias due to the emitter resistor ($R_e$) and the $\beta$-independent base voltage set by $R_1$ and $R_2$.
*   **Thévenin Equivalent:** Simplifying the base biasing network using Thévenin's theorem makes analysis much easier.
*   **Approximations:** For stable circuits ($R_e$ is large), $I_E \approx (V_{BB} - V_{BE}) / R_e$ is a useful simplification. Also, $I_C \approx I_E$ is often used for large $\beta$.
*   **Design Trade-offs:** Choosing resistor values involves balancing stability requirements, power dissipation, and desired output voltage swing.
*   **Role in Filters:** A stable bias point ensures that the AC behavior of the transistor (e.g., its transconductance $g_m$ or small-signal emitter resistance $r_e$, which are dependent on $I_E$) is predictable, which is essential when designing filters or amplifiers that incorporate RC networks.

## 7. Alignment with Course Outcomes

*   **CO1: Design and analyze the RC circuits and BJT biasing circuits (Knowledge Level: K4)**
    This topic directly addresses the analysis of BJT biasing circuits (voltage divider bias). While RC wave-shaping circuits are mentioned in the module title, understanding stable BJT biasing is a prerequisite for analyzing any BJT-based filter or amplifier circuit that would incorporate RC elements. The ability to calculate Q-point parameters ($I_C, V_{CE}$) demonstrates the K4 (Analysis) level of understanding.

This module provides the foundational knowledge for subsequent topics in solid-state devices, especially when BJTs are used in amplifier or filter configurations that rely on a stable operating point.
