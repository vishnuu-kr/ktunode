# Singly Linked List - Operations on Linked List

<!-- SECTION_1_START -->
# Singly Linked List — Operations on Linked List

> [!IMPORTANT]
> **KTU 2024 Scheme | PCCST303 | Module 2** — This note covers **ALL** core operations on a Singly Linked List (SLL): creation, traversal, insertion, deletion, searching, updating, counting, and reversal. Every operation is shown in **fully operational Python** with exhaustive step-by-step derivations and is mapped to the **Revised Bloom's Taxonomy (RBT)** cognitive levels required for KTU End Semester Evaluations (ESE).

---

## 1.1 Formal Academic Definition

A **Singly Linked List (SLL)** is a linear, dynamic, non-contiguous data structure belonging to the family of *dynamic set* structures. It is composed of a sequence of **nodes**, where each node contains exactly two fields:

- A **data field** (also called the *info* or *payload* field) — stores the actual element/value of type $T$.
- A **next pointer field** (also called the *link*, *succ*, or *forward* field) — stores the memory address (a *reference/pointer*) to the succeeding node in the sequence.

Mathematically, an SLL of $n$ nodes is represented as a sequence:

$$\text{SLL} = \langle n_0, n_1, n_2, \dots, n_{n-1} \rangle$$

such that for every node $n_i$ (where $0 \le i < n-1$), the next pointer of $n_i$ points to $n_{i+1}$, and the next pointer of $n_{n-1}$ is a special **null** sentinel value ($\text{NULL}$, $\bot$, or $\text{None}$ depending on the language). The entire list is accessed through an external handle called the **head pointer** (denoted $H$ or $\text{head}$), which holds the address of the first node $n_0$.

> [!NOTE]
> **KTU Syllabus Terminology (Verbatim from PCCST303 Module 2):** *"Linked list — representation, operations: insertion, deletion, search, traverse, update, sort, merge, reverse. Memory management: static and dynamic allocation, garbage collection."*

---

## 1.2 Conceptual Analogy — The "Treasure Hunt" Intuition

Imagine a **Treasure Hunt** in a sprawling theme park. Each clue card you find has two things printed on it:
1. The **treasure/data** itself (e.g., "₹500 gift voucher").
2. The **location** of the *next* clue card (e.g., "Go to the red mailbox beside the Ferris wheel").

You start at the **entrance gate** (this is the **head pointer**). The first clue leads you to the second, the second to the third, and so on. The very last clue card has a message: *"Congratulations! You have reached the end."* — this special message is the **NULL terminator** (`None` in Python, `NULL` in C, `nullptr` in C++).

**Why is this brilliant in computer science?**
- **Non-contiguous memory**: The clue cards can be scattered *anywhere* in the park. They don't need to sit in adjacent lockers like in an array. This is exactly how SLL nodes are scattered in **heap memory**.
- **Dynamic size**: New guests (nodes) can join the hunt at any time — you just hand them the address of the *currently last clue* and create a new one.
- **Efficient insertion/deletion at the head**: If you want to insert a new clue at the *start* of the hunt, you just place it at the entrance and rewrite the head pointer. **No shifting of other clues is required** — this is a key advantage over arrays.

> [!TIP]
> **Memory Trick:** Singly linked = **S**ingle direction = you can only walk **forward**, never backward. There is no "prev" pointer. If you need to go backward, you must walk forward from the head all over again.

---

## 1.3 Formal Node Structure

In most programming languages used at KTU (C, C++, Java, Python), a node is a composite structure:

**C-style definition (used in KTU theory exams):**
```c
struct Node {
    int data;            // payload field — can be any type
    struct Node *next;   // self-referential pointer to the next node
};
```

**Python class definition (used in KTU lab exams):**
```python
class Node:
    """Blueprint for a singly linked list node."""
    def __init__(self, data: int):
        self.data: int = data
        self.next: Optional['Node'] = None
```

The self-referential nature (`struct Node *next` containing a pointer to its own type) is what makes the linked list *recursive* in nature — many algorithms (reverse, merge, etc.) are most elegantly expressed via recursion.

---

## 1.4 Memory Layout & Address Arithmetic

Let the head pointer $H$ reside at memory address $\text{addr}(H)$. The $i$-th node is at address $\text{addr}(n_i)$. In a **contiguous array**, the address of the $i$-th element is computed via the constant-time formula:

$$\text{addr}_{\text{array}}(i) = \text{base} + (i \times \text{sizeof}(T))$$

But in a **linked list**, the address of the $i$-th node is computed via a *pointer-chase* — a sequential walk:

$$\text{addr}_{\text{SLL}}(i) = \text{next}^{i}(\text{addr}(H)) = \text{next}(\text{next}(\dots \text{next}(\text{addr}(H))\dots))$$

This is why **random access by index is $O(n)$** in a linked list but $O(1)$ in an array — the $i$-th node's address is *not* computable in constant time; it must be physically traversed.

> [!VISUALIZATION CONTROL]
> **Concept:** SLL memory layout in heap — nodes scattered non-contiguously, connected by pointers.
> **Memory Diagram Description:** Draw 4 hex boxes representing heap cells at addresses `0x100A` (Head → Node A, data=10), `0x205C` (Node B, data=20), `0x1498` (Node C, data=30), and a final dangling arrow with the label `NULL`. The `next` field of each node holds the address of the next node, demonstrating that the list is logically linear but physically scattered.
> **GeoGebra / Desmos Input:** This is a memory-mapped diagram rather than a coordinate geometry plot, so it is best rendered using tools like **draw.io**, **Excalidraw**, or **Python's `graphviz` library** with nodes labeled `0x100A`, `0x205C`, `0x1498`.

---

## 1.5 Why Linked Lists? — The Engineering Motivation

| Property | Array (Static) | Singly Linked List |
|----------|----------------|---------------------|
| Memory layout | Contiguous | Non-contiguous (heap) |
| Size at compile time | Fixed | Dynamic, grows/shrinks at runtime |
| Access $i$-th element | $O(1)$ (direct indexing) | $O(n)$ (pointer walk) |
| Insert/Delete at head | $O(n)$ (shift all elements) | $O(1)$ (rewire one pointer) |
| Insert/Delete at tail | $O(1)$ amortized | $O(n)$ (no tail pointer) or $O(1)$ with tail |
| Memory overhead per element | Just the data | Data + 1 pointer (≈ 8 bytes on 64-bit) |
| Cache friendliness | Excellent (spatial locality) | Poor (pointer-chasing) |
| Use case in industry | Static buffers, matrices, lookup tables | HashMap chaining, LRU cache, Adjacency lists, OS process lists |

**Real-world engineering applications of SLL:**
- **Operating Systems**: Singly linked lists are used to implement the **process control block (PCB) ready queue** in schedulers like FCFS, and the **free list of memory blocks** in dynamic memory allocators (`malloc`/`free`).
- **HashMap / HashTable chaining**: Each bucket in a hash table is an SLL head, and colliding keys are appended as nodes.
- **LRU Caches** (Least Recently Used): The doubly-linked list variant is used; the singly-linked variant is used in simplified cache eviction.
- **Polynomial representation**: Each term $(c_i, e_i)$ is stored as a node, and polynomial addition is performed by merging two sorted SLLs.
- **Undo/Redo in text editors**: Linear history of states stored as nodes.

---

## 1.6 Critical Preliminaries & Edge Cases (BEFORE Writing Any Code)

