---
title: "Data Converters:  Digital to Analog converters, Specifications, Weighted resistor type and R-2R Ladder type."
subject: "LINEAR INTEGRATED CIRCUITS"
module: "Module 4: Timer and VCO:  Timer IC 555 "
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe579"
status: "completed"
scrapedAt: "2026-05-23T17:49:50.822Z"
---
# Linear Integrated Circuits - Module 4: Timer and VCO: Timer IC 555

## Topic: Data Converters: Digital to Analog Converters, Specifications, Weighted Resistor Type and R-2R Ladder Type

This section delves into the crucial area of Digital-to-Analog Converters (DACs), essential components for interfacing digital systems with the analog world. We will explore their fundamental principles, key performance metrics, and two fundamental architectural types: the Weighted Resistor DAC and the R-2R Ladder DAC.

### 1. Introduction to Data Converters

**1.1 What is a Data Converter?**

A data converter is an electronic device that translates signals from one domain to another. In the context of this module, we are primarily concerned with **Digital-to-Analog Converters (DACs)**, which convert discrete digital values into continuous analog voltage or current signals. This is a fundamental requirement for many applications where digital controllers need to interact with analog actuators or display analog information.

**1.2 Why are DACs Important?**

*   **Bridging Digital and Analog Worlds:** Digital systems (microprocessors, computers) operate on discrete binary values, while the physical world is analog (temperature, sound, light). DACs are essential for this interface.
*   **Control Systems:** DACs are used to control analog devices like motors, actuators, and audio amplifiers based on digital commands.
*   **Signal Generation:** They are used to generate arbitrary analog waveforms for testing and simulation.
*   **Audio and Video Playback:** DACs convert digital audio and video data into analog signals that speakers and displays can interpret.

**1.3 Key Concepts**

*   **Digital Input:** A binary number represented by a set of digital bits ($D_n, D_{n-1}, ..., D_1, D_0$).
*   **Analog Output:** A proportional analog voltage or current.
*   **Resolution:** The smallest change in the analog output that can be achieved by a change in the digital input. It's often expressed in bits or as a fraction of the full-scale output.
*   **Quantization Error:** The inherent error introduced by approximating an analog signal with discrete digital steps.
*   **Full-Scale Output (FSO):** The maximum analog output voltage or current achievable by the DAC.
*   **Least Significant Bit (LSB):** The smallest increment of the digital input, corresponding to the smallest change in the analog output.

### 2. Specifications of Digital-to-Analog Converters (DACs)

Understanding the specifications of a DAC is crucial for selecting the right converter for a specific application.

**2.1 Resolution**

*   **Definition:** The resolution of a DAC determines the smallest analog output change it can produce for a unit change in its digital input.
*   **Units:** Typically expressed in bits (e.g., 8-bit, 10-bit, 12-bit DAC). A higher number of bits means finer resolution.
*   **Relationship to Output:** For an N-bit DAC, there are $2^N$ possible output levels.
*   **Formula:** $LSB = \frac{FSO}{2^N - 1}$ (for unipolar DACs, where FSO is full-scale output).
*   **Example:** A 3-bit DAC has $2^3 = 8$ output levels. If the FSO is 8V, the LSB is $8V / (2^3 - 1) = 8V / 7 \approx 1.14V$. This means each step in the digital input corresponds to an analog output change of approximately 1.14V.

**2.2 Accuracy**

*   **Definition:** Accuracy refers to how closely the actual analog output of the DAC matches the ideal theoretical output for a given digital input.
*   **Key Types of Errors:**
    *   **Offset Error:** The analog output when the digital input is zero (ideally zero).
    *   **Gain Error (Scale Error):** The deviation of the DAC's slope from the ideal slope. It's often specified as a percentage of the full-scale output.
    *   **Linearity Error:** The deviation of the DAC's transfer characteristic from a straight line.
        *   **Integral Linearity (IL):** The maximum deviation of any point on the DAC's transfer curve from the best-fit straight line.
        *   **Differential Linearity (DL):** The maximum deviation of any LSB step from the ideal LSB step. A DAC with good DL will have monotonic behavior (output always increases or stays the same with increasing digital input).

**2.3 Conversion Speed (Settling Time)**

*   **Definition:** The time it takes for the DAC's analog output to settle to within a specified tolerance (usually a fraction of an LSB) after a change in the digital input.
*   **Importance:** Critical for high-speed applications where data is updated rapidly.
*   **Factors Influencing Settling Time:** Internal circuitry, load capacitance, output amplifier speed.

