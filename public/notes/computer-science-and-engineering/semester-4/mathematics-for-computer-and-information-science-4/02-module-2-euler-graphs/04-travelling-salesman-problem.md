---
title: "Travelling Salesman Problem"
subject: "MATHEMATICS FOR COMPUTER AND INFORMATION SCIENCE-4"
module: "Module 2: Euler graphs"
branch: "Computer Science and Engineering"
semester: 4
topicId: "684162750fc9aa1fdbc8af2a"
status: "completed"
scrapedAt: "2026-05-20T16:13:29.416Z"
---
## Mathematics for Computer and Information Science-4
## Module 2: Euler Graphs
## Topic: Travelling Salesman Problem (TSP)

**Learning Outcomes:**

*   Understand the Travelling Salesman Problem (TSP) and its applications.
*   Formulate a TSP mathematically.
*   Distinguish between optimal and approximate solutions.
*   Learn and apply different algorithms (brute-force, nearest neighbor, and optimization algorithms like 2-opt) for solving the TSP.
*   Evaluate the efficiency and limitations of each algorithm.
*   Understand the complexity (NP-hardness) of the TSP.

---

### 1. Introduction to the Travelling Salesman Problem (TSP)

*   **Definition:** The Travelling Salesman Problem (TSP) is a classic combinatorial optimization problem where, given a list of cities and the distances between each pair of cities, the task is to find the shortest possible route that visits each city exactly once and returns to the origin city.

*   **Real-world applications:**
    *   **Logistics and Transportation:** Route planning for delivery trucks, airline scheduling.
    *   **Manufacturing:** Optimizing the path of a robot arm in a factory.
    *   **DNA sequencing:** Reconstructing the order of DNA fragments.
    *   **VLSI design:** Optimizing the path of a laser beam to etch circuits on a silicon wafer.

*   **Key Concepts:**
    *   **City:** A location to be visited.
    *   **Distance/Cost:** The cost (distance, time, money) to travel between two cities.
    *   **Tour/Cycle:** A path that visits each city exactly once and returns to the starting city.
    *   **Objective:** To minimize the total distance/cost of the tour.

### 2. Mathematical Formulation of the TSP

*   **Given:**
    *   A set of `n` cities: V = {1, 2, ..., n}
    *   A cost matrix `C = (c_{ij})`, where `c_{ij}` represents the cost (distance) of travelling from city `i` to city `j`.

*   **Decision Variable:**
    *   `x_{ij} = 1` if the tour goes directly from city `i` to city `j`, and `0` otherwise.

*   **Objective Function (Minimize):**
    *   Minimize:  ∑∑  `c_{ij} * x_{ij}`  (Sum over all i and j)

*   **Constraints:**
    *   **Each city must be entered once:**  ∑  `x_{ij} = 1` for all `j` (Sum over all i).
    *   **Each city must be exited once:** ∑  `x_{ij} = 1` for all `i` (Sum over all j).
    *   **Subtour Elimination:**  To prevent solutions consisting of disconnected cycles, we need additional constraints. One common formulation for subtour elimination is:
        *   ∑∑  `x_{ij} <= |S| - 1`  for all subsets `S` of V, where 2 <= |S| <= n-2 and i, j belong to S. (This constraint is applied for all possible subsets of cities).
        *   Alternatively, a more compact (but less intuitive) Miller-Tucker-Zemlin (MTZ) formulation exists that utilizes auxiliary variables u_i:
            *   `u_i - u_j + n*x_{ij} <= n - 1` for 2 <= i != j <= n, where u_i are arbitrary real numbers and 2 <= i <= n.

*   **Symmetry:**
    *   **Symmetric TSP:** `c_{ij} = c_{ji` (distance from city i to j is the same as from j to i).
    *   **Asymmetric TSP:** `c_{ij} != c_{ji` (distance may differ).

### 3. Optimal vs. Approximate Solutions

*   **Optimal Solution:**  The tour with the absolute minimum total cost. Finding an optimal solution can be computationally expensive, especially for large problem instances.

