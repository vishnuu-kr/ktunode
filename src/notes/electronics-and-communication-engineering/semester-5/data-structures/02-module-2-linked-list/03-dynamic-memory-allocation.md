---
title: "Dynamic Memory Allocation"
subject: "DATA STRUCTURES"
module: "Module 2: Linked List"
branch: "Electronics and Communication Engineering"
semester: 5
topicId: "68a5c45fb09ce205780fea0a"
status: "completed"
scrapedAt: "2026-05-23T17:55:04.018Z"
---
## DATA STRUCTURES - Module 2: Linked List

### Topic: Dynamic Memory Allocation

---

### 1. Introduction to Dynamic Memory Allocation

Dynamic memory allocation is a programming technique that allows memory to be allocated and deallocated as needed during the execution of a program. This contrasts with static memory allocation, where memory is allocated at compile time. In the context of linked lists, dynamic memory allocation is crucial because the size of the list is not fixed and can grow or shrink as elements are added or removed.

**Key Concepts:**

*   **Memory Management:** The process of allocating and deallocating memory to programs.
*   **Heap Memory:** A region of memory where dynamic allocation occurs. It's a pool of memory that a program can request and release.
*   **Stack Memory:** Used for storing local variables and function call information. Memory is allocated and deallocated automatically as functions are called and return.
*   **Pointers:** Variables that store memory addresses. They are essential for linking nodes in a linked list.

**Why is Dynamic Memory Allocation Essential for Linked Lists?**

*   **Flexibility:** Linked lists can grow or shrink dynamically without requiring prior knowledge of the maximum size. This is a significant advantage over arrays, which have a fixed size.
*   **Efficient Memory Usage:** Memory is only allocated when a new node is required, preventing wasted space that might occur with pre-allocated large arrays.
*   **Node Structure:** Each node in a linked list typically contains data and a pointer to the next node. The size of a node can vary depending on the data it holds, making dynamic allocation ideal.

---

### 2. Memory Allocation Functions in C (Referencing Horowitz, Sahni, & Anderson-Freed)

C provides standard library functions for dynamic memory allocation, primarily found in the `<stdlib.h>` header file.

**2.1. `malloc()` (Memory Allocation)**

*   **Purpose:** Allocates a block of memory of a specified size and returns a pointer to the beginning of the allocated block.
*   **Syntax:** `void *malloc(size_t size);`
*   **Return Value:**
    *   On success, a `void` pointer to the allocated memory.
    *   On failure (if memory cannot be allocated), returns `NULL`.
*   **Important:** The allocated memory is uninitialized, meaning it can contain garbage values. You *must* cast the `void` pointer to the appropriate data type.

**Example (for a single node):**

```c
#include <stdio.h>
#include <stdlib.h>

// Define the structure for a node in a linked list
struct Node {
    int data;
    struct Node *next;
};

int main() {
    struct Node *newNode; // Declare a pointer to a Node

    // Allocate memory for a single Node
    newNode = (struct Node *)malloc(sizeof(struct Node));

    if (newNode == NULL) {
        printf("Memory allocation failed!\n");
        return 1; // Indicate an error
    }

    // Initialize the allocated memory
    newNode->data = 10;
    newNode->next = NULL;

    printf("Node created with data: %d\n", newNode->data);

    // Free the allocated memory when no longer needed (important!)
    free(newNode);

    return 0;
}
```

**2.2. `calloc()` (Contiguous Allocation)**

*   **Purpose:** Allocates memory for an array of elements, initializes all bits of the allocated memory to zero, and returns a pointer to the beginning of the memory.
*   **Syntax:** `void *calloc(size_t num_elements, size_t element_size);`
*   **Return Value:**
    *   On success, a `void` pointer to the allocated memory.
    *   On failure, returns `NULL`.
*   **Advantage:** Initializes memory to zero, which can be useful for preventing uninitialized data issues.

**Example (allocating space for 5 integers):**

