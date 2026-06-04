---
title: "Distribution of public keys"
subject: "SECURE COMMUNICATION"
module: "Module 3: Public Key Cryptography: "
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c460b09ce205780fee8c"
status: "completed"
scrapedAt: "2026-05-23T18:03:12.832Z"
---
# SECURE COMMUNICATION - Module 3: Public Key Cryptography

## Topic: Distribution of Public Keys

### 1. Introduction to Public Key Cryptography and Key Distribution Challenges

Public-key cryptography (also known as asymmetric cryptography) revolutionized secure communication by allowing encryption and decryption using different keys: a public key and a private key.

*   **Public Key:** Can be freely distributed and is used for encryption and verifying digital signatures.
*   **Private Key:** Must be kept secret by its owner and is used for decryption and creating digital signatures.

This paradigm shift addresses the key distribution problem inherent in symmetric cryptography. However, it introduces a new challenge: **how to reliably distribute public keys to those who need them.** The fundamental problem is: **How can Alice be sure that a public key she receives actually belongs to Bob, and not to an imposter (Mallory) who might be trying to intercept or manipulate their communication?**

**Learning Outcome Alignment:** This section introduces the core concepts of public key cryptography relevant to CO3.

**Key Concepts:**
*   Public Key
*   Private Key
*   Key Distribution Problem (in symmetric crypto)
*   Public Key Distribution Problem (in asymmetric crypto)

**Reference:** Stallings, Chapter 1.

### 2. Requirements for Public Key Distribution

For a public key distribution system to be secure and effective, it must satisfy several critical requirements:

*   **Confidentiality:** The distribution mechanism itself should not be compromised. The keys should be transmitted securely.
*   **Integrity:** The public key received must be identical to the one originally published. It should not be altered in transit.
*   **Authenticity:** The recipient must be able to verify that the public key indeed belongs to the claimed owner. This is the most crucial requirement.
*   **Availability:** The system for distributing public keys should be available when needed.

**Learning Outcome Alignment:** This section sets the stage for understanding the mechanisms to address CO3.

**Key Concepts:**
*   Confidentiality (of key distribution)
*   Integrity (of public keys)
*   Authenticity (of public key ownership)
*   Availability (of the distribution system)

### 3. Methods for Public Key Distribution

There are several approaches to distributing public keys, each with its own strengths and weaknesses.

#### 3.1. Public Announcement

The simplest, but most insecure, method.

*   **Description:** A party announces their public key via a public medium like a newspaper, bulletin board, or email.
*   **Pros:** Simple and requires no infrastructure.
*   **Cons:** **Highly vulnerable to impersonation.** An attacker can easily substitute their own public key, claiming to be someone else. Alice receives Mallory's public key, believing it to be Bob's. Any message Alice encrypts with this key will be readable by Mallory.
*   **Example:** Alice wants to send a secret message to Bob. Bob publishes his public key in a newspaper. Mallory intercepts the newspaper and replaces Bob's public key with her own. Alice reads the newspaper, sees the "Bob's" public key (which is actually Mallory's), and encrypts her message. Mallory decrypts it, then uses Bob's *actual* public key (which she somehow obtained or will try to obtain) to re-encrypt the message for Bob, or simply reads it and discards it.

**Important Point:** This method is **insufficient for secure communication** as it lacks authenticity.

**Learning Outcome Alignment:** This method highlights the need for more robust solutions, directly relating to CO3.

#### 3.2. Certified Public Key (Public Key Certificates)

This is the most common and secure method for public key distribution, relying on the concept of a trusted third party.

