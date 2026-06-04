---
title: "Event tree analysis"
subject: "RELIABILITY ENGINEERING"
module: "Module 3: System Analysis and Reliability Estimation: Fault tree analysis"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1751d0cf4804463e5a"
status: "completed"
scrapedAt: "2026-05-20T18:18:04.020Z"
---
# RELIABILITY ENGINEERING

## Module 3: System Analysis and Reliability Estimation: Fault Tree Analysis

### Topic: Event Tree Analysis (ETA)

---

### 1. Introduction to Event Tree Analysis (ETA)

Event Tree Analysis (ETA) is a **deductive** risk assessment technique used to analyze the potential consequences of an initiating event. It starts with an undesirable initiating event and systematically traces the sequence of events that can occur, leading to various outcomes, including safety or hazard events. ETA is particularly useful for understanding the safety implications of specific operational scenarios and identifying potential mitigating measures.

**Key Concept:** ETA focuses on the **forward"** direction of causality, starting from a cause (initiating event) and exploring its possible effects. This contrasts with Fault Tree Analysis (FTA), which works backward from an undesired outcome to its root causes.

**Learning Outcomes Covered:**
*   **CO1 (K2):** Explain various modes of failure and basic concepts of reliability. (ETA helps understand how failures propagate and lead to different outcomes.)
*   **CO2 (K3):** Identify methods for reliability prediction according to system characteristics. (ETA provides a framework for quantifying the probability of different system states and outcomes.)
*   **CO3 (K3):** Develop ability in formulating suitable strategies to enhance reliability of a manufacturing system. (By identifying critical failure sequences and the effectiveness of safety functions, ETA guides improvement strategies.)

**Textbook References:**
*   **Balagurusamy (2017):** While Balagurusamy primarily focuses on FTA, it often introduces ETA as a complementary technique. Chapter 12 on "Reliability Analysis of Systems" might discuss different analytical approaches.
*   **Chandrupatla (2009):** Chapter 9, "System Reliability Analysis," likely provides a good overview of ETA as a method for analyzing system behavior.
*   **Srinath (2005):** Srinath's "Concepts of Reliability Engineering" may cover ETA in its discussions on system reliability and risk assessment.

**Reference Book References:**
*   **Ebling (2004):** Ebling's "An Introduction to Reliability and Maintainability Engineering" is a strong candidate for detailed coverage of ETA, especially in sections related to system safety and risk analysis.
*   **Lewis (2012):** Lewis's "Introduction to Reliability Engineering" likely includes ETA as a standard tool for safety and probabilistic risk assessment.

---

### 2. Purpose and Applications of Event Tree Analysis

**Purpose:**
*   To systematically explore the consequences of an initiating event.
*   To identify the various possible outcomes of a system response to an initiating event.
*   To assess the probability of these different outcomes.
*   To evaluate the effectiveness of safety systems and procedural controls.
*   To support decision-making in safety design, operational procedures, and risk management.

**Applications:**
*   **Nuclear Power Industry:** Assessing the consequences of equipment failures or human errors, and the effectiveness of safety systems.
*   **Aerospace:** Analyzing the failure of critical systems and their impact on mission success.
*   **Chemical and Petrochemical Industries:** Evaluating the consequences of process upsets or equipment failures.
*   **Manufacturing Systems:** Understanding how a malfunction in one part of the process can cascade to other areas.
*   **Healthcare:** Analyzing potential adverse events and the effectiveness of safety protocols.

**Key Concept:** ETA is a **scenario-based** analysis.

---

### 3. Structure of an Event Tree

An Event Tree is a graphical representation that starts with an **initiating event** and branches out based on the success or failure of subsequent **events** or **safety functions**.

**Components of an Event Tree:**

1.  **Initiating Event (IE):** The starting point of the analysis – a single, unplanned event that disrupts normal system operation.
    *   *Example:* A pump failure in a manufacturing process.
    *   *Characteristics:* Typically a single failure or a basic event.

2.  **Subsequent Events / Safety Functions:** These are events that occur after the initiating event, often representing the response of safety systems or procedural actions. Each of these events has two possible outcomes:
    *   **Success (S):** The safety function performs as intended.
    *   **Failure (F):** The safety function fails to perform as intended.

