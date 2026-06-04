---
title: "DES Decryption"
subject: "SECURE COMMUNICATION"
module: "Module 2: Block Ciphers: "
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c460b09ce205780fee7e"
status: "completed"
scrapedAt: "2026-05-23T18:03:01.728Z"
---
# Module 2: Block Ciphers - DES Decryption

## 1. Introduction to DES Decryption

Data Encryption Standard (DES) is a symmetric-key block cipher that was once widely used for encrypting sensitive data. While it has been largely superseded by Advanced Encryption Standard (AES) due to its relatively small key size, understanding DES decryption is crucial for grasping the fundamental principles of block cipher operation and historical cryptographic techniques. This module focuses on the process of decrypting data encrypted using DES.

**Key Concepts:**

*   **Block Cipher:** An encryption algorithm that operates on fixed-size blocks of data. DES operates on 64-bit blocks.
*   **Key Size:** The length of the secret key used for encryption and decryption. DES uses a 56-bit effective key (derived from a 64-bit key where 8 bits are parity bits).
*   **Symmetric Key Cryptography:** A type of cryptography where the same key is used for both encryption and decryption.
*   **Feistel Cipher:** A structure used in many block ciphers, including DES, which allows for efficient decryption by simply reversing the order of the subkeys.

## 2. The DES Decryption Process

DES decryption is essentially the **reverse** of the DES encryption process. This is a key advantage of the Feistel cipher structure. The same algorithm and key schedule are used, but the subkeys are applied in reverse order.

**Learning Outcome Alignment:**

*   This section directly addresses the core of DES decryption, contributing to **CO2: Illustrate the principles of modern symmetric ciphers like Data Encryption Standard and Advanced Encryption Standard.** (Knowledge Level: K3)

### 2.1. Overview of the DES Structure (Recap from Encryption)

To understand decryption, it's helpful to recall the encryption process:

1.  **Initial Permutation (IP):** The 64-bit plaintext block is permuted according to a predefined table.
2.  **16 Rounds of Encryption:** The permuted block is processed through 16 rounds of a Feistel network. Each round involves:
    *   **Splitting:** The 64-bit block is split into two 32-bit halves, $L_0$ and $R_0$.
    *   **Key Generation (Subkeys):** A 48-bit subkey ($K_i$) is generated for each round using a key schedule from the original 56-bit key.
    *   **Expansion (E):** The right half ($R_{i-1}$) is expanded from 32 bits to 48 bits.
    *   **XOR with Subkey:** The expanded right half is XORed with the 48-bit subkey ($K_i$).
    *   **S-Boxes:** The result is passed through eight distinct S-boxes, which map 48 bits to 32 bits. This is the non-linear component of DES.
    *   **Permutation (P):** The output of the S-boxes is permuted.
    *   **XOR with Left Half:** The permuted output is XORed with the left half of the previous round ($L_{i-1}$) to produce the new right half ($R_i$).
    *   **Swap:** The left and right halves are swapped: $L_i = R_{i-1}$ and $R_i = L_{i-1} \oplus \text{f}(R_{i-1}, K_i)$.
3.  **Final Permutation (FP):** After 16 rounds, the final permuted block undergoes a final permutation, which is the inverse of the initial permutation.

### 2.2. The Decryption Algorithm

DES decryption follows the same structure as encryption, with one crucial difference: **the order of subkeys is reversed.**

**Steps for DES Decryption:**

1.  **Initial Permutation (IP):** The 64-bit ciphertext block is subjected to the same Initial Permutation (IP) as in encryption.
2.  **16 Rounds of Decryption:** The permuted block is processed through 16 rounds. Each round $i$ uses the subkey $K_{17-i}$ (i.e., $K_{16}, K_{15}, \dots, K_1$).
    *   The process within each round is identical to encryption, but with the reversed subkey:
        *   Split the 64-bit block into $L_0$ and $R_0$.
        *   For $i = 1$ to 16:
            *   $L_i = R_{i-1}$
            *   $R_i = L_{i-1} \oplus \text{f}(R_{i-1}, K_{17-i})$
            *   Where $\text{f}(R, K)$ is the DES function: $\text{f}(R, K) = P(S(E(R) \oplus K))$
3.  **Final Permutation (FP):** The output of the 16th round is subjected to the Final Permutation (FP), which is the inverse of the Initial Permutation (IP).

**Why does reversing the subkeys work?**

The Feistel structure ensures that if encryption is performed with subkeys $K_1, K_2, \dots, K_{16}$, decryption can be achieved by applying the same function $\text{f}$ but with subkeys $K_{16}, K_{15}, \dots, K_1$. This is because the XOR operation is its own inverse, and the swapping of halves in each round effectively "undoes" the previous round's operations when the subkeys are applied in reverse.

**Example:**

Let's consider a simplified Feistel network with only 3 rounds and subkeys $K_1, K_2, K_3$.

