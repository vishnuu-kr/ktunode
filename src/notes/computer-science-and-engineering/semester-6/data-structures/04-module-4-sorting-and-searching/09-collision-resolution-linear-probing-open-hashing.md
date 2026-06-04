---
title: "Collision Resolution :  Linear probing, Open hashing"
subject: "DATA STRUCTURES"
module: "Module 4: Sorting and Searching"
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8beb1"
status: "completed"
scrapedAt: "2026-05-20T16:52:11.222Z"
---
# Data Structures: Module 4 - Sorting and Searching

## Topic: Collision Resolution

### Learning Outcomes:

Upon successful completion of this topic, you will be able to:

*   Understand the concept of collisions in hash tables.
*   Explain the principles of linear probing for collision resolution.
*   Implement linear probing to handle collisions.
*   Analyze the performance characteristics of linear probing.
*   Explain the principles of open hashing (separate chaining) for collision resolution.
*   Implement open hashing to handle collisions.
*   Analyze the performance characteristics of open hashing.
*   Compare and contrast linear probing and open hashing.

---

### 1. Introduction to Collisions in Hash Tables

*   **What is a Hash Table?**
    *   A data structure that implements an associative array (also known as a map or dictionary).
    *   It stores key-value pairs.
    *   Uses a **hash function** to compute an index (or "hash code") into an array of **buckets** or **slots**.
    *   The goal is to achieve O(1) average time complexity for insertion, deletion, and search operations.

*   **What is a Collision?**
    *   A collision occurs when the hash function maps two or more different keys to the **same index** in the hash table's underlying array.
    *   This is inevitable, especially as the number of elements approaches the size of the table.

*   **Why is Collision Resolution Necessary?**
    *   If collisions are not handled, multiple keys would try to occupy the same slot, leading to data loss or incorrect retrieval.
    *   Collision resolution techniques provide a systematic way to store and retrieve all elements, even when their hash values collide.

*   **Types of Collision Resolution Strategies:**
    *   **Open Addressing (Closed Hashing):** All elements are stored directly within the hash table array. When a collision occurs, we probe for another available slot in the table itself.
        *   Linear Probing
        *   Quadratic Probing
        *   Double Hashing
    *   **Separate Chaining (Open Hashing):** Each slot in the hash table array points to a separate data structure (typically a linked list) that stores all keys that hash to that slot.

---

### 2. Open Addressing: Linear Probing

*   **Concept:**
    *   When a collision occurs at index `h(key)`, linear probing searches for the next available slot sequentially in the array.
    *   The probing sequence is determined by adding an increment (usually 1) to the initial hash index.
    *   The probe sequence for a key `k` is: `h(k)`, `(h(k) + 1) % table_size`, `(h(k) + 2) % table_size`, and so on.

*   **How it Works:**
    *   **Insertion:**
        1.  Calculate the initial hash index: `index = h(key)`.
        2.  If `table[index]` is empty, insert the key-value pair there.
        3.  If `table[index]` is occupied, check `table[(index + 1) % table_size]`.
        4.  Continue probing `table[(index + i) % table_size]` until an empty slot is found.
        5.  Insert the key-value pair into the first empty slot found.
    *   **Search:**
        1.  Calculate the initial hash index: `index = h(key)`.
        2.  If `table[index]` contains the desired key, return it.
        3.  If `table[index]` is occupied but does not contain the desired key, check `table[(index + 1) % table_size]`.
        4.  Continue probing `table[(index + i) % table_size]` until:
            *   The key is found.
            *   An empty slot is encountered (meaning the key is not in the table).
            *   The entire table has been scanned.
    *   **Deletion:**
        *   Deletion is tricky in linear probing. Simply removing an element can break the probe sequence for other elements that collided at that slot.
        *   To handle this, deleted slots are typically marked with a special "deleted" or "tombstone" marker.
        *   During search, we treat "deleted" slots as occupied and continue probing.
        *   During insertion, we can insert into a "deleted" slot.

