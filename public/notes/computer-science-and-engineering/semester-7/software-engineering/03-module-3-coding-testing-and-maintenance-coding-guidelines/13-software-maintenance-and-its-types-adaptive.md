---
title: "Software maintenance and its types-  Adaptive"
subject: "SOFTWARE ENGINEERING"
module: "Module 3: Coding, Testing and Maintenance:   Coding guidelines  "
branch: "Computer Science and Engineering"
semester: 7
topicId: "6841627a0fc9aa1fdbc8c8b5"
status: "completed"
scrapedAt: "2026-05-20T17:11:32.999Z"
---
# Software Engineering: Module 3 - Coding, Testing, and Maintenance

## Topic: Software Maintenance and its Types - Adaptive

---

### 1. Introduction to Software Maintenance

Software maintenance is the process of modifying a software product after its delivery to correct faults, improve performance or other attributes, or adapt the product to a modified environment. It is a crucial and often underestimated phase of the software lifecycle, consuming a significant portion of the total cost and effort.

**Key Concepts:**

*   **Post-delivery Modification:** Maintenance occurs *after* the software has been deployed and is in use.
*   **Continuous Process:** It's not a one-time event but an ongoing effort throughout the software's lifespan.
*   **Costly:** Often consumes 60-80% of the total software development cost.
*   **Essential for Longevity:** Ensures the software remains functional, useful, and relevant.

---

### 2. Types of Software Maintenance

Software maintenance is broadly categorized into four types:

1.  **Corrective Maintenance:** Fixing defects or bugs found after the software has been released.
2.  **Adaptive Maintenance:** Modifying the software to accommodate changes in its environment.
3.  **Perfective Maintenance:** Improving the software's performance, maintainability, or adding new features.
4.  **Preventive Maintenance:** Making changes to prevent future problems and improve reliability.

---

### 3. Adaptive Maintenance: Deep Dive

**Definition:**

**Adaptive maintenance** involves modifying a software system to keep it usable in a changed or changing environment. This environment can include hardware, operating systems, databases, programming languages, business rules, or even new regulations and laws. The core functionality of the software might remain the same, but its implementation or interaction with the environment needs to be adjusted.

**Why is Adaptive Maintenance Necessary?**

The world in which software operates is constantly evolving. Failure to adapt can render even perfectly functioning software obsolete or unusable.

**Key Triggers for Adaptive Maintenance:**

*   **Hardware Upgrades:** New hardware might require software modifications to take advantage of its capabilities or simply to be compatible.
*   **Operating System Changes:** Upgrading to a new version of an OS (e.g., Windows 10 to Windows 11, macOS Monterey to Ventura) often necessitates software updates.
*   **Database Updates:** Changes in database versions, schemas, or even switching to a new database system.
*   **Programming Language or Compiler Updates:** New versions of programming languages or compilers might introduce new features, deprecate old ones, or require code refactoring for compatibility.
*   **External System Dependencies:** If the software interacts with other systems (e.g., APIs, payment gateways), changes in those external systems will require adaptive maintenance.
*   **New Standards and Regulations:** Compliance with new industry standards, security protocols, or legal requirements.
*   **User Interface (UI) or User Experience (UX) Enhancements (if driven by environmental changes):** While often part of Perfective, if a UI change is mandated by platform guidelines or new device capabilities, it can lean towards adaptive.

**Characteristics of Adaptive Maintenance:**

*   **Focus on Environment:** The primary goal is to ensure compatibility and functionality within the new environment.
*   **Minimal Functional Change:** Ideally, adaptive maintenance does not add new features or fix existing bugs, but rather adapts the existing functionality. However, sometimes minor functional adjustments are unavoidable.
*   **Proactive vs. Reactive:** Often triggered by planned upgrades or changes, making it more proactive than corrective maintenance.

**Examples of Adaptive Maintenance:**

*   **Example 1: Operating System Upgrade**
    *   **Scenario:** A desktop application was developed for Windows 7. The company decides to upgrade all workstations to Windows 10.
    *   **Adaptive Maintenance Task:** The development team needs to test the application on Windows 10. They might discover that certain API calls are deprecated or behave differently, requiring code modifications to ensure the application runs correctly on the new OS.
*   **Example 2: Database Migration**
    *   **Scenario:** A web application uses MySQL 5.7. The organization decides to migrate to PostgreSQL 14 for better performance and features.
    *   **Adaptive Maintenance Task:** The application's database access layer (e.g., SQL queries, ORM configurations) needs to be updated to be compatible with PostgreSQL syntax and features. Data migration strategies also need to be considered.
*   **Example 3: API Integration Change**
    *   **Scenario:** An e-commerce platform uses a third-party payment gateway. The payment gateway provider announces they are deprecating their old API and releasing a new version.
    *   **Adaptive Maintenance Task:** The platform's integration code for the payment gateway must be rewritten to use the new API endpoints, request/response formats, and authentication methods.
