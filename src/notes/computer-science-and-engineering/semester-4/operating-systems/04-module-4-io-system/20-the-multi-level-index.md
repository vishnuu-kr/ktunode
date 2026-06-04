---
title: "The Multi-Level Index"
subject: "OPERATING SYSTEMS"
module: "Module 4: I/O system:"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162750fc9aa1fdbc8afdd"
status: "completed"
scrapedAt: "2026-05-20T16:14:42.618Z"
---
## OPERATING SYSTEMS - Module 4: I/O System - The Multi-Level Index

**Learning Outcomes:**

*   Understand the need for multi-level indexing in large file systems.
*   Describe the structure and functionality of a multi-level index.
*   Explain the advantages and disadvantages of using multi-level indexing.
*   Calculate the number of disk accesses required to access a data block using multi-level indexing.
*   Compare multi-level indexing to other indexing techniques.

**1. Introduction: The Need for Multi-Level Indexing**

*   **Problem:** In large file systems, single-level indexing becomes impractical due to the size of the index itself. Imagine an index pointing to every data block on a massive hard drive. This index would be huge and difficult to manage. Searching through such a large index would be slow, negating the benefits of using an index in the first place.

*   **Solution:** Multi-level indexing.  It's a hierarchical indexing scheme designed to reduce the size of the index that must be kept in memory and/or accessed during file access. It's like a table of contents for a book, helping you quickly find the right chapter.

**2. Key Concepts and Definitions**

*   **Index:** A data structure that maps key values (e.g., file identifiers, record numbers) to the location of data blocks on a disk. Speeds up data retrieval.

*   **Single-Level Index:** An index where all entries are stored in a single file or data structure. Inefficient for large file systems.

*   **Multi-Level Index:** An index organized as a tree or hierarchy of index levels. The root index points to entries in the next level of index, and so on, until the final level points to the data blocks.

*   **Index Node (or Index Block):** A block containing index entries (key-pointer pairs).  These nodes form the levels of the multi-level index.

*   **Data Block:** A block on the disk containing the actual file data.

*   **Index Pointer:** A pointer (disk address) in an index entry that points to another index node (in upper levels) or a data block (in the lowest level).

*   **Fanout:** The number of index entries that an index node can hold. This is determined by the size of the index node and the size of each index entry (key + pointer).  Higher fanout reduces the number of index levels needed.

*   **Levels of Index:**  The number of layers in the multi-level index structure.  A larger file system with more data typically requires more levels.

**3. Structure and Functionality of a Multi-Level Index**

*   **Hierarchical Structure:**  Imagine a tree where:
    *   The **root index** (the top of the tree) contains a limited number of index entries. Each entry points to a *second-level index node*.
    *   Each *second-level index node* contains entries that point to *third-level index nodes*, and so on.
    *   The *leaf level index nodes* (the bottom of the tree) contain index entries that point directly to the *data blocks* where the actual file data is stored.

*   **Search Process:**
    1.  The operating system starts at the **root index**.
    2.  It searches the root index for the appropriate index entry based on the desired file or record key.
    3.  The pointer from that entry directs the system to the appropriate **second-level index node**.
    4.  The search continues down the levels of the index, following the pointers, until the leaf level is reached.
    5.  The entry at the leaf level then provides the pointer to the actual **data block** containing the requested data.

*   **Example:** Consider a three-level index.
    *   **Level 1 (Root):** Points to various second-level index blocks based on broad key ranges.
    *   **Level 2:**  Each block in this level further refines the key range and points to third-level index blocks.
    *   **Level 3 (Leaf):** Each block contains pointers to specific data blocks.

**4. Advantages and Disadvantages of Multi-Level Indexing**

*   **Advantages:**
    *   **Reduced Index Size:** Significantly reduces the size of the index that needs to be kept in memory (especially the root index).  This makes the index manageable.
    *   **Faster Search:** Reduces the number of disk accesses required to locate a specific data block compared to searching an entire large single-level index.
    *   **Efficient for Large Files:**  Well-suited for managing very large files and file systems.
    *   **Scalability:**  Can easily be scaled to accommodate growing file systems.

*   **Disadvantages:**
    *   **Increased Complexity:**  More complex to implement and maintain than single-level indexing.
    *   **Multiple Disk Accesses:**  Requires multiple disk accesses to traverse the index hierarchy before reaching the data block. This can still be slower than a single access if the entire index was in memory, but it is much faster than searching a single-level index on disk.
    *   **Overhead:** There is some overhead associated with maintaining the multi-level index structure.

**5. Calculating Disk Accesses**

