---
title: "The Data Encryption Standard - DES Encryption & Decryption"
subject: "FUNDAMENTALS OF CRYPTOGRAPHY"
module: "Module 3: The Data Encryption Standard "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8bcd4"
status: "completed"
scrapedAt: "2026-05-20T16:54:03.153Z"
---
# FUNDAMENTALS OF CRYPTOGRAPHY: Module 3 - The Data Encryption Standard

## Topic: The Data Encryption Standard - DES Encryption & Decryption

**Description:** This topic covers the details of the Data Encryption Standard (DES) algorithm, focusing on the encryption and decryption processes.

**Learning Outcomes:**

*   Understand the overall structure of the DES algorithm.
*   Explain the initial and final permutations in DES.
*   Describe the round function (Feistel function) in detail.
*   Understand the key schedule and its role in generating round keys.
*   Explain the encryption process of DES step-by-step.
*   Explain the decryption process of DES step-by-step and its relationship to encryption.
*   Identify the strengths and weaknesses of DES.

---

### 1. Overall Structure of DES

*   **Block Cipher:** DES is a symmetric-key block cipher, meaning it operates on fixed-size blocks of data (64 bits) using the same key for both encryption and decryption.
*   **Feistel Network:** DES is based on the Feistel network structure. This structure divides the block into two halves and performs a series of rounds, applying a round function to one half and then swapping the halves.
*   **Key Length:** The key length in DES is 64 bits, but only 56 bits are actually used for encryption; the remaining 8 bits are used for parity checking (historically).
*   **Number of Rounds:** DES consists of 16 identical rounds.
*   **Initial and Final Permutations (IP and FP):** Before the rounds begin and after they end, the 64-bit block undergoes an initial permutation (IP) and a final permutation (FP), respectively.  These are inverse operations of each other.
*   **Key Schedule:** A key schedule generates 16 round keys (48 bits each) from the original 56-bit key. These round keys are used in the round function.

### 2. Initial and Final Permutations (IP and FP)

*   **Purpose:** The initial and final permutations are fixed permutations that rearrange the bits of the input block.  Their original purpose (pre-computational power) was to make DES harder to implement in hardware, but their security value is now considered minimal.
*   **IP (Initial Permutation):** Rearranges the bits of the 64-bit input block according to a fixed permutation table.
    *   Example (partial table):  The 1st bit of the output is the 58th bit of the input, the 2nd bit of the output is the 50th bit of the input, etc.
*   **FP (Final Permutation):**  The inverse of the initial permutation.  After 16 rounds, the final permutation is applied to produce the 64-bit ciphertext.
    *   Example: If IP(x) = y, then FP(y) = x.

### 3. The Round Function (Feistel Function)

*   **Core Component:** The round function is the heart of the DES algorithm and performs the actual transformation of the data.
*   **Input:** Each round takes as input the two 32-bit halves of the data (L<sub>i-1</sub> and R<sub>i-1</sub>) and a 48-bit round key (K<sub>i</sub>).
*   **Steps:**
    1.  **Expansion Permutation (E):** The 32-bit right half (R<sub>i-1</sub>) is expanded to 48 bits using the expansion permutation (E). This permutation duplicates some of the bits, providing diffusion.  This expansion table is fixed.
    2.  **Key Mixing:** The expanded 48-bit value is XORed with the 48-bit round key (K<sub>i</sub>).
    3.  **S-Boxes:** The 48-bit result is divided into eight 6-bit blocks. Each 6-bit block is input to a corresponding S-box (S<sub>1</sub>, S<sub>2</sub>, ..., S<sub>8</sub>).  Each S-box is a 6-bit input, 4-bit output substitution box. This is the *only* non-linear component of DES and is critical for its security. Different S-boxes are used.
        *   The outer two bits of the 6-bit input select a row in the S-box.
        *   The inner four bits select a column in the S-box.
        *   The value at the intersection of the selected row and column becomes the 4-bit output.
    4.  **P-Box Permutation:** The 32-bit output from the S-boxes is permuted using the P-box permutation.  This provides diffusion by spreading the influence of each S-box output bit across multiple other bits.
*   **Output:** The 32-bit output of the P-box is XORed with the 32-bit left half (L<sub>i-1</sub>).
*   **Swap:**  The new left half (L<sub>i</sub>) becomes the result of the XOR operation. The right half (R<sub>i</sub>) becomes the original left half (L<sub>i-1</sub>). This swap prepares the inputs for the next round.

    *   L<sub>i</sub> = R<sub>i-1</sub>
    *   R<sub>i</sub> = L<sub>i-1</sub> XOR F(R<sub>i-1</sub>, K<sub>i</sub>)

### 4. Key Schedule

*   **Purpose:** The key schedule generates the 16 round keys (K<sub>1</sub>, K<sub>2</sub>, ..., K<sub>16</sub>) from the original 56-bit key.
*   **Steps:**
    1.  **Permuted Choice 1 (PC-1):**  The original 64-bit key has 8 parity bits. The 56 bits that are actually used are selected using Permuted Choice 1 (PC-1), and arranged into two 28-bit halves, C<sub>0</sub> and D<sub>0</sub>.
    2.  **Circular Left Shifts:**  In each round, C<sub>i-1</sub> and D<sub>i-1</sub> are independently shifted to the left by either 1 or 2 bits, depending on the round number. This is critical for the key schedule.
    3.  **Permuted Choice 2 (PC-2):**  The shifted C<sub>i</sub> and D<sub>i</sub> are combined and then subjected to Permuted Choice 2 (PC-2), which selects 48 bits from the 56 bits.  This 48-bit value becomes the round key K<sub>i</sub>.

