---
title: "FP Growth Algorithm"
subject: "DATA MINING"
module: "Module 4: Association Rule Mining "
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b8ba"
status: "completed"
scrapedAt: "2026-05-20T16:45:18.088Z"
---
# DATA MINING: Module 4 - Association Rule Mining: FP-Growth Algorithm

## 1. Learning Outcomes

By the end of this module, you should be able to:

*   Understand the limitations of the Apriori algorithm.
*   Describe the FP-Growth algorithm and its advantages.
*   Construct an FP-Tree from a transactional database.
*   Mine frequent itemsets using the FP-Growth algorithm.
*   Compare and contrast FP-Growth with the Apriori algorithm.

## 2. Introduction to FP-Growth Algorithm

### 2.1. Limitations of the Apriori Algorithm

The Apriori algorithm, while a foundational algorithm for association rule mining, suffers from some key limitations:

*   **Multiple Database Scans:**  Apriori requires repeated scans of the transaction database, which can be computationally expensive, especially for large datasets.  For each length `k`, the database is scanned to count the support of candidate itemsets of size `k`.
*   **Candidate Generation:**  Generating candidate itemsets can be a resource-intensive process.  The more itemsets, the more candidates generated.
*   **Large Number of Candidate Itemsets:**  For datasets with many frequent items or low minimum support thresholds, the number of candidate itemsets can become very large, significantly increasing the processing time.

### 2.2. The FP-Growth Algorithm: A More Efficient Approach

The FP-Growth (Frequent Pattern Growth) algorithm addresses the limitations of Apriori by:

*   **Avoiding Candidate Generation:**  FP-Growth mines frequent itemsets *without* generating candidate itemsets explicitly.
*   **Reducing Database Scans:**  It only requires *two* scans of the transaction database:
    1.  To determine the frequency of each item.
    2.  To construct the FP-Tree.
*   **Using a Compact Data Structure (FP-Tree):** FP-Growth represents the transaction database in a condensed form using a data structure called the FP-Tree (Frequent Pattern Tree).  This tree structure stores all relevant information about frequent itemsets in a compressed format.

## 3. Key Concepts and Definitions

*   **FP-Tree (Frequent Pattern Tree):** A tree structure that stores the frequent itemsets in a compressed form. Each node in the FP-Tree represents an item.
*   **Item Header Table:**  A table that stores the frequency of each item and a pointer to the first occurrence of the item in the FP-Tree. It also enables linking all occurrences of a particular item in the tree.
*   **Frequent Itemset:** A set of items that appears in the transaction database with a support value greater than or equal to the minimum support threshold.
*   **Support Count:** The number of transactions in which an itemset appears.
*   **Minimum Support Threshold (min_sup):** The minimum support count required for an itemset to be considered frequent.
*   **Conditional Pattern Base:**  The set of prefix paths in the FP-Tree that end in a specific item.
*   **Conditional FP-Tree:**  An FP-Tree built from the conditional pattern base of a specific item.
*   **Node Link:** In the Item Header Table, each item has a linked list associated to it, pointing to all the nodes in the FP-Tree that have that item.

## 4. Building an FP-Tree

Here's a step-by-step guide to constructing an FP-Tree:

1.  **Scan the Transaction Database (D) and Find Frequent Items:**
    *   Calculate the support count for each item.
    *   Identify the items that meet the minimum support threshold (min_sup).
2.  **Create the Item Header Table:**
    *   Sort the frequent items in descending order of their support count.
    *   The Item Header Table consists of two columns:
        *   Item Name
        *   Support Count
        *   Node Link (Initially Null)
3.  **Construct the FP-Tree:**
    *   Create the root of the FP-Tree and label it "null".
    *   For each transaction in the database:
        *   Sort the items in the transaction according to the order defined in the Item Header Table (i.e., by decreasing frequency).
        *   Create a branch for the sorted items.
            *   Starting from the root, traverse the tree.
            *   If a node already exists for an item, increment its count.
            *   If a node does not exist, create a new node and link it to its parent. Also, create the Node Link if one does not exist.
4.  **Update Item Header Table with Node Links:** During tree construction, update the Node Link entry in the Item Header Table with the first node instance created for an item. Subsequent node instances are linked together for the same item.

**Example:**

Consider the following transaction database and `min_sup = 2`.

| Transaction ID | Items |
|---|---|
| T1 | I1, I2, I5 |
| T2 | I2, I4 |
| T3 | I2, I3 |
| T4 | I1, I2, I4 |
| T5 | I1, I3 |
| T6 | I2, I3 |
| T7 | I1, I3 |
| T8 | I1, I2, I3, I5 |
| T9 | I1, I2, I3 |

**Step 1: Find Frequent Items**

| Item | Support Count | Frequent? (min_sup = 2) |
|---|---|---|
| I1 | 6 | Yes |
| I2 | 7 | Yes |
| I3 | 6 | Yes |
| I4 | 2 | Yes |
| I5 | 2 | Yes |

