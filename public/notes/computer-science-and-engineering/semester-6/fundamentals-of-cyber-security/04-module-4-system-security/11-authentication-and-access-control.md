---
title: "Authentication and access control"
subject: "FUNDAMENTALS OF CYBER SECURITY"
module: "Module 4: System Security:"
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8be53"
status: "completed"
scrapedAt: "2026-05-20T16:54:50.440Z"
---
# FUNDAMENTALS OF CYBER SECURITY - Module 4: System Security

## Topic: Authentication and Access Control

---

### **Learning Outcomes:**

By the end of this topic, you should be able to:

*   **Understand the fundamental concepts of authentication and access control.**
*   **Differentiate between authentication and authorization.**
*   **Identify and explain different types of authentication factors.**
*   **Describe various authentication methods and protocols.**
*   **Explain the principles of access control and common access control models.**
*   **Discuss the importance of implementing strong authentication and access control mechanisms.**
*   **Identify common vulnerabilities and countermeasures related to authentication and access control.**

---

### **1. Introduction to Authentication and Access Control**

**Key Concept:** In cybersecurity, ensuring that only authorized individuals or systems can access specific resources is paramount. This is achieved through two interconnected processes: authentication and access control.

*   **Authentication:** The process of verifying the identity of a user, device, or system. It answers the question: "Are you who you claim to be?"
*   **Access Control:** The process of granting or denying specific permissions to an authenticated user or system to access certain resources. It answers the question: "What are you allowed to do?"

**Analogy:**
*   **Authentication:** Showing your ID card at the entrance of a building to prove you are an employee.
*   **Access Control:** Your ID card then grants you access to specific floors or rooms within that building based on your role.

---

### **2. Authentication: Verifying Identity**

**Key Concept:** Authentication is the first step in securing access. It relies on proving identity through various means.

#### **2.1 Authentication Factors (The Three Pillars)**

Authentication factors are categories of evidence used to verify identity. For strong authentication, a combination of these factors is typically required.

*   **Something You Know (Knowledge Factors):**
    *   **Definition:** Information that only the legitimate user should know.
    *   **Examples:**
        *   Passwords
        *   PINs (Personal Identification Numbers)
        *   Security Questions (e.g., "What was your mother's maiden name?")
        *   Passphrases (longer, more memorable sequences of words)
    *   **Pros:** Widely understood and implemented.
    *   **Cons:** Susceptible to guessing, phishing, brute-force attacks, reuse across multiple sites, and human error (writing down passwords).

*   **Something You Have (Possession Factors):**
    *   **Definition:** Physical items that only the legitimate user should possess.
    *   **Examples:**
        *   **Hardware Tokens:** Small devices that generate one-time passwords (OTPs) (e.g., RSA SecurID tokens).
        *   **Smart Cards:** Plastic cards with an embedded microchip that stores authentication credentials.
        *   **Mobile Devices:** Smartphones used to receive OTPs via SMS, authenticator apps (e.g., Google Authenticator, Authy), or push notifications.
        *   **USB Security Keys:** Physical keys like YubiKey that authenticate by connecting to a USB port.
    *   **Pros:** More secure than knowledge factors as they require physical possession.
    *   **Cons:** Can be lost, stolen, or damaged. The device itself might be vulnerable.

*   **Something You Are (Inherence Factors):**
    *   **Definition:** Biological characteristics that are unique to the individual.
    *   **Examples:**
        *   **Biometrics:**
            *   **Fingerprint Scanning:** Analyzing unique ridge patterns on a fingertip.
            *   **Facial Recognition:** Analyzing facial features.
            *   **Iris/Retina Scanning:** Analyzing the unique patterns in the iris or retina of the eye.
            *   **Voice Recognition:** Analyzing unique vocal characteristics.
            *   **Palm Vein Scanning:** Analyzing the unique vein patterns in the palm.
    *   **Pros:** Difficult to steal, forget, or share. Convenient.
    *   **Cons:**
        *   **Privacy Concerns:** Collection and storage of sensitive biometric data.
        *   **Accuracy Issues:** False positives (authenticating the wrong person) and false negatives (failing to authenticate the right person).
        *   **Irreversible:** If compromised, biometric data cannot be changed like a password.
        *   **Environmental Factors:** Lighting, noise, or physical injuries can affect accuracy.

