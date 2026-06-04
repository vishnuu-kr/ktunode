---
title: "Folding"
subject: "DATA STRUCTURES"
module: "Module 4: Sorting and Hashing: Sorting Techniques – Selection Sort"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f363fc"
status: "completed"
scrapedAt: "2026-05-23T16:20:56.489Z"
---
# Data Structures: Module 4 - Sorting and Hashing

## Topic: Folding (as a Hashing Technique)

### 1. Introduction to Hashing and Collisions

Hashing is a technique used to map data of arbitrary size to data of a fixed size. The function used to perform this mapping is called a hash function. The output of a hash function is called a hash code or hash value. Hashing is primarily used for fast data retrieval, typically in hash tables.

**Key Concepts:**

*   **Hash Table:** A data structure that implements an associative array abstract data type, mapping keys to values.
*   **Hash Function:** A function that takes a key as input and returns an index (or hash value) into an array of buckets or slots.
*   **Collision:** Occurs when two different keys are mapped to the same index by the hash function.

**Importance:** Efficient hashing relies on a good hash function that distributes keys uniformly across the hash table, minimizing collisions.

### 2. Folding as a Hash Function Technique

Folding is a method of constructing a hash key by dividing the input key into several parts and then combining these parts in some way. This is particularly useful for keys that are long and alphanumeric, such as strings or memory addresses.

**Core Idea:** Break down a large key into smaller, manageable parts and then combine them.

**When is Folding Useful?**

*   **Long Keys:** When the keys are too long to be directly used as indices.
*   **Alphanumeric Keys:** Strings and character-based keys are often processed using folding.
*   **Numerical Keys with Patterns:** If numerical keys have repeating patterns or are in a specific range, folding can help break them down.

**Types of Folding:**

There are two primary ways to group the parts of the key:

*   **Adjacent Folding:** The key is divided into parts of the same size (e.g., two or three digits/characters), and these parts are added together.

    *   **Example:** If the key is `34567890` and we fold it into parts of size 2: `34`, `56`, `78`, `90`. The hash value would be `34 + 56 + 78 + 90 = 258`.

*   **Boundary Folding (or Mirrored Folding):** The key is divided into parts of the same size, but the parts, starting from the second part, are reversed before being added. This aims to ensure that keys with similar leading digits but different trailing digits are mapped to different locations.

    *   **Example:** If the key is `34567890` and we fold it into parts of size 2:
        *   Part 1: `34`
        *   Part 2: `56` (reversed becomes `65`)
        *   Part 3: `78` (reversed becomes `87`)
        *   Part 4: `90` (reversed becomes `09`)
        *   The hash value would be `34 + 65 + 87 + 09 = 195`.

**Combining the Parts:**

After dividing the key into parts, the parts are typically added together. Other operations like XORing might also be used, but addition is the most common. The final result of this addition is then taken modulo the size of the hash table to get the final index.

**Example with Strings:**

Let's consider hashing a string like "data structures" into a hash table of size 100.

1.  **Convert to Numerical Representation:** First, we need to convert the string into a numerical form. A common way is to treat each character as its ASCII value.
    *   `d` -> 100
    *   `a` -> 97
    *   `t` -> 116
    *   `a` -> 97
    *   ` ` -> 32
    *   `s` -> 115
    *   `t` -> 116
    *   `r` -> 114
    *   `u` -> 117
    *   `c` -> 99
    *   `t` -> 116
    *   `u` -> 117
    *   `r` -> 114
    *   `e` -> 101
    *   `s` -> 115

    This gives us a long sequence of numbers: `100, 97, 116, 97, 32, 115, 116, 114, 117, 99, 116, 117, 114, 101, 115`.

