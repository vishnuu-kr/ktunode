---
title: "Probability of completion of project"
subject: "MANAGEMENT FOR ENGINEERS"
module: "Module 3: Project Management: Network construction, AON, AOA diagrams"
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1451d0cf48044633e5"
status: "completed"
scrapedAt: "2026-05-20T18:01:10.278Z"
---
# MANAGEMENT FOR ENGINEERS - Module 3: Project Management: Network Construction, AON, AOA Diagrams

## Topic: Probability of Completion of Project

This topic delves into understanding and quantifying the likelihood of completing a project by a specific deadline. This is a crucial aspect of project management, allowing engineers to assess risks, communicate potential delays, and make informed decisions about resource allocation and schedule adjustments.

---

### 1. Introduction to Project Completion Probability

*   **Definition:** The probability of project completion refers to the statistical likelihood that a project will be finished within a specified timeframe. It's not about absolute certainty, but rather a measure of confidence.
*   **Importance:**
    *   **Risk Assessment:** Helps identify potential schedule risks and their impact.
    *   **Decision Making:** Informs decisions about project scope, resource allocation, and contingency planning.
    *   **Stakeholder Communication:** Provides realistic expectations to clients, management, and team members.
    *   **Contractual Obligations:** Crucial for meeting contractual deadlines and avoiding penalties.
*   **Key Concept: Critical Path:** The longest path in a project network diagram (whether AON or AOA). Any delay on the critical path directly impacts the project's overall completion time. Understanding the critical path is fundamental to assessing project completion probability.

---

### 2. Probabilistic Time Estimates

While deterministic methods assume fixed durations for activities, real-world project activities often have uncertain durations. Probabilistic time estimation acknowledges this uncertainty.

*   **Three-Point Estimating:** A common technique to capture uncertainty in activity durations. For each activity, three estimates are made:
    *   **Optimistic Time (O):** The shortest possible time to complete the activity, assuming ideal conditions and no disruptions.
    *   **Most Likely Time (M):** The most realistic estimate of the activity's duration, considering normal working conditions.
    *   **Pessimistic Time (P):** The longest possible time to complete the activity, assuming adverse conditions and significant disruptions.

