---
title: "Markov Chains and Random Walks - Introduction to Markov chains, Random walks on graphs, Applications in randomized algorithms."
subject: "RANDOMIZED ALGORITHMS"
module: "Module 2: Randomized Graph Algorithms "
branch: "Computer Science and Engineering"
semester: 6
topicId: "684162780fc9aa1fdbc8bd5b"
status: "completed"
scrapedAt: "2026-05-20T16:57:08.817Z"
---
## Randomized Algorithms: Module 2 - Randomized Graph Algorithms

### Topic: Markov Chains and Random Walks

**Description:** This module introduces Markov chains and random walks, focusing on their properties, behavior on graphs, and applications in randomized algorithms.

**Learning Outcomes:**

*   Understand the definition and key properties of Markov chains.
*   Describe and analyze random walks on graphs.
*   Apply Markov chains and random walks to solve problems in randomized algorithms.
*   Understand concepts such as stationary distribution, mixing time, and hitting time.

---

**1. Introduction to Markov Chains**

*   **Definition:** A Markov chain is a stochastic process that transitions from one state to another. The probability of transitioning to any particular state depends *only* on the current state and not on the sequence of events that preceded it (Memoryless Property or Markov Property).

*   **Key Concepts and Definitions:**

    *   **State Space (S):**  The set of all possible states the Markov chain can be in. Can be finite or infinite.
    *   **Transition Matrix (P):**  A matrix where each element `P(i, j)` represents the probability of transitioning from state `i` to state `j` in one step.
        *   `P(i, j) = Pr(X_{t+1} = j | X_t = i)`
        *   Rows sum to 1 (since the probabilities of transitioning from a state must sum to 1).  `∑_{j ∈ S} P(i, j) = 1` for all `i`.
    *   **Initial Distribution (π₀):**  A probability distribution over the state space, representing the probability of starting in each state at time t=0.
    *   **n-step Transition Probability (Pⁿ(i, j)):** The probability of transitioning from state `i` to state `j` in *n* steps.  Can be calculated as the (i,j) element of the matrix `Pⁿ`.
    *   **Distribution at Time t (πt):** The probability distribution over the state space at time *t*. It can be calculated as `πt = π₀ * P^t`.
    *   **Stationary Distribution (π):**  A probability distribution π over the state space such that `π = π * P`. In other words, if the chain starts in the stationary distribution, it will remain in that distribution at all future times. Not all Markov chains have stationary distributions, and some may have more than one.
    *   **Irreducibility:** A Markov chain is irreducible if it is possible to reach any state from any other state in a finite number of steps. For all states `i, j ∈ S`, there exists `n > 0` such that `Pⁿ(i, j) > 0`.
    *   **Periodicity:**  The period of a state `i` is the greatest common divisor of the lengths of all cycles starting and ending at `i`. A state is aperiodic if its period is 1. A Markov chain is aperiodic if all its states are aperiodic.
    *   **Ergodicity:**  A Markov chain is ergodic if it is both irreducible and aperiodic. Ergodic Markov chains have a unique stationary distribution.
    *   **Recurrence:** A state `i` is recurrent if, starting from `i`, the chain will return to `i` with probability 1. Otherwise, it is transient.

*   **Example:**  A simple weather model.

    *   State space: `S = {Sunny, Rainy}`
    *   Transition Matrix:

        ```
              Sunny  Rainy
        Sunny  [0.7   0.3]
        Rainy  [0.4   0.6]
        ```

        This means that if it's sunny today, there's a 70% chance it will be sunny tomorrow and a 30% chance it will be rainy. If it's rainy today, there's a 40% chance it will be sunny tomorrow and a 60% chance it will be rainy.
    *   Example: If today is Sunny (Probability of starting in Sunny is 1.0, Rainy is 0.0. Then π₀ = [1.0 0.0]), what is the probability it is Rainy in two days?

        ```
        P² = P * P =
               Sunny   Rainy
        Sunny  [0.61   0.39]
        Rainy  [0.52   0.48]

        π₂ = π₀ * P² = [1.0 0.0] *  [0.61   0.39] = [0.61 0.39]
        [0.52   0.48]
        ```
        So the probability of Rainy is 0.39.

