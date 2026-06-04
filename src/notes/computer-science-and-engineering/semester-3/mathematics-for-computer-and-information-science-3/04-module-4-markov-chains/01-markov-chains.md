---
title: "Markov Chains"
subject: "MATHEMATICS FOR COMPUTER AND INFORMATION SCIENCE-3"
module: "Module 4: Markov Chains"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ab5f"
status: "completed"
scrapedAt: "2026-05-20T16:26:11.387Z"
---
# MATHEMATICS FOR COMPUTER AND INFORMATION SCIENCE-3
## Module 4: Markov Chains
### Topic: Markov Chains

**Learning Outcomes:**

*   Understand the basic concepts of Markov Chains and their properties.
*   Represent systems using state diagrams and transition matrices.
*   Calculate n-step transition probabilities.
*   Determine the stationary distribution of a Markov Chain.
*   Classify states of a Markov Chain (recurrent, transient, periodic, aperiodic).
*   Apply Markov Chains to model real-world scenarios.

---

**1. Introduction to Markov Chains**

*   **Definition:** A Markov Chain is a stochastic process that satisfies the Markov property (memoryless property). This means that the future state of the process depends only on the present state and not on the past states.  Formally:

    P(X<sub>n+1</sub> = j | X<sub>0</sub> = i<sub>0</sub>, X<sub>1</sub> = i<sub>1</sub>, ..., X<sub>n</sub> = i<sub>n</sub>) = P(X<sub>n+1</sub> = j | X<sub>n</sub> = i<sub>n</sub>)

    where:
    *   X<sub>n</sub> is the state of the process at time n.
    *   i<sub>0</sub>, i<sub>1</sub>, ..., i<sub>n</sub>, j are possible states of the process.

*   **Key Concepts:**
    *   **State Space (S):** The set of all possible states of the Markov Chain. S can be finite or infinite.  Example: S = {0, 1, 2, 3}
    *   **Time Homogeneity:** A Markov Chain is time-homogeneous if the transition probabilities are independent of time. That is, P(X<sub>n+1</sub> = j | X<sub>n</sub> = i) is the same for all n. We'll mostly be dealing with time-homogeneous Markov Chains.
    *   **Transition Probability (p<sub>ij</sub>):** The probability of transitioning from state i to state j in one step. Mathematically: p<sub>ij</sub> = P(X<sub>n+1</sub> = j | X<sub>n</sub> = i)

*   **Example:** Consider a weather model with three states: Sunny (S), Cloudy (C), and Rainy (R).  If the weather is sunny today, there is an 80% chance it will be sunny tomorrow, a 15% chance it will be cloudy, and a 5% chance it will be rainy.  This could be modeled with a Markov Chain.

**2. Representation: State Diagrams and Transition Matrices**

*   **State Diagram:** A graphical representation of a Markov Chain.
    *   Nodes represent states.
    *   Directed edges (arrows) represent possible transitions between states.
    *   The weight of each edge represents the transition probability (p<sub>ij</sub>).

    *Example:* Imagine our weather example. A state diagram would have three nodes (S, C, R) and arrows connecting them. An arrow from S to S would have the weight 0.8, S to C: 0.15, and S to R: 0.05.

*   **Transition Matrix (P):** A matrix that represents the transition probabilities.  The (i, j)-th entry of the matrix is p<sub>ij</sub>.

    *   The sum of the probabilities in each row must equal 1 (since the chain must transition to *some* state). This is a *stochastic matrix*.
    *   For an n-state Markov Chain, the transition matrix is an n x n matrix.

    *Example (using our weather example):*

    ```
        P =  | 0.8  0.15  0.05 |
             | 0.4  0.4   0.2  |
             | 0.2  0.5   0.3  |
    ```

    This matrix says:
    * Row 1:  If it's Sunny (S) today, probabilities of tomorrow are: Sunny(0.8), Cloudy(0.15), Rainy(0.05).
    * Row 2:  If it's Cloudy (C) today, probabilities of tomorrow are: Sunny(0.4), Cloudy(0.4), Rainy(0.2).
    * Row 3:  If it's Rainy (R) today, probabilities of tomorrow are: Sunny(0.2), Cloudy(0.5), Rainy(0.3).

**3. n-Step Transition Probabilities**

*   **Definition:** The probability of transitioning from state i to state j in n steps, denoted as p<sub>ij</sub><sup>(n)</sup>.
*   **Calculation:** The n-step transition matrix (P<sup>n</sup>) is obtained by raising the transition matrix P to the power of n.  Therefore, p<sub>ij</sub><sup>(n)</sup> is the (i, j)-th entry of the matrix P<sup>n</sup>.
*   **Chapman-Kolmogorov Equations:**  A fundamental result for calculating n-step transition probabilities:
    p<sub>ij</sub><sup>(n+m)</sup> = Σ<sub>k∈S</sub> p<sub>ik</sub><sup>(n)</sup> p<sub>kj</sub><sup>(m)</sup>  for all n, m ≥ 0

    This means the probability of going from state i to state j in n+m steps is the sum over all possible intermediate states k of the probability of going from i to k in n steps, and then from k to j in m steps.

