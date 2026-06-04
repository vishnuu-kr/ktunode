---
title: "Simple and Cascode current mirror circuits."
subject: "MIXED SIGNAL CIRCUITS"
module: "Module 2: MOS Current Mirror: Basic circuit, PMOS and NMOS current mirrors"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c461b09ce205780ff422"
status: "completed"
scrapedAt: "2026-05-23T18:08:08.191Z"
---
# MIXED SIGNAL CIRCUITS - Module 2: MOS Current Mirror: Basic Circuit, PMOS and NMOS Current Mirrors

## Topic: Simple and Cascode Current Mirror Circuits

This module introduces the fundamental building block of analog integrated circuits: the MOS Current Mirror. We will explore its basic operation, different implementations using PMOS and NMOS transistors, and advanced versions like the simple and cascode current mirrors, focusing on their characteristics and applications.

---

### Learning Outcomes:

By the end of this topic, you will be able to:

*   **Understand the fundamental operation of a MOS current mirror.**
*   **Analyze the characteristics of simple current mirrors using both PMOS and NMOS transistors.**
*   **Derive the output current and voltage transfer characteristics of simple current mirrors.**
*   **Identify the limitations of simple current mirrors, particularly regarding output impedance.**
*   **Understand the operation and advantages of cascode current mirrors.**
*   **Analyze the output current and voltage transfer characteristics of cascode current mirrors.**
*   **Compare and contrast the performance of simple and cascode current mirrors.**
*   **Recognize the role of current mirrors in analog circuit design.**

---

### Course Outcome Alignment:

This topic directly supports the following Course Outcomes:

*   **CO2: Explain Differential Amplifiers & Current Mirrors (Knowledge Level: K2)** - This module is dedicated to explaining current mirrors, a crucial component often used in differential amplifiers.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


### Textbooks & Reference Books Used:

*   **Primary:**
    *   Razavi, B. (2002). *Design of Analog CMOS Integrated Circuits* (2/e). McGraw-Hill. (Chapters on Current Mirrors)
    *   Baker, C. H., Li, C. L., & Boyce, D. E. (2000). *CMOS: Circuits Design, Layout and Simulation*. Prentice Hall India. (Chapters on Current Mirrors)
    *   Sedra, A. S., & Smith, K. C. (2017). *Microelectronic Circuits* (6/e). Oxford University Press. (Chapters on Current Mirrors)
*   **Reference:**
    *   Allen, P. E., & Holbery, D. R. (2002). *CMOS Analog Circuit Design* (3/e). Oxford University Press.
    *   Razavi, B. (2014). *Fundamentals of Microelectronics*. Wiley student Edition.
    *   Gray, P. R., Hurst, P. J., & Lewis, S. H. (2009). *Analysis and Design of Analog Integrated Circuits* (5/e). Wiley.

---

### 1. Introduction to MOS Current Mirrors

**1.1 What is a Current Mirror?**

A current mirror is a circuit that replicates or "mirrors" a current from one part of a circuit to another. It's essentially a current steering circuit. The primary function is to provide a bias current to other parts of the circuit, often a constant current source.

**1.2 Basic Concept:**

The core idea behind a current mirror is to use the input current to set a reference voltage across a transistor (usually in saturation), and then use this voltage to control another transistor to produce an identical output current.

**1.3 Importance in Analog Circuits:**

*   **Biasing:** Current mirrors are fundamental for setting bias currents in amplifiers and other analog blocks.
*   **Active Loads:** They can be used as active loads in amplifiers, providing high output impedance and improving voltage gain compared to resistive loads.
*   **Current Steering:** They are used to steer currents to different branches of a circuit.
*   **Building Blocks:** They are essential components for constructing more complex analog circuits like differential amplifiers, operational amplifiers, and voltage references.

---

### 2. Basic Current Mirror Circuits (Simple Current Mirror)

The simplest current mirror utilizes two matched transistors and a resistor.

