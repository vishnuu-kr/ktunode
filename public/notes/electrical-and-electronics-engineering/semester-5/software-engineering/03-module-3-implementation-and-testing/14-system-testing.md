---
title: "System testing"
subject: "SOFTWARE ENGINEERING"
module: "Module 3: Implementation and Testing"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f3635e"
status: "completed"
scrapedAt: "2026-05-23T16:24:36.630Z"
---
# Software Engineering: Module 3 - Implementation and Testing: System Testing

---

## 1. Introduction to System Testing

System testing is a phase of software testing that evaluates the **completeness of a system or product**. It verifies that the entire system functions as expected, adhering to both specified and implied requirements. Unlike lower levels of testing (unit, integration), system testing treats the software as a black box, focusing on its interactions with the environment and its overall performance.

**Key Concepts:**

*   **Black-Box Testing:** This approach tests the functionality of the software without looking at the internal code structure. Test cases are derived from requirements and specifications.
*   **System Integration:** Refers to the process of combining individual software components into a larger whole and then testing that whole. System testing assumes integration has already occurred.
*   **End-to-End Testing:** System testing is often synonymous with end-to-end testing, simulating real-world user scenarios from start to finish.
*   **Quality Assurance (QA):** System testing is a crucial part of QA, ensuring the product meets quality standards before release.

**Textbook References:**

*   **Sommerville (2015):** Discusses system testing as the phase where the entire integrated system is tested. It highlights testing for emergent properties like performance and usability.
*   **Pressman (2014):** Defines system testing as a level of testing that is conducted on the system as a whole. It emphasizes the verification of functional and non-functional requirements.

**Alignment with Course Outcomes:**

*   **CO4:** Interprets software testing methods, including system testing.

---

## 2. Objectives of System Testing

The primary objectives of system testing are to:

*   **Validate Functionality:** Ensure all system requirements, as defined in the SRS, are met.
*   **Verify Non-Functional Requirements:** Test aspects like performance, reliability, security, usability, and maintainability.
*   **Identify Defects:** Uncover errors that were not found during unit or integration testing.
*   **Assess System Reliability and Performance:** Evaluate how well the system performs under various conditions and loads.
*   **Confirm User Experience:** Ensure the system is intuitive and easy to use, meeting user expectations.
*   **Prepare for Acceptance Testing:** Provide confidence that the system is ready for user acceptance testing (UAT).

