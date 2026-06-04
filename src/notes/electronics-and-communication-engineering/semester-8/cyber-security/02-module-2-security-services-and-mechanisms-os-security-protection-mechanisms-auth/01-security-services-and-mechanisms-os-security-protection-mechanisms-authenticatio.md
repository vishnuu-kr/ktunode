---
title: "Security services and mechanisms, OS  Security  – Protection Mechanisms –Authentication & Access control – Discretionary and Mandatory access control"
subject: "CYBER SECURITY"
module: "Module 2: Security services and mechanisms, OS  Security  – Protection Mechanisms –Authentication & Access control – Discretionary and Mandatory access control"
branch: "Electronics and Communication Engineering"
semester: 8
topicId: "68a5c462b09ce205780ff647"
status: "completed"
scrapedAt: "2026-05-23T18:13:43.678Z"
---
# CYBER SECURITY: Module 2 - Security Services, OS Security, Authentication & Access Control

This module delves into fundamental concepts of cybersecurity, focusing on essential security services, the security of operating systems, and the crucial mechanisms of authentication and access control, with a particular emphasis on Discretionary and Mandatory Access Control.

---

## Module 2: Security Services and Mechanisms, OS Security – Protection Mechanisms – Authentication & Access Control – Discretionary and Mandatory Access Control

### Introduction

In the realm of cybersecurity, ensuring the confidentiality, integrity, and availability of information is paramount. This module explores the building blocks that achieve these goals, starting with general security services and mechanisms, then narrowing down to the critical security aspects within an Operating System (OS). We will examine how OSes protect resources and then dive deep into the critical processes of verifying identity (authentication) and controlling what authenticated users can do (access control), specifically focusing on two primary models: Discretionary Access Control (DAC) and Mandatory Access Control (MAC).

---

### 1. Security Services and Mechanisms

**Definition:**
*   **Security Services:** Services that enhance the security of data processing systems and the information transfers of an organization. They are designed to counter threats and improve the security posture.
*   **Security Mechanisms:** Processes or methods that implement security services. They are the technical means to achieve the desired security.

**Key Security Services (often related to the CIA Triad and beyond):**

*   **Confidentiality:** Ensuring that information is accessible only to those authorized to have access.
    *   **Mechanisms:** Encryption, access control mechanisms, data masking.
    *   *Example:* Encrypting sensitive customer data so only authorized personnel can decrypt and view it. (Stallings, *Cryptography and Network Security*, Ch. 1)
*   **Integrity:** Ensuring that information has not been altered or destroyed in an unauthorized manner.
    *   **Mechanisms:** Hashing, digital signatures, checksums, access controls.
    *   *Example:* Using a hash function to verify that a downloaded file hasn't been tampered with during transit. (Kizza, *Computer Network Security*, Ch. 3)
*   **Availability:** Ensuring that authorized users have access to information and the systems when needed.
    *   **Mechanisms:** Redundancy (RAID, clustering), backups, denial-of-service (DoS) mitigation, disaster recovery plans.
    *   *Example:* Implementing redundant servers to ensure a website remains accessible even if one server fails. (Maiwald, *Fundamentals of Network Security*, Ch. 5)
*   **Authentication:** Verifying the identity of a user, process, or device.
    *   **Mechanisms:** Passwords, biometrics, smart cards, multi-factor authentication.
    *   *Example:* Logging into your email account using a password and a one-time code sent to your phone. (Stallings, *Network Security Essentials*, Ch. 4)
*   **Non-repudiation:** Providing proof of the origin and integrity of data, preventing the sender from denying having sent it.
    *   **Mechanisms:** Digital signatures.
    *   *Example:* A digitally signed contract ensures the signer cannot later deny having agreed to the terms. (Stallings, *Cryptography and Network Security*, Ch. 11)
*   **Access Control:** Enforcing policies that determine who can access what resources.
    *   **Mechanisms:** Permissions, roles, access control lists (ACLs).
    *   *Example:* Granting specific users read-only access to a shared document while allowing others edit permissions. (Kizza, *Computer Network Security*, Ch. 7)

**Important Note:** Security services often work in conjunction. For instance, access control is crucial for maintaining confidentiality and integrity.

---

### 2. OS Security – Protection Mechanisms

**Definition:**
*   **OS Security:** The mechanisms and policies implemented by an operating system to protect its resources, data, and processes from unauthorized access, modification, or destruction.

**Key Protection Mechanisms within an OS:**