*   **Example:**
    *   Hash Table size = 10
    *   Hash function: `h(key) = key % 10`
    *   Keys to insert: 12, 22, 32, 45, 55

    1.  **Insert 12:**
        *   `h(12) = 12 % 10 = 2`
        *   `table[2]` is empty. Insert 12 at index 2.
        *   `[ , , 12, , , , , , , ]`

    2.  **Insert 22:**
        *   `h(22) = 22 % 10 = 2`
        *   `table[2]` is occupied by 12. Collision!
        *   Probe `(2 + 1) % 10 = 3`. `table[3]` is empty. Insert 22 at index 3.
        *   `[ , , 12, 22, , , , , , ]`

    3.  **Insert 32:**
        *   `h(32) = 32 % 10 = 2`
        *   `table[2]` is occupied by 12. Collision!
        *   Probe `(2 + 1) % 10 = 3`. `table[3]` is occupied by 22. Collision!
        *   Probe `(2 + 2) % 10 = 4`. `table[4]` is empty. Insert 32 at index 4.
        *   `[ , , 12, 22, 32, , , , , ]`

    4.  **Insert 45:**
        *   `h(45) = 45 % 10 = 5`
        *   `table[5]` is empty. Insert 45 at index 5.
        *   `[ , , 12, 22, 32, 45, , , , ]`

    5.  **Insert 55:**
        *   `h(55) = 55 % 10 = 5`
        *   `table[5]` is occupied by 45. Collision!
        *   Probe `(5 + 1) % 10 = 6`. `table[6]` is empty. Insert 55 at index 6.
        *   `[ , , 12, 22, 32, 45, 55, , , ]`

*   **Performance Analysis:**
    *   **Advantages:**
        *   Simple to implement.
        *   Good cache performance (elements are close to each other in memory).
    *   **Disadvantages:**
        *   **Primary Clustering:** A significant problem. If several keys hash to the same initial slot, they will form a contiguous block of occupied slots. This block will then attract more keys that hash to any slot within that block, leading to longer probe sequences.
        *   Performance degrades significantly as the load factor increases (load factor = number of elements / table size).
        *   Deletion requires special handling (tombstones).

*   **Load Factor (`α`):** `α = n / m` (where `n` is the number of elements and `m` is the table size).
    *   For linear probing, the average number of probes for a successful search is approximately `(1/2) * (1 + 1/(1-α))`.
    *   The average number of probes for an unsuccessful search is approximately `(1/2) * (1 + 1/(1-α)^2)`.
    *   As `α` approaches 1, the number of probes increases dramatically.

---

### 3. Open Hashing: Separate Chaining

*   **Concept:**
    *   Each slot in the hash table array does not store the key-value pair directly.
    *   Instead, each slot acts as a pointer to a **separate data structure**, typically a **linked list**, that stores all key-value pairs that hash to that particular slot.

*   **How it Works:**
    *   **Insertion:**
        1.  Calculate the hash index: `index = h(key)`.
        2.  Go to the linked list at `table[index]`.
        3.  Add the new key-value pair to the beginning or end of this linked list.
    *   **Search:**
        1.  Calculate the hash index: `index = h(key)`.
        2.  Traverse the linked list at `table[index]` to find the desired key.
    *   **Deletion:**
        1.  Calculate the hash index: `index = h(key)`.
        2.  Traverse the linked list at `table[index]`.
        3.  Remove the key-value pair from the linked list.

*   **Example:**
    *   Hash Table size = 10
    *   Hash function: `h(key) = key % 10`
    *   Keys to insert: 12, 22, 32, 45, 55

    1.  **Insert 12:**
        *   `h(12) = 12 % 10 = 2`
        *   `table[2]` points to an empty list. Add 12 to the list at `table[2]`.
        *   `[ , , [12], , , , , , , ]`

    2.  **Insert 22:**
        *   `h(22) = 22 % 10 = 2`
        *   `table[2]` points to a list containing 12. Add 22 to this list.
        *   `[ , , [12 -> 22], , , , , , , ]`

    3.  **Insert 32:**
        *   `h(32) = 32 % 10 = 2`
        *   `table[2]` points to a list containing 12 -> 22. Add 32 to this list.
        *   `[ , , [12 -> 22 -> 32], , , , , , , ]`

    4.  **Insert 45:**
        *   `h(45) = 45 % 10 = 5`
        *   `table[5]` points to an empty list. Add 45 to the list at `table[5]`.
        *   `[ , , [12 -> 22 -> 32], , , [45], , , , ]`

    5.  **Insert 55:**
        *   `h(55) = 55 % 10 = 5`
        *   `table[5]` points to a list containing 45. Add 55 to this list.
        *   `[ , , [12 -> 22 -> 32], , , [45 -> 55], , , , ]`

