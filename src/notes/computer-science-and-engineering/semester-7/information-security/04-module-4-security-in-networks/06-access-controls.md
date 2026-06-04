---
title: "Access Controls"
subject: "INFORMATION SECURITY"
module: "Module 4: Security in Networks "
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162780fc9aa1fdbc8c1f8"
status: "completed"
scrapedAt: "2026-05-20T17:07:50.047Z"
---
# Information Security: Module 4 - Security in Networks: Access Controls

## Introduction to Access Controls

Access control is a fundamental pillar of information security. It's the mechanism that determines who or what can view, use, or perform actions on resources within a system or network. Without effective access controls, unauthorized individuals or entities could compromise data confidentiality, integrity, and availability.

### Learning Outcomes:

*   **Understand the purpose and importance of access controls.**
*   **Identify and differentiate between various access control models.**
*   **Explain the key components of access control systems.**
*   **Discuss common access control mechanisms and techniques.**
*   **Understand the principles of least privilege and separation of duties.**
*   **Recognize the importance of auditing and reviewing access controls.**

---

## 1. Purpose and Importance of Access Controls

**Key Concept:** Access control is about **enforcing policy**. It ensures that only authorized users or processes can access specific resources.

**Importance:**

*   **Confidentiality:** Prevents unauthorized disclosure of sensitive information.
    *   *Example:* A finance department employee should not have access to HR employee salary data.
*   **Integrity:** Protects data from unauthorized modification or deletion.
    *   *Example:* Only authorized administrators should be able to modify system configuration files.
*   **Availability:** Ensures that authorized users can access resources when they need them.
    *   *Example:* Preventing unauthorized users from overloading a critical server with requests, thereby denying service to legitimate users.
*   **Compliance:** Many regulations (e.g., GDPR, HIPAA, SOX) mandate specific access control requirements.
*   **Accountability:** By tracking who accessed what and when, access controls facilitate auditing and accountability.

---

## 2. Access Control Models

Access control models are frameworks that define how access is granted and managed. They provide a structured approach to implementing access control policies.

### 2.1. Discretionary Access Control (DAC)

*   **Definition:** The owner of a resource can decide who has access to it and what permissions they have.
*   **How it works:** The owner sets permissions for specific users or groups.
*   **Strengths:** Flexible, simple to understand, allows for granular control.
*   **Weaknesses:** Can be difficult to manage at scale, relies heavily on user discretion (potential for errors or malicious intent), can lead to "permission sprawl."
*   **Examples:**
    *   File system permissions on Windows or Linux (user, group, others).
    *   Sharing a document in Google Drive with specific individuals.
*   **Important Point:** **The owner has the ultimate say.**

### 2.2. Mandatory Access Control (MAC)

*   **Definition:** Access decisions are made by a central authority based on predefined security labels assigned to both subjects (users/processes) and objects (resources).
*   **How it works:**
    *   **Subjects** and **Objects** are assigned security labels (e.g., "Top Secret," "Confidential," "Unclassified").
    *   **Security Clearance** (for subjects) and **Classification Level** (for objects) are used.
    *   Access is granted based on rules (e.g., a subject with a higher clearance can read an object with a lower classification, but cannot write to it).
    *   Often involves a **Bell-LaPadula Model** (for confidentiality) or **Biba Model** (for integrity).
        *   **Bell-LaPadula (Confidentiality):**
            *   **Simple Security Property (No Read Up):** A subject can only read an object if its clearance level is greater than or equal to the object's classification level.
            *   ***-Property (No Write Down):** A subject can only write to an object if its clearance level is less than or equal to the object's classification level.
        *   **Biba (Integrity):**
            *   **Simple Integrity Property (No Read Down):** A subject can only read an object if its integrity level is less than or equal to the object's integrity level.
            *   **Integrity *-Property (No Write Up):** A subject can only write to an object if its integrity level is greater than or equal to the object's integrity level.
*   **Strengths:** Very high security, centralized control, difficult to bypass, good for environments with strict data classification requirements.
*   **Weaknesses:** Complex to implement and manage, can be restrictive and hinder productivity, requires constant re-labeling as data classification changes.
*   **Examples:** Military systems, highly secure government agencies.
*   **Important Point:** **Access is controlled by system-wide rules and labels, not by resource owners.**

### 2.3. Role-Based Access Control (RBAC)

*   **Definition:** Access is granted to users based on their roles within an organization, rather than directly assigning permissions to individual users.
*   **How it works:**
    1.  **Permissions** are assigned to **Roles**.
    2.  **Users** are assigned to **Roles**.
    3.  When a user accesses a resource, the system checks the permissions associated with the roles they belong to.
*   **Strengths:** Simplifies administration, improves consistency, easier to manage as user roles change or new users join, supports the principle of least privilege.
*   **Weaknesses:** Can become complex with many overlapping roles, requires careful planning of role hierarchies and permissions.
*   **Examples:**
    *   A "Manager" role might have permissions to approve timesheets, while an "Employee" role can only submit them.
    *   A "Database Administrator" role has full access to databases, while a "Web Developer" role only has read access to certain tables.
