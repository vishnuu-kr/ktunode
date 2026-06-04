---
title: "Human reliability: Methods for Human Reliability Analysis."
subject: "RELIABILITY ENGINEERING"
module: "Module 3: System Analysis and Reliability Estimation: Fault tree analysis"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1751d0cf4804463e63"
status: "completed"
scrapedAt: "2026-05-20T18:18:10.762Z"
---
# RELIABILITY ENGINEERING: Module 3: System Analysis and Reliability Estimation: Fault Tree Analysis

## Topic: Human Reliability: Methods for Human Reliability Analysis (HRA)

This module focuses on understanding how human actions can impact system reliability, particularly within the context of Fault Tree Analysis (FTA). We will explore the significance of human errors and the methodologies used to quantify and manage them.

---

### **1. Introduction to Human Reliability**

*   **Definition:** Human Reliability is the probability that a human operator will successfully perform a required task within a specified time and under given conditions. It's a crucial aspect of system safety and reliability, as human errors are often significant contributors to system failures. (Chandrupatla, 2009)
*   **Importance:**
    *   Many complex systems rely heavily on human operators for control, maintenance, and decision-making.
    *   Human errors can propagate through a system, leading to failures that might not be predicted by purely hardware-focused reliability analysis.
    *   Understanding human reliability allows for better design of interfaces, procedures, and training to mitigate human error. (Balagurusamy, 2017)
*   **Sources of Human Error:**
    *   **Performance Errors:** Mistakes made during the execution of a task.
        *   **Slips:** Unintended actions that deviate from the operator's intention (e.g., typing the wrong key, using the wrong tool).
        *   **Lapses:** Forgetting to perform a task or part of a task.
        *   **Mistakes:** Intentional actions that are based on incorrect plans or knowledge (e.g., misinterpreting a gauge, making a wrong diagnostic decision).
    *   **Cognitive Errors:** Errors related to thinking, decision-making, and knowledge.
    *   **Organizational Factors:** Inadequate training, poor procedures, high workload, fatigue, stress, and poor working conditions can all contribute to human error. (Ebling, 2004)
*   **Human Reliability in FTA:** Human actions are often represented as Basic Events in Fault Trees. These events can be either success events (e.g., "Operator correctly performs maintenance") or failure events (e.g., "Operator connects wrong cable"). The reliability of these human events is critical in determining the overall system reliability. (Srinath, 2005)

---

### **2. Key Concepts and Definitions in HRA**

*   **Human Error Probability (HEP):** The probability that a human will commit an error in performing a specific task. HEPs are typically expressed as values between 0 and 1.
*   **Task Analysis:** The process of breaking down a complex human task into smaller, manageable sub-tasks. This is essential for identifying potential error points and assigning HEPs.
*   **Performance Shaping Factors (PSFs):** Environmental, psychological, and situational factors that influence the likelihood of human error. Examples include:
    *   **Training and Experience:** More experienced operators may have lower HEPs.
    *   **Workload:** High workload can increase the probability of error.
    *   **Stress and Fatigue:** These significantly degrade human performance.
    *   **Interface Design:** Poorly designed interfaces can lead to slips and mistakes.
    *   **Procedures:** Clear and well-written procedures reduce errors.
    *   **Time Available:** Insufficient time can lead to rushed actions and errors.
*   **Human Reliability Assessment (HRA):** The overall process of identifying, analyzing, and quantifying the reliability of human performance in a system.

---

### **3. Methods for Human Reliability Analysis (HRA)**

Several methods exist for performing HRA, ranging from qualitative assessments to quantitative probabilistic analyses. These methods are often used in conjunction with system reliability techniques like Fault Tree Analysis.

#### **3.1. Qualitative Methods**

These methods focus on identifying potential human errors and their causes without necessarily assigning precise probabilities.

*   **Task Analysis (detailed breakdown):**
    *   **Purpose:** To understand the sequence of actions, decision points, and potential for error in a given task.
    *   **Process:**
        1.  Define the task and its objectives.
        2.  Break down the task into a series of steps.
        3.  For each step, identify:
            *   Required actions.
            *   Information needed.
            *   Potential deviations from the intended action (error modes).
            *   Causes of these deviations (PSFs).
            *   Consequences of the error.
    *   **Example:** For a maintenance task of replacing a component:
        *   **Step:** Disconnect power.
        *   **Error Mode:** Failure to disconnect power.
        *   **Cause:** Forgetfulness, misreading labels.
        *   **Consequence:** Electrocution, equipment damage.
*   **Checklists and Procedures Review:**
    *   **Purpose:** To evaluate the clarity, completeness, and effectiveness of operational and maintenance procedures.
    *   **Process:** Reviewing procedures for ambiguity, omissions, or conflicting instructions.
