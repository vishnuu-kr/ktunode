---
title: "FMEA"
subject: "INDUSTRIAL SAFETY ENGINEERING"
module: "Module 2: Hazard and hazard identification: Hazard and risk"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1651d0cf48044638c9"
status: "completed"
scrapedAt: "2026-05-20T18:04:41.336Z"
---
# Industrial Safety Engineering: Module 2 - Hazard and Hazard Identification

## Topic: Failure Mode and Effects Analysis (FMEA)

**Course Outcomes Addressed:**

*   **CO2:** Describe the different types of hazards and apply hazard identification tools. (Knowledge Level: K3) - FMEA is a key hazard identification tool.

**Learning Outcomes Covered:**

*   Understanding the principles and application of FMEA as a hazard identification and risk assessment tool.

---

### 1. Introduction to FMEA

**Definition:** Failure Mode and Effects Analysis (FMEA) is a systematic, proactive method for evaluating a process, product, or design to identify all potential failure modes, their causes, and their effects on the system and its users. It is a crucial tool for hazard identification and risk assessment in industrial safety.

**Key Concepts:**

*   **Failure Mode:** A way in which a component, system, or process can fail to perform its intended function.
*   **Effect:** The consequence of a failure mode occurring.
*   **Cause:** The reason or mechanism that leads to a failure mode.
*   **Risk:** The combination of the likelihood of a hazardous event occurring and the severity of the harm that can result.
*   **Severity (S):** A rating that quantifies the seriousness of the effect of a failure mode.
*   **Occurrence (O):** A rating that quantifies the likelihood or frequency of a failure mode occurring.
*   **Detection (D):** A rating that quantifies the likelihood of detecting the cause or the failure mode before it reaches the customer or causes harm.
*   **Risk Priority Number (RPN):** A numerical measure of the risk associated with a particular failure mode, calculated as RPN = S x O x D.
*   **Action Priority (AP):** A prioritization method based on the RPN values, guiding actions to mitigate risks.

**References:**

*   **Jain, R.K. (2000) - Industrial Safety, Health and Environment Management Systems:** While not explicitly detailing FMEA, Jain emphasizes the importance of systematic hazard analysis and risk assessment as foundational elements of safety management systems. FMEA fits this paradigm by providing a structured approach.
*   **Grimaldi & Simonds (2001) - Safety Management:** This textbook likely discusses various hazard analysis techniques. FMEA, as a widely accepted method, would align with their emphasis on identifying potential sources of harm and implementing preventive measures.
*   **AIChE/CCPS (1992) - Guidelines for Hazard Evaluation Procedures:** This reference is highly relevant as it provides detailed methodologies for hazard analysis in chemical processes, where FMEA is a commonly employed technique for assessing equipment and process failures.

---

### 2. Types of FMEA

FMEA can be applied in different contexts, leading to various types:

*   **Design FMEA (DFMEA):** Applied during the design phase of a product or system. Its goal is to identify potential failures in the design itself and to make design changes to prevent them.
    *   **Focus:** Design-related failures.
    *   **Example:** Analyzing a new machine component's design for potential weaknesses that could lead to breakage under stress.
*   **Process FMEA (PFMEA):** Applied to manufacturing or assembly processes. It aims to identify potential failures in the process that could lead to product defects or safety issues.
    *   **Focus:** Process-related failures.
    *   **Example:** Examining the steps involved in assembling a product to identify if any step could lead to incorrect component installation, potentially causing a safety hazard during use.
*   **System FMEA:** Applied to a complete system, including hardware, software, and human elements.
    *   **Focus:** Failures within the overall system interaction.
    *   **Example:** Analyzing a complex automated manufacturing line where the failure of one machine could impact the entire line's operation and pose risks to personnel.

---

### 3. The FMEA Process: Step-by-Step

The FMEA process generally involves the following steps:

#### Step 1: Define the Scope and Item

*   **Objective:** Clearly identify the system, process, or product to be analyzed.
*   **Considerations:** What are the boundaries of the analysis? What are the functions of the item being studied?
*   **Example:** For a safety system, the scope might be the emergency shutdown mechanism, and the item is the solenoid valve controlling the process.

#### Step 2: Identify Potential Failure Modes

*   **Objective:** Brainstorm all conceivable ways the item can fail to perform its intended function.
*   **Methodology:** Use "How can this fail?" questions.
*   **Example:** For a solenoid valve, failure modes could include:
    *   Fails to open
    *   Fails to close
    *   Slow to open
    *   Slow to close
    *   Leaks

#### Step 3: Identify Potential Effects of Each Failure Mode