**2.1 NMOS Simple Current Mirror**

![NMOS Simple Current Mirror](https://i.imgur.com/6M7Z7yC.png)
*(Conceptual Diagram - Actual circuit diagram will have a VDD and resistor R1)*

**Circuit Description:**

*   Two identical NMOS transistors, M1 and M2.
*   M1 is connected as a diode (gate and drain connected together).
*   A resistor R1 is connected in series with the drain of M1.
*   The input current $I_{in}$ flows through R1 and into the drain of M1.
*   The gate of M2 is connected to the gate of M1.
*   The source of M1 and M2 are connected together, usually to ground or a negative supply.
*   The output current $I_{out}$ is the current flowing through M2.

**Operation and Analysis (Ideal Case):**

*   **Assumption:** Transistors M1 and M2 are identical and operating in saturation. The early effect (output resistance $r_o$) is ignored.
*   Since the gates of M1 and M2 are connected, their gate-source voltages ($V_{GS}$) are equal: $V_{GS1} = V_{GS2}$.
*   Since M1 is diode-connected, $V_{DS1} = V_{GS1}$. For M1 to be in saturation, $V_{DS1} \ge V_{GS1} - V_{th}$, which is always true when $V_{DS1} = V_{GS1}$ (as long as $V_{GS1} > V_{th}$).
*   The drain current for an NMOS transistor in saturation is given by:
    $I_D = \frac{1}{2} \mu_n C_{ox} \frac{W}{L} (V_{GS} - V_{th})^2 = K \frac{W}{L} (V_{GS} - V_{th})^2$
    where $K = \frac{1}{2} \mu_n C_{ox}$.
*   For M1: $I_{in} - I_{R1} = I_{D1}$. Since $I_{R1}$ is the current through R1 and $I_{in}$ is the input current, and typically $I_{in}$ is the current flowing into the mirror, we can consider $I_{in}$ as the source of current. The current through R1 is $I_{R1} = \frac{V_{in}}{R1}$. So, $I_{in} = V_{in}/R1 + I_{D1}$.
*   However, in a typical setup, $I_{in}$ is the current provided to the mirror, and it flows into the drain of M1. So, let's consider the case where $I_{in}$ is directly fed to M1's drain, and R1 is used to set the $V_{GS}$. A more common simple mirror configuration connects M1's drain to $V_{DD}$ (or a common supply) and R1 is in series with the source. Let's consider the widely accepted configuration where $I_{in}$ flows into the drain of M1 and R1 is in series with the drain of M1, connected to $V_{DD}$.

    **Revised Simple NMOS Current Mirror Configuration:**

    ![Revised NMOS Simple Current Mirror](https://i.imgur.com/5R8Z6kL.png)
    *(Conceptual Diagram)*

    *   Input current $I_{in}$ flows into the drain of M1.
    *   M1 is diode-connected (Gate and Drain tied).
    *   A resistor R1 is connected in series with the drain of M1, and the other end of R1 is connected to the positive supply ($V_{DD}$).
    *   M2 has its gate connected to M1's gate.
    *   Sources of M1 and M2 are connected together.
    *   Output current $I_{out}$ is the drain current of M2.

    **Analysis:**

    1.  $V_{GS1} = V_{DS1}$ (since M1 is diode-connected).
    2.  $I_{D1} = \frac{V_{DD} - V_{GS1}}{R1}$.
    3.  Since M1 is in saturation, $I_{D1} = K \frac{W_1}{L_1} (V_{GS1} - V_{th})^2$.
    4.  Equating the expressions for $I_{D1}$:
        $\frac{V_{DD} - V_{GS1}}{R1} = K \frac{W_1}{L_1} (V_{GS1} - V_{th})^2$
        This equation determines $V_{GS1}$.
    5.  The input current is $I_{in} = I_{D1} + I_{R1}$ if R1 is in series with the current source. In the configuration above, $I_{in}$ is the current supplied to the drain of M1. So, $I_{in} = I_{D1}$ if R1 is placed to control the $V_{GS}$.
    6.  A more practical and common "simple" current mirror is as follows:

        **Practical Simple NMOS Current Mirror:**

        ![Practical Simple NMOS Current Mirror](https://i.imgur.com/s8V5jNf.png)
        *(Conceptual Diagram)*

        *   Input current $I_{ref}$ is established.
        *   $I_{ref}$ flows into the drain of M1.
        *   M1 is diode-connected (Gate and Drain tied).
        *   Gate of M2 is connected to the gate of M1.
        *   Sources of M1 and M2 are connected together.
        *   Output current $I_{out}$ is the drain current of M2.
        *   *Crucially, to have a well-defined $I_{ref}$, it's often generated by a resistor connected to $V_{DD}$*.

        Let's analyze this **practical** simple current mirror.

        *   $I_{ref}$ is the current that biases M1.
        *   For M1 to be in saturation, $V_{DS1} \ge V_{GS1} - V_{th}$. Since $V_{DS1} = V_{GS1}$ (diode-connected), this is satisfied if $V_{GS1} > V_{th}$.
        *   $I_{ref} = I_{D1} = K \frac{W_1}{L_1} (V_{GS1} - V_{th})^2$.
        *   From this equation, $V_{GS1}$ is determined by $I_{ref}$.
        *   Since M2 has the same $V_{GS}$ and is ideally matched ($W_2/L_2 = W_1/L_1$), its drain current $I_{D2}$ will be:
            $I_{out} = I_{D2} = K \frac{W_2}{L_2} (V_{GS2} - V_{th})^2$
        *   If $W_1/L_1 = W_2/L_2$, then $I_{out} = I_{D1} = I_{ref}$.

**Ideal Output Current:** $I_{out} = I_{in}$ (assuming $W_1/L_1 = W_2/L_2$)

**Limitations (Non-Ideal Effects):**

*   **Finite Output Resistance ($r_o$):** The drain current of a MOSFET is also affected by $V_{DS}$ due to the channel-length modulation effect.
    $I_D = K \frac{W}{L} (V_{GS} - V_{th})^2 (1 + \lambda V_{DS})$
    For M1 (diode-connected): $I_{ref} = K \frac{W_1}{L_1} (V_{GS1} - V_{th})^2 (1 + \lambda V_{DS1})$.
    Since $V_{DS1} = V_{GS1}$, $I_{ref} \approx K \frac{W_1}{L_1} (V_{GS1} - V_{th})^2$.
    For M2: $I_{out} = K \frac{W_2}{L_2} (V_{GS2} - V_{th})^2 (1 + \lambda V_{DS2})$.
    If $W_1/L_1 = W_2/L_2$, and $V_{GS1} = V_{GS2}$:
    $I_{out} \approx I_{ref} (1 + \lambda V_{DS2})$
    Since $V_{DS2}$ is not necessarily zero, $I_{out}$ will be slightly different from $I_{ref}$.
*   **Output Impedance ($R_{out}$):** The output impedance of a simple current mirror is relatively low. It is approximately equal to the output resistance of M2, $r_{o2}$.
    $R_{out} \approx r_{o2} = \frac{1}{\lambda I_{D2}} = \frac{1}{\lambda K (W_2/L_2) (V_{GS2}-V_{th})^2}$
    This low output impedance limits its use as a high-impedance current source.
*   **Matching Requirements:** Accurate current mirroring requires precise matching of $W/L$ ratios and threshold voltages ($V_{th}$) of M1 and M2. Process variations can lead to significant mismatches.
*   **Input Voltage Headroom:** The input current source needs to provide a voltage sufficient to drive M1 into saturation and overcome any series resistance.

**2.2 PMOS Simple Current Mirror**

The operation is analogous to the NMOS version, with voltages and current polarities reversed.

![PMOS Simple Current Mirror](https://i.imgur.com/x1H8M5b.png)
*(Conceptual Diagram)*

**Circuit Description:**

*   Two identical PMOS transistors, M1 and M2.
*   M1 is connected as a diode (gate and drain connected together).
*   The gate of M2 is connected to the gate of M1.
*   The source of M1 and M2 are connected together, usually to the positive supply ($V_{DD}$).
*   The output current $I_{out}$ is the current flowing out of the drain of M2 (conventionally, current flowing into a load).
*   The input current $I_{in}$ is typically sourced from the drain of M1.

**Operation and Analysis:**

*   The analysis is similar to the NMOS case, but with PMOS equations:
    $I_S = \frac{1}{2} \mu_p C_{ox} \frac{W}{L} (V_{SG} - |V_{th}|)^2$
    Here, $V_{SG}$ is the source-gate voltage, and $V_{th}$ is negative for PMOS.
*   **Ideal Case:** If $W_1/L_1 = W_2/L_2$ and M1, M2 are matched and in saturation, then $I_{out} = I_{in}$.
*   **Limitations:** Similar to NMOS, includes finite output resistance ($r_o$), lower output impedance, matching requirements, and voltage headroom considerations (specifically, the voltage at the drain of M2 must be low enough to keep M2 in saturation).

---

### 3. Cascode Current Mirror

The cascode current mirror is an enhancement over the simple current mirror, primarily to increase the output impedance.

**3.1 NMOS Cascode Current Mirror**

![NMOS Cascode Current Mirror](https://i.imgur.com/s0m8k9O.png)
*(Conceptual Diagram)*

**Circuit Description:**

*   **Input Stage:** A simple NMOS current mirror (M1, M2) where M1 is diode-connected and $I_{ref}$ is the input current.
*   **Cascode Transistor:** An additional NMOS transistor, M3, is placed in series with M2.
*   The gate of M2 is connected to the gate of M1 (established by $I_{ref}$).
*   The source of M2 is connected to the drain of M3.
*   The gate of M3 is tied to a bias voltage $V_{B1}$.
*   The source of M3 is typically connected to ground or a negative supply.
*   The output current $I_{out}$ is the drain current of M3 (which is the same as the drain current of M2, assuming no leakage).

**Operation and Analysis (Ideal Case):**

1.  $I_{ref}$ establishes $V_{GS1}$ across M1. Since M1 is diode-connected, $V_{DS1} = V_{GS1}$.
2.  $I_{ref} = I_{D1} = K \frac{W_1}{L_1} (V_{GS1} - V_{th})^2$.
3.  $V_{GS2} = V_{GS1}$ (gates are connected).
4.  $I_{D2} = K \frac{W_2}{L_2} (V_{GS2} - V_{th})^2$.
5.  If $W_1/L_1 = W_2/L_2$, then $I_{D2} = I_{ref}$.
6.  M3 is connected in common-source configuration. Its gate voltage $V_{B1}$ is set to ensure M3 is in saturation. A common choice for $V_{B1}$ is a voltage that keeps M2 in saturation.
7.  The output current is $I_{out} = I_{D3}$. If M2 and M3 are in series and there's no current diversion, $I_{D3} = I_{D2}$.
8.  **Ideal Output Current:** $I_{out} = I_{ref}$ (assuming matched devices and $W/L$ ratios).

**Advantages of Cascode:**

*   **Increased Output Impedance:** This is the main benefit. The output impedance of a cascode current mirror is significantly higher than that of a simple current mirror.
    *   The output impedance is roughly the parallel combination of the output resistance of M2 ($r_{o2}$) and the output impedance of the common-source stage M3.
    *   The output impedance of M3 (viewed from its drain) is approximately $r_{o3} (1 + g_{m3} r_{o2})$.
    *   Therefore, $R_{out} \approx r_{o2} || [r_{o3} (1 + g_{m3} r_{o2})]$.
    *   Since $(1 + g_{m3} r_{o2})$ is a large term, the output impedance is dominated by $r_{o3} (1 + g_{m3} r_{o2})$, which is much larger than $r_{o2}$ alone.
    *   **Important Point:** This significantly improves the current-sharing accuracy when the cascode mirror is used as a load for an amplifier.

**Limitations:**

*   **Increased Voltage Drop:** The cascode structure introduces an additional voltage drop across M3. The output voltage must be high enough to keep both M2 and M3 in saturation.
    *   For M2: $V_{DS2} \ge V_{GS2} - V_{th}$
    *   For M3: $V_{DS3} \ge V_{GS3} - V_{th}$
    *   This reduces the output voltage swing compared to a simple current mirror.
*   **Bias Voltage Generation:** A separate bias voltage $V_{B1}$ is required for the gate of M3. This often needs to be generated by another circuit, adding complexity.

**3.2 PMOS Cascode Current Mirror**

Similar to the NMOS cascode, but with PMOS transistors.

![PMOS Cascode Current Mirror](https://i.imgur.com/Z3k4T5A.png)
*(Conceptual Diagram)*

**Circuit Description:**

*   **Input Stage:** Simple PMOS current mirror (M1, M2) where M1 is diode-connected.
*   **Cascode Transistor:** Additional PMOS transistor, M3, in series with M2.
*   The gate of M2 is connected to the gate of M1.
*   The source of M2 is connected to the drain of M3.
*   The gate of M3 is tied to a bias voltage $V_{B1}$ (which will be lower than the sources of M2/M3).
*   The source of M1 and M2 are connected to $V_{DD}$.
*   The output current $I_{out}$ is the drain current of M3.

**Operation and Analysis:**

*   Analogous to the NMOS cascode mirror.
*   $I_{ref}$ establishes $V_{SG1}$ across M1.
*   $I_{D2} = I_{ref}$ if matched.
*   $I_{out} = I_{D3} = I_{D2}$ (ideally).
*   **Increased Output Impedance:** Achieved through the cascode connection of M3.
*   **Reduced Output Voltage Swing:** Requires sufficient voltage headroom for both M2 and M3.

---

### 4. Voltage Transfer Characteristics (VTC) and Current Transfer Characteristics (CTC)

**4.1 Simple Current Mirror VTC:**

The VTC plots the output voltage ($V_{out}$) against the input voltage ($V_{in}$). For a current mirror, it's more common to analyze the $I_{out}$ vs $I_{in}$ relationship (CTC) and the output voltage compliance range.

**4.2 Simple Current Mirror CTC ($I_{out}$ vs $I_{in}$):**

*   **Ideal:** A straight line with a slope of 1, $I_{out} = I_{in}$, for all $I_{in}$.
*   **Non-Ideal (with $r_o$):** The line will have a slight slope greater than 1.
    $I_{out} \approx I_{in}(1 + \lambda V_{DS2})$
    As $I_{in}$ increases, $V_{GS}$ increases, leading to higher $V_{DS2}$ (for a given compliance), and thus $I_{out}$ might track $I_{in}$ with a slightly increasing ratio.

**4.3 Simple Current Mirror Output Voltage Compliance:**

*   **NMOS:**
    *   **Lower Limit:** $V_{out,min}$. Both M1 and M2 must be in saturation.
        For M1: $V_{DS1} \ge V_{GS1} - V_{th}$. Since $V_{DS1} = V_{GS1}$, this is satisfied.
        For M2: $V_{DS2} \ge V_{GS2} - V_{th}$. As $V_{DS2}$ decreases, M2 enters triode.
        The minimum output voltage is approximately $V_{GS2} - V_{th}$.
    *   **Upper Limit:** Limited by the supply voltage ($V_{DD}$).
*   **PMOS:**
    *   **Lower Limit:** Limited by the negative supply or ground.
    *   **Upper Limit:** $V_{out,max}$. Both M1 and M2 must be in saturation.
        For M1: $V_{SD1} \ge V_{SG1} - |V_{th}|$. Since $V_{SD1} = V_{SG1}$, this is satisfied.
        For M2: $V_{SD2} \ge V_{SG2} - |V_{th}|$.
        The maximum output voltage is approximately $V_{DD} - (V_{SG2} - |V_{th}|)$.

**4.4 Cascode Current Mirror Output Impedance:**

As discussed, the cascode structure drastically increases the output impedance. For an NMOS cascode mirror, $R_{out} \approx r_{o2} || [r_{o3} (1 + g_{m3} r_{o2})]$. This makes it an excellent current source.

**4.5 Cascode Current Mirror Voltage Compliance:**

*   **NMOS:**
    *   **Lower Limit:** For M2 to be in saturation, $V_{DS2} \ge V_{GS2} - V_{th}$.
        The output voltage is $V_{out} = V_{GS3} + V_{DS2}$.
        So, $V_{out,min} \approx V_{GS3} + V_{GS2} - V_{th}$. This is significantly higher than the simple mirror.
    *   **Upper Limit:** Limited by $V_{DD}$.
*   **PMOS:**
    *   **Lower Limit:** Limited by ground.
    *   **Upper Limit:** $V_{out,max} \approx V_{DD} - V_{GS3} - (V_{SG2} - |V_{th}|)$. This reduces the output voltage compliance.

---

### 5. Biasing Techniques for Cascode Current Mirrors

The bias voltage $V_{B1}$ for the cascode transistor (M3) is crucial.

*   **Fixed Bias Voltage:** Using a separate voltage source. In IC design, this is typically generated using a voltage divider or a more stable voltage reference circuit.
*   **Self-Biasing Techniques:**
    *   **Two-Stage Mirror:** Using a simpler current mirror to bias the gate of the cascode transistor.
    *   **Using a Current Source to Bias the Cascode Gate:** A separate current source can be used to establish the $V_{GS}$ for the cascode transistor.

**Example: Two-Stage Current Mirror (for biasing the cascode gate)**

A common approach is to use a simple current mirror to generate the bias voltage for the cascode gate.

![Cascode Biasing Example](https://i.imgur.com/J2r9zFk.png)
*(Conceptual Diagram)*

*   M1 and M2 form a simple current mirror, setting $V_{GS1} = V_{GS2}$.
*   M3 (cascode transistor) has its gate connected to the drain of M1.
*   This ensures that $V_{GS3}$ is set by $V_{GS1}$, and M3 is in saturation.
*   This configuration is often used to implement a high-output impedance current source.

---

### 6. Examples and Applications

*   **Active Loads in Amplifiers:** Cascode current mirrors provide high output impedance, making them excellent active loads for single-stage amplifiers, resulting in high voltage gain. (Relates to CO1).
*   **Biasing in Differential Amplifiers:** Current mirrors are used to bias the differential pair and to provide the tail current. (Relates to CO2).
*   **Current Sources in OP-AMPs:** Used in various stages of operational amplifiers to provide stable bias currents. (Relates to CO3).

---

### 7. Practice Questions and Exercises

**Question 1:**
Draw the circuit diagram for a simple NMOS current mirror. Assuming matched transistors and ideal operation ($r_o \to \infty$), what is the relationship between the input current ($I_{in}$) and the output current ($I_{out}$)? If $W_1/L_1 = W_2/L_2$, what is $I_{out}$ in terms of $I_{in}$?

**Answer 1:**
*   **Circuit Diagram:** Refer to the "Practical Simple NMOS Current Mirror" diagram above.
*   **Relationship:** In the ideal case with matched transistors and infinite output resistance, the gate-source voltages ($V_{GS}$) of M1 and M2 are equal. Since they have the same $W/L$ ratio and $V_{GS}$, their drain currents will be equal. Thus, $I_{out} = I_{in}$.

**Question 2:**
What is the primary advantage of using a cascode current mirror over a simple current mirror? Explain why.

**Answer 2:**
The primary advantage of a cascode current mirror is its significantly **higher output impedance**. This is because the cascode transistor (M3) effectively "shields" the output node from the output resistance ($r_{o2}$) of the mirroring transistor (M2). The output impedance of the cascode mirror is approximately $R_{out} \approx r_{o2} || [r_{o3} (1 + g_{m3} r_{o2})]$, which is much larger than $r_{o2}$ alone. This high output impedance is crucial for applications where the current mirror acts as an active load, leading to higher voltage gain in amplifiers.

**Question 3:**
Consider an NMOS simple current mirror where M1 and M2 have the same $W/L$ ratio but different threshold voltages, $V_{th1}$ and $V_{th2}$. If $I_{in}$ is the input current, how will $I_{out}$ compare to $I_{in}$? (Assume identical mobility, oxide capacitance, and no channel length modulation for simplicity).

**Answer 3:**
Let $I_{in} = I_{D1} = K \frac{W}{L} (V_{GS1} - V_{th1})^2$.
$I_{out} = I_{D2} = K \frac{W}{L} (V_{GS2} - V_{th2})^2$.
Since $V_{GS1} = V_{GS2}$, we have:
$\sqrt{I_{in}/(K \frac{W}{L})} = V_{GS1} - V_{th1}$
$\sqrt{I_{out}/(K \frac{W}{L})} = V_{GS2} - V_{th2}$
Since $V_{GS1} = V_{GS2}$:
$\sqrt{I_{in}} + V_{th1} = \sqrt{I_{out}} + V_{th2}$
$\sqrt{I_{out}} = \sqrt{I_{in}} + V_{th1} - V_{th2}$
$I_{out} = (\sqrt{I_{in}} + V_{th1} - V_{th2})^2$

*   If $V_{th1} > V_{th2}$, then $I_{out} > I_{in}$ (because a higher $V_{GS}$ is needed for M1 to draw $I_{in}$, and this same $V_{GS}$ will result in a larger current for M2 if $V_{th2}$ is lower).
*   If $V_{th1} < V_{th2}$, then $I_{out} < I_{in}$.

**Question 4:**
What is the main drawback of a cascode current mirror compared to a simple current mirror?

**Answer 4:**
The main drawback of a cascode current mirror is its **reduced output voltage compliance** (or swing). The cascode structure requires an additional voltage drop across the cascode transistor (M3), meaning the output voltage must be higher to keep both M2 and M3 in saturation. This limits the range of output voltages the circuit can operate within. For an NMOS cascode mirror, the minimum output voltage required is approximately $V_{GS3} + V_{GS2} - V_{th}$.

---

### 8. Important Points to Remember

*   **Current Mirror Function:** To replicate a current.
*   **Matching:** Crucial for accurate current mirroring. Mismatches in $W/L$, $V_{th}$, and $\mu C_{ox}$ degrade performance.
*   **Simple Mirror Limitations:** Low output impedance, limited current accuracy due to $r_o$.
*   **Cascode Mirror Advantage:** High output impedance, leading to better current accuracy when used as active loads.
*   **Cascode Mirror Disadvantage:** Reduced voltage compliance.
*   **Saturation Condition:** Ensure all transistors in the mirror are operating in the saturation region for proper functioning.
*   **$W/L$ Ratio:** The ratio of the width to the length of the MOSFETs determines the current scaling. For identical currents, $W_1/L_1 = W_2/L_2$.
*   **Channel Length Modulation:** The $r_o$ effect degrades current accuracy in simple mirrors and is responsible for the non-unity slope in their CTC.
*   **Bias Voltage:** Cascode mirrors require an additional bias voltage for the gate of the cascode transistor.

---

This detailed study note provides a comprehensive understanding of simple and cascode current mirror circuits, their operation, analysis, limitations, and applications, aligning with the provided learning outcomes and course objectives.