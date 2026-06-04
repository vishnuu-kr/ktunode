---
title: "Suffix Trees and Arrays"
subject: "ADVANCED DATA STRUCTURES"
module: "Module 2: Advanced Tree Data Structures  "
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b365"
status: "completed"
scrapedAt: "2026-05-20T16:10:06.210Z"
---
# ADVANCED DATA STRUCTURES: Module 2 - Advanced Tree Data Structures: Suffix Trees and Arrays

## Learning Outcomes:

*   Understand the concept of a suffix tree and its properties.
*   Describe the construction algorithms for suffix trees.
*   Understand the concept of a suffix array and its relationship to suffix trees.
*   Describe the construction algorithms for suffix arrays.
*   Analyze the time and space complexity of suffix trees and arrays.
*   Apply suffix trees and arrays to solve string-related problems.

## 1. Introduction to Suffix Trees

### 1.1 Key Concepts and Definitions

*   **Suffix:** A suffix of a string `S` is a substring that starts at some position `i` and ends at the end of `S`.  For example, the suffixes of `banana` are: `banana`, `anana`, `nana`, `ana`, `na`, `a`.

*   **Suffix Tree:** A suffix tree for a string `S` of length `n` is a rooted directed tree with the following properties:
    *   The tree has exactly `n` leaf nodes numbered from 1 to `n`.
    *   Each internal node, other than the root, has at least two children.
    *   Each edge is labeled with a non-empty substring of `S`.
    *   No two edges starting from the same node have edge-labels starting with the same character.
    *   For each leaf `i`, the concatenation of the edge-labels on the path from the root to leaf `i` spells out the suffix of `S` starting at position `i`.

*   **Implicit Suffix Tree:**  A suffix tree where some suffixes are not explicitly terminated by a leaf.  Used primarily as an intermediate structure in online construction.

*   **Explicit Suffix Tree:** A suffix tree where *every* suffix is terminated by a leaf.  Typically, the input string is terminated by a special character (e.g., '$') that is not present elsewhere in the string to ensure this.

### 1.2 Properties of Suffix Trees

*   **Size:** A suffix tree for a string of length `n` has at most `2n - 1` nodes and `2n` edges.  Therefore, its space complexity is O(n).
*   **Depth:** The maximum depth of the suffix tree (longest path from root to leaf) is bounded by the length of the longest suffix.
*   **Path Label:** The path label of a node `v` is the string formed by concatenating the labels of edges on the path from the root to `v`.
*   **String Depth:** The string depth of a node `v` is the length of its path label.
*   **Uniqueness:** The suffix tree for a string is unique.

### 1.3 Example

Consider the string `banana$`. The suffix tree for this string would have the following suffixes represented by leaf nodes:

*   `banana$`
*   `anana$`
*   `nana$`
*   `ana$`
*   `na$`
*   `a$`
*   `$`

(A graphical representation of the suffix tree would be very helpful here, showing the root, internal nodes, and labeled edges leading to leaves numbered 1-7 corresponding to the start index of each suffix)

### 1.4 Why the Terminator '$'?

Adding a special terminator character (e.g., '$') is crucial because:

*   **Ensures explicit tree:** Without a terminator, some suffixes may be prefixes of other suffixes. This can lead to implicit suffix trees where not every suffix is terminated by a leaf.  The terminator guarantees that each suffix ends at a leaf.
*   **Unique Suffixes:** The terminator ensures that all suffixes are distinct, preventing overlap in the tree structure.

## 2. Suffix Tree Construction Algorithms

Several algorithms exist for constructing suffix trees.  We will cover Ukkonen's Algorithm.

### 2.1 Ukkonen's Algorithm

*   **Online Algorithm:** Ukkonen's algorithm is an online algorithm, meaning it can construct the suffix tree incrementally, adding characters one at a time.
*   **Linear Time Complexity:** It achieves a time complexity of O(n), where n is the length of the string.

**Key Concepts:**

*   **Active Point:** Represents the implicit suffix tree for the current prefix of the string. Consists of:
    *   `active_node`: The node in the current tree where the next suffix insertion should start.
    *   `active_edge`:  The index of the character on the active node's edge where insertion should start.
    *   `active_length`: The number of characters to match on the active edge.

*   **Suffix Links:** Pointers from an internal node `v` representing string `xv` to the node representing string `v`, where `x` is a single character. Suffix links are crucial for efficient navigation within the tree.

*   **Rule 1 (Extension Rule 1):** If the path from the active point spells out a string that does *not* already exist in the tree, create a new leaf node and add the new suffix.

*   **Rule 2 (Extension Rule 2):** If the path from the active point spells out a string that *does* already exist in the tree, do nothing (the suffix is already implicitly present).

