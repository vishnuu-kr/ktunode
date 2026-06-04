---
title: "Stacks and Queues using Linked List"
subject: "DATA STRUCTURES AND ALGORITHMS"
module: "Module 2: Linked List and Memory Management"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ac33"
status: "completed"
scrapedAt: "2026-05-20T16:22:53.858Z"
---
## Data Structures and Algorithms: Module 2 - Stacks and Queues using Linked Lists

**Topic:** Stacks and Queues using Linked List

**Learning Outcomes:**

*   Understand the concepts of Stacks and Queues.
*   Implement Stacks and Queues using Linked Lists.
*   Analyze the time and space complexity of Stack and Queue operations using Linked Lists.
*   Understand the advantages and disadvantages of using Linked Lists for Stacks and Queues.
*   Apply Stacks and Queues to solve real-world problems.

---

### 1. Introduction to Stacks

*   **Definition:** A stack is a linear data structure that follows the **LIFO (Last-In, First-Out)** principle.  Think of a stack of plates – the last plate you put on is the first plate you take off.
*   **Key Operations:**
    *   **Push:** Adds an element to the top of the stack.
    *   **Pop:** Removes the element from the top of the stack.
    *   **Peek (or Top):**  Returns the element at the top of the stack without removing it.
    *   **IsEmpty:** Checks if the stack is empty.
    *   **IsFull (Optional):**  Checks if the stack is full (only relevant for array-based implementations).
*   **Real-world Examples:**
    *   Undo/Redo functionality in applications.
    *   Function call stack in programming languages.
    *   Expression evaluation (e.g., converting infix to postfix).
    *   Browser history.

### 2. Implementing Stacks using Linked Lists

*   **Approach:** We use a singly linked list where the `head` node represents the top of the stack.
*   **Node Structure (Generic):**

    ```python
    class Node:
        def __init__(self, data):
            self.data = data
            self.next = None  # Pointer to the next node
    ```

*   **Stack Class:**

    ```python
    class Stack:
        def __init__(self):
            self.head = None  # Top of the stack (initially empty)
            self.size = 0      # Track the number of elements (optional)

        def is_empty(self):
            return self.head is None

        def push(self, data):
            new_node = Node(data)
            new_node.next = self.head  # Link the new node to the current top
            self.head = new_node         # Update the top to the new node
            self.size += 1

        def pop(self):
            if self.is_empty():
                return None  # Or raise an exception: "Stack is Empty"
            data = self.head.data
            self.head = self.head.next  # Move the top to the next node
            self.size -= 1
            return data

        def peek(self):
            if self.is_empty():
                return None  # Or raise an exception: "Stack is Empty"
            return self.head.data

        def get_size(self):
            return self.size
    ```

*   **Explanation:**
    *   **`__init__`:** Initializes the stack with an empty head and a size counter (optional for tracking stack size).
    *   **`is_empty`:** Checks if the `head` is `None`, indicating an empty stack.
    *   **`push`:**  Creates a new node, links it to the current `head` (top), and then updates the `head` to point to the new node.  This ensures the new node becomes the new top.
    *   **`pop`:**  Checks if the stack is empty. If not, retrieves the data from the `head` node, updates the `head` to point to the next node, and returns the retrieved data.
    *   **`peek`:** Checks if the stack is empty. If not, returns the data from the `head` node without removing it.

*   **Example Usage:**

    ```python
    stack = Stack()
    stack.push(10)
    stack.push(20)
    stack.push(30)

    print("Top element:", stack.peek())  # Output: 30
    print("Popped element:", stack.pop())   # Output: 30
    print("Top element after pop:", stack.peek()) # Output: 20
    print("Is the stack empty?", stack.is_empty()) # Output: False
    print("Stack size:", stack.get_size()) # Output: 2
    ```

### 3. Introduction to Queues

*   **Definition:** A queue is a linear data structure that follows the **FIFO (First-In, First-Out)** principle.  Think of a queue of people waiting in line – the first person in line is the first person to be served.
*   **Key Operations:**
    *   **Enqueue:** Adds an element to the rear (end) of the queue.
    *   **Dequeue:** Removes the element from the front of the queue.
    *   **Peek (or Front):** Returns the element at the front of the queue without removing it.
    *   **IsEmpty:** Checks if the queue is empty.
    *   **IsFull (Optional):**  Checks if the queue is full (only relevant for array-based implementations).
*   **Real-world Examples:**
    *   Print queue in operating systems.
    *   Task scheduling in operating systems.
    *   Breadth-First Search (BFS) algorithm in graph traversal.
    *   Call centers (handling customer calls).

### 4. Implementing Queues using Linked Lists

*   **Approach:** We use a singly linked list where the `head` points to the front of the queue and the `tail` points to the rear.
*   **Node Structure (Same as Stack):**

    ```python
    class Node:
        def __init__(self, data):
            self.data = data
            self.next = None  # Pointer to the next node
    ```

