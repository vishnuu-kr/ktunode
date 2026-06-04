---
title: "Public Key Encryption"
subject: "SECURE COMMUNICATION"
module: "Module 4: Message Authentication and Hash Function: "
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c460b09ce205780fee94"
status: "completed"
scrapedAt: "2026-05-23T18:03:18.829Z"
---
# SECURE COMMUNICATION: Module 4: Message Authentication and Hash Function

## Topic: Public Key Encryption

**Knowledge Level:** K2 (Understanding and applying concepts)

**Relevant Course Outcomes:**

*   **CO3:** Outline the concepts of public key cryptography, RSA algorithm, key distribution, and management for public key systems.

---

### 1. Introduction to Public Key Cryptography (PKC)

**1.1 Motivation for Public Key Cryptography:**

Traditional symmetric key cryptography requires both parties to share a secret key. This poses challenges for:
*   **Key Distribution:** Securely distributing a unique secret key to every pair of communicating parties can be impractical, especially in large networks.
*   **Scalability:** As the number of users increases, the number of keys required grows quadratically (n(n-1)/2 for n users).
*   **Key Management:** Managing and updating keys for a large number of users is complex.

PKC addresses these issues by using a pair of keys: a **public key** and a **private key**.

**1.2 Core Concepts of Public Key Cryptography:**

*   **Key Pair:** Each user generates a unique pair of mathematically related keys:
    *   **Public Key (P<sub>pub</sub>):** This key can be freely shared with anyone. It is used for encryption and signature verification.
    *   **Private Key (P<sub>priv</sub>):** This key must be kept secret by the owner. It is used for decryption and signature generation.
*   **Asymmetric Encryption:** The term "asymmetric" refers to the fact that the key used for encryption is different from the key used for decryption.
*   **Mathematical Relationship:** The public and private keys are derived from the same mathematical problem, making it computationally infeasible to derive the private key from the public key. This is often based on the difficulty of problems like integer factorization or discrete logarithms.

**1.3 Key Properties of Public Key Cryptography:**

*   **Confidentiality:** A message encrypted with a recipient's public key can only be decrypted with the recipient's private key.
*   **Authentication:** A message signed with a sender's private key can be verified with the sender's public key, proving the origin of the message.
*   **Non-repudiation:** Because only the owner of the private key can generate a valid signature, the sender cannot later deny having sent the message.

**1.4 Comparison with Symmetric Cryptography:**

| Feature          | Symmetric Cryptography                        | Public Key Cryptography                     |
| :--------------- | :-------------------------------------------- | :------------------------------------------ |
| **Keys**         | Single secret key shared between parties      | Pair of keys (public & private) for each user |
| **Key Length**   | Shorter keys generally provide good security  | Longer keys are typically required          |
| **Speed**        | Much faster                                   | Much slower                                 |
| **Key Distribution** | Difficult for large networks                 | Easier                                      |
| **Applications** | Bulk data encryption, confidentiality         | Key exchange, digital signatures, authentication, non-repudiation |
| **Security Basis** | Complexity of algorithms (e.g., DES, AES)    | Computational difficulty of mathematical problems (e.g., factoring, discrete logs) |

**References:**
*   Stallings, Chapter 9: Public-Key Cryptography and RSA
*   Forouzan, Chapter 15: Public-Key Cryptography

---

### 2. Mathematical Foundations for Public Key Cryptography

PKC relies on number theory. Understanding basic concepts is crucial.

**2.1 Modular Arithmetic:**

*   **Definition:** Modular arithmetic deals with remainders after division. The expression "$a \pmod{n}$" (read as "a modulo n") represents the remainder when 'a' is divided by 'n'.
*   **Properties:**
    *   $(a + b) \pmod{n} = ((a \pmod{n}) + (b \pmod{n})) \pmod{n}$
    *   $(a \times b) \pmod{n} = ((a \pmod{n}) \times (b \pmod{n})) \pmod{n}$
*   **Example:** $17 \pmod{5} = 2$ because $17 = 3 \times 5 + 2$.

**2.2 Prime Numbers:**

*   **Definition:** A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself.
*   **Importance:** Prime numbers are fundamental to many PKC algorithms, particularly RSA.
*   **Example:** 2, 3, 5, 7, 11, 13, 17, 19, 23...

