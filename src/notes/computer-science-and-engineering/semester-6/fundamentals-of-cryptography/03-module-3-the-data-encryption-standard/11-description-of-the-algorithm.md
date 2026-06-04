---
title: "Description of the Algorithm"
subject: "FUNDAMENTALS OF CRYPTOGRAPHY"
module: "Module 3: The Data Encryption Standard "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8bcde"
status: "completed"
scrapedAt: "2026-05-20T16:54:10.314Z"
---
## FUNDAMENTALS OF CRYPTOGRAPHY - Module 3: The Data Encryption Standard - Topic: Description of the Algorithm

**Learning Outcomes:**

*   Understand the overall structure and functionality of the Data Encryption Standard (DES) algorithm.
*   Describe the initial and final permutations in DES and their purpose.
*   Explain the key schedule and how round keys are generated.
*   Detail the rounds of DES, including expansion permutation, S-box substitution, and P-box permutation.
*   Explain the Feistel structure and its role in DES.
*   Identify the security weaknesses of DES.

**1. Introduction to the Data Encryption Standard (DES)**

*   **Definition:** DES is a symmetric-key block cipher published as an official Federal Information Processing Standard (FIPS) by NIST in 1977. It was designed to encrypt unclassified, sensitive government information.
*   **Key Size:** DES uses a 56-bit key (technically, 64 bits, but 8 bits are used for parity checking).
*   **Block Size:** DES operates on 64-bit blocks of plaintext.
*   **Overall Structure:**  DES is a Feistel cipher with 16 rounds.  It involves initial and final permutations, a key schedule for generating round keys, and the core Feistel network.

**2. Overall Algorithm Structure**

*   **High-Level Steps:**
    1.  **Initial Permutation (IP):** Permutes the input 64-bit plaintext block.
    2.  **16 Rounds of Feistel Cipher:** This is the core encryption process. Each round uses a different round key derived from the original 56-bit key.
    3.  **Swap Halves (L16 and R16):** Swap the left and right halves of the data after the 16th round.
    4.  **Inverse Initial Permutation (IP<sup>-1</sup>):** The inverse of the initial permutation is applied to the output of the 16 rounds.

**3. Initial and Final Permutations (IP and IP<sup>-1</sup>)**

*   **Purpose:** These permutations do not provide any cryptographic security.  They were likely included to make DES easier to implement in hardware and potentially to make it resistant to certain types of cryptanalysis that were relevant at the time. Some believe they may have helped mask the S-box structure.
*   **Functionality:**
    *   `IP` rearranges the bits of the input block according to a fixed permutation table.  Bit positions are reordered.
    *   `IP<sup>-1</sup>` is the inverse of the initial permutation. It reverses the bit order produced by the final Feistel round and the initial permutation, reconstructing a semblance of the original order.
*   **Important Note:** These permutations do *not* compress the data.  They simply rearrange the bits.
*   **Example:** (Simplified)
    *   Assume a 4-bit block [b1, b2, b3, b4] and a simplified IP permutation table: [3, 1, 4, 2].
    *   The `IP` operation would transform the block to [b3, b1, b4, b2].
    *   The corresponding `IP^-1` would map [3, 1, 4, 2] to [2, 4, 1, 3]

**4. The Feistel Structure (Core of DES)**

*   **Principle:** A Feistel network divides the block being encrypted into two halves (Left - L, Right - R). In each round, the right half is processed by a function (f), which includes the round key. The output of the function is then XORed with the left half. The two halves are then swapped for the next round.
*   **Round Function (f):** The heart of the Feistel round.  It takes the right half (R<sub>i-1</sub>) and the round key (K<sub>i</sub>) as input and produces a 32-bit output.
*   **Round Operation:**
    *   L<sub>i</sub> = R<sub>i-1</sub>
    *   R<sub>i</sub> = L<sub>i-1</sub> ⊕ f(R<sub>i-1</sub>, K<sub>i</sub>)
*   **Advantage:**  The Feistel structure has the advantage that the decryption process is almost identical to the encryption process, simply with the round keys applied in reverse order. This simplifies implementation.

**5. Detailed Breakdown of the Round Function (f)**

The function *f* is the most complex part of DES and is responsible for most of its security. It consists of the following steps:

*   **Expansion Permutation (E):**
    *   **Purpose:** Expands the 32-bit right half (R<sub>i-1</sub>) to a 48-bit value.
    *   **How it Works:** Some bits from the input are duplicated. This expansion helps diffuse the bits across the input to the S-boxes.
    *   **Result:**  A 48-bit expanded block.
*   **XOR with Round Key (K<sub>i</sub>):**
    *   **Purpose:** Combines the expanded 48-bit block with the 48-bit round key (K<sub>i</sub>) using a bitwise XOR operation.
*   **S-Box Substitution:**
    *   **Purpose:** This is the *non-linear* part of DES. S-boxes provide confusion, making the relationship between the key and the ciphertext complex.
    *   **How it Works:** The 48-bit block is divided into eight 6-bit blocks. Each 6-bit block is fed into one of eight different S-boxes (S1, S2, ..., S8).  Each S-box is a 4x16 lookup table (64 entries).
    *   **S-Box Operation:**
        *   The first and last bits of the 6-bit input are used to select a *row* of the S-box (row number 0-3).
        *   The middle four bits are used to select a *column* of the S-box (column number 0-15).
        *   The value at the intersection of the selected row and column is the 4-bit output of the S-box.
    *   **Result:**  Eight 4-bit blocks (32 bits total).
