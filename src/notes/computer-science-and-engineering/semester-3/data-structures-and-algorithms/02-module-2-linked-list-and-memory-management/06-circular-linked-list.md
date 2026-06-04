---
title: "Circular Linked List"
subject: "DATA STRUCTURES AND ALGORITHMS"
module: "Module 2: Linked List and Memory Management"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ac36"
status: "completed"
scrapedAt: "2026-05-20T16:22:56.076Z"
---
## Data Structures and Algorithms: Module 2 - Linked List and Memory Management - Circular Linked List

These notes cover Circular Linked Lists as part of Module 2 (Linked Lists and Memory Management) in Data Structures and Algorithms.

**Learning Outcomes:**

*   Understand the concept of a circular linked list.
*   Differentiate between singly, doubly, and circular linked lists.
*   Implement basic operations on circular linked lists (insertion, deletion, traversal).
*   Analyze the advantages and disadvantages of using circular linked lists.
*   Identify real-world applications of circular linked lists.

**1. Introduction to Circular Linked Lists**

*   **Definition:** A circular linked list is a linked list in which the last node points back to the first node, forming a cycle. This is different from a regular linked list where the last node points to `NULL` (or `nullptr`).

*   **Key Characteristics:**
    *   No `NULL` pointer at the end.
    *   Traversal can start from any node.
    *   Useful for representing repeating sequences or cyclical data.

*   **Diagram:**

    ```
    +-----+-----+     +-----+-----+     +-----+-----+
    | Data| Next| --> | Data| Next| --> | Data| Next|
    +-----+-----+     +-----+-----+     +-----+-----+
      ^     |           ^     |           ^     |
      |     |           |     |           |     |
      +-----+-----------+-----+-----------+-----+
    ```

**2. Comparison: Singly, Doubly, and Circular Linked Lists**

| Feature        | Singly Linked List | Doubly Linked List | Circular Linked List |
|----------------|----------------------|----------------------|-----------------------|
| Structure      | Nodes point to next  | Nodes point to next and previous | Last node points to the first |
| Traversal      | Forward only         | Forward and backward | Circular - from any node |
| Memory Usage   | Lower (one pointer per node) | Higher (two pointers per node) | Similar to singly (one pointer per node) |
| End Indication | `NULL` pointer       | `NULL` pointer       | No `NULL` pointer     |
| Complexity     | Simple to implement | More complex to implement | Simple to implement with careful pointer handling |
| Insertion/Deletion | Easier at the beginning and after a known node | Easier insertion/deletion due to `prev` pointer | Can be complex to handle head and tail cases carefully |

**3. Basic Operations on Circular Linked Lists**

*   **Node Structure (C++ Example):**

    ```c++
    struct Node {
      int data;
      Node* next;

      Node(int value) : data(value), next(nullptr) {}
    };
    ```

*   **3.1 Insertion:**

    *   **Insertion at the Beginning:**
        1.  Create a new node with the given data.
        2.  If the list is empty, make the new node point to itself. Set head to new node.
        3.  If the list is not empty:
            *   Traverse to the last node.
            *   Make the new node point to the current head.
            *   Make the last node's `next` pointer point to the new node.
            *   Update the head to the new node.

    *   **Insertion at the End:**
        1.  Create a new node with the given data.
        2.  If the list is empty, make the new node point to itself. Set head to new node.
        3.  If the list is not empty:
            *   Traverse to the last node.
            *   Make the new node's `next` pointer point to the current head.
            *   Make the last node's `next` pointer point to the new node.

    *   **Insertion at a Specific Position:** (Similar to singly linked list with modification to handle circularity)
        1.  Traverse to the node before the desired insertion point.
        2.  Adjust pointers to insert the new node correctly.
        3.  Handle edge cases (empty list, insertion at the beginning) appropriately.

    ```c++
    // C++ example for inserting at the beginning
    void insertAtBeginning(Node** head, int data) {
        Node* newNode = new Node(data);
        if (*head == nullptr) {
            newNode->next = newNode;
            *head = newNode;
            return;
        }

        Node* current = *head;
        while (current->next != *head) {
            current = current->next;
        }
        current->next = newNode;
        newNode->next = *head;
        *head = newNode;
    }
    ```

*   **3.2 Deletion:**

    *   **Deletion from the Beginning:**
        1.  If the list is empty, do nothing.
        2.  If the list has only one node, delete the node and set `head` to `NULL`.
        3.  If the list has more than one node:
            *   Traverse to the last node.
            *   Update the last node's `next` pointer to point to the second node (the new head).
            *   Delete the original head node.
            *   Update the head to the second node.

    *   **Deletion from the End:** (Less common but possible)
        1.  Traverse to the second-to-last node.
        2.  Update the second-to-last node's `next` pointer to point to the head.
        3.  Delete the last node.

    *   **Deletion of a Node with a Specific Value:**
        1.  Traverse the list to find the node to delete.
        2.  Adjust pointers to remove the node from the list.
        3.  Handle edge cases (empty list, deleting the only node, deleting the head).

    ```c++
    // C++ example for deleting the first node
    void deleteBeginning(Node** head) {
        if (*head == nullptr) return; //Empty list
        Node* current = *head;
        Node* temp = *head;

        //If only one node
        if (current->next == *head) {
            *head = nullptr;
            delete temp;
            return;
        }

        while (current->next != *head) {
            current = current->next;
        }

        current->next = (*head)->next;
        *head = (*head)->next;
        delete temp;
    }
    ```

