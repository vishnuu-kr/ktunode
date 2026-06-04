---
title: "Hashing - Hash Tables"
subject: "ADVANCED DATA STRUCTURES"
module: "Module 1: Foundational Data Structures"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b35c"
status: "completed"
scrapedAt: "2026-05-20T16:10:00.025Z"
---
## ADVANCED DATA STRUCTURES - Module 1: Foundational Data Structures - Hashing - Hash Tables

These notes cover Hash Tables as a fundamental data structure, aligning with the learning outcomes provided.

**Learning Outcomes:**

*   Understand the concept of hashing and its applications.
*   Describe the structure and functionality of hash tables.
*   Implement different hash functions and analyze their performance.
*   Understand and implement collision resolution techniques (e.g., chaining, open addressing).
*   Analyze the time and space complexity of hash table operations.
*   Compare and contrast hash tables with other data structures.

---

### 1. Introduction to Hashing and its Applications

*   **What is Hashing?** Hashing is a technique that transforms a key (which can be any data type) into a fixed-size index (called a hash code or hash value) within a predefined range.  This index then represents the location of the key's associated data in a data structure.

*   **Key Terminology:**

    *   **Key:** The input value that needs to be stored and retrieved.
    *   **Hash Function:** A function that maps a key to an index (hash value) in the hash table.  A good hash function aims to distribute keys uniformly across the table.
    *   **Hash Table:**  A data structure that stores key-value pairs. It uses a hash function to compute an index for each key, allowing fast access to the corresponding value.
    *   **Collision:**  When two different keys map to the same index in the hash table.
    *   **Load Factor:**  The ratio of the number of keys stored in the hash table to the total number of slots (buckets) in the table.  Load factor influences performance; a high load factor increases the likelihood of collisions. `Load Factor = (Number of Keys) / (Table Size)`

*   **Applications of Hashing:**

    *   **Symbol Tables (Compilers):**  Storing and retrieving variable names and their associated information.
    *   **Databases:**  Indexing database records for fast retrieval.
    *   **Caches:**  Implementing caches for frequently accessed data.
    *   **Routers:**  Looking up routing information based on destination IP addresses.
    *   **Cryptography:**  Hash functions are used extensively in cryptography for password storage, digital signatures, and data integrity checks.
    *   **Associative Arrays (Dictionaries):** Storing key-value pairs.

*   **Why Use Hashing?**

    *   **Fast Average-Case Lookup:**  Ideally, with a good hash function and appropriate collision resolution, retrieving a value from a hash table takes O(1) time on average.
    *   **Efficient Insertion and Deletion:** Similarly, insertion and deletion operations can also be performed in O(1) time on average.

### 2. Structure and Functionality of Hash Tables

*   **Basic Structure:** A hash table consists of an array (the "table" itself) where each index corresponds to a "bucket" or "slot."  Each bucket can hold a key-value pair or a linked list (or other data structure) to handle collisions.

*   **Functionality:**

    1.  **Insertion:**
        *   Hash the key using the hash function to obtain the index.
        *   Store the key-value pair at the calculated index.  If a collision occurs, use a collision resolution technique (explained later).

    2.  **Lookup/Search:**
        *   Hash the key to obtain the index.
        *   Check if a key-value pair exists at that index. If so, compare the key with the target key. If a collision resolution technique is used, traverse the linked list or perform probing until the key is found or it's determined that the key doesn't exist.

    3.  **Deletion:**
        *   Hash the key to obtain the index.
        *   Locate the key-value pair at that index.  If found, remove it.  If a collision resolution technique is used, follow the appropriate procedure for removing the key-value pair from the linked list or by re-hashing elements.

*   **Example:**

    Imagine a hash table of size 10 (indices 0-9).  We want to store student names and their IDs.

    | Index | Key (Student Name) | Value (Student ID) |
    |-------|----------------------|--------------------|
    | 0     |                      |                    |
    | 1     |                      |                    |
    | 2     | "Alice"            | 12345              |
    | 3     |                      |                    |
    | 4     | "Bob"              | 67890              |
    | 5     |                      |                    |
    | 6     |                      |                    |
    | 7     | "Charlie"          | 13579              |
    | 8     |                      |                    |
    | 9     |                      |                    |

    In this simplified example, the hash function might be something extremely basic (e.g., sum of ASCII values of the first three letters modulo 10).  More robust hash functions are discussed in the next section.  The point is that each name is mapped to an index, and the corresponding ID is stored there.

