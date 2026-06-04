---
title: "Cost estimation using Basic COCOMO."
subject: "SOFTWARE ENGINEERING"
module: "Module 4: Software Project Management "
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162750fc9aa1fdbc8b092"
status: "completed"
scrapedAt: "2026-05-20T16:16:53.555Z"
---
# SOFTWARE ENGINEERING - Module 4: Software Project Management - Cost Estimation using Basic COCOMO

These notes cover the Basic COCOMO (Constructive Cost Model) for software cost estimation, a crucial topic in software project management.

## 1. Learning Outcomes

By the end of this topic, you should be able to:

*   Understand the fundamental principles of software cost estimation.
*   Explain the purpose and advantages of using COCOMO models.
*   Describe the different modes of COCOMO (Organic, Semidetached, Embedded) and their applicability.
*   Apply the Basic COCOMO formula to estimate effort and development time.
*   Interpret the results obtained from the Basic COCOMO model.
*   Recognize the limitations of the Basic COCOMO model.

## 2. Key Concepts and Definitions

*   **Software Cost Estimation:** The process of predicting the resources (effort, time, personnel, cost) required to develop a software system.
*   **COCOMO (Constructive Cost Model):** An algorithmic cost estimation model developed by Barry Boehm.  It's based on the assumption that cost is primarily a function of size (lines of code).
*   **Effort:** The amount of work (measured in person-months) required to develop the software.
*   **Development Time:** The duration (measured in months) required to develop the software.
*   **KLOC (Kilo Lines of Code):** A measure of software size, representing thousands of delivered source instructions (KDSI).  It excludes comments and blank lines.  Sometimes, Function Points (FP) can be used and converted to KLOC.
*   **Organic Mode:**  Refers to relatively small, simple software projects developed by small teams with a good understanding of the requirements.
*   **Semidetached Mode:** Refers to intermediate-sized projects with mixed teams and some uncertainty in the requirements.
*   **Embedded Mode:** Refers to complex projects, typically developed with stringent requirements and tight hardware, software, and operational constraints.
*   **Effort Multiplier:**  Factors that adjust the estimated effort based on project characteristics. Basic COCOMO doesn't use effort multipliers, unlike Intermediate and Detailed COCOMO.

## 3. The Basic COCOMO Model

The Basic COCOMO model is a static, single-variable model that estimates effort and development time as a function of the estimated size of the software project.  It's the simplest level of the COCOMO hierarchy.

**Formulas:**

*   **Effort (E) = a<sub>b</sub> * (KLOC)<sup>b<sub>b</sub></sup>  Person-Months**
*   **Development Time (D) = c<sub>b</sub> * (Effort)<sup>d<sub>b</sub></sup>  Months**

Where:

*   **E** is the effort in person-months.
*   **D** is the development time in months.
*   **KLOC** is the estimated size of the software in thousands of lines of code.
*   **a<sub>b</sub>, b<sub>b</sub>, c<sub>b</sub>, d<sub>b</sub>** are constants that depend on the development mode (Organic, Semidetached, or Embedded).

**COCOMO Mode Constants:**

| Mode        | a<sub>b</sub> | b<sub>b</sub> | c<sub>b</sub> | d<sub>b</sub> |
|-------------|-------------|-------------|-------------|-------------|
| Organic     | 2.4        | 1.05       | 2.5        | 0.38       |
| Semidetached| 3.0        | 1.12       | 2.5        | 0.35       |
| Embedded    | 3.6        | 1.20       | 2.5        | 0.32       |

**Explanation:**

1.  **Effort Equation:**  The effort equation calculates the total effort required for the project. It's a power function of the size (KLOC). The 'b<sub>b</sub>' exponent means that effort increases non-linearly with size; larger projects require disproportionately more effort.
2.  **Development Time Equation:**  The development time equation calculates the total time needed for the project. It's a power function of the effort.

## 4. Applying Basic COCOMO - Examples

**Example 1: Organic Mode**

*   **Project:** A small business application to manage customer orders.  Requirements are well-understood, and the team is experienced.
*   **Estimated Size:** 50 KLOC (50,000 lines of code)
*   **Mode:** Organic

    *   **Effort (E) = 2.4 * (50)<sup>1.05</sup> = 2.4 * 58.92 ≈ 141.41 Person-Months**
    *   **Development Time (D) = 2.5 * (141.41)<sup>0.38</sup> = 2.5 * 6.72 ≈ 16.8 Months**

    **Interpretation:** The project is estimated to require 141.41 person-months of effort and 16.8 months to complete.

**Example 2: Semidetached Mode**

