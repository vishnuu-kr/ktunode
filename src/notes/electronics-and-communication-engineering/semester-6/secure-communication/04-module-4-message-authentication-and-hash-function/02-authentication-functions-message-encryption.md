---
title: "Authentication functions- Message Encryption"
subject: "SECURE COMMUNICATION"
module: "Module 4: Message Authentication and Hash Function: "
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c460b09ce205780fee93"
status: "completed"
scrapedAt: "2026-05-23T18:03:17.954Z"
---
# SECURE COMMUNICATION: Module 4 - Message Authentication and Hash Functions

## Topic: Authentication Functions - Message Encryption

### Learning Outcomes:

*   Understand the role of message encryption in achieving message authentication.
*   Differentiate between confidentiality and authentication provided by encryption.
*   Explore different approaches to using encryption for authentication, including symmetric and asymmetric encryption.
*   Analyze the strengths and weaknesses of using encryption for authentication.
*   Understand the concept of a Message Authentication Code (MAC).

### Course Outcomes Alignment:

*   **CO1 (K3):** While this topic focuses on authentication, understanding modular arithmetic and related concepts is foundational for many cryptographic operations, including encryption.
*   **CO2 (K3):** This topic builds upon the principles of symmetric ciphers like DES and AES by exploring how they can be used for authentication.
*   **CO3 (K2):** This topic introduces the use of public-key cryptography for authentication, complementing the understanding of RSA and key distribution.
*   **CO4 (K2):** This is the core topic for understanding how encryption functions can produce an authenticator and the requirements for authentication.

---

### 1. Introduction to Message Authentication and Encryption

**Definition: Message Authentication**
Message authentication is a mechanism to verify the integrity and authenticity of a message. It ensures that the message has not been altered in transit and that it originates from the claimed sender.

**Relationship between Confidentiality and Authentication:**

*   **Confidentiality:** Ensures that only the intended recipient can read the message. This is achieved by encrypting the message.
*   **Authentication:** Ensures that the message is from the claimed sender and has not been tampered with. While encryption *can* provide authentication, it's not its primary or sole purpose.

**Key Insight:** Encryption primarily provides confidentiality. To achieve authentication using encryption, we need additional mechanisms or specific ways of using encryption.

---

### 2. Using Encryption for Authentication

There are two primary ways to leverage encryption for message authentication:

#### 2.1. Confidentiality + Authentication (Using Symmetric Encryption)

This is the most common scenario. If a message is encrypted using a shared secret key between sender and receiver, the receiver can verify that the message came from someone who possesses that key.

**How it works:**

1.  **Sender:** Encrypts the plaintext message using a symmetric secret key (e.g., AES, DES).
2.  **Transmission:** The ciphertext is sent to the receiver.
3.  **Receiver:**
    *   Decrypts the ciphertext using the same shared secret key.
    *   If decryption is successful, it implies that the sender possessed the secret key.
    *   **Implicit Authentication:** This provides *implicit authentication* because only someone with the shared secret key could have generated the ciphertext that decrypts correctly.

**Example (Stallings, Chapter 11):**

Imagine Alice wants to send a message "MEET ME AT NOON" to Bob. They share a secret key `K`.

*   **Alice:** Encrypts "MEET ME AT NOON" with `K` to get `C`. Sends `C` to Bob.
*   **Bob:** Receives `C`. Decrypts `C` with `K` to get "MEET ME AT NOON".

**Strengths:**

*   Provides both confidentiality and authentication.
*   Relatively efficient.

**Weaknesses:**

*   **No Non-repudiation:** Alice can deny sending the message, as Bob also has the key `K` and could have generated `C`.
*   **Key Distribution Problem:** Requires secure distribution of the shared secret key.
*   **Message Integrity:** While decryption implies the message wasn't trivially modified (e.g., random bit flips), a clever attacker might still be able to tamper with the ciphertext in a way that results in a meaningful but false plaintext upon decryption, especially if the encryption algorithm is weak or used incorrectly.

#### 2.2. Authentication using Public-Key Encryption

Public-key cryptography can also be used for authentication, often referred to as *digital signatures*, though the topic here focuses on message encryption for authentication.

**How it works (using public-key encryption for message authenticity):**