**2.3 Fermat's Little Theorem:**

*   **Statement:** If *p* is a prime number, then for any integer *a* not divisible by *p*, we have $a^{p-1} \equiv 1 \pmod{p}$.
*   **Application:** Used in some number-theoretic proofs and algorithms.

**2.4 Euler's Totient Theorem (Generalization of Fermat's Little Theorem):**

*   **Definition of Euler's Totient Function ($\phi(n)$):** For a positive integer *n*, $\phi(n)$ is the number of positive integers less than or equal to *n* that are relatively prime to *n* (i.e., their greatest common divisor with *n* is 1).
    *   If *p* is prime, $\phi(p) = p-1$.
    *   If *p* is prime and *k* is a positive integer, $\phi(p^k) = p^k - p^{k-1} = p^k(1 - 1/p)$.
    *   If *m* and *n* are relatively prime, $\phi(mn) = \phi(m)\phi(n)$ (multiplicative property).
*   **Statement:** If *a* and *n* are relatively prime (gcd(a, n) = 1), then $a^{\phi(n)} \equiv 1 \pmod{n}$.
*   **Application:** Crucial for understanding RSA's decryption process.

**2.5 Euclidean Algorithm:**

*   **Purpose:** Efficiently computes the greatest common divisor (GCD) of two integers.
*   **Extended Euclidean Algorithm:** Computes the GCD and also finds integers *x* and *y* such that $ax + by = \text{gcd}(a, b)$. This is essential for finding modular multiplicative inverses.
*   **Example:** Find the GCD of 48 and 18.
    *   $48 = 2 \times 18 + 12$
    *   $18 = 1 \times 12 + 6$
    *   $12 = 2 \times 6 + 0$
    *   GCD(48, 18) = 6.
*   **Modular Inverse:** To find the inverse of *a* modulo *m*, we need to find *x* such that $ax \equiv 1 \pmod{m}$. This exists if and only if gcd(a, m) = 1. The extended Euclidean algorithm can find *x*.

