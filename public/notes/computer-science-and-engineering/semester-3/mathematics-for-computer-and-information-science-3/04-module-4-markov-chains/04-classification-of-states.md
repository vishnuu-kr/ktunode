---
title: "Classification of States"
subject: "MATHEMATICS FOR COMPUTER AND INFORMATION SCIENCE-3"
module: "Module 4: Markov Chains"
branch: "Computer Science and Engineering"
semester: 3
topicId: "684162750fc9aa1fdbc8ab62"
status: "completed"
scrapedAt: "2026-05-20T16:26:13.572Z"
---
# Module 4: Markov Chains - Classification of States

**Subject:** MATHEMATICS FOR COMPUTER AND INFORMATION SCIENCE-3
**Module:** 4: Markov Chains
**Topic:** Classification of States

## Learning Outcomes:

Upon completion of this topic, you should be able to:

*   Define and identify the different types of states in a Markov Chain: recurrent, transient, absorbing, periodic, and communicating classes.
*   Determine whether a state is recurrent or transient.
*   Identify communicating classes within a Markov Chain and determine if they are closed.
*   Calculate the period of a state.
*   Classify states based on their properties and understand the implications for the long-term behavior of the Markov Chain.

## 1. Key Concepts and Definitions

*   **Markov Chain:** A stochastic process with the Markov property, meaning the future state depends only on the present state, not on the past states.  Formally, P(X<sub>n+1</sub> = j | X<sub>n</sub> = i, X<sub>n-1</sub> = i<sub>n-1</sub>, ..., X<sub>0</sub> = i<sub>0</sub>) = P(X<sub>n+1</sub> = j | X<sub>n</sub> = i).

*   **State Space (S):** The set of all possible states the Markov chain can be in.  We'll assume S is finite or countably infinite.

*   **Transition Probability (P<sub>ij</sub>):** The probability of transitioning from state *i* to state *j* in one step.  P<sub>ij</sub> = P(X<sub>n+1</sub> = j | X<sub>n</sub> = i).

*   **n-step Transition Probability (P<sub>ij</sub><sup>(n)</sup>):** The probability of transitioning from state *i* to state *j* in *n* steps.  P<sub>ij</sub><sup>(n)</sup> = P(X<sub>n+n'</sub> = j | X<sub>n'</sub> = i). Can be calculated using the transition matrix *P* raised to the power of *n*:  P<sup>(n)</sup>.

*   **Reachability:** State *j* is reachable from state *i* if there exists an *n* ≥ 0 such that P<sub>ij</sub><sup>(n)</sup> > 0. In other words, it's possible to get from state *i* to state *j* in some number of steps.  Note:  P<sub>ii</sub><sup>(0)</sup> = 1.

*   **Communication:** State *i* and state *j* communicate if state *j* is reachable from state *i* AND state *i* is reachable from state *j*. We denote this as i ↔ j. Communication is an equivalence relation (reflexive, symmetric, and transitive).

*   **Communicating Class:** A set of states where every state in the set communicates with every other state in the set. These classes are mutually exclusive (no state belongs to two different communicating classes).

*   **Closed Communicating Class:** A communicating class *C* is closed if, once the Markov chain enters *C*, it can never leave. That is, if *i* ∈ *C* and *j* ∉ *C*, then P<sub>ij</sub> = 0.

*   **First Passage Time (f<sub>ij</sub><sup>(n)</sup>):** The probability that the *first* time the chain visits state *j* is after *n* steps, starting from state *i*.

*   **Probability of Ever Visiting State j (f<sub>ij</sub>):** The probability that, starting in state *i*, the chain will ever visit state *j*. It's the sum of the first passage time probabilities for all n:  f<sub>ij</sub> = ∑<sub>n=1</sub><sup>∞</sup> f<sub>ij</sub><sup>(n)</sup>.

*   **Recurrent State:** State *i* is recurrent (or persistent) if, starting from state *i*, the chain is certain to return to *i* eventually.  Formally, f<sub>ii</sub> = 1.

*   **Transient State:** State *i* is transient if, starting from state *i*, there is a non-zero probability that the chain will never return to *i*. Formally, f<sub>ii</sub> < 1.

*   **Absorbing State:** State *i* is absorbing if, once the chain enters state *i*, it can never leave. Formally, P<sub>ii</sub> = 1. Absorbing states are always recurrent.

