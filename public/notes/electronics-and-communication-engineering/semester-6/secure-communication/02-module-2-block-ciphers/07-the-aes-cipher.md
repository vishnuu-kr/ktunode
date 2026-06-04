---
title: "The AES Cipher"
subject: "SECURE COMMUNICATION"
module: "Module 2: Block Ciphers: "
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c460b09ce205780fee7f"
status: "completed"
scrapedAt: "2026-05-23T18:03:02.644Z"
---
# SECURE COMMUNICATION: Module 2: Block Ciphers

## Topic: The Advanced Encryption Standard (AES) Cipher

### Introduction

The Advanced Encryption Standard (AES) is a widely adopted symmetric block cipher that has become the de facto standard for secure data encryption. It replaced the Data Encryption Standard (DES) due to DES's vulnerability to brute-force attacks given its relatively small key size. AES is based on the Rijndael cipher developed by Joan Daemen and Vincent Rijmen. This module will delve into the structure, operations, and security aspects of AES.

### Learning Outcomes

By the end of this topic, you should be able to:

*   Understand the historical context and motivation for developing AES.
*   Describe the structure of the AES cipher, including its block size and key sizes.
*   Explain the different rounds and transformations within the AES encryption process.
*   Illustrate the fundamental arithmetic operations used in AES, particularly in finite fields.
*   Analyze the security strengths and potential weaknesses of AES.

### Course Outcomes Alignment

This topic directly contributes to:

*   **CO2:** Illustrate the principles of modern symmetric ciphers like Data Encryption Standard and Advanced Encryption Standard. (Knowledge Level: K3)

### Key Concepts and Definitions

*   **Symmetric Key Cryptography:** A type of cryptography where the same key is used for both encryption and decryption.
*   **Block Cipher:** A symmetric key algorithm that operates on fixed-size blocks of data.
*   **Rijndael Cipher:** The cipher upon which AES is based.
*   **Finite Field (Galois Field):** A mathematical structure used in AES for its operations. Specifically, GF(2⁸).
*   **State:** A 4x4 matrix of bytes representing the intermediate data during AES encryption/decryption.
*   **Key Expansion:** The process of generating round keys from the original cipher key.
*   **Rounds:** The repetitive application of a set of transformations in AES.

---

### 1. Historical Context and Motivation for AES

*   **Need for a Replacement for DES:** The Data Encryption Standard (DES) was adopted in 1977 and had a 56-bit key, which became insufficient against the increasing computational power available for brute-force attacks.
*   **NIST's Call for Proposals (1997):** The U.S. National Institute of Standards and Technology (NIST) initiated a competition to find a successor to DES.
*   **Rijndael Selection (2001):** The Rijndael cipher, designed by Daemen and Rijmen, was selected as the AES.
*   **FIPS 197:** The official standard for AES was published as FIPS 197 in November 2001.

---

### 2. AES Structure and Parameters

*   **Block Size:** AES operates on fixed-size blocks of data. The block size for AES is **128 bits**.
*   **Key Sizes:** AES supports three key sizes:
    *   **128 bits (16 bytes)**
    *   **192 bits (24 bytes)**
    *   **256 bits (32 bytes)**
*   **Number of Rounds:** The number of rounds depends on the key size:
    *   128-bit key: **10 rounds**
    *   192-bit key: **12 rounds**
    *   256-bit key: **14 rounds**
*   **State Array:** The intermediate data is organized as a 4x4 byte matrix called the "state."
    *   The input plaintext block (128 bits) is copied into the state array column by column.
    *   The dimensions of the state are always 4 bytes (32 bits) wide.
    *   The number of columns depends on the block size (which is fixed at 128 bits, so always 4 columns).
    *   The number of rows depends on the key size, affecting the number of words in the key schedule.

**Important Point:** Regardless of the key size, the block size is always 128 bits. The key size determines the number of rounds and the complexity of the key schedule.

---

### 3. AES Encryption Process (High-Level Overview)

AES encryption can be described as a series of rounds. Each round (except the last) consists of four transformations. The initial round involves adding the round key, and the final round omits one transformation.

**Encryption Algorithm:**

1.  **Key Expansion:** The initial cipher key is expanded to generate a unique round key for each round, plus an initial round key.
2.  **Initial Round:**
    *   **AddRoundKey:** The input plaintext block is XORed with the initial round key.
