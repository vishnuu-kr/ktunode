---
title: "Minimum Cost Flow - Cycle-Canceling Algorithm"
subject: "ADVANCED GRAPH ALGORITHMS"
module: "Module 1: Maximum Flow Algorithms "
branch: "Computer Science and Engineering"
semester: 5
topicId: "684162770fc9aa1fdbc8b8fd"
status: "completed"
scrapedAt: "2026-05-20T16:42:50.244Z"
---
# ADVANCED GRAPH ALGORITHMS - Module 1: Maximum Flow Algorithms - Minimum Cost Flow: Cycle-Canceling Algorithm

## I. Introduction

These notes cover the Cycle-Canceling Algorithm for solving the Minimum Cost Flow problem, which is an extension of the Maximum Flow problem. We will cover the key concepts, algorithm steps, a practical example, and exercises to solidify your understanding.

## II. Learning Outcomes

Upon completion of this module, you should be able to:

*   Understand the Minimum Cost Flow problem and its relationship to the Maximum Flow problem.
*   Explain the concept of negative cost cycles and their significance.
*   Describe the Cycle-Canceling Algorithm and its steps.
*   Apply the Cycle-Canceling Algorithm to solve Minimum Cost Flow problems.
*   Analyze the time complexity of the Cycle-Canceling Algorithm.

## III. Key Concepts and Definitions

*   **Network Flow:** A directed graph with source (s) and sink (t) vertices, where each edge has a capacity (c(u,v)) representing the maximum amount of flow that can pass through it.

*   **Flow:**  The amount of material transported from the source (s) to the sink (t) along the edges of the network.

*   **Maximum Flow Problem:** Find the maximum possible flow from the source (s) to the sink (t) in a network, without exceeding the capacity of any edge.

*   **Cost:** An additional parameter associated with each edge in a network flow problem, representing the cost per unit of flow through that edge. Denoted as cost(u, v).

*   **Minimum Cost Flow Problem:** Find a flow of a given value *f* from the source (s) to the sink (t) that minimizes the total cost incurred by the flow.  The total cost is calculated as the sum of (flow(u, v) * cost(u, v)) for all edges (u, v).

*   **Residual Graph:** A graph that represents the remaining capacity and cost of each edge after a flow has been pushed through the original graph.  It consists of:
    *   Forward edges: If (u, v) has flow f(u,v) in the original graph, the residual graph has an edge (u,v) with capacity c(u,v) - f(u,v) and cost(u,v).
    *   Backward edges:  If (u, v) has flow f(u,v) in the original graph, the residual graph has an edge (v,u) with capacity f(u,v) and cost -cost(u,v).

*   **Negative Cost Cycle:** A cycle in the residual graph where the sum of the costs of the edges in the cycle is negative.  These cycles are crucial to the Cycle-Canceling algorithm because they indicate that we can reduce the overall cost by re-routing flow through them.

*   **Augmenting Cycle:**  A cycle in the residual graph that allows us to increase the flow from the source to the sink. In the context of Minimum Cost Flow, we specifically look for augmenting cycles with negative cost.

## IV. The Cycle-Canceling Algorithm

The Cycle-Canceling Algorithm is an iterative algorithm that works by repeatedly finding negative cost cycles in the residual graph and canceling them by pushing flow along those cycles.

**Algorithm Steps:**

1.  **Initialization:**
    *   Find any feasible flow *f* from source (s) to sink (t). This could be a maximum flow (using algorithms like Ford-Fulkerson or Edmonds-Karp), or a flow of a specific required value. If no flow is required, initializing all flow to 0 is acceptable.
    *   Construct the residual graph G<sub>f</sub> based on the current flow *f*.

