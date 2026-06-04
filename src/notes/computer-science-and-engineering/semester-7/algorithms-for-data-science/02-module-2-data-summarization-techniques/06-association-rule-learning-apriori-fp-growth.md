---
title: "Association rule learning - Apriori, FP-Growth"
subject: "ALGORITHMS FOR DATA SCIENCE"
module: "Module 2: Data Summarization Techniques "
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c798"
status: "completed"
scrapedAt: "2026-05-20T17:00:30.943Z"
---
# ALGORITHMS FOR DATA SCIENCE: Module 2: Data Summarization Techniques

## Topic: Association Rule Learning - Apriori, FP-Growth

---

### 1. Introduction to Association Rule Learning

**1.1 What is Association Rule Learning?**

*   **Definition:** A technique for discovering interesting relationships (associations) between variables in large databases. It's often used in market basket analysis to identify items that are frequently purchased together.
*   **Goal:** To find rules of the form "If {Antecedent} then {Consequent}," where the antecedent and consequent are sets of items.
*   **Example:** In a supermarket, a rule like "{Diapers} -> {Beer}" might indicate that customers who buy diapers also tend to buy beer.

**1.2 Key Concepts and Metrics**

*   **Itemset:** A collection of one or more items.
    *   Example: `{Milk}`, `{Bread, Milk}`, `{Diapers, Beer, Chips}`
*   **Support:** The fraction or percentage of transactions that contain a specific itemset.
    *   **Formula:** `Support(X) = (Number of transactions containing X) / (Total number of transactions)`
    *   **Importance:** Measures the frequency of an itemset in the dataset. High support indicates a commonly occurring itemset.
*   **Confidence:** The conditional probability that the consequent (Y) occurs given that the antecedent (X) has occurred.
    *   **Formula:** `Confidence(X -> Y) = Support(X U Y) / Support(X)`
    *   **Importance:** Measures how often items in Y appear in transactions that contain X.
*   **Lift:** Measures how much more likely the consequent (Y) is to occur given the antecedent (X), compared to its general likelihood. It indicates the strength of the association beyond random chance.
    *   **Formula:** `Lift(X -> Y) = Confidence(X -> Y) / Support(Y)`
    *   **Interpretation:**
        *   `Lift = 1`: X and Y are independent.
        *   `Lift > 1`: X and Y are positively correlated (association exists).
        *   `Lift < 1`: X and Y are negatively correlated (association does not exist).
*   **Minimum Support (min_sup):** A threshold used to filter out infrequent itemsets. Only itemsets with support greater than or equal to `min_sup` are considered "frequent itemsets."
*   **Minimum Confidence (min_conf):** A threshold used to filter out weak association rules. Only rules with confidence greater than or equal to `min_conf` are considered "strong rules."

---

### 2. Apriori Algorithm

**2.1 Overview**

*   **Purpose:** To efficiently find all frequent itemsets in a transactional database.
*   **Core Principle:** The "Apriori Property" states that any subset of a frequent itemset must also be frequent. Conversely, if an itemset is infrequent, all of its supersets must also be infrequent.
*   **How it works:** It's an iterative algorithm that generates candidate itemsets of length *k* from frequent itemsets of length *k-1*, and then prunes infrequent candidate itemsets.

**2.2 Steps of the Apriori Algorithm**

1.  **Generate Frequent Itemsets of Length 1 (L1):**
    *   Scan the database to count the occurrences of each individual item.
    *   Filter out items with support below `min_sup` to get L1.
2.  **Generate Candidate Itemsets of Length 2 (C2):**
    *   Combine pairs of items from L1 to create candidate itemsets of size 2.
3.  **Prune and Determine Frequent Itemsets of Length 2 (L2):**
    *   Scan the database again to count the support for each candidate in C2.
    *   Filter out candidates with support below `min_sup` to get L2.
