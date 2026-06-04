---
title: "Chapman–Kolmogorov Equations"
subject: "MATHEMATICS FOR COMPUTER AND INFORMATION SCIENCE-3"
module: "Module 4: Markov Chains"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ab61"
status: "completed"
scrapedAt: "2026-05-20T16:26:12.858Z"
---
# MATHEMATICS FOR COMPUTER AND INFORMATION SCIENCE-3

## Module 4: Markov Chains

### Topic: Chapman–Kolmogorov Equations

**Learning Outcomes:**

*   Understand the concept of n-step transition probabilities.
*   Be able to calculate n-step transition probabilities using the Chapman–Kolmogorov equations.
*   Apply the Chapman–Kolmogorov equations to solve problems related to Markov Chains.
*   Understand the implications of the Chapman-Kolmogorov equations for predicting long-term behavior of a Markov Chain.

**1. Introduction to n-Step Transition Probabilities**

*   **Definition:** The *n-step transition probability*, denoted as  $p_{ij}^{(n)}$, represents the probability of transitioning from state *i* to state *j* in *n* steps.  Mathematically:

    $p_{ij}^{(n)} = P(X_{n+k} = j | X_k = i)$, for all $k \geq 0$

    where $X_t$ represents the state of the Markov Chain at time *t*.  The Markov property ensures this probability is independent of *k*.

*   **Interpretation:** It's the likelihood of being in state *j* after *n* transitions, given that we started in state *i*.

*   **Example:**  Imagine a weather model with states "Sunny" and "Rainy".  $p_{Sunny, Rainy}^{(2)}$ would be the probability that it is rainy two days from now, given that it is sunny today.

**2. Key Concepts and Definitions**

*   **Markov Chain:**  A stochastic process with the Markov Property.  The Markov Property states that the future state of the process depends only on the current state, and not on the past states.  Formally:

    $P(X_{n+1} = j | X_0 = i_0, X_1 = i_1, ..., X_n = i) = P(X_{n+1} = j | X_n = i)$

*   **Transition Probability Matrix (One-Step):**  A matrix **P** where each element $p_{ij}$ represents the probability of transitioning from state *i* to state *j* in one step.

    **P** =  $\begin{bmatrix}
    p_{11} & p_{12} & \cdots & p_{1n} \\
    p_{21} & p_{22} & \cdots & p_{2n} \\
    \vdots  & \vdots  & \ddots & \vdots  \\
    p_{n1} & p_{n2} & \cdots & p_{nn}
    \end{bmatrix}$

    *   Each row sums to 1:  $\sum_{j=1}^{n} p_{ij} = 1$ for all *i*.

*   **n-Step Transition Probability Matrix:** A matrix **P<sup>(n)</sup>** where each element $p_{ij}^{(n)}$ represents the probability of transitioning from state *i* to state *j* in *n* steps.

    **P<sup>(n)</sup>** =  $\begin{bmatrix}
    p_{11}^{(n)} & p_{12}^{(n)} & \cdots & p_{1n}^{(n)} \\
    p_{21}^{(n)} & p_{22}^{(n)} & \cdots & p_{2n}^{(n)} \\
    \vdots  & \vdots  & \ddots & \vdots  \\
    p_{n1}^{(n)} & p_{n2}^{(n)} & \cdots & p_{nn}^{(n)}
    \end{bmatrix}$

**3. The Chapman–Kolmogorov Equations**

*   **Statement:** The Chapman–Kolmogorov equations provide a way to calculate the n-step transition probabilities in terms of the one-step transition probabilities, or, more generally, in terms of other multi-step transition probabilities. For any integers *n*, *m* such that *0 ≤ m ≤ n*:

    $p_{ij}^{(n)} = \sum_{k \in S} p_{ik}^{(m)} p_{kj}^{(n-m)}$

    where *S* is the state space of the Markov Chain.

*   **Interpretation:** The probability of going from state *i* to state *j* in *n* steps is the sum, over all possible intermediate states *k*, of the probability of going from state *i* to state *k* in *m* steps, multiplied by the probability of going from state *k* to state *j* in *n-m* steps. Essentially, it breaks down the *n*-step transition into two shorter transitions.