*   **Formulas for Estimating Activity Duration (Mean and Variance):**
    *   **Expected Activity Duration (E):** This is the average time we expect an activity to take. The most common formula is the **Beta distribution** approximation:
        $E = (O + 4M + P) / 6$
        *(This formula gives more weight to the most likely estimate, reflecting its higher probability.)*

    *   **Variance ($\sigma^2$)**: A measure of the dispersion or spread of possible activity durations.
        $\sigma^2 = ((P - O) / 6)^2$
        *(This formula quantifies the uncertainty associated with the activity's duration.)*

    *   **Standard Deviation ($\sigma$)**: The square root of the variance. It represents the typical deviation from the expected duration.
        $\sigma = \sqrt{\sigma^2} = (P - O) / 6$

**Reference:**
*   **Koontz, Weihrich, and Cannice (2020)** likely discusses the importance of accurate planning and the role of uncertainty in project management. While not directly detailing these probabilistic formulas, the principles of effective planning and control would necessitate considering such techniques.
*   **Mahadevan (2018)** in Operations Management might touch upon project scheduling and resource optimization, where probabilistic time estimates would be relevant for managing complex operations.

---

### 3. Critical Path Method (CPM) with Probabilistic Durations

When using probabilistic time estimates with network diagrams (AON or AOA), the CPM becomes more powerful.

*   **Calculating Project Expected Completion Time:** The expected completion time of the project is the sum of the expected durations of all activities on the critical path.
    $Project \ Expected \ Completion \ Time = \sum (\text{Expected Durations of activities on Critical Path})$

*   **Calculating Project Variance and Standard Deviation:** The variance of the project's completion time is the sum of the variances of the activities *on the critical path*. Activities not on the critical path have zero impact on the project's overall variance.
    $Project \ Variance (\sigma^2_{project}) = \sum (\text{Variance of activities on Critical Path})$
    $Project \ Standard \ Deviation (\sigma_{project}) = \sqrt{\sigma^2_{project}}$

**Example:**

Consider a simple project with the following activities and probabilistic time estimates:

| Activity | Predecessors | O (Days) | M (Days) | P (Days) |
| :------- | :----------- | :------- | :------- | :------- |
| A        | -            | 2        | 4        | 6        |
| B        | -            | 3        | 5        | 7        |
| C        | A            | 4        | 6        | 8        |
| D        | B            | 5        | 7        | 9        |
| E        | C, D         | 2        | 3        | 4        |

**Steps:**

1.  **Calculate Expected Durations and Variances for each activity:**

    *   **Activity A:**
        *   $E_A = (2 + 4*4 + 6) / 6 = 26 / 6 = 4.33$ days
        *   $\sigma^2_A = ((6 - 2) / 6)^2 = (4/6)^2 = (2/3)^2 = 0.44$
    *   **Activity B:**
        *   $E_B = (3 + 4*5 + 7) / 6 = 30 / 6 = 5.00$ days
        *   $\sigma^2_B = ((7 - 3) / 6)^2 = (4/6)^2 = (2/3)^2 = 0.44$
    *   **Activity C:**
        *   $E_C = (4 + 4*6 + 8) / 6 = 36 / 6 = 6.00$ days
        *   $\sigma^2_C = ((8 - 4) / 6)^2 = (4/6)^2 = (2/3)^2 = 0.44$
    *   **Activity D:**
        *   $E_D = (5 + 4*7 + 9) / 6 = 42 / 6 = 7.00$ days
        *   $\sigma^2_D = ((9 - 5) / 6)^2 = (4/6)^2 = (2/3)^2 = 0.44$
    *   **Activity E:**
        *   $E_E = (2 + 4*3 + 4) / 6 = 18 / 6 = 3.00$ days
        *   $\sigma^2_E = ((4 - 2) / 6)^2 = (2/6)^2 = (1/3)^2 = 0.11$

2.  **Construct a Network Diagram (e.g., AON):**

    ```
      [A (4.33)] --> [C (6.00)] --> [E (3.00)]
       /
      /
    [Start]
      \
       \
        [B (5.00)] --> [D (7.00)] --> [E (3.00)]
    ```

3.  **Determine the Critical Path:**
    *   Path 1: A -> C -> E = $4.33 + 6.00 + 3.00 = 13.33$ days
    *   Path 2: B -> D -> E = $5.00 + 7.00 + 3.00 = 15.00$ days

    The critical path is **B -> D -> E**.

4.  **Calculate Project Expected Completion Time:**
    *   Project Expected Completion Time = $E_B + E_D + E_E = 5.00 + 7.00 + 3.00 = 15.00$ days

5.  **Calculate Project Variance and Standard Deviation:**
    *   Variances of activities on the critical path: $\sigma^2_B = 0.44$, $\sigma^2_D = 0.44$, $\sigma^2_E = 0.11$
    *   Project Variance ($\sigma^2_{project}$) = $\sigma^2_B + \sigma^2_D + \sigma^2_E = 0.44 + 0.44 + 0.11 = 0.99$
    *   Project Standard Deviation ($\sigma_{project}$) = $\sqrt{0.99} \approx 0.995$ days

---

### 4. Calculating Probability of Meeting a Specific Deadline

Once we have the project's expected completion time and its standard deviation, we can use the normal distribution to estimate the probability of completing the project by a specific target date.

*   **The Normal Distribution:** Assumes that project completion times tend to cluster around the expected completion time. The standard deviation quantifies how spread out these times are.
*   **Z-Score:** A standardized score that indicates how many standard deviations a particular value (the target deadline) is away from the mean (the project's expected completion time).
    $Z = (Target \ Completion \ Time - Project \ Expected \ Completion \ Time) / Project \ Standard \ Deviation$
    $Z = (T - E_{project}) / \sigma_{project}$

*   **Using the Z-Table (or statistical software):** The Z-score can be used to find the probability associated with that score from a standard normal distribution table. This probability represents the likelihood of completing the project by the target time.

**Continuing the Example:**

Let's say the project manager wants to know the probability of completing the project within **17 days**.

1.  **Identify the values:**
    *   Target Completion Time (T) = 17 days
    *   Project Expected Completion Time ($E_{project}$) = 15.00 days
    *   Project Standard Deviation ($\sigma_{project}$) = 0.995 days

2.  **Calculate the Z-score:**
    $Z = (17 - 15.00) / 0.995 = 2 / 0.995 \approx 2.01$

3.  **Find the probability from a Z-table:**
    Looking up a Z-score of 2.01 in a standard normal distribution table gives a probability of approximately **0.9778**.

**Interpretation:**
There is approximately a 97.78% probability that the project will be completed within 17 days.

**Example 2:** What is the probability of completing the project within **14 days**?

1.  **Identify the values:**
    *   Target Completion Time (T) = 14 days
    *   Project Expected Completion Time ($E_{project}$) = 15.00 days
    *   Project Standard Deviation ($\sigma_{project}$) = 0.995 days

2.  **Calculate the Z-score:**
    $Z = (14 - 15.00) / 0.995 = -1 / 0.995 \approx -1.01$

3.  **Find the probability from a Z-table:**
    Looking up a Z-score of -1.01 in a standard normal distribution table gives a probability of approximately **0.1562**.

**Interpretation:**
There is approximately a 15.62% probability that the project will be completed within 14 days. This is less than the expected completion time, so the probability is lower.

**Reference:**
*   **Koontz, Weihrich, and Cannice (2020)** emphasizes control and decision-making under uncertainty, which aligns with using probability to manage project risks. They might discuss scenario planning or risk mitigation strategies.
*   **Tripathi and Reddy (2017)** likely provide foundational knowledge on quantitative methods and statistical applications in management, which would include probability and statistics for decision-making.

---

### 5. Applications and Considerations for Engineers

*   **Resource Allocation:** If the probability of completing within a certain timeframe is low, engineers might need to allocate more resources (e.g., manpower, equipment) to critical activities.
*   **Contingency Planning:** Understanding the probability of delays helps in building realistic contingency plans and buffers.
*   **Contract Negotiation:** For projects with fixed deadlines, this analysis is critical for assessing the feasibility of the deadline and negotiating terms.
*   **Risk Management:** This is a core component of risk management, allowing engineers to quantify the impact of schedule risks.
*   **Limitations of the Model:**
    *   **Assumption of Independence:** Assumes the durations of different activities are independent, which may not always be true in complex projects.
    *   **Normality Assumption:** Relies on the assumption that project completion times follow a normal distribution, which might not hold for all projects.
    *   **Accuracy of Estimates:** The accuracy of the probabilistic estimates (O, M, P) is crucial. Inaccurate estimates will lead to inaccurate probability calculations.
    *   **Resource Constraints:** The model as presented doesn't explicitly account for resource leveling or constraints that could affect activity durations.

**Reference:**
*   **Griffin (2017)** on Principles of Management would cover the essential functions of planning, organizing, leading, and controlling. Understanding project completion probability is vital for effective planning and control.
*   **Mahadevan (2018)** in Operations Management would likely discuss the application of these concepts in managing complex projects and operations, focusing on efficiency and timely delivery.

---

### 6. Learning Outcomes Alignment

*   **CO1 (K4): Critically analyse management practices:** Analyzing the accuracy of probabilistic estimates, the assumptions behind the normal distribution for project completion, and the implications of low completion probabilities allows for critical analysis of how this practice is applied.
*   **CO2 (K2): Examine broad functions of management:** This topic directly relates to the planning and controlling functions of management, ensuring projects are completed efficiently and effectively.
*   **CO3 (K3): Demonstrate ability in decision making and productivity analysis:** Calculating probabilities informs decisions about resource allocation, risk mitigation, and deadline adherence, directly impacting project productivity.
*   **CO4 (K3): Apply project management techniques:** Calculating expected durations, variances, identifying critical paths, and determining completion probabilities are core project management techniques.
*   **CO5 (K2): Understand functional areas of management:** Project management is a distinct functional area within broader management.
*   **CO6 (K2): Introduce market, marketing and marketing strategies:** While not directly related, understanding project timelines and costs is crucial for product development and market entry strategies.

---

### 7. Practice Questions and Exercises

**Question 1:**
An activity has the following time estimates: Optimistic = 5 days, Most Likely = 8 days, Pessimistic = 20 days.
a) Calculate the expected duration of this activity.
b) Calculate the variance of this activity.
c) Calculate the standard deviation of this activity.

