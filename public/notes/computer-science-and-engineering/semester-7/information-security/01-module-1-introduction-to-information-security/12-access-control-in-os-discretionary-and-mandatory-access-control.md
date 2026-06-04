---
title: "Access control in OS-Discretionary and Mandatory access control"
subject: "INFORMATION SECURITY"
module: "Module 1: Introduction to Information Security "
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162780fc9aa1fdbc8c1db"
status: "completed"
scrapedAt: "2026-05-20T17:07:31.675Z"
---
# INFORMATION SECURITY: Module 1 - Introduction to Information Security
## Topic: Access Control in OS - Discretionary and Mandatory Access Control

---

### **1. Introduction to Access Control**

**Key Concept:** Access control is a fundamental security mechanism in operating systems (OS) that governs which users or processes can access which resources (files, directories, devices, etc.) and what operations they can perform on those resources. It's about enforcing the principle of least privilege.

**Why is Access Control Important?**
*   **Confidentiality:** Prevents unauthorized disclosure of sensitive information.
*   **Integrity:** Protects data from unauthorized modification or deletion.
*   **Availability:** Ensures authorized users can access resources when needed.
*   **Compliance:** Helps organizations meet regulatory requirements (e.g., GDPR, HIPAA).

**Core Components of Access Control:**
*   **Subject:** The entity requesting access to a resource (e.g., a user, a process, a service).
*   **Object:** The resource being accessed (e.g., a file, a database, a network port).
*   **Action/Operation:** The type of access requested (e.g., read, write, execute, delete, create).
*   **Permissions:** The rules that define what actions a subject can perform on an object.

---

### **2. Types of Access Control Models**

Operating systems primarily implement access control using two main models:
*   **Discretionary Access Control (DAC)**
*   **Mandatory Access Control (MAC)**

---

### **3. Discretionary Access Control (DAC)**

**Definition:** In Discretionary Access Control (DAC), the **owner** of an object has the discretion to grant or revoke access to that object for other subjects. The owner has full control over who can access their resources and what they can do with them.

**Key Concepts:**
*   **Owner-centric:** The owner of the resource dictates access permissions.
*   **Flexibility:** Allows for fine-grained control and easy sharing of resources among trusted individuals.
*   **Trust-based:** Relies on the owner's judgment and trust in granting access.
*   **Commonly Used:** The most prevalent access control model in general-purpose operating systems like Windows and Linux.

**How it Works:**
*   Typically implemented using Access Control Lists (ACLs) or Access Control Matrices.
*   **Access Control List (ACL):** Associated with each **object**. It lists subjects and the permissions they have for that object.
    *   *Example:* A file `report.txt` might have an ACL that states:
        *   User `Alice`: Read, Write
        *   Group `Editors`: Read
        *   Everyone Else: No Access
*   **Access Control Matrix:** A conceptual table where rows represent subjects and columns represent objects. Each cell indicates the permissions a subject has for an object. While conceptual, it's often implemented using ACLs or capabilities.

**Advantages of DAC:**
*   **Simplicity:** Relatively easy to understand and implement for users.
*   **Flexibility:** Allows users to manage their own data and share it as needed.
*   **User Control:** Empowers users to control access to their creations.

**Disadvantages of DAC:**
*   **Can be Insecure:** If the owner is not careful or is tricked, sensitive data can be compromised.
*   **Propagation of Rights:** Owners can grant permissions to others, who can then potentially grant permissions further, leading to unintended access.
*   **No System-Wide Policy Enforcement:** Cannot enforce system-wide security policies effectively if owners deviate from them.
*   **"Lax" Security:** Can be susceptible to errors in judgment by users.

**Examples:**
*   **Windows File Permissions:** A user can right-click a file, go to "Properties" -> "Security," and manually add or remove users/groups and their permissions (Read, Write, Modify, Full Control).
*   **Linux File Permissions:** Using commands like `chmod` and `chown` to set read (r), write (w), and execute (x) permissions for the owner, group, and others.
    *   `chmod 755 myfile.txt` (Owner: rwx, Group: r-x, Others: r-x)
    *   `chown user1:group1 myfile.txt`

---

### **4. Mandatory Access Control (MAC)**

**Definition:** In Mandatory Access Control (MAC), access decisions are made by the **system** based on predefined security policies, not by the owner of the object. Subjects and objects are assigned security labels, and access is granted only if the subject's security label dominates the object's security label according to specific rules.

