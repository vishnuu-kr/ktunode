---
title: "Access Control"
subject: "SECURE COMMUNICATION"
module: "Module 1: Introduction and Classic Encryption Techniques:"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c460b09ce205780fee68"
status: "completed"
scrapedAt: "2026-05-23T18:02:43.454Z"
---
# SECURE COMMUNICATION: Module 1 - Introduction and Classic Encryption Techniques

## Topic: Access Control

---

### Learning Outcomes Covered:

*   **Explain network security services and mechanisms and the types of attacks they are designed for and apply the concepts of modular arithmetic, Euclidean algorithm, polynomial arithmetic.** (CO1) - While this topic primarily focuses on access control, understanding fundamental security services and mechanisms provides context. The underlying principles of secure access often rely on cryptographic primitives that utilize modular arithmetic and related concepts, though direct application might be more prominent in later modules.

---

### 1. Introduction to Access Control

Access control is a fundamental security mechanism that governs what subjects (e.g., users, processes) can do to objects (e.g., files, devices, network resources). In essence, it's about ensuring that only authorized entities can access and interact with specific resources in defined ways.

**Key Concepts:**

*   **Subject:** An active entity that requests access to an object. This can be a user, a process, or even another system.
*   **Object:** A passive entity that contains information or provides a service. Examples include files, databases, printers, network sockets, and applications.
*   **Access Right/Privilege:** The specific action a subject is permitted to perform on an object. Common access rights include:
    *   **Read:** View the content of an object.
    *   **Write:** Modify or create content within an object.
    *   **Execute:** Run a program or script.
    *   **Delete:** Remove an object.
    *   **Append:** Add data to the end of an object.
    *   **Control:** Manage access rights for an object.
*   **Policy:** A set of rules that define which subjects have what access rights to which objects.

**Why is Access Control Important?**

Access control is crucial for:

*   **Confidentiality:** Preventing unauthorized disclosure of sensitive information.
*   **Integrity:** Ensuring that data is not modified or deleted by unauthorized entities.
*   **Availability:** Guaranteeing that authorized users can access resources when needed, by preventing unauthorized actions that could disrupt service (e.g., denial-of-service by unauthorized modification).
*   **Accountability:** Tracking who accessed what and when, which is essential for auditing and incident response.

---

### 2. Types of Access Control Models

Different models dictate how access control policies are implemented and enforced.

#### 2.1. Discretionary Access Control (DAC)

*   **Description:** In DAC, the owner of an object can determine who has access to it and what privileges they possess. This is a flexible model but can be difficult to manage in complex environments.
*   **Mechanism:** Access Control Lists (ACLs) are commonly used. An ACL is associated with each object and contains entries (Access Control Entries or ACEs) that specify a subject and the access rights granted to that subject.
    *   **Example:** A file owner might grant "read" and "write" access to User A, "read-only" access to User B, and no access to User C.
*   **Strengths:**
    *   Flexibility: Owners have control.
    *   Simplicity for basic use cases.
*   **Weaknesses:**
    *   Difficult to manage at scale.
    *   Can lead to unintended data sharing.
    *   "Confused deputy" problem: A trusted program acting on behalf of an unauthorized user might gain unauthorized access.
*   **Textbook Reference:** Stallings (4th Ed., 2006) discusses DAC in the context of operating system security and file access control.

#### 2.2. Mandatory Access Control (MAC)

