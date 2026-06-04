---
title: "Security services"
subject: "FOUNDATIONS OF CRYPTOGRAPHY"
module: "Module 3: Principles of security "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8bf16"
status: "completed"
scrapedAt: "2026-05-20T16:53:38.314Z"
---
# Foundations of Cryptography: Module 3 - Principles of Security

## Topic: Security Services

This module explores the fundamental principles of security, focusing on the essential services that cryptography aims to provide. Understanding these services is crucial for designing and implementing secure systems.

---

### Learning Outcomes

By the end of this topic, you should be able to:

*   **Identify and explain the core security services provided by cryptography.**
*   **Define and differentiate between key security services like authentication, confidentiality, integrity, and availability.**
*   **Understand the role of cryptography in achieving each of these services.**
*   **Recognize common attacks that compromise these security services.**
*   **Appreciate the interdependencies between different security services.**

---

### Key Concepts and Definitions

Cryptography provides a set of services that underpin secure communication and data storage. These services are often referred to as the "CIA Triad" with the addition of non-repudiation and others.

#### 1. Confidentiality (Secrecy)

*   **Definition:** Ensuring that information is accessible only to authorized parties. It prevents unauthorized disclosure of sensitive data.
*   **How Cryptography Provides It:** Primarily through **encryption**. Plaintext (readable data) is transformed into ciphertext (unreadable data) using an encryption algorithm and a secret key. Only someone with the corresponding decryption key can recover the original plaintext.
*   **Key Concepts:**
    *   **Encryption:** The process of converting plaintext into ciphertext.
    *   **Decryption:** The process of converting ciphertext back into plaintext.
    *   **Key:** A piece of information that determines the output of a cryptographic algorithm.
    *   **Symmetric Encryption:** Uses the same key for both encryption and decryption (e.g., AES).
    *   **Asymmetric Encryption (Public-Key Cryptography):** Uses a pair of keys: a public key for encryption and a private key for decryption (e.g., RSA).
*   **Examples:**
    *   Sending an email with sensitive information using PGP (Pretty Good Privacy).
    *   Securely storing passwords in a database using hashing and salting.
    *   HTTPS (Hypertext Transfer Protocol Secure) encrypts communication between your browser and a website.
*   **Attacks that Compromise Confidentiality:**
    *   **Eavesdropping/Wiretapping:** Intercepting data in transit.
    *   **Password Guessing/Brute-Force Attacks:** Trying to guess passwords to gain access.
    *   **Side-Channel Attacks:** Exploiting physical characteristics of a system (e.g., power consumption, timing) to reveal keys.
    *   **Key Compromise:** If an encryption key is stolen or leaked.

#### 2. Integrity

*   **Definition:** Ensuring that information has not been altered or tampered with in an unauthorized manner during transit or storage. It guarantees that the data is accurate and complete.
*   **How Cryptography Provides It:** Primarily through **hashing** and **digital signatures**.
    *   **Hashing:** A hash function takes an input (message) and produces a fixed-size output (hash value or message digest). Even a small change in the message will result in a significantly different hash value.
    *   **Digital Signatures:** Use asymmetric cryptography to create a unique "signature" for a message. The sender encrypts a hash of the message with their private key. The recipient can then verify the signature by decrypting it with the sender's public key and comparing the result with a hash of the received message.
*   **Key Concepts:**
    *   **Hash Function:** A one-way mathematical function that generates a unique fingerprint for data.
    *   **Message Digest (Hash Value):** The output of a hash function.
    *   **Collision Resistance:** The property of a hash function where it's computationally infeasible to find two different messages that produce the same hash value.
    *   **Pre-image Resistance:** The property of a hash function where it's computationally infeasible to find the original message given only its hash value.
    *   **Second Pre-image Resistance:** The property of a hash function where it's computationally infeasible to find a different message that has the same hash value as a given message.
