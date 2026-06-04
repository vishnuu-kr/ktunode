---
title: "Hash Functions - MD5, SHA-1"
subject: "FOUNDATIONS OF CRYPTOGRAPHY"
module: "Module 4: Symmetric key Ciphers "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8bf21"
status: "completed"
scrapedAt: "2026-05-20T16:53:45.478Z"
---
# Foundations of Cryptography: Module 4 - Symmetric Key Ciphers

## Topic: Hash Functions - MD5, SHA-1

---

### 1. Introduction to Hash Functions

**Key Concepts:**

*   **Cryptographic Hash Function:** A mathematical algorithm that takes an input (message) of any size and produces a fixed-size output (hash value, digest, or fingerprint).
*   **One-Way Function:** It is computationally infeasible to reverse the hashing process, meaning you cannot determine the original message from its hash value.
*   **Deterministic:** The same input will always produce the same output hash.
*   **Fixed Output Size:** Regardless of the input size (a single character or a large file), the hash output will always be the same length.

**Purpose of Hash Functions in Cryptography:**

*   **Integrity Verification:** Detecting unauthorized modifications to data. If even a single bit of the input is changed, the resulting hash will be significantly different.
*   **Password Storage:** Storing hash values of passwords instead of plaintext passwords. This prevents attackers from obtaining plaintext passwords even if they gain access to the database.
*   **Digital Signatures:** Hashing a message before signing it makes the signing process more efficient and secure.
*   **Message Authentication Codes (MACs):** Used in conjunction with a secret key to ensure both data integrity and authenticity.
*   **Data Indexing and Deduplication:** Used in systems to quickly identify identical data blocks.

**Essential Properties of a Cryptographic Hash Function:**

1.  **Pre-image Resistance (One-Way Property):** Given a hash value $h$, it is computationally infeasible to find any message $m$ such that $H(m) = h$.
2.  **Second Pre-image Resistance (Weak Collision Resistance):** Given a message $m_1$, it is computationally infeasible to find a *different* message $m_2$ such that $H(m_1) = H(m_2)$.
3.  **Collision Resistance (Strong Collision Resistance):** It is computationally infeasible to find *any* two distinct messages $m_1$ and $m_2$ such that $H(m_1) = H(m_2)$.

---

### 2. Message Digest Algorithm (MD5)

**Overview:**

*   MD5 is a widely used cryptographic hash function that produces a 128-bit (16-byte) hash value.
*   It was designed by Ronald Rivest in 1991 and published in RFC 1321.
*   MD5 was considered secure for many years, but significant vulnerabilities have been discovered.

**How MD5 Works (Simplified):**

MD5 processes input data in 512-bit blocks. Each block undergoes a series of complex operations involving:

*   **Padding:** The input message is padded to ensure its length is a multiple of 512 bits. This involves appending a '1' bit, followed by '0' bits, and finally the original message length.
*   **Initialization Vector (IV):** A set of four 32-bit initial values (A, B, C, D).
*   **Four Rounds:** Each 512-bit block is processed through four rounds. Each round consists of 16 operations, utilizing non-linear functions, bitwise operations (AND, OR, XOR, NOT), modular addition, and bitwise rotations.
*   **Output:** The final hash value is the concatenation of the four 32-bit intermediate values.

**MD5 Hash Output Example:**

Let's take a simple string: "Hello, World!"

```
Input: Hello, World!
MD5 Hash: 86fb269d190d2c85f6e0468cecf167a5
```

**Vulnerabilities of MD5:**

*   **Collision Vulnerabilities:** MD5 is **no longer considered cryptographically secure** due to practical collision attacks. Researchers have demonstrated that it is feasible to find two different messages that produce the same MD5 hash.
    *   **Example:** Two seemingly different PDF files can be crafted such that they have the same MD5 hash. This could be used to present a malicious file as a benign one.
*   **Birthday Attack:** Even without finding specific collisions, the birthday paradox makes it easier to find collisions for MD5 than would be ideal for a secure hash function.

**When to Use (and When Not to Use) MD5:**

*   **Avoid for Security-Sensitive Applications:** Do not use MD5 for password hashing, digital signatures, or any application where collision resistance is critical.
*   **Acceptable for Non-Cryptographic Uses:** MD5 can still be used for non-security-critical applications like checksums for file integrity verification in less sensitive environments, or for data deduplication where perfect collision resistance is not a requirement.

---

### 3. Secure Hash Algorithm 1 (SHA-1)

**Overview:**

*   SHA-1 is a cryptographic hash function developed by the NSA and published by the NIST as a U.S. Federal Information Processing Standard (FIPS).
*   It produces a 160-bit (20-byte) hash value.
*   SHA-1 was designed as a successor to MD5, aiming to provide greater security.

**How SHA-1 Works (Simplified):**

SHA-1 also processes input data in 512-bit blocks, similar to MD5, but with more rounds and a larger output size. The core process involves:

*   **Padding:** Similar padding scheme to MD5, ensuring the message length is a multiple of 512 bits.
*   **Initialization Vector (IV):** A set of five 32-bit initial values (H0, H1, H2, H3, H4).
*   **Five Rounds:** Each 512-bit block is processed through five rounds, each with 20 operations. These operations involve non-linear functions, bitwise operations, modular addition, and bitwise rotations. The functions and constants used are more complex than in MD5.
*   **Output:** The final hash value is the concatenation of the five 32-bit intermediate values.

**SHA-1 Hash Output Example:**

Let's take the same string: "Hello, World!"

