---
title: "Red-Black Trees"
subject: "ADVANCED DATA STRUCTURES"
module: "Module 2: Advanced Tree Data Structures  "
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b364"
status: "completed"
scrapedAt: "2026-05-20T16:10:05.347Z"
---
# ADVANCED DATA STRUCTURES - Module 2: Advanced Tree Data Structures - Red-Black Trees

## Introduction

This module delves into Red-Black Trees, a type of self-balancing binary search tree. Red-Black Trees guarantee logarithmic time complexity for basic operations like insertion, deletion, and search, making them highly efficient for dynamic sets of data. Understanding their properties and implementation is crucial for advanced data structure knowledge.

## Learning Outcomes

By the end of this section, you should be able to:

*   Define Red-Black Trees and their properties.
*   Explain the need for self-balancing trees.
*   Understand the operations performed on Red-Black Trees (insertion, deletion, search).
*   Implement Red-Black Tree insertion and deletion algorithms.
*   Analyze the time complexity of Red-Black Tree operations.
*   Compare and contrast Red-Black Trees with other self-balancing trees like AVL trees.

## 1. Definition and Properties of Red-Black Trees

*   **Definition:** A Red-Black Tree is a self-balancing binary search tree where each node is colored either red or black.  This coloring and specific rules ensure that no path from the root to a leaf is more than twice as long as any other, keeping the tree relatively balanced.

*   **Properties:**

    *   **Property 1: Every node is either red or black.** This is the foundational property.
    *   **Property 2: The root is black.** This ensures that overall "black height" remains somewhat consistent across the tree.
    *   **Property 3: Every leaf (NIL) is black.**  NIL nodes are typically implemented as null pointers or sentinel nodes. They simplify the logic and maintain the tree's structure.  These are considered external or dummy nodes.
    *   **Property 4: If a node is red, then both its children are black.** This is a key balancing constraint.  It prevents having consecutive red nodes along a path, limiting the possible imbalance.
    *   **Property 5: For each node, all simple paths from the node to descendant leaves contain the same number of black nodes.** This is also known as *black-height* property. The black-height of a node x, bh(x), is the number of black nodes on any path from x (not including x) down to a leaf.

*   **Black-Height:** The black-height of a node is the number of black nodes on any path from that node (excluding the node itself) to a leaf. Because of property 5, this value is well-defined for each node. The black-height of a tree is the black-height of its root.

*   **Why these properties?**  These properties work together to maintain a relatively balanced tree.  The "no two consecutive red nodes" and "equal black height" rules ensure that the longest path from the root to a leaf is no more than twice as long as the shortest path.

*   **Example:**

    ```
          (Black 10)
         /           \
    (Red 5)         (Red 15)
    /      \        /      \
    (Black 2)  (Black 7) (Black 12) (Black 18)
    /   \       /  \       /  \       /  \
    NIL   NIL   NIL NIL   NIL NIL   NIL NIL
    ```

    This is a valid Red-Black Tree. Notice that:

    *   The root (10) is black.
    *   All leaves (NIL) are implicitly black.
    *   No red node has a red child.
    *   The black-height of the root is 2 (paths: 10 -> 5 -> 2 -> NIL, 10 -> 5 -> 7 -> NIL, etc.).  All paths from the root to a leaf contain two black nodes (excluding the root itself).

## 2. The Need for Self-Balancing Trees

*   **Problem with Unbalanced Binary Search Trees:** A standard Binary Search Tree (BST) can degenerate into a linked list in the worst-case scenario (e.g., inserting elements in sorted order). This results in O(n) time complexity for search, insertion, and deletion operations.

*   **Self-Balancing as a Solution:** Self-balancing trees automatically adjust their structure after insertions and deletions to maintain a balanced state. This ensures logarithmic time complexity (O(log n)) for most operations, significantly improving performance for large datasets.

*   **Benefits of Logarithmic Time Complexity:** O(log n) complexity provides a significant performance advantage over O(n) as the number of elements grows.  For example, searching in a balanced tree with 1 million elements takes approximately 20 operations (log<sub>2</sub>(1,000,000) ≈ 20) compared to potentially 1 million operations in a worst-case BST.

## 3. Operations on Red-Black Trees

The primary operations are search, insertion, and deletion. The search operation is the same as in a standard BST.  Insertion and deletion require additional steps to maintain the Red-Black Tree properties. These steps often involve rotations and recoloring.

*   **Search:** Search operation is identical to a standard BST search.  Time complexity: O(log n).

