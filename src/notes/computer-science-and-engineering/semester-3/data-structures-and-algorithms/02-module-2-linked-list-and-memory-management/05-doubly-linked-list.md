---
title: "Doubly Linked List"
subject: "DATA STRUCTURES AND ALGORITHMS"
module: "Module 2: Linked List and Memory Management"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ac35"
status: "completed"
scrapedAt: "2026-05-20T16:22:55.351Z"
---
# DATA STRUCTURES AND ALGORITHMS - Module 2: Linked List and Memory Management - Doubly Linked List

## 1. Introduction

This module delves into the concept of doubly linked lists, a fundamental data structure.  Doubly linked lists build upon the singly linked list structure by adding the capability to traverse the list in both forward and backward directions. This feature enhances the flexibility and efficiency of certain operations. We will explore the structure, operations, and advantages of doubly linked lists.

## 2. Learning Outcomes

By the end of this module, you will be able to:

*   **Understand the structure of a doubly linked list.**
*   **Implement basic operations on a doubly linked list (insertion, deletion, traversal, search).**
*   **Compare and contrast doubly linked lists with singly linked lists.**
*   **Analyze the time and space complexity of doubly linked list operations.**
*   **Recognize the advantages and disadvantages of using doubly linked lists in specific scenarios.**
*   **Apply doubly linked lists to solve real-world problems.**

## 3. Key Concepts and Definitions

*   **Node:** A fundamental unit in a linked list. In a doubly linked list, each node contains:
    *   **Data:** The value stored in the node.
    *   **Next Pointer:** A pointer to the next node in the list.
    *   **Previous Pointer:** A pointer to the previous node in the list.

*   **Doubly Linked List:** A linear data structure where each node points to both the next and the previous node in the sequence.

*   **Head:** The first node in the list.  It's used to access the list.

*   **Tail:** The last node in the list.  The `next` pointer of the tail node points to `NULL`.

*   **Traversal:** The process of visiting each node in the list, typically starting from the head or tail.

*   **Insertion:** Adding a new node to the list.

*   **Deletion:** Removing an existing node from the list.

*   **Search:** Finding a specific node within the list based on its data.

## 4. Structure of a Doubly Linked List

A doubly linked list consists of a sequence of nodes. Each node contains three components:

*   **Data Field:** Stores the actual data (e.g., integer, string, object).
*   **Next Pointer:** Points to the subsequent node in the list. If it's the last node, this pointer is NULL.
*   **Previous Pointer:** Points to the preceding node in the list. If it's the first node, this pointer is NULL.

**Visual Representation:**

```
NULL <-> [Data | Next | Prev] <-> [Data | Next | Prev] <-> [Data | Next | Prev] <-> NULL
         Head                           ...                          Tail
```

## 5. Implementing Doubly Linked Lists

Here's a conceptual outline of how to implement a doubly linked list in code (example in Python, but the principles apply to other languages):

```python
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None
        self.prev = None

class DoublyLinkedList:
    def __init__(self):
        self.head = None

    # Insertion Operations
    def insert_at_beginning(self, data):
        new_node = Node(data)
        if self.head is None:
            self.head = new_node
            return
        else:
            new_node.next = self.head
            self.head.prev = new_node
            self.head = new_node

    def insert_at_end(self, data):
        new_node = Node(data)
        if self.head is None:
            self.head = new_node
            return

        current = self.head
        while current.next:
            current = current.next

        current.next = new_node
        new_node.prev = current

    def insert_after(self, prev_node, data):
        if prev_node is None:
            print("Previous node cannot be None.")
            return

        new_node = Node(data)

        new_node.next = prev_node.next
        prev_node.next = new_node
        new_node.prev = prev_node

        if new_node.next is not None:
            new_node.next.prev = new_node
            
    # Deletion Operations
    def delete_node(self, key):
        current = self.head

        # If head node itself holds the key to be deleted
        if current is not None and current.data == key:
            self.head = current.next
            if current.next is not None:
                current.next.prev = None  # Update prev of head node
            current = None
            return

        # Search for the key to be deleted, keep track of the
        # previous node as we need to change 'prev'
        while current is not None and current.data != key:
            current = current.next

        # If key was not present in linked list
        if current is None:
            return

        # Unlink the node from linked list
        if current.next is not None:
            current.next.prev = current.prev
        if current.prev is not None:
            current.prev.next = current.next
        current = None

    # Traversal Operations
    def traverse_forward(self):
        current = self.head
        while current:
            print(current.data, end=" ")
            current = current.next
        print()

    def traverse_backward(self):
        current = self.head
        if current is None:
            return
        while current.next:
            current = current.next

        while current:
            print(current.data, end=" ")
            current = current.prev
        print()

    # Search operation
    def search(self, key):
      current = self.head
      while current:
        if current.data == key:
          return True
        current = current.next
      return False


# Example Usage:
dll = DoublyLinkedList()
dll.insert_at_beginning(10)
dll.insert_at_end(20)
dll.insert_after(dll.head, 15) # Insert 15 after the head
print("Forward Traversal:")
dll.traverse_forward()  # Output: 10 15 20

print("Backward Traversal:")
dll.traverse_backward() # Output: 20 15 10

dll.delete_node(15)
print("Forward Traversal after deletion of 15:")
dll.traverse_forward()  # Output: 10 20
```

