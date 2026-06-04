---
title: "Keyword Trees"
subject: "BIOINFORMATICS"
module: "Module 3: Combinatorial Pattern Matching (9 hours)"
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162780fc9aa1fdbc8c176"
status: "completed"
scrapedAt: "2026-05-20T17:01:14.201Z"
---
# Bioinformatics Study Notes: Module 3 - Combinatorial Pattern Matching

## Topic: Keyword Trees (9 hours)

---

### 1. Introduction to Keyword Trees

**Definition:**
A **Keyword Tree**, also known as a **Trie** (pronounced "try") or **Prefix Tree**, is a tree-like data structure used for storing a dynamic set or associative array where the keys are usually strings. It's particularly efficient for searching strings based on their prefixes.

**Core Idea:**
Each node in the trie represents a common prefix of one or more strings in the set. The root represents the empty string. As you traverse down from the root, each edge represents a character, and the path from the root to a node spells out a prefix. Strings are typically stored by marking nodes that correspond to the end of a complete word.

**Why Use Keyword Trees?**
*   **Efficient Prefix Searching:** Quickly find all strings that start with a given prefix.
*   **Fast Lookups:** Membership testing (checking if a string exists) is very fast, proportional to the length of the string, not the number of strings in the set.
*   **Space Efficiency for Common Prefixes:** If many strings share common prefixes, the trie can be more space-efficient than storing each string separately.

---

### 2. Structure and Construction of a Keyword Tree

**Nodes:**
*   **Children:** Each node can have multiple children, where each child represents a character that can follow the prefix represented by the parent node. The number of children is typically limited by the size of the alphabet (e.g., 26 for English lowercase, or 4 for DNA bases: A, C, G, T).
*   **End-of-Word Marker:** A flag or a special value associated with a node to indicate that the path from the root to this node forms a complete string in the set.
*   **Optional Data:** Nodes can also store additional information, such as the frequency of a word or pointers to other data structures.

**Alphabet:**
The set of all possible characters that can form the strings stored in the trie.

**Construction Process (Insertion):**
To insert a string into a trie:
1.  Start at the root.
2.  For each character in the string:
    *   If there is an edge corresponding to that character from the current node, follow that edge to the child node.
    *   If there is no such edge, create a new node and an edge from the current node to the new node labeled with that character. Make the new node the current node.
3.  Once all characters are processed, mark the final node as the end of a word.

**Example: Inserting DNA sequences**
Let's insert the following DNA sequences: "GATTACA", "GATT", "TAG"

*   **Alphabet:** {A, C, G, T}

**Initial Trie:**
```
    (root)
```

**Insert "GATTACA":**
1.  `root` -> `G` -> `A` -> `T` -> `T` -> `A` -> `C` -> `A` (mark 'A' as end-of-word)

```
    (root)
      | G
      v
      A
      | A
      v
      T
      | T
      v
      T
      | T
      v
      A
      | A
      v
      C
      | C
      v
      A  (End of "GATTACA")
```

**Insert "GATT":**
1.  `root` -> `G` -> `A` -> `T` -> `T` (mark 'T' as end-of-word)

```
    (root)
      | G
      v
      A
      | A
      v
      T
      | T
      v
      T  (End of "GATT")
      | T
      v
      A
      | A
      v
      C
      | C
      v
      A  (End of "GATTACA")
```

**Insert "TAG":**
1.  `root` -> `T` (create `T` node) -> `A` (create `A` node) -> `G` (create `G` node, mark 'G' as end-of-word)

```
    (root)
    /   \
   G     T
   |     | A
   v     v
   A     A
   |     | G (End of "TAG")
   v
   T
   | T
   v
   T  (End of "GATT")
   | T
   v
   A
   | A
   v
   C
   | C
   v
   A  (End of "GATTACA")
```

**Key Concept:** **Shared Prefixes** are implicitly represented by the paths in the tree.

---

### 3. Operations on Keyword Trees

**3.1. Membership Testing (Search):**
To check if a string `S` exists in the trie:
1.  Start at the root.
2.  For each character in `S`:
    *   If there is an edge corresponding to the character, move to the child node.
    *   If there is no such edge, the string is not in the trie. Return `False`.
3.  If all characters are processed, check if the current node is marked as an end-of-word.
    *   If yes, the string is in the trie. Return `True`.
    *   If no, the string is a prefix of another string but not a word itself. Return `False`.

**Example (using the trie above):**
*   **Search "GATT":**
    *   `root` -> `G` -> `A` -> `T` -> `T`. Node `T` is marked as end-of-word. **Result: True**
*   **Search "GATTAC":**
    *   `root` -> `G` -> `A` -> `T` -> `T` -> `A` -> `C`. Node `C` is *not* marked as end-of-word. **Result: False**
