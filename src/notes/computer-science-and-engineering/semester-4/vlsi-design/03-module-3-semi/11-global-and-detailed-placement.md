---
title: "Global and  Detailed Placement"
subject: "VLSI DESIGN"
module: "Module 3: Semi"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b30d"
status: "completed"
scrapedAt: "2026-05-20T16:17:29.951Z"
---
## VLSI Design: Module 3 - Semi: Global and Detailed Placement

**Introduction:** This module covers the crucial placement stage of VLSI physical design. Placement aims to arrange the circuit components (cells, blocks) on the chip area in an optimal way, considering various factors like wire length, congestion, power consumption, and timing. This module specifically focuses on Global Placement and Detailed Placement, two distinct phases within the overall placement process.

**Learning Outcomes:**

*   Understand the goals and challenges of the placement problem in VLSI design.
*   Differentiate between Global Placement and Detailed Placement.
*   Describe and compare various global placement algorithms, including:
    *   Quadratic Placement
    *   Partitioning-based Placement
    *   Simulated Annealing-based Placement
*   Explain the purpose and techniques used in Detailed Placement, including:
    *   Cell legalization
    *   Cell overlap removal
    *   Cell alignment and spacing optimization

**1. Goals and Challenges of Placement**

*   **Goal:** To determine the optimal location of each cell or block on the chip area, minimizing a cost function while satisfying design constraints.
*   **Cost Function:** Typically, a combination of:
    *   **Wire Length:** Minimizing the total wire length reduces delay, power consumption, and routing congestion.
    *   **Congestion:** Minimizing routing congestion prevents routing failures and ensures routability.
    *   **Power Consumption:** Optimizing placement can reduce power consumption by shortening interconnects and reducing capacitive loading.
    *   **Timing:** Meeting timing constraints is crucial for high-performance designs. Placement significantly affects signal delays.
    *   **Die Area:** Packing cells tightly can reduce die size and manufacturing cost.
*   **Constraints:**
    *   **Non-overlap:** No two cells can occupy the same physical location.
    *   **Placement Region:** Cells must be placed within the defined chip area.
    *   **I/O Pad Placement:** I/O pads typically have fixed locations.
    *   **Pre-placed Cells:** Some cells (e.g., memories, IP blocks) might have fixed locations.
    *   **Timing Constraints:**  Ensuring critical paths meet required timing specifications.
*   **Challenges:**
    *   **NP-hard Problem:** Finding the optimal placement is computationally complex (NP-hard), making it impossible to find the guaranteed optimal solution for large designs in a reasonable time.
    *   **Large Search Space:** The number of possible placements grows exponentially with the number of cells.
    *   **Interdependence of Objectives:** Minimizing one objective (e.g., wire length) might negatively impact another (e.g., congestion).
    *   **Accuracy of Estimation:** Accurately estimating wire length, congestion, and timing before routing is challenging.

**2. Global Placement vs. Detailed Placement**

*   **Global Placement:**
    *   **Purpose:** Determines an approximate location for each cell.
    *   **Characteristics:**
        *   Considers the overall chip area and connectivity between cells.
        *   Allows cell overlap to explore a wider solution space.
        *   Uses simplified models for wire length, congestion, and timing.
        *   Relatively fast compared to detailed placement.
    *   **Output:** Approximate X and Y coordinates for each cell.

*   **Detailed Placement:**
    *   **Purpose:** Refines the global placement solution to produce a legal and optimized placement.
    *   **Characteristics:**
        *   Considers detailed layout rules and cell dimensions.
        *   Removes cell overlap.
        *   Optimizes cell alignment, spacing, and orientation.
        *   Accounts for timing constraints more precisely.
        *   More computationally intensive than global placement.
    *   **Output:** Final X and Y coordinates for each cell that satisfies all design rules.

**3. Global Placement Algorithms**

