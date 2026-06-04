---
title: "SCR: Structure, two transistor analogy, static characteristics."
subject: "POWER ELECTRONICS"
module: "Module 2: SCR: Structure, two transistor analogy, static characteristics."
branch: "Electronics and Communication Engineering"
semester: 4
topicId: "68a5c45eb09ce205780fe5f9"
status: "completed"
scrapedAt: "2026-05-23T17:52:09.831Z"
---
# Power Electronics: Module 2 - Silicon Controlled Rectifier (SCR)

## Topic: SCR: Structure, Two Transistor Analogy, Static Characteristics

---

### 1. Introduction to SCR (Silicon Controlled Rectifier)

*   **Definition:** The SCR, also known as a thyristor, is a four-layer, three-terminal semiconductor switching device. It is a unidirectional device that can conduct current only in one direction when triggered.
*   **Significance:** SCRs are widely used in power control applications such as AC power control, rectifiers, inverters, choppers, and motor control due to their high power handling capabilities, efficiency, and ability to withstand high voltages and currents.
*   **Relevance to Course Outcomes:**
    *   **CO1 (K2):** Outlines the operation and characteristics of power semiconductor devices. Understanding the SCR's structure and characteristics is fundamental to this outcome.
    *   **CO2 (K3):** Design and analyze rectifier circuits. SCRs are key components in controlled rectifiers.
    *   **CO3 (K3):** Analyze power converter circuits. SCRs are used in various DC-DC and DC-AC converters.
    *   **CO4 (K2):** Illustrate inverter circuits. SCRs are essential building blocks for many inverter topologies.

---

### 2. SCR: Structure

*   **Layer Structure:** An SCR is a PNPN device, meaning it consists of four alternating semiconductor layers.
    *   **Anode (A):** The P-type material at one end.
    *   **Cathode (K):** The N-type material at the other end.
    *   **Gate (G):** A third terminal, usually made by alloying or diffusing a small P-type region into the outermost N-layer near the cathode.
*   **Junctions:** The four layers create three PN junctions:
    *   **J1:** Between the first P and first N layers (Anode side).
    *   **J2:** Between the first N and second P layers (Center junction).
    *   **J3:** Between the second P and second N layers (Cathode side).

*   **Visual Representation:**

    ```
        Anode (A) ---- P ---- J1 ---- N ---- J2 ---- P ---- J3 ---- N ---- Cathode (K)
                                        |
                                        Gate (G)
    ```

*   **Terminals:**
    *   **Anode (A):** Current flows from Anode to Cathode.
    *   **Cathode (K):** Return path for the current.
    *   **Gate (G):** Control terminal used to initiate conduction.

*   **Textbook References:**
    *   **L Umanand (Wiley India):** Chapter 3, "Thyristors," discusses the basic structure and PNPN configuration of SCRs.
    *   **Muhammad H Rashid (Pearson India):** Chapter 2, "Semiconductor Devices," provides a detailed explanation of the structure and junctions of thyristors.

---

### 3. SCR: Two Transistor Analogy

*   **Concept:** The PNPN structure of an SCR can be conceptually divided into two interconnected bipolar junction transistors (BJTs):
    *   A PNP transistor (often referred to as the "upper" transistor) with its emitter connected to the anode.
    *   An NPN transistor (often referred to as the "lower" transistor) with its emitter connected to the cathode.
*   **Interconnection:**
    *   The **collector of the PNP transistor (Q1)** is connected to the **base of the NPN transistor (Q2)**.
    *   The **collector of the NPN transistor (Q2)** is connected to the **base of the PNP transistor (Q1)**.
    *   The **anode (A)** of the SCR is the **emitter of Q1**.
    *   The **cathode (K)** of the SCR is the **emitter of Q2**.
    *   The **gate (G)** terminal is connected to the **base of the NPN transistor (Q2)**.