### 3. Hash Functions and Performance Analysis

*   **Characteristics of a Good Hash Function:**

    *   **Uniform Distribution:**  A good hash function distributes keys evenly across the hash table to minimize collisions.
    *   **Efficiency:**  It should be computationally inexpensive to calculate.
    *   **Deterministic:**  For the same input key, the hash function should always produce the same output index.

*   **Common Hash Functions:**

    *   **Division Method:** `h(k) = k mod m`, where `k` is the key and `m` is the size of the hash table.  Choose `m` to be a prime number to improve distribution.
        *   *Example:*  If `k = 12345` and `m = 101`, then `h(k) = 12345 mod 101 = 26`.

    *   **Multiplication Method:** `h(k) = floor(m * (k * A mod 1))`, where `k` is the key, `m` is the size of the hash table, and `A` is a constant between 0 and 1 (typically an irrational number like the golden ratio, approximately 0.618).
        *   *Example:* If `k = 12345`, `m = 101`, and `A = 0.618`, then `h(k) = floor(101 * (12345 * 0.618 mod 1)) = floor(101 * (7628.11 mod 1)) = floor(101 * 0.11) = 11`.

    *   **Universal Hashing:**  A technique where a hash function is randomly chosen from a family of hash functions.  This helps to avoid worst-case scenarios for specific key distributions.  More complex to implement but offers better theoretical guarantees.

    *   **String Hashing:**  For string keys, consider the ASCII values of the characters and combine them using operations like addition, multiplication, or bitwise XOR.  For example:

        ```python
        def string_hash(s, table_size):
            hash_val = 0
            for char in s:
                hash_val = (hash_val * 31 + ord(char)) % table_size # 31 is a commonly used prime number
            return hash_val
        ```

*   **Performance Analysis:**

    *   **Worst-Case Performance:** If all keys hash to the same index (a collision for every insertion), the hash table degenerates into a linked list. In this case, lookup, insertion, and deletion take O(n) time, where n is the number of keys.

    *   **Average-Case Performance:** With a good hash function and appropriate collision resolution, the average-case performance is O(1) for lookup, insertion, and deletion. This is the primary benefit of using hash tables.

    *   **Load Factor Impact:**  A high load factor increases the probability of collisions, leading to longer search times.  It's generally recommended to keep the load factor below a certain threshold (e.g., 0.7 or 0.75).  If the load factor exceeds this threshold, the hash table should be resized (rehashing all the keys into a larger table).

### 4. Collision Resolution Techniques

When two different keys map to the same index in the hash table, a collision occurs. Several techniques exist to resolve these collisions:

*   **Chaining (Separate Chaining):**

    *   Each bucket in the hash table stores a linked list (or other suitable data structure like a balanced tree) of key-value pairs that hash to the same index.
    *   **Insertion:**  Insert the new key-value pair at the head of the linked list at the calculated index.
    *   **Lookup:**  Hash the key to find the index. Traverse the linked list at that index to search for the key.
    *   **Deletion:** Hash the key to find the index. Traverse the linked list and remove the corresponding node.
    *   **Advantages:** Simple to implement, can handle a large number of collisions.
    *   **Disadvantages:** Requires extra memory for linked lists, lookup time can degrade if linked lists become very long.

*   **Open Addressing:**

    *   All key-value pairs are stored directly in the hash table array itself.  When a collision occurs, we probe (search) for an empty slot in the table.
    *   **Linear Probing:**
        *   If the index is occupied, probe the next available slot (index + 1, index + 2, etc., wrapping around to the beginning of the table if necessary).  `h(k, i) = (h'(k) + i) mod m`, where `h'(k)` is the initial hash function, `i` is the probe number (0, 1, 2, ...), and `m` is the table size.
        *   **Advantages:** Simple to implement.
        *   **Disadvantages:** Suffers from *primary clustering* – long runs of occupied slots tend to form, increasing the search time for other keys.

    *   **Quadratic Probing:**
        *   The probe sequence is calculated using a quadratic function.  `h(k, i) = (h'(k) + c1*i + c2*i^2) mod m`, where `c1` and `c2` are constants.
        *   **Advantages:** Reduces primary clustering compared to linear probing.
        *   **Disadvantages:** Can still suffer from *secondary clustering* – if two keys have the same initial hash value, they will probe the same sequence of slots. Requires careful selection of `c1`, `c2`, and `m` to ensure that the probe sequence covers the entire table.

    *   **Double Hashing:**
        *   Uses two hash functions: `h1(k)` to determine the initial index and `h2(k)` to determine the probing interval.  `h(k, i) = (h1(k) + i * h2(k)) mod m`.
        *   **Advantages:** Generally considered the best open addressing technique.  Reduces clustering significantly.
        *   **Disadvantages:** Requires more computation due to the use of two hash functions. Ensure `h2(k)` is relatively prime to `m` so that all slots are eventually probed.  A common approach is to make `m` a prime number and ensure `h2(k)` always returns a value less than `m`.

    *   **Deletion in Open Addressing:** Deletion is more complex in open addressing than in chaining.  Simply removing a key can create a "hole" that blocks future searches.  Solutions include:
        *   **Lazy Deletion:** Mark the slot as "deleted" instead of removing the key-value pair.  The slot can be reused for insertions, but searches must check for the "deleted" marker.
        *   **Rehashing:** After deleting a key, rehash all subsequent keys in the probe sequence until an empty slot is found.  This is more complex but maintains the integrity of the table.