*   **3.1 Quadratic Placement:**
    *   **Principle:** Formulates the placement problem as a system of quadratic equations, where the objective is to minimize the squared wire length.
    *   **Formulation:**
        *   Objective function:  Minimize ∑ Wij * ( (Xi - Xj)^2 + (Yi - Yj)^2 )
            *   `Wij`: Weight of the connection between cell i and cell j (reflects the importance or number of connections).
            *   `Xi`, `Yi`: Coordinates of cell i.
            *   `Xj`, `Yj`: Coordinates of cell j.
        *   The problem is converted to a system of linear equations by taking the derivative of the objective function with respect to each `Xi` and `Yi` and setting it to zero.
        *   The system of linear equations is then solved using numerical methods (e.g., conjugate gradient).
    *   **Advantages:**
        *   Mathematically well-defined.
        *   Relatively fast due to efficient solvers for linear equations.
        *   Produces good wire length results.
    *   **Disadvantages:**
        *   Does not directly handle cell overlap.  Overlap removal is typically done as a post-processing step.
        *   Can lead to high congestion in certain regions if not carefully managed.
        *   Doesn't explicitly consider timing or power.
    *   **Example:** Imagine three cells A, B, and C with weights WAB = 2, WBC = 3, and WAC = 1.  Quadratic placement would try to place these cells to minimize the weighted squared distance between them. Cell B, with stronger connections to both A and C, would likely be placed closer to A and C than A and C are to each other.

*   **3.2 Partitioning-based Placement (Min-Cut Placement):**
    *   **Principle:** Recursively divides the chip area and cells into smaller partitions, aiming to minimize the number of connections (cuts) between partitions.  The cells are assigned to partitions to balance the number of cells in each partition while minimizing the cutset.
    *   **Algorithm:**
        1.  Divide the chip area into two or more partitions.
        2.  Assign cells to partitions based on connectivity to minimize the cut size (number of wires crossing the partition boundary).  Common partitioning algorithms like Kernighan-Lin (KL) or Fiduccia-Mattheyses (FM) are used.
        3.  Recursively repeat steps 1 and 2 for each partition until the partitions are small enough (e.g., containing only one or a few cells).
    *   **Advantages:**
        *   Good for minimizing congestion, as it explicitly tries to reduce the number of wires crossing partition boundaries.
        *   Relatively simple to implement.
    *   **Disadvantages:**
        *   The quality of the placement heavily depends on the quality of the partitioning algorithm.
        *   Can be sensitive to the initial partitioning.
        *   May not be optimal in terms of wire length.
    *   **Example:** Imagine a circuit with two groups of cells: Group A and Group B. Min-cut placement will try to put all cells in Group A together in one partition and all cells in Group B together in another partition, minimizing the number of wires that need to cross between the two partitions.

*   **3.3 Simulated Annealing-based Placement:**
    *   **Principle:**  Uses a probabilistic search algorithm inspired by the annealing process in metallurgy.  It explores different placements by making small random changes (moves) to cell locations. The algorithm accepts moves that improve the cost function and, with a certain probability, accepts moves that worsen the cost function, allowing it to escape local optima.
    *   **Algorithm:**
        1.  Start with an initial placement.
        2.  Iteratively make small random changes to cell locations (e.g., swapping the positions of two cells, moving a cell to a new location).
        3.  Calculate the change in cost function (ΔCost) due to the move.
        4.  If ΔCost < 0 (improvement), accept the move.
        5.  If ΔCost > 0 (worsening), accept the move with probability exp(-ΔCost / T), where T is the "temperature" parameter.
        6.  Gradually decrease the temperature T over time. As T decreases, the probability of accepting worsening moves decreases.
        7.  Repeat steps 2-6 until the temperature reaches a freezing point or a stopping criterion is met.
    *   **Advantages:**
        *   Can potentially find better solutions than deterministic algorithms like quadratic placement, especially for complex designs.
        *   Flexible and can be easily adapted to different cost functions and constraints.
    *   **Disadvantages:**
        *   Slow compared to other global placement algorithms due to its iterative nature.
        *   The quality of the solution depends on the annealing schedule (how quickly the temperature is decreased) and the initial placement.
        *   Requires careful tuning of parameters.
    *   **Example:** Imagine a cell stuck in a local minimum where moving it in any direction initially increases the wire length. Simulated annealing, by sometimes accepting moves that initially increase wire length, can "jump" out of this local minimum and find a better placement in the long run.

**4. Detailed Placement**

