---
title: "Introduction to cryptology : Stream and block ciphers- secret and public key cryptography."
subject: "CRYPTOGRAPHY"
module: "Module 1: Introduction to cryptology : Stream and block ciphers"
branch: "Electronics and Communication Engineering"
semester: 7
topicId: "68a5c461b09ce205780ff2af"
status: "completed"
scrapedAt: "2026-05-23T18:05:32.205Z"
---
# Cryptography: Module 1 - Introduction to Cryptology: Stream and Block Ciphers

## 1. Introduction to Cryptology

Cryptography is the science and art of secret writing. It is a fundamental tool for ensuring the confidentiality, integrity, authenticity, and non-repudiation of information.

### 1.1. Historical Context and Evolution

*   **Ancient Cryptography:** Early forms of cryptography relied on simple substitution and transposition techniques.
    *   **Caesar Cipher:** A classic example of a substitution cipher where each letter in the plaintext is shifted a fixed number of positions down or up the alphabet.
        *   *Example:* If the shift is 3, 'A' becomes 'D', 'B' becomes 'E', etc.
        *   *Reference:* Koblitz (2/e), Chapter 1.
    *   **Scytale:** A transposition cipher used by the Spartans, involving winding a strip of parchment around a cylinder (skytale) of a specific diameter. The message was written lengthwise, and only someone with a skytale of the same diameter could read it.
*   **Modern Cryptography:** Driven by the need for secure communication in the digital age, modern cryptography employs complex mathematical algorithms.

### 1.2. Key Concepts and Terminology

*   **Plaintext (P):** The original, readable message.
*   **Ciphertext (C):** The scrambled, unreadable message.
*   **Encryption:** The process of converting plaintext into ciphertext.
*   **Decryption:** The process of converting ciphertext back into plaintext.
*   **Key (K):** A secret piece of information used in the encryption and decryption processes. The security of most cryptographic systems relies on the secrecy of the key.
*   **Algorithm (Cipher):** The mathematical function or procedure used for encryption and decryption.
*   **Cryptosystem:** A combination of an algorithm and the keys used to perform encryption and decryption.
*   **Cryptanalysis:** The art and science of breaking cryptographic systems to recover the plaintext without knowing the key.

### 1.3. Goals of Cryptography

*   **Confidentiality:** Ensuring that only authorized parties can read the information.
*   **Integrity:** Ensuring that the information has not been altered or tampered with during transmission or storage.
*   **Authentication:** Verifying the identity of the sender or receiver.
*   **Non-repudiation:** Preventing a sender from denying that they sent a message.

## 2. Symmetric Key Cryptography (Secret Key Cryptography)

In symmetric key cryptography, the **same secret key** is used for both encryption and decryption.

### 2.1. Working Principle

*   **Key Distribution:** The primary challenge in symmetric key cryptography is the secure distribution of the secret key between the sender and receiver. If the key is compromised, the entire system is broken.
*   **Process:**
    *   **Sender:** Plaintext (P) + Secret Key (K) -> Encryption Algorithm -> Ciphertext (C)
    *   **Receiver:** Ciphertext (C) + Secret Key (K) -> Decryption Algorithm -> Plaintext (P)

### 2.2. Types of Symmetric Ciphers

Symmetric ciphers are broadly categorized into two types:

#### 2.2.1. Stream Ciphers

*   **Description:** Stream ciphers encrypt plaintext one bit or one byte at a time. They generate a pseudo-random keystream using a secret key, and this keystream is XORed with the plaintext to produce ciphertext.
    *   *Formula:* C = P ⊕ K' (where K' is the keystream)
    *   *Decryption:* P = C ⊕ K'
*   **Keystream Generation:** Typically done using:
    *   **Linear Feedback Shift Registers (LFSRs):** A sequence generator based on linear feedback logic. (Reference: Stinson (3rd Ed.), Chapter 4)
    *   **Non-linear generators:** More complex algorithms for improved security.
*   **Advantages:**
    *   Fast encryption/decryption.
    *   Suitable for real-time communication and devices with limited resources.
    *   No need for block padding.
*   **Disadvantages:**
    *   Vulnerable to bit-flipping attacks if not properly implemented with authentication.
    *   Error propagation: A single bit error in the ciphertext can affect multiple bits in the decrypted plaintext.