*   **Matrix Form:** In terms of matrices, the Chapman-Kolmogorov equations can be expressed as:

    **P<sup>(n)</sup> = P<sup>(m)</sup> P<sup>(n-m)</sup>**

    A particularly useful case is when *m* = 1:

    **P<sup>(n)</sup> = P P<sup>(n-1)</sup>**

    Therefore,  **P<sup>(n)</sup> = P<sup>n</sup>**  (i.e., the n-step transition probability matrix is simply the one-step transition probability matrix raised to the power of *n*).

**4. Applying the Chapman–Kolmogorov Equations**

*   **Example 1: Calculating 2-Step Transition Probabilities**

    Suppose we have a Markov Chain with two states, 1 and 2, and the following transition probability matrix:

    **P** =  $\begin{bmatrix}
    0.7 & 0.3 \\
    0.4 & 0.6
    \end{bmatrix}$

    We want to find the 2-step transition probability $p_{12}^{(2)}$ (the probability of going from state 1 to state 2 in two steps).

    Using the Chapman-Kolmogorov equations (with m=1 and n=2):

    $p_{12}^{(2)} = \sum_{k \in \{1, 2\}} p_{1k}^{(1)} p_{k2}^{(1)} = p_{11}p_{12} + p_{12}p_{22}$

    $p_{12}^{(2)} = (0.7)(0.3) + (0.3)(0.6) = 0.21 + 0.18 = 0.39$

    Therefore, the probability of going from state 1 to state 2 in two steps is 0.39.

    We can also compute the full 2-step transition probability matrix by squaring the original matrix:

    **P<sup>(2)</sup> = P<sup>2</sup> = P * P** =  $\begin{bmatrix}
    0.7 & 0.3 \\
    0.4 & 0.6
    \end{bmatrix}$ * $\begin{bmatrix}
    0.7 & 0.3 \\
    0.4 & 0.6
    \end{bmatrix}$ = $\begin{bmatrix}
    0.61 & 0.39 \\
    0.52 & 0.48
    \end{bmatrix}$

    So, $p_{12}^{(2)}$ is indeed 0.39.

*   **Example 2: A More Complex Scenario**

    A rat is placed in a maze with three rooms.  Each time period, the rat moves from its current room to a randomly chosen adjacent room with equal probability. The rooms are arranged linearly: 1-2-3. What is the probability that the rat is in room 3 after 2 time periods, given it started in room 1?

    The states are the rooms (1, 2, 3).  The one-step transition probability matrix is:

    **P** = $\begin{bmatrix}
    0 & 1 & 0 \\
    0.5 & 0 & 0.5 \\
    0 & 1 & 0
    \end{bmatrix}$

    We want to find $p_{13}^{(2)}$.

    **P<sup>(2)</sup> = P<sup>2</sup> = P * P** = $\begin{bmatrix}
    0 & 1 & 0 \\
    0.5 & 0 & 0.5 \\
    0 & 1 & 0
    \end{bmatrix}$ * $\begin{bmatrix}
    0 & 1 & 0 \\
    0.5 & 0 & 0.5 \\
    0 & 1 & 0
    \end{bmatrix}$ = $\begin{bmatrix}
    0.5 & 0 & 0.5 \\
    0 & 1 & 0 \\
    0.5 & 0 & 0.5
    \end{bmatrix}$

    Therefore, $p_{13}^{(2)}$ = 0.5.  The probability the rat is in room 3 after 2 time periods, starting in room 1, is 0.5.

**5. Implications for Predicting Long-Term Behavior**

*   The Chapman-Kolmogorov equations are fundamental for understanding how a Markov chain evolves over time.  Repeatedly applying these equations (or equivalently, raising the transition matrix to higher powers) allows us to approximate the long-term distribution of the chain.

*   If the Markov chain is *ergodic* (irreducible and aperiodic), the *n*-step transition probabilities often converge to a stationary distribution as *n* approaches infinity. This stationary distribution represents the long-run probabilities of being in each state.

*   By analyzing the powers of the transition matrix, we can gain insights into the stability and limiting behavior of the system being modeled.

**6. Practice Questions/Exercises**