2.  **Apply Folding (Adjacent Folding with block size 3):**
    Let's group these numbers into blocks of three. We might need to pad the last block if it's not a multiple of three.
    *   Block 1: `100`
    *   Block 2: `97116`
    *   Block 3: `97032`
    *   Block 4: `115116`
    *   Block 5: `114117`
    *   Block 6: `99116`
    *   Block 7: `117114`
    *   Block 8: `101115`

    Alternatively, a more common approach for strings is to treat them as numbers in a base (e.g., base 256 for ASCII) and then fold that large number.

    **More Practical String Folding Example:**
    Consider the string "BOOK". Let's use ASCII values and fold into blocks of 2 characters.

    *   'B': 66
    *   'O': 79
    *   'O': 79
    *   'K': 75

    Treating as a single large number (if we were to imagine it as base-256):
    `66 * 256^3 + 79 * 256^2 + 79 * 256^1 + 75 * 256^0` - this is already a very large number.

    Let's use **adjacent folding** by taking pairs of ASCII values and treating them as components:
    Key: "BOOK" -> ASCII: `66, 79, 79, 75`
    We can group these into numbers like: `6679` and `7975`.

    Hash Value = `6679 + 7975 = 14654`

    If the hash table size is `m = 100`, then the index is `14654 % 100 = 54`.

    **Boundary Folding:**
    Key: "BOOK" -> ASCII: `66, 79, 79, 75`
    Grouped into pairs: `6679` and `7975`.
    Reverse the second part: `7975` reversed is `5797`.
    Hash Value = `6679 + 5797 = 12476`
    Index = `12476 % 100 = 76`.

**Advantages of Folding:**

*   **Simplicity:** Relatively easy to implement.
*   **Effective for certain key types:** Works well for long keys where other methods might be less intuitive.
*   **Can distribute keys well:** If done correctly, it can lead to a reasonable distribution of keys.

**Disadvantages of Folding:**

*   **Sensitivity to key structure:** If keys have predictable patterns within their folded parts, it can lead to clustering.
*   **May not be optimal:** Other hashing techniques (like multiplication or universal hashing) might offer better theoretical guarantees for key distribution.
*   **Choice of part size matters:** The size of the parts you fold into can affect the distribution.

### 3. Relevance to Course Outcomes and Textbooks

*   **CO4: Apply and compare various techniques for searching and sorting. (Knowledge Level: K3)**
    *   While folding is primarily a hashing technique, understanding how keys are transformed into indices is crucial for efficient searching (e.g., in hash tables). By comparing folding with other methods like division, multiplication, or universal hashing, students can understand trade-offs in terms of performance and complexity for different data distributions.

*   **CO5: Apply appropriate hash function to store and access a given dataset (Knowledge Level: K3)**
    *   This topic directly addresses CO5 by providing a method for constructing hash functions. Students learn to apply folding to convert various types of keys (especially long alphanumeric ones) into hash table indices. Understanding the principles behind folding allows them to choose or adapt it for specific datasets.

**Textbook References:**

*   **Fundamentals of Data Structures in C by Horowitz, Sahni, and Anderson-Freed:** This book typically covers hashing and various hash function techniques. Folding is a common method discussed for transforming keys. Look for sections on "Hash Functions" or "Methods for Constructing Hash Functions."
*   **Classic Data Structures by Samanta D:** Similar to Horowitz et al., Samanta's book would cover different hashing strategies. Folding is often presented as a practical approach for handling complex keys.
*   **Data Structures: A Pseudocode Approach with C by Gilberg and Forouzan:** This text is known for its clear explanations. Folding would likely be presented as a technique for generating hash codes.
*   **Theory and Problems of Data Structures by Schaum's Series (Lipschutz S.):** Schaum's outlines are excellent for concise explanations and numerous examples. Folding would be well-covered here with illustrative problems.

### 4. Practice Questions and Exercises

**Question 1:**
Consider the key `1234567890` and a hash table of size `m = 1000`.
a) Apply adjacent folding with a part size of 3 digits. Calculate the hash index.
b) Apply boundary folding with a part size of 3 digits. Calculate the hash index.

**Solution 1:**
a) **Adjacent Folding:**
   Key: `1234567890`
   Parts (size 3): `123`, `456`, `789`, `0` (pad the last part to size 3, e.g., `000`)
   Alternatively, treat the last digit as a separate part: `123`, `456`, `789`, `0`.
   Sum = `123 + 456 + 789 + 0 = 1368`
   Hash Index = `1368 % 1000 = 368`

   *Note: The interpretation of the last part can vary. If we group strictly into blocks of 3, padding the last one:*
   Key: `1234567890`
   Parts (size 3): `123`, `456`, `789`, `000` (padded)
   Sum = `123 + 456 + 789 + 000 = 1368`
   Hash Index = `1368 % 1000 = 368`