*   **Description:** In MAC, access decisions are based on system-wide policies enforced by the system, rather than individual object owners. Subjects and objects are assigned security labels, and access is granted only if the subject's security label dominates the object's security label according to predefined rules.
*   **Mechanism:**
    *   **Security Labels:** Each subject and object is assigned a security label, typically consisting of a **classification level** (e.g., Unclassified, Confidential, Secret, Top Secret) and a **set of categories** (e.g., Project Alpha, Project Beta).
    *   **Dominance Rule:** A subject $S$ can access an object $O$ if and only if $S$'s label dominates $O$'s label. The dominance rule is typically defined as follows:
        *   Subject $S$ can read object $O$ if and only if the classification level of $S$ is greater than or equal to the classification level of $O$, and all categories in $O$'s label are also present in $S$'s label. (e.g., Secret/ProjectAlpha can read Confidential/ProjectAlpha)
        *   Subject $S$ can write to object $O$ if and only if the classification level of $S$ is less than or equal to the classification level of $O$, and all categories in $S$'s label are also present in $O$'s label. (e.g., Confidential/ProjectAlpha can write to Secret/ProjectAlpha)
*   **Example:**
    *   Subject A: Classification: Secret, Categories: {Project Alpha}
    *   Subject B: Classification: Confidential, Categories: {Project Alpha, Project Beta}
    *   Object X: Classification: Confidential, Categories: {Project Alpha}
    *   Object Y: Classification: Secret, Categories: {Project Alpha}
    *   Subject A can read Object X (Secret >= Confidential, {Project Alpha} is subset of {Project Alpha}).
    *   Subject A can write to Object Y (Secret <= Secret, {Project Alpha} is subset of {Project Alpha}).
    *   Subject B cannot read Object Y (Confidential < Secret).
    *   Subject A cannot write to Object X (Secret > Confidential).
*   **Strengths:**
    *   High level of security.
    *   Enforces system-wide security policy.
    *   Resistant to the "confused deputy" problem.
*   **Weaknesses:**
    *   Can be rigid and hinder productivity.
    *   Requires careful management of labels.
    *   Complexity in implementation and administration.
*   **Textbook Reference:** Stallings (4th Ed., 2006) covers MAC, often referencing military security classifications as a common example. This model is foundational for understanding multilevel security.

#### 2.3. Role-Based Access Control (RBAC)

*   **Description:** In RBAC, permissions are associated with roles, and users are assigned to roles. Instead of directly assigning permissions to users, administrators assign permissions to roles, and then users are assigned to those roles. This simplifies management by grouping common access requirements.
*   **Mechanism:**
    *   **Users:** Individuals performing actions.
    *   **Roles:** A collection of permissions that represent a job function or responsibility.
    *   **Permissions:** Specific access rights (read, write, execute) on objects.
    *   **Role Assignment:** Users are assigned to one or more roles.
    *   **Permission Assignment:** Permissions are assigned to roles.
*   **Example:**
    *   **Role:** "Accountant"
    *   **Permissions for Accountant:** Read access to "Financial Reports," Write access to "Ledger," Read access to "Customer Database."
    *   **User Alice:** Assigned to the "Accountant" role. Therefore, Alice inherits the permissions of an Accountant.
    *   **User Bob:** Assigned to "Manager" role (with different permissions) and "Accountant" role. Bob has permissions for both roles.
*   **Strengths:**
    *   Simplified administration, especially in large organizations.
    *   Easier to audit and manage permissions.
    *   Reduces the risk of misconfigurations.
*   **Weaknesses:**
    *   May not be granular enough for highly specific access requirements.
    *   Can become complex with many roles and interdependencies.
*   **Textbook Reference:** Forouzan (2008) likely covers RBAC as a modern and practical access control method. Stallings might also touch upon it as an evolution of access control mechanisms.

#### 2.4. Attribute-Based Access Control (ABAC)

*   **Description:** ABAC is a more dynamic and fine-grained access control model. Access decisions are based on evaluating policies against a set of attributes associated with the subject, object, action, and the environment.
*   **Mechanism:** Policies are defined using logical expressions that combine attributes.
    *   **Subject Attributes:** Role, department, clearance level, user ID.
    *   **Object Attributes:** Sensitivity level, data type, owner.
    *   **Action Attributes:** Read, write, delete, approve.
    *   **Environment Attributes:** Time of day, location, network connection type.