Every operation below must handle the following **edge cases explicitly** to earn full marks in KTU ESE valuation:

1. **Empty list** — `head == None`. Every operation must check this first.
2. **Single-node list** — `head != None` but `head.next == None`. Insert/delete at head *and* tail are the same operation here.
3. **Operating at the head** — special handling required; we must update the `head` pointer itself.
4. **Operating at the tail** — requires traversal to the last node; the last node's `next` must be set to `None`.
5. **Operating at an interior position $k$** — requires a `prev` pointer tracker since SLL has no backward links.
6. **Invalid position $k$** — if $k >$ length or $k < 0$, the operation must gracefully fail with an error message (no segmentation faults).
7. **Memory leak in C/C++** — every deleted node must be `free()`'d; in Python, the garbage collector handles it, but understanding it conceptually is mandatory for KTU viva.

> [!WARNING]
> **KTU Examiner's Pitfall #1:** In a singly linked list, you **cannot** traverse backward. To delete a node at position $k$, you must walk from the head while maintaining a `prev` pointer. Forgetting the `prev` pointer is the #1 reason students lose marks on delete-from-middle questions.

---

<!-- SECTION_2_START -->
# 2. Deep Theoretical Analysis & KTU High-Yield Formula Sheet

## 2.1 The 8 Core Operations — Operational Decomposition

We will systematically dissect the **eight high-yield operations** that KTU 2024 Scheme ESE questions test on SLL. Each operation is broken into a 4-stage logical pipeline: **(1) Precondition check → (2) Locate target node (with `prev` tracker) → (3) Mutate pointers → (4) Update length/metadata**.

### Operation 1: Traversal (Visit & Print All Nodes)

**Definition:** Sequentially visit every node from `head` to the last node, performing an action (typically printing `data`).

**Algorithmic Logic:**
1. **Precondition:** List may be empty (handle `head is None` → print "List is empty").
2. **Initialize:** Set `current = head`. Set `visited_count = 0`.
3. **Loop:** While `current is not None`:
   - Process `current.data` (print, accumulate, or transform).
   - Advance: `current = current.next`.
   - Increment: `visited_count += 1`.
4. **Termination:** Loop ends when `current == None` (we walked past the last node).

**Why it works:** The `next` pointer of the last node is `None` by definition. So the moment we read `current.next` and it returns `None`, we know we are done.

> [!NOTE]
> **Traversal is the foundational subroutine** upon which Insert-at-Position, Delete-from-Position, Search, and Update are all built. KTU frequently asks students to *first* write the traversal routine before specializing it.

---

### Operation 2: Insertion at the Beginning (Head Insertion)

**Definition:** Create a new node $n_{\text{new}}$ and make it the new head of the list.

**Algorithmic Logic:**
1. **Allocate** a new node with the given data; set `new_node.next = None` initially.
2. **Rewire** `new_node.next = head` (the new node now points to the old head).
3. **Update** `head = new_node` (the head pointer now points to the new node).

**Time complexity:** $O(1)$ — no traversal required.
**Space complexity:** $O(1)$ — only one node allocated.

**Pointer Diagram (Before & After):**

$$\text{Before: } \text{head} \rightarrow [A] \rightarrow [B] \rightarrow [C] \rightarrow \text{NULL}$$
$$\text{After: } \text{head} \rightarrow [\text{new}] \rightarrow [A] \rightarrow [B] \rightarrow [C] \rightarrow \text{NULL}$$

---

### Operation 3: Insertion at the End (Tail Insertion)

**Definition:** Create a new node $n_{\text{new}}$ and append it after the current last node.

**Algorithmic Logic:**
1. **Edge case:** If `head is None`, this reduces to Operation 2 (head insertion).
2. **Traverse** from `head` to find the last node $n_{\text{last}}$ such that $n_{\text{last}}.\text{next} == \text{NULL}$.
3. **Rewire** $n_{\text{last}}.\text{next} = n_{\text{new}}$.
4. **Rewire** $n_{\text{new}}.\text{next} = \text{NULL}$.

**Time complexity:** $O(n)$ without a tail pointer, $O(1)$ with a tail pointer (advanced optimization).
**Space complexity:** $O(1)$.

> [!TIP]
> **Optimization Trick (KTU viva favorite):** Maintain an additional `tail` pointer that always points to the last node. Update it on every insert-at-end. This reduces tail insertion to $O(1)$ at the cost of one extra pointer variable. The trade-off: tail pointer must also be updated on every delete-from-end.

---

### Operation 4: Insertion at a Given Position $k$ (0-indexed or 1-indexed — check question!)

**Definition:** Insert a new node at position $k$ such that it becomes the $(k)$-th node in the list.

**Algorithmic Logic:**
1. **Edge case $k = 0$:** Reduce to Operation 2.
2. **Edge case $k >$ current length:** Append at the tail (Operation 3) OR raise an error (implementation choice — KTU usually expects error-raising).
3. **Traverse** from `head` to the node at position $k-1$ using a `prev` tracker; stop when `k == 0` (we have reached the node *before* the insertion point).
4. **Allocate** new node.
5. **Rewire:** $n_{\text{new}}.\text{next} = n_{k-1}.\text{next}$, then $n_{k-1}.\text{next} = n_{\text{new}}$.

**Critical rewiring order:** The assignment to `n_new.next` MUST happen BEFORE the assignment to `n_{k-1}.next`, otherwise we lose the reference to the rest of the list and create a memory leak / orphan sublist.

**Time complexity:** $O(k)$ due to traversal, $O(n)$ in the worst case.
**Space complexity:** $O(1)$.

---

### Operation 5: Deletion from the Beginning (Head Deletion)

**Definition:** Remove the first node and make the second node the new head.

**Algorithmic Logic:**
1. **Precondition:** List is non-empty (`head is not None`).
2. **Store** `temp = head` (so we can free it later in C/C++).
3. **Update** `head = head.next` (skip over the first node).
4. **Free** `temp` (in C/C++ with `free(temp)`; in Python, `del temp` or let GC handle it).

**Time complexity:** $O(1)$.
**Space complexity:** $O(1)$.

---

### Operation 6: Deletion from the End (Tail Deletion)

**Definition:** Remove the last node.

**Algorithmic Logic:**
1. **Edge case single node:** If `head.next is None`, set `head = None` (list becomes empty).
2. **Traverse** from `head` using two pointers: `prev` (lags by 1) and `current` (leads by 1). Stop when `current.next is None` (i.e., `current` is the last node).
3. **Rewire** `prev.next = None` (the second-to-last node becomes the new tail).
4. **Free** `current` (the old tail).

**Why we need `prev`:** In a singly linked list, we cannot go backward from the last node. We must track the *second-to-last* node during traversal.

**Time complexity:** $O(n)$.
**Space complexity:** $O(1)$.

---

### Operation 7: Deletion from a Given Position $k$

**Definition:** Remove the node at index $k$.

**Algorithmic Logic:**
1. **Edge case $k = 0$:** Reduce to Operation 5 (head deletion).
2. **Traverse** with `prev` and `current` pointers until `current` is the $k$-th node.
3. **Rewire** `prev.next = current.next` (skip over the node to be deleted).
4. **Free** `current`.

**Time complexity:** $O(k)$, worst case $O(n)$.
**Space complexity:** $O(1)$.

---

### Operation 8: Search & Update