*   **Insertion:** Involves these steps:
    1.  **Standard BST Insertion:** Insert the new node as in a regular BST.  Initially color it *red*.
    2.  **Restoration of Properties:** If the insertion violates Red-Black Tree properties (specifically, a red node with a red child), perform rotations and recoloring to restore the properties.
    3.  **Recoloring:** Change the color of nodes to ensure that no two consecutive red nodes exist along a path and that the black height remains consistent.
    4.  **Rotations:**  Two types of rotations are used: *left rotation* and *right rotation*.  Rotations rearrange the tree structure while maintaining the BST property.

*   **Deletion:** Involves these steps:
    1.  **Standard BST Deletion:** Delete the node as in a regular BST.  This might involve finding a successor or predecessor.
    2.  **Restoration of Properties:**  If the deletion violates Red-Black Tree properties (specifically, changes to black height), perform rotations and recoloring to restore the properties. This is often more complex than insertion.

## 4. Implementation of Red-Black Tree Operations

The implementation focuses on insertion and deletion since the search is the same as with a standard BST.

**4.1 Insertion**

```python
class Node:
    def __init__(self, data, color="red", parent=None, left=None, right=None):
        self.data = data
        self.color = color
        self.parent = parent
        self.left = left
        self.right = right

class RedBlackTree:
    def __init__(self):
        self.NIL = Node(None, color="black")  # Sentinel node for leaves
        self.root = self.NIL

    def left_rotate(self, x):
        y = x.right
        x.right = y.left
        if y.left != self.NIL:
            y.left.parent = x

        y.parent = x.parent
        if x.parent is None:
            self.root = y
        elif x == x.parent.left:
            x.parent.left = y
        else:
            x.parent.right = y

        y.left = x
        x.parent = y


    def right_rotate(self, y):
        x = y.left
        y.left = x.right
        if x.right != self.NIL:
            x.right.parent = y

        x.parent = y.parent
        if y.parent is None:
            self.root = x
        elif y == y.parent.left:
            y.parent.left = x
        else:
            y.parent.right = x

        x.right = y
        y.parent = x


    def insert(self, data):
        node = Node(data, color="red")
        node.left = self.NIL
        node.right = self.NIL

        y = None
        x = self.root

        while x != self.NIL:
            y = x
            if node.data < x.data:
                x = x.left
            else:
                x = x.right

        node.parent = y
        if y is None:
            self.root = node
        elif node.data < y.data:
            y.left = node
        else:
            y.right = node

        if node.parent is None:
            node.color = "black"
            return

        if node.parent.parent is None:
            return

        self.fix_insert(node)

    def fix_insert(self, k):
        while k.parent is not None and k.parent.color == "red":
            if k.parent == k.parent.parent.right:
                u = k.parent.parent.left  # Uncle
                if u is not None and u.color == "red":
                    u.color = "black"
                    k.parent.color = "black"
                    k.parent.parent.color = "red"
                    k = k.parent.parent
                else:
                    if k == k.parent.left:
                        k = k.parent
                        self.right_rotate(k)
                    k.parent.color = "black"
                    k.parent.parent.color = "red"
                    self.left_rotate(k.parent.parent)
            else:
                u = k.parent.parent.right # Uncle

                if u is not None and u.color == "red":
                    u.color = "black"
                    k.parent.color = "black"
                    k.parent.parent.color = "red"
                    k = k.parent.parent
                else:
                    if k == k.parent.right:
                        k = k.parent
                        self.left_rotate(k)
                    k.parent.color = "black"
                    k.parent.parent.color = "red"
                    self.right_rotate(k.parent.parent)

            if k == self.root:
                break

        self.root.color = "black"


# Example Usage
tree = RedBlackTree()
tree.insert(10)
tree.insert(5)
tree.insert(15)
tree.insert(2)
tree.insert(7)
tree.insert(12)
tree.insert(18)
```

**Explanation:**

*   **`Node` Class:** Represents a node in the tree, including data, color (red or black), parent, left child, and right child.
*   **`RedBlackTree` Class:** The main class that encapsulates the Red-Black Tree structure and operations.
*   **`NIL` Node:**  A sentinel node that represents null leaves.  This simplifies the code and avoids many null checks. Crucially, it's colored black.
*   **`left_rotate(x)` and `right_rotate(y)`:** These functions perform left and right rotations on the tree around a given node.  These rotations are essential for maintaining balance.
*   **`insert(data)`:** The main insertion function.  It first inserts the node as in a BST, then calls `fix_insert` to restore Red-Black Tree properties.
*   **`fix_insert(k)`:**  This is the core of the insertion process. It iterates upwards from the newly inserted node (`k`), checking for violations of Red-Black Tree properties.  It uses rotations and recoloring based on the "uncle" of the node (the sibling of its parent) to restore balance. The cases are based on whether the uncle is red or black and whether the inserted node is a left or right child.