4.  **Iterate for k > 2:**
    *   **Candidate Generation (Ck):** Generate candidate itemsets of length *k* (Ck) from the frequent itemsets of length *k-1* (Lk-1). This is done by joining Lk-1 with itself.
        *   **Join Step:** Two itemsets in Lk-1 are joined if they share *k-2* common items. For example, `{A, B}` and `{A, C}` can be joined to form `{A, B, C}`.
        *   **Prune Step:** After joining, check if all *k-1* subsets of the candidate itemset are present in Lk-1. If any subset is not in Lk-1, the candidate is pruned (due to the Apriori property).
    *   **Candidate Counting:** Scan the database and count the support of each candidate in Ck.
    *   **Frequent Itemset Determination (Lk):** Filter out candidates with support below `min_sup` to get Lk.
5.  **Termination:** The process stops when no more frequent itemsets can be generated (Lk is empty).
6.  **Rule Generation:** Once all frequent itemsets are found, generate association rules from them. For each frequent itemset `I`, generate all possible non-empty proper subsets `s` of `I`. If `Confidence(s -> I\s) >= min_conf`, then the rule `s -> I\s` is a strong association rule.

**2.3 Example**

Consider the following transactions and `min_sup = 2` (out of 4 transactions):

| TID | Items Purchased      |
| :-- | :------------------- |
| 1   | {Milk, Bread, Diapers} |
| 2   | {Milk, Diapers}      |
| 3   | {Milk, Bread, Diapers, Beer} |
| 4   | {Bread, Diapers}     |

**Step 1: L1**
*   Item Counts:
    *   Milk: 3
    *   Bread: 3
    *   Diapers: 4
    *   Beer: 1
*   L1: `{Milk}`, `{Bread}`, `{Diapers}` (Since Beer has support 1 < 2)

**Step 2: C2**
*   Candidate pairs from L1: `{Milk, Bread}`, `{Milk, Diapers}`, `{Bread, Diapers}`

**Step 3: L2**
*   Support Counts:
    *   `{Milk, Bread}`: 2 (Transactions 1, 3)
    *   `{Milk, Diapers}`: 3 (Transactions 1, 2, 3)
    *   `{Bread, Diapers}`: 3 (Transactions 1, 3, 4)
*   L2: `{Milk, Bread}`, `{Milk, Diapers}`, `{Bread, Diapers}` (All have support >= 2)

**Step 4: C3**
*   Candidate generation from L2:
    *   Join `{Milk, Bread}` and `{Milk, Diapers}` (common item `Milk`) -> `{Milk, Bread, Diapers}`.
    *   Prune: Check subsets of `{Milk, Bread, Diapers}`:
        *   `{Milk, Bread}` (in L2? Yes)
        *   `{Milk, Diapers}` (in L2? Yes)
        *   `{Bread, Diapers}` (in L2? Yes)
    *   C3: `{Milk, Bread, Diapers}`

**Step 5: L3**
*   Support Count for C3:
    *   `{Milk, Bread, Diapers}`: 2 (Transactions 1, 3)
*   L3: `{Milk, Bread, Diapers}` (Support 2 >= 2)

**Step 6: C4**
*   No more candidates can be generated from L3.

**Rule Generation (Assume `min_conf = 0.7`)**

*   Frequent Itemset: `{Milk, Bread, Diapers}` (Support = 2)
    *   Possible rules:
        *   `{Milk} -> {Bread, Diapers}`:
            *   `Support({Milk, Bread, Diapers}) = 2`
            *   `Support({Milk}) = 3`
            *   `Confidence = 2 / 3 = 0.66` (Less than 0.7, discard)
        *   `{Bread} -> {Milk, Diapers}`:
            *   `Support({Milk, Bread, Diapers}) = 2`
            *   `Support({Bread}) = 3`
            *   `Confidence = 2 / 3 = 0.66` (Less than 0.7, discard)
        *   `{Diapers} -> {Milk, Bread}`:
            *   `Support({Milk, Bread, Diapers}) = 2`
            *   `Support({Diapers}) = 4`
            *   `Confidence = 2 / 4 = 0.5` (Less than 0.7, discard)
        *   `{Milk, Bread} -> {Diapers}`:
            *   `Support({Milk, Bread, Diapers}) = 2`
            *   `Support({Milk, Bread}) = 2`
            *   `Confidence = 2 / 2 = 1.0` (Greater than 0.7, **Keep rule**)
        *   `{Milk, Diapers} -> {Bread}`:
            *   `Support({Milk, Bread, Diapers}) = 2`
            *   `Support({Milk, Diapers}) = 3`
            *   `Confidence = 2 / 3 = 0.66` (Less than 0.7, discard)
        *   `{Bread, Diapers} -> {Milk}`:
            *   `Support({Milk, Bread, Diapers}) = 2`
            *   `Support({Bread, Diapers}) = 3`
            *   `Confidence = 2 / 3 = 0.66` (Less than 0.7, discard)

