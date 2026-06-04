---
title: "Random Walk Model"
subject: "MATHEMATICS FOR COMPUTER AND INFORMATION SCIENCE-3"
module: "Module 4: Markov Chains"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ab60"
status: "completed"
scrapedAt: "2026-05-20T16:26:12.102Z"
---
## Mathematics for Computer and Information Science - 3
## Module 4: Markov Chains - Topic: Random Walk Model

**Learning Outcomes:**

*   Understand the concept of a Random Walk.
*   Define and identify states in a Random Walk model.
*   Construct the transition matrix for a Random Walk.
*   Calculate probabilities of reaching a specific state after *n* steps.
*   Analyze absorbing Random Walks and calculate absorption probabilities.
*   Calculate the mean time to absorption in absorbing Random Walks.
*   Apply Random Walk models to real-world problems.

---

### 1. Introduction to Random Walk Model

*   **Definition:** A Random Walk is a stochastic process that describes a path consisting of a succession of random steps on some mathematical space, such as the integers.  Each step is taken at random, and the direction of each step is independent of all previous steps.  It's a special type of Markov Chain.
*   **Analogy:** Imagine a drunk person staggering randomly in a street. Each step they take is independent of their previous steps. This erratic movement is a good analogy for a Random Walk.
*   **Relevance to CIS:** Random walks can be used to model various phenomena in computer science, including:
    *   PageRank algorithm (random surfer model)
    *   Diffusion processes in networks
    *   Monte Carlo methods for simulations
    *   Search algorithms

### 2. States in a Random Walk Model

*   **Definition of State:** A state represents a possible position or location in the Random Walk.  In the simplest Random Walk on the integers, the states are the integers themselves.
*   **One-Dimensional Random Walk:**  The most common example is a Random Walk on the integers (..., -2, -1, 0, 1, 2, ...).  Here, each integer represents a state.  The walker starts at a specific state (often 0) and moves either one step to the right (increment by 1) or one step to the left (decrement by 1) based on a certain probability.
*   **Multi-Dimensional Random Walk:** Random walks can also exist in higher dimensions (2D, 3D, etc.). In a 2D random walk on a grid, the states would be coordinate pairs (x, y) where x and y are integers.  The walker could move up, down, left, or right with certain probabilities.
*   **Example:** A random walk on the set {1, 2, 3, 4, 5} where the walker moves one step to the left or right with equal probability, except at the boundaries (1 and 5).  Here, the states are the numbers 1, 2, 3, 4, and 5.

### 3. Transition Matrix for a Random Walk

*   **Definition of Transition Matrix:**  A transition matrix (P) describes the probabilities of moving between different states in one step.
*   **Properties of the Transition Matrix:**
    *   It's a square matrix where the size is equal to the number of states.
    *   Each element P<sub>ij</sub> represents the probability of transitioning from state *i* to state *j* in one step.
    *   All elements are non-negative (0 ≤ P<sub>ij</sub> ≤ 1).
    *   The sum of the probabilities in each row is equal to 1 (∑<sub>j</sub> P<sub>ij</sub> = 1).
*   **Example: Simple Symmetric Random Walk on {1, 2, 3, 4, 5} with reflecting boundaries:** This means if you are at state 1, you go to state 2 with probability 1. If you are at state 5, you go to state 4 with probability 1. For the other states, you go left or right with equal probability.

    The transition matrix P would be:

    ```
      |   1    2    3    4    5  |
    --|-----------------------------
    1 |   0    1    0    0    0  |
    2 | 0.5    0   0.5   0    0  |
    3 |   0  0.5    0   0.5   0  |
    4 |   0    0   0.5    0  0.5 |
    5 |   0    0    0    1    0  |
    ```

    *   P<sub>12</sub> = 1 (Probability of moving from state 1 to state 2 is 1).
    *   P<sub>21</sub> = 0.5 (Probability of moving from state 2 to state 1 is 0.5).
    *   P<sub>23</sub> = 0.5 (Probability of moving from state 2 to state 3 is 0.5).
    *   P<sub>33</sub> = 0 (Probability of staying at state 3 is 0).

### 4. Calculating Probabilities after *n* Steps

