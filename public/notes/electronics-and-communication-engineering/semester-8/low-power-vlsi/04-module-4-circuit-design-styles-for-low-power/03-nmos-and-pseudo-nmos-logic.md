---
title: "NMOS and Pseudo –NMOS logic"
subject: "LOW POWER VLSI"
module: "Module 4: Circuit Design Styles for Low Power"
branch: "Electronics and Communication Engineering"
semester: 8
topicId: "68a5c462b09ce205780ff691"
status: "completed"
scrapedAt: "2026-05-23T18:14:53.710Z"
---
# LOW POWER VLSI: Module 4 - Circuit Design Styles for Low Power
## Topic: NMOS and Pseudo-NMOS Logic

---

### **1. Introduction to NMOS and Pseudo-NMOS Logic**

This topic delves into two fundamental logic families: NMOS logic and Pseudo-NMOS logic. Understanding these is crucial for comprehending the evolution of digital circuit design and the inherent power dissipation characteristics associated with them, especially in the context of low-power VLSI.

**Key Concepts:**

*   **Logic Family:** A set of integrated circuit building blocks that perform logic operations. Different logic families have varying characteristics in terms of speed, power consumption, noise immunity, and implementation complexity.
*   **NMOS Transistor:** A type of MOSFET where conduction occurs due to the movement of electrons. It acts as a switch that turns ON when the gate-to-source voltage ($V_{GS}$) is above the threshold voltage ($V_{th}$) and OFF otherwise.
*   **Pull-up Network (PUN):** The part of a logic gate that pulls the output voltage up to the supply voltage ($V_{DD}$).
*   **Pull-down Network (PDN):** The part of a logic gate that pulls the output voltage down to ground ($V_{SS}$).
*   **Complementary Logic:** Logic families where both pull-up and pull-down networks are constructed using active devices (e.g., CMOS).

**Textbook References:**

*   **Sedra & Smith (8/e):** Chapter 5 (MOSFETs and Related Devices) provides a strong foundation on the operation of NMOS transistors, which is essential for understanding these logic families.
*   **Baker, Li, Boyce (4/e):** Chapter 3 (Basic CMOS and NMOS Gates) offers a direct introduction to NMOS logic.

---

### **2. NMOS Logic**

NMOS logic utilizes NMOS transistors exclusively for both pull-up and pull-down functions. In a typical NMOS gate, NMOS transistors form the pull-down network, and a simple resistive pull-up is often used.

**2.1. Basic NMOS Inverter**

*   **Structure:** An NMOS inverter consists of an NMOS transistor as the pull-down device and a load resistor connected to $V_{DD}$.
*   **Operation:**
    *   **Input High ($V_{in} = V_{DD}$):** The NMOS transistor turns ON. The output is pulled down to a low voltage (close to $V_{SS}$) but not exactly $V_{SS}$ due to the voltage drop across the ON-state transistor. This low voltage is the logic '0'.
    *   **Input Low ($V_{in} = V_{SS}$):** The NMOS transistor turns OFF. The output is pulled up to $V_{DD}$ by the load resistor. This is the logic '1'.

**2.2. NMOS NAND Gate**

*   **Structure:** For an N-input NMOS NAND gate, the pull-down network consists of N NMOS transistors connected in series. A load resistor pulls the output up.
*   **Operation:** The output is low only when all series NMOS transistors are ON (i.e., all inputs are high). If any input is low, at least one series NMOS transistor is OFF, and the output is pulled high by the resistor.

**2.3. NMOS NOR Gate**

*   **Structure:** For an N-input NMOS NOR gate, the pull-down network consists of N NMOS transistors connected in parallel. A load resistor pulls the output up.
*   **Operation:** The output is low if any one or more of the parallel NMOS transistors are ON (i.e., any input is high). The output is high only when all parallel NMOS transistors are OFF (i.e., all inputs are low).

**2.4. Power Dissipation in NMOS Logic**

