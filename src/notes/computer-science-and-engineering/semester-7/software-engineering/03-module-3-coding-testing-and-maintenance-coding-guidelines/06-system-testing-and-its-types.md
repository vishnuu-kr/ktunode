---
title: "System testing and its types"
subject: "SOFTWARE ENGINEERING"
module: "Module 3: Coding, Testing and Maintenance:   Coding guidelines  "
branch: "Computer Science and Engineering"
semester: 7
topicId: "6841627a0fc9aa1fdbc8c8ae"
status: "completed"
scrapedAt: "2026-05-20T17:11:27.319Z"
---
# Software Engineering: Module 3 - Coding, Testing and Maintenance: Coding Guidelines

## Topic: System Testing and Its Types

---

### Learning Outcomes:

*   Understand the purpose and scope of system testing.
*   Differentiate between various types of system testing.
*   Explain the objectives and common techniques for each type of system testing.
*   Recognize the importance of system testing in the software development lifecycle.
*   Identify the role of system testing in ensuring software quality.

---

### 1. Introduction to System Testing

#### What is System Testing?

*   **Definition:** System testing is a level of software testing that examines the complete and integrated software system. It evaluates the system's compliance with specified requirements, both functional and non-functional.
*   **Purpose:** To verify that the integrated system as a whole meets the business and user requirements. It's the first level where the entire system is tested end-to-end.
*   **Scope:** Encompasses testing of all components, interfaces, and interactions within the system, as well as its interaction with external systems and environments.
*   **When it's Performed:** Typically performed after integration testing and before acceptance testing.
*   **Who Performs It:** Usually conducted by an independent testing team, separate from the development team, to ensure objectivity.

#### Why is System Testing Important?

*   **Early Defect Detection:** Catches defects that might have been missed during unit and integration testing, especially those arising from component interactions.
*   **Requirement Validation:** Ensures that the system meets all specified functional and non-functional requirements.
*   **End-to-End Verification:** Tests the complete flow of data and operations across all modules.
*   **Risk Mitigation:** Reduces the risk of delivering a faulty product to the end-users.
*   **User Experience:** Contributes to a positive user experience by ensuring the system functions as expected.

---

### 2. Key Concepts in System Testing

*   **Black-Box Testing:** System testing is primarily a black-box testing activity. This means testers focus on the input and output of the system without knowledge of the internal code structure or implementation.
*   **Test Environment:** A dedicated environment is set up to simulate the production environment as closely as possible. This includes hardware, operating systems, databases, and other dependencies.
*   **Test Cases:** Test cases are designed based on system requirements, specifications, and user stories. They detail the steps to be performed, the input data, and the expected output.
*   **Defect Reporting:** Any deviation from the expected behavior is documented as a defect, including detailed steps to reproduce the issue, severity, and priority.

---

### 3. Types of System Testing

System testing is not a monolithic activity. It's often broken down into various specialized types, each focusing on a particular aspect of system quality.

#### 3.1. Functional Testing

*   **Definition:** Verifies that the software performs its intended functions as specified in the requirements. It checks what the system *does*.
*   **Objectives:**
    *   To validate that each function of the system works correctly.
    *   To ensure that inputs are processed correctly and outputs are generated as expected.
    *   To test data manipulation, business logic, and user interface elements.
*   **Techniques:**
    *   **Equivalence Partitioning:** Dividing input data into partitions from which test cases can be derived.
    *   **Boundary Value Analysis (BVA):** Testing at the boundaries of input ranges, as these are often error-prone areas.
    *   **Decision Table Testing:** Used for complex business logic with multiple conditions.
    *   **State Transition Testing:** Useful for systems that have different states and transitions between them.
    *   **Use Case Testing:** Designing test cases based on user interactions and scenarios.
*   **Example:** For an e-commerce website, functional testing would include scenarios like:
    *   Adding an item to the cart.
    *   Proceeding to checkout.
    *   Entering valid and invalid shipping addresses.
    *   Applying discount codes.
    *   Processing payments.

#### 3.2. Non-Functional Testing

