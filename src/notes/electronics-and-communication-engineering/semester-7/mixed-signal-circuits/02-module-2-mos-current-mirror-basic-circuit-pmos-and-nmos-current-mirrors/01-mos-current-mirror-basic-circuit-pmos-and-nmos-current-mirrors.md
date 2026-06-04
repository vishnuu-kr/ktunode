---
title: "MOS Current Mirror: Basic circuit, PMOS and NMOS current mirrors"
subject: "MIXED SIGNAL CIRCUITS"
module: "Module 2: MOS Current Mirror: Basic circuit, PMOS and NMOS current mirrors"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c461b09ce205780ff421"
status: "completed"
scrapedAt: "2026-05-23T18:08:07.392Z"
---
# MIXED SIGNAL CIRCUITS - Module 2: MOS Current Mirror

## Topic: MOS Current Mirror: Basic Circuit, PMOS and NMOS Current Mirrors

**Module Description:** This module introduces the fundamental building block of analog integrated circuits: the MOS Current Mirror. We will explore its basic operation, analyze its performance characteristics, and delve into the implementation using both NMOS and PMOS transistors.

**Learning Outcomes:** Upon successful completion of this module, you will be able to:

*   Understand the basic operation of a MOS current mirror.
*   Analyze the output current of a basic MOS current mirror.
*   Explain the impact of device mismatch on current mirror accuracy.
*   Design simple current mirrors for specific current replication requirements.
*   Understand the operation and applications of both NMOS and PMOS current mirrors.
*   Analyze the limitations and performance trade-offs of current mirrors.

---

### 1. Introduction to Current Mirrors

A **current mirror** is a circuit that replicates a current from one part of a circuit to another. It is a fundamental building block in analog integrated circuits, used for biasing, creating active loads, and generating reference currents.

*   **Core Concept:** The principle behind a current mirror is to use a reference transistor to set a voltage across its gate-source terminals, and then use this same gate-source voltage to control a second transistor, thereby replicating the current.
*   **Importance in Analog Design:**
    *   **Biasing:** Provides stable and predictable bias currents for transistors in various amplifier stages.
    *   **Active Loads:** Replaces passive resistors with active devices, enabling higher gain and reduced chip area.
    *   **Current Steering:** Allows for precise control and distribution of currents within a circuit.
*   **Textbook Reference:** Behzad Razavi's "Design of Analog CMOS Integrated Circuits" (2nd Ed.) extensively covers the foundational principles of current mirrors in Chapter 4.

---

### 2. Basic MOS Current Mirror (Two-Transistor Mirror)

The simplest form of a MOS current mirror consists of two identical transistors (either NMOS or PMOS) sharing the same gate voltage.

#### 2.1 NMOS Current Mirror

**Circuit Diagram:**

```
      VDD
       |
       M1
      / \
     G---D
    /     \
   S-------+------ Iref
           |
           M2
          / \
         G---D
        /     \
       S-------+------ Iout
               |
              GND
```

*   **Components:**
    *   **M1:** The "reference" transistor.
    *   **M2:** The "output" transistor.
    *   **Input Current (Iref):** The current that is to be replicated.
    *   **Output Current (Iout):** The replicated current.
*   **Operation:**
    1.  **Reference Transistor (M1):** The input current $I_{ref}$ is passed through transistor M1. To ensure M1 is in saturation, its drain-source voltage ($V_{DS1}$) must be greater than or equal to its overdrive voltage ($V_{GS1} - V_{th}$).
    2.  **Gate Connection:** The gates of M1 and M2 are connected together. This ensures that $V_{GS1} = V_{GS2}$.
    3.  **Current Replication:** Since M1 and M2 are identical and have the same gate-source voltage, they will have the same drain current, provided they are both in saturation. Therefore, $I_{out} \approx I_{ref}$.

#### 2.2 Analysis of Ideal NMOS Current Mirror

Assuming both transistors are in saturation and neglecting channel-length modulation:

*   **Current Equation for NMOS Transistor in Saturation:** $I_D = \frac{1}{2} \mu_n C_{ox} \frac{W}{L} (V_{GS} - V_{th})^2$
*   **For M1:** $I_{ref} = \frac{1}{2} \mu_n C_{ox} \frac{W_1}{L_1} (V_{GS1} - V_{th})^2$
*   **For M2:** $I_{out} = \frac{1}{2} \mu_n C_{ox} \frac{W_2}{L_2} (V_{GS2} - V_{th})^2$

Since $V_{GS1} = V_{GS2}$ and assuming $W_1/L_1 = W_2/L_2$:

*   $I_{out} = I_{ref}$

