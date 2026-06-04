---
title: "Access Control Mechanisms -   Access Control"
subject: "INFORMATION SECURITY"
module: "Module 1: Introduction to Information Security "
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162780fc9aa1fdbc8c1d9"
status: "completed"
scrapedAt: "2026-05-20T17:07:30.278Z"
---
# INFORMATION SECURITY

## Module 1: Introduction to Information Security

### Topic: Access Control Mechanisms - Access Control

---

### **1. Introduction to Access Control**

Access control is a fundamental security concept that governs **what** actions a user or entity can perform on **what** resources within a system. It's about ensuring that only authorized individuals or processes can access, modify, or delete sensitive information.

#### **Key Concepts & Definitions:**

*   **Subject:** The entity requesting access to a resource. This can be a user, a process, or another system.
    *   *Example:* A user logging into their email account.
*   **Object:** The resource that is being protected. This can be data, files, applications, hardware, or any other system component.
    *   *Example:* An email message, a document, a printer.
*   **Action/Operation:** The specific type of access being requested.
    *   *Examples:* Read, write, execute, delete, print.
*   **Policy:** A set of rules that define what subjects are allowed to perform what actions on which objects.
    *   *Example:* "Employees are allowed to read documents in the 'Project Alpha' folder but only managers can write to it."
*   **Authorization:** The process of determining whether a subject is permitted to perform a requested action on an object, based on the established policy.
*   **Authentication:** The process of verifying the identity of a subject before granting access. (Often a prerequisite for authorization).
    *   *Example:* Entering a username and password.

#### **Importance of Access Control:**

*   **Confidentiality:** Prevents unauthorized disclosure of sensitive information.
*   **Integrity:** Protects data from unauthorized modification or deletion.
*   **Availability:** Ensures that authorized users can access resources when needed.
*   **Compliance:** Helps organizations meet regulatory requirements (e.g., GDPR, HIPAA).
*   **Risk Mitigation:** Reduces the likelihood of security breaches and associated damages.

---

### **2. Principles of Access Control**

Effective access control is built upon several core principles:

#### **2.1 Least Privilege**

*   **Definition:** Granting subjects only the minimum level of access necessary to perform their assigned tasks, and nothing more.
*   **Goal:** To limit the potential damage that can be caused by an accidental misstep or a compromised account.
*   **Example:** A data entry clerk might only have "read" and "write" access to specific database fields, while a database administrator has "full" control.

#### **2.2 Separation of Duties**

*   **Definition:** Dividing critical tasks into multiple steps, with each step performed by a different individual. No single person should have control over an entire critical process.
*   **Goal:** To prevent fraud, errors, and abuse of power by requiring collaboration and oversight.
*   **Example:** One person can initiate a financial transaction, while another person must approve it.

#### **2.3 Need-to-Know**

*   **Definition:** Access to information is granted only if it is necessary for an individual to perform their job function. This is a more granular concept than least privilege, focusing on specific data items.
*   **Goal:** To further restrict access to sensitive information, even if an individual technically has the privilege to access it.
*   **Example:** A support technician may have access to customer contact information but not to their financial transaction history, even if both are stored in the same database.

---

### **3. Types of Access Control Models**

Different models dictate how access control policies are implemented and enforced.

#### **3.1 Discretionary Access Control (DAC)**

*   **Description:** The owner of an object can decide who can access it and what permissions they have.
*   **Mechanism:** Access Control Lists (ACLs) are commonly used to manage permissions. Each object has an ACL that lists the subjects and their allowed actions.
*   **Pros:**
    *   Flexible and easy to manage for individual users.
    *   Owner has full control.
*   **Cons:**
    *   Can be difficult to manage in large, complex systems.
    *   Security can be compromised if owners grant inappropriate access.
    *   Subjectivity can lead to inconsistencies.
*   **Example:** In Windows File Explorer, a user can right-click a file, go to "Properties," then "Security," and manually grant or deny access to specific users or groups.

#### **3.2 Mandatory Access Control (MAC)**

*   **Description:** Access decisions are made by a central authority based on security labels assigned to subjects and objects.
*   **Mechanism:**
    *   **Labels:** Subjects (users) and objects (files) are assigned security labels (e.g., "Top Secret," "Secret," "Confidential," "Unclassified").
    *   **Rules:** A set of rules dictates what combinations of labels allow access. A common rule is the **Bell-LaPadula model**:
        *   **Simple Security Property:** A subject cannot read an object with a higher security level than its own. (No Read Up).
        *   **\*-Property (Star Property):** A subject cannot write to an object with a lower security level than its own. (No Write Down).
*   **Pros:**
    *   Enforces strict security policies.
    *   Provides a high level of assurance.
*   **Cons:**
    *   Can be rigid and difficult to manage.
    *   May hinder productivity if not carefully implemented.
*   **Example:** Military systems where information is classified and access is strictly controlled based on clearance levels. A soldier with a "Secret" clearance can read documents labeled "Secret" or "Confidential," but cannot read "Top Secret" documents, nor can they write to "Confidential" documents (they can only write to "Secret" or higher if they have the *write* permission for that level).

#### **3.3 Role-Based Access Control (RBAC)**

*   **Description:** Access permissions are assigned to roles, and users are assigned to roles. Access is then granted based on the roles a user holds.
*   **Mechanism:**
    *   **Users:** Individuals who need access.
    *   **Roles:** Job functions or responsibilities (e.g., "Administrator," "Editor," "Viewer").
    *   **Permissions:** Specific actions that can be performed on objects (e.g., "read," "write," "delete").
    *   **Role-Assignment:** Users are assigned to one or more roles.
    *   **Permission-Assignment:** Permissions are assigned to roles.