*   **Period of a State (d(i)):**  If state *i* is recurrent, the period d(i) is the greatest common divisor (GCD) of the set of all *n* such that P<sub>ii</sub><sup>(n)</sup> > 0. If a state *i* is not recurrent, the period is undefined.  The period is concerned with the recurrence times for a given state.

*   **Aperiodic State:** A recurrent state *i* is aperiodic if d(i) = 1. In other words, there's no regular pattern to when the chain returns to state *i*.

*   **Ergodic State:** A state that is recurrent, aperiodic, and has a finite mean recurrence time. (Mean recurrence time is beyond the scope of these notes but relevant for completeness)

## 2. Determining Recurrence vs. Transience

*   **Method 1: Using f<sub>ii</sub>:** Calculate f<sub>ii</sub>. If f<sub>ii</sub> = 1, state *i* is recurrent. If f<sub>ii</sub> < 1, state *i* is transient.  Calculating f<sub>ii</sub> directly can be complex.

*   **Method 2: Sum of n-step Probabilities:**  State *i* is recurrent if and only if ∑<sub>n=1</sub><sup>∞</sup> P<sub>ii</sub><sup>(n)</sup> = ∞.  State *i* is transient if and only if ∑<sub>n=1</sub><sup>∞</sup> P<sub>ii</sub><sup>(n)</sup> < ∞. This method is often more practical to implement.  Note that the sum can be approximated by summing to a large value of *n*.

*   **Key Property of Finite State Markov Chains:**  In a finite-state Markov chain, at least one state must be recurrent. If a state is transient, the chain will eventually leave it and never return. Since there are only a finite number of states, the chain must eventually stay in a recurrent state (or recurrent communicating class).

## 3. Identifying Communicating Classes and Closed Classes

*   **Algorithm for Finding Communicating Classes:**
    1.  Start with a state, say *i*.
    2.  Find all states *j* such that *i* ↔ *j*.  This forms a communicating class.
    3.  Repeat for any remaining states not yet assigned to a class.
    4.  The result is a partition of the state space into communicating classes.

*   **Checking if a Communicating Class is Closed:** For each state *i* in the class *C*, check if ∑<sub>j∈C</sub> P<sub>ij</sub> = 1. If this holds for all states in *C*, then *C* is a closed communicating class.  Equivalently, P<sub>ij</sub> = 0 for all *i* ∈ *C* and *j* ∉ *C*.

## 4. Calculating the Period of a State

*   **Algorithm:**
    1.  Find all *n* such that P<sub>ii</sub><sup>(n)</sup> > 0.
    2.  Calculate the GCD of the set of these *n* values.  This GCD is the period d(i).

*   **Important Property:** If *i* and *j* are in the same communicating class, then d(i) = d(j).  Therefore, the period is a property of the entire communicating class, not just the individual state.

## 5. Examples

**Example 1: Recurrent vs. Transient**

Consider a Markov Chain with states {1, 2} and the following transition matrix:

```
P = | 0.5  0.5 |
    | 0    1   |
```

*   State 2 is absorbing (P<sub>22</sub> = 1), so it's recurrent.

*   For state 1, we need to calculate ∑<sub>n=1</sub><sup>∞</sup> P<sub>11</sub><sup>(n)</sup>.

    *   P<sub>11</sub><sup>(1)</sup> = 0.5
    *   P<sub>11</sub><sup>(2)</sup> = 0.25
    *   P<sub>11</sub><sup>(3)</sup> = 0.125
    *   ...
    *   P<sub>11</sub><sup>(n)</sup> = (0.5)<sup>n</sup>

    ∑<sub>n=1</sub><sup>∞</sup> P<sub>11</sub><sup>(n)</sup> = ∑<sub>n=1</sub><sup>∞</sup> (0.5)<sup>n</sup> = 0.5 / (1 - 0.5) = 1 < ∞.  Therefore, state 1 is transient.  Eventually, the chain will leave state 1 and enter state 2, never to return to state 1.

**Example 2: Communicating Classes and Closed Classes**

Consider a Markov Chain with states {1, 2, 3, 4} and the following transition matrix:

```
P = | 0.3  0.7  0    0   |
    | 0.5  0.5  0    0   |
    | 0    0    0.6  0.4 |
    | 0    0    0.8  0.2 |
```