*   **Analogy Diagram:**

    ```
                Anode (A) ---- Emitter of Q1 (PNP)
                                      |
                                      Collector of Q1
                                      |
                                Base of Q2 (NPN) ---- Gate (G)
                                      |
                                Collector of Q2
                                      |
                Cathode (K) ---- Emitter of Q2 (NPN)
    ```

*   **Operation Explained by Analogy:**
    *   **Blocking State (Off):** When no gate current is applied and the anode is positive with respect to the cathode, both junctions J1 and J3 are forward-biased, but junction J2 is reverse-biased. This prevents significant current flow, and the SCR is in the blocking state.
    *   **Triggering:** When a positive pulse of current is applied to the gate terminal, it forward-biases the base-emitter junction of the NPN transistor (Q2). This causes Q2 to conduct.
    *   **Regenerative Feedback:** As Q2 starts conducting, its collector current flows into the base of the PNP transistor (Q1), causing Q1 to conduct. The collector current of Q1 then flows into the base of Q2, further increasing the base current of Q2. This positive feedback loop (regenerative action) leads to a rapid increase in collector currents of both transistors, which collectively constitute the anode current of the SCR.
    *   **Conduction State (On):** Once triggered, the SCR enters the conduction state, and current flows from anode to cathode. The device remains in the ON state even if the gate signal is removed, as long as the anode current is above a certain minimum value called the **holding current**.
    *   **Turn-Off:** The SCR turns off when the anode current falls below the holding current or when the anode-cathode voltage is reversed.

*   **Gain Consideration:**
    *   Let $\alpha_1$ be the current gain of the PNP transistor (Q1) and $\alpha_2$ be the current gain of the NPN transistor (Q2).
    *   The anode current ($I_A$) is approximately the sum of the collector current of Q1 ($I_{C1}$) and the collector current of Q2 ($I_{C2}$).
    *   $I_A = I_{C1} + I_{C2} = \alpha_1 I_A + \alpha_2 I_G'$ (where $I_G'$ is the current flowing into the base of Q2 from Q1's collector).
    *   The gate current ($I_G$) primarily controls the current entering the base of Q2.
    *   The condition for latch-up and sustained conduction is when the sum of the current gains is greater than or equal to 1: $\alpha_1 + \alpha_2 \ge 1$.
    *   This condition signifies that the regenerative process is strong enough to sustain conduction without external gate drive.

*   **Textbook References:**
    *   **L Umanand (Wiley India):** Chapter 3, "Thyristors," provides a detailed explanation of the two-transistor analogy and the latch-up condition.
    *   **Muhammad H Rashid (Pearson India):** Chapter 2, "Semiconductor Devices," offers a comprehensive breakdown of the two-transistor model and its implications for SCR operation.
    *   **Joseph Vithayathil (Tata McGraw-HILL):** Chapter 4, "Thyristor Theory," elaborates on the two-transistor model and the regenerative feedback mechanism.

---

### 4. SCR: Static Characteristics

Static characteristics describe the behavior of the SCR under steady-state DC conditions, specifically its voltage-current relationship.

#### 4.1. Anode Current vs. Anode Voltage (Without Gate Current)

This characteristic shows the SCR's behavior when no gate current is applied.

*   **Regions of Operation:**
    *   **Forward Blocking Region (Region 1):**
        *   When the anode is positive with respect to the cathode ($V_{AK} > 0$) and the gate current is zero, junction J2 is reverse-biased.
        *   Only a very small leakage current flows from anode to cathode.
        *   The SCR acts like an open switch.
        *   The voltage across the SCR can be as high as the forward breakover voltage ($V_{FB O}$).
    *   **Forward Conduction Region (Region 3):**
        *   If the anode-cathode voltage ($V_{AK}$) exceeds the forward breakover voltage ($V_{FB O}$), or if the gate is triggered, the SCR turns ON.
        *   Junction J2 becomes forward-biased, and the SCR conducts a large current from anode to cathode.
        *   The voltage across the SCR drops to a low value, known as the **on-state voltage drop** ($V_{T}$ or $V_{AK(on)}$), typically around 1-2V.
    *   **Reverse Blocking Region (Region 2):**
        *   When the anode is negative with respect to the cathode ($V_{AK} < 0$), junction J1 and J3 are reverse-biased, and J2 is forward-biased.
        *   The SCR blocks current flow in the reverse direction, similar to a diode.
        *   A small leakage current flows.
        *   If the reverse voltage ($V_{AK}$) becomes sufficiently negative, it can reach the **reverse breakover voltage** ($V_{RB O}$), causing avalanche breakdown and conduction. However, SCRs are typically not operated beyond the reverse breakover voltage as it can damage the device.

