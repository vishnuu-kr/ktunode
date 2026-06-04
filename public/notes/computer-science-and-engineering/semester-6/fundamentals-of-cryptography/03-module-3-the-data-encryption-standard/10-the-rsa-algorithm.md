---
title: "The RSA Algorithm"
subject: "FUNDAMENTALS OF CRYPTOGRAPHY"
module: "Module 3: The Data Encryption Standard "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8bcdd"
status: "completed"
scrapedAt: "2026-05-20T16:54:09.492Z"
---
# FUNDAMENTALS OF CRYPTOGRAPHY - Module 3: The Data Encryption Standard - Topic: The RSA Algorithm

These notes cover the RSA algorithm, a widely used public-key cryptosystem.

**Learning Outcomes:**

*   Understand the mathematical principles behind RSA.
*   Be able to generate RSA keys.
*   Understand the encryption and decryption processes in RSA.
*   Be able to perform simple RSA encryption and decryption manually.
*   Appreciate the security considerations and potential vulnerabilities of RSA.

## 1. Introduction to RSA

*   **Definition:** RSA (Rivest-Shamir-Adleman) is a public-key cryptosystem widely used for secure data transmission. It is one of the oldest and still most commonly used public-key cryptosystems.
*   **Public-key Cryptography:** RSA relies on the asymmetry of public and private keys.  One key (the public key) is used for encryption, and another key (the private key) is used for decryption. The public key can be distributed freely without compromising security.
*   **Security Foundation:** The security of RSA relies on the practical difficulty of factoring the product of two large prime numbers, the "factoring problem". If an attacker can factor the modulus, they can derive the private key from the public key.

## 2. Mathematical Principles

*   **Prime Numbers (p, q):** RSA relies on two large, distinct prime numbers, *p* and *q*. These primes should be randomly chosen and of significant size (hundreds or thousands of bits) for strong security.
*   **Modulus (n):** The modulus *n* is calculated as the product of the two primes:  *n = p * q*.  *n* is part of both the public and private keys.
*   **Euler's Totient Function (φ(n)):** φ(n)  represents the number of integers less than *n* that are relatively prime to *n*. For RSA, it is calculated as:  *φ(n) = (p - 1) * (q - 1)*. This value is crucial for key generation and is kept secret.
*   **Public Exponent (e):**  *e* is an integer chosen such that:
    *   1 < *e* < *φ(n)*
    *   *e* and *φ(n)* are coprime (i.e., their greatest common divisor (GCD) is 1: gcd(*e*, *φ(n)*) = 1).  Common choices for *e* are 65537 (2<sup>16</sup> + 1), 3, and 5. 65537 is often preferred as a balance between security and performance.
*   **Private Exponent (d):** *d* is the modular multiplicative inverse of *e* modulo *φ(n)*. This means that *d* must satisfy the equation:  *(d * e) mod φ(n) = 1*. *d* is calculated using the Extended Euclidean Algorithm.

## 3. RSA Key Generation

1.  **Choose two distinct prime numbers, *p* and *q*.** (e.g., *p* = 61, *q* = 53)
2.  **Calculate *n = p * q*.** (e.g., *n* = 61 * 53 = 3233)
3.  **Calculate *φ(n) = (p - 1) * (q - 1)*.** (e.g., *φ(n)* = (61 - 1) * (53 - 1) = 60 * 52 = 3120)
4.  **Choose an integer *e* such that 1 < *e* < *φ(n)* and gcd(*e*, *φ(n)*) = 1.** (e.g., *e* = 17)
5.  **Calculate *d* such that (d * e) mod φ(n) = 1.**  This is the modular multiplicative inverse of *e* modulo *φ(n)*. (e.g., *d* = 2753, because (17 * 2753) mod 3120 = 1).  This step usually involves the Extended Euclidean Algorithm.

*   **Public Key:** (*n*, *e*) (e.g., (3233, 17))
*   **Private Key:** (*n*, *d*) (e.g., (3233, 2753))  *p*, *q*, and *φ(n)* should be kept secret.

## 4. RSA Encryption and Decryption

*   **Encryption:**
    *   Let *M* be the plaintext message (an integer less than *n*).  If *M* is larger than *n*, it needs to be broken into blocks.
    *   The ciphertext *C* is calculated as:  *C = M<sup>e</sup> mod n*
    *   Use the recipient's *public key* (*n*, *e*) for encryption.

*   **Decryption:**
    *   The plaintext message *M* is recovered from the ciphertext *C* using the recipient's *private key* (*n*, *d*):
    *   *M = C<sup>d</sup> mod n*

## 5. RSA Example

Let's use the keys we generated earlier:

*   *p* = 61, *q* = 53, *n* = 3233, *φ(n)* = 3120, *e* = 17, *d* = 2753
*   Public Key: (3233, 17)
*   Private Key: (3233, 2753)

**Encryption:**

Let's encrypt the message *M* = 123.

