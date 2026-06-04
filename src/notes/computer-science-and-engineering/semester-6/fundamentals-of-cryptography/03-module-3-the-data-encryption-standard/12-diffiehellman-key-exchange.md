---
title: "Diffie–Hellman Key Exchange."
subject: "FUNDAMENTALS OF CRYPTOGRAPHY"
module: "Module 3: The Data Encryption Standard "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8bcdf"
status: "completed"
scrapedAt: "2026-05-20T16:54:11.023Z"
---
# FUNDAMENTALS OF CRYPTOGRAPHY - Module 3: The Data Encryption Standard - Diffie-Hellman Key Exchange

## 1. Introduction

The Diffie-Hellman key exchange is a specific method of exchanging cryptographic keys. It is one of the first practical examples of *public-key cryptography* and was published in 1976 by Whitfield Diffie and Martin Hellman. It allows two parties to establish a shared secret over an insecure channel, which can then be used as a symmetric key for subsequent communication using a symmetric-key algorithm.

## 2. Learning Outcomes

By the end of this section, you should be able to:

*   **Understand the purpose and principle of the Diffie-Hellman key exchange algorithm.**
*   **Explain the role of modular exponentiation and discrete logarithms in the algorithm's security.**
*   **Perform a Diffie-Hellman key exchange calculation.**
*   **Identify the vulnerabilities of the basic Diffie-Hellman key exchange and possible mitigations.**
*   **Understand how the generated shared secret can be used for symmetric encryption.**

## 3. Key Concepts and Definitions

*   **Public-key Cryptography:**  A cryptographic system using pairs of keys: public keys, which may be disseminated widely, and private keys which are known only to the owner. The public key is used for encryption and the private key for decryption.  Or in the case of Diffie-Hellman, public keys are exchanged to agree on a shared secret.

*   **Symmetric-key Algorithm:** A cryptographic algorithm that uses the same key for both encryption and decryption. Examples include AES, DES, and 3DES.

*   **Key Exchange:**  A cryptographic protocol that allows two or more parties to establish a shared secret key over a public network.

*   **Modular Exponentiation:**  An exponentiation performed over a modulus.  Given a base `g`, an exponent `a`, and a modulus `p`, the modular exponentiation is calculated as `g^a mod p`.

*   **Discrete Logarithm:** The discrete logarithm problem involves finding the exponent `a` in the equation `g^a ≡ b (mod p)` given `g`, `b`, and `p`.  This is computationally hard for sufficiently large `p` when `p` is a prime.

*   **Prime Number:** A natural number greater than 1 that has no positive divisors other than 1 and itself.

*   **Generator (Primitive Root):**  A number `g` such that its powers modulo `p` (where `p` is prime) generate all numbers from `1` to `p-1`. In other words, every number between 1 and p-1 can be expressed as `g^k mod p` for some integer `k`.

## 4. The Diffie-Hellman Key Exchange Algorithm

The Diffie-Hellman algorithm allows two parties (Alice and Bob) to establish a shared secret key without ever transmitting the secret key itself.

**Steps:**

1.  **Global Public Parameters:**
    *   Alice and Bob agree on a large prime number `p` and a generator `g` (primitive root) modulo `p`. These parameters can be publicly known. The larger `p` is, the more secure the exchange.  It is best for `p` to be a safe prime (a prime of the form `2q+1`, where `q` is also prime).
    *   `p` and `g` do *not* need to be secret.

2.  **Alice's Private and Public Keys:**
    *   Alice chooses a private key `a`, which is a random integer such that `1 < a < p - 1`. Alice keeps `a` secret.
    *   Alice calculates her public key `A = g^a mod p`. Alice sends `A` to Bob.

3.  **Bob's Private and Public Keys:**
    *   Bob chooses a private key `b`, which is a random integer such that `1 < b < p - 1`. Bob keeps `b` secret.
    *   Bob calculates his public key `B = g^b mod p`. Bob sends `B` to Alice.

4.  **Shared Secret Calculation:**
    *   Alice receives Bob's public key `B` and calculates the shared secret: `s = B^a mod p`.
    *   Bob receives Alice's public key `A` and calculates the shared secret: `s = A^b mod p`.

5.  **The shared secret `s` is the same for both Alice and Bob.**  This is because:
    `B^a mod p = (g^b mod p)^a mod p = g^(ab) mod p`
    `A^b mod p = (g^a mod p)^b mod p = g^(ba) mod p`
    Since multiplication is commutative (ab = ba), `g^(ab) mod p = g^(ba) mod p`.

**Diagram:**

```
Alice                                     Bob
-----                                     -----
Choose private key a                      Choose private key b
(Keep a secret)                         (Keep b secret)

Compute public key A = g^a mod p        Compute public key B = g^b mod p

----------------------> Send A          ---------------------->
<---------------------- Send B          <----------------------

Compute shared secret:                Compute shared secret:
s = B^a mod p                           s = A^b mod p
```

## 5. Example

Let's say Alice and Bob agree on the following public parameters:

*   `p = 23` (prime number)
*   `g = 5` (generator modulo 23)

1.  **Alice's Key Generation:**
    *   Alice chooses a private key `a = 6`.
    *   Alice calculates her public key `A = 5^6 mod 23 = 8`. Alice sends 8 to Bob.

