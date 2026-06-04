---
title: "FMEA and FMECA"
subject: "RELIABILITY ENGINEERING"
module: "Module 3: System Analysis and Reliability Estimation: Fault tree analysis"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1751d0cf4804463e5b"
status: "completed"
scrapedAt: "2026-05-20T18:18:04.738Z"
---
# Reliability Engineering: Module 3 - System Analysis and Reliability Estimation: Fault Tree Analysis

## Topic: Failure Mode and Effects Analysis (FMEA) and Failure Mode, Effects, and Criticality Analysis (FMECA)

---

### **Introduction**

This module delves into systematic approaches for analyzing potential failures within a system. Understanding how failures can occur, their potential consequences, and their likelihood is crucial for designing reliable products and systems. FMEA and FMECA are proactive risk assessment tools that help identify and mitigate potential failure modes before they impact performance or safety.

---

### **Learning Outcomes Covered**

*   **CO1 (K2): Explain various modes of failure and basic concepts of reliability.**
    *   This topic directly addresses failure modes and their effects, fundamental concepts in reliability.
*   **CO2 (K3): Identify methods for reliability prediction according to system characteristics.**
    *   FMEA/FMECA helps in identifying factors that influence reliability, contributing to prediction.
*   **CO3 (K3): Develop ability in formulating suitable strategies to enhance reliability of a manufacturing system.**
    *   By identifying failure modes and their severity, appropriate mitigation strategies can be devised.
*   **CO4 (K2): Explain relation between reliability, availability and maintainability.**
    *   The "Effects" part of FMEA/FMECA highlights the impact of failures on system availability and the need for maintainability.

---

### **Key Concepts and Definitions**

#### **1. Failure Mode and Effects Analysis (FMEA)**

*   **Definition:** FMEA is a systematic, step-by-step approach to identifying all potential failure modes in a system, product, or process, along with their causes and effects. It is a qualitative risk assessment technique used to prevent defects and failures.
    *   *Balagurusamy (2017)* emphasizes FMEA as a proactive tool for identifying potential problems early in the design phase.
    *   *Chandrupatla (2009)* highlights its role in understanding the impact of component failures on the overall system.
*   **Purpose:**
    *   To identify potential failure modes.
    *   To determine the causes of these failure modes.
    *   To assess the effects of these failure modes on the system and its users.
    *   To identify potential areas for design improvement to enhance reliability, safety, and quality.
*   **Types of FMEA:**
    *   **Design FMEA (DFMEA):** Focuses on potential failure modes of a product design.
    *   **Process FMEA (PFMEA):** Focuses on potential failure modes of a manufacturing or assembly process.

#### **2. Failure Mode, Effects, and Criticality Analysis (FMECA)**

*   **Definition:** FMECA is an extension of FMEA that includes an assessment of the *criticality* of each failure mode. Criticality is determined by the likelihood (probability) of the failure mode occurring and the severity of its effects.
    *   *Srinath (2005)* explains FMECA as a more quantitative approach to FMEA, incorporating probability and risk.
    *   *Ebling (2004)* highlights FMECA's utility in prioritizing risks based on their potential impact.
*   **Purpose:**
    *   To perform all the functions of FMEA.
    *   To quantify the risk associated with each failure mode.
    *   To prioritize failure modes for corrective action based on their criticality.

#### **3. Key Terms in FMEA/FMECA**

*   **Function:** The intended purpose or operation of a system, subsystem, component, or process.
*   **Failure Mode:** The specific way in which a function can fail to be performed as intended. Examples: open circuit, short circuit, leakage, fracture, wear, incorrect operation.
*   **Cause of Failure:** The mechanism or event that initiates the failure mode. Examples: material defect, manufacturing error, design flaw, environmental stress, operator error.
*   **Effect of Failure:** The consequence of a failure mode occurring, typically on the system, surrounding equipment, personnel, or the environment. Effects can be local or global.
*   **Severity (S):** A rating assigned to the worst potential effect of a failure mode. This is typically a numerical scale (e.g., 1 to 10), where higher numbers indicate greater severity.
*   **Occurrence (O):** A rating assigned to the likelihood or frequency of a specific cause of failure occurring. This is also a numerical scale (e.g., 1 to 10), where higher numbers indicate a higher probability of occurrence.
*   **Detection (D):** A rating assigned to the likelihood of detecting the cause or mode of failure before it reaches the customer or causes the effect. This is a numerical scale (e.g., 1 to 10), where higher numbers indicate a lower probability of detection.
*   **Risk Priority Number (RPN):** A quantitative measure of risk, calculated as the product of Severity, Occurrence, and Detection:
    $$RPN = S \times O \times D$$
    *   *Chandrupatla (2009)* defines RPN as a critical metric for prioritizing corrective actions in FMECA.