*   **Forward Breakover Voltage ($V_{FB O}$):** This is the minimum forward anode-cathode voltage that causes the SCR to switch from the forward blocking state to the forward conduction state when no gate current is applied. It is a critical parameter for SCRs.

*   **Voltage-Current Characteristic Curve (Without Gate):**

    ```
           ^  Anode Current (IA)
           |
           |        Region 1: Forward Blocking
           |        (High Voltage, Low Current)
           |      .
           |     .
           |    .
           |   .
    -------+--.----------------> Anode Voltage (VAK)
           |  .
           | .
           |................... Region 2: Reverse Blocking (Low Current)
           |
           |
           |
           |
           V
    ```
    *   (Note: The diagram above is a simplified representation. The actual transition in the forward conduction region is very steep.)

*   **Textbook References:**
    *   **Muhammad H Rashid (Pearson India):** Chapter 2, "Semiconductor Devices," details the forward blocking, forward conduction, and reverse blocking regions.
    *   **L Umanand (Wiley India):** Chapter 3, "Thyristors," explains the static $V-I$ characteristics, including the breakover voltage.

#### 4.2. Anode Current vs. Anode Voltage (With Gate Current)

This characteristic shows how applying gate current influences the SCR's turn-on behavior.

*   **Effect of Gate Current:** Applying a gate current ($I_G$) lowers the voltage required to trigger the SCR into conduction.
*   **Gate Trigger Voltage ($V_{GT}$) / Gate Trigger Current ($I_{GT}$):** These are the minimum voltage and current, respectively, required at the gate terminal to turn the SCR ON for a given anode-cathode voltage.
*   **Characteristic Curves:**
    *   For a given forward blocking voltage, increasing gate current shifts the turn-on point to a lower anode-cathode voltage.
    *   If the gate current is sufficient ($I_G \ge I_{GT}$ for $V_{AK} \ge V_{GT}$), the SCR will switch from the forward blocking state to the forward conduction state at a lower anode-cathode voltage than $V_{FB O}$.
    *   Multiple curves can be plotted for different values of gate current, showing that a higher gate current allows triggering at a lower forward anode-cathode voltage.

*   **Voltage-Current Characteristic Curve (With Gate):**

    ```
           ^  Anode Current (IA)
           |
           |  (VAK without gate)
           |      .
           |     .
           |    .
    -------+--.----------------> Anode Voltage (VAK)
           |  .   .
           | .   .  <-- Triggered by gate current IG
           |.......
           |
           V
    ```

*   **Triggering Condition:** The SCR turns ON when:
    *   $V_{AK} > V_{FB O}$ (without gate current)
    *   OR $I_G \ge I_{GT}$ (for a given $V_{AK}$)
    *   OR $V_{AK}$ reaches the breakdown voltage determined by the gate current.

*   **Textbook References:**
    *   **Muhammad H Rashid (Pearson India):** Chapter 2, "Semiconductor Devices," illustrates the effect of gate current on the $V-I$ characteristics.
    *   **L Umanand (Wiley India):** Chapter 3, "Thyristors," discusses the gate trigger characteristics and the reduction of breakover voltage with gate current.

#### 4.3. Key Parameters and Concepts

