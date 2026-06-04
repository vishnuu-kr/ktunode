---
title: "Hashing - Hashing functions : Division"
subject: "DATA STRUCTURES"
module: "Module 4: Sorting and Searching"
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8beb0"
status: "completed"
scrapedAt: "2026-05-20T16:52:10.513Z"
---
# DATA STRUCTURES: Module 4: Sorting and Searching

## Topic: Hashing - Hashing Functions: Division Method

This module focuses on efficient ways to store and retrieve data. While sorting helps organize data, searching allows us to find specific elements. Hashing offers a powerful technique to achieve very fast average-case search times by directly mapping keys to memory locations.

### Learning Outcomes Covered:

*   Understand the concept of hashing and its purpose.
*   Explain the division method for hash function creation.
*   Analyze the characteristics of good hash functions.
*   Evaluate the performance implications of the division method, including clustering.
*   Apply the division method to practical examples.

---

### 1. Introduction to Hashing

#### 1.1 What is Hashing?

*   **Definition:** Hashing is a technique used to map data of arbitrary size (keys) to data of fixed size (hash values or hash codes). This mapping is done using a **hash function**.
*   **Purpose:** The primary goal of hashing is to enable efficient storage and retrieval of data in a data structure called a **hash table** (or hash map).
*   **Hash Table:** A hash table is an array-like structure where each element is stored at a specific index, determined by the hash function applied to its key.
*   **Ideal Scenario:** In an ideal hash table, searching for an element takes constant time, denoted as **O(1)**, because we can directly calculate the location of the data.

#### 1.2 Key Components of Hashing:

*   **Key:** The identifier of the data being stored (e.g., a student ID, a word, a product code).
*   **Hash Function (H):** A function that takes a key as input and returns an integer (the hash value or hash code).
*   **Hash Value/Hash Code:** The integer output of the hash function.
*   **Hash Table (Table):** An array where data is stored. The size of the hash table is often denoted by `m`.
*   **Bucket/Slot:** An individual location within the hash table, identified by an index.

#### 1.3 The Goal: Direct Access

The fundamental idea is to use the hash function to compute an index directly within the hash table array for a given key.

$ \text{Index} = H(\text{Key}) $

---

### 2. The Division Method for Hash Functions

The division method is one of the simplest and most commonly used techniques for creating hash functions.

#### 2.1 How it Works:

The division method computes the hash value by taking the **remainder** of the key divided by the size of the hash table.

$ H(k) = k \pmod{m} $

Where:
*   `k` is the key.
*   `m` is the size of the hash table (number of buckets/slots).

The result of this operation is an integer between 0 and `m-1`, which is a valid index for an array of size `m`.

#### 2.2 Example:

Let's say we have a hash table of size `m = 10` and we want to insert the following keys: 12, 44, 13, 88, 23, 94, 11, 39, 20, 16.

Using the division method $H(k) = k \pmod{10}$:

*   $H(12) = 12 \pmod{10} = 2$
*   $H(44) = 44 \pmod{10} = 4$
*   $H(13) = 13 \pmod{10} = 3$
*   $H(88) = 88 \pmod{10} = 8$
*   $H(23) = 23 \pmod{10} = 3$
*   $H(94) = 94 \pmod{10} = 4$
*   $H(11) = 11 \pmod{10} = 1$
*   $H(39) = 39 \pmod{10} = 9$
*   $H(20) = 20 \pmod{10} = 0$
*   $H(16) = 16 \pmod{10} = 6$

**Hash Table Visualization (Illustrative):**

| Index | Key |
| :---- | :-- |
| 0     | 20  |
| 1     | 11  |
| 2     | 12  |
| 3     | 13, 23 |
| 4     | 44, 94 |
| 5     |     |
| 6     | 16  |
| 7     |     |
| 8     | 88  |
| 9     | 39  |

---

### 3. Characteristics of a Good Hash Function

A good hash function should aim to distribute keys as evenly as possible across the hash table to minimize **collisions**.

#### 3.1 Desirable Properties:

*   **Determinism:** For a given key, the hash function must *always* produce the same hash value.
*   **Efficiency:** The hash function should be fast to compute.
*   **Uniform Distribution:** The hash function should distribute keys uniformly across the hash table. This means that each slot in the hash table should have an approximately equal probability of being chosen.
*   **Minimizing Collisions:** While perfect distribution is often impossible, a good hash function minimizes the number of keys that map to the same index (collisions).

#### 3.2 What are Collisions?

*   **Definition:** A collision occurs when two or more different keys are mapped to the same index in the hash table by the hash function.
*   **Example from above:** Keys `13` and `23` both hash to index `3`. Keys `44` and `94` both hash to index `4`.

---

### 4. Performance Implications of the Division Method: Clustering

The effectiveness of the division method heavily depends on the choice of `m` (hash table size) and the characteristics of the keys. Poor choices can lead to **clustering**.

#### 4.1 What is Clustering?

*   **Definition:** Clustering is a phenomenon where keys tend to group together in the hash table, rather than being uniformly distributed. This leads to longer chains of collisions at certain indices, degrading performance.
*   **Types of Clustering:**
    *   **Primary Clustering:** When keys that are close in value hash to nearby slots.
    *   **Secondary Clustering:** When keys that hash to the same initial slot follow the same probe sequence (relevant for collision resolution techniques).