*   **Queue Class:**

    ```python
    class Queue:
        def __init__(self):
            self.head = None  # Front of the queue
            self.tail = None  # Rear of the queue
            self.size = 0      # Optional: Track the number of elements

        def is_empty(self):
            return self.head is None

        def enqueue(self, data):
            new_node = Node(data)
            if self.is_empty():
                self.head = new_node
                self.tail = new_node
            else:
                self.tail.next = new_node  # Link the new node to the current rear
                self.tail = new_node         # Update the tail to the new node
            self.size += 1

        def dequeue(self):
            if self.is_empty():
                return None  # Or raise an exception: "Queue is Empty"

            data = self.head.data
            self.head = self.head.next  # Move the front to the next node
            self.size -= 1

            if self.head is None:  # If the queue becomes empty
                self.tail = None  # Reset the tail

            return data

        def peek(self):
            if self.is_empty():
                return None  # Or raise an exception: "Queue is Empty"
            return self.head.data

        def get_size(self):
            return self.size
    ```

*   **Explanation:**
    *   **`__init__`:** Initializes the queue with empty `head` and `tail` and a size counter.
    *   **`is_empty`:** Checks if the `head` is `None`, indicating an empty queue.
    *   **`enqueue`:** Creates a new node. If the queue is empty, both `head` and `tail` point to the new node. Otherwise, links the new node to the current `tail` and updates the `tail` to the new node.
    *   **`dequeue`:** Checks if the queue is empty. If not, retrieves the data from the `head` node, updates the `head` to point to the next node.  If `head` becomes `None` (the queue becomes empty), it also resets `tail` to `None`.
    *   **`peek`:** Checks if the queue is empty. If not, returns the data from the `head` node without removing it.

*   **Example Usage:**

    ```python
    queue = Queue()
    queue.enqueue(10)
    queue.enqueue(20)
    queue.enqueue(30)

    print("Front element:", queue.peek())  # Output: 10
    print("Dequeued element:", queue.dequeue()) # Output: 10
    print("Front element after dequeue:", queue.peek()) # Output: 20
    print("Is the queue empty?", queue.is_empty()) # Output: False
    print("Queue size:", queue.get_size()) # Output: 2
    ```

### 5. Time and Space Complexity Analysis

| Operation  | Stack (Linked List) | Queue (Linked List) |
| ----------- | ------------------- | ------------------- |
| Push/Enqueue | O(1)                | O(1)                |
| Pop/Dequeue| O(1)                | O(1)                |
| Peek       | O(1)                | O(1)                |
| IsEmpty    | O(1)                | O(1)                |
| Space      | O(n)                | O(n)                |

*   **Time Complexity:** All the fundamental operations (`push`, `pop`, `enqueue`, `dequeue`, `peek`, `isEmpty`) take **O(1) time** (constant time) because they only involve updating pointers.
*   **Space Complexity:**  The space complexity is **O(n)**, where n is the number of elements in the stack or queue. This is because we store each element in a separate node.

### 6. Advantages and Disadvantages of Using Linked Lists for Stacks and Queues

**Advantages:**

*   **Dynamic Size:** Linked list based stacks and queues can grow or shrink dynamically as needed, unlike array-based implementations that have a fixed size.
*   **No Overflow/Underflow Issues (Generally):** They don't suffer from overflow (stack full) or underflow (trying to pop/dequeue from an empty structure) in the same way as array-based implementations. While technically a linked list could run out of memory, it's less common.

**Disadvantages:**

*   **Extra Memory Overhead:** Linked lists require extra memory to store the pointers to the next node, which can be significant for small data elements.
*   **No Random Access:** Unlike arrays, you can't directly access an element at a specific index in a linked list.

### 7. Applications of Stacks and Queues

*   **Stack Applications:**
    *   **Expression Evaluation:**  Converting infix expressions to postfix or prefix expressions and evaluating them.
        *   Shunting Yard Algorithm
        *   Evaluating postfix expressions.
    *   **Backtracking:**  Algorithms that explore different possibilities (e.g., solving mazes, game playing) use stacks to keep track of the path taken.
    *   **Depth-First Search (DFS):**  Graph traversal algorithm.
    *   **Function Call Stack:**  Managing function calls and returns in programming languages.
*   **Queue Applications:**
    *   **Breadth-First Search (BFS):**  Graph traversal algorithm.
    *   **CPU Scheduling:**  Managing processes waiting for CPU time in operating systems.
    *   **Print Queue:**  Managing print jobs in a printer.
    *   **Message Queues:**  Asynchronous communication between different parts of a system.
    *   **Network Packet Buffering:** Queues are used to buffer incoming network packets.

### 8. Important Points to Remember

