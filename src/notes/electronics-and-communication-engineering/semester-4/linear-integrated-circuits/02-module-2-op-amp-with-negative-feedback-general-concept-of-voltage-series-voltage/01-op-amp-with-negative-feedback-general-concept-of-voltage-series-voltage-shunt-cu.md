---
title: "Op Amp with negative feedback:  General concept of Voltage Series, Voltage Shunt, Current Series and Current Shunt negative feedback, Op Amp circuits with Voltage Series and Voltage Shunt feedback, Virtual ground concept."
subject: "LINEAR INTEGRATED CIRCUITS"
module: "Module 2: Op Amp with negative feedback:  General concept of Voltage Series, Voltage Shunt, Current Series and Current Shunt negative feedback, Op Amp circuits with Voltage Series and Voltage Shunt feedback, Virtual ground concept."
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe56c"
status: "completed"
scrapedAt: "2026-05-23T17:49:42.923Z"
---
# Module 2: Op Amp with Negative Feedback: General Concept and Circuits

This module delves into the fundamental concept of negative feedback and its application with operational amplifiers (op-amps). We will explore different types of feedback configurations and analyze common op-amp circuits that utilize negative feedback. Understanding these concepts is crucial for designing and analyzing a wide range of analog circuits.

---

## 1. General Concept of Negative Feedback

Negative feedback is a technique where a portion of the output signal is fed back to the inverting input of the op-amp. This reduces the overall gain but significantly improves the stability, linearity, and bandwidth of the circuit.

**Key Concepts:**

*   **Feedback:** The process of feeding a portion of the output signal back to the input.
*   **Negative Feedback:** When the fed-back signal opposes the original input signal.
*   **Overall Gain (Closed-loop Gain):** The gain of the amplifier circuit with feedback.
*   **Gain with Feedback ($A_{FB}$):**  $A_{FB} = \frac{A_{OL}}{1 + A_{OL}\beta}$, where $A_{OL}$ is the open-loop gain of the op-amp and $\beta$ is the feedback factor.
*   **Loop Gain:** $A_{OL}\beta$.

**Advantages of Negative Feedback (as discussed in Roy D. C. & S. B. Jain, Chapter 7):**

*   **Reduced Gain:** While seemingly a disadvantage, this allows for predictable and controllable gain.
*   **Increased Bandwidth:** The circuit can amplify signals over a wider range of frequencies.
*   **Reduced Distortion:** Non-linearities in the op-amp are minimized.
*   **Increased Input Impedance (for Voltage Series and Current Series):** Makes the circuit less loading to the source.
*   **Decreased Output Impedance (for Voltage Series and Voltage Shunt):** Makes the circuit a better voltage source.
*   **Stabilization of Gain:** The closed-loop gain becomes largely independent of the op-amp's open-loop gain and temperature variations.

**Disadvantages of Negative Feedback:**

*   **Reduced Gain:** The primary trade-off.
*   **Potential for Instability:** If not designed properly, feedback can lead to oscillations.

---

## 2. Types of Negative Feedback Configurations

Negative feedback can be applied in four fundamental ways, categorized by whether the fed-back signal is a *voltage* or a *current*, and whether it is applied *in series* or *in shunt* with the input signal.

### 2.1. Voltage Series Feedback

*   **Description:** A *fraction of the output voltage* is sampled and *in series* with the input voltage signal.
*   **Purpose:** To decrease the closed-loop gain, increase input impedance, and decrease output impedance.
*   **Ideal Characteristics:**
    *   **Input:** Voltage is sampled.
    *   **Feedback:** In series with the input signal.
*   **Effect on Parameters:**
    *   Input Impedance ($Z_{in(FB)}$): Increases ($Z_{in(FB)} \approx \beta R_{in(OL)}$).
    *   Output Impedance ($Z_{out(FB)}$): Decreases ($Z_{out(FB)} \approx \frac{R_{out(OL)}}{1 + A_{OL}\beta}$).
    *   Gain ($A_{v(FB)}$): Decreases ($A_{v(FB)} \approx \frac{1}{\beta}$).
    *   Bandwidth: Increases.
*   **Common Circuits:** Non-inverting amplifier, voltage follower.
*   **Referenced in:** Roy D. C. & S. B. Jain (Chapter 7), Sergio Franco (Chapter 5).

### 2.2. Voltage Shunt Feedback