*   **Criticality Analysis:** A method to determine the relative importance of a failure mode. In FMECA, this is often represented by RPN. Other methods include:
    *   **Criticality Number (CN):** CN = Probability of Failure $\times$ Severity of Effect. (This is closer to the definition of RPN without the detection factor).
    *   **Failure Mode Priority Index (FMPI):** Sometimes used, similar to RPN.
*   **Recommended Actions:** Specific actions proposed to eliminate or reduce the risk associated with a failure mode. These could include design changes, process improvements, enhanced testing, or improved training.

---

### **The FMEA/FMECA Process**

The FMEA/FMECA process is typically conducted by a cross-functional team and involves the following steps:

**Step 1: Define the Scope and System**
*   Clearly define the system, subsystem, or process being analyzed.
*   Break down the system into its major functions and components.
    *   *Example:* For a "Car Braking System," the functions could be "Apply Braking Force," "Release Braking Force," "Provide Feedback to Driver." Components could include brake pedal, master cylinder, brake fluid, brake lines, calipers, brake pads, rotors, ABS controller, etc.

**Step 2: Identify Functions and Potential Failure Modes**
*   For each component or subsystem, identify its intended function.
*   Brainstorm potential ways each function can fail.
    *   *Example (Brake Pedal):*
        *   Function: Transmit driver force to master cylinder.
        *   Failure Modes: Pedal snaps off, pedal linkage breaks, pedal sticks, pedal goes to floor, excessive pedal travel.

**Step 3: Identify Causes of Failure**
*   For each identified failure mode, determine the potential causes.
    *   *Example (Pedal snaps off):*
        *   Causes: Material defect in pedal arm, overstress due to excessive force, fatigue crack initiation and propagation, corrosion weakening the material.

**Step 4: Identify Effects of Failure**
*   For each failure mode, describe the consequences. Consider effects on:
    *   The system itself (e.g., loss of function, degraded performance).
    *   Surrounding equipment.
    *   Personnel (e.g., injury, discomfort).
    *   Environment.
    *   *Example (Pedal snaps off):*
        *   Immediate Effect: Loss of primary braking capability.
        *   System Effect: Vehicle cannot be stopped safely.
        *   Personnel Effect: Potential for severe injury or fatality.

**Step 5: Assign Severity (S), Occurrence (O), and Detection (D) Ratings**
*   This is a critical step that requires team consensus and often reference to historical data or testing.
*   **Severity (S):** Typically rated on a scale of 1 to 10.
    *   1 = No effect
    *   10 = Hazardous failure with loss of control, no warning.
*   **Occurrence (O):** Typically rated on a scale of 1 to 10.
    *   1 = Very unlikely (e.g., < 1 in 1,000,000 failures)
    *   10 = Very likely (e.g., > 1 in 10 failures)
*   **Detection (D):** Typically rated on a scale of 1 to 10.
    *   1 = Certain to be detected (e.g., automatic shutdown, immediate visible warning)
    *   10 = Cannot be detected before failure reaches the customer.
    *   *Note:* Some FMEA methodologies reverse the D scale (10=detected, 1=undetected). It's crucial to define the scale used. The provided scale here assumes higher = harder to detect.
    *   *Chandrupatla (2009)* discusses the challenges and methods for assigning these ratings, often relying on expert judgment or statistical data.

**Step 6: Calculate Risk Priority Number (RPN)**
*   For each failure mode, calculate:
    $$RPN = S \times O \times D$$
