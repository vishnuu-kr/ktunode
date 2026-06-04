---
title: "Recurrent state"
subject: "MATHEMATICS FOR COMPUTER AND INFORMATION SCIENCE-3"
module: "Module 4: Markov Chains"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ab64"
status: "completed"
scrapedAt: "2026-05-20T16:26:14.996Z"
---
## Mathematics for Computer and Information Science - 3
### Module 4: Markov Chains
#### Topic: Recurrent States

**Learning Outcomes:**

*   Understand the definition of a recurrent state in a Markov chain.
*   Determine if a state is recurrent given a transition matrix or state diagram.
*   Calculate the probability of ever returning to a given state.
*   Distinguish between recurrent and transient states.
*   Apply the concept of recurrence to solve problems related to long-term behavior of Markov chains.

---

**1. Key Concepts and Definitions**

*   **Markov Chain:** A stochastic process that satisfies the Markov property, meaning the future state depends only on the present state, not on the past.  Formally, P(X<sub>n+1</sub> = j | X<sub>0</sub> = i<sub>0</sub>, X<sub>1</sub> = i<sub>1</sub>, ..., X<sub>n</sub> = i<sub>n</sub>) = P(X<sub>n+1</sub> = j | X<sub>n</sub> = i<sub>n</sub>).

*   **State Space (S):** The set of all possible states the Markov chain can be in.

*   **Transition Matrix (P):** A matrix where P<sub>ij</sub> represents the probability of transitioning from state *i* to state *j* in one step.  Each row of P sums to 1.

*   **n-step Transition Probability (P<sub>ij</sub><sup>(n)</sup>):** The probability of transitioning from state *i* to state *j* in *n* steps. This can be calculated as the (i, j) element of the matrix P<sup>n</sup>.

*   **First Passage Time (f<sub>ij</sub>):** The number of steps it takes for the chain, starting from state *i*, to enter state *j* for the first time.

*   **Probability of Ever Visiting State j Starting from State i (f<sub>ij</sub>):** The probability that the Markov chain will ever enter state *j* starting from state *i*.  Denoted by f<sub>ij</sub> = P(T<sub>ij</sub> < ∞ | X<sub>0</sub> = i), where T<sub>ij</sub> is the first passage time from state i to state j.

*   **Recurrent State (i):** A state *i* is recurrent if, starting from state *i*, the probability of eventually returning to state *i* is 1.  In other words, if  f<sub>ii</sub> = 1.  This means P(T<sub>ii</sub> < ∞ | X<sub>0</sub> = i) = 1.  Essentially, if you start at *i*, you are guaranteed to eventually return to *i*.

*   **Transient State (i):** A state *i* is transient if, starting from state *i*, there is a positive probability that the chain will *never* return to state *i*.  In other words, if f<sub>ii</sub> < 1.

**2. Determining Recurrence**

There are several ways to determine if a state is recurrent:

*   **Using First Passage Probabilities (f<sub>ii</sub>):** The most direct method is to calculate f<sub>ii</sub>. If f<sub>ii</sub> = 1, the state is recurrent.  If f<sub>ii</sub> < 1, the state is transient.

*   **Using Infinite Sum of Transition Probabilities:** A state *i* is recurrent if and only if the sum of the *n*-step transition probabilities from *i* to *i* diverges to infinity:
    ∑<sub>n=1</sub><sup>∞</sup> P<sub>ii</sub><sup>(n)</sup> = ∞

*   **Network Analysis:**  If a state *i* can lead to a state *j* (P<sub>ij</sub> > 0), and *j* can lead back to *i* (P<sub>ji</sub> > 0), and *j* is recurrent, then *i* is also recurrent.

*   **Absorption:** If a state is *absorbing* (P<sub>ii</sub> = 1), then it is recurrent by definition.

**3. Calculating the Probability of Returning (f<sub>ii</sub>)**

To calculate f<sub>ii</sub>, we can use the following relationship:

*   f<sub>ii</sub> = ∑<sub>k=1</sub><sup>∞</sup> f<sub>ii</sub><sup>(k)</sup>

    Where f<sub>ii</sub><sup>(k)</sup> is the probability that the first return to state *i* occurs at time *k*.

*   Alternatively, we can use a system of equations based on the one-step transition probabilities.  For example:

    f<sub>ii</sub> = P<sub>ii</sub> + ∑<sub>j≠i</sub> P<sub>ij</sub> * f<sub>ji</sub>

    This equation states that the probability of returning to *i* is the probability of returning in one step (P<sub>ii</sub>) plus the sum over all other states *j* of the probability of transitioning to *j* (P<sub>ij</sub>) times the probability of ever returning to *i* from *j* (f<sub>ji</sub>).  If the state space is relatively small, these equations can be solved.

**4. Examples**

**Example 1: A Simple Two-State Markov Chain**

Consider a Markov chain with two states, 0 and 1, and the following transition matrix:

P =  [[0.3, 0.7],
      [0.6, 0.4]]

