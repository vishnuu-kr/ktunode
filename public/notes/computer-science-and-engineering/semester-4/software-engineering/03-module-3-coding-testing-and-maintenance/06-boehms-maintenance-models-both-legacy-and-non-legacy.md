---
title: "Boehm’s maintenance models (both legacy and non-legacy)"
subject: "SOFTWARE ENGINEERING"
module: "Module 3: Coding, Testing and Maintenance:"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162750fc9aa1fdbc8b08f"
status: "completed"
scrapedAt: "2026-05-20T16:16:52.142Z"
---
## Software Engineering: Module 3 - Coding, Testing, and Maintenance

### Topic: Boehm's Maintenance Models (Legacy & Non-Legacy)

**Introduction:**

Software maintenance is an inevitable and crucial part of the software development lifecycle.  Barry Boehm, a prominent software engineering researcher, developed models to understand the economics of software maintenance, particularly focusing on predicting the cost and effort involved. This topic covers Boehm's maintenance models, distinguishing between legacy (old/existing) and non-legacy (relatively new/modifiable) systems.

**Learning Outcomes:**

*   Understand the importance of software maintenance.
*   Define and differentiate between corrective, adaptive, perfective, and preventive maintenance.
*   Explain Boehm's maintenance models, including cost drivers.
*   Distinguish between Boehm's legacy and non-legacy system maintenance models.
*   Apply Boehm's models to estimate maintenance effort.
*   Identify the factors influencing maintenance effort.

**1. Importance of Software Maintenance:**

*   **Definition:** Software maintenance refers to the modification of a software product after delivery to correct faults, to improve performance or other attributes, or to adapt the product to a changed environment.
*   **Why is it Important?**
    *   **Extends Software Lifespan:** Allows software to remain useful and valuable for a longer period.
    *   **Adapts to Changing Needs:**  Ensures the software continues to meet evolving user requirements and technological advancements.
    *   **Fixes Defects:** Corrects errors and vulnerabilities that are discovered after deployment, ensuring stability and security.
    *   **Improves Performance:** Optimizes the software for better speed, efficiency, and resource utilization.
    *   **Enhances User Experience:** Adds new features and functionality to improve user satisfaction.
    *   **Reduces Risks:** Mitigates security vulnerabilities, performance bottlenecks, and other potential problems.

**2. Types of Software Maintenance:**

*   **Corrective Maintenance:**
    *   **Definition:** Fixing errors, defects, or faults found in the software after deployment. Also known as bug fixing.
    *   **Goal:** Restore the software to its original, intended state.
    *   **Trigger:** Discovery of a bug or malfunction.
    *   **Example:**  Fixing a bug that causes the application to crash when a specific button is clicked.
*   **Adaptive Maintenance:**
    *   **Definition:** Modifying the software to adapt to changes in the environment (e.g., new operating system, database, hardware, regulatory changes).
    *   **Goal:**  Ensure the software remains compatible and functional within the new environment.
    *   **Trigger:**  Changes in the external environment that impact the software's operation.
    *   **Example:**  Adapting the application to run on a newer version of Java or to comply with new data privacy regulations.
*   **Perfective Maintenance:**
    *   **Definition:** Improving the performance, maintainability, or other non-functional attributes of the software. This also includes adding new features that were not part of the original specification.
    *   **Goal:** Enhance the software's capabilities and improve its overall quality.
    *   **Trigger:** User requests for new features, performance bottlenecks, or maintainability issues.
    *   **Example:** Adding a new reporting feature, improving the application's response time, or refactoring the code for better readability.
*   **Preventive Maintenance:**
    *   **Definition:** Making changes to the software to prevent future problems or improve its long-term maintainability.
    *   **Goal:** Reduce the risk of future failures and make the software easier to maintain in the long run.
    *   **Trigger:**  Proactive assessment of potential risks and areas for improvement.
    *   **Example:**  Optimizing database queries to prevent performance degradation, documenting code to improve maintainability, or performing security audits to identify vulnerabilities.

**3. Boehm's Maintenance Models:**

Boehm proposed different cost models for software maintenance based on whether the software is considered a legacy system or not.  The key idea is that the cost of maintenance is related to the amount of the existing code that is understood and modified.