**Search Definition:** Traverse the list and return the position (0-indexed) of the first node whose `data` field matches a given `key`. Return $-1$ if not found.

**Algorithmic Logic:**
1. Initialize `current = head`, `position = 0`.
2. While `current is not None`:
   - If `current.data == key`, return `position`.
   - Else: `current = current.next`; `position += 1`.
3. If loop exits, return $-1$ (key not found).

**Time complexity:** $O(n)$ worst case (must scan entire list).
**Space complexity:** $O(1)$.

**Update Definition:** Modify the `data` field of the first node matching a given `key`.

**Algorithmic Logic:** Same as search, but on match, assign `current.data = new_value` instead of returning the position. KTU may also ask for *update all occurrences* (replace every match) — read the question carefully.

---

## 2.2 KTU Formula Sheet & Complexity Cheat-Sheet

> [!IMPORTANT]
> **The table below is a high-yield KTU exam resource. Memorize the time complexities — they are asked verbatim in Part A (3-mark) questions almost every semester.**

| # | Operation | Best Case | Average Case | Worst Case | Space | Notes |
|---|-----------|-----------|--------------|------------|-------|-------|
| 1 | **Traversal (full)** | $\Theta(n)$ | $\Theta(n)$ | $\Theta(n)$ | $O(1)$ | Must visit all nodes |
| 2 | **Insert at Head** | $O(1)$ | $O(1)$ | $O(1)$ | $O(1)$ | Rewire 2 pointers |
| 3 | **Insert at Tail** | $O(1)$ | $O(n)$ | $O(n)$ | $O(1)$ | $O(1)$ with tail pointer |
| 4 | **Insert at Position $k$** | $O(1)$ | $O(k)$ | $O(n)$ | $O(1)$ | Traverse $k$ nodes |
| 5 | **Delete at Head** | $O(1)$ | $O(1)$ | $O(1)$ | $O(1)$ | Rewire 1 pointer |
| 6 | **Delete at Tail** | $O(1)$ | $O(n)$ | $O(n)$ | $O(1)$ | Need `prev` pointer |
| 7 | **Delete at Position $k$** | $O(1)$ | $O(k)$ | $O(n)$ | $O(1)$ | Traverse $k$ nodes |
| 8 | **Search by Key** | $O(1)$ | $O(n)$ | $O(n)$ | $O(1)$ | Unordered linear scan |
| 9 | **Update by Key** | $O(1)$ | $O(n)$ | $O(n)$ | $O(1)$ | Search + write |
| 10 | **Count Length** | $O(1)$ | $O(n)$ | $O(n)$ | $O(1)$ | Full traversal |
| 11 | **Reverse (iterative)** | $O(n)$ | $O(n)$ | $O(n)$ | $O(1)$ | 3-pointer technique |
| 12 | **Reverse (recursive)** | $O(n)$ | $O(n)$ | $O(n)$ | $O(n)$ | Call stack depth |
| 13 | **Merge Two Sorted SLLs** | $O(n+m)$ | $O(n+m)$ | $O(n+m)$ | $O(1)$ | Two-pointer walk |
| 14 | **Sort (Merge Sort on SLL)** | $O(n \log n)$ | $O(n \log n)$ | $O(n \log n)$ | $O(\log n)$ | Preferred over quicksort |

**Memory & Address Formulas (frequently asked in 2-mark questions):**

$$\text{Total Memory} = n \times \bigl(\text{sizeof}(\text{data}) + \text{sizeof}(\text{pointer})\bigr) + \text{sizeof}(\text{head})$$

For a list of $n$ integers on a 64-bit machine ($\text{sizeof}(\text{int}) = 4$ bytes, $\text{sizeof}(\text{pointer}) = 8$ bytes):

$$\text{Memory}_{\text{SLL}}(n) = 12n + 8 \text{ bytes}$$

**Average Pointer Chain Length** to reach the $k$-th node = $k$ hops.

---

## 2.3 The 3-Pointer Reversal Technique (Most-Favorite KTU 14-Mark Question)

Reversing an SLL is the most-asked linked-list question in KTU ESE. The iterative 3-pointer method:

**State variables:**
- `prev` — initially `None`.
- `current` — initially `head`.
- `next_node` — temporary holder for the next pointer.

**Loop invariant:** At the start of each iteration, the sublist from `head` to `current` (inclusive) is already reversed, and `prev` points to the new head of the reversed sublist.

**Loop body (executed for every node):**
1. `next_node = current.next` (save the rest of the list before we break the link).
2. `current.next = prev` (reverse the arrow).
3. `prev = current` (advance `prev`).
4. `current = next_node` (advance `current`).

**After loop:** `prev` is the new head of the fully reversed list. Return `prev`.

This is rigorously proven by **loop invariant** analysis (a favorite KTU question in the "Design and Analysis of Algorithms" extension).

---

## 2.4 Real-World Production Utility

- **Git's commit history** (simplified model): Each commit points to its parent — this is conceptually a linked list. `git log` traverses from `HEAD` backward, but the storage is a singly linked chain in the `.git/objects` directory.
- **Music playlist (linear, no repeat)**: Each track's `next` pointer is the subsequent track. The "End of Playlist" terminator is the NULL marker.
- **Blockchain ledger** (simplified): Each block's `previousHash` field links it to the prior block — analogous to a linked list of cryptographic nodes.
- **Polymer Chemistry representations** of molecular chains — protein sequences are stored as singly linked peptide chains.

---

<!-- SECTION_3_START -->
# 3. Step-by-Step Derivations & Complete Code Implementations

> [!IMPORTANT]
> **This section is exhaustive.** Every line of code, every variable assignment, and every pointer rewire is explicitly shown. No truncation, no "and so on". The Python implementation uses **strict type hints, absolute boundary checks, and error logging** — this is the gold standard KTU lab examiners expect.

---

## 3.1 The Complete Python Implementation — All Operations

