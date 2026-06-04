---
title: "Hash function"
subject: "SECURE COMMUNICATION"
module: "Module 4: Message Authentication and Hash Function: "
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c460b09ce205780fee96"
status: "completed"
scrapedAt: "2026-05-23T18:03:20.533Z"
---
# SECURE COMMUNICATION: Module 4 - Message Authentication and Hash Functions

## Topic: Hash Functions

### Learning Outcomes:

*   Understand the concept of cryptographic hash functions.
*   Identify the essential properties of hash functions.
*   Analyze the security of hash functions against various attacks.
*   Explore common hash function algorithms and their applications.
*   Understand the relationship between hash functions and message authentication.

### Course Outcomes Alignment:

*   **CO4: Explain the requirements for authentication and the types of functions used to produce an authenticator (Knowledge Level: K2)**
    *   This module directly addresses the requirements for authentication by explaining how hash functions are used to create authenticators. We will explore the properties that make hash functions suitable for this purpose.

### 1. Introduction to Hash Functions

**Definition:**
A **hash function** (also known as a message digest function or compression function) is a mathematical algorithm that takes an arbitrary-sized input (message) and produces a fixed-size output, called a **hash value** or **message digest**. This process is deterministic, meaning the same input will always produce the same output.

**Analogy:**
Think of a hash function like a unique fingerprint for a digital message. No matter how large or small the message is, its fingerprint (hash value) will always be the same size and will be uniquely representative of the message content. Even a minor change in the message will result in a completely different fingerprint.

**Key Purpose:**
The primary purpose of hash functions in secure communication is to provide **data integrity** and **message authentication**.

### 2. Essential Properties of Cryptographic Hash Functions

For a hash function to be considered cryptographically secure, it must possess the following properties:

*   **Pre-image Resistance (One-Way Property):**
    *   **Definition:** Given a hash value $h$, it should be computationally infeasible to find a message $m$ such that $H(m) = h$.
    *   **Importance:** Prevents an attacker from forging a message that hashes to a specific, known digest.
    *   **Stallings' Perspective (Chapter 9):** Stallings emphasizes that this property is crucial for digital signatures, where the hash of a message is encrypted. If pre-image resistance is broken, signatures can be forged.

*   **Second Pre-image Resistance (Weak Collision Resistance):**
    *   **Definition:** Given a message $m_1$, it should be computationally infeasible to find a *different* message $m_2$ such that $H(m_1) = H(m_2)$.
    *   **Importance:** Prevents an attacker from substituting a legitimate message with a different one that has the same hash value, thus fooling the recipient into accepting a fraudulent message.
    *   **Example:** If Alice sends a message with hash $h$, an attacker might try to find another message $m'$ that also hashes to $h$. If successful, they could replace Alice's message with $m'$ without detection.

*   **Collision Resistance (Strong Collision Resistance):**
    *   **Definition:** It should be computationally infeasible to find *any* two distinct messages $m_1$ and $m_2$ such that $H(m_1) = H(m_2)$.
    *   **Importance:** This is the strongest requirement. It ensures that an attacker cannot create two different messages with the same hash value, which could be used for malicious purposes (e.g., creating a fraudulent contract with the same hash as a legitimate one).
    *   **Birthday Attack:** Collision resistance is often discussed in the context of the "birthday attack." If a hash function produces $n$-bit hash values, a brute-force attack to find a collision would require approximately $2^{n/2}$ operations, not $2^n$. This is because we are looking for any two messages that collide, rather than a specific message for a given hash. Therefore, longer hash outputs are more resistant to birthday attacks.
    *   **Stallings' Perspective (Chapter 9):** Stallings explains that collision resistance is essential for secure hash functions and highlights the computational effort required to break it.

*   **Pseudorandomness:**
    *   **Definition:** The output of a hash function should appear random and unpredictable, even if the input is systematic.
    *   **Importance:** Ensures that the hash value does not reveal any information about the input message beyond its integrity.

*   **Avalanche Effect:**
    *   **Definition:** A small change in the input message (e.g., changing a single bit) should result in a significant and unpredictable change in the output hash value (ideally, about half of the output bits should change).
    *   **Importance:** Makes it difficult to guess the hash of a slightly modified message based on the hash of the original message.

### 3. How Hash Functions Provide Message Authentication

Hash functions, when used in conjunction with a secret key or digital signatures, form the basis of message authentication.

*   **Message Authentication Code (MAC):**
    *   A MAC is a short piece of information used to authenticate a message. It's generated using a secret key and a hash function.
    *   **Process:**
        1.  The sender computes $MAC = H(K || m)$, where $K$ is a secret key shared between sender and receiver, $||$ denotes concatenation, and $m$ is the message.
        2.  The sender sends the message $m$ and the MAC to the receiver.
        3.  The receiver, upon receiving $m$ and MAC, computes their own MAC using the same secret key $K$: $MAC' = H(K || m)$.
        4.  The receiver compares $MAC$ and $MAC'$. If they match, the receiver can be confident that the message originated from the sender (authentication) and has not been altered in transit (integrity).
    *   **Forouzan's Perspective (Chapter 13):** Forouzan extensively discusses MACs and how they provide authentication by binding the message to a shared secret key. He explains that the hash function's role is to condense the message and the key into a fixed-size tag.

