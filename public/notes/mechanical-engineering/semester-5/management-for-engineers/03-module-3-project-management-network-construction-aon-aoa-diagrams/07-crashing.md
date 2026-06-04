---
title: "crashing"
subject: "MANAGEMENT FOR ENGINEERS"
module: "Module 3: Project Management: Network construction, AON, AOA diagrams"
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1451d0cf48044633e6"
status: "completed"
scrapedAt: "2026-05-20T18:01:10.975Z"
---
# MANAGEMENT FOR ENGINEERS - Module 3: Project Management: Network Construction, AON, AOA Diagrams

## Topic: Project Crashing

---

### **1. Introduction to Project Crashing**

**Definition:** Project crashing is a technique used in project management to shorten the overall duration of a project by adding more resources to project activities. This is typically done when a project is behind schedule or when there is a need to complete it earlier than the planned completion date, often to meet contractual deadlines or capitalize on market opportunities.

**Objective:** The primary objective of crashing is to reduce the project completion time at the minimum possible increase in cost.

**Alignment with Course Outcomes:**
*   **CO4 (Apply project management techniques to manage projects - K3):** Crashing is a direct application of project management techniques to expedite project completion.
*   **CO3 (Demonstrate ability in decision making and productivity analysis - K3):** Crashing involves analyzing activity durations, costs, and resource availability to make informed decisions about where to allocate additional resources for maximum impact.

**Key Concepts:**
*   **Normal Time:** The estimated time to complete an activity under normal working conditions with standard resources.
*   **Normal Cost:** The cost associated with completing an activity in its normal time.
*   **Crash Time:** The shortest possible time to complete an activity, usually achieved by adding extra resources (e.g., overtime, additional workers, specialized equipment).
*   **Crash Cost:** The cost incurred to complete an activity in its crash time. This is typically higher than the normal cost due to overtime pay, premium rates for equipment, etc.
*   **Activity Cost Slope (or Cost Slope/Crash Cost per Unit Time):** The additional cost incurred for each unit of time by which an activity's duration is reduced.

**Formula for Activity Cost Slope:**

$$ \text{Cost Slope} = \frac{\text{Crash Cost} - \text{Normal Cost}}{\text{Normal Time} - \text{Crash Time}} $$

This slope represents the "cost-effectiveness" of crashing a particular activity. A lower cost slope indicates a more efficient way to reduce the project duration.

**Reference to Textbooks:**
*   While not explicitly detailed as "crashing" in all introductory management texts, the underlying principles of resource allocation and cost-benefit analysis for time reduction are discussed within the broader context of project planning and control. Concepts related to scheduling and critical path analysis (from which crashing is derived) are fundamental in **Koontz, Weihrich, and Cannice (11th Edition)**, **Mahadevan (3rd Edition)**, and **Tripathi and Reddy (6th Edition)**.

---

### **2. The Crashing Process**

Crashing is typically performed on activities that lie on the **critical path** of the project network. Reducing the duration of non-critical activities will not shorten the overall project completion time.

**Steps involved in Project Crashing:**

1.  **Identify the Critical Path:** Determine the critical path(s) for the project network using techniques like PERT/CPM (Program Evaluation and Review Technique/Critical Path Method). Activities on the critical path have zero float or slack.
2.  **Determine the Cost Slope for Each Activity:** Calculate the cost slope for all activities that can be crashed. Typically, only activities with a defined "crash time" and "crash cost" can be considered for crashing.
3.  **Identify Activities on the Critical Path with the Lowest Cost Slope:** From the critical path activities, select the one with the lowest cost slope. This is the most cost-effective activity to crash.
4.  **Crash the Selected Activity:** Reduce the duration of the selected activity by one unit of time (or by its available crash increment). Adjust the activity's duration and cost accordingly.
5.  **Recalculate the Critical Path and Project Duration:** After crashing, re-evaluate the project network to determine the new critical path and the new total project duration.
6.  **Repeat:** Continue steps 3-5 until the desired project completion time is reached or until it becomes uneconomical (i.e., the cost of crashing exceeds the benefit) or impossible (i.e., all critical activities have reached their crash time).

**Important Consideration:** As an activity is crashed, the critical path might change. If an activity's duration is reduced such that it is no longer on the critical path, or if another path becomes critical, the crashing strategy needs to be re-evaluated based on the new critical path.

---

### **3. Types of Activities to Crash**

