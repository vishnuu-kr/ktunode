---
title: "Behavioural Synthesis"
subject: "VLSI DESIGN"
module: "Module 2: Introduction to Integrated Circuits (ICs):"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162760fc9aa1fdbc8b301"
status: "completed"
scrapedAt: "2026-05-20T16:17:21.865Z"
---
## VLSI Design: Module 2 - Behavioural Synthesis

**Introduction:**

Behavioural synthesis is a crucial step in the high-level design process of integrated circuits (ICs). It transforms a high-level behavioural description of a digital system (e.g., in VHDL or SystemVerilog) into a Register-Transfer Level (RTL) description, which is a structural implementation. This structural implementation defines the components needed (e.g., ALUs, registers, multiplexers) and their interconnections to perform the desired behaviour. This module delves into the concepts, stages, and considerations involved in behavioural synthesis.

**Learning Outcomes:**

*   Understand the role and importance of behavioural synthesis in VLSI design flow.
*   Explain the different stages of behavioural synthesis (scheduling, allocation, binding).
*   Describe scheduling algorithms and their trade-offs.
*   Discuss resource allocation techniques and their impact on area and performance.
*   Illustrate the process of binding and its effect on hardware realization.
*   Identify constraints and optimizations in behavioural synthesis.
*   Recognize the relationship between behavioural synthesis and other phases of VLSI design.

**1. Role and Importance of Behavioural Synthesis in VLSI Design Flow**

*   **Definition:** Behavioural synthesis (also known as High-Level Synthesis or HLS) is the automated process of transforming a behavioural description of a digital system into an RTL design.
*   **Importance:**
    *   **Abstraction:** Allows designers to work at a higher level of abstraction, focusing on functionality rather than low-level implementation details.
    *   **Reduced Design Time:** Automation reduces the time required for design entry and verification.
    *   **Design Exploration:** Enables exploration of different architectures and trade-offs between area, power, and performance.
    *   **Verification:** Facilitates easier verification at a higher level of abstraction.
    *   **Automatic Hardware Generation:** Generates synthesizable RTL code directly from the behavioural description.
*   **Position in VLSI Design Flow:**
    *   The behavioural synthesis stage sits between architectural design and RTL synthesis.
    *   **Input:** Behavioural description (e.g., SystemC, VHDL, SystemVerilog).  This specifies *what* the design should do.
    *   **Output:** RTL description (VHDL, Verilog). This specifies *how* the design is implemented using registers, ALUs, muxes etc.
    *   The RTL description is then fed into logic synthesis tools to generate a gate-level netlist, which is subsequently used for physical design (placement and routing).

**2. Stages of Behavioural Synthesis**

Behavioural synthesis can be broken down into three main stages:

*   **Scheduling:** Determines the clock cycle in which each operation in the behavioural description will be executed.
    *   Deals with the *when* aspect of operations.
    *   Goal: Optimize performance (throughput, latency) within specified constraints (area, power).
    *   Input: Behavioural description, resource constraints, timing constraints.
    *   Output: Scheduled data-flow graph (SDFG).
*   **Allocation:** Decides the number and type of hardware resources (e.g., adders, multipliers, registers, memory) that will be used to implement the design.
    *   Deals with the *how many* and *what type* of resources.
    *   Goal: Minimize the hardware cost (area) while meeting performance requirements.
    *   Input: Scheduled data-flow graph, cost of resources.
    *   Output: Resource allocation list.
*   **Binding:** Assigns operations to specific hardware resources and variables to specific registers.
    *   Deals with the *which* aspect. Assigns specific operation to specific hardware resource.
    *   Goal: minimize interconnection complexity and resource sharing.
    *   Input: Scheduled data-flow graph, resource allocation list.
    *   Output: RTL description (hardware connections).

**Example illustrating the stages:**

Consider the following simple behavioral description:

```
A = B + C;
D = E * F;
G = A + D;
```

1.  **Scheduling:**

    Assuming we have only one adder and one multiplier and an adder takes 1 cycle, and a multiplier takes 2 cycles. A possible schedule is:

    *   Cycle 1: `A = B + C;`
    *   Cycle 1-2: `D = E * F;` (Multiplier takes 2 cycles)
    *   Cycle 3: `G = A + D;`

2.  **Allocation:**

    Based on the schedule, we allocate:

    *   1 Adder
    *   1 Multiplier
    *   Registers for A, B, C, D, E, F, and G