*   **Definition:** Verifies aspects of the system that are not related to specific functions but are crucial for overall quality and user experience. It checks *how well* the system performs.
*   **Objectives:** To ensure the system meets performance, usability, reliability, security, and other quality attributes.
*   **Key Types of Non-Functional Testing:**

    *   **3.2.1. Performance Testing:**
        *   **Definition:** Evaluates the responsiveness, throughput, and stability of the system under various loads.
        *   **Objectives:** To identify performance bottlenecks, measure response times, and ensure the system can handle expected user traffic.
        *   **Types:**
            *   **Load Testing:** Simulating expected user load to check system behavior.
            *   **Stress Testing:** Pushing the system beyond its normal operating capacity to find its breaking point.
            *   **Soak Testing (Endurance Testing):** Testing the system for an extended period with a normal load to detect memory leaks or other long-term issues.
            *   **Spike Testing:** Testing the system's response to sudden, large increases in load.
        *   **Example:** For a banking application, performance testing would involve simulating thousands of users simultaneously trying to access their accounts to check response times.

    *   **3.2.2. Usability Testing:**
        *   **Definition:** Evaluates how easy and intuitive the system is for end-users to operate.
        *   **Objectives:** To ensure the system is user-friendly, efficient, and satisfying to use.
        *   **Techniques:** User surveys, observation of user interactions, heuristic evaluation.
        *   **Example:** Observing users attempting to complete common tasks (e.g., searching for a product, making a purchase) and noting any difficulties they encounter.

    *   **3.2.3. Security Testing:**
        *   **Definition:** Identifies vulnerabilities in the system that could be exploited by malicious actors.
        *   **Objectives:** To protect data, prevent unauthorized access, and ensure the system is resilient to attacks.
        *   **Techniques:** Penetration testing, vulnerability scanning, authorization testing, authentication testing, encryption testing.
        *   **Example:** Attempting to log in with invalid credentials, trying to access restricted areas without proper authorization, or checking for SQL injection vulnerabilities.

    *   **3.2.4. Reliability Testing:**
        *   **Definition:** Evaluates the system's ability to perform its required functions under stated conditions for a specified period.
        *   **Objectives:** To ensure the system operates consistently without failures.
        *   **Techniques:** Mean Time Between Failures (MTBF), Mean Time To Repair (MTTR), fault injection.
        *   **Example:** Running the system continuously for a week and monitoring for any crashes or unexpected behavior.

    *   **3.2.5. Compatibility Testing:**
        *   **Definition:** Checks if the system works correctly across different environments, such as different operating systems, browsers, hardware configurations, or network conditions.
        *   **Objectives:** To ensure the system is accessible and functional for a wide range of users and their setups.
        *   **Example:** Testing a web application on Chrome, Firefox, Safari, and Edge, and on Windows, macOS, and Linux.

    *   **3.2.6. Recovery Testing (Reusability Testing):**
        *   **Definition:** Verifies how well the system recovers from crashes, hardware failures, or other catastrophic events.
        *   **Objectives:** To ensure the system can restart, restore data, and continue operation with minimal disruption.
        *   **Example:** Simulating a power outage or network failure and checking if the system correctly restores its state and data upon restart.

    *   **3.2.7. Installation Testing:**
        *   **Definition:** Tests the process of installing, uninstalling, and upgrading the software.
        *   **Objectives:** To ensure that the software can be installed and uninstalled smoothly and correctly.
        *   **Example:** Testing the installation of an application from a CD/DVD, a downloaded installer, or a network share.

#### 3.3. Regression Testing

*   **Definition:** Re-executing previously executed test cases to ensure that changes (bug fixes, new features) have not introduced new defects or adversely affected existing functionality.
*   **Purpose:** To confirm that modifications haven't broken anything that was previously working.
*   **When it's Performed:** After any code change, bug fix, or new feature implementation.
*   **Techniques:**
    *   **Retest:** Testing the specific bug fix to confirm it's resolved.
    *   **Regression Test Selection:** Strategically choosing which test cases to re-run to maximize defect detection while minimizing effort.
