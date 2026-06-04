---
title: "MSNE characterization theorem"
subject: "GAME THEORY AND MECHANISM DESIGN"
module: "Module 1: Introduction to Game Theory "
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c5b7"
status: "completed"
scrapedAt: "2026-05-20T17:06:31.262Z"
---
# Module 1: Introduction to Game Theory - MSNE Characterization Theorem

## 1. Overview

This module introduces fundamental concepts in Game Theory, with a particular focus on **Mixed Strategy Nash Equilibrium (MSNE)** and its characterization. We will explore what makes an MSNE a stable outcome and how to identify it.

## 2. Learning Outcomes

By the end of this topic, you should be able to:

*   Understand the concept of a mixed strategy and its motivation.
*   Define a Mixed Strategy Nash Equilibrium (MSNE).
*   State and explain the **Indifference Principle** which is central to the MSNE Characterization Theorem.
*   Apply the Indifference Principle to find MSNE in simple games.
*   Understand the conditions under which an MSNE exists.
*   Recognize the limitations of the MSNE Characterization Theorem.

## 3. Key Concepts and Definitions

### 3.1. Pure Strategy vs. Mixed Strategy

*   **Pure Strategy:** A player chooses a single action with certainty. In a normal-form game, this is simply selecting one cell in the payoff matrix.
*   **Mixed Strategy:** A player chooses actions probabilistically. A player assigns a probability distribution over their available pure strategies.

    *   **Notation:** If a player has $n$ pure strategies $s_1, s_2, ..., s_n$, a mixed strategy $\sigma$ can be represented as a probability vector $(\sigma_1, \sigma_2, ..., \sigma_n)$, where $\sigma_i \ge 0$ for all $i$, and $\sum_{i=1}^n \sigma_i = 1$. $\sigma_i$ is the probability of playing strategy $s_i$.

### 3.2. Expected Payoff

When players use mixed strategies, we need to consider their **expected payoffs**. The expected payoff of a player is the weighted average of their payoffs from pure strategies, where the weights are the probabilities assigned by the mixed strategies of all players.

*   Let player $i$'s mixed strategy be $\sigma_i = (\sigma_{i1}, \sigma_{i2}, ..., \sigma_{in_i})$ and player $j$'s mixed strategy be $\sigma_j = (\sigma_{j1}, \sigma_{j2}, ..., \sigma_{jn_j})$.
*   If player $i$ plays pure strategy $s_{ik}$, their expected payoff against $\sigma_j$ is:
    $E_i(s_{ik}, \sigma_j) = \sum_{l=1}^{n_j} \sigma_{jl} u_i(s_{ik}, s_{jl})$
    where $u_i(s_{ik}, s_{jl})$ is player $i$'s payoff when playing pure strategy $s_{ik}$ and player $j$ plays pure strategy $s_{jl}$.
*   Player $i$'s expected payoff from playing mixed strategy $\sigma_i$ against player $j$'s mixed strategy $\sigma_j$ is:
    $E_i(\sigma_i, \sigma_j) = \sum_{k=1}^{n_i} \sigma_{ik} E_i(s_{ik}, \sigma_j) = \sum_{k=1}^{n_i} \sigma_{ik} \sum_{l=1}^{n_j} \sigma_{jl} u_i(s_{ik}, s_{jl})$

### 3.3. Mixed Strategy Nash Equilibrium (MSNE)

*   **Definition:** A profile of mixed strategies $(\sigma_1^*, \sigma_2^*, ..., \sigma_n^*)$ is a Mixed Strategy Nash Equilibrium (MSNE) if for every player $i$, their strategy $\sigma_i^*$ is a best response to the strategies of the other players $(\sigma_{-i}^*)$.
    This means that for every player $i$:
    $E_i(\sigma_i^*, \sigma_{-i}^*) \ge E_i(\sigma_i, \sigma_{-i}^*)$ for all possible mixed strategies $\sigma_i$.

### 3.4. The Indifference Principle

This is the cornerstone of the MSNE Characterization Theorem.

*   **Statement:** In a Mixed Strategy Nash Equilibrium, if a player is playing a mixed strategy that involves playing at least two pure strategies with strictly positive probabilities, then the player must be indifferent between all pure strategies that are played with strictly positive probabilities.