*   **Performance Analysis:**
    *   **Advantages:**
        *   Simple deletion: Just remove the node from the linked list.
        *   Less sensitive to the load factor: The table doesn't get "full" in the same way as open addressing. The performance depends on the length of the linked lists.
        *   No primary clustering.
    *   **Disadvantages:**
        *   Requires extra space for the linked list nodes (pointers).
        *   Can have poorer cache performance because linked list nodes might not be contiguous in memory.
        *   If the hash function is poor, all elements can end up in a single linked list, degrading performance to O(n) for all operations.

*   **Load Factor (`α`):** `α = n / m`
    *   For separate chaining, the average number of probes for a successful search is approximately `1 + α/2`.
    *   The average number of probes for an unsuccessful search is approximately `α`.
    *   Performance is generally good even with a load factor greater than 1, as long as the linked lists are not excessively long. The average length of a linked list is `α`.

---

### 4. Comparison of Linear Probing and Separate Chaining

| Feature             | Linear Probing                                     | Separate Chaining                                       |
| :------------------ | :------------------------------------------------- | :------------------------------------------------------ |
| **Collision Handling** | Stores collided elements in the next available slot. | Stores collided elements in a separate data structure (e.g., linked list) at the hashed index. |
| **Table Occupancy** | The table itself stores all elements.              | Each slot points to a separate structure.               |
| **Deletion**        | Difficult, requires "tombstone" markers.           | Simple, remove node from linked list.                   |
| **Clustering**      | Prone to primary clustering.                       | No clustering issue within the table, but can have long lists. |
| **Space Overhead**  | Minimal extra space per slot.                      | Extra space for linked list nodes (pointers).           |
| **Cache Performance**| Generally better due to data locality.             | Potentially worse due to scattered memory locations.    |
| **Load Factor (`α`)** | Performance degrades significantly as `α` approaches 1. | Can handle `α > 1` gracefully, performance depends on list lengths. |
| **Implementation**  | Simpler conceptual storage, complex deletion.      | Simpler deletion, relies on another data structure.     |
| **Maximum Elements**| Limited by table size.                             | Can store more elements than the table size.            |

---

### 5. Key Points to Remember:

*   **Collisions are unavoidable** in hash tables.
*   **Collision resolution strategies** are crucial for hash table efficiency.
*   **Linear probing** suffers from **primary clustering**, which can degrade performance significantly as the table fills up. Deletion is complex.
*   **Separate chaining** uses auxiliary data structures (like linked lists) to handle collisions. It's simpler for deletion and less sensitive to load factors but has higher space overhead and potentially worse cache performance.
*   The **load factor (`α`)** is a key metric for analyzing hash table performance.
*   A **good hash function** is essential for both methods to distribute keys evenly and minimize collisions.

---

### 6. Practice Questions and Exercises:

**Question 1:**
What is a collision in the context of hash tables?

**Answer 1:**
A collision occurs when two or more different keys are mapped to the same index in the hash table's underlying array by the hash function.

---

**Question 2:**
Describe the probing sequence used in linear probing.

**Answer 2:**
In linear probing, if a collision occurs at index `h(key)`, the probe sequence checks indices `(h(key) + 1) % table_size`, `(h(key) + 2) % table_size`, and so on, until an empty slot is found.

---

**Question 3:**
What is the main disadvantage of linear probing, and what is it called?