3.  **Branches:** Each subsequent event creates two branches, one for success and one for failure. The path from the initiating event through a sequence of successes and failures forms a specific **scenario**.

4.  **Outcomes:** The end points of the branches represent the various possible consequences or states of the system after the initiating event and the responses of the safety functions. These can range from no significant impact to severe accidents.

**How to Construct an Event Tree:**

1.  **Identify the Initiating Event (IE):** Select a specific event that could lead to undesirable consequences.
2.  **Determine the Sequence of Relevant Events:** Identify critical safety functions or events that will occur in response to the IE. These are often barriers or safeguards.
3.  **Define Success/Failure Criteria:** Clearly define what constitutes success and failure for each safety function.
4.  **Construct the Tree:**
    *   Start with the IE at the left.
    *   For the first safety function, draw two branches – one for Success (S) and one for Failure (F).
    *   For each subsequent safety function, draw two branches (S and F) from the end of each previous branch.
    *   Continue this process for all relevant safety functions.
5.  **Identify the Final Outcomes:** Label the end of each branch with the resulting state of the system or process.

**Important Point:** The order of events in an ETA is crucial as it reflects the operational sequence and the logic of how safety functions are activated.

---

### 4. Quantifying Event Tree Probabilities

Once the event tree is constructed, probabilities are assigned to each branch to determine the probability of each outcome.

**Key Principles:**

*   **Probability of Initiating Event (P(IE)):** This is typically provided as input or obtained from historical data.
*   **Probability of Success/Failure of Safety Functions:** The probability of success ($P_S$) and failure ($P_F$) for each safety function ($i$) are required, where $P_S(i) + P_F(i) = 1$. These probabilities are often derived from component reliability data, testing, or engineering judgment.
*   **Independence Assumption:** It's often assumed that the failures of different safety functions are independent.

**Calculation:** The probability of a specific scenario (a path from IE to an outcome) is the product of the probabilities of all the events along that path.

**Example:**

Consider an initiating event (IE) with a probability $P(IE) = 0.01$.
Let's analyze the impact of two safety functions (SF1 and SF2) on the system.

*   $P(\text{SF1 Success}) = P_{S1} = 0.9$
*   $P(\text{SF1 Failure}) = P_{F1} = 0.1$
*   $P(\text{SF2 Success} | \text{SF1 Success}) = P_{S2|S1} = 0.95$ (Conditional probability if SF1 succeeded)
*   $P(\text{SF2 Failure} | \text{SF1 Success}) = P_{F2|S1} = 0.05$ (Conditional probability if SF1 succeeded)
*   $P(\text{SF2 Success} | \text{SF1 Failure}) = P_{S2|F1} = 0.98$ (Conditional probability if SF1 failed)
*   $P(\text{SF2 Failure} | \text{SF1 Failure}) = P_{F2|F1} = 0.02$ (Conditional probability if SF1 failed)

**Event Tree Structure and Probability Calculation:**

```
                                     IE (P=0.01)
                                        / \
                                       /   \
                                      /     \
                                     /       \
                                    SF1       SF1
                                  (S, 0.9)   (F, 0.1)
                                   /   \       /   \
                                  /     \     /     \
                                 /       \   /       \
                               SF2       SF2 SF2       SF2
                             (S, 0.95) (F, 0.05) (S, 0.98) (F, 0.02)
                                /         /         /         /
                               /         /         /         /
                              /         /         /         /
                             /         /         /         /
                          Outcome1  Outcome2  Outcome3  Outcome4
```

**Calculating Probabilities of Outcomes:**

*   **Outcome 1 (IE -> SF1=S -> SF2=S):**
    $P(\text{Outcome 1}) = P(IE) \times P(\text{SF1 Success}) \times P(\text{SF2 Success} | \text{SF1 Success})$
    $P(\text{Outcome 1}) = 0.01 \times 0.9 \times 0.95 = 0.00855$

*   **Outcome 2 (IE -> SF1=S -> SF2=F):**
    $P(\text{Outcome 2}) = P(IE) \times P(\text{SF1 Success}) \times P(\text{SF2 Failure} | \text{SF1 Success})$
    $P(\text{Outcome 2}) = 0.01 \times 0.9 \times 0.05 = 0.00045$