### 5. Time and Space Complexity Analysis

| Operation   | Chaining (Average) | Chaining (Worst) | Open Addressing (Average) | Open Addressing (Worst) |
|-------------|----------------------|---------------------|-----------------------------|----------------------------|
| Insertion   | O(1)                 | O(n)                | O(1)                        | O(n)                       |
| Lookup      | O(1)                 | O(n)                | O(1)                        | O(n)                       |
| Deletion    | O(1)                 | O(n)                | O(1)                        | O(n)                       |
| Space Complexity | O(n)                 | O(n)                | O(m) where m is table size     | O(m) where m is table size |

*   **Important Notes:**

    *   The average-case performance of O(1) for hash table operations relies heavily on a good hash function and a reasonable load factor.
    *   The worst-case performance of O(n) occurs when all keys hash to the same index, effectively turning the hash table into a linked list (in the case of chaining) or requiring linear probing of the entire table (in the case of open addressing).
    *   The space complexity of chaining is O(n), where n is the number of key-value pairs, because it uses additional memory for the linked lists.
    *   The space complexity of open addressing is O(m), where m is the table size, because it stores all key-value pairs directly in the table.

### 6. Comparison with Other Data Structures

| Feature             | Hash Table                                   | Sorted Array                                  | Binary Search Tree (BST)                     |
|----------------------|-----------------------------------------------|------------------------------------------------|-----------------------------------------------|
| Lookup              | O(1) Average, O(n) Worst                     | O(log n)                                     | O(log n) Average, O(n) Worst                 |
| Insertion           | O(1) Average, O(n) Worst                     | O(n)                                         | O(log n) Average, O(n) Worst                 |
| Deletion            | O(1) Average, O(n) Worst                     | O(n)                                         | O(log n) Average, O(n) Worst                 |
| Space Complexity    | O(n) or O(m) (depending on implementation)      | O(n)                                         | O(n)                                         |
| Ordering            | Unordered (unless combined with ordering)      | Ordered                                        | Ordered (based on key)                       |
| Use Cases           | Fast lookup, insertion, and deletion when order is not important. | Fast lookup when data is already sorted.    | Maintaining sorted data, efficient insertion/deletion compared to sorted array. |

*   **When to Choose a Hash Table:**

    *   When you need fast average-case lookup, insertion, and deletion.
    *   When the order of elements is not important.
    *   When you can tolerate occasional worst-case performance (O(n)).

*   **When to Choose a Sorted Array or BST:**

    *   When you need to maintain data in sorted order.
    *   When worst-case performance is critical (e.g., real-time systems).
    *   When memory usage is a significant constraint (sorted array can be more memory-efficient than a hash table with chaining if the load factor is low).

---

### Practice Questions/Exercises:

1.  **Hash Function Implementation:** Write a hash function for strings that uses the polynomial rolling hash algorithm.  Test it with a few different strings to see how it distributes the keys.

    ```python
    def polynomial_hash(s, table_size, p=31, m=10**9 + 9): # p is a prime number, m is the modulus
        hash_val = 0
        power_of_p = 1
        for char in s:
            hash_val = (hash_val + ord(char) * power_of_p) % m
            power_of_p = (power_of_p * p) % m # Ensure power_of_p doesn't grow too large
        return hash_val % table_size

    # Example Usage
    table_size = 101
    print(polynomial_hash("hello", table_size))
    print(polynomial_hash("world", table_size))
    print(polynomial_hash("olleh", table_size)) # Check for collisions
    ```

