---
title: "Cuckoo Hashing"
subject: "ADVANCED DATA STRUCTURES"
module: "Module 1: Foundational Data Structures"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b35e"
status: "completed"
scrapedAt: "2026-05-20T16:10:01.486Z"
---
## ADVANCED DATA STRUCTURES - Module 1: Foundational Data Structures - Cuckoo Hashing

**Description:** This module covers Cuckoo Hashing, a dynamic hash table algorithm, as part of the foundational data structures for advanced study.

**Learning Outcomes:**

*   Understand the principles of Cuckoo Hashing and its advantages.
*   Be able to explain the concept of multiple hash functions and tables in Cuckoo Hashing.
*   Trace the steps involved in inserting, searching, and deleting elements in a Cuckoo Hash Table.
*   Understand and manage the possibility of cycles during insertion and implement collision resolution strategies.
*   Analyze the time complexity of Cuckoo Hashing operations (insertion, search, deletion) in average and worst-case scenarios.
*   Compare Cuckoo Hashing with other hashing techniques (e.g., Separate Chaining, Linear Probing).
*   Implement Cuckoo Hashing in a programming language.

---

### 1. Introduction to Cuckoo Hashing

*   **Definition:** Cuckoo Hashing is a collision resolution technique for hash tables that uses multiple hash functions and tables. The core idea is that when a collision occurs, the existing element is "kicked out" (displaced) to another location determined by a different hash function.  This "kicking" process continues until an empty slot is found or a predefined limit is reached to avoid infinite loops.
*   **Advantages:**
    *   **Fast Lookup:** Guarantees *O(1)* lookup time in the worst case (once the element is in the table).
    *   **Good Space Utilization:** Generally better space utilization than separate chaining.
    *   **Simple Deletion:** *O(1)* deletion is also possible, assuming you know the position.
*   **Disadvantages:**
    *   **Insertion Can Be Slow:** Worst-case insertion can be time-consuming due to cycling and rehashing.
    *   **Rehashing:**  Requires rehashing (rebuilding the entire table) when insertion fails after a predefined number of kicks.
    *   **Complexity:**  More complex to implement than basic hashing techniques.

### 2. Core Concepts and Definitions

*   **Hash Functions:** Cuckoo Hashing uses *multiple* hash functions, typically two (*h1(x)* and *h2(x)*).  The number of hash functions determines the number of potential locations for an element.  These functions should be independent and uniform to minimize collisions.
*   **Tables:**  The hash table can be implemented using a single table conceptually, or with two or more distinct tables (usually two in practice). When using a single table, each entry effectively holds slots for the result of each hash function.
*   **Element Placement:**  An element *x* can be placed in either *table1[h1(x)]* or *table2[h2(x)]* (assuming two hash functions and tables).
*   **Collision Resolution (Kicking):**  When inserting *x* into *table1[h1(x)]*, if that location is occupied, the existing element *y* is "kicked out" to *table2[h2(y)]*.  This process continues, with elements being displaced until an empty slot is found or a maximum number of kicks is reached.
*   **Rehashing:** If the insertion process exceeds a predefined number of kicks (e.g., a limit based on the table size), it is assumed a cycle is occurring or the table is becoming too full. In this case, the entire hash table is rehashed with new hash functions or a larger table size.
*   **Load Factor:** The ratio of the number of elements in the table to the table size. A high load factor increases the likelihood of collisions and rehashing.

### 3. Operations: Insertion, Search, Deletion

*   **Insertion:**
    1.  Compute *h1(x)* and *h2(x)*.
    2.  Try to place *x* in *table1[h1(x)]*.
        *   If *table1[h1(x)]* is empty, insert *x* and return.
        *   If *table1[h1(x)]* is occupied by *y*, "kick out" *y* and place *x* in *table1[h1(x)]*.
    3.  Now try to place *y* (the kicked-out element) in *table2[h2(y)]*.
        *   If *table2[h2(y)]* is empty, insert *y* and return.
        *   If *table2[h2(y)]* is occupied by *z*, "kick out" *z* and place *y* in *table2[h2(y)]*.
    4.  Repeat the kicking process for *z*, and so on.
    5.  If the number of kicks exceeds a predefined limit, rehash the table.  This usually involves generating new hash functions or resizing the table.
*   **Search:**
    1.  Compute *h1(x)* and *h2(x)*.
    2.  Check if *table1[h1(x)]* contains *x*. If so, return true.
    3.  Check if *table2[h2(x)]* contains *x*. If so, return true.
    4.  If neither location contains *x*, return false.
*   **Deletion:**
    1.  Compute *h1(x)* and *h2(x)*.
    2.  If *table1[h1(x)]* contains *x*, remove it.
    3.  If *table2[h2(x)]* contains *x*, remove it.
    4.  If *x* is not found in either location, it was not in the table.

**Example:**

Let's say we have two hash functions:

*   `h1(x) = x % 5`
*   `h2(x) = (x / 5) % 5`

And two tables, `table1` and `table2`, each of size 5.

Let's insert the following values: 10, 20, 1, 2, 15

1. **Insert 10:**
   * `h1(10) = 10 % 5 = 0`
   * `h2(10) = (10 / 5) % 5 = 2`
   * `table1[0]` is empty. Insert 10 into `table1[0]`.

2. **Insert 20:**
   * `h1(20) = 20 % 5 = 0`
   * `h2(20) = (20 / 5) % 5 = 4`
   * `table1[0]` is occupied by 10.  Kick out 10 and insert 20 into `table1[0]`.
   *  Now, insert 10 into `table2[h2(10)] = table2[2]`.  `table2[2]` is empty. Insert 10 into `table2[2]`.

3. **Insert 1:**
    * `h1(1) = 1 % 5 = 1`
    * `h2(1) = (1 / 5) % 5 = 0`
    * `table1[1]` is empty. Insert 1 into `table1[1]`.

4. **Insert 2:**
    * `h1(2) = 2 % 5 = 2`
    * `h2(2) = (2 / 5) % 5 = 0`
    * `table1[2]` is empty. Insert 2 into `table1[2]`.

5. **Insert 15:**
   * `h1(15) = 15 % 5 = 0`
   * `h2(15) = (15 / 5) % 5 = 3`
   * `table1[0]` is occupied by 20. Kick out 20 and insert 15 into `table1[0]`.
   * Now insert 20 into `table2[h2(20)] = table2[4]`. `table2[4]` is empty. Insert 20 into `table2[4]`.

**Result:**

*   `table1: [15, 1, 2, null, null]`
*   `table2: [null, null, 10, null, 20]`

### 4. Cycle Detection and Collision Resolution Strategies

*   **Cycle Detection:** The primary method for detecting cycles is to limit the number of "kicks" during insertion.  If the limit is reached, it is assumed a cycle exists (or that the table is too full).
*   **Strategies:**
    *   **Limit on Kicks:**  Set a maximum number of displacement operations allowed during insertion.  Commonly, this limit is a multiple of the table size.  If the limit is reached, trigger rehashing.
    *   **Rehashing:** Rebuild the entire hash table using new, randomly generated hash functions or increasing the table size. This is the most common and reliable approach to break cycles and improve performance.  The choice of new hash functions is critical.
    *   **Early Termination:** While less common, heuristics can be used to detect potential cycling patterns (e.g., repeatedly visiting the same locations).
    *   **Third Hash Function/Table (Less Common):** Using a third hash function and table can further reduce the chance of collisions, but increases memory overhead and complexity.

### 5. Time Complexity Analysis

*   **Search:** *O(1)* in the worst case.  We check at most two locations (or *k* locations if using *k* hash functions).
*   **Deletion:** *O(1)* in the worst case (if we know the position using either of the hash functions).  If the position isn't known, then the search time needs to be factored in.
*   **Insertion:**
    *   **Average Case:**  *O(1)*. Most insertions will find an empty slot relatively quickly.
    *   **Worst Case:** *O(n)*, where n is the number of elements in the table. This occurs when a long chain of displacements is required, potentially leading to rehashing. However, proper selection of hash functions and load factor keeps this probability low.  The amortized time complexity considering rehashing is still close to O(1).
*   **Rehashing:** *O(n)*, where *n* is the number of elements. This is because all elements must be re-inserted into the new table. However, rehashing is relatively infrequent, so its amortized cost is low.

### 6. Comparison with Other Hashing Techniques

| Feature          | Cuckoo Hashing                               | Separate Chaining                               | Linear Probing                               |
|-----------------|----------------------------------------------|-------------------------------------------------|---------------------------------------------|
| Collision Res.   | Multiple Hash Functions, Displacement         | Linked Lists                                    | Probing consecutive slots                   |
| Lookup Time      | *O(1)* Worst Case                            | *O(1)* Average, *O(n)* Worst Case                  | *O(1)* Average, *O(n)* Worst Case                |
| Insertion Time   | *O(1)* Average, *O(n)* Worst Case (Rehashing) | *O(1)* Average, *O(n)* Worst Case if rehashing needed | *O(1)* Average, *O(n)* Worst Case                |
| Deletion Time    | *O(1)*                                       | *O(1)* Average, *O(n)* Worst Case                  | *O(1)* Average, *O(n)* Worst Case (rehashing may require tombstone management)|
| Space Utilization| Good                                         | Can be lower due to linked list overhead        | Can suffer from clustering                   |
| Complexity       | High                                         | Simple                                            | Simple                                         |

### 7. Practice Questions & Exercises

1.  **Explain the purpose of using multiple hash functions in Cuckoo Hashing.**
    *   **Answer:** Multiple hash functions provide alternative locations for elements in the hash table, allowing for collision resolution by displacing existing elements ("kicking") to other locations. This reduces the likelihood of clustering and improves lookup performance compared to techniques that rely on a single hash function.