*   **Outcome 3 (IE -> SF1=F -> SF2=S):**
    $P(\text{Outcome 3}) = P(IE) \times P(\text{SF1 Failure}) \times P(\text{SF2 Success} | \text{SF1 Failure})$
    $P(\text{Outcome 3}) = 0.01 \times 0.1 \times 0.98 = 0.00098$

*   **Outcome 4 (IE -> SF1=F -> SF2=F):**
    $P(\text{Outcome 4}) = P(IE) \times P(\text{SF1 Failure}) \times P(\text{SF2 Failure} | \text{SF1 Failure})$
    $P(\text{Outcome 4}) = 0.01 \times 0.1 \times 0.02 = 0.00002$

**Verification:** The sum of probabilities of all outcomes should equal the probability of the initiating event.
$0.00855 + 0.00045 + 0.00098 + 0.00002 = 0.01$ (This confirms the calculation).

**Important Point:** If safety functions are assumed to be independent, the conditional probabilities simplify to the marginal probabilities (e.g., $P(\text{SF2 Success} | \text{SF1 Success}) = P(\text{SF2 Success})$). The example above uses conditional probabilities to illustrate a more general case.

**Textbook Reference Example:**
*   **Chandrupatla (2009):** Chapter 9 might contain examples of constructing and quantifying event trees for simple systems.

---

### 5. Advantages and Limitations of Event Tree Analysis

**Advantages:**

*   **Clear Visualization:** Provides a clear, graphical representation of accident scenarios.
*   **Systematic Analysis:** Ensures that all potential consequences of an initiating event are considered.
*   **Identifies Critical Safety Functions:** Highlights the safety functions that are most important in mitigating risks.
*   **Quantifies Risk:** Allows for the quantification of the probability of various outcomes, enabling risk-informed decision-making.
*   **Supports Safety Improvements:** Helps in identifying weak points in safety systems and suggests areas for improvement.
*   **Complementary to FTA:** Can be used in conjunction with FTA to provide a more complete risk assessment.

**Limitations:**

*   **Initiating Event Dependence:** Assumes the initiating event is well-defined and its probability is known. It doesn't analyze the causes of the initiating event itself.
*   **Sequence of Events:** Assumes a specific sequence of events. If the order of safety function activation can vary significantly, the standard ETA might not fully capture the risk.
*   **Completeness:** The quality of the ETA heavily depends on the thoroughness of identifying all relevant safety functions and their failure modes. Missing a critical safety function can lead to an incomplete analysis.
*   **Independence Assumption:** The assumption of independence between safety functions might not always hold true in real systems (e.g., common cause failures). This can lead to underestimation of risk.
*   **Subjectivity:** Probabilities assigned to safety functions can involve subjective judgment, especially when data is scarce.
*   **Complexity:** For systems with many safety functions or complex interactions, the event tree can become very large and difficult to manage.

**Important Point:** ETA is best used for analyzing the consequences of a single, well-defined initiating event.

---

### 6. Relationship with Fault Tree Analysis (FTA)

ETA and FTA are complementary techniques used in reliability and safety engineering.

| Feature          | Event Tree Analysis (ETA)                                     | Fault Tree Analysis (FTA)                                         |
| :--------------- | :------------------------------------------------------------ | :---------------------------------------------------------------- |
| **Approach**     | Deductive (Forward logic): From cause to effect               | Inductive (Backward logic): From effect to causes               |
| **Starting Point**| An initiating event                                           | An undesired system outcome (top event)                           |
| **Output**       | Scenarios and probabilities of various consequences           | Causes and probabilities of the top event                       |
| **Purpose**      | To determine the consequences of an initiating event          | To identify the combinations of failures that lead to an outcome |
| **Structure**    | Branches based on success/failure of safety functions         | Gates (AND, OR, etc.) and basic events                            |
| **Application**  | Accident progression, safety system effectiveness             | System failure identification, reliability prediction             |
| **Focus**        | What happens *after* an event                                 | What leads *to* an event                                          |

**How they complement each other:**

*   An initiating event identified in an FTA can serve as the starting point for an ETA.
*   The outcomes of an ETA can be analyzed further using FTA to understand the root causes of failures leading to undesirable consequences.
*   ETA helps in validating the effectiveness of safeguards that might be modeled as basic events or components in an FTA.