*   **Examples:**
    *   **File Integrity Check:** Downloading a software file and verifying its SHA-256 hash against the one provided by the developer.
    *   **Secure Documents:** Digital signatures on legal documents to ensure they haven't been altered.
    *   **Blockchain:** The chain of blocks is secured using cryptographic hashes, ensuring the integrity of transaction records.
*   **Attacks that Compromise Integrity:**
    *   **Data Tampering/Modification:** Maliciously altering data in transit or at rest.
    *   **Man-in-the-Middle (MITM) Attack:** An attacker intercepts and relays communications between two parties, potentially altering the data.
    *   **Spoofing:** Impersonating an authorized entity to send forged messages.

#### 3. Authentication

*   **Definition:** Verifying the identity of a user, device, or system. It ensures that the party claiming to be someone or something is indeed who they claim to be.
*   **How Cryptography Provides It:** Through **passwords**, **digital certificates**, **digital signatures**, and **message authentication codes (MACs)**.
    *   **Passwords:** While common, they are often susceptible to brute-force attacks if not handled securely (e.g., using hashing and salting).
    *   **Digital Certificates:** Used in Public Key Infrastructure (PKI) to bind a public key to an identity.
    *   **Digital Signatures:** Verifying the sender's identity.
    *   **Message Authentication Codes (MACs):** Similar to hashes but generated using a secret key, providing both data integrity and authentication.
*   **Key Concepts:**
    *   **Identity Verification:** The process of confirming an entity's identity.
    *   **Credentials:** Information used to verify identity (e.g., username, password, biometric data).
    *   **Digital Certificate:** An electronic document that uses a digital signature to bind a public key with an identity.
    *   **Public Key Infrastructure (PKI):** A system for creating, managing, distributing, and revoking digital certificates.
*   **Examples:**
    *   **Logging into a website:** Entering a username and password.
    *   **Secure Sockets Layer (SSL)/Transport Layer Security (TLS) Certificates:** Verifying the identity of websites you visit.
    *   **Two-Factor Authentication (2FA):** Using something you know (password) and something you have (e.g., a code from your phone).
*   **Attacks that Compromise Authentication:**
    *   **Phishing:** Tricking users into revealing their credentials.
    *   **Credential Stuffing:** Using stolen credentials from one breach to access other accounts.
    *   **Impersonation/Spoofing:** Pretending to be another entity.
    *   **Session Hijacking:** Stealing a user's active session to gain unauthorized access.

#### 4. Non-Repudiation

*   **Definition:** Providing proof that a specific action was performed by a specific entity, making it impossible for that entity to deny having performed it.
*   **How Cryptography Provides It:** Primarily through **digital signatures**. Because a digital signature is created using the sender's unique private key, only the sender could have generated it. The recipient can prove to a third party that the sender sent the message.
*   **Key Concepts:**
    *   **Proof of Origin:** Evidence that a message originated from a specific sender.
    *   **Proof of Delivery:** Evidence that a message was received by a specific recipient.
*   **Examples:**
    *   **Digital contract signing:** Ensuring a party cannot later deny signing an agreement.
    *   **Secure financial transactions:** Providing irrefutable evidence of who initiated a transaction.
*   **Attacks that Compromise Non-Repudiation:**
    *   **Key compromise:** If the sender's private key is stolen, someone else could impersonate them and create a valid signature.
    *   **Denial of Service (DoS) on verification systems:** Preventing the proof from being presented.

#### 5. Availability

*   **Definition:** Ensuring that systems and data are accessible and usable when needed by authorized users.
*   **How Cryptography Contributes (Indirectly):** Cryptography doesn't directly guarantee availability, but it plays a role in protecting the systems that provide availability.
    *   **Protecting against malware:** Encryption can protect files from ransomware, which can make data unavailable.
    *   **Securing access control:** Strong authentication prevents unauthorized users from disrupting services.
    *   **Protecting network infrastructure:** Securing network devices and communication channels.