*   **3.3 Traversal:**

    *   Since there's no `NULL` pointer to indicate the end, you need a condition to stop the traversal. Usually, this is done by checking if you've returned to the starting node.

    ```c++
    // C++ example for traversal and printing data
    void printList(Node* head) {
        if (head == nullptr) return;

        Node* current = head;
        do {
            std::cout << current->data << " ";
            current = current->next;
        } while (current != head);
        std::cout << std::endl;
    }
    ```

**4. Advantages and Disadvantages**

*   **Advantages:**
    *   **Circular Nature:**  Useful for representing repeating sequences or cyclical data.
    *   **No `NULL` Pointers:**  Avoids the need to check for `NULL` during traversal, simplifying certain algorithms.
    *   **Easy Access to First Node from Last Node:** Traversal from the end back to the beginning is straightforward.  Suitable for scenarios where you frequently need to access both ends of a list.
    *   **Implementation of Queues:** Can be used to implement queues without keeping track of front and rear pointers separately (with slight modifications).

*   **Disadvantages:**
    *   **Complexity in Operations:** Insertion and deletion can be more complex than in singly linked lists because of the need to maintain the circularity.
    *   **Traversal Termination:** Requires careful handling to avoid infinite loops during traversal.  Need to track the starting node.
    *   **Debugging:** Debugging can be more challenging due to the circular structure.
    *   **Memory Overhead:**  Slightly higher memory overhead if not managed carefully.

**5. Real-World Applications**

*   **Operating Systems:** Round-robin scheduling (process scheduling).
*   **Multiplayer Games:**  Representing players in a game where the turn order cycles.
*   **Audio/Video Playlists:** Looping playlists.
*   **Resource Allocation:**  Fair allocation of resources in a circular fashion.
*   **Clock-Based Systems:** Representing time cycles (hours, minutes, seconds).
*   **Navigation Systems:** Representing routes or paths that loop.

**6. Important Points to Remember**

*   Always check for empty list conditions.
*   When inserting or deleting, carefully adjust the pointers of the surrounding nodes to maintain the circular structure.
*   Use a `do-while` loop or a similar construct when traversing to ensure you visit all nodes.
*   Keep track of the head (or any starting point) to avoid infinite loops during traversal.
*   Consider using helper functions for insertion and deletion to improve code readability.

**7. Practice Questions/Exercises**

1.  **Implement a function to find the length (number of nodes) of a circular linked list.**

    *   **Answer:**

        ```c++
        int getLength(Node* head) {
          if (head == nullptr) return 0;

          int count = 0;
          Node* current = head;
          do {
            count++;
            current = current->next;
          } while (current != head);

          return count;
        }
        ```

2.  **Write a function to search for a specific element in a circular linked list. Return true if found, false otherwise.**

    *   **Answer:**

        ```c++
        bool search(Node* head, int key) {
          if (head == nullptr) return false;

          Node* current = head;
          do {
            if (current->data == key) return true;
            current = current->next;
          } while (current != head);

          return false;
        }
        ```

3.  **Implement insertion at a specific position in the circular linked list.**

    *   **Answer (C++):**

      ```c++
      void insertAtPosition(Node** head, int data, int position) {
        if (position <= 0) {
          insertAtBeginning(head, data);
          return;
        }

        Node* newNode = new Node(data);
        if (*head == nullptr) {
          newNode->next = newNode;
          *head = newNode;
          return;
        }

        Node* current = *head;
        int count = 1;
        while (current->next != *head && count < position) {
            current = current->next;
            count++;
        }

        if (count < position){ //insertion is out of bounds -insert at the end
          Node* temp = *head;
          while (temp->next != *head){
            temp = temp->next;
          }
          temp->next = newNode;
          newNode->next = *head;
        } else {
            newNode->next = current->next;
            current->next = newNode;
        }
      }
      ```

4.  **Explain how you would implement a round-robin scheduling algorithm using a circular linked list.**

    *   **Answer:** Each node in the circular linked list represents a process. The `data` field of each node would contain information about the process (e.g., process ID, burst time, etc.). The scheduling algorithm would traverse the list, giving each process a fixed time slice. Once a process has used its time slice, the scheduler moves to the next process in the list. When the end of the list is reached (which is just the next node after the last), it loops back to the beginning, ensuring each process gets a chance to run in a cyclical manner.