**Textbook Reference:**
*   **Balagurusamy (2017):** Chapter 12 likely discusses the relationship between different reliability analysis methods, including ETA and FTA.
*   **Srinath (2005):** May provide a comparative analysis of these techniques.

---

### 7. Learning Outcomes Alignment and Key Concepts Summary

**Summary of Learning Outcomes Addressed:**

*   **CO1 (K2):** ETA helps understand failure propagation and the various potential failure modes and their outcomes (e.g., safe shutdown vs. severe accident).
*   **CO2 (K3):** ETA is a method for reliability prediction by quantifying the probability of different system states following an initiating event. It involves calculating probabilities of success/failure of safety functions.
*   **CO3 (K3):** By identifying scenarios with high probabilities of undesirable outcomes and assessing the effectiveness of safety functions, ETA directly informs strategies to enhance system reliability (e.g., improving the reliability of a critical safety function).

**Key Concepts to Remember:**

*   **Initiating Event (IE):** The starting point of the analysis.
*   **Safety Functions/Subsequent Events:** Barriers or actions that respond to the IE.
*   **Success (S) / Failure (F):** The two possible states for each event.
*   **Scenarios:** The sequences of S/F from the IE to an outcome.
*   **Probability Calculation:** Product of probabilities along a scenario path.
*   **Complementary to FTA:** Works forward, FTA works backward.
*   **Applications:** Accident analysis, safety system evaluation.

---

### 8. Practice Questions and Exercises

**Question 1:**
An initiating event occurs with a probability of 0.05. It triggers two safety functions, SF1 and SF2, in sequence.
*   The probability of SF1 succeeding is 0.98.
*   The probability of SF2 succeeding, given SF1 succeeded, is 0.99.
*   The probability of SF2 succeeding, given SF1 failed, is 0.95.

Construct an event tree and calculate the probabilities of the following outcomes:
a)  Initiating event occurs, SF1 succeeds, SF2 succeeds.
b)  Initiating event occurs, SF1 succeeds, SF2 fails.
c)  Initiating event occurs, SF1 fails, SF2 succeeds.
d)  Initiating event occurs, SF1 fails, SF2 fails.

**Answer 1:**

Let IE be the initiating event, $P(IE) = 0.05$.
$P(SF1=S) = 0.98$, $P(SF1=F) = 1 - 0.98 = 0.02$.
$P(SF2=S | SF1=S) = 0.99$, $P(SF2=F | SF1=S) = 1 - 0.99 = 0.01$.
$P(SF2=S | SF1=F) = 0.95$, $P(SF2=F | SF1=F) = 1 - 0.95 = 0.05$.

**Event Tree Diagram:**

```
                      IE (0.05)
                        /   \
                       /     \
                      /       \
                    SF1=S     SF1=F
                    (0.98)    (0.02)
                     / \       / \
                    /   \     /   \
                   /     \   /     \
                 SF2=S SF2=F SF2=S SF2=F
                 (0.99) (0.01) (0.95) (0.05)
                   /     /     /     /
                  /     /     /     /
           Outcome_a Outcome_b Outcome_c Outcome_d
```

**Probability Calculations:**

a)  $P(\text{Outcome\_a}) = P(IE) \times P(SF1=S) \times P(SF2=S | SF1=S)$
    $P(\text{Outcome\_a}) = 0.05 \times 0.98 \times 0.99 = 0.04851$

b)  $P(\text{Outcome\_b}) = P(IE) \times P(SF1=S) \times P(SF2=F | SF1=S)$
    $P(\text{Outcome\_b}) = 0.05 \times 0.98 \times 0.01 = 0.00049$

c)  $P(\text{Outcome\_c}) = P(IE) \times P(SF1=F) \times P(SF2=S | SF1=F)$
    $P(\text{Outcome\_c}) = 0.05 \times 0.02 \times 0.95 = 0.00095$

d)  $P(\text{Outcome\_d}) = P(IE) \times P(SF1=F) \times P(SF2=F | SF1=F)$
    $P(\text{Outcome\_d}) = 0.05 \times 0.02 \times 0.05 = 0.00005$

