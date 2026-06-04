---
title: "D/A Converters - R-2R ladder circuit"
subject: "LINEAR INTEGRATED CIRCUITS LAB"
module: "Module 2: Astable and Monostable multivibrator using Timer IC NE555"
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe8ac"
status: "completed"
scrapedAt: "2026-05-23T17:50:03.007Z"
---
# Linear Integrated Circuits Lab: Module 2 - Astable and Monostable Multivibrator using Timer IC NE555

## Topic: Digital-to-Analog (D/A) Converters - R-2R Ladder Circuit

**Introduction:**
This section focuses on understanding and implementing Digital-to-Analog (D/A) converters, specifically the R-2R ladder network. While the module title mentions the NE555 timer, the topic of D/A converters is a crucial aspect of understanding how digital signals can be converted into analog voltages, a concept often explored in linear IC labs. This topic aligns with designing and implementing circuits that interface digital and analog domains, contributing to CO1, CO2, and CO3.

---

### 1. Learning Outcomes Covered

This section will enable you to:

*   **Understand the fundamental principles of Digital-to-Analog conversion.**
*   **Learn the structure and operation of an R-2R ladder D/A converter.**
*   **Analyze the output voltage of an R-2R ladder D/A converter based on its digital input.**
*   **Design an R-2R ladder D/A converter for a specific number of bits.**
*   **Simulate the functioning of an R-2R ladder D/A converter using simulation tools (e.g., PSpice as per Rashid's textbook).**
*   **Troubleshoot common issues in R-2R ladder circuit implementation.**

---

### 2. Key Concepts and Definitions

*   **Digital-to-Analog Converter (D/A Converter or DAC):** A device that converts a digital signal (represented by discrete voltage levels or binary digits) into an analog signal (represented by a continuously varying voltage or current).
*   **Resolution:** The smallest change in analog output that can be produced by a change in the digital input. It is typically expressed as a fraction of the full-scale output or in bits. For an n-bit DAC, the resolution is typically $1/2^n$ of the full-scale output.
*   **Quantization Error:** The difference between the actual analog value and the closest representable digital value.
*   **Weighted Resistor DAC:** A simpler type of DAC where each digital input bit controls a voltage or current source, with resistors weighted according to their bit significance (e.g., $R$, $2R$, $4R$, $8R$, etc.). While conceptually simple, it requires a wide range of resistor values, which can be difficult to manufacture precisely.
*   **R-2R Ladder DAC:** A more practical and widely used DAC topology that uses only two resistor values ($R$ and $2R$). This simplifies manufacturing and improves accuracy due to the reduced spread in resistor values.

---

### 3. The R-2R Ladder D/A Converter

The R-2R ladder DAC is an efficient way to convert digital data into an analog voltage. It achieves this using a specific arrangement of resistors.

#### 3.1. Structure of an R-2R Ladder

The R-2R ladder consists of a series of stages, each containing two resistors: one with resistance $R$ and another with resistance $2R$. The digital inputs are applied to the "upper" ends of the $R$ resistors. The "lower" ends of the ladder are terminated with a $2R$ resistor to ground, or in more advanced designs, connected to a current mirror or a voltage reference.

**For an n-bit R-2R Ladder:**

*   It has $n$ stages, corresponding to the $n$ bits of the digital input.
*   Each stage consists of a resistor $R$ connected from the digital input to the ladder's main path, and a resistor $2R$ connected from the main path to ground (or the reference).
*   The digital inputs control switches that connect the "upper" $R$ resistors to either a voltage reference ($V_{ref}$) or ground (0V). A logic '1' typically connects to $V_{ref}$, and a logic '0' connects to ground.

**Diagram (Conceptual for 3-bit DAC):**

```
      D2 (MSB)   D1         D0 (LSB)
      |          |          |
      R          R          R
      |          |          |
    --*----------*----------*-- V_out
   |  |          |          |
  2R  R          2R         R
   |  |          |          |
   GND          GND        2R
                           |
                           GND
```
*Where D2 is the Most Significant Bit (MSB) and D0 is the Least Significant Bit (LSB).*

#### 3.2. Principle of Operation

The operation of the R-2R ladder relies on the superposition principle and the current division properties of the ladder network. Each digital input bit contributes to the output voltage based on its weight.

*   **Current Division:** The ladder is designed such that at each node, the current splits equally into two branches due to the $R$ and $2R$ resistor values. This ensures that a current flowing down the ladder effectively gets halved at each subsequent stage if the termination is correct.
*   **Voltage Contribution:** When a digital input bit (say, $D_i$) is at logic '1' ($V_{ref}$) and others are at logic '0' (GND), it acts as a voltage source injecting current into the ladder. The voltage at the output is a sum of the contributions from each bit, with each bit's contribution weighted according to its position.

    *   **MSB ($D_{n-1}$):** Contributes $V_{ref} \times \frac{R}{R+R} = V_{ref}/2$ to the output. (This is a simplified view; a more precise analysis considers the full ladder.)
    *   **Next Bit ($D_{n-2}$):** Contributes $V_{ref}/4$ to the output.
    *   **LSB ($D_0$):** Contributes $V_{ref}/2^n$ to the output.

#### 3.3. Output Voltage Formula

For an n-bit R-2R ladder DAC, assuming the digital inputs $D_{n-1}, D_{n-2}, ..., D_1, D_0$ represent the binary number, where $D_{n-1}$ is the MSB and $D_0$ is the LSB, and $D_i \in \{0, 1\}$:

The output analog voltage ($V_{out}$) is given by:

$V_{out} = V_{ref} \times \left( \frac{D_{n-1}}{2^1} + \frac{D_{n-2}}{2^2} + \dots + \frac{D_1}{2^{n-1}} + \frac{D_0}{2^n} \right)$

Alternatively, if the digital input represents a binary-weighted number $N = D_{n-1}2^{n-1} + D_{n-2}2^{n-2} + \dots + D_12^1 + D_02^0$:

$V_{out} = V_{ref} \times \frac{N}{2^n}$

**Key takeaway:** The output voltage is proportional to the digital input value and the reference voltage. The resolution is $V_{ref} / 2^n$.

#### 3.4. Important Considerations for Design and Implementation

*   **Resistor Accuracy:** The accuracy of the DAC heavily depends on the precision of the $R$ and $2R$ resistors. The ratio of the resistors ($2R/R$) must be exactly 2. Using integrated resistors with similar manufacturing processes minimizes variations.
*   **Reference Voltage ($V_{ref}$):** A stable and accurate voltage reference is crucial for the DAC's accuracy.
*   **Switching Speed:** The switches used to connect the digital inputs to $V_{ref}$ or ground must be fast and have low "on" resistance. In practical implementations, these are often implemented using analog switches (e.g., MOSFETs).
*   **Loading Effects:** The output of the R-2R ladder might be loaded by the subsequent circuitry. An operational amplifier (op-amp) with high input impedance is often used as a buffer at the output to prevent loading.

---

### 4. Designing an R-2R Ladder DAC

Let's consider designing a 4-bit R-2R ladder DAC.

**Objective:** Convert a 4-bit digital input into an analog voltage, with $V_{ref} = 5V$.

**Steps:**

1.  **Determine the number of bits (n):** $n = 4$.
2.  **Choose a resistor value for R:** A common choice for $R$ is in the range of $1k\Omega$ to $100k\Omega$. Let's choose $R = 10 k\Omega$. This means the other resistors will be $2R = 20 k\Omega$.
3.  **Determine the resolution:** Resolution = $V_{ref} / 2^n = 5V / 2^4 = 5V / 16 = 0.3125V$.
4.  **Determine the full-scale output voltage:** For a 4-bit DAC, the maximum digital input is $1111_2$, which is $2^4 - 1 = 15$ in decimal.
    Full-scale output voltage = $V_{ref} \times (1 - 1/2^n) = 5V \times (1 - 1/16) = 5V \times (15/16) = 4.6875V$.
    (Note: The absolute full scale is $V_{ref}$ if all bits were allowed to go to $V_{ref}$ and the formula was $V_{ref} \times N/2^n$, where $N_{max} = 2^n - 1$). The formula $V_{ref} \times (1 - 1/2^n)$ correctly represents the highest achievable analog value for the maximum binary input $1111_2$.
5.  **Draw the circuit:** Construct the R-2R ladder with 4 stages, using $10k\Omega$ resistors for $R$ and $20k\Omega$ resistors for $2R$. Connect the switches for $D_3, D_2, D_1, D_0$ to $V_{ref}$ (5V) or GND (0V) based on the digital input. The output should ideally be buffered with an op-amp.

**Example Digital Input and Expected Output:**

Let the digital input be $1011_2$.
*   $D_3 = 1$ (MSB)
*   $D_2 = 0$
*   $D_1 = 1$
*   $D_0 = 1$ (LSB)

Using the formula:
$V_{out} = 5V \times \left( \frac{1}{2^1} + \frac{0}{2^2} + \frac{1}{2^3} + \frac{1}{2^4} \right)$
$V_{out} = 5V \times \left( \frac{1}{2} + 0 + \frac{1}{8} + \frac{1}{16} \right)$
$V_{out} = 5V \times \left( \frac{8}{16} + \frac{2}{16} + \frac{1}{16} \right)$
$V_{out} = 5V \times \left( \frac{11}{16} \right)$
$V_{out} = 5V \times 0.6875 = 3.4375V$

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### 5. Simulation using PSpice (Reference: Rashid's "Introduction to Pspice Using Orcad for Circuits and Electronics")

Simulating an R-2R ladder DAC is an excellent way to verify its operation and understand its behavior.

**Steps for Simulation (General Outline):**

1.  **Create a New Project:** Open PSpice and create a new schematic project.
2.  **Place Components:**
    *   **Resistors:** Place $R$ and $2R$ resistors. You can use the "Resistor" part from the library. For a 4-bit DAC with $R=10k\Omega$, you'll need four $10k\Omega$ resistors and four $20k\Omega$ resistors.
    *   **Voltage Sources:** Place DC voltage sources for $V_{ref}$ (e.g., 5V) and for the digital inputs (0V for logic '0', 5V for logic '1'). You can use the "VDC" part.
    *   **Switches:** For simplicity in simulation, you can directly connect the digital inputs to voltage sources or use analog switches if more realistic simulation is needed. For basic analysis, directly connecting voltage sources is sufficient.
    *   **Ground:** Place ground symbols.
    *   **Output Probe:** Place a voltage probe on the output node.
3.  **Wire the Circuit:** Connect the components according to the R-2R ladder topology. Ensure the switches connect the $R$ resistors to the appropriate voltage sources ($V_{ref}$ or GND) based on the desired digital input.
4.  **Set up the Simulation:**
    *   **Analysis Type:** Typically, a "DC Sweep" analysis is used to see the output voltage for different digital input combinations or a "Transient" analysis if you want to see the output change over time as digital inputs change.
    *   **DC Sweep:** You can sweep one or more of the voltage sources representing the digital inputs. For example, you could sweep the MSB voltage source from 0 to 5V while keeping others fixed to see its contribution, or sweep all inputs to test different binary combinations.
5.  **Run the Simulation:** Execute the simulation.
6.  **Analyze the Results:** The output voltage will be displayed in a waveform viewer. You can check the output voltage for different digital input combinations to verify that it matches the calculated values.

**Example Simulation Setup for 2-bit DAC (R=10k, 2R=20k, Vref=5V):**

*   **Inputs:** D1 (MSB), D0 (LSB)
*   **Circuit:**
    *   $R_1 = 10k\Omega$ (for D1)
    *   $R_2 = 10k\Omega$ (for D0)
    *   $R_3 = 20k\Omega$ (between D1 and D0 node)
    *   $R_4 = 20k\Omega$ (between D0 and output node)
    *   $R_5 = 20k\Omega$ (termination at the end)
    *   V1 (for D1): 0V or 5V
    *   V2 (for D0): 0V or 5V
    *   Vref: 5V (connected to R1 and R2 via switches/direct connection)

**Simulation Task:**
Perform a DC sweep by varying the voltage of V1 from 0 to 5V and V2 from 0 to 5V to observe the output for all 4 combinations (00, 01, 10, 11).

*   **00:** $V_{out} = 5V \times (0/2 + 0/4) = 0V$
*   **01:** $V_{out} = 5V \times (0/2 + 5V/4) = 5V \times (1/4) = 1.25V$ (This is wrong. The formula uses binary bits, not voltage. If D0=1, its contribution is $V_{ref}/2^2$)
    *Correct calculation for 01:* Digital input $01_2$. $D_1=0, D_0=1$.
    $V_{out} = V_{ref} \times (D_1/2^1 + D_0/2^2) = 5V \times (0/2 + 1/4) = 5V \times 1/4 = 1.25V$.
*   **10:** Digital input $10_2$. $D_1=1, D_0=0$.
    $V_{out} = V_{ref} \times (D_1/2^1 + D_0/2^2) = 5V \times (1/2 + 0/4) = 5V \times 1/2 = 2.5V$.
*   **11:** Digital input $11_2$. $D_1=1, D_0=1$.
    $V_{out} = V_{ref} \times (D_1/2^1 + D_0/2^2) = 5V \times (1/2 + 1/4) = 5V \times (3/4) = 3.75V$.

**(Important Note for Simulation):** When simulating, ensure that the voltage sources for digital inputs are correctly representing the binary levels. If you are using a DC sweep that varies a voltage source, you are essentially testing a range of values. For discrete binary testing, you would typically set up different simulation runs with fixed voltage levels for each digital input combination.

---

### 6. Troubleshooting R-2R Ladder Circuits

When implementing or simulating an R-2R ladder, common issues might arise.

*   **Incorrect Output Voltage:**
    *   **Check Resistor Values:** Ensure the ratio of $2R$ to $R$ is precisely 2. Even small deviations can lead to significant errors, especially in higher-bit DACs.
    *   **Check $V_{ref}$:** Verify that the reference voltage is stable and at the expected value.
    *   **Check Digital Inputs:** Ensure the digital inputs are correctly represented (e.g., 0V for logic '0' and $V_{ref}$ or a suitable high voltage for logic '1').
    *   **Loading Effects:** If the output is buffered by an op-amp, check the op-amp's power supply and biasing. If not buffered, the load connected to the output might be drawing current, affecting the voltage division.
*   **Non-Linearity:**
    *   **Resistor Tolerance:** Significant tolerance in resistor values, especially in higher-bit DACs, can cause non-linearity.
    *   **Switch Imperfections:** The switches used to select the voltage reference can introduce voltage drops or non-linearities if they are not ideal.
*   **Slow Response:**
    *   **Capacitive Effects:** Parasitic capacitances in the circuit, especially at higher frequencies or with larger resistor values, can slow down the response.
    *   **Op-Amp Bandwidth:** If an op-amp is used for buffering, its bandwidth might limit the DAC's speed.

---

### 7. Practice Questions and Exercises

1.  **Design an 8-bit R-2R ladder DAC with a reference voltage of 10V. Choose a suitable value for R (e.g., $R=5k\Omega$). Calculate the resolution and the full-scale output voltage.**
    *   **Answer:**
        *   $n=8$, $V_{ref}=10V$, $R=5k\Omega$, $2R=10k\Omega$.
        *   Resolution = $V_{ref} / 2^n = 10V / 2^8 = 10V / 256 \approx 39.06mV$.
        *   Full-scale output voltage = $V_{ref} \times (1 - 1/2^n) = 10V \times (1 - 1/256) = 10V \times (255/256) \approx 9.961V$.

2.  **For a 4-bit R-2R ladder DAC with $V_{ref} = 8V$ and $R = 20k\Omega$, what is the analog output voltage for the digital input $1100_2$?**
    *   **Answer:**
        *   Digital input $1100_2$. $D_3=1, D_2=1, D_1=0, D_0=0$.
        *   $V_{out} = V_{ref} \times (D_3/2^1 + D_2/2^2 + D_1/2^3 + D_0/2^4)$
        *   $V_{out} = 8V \times (1/2 + 1/4 + 0/8 + 0/16)$
        *   $V_{out} = 8V \times (2/4 + 1/4) = 8V \times (3/4) = 6V$.

3.  **What is the primary advantage of using an R-2R ladder DAC over a weighted resistor DAC?**
    *   **Answer:** The primary advantage is that it uses only two resistor values ($R$ and $2R$), which are easier to manufacture with high precision and consistency compared to the wide range of weighted resistors required by a weighted resistor DAC.

4.  **If you observe the output voltage of an R-2R ladder DAC to be consistently lower than expected for all digital inputs, what is the most likely cause?**
    *   **Answer:** The reference voltage ($V_{ref}$) is lower than the intended value.

5.  **Explain how you would simulate a 3-bit R-2R ladder DAC in PSpice to test all 8 possible input combinations.**
    *   **Answer:** You would set up 8 separate simulation runs or use a technique like a truth table simulation. For each run, you would define the voltage sources for the three digital inputs (D2, D1, D0) to represent a unique binary combination (e.g., Run 1: D2=0V, D1=0V, D0=0V; Run 2: D2=0V, D1=0V, D0=5V; ... Run 8: D2=5V, D1=5V, D0=5V). Then, for each run, you would perform a DC analysis to measure the output voltage.

---

### 8. Important Points to Remember

*   **R-2R is efficient:** Uses only two resistor values.
*   **Accuracy depends on resistor ratio:** $2R/R$ must be precisely 2.
*   **Output is proportional to $V_{ref}$ and digital input value.**
*   **Resolution:** $V_{ref} / 2^n$.
*   **MSB has the largest weight ($1/2$).**
*   **LSB has the smallest weight ($1/2^n$).**
*   **Op-amp buffer is often used at the output.**
*   **Simulation is key:** Verify design and understanding with tools like PSpice.

---

### 9. Textbook and Reference Material Integration

*   **D. Roy Choudhary and Shail B Jain:** Chapters discussing D/A converters will detail the R-2R ladder topology, its mathematical analysis, and design considerations. They would likely cover the basic principle of operation and the output voltage calculation.
*   **M. H. Rashid:** This textbook is specifically for PSpice simulation. Chapter(s) on digital circuits and data converters would provide detailed instructions on how to model and simulate R-2R ladder DACs, including setting up voltage sources for digital inputs and performing DC sweep or transient analyses.
*   **Gayakwad:** Might offer alternative perspectives on DACs or their integration with op-amps, providing insights into buffering and practical circuit implementation.
*   **D Roy Choudhury, Shail Bala Jain (2018):** This is likely a more recent edition of their work, reinforcing the concepts presented in the 2021 edition regarding R-2R ladder DACs.

---

### 10. Alignment with Course Outcomes

*   **CO1 (Design and implement basic linear integrated circuits using Op Amps):** This topic directly supports CO1 by requiring the understanding of how op-amps can be used as buffers for DAC outputs. Designing the R-2R ladder itself is a foundational design task.
*   **CO2 (Design and implement basic linear integrated circuits using linear ICs):** While the R-2R ladder is primarily a passive network, its implementation often involves analog switches (which can be ICs) and potentially specialized DAC ICs. Understanding the ladder's internal workings is crucial for both.
*   **CO3 (Design and simulate the functioning of basic linear integrated circuits and linear ICs. using simulation tools):** This topic heavily relies on simulation (as per Rashid's textbook) to verify the design and understand the output characteristics for various digital inputs.
*   **CO4 (Effectively troubleshoot a given circuit and analyze it):** The troubleshooting section and practice questions directly address this outcome by focusing on common errors and analytical approaches to identify issues in R-2R ladder circuits.

This comprehensive set of notes provides a solid foundation for understanding the R-2R ladder D/A converter, its design, simulation, and practical considerations within the context of a Linear Integrated Circuits Lab.