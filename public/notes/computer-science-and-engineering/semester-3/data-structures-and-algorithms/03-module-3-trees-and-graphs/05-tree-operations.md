---
title: "Tree Operations"
subject: "DATA STRUCTURES AND ALGORITHMS"
module: "Module 3: Trees and Graphs"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ac3e"
status: "completed"
scrapedAt: "2026-05-20T16:23:01.163Z"
---
## DATA STRUCTURES AND ALGORITHMS - Module 3: Trees and Graphs - Topic: Tree Operations

**Learning Outcomes:**

*   Understand fundamental tree operations (traversal, insertion, deletion, searching).
*   Implement these operations in various tree types (e.g., Binary Search Trees).
*   Analyze the time complexity of each operation.
*   Apply tree operations to solve practical problems.

### I. Introduction to Tree Operations

Trees are hierarchical data structures that model relationships between objects. Understanding fundamental tree operations is crucial for manipulating and extracting information from tree structures. These operations enable us to traverse, insert, delete, and search for nodes within a tree.

### II. Key Concepts and Definitions

*   **Tree:** A hierarchical data structure consisting of nodes and edges.
*   **Root:** The topmost node in a tree.
*   **Node:**  A fundamental unit of a tree that stores data.
*   **Edge:** A connection between two nodes.
*   **Parent Node:** A node that has one or more child nodes.
*   **Child Node:** A node that is connected to a parent node.
*   **Leaf Node:** A node with no children.
*   **Subtree:** A portion of a tree consisting of a node and all its descendants.
*   **Height of a Node:** The number of edges on the longest path between the node and a leaf.
*   **Depth of a Node:** The number of edges from the root node to the node.
*   **Balanced Tree:** A tree where the heights of the subtrees of every node differ by at most one. (e.g., AVL Trees, Red-Black Trees).
*   **Binary Tree:** A tree where each node has at most two children, typically referred to as the left child and the right child.
*   **Binary Search Tree (BST):** A binary tree with the property that for each node, all nodes in its left subtree have values less than the node's value, and all nodes in its right subtree have values greater than the node's value.

### III. Tree Traversal

Traversal refers to visiting each node in a tree exactly once.  Different traversal methods provide different orderings for processing nodes.

*   **A. Depth-First Traversal (DFT):**  Explores as far as possible along each branch before backtracking.

    *   **1. Pre-order Traversal:**  (Root, Left, Right)
        *   Visit the root node.
        *   Traverse the left subtree using pre-order traversal.
        *   Traverse the right subtree using pre-order traversal.
        *   **Example:** For a tree with root 'A', left child 'B' and right child 'C', and 'B' having left child 'D' and right child 'E', the pre-order traversal would be:  A, B, D, E, C.
        *   **Implementation (Python):**

            ```python
            class Node:
                def __init__(self, data):
                    self.data = data
                    self.left = None
                    self.right = None

            def preorder_traversal(root):
                if root:
                    print(root.data, end=" ")
                    preorder_traversal(root.left)
                    preorder_traversal(root.right)

            # Example Usage
            root = Node('A')
            root.left = Node('B')
            root.right = Node('C')
            root.left.left = Node('D')
            root.left.right = Node('E')

            print("Preorder Traversal:")
            preorder_traversal(root) # Output: A B D E C
            ```

    *   **2. In-order Traversal:** (Left, Root, Right)
        *   Traverse the left subtree using in-order traversal.
        *   Visit the root node.
        *   Traverse the right subtree using in-order traversal.
        *   **Example:** For the same tree as above, the in-order traversal would be: D, B, E, A, C.
        *   **Implementation (Python):**

            ```python
            def inorder_traversal(root):
                if root:
                    inorder_traversal(root.left)
                    print(root.data, end=" ")
                    inorder_traversal(root.right)

            print("\nInorder Traversal:")
            inorder_traversal(root) # Output: D B E A C
            ```

    *   **3. Post-order Traversal:** (Left, Right, Root)
        *   Traverse the left subtree using post-order traversal.
        *   Traverse the right subtree using post-order traversal.
        *   Visit the root node.
        *   **Example:** For the same tree as above, the post-order traversal would be: D, E, B, C, A.
        *   **Implementation (Python):**

            ```python
            def postorder_traversal(root):
                if root:
                    postorder_traversal(root.left)
                    postorder_traversal(root.right)
                    print(root.data, end=" ")

            print("\nPostorder Traversal:")
            postorder_traversal(root) # Output: D E B C A
            ```

