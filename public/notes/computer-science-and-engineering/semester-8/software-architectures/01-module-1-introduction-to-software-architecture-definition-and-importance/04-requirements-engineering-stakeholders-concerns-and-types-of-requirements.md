---
title: "Requirements engineering: Stakeholders, Concerns, and Types of Requirements"
subject: "SOFTWARE ARCHITECTURES"
module: "Module 1: Introduction to Software Architecture:  Definition and Importance"
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8c9b3"
status: "completed"
scrapedAt: "2026-05-20T17:26:14.990Z"
---
# Software Architectures: Module 1 - Introduction to Software Architecture
## Topic: Requirements Engineering: Stakeholders, Concerns, and Types of Requirements

This module introduces the fundamental concepts of software architecture by focusing on the crucial role of requirements engineering. Understanding who is involved, what they care about, and what needs to be built is the bedrock upon which any successful software architecture is founded.

---

### **Learning Outcomes Covered:**

*   **Understanding the role of requirements engineering in software architecture.**
*   **Identifying and categorizing stakeholders in a software system.**
*   **Recognizing and articulating the various concerns that stakeholders have.**
*   **Differentiating between functional and non-functional requirements.**
*   **Appreciating the importance of well-defined requirements for architectural design.**

---

### **1. What is Requirements Engineering?**

Requirements engineering (RE) is the process of defining, documenting, and maintaining requirements for a software system. It's about understanding *what* the system should do and *how well* it should do it.

*   **Definition:** The systematic process of discovering, eliciting, analyzing, specifying, validating, and managing requirements.
*   **Importance in Software Architecture:**
    *   **Foundation for Design:** Requirements are the primary input for architectural decisions. A sound architecture directly addresses the specified requirements.
    *   **Scope Definition:** RE helps define the boundaries and scope of the system, preventing scope creep.
    *   **Communication Tool:** Well-defined requirements serve as a common understanding between stakeholders and the development team.
    *   **Quality Assurance:** Requirements drive the testing and validation of the system, ensuring it meets user needs.
    *   **Risk Mitigation:** Identifying and addressing requirements early can prevent costly rework later in the development lifecycle.
    *   **Architecture Alignment:** The architecture must satisfy the functional needs (what the system does) and the non-functional needs (how well it does it) identified during RE.

---

### **2. Stakeholders in Software Systems**

Stakeholders are individuals or groups who have an interest in, or are affected by, the software system. Their input is crucial for defining accurate and comprehensive requirements.

#### **2.1. Definition of a Stakeholder:**

Any person, organization, or entity that can affect, be affected by, or perceive itself to be affected by a decision, activity, or outcome of a project or system.

#### **2.2. Types of Stakeholders and Their Typical Concerns:**

*   **End-Users:**
    *   **Definition:** The individuals who directly interact with the software system.
    *   **Concerns:**
        *   **Usability:** Ease of use, intuitive interface, efficiency.
        *   **Functionality:** Does it do what they need it to do?
        *   **Performance:** Responsiveness, speed.
        *   **Reliability:** Does it crash or produce errors?
        *   **User Experience (UX):** Overall satisfaction and engagement.
    *   **Example:** A customer using an e-commerce website to browse and purchase products.

*   **Customers/Clients:**
    *   **Definition:** The individuals or organizations that commission and pay for the software system.
    *   **Concerns:**
        *   **Return on Investment (ROI):** Does the system deliver business value?
        *   **Budget:** Does the system stay within the allocated budget?
        *   **Timeline:** Is the system delivered on time?
        *   **Business Goals:** Does the system help achieve specific business objectives?
        *   **Features:** What specific capabilities are required?
    *   **Example:** A retail company paying for a new inventory management system.

*   **Developers/Development Team:**
    *   **Definition:** The team responsible for designing, building, and testing the software.
    *   **Concerns:**
        *   **Maintainability:** How easy is it to modify or fix the system?
        *   **Testability:** How easy is it to test the system?
        *   **Code Quality:** Readability, modularity, adherence to coding standards.
        *   **Technology Stack:** Suitability and ease of use of chosen technologies.
        *   **Developer Productivity:** Tools and processes that enhance efficiency.
    *   **Example:** Software engineers writing the code for a mobile application.