*   **Using the Transition Matrix:** The probability of being in state *j* after *n* steps, starting from state *i*, is given by the element (i, j) of the matrix P<sup>n</sup>, where P<sup>n</sup> is the transition matrix raised to the power of *n*.
*   **Calculation:** To find P<sup>n</sup>, you need to multiply the transition matrix P by itself *n* times (P * P * ... * P).
*   **Initial State Vector:** You might also be given an initial state vector **v** which represents the probabilities of starting at each state.  To find the probabilities of being in each state after *n* steps, multiply the initial state vector by P<sup>n</sup>:  **v** * P<sup>n</sup>.
*   **Example:**  Consider the simple symmetric Random Walk on {1, 2, 3} with reflecting boundaries. Suppose P is given as
    ```
    |   1    2    3  |
    --|-----------------
    1 |   0    1    0  |
    2 | 0.5    0   0.5 |
    3 |   0    1    0  |
    ```
    Let's say we start at state 2 with probability 1 (initial state vector **v** = [0, 1, 0]).  What are the probabilities of being in each state after 2 steps?

    1.  Calculate P<sup>2</sup>: P * P =
        ```
        | 0.5 0 0.5 |
        | 0 1 0 |
        | 0.5 0 0.5 |
        ```
    2. Multiply the initial state vector by P<sup>2</sup>: [0, 1, 0] * P<sup>2</sup> = [0, 1, 0]

    Therefore, after 2 steps, the probabilities of being in states 1, 2, and 3 are 0, 1, and 0 respectively.

### 5. Absorbing Random Walks

*   **Definition of Absorbing State:** An absorbing state is a state that, once entered, cannot be left.  That is, the probability of transitioning from an absorbing state back to itself is 1.
*   **Absorbing Random Walk:** A Random Walk with at least one absorbing state is called an absorbing Random Walk.  The walker will eventually be absorbed (trapped) in one of the absorbing states.
*   **Importance:**  Absorbing Random Walks are used to model scenarios where a process eventually reaches a terminal state.
*   **Standard Form of Transition Matrix:** When dealing with absorbing Random Walks, it's useful to arrange the transition matrix in a standard form:

    ```
    P =  | I  R |
         | 0  Q |
    ```

    *   **I:**  Identity matrix representing the transition probabilities between absorbing states (all entries are 0 except for the diagonal which is all 1s, meaning you stay in that state).
    *   **R:**  Matrix representing the transition probabilities from non-absorbing states to absorbing states.
    *   **0:**  Zero matrix representing the transition probabilities from absorbing states to non-absorbing states (which is impossible).
    *   **Q:**  Matrix representing the transition probabilities between non-absorbing states.
*   **Absorption Probabilities:** The fundamental matrix **N** is defined as **N = (I - Q)<sup>-1</sup>**, where I is the identity matrix of the same size as Q. The elements of the matrix **B = N * R**  give the probabilities of being absorbed into a specific absorbing state, starting from a specific non-absorbing state. B<sub>ij</sub> is the probability of being absorbed in state j, starting in state i.
*   **Example:**  Consider a Random Walk on {1, 2, 3, 4} where states 1 and 4 are absorbing.  Suppose the transition matrix is:

    ```
      |   1    2    3    4  |
    --|-----------------------
    1 |   1    0    0    0  |
    2 | 0.3    0   0.7    0  |
    3 |   0  0.6    0  0.4 |
    4 |   0    0    0    1  |
    ```

    The standard form is:
    ```
    P =  | 1  0  0  0 |
         | 0  1  0  0 |
         | 0.3 0  0 0.7 |
         | 0  0.6 0 0.4 |
    ```
    Rearranging rows and columns (1,4,2,3)

     ```
    P =  | 1  0  0  0 |
         | 0  1  0  0 |
         | 0.3 0.0  0  0.7 |
         | 0.0 0.4 0.6  0 |
    ```
    Then

    ```
    I = |1 0|
    R = |0.3 0 |
        |0   0.4|

    Q = |0 0.7|
        |0.6 0 |
    ```
    **Calculate N = (I-Q)^-1**

    ```
    I - Q =  |1 -0   0 -0.7 | =  |1   -0.7 |
             |1 -0.6 1 - 0 |    |-0.6  1 |
    ```

    ```
    N = (I-Q)^-1 =  |1.538  1.077 |
                     |0.923  1.538 |
    ```

    **Calculate B = N * R**

    ```
    B = |1.538  1.077 | x |0.3 0 | = |0.461 0.4308 |
        |0.923  1.538 |   |0   0.4|   |0.000 0.6152 |
    ```

    B (2,1) i.e. from state 2 to the absorbing state 1 is 0.461
    B (3,1) i.e. from state 3 to the absorbing state 1 is 0

    B (2,4) i.e. from state 2 to the absorbing state 4 is 0.4308
    B (3,4) i.e. from state 3 to the absorbing state 4 is 0.6152

*   **Interpretation:** If we start at state 2, the probability of being absorbed into state 1 is 0.461, and the probability of being absorbed into state 4 is 0.4308. If we start at state 3, the probability of being absorbed into state 1 is 0, and the probability of being absorbed into state 4 is 0.6152.

