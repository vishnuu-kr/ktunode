---
title: "Message Authentication Code"
subject: "SECURE COMMUNICATION"
module: "Module 4: Message Authentication and Hash Function: "
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c460b09ce205780fee95"
status: "completed"
scrapedAt: "2026-05-23T18:03:19.681Z"
---
## SECURE COMMUNICATION: Module 4: Message Authentication and Hash Functions

### Topic: Message Authentication Code (MAC)

**Course Outcomes Addressed:**

*   **CO1 (K3):** Explain network security services and mechanisms and the types of attacks they are designed for and apply the concepts of modular arithmetic, Euclidean algorithm, polynomial arithmetic.
*   **CO4 (K2):** Explain the requirements for authentication and the types of functions used to produce an authenticator.

**Learning Outcomes for this Topic:**

Upon completion of this topic, you will be able to:

*   Define Message Authentication Code (MAC).
*   Explain the purpose and function of MACs.
*   Differentiate between MACs and digital signatures.
*   Describe the properties of a good MAC.
*   Understand the different types of MACs.
*   Explain the role of secret keys in MAC generation.
*   Discuss the security implications of MACs.

---

### 1. Introduction to Message Authentication

**Why do we need Message Authentication?**

In secure communication, it's not enough to ensure that a message is delivered confidentially (e.g., through encryption). We also need to verify:

*   **Data Integrity:** Has the message been altered in transit?
*   **Data Origin Authentication:** Did the message originate from the claimed sender?

These are the core functions of **message authentication**.

**CO4 Alignment:** This section directly addresses the requirements for authentication.

---

### 2. What is a Message Authentication Code (MAC)?

A **Message Authentication Code (MAC)** is a small piece of information generated using a secret key and the message itself. It is appended to the message and sent to the receiver. The receiver, using the same secret key and the received message, can independently generate a MAC and compare it with the received MAC.

*   **Purpose:** To provide assurance of message integrity and authenticity.
*   **Mechanism:** A cryptographic function that takes a secret key and a message as input and produces a fixed-size output (the MAC).
*   **Analogy:** Think of it as a tamper-evident seal that is unique to the message and the sender's secret key.

**Key Concept:** A MAC relies on a **secret key** shared between the sender and receiver.

**Stallings (4th Ed., 2006), Chapter 11:** Discusses the need for authentication and introduces MACs as a fundamental mechanism. He emphasizes that MACs provide authentication without necessarily providing non-repudiation (which is handled by digital signatures).

---

### 3. How MACs Work

Let:
*   $M$ be the original message.
*   $K$ be the secret key shared between sender and receiver.
*   $MAC(K, M)$ be the MAC function.

**Sender's Side:**

1.  The sender generates the MAC: $T = MAC(K, M)$.
2.  The sender sends the message $M$ and the MAC $T$ to the receiver.

**Receiver's Side:**

