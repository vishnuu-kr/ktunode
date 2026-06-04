---
title: "Secure Hash Algorithm (SHA)"
subject: "FUNDAMENTALS OF CRYPTOGRAPHY"
module: "Module 4: Cryptographic Hash Functions "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8bce2"
status: "completed"
scrapedAt: "2026-05-20T16:54:12.442Z"
---
# FUNDAMENTALS OF CRYPTOGRAPHY - MODULE 4: CRYPTOGRAPHIC HASH FUNCTIONS - SHA (Secure Hash Algorithm)

## Introduction

This module focuses on Secure Hash Algorithms (SHA), a family of cryptographic hash functions widely used for data integrity and security applications. We'll delve into the key properties of SHA, different SHA variants, and their practical uses.

## Learning Outcomes

Upon completion of this topic, you should be able to:

*   **Define and explain the purpose of a cryptographic hash function.**
*   **Describe the key properties of SHA algorithms (preimage resistance, second preimage resistance, collision resistance).**
*   **Distinguish between different SHA variants (SHA-1, SHA-2, SHA-3) and their characteristics.**
*   **Explain the basic operation of SHA algorithms.**
*   **Identify common applications of SHA algorithms.**
*   **Understand the limitations of SHA-1 and the reasons for its deprecation.**

## 1. What are Cryptographic Hash Functions?

*   **Definition:** A cryptographic hash function is a mathematical function that takes an arbitrary-sized input (or "message") and produces a fixed-size output called a "hash value" or "message digest."

*   **Purpose:** Primarily used to ensure data integrity. Any change to the input data will result in a significantly different hash value.  They also play a role in digital signatures and other security applications.

*   **One-Way Function:** Ideally, hash functions should be *one-way*. This means it's computationally infeasible to reverse the process - i.e., to find the input that produces a specific hash output.

*   **Example:** Imagine a function `H(x)` where `x` is any text and `H(x)` is a 256-bit string.  If `H("hello")` is `5feceb66ffc86f38d952786c6d696c79c2dbc239dd4e91b46729d73a27fb57e9`, then even a tiny change to the input, like `H("Hello")`, should produce a drastically different hash, such as `185f8db32271fe25f561a6fc938b2e264306ec304eda518007d1764826381969`.

## 2. Key Properties of SHA Algorithms

SHA algorithms, like all good cryptographic hash functions, are designed to have the following key properties:

*   **Preimage Resistance (One-Wayness):**
    *   **Definition:** Given a hash value `h`, it should be computationally infeasible to find any input `m` such that `H(m) = h`.  Essentially, you can't reverse the hash to find the original message.
    *   **Importance:** Prevents attackers from forging messages based on known hash values.
    *   **Example:** If you know the hash of someone's password, you shouldn't be able to easily figure out what the password is.

*   **Second Preimage Resistance (Weak Collision Resistance):**
    *   **Definition:** Given an input `m1`, it should be computationally infeasible to find a different input `m2` (where `m2 != m1`) such that `H(m1) = H(m2)`.
    *   **Importance:** Prevents an attacker who knows a valid message from creating another valid message with the same hash.
    *   **Example:** An attacker can't create a different contract with the same hash as a valid contract to defraud someone.

*   **Collision Resistance (Strong Collision Resistance):**
    *   **Definition:** It should be computationally infeasible to find *any* two distinct inputs `m1` and `m2` such that `H(m1) = H(m2)`.  This is the strongest security guarantee.
    *   **Importance:**  If collisions are easy to find, an attacker could substitute a malicious message with the same hash as a legitimate message.
    *   **Example:**  An attacker can't easily find two different programs that produce the same hash, allowing them to replace a safe program with a malicious one.

**Important Note:** While finding collisions is *theoretically* possible due to the pigeonhole principle (more inputs than outputs), a secure hash function ensures this is computationally infeasible in practice.

## 3. SHA Variants: SHA-1, SHA-2, SHA-3

The SHA family has evolved over time. Here's a breakdown of the key variants:

*   **SHA-1 (Secure Hash Algorithm 1):**
    *   **Output Size:** 160 bits (20 bytes)
    *   **History:** Developed by the NSA and published as a U.S. Federal Information Processing Standard.
    *   **Vulnerabilities:**  SHA-1 has been broken.  Collisions can be found, making it unsuitable for many security-critical applications.  It's considered deprecated.
    *   **Reason for Deprecation:** Increased computational power has made collision attacks practical.

