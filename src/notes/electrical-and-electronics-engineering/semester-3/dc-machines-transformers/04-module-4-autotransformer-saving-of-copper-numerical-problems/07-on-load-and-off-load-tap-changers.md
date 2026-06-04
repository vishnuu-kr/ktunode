---
title: "On load and off-load tap-changers"
subject: "DC MACHINES & TRANSFORMERS"
module: "Module 4: Autotransformer – saving of copper – numerical problems"
branch: "Electrical and Electronics Engineering"
semester: 3
topicId: "68a200832b85456187f35b38"
status: "completed"
scrapedAt: "2026-05-23T16:12:31.025Z"
---
# DC Machines & Transformers - Module 4: Autotransformer – Saving of Copper – Numerical Problems

---

## Topic: On Load and Off-Load Tap-Changers

**Course Outcome Alignment:**

*   **CO4:** Analyse the performance of 1-phase transformer and auto-transformer under various load conditions. (Knowledge Level: K3)
*   This topic directly addresses the performance analysis of autotransformers, specifically focusing on how voltage regulation is achieved through tap changers.

**Learning Outcomes Covered:**

*   Understand the necessity and working principle of tap changers in autotransformers.
*   Differentiate between on-load and off-load tap changers.
*   Analyze the circuit configurations and operation of both types of tap changers.
*   Discuss the advantages and disadvantages of each type.

---

### 1. Introduction to Tap Changers in Autotransformers

Autotransformers, unlike two-winding transformers, use a single winding with a tapped connection. This tapping point allows for variation of the transformation ratio. Tap changers are devices that are used to change this tapping point, thereby altering the output voltage of the autotransformer.

**Key Concept:** Autotransformers provide a variable voltage output by changing the number of turns in the secondary circuit, which is achieved by moving the tap position on the common winding.

**Necessity of Tap Changers:**

*   **Voltage Regulation:** To compensate for voltage drops due to load variations and maintain a constant output voltage.
*   **System Voltage Adjustment:** To match different voltage levels required by various loads or to adjust system voltages for optimal performance.
*   **Load Balancing:** In some applications, tap changers can be used to balance loads between parallel-connected transformers.

**Reference:**

*   **P.S. Bimbhra, "Electrical Machinery"**: Chapter on Transformers, discusses voltage regulation and the role of tap changers in maintaining it.
*   **D P Kothari & I J Nagrath, "Electric Machines"**: Similar coverage on transformer voltage control and tap changing mechanisms.

---

### 2. Off-Load Tap Changers

**Working Principle:**

Off-load tap changers operate when the autotransformer is **disconnected from the supply**. The winding is physically tapped at various points, and a selector mechanism is used to choose the desired tap.

**Construction and Operation:**

*   **Fixed Taps:** The autotransformer winding has multiple fixed tapping points.
*   **Manual or Automatic Selector:** A mechanism (often a rotary switch or a lever) is used to connect the output terminals to the desired tap.
*   **De-energized Operation:** The entire process of changing the tap must be performed when the autotransformer is de-energized to avoid arcing and damage to the contacts.

**Circuit Configurations:**

Imagine an autotransformer with a single winding. Different taps are brought out from this winding. The output is connected to one of these taps.

*   **Example:** An autotransformer with taps allowing for a 10% variation in output voltage. If the primary voltage is 11kV, taps might provide output voltages of 10.45kV, 11kV, 11.55kV (assuming a basic 1:1 ratio for simplicity of illustration).

**Advantages:**

*   **Simpler Construction:** Less complex mechanism compared to on-load tap changers.
*   **Lower Cost:** Generally more economical to manufacture.
*   **Less Maintenance:** Due to simpler design.

**Disadvantages:**

*   **Disruption of Supply:** The most significant disadvantage is the need to disconnect the autotransformer from the supply during tap changing, causing an interruption in power delivery.
*   **Inconvenience:** Frequent manual intervention is required for voltage adjustment.
*   **Not Suitable for Heavy Loads:** Where continuous power supply is critical.

**Reference:**

*   **K Murugesh Kumar, "DC Machines & Transformers"**: May have a section on transformer tap changers, potentially covering off-load types.
*   **J.B. Gupta, "Theory & Performance of Electrical Machines"**: Likely details the fundamental principles of tap changing.

---

### 3. On-Load Tap Changers (OLTC)

**Working Principle:**

On-load tap changers allow for changing the transformation ratio **while the autotransformer is energized and supplying load**. This is achieved through a more complex switching mechanism that ensures continuous power flow.

**Construction and Operation:**

