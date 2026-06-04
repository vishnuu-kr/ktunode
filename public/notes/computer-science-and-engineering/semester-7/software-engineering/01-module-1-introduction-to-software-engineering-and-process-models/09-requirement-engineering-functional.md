---
title: "Requirement engineering - Functional"
subject: "SOFTWARE ENGINEERING"
module: "Module 1: Introduction to Software Engineering and Process Models "
branch: "Computer Science and Engineering"
semester: 7
topicId: "6841627a0fc9aa1fdbc8c883"
status: "completed"
scrapedAt: "2026-05-20T17:10:54.249Z"
---
# SOFTWARE ENGINEERING: Module 1: Introduction to Software Engineering and Process Models

## Topic: Requirement Engineering - Functional Requirements

---

### **Learning Outcomes**

By the end of this topic, you should be able to:

*   Understand the role and importance of requirements in the software development lifecycle.
*   Define and differentiate between functional and non-functional requirements.
*   Identify and describe various types of functional requirements.
*   Explain the process of eliciting functional requirements.
*   Discuss techniques for documenting functional requirements.
*   Understand the importance of verifying and validating functional requirements.

---

### **1. Introduction to Requirement Engineering**

#### **1.1 What are Requirements?**

*   **Definition:** Requirements are statements of what the system should do, how it should perform, and what constraints it must operate under. They define the desired behavior and characteristics of a software product.
*   **Importance:**
    *   **Foundation of Software Development:** Requirements serve as the blueprint for the entire software development process.
    *   **Customer Satisfaction:** Clearly defined requirements ensure that the final product meets the user's needs and expectations.
    *   **Reduced Rework and Costs:** Misunderstood or missing requirements are a primary cause of project delays and cost overruns.
    *   **Communication Tool:** They act as a crucial communication link between stakeholders (customers, users, developers, testers).
    *   **Basis for Design, Implementation, and Testing:** All subsequent activities depend on the quality of the requirements.

#### **1.2 The Software Development Lifecycle (SDLC) and Requirements**

*   Requirements are typically gathered and analyzed in the **Requirements Gathering/Analysis** phase of the SDLC.
*   They then influence subsequent phases like **Design**, **Implementation**, **Testing**, and **Maintenance**.

---

### **2. Types of Requirements**

Requirements can be broadly categorized into two main types:

#### **2.1 Functional Requirements (FRs)**

*   **Definition:** Functional requirements specify *what* the software system should do. They describe the functions or services the system must provide to its users.
*   **Focus:** They define the behavior of the system in response to specific inputs and under specific conditions.
*   **Often expressed as:**
    *   Actions the system performs.
    *   Tasks the system completes.
    *   Data the system processes.
    *   Responses to user inputs.

#### **2.2 Non-Functional Requirements (NFRs)**

*   **Definition:** Non-functional requirements specify *how* the system should perform a function or what constraints it must operate under. They define qualities or characteristics of the system, rather than specific behaviors.
*   **Focus:** They define aspects like performance, usability, security, reliability, maintainability, etc.
*   **Examples:**
    *   **Performance:** The system must respond to user queries within 2 seconds.
    *   **Security:** User passwords must be encrypted using AES-256.
    *   **Usability:** The system should be learnable by a new user within 1 hour.
    *   **Reliability:** The system must have an availability of 99.9%.

**Key Distinction:** Think of it this way: Functional requirements are *what* the system does, while non-functional requirements are *how well* it does it.

---

### **3. Functional Requirements in Detail**

This section focuses on understanding and defining functional requirements.

#### **3.1 Types of Functional Requirements**

Functional requirements can be further classified into different categories, though the exact categorization might vary:

*   **User Interaction Requirements:**
    *   Describe how users interact with the system.
    *   Includes input mechanisms, output displays, and user interface elements.
    *   **Example:** The system shall display a login form with fields for username and password.
    *   **Example:** The system shall allow users to submit a form by clicking a "Submit" button.

*   **Data Processing Requirements:**
    *   Describe how the system processes data.
    *   Includes data manipulation, calculations, transformations, and storage.
    *   **Example:** The system shall calculate the total cost by summing the prices of selected items and applying any applicable discounts.
    *   **Example:** The system shall store customer order details in a database.

*   **Business Rule Requirements:**
    *   Describe specific policies or constraints that govern the business operations implemented by the system.
    *   These are often derived from existing business processes.
    *   **Example:** A customer is eligible for a discount if their total order value exceeds $100.
    *   **Example:** Only administrators can approve user accounts.

