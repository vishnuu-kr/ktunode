---
title: "Analysis of inverting and non-inverting amplifier for closed loop gain"
subject: "LINEAR INTEGRATED CIRCUITS"
module: "Module 2: Op Amp with negative feedback:  General concept of Voltage Series, Voltage Shunt, Current Series and Current Shunt negative feedback, Op Amp circuits with Voltage Series and Voltage Shunt feedback, Virtual ground concept."
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe56d"
status: "completed"
scrapedAt: "2026-05-23T17:49:43.643Z"
---
# Linear Integrated Circuits: Module 2 - Op Amp with Negative Feedback

## Topic: Analysis of Inverting and Non-Inverting Amplifier for Closed Loop Gain

This module focuses on the fundamental application of operational amplifiers (op-amps) in negative feedback configurations, specifically exploring the analysis of inverting and non-inverting amplifier circuits to determine their closed-loop gain. We will also introduce the concept of the virtual ground and delve into the general categories of negative feedback.

---

### **1. Introduction to Negative Feedback in Op-Amp Circuits**

Negative feedback is a crucial technique used in amplifier design, including op-amp circuits. It involves feeding a portion of the output signal back to the input in such a way that it opposes the original input signal. This opposition reduces the overall gain but significantly improves other performance characteristics.

**Key Concepts:**

*   **Feedback:** The process of returning a portion of the output signal to the input.
*   **Negative Feedback:** The feedback signal is out of phase with the input signal, thus reducing the net input signal.
*   **Positive Feedback:** The feedback signal is in phase with the input signal, thus increasing the net input signal (often used in oscillators).

**Benefits of Negative Feedback (as discussed in Roy D. C. & S. B. Jain, Ch. 4):**

*   **Stabilizes Gain:** Makes the amplifier's gain less dependent on the op-amp's open-loop gain and external component variations.
*   **Increases Bandwidth:** Extends the frequency range over which the amplifier operates effectively.
*   **Reduces Distortion:** Minimizes non-linearities in the output signal.
*   **Reduces Noise:** Decreases the impact of unwanted signals.
*   **Modifies Input and Output Impedances:** Can increase or decrease input and output impedances depending on the feedback type.

---

### **2. General Concepts of Negative Feedback Topologies**

Negative feedback can be broadly classified into four basic topologies based on how the feedback signal is sampled from the output and how it is mixed with the input signal.

**Key Concepts:**

*   **Voltage Sampling:** A fraction of the output *voltage* is fed back.
*   **Current Sampling:** A fraction of the output *current* is fed back.
*   **Series Mixing:** The feedback signal is added *in series* with the input signal, affecting the input voltage.
*   **Shunt Mixing:** The feedback signal is added *in parallel* (shunt) with the input signal, affecting the input current.

**The Four Basic Negative Feedback Topologies:**

1.  **Voltage Series Feedback (Series-Voltage Feedback):**
    *   **Sampling:** Output voltage is sampled.
    *   **Mixing:** Feedback is in series with the input voltage.
    *   **Effect:** **Decreases** input impedance, **decreases** output impedance.
    *   **Example Application:** Non-inverting amplifier.
    *   **(Reference: Gayakwad R. A., Ch. 3; Sedra & Smith, Ch. 7)**

2.  **Voltage Shunt Feedback (Shunt-Voltage Feedback):**
    *   **Sampling:** Output voltage is sampled.
    *   **Mixing:** Feedback is in parallel (shunt) with the input current.
    *   **Effect:** **Increases** input impedance, **increases** output impedance.
    *   **Example Application:** Current-to-voltage converter (transimpedance amplifier).
    *   **(Reference: Gayakwad R. A., Ch. 3; Sedra & Smith, Ch. 7)**

3.  **Current Series Feedback (Series-Current Feedback):**
    *   **Sampling:** Output current is sampled.
    *   **Mixing:** Feedback is in series with the input voltage.
    *   **Effect:** **Decreases** input impedance, **increases** output impedance.
    *   **Example Application:** Voltage-to-current converter.
    *   **(Reference: Gayakwad R. A., Ch. 3; Sedra & Smith, Ch. 7)**

4.  **Current Shunt Feedback (Shunt-Current Feedback):**
    *   **Sampling:** Output current is sampled.
    *   **Mixing:** Feedback is in parallel (shunt) with the input current.
    *   **Effect:** **Increases** input impedance, **decreases** output impedance.
    *   **Example Application:** Current amplifier.
    *   **(Reference: Gayakwad R. A., Ch. 3; Sedra & Smith, Ch. 7)**

---

### **3. Op Amp Circuits with Voltage Series and Voltage Shunt Feedback**