*   **Pros:**
    *   Simplifies administration as permissions are managed at the role level.
    *   Scalable and easier to manage in large organizations.
    *   Promotes consistency and reduces errors.
*   **Cons:**
    *   Requires careful planning and definition of roles.
    *   Can become complex if roles are not well-defined or if there are many overlapping roles.
*   **Example:** A web application where:
    *   **Role:** "Editor"
    *   **Permissions:** "Create Article," "Edit Article," "Delete Article"
    *   **User:** Alice is assigned the "Editor" role. Therefore, Alice can create, edit, and delete articles.

#### **3.4 Attribute-Based Access Control (ABAC)**

*   **Description:** Access is granted based on policies that combine attributes of the subject, object, action, and the environment.
*   **Mechanism:** Policies are defined using "if-then" statements that evaluate various attributes.
    *   *Subject Attributes:* User's role, department, security clearance, location.
    *   *Object Attributes:* File's classification, creation date, sensitivity level.
    *   *Action Attributes:* Read, write, print.
    *   *Environmental Attributes:* Time of day, location, device used.
*   **Pros:**
    *   Highly granular and flexible.
    *   Can adapt to dynamic changes in users, resources, and environments.
    *   Enables fine-grained control.
*   **Cons:**
    *   Can be very complex to design and implement.
    *   Requires robust attribute management and policy evaluation engines.
*   **Example:** "Allow users in the 'Finance' department (subject attribute) to access 'Financial Reports' (object attribute) between 9 AM and 5 PM on weekdays (environment attribute) to 'read' the data (action attribute)."

---

### **4. Access Control Components**

Key components that support access control mechanisms:

#### **4.1 Authentication Services**

*   **Purpose:** Verifies the identity of the subject.
*   **Examples:**
    *   **Passwords:** Simple authentication.
    *   **Multi-Factor Authentication (MFA):** Combines two or more factors (e.g., something you know, something you have, something you are).
    *   **Biometrics:** Fingerprint scanners, facial recognition.
    *   **Smart Cards/Tokens:** Physical devices.

#### **4.2 Authorization Services**

*   **Purpose:** Grants or denies access based on authentication and policy.
*   **Examples:**
    *   **Access Control Lists (ACLs):** Stored with each object.
    *   **Policy Decision Points (PDPs):** Evaluate policies to make access decisions.
    *   **Policy Enforcement Points (PEPs):** Enforce the decisions made by PDPs.

#### **4.3 Auditing and Logging**

*   **Purpose:** Records all access attempts, successful or failed, for review and accountability.
*   **Importance:**
    *   Detecting unauthorized access attempts.
    *   Investigating security incidents.
    *   Ensuring compliance.
*   **Examples of logged events:** Login attempts (successful/failed), file access, privilege escalation.

---

### **5. Practice Questions & Exercises**

**Question 1:**
Which access control model grants the owner of an object the ability to decide who can access it?
A. Mandatory Access Control (MAC)
B. Role-Based Access Control (RBAC)
C. Discretionary Access Control (DAC)
D. Attribute-Based Access Control (ABAC)

**Question 2:**
The principle of "Least Privilege" means:
A. Users can access all resources by default.
B. Users are only granted the minimum permissions necessary to perform their tasks.
C. Access is determined by the owner of the resource.
D. Access is based on security labels assigned to subjects and objects.

**Question 3:**
In a web application, if a user is assigned the "Editor" role, and the "Editor" role has permissions to "Create Article" and "Edit Article," what type of access control model is most likely being used?
A. Mandatory Access Control (MAC)
B. Discretionary Access Control (DAC)
C. Role-Based Access Control (RBAC)
D. Attribute-Based Access Control (ABAC)

**Question 4:**
Provide an example of how "Separation of Duties" can be implemented in a financial system.

**Question 5:**
Explain the difference between "Authentication" and "Authorization."

---

### **6. Answers to Practice Questions**

**Answer 1:**
C. Discretionary Access Control (DAC)

**Answer 2:**
B. Users are only granted the minimum permissions necessary to perform their tasks.

**Answer 3:**
C. Role-Based Access Control (RBAC)

**Answer 4:**
In a financial system, one employee might be authorized to initiate a payment request (e.g., create a payment order), but another, separate employee (e.g., a manager) must approve the payment before it can be executed. This ensures that no single person can both create and approve a payment, preventing potential fraud.

**Answer 5:**
*   **Authentication:** This is the process of verifying the identity of a user or entity. It answers the question, "Are you who you say you are?" Examples include entering a username and password, or using a fingerprint scan.
*   **Authorization:** This is the process of determining what actions an authenticated user is permitted to perform on a specific resource. It answers the question, "What are you allowed to do?" This is based on access control policies.

---

### **7. Important Points to Remember**

*   **Access control is a cornerstone of information security.**
*   **Least Privilege and Separation of Duties are crucial principles for robust access control.**
*   **DAC offers flexibility but can be harder to manage at scale.**
*   **MAC provides strong security but can be rigid.**
*   **RBAC simplifies administration and promotes consistency.**
*   **ABAC offers the highest granularity but is complex to implement.**
*   **Authentication must precede authorization.**
*   **Auditing and logging are essential for monitoring and accountability.**

---
