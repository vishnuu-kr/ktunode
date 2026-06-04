---
title: "Non-functional"
subject: "SOFTWARE ENGINEERING"
module: "Module 1: Introduction to Software Engineering and Process Models "
branch: "Computer Science and Engineering"
semester: 7
topicId: "6841627a0fc9aa1fdbc8c884"
status: "completed"
scrapedAt: "2026-05-20T17:10:55.089Z"
---
# Software Engineering: Module 1 - Introduction to Software Engineering and Process Models

## Topic: Non-Functional Requirements (NFRs)

---

### 1. Introduction to Non-Functional Requirements

*   **What are Non-Functional Requirements?**
    *   NFRs, also known as "quality attributes" or "constraints," describe *how well* a system performs its functions. They do not define *what* the system does, but rather the quality characteristics it must possess.
    *   They are essential for user satisfaction and the overall success of a software system.
    *   Often contrasted with functional requirements, which define the specific behaviors and functions the system should perform.

*   **Why are NFRs Important?**
    *   **User Satisfaction:** A system might be functionally correct but unusable if it's slow, insecure, or difficult to maintain.
    *   **System Viability:** Crucial for competitive advantage and long-term success. A system that doesn't meet performance or security needs might fail in the market.
    *   **Maintainability & Scalability:** Directly impacts the cost and effort required to evolve and adapt the software over time.
    *   **Compliance & Regulations:** Many NFRs (e.g., security, privacy) are mandated by laws and industry standards.

*   **Relationship with Functional Requirements:**
    *   NFRs often constrain or influence how functional requirements are implemented.
    *   **Example:** A functional requirement might be "The system shall allow users to search for products." A non-functional requirement could be "The product search shall return results within 2 seconds." This NFR dictates the performance characteristics of the functional requirement.

---

### 2. Categories and Examples of Non-Functional Requirements

NFRs can be broadly categorized, although some overlap exists. Here are some common and important categories:

#### 2.1. Performance

*   **Definition:** Relates to how quickly and efficiently the system responds to user input or processes data.
*   **Key Concepts:**
    *   **Response Time:** The time taken from a request being submitted to the first part of the response being received.
    *   **Throughput:** The number of operations or transactions the system can process per unit of time.
    *   **Latency:** The delay between sending a request and receiving a response.
    *   **Resource Utilization:** How efficiently the system uses hardware resources (CPU, memory, disk I/O, network bandwidth).
*   **Examples:**
    *   "The e-commerce website shall display product search results within 3 seconds under a load of 100 concurrent users." (Response Time)
    *   "The transaction processing system shall be capable of processing at least 1000 transactions per minute." (Throughput)
    *   "The system's average CPU utilization shall not exceed 70% during peak operational hours." (Resource Utilization)

#### 2.2. Security

*   **Definition:** Concerns the protection of the system and its data from unauthorized access, use, disclosure, disruption, modification, or destruction.
*   **Key Concepts:**
    *   **Confidentiality:** Ensuring that data is accessible only to authorized individuals or entities.
    *   **Integrity:** Ensuring that data is accurate, complete, and has not been tampered with.
    *   **Availability:** Ensuring that the system and its data are accessible and usable when needed by authorized users.
    *   **Authentication:** Verifying the identity of a user or system.
    *   **Authorization:** Granting or denying access to specific resources or functions based on authenticated identity.
    *   **Non-repudiation:** Ensuring that a party cannot deny having performed a certain action.
*   **Examples:**
    *   "All user passwords shall be stored using one-way encryption (e.g., bcrypt)." (Confidentiality)
    *   "Only administrators shall have the ability to delete user accounts." (Authorization)
    *   "The system shall encrypt all sensitive customer data transmitted over the network using TLS 1.2 or higher." (Confidentiality)
    *   "The system shall log all failed login attempts for security auditing." (Integrity & Auditing)

#### 2.3. Usability