**Result:** The only strong association rule is `{Milk, Bread} -> {Diapers}`.

**2.4 Advantages of Apriori**

*   Conceptually simple and easy to understand.
*   Efficient for datasets with a small number of frequent itemsets.
*   Guaranteed to find all frequent itemsets.

**2.5 Disadvantages of Apriori**

*   Can be computationally expensive for datasets with many transactions and/or a large number of items, leading to a large number of candidate itemsets.
*   Requires multiple passes over the database, which can be slow.
*   Generating and testing candidates can be time-consuming.

---

### 3. FP-Growth Algorithm

**3.1 Overview**

*   **Purpose:** An improvement over Apriori for finding frequent itemsets. It avoids the costly candidate generation step.
*   **Core Idea:** Compresses the database into a more manageable structure called a **FP-tree (Frequent Pattern Tree)**. This tree captures all the support information implicitly.
*   **How it works:**
    1.  Builds the FP-tree from the transaction database.
    2.  Recursively mines frequent itemsets from the FP-tree.

**3.2 Key Concepts and Structures**

*   **FP-Tree:** A compact tree structure that represents the frequent itemsets.
    *   **Root Node:** Represents an empty prefix.
    *   **Nodes:** Each node represents an item.
    *   **Node Attributes:**
        *   `item`: The item name.
        *   `count`: The number of transactions passing through this node.
        *   `parent`: Pointer to the parent node.
        *   `children`: A map (or list) of child nodes, keyed by item name.
        *   `next_node`: Pointer to the next node in the header table containing the same item (for efficient traversal).
    *   **Header Table:** A list of items ordered by frequency (descending). It acts as an entry point to the FP-tree for each item.
*   **Conditional FP-tree:** A smaller FP-tree built from transactions that contain a specific item (the "pivot" item). This is used in the recursive mining process.
*   **Frequent Pattern Growth:** The algorithm recursively decomposes the problem into mining frequent itemsets in conditional databases.

**3.3 Steps of the FP-Growth Algorithm**

1.  **First Pass: Find Frequent Items and Support Counts**
    *   Scan the database once to count the occurrences of each individual item.
    *   Determine the set of frequent items (items with support >= `min_sup`).
2.  **Second Pass: Build the FP-Tree**
    *   Scan the database again. For each transaction:
        *   Sort the items in the transaction by frequency (descending).
        *   Insert the sorted transaction into the FP-tree.
        *   When inserting an item into the tree, increment its count. If a child node for that item doesn't exist, create it.
        *   Link nodes representing the same item using the `next_node` pointer.
    *   The header table stores pointers to the first node of each frequent item in the FP-tree.
3.  **Mining Frequent Itemsets from the FP-Tree**
    *   This is a recursive process.
    *   **Base Case:** If the FP-tree is empty, return.
    *   **Recursive Step:**
        *   Iterate through the items in the header table from last to first (lowest frequency to highest). Let the current item be `i`.
        *   **Conditional Pattern Base:** Extract the set of transactions that end with `i` from the FP-tree. This is done by traversing `i`'s `next_node` pointers.
        *   **Conditional FP-tree (FP_i):** Build a conditional FP-tree (FP_i) using the conditional pattern base. Only items that appear with `i` in these transactions and are frequent themselves are included in FP_i.
        *   **Find Frequent Itemsets in FP_i:**
            *   For each node `j` in FP_i's header table, the union of `j`'s path to the root in FP_i and the item `j` itself forms a frequent itemset. These are the frequent itemsets ending with `i` and `j`.
            *   Recursively call the mining process on FP_i.
        *   **Handle Frequent Itemsets Not Ending in `i`:** The frequent itemsets that do *not* contain `i` are found by mining the FP-tree obtained by removing all nodes related to `i` from the original FP-tree.

**3.4 Example**

Using the same transactions and `min_sup = 2` as before:

| TID | Items Purchased      | Sorted Items by Frequency (High to Low) |
| :-- | :------------------- | :---------------------------------------- |
| 1   | {Milk, Bread, Diapers} | {Diapers, Milk, Bread}                    |
| 2   | {Milk, Diapers}      | {Diapers, Milk}                           |
| 3   | {Milk, Bread, Diapers, Beer} | {Diapers, Milk, Bread}                 |
| 4   | {Bread, Diapers}     | {Diapers, Bread}                          |

**Frequent Items (min_sup = 2):** `{Diapers, Milk, Bread}`

**Build FP-Tree:**

1.  **Transaction 1:** `{Diapers, Milk, Bread}`
    *   Root -> Diapers (1) -> Milk (1) -> Bread (1)
2.  **Transaction 2:** `{Diapers, Milk}`
    *   Root -> Diapers (2) -> Milk (2)
3.  **Transaction 3:** `{Diapers, Milk, Bread}`
    *   Root -> Diapers (3) -> Milk (3) -> Bread (2)
4.  **Transaction 4:** `{Diapers, Bread}`
    *   Root -> Diapers (4) -> Bread (1)

**FP-Tree Structure:**

```
        (root)
          |
      Diapers (4)
     /        \
  Milk (3)    Bread (1)
 /    \
Bread(2) (from T1)  (no child for Milk in T4)
```

**Header Table:**
*   Diapers: Pointer to root's Diapers child
*   Milk: Pointer to root's Diapers child's Milk child
*   Bread: Pointer to root's Diapers child's Bread child

**Mining Frequent Itemsets (Recursive Process):**

*   **Process item 'Bread' (last in header table):**
    *   Conditional Pattern Base for Bread: Traverse `next_node` for Bread from the header table. This leads to the path `Root -> Diapers -> Bread`. The count of Bread at its node is 1.
    *   Conditional FP-tree for Bread (FP_bread): Contains `Root -> Diapers (1)`.
    *   Frequent itemsets ending in Bread:
        *   `{Diapers, Bread}` (Support = 1. This is less than min_sup=2. In a full FP-Growth, we'd use the counts from the actual transaction scans to form the conditional FP-tree, and these counts would reflect the total support. Let's re-evaluate with proper counts from conditional transactions.)

Let's restart the mining with a clearer understanding of how conditional databases are formed.

**Corrected Mining Process:**

**Step 1: Find Frequent Items:** `{Diapers, Milk, Bread}`. Sort by frequency: `{Diapers, Milk, Bread}`.

**Step 2: Build FP-Tree:**
*   T1: `{D, M, B}` -> Path: D(1) -> M(1) -> B(1)
*   T2: `{D, M}`    -> Path: D(2) -> M(2)
*   T3: `{D, M, B}` -> Path: D(3) -> M(3) -> B(2)
*   T4: `{D, B}`    -> Path: D(4) -> B(1)

```
        (root)
          |
      Diapers (4) ----> next_node for Diapers
     /        \
  Milk (3)    Bread (1) ----> next_node for Bread
 /    \
Bread(2)  (no child for Milk in T4)
```
*   `next_node` pointers: Diapers point to first Diapers, Milk point to first Milk, Bread point to first Bread.

**Step 3: Recursive Mining:**

*   **Consider Itemset ending with 'Bread':**
    *   Path to 'Bread' node: `Root -> Diapers(4) -> Bread(1)`.
    *   The transactions contributing to this path are `{D, B}` from T4.
    *   The set of items preceding 'Bread' in these transactions is `{D}`.
    *   The conditional database for Bread is: `{D}`.
    *   The FP-tree for `{D}` (conditional FP-tree) contains `Root -> Diapers(1)`.
    *   Frequent itemsets ending in Bread:
        *   `{Diapers, Bread}`: Support is `Support({Diapers, Bread})` from the original scan, which is 3. Since 3 >= 2, this is a frequent itemset.
    *   Recursively mine from FP_bread: No further items to mine.