**2.4 Monotonicity**

*   **Definition:** A DAC is monotonic if its analog output does not decrease as the digital input code increases. This is directly related to the Differential Linearity (DL). If DL is greater than or equal to -1 LSB, the DAC is monotonic.
*   **Importance:** Ensures that the output consistently increases with the digital input, preventing "glitches" or reversals in the output signal.

**2.5 Output Type**

*   **Voltage Output DACs:** Produce an analog voltage output.
*   **Current Output DACs:** Produce an analog current output. These often require an external resistor to convert the current to voltage.

**Important Point to Remember:** Accuracy and resolution are often inversely related in practice. Higher resolution doesn't guarantee higher accuracy.

### 3. Weighted Resistor Type DAC

This is one of the simplest DAC architectures.

**3.1 Principle of Operation**

The weighted resistor DAC uses a summing amplifier (typically an operational amplifier) with multiple input resistors. Each resistor is connected to a digital input bit through a switch. The value of each resistor is "weighted" according to its corresponding bit's position in the binary number. The most significant bit (MSB) is connected to the smallest resistor, and the least significant bit (LSB) is connected to the largest resistor.

**3.2 Circuit Diagram**

(Imagine a summing amplifier configuration with an op-amp. The inverting input of the op-amp is connected to ground through a feedback resistor $R_f$. The non-inverting input is connected to ground. The digital bits $D_0, D_1, ..., D_{N-1}$ control switches. When a bit is '1', its corresponding input resistor is connected to a reference voltage $V_{ref}$. When a bit is '0', its corresponding input resistor is connected to ground (or effectively disconnected from $V_{ref}$).)

*   Let $D_0$ be the LSB and $D_{N-1}$ be the MSB.
*   The input resistor for bit $D_k$ has a value of $R_k$.
*   The feedback resistor is $R_f$.

**3.3 Operation with Ideal Switches**

When a digital input bit $D_k$ is '1', the corresponding resistor $R_k$ is connected to $V_{ref}$. When $D_k$ is '0', it's connected to ground.

The output voltage $V_{out}$ of the summing amplifier is given by:

$V_{out} = -R_f \left( \frac{D_0}{R_0} + \frac{D_1}{R_1} + \frac{D_2}{R_2} + ... + \frac{D_{N-1}}{R_{N-1}} \right) V_{ref}$

Where $D_k = 1$ if the bit is high, and $D_k = 0$ if the bit is low.

**3.4 Weighting Scheme**

To create a linear relationship between the digital input and analog output, the input resistors are weighted according to powers of 2:

*   For the LSB ($D_0$), the resistor is $R_0 = R$.
*   For the next bit ($D_1$), the resistor is $R_1 = R/2$.
*   For the bit $D_k$, the resistor is $R_k = R/2^k$.
*   For the MSB ($D_{N-1}$), the resistor is $R_{N-1} = R/2^{N-1}$.

Substituting these resistor values into the output equation:

$V_{out} = -R_f \left( \frac{D_0}{R} + \frac{D_1}{R/2} + \frac{D_2}{R/4} + ... + \frac{D_{N-1}}{R/2^{N-1}} \right) V_{ref}$

$V_{out} = -\frac{R_f}{R} \left( D_0 \cdot 1 + D_1 \cdot 2 + D_2 \cdot 4 + ... + D_{N-1} \cdot 2^{N-1} \right) V_{ref}$

If we choose $R_f = R$, then:

$V_{out} = -(D_0 \cdot 2^0 + D_1 \cdot 2^1 + D_2 \cdot 2^2 + ... + D_{N-1} \cdot 2^{N-1}) \frac{V_{ref}}{R}$

This shows that the output voltage is proportional to the digital input value.

**3.5 Advantages**

*   **Simplicity:** Conceptually straightforward and easy to understand.
*   **Speed:** Can be relatively fast as it avoids complex ladder networks.

**3.6 Disadvantages**

*   **Wide Range of Resistor Values:** For a high number of bits (e.g., 10 bits or more), the ratio between the largest and smallest resistor becomes very large ($2^{N-1}$). For a 10-bit DAC, this ratio is $2^9 = 512$. Manufacturing precision resistors with such a wide range and maintaining accurate ratios is very difficult and expensive.
*   **Component Matching:** Requires highly precise resistors for accurate operation.
*   **Switch Resistance:** The ON resistance of the switches can introduce errors, especially for the MSB where the input resistor is smallest.