*   **Digital Signatures:**
    *   Hash functions are a crucial component of digital signatures, which provide authentication, integrity, and non-repudiation.
    *   **Process:**
        1.  The sender computes $h = H(m)$.
        2.  The sender encrypts the hash $h$ with their private key: $S = Enc_{priv}(h)$. This is the digital signature.
        3.  The sender sends the message $m$ and the signature $S$ to the receiver.
        4.  The receiver decrypts the signature using the sender's public key: $h' = Dec_{pub}(S)$.
        5.  The receiver computes the hash of the received message: $h'' = H(m)$.
        6.  The receiver compares $h'$ and $h''$. If they match, the message is authenticated, integrity is verified, and the sender cannot deny sending it (non-repudiation).
    *   **Stallings' Perspective (Chapter 9):** Stallings details how hash functions enable digital signatures by creating a compact representation of the message that can be efficiently signed.

### 4. Common Hash Function Algorithms

*   **Message Digest (MD) Family:**
    *   **MD5:**
        *   Developed by Ronald Rivest.
        *   Produces a 128-bit hash value.
        *   **Status:** **Cryptographically broken.** Collisions can be found relatively easily. **Should not be used for security purposes.**
    *   **MD4:**
        *   Also developed by Rivest.
        *   Produces a 128-bit hash value.
        *   **Status:** **Broken.** Even weaker than MD5.

*   **Secure Hash Algorithm (SHA) Family:**
    *   Developed by the NSA and published by NIST.
    *   **SHA-0:**
        *   A 160-bit hash function.
        *   **Status:** Found to have security weaknesses and withdrawn.
    *   **SHA-1:**
        *   Produces a 160-bit hash value.
        *   **Status:** **Considered cryptographically weak.** Collisions have been demonstrated, and it is being phased out. **Avoid using for new applications.**
    *   **SHA-2 Family (SHA-224, SHA-256, SHA-384, SHA-512, SHA-512/224, SHA-512/256):**
        *   These are currently considered secure and are widely used.
        *   Produce hash values of varying lengths (224, 256, 384, 512 bits).
        *   SHA-256 is the most common.
        *   **Stallings' Perspective (Chapter 9):** Stallings discusses SHA-2 as the current standard and highlights its improvements over SHA-1.
        *   **Forouzan's Perspective (Chapter 13):** Forouzan also covers SHA-2 algorithms as examples of secure hash functions used in MACs.

*   **SHA-3 Family (Keccak):**
    *   Selected by NIST in 2012 as the successor to SHA-2.
    *   Based on the Keccak algorithm.
    *   Offers different output sizes similar to SHA-2.
    *   Provides a different internal structure, making it more resistant to attacks that might target SHA-2's specific design.

*   **Other Hash Functions:**
    *   **RIPEMD-160:** A 160-bit hash function, considered secure.
    *   **Whirlpool:** A 512-bit hash function, also considered secure.

### 5. Hash Function Attacks

Understanding the types of attacks on hash functions is crucial for choosing secure algorithms.

*   **Brute-Force Attack (on Pre-image Resistance):**
    *   **Description:** To find a message $m$ for a given hash $h$, an attacker would try hashing random messages until they find one that matches $h$.
    *   **Complexity:** For an $n$-bit hash output, this requires approximately $2^n$ operations. This is computationally infeasible for current cryptographic hash functions.

*   **Brute-Force Attack (on Collision Resistance - Birthday Attack):**
    *   **Description:** To find *any* two messages that hash to the same value, an attacker generates $m_1, m_2, m_3, \dots$ and their hashes $H(m_1), H(m_2), H(m_3), \dots$. They then look for a match among these hashes.
    *   **Complexity:** Requires approximately $2^{n/2}$ operations for an $n$-bit hash output. This is significantly less than finding a pre-image.
    *   **Implication:** Hash functions need a sufficiently large output size (e.g., 256 bits) to be resistant to birthday attacks.

*   **Length Extension Attack:**
    *   **Description:** Applicable to hash functions constructed using the Merkle-Damgård construction (like MD5 and SHA-1, SHA-2). If an attacker knows the hash $H(m)$ of a secret message $m$, they can compute the hash of a longer message $m || padding || m'$ without knowing the original secret $m$.
    *   **Vulnerability:** This attack is possible if the hash function's internal state is revealed or can be inferred.
    *   **Mitigation:** Using HMAC (Hash-based Message Authentication Code) or hash functions with different constructions (like SHA-3) can prevent this attack.

*   **Differential Cryptanalysis:**
    *   **Description:** A technique that analyzes how differences in input affect differences in output. It can be used to find collisions or pre-images.
    *   **Relevance:** Successful differential cryptanalysis against MD5 and SHA-1 has demonstrated their weaknesses.