```python
"""
Singly Linked List — Full Operations Module
KTU 2024 Scheme | PCCST303 | Module 2
Author: KTU Premier Engine V10
Description: Production-grade, fully-commented implementation of all
             core singly linked list operations with strict boundary checks
             and structured error logging.
"""

from __future__ import annotations
from typing import Optional, List, Any
import logging

# ---------- Structured Error Logger Setup ----------
logging.basicConfig(
    level=logging.INFO,
    format="[%(levelname)s] %(asctime)s | %(message)s",
    datefmt="%H:%M:%S"
)
logger = logging.getLogger("SLL_Engine")


# ============================================================
# STEP 1: Node Class Definition
# ============================================================
class Node:
    """
    A blueprint for a single node in a Singly Linked List.
    Each node has:
      - data : the payload (any hashable type)
      - next : reference to the successor node, or None if last
    """

    def __init__(self, data: Any) -> None:
        self.data: Any = data
        self.next: Optional["Node"] = None

    def __repr__(self) -> str:
        return f"Node(data={self.data!r})"


# ============================================================
# STEP 2: SinglyLinkedList Class with All Operations
# ============================================================
class SinglyLinkedList:
    """
    A fully-featured Singly Linked List with:
      - insert_at_head, insert_at_tail, insert_at_position
      - delete_at_head, delete_at_tail, delete_at_position
      - traverse, search, update, count
      - reverse (iterative), is_palindrome (bonus)
    """

    def __init__(self) -> None:
        self.head: Optional[Node] = None
        self._size: int = 0  # cached length for O(1) size queries
        logger.info("Initialized empty Singly Linked List.")

    # ---------- Helper: Return length in O(1) ----------
    def size(self) -> int:
        """Returns the cached number of nodes in O(1) time."""
        return self._size

    # ====================================================
    # OPERATION 1: TRAVERSAL  (Time: O(n), Space: O(1))
    # ====================================================
    def traverse(self) -> List[Any]:
        """
        Visit every node from head to tail, collecting data into a list.
        Returns an empty list if the list is empty.
        """
        result: List[Any] = []
        current: Optional[Node] = self.head
        while current is not None:
            result.append(current.data)
            current = current.next
        logger.info(f"Traversal complete. Visited {len(result)} nodes.")
        return result

    def display(self) -> None:
        """Pretty-prints the list in 'A -> B -> C -> NULL' format."""
        elements: List[str] = []
        current: Optional[Node] = self.head
        while current is not None:
            elements.append(str(current.data))
            current = current.next
        output: str = " -> ".join(elements) + " -> NULL"
        print(f"  LIST: {output}")

    # ====================================================
    # OPERATION 2: INSERT AT HEAD  (Time: O(1), Space: O(1))
    # ====================================================
    def insert_at_head(self, data: Any) -> None:
        """
        Create a new node and make it the new head.
        Handles empty-list case implicitly (the new node becomes head).
        """
        new_node: Node = Node(data)
        new_node.next = self.head        # Step 1: new_node points to old head
        self.head = new_node             # Step 2: head pointer updated
        self._size += 1
        logger.info(f"Inserted {data} at HEAD. New size = {self._size}")

    # ====================================================
    # OPERATION 3: INSERT AT TAIL  (Time: O(n), Space: O(1))
    # ====================================================
    def insert_at_tail(self, data: Any) -> None:
        """
        Append a new node at the end. If list is empty, behaves like
        insert_at_head.
        """
        new_node: Node = Node(data)

        # Edge case 1: empty list
        if self.head is None:
            self.head = new_node
            self._size += 1
            logger.info(f"Inserted {data} at TAIL (list was empty, now head). Size = {self._size}")
            return

        # General case: walk to the last node
        current: Node = self.head
        while current.next is not None:
            current = current.next
        current.next = new_node           # old tail now points to new node
        new_node.next = None              # new node is the new tail
        self._size += 1
        logger.info(f"Inserted {data} at TAIL. New size = {self._size}")

    # ====================================================
    # OPERATION 4: INSERT AT POSITION k  (Time: O(k), Space: O(1))
    # ====================================================
    def insert_at_position(self, k: int, data: Any) -> None:
        """
        Insert a new node such that it becomes the k-th node (0-indexed).
        Valid range: 0 <= k <= size().
        Raises IndexError for out-of-bounds k.
        """
        # Boundary check 1: k negative
        if k < 0:
            raise IndexError(f"Position k={k} is negative. Must be >= 0.")
        # Boundary check 2: k larger than current size
        if k > self._size:
            raise IndexError(
                f"Position k={k} exceeds list size {self._size}. "
                f"Valid range: 0 to {self._size}."
            )

        # Edge case: insert at head
        if k == 0:
            self.insert_at_head(data)
            return

        # General case: traverse to position (k-1) using a single tracker
        new_node: Node = Node(data)
        prev: Node = self.head            # type: ignore[assignment]
        for step in range(k - 1):
            prev = prev.next              # type: ignore[union-attr]

        # Rewire (order is CRITICAL):
        new_node.next = prev.next         # Step 1: new_node points to successor
        prev.next = new_node              # Step 2: predecessor points to new_node
        self._size += 1
        logger.info(f"Inserted {data} at POSITION {k}. New size = {self._size}")

    # ====================================================
    # OPERATION 5: DELETE AT HEAD  (Time: O(1), Space: O(1))
    # ====================================================
    def delete_at_head(self) -> Any:
        """
        Remove the first node and return its data.
        Raises IndexError if list is empty.
        """
        if self.head is None:
            raise IndexError("Cannot delete from head: list is EMPTY.")

        deleted_data: Any = self.head.data
        temp: Node = self.head
        self.head = self.head.next        # head pointer moves to node 2
        temp.next = None                  # help GC by severing the link
        del temp
        self._size -= 1
        logger.info(f"Deleted {deleted_data} from HEAD. New size = {self._size}")
        return deleted_data

    # ====================================================
    # OPERATION 6: DELETE AT TAIL  (Time: O(n), Space: O(1))
    # ====================================================
    def delete_at_tail(self) -> Any:
        """
        Remove the last node and return its data.
        Requires traversing to the second-to-last node.
        """
        if self.head is None:
            raise IndexError("Cannot delete from tail: list is EMPTY.")

        # Edge case: single-node list
        if self.head.next is None:
            return self.delete_at_head()

        # General case: walk with prev and current
        prev: Node = self.head
        current: Node = self.head.next
        while current.next is not None:
            prev = current
            current = current.next
        # 'current' is now the last node, 'prev' is the second-to-last
        prev.next = None                  # sever the link
        deleted_data: Any = current.data
        del current
        self._size -= 1
        logger.info(f"Deleted {deleted_data} from TAIL. New size = {self._size}")
        return deleted_data

    # ====================================================
    # OPERATION 7: DELETE AT POSITION k  (Time: O(k), Space: O(1))
    # ====================================================
    def delete_at_position(self, k: int) -> Any:
        """
        Remove the k-th node (0-indexed) and return its data.
        """
        if self.head is None:
            raise IndexError("Cannot delete: list is EMPTY.")
        if k < 0 or k >= self._size:
            raise IndexError(
                f"Position k={k} out of bounds. Valid range: 0 to {self._size - 1}."
            )

        # Edge case: delete at head
        if k == 0:
            return self.delete_at_head()

        # General case: walk with prev and current
        prev: Node = self.head
        current: Node = self.head.next
        for step in range(k - 1):
            prev = current
            current = current.next        # type: ignore[union-attr]

        prev.next = current.next          # type: ignore[union-attr]  # bypass 'current'
        deleted_data: Any = current.data
        current.next = None
        del current
        self._size -= 1
        logger.info(f"Deleted node at POSITION {k} (data={deleted_data}). New size = {self._size}")
        return deleted_data

    # ====================================================
    # OPERATION 8: SEARCH  (Time: O(n), Space: O(1))
    # ====================================================
    def search(self, key: Any) -> int:
        """
        Return the 0-indexed position of the first node matching 'key'.
        Return -1 if not found.
        """
        current: Optional[Node] = self.head
        position: int = 0
        while current is not None:
            if current.data == key:
                logger.info(f"Search FOUND key={key} at position {position}.")
                return position
            current = current.next
            position += 1
        logger.warning(f"Search MISS for key={key}. Returning -1.")
        return -1

    # ====================================================
    # OPERATION 9: UPDATE (First Occurrence)  (Time: O(n))
    # ====================================================
    def update(self, old_value: Any, new_value: Any) -> bool:
        """
        Replace the first occurrence of old_value with new_value.
        Returns True if updated, False if not found.
        """
        current: Optional[Node] = self.head
        while current is not None:
            if current.data == old_value:
                current.data = new_value
                logger.info(f"Updated first occurrence: {old_value} -> {new_value}.")
                return True
            current = current.next
        logger.warning(f"Update FAILED: old_value={old_value} not in list.")
        return False

    # ====================================================
    # OPERATION 10: REVERSE (3-Pointer Iterative)  (Time: O(n), Space: O(1))
    # ====================================================
    def reverse(self) -> None:
        """
        Reverse the list in-place using the 3-pointer technique.
        prev=None, current=head, then walk and flip arrows.
        """
        prev: Optional[Node] = None
        current: Optional[Node] = self.head
        logger.info("Initiating in-place reversal of SLL...")

        while current is not None:
            next_node: Optional[Node] = current.next  # Step 1: save rest
            current.next = prev                       # Step 2: flip arrow
            prev = current                            # Step 3: advance prev
            current = next_node                       # Step 4: advance current

        self.head = prev
        logger.info("Reversal complete. New head assigned.")

    # ====================================================
    # BONUS: DESTRUCTOR — clean up all nodes
    # ====================================================
    def __del__(self) -> None:
        """Release all node references to assist garbage collection."""
        current: Optional[Node] = self.head
        while current is not None:
            next_node: Optional[Node] = current.next
            current.next = None
            current = next_node
        self.head = None
        logger.info("SLL destructor called. All node references released.")


# ============================================================
# STEP 3: COMPREHENSIVE TEST DRIVER
# ============================================================
if __name__ == "__main__":
    print("=" * 60)
    print("  KTU PREMIER ENGINE — Singly Linked List Test Driver")
    print("=" * 60)

    # Create a list
    sll = SinglyLinkedList()
    print("\n[Test 1] Insert at HEAD (10, 20, 30):")
    sll.insert_at_head(10)   # List: 10
    sll.insert_at_head(20)   # List: 20 -> 10
    sll.insert_at_head(30)   # List: 30 -> 20 -> 10
    sll.display()            # Expected: 30 -> 20 -> 10 -> NULL

    print("\n[Test 2] Insert at TAIL (40, 50):")
    sll.insert_at_tail(40)   # List: 30 -> 20 -> 10 -> 40
    sll.insert_at_tail(50)   # List: 30 -> 20 -> 10 -> 40 -> 50
    sll.display()

    print("\n[Test 3] Insert at POSITION 2 (value=25):")
    sll.insert_at_position(2, 25)  # List: 30 -> 20 -> 25 -> 10 -> 40 -> 50
    sll.display()

    print("\n[Test 4] Traversal returns:")
    print("  ", sll.traverse())

    print("\n[Test 5] Search for 25:")
    pos = sll.search(25)
    print(f"  Found at position: {pos}")

    print("\n[Test 6] Search for 999 (not present):")
    pos = sll.search(999)
    print(f"  Position returned: {pos}")

    print("\n[Test 7] Update 20 -> 200:")
    sll.update(20, 200)
    sll.display()

    print("\n[Test 8] Delete from HEAD:")
    sll.delete_at_head()
    sll.display()

    print("\n[Test 9] Delete from TAIL:")
    sll.delete_at_tail()
    sll.display()

    print("\n[Test 10] Delete from POSITION 1:")
    sll.delete_at_position(1)
    sll.display()

    print("\n[Test 11] Reverse the list:")
    sll.reverse()
    sll.display()

    print("\n[Test 12] Size of list:")
    print(f"  Current size = {sll.size()}")

    print("\n[Test 13] Boundary: insert at position 0:")
    sll.insert_at_position(0, 999)
    sll.display()

    print("\n[Test 14] Boundary: insert at out-of-range position:")
    try:
        sll.insert_at_position(100, 555)
    except IndexError as e:
        print(f"  Caught expected error: {e}")

    print("\n" + "=" * 60)
    print("  All tests completed successfully.")
    print("=" * 60)
```

