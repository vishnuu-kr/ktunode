---
title: "Asymmetric Key Ciphers- RSA, ECC"
subject: "FOUNDATIONS OF CRYPTOGRAPHY"
module: "Module 4: Symmetric key Ciphers "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8bf20"
status: "completed"
scrapedAt: "2026-05-20T16:53:44.774Z"
---
# Foundations of Cryptography: Module 4 - Symmetric Key Ciphers

## Topic: Asymmetric Key Ciphers - RSA, ECC

### Introduction to Asymmetric Key Cryptography

Asymmetric key cryptography, also known as public-key cryptography, revolutionizes secure communication by employing a pair of keys for each participant: a **public key** and a **private key**. This stands in contrast to symmetric key cryptography, which uses a single shared secret key.

**Key Concepts:**

*   **Public Key:** This key is freely distributable and can be shared with anyone. It is used for **encryption** and **signature verification**.
*   **Private Key:** This key is kept secret by its owner. It is used for **decryption** and **signature generation**.
*   **Key Pair:** The public and private keys are mathematically linked. What is encrypted with one key can only be decrypted with the other.

**How it Works (General Principles):**

1.  **Encryption:** Sender encrypts a message using the recipient's public key.
2.  **Decryption:** Recipient decrypts the message using their corresponding private key.
3.  **Digital Signatures:** Sender "signs" a message by encrypting a hash of the message with their private key. Anyone can verify the signature by decrypting it with the sender's public key.

**Advantages of Asymmetric Key Cryptography:**

*   **Key Distribution:** Eliminates the need for secure out-of-band key exchange for initial communication.
*   **Digital Signatures:** Provides authentication, integrity, and non-repudiation.
*   **Scalability:** More efficient for key management in large networks.

**Disadvantages of Asymmetric Key Cryptography:**

*   **Computational Cost:** Generally much slower than symmetric key algorithms.
*   **Key Size:** Requires larger key sizes for equivalent security levels.

---

## RSA (Rivest–Shamir–Adleman) Algorithm

RSA is one of the first and most widely used asymmetric encryption algorithms. Its security relies on the computational difficulty of factoring large integers.

### Key Generation

1.  **Choose two distinct large prime numbers, `p` and `q`.**
    *   *Example:* Let `p = 61` and `q = 53`.
2.  **Compute `n = p * q`.** This is the **modulus**.
    *   *Example:* `n = 61 * 53 = 3233`.
3.  **Compute Euler's totient function, `φ(n) = (p-1)(q-1)`.**
    *   *Example:* `φ(3233) = (61-1)(53-1) = 60 * 52 = 3120`.
4.  **Choose an integer `e` such that `1 < e < φ(n)` and `gcd(e, φ(n)) = 1`.** `e` is the **public exponent**. Common choices for `e` are 3, 17, or 65537 for efficiency.
    *   *Example:* Let `e = 17`. We check `gcd(17, 3120) = 1`.
5.  **Compute `d` such that `d * e ≡ 1 (mod φ(n))`.** `d` is the **private exponent**. This is the modular multiplicative inverse of `e` modulo `φ(n)`.
    *   *Example:* We need to find `d` such that `17 * d ≡ 1 (mod 3120)`. Using the Extended Euclidean Algorithm, we find `d = 2753`.

**Public Key:** `(n, e)`
**Private Key:** `(n, d)`

### Encryption

To encrypt a message `M` (represented as an integer `0 <= M < n`):

*   **Ciphertext `C = M^e mod n`**

### Decryption

To decrypt a ciphertext `C`:

*   **Plaintext `M = C^d mod n`**

### Digital Signatures

1.  **Signing:** To sign a message `M`:
    *   Compute the message digest (hash) `H = hash(M)`.
    *   Create the signature `S = H^d mod n`.
2.  **Verification:** To verify a signature `S` for a message `M`:
    *   Compute the message digest `H' = hash(M)`.
    *   Compute `H'' = S^e mod n`.
    *   If `H' == H''`, the signature is valid.

### Example Walkthrough

Let's use the keys generated above: `p = 61`, `q = 53`, `n = 3233`, `φ(n) = 3120`, `e = 17`, `d = 2753`.
Public Key: `(3233, 17)`
Private Key: `(3233, 2753)`

**Encryption:**
Suppose the message `M = 123`.
`C = 123^17 mod 3233`
Calculating `123^17 mod 3233` (using modular exponentiation):
`C = 855`