*   **B. Breadth-First Traversal (BFT) / Level-Order Traversal:** Visits all nodes at each level before moving to the next level. Uses a queue to maintain the order of visiting nodes.

    *   **Implementation (Python):**

        ```python
        from collections import deque

        def levelorder_traversal(root):
            if not root:
                return

            queue = deque([root]) # Initialize queue with the root

            while queue:
                node = queue.popleft() # Dequeue the node
                print(node.data, end=" ") # Print the node's data

                if node.left:
                    queue.append(node.left) # Enqueue the left child
                if node.right:
                    queue.append(node.right) # Enqueue the right child

        print("\nLevel-Order Traversal:")
        levelorder_traversal(root) # Output: A B C D E
        ```

*   **Time Complexity of Tree Traversal:** O(N), where N is the number of nodes in the tree. Each node is visited exactly once.

### IV. Insertion in a Binary Search Tree (BST)

*   **Process:**
    1.  Start at the root node.
    2.  Compare the value to be inserted with the current node's value.
    3.  If the value is less than the current node's value, move to the left subtree.
    4.  If the value is greater than the current node's value, move to the right subtree.
    5.  Repeat steps 2-4 until you reach a null node (empty subtree).
    6.  Insert the new node as the left or right child of the parent node where the null node was encountered.

*   **Implementation (Python):**

    ```python
    class Node:
        def __init__(self, data):
            self.data = data
            self.left = None
            self.right = None

    def insert_bst(root, data):
        if root is None:
            return Node(data)
        else:
            if data < root.data:
                root.left = insert_bst(root.left, data)
            else:
                root.right = insert_bst(root.right, data)
            return root

    # Example Usage:
    root = None
    root = insert_bst(root, 50)
    insert_bst(root, 30)
    insert_bst(root, 20)
    insert_bst(root, 40)
    insert_bst(root, 70)
    insert_bst(root, 60)
    insert_bst(root, 80)

    # Verify insertion (In-order traversal should output sorted values)
    print("\nBST Inorder Traversal after insertion:")
    inorder_traversal(root) #Output: 20 30 40 50 60 70 80
    ```

*   **Time Complexity:**
    *   Average Case: O(log N), where N is the number of nodes (for balanced BSTs).
    *   Worst Case: O(N)  (for skewed trees where all nodes are inserted in ascending or descending order).

### V. Deletion in a Binary Search Tree (BST)

Deletion is more complex than insertion, as we need to maintain the BST properties.  There are three main cases:

*   **Case 1: Node to be deleted is a leaf node:**  Simply remove the node.

*   **Case 2: Node to be deleted has only one child:** Replace the node with its child.

*   **Case 3: Node to be deleted has two children:**  Replace the node with its *in-order successor* (the smallest node in the right subtree) or its *in-order predecessor* (the largest node in the left subtree), and then delete the in-order successor/predecessor. The in-order successor/predecessor will always have at most one child.

*   **Implementation (Python):**

    ```python
    def find_min(root):  # Helper function to find the in-order successor
        current = root
        while(current.left is not None):
            current = current.left
        return current

    def delete_bst(root, data):
        if root is None:
            return root

        if data < root.data:
            root.left = delete_bst(root.left, data)
        elif data > root.data:
            root.right = delete_bst(root.right, data)
        else: # Node to be deleted is found
            # Case 1: No child
            if root.left is None and root.right is None:
                root = None
                return root

            # Case 2: One child
            elif root.left is None:
                temp = root.right
                root = None
                return temp

            elif root.right is None:
                temp = root.left
                root = None
                return temp

            # Case 3: Two children
            temp = find_min(root.right) # Find in-order successor
            root.data = temp.data  # Copy the in-order successor's content to this node
            root.right = delete_bst(root.right, temp.data)  # Delete the in-order successor
        return root

    # Example Usage (Continuing from previous insertion example):
    print("\nBST Inorder Traversal before deletion:")
    inorder_traversal(root)

    root = delete_bst(root, 30)
    print("\nBST Inorder Traversal after deleting 30:")
    inorder_traversal(root)

    root = delete_bst(root, 50)
    print("\nBST Inorder Traversal after deleting 50:")
    inorder_traversal(root)

    root = delete_bst(root, 70)
    print("\nBST Inorder Traversal after deleting 70:")
    inorder_traversal(root)
    ```

*   **Time Complexity:**
    *   Average Case: O(log N), where N is the number of nodes (for balanced BSTs).  This is due to the tree traversal involved in finding the node to delete and the in-order successor/predecessor.
    *   Worst Case: O(N)  (for skewed trees).

### VI. Searching in a Binary Search Tree (BST)

