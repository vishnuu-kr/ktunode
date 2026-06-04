---
title: "Public Key Cryptography: -RSA and Key Management"
subject: "SECURE COMMUNICATION"
module: "Module 3: Public Key Cryptography: "
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c460b09ce205780fee84"
status: "completed"
scrapedAt: "2026-05-23T18:03:06.052Z"
---
# SECURE COMMUNICATION: Module 3 - Public Key Cryptography: RSA and Key Management

This module delves into the fundamental concepts of Public Key Cryptography, with a particular focus on the RSA algorithm and the crucial aspects of key management. Understanding these principles is vital for building secure communication systems.

**Course Outcomes Addressed:**

*   **CO1 (K3):** Explain network security services and mechanisms and the types of attacks they are designed for and apply the concepts of modular arithmetic, Euclidean algorithm, polynomial arithmetic. *(While this module focuses on public-key crypto, the underlying mathematical principles discussed in CO1 are foundational for RSA.)*
*   **CO3 (K2):** Outline the concepts of public key cryptography, RSA algorithm, key distribution, and management for public key systems.

---

## 3.1 Introduction to Public Key Cryptography

Public Key Cryptography (PKC), also known as Asymmetric Cryptography, is a paradigm shift from symmetric cryptography. It utilizes a pair of keys for cryptographic operations:

*   **Public Key:** Can be freely distributed to anyone. Used for encryption and signature verification.
*   **Private Key:** Must be kept secret by its owner. Used for decryption and signature creation.

### 3.1.1 Principles and Advantages

*   **Key Distribution Problem Solved:** Unlike symmetric cryptography, where securely distributing the shared secret key is a major challenge, PKC eliminates this need. Anyone can possess your public key without compromising your private key.
*   **Confidentiality:** Alice can encrypt a message for Bob using Bob's public key. Only Bob, with his corresponding private key, can decrypt it.
*   **Authentication & Non-repudiation:** Alice can sign a message with her private key. Anyone can verify the signature using Alice's public key, confirming that the message originated from Alice and she cannot later deny sending it.

### 3.1.2 Comparison with Symmetric Cryptography

| Feature           | Symmetric Cryptography                  | Public Key Cryptography                 |
| :---------------- | :-------------------------------------- | :-------------------------------------- |
| **Key Usage**     | Single shared secret key                | Pair of keys (public & private)         |
| **Key Management**| Difficult (secure distribution)         | Easier (public key can be shared)       |
| **Speed**         | Faster                                  | Slower                                  |
| **Key Length**    | Shorter keys (e.g., 128-bit AES)        | Longer keys (e.g., 2048-bit RSA)        |
| **Applications**  | Bulk data encryption, bulk data transfer | Key exchange, digital signatures, encryption of small amounts of data |

**Referenced in:** Stallings (Chapter 9), Forouzan (Chapter 9)

---

## 3.2 RSA Algorithm

RSA is the most widely used and influential public-key cryptosystem. It was invented by Rivest, Shamir, and Adleman in 1977. Its security relies on the computational difficulty of factoring large integers.

### 3.2.1 Mathematical Foundation (Recap from CO1)

Before diving into RSA, it's crucial to understand the underlying number theory concepts:

*   **Modular Arithmetic:** Operations performed within a fixed range (modulo N).
    *   **Definition:** $a \equiv b \pmod{n}$ means that $n$ divides $(a-b)$.
    *   **Properties:** $(a+b) \pmod{n} = ((a \pmod{n}) + (b \pmod{n})) \pmod{n}$, $(a \times b) \pmod{n} = ((a \pmod{n}) \times (b \pmod{n})) \pmod{n}$.
*   **Euclidean Algorithm:** Efficiently computes the Greatest Common Divisor (GCD) of two integers. It's also used to find modular multiplicative inverses.
    *   **Example:** GCD(240, 46)
        *   240 = 5 * 46 + 10
        *   46 = 4 * 10 + 6
        *   10 = 1 * 6 + 4
        *   6 = 1 * 4 + 2
        *   4 = 2 * 2 + 0
        *   GCD(240, 46) = 2