#### 4.2 Avoiding Clustering with the Division Method:

*   **Choosing `m`:**
    *   **Prime Numbers:** It is generally recommended to choose `m` to be a prime number. This helps to distribute keys more evenly, especially if the keys have some pattern.
        *   **Why?** If `m` has small prime factors, and the keys also share these factors, it can lead to predictable patterns and clustering. A prime `m` reduces the chance of such common factors aligning.
        *   **Example:** If `m = 10` (factors 2, 5), keys ending in 0, 2, 4, 6, 8 will map to even indices, and keys ending in 0, 5 will map to indices 0 and 5. This can create uneven distribution. If `m` is a prime like 11, the remainders are more spread out.

    *   **Avoiding Powers of 2:** Using powers of 2 for `m` (e.g., `m = 2^k`) is often discouraged if keys are represented in binary. The hash value will then only depend on the lower `k` bits of the key, ignoring the higher-order bits and potentially leading to clustering.
        *   **Example:** If `m = 8` (binary `1000`), $H(k) = k \pmod 8$. This is equivalent to taking the last 3 bits of `k`. If many keys share the same last 3 bits, they will collide.

*   **Key Distribution:** The division method works best when the keys are randomly distributed. If keys exhibit specific patterns (e.g., arithmetic progressions), the division method might not be optimal.

#### 4.3 Handling Collisions:

When collisions occur (as they inevitably will), we need a strategy to store and retrieve multiple keys that hash to the same index. This is called **collision resolution**. Common methods include:

*   **Separate Chaining:** Each slot in the hash table points to a linked list of all keys that hash to that index.
*   **Open Addressing:** If a slot is occupied, we "probe" for another available slot using a systematic method (e.g., linear probing, quadratic probing, double hashing).

*Note: Collision resolution strategies are typically covered in subsequent topics within this module.*

---

### 5. Practice Questions and Exercises

**Question 1:**
Given a hash table of size `m = 7` and the following keys: 25, 18, 30, 11, 22, 5, 15. Use the division method ($H(k) = k \pmod{m}$) to calculate the hash index for each key. Show your work.

**Answer 1:**
`m = 7`
*   $H(25) = 25 \pmod{7} = 4$
*   $H(18) = 18 \pmod{7} = 4$
*   $H(30) = 30 \pmod{7} = 2$
*   $H(11) = 11 \pmod{7} = 4$
*   $H(22) = 22 \pmod{7} = 1$
*   $H(5) = 5 \pmod{7} = 5$
*   $H(15) = 15 \pmod{7} = 1$

**Question 2:**
Consider the keys from Question 1 being inserted into a hash table of size `m = 7` using the division method. List any keys that cause collisions.

**Answer 2:**
Collisions occur for:
*   Index 4: Keys 25, 18, 11
*   Index 1: Keys 22, 15

**Question 3:**
Why is it generally recommended to choose a prime number for the size (`m`) of the hash table when using the division method? Explain with an example if possible.

**Answer 3:**
Choosing a prime number for `m` helps to distribute keys more evenly and reduce clustering. If `m` has small factors (e.g., `m=10`), and keys also share these factors, the hash values can become clustered. For instance, if `m=10`, keys ending in 0, 2, 4, 6, 8 will always map to even indices, and keys ending in 0, 5 will map to indices 0 or 5. If `m` is a prime like `m=11`, the distribution of remainders tends to be more spread out, minimizing the chances of patterned collisions.

**Question 4 (Conceptual):**
If you were designing a hash table for storing student IDs, and you knew that most student IDs were sequential (e.g., 10001, 10002, 10003, ...), would the division method with `m = 100` be a good choice? Why or why not?

**Answer 4:**
Probably not a good choice. If student IDs are sequential, say $k, k+1, k+2, \dots$, and `m = 100`, then $H(k) = k \pmod{100}$ and $H(k+1) = (k+1) \pmod{100}$. This will result in sequential indices being used, but it's still susceptible to clustering if many student IDs fall into ranges that happen to map to the same indices. For example, if many IDs are in the range 20001-20100, they will map to indices 1-99 (and 0), potentially leading to secondary clustering if collision resolution involves probing. If `m` were a prime number, the distribution might be slightly better, but the sequential nature of keys is still a potential issue for simple division.

---

### 6. Important Points to Remember

*   **Hashing Goal:** Fast O(1) average-case search, insertion, and deletion.
*   **Hash Function:** Maps keys to indices.
*   **Division Method:** $H(k) = k \pmod{m}$. Simple but sensitive to `m` and key distribution.
*   **Collisions:** When multiple keys map to the same index.
*   **Good Hash Function Properties:** Deterministic, efficient, uniform distribution, minimal collisions.
*   **Clustering:** Uneven distribution of keys, leading to poorer performance.
*   **Choosing `m`:** Prefer prime numbers for `m` to improve distribution and reduce clustering with the division method. Avoid powers of 2 if keys are binary.
*   **Collision Resolution:** Necessary when collisions occur; separate chaining and open addressing are common techniques.

---