**Answer 1:**
a) Expected Duration (E) = (5 + 4*8 + 20) / 6 = (5 + 32 + 20) / 6 = 57 / 6 = **9.5 days**
b) Variance ($\sigma^2$) = ((20 - 5) / 6)^2 = (15 / 6)^2 = (2.5)^2 = **6.25**
c) Standard Deviation ($\sigma$) = $\sqrt{6.25}$ = **2.5 days**

**Question 2:**
Consider a project with two parallel paths to completion.
Path 1 consists of activities A and B, with $E_A = 6$ days, $\sigma^2_A = 1.5$, $E_B = 8$ days, $\sigma^2_B = 2.5$.
Path 2 consists of activities C and D, with $E_C = 7$ days, $\sigma^2_C = 2.0$, $E_D = 7$ days, $\sigma^2_D = 1.0$.
Assume these are the only paths and determine the critical path, the project's expected completion time, and its standard deviation.

**Answer 2:**
1.  **Calculate path durations and variances:**
    *   Path 1 (A + B):
        *   Expected Duration = $E_A + E_B = 6 + 8 = 14$ days
        *   Variance = $\sigma^2_A + \sigma^2_B = 1.5 + 2.5 = 4.0$
    *   Path 2 (C + D):
        *   Expected Duration = $E_C + E_D = 7 + 7 = 14$ days
        *   Variance = $\sigma^2_C + \sigma^2_D = 2.0 + 1.0 = 3.0$

