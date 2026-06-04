---
title: "They have identified the customer categories as Defence personnel, Differently abled, Senior citizen, Ordinary."
subject: "DATA STRUCTURES LAB"
module: "Module 14: The General post office wishes to give preferential treatment to its customers."
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ae85"
status: "completed"
scrapedAt: "2026-05-20T16:23:30.019Z"
---
## DATA STRUCTURES LAB - Module 14: Post Office Customer Prioritization

**Topic:** Implementing a Queue with Priority for Post Office Customers (Defence Personnel, Differently Abled, Senior Citizen, Ordinary)

**Description:** The General Post Office wants to provide preferential treatment to its customers based on predefined categories: Defence personnel, Differently Abled, Senior Citizen, and Ordinary. This lab explores data structures suitable for managing customers based on priority.

**Learning Outcomes:**

*   Understand the concept of a Priority Queue.
*   Implement a Priority Queue using suitable data structures (e.g., arrays, linked lists, heaps).
*   Implement operations like enqueue (add customer), dequeue (serve customer), and peek (check next customer).
*   Apply the Priority Queue to solve the Post Office customer prioritization problem.
*   Compare and contrast different Priority Queue implementations.
*   Analyze the time complexity of different operations.

### 1. Key Concepts and Definitions

*   **Queue:** A linear data structure that follows the FIFO (First-In-First-Out) principle. Elements are added to the rear (enqueue) and removed from the front (dequeue).

*   **Priority Queue:** An abstract data type similar to a queue, but each element has an associated priority. Elements are served (dequeued) based on their priority. The element with the highest priority is served first.

*   **Priority:**  A value assigned to each customer category representing their importance. Higher priority means they are served sooner.

*   **Enqueue (Insertion):** Adding an element (customer) to the priority queue.  The position where the element is inserted depends on its priority.

*   **Dequeue (Deletion):** Removing the element (customer) with the highest priority from the priority queue.

*   **Peek:** Viewing the element (customer) with the highest priority without removing it.

*   **Data Structures for Priority Queue Implementation:**

    *   **Arrays (Sorted or Unsorted):** Simple to implement, but can be inefficient for enqueueing and dequeueing, especially with frequent insertions and deletions.

    *   **Linked Lists (Sorted or Unsorted):** Similar to arrays in terms of potential efficiency issues. Insertion in a sorted linked list requires traversing the list to find the correct position.

    *   **Heaps (Binary Heap, Fibonacci Heap):**  A tree-based data structure that satisfies the heap property (e.g., in a min-heap, the value of each node is less than or equal to the value of its children). Heaps are often the most efficient way to implement priority queues, offering logarithmic time complexity for enqueue and dequeue operations.

    *   **Binary Search Trees (BST):**  While possible, BSTs can become unbalanced, leading to performance degradation.  Self-balancing BSTs (e.g., AVL trees, Red-Black trees) are an option, but potentially more complex to implement.
### 2. Implementing a Priority Queue

We'll focus on implementing a Priority Queue using a **sorted array** (for simplicity) and a **heap** (for better efficiency).  Keep in mind other implementations are also possible.

#### 2.1 Implementation with a Sorted Array (Example in Python)