```c
#include <stdio.h>
#include <stdlib.h>

int main() {
    int *arr;
    int n = 5;

    // Allocate memory for 5 integers and initialize to 0
    arr = (int *)calloc(n, sizeof(int));

    if (arr == NULL) {
        printf("Memory allocation failed!\n");
        return 1;
    }

    printf("Allocated memory:\n");
    for (int i = 0; i < n; i++) {
        printf("%d ", arr[i]); // Will print 0 0 0 0 0
    }
    printf("\n");

    // Free the allocated memory
    free(arr);

    return 0;
}
```

**2.3. `realloc()` (Reallocation)**

*   **Purpose:** Changes the size of the memory block pointed to by `ptr` to `new_size`. The contents of the memory block are preserved up to the minimum of the old and new sizes.
*   **Syntax:** `void *realloc(void *ptr, size_t new_size);`
*   **Return Value:**
    *   On success, a pointer to the resized memory block. This might be the same as `ptr` or a new location if the original block could not be extended.
    *   On failure, returns `NULL`, and the original block pointed to by `ptr` remains unchanged.
*   **Important:** If `realloc` returns a new pointer, the original pointer becomes invalid. Always assign the result of `realloc` to a temporary pointer first to avoid losing the original memory block if reallocation fails.

**Example (resizing an array):**

```c
#include <stdio.h>
#include <stdlib.h>

int main() {
    int *arr;
    int n = 5;

    // Allocate initial memory for 5 integers
    arr = (int *)malloc(n * sizeof(int));

    if (arr == NULL) {
        printf("Initial allocation failed!\n");
        return 1;
    }

    // Initialize the array
    for (int i = 0; i < n; i++) {
        arr[i] = i + 1;
    }

    printf("Original array:\n");
    for (int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    printf("\n");

    // Resize the array to hold 10 integers
    int new_n = 10;
    int *temp_arr = (int *)realloc(arr, new_n * sizeof(int));

    if (temp_arr == NULL) {
        printf("Reallocation failed! Original memory block remains.\n");
        // arr is still valid and points to the original 5 integers
        // free(arr); // If you want to free the original memory
        return 1;
    }

    // Update the pointer to the new memory block
    arr = temp_arr;

    // Initialize the newly allocated portion
    for (int i = n; i < new_n; i++) {
        arr[i] = i + 1;
    }

    printf("Resized array:\n");
    for (int i = 0; i < new_n; i++) {
        printf("%d ", arr[i]);
    }
    printf("\n");

    // Free the allocated memory
    free(arr);

    return 0;
}
```

**2.4. `free()` (Deallocation)**

*   **Purpose:** Deallocates the memory block pointed to by `ptr`, returning it to the heap.
*   **Syntax:** `void free(void *ptr);`
*   **Important:**
    *   `ptr` must be a pointer returned by `malloc`, `calloc`, or `realloc`.
    *   Do not `free` memory that was not dynamically allocated (e.g., static or stack variables).
    *   Do not `free` the same memory block twice (double free). This leads to undefined behavior.
    *   After freeing, the pointer itself still holds the old address (it becomes a "dangling pointer"). It's good practice to set the pointer to `NULL` after freeing to prevent accidental use.

**Example (setting pointer to NULL after free):**

```c
#include <stdio.h>
#include <stdlib.h>

int main() {
    int *p = (int *)malloc(sizeof(int));
    if (p == NULL) {
        printf("Allocation failed\n");
        return 1;
    }
    *p = 50;
    printf("Value: %d\n", *p);

    free(p);
    p = NULL; // Set pointer to NULL after freeing

    // Attempting to access p after freeing (if not set to NULL) would be dangerous.
    // If p is NULL, dereferencing it will cause a crash, indicating an error.
    // if (p != NULL) {
    //     printf("Value after free: %d\n", *p); // This line would be an error if p was not set to NULL
    // }

    return 0;
}
```

---

### 3. Dynamic Memory Allocation in Linked List Operations (Referencing Samanta D)

Dynamic memory allocation is central to implementing linked list operations like insertion, deletion, and traversal.