*   States 1 and 2 communicate (1 ↔ 2): P<sub>12</sub> > 0 and P<sub>21</sub> > 0.
*   States 3 and 4 communicate (3 ↔ 4): P<sub>34</sub> > 0 and P<sub>43</sub> > 0.
*   Therefore, we have two communicating classes: C<sub>1</sub> = {1, 2} and C<sub>2</sub> = {3, 4}.

*   C<sub>1</sub> = {1, 2} is a closed communicating class because P<sub>13</sub> = P<sub>14</sub> = P<sub>23</sub> = P<sub>24</sub> = 0.  Once the chain enters either state 1 or 2, it can never leave that class.

*   C<sub>2</sub> = {3, 4} is also a closed communicating class because P<sub>31</sub> = P<sub>32</sub> = P<sub>41</sub> = P<sub>42</sub> = 0.

**Example 3: Period of a State**

Consider a Markov Chain with state {0,1,2} and the following transition matrix:

```
P = | 0  1  0 |
    | 0  0  1 |
    | 1  0  0 |
```

* Let's calculate P<sub>00</sub><sup>(n)</sup>
    * P<sub>00</sub><sup>(1)</sup> = 0
    * P<sub>00</sub><sup>(2)</sup> = 0
    * P<sub>00</sub><sup>(3)</sup> = 1
    * P<sub>00</sub><sup>(4)</sup> = 0
    * P<sub>00</sub><sup>(5)</sup> = 0
    * P<sub>00</sub><sup>(6)</sup> = 1
* It follows that P<sub>00</sub><sup>(n)</sup> > 0 when n = 3,6,9,... The greatest common divisor of this set is 3, so d(0) = 3. The period of state 0 is 3.
* All states communicate with each other. Therefore d(0) = d(1) = d(2) = 3

## 6. Practice Questions/Exercises

**Question 1:**

A Markov chain has states {1, 2, 3} and the following transition matrix:

```
P = | 0.6  0.4  0   |
    | 0    0.8  0.2 |
    | 0.3  0    0.7 |
```

a) Identify the communicating classes.
b) Are any of the communicating classes closed?
c) Are any states recurrent? Are any transient?

**Question 2:**

A Markov chain has the following transition matrix:

```
P = | 1  0  0 |
    | 0.3 0.6 0.1 |
    | 0.2 0.2 0.6 |
```

a) Identify the absorbing state(s).
b) Identify the communicating classes.
c) Determine if each state is recurrent or transient.

**Question 3:**

A Markov chain has the following transition matrix:

```
P = | 0  0  1 |
    | 0  1  0 |
    | 1  0  0 |
```

Determine the period of each state in the chain.

**Answers:**

**Question 1:**

a) Communicating classes: {1, 2, 3} (All states communicate).
b) No. It's one large communicating class and, therefore, closed.
c) All states are recurrent. Since there are a finite number of states, and they all communicate, none can be transient.

**Question 2:**

a) Absorbing state: State 1 (P<sub>11</sub> = 1)
b) Communicating classes: {1}, {2}, {3}  (each state only communicates with itself).
c) State 1: Recurrent (absorbing). State 2: Transient. State 3: Transient.

**Question 3:**

* For state 0: P<sub>00</sub><sup>(1)</sup> = 0, P<sub>00</sub><sup>(2)</sup> = 0, P<sub>00</sub><sup>(3)</sup> = 1, P<sub>00</sub><sup>(4)</sup> = 0. The non-zero probabilities occur at multiples of 3. Therefore d(0) = 3
* For state 1: P<sub>11</sub> = 1, thus d(1) = 1
* For state 2: P<sub>22</sub><sup>(1)</sup> = 0, P<sub>22</sub><sup>(2)</sup> = 0, P<sub>22</sub><sup>(3)</sup> = 1, P<sub>22</sub><sup>(4)</sup> = 0. The non-zero probabilities occur at multiples of 3. Therefore d(2) = 3

## 7. Important Points to Remember

*   Understanding the classification of states is crucial for analyzing the long-term behavior of a Markov Chain.
*   Recurrent states "trap" the chain in the long run (in finite chains).  Transient states are visited only a finite number of times.
*   Absorbing states are a special case of recurrent states. Once entered, the chain never leaves.
*   The period of a state is a characteristic of its recurrence and indicates a cyclical pattern in the chain's return to that state.
*   Communicating classes provide valuable insight into how the state space is structured. Closed classes are particularly important as they define regions of the state space that the chain cannot escape from.
*   When dealing with finite state spaces, at least one state *must* be recurrent.
