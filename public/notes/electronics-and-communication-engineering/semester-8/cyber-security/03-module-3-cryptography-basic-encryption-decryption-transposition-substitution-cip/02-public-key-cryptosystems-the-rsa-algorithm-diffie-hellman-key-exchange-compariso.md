---
title: "Public key cryptosystems  – The RSA Algorithm – Diffie Hellman key exchange – comparison of RSA & DES – Message Authentication & Hash functions – Digital signature"
subject: "CYBER SECURITY"
module: "Module 3: Cryptography : Basic Encryption & Decryption  – Transposition & substitution ciphers – Caesar substitution – Polyalphabetic substitutions – Crypt analysis – Symmetric key algorithms  – Feistel Networks – Confusion – Diffusion – DES Algorithm – Strength of DES – Comparison & important features of modern symmetric key algorithms"
branch: "Electronics and Communication Engineering"
semester: 8
topicId: "68a5c462b09ce205780ff64c"
status: "completed"
scrapedAt: "2026-05-23T18:13:46.797Z"
---
## CYBER SECURITY: Module 3 - Cryptography: Basic Encryption & Decryption

This module delves into the fundamental concepts of cryptography, focusing on how information is secured through encryption and decryption. We will explore various cipher techniques, the evolution from symmetric to asymmetric key cryptography, and the essential tools for ensuring data integrity and authenticity.

---

### 3.1 Basic Encryption & Decryption

Cryptography is the art and science of secret writing. It is a crucial component of cybersecurity, enabling confidentiality, integrity, and authenticity of information.

*   **Encryption:** The process of converting readable data (plaintext) into an unreadable format (ciphertext) using an algorithm and a key.
*   **Decryption:** The process of converting ciphertext back into readable plaintext using the appropriate algorithm and key.
*   **Plaintext:** The original, readable message.
*   **Ciphertext:** The encrypted, unreadable message.
*   **Cipher:** The algorithm used for encryption and decryption.
*   **Key:** A piece of information (a parameter) that determines the output of a cryptographic algorithm. The security of most cryptographic methods relies on the secrecy of the key.

---

### 3.2 Transposition & Substitution Ciphers

These are the two fundamental building blocks of many cryptographic systems.

#### 3.2.1 Substitution Ciphers

In substitution ciphers, each unit of plaintext is replaced with a corresponding unit of ciphertext. The unit can be a single letter, a pair of letters, or even a block of text.

*   **Caesar Substitution:**
    *   **Concept:** A simple form of substitution where each letter in the plaintext is shifted a fixed number of positions down or up the alphabet.
    *   **Example:** A shift of +3 (a Caesar cipher with a shift of 3) would turn 'A' into 'D', 'B' into 'E', and so on. 'X' would become 'A', 'Y' into 'B', and 'Z' into 'C' (wrapping around).
    *   **Key:** The integer representing the shift amount.
    *   **Strength:** Very weak, easily broken by brute-force attack (trying all 25 possible shifts).
    *   **Reference:** Kizza, Chapter 4, "Cryptography and Cryptosystems".

*   **Polyalphabetic Substitutions:**
    *   **Concept:** Uses multiple substitution alphabets to encrypt the plaintext. This makes it more complex than monoalphabetic substitution (like Caesar). The choice of substitution alphabet changes based on a keyword.
    *   **Vigenère Cipher:**
        *   **Concept:** Uses a keyword to determine the shift for each letter of the plaintext. Each letter in the keyword corresponds to a shift value (e.g., A=0, B=1, ..., Z=25). The keyword is repeated to match the length of the plaintext.
        *   **Example:**
            *   Plaintext: ATTACKATDAWN
            *   Keyword: LEMON
            *   Ciphertext: LXFOPVEFRNHR
            *   **How:**
                *   A (0) + L (11) = L (11)
                *   T (19) + E (4) = X (23)
                *   T (19) + M (12) = G (6) -> Oh wait, T+M = 31, 31 mod 26 = 5, which is F. My mistake. Correcting:
                *   T (19) + M (12) = 31 mod 26 = 5 (F)
                *   A (0) + O (14) = O (14)
                *   C (2) + N (13) = P (15)
                *   K (10) + L (11) = V (21)
                *   A (0) + E (4) = E (4)
                *   T (19) + M (12) = 31 mod 26 = 5 (F)
                *   D (3) + O (14) = R (17)
                *   A (0) + N (13) = N (13)
                *   W (22) + L (11) = H (7) -> W(22) + L(11) = 33 mod 26 = 7 (H)
                *   N (13) + E (4) = R (17)
        *   **Strength:** More secure than Caesar cipher, but susceptible to frequency analysis (Kasiski examination and index of coincidence) if the keyword is short.
    *   **Reference:** Stallings (10/e), Chapter 2, "Symmetric Encryption and Message Confidentiality".