A less common but conceptually relevant approach is for the sender to encrypt the *message itself* with their *private key*. The receiver would then decrypt it with the sender's *public key*.

1.  **Sender (Alice):** Encrypts the plaintext message `M` using her **private key** (`K_priv_A`) to produce ciphertext `C`.
2.  **Transmission:** Alice sends `C` to Bob.
3.  **Receiver (Bob):**
    *   Receives `C`.
    *   Decrypts `C` using Alice's **public key** (`K_pub_A`).
    *   If decryption yields the original message `M`, Bob knows that only Alice (who possesses `K_priv_A`) could have encrypted it this way.

**Example:**

*   **Alice:** Encrypts "URGENT MESSAGE" using `K_priv_Alice` to get `C`. Sends `C` to Bob.
*   **Bob:** Receives `C`. Decrypts `C` using `K_pub_Alice` to get "URGENT MESSAGE".

**Strengths:**

*   **Non-repudiation:** Alice cannot deny sending the message because only she possesses her private key.
*   **Authentication:** Verifies the origin of the message.

**Weaknesses:**

*   **Confidentiality is NOT provided:** Bob can decrypt it using Alice's public key. In fact, anyone with Alice's public key can decrypt this message.
*   **Inefficiency:** Public-key encryption is computationally much more expensive than symmetric encryption, making it impractical for encrypting large messages directly for authentication. This is why digital signatures typically sign a *hash* of the message, not the message itself.
*   **Integrity:** Similar to symmetric encryption, the integrity guarantees are dependent on the strength of the encryption algorithm and proper implementation.

---

### 3. Message Authentication Codes (MACs)

While directly encrypting a message can provide some level of authentication, it's often not the most efficient or secure method for achieving authentication alone. Message Authentication Codes (MACs) are specifically designed for this purpose.

**Definition: Message Authentication Code (MAC)**
A MAC is a small block of data that is generated using a secret key and the message content. It is appended to the message and allows the receiver to verify the message's integrity and authenticity.

**Key Properties of a MAC:**

*   **Keyed:** MAC generation requires a secret key shared between the sender and receiver.
*   **Deterministic:** For a given message and key, the MAC will always be the same.
*   **Input:** Message (M) and Secret Key (K).
*   **Output:** MAC value (T).

**How MACs Work:**

1.  **Sender:**
    *   Generates a MAC value `T` for the message `M` using a secret key `K`. Typically: `T = MAC(K, M)`.
    *   Appends `T` to the message `M`.
    *   Sends the pair `(M, T)` to the receiver.
2.  **Receiver:**
    *   Receives `(M', T')` (where `M'` and `T'` are the received message and MAC).
    *   Independently computes the MAC for the received message `M'` using the same secret key `K`: `T_computed = MAC(K, M')`.
    *   Compares `T_computed` with the received MAC `T'`.
    *   If `T_computed == T'`, the message is considered authentic and has not been tampered with. Otherwise, it is rejected.

**Comparison with Encryption for Authentication:**

*   **MACs are for Authentication/Integrity:** MACs are designed *solely* to provide authentication and integrity. They do not inherently provide confidentiality.
*   **Encryption for Confidentiality:** Encryption primarily provides confidentiality. When used for authentication, it's a secondary benefit derived from the fact that only the key holder can decrypt it correctly.
*   **Efficiency:** MAC algorithms are typically much faster than encryption algorithms, making them more suitable for generating authenticators for large messages.
*   **Security:** MACs are designed to resist various attacks, including forgery.

**Types of MAC Algorithms:**

*   **Hash-based MACs (HMAC):** Uses a cryptographic hash function (like SHA-256) and a secret key. HMAC is a standard and widely used MAC construction.
*   **Cipher-based MACs (CMAC):** Uses a block cipher (like AES) to generate the MAC.

**Stallings Chapter 11:** Discusses the need for a key-dependent function to create a tag. He introduces the concept of Message Authentication Codes (MACs) as a method to achieve message authentication without necessarily providing confidentiality. He elaborates on the properties of MACs and how they are generated and verified.

**Forouzan Chapter 12:** Covers Message Authentication Codes (MACs) in detail, including their purpose, generation, and verification. He explains how MACs provide integrity and authentication and discusses different types of MACs, including those based on hash functions and block ciphers.

---

### 4. Using Encryption with Concatenation or Combining Functions