*   **Definition:** Refers to the ease with which users can learn, operate, and understand the system.
*   **Key Concepts:**
    *   **Learnability:** How easily new users can learn to use the system.
    *   **Efficiency:** How quickly experienced users can perform tasks.
    *   **Memorability:** How easily users can remember how to use the system after a period of not using it.
    *   **Error Prevention & Handling:** How well the system prevents errors and helps users recover from them.
    *   **Satisfaction:** The subjective level of comfort and pleasure experienced by the user.
*   **Examples:**
    *   "A new user shall be able to successfully complete a basic purchase within 5 minutes of their first login." (Learnability)
    *   "The system shall provide clear and concise error messages that suggest corrective actions." (Error Handling)
    *   "The navigation menu shall be consistent across all pages of the application." (Memorability & Learnability)

#### 2.4. Reliability

*   **Definition:** The probability that the system will perform its intended functions without failure for a specified period of time under given conditions.
*   **Key Concepts:**
    *   **Availability:** The proportion of time the system is operational and accessible.
    *   **Mean Time Between Failures (MTBF):** The average time the system operates correctly between failures.
    *   **Mean Time To Repair (MTTR):** The average time it takes to fix a failed system.
    *   **Fault Tolerance:** The ability of the system to continue operating correctly even when one or more components fail.
*   **Examples:**
    *   "The online banking system shall have an availability of 99.9% during business hours." (Availability)
    *   "The system shall recover from a database connection failure within 1 minute without data loss." (Fault Tolerance & Recovery)
    *   "The system shall have an MTBF of at least 1000 hours." (Reliability Metric)

#### 2.5. Maintainability

*   **Definition:** The ease with which the software can be modified to correct defects, improve performance, or adapt to a changing environment.
*   **Key Concepts:**
    *   **Modularity:** The degree to which the system is composed of discrete, independent modules.
    *   **Readability:** How easy it is to understand the code and documentation.
    *   **Testability:** The ease with which the software can be tested.
    *   **Reusability:** The extent to which components can be reused in other systems.
*   **Examples:**
    *   "The codebase shall adhere to the company's coding standards and include comprehensive inline comments." (Readability & Standards)
    *   "Each module shall have a defined set of public APIs and minimal dependencies on other modules." (Modularity)
    *   "All critical business logic shall be encapsulated in separate, independently testable units." (Testability & Modularity)

#### 2.6. Portability

*   **Definition:** The ease with which software can be transferred from one environment (hardware, operating system, or other software platform) to another.
*   **Key Concepts:**
    *   **Platform Independence:** The ability of the software to run on multiple platforms without modification.
    *   **Adaptability:** The ease of modifying the software to run on a new platform.
*   **Examples:**
    *   "The web application shall be compatible with all major modern web browsers (Chrome, Firefox, Safari, Edge)." (Browser Portability)
    *   "The mobile application shall be developed using cross-platform technologies to support both iOS and Android from a single codebase." (OS Portability)

#### 2.7. Scalability

*   **Definition:** The ability of the system to handle an increasing amount of work or users without degrading performance.
*   **Key Concepts:**
    *   **Vertical Scaling (Scaling Up):** Increasing the resources of a single server (e.g., adding more CPU, RAM).
    *   **Horizontal Scaling (Scaling Out):** Adding more servers to distribute the load.
*   **Examples:**
    *   "The system shall be able to support a 50% increase in user traffic within 6 months by adding additional application servers." (Horizontal Scaling)
    *   "The database shall be designed to handle a data volume growth of 20% per year for the next 5 years." (Data Scalability)

#### 2.8. Other Important NFRs

*   **Localization:** Adaptation of the software to different languages and regions.
*   **Internationalization (i18n):** Designing the software to be adaptable to various languages and regions without engineering changes.
*   **Accessibility:** Ensuring that the system can be used by people with disabilities.
*   **Resource Constraints:** Limitations on available hardware, memory, storage, etc.
*   **Legal & Regulatory Constraints:** Compliance with laws, standards, and policies.

---

### 3. Eliciting and Specifying Non-Functional Requirements