```
Input: Hello, World!
SHA-1 Hash: 2aae3b86b7a7f9d6dd8c1b194181479b699071b7
```

**Vulnerabilities of SHA-1:**

*   **Collision Vulnerabilities:** Similar to MD5, SHA-1 has been shown to be vulnerable to collision attacks.
    *   In 2017, Google announced the first practical SHA-1 collision, named **SHAttered**. This demonstrated that finding collisions was no longer purely theoretical but practically achievable with significant computational resources.
    *   The complexity of finding a collision in SHA-1 is estimated to be around $2^{63}$ operations, which is significantly less than the ideal $2^{80}$ for a 160-bit hash function.

**When to Use (and When Not to Use) SHA-1:**

*   **Deprecation:** SHA-1 has been officially deprecated by NIST for most cryptographic purposes.
*   **Avoid for Security-Sensitive Applications:** Like MD5, do not use SHA-1 for password hashing, digital signatures, or any application requiring strong collision resistance.
*   **Legacy Systems:** It might still be encountered in older systems, but migration to stronger algorithms is strongly recommended.

---

### 4. Modern Alternatives and Best Practices

Given the vulnerabilities of MD5 and SHA-1, it is crucial to use more secure hash functions for cryptographic applications.

**Recommended Secure Hash Algorithms:**

*   **SHA-2 Family:**
    *   **SHA-256:** Produces a 256-bit hash. Currently considered secure and widely used.
    *   **SHA-384:** Produces a 384-bit hash.
    *   **SHA-512:** Produces a 512-bit hash.
*   **SHA-3 Family:** A newer generation of hash functions designed to be resistant to the types of attacks that weakened MD5 and SHA-1.
    *   **SHA3-256, SHA3-384, SHA3-512:** Provide similar output sizes to SHA-2.
*   **BLAKE2:** A modern, fast, and secure cryptographic hash function.

**Best Practices:**

*   **Always use hash functions from the SHA-2 or SHA-3 families, or BLAKE2.**
*   **For password hashing, use dedicated password hashing functions like Argon2, scrypt, or bcrypt.** These functions are designed to be computationally expensive and resistant to brute-force attacks.
*   **Stay updated on cryptographic best practices and algorithm recommendations.** The field of cryptography is constantly evolving.

---

### 5. Practice Questions and Exercises

**Question 1:**
What is the primary purpose of a cryptographic hash function in terms of data security?

**Question 2:**
List the three essential properties of a secure cryptographic hash function. Briefly explain one of them.

**Question 3:**
What is the output size of the MD5 hash function?

**Question 4:**
What is the main reason MD5 is no longer considered secure for cryptographic applications?

**Question 5:**
What is the output size of the SHA-1 hash function?

**Question 6:**
What was the name of the first practical collision attack demonstrated for SHA-1?

**Question 7:**
Which modern hash function families are recommended as secure alternatives to MD5 and SHA-1?

**Question 8:**
If you were designing a system to store user passwords securely, would you use MD5, SHA-1, or a dedicated password hashing function? Explain your reasoning.

---

### 6. Answers to Practice Questions

**Answer 1:**
The primary purpose of a cryptographic hash function is to ensure **data integrity**. It allows for the verification that data has not been altered or corrupted since the hash was generated.

**Answer 2:**
The three essential properties are:
1.  **Pre-image Resistance (One-Way Property):** It's hard to find the original message from its hash.
2.  **Second Pre-image Resistance (Weak Collision Resistance):** Given one message, it's hard to find another message with the same hash.
3.  **Collision Resistance (Strong Collision Resistance):** It's hard to find any two different messages with the same hash.
    *(Brief explanation of one property is sufficient here, e.g., "Pre-image resistance means that if you have a hash value, you cannot easily figure out what the original message was.")*

**Answer 3:**
The output size of the MD5 hash function is **128 bits (16 bytes)**.

**Answer 4:**
The main reason MD5 is no longer secure is its vulnerability to **collision attacks**. It is now feasible to find two different messages that produce the same MD5 hash.

**Answer 5:**
The output size of the SHA-1 hash function is **160 bits (20 bytes)**.

**Answer 6:**
The name of the first practical collision attack demonstrated for SHA-1 was **SHAttered**.

**Answer 7:**
The recommended secure modern hash function families are the **SHA-2 family** (e.g., SHA-256, SHA-384, SHA-512) and the **SHA-3 family**. BLAKE2 is also a recommended alternative.

**Answer 8:**
You would use a **dedicated password hashing function** (like Argon2, scrypt, or bcrypt).
**Reasoning:** MD5 and SHA-1 are vulnerable to collision attacks and are too fast for password hashing. Modern password hashing functions are designed to be computationally expensive (slow), often incorporating a "salt" (random data added to the password before hashing) and having tunable work factors to make brute-force attacks infeasible, even with specialized hardware. Using MD5 or SHA-1 for passwords would expose them to significantly higher risks of compromise.

---

### 7. Important Points to Remember

*   **Hash functions are one-way:** You can't get the original message back from the hash.
*   **Hash functions are deterministic:** The same input always yields the same output.
*   **Hash functions are collision-prone:** Finding collisions makes them insecure for many cryptographic uses.
*   **MD5 and SHA-1 are broken:** Do NOT use them for security-sensitive applications like password storage or digital signatures.
*   **Always use modern, secure hash functions:** SHA-2 (SHA-256, SHA-512), SHA-3, and BLAKE2 are the current standards.
*   **For passwords, use dedicated password hashing functions:** These are designed to be slow and resource-intensive to thwart brute-force attacks.