3.  **Binding:**

    *   The addition `A = B + C` and `G = A + D` are bound to the single allocated Adder.
    *   The multiplication `D = E * F` is bound to the single allocated Multiplier.
    *   Variables A, B, C, D, E, F, and G are bound to their allocated registers.

**3. Scheduling Algorithms and Their Trade-offs**

*   **As-Soon-As-Possible (ASAP) Scheduling:**
    *   Algorithm: Each operation is scheduled in the earliest possible clock cycle, given data dependencies.
    *   Advantages: Minimizes latency.
    *   Disadvantages: May require a large number of resources, leading to high area.  Doesn't consider resource constraints.
*   **As-Late-As-Possible (ALAP) Scheduling:**
    *   Algorithm: Each operation is scheduled in the latest possible clock cycle without increasing the overall latency, given data dependencies and constraints.
    *   Advantages: Maximizes resource sharing.
    *   Disadvantages: May increase the critical path and negatively impact performance if constraints are not carefully managed.
*   **Force-Directed Scheduling (FDS):**
    *   Algorithm: A more sophisticated approach that considers both timing and resource constraints.  It calculates the "force" of scheduling an operation in a particular control step based on the resource usage and tries to balance the resource utilization across all control steps.
    *   Advantages: Attempts to balance resource usage and achieve good performance/area trade-off.
    *   Disadvantages: More complex to implement. Computationally intensive.
*   **List Scheduling:**
    *   Algorithm:  Maintains a list of ready operations (operations whose dependencies are met).  Prioritizes operations in the list based on some criteria (e.g., critical path length, resource type). Schedules the highest-priority operation in the earliest possible time step.
    *   Advantages: Simple and relatively efficient.
    *   Disadvantages:  Performance is highly dependent on the prioritization criteria.

**Trade-offs:**

| Algorithm | Latency | Resource Usage | Complexity |
|---|---|---|---|
| ASAP | Low | High | Low |
| ALAP |  Can be high if constraints prevent resource sharing  | Low | Low |
| FDS | Good | Good | High |
| List Scheduling | Variable | Variable | Medium |

**4. Resource Allocation Techniques and Their Impact on Area and Performance**

*   **Goal:** To determine the number and type of hardware resources needed to implement the scheduled design.
*   **Types of Resources:** Adders, multipliers, ALUs, registers, memory, etc.
*   **Resource Allocation Techniques:**
    *   **Greedy Allocation:** Allocate resources as needed based on the schedule.  Simple but can lead to over-allocation.
    *   **Integer Linear Programming (ILP):** Formulate the allocation problem as an ILP problem and use ILP solvers to find the optimal solution. Provides the best solution but can be computationally expensive for large designs.
    *   **Heuristic-based Allocation:** Use heuristics to guide the allocation process.  Provides a good trade-off between solution quality and computational complexity.  Examples include:
        *   **Clique Partitioning:**  Identifies sets of operations that can share the same resource because they do not execute concurrently.  Finds cliques in the compatibility graph of operations (where edges represent operations that *cannot* share a resource) and allocates a resource to each clique.
        *   **Left-Edge Algorithm:** Efficiently allocates registers based on their lifetimes.
*   **Impact on Area and Performance:**
    *   **Area:**  Fewer resources lead to smaller area, but potentially longer execution time due to resource sharing.
    *   **Performance:**  More resources can allow for parallel execution, reducing latency, but increasing area.
    *   **Resource Sharing:**  Sharing resources reduces area but introduces multiplexing, which can increase latency.

**Example:**

Imagine two additions occurring in different clock cycles.  If we allocate two adders, the additions can be performed in parallel (faster performance, larger area).  If we allocate only one adder, both additions will use the same adder sequentially (slower performance, smaller area).

**5. Binding and its Effect on Hardware Realization**

*   **Definition:** The process of assigning operations to specific hardware resources and variables to specific registers.
*   **Goal:** Minimize interconnection complexity, power consumption, and routing congestion.
*   **Binding Considerations:**
    *   **Compatibility:** Operations that use the same resource type (e.g., addition) are compatible and can be bound to the same adder.
    *   **Timing:** Ensure that the binding satisfies timing constraints.
    *   **Interconnect Complexity:** Minimize the number of multiplexers needed to route data to and from resources.
    *   **Power Consumption:**  Binding can impact power consumption by affecting the number of switching events.