3.  **Main Rounds (Nr-1 rounds):**
    *   **SubBytes:** A non-linear substitution step where each byte of the state is replaced with another byte. This is achieved using a substitution box (S-box).
    *   **ShiftRows:** A transposition step that cyclically shifts the rows of the state matrix.
    *   **MixColumns:** A mixing operation that combines the four bytes in each column of the state matrix.
    *   **AddRoundKey:** Each column of the state matrix is XORed with a corresponding column of the round key.
4.  **Final Round (Nr-th round):**
    *   **SubBytes:**
    *   **ShiftRows:**
    *   **AddRoundKey:** (No MixColumns in the final round)

**Number of Rounds (Nr):**

| Key Size (bits) | Key Size (words) | Nr |
| :-------------- | :--------------- | :- |
| 128             | 4                | 10 |
| 192             | 6                | 12 |
| 256             | 8                | 14 |

---

### 4. Detailed Description of AES Transformations

The core of AES lies in these four transformations. Understanding them requires some background in finite field arithmetic, specifically over GF(2⁸).

#### 4.1. SubBytes Transformation

*   **Purpose:** To provide non-linearity in the cipher, making it resistant to linear cryptanalysis.
*   **Operation:** Each byte in the state is independently replaced by another byte using a fixed lookup table, the **AES S-box**.
*   **S-box Construction:** The S-box is derived from the multiplicative inverse of the byte in the finite field GF(2⁸), followed by an affine transformation.
    *   **Finite Field GF(2⁸):** A field with 2⁸ = 256 elements. Arithmetic in this field is performed modulo an irreducible polynomial. The standard irreducible polynomial used in AES is $x^8 + x^4 + x^3 + x + 1$.
    *   **Multiplicative Inverse:** For a non-zero element $a$ in GF(2⁸), its multiplicative inverse $a⁻¹$ is the element such that $a \times a⁻¹ = 1$ in GF(2⁸).
    *   **Affine Transformation:** A linear transformation followed by translation. In AES, it's a matrix multiplication in GF(2⁸) followed by XORing with a constant vector.
    $S(x) = A \cdot x \oplus b$
    where $A$ is a 8x8 binary matrix and $b$ is a vector.
*   **Example (Simplified):** Let's consider a byte represented as $b_7 b_6 b_5 b_4 b_3 b_2 b_1 b_0$.
    1.  Find its multiplicative inverse in GF(2⁸). For example, the inverse of `02` (hex) in GF(2⁸) is `fe` (hex).
    2.  Apply the affine transformation:
        $y = Ax \oplus b$
        (This is a matrix-vector multiplication over GF(2) followed by XORing with a constant vector). The specific matrix $A$ and vector $b$ are defined in the AES standard.

**Important Point:** The S-box is a crucial component for the security of AES. It's designed to be highly non-linear.

#### 4.2. ShiftRows Transformation

*   **Purpose:** To permute bytes between columns, providing diffusion.
*   **Operation:** The rows of the state matrix are cyclically shifted to the left. The amount of shift depends on the row number.
    *   **Row 0:** No shift.
    *   **Row 1:** Shifted left by 1 byte position.
    *   **Row 2:** Shifted left by 2 byte positions.
    *   **Row 3:** Shifted left by 3 byte positions.
*   **Example:**
    Consider a state matrix:
    ```
    [ a0, a4, a8, a12 ]
    [ b1, b5, b9, b13 ]
    [ c2, c6, c10, c14 ]
    [ d3, d7, d11, d15 ]
    ```
    After ShiftRows:
    ```
    [ a0, a4, a8, a12 ]    (Row 0, no shift)
    [ b5, b9, b13, b1 ]    (Row 1, shifted left by 1)
    [ c10, c14, c2, c6 ]   (Row 2, shifted left by 2)
    [ d7, d11, d15, d3 ]   (Row 3, shifted left by 3)
    ```

**Important Point:** ShiftRows ensures that bytes from the same column in one round end up in different columns in the next round.

#### 4.3. MixColumns Transformation

