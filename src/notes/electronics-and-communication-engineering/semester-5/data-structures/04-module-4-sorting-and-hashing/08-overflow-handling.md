---
title: "Overflow handling"
subject: "DATA STRUCTURES"
module: "Module 4: Sorting and Hashing"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c45fb09ce205780fea24"
status: "completed"
scrapedAt: "2026-05-23T17:55:20.890Z"
---
# Data Structures: Module 4 - Sorting and Hashing

## Topic: Overflow Handling

### 1. Introduction to Overflow Handling in Hashing

Hashing is a technique used to map keys to indices in an array (hash table) for efficient data retrieval. A hash function calculates the index for a given key. However, it's possible for two or more distinct keys to map to the same index. This situation is called a **collision**. **Overflow handling** refers to the strategies and techniques used to manage collisions when they occur in a hash table.

**Key Concepts:**

*   **Hash Function:** A function that converts a key into an index in the hash table.
*   **Hash Table:** An array-based data structure used for efficient searching, insertion, and deletion.
*   **Collision:** When two or more keys hash to the same index in the hash table.
*   **Overflow:** A synonym for collision in the context of hash tables.

**Importance:**

Without effective overflow handling, collisions can degrade the performance of hash tables, potentially making them no better than linear search in worst-case scenarios. Good overflow handling ensures that the average time complexity for operations remains close to O(1).

**Course Outcome Alignment:**

*   **CO5: Apply appropriate hash function to store and access a given dataset (Knowledge Level: K3)** - Understanding overflow handling is crucial for applying hash functions effectively and ensuring data can be stored and accessed reliably.

### 2. Types of Overflow Handling Techniques

There are two primary categories of overflow handling techniques:

#### 2.1. Open Addressing (Closed Hashing)

In open addressing, when a collision occurs, the key is stored in a different slot within the hash table itself. This involves probing for an alternative empty slot.

**Key Concepts:**

*   **Probing:** The process of searching for an alternative slot when a collision occurs.
*   **Probe Sequence:** The sequence of slots examined during probing.

**Types of Probing:**

*   **Linear Probing:**
    *   **Description:** If `h(key)` is occupied, we examine `(h(key) + 1) % table_size`, then `(h(key) + 2) % table_size`, and so on, until an empty slot is found.
    *   **Probe Sequence:** `h(key, i) = (h(key) + i) % table_size`, where `i = 0, 1, 2, ...`
    *   **Advantage:** Simple to implement.
    *   **Disadvantage:** Suffers from **primary clustering**. Primary clustering occurs when occupied slots tend to form contiguous blocks, leading to longer probe sequences for subsequent insertions.
    *   **Example:**
        *   Table size = 10. Keys: 12, 22, 32. Hash function: `h(key) = key % 10`.
        *   Insert 12: `h(12) = 12 % 10 = 2`. Table: `[_, _, 12, _, _, _, _, _, _, _]`
        *   Insert 22: `h(22) = 22 % 10 = 2`. Slot 2 is occupied. Probe `(2 + 1) % 10 = 3`. Table: `[_, _, 12, 22, _, _, _, _, _, _]`
        *   Insert 32: `h(32) = 32 % 10 = 2`. Slot 2 is occupied. Probe `(2 + 1) % 10 = 3`. Slot 3 is occupied. Probe `(2 + 2) % 10 = 4`. Table: `[_, _, 12, 22, 32, _, _, _, _, _]`