To achieve both confidentiality and authentication efficiently, and to provide stronger guarantees than simply encrypting the message, specific constructions are used.

#### 4.1. Encrypt-and-MAC

1.  **Sender:**
    *   Encrypts the plaintext `M` using a secret key `K1` to get `C = Enc(K1, M)`.
    *   Computes a MAC `T` for the ciphertext `C` using a different secret key `K2`: `T = MAC(K2, C)`.
    *   Sends `(C, T)` to the receiver.
2.  **Receiver:**
    *   Receives `(C', T')`.
    *   Computes `T_computed = MAC(K2, C')`.
    *   If `T_computed == T'`, then decrypts `C'` using `K1` to get `M'`.
    *   If `T_computed != T'`, the message is rejected.

**Strengths:**

*   Provides confidentiality (due to `C`) and authentication (due to `T`).
*   Separates the concerns of encryption and MAC.

**Weaknesses:**

*   Requires two keys (`K1` and `K2`).
*   Vulnerable to certain attacks if not implemented carefully (e.g., padding oracle attacks if CBC mode is used without proper care).

#### 4.2. MAC-and-Encrypt

1.  **Sender:**
    *   Computes a MAC `T` for the plaintext `M` using a secret key `K2`: `T = MAC(K2, M)`.
    *   Concatenates the message and its MAC: `M || T`.
    *   Encrypts the concatenated string using a secret key `K1`: `C = Enc(K1, M || T)`.
    *   Sends `C` to the receiver.
2.  **Receiver:**
    *   Receives `C'`.
    *   Decrypts `C'` using `K1` to get `M' || T'`.
    *   Separates `M'` and `T'`.
    *   Computes `T_computed = MAC(K2, M')`.
    *   If `T_computed == T'`, the message is considered authentic and then the plaintext `M'` is considered valid.
    *   If `T_computed != T'`, the message is rejected.

**Strengths:**

*   Provides both confidentiality and authentication.
*   Often considered more secure than Encrypt-and-MAC because the MAC is generated on the plaintext, protecting against attacks that might exploit the structure of the ciphertext.

**Weaknesses:**

*   Requires two keys (`K1` and `K2`).
*   If the MAC verification fails, the plaintext is still revealed by the decryption process before the MAC check.

#### 4.3. Encrypt-then-MAC (The Recommended Approach)

This is generally considered the most robust approach when combining encryption and MAC.

1.  **Sender:**
    *   Encrypts the plaintext `M` using a secret key `K1` to get `C = Enc(K1, M)`.
    *   Computes a MAC `T` for the *ciphertext* `C` using a different secret key `K2`: `T = MAC(K2, C)`.
    *   Sends `(C, T)` to the receiver.
2.  **Receiver:**
    *   Receives `(C', T')`.
    *   **First, verify the MAC:** Computes `T_computed = MAC(K2, C')`.
    *   If `T_computed == T'`, then proceed to decrypt `C'` using `K1` to get `M'`.
    *   If `T_computed != T'`, the message is rejected *without* attempting decryption.

**Why Encrypt-then-MAC is preferred (Stallings, Chapter 11):**

*   **Stronger Security Guarantees:** By MACing the ciphertext, any modification to the ciphertext is detected before decryption. This prevents attacks that might exploit weaknesses in the encryption algorithm's mode of operation (e.g., padding oracle attacks in CBC mode).
*   **Prevents Plaintext Attacks on MAC:** The MAC is applied to the ciphertext, not the plaintext, meaning an attacker cannot easily learn information about the plaintext from the MAC tag itself.

**Forouzan Chapter 12:** Discusses the importance of combining encryption and MAC, highlighting the Encrypt-then-MAC approach as the most secure method for achieving both confidentiality and integrity.

---

### 5. Important Points to Remember

*   **Encryption primarily provides Confidentiality.**
*   **Authentication verifies origin and integrity.**
*   **Using encryption for authentication:**
    *   **Symmetric Encryption:** Implicit authentication, but no non-repudiation.
    *   **Public-Key Encryption:** Explicit authentication and non-repudiation, but not confidential and inefficient for messages.
