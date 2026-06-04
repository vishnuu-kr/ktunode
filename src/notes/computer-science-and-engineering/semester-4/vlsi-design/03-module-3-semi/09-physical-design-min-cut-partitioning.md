---
title: "Physical Design- Min-cut Partitioning"
subject: "VLSI DESIGN"
module: "Module 3: Semi"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b30b"
status: "completed"
scrapedAt: "2026-05-20T16:17:28.407Z"
---
## VLSI Design: Module 3 - Semi: Physical Design - Min-Cut Partitioning

These notes cover the topic of Min-Cut Partitioning in Physical Design, a crucial step in the VLSI design flow.

**1. Learning Outcomes:**

*   Understand the purpose and importance of partitioning in physical design.
*   Define and explain the concept of min-cut partitioning.
*   Describe different algorithms used for min-cut partitioning (e.g., Kernighan-Lin algorithm).
*   Evaluate the advantages and disadvantages of min-cut partitioning.
*   Apply min-cut partitioning principles to solve simple partitioning problems.
*   Understand the metrics used to evaluate the quality of a partition.

**2. Introduction to Physical Design and Partitioning:**

*   **Physical Design:**  The process of converting a circuit description (netlist) into a physical layout on a silicon wafer.  Key steps include:
    *   Partitioning
    *   Floorplanning
    *   Placement
    *   Routing

*   **Why Partitioning is Important:**  Complex VLSI designs contain millions or even billions of components. Handling such large designs directly is computationally infeasible. Partitioning breaks down the problem into smaller, more manageable sub-problems.

    *   **Benefits of Partitioning:**
        *   **Divide and Conquer:** Simplifies complex designs, making them easier to manage.
        *   **Reduce Complexity:**  Improves runtime and memory usage for placement and routing.
        *   **Parallel Processing:** Enables parallel execution of design steps on different partitions.
        *   **Estimations:**  Allows early estimation of chip area, wire length, and performance.
        *   **Technology Mapping:** Helps to optimize design for specific technology libraries.
        *   **Thermal Management:** Can be used to spread heat generating components.

*   **Partitioning Constraints:** The partitioning process must consider various constraints:
    *   **Size Constraints:** Each partition should have a limited size (number of cells, area).
    *   **Pin Constraints:**  The number of pins in each partition might be limited.
    *   **Performance Constraints:**  Critical paths should be kept within the same partition to minimize delay.
    *   **Power Constraints:**  Power dissipation must be balanced across partitions.

**3. Min-Cut Partitioning: The Core Concept**

*   **Definition:** Min-cut partitioning is a technique that divides a circuit graph into two or more partitions while minimizing the number of connections (cutsize) between them. The *cutsize* is the number of wires that connect cells in different partitions.

*   **Goal:** Minimize the cutsize while satisfying size and other constraints. A smaller cutsize generally leads to shorter wire lengths and better performance.

*   **Circuit Graph Representation:** A circuit is represented as a graph where:
    *   Nodes represent circuit components (cells, gates, modules).
    *   Edges represent connections (nets, wires) between components.

*   **Formal Definition:** Given a graph G(V, E), where V is the set of vertices (circuit components) and E is the set of edges (interconnections), partition V into disjoint subsets V1 and V2 such that V1 ∪ V2 = V and V1 ∩ V2 = ∅, while minimizing the cutsize(V1, V2).  The cutsize is defined as the number of edges that have one endpoint in V1 and the other in V2.

**4. Algorithms for Min-Cut Partitioning**

Several algorithms are used for min-cut partitioning. Here, we focus on a prominent one:

*   **Kernighan-Lin (KL) Algorithm:** A widely used iterative improvement algorithm for bi-partitioning.

    *   **Key Ideas:**
        *   **Iterative Improvement:** Starts with an initial partition and iteratively refines it to reduce the cutsize.
        *   **Pairwise Swaps:** In each iteration, the algorithm considers swapping pairs of nodes (one from each partition) to improve the cutsize.
        *   **Gain:**  The *gain* of swapping two nodes (a from partition A and b from partition B) is the reduction in cutsize achieved by the swap.  Gain(a,b) = D(a) + D(b) - 2*c(a,b), where:
            *   D(a) is the difference between the number of external and internal connections to node a.
            *   c(a,b) is 1 if a and b are connected, 0 otherwise.
        *   **Allow Temporary Increase:** The algorithm allows temporary increases in cutsize during an iteration, which helps escape local minima.
        *   **Pass:** An iteration of the algorithm is called a *pass*. After each pass, the partitions are locked.

    *   **Steps of the Kernighan-Lin Algorithm:**

        1.  **Initialization:** Generate an initial partition of the nodes into two sets A and B. The size of each set is predefined based on balancing factor(area constraint).
        2.  **Compute D-values:** For each node *a* in A and *b* in B, compute the D-value (the difference between external and internal connections).
        3.  **Iterative Swapping:**
            *   Find the pair of nodes (a, b), with a in A and b in B, that gives the maximum gain.
            *   Swap nodes a and b.
            *   Lock nodes a and b (meaning they cannot be swapped again in this pass).
            *   Update the D-values of the unlocked nodes connected to a or b.
            *   Repeat until all nodes are locked.
        4.  **Best Partition:**  During the swapping process, keep track of the cumulative gain after each swap. Choose the partition that corresponds to the maximum cumulative gain.
        5.  **Repeat:** If the maximum gain is positive, repeat steps 2-4. Otherwise, the algorithm terminates.

    *   **Example (Simplified):**

        Consider a graph with nodes {A, B, C, D} and initial partition A = {A, B} and B = {C, D}. Let's assume the connections are as follows:

        *   A connected to B, C
        *   B connected to A, D
        *   C connected to A, D
        *   D connected to B, C

        Assume area constraints are that each partition must have 2 nodes.

        1. **Calculate D Values:**
           * D(A) = 1 (1 external(C) - 1 internal(B))
           * D(B) = 1 (1 external(D) - 1 internal(A))
           * D(C) = 1 (1 external(A) - 1 internal(D))
           * D(D) = 1 (1 external(B) - 1 internal(C))

        2. **Calculate Gain:** We now have to calculate the Gain for all possible swaps. 
           * G(A,C) = D(A) + D(C) - 2*c(A,C) = 1 + 1 - 2*1 = 0
           * G(A,D) = D(A) + D(D) - 2*c(A,D) = 1 + 1 - 2*0 = 2
           * G(B,C) = D(B) + D(C) - 2*c(B,C) = 1 + 1 - 2*0 = 2
           * G(B,D) = D(B) + D(D) - 2*c(B,D) = 1 + 1 - 2*1 = 0

        3. **Swap Iteration 1:** Choose A and D (or B and C) as they yield max Gain. Let's swap A and D.
           * New Partition: A = {D, B}, B = {C, A}
           * Lock A and D.
           * Update D Values based on A and D's new positioning.
           * D(B) = 1 (1 external(C) - 1 internal(D))
           * D(C) = 1 (1 external(D) - 1 internal(A))
           * Now all are locked, one pass is done.

        4. **Find the best combination:** The cumulative Gain after the first swap is 2. This iteration reduces the cutsize. If the max gain from swapping them again, or returning back to the original configuration does not produce a higher value, the swapping stops and the current partition is accepted.

        *  **Important Considerations:** The actual implementation requires several steps and careful calculations. The goal is to illustrate the logic behind the Kernighan-Lin algorithm.

    *   **Advantages of Kernighan-Lin:**
        *   Relatively simple to implement.
        *   Often yields good results in practice.
        *   Can escape local minima.

    *   **Disadvantages of Kernighan-Lin:**
        *   Time complexity can be high for large circuits. O(n^2.log(n))
        *   Sensitive to initial partition.
        *   Only performs bi-partitioning (can be extended to multi-way partitioning iteratively).

*   **Other Partitioning Algorithms (Brief Mention):**

    *   **Fiduccia-Mattheyses (FM) Algorithm:**  An improvement over KL, focusing on moving individual cells instead of swapping pairs.  Faster and more scalable.
    *   **Spectral Partitioning:**  Uses spectral properties of the circuit graph (eigenvalues and eigenvectors of the Laplacian matrix) to determine the partitioning.

**5. Evaluation Metrics**

The quality of a partitioning is evaluated based on several metrics:

*   **Cutsize:** The primary metric.  Lower cutsize is better.
*   **Balance:** How evenly the circuit is divided into partitions.  Ideally, partitions should have similar size.  Balance Factor is expressed as:  Max(size(V1), size(V2)) / (size(V1) + size(V2)), ideally close to 0.5 for even partitioning.
*   **Aspect Ratio:** The ratio of the width to the height of a partition.  Important for floorplanning.
*   **Timing Performance:**  Estimated delay on critical paths after partitioning. Minimize impact on critical paths.
*   **Wire Length:** Total wire length after placement and routing.  A good partitioning will lead to shorter wire lengths.

**6.  Advantages and Disadvantages of Min-Cut Partitioning:**

*   **Advantages:**
    *   Reduces design complexity.
    *   Improves placement and routing efficiency.
    *   Enables parallel processing.
    *   Facilitates design reuse.

*   **Disadvantages:**
    *   Can be computationally expensive, especially for large designs.
    *   The partitioning process itself can introduce overhead (e.g., additional wire length if not optimized well).
    *   Finding the optimal partition is an NP-hard problem.

**7. Practice Questions/Exercises**

1.  **Define cutsize and explain its significance in min-cut partitioning.**
    *   **Answer:** Cutsize is the number of wires that connect cells in different partitions. Minimizing cutsize generally leads to shorter wire lengths and better performance.

2.  **Explain the key differences between the Kernighan-Lin (KL) and Fiduccia-Mattheyses (FM) algorithms.**
    *   **Answer:** KL algorithm swaps pairs of nodes between partitions, while the FM algorithm moves individual cells. FM is generally faster and more scalable than KL.

3.  **List three advantages of using partitioning in VLSI physical design.**
    *   **Answer:** Reduces design complexity, improves placement and routing efficiency, enables parallel processing.

4.  **A circuit has 10 modules. We need to partition it into two equal-sized partitions. Module A has connections to 2 other modules within its partition and 3 modules outside its partition. What is the external connectivity of Module A? What is Module A's internal connectivity?**
    *   **Answer:**  External Connectivity = 3, Internal Connectivity = 2

5. **(Simplified KL exercise):** Suppose you have a circuit with 4 cells A, B, C, and D.  They are initially partitioned as P1 = {A, B} and P2 = {C, D}. Connections are as follows: A-C, B-C, B-D. Compute the initial cutsize.

   * **Answer:** The initial cutsize is 3 (A-C, B-C, and B-D).

**8. Important Points to Remember**

*   Min-cut partitioning is a crucial step in VLSI physical design.
*   The goal is to minimize the cutsize while satisfying size and other constraints.
*   The Kernighan-Lin algorithm is a widely used iterative improvement algorithm for bi-partitioning.
*   Evaluation metrics include cutsize, balance, aspect ratio, timing performance, and wire length.
*   Finding the optimal partition is an NP-hard problem.

This comprehensive guide should provide a solid understanding of min-cut partitioning in VLSI design. Remember to practice with examples to solidify your knowledge. Good luck!