**Decryption:**
`M = 855^2753 mod 3233`
Calculating `855^2753 mod 3233` (using modular exponentiation):
`M = 123`

**Digital Signature:**
Suppose we want to sign the message `M = "Hello"`.
Let `hash("Hello")` be `H = 100` (for simplicity, in practice a cryptographically secure hash is used).

**Signing:**
`S = 100^2753 mod 3233`
`S = 1372` (the signature)

**Verification:**
We have the message `M = "Hello"`, its hash `H' = 100`, and the signature `S = 1372`.
`H'' = 1372^17 mod 3233`
`H'' = 100`

Since `H' == H''` (100 == 100), the signature is valid.

### RSA Security Considerations

*   **Key Size:** The security of RSA depends on the size of `n`. Larger `n` makes factorization harder. Current recommendations are for key sizes of 2048 bits or more.
*   **Prime Selection:** The prime numbers `p` and `q` must be large and truly random.
*   **Padding Schemes:** Plain RSA encryption is vulnerable to various attacks (e.g., chosen-ciphertext attacks). **Padding schemes** like PKCS#1 v1.5 or OAEP are crucial to apply before encryption.

---

## ECC (Elliptic Curve Cryptography)

ECC offers comparable security to RSA but with much smaller key sizes, making it more efficient for resource-constrained environments (e.g., mobile devices, embedded systems). Its security is based on the **Elliptic Curve Discrete Logarithm Problem (ECDLP)**.

### Key Concepts

*   **Elliptic Curve:** A set of points `(x, y)` satisfying an equation of the form `y^2 = x^3 + ax + b` over a finite field, along with a point at infinity.
*   **Finite Field:** A set of elements with addition, subtraction, multiplication, and division operations defined, where the results of these operations stay within the set.
*   **Point Addition and Scalar Multiplication:** These are the fundamental operations used in ECC. Point addition defines how to "add" two points on the curve to get a third point. Scalar multiplication is repeated point addition (e.g., `k * P` means adding point `P` to itself `k` times).
*   **ECDLP:** Given points `P` and `Q` on an elliptic curve such that `Q = k * P` for some integer `k`, it is computationally infeasible to find `k`. This is the basis for ECC's security.

### Key Generation

1.  **Define an elliptic curve `E` over a finite field `F_q`.** This involves choosing specific parameters for the curve equation and the finite field.
    *   *Example Parameters (often standardized in curves like secp256k1):*
        *   Curve equation: `y^2 = x^3 + ax + b`
        *   Finite field: `F_q` (e.g., a prime field `F_p` or a binary field `F_{2^m}`)
        *   A base point `G` (a generator point) on the curve.
2.  **Choose a random integer `d` (your private key) such that `1 <= d < n`, where `n` is the order of the group generated by `G`.**
    *   *Example:* Let `d = 15`.
3.  **Compute your public key `Q` by performing scalar multiplication: `Q = d * G`.** `Q` is a point on the elliptic curve.
    *   *Example:* If `G` is a specific point and `d=15`, `Q` will be another point on the curve calculated as `15 * G`.

**Public Key:** `(E, G, Q)` (or just `Q` if `E` and `G` are implicitly known and standardized)
**Private Key:** `d`

### Encryption (e.g., ECIES - Elliptic Curve Integrated Encryption Scheme)

ECC encryption is more complex than RSA's direct modular exponentiation. ECIES is a common method.

1.  **Sender wants to encrypt message `M` for recipient `R` (who has public key `Q_R`).**
2.  **Generate a temporary random secret integer `k`.**
3.  **Compute a shared secret point `S = k * Q_R`.**
4.  **Derive an encryption key `K_enc` and an integrity key `K_mac` from `S` using a Key Derivation Function (KDF).**
5.  **Encrypt `M` using `K_enc` (e.g., with AES): `C_M = Encrypt(K_enc, M)`.**
6.  **Compute a Message Authentication Code (MAC) of `M` using `K_mac`: `T = MAC(K_mac, M)`.**
7.  **The ciphertext is `C = S_x || C_M || T`, where `S_x` is the x-coordinate of point `S`.**

### Decryption (ECIES)