2.  **Describe the steps involved in inserting an element into a Cuckoo Hash Table.**
    *   **Answer:** The insertion process involves:
        1.  Computing hash values for the element using multiple hash functions.
        2.  Trying to insert the element into its first hash location.
        3.  If the location is occupied, kicking out the existing element and inserting the new one.
        4.  Placing the kicked-out element into its *other* hash location.
        5.  Repeating the kicking process until an empty slot is found or a predefined kick limit is reached.
        6.  If the kick limit is exceeded, rehash the table.

3.  **What is rehashing, and why is it necessary in Cuckoo Hashing?**
    *   **Answer:** Rehashing is the process of rebuilding the entire hash table with new hash functions (or a larger table size). It's necessary when the insertion process fails after a predefined number of kicks, which indicates a potential cycle or that the table is becoming too full. Rehashing helps to break cycles, redistribute elements more evenly, and maintain the performance of the hash table.

4.  **What is the time complexity of search operation in Cuckoo Hashing? Justify your answer.**
    *   **Answer:** The time complexity of a search operation in Cuckoo Hashing is *O(1)* in the worst case. This is because we only need to check a limited number of locations (typically two, corresponding to the two hash functions) to determine if an element is present in the table.

5.  **Compare and contrast Cuckoo Hashing with linear probing. Discuss their advantages and disadvantages.**
    *   **Answer:** See comparison table above.

6.  **Implement a simple Cuckoo Hashing scheme in Python (or your preferred language) with two hash functions and a fixed table size. Include insertion, search, and deletion operations.  (This is a more complex exercise.)**

```python
import random

class CuckooHashTable:
    def __init__(self, size):
        self.size = size
        self.table1 = [None] * size
        self.table2 = [None] * size
        self.kick_limit = size  # Maximum number of kicks before rehashing

    def hash1(self, key):
        return key % self.size

    def hash2(self, key):
        return (key // self.size) % self.size

    def insert(self, key):
        for _ in range(self.kick_limit):
            # Try inserting into table1
            idx1 = self.hash1(key)
            if self.table1[idx1] is None:
                self.table1[idx1] = key
                return True
            else:
                # Kick out the element in table1
                old_key = self.table1[idx1]
                self.table1[idx1] = key
                key = old_key  # Update key for next insertion attempt

            # Try inserting into table2
            idx2 = self.hash2(key)
            if self.table2[idx2] is None:
                self.table2[idx2] = key
                return True
            else:
                # Kick out the element in table2
                old_key = self.table2[idx2]
                self.table2[idx2] = key
                key = old_key  # Update key for next insertion attempt

        # Rehashing is needed if we reach the kick limit
        self.rehash()
        return self.insert(key) # Retry insertion

    def search(self, key):
        idx1 = self.hash1(key)
        idx2 = self.hash2(key)
        return self.table1[idx1] == key or self.table2[idx2] == key

    def delete(self, key):
        idx1 = self.hash1(key)
        idx2 = self.hash2(key)
        if self.table1[idx1] == key:
            self.table1[idx1] = None
            return True
        elif self.table2[idx2] == key:
            self.table2[idx2] = None
            return True
        return False

    def rehash(self):
        print("Rehashing...")
        all_elements = [x for x in self.table1 + self.table2 if x is not None]
        self.table1 = [None] * self.size
        self.table2 = [None] * self.size
        random.shuffle(all_elements)  # Shuffle to avoid re-creating the same cycle
        for element in all_elements:
            self.insert(element)

# Example usage:
hash_table = CuckooHashTable(5)
hash_table.insert(10)
hash_table.insert(20)
hash_table.insert(1)
hash_table.insert(2)
hash_table.insert(15)
hash_table.insert(6)  #This will likely trigger a rehash.

print("Table 1:", hash_table.table1)
print("Table 2:", hash_table.table2)

print("Search 20:", hash_table.search(20)) # True
print("Search 25:", hash_table.search(25)) # False

hash_table.delete(20)
print("Search 20 after deletion:", hash_table.search(20)) # False
```

### 8. Important Points to Remember

*   Cuckoo Hashing provides *O(1)* lookup and deletion in the worst case *after* the elements are in the table.
*   Insertion can be slow due to possible cycles and rehashing, but it's usually *O(1)* on average.
*   Choosing good hash functions is crucial for performance.
*   The load factor affects the likelihood of collisions and rehashing. A load factor of around 50% is often recommended.
*   Rehashing is a key mechanism for maintaining performance.  Choose new hash functions wisely during rehashing (e.g. using a different seed for the random number generator) to prevent infinite loops of rehashing.
*   Cuckoo Hashing is a space-efficient alternative to separate chaining.
*   Implement cycle detection (kick limit) to prevent infinite loops.  Rehashing is the best approach to break cycles.
