---
title: "Transient state"
subject: "MATHEMATICS FOR COMPUTER AND INFORMATION SCIENCE-3"
module: "Module 4: Markov Chains"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ab65"
status: "completed"
scrapedAt: "2026-05-20T16:26:15.709Z"
---
# Mathematics for Computer and Information Science-3: Module 4 - Markov Chains: Transient States

## Introduction

This module delves into the concept of Markov Chains, specifically focusing on transient states. Understanding transient states is crucial for analyzing the long-term behavior of Markov Chains and their applications in computer science and information science.

## Learning Outcomes

By the end of this topic, you should be able to:

*   Define what a transient state is in the context of a Markov Chain.
*   Identify transient states in a given Markov Chain.
*   Calculate the probability of eventually being absorbed from a transient state.
*   Determine the mean time spent in each transient state before absorption.
*   Apply the concept of transient states to real-world problems.

## 1. Key Concepts and Definitions

### 1.1. Markov Chain Recap

*   A **Markov Chain** is a stochastic process that undergoes transitions from one state to another on a state space.  The defining characteristic is the **Markov Property**:  The probability of transitioning to any particular state depends *only* on the current state, and not on the past sequence of states.  Mathematically:

    P(X<sub>n+1</sub> = j | X<sub>n</sub> = i, X<sub>n-1</sub> = i<sub>n-1</sub>, ..., X<sub>0</sub> = i<sub>0</sub>) = P(X<sub>n+1</sub> = j | X<sub>n</sub> = i)

    where X<sub>n</sub> is the state at time n, and i and j are states in the state space.

*   A **state space** is the set of all possible states the Markov Chain can be in.

*   A **transition matrix** (P) represents the probabilities of transitioning between states. P<sub>ij</sub> = P(X<sub>n+1</sub> = j | X<sub>n</sub> = i).  Each row in the transition matrix must sum to 1.

### 1.2. State Classification

States in a Markov Chain can be classified based on their recurrence properties:

*   **Recurrent State:** A state *i* is recurrent if, starting from *i*, the chain will eventually return to *i* with probability 1.  Formally, f<sub>ii</sub> = 1, where f<sub>ii</sub> is the probability of ever returning to state *i* starting from state *i*.

*   **Transient State:** A state *i* is transient if, starting from *i*, there is a non-zero probability that the chain will *never* return to *i*. Formally, f<sub>ii</sub> < 1.  This means that once the process leaves a transient state, there's a chance it won't come back.

*   **Absorbing State:** A state *i* is absorbing if, once entered, the chain cannot leave.  That is, P<sub>ii</sub> = 1.  All other states leading to an absorbing state are transient.

*   **Irreducible Markov Chain:**  A Markov Chain is irreducible if it is possible to get from any state to any other state (not necessarily in one step).

### 1.3. Definition of Transient State

A **transient state** in a Markov Chain is a state *i* such that the system may visit *i* several times, but eventually, the probability of returning to *i* is less than 1. Once the Markov Chain leaves a transient state, there is a non-zero probability that it will never return.

**Key takeaway:** The hallmark of a transient state is the possibility of *never* returning to it.

## 2. Identifying Transient States

### 2.1. Examination of the Transition Diagram

*   **Look for dead ends:**  If a state leads to an absorbing state and has no path back to itself, or other transient states that lead to an absorbing state, then it's likely a transient state.

*   **Check for cycles:** If a state is part of a closed cycle of states, where the probability of leaving that cycle is non-zero, then all states in the cycle are likely transient.

### 2.2. Examination of the Transition Matrix

*   **Identify absorbing states:** Any state *i* with P<sub>ii</sub> = 1 is an absorbing state.