*   **Static Power Dissipation:** This occurs when the output is in the logic '0' state. In this state, the pull-down NMOS transistor is ON, and a current flows from $V_{DD}$ through the load resistor and the pull-down transistor to ground. This leads to significant static power dissipation.
*   **Dynamic Power Dissipation:** Similar to CMOS, this is due to charging and discharging of load capacitances.

**2.5. Disadvantages of NMOS Logic**

*   **Static Power Dissipation:** The presence of a load resistor leads to continuous current flow in the logic '0' state, resulting in higher static power consumption compared to CMOS.
*   **Voltage Degradation:** The output voltage in the logic '0' state is not exactly $V_{SS}$ but rather $V_{DS(on)}$ of the pull-down transistor. This can affect noise margins and the ability to drive subsequent gates.
*   **Fan-out Limitations:** Due to voltage degradation and current limitations, NMOS logic has lower fan-out capabilities compared to CMOS.
*   **Fabrication Complexity:** Requires complementary PMOS transistors for full CMOS implementation.

**Course Outcome Alignment:**

*   **CO1, CO2:** Understanding the operation of NMOS gates helps identify sources of power dissipation (static power due to load resistor) and their impact as technology scales.
*   **CO3:** NMOS logic represents an older power management approach, highlighting the need for more efficient techniques.
*   **CO4:** NMOS logic is a non-clocked design style for logic implementation, serving as a baseline for comparison.

---

### **3. Pseudo-NMOS Logic**

Pseudo-NMOS logic is a compromise between pure NMOS and full CMOS. It uses an NMOS pull-down network and a PMOS transistor as a "constant current source" or "active load" that is permanently connected to $V_{DD}$.

**3.1. Basic Pseudo-NMOS Inverter**

*   **Structure:** An NMOS transistor forms the pull-down network, and a PMOS transistor with its gate tied to $V_{DD}$ acts as the pull-up device.
*   **Operation:**
    *   **Input High ($V_{in} = V_{DD}$):** The NMOS transistor turns ON, pulling the output down to $V_{SS}$. The PMOS transistor is OFF because $V_{GS} = V_{DD} - V_{DD} = 0$, which is less than its threshold voltage ($V_{thp}$).
    *   **Input Low ($V_{in} = V_{SS}$):** The NMOS transistor turns OFF. The PMOS transistor turns ON because $V_{GS} = V_{DD} - V_{SS} = V_{DD}$, which is greater than its threshold voltage ($V_{thp}$). The output is pulled up to $V_{DD}$.

**3.2. Pseudo-NMOS NAND Gate**

*   **Structure:** The pull-down network consists of NMOS transistors in series. The pull-up network consists of NMOS transistors in parallel, with their gates tied to $V_{DD}$.
*   **Operation:** The output is low only when all series NMOS transistors are ON. If any input is low, the output is pulled high by the parallel PMOS pull-up network.

**3.3. Pseudo-NMOS NOR Gate**

*   **Structure:** The pull-down network consists of NMOS transistors in parallel. The pull-up network consists of NMOS transistors in series, with their gates tied to $V_{DD}$.
*   **Operation:** The output is low if any one or more of the parallel NMOS transistors are ON. The output is pulled high only when all series PMOS transistors are OFF.

**3.4. Power Dissipation in Pseudo-NMOS Logic**

*   **Static Power Dissipation:** This is the most significant concern. When the output is logic '0', the NMOS pull-down is ON, and the PMOS pull-up is also ON (since its gate is tied to $V_{DD}$). This creates a direct path from $V_{DD}$ to $V_{SS}$ through both transistors, resulting in a significant DC current flow and thus high static power dissipation.
*   **Dynamic Power Dissipation:** Similar to CMOS, it's due to switching activity and charging/discharging of capacitances.

**3.5. Advantages of Pseudo-NMOS Logic**

*   **Simpler Design:** Compared to full CMOS, it can be simpler to design and lay out.
*   **Faster Speed (in some cases):** The PMOS pull-up can sometimes provide a stronger pull-up than a resistive pull-up, potentially leading to faster rise times.
*   **Reduced Transistor Count:** Compared to full CMOS for certain logic functions (e.g., NOR gates can be implemented with fewer transistors).

