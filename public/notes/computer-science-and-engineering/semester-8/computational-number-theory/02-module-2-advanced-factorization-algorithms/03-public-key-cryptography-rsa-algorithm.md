---
title: "Public-Key Cryptography - RSA algorithm"
subject: "COMPUTATIONAL NUMBER THEORY"
module: "Module 2: Advanced Factorization Algorithms "
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8cb3c"
status: "completed"
scrapedAt: "2026-05-20T17:24:14.016Z"
---
# Computational Number Theory: Module 2 - Advanced Factorization Algorithms

## Topic: Public-Key Cryptography - RSA Algorithm

---

### Introduction to Public-Key Cryptography

Public-key cryptography, also known as asymmetric cryptography, revolutionized secure communication by using a pair of keys: a **public key** for encryption and a **private key** for decryption. This contrasts with symmetric cryptography, which uses a single shared secret key for both operations.

**Key Concepts:**

*   **Public Key:** Can be freely distributed to anyone. Used for encrypting messages or verifying digital signatures.
*   **Private Key:** Must be kept secret by its owner. Used for decrypting messages encrypted with the corresponding public key or creating digital signatures.
*   **Key Pair:** The public and private keys are mathematically linked. Knowing one does not allow for the derivation of the other (in a computationally feasible way).
*   **Asymmetric Operation:** Encryption with the public key can only be reversed by the corresponding private key, and vice-versa.

**Benefits of Public-Key Cryptography:**

*   **Confidentiality:** Ensures that only the intended recipient can read a message.
*   **Authentication:** Verifies the identity of the sender.
*   **Integrity:** Ensures that a message has not been tampered with.
*   **Non-repudiation:** Prevents the sender from denying that they sent a message.

---

### The RSA Algorithm: A Cornerstone of Public-Key Cryptography

RSA (Rivest–Shamir–Adleman) is one of the first and most widely used public-key cryptosystems. Its security relies on the computational difficulty of **factoring large integers**.

**Learning Outcomes Covered:**

*   Understanding the mathematical principles behind RSA.
*   Key generation process in RSA.
*   Encryption and decryption procedures in RSA.
*   Security considerations and vulnerabilities of RSA.
*   Applications of RSA in real-world scenarios.

---

### 1. Mathematical Principles Behind RSA

The security of RSA is based on number theory, specifically the properties of modular arithmetic and the difficulty of factoring large composite numbers.

**Key Concepts:**

*   **Modular Arithmetic:** Operations performed within a fixed range of integers (the modulus). For example, $a \pmod{n}$ gives the remainder when $a$ is divided by $n$.
*   **Euler's Totient Function ($\phi(n)$):** The number of positive integers less than or equal to $n$ that are relatively prime to $n$ (i.e., their greatest common divisor with $n$ is 1).
*   **Euler's Theorem:** If $a$ and $n$ are relatively prime (i.e., $\gcd(a, n) = 1$), then $a^{\phi(n)} \equiv 1 \pmod{n}$.
*   **Fermat's Little Theorem:** A special case of Euler's Theorem. If $p$ is a prime number, then for any integer $a$, $a^p \equiv a \pmod{p}$. If $a$ is not divisible by $p$, then $a^{p-1} \equiv 1 \pmod{p}$.

**RSA's Core Mathematical Idea:**

RSA leverages the fact that if you know the prime factorization of $n$ (i.e., $n = p \times q$), it is easy to calculate $\phi(n) = (p-1)(q-1)$. However, if you only know $n$, it is computationally very difficult to find $p$ and $q$ (i.e., to factor $n$).

The encryption and decryption operations are designed such that:
$ (m^e)^d \equiv m \pmod{n} $
where:
*   $m$ is the plaintext message (represented as an integer).
*   $e$ is the public exponent.
*   $d$ is the private exponent.
*   $n$ is the modulus.