*   **Project:** A database management system with moderate complexity.  The team has mixed experience levels, and some requirements are evolving.
*   **Estimated Size:** 30 KLOC
*   **Mode:** Semidetached

    *   **Effort (E) = 3.0 * (30)<sup>1.12</sup> = 3.0 * 43.29 ≈ 129.87 Person-Months**
    *   **Development Time (D) = 2.5 * (129.87)<sup>0.35</sup> = 2.5 * 6.01 ≈ 15.03 Months**

    **Interpretation:** The project is estimated to require approximately 129.87 person-months and 15.03 months to complete.

**Example 3: Embedded Mode**

*   **Project:** A flight control system with stringent real-time requirements and high reliability needs.
*   **Estimated Size:** 10 KLOC
*   **Mode:** Embedded

    *   **Effort (E) = 3.6 * (10)<sup>1.20</sup> = 3.6 * 15.85 ≈ 57.06 Person-Months**
    *   **Development Time (D) = 2.5 * (57.06)<sup>0.32</sup> = 2.5 * 4.40 ≈ 11 Months**

    **Interpretation:**  The project is estimated to require approximately 57.06 person-months and 11 months to complete. Notice how, despite the relatively small size, the Embedded mode results in significant effort due to the project's complexity and constraints.

## 5. Practice Questions/Exercises

**Question 1:**

A software project is estimated to be 20 KLOC and is considered to be an organic type project.  Use the Basic COCOMO model to estimate the effort and development time.

**Answer:**

*   Mode: Organic
*   KLOC = 20
*   Effort (E) = 2.4 * (20)<sup>1.05</sup> = 2.4 * 23.52 ≈ 56.45 Person-Months
*   Development Time (D) = 2.5 * (56.45)<sup>0.38</sup> = 2.5 * 4.74 ≈ 11.85 Months

**Question 2:**

A project is classified as "semidetached" and estimated to be 75 KLOC.  What is the estimated effort and development time using Basic COCOMO?

**Answer:**

*   Mode: Semidetached
*   KLOC = 75
*   Effort (E) = 3.0 * (75)<sup>1.12</sup> = 3.0 * 94.73 ≈ 284.19 Person-Months
*   Development Time (D) = 2.5 * (284.19)<sup>0.35</sup> = 2.5 * 7.34 ≈ 18.35 Months

**Question 3:**

What are the effort and schedule estimates for an embedded software product of size 40 KLOC?

**Answer:**

*   Mode: Embedded
*   KLOC = 40
*   Effort (E) = 3.6 * (40)<sup>1.20</sup> = 3.6 * 60.84 ≈ 219.03 Person-Months
*   Development Time (D) = 2.5 * (219.03)<sup>0.32</sup> = 2.5 * 8.20 ≈ 20.50 Months

**Question 4:**

Explain the difference in effort required for a 20 KLOC project when using the Organic, Semidetached and Embedded Modes.

**Answer:**

Organic: E = 2.4 * (20)^1.05 = ~56.45 PM
Semidetached: E = 3.0 * (20)^1.12 = ~72.51 PM
Embedded: E = 3.6 * (20)^1.2 = ~97.99 PM

The effort increases significantly from Organic to Embedded.  This demonstrates how the *type* of project impacts the estimate much more than just the size. Embedded projects inherently have more overhead and are more complex.

## 6. Limitations of Basic COCOMO

*   **Accuracy:** Basic COCOMO is a relatively simple model and its accuracy is limited.  It typically provides a rough estimate. It does not account for various cost drivers.
*   **Single Variable:** It only considers KLOC as the primary cost driver. Other factors like team experience, software reliability requirements, use of modern tools, and process maturity are ignored.
*   **Subjectivity in Mode Selection:** The classification of a project into Organic, Semidetached, or Embedded can be subjective and influence the result.
*   **Calibration:**  The constants (a<sub>b</sub>, b<sub>b</sub>, c<sub>b</sub>, d<sub>b</sub>) are based on historical data and may not be applicable to all organizations or projects.  Calibration may be needed to improve accuracy.
*   **KLOC Estimation:** The accuracy of the estimate relies heavily on the accuracy of the KLOC estimate, which can be difficult to determine early in the project.

## 7. Important Points to Remember

*   Basic COCOMO is a *high-level* estimation model.  It's useful for initial planning and feasibility studies.
*   The mode (Organic, Semidetached, Embedded) significantly affects the estimate. Carefully consider the project characteristics when choosing the mode.
*   While KLOC is the primary input, a realistic estimate of KLOC is crucial for obtaining a reasonable estimate. Consider using alternative sizing techniques like function points if KLOC is difficult to determine.
*   Basic COCOMO provides only estimates of effort and schedule.  It doesn't provide a detailed breakdown of costs.
*   For more accurate and comprehensive cost estimation, consider using the Intermediate or Detailed COCOMO models, which incorporate cost drivers and project attributes.
*   Always remember that cost estimation is an iterative process. As the project progresses and more information becomes available, the estimates should be refined.