*   **Key Concepts:**
    *   **Reliability:** The ability of a system to perform its intended function correctly and consistently.
    *   **Resilience:** The ability of a system to withstand and recover from disruptions.
*   **Examples:**
    *   **Redundancy:** Having backup systems and data.
    *   **Disaster Recovery Plans:** Procedures for restoring services after an event.
    *   **DDoS Protection:** Measures to prevent Distributed Denial of Service attacks that aim to make services unavailable.
*   **Attacks that Compromise Availability:**
    *   **Denial of Service (DoS) / Distributed Denial of Service (DDoS) Attacks:** Overwhelming a system with traffic to make it inaccessible.
    *   **Ransomware:** Encrypting data and demanding payment for its decryption.
    *   **Physical destruction or damage:** To servers or network infrastructure.

---

### Interdependencies Between Security Services

It's important to note that these security services are not always independent and often rely on each other to be effective.

*   **Authentication and Confidentiality:** To ensure only authorized users can access confidential data, you first need to authenticate them.
*   **Integrity and Authentication:** Digital signatures provide both integrity (by hashing the message) and authentication (by using the sender's private key).
*   **Confidentiality and Integrity:** If data is encrypted, its integrity can be maintained by ensuring the encryption process itself is not compromised and by using techniques like authenticated encryption.
*   **Availability and the others:** If confidentiality or integrity is severely compromised (e.g., ransomware encrypts all data), availability is also lost.

---

### Practice Questions / Exercises

1.  **Scenario:** You are sending a sensitive financial report to your manager via email. Which primary security service are you most concerned with ensuring for this report? Explain why.
2.  **Scenario:** You are downloading a software update from a reputable vendor. The vendor provides a SHA-256 hash for the file. What security service is this hash intended to verify? Describe the process.
3.  **Scenario:** A user logs into their online banking account. What cryptographic service is primarily being used to confirm the user's identity? What are potential vulnerabilities if this service is not implemented securely?
4.  **Scenario:** A digital contract is signed using a private key. What security service does this digital signature provide that prevents the signatory from later denying they signed the contract?
5.  **Scenario:** A company's website is flooded with millions of bogus requests, making it inaccessible to legitimate users. What security service is being directly attacked?

---

### Answers to Practice Questions

1.  **Confidentiality.** You are concerned with ensuring that only your manager (the authorized recipient) can read the financial report. Encryption is the primary cryptographic tool used to achieve this.
2.  The SHA-256 hash is intended to verify the **integrity** of the software file. The process involves calculating the hash of the downloaded file on your computer and comparing it to the hash provided by the vendor. If the hashes match, it indicates that the file has not been altered or corrupted during the download process.
3.  **Authentication** is primarily being used to confirm the user's identity. Potential vulnerabilities include weak passwords, password reuse, phishing attacks leading to credential theft, and lack of multi-factor authentication.
4.  The digital signature provides the **non-repudiation** service. Because the signature is created using the signatory's unique private key, they cannot later deny having signed the contract.
5.  The security service being directly attacked is **availability**. The flood of bogus requests aims to overwhelm the website's resources, making it unavailable to legitimate users.

---

### Important Points to Remember

*   **Confidentiality:** Protects against unauthorized disclosure. Achieved mainly by encryption.
*   **Integrity:** Protects against unauthorized modification. Achieved mainly by hashing and digital signatures.
*   **Authentication:** Verifies the identity of entities. Achieved by various cryptographic methods, including digital signatures and certificates.
*   **Non-repudiation:** Prevents denial of actions. Achieved primarily by digital signatures.
*   **Availability:** Ensures access when needed, though cryptography's role is often indirect in protecting the systems that provide it.
*   **Interdependence:** These services often work together. For example, digital signatures provide both integrity and authentication.
*   **Attacks:** Be aware of common attacks that target each security service.
*   **Key Management:** The security of many cryptographic services hinges on the secure management of cryptographic keys.
