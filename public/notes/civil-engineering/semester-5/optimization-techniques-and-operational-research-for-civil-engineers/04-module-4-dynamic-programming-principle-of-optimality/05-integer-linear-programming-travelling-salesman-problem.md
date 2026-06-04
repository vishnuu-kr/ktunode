---
title: "Integer Linear Programming: travelling salesman problem"
subject: "OPTIMIZATION TECHNIQUES AND OPERATIONAL RESEARCH FOR CIVIL ENGINEERS"
module: "Module 4: Dynamic Programming: Principle of optimality"
branch: "Civil Engineering"
semester: 5
topicId: "689f15cd56b5e963ba810fb5"
status: "completed"
scrapedAt: "2026-05-20T18:50:51.676Z"
---
# Module 4: Dynamic Programming: Principle of Optimality

## Topic: Integer Linear Programming: Travelling Salesman Problem (TSP)

### 1. Introduction to the Travelling Salesman Problem (TSP)

The Travelling Salesman Problem (TSP) is a classic combinatorial optimization problem that finds wide application in various fields, including logistics, transportation, and circuit board drilling.

**Definition:** Given a list of cities and the distances between each pair of cities, what is the shortest possible route that visits each city exactly once and returns to the origin city?

**Key Characteristics:**

*   **NP-hard problem:** For a large number of cities, finding the absolute optimal solution is computationally very expensive and can take an extremely long time.
*   **Objective:** Minimize the total distance (or cost) of the tour.
*   **Constraint:** Each city must be visited exactly once.
*   **Return to origin:** The tour must end at the starting city.

### 2. Mathematical Formulation of TSP as an Integer Linear Program (ILP)

While TSP can be approached with dynamic programming, it's also commonly formulated as an Integer Linear Program. This formulation helps us understand its structure and how standard ILP solvers can be used.

**Decision Variables:**

Let $x_{ij}$ be a binary variable:
*   $x_{ij} = 1$ if the salesman travels directly from city $i$ to city $j$.
*   $x_{ij} = 0$ otherwise.

Where $i, j \in \{1, 2, \dots, n\}$ are the cities.

**Objective Function:**

Minimize the total distance of the tour:
$$ \text{Minimize } Z = \sum_{i=1}^{n} \sum_{j=1, j \neq i}^{n} c_{ij} x_{ij} $$
where $c_{ij}$ is the distance (or cost) from city $i$ to city $j$.

**Constraints:**

1.  **Each city must be entered exactly once:**
    $$ \sum_{i=1, i \neq j}^{n} x_{ij} = 1 \quad \text{for each city } j = 1, \dots, n $$
    This ensures that for any destination city $j$, there is exactly one incoming edge.

2.  **Each city must be left exactly once:**
    $$ \sum_{j=1, j \neq i}^{n} x_{ij} = 1 \quad \text{for each city } i = 1, \dots, n $$
    This ensures that for any origin city $i$, there is exactly one outgoing edge.

3.  **Subtour Elimination Constraints:** These are crucial to prevent the formation of smaller, disconnected tours (subtours) instead of a single complete tour. There are various ways to formulate these. A common set is the **Miller-Tucker-Zemlin (MTZ) formulation**:

    For each pair of distinct cities $i$ and $j$ (where $i, j \in \{2, \dots, n\}$), introduce auxiliary variables $u_i \ge 0$:
    $$ u_i - u_j + n x_{ij} \le n - 1 \quad \text{for } i, j \in \{1, \dots, n\}, i \neq j $$
    Here, $u_i$ represents the position of city $i$ in the tour. If $x_{ij} = 1$ (meaning a direct edge from $i$ to $j$), then $u_i$ must be less than $u_j$. The constraint ensures that $u_j$ is at least $u_i + 1$ if $i$ precedes $j$, preventing cycles.

    *   **Note:** The MTZ formulation requires $O(n^2)$ constraints. Other subtour elimination formulations exist, such as the Dantzig-Fulkerson-Johnson (DFJ) formulation, which generates constraints dynamically as needed and is generally more efficient for larger problems.

