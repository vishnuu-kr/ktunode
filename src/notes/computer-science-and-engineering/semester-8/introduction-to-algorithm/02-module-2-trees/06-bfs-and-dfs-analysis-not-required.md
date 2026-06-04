---
title: "BFS and DFS (analysis not required)"
subject: "INTRODUCTION TO ALGORITHM"
module: "Module 2: Trees "
branch: "Computer Science and Engineering"
semester: 8
topicId: "6841627a0fc9aa1fdbc8cbca"
status: "completed"
scrapedAt: "2026-05-20T17:25:11.426Z"
---
# Introduction to Algorithms: Module 2: Trees

## Topic: BFS and DFS

### Learning Outcomes:

*   Understand the fundamental concepts of Breadth-First Search (BFS) and Depth-First Search (DFS) algorithms.
*   Differentiate between BFS and DFS in terms of their traversal strategies.
*   Identify the data structures commonly used for implementing BFS and DFS.
*   Apply BFS and DFS to traverse and explore tree structures.

---

### 1. Introduction to Tree Traversal

Tree traversal algorithms are systematic ways to visit each node in a tree data structure exactly once. These algorithms are fundamental for many tree-based operations, such as searching, insertion, deletion, and expression evaluation. Two of the most common and important traversal algorithms are Breadth-First Search (BFS) and Depth-First Search (DFS).

---

### 2. Breadth-First Search (BFS)

**Concept:**
BFS explores a tree level by level. It starts at the root node and visits all of its neighbors (children) first, then it visits all of the next level's neighbors, and so on. It essentially expands outwards from the root.

**Key Data Structure:**
BFS uses a **Queue** to manage the order in which nodes are visited. A queue follows the First-In, First-Out (FIFO) principle.

**How it Works:**

1.  **Start:** Begin at the root node.
2.  **Visit:** Mark the root node as visited and enqueue it.
3.  **Process:** While the queue is not empty:
    *   Dequeue a node.
    *   Visit all its unvisited neighbors (children).
    *   Enqueue each visited neighbor.

**Analogy:** Imagine exploring a maze by checking all paths at your current distance from the entrance before moving to paths further away.

**Example:**

Consider the following binary tree:

```
      A
     / \
    B   C
   / \   \
  D   E   F
```

**BFS Traversal Order:** A, B, C, D, E, F

**Steps:**

1.  Enqueue 'A'. Queue: [A]
2.  Dequeue 'A'. Visit 'A'. Enqueue its children 'B' and 'C'. Queue: [B, C]
3.  Dequeue 'B'. Visit 'B'. Enqueue its children 'D' and 'E'. Queue: [C, D, E]
4.  Dequeue 'C'. Visit 'C'. Enqueue its child 'F'. Queue: [D, E, F]
5.  Dequeue 'D'. Visit 'D'. 'D' has no children. Queue: [E, F]
6.  Dequeue 'E'. Visit 'E'. 'E' has no children. Queue: [F]
7.  Dequeue 'F'. Visit 'F'. 'F' has no children. Queue: []
8.  Queue is empty. Traversal complete.

---

### 3. Depth-First Search (DFS)

**Concept:**
DFS explores as far as possible along each branch before backtracking. It goes deep down one path until it hits a dead end (a leaf node or a node with no unvisited children), then it backtracks to the nearest ancestor with an unvisited child and continues the exploration.

**Key Data Structures:**
DFS can be implemented using:

*   **Recursion:** The call stack implicitly manages the order of nodes to visit.
*   **Explicit Stack:** A stack data structure (LIFO - Last-In, First-Out) can be used to keep track of nodes to visit.

**How it Works (using a stack):**

1.  **Start:** Begin at the root node.
2.  **Visit:** Mark the root node as visited and push it onto the stack.
3.  **Process:** While the stack is not empty:
    *   Pop a node from the stack.
    *   If the node has not been visited yet:
        *   Mark it as visited.
        *   Push all its unvisited neighbors (children) onto the stack. (The order of pushing children matters for the exact traversal sequence).

**Common DFS Variants (for binary trees):**