**Key Concepts:**
*   **System-centric:** Access control is enforced by the OS based on a global security policy.
*   **Labels/Sensitivity Levels:** Both subjects (users, processes) and objects (files, memory) are assigned security labels. These labels represent a classification level (e.g., Top Secret, Secret, Confidential, Unclassified) and often categories (e.g., Clearance: Secret, Compartment: Project X).
*   **Dominance Rule:** The core principle is that a subject can only access an object if its security label dominates the object's security label.
    *   **Read Access Rule (Simple Security Property):** A subject can read an object if its security level is greater than or equal to the object's security level. (S >= O)
    *   **Write Access Rule (Star Property):** A subject can write to an object only if its security level is less than or equal to the object's security level. (S <= O) This prevents a high-security subject from writing to a lower-security object and potentially "tainting" it.
*   **No Owner Discretion:** Users cannot override or change the security labels of objects or themselves.
*   **High Security:** Primarily used in environments requiring stringent security, such as government or military systems.

**How it Works:**
*   **Security Attributes:** Subjects and objects have security attributes assigned by a system administrator.
*   **Policy Enforcement:** The OS kernel checks these attributes against the predefined MAC rules before granting access.
*   **No ACLs (in the DAC sense):** While there might be internal data structures for labels, users don't directly manage per-object permissions as in DAC.

**Advantages of MAC:**
*   **Stronger Security:** Provides a higher level of assurance as access is not left to user discretion.
*   **Enforces System-Wide Policies:** Ensures consistent application of security rules across the entire system.
*   **Prevents Malicious or Unintentional Data Leakage:** The "no write-up" rule prevents lower-clearance entities from receiving data they shouldn't.
*   **Effective for Compartmentalization:** Can effectively isolate sensitive data into specific compartments.

**Disadvantages of MAC:**
*   **Complexity:** Difficult to implement, manage, and configure. Requires skilled administrators.
*   **Lack of Flexibility:** Can be very restrictive and hinder productivity for users who need to share data freely.
*   **Performance Overhead:** Label checking can introduce a performance penalty.
*   **User Frustration:** Users may find it difficult to perform legitimate tasks if the labels are not set correctly.

**Examples:**
*   **SELinux (Security-Enhanced Linux):** A well-known MAC implementation for Linux. It uses a policy that defines contexts (labels) for processes and files and rules for how they can interact. For example, a web server process might be confined to only read files in specific web directories.
*   **Trusted Solaris:** An older MAC implementation for Solaris operating systems.
*   **Military Classification Systems:** The conceptual basis for MAC often originates from how classified documents and personnel are handled in government and military organizations (e.g., Top Secret clearance required to access Top Secret documents).

---

### **5. Comparison: DAC vs. MAC**