*   **SHA-2 (Secure Hash Algorithm 2):**
    *   **Family:** Includes SHA-224, SHA-256, SHA-384, SHA-512, SHA-512/224, and SHA-512/256.  The number indicates the output size in bits.
    *   **Output Sizes:** Ranging from 224 bits to 512 bits.
    *   **Algorithm:**  Based on a similar structure to SHA-1, but considered more secure due to its larger output sizes and strengthened internal operations.
    *   **Status:** Generally considered secure, although ongoing research and cryptanalysis continue.  SHA-256 and SHA-512 are widely used.

*   **SHA-3 (Secure Hash Algorithm 3):**
    *   **Design:** Unlike SHA-1 and SHA-2, SHA-3 is based on a completely different construction called *Sponge Function* using the *Keccak* algorithm.  This makes it more resistant to the types of attacks that plagued SHA-1.
    *   **Output Sizes:**  SHA3-224, SHA3-256, SHA3-384, SHA3-512, and SHAKE128, SHAKE256 (extendable-output functions or XOFs).
    *   **Purpose:** Developed as an alternative to SHA-2.  While SHA-2 is currently considered secure, SHA-3 provides a backup option in case SHA-2 is compromised in the future.
    *   **Extendable-Output Functions (XOFs):** SHAKE128 and SHAKE256 allow the output length to be specified, making them more flexible for certain applications.

**Summary Table:**

| Algorithm | Output Size (bits) | Basis             | Status                  |
| --------- | ------------------ | ----------------- | ----------------------- |
| SHA-1     | 160                | Merkle-Damgård    | Deprecated              |
| SHA-224   | 224                | Merkle-Damgård    | Secure (Generally)      |
| SHA-256   | 256                | Merkle-Damgård    | Secure (Widely Used)    |
| SHA-384   | 384                | Merkle-Damgård    | Secure (Generally)      |
| SHA-512   | 512                | Merkle-Damgård    | Secure (Widely Used)    |
| SHA3-224  | 224                | Sponge (Keccak)   | Secure                  |
| SHA3-256  | 256                | Sponge (Keccak)   | Secure                  |
| SHA3-384  | 384                | Sponge (Keccak)   | Secure                  |
| SHA3-512  | 512                | Sponge (Keccak)   | Secure                  |
| SHAKE128  | Variable           | Sponge (Keccak)   | Secure                  |
| SHAKE256  | Variable           | Sponge (Keccak)   | Secure                  |

## 4. Basic Operation of SHA Algorithms (Simplified Overview)

While the exact details of SHA algorithms are complex, the general operation involves these steps (for SHA-1 and SHA-2, which use the Merkle-Damgård construction):

1.  **Padding:** The input message is padded to a specific length. This padding is deterministic and ensures that the message length is a multiple of the algorithm's block size.

2.  **Parsing:** The padded message is parsed into blocks of a fixed size (e.g., 512 bits for SHA-256).

3.  **Initialization:** An initial hash value (IV) is set. This IV is a constant specific to the SHA algorithm.

4.  **Compression Function:**  A compression function (also known as a mixing function) is applied to each block of the message, along with the previous hash value (or the IV for the first block). This function involves a series of bitwise operations (AND, OR, XOR, NOT), rotations, and additions.

5.  **Iteration:** The output of the compression function becomes the input (previous hash value) for the next block.  This process is repeated for all message blocks.

6.  **Finalization:** After processing all blocks, a final hash value is produced. This is the message digest.

**SHA-3 (Keccak) uses a Sponge Function Construction:**

1. **Padding:** Similar to SHA-1/SHA-2, the input is padded.
2. **Absorbing Phase:** The padded message is XORed into the first 'r' bits (rate) of the state, and then the Keccak-f permutation function is applied.  This is repeated for each block of 'r' bits.
3. **Squeezing Phase:** The first 'r' bits of the state are output as part of the hash. The Keccak-f permutation function is then applied, and again the first 'r' bits are output. This continues until the desired hash length is reached.

**Important:** Understanding the *specific* bitwise operations and internal rounds isn't as crucial as understanding the *overall process* and the properties that make these algorithms secure.

