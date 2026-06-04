---
title: "cryptographic notations"
subject: "FOUNDATIONS OF CRYPTOGRAPHY"
module: "Module 3: Principles of security "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8bf19"
status: "completed"
scrapedAt: "2026-05-20T16:53:40.483Z"
---
# Foundations of Cryptography: Module 3 - Principles of Security

## Topic: Cryptographic Notations

---

### Learning Outcomes:

Upon completion of this topic, you should be able to:

*   Understand and utilize common mathematical notations used in cryptography.
*   Distinguish between plaintext, ciphertext, keys, algorithms, and other fundamental cryptographic concepts.
*   Represent encryption and decryption processes using standard notation.
*   Understand the role of functions and mappings in cryptographic operations.
*   Appreciate how notation aids in the formal analysis and communication of cryptographic protocols.

---

### 1. Introduction to Cryptographic Notations

Cryptography, at its core, involves the manipulation of information using mathematical operations. To formally describe these operations and the entities involved, a standardized set of notations is essential. These notations allow for clear, unambiguous communication and analysis of cryptographic systems.

---

### 2. Fundamental Cryptographic Entities and Their Notations

We use specific symbols and terms to represent the core components of any cryptographic system.

#### 2.1. Plaintext (P)

*   **Definition:** The original, readable message or data that is to be protected.
*   **Notation:** Typically denoted by a capital letter, most commonly **P**.
*   **Example:** If you want to send a message "Hello World", then P = "Hello World".

#### 2.2. Ciphertext (C)

*   **Definition:** The scrambled, unreadable version of the plaintext, produced after the encryption process.
*   **Notation:** Typically denoted by a capital letter, most commonly **C**.
*   **Example:** After encryption, P might become C = "Xq7r9z1s".

#### 2.3. Key (K)

*   **Definition:** A piece of information, typically a string of bits or a numerical value, that controls the operation of the cryptographic algorithm. The security of most cryptosystems relies on the secrecy of the key.
*   **Notation:** Typically denoted by a capital letter, most commonly **K**.
*   **Subtypes and Notations:**
    *   **Encryption Key (K<sub>e</sub>):** The key used to encrypt plaintext into ciphertext.
    *   **Decryption Key (K<sub>d</sub>):** The key used to decrypt ciphertext back into plaintext.
    *   **Symmetric Key:** In symmetric-key cryptography, K<sub>e</sub> = K<sub>d</sub> = K.
    *   **Asymmetric Key Pair:** In asymmetric-key cryptography, we have a public key (K<sub>pub</sub>) and a private key (K<sub>priv</sub>).
*   **Example:** For a simple Caesar cipher, K could be the number of positions to shift letters (e.g., K = 3).

#### 2.4. Encryption Algorithm (E)

*   **Definition:** The mathematical process or set of rules used to transform plaintext into ciphertext.
*   **Notation:** Typically denoted by a capital letter, most commonly **E**.
*   **Example:** For a Caesar cipher, E is the operation of shifting letters by K positions.

#### 2.5. Decryption Algorithm (D)

*   **Definition:** The mathematical process or set of rules used to transform ciphertext back into plaintext.
*   **Notation:** Typically denoted by a capital letter, most commonly **D**.
*   **Example:** For a Caesar cipher, D is the operation of shifting letters back by K positions.

---

### 3. Notations for Encryption and Decryption Processes

These notations formalize the operations described above.

#### 3.1. Symmetric-Key Encryption

*   **Process:** Plaintext (P) is encrypted using an encryption algorithm (E) and an encryption key (K<sub>e</sub>) to produce ciphertext (C). The same key, the decryption key (K<sub>d</sub>), is used with the decryption algorithm (D) to recover the plaintext.
*   **Notation:**
    *   **Encryption:** `C = E(K, P)`  or  `C = E<sub>K</sub>(P)`
        *   This reads: "Ciphertext C is the result of applying the encryption algorithm E with key K to the plaintext P."
    *   **Decryption:** `P = D(K, C)`  or  `P = D<sub>K</sub>(C)`
        *   This reads: "Plaintext P is the result of applying the decryption algorithm D with key K to the ciphertext C."
*   **Relationship:** Crucially, `D(K, E(K, P)) = P` for all valid plaintexts P.
*   **Example (Caesar Cipher with K=3):**
    *   Let P = "ATTACK"
    *   Encryption: `C = E(3, "ATTACK")`
        *   A becomes D, T becomes W, etc.
        *   `C = "DWWDFN"`
    *   Decryption: `P = D(3, "DWWDFN")`
        *   D becomes A, W becomes T, etc.
        *   `P = "ATTACK"`

#### 3.2. Asymmetric-Key (Public-Key) Encryption