*   **Description:** A *fraction of the output voltage* is sampled and *in parallel (shunt)* with the input current signal.
*   **Purpose:** To decrease the closed-loop gain, decrease input impedance, and decrease output impedance.
*   **Ideal Characteristics:**
    *   **Input:** Voltage is sampled.
    *   **Feedback:** In shunt (parallel) with the input signal.
*   **Effect on Parameters:**
    *   Input Impedance ($Z_{in(FB)}$): Decreases ($Z_{in(FB)} \approx \frac{R_{in(OL)}}{1 + A_{OL}\beta}$).
    *   Output Impedance ($Z_{out(FB)}$): Decreases ($Z_{out(FB)} \approx \frac{R_{out(OL)}}{1 + A_{OL}\beta}$).
    *   Gain ($A_{i(FB)}$): Decreases ($A_{i(FB)} \approx \frac{1}{\beta R_{out(OL)}}$).
    *   Bandwidth: Increases.
*   **Common Circuits:** Inverting amplifier, transconductance amplifier.
*   **Referenced in:** Roy D. C. & S. B. Jain (Chapter 7), Sergio Franco (Chapter 5).

### 2.3. Current Series Feedback

*   **Description:** A *fraction of the output current* is sampled and *in series* with the input voltage signal.
*   **Purpose:** To decrease the closed-loop gain, increase input impedance, and increase output impedance.
*   **Ideal Characteristics:**
    *   **Input:** Current is sampled.
    *   **Feedback:** In series with the input signal.
*   **Effect on Parameters:**
    *   Input Impedance ($Z_{in(FB)}$): Increases ($Z_{in(FB)} \approx \beta R_{in(OL)}$).
    *   Output Impedance ($Z_{out(FB)}$): Increases ($Z_{out(FB)} \approx R_{out(OL)}(1 + A_{OL}\beta)$).
    *   Gain ($A_{v(FB)}$): Decreases ($A_{v(FB)} \approx \frac{R_{out(FB)}}{\beta R_{in(OL)}}$).
    *   Bandwidth: Increases.
*   **Common Circuits:** Transresistance amplifier.
*   **Referenced in:** Sergio Franco (Chapter 5).

### 2.4. Current Shunt Feedback

*   **Description:** A *fraction of the output current* is sampled and *in parallel (shunt)* with the input current signal.
*   **Purpose:** To decrease the closed-loop gain, decrease input impedance, and increase output impedance.
*   **Ideal Characteristics:**
    *   **Input:** Current is sampled.
    *   **Feedback:** In shunt (parallel) with the input signal.
*   **Effect on Parameters:**
    *   Input Impedance ($Z_{in(FB)}$): Decreases ($Z_{in(FB)} \approx \frac{R_{in(OL)}}{1 + A_{OL}\beta}$).
    *   Output Impedance ($Z_{out(FB)}$): Increases ($Z_{out(FB)} \approx R_{out(OL)}(1 + A_{OL}\beta)$).
    *   Gain ($A_{i(FB)}$): Decreases ($A_{i(FB)} \approx \frac{1}{\beta}$).
    *   Bandwidth: Increases.
*   **Common Circuits:** Current amplifier.
*   **Referenced in:** Sergio Franco (Chapter 5).

---

## 3. Op Amp Circuits with Voltage Series and Voltage Shunt Feedback

Op-amps are typically used with voltage feedback configurations because they are primarily voltage-amplifying devices.

### 3.1. Op Amp Circuits with Voltage Series Feedback

#### 3.1.1. Non-Inverting Amplifier

*   **Circuit Diagram:** (Draw or describe a typical non-inverting amplifier circuit with an op-amp, input resistor $R_1$ connected from the inverting input to ground, and feedback resistor $R_f$ connected from the output to the inverting input.)
*   **Operation:** The input voltage $V_{in}$ is applied to the non-inverting input. A portion of the output voltage $V_{out}$ is fed back to the inverting input through a voltage divider formed by $R_1$ and $R_f$.
*   **Feedback Factor ($\beta$):** The voltage divider is formed by $R_1$ and $R_f$. The feedback voltage is taken across $R_1$.
    $$ \beta = \frac{R_1}{R_1 + R_f} $$
*   **Closed-Loop Voltage Gain ($A_{v(FB)}$):**
    $$ A_{v(FB)} = \frac{V_{out}}{V_{in}} = \frac{1}{\beta} = \frac{R_1 + R_f}{R_1} = 1 + \frac{R_f}{R_1} $$