### 6. Mean Time to Absorption

*   **Definition:** The mean time to absorption is the average number of steps it takes for the Random Walk to reach an absorbing state, starting from a non-absorbing state.
*   **Calculation:** The mean time to absorption, starting from state *i*, is the sum of the *i*-th row of the fundamental matrix **N = (I - Q)<sup>-1</sup>**.
*   **Example (Continuing from the previous absorbing Random Walk):**  The fundamental matrix N was calculated as:

    ```
    N =  |1.538  1.077 |
         |0.923  1.538 |
    ```
    *   Mean time to absorption starting from state 2: 1.538 + 1.077 = 2.615 steps
    *   Mean time to absorption starting from state 3: 0.923 + 1.538 = 2.461 steps

    This means, on average, it takes approximately 2.615 steps to be absorbed starting from state 2, and 2.461 steps starting from state 3.

### 7. Applications of Random Walk Models

*   **PageRank Algorithm:** Google's PageRank algorithm uses a Random Walk model to determine the importance of web pages.  A "random surfer" clicks on links randomly, and the probability of landing on a particular page represents its PageRank.
*   **Diffusion Processes:** Random Walks can model the diffusion of particles in a fluid or gas.
*   **Gambler's Ruin Problem:** A classic problem involving a gambler with a certain amount of money who plays a game repeatedly. The gambler either wins or loses a fixed amount each time. The game continues until the gambler either runs out of money (ruin) or reaches a target amount. This can be modeled as an absorbing Random Walk.
*   **Financial Modeling:** Random Walks can be used to model stock prices, although more sophisticated models are often used in practice.
*   **Image Segmentation:** Random walker algorithm is used to segment images based on probabilities of reaching certain seed points.

### 8. Practice Questions & Exercises

1.  **Question:**  Consider a simple symmetric Random Walk on {1, 2, 3, 4, 5}. Write down the transition matrix if the random walk has reflecting boundaries.

    **Answer:**

    ```
      |   1    2    3    4    5  |
    --|-----------------------------
    1 |   0    1    0    0    0  |
    2 | 0.5    0   0.5   0    0  |
    3 |   0  0.5    0   0.5   0  |
    4 |   0    0   0.5    0  0.5 |
    5 |   0    0    0    1    0  |
    ```

2.  **Question:** For the Random Walk on {1, 2, 3}, state 1 is absorbing.  The transition matrix is:

    ```
    | 1 0 0 |
    | 0.4 0.2 0.4 |
    | 0.5 0.3 0.2 |
    ```

    What is the probability of being absorbed into state 1, starting from state 2?

    **Answer:**

    ```
    Q = |0.2 0.4|
        |0.3 0.2|
    R = |0.4 0|
        |0.5 0|
    I-Q = |1-0.2  0-0.4| = |0.8  -0.4|
          |0-0.3  1-0.2|   |-0.3   0.8|

    N = (I-Q)^-1 = |1.428 0.714|
                    |0.535 1.428|

    B = N * R =  |1.428 0.714|  x |0.4 0|  = |0.571  0 |
                 |0.535 1.428|    |0.5 0|    |0.267  0|
    ```

    The probability of being absorbed into state 1, starting from state 2 is 0.571.

3.  **Question:** For the same Random Walk as above, what is the mean time to absorption, starting from state 3?

    **Answer:** From previous question
    ```
      N = |1.428 0.714|
          |0.535 1.428|
    ```
    The mean time to absorption starting from state 3 = 0.535 + 1.428 = 1.963.

4.  **Question:** Explain how the PageRank algorithm uses a Random Walk model.

    **Answer:** The PageRank algorithm models a "random surfer" navigating the web. The surfer starts at a random page and then randomly clicks on links on that page. This process continues indefinitely.  The PageRank of a page is the probability that the random surfer will be on that page after a long period. The web pages are the states, and the links between them define the transition probabilities.  Pages with more incoming links, or links from high-PageRank pages, are more likely to be visited by the random surfer, resulting in a higher PageRank.

### 9. Important Points to Remember

*   Random Walks are a fundamental stochastic process with applications in various fields.
*   The transition matrix is crucial for understanding and analyzing Random Walks.
*   Absorbing Random Walks model processes that eventually reach a terminal state.
*   The fundamental matrix allows you to calculate absorption probabilities and mean time to absorption.
*   Understand the link between Random Walks and Markov Chains: a random walk is a specific instance of a Markov Chain.  The "Markov" property is that the future state depends only on the current state, not on the entire past history.
*   Pay close attention to boundary conditions (reflecting or absorbing) when constructing the transition matrix.