*   **System Administrators/Operations Team:**
    *   **Definition:** Individuals responsible for deploying, managing, and maintaining the system in its operational environment.
    *   **Concerns:**
        *   **Deployability:** Ease of installation and configuration.
        *   **Scalability:** Ability to handle increasing load.
        *   **Availability:** Uptime and fault tolerance.
        *   **Security:** Protection against unauthorized access and threats.
        *   **Monitoring:** Ability to track system health and performance.
        *   **Manageability:** Ease of patching, upgrades, and backups.
    *   **Example:** IT professionals managing servers and deploying software updates for a web application.

*   **Project Managers:**
    *   **Definition:** Responsible for planning, executing, and closing projects.
    *   **Concerns:**
        *   **Scope Management:** Preventing unauthorized changes to the project scope.
        *   **Schedule Management:** Ensuring timely delivery.
        *   **Resource Management:** Allocating and managing personnel and resources.
        *   **Risk Management:** Identifying and mitigating potential project risks.
        *   **Budget Management:** Tracking and controlling project costs.
    *   **Example:** A project manager overseeing the development of a new banking application.

*   **Testers/Quality Assurance (QA) Team:**
    *   **Definition:** Responsible for verifying that the software meets its requirements.
    *   **Concerns:**
        *   **Testability:** How easy is it to create and execute tests?
        *   **Test Coverage:** Ensuring all requirements are tested.
        *   **Defect Identification:** Finding and reporting bugs.
        *   **Requirement Clarity:** Ambiguous requirements are hard to test.
    *   **Example:** QA engineers writing test cases for a new feature in a desktop application.

*   **Regulators/Compliance Officers:**
    *   **Definition:** Bodies that enforce laws, standards, or regulations relevant to the software.
    *   **Concerns:**
        *   **Compliance:** Adherence to legal and industry standards (e.g., GDPR, HIPAA).
        *   **Security Standards:** Meeting specific security protocols.
        *   **Data Privacy:** Ensuring sensitive data is handled correctly.
    *   **Example:** A financial institution ensuring its trading platform complies with SEC regulations.

*   **Business Analysts:**
    *   **Definition:** Bridge the gap between business needs and technical solutions.
    *   **Concerns:**
        *   **Business Process Alignment:** Ensuring the software supports and improves business processes.
        *   **Requirements Elicitation:** Gathering and documenting stakeholder needs.
        *   **Requirements Validation:** Confirming that requirements accurately reflect business needs.
    *   **Example:** A business analyst interviewing department heads to understand their needs for a CRM system.

**IMPORTANT POINT TO REMEMBER:** Different stakeholders will have different priorities and potentially conflicting concerns. The architect's role is to balance these concerns and ensure the architecture can satisfy them as effectively as possible.

---

### **3. Stakeholder Concerns**

Stakeholder concerns are the issues, interests, and priorities that stakeholders bring to the software development process. These concerns directly influence the requirements and, consequently, the architectural decisions.

#### **3.1. Categories of Concerns:**

*   **Functional Concerns:** Relate to *what* the system does – its behavior and operations. These are often expressed as features or tasks the system must perform.
    *   **Example:** "The system must allow users to create new accounts."

*   **Non-Functional Concerns (Quality Attributes):** Relate to *how well* the system performs its functions. These are often referred to as quality attributes or "-ilities." They are critical for architectural design as they often dictate fundamental structural choices.
    *   **Examples:**
        *   **Performance:** Response time, throughput.
        *   **Scalability:** Ability to handle increasing load.
        *   **Availability:** Uptime percentage, fault tolerance.
        *   **Security:** Authentication, authorization, data protection.
        *   **Usability:** Ease of use, learnability.
        *   **Maintainability:** Ease of modification, debugging.
        *   **Reliability:** Mean Time Between Failures (MTBF).
        *   **Portability:** Ability to run on different platforms.
        *   **Interoperability:** Ability to interact with other systems.
        *   **Testability:** Ease of testing the system.