*   **Process:** In asymmetric cryptography, a pair of keys is used: a public key (K<sub>pub</sub>) that can be shared with anyone, and a private key (K<sub>priv</sub>) that must be kept secret.
    *   **Encryption:** Typically, plaintext is encrypted using the *recipient's public key*.
    *   **Decryption:** The recipient uses their *private key* to decrypt the ciphertext.
*   **Notation:**
    *   **Encryption:** `C = E(K<sub>pub</sub>, P)` or `C = E<sub>K<sub>pub</sub></sub>(P)`
        *   This reads: "Ciphertext C is the result of applying the encryption algorithm E with the recipient's public key K<sub>pub</sub> to the plaintext P."
    *   **Decryption:** `P = D(K<sub>priv</sub>, C)` or `P = D<sub>K<sub>priv</sub></sub>(C)`
        *   This reads: "Plaintext P is the result of applying the decryption algorithm D with the recipient's private key K<sub>priv</sub> to the ciphertext C."
*   **Relationship:** `D(K<sub>priv</sub>, E(K<sub>pub</sub>, P)) = P`
*   **Note on Digital Signatures:** For digital signatures, the roles are reversed: signing is done with the *private key*, and verification is done with the *public key*.
    *   **Signing:** `S = E(K<sub>priv</sub>, M)` (where M is the message, often a hash of the message)
    *   **Verification:** `M = D(K<sub>pub</sub>, S)`
*   **Example (Conceptual):**
    *   Alice wants to send a secure message to Bob.
    *   Bob generates a public/private key pair (K<sub>pub_Bob</sub>, K<sub>priv_Bob</sub>).
    *   Bob shares K<sub>pub_Bob</sub> with Alice.
    *   Alice encrypts her message P using `C = E(K<sub>pub_Bob</sub>, P)`.
    *   Alice sends C to Bob.
    *   Bob receives C and decrypts it using `P = D(K<sub>priv_Bob</sub>, C)`.

---

### 4. Mathematical Functions and Mappings in Cryptography

Cryptographic operations are fundamentally based on mathematical functions.

#### 4.1. Functions and Their Notation

*   **Definition:** A function `f` from a set A to a set B assigns to each element `a` in A exactly one element `b` in B.
*   **Notation:** `f: A -> B`
    *   This reads: "f is a function from set A to set B."
    *   The element `b` in B corresponding to `a` is denoted by `f(a)`.
*   **Cryptographic Relevance:**
    *   **Encryption/Decryption:** `E` and `D` are functions that map plaintexts to ciphertexts and ciphertexts to plaintexts, respectively.
    *   **Hashing:** Hash functions (`H`) are functions that map arbitrary-sized data to a fixed-size output. `H: {0,1}* -> {0,1}<sup>n</sup>` (maps strings of any length to n-bit strings).
    *   **Key Generation:** Algorithms generate keys based on certain probability distributions or functions.

#### 4.2. Examples of Functions

*   **Modular Arithmetic:**
    *   `a mod n`: The remainder when `a` is divided by `n`.
    *   **Notation:** `a ≡ b (mod n)` means `a` and `b` have the same remainder when divided by `n`.
    *   **Example:** `17 ≡ 2 (mod 5)` because 17 divided by 5 is 3 with a remainder of 2.
    *   **Cryptographic Use:** Used extensively in algorithms like RSA and Diffie-Hellman for operations like modular exponentiation.
*   **Permutations:**
    *   **Definition:** A reordering of elements in a set.
    *   **Notation:** A permutation `π` of a set `S` maps each element `s` in `S` to `π(s)`.
    *   **Example:** If `S = {1, 2, 3}`, a permutation `π` could be `π(1)=2, π(2)=3, π(3)=1`.
    *   **Cryptographic Use:** Used in transposition ciphers and within substitution-permutation networks (SPNs) like in AES.
*   **Substitutions:**
    *   **Definition:** Replacing one character or block of characters with another.
    *   **Notation:** Often represented by a mapping or a lookup table.
    *   **Example:** A simple substitution cipher might map 'A' to 'D', 'B' to 'E', etc.
    *   **Cryptographic Use:** Core of substitution ciphers and S-boxes in block ciphers.

---

### 5. Key Properties Represented by Notation

Notations help us express important cryptographic properties formally.

#### 5.1. Key Dependency

*   **Concept:** The output of an algorithm depends on the key used.
*   **Notation:** `E<sub>K</sub>(P)` clearly shows that the result of encryption depends on the specific key `K`.

#### 5.2. Reversibility

*   **Concept:** The ability to recover the original plaintext from ciphertext.
*   **Notation:** `D<sub>K</sub>(E<sub>K</sub>(P)) = P` explicitly states that applying decryption with the correct key reverses the encryption process.

#### 5.3. One-Way Functions (Informal)