This section focuses on the practical implementation and analysis of circuits utilizing these two common feedback topologies.

#### **3.1 Op Amp Circuits with Voltage Series Feedback**

**3.1.1 Non-Inverting Amplifier**

The non-inverting amplifier uses negative voltage feedback where the output voltage is sampled and fed back in series with the input voltage.

**Circuit Diagram:**

```
      R1
Vin ---/\/\/---+----- Output (Vo)
              |     |
             R2    ---
              |     |
             -o-----o- Op Amp (+) Input
             |
             GND
```

**Analysis for Closed-Loop Gain:**

We assume an **ideal op-amp** for this analysis, meaning:
*   Infinite open-loop gain ($A_{OL}$).
*   Infinite input impedance ($Z_{in} = \infty$).
*   Zero output impedance ($Z_{out} = 0$).

1.  **Virtual Short Concept (for negative feedback):** Due to the infinite open-loop gain, the op-amp will adjust its output to make the voltage difference between its inverting (-) and non-inverting (+) inputs zero.
    *   $V_+ = V_-$

2.  **Input Stage:** The input voltage $V_{in}$ is applied directly to the non-inverting (+) input.
    *   $V_+ = V_{in}$

3.  **Feedback Network:** The output voltage $V_o$ is divided by resistors $R1$ and $R2$. The voltage at the inverting (-) input ($V_-$) is the voltage across $R2$.
    *   Using the voltage divider rule: $V_- = V_o \times \frac{R2}{R1 + R2}$

4.  **Applying Virtual Short:** Since $V_+ = V_-$, we have:
    *   $V_{in} = V_o \times \frac{R2}{R1 + R2}$

5.  **Closed-Loop Voltage Gain ($A_v$):** Rearranging the equation to find the gain ($V_o / V_{in}$):
    *   $A_v = \frac{V_o}{V_{in}} = \frac{R1 + R2}{R2} = 1 + \frac{R1}{R2}$

**Key Observations:**

*   The closed-loop gain is determined solely by the ratio of external resistors $R1$ and $R2$. It is independent of the op-amp's open-loop gain.
*   The gain is always greater than or equal to 1.
*   **Input Impedance ($Z_{in}$):** Since the input signal is applied directly to the non-inverting input of the op-amp, and the op-amp has infinite input impedance, the input impedance of the non-inverting amplifier circuit is **ideally infinite**. In reality, it is very high, equal to the op-amp's input impedance.
*   **Output Impedance ($Z_{out}$):** Due to negative feedback, the output impedance is significantly reduced from the op-amp's open-loop output impedance. For an ideal op-amp ($Z_{out} = 0$), the circuit's output impedance is also **ideally zero**.

**Example:**

If $R1 = 10 \, \text{k}\Omega$ and $R2 = 1 \, \text{k}\Omega$, the closed-loop gain is:
$A_v = 1 + \frac{10 \, \text{k}\Omega}{1 \, \text{k}\Omega} = 1 + 10 = 11$

This means that for every 1V input, the output will be 11V.

**Important Point to Remember:** The non-inverting amplifier provides a voltage gain greater than or equal to 1 and has a very high input impedance.

**(Reference: Roy D. C. & S. B. Jain, Ch. 4; Gayakwad R. A., Ch. 3; Sedra & Smith, Ch. 7)**

---

#### **3.2 Op Amp Circuits with Voltage Shunt Feedback**

**3.2.1 Inverting Amplifier**

The inverting amplifier uses negative voltage feedback where the output voltage is sampled and fed back in parallel (shunt) with the input signal through resistor $R_f$.

**Circuit Diagram:**

```
      R1
Vin ---/\/\/---+----- Vo
              |     |
             (-)----+
              |
             (+)----- GND
              |
             GND
```
*(Note: The output is fed back to the inverting terminal through Rf. The diagram above incorrectly shows Rf connected directly. The correct connection for an inverting amplifier is shown below)*

**Correct Circuit Diagram for Inverting Amplifier:**

```
      R1
Vin ---/\/\/----o----- (-) Input --+----- Vo
                   |              |
                   Rf             |
                   |              |
                   +--------------+
                   |
                  (+) Input ----- GND
                   |
                  GND
```

**Analysis for Closed-Loop Gain:**

Again, assuming an **ideal op-amp**.

1.  **Virtual Short Concept:** $V_+ = V_-$

2.  **Input Stage:** The non-inverting (+) input is connected to ground.
    *   $V_+ = 0$

3.  **Virtual Ground Concept:** Due to the virtual short, the inverting (-) input is also at the same potential as the non-inverting input. Therefore, the inverting input is at virtual ground.
    *   $V_- = V_+ = 0$