2.  **Iteration:**
    *   **Find a Negative Cost Cycle:**  Search for a negative cost cycle in the residual graph G<sub>f</sub>.  This can be done using algorithms like:
        *   **Bellman-Ford Algorithm:**  Suitable for graphs with negative edge weights.  If Bellman-Ford detects a negative cycle, you've found one.  Time complexity: O(V\*E), where V is the number of vertices and E is the number of edges.
        *   **SPFA (Shortest Path Faster Algorithm):** An improvement over Bellman-Ford, often faster in practice, but its worst-case time complexity is still O(V\*E).  It may not always be faster and can be susceptible to certain graph structures.

    *   **If no negative cost cycle is found:** The current flow *f* is the minimum cost flow. Terminate the algorithm.

    *   **If a negative cost cycle C is found:**
        *   **Find the minimum residual capacity:** Find the minimum residual capacity (denoted as 'delta') along the edges of cycle C.  This is the maximum amount of flow we can push through the cycle without violating any capacity constraints.
            `delta = min{c_f(u,v) | (u,v) is in C}`

        *   **Augment the flow:**  Increase the flow along the forward edges of the cycle C by 'delta', and decrease the flow along the backward edges of the cycle C by 'delta'. This effectively pushes 'delta' units of flow along the cycle.

        *   **Update the Residual Graph:**  Update the residual graph G<sub>f</sub> based on the new flow.  This includes updating the capacities of forward and backward edges.

3.  **Repeat:** Go back to step 2.

## V. Example

Let's consider a simple network with the following edges (u, v, capacity, cost):

*   (s, a, 10, 2)
*   (s, b, 5, 3)
*   (a, b, 8, 1)
*   (a, t, 7, 4)
*   (b, t, 10, 2)

We want to find a minimum cost flow of 12 units from s to t.

1. **Initialization:**  Let's start with an initial flow where:
    *   flow(s, a) = 7
    *   flow(s, b) = 5
    *   flow(a, b) = 0
    *   flow(a, t) = 7
    *   flow(b, t) = 5
    Total flow = 7 + 5 = 12.
    Cost = (7*2) + (5*3) + (0*1) + (7*4) + (5*2) = 14 + 15 + 0 + 28 + 10 = 67

2. **Construct Residual Graph:**  The residual graph will have the following:
   *   (s, a, 3, 2)  (capacity = 10-7)
   *   (s, b, 0, 3)  (capacity = 5-5)
   *   (a, b, 8, 1)
   *   (a, t, 0, 4)
   *   (b, t, 5, 2)
   *   (a, s, 7, -2) (backward edges)
   *   (b, s, 5, -3)
   *   (b, a, 0, -1)
   *   (t, a, 7, -4)
   *   (t, b, 5, -2)

3. **Find Negative Cycle:**  Using Bellman-Ford (or SPFA) on the residual graph, we find the negative cycle:  a -> t -> b -> a.  The cost of this cycle is 4 + (-2) + (-1) = 1.  Oops!  It's NOT negative.  Let's check the cycle  b->t->a->b.  Cost is 2 + (-4) + (-1) = -3. YES!

4. **Augment Flow:**
   *   The edges in cycle C are: (b, t), (t, a), (a, b)
   *   Minimum residual capacity: min(5, 7, 8) = 5
   *   Increase flow along (b, t) by 5, meaning flow(b,t) becomes 5 + 5 = 10
   *   Decrease flow along (a, t) by 5, meaning flow(a,t) becomes 7 - 5 = 2
   *   Increase flow along (a, b) by 5, meaning flow(a,b) becomes 0 + 5 = 5

5. **Update Flow and Cost:**  The new flow values are:
    *   flow(s, a) = 2 + 5 = 7  (unchanged input to 'a', we rerouted internal to network)
    *   flow(s, b) = 5
    *   flow(a, b) = 5
    *   flow(a, t) = 2
    *   flow(b, t) = 10
    Total flow = 2 + 10 = 12
    New Cost = (7*2) + (5*3) + (5*1) + (2*4) + (10*2) = 14 + 15 + 5 + 8 + 20 = 62

6. **Update Residual Graph:** (Partial - for clarity. Only the affected paths)
   *   (a, t, 2-5) becomes (a, t, 0, 4) and (t, a, 5, -4). Remember capacity and costs change on backwards edges too.
   *   (b, t, 10 - 5) becomes (b, t, 0, 2) and (t, b, 5, -2).

7. **Repeat:** (Important step, often omitted in short examples)

   Now, let's look at the updated residual graph (full graph).  Can we find *another* negative cost cycle? Remember, we need to recompute the residual graph *after each augmentation*. Suppose we now find the cycle s -> a -> t -> b -> s. The cost is 2 + 4 + (-2) + (-3) = 1.  This is *not* negative.  We continue searching.

The algorithm repeats this process until no negative cost cycles are found in the residual graph. In a more complex network, multiple iterations might be needed.

