---
title: "Principles of public key cryptosystems-Public key cryptosystems"
subject: "SECURE COMMUNICATION"
module: "Module 3: Public Key Cryptography: "
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c460b09ce205780fee85"
status: "completed"
scrapedAt: "2026-05-23T18:03:06.903Z"
---
# SECURE COMMUNICATION: Module 3: Public Key Cryptography

## Topic: Principles of Public Key Cryptosystems - Public Key Cryptosystems

This module introduces the fundamental concepts and principles behind Public Key Cryptography (PKC), a revolutionary approach to secure communication. We will explore its core ideas, contrast it with symmetric cryptography, and understand its underlying mathematical principles.

---

### Learning Outcomes Covered:

*   **Understanding the core principles of Public Key Cryptography:** How it differs from symmetric cryptography, the concept of key pairs, and its applications.
*   **Exploring the mathematical foundations:** The reliance on one-way functions and trapdoor one-way functions.
*   **Key generation and distribution:** How keys are created and shared in a public key system.
*   **Applications of Public Key Cryptography:** Encryption, digital signatures, and key exchange.

---

### Course Outcomes Addressed:

*   **CO3:** Outline the concepts of public key cryptography, RSA algorithm, key distribution, and key management for public key systems. (Knowledge Level: K2)
    *   This module directly addresses the foundational concepts required for CO3, laying the groundwork for understanding the RSA algorithm and key distribution.

---

## 1. Introduction to Public Key Cryptography (PKC)

### 1.1 The Problem with Symmetric Key Cryptography

Symmetric key cryptography, while efficient, faces a significant challenge: **key distribution**. For secure communication between two parties, they must share a secret key. This requires a secure channel to exchange the key, which is often unavailable or impractical, especially in large networks.

*   **Key Distribution Problem:** How to securely exchange a secret key between two parties who have no prior secure channel.
*   **Number of Keys:** In a network of N users, if each pair needs a unique secret key, the number of keys required is N*(N-1)/2. This becomes unmanageable for large N.

### 1.2 The Revolution of Public Key Cryptography

Public Key Cryptography, also known as Asymmetric Cryptography, offers a solution by using **two mathematically related keys**:

*   **Public Key:** Can be freely distributed to anyone. Used for encryption and verifying digital signatures.
*   **Private Key:** Must be kept secret by its owner. Used for decryption and creating digital signatures.

**Key Relationship:** Data encrypted with a public key can only be decrypted with its corresponding private key, and vice-versa.

### 1.3 Core Principles

1.  **Key Generation:** Each participant generates a unique pair of keys: one public and one private.
2.  **Key Distribution:** The public key is published and made available to anyone. The private key is kept secret.
3.  **Encryption:** To send a confidential message to Alice, Bob uses Alice's **public key** to encrypt the message.
4.  **Decryption:** Alice receives the encrypted message and uses her **private key** to decrypt it. Only Alice can decrypt the message because only she possesses her private key.
5.  **Digital Signatures:** To prove his identity and the integrity of a message, Bob can use his **private key** to "sign" the message. Alice can then use Bob's **public key** to verify the signature.

### 1.4 Advantages of PKC

*   **Solves the Key Distribution Problem:** No need for a pre-existing secure channel to exchange keys.
*   **Provides Digital Signatures:** Enables authentication, non-repudiation, and data integrity.
*   **Scalability:** Easier to manage keys in large networks compared to symmetric systems.

### 1.5 Disadvantages of PKC

*   **Computational Cost:** Generally slower and more computationally intensive than symmetric cryptography.
*   **Key Size:** Public keys are typically much longer than symmetric keys to maintain security.

---

## 2. Mathematical Foundations of Public Key Cryptosystems

The security of public key cryptosystems relies on the computational difficulty of certain mathematical problems. Specifically, they are based on **one-way functions** and, more importantly, **trapdoor one-way functions**.

### 2.1 One-Way Functions

A function $f$ is a one-way function if:

1.  **Easy to compute:** For any input $x$, it is computationally easy to compute $y = f(x)$.
2.  **Hard to invert:** For a given output $y$, it is computationally infeasible to find an input $x$ such that $f(x) = y$.

**Example:** Integer factorization. Multiplying two large prime numbers (e.g., $p$ and $q$) to get $n = p \times q$ is easy. However, given $n$, finding its prime factors $p$ and $q$ is computationally very difficult.

### 2.2 Trapdoor One-Way Functions

A trapdoor one-way function is a special type of one-way function that has a "trapdoor" – secret information that makes the inversion process easy.

A function $f$ is a trapdoor one-way function if:

1.  **Easy to compute:** For any input $x$, it is computationally easy to compute $y = f(x)$.
2.  **Hard to invert without trapdoor:** For a given output $y$, it is computationally infeasible to find an input $x$ such that $f(x) = y$, unless you possess the secret "trapdoor" information.
3.  **Easy to invert with trapdoor:** If you possess the secret trapdoor information, it becomes computationally easy to find $x$ given $y$.

**How it works in PKC:**

*   **Public Key:** Defines the forward computation of the one-way function.
*   **Private Key:** Contains the "trapdoor" information that allows for efficient inversion.

**Examples of problems used in PKC:**

*   **Integer Factorization:** Used in RSA. The trapdoor is the knowledge of the prime factors of a large number.
*   **Discrete Logarithm Problem (DLP):** Used in Diffie-Hellman, ElGamal, and DSA. The problem is to find $x$ given $g$, $y$, and $p$ in $y \equiv g^x \pmod{p}$. The trapdoor is not directly applicable here in the same way; rather, the difficulty of DLP itself is the basis.
*   **Elliptic Curve Discrete Logarithm Problem (ECDLP):** Used in Elliptic Curve Cryptography (ECC). A more modern and efficient variant of DLP.

---

## 3. Key Generation in Public Key Cryptosystems

The process of generating a public/private key pair is crucial for establishing a public key cryptosystem. This process typically involves several steps:

1.  **Choose a suitable algorithm:** Select a PKC algorithm (e.g., RSA, ECC).
2.  **Generate random numbers:** Large random numbers are essential for the security of the keys.
3.  **Perform mathematical operations:** Based on the chosen algorithm, perform complex mathematical computations using the random numbers.
4.  **Derive keys:** The output of these computations results in the private key and the corresponding public key.

### 3.1 Example: Conceptual Key Generation (Simplified)

Let's imagine a hypothetical scenario where a public key system is based on a very simple (and insecure) one-way function.

*   **Underlying Math:** Let's say we have a function $f(x) = x^2 \pmod{100}$.
*   **Trapdoor:** The trapdoor is knowledge of the square root modulo 100, or more specifically, its prime factorization (e.g., $100 = 2^2 \times 5^2$).

**Key Generation Process (Conceptual):**

1.  **Alice chooses a large, secure modulus `n` (e.g., product of two large primes, as in RSA).** Let's use a small, insecure `n=33` for illustration (`33 = 3 * 11`).
2.  **Alice computes a public exponent `e` (e.g., 7).** This is part of her public key.
3.  **Alice computes her private exponent `d` such that `e * d ≡ 1 (mod φ(n))`.** Here, `φ(n)` is Euler's totient function. For `n=33`, `φ(33) = (3-1)*(11-1) = 2*10 = 20`. So, Alice needs `7 * d ≡ 1 (mod 20)`. By inspection or extended Euclidean algorithm, $d=3$ works since $7 \times 3 = 21 \equiv 1 \pmod{20}$.
4.  **Alice's Public Key:** $(e, n) = (7, 33)$.
5.  **Alice's Private Key:** $(d, n) = (3, 33)$.

**How it works:**