*   **Human Reliability Assessment (HRA) Workshop/Brainstorming:**
    *   **Purpose:** Gathering expert judgment from operators, engineers, and safety specialists to identify potential human failure modes and contributing factors.

#### **3.2. Quantitative Methods**

These methods aim to assign numerical values (HEPs) to human failures and integrate them into system reliability models.

*   **Action Reliability Assessment (ARA):**
    *   **Description:** A systematic approach to estimate human error probabilities by considering the characteristics of the task and the operator.
    *   **Key Principles:**
        *   **Task Decomposition:** Breaking down tasks into elementary actions.
        *   **Error Mode Identification:** Identifying how an error can occur in each action.
        *   **Performance Shaping Factor (PSF) Consideration:** Adjusting base HEPs based on identified PSFs.
    *   **Example:**
        *   **Task:** Operator needs to select the correct valve to close.
        *   **Error Mode:** Operator selects the wrong valve.
        *   **Base HEP:** If the valve labeling is clear and consistent, the base HEP might be low.
        *   **PSFs:** If the area is poorly lit (poor visibility) and the operator is under time pressure, the HEP would be adjusted upwards.
*   **Human Error Rate Prediction and Assessment (HERA):**
    *   **Description:** A probabilistic method that uses a structured approach to estimate HEPs, often incorporating expert judgment and empirical data.
*   **Techniques for Human Error Rate Prediction (THERP):**
    *   **Description:** One of the most widely used and comprehensive HRA methods, developed by Sandia National Laboratories. It provides a structured framework for estimating HEPs.
    *   **Key Steps in THERP:**
        1.  **Task Analysis:** Decompose the task into a sequence of human actions.
        2.  **Error Mode Identification:** For each action, identify the plausible error modes (e.g., omission, commission, incorrect action).
        3.  **Dependency Analysis:** Identify dependencies between human actions and hardware failures.
        4.  **Performance Shaping Factor (PSF) Identification:** Identify relevant PSFs for each error mode.
        5.  **HEP Estimation:**
            *   **Nominal HEPs:** Assign base HEPs for elementary human actions, often derived from databases or expert judgment.
            *   **PSF Quantification:** Quantify the impact of PSFs on the nominal HEPs using tables or models. For example, a PSF of "high workload" might increase the HEP by a factor of 5.
            *   **Calculation:** Combine nominal HEPs and PSF adjustments to estimate the final HEP for each error mode.
        6.  **Integration into System Reliability Models:** The estimated HEPs are then incorporated as basic events into fault trees or other reliability models.
    *   **Example (Simplified THERP):**
        *   **Task:** Operator checks if a pump is running.
        *   **Action:** Operator reads the pump status indicator.
        *   **Error Mode:** Misreading the indicator (e.g., reading "OFF" as "ON").
        *   **Nominal HEP (for misreading):** 1 x 10^-2 (based on historical data/experts).
        *   **PSFs:**
            *   Indicator is clear and large: No adverse effect.
            *   Lighting is good: No adverse effect.
            *   Operator is not fatigued: No adverse effect.
            *   **However, if the indicator is small, dimly lit, and the operator is under high pressure:** The HEP might be adjusted significantly upwards, e.g., to 5 x 10^-2.
        *   **Final HEP:** 5 x 10^-2. This value is then used in the Fault Tree.
*   **Accenture Cause-Consequence Analysis (CCA) & Human Reliability Analysis (HRA) Modules:**
    *   **Description:** While CCA is primarily a system modeling technique, specific HRA modules within such frameworks can integrate human error probabilities.
*   **Cause-Consequence Analysis (CCA) - Integration with HRA:**
    *   CCA can model sequences of events, including human actions. By assigning HEPs to human actions within the CCA, the impact of human errors on system outcomes can be analyzed.
*   **Success Likelihood Index Method (SLIM):**
    *   **Description:** A simplified HRA method that uses expert judgment to assign a "success likelihood index" to a task, which can then be converted to an HEP. It's less detailed than THERP but quicker.
*   **ASEP (Assessment of Human Performance):**
    *   **Description:** A qualitative and semi-quantitative method that focuses on identifying key human factors and their potential impact on reliability. It often involves workshops and structured reviews.

#### **3.3. Databases for Human Error Probabilities**

*   **Purpose:** To provide standard or typical HEP values for common human actions, which can serve as starting points for analysis.
*   **Examples:**
    *   **Human Reliability Handbook (Swain & Guttmann):** A foundational reference containing extensive data and methodologies for HRA, including tables of HEPs for various tasks and conditions.
    *   **OPERA (Operator Performance Reliability Assessment):** A database and tool for HRA.
    *   **Ex-SHELL Model:** Not a database, but a conceptual model highlighting factors influencing human error (Software, Hardware, Environment, Liveware).

---

