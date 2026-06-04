---
title: "Search and Optimization Trees – Skip List"
subject: "ADVANCED DATA STRUCTURES"
module: "Module 3: Specialized Data Structures "
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b371"
status: "completed"
scrapedAt: "2026-05-20T16:10:14.156Z"
---
# ADVANCED DATA STRUCTURES - Module 3: Specialized Data Structures - Skip List

## Topic: Search and Optimization Trees – Skip List

### Learning Outcomes:

*   Understand the concept and structure of a Skip List.
*   Describe the probabilistic nature of Skip Lists.
*   Implement Skip List operations: Search, Insertion, and Deletion.
*   Analyze the time complexity of Skip List operations.
*   Compare and contrast Skip Lists with other data structures like balanced trees.
*   Identify use cases where Skip Lists are a suitable choice.

### 1. Introduction to Skip Lists

*   **Definition:** A Skip List is a probabilistic data structure that uses multiple levels of linked lists to provide efficient search, insertion, and deletion operations, comparable to balanced trees.
*   **Core Idea:**  Build multiple layers of linked lists, where each higher layer acts as an "express lane" to quickly traverse the list.
*   **Probabilistic:** The height of each node (i.e., the number of levels it participates in) is determined randomly. This probabilistic approach provides a balance between performance and simplicity of implementation.

### 2. Structure of a Skip List

*   **Levels:**  A Skip List consists of multiple levels of linked lists.
*   **Base Level (Level 0):**  The bottom level is a sorted, singly linked list containing all the elements of the Skip List.
*   **Higher Levels:**  Each higher level is a subsequence of the level below. Elements are promoted to higher levels with a certain probability.
*   **Header Node:** A special node, often referred to as the header or start node, that points to the first node at each level. This header node's key is usually negative infinity or the minimum possible value.
*   **Nodes:** Each node contains:
    *   `key`:  The value of the element stored in the node.
    *   `forward[]`: An array of pointers. `forward[i]` points to the next node at level `i` in the Skip List.
*   **Max Level:** The maximum level allowed in the Skip List. This can be predetermined or dynamically adjusted.

**Example:**

```
Header --> 3 --> 6 --> 9 --> 12 --> 19 --> 21 --> 26 --> 31 --> 37 --> 44 --> NULL (Level 2)
Header --> 3 --> 6 -->     12 --> 19 -->     26 -->     31 --> 37 --> NULL (Level 1)
Header --> 3 --> 6 --> 7 --> 9 --> 12 --> 17 --> 19 --> 21 --> 26 --> 31 --> 37 --> 44 --> NULL (Level 0)
```

In this example, the Skip List has three levels (0, 1, and 2). Notice that not all nodes participate in all levels.

### 3. Probabilistic Nature

*   **Promotion Probability (p):**  A crucial parameter in Skip Lists.  It determines the probability with which a node is promoted to the next higher level.  A common value for `p` is 0.5 or 0.25.
*   **Process:** When inserting a new node, its level is determined randomly. We start with level 0 (the base level). Then, we "flip a coin" (i.e., generate a random number between 0 and 1). If the random number is less than `p`, we promote the node to level 1 and repeat the process.  If the random number is greater than or equal to `p`, the promotion stops.
*   **Expected Height:** The expected height of a node is approximately `log(1/p)n`, where `n` is the number of elements in the Skip List. For `p = 0.5`, the expected height is `log2(n)`.
*   **Benefits:** This probabilistic leveling ensures a good balance between search efficiency and memory usage.

### 4. Skip List Operations

#### 4.1 Search

*   **Algorithm:**
    1.  Start at the header node and the highest level.
    2.  Traverse forward along the current level until you find a node whose key is greater than or equal to the search key `x`.
    3.  If the key of the current node is equal to `x`, return the node (or `true` if you only need to know if the key exists).
    4.  If the key of the current node is greater than `x`, or you reach the end of the current level, move down to the next lower level.
    5.  Repeat steps 2-4 until you reach the base level (level 0).
    6.  If you reach level 0 and still haven't found the key, the key is not in the Skip List.
*   **Example:**  Searching for `19` in the Skip List example above.  We would start at the header node on Level 2, traverse to `19`, move down to level 1 (where 19 exists), then down to level 0 (where 19 exists). We have found the element.
*   **Time Complexity:** On average, O(log n), where n is the number of elements.  In the worst case (where all nodes are on level 0), the time complexity degrades to O(n).

#### 4.2 Insertion

*   **Algorithm:**
    1.  Determine the level of the new node randomly (using the probability `p`).
    2.  Search for the correct insertion position at each level, similar to the search operation. Keep track of the "update" nodes for each level. The "update" node for level `i` is the last node encountered at level `i` during the search that has a key less than the key to be inserted.  These are the nodes whose `forward[i]` pointers will need to be updated.
    3.  Create the new node with the randomly determined level.
    4.  Adjust the `forward[]` pointers of the "update" nodes to point to the new node at their respective levels.
    5.  If the level of the new node is greater than the current maximum level of the Skip List, update the maximum level and adjust the header node's `forward[]` pointers for the new levels.