*   **Examples:**
    *   **RC4:** A widely used but now considered insecure stream cipher.
    *   **AES-CTR (Counter Mode):** While AES is a block cipher, it can be used in counter mode to function as a stream cipher.
*   **Important Point:** The keystream must never be reused with the same key. Reusing the keystream is a critical security vulnerability.

#### 2.2.2. Block Ciphers

*   **Description:** Block ciphers encrypt fixed-size blocks of plaintext at a time. A block cipher operates on a block of $n$ bits, transforming it into an $n$-bit ciphertext block using a secret key.
*   **Block Size:** The size of the data block processed by the cipher (e.g., 64 bits, 128 bits).
*   **Key Size:** The length of the secret key.
*   **Structure:**
    *   **Substitution-Permutation (SP) Networks:** Combine substitution (replacing bits with other bits) and permutation (rearranging bits) operations. (Reference: Koblitz (2/e), Chapter 3)
    *   **Feistel Ciphers:** A common structure that splits the block into two halves and uses a round function that operates on one half, dependent on the key. This allows the same function to be used for both encryption and decryption with a slight modification in key scheduling. (Reference: Menezes et al. (5/e), Chapter 7)
*   **Modes of Operation:** Since block ciphers operate on fixed-size blocks, various modes of operation are used to handle messages longer than a single block and to enhance security.
    *   **Electronic Codebook (ECB) Mode:** Each block of plaintext is encrypted independently.
        *   *Security:* Insecure for most applications as patterns in the plaintext can be revealed in the ciphertext.
        *   *Example:* If "ATTACK" is encrypted, and "ATT" appears twice, the corresponding ciphertext blocks will also be identical.
    *   **Cipher Block Chaining (CBC) Mode:** Each plaintext block is XORed with the previous ciphertext block before encryption. An Initialization Vector (IV) is used for the first block.
        *   *Formula:* $C_i = E_K(P_i \oplus C_{i-1})$ (where $C_0$ is the IV)
        *   *Decryption:* $P_i = D_K(C_i) \oplus C_{i-1}$
        *   *Security:* More secure than ECB, as identical plaintext blocks will produce different ciphertext blocks due to the chaining.
    *   **Cipher Feedback (CFB) Mode:** Turns a block cipher into a self-synchronizing stream cipher. The previous ciphertext block is encrypted, and the output is XORed with the plaintext to produce the current ciphertext.
    *   **Output Feedback (OFB) Mode:** Turns a block cipher into a synchronous stream cipher. A keystream is generated by repeatedly encrypting an IV and chaining the output. This keystream is then XORed with the plaintext.
    *   **Counter (CTR) Mode:** A block cipher is used to generate a keystream by encrypting a sequence of distinct values (counters). This keystream is then XORed with the plaintext.
        *   *Formula:* $C_i = P_i \oplus E_K(\text{counter}_i)$
        *   *Security:* Efficient, allows parallel processing, and can be used as a stream cipher.
*   **Examples:**
    *   **DES (Data Encryption Standard):** A widely used block cipher, but its 56-bit key is now considered too small.
    *   **3DES (Triple DES):** An enhancement of DES that applies the DES algorithm three times with different keys, increasing security.
    *   **AES (Advanced Encryption Standard):** The current standard for symmetric encryption, with key sizes of 128, 192, or 256 bits. (Reference: Stinson (3rd Ed.), Chapter 5)
*   **Important Point:** Choosing the appropriate mode of operation is crucial for the security of block cipher applications. ECB is generally not recommended for use.

### 2.3. Symmetric Key Cryptography - Course Outcomes Alignment

*   **CO1 (Number Theory & Abstract Algebra):** The underlying operations in symmetric ciphers (like modular arithmetic in some historical ciphers or group operations in advanced block cipher designs) leverage principles from these fields.
*   **CO2 (Design & Analyze Symmetric Ciphers):** Understanding the structures of stream and block ciphers, their modes of operation, and the principles behind their security directly addresses this outcome.

## 3. Asymmetric Key Cryptography (Public Key Cryptography)

In asymmetric key cryptography, **two different keys** are used: a **public key** for encryption and a **private key** for decryption.

### 3.1. Working Principle

*   **Key Pair:** Each user generates a pair of keys:
    *   **Public Key:** Can be freely shared with anyone. Used for encrypting messages intended for the owner of the public key.
    *   **Private Key:** Must be kept secret by its owner. Used for decrypting messages that were encrypted with the corresponding public key.