*   **System Functionality Requirements:**
    *   Describe specific tasks or operations the system performs, often internal to the system or in interaction with other systems.
    *   **Example:** The system shall automatically send a confirmation email to the customer after a successful order.
    *   **Example:** The system shall integrate with the payment gateway to process credit card transactions.

*   **Reporting Requirements:**
    *   Describe the reports or summaries the system must generate.
    *   **Example:** The system shall generate a monthly sales report detailing sales by product category.
    *   **Example:** The system shall provide a user activity log for audit purposes.

#### **3.2 Eliciting Functional Requirements**

This is the process of gathering information about what the system needs to do from stakeholders.

*   **Key Stakeholders:**
    *   Customers
    *   End-users
    *   Subject Matter Experts (SMEs)
    *   Business Analysts
    *   Product Owners

*   **Elicitation Techniques:**
    *   **Interviews:** Direct conversations with stakeholders to understand their needs, processes, and expectations.
        *   *Best for:* Gaining in-depth understanding of user workflows and specific needs.
        *   *Example:* Interviewing a sales representative about how they currently manage customer orders.
    *   **Questionnaires/Surveys:** Distributing a set of structured questions to a larger group of stakeholders.
        *   *Best for:* Gathering opinions or data from a broad audience.
        *   *Example:* Surveying end-users about their preferred features in a new application.
    *   **Workshops/Focus Groups:** Bringing together stakeholders in a facilitated session to discuss requirements, brainstorm ideas, and resolve conflicts.
        *   *Best for:* Collaborative requirement gathering, identifying conflicting needs, and achieving consensus.
        *   *Example:* Holding a workshop with marketing and sales teams to define the features for a new e-commerce platform.
    *   **Observation/Ethnography:** Observing users performing their tasks in their natural environment.
        *   *Best for:* Understanding actual user behavior and identifying implicit needs that users may not articulate.
        *   *Example:* Observing how customer service agents handle support calls to identify system support needs.
    *   **Prototyping:** Creating a preliminary version or model of the system to get feedback from stakeholders.
        *   *Best for:* Visualizing system functionality and allowing users to interact with it early in the process.
        *   *Example:* Developing a clickable wireframe of a new website's user interface.
    *   **Document Analysis:** Reviewing existing documentation, such as manuals, process flows, or competitor products.
        *   *Best for:* Understanding existing systems, business rules, and constraints.
        *   *Example:* Analyzing the user manual of a legacy system to understand its core functionalities.

#### **3.3 Documenting Functional Requirements**

Once elicited, requirements need to be clearly and unambiguously documented.

*   **Common Documentation Artifacts:**
    *   **Use Cases:**
        *   **Definition:** A use case describes a sequence of actions performed by a system to achieve a specific goal for an actor (user or external system).
        *   **Components:**
            *   **Use Case Name:** Concise name of the action.
            *   **Actor:** The entity that initiates or participates in the use case.
            *   **Preconditions:** Conditions that must be true before the use case can start.
            *   **Postconditions:** Conditions that must be true after the use case successfully completes.
            *   **Basic Flow (Happy Path):** The primary sequence of steps to achieve the goal.
            *   **Alternative Flows:** Variations or exceptions to the basic flow.
            *   **Exception Flows:** Error conditions and how the system handles them.
        *   **Example (Simplified):**
            *   **Use Case Name:** Place Order
            *   **Actor:** Customer
            *   **Precondition:** Customer is logged in and has items in their shopping cart.
            *   **Basic Flow:**
                1. Customer navigates to the checkout page.
                2. Customer enters shipping and payment details.
                3. Customer reviews the order summary.
                4. Customer confirms the order.
                5. System validates payment.
                6. System processes the order and displays an order confirmation.
            *   **Postcondition:** Order is placed successfully.

    *   **User Stories:**
        *   **Definition:** A user story is a short, simple description of a feature told from the perspective of the person who desires the new capability, usually a user or buyer of the system.
        *   **Format:** "As a `<type of user>`, I want `<some goal>` so that `<some reason>`."
        *   **Example:** "As a registered customer, I want to be able to reset my password so that I can regain access to my account if I forget it."
        *   **Example:** "As an administrator, I want to view a list of all registered users so that I can manage user accounts."
        *   **Emphasis:** Focus on the value delivered to the user. Often used in Agile methodologies.

    *   **Functional Specifications Document (FSD) / Software Requirements Specification (SRS):**
        *   **Definition:** A comprehensive document that details all functional and non-functional requirements of a system.
        *   **Content:** Can include detailed descriptions of each function, data models, business rules, user interface specifications, etc.
        *   **More Formal:** Often used in traditional (waterfall) development methodologies.

    *   **Data Flow Diagrams (DFDs):**
        *   **Definition:** Visual representations of the flow of data through a system.
        *   **Components:** Processes, data stores, external entities, data flows.
        *   **Example:** A DFD might show how customer order data flows from the user interface, through a "Process Order" process, to a "Customer Orders" data store.

    *   **State Diagrams:**
        *   **Definition:** Diagrams that show the different states of an object or system and the transitions between those states triggered by events.
        *   **Example:** A state diagram for an "Order" might show states like "New," "Processing," "Shipped," and "Delivered," with transitions based on events like "Payment Received" or "Item Shipped."