**Step 2: Create the Item Header Table (sorted by frequency)**

| Item | Support Count | Node Link |
|---|---|---|
| I2 | 7 | Null |
| I1 | 6 | Null |
| I3 | 6 | Null |
| I4 | 2 | Null |
| I5 | 2 | Null |

**Step 3: Construct the FP-Tree**

Let's walk through building the FP-Tree:

*   **T1: I1, I2, I5  (reordered: I2, I1, I5)**  Create a branch: null -> I2:1 -> I1:1 -> I5:1. Update the Header Table with Node Links to the first instances of I2, I1, and I5.

*   **T2: I2, I4  (reordered: I2, I4)** Create a branch: null -> I2:1 -> I4:1. Increment I2's count because the path exists. Update Header table with Node Link for I4.

*   **T3: I2, I3  (reordered: I2, I3)** Create a branch: null -> I2:1 -> I3:1. Increment I2's count. Update Header table with Node Link for I3.

*   **T4: I1, I2, I4  (reordered: I2, I1, I4)** Create a branch: null -> I2:1 -> I1:1 -> I4:1. Increment I2 and I1's counts because those paths exist. Update Header table with Node Link for I4.

*   **T5: I1, I3 (reordered: I1, I3)** Create a branch: null -> I1:1 -> I3:1.

*   **T6: I2, I3 (reordered: I2, I3)** Create a branch: null -> I2:1 -> I3:1. Increment I2 and I3's counts because those paths exist.

*   **T7: I1, I3 (reordered: I1, I3)** Create a branch: null -> I1:1 -> I3:1. Increment I1 and I3's counts because those paths exist.

*   **T8: I1, I2, I3, I5 (reordered: I2, I1, I3, I5)** Create a branch: null -> I2:1 -> I1:1 -> I3:1 -> I5:1. Increment I2, I1 and I3's counts because those paths exist.

*   **T9: I1, I2, I3 (reordered: I2, I1, I3)** Create a branch: null -> I2:1 -> I1:1 -> I3:1. Increment I2, I1 and I3's counts because those paths exist.

(Drawing the final FP-Tree will require a graphical tool.  The tree has a root node "null".  The most frequent item, I2, has branches from the root.  The other items branch off from I2 and other nodes based on the transaction data and frequency.)

## 5. Mining Frequent Itemsets Using FP-Growth

The process of mining frequent itemsets using FP-Growth involves building conditional pattern bases and conditional FP-Trees for each item in the Item Header Table (starting from the least frequent item).

1.  **Start with the least frequent item (e.g., I5) in the Header Table.**
2.  **Find the Conditional Pattern Base for I5:**  Trace back from each node containing I5 to the root of the FP-Tree. The paths encountered (excluding I5) form the conditional pattern base.
3.  **Construct the Conditional FP-Tree for I5:** Use the conditional pattern base as a new transaction database and repeat the FP-Tree construction steps (steps 1-3 in the FP-Tree construction section), using only the items found in the conditional pattern base. You may need to recalculate which items are frequent with respect to the *conditional* support count.
4.  **Mining the Conditional FP-Tree for I5:** Recursively mine the Conditional FP-Tree using the same process as described previously. Append I5 to each frequent itemset mined from this conditional tree.
5.  **Repeat for each item in the Header Table:** Work your way up the Header Table, repeating steps 2-4 for each item.

**Example (Continuing from the previous example):**

**Mining for I5:**

*   **Conditional Pattern Base for I5:**  { {I2:1, I1:1}, {I2:1, I1:1, I3:1} }
*   **Conditional FP-Tree for I5:**
    *   Frequent items in the conditional pattern base: {I2:2, I1:2, I3:1}
    *   Item Header Table (Conditional for I5):

        | Item | Support Count | Node Link |
        |---|---|---|
        | I2 | 2 | Null |
        | I1 | 2 | Null |

    *  The FP-Tree will have root -> I2:2 -> I1:2
*   **Frequent Itemsets involving I5:** {I2, I5}:2, {I1, I5}:2, {I2, I1, I5}:2, {I5}:2.

**Mining for I4:**

*   **Conditional Pattern Base for I4:** { {I2:1}, {I2:1, I1:1}}
*   **Conditional FP-Tree for I4:**
    *   Frequent items in the conditional pattern base: {I2:2, I1:1}
    *   Item Header Table (Conditional for I4):

        | Item | Support Count | Node Link |
        |---|---|---|
        | I2 | 2 | Null |

    *  The FP-Tree will have root -> I2:2

*   **Frequent Itemsets involving I4:** {I2, I4}:2, {I4}:2.

**Mining for I3:**