**References:**
*   Stallings, Appendix A: Number Theory (especially sections on modular arithmetic, Euler's totient function, and Euclidean algorithm)
*   Forouzan, Chapter 15 (mathematical background)
*   Koshy, Chapters 2, 3, 4 (Modular Arithmetic, Prime Numbers, GCD and Euclidean Algorithm)
*   Koeblitz, Chapters 1 & 2 (Basic Concepts of Number Theory)

---

### 3. Public Key Cryptosystems: RSA Algorithm

The RSA algorithm (Rivest, Shamir, and Adleman) is one of the oldest and most widely used public-key cryptosystems. It is based on the computational difficulty of factoring large integers.

**3.1 RSA Algorithm Steps:**

**3.1.1 Key Generation:**

1.  **Choose Two Large Prime Numbers (p, q):** Select two distinct large prime numbers *p* and *q*. The security of RSA depends on the difficulty of factoring the product *n = p*q*.
2.  **Compute n:** Calculate the modulus *n = p*q*. This *n* is part of both the public and private keys.
3.  **Compute $\phi(n)$:** Calculate Euler's totient function $\phi(n)$. Since *p* and *q* are prime, $\phi(n) = \phi(pq) = \phi(p)\phi(q) = (p-1)(q-1)$.
4.  **Choose Public Exponent (e):** Select an integer *e* such that:
    *   $1 < e < \phi(n)$
    *   gcd(*e*, $\phi(n)$) = 1 (meaning *e* and $\phi(n)$ are relatively prime).
    A common choice for *e* is 65537 (which is $2^{16} + 1$), as it is prime and leads to efficient encryption.
5.  **Compute Private Exponent (d):** Calculate the integer *d* such that $ed \equiv 1 \pmod{\phi(n)}$. This means *d* is the modular multiplicative inverse of *e* modulo $\phi(n)$. The extended Euclidean algorithm is used to find *d*.

**Public Key:** The public key consists of the pair $(n, e)$.
**Private Key:** The private key consists of the pair $(n, d)$.

**3.1.2 Encryption:**

To encrypt a message *M* (represented as an integer $0 \le M < n$):
1.  **Compute Ciphertext (C):** The sender uses the recipient's public key $(n, e)$ to compute the ciphertext *C*:
    $C = M^e \pmod{n}$

**3.1.3 Decryption:**

To decrypt a ciphertext *C*:
1.  **Compute Original Message (M):** The recipient uses their private key $(n, d)$ to recover the original message *M*:
    $M = C^d \pmod{n}$

**3.1.4 Proof of Correctness (Why $C^d \pmod{n} = M$):**

We need to show that $(M^e)^d \equiv M \pmod{n}$.
This is equivalent to showing $M^{ed} \equiv M \pmod{n}$.

Since $ed \equiv 1 \pmod{\phi(n)}$, we can write $ed = k \phi(n) + 1$ for some integer *k*.

So, $M^{ed} = M^{k \phi(n) + 1} = (M^{\phi(n)})^k \times M$.

By Euler's Totient Theorem, if gcd(M, n) = 1, then $M^{\phi(n)} \equiv 1 \pmod{n}$.
Therefore, $M^{ed} \equiv 1^k \times M \equiv M \pmod{n}$.

**What if gcd(M, n) $\neq$ 1?**
If gcd(M, n) $\neq$ 1, then *M* must be a multiple of *p* or *q* (or both).
Let's assume *M* is a multiple of *p*. Then $M \equiv 0 \pmod{p}$.
So, $M^{ed} \equiv 0^{ed} \equiv 0 \pmod{p}$.
Also, $M \equiv 0 \pmod{p}$. Thus, $M^{ed} \equiv M \pmod{p}$.

Now consider modulo *q*. If gcd(M, q) = 1, then by Euler's theorem, $M^{\phi(q)} \equiv M^{q-1} \equiv 1 \pmod{q}$.
Since $ed \equiv 1 \pmod{\phi(n)} = 1 \pmod{(p-1)(q-1)}$, it implies $ed = k'(q-1) + 1$ for some integer $k'$.
So, $M^{ed} = M^{k'(q-1)+1} = (M^{q-1})^{k'} \times M \equiv 1^{k'} \times M \equiv M \pmod{q}$.

In both cases (gcd(M, n) = 1 and gcd(M, n) $\neq$ 1), $M^{ed} \equiv M$ holds for both modulo *p* and modulo *q*. By the Chinese Remainder Theorem, if two numbers are congruent modulo *p* and modulo *q* (where *p* and *q* are distinct primes), they are also congruent modulo *pq* (i.e., modulo *n*).
Hence, $M^{ed} \equiv M \pmod{n}$.

**3.1.5 Example of RSA:**

1.  **Key Generation:**
    *   Choose $p = 61$, $q = 53$ (both prime).
    *   $n = p \times q = 61 \times 53 = 3233$.
    *   $\phi(n) = (p-1)(q-1) = (61-1)(53-1) = 60 \times 52 = 3120$.
    *   Choose $e = 17$ (since $1 < 17 < 3120$ and gcd(17, 3120) = 1).
    *   Find $d$ such that $17d \equiv 1 \pmod{3120}$. Using the extended Euclidean algorithm:
        *   $3120 = 183 \times 17 + 9$
        *   $17 = 1 \times 9 + 8$
        *   $9 = 1 \times 8 + 1$
        *   $1 = 9 - 1 \times 8$
        *   $1 = 9 - 1 \times (17 - 1 \times 9) = 2 \times 9 - 1 \times 17$
        *   $1 = 2 \times (3120 - 183 \times 17) - 1 \times 17$
        *   $1 = 2 \times 3120 - 366 \times 17 - 1 \times 17$
        *   $1 = 2 \times 3120 - 367 \times 17$
        So, $-367 \times 17 \equiv 1 \pmod{3120}$.
        $d = -367 + 3120 = 2753$.
    *   Public Key: $(n=3233, e=17)$
    *   Private Key: $(n=3233, d=2753)$

2.  **Encryption:**
    *   Let the message be $M = 65$.
    *   $C = M^e \pmod{n} = 65^{17} \pmod{3233}$.
    *   Calculating $65^{17} \pmod{3233}$ requires modular exponentiation (e.g., using repeated squaring).
    *   $65^{17} \pmod{3233} = 2790$.
    *   Ciphertext $C = 2790$.

3.  **Decryption:**
    *   $M = C^d \pmod{n} = 2790^{2753} \pmod{3233}$.
    *   Using modular exponentiation, $2790^{2753} \pmod{3233} = 65$.
    *   Original message recovered: $M = 65$.

**References:**
*   Stallings, Chapter 9: Public-Key Cryptography and RSA (detailed explanations and proofs)
*   Forouzan, Chapter 15: Public-Key Cryptography (clear step-by-step process)
*   Stinson, Chapter 4: Public-Key Cryptography (focus on theoretical aspects)

---

### 4. Diffie-Hellman Key Exchange

While RSA is for encryption and digital signatures, Diffie-Hellman is specifically for establishing a shared secret key over an insecure channel. It is a cornerstone for key exchange in many protocols.

**4.1 The Problem:**

Alice and Bob want to agree on a shared secret key that they can then use for symmetric encryption, but they can only communicate over a public channel where an eavesdropper (Eve) can see all their messages.

**4.2 The Protocol:**

1.  **Public Parameters:** Alice and Bob agree on two public numbers:
    *   A large prime number *q*.
    *   A generator *g* of the multiplicative group of integers modulo *q*. The generator *g* is a primitive root modulo *q*.
2.  **Alice's Steps:**
    *   Alice chooses a secret random integer *a* ($1 \le a < q-1$).
    *   Alice computes $A = g^a \pmod{q}$.
    *   Alice sends *A* to Bob.
3.  **Bob's Steps:**
    *   Bob chooses a secret random integer *b* ($1 \le b < q-1$).
    *   Bob computes $B = g^b \pmod{q}$.
    *   Bob sends *B* to Alice.
4.  **Shared Secret Calculation:**
    *   **Alice computes:** $S = B^a \pmod{q} = (g^b)^a \pmod{q} = g^{ba} \pmod{q}$.
    *   **Bob computes:** $S = A^b \pmod{q} = (g^a)^b \pmod{q} = g^{ab} \pmod{q}$.

Both Alice and Bob now possess the same shared secret key *S*.

**4.3 Security:**

Eve sees *q*, *g*, *A*, and *B*. To find the shared secret *S*, Eve needs to compute either $a$ from $A = g^a \pmod{q}$ or $b$ from $B = g^b \pmod{q}$. This is known as the **Diffie-Hellman problem**, which is computationally equivalent to the **discrete logarithm problem**. For large prime *q*, finding the discrete logarithm is very difficult.

**4.4 Example:**

1.  **Public Parameters:** Let $q = 23$ (prime) and $g = 5$ (a primitive root modulo 23).
2.  **Alice:**
    *   Chooses private key $a = 4$.
    *   Computes $A = g^a \pmod{q} = 5^4 \pmod{23}$.
    *   $5^4 = 625$. $625 \div 23 = 27$ remainder $4$.
    *   $A = 4$. Alice sends 4 to Bob.
3.  **Bob:**
    *   Chooses private key $b = 3$.
    *   Computes $B = g^b \pmod{q} = 5^3 \pmod{23}$.
    *   $5^3 = 125$. $125 \div 23 = 5$ remainder $10$.
    *   $B = 10$. Bob sends 10 to Alice.
4.  **Shared Secret:**
    *   **Alice computes:** $S = B^a \pmod{q} = 10^4 \pmod{23}$.
        $10^4 = 10000$. $10000 \div 23 = 434$ remainder $18$.
        $S = 18$.
    *   **Bob computes:** $S = A^b \pmod{q} = 4^3 \pmod{23}$.
        $4^3 = 64$. $64 \div 23 = 2$ remainder $18$.
        $S = 18$.

Both Alice and Bob agree on the secret key $S = 18$. Eve, seeing $q=23, g=5, A=4, B=10$, would need to solve $5^a \equiv 4 \pmod{23}$ or $5^b \equiv 10 \pmod{23}$ to find the secret keys.

**References:**
*   Stallings, Chapter 9: Public-Key Cryptography and RSA (Diffie-Hellman Section)
*   Forouzan, Chapter 15: Public-Key Cryptography (Diffie-Hellman Section)
*   Washington, Chapter 4: Discrete Logarithms (for background on the discrete log problem)

---

### 5. Public Key Distribution and Management

Having a public key system is only useful if keys can be reliably distributed and managed.

**5.1 Public Key Distribution:**

*   **Direct Exchange:** If two parties have met and can trust each other, they can exchange public keys directly.
*   **Public Announcement:** A party can broadcast its public key over a public channel (e.g., email, website). However, this is vulnerable to impersonation.
*   **Trusted Third Party (Directory):** A central authority (like a Certificate Authority) can maintain a directory of public keys. Users can obtain public keys from this directory. This is the most common and secure method.

**5.2 Public Key Certificates:**

*   **Purpose:** To bind a public key to an identity and provide assurance of its authenticity.
*   **Structure:** A public key certificate (often X.509 certificate) contains:
    *   The owner's identity (e.g., name, organization).
    *   The owner's public key.
    *   The certificate issuer's identity (e.g., the Certificate Authority - CA).
    *   A validity period.
    *   A serial number.
    *   The CA's digital signature on all the above information.
*   **Verification:** When a user receives a certificate, they can verify its authenticity by:
    1.  Checking the CA's digital signature on the certificate using the CA's public key (which is often pre-installed in browsers or operating systems).
    2.  Ensuring the certificate is not expired.
    3.  Ensuring the certificate is for the intended recipient.

**5.3 Key Management:**

*   **Key Generation:** Secure generation of key pairs.
*   **Key Storage:** Secure storage of private keys (e.g., using hardware security modules - HSMs, encrypted files).
*   **Key Usage:** Proper use of keys for encryption/decryption and signing/verification.
*   **Key Distribution:** As discussed above.
*   **Key Revocation:** Procedures for invalidating compromised or no longer needed keys (e.g., Certificate Revocation Lists - CRLs).
*   **Key Archival:** Securely storing old keys for potential future use (e.g., decrypting old encrypted data).

**5.4 Digital Signatures and Public Key Cryptography:**

Public key cryptography is fundamental to digital signatures, which provide authentication and non-repudiation.

*   **Signing a message:**
    1.  The sender creates a hash of the message.
    2.  The sender encrypts the hash with their **private key**. This encrypted hash is the digital signature.
    3.  The signature is appended to the message.
*   **Verifying a signature:**
    1.  The receiver decrypts the signature using the sender's **public key** to obtain the original hash (Hash<sub>1</sub>).
    2.  The receiver independently computes the hash of the received message (Hash<sub>2</sub>).
    3.  If Hash<sub>1</sub> == Hash<sub>2</sub>, the signature is valid, proving:
        *   **Authentication:** The message came from the claimed sender (only they have the private key).
        *   **Integrity:** The message has not been altered since it was signed.
        *   **Non-repudiation:** The sender cannot deny sending the message.

**References:**
*   Stallings, Chapter 9 (Public Key Management) and Chapter 10 (Digital Signatures)
*   Forouzan, Chapter 15 (Digital Signatures) and Chapter 16 (Key Management)

---

### 6. Practice Questions and Answers

**Question 1:**
Alice wants to send a confidential message to Bob using public-key cryptography. What key does Alice use to encrypt the message, and what key does Bob use to decrypt it?

**Answer:**
Alice uses Bob's **public key** to encrypt the message. Bob uses his **private key** to decrypt the message.

---

**Question 2:**
Explain the difference between symmetric and public-key cryptography in terms of the number of keys used and the primary use cases.

**Answer:**
*   **Symmetric Cryptography:** Uses a single, shared secret key for both encryption and decryption. It is very fast and efficient, making it suitable for encrypting large amounts of data (confidentiality). The main challenge is secure key distribution.
*   **Public-Key Cryptography:** Uses a pair of mathematically related keys: a public key (shared) and a private key (kept secret). It is much slower. Its primary use cases are secure key exchange, digital signatures (authentication, integrity, non-repudiation), and encrypting small amounts of data.

---

**Question 3:**
Consider the RSA algorithm. If $p=3, q=11$.
a) Calculate $n$ and $\phi(n)$.
b) Choose an encryption exponent $e$ such that $1 < e < \phi(n)$ and $\text{gcd}(e, \phi(n)) = 1$.
c) Calculate the decryption exponent $d$.
d) If the message $M=7$, calculate the ciphertext $C$.
e) If the ciphertext $C=17$, calculate the decrypted message $M$.

