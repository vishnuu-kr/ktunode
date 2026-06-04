---
title: "Feistel Decryption algorithm"
subject: "SECURE COMMUNICATION"
module: "Module 2: Block Ciphers: "
branch: "Electronics and Communication Engineering"
semester: 6
topicId: "68a5c460b09ce205780fee7c"
status: "completed"
scrapedAt: "2026-05-23T18:03:00.002Z"
---
## SECURE COMMUNICATION: Module 2: Block Ciphers

### Topic: Feistel Decryption Algorithm

---

### 1. Introduction to Feistel Ciphers

**What is a Feistel Cipher?**

A Feistel cipher is a design structure for block ciphers. It is named after Horst Feistel, who developed it in the 1970s. The core idea behind a Feistel cipher is to divide the plaintext block into two halves and then apply a series of rounds, where each round involves a "round function" that operates on one half and is combined with the other half using XOR.

**Why use a Feistel Structure?**

The key advantage of the Feistel structure is that **encryption and decryption are very similar processes**. This means that the same hardware or software can be used for both encryption and decryption, simply by reversing the order of the subkeys used in the rounds. This significantly simplifies the implementation of block ciphers.

**Key Components of a Feistel Cipher:**

*   **Block Size:** The fixed-size chunk of data that the cipher operates on.
*   **Key Size:** The length of the secret key used for encryption and decryption.
*   **Number of Rounds (n):** The number of times the Feistel structure is applied. More rounds generally lead to greater security.
*   **Round Function (f):** A function that takes a subkey and half of the data block as input and produces an output. This is the core of the cipher's cryptographic strength.
*   **Key Schedule:** An algorithm that generates the round subkeys from the main secret key.
*   **Data Halves:** The plaintext block is split into two halves, typically denoted as $L_0$ (left) and $R_0$ (right).

---

### 2. The Feistel Encryption Process

The Feistel encryption process can be summarized as follows:

Let the plaintext block $P$ be divided into two halves: $P = L_0R_0$.

For each round $i$ from 1 to $n$:
*   $L_i = R_{i-1}$
*   $R_i = L_{i-1} \oplus f(R_{i-1}, K_i)$

Where:
*   $L_i$ and $R_i$ are the left and right halves of the block after round $i$.
*   $f$ is the round function.
*   $K_i$ is the subkey for round $i$.

After $n$ rounds, the ciphertext block $C$ is formed by concatenating the final left and right halves: $C = L_n R_n$.

---

### 3. The Feistel Decryption Algorithm

The beauty of the Feistel structure lies in its symmetric decryption process. To decrypt a ciphertext block $C = L_n R_n$, we simply reverse the encryption process by applying the same round function but using the subkeys in reverse order.

The Feistel decryption process is as follows:

Let the ciphertext block $C$ be divided into two halves: $C = L_n R_n$.

For each round $i$ from $n$ down to 1:
*   $R_{i-1} = L_i$
*   $L_{i-1} = R_i \oplus f(L_i, K_i)$

**Explanation:**

Notice the key differences from the encryption process:

1.  **Order of Halves:** In encryption, the left half ($L_{i-1}$) becomes the right half in the next round ($R_i$). In decryption, the right half of the *current* round ($R_i$) becomes the *new* left half ($L_{i-1}$) after the XOR operation.
2.  **Order of Subkeys:** The subkeys $K_i$ are used in reverse order. The subkey used in the last encryption round ($K_n$) is used in the first decryption round (round $n$ to $n-1$), and so on.
3.  **XOR Operation:** The XOR operation with the round function output is applied to the "new" right half ($R_i$) to recover the original left half ($L_{i-1}$).

**Let's trace this back:**

*   **Encryption:** $R_i = L_{i-1} \oplus f(R_{i-1}, K_i)$
*   **Decryption (reverse step):** We have $L_i$ and $R_i$ (from the ciphertext). We want to recover $L_{i-1}$ and $R_{i-1}$.
    *   We know from encryption that $L_i = R_{i-1}$. So, we have $R_{i-1}$ directly from the $L_i$ of the ciphertext.
    *   We need to recover $L_{i-1}$. From encryption, $R_i = L_{i-1} \oplus f(R_{i-1}, K_i)$.
    *   To isolate $L_{i-1}$, we XOR both sides with $f(R_{i-1}, K_i)$:
        $R_i \oplus f(R_{i-1}, K_i) = L_{i-1} \oplus f(R_{i-1}, K_i) \oplus f(R_{i-1}, K_i)$
        $R_i \oplus f(R_{i-1}, K_i) = L_{i-1}$ (since $A \oplus A = 0$ and $B \oplus 0 = B$)
    *   Now, substitute $R_{i-1}$ with $L_i$ (since $L_i = R_{i-1}$ from encryption):
        $L_{i-1} = R_i \oplus f(L_i, K_i)$

This precisely matches the decryption formula.

**Important Point:** The decryption process is identical to the encryption process if the subkeys are applied in reverse order. This property is known as **self-reciprocal**.

---

### 4. Example of Feistel Decryption