## 5. Common Applications of SHA Algorithms

*   **Password Storage:** Storing passwords as hashes instead of plain text. When a user enters their password, it's hashed, and the result is compared to the stored hash. Even if the database is compromised, the passwords remain protected (although rainbow table attacks and salt are used to further strengthen this).
*   **Digital Signatures:** SHA algorithms are used to hash documents before they are signed with a private key. This ensures the integrity of the signed document.
*   **Data Integrity Verification:** Ensuring that data hasn't been tampered with during transmission or storage.
*   **Message Authentication Codes (MACs):** Combining a secret key with a hash to create a MAC, which can be used to verify both the integrity and authenticity of a message.  HMAC (Hash-based Message Authentication Code) is a common example.
*   **Cryptocurrencies (e.g., Bitcoin):** Used in the mining process and to create cryptographic addresses.
*   **File Integrity Checking:** Checking if a downloaded file has been corrupted during download.  The download site typically provides the SHA hash of the file, which you can compare to the hash you calculate locally after downloading.
*   **Git (Version Control):**  Git uses SHA-1 (though it's transitioning away) to uniquely identify commits, files, and directories.

## 6. Limitations of SHA-1 and Reasons for Deprecation

*   **Collision Attacks:** Researchers have demonstrated practical collision attacks against SHA-1.  This means they can find two different messages that produce the same hash value in a reasonable amount of time.
*   **Security Implications:** Collision attacks can be exploited to forge digital signatures, create malicious software with the same hash as a legitimate application, and compromise data integrity.
*   **Transition to Stronger Algorithms:**  Due to the vulnerabilities in SHA-1, it's strongly recommended to use SHA-2 or SHA-3 for all new applications and to migrate away from SHA-1 in existing systems.

## Practice Questions/Exercises

1.  **Define the three main security properties of a cryptographic hash function and explain why each is important.**

    *   **Answer:**  Preimage resistance (prevents reversing the hash), second preimage resistance (prevents finding a different message with the same hash as a known message), and collision resistance (prevents finding any two messages with the same hash). Each property is crucial for ensuring data integrity and preventing various attacks.

2.  **Explain the difference between SHA-2 and SHA-3.  Why was SHA-3 developed?**

    *   **Answer:** SHA-2 is based on the Merkle-Damgård construction, while SHA-3 uses the Sponge function (Keccak algorithm). SHA-3 was developed as an alternative to SHA-2 to provide a backup option in case vulnerabilities are discovered in SHA-2.  It also uses a different design, making it potentially more resistant to certain types of attacks.

3.  **Why is it crucial to use a strong cryptographic hash function for password storage instead of storing passwords in plain text?**

    *   **Answer:** Storing passwords in plain text makes them vulnerable to theft. If a database is compromised, the attackers can directly access the passwords. Hashing the passwords provides a layer of security. Even if the database is compromised, the attackers only obtain the hashes, not the plain text passwords (though further measures like salting are necessary).

4.  **SHA-1 is considered deprecated. What does this mean, and why should it no longer be used for security-critical applications?**

    *   **Answer:** Deprecated means that SHA-1 is no longer considered secure for many applications due to the discovery of collision attacks.  It means that it is possible, with sufficient computational resources, to find two different messages that produce the same SHA-1 hash. This can lead to security breaches, such as forged digital signatures.

5.  **What are some common applications of SHA algorithms?**

    *   **Answer:** Password storage, digital signatures, data integrity verification, message authentication codes (MACs), file integrity checking, and applications in cryptocurrencies.

## Important Points to Remember

*   **SHA-1 is deprecated.**  Avoid using it for any new security-critical applications. Migrate away from it if you're currently using it.
*   **SHA-2 (SHA-256 and SHA-512) and SHA-3 are currently considered secure.** Choose the appropriate variant based on your security requirements and performance considerations.
*   **Cryptographic hash functions are one-way functions.**  It should be computationally infeasible to reverse the process.
*   **Collision resistance is a crucial property.**  If collisions are easy to find, the hash function is compromised.
*   **SHA algorithms are widely used for various security applications, especially data integrity and authentication.**
*   **Always stay updated on the latest security recommendations and potential vulnerabilities related to cryptographic algorithms.**