### **4. Integrating HRA with Fault Tree Analysis (FTA)**

*   **Human Actions as Basic Events:** Human actions that can lead to system failure are modeled as basic events in a fault tree.
    *   **Success Event:** Represents a human performing a task correctly (e.g., "Operator correctly closes valve V1"). The reliability of this event would be $R_{human} = 1 - HEP$.
    *   **Failure Event:** Represents a human failing to perform a task correctly (e.g., "Operator fails to close valve V1"). The probability of this event is the HEP.
*   **Constructing the Fault Tree:**
    *   Identify critical human actions that could contribute to the top event (system failure).
    *   For each human action, determine the potential error modes.
    *   Assign the estimated HEPs to the relevant basic events in the fault tree.
*   **Quantification:**
    *   Once the fault tree is constructed with both hardware and human basic events, it can be quantified.
    *   The overall system failure probability will be calculated considering the probabilities of both hardware failures and human errors.
    *   **Example:** A fault tree might show that a system failure occurs if a pump fails AND the operator fails to switch to a backup pump.
        *   $P(\text{Pump Failure}) = P_{pump}$
        *   $P(\text{Operator Fails to Switch}) = HEP_{switch}$
        *   If these are independent events and an "AND" gate connects them, the probability of the system failure due to this path is $P_{system} = P_{pump} \times HEP_{switch}$.

---

### **5. Performance Shaping Factors (PSFs) and their Impact**

*   **Definition:** PSFs are factors that can increase or decrease the likelihood of a human error. They are critical for adjusting nominal HEPs to reflect specific operational contexts. (Balagurusamy, 2017)
*   **Common PSFs and their Influence:**
    *   **Training/Experience:**
        *   **Positive Impact:** Highly trained/experienced operators tend to have lower HEPs.
        *   **Quantification:** May decrease nominal HEP by a factor (e.g., 0.5 for experienced, 0.2 for expert).
    *   **Workload (Time Pressure, Cognitive Load):**
        *   **Negative Impact:** High workload increases HEP.
        *   **Quantification:** May increase nominal HEP by a factor (e.g., 2 for moderate, 5 for high).
    *   **Stress/Fatigue:**
        *   **Negative Impact:** Significantly increases HEP.
        *   **Quantification:** Can increase nominal HEP by factors of 5 to 10 or more.
    *   **Environment (Lighting, Noise, Ergonomics):**
        *   **Negative Impact:** Poor environmental conditions increase HEP.
        *   **Quantification:** Factors depend on the severity of the deficiency.
    *   **Complexity of Task/Procedure:**
        *   **Negative Impact:** Complex or poorly written procedures increase HEP.
        *   **Quantification:** May increase nominal HEP by factors based on procedure quality.
    *   **Interface Design (HMI):**
        *   **Negative Impact:** Confusing or error-prone interfaces increase HEP.
        *   **Quantification:** Factors depend on the degree of poor design.
    *   **Feedback:**
        *   **Positive Impact:** Clear and timely feedback on actions reduces error.
        *   **Quantification:** May decrease nominal HEP.
*   **Using PSF Tables/Models:** Many HRA methods, particularly THERP, utilize tables that provide multipliers or additive adjustments for different levels of PSFs. These are often derived from empirical studies or expert judgment. (Srinath, 2005)

---

### **6. Learning Outcome Alignment**

*   **CO1: Explain various modes of failure and basic concepts of reliability (Knowledge Level: K2)**
    *   This module covers modes of human failure (slips, mistakes, lapses) and introduces the concept of Human Reliability and HEP, directly addressing this outcome.
*   **CO2: Identify methods for reliability prediction according to system characteristics (Knowledge Level: K3)**
    *   The module details various HRA methods (THERP, SLIM, etc.) used for predicting reliability, emphasizing how they are applied to systems that include human interaction, aligning with this outcome. The integration of HRA with FTA is a key aspect of system reliability prediction.
*   **CO3: Develop ability in formulating suitable strategies to enhance reliability of a manufacturing system. (Knowledge Level: K3)**
    *   By understanding the causes and impact of human errors through HRA, strategies can be developed to mitigate them. This includes improving training, designing better interfaces, refining procedures, and managing workload. These are direct strategies for enhancing system reliability.
*   **CO4: Explain relation between reliability, availability and maintainability (Knowledge Level: K2)**
    *   While not the primary focus, understanding human reliability is crucial for availability and maintainability. For instance, the reliability of maintenance tasks (performed by humans) directly impacts system availability and the Mean Time To Repair (MTTR), a key component of maintainability.

---

### **7. Practice Questions and Answers**

**Question 1:**
Define Human Reliability. List three common sources of human error in industrial systems.