*   **Conditional Pattern Base for I3:** {{I2:1}, {I1:1}, {I2:1}, {I1:1}, {I2:1, I1:1}, {I2:1, I1:1}}
*   **Conditional FP-Tree for I3:**
     *   Frequent items in the conditional pattern base: {I2:4, I1:4}
    *   Item Header Table (Conditional for I3):

        | Item | Support Count | Node Link |
        |---|---|---|
        | I2 | 4 | Null |
        | I1 | 4 | Null |

   *  The FP-Tree will have root -> I2:4 -> I1:4

*   **Frequent Itemsets involving I3:** {I2, I3}:4, {I1, I3}:4, {I2, I1, I3}:4, {I3}:6

**Mining for I1:**

*   **Conditional Pattern Base for I1:** { {I2:6} }
*   **Conditional FP-Tree for I1:**
    *   Frequent items in the conditional pattern base: {I2:6}
    *   Item Header Table (Conditional for I1):

        | Item | Support Count | Node Link |
        |---|---|---|
        | I2 | 6 | Null |

   *  The FP-Tree will have root -> I2:6

*   **Frequent Itemsets involving I1:** {I2, I1}:6, {I1}:6

**Mining for I2:**

*   **Conditional Pattern Base for I2:** {} (Empty, since I2 is the root of many branches)
*   **Conditional FP-Tree for I2:** Null
*   **Frequent Itemsets involving I2:** {I2}:7

**Final Frequent Itemsets (min_sup = 2):**

{I2}:7, {I1}:6, {I3}:6, {I2, I1}:6, {I2, I3}:4, {I1, I3}:4, {I2, I1, I3}:4, {I2, I4}:2, {I4}:2, {I2, I5}:2, {I1, I5}:2, {I2, I1, I5}:2, {I5}:2

## 6. Comparing FP-Growth with Apriori

| Feature | Apriori | FP-Growth |
|---|---|---|
| Candidate Generation | Generates candidate itemsets | Does not generate candidate itemsets |
| Database Scans | Multiple database scans | Two database scans |
| Data Structure | Uses a hash tree or similar data structure | Uses an FP-Tree |
| Memory Usage | High due to candidate generation | Lower due to compressed representation |
| Scalability | Less scalable for large datasets and low min_sup | More scalable for large datasets and low min_sup |
| Complexity | High computational complexity | Lower computational complexity |

## 7. Important Points to Remember

*   FP-Growth is generally *faster* than Apriori, especially for large datasets with low minimum support thresholds.
*   The performance of FP-Growth can be affected by the structure of the data.  If the data is not easily compressible, the FP-Tree can become quite large.
*   Understanding the steps involved in building the FP-Tree and mining frequent itemsets is crucial.
*   The choice between Apriori and FP-Growth depends on the characteristics of the dataset and the available resources.  For small datasets, Apriori might be simpler to implement.  For large datasets, FP-Growth is often preferred.

## 8. Practice Questions/Exercises

**Question 1:**

Given the following transaction database and `min_sup = 2`:

| Transaction ID | Items |
|---|---|
| T1 | A, B, C |
| T2 | B, D |
| T3 | B, C, E |
| T4 | A, B, C |
| T5 | A, B |

a)  List the frequent items (support count >= 2).
b)  Create the Item Header Table (sorted by frequency).
c)  (Conceptual) Briefly describe the next steps to construct the FP-Tree.

**Answer:**

a)  Frequent Items:

| Item | Support Count |
|---|---|
| B | 5 |
| A | 3 |
| C | 3 |

b)  Item Header Table:

| Item | Support Count | Node Link |
|---|---|---|
| B | 5 | Null |
| A | 3 | Null |
| C | 3 | Null |

c)  Next Steps:  For each transaction, reorder the items based on the Item Header Table. Then, traverse the tree, creating new branches or incrementing existing node counts, starting from the root. Update Node Links in the Item Header Table to point to the first instance of each item in the tree, maintaining links between subsequent instances of the same item.

**Question 2:**

Explain why the FP-Growth algorithm is generally more efficient than the Apriori algorithm for association rule mining, especially with large datasets.

**Answer:**

FP-Growth is more efficient than Apriori because it avoids candidate generation, which is a computationally expensive process.  It also reduces the number of database scans to just two. By using the FP-Tree data structure, it stores the essential information about frequent itemsets in a compressed format, reducing memory usage and processing time, especially when dealing with large datasets and low minimum support thresholds.  Apriori, on the other hand, requires multiple database scans and generates a large number of candidate itemsets, leading to increased computational complexity and lower scalability.

**Question 3:**

What is a Conditional Pattern Base, and how is it used in the FP-Growth algorithm?

**Answer:**

A Conditional Pattern Base is the set of prefix paths in the FP-Tree that end in a specific item. It's obtained by tracing back from each node containing the target item to the root of the FP-Tree. The paths encountered (excluding the target item itself) form the conditional pattern base.

The Conditional Pattern Base is used to construct the Conditional FP-Tree for the target item. The Conditional FP-Tree, in turn, is used to mine for frequent itemsets that include the target item. It allows FP-Growth to focus on relevant data and reduce the search space for frequent itemsets.