*   **Quadratic Probing:**
    *   **Description:** If `h(key)` is occupied, we examine `(h(key) + 1^2) % table_size`, then `(h(key) + 2^2) % table_size`, and so on.
    *   **Probe Sequence:** `h(key, i) = (h(key) + c1*i + c2*i^2) % table_size`, where `c1` and `c2` are constants. A common choice is `c1=0, c2=1`, leading to `h(key, i) = (h(key) + i^2) % table_size`.
    *   **Advantage:** Reduces primary clustering.
    *   **Disadvantage:** Can suffer from **secondary clustering**. Secondary clustering occurs when keys that initially hash to the same slot follow the same probe sequence. Also, it's not guaranteed to find an empty slot if the table is more than half full, especially if the table size is not a prime number.
    *   **Example:**
        *   Table size = 10. Keys: 12, 22, 32. Hash function: `h(key) = key % 10`.
        *   Insert 12: `h(12) = 12 % 10 = 2`. Table: `[_, _, 12, _, _, _, _, _, _, _]`
        *   Insert 22: `h(22) = 22 % 10 = 2`. Slot 2 occupied. Probe `(2 + 1^2) % 10 = 3`. Table: `[_, _, 12, 22, _, _, _, _, _, _]`
        *   Insert 32: `h(32) = 32 % 10 = 2`. Slot 2 occupied. Probe `(2 + 1^2) % 10 = 3`. Slot 3 occupied. Probe `(2 + 2^2) % 10 = (2 + 4) % 10 = 6`. Table: `[_, _, 12, 22, _, _, 32, _, _, _]`

*   **Double Hashing:**
    *   **Description:** Uses two hash functions. If `h1(key)` is occupied, we use a second hash function `h2(key)` to determine the step size for probing.
    *   **Probe Sequence:** `h(key, i) = (h1(key) + i * h2(key)) % table_size`, where `i = 0, 1, 2, ...`
    *   **Advantage:** Minimizes both primary and secondary clustering. It's generally considered the most effective open addressing method in terms of performance.
    *   **Disadvantage:** Requires a second good hash function. `h2(key)` should never return 0 and should be relatively prime to the table size to ensure all slots are eventually visited.
    *   **Example:**
        *   Table size = 10. Keys: 12, 22, 32. Hash function 1: `h1(key) = key % 10`. Hash function 2: `h2(key) = 7 - (key % 7)`.
        *   Insert 12: `h1(12) = 2`. Table: `[_, _, 12, _, _, _, _, _, _, _]`
        *   Insert 22: `h1(22) = 2`. Slot 2 occupied. `h2(22) = 7 - (22 % 7) = 7 - 1 = 6`. Probe `(2 + 1 * 6) % 10 = 8`. Table: `[_, _, 12, _, _, _, _, _, 22, _]`
        *   Insert 32: `h1(32) = 2`. Slot 2 occupied. `h2(32) = 7 - (32 % 7) = 7 - 4 = 3`. Probe `(2 + 1 * 3) % 10 = 5`. Table: `[_, _, 12, _, _, 32, _, _, 22, _]`

**Deletion in Open Addressing:**

Deletion is tricky in open addressing. Simply removing an element can break the probe sequence for other elements that were inserted later. To handle this, deleted slots are marked with a special "deleted" or "tombstone" marker. When searching, we skip over deleted slots but stop at an empty slot. When inserting, a deleted slot can be reused.

**References:**

*   Horowitz, Sahni, Anderson-Freed (2/e, 2008): Chapter 7 discusses hashing and open addressing techniques in detail.
*   Samanta (2/e, 2009): Chapter 9 covers hashing and collision resolution strategies.

#### 2.2. Separate Chaining (Closed Hashing)

In separate chaining, each slot in the hash table points to a separate data structure (typically a linked list) that stores all keys that hash to that slot.

**Key Concepts:**

*   **Chaining:** Connecting multiple elements that hash to the same index into a linked list.
*   **Load Factor (α):** The ratio of the number of elements in the table (n) to the table size (m): `α = n / m`.
    *   For separate chaining, a load factor greater than 1 is acceptable, as the linked lists can grow.
    *   For open addressing, the load factor must be less than 1.

**Advantages:**

*   Simple to implement.
*   Deletion is straightforward.
*   Less sensitive to the quality of the hash function compared to open addressing.
*   Load factor can exceed 1 without severe performance degradation.

**Disadvantages:**

*   Requires extra memory for the linked list nodes.
*   Can degrade to O(n) in the worst case if all keys hash to the same slot (poor hash function).

**Example:**

