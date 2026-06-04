---
title: "Collision Resolution :  Linear probing, Quadratic Probing, Double hashing, Open hashing"
subject: "DATA STRUCTURES AND ALGORITHMS"
module: "Module 4: Sorting and Searching"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ac53"
status: "completed"
scrapedAt: "2026-05-20T16:23:15.673Z"
---
# DATA STRUCTURES AND ALGORITHMS - MODULE 4: SORTING AND SEARCHING - COLLISION RESOLUTION

## Introduction

This module focuses on collision resolution techniques within hashing, which are crucial for efficient data retrieval and storage. When multiple keys map to the same index in a hash table (a collision), these techniques determine how to find an alternative location to store the collided item.

## Learning Outcomes

By the end of this topic, you will be able to:

*   Understand the concept of collisions in hash tables.
*   Explain and implement Linear Probing.
*   Explain and implement Quadratic Probing.
*   Explain and implement Double Hashing.
*   Explain and implement Open Hashing (Separate Chaining).
*   Compare and contrast the different collision resolution techniques.
*   Analyze the advantages and disadvantages of each technique.

## 1. Collision Handling: The Problem

*   **Definition:** A *collision* occurs when two or more keys hash to the same index in a hash table.  Hashing functions are designed to minimize collisions, but they are practically unavoidable, especially as the load factor (ratio of items to slots) increases.

*   **Importance:**  Poor collision resolution significantly degrades the performance of hash tables, potentially turning `O(1)` (average case) lookup, insertion, and deletion operations into `O(n)` (worst case) operations.

## 2. Linear Probing

*   **Definition:** Linear probing is a simple collision resolution technique where, upon encountering a collision at index `i`, we probe consecutive indices `(i+1), (i+2), (i+3), ...` (mod table size) until an empty slot is found.

*   **Algorithm:**
    1.  Compute the hash value `h(key)` of the key.
    2.  Probe the hash table starting at index `h(key)`.
    3.  If the slot is empty, insert the key.
    4.  If the slot is occupied, probe the next slot (`(h(key) + 1) % tableSize`).
    5.  Repeat step 4 until an empty slot is found or the entire table has been probed (table is full).

*   **Example:**

    *   Hash Table Size: 10
    *   Hash Function: `h(key) = key % 10`
    *   Insert the following keys: 10, 20, 30, 11, 21, 31

    1.  `insert(10)`: `h(10) = 0`.  `table[0]` is empty. Insert 10 at `table[0]`.
    2.  `insert(20)`: `h(20) = 0`.  `table[0]` is occupied.  Probe `table[1]`.  `table[1]` is empty. Insert 20 at `table[1]`.
    3.  `insert(30)`: `h(30) = 0`.  `table[0]` is occupied.  Probe `table[1]`.  `table[1]` is occupied. Probe `table[2]`. `table[2]` is empty. Insert 30 at `table[2]`.
    4.  `insert(11)`: `h(11) = 1`.  `table[1]` is occupied. Probe `table[2]`. `table[2]` is occupied. Probe `table[3]`. `table[3]` is empty. Insert 11 at `table[3]`.
    5.  `insert(21)`: `h(21) = 1`.  `table[1]` is occupied. Probe `table[2]`. `table[2]` is occupied. Probe `table[3]`. `table[3]` is occupied. Probe `table[4]`. `table[4]` is empty. Insert 21 at `table[4]`.
    6.  `insert(31)`: `h(31) = 1`.  `table[1]` is occupied. Probe `table[2]`. `table[2]` is occupied. Probe `table[3]`. `table[3]` is occupied. Probe `table[4]`. `table[4]` is occupied. Probe `table[5]`. `table[5]` is empty. Insert 31 at `table[5]`.

*   **Advantages:** Simple to implement.
*   **Disadvantages:**

    *   **Primary Clustering:** Tendency for consecutive occupied slots to form clusters, leading to longer probe sequences and reduced performance.  The longer the cluster, the more likely a new key will hash into it.

## 3. Quadratic Probing

*   **Definition:** Quadratic probing reduces primary clustering by probing indices `(i + 1^2), (i + 2^2), (i + 3^2), ...` (mod table size).

*   **Algorithm:**
    1.  Compute the hash value `h(key)` of the key.
    2.  Initialize `j = 1`.
    3.  Probe the hash table starting at index `(h(key) + j^2) % tableSize`.
    4.  If the slot is empty, insert the key.
    5.  If the slot is occupied, increment `j` and repeat step 3.
    6.  Repeat steps 3-5 until an empty slot is found or the entire table has been probed.

