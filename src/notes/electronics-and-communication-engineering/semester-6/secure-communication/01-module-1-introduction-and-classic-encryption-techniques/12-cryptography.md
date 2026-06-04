---
title: "Cryptography"
subject: "SECURE COMMUNICATION"
module: "Module 1: Introduction and Classic Encryption Techniques:"
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c460b09ce205780fee6f"
status: "completed"
scrapedAt: "2026-05-23T18:02:48.991Z"
---
# SECURE COMMUNICATION

## Module 1: Introduction and Classic Encryption Techniques

### Topic: Cryptography

This module provides an introduction to cryptography, the science of secret writing, and explores foundational concepts and classic encryption techniques. We will delve into the principles of secure communication and lay the groundwork for understanding modern cryptographic systems.

---

### Learning Outcomes:

*   Understand the fundamental concepts of cryptography, including its goals and historical context.
*   Explore basic terminology and the building blocks of cryptographic systems.
*   Analyze and understand the mechanics of classic encryption algorithms.
*   Recognize the limitations of classic encryption techniques and the need for more advanced methods.

---

### Course Outcomes Alignment:

This topic directly contributes to:

*   **CO1: Explain network security services and mechanisms and the types of attacks they are designed for and apply the concepts of modular arithmetic, Euclidean algorithm, polynomial arithmetic.** (Knowledge Level: K3) - While this module introduces cryptography broadly, the understanding of how algorithms work will be essential for applying mathematical concepts later.
*   **CO2: Illustrate the principles of modern symmetric ciphers like Data Encryption Standard and Advanced Encryption Standard.** (Knowledge Level: K3) - This module provides the foundational understanding of encryption that is necessary to appreciate the evolution to modern symmetric ciphers.
*   **CO3: Outline the concepts of public key cryptography, RSA algorithm, key distribution, and management for public key systems.** (Knowledge Level: K2) - The basic concepts of confidentiality and encryption introduced here are precursors to understanding public key cryptography.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### Textbooks & Reference Books Mentioned:

*   **Primary:** Cryptography and Network Security: Principles and Practice by William Stallings (4th Edition, 2006)
*   **References:** (As listed in the prompt)

---

## 1. Introduction to Cryptography

Cryptography is the art and science of transforming information to make it secure and immune to unauthorized access or alteration. It plays a pivotal role in ensuring the confidentiality, integrity, authentication, and non-repudiation of communications.

### 1.1. Core Goals of Cryptography

*   **Confidentiality:** Ensuring that information is accessible only to authorized parties. Prevents eavesdropping.
    *   *Example:* Sending a secret message that only the intended recipient can read.
*   **Integrity:** Ensuring that information has not been altered in transit or storage. Prevents modification.
    *   *Example:* Verifying that a received document is the exact same as the one sent.
*   **Authentication:** Verifying the identity of a sender or receiver. Prevents impersonation.
    *   *Example:* Confirming that an email truly came from the person it claims to be from.
*   **Non-repudiation:** Ensuring that a party cannot deny having sent or received a message. Prevents denial.
    *   *Example:* Proving that a transaction was indeed authorized by a specific user.

### 1.2. Basic Cryptographic Terminology

*   **Plaintext:** The original, readable message.
    *   *Example:* "Hello, how are you?"
*   **Ciphertext:** The scrambled, unreadable message produced by encryption.
    *   *Example:* "Khoor, lyh brx?" (after Caesar cipher)
*   **Encryption:** The process of converting plaintext into ciphertext.
*   **Decryption:** The process of converting ciphertext back into plaintext.
*   **Algorithm (or Cipher):** The set of rules or steps used for encryption and decryption.
*   **Key:** A piece of secret information used by the algorithm to encrypt and decrypt data. The security of cryptographic systems relies on the secrecy of the key, not the algorithm.

### 1.3. A Two-Party Cryptographic Communication Model

Imagine two parties, Alice and Bob, wanting to communicate securely over an insecure channel (like the internet).