*   **Challenges in Elicitation:**
    *   Often implicit or assumed by stakeholders.
    *   Can be vague and difficult to quantify.
    *   May conflict with each other or with functional requirements.
    *   Stakeholders might not fully understand the implications of certain NFRs.

*   **Techniques for Elicitation:**
    *   **Interviews & Workshops:** Directly asking stakeholders about their quality expectations.
    *   **Scenarios & Use Cases:** Asking "what if" questions related to performance, security, or failure.
    *   **Prototyping:** Allowing users to interact with a system and providing feedback on its qualities.
    *   **Checklists & Questionnaires:** Using predefined lists of common NFRs to prompt discussion.
    *   **Benchmarking:** Studying competitor systems or industry standards for quality metrics.

*   **Specifying NFRs:**
    *   **SMART Criteria:**
        *   **S**pecific: Clearly defined and unambiguous.
        *   **M**easurable: Quantifiable so it can be verified.
        *   **A**chievable: Realistic given the constraints.
        *   **R**elevant: Important for the system's success.
        *   **T**ime-bound: Specifying when it needs to be met (often implied by the project timeline).
    *   **Quantification is Key:** Instead of "The system should be fast," specify "The login process should complete within 2 seconds."
    *   **Provide Context:** Specify the conditions under which the NFR must be met (e.g., "under a load of 100 concurrent users").
    *   **Use Standard Metrics:** Employ industry-accepted metrics where possible.
    *   **Document Clearly:** NFRs should be documented alongside functional requirements.

---

### 4. Impact of NFRs on Software Process Models

*   **Influence on Design:** NFRs significantly shape architectural decisions, technology choices, and design patterns.
    *   **Example:** A high security requirement might lead to the selection of specific encryption algorithms and access control mechanisms. A performance requirement might dictate the use of caching or asynchronous processing.
*   **Influence on Development:** NFRs affect coding practices, testing strategies, and the choice of development tools.
    *   **Example:** Maintainability requirements might enforce strict coding standards and the use of static analysis tools. Reliability requirements might necessitate robust error handling and retry mechanisms.
*   **Influence on Testing:** NFRs require specific types of testing beyond functional testing.
    *   **Performance Testing:** Load testing, stress testing, endurance testing.
    *   **Security Testing:** Penetration testing, vulnerability scanning.
    *   **Usability Testing:** User acceptance testing, heuristic evaluation.
    *   **Reliability Testing:** Fault injection testing.
*   **Choice of Process Model:**
    *   **Agile Methodologies (Scrum, Kanban):** NFRs are often addressed iteratively. Quality is built in from the start through practices like Test-Driven Development (TDD) and continuous integration. Backlogs can include NFR-related tasks or stories.
    *   **Waterfall Model:** NFRs are ideally defined upfront in the requirements phase. However, they can be difficult to fully specify early on, and changes can be costly.
    *   **V-Model:** Emphasizes verification and validation. NFRs are tested in corresponding phases (e.g., performance testing in system testing).
    *   **Iterative/Incremental Models:** Allow for refinement of NFRs over iterations, providing early feedback on quality attributes.

---

### 5. Common Pitfalls and Best Practices

*   **Common Pitfalls:**
    *   **Vagueness:** NFRs are not quantified or specified clearly.
    *   **Omission:** Important quality attributes are overlooked.
    *   **Conflict:** NFRs contradict each other or functional requirements without resolution.
    *   **Unrealistic Expectations:** NFRs are set too high for the given constraints.
    *   **Late Discovery:** NFRs are identified too late in the development lifecycle, making them expensive to implement.
    *   **Lack of Measurement:** No clear way to verify if an NFR has been met.

*   **Best Practices:**
    *   **Involve Stakeholders Early:** Ensure all relevant parties contribute to defining NFRs.
    *   **Quantify Everything Possible:** Use measurable targets and metrics.
    *   **Prioritize NFRs:** Understand which quality attributes are most critical.
    *   **Document and Track:** Treat NFRs with the same rigor as functional requirements.
    *   **Traceability:** Link NFRs to design decisions, code, and test cases.
    *   **Continuous Monitoring & Testing:** Integrate NFR testing throughout the development lifecycle.
    *   **Review and Refine:** Regularly revisit NFRs to ensure they remain relevant and achievable.
    *   **Consider Trade-offs:** Be aware that improving one NFR might negatively impact another (e.g., very high security might impact performance).