*   **Important Points to Remember:** Markov chains are powerful tools for modeling systems that evolve over time, where the future state depends only on the present state.

**2. Random Walks on Graphs**

*   **Definition:** A random walk on a graph is a Markov chain where the state space corresponds to the vertices of the graph. At each step, the walker moves from its current vertex to a randomly chosen neighbor.

*   **Key Concepts and Definitions:**

    *   **Graph (G = (V, E)):** A set of vertices (V) and edges (E) connecting pairs of vertices.  We'll typically consider undirected, connected graphs.
    *   **Neighbor:**  A vertex `j` is a neighbor of vertex `i` if there is an edge `(i, j)` in `E`.
    *   **Degree (d(i)):** The number of neighbors of vertex `i`.
    *   **Transition Probability:**  The probability of moving from vertex `i` to vertex `j` is `1/d(i)` if `(i, j)` is an edge, and 0 otherwise.  `P(i, j) = 1/d(i)` if `(i, j) ∈ E` and 0 otherwise.
    *   **Hitting Time (H(i, j)):** The expected number of steps to reach vertex `j` starting from vertex `i`.
    *   **Commute Time (C(i, j)):** The expected number of steps to reach vertex `j` starting from vertex `i`, and then return to vertex `i` starting from vertex `j`.  `C(i, j) = H(i, j) + H(j, i)`
    *   **Cover Time (C(G)):** The expected number of steps for a random walk to visit all vertices in the graph.
    *   **Stationary Distribution (π):** For an undirected, connected, and aperiodic graph, the stationary distribution is `π(i) = d(i) / (2 * |E|)`. The probability of being at vertex `i` in the stationary distribution is proportional to the degree of the vertex.
    *   **Mixing Time:** Roughly, the number of steps it takes for the distribution of the random walk to get close to the stationary distribution. Formal definitions of mixing time are based on the distance to the stationary distribution.

*   **Example:**  Random walk on a simple line graph with 4 vertices (1-2-3-4).

    *   The transition matrix is:

        ```
              1     2     3     4
        1    [0     1     0     0]
        2    [0.5   0     0.5   0]
        3    [0     0.5   0     0.5]
        4    [0     0     1     0]
        ```

    *   The degrees of the vertices are: d(1) = 1, d(2) = 2, d(3) = 2, d(4) = 1.

    *   The stationary distribution is: π(1) = 1/6, π(2) = 2/6, π(3) = 2/6, π(4) = 1/6.

    *   What is H(1,4)?  This would be the hitting time - on average, how many steps to go from node 1 to node 4?

*   **Important Points to Remember:**  Random walks are useful for exploring graphs and can be analyzed using Markov chain theory.

**3. Applications in Randomized Algorithms**

*   **Connectivity Testing:** Determine if a graph is connected. A simple randomized algorithm is to perform a random walk for a sufficiently long time. If the walk has visited all vertices, then the graph is connected (with high probability).
*   **2-SAT Problem:** Randomized algorithm for solving 2-SAT (Boolean satisfiability problem with clauses containing two literals).  The algorithm starts with a random assignment of variables. It picks an unsatisfied clause, randomly chooses one of the variables in the clause, and flips its value.  This can be modeled as a random walk.
*   **PageRank:** Used by search engines to rank web pages.  A random surfer follows links randomly.  The PageRank of a page is the probability that the random surfer is on that page, which can be approximated by simulating a random walk.
*   **Graph Partitioning:**  Random walks can be used to find cuts in graphs.
*   **Sampling:** Use random walks to sample vertices or edges from a graph according to a specific distribution.  For example, using the stationary distribution.

*   **Example: 2-SAT Randomized Algorithm**
    *   Given a 2-SAT formula.
    *   Start with a random assignment of variables.
    *   Repeat the following steps for a fixed number of iterations:
        *   If the formula is satisfied, return the assignment.
        *   Else, pick an arbitrary unsatisfied clause.
        *   Randomly choose one of the two variables in the clause.
        *   Flip the value of the chosen variable.
    *   If the maximum iterations are reached and the formula is still not satisfied, return "no solution found".

    *   Why does this work?
        *   The algorithm performs a random walk in the space of possible variable assignments.
        *   If a satisfying assignment exists, the algorithm will eventually find it with high probability (provided the number of iterations is large enough).
        *   The analysis of the algorithm relies on bounding the expected number of flips required to reach a satisfying assignment.