*   **Example 4: Regulatory Compliance**
    *   **Scenario:** A financial software needs to comply with a new data privacy law (e.g., GDPR, CCPA).
    *   **Adaptive Maintenance Task:** The software might need to be modified to handle data consent, data anonymization, or provide mechanisms for users to request data deletion, as required by the new regulation.

**Challenges in Adaptive Maintenance:**

*   **Understanding the Impact:** Changes in one part of the environment can have unforeseen ripple effects on the software.
*   **Testing:** Thorough testing is required to ensure the software still functions correctly after adaptation. Regression testing is critical.
*   **Documentation:** Outdated documentation can make it difficult to understand how the software interacts with its environment.
*   **Resource Allocation:** Requires dedicated developer time and potentially new hardware or software licenses for testing.
*   **Risk of Introducing New Bugs:** While not fixing existing bugs, the modification process itself can inadvertently introduce new ones.

---

### 4. Learning Outcomes Covered

This document covers the following learning outcomes related to Adaptive Maintenance:

*   **Understanding the role of software maintenance in the software lifecycle.** (Covered in Introduction)
*   **Identifying and differentiating between the various types of software maintenance.** (Covered in Section 2 & 3)
*   **Defining and explaining adaptive maintenance.** (Covered in Section 3)
*   **Identifying common triggers and scenarios for adaptive maintenance.** (Covered in Section 3)
*   **Providing examples of adaptive maintenance tasks.** (Covered in Section 3)
*   **Understanding the challenges associated with adaptive maintenance.** (Covered in Section 3)

---

### 5. Practice Questions & Exercises

**Question 1:**

A company uses a custom-built inventory management system. The operating system on which this system runs is being upgraded from Windows Server 2012 to Windows Server 2022. Which type of software maintenance is most likely required to ensure the system continues to function correctly?

a) Corrective Maintenance
b) Adaptive Maintenance
c) Perfective Maintenance
d) Preventive Maintenance

**Question 2:**

Describe a scenario where a change in a third-party library used by a software application would necessitate adaptive maintenance.

**Question 3:**

What is the primary goal of adaptive maintenance, and how does it differ from corrective maintenance?

**Question 4:**

Your company's website uses a specific version of a JavaScript framework (e.g., React, Angular). The framework developers announce that the current version will no longer be supported and a new major version is released with significant changes. What type of maintenance will be needed to update your website to the new framework version? Explain why.

---

### 6. Answers to Practice Questions

**Answer 1:**

b) Adaptive Maintenance.

*   **Explanation:** The modification is driven by a change in the software's operating environment (the operating system). The goal is to adapt the existing system to function in the new environment.

**Answer 2:**

*   **Scenario:** Imagine a data visualization tool that uses a charting library (e.g., D3.js) for its graphical elements. If the developers of D3.js release a new version where the API for creating charts has been significantly changed, or certain rendering methods are deprecated, the data visualization tool will need to be updated.
*   **Explanation:** This is adaptive maintenance because the software's functionality (displaying charts) remains the same, but it needs to adapt to changes in its external dependency (the charting library). The code interacting with the charting library will need to be modified to work with the new API.

**Answer 3:**

*   **Primary Goal of Adaptive Maintenance:** To ensure the software remains compatible and functional within a changed or changing operating environment.
*   **Difference from Corrective Maintenance:** Corrective maintenance focuses on fixing defects or bugs found *within* the software itself, aiming to improve its internal quality and correctness. Adaptive maintenance, on the other hand, focuses on modifying the software to function correctly *in relation to its external environment*.

**Answer 4:**

*   **Type of Maintenance:** Adaptive Maintenance.
*   **Explanation:** The core functionality of the website (displaying content and features) is not being changed, nor are existing bugs being fixed. The need for modification arises solely because the external environment (the JavaScript framework) has evolved. To continue using the framework's features and receive support, the website's codebase must be updated to be compatible with the new major version. This often involves refactoring code that uses the deprecated features or adopting new patterns dictated by the updated framework.

---

### 7. Important Points to Remember

*   **Environment is Key:** Adaptive maintenance is driven by changes in the software's *external environment*, not by internal code errors or new feature requests.
*   **Compatibility is the Goal:** The primary objective is to ensure the software continues to work as intended when its surroundings change.
*   **Proactive Nature:** Often triggered by planned system upgrades or evolving standards, making it more predictable than corrective maintenance.
*   **Significant Effort:** Changes in operating systems, databases, or external APIs can require substantial code modifications and thorough testing.
*   **Essential for Longevity:** Without adaptive maintenance, software can quickly become outdated and unusable.

---