*   **Identify states that lead to absorbing states (and aren't absorbing themselves):** These are transient states.

*   **Analyze the long-term behavior:** Simulate the Markov Chain over many steps. Transient states will be visited less and less frequently as time goes on.

**Example:**

Consider a Markov Chain with the following transition matrix:

```
     0    1    2
0  [0.5  0.3  0.2]
1  [0.0  1.0  0.0]
2  [0.0  0.0  1.0]
```

*   State 1 and 2 are absorbing states because P<sub>11</sub> = 1 and P<sub>22</sub> = 1.
*   State 0 is a transient state because it has a non-zero probability of transitioning to either absorbing state 1 or 2, and once in those states, it can never return to state 0.

## 3. Probability of Eventually Being Absorbed from a Transient State

Let:

*   `b<sub>i</sub>`: The probability of eventually being absorbed, starting from transient state *i*.
*   `A`: The set of absorbing states.

Then, for a transient state *i*:

```
b<sub>i</sub> = Σ<sub>j∈A</sub> P<sub>ij</sub> + Σ<sub>j∉A</sub> P<sub>ij</sub> * b<sub>j</sub>
```

This equation states that the probability of being absorbed from state *i* is the sum of the probabilities of transitioning directly to an absorbing state plus the probabilities of transitioning to another transient state *j* multiplied by the probability of being absorbed from that transient state *j*.

**Solving for the Absorption Probabilities:**

This leads to a system of linear equations. For *n* transient states, you will have *n* equations.  Solve this system of equations to find the values of `b<sub>i</sub>` for each transient state *i*. Often, matrix algebra is used to solve this efficiently.

**Example:**

Using the transition matrix from the previous example:

```
     0    1    2
0  [0.5  0.3  0.2]
1  [0.0  1.0  0.0]
2  [0.0  0.0  1.0]
```

States 1 and 2 are absorbing. State 0 is transient.  Therefore:

`b<sub>0</sub> = P<sub>01</sub> + P<sub>02</sub> + P<sub>00</sub> * b<sub>0</sub>`
`b<sub>0</sub> = 0.3 + 0.2 + 0.5 * b<sub>0</sub>`
`0.5 * b<sub>0</sub> = 0.5`
`b<sub>0</sub> = 1`

In this particular case, starting from state 0, it is *certain* that the process will eventually be absorbed (either into state 1 or state 2).  This is expected because there's no way to escape the set of states {0, 1, 2}.

**Partitioning the Transition Matrix**

For a Markov Chain with *r* transient states and *s* absorbing states, the transition matrix can be written in the following canonical form:

```
P = [ Q  R ]
    [ 0  I ]
```

Where:

*   **Q** is an *r x r* matrix representing the probabilities of transitioning between transient states.
*   **R** is an *r x s* matrix representing the probabilities of transitioning from transient states to absorbing states.
*   **0** is an *s x r* zero matrix.
*   **I** is an *s x s* identity matrix.

The matrix **B** where *B<sub>ij</sub>* is the probability of being absorbed in state *j* starting from transient state *i* is given by:

**B = (I - Q)<sup>-1</sup>R**

## 4. Mean Time Spent in Transient States Before Absorption

### 4.1. Fundamental Matrix

The **fundamental matrix** (N) is a matrix that describes the expected number of times the process will be in each transient state before being absorbed, starting from a particular transient state.

It's calculated as:

```
N = (I - Q)<sup>-1</sup>
```

Where:

*   `I` is the identity matrix of size *r x r* (where *r* is the number of transient states).
*   `Q` is the submatrix of the transition matrix representing transitions between transient states (as defined in the partitioning above).
*   `(I - Q)<sup>-1</sup>` is the inverse of the matrix (I - Q).

The element `N<sub>ij</sub>` of the fundamental matrix represents the expected number of times the process will be in transient state *j*, starting from transient state *i*.

### 4.2. Expected Time Until Absorption

To find the expected number of steps until absorption, starting from a transient state *i*, you can sum the *i*-th row of the fundamental matrix *N*.  Let `t<sub>i</sub>` be the expected number of steps until absorption starting from state *i*.  Then:

```
t<sub>i</sub> = Σ<sub>j=1</sub><sup>r</sup> N<sub>ij</sub>
```

This can be computed more concisely using vector notation.  Let **t** be a column vector of expected absorption times, and **1** be a column vector of ones. Then:

**t = N1**

**Example:**

Using the transition matrix from the previous example:

```
     0    1    2
0  [0.5  0.3  0.2]
1  [0.0  1.0  0.0]
2  [0.0  0.0  1.0]
```

Q = [0.5] (a 1x1 matrix)
I = [1]   (a 1x1 matrix)

N = (I - Q)<sup>-1</sup> = (1 - 0.5)<sup>-1</sup> = (0.5)<sup>-1</sup> = 2

Therefore, the expected number of times the process will be in state 0, starting from state 0, is 2.

t = N1 = 2 * 1 = 2

Therefore, the expected number of steps until absorption, starting from state 0, is 2.

## 5. Applications

Transient states are relevant in various applications:

*   **Gambler's Ruin:**  The gambler's initial fortune is a transient state.  Eventually, they will either win (reach a target fortune) or lose (reach zero fortune).
*   **Queueing Theory:**  The number of customers in a queue can be modeled as a Markov Chain.  If the queue is unstable, the number of customers may increase without bound, making finite queue sizes transient.
*   **Population Dynamics:**  The size of a population can be modeled as a Markov Chain.  Extinction is often an absorbing state, and intermediate population sizes are transient.
*   **Web Page Ranking (PageRank):**  While the full PageRank calculation typically involves a strongly connected graph, simplified models can have transient states representing pages that are likely to eventually lose popularity.

## 6. Practice Questions and Exercises

**Question 1:**

Consider a Markov Chain with states {0, 1, 2, 3} and the following transition matrix:

```
     0    1    2    3
0  [0.6  0.4  0.0  0.0]
1  [0.0  0.8  0.2  0.0]
2  [0.0  0.0  1.0  0.0]
3  [0.0  0.0  0.0  1.0]
```

a) Identify the transient states and absorbing states.