*   **Objective:** Determine the consequences of each identified failure mode. Consider effects on:
    *   The system/process
    *   The product
    *   Personnel (safety)
    *   Environment
    *   Customers
*   **Example:**
    *   **Failure Mode:** Fails to open
    *   **Potential Effects:** Process stops, production downtime, hazard remains uncontrolled, personnel exposure to hazardous material.

#### Step 4: Identify Potential Causes of Each Failure Mode

*   **Objective:** Determine the root causes or mechanisms that could lead to each failure mode.
*   **Methodology:** Use "Why would this failure occur?" questions. Techniques like Ishikawa (Fishbone) diagrams can be helpful here.
*   **Example:**
    *   **Failure Mode:** Fails to open
    *   **Potential Causes:**
        *   Electrical failure (no power to coil)
        *   Coil burnout
        *   Mechanical obstruction (dirt, debris)
        *   Spring failure
        *   Valve seat damage

#### Step 5: Identify Current Controls (Prevention & Detection)

*   **Objective:** Document existing measures in place to prevent the cause or detect the failure mode.
*   **Types of Controls:**
    *   **Prevention Controls:** Designed to prevent the failure from occurring (e.g., preventive maintenance, quality inspections during manufacturing).
    *   **Detection Controls:** Designed to detect the failure or its cause before it has a significant impact (e.g., alarms, sensors, visual inspections).
*   **Example:**
    *   **Failure Mode:** Fails to open
    *   **Cause:** Mechanical obstruction (dirt)
    *   **Prevention Controls:** Regular cleaning of the valve, using filtered air/fluid.
    *   **Detection Controls:** Interlock that checks if the valve position is correct after a command.

#### Step 6: Rate Severity (S), Occurrence (O), and Detection (D)

*   **Objective:** Assign numerical ratings to each failure mode based on predefined scales. These scales are typically:
    *   **Severity (S):** 1 (no effect) to 10 (extremely severe effect, e.g., fatality, major environmental damage).
    *   **Occurrence (O):** 1 (very unlikely to occur) to 10 (very likely to occur).
    *   **Detection (D):** 1 (detection is virtually certain) to 10 (detection is impossible).

    *Note: Specific scales and definitions should be standardized within an organization.*

*   **Example (Illustrative Ratings):**
    *   **Failure Mode:** Fails to open (leading to uncontrolled hazardous material release)
    *   **Cause:** Mechanical obstruction (dirt)
    *   **Effect:** Personnel exposure to toxic chemical, potential fire/explosion.
    *   **Severity (S):** 9 (severe hazard)
    *   **Occurrence (O):** 4 (moderate likelihood of dirt accumulation)
    *   **Detection (D):** 5 (detection by periodic checks is possible but not guaranteed)

#### Step 7: Calculate the Risk Priority Number (RPN)

*   **Objective:** Quantify the risk associated with each failure mode.
*   **Formula:** RPN = S x O x D
*   **Example (Continuing from above):**
    *   RPN = 9 (S) x 4 (O) x 5 (D) = 180

#### Step 8: Develop and Implement Recommended Actions

*   **Objective:** Based on the RPN (or other prioritization methods), identify and implement actions to reduce the risk.
*   **Prioritization:** Higher RPNs generally indicate higher risk and require more immediate attention. However, a high Severity (S) rating should always be a concern, regardless of O and D.
*   **Types of Actions:**
    *   Design modifications
    *   Process improvements
    *   Enhanced preventive maintenance
    *   Improved detection methods (new sensors, more frequent checks)
    *   Training and procedures
*   **Example:** For the RPN of 180, actions could include:
    *   Implement a more rigorous filtration system for the fluid/air going to the valve (reduce O).
    *   Install a position sensor on the valve with an alarm for the control room (improve D).
    *   Increase the frequency of valve inspection and cleaning (reduce O).

#### Step 9: Recalculate RPN and Monitor

*   **Objective:** After implementing actions, re-evaluate S, O, and D to calculate a new RPN. This verifies the effectiveness of the actions.
*   **Ongoing Process:** FMEA should not be a one-time activity. It should be reviewed and updated as processes change, new information becomes available, or failures occur.

---

### 4. Key Benefits of FMEA in Industrial Safety

*   **Proactive Risk Identification:** Identifies potential hazards *before* they cause incidents, allowing for preventive measures. (Aligns with CO2 - applying hazard identification tools).
*   **Prioritization of Risks:** Helps focus resources on the most significant risks.
*   **Improved Design and Processes:** Leads to more robust and safer products and manufacturing methods.
*   **Enhanced Communication:** Provides a structured framework for discussing potential failure modes and their consequences among teams.
*   **Basis for Preventive Maintenance:** Identifies critical failure modes that require specific maintenance strategies.
*   **Documentation of Risk Assessment:** Creates a record of identified hazards, their risks, and the mitigation strategies employed.