1.  The receiver receives the message $M'$ and the MAC $T'$.
2.  The receiver uses the same secret key $K$ to generate its own MAC for the received message: $T_{calc} = MAC(K, M')$.
3.  The receiver compares $T'$ with $T_{calc}$.
    *   If $T' = T_{calc}$, the receiver is confident that the message has not been altered and originated from the sender who knows the secret key $K$.
    *   If $T' \neq T_{calc}$, the message is either altered or did not originate from the legitimate sender.

**Example:**

Imagine Alice and Bob share a secret key `SECRET_KEY`.

*   **Alice wants to send "Hello, Bob!" to Bob.**
    *   Alice calculates: `MAC("SECRET_KEY", "Hello, Bob!")` -> Let's say this results in `1A2B3C`.
    *   Alice sends: "Hello, Bob!" and `1A2B3C`.

*   **Bob receives "Hello, Bob!" and `1A2B3C`.**
    *   Bob calculates: `MAC("SECRET_KEY", "Hello, Bob!")` -> This should also result in `1A2B3C`.
    *   Bob compares: `1A2B3C` (received) == `1A2B3C` (calculated). The authentication is successful.

*   **Scenario: An attacker intercepts and changes the message to "Hi, Bob!".**
    *   Attacker sends: "Hi, Bob!" and `1A2B3C`.
    *   Bob receives: "Hi, Bob!" and `1A2B3C`.
    *   Bob calculates: `MAC("SECRET_KEY", "Hi, Bob!")` -> This will likely result in a different MAC, say `XYZ789`.
    *   Bob compares: `1A2B3C` (received) != `XYZ789` (calculated). Authentication fails.

**CO1 Alignment:** This section implicitly uses the concept of a function, where the MAC generation is a process that takes inputs (key, message) and produces an output (MAC). While not directly applying arithmetic operations, it sets the stage for how cryptographic primitives (often based on these operations) are used.

---

### 4. MAC vs. Digital Signatures

It's crucial to distinguish MACs from digital signatures, as they serve similar purposes but have key differences.

| Feature         | Message Authentication Code (MAC)                       | Digital Signature                                     |
| :-------------- | :------------------------------------------------------ | :---------------------------------------------------- |
| **Key Used**    | Symmetric secret key (shared between sender/receiver) | Asymmetric private key (sender) and public key (receiver) |
| **Authentication**| Authenticates sender and message integrity.           | Authenticates sender and message integrity.           |
| **Confidentiality**| Does **not** provide confidentiality on its own.   | Does **not** provide confidentiality on its own.   |
| **Non-repudiation**| Does **not** provide non-repudiation. Receiver can also generate the same MAC. | **Provides** non-repudiation. Only the sender with the private key can generate the signature. |
| **Key Management**| Simpler key distribution (one shared secret).       | More complex key management (public key infrastructure). |
| **Computational Cost**| Generally faster.                                   | Generally slower.                                     |

**Important Point to Remember:** A MAC proves that a message came from *someone* who knows the secret key, but not necessarily *only* the sender. The receiver could have also generated the same MAC. Digital signatures, on the other hand, prove that the message came specifically from the holder of the private key.

**Stallings (4th Ed., 2006), Chapter 11:** Clearly delineates the differences between MACs and digital signatures, highlighting the role of symmetric versus asymmetric keys and the resulting implications for non-repudiation.

---

### 5. Requirements for a Good MAC

A secure MAC function should exhibit the following properties:

*   **Unpredictability:** It should be computationally infeasible for an attacker to compute the MAC for a message without knowing the secret key, even if they have access to valid message-MAC pairs.
*   **Resistance to Key Guessing:** If an attacker can intercept many message-MAC pairs, they should not be able to determine the secret key.
*   **Resistance to Forgery:** It should be computationally infeasible for an attacker to generate a valid MAC for a new message, even if they have access to many legitimate message-MAC pairs.
*   **Collision Resistance (related to hash functions):** While not strictly required in the same way as for hash functions, it's desirable that it's hard to find two different messages $M_1$ and $M_2$ such that $MAC(K, M_1) = MAC(K, M_2)$ for a given key $K$. However, the primary attack is to forge a MAC for a *new* message.

**Forouzan (2008), Chapter 14:** Likely discusses the security properties expected of MACs and how they are achieved.

**Stinson (2nd Ed., 2005), Chapter 6:** Explores the security notions for cryptographic primitives, which would include considerations for MACs and the notion of existential forgery.

---

### 6. Types of MACs

MACs can be broadly categorized based on the underlying cryptographic primitive used:

#### 6.1. MACs Based on Hash Functions (HMAC)

This is a very common and secure way to construct MACs. The most well-known is **HMAC (Hash-based Message Authentication Code)**, standardized in RFC 2104.

*   **How it works (simplified):** HMAC uses a cryptographic hash function (like SHA-256) in conjunction with a secret key.
*   **Formula (conceptual):** $HMAC(K, M) = H( (K \oplus opad) || H( (K \oplus ipad) || M ) )$
    *   $H$ is the cryptographic hash function.
    *   $K$ is the secret key.
    *   $ipad$ and $opad$ are specific padding constants.
    *   $\oplus$ denotes the XOR operation.
    *   $||$ denotes concatenation.

**Why HMAC is secure:** It leverages the security properties of the underlying hash function and is designed to be resistant to length-extension attacks that plague some hash functions when used directly for MACs.

**Stallings (4th Ed., 2006), Chapter 11:** Provides detailed explanations of various MAC algorithms, including HMAC.

**CO4 Alignment:** HMAC is a prime example of a function used to produce an authenticator.

#### 6.2. MACs Based on Block Ciphers

MACs can also be constructed using block ciphers (like AES). Several modes of operation for block ciphers are specifically designed to produce MACs.

*   **CBC-MAC (Cipher Block Chaining MAC):**
    *   The message is encrypted using a block cipher in CBC mode.
    *   The final ciphertext block is used as the MAC.
    *   **Requirement:** The message must be padded to a multiple of the block size.
    *   **Security Considerations:** Standard CBC-MAC is vulnerable to length-extension attacks if not implemented carefully, especially when the block cipher's output size is smaller than the block size.
*   **CMAC (Cipher-based MAC):**
    *   A more modern and secure CBC-MAC construction, standardized in NIST SP 800-38B.
    *   It addresses some of the security weaknesses of basic CBC-MAC.

**Stallings (4th Ed., 2006), Chapter 11:** Covers block cipher modes and how they can be adapted for MAC generation, including CBC-MAC and its variations.

---

### 7. Security Considerations and Attacks

*   **Key Management:** The security of any MAC scheme hinges on the secrecy of the shared key. Secure distribution and storage of the secret key are paramount.
*   **Random MAC Generation:** For MACs based on random or pseudorandom numbers (less common in standard schemes), ensuring the randomness is crucial.
*   **Brute-Force Attack on Key:** If an attacker can intercept many message-MAC pairs, they might try to guess the secret key by generating MACs for chosen messages and comparing them. The key space must be sufficiently large.
*   **Brute-Force Attack on MAC:** If the MAC length is short, an attacker might try to guess the MAC value for a given message. The MAC output should be sufficiently long (e.g., 96 bits or more).
*   **Replay Attacks:** While MACs provide integrity and authenticity, they don't inherently prevent replay attacks. If an attacker intercepts a message and its MAC and re-sends them later, the receiver will accept them as valid. This is typically addressed by incorporating sequence numbers or timestamps within the authenticated data.

**Stallings (4th Ed., 2006), Chapter 11:** Discusses potential attacks on MACs and countermeasures.

**CO1 Alignment:** Understanding replay attacks requires knowledge of network security services and the types of attacks they are designed to prevent.

---

### 8. Important Points to Remember

*   **MACs are for Authentication and Integrity:** They ensure a message hasn't been tampered with and comes from a party with the secret key.
*   **Secret Key is Crucial:** The security of MACs relies entirely on the secrecy of the shared key.
*   **No Non-repudiation:** Unlike digital signatures, MACs do not provide non-repudiation.
*   **HMAC is a widely used and secure standard:** Often preferred due to its robustness.
*   **MACs can be combined with encryption:** To achieve both confidentiality and authentication. This is known as "authenticated encryption" (though often implemented via separate encryption and MAC operations).

---

### 9. Practice Questions and Exercises

**Question 1 (Conceptual):**
What is the primary purpose of a Message Authentication Code (MAC)? Briefly explain how it achieves this purpose.

**Answer 1:**
The primary purpose of a MAC is to provide **data integrity** and **data origin authentication**. It achieves this by generating a tag (the MAC) using a secret key and the message content. The receiver uses the same secret key to re-generate the tag for the received message and compares it with the received tag. If they match, integrity and authenticity are confirmed.

---

**Question 2 (Comparative):**
Explain the fundamental difference between a MAC and a digital signature concerning the type of key used and the security service of non-repudiation.

**Answer 2:**
A MAC uses a **symmetric secret key** shared between parties, meaning either party can generate the MAC. Therefore, it does **not** provide non-repudiation, as the receiver could have created the MAC themselves. A digital signature uses an **asymmetric private key** (held by the sender) and a corresponding public key (held by the receiver). Since only the sender possesses the private key, a valid signature proves that the sender specifically created it, thus providing **non-repudiation**.

---

**Question 3 (Application - Simplified):**
Suppose Alice and Bob share a secret key `KEY123`. Alice wants to send the message "Meeting at 3 PM".
A simple (and insecure for real-world use) MAC function is: sum of ASCII values of characters in the message, modulo 1000, using the key as a seed for a pseudorandom generator that produces a number to be added to the sum before the modulo operation.
For `KEY123` and "Meeting at 3 PM", let's assume the MAC generated is `542`.

1.  How would Alice send this message securely?
2.  If an attacker intercepts the message and changes it to "Meeting at 4 PM", and forwards the original MAC `542`, how would Bob detect the tampering?

**Answer 3:**
1.  Alice would append the generated MAC (`542`) to the message and send "Meeting at 3 PM | 542" to Bob.
2.  Bob receives "Meeting at 4 PM | 542". He uses his shared secret key `KEY123` and the received message "Meeting at 4 PM" to recalculate the MAC. If his calculation results in a different MAC value (e.g., `678`), he would compare `542` (received) with `678` (calculated). Since they don't match, Bob would detect that the message has been tampered with or that the sender does not possess the correct secret key.

---

**Question 4 (Critical Thinking):**
Why is it important for MACs to be resistant to length-extension attacks, and how does HMAC address this?

**Answer 4:**
Length-extension attacks exploit weaknesses in some hash functions when used naively to create MACs. An attacker who knows the hash of a message $M$ and its length can compute the hash of $M$ concatenated with additional data ($M || \text{suffix}$) without knowing $M$ itself. If a MAC is simply $H(K || M)$, an attacker could potentially forge a MAC for $M || \text{suffix}$. HMAC is designed to resist these attacks by using the key in a specific way with the hash function (hashing the key twice with different padding) and by hashing the result of the first hash. This prevents an attacker from extending a known MAC to a new message simply by knowing the original message and its MAC.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