*   **Description:** A trusted entity, known as a **Certificate Authority (CA)**, verifies the identity of an individual or entity and then digitally signs their public key, creating a **public key certificate**. This certificate binds the public key to the identity of its owner.
*   **How it works:**
    1.  **Registration:** Alice requests a certificate from a CA. She provides proof of her identity.
    2.  **Certificate Generation:** The CA verifies Alice's identity. If verified, the CA creates a certificate containing:
        *   Alice's identity (e.g., name, organization).
        *   Alice's public key.
        *   The CA's identity.
        *   The validity period of the certificate.
        *   The CA's digital signature on all the above information.
    3.  **Distribution:** Alice can then distribute this certificate to anyone who needs her public key.
    4.  **Verification:** When Bob receives Alice's certificate, he can verify it by:
        *   Retrieving the CA's public key (which is usually widely known and pre-installed in operating systems and browsers).
        *   Using the CA's public key to verify the CA's digital signature on Alice's certificate. If the signature is valid, Bob knows that the CA vouches for the binding between Alice's identity and her public key.
        *   Checking that the certificate has not expired and that the identity in the certificate matches the entity Bob intends to communicate with.

*   **Pros:** Provides a high degree of assurance about the authenticity of the public key.
*   **Cons:** Requires a trusted CA infrastructure. If the CA is compromised, the entire system can be at risk. The CA must be trusted by all parties.

**Example:** Alice wants to send a secure email to Bob. Bob has previously obtained a certificate from a trusted CA. Bob shares his certificate with Alice. Alice verifies Bob's certificate using the CA's public key. Once verified, Alice knows that the public key in the certificate is indeed Bob's. She can then use this public key to encrypt her message for Bob.

**Key Concepts:**
*   Certificate Authority (CA)
*   Public Key Certificate (Digital Certificate)
*   Digital Signature (by CA)
*   Binding (identity to public key)
*   Certificate Chain (Hierarchical CAs)
*   Revocation (Certificate Revocation List - CRL, Online Certificate Status Protocol - OCSP)

**Reference:** Stallings, Chapter 10; Forouzan, Chapter 15.

**Learning Outcome Alignment:** This is a core mechanism for achieving CO3.

#### 3.3. Directory Service

A more organized approach than simple announcements.

*   **Description:** Public keys are stored in a centralized, accessible directory. Entries in the directory are authenticated.
*   **How it works:**
    1.  **Registration:** Users submit their public keys and proof of identity to a directory service.
    2.  **Authentication:** The directory service verifies the authenticity of the submitted public keys, often through some form of registration process or by requiring keys to be certified (similar to certificates).
    3.  **Retrieval:** Users can query the directory to retrieve the public key of another user.
*   **Pros:** Provides a centralized and potentially organized way to access public keys.
*   **Cons:** The directory service itself becomes a critical point of failure and a target for attacks. The directory service needs to ensure the integrity and authenticity of the keys it stores. Can be susceptible to directory poisoning if not properly secured.

**Example:** Imagine a company directory where employees' public keys are listed alongside their contact information. When a new employee joins, their public key is verified and added to the directory.

**Key Concepts:**
*   Directory Service
*   Centralized storage
*   Authentication of entries

**Reference:** Stallings, Chapter 1.

**Learning Outcome Alignment:** Another approach relevant to CO3.

#### 3.4. Public Key Infrastructure (PKI)

The most comprehensive and widely adopted framework for managing public keys.

*   **Description:** PKI is a system that provides the ability to manage public keys and the associated cryptographic operations. It is built around the use of public key certificates issued by CAs. PKI defines the policies, procedures, and technologies required to create, manage, distribute, use, store, and revoke digital certificates.
*   **Key Components of PKI:**
    *   **Certificate Authority (CA):** Issues and revokes certificates.
    *   **Registration Authority (RA):** Verifies the identity of entities requesting certificates.
    *   **Certificate Repository:** A database storing issued certificates.
    *   **Certificate Revocation List (CRL):** A list of revoked certificates.
    *   **Online Certificate Status Protocol (OCSP):** A protocol to check the status of a certificate in real-time.
*   **Pros:** Provides a robust and scalable framework for managing public keys and trust. Enables secure communication and digital signatures across large organizations and the internet.
*   **Cons:** Complex to implement and manage. Requires careful policy definition and adherence.