```
+---------+       Insecure Channel       +---------+
| Alice   | <--------------------------> | Bob     |
+---------+                              +---------+
  (Sender)                                 (Receiver)
     |                                       ^
     | Plaintext (M)                         | Ciphertext (C)
     v Encrypt (E) with Key (K)              | Decrypt (D) with Key (K)
+---------+                               +---------+
| Ciphertext (C)                          | Plaintext (M)
+---------+                               +---------+
```

*   **Alice** encrypts her plaintext message `M` using an encryption algorithm `E` and a secret key `K` to produce ciphertext `C`.
*   **Bob** receives the ciphertext `C` and uses a decryption algorithm `D` and the same secret key `K` to recover the original plaintext `M`.

**Important Point (Stallings, Chapter 1):** The security of the system relies on the secrecy of the key. The algorithm itself can be public.

---

## 2. Classic Encryption Techniques

These are historical methods that, while largely insecure against modern cryptanalysis, provide valuable insights into cryptographic principles.

### 2.1. Substitution Ciphers

In substitution ciphers, each unit of plaintext (typically a letter) is replaced by a corresponding ciphertext unit.

#### 2.1.1. Caesar Cipher (Shift Cipher)

*   **Description:** A simple substitution cipher where each letter in the plaintext is shifted a fixed number of positions down or up the alphabet.
*   **Algorithm:**
    *   **Encryption:** $C = (P + k) \pmod{26}$, where $P$ is the numerical value of the plaintext letter (A=0, B=1, ..., Z=25), $C$ is the numerical value of the ciphertext letter, and $k$ is the shift key (an integer between 0 and 25).
    *   **Decryption:** $P = (C - k) \pmod{26}$
*   **Example:**
    *   Plaintext: "HELLO"
    *   Key: $k = 3$ (Shift right by 3)
    *   H (7) -> K (10)
    *   E (4) -> H (7)
    *   L (11) -> O (14)
    *   L (11) -> O (14)
    *   O (14) -> R (17)
    *   Ciphertext: "KHOOR"
*   **Cryptanalysis:** There are only 25 possible keys (1 to 25). A brute-force attack (trying all keys) can easily break this cipher.
*   **Reference:** Stallings often uses the Caesar cipher as a first example to introduce substitution.

#### 2.1.2. General Substitution Cipher

*   **Description:** Each letter of the alphabet is mapped to a different letter, creating a more complex substitution. The mapping is arbitrary.
*   **Algorithm:** A permutation of the alphabet is used as the key.
    *   *Example Key:* A->Q, B->W, C->E, ..., Z->P
*   **Example:**
    *   Plaintext: "ATTACK AT DAWN"
    *   Key: (A complex, random permutation of the alphabet)
    *   Ciphertext: (The corresponding encrypted text)
*   **Cryptanalysis:**
    *   **Brute-force:** $26!$ (26 factorial) possible keys, which is computationally infeasible for humans but potentially vulnerable to computers.
    *   **Frequency Analysis:** English language has a known letter frequency distribution (e.g., E is the most common, followed by T, A, O, I, N, S, H, R). By analyzing the frequency of letters in the ciphertext, one can deduce the most likely substitutions.
        *   Most frequent letter in ciphertext likely maps to 'E'.
        *   Second most frequent maps to 'T', and so on.
*   **Reference:** Stallings discusses frequency analysis in detail as a method to break general substitution ciphers. This is a key concept for understanding why simple ciphers are weak.

#### 2.1.3. Polyalphabetic Substitution Ciphers (e.g., Vigenere Cipher)