*   **Encryption:** To encrypt message $M$ (represented as a number), Bob computes $C = M^e \pmod{n}$. So, $C = M^7 \pmod{33}$.
*   **Decryption:** Alice decrypts ciphertext $C$ by computing $M = C^d \pmod{n}$. So, $M = C^3 \pmod{33}$.
*   **Why it works:** $C^d \pmod{n} = (M^e)^d \pmod{n} = M^{e \times d} \pmod{n}$. Since $e \times d \equiv 1 \pmod{\phi(n)}$, by Euler's theorem, $M^{e \times d} \equiv M^1 \pmod{n}$ if $\gcd(M, n) = 1$. (A more rigorous proof exists for this).

**Important Note:** This is a highly simplified example. Real-world PKC algorithms use much larger numbers and more complex mathematical structures for security.

---

## 4. Applications of Public Key Cryptography

PKC has revolutionized secure communication and digital interactions by enabling several critical functions:

### 4.1 Confidentiality (Encryption)

*   **Purpose:** To ensure that only the intended recipient can read a message.
*   **Mechanism:** The sender uses the recipient's **public key** to encrypt the message. The recipient then uses their **private key** to decrypt it.
*   **Example:** Alice wants to send a secret message to Bob. Alice obtains Bob's public key. Alice encrypts the message using Bob's public key. Alice sends the encrypted message to Bob. Bob decrypts the message using his private key.

### 4.2 Authentication and Non-repudiation (Digital Signatures)

*   **Purpose:** To verify the identity of the sender and ensure that the sender cannot later deny having sent the message.
*   **Mechanism:**
    *   **Signing:** The sender uses their **private key** to create a digital signature for the message. This usually involves encrypting a hash of the message.
    *   **Verification:** The recipient uses the sender's **public key** to verify the signature. If the verification succeeds, it confirms that the message came from the owner of that private key and that the message has not been altered.
*   **Example:** Bob wants to send a document to Alice and assure her it's from him and hasn't been tampered with. Bob computes a cryptographic hash of the document. Bob encrypts this hash with his **private key** (this encrypted hash is the digital signature). Bob sends the document and the signature to Alice. Alice computes the hash of the received document herself. Alice decrypts the received signature using Bob's **public key**. If Alice's computed hash matches the decrypted hash from the signature, the signature is valid.

### 4.3 Key Exchange (Key Agreement)

*   **Purpose:** To securely establish a shared secret key between two parties over an insecure channel, which can then be used for faster symmetric encryption.
*   **Mechanism:** Protocols like Diffie-Hellman are used where two parties can agree on a secret key without ever directly transmitting it. Each party generates a public/private key pair for this specific protocol.
*   **Example:** Diffie-Hellman Key Exchange protocol. Alice and Bob agree on a public base and modulus. Alice generates a private key and a public value. Bob generates a private key and a public value. They exchange public values. Using their own private key and the other's public value, they can independently compute the same shared secret key.

---

## 5. Hybrid Cryptosystems

Due to the computational overhead of PKC, it is rarely used for encrypting large amounts of data directly. Instead, a **hybrid approach** is commonly employed:

1.  **Generate a random symmetric session key (e.g., for AES).**
2.  **Encrypt the actual data using the fast symmetric encryption with the session key.**
3.  **Encrypt the session key using the recipient's public key (PKC).**
4.  **Send the encrypted data and the encrypted session key to the recipient.**
5.  **The recipient uses their private key to decrypt the session key.**
6.  **The recipient uses the decrypted session key to decrypt the data.**

This approach combines the security benefits of PKC (for key exchange) with the efficiency of symmetric encryption (for data encryption).

---

## 6. Important Points to Remember

*   **Public Key vs. Private Key:** Public key encrypts/verifies signatures; private key decrypts/signs.
*   **Asymmetric Nature:** Different keys for encryption and decryption.
*   **Key Distribution Solved:** Public keys can be shared openly.
*   **Mathematical Basis:** Relies on computationally hard problems like integer factorization and discrete logarithms.
*   **Trapdoor One-Way Functions:** Essential for the invertibility of the process with the private key.
*   **Applications:** Confidentiality, authentication, non-repudiation, key exchange.
*   **Hybrid Cryptosystems:** Combine PKC with symmetric encryption for efficiency.