**Example:** The SSL/TLS certificates used to secure websites (HTTPS) are a prime example of PKI in action. When you visit a secure website, your browser checks the website's certificate, which was issued by a trusted CA.

**Key Concepts:**
*   Public Key Infrastructure (PKI)
*   Certificate Authority (CA)
*   Registration Authority (RA)
*   Certificate Repository
*   Certificate Revocation List (CRL)
*   Online Certificate Status Protocol (OCSP)
*   Trust Hierarchy

**Reference:** Stallings, Chapter 10; Forouzan, Chapter 15.

**Learning Outcome Alignment:** PKI is the overarching framework for achieving secure key distribution, directly supporting CO3.

### 4. Trust Models and Hierarchies

The security of public key distribution using certificates relies heavily on the trust placed in the entities involved.

#### 4.1. Trust Models

*   **Web of Trust:** In a peer-to-peer model, individuals can vouch for each other's public keys. If Alice trusts Bob, and Bob trusts Carol, then Alice might trust Carol's public key (indirectly). This is often seen in systems like PGP (Pretty Good Privacy).
    *   **Pros:** Decentralized, no reliance on a single authority.
    *   **Cons:** Can be complex to manage, trust is subjective and transitive. If Bob's trust is misplaced, Alice could be vulnerable.
*   **Hierarchical Trust:** A more structured approach where a single root CA (or a few trusted root CAs) is at the top of the hierarchy. This root CA signs certificates for intermediate CAs, which in turn sign certificates for end-entities (users, servers, etc.). This forms a trust chain.
    *   **Pros:** Scalable, clear lines of trust.
    *   **Cons:** The root CA is a single point of failure and must be highly secured and trusted.

**Key Concepts:**
*   Web of Trust (PGP)
*   Hierarchical Trust
*   Root CA
*   Intermediate CA
*   End-entity Certificate

**Reference:** Stallings, Chapter 10.

**Learning Outcome Alignment:** Understanding trust models is crucial for appreciating how public keys are validated, supporting CO3.

#### 4.2. Certificate Revocation

Certificates have a limited validity period. However, a certificate might need to be invalidated *before* its expiry date if, for example, the private key is compromised.

*   **Certificate Revocation List (CRL):** A list published by the CA containing the serial numbers of revoked certificates.
    *   **Pros:** Simple to implement.
    *   **Cons:** CRLs can grow very large, making them inefficient to download and process. There's a delay between revocation and the CRL being updated and distributed, leaving a window of vulnerability.
*   **Online Certificate Status Protocol (OCSP):** A protocol where a client sends a request to an OCSP responder (operated by the CA) to query the status of a specific certificate.
    *   **Pros:** Real-time status checking, avoids the need to download large CRLs.
    *   **Cons:** Requires direct communication with the OCSP responder, which can be a performance bottleneck and privacy concern (reveals which certificates a user is checking).

**Key Concepts:**
*   Certificate Revocation
*   Compromised Private Key
*   Certificate Revocation List (CRL)
*   Online Certificate Status Protocol (OCSP)

**Reference:** Stallings, Chapter 10; Forouzan, Chapter 15.

**Learning Outcome Alignment:** Revocation is a critical aspect of maintaining the security of public key distribution, supporting CO3.

### 5. Cryptographic Algorithms for Key Distribution (Brief Mention)

While this module focuses on the *distribution* of keys, it's worth noting that public-key cryptography itself is used in various key distribution mechanisms.

*   **Diffie-Hellman Key Exchange:** A protocol that allows two parties to establish a shared secret key over an insecure channel without any prior shared secret. This secret can then be used for symmetric encryption.
*   **RSA:** Can be used to encrypt a symmetric key for transmission to another party.

**Key Concepts:**
*   Diffie-Hellman Key Exchange
*   RSA for key transport