## 6. Operations on Doubly Linked Lists

*   **Insertion:**

    *   **At the beginning:**  O(1) - Requires updating the head pointer and adjusting pointers of the new node and the original head.
    *   **At the end:** O(n) (if tail pointer not maintained) or O(1) (if tail pointer is maintained) - Requires traversing to the end (if tail pointer not maintained) to find the last node, then adjusting pointers.  If tail pointer is maintained, it is O(1).
    *   **After a given node:** O(1) - Requires adjusting the pointers of the new node, the given node, and the node following the given node.

*   **Deletion:**

    *   **From the beginning:** O(1) - Requires updating the head pointer and adjusting the `prev` pointer of the new head.
    *   **From the end:** O(n) (if tail pointer not maintained) or O(1) (if tail pointer is maintained) - Requires traversing to the end (if tail pointer not maintained) to find the last node, then adjusting pointers and the tail pointer.  If tail pointer is maintained, it is O(1).
    *   **Of a given node:** O(n) - Requires searching for the node to be deleted (in the worst case, traversing the entire list), then adjusting the pointers of its neighboring nodes.  If you have a pointer to the node to be deleted, it's O(1).

*   **Traversal:**

    *   **Forward:** O(n) - Iterates through the list from head to tail.
    *   **Backward:** O(n) - Iterates through the list from tail to head.

*   **Search:** O(n) - Requires traversing the list until the desired node is found, or the end of the list is reached.

## 7. Comparing Doubly Linked Lists with Singly Linked Lists

| Feature           | Singly Linked List                      | Doubly Linked List                      |
|-------------------|-----------------------------------------|-----------------------------------------|
| Pointers         | One pointer (next)                      | Two pointers (next and previous)        |
| Traversal        | Forward only                             | Forward and backward                     |
| Memory Usage     | Less memory per node                     | More memory per node                    |
| Insertion/Deletion| Can be more complex in some cases       | Easier insertion/deletion in general     |
| Implementation    | Simpler to implement                    | More complex to implement               |

**Advantages of Doubly Linked Lists:**

*   **Bidirectional Traversal:**  Allows traversing the list in both directions, improving efficiency for operations that require backward traversal.
*   **Easier Deletion:** Deletion is generally easier, particularly when you already have a pointer to the node to be deleted. In singly linked lists, you need to maintain a pointer to the *previous* node to be deleted.

**Disadvantages of Doubly Linked Lists:**

*   **Increased Memory Usage:** Each node requires an additional pointer (the previous pointer), leading to higher memory consumption.
*   **More Complex Implementation:** Requires more careful management of pointers, making the implementation more complex compared to singly linked lists.

## 8. Applications of Doubly Linked Lists

Doubly linked lists are used in various applications, including:

*   **Implementing Undo/Redo Functionality:**  Each action can be stored in a node, allowing users to easily move back and forth through their actions.
*   **Web Browser History:**  Similar to undo/redo, allowing users to navigate back and forth between visited pages.
*   **Music Playlist:**  Allows users to easily navigate to the next or previous song in a playlist.
*   **LRU (Least Recently Used) Cache:**  Used to efficiently manage cached data by tracking the order of access.  The most recently used items are kept near the "head" and least recently used items near the "tail".
*   **Text Editors:**  Used to represent the text content, allowing efficient insertion and deletion of characters at any position.
*   **Operating System Task Scheduling:** Can be used to manage the queue of processes waiting for execution.