This relationship is made possible by Euler's Theorem. We choose $e$ and $d$ such that $ed \equiv 1 \pmod{\phi(n)}$. This means $ed = k \cdot \phi(n) + 1$ for some integer $k$.
Then, $(m^e)^d = m^{ed} = m^{k \cdot \phi(n) + 1} = (m^{\phi(n)})^k \cdot m$.
By Euler's Theorem, if $\gcd(m, n) = 1$, then $m^{\phi(n)} \equiv 1 \pmod{n}$.
So, $(m^e)^d \equiv 1^k \cdot m \equiv m \pmod{n}$.
This holds even if $\gcd(m, n) \neq 1$ under certain conditions, making the RSA encryption/decryption universally applicable for all messages $m$ in the range $0 \le m < n$.

---

### 2. Key Generation Process in RSA

Generating a secure RSA key pair involves several steps.

**Steps:**

1.  **Choose Two Large Prime Numbers, $p$ and $q$:** These primes should be distinct and very large (e.g., hundreds or thousands of bits long) to ensure security. The larger the primes, the harder it is to factor their product $n$.
2.  **Compute the Modulus, $n$:** $n = p \times q$. The modulus $n$ is part of both the public and private keys.
3.  **Compute Euler's Totient Function, $\phi(n)$:** $\phi(n) = (p-1)(q-1)$. This value is crucial for determining the exponents but is kept secret.
4.  **Choose the Public Exponent, $e$:**
    *   $e$ must be an integer such that $1 < e < \phi(n)$.
    *   $e$ must be **relatively prime** to $\phi(n)$, meaning $\gcd(e, \phi(n)) = 1$.
    *   Commonly chosen values for $e$ are small primes like 3, 17, or 65537 (2^16 + 1) because they make encryption faster. However, choosing very small $e$ can lead to certain vulnerabilities (explained later).
5.  **Compute the Private Exponent, $d$:**
    *   $d$ is the **modular multiplicative inverse** of $e$ modulo $\phi(n)$.
    *   This means $d$ is the integer that satisfies the equation: $ed \equiv 1 \pmod{\phi(n)}$.
    *   $d$ can be computed using the **Extended Euclidean Algorithm**.
6.  **Form the Key Pair:**
    *   **Public Key:** $(e, n)$
    *   **Private Key:** $(d, n)$ (sometimes $(p, q, d)$ is stored for efficiency in decryption, but $d$ is the essential secret part).

**Example of Key Generation:**

Let's use small primes for demonstration purposes (in practice, these primes must be very large).

1.  **Choose primes:** Let $p = 61$ and $q = 53$.
2.  **Compute modulus:** $n = p \times q = 61 \times 53 = 3233$.
3.  **Compute $\phi(n)$:** $\phi(n) = (p-1)(q-1) = (61-1)(53-1) = 60 \times 52 = 3120$.
4.  **Choose public exponent $e$:**
    *   We need $1 < e < 3120$ and $\gcd(e, 3120) = 1$.
    *   Let's choose $e = 17$. We check $\gcd(17, 3120) = 1$, which is true since 17 is prime and 3120 is not a multiple of 17 ($3120 = 17 \times 183 + 9$).
5.  **Compute private exponent $d$:**
    *   We need to solve $17d \equiv 1 \pmod{3120}$.
    *   Using the Extended Euclidean Algorithm:
        *   $3120 = 183 \times 17 + 9$
        *   $17 = 1 \times 9 + 8$
        *   $9 = 1 \times 8 + 1$
        *   Now, back-substitute:
        *   $1 = 9 - 1 \times 8$
        *   $1 = 9 - 1 \times (17 - 1 \times 9) = 9 - 17 + 9 = 2 \times 9 - 17$
        *   $1 = 2 \times (3120 - 183 \times 17) - 17 = 2 \times 3120 - 366 \times 17 - 17$
        *   $1 = 2 \times 3120 - 367 \times 17$
    *   So, $-367 \times 17 \equiv 1 \pmod{3120}$.
    *   To get a positive $d$, we add multiples of 3120: $d = -367 + 3120 = 2753$.
    *   Check: $17 \times 2753 = 46801$. $46801 \pmod{3120} = (15 \times 3120 + 1) \pmod{3120} = 1$.
6.  **Key Pair:**
    *   **Public Key:** $(e=17, n=3233)$
    *   **Private Key:** $(d=2753, n=3233)$

