---
title: "The General post office wishes to give preferential treatment to its customers."
subject: "DATA STRUCTURES LAB"
module: "Module 14: The General post office wishes to give preferential treatment to its customers."
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ae84"
status: "completed"
scrapedAt: "2026-05-20T16:23:29.306Z"
---
# DATA STRUCTURES LAB - Module 14: Post Office Preferential Treatment

**Topic:** The General Post Office wishes to give preferential treatment to its customers.

**Description:** This module focuses on implementing data structures, specifically priority queues (often implemented using heaps), to simulate and manage customer service at a post office with preferential treatment. The goal is to prioritize certain customers (e.g., VIPs, senior citizens, or those with urgent packages) over others, ensuring they are served faster.

**Learning Outcomes:**

*   Understand the concept of priority queues and their applications.
*   Implement a priority queue using heaps (min-heap or max-heap).
*   Apply priority queues to simulate the post office scenario.
*   Analyze the efficiency of using priority queues in this context.
*   Implement basic queue operations like enqueue (insert), dequeue (remove), peek, and isEmpty.

## 1. Introduction to Priority Queues

*   **Definition:** A priority queue is an abstract data type (ADT) that operates similarly to a regular queue, but with an added element of priority.  Each element in a priority queue is associated with a "priority."

*   **Key Concept:** Elements are served based on their priority.  The element with the highest priority (according to the defined priority rule) is served first.

*   **Analogy:** Imagine an emergency room. Patients are not necessarily seen in the order they arrive. Instead, those with the most critical conditions are treated first, regardless of their arrival time. This is analogous to a priority queue.

