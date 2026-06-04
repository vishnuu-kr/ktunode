---
title: "Hash functions"
subject: "ADVANCED DATA STRUCTURES"
module: "Module 1: Foundational Data Structures"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b35d"
status: "completed"
scrapedAt: "2026-05-20T16:10:00.744Z"
---
# ADVANCED DATA STRUCTURES - Module 1: Foundational Data Structures - Hash Functions

## Introduction

This module focuses on hash functions, a critical component of many advanced data structures and algorithms.  Understanding hash functions is fundamental to efficient data storage and retrieval.

## Learning Outcomes

By the end of this topic, you should be able to:

*   Define a hash function and its purpose.
*   Explain the properties of a good hash function.
*   Describe different hashing techniques (division, multiplication, universal hashing).
*   Discuss collision resolution techniques (chaining, open addressing).
*   Analyze the performance of hashing under different collision resolution strategies.
*   Implement basic hash functions and collision resolution methods.

## 1. What is a Hash Function?

*   **Definition:** A hash function is a function, *h(k)*, that takes an input *k* (the key) and maps it to an integer value *h(k)* within a specific range, typically [0, m-1], where *m* is the size of the hash table. This integer value is used as an index into a hash table or array.

*   **Purpose:**
    *   To transform keys into indices for efficient storage and retrieval of data in a hash table.
    *   To quickly determine the location of a key in the hash table, allowing for (ideally) O(1) average-case time complexity for insertion, deletion, and search operations.

*   **Key Concepts:**
    *   **Key (k):** The input data that needs to be stored or retrieved.  This can be any data type.
    *   **Hash Value (h(k)):**  The integer value outputted by the hash function for a given key.  This is used as an index.
    *   **Hash Table:** An array-like data structure that stores data based on the hash value of the keys.
    *   **Collision:** Occurs when two different keys, *k1* and *k2*, produce the same hash value: *h(k1) = h(k2)*.
    *   **Uniform Hashing:** An ideal situation where each key is equally likely to hash to any slot of the table, independently of the other keys. This is difficult to achieve in practice.

## 2. Properties of a Good Hash Function

A good hash function should possess the following properties:

*   **Uniformity:** The hash function should distribute keys as evenly as possible across the hash table. This minimizes the number of collisions.

*   **Simplicity/Efficiency:**  The function should be computationally inexpensive to calculate. The primary goal of hashing is speed, so a complex hash function defeats the purpose.

*   **Determinism:**  For a given key, the hash function should always produce the same hash value. Consistency is crucial for retrieval.

*   **Sensitivity to Changes:**  Ideally, a small change in the key should result in a significant change in the hash value.  This helps prevent clusters of keys hashing to the same area of the table.  This is more relevant in some contexts than others (e.g., cryptographic hashing).

## 3. Hashing Techniques

### 3.1 Division Method

*   **Formula:** *h(k) = k mod m*, where *k* is the key and *m* is the size of the hash table.
*   **Principle:**  The hash value is the remainder when the key is divided by the size of the table.
*   **Considerations:**
    *   Choosing *m* is crucial.  Prime numbers that are relatively far from powers of 2 are often good choices.
    *   Avoid powers of 2 for *m* if the keys have a pattern in their low-order bits because the hash will only depend on those bits.  For example, if *m* is 2<sup>p</sup>, then *h(k)* is just the *p* lowest-order bits of *k*.

*   **Example:** Suppose *k* = 12345 and *m* = 100. Then *h(k)* = 12345 mod 100 = 45.

### 3.2 Multiplication Method

*   **Formula:** *h(k) = floor(m * (k * A mod 1)), where 0 < A < 1*
    *   *m* is the size of the hash table.
    *   *k* is the key.
    *   *A* is a constant between 0 and 1 (often recommended to be the golden ratio, approximately 0.618).
    *   *(k * A mod 1)* is the fractional part of *k* * A*.

*   **Principle:**  Multiplies the key by a constant *A*, takes the fractional part of the result, then scales it by the table size and truncates.
*   **Considerations:**
    *   The choice of *m* is generally less critical than in the division method.
    *   The value of *A* is important. Knuth suggests *A = (sqrt(5) - 1) / 2 ≈ 0.6180339887*.