*   **Approximate Solution (Heuristic):** A tour that is "good enough" but not necessarily the absolute best. These are easier to find than optimal solutions, particularly for large problems.  The approximation ratio indicates how close the heuristic solution is to the optimal solution.

### 4. Algorithms for Solving the TSP

*   **4.1 Brute-Force (Exhaustive Search)**

    *   **Idea:** Generate all possible tours, calculate the cost of each tour, and select the tour with the minimum cost.

    *   **Steps:**
        1.  List all possible permutations of cities.
        2.  Calculate the total distance for each permutation (tour).
        3.  Choose the permutation with the shortest distance.

    *   **Example:** For 4 cities (A, B, C, D), start at A, the possible tours are:
        *   A -> B -> C -> D -> A
        *   A -> B -> D -> C -> A
        *   A -> C -> B -> D -> A
        *   A -> C -> D -> B -> A
        *   A -> D -> B -> C -> A
        *   A -> D -> C -> B -> A
        Calculate the total distance for each and choose the minimum.

    *   **Limitations:**  Computationally infeasible for larger problems.  The time complexity is O(n!), where n is the number of cities.  This becomes impractical very quickly.

*   **4.2 Nearest Neighbor Algorithm**

    *   **Idea:** Start at a random city and repeatedly visit the nearest unvisited city until all cities are visited, then return to the starting city.

    *   **Steps:**
        1.  Choose a starting city.
        2.  Visit the nearest unvisited city.
        3.  Repeat step 2 until all cities have been visited.
        4.  Return to the starting city.

    *   **Example:**  Cities: A, B, C, D. Distances:
        *   AB = 10, AC = 15, AD = 20
        *   BA = 10, BC = 35, BD = 25
        *   CA = 15, CB = 35, CD = 30
        *   DA = 20, DB = 25, DC = 30
        Starting from A:
        1. Nearest to A is B (distance 10).  Tour: A -> B
        2. Nearest to B (unvisited) is D (distance 25). Tour: A -> B -> D
        3. Last unvisited city is C. Tour: A -> B -> D -> C
        4. Return to A: A -> B -> D -> C -> A.  Total distance: 10 + 25 + 30 + 15 = 80

    *   **Limitations:**  Simple to implement, but the solution is often far from optimal. Can get trapped in local optima. Time complexity is O(n^2).

*   **4.3 2-Opt Algorithm (Optimization Algorithm)**

    *   **Idea:** Starts with an initial tour and iteratively improves it by swapping pairs of edges in the tour until no further improvement is possible.

    *   **Steps:**
        1.  Start with an initial tour (e.g., obtained by Nearest Neighbor).
        2.  Select two edges in the tour, say (A, B) and (C, D).
        3.  Replace these edges with (A, C) and (B, D).  This reverses the path between B and C.
        4.  If the new tour (after swapping) has a lower cost, keep the change. Otherwise, revert to the previous tour.
        5.  Repeat steps 2-4 until no more improvements can be made.

    *   **Example:**
        * Initial tour: A -> B -> C -> D -> A with distances AB=10, BC=15, CD=20, DA=25. Total cost: 70
        * Let's swap edges (A,B) and (C,D) with (A,C) and (B,D).
        * New tour: A -> C -> B -> D -> A with distances AC=12, CB=15, BD=22, DA=25. Total cost: 74 (worse, so undo)
        * Let's swap edges (B,C) and (D,A) with (B,A) and (D,C).
        * New tour: A -> D -> C -> B -> A. Total distance needs to be calculated and compared. If it's better than 70, we keep it.

    *   **Limitations:**  The algorithm gets stuck at local optima. Its time complexity depends on the initial tour and how many iterations it takes to reach a local optimum, but it is generally better than brute-force but worse than nearest neighbor for large datasets. It's typically more effective at improving a pre-existing tour.

### 5. Evaluation of Algorithm Efficiency and Limitations