**Important Point to Remember:** System testing focuses on the "What" (does it do what it's supposed to?) rather than the "How" (how is it implemented?).

---

## 3. Types of System Testing

System testing encompasses a variety of specific testing types, each focusing on different aspects of the system:

### 3.1 Functional Testing

Verifies that the system performs its intended functions according to the specification.

*   **Key Concepts:**
    *   **Test Cases:** Designed based on functional requirements.
    *   **Equivalence Partitioning:** Dividing input data into partitions from which test cases can be derived.
    *   **Boundary Value Analysis (BVA):** Testing at the boundaries of input ranges.
    *   **Error Guessing:** Using experience to anticipate likely errors.
*   **Example:** For an e-commerce system, functional tests would include verifying that users can add items to the cart, proceed to checkout, make payments, and receive order confirmations.

### 3.2 Performance Testing

Evaluates the responsiveness, stability, and resource usage of the system under various workloads.

*   **Key Concepts:**
    *   **Load Testing:** Testing the system's behavior under expected peak load conditions.
    *   **Stress Testing:** Testing the system beyond its normal operational capacity to determine its breaking point.
    *   **Soak Testing (Endurance Testing):** Testing the system under a sustained load over an extended period to detect issues like memory leaks.
    *   **Spike Testing:** Testing the system's reaction to sudden, large increases in load.
    *   **Volume Testing:** Testing the system with large amounts of data.
*   **Metrics:** Response time, throughput, resource utilization (CPU, memory), error rate.
*   **Example:** An online banking system might be tested to see how many concurrent users it can support without significant degradation in transaction processing speed.

### 3.3 Security Testing

Identifies vulnerabilities in the system that could be exploited by malicious actors.

*   **Key Concepts:**
    *   **Authentication:** Testing user login mechanisms.
    *   **Authorization:** Verifying that users only access resources they are permitted to.
    *   **Confidentiality:** Ensuring data is protected from unauthorized access.
    *   **Integrity:** Ensuring data is not tampered with.
    *   **Vulnerability Scanning:** Using tools to identify known security weaknesses.
    *   **Penetration Testing:** Simulating attacks on the system to find exploitable vulnerabilities.
*   **Example:** Testing for SQL injection vulnerabilities in a web application's input fields.

### 3.4 Usability Testing

Evaluates how easy and intuitive the system is for end-users to operate.

*   **Key Concepts:**
    *   **Learnability:** How easy is it for users to learn to use the system?
    *   **Efficiency:** How quickly can experienced users perform tasks?
    *   **Memorability:** How easy is it to remember how to use the system after a period of not using it?
    *   **Error Prevention:** How well does the system prevent users from making errors?
    *   **Satisfaction:** How pleasant is it to use the system?
*   **Methods:** User observation, feedback questionnaires, task analysis.
*   **Example:** Observing users trying to navigate a website and complete a purchase to identify confusing menus or unclear instructions.

### 3.5 Reliability Testing

Ensures the system functions correctly and consistently over a specified period.

*   **Key Concepts:**
    *   **Mean Time Between Failures (MTBF):** Average time the system operates without failure.
    *   **Mean Time To Repair (MTTR):** Average time it takes to fix a failure.
    *   **Availability:** The percentage of time the system is operational.
*   **Example:** Running a critical system for weeks to ensure it doesn't crash or produce incorrect results.

### 3.6 Recoverability Testing

Assesses the system's ability to recover from failures (e.g., hardware failures, software crashes, network outages).

*   **Key Concepts:**
    *   **Failover:** The automatic switching to a redundant system upon the failure of the primary system.
    *   **Backup and Restore:** Testing the process of backing up data and restoring it.
    *   **Graceful Degradation:** The system's ability to continue operating with reduced functionality during failure conditions.
*   **Example:** Simulating a server crash to ensure the backup server takes over seamlessly and data is not lost.

### 3.7 Installation Testing

Verifies that the system can be installed and configured correctly on different environments.

*   **Key Concepts:**
    *   **Installation Wizard:** Testing the user interface and flow of the installation process.
    *   **Compatibility:** Ensuring installation works on different operating systems, hardware, and software configurations.
    *   **Uninstallation:** Verifying that the system can be removed completely without leaving residual files or registry entries.
*   **Example:** Testing the installation of a desktop application on Windows 10, Windows 11, and macOS.

### 3.8 Compatibility Testing

Ensures the software works correctly in different environments, with different hardware, operating systems, and other software.

*   **Key Concepts:**
    *   **Browser Compatibility:** Testing web applications on different browsers (Chrome, Firefox, Safari, Edge).
    *   **OS Compatibility:** Testing on various operating systems (Windows, macOS, Linux).
    *   **Hardware Compatibility:** Testing on different hardware configurations.
*   **Example:** Testing a web application to ensure it displays and functions correctly across different versions of Chrome, Firefox, and Safari.

**Textbook References:**

*   **Pressman (2014):** Provides detailed discussions on various types of system testing, including performance, security, and usability testing.
*   **Sommerville (2015):** Covers the importance of non-functional testing, which is heavily represented in system testing.

**Alignment with Course Outcomes:**

*   **CO4:** Interprets software testing methods.

---

## 4. System Testing Process

The system testing process typically follows these steps:

1.  **Test Planning:**
    *   Define objectives and scope of testing.
    *   Identify test items (system components, interfaces).
    *   Define test environment requirements.
    *   Develop test strategy (types of testing, approaches).
    *   Define entry and exit criteria for testing.
    *   Plan for test resources (personnel, hardware, software).
    *   Create a schedule for testing activities.

2.  **Test Case Design:**
    *   Develop detailed test cases based on system requirements (functional and non-functional).
    *   Include pre-conditions, test steps, input data, expected results, and post-conditions.
    *   Prioritize test cases.

3.  **Test Environment Setup:**
    *   Configure hardware and software required for testing.
    *   Install the system under test.
    *   Prepare test data.

4.  **Test Execution:**
    *   Execute the designed test cases.
    *   Record actual results.
    *   Compare actual results with expected results.

5.  **Defect Reporting and Tracking:**
    *   Log any discrepancies found as defects.
    *   Provide detailed information about the defect (steps to reproduce, severity, priority).
    *   Track defects through their lifecycle (open, in progress, fixed, closed).

6.  **Test Reporting:**
    *   Generate summary reports on test progress, defect status, and overall system quality.
    *   Provide metrics on test coverage and defect density.

7.  **Test Closure:**
    *   Review test results and activities.
    *   Archive test artifacts.
    *   Document lessons learned.

**Reference Books:**

*   **Royce (1998):** While focused on project management, principles of planning, execution, and tracking are fundamental to any testing process, including system testing.

**Alignment with Course Outcomes:**

*   **CO6:** Makes use of software project management concepts while planning, estimation, scheduling, tracking and change management of a project. This directly applies to planning and executing system testing.

---

## 5. Entry and Exit Criteria

Well-defined entry and exit criteria are crucial for effective system testing.

### 5.1 Entry Criteria

These are the conditions that must be met before system testing can begin:

*   **Successful Integration Testing:** All components are integrated and integration tests have passed.
*   **Stable Build:** A deployable build of the system is available.
*   **Test Environment Ready:** The test environment is set up and verified.
*   **Test Plan Approved:** The system test plan is reviewed and approved.
*   **Test Cases Ready:** System test cases are designed and reviewed.
*   **Required Documentation Available:** SRS, design documents, and user manuals are available.

### 5.2 Exit Criteria

These are the conditions that must be met before system testing can be considered complete:

*   **All Test Cases Executed:** All planned system test cases have been executed.
*   **Defect Resolution:** All critical and high-priority defects are fixed and re-tested.
*   **Acceptable Defect Count:** The number of open defects meets the defined threshold (e.g., no critical or high-severity defects remaining).
*   **Test Coverage Met:** Required levels of test coverage are achieved.
*   **Performance Metrics Achieved:** The system meets defined performance benchmarks.
*   **Test Reports Completed:** Final test reports are generated and reviewed.
*   **Approval for Next Phase:** Stakeholder approval for proceeding to the next phase (e.g., UAT or deployment).

**Important Point to Remember:** Exit criteria ensure that the system has met a certain level of quality and readiness before moving to the next stage, preventing premature release of a faulty product.

---

## 6. Challenges in System Testing

System testing can present several challenges:

*   **Complexity:** Large, complex systems can be difficult to test comprehensively.
*   **Environment Dependency:** Testing often requires a specific hardware/software environment that might be hard to replicate.
*   **Data Management:** Generating and managing realistic test data can be time-consuming.
*   **Resource Constraints:** Lack of skilled testers, time, or budget can hinder thorough testing.
*   **Dynamic Requirements:** Changes in requirements during the testing phase can disrupt the process.
*   **Defect Isolation:** Identifying the root cause of defects in a large, integrated system can be challenging.
*   **Test Automation:** While beneficial, setting up and maintaining automated test suites for system testing can be complex.

**Reference Books:**

*   **Poppendieck (2006):** Implementing Lean principles can help address some challenges by emphasizing early feedback and continuous improvement, potentially reducing the complexity and time spent on late-stage testing.

---

## 7. System Testing in Agile and Iterative Development

In Agile methodologies, system testing is not a single, distinct phase at the end. Instead, it's integrated throughout the development lifecycle.

*   **Continuous Integration:** System testing activities are performed frequently as new features are developed and integrated.
*   **Short Iterations:** Testing is done for each increment or sprint, focusing on the functionality delivered in that iteration.
*   **Early Feedback:** Testers collaborate with developers from the beginning to ensure quality is built-in.
*   **Regression Testing:** Automated regression tests are vital to ensure that new changes don't break existing functionality.
*   **Focus on User Stories:** Test cases are often derived from user stories and acceptance criteria.

**Reference Books:**

*   **Anderson (2003, 2010):** Agile management principles and Kanban practices emphasize delivering working software frequently and continuously. System testing, in its broader sense of verifying integrated functionality, becomes an ongoing activity rather than a separate phase.
*   **Sommerville (2020):** Modern software engineering approaches, as discussed in this book, advocate for continuous testing and quality assurance integrated throughout the development lifecycle.

**Alignment with Course Outcomes:**

*   **CO1:** Interpret software process models and core activities, including handling changes with techniques like prototyping and incremental delivery. System testing in agile is part of incremental delivery.
*   **CO2:** Describe agile methods, including the Agile Manifesto and agile project management practices. System testing is a core activity within agile development.

---

## 8. Practice Questions and Answers

**Question 1:** Differentiate between Integration Testing and System Testing.
**Answer:**
*   **Integration Testing:** Focuses on verifying the interfaces and interactions between integrated software modules or components. It tests how well units work together.
*   **System Testing:** Focuses on verifying the complete, integrated system against specified requirements (both functional and non-functional). It treats the system as a black box, testing its overall behavior and performance.

**Question 2:** What are the key objectives of Performance Testing?
**Answer:** The key objectives of performance testing are to:
    *   Determine system responsiveness under various workloads.
    *   Assess system stability and reliability.
    *   Measure resource utilization (CPU, memory, disk I/O, network bandwidth).
    *   Identify performance bottlenecks.
    *   Validate that the system meets performance requirements and SLAs.

**Question 3:** Explain the importance of Exit Criteria in System Testing.
**Answer:** Exit criteria define the conditions that must be met for system testing to be considered complete. They ensure that the system has reached a desired level of quality, defects have been managed appropriately, and it's ready for the next phase (e.g., UAT or deployment). Without clear exit criteria, testing might be prematurely stopped or prolonged unnecessarily, impacting the project timeline and product quality.

**Question 4:** In the context of Agile development, how does System Testing differ from traditional waterfall models?
**Answer:** In Agile, system testing is not a distinct final phase. It's an iterative and continuous activity performed throughout the development sprints. Test cases are often derived from user stories, and automated regression testing plays a crucial role to ensure quality as features are added incrementally. This contrasts with waterfall models where system testing is a large, sequential phase performed after all development and integration is complete.

**Question 5:** List three types of Non-Functional Testing commonly performed during System Testing.
**Answer:** Three types of non-functional testing commonly performed during System Testing are:
    1.  Performance Testing (e.g., load, stress testing)
    2.  Security Testing (e.g., vulnerability scanning, penetration testing)
    3.  Usability Testing

---

## 9. Important Points to Remember

*   System testing is a critical phase for validating the complete system against requirements.
*   It's primarily a black-box testing activity, focusing on the system's external behavior.
*   A wide range of testing types, including functional and non-functional, fall under system testing.
*   Well-defined entry and exit criteria are essential for managing the system testing process effectively.
*   In Agile, system testing is integrated throughout the lifecycle, not a final phase.
*   Test automation is highly recommended for system testing, especially for regression testing, to ensure efficiency and repeatability.
*   System testing builds confidence in the product before it is handed over to end-users for acceptance.

---

This concludes the study notes for System Testing. Ensure you review the relevant chapters in Sommerville and Pressman for a deeper understanding of the concepts and examples.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
