---
title: "Correlated equilibrium (CE) -  Computing CE"
subject: "GAME THEORY AND MECHANISM DESIGN"
module: "Module 2: Correlated equilibrium (CE) "
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c5ba"
status: "completed"
scrapedAt: "2026-05-20T17:06:32.676Z"
---
# Game Theory and Mechanism Design: Module 2 - Correlated Equilibrium (CE) - Computing CE

This module delves into the concept of Correlated Equilibrium (CE) and, specifically in this topic, explores the methods for computing CE in game theory.

## Learning Outcomes:

By the end of this topic, you should be able to:

*   Understand the concept of a correlated equilibrium.
*   Formulate the problem of finding a correlated equilibrium as a linear program.
*   Identify the constraints and objective function for computing CE.
*   Apply linear programming techniques to find correlated equilibria in simple games.
*   Recognize the relationship between correlated equilibria and Nash equilibria.

---

## 1. Correlated Equilibrium (CE): A Recap

Before diving into computation, let's briefly recap what a correlated equilibrium is.

**Definition:** A **correlated equilibrium** is a probability distribution over joint strategy profiles such that if a mediator (or "correlation device") randomly draws a joint strategy profile according to this distribution and privately recommends each player their respective strategy, no player has an incentive to deviate from their recommended strategy, *given the recommendations of other players*.

**Key Idea:** The "correlation" arises from a trusted third party or a common signal that provides recommendations to players. Players trust this device and follow its recommendations. The distribution over joint actions can be such that players' beliefs about others' actions are correlated, leading to strategies that might not be best responses in an independent setting (like Nash equilibrium).

**Key Difference from Nash Equilibrium:** In Nash equilibrium, players choose their strategies independently. In correlated equilibrium, players' strategies are recommended by a common device, and this coordination can lead to outcomes that are not Nash equilibria.

---

## 2. Computing Correlated Equilibrium: The Linear Programming Approach

The core insight for computing correlated equilibria is that the conditions defining a CE can be expressed as a set of linear inequalities. This allows us to use linear programming (LP) to find such distributions.

### 2.1. Representing Joint Strategy Profiles and Probabilities

*   **Game:** Consider a finite, normal-form game with $N$ players. Let $S_i$ be the set of pure strategies for player $i$, and $|S_i| = n_i$.
*   **Joint Strategy Profile:** A joint strategy profile is an element $s = (s_1, s_2, \dots, s_N)$, where $s_i \in S_i$ for each player $i$.
*   **Space of Joint Strategy Profiles:** The set of all possible joint strategy profiles is $S = S_1 \times S_2 \times \dots \times S_N$. The total number of pure strategy profiles is $|S| = n_1 \times n_2 \times \dots \times n_N$.
*   **Probability Distribution:** A correlated equilibrium is defined by a probability distribution $p$ over $S$. We can represent this distribution as a vector of probabilities, where $p_s$ is the probability of joint strategy profile $s$ occurring.

### 2.2. The Incentive Compatibility Constraints

The definition of CE translates into specific constraints for each player and each of their pure strategies.

**For Player $i$ and a pure strategy $s_i \in S_i$:**

If player $i$ is recommended to play $s_i$, they should not benefit from unilaterally deviating to another pure strategy $s'_i \in S_i$ ($s'_i \neq s_i$).

Let $p(s) = p_{s_1, s_2, \dots, s_N}$ be the probability of the joint strategy profile $s = (s_1, \dots, s_N)$.
Let $u_i(s)$ be the utility for player $i$ when the joint strategy profile $s$ is played.

**The core constraint for player $i$ and recommended strategy $s_i$ is:**

The expected utility of playing $s_i$ when recommended $s_i$ must be greater than or equal to the expected utility of deviating to $s'_i$ when recommended $s_i$.