**Answer 1:**
Human Reliability is the probability that a human operator will successfully perform a required task within a specified time and under given conditions.
Three common sources of human error are:
1.  **Slips:** Unintended actions (e.g., pressing the wrong button).
2.  **Mistakes:** Incorrectly formed intentions or plans (e.g., misinterpreting instructions).
3.  **Environmental Factors:** Poor lighting, high noise levels, or inconvenient workspace layout.
4.  **Organizational Factors:** Inadequate training, unclear procedures, high workload, fatigue.

**Question 2:**
Explain the purpose of Performance Shaping Factors (PSFs) in Human Reliability Analysis (HRA). Provide an example of a PSF and how it might influence the Human Error Probability (HEP).

**Answer 2:**
Performance Shaping Factors (PSFs) are conditions or influences that can either increase or decrease the likelihood of a human error. They are crucial because they allow HRA methods to adjust "nominal" or base HEPs to reflect the specific context of the task and the operational environment. This makes the HEP estimation more realistic and accurate.

**Example of a PSF:**
*   **PSF:** Time pressure (a component of workload).
*   **Influence:** If an operator has very limited time to complete a critical task, they are more likely to rush, overlook steps, or make errors in judgment. This would **increase** the Human Error Probability (HEP) for that task compared to a situation where ample time is available. For instance, a nominal HEP of $1 \times 10^{-3}$ might be adjusted upwards to $5 \times 10^{-3}$ due to severe time pressure.

**Question 3:**
Describe the main steps involved in the THERP (Technique for Human Error Rate Prediction) method.

**Answer 3:**
The main steps involved in THERP are:
1.  **Task Analysis:** Decompose the task into a sequence of human actions.
2.  **Error Mode Identification:** Identify plausible error modes for each action (omission, commission, incorrect action, timing errors).
3.  **Dependency Analysis:** Determine if the outcome of one human action affects the next.
4.  **PSF Identification:** Identify relevant Performance Shaping Factors for each error mode.
5.  **HEP Estimation:** Estimate HEPs by starting with nominal HEPs and adjusting them based on the identified PSFs using tables or models.
6.  **Integration into System Model:** Incorporate the calculated HEPs into a system reliability model, such as a fault tree.

**Question 4:**
Consider a scenario where an operator needs to calibrate a sensor. The task involves setting a specific dial to a marked value.
*   Nominal HEP for missetting a dial (if it's difficult to read) is $2 \times 10^{-2}$.
*   The task is performed in a dimly lit area (a PSF).
*   Based on expert judgment, dim lighting increases the HEP by a factor of 3.
*   The operator is experienced but under moderate pressure (another PSF, assume no significant adjustment from moderate pressure on this task).
Calculate the adjusted HEP for this human error.

**Answer 4:**
*   Nominal HEP = $2 \times 10^{-2}$
*   PSF: Dim lighting
*   PSF Adjustment Factor (for dim lighting) = 3
*   Adjusted HEP = Nominal HEP × PSF Adjustment Factor
*   Adjusted HEP = $(2 \times 10^{-2}) \times 3 = 6 \times 10^{-2}$

The adjusted HEP for the human error of missetting the dial due to dim lighting is $6 \times 10^{-2}$.

---

### **8. Important Points to Remember**

*   Human error is a significant contributor to system failures and must be addressed in reliability engineering.
*   HRA methods help in quantifying human reliability.
*   Task analysis is the foundational step for most HRA methods.
*   Performance Shaping Factors (PSFs) are crucial for adjusting base HEPs to real-world conditions.
*   THERP is a comprehensive and widely used quantitative HRA method.
*   Human actions can be directly integrated into Fault Trees as basic events.
*   Improving human reliability often involves better training, improved procedures, and optimized human-machine interfaces.
*   The reliability of maintenance and operational tasks performed by humans directly impacts system availability and overall reliability.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |


### **9. References and Further Reading**

*   **Balagurusamy, R. (2017).** *Reliability Engineering*. McGraw Hill Education. (Focus on chapters discussing human factors and their integration into reliability models).
*   **Chandrupatla, T. R. (2009).** *Quality and Reliability in Engineering*. Cambridge University Press. (Look for sections on human reliability and error analysis).
*   **Srinath, L. S. (2005).** *Concepts of Reliability Engineering*. Affiliated East-West Press. (Chapters on modeling and analysis might include human factors).
*   **Ebling, C. E. (2004).** *An Introduction to Reliability and Maintainability Engineering*. Tata McGraw Hill. (Explore chapters on system reliability analysis which often include human factors).
*   **Swain, A. D., & Guttmann, H. E. (1983).** *Handbook of Human-Reliability Analysis with Emphasis on Nuclear Power Plant Applications*. NUREG/CR-1270. (A classic and comprehensive reference, though its focus is specific, the methodologies are broadly applicable).
*   **Health and Safety Executive (HSE).** Various publications on human factors and safety assessment in the UK.

---