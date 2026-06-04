---
title: "Introduction to linear block codes, generator matrix and parity check matrix."
subject: "CODING THEORY"
module: "Module 1: Binary block codes, Minimum distance, Error"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b102"
status: "completed"
scrapedAt: "2026-05-20T16:10:24.131Z"
---
# CODING THEORY - Module 1: Binary Block Codes, Minimum Distance, Error

## Topic: Introduction to Linear Block Codes, Generator Matrix and Parity Check Matrix

### Learning Outcomes:

*   Understand the concept of Linear Block Codes (LBCs).
*   Define and understand the role of the Generator Matrix (G).
*   Define and understand the role of the Parity Check Matrix (H).
*   Learn how to encode a message using the Generator Matrix.
*   Learn how to detect errors using the Parity Check Matrix.
*   Understand the relationship between the Generator Matrix and Parity Check Matrix.

### 1. Introduction to Linear Block Codes (LBCs)

*   **Definition:** A linear block code (LBC) is a block code where the set of codewords forms a linear subspace of the vector space of all possible messages.  This means that the sum of any two codewords is also a codeword.

*   **Key Properties:**
    *   **Block Code:** Operates on fixed-size blocks of data.
    *   **Linearity:** The sum (modulo-2) of any two codewords is also a codeword.
    *   **Code Parameters:** Typically denoted as (n, k), where:
        *   `n` = the length of the codeword (total number of bits in the codeword).
        *   `k` = the length of the message (number of information bits).
        *   `n-k` = the number of parity bits (redundancy).

*   **Why Linear Codes?**  Linearity simplifies encoding and decoding, making them practical for real-world applications.  They also allow for structured algebraic analysis, facilitating the design of efficient codes.

*   **Binary LBCs:** In this context, we primarily deal with *binary* LBCs, where the symbols are 0s and 1s, and addition is performed modulo-2 (XOR operation).

### 2. Generator Matrix (G)

*   **Definition:** The generator matrix (G) is a `k x n` matrix that, when multiplied by a message vector `m` of length `k`, produces the corresponding codeword `c` of length `n`.  In other words:

    `c = m * G`

*   **Form of the Generator Matrix:** A systematic generator matrix has the form:

    `G = [I_k | P]`

    Where:
    *   `I_k` is a `k x k` identity matrix.  The identity matrix part corresponds to the message bits in the codeword.
    *   `P` is a `k x (n-k)` matrix representing the parity bits.  This is the parity check portion of the matrix.

*   **Encoding with the Generator Matrix:**  To encode a message `m`, multiply it by the generator matrix `G`. The resulting vector `c` is the codeword.

*   **Example:**

    Let's say we have a (7, 4) LBC.  This means codewords are of length 7, and messages are of length 4.  A possible generator matrix is:

    `G = | 1 0 0 0 | 1 1 0 |`
        `| 0 1 0 0 | 1 0 1 |`
        `| 0 0 1 0 | 0 1 1 |`
        `| 0 0 0 1 | 1 1 1 |`

    If we have the message `m = [1 0 1 0]`, then the codeword `c` is calculated as:

    `c = m * G = [1 0 1 0] * G`
    `c = [ (1*1 + 0*0 + 1*0 + 0*0) (1*1 + 0*1 + 1*0 + 0*1) (1*0 + 0*0 + 1*1 + 0*1) (1*0 + 0*0 + 1*0 + 0*1) (1*1 + 0*1 + 1*0 + 0*1) (1*1 + 0*0 + 1*1 + 0*1) (1*0 + 0*1 + 1*1 + 0*1) ]`
    `c = [ 1 1 1 0 1 0 1 ]`

    So, the codeword `c = [1 1 1 0 1 0 1]` corresponds to the message `m = [1 0 1 0]`.

### 3. Parity Check Matrix (H)

*   **Definition:** The parity check matrix (H) is an `(n-k) x n` matrix that can be used to detect errors in a received codeword.  A valid codeword `c` must satisfy the following condition:

    `H * c^T = 0`  (where `c^T` is the transpose of the codeword vector `c`)

    The result of this multiplication is called the *syndrome* `s`.  If the syndrome `s` is the zero vector, the codeword is likely valid (though errors may still be present, undetected).  If the syndrome is *not* the zero vector, an error has been detected.

*   **Form of the Parity Check Matrix:**  If the generator matrix is in the systematic form `G = [I_k | P]`, then the parity check matrix is:

    `H = [P^T | I_(n-k)]`

    Where:
    *   `P^T` is the transpose of the matrix `P` from the generator matrix.
    *   `I_(n-k)` is an `(n-k) x (n-k)` identity matrix.

*   **Error Detection with the Parity Check Matrix:**  Upon receiving a potentially corrupted codeword `r`, we calculate the syndrome `s = H * r^T`.
    *   If `s = 0`, then `r` is either a valid codeword or contains an undetected error.
    *   If `s != 0`, then `r` contains an error.