*   **Explanation:**
    *   Suppose player $i$ is playing a mixed strategy $\sigma_i^*$ where $\sigma_{ik}^* > 0$ for two pure strategies $s_{ik}$ and $s_{il}$.
    *   If player $i$ was getting a strictly higher expected payoff from playing $s_{ik}$ compared to $s_{il}$ (i.e., $E_i(s_{ik}, \sigma_{-i}^*) > E_i(s_{il}, \sigma_{-i}^*)$), then player $i$ could improve their overall expected payoff by shifting all the probability from $s_{il}$ to $s_{ik}$. This would contradict the assumption that $\sigma_i^*$ is a best response (and hence part of an equilibrium).
    *   Similarly, if $E_i(s_{ik}, \sigma_{-i}^*) < E_i(s_{il}, \sigma_{-i}^*)$, player $i$ would shift probability from $s_{ik}$ to $s_{il}$.
    *   Therefore, for player $i$ to be willing to randomize between $s_{ik}$ and $s_{il}$ (i.e., assign positive probabilities to both), their expected payoffs from playing these pure strategies must be equal.

*   **Formalization:** If $\sigma_i^*$ is a best response and the support of $\sigma_i^*$ (the set of pure strategies played with positive probability) contains more than one strategy, say $S_i^* = \{s_{ik} | \sigma_{ik}^* > 0\}$, then for all $s_{ik}, s_{il} \in S_i^*$:
    $E_i(s_{ik}, \sigma_{-i}^*) = E_i(s_{il}, \sigma_{-i}^*)$.

*   **Implication:** Any pure strategy *not* in the support of an MSNE mixed strategy must yield an expected payoff *less than or equal to* the expected payoff of the strategies in the support.
    If $s_{im}$ is a pure strategy such that $\sigma_{im}^* = 0$, then:
    $E_i(s_{ik}, \sigma_{-i}^*) \ge E_i(s_{im}, \sigma_{-i}^*)$ for all $s_{ik} \in S_i^*$.

### 3.5. MSNE Characterization Theorem (for 2x2 games)

While the Indifference Principle is a general characterization for any MSNE, it's often presented in the context of 2x2 games for easier demonstration.

*   **Consider a 2x2 normal-form game:**

    |         | Player 2: Left (L) | Player 2: Right (R) |
    | :------ | :----------------- | :------------------ |
    | **Player 1: Up (U)** | $(a, A)$             | $(b, B)$              |
    | **Player 1: Down (D)** | $(c, C)$             | $(d, D)$              |

    (Lowercase letters are payoffs for Player 1, uppercase for Player 2).

*   **Goal:** Find probabilities $p$ for Player 1 playing U (and $1-p$ for D) and $q$ for Player 2 playing L (and $1-q$ for R) such that $(p, 1-p)$ and $(q, 1-q)$ form an MSNE.

*   **Applying the Indifference Principle:**

    *   **For Player 1 to be indifferent between U and D:**
        Player 1's expected payoff from U must equal their expected payoff from D, given Player 2 plays L with probability $q$ and R with probability $1-q$.
        $E_1(U, (q, 1-q)) = E_1(D, (q, 1-q))$
        $p \cdot E_1(U, L) + (1-p) \cdot E_1(U, R) \quad$ is not the right way to think about it here.
        We need to find $q$ that makes Player 1 indifferent.
        $E_1(\text{Pure U}, (q, 1-q)) = E_1(\text{Pure D}, (q, 1-q))$
        $q \cdot u_1(U, L) + (1-q) \cdot u_1(U, R) = q \cdot u_1(D, L) + (1-q) \cdot u_1(D, R)$
        $q \cdot a + (1-q) \cdot b = q \cdot c + (1-q) \cdot d$
        $qa + b - qb = qc + d - qd$
        $q(a - b - c + d) = d - b$
        $q = \frac{d - b}{(a - b) - (c - d)} = \frac{d - b}{a - b - c + d}$

        For a valid mixed strategy, $0 < q < 1$. This requires:
        *   $(d - b)$ and $(a - b - c + d)$ to have the same sign.
        *   $|d - b| < |a - b - c + d|$.

    *   **For Player 2 to be indifferent between L and R:**
        Player 2's expected payoff from L must equal their expected payoff from R, given Player 1 plays U with probability $p$ and D with probability $1-p$.
        $E_2(L, (p, 1-p)) = E_2(R, (p, 1-p))$
        $p \cdot u_2(U, L) + (1-p) \cdot u_2(D, L) = p \cdot u_2(U, R) + (1-p) \cdot u_2(D, R)$
        $p \cdot A + (1-p) \cdot C = p \cdot B + (1-p) \cdot D$
        $pA + C - pC = pB + D - pD$
        $p(A - C - B + D) = D - C$
        $p = \frac{D - C}{(A - C) - (B - D)} = \frac{D - C}{A - C - B + D}$

        For a valid mixed strategy, $0 < p < 1$. This requires:
        *   $(D - C)$ and $(A - C - B + D)$ to have the same sign.
        *   $|D - C| < |A - C - B + D|$.