*   **Purpose:** To mix the bytes within each column, providing diffusion.
*   **Operation:** Each column of the state is treated as a polynomial over GF(2⁸) and multiplied by a fixed polynomial. The multiplication is done modulo a specific polynomial: $x^4 + 1$.
    *   Let a column be represented as a vector:
        $\begin{pmatrix} s_{0,j} \\ s_{1,j} \\ s_{2,j} \\ s_{3,j} \end{pmatrix}$
    *   The transformation is:
        $\begin{pmatrix} s'_{0,j} \\ s'_{1,j} \\ s'_{2,j} \\ s'_{3,j} \end{pmatrix} = \begin{pmatrix} 03 & 01 & 01 & 02 \\ 02 & 03 & 01 & 01 \\ 01 & 02 & 03 & 01 \\ 01 & 01 & 02 & 03 \end{pmatrix} \begin{pmatrix} s_{0,j} \\ s_{1,j} \\ s_{2,j} \\ s_{3,j} \end{pmatrix}$
        (All calculations are performed in GF(2⁸)).
*   **Galois Field Arithmetic Example (Multiplication by 02):**
    Multiplying a byte by `02` in GF(2⁸) is equivalent to a left bit shift. If the most significant bit (MSB) is 1 before the shift, then XOR the result with the irreducible polynomial's coefficients (excluding the $x^8$ term).
    For example, multiplying `57` (hex) by `02` (hex):
    `57` = `0101 0111`
    Shift left: `1010 1110`
    The MSB was `0`, so no XOR with the irreducible polynomial is needed.
    Result: `AE` (hex)
*   **Galois Field Arithmetic Example (Multiplication by 03):**
    Multiplying a byte by `03` is equivalent to multiplying by `02` and then XORing with the original byte.
    `03` * `x` = (`02` * `x`) $\oplus$ `x`
    For example, `03` * `57` = (`02` * `57`) $\oplus$ `57`
    = `AE` $\oplus$ `57`
    `AE` = `1010 1110`
    `57` = `0101 0111`
    XOR: `1111 1001` = `F9` (hex)

**Important Point:** MixColumns ensures that each byte of the output depends on all four bytes of the input column. This provides strong diffusion.

#### 4.4. AddRoundKey Transformation

*   **Purpose:** To combine the state with the round key. This is the only step that directly uses the key material.
*   **Operation:** Each byte of the state is XORed with the corresponding byte of the round key.
    *   For a 128-bit block and key, each round key is also 128 bits (16 bytes).
    *   The state is a 4x4 matrix of bytes. The round key is also treated as a 4x4 matrix of bytes.
    *   The operation is a simple byte-wise XOR: $State_{i,j} \leftarrow State_{i,j} \oplus RoundKey_{i,j}$

**Important Point:** This is the simplest but most critical transformation as it introduces the key into the encryption process.

---

### 5. Key Expansion (Key Schedule)

*   **Purpose:** To generate a set of round keys from the original cipher key.
*   **Process:** The key expansion process takes the original cipher key and generates a larger set of round keys, one for each round, plus the initial round key.
*   **Core Operations:**
    *   **Word:** A sequence of 4 bytes (32 bits).
    *   **Key Array:** The original cipher key is arranged into a key array of words.
    *   **Generation of New Words:** Each new word is derived from previous words using:
        *   **RotWord:** Cyclically shifting the bytes of a word to the left.
        *   **SubWord:** Applying the S-box transformation to each byte of a word.
        *   **Rcon (Round Constant):** A pre-defined set of constants used in the first word of each round key block. These are powers of $x$ in GF(2⁸).
        *   **XOR:** Byte-wise XOR operations.

**Key Expansion for AES-128 (128-bit key, 10 rounds):**

*   The 128-bit key is 4 words ($W_0, W_1, W_2, W_3$).
*   We need 11 round keys (for 10 rounds + initial round), which means $11 \times 4 = 44$ words ($W_0$ to $W_{43}$).
*   The first 4 words ($W_0$ to $W_3$) are the original key.
*   For $i \ge 4$:
    *   $Temp = W_{i-1}$
    *   If $i$ is a multiple of 4 (i.e., starting a new 4-word block):
        *   $Temp = SubWord(RotWord(Temp)) \oplus Rcon[i/4]$
    *   $W_i = W_{i-4} \oplus Temp$

**Example (Partial Key Expansion for AES-128):**