*   *C = M<sup>e</sup> mod n*
*   *C = 123<sup>17</sup> mod 3233*
*   *C = 855*  (You'll need a calculator or software to compute this efficiently)

So, the ciphertext *C* is 855.

**Decryption:**

Now, let's decrypt the ciphertext *C* = 855.

*   *M = C<sup>d</sup> mod n*
*   *M = 855<sup>2753</sup> mod 3233*
*   *M = 123* (Again, you'll need a calculator or software to compute this)

We successfully recovered the original message *M* = 123.

## 6. Security Considerations and Vulnerabilities

*   **Factoring Attacks:** The primary security risk to RSA is the ability to factor the modulus *n*. If an attacker can determine *p* and *q*, they can calculate *φ(n)* and then compute *d*.  Using sufficiently large primes (currently 2048 bits or greater is recommended) makes factorization computationally infeasible with current technology.
*   **Small *e* Attacks:**  Choosing a small value for *e* (like 3) can lead to vulnerabilities if the same message is encrypted to multiple recipients.  Padding schemes (see below) mitigate this.
*   **Chosen Ciphertext Attacks (CCA):**  RSA is vulnerable to CCA if not used correctly.  Padding schemes like Optimal Asymmetric Encryption Padding (OAEP) are designed to prevent these attacks.
*   **Common Modulus Attack:** If multiple users share the same modulus *n* but have different public exponents *e<sub>1</sub>* and *e<sub>2</sub>*, and their GCD is 1, an attacker can decrypt a message encrypted with both public keys, even if the original message was padded.
*   **Implementation Attacks:** Side-channel attacks, such as timing attacks, power analysis, and electromagnetic radiation analysis, can potentially leak information about the private key during RSA operations.
*   **Padding Schemes:** Padding is crucial for security.  Padding schemes add random data to the plaintext message before encryption.  This makes the same message encrypt to a different ciphertext each time and thwarts attacks like the small *e* attack and CCA. Common padding schemes include:
    *   **PKCS #1 v1.5 padding:** Older and less secure.  Susceptible to chosen ciphertext attacks.
    *   **OAEP (Optimal Asymmetric Encryption Padding):**  Recommended and more secure. Proven to be secure against chosen ciphertext attacks.
*   **Key Length:** Using sufficiently long keys (e.g., 2048 bits or 4096 bits) is critical for security. Shorter keys are vulnerable to factorization attacks.
*   **Prime Number Generation:** The primes *p* and *q* *must* be generated randomly and independently. Predictable or related primes can significantly weaken RSA.
*   **Integer Factorization:** The best-known algorithm for factoring large numbers is the General Number Field Sieve (GNFS). As computational power increases and new algorithms are developed, the recommended key length must be increased to maintain security.

## 7. Practice Questions/Exercises

1.  **RSA Key Generation:** Choose *p* = 11 and *q* = 13. Generate the public and private keys. Show your work.
2.  **RSA Encryption:** Using the public key you generated in question 1, encrypt the message *M* = 7.
3.  **RSA Decryption:** Using the private key you generated in question 1, decrypt the ciphertext you obtained in question 2.
4.  **Security Question:** Explain why choosing small prime numbers for *p* and *q* makes RSA insecure.
5.  **Padding Question:** Why is padding necessary in RSA, and what kind of attacks does it prevent?

**Answers:**

1.  *   *n* = 11 * 13 = 143
    *   *φ(n)* = (11 - 1) * (13 - 1) = 10 * 12 = 120
    *   Let *e* = 7 (gcd(7, 120) = 1)
    *   (7 * *d*) mod 120 = 1  => *d* = 103 (because (7 * 103) mod 120 = 1)
    *   Public Key: (143, 7)
    *   Private Key: (143, 103)
2.  *   *C = 7<sup>7</sup> mod 143*
    *   *C = 823543 mod 143*
    *   *C = 48*
3.  *   *M = 48<sup>103</sup> mod 143*
    *   *M = 7* (Using a calculator or software)
4.  Small prime numbers result in a small modulus *n*. A small *n* is easily factorable, allowing an attacker to determine *p* and *q*, compute *φ(n)*, and then calculate the private key *d*.
5.  Padding is necessary in RSA to prevent various attacks such as:
    *   **Small *e* attacks:**  Encrypting the same message to multiple recipients with the same small *e* can allow for decryption using the Chinese Remainder Theorem.
    *   **Chosen Ciphertext Attacks (CCA):** Attackers can exploit the mathematical structure of RSA to gain information about the plaintext by submitting carefully crafted ciphertexts for decryption.
    *   Padding ensures that the same plaintext always encrypts to a different ciphertext, making these attacks much more difficult or impossible.

## 8. Important Points to Remember

*   The security of RSA relies on the difficulty of factoring large numbers.
*   Choose large, randomly generated, and distinct prime numbers.
*   Keep *p*, *q*, and *φ(n)* secret.
*   Use appropriate padding schemes, such as OAEP, to prevent various attacks.
*   Use sufficiently long keys (at least 2048 bits).
*   Be aware of potential implementation vulnerabilities, such as side-channel attacks.