---

## 7. Practice Questions and Exercises

**Question 1 (Conceptual Understanding - CO3):**

Explain the fundamental difference between symmetric and public key cryptography, focusing on the key management aspect.

**Answer:**
Symmetric cryptography uses a single secret key for both encryption and decryption. The main challenge is securely distributing this key between parties. Public key cryptography uses a pair of keys: a public key (freely shared) for encryption and a private key (kept secret) for decryption. This eliminates the need for a secure pre-existing channel to exchange keys, solving the key distribution problem.

**Question 2 (Mathematical Foundation - CO1, CO3):**

What is a one-way function, and why is a "trapdoor" one-way function necessary for public key cryptosystems?

**Answer:**
A one-way function is easy to compute in one direction but computationally infeasible to reverse. A trapdoor one-way function is a one-way function that can be easily reversed if a secret piece of information (the trapdoor) is known. In public key cryptography, the public key is used for the forward computation (e.g., encryption), and the private key acts as the trapdoor, allowing the decryption to be performed efficiently. Without the trapdoor, reversing the process would be computationally infeasible.

**Question 3 (Application - CO3):**

Describe how digital signatures provide authentication and non-repudiation.

**Answer:**
Digital signatures provide authentication by using the sender's private key to create the signature. Anyone can then use the sender's public key to verify the signature. If the verification succeeds, it confirms that the message originated from the owner of the private key. Non-repudiation is achieved because only the owner of the private key could have created that specific signature. Therefore, the sender cannot later deny having signed the message.

**Question 4 (Scenario-Based - CO3):**

Alice wants to send a confidential message to Bob. She wants to ensure only Bob can read it. What cryptographic method should she use, and what keys are involved?

**Answer:**
Alice should use public key cryptography for confidentiality. She needs Bob's public key. Alice will use Bob's public key to encrypt the message. Bob will then use his private key to decrypt the message.

**Question 5 (Hybrid Approach - CO3):**

Why are hybrid cryptosystems commonly used instead of encrypting large amounts of data directly with public key cryptography?

**Answer:**
Public key cryptography operations are computationally much more intensive and slower than symmetric cryptography operations. Encrypting large amounts of data directly with PKC would be very inefficient. Hybrid cryptosystems overcome this by using PKC to securely exchange a temporary symmetric session key, and then using the much faster symmetric encryption to encrypt the bulk of the data.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |


## 8. References and Further Reading

*   **Stallings, William. *Cryptography and Network Security: Principles and Practice*. 4th ed., Prentice Hall of India, 2006.** (Chapter 9 covers Public-Key Cryptography)
*   **Forouzan, Behrouz A. *Cryptography and Network Security*. Tata McGraw-Hill, 2008.** (Chapter 9 discusses Public Key Cryptography)
*   **Dummit, David S., and Richard M. Foote. *Abstract Algebra*. 2nd ed., Wiley India Pvt. Ltd, 2008.** (Provides the mathematical underpinnings for modular arithmetic and group theory relevant to PKC).
*   **Stinson, Douglas A. *Cryptography: Theory and Practice*. 2nd ed., Chapman & Hall/CRC, 2005.** (Offers a theoretical perspective on PKC algorithms).
*   **Washington, Lawrence C. *Elliptic Curves: Theory and Cryptography*. Chapman & Hall/CRC, 2008.** (Details the mathematics behind ECC, a modern form of PKC).
*   **Koeblitz, N. *A Course in Number Theory and Cryptography*. 2008.** (Focuses on the number theoretic foundations).
*   **Koshy, Thomas. *Elementary Number Theory with Applications*. 2nd ed., Academic Press, 2007.** (Covers essential number theory concepts like modular arithmetic and primality testing).

---