#### **2.2 Types of Authentication**

*   **Single-Factor Authentication (SFA):**
    *   **Definition:** Uses only one authentication factor.
    *   **Example:** Logging in with just a username and password.
    *   **Security Level:** Low.

*   **Two-Factor Authentication (2FA):**
    *   **Definition:** Uses two different authentication factors from different categories (Something You Know, Something You Have, Something You Are).
    *   **Example:** Logging in with a password (Something You Know) and a code from an authenticator app on your phone (Something You Have).
    *   **Security Level:** Moderate to High. Widely recommended.

*   **Multi-Factor Authentication (MFA):**
    *   **Definition:** Uses three or more authentication factors from different categories.
    *   **Example:** Logging in with a password (Know), a security token (Have), and a fingerprint scan (Are).
    *   **Security Level:** High. Offers the strongest assurance of identity.

#### **2.3 Authentication Methods and Protocols**

*   **Password-Based Authentication:** The most common form, relies on users remembering a secret password.
    *   **Hashing and Salting:** To securely store passwords, systems don't store them in plain text.
        *   **Hashing:** A one-way cryptographic function that converts a password into a fixed-size string of characters (hash).
        *   **Salting:** Adding a unique, random string (salt) to each password *before* hashing. This prevents attackers from using pre-computed rainbow tables to crack common passwords.
    *   **Best Practices:** Strong password policies (complexity, length, no reuse), regular password changes, lockout policies after multiple failed attempts.

*   **Biometric Authentication Systems:**
    *   **Enrollment:** The initial process of capturing and storing a user's biometric data.
    *   **Verification:** Comparing a newly captured biometric sample against the stored template for a claimed identity.
    *   **Identification:** Comparing a newly captured biometric sample against *all* stored templates in a database to find a match (less common for user login).

*   **Public Key Cryptography (PKC) / Digital Certificates:**
    *   **Concept:** Uses a pair of cryptographic keys: a public key (shared widely) and a private key (kept secret).
    *   **Authentication:** A server can send a challenge encrypted with the user's public key. The user's client, possessing the corresponding private key, can decrypt it, proving their identity. Digital certificates, issued by trusted Certificate Authorities (CAs), bind a public key to an identity, enabling secure web browsing (HTTPS) and other secure communications.

*   **Protocols:**
    *   **Kerberos:** A network authentication protocol designed to provide strong authentication for client/server applications by using secret-key cryptography. It issues "tickets" to users to prove their identity to various services.
    *   **OAuth (Open Authorization):** An authorization framework, not strictly authentication, but often used in conjunction with it. It allows users to grant third-party applications limited access to their data on a service without sharing their credentials.
    *   **SAML (Security Assertion Markup Language):** An XML-based standard for exchanging authentication and authorization data between parties, typically between an identity provider (IdP) and a service provider (SP). Enables Single Sign-On (SSO).
    *   **OpenID Connect (OIDC):** Built on top of OAuth 2.0, it's an identity layer that allows clients to verify the identity of the end-user based on the authentication performed by an authorization server, as well as to obtain basic profile information about the end-user.

---

### **3. Access Control: Granting Permissions**

**Key Concept:** Once a user's identity is authenticated, access control determines *what* they can do and *what* resources they can access.

#### **3.1 Principles of Access Control**

*   **Principle of Least Privilege:**
    *   **Definition:** Users and systems should be granted only the minimum permissions necessary to perform their intended functions.
    *   **Importance:** Minimizes the impact of compromised accounts or insider threats, as a malicious actor would have limited access.
    *   **Example:** A customer service representative should have access to customer records but not to employee payroll information.