*   **Input Impedance ($Z_{in(FB)}$):** Very high, ideally infinite. Practically, it's the input impedance of the op-amp's non-inverting terminal ($Z_{in(OL)}$).
    $$ Z_{in(FB)} \approx Z_{in(OL)} $$
*   **Output Impedance ($Z_{out(FB)}$):** Very low, ideally zero.
    $$ Z_{out(FB)} \approx \frac{R_{out(OL)}}{1 + A_{OL}\beta} $$
*   **Key Features:**
    *   Output is in phase with the input.
    *   Gain can be precisely set by external resistors.
    *   High input impedance prevents loading of the source.
    *   Low output impedance provides a stable voltage source to the load.
*   **Referenced in:** Roy D. C. & S. B. Jain (Chapter 7), Gayakwad R. A. (Chapter 4).
*   **Learning Outcome Alignment:** CO1, CO2, CO3.

#### 3.1.2. Voltage Follower (Buffer)

*   **Circuit Diagram:** (Draw or describe an op-amp with the input connected to the non-inverting input, and the output directly connected to the inverting input. The input signal is applied to the non-inverting input.)
*   **Operation:** The output voltage is directly fed back to the inverting input. This creates a feedback factor of $\beta = 1$.
*   **Closed-Loop Voltage Gain ($A_{v(FB)}$):**
    $$ A_{v(FB)} = 1 + \frac{R_f}{R_1} $$
    Since $R_f = 0$ (direct connection) and $R_1 = \infty$ (no $R_1$), or more practically, the feedback is direct.
    $$ A_{v(FB)} = 1 $$
*   **Input Impedance ($Z_{in(FB)}$):** Very high, ideally infinite.
    $$ Z_{in(FB)} \approx Z_{in(OL)} $$
*   **Output Impedance ($Z_{out(FB)}$):** Very low, ideally zero.
    $$ Z_{out(FB)} \approx \frac{R_{out(OL)}}{1 + A_{OL}} $$
*   **Key Features:**
    *   Gain of 1 (unity gain).
    *   Excellent impedance buffering: high input impedance, low output impedance.
    *   Used to isolate stages or drive low-impedance loads.
*   **Referenced in:** Roy D. C. & S. B. Jain (Chapter 7), Gayakwad R. A. (Chapter 4).
*   **Learning Outcome Alignment:** CO1, CO2, CO3.

### 3.2. Op Amp Circuits with Voltage Shunt Feedback

#### 3.2.1. Inverting Amplifier

*   **Circuit Diagram:** (Draw or describe a typical inverting amplifier circuit with an op-amp, input resistor $R_{in}$ connected from the inverting input to the input voltage source $V_{in}$, and feedback resistor $R_f$ connected from the output to the inverting input. The non-inverting input is connected to ground.)
*   **Operation:** The input voltage $V_{in}$ is applied through $R_{in}$ to the inverting input. The output voltage $V_{out}$ is fed back to the inverting input through $R_f$. The non-inverting input is grounded.
*   **Feedback Factor ($\beta$):** The feedback network is the feedback resistor $R_f$. However, the analysis is simpler by considering the virtual ground at the inverting input.
*   **Closed-Loop Voltage Gain ($A_{v(FB)}$):**
    $$ A_{v(FB)} = \frac{V_{out}}{V_{in}} = -\frac{R_f}{R_{in}} $$
*   **Input Impedance ($Z_{in(FB)}$):** Equal to the input resistor $R_{in}$ (due to the virtual ground at the inverting input).
    $$ Z_{in(FB)} = R_{in} $$
*   **Output Impedance ($Z_{out(FB)}$):** Very low, ideally zero.
    $$ Z_{out(FB)} \approx \frac{R_{out(OL)}}{1 + A_{OL}\beta} $$
    (Where $\beta$ here represents the feedback factor of the voltage divider if one were present, but for the inverting amp, it's simpler to analyze via virtual ground and realize the output impedance is reduced from the op-amp's inherent $R_{out(OL)}$).
*   **Key Features:**
    *   Output is 180 degrees out of phase with the input.
    *   Gain can be precisely set by external resistors.
    *   Input impedance is determined by the input resistor, which is generally lower than the non-inverting configuration.
*   **Referenced in:** Roy D. C. & S. B. Jain (Chapter 7), Gayakwad R. A. (Chapter 4).
*   **Learning Outcome Alignment:** CO1, CO2, CO3.

---

## 4. Virtual Ground Concept