*   **LIFO vs. FIFO:** Remember the core difference between Stacks (LIFO) and Queues (FIFO).
*   **Pointer Manipulation:**  Understand how pointers are manipulated when adding (push/enqueue) and removing (pop/dequeue) elements.
*   **Head and Tail:**  For queues, remember the roles of the `head` (front) and `tail` (rear) pointers.  Pay attention to updating the tail during enqueue, and handling the tail being set to None when the queue becomes empty in dequeue.
*   **Error Handling:** Implement appropriate error handling, such as raising exceptions or returning `None` when trying to pop or dequeue from an empty stack or queue.
*   **Edge Cases:**  Always consider edge cases:
    *   Empty stack/queue.
    *   Inserting into an empty stack/queue.
    *   Removing the last element from a stack/queue.

### 9. Practice Questions/Exercises

1.  **Implement a Stack and a Queue using Linked Lists.** (Refer to the code provided above).  Test your implementations thoroughly with various inputs.

    **Answer:**  The code provided in sections 2 and 4 demonstrates a complete implementation.  Focus on testing the edge cases mentioned in section 8.

2.  **Write a function to reverse a string using a Stack.**

    **Answer:**

    ```python
    def reverse_string(input_string):
        stack = Stack()
        for char in input_string:
            stack.push(char)

        reversed_string = ""
        while not stack.is_empty():
            reversed_string += stack.pop()

        return reversed_string

    # Example usage:
    string = "hello"
    reversed_string = reverse_string(string)
    print(f"Original string: {string}")
    print(f"Reversed string: {reversed_string}") # Output: olleh
    ```

3.  **Implement a queue using two stacks.** (Hint: One stack for enqueue, one for dequeue).

    **Answer:**

    ```python
    class QueueUsingTwoStacks:
        def __init__(self):
            self.stack1 = Stack()  # For enqueue
            self.stack2 = Stack()  # For dequeue

        def enqueue(self, data):
            self.stack1.push(data)

        def dequeue(self):
            if self.stack2.is_empty(): # Only transfer elements if stack2 is empty
                while not self.stack1.is_empty():
                    self.stack2.push(self.stack1.pop())

            if self.stack2.is_empty():  # Queue is empty
                return None

            return self.stack2.pop()

        def peek(self):
            if self.stack2.is_empty(): # Only transfer elements if stack2 is empty
                while not self.stack1.is_empty():
                    self.stack2.push(self.stack1.pop())

            if self.stack2.is_empty():  # Queue is empty
                return None

            return self.stack2.peek()

        def is_empty(self):
            return self.stack1.is_empty() and self.stack2.is_empty()
    ```

4.  **Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid. An input string is valid if:**

    *   Open brackets must be closed by the same type of brackets.
    *   Open brackets must be closed in the correct order.

    **Answer:**

    ```python
    def isValid(s: str) -> bool:
        stack = []
        mapping = {")": "(", "}": "{", "]": "["}

        for char in s:
            if char in mapping:  # Closing bracket
                top_element = stack.pop() if stack else '#' # Pop if stack not empty
                if mapping[char] != top_element:
                    return False
            else:  # Opening bracket
                stack.append(char)

        return not stack # Return True if stack is empty at the end
    ```

5.  **Implement a method to find the middle element of a linked list using two pointers (slow and fast).  Then, implement a queue which stores the middle element of any queue and returns the value of that middle element if it is found.**

    **Answer:**

    ```python
    class LinkedListQueue:
        def __init__(self):
            self.head = None
            self.tail = None
            self.size = 0
            self.middle_queue = Queue() #Queue to store middle element.

        def enqueue(self, data):
            new_node = Node(data)
            if self.is_empty():
                self.head = new_node
                self.tail = new_node
            else:
                self.tail.next = new_node
                self.tail = new_node
            self.size += 1

            self.update_middle_queue()

        def dequeue(self):
            if self.is_empty():
                return None

            data = self.head.data
            self.head = self.head.next
            self.size -= 1

            if self.head is None:
                self.tail = None

            self.update_middle_queue()
            return data

        def is_empty(self):
            return self.head is None

        def find_middle(self):
            if self.is_empty():
                return None

            slow = self.head
            fast = self.head

            while fast and fast.next:
                slow = slow.next
                fast = fast.next.next

            return slow.data

        def update_middle_queue(self):
            middle = self.find_middle()
            if middle:
                self.middle_queue.enqueue(middle)
            else:
                self.middle_queue = Queue() #reset queue to be empty if linkedlistqueue becomes empty.

        def get_middle_value(self):
            return self.middle_queue.dequeue() #return the middle value in the first queue

        def peek(self):
            if self.is_empty():
                return None  # Or raise an exception: "Queue is Empty"
            return self.head.data
    ```

These notes provide a comprehensive overview of Stacks and Queues implemented using Linked Lists, covering the key concepts, implementations, analysis, and applications.  Working through the practice exercises will solidify your understanding of these fundamental data structures. Remember to focus on the underlying principles of LIFO and FIFO, and how they are implemented using pointer manipulation in linked lists.