**3.1. Node Creation for Insertion**

When a new element is to be added to a linked list, a new node must be created dynamically.

**Example: Creating a new node for insertion**

```c
#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node *next;
};

// Function to create a new node
struct Node* createNode(int value) {
    struct Node *newNode = (struct Node *)malloc(sizeof(struct Node));
    if (newNode == NULL) {
        printf("Memory allocation failed for new node!\n");
        return NULL; // Indicate failure
    }
    newNode->data = value;
    newNode->next = NULL;
    return newNode;
}

// Example usage:
int main() {
    struct Node *head = NULL;
    struct Node *newNode;

    // Create a new node with value 20
    newNode = createNode(20);

    if (newNode != NULL) {
        // If the list is empty, the new node becomes the head
        if (head == NULL) {
            head = newNode;
        } else {
            // (Logic to insert newNode into the list, e.g., at the beginning)
            newNode->next = head;
            head = newNode;
        }
        printf("Node with data %d created and added.\n", newNode->data);
    }

    // In a real linked list implementation, you would free nodes when deleting them
    // or when the list is no longer needed.
    if (head != NULL) {
        free(head); // Free the single node created for this example
        head = NULL;
    }

    return 0;
}
```

**3.2. Deallocating Memory for Node Deletion**

When a node is removed from a linked list, its dynamically allocated memory must be deallocated to prevent memory leaks.

**Example: Deleting a node**

```c
#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node *next;
};

// Function to delete a node with a specific value (simplified example)
// Assumes 'head' is a pointer to the head of the list (passed by reference)
void deleteNode(struct Node **headRef, int valueToDelete) {
    struct Node *current = *headRef;
    struct Node *prev = NULL;

    // Case 1: The node to be deleted is the head node
    if (current != NULL && current->data == valueToDelete) {
        *headRef = current->next; // Change head
        free(current);            // Free the old head
        printf("Node with value %d deleted.\n", valueToDelete);
        return;
    }

    // Case 2: Search for the node to be deleted, keep track of the previous node
    while (current != NULL && current->data != valueToDelete) {
        prev = current;
        current = current->next;
    }

    // If the value was not present in the list
    if (current == NULL) {
        printf("Node with value %d not found.\n", valueToDelete);
        return;
    }

    // Case 3: Node found and it's not the head
    prev->next = current->next; // Unlink the node from the list
    free(current);              // Free the memory of the deleted node
    printf("Node with value %d deleted.\n", valueToDelete);
}

// Example usage (requires a linked list setup, simplified for demonstration)
int main() {
    struct Node *head = NULL;
    struct Node *second = NULL;
    struct Node *third = NULL;

    // Create nodes
    head = (struct Node *)malloc(sizeof(struct Node));
    second = (struct Node *)malloc(sizeof(struct Node));
    third = (struct Node *)malloc(sizeof(struct Node));

    if (head == NULL || second == NULL || third == NULL) {
        printf("Memory allocation failed!\n");
        return 1;
    }

    // Link nodes
    head->data = 1; head->next = second;
    second->data = 2; second->next = third;
    third->data = 3; third->next = NULL;

    printf("Original list: 1 -> 2 -> 3\n");

    // Delete node with value 2
    deleteNode(&head, 2); // Pass address of head

    // Delete node with value 1 (head node)
    deleteNode(&head, 1);

    // Attempt to delete a non-existent node
    deleteNode(&head, 5);

    // Free remaining nodes (third node in this case)
    // In a full implementation, you'd iterate and free all.
    if (head != NULL) {
        free(head);
    }
    if (second != NULL) { // second node was freed by deleteNode
        // this is conceptually wrong, second should be NULL now if it was deleted
        // For this example, if 2 was deleted, second is freed. If head (1) was deleted, then second becomes head.
        // Let's assume 2 was deleted, then head is 1, second is 3.
        // If 1 is deleted, then 3 becomes head.
        // Let's trace:
        // Initial: head=1->2->3
        // deleteNode(&head, 2): prev=head(1), current=second(2). prev->next = current->next (1->3). free(second). List: 1->3. head is still 1.
        // deleteNode(&head, 1): current=head(1). *headRef = current->next (head=3). free(current). List: 3. head is now 3.
        // deleteNode(&head, 5): Not found. List: 3. head is still 3.
    }

    // Correctly freeing the rest of the list
    struct Node* temp;
    while (head != NULL) {
        temp = head;
        head = head->next;
        free(temp);
    }

    return 0;
}
```