*   **Example:** After fixing a bug in the payment processing module, regression testing would involve re-running tests for payment processing, but also tests for related modules like order confirmation and inventory management to ensure they haven't been negatively impacted.

#### 3.4. User Acceptance Testing (UAT)

*   **Definition:** While often considered a separate phase, UAT is closely related to system testing. It's performed by the end-users or clients to validate that the system meets their business requirements and is ready for deployment.
*   **Purpose:** To gain confidence that the system meets user needs and is acceptable for release.
*   **Who Performs It:** Actual end-users or representatives of the user community.
*   **Example:** Business analysts or end-users from a client company testing a new CRM system to ensure it supports their sales processes.

---

### 4. Best Practices for System Testing

*   **Clear Test Objectives:** Define specific goals for each system test.
*   **Realistic Test Environment:** Mimic the production environment as closely as possible.
*   **Comprehensive Test Data:** Use diverse and representative data to cover various scenarios.
*   **Traceability:** Link test cases back to requirements for thorough coverage.
*   **Automated Testing:** Utilize automation for regression testing and repetitive tasks to improve efficiency and accuracy.
*   **Effective Defect Management:** Establish a clear process for reporting, tracking, and resolving defects.
*   **Regular Reviews:** Conduct test plan and test case reviews with stakeholders.

---

### 5. Practice Questions and Exercises

**Question 1:**
Which type of testing focuses on how well a system performs under a normal user load, and aims to identify response times and throughput?

a) Stress Testing
b) Load Testing
c) Usability Testing
d) Security Testing

**Answer 1:**
b) Load Testing

**Explanation:** Load testing specifically simulates expected user load to evaluate performance metrics like response times and throughput. Stress testing pushes beyond normal capacity, usability is about user-friendliness, and security is about vulnerabilities.

---

**Question 2:**
Your team has just fixed a critical bug in the login module of your e-commerce application. What type of testing should be performed to ensure that the fix hasn't broken other parts of the application, like the product browsing or checkout features?

a) Functional Testing
b) Compatibility Testing
c) Regression Testing
d) Performance Testing

**Answer 2:**
c) Regression Testing

**Explanation:** Regression testing is specifically designed to ensure that changes (like bug fixes) haven't introduced new defects or negatively impacted existing functionality.

---

**Question 3:**
Describe the difference between functional testing and performance testing. Provide a brief example for each.

**Answer 3:**
*   **Functional Testing:** Verifies that the software performs its intended functions as per the requirements. It answers the question "What does the system do?".
    *   **Example:** Testing if a "Forgot Password" link correctly sends a reset email to the user's registered email address.
*   **Performance Testing:** Evaluates the responsiveness, stability, and speed of the system under various workloads. It answers the question "How well does the system do it?".
    *   **Example:** Measuring how long it takes for a search results page to load when 1000 users are simultaneously searching for products.

---

**Question 4:**
You are testing a new banking application. What are some specific aspects you would test under **Security Testing**? (List at least two).

**Answer 4:**
*   **Authentication:** Ensuring only authorized users can log in (e.g., strong password policies, preventing brute-force attacks).
*   **Authorization:** Verifying that users can only access the data and features they are permitted to (e.g., a regular user cannot access administrator functions).
*   **Data Protection:** Checking if sensitive data like account numbers and personal information is encrypted both in transit and at rest.
*   **Session Management:** Ensuring secure handling of user sessions to prevent hijacking.

---

### 6. Important Points to Remember

*   System testing is a **black-box** testing level.
*   It validates the **entire integrated system**.
*   **Functional Testing** verifies *what* the system does.
*   **Non-Functional Testing** verifies *how well* the system does it (performance, security, usability, etc.).
*   **Regression Testing** is crucial after any code changes to prevent the reintroduction of old bugs or the creation of new ones.
*   A well-defined **test environment** that closely resembles production is critical.
*   System testing plays a vital role in ensuring the **overall quality and reliability** of the software before it reaches the end-users.