---

### 3. Encryption and Decryption Procedures

The RSA algorithm defines simple mathematical operations for encrypting and decrypting messages.

**Key Concepts:**

*   **Plaintext:** The original message, typically converted into an integer $m$.
*   **Ciphertext:** The encrypted message, represented as an integer $c$.
*   **Message Blocking:** For messages longer than one block, they are broken into blocks, each converted into an integer $m$ such that $0 \le m < n$.

**Encryption Process (Sender):**

1.  Obtain the recipient's **public key** $(e, n)$.
2.  Represent the message as an integer $m$, where $0 \le m < n$. If the message is longer than one block, it's divided into blocks $m_1, m_2, \dots, m_k$, where each $m_i < n$.
3.  Compute the ciphertext $c$ for each block using the formula:
    $c = m^e \pmod{n}$

**Decryption Process (Recipient):**

1.  Use your **private key** $(d, n)$.
2.  Receive the ciphertext $c$.
3.  Compute the original plaintext integer $m$ using the formula:
    $m = c^d \pmod{n}$
4.  Convert the integer $m$ back into the original message.

**Example of Encryption and Decryption:**

Using the key pair generated above: Public Key $(e=17, n=3233)$, Private Key $(d=2753, n=3233)$.

Let the message be the integer $m = 123$.

**Encryption:**

*   $m = 123$
*   $c = m^e \pmod{n}$
*   $c = 123^{17} \pmod{3233}$
*   Calculating $123^{17} \pmod{3233}$ (using modular exponentiation, e.g., binary exponentiation):
    *   $123^2 \equiv 15129 \equiv 15129 \pmod{3233} \equiv 2377 \pmod{3233}$
    *   $123^4 \equiv 2377^2 \equiv 5650129 \pmod{3233} \equiv 2790 \pmod{3233}$
    *   $123^8 \equiv 2790^2 \equiv 7784100 \pmod{3233} \equiv 233 \pmod{3233}$
    *   $123^{16} \equiv 233^2 \equiv 54289 \pmod{3233} \equiv 1378 \pmod{3233}$
    *   $123^{17} = 123^{16} \times 123^1 \equiv 1378 \times 123 \pmod{3233}$
    *   $1378 \times 123 = 169494$
    *   $169494 \pmod{3233} \equiv 855 \pmod{3233}$
*   So, the ciphertext is $c = 855$.

**Decryption:**

*   $c = 855$
*   $m = c^d \pmod{n}$
*   $m = 855^{2753} \pmod{3233}$
*   Using modular exponentiation, we would calculate this value. Let's trust the math for now that it will recover 123.
    *   $855^{2753} \pmod{3233} \equiv 123 \pmod{3233}$

**Important Point to Remember:**

*   **Modular Exponentiation:** Efficient calculation of $(base^{exponent} \pmod{modulus})$ is crucial for performance. The **binary exponentiation** (also known as exponentiation by squaring) algorithm is commonly used.

---

### 4. Security Considerations and Vulnerabilities of RSA

While powerful, RSA is not immune to attacks. Its security hinges on the difficulty of factoring the modulus $n$.

**Key Concepts:**

*   **Factoring Problem:** The core assumption of RSA security is that it is computationally infeasible to find the prime factors $p$ and $q$ of a large composite number $n$.
*   **Key Size:** The security of RSA is directly related to the bit length of the modulus $n$. Larger keys are more secure.
*   **Common Modulus Attack:** If multiple users share the same modulus $n$ but have different public exponents $e$, an attacker can exploit this.
*   **Broadcast Attack:** If a message is encrypted with the same public exponent $e$ but different moduli $n_1, n_2, \dots, n_k$ to $k$ different recipients, and $k \ge e$, an attacker can recover the original message using the Chinese Remainder Theorem.
*   **Wiener's Attack:** If the private exponent $d$ is chosen to be too small relative to $n$, an attacker can recover $d$ by finding a small continued fraction convergents of $e/\phi(n)$.
*   **Chosen-Ciphertext Attack (CCA):** Sophisticated attacks where an attacker can request the decryption of chosen ciphertexts and observe the results. Padding schemes like OAEP (Optimal Asymmetric Encryption Padding) are used to prevent these.
*   **Side-Channel Attacks:** Attacks that exploit physical properties of the cryptographic implementation (e.g., timing, power consumption) rather than mathematical weaknesses.