#### **3.4 Verifying and Validating Functional Requirements**

Ensuring that the documented requirements are correct, complete, and meet the stakeholders' needs.

*   **Verification:**
    *   **Definition:** Checking if the requirements have been developed correctly, i.e., "Are we building the product right?"
    *   **Activities:**
        *   **Reviews/Inspections:** Stakeholders and team members review the requirement documents for clarity, completeness, consistency, and correctness.
        *   **Walkthroughs:** A more informal review where the requirement author guides others through the document.
        *   **Checklists:** Using predefined lists of quality criteria to evaluate requirements.

*   **Validation:**
    *   **Definition:** Checking if the requirements are for the right product, i.e., "Are we building the right product?"
    *   **Activities:**
        *   **Prototyping:** Allowing users to interact with prototypes to confirm that the requirements reflect their needs.
        *   **User Acceptance Testing (UAT):** End-users test the developed system against the agreed-upon requirements to confirm it meets their business needs.
        *   **Demonstrations:** Showing partial or complete functionality to stakeholders for feedback.

**Important to Remember:** The earlier these errors are found, the cheaper they are to fix. Finding a requirement error during the requirements phase is significantly less costly than finding it during testing or after deployment.

---

### **4. Practice Questions and Exercises**

**Question 1:**
Define functional requirements and provide two distinct examples.

**Answer 1:**
Functional requirements specify *what* the software system should do. They describe the functions or services the system must provide to its users.
*   **Example 1:** The system shall allow users to search for products by name or category.
*   **Example 2:** The system shall generate a PDF invoice for each completed order.

**Question 2:**
Differentiate between functional requirements and non-functional requirements.

**Answer 2:**
Functional requirements define the specific behaviors and functions of the system (what it does), while non-functional requirements define the qualities or constraints of the system (how well it does it, or under what conditions). For instance, "The system shall allow users to log in" is a functional requirement, whereas "The system shall authenticate users within 1 second" is a non-functional requirement (performance).

**Question 3:**
List three common techniques used for eliciting functional requirements and briefly explain the purpose of each.

**Answer 3:**
1.  **Interviews:** Used to have direct conversations with stakeholders to gain in-depth understanding of their needs and workflows.
2.  **Workshops:** Facilitated sessions with multiple stakeholders to collaboratively define requirements, resolve conflicts, and achieve consensus.
3.  **Observation:** Watching users perform their tasks in their natural environment to identify implicit needs and understand actual behavior.

**Question 4:**
A user story is typically written in a specific format. What is this format, and provide an example for a banking application.

**Answer 4:**
The format of a user story is: "As a `<type of user>`, I want `<some goal>` so that `<some reason>`."
*   **Example:** "As a customer, I want to be able to view my account balance so that I can monitor my finances."

**Question 5:**
What is the difference between requirement verification and validation?

**Answer 5:**
Requirement verification checks if the requirements are being built *correctly* (e.g., are they clear, consistent, complete). Requirement validation checks if the *correct* requirements are being built (e.g., do they actually meet the user's needs).

---

### **5. Important Points to Remember**

*   **Requirements are the foundation:** Poorly defined requirements lead to project failure.
*   **Functional vs. Non-Functional:** Always distinguish between *what* the system does and *how well* it does it.
*   **Stakeholder involvement is crucial:** Continuously engage with stakeholders throughout the requirements process.
*   **Clarity and Unambiguity:** Requirements must be clear, precise, and have a single interpretation to avoid misunderstandings.
*   **Completeness:** All necessary functions and behaviors should be captured.
*   **Consistency:** Requirements should not contradict each other.
*   **Testability:** Requirements should be written in a way that they can be tested.
*   **Traceability:** It should be possible to trace a requirement back to its source (e.g., a stakeholder request) and forward to its implementation and test cases.
*   **Prioritization:** Not all requirements are equally important. Prioritization helps in managing scope and delivering value incrementally.
*   **Change Management:** Requirements often change. Have a process to manage and document these changes effectively.

---
This concludes the study notes for Functional Requirements within Module 1. Remember to practice identifying and documenting requirements for different scenarios.