*   **Example:**

    *   Hash Table Size: 10
    *   Hash Function: `h(key) = key % 10`
    *   Insert the following keys: 10, 20, 30, 11, 21, 31

    1.  `insert(10)`: `h(10) = 0`.  `table[0]` is empty. Insert 10 at `table[0]`.
    2.  `insert(20)`: `h(20) = 0`.  `table[0]` is occupied.  Probe `(0 + 1^2) % 10 = 1`. `table[1]` is empty. Insert 20 at `table[1]`.
    3.  `insert(30)`: `h(30) = 0`.  `table[0]` is occupied.  Probe `(0 + 1^2) % 10 = 1`. `table[1]` is occupied. Probe `(0 + 2^2) % 10 = 4`. `table[4]` is empty. Insert 30 at `table[4]`.
    4.  `insert(11)`: `h(11) = 1`.  `table[1]` is occupied.  Probe `(1 + 1^2) % 10 = 2`.  `table[2]` is empty. Insert 11 at `table[2]`.
    5.  `insert(21)`: `h(21) = 1`.  `table[1]` is occupied.  Probe `(1 + 1^2) % 10 = 2`.  `table[2]` is occupied. Probe `(1 + 2^2) % 10 = 5`. `table[5]` is empty. Insert 21 at `table[5]`.
    6.  `insert(31)`: `h(31) = 1`.  `table[1]` is occupied.  Probe `(1 + 1^2) % 10 = 2`.  `table[2]` is occupied. Probe `(1 + 2^2) % 10 = 5`. `table[5]` is occupied. Probe `(1 + 3^2) % 10 = 0`. `table[0]` is occupied. Probe `(1 + 4^2) % 10 = 7`. `table[7]` is empty. Insert 31 at `table[7]`.

*   **Advantages:** Reduces primary clustering compared to linear probing.
*   **Disadvantages:**

    *   **Secondary Clustering:** If two keys hash to the same initial location, they will follow the same probe sequence, leading to secondary clustering.
    *   **Table Size Requirement:**  To guarantee that an empty slot will be found, the table size should be a prime number and the table should be at most half full.

## 4. Double Hashing

*   **Definition:** Double hashing uses a secondary hash function, `h2(key)`, to determine the probe sequence.  The probe sequence is `(h1(key) + i * h2(key)) % tableSize`, where `h1(key)` is the primary hash function and `i` is the probe number (0, 1, 2, ...).

*   **Algorithm:**
    1.  Compute the primary hash value `h1(key)` of the key.
    2.  Compute the secondary hash value `h2(key)` of the key.
    3.  Initialize `i = 0`.
    4.  Probe the hash table starting at index `(h1(key) + i * h2(key)) % tableSize`.
    5.  If the slot is empty, insert the key.
    6.  If the slot is occupied, increment `i` and repeat step 4.
    7.  Repeat steps 4-6 until an empty slot is found or the entire table has been probed.

*   **Key Considerations:**

    *   `h2(key)` must never return 0 (otherwise, all probes will be at the same index, defeating the purpose).
    *   `h2(key)` should be relatively prime to the table size to ensure that all slots are probed.  A common choice is to use a prime number smaller than the table size for `h2(key)`.

*   **Example:**

    *   Hash Table Size: 10
    *   Primary Hash Function: `h1(key) = key % 10`
    *   Secondary Hash Function: `h2(key) = 7 - (key % 7)`
    *   Insert the following keys: 10, 20, 30, 11, 21, 31

    1.  `insert(10)`: `h1(10) = 0`, `h2(10) = 7 - (10 % 7) = 4`. Probe `(0 + 0 * 4) % 10 = 0`. `table[0]` is empty. Insert 10 at `table[0]`.
    2.  `insert(20)`: `h1(20) = 0`, `h2(20) = 7 - (20 % 7) = 1`. Probe `(0 + 0 * 1) % 10 = 0`. `table[0]` is occupied. Probe `(0 + 1 * 1) % 10 = 1`. `table[1]` is empty. Insert 20 at `table[1]`.
    3.  `insert(30)`: `h1(30) = 0`, `h2(30) = 7 - (30 % 7) = 5`. Probe `(0 + 0 * 5) % 10 = 0`. `table[0]` is occupied. Probe `(0 + 1 * 5) % 10 = 5`. `table[5]` is empty. Insert 30 at `table[5]`.
    4.  `insert(11)`: `h1(11) = 1`, `h2(11) = 7 - (11 % 7) = 3`. Probe `(1 + 0 * 3) % 10 = 1`. `table[1]` is occupied. Probe `(1 + 1 * 3) % 10 = 4`. `table[4]` is empty. Insert 11 at `table[4]`.
    5.  `insert(21)`: `h1(21) = 1`, `h2(21) = 7 - (21 % 7) = 7`. Probe `(1 + 0 * 7) % 10 = 1`. `table[1]` is occupied. Probe `(1 + 1 * 7) % 10 = 8`. `table[8]` is empty. Insert 21 at `table[8]`.
    6.  `insert(31)`: `h1(31) = 1`, `h2(31) = 7 - (31 % 7) = 4`. Probe `(1 + 0 * 4) % 10 = 1`. `table[1]` is occupied. Probe `(1 + 1 * 4) % 10 = 5`. `table[5]` is occupied. Probe `(1 + 2 * 4) % 10 = 9`. `table[9]` is empty. Insert 31 at `table[9]`.