*   **Effect on Hardware Realization:**
    *   Binding directly determines the structure of the RTL design.
    *   It dictates how resources are interconnected, which registers hold which values, and the overall datapath architecture.
    *   A good binding minimizes the complexity of the generated hardware, leading to smaller area, lower power consumption, and better performance.

**Example:**

If operations A+B and C+D are both bound to the same adder, the output of A+B must be stored in a temporary register before the adder can perform C+D. This results in the adder needing multiplexers at its inputs to select either A and B or C and D, and a register to hold the intermediate result. The binding choice directly influences the structure of the final hardware.

**6. Constraints and Optimizations in Behavioural Synthesis**

*   **Constraints:**
    *   **Timing Constraints:** Maximum clock frequency, minimum latency, setup and hold times.
    *   **Resource Constraints:** Limits on the number and type of hardware resources available.
    *   **Area Constraints:** Maximum allowable chip area.
    *   **Power Constraints:** Maximum power consumption.
*   **Optimizations:**
    *   **Loop Unrolling:** Replicates the body of a loop to increase parallelism.  Improves performance but increases area.
    *   **Loop Pipelining:** Overlaps the execution of different iterations of a loop.  Improves throughput but increases latency.
    *   **Common Subexpression Elimination (CSE):** Identifies and reuses common subexpressions to reduce the number of operations.
    *   **Dead Code Elimination:** Removes code that has no effect on the output.
    *   **Operator Strength Reduction:** Replaces complex operations with simpler ones (e.g., replacing multiplication by a constant with shifts and additions).
    *   **Resource Sharing:** Sharing of hardware resources between different operations.

**7. Relationship Between Behavioural Synthesis and Other Phases of VLSI Design**

*   **Architectural Design:** Provides the behavioural description that serves as the input to behavioural synthesis.
*   **RTL Synthesis:** Takes the RTL description generated by behavioural synthesis and translates it into a gate-level netlist.
*   **Physical Design:** Uses the gate-level netlist to perform placement and routing, creating the physical layout of the circuit.
*   **Verification:** Verifies the correctness of the design at different levels of abstraction (behavioural, RTL, gate-level). Behavioural synthesis facilitates verification at the high-level.

**Important Points to Remember:**

*   Behavioural synthesis automates the transformation from a behavioural description to an RTL implementation.
*   Scheduling, allocation, and binding are the three main stages of behavioural synthesis.
*   Different scheduling algorithms offer different trade-offs between performance and resource usage.
*   Resource allocation techniques determine the number and type of hardware resources.
*   Binding assigns operations to resources and variables to registers, impacting the hardware realization.
*   Constraints and optimizations are crucial for achieving desired design goals.

**Practice Questions/Exercises:**

1.  **Question:** Explain the difference between ASAP and ALAP scheduling.  What are the advantages and disadvantages of each?

    **Answer:** ASAP schedules each operation as early as possible, minimizing latency but potentially requiring more resources. ALAP schedules each operation as late as possible without increasing latency, maximizing resource sharing but potentially increasing the critical path.

2.  **Question:** Consider the following code:

    ```
    A = B + C;
    D = A * E;
    F = A + G;
    ```

    Assume you have one adder and one multiplier. Schedule this code using ASAP. How many clock cycles are required?

    **Answer:**

    *   Cycle 1: `A = B + C;`
    *   Cycle 2: `D = A * E;`
    *   Cycle 3: `F = A + G;`

    Total clock cycles required: 3

3.  **Question:** What is the purpose of resource binding? How does it affect the final hardware implementation?

    **Answer:** Resource binding assigns operations to specific hardware resources and variables to specific registers. It determines the structure of the RTL design, how resources are interconnected, which registers hold which values, and the overall datapath architecture, influencing area, power, and performance.

4. **Question:**  Give one example of an optimization technique used during behavioural synthesis and explain how it can improve the final design.

    **Answer:**  Loop unrolling. It replicates the body of a loop, enabling parallel execution of loop iterations. This can improve performance by reducing the overall execution time of the loop, but it increases the area of the circuit.

This comprehensive guide provides a strong foundation for understanding behavioural synthesis in VLSI design. Remember to practice applying these concepts to different design scenarios to solidify your understanding. Good luck!