4.  **Binary Variable Constraints:**
    $$ x_{ij} \in \{0, 1\} \quad \text{for all } i, j $$

### 3. Example: A Simple TSP

Let's consider a TSP with 3 cities (A, B, C). We want to find the shortest tour starting and ending at A.
The distances are given by the following matrix:

| From \ To | A | B | C |
| :-------- | :-: | :-: | :-: |
| **A**     | - | 10 | 15 |
| **B**     | 10 | - | 35 |
| **C**     | 15 | 35 | - |

**Cities:** 1=A, 2=B, 3=C
**Number of cities:** $n=3$

**Decision Variables:** $x_{12}, x_{13}, x_{21}, x_{23}, x_{31}, x_{32}$ (all binary)

**Objective Function:**
$$ \text{Minimize } Z = 10x_{12} + 15x_{13} + 10x_{21} + 35x_{23} + 15x_{31} + 35x_{32} $$

**Constraints:**

1.  **Enter each city once:**
    *   City A: $x_{21} + x_{31} = 1$
    *   City B: $x_{12} + x_{32} = 1$
    *   City C: $x_{13} + x_{23} = 1$

2.  **Leave each city once:**
    *   City A: $x_{12} + x_{13} = 1$
    *   City B: $x_{21} + x_{23} = 1$
    *   City C: $x_{31} + x_{32} = 1$

3.  **Subtour Elimination (MTZ formulation for n=3):**
    We need auxiliary variables $u_2, u_3$. (Note: $u_1$ is often fixed to 0 or 1, or not included in the constraints). Let's use the standard form where $i,j \in \{1, ..., n\}$.
    *   $u_i - u_j + n x_{ij} \le n - 1$ for $i \neq j$.
    Let's assume $u_1$ is the starting point. The MTZ constraints are usually applied for $i,j \in \{2, ..., n\}$. If we use $i,j \in \{1, ..., n\}$ with $u_1 = 0$, we have:
    For $i, j \in \{1, 2, 3\}, i \neq j$:
    *   $u_1 - u_2 + 3x_{12} \le 2$
    *   $u_1 - u_3 + 3x_{13} \le 2$
    *   $u_2 - u_1 + 3x_{21} \le 2$
    *   $u_2 - u_3 + 3x_{23} \le 2$
    *   $u_3 - u_1 + 3x_{31} \le 2$
    *   $u_3 - u_2 + 3x_{32} \le 2$

    And also, $u_i \ge 0$ for $i=1, 2, 3$. With $u_1=0$, these become:
    *   $-u_2 + 3x_{12} \le 2$
    *   $-u_3 + 3x_{13} \le 2$
    *   $u_2 + 3x_{21} \le 2$ (since $-u_1 = 0$)
    *   $u_2 - u_3 + 3x_{23} \le 2$
    *   $u_3 + 3x_{31} \le 2$ (since $-u_1 = 0$)
    *   $u_3 - u_2 + 3x_{32} \le 2$

**Possible Tours:**

*   A -> B -> C -> A: $x_{12}=1, x_{23}=1, x_{31}=1$. Cost = $10 + 35 + 15 = 60$.
    Check constraints:
    *   Enter A: $x_{21} + x_{31} = 0 + 1 = 1$ (OK)
    *   Enter B: $x_{12} + x_{32} = 1 + 0 = 1$ (OK)
    *   Enter C: $x_{13} + x_{23} = 0 + 1 = 1$ (OK)
    *   Leave A: $x_{12} + x_{13} = 1 + 0 = 1$ (OK)
    *   Leave B: $x_{21} + x_{23} = 0 + 1 = 1$ (OK)
    *   Leave C: $x_{31} + x_{32} = 1 + 0 = 1$ (OK)
    *   MTZ: Need to check if valid $u_2, u_3$ exist. E.g., if $u_1=0, u_2=1, u_3=2$:
        *   $-1 + 3(1) \le 2$ (2 <= 2, OK)
        *   $-2 + 3(0) \le 2$ (-2 <= 2, OK)
        *   $1 + 3(0) \le 2$ (1 <= 2, OK)
        *   $1 - 2 + 3(1) \le 2$ (0 <= 2, OK)
        *   $2 + 3(0) \le 2$ (2 <= 2, OK)
        *   $2 - 1 + 3(0) \le 2$ (1 <= 2, OK)

