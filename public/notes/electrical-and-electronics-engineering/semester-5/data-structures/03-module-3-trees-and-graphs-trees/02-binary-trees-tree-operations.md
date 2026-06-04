---
title: "Binary Trees-Tree Operations"
subject: "DATA STRUCTURES"
module: "Module 3: Trees and Graphs: Trees"
branch: "Electrical and Electronics Engineering"
semester: 5
topicId: "68a200852b85456187f363ea"
status: "completed"
scrapedAt: "2026-05-23T16:20:43.956Z"
---
# Data Structures: Module 3 - Trees and Graphs: Trees

## Topic: Binary Trees - Tree Operations

---

### **1. Introduction to Binary Trees**

A binary tree is a hierarchical data structure in which each node has at most two children, referred to as the *left child* and the *right child*. It's a fundamental building block for many more complex tree structures and algorithms.

**Key Concepts:**

*   **Root:** The topmost node of the tree.
*   **Node:** An element in the tree, containing data and pointers to its children.
*   **Edge:** A connection between a parent node and its child node.
*   **Child:** A node directly connected to a parent node.
*   **Parent:** A node directly connected to a child node.
*   **Leaf Node (External Node):** A node with no children.
*   **Internal Node:** A node with at least one child.
*   **Depth of a Node:** The number of edges from the root to the node. The root has a depth of 0.
*   **Height of a Node:** The number of edges on the longest path from the node down to a leaf. A leaf node has a height of 0.
*   **Height of a Tree:** The height of its root node. An empty tree has a height of -1.
*   **Siblings:** Nodes that share the same parent.
*   **Subtree:** A node and all of its descendants.

**Representations of Binary Trees:**

*   **Linked Representation:** Each node is a structure/object containing data and pointers to its left and right children. This is the most common and flexible representation.

    ```c
    // Example (Horowitz, Sahni, Freed - Fundamentals of Data Structures in C)
    typedef struct TreeNode {
        int data;
        struct TreeNode *left;
        struct TreeNode *right;
    } TreeNode;
    ```

*   **Array Representation:** Suitable for *complete* binary trees where nodes are filled level by level. The parent of node at index `i` is at `(i-1)/2`, and children are at `2*i + 1` (left) and `2*i + 2` (right). This can be space-inefficient for sparse trees.

**Example:**

Consider a binary tree representing the expression `(a + b) * c`.

```
        *
       / \
      +   c
     / \
    a   b
```

*   Root: `*`
*   Leaves: `a`, `b`, `c`
*   Internal nodes: `*`, `+`
*   Depth of `c`: 1
*   Height of `+`: 1
*   Height of the tree: 2

---

### **2. Basic Tree Operations**

These operations are fundamental for manipulating and querying binary trees.

#### **2.1 Tree Traversal**

Traversing a tree means visiting each node exactly once in a systematic way. There are three primary depth-first traversal methods:

*   **In-order Traversal (Left, Root, Right):**
    *   Visit the left subtree.
    *   Visit the root node.
    *   Visit the right subtree.
    *   **Property:** For a Binary Search Tree (BST), in-order traversal visits nodes in ascending order of their keys.
    *   **Algorithm (Recursive):**
        ```
        InOrder(node):
          if node is not NULL:
            InOrder(node.left)
            Visit(node) // Process node's data
            InOrder(node.right)
        ```
    *   **Algorithm (Iterative using Stack):**
        ```
        InOrderIterative(root):
          stack = empty
          current = root
          while current is not NULL or stack is not empty:
            while current is not NULL:
              push current onto stack
              current = current.left
            current = pop from stack
            Visit(current)
            current = current.right
        ```

*   **Pre-order Traversal (Root, Left, Right):**
    *   Visit the root node.
    *   Visit the left subtree.
    *   Visit the right subtree.
    *   **Property:** Useful for creating a copy of the tree or for expression trees where the root represents the operation.
    *   **Algorithm (Recursive):**
        ```
        PreOrder(node):
          if node is not NULL:
            Visit(node) // Process node's data
            PreOrder(node.left)
            PreOrder(node.right)
        ```
    *   **Algorithm (Iterative using Stack):**
        ```
        PreOrderIterative(root):
          if root is NULL: return
          stack = empty
          push root onto stack
          while stack is not empty:
            current = pop from stack
            Visit(current)
            if current.right is not NULL:
              push current.right onto stack
            if current.left is not NULL:
              push current.left onto stack
        ```

