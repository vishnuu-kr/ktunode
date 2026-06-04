---
title: "Properties of linear block codes: Syndrome, error detection."
subject: "CODING THEORY"
module: "Module 1: Binary block codes, Minimum distance, Error"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b103"
status: "completed"
scrapedAt: "2026-05-20T16:10:24.893Z"
---
## Coding Theory: Module 1 - Properties of Linear Block Codes: Syndrome, Error Detection

**Subject:** Coding Theory
**Module:** Module 1: Binary block codes, Minimum distance, Error
**Topic:** Properties of linear block codes: Syndrome, error detection.

**Learning Outcomes:**

*   Understand the concept of a syndrome in the context of linear block codes.
*   Calculate the syndrome for a given received vector.
*   Explain how the syndrome is used for error detection.
*   Determine the error detection capabilities of a linear block code based on its minimum distance.
*   Apply the concept of syndrome decoding to detect errors.
*   Understand the limitations of error detection.

---

### 1. Introduction to Linear Block Codes (Brief Recap)

*   **Block Code:** Encodes *k* message bits into *n* codeword bits (n > k).  Each message block is mapped to a unique codeword.
*   **Linear Block Code:** A block code where the codewords form a linear subspace of the vector space of all possible *n*-bit sequences. This means the sum (modulo-2) of any two codewords is also a codeword.
*   **(n, k) Linear Block Code:** Represents a linear block code with *n* being the codeword length and *k* being the message length.
*   **Generator Matrix (G):** A *k x n* matrix that generates all possible codewords.  A message vector *m* of length *k* is encoded as *c = mG*, where *c* is the codeword of length *n*.
*   **Parity-Check Matrix (H):**  An *(n-k) x n* matrix such that *GH<sup>T</sup> = 0*. This matrix is used to check if a received vector is a valid codeword.

### 2. The Syndrome

The syndrome is a crucial concept for error detection and correction in linear block codes.  It provides a way to determine if a received vector contains errors.

*   **Definition:**  The syndrome **s** of a received vector **r** is calculated as:

    **s = rH<sup>T</sup>**

    where:
    *   **r** is the received vector of length *n*.
    *   **H** is the parity-check matrix of dimension *(n-k) x n*.
    *   **H<sup>T</sup>** is the transpose of the parity-check matrix.
    *   **s** is the syndrome, a vector of length *(n-k)*.

*   **Key Property:** If **r** is a valid codeword (i.e., no errors), then **s = 0**. This is because if **r = c** and **c = mG**, then **s = c H<sup>T</sup> = (mG)H<sup>T</sup> = m(GH<sup>T</sup>) = m(0) = 0**.

*   **Interpretation:** A non-zero syndrome indicates that the received vector **r** contains errors. The specific value of the syndrome can, under certain conditions, be used to identify and correct the errors (discussed in error correction).

### 3. Calculating the Syndrome

*   **Step-by-step process:**

    1.  Obtain the parity-check matrix **H**.
    2.  Obtain the received vector **r**.
    3.  Calculate the transpose of the parity-check matrix, **H<sup>T</sup>**.
    4.  Multiply the received vector **r** by **H<sup>T</sup>** to obtain the syndrome **s**:  **s = rH<sup>T</sup>**. Remember that all calculations are done modulo-2.