#### **3.2. Examples of Concerns from Different Stakeholders:**

| Stakeholder                 | Example Concern                                  | Type of Concern |
| :-------------------------- | :----------------------------------------------- | :-------------- |
| End-User                    | "The login screen should load in under 2 seconds." | Non-Functional  |
| Customer/Client             | "The system must integrate with our existing ERP." | Non-Functional  |
| Developer                   | "The code should be well-commented and modular."  | Non-Functional  |
| System Administrator        | "We need to be able to monitor system health."    | Non-Functional  |
| Regulator (e.g., HIPAA)     | "Patient data must be encrypted at rest."       | Non-Functional  |
| Customer/Client             | "Users must be able to search for products by keyword." | Functional      |
| End-User                    | "I need to be able to reset my password."        | Functional      |
| System Administrator        | "The system must be available 99.9% of the time." | Non-Functional  |
| Project Manager             | "The project must be completed within budget."   | Non-Functional  |

**IMPORTANT POINT TO REMEMBER:** Non-functional requirements often have a much greater impact on architectural design than functional requirements. A system might perform its functions correctly, but if it's too slow, insecure, or difficult to maintain, it will likely fail.

---

### **4. Types of Requirements**

Requirements are the essential inputs that guide the entire software development process, including architectural design. They can be broadly categorized into two main types.

#### **4.1. Functional Requirements (FRs):**

*   **Definition:** Specify *what* the system should do. They describe the functions, services, and behavior of the system.
*   **Characteristics:**
    *   Often described in terms of inputs, outputs, and processing logic.
    *   Focus on user tasks and system operations.
    *   Can typically be verified by testing specific inputs and checking outputs.
*   **Examples:**
    *   The system shall allow users to register for an account.
    *   The system shall allow users to search for products by name.
    *   The system shall calculate the total cost of items in a shopping cart.
    *   The system shall send an email confirmation upon successful order placement.

#### **4.2. Non-Functional Requirements (NFRs):**

*   **Definition:** Specify *how well* the system performs its functions. They describe the qualities, constraints, and characteristics of the system.
*   **Characteristics:**
    *   Often referred to as "quality attributes" or "constraints."
    *   Typically affect the system as a whole and are difficult to achieve by adding small features.
    *   Crucial for architectural decision-making as they often dictate structural patterns and technology choices.
    *   Can be difficult to measure and verify objectively.
*   **Examples (by category):**
    *   **Performance:**
        *   "The system shall respond to user queries within 3 seconds under normal load."
        *   "The system shall support 1,000 concurrent users without degradation in performance."
    *   **Availability:**
        *   "The system shall be available 99.9% of the time (excluding scheduled maintenance)."
        *   "The system shall recover from hardware failures within 5 minutes."
    *   **Security:**
        *   "All sensitive user data must be encrypted using AES-256."
        *   "The system shall prevent unauthorized access to administrator functions."
    *   **Usability:**
        *   "A new user should be able to complete a purchase within 5 minutes of first using the system."
        *   "The user interface shall be consistent across all modules."
    *   **Maintainability:**
        *   "The system's codebase shall adhere to the company's coding standards."
        *   "Bug fixes should be deployable within 24 hours of identification."
    *   **Scalability:**
        *   "The system should be able to handle a 50% increase in user traffic within one year without significant architectural changes."
    *   **Reliability:**
        *   "The system shall have a Mean Time Between Failures (MTBF) of at least 1,000 hours."

**IMPORTANT POINT TO REMEMBER:** NFRs are often more challenging to specify and verify than FRs. Ambiguous NFRs can lead to architectural misinterpretations and a system that fails to meet critical quality expectations. Quantifiable NFRs are highly preferred.

---

### **5. Requirements Engineering and Architectural Design**

The success of a software architecture is directly tied to how well it addresses the identified requirements.

*   **Requirements as Drivers for Architecture:**
    *   Functional requirements define the core capabilities the architecture must support.
    *   Non-functional requirements often dictate the fundamental structural decisions, technology choices, and design patterns employed.