**Reference:** This topic is well-covered in textbooks like Roy D. C. and S. B. Jain, Chapter 11 (Data Converters).

### 4. R-2R Ladder Type DAC

The R-2R ladder DAC overcomes the limitations of the weighted resistor type by using only two resistor values.

**4.1 Principle of Operation**

The R-2R ladder DAC utilizes a network of resistors with only two values: R and 2R. The digital inputs control switches that connect specific points in the ladder to $V_{ref}$ or ground. The inherent voltage division properties of the ladder create the weighted currents or voltages required for analog conversion.

**4.2 Circuit Diagram**

(Imagine a series of R-2R segments. Each segment consists of a resistor R in series with the output of a switch, followed by a resistor 2R to ground. The output of each segment is connected to the input of the next segment through a resistor R. The switches are controlled by the digital bits. The LSB is at the end of the ladder, and the MSB is at the beginning.)

*   The ladder is constructed with resistors of value R and 2R.
*   Digital bits $D_0, D_1, ..., D_{N-1}$ control switches.
*   When a bit $D_k$ is '1', it connects the corresponding node in the ladder to $V_{ref}$.
*   When a bit $D_k$ is '0', it connects the node to ground.

**4.3 Operation (Simplified Explanation)**

The key to the R-2R ladder's operation is that at each junction point in the ladder, the current is divided equally between the path going down (to ground through 2R) and the path going across (to the next stage through R). This effectively creates a binary-weighted current contribution from each bit.

Let's consider a few bits:

*   **MSB ($D_{N-1}$):** If $D_{N-1}$ is 1, it's connected to $V_{ref}$ through a resistor R. The subsequent 2R-R network effectively divides the current.
*   **LSB ($D_0$):** The LSB is at the end of the ladder and contributes the smallest weighted current.

The total output is the sum of these weighted currents (if using a current summing method) or voltages. A common implementation uses an op-amp to sum these contributions.

**4.4 Output Equation (Conceptual)**

The output voltage of an R-2R ladder DAC (when implemented with a summing amplifier) can be expressed as:

$V_{out} = -k \cdot V_{ref} \cdot \sum_{i=0}^{N-1} D_i \cdot 2^{-i}$

Where:
*   $k$ is a scaling factor determined by the feedback resistor and the output stage design.
*   $D_i$ is the value of the i-th bit (0 or 1).
*   $N$ is the number of bits.

This equation clearly shows the binary weighting, with each bit's contribution decreasing by a factor of 2 for each step towards the LSB.

**4.5 Advantages**

*   **Only Two Resistor Values:** This significantly simplifies manufacturing and reduces component cost compared to the weighted resistor type, especially for higher resolutions.
*   **Better Component Matching:** The limited number of resistor values makes it easier to achieve good matching between components.
*   **Scalability:** The design is easily scalable to a higher number of bits.

**4.6 Disadvantages**

*   **Complexity:** The ladder network is more complex than the simple weighted resistor approach.
*   **Speed Limitations:** The ladder network can introduce parasitic capacitances, potentially limiting the conversion speed compared to optimized weighted resistor designs.
*   **Sensitivity to Resistor Tolerances:** While better than weighted resistors, the accuracy still depends on the relative matching of R and 2R values.

**Reference:** This is also a core topic in Roy D. C. and S. B. Jain, Chapter 11 (Data Converters), and is discussed in detail in Sergio Franco's "Design with Operational Amplifiers and Analog Integrated Circuits."

### 5. Comparison of Weighted Resistor DAC and R-2R Ladder DAC

| Feature           | Weighted Resistor DAC                         | R-2R Ladder DAC                               |
| :---------------- | :-------------------------------------------- | :-------------------------------------------- |
| **Resistor Values** | Multiple, ranging from R to R/2^(N-1)         | Only two: R and 2R                            |
| **Range of Resistors** | Very large for high N                       | Relatively small range                        |
| **Component Matching** | Requires very precise matching across wide range | Requires good matching between R and 2R        |
| **Manufacturing** | Difficult and expensive for high N            | Easier and more cost-effective                |
| **Complexity**    | Simpler circuit                               | More complex ladder network                   |
| **Speed**         | Potentially faster                            | Can be limited by ladder parasitics         |
| **Accuracy**      | Highly dependent on precise resistor ratios   | Dependent on R/2R ratio accuracy              |
| **Scalability**   | Poor for high N                               | Good                                          |

### 6. Practice Questions and Answers