*   Table size = 5. Keys: 12, 22, 32, 17, 27. Hash function: `h(key) = key % 5`.
*   Table structure: An array of pointers to linked lists.

    ```
    Index | Linked List
    ------|------------
    0     | NULL
    1     | NULL
    2     | 12 -> 22 -> 32 -> NULL
    3     | 17 -> 27 -> NULL
    4     | NULL
    ```

*   **Insert 12:** `h(12) = 12 % 5 = 2`. Insert 12 into the linked list at index 2.
*   **Insert 22:** `h(22) = 22 % 5 = 2`. Insert 22 into the linked list at index 2.
*   **Insert 32:** `h(32) = 32 % 5 = 2`. Insert 32 into the linked list at index 2.
*   **Insert 17:** `h(17) = 17 % 5 = 2`. Oh, wait. `h(17) = 17 % 5 = 2` is incorrect.
    *   Corrected: `h(17) = 17 % 5 = 2`. Insert 17 into the linked list at index 2.
    *   Ah, let's re-evaluate the example to ensure clarity:
        *   Insert 12: `h(12) = 12 % 5 = 2`. List at index 2: `12 -> NULL`
        *   Insert 22: `h(22) = 22 % 5 = 2`. List at index 2: `12 -> 22 -> NULL`
        *   Insert 32: `h(32) = 32 % 5 = 2`. List at index 2: `12 -> 22 -> 32 -> NULL`
        *   Insert 17: `h(17) = 17 % 5 = 2`. This is still incorrect. The example should demonstrate collisions.
        *   Let's correct the keys or table size for a better example.
        *   **Revised Example:** Table size = 5. Keys: 12, 22, 17, 27, 32. Hash function: `h(key) = key % 5`.
            *   Insert 12: `h(12) = 12 % 5 = 2`. List at index 2: `12 -> NULL`
            *   Insert 22: `h(22) = 22 % 5 = 2`. List at index 2: `12 -> 22 -> NULL`
            *   Insert 17: `h(17) = 17 % 5 = 2`. Collision at index 2. List at index 2: `12 -> 22 -> 17 -> NULL`
            *   Insert 27: `h(27) = 27 % 5 = 2`. Collision at index 2. List at index 2: `12 -> 22 -> 17 -> 27 -> NULL`
            *   Insert 32: `h(32) = 32 % 5 = 2`. Collision at index 2. List at index 2: `12 -> 22 -> 17 -> 27 -> 32 -> NULL`

        *   This example shows a very poor hash function or table size. Let's use a slightly better set of keys.
        *   **Revised Example 2:** Table size = 5. Keys: 12, 22, 17, 27, 32. Hash function: `h(key) = key % 5`.
            *   Insert 12: `h(12) = 12 % 5 = 2`. List at index 2: `12 -> NULL`
            *   Insert 22: `h(22) = 22 % 5 = 2`. List at index 2: `12 -> 22 -> NULL`
            *   Insert 17: `h(17) = 17 % 5 = 2`. Collision. List at index 2: `12 -> 22 -> 17 -> NULL`
            *   Insert 27: `h(27) = 27 % 5 = 2`. Collision. List at index 2: `12 -> 22 -> 17 -> 27 -> NULL`
            *   Insert 32: `h(32) = 32 % 5 = 2`. Collision. List at index 2: `12 -> 22 -> 17 -> 27 -> 32 -> NULL`

        *   Okay, it seems I'm struggling to create a diverse example quickly. Let's use different keys that produce varied hash values.
        *   **Final Example (Separate Chaining):** Table size = 7. Keys: 15, 22, 8, 30, 19, 45. Hash function: `h(key) = key % 7`.

            | Key | Hash Value (key % 7) | Index | Linked List at Index |
            |-----|----------------------|-------|----------------------|
            | 15  | 1                    | 1     | 15 -> NULL           |
            | 22  | 1                    | 1     | 15 -> 22 -> NULL     |
            | 8   | 1                    | 1     | 15 -> 22 -> 8 -> NULL|
            | 30  | 2                    | 2     | 30 -> NULL           |
            | 19  | 5                    | 5     | 19 -> NULL           |
            | 45  | 3                    | 3     | 45 -> NULL           |

        *   **Resulting Hash Table:**
            ```
            Index | Linked List
            ------|---------------------
            0     | NULL
            1     | 15 -> 22 -> 8 -> NULL
            2     | 30 -> NULL
            3     | 45 -> NULL
            4     | NULL
            5     | 19 -> NULL
            6     | NULL
            ```