*   **Concept:** Functions that are easy to compute in one direction but computationally infeasible to reverse.
*   **Notation:** While there isn't a single standard notation for "one-way," the properties of cryptographic hash functions (`H(x)`) or modular exponentiation (`g<sup>x</sup> mod p`) often imply this. The difficulty in finding `x` given `g<sup>x</sup> mod p` is the basis of the Diffie-Hellman problem.

---

### 6. Importance of Formal Notations

*   **Unambiguous Communication:** Ensures that cryptographers and computer scientists understand each other precisely.
*   **Mathematical Rigor:** Allows for formal proofs of security properties and the analysis of algorithm strengths and weaknesses.
*   **Algorithm Design:** Provides a framework for designing new cryptographic schemes.
*   **Protocol Specification:** Essential for specifying how cryptographic primitives are combined into secure protocols.

---

### 7. Practice Questions and Exercises

**Question 1:**
If Alice uses the public key `K<sub>pub_Bob</sub>` to encrypt a message `P` and sends the ciphertext `C` to Bob, what operation must Bob perform to recover the plaintext, and what key does he use?

**Question 2:**
Consider a simple Caesar cipher where the plaintext `P = "SECRET"` is encrypted using the key `K = 5`.
    a. Represent the encryption process using standard cryptographic notation.
    b. Determine the ciphertext `C`.
    c. Represent the decryption process using standard cryptographic notation.
    d. If Bob receives the ciphertext `C` and knows the key `K = 5`, how does he recover the plaintext?

**Question 3:**
What is the primary difference in how keys are used in symmetric-key cryptography versus asymmetric-key cryptography, as represented by the notation?

**Question 4:**
Explain the meaning of the notation `f: A -> B` in the context of cryptographic hash functions.

**Question 5:**
Which of the following notations represents the concept of a key pair in asymmetric cryptography?
    a. `K`
    b. `K<sub>e</sub>, K<sub>d</sub>`
    c. `K<sub>pub</sub>, K<sub>priv</sub>`
    d. `E, D`

---

### 8. Answers to Practice Questions

**Answer 1:**
Bob must perform decryption using his **private key** `K<sub>priv_Bob</sub>`. The operation is `P = D(K<sub>priv_Bob</sub>, C)`.

**Answer 2:**
    a. Encryption: `C = E(5, "SECRET")` or `C = E<sub>5</sub>("SECRET")`
    b. Ciphertext `C`: Shifting each letter 5 positions forward in the alphabet (A->F, B->G, etc.):
        S -> X
        E -> J
        C -> H
        R -> W
        E -> J
        T -> Y
        So, `C = "XJHWJY"`
    c. Decryption: `P = D(5, "XJHWJY")` or `P = D<sub>5</sub>("XJHWJY")`
    d. Bob performs the decryption operation by shifting each letter in the ciphertext 5 positions backward in the alphabet (X -> S, J -> E, etc.) to recover the original plaintext "SECRET".

**Answer 3:**
In symmetric-key cryptography, a single key `K` is used for both encryption and decryption: `E<sub>K</sub>(P)` and `D<sub>K</sub>(C)`. In asymmetric-key cryptography, a *pair* of keys is used: a public key `K<sub>pub</sub>` for encryption (`E<sub>K<sub>pub</sub></sub>(P)`) and a corresponding private key `K<sub>priv</sub>` for decryption (`D<sub>K<sub>priv</sub></sub>(C)`).

**Answer 4:**
The notation `f: A -> B` means that `f` is a function that takes an input from set `A` and produces an output in set `B`. For cryptographic hash functions, `A` is the set of all possible messages (typically strings of bits, represented as `{0,1}*`), and `B` is the set of all possible hash outputs, which is a fixed-size set (e.g., `n`-bit strings, `{0,1}<sup>n</sup>`). So, for a hash function `H`, the notation would be `H: {0,1}* -> {0,1}<sup>n</sup>`.

**Answer 5:**
c. `K<sub>pub</sub>, K<sub>priv</sub>`

---

### 9. Important Points to Remember

*   **P, C, K, E, D:** Understand what each of these fundamental symbols represents.
*   **Symmetric vs. Asymmetric:** The notation clearly distinguishes the single key in symmetric crypto (`K`) from the key pair (`K<sub>pub</sub>`, `K<sub>priv</sub>`) in asymmetric crypto.
*   **Key Roles:** Remember that for encryption in asymmetric crypto, the *public* key encrypts, and the *private* key decrypts. For signatures, it's the reverse.
*   **Function Notation:** Recognize that cryptographic operations are mathematical functions, and notations like `f: A -> B` and `f(a)` are used to describe them.
*   **Modulus Operator:** Be familiar with `mod n` notation for modular arithmetic, a cornerstone of many modern cryptosystems.
*   **Composition:** Understand how chaining operations is represented, e.g., `D(K, E(K, P))`.
*   **Security Through Secrecy:** The security of many systems relies on keeping `K` (symmetric) or `K<sub>priv</sub>` (asymmetric) secret.

---
