---
title: "Generate the possible sequence of completion."
subject: "DATA STRUCTURES LAB"
module: "Module 14: The General post office wishes to give preferential treatment to its customers."
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ae87"
status: "completed"
scrapedAt: "2026-05-20T16:23:31.441Z"
---
# DATA STRUCTURES LAB - Module 14: The General Post Office & Priority Queue

**Topic:** Generating Possible Completion Sequences (Priority Queue Application)

**Module Description:** The General Post Office (GPO) wishes to give preferential treatment to its customers based on some priority criteria (e.g., urgency, package size, VIP status). This module explores how a priority queue data structure can be used to manage and determine the possible order in which customers are served.

**Learning Outcomes:**

*   Understand the application of priority queues in real-world scenarios, specifically in managing service requests with different priorities.
*   Be able to trace the execution of priority queue operations (insertion and deletion) with varying priority values.
*   Learn how to generate all possible valid service sequences (completion sequences) given a set of customers with defined priorities.
*   Understand the impact of different priority assignment strategies on the overall service sequence.
*   Implement a priority queue using suitable data structures (e.g., heaps) and use it to generate service sequences.
*   Analyze the time complexity associated with generating all possible service sequences.

## 1. Introduction to Priority Queues and the GPO Scenario

*   **Priority Queue Definition:** A priority queue is an abstract data type that operates similar to a regular queue, but each element has an associated "priority."  Elements with higher priority are dequeued (removed) before elements with lower priority.  The element with the highest priority is always at the front of the queue.

*   **Key Operations:**
    *   **`insert(element, priority)` (or `enqueue` with priority):** Adds an element to the queue, maintaining the priority order.
    *   **`removeMax()` (or `dequeue` or `poll`):** Removes and returns the element with the highest priority.
    *   **`peekMax()` (or `front`):** Returns the element with the highest priority without removing it.
    *   **`isEmpty()`:** Checks if the queue is empty.

*   **GPO Scenario:** In the context of the GPO, each customer can be considered an element in the priority queue. The customer's priority is determined by factors like:
    *   **Urgency of Delivery:** Express mail vs. standard mail.
    *   **Package Size:** Larger packages requiring special handling might have higher priority.
    *   **Customer Status:** VIP customers might receive preferential treatment.
    *   **Arrival Time:**  First-come, first-served within the same priority level (a combination of priority and queue-like behavior).

*   **Why Priority Queues?** Priority queues allow the GPO to manage customer requests effectively by ensuring that the most important tasks are handled first, leading to better customer satisfaction and resource allocation.

## 2. Priority Queue Implementations

*   **Common Implementations:**
    *   **Array-based:**  Simple to implement but inefficient for large datasets due to the need to shift elements during insertion and deletion.
    *   **Linked List:**  Insertion and deletion can be more efficient than arrays if the correct location is known, but searching for the correct insertion point can be slow.
    *   **Binary Heap:**  A complete binary tree that satisfies the heap property. Offers O(log n) time complexity for insertion and deletion, making it a popular choice.  Heaps can be *min heaps* (smallest element at the root) or *max heaps* (largest element at the root).  For the GPO scenario, we'll likely use a *max heap* representing highest priority.
    *   **Binary Search Tree (BST):** Self-balancing BSTs like AVL trees or Red-Black trees can also be used, providing O(log n) time complexity for insertion, deletion, and finding the maximum.

*   **Heap Implementation (Max Heap Example):**  Let's consider a max heap represented as an array:

    ```
    Heap: [5, 4, 3, 2, 1]  (Priority values)

    Index:  0  1  2  3  4
    ```

    *   **Heap Property:** The value of each node is greater than or equal to the value of its children.
    *   **Insertion:**
        1.  Add the new element to the end of the heap.
        2.  "Heapify Up" or "Bubble Up": Compare the element with its parent. If the element is greater than its parent, swap them. Repeat until the heap property is satisfied.
    *   **Deletion (RemoveMax):**
        1.  Remove the root (maximum element).
        2.  Replace the root with the last element in the heap.
        3.  "Heapify Down" or "Bubble Down": Compare the new root with its children. If the root is smaller than either of its children, swap it with the larger child. Repeat until the heap property is satisfied.

## 3. Generating Possible Completion Sequences

This is the core of the module. We need to systematically generate all possible valid orders in which customers can be served, considering their priorities.

*   **Understanding Valid Sequences:** A completion sequence is valid if, at any point in time, no customer with higher priority is waiting in the queue while a lower-priority customer is being served.