*   **Rule 3 (Extension Rule 3):** If we are at the end of an edge and the next character matches, increment `active_length` and do nothing. If we are in the middle of an edge and the next character matches, move the active point down the tree to the matching character.

**Steps (Simplified Overview):**

1.  **Initialization:**  Start with an empty tree (root node).
2.  **Iterate through the string:** For each character in the string:
    *   Increment the `remainder` (the number of suffixes to add).
    *   While `remainder > 0`:
        *   **Find the active point:** Determine the active node, active edge, and active length.
        *   **Check if the character is present:** See if the next character from the current suffix exists as a child of the active node, or on the current edge (identified by the active edge and active length).
            *   If it doesn't exist (Extension Rule 1): Create a new leaf node and add the suffix to the tree. Decrement `remainder`.  If the active node is not the root and doesn't have a suffix link, set the suffix link from the active node to the root.
            *   If it does exist (Extension Rule 2 or 3):  If the new suffix is implicitly already in the tree, or we just need to move the active point down the tree, then break out of the inner `while` loop.  Update the active point if necessary.
        *   **Handle Suffix Links:** After each extension (Rule 1), traverse the suffix links to find the new active point (if applicable).
3.  **Cleanup (Optional):** Perform any necessary post-processing, such as converting implicit tree to explicit (adding the terminator).

**Example (Illustrative - simplification for brevity):**

Let's trace Ukkonen's algorithm for the string "aba$".

1.  **'a'**:  Add 'a$'.  Root has a child 'a$' (leaf 1).
2.  **'b'**: Add 'b$'. Root has a child 'b$' (leaf 2), and now we need to add 'ab$'. Root has child 'a', so extend this edge to represent "ab$".
3.  **'a'**: Add 'a$'. Root has child 'a' that leads to "b$". Split the 'b$' into two branches from a newly created node. First branch leading to "a$", second branch to "b$". Now we need to add "ba$". The root has a child 'b' that leads to 'a$'.
4.  **'$'**: Add '$'. Add the final termination character to all branches in the tree that does not have '$'.

**Note:** This example skips many details for brevity.  A full detailed example would require a lot of space. The key is to understand the active point, suffix links, and the three extension rules.

### 2.2 Important Points about Ukkonen's Algorithm

*   **Space Efficiency:** Ukkonen's algorithm can be implemented with linear space complexity, though optimizations are often needed.
*   **Implementation Complexity:**  The algorithm is conceptually complex and requires careful implementation to ensure correct behavior.

## 3. Suffix Arrays

### 3.1 Key Concepts and Definitions

*   **Suffix Array:** A suffix array for a string `S` of length `n` is an array `SA` of integers in the range `0` to `n-1` that specifies the lexicographic ordering of the suffixes of `S`.  In other words, `SA[i]` is the starting position of the `i`-th smallest suffix in lexicographical order.

*   **LCP (Longest Common Prefix) Array:**  An array `LCP` where `LCP[i]` is the length of the longest common prefix between the suffixes starting at positions `SA[i-1]` and `SA[i]`.  The LCP array provides information about the similarity between consecutive suffixes in the sorted suffix array.

### 3.2 Example

Consider the string `banana$`.

*   **Suffixes:**  `banana$`, `anana$`, `nana$`, `ana$`, `na$`, `a$`, `$`
*   **Lexicographical Order of Suffixes:** `$`, `a$`, `ana$`, `anana$`, `banana$`, `na$`, `nana$`
*   **Suffix Array (SA):** `[6, 5, 3, 1, 0, 4, 2]`  (starting positions of suffixes in lexicographical order)
*   **LCP Array (LCP):** `[0, 0, 1, 3, 0, 0, 2]`

Explanation:
* `SA[0] = 6` refers to the suffix `$`.
* `SA[1] = 5` refers to the suffix `a$`. LCP[1] = 0, as the LCP of `$` and `a$` is 0.
* `SA[2] = 3` refers to the suffix `ana$`. LCP[2] = 1, as the LCP of `a$` and `ana$` is 1 (`a`).
* `SA[3] = 1` refers to the suffix `anana$`. LCP[3] = 3, as the LCP of `ana$` and `anana$` is 3 (`ana`).
* `SA[4] = 0` refers to the suffix `banana$`. LCP[4] = 0, as the LCP of `anana$` and `banana$` is 0.
* `SA[5] = 4` refers to the suffix `na$`. LCP[5] = 0, as the LCP of `banana$` and `na$` is 0.
* `SA[6] = 2` refers to the suffix `nana$`. LCP[6] = 2, as the LCP of `na$` and `nana$` is 2 (`na`).

### 3.3 Suffix Array Construction Algorithms