OLTCs are typically divided into two main parts:

1.  **Diverter Switch (or Transition Resistor Switch):**
    *   **Purpose:** To smoothly transfer the load current from one tap to another without interrupting the circuit.
    *   **Mechanism:** It uses resistors (or sometimes impedance coils) in series with the contacts that are being opened. When switching from tap A to tap B, the diverter switch first connects tap A to tap B through a resistor. This diverter switch then disconnects the old tap and connects the new tap directly, bypassing the resistor.
    *   **Arc Suppression:** The resistor limits the current through the switching contacts during the transition, thereby reducing arcing.

2.  **Tap Selector Switch:**
    *   **Purpose:** To select the desired tap from the available fixed tapping points on the winding.
    *   **Mechanism:** It's a robust switch that can handle the full winding current but typically does not break the circuit under load. The diverter switch is responsible for the actual switching action.

**Types of On-Load Tap Changers:**

*   **Series Transition (with Resistors):** This is the most common type. As described above, resistors are used to limit current during the transition.
*   **Parallel Transition (with Reactors):** Less common, uses reactors to limit current.

**Circuit Configurations:**

OLTCs are usually connected in series with the winding. For an autotransformer, the tap changer can be connected to the high-voltage side, low-voltage side, or even on the common winding itself, depending on the desired voltage control.

*   **Example:** Consider an autotransformer stepping down voltage. The tap changer might be arranged to alter the number of turns utilized in the common winding. If the original ratio is 1.1:1 (HV:LV) and the tap changer is on the HV side, it might effectively create ratios like 1.05:1, 1.1:1, 1.15:1 by changing the number of effective turns on the HV side.

**Advantages:**

*   **Uninterrupted Power Supply:** The primary advantage is the ability to change voltage without interrupting the load.
*   **Continuous Voltage Regulation:** Allows for precise and continuous adjustment of output voltage to maintain desired levels.
*   **Suitable for Critical Loads:** Essential for applications where power interruptions are unacceptable (e.g., hospitals, data centers, industrial processes).

**Disadvantages:**

*   **Complex Construction:** The mechanism is significantly more intricate than off-load tap changers.
*   **Higher Cost:** Due to the complexity and precision required.
*   **Increased Maintenance:** Requires more regular maintenance and specialized knowledge.
*   **Potential for Contact Wear:** The diverter switch contacts undergo more stress due to frequent switching under load.
*   **Through-Impedance:** The tap changer mechanism introduces a small impedance in the transformer circuit, which can affect its performance.

**Reference:**

*   **P.S. Bimbhra, "Electrical Machinery"**: Provides detailed explanations and diagrams of OLTC operation.
*   **D P Kothari & I J Nagrath, "Electric Machines"**: Covers the technical aspects of OLTCs and their applications.
*   **J.B. Gupta, "Theory & Performance of Electrical Machines"**: Offers in-depth analysis of the switching process and circuit design of OLTCs.

---

### 4. Comparison: On-Load vs. Off-Load Tap Changers

| Feature              | Off-Load Tap Changer                                    | On-Load Tap Changer (OLTC)                                    |
| :------------------- | :------------------------------------------------------ | :------------------------------------------------------------ |
| **Operation**        | Requires disconnection from supply.                     | Operates while transformer is energized and under load.       |
| **Continuity of Supply** | Interrupted during tap change.                          | Continuous power supply.                                      |
| **Complexity**       | Simple mechanism.                                       | Complex mechanism (diverter and selector switches).             |
| **Cost**             | Lower.                                                  | Higher.                                                       |
| **Maintenance**      | Lower.                                                  | Higher, requires specialized knowledge.                       |
| **Arcing**           | No arcing during tap change (transformer is de-energized). | Arcing is handled by the diverter switch with resistors.      |
| **Application**      | Non-critical loads, where occasional voltage adjustment is sufficient. | Critical loads, systems requiring continuous voltage regulation. |
| **Reliability**      | Generally reliable due to simplicity.                   | Reliability depends on proper maintenance of complex parts.   |

---

### 5. Practice Questions/Exercises

**Question 1:**

An autotransformer has a single winding of 1000 turns. The tapping points are at 200 turns, 400 turns, 600 turns, and 800 turns from the LV end. If the primary voltage is 400V, what are the possible output voltages obtainable with an off-load tap changer?

**Answer 1:**

The transformation ratio for an autotransformer is given by $N_{HV}/N_{LV}$, where $N_{HV}$ and $N_{LV}$ are the number of turns in the high-voltage and low-voltage circuits, respectively. In an autotransformer, part of the HV winding is common with the LV winding.

