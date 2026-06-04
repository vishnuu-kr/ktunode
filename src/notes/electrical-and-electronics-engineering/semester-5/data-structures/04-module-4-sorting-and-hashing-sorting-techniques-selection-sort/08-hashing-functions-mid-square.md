---
title: "Hashing functions – Mid square"
subject: "DATA STRUCTURES"
module: "Module 4: Sorting and Hashing: Sorting Techniques – Selection Sort"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f363fa"
status: "completed"
scrapedAt: "2026-05-23T16:20:55.129Z"
---
## Data Structures: Module 4 - Sorting and Hashing

### Topic: Hashing Functions - Mid-Square Method

This module delves into two fundamental concepts in data structures: **Sorting** and **Hashing**. While Selection Sort is discussed under sorting techniques, our primary focus here will be on **Hashing Functions**, specifically the **Mid-Square Method**.

---

### 1. Introduction to Hashing

Hashing is a technique used to store and retrieve data efficiently. It involves using a **hash function** to compute an index into an array (often called a hash table or hash map) from a given key. The goal is to achieve average-case O(1) time complexity for insertion, deletion, and search operations.

**Key Concepts:**

*   **Key:** A value used to identify an item in a data structure.
*   **Hash Function:** A function that maps keys to indices in the hash table.
*   **Hash Table:** An array-like structure where data is stored based on the computed hash values.
*   **Hash Value/Hash Code:** The numerical output of a hash function for a given key.
*   **Collision:** When two different keys map to the same hash index. Collisions are inevitable and need to be handled.

**Relevance to Course Outcomes:**

*   **CO5: Apply appropriate hash function to store and access a given dataset (Knowledge Level: K3)** This topic directly addresses CO5 by explaining how specific hash functions work and their application in data storage and retrieval.

---

### 2. The Mid-Square Hashing Method

The Mid-Square method is a technique for generating hash values by taking the square of the key and then extracting the middle digits of the squared value.

**How it Works:**

1.  **Square the Key:** Calculate the square of the input key ($K^2$).
2.  **Extract Middle Digits:** From the squared value, select a portion of the digits from the middle. The number of digits to extract is typically determined by the size of the hash table.

**Example:**

Let's assume we have a hash table of size 100 (indices 0-99). This means we need to extract 2 digits from the squared key.

*   **Key:** 45
    *   Square of the key: $45^2 = 2025$
    *   Extracting the middle 2 digits: **02** (or simply 2).
    *   **Hash Index:** 2

*   **Key:** 123
    *   Square of the key: $123^2 = 15129$
    *   Extracting the middle 2 digits: **51**.
    *   **Hash Index:** 51

*   **Key:** 78
    *   Square of the key: $78^2 = 6084$
    *   Extracting the middle 2 digits: **08** (or simply 8).
    *   **Hash Index:** 8

**Determining the Number of Digits to Extract:**

If the hash table has $M$ slots, and we want to extract $d$ digits, we need to ensure that $10^d \le M$. A common practice is to choose $d$ such that $10^d$ is the largest power of 10 less than or equal to $M$.

*   If $M = 1000$ (indices 0-999), we need 3 digits ($10^3 = 1000$).
*   If $M = 500$ (indices 0-499), we might choose 3 digits, as $10^3 = 1000$ is the smallest power of 10 greater than or equal to the number of digits in the largest possible key (if keys are integers, say up to 99999). However, a more practical approach is to select the number of digits based on the number of bits needed to represent the table size. If $M$ is roughly $2^p$, then we extract $p$ bits. For decimal, if $M \approx 10^d$, then we extract $d$ digits.

Let's consider a hash table of size $M$. We want to extract $d$ digits.
The squared key will have some number of digits. If the squared key has fewer than $d$ digits, we pad with leading zeros. If it has more than $d$ digits, we select the middle $d$ digits.

**Example with Padding and Selection:**

Hash Table Size $M = 100$ (needs 2 digits).

*   **Key:** 15
    *   Square: $15^2 = 225$
    *   Extract middle 2 digits: **22**. Hash Index: 22.

*   **Key:** 3
    *   Square: $3^2 = 9$
    *   Pad with leading zero: **09**
    *   Extract middle 2 digits: **09**. Hash Index: 9.

*   **Key:** 10
    *   Square: $10^2 = 100$
    *   Extract middle 2 digits: **00**. Hash Index: 0.

**Algorithm for Mid-Square Method:**

```
function midSquareHash(key, tableSize):
  squaredKey = key * key
  // Convert squaredKey to string for easier digit extraction
  squaredKeyStr = toString(squaredKey)
  numDigitsInTableSize = length(toString(tableSize - 1)) // or simply log10(tableSize)

  // Calculate the starting position for extracting digits
  // Ensure we don't go out of bounds if squaredKeyStr is short
  startPos = (length(squaredKeyStr) - numDigitsInTableSize) / 2

  // Handle cases where squaredKeyStr is shorter than numDigitsInTableSize
  if startPos < 0:
    // Pad squaredKeyStr with leading zeros to at least numDigitsInTableSize
    paddingNeeded = numDigitsInTableSize - length(squaredKeyStr)
    squaredKeyStr = "0" * paddingNeeded + squaredKeyStr
    startPos = 0 // Reset start position for padded string

  // Extract the middle digits
  hashValueStr = substring(squaredKeyStr, startPos, numDigitsInTableSize)

  // Convert the extracted string back to an integer
  hashIndex = parseInt(hashValueStr)

  // Ensure the hashIndex is within the table bounds (if the calculation was off)
  return hashIndex % tableSize
```