The concept of a "virtual ground" is central to the analysis of many op-amp circuits, particularly the inverting amplifier. It arises from the high open-loop gain ($A_{OL}$) of the op-amp and the use of negative feedback.

**Key Concepts:**

*   **Definition:** A virtual ground is a node in a circuit that is held at approximately 0V (ground potential) due to the action of a negative feedback system, even though it is not directly connected to ground.
*   **How it Works (Inverting Amplifier):**
    1.  The op-amp's non-inverting input is connected to ground (0V).
    2.  The op-amp's output is connected back to the inverting input through a feedback resistor ($R_f$).
    3.  Because of the high open-loop gain ($A_{OL}$), the op-amp will adjust its output voltage ($V_{out}$) to keep the voltage difference between its inverting and non-inverting inputs ($V_{diff} = V_+ - V_-$) as close to zero as possible.
    4.  Since $V_+ = 0V$ (connected to ground), the op-amp forces $V_- \approx 0V$.
    5.  Therefore, the inverting input terminal ($V_-$) is held at approximately 0V, acting as a "virtual ground."
*   **Implications:**
    *   **No Current Flows into the Inverting Terminal:** Since the op-amp has a very high input impedance, ideally no current flows into the inverting terminal.
    *   **Current Through Input Resistor:** The current flowing through the input resistor ($R_{in}$) is given by $I_{in} = \frac{V_{in} - V_-}{R_{in}}$. Since $V_- \approx 0V$, $I_{in} \approx \frac{V_{in}}{R_{in}}$.
    *   **Current Through Feedback Resistor:** Due to the no-current-into-the-op-amp rule, this current ($I_{in}$) must flow through the feedback resistor ($R_f$). Thus, $I_{out} = I_{in}$.
    *   **Output Voltage:** The output voltage is then determined by $V_{out} = V_- - I_{out}R_f$. Since $V_- \approx 0V$ and $I_{out} \approx \frac{V_{in}}{R_{in}}$, we get $V_{out} \approx -\frac{V_{in}}{R_{in}}R_f = -V_{in}\frac{R_f}{R_{in}}$, leading to the inverting amplifier gain formula.
*   **Referenced in:** Roy D. C. & S. B. Jain (Chapter 7), Gayakwad R. A. (Chapter 4), Sergio Franco (Chapter 2).
*   **Learning Outcome Alignment:** CO1, CO2.

---

## 5. Practice Questions and Exercises

**Instructions:** Solve the following problems. Show your work and state your assumptions.

**Question 1:**
For a non-inverting amplifier circuit with $R_1 = 10k\Omega$ and $R_f = 100k\Omega$, calculate:
a) The closed-loop voltage gain.
b) The feedback factor $\beta$.
c) If the op-amp has an open-loop gain of $2 \times 10^5$ and output resistance of $75\Omega$, what is the approximate output resistance of the non-inverting amplifier circuit?

**Question 2:**
An inverting amplifier is constructed with an op-amp having an open-loop gain of $10^5$. The input resistor $R_{in}$ is $20k\Omega$ and the feedback resistor $R_f$ is $200k\Omega$. The input voltage is $10mV$.
a) Calculate the closed-loop voltage gain.
b) Calculate the output voltage.
c) What is the approximate voltage at the inverting terminal of the op-amp?

**Question 3:**
Describe the primary purpose of a voltage follower circuit and explain why it is considered a voltage series feedback configuration.

**Question 4:**
True or False: The input impedance of an inverting amplifier is ideally infinite. Justify your answer.

**Question 5:**
Explain the impact of increasing the feedback resistor ($R_f$) in a non-inverting amplifier on its:
a) Closed-loop voltage gain.
b) Input impedance.
c) Output impedance.

---

## 6. Answers to Practice Questions

**Answer 1:**
a) Closed-loop voltage gain ($A_{v(FB)}$):
$A_{v(FB)} = 1 + \frac{R_f}{R_1} = 1 + \frac{100k\Omega}{10k\Omega} = 1 + 10 = 11$

b) Feedback factor ($\beta$):
$\beta = \frac{R_1}{R_1 + R_f} = \frac{10k\Omega}{10k\Omega + 100k\Omega} = \frac{10}{110} = \frac{1}{11}$