$$
\sum_{s_{-i} \in S_{-i}} p(s_i, s_{-i}) u_i(s_i, s_{-i}) \ge \sum_{s_{-i} \in S_{-i}} p(s_i, s_{-i}) u_i(s'_i, s_{-i}) \quad \forall i \in \{1, \dots, N\}, \forall s_i \in S_i, \forall s'_i \in S_i, s'_i \neq s_i
$$

where $s_{-i}$ denotes a strategy profile of all players except player $i$, and $p(s_i, s_{-i})$ is the probability of player $i$ playing $s_i$ and other players playing $s_{-i}$. This can be written as:

$$
\sum_{s_{-i} \in S_{-i}} p(s_i, s_{-i}) u_i(s_i, s_{-i}) \ge \sum_{s_{-i} \in S_{-i}} p(s_i, s_{-i}) u_i(s'_i, s_{-i})
$$

**Rewriting in terms of individual $p_s$ values:**

The probability $p(s_i, s_{-i})$ is actually the sum of probabilities of all joint profiles where player $i$ plays $s_i$ and others play $s_{-i}$.
Let's simplify this by considering the probability of being recommended $s_i$. This is given by $\sum_{s_{-i} \in S_{-i}} p(s_i, s_{-i})$. Let's call this $P(s_i)$. The conditional probability of $s_{-i}$ given $s_i$ is $P(s_{-i} | s_i) = \frac{p(s_i, s_{-i})}{P(s_i)}$.

The constraint becomes:
$$
\sum_{s_{-i} \in S_{-i}} P(s_{-i} | s_i) u_i(s_i, s_{-i}) \ge \sum_{s_{-i} \in S_{-i}} P(s_{-i} | s_i) u_i(s'_i, s_{-i})
$$

Multiplying by $P(s_i)$ on both sides (assuming $P(s_i) > 0$):
$$
\sum_{s_{-i} \in S_{-i}} p(s_i, s_{-i}) u_i(s_i, s_{-i}) \ge \sum_{s_{-i} \in S_{-i}} p(s_i, s_{-i}) u_i(s'_i, s_{-i})
$$

These are the **incentive compatibility constraints**. For each player $i$, and for each pair of strategies $(s_i, s'_i)$, we have one such constraint.

**Number of Constraints:** For a game with $N$ players, where each player $i$ has $n_i$ strategies, there are $N \times n_i \times (n_i - 1)$ such constraints.

### 2.3. The Probability Constraints

The probabilities themselves must satisfy basic properties:

1.  **Non-negativity:** $p_s \ge 0$ for all $s \in S$.
2.  **Sum to One:** $\sum_{s \in S} p_s = 1$.

### 2.4. Formulating the Linear Program

We can now formulate the problem of finding a correlated equilibrium as a linear program.

**Variables:** The variables are the probabilities $p_s$ for each joint strategy profile $s \in S$.

**Objective Function:** There can be multiple objective functions depending on what we want to optimize. A common objective is to maximize the sum of players' utilities (social welfare):

$$
\text{Maximize } \sum_{s \in S} p_s \sum_{i=1}^N u_i(s)
$$

Other possible objectives include maximizing a specific player's utility, or finding *any* correlated equilibrium (in which case, the objective function can be trivial, e.g., maximize 0).

**Constraints:**

1.  **Incentive Compatibility Constraints:**
    $$
    \sum_{s_{-i} \in S_{-i}} p(s_i, s_{-i}) u_i(s_i, s_{-i}) - \sum_{s_{-i} \in S_{-i}} p(s_i, s_{-i}) u_i(s'_i, s_{-i}) \ge 0 \quad \forall i, \forall s_i, \forall s'_i \neq s_i
    $$
    This can be rewritten as:
    $$
    \sum_{s \in S} p_s \left[ u_i(s_i, s_{-i}) - u_i(s'_i, s_{-i}) \right] \ge 0 \quad \forall i, \forall s_i, \forall s'_i \neq s_i
    $$
    where $s=(s_i, s_{-i})$ and $(s'_i, s_{-i})$ are the relevant joint profiles.

2.  **Non-negativity Constraints:**
    $$
    p_s \ge 0 \quad \forall s \in S
    $$

3.  **Sum to One Constraint:**
    $$
    \sum_{s \in S} p_s = 1
    $$

**The LP Problem:**

$$
\begin{align*} \label{eq:1} \text{Maximize } & \sum_{s \in S} p_s \sum_{i=1}^N u_i(s) \\ \text{Subject to: } & \sum_{s \in S} p_s \left[ u_i(s_i, s_{-i}) - u_i(s'_i, s_{-i}) \right] \ge 0 \quad \forall i \in \{1, \dots, N\}, \forall s_i \in S_i, \forall s'_i \in S_i, s'_i \neq s_i \\ & \sum_{s \in S} p_s = 1 \\ & p_s \ge 0 \quad \forall s \in S \end{align*}
$$

**Existence of CE:** A correlated equilibrium always exists in any finite game. This is guaranteed by the fact that the set of feasible solutions to the LP is non-empty (e.g., any Nash equilibrium can be represented as a CE). The LP formulation thus always has an optimal solution.

---

## 3. Example: The Battle of the Sexes

Let's consider the Battle of the Sexes game:

|        | Ballet (B) | Football (F) |
| :----- | :--------- | :----------- |
| Ballet (B) | (2, 1)     | (0, 0)       |
| Football (F) | (0, 0)     | (1, 2)       |

Players: Player 1 (Row), Player 2 (Column)
Strategies: $S_1 = \{B, F\}$, $S_2 = \{B, F\}$
Joint strategy profiles: (B,B), (B,F), (F,B), (F,F)
Utilities: $u_1(B,B)=2, u_2(B,B)=1$; $u_1(B,F)=0, u_2(B,F)=0$; $u_1(F,B)=0, u_2(F,B)=0$; $u_1(F,F)=1, u_2(F,F)=2$.

Let the probabilities of the joint strategy profiles be:
$p_{BB}, p_{BF}, p_{FB}, p_{FF}$.

**Objective: Maximize social welfare (sum of utilities):**
Maximize $2p_{BB} + 0p_{BF} + 0p_{FB} + 1p_{FF} = 2p_{BB} + p_{FF}$.

**Constraints:**

1.  **Player 1's incentive compatibility:**
    *   **If recommended B, should not deviate to F:**
        $p_{BB} u_1(B,B) + p_{BF} u_1(B,F) \ge p_{BB} u_1(F,B) + p_{BF} u_1(F,F)$
        $p_{BB}(2) + p_{BF}(0) \ge p_{BB}(0) + p_{BF}(1)$
        $2p_{BB} \ge p_{BF}$
    *   **If recommended F, should not deviate to B:**
        $p_{FB} u_1(F,B) + p_{FF} u_1(F,F) \ge p_{FB} u_1(B,B) + p_{FF} u_1(B,F)$
        $p_{FB}(0) + p_{FF}(1) \ge p_{FB}(2) + p_{FF}(0)$
        $p_{FF} \ge 2p_{FB}$

2.  **Player 2's incentive compatibility:**
    *   **If recommended B, should not deviate to F:**
        $p_{BB} u_2(B,B) + p_{FB} u_2(F,B) \ge p_{BB} u_2(B,F) + p_{FB} u_2(F,F)$
        $p_{BB}(1) + p_{FB}(0) \ge p_{BB}(0) + p_{FB}(2)$
        $p_{BB} \ge 2p_{FB}$
    *   **If recommended F, should not deviate to B:**
        $p_{BF} u_2(B,F) + p_{FF} u_2(F,F) \ge p_{BF} u_2(B,B) + p_{FF} u_2(F,B)$
        $p_{BF}(0) + p_{FF}(2) \ge p_{BF}(1) + p_{FF}(0)$
        $2p_{FF} \ge p_{BF}$

3.  **Probability Constraints:**
    *   $p_{BB} \ge 0, p_{BF} \ge 0, p_{FB} \ge 0, p_{FF} \ge 0$
    *   $p_{BB} + p_{BF} + p_{FB} + p_{FF} = 1$

**The Linear Program:**

$$
\begin{align*} \text{Maximize } & 2p_{BB} + p_{FF} \\ \text{Subject to: } & 2p_{BB} - p_{BF} \ge 0 \\ & p_{FF} - 2p_{FB} \ge 0 \\ & p_{BB} - 2p_{FB} \ge 0 \\ & 2p_{FF} - p_{BF} \ge 0 \\ & p_{BB} + p_{BF} + p_{FB} + p_{FF} = 1 \\ & p_{BB}, p_{BF}, p_{FB}, p_{FF} \ge 0 \end{align*}
$$

**Solving this LP:**

Let's analyze the constraints. From $2p_{BB} \ge p_{BF}$ and $2p_{FF} \ge p_{BF}$, we know $p_{BF}$ can't be too large if $p_{BB}$ and $p_{FF}$ are small.
From $p_{BB} \ge 2p_{FB}$ and $p_{FF} \ge 2p_{FB}$, we see $p_{FB}$ is constrained by $p_{BB}$ and $p_{FF}$.

Consider the Nash Equilibria:
*   (B,B) with probability 1. Social welfare = 3.
*   (F,F) with probability 1. Social welfare = 3.
*   A mixed strategy NE where Player 1 plays B with prob $\frac{2}{3}$ and F with prob $\frac{1}{3}$, and Player 2 plays B with prob $\frac{1}{3}$ and F with prob $\frac{2}{3}$.
    *   $p_{BB} = \frac{2}{3} \times \frac{1}{3} = \frac{2}{9}$
    *   $p_{BF} = \frac{2}{3} \times \frac{2}{3} = \frac{4}{9}$
    *   $p_{FB} = \frac{1}{3} \times \frac{1}{3} = \frac{1}{9}$
    *   $p_{FF} = \frac{1}{3} \times \frac{2}{3} = \frac{2}{9}$
    *   Social welfare = $2(\frac{2}{9}) + 1(\frac{2}{9}) = \frac{4}{9} + \frac{2}{9} = \frac{6}{9} = \frac{2}{3} \times 3 = 2$.

Let's try to find a CE that improves upon these.

Consider a distribution:
$p_{BB} = 1/2$, $p_{FF} = 1/2$, $p_{BF} = 0$, $p_{FB} = 0$.
Objective: $2(1/2) + 1(1/2) = 1 + 1/2 = 1.5$.
Constraints:
$2(1/2) - 0 \ge 0$ (True)
$1/2 - 2(0) \ge 0$ (True)
$1/2 - 2(0) \ge 0$ (True)
$2(1/2) - 0 \ge 0$ (True)
$1/2 + 0 + 0 + 1/2 = 1$ (True)
This is a valid CE, but the social welfare is 1.5, which is worse than the NE.

Let's try to maximize $2p_{BB} + p_{FF}$ subject to the constraints.
The constraints $2p_{BB} \ge p_{BF}$ and $p_{FF} \ge 2p_{FB}$ and $p_{BB} \ge 2p_{FB}$ and $2p_{FF} \ge p_{BF}$ are critical.

A known CE for Battle of the Sexes that is better than NE is:
$p_{BB} = 1/3, p_{FF} = 1/3, p_{BF} = 1/3, p_{FB} = 0$. (Wait, sum is 2/3, not 1).
Let's correct this. A common example of a CE is to use a mediator to randomly pick between (B,B) and (F,F) with probability 1/2 each. This is simply the pure strategy NE.

Consider another potential CE:
Suppose we want to coordinate on (B,B) and (F,F) with higher probability, and avoid the pure coordination failures.

Let's re-examine the constraints.
If we set $p_{BF}=0$ and $p_{FB}=0$:
$2p_{BB} \ge 0$
$p_{FF} \ge 0$
$p_{BB} \ge 0$
$2p_{FF} \ge 0$
$p_{BB} + p_{FF} = 1$
Maximize $2p_{BB} + p_{FF}$.
This gives $p_{BB}=1, p_{FF}=0$, which is (B,B) NE (SW=2) or $p_{BB}=0, p_{FF}=1$, which is (F,F) NE (SW=2).

This highlights that not all CEs improve social welfare. The LP formulation allows us to find the *best* CE according to the objective function.

Let's consider the constraint $2p_{BB} \ge p_{BF}$ and $2p_{FF} \ge p_{BF}$.
If $p_{BF}$ is non-zero, then $p_{BB}$ and $p_{FF}$ must be large enough.

Let's consider the possibility of setting some $p_s$ to zero to simplify.
If we aim for a CE where $p_{BF} > 0$ and $p_{FB} > 0$, this would likely require large $p_{BB}$ and $p_{FF}$ to satisfy constraints.

Let's look at the dual of the LP. This is beyond the scope of this module, but it gives insights.

The set of CEs forms a convex polytope. The vertices of this polytope are the CEs we can find by solving the LP with different objective functions.

**A key CE in Battle of the Sexes:**
Consider the following distribution:
$p_{BB} = 1/2, p_{FF} = 1/2, p_{BF} = 0, p_{FB} = 0$.
This is a NE, and SW is 2.

What if we "split" the risk or coordination problem?
Consider a distribution where a mediator recommends:
*   With probability 1/3, recommend (B,B).
*   With probability 1/3, recommend (F,F).
*   With probability 1/3, recommend (B,F) with probability 1/2 and (F,B) with probability 1/2. This is problematic as it doesn't directly translate to a single probability distribution over joint profiles unless we are careful.

Let's go back to the LP formulation. For Battle of the Sexes, the maximum social welfare achieved by a CE is 2. The NEs already achieve this. The LP formulation helps us to systematically find these, and also identify other CEs if we change the objective. For instance, if we wanted to maximize Player 1's utility, the objective would be Max $2p_{BB} + p_{FB}$.

**Important Note:** In Battle of the Sexes, the correlated equilibria do not strictly improve upon the Nash equilibria in terms of social welfare. The LP will find the NEs (B,B) and (F,F) as the optimal solutions for maximizing social welfare.

---

## 4. Example: The Chicken Game

|        | Swerve (S) | Straight (T) |
| :----- | :--------- | :----------- |
| Swerve (S) | (0, 0)     | (-1, 1)      |
| Straight (T) | (1, -1)    | (-10, -10)   |

Players: P1 (Row), P2 (Column)
Strategies: $S_1 = \{S, T\}$, $S_2 = \{S, T\}$
Profiles: (S,S), (S,T), (T,S), (T,T)
Probabilities: $p_{SS}, p_{ST}, p_{TS}, p_{TT}$

Objective: Maximize social welfare = $0p_{SS} + (-1)p_{ST} + 1p_{TS} + (-10)p_{TT} = p_{TS} - p_{ST} - 10p_{TT}$.

**Constraints:**

1.  **Player 1:**
    *   Recommended S, not deviate to T:
        $p_{SS} u_1(S,S) + p_{ST} u_1(S,T) \ge p_{SS} u_1(T,S) + p_{ST} u_1(T,T)$
        $p_{SS}(0) + p_{ST}(-1) \ge p_{SS}(1) + p_{ST}(-10)$
        $-p_{ST} \ge p_{SS} - 10p_{ST}$
        $9p_{ST} \ge p_{SS}$
    *   Recommended T, not deviate to S:
        $p_{TS} u_1(T,S) + p_{TT} u_1(T,T) \ge p_{TS} u_1(S,S) + p_{TT} u_1(S,T)$
        $p_{TS}(1) + p_{TT}(-10) \ge p_{TS}(0) + p_{TT}(-1)$
        $p_{TS} - 10p_{TT} \ge -p_{TT}$
        $p_{TS} \ge 9p_{TT}$

2.  **Player 2:**
    *   Recommended S, not deviate to T:
        $p_{SS} u_2(S,S) + p_{TS} u_2(T,S) \ge p_{SS} u_2(S,T) + p_{TS} u_2(T,T)$
        $p_{SS}(0) + p_{TS}(-1) \ge p_{SS}(1) + p_{TS}(-10)$
        $-p_{TS} \ge p_{SS} - 10p_{TS}$
        $9p_{TS} \ge p_{SS}$
    *   Recommended T, not deviate to S:
        $p_{ST} u_2(S,T) + p_{TT} u_2(T,T) \ge p_{ST} u_2(S,S) + p_{TT} u_2(T,T)$
        $p_{ST}(-1) + p_{TT}(-10) \ge p_{ST}(0) + p_{TT}(0)$
        $-p_{ST} - 10p_{TT} \ge 0$
        $-p_{ST} \ge 10p_{TT}$ (This is impossible since probabilities are non-negative and $p_{TT}$ could be zero. This implies $p_{ST}$ must be 0 if $p_{TT}>0$ or $p_{ST}=p_{TT}=0$).
        Actually, the constraint is:
        $p_{ST} u_2(S,T) + p_{TT} u_2(T,T) \ge p_{ST} u_2(S,S) + p_{TT} u_2(T,T)$
        $p_{ST}(-1) + p_{TT}(-10) \ge p_{ST}(0) + p_{TT}(0)$
        $-p_{ST} - 10p_{TT} \ge 0$
        This is $-p_{ST} \ge 10 p_{TT}$. Since probabilities are non-negative, this implies $p_{ST}=0$ and $p_{TT}=0$. This seems too strong. Let's recheck the definition.

    The constraint is for being *recommended* T. Player 2 is recommended T.
    The joint profiles where player 2 is recommended T are (S,T) and (T,T).
    The probability of being recommended T for player 2 is $p_{ST} + p_{TT}$.
    The conditional probability of (S,T) given recommendation T is $\frac{p_{ST}}{p_{ST} + p_{TT}}$.
    The conditional probability of (T,T) given recommendation T is $\frac{p_{TT}}{p_{ST} + p_{TT}}$.

    The expected utility for player 2 playing T (when recommended T):
    $E[u_2 | \text{rec T}] = \frac{p_{ST}}{p_{ST} + p_{TT}} u_2(S,T) + \frac{p_{TT}}{p_{ST} + p_{TT}} u_2(T,T)$

    The expected utility for player 2 deviating to S (when recommended T):
    $E[u_2(\text{dev S}) | \text{rec T}] = \frac{p_{ST}}{p_{ST} + p_{TT}} u_2(S,T) + \frac{p_{TT}}{p_{ST} + p_{TT}} u_2(S,T)$

    Let's go back to the original formulation of constraints on probabilities directly.
    For Player 2, recommended T:
    $p_{ST} u_2(S,T) + p_{TT} u_2(T,T) \ge p_{ST} u_2(S,S) + p_{TT} u_2(T,T)$ (This is incorrect, the second strategy should be pure $s'_i$).
    Correct constraint:
    $p_{ST} u_2(S,T) + p_{TT} u_2(T,T) \ge p_{ST} u_2(S,S) + p_{TT} u_2(S,T)$
    $p_{ST}(-1) + p_{TT}(-10) \ge p_{ST}(0) + p_{TT}(-1)$
    $-p_{ST} - 10p_{TT} \ge -p_{TT}$
    $-p_{ST} \ge 9p_{TT}$
    This implies $p_{ST}=0$ and $p_{TT}=0$. This still feels odd.

    Let's use the formulation $\sum_{s \in S} p_s \left[ u_i(s_i, s_{-i}) - u_i(s'_i, s_{-i}) \right] \ge 0$.

    **Player 1:**
    *   $s_1=S, s'_1=T$:
        $p_{SS}[u_1(S,S) - u_1(T,S)] + p_{ST}[u_1(S,T) - u_1(T,T)] \ge 0$
        $p_{SS}[0 - 1] + p_{ST}[-1 - (-10)] \ge 0$
        $-p_{SS} + 9p_{ST} \ge 0 \implies 9p_{ST} \ge p_{SS}$ (Matches)
    *   $s_1=T, s'_1=S$:
        $p_{TS}[u_1(T,S) - u_1(S,S)] + p_{TT}[u_1(T,T) - u_1(S,T)] \ge 0$
        $p_{TS}[1 - 0] + p_{TT}[-10 - (-1)] \ge 0$
        $p_{TS} - 9p_{TT} \ge 0 \implies p_{TS} \ge 9p_{TT}$ (Matches)

    **Player 2:**
    *   $s_2=S, s'_2=T$:
        $p_{SS}[u_2(S,S) - u_2(S,T)] + p_{TS}[u_2(T,S) - u_2(T,T)] \ge 0$
        $p_{SS}[0 - (-1)] + p_{TS}[-1 - (-10)] \ge 0$
        $p_{SS} + 9p_{TS} \ge 0$ (This is always true since probabilities are non-negative)
    *   $s_2=T, s'_2=S$:
        $p_{ST}[u_2(S,T) - u_2(S,S)] + p_{TT}[u_2(T,T) - u_2(T,T)] \ge 0$
        $p_{ST}[-1 - 0] + p_{TT}[-10 - 0] \ge 0$
        $-p_{ST} - 10p_{TT} \ge 0$ (This is where the problem arises, it means $p_{ST}=0, p_{TT}=0$)

    Let me re-check the utility matrix for Player 2.
    |        | Swerve (S) | Straight (T) |
    | :----- | :--------- | :----------- |
    | Swerve (S) | (0, **0**)     | (-1, **1**)      |
    | Straight (T) | (1, **-1**)    | (-10, **-10**)   |

    Okay, Player 2's utilities:
    $u_2(S,S)=0$, $u_2(S,T)=1$, $u_2(T,S)=-1$, $u_2(T,T)=-10$.

    **Player 2 Constraints (Corrected):**
    *   $s_2=S, s'_2=T$:
        $p_{SS}[u_2(S,S) - u_2(S,T)] + p_{TS}[u_2(T,S) - u_2(T,T)] \ge 0$
        $p_{SS}[0 - 1] + p_{TS}[-1 - (-10)] \ge 0$
        $-p_{SS} + 9p_{TS} \ge 0 \implies 9p_{TS} \ge p_{SS}$ (This is the same as Player 1's constraint if roles are swapped)
    *   $s_2=T, s'_2=S$:
        $p_{ST}[u_2(S,T) - u_2(S,S)] + p_{TT}[u_2(T,T) - u_2(T,S)] \ge 0$
        $p_{ST}[1 - 0] + p_{TT}[-10 - (-1)] \ge 0$
        $p_{ST} - 9p_{TT} \ge 0 \implies p_{ST} \ge 9p_{TT}$

**The LP for Chicken Game (Maximizing SW):**

$$
\begin{align*} \text{Maximize } & p_{TS} - p_{ST} - 10p_{TT} \\ \text{Subject to: } & 9p_{ST} \ge p_{SS} \\ & p_{TS} \ge 9p_{TT} \\ & 9p_{TS} \ge p_{SS} \\ & p_{ST} \ge 9p_{TT} \\ & p_{SS} + p_{ST} + p_{TS} + p_{TT} = 1 \\ & p_{SS}, p_{ST}, p_{TS}, p_{TT} \ge 0 \end{align*}
$$

Let's simplify the constraints:
$p_{SS} \le 9p_{ST}$
$p_{TS} \ge 9p_{TT}$
$p_{SS} \le 9p_{TS}$
$p_{ST} \ge 9p_{TT}$

Notice that the constraints for Player 1 and Player 2 are similar.

**Finding a CE:**
Consider the pure strategy Nash Equilibria:
*   (S,T): $u_1=-1, u_2=1$. SW = 0.
*   (T,S): $u_1=1, u_2=-1$. SW = 0.

Consider the mixed strategy Nash Equilibrium:
Player 1 plays S with prob $p$, T with prob $1-p$.
Player 2 plays S with prob $q$, T with prob $1-q$.
For P1 indifference: $q(0) + (1-q)(-1) = q(1) + (1-q)(-10)$
$-1+q = q - 10 + 10q \implies -1+q = 11q - 10 \implies 9 = 10q \implies q = 9/10$.
For P2 indifference: $p(0) + (1-p)(-1) = p(1) + (1-p)(-10)$
$-1+p = p - 10 + 10p \implies -1+p = 11p - 10 \implies 9 = 10p \implies p = 9/10$.

So the mixed NE is: P1 plays S w/ prob 0.9, T w/ prob 0.1. P2 plays S w/ prob 0.9, T w/ prob 0.1.
$p_{SS} = 0.9 \times 0.9 = 0.81$
$p_{ST} = 0.9 \times 0.1 = 0.09$
$p_{TS} = 0.1 \times 0.9 = 0.09$
$p_{TT} = 0.1 \times 0.1 = 0.01$
SW = $0.09 - 0.09 - 10(0.01) = -0.1$.

**A notable CE for Chicken:**
Consider a CE where the mediator recommends:
*   (S,S) with probability $1/2$
*   (S,T) with probability $1/4$
*   (T,S) with probability $1/4$
*   (T,T) with probability $0$

$p_{SS} = 1/2, p_{ST} = 1/4, p_{TS} = 1/4, p_{TT} = 0$.
Check constraints:
$9p_{ST} \ge p_{SS} \implies 9(1/4) \ge 1/2 \implies 9/4 \ge 1/2$ (True)
$p_{TS} \ge 9p_{TT} \implies 1/4 \ge 9(0) \implies 1/4 \ge 0$ (True)
$9p_{TS} \ge p_{SS} \implies 9(1/4) \ge 1/2 \implies 9/4 \ge 1/2$ (True)
$p_{ST} \ge 9p_{TT} \implies 1/4 \ge 9(0) \implies 1/4 \ge 0$ (True)
Sum = $1/2 + 1/4 + 1/4 = 1$.
SW = $p_{TS} - p_{ST} - 10p_{TT} = 1/4 - 1/4 - 10(0) = 0$.

This CE has SW=0, same as the pure strategy NEs. The LP might find a better one.

Let's try to maximize $p_{TS} - p_{ST} - 10p_{TT}$ subject to the constraints.
Consider setting $p_{TT}=0$.
Maximize $-p_{ST} + p_{TS}$
$p_{SS} \le 9p_{ST}$
$p_{TS} \ge 0$
$p_{SS} \le 9p_{TS}$
$p_{ST} \ge 0$
$p_{SS} + p_{ST} + p_{TS} = 1$

From $p_{SS} \le 9p_{ST}$ and $p_{SS} \le 9p_{TS}$, we want to make $p_{ST}$ and $p_{TS}$ large relative to $p_{SS}$ to satisfy the objective.
Let $p_{SS} = \epsilon$ (very small).
Then $p_{ST} + p_{TS} \approx 1$.
To maximize $p_{TS} - p_{ST}$, we'd want $p_{TS}$ close to 1 and $p_{ST}$ close to 0.
If $p_{ST}=0$, then $p_{SS} \le 0$, so $p_{SS}=0$. Then $p_{TS}=1$.
Constraints:
$0 \ge 0$ (True)
$1 \ge 0$ (True)
$0 \le 0$ (True)
$0 \ge 0$ (True)
Sum=1.
This yields $p_{SS}=0, p_{ST}=0, p_{TS}=1, p_{TT}=0$.
Objective: $1 - 0 - 0 = 1$.
This corresponds to the (T,S) outcome, which is a NE with SW=1. This is better than the mixed NE.

What if we try to make $p_{ST}$ and $p_{TS}$ non-zero?
Consider the specific CE that is often cited for Chicken:
$p_{SS} = 1/3, p_{ST} = 1/3, p_{TS} = 1/3, p_{TT} = 0$.
Check constraints:
$9(1/3) \ge 1/3 \implies 3 \ge 1/3$ (True)
$1/3 \ge 9(0)$ (True)
$9(1/3) \ge 1/3 \implies 3 \ge 1/3$ (True)
$1/3 \ge 9(0)$ (True)
Sum = 1.
Objective: $1/3 - 1/3 - 10(0) = 0$. SW=0.

The LP formulation will find the distribution that maximizes the objective function. In the Chicken game, the maximum social welfare for a CE is 1, achieved by the (T,S) outcome. The LP will identify this if (T,S) is a valid CE.

Let's verify (T,S) as a CE with probability 1:
$p_{TS}=1$, all others 0.
Constraints:
$9(0) \ge 0$ (True)
$1 \ge 9(0)$ (True)
$9(1) \ge 0$ (True)
$0 \ge 9(0)$ (True)
Sum=1.
This is a valid CE. The objective value is $1 - 0 - 0 = 1$.

So, in Chicken, the LP can find the (T,S) outcome as a CE with social welfare 1.

---

## 5. Relationship to Nash Equilibrium

*   **Every Nash Equilibrium is a Correlated Equilibrium:** A Nash equilibrium can be viewed as a correlated equilibrium where the recommendations are independent. If players play their Nash equilibrium strategies, they have no incentive to deviate, regardless of what others are recommended (since their recommendations are based on independent strategies).
    *   If a NE is in pure strategies, say $s^* = (s^*_1, \dots, s^*_N)$, then $p_{s^*} = 1$ and $p_s = 0$ for $s \neq s^*$. This is a CE.
    *   If a NE is in mixed strategies, say $\sigma^* = (\sigma^*_1, \dots, \sigma^*_N)$, then the probability distribution $p_s = \prod_{i=1}^N \sigma^*_i(s_i)$ for $s=(s_1, \dots, s_N)$ defines a CE.

*   **Not every Correlated Equilibrium is a Nash Equilibrium:** Correlated equilibria can support outcomes that are not Nash equilibria. This is because the correlation device can induce beliefs about other players' actions that are more favorable than what would arise from independent play.

*   **Set of CE contains the set of NE:** The set of correlated equilibria is a superset of the set of Nash equilibria.
    *   Mathematically, if $\Delta(S)$ is the set of probability distributions over joint strategy profiles $S$, and $CE$ and $NE$ denote the sets of correlated and Nash equilibria, then $NE \subseteq CE$.

*   **LP as a Generalization:** The LP formulation for CE is a generalization of finding mixed strategy Nash equilibria. The constraints for CE are derived from ensuring no player wants to deviate from a *recommended* strategy, given the recommendations of others. For Nash equilibrium, the strategies are chosen independently.

---

## 6. Practice Questions and Exercises

**Question 1:**
Consider the following 2x2 game:

|        | L     | R     |
| :----- | :---- | :---- |
| U      | (1,1) | (0,0) |
| D      | (0,0) | (1,1) |

This game is similar to Battle of the Sexes but with symmetric payoffs.
Formulate the linear program to find a correlated equilibrium that maximizes social welfare.
Let $p_{UL}, p_{UR}, p_{DL}, p_{DD}$ be the probabilities of the joint strategy profiles.

**Answer 1:**
Objective: Maximize $p_{UL} + p_{DD}$

Constraints:
1.  **Player 1 (Row):**
    *   Recommended U, deviate to D: $p_{UL} u_1(U,L) + p_{UR} u_1(U,R) \ge p_{UL} u_1(D,L) + p_{UR} u_1(D,R)$
        $p_{UL}(1) + p_{UR}(0) \ge p_{UL}(0) + p_{UR}(1)$
        $p_{UL} \ge p_{UR}$
    *   Recommended D, deviate to U: $p_{DL} u_1(D,L) + p_{DD} u_1(D,R) \ge p_{DL} u_1(U,L) + p_{DD} u_1(U,R)$
        $p_{DL}(0) + p_{DD}(1) \ge p_{DL}(1) + p_{DD}(0)$
        $p_{DD} \ge p_{DL}$

2.  **Player 2 (Column):**
    *   Recommended L, deviate to R: $p_{UL} u_2(U,L) + p_{DL} u_2(D,L) \ge p_{UL} u_2(U,R) + p_{DL} u_2(D,R)$
        $p_{UL}(1) + p_{DL}(0) \ge p_{UL}(0) + p_{DL}(1)$
        $p_{UL} \ge p_{DL}$
    *   Recommended R, deviate to L: $p_{UR} u_2(U,R) + p_{DD} u_2(D,R) \ge p_{UR} u_2(U,L) + p_{DD} u_2(D,L)$
        $p_{UR}(0) + p_{DD}(1) \ge p_{UR}(1) + p_{DD}(0)$
        $p_{DD} \ge p_{UR}$

3.  **Probability Constraints:**
    $p_{UL} + p_{UR} + p_{DL} + p_{DD} = 1$
    $p_{UL}, p_{UR}, p_{DL}, p_{DD} \ge 0$

The LP is:
$$
\begin{align*} \text{Maximize } & p_{UL} + p_{DD} \\ \text{Subject to: } & p_{UL} \ge p_{UR} \\ & p_{DD} \ge p_{DL} \\ & p_{UL} \ge p_{DL} \\ & p_{DD} \ge p_{UR} \\ & p_{UL} + p_{UR} + p_{DL} + p_{DD} = 1 \\ & p_{UL}, p_{UR}, p_{DL}, p_{DD} \ge 0 \end{align*}
$$

**Question 2:**
Consider the previous game. What is the maximum social welfare achievable by a correlated equilibrium? What is one such correlated equilibrium distribution?

**Answer 2:**
The Nash Equilibria are (U,L) and (D,D), each with probability 1.
For (U,L): $p_{UL}=1$, others 0. SW = 1. Constraints: $1 \ge 0, 0 \ge 0, 1 \ge 0, 0 \ge 0$. Valid.
For (D,D): $p_{DD}=1$, others 0. SW = 1. Constraints: $0 \ge 0, 1 \ge 0, 0 \ge 0, 1 \ge 0$. Valid.

Can we do better? Suppose we set $p_{UR}=0, p_{DL}=0$.
Then we have $p_{UL} \ge 0, p_{DD} \ge 0$, $p_{UL} \ge 0, p_{DD} \ge 0$.
And $p_{UL} + p_{DD} = 1$.
We want to maximize $p_{UL} + p_{DD}$, which is always 1.

Consider setting $p_{UL} = 1/2, p_{DD} = 1/2$, and $p_{UR}=p_{DL}=0$.
SW = $1/2 + 1/2 = 1$. This is a CE.

What if we try to mix the non-diagonal outcomes?
Let $p_{UR} = 1/2, p_{DL} = 1/2$, $p_{UL}=0, p_{DD}=0$.
Constraints:
$0 \ge 1/2$ (False)
This is not a valid CE.

The maximum social welfare achievable by a CE in this game is 1. Any probability distribution that puts all probability on (U,L) or (D,D) is a CE with social welfare 1. For example, $p_{UL}=1, p_{UR}=0, p_{DL}=0, p_{DD}=0$.

**Question 3:**
Why is the set of Nash equilibria a subset of the set of correlated equilibria?

**Answer 3:**
Any Nash equilibrium represents a stable outcome where no player has an incentive to unilaterally deviate from their chosen strategy, assuming others stick to theirs. If a correlated equilibrium is defined by a probability distribution that perfectly corresponds to a Nash equilibrium (i.e., $p_{s^*} = 1$ for a pure strategy NE $s^*$, or $p_s = \prod \sigma^*_i(s_i)$ for a mixed strategy NE $\sigma^*$), then the incentive compatibility constraints for CE are satisfied because the Nash equilibrium conditions are met. The mediator's recommendations in this case are effectively the players' own Nash equilibrium strategies, and since these are stable against unilateral deviations in the absence of correlation, they remain stable when recommended by a device that simply signals these independent strategies.

---

## 7. Important Points to Remember

*   **Correlated Equilibrium (CE):** A distribution over joint strategy profiles where no player wants to deviate from their *recommended* strategy, given the recommendations of others.
*   **Linear Programming:** The problem of finding a CE can be formulated as a linear program by using probabilities of joint strategy profiles as variables.
*   **Incentive Compatibility Constraints:** The core of the LP formulation; they ensure players don't benefit from deviating from a recommended pure strategy.
*   **Probability Constraints:** Probabilities must be non-negative and sum to one.
*   **Objective Function:** The LP can maximize social welfare, a specific player's utility, or simply find *any* feasible CE.
*   **NE $\subseteq$ CE:** The set of correlated equilibria strictly contains the set of Nash equilibria (in terms of the types of outcomes supported, not necessarily the probability distributions themselves).
*   **CE can achieve higher social welfare:** In some games (like Chicken), CE can support outcomes with higher social welfare than any Nash equilibrium.
*   **Computational Tractability:** While the number of variables and constraints can grow rapidly with the number of players and strategies, LP solvers can efficiently find CE for games of moderate size.

---