4.  **Input Current ($I_{in}$):** The input current flows through $R1$. Using Ohm's Law:
    *   $I_{in} = \frac{V_{in} - V_-}{R1} = \frac{V_{in} - 0}{R1} = \frac{V_{in}}{R1}$

5.  **Feedback Current ($I_f$):** The feedback current flows through $R_f$ from the output to the inverting input.
    *   $I_f = \frac{V_o - V_-}{R_f} = \frac{V_o - 0}{R_f} = \frac{V_o}{R_f}$

6.  **Kirchhoff's Current Law (KCL) at the Inverting Input Node:** Since the op-amp's input impedance is infinite, no current flows into the op-amp's inverting input. Therefore, the input current must be equal to the feedback current.
    *   $I_{in} = I_f$
    *   $\frac{V_{in}}{R1} = \frac{V_o}{R_f}$

7.  **Closed-Loop Voltage Gain ($A_v$):** Rearranging the equation to find the gain ($V_o / V_{in}$):
    *   $A_v = \frac{V_o}{V_{in}} = -\frac{R_f}{R1}$

**Key Observations:**

*   The closed-loop gain is negative, indicating that the output signal is inverted with respect to the input signal.
*   The magnitude of the gain is determined by the ratio of the feedback resistor ($R_f$) to the input resistor ($R1$). It is independent of the op-amp's open-loop gain.
*   The gain can be less than, equal to, or greater than 1 (in magnitude).
*   **Input Impedance ($Z_{in}$):** The input impedance of the inverting amplifier is approximately equal to the input resistor $R1$, because the inverting input is at virtual ground.
*   **Output Impedance ($Z_{out}$):** Similar to the non-inverting amplifier, due to negative feedback, the output impedance is ideally **zero** for an ideal op-amp.

**Example:**

If $R1 = 10 \, \text{k}\Omega$ and $R_f = 100 \, \text{k}\Omega$, the closed-loop gain is:
$A_v = -\frac{100 \, \text{k}\Omega}{10 \, \text{k}\Omega} = -10$

This means that for every 1V input, the output will be -10V (inverted and amplified by 10).

**Important Point to Remember:** The inverting amplifier provides an inverted voltage gain whose magnitude is set by the resistor ratio and has an input impedance equal to $R1$.

**(Reference: Roy D. C. & S. B. Jain, Ch. 4; Gayakwad R. A., Ch. 3; Sedra & Smith, Ch. 7)**

---

### **4. Virtual Ground Concept**

The virtual ground is a critical concept for understanding op-amp circuits, particularly those with negative feedback configured as inverting amplifiers.

**Definition:**

A **virtual ground** is a node in a circuit that is held at a zero voltage potential (ground potential) by the action of a negative feedback loop, even though it is not physically connected to the ground.

**How it works in an Inverting Amplifier:**

1.  The non-inverting input ($V_+$) of the op-amp is connected to ground ($V_+ = 0$).
2.  The op-amp uses negative feedback to amplify the difference between its inputs ($V_{out\_open\_loop} = A_{OL} \times (V_+ - V_-)$).
3.  To maintain a closed-loop system with finite output, the op-amp adjusts its output to force the voltage difference between its inputs to zero ($V_+ - V_- = 0$).
4.  Since $V_+ = 0$, the op-amp output will adjust to make $V_- = 0$.
5.  This causes the inverting input node ($V_-$) to behave as if it were connected to ground, even though it is not directly connected. Hence, it's called a "virtual" ground.

**Consequences of Virtual Ground:**

*   **Determines Input Impedance:** In an inverting amplifier, the input impedance is determined by the resistor connected to the inverting input ($R1$), as the node is at virtual ground.
*   **Simplifies Analysis:** It allows us to apply Ohm's Law directly to calculate currents flowing into and out of the inverting input node without needing to consider the op-amp's complex internal circuitry.

**Example:**

In the inverting amplifier, the input current is $I_{in} = V_{in}/R1$. If the input voltage is 2V and R1 is 10k$\Omega$, the input current is $2V / 10k\Omega = 0.2mA$. This current flows from the input source through R1 to the inverting input node. Because this node is at virtual ground and no current enters the op-amp, this $0.2mA$ current must flow through the feedback resistor $R_f$.

**Important Point to Remember:** The virtual ground is a consequence of negative feedback and the high open-loop gain of the op-amp, forcing the inverting input to be at the same potential as the non-inverting input.

**(Reference: Roy D. C. & S. B. Jain, Ch. 4; Gayakwad R. A., Ch. 3; Clayton C.G., Ch. 3; Bell David A., Ch. 4)**

---

### **5. Practice Questions and Exercises**

**Question 1:**