*   **Impact of NFRs on Architecture:**
    *   **Performance:** May lead to choices like asynchronous processing, caching strategies, or distributed systems.
    *   **Scalability:** Might influence the adoption of microservices, load balancing, or elastic infrastructure.
    *   **Security:** Could drive the selection of specific authentication/authorization mechanisms, encryption protocols, or secure coding practices.
    *   **Availability:** May require redundancy, failover mechanisms, and robust error handling.
    *   **Maintainability:** Can encourage modularity, clear interfaces, and well-documented code.

*   **The Iterative Nature:** Requirements engineering is not a one-time activity. As the system evolves and stakeholder understanding deepens, requirements may change. The architecture must be adaptable to accommodate these changes.

---

### **6. Practice Questions & Exercises**

**Question 1:**
Identify three distinct stakeholders for an online banking application and describe one key concern for each.

**Answer:**
*   **Stakeholder:** End-User (Customer)
    *   **Concern:** Usability – The interface should be intuitive and easy to navigate to perform transactions like fund transfers or bill payments quickly.
*   **Stakeholder:** Bank's IT Security Department
    *   **Concern:** Security – The system must protect customer account information from unauthorized access and prevent fraudulent transactions.
*   **Stakeholder:** Bank's Operations Manager
    *   **Concern:** Scalability – The system must be able to handle peak transaction loads (e.g., during salary day) without performance degradation.

---

**Question 2:**
Differentiate between functional and non-functional requirements. Provide one example of each for a university student registration system.

**Answer:**
*   **Functional Requirement:** What the system *does*.
    *   **Example:** "The system shall allow students to enroll in courses."
*   **Non-Functional Requirement:** *How well* the system performs its functions.
    *   **Example:** "The course enrollment process shall complete within 5 seconds for 95% of users during peak hours." (This is a performance NFR).

---

**Question 3:**
Consider a system for managing a large fleet of delivery trucks. Which type of stakeholder would be most concerned with the "availability" of the system, and why?

**Answer:**
The **System Administrators/Operations Team** and **Fleet Managers** would be most concerned with the "availability" of the system.
*   **Reasoning:** If the system that manages truck assignments, routes, and tracking is unavailable, it directly impacts the ability to dispatch trucks, track deliveries, and manage logistics, leading to operational disruptions, missed deliveries, and increased costs. High availability is critical for the day-to-day operation of a delivery fleet.

---

**Question 4:**
A client requests that their new e-commerce website "should be easy for customers to find products." Is this a functional or non-functional requirement? Explain your reasoning and how it might influence the architecture.

**Answer:**
This is a **Non-Functional Requirement (NFR)**, specifically related to **Usability** and potentially **Performance** (search speed).

*   **Reasoning:** While it describes a desired outcome, it doesn't specify a concrete function the system performs. "Easy to find products" is a subjective quality. It relates to *how well* the search functionality works, rather than *what* the search function does.

*   **Architectural Influence:**
    *   **Search Engine:** The architecture might need to incorporate a robust and efficient search engine (e.g., Elasticsearch, Solr) rather than a simple database query.
    *   **Indexing:** Efficient indexing strategies will be crucial to ensure fast search results.
    *   **User Interface Design:** The UI design for search results, filtering, and sorting will need to be user-friendly, suggesting architectural considerations for frontend frameworks and presentation layers.
    *   **Performance Metrics:** The requirement might be refined to a measurable NFR like "Search results for products shall be returned within 2 seconds for 90% of queries." This directly influences the choice of search technology and database indexing.

---

### **Key Points to Remember:**

*   **Requirements Engineering is foundational:** It drives all subsequent architectural decisions.
*   **Stakeholders are diverse:** Each has unique concerns that must be considered and balanced.
*   **NFRs are critical for architecture:** They dictate the system's quality attributes and often have a more profound impact on structural choices than FRs.
*   **Quantify NFRs:** Whenever possible, express non-functional requirements with measurable metrics to ensure clarity and verifiability.
*   **Architecture must satisfy both FRs and NFRs:** A system that functions correctly but is slow, insecure, or unmaintainable will fail to meet stakeholder needs.
*   **Requirements evolve:** Be prepared for changes and ensure the architectural process can accommodate them.