**3.6. Disadvantages of Pseudo-NMOS Logic**

*   **High Static Power Dissipation:** This is the primary drawback, making it unsuitable for low-power applications. The continuous current path when the output is low is a major issue.
*   **Poor Noise Immunity:** The ratio of pull-up to pull-down current determines the noise margin. The "weak" PMOS pull-up compared to the NMOS pull-down can lead to reduced noise immunity.
*   **Not Truly Complementary:** The pull-up network is always ON when its transistors are sized appropriately, leading to the static power issue.

**Textbook References:**

*   **Baker, Li, Boyce (4/e):** Chapter 3 (Basic CMOS and NMOS Gates) will likely cover Pseudo-NMOS as a variation.
*   **Sedra & Smith (8/e):** While not a primary focus for low-power, the principles of MOSFET operation and load devices discussed in Chapters 5 and 9 are relevant.

**Course Outcome Alignment:**

*   **CO1, CO2:** Pseudo-NMOS clearly illustrates the concept of static power dissipation due to simultaneous conduction of pull-up and pull-down networks. This is a critical point for low-power design.
*   **CO3:** Pseudo-NMOS represents a less power-efficient approach to power management, highlighting the benefits of switching to more efficient designs.
*   **CO4:** Pseudo-NMOS logic is another non-clocked design style for logic implementation, offering a contrast to other styles.

---

### **4. Comparison: NMOS vs. Pseudo-NMOS vs. CMOS**

| Feature                 | NMOS Logic                      | Pseudo-NMOS Logic                   | CMOS Logic                         |
| :---------------------- | :------------------------------ | :---------------------------------- | :--------------------------------- |
| **Pull-up Network**     | Resistive                       | PMOS Transistor (always ON)         | PMOS Transistors (complementary)   |
| **Pull-down Network**   | NMOS Transistors                | NMOS Transistors                    | NMOS Transistors (complementary)   |
| **Static Power Diss.**  | Moderate (due to resistor)      | **Very High** (simultaneous ON)     | **Very Low** (ideal: zero)         |
| **Dynamic Power Diss.** | Moderate                        | Moderate                            | Moderate                           |
| **Switching Speed**     | Moderate                        | Can be faster than NMOS             | Generally fastest                  |
| **Noise Immunity**      | Moderate                        | Poor                                | Excellent                          |
| **Design Complexity**   | Simpler than CMOS               | Simpler than CMOS                   | More complex                       |
| **Transistor Count**    | Can be higher for complex logic | Potentially lower for NOR gates     | Generally higher for complex logic |
| **Low Power Suitability** | Poor                            | **Very Poor**                       | **Excellent**                      |

**Important Point:** CMOS logic is the preferred choice for modern low-power VLSI designs due to its near-zero static power dissipation and excellent noise immunity. NMOS and Pseudo-NMOS are historically important but have significant power consumption drawbacks.

---

### **5. Practice Questions and Answers**

**Question 1:** Explain the primary reason for static power dissipation in NMOS logic.

**Answer:** Static power dissipation in NMOS logic arises from the continuous current flow through the load resistor when the output is in the logic '0' state. The NMOS pull-down transistor is ON, and the voltage drop across it is not zero, allowing current to flow from $V_{DD}$ through the resistor and the transistor to ground.

**Question 2:** What is the main drawback of Pseudo-NMOS logic concerning power consumption?

**Answer:** The main drawback of Pseudo-NMOS logic is its **very high static power dissipation**. This occurs because when the output is in the logic '0' state, the NMOS pull-down network is ON, and the PMOS pull-up transistor (with its gate tied to $V_{DD}$) is also ON. This creates a direct conductive path from $V_{DD}$ to $V_{SS}$, leading to a significant DC current.

**Question 3:** Compare the switching speed of NMOS, Pseudo-NMOS, and CMOS logic.