**Important Point:** The input current $I_{ref}$ must be large enough to drive M1 into saturation. The voltage at the common gate node ($V_G$) is approximately $V_{GS\_sat} + V_{in}$ (where $V_{in}$ is the drain voltage of M2). For M2 to be in saturation, $V_{out} \ge V_{GS2} - V_{th}$.

#### 2.3 Real-World Considerations and Limitations (Non-Idealities)

*   **Channel-Length Modulation:** In reality, transistors are not ideal. Channel-length modulation causes the drain current to increase slightly with drain-source voltage.
    *   **Effect:** $I_D = \frac{1}{2} \mu_n C_{ox} \frac{W}{L} (V_{GS} - V_{th})^2 (1 + \lambda V_{DS})$
    *   For the current mirror, $I_{out} = I_{ref}(1 + \lambda V_{DS2}) / (1 + \lambda V_{DS1})$. If $V_{DS2} > V_{DS1}$, $I_{out} > I_{ref}$.
    *   To minimize this effect, $V_{DS1}$ and $V_{DS2}$ should be as close as possible, and longer channel lengths are preferred (larger $L$ leads to smaller $\lambda$).
    *   **Textbook Reference:** Sedra & Smith (6/e) discusses channel-length modulation in Chapter 6.
*   **Threshold Voltage Variations (Mismatch):** Even with identical W/L ratios, slight variations in fabrication can lead to differences in threshold voltages ($V_{th1} \ne V_{th2}$).
    *   **Effect:** If $V_{th1} \ne V_{th2}$, then for $V_{GS1} = V_{GS2}$, the currents will not be equal.
    *   **Mitigation:** Using wider transistors and longer channel lengths ($W/L$ ratio) helps reduce the impact of these variations. Techniques like common centroid layout are also employed.
    *   **Reference Book:** Allen & Holbery's "CMOS Analog Circuit Design" (3/e) covers device matching and its impact in Chapter 11.
*   **Output Resistance:** The output resistance of a current mirror is not infinite, which affects its performance when used as a load. The output resistance is primarily determined by the output resistance of the mirroring transistor (M2).
    *   $R_{out2} \approx r_{o2} = \frac{1}{\lambda I_{D2}} = \frac{2 L_2}{\mu_n C_{ox} W_2 (V_{GS2} - V_{th})} = \frac{2}{I_{ref} \lambda}$ (approximating $I_{D2} \approx I_{ref}$)
*   **Compliance Voltage:** The minimum output voltage ($V_{out}$) required to keep M2 in saturation is $V_{GS2} - V_{th}$. This is known as the compliance voltage. If $V_{out}$ drops below this, M2 enters the triode region, and the current becomes highly dependent on $V_{out}$.

---

### 3. PMOS Current Mirror

A PMOS current mirror operates on the same principle as the NMOS mirror but uses PMOS transistors.

**Circuit Diagram:**

```
       VDD
        |
       M1 (PMOS)
      / \
     G---D
    /     \
   S-------+------ Iref
           |
           M2 (PMOS)
          / \
         G---D
        /     \
       S-------+------ Iout
               |
              GND
```

*   **Components:**
    *   **M1:** Reference PMOS transistor.
    *   **M2:** Output PMOS transistor.
*   **Operation:**
    1.  **Reference Transistor (M1):** The input current $I_{ref}$ is passed through transistor M1. For M1 to be in saturation, its drain-source voltage ($V_{SD1}$) must be greater than or equal to its overdrive voltage ($|V_{SG1} - V_{th}|$).
    2.  **Gate Connection:** The gates of M1 and M2 are connected together, ensuring $V_{SG1} = V_{SG2}$.
    3.  **Current Replication:** Since $V_{SG1} = V_{SG2}$ and assuming identical $W/L$ ratios, the currents will be replicated: $I_{out} \approx I_{ref}$.

#### 3.1 Analysis of Ideal PMOS Current Mirror

*   **Current Equation for PMOS Transistor in Saturation:** $I_D = \frac{1}{2} \mu_p C_{ox} \frac{W}{L} (V_{SG} - V_{th})^2$ (Note: $V_{th}$ for PMOS is typically negative)
*   **For M1:** $I_{ref} = \frac{1}{2} \mu_p C_{ox} \frac{W_1}{L_1} (V_{SG1} - V_{th})^2$
*   **For M2:** $I_{out} = \frac{1}{2} \mu_p C_{ox} \frac{W_2}{L_2} (V_{SG2} - V_{th})^2$

Assuming $V_{SG1} = V_{SG2}$ and $W_1/L_1 = W_2/L_2$:

*   $I_{out} = I_{ref}$

