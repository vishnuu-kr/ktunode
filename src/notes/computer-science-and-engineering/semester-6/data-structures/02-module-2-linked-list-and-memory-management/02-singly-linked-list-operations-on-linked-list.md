---
title: "Singly Linked List - Operations on Linked List"
subject: "DATA STRUCTURES"
module: "Module 2: Linked List and Memory Management"
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8be99"
status: "completed"
scrapedAt: "2026-05-20T16:51:55.474Z"
---
# DATA STRUCTURES: Module 2 - Linked List and Memory Management

## Topic: Singly Linked List - Operations on Linked List

---

### Learning Outcomes:

*   Understand the fundamental operations performed on a singly linked list.
*   Implement traversal and searching operations.
*   Implement insertion operations at various positions (beginning, end, middle).
*   Implement deletion operations at various positions (beginning, end, middle).
*   Understand the concept of memory management in the context of linked lists.

---

### 1. Introduction to Singly Linked Lists

A singly linked list is a linear data structure where each element (called a **node**) contains two parts:
*   **Data:** The value stored in the node.
*   **Next Pointer:** A reference (or pointer) to the subsequent node in the sequence.

The last node in the list has its `next` pointer set to `NULL` (or `None`), indicating the end of the list.

**Key Concepts:**

*   **Node:** The basic building block of a linked list.
*   **Head:** A pointer to the first node in the list. If the list is empty, `head` is `NULL`.
*   **Tail:** A pointer to the last node in the list. (Though not strictly necessary for all operations, it can optimize adding to the end).
*   **NULL/None:** Represents the end of the list.

**Memory Management Aspect:**

Unlike arrays, linked lists do not require contiguous memory allocation. Each node can be stored anywhere in memory, and their sequential order is maintained by the `next` pointers. This dynamic allocation allows for flexible growth and shrinking of the list.

**Example Node Structure (Conceptual - in C/C++ style):**

```c
struct Node {
    int data;         // The data stored in the node
    struct Node *next; // Pointer to the next node
};
```

---

### 2. Basic Operations on a Singly Linked List

The core operations revolve around manipulating the nodes and their pointers.

#### 2.1. Traversal

Traversing a linked list involves visiting each node in sequence, starting from the `head`.

**Algorithm:**

1.  Start with a temporary pointer, say `current`, initialized to the `head`.
2.  While `current` is not `NULL`:
    *   Perform the desired operation on `current->data` (e.g., print it).
    *   Move `current` to the next node: `current = current->next`.

**Example (Printing all elements):**

```c
void displayList(struct Node* head) {
    struct Node* current = head;
    if (head == NULL) {
        printf("List is empty.\n");
        return;
    }
    printf("List elements: ");
    while (current != NULL) {
        printf("%d -> ", current->data);
        current = current->next;
    }
    printf("NULL\n");
}
```

#### 2.2. Searching

Searching for a specific value in a linked list involves traversing the list and comparing the data of each node with the target value.

**Algorithm:**

