---
title: "Binary block codes, Minimum distance, Error-detecting capability and error-correcting capability."
subject: "CODING THEORY"
module: "Module 1: Binary block codes, Minimum distance, Error"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b101"
status: "completed"
scrapedAt: "2026-05-20T16:10:23.422Z"
---
# CODING THEORY - Module 1: Binary Block Codes, Minimum Distance, Error

## Topic: Binary Block Codes, Minimum Distance, Error-Detecting & Error-Correcting Capabilities

**Learning Outcomes:**

*   Understand the concept of binary block codes.
*   Define and calculate the minimum distance of a code.
*   Relate minimum distance to error-detecting capability.
*   Relate minimum distance to error-correcting capability.

### 1. Binary Block Codes

*   **Definition:** A binary block code is a mapping of *k*-bit message words to *n*-bit codewords, where *n* > *k*.  We often denote such a code as an (n, k) code. The code adds redundancy (n-k bits) to the message for error detection and correction.

*   **Components:**
    *   **Message Word (k-bit):**  The original data to be transmitted.
    *   **Codeword (n-bit):**  The *n*-bit string representing the message word after encoding.
    *   **Encoding Function:** The rule or algorithm that maps message words to codewords.
    *   **Decoding Function:**  The rule or algorithm that maps received words (possibly with errors) to message words.

*   **Key Characteristics:**
    *   **Fixed Length:** Both message words and codewords have a fixed length (*k* and *n*, respectively). This distinguishes them from variable-length codes.
    *   **Binary:**  Uses only two symbols, typically 0 and 1.
    *   **Block Code:** Each message word is encoded independently into a corresponding codeword.

*   **Code Rate (R):**  The ratio of message bits to codeword bits: R = k/n. A higher code rate means less redundancy and therefore potentially lower error-correcting capability.

*   **Example:** Consider a (4, 2) code with the following mapping:
    *   00 -> 0000
    *   01 -> 0110
    *   10 -> 1001
    *   11 -> 1111

*   **Mathematical Representation:** Let  `C` be the code.  `C` is a subset of all possible *n*-bit strings.  `C ⊆ {0,1}ⁿ`

### 2. Minimum Distance (d<sub>min</sub>)

*   **Definition:** The minimum distance of a code is the smallest Hamming distance between any two distinct codewords in the code.

*   **Hamming Distance:** The number of positions in which two codewords differ. Denoted as d(x, y), where x and y are codewords.

*   **Calculating Minimum Distance:**
    1.  List all codewords in the code.
    2.  Calculate the Hamming distance between every pair of distinct codewords.
    3.  The minimum distance (d<sub>min</sub>) is the smallest of these calculated distances.

*   **Formula:**  `d_min = min {d(c_i, c_j) | c_i, c_j ∈ C, c_i ≠ c_j }`

*   **Example (Continuing from the (4, 2) code above):**

    *   Codewords: 0000, 0110, 1001, 1111
    *   d(0000, 0110) = 2
    *   d(0000, 1001) = 2
    *   d(0000, 1111) = 4
    *   d(0110, 1001) = 4
    *   d(0110, 1111) = 2
    *   d(1001, 1111) = 2

    Therefore, d<sub>min</sub> = 2

### 3. Error-Detecting Capability

*   **Theorem:** A code with minimum distance *d<sub>min</sub>* can detect up to *d<sub>min</sub>* - 1 errors.

*   **Explanation:** If a received word has *d<sub>min</sub>* - 1 or fewer errors, it will still be closer to the original codeword than any other valid codeword.  The decoder can recognize that the received word is not a valid codeword and thus detect an error has occurred.  However, it cannot know *which* codeword was actually sent.

*   **Example (Continuing from the (4, 2) code above where d<sub>min</sub> = 2):**
    *   This code can detect up to 2 - 1 = 1 error.
    *   If the codeword 0000 is transmitted and a single error occurs (e.g., the received word is 0001), the decoder knows that an error happened because 0001 is not a valid codeword.
    *   If two errors occur (e.g., the received word is 0011), the code cannot guarantee detection because it might be confused with another valid codeword.

### 4. Error-Correcting Capability

*   **Theorem:** A code with minimum distance *d<sub>min</sub>* can correct up to ⌊(d<sub>min</sub> - 1) / 2⌋ errors, where ⌊x⌋ denotes the floor function (the largest integer less than or equal to x).