b) Calculate the probability of eventually being absorbed into state 2, starting from state 0.

c) Calculate the expected number of times the process will be in state 1, starting from state 0.

d) Calculate the expected number of steps until absorption starting from state 0.

**Answer:**

a) **Transient States:** 0, 1. **Absorbing States:** 2, 3.

b)  Let `b<sub>02</sub>` be the probability of absorption into state 2 starting from state 0, and `b<sub>12</sub>` be the probability of absorption into state 2 starting from state 1. We have the following equations:

    `b<sub>02</sub> = 0*b<sub>02</sub> + 0*b<sub>03</sub> + 0.6*b<sub>02</sub> + 0.4*b<sub>12</sub>`
    `b<sub>12</sub> = 0*b<sub>02</sub> + 0*b<sub>03</sub> + 0.8*b<sub>12</sub> + 0.2*1`
Because 2 and 3 are absorbing states:
    `b<sub>22</sub> = 1`
    `b<sub>32</sub> = 0`
Therefore:
   `b<sub>02</sub> = 0.6*b<sub>02</sub> + 0.4*b<sub>12</sub>`
   `b<sub>12</sub> = 0.8*b<sub>12</sub> + 0.2`
Solving for b<sub>12</sub>:
    `0.2*b<sub>12</sub> = 0.2`
    `b<sub>12</sub> = 1`

Solving for b<sub>02</sub>:
   `b<sub>02</sub> = 0.6*b<sub>02</sub> + 0.4*1`
   `0.4*b<sub>02</sub> = 0.4`
   `b<sub>02</sub> = 1`

Therefore the probability of being absorbed into state 2 starting from state 0 is 1.

c)

Q =
```
[0.6 0.4]
[0.0 0.8]
```

I - Q =
```
[0.4 -0.4]
[0.0 0.2]
```

N = (I - Q)<sup>-1</sup> =

```
[2.5 5.0]
[0.0 5.0]
```

The element `N<sub>01</sub> = 5.0`, so the expected number of times the process will be in state 1, starting from state 0, is 5.

d) The vector of expected absorption times **t** is given by:

**t = N1**

```
[2.5 5.0] * [1] = [7.5]
[0.0 5.0]   [1]   [5.0]
```
Therefore starting from state 0, the expected number of steps until absorption is 7.5 steps.

**Question 2:**

A rat is placed in a maze with three rooms. Room 3 contains cheese and if the rat gets to Room 3 it eats the cheese and stays there. The rat moves between the rooms according to a Markov Chain. The transition probabilities are as follows:
P<sub>11</sub> = 0.0, P<sub>12</sub> = 0.5, P<sub>13</sub> = 0.5
P<sub>21</sub> = 0.5, P<sub>22</sub> = 0.0, P<sub>23</sub> = 0.5
P<sub>31</sub> = 0.0, P<sub>32</sub> = 0.0, P<sub>33</sub> = 1.0
a) What states are transient?
b) What states are absorbing?
c) If the rat starts in Room 1, what is the probability that it ends up in Room 3 (i.e. eats the cheese)?

**Answer:**

a) Transient: Room 1, Room 2
b) Absorbing: Room 3
c) Both Rooms 1 and 2 are transient and lead only to Room 3 (absorbing state), or each other (transient). So eventually the rat will get to Room 3. The probability is 1.0

## 7. Important Points to Remember

*   **Transient states are not necessarily undesirable.** They can be a necessary step in a process leading to a desired outcome.
*   **The fundamental matrix is a powerful tool** for analyzing the behavior of Markov Chains with transient states.
*   **Absorption probabilities and expected times** provide valuable insights into the long-term dynamics of the system.
*   **Careful analysis of the transition diagram and matrix** is crucial for identifying transient states and understanding their role in the Markov Chain.

## Conclusion

Understanding transient states is essential for analyzing and modeling various systems using Markov Chains. By mastering the concepts and techniques presented in this module, you will be well-equipped to tackle real-world problems involving transient states in Markov Chains. Remember to practice identifying transient states, calculating absorption probabilities, and using the fundamental matrix to gain a deeper understanding of their behavior.
