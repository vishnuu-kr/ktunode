---
title: "Implement a dictionary of word-meaning pairs using binary search trees."
subject: "DATA STRUCTURES LAB"
module: "Module 8: Implement a dictionary of word"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ae74"
status: "completed"
scrapedAt: "2026-05-20T16:23:22.078Z"
---
# DATA STRUCTURES LAB - Module 8: Implementing a Dictionary with Binary Search Trees

**Topic:** Implement a dictionary of word-meaning pairs using binary search trees.

**Learning Outcomes:**

*   Understand the concept of a dictionary as an Abstract Data Type (ADT).
*   Implement a binary search tree (BST) data structure.
*   Understand the properties of a binary search tree and its application in dictionary implementation.
*   Implement operations such as insertion, search, deletion, and traversal in a BST-based dictionary.
*   Analyze the time complexity of different operations on a BST-based dictionary.

## 1. Introduction to Dictionaries (as ADTs)

*   **Definition:** A dictionary, also known as a map or associative array, is an abstract data type (ADT) that stores data in key-value pairs.  Each key in the dictionary is associated with a specific value.

*   **Key Properties:**
    *   **Uniqueness of Keys:**  Each key must be unique within the dictionary.  No two entries can have the same key.
    *   **Key-Value Association:**  There's a clear mapping from each key to its corresponding value.  Given a key, you can efficiently retrieve its associated value.

*   **Common Operations:**
    *   **Insert (Put/Add):**  Adds a new key-value pair to the dictionary.
    *   **Search (Get/Find):**  Retrieves the value associated with a given key.
    *   **Delete (Remove):**  Removes a key-value pair from the dictionary.
    *   **Update (Replace):**  Modifies the value associated with a given key.
    *   **Size:**  Returns the number of key-value pairs in the dictionary.
    *   **IsEmpty:**  Checks if the dictionary is empty.

*   **Example:** A phone book is a real-world example of a dictionary, where names are the keys and phone numbers are the values.

## 2. Binary Search Trees (BSTs)

*   **Definition:** A binary search tree (BST) is a binary tree with the following properties for each node:
    *   The left subtree of a node contains only nodes with keys *less than* the node's key.
    *   The right subtree of a node contains only nodes with keys *greater than* the node's key.
    *   Both the left and right subtrees must also be binary search trees.

*   **Key Concepts:**
    *   **Node:** A basic unit of the tree, containing a key (word), a value (meaning), and pointers to its left and right children.
    *   **Root:** The topmost node in the tree.
    *   **Leaf:** A node with no children.
    *   **Subtree:** A portion of the tree consisting of a node and all its descendants.
    *   **Height:** The length of the longest path from the root to a leaf.
    *   **Balanced BST:**  A BST where the height of the left and right subtrees of any node differs by at most 1. Balanced BSTs improve performance.
    *   **Unbalanced BST:** A BST where the height difference between left and right subtrees can be significant, leading to performance degradation (approaching linear time complexity in the worst case).

*   **Example:**

    ```
           apple (definition of apple)
          /     \
      banana (definition of banana)  orange (definition of orange)
       /
    apricot (definition of apricot)
    ```

    In this example, "apple" is the root, "apricot" is a leaf.  Note how the left subtree of "apple" contains words lexicographically smaller than "apple," and the right subtree contains words lexicographically greater.

## 3. BST Implementation for Dictionary

*   **Node Structure:**

    ```python
    class Node:
        def __init__(self, key, value):
            self.key = key  # Word
            self.value = value # Meaning
            self.left = None
            self.right = None
    ```

*   **Dictionary Class:**

    ```python
    class Dictionary:
        def __init__(self):
            self.root = None
    ```

## 4. BST Operations for Dictionary

*   **Insertion (Insert/Put):**

    1.  Start at the root node.
    2.  Compare the key to be inserted with the key of the current node.
    3.  If the key is less than the current node's key, move to the left child.
    4.  If the key is greater than the current node's key, move to the right child.
    5.  If the key is equal to the current node's key (duplicate key), handle appropriately (e.g., update the value or raise an error – usually update in a dictionary).
    6.  Repeat steps 2-5 until you reach a leaf node (an empty spot).
    7.  Create a new node with the key-value pair and insert it as the appropriate child (left or right) of the leaf node's parent.

    ```python
    def insert(self, key, value):
        def _insert_recursive(node, key, value):
            if node is None:
                return Node(key, value)
            if key < node.key:
                node.left = _insert_recursive(node.left, key, value)
            elif key > node.key:
                node.right = _insert_recursive(node.right, key, value)
            else:
                node.value = value  # Update existing key's value
            return node

        self.root = _insert_recursive(self.root, key, value)
    ```