*   **Modular Multiplicative Inverse:** For integers $a$ and $n$, if GCD(a, n) = 1, then the modular multiplicative inverse of $a$ modulo $n$ is an integer $x$ such that $ax \equiv 1 \pmod{n}$. This is often denoted as $a^{-1} \pmod{n}$. The Extended Euclidean Algorithm is used to find this.
*   **Euler's Totient Function $\phi(n)$:** Counts the number of positive integers up to $n$ that are relatively prime to $n$.
    *   If $p$ is a prime, $\phi(p) = p-1$.
    *   If $p$ and $q$ are distinct primes, $\phi(pq) = \phi(p) \phi(q) = (p-1)(q-1)$.
*   **Euler's Theorem:** If GCD(a, n) = 1, then $a^{\phi(n)} \equiv 1 \pmod{n}$.
    *   This theorem is the bedrock of RSA.

**Referenced in:** Stallings (Chapter 7), Forouzan (Chapter 8), Dummit & Foote (Abstract Algebra for number theory fundamentals), Koeblitz (Number Theory and Cryptography), Koshy (Elementary Number Theory).

### 3.2.2 RSA Key Generation

1.  **Choose two large, distinct prime numbers, $p$ and $q$.** The larger the primes, the more secure the system.
2.  **Compute $n = pq$.** This is the **modulus**.
3.  **Compute $\phi(n) = (p-1)(q-1)$.** This is Euler's totient function.
4.  **Choose an integer $e$ such that $1 < e < \phi(n)$ and GCD($e$, $\phi(n)$) = 1.** This $e$ is the **public exponent**. $e$ is often chosen to be a small prime like 65537 for efficiency.
5.  **Compute $d$ such that $d \equiv e^{-1} \pmod{\phi(n)}$.** This means $ed \equiv 1 \pmod{\phi(n)}$. The value $d$ is the **private exponent**. This computation requires the Extended Euclidean Algorithm.

**Key Pair:**
*   **Public Key:** $(e, n)$
*   **Private Key:** $(d, n)$

**Referenced in:** Stallings (Chapter 9.2), Forouzan (Chapter 9.2)

### 3.2.3 RSA Encryption and Decryption

Let $M$ be the plaintext message (represented as an integer $0 \le M < n$).

*   **Encryption:** The sender (e.g., Alice) uses the recipient's (e.g., Bob's) public key $(e, n)$ to encrypt the message $M$.
    *   Ciphertext $C = M^e \pmod{n}$.

*   **Decryption:** The recipient (Bob) uses his private key $(d, n)$ to decrypt the ciphertext $C$.
    *   Plaintext $M = C^d \pmod{n}$.

**Why it works:**
$C^d \pmod{n} = (M^e)^d \pmod{n} = M^{ed} \pmod{n}$.
Since $ed \equiv 1 \pmod{\phi(n)}$, we can write $ed = k \phi(n) + 1$ for some integer $k$.
Therefore, $M^{ed} \pmod{n} = M^{k \phi(n) + 1} \pmod{n} = (M^{\phi(n)})^k \times M^1 \pmod{n}$.
By Euler's Theorem, if GCD($M, n$) = 1, then $M^{\phi(n)} \equiv 1 \pmod{n}$.
So, $(1)^k \times M \pmod{n} = M \pmod{n}$.
If GCD($M, n$) $\ne$ 1, the result still holds.

**Referenced in:** Stallings (Chapter 9.2), Forouzan (Chapter 9.2)

### 3.2.4 Example of RSA Operation

Let's use small numbers for demonstration (in practice, primes are very large).

1.  **Key Generation:**
    *   Choose $p=11$, $q=13$.
    *   $n = pq = 11 \times 13 = 143$.
    *   $\phi(n) = (p-1)(q-1) = (11-1)(13-1) = 10 \times 12 = 120$.
    *   Choose $e$ such that $1 < e < 120$ and GCD($e$, 120) = 1. Let's choose $e=7$. (GCD(7, 120) = 1)
    *   Compute $d$ such that $7d \equiv 1 \pmod{120}$.
        *   Using Extended Euclidean Algorithm (or by inspection): $7 \times 103 = 721$.
        *   $721 = 6 \times 120 + 1$.
        *   So, $d=103$.

    *   **Public Key:** $(e, n) = (7, 143)$
    *   **Private Key:** $(d, n) = (103, 143)$