*   **Consider Itemset ending with 'Milk':**
    *   Path to 'Milk' node: `Root -> Diapers(4) -> Milk(3)`.
    *   Transactions contributing to this path: T1, T2, T3.
    *   Items preceding 'Milk' in these transactions (after sorting):
        *   T1: `{D}`
        *   T2: `{D}`
        *   T3: `{D}`
    *   Conditional database for Milk: `{D, D, D}`.
    *   Conditional FP-tree (FP_milk): `Root -> Diapers(3)`.
    *   Frequent itemsets ending in Milk:
        *   `{Diapers, Milk}`: Support is `Support({Diapers, Milk})` = 3. Since 3 >= 2, this is a frequent itemset.
    *   Recursively mine from FP_milk:
        *   Consider Itemset ending with 'Diapers' in FP_milk: Path `Root -> Diapers(3)`.
        *   Conditional database for `{Diapers, Milk}`: `{ }` (no items precede Diapers in the conditional transactions of Milk's path, effectively).
        *   No further mining needed here as `{Diapers}` alone is already found.

*   **Consider Itemset ending with 'Diapers':**
    *   Path to 'Diapers' node: `Root -> Diapers(4)`.
    *   Transactions contributing: T1, T2, T3, T4.
    *   Items preceding 'Diapers' (after sorting):
        *   T1: `{}`
        *   T2: `{}`
        *   T3: `{}`
        *   T4: `{}`
    *   Conditional database for Diapers: `{}, {}, {}, {}`.
    *   Conditional FP-tree (FP_diapers): Empty (just root).
    *   Frequent itemsets ending in Diapers: None beyond individual items (which are already handled by their own path).

**Frequent Itemsets Found:**
*   `{Diapers, Bread}` (Support 3)
*   `{Diapers, Milk}` (Support 3)
*   `{Diapers, Milk, Bread}`: This one arises from the fact that `{Milk, Bread}` is a subset of `{Diapers, Milk, Bread}`. The FP-growth recursively finds these.

    Let's illustrate the generation of `{Diapers, Milk, Bread}`:
    When mining FP_milk (`Root -> Diapers(3)`), if we were to consider `{Diapers}` as an item, the recursive call would operate on an empty tree.
    However, the way FP-growth works is that it finds *all* frequent itemsets. The `{Diapers, Milk, Bread}` comes from the initial FP-tree structure itself, where the path `Root -> Diapers -> Milk -> Bread` exists with a count of 2.

    The general rule is: if a path from the root to a node `N` has `k` items and the count of `N` is `c`, then all prefixes of that path of length `< k` are also frequent itemsets with support `c`.

    *   Path `Root -> Diapers(4)`: Frequent itemset `{Diapers}` (Support 4).
    *   Path `Root -> Diapers(4) -> Milk(3)`: Frequent itemset `{Diapers, Milk}` (Support 3).
    *   Path `Root -> Diapers(4) -> Milk(3) -> Bread(2)`: Frequent itemset `{Diapers, Milk, Bread}` (Support 2).

**Frequent Itemsets:**
*   `{Diapers}` (4)
*   `{Milk}` (3)
*   `{Bread}` (3)
*   `{Diapers, Milk}` (3)
*   `{Diapers, Bread}` (3)
*   `{Diapers, Milk, Bread}` (2)

**Rule Generation (Assume `min_conf = 0.7`)**

*   From `{Diapers, Milk}`:
    *   `{Diapers} -> {Milk}`: `Conf = Sup({D,M}) / Sup({D}) = 3 / 4 = 0.75` (Keep)
    *   `{Milk} -> {Diapers}`: `Conf = Sup({D,M}) / Sup({M}) = 3 / 3 = 1.0` (Keep)
*   From `{Diapers, Bread}`:
    *   `{Diapers} -> {Bread}`: `Conf = Sup({D,B}) / Sup({D}) = 3 / 4 = 0.75` (Keep)
    *   `{Bread} -> {Diapers}`: `Conf = Sup({D,B}) / Sup({B}) = 3 / 3 = 1.0` (Keep)
*   From `{Diapers, Milk, Bread}`:
    *   `{Diapers, Milk} -> {Bread}`: `Conf = Sup({D,M,B}) / Sup({D,M}) = 2 / 3 = 0.66` (Discard)
    *   `{Diapers, Bread} -> {Milk}`: `Conf = Sup({D,M,B}) / Sup({D,B}) = 2 / 3 = 0.66` (Discard)
    *   `{Milk, Bread} -> {Diapers}`: This rule cannot be formed directly because `{Milk, Bread}` is not a frequent itemset (its support is implicitly derived from `{D,M,B}` but needs to be explicitly calculated if we used Apriori's subset logic. FP-Growth directly gives support for itemsets present in its paths). If we assume `{Milk, Bread}` has support 2, then `Conf = 2/2 = 1.0`. However, usually the antecedent must be frequent on its own. The direct generation from FP-tree paths is more reliable.

**Resulting Strong Rules:**
*   `{Diapers} -> {Milk}`
*   `{Milk} -> {Diapers}`
*   `{Diapers} -> {Bread}`
*   `{Bread} -> {Diapers}`

**3.5 Advantages of FP-Growth**

*   **Efficiency:** Generally faster than Apriori, especially for large datasets and dense datasets (many frequent itemsets).
*   **No Candidate Generation:** Avoids the costly step of generating candidate itemsets.
*   **Single Pass for Tree Construction:** Requires only two passes over the data to build the FP-tree.

**3.6 Disadvantages of FP-Growth**

*   **Memory Usage:** The FP-tree can become very large and consume significant memory for datasets with a large number of unique items or long transactions.
*   **Complexity:** More complex to implement and understand compared to Apriori.

---

### 4. Generating Association Rules from Frequent Itemsets

**4.1 Process**

Once all frequent itemsets are identified using either Apriori or FP-Growth, association rules are generated from these itemsets.

1.  **Identify Frequent Itemsets:** Obtain all itemsets that meet the `min_sup` threshold.
2.  **Iterate through Frequent Itemsets:** For each frequent itemset `I`.
3.  **Generate Subsets:** Generate all non-empty proper subsets `s` of `I`.
4.  **Form Candidate Rules:** For each subset `s`, form a candidate rule `s -> (I \ s)`.
5.  **Calculate Confidence:** Calculate the confidence of the candidate rule:
    `Confidence(s -> I \ s) = Support(I) / Support(s)`
6.  **Filter by Minimum Confidence:** If the calculated confidence is greater than or equal to `min_conf`, the rule is considered a "strong" association rule.

**4.2 Example (Continuing from Apriori Example)**

Frequent Itemsets (with their supports):
*   `{Milk}` (3)
*   `{Bread}` (3)
*   `{Diapers}` (4)
*   `{Milk, Bread}` (2)
*   `{Milk, Diapers}` (3)
*   `{Bread, Diapers}` (3)
*   `{Milk, Bread, Diapers}` (2)

`min_conf = 0.7`

*   **Itemset `{Milk, Diapers}` (Support 3):**
    *   Subset `s = {Milk}`. Rule: `{Milk} -> {Diapers}`.
        *   `Confidence = Support({Milk, Diapers}) / Support({Milk}) = 3 / 3 = 1.0`
        *   `1.0 >= 0.7`, so rule `{Milk} -> {Diapers}` is strong.
    *   Subset `s = {Diapers}`. Rule: `{Diapers} -> {Milk}`.
        *   `Confidence = Support({Milk, Diapers}) / Support({Diapers}) = 3 / 4 = 0.75`
        *   `0.75 >= 0.7`, so rule `{Diapers} -> {Milk}` is strong.

*   **Itemset `{Milk, Bread, Diapers}` (Support 2):**
    *   Subset `s = {Milk, Bread}`. Rule: `{Milk, Bread} -> {Diapers}`.
        *   `Confidence = Support({Milk, Bread, Diapers}) / Support({Milk, Bread}) = 2 / 2 = 1.0`
        *   `1.0 >= 0.7`, so rule `{Milk, Bread} -> {Diapers}` is strong.
    *   Subset `s = {Milk, Diapers}`. Rule: `{Milk, Diapers} -> {Bread}`.
        *   `Confidence = Support({Milk, Bread, Diapers}) / Support({Milk, Diapers}) = 2 / 3 = 0.66`
        *   `0.66 < 0.7`, so this rule is not strong.
    *   Subset `s = {Bread, Diapers}`. Rule: `{Bread, Diapers} -> {Milk}`.
        *   `Confidence = Support({Milk, Bread, Diapers}) / Support({Bread, Diapers}) = 2 / 3 = 0.66`
        *   `0.66 < 0.7`, so this rule is not strong.

**Summary of Strong Rules (from this example):**
*   `{Milk} -> {Diapers}` (Conf: 1.0)
*   `{Diapers} -> {Milk}` (Conf: 0.75)
*   `{Milk, Bread} -> {Diapers}` (Conf: 1.0)

---

### 5. Practice Questions and Exercises

**Question 1:**

Given the following transactions and `min_sup = 2`:

| TID | Items Purchased       |
| :-- | :-------------------- |
| 1   | {A, B, C}             |
| 2   | {A, C}                |
| 3   | {A, B, D}             |
| 4   | {A, C, D}             |
| 5   | {B, C}                |

Using the Apriori algorithm, find all frequent itemsets of size 2.

**Answer 1:**

1.  **L1:**
    *   A: 4
    *   B: 3
    *   C: 4
    *   D: 2
    *   L1 = { {A}, {B}, {C}, {D} }

2.  **C2:**
    *   {A, B}, {A, C}, {A, D}, {B, C}, {B, D}, {C, D}

3.  **L2:**
    *   Support({A, B}): 2 (T1, T3)
    *   Support({A, C}): 3 (T1, T2, T4)
    *   Support({A, D}): 2 (T3, T4)
    *   Support({B, C}): 2 (T1, T5)
    *   Support({B, D}): 1 (T3) - Pruned!
    *   Support({C, D}): 2 (T2, T4)
    *   L2 = { {A, B}, {A, C}, {A, D}, {B, C}, {C, D} }

**Question 2:**

Using the frequent itemsets from Question 1 and `min_conf = 0.7`, generate all strong association rules.

**Answer 2:**

*   **Itemset {A, B} (Sup 2):**
    *   {A} -> {B}: Conf = 2 / 4 = 0.5 (Discard)
    *   {B} -> {A}: Conf = 2 / 3 = 0.66 (Discard)

*   **Itemset {A, C} (Sup 3):**
    *   {A} -> {C}: Conf = 3 / 4 = 0.75 (Keep)
    *   {C} -> {A}: Conf = 3 / 3 = 1.0 (Keep)

*   **Itemset {A, D} (Sup 2):**
    *   {A} -> {D}: Conf = 2 / 4 = 0.5 (Discard)
    *   {D} -> {A}: Conf = 2 / 2 = 1.0 (Keep)

*   **Itemset {B, C} (Sup 2):**
    *   {B} -> {C}: Conf = 2 / 3 = 0.66 (Discard)
    *   {C} -> {B}: Conf = 2 / 2 = 1.0 (Keep)

*   **Itemset {C, D} (Sup 2):**
    *   {C} -> {D}: Conf = 2 / 2 = 1.0 (Keep)
    *   {D} -> {C}: Conf = 2 / 2 = 1.0 (Keep)

**Strong Association Rules:**
*   {A} -> {C}
*   {C} -> {A}
*   {D} -> {A}
*   {C} -> {B}
*   {C} -> {D}
*   {D} -> {C}

**Question 3:**

What is the primary advantage of FP-Growth over Apriori?

**Answer 3:**

The primary advantage of FP-Growth over Apriori is that it **avoids the costly candidate generation step**. FP-Growth uses a compact FP-tree structure to represent the database and recursively mines frequent itemsets directly from this tree, making it generally more efficient, especially for large and dense datasets.

---

### 6. Important Points to Remember

*   **Support:** Measures frequency of an itemset.
*   **Confidence:** Measures the reliability of a rule.
*   **Lift:** Measures the strength of association beyond random chance.
*   **Apriori Property:** A superset of an infrequent itemset must also be infrequent. This is the foundation of Apriori's pruning strategy.
*   **FP-Growth's FP-tree:** A compressed representation of the database that avoids repeated scans and candidate generation.
*   **Rule Generation:** Always happens *after* all frequent itemsets have been found.
*   **Choosing Between Apriori and FP-Growth:**
    *   Apriori is simpler but can be slow.
    *   FP-Growth is more efficient but can be memory-intensive.
*   **Parameters:** `min_sup` and `min_conf` are crucial for controlling the output of association rule learning.

---