**Important Note:** This is a simplified example. The full iterations need to be carried out until *no more* negative cycles are found. Computing the *full* residual graph after each augmentation is crucial for correctly identifying new negative cost cycles.

## VI. Time Complexity

The time complexity of the Cycle-Canceling Algorithm depends on the method used to find negative cost cycles and the number of iterations.

*   **Finding Negative Cost Cycles:** If using Bellman-Ford, the complexity is O(V\*E) per iteration.  SPFA can often be faster, but has a worst-case complexity of O(V\*E) as well.
*   **Number of Iterations:** The number of iterations can be exponential in the worst case, depending on the capacities and costs in the network. This is a significant drawback of the Cycle-Canceling algorithm.
*   **Overall Complexity:** The overall time complexity is O(N * V * E), where N is the maximum flow value. However, this is a loose bound, and the actual performance depends on the specific network and the chosen algorithm for finding negative cost cycles.

## VII. Practice Questions and Exercises

1.  **Problem:** Consider a network with the following edges (u, v, capacity, cost):
    *   (s, a, 5, 2)
    *   (s, b, 7, 3)
    *   (a, t, 8, 1)
    *   (b, t, 4, 2)
    *   (a, b, 3, 4)

    Find a minimum cost flow of 6 units from s to t using the Cycle-Canceling Algorithm. Show each step, including the residual graph and any negative cost cycles found.

    **Solution:**

    *   **Initialization:**  Start with flow(s,a) = 5, flow(s,b) = 1, flow(a,t) = 5, flow(b,t) = 1. Cost = 5*2 + 1*3 + 5*1 + 1*2 = 10 + 3 + 5 + 2 = 20. This gives a flow of 6 from s to t.
    *   **Residual Graph:** Create residual graph (exercise for the reader).
    *   **Negative Cycle:** The negative cycle is a->b->t->a (cost 4+2-1). The cycle has a *positive* cost, so no negative cycle is present. However, this initialization may not be optimal, meaning you may have to trace *all* possible cycles, or initialize to zero and then find augmenting paths using shortest paths in the *residual* graph to *build* a feasible flow.
    *   **Alternative Initial Flow:** zero flow everywhere. Run Ford Fulkerson to get a valid flow of 6, and THEN start cycle cancelling. This is a more robust methodology.

    (This is a partial solution - the student should complete the iterations). Key here: The initialization CAN influence the run time. ALWAYS show the residual graph at each step!

2.  **Problem:** Explain why finding negative cost cycles is crucial for solving the Minimum Cost Flow problem.

    **Solution:** Negative cost cycles indicate that the current flow is not optimal.  By pushing flow along these cycles, we can reduce the overall cost of the flow without changing the total flow value from source to sink. If we were to push flow along a *positive* cost cycle, it would *increase* the overall cost.

3.  **Problem:** What is the role of the residual graph in the Cycle-Canceling Algorithm?

    **Solution:** The residual graph represents the remaining capacity and cost of each edge after a flow has been pushed through the network. It allows us to:

    *   Identify potential augmenting paths (and cycles) to increase the flow or reduce the cost.
    *   Account for the possibility of reducing flow along an edge by using backward edges with negative costs, which is essential for finding and canceling negative cost cycles.

## VIII. Important Points to Remember

*   The Cycle-Canceling Algorithm guarantees finding the minimum cost flow, but its performance can be slow in the worst case.
*   Correctly constructing and updating the residual graph after each iteration is crucial.
*   Be careful when implementing the algorithm, as errors in residual graph updates can lead to incorrect results.
*   While Bellman-Ford is guaranteed to find negative cost cycles, SPFA can be faster in practice (but has a higher worst-case complexity).
*   Other algorithms, such as the Successive Shortest Path Algorithm, are often more efficient for solving the Minimum Cost Flow problem. These will be covered in subsequent modules.
*   Initialization can be important, but starting with a valid *feasible* flow (of the required flow amount) is crucial before beginning cycle cancelling.

These notes provide a comprehensive overview of the Cycle-Canceling Algorithm for solving the Minimum Cost Flow problem. By understanding the key concepts, following the algorithm steps carefully, and practicing with examples, you can successfully apply this algorithm to solve real-world problems. Remember to always double-check your residual graph calculations and consider alternative, potentially more efficient, algorithms for larger networks.