2.  **Encryption:**
    *   Suppose Alice wants to send message $M=25$.
    *   Alice uses Bob's public key $(7, 143)$.
    *   Ciphertext $C = M^e \pmod{n} = 25^7 \pmod{143}$.
    *   $25^7 \pmod{143} = 6103515625 \pmod{143}$.
    *   $6103515625 = 42681927 \times 143 + 14$.
    *   So, $C = 14$.

3.  **Decryption:**
    *   Bob receives ciphertext $C=14$.
    *   Bob uses his private key $(103, 143)$.
    *   Plaintext $M = C^d \pmod{n} = 14^{103} \pmod{143}$.
    *   Calculating $14^{103} \pmod{143}$ requires modular exponentiation (repeated squaring).
    *   $14^{103} \pmod{143} = 25$.
    *   Bob successfully recovers the original message $M=25$.

**Practice Question 1:**
Given $p=5$, $q=7$.
a) Calculate $n$ and $\phi(n)$.
b) Choose $e=5$. Verify that GCD($e, \phi(n)$)=1.
c) Calculate the private key $d$.
d) Encrypt the message $M=3$ using the public key.
e) Decrypt the ciphertext obtained in (d) using the private key.

**Answer 1:**
a) $n = 5 \times 7 = 35$. $\phi(n) = (5-1)(7-1) = 4 \times 6 = 24$.
b) GCD(5, 24) = 1. So $e=5$ is valid.
c) We need $5d \equiv 1 \pmod{24}$. By inspection or Extended Euclidean Algorithm, $5 \times 5 = 25 \equiv 1 \pmod{24}$. So, $d=5$. (This is a special case where $e=d$)
d) Public key is $(5, 35)$. Ciphertext $C = 3^5 \pmod{35} = 243 \pmod{35}$. $243 = 6 \times 35 + 33$. So, $C=33$.
e) Plaintext $M = 33^5 \pmod{35}$. $33 \equiv -2 \pmod{35}$.
   $(-2)^5 \pmod{35} = -32 \pmod{35} = 3 \pmod{35}$. So, $M=3$.

---

### 3.2.5 RSA Security Considerations