*   **Example:**

    Consider a (7,4) linear block code with parity-check matrix:

    ```
    H = [ 1 0 1 1 0 0 0 ]
        [ 0 1 1 0 1 0 0 ]
        [ 1 1 1 0 0 1 0 ]
        [ 1 1 0 0 0 0 1 ]
    ```

    Suppose the received vector is **r = [1 0 1 0 1 1 0]**.

    1.  **H<sup>T</sup>:**

        ```
        H^T = [ 1 0 1 1 ]
              [ 0 1 1 1 ]
              [ 1 1 1 0 ]
              [ 1 0 0 0 ]
              [ 0 1 0 0 ]
              [ 0 0 1 0 ]
              [ 0 0 0 1 ]
        ```

    2.  **Calculate the syndrome:**

        ```
        s = rH^T = [1 0 1 0 1 1 0] * H^T
                 = [(1*1 + 0*0 + 1*1 + 0*1 + 1*0 + 1*0 + 0*0) (1*0 + 0*1 + 1*1 + 0*0 + 1*1 + 1*0 + 0*0) (1*1 + 0*1 + 1*1 + 0*0 + 1*0 + 1*1 + 0*0) (1*1 + 0*1 + 1*0 + 0*0 + 1*0 + 1*0 + 0*1)]
                 = [ (1 + 0 + 1 + 0 + 0 + 0 + 0) (0 + 0 + 1 + 0 + 1 + 0 + 0) (1 + 0 + 1 + 0 + 0 + 1 + 0) (1 + 0 + 0 + 0 + 0 + 0 + 0) ]
                 = [ 0 0 1 1 ]
        ```

    Since the syndrome **s = [0 0 1 1]** is not zero, we know that the received vector **r** contains at least one error.

### 4. Error Detection using the Syndrome

*   **Principle:** The syndrome provides a mechanism to detect the presence of errors in the received vector.
*   **Decision Rule:**
    *   If **s = 0**, assume the received vector is error-free (or contains an undetectable error pattern).
    *   If **s ≠ 0**, declare that at least one error has occurred.
*   **Error Detection Capability and Minimum Distance (d<sub>min</sub>):**

    *   The minimum distance of a linear block code (d<sub>min</sub>) is the minimum Hamming distance between any two distinct codewords in the code.  The Hamming distance is the number of positions in which two codewords differ.
    *   A code with minimum distance *d<sub>min</sub>* can **detect** up to *d<sub>min</sub> - 1* errors.  This is because if a codeword is corrupted by *d<sub>min</sub> - 1* or fewer errors, the resulting received vector will be closer to the original codeword than to any other valid codeword.
*   **Limitations of Error Detection:**

    *   If the number of errors in the received vector is *d<sub>min</sub>* or greater, the syndrome might become zero, leading to the incorrect conclusion that no errors occurred. This is because the errors might have transformed the received vector into another valid codeword.
    *   Error detection alone cannot correct errors. It only indicates their presence. Error *correction* requires more sophisticated techniques, which often involve mapping each non-zero syndrome to a specific error pattern.

### 5. Syndrome Decoding (Introduction)

Syndrome decoding is a technique used for both error detection and error correction.

*   **Concept:**  Each unique syndrome is associated with a specific *error pattern*.
*   **Process:**
    1.  Calculate the syndrome **s** of the received vector **r**.
    2.  Look up the corresponding error pattern **e** associated with the syndrome **s** in a precomputed syndrome table.  This table is constructed during the code design process.
    3.  Estimate the transmitted codeword as **c = r + e** (modulo-2 addition).

*   **Ideal Scenario:** If the code is designed such that each error pattern with a high probability of occurring (e.g., single-bit errors, double-bit errors) has a unique syndrome, then syndrome decoding can effectively correct these errors.
*   **Complexity:**  The complexity of syndrome decoding depends on the size of the syndrome table, which is related to the number of correctable error patterns.

### 6. Example Illustrating Error Detection

Consider a (7,4) Hamming code with the following Generator Matrix:

```
G = [ 1 0 0 0 1 1 0 ]
    [ 0 1 0 0 1 0 1 ]
    [ 0 0 1 0 0 1 1 ]
    [ 0 0 0 1 1 1 1 ]
```

The corresponding Parity Check Matrix is:

```
H = [ 1 1 0 1 1 0 0 ]
    [ 1 0 1 1 0 1 0 ]
    [ 0 1 1 1 0 0 1 ]
```

The minimum distance of this code is *d<sub>min</sub> = 3*.  This means it can detect up to *d<sub>min</sub> - 1 = 2* errors.

Let's say the message **m = [1 0 1 0]** is encoded.  The codeword is:

**c = mG = [1 0 1 0] * G = [1 0 1 0 1 0 1]**

Suppose the codeword is transmitted and two errors occur during transmission, resulting in the received vector:

**r = [0 0 1 0 1 1 1]** (errors in the first and sixth bits).

Now, let's calculate the syndrome:

```
s = rH^T = [0 0 1 0 1 1 1] * [1 1 0; 1 0 1; 0 1 1; 1 1 1; 1 0 0; 0 1 0; 0 0 1]
        = [ (0+0+0+0+1+1+0) (0+0+1+0+0+1+0) (0+0+1+0+0+0+1) ]
        = [ 0 0 0 ]
```

In this specific case, even though there were two errors, the syndrome is zero.  This demonstrates the *limitation* of error detection. Because the number of errors equals the minimum distance, the received vector is now a valid codeword.  Therefore, we would *incorrectly* assume the received vector is error-free.

However, if there was only *one* error:

**r = [0 0 1 0 1 0 1]** (error in the first bit)

```
s = rH^T = [0 0 1 0 1 0 1] * [1 1 0; 1 0 1; 0 1 1; 1 1 1; 1 0 0; 0 1 0; 0 0 1]
        = [ (0+0+0+0+1+0+0) (0+0+1+0+0+0+0) (0+0+1+0+0+0+1) ]
        = [ 1 1 0 ]
```

Since the syndrome is non-zero **s = [1 1 0]**, we correctly detect that an error has occurred.

### 7. Summary: Key Points to Remember

*   **Syndrome Calculation:**  **s = rH<sup>T</sup>**
*   **Error Detection:**  A non-zero syndrome indicates the presence of errors.
*   **Minimum Distance (d<sub>min</sub>):**  Determines the error detection capability (up to *d<sub>min</sub> - 1* errors can be detected).
*   **Limitations:** Codes cannot reliably detect *d<sub>min</sub>* or more errors.  The syndrome might become zero, leading to an incorrect decision.
*   **Syndrome Decoding:** A technique linking syndromes to error patterns for error correction (and detection).

### 8. Practice Questions

1.  Given a (6, 3) linear block code with the following parity check matrix:

    ```
    H = [ 1 0 1 0 1 1 ]
        [ 0 1 1 0 0 1 ]
        [ 0 0 0 1 1 1 ]
    ```

    Calculate the syndrome for the received vector **r = [1 1 0 1 0 1]**. Does this received vector contain errors?

2.  What is the error detection capability of a linear block code with a minimum distance of 5?

3.  Explain why error detection alone is not sufficient for reliable communication.

4.  A (7,4) linear block code has a minimum distance of 3. If the received vector contains 3 errors, will the error be detected? Explain your answer.

### 9. Answers to Practice Questions

1.  **Syndrome Calculation:**

    ```
    H^T = [ 1 0 0 ]
          [ 0 1 0 ]
          [ 1 1 0 ]
          [ 0 0 1 ]
          [ 1 0 1 ]
          [ 1 1 1 ]
    ```

    ```
    s = rH^T = [1 1 0 1 0 1] * H^T
             = [(1*1 + 1*0 + 0*1 + 1*0 + 0*1 + 1*1) (1*0 + 1*1 + 0*1 + 1*0 + 0*0 + 1*1) (1*0 + 1*0 + 0*0 + 1*1 + 0*1 + 1*1) ]
             = [ (1+0+0+0+0+1) (0+1+0+0+0+1) (0+0+0+1+0+1) ]
             = [ 0 0 0 ]
    ```

    Since the syndrome **s = [0 0 0]**, the code *detects no errors*. However, that does not guarantee that there are no errors. There could be an undetectable error pattern that transforms the received vector to another valid codeword.

2.  **Error Detection Capability:** A code with a minimum distance of 5 can detect up to 5 - 1 = **4** errors.

3.  **Explanation:** Error detection only indicates the presence of errors.  It doesn't provide any information about the location or nature of the errors.  Without knowing how to correct the errors, the data is still unreliable.  The receiver would need to request a retransmission of the data, which may not always be feasible or desirable.

4.  **Answer:** No, the error will *not necessarily be detected*. While the minimum distance of 3 implies it can detect up to 2 errors, with exactly 3 errors the received vector may be another valid codeword, resulting in a syndrome of zero. The code won't detect these errors. In general, when the number of errors equals or exceeds the minimum distance, the code might not be able to detect all errors.
