---
title: "Global and Detailed Routing"
subject: "VLSI DESIGN"
module: "Module 3: Semi"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b30e"
status: "completed"
scrapedAt: "2026-05-20T16:17:30.670Z"
---
## VLSI Design: Module 3 - Semi: Global and Detailed Routing

These notes cover Global and Detailed Routing within VLSI Design, part of Module 3 focusing on semi-custom design methodologies.

**Learning Outcomes:**

*   Understand the purpose and importance of global and detailed routing in VLSI design.
*   Describe the different global routing algorithms and their trade-offs (Steiner Tree, Maze Routing, Channel Routing, Pattern Routing).
*   Explain the concept of routing channels and switchboxes.
*   Explain different detailed routing algorithms (Left-Edge Algorithm, Line-Probe Algorithm).
*   Identify common routing challenges and techniques for addressing them.
*   Differentiate between grid-based and gridless routing.

**1. Introduction to Routing in VLSI Design**

*   **Definition:** Routing is the process of connecting different circuit elements (transistors, gates, standard cells, blocks) in a VLSI design according to the specified netlist.
*   **Netlist:** A netlist is a description of the interconnections required between the various components of a circuit. It specifies which pins need to be electrically connected.
*   **Importance:** Proper routing is crucial for circuit performance (speed, power consumption, reliability). Poor routing can lead to signal delays, noise, and even functional failures.
*   **Routing Flow:** VLSI routing is typically divided into two phases:

    *   **Global Routing:** Determines the general routes for each net, assigning them to specific routing channels or areas. It considers congestion and minimizes overall wire length.
    *   **Detailed Routing:** Determines the exact geometric layout of each wire within the assigned routing channels or areas. It focuses on meeting design rules and optimizing electrical performance.

**2. Global Routing**

*   **Purpose:**
    *   Estimate wire lengths and delay.
    *   Minimize total wire length.
    *   Distribute wires evenly across the chip to avoid congestion.
    *   Determine the routing regions (channels) for each net.
*   **Inputs:**
    *   Netlist
    *   Floorplan or Placement information
    *   Routing resource information (channel capacities)
*   **Output:**
    *   An assignment of each net to a sequence of routing regions (channels or grid cells).