#### 3.2.2 Transposition Ciphers

In transposition ciphers, the letters of the plaintext are rearranged according to a specific rule, but the letters themselves are not substituted.

*   **Rail Fence Cipher:**
    *   **Concept:** Writes the plaintext in a zig-zag pattern across a specified number of "rails" and then reads off the characters rail by rail.
    *   **Example:**
        *   Plaintext: WE ARE DISCOVERED FLEE AT ONCE
        *   Number of rails: 3
        *   Pattern:
            ```
            W . . . E . . . C . . . R . . . L . . . T . . . E
            . E . R . D . S . O . E . E . F . E . A . O . C .
            . . A . . . I . . . V . . . D . . . E . . . N . .
            ```
        *   Ciphertext: WECRLTEERDSOEEFEAOCAIVDEN
    *   **Strength:** Simple to implement, but can be broken with some effort, especially if the number of rails is small.
    *   **Reference:** Kizza, Chapter 4, "Cryptography and Cryptosystems".

*   **Columnar Transposition:**
    *   **Concept:** Writes the plaintext into a grid with a specified number of columns. The columns are then rearranged based on a keyword (alphabetically). The ciphertext is formed by reading down the columns in their new order.
    *   **Example:**
        *   Plaintext: THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG
        *   Keyword: SECRET (S=5, E=1, C=0, R=3, E=2, T=4 -> 012345) rearranged as CEE RST
        *   Grid (6 columns):
            ```
            T H E Q U I
            C K B R O W
            N F O X J U
            M P S O V E
            R T H E L A
            Z Y D O G X
            ```
        *   Reordered columns based on keyword:
            ```
            E E C R S T  (originally H U I Q T)
            K O R F O W
            F S X J U
            P V O E E
            T H E L A
            Y D O G X
            ```
        *   Ciphertext: HUIQT KOROW FSXJU PVEEE THELA YDGXX (reading down the columns)
    *   **Strength:** More secure than Rail Fence, but still vulnerable to cryptanalysis.

---

### 3.3 Cryptanalysis

The art and science of breaking encrypted messages without knowing the key.

*   **Methods:**
    *   **Brute-Force Attack:** Trying all possible keys until the correct one is found. Feasible for simple ciphers with small key spaces (e.g., Caesar cipher).
    *   **Frequency Analysis:** Exploiting the statistical properties of languages. In English, 'E' is the most common letter, followed by 'T', 'A', 'O', etc. By counting the frequency of characters in ciphertext, one can guess substitutions. This is effective against monoalphabetic substitution ciphers.
    *   **Kasiski Examination:** Used against polyalphabetic ciphers. It looks for repeating sequences of ciphertext letters, which are likely to correspond to repeating sequences of plaintext encrypted with the same part of the keyword. The distances between these repetitions can reveal the length of the keyword.
    *   **Index of Coincidence:** Another statistical measure used to determine the key length of polyalphabetic ciphers by comparing the observed frequency distribution of ciphertext characters with the expected distribution for random text and for monoalphabetic substitution.
*   **Reference:** Kizza, Chapter 4, "Cryptography and Cryptosystems"; Stallings (10/e), Chapter 2, "Symmetric Encryption and Message Confidentiality".

---

### 3.4 Symmetric Key Algorithms

Algorithms where the same key is used for both encryption and decryption.

*   **Characteristics:**
    *   **Speed:** Generally faster than asymmetric algorithms.
    *   **Key Distribution:** The biggest challenge is securely distributing the secret key to both parties.
    *   **Scalability:** For *n* users to communicate securely, *n*(n-1)/2 keys are needed, which becomes unmanageable for large networks.