**Important Note on Implementation:** The exact implementation of "extracting middle digits" can vary. Often, it involves finding the most significant bit that contributes to the required number of digits and then extracting them.

**Let's refine the extraction logic:**

If the hash table size is $M$, we need to select digits such that the resulting index is between 0 and $M-1$.
Let $d$ be the number of digits required for $M-1$. For example, if $M=100$, $M-1=99$, which needs 2 digits. If $M=1000$, $M-1=999$, which needs 3 digits.
Let $K$ be the key. Compute $K^2$.
Let $K^2 = X$.
We want to find a sub-sequence of digits in $X$ to form the hash index.

Consider $M=100$. We need 2 digits.
Key $K=13$. $K^2 = 169$. We can extract the middle digit '6', which gives a 1-digit index (0-9). Not suitable for a 2-digit table.
We need to select digits that, when interpreted as a number, fall within the range [0, 99].

A more precise approach for Mid-Square:

1.  **Determine $d$**: The number of bits required to represent the table size. If $M$ is the table size, then $d \approx \log_2 M$. Or, if we're thinking in decimal, the number of digits in $M$. Let's stick with the decimal representation for this explanation. If $M = 100$, we need 2 digits.
2.  **Square the key $K$**: $K_{squared} = K \times K$.
3.  **Pad with leading zeros**: If $K_{squared}$ has fewer than $2d$ digits, pad it with leading zeros until it has $2d$ digits. The reasoning here is to have a fixed number of digits to select from.
4.  **Select middle $d$ digits**: From the padded $K_{squared}$ (which now has $2d$ digits), extract the $d$ digits starting from the $(d/2)$-th digit (if $d$ is even) or roughly the middle.

**Let's use a concrete example for clarity with padding and selection:**

Hash Table Size $M = 100$. We need 2 digits ($d=2$).
We aim for a squared value with $2d=4$ digits for easier middle extraction.

*   **Key:** 13
    *   Square: $13^2 = 169$.
    *   Pad to 4 digits: $0169$.
    *   Select middle 2 digits: The digits are at indices 1 and 2 (0-indexed). This would be '16'.
    *   **Hash Index:** 16. (This is within [0, 99]).

*   **Key:** 45
    *   Square: $45^2 = 2025$.
    *   Already 4 digits.
    *   Select middle 2 digits: The digits are at indices 1 and 2. This would be '02'.
    *   **Hash Index:** 2.

*   **Key:** 3
    *   Square: $3^2 = 9$.
    *   Pad to 4 digits: $0009$.
    *   Select middle 2 digits: The digits at indices 1 and 2. This would be '00'.
    *   **Hash Index:** 0.

*   **Key:** 123
    *   Square: $123^2 = 15129$.
    *   This has 5 digits. If we aim for $2d=4$ digits, we need a strategy.
        *   **Option 1 (Truncate/Discard):** If $K^2$ has more than $2d$ digits, truncate from the ends. For $15129$, we can keep the middle 4 digits: $5129$. Then select middle 2 digits: $12$. **Hash Index:** 12.
        *   **Option 2 (More sophisticated bit manipulation):** This is often preferred in practice for efficiency, especially when dealing with binary representations.

**Focusing on the core idea (decimal):**

The goal is to pick digits from the middle of the squared key that result in an index within the table bounds.

Let's refine the conceptual understanding without strict adherence to $2d$ digits:

1.  **Square the key:** $K^2$.
2.  **Determine the number of digits to extract ($d$)**: This is typically the number of digits in $M-1$. If $M=100$, $d=2$. If $M=1000$, $d=3$.
3.  **Extract $d$ digits from the middle of $K^2$**:
    *   If $K^2$ has $L$ digits:
        *   If $L < d$, pad with leading zeros and take the first $d$ digits.
        *   If $L \ge d$, find the starting position for the middle $d$ digits. The starting position is approximately $(L - d) / 2$.

**Example (Revised Logic for $M=100$, $d=2$):**