1.  **Recipient `R` receives ciphertext `C = S_x || C_M || T`.**
2.  **Recipient knows their private key `d_R`.**
3.  **Compute the shared secret point `S = d_R * (S_x, S_y)` using the x-coordinate `S_x` from the ciphertext.**
4.  **Derive `K_enc` and `K_mac` from `S` using the same KDF.**
5.  **Decrypt `C_M` to get `M' = Decrypt(K_enc, C_M)`.**
6.  **Verify the MAC using `K_mac` and `M'`: `T' = MAC(K_mac, M')`. If `T == T'`, the message is authentic and not tampered with.**
7.  **The decrypted message is `M'`.**

### Digital Signatures (ECDSA - Elliptic Curve Digital Signature Algorithm)

1.  **Signing:** To sign a message `M`:
    *   Compute the message digest `H = hash(M)`.
    *   Choose a random secret integer `k` such that `1 <= k < n`.
    *   Compute point `P1 = k * G = (x1, y1)`.
    *   Compute `r = x1 mod n`. If `r == 0`, choose a new `k`.
    *   Compute `s = (H + r * d) * k^-1 mod n`, where `k^-1` is the modular multiplicative inverse of `k` modulo `n`.
    *   The signature is `(r, s)`.

2.  **Verification:** To verify a signature `(r, s)` for a message `M`:
    *   Compute the message digest `H = hash(M)`.
    *   Check if `r` and `s` are valid (e.g., `1 <= r < n` and `1 <= s < n`).
    *   Compute `w = s^-1 mod n`.
    *   Compute `P_check = H * w * G + r * w * Q`. (This is where the math gets more involved using point addition and scalar multiplication properties).
    *   If `P_check` is the point at infinity or `r` is not equal to the x-coordinate of `P_check` modulo `n`, the signature is invalid.
    *   If `r` equals the x-coordinate of `P_check` modulo `n`, the signature is valid.

### Example Walkthrough (Conceptual)

Let's consider a simplified conceptual example for key generation:

*   **Curve:** `y^2 = x^3 + 2x + 3` over `F_17`.
*   **Base Point `G`:** `(5, 1)` (assuming this point lies on the curve and has a specific order `n`).
*   **Private Key `d`:** Let `d = 4`.
*   **Public Key `Q`:** `Q = 4 * G`.
    *   `2 * G = (5, 1) + (5, 1) = (8, 10)` (using EC point addition rules).
    *   `4 * G = 2 * (8, 10) = (8, 10) + (8, 10) = (13, 15)`.
    *   So, the Public Key `Q` is `(13, 15)`.

### ECC Security Considerations

*   **Key Size:** ECC offers 128-bit security with a 256-bit key, whereas RSA requires a 3072-bit key for similar security. This is a significant advantage.
*   **Curve Selection:** The choice of curve parameters is critical. Standardized curves (like NIST curves or Curve25519) are recommended.
*   **Implementation:** Robust implementation is essential to prevent side-channel attacks.
*   **ECDLP Hardness:** The difficulty of the ECDLP is the cornerstone of ECC's security.

---

## Comparison: RSA vs. ECC

| Feature          | RSA                                         | ECC                                               |
| :--------------- | :------------------------------------------ | :------------------------------------------------ |
| **Security Basis** | Integer Factorization Problem               | Elliptic Curve Discrete Logarithm Problem (ECDLP) |
| **Key Size**     | Larger (e.g., 2048 bits for 112-bit security) | Smaller (e.g., 256 bits for 128-bit security)     |
| **Performance**  | Slower (especially encryption/decryption)   | Faster (especially encryption/decryption)         |
| **Computational Cost** | High                                        | Lower                                             |
| **Bandwidth**    | Higher                                      | Lower                                             |
| **Use Cases**    | TLS/SSL, Secure Email (PGP), Digital Signatures | TLS/SSL, Mobile Security, IoT, Cryptocurrencies |
| **Complexity**   | Conceptually simpler math                   | More complex math (elliptic curve arithmetic)     |
| **Vulnerabilities** | Padding attacks (if not used)               | Implementation attacks, side-channel attacks      |

---

## Learning Outcomes Recap

*   **Understanding of Asymmetric Key Cryptography:** Covered the core concepts of public/private keys, encryption, and digital signatures.
*   **RSA Algorithm:** Explained key generation, encryption, decryption, and digital signatures with examples. Discussed security considerations like key size and padding.
*   **ECC Algorithm:** Introduced elliptic curves, finite fields, ECDLP. Explained key generation, encryption (ECIES), and digital signatures (ECDSA) conceptually. Highlighted ECC's efficiency benefits.
*   **Comparison:** Provided a clear comparison between RSA and ECC, highlighting their strengths and weaknesses.