Let the total number of turns in the winding be $N = 1000$.
Primary Voltage ($V_1$) = 400V.

The tapping points are measured from the LV end. This means the number of turns in the LV circuit ($N_2$) is varied. The number of turns in the HV circuit ($N_1$) remains fixed to the total number of turns (1000 turns).

*   **Tap 1 (200 turns from LV end):**
    *   $N_2 = 200$ turns
    *   $N_1 = 1000$ turns
    *   Transformation Ratio = $N_1 / N_2 = 1000 / 200 = 5$
    *   Output Voltage ($V_2$) = $V_1 / (\text{Ratio}) = 400V / 5 = 80V$.
    *   Alternatively, $V_2 = V_1 \times (N_2/N_1) = 400 \times (200/1000) = 400 \times 0.2 = 80V$.

*   **Tap 2 (400 turns from LV end):**
    *   $N_2 = 400$ turns
    *   $N_1 = 1000$ turns
    *   Transformation Ratio = $N_1 / N_2 = 1000 / 400 = 2.5$
    *   Output Voltage ($V_2$) = $V_1 / (\text{Ratio}) = 400V / 2.5 = 160V$.
    *   Alternatively, $V_2 = V_1 \times (N_2/N_1) = 400 \times (400/1000) = 400 \times 0.4 = 160V$.

*   **Tap 3 (600 turns from LV end):**
    *   $N_2 = 600$ turns
    *   $N_1 = 1000$ turns
    *   Transformation Ratio = $N_1 / N_2 = 1000 / 600 = 1.667$
    *   Output Voltage ($V_2$) = $V_1 / (\text{Ratio}) = 400V / 1.667 = 240V$.
    *   Alternatively, $V_2 = V_1 \times (N_2/N_1) = 400 \times (600/1000) = 400 \times 0.6 = 240V$.

*   **Tap 4 (800 turns from LV end):**
    *   $N_2 = 800$ turns
    *   $N_1 = 1000$ turns
    *   Transformation Ratio = $N_1 / N_2 = 1000 / 800 = 1.25$
    *   Output Voltage ($V_2$) = $V_1 / (\text{Ratio}) = 400V / 1.25 = 320V$.
    *   Alternatively, $V_2 = V_1 \times (N_2/N_1) = 400 \times (800/1000) = 400 \times 0.8 = 320V$.

**Possible Output Voltages:** 80V, 160V, 240V, 320V.

**Question 2:**

Discuss the primary advantage of using an on-load tap changer over an off-load tap changer in a power distribution system.

**Answer 2:**

The primary advantage of an on-load tap changer (OLTC) over an off-load tap changer is the **ability to change the voltage ratio and thereby regulate the output voltage without interrupting the power supply to the load.**

This is crucial in power distribution systems where continuous and stable voltage is required by consumers. An off-load tap changer necessitates taking the transformer out of service for every tap adjustment, which is impractical and disruptive for critical loads. OLTCs ensure uninterrupted service and maintain voltage quality even under fluctuating load conditions.

**Question 3:**

What is the role of the diverter switch in an on-load tap changer?

**Answer 3:**

The diverter switch in an on-load tap changer is responsible for **making and breaking the electrical connections when changing taps, while ensuring that the transformer remains energized and supplies power to the load.** It achieves this by using transition resistors (or reactors) that are temporarily inserted in series with the switching contacts.

When switching from one tap to another, the diverter switch first connects the old tap and the new tap through these resistors. This limits the current that flows through the contacts during the switching process, thereby minimizing arcing and preventing damage. Once the new tap is securely connected, the diverter switch bypasses the resistors, effectively completing the transition without breaking the main current path.

---

### 6. Important Points to Remember

*   **Autotransformers** use a single winding for both primary and secondary, offering copper savings.
*   **Tap Changers** are essential for voltage adjustment and regulation in autotransformers.
*   **Off-Load Tap Changers** require the transformer to be disconnected from the supply, causing service interruption. They are simpler and cheaper.
*   **On-Load Tap Changers (OLTC)** allow voltage changes without interrupting the supply, making them vital for continuous power delivery.
*   OLTCs use a **diverter switch** (with resistors) and a **tap selector switch** to facilitate smooth and safe tap changes under load.
*   The choice between on-load and off-load tap changers depends on the application's requirement for continuity of supply and economic considerations.

---
This study material provides a foundational understanding of on-load and off-load tap changers in the context of autotransformers. For a deeper dive into specific circuit designs, calculation of tap positions, and performance analysis with tap changers, refer to the recommended textbooks.