*   **Example:** Suppose *k* = 12345, *m* = 100, and *A* = 0.618.  Then:
    *   *k * A* = 12345 * 0.618 = 7628.11
    *   *(k * A mod 1)* = 0.11
    *   *m * (k * A mod 1)* = 100 * 0.11 = 11
    *   *h(k)* = floor(11) = 11.

### 3.3 Universal Hashing

*   **Concept:**  Instead of using a single hash function, choose a hash function *randomly* from a *family* of hash functions.  This helps avoid worst-case scenarios caused by particular input patterns interacting poorly with a specific hash function.
*   **Benefits:**  Provides good average-case performance regardless of the keys that are actually chosen.
*   **Example:** Consider a family of hash functions of the form: *h<sub>a,b</sub>(k) = ((ak + b) mod p) mod m*, where:
    *   *p* is a prime number larger than all keys.
    *   *a* is a random integer in the range [1, p-1].
    *   *b* is a random integer in the range [0, p-1].
    *   *m* is the size of the hash table.

    For each insertion, deletion, or search operation, a new *a* and *b* could be randomly chosen (though more typically, *a* and *b* would be chosen once at table creation).  By randomly selecting from the family, the probability of a collision for any two keys *k1* and *k2* can be proven to be at most 1/m, which is the same collision probability as in ideal uniform hashing.

## 4. Collision Resolution Techniques

Collisions are inevitable when the number of keys exceeds the number of slots in the hash table. We need strategies to handle them.

### 4.1 Chaining (Separate Chaining)

*   **Principle:** Each slot in the hash table points to a linked list (or other dynamic data structure) that stores all the keys that hash to that slot.

*   **Operations:**
    *   **Insert:** Calculate the hash value *h(k)*. Insert the key *k* into the linked list at the slot *h(k)*.  Insertion can be at the head (O(1)) or tail (O(n) if you need to traverse the list to find the end) of the list.
    *   **Search:** Calculate the hash value *h(k)*. Traverse the linked list at the slot *h(k)* to find the key *k*.
    *   **Delete:** Calculate the hash value *h(k)*. Traverse the linked list at the slot *h(k)* to find the key *k*.  Remove the key from the list.

*   **Advantages:**
    *   Simple to implement.
    *   Handles collisions effectively.
    *   Table never fills up (can accommodate more keys than slots, although performance degrades).

*   **Disadvantages:**
    *   Requires extra memory for linked lists (or other dynamic data structures).
    *   Search time depends on the length of the linked lists.  Worst-case is O(n), where n is the number of keys in the list.

*   **Example:**  Suppose we have a hash table of size 5, and the following keys to insert: 10, 22, 31, 4, 15, 28, 17, 88, 59.  Let's use *h(k) = k mod 5* as our hash function.

    The hash table would look like this:

    *   Index 0: 10 -> 15
    *   Index 1: 31
    *   Index 2: 22 -> 17
    *   Index 3: 28 -> 88
    *   Index 4: 4 -> 59

### 4.2 Open Addressing

*   **Principle:** All elements are stored directly within the hash table itself. When a collision occurs, the algorithm probes (searches) for an empty slot within the table.

*   **Techniques:**
    *   **Linear Probing:**  If slot *h(k)* is occupied, try *h(k)+1, h(k)+2, h(k)+3, ...*  Wrap around if necessary.
    *   **Quadratic Probing:** If slot *h(k)* is occupied, try *h(k)+1<sup>2</sup>, h(k)+2<sup>2</sup>, h(k)+3<sup>2</sup>, ...* Wrap around if necessary.
    *   **Double Hashing:** Use a second hash function *h2(k)* to determine the probe sequence.  If slot *h(k)* is occupied, try *h(k) + h2(k), h(k) + 2*h2(k), h(k) + 3*h2(k), ...*  Wrap around if necessary.

*   **Operations:**
    *   **Insert:** Calculate the initial hash value.  Probe until an empty slot is found, and insert the key there.
    *   **Search:** Calculate the initial hash value. Probe the sequence of slots used for insertion until the key is found, or an empty slot is encountered (meaning the key is not present).
    *   **Delete:** Deletion is tricky with open addressing.  Simply marking a slot as empty can break the search process for other keys. Common approaches involve using a "deleted" marker or re-hashing the subsequent keys.