*   **Advantages:** Considered to be one of the best probing techniques. It spreads out keys more uniformly than linear or quadratic probing.
*   **Disadvantages:** More complex to implement than linear probing. Requires careful selection of the secondary hash function.

## 5. Open Hashing (Separate Chaining)

*   **Definition:** In open hashing (also known as separate chaining or chaining), each slot in the hash table points to a linked list (or other dynamic data structure) that stores all keys that hash to that slot.

*   **Algorithm:**
    1.  Compute the hash value `h(key)` of the key.
    2.  Insert the key into the linked list at index `h(key)`.

*   **Example:**

    *   Hash Table Size: 10
    *   Hash Function: `h(key) = key % 10`
    *   Insert the following keys: 10, 20, 30, 11, 21, 31

    *   `table[0]`: 10 -> 20 -> 30
    *   `table[1]`: 11 -> 21 -> 31
    *   `table[2]`: NULL
    *   `table[3]`: NULL
    *   `table[4]`: NULL
    *   `table[5]`: NULL
    *   `table[6]`: NULL
    *   `table[7]`: NULL
    *   `table[8]`: NULL
    *   `table[9]`: NULL

*   **Advantages:**

    *   Simple to implement.
    *   Collisions are handled gracefully.
    *   Deletion is simple.
    *   The hash table can hold more elements than the number of slots.

*   **Disadvantages:**

    *   Requires extra space for linked lists (or other dynamic data structures).
    *   Lookup time can be `O(n)` in the worst case if all keys hash to the same slot.  However, with a good hash function, the average lookup time is closer to `O(1 + n/m)`, where `n` is the number of keys and `m` is the number of slots.

## 6. Comparison of Collision Resolution Techniques

| Feature            | Linear Probing | Quadratic Probing | Double Hashing | Separate Chaining (Open Hashing) |
|---------------------|----------------|-------------------|----------------|--------------------------------|
| **Clustering**      | Primary        | Secondary         | Least            | None                           |
| **Implementation** | Simple         | Moderate          | Complex          | Moderate                        |
| **Space Overhead**   | None           | None              | None             | Significant (for lists)         |
| **Table Size**     | Not Critical   | Prime             | Prime           | Not Critical                    |
| **Performance**    | Poor           | Moderate          | Good             | Good (with good hash function) |

## 7. Practice Questions/Exercises

1.  **Linear Probing:** Insert the keys 26, 5, 36, 17, 96 into a hash table of size 7 using linear probing. Use the hash function `h(key) = key % 7`. Show the state of the hash table after each insertion.

    *   Answer:

        *   `insert(26)`: `h(26) = 5`. `table[5] = 26`
        *   `insert(5)`: `h(5) = 5`. `table[5]` is occupied. `table[6] = 5`
        *   `insert(36)`: `h(36) = 1`. `table[1] = 36`
        *   `insert(17)`: `h(17) = 3`. `table[3] = 17`
        *   `insert(96)`: `h(96) = 5`. `table[5]` is occupied. `table[6]` is occupied. `table[0] = 96`

        *   Final Table: `[96, 36, , 17, , 26, 5]`

2.  **Quadratic Probing:**  Insert the keys 19, 29, 39, 49, 59 into a hash table of size 10 using quadratic probing. Use the hash function `h(key) = key % 10`. Show the state of the hash table after each insertion. If you encounter an infinite loop, explain why and how to resolve it, if possible.

    *   Answer:

        *   `insert(19)`: `h(19) = 9`. `table[9] = 19`
        *   `insert(29)`: `h(29) = 9`. `table[9]` is occupied. `(9 + 1^2) % 10 = 0`. `table[0] = 29`
        *   `insert(39)`: `h(39) = 9`. `table[9]` is occupied. `(9 + 1^2) % 10 = 0`. `table[0]` is occupied. `(9 + 2^2) % 10 = 3`. `table[3] = 39`
        *   `insert(49)`: `h(49) = 9`. `table[9]` is occupied. `(9 + 1^2) % 10 = 0`. `table[0]` is occupied. `(9 + 2^2) % 10 = 3`. `table[3]` is occupied. `(9 + 3^2) % 10 = 8`. `table[8] = 49`
        *   `insert(59)`: `h(59) = 9`. `table[9]` is occupied. `(9 + 1^2) % 10 = 0`. `table[0]` is occupied. `(9 + 2^2) % 10 = 3`. `table[3]` is occupied. `(9 + 3^2) % 10 = 8`. `table[8]` is occupied. `(9 + 4^2) % 10 = 5`. `table[5] = 59`

        *   Final Table: `[29, , , 39, , 59, , , 49, 19]`