*   **Separation of Duties:**
    *   **Definition:** Critical tasks should be divided among different individuals so that no single person has complete control over a process.
    *   **Importance:** Prevents fraud and errors by requiring collusion for malicious activities.
    *   **Example:** One person can initiate a payment, but a different person must approve it.

*   **Need-to-Know:**
    *   **Definition:** Users should only have access to information that is directly relevant to their job responsibilities.
    *   **Importance:** Protects sensitive data from accidental or intentional disclosure.
    *   **Example:** A marketing team member doesn't need access to source code repositories.

#### **3.2 Access Control Models**

These models define how access decisions are made and enforced.

*   **Discretionary Access Control (DAC):**
    *   **Definition:** The owner of a resource determines who can access it and what permissions they have.
    *   **Mechanism:** Access Control Lists (ACLs) are commonly used, where each resource has a list of users and their associated permissions.
    *   **Example:** On a Windows file system, a user can set permissions for their own files, granting read or write access to specific colleagues.
    *   **Pros:** Flexible and easy for individual users to manage their own resources.
    *   **Cons:** Can lead to inconsistent security policies if owners are not security-conscious. Difficult to audit centrally.

*   **Mandatory Access Control (MAC):**
    *   **Definition:** Access is controlled by a central authority based on security labels assigned to both users and resources.
    *   **Mechanism:** Involves "clearance levels" for users and "classification levels" for data. A user can only access data with a classification level equal to or lower than their clearance level.
    *   **Example:** Used in military and government systems (e.g., Top Secret, Secret, Confidential).
    *   **Pros:** Very high security, enforced centrally, difficult to bypass.
    *   **Cons:** Restrictive, complex to manage, and not suitable for general-purpose computing environments.

*   **Role-Based Access Control (RBAC):**
    *   **Definition:** Access permissions are assigned to roles, and users are assigned to roles. This decouples permissions from individual users.
    *   **Mechanism:**
        *   **Users:** Individuals performing tasks.
        *   **Roles:** Job functions or responsibilities (e.g., "Administrator," "Editor," "Viewer").
        *   **Permissions:** Specific actions that can be performed on resources (e.g., "Read," "Write," "Delete").
        *   **Role-Assignment:** Users are assigned to roles.
        *   **Permission-Assignment:** Permissions are assigned to roles.
    *   **Example:** All users assigned the "Editor" role can create and edit documents, while users assigned the "Viewer" role can only read them.
    *   **Pros:** Easier to manage and audit than DAC, especially in large organizations. Promotes the principle of least privilege.
    *   **Cons:** Can become complex if roles are not well-defined.

*   **Attribute-Based Access Control (ABAC):**
    *   **Definition:** Access decisions are based on attributes associated with the user, the resource, the action, and the environment.
    *   **Mechanism:** Policies are defined using rules that combine these attributes.
    *   **Example:** A policy might state: "Allow users in the 'Sales' department (user attribute) to view customer records (resource attribute) if it's during business hours (environment attribute) and the action is 'view' (action attribute)."
    *   **Pros:** Highly flexible and dynamic, allows for very fine-grained control.
    *   **Cons:** Complex to design and manage policies effectively.

#### **3.3 Authorization vs. Authentication**

It's crucial to reiterate the distinction:

*   **Authentication:** Verifying *who* you are.
*   **Authorization:** Determining *what* you are allowed to do after being authenticated.

**Example:**
*   You authenticate using your username and password.
*   The system checks your user profile (authorization) to see if you have permission to access the "Financial Reports" folder.

---

### **4. Importance of Strong Authentication and Access Control**