*   **Memory Protection:** Preventing processes from accessing or interfering with the memory space of other processes or the OS kernel.
    *   **Mechanisms:**
        *   **Virtual Memory:** Each process gets its own isolated address space.
        *   **Memory Management Units (MMUs):** Hardware that translates virtual addresses to physical addresses and enforces access rights for each memory page.
    *   *Example:* A crashing application shouldn't bring down the entire system because its memory access is confined. (Kizza, *Computer Network Security*, Ch. 6)
*   **Process Isolation:** Ensuring that processes run independently of each other, preventing malicious processes from affecting others.
    *   **Mechanisms:** Separate address spaces, inter-process communication (IPC) controls.
    *   *Example:* One user's application running a virus should not be able to infect another user's running applications.
*   **File System Protection:** Controlling access to files and directories based on permissions.
    *   **Mechanisms:** File permissions (read, write, execute), ownership, Access Control Lists (ACLs).
    *   *Example:* A user can read a configuration file but cannot modify it, preventing accidental or malicious changes. (Maiwald, *Fundamentals of Network Security*, Ch. 7)
*   **Device Protection:** Controlling access to hardware devices (e.g., printers, network interfaces).
    *   **Mechanisms:** Driver permissions, I/O port access controls.
    *   *Example:* Preventing unprivileged users from directly controlling critical hardware.
*   **User and Process Authentication:** Ensuring that only legitimate users and authorized processes can access the system.
    *   **Mechanisms:** User IDs, passwords, session management.
    *   *Example:* The login screen prompts for credentials before granting access. (Stallings, *Network Security Essentials*, Ch. 4)
*   **Auditing and Logging:** Recording system events and user activities for security monitoring and forensic analysis.
    *   **Mechanisms:** System logs, audit trails.
    *   *Example:* Recording every login attempt, successful or failed, to detect brute-force attacks. (Godbole & Belpure, *Cyber Security*, Ch. 8)

---

### 3. Authentication & Access Control

**3.1 Authentication**

**Definition:** The process of verifying the claimed identity of a user, process, or device. It answers the question: "Are you who you say you are?"

**Key Components of Authentication:**

*   **Authentication Factors:** What a user knows, has, or is.
    *   **Something you know (Knowledge Factor):** Passwords, PINs, security questions.
        *   *Weakness:* Can be forgotten, guessed, or stolen.
    *   **Something you have (Possession Factor):** Smart cards, USB tokens, mobile phones (for OTPs).
        *   *Weakness:* Can be lost, stolen, or compromised.
    *   **Something you are (Inherence Factor):** Biometrics (fingerprints, facial recognition, iris scans).
        *   *Weakness:* Can be spoofed, privacy concerns, difficult to change if compromised.
*   **Authentication Methods:**
    *   **Single-Factor Authentication (SFA):** Uses only one authentication factor (e.g., password).
    *   **Two-Factor Authentication (2FA):** Uses two different types of authentication factors.
        *   *Example:* Password + SMS code. This significantly increases security. (Stallings, *Network Security Essentials*, Ch. 4)
    *   **Multi-Factor Authentication (MFA):** Uses three or more authentication factors.

**Important Point:** Strong authentication is the first line of defense against unauthorized access.

---

**3.2 Access Control**

**Definition:** The process of determining what actions an authenticated user, process, or device is allowed to perform on specific resources. It answers the question: "What are you allowed to do?"

**Key Concepts:**

*   **Subject:** An active entity that requests access to a resource (e.g., user, process).
*   **Object:** A passive entity that is being accessed (e.g., file, device, memory segment).
*   **Action:** The operation performed on the object (e.g., read, write, execute, delete).
*   **Policy:** A set of rules that define which subjects can perform which actions on which objects.

**Types of Access Control Models:**

Access control models are frameworks for defining and enforcing access policies. The two most prominent models are Discretionary Access Control (DAC) and Mandatory Access Control (MAC).

---

### 4. Discretionary Access Control (DAC)

**Definition:**
A model where the owner of an object has the discretion to grant or deny access to that object to other subjects. The owner controls the access rights.

**Key Characteristics:**

*   **Owner-centric:** The owner of the resource decides who gets access and what level of access they receive.
*   **Flexibility:** Allows for fine-grained control over resource sharing among users.
*   **Based on Identity:** Access decisions are made based on the identity of the subject.

**How it Works:**