| Feature            | Discretionary Access Control (DAC)                               | Mandatory Access Control (MAC)                                       |
| :----------------- | :--------------------------------------------------------------- | :------------------------------------------------------------------- |
| **Decision Maker** | Object Owner                                                     | System (based on global policy)                                      |
| **Basis for Rules**| Owner's discretion, trust, permissions listed in ACLs            | Security labels (sensitivity, categories) and dominance rules        |
| **Flexibility**    | High (users can easily share)                                    | Low (highly restrictive)                                             |
| **Security Level** | Moderate to High (depends on owner's diligence)                  | Very High (enforces strict policies)                                 |
| **Complexity**     | Relatively low for users, moderate for administrators            | High for configuration and management                                |
| **Use Cases**      | General-purpose OS, user file sharing                            | High-security environments, government, military, regulated industries |
| **Example**        | Windows File Permissions, Linux `chmod`/`chown`                  | SELinux, Trusted Solaris                                             |
| **Key Principle**  | Who can access what, determined by owner.                        | What can be accessed based on system-wide classification.            |

---

### **6. Important Points to Remember**

*   **Access control is about limiting access to resources.**
*   **DAC puts control in the hands of the resource owner.**
*   **MAC enforces access rules dictated by the system and security labels.**
*   **DAC is flexible but can be vulnerable to user error or malice.**
*   **MAC is highly secure but less flexible and more complex.**
*   **Many modern systems can employ hybrid approaches or have features that draw from both models.**
*   **The principle of least privilege is crucial for both DAC and MAC.**

---

### **7. Practice Questions & Exercises**

**Questions:**

1.  What is the primary difference between Discretionary Access Control (DAC) and Mandatory Access Control (MAC)?
2.  Who has the authority to grant or revoke permissions in a DAC system?
3.  What are the two main rules governing access in a MAC system based on security labels?
4.  Give one advantage and one disadvantage of using DAC.
5.  Give one advantage and one disadvantage of using MAC.
6.  Imagine a file server where users can set permissions for their own files. Which access control model is primarily being used here?
7.  A system administrator needs to ensure that no sensitive government data can be accidentally read by an employee with a lower security clearance, regardless of who owns the file. Which access control model would be more appropriate, and why?
8.  What is the role of Access Control Lists (ACLs) in DAC?
9.  Provide an example of a real-world OS feature that implements DAC.
10. Provide an example of a real-world OS security feature that implements MAC.

**Exercises:**

1.  **Scenario:** You have a file named `budget.xlsx` on a shared drive. You are the owner. You want only your colleague, "Bob," to be able to edit it, and you want everyone else to only be able to read it.
    *   Describe how you would achieve this using a DAC model (think about the permissions you'd grant).
    *   Would this scenario be easily managed in a typical MAC system? Explain why or why not.

2.  **Scenario:** In an MAC system, you have two subjects and two objects:
    *   Subject A (Security Level: Secret)
    *   Subject B (Security Level: Confidential)
    *   Object X (Security Level: Secret)
    *   Object Y (Security Level: Confidential)

    For each of the following attempted operations, state whether it would be allowed or denied, and explain why, using the MAC rules (Simple Security Property for Read, Star Property for Write).
    *   Subject A attempts to read Object Y.
    *   Subject A attempts to write to Object Y.
    *   Subject B attempts to read Object X.
    *   Subject B attempts to write to Object X.
    *   Subject A attempts to read Object X.
    *   Subject B attempts to read Object Y.

---

### **8. Answers to Practice Questions & Exercises**

**Answers to Questions:**

1.  **Difference:** DAC decisions are made by the **owner** of the resource, while MAC decisions are made by the **system** based on **security labels**.
2.  The **owner** of the resource.
3.  The **Simple Security Property** (read access: Subject Security Level >= Object Security Level) and the **Star Property** (write access: Subject Security Level <= Object Security Level).
4.  *   **Advantage:** Flexibility, ease of use for users.
    *   **Disadvantage:** Can be insecure if owners are not diligent, propagation of rights.
5.  *   **Advantage:** High security, enforces system-wide policies.
    *   **Disadvantage:** Complex, inflexible, can hinder productivity.
6.  Discretionary Access Control (DAC).
7.  Mandatory Access Control (MAC) would be more appropriate because it enforces system-wide classification rules, preventing lower-clearance individuals from accessing higher-classified data, regardless of ownership.
8.  ACLs in DAC are lists associated with each object that specify which subjects have what permissions for that object.
9.  Windows File Permissions, Linux `chmod`/`chown`.
10. SELinux (Security-Enhanced Linux).

**Answers to Exercises:**

1.  **Scenario (DAC):**
    *   **DAC Implementation:** As the owner, you would grant "Bob" "Full Control" or "Modify" permissions on `budget.xlsx`. For "Everyone Else" (or a specific group representing them), you would grant "Read-only" permissions.
    *   **MAC System:** This scenario would be difficult to manage in a typical MAC system unless the classification levels perfectly aligned with the desired access. If the file was classified as "Secret" and Bob had a "Secret" clearance while others had "Confidential," MAC would enforce those rules. However, directly assigning "read-only" to a specific individual who might have a higher clearance than "Confidential" would go against strict MAC principles.

2.  **Scenario (MAC):**
    *   **Subject A (Secret) attempts to read Object Y (Confidential):** **Allowed**. Subject Level (Secret) >= Object Level (Confidential).
    *   **Subject A (Secret) attempts to write to Object Y (Confidential):** **Allowed**. Subject Level (Secret) >= Object Level (Confidential). (This is usually allowed in MAC if the system permits write-up based on classification, though it's the *no write-up* rule that is the most critical to prevent tainting. In simpler models, this might be allowed; more complex models might restrict it based on compartment rules.) *Correction/Clarification:* The "Star Property" states S <= O for writing. So, Subject A (Secret) writing to Object Y (Confidential) would actually be **Denied** by the strict Star Property rule (Secret <= Confidential is False). This is to prevent higher-clearance subjects from writing to lower-clearance objects and potentially contaminating them with information they shouldn't have.
    *   **Subject B (Confidential) attempts to read Object X (Secret):** **Denied**. Subject Level (Confidential) < Object Level (Secret).
    *   **Subject B (Confidential) attempts to write to Object X (Secret):** **Denied**. Subject Level (Confidential) < Object Level (Secret). (Violates both S >= O for read and S <= O for write).
    *   **Subject A (Secret) attempts to read Object X (Secret):** **Allowed**. Subject Level (Secret) >= Object Level (Secret).
    *   **Subject B (Confidential) attempts to read Object Y (Confidential):** **Allowed**. Subject Level (Confidential) >= Object Level (Confidential).

---