*   **Explanation:**  For error correction, we need to ensure that the received word with up to ⌊(d<sub>min</sub> - 1) / 2⌋ errors is closer to the original transmitted codeword than to any other codeword. This ensures that the decoder can correctly identify the original codeword.

*   **Example (Continuing from the (4, 2) code above where d<sub>min</sub> = 2):**
    *   This code can correct up to ⌊(2 - 1) / 2⌋ = ⌊1/2⌋ = 0 errors.
    *   The code can detect one error but cannot correct it.
    *   If 0000 is transmitted and 0001 is received (one error), the decoder knows an error occurred but doesn't know which of the codewords is the closest.

*   **Example 2: Consider a (3,1) code with the following codewords: 000, 111.  d<sub>min</sub> = 3**
    * Error-detecting capability = d<sub>min</sub> - 1 = 3 - 1 = 2.  This code can detect up to 2 errors.
    * Error-correcting capability = ⌊(d<sub>min</sub> - 1) / 2⌋ = ⌊(3-1)/2⌋ = ⌊1⌋ = 1.  This code can correct up to 1 error.

### 5. Key Relationship between d<sub>min</sub>, Error Detection, and Error Correction

*   **For a code to detect *t* errors:**  `d_min ≥ t + 1`
*   **For a code to correct *t* errors:**  `d_min ≥ 2t + 1`

*   **For a code to detect *t* errors AND correct *s* errors:** `d_min ≥ t + s + 1` where t > s

### 6. Important Points to Remember

*   The minimum distance is a fundamental property of a code that determines its error-detecting and error-correcting capabilities.
*   A larger minimum distance implies better error-detecting and error-correcting capabilities.
*   Error correction is more demanding than error detection (requires a larger minimum distance).
*   Code rate (R = k/n) and minimum distance are often traded off against each other.  Increasing the code rate typically reduces the minimum distance, and vice versa.

### 7. Practice Questions/Exercises

1.  **Consider the following (5, 2) code:**
    *   00 -> 00000
    *   01 -> 01101
    *   10 -> 10110
    *   11 -> 11011

    a.  What is the minimum distance of this code?
    b.  How many errors can this code detect?
    c.  How many errors can this code correct?

2.  **A code has a minimum distance of 5.  What is the maximum number of errors it can detect?  What is the maximum number of errors it can correct?**

3.  **Design a (3, 2) code. Determine its minimum distance, error-detecting capability, and error-correcting capability.**

4.  **A Hamming code has a minimum distance of 3. What is its error-detecting and error-correcting capabilities?**

### 8. Solutions to Practice Questions/Exercises

1.  a.  **Minimum Distance:**

    *   d(00000, 01101) = 3
    *   d(00000, 10110) = 3
    *   d(00000, 11011) = 3
    *   d(01101, 10110) = 4
    *   d(01101, 11011) = 2
    *   d(10110, 11011) = 2

    d<sub>min</sub> = 2

    b.  **Error-Detecting Capability:** d<sub>min</sub> - 1 = 2 - 1 = 1.  The code can detect 1 error.

    c.  **Error-Correcting Capability:** ⌊(d<sub>min</sub> - 1) / 2⌋ = ⌊(2 - 1) / 2⌋ = ⌊1/2⌋ = 0.  The code can correct 0 errors.

2.  *   **Error-Detecting:** d<sub>min</sub> - 1 = 5 - 1 = 4 errors
    *   **Error-Correcting:** ⌊(d<sub>min</sub> - 1) / 2⌋ = ⌊(5 - 1) / 2⌋ = ⌊4/2⌋ = 2 errors

3.  **Possible (3, 2) code:**
    *   00 -> 000
    *   01 -> 011
    *   10 -> 101
    *   11 -> 110

    *   d(000, 011) = 2
    *   d(000, 101) = 2
    *   d(000, 110) = 2
    *   d(011, 101) = 2
    *   d(011, 110) = 2
    *   d(101, 110) = 2

    *   d<sub>min</sub> = 2
    *   Error-detecting capability: 1 error
    *   Error-correcting capability: 0 errors

4.  A Hamming code with d<sub>min</sub> = 3:
    *   Error-detecting capability: d<sub>min</sub> - 1 = 3 - 1 = 2 errors
    *   Error-correcting capability: ⌊(d<sub>min</sub> - 1) / 2⌋ = ⌊(3 - 1) / 2⌋ = ⌊1⌋ = 1 error