**References:**

*   Horowitz, Sahni, Anderson-Freed (2/e, 2008): Chapter 7 also covers separate chaining.
*   Gilberg, Forouzan (2/e, 2005): Chapter 10 discusses hashing and chaining.
*   Aho, Hopcroft, Ullman (1/e, 1983): Chapter 5 provides a theoretical foundation for hashing, including chaining.

### 3. Choosing the Right Technique

The choice between open addressing and separate chaining depends on several factors:

*   **Memory Overhead:** Separate chaining requires extra memory for pointers/nodes in linked lists. Open addressing uses only the table array but might require a larger table to maintain performance due to clustering.
*   **Deletion Frequency:** If deletions are frequent, separate chaining is generally preferred due to simpler deletion logic. Open addressing requires marking deleted slots, which can complicate search and insertion.
*   **Load Factor:** Separate chaining handles high load factors gracefully. Open addressing performance degrades significantly as the load factor approaches 1.
*   **Clustering:** Open addressing techniques (especially linear probing) are susceptible to clustering. Double hashing is the best in open addressing for mitigating this. Separate chaining is less affected by clustering itself, but a poor hash function can lead to very long lists.

**Important Point to Remember:**

The performance of hashing, regardless of the overflow handling technique, is heavily dependent on the **quality of the hash function** and the **load factor**. A good hash function distributes keys uniformly across the table, minimizing collisions.

### 4. Practice Questions and Exercises

**Question 1:**
Consider a hash table of size 11. Using linear probing, insert the keys: 12, 44, 13, 88, 23, 94, 16, 73, 41. The hash function is `h(key) = key % 11`.
a) Show the final state of the hash table.
b) What is the probe sequence for inserting key 94?

**Answer 1:**
Hash function: `h(key) = key % 11`
Table size: 11

*   Insert 12: `h(12) = 12 % 11 = 1`. Table: `[_, 12, _, _, _, _, _, _, _, _, _]`
*   Insert 44: `h(44) = 44 % 11 = 0`. Table: `[44, 12, _, _, _, _, _, _, _, _, _]`
*   Insert 13: `h(13) = 13 % 11 = 2`. Table: `[44, 12, 13, _, _, _, _, _, _, _, _]`
*   Insert 88: `h(88) = 88 % 11 = 0`. Slot 0 occupied. Probe `(0 + 1) % 11 = 1`. Slot 1 occupied. Probe `(0 + 2) % 11 = 2`. Slot 2 occupied. Probe `(0 + 3) % 11 = 3`. Table: `[44, 12, 13, 88, _, _, _, _, _, _, _]`
*   Insert 23: `h(23) = 23 % 11 = 1`. Slot 1 occupied. Probe `(1 + 1) % 11 = 2`. Slot 2 occupied. Probe `(1 + 2) % 11 = 3`. Slot 3 occupied. Probe `(1 + 3) % 11 = 4`. Table: `[44, 12, 13, 88, 23, _, _, _, _, _, _]`
*   Insert 94: `h(94) = 94 % 11 = 6`. Table: `[44, 12, 13, 88, 23, _, 94, _, _, _, _]`
*   Insert 16: `h(16) = 16 % 11 = 5`. Table: `[44, 12, 13, 88, 23, 16, 94, _, _, _, _]`
*   Insert 73: `h(73) = 73 % 11 = 7`. Table: `[44, 12, 13, 88, 23, 16, 94, 73, _, _, _]`
*   Insert 41: `h(41) = 41 % 11 = 8`. Table: `[44, 12, 13, 88, 23, 16, 94, 73, 41, _, _]`

a) Final Hash Table:
   `[44, 12, 13, 88, 23, 16, 94, 73, 41, _, _]` (Indices 9 and 10 are empty)