*   **Confidentiality:** Prevents unauthorized disclosure of sensitive information.
*   **Integrity:** Ensures that data and systems are not modified by unauthorized parties.
*   **Availability:** Helps ensure that systems and data are accessible to legitimate users when needed, by preventing unauthorized access that could disrupt operations.
*   **Compliance:** Many regulations (e.g., GDPR, HIPAA, PCI DSS) mandate strong authentication and access control measures.
*   **Reduced Risk:** Minimizes the likelihood and impact of data breaches, financial loss, and reputational damage.
*   **Accountability:** Clear authentication and authorization mechanisms help track user actions and identify who did what.

---

### **5. Common Vulnerabilities and Countermeasures**

| Vulnerability                             | Description                                                                                                 | Countermeasures                                                                                                                                                                                              |
| :---------------------------------------- | :---------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Weak Passwords**                        | Easily guessed, common, or reused passwords.                                                                | **Strong Password Policies:** Enforce complexity, minimum length, regular changes. **Password Managers:** Encourage users to use them. **Multi-Factor Authentication (MFA):** The most effective countermeasure. |
| **Phishing/Social Engineering**           | Tricking users into revealing credentials.                                                                  | **User Training:** Educate users about phishing attacks. **MFA:** Even if credentials are stolen, MFA provides an additional barrier. **Email Filtering:** Implement robust email security.                       |
| **Brute-Force Attacks**                   | Automated guessing of passwords.                                                                            | **Account Lockout Policies:** Temporarily disable accounts after multiple failed login attempts. **Rate Limiting:** Limit the number of login attempts from a single IP address. **CAPTCHAs:** Human verification. |
| **Credential Stuffing**                   | Using stolen credentials from one breach to attempt logins on other services.                               | **MFA:** Prevents unauthorized access even with compromised credentials. **Unique Passwords:** Encourage users to never reuse passwords. **Monitoring:** Detect suspicious login patterns.                 |
| **Session Hijacking**                     | Stealing a user's active session token to gain unauthorized access.                                         | **Secure Session Management:** Use strong session IDs, enforce HTTPS, regenerate session IDs upon re-authentication. **HTTPOnly Cookies:** Prevent JavaScript access to session cookies.                   |
| **Insider Threats**                       | Malicious or negligent actions by authorized users.                                                         | **Principle of Least Privilege:** Limit access rights. **Separation of Duties:** Prevent single points of control. **Activity Monitoring & Auditing:** Track user actions.                               |
| **Insecure Biometric Systems**            | Spoofing of biometric data or vulnerabilities in the storage/processing of biometric templates.             | **Liveness Detection:** Ensure the biometric sample is from a live person. **Secure Storage:** Encrypt biometric templates. **MFA:** Combine biometrics with other factors.                                   |
| **Privilege Escalation**                  | Gaining higher-level access permissions than initially granted.                                             | **Regular Audits:** Review user privileges. **Patch Management:** Fix vulnerabilities that allow escalation. **Least Privilege:** Ensure users have only necessary permissions.                             |
| **Insecure API Authentication**           | Weaknesses in how APIs authenticate requests.                                                               | **Use robust API authentication methods:** OAuth 2.0, API keys with proper management. **Input Validation:** Sanitize all input to APIs.                                                                  |
| **Access Control Misconfigurations**      | Incorrectly setting permissions, leaving resources overly exposed.                                          | **Regular Security Audits:** Review ACLs and RBAC configurations. **Automated Configuration Management:** Reduce manual errors. **Use predefined roles:** Avoid custom, error-prone configurations.     |

---

### **6. Important Points to Remember**

*   **Authentication precedes Authorization.** You must prove who you are before the system decides what you can do.
*   **MFA is the gold standard for strong authentication.** Relying on single-factor authentication (especially just passwords) is a significant security risk.
*   **Never reuse passwords across different services.**
*   **The Principle of Least Privilege is fundamental to effective access control.**
*   **Regularly review and update access control lists and user roles.**
*   **User education is a critical component of both authentication and access control security.**

---

### **Practice Questions**