*   **Algorithm/Approach:**

    1.  **Represent the Customers and Priorities:**  Let's say we have customers A, B, C, and D with priorities 3, 1, 2, and 3 respectively (higher number = higher priority). We can represent this as `[(A, 3), (B, 1), (C, 2), (D, 3)]`.

    2.  **Maintain the Waiting Queue (Priority Queue):** We'll use a priority queue to store customers who are waiting to be served.

    3.  **Recursive Approach (Depth-First Search):** The most effective way to generate all sequences is through recursion:

        *   **Base Case:** If the priority queue is empty and all customers have been served, we have a valid completion sequence.
        *   **Recursive Step:**
            *   Check if customers are arriving (entering the priority queue) at each step. Add them to the priority queue in the correct priority order.
            *   While the priority queue is not empty:
                *   Remove the highest priority customer from the priority queue.
                *   Add that customer to the current completion sequence.
                *   Recursively call the function with the updated priority queue and completion sequence.
                *   **Backtrack:** After the recursive call returns, add the removed customer back to the priority queue in its original position (to explore other possibilities). Remove the customer from the sequence. This is crucial for exploring all possible combinations.

*   **Example Walkthrough (A, B, C, D with priorities 3, 1, 2, 3):**

    Let's assume customers arrive in the order A, B, C, D.

    1.  **Initial State:** Queue: [], Sequence: []
    2.  **A Arrives:** Queue: [(A, 3)], Sequence: []
        *   Serve A: Queue: [], Sequence: [A]
        *   **B Arrives:** Queue: [(B, 1)], Sequence: [A]
            *   Serve B: Queue: [], Sequence: [A, B]
            *   **C Arrives:** Queue: [(C, 2)], Sequence: [A, B]
                *   Serve C: Queue: [], Sequence: [A, B, C]
                *   **D Arrives:** Queue: [(D, 3)], Sequence: [A, B, C]
                    *   Serve D: Queue: [], Sequence: [A, B, C, D]  (Valid Sequence)
            *   Backtrack: Remove C from sequence, Queue: [(B, 1)]
        *   Backtrack: Remove B from sequence, Queue: [(A, 3)]
    3.  **A Arrives:** Queue: [(A, 3)], Sequence: []
        *   **B Arrives:** Queue: [(A, 3), (B, 1)], Sequence: []
            *Serve A: Queue: [(B, 1)], Sequence: [A]
            *C Arrives: Queue: [(B, 1), (C, 2)], Sequence: [A]
                *Serve C: Queue: [(B, 1)], Sequence: [A, C]
                *D Arrives: Queue: [(B, 1), (D, 3)], Sequence: [A, C]
                    *Serve D: Queue: [(B, 1)], Sequence: [A, C, D]
                        *Serve B: Queue: [], Sequence: [A, C, D, B]  (Valid Sequence)

    **Important Note:** The order in which customers *arrive* significantly impacts the possible completion sequences.

## 4. Code Example (Python - Conceptual)

```python
import heapq  # For heap-based priority queue

def generate_sequences(customers, queue=[], sequence=[]):
    """
    Generates all possible valid completion sequences for the GPO.

    Args:
        customers: A list of tuples (customer_name, priority).  Customers waiting to be added
        queue:  The current priority queue (represented as a list of tuples (priority, customer_name)).
        sequence: The current completion sequence (list of customer names).

    Returns:
        A list of all valid completion sequences.
    """
    all_sequences = []

    if not customers and not queue:  # Base Case: No more customers and queue is empty
        return [sequence]

    # Add customers to queue
    if customers:
      next_customer, next_priority = customers[0]
      new_customers = customers[1:]

      new_queue = queue[:] #important to copy list
      heapq.heappush(new_queue, (-next_priority, next_customer)) #negative for max-heap behavior

      results = generate_sequences(new_customers, new_queue, sequence)
      all_sequences.extend(results)
    # Serve customers from queue
    if queue:
      priority, customer = heapq.heappop(queue)
      priority = -priority #revert priority value to positive

      new_sequence = sequence[:]
      new_sequence.append(customer)
      results = generate_sequences(customers, queue, new_sequence)
      all_sequences.extend(results)

      heapq.heappush(queue, (-priority, customer)) #backtracking

    return all_sequences


# Example Usage:
customers = [("A", 3), ("B", 1), ("C", 2), ("D", 3)]
completion_sequences = generate_sequences(customers)

print("Possible Completion Sequences:")
for seq in completion_sequences:
    print(seq)
```

**Explanation:**