**Answer 3:**
The main disadvantage of linear probing is **primary clustering**, where collisions lead to contiguous blocks of occupied slots, causing longer probe sequences for subsequent insertions and searches.

---

**Question 4:**
How is deletion handled in separate chaining?

**Answer 4:**
In separate chaining, deletion is handled by calculating the hash index, finding the key in the linked list at that index, and removing the corresponding node from the linked list.

---

**Question 5:**
Consider a hash table of size 7 with the hash function `h(key) = key % 7`. Insert the following keys using **linear probing**: 10, 20, 3, 17, 24. Show the state of the hash table after each insertion.

**Answer 5:**
*   Table size: 7
*   Hash function: `h(key) = key % 7`
*   Keys: 10, 20, 3, 17, 24

1.  **Insert 10:**
    *   `h(10) = 10 % 7 = 3`
    *   Table: `[ , , , 10, , , ]`

2.  **Insert 20:**
    *   `h(20) = 20 % 7 = 6`
    *   Table: `[ , , , 10, , , 20]`

3.  **Insert 3:**
    *   `h(3) = 3 % 7 = 3`
    *   `table[3]` is occupied (10). Probe `(3 + 1) % 7 = 4`. `table[4]` is empty.
    *   Table: `[ , , , 10, 3, , 20]`

4.  **Insert 17:**
    *   `h(17) = 17 % 7 = 3`
    *   `table[3]` is occupied (10). Probe `(3 + 1) % 7 = 4`. `table[4]` is occupied (3). Probe `(3 + 2) % 7 = 5`. `table[5]` is empty.
    *   Table: `[ , , , 10, 3, 17, 20]`

5.  **Insert 24:**
    *   `h(24) = 24 % 7 = 3`
    *   `table[3]` is occupied (10). Probe `(3 + 1) % 7 = 4`. `table[4]` is occupied (3). Probe `(3 + 2) % 7 = 5`. `table[5]` is occupied (17). Probe `(3 + 3) % 7 = 6`. `table[6]` is occupied (20). Probe `(3 + 4) % 7 = 0`. `table[0]` is empty.
    *   Table: `[24, , , 10, 3, 17, 20]`

---

**Question 6:**
Consider a hash table of size 7 with the hash function `h(key) = key % 7`. Insert the following keys using **separate chaining**: 10, 20, 3, 17, 24. Show the state of the hash table (where each slot points to a linked list) after each insertion.

**Answer 6:**
*   Table size: 7
*   Hash function: `h(key) = key % 7`
*   Keys: 10, 20, 3, 17, 24

1.  **Insert 10:**
    *   `h(10) = 10 % 7 = 3`
    *   Table: `[ , , , [10], , , ]`

2.  **Insert 20:**
    *   `h(20) = 20 % 7 = 6`
    *   Table: `[ , , , [10], , , [20]]`

3.  **Insert 3:**
    *   `h(3) = 3 % 7 = 3`
    *   Add 3 to the list at index 3.
    *   Table: `[ , , , [10 -> 3], , , [20]]`

4.  **Insert 17:**
    *   `h(17) = 17 % 7 = 3`
    *   Add 17 to the list at index 3.
    *   Table: `[ , , , [10 -> 3 -> 17], , , [20]]`

5.  **Insert 24:**
    *   `h(24) = 24 % 7 = 3`
    *   Add 24 to the list at index 3.
    *   Table: `[ , , , [10 -> 3 -> 17 -> 24], , , [20]]`

---

**Question 7:**
Compare and contrast the space complexity of linear probing and separate chaining.

**Answer 7:**
*   **Linear Probing:** The space complexity is O(m), where m is the size of the hash table array. Each slot in the array directly stores an element (or a tombstone). The space overhead per element is minimal, just the space for the element itself.
*   **Separate Chaining:** The space complexity is O(n + m), where n is the number of elements and m is the size of the hash table array. The `m` accounts for the array of pointers, and the `n` accounts for the storage of the actual elements within the linked lists. Each element in a linked list requires additional space for the pointer(s). Therefore, separate chaining has a higher space overhead per element compared to linear probing.