---

### 4. Memory Leaks and Dangling Pointers

**4.1. Memory Leaks**

*   **Definition:** A memory leak occurs when dynamically allocated memory is no longer referenced by any pointer but has not been deallocated using `free()`. This memory remains unusable by the program until it terminates.
*   **Causes in Linked Lists:**
    *   Forgetting to `free()` nodes when they are removed from the list.
    *   Losing the pointer to the head of the list before deallocating all its nodes.
    *   Incorrectly managing pointers during node insertion or deletion, leading to nodes becoming unreachable.

**Example of a Memory Leak:**

```c
#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node *next;
};

void createAndLoseNode() {
    struct Node *temp = (struct Node *)malloc(sizeof(struct Node));
    if (temp == NULL) return;
    temp->data = 100;
    temp->next = NULL;
    // 'temp' pointer goes out of scope here, but the memory allocated for the node is NOT freed.
    // This is a memory leak if this function is called repeatedly.
    printf("Node created but not freed.\n");
}

int main() {
    createAndLoseNode();
    // The memory allocated within createAndLoseNode is now leaked.
    // If called in a loop:
    // for (int i = 0; i < 1000; i++) {
    //     createAndLoseNode();
    // }
    // The program would consume a lot of memory.
    return 0;
}
```

**4.2. Dangling Pointers**

*   **Definition:** A dangling pointer is a pointer that still points to a memory location that has been deallocated (freed).
*   **Causes in Linked Lists:**
    *   Freeing a node but not setting the pointer that pointed to it to `NULL`. If another pointer still references the freed memory, it becomes a dangling pointer.
    *   When deleting a node, if other pointers were also pointing to that same node (e.g., if nodes had `prev` pointers in a doubly linked list, or if a separate pointer was tracking a specific node), those pointers become dangling.

**Example of a Dangling Pointer:**

```c
#include <stdio.h>
#include <stdlib.h>

int main() {
    int *p = (int *)malloc(sizeof(int));
    if (p == NULL) return 1;
    *p = 20;
    printf("Value: %d\n", *p);

    free(p); // Memory is deallocated. 'p' still holds the address.

    // 'p' is now a dangling pointer. Accessing *p leads to undefined behavior.
    // printf("Value after free: %d\n", *p); // DANGEROUS!

    // Good practice: set to NULL after freeing
    p = NULL;

    // Now, attempting to dereference p will cause a crash (which is better than undefined behavior)
    // if (p != NULL) {
    //     printf("Value after NULL assignment: %d\n", *p);
    // }

    return 0;
}
```

**Important to Remember:**

*   Always pair `malloc`/`calloc`/`realloc` with `free`.
*   When deallocating a node in a linked list, ensure all pointers to that node are updated or that the pointer variable itself is set to `NULL` after `free()`.
*   Be careful with `realloc`. If it fails, the original pointer is still valid.

---

### 5. Course Outcome Alignment

This topic directly supports:

*   **CO2: Solve real world problems efficiently using appropriate data structures like arrays, linked list, stacks and queues.** (Knowledge Level: K3)
    *   Dynamic memory allocation is fundamental to implementing linked lists efficiently for problems where data size is dynamic (e.g., managing a list of users, inventory items, etc.). Understanding memory management is key to preventing performance degradation due to memory leaks or crashes from invalid memory access.

---

### 6. Practice Questions and Exercises

**Q1. (Conceptual)** Explain the difference between static and dynamic memory allocation and why dynamic allocation is preferred for linked lists.