*   **Encryption:**
    *   $L_1 = R_0$
    *   $R_1 = L_0 \oplus \text{f}(R_0, K_1)$
    *   $L_2 = R_1$
    *   $R_2 = L_1 \oplus \text{f}(R_1, K_2)$
    *   $L_3 = R_2$
    *   $R_3 = L_2 \oplus \text{f}(R_2, K_3)$
    *   Final output (after FP) depends on $L_3$ and $R_3$.

*   **Decryption:** To decrypt the output ($L_3, R_3$), we use subkeys $K_3, K_2, K_1$.
    *   Let the encrypted data be represented by $C = (L'_3, R'_3)$, where $L'_3$ and $R'_3$ are the halves after encryption.
    *   We start decryption with $L_0' = L'_3$ and $R_0' = R'_3$.
    *   Round 1 (Decryption):
        *   $L_1' = R_0'$
        *   $R_1' = L_0' \oplus \text{f}(R_0', K_3)$  (Notice $K_3$ is used first)
    *   Round 2 (Decryption):
        *   $L_2' = R_1'$
        *   $R_2' = L_1' \oplus \text{f}(R_1', K_2)$
    *   Round 3 (Decryption):
        *   $L_3' = R_2'$
        *   $R_3' = L_2' \oplus \text{f}(R_2', K_1)$  (Notice $K_1$ is used last)

After these 3 decryption rounds, the halves will be $L_3'$ and $R_3'$. Applying the inverse of the initial permutation (which is the final permutation in encryption) will recover the original plaintext. The key insight is that the swapping of halves means $R_3 = L_2 \oplus \text{f}(R_2, K_3)$. To recover $L_2$, we need to XOR $R_3$ with $\text{f}(R_2, K_3)$. This is precisely what the first decryption round with $K_3$ does.

**Important Point:** The mathematical structure of the Feistel cipher, particularly the properties of XOR and the permutation/expansion functions, allows for this elegant reversal of subkey order for decryption.

## 3. Key Generation (Key Schedule) - A Recap

The subkeys used in DES are generated from the original 56-bit key through a process called the key schedule. This process ensures that each round uses a different, seemingly random 48-bit subkey. Understanding this is vital for both encryption and decryption as the same key schedule is used.

**Learning Outcome Alignment:**

*   This section provides context for the subkeys used in decryption, reinforcing **CO2: Illustrate the principles of modern symmetric ciphers like Data Encryption Standard and Advanced Encryption Standard.** (Knowledge Level: K3)

### 3.1. Key Schedule Steps:

1.  **Parity Drop:** The 64-bit key is reduced to 56 bits by dropping every 8th bit. These 8 bits are parity bits and are not used in the encryption process.
2.  **Permuted Choice 1 (PC-1):** The 56 bits are split into two 28-bit halves. These halves are then permuted according to PC-1, producing two 28-bit blocks.
3.  **Left Shifts:** For each of the 16 rounds, the two 28-bit blocks are shifted left by a specific number of bits (1 or 2 bits, depending on the round). The number of shifts for each round is predefined.
4.  **Permuted Choice 2 (PC-2):** The shifted 28-bit blocks are concatenated to form a 56-bit block. This 56-bit block is then permuted by PC-2, resulting in a 48-bit block. This 48-bit block is the subkey ($K_i$) for that round.
5.  **Subkey Order for Decryption:** For decryption, the subkeys generated ($K_1, K_2, \dots, K_{16}$) are used in the order $K_{16}, K_{15}, \dots, K_1$.

**Reference Material:** Stallings' "Cryptography and Network Security" provides detailed tables and explanations of the PC-1, PC-2, and shift operations in its chapter on DES.

## 4. DES Decryption Example (Conceptual)

Let's illustrate the process conceptually with a simplified scenario.

**Scenario:** Suppose we have a 64-bit ciphertext block $C$. We also have the 16 subkeys $K_1, K_2, \dots, K_{16}$ generated from the secret key.

**Decryption Steps:**

1.  **Initial Permutation:** Apply $IP^{-1}$ (Inverse of Initial Permutation) to $C$ to get $L_0$ and $R_0$.
2.  **Round 1 (Decryption):**
    *   $L_1 = R_0$
    *   $R_1 = L_0 \oplus \text{f}(R_0, K_{16})$  (Using $K_{16}$)
3.  **Round 2 (Decryption):**
    *   $L_2 = R_1$
    *   $R_2 = L_1 \oplus \text{f}(R_1, K_{15})$  (Using $K_{15}$)
    *   ...
4.  **Round 16 (Decryption):**
    *   $L_{16} = R_{15}$
    *   $R_{16} = L_{15} \oplus \text{f}(R_{15}, K_1)$  (Using $K_1$)
5.  **Final Permutation:** Apply $IP$ (the inverse of $IP^{-1}$) to the concatenated $L_{16}$ and $R_{16}$ to obtain the original 64-bit plaintext block $P$.

**Key Points to Remember:**

*   The core DES algorithm (the $f$ function, S-boxes, permutations) remains the same for encryption and decryption.
*   The **only difference** is the order in which the subkeys are applied.
*   Encryption uses $K_1, K_2, \dots, K_{16}$.
*   Decryption uses $K_{16}, K_{15}, \dots, K_1$.

## 5. Practice Questions and Exercises

**Question 1:**
What is the primary difference between the DES encryption and DES decryption algorithms?

**Answer:**
The primary difference is the order in which the subkeys are applied. DES decryption uses the subkeys in reverse order ($K_{16}, K_{15}, \dots, K_1$) compared to DES encryption ($K_1, K_2, \dots, K_{16}$).

**Question 2:**
Explain why reversing the order of subkeys is sufficient for DES decryption, given it's a Feistel cipher.

**Answer:**
The Feistel cipher structure, combined with the properties of XOR (which is its own inverse), ensures that the operations performed during encryption can be "undone" by applying the same function with reversed subkeys. The swapping of halves in each round is critical to this property.

**Question 3:**
If a 64-bit ciphertext block is $C = C_L \| C_R$, and it is decrypted using the reverse subkey order. What would be the first step of the decryption process after the initial permutation? (Assume the initial permutation has been applied to C, resulting in halves $L_0$ and $R_0$).

**Answer:**
The first round of decryption would involve:
$L_1 = R_0$
$R_1 = L_0 \oplus \text{f}(R_0, K_{16})$
where $K_{16}$ is the last subkey generated by the key schedule.

**Question 4:**
Consider a simplified DES-like cipher with 3 rounds and subkeys $K_1, K_2, K_3$.
Encryption: $L_i = R_{i-1}$, $R_i = L_{i-1} \oplus \text{f}(R_{i-1}, K_i)$.
Decryption: To decrypt the output $(L'_3, R'_3)$, what subkeys should be used and in what order?

**Answer:**
The decryption process should use the subkeys in the order $K_3, K_2, K_1$. The steps would be:
Round 1 (Decryption): $L'_1 = R'_0$, $R'_1 = L'_0 \oplus \text{f}(R'_0, K_3)$
Round 2 (Decryption): $L'_2 = R'_1$, $R'_2 = L'_1 \oplus \text{f}(R'_1, K_2)$
Round 3 (Decryption): $L'_3 = R'_2$, $R'_3 = L'_2 \oplus \text{f}(R'_2, K_1)$

## 6. Highlighting Important Points to Remember

*   **DES Decryption is the Inverse of Encryption:** The core principle is reversing the order of subkey application.
*   **Feistel Structure is Key:** The Feistel network allows for this efficient reversal of operations.
*   **Subkey Schedule is Identical:** The key schedule generates the same set of subkeys for both encryption and decryption.
*   **Subkey Order for Decryption:** $K_{16}, K_{15}, \dots, K_1$.
*   **DES is Considered Insecure Today:** Due to its small key size (56 bits), it is vulnerable to brute-force attacks. Modern systems use stronger algorithms like AES.
*   **Understanding DES is Foundational:** It provides essential insights into block cipher design and the evolution of cryptography.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


## 7. References and Further Reading

*   **Stallings, William.** *Cryptography and Network Security: Principles and Practice*. 4th Edition. Prentice Hall of India, 2006. (Chapter on Block Ciphers, specifically DES)
*   **Forouzan, Behrouz A.** *Cryptography and Network Security*. Tata McGraw-Hill, 2008.
*   **Tyagi, and Yadav.** *Cryptography and network security*. Dhanpat Rai & Co, 2012.

These books provide detailed explanations of the DES algorithm, including the specific permutation tables and the key schedule operations. For a deeper mathematical understanding of the underlying principles of permutations and modular arithmetic (which are foundational to cryptography, though not explicitly detailed in DES decryption itself), refer to the abstract algebra and number theory books listed.

## 8. Alignment with Course Outcomes

This module directly supports:

*   **CO2: Illustrate the principles of modern symmetric ciphers like Data Encryption Standard and Advanced Encryption Standard.**
    *   **Knowledge Level: K3** (Understanding and illustrating the process). By detailing the reverse subkey application and the Feistel structure, this module helps students illustrate how DES works, both forwards and backward.

While not the primary focus, understanding DES decryption also indirectly relates to:

*   **CO1: Explain network security services and mechanisms and the types of attacks they are designed for and apply the concepts of modular arithmetic, Euclidean algorithm, polynomial arithmetic.**
    *   **Knowledge Level: K3**
    *   The underlying mathematics of block ciphers, like permutations and bitwise operations, are related to fundamental mathematical concepts. While not directly applying modular arithmetic for decryption, understanding how these operations are built on mathematical principles is part of the broader context.

This concludes the study notes for DES Decryption. It's important to practice the steps and understand the rationale behind the reversed subkey order.