*   **Activities on the Critical Path:** These are the primary candidates for crashing because reducing their duration directly reduces the overall project duration.
*   **Activities with Available Crash Time:** Not all activities can be crashed indefinitely. There is usually a limit to how much an activity can be shortened, defined by its crash time.
*   **Activities with a Positive Cost Slope:** Activities with a negative cost slope (meaning they become cheaper to complete if expedited) are rare. Typically, crashing involves an increase in cost.

---

### **4. Examples and Calculations**

Let's consider a simple project with the following activities:

| Activity | Predecessors | Normal Time (days) | Normal Cost ($) | Crash Time (days) | Crash Cost ($) |
| :------- | :----------- | :----------------- | :-------------- | :---------------- | :------------- |
| A        | -            | 5                  | 500             | 3                 | 900            |
| B        | -            | 6                  | 600             | 4                 | 1000           |
| C        | A            | 4                  | 400             | 3                 | 500            |
| D        | A            | 3                  | 300             | 2                 | 500            |
| E        | B, C         | 5                  | 500             | 4                 | 800            |
| F        | D            | 2                  | 200             | 1                 | 400            |
| G        | E, F         | 3                  | 300             | 2                 | 600            |

**Step 1: Calculate the Cost Slope for Each Activity:**

*   **A:** ($900 - $500) / (5 - 3) = $400 / 2 = $200/day
*   **B:** ($1000 - $600) / (6 - 4) = $400 / 2 = $200/day
*   **C:** ($500 - $400) / (4 - 3) = $100 / 1 = $100/day
*   **D:** ($500 - $300) / (3 - 2) = $200 / 1 = $200/day
*   **E:** ($800 - $500) / (5 - 4) = $300 / 1 = $300/day
*   **F:** ($400 - $200) / (2 - 1) = $200 / 1 = $200/day
*   **G:** ($600 - $300) / (3 - 2) = $300 / 1 = $300/day

**Step 2: Determine the Initial Critical Path (using Normal Times):**

To determine the critical path, we need to calculate the earliest start (ES), earliest finish (EF), latest start (LS), and latest finish (LF) times for each activity. For simplicity in this example, we'll use a direct path analysis:

*   **Path 1:** A -> C -> E -> G = 5 + 4 + 5 + 3 = 17 days
*   **Path 2:** A -> D -> F -> G = 5 + 3 + 2 + 3 = 13 days
*   **Path 3:** B -> E -> G = 6 + 5 + 3 = 14 days

The longest path is Path 1 (A-C-E-G) with 17 days. So, the **critical path is A-C-E-G**.

**Target:** Let's assume we want to reduce the project duration from 17 days to 14 days.

**Step 3: Crashing to Reduce Project Duration:**

*   **Initial Project Duration:** 17 days.
*   **Critical Path Activities:** A, C, E, G.
*   **Cost Slopes of Critical Path Activities:**
    *   A: $200/day
    *   C: $100/day
    *   E: $300/day
    *   G: $300/day

**Crashing Iteration 1 (Reduce duration by 1 day):**
*   **Cheapest critical activity:** Activity C ($100/day).
*   **Crash C by 1 day:** New duration for C = 3 days.
*   **New total project duration:** 17 - 1 = 16 days.
*   **New Critical Path:** A-C-E-G (5 + 3 + 5 + 3 = 16 days). Path A-D-F-G (13 days), Path B-E-G (14 days). Path A-C-E-G remains critical.
*   **Cost Increase:** $100.

**Crashing Iteration 2 (Reduce duration by 1 day):**
*   **Critical Path Activities:** A, C, E, G.
*   **Cost Slopes of Critical Path Activities:**
    *   A: $200/day
    *   C: $100/day (C is now at its crash time of 3 days, so it cannot be crashed further).
    *   E: $300/day
    *   G: $300/day
*   **Next cheapest critical activity:** Activity A ($200/day).
*   **Crash A by 1 day:** New duration for A = 4 days.
*   **New total project duration:** 16 - 1 = 15 days.
*   **New Critical Path:** A-C-E-G (4 + 3 + 5 + 3 = 15 days). Path A-D-F-G (4 + 3 + 2 + 3 = 12 days), Path B-E-G (6 + 5 + 3 = 14 days). Path A-C-E-G remains critical.
*   **Cost Increase:** $100 (from iteration 1) + $200 (for crashing A) = $300.