*   **Example:**  Using the weather matrix from above, suppose we want to find the probability of it being sunny 2 days from now, given that it is sunny today. This is p<sub>SS</sub><sup>(2)</sup>.

    First, we calculate P<sup>2</sup>:

    ```
    P^2 = P * P =
     | 0.8  0.15  0.05 |   | 0.8  0.15  0.05 |   =   | 0.71  0.245  0.045 |
     | 0.4  0.4   0.2  | * | 0.4  0.4   0.2  |       | 0.52  0.38   0.1   |
     | 0.2  0.5   0.3  |   | 0.2  0.5   0.3  |       | 0.44  0.455  0.105 |
    ```

    Therefore, p<sub>SS</sub><sup>(2)</sup> = 0.71.  The probability of it being sunny two days from now, given that it is sunny today, is 71%.

**4. Stationary Distribution**

*   **Definition:** A probability distribution π = (π<sub>1</sub>, π<sub>2</sub>, ..., π<sub>n</sub>) is a stationary distribution for a Markov Chain with transition matrix P if πP = π.  This means that if the system starts with the distribution π, it will remain in that distribution after one step (and therefore after any number of steps).
*   **Interpretation:** The stationary distribution represents the long-term probabilities of being in each state.  As n approaches infinity, the probability of being in state i approaches π<sub>i</sub>, regardless of the initial state.
*   **Finding the Stationary Distribution:**
    1.  Solve the equation πP = π for π.  This is equivalent to solving π(P - I) = 0, where I is the identity matrix.
    2.  Ensure that the elements of π are non-negative and sum to 1 (since it's a probability distribution).

*   **Example:** Let's find the stationary distribution for our weather example:

    We need to solve πP = π, where π = (π<sub>S</sub>, π<sub>C</sub>, π<sub>R</sub>).

    (π<sub>S</sub>, π<sub>C</sub>, π<sub>R</sub>) *  | 0.8  0.15  0.05 | = (π<sub>S</sub>, π<sub>C</sub>, π<sub>R</sub>)
                               | 0.4  0.4   0.2  |
                               | 0.2  0.5   0.3  |

    This gives us the following system of equations:
    *   0.8π<sub>S</sub> + 0.4π<sub>C</sub> + 0.2π<sub>R</sub> = π<sub>S</sub>
    *   0.15π<sub>S</sub> + 0.4π<sub>C</sub> + 0.5π<sub>R</sub> = π<sub>C</sub>
    *   0.05π<sub>S</sub> + 0.2π<sub>C</sub> + 0.3π<sub>R</sub> = π<sub>R</sub>

    And the condition: π<sub>S</sub> + π<sub>C</sub> + π<sub>R</sub> = 1

    Simplifying the system:
    *   -0.2π<sub>S</sub> + 0.4π<sub>C</sub> + 0.2π<sub>R</sub> = 0
    *   0.15π<sub>S</sub> - 0.6π<sub>C</sub> + 0.5π<sub>R</sub> = 0
    *   0.05π<sub>S</sub> + 0.2π<sub>C</sub> - 0.7π<sub>R</sub> = 0
    *   π<sub>S</sub> + π<sub>C</sub> + π<sub>R</sub> = 1

    Solving this system (e.g., using substitution, elimination, or matrix methods), we find approximately:

    π<sub>S</sub> ≈ 0.545
    π<sub>C</sub> ≈ 0.364
    π<sub>R</sub> ≈ 0.091

    Therefore, the stationary distribution is approximately (0.545, 0.364, 0.091).  In the long run, the weather will be sunny about 54.5% of the time, cloudy about 36.4% of the time, and rainy about 9.1% of the time, regardless of the initial weather condition.

**5. Classification of States**

*   **Reachability:** State j is reachable from state i if it is possible to get from state i to state j in a finite number of steps.  Formally, there exists an n ≥ 0 such that p<sub>ij</sub><sup>(n)</sup> > 0.

*   **Communication:** State i and state j communicate if state j is reachable from state i AND state i is reachable from state j.

*   **Closed Set:** A set of states C is closed if, once the chain enters a state in C, it can never leave C.  Formally, if i ∈ C and j ∉ C, then p<sub>ij</sub> = 0.

*   **Irreducible Markov Chain:** A Markov Chain is irreducible if all states communicate with each other. This means it's possible to get from any state to any other state.

*   **Recurrent State:** A state i is recurrent if, starting from state i, the chain is guaranteed to return to state i eventually.  Formally, let f<sub>ii</sub> be the probability of ever returning to state i, given that we start in state i.  If f<sub>ii</sub> = 1, then state i is recurrent.

*   **Transient State:** A state i is transient if, starting from state i, there is a non-zero probability that the chain will never return to state i.  Formally, if f<sub>ii</sub> < 1, then state i is transient.

*   **Absorbing State:** A state i is absorbing if once the chain enters state i, it stays there forever. This means p<sub>ii</sub> = 1.  Absorbing states are a special case of recurrent states.

*   **Period of a State:** The period of state i, denoted d(i), is the greatest common divisor (GCD) of the set {n : p<sub>ii</sub><sup>(n)</sup> > 0}. That is, it is the GCD of the lengths of all possible return paths to state i.  If p<sub>ii</sub><sup>(n)</sup> = 0 for all n > 0, then the period is undefined.  It is considered 1.

*   **Periodic State:** A state i is periodic if its period d(i) > 1. This means that returns to state i can only occur at multiples of the period.

*   **Aperiodic State:** A state i is aperiodic if its period d(i) = 1. This means there is no cyclical pattern in the returns to state i.

*   **Ergodic State:** A state i is ergodic if it is aperiodic and recurrent. An Ergodic Markov Chain is an irreducible Markov Chain where all states are ergodic.

*   **Example:** Consider the following transition matrix:

    ```
    P = | 1  0  0  0 |
        | 0.5 0.5 0 0 |
        | 0  0.3 0.7 0 |
        | 0  0  0.4 0.6 |
    ```

    *   State 1 is an absorbing state (and therefore recurrent).
    *   States 2, 3 and 4 are transient. Once we reach state 1, we can never leave.
    *   The set {1} is a closed set.
    *   The periods of states 3 and 4 are undefined as they never revisit themselves.  Technically, they would both be aperiodic.

**6. Applications of Markov Chains**

*   **Modeling Queuing Systems:**  Analyzing waiting times and queue lengths.
*   **Speech Recognition:** Predicting the next phoneme in a sequence.
*   **Web Page Ranking (PageRank):**  Google's original algorithm used a Markov Chain to determine the importance of web pages.
*   **Genetics:** Modeling the evolution of genes.
*   **Finance:**  Modeling stock prices or credit risk.
*   **Weather Forecasting:** (as shown in the examples above).
*   **Recommendation Systems:** Predicting what a user will want to watch or buy next.

---

**Practice Questions/Exercises:**

1.  **Transition Matrix Creation:** A mouse is placed in a three-room maze. Each day, the mouse randomly chooses one of the doors to the next room (including returning to the current room). The rooms are connected as follows: Room 1 can go to 1 or 2. Room 2 can go to 1, 2, or 3. Room 3 can go to 2 or 3. Construct the transition matrix for this Markov Chain.

    *   *Answer:*

        ```
        P = | 1/2 1/2 0 |
            | 1/3 1/3 1/3 |
            | 0   1/2 1/2 |
        ```

2.  **n-Step Transition Probability:** Using the transition matrix from Question 1, what is the probability that the mouse is in room 3 after 2 days, given that it started in room 1?

    *   *Answer:*  First calculate P<sup>2</sup>. Then, find the (1, 3)-th element of P<sup>2</sup>.

        ```
        P^2 = P * P =  | 5/12 5/12 1/6 |
                       | 1/6  7/18 4/9 |
                       | 1/6  5/12 5/12 |
        ```

        The probability is 1/6.

3.  **Stationary Distribution:** Consider a Markov Chain with the following transition matrix:

    ```
    P = | 0.6  0.4 |
        | 0.3  0.7 |
    ```

    Find the stationary distribution.

    *   *Answer:*  Let π = (π<sub>1</sub>, π<sub>2</sub>).  Solve πP = π and π<sub>1</sub> + π<sub>2</sub> = 1.

        The equations become:
        0.6π<sub>1</sub> + 0.3π<sub>2</sub> = π<sub>1</sub>
        0.4π<sub>1</sub> + 0.7π<sub>2</sub> = π<sub>2</sub>
        π<sub>1</sub> + π<sub>2</sub> = 1

        Simplifying, we get:
        -0.4π<sub>1</sub> + 0.3π<sub>2</sub> = 0
        0.4π<sub>1</sub> - 0.3π<sub>2</sub> = 0
        π<sub>1</sub> + π<sub>2</sub> = 1

        From the first equation, we have 0.4π<sub>1</sub> = 0.3π<sub>2</sub>, which means π<sub>1</sub> = (3/4)π<sub>2</sub>.

        Substituting into the last equation:  (3/4)π<sub>2</sub> + π<sub>2</sub> = 1 => (7/4)π<sub>2</sub> = 1 => π<sub>2</sub> = 4/7.

        Then, π<sub>1</sub> = (3/4)(4/7) = 3/7.

        Therefore, the stationary distribution is (3/7, 4/7).

4.  **State Classification:** Consider the following transition matrix:

    ```
    P = | 0 1 0 |
        | 0 0 1 |
        | 1 0 0 |
    ```

    Classify the states (recurrent, transient, periodic, aperiodic).

    *   *Answer:*
        *   All states 1, 2 and 3 are recurrent.  The chain will always return to its starting state.
        *   There are no transient states.
        *   The period of each state is 3.  Therefore, all states are periodic with period 3.

---

**Important Points to Remember:**

*   Markov Chains are memoryless: the future depends only on the present.
*   The transition matrix must be a stochastic matrix: rows sum to 1.
*   n-step transition probabilities can be calculated by raising the transition matrix to the power of n.
*   The stationary distribution represents the long-term probabilities of being in each state.
*   State classification (recurrent, transient, periodic) helps understand the long-term behavior of the Markov Chain.
*   Markov Chains have numerous applications in computer science and other fields.