**Key Size Recommendations:**

*   **Current Standards:** Typically, RSA keys are 2048 bits or 3072 bits long.
*   **Future Considerations:** With advances in computing power (especially quantum computing), key sizes may need to be increased.

**How Attacks Work (Conceptual):**

*   **Factoring:** If an attacker can factor $n$ into $p$ and $q$, they can easily calculate $\phi(n) = (p-1)(q-1)$ and then find the private exponent $d$ using the Extended Euclidean Algorithm. Once they have $d$, they can decrypt any message encrypted with the corresponding public key.
*   **Weak $e$ values:**
    *   If $e$ is too small and the message $m$ is small, encryption might be equivalent to $m^e$, which is easy to compute. For example, if $m^e < n$, then $c = m^e$, and taking the $e$-th root of $c$ recovers $m$.
    *   If $e$ is small and the same message is encrypted to multiple recipients with the same $e$ but different $n_i$, the **Broadcast Attack** can be applied if the number of recipients is at least $e$.

**Mitigation Strategies:**

*   **Large Prime Numbers:** Use sufficiently large primes for $p$ and $q$.
*   **Random Key Generation:** Ensure primes are generated randomly and are not predictable.
*   **Secure $e$ Selection:** Choose $e$ that is not too small, or use padding schemes.
*   **Padding Schemes:** Implement proper padding schemes (e.g., OAEP) to protect against chosen-ciphertext attacks and ensure that encryption does not reveal information about the plaintext structure.
*   **Secure Private Key Storage:** Protect the private key from unauthorized access.

---

### 5. Applications of RSA in Real-World Scenarios

RSA's robustness and versatility have led to its widespread adoption in various security applications.

**Key Applications:**

*   **Secure Socket Layer/Transport Layer Security (SSL/TLS):** Used for establishing secure connections over the internet (e.g., for HTTPS websites). RSA is used for authenticating servers and encrypting the symmetric session key that is then used for the bulk of communication.
*   **Digital Signatures:** RSA can be used to create digital signatures, providing authenticity, integrity, and non-repudiation. The sender encrypts a hash of the message with their private key, and anyone can verify the signature by decrypting it with the sender's public key and comparing the hash.
*   **Secure Email (PGP/GPG):** Used to encrypt and digitally sign emails.
*   **Virtual Private Networks (VPNs):** For establishing secure tunnels for private network communication.
*   **Code Signing:** To verify the authenticity and integrity of software.
*   **Secure Shell (SSH):** For secure remote login and file transfer.

**Example: Digital Signature using RSA**

1.  **Alice wants to send a digitally signed message to Bob.**
2.  **Hashing:** Alice computes a cryptographic hash (e.g., SHA-256) of her message $M$. Let this hash be $h(M)$.
3.  **Signing (Encryption with Private Key):** Alice encrypts the hash $h(M)$ using her private key $(d_A, n_A)$.
    $S = (h(M))^ {d_A} \pmod{n_A}$
4.  **Transmission:** Alice sends the original message $M$ along with the signature $S$ to Bob.
5.  **Verification (Decryption with Public Key):** Bob receives $M$ and $S$.
    *   Bob computes the hash of the received message: $h'(M)$.
    *   Bob decrypts the signature $S$ using Alice's public key $(e_A, n_A)$:
        $h_{decrypted} = S^{e_A} \pmod{n_A}$
    *   Bob compares the decrypted hash $h_{decrypted}$ with the hash he computed $h'(M)$.
6.  **Result:** If $h_{decrypted} = h'(M)$, Bob knows that:
    *   The message was indeed sent by Alice (authenticity), as only she possesses the private key $d_A$ to create such a signature.
    *   The message has not been altered during transmission (integrity), as the hash matches.
    *   Alice cannot deny sending the message (non-repudiation).