**Q2. (Code)** Write a C program that:
    a. Defines a `struct Node` for a singly linked list with an integer `data` field and a `next` pointer.
    b. Creates a function `insertAtEnd` that takes a pointer to the head of the list and an integer value. This function should dynamically allocate a new node, initialize it with the given value, and append it to the end of the list.
    c. Includes a `main` function that demonstrates inserting 3 elements into an empty list and then prints the list.
    d. Ensures all allocated memory is freed when the list is no longer needed (e.g., by writing a `freeList` function).

**Q3. (Conceptual)** What is a memory leak, and how can it occur when working with linked lists? Provide a small code snippet that might cause a memory leak.

**Q4. (Conceptual)** What is a dangling pointer? How can you prevent them, especially after freeing a node in a linked list?

**Q5. (Code)** Write a C function `deleteFirstNode` that removes the first node from a singly linked list. The function should take a pointer to the head pointer (e.g., `struct Node **headRef`) and correctly deallocate the memory of the removed node.

---

### 7. Answers to Practice Questions

**A1. (Conceptual)**
*   **Static Memory Allocation:** Memory is allocated at compile time. The size and lifetime of variables are fixed. Examples include global variables and local variables on the stack.
*   **Dynamic Memory Allocation:** Memory is allocated at runtime from a pool called the heap. The programmer explicitly requests and releases memory.
*   **Preference for Linked Lists:** Linked lists often deal with data that can grow or shrink unpredictably. Dynamic allocation allows nodes to be created only when needed (on insertion) and deallocated when no longer required (on deletion), optimizing memory usage and providing flexibility. Static allocation would require pre-determining a maximum list size, which might lead to wasted space or overflow.

**A2. (Code)**

```c
#include <stdio.h>
#include <stdlib.h>

// Definition of the Node structure
struct Node {
    int data;
    struct Node *next;
};

// Function to create a new node
struct Node* createNode(int value) {
    struct Node *newNode = (struct Node *)malloc(sizeof(struct Node));
    if (newNode == NULL) {
        printf("Memory allocation failed for new node!\n");
        return NULL;
    }
    newNode->data = value;
    newNode->next = NULL;
    return newNode;
}

// Function to insert a node at the end of the list
void insertAtEnd(struct Node **headRef, int value) {
    struct Node *newNode = createNode(value);
    if (newNode == NULL) {
        return; // Allocation failed
    }

    // If the list is empty, the new node becomes the head
    if (*headRef == NULL) {
        *headRef = newNode;
    } else {
        // Traverse to the last node
        struct Node *current = *headRef;
        while (current->next != NULL) {
            current = current->next;
        }
        // Append the new node
        current->next = newNode;
    }
    printf("Inserted %d at the end.\n", value);
}

// Function to print the linked list
void printList(struct Node *head) {
    struct Node *current = head;
    printf("List: ");
    while (current != NULL) {
        printf("%d -> ", current->data);
        current = current->next;
    }
    printf("NULL\n");
}

// Function to free all nodes in the linked list
void freeList(struct Node **headRef) {
    struct Node *current = *headRef;
    struct Node *next;
    while (current != NULL) {
        next = current->next; // Save the next node
        free(current);        // Free the current node
        current = next;       // Move to the next node
    }
    *headRef = NULL; // Set head to NULL after freeing
    printf("List memory freed.\n");
}

int main() {
    struct Node *head = NULL; // Initialize an empty list

    // Insert elements
    insertAtEnd(&head, 10);
    insertAtEnd(&head, 20);
    insertAtEnd(&head, 30);

    // Print the list
    printList(head);

    // Free the allocated memory
    freeList(&head);

    return 0;
}
```

**A3. (Conceptual)**
A memory leak occurs when memory allocated dynamically using `malloc`, `calloc`, or `realloc` is no longer accessible by the program (i.e., no pointers point to it), but it has not been deallocated using `free`. This leaked memory remains occupied and cannot be reused by the program, potentially leading to memory exhaustion.