**4.2 Deletion**

Deletion is considerably more complex than insertion and is usually implemented with multiple helper functions. A basic outline is presented below, a complete and fully tested implementation would be very lengthy.

```python
class RedBlackTree: # (Continuing from the Insertion Implementation)

    def transplant(self, u, v):
        if u.parent is None:
            self.root = v
        elif u == u.parent.left:
            u.parent.left = v
        else:
            u.parent.right = v
        v.parent = u.parent

    def delete_node_helper(self, node, key):
        z = self.NIL
        while node != self.NIL:
            if node.data == key:
                z = node
            if node.data <= key:
                node = node.right
            else:
                node = node.left

        if z == self.NIL:
            print("Couldn't find key in the tree")
            return

       # Similar to BST Deletion with Successor handling, but keeping track of colors
       # and running the fix_delete function after.
       # This section is simplified for brevity and focuses on concept.

        y = z  # Node to be deleted/spliced out
        y_original_color = y.color
        if z.left == self.NIL:
            x = z.right # x is the child that will replace y
            self.transplant(z, z.right)
        elif z.right == self.NIL:
            x = z.left
            self.transplant(z, z.left)
        else: # Has two children
            y = self.minimum(z.right) # successor
            y_original_color = y.color
            x = y.right
            if y.parent == z: # If y is directly a child of z
                x.parent = y
            else:
                self.transplant(y, y.right)
                y.right = z.right
                y.right.parent = y

            self.transplant(z, y)
            y.left = z.left
            y.left.parent = y
            y.color = z.color

        if y_original_color == "black":
            self.fix_delete(x)

    def delete(self, data):
        self.delete_node_helper(self.root, data)

    def fix_delete(self, x): # x is the extra black node
        while x != self.root and x.color == "black":
            if x == x.parent.left:
                s = x.parent.right  # Sibling
                if s.color == "red":
                    s.color = "black"
                    x.parent.color = "red"
                    self.left_rotate(x.parent)
                    s = x.parent.right

                if s.left.color == "black" and s.right.color == "black":
                    s.color = "red"
                    x = x.parent
                else:
                    if s.right.color == "black":
                        s.left.color = "black"
                        s.color = "red"
                        self.right_rotate(s)
                        s = x.parent.right

                    s.color = x.parent.color
                    x.parent.color = "black"
                    s.right.color = "black"
                    self.left_rotate(x.parent)
                    x = self.root
            else: # Symmetric case: x is a right child
               # The symmetric case follows the same logic, but with left and right
               # directions reversed. (Omitted for brevity)
                pass # Implement symmetric case here.

        x.color = "black"  # Ensure the root is always black

    def minimum(self, node):
        while node.left != self.NIL:
            node = node.left
        return node


# Example Usage (Continuing from Insertion Example)
tree.delete(5) # Delete a node
```

**Explanation of Deletion (High-Level):**

1.  **Standard BST Deletion:**  The node is removed like in a standard BST. We might need to find the successor (minimum of the right subtree) if the node has two children.
2.  **Track the Color:**  It's crucial to track the color of the node that is being effectively removed (or the node that is moved into its place).
3.  **`fix_delete(x)`:** This function is called if the removed/moved node was black.  The parameter `x` represents the node that now has an "extra black" because of the deletion. This violates the black-height property.
4.  **Cases in `fix_delete`:**  The `fix_delete` function has several cases, based on the color of `x`'s sibling (`s`) and the colors of `s`'s children. The goal is to redistribute the black nodes in the tree to restore the black-height property. This typically involves rotations and recoloring. The cases ensure that the "extra black" is either absorbed, moved up the tree, or eliminated through rotations and color changes. The loop continues until x reaches the root (and the extra black can be removed) or x becomes red (and can be changed to black).  The cases are symmetric based on whether `x` is a left or right child.
5. **Transplant:** This helper function replaces one subtree as a child of its parent with another subtree. It handles updating the parent pointers accordingly.
6. **Minimum:** Finds the minimum node in a subtree, used for finding the successor during deletion.

**Important Notes on Deletion Implementation:**

*   The deletion implementation is notoriously complex and error-prone. The above code is a simplified conceptual illustration, *not* a production-ready implementation.  A complete, robust implementation would be significantly longer and require meticulous attention to detail.
*   Consider using well-tested libraries or resources if you need a reliable Red-Black Tree implementation.

## 5. Time Complexity Analysis