*   **Search "CAT":**
    *   `root` -> `C`. No edge for `C`. **Result: False**

**3.2. Prefix Searching (Starts With):**
To find all strings in the trie that start with a given prefix `P`:
1.  Traverse the trie following the characters of `P` from the root.
2.  If the traversal fails (an edge doesn't exist), no strings start with `P`. Return an empty list.
3.  If the traversal succeeds, you reach a node `N` that represents the prefix `P`.
4.  Perform a Depth-First Search (DFS) or Breadth-First Search (BFS) starting from node `N`.
5.  Any time you encounter a node marked as an end-of-word during the traversal from `N`, append the string formed by `P` concatenated with the path from `N` to that end-of-word node to the result list.

**Example (using the trie above):**
*   **Find strings starting with "GA":**
    *   Traverse `root` -> `G` -> `A`. Reach node `A` (representing "GA").
    *   From this `A` node, traverse:
        *   `T` -> `T` (end-of-word for "GATT") -> `A` -> `C` -> `A` (end-of-word for "GATTACA")
    *   **Result: ["GATT", "GATTACA"]**

**3.3. Deletion:**
Deleting a string from a trie is more complex. The general approach:
1.  Find the node corresponding to the end of the string to be deleted.
2.  Unmark the end-of-word marker.
3.  **Crucially:** If the node has no children AND is not an end-of-word for any other string, it can be removed. This removal might propagate upwards: if the parent node now has no children and is not an end-of-word, it can also be removed. This process continues until a node is reached that either has other children, is an end-of-word, or is the root.

**Example (using the trie above):**
*   **Delete "GATT":**
    1.  Find node for "GATT". Mark it as *not* an end-of-word.
    2.  The node for "GATT" has a child `A` (for "GATTACA") and is *not* an end-of-word anymore. So, it remains.

*   **Delete "TAG":**
    1.  Find node for "TAG". Mark it as *not* an end-of-word.
    2.  The node for "TAG" has no children and is *not* an end-of-word. Remove it.
    3.  The parent node for "TAG" (which is the `A` child of `T`) now has no children and is *not* an end-of-word. Remove it.
    4.  The parent node for `A` (which is `T`) now has only the `T` child leading to "GATTACA". It is not an end-of-word. It remains.

---

### 4. Variations of Keyword Trees

**4.1. Compressed Tries (Radix Trees / Patricia Tries):**
**Problem with standard tries:** If many nodes have only one child (e.g., inserting "AAAAA"), the trie can become very deep and inefficient in terms of space due to many single-child nodes.

**Solution:**
In a compressed trie, nodes with only one child are merged with their parent. This means that edges can represent sequences of characters instead of just single characters.

**Construction:**
When inserting a string, if a path consists of a sequence of nodes where each node has only one child, that sequence is compressed into a single edge labeled with the combined string.

**Example:** Inserting "apple", "apply", "apricot"
*   **Standard Trie:**
    ```
        (root)
          | a
          v
          p
          | p
          v
          p -- l -- e (end)
          |    |
          |    p -- l -- y (end)
          |
          r -- i -- c -- o -- t (end)
    ```
*   **Compressed Trie:**
    ```
        (root)
          | ap
          v
          p -- l -- e (end)
          |    |
          |    y (end)
          |
          r i c o t (end)
    ```
    Note: The edges `p` and `r` from the node representing `ap` are compressed if they are the only children. Let's refine the example.

**Revised Example: "apple", "apply", "apricot"**
*   **Standard Trie:**
    ```
        (root)
          | a
          v
          p
          | p
          v
          p
          | l
          v
          e (End of "apple")
          | y
          v
          y (End of "apply")
          | r
          v
          r
          | i
          v
          i
          | c
          v
          c
          | o
          v
          o
          | t
          v
          t (End of "apricot")
    ```
*   **Compressed Trie:**
    1. Insert "apple": `root` -> `a` -> `p` -> `p` -> `l` -> `e` (mark end).
       *   At this point, `p` has one child `p`. `p` has one child `l`. `l` has one child `e`.
    2. Insert "apply": Traverse `root` -> `a` -> `p` -> `p` -> `l`. Now, `l` has two children: `e` and `y`.
    3. Insert "apricot": Traverse `root` -> `a` -> `p`. Now, `p` has two children: `p` and `r`.

    The compression happens when an edge would be formed by a node that has only one child.
    Let's re-visualize the compression logic:
    When inserting "apple":
    `root` -> `a` -> `p` -> `p` -> `l` -> `e` (end)
    The edges can be labeled with characters.

    Consider inserting "apple" and "apricot" into a standard trie.
    ```
        (root)
          | a
          v
          p
          | p
          v
          p ---- l ---- e (end)
          |
          r ---- i ---- c ---- o ---- t (end)
    ```
    Now, we insert "apply".
    `root` -> `a` -> `p` -> `p` -> `l`. The node `l` already exists. It has child `e`.
    When we process `y` from "apply", `l` needs a new child.
    The `p` node (after `ap`) has one child `p`. This can be compressed. The edge becomes `pp`.
    ```
        (root)
          | ap
          v
          p ---- l ---- e (end)
          |      |
          |      y (end)
          |
          r ---- i ---- c ---- o ---- t (end)
    ```
    This can be further compressed. `ap` -> `p`. This can be `app`.
    If `ap` node has only one child `p`, and that `p` node has only one child `p`, then they can merge.
    **Correct Compressed Trie:**
    ```
        (root)
          | ap
          v
          p
          | pl
          v
          e (End of "apple")
          | y
          v
          y (End of "apply")
          | ricot
          v
          t (End of "apricot")
    ```
    This is still not quite right. Compression happens at nodes that have only one child *that is not an end-of-word*.

    Let's consider the actual compression rule: If a node has exactly one child, and that node is not an end-of-word itself, then the edge leading to that child is extended to include the characters leading to the child's first descendant.

    **Correct Construction of Compressed Trie (using "apple", "apply", "apricot"):**
    1. Insert "apple":
       `root` --("apple")--> `node_apple` (End of word)
    2. Insert "apply":
       `root` --("app")--> `node_app`
       `node_app` --("l")--> `node_appl`
       `node_appl` has child `e` from "apple". It needs to accommodate `y`.
       Split `node_appl`.
       `root` --("app")--> `node_app`
       `node_app` --("le")--> `node_apple` (End of "apple")
       `node_app` --("ly")--> `node_apply` (End of "apply")
    3. Insert "apricot":
       `root` --("ap")--> `node_ap`
       `node_ap` has child `p`. It needs to accommodate `r`.
       Split `node_ap`.
       `root` --("ap")--> `node_ap_split`
       `node_ap_split` --("p")--> `node_app`
       `node_ap_split` --("ricot")--> `node_apricot` (End of "apricot")

    This shows the complexity of compressed tries. The standard representation is often simpler. The key idea is that edges represent strings.

**4.2. Suffix Tries:**
A **Suffix Trie** is a trie built on all the suffixes of a single string. It's a powerful data structure for various string-matching problems.

**Example: String S = "banana"**
Suffixes:
*   "banana"
*   "anana"
*   "nana"
*   "ana"
*   "na"
*   "a"

Building a suffix trie on these suffixes:
```
    (root)
      | b ---- a ---- n ---- a ---- n ---- a $
      | a ---- n ---- a ---- n ---- a $
      |      | ---- $
      | n ---- a ---- n ---- a $
      |      | ---- $
      | a ---- n ---- a $
      |      | ---- $
      | n ---- a $
      |      | ---- $
      | a $
      | ---- $
```
(where '$' denotes the end of the original string or a unique terminator character, important for distinguishing suffixes.)

**Key Concepts from Suffix Tries:**
*   **Substring Search:** Any path from the root represents a substring. To check if `P` is a substring of `S`, simply try to traverse `P` from the root of the suffix trie of `S`. If you succeed, `P` is a substring.
*   **Number of Occurrences:** The number of leaf nodes (or end-of-string markers) in the subtree rooted at the node representing a prefix `P` gives the number of times `P` occurs as a substring in `S`.

**Note on Suffix Tries in Bioinformatics:**
Suffix tries (and their more memory-efficient versions, suffix trees and suffix arrays) are fundamental for many bioinformatics algorithms, especially for sequence alignment, finding repeated patterns, and genome indexing.

---

### 5. Applications of Keyword Trees

*   **Autocomplete/Spell Checking:** Suggesting words as a user types.
*   **Pattern Matching in Text:** Finding occurrences of a specific pattern (or multiple patterns) in a larger text.
*   **DNA Sequence Analysis:**
    *   Finding common motifs or repeated sequences.
    *   Indexing large genomes for fast queries.
    *   Identifying genes or regulatory elements.
*   **Data Compression:** (Though not directly a trie, the concept of shared prefixes is related to Lempel-Ziv compression.)
*   **Plagiarism Detection:** Comparing text documents for overlapping phrases.

---

### 6. Efficiency and Complexity

*   **Alphabet Size ($\Sigma$)**: The number of possible characters.
*   **Number of Strings ($N$)**: The count of strings inserted.
*   **Maximum String Length ($M$)**: The length of the longest string.
*   **Total Length of all Strings ($L$)**: The sum of lengths of all strings.

| Operation             | Time Complexity (Standard Trie) | Space Complexity (Standard Trie) |
| :-------------------- | :------------------------------ | :------------------------------- |
| Insertion             | $O(M)$ (or $O(\text{length of string})$) | $O(L \times |\Sigma|)$ in worst case (if nodes store arrays/maps for children), $O(L)$ if efficient child lookup. |
| Membership Test       | $O(M)$                          |                                  |
| Prefix Search         | $O(M + K)$ where $K$ is number of matching strings |                                  |
| Deletion              | $O(M)$                          |                                  |

**Important Considerations for Space:**
*   If nodes store arrays of size $|\Sigma|$, space can be $O(L \times |\Sigma|)$.
*   If nodes use hash maps or balanced trees for children, space is closer to $O(L)$ but with higher constant factors.
*   Compressed tries can significantly reduce space, especially for sparse data or long common prefixes.

**Suffix Tries Complexity:**
*   Building a suffix trie for a string of length $n$: $O(n^2)$ time and $O(n^2)$ space in the worst case (e.g., "aaaaa...a"). This is generally too inefficient for large genomes.
*   **Suffix Trees** and **Suffix Arrays** are linear time ($O(n)$) and linear space ($O(n)$) alternatives that are much more practical for bioinformatics.

---

### 7. Practice Questions and Exercises

**Question 1:**
Construct a keyword tree for the following DNA sequences: "ACGT", "ACG", "AG", "ATCG".

**Answer 1:**
Alphabet: {A, C, G, T}
```
    (root)
      | A
      v
      C
      | G (End of "ACG")
      | | T
      | v
      | T (End of "ACGT")
      |
      G (End of "AG")
      |
      T
      | C
      v
      G (End of "ATCG")
```

**Question 2:**
Given the following keyword tree:
```
    (root)
      | A
      v
      P ---- P ---- L ---- E $
      |      |      |
      |      |      Y $
      |      |
      |      R ---- I ---- C ---- O ---- T $
      |
      C ---- T $
```
(where '$' denotes end of word)

a) What strings are stored in this trie?
b) Is "APP" a string in the trie? If not, why?
c) Does any string in the trie start with "APR"? If so, which one(s)?
d) Delete the string "APPLE". Show the resulting trie.