*   **Pre-order Traversal:** Visit the current node, then recursively traverse the left subtree, then recursively traverse the right subtree. (Node, Left, Right)
*   **In-order Traversal:** Recursively traverse the left subtree, then visit the current node, then recursively traverse the right subtree. (Left, Node, Right)
*   **Post-order Traversal:** Recursively traverse the left subtree, then recursively traverse the right subtree, then visit the current node. (Left, Right, Node)

**Analogy:** Imagine exploring a maze by picking one path and going as far as you can. If you hit a dead end, you backtrack to the last junction and try another path.

**Example (using the same tree as above):**

```
      A
     / \
    B   C
   / \   \
  D   E   F
```

**DFS Traversal Order (Pre-order: Node, Left, Right):** A, B, D, E, C, F

**Steps (using recursion for pre-order):**

1.  **visit(A):**
    *   Visit A.
    *   Call visit(B) (left child).
        *   **visit(B):**
            *   Visit B.
            *   Call visit(D) (left child).
                *   **visit(D):**
                    *   Visit D.
                    *   D has no children. Return.
            *   Call visit(E) (right child).
                *   **visit(E):**
                    *   Visit E.
                    *   E has no children. Return.
            *   B has no more children. Return.
    *   Call visit(C) (right child).
        *   **visit(C):**
            *   Visit C.
            *   C has no left child.
            *   Call visit(F) (right child).
                *   **visit(F):**
                    *   Visit F.
                    *   F has no children. Return.
            *   C has no more children. Return.
    *   A has no more children. Return.

**DFS Traversal Order (In-order: Left, Node, Right):** D, B, E, A, C, F

**DFS Traversal Order (Post-order: Left, Right, Node):** D, E, B, F, C, A

---

### 4. Key Differences between BFS and DFS

| Feature         | BFS                                  | DFS                                               |
| :-------------- | :----------------------------------- | :------------------------------------------------ |
| **Exploration** | Level by level                       | Goes as deep as possible along a branch           |
| **Data Structure** | Queue (FIFO)                         | Stack (LIFO) or Recursion (call stack)            |
| **Memory Usage**| Can be high for wide trees           | Can be high for deep trees                        |
| **Finding Shortest Path** | Guaranteed to find the shortest path (in terms of edges) in an unweighted graph/tree | Not guaranteed to find the shortest path        |
| **Applications**| Shortest path, network broadcasting, garbage collection | Maze solving, topological sorting, finding cycles |

---

### 5. Practice Questions and Exercises

**Question 1:**
What data structure is primarily used in a Breadth-First Search (BFS) algorithm?
a) Stack
b) Queue
c) Heap
d) Array

**Question 2:**
Consider the following tree:

```
      10
     /  \
    5    15
   / \     \
  2   7     20
```

What is the Breadth-First Search (BFS) traversal order starting from the root (10)?

**Question 3:**
Which of the following is a common variant of Depth-First Search (DFS) for binary trees?
a) Level-order traversal
b) Pre-order traversal
c) Breadth-first traversal
d) Horizontal traversal

**Question 4:**
If you need to find the shortest path from the root to a specific node in an unweighted tree, which traversal algorithm would you generally prefer?

**Question 5:**
Trace the Depth-First Search (DFS) traversal (Pre-order: Node, Left, Right) for the following tree:

```
      P
     / \
    Q   R
   / \
  S   T
```

---

### 6. Answers

**Answer 1:**
b) Queue

**Answer 2:**
10, 5, 15, 2, 7, 20

**Answer 3:**
b) Pre-order traversal (In-order and Post-order are also correct answers if listed)

**Answer 4:**
Breadth-First Search (BFS)

**Answer 5:**
P, Q, S, T, R

---

### 7. Important Points to Remember

*   **BFS:** Explores level by level, uses a queue. Good for finding shortest paths in unweighted graphs/trees.
*   **DFS:** Explores as deep as possible, uses a stack or recursion. Has different traversal orders (pre-order, in-order, post-order) for binary trees.
*   The choice between BFS and DFS depends on the specific problem you are trying to solve and the desired output.
*   Both algorithms are fundamental for understanding how to navigate and process tree structures.

---