**Important Note:** These formulas for $p$ and $q$ are derived assuming that *both* players are mixing. If the calculation results in $p=0$, $p=1$, $q=0$, or $q=1$, it means the equilibrium might be in pure strategies, or the assumption of mixing was incorrect for that specific calculation. The Indifference Principle strictly applies to strategies played with *strictly positive* probabilities.

## 4. Examples

### 4.1. Matching Pennies

A classic example to illustrate MSNE. Two players simultaneously choose "Heads" (H) or "Tails" (T). Player 1 wins if the coins match, Player 2 wins if they don't.

|         | Player 2: H | Player 2: T |
| :------ | :---------- | :---------- |
| **Player 1: H** | $(1, -1)$   | $(-1, 1)$   |
| **Player 1: T** | $(-1, 1)$   | $(1, -1)$   |

*   **Pure Strategy Nash Equilibria?** No. If P1 plays H, P2 best responds with T. But if P2 plays T, P1 best responds with T. If P1 plays T, P2 best responds with H. But if P2 plays H, P1 best responds with H. There's always an incentive to deviate.

*   **Finding the MSNE using Indifference Principle:**
    Let Player 1 play H with probability $p$ and T with probability $1-p$.
    Let Player 2 play H with probability $q$ and T with probability $1-q$.

    *   **Player 1's indifference:** Player 1 plays H with $p$ and T with $1-p$.
        Expected payoff from H for Player 1: $q \cdot (1) + (1-q) \cdot (-1) = q - (1-q) = 2q - 1$
        Expected payoff from T for Player 1: $q \cdot (-1) + (1-q) \cdot (1) = -q + (1-q) = 1 - 2q$
        For indifference: $2q - 1 = 1 - 2q$
        $4q = 2 \implies q = 1/2$.
        So, Player 2 must play H with probability 1/2 and T with probability 1/2.

    *   **Player 2's indifference:** Player 2 plays H with $q$ and T with $1-q$.
        Expected payoff from H for Player 2: $p \cdot (-1) + (1-p) \cdot (1) = -p + 1 - p = 1 - 2p$
        Expected payoff from T for Player 2: $p \cdot (1) + (1-p) \cdot (-1) = p - (1-p) = 2p - 1$
        For indifference: $1 - 2p = 2p - 1$
        $2 = 4p \implies p = 1/2$.
        So, Player 1 must play H with probability 1/2 and T with probability 1/2.

    *   **The MSNE:** Both players play H with probability 1/2 and T with probability 1/2.
        Let's check expected payoffs:
        $E_1(H, (1/2, 1/2)) = (1/2)(1) + (1/2)(-1) = 0$
        $E_1(T, (1/2, 1/2)) = (1/2)(-1) + (1/2)(1) = 0$
        Player 1 is indifferent.
        $E_2((1/2, 1/2), H) = (1/2)(-1) + (1/2)(1) = 0$
        $E_2((1/2, 1/2), T) = (1/2)(1) + (1/2)(-1) = 0$
        Player 2 is indifferent.

### 4.2. Battle of the Sexes

Two people want to go out together, but have different preferences. Person 1 prefers the Opera (O), Person 2 prefers the Football game (F). However, they both agree that going together is better than going alone.

|         | Player 2: Opera (O) | Player 2: Football (F) |
| :------ | :----------------- | :--------------------- |
| **Player 1: Opera (O)** | $(2, 1)$           | $(0, 0)$               |
| **Player 1: Football (F)** | $(0, 0)$           | $(1, 2)$               |

*   **Pure Strategy Nash Equilibria?** Yes, two: (O, O) and (F, F).
    *   If (O, O): P1 gets 2, P2 gets 1. If P1 deviates to F, they get 0. If P2 deviates to F, they get 0. No incentive to deviate.
    *   If (F, F): P1 gets 1, P2 gets 2. If P1 deviates to O, they get 0. If P2 deviates to O, they get 0. No incentive to deviate.