**Answer:**
a) $n = p \times q = 3 \times 11 = 33$.
$\phi(n) = (p-1)(q-1) = (3-1)(11-1) = 2 \times 10 = 20$.

b) We need $e$ such that $1 < e < 20$ and $\text{gcd}(e, 20) = 1$. Possible values for $e$ are 3, 7, 9, 11, 13, 17, 19. Let's choose $e=7$.

c) We need to find $d$ such that $ed \equiv 1 \pmod{\phi(n)}$, so $7d \equiv 1 \pmod{20}$.
Using the extended Euclidean algorithm:
$20 = 2 \times 7 + 6$
$7 = 1 \times 6 + 1$
$1 = 7 - 1 \times 6$
$1 = 7 - 1 \times (20 - 2 \times 7)$
$1 = 7 - 20 + 2 \times 7$
$1 = 3 \times 7 - 1 \times 20$
So, $3 \times 7 \equiv 1 \pmod{20}$. Thus, $d = 3$.

Public Key: $(n=33, e=7)$
Private Key: $(n=33, d=3)$

d) For message $M=7$:
$C = M^e \pmod{n} = 7^7 \pmod{33}$.
$7^2 = 49 \equiv 16 \pmod{33}$
$7^4 \equiv 16^2 = 256 \pmod{33}$. $256 = 7 \times 33 + 25$. So, $7^4 \equiv 25 \pmod{33}$.
$7^7 = 7^4 \times 7^2 \times 7^1 \equiv 25 \times 16 \times 7 \pmod{33}$.
$25 \times 16 = 400$. $400 = 12 \times 33 + 4$. So, $25 \times 16 \equiv 4 \pmod{33}$.
$4 \times 7 = 28 \pmod{33}$.
Ciphertext $C = 28$.