*   **Is state 0 recurrent?**

    We need to determine if f<sub>00</sub> = 1.  We can set up the equation:

    f<sub>00</sub> = P<sub>00</sub> + P<sub>01</sub> * f<sub>10</sub>
    f<sub>00</sub> = 0.3 + 0.7 * f<sub>10</sub>

    Similarly:

    f<sub>10</sub> = P<sub>10</sub> + P<sub>11</sub> * f<sub>10</sub>
    f<sub>10</sub> = 0.6 + 0.4 * f<sub>00</sub>

    Substituting the second equation into the first:

    f<sub>00</sub> = 0.3 + 0.7 * (0.6 + 0.4 * f<sub>00</sub>)
    f<sub>00</sub> = 0.3 + 0.42 + 0.28 * f<sub>00</sub>
    0.72 * f<sub>00</sub> = 0.72
    f<sub>00</sub> = 1

    Therefore, state 0 is recurrent.

*   **Is state 1 recurrent?** A similar calculation will show that f<sub>11</sub> = 1. So state 1 is also recurrent.

**Example 2: A Three-State Markov Chain**

Consider a Markov chain with three states, 0, 1, and 2, and the following transition matrix:

P =  [[1, 0, 0],
      [0.2, 0.5, 0.3],
      [0, 0, 1]]

*   **Is state 0 recurrent?** Yes, because P<sub>00</sub> = 1 (it's an absorbing state). f<sub>00</sub> = 1.

*   **Is state 1 recurrent?**

    f<sub>11</sub> = P<sub>11</sub> + P<sub>10</sub> * f<sub>01</sub> + P<sub>12</sub> * f<sub>21</sub>
    f<sub>11</sub> = 0.5 + 0.2 * f<sub>01</sub> + 0.3 * f<sub>21</sub>

    Since state 0 is absorbing, f<sub>01</sub> = 0.
    Since state 2 is absorbing, f<sub>21</sub> = 0.

    Therefore, f<sub>11</sub> = 0.5 < 1. State 1 is transient.

*   **Is state 2 recurrent?** Yes, because P<sub>22</sub> = 1 (it's an absorbing state). f<sub>22</sub> = 1.

**Example 3: Using the infinite sum of transition probabilities**

Consider the transition matrix:

P = [[0, 1], [1, 0]]

This matrix represents a chain that alternates between state 0 and state 1.

P<sup>2</sup> = [[1, 0], [0, 1]]
P<sup>3</sup> = [[0, 1], [1, 0]]
P<sup>4</sup> = [[1, 0], [0, 1]]

In general, P<sup>2n</sup> = [[1, 0], [0, 1]] and P<sup>2n+1</sup> = [[0, 1], [1, 0]].

Then, consider state 0:

∑<sub>n=1</sub><sup>∞</sup> P<sub>00</sub><sup>(n)</sup> = P<sub>00</sub><sup>(1)</sup> + P<sub>00</sub><sup>(2)</sup> + P<sub>00</sub><sup>(3)</sup> + ... = 0 + 1 + 0 + 1 + ... = ∞

Since the sum diverges to infinity, state 0 is recurrent.  Similarly, state 1 is also recurrent.

**5. Practice Questions/Exercises**

**Question 1:**

Given the transition matrix:

P =  [[0.2, 0.8],
      [0.5, 0.5]]

Determine if state 0 is recurrent or transient.

**Answer:**

Following the steps from Example 1:

f<sub>00</sub> = 0.2 + 0.8 * f<sub>10</sub>
f<sub>10</sub> = 0.5 + 0.5 * f<sub>00</sub>

Substituting:

f<sub>00</sub> = 0.2 + 0.8 * (0.5 + 0.5 * f<sub>00</sub>)
f<sub>00</sub> = 0.2 + 0.4 + 0.4 * f<sub>00</sub>
0.6 * f<sub>00</sub> = 0.6
f<sub>00</sub> = 1

State 0 is recurrent.

**Question 2:**

Given the transition matrix:

P =  [[0.7, 0.3, 0],
      [0, 0.6, 0.4],
      [0, 0, 1]]

Which states are recurrent, and which are transient?

**Answer:**

*   State 0: can never return to state 0 from state 2, and can only return from state 1, which has a probability of less than 1 of returning, so f<sub>00</sub> < 1.  Transient.
*   State 1:  can't return from state 2, so f<sub>11</sub> < 1. Transient.
*   State 2: Absorbing state (P<sub>22</sub> = 1), so f<sub>22</sub> = 1. Recurrent.

**Question 3:**

A gambler starts with $1.  At each step, he bets $1.  If he wins, he gains $1; if he loses, he loses $1.  He stops playing when he has either $0 or $3.  Model this as a Markov chain with states 0, 1, 2, and 3, representing the amount of money the gambler has. Assume the probability of winning each bet is 0.4 and the probability of losing is 0.6.

a) Write down the transition matrix.
b) Identify the recurrent and transient states.

**Answer:**

a) Transition Matrix:

P =  [[1, 0, 0, 0],
      [0.6, 0, 0.4, 0],
      [0, 0.6, 0, 0.4],
      [0, 0, 0, 1]]

b) Recurrent States: 0 and 3 (absorbing states).
   Transient States: 1 and 2.

**6. Important Points to Remember**

*   Recurrence is a property of a *state*, not of the entire Markov chain.
*   An absorbing state is always recurrent.
*   If a state *i* can lead to a transient state *j*, then *i* must also be transient. This is because if *i* were recurrent, it would eventually return to *i*, and therefore eventually return to *j* infinitely many times, contradicting *j* being transient.
*   In a finite-state Markov chain, not all states can be transient.  There must be at least one recurrent state.
*   Understanding recurrence is crucial for analyzing the long-term behavior of Markov chains.  Recurrent states often represent equilibrium or steady-state conditions. Transient states are those that the system will eventually leave and never return to.