*   **Search (Get/Find):**

    1.  Start at the root node.
    2.  Compare the key to be searched with the key of the current node.
    3.  If the key is less than the current node's key, move to the left child.
    4.  If the key is greater than the current node's key, move to the right child.
    5.  If the key is equal to the current node's key, return the associated value.
    6.  If you reach a leaf node (an empty spot) without finding the key, the key is not in the dictionary. Return `None` or raise an exception.

    ```python
    def search(self, key):
        def _search_recursive(node, key):
            if node is None:
                return None  # Key not found
            if key < node.key:
                return _search_recursive(node.left, key)
            elif key > node.key:
                return _search_recursive(node.right, key)
            else:
                return node.value  # Key found, return the value

        return _search_recursive(self.root, key)
    ```

*   **Deletion (Remove):**

    This is the most complex operation.  There are three cases:

    1.  **Node to be deleted is a leaf node:** Simply remove the node.

    2.  **Node to be deleted has only one child:**  Replace the node with its child.

    3.  **Node to be deleted has two children:**
        *   Find the *inorder successor* (the smallest node in the right subtree) or the *inorder predecessor* (the largest node in the left subtree).
        *   Replace the node to be deleted with its inorder successor (or predecessor).
        *   Delete the inorder successor (or predecessor) from its original position (which will be a leaf or have only one child, making the deletion simpler).

    ```python
    def delete(self, key):
        def _delete_recursive(node, key):
            if node is None:
                return None  # Key not found

            if key < node.key:
                node.left = _delete_recursive(node.left, key)
            elif key > node.key:
                node.right = _delete_recursive(node.right, key)
            else:  # Key found
                # Case 1: Leaf node
                if node.left is None and node.right is None:
                    return None
                # Case 2: One child
                elif node.left is None:
                    return node.right
                elif node.right is None:
                    return node.left
                # Case 3: Two children
                else:
                    # Find inorder successor (smallest in right subtree)
                    successor = self._find_min(node.right)
                    node.key = successor.key
                    node.value = successor.value
                    node.right = _delete_recursive(node.right, successor.key)
            return node

        self.root = _delete_recursive(self.root, key)


    def _find_min(self, node):
        current = node
        while current.left is not None:
            current = current.left
        return current
    ```

*   **Traversal:**  (Not strictly required for dictionary functionality but useful for debugging and analysis)
    *   **Inorder Traversal:**  Traverses the left subtree, then the current node, then the right subtree (yields keys in sorted order).
    *   **Preorder Traversal:**  Traverses the current node, then the left subtree, then the right subtree.
    *   **Postorder Traversal:**  Traverses the left subtree, then the right subtree, then the current node.

    ```python
    def inorder_traversal(self):
        def _inorder_recursive(node):
            if node:
                _inorder_recursive(node.left)
                print(f"{node.key}: {node.value}")
                _inorder_recursive(node.right)

        _inorder_recursive(self.root)
    ```

## 5. Time Complexity Analysis

| Operation   | Average Case | Worst Case |
| ----------- | ------------ | ---------- |
| Insert      | O(log n)     | O(n)       |
| Search      | O(log n)     | O(n)       |
| Delete      | O(log n)     | O(n)       |

*   **Explanation:**
    *   **Average Case:**  If the BST is reasonably balanced, operations typically take logarithmic time (O(log n)), where n is the number of nodes in the tree.  This is because, on average, you halve the search space with each comparison.
    *   **Worst Case:** If the BST is skewed (e.g., all nodes are inserted in increasing order), it degenerates into a linked list.  In this case, operations take linear time (O(n)), as you might have to traverse all nodes in the worst case.

## 6. Complete Example Code (Python)