*   **Advantages:**
    *   No extra memory overhead for linked lists.
    *   Can be faster than chaining if the hash table is sparsely populated.

*   **Disadvantages:**
    *   Can suffer from *clustering*, where consecutive slots become occupied, leading to longer probe sequences and degraded performance.
    *   Table can fill up.
    *   Deletion is more complex.

*   **Example (Linear Probing):** Suppose we have a hash table of size 10, and the following keys to insert: 10, 22, 31, 4, 15, 28, 17, 88, 59. Let's use *h(k) = k mod 10* as our hash function.

    1.  Insert 10: *h(10) = 0*.  Table[0] = 10
    2.  Insert 22: *h(22) = 2*.  Table[2] = 22
    3.  Insert 31: *h(31) = 1*.  Table[1] = 31
    4.  Insert 4: *h(4) = 4*.  Table[4] = 4
    5.  Insert 15: *h(15) = 5*.  Table[5] = 15
    6.  Insert 28: *h(28) = 8*.  Table[8] = 28
    7.  Insert 17: *h(17) = 7*.  Table[7] = 17
    8.  Insert 88: *h(88) = 8*.  Collision! Probe to 9. Table[9] = 88
    9.  Insert 59: *h(59) = 9*.  Collision! Probe to 0. Collision! Probe to 1...Probe to 2... Probe to 3. Table[3] = 59

    The hash table would look like this:

    *   Index 0: 10
    *   Index 1: 31
    *   Index 2: 22
    *   Index 3: 59
    *   Index 4: 4
    *   Index 5: 15
    *   Index 6:
    *   Index 7: 17
    *   Index 8: 28
    *   Index 9: 88

## 5. Analysis of Hashing Performance

### 5.1 Load Factor (α)

*   **Definition:** α = *n / m*, where *n* is the number of keys stored in the table and *m* is the number of slots in the table.
*   **Significance:**  The load factor indicates how full the hash table is.  It directly affects the performance of search, insertion, and deletion operations.

### 5.2 Chaining

*   **Average Case:** Under the assumption of uniform hashing, the average time for successful or unsuccessful search is *O(1 + α)*.  If *n = O(m)*, then α is a constant, and the average time complexity is *O(1)*.
*   **Worst Case:** O(n), when all keys hash to the same slot, resulting in a single linked list of length *n*.

### 5.3 Open Addressing

*   **Average Case:**  The analysis is more complex than chaining, and depends on the probing method used.  Generally, the average time for successful and unsuccessful searches increases as the load factor approaches 1.  The analysis for linear probing is different (and worse) than for quadratic probing or double hashing.
*   **Worst Case:** O(n), when probing has to examine every slot in the table.

## 6. Implementation Examples (Python)

```python
# Chaining (Separate Chaining)
class ChainingHashTable:
    def __init__(self, size):
        self.size = size
        self.table = [[] for _ in range(size)]  # List of lists

    def hash_function(self, key):
        return key % self.size

    def insert(self, key, value):
        index = self.hash_function(key)
        self.table[index].append((key, value))

    def search(self, key):
        index = self.hash_function(key)
        for k, v in self.table[index]:
            if k == key:
                return v
        return None  # Key not found

    def delete(self, key):
        index = self.hash_function(key)
        for i, (k, v) in enumerate(self.table[index]):
            if k == key:
                del self.table[index][i]
                return
        print("Key not found")

# Open Addressing (Linear Probing)
class LinearProbingHashTable:
    def __init__(self, size):
        self.size = size
        self.table = [None] * size  # Initialize with None
        self.keys = [None] * size

    def hash_function(self, key):
        return key % self.size

    def insert(self, key, value):
        index = self.hash_function(key)
        original_index = index
        while self.table[index] is not None:
            if self.keys[index] == key:
                self.table[index] = value
                return
            index = (index + 1) % self.size  # Linear probe
            if index == original_index:
                print("Table is full!")
                return
        self.table[index] = value
        self.keys[index] = key


    def search(self, key):
        index = self.hash_function(key)
        original_index = index
        while self.table[index] is not None:
            if self.keys[index] == key:
                return self.table[index]
            index = (index + 1) % self.size
            if index == original_index:
                return None
        return None # Key not found

    def delete(self, key):  # Deletion with "deleted" marker
        index = self.hash_function(key)
        original_index = index
        while self.table[index] is not None:
            if self.keys[index] == key:
                self.table[index] = 'deleted'  # Mark as deleted
                self.keys[index] = None
                return
            index = (index + 1) % self.size
            if index == original_index:
                print("Key not found")
                return
        print("Key not found")

# Example Usage:
chaining_ht = ChainingHashTable(10)
chaining_ht.insert(5, "apple")
chaining_ht.insert(15, "banana") # Collision
print(chaining_ht.search(5))   # Output: apple
print(chaining_ht.search(15))  # Output: banana
chaining_ht.delete(5)
print(chaining_ht.search(5))   # Output: None

linear_ht = LinearProbingHashTable(10)
linear_ht.insert(5, "apple")
linear_ht.insert(15, "banana")  # Collision
print(linear_ht.search(5))    # Output: apple
print(linear_ht.search(15))   # Output: banana
linear_ht.delete(5)
print(linear_ht.search(5)) # Output: None
```