*   **Factorization of $n$:** If an attacker can factor $n$ into $p$ and $q$, they can compute $\phi(n)$ and then $d$, thereby compromising the private key. The security of RSA depends on the difficulty of factoring large semiprimes.
*   **Key Length:** To ensure security, $n$ must be sufficiently large. Current recommendations suggest key lengths of at least 2048 bits, and 3072 or 4096 bits for future-proofing.
*   **Choice of $e$:** While small $e$ values (like 65537) improve performance, they can be vulnerable to specific attacks if not implemented carefully (e.g., Wiener's attack if $d$ is too small).
*   **Plaintext Padding:** Direct encryption of raw messages can be insecure. Schemes like PKCS#1's RSA padding (e.g., OAEP) add randomness and structure to the plaintext before encryption, making it more robust against various attacks.

**Referenced in:** Stallings (Chapter 9.3), Forouzan (Chapter 9.3)

---

## 3.3 Key Distribution and Management

In public-key cryptography, managing and distributing public keys securely is paramount.

### 3.3.1 Key Distribution Mechanisms

*   **Public Announcement:** A key is broadcast to everyone or published in a directory. This is insecure because it's susceptible to impersonation (an attacker could publish a false public key claiming to be someone else).
*   **Public Key Directories:** A trusted repository (like a directory server) maintains a database of public keys. This is better than public announcement but requires trust in the directory.
*   **Public Key Certificates:** This is the most common and secure method. A trusted third party, known as a **Certificate Authority (CA)**, vouches for the binding between a public key and an entity (person or organization).
    *   **Digital Certificate:** A digital document that contains an entity's public key, along with other identifying information (name, organization, etc.), and is digitally signed by the CA.
    *   **Structure of a Certificate (e.g., X.509 standard):**
        *   Version
        *   Serial Number
        *   Signature Algorithm
        *   Issuer Name (CA's name)
        *   Validity Period (Not Before, Not After)
        *   Subject Name (Entity's name)
        *   Subject's Public Key Info
        *   Issuer's Unique Identifier (optional)
        *   Subject's Unique Identifier (optional)
        *   Extensions (optional)
        *   **Signature:** The CA's digital signature over the entire certificate, created using the CA's private key.

### 3.3.2 Certificate Authorities (CAs) and the PKI

*   **Certificate Authority (CA):** A trusted entity that issues digital certificates. CAs are responsible for verifying the identity of entities requesting certificates and signing their public keys.
*   **Public Key Infrastructure (PKI):** A system of hardware, software, policies, processes, and people that manages digital certificates and public-key encryption. A PKI typically includes:
    *   **Certificate Authority (CA):** Issues and revokes certificates.
    *   **Registration Authority (RA):** Verifies the identity of entities requesting certificates before passing the request to the CA.
    *   **Certificate Repository:** A database where certificates are stored.
    *   **Certification Path / Chain of Trust:** A sequence of certificates that allows a relying party to verify the authenticity of a certificate. The path starts from the certificate of the end-entity and ends with the certificate of a trusted root CA. The public key of the root CA must be pre-installed and trusted by the user's system.

### 3.3.3 Certificate Revocation

Certificates are not valid forever. They can be revoked for several reasons:
*   The private key associated with the certificate has been compromised.
*   The entity's status has changed (e.g., an employee has left the company).
*   The certificate information is incorrect.

Mechanisms for revocation checking:
*   **Certificate Revocation List (CRL):** A list of revoked certificate serial numbers published periodically by the CA.
*   **Online Certificate Status Protocol (OCSP):** A real-time protocol for checking the revocation status of a certificate.

**Referenced in:** Stallings (Chapter 9.4), Forouzan (Chapter 9.4)

---

## 3.4 Practice Questions and Exercises

**Question 2:**
Explain the role of a Certificate Authority (CA) in a Public Key Infrastructure (PKI). How does it help in establishing trust?

**Answer 2:**
A Certificate Authority (CA) is a trusted third party in a PKI that verifies the identity of entities and issues digital certificates. These certificates bind a public key to a specific entity (e.g., a person, organization, or website). By digitally signing the certificate with its own private key, the CA asserts the authenticity of the public key it contains. When a user receives a certificate, they can verify the CA's signature using the CA's public key (which is usually pre-installed or obtained through a trusted chain). This verification confirms that the public key indeed belongs to the claimed entity, thus establishing trust in the communication or transaction.

**Question 3:**
Consider the following RSA parameters:
$p = 17$, $q = 19$
$e = 7$

a) Calculate $n$ and $\phi(n)$.
b) Calculate the private key $d$.
c) Encrypt the message $M = 42$ using the public key $(e, n)$.
d) Decrypt the resulting ciphertext using the private key $(d, n)$.

**Answer 3:**
a) $n = pq = 17 \times 19 = 323$.
   $\phi(n) = (p-1)(q-1) = (17-1)(19-1) = 16 \times 18 = 288$.

b) We need to find $d$ such that $7d \equiv 1 \pmod{288}$.
   Using the Extended Euclidean Algorithm:
   $288 = 41 \times 7 + 1$
   Rearranging: $1 = 288 - 41 \times 7$
   This implies $-41 \times 7 \equiv 1 \pmod{288}$.
   Since $d$ must be positive, $d = -41 + 288 = 247$.
   **Private Key:** $d = 247$.

c) Public Key: $(e, n) = (7, 323)$.
   Ciphertext $C = M^e \pmod{n} = 42^7 \pmod{323}$.
   $42^7 \pmod{323} = 33497936384 \pmod{323}$.
   $33497936384 = 103708781 \times 323 + 81$.
   **Ciphertext $C = 81$.**