```python
class Node:
    def __init__(self, key, value):
        self.key = key
        self.value = value
        self.left = None
        self.right = None

class Dictionary:
    def __init__(self):
        self.root = None

    def insert(self, key, value):
        def _insert_recursive(node, key, value):
            if node is None:
                return Node(key, value)
            if key < node.key:
                node.left = _insert_recursive(node.left, key, value)
            elif key > node.key:
                node.right = _insert_recursive(node.right, key, value)
            else:
                node.value = value  # Update existing key's value
            return node

        self.root = _insert_recursive(self.root, key, value)

    def search(self, key):
        def _search_recursive(node, key):
            if node is None:
                return None  # Key not found
            if key < node.key:
                return _search_recursive(node.left, key)
            elif key > node.key:
                return _search_recursive(node.right, key)
            else:
                return node.value  # Key found, return the value

        return _search_recursive(self.root, key)

    def delete(self, key):
        def _delete_recursive(node, key):
            if node is None:
                return None  # Key not found

            if key < node.key:
                node.left = _delete_recursive(node.left, key)
            elif key > node.key:
                node.right = _delete_recursive(node.right, key)
            else:  # Key found
                # Case 1: Leaf node
                if node.left is None and node.right is None:
                    return None
                # Case 2: One child
                elif node.left is None:
                    return node.right
                elif node.right is None:
                    return node.left
                # Case 3: Two children
                else:
                    # Find inorder successor (smallest in right subtree)
                    successor = self._find_min(node.right)
                    node.key = successor.key
                    node.value = successor.value
                    node.right = _delete_recursive(node.right, successor.key)
            return node

        self.root = _delete_recursive(self.root, key)


    def _find_min(self, node):
        current = node
        while current.left is not None:
            current = current.left
        return current

    def inorder_traversal(self):
        def _inorder_recursive(node):
            if node:
                _inorder_recursive(node.left)
                print(f"{node.key}: {node.value}")
                _inorder_recursive(node.right)

        _inorder_recursive(self.root)


# Example Usage
my_dictionary = Dictionary()

my_dictionary.insert("apple", "A fruit that grows on trees.")
my_dictionary.insert("banana", "A long, curved fruit.")
my_dictionary.insert("orange", "A citrus fruit with a thick peel.")
my_dictionary.insert("apricot", "A small, orange, stone fruit.")


print("Dictionary Contents (Inorder Traversal):")
my_dictionary.inorder_traversal()

print("\nSearching for 'banana':", my_dictionary.search("banana"))  # Output: A long, curved fruit.
print("Searching for 'grape':", my_dictionary.search("grape"))    # Output: None

my_dictionary.delete("banana")
print("\nDictionary after deleting 'banana':")
my_dictionary.inorder_traversal()
```

## 7. Important Points to Remember

*   BSTs provide an efficient way to implement dictionaries, especially when the data is inserted in a random order, leading to a balanced tree.
*   Unbalanced BSTs can lead to poor performance (O(n) time complexity), making it crucial to consider balancing techniques (e.g., AVL trees, red-black trees) for real-world applications.
*   The choice between BSTs and other dictionary implementations (e.g., hash tables) depends on the specific application requirements and the expected distribution of keys.  Hash tables generally offer better average-case performance for search and insertion but don't provide inherent ordering of keys like BSTs do.
*   Understanding the different cases for deletion (especially the two-child case) is critical for correct implementation.
*   Consider the trade-offs between code complexity and performance when choosing a BST implementation. More complex balancing algorithms improve performance at the expense of increased code complexity.

## 8. Practice Questions/Exercises

**Question 1:**

What is the key property that distinguishes a binary search tree from a regular binary tree?

**Answer:** In a BST, for each node, all keys in its left subtree are less than the node's key, and all keys in its right subtree are greater than the node's key.

**Question 2:**

Explain the three cases of deletion in a BST.

**Answer:**
1.  **Leaf Node:** Remove the node directly.
2.  **One Child:** Replace the node with its child.
3.  **Two Children:** Replace the node with its inorder successor (or predecessor) and then delete the successor (or predecessor).

**Question 3:**

What is the time complexity of searching for an element in a balanced binary search tree? What about in a skewed binary search tree?

**Answer:**
*   **Balanced BST:** O(log n)
*   **Skewed BST:** O(n)

**Question 4:**

Implement the `size()` and `isEmpty()` methods for the `Dictionary` class.

**Answer:**

```python
    def size(self):
        def _size_recursive(node):
            if node is None:
                return 0
            return 1 + _size_recursive(node.left) + _size_recursive(node.right)

        return _size_recursive(self.root)

    def isEmpty(self):
        return self.root is None
```

**Question 5:**

How would you modify the `insert()` method to prevent duplicate keys from being inserted into the dictionary?

**Answer:**  The provided code already handles duplicate keys by *updating* the value associated with the existing key, rather than creating a duplicate node.  If you *wanted* to prevent the update, you could modify the `insert` function to simply return (do nothing) if `key == node.key` in the `_insert_recursive` function. You might also raise an exception.

By mastering these concepts and practicing the implementation, you'll be well-equipped to build and utilize dictionary data structures using binary search trees effectively.