```python
class Customer:
    def __init__(self, name, category):
        self.name = name
        self.category = category
        self.priority = self.get_priority(category) # Assign numerical priority

    def get_priority(self, category):
        if category == "Defence":
            return 1
        elif category == "Differently Abled":
            return 2
        elif category == "Senior Citizen":
            return 3
        else:  # Ordinary
            return 4

    def __str__(self):
        return f"{self.name} ({self.category})"

class PriorityQueueArray:
    def __init__(self):
        self.queue = []

    def enqueue(self, customer):
        self.queue.append(customer)
        self.queue.sort(key=lambda x: x.priority) # Sort based on priority
        print(f"Enqueued {customer.name} ({customer.category})")

    def dequeue(self):
        if not self.queue:
            return None
        customer = self.queue.pop(0)
        print(f"Dequeued {customer.name} ({customer.category})")
        return customer

    def peek(self):
        if not self.queue:
            return None
        return self.queue[0]

    def is_empty(self):
        return len(self.queue) == 0

# Example Usage
pq = PriorityQueueArray()
pq.enqueue(Customer("Alice", "Ordinary"))
pq.enqueue(Customer("Bob", "Defence"))
pq.enqueue(Customer("Charlie", "Senior Citizen"))
pq.enqueue(Customer("David", "Differently Abled"))

print("Next to be served:", pq.peek())  # Bob (Defence)
pq.dequeue()                         # Bob (Defence)
pq.dequeue()                         # David (Differently Abled)
```

**Explanation:**

*   `Customer` class:  Represents a customer with a name, category, and priority (numerical representation). The `get_priority` method assigns priority values. Lower numbers indicate higher priority.
*   `PriorityQueueArray` class:
    *   `enqueue()`: Appends the customer to the array and then sorts the entire array based on the customer's priority.
    *   `dequeue()`: Removes the first element (highest priority) from the array.
    *   `peek()`:  Returns the first element without removing it.

**Time Complexity (Sorted Array):**

*   `enqueue()`: O(n log n)  (due to sorting)
*   `dequeue()`: O(n) (due to popping the first element which may require shifting) or O(1) if you pop from the end
*   `peek()`: O(1)

#### 2.2 Implementation with a Heap (Example in Python using `heapq` module)

```python
import heapq

class Customer:
    def __init__(self, name, category):
        self.name = name
        self.category = category
        self.priority = self.get_priority(category) # Assign numerical priority

    def get_priority(self, category):
        if category == "Defence":
            return 1
        elif category == "Differently Abled":
            return 2
        elif category == "Senior Citizen":
            return 3
        else:  # Ordinary
            return 4

    def __lt__(self, other): # Required for heapq to compare objects
        return self.priority < other.priority

    def __str__(self):
        return f"{self.name} ({self.category})"

class PriorityQueueHeap:
    def __init__(self):
        self.heap = []

    def enqueue(self, customer):
        heapq.heappush(self.heap, customer) # Push to heap
        print(f"Enqueued {customer.name} ({customer.category})")

    def dequeue(self):
        if not self.heap:
            return None
        customer = heapq.heappop(self.heap)  # Pop from heap
        print(f"Dequeued {customer.name} ({customer.category})")
        return customer

    def peek(self):
        if not self.heap:
            return None
        return self.heap[0]

    def is_empty(self):
        return len(self.heap) == 0

# Example Usage
pq = PriorityQueueHeap()
pq.enqueue(Customer("Alice", "Ordinary"))
pq.enqueue(Customer("Bob", "Defence"))
pq.enqueue(Customer("Charlie", "Senior Citizen"))
pq.enqueue(Customer("David", "Differently Abled"))

print("Next to be served:", pq.peek())  # Bob (Defence)
pq.dequeue()                         # Bob (Defence)
pq.dequeue()                         # David (Differently Abled)
```

**Explanation:**

*   The `Customer` class now includes the `__lt__` method, which is essential for comparing `Customer` objects within the heap.  This tells `heapq` how to order the customers based on priority.
*   `heapq.heappush()`: Adds the customer to the heap, maintaining the heap property.
*   `heapq.heappop()`: Removes and returns the element with the smallest value (highest priority) from the heap, also maintaining the heap property.

**Time Complexity (Heap):**

*   `enqueue()`: O(log n)
*   `dequeue()`: O(log n)
*   `peek()`: O(1)

### 3. Applying the Priority Queue to the Post Office Problem

The examples above demonstrate how to create a priority queue and add customers based on their category.  The Post Office can use this system to:

1.  **Take Customer Input:**  When a customer arrives, input their name and category (Defence, Differently Abled, Senior Citizen, Ordinary).
2.  **Enqueue the Customer:** Create a `Customer` object and enqueue it into the priority queue.
3.  **Serve Customers:**  Call `dequeue()` to retrieve the next customer to be served.
4.  **Display Next Customer:** Use `peek()` to display who is next in line.

### 4. Comparing Implementations

| Feature          | Sorted Array | Heap (Binary) |
| ---------------- | ------------ | ------------- |
| Enqueue          | O(n log n)   | O(log n)      |
| Dequeue          | O(n)         | O(log n)      |
| Peek             | O(1)         | O(1)          |
| Space Complexity | O(n)         | O(n)          |
| Implementation   | Simple       | More Complex  |

**Conclusion:** Heaps provide better performance for both enqueue and dequeue operations, making them a more suitable choice for a large number of customers.  Sorted arrays are simpler to implement but less efficient for dynamic scenarios.

### 5. Important Points to Remember

*   **Priority Assignment:**  The numerical representation of priority is crucial. Lower numbers often (but not always) indicate higher priority.  Ensure your comparison logic (e.g., the `__lt__` method in Python) is consistent with the priority assignment.

*   **Heap Property:**  Understand the heap property (min-heap or max-heap) and how it is maintained by the heap operations.

*   **Choosing the Right Data Structure:**  Consider the frequency of enqueue and dequeue operations, the number of customers, and the complexity of implementation when choosing between arrays, linked lists, or heaps.

*   **Error Handling:** Implement error handling (e.g., checking for empty queues before dequeueing or peeking).

### 6. Practice Questions/Exercises

1.  **Extending the Categories:**  The Post Office decides to add a "Government Official" category with the highest priority. How would you modify your priority queue implementation (both sorted array and heap) to accommodate this new category?

    **Answer:**  You would need to modify the `get_priority` function (or its equivalent) to assign a numerical priority higher than "Defence" to the "Government Official" category. For both implementations, the underlying data structure and logic would remain the same, but the priority values would change.  For example, you could assign "Government Official" a priority of 0.

2.  **Implement a Priority Queue using a Linked List (Sorted).** Write the code for `enqueue`, `dequeue`, and `peek` operations. What is the time complexity of each operation?

    **Answer:** (Conceptual) The enqueue operation in a sorted linked list would require traversing the list to find the correct insertion point, resulting in O(n) time complexity. Dequeue would be O(1) (simply removing the head node), and peek would also be O(1).  Implementing the code itself is a good exercise!

3.  **What are the advantages and disadvantages of using a Binary Search Tree (BST) to implement a priority queue?**

    **Answer:**
    *   **Advantages:**  Provides logarithmic time complexity for enqueue (insertion) and dequeue (finding and removing the minimum).  Can be dynamically resized.
    *   **Disadvantages:**  If the BST becomes unbalanced, the time complexity degrades to O(n) in the worst case. Requires more complex implementation than simple arrays or heaps. Need to consider self-balancing BSTs for guaranteed logarithmic performance, which adds significantly more complexity.

4.  **Implement a Priority Queue using the `queue` module in Python.**  Research the `PriorityQueue` class in the `queue` module and demonstrate its use for the Post Office problem.

    **Answer:** (Conceptual)  The `queue.PriorityQueue` class in Python provides a thread-safe implementation of a priority queue based on the `heapq` module. You would simply instantiate a `queue.PriorityQueue` object and use its `put` (enqueue) and `get` (dequeue) methods.  Remember to define a comparable class (like `Customer` with the `__lt__` method) for the priority queue to function correctly. The key benefit here is leveraging Python's built-in data structures for better robustness and potential performance optimizations.

These notes provide a solid foundation for understanding and implementing priority queues in the context of the Post Office customer prioritization problem. Remember to practice coding the implementations and experiment with different scenarios to solidify your understanding.