**Code Snippet Causing a Memory Leak:**

```c
void createNodeAndLeak() {
    struct Node *temp = (struct Node *)malloc(sizeof(struct Node));
    if (temp == NULL) return;
    temp->data = 50;
    temp->next = NULL;
    // If the pointer 'temp' is lost or goes out of scope before free(temp),
    // the memory allocated for the node is leaked.
    // For example, if this function is called inside a loop without
    // a way to free 'temp', it leaks on every iteration.
}
```

**A4. (Conceptual)**
A dangling pointer is a pointer that still points to a memory location that has already been deallocated. Accessing memory through a dangling pointer leads to undefined behavior, which can manifest as crashes or corrupted data.

**Prevention:**
The most common way to prevent dangling pointers, especially in linked lists after deleting a node, is to set the pointer variable that used to point to the deallocated memory to `NULL` immediately after calling `free()`.

For example, if `current` points to a node to be freed:
```c
struct Node *nodeToFree = current;
// ... logic to update pointers pointing to 'current' ...
free(nodeToFree);
nodeToFree = NULL; // Now, nodeToFree is NULL, not dangling.
```
In a linked list context, if `prev->next` was pointing to `current`, after `free(current)`, you should ideally set `current` (the variable that held the address before `free`) to `NULL` if it's still in scope and might be used, or ensure `prev->next` is correctly updated.

**A5. (Code)**

```c
#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node *next;
};

// Function to delete the first node from a singly linked list
// Returns the new head of the list, or NULL if the list becomes empty
struct Node* deleteFirstNode(struct Node **headRef) {
    struct Node *temp = NULL; // To hold the node to be deleted

    // Check if the list is empty
    if (*headRef == NULL) {
        printf("Cannot delete from an empty list.\n");
        return NULL;
    }

    // Store the head node temporarily
    temp = *headRef;

    // Update the head to point to the next node
    *headRef = (*headRef)->next;

    // Deallocate the memory of the original head node
    free(temp);
    temp = NULL; // Set temp to NULL (good practice)

    printf("First node deleted.\n");
    return *headRef; // Return the new head
}

// Helper function to print list (for testing)
void printList(struct Node *head) {
    struct Node *current = head;
    printf("List: ");
    while (current != NULL) {
        printf("%d -> ", current->data);
        current = current->next;
    }
    printf("NULL\n");
}

// Helper function to create a node (for testing)
struct Node* createNode(int value) {
    struct Node *newNode = (struct Node *)malloc(sizeof(struct Node));
    if (newNode == NULL) {
        printf("Memory allocation failed for new node!\n");
        return NULL;
    }
    newNode->data = value;
    newNode->next = NULL;
    return newNode;
}

// Helper function to free the list (for testing)
void freeList(struct Node **headRef) {
    struct Node *current = *headRef;
    struct Node *next;
    while (current != NULL) {
        next = current->next;
        free(current);
        current = next;
    }
    *headRef = NULL;
}

int main() {
    struct Node *head = NULL;

    // Create a list: 10 -> 20 -> 30
    head = createNode(10);
    head->next = createNode(20);
    head->next->next = createNode(30);

    printList(head); // Output: List: 10 -> 20 -> 30 -> NULL

    // Delete the first node
    head = deleteFirstNode(&head); // head will now point to the node with data 20

    printList(head); // Output: List: 20 -> 30 -> NULL

    // Delete the next first node
    head = deleteFirstNode(&head); // head will now point to the node with data 30

    printList(head); // Output: List: 30 -> NULL

    // Delete the last node
    head = deleteFirstNode(&head); // head will now be NULL

    printList(head); // Output: List: NULL

    // Try deleting from an empty list
    head = deleteFirstNode(&head); // Output: Cannot delete from an empty list.

    // No need to call freeList here because deleteFirstNode frees each node.
    // If the list was larger and we only deleted a few, we'd use freeList for the rest.

    return 0;
}

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=gI-qXk7XojA) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=Q-tL8_628gE) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=p6Q9_e7_L1w) |