Let the key be $k_0, k_1, \dots, k_{15}$ (16 bytes).
$W_0 = (k_0, k_1, k_2, k_3)$
$W_1 = (k_4, k_5, k_6, k_7)$
$W_2 = (k_8, k_9, k_{10}, k_{11})$
$W_3 = (k_{12}, k_{13}, k_{14}, k_{15})$

To compute $W_4$ (start of the second round key block):
1.  $Temp = W_3 = (k_{12}, k_{13}, k_{14}, k_{15})$
2.  $i=4$, which is a multiple of 4.
3.  $RotWord(Temp) = (k_{13}, k_{14}, k_{15}, k_{12})$
4.  $SubWord(RotWord(Temp))$: Apply S-box to each byte. Let's say $S(k_{13}), S(k_{14}), S(k_{15}), S(k_{12})$.
5.  $Rcon[4/4] = Rcon[1]$: The first round constant is $01000000$ (hex) = `01000000` in hex as a word.
6.  $Temp = (S(k_{13}), S(k_{14}), S(k_{15}), S(k_{12})) \oplus (01, 00, 00, 00)$
7.  $W_4 = W_0 \oplus Temp = (k_0, k_1, k_2, k_3) \oplus Temp$

This process continues up to $W_{43}$ for AES-128.

**Important Point:** The key expansion is crucial for security. The round constants ($Rcon$) are used to break the symmetry between the rounds and prevent certain attacks.

---

### 6. AES Decryption

AES decryption is essentially the inverse of the encryption process. Each transformation in encryption has a corresponding inverse transformation.

*   **Inverse Transformations:**
    *   **InvSubBytes:** The inverse S-box lookup.
    *   **InvShiftRows:** Cyclically shifts the rows to the right.
    *   **InvMixColumns:** Multiplies each column by a fixed polynomial inverse.
    *   **AddRoundKey:** XOR is its own inverse.
*   **Decryption Order:** The decryption process applies the inverse transformations in reverse order of the encryption rounds, starting with the final round key.
    1.  **Initial Round (Inverse):**
        *   **AddRoundKey:** (XOR with the last round key)
    2.  **Main Rounds (Nr-1 rounds):**
        *   **InvShiftRows:**
        *   **InvSubBytes:**
        *   **AddRoundKey:** (XOR with previous round key)
        *   **InvMixColumns:**
    3.  **Final Round (Inverse):**
        *   **InvShiftRows:**
        *   **InvSubBytes:**
        *   **AddRoundKey:** (XOR with the initial round key)

**Important Point:** The MixColumns transformation is the only one that requires special handling in decryption. All other transformations are their own inverses or have simple inverses.

---

### 7. Security of AES

*   **Resistance to Known Attacks:** AES has been extensively studied and is considered secure against all known practical cryptanalytic attacks (e.g., differential cryptanalysis, linear cryptanalysis).
*   **Key Size:** The 128, 192, and 256-bit key sizes provide a very high level of security against brute-force attacks. For a 128-bit key, the number of possible keys is $2^{128}$, which is computationally infeasible to search.
*   **Implementation Vulnerabilities:** While the algorithm itself is strong, vulnerabilities can arise from insecure implementations (e.g., side-channel attacks like timing attacks or power analysis).
*   **Future Concerns:** As computational power continues to grow (e.g., with quantum computing), the long-term security of AES is a subject of ongoing research. Quantum algorithms like Shor's algorithm could potentially break asymmetric cryptography much faster, but their impact on symmetric ciphers like AES is less direct. Grover's algorithm can speed up brute-force searches, effectively halving the key length, meaning a 128-bit AES key would have security equivalent to a 64-bit key against a quantum computer using Grover's algorithm. However, even a 64-bit key is generally considered too small for modern security, but a 128-bit key still offers substantial resistance. NIST is also developing post-quantum cryptography standards.

---

### 8. Practice Questions and Exercises

**Question 1:**
What is the block size of the AES cipher?
(a) 64 bits
(b) 128 bits
(c) 192 bits
(d) 256 bits

**Question 2:**
Which of the following is NOT a transformation step in the main rounds of AES encryption?
(a) SubBytes
(b) ShiftRows
(c) MixColumns
(d) KeyExpansion

**Question 3:**
Explain the purpose of the SubBytes transformation in AES.

**Question 4:**
What is the role of the ShiftRows transformation in providing diffusion?

**Question 5:**
How is multiplication by `02` performed in GF(2⁸) for the MixColumns transformation?