For a non-inverting amplifier circuit with $R1 = 20 \, \text{k}\Omega$ and $R2 = 5 \, \text{k}\Omega$, what is the closed-loop voltage gain? If the input voltage is 0.5V, what is the output voltage?

**Answer:**
The closed-loop gain for a non-inverting amplifier is $A_v = 1 + \frac{R1}{R2}$.
$A_v = 1 + \frac{20 \, \text{k}\Omega}{5 \, \text{k}\Omega} = 1 + 4 = 5$.
Output voltage $V_o = A_v \times V_{in} = 5 \times 0.5V = 2.5V$.

---

**Question 2:**

An inverting amplifier is to be designed to provide a voltage gain of -20. If the feedback resistor $R_f$ is chosen as $200 \, \text{k}\Omega$, what should be the value of the input resistor $R1$? What is the input impedance of this amplifier?

**Answer:**
The closed-loop gain for an inverting amplifier is $A_v = -\frac{R_f}{R1}$.
Given $A_v = -20$ and $R_f = 200 \, \text{k}\Omega$:
$-20 = -\frac{200 \, \text{k}\Omega}{R1}$
$R1 = \frac{200 \, \text{k}\Omega}{20} = 10 \, \text{k}\Omega$.
The input impedance of an inverting amplifier is approximately equal to $R1$.
Input Impedance = $10 \, \text{k}\Omega$.

---

**Question 3:**

Explain why the inverting input terminal of an op-amp in an inverting amplifier configuration is called a "virtual ground".

**Answer:**
The inverting input terminal is not physically connected to ground. However, due to the op-amp's high open-loop gain and the negative feedback loop, the op-amp drives its output such that the voltage difference between its inverting (-) and non-inverting (+) inputs is virtually zero. Since the non-inverting input is connected to ground (0V), the inverting input also stays at 0V, behaving as if it were grounded. This node at 0V potential that is not physically connected to ground is called a virtual ground.

---

**Question 4:**

A student is designing an amplifier and wants a gain of +10 with a high input impedance. Which topology would they likely choose, and what would be the basic circuit configuration?

**Answer:**
The student should choose **Voltage Series Feedback**. The basic circuit configuration would be a **Non-Inverting Amplifier**. This configuration provides a positive voltage gain ($A_v = 1 + R1/R2$) and has a very high input impedance (ideally infinite).

---

### **6. Important Points to Remember**

*   **Ideal Op-Amp Assumptions:** For simplified analysis, we assume infinite open-loop gain, infinite input impedance, and zero output impedance.
*   **Negative Feedback Stabilizes:** It reduces gain but improves bandwidth, distortion, and noise.
*   **Non-Inverting Amplifier:**
    *   Topology: Voltage Series Feedback.
    *   Gain: $A_v = 1 + R1/R2$ (always $\geq 1$).
    *   Input Impedance: Very high (ideally infinite).
    *   Output Impedance: Very low (ideally zero).
*   **Inverting Amplifier:**
    *   Topology: Voltage Shunt Feedback.
    *   Gain: $A_v = -Rf/R1$ (inverted).
    *   Input Impedance: Equal to $R1$.
    *   Output Impedance: Very low (ideally zero).
*   **Virtual Ground:** Essential for inverting amplifier analysis. The inverting input is held at 0V without direct connection to ground.
*   **Practical Op-Amps:** Real op-amps have finite open-loop gain, finite input impedance, and non-zero output impedance. These non-idealities will affect the actual performance, but the derived formulas provide excellent approximations for many applications.

---

### **7. Alignment with Course Outcomes (COs) and Knowledge Levels (KLs)**

*   **CO1: Summarize the concepts of operational amplifiers and differential amplifier configurations (Knowledge Level: K2)**
    *   This module covers the fundamental concept of op-amps in negative feedback and specific configurations (inverting/non-inverting), contributing to K2 understanding.
*   **CO2: Design operational amplifier circuits for various applications. (Knowledge Level: K3)**
    *   By understanding the gain formulas and component selection for inverting and non-inverting amplifiers, students can begin to design circuits for specific gain requirements, contributing to K3.
*   **CO3: Choose integrated circuit chips for various linear circuit applications. (Knowledge Level: K2)**
    *   Understanding the performance characteristics (like input impedance and gain) of these basic configurations helps in selecting appropriate op-amp ICs for such applications.
*   **CO4: Implement various applications using specific integrated circuit chips (Knowledge Level: K3)**
    *   The analysis presented here is the foundation for implementing these amplifier circuits in practice using specific op-amp ICs.

---
This concludes the study notes for the analysis of inverting and non-inverting amplifiers for closed-loop gain in the context of op-amps with negative feedback.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