*   **Worst-Case Scenario:** The worst-case scenario requires accessing one index block at each level of the index plus one access to the data block.

*   **Formula:**  Total Disk Accesses = Number of Index Levels + 1 (for the data block)

*   **Example:** A three-level index requires 3 disk accesses to traverse the index and 1 disk access to retrieve the data block, for a total of 4 disk accesses.

*   **Important Note:** In practice, the root index and potentially some of the upper-level index nodes are often cached in memory.  This significantly reduces the actual number of disk accesses required.

**6. Comparison to Other Indexing Techniques**

*   **Single-Level Indexing:**
    *   **Advantage:** Simpler to implement.
    *   **Disadvantage:**  Impractical for large file systems due to the size of the index and the slow search time.

*   **Hashed Indexing:**
    *   **Advantage:**  Fast for exact-match searches.
    *   **Disadvantage:**  Not suitable for range queries (e.g., "find all files created between date X and date Y").  Also, hash collisions can degrade performance.

*   **B-Tree Indexing (A type of multi-level indexing):**
    *   **Advantage:**  Self-balancing, which ensures that all leaf nodes are at the same depth, leading to predictable search times. Commonly used in databases and file systems.  Supports range queries.
    *   **Disadvantage:** More complex to implement than simpler indexing schemes.

**7. Example Scenario**

Consider a file system with the following characteristics:

*   Block size: 4KB (4096 bytes)
*   Disk address size: 4 bytes
*   Key size: 8 bytes
*   Total number of blocks in the file system: 2<sup>20</sup> (approximately 1 million blocks)

Let's assume we use a three-level index.

1.  **Calculate the fanout:**
    *   Size of each index entry (key + pointer): 8 bytes + 4 bytes = 12 bytes
    *   Fanout (number of entries per index block): 4096 bytes / 12 bytes per entry ≈ 341 entries

2.  **Determine the number of blocks the root index can address:**  341 blocks in the second level.

3.  **Determine the number of blocks the second level can address:** 341 * 341 = 116,281 blocks in the third level.

4. **Determine the number of blocks the third level can address:** 341 * 341 * 341 = 39,651,811

Since we only have 2<sup>20</sup> = 1,048,576 blocks in the filesystem, a three-level index would be sufficient. We could even potentially optimize to a two-level index (341 * 341 = 116,281 >= 1,048,576 blocks)

**8. Practice Questions & Exercises**

**Question 1:**

A file system uses a two-level index. The block size is 2KB, disk addresses are 4 bytes, and keys are 6 bytes. The file system contains 2<sup>16</sup> data blocks. How many disk accesses are required in the worst case to retrieve a specific data block?

**Answer:**

*   Index entry size: 6 bytes (key) + 4 bytes (pointer) = 10 bytes
*   Fanout: 2048 bytes / 10 bytes/entry = 204 entries/block
*   Since there are 2<sup>16</sup> blocks in the file system and fanout is 204, a two-level index is sufficient. The root index points to an entry in the next level, which in turn points to the desired data block.
*   Worst-case disk accesses: 2 (index levels) + 1 (data block) = **3 disk accesses**

**Question 2:**

Explain the main advantage of using a multi-level index over a single-level index.

**Answer:**

The main advantage is that a multi-level index reduces the size of the index that must be kept in memory and/or accessed to retrieve data. This is critical for large file systems where a single-level index would be too large to manage efficiently. It significantly improves search performance.

**Question 3:**

What is "fanout" in the context of multi-level indexing, and why is it important?

**Answer:**

Fanout refers to the number of index entries that an index node (or block) can hold.  It's crucial because a higher fanout means that fewer levels are needed in the multi-level index to address a given number of data blocks. This, in turn, reduces the number of disk accesses required to locate a specific data block, improving performance.

**Question 4:**

Describe the steps involved in searching for a specific data block using a three-level index.

**Answer:**

1.  Start at the root index.
2.  Search the root index for the entry that corresponds to the desired key range.
3.  Follow the pointer in that entry to a second-level index block.
4.  Search the second-level index block for the more specific key range.
5.  Follow the pointer to a third-level (leaf) index block.
6.  Search the leaf index block for the entry that points to the desired data block.
7.  Follow the pointer to retrieve the actual data block.

**9. Important Points to Remember**

*   Multi-level indexing is essential for managing large file systems efficiently.
*   The number of levels in a multi-level index depends on the size of the file system and the fanout of each index node.
*   Caching of index blocks (especially the root index) can significantly reduce the number of disk accesses.
*   B-trees are a commonly used type of multi-level indexing due to their self-balancing properties.
*   Consider the trade-offs between complexity and performance when choosing an indexing technique.