b) Probe sequence for inserting key 94:
   `h(94) = 94 % 11 = 6`. Slot 6 is empty.
   Probe sequence: 6. (Only one probe needed as the slot was empty).

**Question 2:**
Using separate chaining, insert the keys: 5, 28, 19, 15, 20, 33, 12, 17, 10 into a hash table of size 7. The hash function is `h(key) = key % 7`. Draw the resulting hash table, showing the linked lists at each index.

**Answer 2:**
Hash function: `h(key) = key % 7`
Table size: 7

| Key | Hash Value (key % 7) | Index | Action                                  | Linked List at Index |
|-----|----------------------|-------|-----------------------------------------|----------------------|
| 5   | 5                    | 5     | Insert 5 at index 5                     | 5 -> NULL            |
| 28  | 0                    | 0     | Insert 28 at index 0                    | 28 -> NULL           |
| 19  | 5                    | 5     | Collision at index 5. Insert 19 after 5 | 5 -> 19 -> NULL      |
| 15  | 1                    | 1     | Insert 15 at index 1                    | 15 -> NULL           |
| 20  | 6                    | 6     | Insert 20 at index 6                    | 20 -> NULL           |
| 33  | 5                    | 5     | Collision at index 5. Insert 33 after 19| 5 -> 19 -> 33 -> NULL|
| 12  | 5                    | 5     | Collision at index 5. Insert 12 after 33| 5 -> 19 -> 33 -> 12-> NULL|
| 17  | 3                    | 3     | Insert 17 at index 3                    | 17 -> NULL           |
| 10  | 3                    | 3     | Collision at index 3. Insert 10 after 17| 17 -> 10 -> NULL     |

Resulting Hash Table:
```
Index | Linked List
------|--------------------------
0     | 28 -> NULL
1     | 15 -> NULL
2     | NULL
3     | 17 -> 10 -> NULL
4     | NULL
5     | 5 -> 19 -> 33 -> 12 -> NULL
6     | 20 -> NULL
```

**Question 3:**
Which overflow handling technique is generally preferred when deletions are frequent? Explain why.

**Answer 3:**
**Separate Chaining** is generally preferred when deletions are frequent.

**Explanation:**
In **open addressing**, when an element is deleted, its slot must be marked as "deleted" (often with a tombstone marker) instead of being marked as empty. This is because simply emptying the slot might break the probe sequence for other elements that were inserted later and had to probe past the deleted slot to find their positions. Searching must continue past these "deleted" markers until an empty slot is found. This can complicate the search and insertion logic and potentially lead to longer search times if many deletions occur.

In **separate chaining**, deletion is as simple as removing a node from a linked list. The process does not affect the integrity of the hash table or the probe sequences of other elements. This makes separate chaining a more straightforward and often more efficient choice for applications with frequent deletions.

**Course Outcome Alignment:**

*   **CO4: Apply and compare various techniques for searching and sorting. (Knowledge Level: K3)** - Understanding the implications of deletion on search performance in different hashing overflow handling techniques is part of comparing these techniques.

### 5. Important Points to Remember

*   **Collisions are inevitable:** A good hash function minimizes them but doesn't eliminate them.
*   **Load Factor (α):** Crucial for performance. High load factors lead to more collisions and slower operations.
*   **Open Addressing:**
    *   **Linear Probing:** Prone to primary clustering.
    *   **Quadratic Probing:** Reduces primary clustering but can have secondary clustering.
    *   **Double Hashing:** Generally the best open addressing technique for minimizing clustering.
    *   **Deletion:** Requires special handling (tombstones).
*   **Separate Chaining:**
    *   Uses auxiliary data structures (linked lists) for collision resolution.
    *   Simple deletion.
    *   Load factor can exceed 1.
*   **Hash Table Performance:** Highly dependent on the hash function's ability to distribute keys uniformly and the chosen overflow handling strategy.
*   **Table Size:** Often chosen to be a prime number, especially for open addressing, to improve probing sequences and distribution.

This concludes the study notes on Overflow Handling in Data Structures.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=33vbFFFn04k) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=M0mx8S05v60) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=APPIZ2S8YmY) |