*   **Example:** A policy could state: "Allow access to 'Confidential Financial Data' (object attribute: sensitivity=Confidential, data_type=Financial) if the user is in the 'Finance' department (subject attribute: department=Finance), it is during business hours (environment attribute: time of day=business hours), and the action is 'read' (action attribute: action=read)."
*   **Strengths:**
    *   Highly flexible and scalable.
    *   Enables fine-grained, context-aware access control.
    *   Policies can be managed independently of users and objects.
*   **Weaknesses:**
    *   Complexity in policy definition and management.
    *   Requires robust attribute management and policy enforcement.
*   **Textbook Reference:** While not a "classic" technique, ABAC is a significant modern approach that modern textbooks like Stallings (later editions, or discussions on advanced topics) might cover. Forouzan might also discuss its principles.

---

### 3. Access Control Mechanisms in Practice

Access control is implemented through various mechanisms at different layers of a system:

*   **Operating System Level:** File permissions (read, write, execute for owner, group, others), user authentication (passwords, biometrics), process isolation.
*   **Network Level:** Firewalls (packet filtering based on IP addresses, ports), VPNs (authentication and encryption for secure tunnels), Network Access Control (NAC) systems.
*   **Application Level:** User logins, role-based permissions within applications, data validation.
*   **Database Level:** User privileges for tables, views, and specific operations.

---

### 4. Relation to Course Outcomes

*   **CO1 (Knowledge Level: K3): Explain network security services and mechanisms and the types of attacks they are designed for and apply the concepts of modular arithmetic, Euclidean algorithm, polynomial arithmetic.**
    *   **Connection:** Access control is a core network security service. While this topic itself doesn't deeply delve into the mathematical underpinnings (like modular arithmetic), the *enforcement* of access control, especially in more advanced cryptographic schemes for authentication and authorization (covered in later modules), will heavily rely on these mathematical concepts. For instance, checking a digital signature (a form of authorization) involves modular exponentiation. Understanding how access control *works* is a prerequisite for appreciating how cryptographic mechanisms *secure* that access.
*   **CO2 (Knowledge Level: K3): Illustrate the principles of modern symmetric ciphers like Data Encryption Standard and Advanced Encryption Standard.**
    *   **Connection:** Symmetric ciphers are used to protect data *in transit* or *at rest*. Access control determines *who* is allowed to access that encrypted data. For example, an authorized user might need a key (often managed through cryptographic key management systems) to decrypt data, which is an access control decision at the data layer.
*   **CO3 (Knowledge Level: K2): Outline the concepts of public key cryptography, RSA algorithm, key distribution, and management for public key systems.**
    *   **Connection:** Public key cryptography is fundamental to modern authentication and authorization. Digital certificates, which are used to verify identities and grant access, rely on public key infrastructure. Access control policies might be enforced by verifying digital signatures or ensuring that a user possesses the correct private key to decrypt a session key.
*   **CO4 (Knowledge Level: K2): Explain the requirements for authentication and the types of functions used to produce an authenticator.**
    *   **Connection:** Access control is intrinsically linked to authentication. Before granting access to a resource, the system must authenticate the identity of the subject. Access control policies are then applied based on this authenticated identity. For example, a user logs in (authentication), and then the system checks their role and permissions (access control) to determine what files they can read.

---

### 5. Important Points to Remember

*   Access control is about **who** can do **what** to **which** resources.
*   The core components are **subjects**, **objects**, **access rights**, and **policies**.
*   **DAC** is flexible but owner-dependent; **MAC** is rigid but centrally controlled and more secure for high-assurance systems.
*   **RBAC** simplifies administration by using roles as intermediaries.
*   **ABAC** offers fine-grained, context-aware control through attribute evaluation.
*   Access control mechanisms are enforced at various system levels (OS, network, application).
*   Authentication is a prerequisite for most access control decisions.

---

### 6. Practice Questions