*   **Important Point:** **Access is based on "what you do," not "who you are."**

### 2.4. Attribute-Based Access Control (ABAC)

*   **Definition:** Access decisions are based on a combination of attributes associated with the user, the resource, the action, and the environment.
*   **How it works:** Policies are written to define conditions based on attributes.
    *   **Subject Attributes:** User's department, location, clearance level, security group.
    *   **Resource Attributes:** Data classification, project name, file type.
    *   **Action Attributes:** Read, write, delete, execute.
    *   **Environment Attributes:** Time of day, IP address, device type.
*   **Strengths:** Highly flexible and dynamic, can implement complex, context-aware access policies, scalable.
*   **Weaknesses:** Can be very complex to design, implement, and manage the attribute infrastructure, requires robust policy definition and enforcement mechanisms.
*   **Examples:**
    *   Allowing a user to access a financial report only if they are in the finance department, it's during business hours, and they are accessing from a company-issued laptop.
    *   Granting read access to a document if the user's security clearance is "Confidential" AND the document's sensitivity is "Confidential" AND the access is requested from a trusted network.
*   **Important Point:** **Access is determined by a rich set of attributes and policies.**

---

## 3. Key Components of Access Control Systems

Access control systems typically involve several core components working together.

*   **Subjects:** Entities that request access to resources (e.g., users, applications, services, processes).
*   **Objects:** Resources that are being protected (e.g., files, databases, network devices, applications, services).
*   **Access Control Policy:** A set of rules that defines what access is allowed, to whom, and under what conditions. This is the "brain" of the system.
*   **Access Control Mechanism/Enforcer:** The component that enforces the access control policy. This could be an operating system, a firewall, an application, or a dedicated access control system.
*   **Authentication:** The process of verifying the identity of a subject (e.g., username/password, multi-factor authentication). **Crucial precursor to authorization.**
*   **Authorization:** The process of determining what actions a verified subject is allowed to perform on an object, based on the access control policy. This is the core of access control.

---

## 4. Common Access Control Mechanisms and Techniques

These are the practical ways access controls are implemented.

### 4.1. Authentication Methods

*   **Something You Know:**
    *   **Passwords:** Most common, but vulnerable to weak passwords and brute-force attacks.
    *   **PINs:** Similar to passwords, often used for shorter access.
*   **Something You Have:**
    *   **Smart Cards:** Physical cards with embedded chips containing credentials.
    *   **Hardware Tokens:** Devices that generate one-time passwords (OTP) or cryptographic keys.
    *   **Mobile Devices:** Used for OTP generation, push notifications for approval.
*   **Something You Are:**
    *   **Biometrics:** Fingerprint scanning, facial recognition, iris scans, voice recognition.
*   **Multi-Factor Authentication (MFA):** Combines two or more authentication factors from different categories.
    *   *Example:* Logging in with a password (something you know) and a code from a mobile authenticator app (something you have).
    *   **Important Point:** **MFA significantly enhances security.**

### 4.2. Authorization Mechanisms

*   **Access Control Lists (ACLs):**
    *   **Definition:** A list of permissions attached to an object, specifying which subjects (users or groups) are granted access and what operations (read, write, execute) they are allowed to perform.
    *   **How it works:** When a subject requests access, the system checks the ACL associated with the object.
    *   *Example:* A file ACL might state: "User Alice: Read/Write; Group 'Developers': Read; Others: None."
    *   **Important Point:** **Directly maps subjects to permissions on objects.**
*   **Capabilities:**
    *   **Definition:** A token or ticket that grants a subject the right to perform a specific action on a specific object. The capability itself proves the right to access.
    *   **How it works:** The subject presents the capability to the object or enforcer. The enforcer verifies the capability without needing to consult a central list.
    *   *Example:* A signed digital ticket that allows a user to access a specific web page.
    *   **Strengths:** Can be more efficient for distributed systems, reduces reliance on central ACLs.
    *   **Weaknesses:** Managing and revoking capabilities can be complex.
*   **Role-Based Access Control (RBAC) Implementation:** As discussed in models, this is a mechanism as well.
*   **Attribute-Based Access Control (ABAC) Implementation:** Also a mechanism, enforcing policies based on attributes.

---

## 5. Principles of Access Control

These are overarching principles that guide the effective design and implementation of access controls.

### 5.1. Principle of Least Privilege

*   **Definition:** Granting users or processes only the minimum necessary permissions to perform their required tasks, and no more.
*   **Goal:** Limit the damage that can be caused by a compromised account or an accidental misstep.
*   **How to achieve it:**
    *   Assign roles with specific, limited permissions.
    *   Regularly review user permissions.
    *   Avoid granting administrative privileges unless absolutely necessary.
    *   Use default configurations that are restrictive.
*   **Example:** A customer service representative should only have access to customer contact information and order history, not to system administration tools or financial records.
*   **Important Point:** **"Need to know" and "need to do" basis.**

### 5.2. Separation of Duties