*   **Feistel Networks:**
    *   **Concept:** A common structure used in many symmetric block ciphers, including DES. It's a recursive method that divides the plaintext block into two halves and uses a round function to mix them, with the key being used in each round.
    *   **How it works:**
        1.  The plaintext block is split into two equal halves, Left (L) and Right (R).
        2.  In each round:
            *   The right half (R) is passed through a function `f(R, K_i)` where `K_i` is the subkey for round `i`.
            *   The output of `f` is XORed with the left half (L).
            *   The result becomes the new right half.
            *   The original right half (R) becomes the new left half.
        3.  After multiple rounds, the left and right halves are swapped.
    *   **Advantage:** The same algorithm can be used for both encryption and decryption by reversing the order of the subkeys.
    *   **Reference:** Stallings (10/e), Chapter 3, "Advanced Encryption Standard and Other Symmetric Ciphers".

*   **Confusion & Diffusion:** These are two fundamental principles for designing strong block ciphers, popularized by Claude Shannon.
    *   **Confusion:** Aims to make the relationship between the ciphertext and the key as complex as possible. This is achieved by making each character of the ciphertext depend on several characters of the plaintext and the key in a complex way. Substitution operations are primarily responsible for confusion.
    *   **Diffusion:** Aims to spread the influence of a single plaintext bit over many ciphertext bits, and vice versa. This means that changing one bit in the plaintext should change many bits in the ciphertext. Transposition operations (or permutations in modern ciphers) are primarily responsible for diffusion.
    *   **Reference:** Kizza, Chapter 4, "Cryptography and Cryptosystems"; Stallings (10/e), Chapter 3, "Advanced Encryption Standard and Other Symmetric Ciphers".

*   **DES (Data Encryption Standard) Algorithm:**
    *   **Concept:** A symmetric block cipher developed by IBM and adopted by the U.S. government in 1977. It operates on 64-bit blocks of plaintext and uses a 56-bit key.
    *   **Structure:** It's a Feistel cipher with 16 rounds.
    *   **Key Size:** 56 bits (originally 64 bits, but 8 were for parity checking).
    *   **Block Size:** 64 bits.
    *   **Rounds:** 16 rounds.
    *   **Strengths (at its time):** Considered secure when it was introduced due to its complex structure and the secrecy of its design (initially).
    *   **Weaknesses:**
        *   **Key Size:** The 56-bit key is now considered too short and vulnerable to brute-force attacks with modern computing power.
        *   **Block Size:** The 64-bit block size is also relatively small, making it susceptible to certain attacks like birthday attacks.
    *   **Reference:** Stallings (10/e), Chapter 3, "Advanced Encryption Standard and Other Symmetric Ciphers"; Kizza, Chapter 4, "Cryptography and Cryptosystems".

*   **Strength of DES:**
    *   The primary weakness is its short key length (56 bits). A brute-force attack can be mounted by trying all $2^{56}$ possible keys. While this was computationally intensive in the 1970s and 80s, it's now feasible with specialized hardware (e.g., EFF's Deep Crack machine).
    *   The 64-bit block size can be vulnerable to meet-in-the-middle attacks, though this is less critical than the key size issue.