---

### 5. Limitations of FMEA

*   **Subjectivity:** The ratings for S, O, and D can be subjective, depending on the expertise of the team.
*   **Resource Intensive:** Can be time-consuming and require significant effort to perform thoroughly.
*   **RPN Ambiguity:** Different combinations of S, O, and D can result in the same RPN, potentially leading to misinterpretation of risk. (e.g., S=2, O=10, D=5 vs. S=5, O=4, D=5 both yield RPN=100).
*   **Focus on Individual Failures:** May not fully capture complex interactions between multiple failures.

---

### 6. Connection to Other Safety Concepts

*   **Hazard Identification:** FMEA is a primary tool for identifying potential hazards arising from equipment or process failures. (Directly addresses CO2).
*   **Risk Assessment:** It quantifies risk by estimating the likelihood and severity of failure effects.
*   **Accident Causation Theories:** By identifying failure causes, FMEA helps understand the "how" of accidents, contributing to the broader understanding of accident causation. (Indirectly supports CO1 by highlighting root causes).
*   **Safety Management Systems (SMS):** FMEA is a critical component of a robust SMS, enabling systematic hazard identification and risk management. (Relates to the context of the textbooks).

---

### 7. Practice Questions and Answers

**Question 1:** Define Failure Mode and Effects Analysis (FMEA) and explain its primary purpose in industrial safety.

**Answer 1:** FMEA is a systematic, proactive method used to identify all potential failure modes in a process, product, or design, along with their causes and effects. Its primary purpose in industrial safety is to anticipate potential hazards arising from these failures, assess the associated risks, and implement preventive actions to mitigate them *before* they lead to accidents or incidents.

**Question 2:** Differentiate between Design FMEA (DFMEA) and Process FMEA (PFMEA).

**Answer 2:**
*   **DFMEA** is applied during the design phase of a product or system to identify and eliminate potential design-related failures. It focuses on the intrinsic capabilities and limitations of the design itself.
*   **PFMEA** is applied to manufacturing or assembly processes to identify and eliminate potential process-related failures that could lead to product defects or safety issues. It focuses on how the product is made.

**Question 3:** A critical pump in a chemical plant has a potential failure mode of "Pump Seal Leakage."
The severity of a significant leak is rated 8.
The likelihood of a leak due to material degradation is estimated as 5.
The current detection method (visual inspection by operator during rounds) is considered to have a detection rating of 6.

Calculate the Risk Priority Number (RPN) for this failure mode. What actions might be considered if the RPN is deemed too high?

**Answer 3:**
*   Severity (S) = 8
*   Occurrence (O) = 5
*   Detection (D) = 6

RPN = S x O x D = 8 x 5 x 6 = **240**

**Possible Actions to Reduce Risk (if RPN is too high):**

1.  **Reduce Occurrence (O):**
    *   Improve preventive maintenance schedules for pump seals.
    *   Use higher quality or more robust seal materials.
    *   Implement better lubrication practices.
2.  **Improve Detection (D):**
    *   Install a continuous leak detection sensor with an alarm system (reduces D significantly).
    *   Increase the frequency of operator rounds specifically to check this pump.
    *   Implement an infrared camera inspection system.

**Question 4:** List three key benefits of using FMEA in an industrial safety context.

**Answer 4:**
1.  **Proactive Hazard Identification:** Identifies potential hazards before incidents occur.
2.  **Risk Prioritization:** Helps in focusing resources on the most critical risks.
3.  **Improved Design and Process Robustness:** Leads to inherently safer systems and operations.

---

### 8. Important Points to Remember

*   **FMEA is Proactive:** Its strength lies in identifying potential problems before they manifest as incidents.
*   **Team Effort:** FMEA is most effective when performed by a multi-disciplinary team with diverse knowledge.
*   **Standardized Scales:** Using consistent S, O, and D rating scales within an organization is crucial for accurate comparisons and prioritization.
*   **Action-Oriented:** The goal is not just to identify failures but to drive corrective actions.
*   **Continuous Improvement:** FMEA should be a living document, revisited and updated regularly.
*   **Beyond RPN:** While RPN is a useful metric, don't neglect high Severity ratings. A failure with a low probability but catastrophic effect still needs significant attention.

---

### 9. Self-Reflection and Application

*   Consider a piece of equipment in your workplace or a common everyday item.
*   Try to perform a simplified FMEA on it.
    *   What are its intended functions?
    *   How could it fail?
    *   What would be the effects of those failures?
    *   What might cause those failures?
*   This exercise will help solidify your understanding of the FMEA methodology and its practical application.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