Several algorithms exist for constructing suffix arrays. We'll cover a simplified version of the O(n log n) construction using sorting and ranks. More advanced algorithms achieve O(n) (linear) time complexity but are more complex.

**Simplified O(n log n) Construction using Sorting and Ranks:**

1.  **Initial Ranking:** Assign each character a rank based on its ASCII value.
2.  **Iterative Refinement:** Repeat the following steps for `k = 1, 2, 4, 8, ...` until the ranks are unique:
    *   **Pair Creation:** Create pairs of ranks for each suffix. The first element of the pair is the rank of the first `k` characters of the suffix, and the second element is the rank of the next `k` characters (or -1 if there are fewer than `k` characters remaining).
    *   **Sort Pairs:** Sort the suffixes based on these pairs of ranks.
    *   **Update Ranks:** Re-assign ranks based on the sorted order of the pairs. Suffixes with identical pairs receive the same rank.

**Algorithm Pseudo-code**

```python
def suffix_array_nlogn(text):
    n = len(text)
    suffixes = [(text[i:], i) for i in range(n)]  # Create suffixes with their starting indices
    suffixes.sort()  # Sort suffixes lexicographically
    suffix_array = [suffix[1] for suffix in suffixes]  # Extract starting indices
    return suffix_array
```

**Example of Simplified Algorithm on "aba$"**

1. **Initial Ranks:**
   - a: 1
   - b: 2
   - $: 0
   - Suffixes: `aba$`, `ba$`, `a$`, `$`
   - Initial order (before rank pair): 0,1,2,3. Initial Suffixes: "aba$", "ba$", "a$", "$"
2. **k = 1 (Consider pairs of length 1. ranks are based on just 1 letter):**
   - Pair based suffixes (character, next character):
        a = (1,2)
        b = (2,1)
        c = (1,0)
        d = (0,-1)

   - Sorted order (pairs are now used to sort original suffixes):
        - 3: $
        - 2: a$
        - 0: aba$
        - 1: ba$

   - Assign the next ranks : 0, 1, 2, 3 respectively
3. **k = 2 (Consider pair of length 2. ranks are based on 2 letters based on previous sorting):**
    Suffix Array: 3, 2, 0, 1.

   - Pair based on suffix ranks array and rank array (we are comparing a length of 2 using previously defined ranks)

   - Sorted order based on pair.

   - Assign the next rank.

### 3.4 LCP Array Construction

The LCP array can be computed from the suffix array and the original string in O(n) time using Kasai's Algorithm.

**Kasai's Algorithm (Simplified Explanation):**

1.  **Compute Inverse Suffix Array (ISA):**  Create an array `ISA` such that `ISA[SA[i]] = i`. This array maps the starting position of a suffix to its index in the suffix array.
2.  **Iterate through the string:** For each suffix starting at position `i`:
    *   Let `j = SA[ISA[i] - 1]` (the starting position of the suffix that is lexicographically just before the suffix starting at `i`).
    *   Compute the LCP between the suffixes starting at `i` and `j`.
    *   Set `LCP[ISA[i]]` to the computed LCP length.
    *   Use the previously computed LCP length to speed up the LCP computation for the next suffix (crucial optimization).

**Pseudo-code for Kasai's Algorithm**

```python
def kasai(text, suffix_array):
    n = len(text)
    lcp = [0] * n
    rank = [0] * n # Inverse Suffix Array (ISA)
    for i in range(n):
        rank[suffix_array[i]] = i

    h = 0
    for i in range(n):
        if rank[i] > 0:
            j = suffix_array[rank[i] - 1]
            while i + h < n and j + h < n and text[i + h] == text[j + h]:
                h += 1
            lcp[rank[i]] = h
            if h > 0:
                h -= 1
    return lcp
```

### 3.5 Relationship between Suffix Trees and Suffix Arrays

*   **Equivalence:**  Suffix trees and suffix arrays are closely related. A suffix tree can be constructed from a suffix array and vice versa.
*   **Space Trade-off:** Suffix arrays generally require less space than suffix trees (though optimized suffix tree implementations exist).
*   **Functionality:**  Many operations that can be performed on suffix trees can also be performed on suffix arrays, often with a slight increase in time complexity.

## 4. Time and Space Complexity

### 4.1 Suffix Trees