*   *Example:*
    *   Failure Mode: Pedal snaps off
    *   Cause: Material defect
    *   Effect: Loss of primary braking, potential fatality
    *   S = 10 (Hazardous)
    *   O = 3 (Unlikely to occur with good material control)
    *   D = 4 (Can be detected by visual inspection during assembly, but not always)
    *   RPN = 10 * 3 * 4 = 120

**Step 7: Prioritize and Recommend Actions**
*   Rank the failure modes based on their RPN values.
*   Focus on failure modes with high RPNs for corrective actions.
*   Develop recommended actions to reduce S, O, or D.
    *   **To reduce Severity (S):** Often difficult, may require fundamental design changes.
    *   **To reduce Occurrence (O):** Improve design, improve manufacturing processes, use more reliable components, reduce stress.
    *   **To improve Detection (D):** Implement better testing procedures, add sensors, improve inspection methods.
*   *Example Action for Pedal Snapping Off:*
    *   Action: Implement ultrasonic testing of pedal arms during manufacturing.
    *   Impact on ratings:
        *   S remains 10.
        *   O might remain 3 or be reduced to 2 if defect rate is significantly lowered.
        *   D can be reduced to 2 (highly likely to be detected).
    *   New RPN = 10 * 2 * 2 = 40.

**Step 8: Re-evaluate RPN and Monitor**
*   After implementing recommended actions, re-evaluate the S, O, and D ratings and recalculate the RPN.
*   Continuously monitor the system for new failure modes or changes in existing ones.

---

### **FMEA/FMECA Tables (Worksheets)**

The process is typically documented in an FMEA/FMECA worksheet. Here's a simplified structure:

| Item/Function | Potential Failure Mode | Potential Cause(s) of Failure | Potential Effect(s) of Failure | S | O | D | RPN | Recommended Actions | Responsibility & Target Completion Date | Actions Taken | S (Revised) | O (Revised) | D (Revised) | RPN (Revised) |
| :------------ | :--------------------- | :--------------------------- | :--------------------------- | :-: | :-: | :-: | :---: | :------------------ | :-------------------------------------- | :------------ | :---------: | :---------: | :---------: | :-----------: |
|               |                        |                              |                              |     |     |     |       |                     |                                         |               |             |             |             |               |
|               |                        |                              |                              |     |     |     |       |                     |                                         |               |             |             |             |               |

---

### **Examples**

#### **Example 1: Simple Electronic Component (e.g., Resistor)**

*   **Item/Function:** Resistor in a voltage regulator circuit / Provide stable resistance.
*   **Potential Failure Mode:** Open circuit (infinite resistance).
*   **Potential Causes:**
    *   Manufacturing defect (poor lead-to-element connection).
    *   Overheating due to excessive current (S, O, D depends on rating and application).
    *   Mechanical stress (vibration).
*   **Potential Effects:**
    *   Voltage regulator fails to operate.
    *   Circuit output voltage becomes unstable or very high.
    *   Damage to downstream components.
    *   Potential for overheating or fire in extreme cases.
*   **Ratings (Hypothetical):**
    *   S = 9 (High voltage output can damage components)
    *   O = 4 (Occasional overloads in the application)
    *   D = 5 (May be detected by voltage monitoring, but not always immediately)
    *   RPN = 9 * 4 * 5 = 180
*   **Recommended Actions:**
    *   Use a higher power-rated resistor.
    *   Implement thermal shutdown in the regulator circuit.
    *   Improve component screening during manufacturing.
*   **Revised Ratings (after using higher power rating):**
    *   S = 9
    *   O = 2 (significantly reduced chance of overheating)
    *   D = 5 (remains the same)
    *   RPN = 9 * 2 * 5 = 90

#### **Example 2: Manufacturing Process (e.g., Welding)**

*   **Item/Function:** Welded joint in a structural beam / Provide structural integrity.
*   **Potential Failure Mode:** Porosity in weld (voids within the weld metal).
*   **Potential Causes:**
    *   Incorrect welding parameters (voltage, current, speed).
    *   Contaminated filler material.
    *   Surface contamination on base metal.
    *   Insufficient shielding gas flow.
*   **Potential Effects:**
    *   Reduced weld strength.
    *   Weld may fail under load.
    *   Structural failure of the beam.
    *   Potential for collapse of the structure.