**Answer:**
*   **CMOS:** Generally the fastest due to its complementary pull-up and pull-down networks, providing strong and symmetric switching characteristics.
*   **Pseudo-NMOS:** Can be faster than NMOS due to the active PMOS pull-up.
*   **NMOS:** Moderately fast, but can be limited by the resistive pull-up and voltage degradation.

**Question 4:** For a NOR gate implementation, which logic family among NMOS, Pseudo-NMOS, and CMOS would you choose if minimizing static power is the absolute priority? Justify your answer.

**Answer:** **CMOS logic** would be the absolute priority.
*   **Justification:** CMOS logic has near-zero static power dissipation because its pull-up and pull-down networks are mutually exclusive – when one is ON, the other is OFF. NMOS logic has static power due to the load resistor, and Pseudo-NMOS has very high static power due to the simultaneous conduction of pull-up and pull-down transistors. Therefore, CMOS offers the lowest static power.

**Question 5:** Consider a simple NMOS inverter. If $V_{DD} = 5V$, the NMOS transistor has $V_{th} = 1V$, and $V_{out(low)} \approx 0.5V$ when the input is HIGH. What is the approximate voltage swing of this inverter?

**Answer:** The approximate voltage swing is $V_{DD} - V_{out(low)} = 5V - 0.5V = 4.5V$.

**Question 6:** In Pseudo-NMOS logic, why is the PMOS transistor's gate tied to $V_{DD}$?

**Answer:** Tying the PMOS transistor's gate to $V_{DD}$ ensures that it is always ON (assuming $V_{DD}$ is greater than $|V_{thp}|$). This creates a continuously active pull-up network, which is characteristic of Pseudo-NMOS logic. However, this is also the source of its significant static power consumption.

---

### **6. Important Points to Remember**

*   **NMOS Logic:** Uses NMOS transistors for pull-down and a resistor for pull-up. Suffers from static power dissipation due to the resistor.
*   **Pseudo-NMOS Logic:** Uses NMOS transistors for pull-down and a PMOS transistor (gate tied to $V_{DD}$) for pull-up. Offers simpler design but has very high static power dissipation due to simultaneous conduction.
*   **CMOS Logic:** Uses complementary NMOS and PMOS transistors for both pull-up and pull-down. Offers excellent performance (speed, noise immunity) and minimal static power dissipation, making it the dominant logic family for modern VLSI, especially low-power designs.
*   **Power Dissipation:** The key differentiator for low-power VLSI. Static power in NMOS/Pseudo-NMOS is a critical issue that CMOS effectively solves.
*   **Trade-offs:** While NMOS and Pseudo-NMOS might have some advantages in terms of transistor count or simpler design for specific functions, their power consumption makes them impractical for most modern low-power applications.

---

### **7. Textual and Course Outcome Integration**

*   **Textbook Integration:** The concepts of MOSFET operation (Sedra & Smith, Razavi) are foundational. Baker, Li, Boyce's treatment of basic gates directly covers NMOS and Pseudo-NMOS.
*   **CO1 (Technology Scaling & Power Dissipation):** Understanding the static power in NMOS/Pseudo-NMOS helps appreciate how scaling can exacerbate these issues or how advancements in CMOS mitigate them.
*   **CO2 (Sources of Power Dissipation):** This topic directly addresses static power dissipation (resistor in NMOS, simultaneous conduction in Pseudo-NMOS) and dynamic power dissipation (charging/discharging caps).
*   **CO3 (Power Management Approaches):** NMOS and Pseudo-NMOS represent earlier, less efficient power management styles compared to the low-power capabilities of CMOS.
*   **CO4 (Clocked and Non-Clocked Design Styles):** NMOS and Pseudo-NMOS are classic examples of non-clocked design styles, providing a baseline for understanding clocked styles (like dynamic logic) discussed later.
*   **CO5 (Adiabatic Switching):** While not directly covered here, understanding the power inefficiencies of NMOS/Pseudo-NMOS highlights the motivation for even more advanced techniques like adiabatic switching.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