c) Approximate output resistance ($Z_{out(FB)}$):
$Z_{out(FB)} \approx \frac{R_{out(OL)}}{1 + A_{OL}\beta} = \frac{75\Omega}{1 + (2 \times 10^5) \times (1/11)} = \frac{75\Omega}{1 + 18181.8} \approx \frac{75\Omega}{18182.8} \approx 0.0041\Omega$

**Answer 2:**
a) Closed-loop voltage gain ($A_{v(FB)}$):
$A_{v(FB)} = -\frac{R_f}{R_{in}} = -\frac{200k\Omega}{20k\Omega} = -10$

b) Output voltage ($V_{out}$):
$V_{out} = A_{v(FB)} \times V_{in} = -10 \times 10mV = -100mV$

c) Voltage at the inverting terminal ($V_-$):
Due to the virtual ground concept, the voltage at the inverting terminal is approximately equal to the voltage at the non-inverting terminal, which is connected to ground (0V).
$V_- \approx 0V$

**Answer 3:**
The primary purpose of a voltage follower circuit is to provide **impedance buffering**. It has a very high input impedance, so it draws negligible current from the source, and a very low output impedance, enabling it to drive loads without significant voltage drop. It is considered a voltage series feedback configuration because a fraction of the output *voltage* is fed back *in series* with the input voltage. In this specific case, the entire output voltage is fed back to the inverting input, resulting in a unity gain.

**Answer 4:**
**False**. The input impedance of an inverting amplifier is ideally equal to the input resistor ($R_{in}$), not infinite. This is because the input signal is applied through $R_{in}$ to the inverting input, which is a virtual ground. Therefore, the input current is determined by $V_{in}/R_{in}$, making the input impedance $R_{in}$. The op-amp's own input impedance is very high, but it doesn't directly contribute to the circuit's input impedance in the inverting configuration.

**Answer 5:**
In a non-inverting amplifier with $A_{v(FB)} = 1 + \frac{R_f}{R_1}$:
a) **Closed-loop voltage gain:** Increasing $R_f$ will **increase** the closed-loop voltage gain.
b) **Input impedance:** The input impedance of a non-inverting amplifier is approximately the op-amp's input impedance ($Z_{in(OL)}$), which is very high and largely unaffected by $R_f$. So, it **remains very high**.
c) **Output impedance:** The output impedance is approximately $Z_{out(FB)} \approx \frac{R_{out(OL)}}{1 + A_{OL}\beta}$. Increasing $R_f$ increases $\beta$ (since $\beta = R_1/(R_1+R_f)$). This, in turn, makes the denominator larger, thus **decreasing** the output impedance.

---

## 7. Important Points to Remember

*   **Negative Feedback is Key:** Always remember that negative feedback is what makes op-amp circuits stable, predictable, and linear.
*   **Virtual Ground Rule:** For inverting op-amp configurations, the inverting input terminal is at a virtual ground (0V).
*   **Ideal Op-Amp Assumptions:** When analyzing circuits, remember the ideal op-amp assumptions: infinite open-loop gain, infinite input impedance, and zero output impedance. These simplify calculations significantly.
*   **Feedback Factor $\beta$:** The accuracy of the closed-loop gain often depends on the accuracy of the feedback network, which determines $\beta$.
*   **Types of Feedback:** Understand the four types of feedback (voltage series, voltage shunt, current series, current shunt) and their effect on input/output impedances and gain. Op-amps primarily utilize voltage feedback.
*   **Gain vs. Other Parameters:** Negative feedback trades gain for improved linearity, stability, and bandwidth.

---

## 8. Alignment with Course Outcomes

*   **CO1: Summarize the concepts of operational amplifiers and differential amplifier configurations (Knowledge Level: K2)**
    *   This module directly addresses the concepts of op-amp operation with negative feedback, including the fundamental idea of how feedback improves performance. The virtual ground concept is a key op-amp principle.
*   **CO2: Design operational amplifier circuits for various applications. (Knowledge Level: K3)**
    *   Understanding non-inverting and inverting amplifier configurations allows for basic circuit design. The ability to calculate gain and impedance is fundamental to designing circuits for specific purposes.
*   **CO3: Choose integrated circuit chips for various linear circuit applications. (Knowledge Level: K2)**
    *   Knowledge of the characteristics imparted by negative feedback (e.g., high input impedance for non-inverting amplifiers) helps in selecting appropriate op-amp ICs for given applications. For instance, if a high input impedance is required, a non-inverting configuration is preferred.

---
This concludes Module 2 notes. Further study of specific applications and analysis of more complex circuits will build upon these foundational concepts.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
