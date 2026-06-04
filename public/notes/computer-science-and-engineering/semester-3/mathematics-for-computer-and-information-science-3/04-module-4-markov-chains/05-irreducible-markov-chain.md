---
title: "Irreducible Markov chain"
subject: "MATHEMATICS FOR COMPUTER AND INFORMATION SCIENCE-3"
module: "Module 4: Markov Chains"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ab63"
status: "completed"
scrapedAt: "2026-05-20T16:26:14.286Z"
---
## Module 4: Markov Chains - Topic: Irreducible Markov Chains

**Subject:** MATHEMATICS FOR COMPUTER AND INFORMATION SCIENCE-3

**Learning Outcomes:**

*   Define the concept of reducibility and irreducibility in Markov chains.
*   Determine whether a given Markov chain is irreducible.
*   Explain the significance of irreducibility in the context of Markov chain analysis.
*   Describe the communication classes of a Markov chain.

### 1. Key Concepts and Definitions

*   **Markov Chain:** A stochastic process where the future state depends only on the present state and not on the past states. This is also known as the "memoryless" or "Markov" property.

    *   Mathematically,  `P(X_{n+1} = j | X_n = i, X_{n-1} = i_{n-1}, ..., X_0 = i_0) = P(X_{n+1} = j | X_n = i)`

*   **State Space (S):** The set of all possible states that the Markov chain can be in.  It can be finite, countably infinite, or uncountably infinite.  We'll focus on finite and countably infinite state spaces.

*   **Transition Probability (P<sub>ij</sub>):**  The probability of moving from state *i* to state *j* in one step.

    *   `P_{ij} = P(X_{n+1} = j | X_n = i)`
    *   `P_{ij} >= 0` for all i, j
    *   `∑_{j ∈ S} P_{ij} = 1` for all i  (Rows of the transition matrix must sum to 1)

*   **Transition Matrix (P):** A matrix whose (i, j)-th entry is the transition probability P<sub>ij</sub>.

*   **n-step Transition Probability (P<sub>ij</sub><sup>(n)</sup>):** The probability of moving from state *i* to state *j* in *n* steps.

    *   `P_{ij}^{(n)} = P(X_{n+m} = j | X_m = i)`
    *   Calculated as the (i, j)-th entry of the matrix P<sup>n</sup>, where P is the one-step transition matrix.

*   **Accessibility:** State *j* is accessible from state *i* (denoted `i -> j`) if there exists an *n* ≥ 0 such that `P_{ij}^{(n)} > 0`. This means that it's possible to reach state *j* from state *i* in some number of steps.  Note that n=0 implies i=j (i is always accessible from itself).

*   **Communication:** State *i* and state *j* communicate (denoted `i <-> j`) if *i* is accessible from *j* AND *j* is accessible from *i* (i.e., `i -> j` and `j -> i`).

*   **Communication Class:**  An equivalence class of states where all states within the class communicate with each other.  A communication class *C* is a set of states such that:

    *   For any *i, j ∈ C*,  `i <-> j`.
    *   For any *i ∈ C* and *k ∉ C*, `i </-> k` (i.e., *i* and *k* do NOT communicate).

*   **Reducible Markov Chain:** A Markov chain is reducible if its state space can be partitioned into two or more communication classes. This means there are states that cannot be reached from other states.

*   **Irreducible Markov Chain:** A Markov chain is irreducible if it has only one communication class. This means that every state can be reached from every other state (possibly in multiple steps).  In other words, for every pair of states *i* and *j*, `i <-> j`.

### 2. Determining Irreducibility

To determine if a Markov chain is irreducible, you can follow these steps:

1.  **Draw a State Diagram:** Represent the Markov chain as a directed graph where nodes represent states and edges represent transitions with non-zero probabilities.

2.  **Identify Communication Classes:** Analyze the state diagram to identify sets of states that communicate with each other.

3.  **Check for a Single Communication Class:** If there is only one communication class, the Markov chain is irreducible. Otherwise, it is reducible.

4.  **Alternatively, check the Transition Matrix:**

    *   **Calculate P<sup>n</sup> for increasing values of n:** Start with n=1 (P itself) and compute P<sup>2</sup>, P<sup>3</sup>, and so on.
    *   **Check if every entry in some P<sup>n</sup> + P<sup>n-1</sup> + ... + P + I is positive:** If this condition holds for some n, then the Markov chain is irreducible (I is the identity matrix).  This is because it shows that you can get from any state to any other state in at most n steps. (adding I makes sure that i->i.)

### 3. Significance of Irreducibility

Irreducibility is a crucial property in Markov chain analysis for several reasons:

*   **Existence of Stationary Distribution:**  For aperiodic irreducible Markov chains, a unique stationary distribution exists.  This stationary distribution represents the long-run probability of being in each state.