*   **Forward Breakover Voltage ($V_{FB O}$):** The voltage at which the SCR turns ON in the absence of gate current.
*   **Reverse Breakover Voltage ($V_{RB O}$):** The voltage at which the SCR breaks down in reverse bias. Usually, $V_{RB O} \approx |V_{FB O}|$.
*   **Holding Current ($I_H$):** The minimum anode current required to maintain the SCR in the ON state. If the anode current falls below $I_H$, the SCR turns OFF. This is a crucial parameter for turn-off.
*   **Latching Current ($I_L$):** The minimum anode current that must flow after triggering to ensure that the SCR remains ON even after the gate signal is removed. Typically, $I_L > I_H$. Once the anode current exceeds $I_L$, the gate loses control, and the SCR latches into the conducting state.
*   **On-State Voltage Drop ($V_{AK(on)}$ or $V_T$):** The small voltage drop across the SCR when it is conducting current (typically 1-2V). This causes power dissipation in the form of heat.
*   **Gate Trigger Current ($I_{GT}$):** The minimum gate current required to trigger the SCR into conduction.
*   **Gate Trigger Voltage ($V_{GT}$):** The minimum gate voltage required to trigger the SCR into conduction.
*   **dV/dt Rating:** The maximum rate of change of anode-cathode voltage that the SCR can withstand without unintentionally turning ON when it is in the forward blocking state. A high dV/dt can cause charge carrier multiplication across the junction J2, leading to spurious triggering.
*   **di/dt Rating:** The maximum rate of change of anode current that the SCR can withstand during switching from the OFF state to the ON state. A high di/dt can cause localized heating at the gate region, potentially damaging the device.
*   **Surge Current Rating:** The maximum instantaneous current that the SCR can safely conduct for a very short duration without permanent damage.

*   **Textbook References:**
    *   **All listed textbooks** extensively cover these key parameters and their importance in SCR selection and application.

---

### 5. Learning Outcome Alignment & Practice Questions

This section directly addresses the learning outcomes.

*   **CO1 (K2): Outline the operation of power semiconductor devices and its characteristics.**
    *   **How this module contributes:** By understanding the structure, two-transistor analogy, and static V-I characteristics of SCRs, students can outline the fundamental operation (blocking, triggering, conduction, turn-off) and key performance parameters of this vital power semiconductor device.

*   **CO2 (K3): Design and analyze various rectifier circuits for power devices.**
    *   **How this module contributes:** Knowledge of SCR characteristics (triggering, holding current, forward blocking) is essential for designing and analyzing controlled rectifiers, where SCRs are used to control the average output voltage by varying the firing angle.

*   **CO3 (K3): Analyze different power converter circuits.**
    *   **How this module contributes:** SCRs are fundamental switching elements in many power converters like choppers (DC-DC converters) and cycloconverters. Analyzing these circuits requires understanding when and how the SCRs switch ON and OFF based on their static and dynamic characteristics.

*   **CO4 (K2): Illustrate different types of inverter circuits.**
    *   **How this module contributes:** SCRs are used in the construction of many basic inverter circuits (e.g., voltage source inverters, current source inverters) to convert DC power to AC power. Understanding SCR operation is key to illustrating these circuit topologies.

---

### 6. Practice Questions and Exercises

**(Note: Answers are provided after each question.)**

**Question 1:**
Describe the PNPN structure of an SCR and identify its three terminals. What are the three PN junctions within an SCR?

**Answer:**
An SCR has a four-layer PNPN structure. Its three terminals are the Anode (A), Cathode (K), and Gate (G). The three PN junctions are J1 (Anode-side P-N junction), J2 (center P-N junction), and J3 (Cathode-side P-N junction).

---

**Question 2:**
Explain the two-transistor analogy for an SCR. How does the regenerative feedback mechanism operate in this analogy, and what is the condition for latch-up?