1.  Start with a temporary pointer, say `current`, initialized to the `head`.
2.  While `current` is not `NULL`:
    *   If `current->data` matches the `target_value`, return `current` (or `true`, or the node's position).
    *   Move `current` to the next node: `current = current->next`.
3.  If the loop finishes without finding the value, return `NULL` (or `false`).

**Example (Finding a node with a specific value):**

```c
struct Node* searchList(struct Node* head, int target_value) {
    struct Node* current = head;
    while (current != NULL) {
        if (current->data == target_value) {
            return current; // Found the node
        }
        current = current->next;
    }
    return NULL; // Value not found
}
```

---

### 3. Insertion Operations

Insertion involves creating a new node and linking it into the list at the desired position.

#### 3.1. Insertion at the Beginning

This is one of the most efficient insertion operations.

**Algorithm:**

1.  Create a new node, `newNode`, and allocate memory for it.
2.  Set `newNode->data` to the desired value.
3.  Set `newNode->next` to the current `head` of the list.
4.  Update the `head` to point to `newNode`: `head = newNode`.

**Memory Management:** Dynamic allocation is used to create the new node.

**Example:**

```c
struct Node* insertAtBeginning(struct Node* head, int new_data) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    if (newNode == NULL) {
        printf("Memory allocation failed!\n");
        return head; // Return original head if allocation fails
    }
    newNode->data = new_data;
    newNode->next = head; // New node points to the old head
    return newNode;       // New node becomes the new head
}
```

#### 3.2. Insertion at the End

To insert at the end, we need to traverse the list to find the last node.

**Algorithm:**

1.  Create a new node, `newNode`, and allocate memory for it.
2.  Set `newNode->data` to the desired value.
3.  Set `newNode->next` to `NULL`.
4.  **Case 1: List is empty.** If `head` is `NULL`, set `head = newNode`.
5.  **Case 2: List is not empty.**
    *   Traverse the list with a temporary pointer `current` starting from `head`.
    *   Keep moving `current` until `current->next` is `NULL` (i.e., `current` points to the last node).
    *   Set `current->next = newNode`.

**Memory Management:** Dynamic allocation for the new node.

**Example:**

```c
struct Node* insertAtEnd(struct Node* head, int new_data) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    if (newNode == NULL) {
        printf("Memory allocation failed!\n");
        return head;
    }
    newNode->data = new_data;
    newNode->next = NULL; // New node will be the last

    // If the list is empty, the new node is the head
    if (head == NULL) {
        head = newNode;
        return head;
    }

    // Traverse to the last node
    struct Node* current = head;
    while (current->next != NULL) {
        current = current->next;
    }

    // Link the last node to the new node
    current->next = newNode;
    return head;
}
```

**Optimization:** If a `tail` pointer is maintained, insertion at the end becomes as efficient as insertion at the beginning. The new node is simply linked after the `tail`, and the `tail` pointer is updated.

#### 3.3. Insertion in the Middle (After a Specific Node)

This involves finding the node *after which* the new node should be inserted.

**Algorithm:**

1.  Create a new node, `newNode`, and allocate memory for it.
2.  Set `newNode->data` to the desired value.
3.  **Find the `previousNode`:** Traverse the list to find the node *after which* you want to insert.
4.  **Link:**
    *   Set `newNode->next` to `previousNode->next`.
    *   Set `previousNode->next` to `newNode`.

**Memory Management:** Dynamic allocation for the new node.

**Example (Insert after a given node):**

```c
void insertAfterNode(struct Node* previousNode, int new_data) {
    if (previousNode == NULL) {
        printf("Previous node cannot be NULL.\n");
        return;
    }

    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    if (newNode == NULL) {
        printf("Memory allocation failed!\n");
        return;
    }
    newNode->data = new_data;

    newNode->next = previousNode->next; // New node points to the node after previousNode
    previousNode->next = newNode;       // previousNode points to the new node
}
```

**Note:** To insert *before* a node, you'd typically find the node *preceding* it and then use the `insertAfterNode` logic.

---

### 4. Deletion Operations

Deletion involves finding the node to be deleted and then deallocating its memory and updating the pointers.

#### 4.1. Deletion of the First Node

**Algorithm:**

1.  **Check if the list is empty:** If `head` is `NULL`, do nothing.
2.  **Store the current head:** Create a temporary pointer, `temp`, and set it to `head`.
3.  **Update head:** Set `head` to `head->next`.
4.  **Deallocate memory:** Free the memory occupied by `temp` (the old head).

**Memory Management:** `free()` is used to deallocate the memory of the removed node.

**Example:**

```c
struct Node* deleteFirstNode(struct Node* head) {
    if (head == NULL) {
        printf("List is empty. Cannot delete.\n");
        return NULL;
    }

    struct Node* temp = head; // Store the current head
    head = head->next;        // Move head to the next node
    free(temp);               // Free the memory of the original head
    return head;              // Return the new head
}
```

#### 4.2. Deletion of the Last Node

This requires traversing to the second-to-last node.

**Algorithm:**

1.  **Check if the list is empty:** If `head` is `NULL`, do nothing.
2.  **Check if there's only one node:** If `head->next` is `NULL`, free `head` and set `head` to `NULL`.
3.  **Traverse to the second-to-last node:**
    *   Use two pointers: `current` starting at `head`, and `previous` starting as `NULL`.
    *   Iterate while `current->next` is not `NULL`. In each iteration, update `previous = current` and `current = current->next`.
    *   When the loop ends, `current` points to the last node, and `previous` points to the second-to-last node.
4.  **Remove the last node:**
    *   Set `previous->next` to `NULL`.
    *   Free `current` (the last node).

**Memory Management:** `free()` is used to deallocate memory.

**Example:**

```c
struct Node* deleteLastNode(struct Node* head) {
    if (head == NULL) {
        printf("List is empty. Cannot delete.\n");
        return NULL;
    }

    // If there's only one node
    if (head->next == NULL) {
        free(head);
        return NULL; // List becomes empty
    }

    struct Node* current = head;
    struct Node* previous = NULL;

    // Traverse to the last node
    while (current->next != NULL) {
        previous = current;
        current = current->next;
    }

    // Remove the last node
    previous->next = NULL; // Unlink the last node
    free(current);         // Free the memory of the last node

    return head; // Head remains the same
}
```

**Optimization:** If a `tail` pointer is maintained, deletion of the last node becomes more complex as you need to find the new tail (the second-to-last node) which still requires traversal unless you're tracking the previous node during traversal.

#### 4.3. Deletion of a Specific Node (by Value or by Node Pointer)

**Algorithm (by Value):**

1.  **Check if the list is empty:** If `head` is `NULL`, do nothing.
2.  **Handle deletion of the head:** If `head->data` matches the `key_to_delete`, call `deleteFirstNode` and return the new head.
3.  **Traverse to find the node and its predecessor:**
    *   Use two pointers: `current` starting at `head`, and `previous` starting as `NULL`.
    *   Iterate while `current` is not `NULL` and `current->data` is not the `key_to_delete`.
    *   In each iteration, update `previous = current` and `current = current->next`.
4.  **If the node is found:**
    *   Check if `current` is `NULL` (meaning the key wasn't found).
    *   If `current` is not `NULL`, then `current` points to the node to be deleted, and `previous` points to its predecessor.
    *   Set `previous->next = current->next` (bypass the node to be deleted).
    *   Free `current`.
5.  Return the original `head` (unless the head itself was deleted).

**Memory Management:** `free()` is used.

**Example (Delete by value):**

```c
struct Node* deleteNodeByValue(struct Node* head, int key_to_delete) {
    // Case 1: List is empty
    if (head == NULL) {
        printf("List is empty. Cannot delete.\n");
        return NULL;
    }

    // Case 2: Head node itself holds the key to be deleted
    if (head->data == key_to_delete) {
        return deleteFirstNode(head); // Reuse the deleteFirstNode function
    }

    struct Node* current = head;
    struct Node* previous = NULL;

    // Search for the key to be deleted, keeping track of the previous node
    while (current != NULL && current->data != key_to_delete) {
        previous = current;
        current = current->next;
    }

    // If the key was not present in linked list
    if (current == NULL) {
        printf("%d not found in the list.\n", key_to_delete);
        return head;
    }

    // Unlink the node from the linked list
    previous->next = current->next;

    // Free memory
    free(current);

    return head; // Return the original head
}
```

---

### 5. Memory Management in Linked Lists

*   **Dynamic Allocation:** Nodes in a linked list are typically allocated dynamically using functions like `malloc()` (in C/C++) or `new` (in C++). This allows the list to grow or shrink as needed at runtime.
*   **Deallocation:** When a node is no longer needed (e.g., during deletion), its memory must be explicitly deallocated using `free()` (in C/C++) or `delete` (in C++). Failure to do so leads to **memory leaks**, where memory remains allocated but inaccessible, eventually causing the program to consume excessive memory or crash.
*   **Dangling Pointers:** If a pointer points to a memory location that has already been deallocated, it becomes a dangling pointer. Accessing a dangling pointer leads to undefined behavior. Care must be taken to ensure pointers are updated or set to `NULL` after deallocation.
*   **Garbage Collection:** Some programming languages (like Java, Python) have automatic garbage collection. The memory manager automatically reclaims memory that is no longer referenced by any part of the program. This simplifies memory management for the programmer but might introduce overhead.

**Important Note on Memory Leaks:** Always ensure that every `malloc()` or `new` has a corresponding `free()` or `delete`.

---

### 6. Practice Questions/Exercises

**Question 1:**
Write a function to count the number of nodes in a singly linked list.

**Question 2:**
Implement a function to reverse a singly linked list.

**Question 3:**
Write a function to insert a node at a specific position `k` (where `k=0` is the beginning, `k=1` is after the first node, etc.). Handle invalid positions.

**Question 4:**
Implement a function to delete a node at a specific position `k`. Handle invalid positions.

**Question 5:**
Given two sorted singly linked lists, merge them into a single sorted linked list.

---

### 7. Answers to Practice Questions

**Answer 1 (Count Nodes):**

```c
int countNodes(struct Node* head) {
    int count = 0;
    struct Node* current = head;
    while (current != NULL) {
        count++;
        current = current->next;
    }
    return count;
}
```

**Answer 2 (Reverse Linked List):**

```c
struct Node* reverseList(struct Node* head) {
    struct Node* prev = NULL;
    struct Node* current = head;
    struct Node* next = NULL;

    while (current != NULL) {
        next = current->next; // Store next node
        current->next = prev; // Reverse current node's pointer
        prev = current;       // Move pointers one position ahead
        current = next;
    }
    head = prev; // New head is the last node of original list
    return head;
}
```

**Answer 3 (Insert at Position k):**

```c
struct Node* insertAtPosition(struct Node* head, int new_data, int position) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    if (newNode == NULL) {
        printf("Memory allocation failed!\n");
        return head;
    }
    newNode->data = new_data;

    // If inserting at the beginning (position 0)
    if (position == 0) {
        newNode->next = head;
        return newNode;
    }

    struct Node* current = head;
    int current_pos = 0;

    // Traverse to the node before the desired position
    while (current != NULL && current_pos < position - 1) {
        current = current->next;
        current_pos++;
    }

    // If position is out of bounds
    if (current == NULL) {
        printf("Position %d is out of bounds.\n", position);
        free(newNode); // Free the allocated node
        return head;
    }

    // Insert the new node
    newNode->next = current->next;
    current->next = newNode;

    return head;
}
```

**Answer 4 (Delete at Position k):**

```c
struct Node* deleteAtPosition(struct Node* head, int position) {
    // If the list is empty
    if (head == NULL) {
        printf("List is empty. Cannot delete.\n");
        return NULL;
    }

    // If deleting the head node
    if (position == 0) {
        return deleteFirstNode(head); // Reuse deleteFirstNode
    }

    struct Node* current = head;
    struct Node* previous = NULL;
    int current_pos = 0;

    // Traverse to the node to be deleted and its predecessor
    while (current != NULL && current_pos < position) {
        previous = current;
        current = current->next;
        current_pos++;
    }

    // If position is out of bounds
    if (current == NULL) {
        printf("Position %d is out of bounds.\n", position);
        return head;
    }

    // Unlink the node
    previous->next = current->next;
    free(current); // Free the deleted node

    return head;
}
```

**Answer 5 (Merge Two Sorted Lists):**

```c
struct Node* mergeSortedLists(struct Node* list1, struct Node* list2) {
    // Handle empty lists
    if (list1 == NULL) return list2;
    if (list2 == NULL) return list1;

    struct Node* merged_head = NULL;
    struct Node* tail = NULL;

    // Determine the head of the merged list
    if (list1->data <= list2->data) {
        merged_head = list1;
        list1 = list1->next;
    } else {
        merged_head = list2;
        list2 = list2->next;
    }
    tail = merged_head;

    // Merge the remaining nodes
    while (list1 != NULL && list2 != NULL) {
        if (list1->data <= list2->data) {
            tail->next = list1;
            list1 = list1->next;
        } else {
            tail->next = list2;
            list2 = list2->next;
        }
        tail = tail->next;
    }

    // Append any remaining nodes
    if (list1 != NULL) {
        tail->next = list1;
    }
    if (list2 != NULL) {
        tail->next = list2;
    }

    return merged_head;
}
```

---

### 8. Important Points to Remember

*   **NULL Termination:** Always ensure the last node's `next` pointer is `NULL`.
*   **Head Pointer:** The `head` pointer is crucial for accessing the list. Operations that modify the head must return the new head.
*   **Memory Management:** **Crucial!** Always `free()` dynamically allocated memory when nodes are deleted to prevent memory leaks.
*   **Edge Cases:** Consider empty lists, lists with one node, and operations at the beginning/end of the list.
*   **Traversal:** Understand how to move through the list using the `next` pointers.
*   **Pointer Manipulation:** Linked list operations heavily rely on correctly manipulating `next` pointers. A single misplaced pointer can corrupt the list.

---