**Important Point:** The input current $I_{ref}$ is flowing from the source to the drain of the PMOS transistor. The voltage $V_{SG}$ is a positive value (magnitude). The output voltage $V_{out}$ is typically lower than the gate voltage.

#### 3.2 Real-World Considerations for PMOS Mirrors

The limitations are similar to NMOS mirrors: channel-length modulation, threshold voltage variations, output resistance, and compliance voltage. The compliance voltage for a PMOS mirror is $V_{out} \ge V_{SG2} - |V_{th}|$.

---

### 4. Current Mirror with Different Aspect Ratios ($W/L$)

Often, it's desirable to scale the output current. This can be achieved by setting different $W/L$ ratios for the mirroring transistors.

**NMOS Mirror Example:**

If we want $I_{out} = k \cdot I_{ref}$, we can set $W_2/L_2 = k \cdot (W_1/L_1)$.

*   $I_{ref} = \frac{1}{2} \mu_n C_{ox} \frac{W_1}{L_1} (V_{GS1} - V_{th})^2$
*   $I_{out} = \frac{1}{2} \mu_n C_{ox} \frac{W_2}{L_2} (V_{GS2} - V_{th})^2$

Since $V_{GS1} = V_{GS2}$:

*   $\frac{I_{out}}{I_{ref}} = \frac{W_2/L_2}{W_1/L_1}$
*   $I_{out} = I_{ref} \cdot \frac{W_2/L_2}{W_1/L_1}$

**Important Point:** While this allows current scaling, it also amplifies the effect of mismatch. If $W_2/L_2$ is much larger than $W_1/L_1$, the tolerance in $V_{th}$ will have a proportionally larger impact on the output current.

**Textbook Reference:** Baker et al. in "CMOS: Circuits Design, Layout and Simulation" (2000) provides detailed examples of current mirror design, including aspect ratio scaling in Chapter 3.

---

### 5. Cascode Current Mirror (Brief Introduction)

To improve the output resistance and reduce the dependence of $I_{out}$ on $V_{out}$ (thus increasing the output swing), a cascode transistor can be added. This will be covered in more detail in later modules.

*   **Concept:** The cascode transistor acts as a current buffer, presenting a high impedance to the output.

---

### 6. Applications of Current Mirrors

*   **Active Loads:** Replacing resistors in amplifiers to achieve higher gain and smaller area.
*   **Biasing Circuits:** Providing stable bias currents for differential pairs and other circuit blocks.
*   **Current Sources:** Generating a constant current that is independent of voltage variations (within limits).
*   **Level Shifters:** Shifting current levels in a circuit.

---

### 7. Practice Questions and Answers

**Question 1:**
Consider a basic NMOS current mirror with $I_{ref} = 100 \mu A$, $V_{th} = 0.5V$, and $\mu_n C_{ox} (W/L) = 1 mA/V^2$.
a) Calculate the required $V_{GS}$ for the transistors.
b) If $V_{out}$ is $1.5V$, and $\lambda = 0.02 V^{-1}$, calculate the actual $I_{out}$.

**Answer 1:**
a) For M1 in saturation, $I_{ref} = \frac{1}{2} \mu_n C_{ox} \frac{W}{L} (V_{GS} - V_{th})^2$.
$100 \mu A = \frac{1}{2} (1 mA/V^2) (V_{GS} - 0.5V)^2$
$0.1 mA = 0.5 mA/V^2 (V_{GS} - 0.5V)^2$
$(V_{GS} - 0.5V)^2 = 0.1 / 0.5 = 0.2 V^2$
$V_{GS} - 0.5V = \sqrt{0.2} \approx 0.447V$
$V_{GS} \approx 0.5V + 0.447V = 0.947V$

b) To calculate $I_{out}$ with channel-length modulation:
First, we need $V_{DS1}$. Assume $V_{DS1} \approx V_{GS1} - V_{th}$ for the minimum saturation voltage.
$V_{DS1\_min} = V_{GS1} - V_{th} = 0.947V - 0.5V = 0.447V$. Let's assume $V_{DS1} = 0.5V$ for simplicity (often $V_{DS1}$ is designed to be slightly above the minimum).
$I_{ref} = \frac{1}{2} \mu_n C_{ox} \frac{W}{L} (V_{GS} - V_{th})^2 (1 + \lambda V_{DS1})$
$100 \mu A = 100 \mu A (1 + 0.02 V_{DS1})$
$1 = 1 + 0.02 V_{DS1} \implies V_{DS1} = 0$, which is not possible. This shows the ideal calculation for $V_{GS}$ implicitly assumes $1+\lambda V_{DS}=1$.