*   **Important Points to Remember:** Randomized algorithms leveraging Markov Chains/Random Walks offer efficient solutions to certain problems where deterministic approaches are computationally expensive.

**4. Mixing Time**

*   **Definition:** Intuitively, mixing time quantifies how long it takes for a random walk to "forget" its starting position and converge to the stationary distribution.  A faster mixing time indicates that the random walk explores the graph quickly.

*   **Formal Definitions:** Several ways to define mixing time, based on different notions of "distance" to the stationary distribution (e.g., total variation distance).
*   **Importance:** The mixing time is a crucial parameter for analyzing the performance of randomized algorithms that use random walks. It determines how many steps are needed to ensure that the random walk samples vertices or edges from a distribution that is close to the desired distribution (e.g., the stationary distribution).
*   **Examples:**
    *   For an *n*-vertex complete graph, the mixing time is O(1) because the random walk quickly converges to the uniform distribution.
    *   For a line graph of *n* vertices, the mixing time is O(*n*<sup>2</sup>), which is relatively slow.

**5. Practice Questions/Exercises**

1.  **Weather Model:**  Consider the weather model described earlier. If today is Rainy, what is the probability that it will be Sunny in three days?

    *   *Answer:*
    ```
                  Sunny  Rainy
            Sunny  [0.7   0.3]
            Rainy  [0.4   0.6]

            P³ = P * P * P =
                  Sunny  Rainy
            Sunny  [0.607   0.393]
            Rainy  [0.524   0.476]

            π₀ = [0.0 1.0]
            π₃ = π₀ * P³ = [0.524   0.476]

            Pr(Sunny in three days | Rainy today) = 0.524
    ```
2.  **Line Graph:** Consider a random walk on a line graph with 5 vertices (1-2-3-4-5). Write down the transition matrix.

    *   *Answer:*

        ```
              1     2     3     4     5
        1    [0     1     0     0     0]
        2    [0.5   0     0.5   0     0]
        3    [0     0.5   0     0.5   0]
        4    [0     0     0.5   0     0.5]
        5    [0     0     0     1     0]
        ```
3.  **Stationary Distribution:** For a regular graph (where all vertices have the same degree), what is the stationary distribution of a random walk?

    *   *Answer:*  Since `d(i)` is constant for all vertices in a regular graph, the stationary distribution is uniform: `π(i) = 1 / |V|`.
4.  **Hitting Time:** For the line graph (1-2-3), what is H(1,3)?
    *   *Answer:*  H(1,3) = H(1,2) + H(2,3) = 2 + 2 = 4 steps. You have to go to node 2, then node 3.  H(1,2)=2, H(2,3) = 2.
5.  **True/False:** In a Markov chain, the probability of transitioning to a future state depends only on the current state, and not on the sequence of events that led to the current state. (True or False)
    *   *Answer:* True.  This is the Markov Property.
6. **What does it mean for a state in a Markov Chain to be Recurrent?**
    * *Answer:* A state i is recurrent if, starting from i, the chain will return to i with probability 1.

**6. Summary of Important Points**

*   **Markov Property:** The core characteristic of Markov chains.
*   **Transition Matrix:**  The fundamental representation of the Markov chain dynamics.
*   **Stationary Distribution:**  The long-term behavior of the Markov chain (when it exists).
*   **Random Walks on Graphs:**  A specific type of Markov chain particularly useful in graph algorithms.
*   **Hitting Time & Commute Time:** Important measures related to graph traversal using random walks.
*   **Applications:**  Random walks and Markov chains are powerful tools for solving a variety of problems in randomized algorithms.
*   **Mixing Time:** How quickly a random walk converges to its stationary distribution.  Essential for assessing the performance of many algorithms.

These notes provide a comprehensive introduction to Markov chains and random walks, focusing on their application to randomized algorithms.  Studying these concepts thoroughly will provide a solid foundation for understanding more advanced topics in the field. Remember to practice with examples and exercises to solidify your understanding.