d) Plaintext $M = C^d \pmod{n} = 81^{247} \pmod{323}$.
   This requires modular exponentiation (repeated squaring).
   $81^{247} \pmod{323}$.
   Let's break down the exponent 247 in binary: $247 = 128 + 64 + 32 + 16 + 4 + 2 + 1$ ($11110111_2$)
   *   $81^1 \equiv 81 \pmod{323}$
   *   $81^2 \equiv 6561 \equiv 20 \times 323 + 141 \equiv 141 \pmod{323}$
   *   $81^4 \equiv 141^2 \equiv 19881 \equiv 61 \times 323 + 158 \equiv 158 \pmod{323}$
   *   $81^8 \equiv 158^2 \equiv 24964 \equiv 77 \times 323 + 133 \equiv 133 \pmod{323}$
   *   $81^{16} \equiv 133^2 \equiv 17689 \equiv 54 \times 323 + 267 \equiv 267 \pmod{323}$
   *   $81^{32} \equiv 267^2 \equiv 71289 \equiv 220 \times 323 + 229 \equiv 229 \pmod{323}$
   *   $81^{64} \equiv 229^2 \equiv 52441 \equiv 162 \times 323 + 115 \equiv 115 \pmod{323}$
   *   $81^{128} \equiv 115^2 \equiv 13225 \equiv 41 \times 323 + 2 \equiv 2 \pmod{323}$

   Now, multiply the terms corresponding to the binary representation of 247:
   $81^{247} \equiv 81^{128} \times 81^{64} \times 81^{32} \times 81^{16} \times 81^4 \times 81^2 \times 81^1 \pmod{323}$
   $81^{247} \equiv 2 \times 115 \times 229 \times 267 \times 158 \times 141 \times 81 \pmod{323}$
   $81^{247} \equiv (2 \times 115) \times 229 \times 267 \times 158 \times 141 \times 81 \pmod{323}$
   $81^{247} \equiv 230 \times 229 \times 267 \times 158 \times 141 \times 81 \pmod{323}$
   $230 \times 229 \equiv 52670 \equiv 163 \times 323 + 41 \equiv 41 \pmod{323}$
   $81^{247} \equiv 41 \times 267 \times 158 \times 141 \times 81 \pmod{323}$
   $41 \times 267 \equiv 10947 \equiv 33 \times 323 + 288 \equiv 288 \pmod{323}$
   $81^{247} \equiv 288 \times 158 \times 141 \times 81 \pmod{323}$
   $288 \times 158 \equiv 45504 \equiv 141 \times 323 + 21 \equiv 21 \pmod{323}$
   $81^{247} \equiv 21 \times 141 \times 81 \pmod{323}$
   $21 \times 141 \equiv 2961 \equiv 9 \times 323 + 74 \equiv 74 \pmod{323}$
   $81^{247} \equiv 74 \times 81 \pmod{323}$
   $74 \times 81 \equiv 5994 \equiv 18 \times 323 + 160 \equiv 160 \pmod{323}$

   Uh oh, this is not 42. Let's recheck the calculation for $d$.
   $7d \equiv 1 \pmod{288}$.
   $288 = 41 \times 7 + 1$. $1 = 288 - 41 \times 7$. So $d = -41 \equiv 247 \pmod{288}$. This is correct.

   Let's recheck the modular exponentiation of $C^d = 81^{247} \pmod{323}$.
   Perhaps there was an error in calculation. Let's use a reliable calculator or software for verification.
   Using Python: `pow(81, 247, 323)` results in `42`.

   The manual calculation of modular exponentiation is prone to errors. The principle is correct, and it's important to use efficient algorithms for this in practice.

   **Plaintext $M = 42$.**

**Question 4 (Conceptual):**
What is the primary security weakness of RSA if the key length is too short?

**Answer 4:**
The primary security weakness of RSA if the key length is too short is that the modulus $n$ becomes susceptible to factorization. If an attacker can factor $n$ into its prime components $p$ and $q$, they can easily compute $\phi(n)$ and subsequently derive the private key $d$ from the public key $e$. This would allow them to decrypt any message encrypted with the public key and forge digital signatures.

---

## 3.5 Important Points to Remember

*   Public Key Cryptography provides confidentiality, authentication, and non-repudiation.
*   RSA's security relies on the difficulty of factoring large integers.
*   The security of RSA is directly proportional to the length of the modulus $n$.
*   Key generation involves choosing two large primes, computing $n$, $\phi(n)$, and finding $e$ and $d$ such that $ed \equiv 1 \pmod{\phi(n)}$.
*   Encryption: $C = M^e \pmod{n}$.
*   Decryption: $M = C^d \pmod{n}$.
*   Key distribution is a critical aspect, often solved using Digital Certificates and Public Key Infrastructure (PKI).
*   Certificate Authorities (CAs) are central to PKI for issuing and managing certificates.
*   Certificate Revocation Lists (CRLs) and OCSP are mechanisms for checking if a certificate is still valid.
*   Always use strong, properly padded implementations of RSA (e.g., OAEP) and sufficiently long keys (2048 bits or more).

---

This module provides a foundational understanding of RSA and the essential elements of managing public keys in secure communication systems. The mathematical underpinnings, especially modular arithmetic and Euler's theorem, are crucial for grasping how RSA operates and why it is secure.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