*   **Ergodicity:**  Irreducibility is a key component of ergodicity.  An ergodic Markov chain (irreducible and aperiodic) guarantees that the long-run average behavior of the chain is independent of the initial state.

*   **Simplifies Analysis:**  Irreducible chains are generally easier to analyze because you don't have to worry about the chain getting stuck in a subset of states.

### 4. Examples

**Example 1: Irreducible Markov Chain**

Consider a Markov chain with states S = {1, 2, 3} and transition matrix:

```
P =  [0.0 0.5 0.5]
     [0.5 0.0 0.5]
     [0.5 0.5 0.0]
```

*   **State Diagram:** You would draw a diagram with nodes 1, 2, and 3.  Each node has edges to the other two nodes with probability 0.5.

*   **Communication Classes:** Notice that you can get from any state to any other state. So, there is only one communication class: {1, 2, 3}.

*   **Conclusion:** The Markov chain is irreducible.

**Example 2: Reducible Markov Chain**

Consider a Markov chain with states S = {1, 2, 3} and transition matrix:

```
P =  [1.0 0.0 0.0]
     [0.0 0.5 0.5]
     [0.0 0.5 0.5]
```

*   **State Diagram:**  State 1 has a self-loop. States 2 and 3 have transitions to each other.

*   **Communication Classes:**  We have two communication classes: {1} and {2, 3}. You can reach state 1 from state 1, but you cannot reach states 2 or 3 from state 1. Similarly, you can reach states 2 and 3 from states 2 or 3, but you cannot reach state 1 from states 2 or 3.

*   **Conclusion:** The Markov chain is reducible.

**Example 3:  Slightly more complex reducible example**

Consider a Markov chain with states S = {1, 2, 3, 4} and transition matrix:

```
P =  [0.5 0.5 0.0 0.0]
     [0.5 0.5 0.0 0.0]
     [0.0 0.0 0.5 0.5]
     [0.0 0.0 0.5 0.5]
```

*   **State Diagram:** States 1 and 2 have transitions to each other. States 3 and 4 have transitions to each other. There are no transitions between the sets {1, 2} and {3, 4}.

*   **Communication Classes:** We have two communication classes: {1, 2} and {3, 4}.

*   **Conclusion:** The Markov chain is reducible.

### 5. Practice Questions/Exercises

**Question 1:**

Determine whether the following Markov chain is irreducible, given the transition matrix:

```
P =  [0.2 0.8]
     [0.7 0.3]
```

**Answer:**

Yes, the Markov chain is irreducible.  You can get from state 1 to state 2 (P<sub>12</sub> = 0.8) and from state 2 to state 1 (P<sub>21</sub> = 0.7). Thus, both states communicate, and the chain has only one communication class {1, 2}.

**Question 2:**

Determine whether the following Markov chain is irreducible, given the transition matrix:

```
P =  [1 0 0]
     [0 0.6 0.4]
     [0 0.5 0.5]
```

**Answer:**

No, the Markov chain is reducible. State 1 is a communicating class on its own. From states 2 or 3 you cannot reach state 1. The communication classes are {1} and {2, 3}.

**Question 3:**

Consider a Markov chain representing the weather: Sunny (S), Cloudy (C), and Rainy (R). The transition probabilities are as follows:

*   If it's Sunny today, there's a 60% chance it will be Sunny tomorrow, a 30% chance it will be Cloudy, and a 10% chance it will be Rainy.
*   If it's Cloudy today, there's a 40% chance it will be Sunny tomorrow, a 40% chance it will be Cloudy, and a 20% chance it will be Rainy.
*   If it's Rainy today, there's a 20% chance it will be Sunny tomorrow, a 50% chance it will be Cloudy, and a 30% chance it will be Rainy.

Write down the transition matrix and determine if this Markov chain is irreducible.

**Answer:**

The transition matrix is:

```
P =  [0.6 0.3 0.1]
     [0.4 0.4 0.2]
     [0.2 0.5 0.3]
```

This Markov chain is irreducible because you can get from any weather state to any other weather state, possibly in multiple days. Thus there is one communicating class {S,C,R}.

### 6. Important Points to Remember

*   Irreducibility is a property of the *entire* Markov chain, not individual states.
*   A state *i* is always accessible from itself (consider `P_{ii}^{(0)} = 1`).
*   If a Markov chain is irreducible, you can reach any state from any other state.
*   The concept of communication ( `i <-> j`) is crucial for identifying communication classes.
*   Reducible Markov chains can be broken down into smaller, more manageable pieces (their communication classes).
*   Irreducibility often implies desirable properties in the long run, such as the existence of a unique stationary distribution.