**Question 6:**
If an AES-256 cipher is used, how many rounds will be performed?

**Question 7:**
Describe the process of Key Expansion for AES. What are the main components involved?

---

### 9. Answers to Practice Questions

**Answer 1:**
(b) 128 bits

**Answer 2:**
(d) KeyExpansion. KeyExpansion is a pre-processing step, not a transformation within each round.

**Answer 3:**
The SubBytes transformation's purpose is to provide **non-linearity** in the cipher. It replaces each byte of the state with another byte using a fixed lookup table (S-box). This non-linearity makes the cipher resistant to linear cryptanalysis.

**Answer 4:**
The ShiftRows transformation provides diffusion by **permuting bytes between columns**. It cyclically shifts the bytes in different rows by different amounts. This ensures that bytes from the same column in one round end up in different columns in the subsequent round, spreading the influence of each byte across the state.

**Answer 5:**
Multiplication by `02` in GF(2⁸) is performed by a **left bit shift**. If the most significant bit (MSB) of the byte being multiplied is 1, then the result of the left shift is XORed with the irreducible polynomial $x^8 + x^4 + x^3 + x + 1$ (represented as `1B` in hex). This is because the multiplication is performed modulo this polynomial.

**Answer 6:**
For an AES-256 cipher, **14 rounds** will be performed.

**Answer 7:**
The Key Expansion (or Key Schedule) process generates a set of round keys from the original cipher key.
*   **Input:** The original cipher key (128, 192, or 256 bits).
*   **Output:** A set of round keys, where each round key is 128 bits (or 4 words). The number of round keys required depends on the number of rounds (Nr+1).
*   **Components:**
    *   **Words:** The key is treated as an array of words (4 bytes each).
    *   **RotWord:** A cyclic left shift of bytes within a word.
    *   **SubWord:** Applying the AES S-box to each byte of a word.
    *   **Rcon (Round Constant):** Pre-defined constants used to break the symmetry between rounds and prevent certain attacks. These are powers of $x$ in GF(2⁸).
    *   **XOR:** Byte-wise XOR operations are used to combine previous words, the result of SubWord(RotWord(Temp)), and the round constant.
*   **Process:** The expansion iteratively generates new words by combining previously generated words and applying transformations like RotWord and SubWord, along with Rcon values at specific intervals.

---

### 10. Important Points to Remember

*   **AES is a symmetric block cipher with a fixed block size of 128 bits.**
*   It supports key sizes of 128, 192, and 256 bits, which determine the number of rounds (10, 12, 14 respectively).
*   The four main transformations are **SubBytes, ShiftRows, MixColumns, and AddRoundKey**.
*   **SubBytes** provides non-linearity using the S-box derived from GF(2⁸) operations.
*   **ShiftRows** provides diffusion by permuting bytes across columns.
*   **MixColumns** provides diffusion by mixing bytes within columns using polynomial multiplication in GF(2⁸).
*   **AddRoundKey** introduces the key material into the encryption process using XOR.
*   **Key Expansion** is crucial for generating unique round keys and ensuring security.
*   AES decryption uses inverse transformations in reverse order.
*   AES is considered very secure against known cryptanalytic attacks, but implementation security is vital.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### 11. References and Further Reading

*   **Cryptography and Network Security: Principles and Practice** by William Stallings (4th Edition, 2006) - Chapter 7 (Modern Block Ciphers: Two-Key Triple DES, Blowfish, and Twofish) and Chapter 8 (Advanced Encryption Standard) provide a comprehensive overview of AES.
*   **Cryptography and Network Security** by Behrouz A. Forouzan (2008) - Likely covers block ciphers and AES in its relevant chapters.
*   **Abstract Algebra** by David S. Dummit & Richard M Foote (2nd Edition, 2008) - For deep understanding of finite fields, particularly Chapter 9 (Vector Spaces and Modules) and Chapter 11 (Finite Fields).
*   **FIPS PUB 197: Advanced Encryption Standard (AES)** - The official standard document.
*   **NIST Special Publication 800-38A: Recommendation for Block Cipher Modes of Operation: Methods and Techniques** - While not directly about AES structure, it's crucial for using AES securely in practice.

This concludes the study notes for the AES Cipher topic. Remember to practice the transformations and key expansion concepts to fully grasp the workings of AES.