*   **Mathematical Relationship:** The public and private keys are mathematically related, but it is computationally infeasible to derive the private key from the public key.
*   **Process:**
    *   **Sender (Alice):** Wants to send a secret message to Bob.
        1.  Alice obtains Bob's public key.
        2.  Alice encrypts her plaintext (P) using Bob's public key ($K_{pub, Bob}$) to get ciphertext (C).
            *   $C = E_{K_{pub, Bob}}(P)$
        3.  Alice sends C to Bob.
    *   **Receiver (Bob):**
        1.  Bob receives C.
        2.  Bob decrypts C using his private key ($K_{priv, Bob}$).
            *   $P = D_{K_{priv, Bob}}(C)$
*   **Key Distribution:** The problem of secure key distribution is greatly simplified, as public keys can be openly exchanged. However, ensuring the authenticity of the public key (i.e., that it truly belongs to the intended recipient) is crucial and is handled by Public Key Infrastructures (PKIs) and digital certificates.

### 3.2. Goals and Applications

*   **Confidentiality:** Similar to symmetric cryptography, but achieved using public keys.
*   **Digital Signatures:** Asymmetric cryptography can be used for authentication and non-repudiation.
    *   **Process:**
        1.  Alice wants to sign a message.
        2.  Alice creates a hash of the message (a fixed-size digest).
        3.  Alice encrypts the hash with her **private key** ($K_{priv, Alice}$) to create a digital signature.
            *   $Signature = E_{K_{priv, Alice}}(Hash(P))$
        4.  Alice sends the message (P) and the signature to Bob.
    *   **Verification:**
        1.  Bob receives the message (P) and the signature.
        2.  Bob calculates the hash of the received message: $Hash_{received}(P)$.
        3.  Bob decrypts the received signature using Alice's **public key** ($K_{pub, Alice}$).
            *   $Hash_{decrypted} = D_{K_{pub, Alice}}(Signature)$
        4.  If $Hash_{received}(P) = Hash_{decrypted}$, then Bob knows that:
            *   The message originated from Alice (authentication) because only Alice has the private key to create that signature.
            *   The message has not been altered (integrity) because the hashes match.
            *   Alice cannot deny sending the message (non-repudiation).
*   **Key Exchange:** Asymmetric cryptography is used to securely exchange symmetric keys for use in faster symmetric encryption. (e.g., Diffie-Hellman key exchange).

### 3.3. Key Asymmetric Cryptographic Algorithms

*   **RSA (Rivest–Shamir–Adleman):** Based on the difficulty of factoring large prime numbers. (Reference: Koblitz (2/e), Chapter 5)
    *   **Key Generation:**
        1.  Choose two large prime numbers, $p$ and $q$.
        2.  Calculate $n = p \times q$.
        3.  Calculate $\phi(n) = (p-1)(q-1)$.
        4.  Choose an integer $e$ such that $1 < e < \phi(n)$ and $\gcd(e, \phi(n)) = 1$. ($e$ is the public exponent).
        5.  Calculate $d$ such that $d \times e \equiv 1 \pmod{\phi(n)}$. ($d$ is the private exponent).
        6.  Public Key: $(n, e)$
        7.  Private Key: $(n, d)$
    *   **Encryption:** $C = P^e \pmod{n}$
    *   **Decryption:** $P = C^d \pmod{n}$
    *   **Security:** Relies on the difficulty of factoring $n$.
*   **Diffie-Hellman Key Exchange:** A method for two parties to establish a shared secret key over an insecure channel. It is not an encryption algorithm itself but a key agreement protocol. (Reference: Stinson (3rd Ed.), Chapter 8)
    *   **Process:**
        1.  Agree on a large prime $p$ and a generator $g$ of a cyclic group modulo $p$.
        2.  Alice chooses a secret integer $a$, computes $A = g^a \pmod{p}$, and sends $A$ to Bob.
        3.  Bob chooses a secret integer $b$, computes $B = g^b \pmod{p}$, and sends $B$ to Alice.
        4.  Alice computes $S = B^a \pmod{p} = (g^b)^a \pmod{p} = g^{ba} \pmod{p}$.
        5.  Bob computes $S = A^b \pmod{p} = (g^a)^b \pmod{p} = g^{ab} \pmod{p}$.
        6.  Both Alice and Bob now share the secret $S$.
    *   **Security:** Relies on the difficulty of the discrete logarithm problem.