2.  **Bob's Key Generation:**
    *   Bob chooses a private key `b = 15`.
    *   Bob calculates his public key `B = 5^15 mod 23 = 19`. Bob sends 19 to Alice.

3.  **Shared Secret Calculation:**
    *   Alice calculates the shared secret: `s = 19^6 mod 23 = 2`.
    *   Bob calculates the shared secret: `s = 8^15 mod 23 = 2`.

Therefore, the shared secret key is `2`. Alice and Bob can now use this key for a symmetric encryption algorithm like AES to communicate securely.

## 6. Security Considerations and Vulnerabilities

*   **The Discrete Logarithm Problem (DLP):**  The security of Diffie-Hellman relies on the computational difficulty of the discrete logarithm problem.  An attacker knowing `p`, `g`, `A`, and `B` wants to compute `a` or `b`.  This means finding `a` such that `g^a ≡ A (mod p)`. For sufficiently large `p` (hundreds or thousands of bits), this is computationally infeasible.

*   **Man-in-the-Middle Attack:**  The original Diffie-Hellman key exchange is vulnerable to a man-in-the-middle attack.

    *   Mallory (the attacker) intercepts the exchange between Alice and Bob.
    *   Mallory establishes a Diffie-Hellman key exchange with Alice, pretending to be Bob.
    *   Mallory also establishes a Diffie-Hellman key exchange with Bob, pretending to be Alice.
    *   Alice and Bob now believe they are communicating with each other, but they are actually communicating with Mallory.
    *   Mallory can decrypt and re-encrypt the messages, eavesdropping on the entire conversation.

    **Mitigation:**  Authentication is needed to protect against man-in-the-middle attacks. This can be achieved using digital signatures (e.g., using a Public Key Infrastructure or certificates).  Alternatively, a pre-shared secret can be used to authenticate the exchange.  DH exchanges can also be incorporated into authenticated protocols like TLS/SSL.

*   **Small Subgroup Confinement Attack:**  If `p` is not carefully chosen, an attacker can choose small subgroups and perform the discrete logarithm attack within those subgroups, potentially revealing parts of the private keys.  Using safe primes and ensuring `g` generates a large subgroup helps to prevent this attack.

*   **Improper Parameter Validation:** Implementations *must* validate the parameters (p, g, A, B) to ensure they are within the expected range, prime, and are of appropriate length.  Failure to do so can expose the system to attacks where small or malicious values are used to simplify the discrete logarithm problem.

## 7. Use of Shared Secret for Symmetric Encryption

After Alice and Bob have established the shared secret `s`, they can use it as the key for a symmetric encryption algorithm, such as AES or ChaCha20.  Often a key derivation function (KDF) is used to derive one or more keys from `s` for encryption and potentially for message authentication codes (MACs). A KDF takes the shared secret as input and outputs a cryptographically secure key(s). This provides extra security against compromises of the shared secret.

**Example:**

1.  Alice and Bob establish the shared secret `s` using Diffie-Hellman.
2.  They use a KDF (e.g., HKDF, PBKDF2) with `s` as the input to derive a symmetric key `k`.
3.  Alice encrypts her message `m` using `k` and a symmetric encryption algorithm (e.g., AES) to produce ciphertext `c`.
4.  Alice sends `c` to Bob.
5.  Bob decrypts `c` using `k` and the same symmetric encryption algorithm to recover the original message `m`.

## 8. Practice Questions

1.  **Explain the purpose of the Diffie-Hellman key exchange.**
    *   **Answer:** To allow two parties to establish a shared secret key over an insecure channel, which can then be used for symmetric encryption.

2.  **What mathematical problem is the security of Diffie-Hellman based on?**
    *   **Answer:** The Discrete Logarithm Problem (DLP).

3.  **Identify a major vulnerability of the basic Diffie-Hellman key exchange and how it can be mitigated.**
    *   **Answer:** Vulnerable to man-in-the-middle attacks. Mitigation: Use authentication, such as digital signatures, or a pre-shared secret, or use an authenticated protocol like TLS/SSL.

4.  **Alice and Bob agree on `p = 11` and `g = 2`. Alice chooses `a = 3` and Bob chooses `b = 4`. What is the shared secret?**
    *   **Answer:**
        *   Alice's public key: `A = 2^3 mod 11 = 8`.
        *   Bob's public key: `B = 2^4 mod 11 = 5`.
        *   Alice's calculation: `s = 5^3 mod 11 = 4`.
        *   Bob's calculation: `s = 8^4 mod 11 = 4`.
        *   The shared secret is `4`.

5.  **Why is it important to use a Key Derivation Function (KDF) on the shared secret before using it for symmetric encryption?**
    *   **Answer:** A KDF strengthens the shared secret by creating a cryptographically strong key, potentially multiple keys for different purposes, guarding against potential compromises of the shared secret.

## 9. Important Points to Remember

*   Diffie-Hellman is a *key exchange* algorithm, not an encryption algorithm itself.
*   The security relies on the difficulty of the Discrete Logarithm Problem.
*   The basic Diffie-Hellman key exchange is vulnerable to man-in-the-middle attacks and requires authentication for secure use.
*   Choose large prime numbers for `p` to ensure adequate security.  Use safe primes if possible.
*   Always validate public keys received from other parties.
*   Use a key derivation function (KDF) to derive encryption keys from the shared secret.