---

### Practice Questions and Exercises

**Question 1:**
Define Non-Functional Requirements (NFRs) and explain their importance in software development. Contrast them with functional requirements.

**Answer 1:**
Non-Functional Requirements (NFRs), also known as quality attributes or constraints, describe *how well* a system performs its functions, rather than *what* the system does. They are crucial for user satisfaction, system viability, maintainability, and compliance. Unlike functional requirements, which specify the system's behavior (e.g., "The system shall allow users to log in"), NFRs specify the quality characteristics (e.g., "The login process shall complete within 2 seconds").

**Question 2:**
Provide three examples of Non-Functional Requirements, categorizing each according to common quality attributes like Performance, Security, or Usability.

**Answer 2:**
1.  **Performance:** "The online trading platform shall process all buy and sell orders within 500 milliseconds."
2.  **Security:** "The patient portal shall encrypt all Personal Health Information (PHI) both in transit and at rest."
3.  **Usability:** "A first-time user shall be able to successfully book a flight without referring to any documentation."

**Question 3:**
Explain why eliciting and specifying NFRs can be challenging for software engineers.

**Answer 3:**
Eliciting and specifying NFRs can be challenging due to:
*   **Implicit Nature:** Stakeholders often assume certain quality levels without explicitly stating them.
*   **Vagueness:** NFRs are often abstract and difficult to quantify precisely.
*   **Conflicting Priorities:** Different stakeholders may have competing quality expectations (e.g., high security vs. high performance).
*   **Lack of Understanding:** Stakeholders may not fully grasp the implications or feasibility of certain NFRs.
*   **Measurement Difficulties:** Defining objective and measurable criteria for abstract qualities can be hard.

**Question 4:**
How do Non-Functional Requirements influence the choice of software process models?

**Answer 4:**
NFRs influence the choice of process models by dictating the rigor needed for upfront planning, testing, and iteration.
*   **Agile models** are well-suited for NFRs that evolve or are discovered iteratively, focusing on continuous integration and testing to build quality in.
*   **Waterfall** requires NFRs to be well-defined early, which can be problematic if they are not fully understood.
*   **Iterative models** allow for refinement and validation of NFRs over multiple cycles.
Regardless of the model, NFRs necessitate specific testing activities (performance, security, etc.) and impact design decisions.

**Question 5 (Exercise):**
Imagine you are developing a new online banking application. List three critical Non-Functional Requirements for this system and briefly explain why each is important.

**Exercise Answer:**
1.  **Security (Confidentiality & Integrity):** "All sensitive customer data (account numbers, transaction history, personal information) must be protected from unauthorized access and modification. This is critical to maintain customer trust, prevent financial fraud, and comply with financial regulations."
2.  **Reliability (Availability):** "The online banking system must be available to users at least 99.9% of the time during business hours. This is important because users need to access their accounts for essential financial transactions at any time, and downtime can lead to significant customer dissatisfaction and potential financial losses."
3.  **Performance (Response Time):** "Key transactions such as checking account balances and transferring funds between accounts must complete within 1.5 seconds. This is vital for a positive user experience; slow responses can frustrate users and make them consider alternative banking solutions."

---

### Important Points to Remember

*   **NFRs are about "How Well," not "What."**
*   **Quantification and Measurability are Key** to effective NFRs.
*   **Involve Stakeholders Early and Continuously.**
*   **NFRs Drive Architectural and Design Decisions.**
*   **Specific Testing is Required for NFRs.**
*   **Be Aware of Trade-offs** between different NFRs.
*   **Treat NFRs with the same importance as Functional Requirements.**

---
This concludes the study notes for Non-Functional Requirements in Module 1.