*   **Search:** O(log n) - Due to the balanced nature of the tree.
*   **Insertion:** O(log n) -  The initial insertion takes O(log n), and the fix-up (rotations and recoloring) takes at most O(log n) because it iterates up the tree.
*   **Deletion:** O(log n) -  The initial deletion takes O(log n), and the fix-up (rotations and recoloring) takes at most O(log n) as well.

## 6. Comparison with Other Self-Balancing Trees (e.g., AVL Trees)

*   **AVL Trees:**
    *   **Balancing:** AVL trees are *more* strictly balanced than Red-Black Trees. An AVL tree requires that for every node, the heights of its left and right subtrees differ by at most 1.
    *   **Height:** AVL trees have a lower maximum height compared to Red-Black Trees.
    *   **Rotations:** AVL trees might require more rotations during insertion and deletion to maintain their strict balance.
    *   **Performance:**
        *   AVL trees provide faster lookups than Red-Black Trees because they are more balanced.
        *   Red-Black Trees generally provide faster insertion and deletion than AVL trees because fewer rotations are needed to maintain balance.
*   **Red-Black Trees:**
    *   **Balancing:** Red-Black Trees are "relaxed" balanced, which allows for less frequent rotations during insertion and deletion.
    *   **Height:** Red-Black Trees can be slightly taller than AVL trees in the worst case.
    *   **Rotations:** Red-Black Trees typically require fewer rotations during insertion and deletion than AVL trees.
    *   **Performance:**
        *   Slightly slower lookups than AVL trees.
        *   Faster insertion and deletion than AVL trees in general.

*   **Use Cases:**

    *   **AVL Trees:** Suitable when lookups are frequent and insertions/deletions are relatively rare.
    *   **Red-Black Trees:**  A good choice when insertions and deletions are frequent, even at the expense of slightly slower lookups. Commonly used in implementations of maps and sets (e.g., in the Java `TreeMap` and `TreeSet` classes).

*   **Summary Table:**

    | Feature         | AVL Trees                      | Red-Black Trees                 |
    |-----------------|---------------------------------|---------------------------------|
    | Balancing       | Strict                         | Relaxed                         |
    | Height          | Lower                          | Higher                          |
    | Rotations (I/D) | More frequent                 | Less frequent                 |
    | Lookup          | Faster                         | Slightly Slower               |
    | Insertion/Deletion | Slower                         | Faster                          |
    | Implementation  | More complex                    | Slightly less complex           |

## Important Points to Remember

*   Red-Black Trees guarantee O(log n) time complexity for search, insertion, and deletion.
*   The five properties are crucial for maintaining balance.
*   Rotations and recoloring are the key mechanisms for restoring Red-Black Tree properties after insertions and deletions.
*   Deletion is significantly more complex than insertion.
*   Choose Red-Black Trees when insertions and deletions are frequent.  Consider AVL trees if lookups are the primary operation.
*   Use sentinel (NIL) nodes to simplify code.

## Practice Questions and Exercises

**Question 1:**

Which of the following is NOT a property of a Red-Black Tree?

a) Every node is either red or black.
b) The root is red.
c) Every leaf (NIL) is black.
d) If a node is red, then both its children are black.

**Answer:** b) The root is red. The root must be black.

**Question 2:**

What is the time complexity of inserting a node into a Red-Black Tree?

a) O(n)
b) O(1)
c) O(log n)
d) O(n log n)

**Answer:** c) O(log n)

**Question 3:**

Explain the purpose of rotations in Red-Black Tree operations.

**Answer:** Rotations rearrange the tree structure to maintain balance after insertions or deletions. They shift nodes and subtrees while preserving the binary search tree property, helping to restore Red-Black Tree properties that might have been violated.

**Question 4:**

What is the black-height of a node in a Red-Black Tree?

**Answer:** The black-height of a node is the number of black nodes on any path from that node (excluding the node itself) to a leaf.

**Question 5:**

Describe a scenario where using an AVL tree might be more appropriate than a Red-Black Tree.

**Answer:** If you need to perform frequent searches and relatively few insertions and deletions, an AVL tree might be more appropriate. AVL trees are more strictly balanced, which leads to faster lookups compared to Red-Black Trees.

**Exercise:**

1.  Draw a valid Red-Black Tree containing the numbers 1, 2, 3, 4, 5, 6, and 7.  Ensure it adheres to all Red-Black Tree properties.
2.  Using the insertion code above, manually trace the insertion of the values 4, 7, 12, 15 into an empty Red-Black Tree, showing the tree structure and color changes after each insertion.  Pay close attention to when rotations are performed.  (Note:  You can use a debugger to help you with the tracing).

```
