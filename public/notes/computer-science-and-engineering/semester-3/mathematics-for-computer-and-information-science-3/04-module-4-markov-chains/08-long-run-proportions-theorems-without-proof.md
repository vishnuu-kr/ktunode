---
title: "Long-Run Proportions. (Theorems without proof)"
subject: "MATHEMATICS FOR COMPUTER AND INFORMATION SCIENCE-3"
module: "Module 4: Markov Chains"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ab66"
status: "completed"
scrapedAt: "2026-05-20T16:26:16.419Z"
---
## MATHEMATICS FOR COMPUTER AND INFORMATION SCIENCE-3
### Module 4: Markov Chains
### Topic: Long-Run Proportions (Theorems without Proof)

**Learning Outcomes:**

*   Understand the concept of long-run proportions (stationary distribution) in Markov chains.
*   Recognize the conditions for the existence and uniqueness of the stationary distribution.
*   Apply theorems (without proof) to calculate long-run proportions.
*   Interpret the meaning of long-run proportions in various contexts.

---

**1. Introduction to Long-Run Proportions (Stationary Distribution)**

*   **Concept:**  Long-run proportions (also known as stationary distribution, steady-state distribution, or equilibrium distribution) describe the long-term average proportion of time that the Markov chain spends in each state.  In other words, after a sufficiently long time, the probability of being in a particular state approaches a fixed value, regardless of the initial state.

*   **Notation:**  We typically denote the long-run proportions (or stationary distribution) by π = (π<sub>1</sub>, π<sub>2</sub>, ..., π<sub>n</sub>), where π<sub>i</sub> represents the long-run proportion of time spent in state *i*.

*   **Interpretation:**  π<sub>i</sub> can be interpreted as:
    *   The probability that the chain is in state *i* after a very long time.
    *   The long-run average proportion of time that the chain spends in state *i*.

**2. Key Definitions**

*   **Markov Chain:** A stochastic process with the Markov property, meaning the future state depends only on the present state and not on the past.

*   **State Space:** The set of all possible states that the Markov chain can be in.

*   **Transition Matrix (P):** A square matrix where P<sub>ij</sub> represents the probability of transitioning from state *i* to state *j* in one step.
    *   Each row sums to 1: ∑<sub>j</sub> P<sub>ij</sub> = 1 for all *i*.

*   **Irreducible Markov Chain:** A Markov chain is irreducible if it is possible to reach any state from any other state (possibly in multiple steps).  Formally, for any two states *i* and *j*, there exists an integer *n* ≥ 1 such that P<sup>n</sup><sub>ij</sub> > 0.

*   **Aperiodic Markov Chain:** A state *i* is aperiodic if the greatest common divisor (GCD) of the lengths of all paths returning to state *i* is 1.  A Markov chain is aperiodic if all its states are aperiodic.

*   **Positive Recurrent State:** A state *i* is positive recurrent if the expected time to return to state *i* is finite.

*   **Ergodic Markov Chain:** An irreducible, aperiodic, and positive recurrent Markov chain. This is a key concept as ergodic Markov chains always have a unique stationary distribution.

**3. Theorems Regarding Long-Run Proportions (Without Proof)**

*   **Theorem 1: Existence and Uniqueness of Stationary Distribution**

    *   **If** a Markov chain is **irreducible, aperiodic, and positive recurrent** (i.e., ergodic), **then** a unique stationary distribution π exists.

*   **Theorem 2: Stationary Distribution Equation**

    *   A stationary distribution π satisfies the following equation:  **π = πP**

    *   This means that the stationary distribution remains unchanged after one step of the Markov chain.

*   **Theorem 3: Calculating Stationary Distribution**

    *   For an ergodic Markov chain, the stationary distribution π can be found by solving the following system of equations:

        *   **π = πP**  (or π<sub>j</sub> = ∑<sub>i</sub> π<sub>i</sub>P<sub>ij</sub>  for each state *j*)
        *   **∑<sub>i</sub> π<sub>i</sub> = 1** (The long-run proportions must sum to 1)

**4. Application of Theorems: Calculating Long-Run Proportions**