**Crashing Iteration 3 (Reduce duration by 1 day):**
*   **Critical Path Activities:** A, C, E, G.
*   **Cost Slopes of Critical Path Activities:**
    *   A: $200/day (A can be crashed by 1 more day to 3 days)
    *   C: Cannot be crashed further.
    *   E: $300/day
    *   G: $300/day
*   **Next cheapest critical activity:** Activity A ($200/day).
*   **Crash A by 1 day:** New duration for A = 3 days (A is now at its crash time).
*   **New total project duration:** 15 - 1 = 14 days.
*   **New Critical Path:** A-C-E-G (3 + 3 + 5 + 3 = 14 days).
    *   Now, check other paths:
        *   A-D-F-G: 3 + 3 + 2 + 3 = 11 days.
        *   B-E-G: 6 + 5 + 3 = 14 days.
    *   **Crucially, multiple critical paths can emerge.** Now both A-C-E-G and B-E-G are critical with 14 days.
*   **Cost Increase:** $300 (from iteration 2) + $200 (for crashing A) = $500.

We have reached a duration of 14 days. To crash further, we would need to consider activities on *both* critical paths.

**Considerations for further crashing (if needed):**
*   The critical path activities are A, C, E, G, and B.
*   Available crash increments and slopes for these:
    *   A: Fully crashed.
    *   C: Fully crashed.
    *   E: $300/day (can be crashed by 1 day).
    *   G: $300/day (can be crashed by 1 day).
    *   B: $200/day (can be crashed by 2 days).
*   The cheapest options to crash are now B ($200/day) or A/C (fully crashed) and E/G ($300/day).
*   If we crash B by 1 day (cost $200), the new project duration would be 13 days. Both critical paths would need to be considered.

---

### **5. Advantages and Disadvantages of Crashing**

**Advantages:**

*   **Reduced Project Duration:** The most direct benefit is achieving an earlier project completion. This can be crucial for meeting deadlines, responding to market demands, or avoiding penalties. (CO4)
*   **Competitive Advantage:** Completing projects faster can provide a significant edge over competitors. (CO1, CO6)
*   **Cost Savings (Indirect):** While crashing increases direct costs, it might lead to indirect cost savings by avoiding late penalties, reducing overheads over a shorter period, or allowing for earlier revenue generation. (CO3)
*   **Improved Cash Flow:** Early project completion can lead to earlier sales and improved cash flow for the organization.

**Disadvantages:**

*   **Increased Cost:** Crashing invariably increases the direct cost of the project due to overtime, premium rates for resources, and potential inefficiencies. (CO3)
*   **Resource Strain:** Adding resources can put a strain on personnel and equipment, potentially leading to burnout or decreased morale. (Reference: **Griffin (11th Edition)** often discusses resource management and potential negative impacts of over-allocation).
*   **Quality Risks:** Rushing activities can sometimes compromise the quality of the deliverables if not managed carefully. (CO1)
*   **Potential for Inefficiencies:** While the cost slope aims to find the most efficient way, the process itself can be complex and require significant management attention.
*   **May Not Be Possible:** Some activities cannot be crashed, or the cost might become prohibitively high.

---

### **6. Important Points to Remember**

*   **Focus on the Critical Path:** Crashing efforts should always prioritize activities on the current critical path.
*   **Cost Slope is Key:** The cost slope is the primary metric for deciding which activity to crash.
*   **Iterative Process:** Crashing is an iterative process. Recalculate the critical path after each crashing step.
*   **Resource Limitations:** Be aware of the normal and crash times/costs available for each activity.
*   **Multiple Critical Paths:** The project may develop multiple critical paths as activities are crashed.
*   **Trade-off Analysis:** Crashing involves a trade-off between time and cost. The decision to crash should be based on a clear understanding of the benefits versus the increased costs. (CO3)
*   **Risk Management:** Crashing can introduce new risks (e.g., quality, morale). These risks must be managed. (CO1)

---

### **7. Practice Questions and Exercises**

**Question 1:**
Define project crashing and explain its primary objective. What is the formula for calculating the cost slope of an activity?

**Answer:**
Project crashing is a technique used to shorten the project duration by adding resources to project activities. Its primary objective is to reduce the project completion time at the minimum possible increase in cost.
The formula for cost slope is:
$$ \text{Cost Slope} = \frac{\text{Crash Cost} - \text{Normal Cost}}{\text{Normal Time} - \text{Crash Time}} $$