*   **Importance:**  The key schedule ensures that each round uses a different key, preventing simple attacks.

### 5. DES Encryption Process (Step-by-Step)

1.  **Input:** 64-bit plaintext block and a 64-bit key (with 56 bits used for encryption).
2.  **Initial Permutation (IP):** Apply the initial permutation to the plaintext block.
3.  **16 Rounds:** Perform 16 rounds of the Feistel network:
    *   Divide the 64-bit block into two 32-bit halves (L<sub>i-1</sub> and R<sub>i-1</sub>).
    *   Calculate L<sub>i</sub> and R<sub>i</sub> as described in the round function section, using the round key K<sub>i</sub> generated by the key schedule.
4.  **Swap (Last Round):** In the 16th round, *do not* swap the left and right halves. The output of the 16th round is L<sub>16</sub> || R<sub>16</sub> (where || denotes concatenation).
5.  **Final Permutation (FP):** Apply the final permutation to the combined L<sub>16</sub> || R<sub>16</sub> block.
6.  **Output:** 64-bit ciphertext block.

### 6. DES Decryption Process (Step-by-Step)

*   **Inverse Process:** Decryption in DES is essentially the same process as encryption, but the round keys are applied in *reverse order*.
*   **Steps:**
    1.  **Input:** 64-bit ciphertext block and the same 64-bit key used for encryption.
    2.  **Initial Permutation (IP):** Apply the initial permutation to the ciphertext block.
    3.  **16 Rounds:** Perform 16 rounds of the Feistel network, but use the round keys in the *reverse* order (K<sub>16</sub>, K<sub>15</sub>, ..., K<sub>1</sub>). The rest of the Feistel round functions are identical to the encryption process.
    4. **Swap (Last Round):** Do not swap on the 16th round.
    5.  **Final Permutation (FP):** Apply the final permutation to the combined L<sub>16</sub> || R<sub>16</sub> block.
    6.  **Output:** 64-bit plaintext block.

*   **Why Reverse Order Works:** The Feistel structure ensures that decryption works by reversing the effects of encryption. Because L<sub>i</sub> and R<sub>i</sub> are calculated based on the previous L<sub>i-1</sub> and R<sub>i-1</sub>, reversing the key schedule effectively reverses the encryption process.

### 7. Strengths and Weaknesses of DES

*   **Strengths (Historical):**
    *   Relatively fast to implement in hardware (at the time of its creation).
    *   Well-studied and analyzed.
*   **Weaknesses (Modern):**
    *   **Short Key Length:** The 56-bit key length is the primary weakness. It is vulnerable to brute-force attacks using modern computing power.  This is the most significant flaw.
    *   **Semi-Weak Keys:** Certain keys, known as semi-weak keys, produce the same subkey in multiple rounds, weakening the encryption.
    *   **Weak Keys:** Similarly, weak keys lead to identical results in encryption and decryption.
    *   **Vulnerability to Linear and Differential Cryptanalysis:**  While initially resistant to these attacks, advanced techniques have demonstrated vulnerabilities. However, these are less concerning than brute-force attacks against the short key length.

### Important Points to Remember:

*   DES is a Feistel network.
*   The S-boxes are the only non-linear component.
*   The key schedule generates round keys.
*   Decryption is the same as encryption with reversed round keys.
*   The short key length is the main weakness.

### Practice Questions / Exercises

1.  **Describe the purpose of the S-boxes in DES.**
    *   **Answer:** The S-boxes provide the non-linearity that is essential for the security of DES.  Without the S-boxes, DES would be a linear function and easily breakable.

2.  **Explain why the decryption process in DES is the same as the encryption process, but with the round keys applied in reverse order.**
    *   **Answer:** The Feistel structure ensures that the encryption process can be reversed by using the round keys in reverse order.  Each round effectively undoes the effect of the previous round's encryption process.

3.  **What is the main vulnerability of DES that makes it unsuitable for secure communications today?**
    *   **Answer:** The short key length (56 bits) makes it vulnerable to brute-force attacks.

4.  **What is the purpose of the Initial Permutation (IP) and Final Permutation (FP) in DES? Are they considered security-critical today?**
    *   **Answer:**  Originally, IP and FP were likely designed to make hardware implementation more difficult. They have minimal security value today.

5. **What are the inputs and outputs of the expansion permutation (E)? How does this expansion permutation improve security in DES?**
    * **Answer:** The expansion permutation takes a 32-bit input and produces a 48-bit output by duplicating some of the bits. This improves security by creating diffusion: Each input bit affects more output bits, spreading its influence across more S-box inputs.

6. **Explain the role of Permuted Choice 1 (PC-1) and Permuted Choice 2 (PC-2) in the key schedule.**
    *   **Answer:** PC-1 selects the 56 bits from the 64-bit key that will be used for encryption and divides it into two 28-bit halves. PC-2 selects 48 bits from the combined, shifted 56-bit value to generate each round key.

---