*   A -> C -> B -> A: $x_{13}=1, x_{32}=1, x_{21}=1$. Cost = $15 + 35 + 10 = 60$.

The optimal tour here is any of these, with a total cost of 60.

### 4. Solution Approaches for TSP

Given that TSP is NP-hard, finding the *exact* optimal solution for large instances requires specialized algorithms or solvers.

#### 4.1 Exact Algorithms

*   **Branch and Bound:** A systematic search method that explores the solution space by dividing it into smaller subproblems. It uses bounds (estimates of the best possible solution) to prune branches that cannot lead to an optimal solution.
*   **Integer Linear Programming Solvers:** Commercial or open-source solvers (like CPLEX, Gurobi, GLPK) can solve ILPs. The TSP formulation above can be fed into these solvers. However, for large $N$, the number of subtour elimination constraints can become very large, making it computationally intensive. Cutting plane methods are often used in conjunction with ILP solvers to generate these constraints as needed.
*   **Dynamic Programming (Held-Karp Algorithm):** This is a dynamic programming approach that provides an exact solution. It has a time complexity of $O(n^2 2^n)$, which is still exponential but significantly better than brute force ($O(n!)$).

#### 4.2 Heuristic and Approximation Algorithms

For practical applications with many cities, finding an exact solution is often infeasible. Heuristic algorithms aim to find good, near-optimal solutions in a reasonable amount of time.

*   **Nearest Neighbor Heuristic:** Starts at a city, then repeatedly visits the nearest unvisited city until all cities are visited. Returns to the starting city.
    *   **Pros:** Simple, fast.
    *   **Cons:** Can produce very poor results.
*   **2-Opt Heuristic:** Starts with a tour (e.g., from Nearest Neighbor) and iteratively improves it by reversing a segment of the tour. If reversing a segment reduces the total length, the change is accepted. This is repeated until no further improvements can be made.
    *   **Pros:** Generally provides much better solutions than Nearest Neighbor.
    *   **Cons:** Can get stuck in local optima.
*   **3-Opt, k-Opt:** Generalizations of 2-Opt, involving reversing or swapping multiple segments. More complex but potentially yield better solutions.
*   **Simulated Annealing:** A metaheuristic inspired by annealing in metallurgy. It explores the solution space by accepting not only improving moves but also occasional non-improving moves with a certain probability, which decreases over time. This helps escape local optima.
*   **Genetic Algorithms:** Another metaheuristic inspired by natural selection. It maintains a population of potential solutions (tours) and evolves them over generations using operations like crossover (combining parts of two tours) and mutation (random changes).
*   **Ant Colony Optimization (ACO):** Inspired by the foraging behavior of ants. Artificial ants deposit "pheromone" on paths they traverse. Paths with higher pheromone concentration are more likely to be chosen, leading to convergence on good tours.

### 5. Dynamic Programming Approach to TSP (Held-Karp)

While the prompt focuses on ILP formulation for TSP, it's important to note the connection to Dynamic Programming mentioned in the module. The Held-Karp algorithm is a classic DP solution for TSP.

**Principle of Optimality:** An optimal path from city $i$ to city $j$ passing through a subset of cities $S$ must contain an optimal path from $i$ to some intermediate city $k \in S$, and then an optimal path from $k$ to $j$ through the remaining cities in $S \setminus \{k\}$.