*   **Comparison & Important Features of Modern Symmetric Key Algorithms (e.g., AES):**
    *   **AES (Advanced Encryption Standard):** The current standard, replacing DES.
        *   **Key Sizes:** 128, 192, or 256 bits.
        *   **Block Size:** 128 bits.
        *   **Structure:** Not a Feistel network; it's a substitution-permutation network.
        *   **Rounds:** Varies based on key size (10, 12, or 14 rounds).
        *   **Strengths:** Much stronger key lengths, larger block sizes, proven security against known attacks, faster on modern hardware.
        *   **Features:** Uses SubBytes (S-box substitution for confusion), ShiftRows (permutation for diffusion), MixColumns (diffusion), and AddRoundKey (key XOR).
    *   **Other Modern Algorithms:** Triple DES (3DES - a workaround for DES's short key, but slower), Blowfish, Twofish, IDEA, RC4 (stream cipher).
    *   **Key Differences from DES:** Longer key lengths, larger block sizes, different underlying mathematical structures (e.g., non-Feistel for AES), and improved resistance to known cryptanalytic attacks.
    *   **Reference:** Stallings (10/e), Chapter 3, "Advanced Encryption Standard and Other Symmetric Ciphers".

---

### 3.5 Public Key Cryptosystems (Asymmetric Cryptography)

In asymmetric cryptography, two mathematically related keys are used: a public key and a private key.

*   **Key Pair:**
    *   **Public Key:** Can be freely distributed. Used for encryption or verifying digital signatures.
    *   **Private Key:** Must be kept secret by its owner. Used for decryption or creating digital signatures.
*   **How it Works:**
    *   **Confidentiality:** Alice uses Bob's public key to encrypt a message. Only Bob, with his corresponding private key, can decrypt it.
    *   **Authentication/Integrity:** Bob uses his private key to sign a message. Anyone can use Bob's public key to verify that the signature is indeed from Bob and that the message hasn't been altered.
*   **Advantages over Symmetric Key Cryptography:**
    *   **Key Distribution:** Solves the key distribution problem of symmetric cryptography. Public keys can be shared openly.
    *   **Digital Signatures:** Enables digital signatures, which provide authentication, non-repudiation, and integrity.
*   **Disadvantages:**
    *   **Speed:** Significantly slower than symmetric algorithms.
    *   **Key Size:** Generally requires much larger key sizes to achieve comparable security levels to symmetric algorithms.
*   **Reference:** Kizza, Chapter 5, "Public-Key Cryptography and Digital Signatures"; Stallings (10/e), Chapter 9, "Public-Key Cryptography and RSA".

---

#### 3.5.1 The RSA Algorithm

One of the first and most widely used public-key cryptosystems.

*   **Concept:** Based on the mathematical difficulty of factoring large prime numbers.
*   **Key Generation:**
    1.  **Choose two large, distinct prime numbers, *p* and *q*.**
    2.  **Calculate *n = p * q*.** This *n* is the modulus for both the public and private keys.
    3.  **Calculate Euler's totient function, $\phi(n) = (p-1)(q-1)$.**
    4.  **Choose an integer *e* such that $1 < e < \phi(n)$ and gcd(*e*, $\phi(n)$) = 1.** *e* is the public exponent.
    5.  **Calculate *d*, the modular multiplicative inverse of *e* modulo $\phi(n)$:** $d \equiv e^{-1} \pmod{\phi(n)}$. This means $(d \times e) \pmod{\phi(n)} = 1$. *d* is the private exponent.
*   **Public Key:** (e, n)
*   **Private Key:** (d, n)
*   **Encryption:** To encrypt a message *M* (represented as an integer $0 \le M < n$), the ciphertext *C* is calculated as:
    $C = M^e \pmod n$
*   **Decryption:** To decrypt the ciphertext *C*, the original message *M* is recovered as:
    $M = C^d \pmod n$
*   **Security:** Relies on the difficulty of factoring *n* to find *p* and *q*, which is needed to compute *d* from *e*.
*   **Example:**
    *   Choose $p = 7$, $q = 11$.
    *   $n = p \times q = 7 \times 11 = 77$.
    *   $\phi(n) = (7-1)(11-1) = 6 \times 10 = 60$.
    *   Choose $e = 17$ (since gcd(17, 60) = 1).
    *   Find $d$: $d \times 17 \equiv 1 \pmod{60}$. By testing or using the extended Euclidean algorithm, we find $d = 53$ (since $53 \times 17 = 901$, and $901 \pmod{60} = 1$).
    *   **Public Key:** (17, 77)
    *   **Private Key:** (53, 77)
    *   Let the message $M = 10$.
    *   **Encryption:** $C = 10^{17} \pmod{77}$.
        *   $10^2 = 100 \equiv 23 \pmod{77}$
        *   $10^4 \equiv 23^2 = 529 \equiv 529 - 6 \times 77 = 529 - 462 = 67 \pmod{77}$
        *   $10^8 \equiv 67^2 = 4489 \equiv 4489 - 58 \times 77 = 4489 - 4466 = 23 \pmod{77}$
        *   $10^{16} \equiv 23^2 = 529 \equiv 67 \pmod{77}$
        *   $10^{17} = 10^{16} \times 10^1 \equiv 67 \times 10 = 670 \equiv 670 - 8 \times 77 = 670 - 616 = 54 \pmod{77}$.
        *   So, $C = 54$.
    *   **Decryption:** $M = 54^{53} \pmod{77}$.
        *   This requires modular exponentiation (e.g., using the square-and-multiply algorithm).
        *   The result will be $10$.
*   **Reference:** Stallings (10/e), Chapter 9, "Public-Key Cryptography and RSA"; Kizza, Chapter 5, "Public-Key Cryptography and Digital Signatures".

---

#### 3.5.2 Diffie Hellman Key Exchange

An algorithm for securely exchanging cryptographic keys between two parties over a public channel. It allows them to establish a shared secret key that can then be used for symmetric encryption.

*   **Concept:** Based on the difficulty of the discrete logarithm problem.
*   **Public Parameters:** Two numbers are agreed upon publicly:
    *   *p*: A large prime number.
    *   *g*: A primitive root modulo *p* (generator).
*   **Key Exchange Process:**
    1.  **Alice:**
        *   Chooses a private random integer *a*.
        *   Computes her public value $A = g^a \pmod p$.
        *   Sends *A* to Bob.
    2.  **Bob:**
        *   Chooses a private random integer *b*.
        *   Computes his public value $B = g^b \pmod p$.
        *   Sends *B* to Alice.
    3.  **Alice:**
        *   Receives *B* from Bob.
        *   Computes the shared secret key: $S = B^a \pmod p = (g^b)^a \pmod p = g^{ba} \pmod p$.
    4.  **Bob:**
        *   Receives *A* from Alice.
        *   Computes the shared secret key: $S = A^b \pmod p = (g^a)^b \pmod p = g^{ab} \pmod p$.
*   **Result:** Both Alice and Bob arrive at the same shared secret key *S*.
*   **Security:** An eavesdropper (Eve) can see *p*, *g*, *A*, and *B*. To find *S*, Eve would need to compute *a* from *A* (i.e., solve $g^a \pmod p = A$) or *b* from *B* (i.e., solve $g^b \pmod p = B$). This is the discrete logarithm problem, which is computationally hard for large primes.
*   **Limitation:** Diffie-Hellman itself does not provide authentication. It's vulnerable to a "man-in-the-middle" attack where an attacker intercepts the public values and establishes separate shared secrets with each party. This is often mitigated by using digital signatures to authenticate the public values.
*   **Reference:** Stallings (10/e), Chapter 9, "Public-Key Cryptography and RSA"; Kizza, Chapter 5, "Public-Key Cryptography and Digital Signatures".

---

#### 3.5.3 Comparison of RSA & DES

| Feature               | DES (Symmetric)                                      | RSA (Asymmetric)                                           |
| :-------------------- | :--------------------------------------------------- | :--------------------------------------------------------- |
| **Key Usage**         | Same key for encryption and decryption.              | Different keys (public for encryption, private for decryption). |
| **Key Length**        | Short (56 bits, now considered insecure).            | Long (e.g., 2048, 3072 bits or more).                      |
| **Speed**             | Fast.                                                | Slow.                                                      |
| **Key Distribution**  | Difficult (requires secure out-of-band channel).     | Easy (public key can be shared openly).                    |
| **Applications**      | Bulk data encryption (files, network traffic).       | Key exchange, digital signatures, small data encryption.   |
| **Security Basis**    | Complex mathematical operations, diffusion/confusion. | Difficulty of factoring large prime numbers.               |
| **Primary Purpose**   | Confidentiality.                                     | Confidentiality, Authentication, Integrity, Non-repudiation. |
| **Man-in-the-Middle** | Not directly vulnerable (key distribution is the issue). | Vulnerable without authentication of public keys.          |
| **Reference**         | Stallings (10/e) Ch 3, Kizza Ch 4                    | Stallings (10/e) Ch 9, Kizza Ch 5                          |

**Important Note:** In practice, hybrid cryptosystems are commonly used. A symmetric cipher (like AES) is used for bulk data encryption due to its speed, while a public-key cryptosystem (like RSA) is used to securely exchange the symmetric key.

---

### 3.6 Message Authentication & Hash Functions

Ensuring that a message hasn't been altered during transit and that it originated from the claimed sender.

*   **Message Authentication:** The process of verifying that a message comes from the claimed source and has not been altered.
*   **Hash Functions:**
    *   **Concept:** A mathematical algorithm that maps data of arbitrary size to data of fixed size (a hash value or digest).
    *   **Properties of a Cryptographic Hash Function:**
        1.  **Pre-image Resistance (One-way):** Given a hash value *h*, it should be computationally infeasible to find a message *m* such that $H(m) = h$.
        2.  **Second Pre-image Resistance:** Given a message *m1*, it should be computationally infeasible to find a *different* message *m2* such that $H(m1) = H(m2)$.
        3.  **Collision Resistance:** It should be computationally infeasible to find two *different* messages *m1* and *m2* such that $H(m1) = H(m2)$.
    *   **Examples:** MD5 (now considered insecure due to collision vulnerabilities), SHA-1 (also weakened), SHA-256, SHA-3.
    *   **Use in Authentication:**
        *   **Message Authentication Code (MAC):** A small block of information that is appended to a message to confirm its authenticity and integrity. A MAC is generated using a secret key and the message.
            *   **How:** $MAC = H(K || M)$, where *K* is a secret key and *M* is the message. The recipient, knowing *K*, recomputes the MAC and compares it.
        *   **HMAC (Hash-based Message Authentication Code):** A specific construction of a MAC using cryptographic hash functions.
    *   **Reference:** Stallings (10/e), Chapter 10, "Message Authentication and Hash Functions"; Kizza, Chapter 5, "Public-Key Cryptography and Digital Signatures".

---

### 3.7 Digital Signature

A cryptographic mechanism used to authenticate the origin and integrity of digital documents or messages.

*   **Concept:** Similar to a handwritten signature, but verifiable by anyone with the sender's public key. It provides:
    *   **Authentication:** Proves the origin of the message.
    *   **Integrity:** Ensures the message has not been tampered with.
    *   **Non-repudiation:** Prevents the sender from denying they sent the message.
*   **How it Works:**
    1.  **Signing:**
        *   The sender (Alice) computes the hash of the message: $h = H(M)$.
        *   Alice then encrypts this hash value using her **private key**: $S = E_{private}(h)$. This encrypted hash is the digital signature.
        *   The signature *S* is appended to the original message *M* (or sent separately).
    2.  **Verification:**
        *   The recipient (Bob) receives the message *M* and the signature *S*.
        *   Bob computes the hash of the received message: $h' = H(M)$.
        *   Bob decrypts the signature *S* using Alice's **public key**: $h_{verified} = D_{public}(S)$.
        *   Bob compares $h'$ and $h_{verified}$.
            *   If $h' = h_{verified}$, the signature is valid. This means the message came from Alice (authentication) and hasn't been altered (integrity).
            *   If $h' \ne h_{verified}$, the signature is invalid.
*   **Example:** Imagine sending a contract. Alice hashes the contract, encrypts the hash with her private key, and sends the contract along with the encrypted hash. Bob receives both, hashes the contract again, and decrypts the encrypted hash using Alice's public key. If the hashes match, the contract is authentic and unaltered.
*   **Reference:** Stallings (10/e), Chapter 10, "Message Authentication and Hash Functions"; Kizza, Chapter 5, "Public-Key Cryptography and Digital Signatures".

---

### Course Outcome Alignment:

*   **CO1 (Attacks, Threats):** Understanding of cryptanalysis techniques is essential for understanding how attacks work. Weak ciphers are vulnerable.
*   **CO2 (Security Services/Mechanisms):** Cryptography is a core mechanism. Public key cryptosystems, hash functions, and digital signatures directly provide confidentiality, authentication, integrity, and non-repudiation.
*   **CO3 (Cryptography Principles):** This entire module is dedicated to this outcome, covering encryption, ciphers, symmetric (DES, AES), public key (RSA, Diffie-Hellman), authentication, hash functions, and digital signatures.
*   **CO4 (Cybercrime, Laws):** While not directly covered in these notes, the cryptographic tools discussed are fundamental for preventing and investigating cybercrimes.

---

### Important Points to Remember:

*   **Symmetric vs. Asymmetric:** Understand their trade-offs (speed vs. key management/features).
*   **Key Distribution:** The major challenge for symmetric cryptography.
*   **RSA:** Relies on the difficulty of integer factorization.
*   **Diffie-Hellman:** Relies on the difficulty of the discrete logarithm problem, primarily for key exchange.
*   **Hash Functions:** Crucial for integrity and as building blocks for MACs and digital signatures. They are one-way and collision-resistant.
*   **Digital Signatures:** Provide authentication, integrity, and non-repudiation using public-key cryptography and hashing.
*   **Confusion and Diffusion:** Key principles for strong block ciphers.
*   **DES Vulnerability:** Its short key length is its main weakness.
*   **AES:** The modern standard for symmetric encryption.

---

### Practice Questions & Exercises:

**Multiple Choice Questions:**

1.  Which of the following is a symmetric encryption algorithm?
    a) RSA
    b) Diffie-Hellman
    c) DES
    d) SHA-256
    *   **Answer: c) DES**