*   **Example:**

    Using the same (7, 4) code and generator matrix as before:

    `G = | 1 0 0 0 | 1 1 0 |`
        `| 0 1 0 0 | 1 0 1 |`
        `| 0 0 1 0 | 0 1 1 |`
        `| 0 0 0 1 | 1 1 1 |`

    Then `P` from `G = [I_k | P]` is:

    `P = | 1 1 0 |`
        `| 1 0 1 |`
        `| 0 1 1 |`
        `| 1 1 1 |`

    The transpose of `P` is:

    `P^T = | 1 1 0 1 |`
          `| 1 0 1 1 |`
          `| 0 1 1 1 |`

    Therefore, the parity check matrix is:

    `H = | 1 1 0 1 | 1 0 0 |`
        `| 1 0 1 1 | 0 1 0 |`
        `| 0 1 1 1 | 0 0 1 |`

    Now, let's say we receive the codeword `r = [1 1 1 0 1 0 1]` (the correct codeword from the previous example).  Calculate the syndrome:

    `s = H * r^T`

    `s =  | 1 1 0 1 | 1 0 0 | * | 1 |`
          `| 1 0 1 1 | 0 1 0 |   | 1 |`
          `| 0 1 1 1 | 0 0 1 |   | 1 |`
                             `     | 0 |`
                             `     | 1 |`
                             `     | 0 |`
                             `     | 1 |`

    `s = | (1*1 + 1*1 + 0*1 + 1*0 + 1*1 + 0*0 + 0*1) |`
        `| (1*1 + 0*1 + 1*1 + 1*0 + 0*1 + 1*0 + 0*1) |`
        `| (0*1 + 1*1 + 1*1 + 1*0 + 0*1 + 0*0 + 1*1) |`

    `s = | 0 |`
        `| 0 |`
        `| 0 |`

    Since `s = [0 0 0]`, the syndrome is the zero vector, and the received word `r` is likely a valid codeword (or has undetected errors).

    Now, let's say we receive `r = [1 1 0 0 1 0 1]`.  Calculate the syndrome:

    `s = H * r^T = [1 0 1]`

    Since `s != [0 0 0]`, the syndrome is *not* the zero vector, and the received word `r` contains an error.

### 4. Relationship Between G and H

*   The generator matrix `G` and the parity check matrix `H` are dual to each other.  This means that the rows of `G` span the code space (the set of all valid codewords), and the rows of `H` span the null space of `G`.
*   Mathematically, this relationship is expressed as:

    `G * H^T = 0` (Zero Matrix)

*   This relationship is fundamental in coding theory and is used to ensure that the encoding and error detection processes work correctly.

### 5. Important Points to Remember

*   **Linearity:** The sum of any two codewords in a linear block code is also a codeword.
*   **Generator Matrix (G):** Used for encoding messages into codewords. `c = m * G`. Systematic form: `G = [I_k | P]`.
*   **Parity Check Matrix (H):** Used for detecting errors in received words. `H * c^T = 0` for valid codewords. Derived from G: `H = [P^T | I_(n-k)]`.
*   **Syndrome (s):** `s = H * r^T`.  If `s = 0`, no error detected (but may be present). If `s != 0`, an error is detected.
*   **Duality:** `G * H^T = 0`.
*   Understanding the matrix multiplication over GF(2) (modulo-2 arithmetic) is crucial.

### 6. Practice Questions/Exercises

1.  **Question:**  Given a (6, 3) linear block code with the generator matrix:

    `G = | 1 0 0 | 1 1 0 |`
        `| 0 1 0 | 0 1 1 |`
        `| 0 0 1 | 1 0 1 |`

    a) Find all possible codewords.
    b) Determine the parity check matrix H.
    c) If the received word is `r = [1 0 1 1 1 0]`, calculate the syndrome and determine if an error is detected.

2.  **Question:** Design a (5, 2) linear block code (find suitable G and H).

3.  **Question:** Explain in your own words the purpose of the Generator and Parity Check matrices.

**Answers:**

1.  **a) Possible Codewords:**
    The possible messages are [0 0 0], [0 0 1], [0 1 0], [0 1 1], [1 0 0], [1 0 1], [1 1 0], [1 1 1]. Encode each message by multiplying with G: `c = m * G`.  The codewords are:
    *   [0 0 0 0 0 0]
    *   [0 0 1 1 0 1]
    *   [0 1 0 0 1 1]
    *   [0 1 1 1 1 0]
    *   [1 0 0 1 1 0]
    *   [1 0 1 0 1 1]
    *   [1 1 0 1 0 1]
    *   [1 1 1 0 0 0]

    **b) Parity Check Matrix (H):**

    `H = | 1 0 1 | 1 0 0 |`
        `| 1 1 0 | 0 1 0 |`
        `| 0 1 1 | 0 0 1 |`

    **c) Syndrome Calculation:**

    `s = H * r^T = [1 1 1]`

    Since `s` is not the zero vector, an error is detected.

2.  **Answer:**  (One possible solution)

    Let's define G as:

    `G = | 1 0 | 1 1 0 |`
        `| 0 1 | 0 1 1 |`

    Then, `H = | 1 0 0 | 1 0 0 |`
        `| 1 1 0 | 0 1 0 |`
        `| 0 1 1 | 0 0 1 |`

    (Verification:  `G * H^T = 0`)

3.  **Answer:** (Example)

    The **Generator Matrix (G)** is like a "codebook creator." You give it a raw message, and it uses its internal structure to transform the message into a longer, more robust codeword that can withstand some corruption during transmission.

    The **Parity Check Matrix (H)** acts like a "corruption detector." When you receive a (potentially corrupted) codeword, you feed it to the Parity Check Matrix.  If the matrix outputs all zeros (the zero vector), then the codeword is probably intact (or contains undetectable errors). If it outputs anything else, then something is wrong with the codeword, and an error is detected.  It is based on properties to detect if bits have flipped during transmission.