1.  **Differentiate between Authentication and Authorization with an example.**
2.  **List and explain the three primary categories of authentication factors.**
3.  **What is the primary advantage of Multi-Factor Authentication (MFA) over Single-Factor Authentication (SFA)?**
4.  **Explain the Principle of Least Privilege and why it's important.**
5.  **Describe how Role-Based Access Control (RBAC) simplifies access management in an organization.**
6.  **Imagine you are designing a system for a bank. What authentication factors would you consider essential for accessing customer accounts? Justify your choices.**
7.  **A user can log in using their password and a code sent to their phone via SMS. What type of authentication is this? What is a potential weakness of this specific implementation?**
8.  **What is the difference between Discretionary Access Control (DAC) and Mandatory Access Control (MAC)?**
9.  **How does hashing and salting improve password security?**
10. **Why is it important to have both strong authentication AND robust access control in place?**

---

### **Answers to Practice Questions**

1.  **Authentication** is the process of verifying a user's identity (e.g., logging in with a username and password). **Authorization** is the process of granting or denying specific permissions to an authenticated user (e.g., allowing a user to view but not edit a document).
    *   **Example:** You swipe your company ID card (authentication) to enter the building. Your card then grants you access to your office floor but not to the executive suite (authorization).
2.  The three primary categories are:
    *   **Something You Know:** Passwords, PINs, security questions.
    *   **Something You Have:** Hardware tokens, smartphones, smart cards.
    *   **Something You Are:** Fingerprints, facial scans, iris patterns (biometrics).
3.  The primary advantage of MFA is **significantly increased security**. By requiring multiple, independent factors, even if one factor is compromised (e.g., a password is stolen), the attacker still needs to compromise at least one other factor (e.g., the physical phone) to gain access.
4.  The **Principle of Least Privilege** dictates that users and systems should only be granted the minimum permissions necessary to perform their intended tasks. It's important because it minimizes the potential damage from compromised accounts or insider threats, as an attacker would have a limited scope of action.
5.  **RBAC** simplifies access management by assigning permissions to roles (e.g., "Manager," "Developer") rather than directly to individual users. When a user's job function changes, their role is updated, and their permissions automatically change. This eliminates the need to individually modify permissions for each user when their responsibilities evolve or new employees join.
6.  For a bank, essential authentication factors would include:
    *   **Something You Know:** A strong, unique password or passphrase.
    *   **Something You Have:** A mobile device with an authenticator app or a hardware token for receiving One-Time Passwords (OTPs).
    *   **Something You Are:** Biometrics (e.g., fingerprint or facial recognition on a mobile device) for enhanced convenience and security.
    Justification: These factors provide layered security. If a password is compromised, the attacker still needs the physical device or the biometric data. Biometrics add an extra layer and are convenient for mobile banking.
7.  This is **Two-Factor Authentication (2FA)**. A potential weakness of SMS-based OTPs is that they can be vulnerable to **SIM-swapping attacks**, where an attacker convinces a mobile carrier to port the victim's phone number to a SIM card controlled by the attacker.
8.  **DAC** allows resource owners to control access to their data, typically using Access Control Lists (ACLs). It's flexible but can be inconsistent. **MAC** enforces access control based on system-wide security labels and classifications, controlled by a central authority. It's very rigid and highly secure, often used in sensitive environments.
9.  **Hashing** converts a password into a fixed-size string, making it impossible to reverse and get the original password. **Salting** adds a unique random string to each password before hashing. This prevents attackers from using pre-computed "rainbow tables" to crack common passwords, as each hashed password, even for the same plaintext password with different salts, will be unique.
10. Both are crucial because **authentication ensures the system knows *who* is trying to access it, and access control ensures that authenticated entity has the *correct permissions* to access specific resources.** Without proper authentication, unauthorized users could gain access. Without proper authorization, even legitimate users might gain access to more information or capabilities than they should, leading to data breaches, misuse, or system instability. They work in tandem to protect systems and data.

---