1.  **`heapq` module:**  Python's `heapq` module provides a heap-based priority queue implementation.  It defaults to a min-heap, so we store priorities as negative values to simulate a max-heap.
2.  **`generate_sequences()` function:**
    *   Takes the `customers` list, the current `queue` (priority queue), and the current `sequence` as input.
    *   **Base Case:** If both `customers` and `queue` are empty, a valid sequence has been found.
    *   **Recursive Step:** It uses recursion to explore adding new customers and taking them out from the queue
    *   **Backtracking:**  After exploring a path (serving a customer), we put the customer back into the queue (heap) to explore other possibilities.  This ensures that all possible orderings are considered.
    *   **Priority Queue:**  `heapq.heappush()` adds an element to the heap (priority queue), maintaining the heap property.  `heapq.heappop()` removes and returns the smallest element (highest priority in our case, since we are using negative priorities).

**Important:** This is a conceptual code example.  It may need further refinement and error handling for a production environment. The use of deepcopy is critical to maintain the correct state of the queue and sequence during the recursive calls.

## 5. Time Complexity Analysis

*   The time complexity of generating all possible completion sequences is **exponential**.  In the worst case, where all customers have the same priority, the number of possible sequences can be close to n! (n factorial), where n is the number of customers.
*   The priority queue operations (insertion and deletion) using a heap have a time complexity of O(log n), but the dominant factor is the number of possible sequences, making the overall complexity exponential.

## 6. Impact of Priority Assignment Strategies

*   **Equal Priorities:** If all customers have the same priority, the order of service will be determined by arrival time (FIFO - First-In, First-Out).  There will be significantly more valid completion sequences.

*   **Varying Priorities:**  Higher differences in priority will reduce the number of valid completion sequences, as higher-priority customers will always be served before lower-priority customers.

*   **Dynamic Priorities:**  The GPO might adjust priorities based on real-time conditions (e.g., a sudden influx of express mail). This would lead to changes in the priority queue and potentially alter the completion sequences.

## 7. Practice Questions/Exercises

1.  **Question:**  Given customers A, B, and C with priorities 2, 1, and 2 respectively, and arrival order A, B, C, manually generate all possible valid completion sequences using the recursive approach.

    **Answer:**

    *   [A, C, B]
    *   [A, B, C]
    *   [C, A, B]

2.  **Question:**  Explain how the choice of data structure for the priority queue (e.g., array, linked list, heap) impacts the performance of the algorithm for generating completion sequences.

    **Answer:** The data structure affects the efficiency of insertion and removal operations.  A heap (binary heap) is generally the most efficient choice, as it provides O(log n) time complexity for these operations, while arrays and linked lists might have O(n) complexity in some cases. The exponential nature of sequence generation is often the dominating factor, but efficient priority queue operations help minimize the overall execution time.

3.  **Question:**  Suppose the GPO introduces a new priority level: "Emergency Delivery" (priority 4). How would this change the algorithm for generating completion sequences?

    **Answer:** The new priority level would need to be incorporated into the priority queue.  Customers with "Emergency Delivery" would have the highest priority and would always be served before customers with lower priorities.  The `insert` operation in the priority queue would need to ensure that "Emergency Delivery" customers are placed at the correct position to maintain the priority order. The rest of the sequence generation algorithm remains the same, but the valid sequences would be altered due to the higher priority level.

4. **Question:** How would you modify the Python code to handle the arrival time of customers as a secondary sorting factor for customers with the same priority?

    **Answer:**  You would modify the tuple in the priority queue to include the arrival time.  The structure would become: `(-priority, arrival_time, customer_name)`.  Python's tuple comparison automatically handles lexicographical order. The `arrival_time` is used as a tie-breaker when the priorities are the same. Earlier `arrival_time` will be considered higher priority. The insertion code and initial customer list creation would need to be updated to include the arrival time.

## 8. Important Points to Remember

*   **Priority Queue as the Core:**  The priority queue is the fundamental data structure for managing customer requests.
*   **Valid Sequences:** Understanding the concept of valid completion sequences (respecting priority) is crucial.
*   **Recursion and Backtracking:**  The recursive approach with backtracking is the most effective way to generate all possible sequences.
*   **Time Complexity:**  The exponential time complexity of generating all sequences should be acknowledged and understood.
*   **Practical Considerations:**  Real-world scenarios might require additional constraints or optimizations, such as limits on the number of sequences generated or heuristics for pruning the search space. Consider using iterators rather than fully generating all sequences at once in memory.
*   **Heap is efficient:** Always try to use heap data structure for implementing the priority queues for optimal performance.