*   **Example 1:**

    Consider a Markov chain with two states (A and B) and the following transition matrix:

    P =  | 0.6  0.4 |
         | 0.3  0.7 |

    Find the long-run proportions (stationary distribution) π = (π<sub>A</sub>, π<sub>B</sub>).

    *   **Step 1: Check Ergodicity (Usually assumed in these problems)**.  The chain appears irreducible and aperiodic. Let's assume it's ergodic.
    *   **Step 2:  Set up the equations.**

        *   π<sub>A</sub> = π<sub>A</sub> * 0.6 + π<sub>B</sub> * 0.3
        *   π<sub>B</sub> = π<sub>A</sub> * 0.4 + π<sub>B</sub> * 0.7
        *   π<sub>A</sub> + π<sub>B</sub> = 1

    *   **Step 3: Solve the equations.**

        From the first equation: π<sub>A</sub> = 0.6π<sub>A</sub> + 0.3π<sub>B</sub>  =>  0.4π<sub>A</sub> = 0.3π<sub>B</sub>  =>  π<sub>A</sub> = (3/4)π<sub>B</sub>

        Substitute into the third equation: (3/4)π<sub>B</sub> + π<sub>B</sub> = 1  =>  (7/4)π<sub>B</sub> = 1  =>  π<sub>B</sub> = 4/7

        Therefore, π<sub>A</sub> = (3/4) * (4/7) = 3/7

    *   **Step 4: Write the stationary distribution.**

        π = (3/7, 4/7)

    *   **Interpretation:** In the long run, the chain spends approximately 3/7 of the time in state A and 4/7 of the time in state B.

*   **Example 2:**

    Consider a Markov chain with three states (1, 2, and 3) and the following transition matrix:

    P = | 0.5  0.3  0.2 |
        | 0.4  0.4  0.2 |
        | 0.3  0.3  0.4 |

    Find the stationary distribution π = (π<sub>1</sub>, π<sub>2</sub>, π<sub>3</sub>).

    *   **Step 1: Check Ergodicity (Assume)** -  Assume the chain is ergodic.
    *   **Step 2: Set up the equations.**

        *   π<sub>1</sub> = 0.5π<sub>1</sub> + 0.4π<sub>2</sub> + 0.3π<sub>3</sub>
        *   π<sub>2</sub> = 0.3π<sub>1</sub> + 0.4π<sub>2</sub> + 0.3π<sub>3</sub>
        *   π<sub>3</sub> = 0.2π<sub>1</sub> + 0.2π<sub>2</sub> + 0.4π<sub>3</sub>
        *   π<sub>1</sub> + π<sub>2</sub> + π<sub>3</sub> = 1

    *   **Step 3: Solve the equations.** This is a system of linear equations. You can solve it using substitution, elimination, or matrix methods.  From the first equation: 0.5π<sub>1</sub> = 0.4π<sub>2</sub> + 0.3π<sub>3</sub>.  From the second equation: 0.6π<sub>2</sub> = 0.3π<sub>1</sub> + 0.3π<sub>3</sub>. From the third equation: 0.6π<sub>3</sub> = 0.2π<sub>1</sub> + 0.2π<sub>2</sub>.  It can be shown that the solution is approximately:
        π<sub>1</sub> = 0.346
        π<sub>2</sub> = 0.308
        π<sub>3</sub> = 0.346

    *   **Step 4: Write the stationary distribution.**

        π ≈ (0.346, 0.308, 0.346)

    *   **Interpretation:** In the long run, the chain spends approximately 34.6% of the time in state 1, 30.8% of the time in state 2, and 34.6% of the time in state 3.

**5. Practice Questions/Exercises**

1.  **Transition Matrix:**

    P = | 0.8  0.2 |
        | 0.5  0.5 |

    Find the stationary distribution.

2.  **Transition Matrix:**

    P = | 0.7  0.3 |
        | 0.4  0.6 |

    Find the stationary distribution.

3.  A simple weather model has two states: Sunny (S) and Rainy (R).  The transition probabilities are:
    *   If it is Sunny today, there's an 80% chance it will be Sunny tomorrow.
    *   If it is Rainy today, there's a 60% chance it will be Rainy tomorrow.

    a) Write down the transition matrix.
    b) Find the long-run proportion of days that are Sunny.

**Answers to Practice Questions/Exercises**

1.  π = (5/7, 2/7)  ≈ (0.714, 0.286)

2.  π = (4/7, 3/7)  ≈ (0.571, 0.429)

3.  a) P = | 0.8  0.2 |
               | 0.4  0.6 |
    b) π = (2/3, 1/3) ≈ (0.667, 0.333).  Therefore, the long-run proportion of sunny days is approximately 2/3 or 66.7%.

**6. Important Points to Remember**

*   The concept of long-run proportions is fundamental for understanding the long-term behavior of Markov chains.
*   Theorems provide the conditions for the existence and uniqueness of the stationary distribution.  Ergodicity (irreducible, aperiodic, and positive recurrent) is a crucial requirement.
*   The equation π = πP is key to calculating the stationary distribution.
*   The stationary distribution represents the long-run average proportion of time spent in each state, providing valuable insights for applications.
*   Solving for stationary distributions often involves solving systems of linear equations.
*   Without proofs of theorems, we need to rely on the fact that Markov chains are Ergodic (irreducible, aperiodic, and positive recurrent).