*   **Process:**
    1.  Start at the root node.
    2.  Compare the value to be searched with the current node's value.
    3.  If the value is equal to the current node's value, the search is successful.
    4.  If the value is less than the current node's value, move to the left subtree.
    5.  If the value is greater than the current node's value, move to the right subtree.
    6.  Repeat steps 2-5 until either the value is found or a null node is reached. If a null node is reached, the value is not in the tree.

*   **Implementation (Python):**

    ```python
    def search_bst(root, data):
        if root is None or root.data == data:
            return root # Found or reached an empty subtree

        if data < root.data:
            return search_bst(root.left, data)
        else:
            return search_bst(root.right, data)

    # Example Usage (Continuing from previous example):
    node = search_bst(root, 40)
    if node:
        print("\nFound node with data:", node.data)
    else:
        print("\nNode with data 40 not found")

    node = search_bst(root, 100)
    if node:
        print("\nFound node with data:", node.data)
    else:
        print("\nNode with data 100 not found")
    ```

*   **Time Complexity:**
    *   Average Case: O(log N), where N is the number of nodes (for balanced BSTs).
    *   Worst Case: O(N)  (for skewed trees).

### VII. Practice Questions/Exercises

1.  **Implement a function to find the minimum value in a Binary Search Tree.**

    *   **Answer:** See the `find_min` function in the Deletion section above.  It traverses down the left-most path until it finds the smallest element.  Time complexity: O(H) where H is the height of the tree, which is O(log N) in a balanced BST and O(N) in the worst-case skewed tree.

2.  **Implement a function to find the maximum value in a Binary Search Tree.**

    *   **Answer:** (Python)
        ```python
        def find_max(root):
            current = root
            while(current.right is not None):
                current = current.right
            return current.data
        ```
        Time Complexity:  O(H), where H is the height of the tree.

3.  **Write a function to determine the height of a binary tree.**

    *   **Answer:** (Python)
        ```python
        def height(root):
            if root is None:
                return 0
            else:
                # Compute the height of each subtree
                lheight = height(root.left)
                rheight = height(root.right)

                # Use the larger one
                if lheight > rheight:
                    return lheight+1
                else:
                    return rheight+1
        ```
        Time Complexity: O(N), where N is the number of nodes, as we potentially visit every node.

4.  **Given a binary tree, write a function to check if it is a Binary Search Tree (BST).**

    *   **Answer:** (Python)  This requires ensuring the BST property holds true for all nodes. A common approach is to use in-order traversal and check if the values are sorted.

        ```python
        def is_bst_util(root, min_val, max_val):
            if root is None:
                return True

            if (root.data < min_val or root.data > max_val):
                return False

            return (is_bst_util(root.left, min_val, root.data - 1) and
                    is_bst_util(root.right, root.data + 1, max_val))


        def is_bst(root):
            return is_bst_util(root, float('-inf'), float('inf'))
        ```
        Time Complexity: O(N) because in the worst case we need to visit every node of the tree.

5.  **What are the advantages and disadvantages of using a BST compared to a regular sorted array for searching?**

    *   **Answer:**
        *   **Advantages of BST:**
            *   Dynamic: Easy to insert and delete elements (average O(log N) time).
            *   More memory-efficient than an array if the data isn't contiguous or if there are frequent insertions/deletions in the middle.
        *   **Disadvantages of BST:**
            *   Can become unbalanced (skewed), leading to O(N) search/insert/delete time.
            *   Requires more memory per node (to store pointers to children).
            *   Arrays can provide better cache locality for contiguous data, which can speed up search operations in some cases.

### VIII. Important Points to Remember

*   The efficiency of tree operations heavily depends on the tree's structure. Balanced trees provide significantly better performance (O(log N)) than unbalanced trees (O(N) in the worst case).
*   BSTs are well-suited for dynamic data where frequent insertions and deletions are required while maintaining sorted order.
*   Understanding tree traversal methods is essential for processing and extracting information from trees.
*   Recursive implementations are common for tree operations due to the recursive nature of tree structures.
*   Iterative solutions are also possible for tree traversals (e.g., using a stack for DFT or a queue for BFT), potentially saving on stack space compared to recursive calls.
*   The choice of traversal method (pre-order, in-order, post-order, level-order) depends on the specific problem requirements.
*   Deletion in BST is the most complex operation and requires careful handling of different cases.  The use of in-order successor/predecessor ensures the BST property is maintained after deletion.
*  Always consider the implications of inserting or deleting large numbers of entries on the balance of the tree.  Unbalanced trees can lead to performance degradations. Techniques like self-balancing (AVL, Red-Black) can be applied to mitigate this risk.