2.  The primary security challenge with symmetric encryption is:
    a) The slowness of encryption/decryption.
    b) The difficulty of key distribution.
    c) The vulnerability to brute-force attacks.
    d) The lack of integrity assurance.
    *   **Answer: b) The difficulty of key distribution.**

3.  Which cryptographic concept aims to spread the influence of a single plaintext bit over many ciphertext bits?
    a) Confusion
    b) Diffusion
    c) Hashing
    d) Substitution
    *   **Answer: b) Diffusion**

4.  In RSA, the public key consists of:
    a) (d, n)
    b) (e, d)
    c) (e, n)
    d) (p, q)
    *   **Answer: c) (e, n)**

5.  Which of the following properties should a cryptographic hash function possess?
    a) Pre-image resistance
    b) Collision resistance
    c) Second pre-image resistance
    d) All of the above
    *   **Answer: d) All of the above**

**Short Answer Questions:**

1.  Explain the difference between a substitution cipher and a transposition cipher. Provide an example of each.
    *   **Answer:** A substitution cipher replaces plaintext characters with ciphertext characters (e.g., Caesar cipher). A transposition cipher rearranges the plaintext characters without changing them (e.g., Rail Fence cipher).

2.  What is the fundamental difference between symmetric and asymmetric cryptography regarding key usage?
    *   **Answer:** Symmetric uses the same key for both encryption and decryption, while asymmetric uses a pair of keys – one for encryption (public) and one for decryption (private).