*   **Ratings (Hypothetical):**
    *   S = 10 (Structural collapse can be catastrophic)
    *   O = 5 (Inconsistent operator attention to shielding gas)
    *   D = 6 (Visual inspection may not detect internal porosity reliably)
    *   RPN = 10 * 5 * 6 = 300
*   **Recommended Actions:**
    *   Implement automated weld parameter monitoring.
    *   Install weld-quality inspection (e.g., ultrasonic testing) on a sample basis.
    *   Provide retraining for welders on shielding gas management.
*   **Revised Ratings (after implementing automated monitoring and inspection):**
    *   S = 10
    *   O = 3 (reduced due to parameter control)
    *   D = 3 (significantly improved detection)
    *   RPN = 10 * 3 * 3 = 90

---

### **Criticality Analysis Methods in FMECA**

While RPN is the most common criticality measure, other methods exist, often combining probability and severity:

*   **Probability/Severity Matrix:** Plotting failure modes on a matrix with probability on one axis and severity on the other. Zones (e.g., High Risk, Medium Risk, Low Risk) are defined, and actions are prioritized based on the zone.
*   **Failure Mode Effect Probability (FMEP):** Directly calculating the probability of a specific failure mode occurring and multiplying by its severity. This is more data-intensive.
    *   *Naikan (2008)* discusses various quantitative methods for criticality assessment that go beyond simple RPN.
*   **Cost of Failure:** In some analyses, the economic impact of failure (cost of repair, downtime, lost production) is also factored into criticality.

---

### **Advantages of FMEA/FMECA**

*   **Proactive approach:** Identifies potential issues before they occur, saving costs and improving reliability.
*   **Systematic methodology:** Provides a structured way to analyze complex systems.
*   **Team involvement:** Encourages collaboration and knowledge sharing.
*   **Prioritization of efforts:** Helps focus resources on the most critical failure modes.
*   **Documentation:** Creates a record of potential risks and mitigation strategies.
*   **Improved design:** Leads to more robust and reliable product designs.
*   **Enhanced process control:** Identifies areas for improvement in manufacturing.
*   **Customer satisfaction:** Reduces product failures and associated complaints.

---

### **Limitations of FMEA/FMECA**

*   **Subjectivity:** The assignment of S, O, and D ratings can be subjective, depending on the team's experience and judgment.
*   **RPN limitations:**
    *   Different combinations of S, O, D can result in the same RPN (e.g., 10x3x3 = 90, 3x5x6 = 90). This might lead to incorrect prioritization.
    *   It doesn't directly account for the *detectability* of the failure mode itself, only the cause.
*   **Resource intensive:** Can be time-consuming and require significant effort, especially for complex systems.
*   **Data dependency:** Accurate assignment of occurrence ratings often requires reliable historical failure data, which may not always be available.
*   **Can be complex:** For very large systems, managing the FMEA documentation can be challenging.

---

### **Relationship to Other Reliability Tools**

*   **Fault Tree Analysis (FTA):** FMEA identifies potential failure modes and their causes, while FTA uses these failure modes as basic events to build a top-down logical model of how system-level failures can occur. FMEA can provide input for FTA.
    *   *Srinath (2005)* and *Barlow (1998)* describe the synergistic relationship between FMEA and FTA in comprehensive reliability studies.
*   **Reliability Block Diagrams (RBDs):** RBDs model system reliability based on the reliability of components and their configuration (series, parallel). FMEA can help identify the critical components whose failure modes need to be analyzed for RBD modeling.
*   **Statistical Methods:** Data from FMEA (occurrence rates) can be used in statistical reliability prediction models.

---

### **Important Points to Remember**

*   **FMEA is proactive, not reactive.** It's about preventing failures.
*   **Teamwork is essential.** A diverse team brings different perspectives.
*   **The ratings (S, O, D) are critical.** Strive for consensus and use data where possible.
*   **RPN is a tool for prioritization, not an absolute measure of risk.** Consider other factors.
*   **FMEA is an iterative process.** It should be updated as designs change or new information becomes available.
*   **Focus on mitigating the highest RPNs first.**
*   **Consider the effect on maintainability and availability.** A failure mode's effect might be minor in terms of severity but could lead to lengthy downtime, impacting availability.