*   **Key Concepts:**
    *   **Annual Change Traffic (ACT):** The percentage of the software code that undergoes change during a year.  This includes adding, deleting, and modifying code.
    *   **Cost Drivers:** Factors that influence the cost and effort required for software maintenance.
    *   **COCOMO (Constructive Cost Model):** A series of models used to estimate the cost, effort, and schedule of software projects.  Boehm extended COCOMO to address maintenance.

**4. Boehm's Legacy System Maintenance Model:**

*   **Applicability:** Used for older software systems that are often poorly documented, complex, and difficult to modify. Characterized by high complexity and limited understanding.
*   **Formula:**  Effort = ACT * Development Effort

    *   **Effort:**  The estimated effort (e.g., person-months) required for maintenance activities.
    *   **ACT:**  The Annual Change Traffic (percentage of code changed annually).
    *   **Development Effort:**  The effort required to develop the original software.  This is a critical input as it represents the inherent complexity of the system.

*   **Cost Drivers:** The "Development Effort" implicitly captures the complexity of the system, the quality of the original code, and the documentation available.  Higher initial development effort implies a more complex system, leading to higher maintenance costs.  Other implicit cost drivers include:
    *   **Application Complexity:**  More complex applications generally require more maintenance effort.
    *   **Documentation Quality:** Poor documentation increases the effort needed to understand and modify the code.
    *   **Staff Experience:** Lack of experienced staff familiar with the legacy system increases effort.
    *   **Code Quality:** Poorly written code is harder to maintain.
*   **Limitations:**
    *   **Simplistic:** It's a relatively simple model and might not capture all the nuances of complex maintenance projects.
    *   **Dependency on Development Effort:** Accurate estimation of the original development effort is crucial, which might be difficult to obtain for very old systems.
    *   **Lack of Specific Cost Drivers:** It doesn't explicitly account for specific cost drivers like staff skills or the quality of the maintenance processes.

**5. Boehm's Non-Legacy System Maintenance Model:**

*   **Applicability:** Used for newer software systems that are well-documented, modular, and easier to understand and modify.  These systems are generally designed with maintainability in mind.
*   **Formula:** Effort = ACT * A * Size<sup>B</sup>

    *   **Effort:**  The estimated effort (e.g., person-months) required for maintenance activities.
    *   **ACT:**  The Annual Change Traffic (percentage of code changed annually).
    *   **Size:** The size of the software (e.g., in KLOC - thousands of lines of code).
    *   **A & B:** Constants that are determined based on the software development mode (organic, semi-detached, embedded).  These constants reflect the characteristics of the project and the development environment.

        *   **Organic:**  Small, simple projects with experienced developers and relaxed requirements. (Typical: A = 2.4, B = 1.05)
        *   **Semi-Detached:** Medium-sized projects with a mix of experienced and inexperienced developers and some well-defined requirements. (Typical: A = 3.0, B = 1.12)
        *   **Embedded:** Complex projects with strict requirements and a need for innovation. (Typical: A = 3.6, B = 1.20)

*   **Cost Drivers:**  This model incorporates the size of the software and the development mode as proxies for complexity and maintainability.  ACT still represents the amount of change, and the constants A and B adjust the estimate based on the project's characteristics.  Additional cost drivers not directly in the formula still impact the model by influencing the constants and size estimation:
    *   **Product Attributes:**  Required software reliability, database size, complexity of the product.
    *   **Computer Attributes:** Execution time constraint, main storage constraint, virtual machine volatility, computer turnaround time.
    *   **Personnel Attributes:** Analyst capability, application experience, programmer capability, virtual machine experience, programming language experience.
    *   **Project Attributes:**  Use of software tools, application of software engineering methods, required development schedule.
*   **Advantages:**
    *   **More Granular:**  Provides a more detailed estimation by considering the size of the software and the development mode.
    *   **Accounts for Development Mode:**  Recognizes that different types of projects have different maintainability characteristics.
*   **Limitations:**
    *   **Requires Size Estimation:**  Accurate estimation of software size is crucial, which can be challenging, especially in the early stages of maintenance planning.
    *   **Mode Selection:**  Choosing the appropriate development mode can be subjective.
    *   **Still Simplified:**  It's still a simplified model and may not capture all the factors affecting maintenance effort.