**Check:** $0.04851 + 0.00049 + 0.00095 + 0.00005 = 0.05$ (Correct)

---

**Question 2:**
Consider a system in a manufacturing plant. An initiating event is a "Coolant Leakage" ($P(Leakage) = 0.002$ per hour).
The system has two safety functions:
1.  **Safety Valve Closure (SVC):** Designed to stop the flow of coolant. Its reliability (probability of success) is 0.999.
2.  **Emergency Shutdown System (ESS):** Designed to halt the entire process if the leak persists. Its reliability is 0.995.

Assume the safety functions are independent. Construct an event tree and calculate the probability of the following outcomes per hour:
a)  Leakage occurs, SVC succeeds, ESS succeeds.
b)  Leakage occurs, SVC succeeds, ESS fails.
c)  Leakage occurs, SVC fails, ESS succeeds.
d)  Leakage occurs, SVC fails, ESS fails.

What is the probability of a "major coolant spill" if a major spill occurs only when both SVC and ESS fail?

**Answer 2:**

$P(IE) = P(\text{Coolant Leakage}) = 0.002$ per hour.
$P(SVC=S) = 0.999$, $P(SVC=F) = 0.001$.
$P(ESS=S) = 0.995$, $P(ESS=F) = 0.005$.
Since they are independent:
$P(ESS=S | SVC=S) = P(ESS=S) = 0.995$
$P(ESS=F | SVC=S) = P(ESS=F) = 0.005$
$P(ESS=S | SVC=F) = P(ESS=S) = 0.995$
$P(ESS=F | SVC=F) = P(ESS=F) = 0.005$

**Event Tree Diagram:**

```
                  Coolant Leakage (0.002)
                        /       \
                       /         \
                      /           \
                   SVC=S         SVC=F
                   (0.999)       (0.001)
                    / \           / \
                   /   \         /   \
                  /     \       /     \
               ESS=S   ESS=F ESS=S   ESS=F
               (0.995) (0.005) (0.995) (0.005)
                 /       /       /       /
                /       /       /       /
         Outcome_a Outcome_b Outcome_c Outcome_d
```

**Probability Calculations:**

a)  $P(\text{Outcome\_a}) = P(Leakage) \times P(SVC=S) \times P(ESS=S)$
    $P(\text{Outcome\_a}) = 0.002 \times 0.999 \times 0.995 = 0.00198801$

b)  $P(\text{Outcome\_b}) = P(Leakage) \times P(SVC=S) \times P(ESS=F)$
    $P(\text{Outcome\_b}) = 0.002 \times 0.999 \times 0.005 = 0.00000999$

c)  $P(\text{Outcome\_c}) = P(Leakage) \times P(SVC=F) \times P(ESS=S)$
    $P(\text{Outcome\_c}) = 0.002 \times 0.001 \times 0.995 = 0.00000199$

d)  $P(\text{Outcome\_d}) = P(Leakage) \times P(SVC=F) \times P(ESS=F)$
    $P(\text{Outcome\_d}) = 0.002 \times 0.001 \times 0.005 = 0.00000001$

**Probability of Major Coolant Spill:**
A major spill occurs when both SVC and ESS fail. This corresponds to Outcome_d.
$P(\text{Major Spill}) = P(\text{Outcome\_d}) = 0.00000001$ per hour.

---

### 9. Important Points to Remember

*   **Forward Logic:** ETA follows the progression of events from a specific initiating cause.
*   **Initiating Event is Key:** The quality of the analysis is highly dependent on the correct identification and characterization of the initiating event.
*   **Safety Functions are Barriers:** Each branch represents the success or failure of a barrier to prevent or mitigate the consequences.
*   **Order Matters:** The sequence of safety functions in the tree must reflect the operational logic.
*   **Probabilities Drive Outcomes:** The numerical probabilities assigned to events determine the likelihood of different consequences.
*   **Risk Assessment Tool:** ETA is a powerful tool for understanding and quantifying risks associated with specific operational scenarios.
*   **Complements FTA:** Use both techniques for a comprehensive understanding of system reliability and safety.

---

This concludes the notes on Event Tree Analysis. Ensure you understand the structure, calculation methods, and the relationship between ETA and FTA for your reliability engineering studies.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