---

### **Practice Questions and Exercises**

**Question 1:** Define FMEA and FMECA. What is the primary difference between the two?
**Answer:** FMEA is a systematic method to identify potential failure modes, their causes, and effects. FMECA extends FMEA by including a criticality analysis, which quantifies the risk associated with each failure mode, often using an RPN. The primary difference is the addition of criticality assessment in FMECA. (CO1, K2)

**Question 2:** Explain the meaning of Severity (S), Occurrence (O), and Detection (D) in the context of FMEA. How is the Risk Priority Number (RPN) calculated?
**Answer:**
*   **Severity (S):** Rate of the worst potential effect of a failure mode.
*   **Occurrence (O):** Rate of the likelihood of a specific cause of failure occurring.
*   **Detection (D):** Rate of the likelihood of detecting the cause or mode of failure before it reaches the customer.
RPN is calculated as: RPN = S $\times$ O $\times$ D. (CO1, K2)

**Question 3:** Consider a simple electric kettle. Identify one potential failure mode, its cause, its effect, and assign hypothetical S, O, and D ratings. Calculate the RPN and suggest a recommended action to reduce the RPN.
**Answer (Example):**
*   **Item/Function:** Heating Element / Heat water.
*   **Potential Failure Mode:** Short circuit.
*   **Potential Cause:** Insulation breakdown due to overheating or manufacturing defect.
*   **Potential Effect:** Kettle stops heating; potential for electric shock to user if case becomes live; tripping of the circuit breaker.
*   **Hypothetical Ratings:**
    *   S = 8 (Potential shock hazard)
    *   O = 3 (Defects can occur in manufacturing, but not common)
    *   D = 4 (Some internal fault detection might exist, but not guaranteed before user interaction)
    *   RPN = 8 * 3 * 4 = 96
*   **Recommended Action:** Implement a secondary insulation layer or a thermal cutoff switch that disconnects power if excessive temperature is detected.
*   **Revised Ratings (with thermal cutoff):**
    *   S = 8 (still possible to have a fault, but less severe consequences)
    *   O = 3 (cause is same, but effect is mitigated)
    *   D = 2 (thermal cutoff provides good detection before user interaction)
    *   Revised RPN = 8 * 3 * 2 = 48. (CO1, CO3, K2, K3)

**Question 4:** How can FMEA/FMECA contribute to developing strategies to enhance the reliability of a manufacturing system?
**Answer:** FMEA/FMECA helps by systematically identifying weak points in a manufacturing process or the products it creates. By highlighting failure modes with high RPNs, it directs attention to specific causes or effects that need improvement. Recommended actions can then be implemented, such as modifying process parameters, improving quality control checks, or redesigning tooling. This focused approach allows manufacturers to allocate resources effectively to improve overall system reliability and product quality. (CO3, K3)

**Question 5:** Discuss the limitations of using RPN for prioritizing risks in FMECA.
**Answer:** RPN has limitations because different combinations of S, O, and D can yield the same RPN. For example, an RPN of 90 could result from (S=10, O=3, D=3) or (S=3, O=5, D=6). The first scenario has a very severe effect (S=10) but is reasonably detected and not very likely. The second scenario has a less severe effect but is more likely and harder to detect. A risk manager might prioritize the S=10 failure mode even if its RPN is equal to a lower severity failure mode, indicating that RPN should be used with judgment and potentially in conjunction with other prioritization methods like a Severity-Occurrence matrix. (CO2, K3)

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |


### **References**

*   Balagurusamy, E. (2017). *Reliability Engineering*. McGraw Hill Education.
*   Chandrupatla, T. R. (2009). *Quality and Reliability in Engineering*. Cambridge University Press.
*   Srinath, L. S. (2005). *Concepts of Reliability Engineering*. Affiliated East-West Press.
*   Ebling, C. E. (2004). *An Introduction to Reliability and Maintainability Engineering*. Tata McGraw Hill.
*   Naikan, V. N. A. (2008). *Reliability Engineering and Life Testing*. PHI.
*   Lewis, E. E. (2012). *Introduction to Reliability Engineering*. Wiley India.
*   Barlow, R. E. (1998). *Engineering Reliability*. Cambridge University Press.

---