## 7. Practice Questions/Exercises

1.  **Define a hash function. Explain its role in hashing.**
    *   **Answer:** See Section 1.

2.  **What are the key properties of a good hash function? Why are they important?**
    *   **Answer:** See Section 2.

3.  **Explain the division method of hashing. What are some important considerations when choosing the table size *m*?**
    *   **Answer:** See Section 3.1. Prime numbers that aren't close to powers of 2 are often a good choice. Avoid powers of 2 if the input keys have a pattern in their low-order bits.

4.  **Explain the multiplication method of hashing.**
    *   **Answer:** See Section 3.2.

5.  **What is a collision in hashing? Explain the chaining method for resolving collisions.**
    *   **Answer:** See Section 4.1.

6.  **Explain the concept of open addressing. Describe linear probing, quadratic probing, and double hashing.**
    *   **Answer:** See Section 4.2.

7.  **What is the load factor in hashing? How does it affect the performance of chaining and open addressing?**
    *   **Answer:** See Section 5.1. Higher load factors generally degrade performance for both methods.

8.  **Implement a hash table with chaining in your favorite programming language.** (See Python example in Section 6).

9.  **Implement a hash table with linear probing in your favorite programming language.** (See Python example in Section 6).

10. **(Advanced) Consider a hash table of size 7, with hash function *h(k) = k mod 7*. Insert the following keys using linear probing: 15, 11, 22, 29, 36, 7. Show the final state of the hash table.**
    *   **Answer:**

        *   Insert 15:  *h(15) = 15 mod 7 = 1*.  Table[1] = 15.
        *   Insert 11:  *h(11) = 11 mod 7 = 4*.  Table[4] = 11.
        *   Insert 22:  *h(22) = 22 mod 7 = 1*. Collision! Probe to 2. Table[2] = 22.
        *   Insert 29:  *h(29) = 29 mod 7 = 1*. Collision! Probe to 2. Collision! Probe to 3. Table[3] = 29.
        *   Insert 36:  *h(36) = 36 mod 7 = 1*. Collision! Probe to 2. Collision! Probe to 3. Collision! Probe to 4. Collision! Probe to 5. Table[5] = 36.
        *   Insert 7:  *h(7) = 7 mod 7 = 0*.  Table[0] = 7.

        Final Table:

        *   Index 0: 7
        *   Index 1: 15
        *   Index 2: 22
        *   Index 3: 29
        *   Index 4: 11
        *   Index 5: 36
        *   Index 6:

## 8. Important Points to Remember

*   Choosing a good hash function is crucial for efficient hashing.  Uniformity is a key goal.
*   Collisions are inevitable; collision resolution strategies must be implemented.
*   The load factor affects the performance of both chaining and open addressing. Keep the load factor low for better performance.
*   Open addressing suffers from clustering, which can degrade performance. Double hashing and quadratic probing are often better than linear probing in this regard.
*   Deletion in open addressing is complex. Using a "deleted" marker is a common approach, but it can impact performance.

This detailed study guide provides a comprehensive overview of hash functions, covering their definition, properties, techniques, collision resolution methods, performance analysis, implementation examples, and practice questions.  By studying this material, you should be well-prepared to understand and apply hash functions in various data structures and algorithms.