3.  Describe the main purpose of a digital signature. What three security services does it provide?
    *   **Answer:** A digital signature provides authentication (origin), integrity (no tampering), and non-repudiation (sender cannot deny).

4.  Why is DES no longer considered secure for most applications today?
    *   **Answer:** Its 56-bit key is too short and vulnerable to brute-force attacks with modern computing power.

5.  Briefly explain how Diffie-Hellman key exchange works to establish a shared secret.
    *   **Answer:** Two parties exchange public values derived from their private keys and publicly known parameters (p, g). By raising the other's public value to their own private exponent modulo p, they arrive at the same shared secret.

**Practical Exercise (Conceptual):**

Imagine Alice wants to send a secret message "HELLO" to Bob using the Caesar cipher with a shift of +3.
a) Encrypt "HELLO" using this cipher.
b) If Bob receives the ciphertext, how would he decrypt it?
    *   **Answer:**
        a) Encryption: H(+3)=K, E(+3)=H, L(+3)=O, L(+3)=O, O(+3)=R. Ciphertext: KHOOR.
        b) Decryption: Bob would apply a shift of -3 (or +23) to KHOOR. K(-3)=H, H(-3)=E, O(-3)=L, O(-3)=L, R(-3)=O. Plaintext: HELLO.

---
*(Note: Content from textbooks and reference books is synthesized and presented in a way that reflects their principles, not direct quotes. Specific page numbers are not provided as this is a summary for study.)*

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