| Algorithm       | Complexity | Solution Quality | Advantages                           | Disadvantages                                       |
| --------------- | ---------- | --------------- | ------------------------------------- | --------------------------------------------------- |
| Brute-Force     | O(n!)      | Optimal         | Guarantees the best solution          | Computationally infeasible for large problem sizes |
| Nearest Neighbor | O(n^2)     | Approximate     | Simple and fast to implement         | Solution often far from optimal                     |
| 2-Opt           | Varies     | Approximate     | Improves existing tours significantly | Can get stuck in local optima                      |

### 6. Complexity of the TSP (NP-hardness)

*   **NP-Hardness:**  The TSP is an NP-hard problem. This means that there is no known polynomial-time algorithm that can solve it optimally.  Finding the optimal solution becomes increasingly difficult as the number of cities grows.

*   **Implications:**
    *   For large problem instances, it is often necessary to use approximation algorithms (heuristics) to find "good enough" solutions in a reasonable amount of time.
    *   Research continues on developing better and more efficient heuristics and approximation algorithms for the TSP.

---

### Practice Questions/Exercises:

1.  **Describe the Travelling Salesman Problem in your own words. Give a real-world example.**
    *   Answer: The TSP is the problem of finding the shortest possible route that visits each city exactly once and returns to the origin city. A real-world example is optimizing the route of a delivery truck to minimize travel distance.

2.  **Formulate a TSP mathematically for 5 cities using the concepts explained in section 2.**
    *   Answer:  V = {1, 2, 3, 4, 5}. Decision variable: x_{ij} = 1 if travel from city i to city j, 0 otherwise. Objective function: Minimize ∑∑ c_{ij} * x_{ij}. Constraints: ∑ x_{ij} = 1 for all j; ∑ x_{ij} = 1 for all i; Subtour elimination constraints (using the subset approach) for subsets S of size 2 and 3 (shown below).
    *   Example of subtour elimination for |S|=2, S={1,2}: `x_{12} + x_{21} <= 1`.  Similar constraints are needed for other pairs of cities.
    *   Example of subtour elimination for |S|=3, S={1,2,3}: `x_{12} + x_{13} + x_{21} + x_{23} + x_{31} + x_{32} <= 2` and so on for all city triplets.

3.  **Explain the difference between an optimal and an approximate solution to the TSP.**
    *   Answer: An optimal solution is the tour with the absolute minimum cost, while an approximate solution is a "good enough" solution that is not necessarily the absolute best.

4.  **Apply the Nearest Neighbor algorithm to the following TSP instance, starting from city A.  Cities: A, B, C, D. Distances: AB=5, AC=10, AD=15, BA=5, BC=12, BD=8, CA=10, CB=12, CD=7, DA=15, DB=8, DC=7.**
    *   Answer:
        1. Start at A.
        2. Nearest to A is B (distance 5). Tour: A -> B
        3. Nearest to B (unvisited) is D (distance 8). Tour: A -> B -> D
        4. Last unvisited city is C. Tour: A -> B -> D -> C
        5. Return to A: A -> B -> D -> C -> A. Total distance: 5 + 8 + 7 + 10 = 30

5.  **What are the advantages and disadvantages of the Brute-Force algorithm for solving the TSP?**
    *   Answer: The advantage is that it guarantees the optimal solution. The disadvantage is its O(n!) time complexity, making it infeasible for large problem instances.

6. **Explain why the TSP is considered an NP-hard problem.**
    * Answer: Because no known polynomial-time algorithm can solve it optimally.  The time required to find the optimal solution grows exponentially with the number of cities.

---

### Important Points to Remember:

*   The TSP is a fundamental problem in computer science and operations research with numerous practical applications.
*   Finding the optimal solution to the TSP is computationally challenging (NP-hard).
*   Various algorithms exist to find approximate solutions, each with its own trade-offs between solution quality and computational cost.
*   Understanding the limitations of each algorithm is crucial for choosing the most appropriate algorithm for a given problem instance.
*   The choice of algorithm often depends on the size of the problem and the desired level of accuracy. For smaller problems, brute-force or dynamic programming approaches might be feasible. For larger problems, heuristic methods like nearest neighbor, 2-opt (or more sophisticated methods like genetic algorithms, simulated annealing, etc.) become necessary.