3.  **Double Hashing:** Insert the keys 89, 18, 49, 58, 69 into a hash table of size 10 using double hashing. Use the primary hash function `h1(key) = key % 10` and the secondary hash function `h2(key) = 7 - (key % 7)`. Show the state of the hash table after each insertion.

    *   Answer:

        *   `insert(89)`: `h1(89) = 9`, `h2(89) = 7 - (89 % 7) = 7 - 5 = 2`. Probe `(9 + 0 * 2) % 10 = 9`. `table[9] = 89`
        *   `insert(18)`: `h1(18) = 8`, `h2(18) = 7 - (18 % 7) = 7 - 4 = 3`. Probe `(8 + 0 * 3) % 10 = 8`. `table[8] = 18`
        *   `insert(49)`: `h1(49) = 9`, `h2(49) = 7 - (49 % 7) = 7 - 0 = 7`. Probe `(9 + 0 * 7) % 10 = 9`. `table[9]` is occupied. Probe `(9 + 1 * 7) % 10 = 6`. `table[6] = 49`
        *   `insert(58)`: `h1(58) = 8`, `h2(58) = 7 - (58 % 7) = 7 - 2 = 5`. Probe `(8 + 0 * 5) % 10 = 8`. `table[8]` is occupied. Probe `(8 + 1 * 5) % 10 = 3`. `table[3] = 58`
        *   `insert(69)`: `h1(69) = 9`, `h2(69) = 7 - (69 % 7) = 7 - 6 = 1`. Probe `(9 + 0 * 1) % 10 = 9`. `table[9]` is occupied. Probe `(9 + 1 * 1) % 10 = 0`. `table[0] = 69`

        *   Final Table: `[69, , , 58, , , 49, , 18, 89]`

4.  **Separate Chaining:**  Insert the keys 22, 31, 4, 15, 28, 17, 88, 59 into a hash table of size 10 using separate chaining. Use the hash function `h(key) = key % 10`. Show the state of the hash table after all insertions, representing the linked lists at each index.

    *   Answer:

        *   `table[0]`: NULL
        *   `table[1]`: 31
        *   `table[2]`: 22
        *   `table[3]`: NULL
        *   `table[4]`: 4
        *   `table[5]`: 15
        *   `table[6]`: NULL
        *   `table[7]`: 17
        *   `table[8]`: 28 -> 88
        *   `table[9]`: 59

5.  **Conceptual:** What are the trade-offs between open addressing techniques (linear probing, quadratic probing, double hashing) and separate chaining? Under what circumstances would you choose one over the other?

    *   Answer:

        *   **Open Addressing:**  Advantages - Lower space overhead (no linked lists), potentially faster in practice if collisions are rare. Disadvantages -  Susceptible to clustering, deletion is more complex, performance degrades rapidly as the load factor approaches 1.
        *   **Separate Chaining:** Advantages - Handles collisions gracefully, deletion is simple, can accommodate more elements than slots. Disadvantages - Requires extra space for linked lists, potentially slower lookups if lists become long.

        *   **Choice:**  Choose open addressing when space is a major constraint, collisions are expected to be rare, and a good hash function can minimize clustering. Choose separate chaining when collisions are more frequent, space is less of a concern, and simplicity of implementation and deletion are important.

## 8. Important Points to Remember

*   Collision resolution is crucial for hash table performance.
*   Linear probing is simple but suffers from primary clustering.
*   Quadratic probing reduces primary clustering but can experience secondary clustering. Table size must be a prime number.
*   Double hashing generally provides the best performance among probing techniques but requires careful selection of the secondary hash function. The secondary hash value should never return 0.
*   Separate chaining avoids clustering entirely by using linked lists but requires extra space.
*   The load factor (number of items / number of slots) significantly impacts performance, especially with open addressing techniques. Keep the load factor relatively low to maintain good performance.
*   Choosing the *right* collision resolution strategy depends on the specific application and trade-offs between space, time, and implementation complexity.