**Reference:** Stallings, Chapter 9 (for Diffie-Hellman, which is often covered with public-key concepts).

**Learning Outcome Alignment:** Briefly touches upon how public-key principles are applied in key distribution, relevant to CO3.

### 6. Practice Questions and Exercises

1.  **Scenario:** Alice wants to send a secret message to Bob. Bob's public key is available on a public bulletin board. Mallory intercepts Alice's request for Bob's key and substitutes her own public key. Describe the sequence of events that would occur and explain why this method is insecure.
    *   **Answer:** See Section 3.1 (Public Announcement). Mallory substitutes her key. Alice encrypts with Mallory's key. Mallory decrypts, reads, and can optionally re-encrypt for Bob using Bob's legitimate key if she has it.
2.  **Explain the role of a Certificate Authority (CA) in public key distribution.** What are the main responsibilities of a CA?
    *   **Answer:** A CA is a trusted third party responsible for verifying identities and issuing digital certificates that bind public keys to those identities. Its responsibilities include: verifying identities, generating and signing certificates, managing certificate revocation (e.g., publishing CRLs), and maintaining the security of its private key.
3.  **What is the fundamental problem that public key certificates are designed to solve?**
    *   **Answer:** The fundamental problem is ensuring the **authenticity** of a public key. It solves the problem of verifying that a given public key actually belongs to the claimed entity and has not been impersonated by an attacker.
4.  **Compare and contrast Certificate Revocation Lists (CRLs) and Online Certificate Status Protocol (OCSP). What are the advantages and disadvantages of each?**
    *   **Answer:**
        *   **CRLs:** Pro: Simple. Con: Large size, delay in updates.
        *   **OCSP:** Pro: Real-time, smaller data transfer per query. Con: Requires direct communication with responder, potential performance/privacy issues.
5.  **If you wanted to securely distribute your public key to a large number of people without relying on a central authority, what trust model might you consider? Briefly explain its mechanism.**
    *   **Answer:** The **Web of Trust** model (e.g., PGP) could be considered. Individuals would sign each other's public keys, creating a network of trust. You would get your key signed by people whom others already trust.

### 7. Important Points to Remember

*   The core challenge in public key distribution is ensuring the **authenticity** of the public key.
*   **Public announcement** is insecure because it lacks authenticity.
*   **Public key certificates**, issued by **Certificate Authorities (CAs)**, are the most common and secure method for distributing public keys.
*   A public key certificate binds an identity to a public key and is digitally signed by the CA.
*   **Public Key Infrastructure (PKI)** is the comprehensive framework for managing public keys and certificates.
*   **Certificate revocation** is essential to invalidate compromised or no longer valid certificates. CRLs and OCSP are mechanisms for this.
*   Trust models like **hierarchical trust** and the **web of trust** define how trust is established in public key systems.

### 8. Learning Outcome Checklist

*   **CO1: Explain network security services and mechanisms and the types of attacks they are designed for and apply the concepts of modular arithmetic, Euclidean algorithm, polynomial arithmetic.**
    *   While direct application of modular arithmetic isn't the focus of this topic, understanding public key cryptography (as covered here) relies on these underlying mathematical principles. The topic explains mechanisms (certificates, PKI) and attacks (impersonation).
*   **CO2: Illustrate the principles of modern symmetric ciphers like Data Encryption Standard and Advanced Encryption Standard.**
    *   This topic is about public-key cryptography, not symmetric.
*   **CO3: Outline the concepts of public key cryptography, RSA algorithm, key distribution, and management for public key systems.**
    *   **Covered extensively:** This topic directly addresses public key distribution, certificates, CAs, PKI, and trust models.
*   **CO4: Explain the requirements for authentication and the types of functions used to produce an authenticator.**
    *   This topic addresses the requirement for authentication of public keys and how certificates provide it.

This module provides the foundational knowledge for CO3, focusing on the critical aspect of making public keys trustworthy.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