*   **Elliptic Curve Cryptography (ECC):** Based on the algebraic structure of elliptic curves over finite fields. Offers similar security to RSA with shorter key lengths. (Reference: Guide to Elliptic Curve Cryptography)
    *   **Key Generation:** Involves selecting an elliptic curve, a base point $G$ on the curve, and generating a private key $d$ (a random integer). The public key is then computed as $Q = dG$ (point multiplication).
    *   **Security:** Relies on the Elliptic Curve Discrete Logarithm Problem (ECDLP).

### 3.4. Asymmetric Key Cryptography - Course Outcomes Alignment

*   **CO1 (Number Theory & Abstract Algebra):** RSA relies heavily on modular arithmetic and number theory (Euler's totient function, prime factorization). Diffie-Hellman and ECC utilize group theory and abstract algebra concepts.
*   **CO3 (Design & Analyze Asymmetric Ciphers):** Understanding the principles, algorithms (RSA, Diffie-Hellman), and applications (digital signatures) of asymmetric cryptography directly addresses this outcome.
*   **CO4 (Cryptanalysis):** Analyzing the security of these algorithms involves understanding the computational hardness of problems like factoring and discrete logarithms.

## 4. Practice Questions

### Section 1: Introduction to Cryptology

1.  Define the following terms: Plaintext, Ciphertext, Encryption, Decryption, Key.
2.  What are the four main goals of cryptography? Briefly explain each.
3.  Give an example of a historical cipher and explain its basic working principle.

### Section 2: Symmetric Key Cryptography

1.  What is the primary challenge in symmetric key cryptography?
2.  Differentiate between stream ciphers and block ciphers.
3.  Explain the working of a block cipher in **CBC mode**. Write down the encryption and decryption formulas.
4.  Why is ECB mode generally considered insecure for most applications? Provide an example.
5.  What is the significance of AES in the context of symmetric encryption?
6.  **Exercise:** Consider a stream cipher that XORs a keystream $K' = 10110011$ with a plaintext $P = 11001010$.
    *   Calculate the ciphertext $C$.
    *   If the receiver gets the ciphertext $C$ and XORs it with the same keystream $K'$, what will be the resulting plaintext?

### Section 3: Asymmetric Key Cryptography

1.  What are the two types of keys used in asymmetric cryptography? For what purpose is each key used?
2.  Describe the process of generating a digital signature using asymmetric cryptography.
3.  What security problem does the Diffie-Hellman key exchange protocol solve?
4.  **Exercise (RSA Concepts):**
    *   If Alice has the public key $(n=33, e=3)$ and wants to encrypt the message $P=5$. Calculate the ciphertext $C$.
    *   Assume Alice's private key is $(n=33, d=7)$. Decrypt the ciphertext $C=5$ to recover the original plaintext $P$. (Note: This is a simplified example with small numbers for illustration.)
    *   What mathematical problem is the security of RSA based on?

---

## Answers to Practice Questions

### Section 1: Introduction to Cryptology

1.  *   **Plaintext:** The original, readable message.
    *   **Ciphertext:** The scrambled, unreadable message.
    *   **Encryption:** The process of converting plaintext into ciphertext.
    *   **Decryption:** The process of converting ciphertext back into plaintext.
    *   **Key:** A secret piece of information used in the encryption and decryption processes.
2.  The four main goals are:
    *   **Confidentiality:** Only authorized parties can read the information.
    *   **Integrity:** The information has not been altered or tampered with.
    *   **Authentication:** Verifying the identity of the sender or receiver.
    *   **Non-repudiation:** The sender cannot deny having sent the message.
3.  **Caesar Cipher:** A substitution cipher where each letter is shifted a fixed number of positions down or up the alphabet. For example, with a shift of 3, 'A' becomes 'D', 'B' becomes 'E', etc.

### Section 2: Symmetric Key Cryptography

1.  The primary challenge is the **secure distribution of the secret key** to both parties.
2.  *   **Stream Ciphers:** Encrypt data bit by bit or byte by byte, typically using a keystream generated from a secret key.
    *   **Block Ciphers:** Encrypt data in fixed-size blocks.
3.  **CBC Mode:**
    *   **Encryption:** $C_i = E_K(P_i \oplus C_{i-1})$, where $C_0$ is the Initialization Vector (IV).
    *   **Decryption:** $P_i = D_K(C_i) \oplus C_{i-1}$.
4.  ECB mode is insecure because identical plaintext blocks are encrypted into identical ciphertext blocks, revealing patterns in the data. For example, encrypting an image with large areas of the same color would result in identical ciphertext blocks for those areas, making the image's structure discernible.
5.  AES (Advanced Encryption Standard) is the current standard for symmetric encryption, offering strong security with flexible key sizes (128, 192, 256 bits) and a robust block size (128 bits).
6.  **Exercise:**
    *   $P = 11001010$
    *   $K' = 10110011$
    *   $C = P \oplus K'$
        ```
          11001010 (P)
        ^ 10110011 (K')
        ----------
          01111001 (C)
        ```
    *   $C = 01111001$
    *   To recover the plaintext: $P = C \oplus K'$
        ```
          01111001 (C)
        ^ 10110011 (K')
        ----------
          11001010 (P)
        ```
    *   The resulting plaintext is $11001010$.

### Section 3: Asymmetric Key Cryptography

1.  *   **Public Key:** Used for encryption and verifying digital signatures. It can be shared openly.
    *   **Private Key:** Used for decryption and creating digital signatures. It must be kept secret.
2.  To create a digital signature:
    1.  Alice hashes the message.
    2.  Alice encrypts the hash using her **private key**.
    3.  The encrypted hash is the digital signature.
3.  The Diffie-Hellman key exchange protocol solves the problem of **securely establishing a shared secret key** between two parties over an insecure communication channel, without prior shared secrets.
4.  **Exercise (RSA Concepts):**
    *   Public Key: $(n=33, e=3)$, Plaintext $P=5$.
    *   Encryption: $C = P^e \pmod{n}$
        *   $C = 5^3 \pmod{33} = 125 \pmod{33}$
        *   $125 = 3 \times 33 + 26$
        *   $C = 26$
    *   Private Key: $(n=33, d=7)$, Ciphertext $C=26$.
    *   Decryption: $P = C^d \pmod{n}$
        *   $P = 26^7 \pmod{33}$
        *   $26 \equiv -7 \pmod{33}$
        *   $P \equiv (-7)^7 \pmod{33}$
        *   $(-7)^2 = 49 \equiv 16 \pmod{33}$
        *   $(-7)^4 \equiv 16^2 = 256 \pmod{33}$
        *   $256 = 7 \times 33 + 25$, so $256 \equiv 25 \equiv -8 \pmod{33}$
        *   $(-7)^7 = (-7)^4 \times (-7)^2 \times (-7)^1 \equiv (-8) \times 16 \times (-7) \pmod{33}$
        *   $\equiv (-128) \times (-7) \pmod{33}$
        *   $-128 = -4 \times 33 + 4$, so $-128 \equiv 4 \pmod{33}$
        *   $P \equiv 4 \times (-7) \pmod{33}$
        *   $P \equiv -28 \pmod{33}$
        *   $P \equiv 5 \pmod{33}$
        *   The recovered plaintext is $P=5$.
    *   The security of RSA is based on the difficulty of **factoring large composite numbers** (specifically, factoring $n$ into its prime factors $p$ and $q$).

---

## 5. Important Points to Remember

*   **Symmetric vs. Asymmetric:** The core difference lies in the key usage: same key for both operations (symmetric) versus different keys (asymmetric).
*   **Key Distribution:** The Achilles' heel of symmetric cryptography; solved by asymmetric methods.
*   **Stream Ciphers:** Bit-by-bit operation, fast, keystream reuse is a critical flaw.
*   **Block Ciphers:** Block-by-block operation, requires modes for longer messages, AES is the current standard.
*   **Asymmetric Cryptography Applications:** Confidentiality, Digital Signatures (Authentication, Integrity, Non-repudiation), Key Exchange.
*   **RSA Security:** Relies on the difficulty of integer factorization.
*   **Diffie-Hellman Security:** Relies on the difficulty of the discrete logarithm problem.
*   **Mathematical Foundations:** Cryptography is deeply rooted in number theory and abstract algebra. Understanding these is key to understanding cryptographic principles and their security.

---
This concludes Module 1's study notes. Remember to consult the provided textbooks for more in-depth explanations and formal proofs.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