1.  **Problem:** A simplified model for a stock price has three states: Up (U), Down (D), and Same (S). The one-step transition probability matrix is:

    **P** = $\begin{bmatrix}
    0.6 & 0.2 & 0.2 \\
    0.3 & 0.5 & 0.2 \\
    0.2 & 0.3 & 0.5
    \end{bmatrix}$

    What is the probability that the stock will be "Up" two days from now, given that it is currently "Down"?

    **Answer:** We want to find $p_{DU}^{(2)}$.  First calculate P<sup>2</sup>:

     **P<sup>2</sup>** = $\begin{bmatrix}
    0.6 & 0.2 & 0.2 \\
    0.3 & 0.5 & 0.2 \\
    0.2 & 0.3 & 0.5
    \end{bmatrix}$ * $\begin{bmatrix}
    0.6 & 0.2 & 0.2 \\
    0.3 & 0.5 & 0.2 \\
    0.2 & 0.3 & 0.5
    \end{bmatrix}$ = $\begin{bmatrix}
    0.46 & 0.27 & 0.27 \\
    0.35 & 0.34 & 0.31 \\
    0.29 & 0.35 & 0.36
    \end{bmatrix}$

    Therefore, $p_{DU}^{(2)} = 0.35$.

2.  **Problem:** A machine can be in one of three states: Working (W), Temporarily Broken (T), and Permanently Broken (P). Once it is in the "Permanently Broken" state, it stays there.  The one-step transition probability matrix is:

    **P** = $\begin{bmatrix}
    0.8 & 0.2 & 0 \\
    0.5 & 0.4 & 0.1 \\
    0 & 0 & 1
    \end{bmatrix}$

    What is the probability that a machine that is currently "Working" will be "Permanently Broken" after two steps?

    **Answer:**  We want to find $p_{WP}^{(2)}$.

    **P<sup>2</sup>** = $\begin{bmatrix}
    0.8 & 0.2 & 0 \\
    0.5 & 0.4 & 0.1 \\
    0 & 0 & 1
    \end{bmatrix}$ * $\begin{bmatrix}
    0.8 & 0.2 & 0 \\
    0.5 & 0.4 & 0.1 \\
    0 & 0 & 1
    \end{bmatrix}$ = $\begin{bmatrix}
    0.74 & 0.24 & 0.02 \\
    0.6 & 0.26 & 0.14 \\
    0 & 0 & 1
    \end{bmatrix}$

    Therefore, $p_{WP}^{(2)} = 0.02$.

3.  **Problem:** Consider a Markov chain with states {A, B}. The one-step transition matrix is:

    **P** = $\begin{bmatrix}
     0.9 & 0.1 \\
     0.5 & 0.5
    \end{bmatrix}$

    Calculate the probability of transitioning from state A to state A in 3 steps, i.e., find $p_{AA}^{(3)}$.

    **Answer:**  First, calculate **P<sup>2</sup>**:

    **P<sup>2</sup>** = $\begin{bmatrix}
     0.9 & 0.1 \\
     0.5 & 0.5
    \end{bmatrix}$ * $\begin{bmatrix}
     0.9 & 0.1 \\
     0.5 & 0.5
    \end{bmatrix}$ = $\begin{bmatrix}
     0.86 & 0.14 \\
     0.7 & 0.3
    \end{bmatrix}$

    Then calculate **P<sup>3</sup>** = **P * P<sup>2</sup>**:

    **P<sup>3</sup>** = $\begin{bmatrix}
     0.9 & 0.1 \\
     0.5 & 0.5
    \end{bmatrix}$ * $\begin{bmatrix}
     0.86 & 0.14 \\
     0.7 & 0.3
    \end{bmatrix}$ = $\begin{bmatrix}
     0.844 & 0.156 \\
     0.73 & 0.27
    \end{bmatrix}$

    Therefore, $p_{AA}^{(3)} = 0.844$.

**7. Important Points to Remember**

*   The Chapman–Kolmogorov equations are a cornerstone for analyzing Markov Chains.
*   They allow you to calculate probabilities of transitions over multiple steps.
*   Matrix multiplication provides a convenient way to apply the equations, especially for calculating *n*-step transition probability matrices.
*   Understanding these equations is crucial for predicting the long-term behavior of Markov Chain models.
*   The sum of each row in **P<sup>(n)</sup>** must always be equal to 1.
*   Remember the Markov property - the past doesn't influence the future, only the present state matters.