2.  **Determine the Critical Path:** In this case, both paths have the same expected duration (14 days). Both are critical paths.

3.  **Project Expected Completion Time:** **14 days** (since both critical paths are 14 days).

4.  **Project Variance:** We take the variance of the critical path with the highest variance. Therefore, the project variance is **4.0**.

5.  **Project Standard Deviation:** $\sigma_{project} = \sqrt{4.0} = \textbf{2.0 days}$.

**Question 3:**
Using the results from Question 2, what is the probability of completing the project within 16 days?

**Answer 3:**
*   Target Completion Time (T) = 16 days
*   Project Expected Completion Time ($E_{project}$) = 14 days
*   Project Standard Deviation ($\sigma_{project}$) = 2.0 days

1.  **Calculate Z-score:**
    $Z = (16 - 14) / 2.0 = 2 / 2.0 = 1.00$

2.  **Find Probability from Z-table:**
    Looking up Z = 1.00 gives a probability of approximately **0.8413**.

    **Interpretation:** There is approximately an 84.13% probability of completing the project within 16 days.

---

### 8. Important Points to Remember

*   **Critical Path is King:** Only activities on the critical path contribute to the project's overall variance and impact its completion time.
*   **Three-Point Estimates are Key:** They are essential for quantifying uncertainty in activity durations.
*   **Normal Distribution is a Tool:** It provides a framework for probability calculations, but its validity depends on the nature of the project and its activities.
*   **Higher Standard Deviation = Higher Risk:** A larger project standard deviation indicates more uncertainty and a wider range of possible completion times.
*   **Z-score for Probability:** Always convert the target deadline and expected completion time into a Z-score to use standard normal distribution tables.
*   **Forward and Backward Pass:** While not explicitly detailed here for probability, understanding the forward and backward passes in network diagrams is crucial for identifying the critical path.

---

This comprehensive study note covers the probability of project completion, integrating probabilistic time estimates, critical path analysis, and the use of the normal distribution for calculating probabilities. It aims to equip engineers with the tools to manage project schedules more effectively and make informed decisions under uncertainty, aligning with the learning and course outcomes.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