---

### Practice Questions and Exercises

**Question 1:**

(a) Explain the core mathematical problem that makes the RSA algorithm secure.
(b) Given $p = 11$ and $q = 13$, calculate the RSA modulus $n$ and $\phi(n)$.
(c) If the public exponent $e = 7$, find the private exponent $d$.
(d) Encrypt the message $m = 5$ using the public key $(e=7, n=143)$.
(e) Decrypt the ciphertext $c = 12$ using the private key $(d=103, n=143)$. (Assume a different key generation for this part).

**Answer 1:**

(a) The core mathematical problem is the **difficulty of factoring large composite numbers**. If an attacker can factor the RSA modulus $n$ into its prime factors $p$ and $q$, they can easily compute $\phi(n)$ and subsequently derive the private key $d$ from the public key $(e, n)$, thus breaking the system.

(b) $p = 11$, $q = 13$
    *   $n = p \times q = 11 \times 13 = 143$.
    *   $\phi(n) = (p-1)(q-1) = (11-1)(13-1) = 10 \times 12 = 120$.

(c) We need to find $d$ such that $ed \equiv 1 \pmod{\phi(n)}$, which is $7d \equiv 1 \pmod{120}$.
    Using the Extended Euclidean Algorithm:
    $120 = 17 \times 7 + 1$
    $1 = 120 - 17 \times 7$
    So, $-17 \times 7 \equiv 1 \pmod{120}$.
    To get a positive $d$, we add 120: $d = -17 + 120 = 103$.
    Thus, the private exponent is $d = 103$.

(d) Public key $(e=7, n=143)$. Message $m=5$.
    $c = m^e \pmod{n}$
    $c = 5^7 \pmod{143}$
    $5^2 = 25$
    $5^4 = 25^2 = 625 \equiv 625 - 4 \times 143 \equiv 625 - 572 \equiv 53 \pmod{143}$
    $5^7 = 5^4 \times 5^2 \times 5^1 \equiv 53 \times 25 \times 5 \pmod{143}$
    $53 \times 25 = 1325 \equiv 1325 - 9 \times 143 \equiv 1325 - 1287 \equiv 38 \pmod{143}$
    $38 \times 5 = 190 \equiv 190 - 1 \times 143 \equiv 47 \pmod{143}$
    So, $c = 47$.

(e) Private key $(d=103, n=143)$. Ciphertext $c=12$.
    $m = c^d \pmod{n}$
    $m = 12^{103} \pmod{143}$
    We need to compute $12^{103} \pmod{143}$.
    Let's use binary exponentiation: $103$ in binary is $1100111_2$.
    $103 = 64 + 32 + 4 + 2 + 1$.
    $12^1 \equiv 12 \pmod{143}$
    $12^2 \equiv 144 \equiv 1 \pmod{143}$
    Since $12^2 \equiv 1 \pmod{143}$, any higher even power will also be $1 \pmod{143}$.
    $12^{103} = 12^{2 \times 51 + 1} = (12^2)^{51} \times 12^1 \equiv 1^{51} \times 12 \equiv 1 \times 12 \equiv 12 \pmod{143}$.
    So, $m = 12$.

---

### Important Points to Remember

*   **Key Size is Crucial:** The security of RSA depends heavily on the bit length of the modulus $n$. Larger keys mean harder factorization.
*   **Prime Generation:** Primes $p$ and $q$ must be chosen randomly and be of significant size.
*   **Modular Exponentiation:** Use efficient algorithms like binary exponentiation for encryption and decryption.
*   **Padding is Essential:** For practical applications, always use secure padding schemes (like OAEP) to prevent various attacks and ensure message confidentiality and integrity.
*   **Private Key Secrecy:** The private key must be kept absolutely secret.
*   **Factoring Difficulty:** The computational difficulty of factoring large integers is the bedrock of RSA's security. If a polynomial-time factoring algorithm is discovered, RSA will be broken.
*   **Quantum Computing Threat:** Quantum computers, if built at scale, could break RSA using Shor's algorithm, which can efficiently factor numbers. This is a significant future concern.

---
