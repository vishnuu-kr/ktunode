---
title: "Digital signatures and authentication"
subject: "COMPUTATIONAL NUMBER THEORY"
module: "Module 3: Public Key Cryptography "
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8cb46"
status: "completed"
scrapedAt: "2026-05-20T17:24:20.206Z"
---
# Computational Number Theory: Module 3 - Public Key Cryptography

## Topic: Digital Signatures and Authentication

---

### **1. Introduction to Digital Signatures**

**Key Concept:** A digital signature is a cryptographic mechanism that allows a sender to authenticate the origin and integrity of a digital message. It's the digital equivalent of a handwritten signature.

**Core Functions:**

*   **Authentication:** Verifies the identity of the sender.
*   **Integrity:** Ensures that the message has not been altered since it was signed.
*   **Non-repudiation:** Prevents the sender from later denying that they sent the message.

**Analogy:** Imagine sending a sealed letter with your unique wax seal. Anyone can recognize your seal and know the letter hasn't been opened and tampered with. A digital signature works similarly but uses mathematical algorithms.

---

### **2. How Digital Signatures Work (Using Public Key Cryptography)**

Digital signatures rely on the principles of asymmetric (public-key) cryptography.

**Key Components:**

*   **Private Key ($SK_A$)**: Known only to the sender (Alice). Used to *create* the signature.
*   **Public Key ($PK_A$)**: Freely distributed. Used by anyone to *verify* the signature.

**The Process:**

1.  **Signing the Message (Alice):**
    *   Alice wants to send a message $M$ to Bob.
    *   She computes a **message digest (hash)** of $M$, denoted as $h(M)$. A cryptographic hash function produces a fixed-size output (the digest) that is unique to the input message. Even a small change in $M$ results in a significantly different $h(M)$.
    *   Alice then **encrypts** the hash $h(M)$ using her **private key** ($SK_A$). This encrypted hash is the **digital signature**, $S = Enc_{SK_A}(h(M))$.
    *   Alice sends the message $M$ along with the digital signature $S$ to Bob.

2.  **Verifying the Signature (Bob):**
    *   Bob receives the message $M$ and the signature $S$.
    *   Bob first computes the hash of the received message $M$, obtaining $h'(M)$.
    *   Bob then **decrypts** the received signature $S$ using Alice's **public key** ($PK_A$). This yields the original hash value, $h_{decrypted} = Dec_{PK_A}(S)$.
    *   Bob compares the computed hash $h'(M)$ with the decrypted hash $h_{decrypted}$.
    *   **If $h'(M) = h_{decrypted}$**: The signature is valid. This means:
        *   The message $M$ has not been altered since it was signed (integrity).
        *   The signature was created by the owner of the private key corresponding to $PK_A$, which is Alice (authentication).
    *   **If $h'(M) \neq h_{decrypted}$**: The signature is invalid. Either the message was tampered with, or the signature was not created by Alice.

---

### **3. Essential Components for Digital Signatures**

*   **Asymmetric Cryptography Algorithms:**
    *   **RSA:** Based on the difficulty of factoring large numbers.
        *   Signing: $S = M^{d} \pmod{n}$ (where $d$ is private exponent, $n$ is modulus). However, it's more common to sign the hash: $S = h(M)^d \pmod{n}$.
        *   Verification: $h(M) = S^e \pmod{n}$ (where $e$ is public exponent).
    *   **Elliptic Curve Digital Signature Algorithm (ECDSA):** Based on the discrete logarithm problem on elliptic curves. Generally more efficient for the same security level compared to RSA.

*   **Cryptographic Hash Functions:**
    *   **Properties:**
        *   **Pre-image resistance:** Hard to find a message $M$ given a hash $h(M)$.
        *   **Second pre-image resistance:** Hard to find a different message $M'$ such that $h(M') = h(M)$.
        *   **Collision resistance:** Hard to find two different messages $M_1$ and $M_2$ such that $h(M_1) = h(M_2)$.
    *   **Examples:** SHA-256, SHA-3. (MD5 and SHA-1 are considered cryptographically broken for signature use due to collision vulnerabilities).

---

### **4. Digital Signatures vs. Encryption**

It's crucial to distinguish between encrypting a message and signing a message.

| Feature        | Encryption (Confidentiality)                                  | Digital Signature (Authentication/Integrity)                     |
| :------------- | :------------------------------------------------------------ | :--------------------------------------------------------------- |
| **Purpose**    | Hide the message content from unauthorized parties.           | Prove the origin and integrity of the message.                   |
| **Keys Used**  | Encrypt with Receiver's Public Key ($PK_B$), Decrypt with Receiver's Private Key ($SK_B$). | Sign with Sender's Private Key ($SK_A$), Verify with Sender's Public Key ($PK_A$). |
| **What is protected?** | The message content itself.                                 | The message digest (hash) of the message.                        |
| **Result**     | Ciphertext ($C = Enc_{PK_B}(M)$)                               | Signature ($S = Enc_{SK_A}(h(M))$)                               |
| **Verification** | Decrypts $C$ with $SK_B$ to get $M$.                          | Decrypts $S$ with $PK_A$ to get $h(M)$, then compares with $h(M)$ from received message. |

**Combining Encryption and Signing:** For full confidentiality and authentication, a sender might first sign a message and then encrypt the signed message (or vice-versa). The order can matter depending on the specific security goals.

---

### **5. Practice Questions**

**Question 1:**
Alice sends a message $M$ to Bob and digitally signs it.
*   Alice computes the hash of $M$ as $h(M)$.
*   Alice then encrypts $h(M)$ using her **private key** ($SK_{Alice}$) to get the signature $S$.
*   Alice sends $M$ and $S$ to Bob.

How does Bob verify the signature?

**Answer 1:**
Bob receives $M$ and $S$.
1.  Bob computes the hash of the received message: $h'(M)$.
2.  Bob decrypts the signature $S$ using Alice's **public key** ($PK_{Alice}$): $h_{decrypted} = Dec_{PK_{Alice}}(S)$.
3.  Bob compares $h'(M)$ with $h_{decrypted}$. If they match, the signature is valid.

---

**Question 2:**
Which of the following is NOT a primary goal of a digital signature?
A) Authentication
B) Confidentiality
C) Integrity
D) Non-repudiation

**Answer 2:**
B) Confidentiality. While digital signatures are often used in conjunction with encryption to achieve confidentiality, the signature itself primarily provides authentication, integrity, and non-repudiation.

---

**Question 3:**
When signing a message, which key is used? When verifying a signature, which key is used?

**Answer 3:**
*   **Signing:** The sender uses their **private key**.
*   **Verifying:** The verifier uses the sender's **public key**.

---

### **6. Important Points to Remember**

*   **Digital signatures are fundamentally about proving *who* sent a message and *that it hasn't changed*, not about keeping the message *secret*.**
*   **The security of digital signatures relies on the secrecy of the private key and the security of the underlying cryptographic algorithms and hash functions.**
*   **A valid signature confirms that the message originated from the claimed sender and has not been tampered with.**
*   **The process involves hashing the message and then encrypting the hash with the sender's private key.**
*   **Verification involves hashing the received message and decrypting the signature with the sender's public key, followed by a comparison.**
*   **Weak hash functions (like MD5, SHA-1) should NOT be used for digital signatures due to collision vulnerabilities.**

---

This concludes the notes on Digital Signatures and Authentication. Remember to practice the concepts and understand the roles of private and public keys in both signing and verification.