*   **MACs are specifically designed for Authentication and Integrity.**
*   **MACs require a shared secret key.**
*   **HMAC and CMAC are common MAC constructions.**
*   **Combining Encryption and MAC:**
    *   **Encrypt-then-MAC** is the most secure method, verifying the MAC on the ciphertext *before* decryption.
*   **Attacks:** Be aware of attacks like padding oracle attacks that can occur if encryption modes are not handled carefully.

---

### 6. Practice Questions & Exercises

**Question 1:**
Which of the following is the primary service provided by encryption?
a) Authentication
b) Integrity
c) Confidentiality
d) Availability

**Answer:** c) Confidentiality

**Question 2:**
If Alice encrypts a message using a shared secret key with Bob, and Bob decrypts it successfully, what can Bob conclude?
a) The message is authentic and Bob can non-repudiate sending it.
b) The message is confidential and Bob can non-repudiate sending it.
c) The message is authentic, but Bob cannot non-repudiate sending it.
d) The message is confidential, but Bob cannot non-repudiate sending it.

**Answer:** c) The message is authentic, but Bob cannot non-repudiate sending it. (Bob can only infer authenticity; non-repudiation is not provided as Alice also has the key).

**Question 3:**
What is the main purpose of a Message Authentication Code (MAC)?
a) To provide confidentiality of the message.
b) To generate a digital signature for non-repudiation.
c) To verify the integrity and authenticity of the message.
d) To ensure the availability of the message.

**Answer:** c) To verify the integrity and authenticity of the message.

**Question 4:**
Consider the "Encrypt-then-MAC" approach. At which stage is the MAC verification performed by the receiver?
a) After decrypting the message.
b) Before decrypting the message.
c) The MAC is not verified independently.
d) Only if the decryption fails.

**Answer:** b) Before decrypting the message.

**Question 5 (Conceptual):**
Explain why using public-key encryption to encrypt a message with the sender's *private* key provides authentication but not confidentiality.

**Answer:**
When a message is encrypted with the sender's private key, it can be decrypted by anyone who possesses the sender's public key. This ability of anyone to decrypt it means it does not provide confidentiality. However, since only the sender possesses their private key, the successful decryption by the receiver using the sender's public key proves that the message must have originated from the sender. This provides authentication and also non-repudiation.

**Question 6 (Application):**
Alice wants to send a secret message to Bob and ensure he knows it's from her. She plans to use AES for encryption and HMAC-SHA256 for authentication. Which method would be most recommended to ensure both confidentiality and integrity, and why?

**Answer:**
The most recommended method is **Encrypt-then-MAC**.

**Explanation:**
1.  Alice encrypts the plaintext message using AES with a shared secret key (`K_AES`). Let the ciphertext be `C`.
2.  Alice then computes HMAC-SHA256 of the ciphertext `C` using a different shared secret key (`K_HMAC`). Let the MAC tag be `T`.
3.  Alice sends the pair `(C, T)` to Bob.

**Why this is recommended:**
*   **Confidentiality:** The message is encrypted with AES, making it unintelligible to anyone without `K_AES`.
*   **Integrity and Authentication:** The HMAC tag `T` is calculated over the ciphertext `C`. When Bob receives `(C, T)`:
    *   He first computes the HMAC of the received ciphertext `C` using `K_HMAC`.
    *   If the computed HMAC matches `T`, he knows that the ciphertext `C` has not been tampered with during transit.
    *   Only after successfully verifying the MAC does he decrypt `C` using `K_AES` to recover the original plaintext.
*   **Security:** This approach prevents attacks that might try to manipulate the ciphertext in a way that bypasses authentication and fools the decryption process, as the MAC verification happens before decryption.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |


### 7. References and Further Reading

*   **Cryptography and Network Security: Principles and Practice** by William Stallings (4th Edition, 2006): Chapters on Message Authentication and Hash Functions (especially Chapter 11) will provide detailed explanations of MACs, their properties, and various construction methods, including the rationale for Encrypt-then-MAC.
*   **Cryptography and Network Security** by Behrouz A. Forouzan (2008): Chapters on Message Authentication and Cryptographic Hash Functions will offer a complementary perspective on these concepts, likely covering MACs and their importance in securing communications.

This topic lays the groundwork for understanding how we can trust the data we receive in a network. While encryption is a powerful tool, it's crucial to understand its specific role and how other mechanisms like MACs are used to build robust authentication systems.