*   **Related-Key Attack:**
    *   **Description:** An attack where an attacker has access to hash computations performed with two or more keys related in some way (e.g., differing by a small amount).

### 6. Applications of Hash Functions

Hash functions have numerous applications in computer security:

*   **Data Integrity:** Ensuring that data has not been altered.
*   **Message Authentication:** Used in MACs and digital signatures.
*   **Password Storage:** Storing hash values of passwords instead of plain text passwords. When a user enters a password, its hash is computed and compared to the stored hash.
*   **Digital Signatures:** As discussed earlier.
*   **Pseudorandom Number Generation:** Can be used to generate sequences of pseudorandom numbers.
*   **Key Derivation Functions (KDFs):** Deriving cryptographic keys from passwords or other secrets.
*   **Blockchain Technology:** Hashing is fundamental to the integrity and security of blockchains, where each block contains a hash of the previous block.

### 7. Important Points to Remember

*   **Hash functions are one-way:** You cannot easily reverse the process to get the original message from its hash.
*   **Collision resistance is key:** The ability to find two different messages with the same hash is a major weakness.
*   **Hash output size matters:** Longer hash outputs are more resistant to attacks.
*   **MD5 and SHA-1 are broken/weak:** Avoid using them for security-critical applications.
*   **SHA-2 and SHA-3 are the current standards.**
*   Hash functions are essential for **integrity** and form a building block for **authentication** (via MACs and digital signatures) and **non-repudiation**.

### 8. Practice Questions and Exercises

**Question 1:**
Explain the difference between pre-image resistance and second pre-image resistance in the context of hash functions. Why is collision resistance considered the strongest property?

**Answer:**
*   **Pre-image Resistance:** Given a hash value $h$, it's hard to find *any* message $m$ such that $H(m) = h$.
*   **Second Pre-image Resistance:** Given a message $m_1$, it's hard to find a *different* message $m_2$ such that $H(m_1) = H(m_2)$.
*   **Collision Resistance:** It's hard to find *any two distinct messages* $m_1$ and $m_2$ such that $H(m_1) = H(m_2)$. Collision resistance is the strongest because if you can find collisions, you can potentially break the other properties as well (e.g., by finding collisions that produce a specific target hash). It's also more vulnerable to birthday attacks than pre-image resistance.

**Question 2:**
If a hash function produces an $n$-bit output, what is the approximate complexity of finding a collision using a birthday attack? What is the complexity of finding a pre-image?

**Answer:**
*   **Collision:** Approximately $2^{n/2}$ operations.
*   **Pre-image:** Approximately $2^n$ operations.

**Question 3:**
Why is MD5 no longer considered secure for cryptographic purposes?

**Answer:**
MD5 is no longer secure because practical methods have been found to generate collisions efficiently. This means an attacker can create two different messages (e.g., a legitimate contract and a fraudulent one) that produce the same MD5 hash, undermining data integrity and authenticity.

**Question 4:**
Describe how a Message Authentication Code (MAC) is generated and verified, highlighting the role of the hash function and a shared secret key.

**Answer:**
*   **Generation:** Sender computes $MAC = H(K || m)$, where $K$ is a shared secret key, $m$ is the message, and $H$ is a hash function.
*   **Verification:** Receiver receives message $m'$ and MAC. They compute $MAC' = H(K || m')$ using the same shared secret key $K$ and hash function $H$. If $MAC = MAC'$, the message is considered authentic and has integrity. The hash function ensures the message and key are condensed into a fixed-size tag, and the secret key ensures only parties with the key can generate valid MACs.

**Question 5:**
Name two commonly used secure hash function families and discuss their respective hash output sizes.

**Answer:**
1.  **SHA-2 Family:** Includes SHA-256 (256-bit output), SHA-512 (512-bit output), SHA-224 (224-bit output), SHA-384 (384-bit output), etc. SHA-256 is widely used.
2.  **SHA-3 Family:** Based on Keccak, it also offers various output sizes, similar to SHA-2, such as SHA3-256 (256-bit output) and SHA3-512 (512-bit output).

**Question 6 (Conceptual):**
Imagine you are designing a system to store user passwords. Briefly explain why simply storing the passwords in plain text is insecure and how a hash function can improve security. What property of the hash function is most relevant here?

**Answer:**
Storing passwords in plain text is insecure because if the database is compromised, all user passwords are immediately exposed, allowing attackers to access user accounts on various services (due to password reuse).
Using a hash function, the system stores the hash of each password ($H(password)$). When a user logs in, their entered password is hashed, and this computed hash is compared to the stored hash. If they match, the user is authenticated. This improves security because even if the database is breached, attackers only get the password hashes, not the actual passwords. The most relevant property here is **pre-image resistance**, as it makes it computationally infeasible for an attacker to derive the original password from its stored hash. However, using strong, salted hashes is crucial to prevent rainbow table attacks.

---

This comprehensive set of notes covers the fundamental aspects of hash functions as required by the learning outcomes and aligns with the course objectives. The references to Stallings and Forouzan indicate where these concepts are further elaborated within the specified textbooks.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