**Answer 2:**
a) Strings: "APPLE", "APPLY", "APRICOT", "ACT"
b) No, "APP" is not a string in the trie because the node representing "APP" is not marked as an end-of-word. It's a prefix of other words.
c) Yes, "APRICOT" starts with "APR".
d) Deleting "APPLE":
   - Unmark the 'E' node.
   - The 'E' node has no children and is not an end-of-word. Remove it.
   - The parent 'L' node now has only child 'Y'. It is not an end-of-word. Remove 'L'.
   - The parent 'P' node (after 'AP') now has children 'P' (leading to APPLY) and 'R' (leading to APRICOT). It remains.

   Resulting Trie:
   ```
       (root)
         | A
         v
         P ---- P ---- Y $
         |      |
         |      R ---- I ---- C ---- O ---- T $
         |
         C ---- T $
   ```

**Question 3:**
Consider the string "abracadabra".
a) List all its suffixes.
b) Briefly explain how a suffix trie would be constructed for this string.
c) How would you use a suffix trie to find all occurrences of the substring "abra" in "abracadabra"?

**Answer 3:**
a) Suffixes: "abracadabra", "bracadabra", "racadabra", "acadabra", "cadabra", "adabra", "dabra", "abra", "bra", "ra", "a"
b) A suffix trie is constructed by inserting each of these suffixes into a standard keyword tree. Each path from the root would spell out a suffix, and nodes would be marked as end-of-word for the suffix they represent.
c) To find all occurrences of "abra":
   1. Traverse the suffix trie starting from the root, following the characters 'a', 'b', 'r', 'a'.
   2. If the traversal succeeds, you reach a node representing "abra".
   3. The number of leaf nodes (or end-of-word markers) in the subtree rooted at this "abra" node corresponds to the number of times "abra" appears as a suffix starting position. More generally, for substring matching, count all end-of-word markers in the subtree. Each such marker represents a suffix that *starts* with "abra", indicating an occurrence of "abra" in the original string.
   The original string is "abracadabra".
   Suffixes starting with "abra":
   - "abracadabra" (occurrence at index 0)
   - "abra" (occurrence at index 7)
   So there are two occurrences.

---

### 8. Important Points to Remember

*   **Keyword trees (Tries) are efficient for prefix-based operations.**
*   **Each node represents a prefix.**
*   **Edges are labeled with characters.**
*   **End-of-word markers are crucial for distinguishing complete words.**
*   **Compressed tries reduce space by merging single-child paths.**
*   **Suffix tries are built from all suffixes of a string and are powerful for substring searching.**
*   **While keyword trees are conceptually important, suffix trees and suffix arrays are more practical for large-scale bioinformatics due to better space complexity.**
*   **The alphabet size significantly impacts the space complexity of standard tries.**

---