---

## Practice Questions

1.  **RSA Key Generation:**
    *   Choose two small prime numbers, `p = 7` and `q = 11`.
    *   Calculate `n` and `φ(n)`.
    *   Choose `e = 3`. Verify that `gcd(e, φ(n)) = 1`.
    *   Calculate the private exponent `d`.
    *   What are the public and private keys?

2.  **RSA Encryption/Decryption:**
    *   Using the keys generated in Question 1, encrypt the message `M = 5`.
    *   Decrypt the resulting ciphertext.

3.  **ECC Concept:**
    *   What is the primary mathematical problem that ECC's security relies upon?
    *   What is a key advantage of ECC compared to RSA in terms of key size?

4.  **RSA vs. ECC:**
    *   Briefly explain one scenario where ECC might be preferred over RSA, and justify your choice.

---

## Practice Question Answers

1.  **RSA Key Generation:**
    *   `p = 7`, `q = 11`
    *   `n = p * q = 7 * 11 = 77`
    *   `φ(n) = (p-1)(q-1) = (7-1)(11-1) = 6 * 10 = 60`
    *   `e = 3`. `gcd(3, 60) = 3`. This is not 1, so `e = 3` cannot be used with these primes.
    *   *Correction:* Let's choose a valid `e`. Let `e = 7`. `gcd(7, 60) = 1`.
    *   Calculate `d` such that `7 * d ≡ 1 (mod 60)`. Using Extended Euclidean Algorithm:
        *   `60 = 8 * 7 + 4`
        *   `7 = 1 * 4 + 3`
        *   `4 = 1 * 3 + 1`
        *   `1 = 4 - 1 * 3`
        *   `1 = 4 - 1 * (7 - 1 * 4) = 4 - 7 + 4 = 2 * 4 - 7`
        *   `1 = 2 * (60 - 8 * 7) - 7 = 2 * 60 - 16 * 7 - 7 = 2 * 60 - 17 * 7`
        *   So, `-17 * 7 ≡ 1 (mod 60)`.
        *   `-17 mod 60 = 43`.
        *   `d = 43`.
    *   **Public Key:** `(n=77, e=7)`
    *   **Private Key:** `(n=77, d=43)`

2.  **RSA Encryption/Decryption:**
    *   Message `M = 5`. Public key `(77, 7)`.
    *   **Encryption:** `C = M^e mod n = 5^7 mod 77`
        *   `5^2 = 25 mod 77`
        *   `5^4 = 25^2 = 625 = 8 * 77 + 9 = 9 mod 77`
        *   `5^7 = 5^4 * 5^2 * 5^1 = 9 * 25 * 5 mod 77`
        *   `9 * 25 = 225 = 2 * 77 + 71 = 71 mod 77`
        *   `71 * 5 = 355 = 4 * 77 + 47 = 47 mod 77`
        *   `C = 47`
    *   **Decryption:** Ciphertext `C = 47`. Private key `(77, 43)`.
        *   `M = C^d mod n = 47^43 mod 77`
        *   This is a larger calculation. Using modular exponentiation:
        *   `47^43 mod 77 = 5`
        *   The decrypted message is `5`, which matches the original message.

3.  **ECC Concept:**
    *   The primary mathematical problem is the **Elliptic Curve Discrete Logarithm Problem (ECDLP)**.
    *   A key advantage of ECC is that it offers **comparable security to RSA with much smaller key sizes**.

4.  **RSA vs. ECC:**
    *   **Scenario:** Mobile devices or IoT devices with limited processing power and battery life.
    *   **Justification:** ECC is preferred because its smaller key sizes lead to faster computations, lower energy consumption, and reduced bandwidth requirements, making it ideal for resource-constrained environments. RSA's larger keys and more computationally intensive operations would be less suitable.

---

## Important Points to Remember

*   **Asymmetric cryptography uses a pair of keys:** public for encryption/verification, private for decryption/signing.
*   **RSA is based on the difficulty of factoring large numbers.** It is widely used but can be computationally intensive.
*   **ECC is based on the difficulty of the ECDLP.** It offers better security-to-key-size ratio, making it more efficient for many applications.
*   **Padding schemes are crucial for RSA security** to prevent specific attacks.
*   **Key size matters:** Larger keys generally mean stronger security, but also more computational overhead. ECC achieves similar security levels with smaller keys.
*   **The choice between RSA and ECC depends on the specific application requirements** (security needs, performance constraints, environment).