*   **Access Control Matrix:** Conceptually, DAC can be represented by an access control matrix where rows represent subjects and columns represent objects. The cells contain the permissions granted to a subject for an object.
    *   *Example:*
        | Subject | File A (Read) | File A (Write) | File B (Read) |
        | :------ | :------------ | :------------- | :------------ |
        | User 1  | Yes           | No             | Yes           |
        | User 2  | No            | Yes            | No            |
        | Admin   | Yes           | Yes            | Yes           |

*   **Access Control Lists (ACLs):** In practice, this is often implemented using ACLs associated with each object. An ACL is a list of subjects and the permissions they have for that object.
    *   *Example:* File `report.txt` might have an ACL like:
        *   `UserX`: Read, Write
        *   `UserY`: Read
        *   `GroupZ`: Read

*   **Capability Lists:** An alternative implementation where each subject has a list of capabilities (tokens) that grant them access to specific objects with specific permissions.

**Advantages of DAC:**

*   **Simplicity for Owners:** Easy for users to manage access to their own files.
*   **Flexibility:** Highly adaptable to dynamic sharing needs.

**Disadvantages of DAC:**

*   **Lack of Central Control:** Difficult for administrators to enforce system-wide security policies uniformly.
*   **Potential for Misuse:** Owners can inadvertently grant too much access, or malicious users can be granted access by an unsuspecting owner.
*   **Can lead to "Trojan Horse" attacks:** A compromised user account can then misuse the discretionary access it has been granted to affect other resources. (Kizza, *Computer Network Security*, Ch. 7)
*   **Difficult to audit:** Tracking complex sharing relationships can be challenging.

**Examples:**

*   **Linux/Unix Permissions:** `rwx` (read, write, execute) for owner, group, and others. Users can change permissions for files they own.
*   **Windows File Permissions:** Similar to Linux, allowing users to set permissions on files and folders they own.

---

### 5. Mandatory Access Control (MAC)

**Definition:**
A model where access control is determined by a central authority or system policy, rather than by the owner of the resource. All subjects and objects are assigned security labels, and access is granted only if the subject's security label dominates the object's security label according to specific rules.

**Key Characteristics:**

*   **System-centric:** Security policies are enforced by the OS, not by individual users.
*   **Classification-based:** Relies on security classifications (labels) assigned to both subjects (clearance levels) and objects (sensitivity labels).
*   **Rigidity:** Less flexible than DAC, but offers stronger, more consistent security.
*   **Adherence to Security Policy:** Designed to enforce stringent government or military-style security policies.

**How it Works:**

*   **Security Labels (Sensitivity Labels):** Assigned to objects (e.g., "Confidential," "Secret," "Top Secret").
*   **Clearance Levels:** Assigned to subjects (users/processes) (e.g., "Confidential," "Secret," "Top Secret").
*   **Dominance Rule:** A subject can access an object if and only if the subject's clearance level *dominates* the object's sensitivity level.
*   **Bell-LaPadula Model (Confidentiality):**
    *   **Simple Security Property (No Read Up):** A subject at a given clearance level cannot read an object with a higher sensitivity level.
        *   *Example:* A "Secret" user cannot read a "Top Secret" document.
    *   **\*-Property (Star Property) (No Write Down):** A subject at a given clearance level cannot write to an object with a lower sensitivity level.
        *   *Example:* A "Top Secret" user cannot write to a "Secret" document. This prevents declassifying information.
*   **Biba Model (Integrity):** Focuses on protecting integrity.
    *   **Simple Integrity Property (No Read Down):** A subject cannot read an object with a lower integrity level.
        *   *Example:* A low-integrity process cannot read data from a high-integrity database.
    *   **\* Integrity Property (No Write Up):** A subject cannot write to an object with a higher integrity level.
        *   *Example:* A low-integrity process cannot modify a high-integrity file.

**Advantages of MAC:**

*   **Strong Centralized Control:** Administrators can enforce robust, system-wide security policies.
*   **High Level of Security:** Effective in environments with strict data classification requirements.
*   **Protection Against Insider Threats:** Prevents users from mishandling data they are authorized to access.

**Disadvantages of MAC:**

*   **Complexity:** Requires careful management of labels and classifications.
*   **Lack of Flexibility:** Can be too restrictive for general-purpose computing environments.
*   **Administrative Overhead:** Labeling and managing clearances can be resource-intensive.
*   **Compatibility Issues:** May not be suitable for applications that require dynamic sharing.

**Examples:**