**Question 1:** A 4-bit weighted resistor DAC has a reference voltage of 10V and feedback resistor $R_f = 10k\Omega$. The MSB input resistor is $R = 10k\Omega$. What is the output voltage when the input code is `1011` (MSB is the leftmost bit)?

**Answer:**
The input resistor values are:
*   MSB ($D_3$): $R = 10k\Omega$
*   $D_2$: $R/2 = 5k\Omega$
*   $D_1$: $R/4 = 2.5k\Omega$
*   LSB ($D_0$): $R/8 = 1.25k\Omega$

The input code is `1011`: $D_3=1, D_2=0, D_1=1, D_0=1$.

Using the formula $V_{out} = -R_f \left( \frac{D_0}{R_0} + \frac{D_1}{R_1} + \frac{D_2}{R_2} + \frac{D_3}{R_3} \right) V_{ref}$

$V_{out} = -10k\Omega \left( \frac{1}{1.25k\Omega} + \frac{1}{2.5k\Omega} + \frac{0}{5k\Omega} + \frac{1}{10k\Omega} \right) 10V$

$V_{out} = -10 \left( \frac{1}{1.25} + \frac{1}{2.5} + 0 + \frac{1}{10} \right) \times 10$

$V_{out} = -10 \left( 0.8 + 0.4 + 0 + 0.1 \right) \times 10$

$V_{out} = -10 (1.3) \times 10$

$V_{out} = -13V$

**Question 2:** What is the major disadvantage of the weighted resistor DAC when implemented for 12 bits or more?

**Answer:** The major disadvantage is the extremely wide range of resistor values required (from $R$ down to $R/2^{11}$ for a 12-bit DAC). Manufacturing precision resistors with such ratios and maintaining their accuracy is very difficult and costly.

**Question 3:** In an R-2R ladder DAC, if all the resistors are 10k$\Omega$, what would be the resistance values in the ladder network?

**Answer:** In an R-2R ladder, there are two values: R and 2R. If R = 10k$\Omega$, then the ladder would consist of resistors of 10k$\Omega$ and 20k$\Omega$.

**Question 4:** Explain the concept of monotonicity in a DAC and how it relates to differential linearity.

**Answer:** Monotonicity means that as the digital input code increases, the analog output voltage (or current) never decreases; it either stays the same or increases. Differential linearity (DL) is the deviation of each step size from the ideal LSB step. A DAC is monotonic if its differential linearity is greater than or equal to -1 LSB. If DL is less than -1 LSB, there's a step where the output decreases, making the DAC non-monotonic.

**Question 5:** What is the resolution of an 8-bit DAC with a full-scale output voltage of 5V?

**Answer:**
Resolution (LSB) = FSO / (2^N - 1)
Where FSO = 5V and N = 8 bits.

Resolution = 5V / (2^8 - 1)
Resolution = 5V / (256 - 1)
Resolution = 5V / 255
Resolution $\approx 0.0196V$ or 19.6mV.

### 7. Important Points to Remember

*   **DACs** are crucial for converting digital data into analog signals.
*   **Resolution** determines the fineness of the analog output steps, specified in bits.
*   **Accuracy** encompasses offset, gain, integral, and differential linearity errors.
*   **Weighted Resistor DACs** are simple but suffer from the requirement of a wide range of precision resistors.
*   **R-2R Ladder DACs** use only two resistor values, making them more practical and scalable for higher resolutions.
*   **Monotonicity** is essential for reliable DAC operation, ensuring the output consistently increases with the digital input.
*   The choice between weighted resistor and R-2R ladder depends on the required resolution, cost, and performance specifications.

### Alignment with Course Outcomes (COs)

*   **CO1 (Summarize op-amp concepts):** Understanding DACs involves the use of op-amps (summing amplifiers), reinforcing the concepts of amplifier configurations and their behavior. (Knowledge Level: K2)
*   **CO2 (Design op-amp circuits):** While not directly designing DACs here, understanding their internal summing amplifier stages relates to the design of amplifier circuits. (Knowledge Level: K3 is indirectly supported by understanding the function of the summing amplifier within the DAC)
*   **CO3 (Choose IC chips for linear applications):** Knowing the specifications of DACs (resolution, speed, accuracy) is vital for selecting appropriate DAC ICs for various linear circuit applications. (Knowledge Level: K2)
*   **CO4 (Implement applications using IC chips):** While this specific topic focuses on the internal workings, understanding DACs is a prerequisite for implementing systems that require digital-to-analog conversion, such as control systems or audio circuits. (Knowledge Level: K3 is supported by understanding how these DACs function in practical implementations)

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