Let's consider a simplified Feistel cipher with 3 rounds.

**Encryption Process:**

Initial Plaintext: $P = L_0 R_0$

*   **Round 1:**
    *   $L_1 = R_0$
    *   $R_1 = L_0 \oplus f(R_0, K_1)$
*   **Round 2:**
    *   $L_2 = R_1$
    *   $R_2 = L_1 \oplus f(R_1, K_2)$
*   **Round 3:**
    *   $L_3 = R_2$
    *   $R_3 = L_2 \oplus f(R_2, K_3)$

Ciphertext: $C = L_3 R_3$

**Decryption Process:**

Initial Ciphertext: $C = L_3 R_3$

*   **Round 1 (Decryption, uses $K_3$):**
    *   $R_2 = L_3$  (This is the first half of the ciphertext)
    *   $L_2 = R_3 \oplus f(L_3, K_3)$ (Recover the second half of the previous stage)
*   **Round 2 (Decryption, uses $K_2$):**
    *   $R_1 = L_2$  (This is the left half recovered from the previous decryption step)
    *   $L_1 = R_2 \oplus f(L_2, K_2)$ (Recover the second half of the previous stage)
*   **Round 3 (Decryption, uses $K_1$):**
    *   $R_0 = L_1$  (This is the left half recovered from the previous decryption step)
    *   $L_0 = R_1 \oplus f(L_1, K_1)$ (Recover the original left half)

Recovered Plaintext: $P = L_0 R_0$

**Illustrative Example (Conceptual):**

Let's say after encryption with 3 rounds, we have $L_3 = \text{"ABC"}$ and $R_3 = \text{"XYZ"}$.
The ciphertext is "ABCXYZ".

To decrypt:

**Round 1 (Decryption with $K_3$):**
*   We have $L_3 = \text{"ABC"}$ and $R_3 = \text{"XYZ"}$.
*   We know $R_2 = L_3 = \text{"ABC"}$.
*   We calculate $f(\text{"ABC"}, K_3)$. Let's call this output $F_3$.
*   We recover $L_2 = R_3 \oplus F_3 = \text{"XYZ"} \oplus F_3$.

Now we have $L_2$ and $R_2 = \text{"ABC"}$.

**Round 2 (Decryption with $K_2$):**
*   We have $L_2$ and $R_2 = \text{"ABC"}$.
*   We know $R_1 = L_2$.
*   We calculate $f(R_1, K_2) = f(L_2, K_2)$. Let's call this output $F_2$.
*   We recover $L_1 = R_2 \oplus F_2 = \text{"ABC"} \oplus F_2$.

Now we have $L_1$ and $R_1$.

**Round 3 (Decryption with $K_1$):**
*   We have $L_1$ and $R_1$.
*   We know $R_0 = L_1$.
*   We calculate $f(R_0, K_1) = f(L_1, K_1)$. Let's call this output $F_1$.
*   We recover $L_0 = R_1 \oplus F_1$.

Now we have $L_0$ and $R_0$, which form the original plaintext.

---

### 5. Connection to Course Outcomes

This topic directly contributes to the following Course Outcomes:

*   **CO2: Illustrate the principles of modern symmetric ciphers like Data Encryption Standard and Advanced Encryption Standard.**
    *   The Feistel structure is the fundamental design principle behind DES and many other block ciphers. Understanding Feistel decryption is crucial for understanding how these ciphers work.
    *   *Knowledge Level: K3 (Illustrate)* - By understanding the decryption algorithm, students can illustrate how a symmetric cipher using this structure decrypts data.

*   **CO1: Explain network security services and mechanisms and the concepts of modular arithmetic, Euclidean algorithm, polynomial arithmetic.**
    *   While not directly about modular arithmetic, the round function `f` in a Feistel cipher often involves operations that rely on these mathematical concepts (e.g., in DES, S-boxes use lookups, and bitwise operations are prevalent). Understanding the Feistel structure provides context for where these concepts are applied in cryptographic algorithms.
    *   *Knowledge Level: K3 (Explain)* - Understanding how data is manipulated in each round, even conceptually, helps in explaining the overall security mechanisms.

---

### 6. Key Concepts and Definitions to Remember

*   **Feistel Cipher Structure:** A block cipher design where the plaintext block is split into two halves, and a round function is applied iteratively, with subkeys used in each round.
*   **Self-Reciprocal:** The property of a Feistel cipher where encryption and decryption processes are identical, differing only in the order of subkey application.
*   **Round Function ($f$):** The core transformation applied in each round. It typically involves substitution (S-boxes) and permutation (P-boxes) operations.
*   **Subkeys ($K_i$):** Portions of the main secret key generated by the key schedule for use in each round.
*   **Decryption Order:** Subkeys are used in reverse order ($K_n, K_{n-1}, \dots, K_1$) for decryption.
*   **XOR Operation:** Crucial for combining the output of the round function with the data half, and for reversing the operation during decryption.
*   **Halves Reversal:** In decryption, the role of the left and right halves is implicitly reversed through the XOR operation and the order of processing.