*   **Trusted Operating Systems (e.g., SELinux, Trusted Solaris):** Systems designed to enforce MAC policies, often used in government or high-security environments.
*   **Multi-Level Security (MLS) systems:** Systems designed to handle data at different security levels simultaneously.

---

### 6. Combining DAC and MAC

In many real-world systems, both DAC and MAC principles are used. MAC provides the baseline security policy (e.g., enforcing the separation of classified information), while DAC allows for more granular, owner-specific permissions within those boundaries.

*   *Example:* In a secure government system, a Top Secret document (MAC label) might be owned by the document's creator. The creator can use DAC to allow specific Secret-level users to read it, but they cannot grant Read access to Confidential-level users (due to MAC rules).

---

### 7. Practice Questions & Answers

**Question 1:**
What is the primary difference between Discretionary Access Control (DAC) and Mandatory Access Control (MAC)?

**Answer 1:**
The primary difference lies in who controls the access policy. In DAC, the owner of the resource has discretion over access. In MAC, access is dictated by a system-wide policy, typically involving security labels and clearance levels.

---

**Question 2:**
Name two security services and their corresponding mechanisms.

**Answer 2:**
*   **Confidentiality:** Mechanism - Encryption
*   **Integrity:** Mechanism - Hashing/Digital Signatures

---

**Question 3:**
Explain the "Simple Security Property" of the Bell-LaPadula model.

**Answer 3:**
The "Simple Security Property" states that a subject at a given clearance level cannot read an object with a higher sensitivity level (No Read Up).

---

**Question 4:**
Which access control model offers more flexibility for users to manage their own files, and why?

**Answer 4:**
Discretionary Access Control (DAC) offers more flexibility because the owner of a file or resource can directly grant or deny access to other users, allowing for easy sharing and management of personal data.

---

**Question 5:**
You are designing a system for a military organization. Which access control model would be more appropriate for enforcing strict separation of classified data and why?

**Answer 5:**
Mandatory Access Control (MAC) would be more appropriate. MAC's reliance on security labels and clearance levels, enforced by a central policy (like the Bell-LaPadula model), is designed to handle highly sensitive information and prevent unauthorized disclosure, which is critical in military environments.

---

### 8. Important Points to Remember

*   **Security Services** are the "what" (confidentiality, integrity, availability), and **Security Mechanisms** are the "how" (encryption, access control, etc.).
*   **OS Security** relies on robust protection mechanisms like memory protection and file system protection.
*   **Authentication** verifies identity; **Access Control** determines what an authenticated entity can do.
*   **DAC** is flexible and owner-driven, while **MAC** is rigid and policy-driven.
*   **MAC** uses security labels and clearance levels, often with models like Bell-LaPadula (confidentiality) and Biba (integrity).
*   **MFA** is crucial for strong authentication, significantly improving security over SFA.
*   Understanding the strengths and weaknesses of DAC and MAC is key to designing appropriate security architectures.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


### 9. References and Further Reading

*   **Kizza, Joseph M.** *Computer Network Security*. Springer Verlag, 2/e, 2013. (Relevant chapters on access control, OS security).
*   **Stallings, William.** *Cryptography and Network Security Principles and Practice*. Pearson Education Asia, 10/e, 2022. (Chapters on access control, authentication principles).
*   **Stallings, William.** *Network Security Essentials*. Pearson Education, 6/e, 2022. (Chapters on authentication, access control).
*   **Maiwald, Eric.** *Fundamentals of Network Security*. Tata McGraw-Hill, 2/e, 2012. (Chapters on OS security, access control mechanisms).
*   **Shema, Mike.** *Anti-Hacker Tool Kit*. Mc Graw Hill, 4/e, 2018. (Provides practical context for understanding vulnerabilities that security mechanisms aim to prevent).
*   **Godbole, Nina and Belpure, Sunit.** *Cyber Security Understanding Cyber Crimes, Computer Forensics and Legal Perspectives*. Wiley, 2/e, 2019. (Contextualizes security needs and the impact of breaches).
*   **Shah, Deven N.** *Mark Stamp’s Information Security Principles and Practice*. Wiley, 4/e, 2021. (Reinforces foundational principles of security services and controls).

---

**Module Completion Check:**

*   [ ] Understood the core security services and their mechanisms.
*   [ ] Identified key protection mechanisms within an OS.
*   [ ] Explained the concepts of authentication and access control.
*   [ ] Differentiated between Discretionary Access Control (DAC) and Mandatory Access Control (MAC).
*   [ ] Understood the practical implications and examples of DAC and MAC.