2.  **Chaining Implementation:** Implement a hash table using separate chaining in your favorite programming language. Include methods for insertion, lookup, and deletion.

    ```python
    class HashTableChaining:
        def __init__(self, capacity):
            self.capacity = capacity
            self.table = [[] for _ in range(capacity)] # List of lists (buckets)
            self.size = 0

        def __len__(self):
            return self.size

        def __contains__(self, key):
            index = self._hash(key)
            for k, v in self.table[index]:
                if k == key:
                    return True
            return False

        def insert(self, key, value):
            index = self._hash(key)
            bucket = self.table[index]

            # Check if key already exists (update value if it does)
            for i, (k, v) in enumerate(bucket):
                if k == key:
                    bucket[i] = (key, value)  # Update value
                    return

            bucket.append((key, value)) # Add new key-value pair
            self.size += 1

        def lookup(self, key):
            index = self._hash(key)
            for k, v in self.table[index]:
                if k == key:
                    return v
            return None

        def delete(self, key):
            index = self._hash(key)
            bucket = self.table[index]

            for i, (k, v) in enumerate(bucket):
                if k == key:
                    del bucket[i]
                    self.size -= 1
                    return
            raise KeyError("Key not found") # Or return False if you prefer

        def _hash(self, key):
            # Simple modulo hash (can be improved)
            return hash(key) % self.capacity
    ```

3.  **Open Addressing with Linear Probing:** Implement a hash table using open addressing with linear probing.  Include methods for insertion, lookup, and deletion (with lazy deletion).  Discuss the limitations of linear probing.

    ```python
    class HashTableLinearProbing:
        def __init__(self, capacity):
            self.capacity = capacity
            self.table = [None] * capacity  # None indicates empty slot
            self.keys = [None] * capacity
            self.size = 0

        def __len__(self):
            return self.size

        def _hash(self, key):
            return hash(key) % self.capacity

        def insert(self, key, value):
            if self.size == self.capacity:
                raise Exception("Hash table is full")

            index = self._hash(key)
            original_index = index

            while self.table[index] is not None and self.keys[index] != key: # Collision handling, and check for existing key
                index = (index + 1) % self.capacity
                if index == original_index:
                    raise Exception("Hash Table is full, could not insert value due to wrapping")

            if self.table[index] is None: #New Key
                self.size += 1
                self.keys[index] = key
            self.table[index] = value # either new or overwritting a key

        def lookup(self, key):
            index = self._hash(key)
            original_index = index
            while self.keys[index] is not None:
                if self.keys[index] == key:
                    return self.table[index]
                index = (index + 1) % self.capacity
                if index == original_index:
                  return None
            return None

        def delete(self, key):
            index = self._hash(key)
            original_index = index

            while self.keys[index] is not None:
                if self.keys[index] == key:
                    #Lazy deletion
                    self.keys[index] = None #Mark as deleted.  For actual deletion will need to move proceeding keys.
                    self.table[index] = None
                    self.size -= 1
                    return
                index = (index + 1) % self.capacity
                if index == original_index:
                  raise KeyError("Key not found")
            raise KeyError("Key not found")

    ```

4.  **Load Factor and Resizing:** Modify your hash table implementation (either chaining or open addressing) to automatically resize the table when the load factor exceeds a certain threshold. Analyze the impact of resizing on performance.
5.  **Collision Resolution Comparison:**  Implement both chaining and open addressing with double hashing. Compare their performance (average lookup time, insertion time) for a large dataset.

**Answers to Practice Questions:**

Answers and detailed code implementations for the above questions are provided within the question itself.  When testing and comparing implementations, use a variety of datasets with different key distributions to observe how each approach performs under different conditions.

---

**Important Points to Remember:**

*   Choose a hash function that distributes keys uniformly to minimize collisions.
*   Maintain a reasonable load factor to ensure good performance.  Consider resizing the hash table if the load factor becomes too high.
*   Understand the trade-offs between different collision resolution techniques (chaining vs. open addressing).
*   Be aware of the worst-case performance of hash tables (O(n)) and consider alternative data structures if worst-case performance is critical.
*   Hashing is a powerful tool, but it's not a one-size-fits-all solution.  Carefully consider the requirements of your application before choosing a hash table.