**Answer:**
The two-transistor analogy models an SCR as two interconnected transistors: a PNP transistor (Q1) with its emitter connected to the anode, and an NPN transistor (Q2) with its emitter connected to the cathode. The collector of Q1 is connected to the base of Q2, and the collector of Q2 is connected to the base of Q1. Regenerative feedback occurs when the output current of one transistor drives the input of the other, leading to an increase in both currents. Latch-up occurs when the sum of the current gains of the two transistors ($\alpha_1 + \alpha_2$) becomes greater than or equal to 1, meaning the device can sustain conduction without external gate drive.

---

**Question 3:**
What is the forward breakover voltage ($V_{FB O}$), and how does it relate to the triggering of an SCR without a gate signal?

**Answer:**
The forward breakover voltage ($V_{FB O}$) is the minimum forward anode-cathode voltage that causes an SCR to switch from the forward blocking state to the forward conduction state when no gate current is applied. Applying a voltage greater than $V_{FB O}$ will trigger the SCR ON.

---

**Question 4:**
How does applying a gate current affect the static characteristics of an SCR, particularly the voltage required for triggering?

**Answer:**
Applying a gate current lowers the anode-cathode voltage required to trigger the SCR into conduction. With increasing gate current, the turn-on voltage decreases. This means an SCR can be triggered ON by a smaller forward voltage if a sufficient gate current is applied.

---

**Question 5:**
Define the holding current ($I_H$) and latching current ($I_L$) for an SCR. Which of these determines if the SCR stays ON after the gate signal is removed?

**Answer:**
The holding current ($I_H$) is the minimum anode current required to maintain the SCR in the ON state. If the anode current drops below $I_H$, the SCR turns OFF. The latching current ($I_L$) is the minimum anode current that must flow after triggering to ensure the SCR remains ON even after the gate signal is removed. The **holding current** ($I_H$) is the parameter that determines if the SCR stays ON after the gate signal is removed, provided the anode current is above $I_H$. (Note: Often $I_L$ is mentioned as the threshold for latching, but $I_H$ is the critical value to maintain conduction. For practical purposes, ensuring anode current is above $I_L$ guarantees latching and subsequent maintenance by $I_H$.)

---

**Question 6:**
An SCR has a forward breakover voltage of 800V. If it is to be used in a circuit where the forward voltage can reach 700V, what is the minimum gate current required to trigger the device into conduction? (Assume the SCR is triggered at a forward anode-cathode voltage of 400V with this gate current).

**Answer:**
Since the forward anode-cathode voltage (700V) is less than the forward breakover voltage (800V), the SCR will not trigger ON without a gate signal. To trigger the SCR at 700V, a gate current must be applied. The question implies that the gate current is sufficient to trigger the SCR at 400V. This means the device will also be triggered at 700V by this same gate current because 700V is well above the voltage required for triggering with the applied gate current. To determine the specific minimum gate current, we would need the gate trigger characteristics ($I_G$ vs. $V_{AK}$ for triggering), which are not provided. However, the question highlights that a gate current is necessary when $V_{AK} < V_{FB O}$.

---

### 7. Important Points to Remember

*   **PNPN Structure:** The fundamental building block of an SCR.
*   **Two-Transistor Analogy:** A useful model for understanding regenerative feedback and latch-up.
*   **Regenerative Feedback:** The positive feedback loop in the two-transistor model is crucial for SCR turn-on.
*   **Latch-up Condition:** $\alpha_1 + \alpha_2 \ge 1$.
*   **Static Characteristics:** Define the voltage-current relationship in DC operation.
*   **Forward Blocking:** The OFF state where high forward voltage can be blocked.
*   **Forward Conduction:** The ON state where low voltage drop and high current flow.
*   **Reverse Blocking:** The OFF state in reverse bias.
*   **Triggering:** SCR can be triggered by exceeding $V_{FB O}$ or by applying sufficient gate current ($I_G$).
*   **Holding Current ($I_H$):** Critical for turn-off. Anode current must fall below $I_H$ to switch OFF.
*   **Latching Current ($I_L$):** Ensures the SCR remains ON after the gate signal is removed.
*   **dV/dt and di/dt Ratings:** Important for safe operation and preventing spurious triggering or damage.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