*   **Purpose:** To legalize and optimize the placement generated by global placement.
*   **Key Techniques:**

    *   **4.1 Cell Legalization:**
        *   **Goal:**  Eliminate cell overlap and ensure that cells are placed on legal locations (e.g., within rows, on grid points).
        *   **Techniques:**
            *   **Row-Based Legalization:**  Cells are moved horizontally or vertically to the nearest available legal site within a row.
            *   **Cluster Movement:**  Groups of cells are moved together to create space for legalization.
            *   **Insertion-Based Legalization:**  Cells are inserted into the placement, displacing other cells to make room.
        *   **Example:** Imagine two cells overlapping after global placement. Legalization will shift one or both cells so that they no longer overlap and are aligned to the placement grid.

    *   **4.2 Cell Overlap Removal:**
        *   **Goal:** Completely remove any remaining overlaps between cells.
        *   **Techniques:**
            *   **Force-Directed Methods:**  Cells are treated as objects with repulsive forces between them. The cells are moved iteratively until the forces are balanced and there is no overlap.
            *   **Mathematical Programming:**  Formulate the overlap removal problem as a linear or integer programming problem and solve it using optimization solvers.
        *   **Example:** After initial legalization, there might still be small overlaps.  Overlap removal techniques refine the placement further to eliminate these remaining overlaps.

    *   **4.3 Cell Alignment and Spacing Optimization:**
        *   **Goal:** Improve the placement by aligning cells to rows, optimizing the spacing between cells, and potentially changing cell orientation.
        *   **Techniques:**
            *   **Row Alignment:**  Align cells to the center or edge of the placement rows to improve routability.
            *   **Spacing Optimization:**  Adjust the spacing between cells to reduce congestion, improve timing, or reduce power consumption.
            *   **Flipping/Rotation:**  Changing the orientation of cells can improve connectivity, reduce wire length, or improve timing.
        *   **Example:** After legalization and overlap removal, cells might be slightly misaligned. Aligning cells to the center of their rows can improve the regularity of the layout and facilitate routing.

**5. Important Points to Remember**

*   Placement is a crucial step in VLSI physical design, significantly impacting performance, power, and area.
*   Global placement provides an approximate solution, while detailed placement refines it to produce a legal and optimized layout.
*   The choice of placement algorithm depends on the specific design requirements and constraints.
*   Balancing multiple objectives (wire length, congestion, timing) is a key challenge in placement.
*   Iteration and refinement are common in placement flows. The output of one stage often needs to be adjusted in subsequent stages.

**Practice Questions/Exercises:**

1.  **Question:** Explain the difference between global placement and detailed placement in VLSI design. What are the key goals of each phase?

    **Answer:** Global placement determines the approximate location of each cell, considering the overall chip area and connectivity, allowing cell overlap.  The goal is to minimize a cost function (e.g., wire length) while balancing congestion. Detailed placement refines the global placement solution to produce a legal and optimized layout. It removes cell overlap, optimizes cell alignment, spacing, and orientation, and ensures compliance with design rules. The goal is to create a final, routable placement.

2.  **Question:** Describe the basic principle of quadratic placement. What are its advantages and disadvantages?

    **Answer:** Quadratic placement formulates the placement problem as a system of quadratic equations, where the objective is to minimize the squared wire length. It converts this to a system of linear equations that can be solved efficiently. Advantages include being mathematically well-defined and relatively fast. Disadvantages include not directly handling cell overlap and potentially leading to high congestion.

3.  **Question:** How does simulated annealing-based placement work? Explain the role of the "temperature" parameter.

    **Answer:** Simulated annealing iteratively makes small random changes to cell locations and evaluates the change in cost. It accepts moves that improve the cost function and, with a certain probability, accepts moves that worsen the cost function to escape local optima. The "temperature" parameter controls the probability of accepting worsening moves.  At high temperatures, the algorithm is more likely to accept worsening moves, allowing it to explore a wider solution space.  As the temperature decreases, the algorithm becomes more conservative and less likely to accept worsening moves, converging towards a local minimum.

4.  **Question:** What is cell legalization in detailed placement, and why is it necessary?

    **Answer:** Cell legalization is the process of removing cell overlap and ensuring that cells are placed on legal locations (e.g., within rows, on grid points). It is necessary because global placement often allows cell overlap, which is not physically realizable. Legalization ensures that the final placement is valid and can be implemented on the physical chip.

5.  **Question:** What are some techniques used for cell overlap removal in detailed placement?

    **Answer:** Techniques used for cell overlap removal include:

    *   **Force-Directed Methods:**  Treating cells as objects with repulsive forces between them and moving them until the forces are balanced.
    *   **Mathematical Programming:**  Formulating the overlap removal problem as a linear or integer programming problem and solving it using optimization solvers.

These notes provide a detailed overview of global and detailed placement in VLSI design. Review these concepts and practice the exercises to gain a solid understanding of this important topic. Good luck!