*   **Applications:**
    *   Task scheduling in operating systems
    *   Event-driven simulations
    *   Shortest path algorithms (e.g., Dijkstra's algorithm)
    *   Data compression (e.g., Huffman coding)
    *   Customer service systems (like our post office example)

## 2. Implementing Priority Queues using Heaps

*   **Heap Data Structure:** A heap is a specialized tree-based data structure that satisfies the heap property. It's commonly used to implement priority queues efficiently.

    *   **Min-Heap:**  The value of each node is less than or equal to the value of its children. The root node contains the smallest element.
    *   **Max-Heap:** The value of each node is greater than or equal to the value of its children. The root node contains the largest element.

*   **Heap as an Array:** Heaps are often implemented using arrays because of the simple index-based relationships between parent and child nodes.

    *   Given a node at index `i`:
        *   Left child: `2 * i + 1`
        *   Right child: `2 * i + 2`
        *   Parent: `(i - 1) / 2` (integer division)

*   **Heap Operations:**

    *   **Insert (Enqueue):**
        1.  Add the new element to the end of the array (or the bottom of the heap tree).
        2.  "Heapify up" (also called "bubble up" or "sift up"): Compare the new element with its parent. If the new element has a higher priority (for a max-heap) or lower priority (for a min-heap) than its parent, swap them.
        3.  Repeat step 2 until the heap property is satisfied or the element reaches the root.

    *   **Remove (Dequeue - removing the highest/lowest priority element):**
        1.  Swap the root element (highest/lowest priority element) with the last element in the array.
        2.  Remove the last element (which was the original root).
        3.  "Heapify down" (also called "sink down" or "trickle down"): Compare the new root element with its children.  If either child has a higher priority (for a max-heap) or lower priority (for a min-heap) than the current element, swap the current element with the child having the highest/lowest priority.
        4.  Repeat step 3 until the heap property is satisfied or the element reaches a leaf.

*   **Implementation Considerations:**

    *   **Programming Language:** Choose a suitable programming language (e.g., Python, Java, C++) to implement the priority queue.
    *   **Data Structures:** Use arrays or lists to represent the heap.
    *   **Priority Representation:** Define how priority is represented. It could be integers (lower value means higher priority, or vice versa), strings, or custom objects with comparison methods.

## 3. Simulating the Post Office Scenario

*   **Customer Representation:** Create a class or struct to represent customers.  This should include:
    *   `customerID` (unique identifier)
    *   `priority` (an integer or other comparable value indicating priority)
    *   `arrivalTime` (the time the customer entered the queue)
    *   `serviceTime` (the amount of time it takes to serve the customer - potentially randomly generated within a reasonable range)
    *   `isVIP` (Boolean value determining VIP status)

*   **Priority Assignment:** Define how priorities are assigned.  Here are a few examples:

    *   **Static Priority:** VIP customers always have higher priority (e.g., priority = 0 for VIP, priority = 1 for regular).  Senior citizens could also be assigned higher priority.
    *   **Dynamic Priority:** Priority can change over time. For example, customers waiting longer in the queue could have their priority increased. (Aging system)
    *   **Combination:** A combination of static and dynamic priority.  For example, VIPs always have higher priority, but among regular customers, those who have waited longer are served first.

*   **Simulation Logic:**

    1.  **Arrivals:** Simulate customer arrivals at random intervals.  Create a new customer object and assign it a priority based on your defined rules.  Enqueue the customer into the priority queue.

    2.  **Service:**  When a service agent is available, dequeue the customer with the highest priority from the queue.

    3.  **Time Tracking:** Keep track of time (e.g., using a simulation clock). Record the waiting time for each customer (time spent in the queue).

    4.  **Metrics:** Collect statistics about the simulation, such as:

        *   Average waiting time for all customers
        *   Average waiting time for VIP customers
        *   Average waiting time for regular customers
        *   Maximum waiting time
        *   Queue length over time
        *   Number of customers served

*   **Code Example (Python - Conceptual):**

```python
import heapq
import random
import time

class Customer:
    def __init__(self, customer_id, is_vip, arrival_time):
        self.customer_id = customer_id
        self.is_vip = is_vip
        self.arrival_time = arrival_time
        self.service_time = random.randint(2, 5)  # Simulate service time
        self.priority = self.calculate_priority()

    def calculate_priority(self):
        if self.is_vip:
            return 0  # Higher priority for VIP
        else:
            return 1  # Lower priority for regular

    def __lt__(self, other):  # For heap comparison (min-heap)
        return self.priority < other.priority

    def __repr__(self): # for printing
      return f"Customer {self.customer_id} (VIP: {self.is_vip}, Priority: {self.priority})"

def simulate_post_office(num_customers, vip_percentage):
    priority_queue = []
    customer_id_counter = 1
    total_waiting_time = 0
    vip_waiting_time = 0
    regular_waiting_time = 0
    num_vip_customers = 0
    num_regular_customers = 0

    current_time = 0

    for _ in range(num_customers):
        # Simulate arrival
        arrival_time = current_time + random.randint(1, 3)  # Random arrival interval
        is_vip = random.random() < vip_percentage
        customer = Customer(customer_id_counter, is_vip, arrival_time)
        customer_id_counter += 1

        heapq.heappush(priority_queue, customer)
        print(f"Customer {customer.customer_id} arrived at {customer.arrival_time}")


        # Serve the next customer if queue is not empty and ready for service
        if priority_queue and heapq.nsmallest(1, priority_queue)[0].arrival_time <= current_time:
            next_customer = heapq.heappop(priority_queue)
            wait_time = current_time - next_customer.arrival_time
            total_waiting_time += wait_time

            print(f"Serving Customer {next_customer.customer_id} at {current_time}. Waited: {wait_time}")

            if next_customer.is_vip:
                vip_waiting_time += wait_time
                num_vip_customers += 1
            else:
                regular_waiting_time += wait_time
                num_regular_customers += 1

            current_time += next_customer.service_time # advance the simulation by the service time
        else:
            # no customer ready to be served, advance time
            current_time += 1
            # print("No customer ready, advancing time")

    # Serve remaining customers in the queue (if any)
    while priority_queue:
      next_customer = heapq.heappop(priority_queue)
      wait_time = current_time - next_customer.arrival_time
      total_waiting_time += wait_time

      print(f"Serving Customer {next_customer.customer_id} at {current_time}. Waited: {wait_time}")

      if next_customer.is_vip:
          vip_waiting_time += wait_time
          num_vip_customers += 1
      else:
          regular_waiting_time += wait_time
          num_regular_customers += 1

      current_time += next_customer.service_time

    # Calculate averages
    avg_waiting_time = total_waiting_time / num_customers if num_customers > 0 else 0
    avg_vip_waiting_time = vip_waiting_time / num_vip_customers if num_vip_customers > 0 else 0
    avg_regular_waiting_time = regular_waiting_time / num_regular_customers if num_regular_customers > 0 else 0

    print("\n--- Simulation Results ---")
    print(f"Average Waiting Time: {avg_waiting_time:.2f}")
    print(f"Average VIP Waiting Time: {avg_vip_waiting_time:.2f}")
    print(f"Average Regular Waiting Time: {avg_regular_waiting_time:.2f}")
    print(f"Number of VIP Customers: {num_vip_customers}")
    print(f"Number of Regular Customers: {num_regular_customers}")

# Run the simulation
simulate_post_office(num_customers=20, vip_percentage=0.3)
```

## 4. Analysis of Efficiency

*   **Time Complexity:**

    *   **Insert (Enqueue):** O(log n), where n is the number of elements in the heap.
    *   **Remove (Dequeue):** O(log n), where n is the number of elements in the heap.
    *   **Peek (Get the highest/lowest priority element):** O(1)

*   **Advantages:**

    *   Efficient for maintaining and retrieving the highest/lowest priority element.
    *   Better performance than linear search methods for finding the highest/lowest priority element, especially for large datasets.

*   **Disadvantages:**

    *   Heap data structure might add overhead compared to simpler data structures if priorities are not frequently updated or if the number of elements is very small.
    *   More complex to implement compared to simple queues.

## 5. Practice Questions & Exercises

1.  **Implement a min-heap data structure in your chosen programming language.** Include `insert` and `remove` operations.

    ```python
    # (Answer: The code above already includes a min-heap implementation using heapq)
    ```

2.  **Modify the Post Office simulation to include a third priority level (e.g., "Urgent Package" customers).**

    ```python
    # Add a new priority level to the Customer class and adjust the calculate_priority function.
    class Customer:
        def __init__(self, customer_id, is_vip, has_urgent_package, arrival_time):
            self.customer_id = customer_id
            self.is_vip = is_vip
            self.has_urgent_package = has_urgent_package #NEW
            self.arrival_time = arrival_time
            self.service_time = random.randint(2, 5)  # Simulate service time
            self.priority = self.calculate_priority()

        def calculate_priority(self):
            if self.is_vip:
                return 0  # Higher priority for VIP
            elif self.has_urgent_package: #NEW
                return 1 # Medium priority for urgent packages
            else:
                return 2  # Lower priority for regular

        def __lt__(self, other):  # For heap comparison (min-heap)
            return self.priority < other.priority

        def __repr__(self): # for printing
          return f"Customer {self.customer_id} (VIP: {self.is_vip}, Urgent: {self.has_urgent_package}, Priority: {self.priority})"
    ```

3.  **Implement a dynamic priority system where the priority of a customer increases linearly with their waiting time.  Rerun the simulation and observe the effect on average waiting times.**

    ```python
    # Modify the simulate_post_office function to update customer priorities during each time step.

    def simulate_post_office_dynamic(num_customers, vip_percentage):
        priority_queue = []
        customer_id_counter = 1
        total_waiting_time = 0
        vip_waiting_time = 0
        regular_waiting_time = 0
        num_vip_customers = 0
        num_regular_customers = 0

        current_time = 0

        for _ in range(num_customers):
            # Simulate arrival
            arrival_time = current_time + random.randint(1, 3)  # Random arrival interval
            is_vip = random.random() < vip_percentage
            customer = Customer(customer_id_counter, is_vip, arrival_time)
            customer_id_counter += 1

            heapq.heappush(priority_queue, customer)
            print(f"Customer {customer.customer_id} arrived at {customer.arrival_time}")

            # Serve the next customer if queue is not empty and ready for service
            if priority_queue and heapq.nsmallest(1, priority_queue)[0].arrival_time <= current_time:
                next_customer = heapq.heappop(priority_queue)
                wait_time = current_time - next_customer.arrival_time
                total_waiting_time += wait_time

                print(f"Serving Customer {next_customer.customer_id} at {current_time}. Waited: {wait_time}")

                if next_customer.is_vip:
                    vip_waiting_time += wait_time
                    num_vip_customers += 1
                else:
                    regular_waiting_time += wait_time
                    num_regular_customers += 1

                current_time += next_customer.service_time # advance the simulation by the service time

                # Update priority in queue
                for c in priority_queue:
                  c.priority = c.calculate_priority(current_time) # re-calculate priority of the remaining customer in queue

            else:
                # no customer ready to be served, advance time
                current_time += 1
                # Update priority of the existing customers in the queue after each time slot
                for c in priority_queue:
                  c.priority = c.calculate_priority(current_time) # re-calculate priority of the remaining customer in queue


        # Serve remaining customers in the queue (if any)
        while priority_queue:
          next_customer = heapq.heappop(priority_queue)
          wait_time = current_time - next_customer.arrival_time
          total_waiting_time += wait_time

          print(f"Serving Customer {next_customer.customer_id} at {current_time}. Waited: {wait_time}")

          if next_customer.is_vip:
              vip_waiting_time += wait_time
              num_vip_customers += 1
          else:
              regular_waiting_time += wait_time
              num_regular_customers += 1

          current_time += next_customer.service_time

        # Calculate averages
        avg_waiting_time = total_waiting_time / num_customers if num_customers > 0 else 0
        avg_vip_waiting_time = vip_waiting_time / num_vip_customers if num_vip_customers > 0 else 0
        avg_regular_waiting_time = regular_waiting_time / num_regular_customers if num_regular_customers > 0 else 0

        print("\n--- Simulation Results ---")
        print(f"Average Waiting Time: {avg_waiting_time:.2f}")
        print(f"Average VIP Waiting Time: {avg_vip_waiting_time:.2f}")
        print(f"Average Regular Waiting Time: {avg_regular_waiting_time:.2f}")
        print(f"Number of VIP Customers: {num_vip_customers}")
        print(f"Number of Regular Customers: {num_regular_customers}")
    ```

    ```python
    # Adjust the Customer class
    class Customer:
      def __init__(self, customer_id, is_vip, arrival_time):
          self.customer_id = customer_id
          self.is_vip = is_vip
          self.arrival_time = arrival_time
          self.service_time = random.randint(2, 5)
          self.priority = self.calculate_priority(self.arrival_time) # initial priority

      def calculate_priority(self, current_time):
          if self.is_vip:
              return 0  # VIP have high priority
          else:
              wait_time = current_time - self.arrival_time # calculate waiting time
              return 1 + (wait_time * 0.1) # Regular Customer with priority increasing with waiting time
      def __lt__(self, other):
            return self.priority < other.priority
      def __repr__(self): # for printing
          return f"Customer {self.customer_id} (VIP: {self.is_vip}, Priority: {self.priority})"
    ```

    ```python
    simulate_post_office_dynamic(num_customers=20, vip_percentage=0.3) # run the simulation
    ```

4.  **Compare the performance of using a priority queue vs. a simple queue (FIFO) in terms of average waiting time for VIP and regular customers.**

    *   (Answer: You would need to implement a simulation using a simple queue (FIFO) and compare the results with the priority queue simulation.  Generally, you'll find that the priority queue reduces waiting time for VIP customers at the expense of increased waiting time for regular customers, while a FIFO queue treats everyone equally.)

## 6. Important Points to Remember

*   Priority queues are useful when you need to process elements based on their priority, not necessarily their arrival order.
*   Heaps are a common and efficient way to implement priority queues.
*   Careful consideration should be given to how priorities are assigned and updated in dynamic scenarios.
*   The choice between using a priority queue or a simple queue depends on the specific requirements of the application and the desired trade-offs between fairness and priority.
*   The complexity of insert and remove operations in a heap-based priority queue is O(log n), making it an efficient choice for large datasets.