Let's re-calculate $V_{GS}$ using the full equation assuming $V_{DS1} = 0.5V$:
$I_{ref} = \frac{1}{2} (1 mA/V^2) (V_{GS} - 0.5V)^2 (1 + 0.02 \times 0.5)$
$0.1 mA = 0.5 mA/V^2 (V_{GS} - 0.5V)^2 (1.01)$
$(V_{GS} - 0.5V)^2 = 0.1 / (0.5 \times 1.01) = 0.1 / 0.505 \approx 0.198 V^2$
$V_{GS} - 0.5V \approx \sqrt{0.198} \approx 0.445V$
$V_{GS} \approx 0.945V$

Now, assuming $V_{GS1} = V_{GS2} = 0.945V$ and $V_{DS2} = 1.5V$:
$I_{out} = \frac{1}{2} \mu_n C_{ox} \frac{W}{L} (V_{GS2} - V_{th})^2 (1 + \lambda V_{DS2})$
$I_{out} = \frac{1}{2} (1 mA/V^2) (0.945V - 0.5V)^2 (1 + 0.02 \times 1.5V)$
$I_{out} = \frac{1}{2} (1 mA/V^2) (0.445V)^2 (1 + 0.03)$
$I_{out} = 0.5 mA/V^2 \times 0.198 V^2 \times 1.03$
$I_{out} \approx 0.099 mA \times 1.03 \approx 102 \mu A$

**Question 2:**
A current mirror uses transistors with a $W/L$ ratio of $10/1$ for the reference transistor. If the output current needs to be $50 \mu A$ and the reference current is $20 \mu A$, what $W/L$ ratio should the output transistor have, assuming ideal conditions?

**Answer 2:**
Using the equation $\frac{I_{out}}{I_{ref}} = \frac{W_2/L_2}{W_1/L_1}$:
$\frac{50 \mu A}{20 \mu A} = \frac{W_2/L_2}{10/1}$
$2.5 = \frac{W_2/L_2}{10}$
$W_2/L_2 = 2.5 \times 10 = 25$
The output transistor should have a $W/L$ ratio of $25/1$.

---

### 8. Important Points to Remember

*   **Saturation Condition:** Both transistors in a current mirror must be in saturation for proper operation. For NMOS, $V_{DS} \ge V_{GS} - V_{th}$. For PMOS, $V_{SD} \ge V_{SG} - |V_{th}|$.
*   **Channel-Length Modulation:** Leads to $I_{out} > I_{ref}$ if $V_{DS2} > V_{DS1}$. Use long channels or cascode structures to minimize this.
*   **Device Mismatch:** Variations in $V_{th}$ and $\mu C_{ox}$ cause current errors. Use larger $W/L$ ratios and good layout practices to improve matching.
*   **Compliance Voltage:** The minimum output voltage required to maintain saturation.
*   **Current Scaling:** Achieved by adjusting $W/L$ ratios, but at the expense of increased sensitivity to mismatch.
*   **PMOS vs. NMOS:** Similar principles, but signal polarities are reversed. PMOS mirrors are often used when a lower output voltage swing is required relative to $V_{DD}$.

---

### 9. Alignment with Course Outcomes

*   **CO1: Explain various Single stage Amplifiers with different types of loads (Knowledge Level: K2)**
    *   This module directly supports CO1 by introducing the current mirror, a fundamental component used to create active loads for single-stage amplifiers. Understanding current mirrors is crucial for analyzing the performance (gain, output impedance) of amplifiers with active loads.
*   **CO2: Explain Differential Amplifiers & Current Mirrors (Knowledge Level: K2)**
    *   This module is dedicated to explaining current mirrors, fulfilling a significant part of CO2. Current mirrors are essential for biasing differential amplifiers and often form the tail current source.
*   **CO3: Apply the knowledge of amplifiers in the design of two stage OPAMP (Knowledge Level: K3)**
    *   The current mirror, as a building block for active loads and biasing, is integral to the design of the cascaded stages in a two-stage op-amp. The understanding gained here is directly applicable.
*   **CO4: Illustrate the concept of frequency compensation in OPAMP (Knowledge Level: K2)**
    *   While not directly covered in this module, the stability analysis for frequency compensation often involves understanding the impedance characteristics of the stages, including those driven by current mirrors.
*   **CO5: Describe the specifications and architectures of data converter circuits (Knowledge Level: K2)**
    *   Current mirrors are used in various data converter architectures, for example, in generating reference currents for DACs or biasing comparators in ADCs.

---
This concludes the study notes for Module 2: MOS Current Mirror. Remember to refer to the provided textbooks for more in-depth explanations and examples.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