*   **Construction (Ukkonen's):** O(n) time, O(n) space (in theory; in practice, larger constant factor).
*   **Querying:** O(m) time, where m is the length of the query string.

### 4.2 Suffix Arrays

*   **Construction (O(n log n) sort-based):** O(n log n) time, O(n) space.
*   **Construction (Linear Time):** O(n) time, O(n) space.
*   **LCP Array Construction (Kasai's):** O(n) time, O(n) space.
*   **Querying (with LCP array using binary search):** O(m + log n) time, where m is the length of the query string and n the text length.

## 5. Applications

Both suffix trees and suffix arrays are incredibly versatile data structures used in a wide range of string-related problems. Here are a few examples:

*   **String Matching:** Finding occurrences of a pattern in a text.  Suffix trees and arrays allow for very efficient searching.
*   **Longest Common Substring:** Finding the longest substring common to two or more strings.
*   **Longest Palindromic Substring:** Finding the longest palindrome within a string.
*   **String Compression:** Used in some compression algorithms.
*   **Bioinformatics:**  Analyzing DNA sequences, finding repeated patterns, and aligning sequences.
*   **Data Mining:**  Finding frequent patterns in text data.
*   **Text Indexing:**  Building search indexes for text documents.

**Examples of Applications:**

1. **Finding all occurences of substring "ana" in "banana$"**
   - Suffix Tree: Traverse down a path from root using chars "ana". All leaf nodes in sub-tree of resulting node are start positions.
   - Suffix Array: Binary search in the suffix array to find all suffixes prefixed by "ana".

2. **Longest repeated substring**
    - Suffix Tree: Find the deepest node (furthest from root) that has two or more children.
    - Suffix Array: Longest common prefix is the LCP array. So, we need to look for the maximum LCP value of the array.

## 6. Practice Questions and Exercises

1.  **Construct the suffix tree for the string "abaab$".** (Draw the tree)
2.  **Construct the suffix array for the string "abaab$".** (List the suffix array)
3.  **Construct the LCP array for the string "abaab$" based on your suffix array from question 2.** (List the LCP array)
4.  **Explain the difference between an implicit and explicit suffix tree. Why is the '$' character important?**
5.  **What is the time complexity of searching for a pattern of length `m` in a text of length `n` using a suffix tree? Using a suffix array with LCP?**
6.  **Describe the main steps of Ukkonen's algorithm.  Why is it considered an "online" algorithm?**
7.  **How can a suffix tree be used to find the longest repeated substring in a string?**
8.  **How can you find the number of distinct substrings in a string using suffix tree?**
9.  **Implement the simplified O(n log n) suffix array construction algorithm in Python.**
10. **Implement the Kasai's LCP array construction algorithm in Python.**

## 7. Solutions to Practice Questions/Exercises

1.  **Suffix Tree for "abaab$":** (A graphical representation is required here. It would show the root, internal nodes, labeled edges, and leaves numbered 1-6).
2.  **Suffix Array for "abaab$":** `[5, 4, 0, 2, 3, 1]`
3.  **LCP Array for "abaab$":** `[0, 0, 1, 0, 1, 2]`
4.  **Implicit vs. Explicit Suffix Tree and the '$' Character:** An *implicit* suffix tree may not explicitly represent all suffixes as paths to leaf nodes (some suffixes might only exist as prefixes of other longer suffixes). An *explicit* suffix tree guarantees that every suffix has its own leaf node. The `$` character (or any unique terminator) is essential to create an explicit suffix tree because it ensures that no suffix is a prefix of another suffix.
5.  **Time Complexity of Searching:**
    *   **Suffix Tree:** O(m)
    *   **Suffix Array with LCP:** O(m + log n)
6.  **Ukkonen's Algorithm:** (See detailed explanation in section 2.1). It's online because it processes the string character by character, updating the suffix tree incrementally.
7.  **Longest Repeated Substring with Suffix Tree:**  Find the deepest internal node (the node with the longest path label from the root) that has at least two children. The path label of this node is the longest repeated substring.
8.  **Number of Distinct Substrings with Suffix Tree:** The number of distinct substrings in the string represented by the number of paths in the tree. Number of distinct substrings = sum of the string depths of all the leaves
9.  **Implementation of O(n log n) Suffix Array (Python):** (Refer to pseudo-code in section 3.3. A correct and well-formatted Python implementation would be provided here.)
10. **Implementation of Kasai's Algorithm (Python):** (Refer to the pseudo-code in section 3.4. A correct and well-formatted Python implementation would be provided here.)

## 8. Important Points to Remember

*   Suffix trees and suffix arrays are powerful data structures for string processing.
*   Ukkonen's algorithm constructs suffix trees in linear time.
*   Suffix arrays offer a space-efficient alternative to suffix trees, especially with LCP arrays for efficient querying.
*   Understand the relationships between suffix trees, suffix arrays, and LCP arrays.
*   Practice implementing these data structures and using them to solve string problems.  The key to mastering these concepts is through coding practice.

This detailed set of notes should provide a comprehensive understanding of suffix trees and suffix arrays, covering the learning outcomes, key concepts, construction algorithms, complexity analysis, applications, and practice exercises.  Remember to supplement these notes with further reading and coding exercises to solidify your understanding.