*   **Finding the MSNE using Indifference Principle:**
    Let Player 1 play O with probability $p$ and F with probability $1-p$.
    Let Player 2 play O with probability $q$ and F with probability $1-q$.

    *   **Player 1's indifference:** Player 1 plays O with $p$ and F with $1-p$.
        Expected payoff from O for Player 1: $q \cdot (2) + (1-q) \cdot (0) = 2q$
        Expected payoff from F for Player 1: $q \cdot (0) + (1-q) \cdot (1) = 1-q$
        For indifference: $2q = 1-q$
        $3q = 1 \implies q = 1/3$.
        So, Player 2 must play O with probability 1/3 and F with probability 2/3.

    *   **Player 2's indifference:** Player 2 plays O with $q$ and F with $1-q$.
        Expected payoff from O for Player 2: $p \cdot (1) + (1-p) \cdot (0) = p$
        Expected payoff from F for Player 2: $p \cdot (0) + (1-p) \cdot (2) = 2(1-p)$
        For indifference: $p = 2(1-p)$
        $p = 2 - 2p$
        $3p = 2 \implies p = 2/3$.
        So, Player 1 must play O with probability 2/3 and F with probability 1/3.

    *   **The MSNE:** Player 1 plays O with probability 2/3, F with 1/3. Player 2 plays O with 1/3, F with 2/3.
        Let's check expected payoffs:
        For P1 playing O: $E_1(O, (1/3, 2/3)) = (1/3)(2) + (2/3)(0) = 2/3$.
        For P1 playing F: $E_1(F, (1/3, 2/3)) = (1/3)(0) + (2/3)(1) = 2/3$.
        Player 1 is indifferent.
        For P2 playing O: $E_2((2/3, 1/3), O) = (2/3)(1) + (1/3)(0) = 2/3$.
        For P2 playing F: $E_2((2/3, 1/3), F) = (2/3)(0) + (1/3)(2) = 2/3$.
        Player 2 is indifferent.

## 5. Practice Questions

1.  **Definition:** What is the core principle that allows us to characterize a Mixed Strategy Nash Equilibrium?
2.  **Matching Pennies (Varied Payoffs):** Consider the Matching Pennies game with the following payoffs:
    |         | Player 2: H | Player 2: T |
    | :------ | :---------- | :---------- |
    | **Player 1: H** | $(3, -3)$   | $(-1, 1)$   |
    | **Player 1: T** | $(-2, 2)$   | $(1, -1)$   |
    Find the MSNE for this game.