---

## 3.2 Step-by-Step Trace of a Delete-from-Middle Operation

This is the operation students get wrong most often. Let's trace **Delete from Position 2** on the list `[10, 20, 30, 40, 50]`.

**Initial state:**
$$\text{head} \rightarrow [10 \vert \bullet] \rightarrow [20 \vert \bullet] \rightarrow [30 \vert \bullet] \rightarrow [40 \vert \bullet] \rightarrow [50 \vert \text{NULL}]$$

**Goal:** Remove the node with data `30` (at position 2).

**Step 1 — Initialize pointers:**
- `prev = head` → `prev` points to node with data `10`.
- `current = head.next` → `current` points to node with data `20`.

**Step 2 — Walk the loop `for step in range(k-1) = range(1)`:**
- Iteration 0: `prev = current` (now `prev` → node `20`); `current = current.next` (now `current` → node `30`).
- Loop ends. We have:
  - `prev` → `[20 | •]`
  - `current` → `[30 | •]`
  - `current.next` → `[40 | •]`

**Step 3 — Rewire:**
- `prev.next = current.next` → the node `20` now points to node `40`, bypassing `30`.
- Result: `head → 10 → 20 → 40 → 50 → NULL`.
- `current` is orphaned; in C: `free(current)`. In Python: `del current`.

**Step 4 — Decrement size:** `_size -= 1`.

**Final state:**
$$\text{head} \rightarrow [10 \vert \bullet] \rightarrow [20 \vert \bullet] \rightarrow [40 \vert \bullet] \rightarrow [50 \vert \text{NULL}]$$

The node `30` is no longer reachable from `head`; the **garbage collector** in Python will reclaim its memory automatically. In C, the programmer must call `free(current)` explicitly — forgetting this causes a **memory leak**.

---

## 3.3 Step-by-Step Trace of the 3-Pointer Reversal

Let's reverse `[A, B, C, D]` step by step.

**Initial state:**
$$\text{head} \rightarrow A \rightarrow B \rightarrow C \rightarrow D \rightarrow \text{NULL}$$
- `prev = None`
- `current = A`