*   **Definition:** Dividing a task or a critical process into multiple steps, with each step performed by a different individual or group.
*   **Goal:** Prevent a single person from having complete control over a sensitive process, thus reducing the risk of fraud, errors, or malicious activity.
*   **How to achieve it:**
    *   Separate roles for initiating, approving, and executing transactions.
    *   Separate roles for development, testing, and deployment.
    *   Separate roles for system administration and auditing.
*   **Example:**
    *   One person can create a payment request, but a different person must approve it before it's processed.
    *   A programmer should not be able to deploy their code directly to production without an independent review and approval process.
*   **Important Point:** **No single point of control for critical functions.**

---

## 6. Auditing and Reviewing Access Controls

Access control is not a "set it and forget it" process. Regular auditing and review are essential for maintaining security.

*   **Purpose of Auditing:**
    *   Detect unauthorized access attempts.
    *   Identify policy violations.
    *   Ensure compliance with regulations.
    *   Gather evidence for incident response.
    *   Verify the effectiveness of existing controls.
*   **What to Audit:**
    *   **Login attempts:** Successful and failed.
    *   **Access to sensitive resources:** Who accessed what, when, and from where.
    *   **Permission changes:** Who made changes to user accounts or access rights.
    *   **Privileged account usage:** Access and actions performed by administrators.
    *   **Policy changes:** Modifications to access control policies.
*   **Reviewing Access Controls:**
    *   **Regularly review user accounts:** Deactivate or remove accounts for employees who have left the organization.
    *   **Review assigned permissions:** Ensure that permissions are still appropriate for current roles.
    *   **Review group memberships:** Ensure users are in the correct groups.
    *   **Perform periodic access control audits:** Verify that the implemented controls align with the organization's policies and best practices.
*   **Key Tools/Techniques:**
    *   **Log management systems (SIEM - Security Information and Event Management):** Centralize and analyze security logs.
    *   **Access control management tools:** Software to manage user identities, roles, and permissions.
    *   **Vulnerability scanners:** Can identify misconfigured access controls.
*   **Important Point:** **Continuous monitoring and periodic validation are crucial.**

---

## Practice Questions

1.  **What is the primary goal of the principle of least privilege?**
    *   A. To ensure all users have equal access to resources.
    *   B. To grant users only the necessary permissions to perform their tasks.
    *   C. To restrict access based on the owner's discretion.
    *   D. To allow anyone to access any resource at any time.

2.  **Which access control model relies on security labels assigned to both subjects and objects, enforced by a central authority?**
    *   A. Discretionary Access Control (DAC)
    *   B. Role-Based Access Control (RBAC)
    *   C. Mandatory Access Control (MAC)
    *   D. Attribute-Based Access Control (ABAC)

3.  **Giving a user a password and a unique code sent to their phone is an example of:**
    *   A. Single-factor authentication
    *   B. Multi-factor authentication (MFA)
    *   C. Authorization
    *   D. Separation of duties

4.  **Describe a scenario where the separation of duties principle would be applied in a financial transaction process.**

5.  **Explain the difference between authentication and authorization.**

---

## Answers to Practice Questions

1.  **Answer: B. To grant users only the necessary permissions to perform their tasks.**
    *   *Explanation:* This is the core definition of the principle of least privilege.

2.  **Answer: C. Mandatory Access Control (MAC)**
    *   *Explanation:* MAC is characterized by security labels and centralized enforcement, distinguishing it from DAC (owner-based), RBAC (role-based), and ABAC (attribute-based).

3.  **Answer: B. Multi-factor authentication (MFA)**
    *   *Explanation:* MFA requires two or more distinct factors of authentication (something you know - password, something you have - phone code) to verify identity.

4.  **Answer:** A scenario applying separation of duties in financial transactions could involve:
    *   **Initiation:** An accounts payable clerk creates a new invoice request and enters payment details.
    *   **Approval:** A finance manager reviews the invoice, verifies its legitimacy, and approves the payment.
    *   **Execution:** A separate accounting system or treasury department processes the payment based on the approved request.
    This prevents a single clerk from creating and approving a fraudulent payment without oversight.

5.  **Answer:**
    *   **Authentication** is the process of **verifying the identity** of a user or entity. It answers the question, "Who are you?" Examples include logging in with a username and password or using a fingerprint scanner.
    *   **Authorization** is the process of **determining what actions** an authenticated user or entity is allowed to perform on specific resources. It answers the question, "What are you allowed to do?" This is based on the access control policies and permissions granted after authentication.

---

## Important Points to Remember

*   **Access Control is a core security function:** It's essential for protecting data confidentiality, integrity, and availability.
*   **Models provide structure:** DAC, MAC, RBAC, and ABAC offer different approaches to managing access.
*   **RBAC is widely used:** Due to its administrative efficiency and scalability.
*   **Least Privilege is paramount:** Limit permissions to what is absolutely necessary to reduce risk.
*   **Separation of Duties prevents fraud and errors:** Critical for sensitive processes.
*   **Authentication ≠ Authorization:** Authentication verifies identity; authorization grants permissions.
*   **MFA is a strong defense:** Against compromised credentials.
*   **Auditing and review are continuous:** Access controls need constant monitoring and validation to remain effective.