*   **Example:**  Inserting `10` into the Skip List above.
    1.  Assume the random level generator determines the node's level to be 2.
    2.  We search for the correct position at levels 2, 1, and 0, noting the "update" nodes.
    3.  We create the new node with key 10 and level 2.
    4.  We update the `forward[]` pointers of the update nodes at levels 0, 1, and 2 to point to the new node.
*   **Time Complexity:** On average, O(log n). Worst-case: O(n).

#### 4.3 Deletion

*   **Algorithm:**
    1.  Search for the node to be deleted, similar to the search operation. Keep track of the "update" nodes for each level.
    2.  Adjust the `forward[]` pointers of the "update" nodes to skip over the node to be deleted at their respective levels.
    3.  If deleting the node at the highest level causes the level to become empty (i.e., only the header node remains), reduce the maximum level of the Skip List.
*   **Example:**  Deleting `19` from the Skip List above.
    1.  We search for `19` and find it.  We also identify the "update" nodes on each level.
    2.  We update the `forward[]` pointers of the update nodes to skip over the node containing 19.
*   **Time Complexity:** On average, O(log n). Worst-case: O(n).

### 5. Time Complexity Analysis

| Operation  | Average Case | Worst Case |
| :--------- | :----------- | :--------- |
| Search     | O(log n)     | O(n)       |
| Insertion  | O(log n)     | O(n)       |
| Deletion   | O(log n)     | O(n)       |

### 6. Comparison with Other Data Structures

*   **Balanced Trees (AVL, Red-Black):**
    *   *Similarities:*  Both provide O(log n) average-case performance for search, insertion, and deletion.
    *   *Differences:*
        *   Skip Lists are generally simpler to implement than balanced trees, which require complex rotation operations to maintain balance.
        *   Balanced trees have guaranteed O(log n) performance, while Skip Lists have O(log n) *average* performance, but O(n) worst-case performance.
        *   Skip Lists can be more space-efficient than balanced trees in some cases, as they don't need to store balancing information in each node.
*   **Linked Lists:**
    *   Skip Lists offer significantly better search performance (O(log n) vs. O(n) for linked lists).
*   **Arrays:**
    *   Arrays are faster for random access (O(1)), but Skip Lists are much faster for insertion and deletion in the middle of the structure (O(log n) vs. O(n) for arrays).

### 7. Use Cases for Skip Lists

*   **Ordered Sets and Maps:** Skip Lists can be used to implement sorted sets and maps, offering good performance and relatively simple implementation.
*   **Concurrent Data Structures:** Skip Lists are relatively easy to parallelize, making them suitable for concurrent data structures.  Because insertions and deletions only change local links, multiple operations can proceed in parallel without causing locks.
*   **Database Indexing:**  Skip Lists can be used as an alternative to B-trees for database indexing, especially in memory-resident databases.
*   **Replacing Sorted Arrays/Linked Lists in Algorithms:** When you need a sorted collection and frequent insertions and deletions are required.
*   **Gaming Applications:**  Skip Lists are sometimes used in game development for maintaining ranked lists of players or other game objects.

### 8. Important Points to Remember

*   The choice of the promotion probability `p` significantly impacts the performance of the Skip List.
*   Skip Lists are probabilistic data structures, meaning that their performance is based on probability and may vary depending on the random numbers generated.
*   While Skip Lists have a worst-case time complexity of O(n), this is rare in practice. Their average-case performance of O(log n) makes them a valuable alternative to balanced trees in many situations.
*   Consider the trade-offs between implementation complexity, performance guarantees, and space efficiency when deciding whether to use a Skip List or another data structure.

### 9. Practice Questions and Exercises

**Question 1:**

Explain the role of the promotion probability `p` in a Skip List. How does changing `p` affect the structure and performance?

**Answer:**

The promotion probability `p` determines the likelihood of a node being promoted to a higher level in the Skip List.  A higher `p` means nodes are more likely to be promoted, leading to more levels and potentially faster search times (closer to the ideal log n). However, a higher `p` also results in increased memory consumption.  A lower `p` reduces memory consumption but increases the average search time, as fewer nodes are present at higher levels.  Choosing the right `p` involves a trade-off between space and time complexity. Common values for `p` are 0.5 (nodes will be promoted with 50% likelihood) and 0.25.

**Question 2:**

Describe the steps involved in deleting a node from a Skip List.  Why is it necessary to keep track of the "update" nodes during the search process?

**Answer:**

The steps for deleting a node from a Skip List are:

1.  **Search:** Search for the node to be deleted. During the search, keep track of the "update" nodes at each level. The update nodes are the last nodes encountered at each level that have a key less than the key to be deleted.
2.  **Update Pointers:** At each level where the node to be deleted exists, update the `forward` pointer of the corresponding update node to point to the node after the node being deleted (effectively skipping over the node to be deleted).
3.  **Adjust Max Level:** If deleting the node from the highest level makes that level empty (only the header remains), decrease the maximum level of the Skip List.

Keeping track of the "update" nodes is crucial because they are the nodes whose `forward` pointers need to be modified to remove the target node from the linked lists at each level. Without knowing these update nodes, you cannot correctly relink the Skip List after the deletion.

**Question 3:**

Compare and contrast Skip Lists with Red-Black Trees. In what situations would you prefer one over the other?

**Answer:**

**Similarities:**

*   Both provide O(log n) average-case time complexity for search, insertion, and deletion operations.
*   Both are used to implement ordered sets and maps.

**Differences:**

| Feature         | Skip List                                   | Red-Black Tree                            |
| :-------------- | :------------------------------------------ | :---------------------------------------- |
| Implementation  | Simpler to implement                        | More complex due to rotations              |
| Performance     | O(log n) average, O(n) worst-case            | O(log n) guaranteed                      |
| Balancing       | Probabilistic (based on random promotion) | Deterministic (based on color properties and rotations) |
| Concurrency      | Easier to parallelize                      | More complex to parallelize                |

**When to prefer Skip Lists:**

*   When implementation simplicity is more important than guaranteed performance.
*   When concurrency is required or desired.
*   In situations where memory usage is a concern.
*   For smaller datasets, the overhead of balancing a Red-Black Tree might not be worth it, and a Skip List can be simpler and faster.

**When to prefer Red-Black Trees:**

*   When guaranteed O(log n) performance is crucial.
*   When memory usage is not a major concern.
*   When you need a well-established and widely available data structure (Red-Black Trees are often part of standard library implementations).

**Question 4:**

Describe how you would implement the `insert` function in a skip list with a probability p=0.5? Provide pseudo-code.

**Answer:**

```python
class Node:
    def __init__(self, key, level):
        self.key = key
        self.forward = [None] * (level + 1)  # Array of forward pointers for each level

class SkipList:
    def __init__(self, max_level, p=0.5):
        self.max_level = max_level
        self.p = p
        self.level = 0  # Current maximum level of the skip list
        self.header = Node(-float('inf'), max_level)  # Header node with negative infinity key

    def random_level(self):
        """Generates a random level for the new node based on probability p."""
        level = 0
        while random.random() < self.p and level < self.max_level:
            level += 1
        return level

    def insert(self, key):
        """Inserts a new node with the given key into the skip list."""
        update = [None] * (self.max_level + 1) # Array to store update nodes for each level
        current = self.header

        # 1. Search for the insertion position at each level
        for i in range(self.level, -1, -1):
            while current.forward[i] is not None and current.forward[i].key < key:
                current = current.forward[i]
            update[i] = current  # Store the last node smaller than key at level i

        # 2. Generate a random level for the new node
        new_level = self.random_level()

        # 3. If the new level is higher than the current level, adjust the header and update array
        if new_level > self.level:
            for i in range(self.level + 1, new_level + 1):
                update[i] = self.header
            self.level = new_level

        # 4. Create the new node
        new_node = Node(key, new_level)

        # 5. Insert the new node at each level it participates in
        for i in range(new_level + 1):
            new_node.forward[i] = update[i].forward[i]
            update[i].forward[i] = new_node
import random
```

**Question 5:**

How would you modify the Skip List data structure to support efficient range queries (i.e., finding all elements within a given range [start, end])?

**Answer:**

To support efficient range queries, you can utilize the existing structure of the Skip List with a few modifications.  The core idea is to use the Skip List's levels to quickly narrow down the search and then traverse the base level within the specified range.

1.  **Search for the Start Key:** Use the standard Skip List search algorithm to find the first element greater than or equal to the `start` key of the range. This will give you a starting point in the base list (level 0).
2.  **Traverse the Base Level (Level 0):** Once you've found the starting point, simply traverse the linked list at level 0 from that node.
3.  **Collect Elements Within the Range:** As you traverse the base level, collect all elements whose keys fall within the range `[start, end]`.
4.  **Stop at the End Key:**  Stop traversing when you encounter an element whose key is greater than the `end` key of the range or when you reach the end of the list.

**Enhancements for Performance:**

*   **Keep Track of "Next" Nodes During Search:**  During the initial search for the `start` key, also store the node *before* the potential start of the range for *each level*.  This will allow you to quickly resume the search at a higher level if necessary.  This will reduce the search time.
*   **Optimized Level Selection:** Instead of always starting at the highest level, consider an approach to choose a starting level based on the range width compared to the overall size of the Skip List.