*   **Post-order Traversal (Left, Right, Root):**
    *   Visit the left subtree.
    *   Visit the right subtree.
    *   Visit the root node.
    *   **Property:** Useful for deleting a tree (children are processed before the parent) or for evaluating expression trees.
    *   **Algorithm (Recursive):**
        ```
        PostOrder(node):
          if node is not NULL:
            PostOrder(node.left)
            PostOrder(node.right)
            Visit(node) // Process node's data
        ```
    *   **Algorithm (Iterative using Two Stacks):**
        ```
        PostOrderIterative(root):
          if root is NULL: return
          stack1 = empty
          stack2 = empty
          push root onto stack1
          while stack1 is not empty:
            current = pop from stack1
            push current onto stack2
            if current.left is not NULL:
              push current.left onto stack1
            if current.right is not NULL:
              push current.right onto stack1
          while stack2 is not empty:
            Visit(pop from stack2)
        ```

*   **Level-order Traversal (Breadth-First Traversal):**
    *   Visit nodes level by level, from left to right within each level.
    *   **Property:** Useful for finding the shortest path in an unweighted graph (when applied to trees as a special case) or for level-related operations.
    *   **Algorithm (using Queue):**
        ```
        LevelOrder(root):
          if root is NULL: return
          queue = empty
          enqueue root
          while queue is not empty:
            current = dequeue from queue
            Visit(current)
            if current.left is not NULL:
              enqueue current.left
            if current.right is not NULL:
              enqueue current.right
        ```

#### **2.2 Insertion**

Inserting a new node into a binary tree. The strategy depends on the type of binary tree. For a general binary tree, we might insert it as a leaf, or based on some rule. For a Binary Search Tree (BST), insertion follows a specific rule to maintain the BST property.

*   **Insertion in a Binary Search Tree (BST):**
    *   Start at the root.
    *   If the tree is empty, the new node becomes the root.
    *   If the new node's key is less than the current node's key, go to the left child.
    *   If the new node's key is greater than the current node's key, go to the right child.
    *   Repeat until an empty child pointer is found, and insert the new node there.

    ```c
    // Example (Conceptual, based on Horowitz, Sahni, Freed)
    TreeNode* insertBST(TreeNode* root, int key) {
        if (root == NULL) {
            TreeNode* newNode = (TreeNode*)malloc(sizeof(TreeNode));
            newNode->data = key;
            newNode->left = NULL;
            newNode->right = NULL;
            return newNode;
        }
        if (key < root->data) {
            root->left = insertBST(root->left, key);
        } else if (key > root->data) {
            root->right = insertBST(root->right, key);
        }
        // If key is equal, we might ignore it or handle duplicates as per requirements
        return root;
    }
    ```

#### **2.3 Deletion**

Deleting a node from a binary tree is more complex, especially in a BST, as the tree structure must be maintained.

*   **Deletion in a Binary Search Tree (BST):** There are three cases for the node to be deleted:
    1.  **Node is a Leaf:** Simply remove the node.
    2.  **Node has One Child:** Replace the node with its only child.
    3.  **Node has Two Children:**
        *   Find the *in-order successor* (smallest key in the right subtree) OR the *in-order predecessor* (largest key in the left subtree).
        *   Copy the successor's (or predecessor's) data into the node to be deleted.
        *   Recursively delete the successor (or predecessor) from its original position. The successor/predecessor will have at most one child, simplifying its deletion.

    ```c
    // Helper function to find the node with the minimum value in a BST
    TreeNode* findMin(TreeNode* node) {
        while (node->left != NULL) {
            node = node->left;
        }
        return node;
    }

    // Example (Conceptual, based on Horowitz, Sahni, Freed)
    TreeNode* deleteBST(TreeNode* root, int key) {
        if (root == NULL) return root;

        if (key < root->data) {
            root->left = deleteBST(root->left, key);
        } else if (key > root->data) {
            root->right = deleteBST(root->right, key);
        } else {
            // Node with the key found

            // Case 1: Node with only one child or no child
            if (root->left == NULL) {
                TreeNode* temp = root->right;
                free(root);
                return temp;
            } else if (root->right == NULL) {
                TreeNode* temp = root->left;
                free(root);
                return temp;
            }

            // Case 3: Node with two children
            // Get the in-order successor (smallest in the right subtree)
            TreeNode* temp = findMin(root->right);

            // Copy the in-order successor's content to this node
            root->data = temp->data;

            // Delete the in-order successor
            root->right = deleteBST(root->right, temp->data);
        }
        return root;
    }
    ```

#### **2.4 Searching**

Finding a node with a specific key in the tree.

*   **Searching in a Binary Search Tree (BST):**
    *   Start at the root.
    *   If the tree is empty or the root is the target, return the node.
    *   If the target key is less than the current node's key, search in the left subtree.
    *   If the target key is greater than the current node's key, search in the right subtree.

    ```c
    // Example (Conceptual, based on Horowitz, Sahni, Freed)
    TreeNode* searchBST(TreeNode* root, int key) {
        if (root == NULL || root->data == key) {
            return root;
        }
        if (key < root->data) {
            return searchBST(root->left, key);
        }
        return searchBST(root->right, key);
    }
    ```