e) For ciphertext $C=17$:
$M = C^d \pmod{n} = 17^3 \pmod{33}$.
$17^2 = 289$. $289 = 8 \times 33 + 25$. So, $17^2 \equiv 25 \pmod{33}$.
$17^3 = 17^2 \times 17 \equiv 25 \times 17 \pmod{33}$.
$25 \times 17 = 425$. $425 = 12 \times 33 + 29$. So, $25 \times 17 \equiv 29 \pmod{33}$.
Decrypted message $M = 29$.

---

**Question 4:**
In the Diffie-Hellman key exchange protocol, what is the "discrete logarithm problem" and why is it important for the security of the protocol?

**Answer:**
The discrete logarithm problem (DLP) is the problem of finding the exponent $x$ in the equation $g^x \equiv h \pmod{p}$, given $g$, $h$, and a prime modulus $p$. In Diffie-Hellman, after Alice and Bob exchange their public values ($A = g^a \pmod{q}$ and $B = g^b \pmod{q}$), an eavesdropper who knows $g$, $q$, $A$, and $B$ would need to solve for either $a$ or $b$ to compute the shared secret $S = g^{ab} \pmod{q}$. This is precisely the discrete logarithm problem. The security of Diffie-Hellman relies on the fact that for large prime numbers $q$, computing the discrete logarithm is computationally infeasible with current algorithms.

---

### 7. Important Points to Remember

*   Public Key Cryptography uses a pair of keys: public (for encryption/verification) and private (for decryption/signing).
*   RSA's security is based on the difficulty of factoring large numbers.
*   Diffie-Hellman's security is based on the difficulty of the discrete logarithm problem.
*   Modular arithmetic and Euler's totient function are foundational to RSA.
*   Public key distribution is a critical aspect, often relying on trusted third parties (CAs) and digital certificates.
*   Digital signatures leverage public key cryptography for authentication, integrity, and non-repudiation.
*   PKC is slower than symmetric key cryptography, hence often used for key exchange or signing, not bulk data encryption.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=8XG7U5yN668) |