**6. Applying Boehm's Models to Estimate Maintenance Effort:**

**Example 1 (Legacy System):**

*   A legacy system required 20 person-months to develop originally.
*   The Annual Change Traffic (ACT) is estimated to be 10%.
*   Using Boehm's Legacy System Model:

    *   Effort = ACT * Development Effort
    *   Effort = 0.10 * 20 person-months
    *   Effort = 2 person-months
*   Therefore, the estimated maintenance effort for the year is 2 person-months.

**Example 2 (Non-Legacy System):**

*   A non-legacy system has a size of 50 KLOC.
*   The Annual Change Traffic (ACT) is estimated to be 5%.
*   The project is considered Semi-Detached (A = 3.0, B = 1.12).
*   Using Boehm's Non-Legacy System Model:

    *   Effort = ACT * A * Size<sup>B</sup>
    *   Effort = 0.05 * 3.0 * (50)<sup>1.12</sup>
    *   Effort = 0.05 * 3.0 * 69.35
    *   Effort = 10.40 person-months
*   Therefore, the estimated maintenance effort for the year is approximately 10.4 person-months.

**7. Factors Influencing Maintenance Effort:**

*   **Software Size and Complexity:**  Larger and more complex software systems require more maintenance effort.
*   **Code Quality:**  Poorly written and undocumented code increases maintenance effort.
*   **Documentation Quality:**  Good documentation reduces the effort needed to understand and modify the code.
*   **Staff Experience:**  Experienced staff familiar with the system can maintain it more efficiently.
*   **Maintenance Process:**  Well-defined maintenance processes and tools can improve efficiency.
*   **Application Domain:**  Some application domains (e.g., safety-critical systems) require more rigorous and costly maintenance processes.
*   **Organizational Factors:**  Organizational culture, communication, and collaboration can influence maintenance effort.
*   **Technology Changes:**  Rapid technology changes can increase the need for adaptive maintenance.

**Important Points to Remember:**

*   Software maintenance is a significant cost in the software lifecycle.
*   Boehm's models provide a framework for estimating maintenance effort.
*   The choice of model (legacy or non-legacy) depends on the characteristics of the software system.
*   Accurate estimation of input parameters (ACT, Development Effort, Size, Development Mode) is crucial for obtaining reliable results.
*   These models are simplified representations of reality and should be used with caution, considering other relevant factors.
*   The models serve as a useful starting point for planning and budgeting for software maintenance activities.

**Practice Questions/Exercises:**

1.  **Question:** Define the four types of software maintenance and give an example of each.

    **Answer:**
    *   Corrective: Fixing a bug that prevents users from logging in.
    *   Adaptive: Modifying the software to run on a new operating system version.
    *   Perfective: Adding a new report generation feature.
    *   Preventive: Refactoring code to improve maintainability.

2.  **Question:** Explain the difference between Boehm's legacy and non-legacy system maintenance models.

    **Answer:** Boehm's legacy system model is simpler and uses the original development effort as a proxy for complexity.  Boehm's non-legacy system model is more detailed and considers the size of the software and the development mode.

3.  **Question:** A legacy system took 15 person-months to develop. If the annual change traffic (ACT) is 5%, what is the estimated maintenance effort using Boehm's legacy model?

    **Answer:**  Effort = ACT * Development Effort = 0.05 * 15 person-months = 0.75 person-months.

4.  **Question:** A non-legacy system has a size of 30 KLOC and is considered an organic project (A = 2.4, B = 1.05).  If the ACT is 8%, what is the estimated maintenance effort using Boehm's non-legacy model?

    **Answer:** Effort = ACT * A * Size<sup>B</sup> = 0.08 * 2.4 * (30)<sup>1.05</sup> = 0.08 * 2.4 * 34.11 = 6.55 person-months (approximately).

5.  **Question:** What are some factors that can influence the effort required for software maintenance?

    **Answer:** Software size and complexity, code quality, documentation quality, staff experience, maintenance process, application domain, organizational factors, and technology changes.