*   **Permutation (P-Box):**
    *   **Purpose:** Permutes the 32 bits output by the S-boxes according to a fixed permutation table.
    *   **How it Works:** Similar to the initial permutation, bits are simply rearranged.
    *   **Result:** A 32-bit output. This is the output of the function *f*, which is then XORed with the left half (L<sub>i-1</sub>).

**6. Key Schedule**

*   **Purpose:** Generates the 16 round keys (K<sub>1</sub>, K<sub>2</sub>, ..., K<sub>16</sub>) from the original 56-bit key.
*   **Process:**
    1.  **Permuted Choice 1 (PC-1):** The original 64-bit key (56 effective key bits + 8 parity bits) is subjected to a permutation and compression operation. This selects 56 bits and discards 8 parity bits. The 56 bits are split into two 28-bit halves, C0 and D0.
    2.  **Circular Left Shifts:** For each round, the 28-bit halves (Ci-1 and Di-1) are circularly left-shifted by one or two positions, depending on the round number.  The number of shifts is determined by a fixed shift schedule.  The shifted halves are C<sub>i</sub> and D<sub>i</sub>.
    3.  **Permuted Choice 2 (PC-2):** The shifted halves (C<sub>i</sub> and D<sub>i</sub>) are concatenated and then subjected to a second permutation and compression operation. This selects 48 bits from the 56 bits to form the round key K<sub>i</sub>.  The discarded bits vary from round to round due to the shifts.
*   **Important:** The key schedule ensures that each round uses a different round key.  The shifts cause bits from different parts of the original key to be used in different round keys.

**7. Decryption in DES**

*   The decryption process is nearly identical to the encryption process.
*   The only difference is that the round keys are applied in *reverse* order.  Specifically, K<sub>16</sub> is used in the first round, K<sub>15</sub> in the second round, and so on, until K<sub>1</sub> is used in the final round.
*   Due to the Feistel structure, this reversal of key order allows for correct decryption.

**8. Security Weaknesses of DES**

*   **Small Key Size:** The 56-bit key is the primary weakness.  Modern computing power makes exhaustive key search (brute-force attack) feasible.  This was the major driving factor in the development of Triple DES (3DES) and eventually AES.
*   **Differential Cryptanalysis:**  Discovered independently by Eli Biham and Adi Shamir, exploits statistical properties of the S-boxes.  Requires a significant number of chosen plaintexts.
*   **Linear Cryptanalysis:**  Introduced by Mitsuru Matsui, uses linear approximations of the DES round function.  Requires a large number of known plaintexts.
*   **S-Box Design:** Some concerns were raised about the design criteria of the S-boxes, although it has never been definitively proven that these were deliberate "trapdoors."

**9. Important Points to Remember**

*   DES is a symmetric block cipher that uses a 56-bit key and operates on 64-bit blocks.
*   It's a Feistel cipher with 16 rounds.
*   The initial and final permutations do not provide cryptographic security.
*   The round function (f) is the core of DES and includes expansion, XOR with round key, S-box substitution, and P-box permutation.
*   The key schedule generates 16 round keys from the original key.
*   DES is vulnerable to brute-force attacks, differential cryptanalysis, and linear cryptanalysis.  Its key size is too small by modern standards.

**Practice Questions/Exercises**

1.  **Describe the purpose of the S-boxes in DES.**
    *   **Answer:** The S-boxes provide non-linearity and confusion in the DES algorithm, making the relationship between the key and the ciphertext complex. They are crucial for resisting linear cryptanalysis.

2.  **Explain how the round keys are generated in the DES key schedule.**
    *   **Answer:** The key schedule starts with the 56-bit key (after Permuted Choice 1).  For each round, the two 28-bit halves (C and D) are circularly left-shifted by a specific number of positions. Then, Permuted Choice 2 selects 48 bits from the combined C and D to form the round key.

3.  **What is the primary security weakness of DES?**
    *   **Answer:** The small 56-bit key size makes it vulnerable to brute-force attacks.

4.  **What are the steps involved in the f-function (round function) of DES?**
    *   **Answer:**
        1. Expansion Permutation (E): Expands the 32-bit input to 48 bits.
        2. XOR with Round Key (K<sub>i</sub>): XORs the expanded 48-bit block with the 48-bit round key.
        3. S-Box Substitution: Divides the 48-bit block into eight 6-bit blocks and substitutes each block using one of the eight S-boxes, resulting in 32 bits.
        4. Permutation (P-Box): Permutes the 32 bits according to a fixed permutation table.

5.  **Explain why DES decryption is nearly identical to encryption.**
    *   **Answer:** Due to the Feistel structure, decryption uses the same operations as encryption, but with the round keys applied in reverse order. This design simplifies the implementation of both encryption and decryption.

6.  **What is the purpose of the Initial Permutation (IP) and Final Permutation (IP<sup>-1</sup>) in DES?  Do they contribute to security?**
    *   **Answer:** The IP and IP<sup>-1</sup> rearrange the bits of the input block, but they do not provide any cryptographic security. They were likely included for hardware implementation reasons and possibly to make the algorithm resistant to specific types of cryptanalysis at the time.

This comprehensive set of notes provides a detailed understanding of the DES algorithm, including its structure, key schedule, and weaknesses.  Reviewing these notes and completing the practice questions will help you grasp the fundamental concepts of this important historical cipher.