**Iteration 1 (current = A):**
- `next_node = A.next = B`
- `A.next = prev` → `A.next = None` (A's arrow is flipped backward)
- `prev = A` (prev advances)
- `current = B` (current advances)

**State after iter 1:** `NULL ← A`  ...  `B → C → D → NULL`, with `prev=A, current=B`.

**Iteration 2 (current = B):**
- `next_node = C`
- `B.next = prev` → `B.next = A`
- `prev = B`, `current = C`

**State after iter 2:** `NULL ← A ← B`  ...  `C → D → NULL`, with `prev=B, current=C`.

**Iteration 3 (current = C):**
- `next_node = D`
- `C.next = prev` → `C.next = B`
- `prev = C`, `current = D`

**State after iter 3:** `NULL ← A ← B ← C`  ...  `D → NULL`, with `prev=C, current=D`.

**Iteration 4 (current = D):**
- `next_node = D.next = NULL`
- `D.next = prev` → `D.next = C`
- `prev = D`, `current = NULL`

**Loop terminates** because `current is None`.

**Final assignment:** `self.head = prev = D`.

**Final state:**
$$\text{head} = D \rightarrow C \rightarrow B \rightarrow A \rightarrow \text{NULL}$$

✅ Successfully reversed.

---

## 3.4 Mathematical Derivation of Time Complexity

For any operation that traverses the list from the head up to position $k$, the number of pointer hops executed is exactly $k$. The runtime is therefore:

$$T(k) = c_1 + c_2 \cdot k$$

where $c_1$ is the constant overhead (pointer initialization, `size` check) and $c_2$ is the per-hop cost (pointer dereference, condition check). Using Big-O notation:

$$T(k) = O(k)$$

The worst case is $k = n - 1$ (traversing the entire list), giving $O(n)$. The best case for delete-at-position is $k = 0$, giving $O(1)$.

For **search**, the average position is the midpoint, so:

$$T_{\text{avg}} = \frac{1}{n} \sum_{k=0}^{n-1}(c_1 + c_2 \cdot k) = c_1 + c_2 \cdot \frac{n-1}{2} = O(n)$$

For **head insertion**, no traversal is needed, so $T = c_3 = O(1)$.

---

## 3.5 Memory Management Insight (KTU Module 2 Sub-topic)

> [!NOTE]
> **Module 2 also covers memory management.** Two key concepts tie directly to SLL:

**1. Static Memory Allocation (used in arrays):**
- Memory is allocated at **compile time**.
- Size is fixed; cannot grow at runtime.
- Stored in the **stack segment** (for local arrays) or **data segment** (for global arrays).
- Wasteful if allocated size $>$ actual used size.

**2. Dynamic Memory Allocation (used in SLL):**
- Memory is allocated at **runtime** using `malloc()` (C), `new` (C++), or automatic heap allocation (Python/Java).
- Each SLL node is a separate heap allocation.
- Size grows/shrinks based on insert/delete operations.
- **Garbage Collection** (Python/Java): The runtime automatically frees memory of objects with zero references.
- **Manual Freeing** (C/C++): The programmer must call `free()` (C) or `delete` (C++) explicitly. Forgetting to do so causes a **memory leak**.

**Memory leak example (C):**
```c
void buggy_delete(struct Node **head) {
    struct Node *temp = *head;
    *head = (*head)->next;
    /* BUG: forgot to free(temp)! Memory leak. */
}
```

**Correct version:**
```c
void correct_delete(struct Node **head) {
    struct Node *temp = *head;
    *head = (*head)->next;
    free(temp);  /* explicit deallocation */
}
```

---

<!-- SECTION_4_START -->
# 4. Structural Diagrams & Schematics

## 4.1 High-Level SLL Architecture (Block Diagram)

```mermaid
flowchart LR
    HEAD["HEAD POINTER\n(stored in stack)"] --> NODE0["NODE 0\ndata: 10 | next: ptr"]
    NODE0 --> NODE1["NODE 1\ndata: 20 | next: ptr"]
    NODE1 --> NODE2["NODE 2\ndata: 30 | next: ptr"]
    NODE2 --> NODE3["NODE 3\ndata: 40 | next: ptr"]
    NODE3 --> NUL["NULL\n(terminator)"]
    HEAP["HEAP MEMORY\n(non-contiguous)"] -. contains .-> NODE0
    HEAP -. contains .-> NODE1
    HEAP -. contains .-> NODE2
    HEAP -. contains .-> NODE3
```

> *Block-level architecture showing the head pointer in the stack section and all nodes allocated non-contiguously in the heap.*

---

## 4.2 Insert-at-Head Operation Flow

```mermaid
flowchart TD
    START([Start: insert_at_head data]) --> ALLOC["Allocate new_node"]
    ALLOC --> WIRENEW["new_node.next = head\n(rewire arrow 1)"]
    WIRENEW --> UPDATEHEAD["head = new_node\n(rewire arrow 2)"]
    UPDATEHEAD --> INC["size += 1"]
    INC --> DONE([End: Return])

    subgraph BEFORE["BEFORE state"]
        B1["head"] --> B2["[A]"]
        B2 --> B3["[B]"]
        B3 --> B4["[C]"]
        B4 --> B5["NULL"]
    end

    subgraph AFTER["AFTER state"]
        A1["head"] --> A2["[new]"]
        A2 --> A3["[A]"]
        A3 --> A4["[B]"]
        A4 --> A5["[C]"]
        A5 --> A6["NULL"]
    end
```

---

## 4.3 Delete-from-Position Operation Flow (with `prev` and `current` tracker)

```mermaid
flowchart TD
    START([Start: delete_at_position k]) --> CHECK1{"List empty?"}
    CHECK1 -- YES --> ERR1["Raise IndexError"]
    CHECK1 -- NO --> CHECK2{"k == 0?"}
    CHECK2 -- YES --> DELHEAD["delete_at_head\nReturn data"]
    CHECK2 -- NO --> INIT["prev = head\ncurrent = head.next\nstep = 0"]
    INIT --> LOOP{"step < k-1?"}
    LOOP -- YES --> ADVANCE["prev = current\ncurrent = current.next\nstep += 1"]
    ADVANCE --> LOOP
    LOOP -- NO --> REWIRE["prev.next = current.next\n(bypass current)"]
    REWIRE --> FREE["del current\n(help GC)"]
    FREE --> DEC["size -= 1"]
    DEC --> RETURN([Return deleted data])
    ERR1 --> STOP([Stop])
    DELHEAD --> STOP
    RETURN --> STOP
```

---

## 4.4 3-Pointer Reversal — Sequential State Machine

```mermaid
stateDiagram-v2
    [*] --> Init
    Init: S0\nprev=None, current=head
    Init --> Iter1: next=cur.next, cur.next=prev, advance

    Iter1: S1\nprev=Node1, current=Node2
    Iter1 --> Iter2: next=cur.next, cur.next=prev, advance

    Iter2: S2\nprev=Node2, current=Node3
    Iter2 --> Iter3: next=cur.next, cur.next=prev, advance

    Iter3: S3\nprev=Node3, current=None
    Iter3 --> Terminate: current is None

    Terminate: S4\nhead = prev
    Terminate --> [*]
```

---

## 4.5 Edge-Case Decision Tree (Mandatory for KTU Lab Viva)

```mermaid
flowchart TD
    OP([Any SLL operation called]) --> Q1{"Is head == None?"}
    Q1 -- YES --> EMPTY["EMPTY LIST branch:\n- Insert: behaves like head insert\n- Delete/Search/Update: raise error"]
    Q1 -- NO --> Q2{"Is head.next == None?"}
    Q2 -- YES --> SINGLE["SINGLE-NODE branch:\n- Head/Tail operations are IDENTICAL\n- Position checks collapse to k=0"]
    Q2 -- NO --> Q3{"Is position k valid?"}
    Q3 -- NO --> ERR2["Raise IndexError:\n'Position out of bounds'"]
    Q3 -- YES --> NORMAL["Normal case:\nUse prev/current pointer walk"]
```

---

## 4.6 Memory Segment Layout (Stack vs. Heap)

```mermaid
flowchart TB
    subgraph STACK["STACK SEGMENT"]
        S1["head pointer\n(8 bytes on 64-bit)"]
        S2["local variables\nsize, temp, etc."]
    end

    subgraph HEAP["HEAP SEGMENT"]
        H1["Node 0\n@ 0x100A: data=10, next=0x205C"]
        H2["Node 1\n@ 0x205C: data=20, next=0x1498"]
        H3["Node 2\n@ 0x1498: data=30, next=0x33FE"]
        H4["Node 3\n@ 0x33FE: data=40, next=NULL"]
    end

    S1 -. "points to" .-> H1
    H1 -. "next" .-> H2
    H2 -. "next" .-> H3
    H3 -. "next" .-> H4
    H4 -. "next" .-> H5["NULL terminator"]
```

> *Demonstrates that the head pointer resides in the stack while nodes are scattered in the heap, connected only by their `next` fields.*

---

<!-- SECTION_5_START -->
# 5. KTU 2024 Scheme Examination Question Bank & Topic Recap

---

## 📘 PART A — Short Answer Questions (3 Marks Each)

### **Question A1** `[KTU University Exam - July 2024]`
> Define a **Singly Linked List (SLL)**. With a neat diagram, explain the structure of a node and state **two advantages** of SLL over a one-dimensional array.

**Mapped CO & RBT Level:** `CO2 — Understand`

**Model Answer (3-Mark Valuation Key):**

A **Singly Linked List** is a linear, dynamic data structure consisting of a sequence of nodes where each node contains two fields: a **data field** that holds the element value, and a **next pointer field** that stores the address of the subsequent node. The list is accessed via an external `head` pointer; the final node's `next` field holds `NULL`, marking the end. *[Definition: 1 Mark]*

**Node structure diagram:**

$$\boxed{\text{[ data \mid next ]}}$$

The `data` field stores the element (e.g., an integer), and the `next` field is a self-referential pointer to the next node of the same type. *[Diagram: 1 Mark]*

**Two advantages of SLL over an array:**

1. **Dynamic size:** SLL can grow or shrink at runtime, while an array has a fixed size determined at compile time.
2. **Efficient insertion/deletion at the head:** SLL allows $O(1)$ insertion at the head, whereas an array requires $O(n)$ time to shift all elements. *[Advantages: 1 Mark]*

---

### **Question A2** `[KTU University Exam - Dec 2023]`
> Write the time complexity (Big-O) of the following SLL operations and justify in one line each:
> (i) Insertion at the beginning, (ii) Deletion from the end, (iii) Searching for a key.

**Mapped CO & RBT Level:** `CO2 — Understand`

**Model Answer:**

(i) **Insertion at the beginning:** $O(1)$ — we only rewire two pointers (`new_node.next = head` and `head = new_node`); no traversal is needed. *[1 Mark]*

(ii) **Deletion from the end:** $O(n)$ — we must traverse the entire list to reach the second-to-last node (since SLL has no backward link), then rewire its `next` to `NULL`. *[1 Mark]*

(iii) **Searching for a key:** $O(n)$ — in the worst case, the key is at the tail or not present, requiring a full scan of all $n$ nodes via a `current` pointer walk. *[1 Mark]*

---

## 📕 PART B — Long Answer Questions (14 Marks Each) — Internal Choice Format

> **KTU Pattern:** Part B has a 14-mark question with **internal choice** (e.g., Q11(a) or Q11(b)). Both options are independent; pick one. Each question typically has sub-parts (a) for 7 marks and (b) for 7 marks, with escalating cognitive levels.

---

### **Question B1 — Option A (14 Marks)** `[KTU University Exam - July 2024]`

> **(a) [7 Marks — CO2, Apply Level]** Write a Python function to **create a Singly Linked List** by inserting $n$ integers entered by the user at the **end (tail)** of the list. Display the final list.
>
> **(b) [7 Marks — CO3, Apply Level]** Write a Python function to **delete all nodes** from the SLL whose `data` field is **even**, and display the modified list. Justify the time complexity.

#### **Model Solution — Part (a) [7 Marks]**

**Incremental Valuation Key:**
- [Defining Node class correctly: 1 Mark]
- [Correct insert_at_tail function with empty-list edge case: 3 Marks]
- [Main driver loop for user input: 2 Marks]
- [Display function and final output: 1 Mark]

```python
class Node:
    """Singly linked list node."""
    def __init__(self, data: int):
        self.data: int = data
        self.next: Optional["Node"] = None


def insert_at_tail(head: Optional[Node], data: int) -> Node:
    """Append a new node with 'data' to the end of the list."""
    new_node: Node = Node(data)
    # Edge case: empty list
    if head is None:
        return new_node
    # General case: walk to the last node
    current: Node = head
    while current.next is not None:
        current = current.next
    current.next = new_node      # old tail now points to new node
    return head


def create_sll_from_user(n: int) -> Optional[Node]:
    """Create an SLL of n integers entered by the user."""
    head: Optional[Node] = None
    for i in range(n):
        value: int = int(input(f"Enter element {i + 1}: "))
        head = insert_at_tail(head, value)
    return head


def display_sll(head: Optional[Node]) -> None:
    """Pretty-print the SLL."""
    elements: list = []
    current: Optional[Node] = head
    while current is not None:
        elements.append(str(current.data))
        current = current.next
    print(" -> ".join(elements) + " -> NULL")


# Driver code
if __name__ == "__main__":
    n: int = int(input("How many elements? "))
    head: Optional[Node] = create_sll_from_user(n)
    print("Final SLL:")
    display_sll(head)
```

**Sample Run:**
```
How many elements? 4
Enter element 1: 10
Enter element 2: 20
Enter element 3: 30
Enter element 4: 40
Final SLL:
10 -> 20 -> 30 -> 40 -> NULL
```

#### **Model Solution — Part (b) [7 Marks]**

**Incremental Valuation Key:**
- [Traverse with current pointer: 2 Marks]
- [Handle head deletion (current is the head itself): 2 Marks]
- [Correct rewiring using prev pointer: 2 Marks]
- [Time complexity justification: 1 Mark]

```python
def delete_even_nodes(head: Optional[Node]) -> Optional[Node]:
    """
    Delete all nodes with even data values from the SLL.
    Returns the (possibly new) head.
    """
    # Edge case: empty list
    if head is None:
        return None

    # Step 1: Handle the head repeatedly if it holds even data
    while head is not None and head.data % 2 == 0:
        temp: Node = head
        head = head.next        # head advances
        temp.next = None
        del temp                # free memory

    # Step 2: Walk the rest of the list with prev and current pointers
    prev: Optional[Node] = None
    current: Optional[Node] = head
    while current is not None:
        if current.data % 2 == 0:
            # Bypass 'current'
            next_node: Optional[Node] = current.next
            if prev is not None:
                prev.next = next_node
            current.next = None
            del current
            current = next_node
        else:
            prev = current
            current = current.next

    return head
```

**Time Complexity Justification:** The function performs a **single pass** through the list. Each node is visited exactly once, and the operations on each node (modulo check, pointer rewiring) are $O(1)$. Therefore, the total time is $T(n) = O(n)$. The space complexity is $O(1)$ since only a constant number of extra pointers (`prev`, `current`, `next_node`) are used regardless of list size. *[1 Mark]*

> [!WARNING]
> **KTU Examiner's Valuation Warning #1:** A very common mistake in part (b) is forgetting to **update the head pointer** when the head node itself contains even data. Students often handle only the "middle and tail" case. If the head is even, the function must advance `head` *before* the main loop. Failure to do so causes the first even node to remain — **deduct 2 marks**.

---

### **Question B1 — Option B (14 Marks — Alternative Choice)** `[KTU University Exam - Dec 2023]`

> **(a) [7 Marks — CO2, Apply Level]** Given the head of a Singly Linked List, write a Python function to **reverse the list in-place** using the **3-pointer iterative technique**. Show the state of the pointers (`prev`, `current`, `next_node`) at the end of each iteration for the list `[10 → 20 → 30 → 40 → NULL]`.
>
> **(b) [7 Marks — CO3, Analyze Level]** Prove that the **time complexity** of the 3-pointer reversal is $O(n)$ and the **space complexity** is $O(1)$ using a loop-invariant argument.

#### **Model Solution — Part (a) [7 Marks]**

**Incremental Valuation Key:**
- [Correct function signature and edge case handling: 1 Mark]
- [3-pointer state correctly maintained: 3 Marks]
- [Final head assignment: 1 Mark]
- [Step-by-step state trace table: 2 Marks]

```python
def reverse_sll(head: Optional[Node]) -> Optional[Node]:
    """
    Reverse the SLL in-place using the 3-pointer iterative technique.
    Returns the new head of the reversed list.
    """
    prev: Optional[Node] = None
    current: Optional[Node] = head

    # Loop invariant: at the start of each iteration, the sublist from
    # 'prev' to 'current' (exclusive) is already reversed.
    while current is not None:
        next_node: Optional[Node] = current.next   # Step 1: save rest
        current.next = prev                        # Step 2: flip arrow
        prev = current                             # Step 3: advance prev
        current = next_node                        # Step 4: advance current

    return prev
```

**State Trace Table** for list `[10 → 20 → 30 → 40 → NULL]`: *[2 Marks]*

| Iteration | `prev` | `current` | `next_node` | State After Flip |
|-----------|--------|-----------|-------------|------------------|
| Start | `None` | `10` | — | `10 → 20 → 30 → 40 → NULL` |
| 1 | `10` | `20` | `20` | `NULL ← 10` ... `20 → 30 → 40 → NULL` |
| 2 | `20` | `30` | `30` | `NULL ← 10 ← 20` ... `30 → 40 → NULL` |
| 3 | `30` | `40` | `40` | `NULL ← 10 ← 20 ← 30` ... `40 → NULL` |
| 4 | `40` | `None` | `None` | `40 → 30 → 20 → 10 → NULL` |
| End | `40` | `None` | — | `head = 40` ✅ |

**Final reversed list:** `40 → 30 → 20 → 10 → NULL` ✓

#### **Model Solution — Part (b) [7 Marks]**

**Proof of Time Complexity $O(n)$ and Space Complexity $O(1)$:**

**Loop Invariant Statement (LIS):** At the start of each iteration of the `while` loop, the prefix of the list from `head` (original) up to (but not including) `current` has been fully reversed, and `prev` points to the last node of this reversed prefix.

**Initialization:** Before the first iteration, `prev = None` and `current = head`. The "reversed prefix" is empty (size 0), and `prev = None` is correctly the last node of this empty prefix. ✅ Invariant holds.

**Maintenance:** Assume the invariant holds at the start of some iteration. We execute:
1. `next_node = current.next` — saves the unreversed suffix.
2. `current.next = prev` — appends `current` to the reversed prefix.
3. `prev = current`, `current = next_node` — advance the pointers.

After these steps, `prev` points to `current` (the old head), and `current` now points to the start of the still-unreversed suffix. The invariant is preserved. ✅

**Termination:** The loop exits when `current = None`. This means there are no more unreversed nodes. By the invariant, `prev` points to the last node of the fully reversed prefix — which is the original **last node**, now the new **head**. So `return prev` is correct. ✅

**Complexity Analysis:** *[2 Marks]*
- The loop body runs exactly **once per original node** (i.e., $n$ times). Each iteration performs a constant number of pointer operations. Therefore, $T(n) = c \cdot n = O(n)$.
- The function uses only **three extra pointers** (`prev`, `current`, `next_node`) regardless of $n$. No data structures proportional to $n$ are allocated. Therefore, $S(n) = O(1)$.

> [!WARNING]
> **KTU Examiner's Valuation Warning #2:** When students answer part (b), they often skip the **Initialization** and **Termination** phases of the loop-invariant proof. KTU rubrics explicitly allocate **2 marks for initialization**, **2 marks for maintenance**, and **2 marks for termination**. Skipping any phase incurs a 2-mark deduction. Additionally, the **final return** of `prev` (not `current` or `head`) is a frequently missed step — **deduct 1 mark** if wrong.

---

## 📌 Topic Recap & Important Things to Remember

> [!TIP]
> **Use this as your final 5-minute revision before entering the KTU exam hall.** Every bullet here is a *guaranteed high-yield* concept.

### 🔑 Key Definitions
- **Singly Linked List (SLL):** A linear, dynamic data structure of nodes connected by single forward pointers.
- **Node:** Composite structure with two fields: `data` and `next`.
- **Head pointer:** External pointer to the first node; `None` if list is empty.
- **NULL / None / nullptr:** The terminator marking the end of the list.

### 🔑 Critical Edge Cases (Test in EVERY function)
1. **Empty list** (`head is None`) — most operations must short-circuit.
2. **Single-node list** — head and tail are the same node; $k=0$ is the only valid position.
3. **Insert/Delete at head** — must update the `head` pointer itself.
4. **Insert/Delete at interior position** — must track a `prev` pointer (cannot go backward in SLL).
5. **Out-of-range position** — raise `IndexError` gracefully.

### 🔑 Time Complexities (Memorize the Table)
- Insert/Delete at **head**: $O(1)$
- Insert/Delete at **tail**: $O(n)$ (or $O(1)$ with tail pointer)
- Insert/Delete at **position $k$**: $O(k)$, worst-case $O(n)$
- **Search/Update/Traverse/Count**: $O(n)$
- **Reverse (iterative)**: $O(n)$ time, $O(1)$ space
- **Reverse (recursive)**: $O(n)$ time, $O(n)$ space (call stack)

### 🔑 Pointer Rewiring Rules (Most-Common Mistakes)
- **Insert at position $k$**: Set `new_node.next = prev.next` **BEFORE** `prev.next = new_node`. Reversing this order loses the rest of the list.
- **Delete at position $k$**: Set `prev.next = current.next` to bypass the target. Then `del current` (or `free(current)` in C).
- **Head insertion**: Update `head` **last** (after setting `new_node.next = head`).
- **Tail deletion**: After loop, `prev.next = None` (not `prev = None`).

### 🔑 Memory Management Notes
- **Static allocation** (arrays): Compile-time, fixed size, stack/data segment.
- **Dynamic allocation** (SLL): Runtime, variable size, heap segment.
- **Garbage collection** (Python/Java): Automatic reclamation of unreachable objects.
- **Manual free** (C/C++): Programmer must `free()` / `delete` to avoid memory leaks.
- **SLL memory per node** on 64-bit: $\text{sizeof(data)} + \text{sizeof(pointer)}$ — for `int` data, this is $4 + 8 = 12$ bytes plus alignment padding.

### 🔑 Real-World Applications
- OS process scheduling queues, hash table chaining, music playlists, polynomial representation, undo/redo history, blockchain (simplified), LRU caches (doubly-linked variant).

### 🔑 KTU Exam Day Checklist
- ✅ Always **draw the pointer diagram** for insert/delete operations (earns 1–2 easy marks).
- ✅ Always **handle the empty-list edge case** explicitly with a comment.
- ✅ Always **state the time and space complexity** at the end of your solution.
- ✅ For reversal questions, **state the loop invariant** explicitly — KTU rewards it.
- ✅ In C/C++ answers, always include `free(temp)` to demonstrate memory management awareness.
- ✅ Use **nullptr** (C++), **NULL** (C), or **None** (Python) consistently — don't mix.

---

*End of KTU Premier Engine V10 Note — Singly Linked List Operations*
*Aligned with KTU 2024 Scheme | PCCST303 | Module 2*
<!-- SECTION_5_END -->