*   **Global Routing Algorithms:**

    *   **2.1 Steiner Tree Algorithm:**
        *   **Concept:**  Finds the minimum-length interconnection of a set of terminals in a plane. It introduces Steiner points to minimize the overall wire length.
        *   **Advantages:** Minimizes wire length effectively.
        *   **Disadvantages:** Computationally complex (NP-hard), especially for large nets.
        *   **Example:** Consider connecting three pins A, B, and C.  Direct connections A-B and B-C might be longer than introducing a Steiner point S and connecting A-S, B-S, and C-S.

    *   **2.2 Maze Routing (Lee's Algorithm):**
        *   **Concept:** Uses a breadth-first search algorithm to find the shortest path between two terminals on a grid.
        *   **Advantages:** Guarantees finding the shortest path if one exists.
        *   **Disadvantages:** Memory-intensive, slow for long nets, considers only two terminals at a time.  Can easily lead to congestion.
        *   **Process:**
            1.  **Wave Expansion:** Expand a wave from the source terminal, labeling each grid cell with the distance from the source.
            2.  **Back Tracing:** Once the wave reaches the target terminal, trace back the path with decreasing distance labels to find the shortest route.
        *   **Example:**  Imagine finding a route between two pins on a circuit board, navigating around obstacles.

    *   **2.3 Channel Routing:**
        *   **Concept:** Divides the routing area into horizontal channels and vertical tracks, and assigns nets to these channels and tracks. Often used after global routing.
        *   **Advantages:** Well-suited for structured designs (e.g., standard cell layouts).
        *   **Disadvantages:** Can be inefficient for complex designs with many nets. Requires pre-defined channel structure.

    *   **2.4 Pattern Routing:**
        *   **Concept:** Uses predefined routing patterns (e.g., L-shaped, Z-shaped) to connect terminals.
        *   **Advantages:** Simple and fast, good for short nets.
        *   **Disadvantages:** May not be optimal for all nets, can lead to congestion.
        *   **Example:** Connecting two pins using a straight line (if possible) or an "L" shaped connection around an obstacle.

*   **Trade-offs:**
    *   **Wire Length vs. Congestion:**  Minimizing wire length may increase congestion in certain areas. Global routing algorithms must balance these two objectives.
    *   **Computational Complexity:**  Complex algorithms (like Steiner Tree) provide better routing quality but require more computation time. Simpler algorithms (like Pattern Routing) are faster but may not be optimal.
*   **Rip-up and Re-route:** A technique used to improve routing quality.  Existing routes are temporarily removed ("ripped up") and re-routed to alleviate congestion or reduce wire length.

**3. Detailed Routing**

*   **Purpose:**
    *   Determine the exact geometric layout of each wire within the assigned routing regions (channels or areas).
    *   Meet all design rules (e.g., minimum wire width, spacing).
    *   Optimize electrical performance (e.g., minimize via count, reduce crosstalk).
*   **Inputs:**
    *   Netlist
    *   Global routing results (channel assignments)
    *   Design rules
*   **Output:**
    *   The detailed geometric layout of all wires.
*   **Routing Channels and Switchboxes:**

    *   **Routing Channel:** A rectangular area with terminals on two opposite sides. Wires are routed horizontally in tracks and vertically to connect to the terminals.  Channel routing algorithms are used here.
    *   **Switchbox:** A more general routing area with terminals on all four sides. More complex algorithms are needed for switchbox routing.

*   **Detailed Routing Algorithms:**

    *   **3.1 Left-Edge Algorithm:**
        *   **Concept:**  A greedy algorithm for routing horizontal wire segments in a channel. It assigns the topmost available track to each wire segment, starting with the leftmost segment.
        *   **Advantages:** Simple and efficient, guarantees optimal solution for a two-layer channel with horizontal and vertical wire segments.
        *   **Disadvantages:** Only works for two-layer channel routing with horizontal wire segments.
        *   **Example:** Imagine routing several horizontal wire segments in a channel, ensuring no overlaps.  The algorithm places the segments from left to right, choosing the first available track.

    *   **3.2 Line-Probe Algorithm:**
        *   **Concept:**  Explores the routing space by extending horizontal and vertical lines from the terminals, trying to find a path.
        *   **Advantages:** Relatively simple and efficient.
        *   **Disadvantages:** May not find the shortest path. Can be blocked by obstacles.
        *   **Process:** Start from the source and target terminals. Extend horizontal and vertical lines (probes) until they intersect or hit an obstacle. If a probe from the source and a probe from the target intersect, a route is found.

**4. Routing Challenges and Techniques**

*   **Congestion:**  High density of wires in certain areas, leading to routing failures or increased wire length.  Techniques to address this:
    *   **Global Routing Optimization:** Improve global routing algorithms to distribute wires more evenly.
    *   **Rip-up and Re-route:** Remove and re-route congested areas.
    *   **Increasing Routing Resources:** Adding more routing layers or tracks in congested areas (if possible).
*   **Crosstalk:**  Unwanted coupling between adjacent wires, leading to signal noise and delay.  Techniques to address this:
    *   **Spacing Optimization:** Increase the spacing between sensitive wires.
    *   **Shielding:**  Insert ground or power wires between sensitive wires to reduce coupling.
    *   **Routing Order:** Route critical signals first to minimize their exposure to crosstalk.
*   **Design Rule Violations:**  Failure to meet minimum wire width, spacing, or via requirements.  Techniques to address this:
    *   **Design Rule Checking:**  Thoroughly check the routed layout for design rule violations.
    *   **Design Rule Aware Routing:**  Use routing algorithms that are designed to avoid design rule violations.
*   **Via Minimization:** Reducing the number of vias (vertical interconnect accesses) to improve reliability and reduce resistance.
    *   **Layer Assignment Optimization:** Assign wire segments to layers to minimize the need for vias.
    *   **Via Stitching:** Replace a single via with multiple vias to improve current carrying capacity and reduce resistance.

**5. Grid-Based vs. Gridless Routing**

*   **Grid-Based Routing:**
    *   The routing area is divided into a grid of cells.
    *   Wires are routed along grid lines.
    *   Simpler to implement, but can be less efficient in terms of area utilization.
    *   Algorithms: Maze Routing, Channel Routing.
*   **Gridless Routing:**
    *   Wires can be placed at any location and orientation.
    *   More flexible and efficient in terms of area utilization.
    *   More complex to implement.
    *   Algorithms: Line-Probe Algorithm, Shape-Based Routing.

**6. Important Points to Remember:**

*   Global routing and detailed routing are two interconnected phases of the routing process.  The success of detailed routing depends heavily on the quality of the global routing.
*   Routing algorithms involve trade-offs between wire length, congestion, performance, and complexity.
*   Design rules must be carefully considered during detailed routing.
*   Rip-up and re-route is a valuable technique for improving routing quality.

**Practice Questions/Exercises:**

1.  **Explain the difference between global routing and detailed routing.**

    *   **Answer:** Global routing determines the general routes for each net, assigning them to specific routing regions. Detailed routing determines the exact geometric layout of each wire within the assigned routing regions, meeting design rules and optimizing electrical performance.

2.  **Describe the advantages and disadvantages of Maze Routing.**

    *   **Answer:**
        *   **Advantages:** Guarantees finding the shortest path if one exists.
        *   **Disadvantages:** Memory-intensive, slow for long nets, considers only two terminals at a time, can easily lead to congestion.

3.  **What is the purpose of a switchbox in detailed routing?**

    *   **Answer:** A switchbox is a general routing area with terminals on all four sides.  It's more complex than a routing channel, requiring more sophisticated routing algorithms.

4.  **Explain the Left-Edge Algorithm and its limitations.**

    *   **Answer:** The Left-Edge Algorithm is a greedy algorithm for routing horizontal wire segments in a channel. It assigns the topmost available track to each wire segment, starting with the leftmost segment. It's limited to two-layer channel routing with horizontal wire segments.

5.  **Why is congestion a major concern in VLSI routing, and what techniques can be used to address it?**

    *   **Answer:** Congestion is a major concern because it can lead to routing failures, increased wire length, and performance degradation. Techniques to address it include global routing optimization, rip-up and re-route, and increasing routing resources.

6.  **Differentiate between Grid-based and Gridless routing. Provide examples of Algorithms that are used in each of these routing types.**

    *   **Answer:**
       * **Grid-Based Routing:** The routing area is divided into a grid of cells. Wires are routed along grid lines. Simpler to implement, but can be less efficient in terms of area utilization. Algorithms: Maze Routing, Channel Routing.
       * **Gridless Routing:** Wires can be placed at any location and orientation. More flexible and efficient in terms of area utilization. More complex to implement. Algorithms: Line-Probe Algorithm, Shape-Based Routing.
7. Consider a global routing problem with 4 nets to be routed. There are 3 available routing channels.

    * Net 1:  Needs to be routed across channels 1 and 2
    * Net 2: Needs to be routed across channels 2 and 3
    * Net 3: Needs to be routed across channel 1
    * Net 4: Needs to be routed across channel 3
    * Assume that each channel can accommodate only 2 nets.  Propose a valid global routing assignment.

    * **Answer:**

        * Channel 1: Nets 1 and 3.
        * Channel 2: Net 1 and Net 2.
        * Channel 3: Net 2 and Net 4.

        This assignment satisfies the channel capacity constraint while routing all nets.  Other valid assignments may exist.