3.  **Rock-Paper-Scissors (Simplified):** Imagine a simplified version where Rock (R) beats Scissors (S), and Scissors (S) beats Paper (P). If they tie, no one gets a point.
    |         | Player 2: R | Player 2: P | Player 2: S |
    | :------ | :---------- | :---------- | :---------- |
    | **Player 1: R** | $(0, 0)$    | $(-1, 1)$   | $(1, -1)$   |
    | **Player 1: P** | $(1, -1)$   | $(0, 0)$    | $(-1, 1)$   |
    | **Player 1: S** | $(-1, 1)$   | $(1, -1)$   | $(0, 0)$    |
    Assuming there is an MSNE where each player plays each strategy with some positive probability, what is the mixed strategy profile? (Hint: You'll need to generalize the indifference principle. If player 1 is randomizing over R, P, S, they must be indifferent between playing R, P, and S.)
4.  **Battle of the Sexes (Deviation):** In the Battle of the Sexes example, if Player 1 deviates from the MSNE strategy of (2/3 O, 1/3 F) and plays O for sure (p=1), what is Player 2's best response? What is Player 1's payoff in this scenario?

## 6. Answers to Practice Questions

1.  **Answer:** The core principle is the **Indifference Principle**. In an MSNE, a player who randomizes between two or more pure strategies must be indifferent between each of those pure strategies. In other words, their expected payoffs must be equal for all strategies in the support of their mixed strategy.

2.  **Answer:**
    Let Player 1 play H with probability $p$ and T with probability $1-p$.
    Let Player 2 play H with probability $q$ and T with probability $1-q$.

    *   **Player 1's indifference (solving for $q$):**
        $E_1(\text{Pure H}, (q, 1-q)) = E_1(\text{Pure T}, (q, 1-q))$
        $q \cdot (3) + (1-q) \cdot (-1) = q \cdot (-2) + (1-q) \cdot (1)$
        $3q - 1 + q = -2q + 1 - q$
        $4q - 1 = -3q + 1$
        $7q = 2 \implies q = 2/7$.
        Player 2 plays H with probability 2/7 and T with 5/7.

    *   **Player 2's indifference (solving for $p$):**
        $E_2((p, 1-p), \text{Pure H}) = E_2((p, 1-p), \text{Pure T})$
        $p \cdot (-3) + (1-p) \cdot (2) = p \cdot (1) + (1-p) \cdot (-1)$
        $-3p + 2 - 2p = p - 1 + p$
        $-5p + 2 = 2p - 1$
        $3 = 7p \implies p = 3/7$.
        Player 1 plays H with probability 3/7 and T with 4/7.

    *   **MSNE:** Player 1 plays (3/7 H, 4/7 T), Player 2 plays (2/7 H, 5/7 T).

3.  **Answer:**
    Let Player 1 play R, P, S with probabilities $(p_R, p_P, p_S)$ where $p_R+p_P+p_S=1$.
    Let Player 2 play R, P, S with probabilities $(q_R, q_P, q_S)$ where $q_R+q_P+q_S=1$.

    *   **Player 1's indifference:** Player 1 must be indifferent between R, P, and S.
        $E_1(\text{R}, (q_R, q_P, q_S)) = q_R(0) + q_P(-1) + q_S(1) = -q_P + q_S$
        $E_1(\text{P}, (q_R, q_P, q_S)) = q_R(1) + q_P(0) + q_S(-1) = q_R - q_S$
        $E_1(\text{S}, (q_R, q_P, q_S)) = q_R(-1) + q_P(1) + q_S(0) = -q_R + q_P$

        For indifference:
        1.  $-q_P + q_S = q_R - q_S \implies q_R + q_P - 2q_S = 0$
        2.  $q_R - q_S = -q_R + q_P \implies 2q_R - q_P - q_S = 0$
        Also, $q_R + q_P + q_S = 1$.

        From (1), $q_S = q_P - q_R$. Substitute into $q_R + q_P + q_S = 1$:
        $q_R + q_P + (q_P - q_R) = 1 \implies 2q_P = 1 \implies q_P = 1/2$.

        Substitute $q_P=1/2$ into (2):
        $2q_R - 1/2 - q_S = 0 \implies 2q_R - q_S = 1/2$.
        We also have $q_R + 1/2 + q_S = 1 \implies q_R + q_S = 1/2$.

        Now we have a system for $q_R$ and $q_S$:
        $2q_R - q_S = 1/2$
        $q_R + q_S = 1/2$

        Adding these two equations: $3q_R = 1 \implies q_R = 1/3$.
        Substituting $q_R=1/3$ into $q_R + q_S = 1/2$: $1/3 + q_S = 1/2 \implies q_S = 1/2 - 1/3 = 1/6$.
        So, Player 2 plays (1/3 R, 1/2 P, 1/6 S).

        By symmetry of the game (if you swap players and adjust payoffs, it's the same structure), Player 1 will play the same strategy: (1/3 R, 1/2 P, 1/6 S).

    *   **MSNE:** Both players play each strategy with probabilities (1/3, 1/2, 1/6) respectively for (Rock, Paper, Scissors).

4.  **Answer:**
    *   Player 1 plays O for sure ($p=1$).
    *   Player 2's payoffs are now determined by their choice:
        *   If Player 2 plays O: P2 gets 1.
        *   If Player 2 plays F: P2 gets 0.
    *   Player 2's best response is to play **Opera (O)**, as it gives them a payoff of 1, which is higher than 0.
    *   In this scenario, the outcome is (O, O). Player 1's payoff is **2**.

## 7. Important Points to Remember

*   **Indifference is Key:** The Indifference Principle is the core idea for finding MSNE. If a player uses a pure strategy with zero probability, it must be because their expected payoff from playing it is no better than their expected payoff from playing the strategies in the support of their mixed strategy.
*   **Support of the Mixed Strategy:** The support is the set of pure strategies played with strictly positive probabilities.
*   **Calculations for 2x2 Games:** Remember the formulas for $p$ and $q$ derived from the indifference principle, but be mindful that they assume mixing is happening.
*   **Existence:** Every finite game has at least one Nash Equilibrium (possibly in mixed strategies). This is guaranteed by Nash's Theorem.
*   **Multiple Equilibria:** Games can have multiple Nash Equilibria, including both pure and mixed strategy equilibria (e.g., Battle of the Sexes).
*   **Generalization:** The Indifference Principle applies to games larger than 2x2, but the calculations become more complex. You'll need to solve systems of linear equations.