## 9. Time and Space Complexity Analysis

| Operation           | Time Complexity | Space Complexity |
|-------------------|-----------------|-------------------|
| Insertion (Beginning)| O(1)            | O(1)              |
| Insertion (End - Tail Ptr)   | O(1)            | O(1)              |
| Insertion (End - No Tail Ptr)     | O(n)             | O(1)              |
| Insertion (After Node)| O(1)            | O(1)              |
| Deletion (Beginning)| O(1)            | O(1)              |
| Deletion (End - Tail Ptr)  | O(1)            | O(1)              |
| Deletion (End - No Tail Ptr) | O(n)             | O(1)              |
| Deletion (Specific Node - Pointer available) | O(1)  | O(1)  |
| Deletion (Specific Node - No Pointer available)          | O(n)             | O(1)              |
| Traversal (Forward) | O(n)            | O(1)              |
| Traversal (Backward)| O(n)            | O(1)              |
| Search              | O(n)            | O(1)              |

**Space Complexity:**  The space complexity of a doubly linked list is O(n), where n is the number of nodes in the list, as each node requires storage for its data and two pointers.

## 10. Practice Questions/Exercises

1.  **Implement the `search` function for the `DoublyLinkedList` class (as provided in the code example). The function should take a key (the data to search for) as input and return `True` if the key is found in the list, and `False` otherwise.**

    **Answer:** See the `search` function implemented in the code sample above.

2.  **Write a function to reverse a doubly linked list *in place* (without creating a new list).**

    **Answer:**

    ```python
    def reverse_doubly_linked_list(self):
        current = self.head
        temp = None

        while current is not None:
            # Swap next and prev for all nodes
            temp = current.prev
            current.prev = current.next
            current.next = temp
            current = current.prev # Important: Step to the *next* node, which is now current.prev due to the swap
            # Alternatively:
            # current = current.prev

        # Before changing head, check for empty list
        if temp is not None:
            self.head = temp.prev  #The last node will have next equal to None after the reverse.
                                     # temp contains the previous node to this final node
                                     # so temp.prev points to the new head
    ```

3.  **Explain the difference between a circular doubly linked list and a regular doubly linked list.**

    **Answer:** In a circular doubly linked list, the `next` pointer of the tail node points to the head node, and the `prev` pointer of the head node points to the tail node. This creates a circular structure, allowing you to traverse the list endlessly in both directions without reaching a NULL pointer. In a regular doubly linked list, the tail node's `next` pointer and the head node's `prev` pointer are NULL.

4.  **What are the advantages and disadvantages of using a doubly linked list for implementing a queue?**

    **Answer:**

    *   **Advantages:** Deletion from both ends (dequeue from the front, possible rear operations) can be done in O(1) time if a tail pointer is maintained.
    *   **Disadvantages:** Increased memory overhead compared to a simple array-based queue implementation. Slightly more complex implementation than an array-based queue.

## 11. Important Points to Remember

*   **Pointer Management:**  Careful attention to pointer manipulation is crucial in doubly linked lists to avoid memory leaks or incorrect list behavior.  Always update `next` and `prev` pointers correctly.
*   **Head and Tail Pointers:** Maintaining both head and tail pointers can significantly improve the performance of certain operations, such as insertion and deletion at the end of the list.
*   **NULL Checks:** Always check for NULL pointers, especially when dealing with the head and tail nodes, to prevent errors.
*   **Memory Management:**  In languages like C and C++, remember to deallocate memory for deleted nodes to prevent memory leaks. In languages with garbage collection (like Python and Java), the garbage collector will handle deallocation, but it's still important to ensure you're not unintentionally holding references to deleted nodes.
*   **Understanding Trade-offs:**  Be aware of the trade-offs between doubly linked lists and other data structures.  Consider the specific requirements of your application when choosing a data structure. If memory is a tight constraint and backward traversal isn't needed, a singly linked list might be a better choice.  If random access is needed frequently, an array or ArrayList might be more suitable.