*   **Key:** 13
    *   Square: $169$ ($L=3$).
    *   Pad to minimum length for selection. If we need 2 digits, and we have 3, the middle digit is '6'. To get 2 digits, we could consider '16' or '69'. The method usually aims for a balance.
    *   Let's look at Horowitz, Sahni, Anderson-Freed: they describe it as squaring the key and then selecting digits from the middle. The exact number of digits to select is usually tied to the hash table size.

    A common way to implement "middle digits" for a table of size $10^k$:
    Take the square of the key. Divide the squared key by $10^k$ to remove the last $k$ digits. Then, divide the result by $10^k$ again and take the remainder to get the middle digits.

    Let's re-evaluate with this "division" approach.
    Assume $M = 10^k$. We want to extract $k$ digits.

    **Example:** $M = 100$ (so $k=2$). We extract 2 digits.

    *   **Key:** 13
        *   Square: $13^2 = 169$.
        *   Divide by $10^k = 100$: $169 / 100 = 1$ (integer division).
        *   Now, we need 2 digits. We're left with '1'. This method is not consistently giving 2 digits.

    The description in textbooks like Horowitz, Sahni, and Anderson-Freed is often general. A more concrete interpretation for decimal keys and table sizes:

    Let $M$ be the hash table size.
    Let $d$ be the number of digits in $M$.
    Square the key $K \rightarrow K^2$.
    To get $d$ digits from the middle:
    1.  Calculate $M_1 = M / 10^p$ and $M_2 = 10^p$, where $p$ is approximately half the number of digits in $K^2$.
    2.  The hash value is $(K^2 / M_1) \pmod{M_2}$.

    This gets complicated quickly with decimal arithmetic. Let's revert to the intuitive "string manipulation" approach, as it's often easier to visualize and implement conceptually.

    **Revised Conceptual Mid-Square Method:**

    1.  **Table Size and Digits:** Let the hash table size be $M$. Determine the number of digits required to represent indices, say $d$ digits (e.g., if $M=100$, $d=2$).
    2.  **Square the Key:** $K_{squared} = K \times K$.
    3.  **Extract Middle Digits:**
        *   Convert $K_{squared}$ to a string.
        *   Calculate the number of digits in $K_{squared}$, say $L$.
        *   Determine the starting position of the middle $d$ digits: `start = floor((L - d) / 2)`.
        *   Extract $d$ digits from $K_{squared}$ starting at `start`.
        *   Convert the extracted digit string back to an integer.
        *   Ensure the result is within the table bounds by taking modulo $M$.

    **Example (M=100, d=2):**

    *   **Key:** 13
        *   Square: 169 ($L=3$)
        *   `start = floor((3 - 2) / 2) = floor(0.5) = 0`.
        *   Extract 2 digits from "169" starting at index 0: "16".
        *   Hash Index: 16 % 100 = 16.

    *   **Key:** 45
        *   Square: 2025 ($L=4$)
        *   `start = floor((4 - 2) / 2) = floor(1) = 1`.
        *   Extract 2 digits from "2025" starting at index 1: "02".
        *   Hash Index: 2 % 100 = 2.

    *   **Key:** 3
        *   Square: 9 ($L=1$)
        *   `start = floor((1 - 2) / 2) = floor(-0.5) = -1`. This indicates we need padding.
        *   Pad "9" to at least $d=2$ digits: "09". ($L$ is effectively 2 for selection now).
        *   `start = floor((2 - 2) / 2) = floor(0) = 0`.
        *   Extract 2 digits from "09" starting at index 0: "09".
        *   Hash Index: 9 % 100 = 9.

    *   **Key:** 123
        *   Square: 15129 ($L=5$)
        *   `start = floor((5 - 2) / 2) = floor(1.5) = 1`.
        *   Extract 2 digits from "15129" starting at index 1: "51".
        *   Hash Index: 51 % 100 = 51.

    This approach seems more consistent for a conceptual understanding.

---

### 3. Advantages of Mid-Square Method

*   **Relatively Simple:** The concept is straightforward to understand and implement.
*   **Good Distribution for Consecutive Keys:** For keys that are close to each other, their squares might be significantly different, leading to a better distribution of hash values compared to simple division methods, especially if the keys have a pattern that division might exploit (e.g., all keys are multiples of some number).
*   **Uses all Digits:** It considers all digits of the key through squaring, which can help in distributing the hash values.

---

### 4. Disadvantages of Mid-Square Method

*   **Computational Cost:** Squaring large numbers can be computationally expensive.
*   **Dependence on Key Distribution:** The effectiveness of the mid-square method heavily depends on the distribution of the keys. If the keys are such that their squares have a peculiar pattern, the mid-square method might still lead to clustering or collisions.
*   **Potential for Zeros:** If the middle digits of the squared number are often zero, it can lead to many keys mapping to index 0.
*   **Not Always Optimal:** For certain distributions of keys, other hashing methods (like polynomial hashing or universal hashing) might provide better performance.
*   **Table Size:** It works best when the table size is a power of 10, or can be easily managed with decimal digit extraction. When the table size is not a power of 10 (e.g., a prime number), using powers of 10 for digit extraction might not be the most intuitive or efficient. It's often better to work with powers of 2 in binary for bit manipulation.

---

### 5. Comparison with Other Hashing Methods (Brief Mention)

*   **Division Method:** $h(K) = K \pmod M$. Simple but can perform poorly if $M$ shares factors with the keys.
*   **Multiplication Method:** $h(K) = \lfloor M (KA \pmod 1) \rfloor$, where $A$ is a constant. Generally performs well and is less dependent on $M$.

The mid-square method falls into the category of "folding" or "digital" methods, where parts of the key are transformed and combined.

---