**DP State:** $C(S, i)$ = the minimum cost of a path that starts at city 1, visits every city in the set $S$ exactly once, and ends at city $i \in S$.

**Base Case:**
$C(\{1\}, 1) = 0$

**Recursive Relation:**
For $S \subseteq \{1, 2, \dots, n\}$ and $|S| \ge 2$:
$$ C(S, i) = \min_{j \in S, j \neq i} \{ C(S \setminus \{i\}, j) + c_{ji} \} $$
where $c_{ji}$ is the cost from city $j$ to city $i$.

**Final Solution:**
The minimum cost of the tour is:
$$ \min_{i \in \{2, \dots, n\}} \{ C(\{1, 2, \dots, n\}, i) + c_{i1} \} $$

**Complexity:** $O(n^2 2^n)$ time and $O(n 2^n)$ space. This is much better than $O(n!)$ brute force, but still exponential.

### 6. Applications in Civil Engineering

The TSP, or variations of it, has several applications in Civil Engineering:

*   **Logistics and Transportation Planning:**
    *   **Vehicle Routing:** Designing optimal routes for garbage trucks, delivery vans, construction material delivery, etc., to minimize travel time and fuel consumption.
    *   **Public Transportation:** Planning bus routes or train schedules to efficiently serve multiple stops.
*   **Construction Site Management:**
    *   **Equipment Movement:** Optimizing the movement of heavy machinery on a large construction site to minimize travel time between tasks.
    *   **Inspection Tours:** Planning efficient routes for inspectors to visit various construction sites or different points of interest on a large infrastructure project (e.g., bridges, tunnels).
*   **Network Design:**
    *   **Utility Maintenance:** Planning routes for maintenance crews to service gas pipelines, water networks, or power lines, visiting each node efficiently.
    *   **Telecommunications:** Laying cables or fiber optic lines to connect various points in a network with minimal cable length.
*   **Urban Planning:**
    *   **Snowplow/Street Sweeping Routes:** Optimizing routes for municipal services.
    *   **Emergency Services:** Planning response routes for ambulances or fire trucks.

### 7. Key Points to Remember

*   **TSP is NP-hard:** Exact solutions become computationally infeasible for large numbers of cities.
*   **ILP Formulation:** Requires binary variables and constraints for entering/leaving cities, plus subtour elimination constraints.
*   **Subtour Elimination:** Crucial for ensuring a single, valid tour. MTZ and DFJ are common formulations.
*   **Heuristics are essential for practical large-scale problems:** Nearest Neighbor, 2-Opt, Simulated Annealing, Genetic Algorithms provide good, but not necessarily optimal, solutions.
*   **Dynamic Programming (Held-Karp):** Offers an exact solution with exponential complexity, useful for moderate-sized problems.
*   Civil engineers encounter TSP in logistics, construction site management, and network design problems.

### 8. Practice Questions

**Question 1:**
Consider a TSP with 4 cities (1, 2, 3, 4) and the following distance matrix:

| From \ To | 1 | 2 | 3 | 4 |
| :-------- | :-: | :-: | :-: | :-: |
| **1**     | - | 2 | 3 | 4 |
| **2**     | 2 | - | 1 | 5 |
| **3**     | 3 | 1 | - | 2 |
| **4**     | 4 | 5 | 2 | - |

a) Write down the objective function for this TSP.
b) Write down the constraints to ensure each city is entered exactly once.
c) List all possible valid tours starting and ending at city 1 and calculate their total costs. Which tour is the optimal one?
d) Briefly explain why subtour elimination constraints are necessary in the ILP formulation.

**Question 2:**
What is the primary challenge in solving the Travelling Salesman Problem for a large number of cities? Name two types of algorithms used to address this challenge.

**Question 3:**
If you are designing a route for a waste collection vehicle visiting 50 houses, would you use an exact algorithm or a heuristic algorithm? Justify your answer.

### 9. Answers

**Answer 1:**
Let $x_{ij} = 1$ if the salesman travels from city $i$ to city $j$, and 0 otherwise. $n=4$.