**Question 1:**
Which access control model allows the owner of an object to decide who can access it and what permissions they have?
a) Mandatory Access Control (MAC)
b) Discretionary Access Control (DAC)
c) Role-Based Access Control (RBAC)
d) Attribute-Based Access Control (ABAC)

**Question 2:**
In Mandatory Access Control (MAC), access is granted if the subject's security label ____ the object's security label.
a) is identical to
b) is less than
c) dominates
d) is unrelated to

**Question 3:**
What is a primary benefit of Role-Based Access Control (RBAC) over Discretionary Access Control (DAC) in large organizations?
a) Greater flexibility for individual users.
b) Simpler administration and management of permissions.
c) Increased reliance on individual object owners.
d) Reduced need for authentication.

**Question 4:**
Explain the concept of a "security label" in the context of Mandatory Access Control (MAC). Provide an example of a read access scenario.

**Question 5:**
Consider an application that allows different types of users (e.g., administrators, editors, viewers) to access different parts of a website.
a) Which access control model would be most suitable for managing these permissions, and why?
b) Describe how this model would be implemented in terms of subjects, roles, and permissions.

---

### 7. Answers to Practice Questions

**Answer 1:**
b) Discretionary Access Control (DAC)
*   **Explanation:** DAC grants ownership and control over access rights to the owner of the object.

**Answer 2:**
c) dominates
*   **Explanation:** The dominance rule in MAC dictates that a subject can access an object if its security label dominates the object's label, based on classification levels and categories.

**Answer 3:**
b) Simpler administration and management of permissions.
*   **Explanation:** RBAC consolidates permissions into roles, making it easier to assign and revoke access for groups of users compared to managing individual user permissions in DAC.

**Answer 4:**
A security label in MAC is an attribute assigned to both subjects and objects that defines their security clearance and potentially their compartment or category affiliations. It's typically composed of a **classification level** (e.g., Confidential, Secret) and a set of **categories** (e.g., Project Alpha, Project Beta).

**Example of a read access scenario:**
*   **Subject S:** Security Label = {Classification: Secret, Categories: {Project Alpha}}
*   **Object O:** Security Label = {Classification: Confidential, Categories: {Project Alpha}}
*   **Access Rule for Read:** Subject's classification must be greater than or equal to the object's classification, AND all of the object's categories must be present in the subject's categories.
*   **Result:** Subject S **can** read Object O because Secret (S) >= Confidential (O), and {Project Alpha} (O) is a subset of {Project Alpha} (S).

**Answer 5:**
a) **Role-Based Access Control (RBAC)** would be most suitable.
*   **Reasoning:** RBAC is ideal for managing different user types with distinct access requirements to different system resources (parts of a website). It simplifies administration by grouping users with similar job functions into roles and assigning permissions to these roles. Instead of assigning permissions directly to each administrator, editor, or viewer, you create roles for "Administrator," "Editor," and "Viewer" and assign the appropriate permissions to each role. Then, you simply assign users to these roles.

b) **Implementation in RBAC:**
*   **Subjects:** The individual users who log in to the website (e.g., User John, User Jane).
*   **Roles:**
    *   **Administrator:** Permissions: Full access to all website content, ability to manage user roles, ability to edit site configuration.
    *   **Editor:** Permissions: Ability to create, edit, and delete articles and blog posts, view website statistics.
    *   **Viewer:** Permissions: Read-only access to published articles and blog posts.
*   **Permissions:**
    *   `create_article`, `edit_article`, `delete_article`, `view_statistics`, `access_admin_panel`, `manage_users`, `view_content`, `edit_site_config`.
*   **Assignment:**
    *   User John is assigned the **Administrator** role.
    *   User Jane is assigned the **Editor** role.
    *   User Peter is assigned the **Viewer** role.

This structure ensures that when John logs in, he's recognized as an Administrator and granted all Administrator permissions. Jane, as an Editor, gets different permissions, and Peter, as a Viewer, has the most restricted access. This is much easier to manage than if each user had direct permissions assigned to them.

---
---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