**Question 2:**
A project has the following activities, their normal and crash times and costs. Calculate the cost slope for each activity and identify which activity is the most cost-effective to crash.

| Activity | Normal Time (days) | Normal Cost ($) | Crash Time (days) | Crash Cost ($) |
| :------- | :----------------- | :-------------- | :---------------- | :------------- |
| P        | 10                 | 1000            | 8                 | 1600           |
| Q        | 5                  | 500             | 4                 | 800            |
| R        | 7                  | 700             | 5                 | 1100           |

**Answer:**

*   **P:** ($1600 - $1000) / (10 - 8) = $600 / 2 = $300/day
*   **Q:** ($800 - $500) / (5 - 4) = $300 / 1 = $300/day
*   **R:** ($1100 - $700) / (7 - 5) = $400 / 2 = $200/day

Activity R is the most cost-effective to crash with a cost slope of $200/day.

**Question 3:**
Consider the project network from the example in Section 4. If the project manager wants to reduce the project duration from 17 days to 15 days, what is the total cost incurred for crashing and which activities were crashed?

**Answer:**
To reduce the project duration from 17 days to 15 days, we performed two crashing iterations:
1.  Crashed Activity C by 1 day. Cost increase: $100. Project duration: 16 days.
2.  Crashed Activity A by 1 day. Cost increase: $200. Project duration: 15 days.

Total cost incurred for crashing = $100 + $200 = $300.
The activities crashed were Activity C (by 1 day) and Activity A (by 1 day).

---

### **8. Connection to Textbook Content**

While the specific term "crashing" might be introduced later in some texts or as a sub-topic of CPM, the foundational concepts are covered:

*   **Harold Koontz, Heinz Weihrich, and Mark V. Cannice (11th Edition):** Their discussions on planning, controlling, and resource allocation within project management provide the context for understanding why time and cost optimization techniques like crashing are necessary. They emphasize setting objectives, developing strategies, and managing resources effectively.
*   **B. Mahadevan (3rd Edition):** Operations Management texts often delve into scheduling, network analysis (CPM/PERT), and optimizing operational efficiency. Crashing is a direct extension of these concepts, focusing on manipulating activity durations and costs to meet scheduling targets.
*   **P. C. Tripathi and P. N. Reddy (6th Edition):** Principles of Management texts, in their project management sections, will cover the importance of timely project completion and the need for techniques to manage project schedules and budgets.

The reference books, while not directly about project management techniques, highlight broader managerial challenges:

*   **Philip Kotler et al. (Marketing Management):** Faster project completion can be crucial for market penetration and competitive advantage, linking project management to marketing strategy.
*   **K. Aswathappa and Sadhna Dash (Human Resource Management):** Crashing often involves human resources, and understanding the impact on employee morale, workload, and potential burnout is vital, as covered in HRM.
*   **R. W. Griffin (Management):** Griffin's focus on planning, organizing, leading, and controlling (the four functions of management) provides the overarching framework. Crashing falls under planning (setting schedule goals) and controlling (monitoring and adjusting the schedule).

---

### **9. Alignment with Course Outcomes**

*   **CO1 (Critical Analysis of Management Practices - K4):** Understanding crashing allows engineers to critically analyze the trade-offs between speed and cost in project execution and evaluate the effectiveness of such techniques.
*   **CO2 (Examine Broad Functions of Management - K2):** Crashing relates to the planning (setting time goals) and controlling (adjusting the project schedule) functions of management.
*   **CO3 (Decision Making and Productivity Analysis - K3):** Calculating cost slopes and deciding which activities to crash requires analytical skills and decision-making based on cost-benefit analysis. Productivity is enhanced by reducing project time.
*   **CO4 (Apply Project Management Techniques - K3):** Crashing is a core project management technique for schedule compression.
*   **CO5 (Understand Functional Areas of Management - K2):** Crashing demonstrates the interaction between project management, finance (costs), and human resources (resource allocation).
*   **CO6 (Market, Marketing, and Strategies - K2):** Faster project completion can be a strategic advantage in the marketplace.

---

This comprehensive study note covers the topic of project crashing, its methodology, calculations, advantages, disadvantages, and its relevance within the broader context of management for engineers, aligning with the specified learning and course outcomes and referencing the provided textbooks.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