a) **Objective Function:**
   $$ \text{Minimize } Z = 2x_{12} + 3x_{13} + 4x_{14} + 2x_{21} + 1x_{23} + 5x_{24} + 3x_{31} + 1x_{32} + 2x_{34} + 4x_{41} + 5x_{42} + 2x_{43} $$

b) **Constraints for entering each city:**
   *   City 1: $x_{21} + x_{31} + x_{41} = 1$
   *   City 2: $x_{12} + x_{32} + x_{42} = 1$
   *   City 3: $x_{13} + x_{23} + x_{43} = 1$
   *   City 4: $x_{14} + x_{24} + x_{34} = 1$

c) **Possible Valid Tours (starting and ending at 1):**
    We need to visit 2, 3, and 4 in some order.
    *   1 -> 2 -> 3 -> 4 -> 1: $x_{12}=1, x_{23}=1, x_{34}=1, x_{41}=1$. Cost = $2 + 1 + 2 + 4 = 9$.
    *   1 -> 2 -> 4 -> 3 -> 1: $x_{12}=1, x_{24}=1, x_{43}=1, x_{31}=1$. Cost = $2 + 5 + 2 + 3 = 12$.
    *   1 -> 3 -> 2 -> 4 -> 1: $x_{13}=1, x_{32}=1, x_{24}=1, x_{41}=1$. Cost = $3 + 1 + 5 + 4 = 13$.
    *   1 -> 3 -> 4 -> 2 -> 1: $x_{13}=1, x_{34}=1, x_{42}=1, x_{21}=1$. Cost = $3 + 2 + 5 + 2 = 12$.
    *   1 -> 4 -> 2 -> 3 -> 1: $x_{14}=1, x_{42}=1, x_{23}=1, x_{31}=1$. Cost = $4 + 5 + 1 + 3 = 13$.
    *   1 -> 4 -> 3 -> 2 -> 1: $x_{14}=1, x_{43}=1, x_{32}=1, x_{21}=1$. Cost = $4 + 2 + 1 + 2 = 9$.

    **Optimal Tours:** 1 -> 2 -> 3 -> 4 -> 1 and 1 -> 4 -> 3 -> 2 -> 1, both with a total cost of 9.

d) **Necessity of Subtour Elimination Constraints:**
   Without these constraints, the ILP solver might find a solution where multiple smaller, disconnected tours are formed (e.g., 1 -> 2 -> 1 and 3 -> 4 -> 3), which would satisfy the "enter each city once" and "leave each city once" constraints individually for each city, but do not form a single, complete tour visiting all cities.

**Answer 2:**
The primary challenge is that the TSP is **NP-hard**. This means that as the number of cities increases, the computational time required to find the guaranteed optimal solution grows exponentially, quickly becoming infeasible.

Two types of algorithms used to address this challenge are:
1.  **Heuristic Algorithms** (e.g., Nearest Neighbor, 2-Opt, Simulated Annealing, Genetic Algorithms).
2.  **Exact Algorithms for Smaller Instances** or using specialized techniques like **Branch and Bound** or **Cutting Plane Methods** with ILP solvers.

**Answer 3:**
For a waste collection vehicle visiting 50 houses, you would primarily use a **heuristic algorithm**.

**Justification:**
*   **Scale:** 50 cities (houses) is a moderately large number for TSP. Exact algorithms, even those more efficient than brute force (like Held-Karp), have exponential complexity ($O(n^2 2^n)$) and would likely take an unacceptably long time to compute.
*   **Practicality:** Heuristics aim to find "good enough" or near-optimal solutions quickly. For route optimization in daily operations like waste collection, a slightly suboptimal route that is found in seconds or minutes is often more valuable than an optimal route that takes hours or days to compute.
*   **Flexibility:** Heuristics can often be adapted to incorporate additional constraints or real-world factors more easily than strict ILP formulations.