---

### 7. Important Points to Remember

*   **Symmetry in Design:** The Feistel structure makes implementing both encryption and decryption using the same logic (but reversed subkeys) possible, which is a significant practical advantage.
*   **Round Function Security:** The security of the entire cipher heavily depends on the strength and design of the round function $f$. It must be a **one-way function** (hard to reverse without the key).
*   **Key Schedule Strength:** A well-designed key schedule is essential to ensure that all subkeys are unpredictable and distinct, preventing related-key attacks.
*   **Number of Rounds:** A sufficient number of rounds is critical to achieve diffusion (spreading the influence of one plaintext bit over many ciphertext bits) and confusion (obscuring the relationship between the ciphertext and the key).
*   **Reversibility of XOR:** The property $A \oplus B \oplus B = A$ is fundamental to how decryption recovers the original data.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=mc979OhitAg) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=F_4HkL5r4n0) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |


### 8. References and Content Incorporation

The principles of the Feistel structure, including its decryption algorithm, are extensively covered in:

*   **Stallings, William. *Cryptography and Network Security: Principles and Practice*. 4th ed. Prentice Hall India, 2006.**
    *   Chapter 3 (Block Ciphers and the Data Encryption Standard) would detail the Feistel structure as the basis for DES, explaining the encryption and decryption process. It would highlight the role of the round function and the key schedule. The self-reciprocal property would be a key discussion point.

*   **Forouzan, Behrouz A. *Cryptography and Network Security*. Tata McGraw-Hill, 2008.**
    *   Similar to Stallings, Forouzan's book would dedicate sections to block ciphers and introduce the Feistel cipher as a generic structure. The decryption process and its relationship to encryption would be explained, emphasizing the reversed subkey order.

The other reference books, while valuable for broader cryptographic understanding (e.g., abstract algebra, number theory, elliptic curves), are less directly focused on the mechanics of Feistel decryption itself, but provide the mathematical underpinnings for the design of round functions.

---

### 9. Practice Questions and Exercises

**Question 1:**
Describe the core principle of the Feistel cipher structure and why it is advantageous for symmetric block ciphers.

**Question 2:**
Given a 4-round Feistel cipher, what is the order in which the subkeys ($K_1, K_2, K_3, K_4$) would be applied during the decryption of a ciphertext block?

**Question 3:**
Consider the Feistel encryption step: $R_i = L_{i-1} \oplus f(R_{i-1}, K_i)$. Using this, derive the formula for the decryption step to recover $L_{i-1}$ from $L_i$ and $R_i$, where $L_i = R_{i-1}$ and $R_i = L_{i-1} \oplus f(R_{i-1}, K_i)$.

**Question 4:**
If the round function $f$ in a Feistel cipher were not a one-way function (i.e., easy to reverse), what security implications would this have for the decryption process?

---

### Answers to Practice Questions

**Answer 1:**
The core principle of the Feistel cipher structure is to divide the plaintext block into two halves and iteratively apply a round function to one half, combining its output with the other half using an XOR operation. The advantage is that encryption and decryption processes are virtually identical, differing only in the order of subkey application. This "self-reciprocal" property allows for a single, simpler hardware or software implementation for both operations.

**Answer 2:**
During decryption, the subkeys are applied in reverse order. For a 4-round Feistel cipher, the order of subkeys for decryption would be: $K_4, K_3, K_2, K_1$.

**Answer 3:**
We are given:
Encryption:
$L_i = R_{i-1}$
$R_i = L_{i-1} \oplus f(R_{i-1}, K_i)$

To decrypt, we have $L_i$ and $R_i$, and we want to find $L_{i-1}$ and $R_{i-1}$ using subkey $K_i$.

1.  We know $L_i = R_{i-1}$. So, the right half for decryption is simply the left half from the ciphertext: $R_{i-1}' = L_i$.
2.  We want to recover $L_{i-1}$. From the encryption equation $R_i = L_{i-1} \oplus f(R_{i-1}, K_i)$.
3.  To isolate $L_{i-1}$, we XOR both sides with $f(R_{i-1}, K_i)$:
    $R_i \oplus f(R_{i-1}, K_i) = L_{i-1} \oplus f(R_{i-1}, K_i) \oplus f(R_{i-1}, K_i)$
    $R_i \oplus f(R_{i-1}, K_i) = L_{i-1}$
4.  Substitute $R_{i-1}$ with $L_i$ (from step 1):
    $L_{i-1}' = R_i \oplus f(L_i, K_i)$

Thus, the decryption step to recover $L_{i-1}$ is $L_{i-1} = R_i \oplus f(L_i, K_i)$.

**Answer 4:**
If the round function $f$ were not a one-way function and could be easily reversed (i.e., given $f(X, K)$, one could easily find $X$), then during decryption, an attacker could potentially reverse the round function operation without needing the subkey $K_i$. This would severely compromise the security of the cipher, potentially allowing for direct decryption of ciphertext without knowing the secret key, or greatly simplifying cryptanalysis.

---