*   **Description:** Uses multiple alphabets for substitution, making it more resistant to frequency analysis. The same plaintext letter can be encrypted to different ciphertext letters.
*   **Vigenere Cipher:**
    *   **Algorithm:** Uses a keyword to determine the shift for each plaintext letter. The keyword is repeated to match the length of the plaintext.
    *   **Encryption:** $C_i = (P_i + K_i) \pmod{26}$, where $P_i$ is the $i$-th plaintext letter, $K_i$ is the $i$-th letter of the repeating keyword (converted to numerical value), and $C_i$ is the $i$-th ciphertext letter.
    *   **Decryption:** $P_i = (C_i - K_i) \pmod{26}$
    *   **Key:** A keyword (e.g., "KEY"). The plaintext "ATTACKATDAWN" encrypted with "KEY" would be:
        ```
        Plaintext:  A T T A C K A T D A W N
        Keyword:    K E Y K E Y K E Y K E Y
        Ciphertext: K W F P J Q C W K E N N
        ```
        (A(0)+K(10)=K(10), T(19)+E(4)=X(23) -> Wait, example is wrong. Let's re-calculate)
        *   A(0) + K(10) = K(10)
        *   T(19) + E(4) = X(23)
        *   T(19) + Y(24) = R(17) (19+24 = 43; 43 mod 26 = 17)
        *   A(0) + K(10) = K(10)
        *   C(2) + E(4) = G(6)
        *   K(10) + Y(24) = M(12) (10+24 = 34; 34 mod 26 = 8) -> Wait, still off. Let's re-read Vigenere.
        *   Ah, it's commonly presented with a Vigenere table. Let's use numerical values and modulo:
            Plaintext:  A(0) T(19) T(19) A(0) C(2) K(10) A(0) T(19) D(3) A(0) W(22) N(13)
            Keyword:    K(10) E(4) Y(24) K(10) E(4) Y(24) K(10) E(4) Y(24) K(10) E(4) Y(24)
            Sum:        10    23    43    10    6     34    10    23    27    10    26    37
            Ciphertext: K(10) X(23) R(17) K(10) G(6)  M(12) K(10) X(23) B(1)  K(10) A(0)  L(11)

        *   **Corrected Ciphertext:** "KXRGKMKXBKAL"

    *   **Cryptanalysis:**
        *   **Kasiski Examination:** Identifies repeating sequences in the ciphertext. The distance between repetitions can help determine the length of the keyword.
        *   **Index of Coincidence:** Measures the likelihood of two randomly chosen letters in a text being the same. This can help determine if the text is encrypted with a monoalphabetic or polyalphabetic cipher, and estimate the key length.
*   **Reference:** Stallings describes Vigenere as a significant improvement over monoalphabetic ciphers, and the methods for breaking it.

### 2.2. Transposition Ciphers

In transposition ciphers, the letters of the plaintext are rearranged, not substituted.

#### 2.2.1. Rail Fence Cipher

*   **Description:** Plaintext is written diagonally downwards on successive "rails" and then read off row by row.
*   **Algorithm:**
    *   **Encryption:** Write the plaintext in a zig-zag pattern across a specified number of rows (rails). Then, read the letters row by row.
    *   **Example:**
        *   Plaintext: "WE ARE DISCOVERED FLEE AT ONCE"
        *   Number of Rails: 3
        *   Writing pattern:
            ```
            W . . . E . . . C . . . R . . . L . . . E
            . E . R . D . S . O . E . E . F . E . A . O . C .
            . . A . . . I . . . V . . . D . . . E . . . T . . . N . . .
            ```
        *   Reading row by row:
            *   Row 1: "WECRL E"
            *   Row 2: "ERDSOEEFEAOC"
            *   Row 3: "AIVDET N"
        *   Ciphertext: "WECRL EERDSOEEFEAOC AIVDET N" (Spaces often removed)
*   **Cryptanalysis:** Brute-force by trying different numbers of rails. Frequency analysis can also be used on segments.
*   **Reference:** This is a classic example of transposition often found in introductory cryptography texts like Stallings.

#### 2.2.2. Columnar Transposition Cipher

*   **Description:** Plaintext is written into a grid (matrix) row by row, and the columns are then rearranged according to a keyword.
*   **Algorithm:**
    *   **Encryption:**
        1.  Determine a keyword.
        2.  Number the columns based on the alphabetical order of the letters in the keyword.
        3.  Write the plaintext into a grid, filling row by row. Pad with dummy characters if necessary.
        4.  Read the ciphertext column by column, in the order determined by the keyword numbering.
    *   **Example:**
        *   Plaintext: "MEET ME AT THE SECRET MEETING"
        *   Keyword: "CIPHER" (C=2, I=5, P=6, H=4, E=3, R=1 -> Order: H, E, C, I, P, R -> 4, 3, 2, 5, 6, 1, but usually sorted alphabetically: C(1), E(2), H(3), I(4), P(5), R(6) -> 3, 5, 1, 4, 2, 6)
        *   Let's use the alphabetical order of the keyword letters for column permutation. Keyword: CIPHER
            C I P H E R
            1 2 3 4 5 6  <- Order based on alphabet
            C=3, I=4, P=5, H=2, E=1, R=6
            Order of reading columns: 1, 2, 3, 4, 5, 6 (based on E H C I P R)

            Let's use a simpler keyword for ordering: "ZEBRA"
            Z E B R A
            5 2 1 4 3  <- Alphabetical order: A(1), B(2), E(3), R(4), Z(5)
            So, columns are read in order: A, E, B, R, Z
            Column order: 3, 2, 1, 4, 5

            Plaintext: MEET ME AT THE SECRET MEETING (No spaces for simplicity)
            MEETM
            EATTH
            ESECR
            EETME
            TING. (Padding with '.')

            Grid:
            Z E B R A
            5 2 1 4 3
            M E E T M
            E A T T H
            E S E C R
            E E T M E
            T I N G .

            Reading columns in order 3, 2, 1, 4, 5:
            Col 3 (B): ETEN
            Col 2 (E): EAS EI
            Col 1 (A): MEETT
            Col 4 (R): TTMG
            Col 5 (Z): MH.RE

            Ciphertext: ETEN EAS EIMEETT TTMG MH.RE

    *   **Cryptanalysis:** Requires guessing the keyword length and then performing a columnar transposition analysis.
*   **Reference:** Stallings covers columnar transposition as a more complex transposition cipher.

---

## 3. Key Concepts and Building Blocks for Modern Cryptography

While classic ciphers are simple, they highlight the need for more robust techniques. Modern cryptography relies on mathematical principles.

### 3.1. Modular Arithmetic

*   **Definition:** A system of arithmetic for integers, where numbers "wrap around" upon reaching a certain value—the modulus.
*   **Notation:** $a \equiv b \pmod{m}$ means that $a$ and $b$ have the same remainder when divided by $m$. Equivalently, $m$ divides $(a-b)$.
*   **Operations:**
    *   **Addition:** $(a + b) \pmod{m}$
    *   **Subtraction:** $(a - b) \pmod{m}$
    *   **Multiplication:** $(a \times b) \pmod{m}$
    *   **Exponentiation:** $(a^b) \pmod{m}$
*   **Example:**
    *   $17 \equiv 5 \pmod{12}$ (because $17 - 5 = 12$, which is divisible by 12)
    *   $(15 + 8) \pmod{10} = 23 \pmod{10} = 3$
    *   $(7 \times 6) \pmod{5} = 42 \pmod{5} = 2$
    *   $(3^4) \pmod{5} = 81 \pmod{5} = 1$
*   **Relevance to CO1:** Crucial for understanding many modern algorithms like RSA and Diffie-Hellman. It forms the basis for operations within finite fields and groups used in cryptography.
*   **Reference:** Stallings (Chapter 3 - Number Theory) and Koeblitz's "A Course in Number Theory and Cryptography" are excellent resources for modular arithmetic.

### 3.2. Euclidean Algorithm

*   **Description:** An efficient method for computing the greatest common divisor (GCD) of two integers.
*   **Algorithm:**
    *   To find $\text{gcd}(a, b)$:
        1.  If $b=0$, then $\text{gcd}(a, b) = a$.
        2.  Otherwise, $\text{gcd}(a, b) = \text{gcd}(b, a \pmod{b})$.
*   **Example:** Find $\text{gcd}(48, 18)$
    *   $\text{gcd}(48, 18) = \text{gcd}(18, 48 \pmod{18}) = \text{gcd}(18, 12)$
    *   $\text{gcd}(18, 12) = \text{gcd}(12, 18 \pmod{12}) = \text{gcd}(12, 6)$
    *   $\text{gcd}(12, 6) = \text{gcd}(6, 12 \pmod{6}) = \text{gcd}(6, 0)$
    *   Therefore, $\text{gcd}(48, 18) = 6$.
*   **Extended Euclidean Algorithm:** Used to find the modular multiplicative inverse. If $\text{gcd}(a, m) = 1$, then there exists an integer $x$ such that $ax \equiv 1 \pmod{m}$. The extended Euclidean algorithm finds such an $x$.
*   **Relevance to CO1:** Essential for finding modular inverses, which are used in algorithms like RSA for decryption.
*   **Reference:** Stallings (Chapter 3), Koshy's "Elementary Number Theory with Applications" provide detailed explanations and examples.

### 3.3. Fermat's Little Theorem and Euler's Totient Theorem

These theorems are fundamental in number theory and have significant applications in cryptography, particularly in public-key systems.

#### 3.3.1. Fermat's Little Theorem

*   **Statement:** If $p$ is a prime number, then for any integer $a$ not divisible by $p$, we have $a^{p-1} \equiv 1 \pmod{p}$.
*   **Alternative Form:** For any integer $a$ and prime $p$, $a^p \equiv a \pmod{p}$.
*   **Example:** Let $p=7$ (prime).
    *   $a=3$: $3^{7-1} = 3^6 = 729$. $729 \pmod{7} = 1$.
    *   $a=5$: $5^{7-1} = 5^6 = 15625$. $15625 \pmod{7} = 1$.
*   **Relevance:** Forms the basis of some primality tests and is used in cryptography. It implies that powers of elements repeat modulo $p$.

#### 3.3.2. Euler's Totient Theorem (Euler's Theorem)

*   **Definition of Euler's Totient Function ($\phi(n)$):** Counts the number of positive integers up to a given integer $n$ that are relatively prime to $n$ (i.e., their GCD with $n$ is 1).
    *   If $p$ is prime, $\phi(p) = p-1$.
    *   If $n = p^k$ where $p$ is prime, $\phi(p^k) = p^k - p^{k-1} = p^k(1 - 1/p)$.
    *   If $n = pq$ where $p$ and $q$ are distinct primes, $\phi(n) = \phi(p)\phi(q) = (p-1)(q-1)$.
*   **Statement:** If $a$ and $n$ are relatively prime integers (i.e., $\text{gcd}(a, n) = 1$), then $a^{\phi(n)} \equiv 1 \pmod{n}$.
*   **Example:**
    *   Let $n=10$. The numbers relatively prime to 10 are 1, 3, 7, 9. So, $\phi(10) = 4$.
    *   Let $a=3$. $\text{gcd}(3, 10) = 1$.
    *   $3^{\phi(10)} = 3^4 = 81$.
    *   $81 \pmod{10} = 1$. So, $3^4 \equiv 1 \pmod{10}$.
*   **Relevance to CO1 & CO3:** Euler's theorem is fundamental to understanding the RSA algorithm. The security of RSA relies on the difficulty of factoring large numbers and computing $\phi(n)$.
*   **Reference:** Stallings (Chapter 3), Koeblitz, and Koshy offer comprehensive coverage.

---

## 4. Importance of Key Secrecy and Limitations of Classic Techniques

*   **Key Secrecy:** The entire security of symmetric and asymmetric cryptography hinges on keeping the keys secret. If a key is compromised, the system's security is broken.
*   **Limitations of Classic Ciphers:**
    *   **Vulnerability to Cryptanalysis:** Frequency analysis, brute-force attacks, and Kasiski examination easily break most classic ciphers.
    *   **Limited Key Space:** The number of possible keys is often too small, making brute-force attacks feasible.
    *   **Lack of Mathematical Foundation:** They don't leverage the computational hardness of mathematical problems, which is the basis of modern cryptography.
    *   **No Integrity/Authentication:** Classic ciphers primarily focus on confidentiality. They do not inherently provide mechanisms for message integrity or sender authentication.

---

## 5. Practice Questions and Exercises

**Instructions:** Attempt these questions to test your understanding of the module's concepts.

1.  **Question (Caesar Cipher):**
    Encrypt the message "ATTACK AT DAWN" using the Caesar cipher with a shift of $k=4$.
    *(Hint: Use the formula $C = (P + k) \pmod{26}$, where A=0, B=1, ... Z=25)*

    **Answer:**
    Plaintext: A(0) T(19) T(19) A(0) C(2) K(10) A(0) T(19) D(3) A(0) W(22) N(13)
    Key (k): 4
    Encryption:
    A(0) -> (0+4) mod 26 = 4 -> E
    T(19) -> (19+4) mod 26 = 23 -> X
    T(19) -> (19+4) mod 26 = 23 -> X
    A(0) -> (0+4) mod 26 = 4 -> E
    C(2) -> (2+4) mod 26 = 6 -> G
    K(10) -> (10+4) mod 26 = 14 -> O
    A(0) -> (0+4) mod 26 = 4 -> E
    T(19) -> (19+4) mod 26 = 23 -> X
    D(3) -> (3+4) mod 26 = 7 -> H
    A(0) -> (0+4) mod 26 = 4 -> E
    W(22) -> (22+4) mod 26 = 26 mod 26 = 0 -> A
    N(13) -> (13+4) mod 26 = 17 -> R
    Ciphertext: "EXXEGO EXHEAR"

2.  **Question (Vigenere Cipher):**
    Decrypt the ciphertext "LXFOPVEFRNHR" using the Vigenere cipher with the keyword "SECRET".
    *(Hint: Use the formula $P = (C - K) \pmod{26}$)*

    **Answer:**
    Ciphertext: L(11) X(23) F(5) O(14) P(15) V(21) E(4) F(5) R(17) N(13) H(7) R(17)
    Keyword:    S(18) E(4) C(2) R(17) E(4) T(19) S(18) E(4) C(2) R(17) E(4) T(19)
    Calculation (C - K) mod 26:
    L(11) - S(18) = -7 mod 26 = 19 -> T
    X(23) - E(4) = 19 mod 26 = 19 -> T
    F(5) - C(2) = 3 mod 26 = 3 -> D
    O(14) - R(17) = -3 mod 26 = 23 -> X
    P(15) - E(4) = 11 mod 26 = 11 -> L
    V(21) - T(19) = 2 mod 26 = 2 -> C
    E(4) - S(18) = -14 mod 26 = 12 -> M
    F(5) - E(4) = 1 mod 26 = 1 -> B
    R(17) - C(2) = 15 mod 26 = 15 -> P
    N(13) - R(17) = -4 mod 26 = 22 -> W
    H(7) - E(4) = 3 mod 26 = 3 -> D
    R(17) - T(19) = -2 mod 26 = 24 -> Y
    Plaintext: "TTDXLC MBPWDY" (This is likely incorrect, let's re-check standard Vigenere example. The provided ciphertext "LXFOPVEFRNHR" is often used for "ATTACK AT DAWN" with keyword "LEMON" in examples). Let's try to decrypt "ATTACK AT DAWN" with "LEMON".

    **Corrected Question/Answer using standard example:**
    Decrypt "LXFOPVEFRNHR" using keyword "LEMON".
    Ciphertext: L(11) X(23) F(5) O(14) P(15) V(21) E(4) F(5) R(17) N(13) H(7) R(17)
    Keyword:    L(11) E(4) M(12) O(14) N(13) L(11) E(4) M(12) O(14) N(13) L(11) E(4)
    Calculation (C - K) mod 26:
    L(11) - L(11) = 0 mod 26 = 0 -> A
    X(23) - E(4) = 19 mod 26 = 19 -> T
    F(5) - M(12) = -7 mod 26 = 19 -> T
    O(14) - O(14) = 0 mod 26 = 0 -> A
    P(15) - N(13) = 2 mod 26 = 2 -> C
    V(21) - L(11) = 10 mod 26 = 10 -> K
    E(4) - E(4) = 0 mod 26 = 0 -> A
    F(5) - M(12) = -7 mod 26 = 19 -> T
    R(17) - O(14) = 3 mod 26 = 3 -> D
    N(13) - N(13) = 0 mod 26 = 0 -> A
    H(7) - L(11) = -4 mod 26 = 22 -> W
    R(17) - E(4) = 13 mod 26 = 13 -> N
    Plaintext: "ATTACK AT DAWN"

3.  **Question (Modular Arithmetic):**
    Calculate $(17^{25}) \pmod{19}$.
    *(Hint: Since 19 is prime, you can use Fermat's Little Theorem. $17 \equiv -2 \pmod{19}$)*

    **Answer:**
    Using Fermat's Little Theorem: $a^{p-1} \equiv 1 \pmod{p}$ for prime $p$.
    Here, $p=19$. So, $a^{18} \equiv 1 \pmod{19}$ for any $a$ not divisible by 19.
    We want to calculate $17^{25} \pmod{19}$.
    $17^{25} = 17^{18} \times 17^7 \pmod{19}$
    Since $17^{18} \equiv 1 \pmod{19}$, this simplifies to $1 \times 17^7 \pmod{19}$.
    Now, we calculate $17^7 \pmod{19}$.
    It's easier to use $17 \equiv -2 \pmod{19}$.
    $17^7 \equiv (-2)^7 \pmod{19}$
    $(-2)^7 = -128$
    Now, we find $-128 \pmod{19}$.
    $-128 = -7 \times 19 + 5$
    So, $-128 \equiv 5 \pmod{19}$.
    Therefore, $17^{25} \equiv 5 \pmod{19}$.

4.  **Question (Euclidean Algorithm):**
    Find the greatest common divisor (GCD) of 105 and 24 using the Euclidean algorithm.

    **Answer:**
    $\text{gcd}(105, 24) = \text{gcd}(24, 105 \pmod{24})$
    $105 \div 24 = 4$ remainder $9$. So, $105 \pmod{24} = 9$.
    $\text{gcd}(105, 24) = \text{gcd}(24, 9)$
    $24 \div 9 = 2$ remainder $6$. So, $24 \pmod{9} = 6$.
    $\text{gcd}(24, 9) = \text{gcd}(9, 6)$
    $9 \div 6 = 1$ remainder $3$. So, $9 \pmod{6} = 3$.
    $\text{gcd}(9, 6) = \text{gcd}(6, 3)$
    $6 \div 3 = 2$ remainder $0$. So, $6 \pmod{3} = 0$.
    $\text{gcd}(6, 3) = \text{gcd}(3, 0)$
    The GCD is the last non-zero remainder, which is 3.
    Therefore, $\text{gcd}(105, 24) = 3$.

---

## 6. Important Points to Remember

*   **Cryptography's Goals:** Confidentiality, Integrity, Authentication, Non-repudiation.
*   **Key is Secret:** The security of a crypto system relies on the secrecy of the key, not the secrecy of the algorithm (Kerckhoffs's Principle).
*   **Classic Ciphers are Weak:** Caesar, Vigenere, and transposition ciphers are largely broken by modern techniques.
*   **Frequency Analysis:** A powerful tool against monoalphabetic substitution ciphers.
*   **Modular Arithmetic & Number Theory:** The foundation for modern, secure cryptographic algorithms.
*   **Euclidean Algorithm:** Essential for finding modular inverses.
*   **Fermat's Little Theorem & Euler's Theorem:** Key mathematical properties that underpin public-key cryptography.

---

This concludes Module 1: Introduction and Classic Encryption Techniques. The concepts covered here are foundational for understanding the more advanced cryptographic techniques discussed in subsequent modules.