#### **2.5 Finding Minimum/Maximum**

*   **Finding Minimum:** In a BST, the minimum key is found by traversing left as far as possible from the root.
*   **Finding Maximum:** In a BST, the maximum key is found by traversing right as far as possible from the root.

    ```c
    // Example (Conceptual, based on Horowitz, Sahni, Freed)
    TreeNode* findMinNode(TreeNode* node) {
        if (node == NULL) return NULL;
        while (node->left != NULL) {
            node = node->left;
        }
        return node;
    }

    TreeNode* findMaxNode(TreeNode* node) {
        if (node == NULL) return NULL;
        while (node->right != NULL) {
            node = node->right;
        }
        return node;
    }
    ```

---

### **3. Tree Properties and Variations**

Understanding different types of binary trees helps in choosing the right data structure for specific problems.

#### **3.1 Complete Binary Tree**

A binary tree in which every level, except possibly the last, is completely filled, and all nodes in the last level are as far left as possible.

*   **Characteristics:** Efficient for storage using arrays.
*   **Example:** Used in Heap data structures.

#### **3.2 Full Binary Tree**

A binary tree in which every node other than the leaves has two children.

#### **3.3 Perfect Binary Tree**

A binary tree in which all interior nodes have two children and all leaves are at the same depth. A perfect binary tree of height `h` has `2^(h+1) - 1` nodes.

#### **3.4 Balanced Binary Tree**

A binary tree where the height of the left and right subtrees of any node differs by at most one. This prevents the tree from becoming skewed, ensuring O(log n) performance for most operations. Examples include AVL trees and Red-Black trees.

#### **3.5 Binary Search Tree (BST)**

A binary tree where for each node:
*   All keys in the left subtree are less than the node's key.
*   All keys in the right subtree are greater than the node's key.
*   Both the left and right subtrees are also BSTs.

**Importance:** BSTs allow efficient searching, insertion, and deletion with an average time complexity of O(log n) if the tree is balanced. However, in the worst case (a skewed tree), operations can degrade to O(n).

---

### **4. Application of Binary Tree Operations**

Binary tree operations are crucial for various computer science applications.

*   **Expression Evaluation:** Binary trees are used to represent arithmetic expressions (Expression Trees). Post-order traversal allows for easy evaluation.
*   **File System Navigation:** Directory structures in operating systems are often represented as trees.
*   **Database Indexing:** B-trees and B+ trees (variations of trees) are used for efficient data retrieval in databases.
*   **Decision Trees:** Used in machine learning for classification and regression.
*   **Symbol Tables:** BSTs can be used to implement symbol tables in compilers.

---

### **5. Complexity Analysis (CO1, CO3)**

The efficiency of binary tree operations is heavily influenced by the tree's height.

*   **Traversal (In-order, Pre-order, Post-order):** O(n), where n is the number of nodes, as each node is visited once.
*   **Level-order Traversal:** O(n) for visiting nodes, but can require O(W) space for the queue, where W is the maximum width of the tree.
*   **Search (in BST):**
    *   Average Case: O(log n) (for a balanced BST).
    *   Worst Case: O(n) (for a skewed BST).
*   **Insertion (in BST):**
    *   Average Case: O(log n) (for a balanced BST).
    *   Worst Case: O(n) (for a skewed BST).
*   **Deletion (in BST):**
    *   Average Case: O(log n) (for a balanced BST).
    *   Worst Case: O(n) (for a skewed BST).
*   **Finding Min/Max (in BST):**
    *   Average Case: O(log n) (for a balanced BST).
    *   Worst Case: O(n) (for a skewed BST).

**Importance of Balanced Trees:** To guarantee the O(log n) performance for BST operations, balanced binary search trees (like AVL or Red-Black trees) are employed. These trees automatically rebalance themselves after insertions and deletions.

---

### **6. Important Points to Remember**

*   The definition of a binary tree: at most two children per node.
*   The distinct traversal orders: In-order, Pre-order, Post-order, Level-order, and their properties.
*   The rules for BST operations (insertion, deletion, search) and how they maintain the BST property.
*   The three cases for BST deletion and the concept of in-order successor/predecessor.
*   The impact of tree balance on the time complexity of operations.
*   The array representation is efficient for complete binary trees.
*   Traversals visit every node; their complexity is O(n).

---

### **7. Practice Questions and Exercises**

**Question 1:**
Given the following pre-order and in-order traversals of a binary tree, construct the tree.
Pre-order: `F, B, A, D, C, E, G, I, H`
In-order: `A, B, C, D, E, F, G, H, I`