b) **Boundary Folding:**
   Key: `1234567890`
   Parts (size 3): `123`, `456`, `789`, `000` (padded)
   Reverse parts from the second one:
   Part 1: `123`
   Part 2: `456` -> reversed `654`
   Part 3: `789` -> reversed `987`
   Part 4: `000` -> reversed `000`
   Sum = `123 + 654 + 987 + 000 = 1764`
   Hash Index = `1764 % 1000 = 764`

**Question 2:**
Explain how folding can be applied to a string key. Provide a concrete example using the string "hash table" and a hash table of size `m = 101`. Assume ASCII values for characters and use adjacent folding with blocks of 2 characters.

**Solution 2:**
1.  **Convert string to ASCII values:**
    "hash table"
    h = 104, a = 97, s = 115, h = 104, ' ' = 32, t = 116, a = 97, b = 98, l = 108, e = 101

    Sequence of ASCII values: `104, 97, 115, 104, 32, 116, 97, 98, 108, 101`

2.  **Apply Adjacent Folding (block size 2):**
    Group the ASCII values into pairs. If there's an odd number of values, the last one might be treated as a single-digit number or padded. For simplicity, let's consider pairs.

    *   Pair 1: `104`, `97` -> Form number `10497`
    *   Pair 2: `115`, `104` -> Form number `115104`
    *   Pair 3: `32`, `116` -> Form number `32116`
    *   Pair 4: `97`, `98` -> Form number `9798`
    *   Pair 5: `108`, `101` -> Form number `108101`

    *Alternative interpretation for pairs of ASCII values:* Combine them by multiplication and addition, or simply treat them as larger numbers. A common approach is to interpret them as components of a larger number.

    Let's use a more direct approach where each pair forms a number directly, or we sum their numerical values if the grouping is conceptual.

    A more common way to fold strings is to group them into character "words" or blocks and sum their numerical representations.

    Let's re-evaluate for strings: Treat each character's ASCII value as a part.
    Key: "hash table"
    ASCII values: `104, 97, 115, 104, 32, 116, 97, 98, 108, 101`

    **Adjacent Folding (groups of 2 ASCII values treated as numbers):**
    *   Group 1: `104`, `97` -> `10497` (imagine it as a number in base 256, or simply concatenate digits)
    *   Group 2: `115`, `104` -> `115104`
    *   Group 3: `32`, `116` -> `32116`
    *   Group 4: `97`, `98` -> `9798`
    *   Group 5: `108`, `101` -> `108101`

    Sum = `10497 + 115104 + 32116 + 9798 + 108101 = 275616`

    Hash Table Size `m = 101`.
    Hash Index = `275616 % 101`

    Calculation:
    `275616 / 101 = 2728.87...`
    `275616 = 2728 * 101 + 88`
    Hash Index = `88`

    *Note on string folding complexity:* The exact implementation can vary. Some methods might treat characters as digits in a base-256 number and then fold that large number. The example above demonstrates the principle of grouping and summing.

### 5. Important Points to Remember

*   **Folding is a technique for creating hash keys**, not a sorting algorithm itself. It's used in conjunction with hash tables for efficient data storage and retrieval.
*   The goal of folding is to **reduce a long key into a shorter, manageable hash value** suitable for indexing.
*   There are **different variations of folding** (adjacent, boundary) and the choice can impact key distribution.
*   **Performance depends on the quality of the hash function and the distribution of keys.** Folding is generally better than simple division for keys with predictable patterns.
*   The **size of the hash table (`m`) is critical** as the final hash index is obtained by `hash_value % m`.
*   Always **consider the nature of your data** (keys) when choosing a hashing technique.

### 6. Further Exploration (Connecting to Other Concepts)

*   **Collision Resolution:** Once a hash index is calculated using folding, you still need a strategy to handle collisions (e.g., separate chaining, open addressing).
*   **Performance Analysis:** How does the performance of operations (insert, delete, search) in a hash table using folding compare to other hash functions like multiplication or division? This relates to CO1 (asymptotic notation).
*   **Data Distribution:** If your keys are already well-distributed, simpler hash functions might suffice. Folding is more beneficial when keys have patterns or are very long.

---
This concludes the notes on the Folding technique for hashing. Remember to refer to your textbooks for more detailed explanations and examples.