**Answer:**
*   The first element in pre-order (`F`) is the root.
*   In in-order, elements to the left of `F` (`A, B, C, D, E`) belong to the left subtree, and elements to the right (`G, H, I`) belong to the right subtree.
*   Now, take the first element of the left subtree's pre-order traversal (`B`) as the root of the left subtree. Find `B` in the in-order list of the left subtree (`A, B, C, D, E`). `A` is to its left, `C, D, E` are to its right.
*   Continue this process recursively.

The constructed tree would be:

```
        F
       / \
      B   G
     / \   \
    A   D   I
       / \ /
      C  E H
```

**Question 2:**
What is the post-order traversal of the tree constructed in Question 1?

**Answer:**
Using the post-order definition (Left, Right, Root):
`A, C, E, D, B, H, I, G, F`

**Question 3:**
Implement a function to insert a node into a Binary Search Tree. Explain the time complexity.

**Answer:**
```c
#include <stdio.h>
#include <stdlib.h>

typedef struct TreeNode {
    int data;
    struct TreeNode *left;
    struct TreeNode *right;
} TreeNode;

// Function to create a new node
TreeNode* newNode(int data) {
    TreeNode* node = (TreeNode*)malloc(sizeof(TreeNode));
    node->data = data;
    node->left = NULL;
    node->right = NULL;
    return node;
}

// Function to insert a new node with given data in a BST
TreeNode* insert(TreeNode* node, int data) {
    // If the tree is empty, return a new node
    if (node == NULL) {
        return newNode(data);
    }

    // Otherwise, recur down the tree
    if (data < node->data) {
        node->left = insert(node->left, data);
    } else if (data > node->data) {
        node->right = insert(node->right, data);
    }
    // If data is equal, we might do nothing or handle duplicates
    // For this example, we do nothing if data is equal.

    // Return the (unchanged) node pointer
    return node;
}

// Helper for in-order traversal to print the tree
void inorderTraversal(TreeNode* root) {
    if (root != NULL) {
        inorderTraversal(root->left);
        printf("%d ", root->data);
        inorderTraversal(root->right);
    }
}

// Example Usage:
/*
int main() {
    TreeNode* root = NULL;
    root = insert(root, 50);
    insert(root, 30);
    insert(root, 20);
    insert(root, 40);
    insert(root, 70);
    insert(root, 60);
    insert(root, 80);

    printf("In-order traversal of the BST: ");
    inorderTraversal(root); // Output: 20 30 40 50 60 70 80
    printf("\n");

    return 0;
}
*/

/*
Time Complexity of Insertion:
The time complexity of inserting a node into a Binary Search Tree is determined by the height of the tree.
- Best Case: O(1) - If the tree is perfectly balanced and the new node is inserted at the root.
- Average Case: O(log n) - For a reasonably balanced tree, the traversal to find the insertion point takes logarithmic time.
- Worst Case: O(n) - If the tree becomes skewed (e.g., inserting elements in increasing or decreasing order), the tree degenerates into a linked list, and finding the insertion point takes linear time.
*/
```

**Question 4:**
Describe the scenario where a binary tree might become "skewed" and what are the implications for performance?

**Answer:**
A binary tree becomes skewed when the insertion or deletion of nodes consistently happens on only one side (either always left or always right) of the nodes. For example, inserting elements in strictly ascending order (e.g., 10, 20, 30, 40, 50) into an initially empty BST will result in a right-skewed tree, resembling a linked list.

**Implications for Performance:**
*   **Search, Insertion, Deletion:** The time complexity degrades from O(log n) in a balanced tree to O(n) in a skewed tree. This is because searching for an element or finding an insertion/deletion point requires traversing down the entire length of the "list."
*   **Space Complexity:** While the number of nodes is `n`, the height is `n`, leading to a higher chance of stack overflow for recursive operations on very deep trees.

This is why balanced binary search trees (like AVL trees or Red-Black trees) are crucial in practice to guarantee logarithmic time complexity for these operations.

---

### **8. Alignment with Course Outcomes**

*   **CO1 (Asymptotic Notations):** The notes explicitly discuss the time complexity of various binary tree operations (traversal, search, insert, delete) in terms of O(n) and O(log n), covering both average and worst-case scenarios.
*   **CO2 (Solve real-world problems):** While this module focuses on trees, the underlying principles of efficient searching, insertion, and deletion are core to solving problems using data structures like BSTs, which are applied in searching databases, sorting, etc.
*   **CO3 (Design algorithms for applications):** Understanding tree operations is fundamental for designing algorithms that use trees for tasks like expression evaluation, file system management, and data indexing. The applications section highlights this.
*   **CO4 (Apply and compare techniques for searching and sorting):** BSTs provide an efficient search technique. In-order traversal of a BST sorts the elements, demonstrating a connection to sorting.
*   **CO5 (Apply appropriate hash function):** This outcome is not directly addressed by binary tree operations, as hashing is a different technique. However, understanding trees helps in appreciating different approaches to data organization and retrieval.

---
