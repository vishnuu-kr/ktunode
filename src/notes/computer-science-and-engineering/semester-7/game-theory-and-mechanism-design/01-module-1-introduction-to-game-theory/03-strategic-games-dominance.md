---
title: "Strategic Games - Dominance"
subject: "GAME THEORY AND MECHANISM DESIGN"
module: "Module 1: Introduction to Game Theory "
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c5ad"
status: "completed"
scrapedAt: "2026-05-20T17:06:24.397Z"
---
# GAME THEORY AND MECHANISM DESIGN - Module 1: Introduction to Game Theory

## Topic: Strategic Games - Dominance

### 1. Introduction to Strategic Games

*   **Definition:** A strategic game is a situation where the outcome depends on the choices of multiple decision-makers (players), and each player's choice can affect the outcomes for all other players.
*   **Key Components of a Strategic Game:**
    *   **Players:** The set of decision-makers involved.
    *   **Strategies:** The set of available actions for each player.
    *   **Payoffs:** The utility or value each player receives for each possible combination of strategies.

### 2. Dominance

Dominance is a fundamental concept in game theory used to simplify strategic games by eliminating strategies that are never optimal for a player, regardless of what other players do.

#### 2.1. Strictly Dominated Strategies

*   **Definition:** A strategy $s_i$ for player $i$ is **strictly dominated** by another strategy $s'_i$ if, for every possible combination of strategies chosen by the other players, player $i$ receives a strictly higher payoff from choosing $s'_i$ than from choosing $s_i$.
*   **Formal Definition:** For player $i$, strategy $s_i$ is strictly dominated by $s'_i$ if $u_i(s'_i, s_{-i}) > u_i(s_i, s_{-i})$ for all $s_{-i} \in S_{-i}$, where $S_{-i}$ is the set of all possible strategy combinations for players other than $i$.
*   **Intuition:** If a strategy is strictly dominated, a rational player will never choose it because there's always a better option.

#### 2.2. Weakly Dominated Strategies

*   **Definition:** A strategy $s_i$ for player $i$ is **weakly dominated** by another strategy $s'_i$ if, for every possible combination of strategies chosen by the other players, player $i$ receives a payoff from choosing $s'_i$ that is at least as high as the payoff from choosing $s_i$, AND there is at least one combination of strategies by other players for which player $i$ receives a strictly higher payoff from choosing $s'_i$.
*   **Formal Definition:** For player $i$, strategy $s_i$ is weakly dominated by $s'_i$ if $u_i(s'_i, s_{-i}) \ge u_i(s_i, s_{-i})$ for all $s_{-i} \in S_{-i}$, and there exists at least one $s_{-i}^* \in S_{-i}$ such that $u_i(s'_i, s_{-i}^*) > u_i(s_i, s_{-i}^*)$.
*   **Intuition:** A weakly dominated strategy is not as clearly irrational as a strictly dominated one. A player might still consider choosing a weakly dominated strategy if they believe there's a specific scenario where it yields the same payoff as the dominating strategy, and that scenario is sufficiently important to them (or if they are not perfectly rational).

#### 2.3. Iterated Elimination of Strictly Dominated Strategies (IESDS)

*   **Definition:** IESDS is a process of repeatedly removing strictly dominated strategies from the game. In each step, we identify a strategy that is strictly dominated (given the current set of strategies) and remove it. This can be done for any player, in any order.
*   **Key Property:** The order in which strictly dominated strategies are eliminated **does not affect the outcome**. The set of strategy profiles remaining after IESDS is unique.
*   **Purpose:** To simplify complex games by reducing the number of available strategies for each player, making it easier to find solutions.

#### 2.4. Iterated Elimination of Weakly Dominated Strategies (IEWDS)

*   **Definition:** IEWDS is a process of repeatedly removing weakly dominated strategies.
*   **Crucial Difference from IESDS:** The order of elimination of weakly dominated strategies **matters**. Different orders of elimination can lead to different sets of remaining strategy profiles.
*   **Caution:** When dealing with IEWDS, it's essential to be precise about the order of elimination and the assumptions about player rationality. It's often applied with the assumption that players are rational and know that other players are rational, and so on.

### 3. Applications and Examples

#### 3.1. Prisoner's Dilemma

*   **Players:** Two prisoners (Alice and Bob).
*   **Strategies:** Cooperate (C) or Defect (D).
*   **Payoffs (Years in prison - lower is better):**
    | Alice \ Bob | Cooperate (C) | Defect (D) |
    | :---------- | :------------ | :--------- |
    | **Cooperate (C)** | (1, 1)        | (10, 0)    |
    | **Defect (D)**    | (0, 10)       | (5, 5)     |

*   **Analysis using Dominance:**
    *   **Alice:**
        *   If Bob Cooperates (C): Alice gets 1 year for Cooperating, 0 years for Defecting. Defecting is better.
        *   If Bob Defects (D): Alice gets 10 years for Cooperating, 5 years for Defecting. Defecting is better.
        *   **Conclusion for Alice:** Defect (D) strictly dominates Cooperate (C). Alice will always choose Defect.
    *   **Bob:** (By symmetry)
        *   If Alice Cooperates (C): Bob gets 1 year for Cooperating, 0 years for Defecting. Defecting is better.
        *   If Alice Defects (D): Bob gets 10 years for Cooperating, 5 years for Defecting. Defecting is better.
        *   **Conclusion for Bob:** Defect (D) strictly dominates Cooperate (C). Bob will always choose Defect.
*   **Outcome:** Both players will defect, leading to a (5, 5) payoff. This is the only Nash Equilibrium.

#### 3.2. Battle of the Sexes (Illustrating Weak Dominance)

*   **Players:** A couple planning an evening out.
*   **Strategies:** Opera (O) or Football (F).
*   **Payoffs (Utility):**
    | Wife \ Husband | Opera (O) | Football (F) |
    | :------------- | :-------- | :----------- |
    | **Opera (O)**  | (2, 1)    | (0, 0)       |
    | **Football (F)**| (0, 0)    | (1, 2)       |

*   **Analysis using Dominance:**
    *   **Wife:**
        *   If Husband chooses Opera (O): Wife gets 2 for Opera, 0 for Football. Opera is better.
        *   If Husband chooses Football (F): Wife gets 0 for Opera, 1 for Football. Football is better.
        *   **Conclusion for Wife:** Neither strategy strictly dominates the other.
    *   **Husband:**
        *   If Wife chooses Opera (O): Husband gets 1 for Opera, 0 for Football. Opera is better.
        *   If Wife chooses Football (F): Husband gets 0 for Opera, 2 for Football. Football is better.
        *   **Conclusion for Husband:** Neither strategy strictly dominates the other.

*   **No Strict Dominance:** In this game, there are no strictly dominated strategies for either player. However, there are two Nash Equilibria: (Opera, Opera) and (Football, Football).

#### 3.3. A Game with Weak Dominance

Consider this game:

| Player 1 \ Player 2 | Left (L) | Right (R) |
| :------------------ | :------- | :-------- |
| **Up (U)**          | (1, 1)   | (0, 1)    |
| **Middle (M)**      | (1, 0)   | (0, 0)    |
| **Down (D)**        | (1, 1)   | (0, 1)    |

*   **Analysis:**
    *   **Player 1:**
        *   Compare Up (U) and Middle (M):
            *   If Player 2 chooses L: U (1) vs M (1) - same payoff.
            *   If Player 2 chooses R: U (0) vs M (0) - same payoff.
            *   Neither U nor M strictly dominates the other.
        *   Compare Up (U) and Down (D):
            *   If Player 2 chooses L: U (1) vs D (1) - same payoff.
            *   If Player 2 chooses R: U (0) vs D (0) - same payoff.
            *   Neither U nor D strictly dominates the other.
        *   Compare Middle (M) and Up (U):
            *   If Player 2 chooses L: M (1) vs U (1) - same payoff.
            *   If Player 2 chooses R: M (0) vs U (0) - same payoff.
            *   Neither M nor U strictly dominates the other.
        *   *Wait, let's re-evaluate carefully.*
        *   **Player 1's strategy Up (U):**
            *   Vs Player 2's L: Payoff 1
            *   Vs Player 2's R: Payoff 0
        *   **Player 1's strategy Middle (M):**
            *   Vs Player 2's L: Payoff 1
            *   Vs Player 2's R: Payoff 0
        *   **Player 1's strategy Down (D):**
            *   Vs Player 2's L: Payoff 1
            *   Vs Player 2's R: Payoff 0

        *   **For Player 1:** U, M, and D all yield the same payoffs (1 against L, 0 against R). No strategy strictly dominates another.

    *   **Player 2:**
        *   Compare Left (L) and Right (R):
            *   If Player 1 chooses Up (U): L (1) vs R (1) - same payoff.
            *   If Player 1 chooses Middle (M): L (0) vs R (0) - same payoff.
            *   If Player 1 chooses Down (D): L (1) vs R (1) - same payoff.
        *   **For Player 2:** L and R yield the same payoffs in all cases. Neither strictly dominates the other.

    *   **Now, let's introduce slight changes to demonstrate weak dominance.**
    Consider this game:

    | Player 1 \ Player 2 | Left (L) | Right (R) |
    | :------------------ | :------- | :-------- |
    | **Up (U)**          | (2, 1)   | (0, 0)    |
    | **Down (D)**        | (1, 0)   | (1, 1)    |

    *   **Player 1:**
        *   Compare Up (U) and Down (D):
            *   If Player 2 chooses L: U (2) vs D (1) -> U is better.
            *   If Player 2 chooses R: U (0) vs D (1) -> D is better.
            *   Neither strictly dominates.
    *   **Player 2:**
        *   Compare Left (L) and Right (R):
            *   If Player 1 chooses Up (U): L (1) vs R (0) -> L is better.
            *   If Player 1 chooses Down (D): L (0) vs R (1) -> R is better.
            *   Neither strictly dominates.

    Let's try another example where weak dominance is clear:

    | Player 1 \ Player 2 | Left (L) | Right (R) |
    | :------------------ | :------- | :-------- |
    | **Up (U)**          | (2, 1)   | (1, 1)    |
    | **Down (D)**        | (1, 0)   | (1, 0)    |

    *   **Player 1:**
        *   Compare Up (U) and Down (D):
            *   If Player 2 chooses L: U (2) vs D (1) -> U is better.
            *   If Player 2 chooses R: U (1) vs D (1) -> U is equal to D.
            *   **Conclusion for Player 1:** Up (U) **weakly dominates** Down (D). Because $u_1(U, L) > u_1(D, L)$ and $u_1(U, R) = u_1(D, R)$.
    *   **Player 2:**
        *   Compare Left (L) and Right (R):
            *   If Player 1 chooses Up (U): L (1) vs R (1) -> Equal.
            *   If Player 1 chooses Down (D): L (0) vs R (0) -> Equal.
            *   **Conclusion for Player 2:** Neither strategy strictly or weakly dominates the other.

    *   **IESDS/IEWDS application:**
        *   If we remove Player 1's strictly dominated strategy (none exist here).
        *   If we consider removing Player 1's **weakly dominated** strategy (Down), the game reduces to Player 1 choosing Up.
        *   Now, Player 2 faces Player 1 choosing Up. Player 2's choice becomes:
            *   If Player 1 chooses Up (U): Player 2 gets 1 from L and 1 from R.
        *   If Player 1 *only* plays Up, Player 2 is indifferent between L and R.
        *   However, the process of IEWDS is about eliminating strategies that are dominated *given the other players' remaining strategies*.
        *   If Player 1's strategy D is eliminated (because it's weakly dominated by U), Player 1 is assumed to play U.
        *   Then Player 2 chooses between L (payoff 1) and R (payoff 1).

    *   **Important Note on IEWDS:** For IEWDS to be applied, players must be assumed to be rational and know that others are rational, and this knowledge is common knowledge. When eliminating a weakly dominated strategy, we assume that a rational player would never play it because there's always a strictly better alternative in at least one scenario, and they are indifferent in others. If there's a possibility of error or different preferences, a player might stick with the weakly dominated strategy.

### 4. Key Concepts and Definitions Summary

*   **Strategic Game:** Players, Strategies, Payoffs.
*   **Strictly Dominated Strategy:** Always yields a strictly higher payoff for a player, regardless of opponents' actions.
*   **Weakly Dominated Strategy:** Yields at least as high a payoff, and strictly higher in at least one case.
*   **Iterated Elimination of Strictly Dominated Strategies (IESDS):** A process of removing strictly dominated strategies. The order of removal does not affect the outcome. The resulting set of strategy profiles is unique.
*   **Iterated Elimination of Weakly Dominated Strategies (IEWDS):** A process of removing weakly dominated strategies. The order of removal *can* affect the outcome, and the resulting set of strategy profiles may not be unique.

### 5. Practice Questions/Exercises

**Question 1:**
Consider the following game:

| Player 1 \ Player 2 | Left (L) | Right (R) |
| :------------------ | :------- | :-------- |
| **Up (U)**          | (5, 5)   | (1, 6)    |
| **Down (D)**        | (6, 1)   | (2, 2)    |

a) Does Player 1 have a strictly dominated strategy? If so, which one?
b) Does Player 2 have a strictly dominated strategy? If so, which one?
c) Can you simplify this game using IESDS? If so, describe the outcome.

**Answer 1:**
a) For Player 1:
    *   If Player 2 plays L: U (5) vs D (6) -> D is better.
    *   If Player 2 plays R: U (1) vs D (2) -> D is better.
    *   **Yes, Player 1's strategy Up (U) is strictly dominated by Down (D).**

b) For Player 2:
    *   If Player 1 plays U: L (5) vs R (6) -> R is better.
    *   If Player 1 plays D: L (1) vs R (2) -> R is better.
    *   **Yes, Player 2's strategy Left (L) is strictly dominated by Right (R).**

c) Yes, we can simplify this game using IESDS.
    1. Remove Player 1's strictly dominated strategy (Up). The game becomes:

       | Player 1 \ Player 2 | Left (L) | Right (R) |
       | :------------------ | :------- | :-------- |
       | **Down (D)**        | (6, 1)   | (2, 2)    |

    2. Now, consider Player 2 in this reduced game.
        *   If Player 1 plays D: L (1) vs R (2) -> R is better.
        *   **Player 2's strategy Left (L) is strictly dominated by Right (R).**

    3. Remove Player 2's strictly dominated strategy (Left). The game reduces to:

       | Player 1 \ Player 2 | Right (R) |
       | :------------------ | :-------- |
       | **Down (D)**        | (2, 2)    |

    The outcome after IESDS is (Down, Right) with payoffs (2, 2).

---

**Question 2:**
Consider the following game:

| Player 1 \ Player 2 | Left (L) | Right (R) |
| :------------------ | :------- | :-------- |
| **Up (U)**          | (1, 1)   | (0, 0)    |
| **Down (D)**        | (1, 0)   | (0, 1)    |

a) Does Player 1 have a strictly dominated strategy?
b) Does Player 2 have a strictly dominated strategy?
c) Does Player 1 have a weakly dominated strategy? If so, which one and by which strategy?
d) Does Player 2 have a weakly dominated strategy? If so, which one and by which strategy?
e) If you were to apply IEWDS, and you first eliminated Player 1's weakly dominated strategy, what would the remaining game look like? What would be Player 2's best response?
f) If you were to apply IEWDS, and you first eliminated Player 2's weakly dominated strategy, what would the remaining game look like? What would be Player 1's best response?

**Answer 2:**
a) No, Player 1 does not have a strictly dominated strategy.
    *   If Player 2 plays L: U (1) vs D (1) -> Equal.
    *   If Player 2 plays R: U (0) vs D (0) -> Equal.

b) No, Player 2 does not have a strictly dominated strategy.
    *   If Player 1 plays U: L (1) vs R (0) -> L is better.
    *   If Player 1 plays D: L (0) vs R (1) -> R is better.

c) Yes, Player 1's strategy Down (D) is weakly dominated by Up (U).
    *   $u_1(U, L) = 1$ and $u_1(D, L) = 1$. (Equal)
    *   $u_1(U, R) = 0$ and $u_1(D, R) = 0$. (Equal)
    *   Wait, my previous analysis for this game was flawed. Let's re-examine the definition of weak dominance.

    **Correction:** For strategy $s_i$ to be weakly dominated by $s'_i$, we need $u_i(s'_i, s_{-i}) \ge u_i(s_i, s_{-i})$ for all $s_{-i}$, AND $u_i(s'_i, s_{-i}^*) > u_i(s_i, s_{-i}^*)$ for at least one $s_{-i}^*$.

    Let's re-evaluate Question 2's game:

    | Player 1 \ Player 2 | Left (L) | Right (R) |
    | :------------------ | :------- | :-------- |
    | **Up (U)**          | (1, 1)   | (0, 0)    |
    | **Down (D)**        | (1, 0)   | (0, 1)    |

    a) Player 1:
        *   Compare U and D:
            *   If P2 plays L: U(1) vs D(1) -> Equal.
            *   If P2 plays R: U(0) vs D(0) -> Equal.
        *   **No strictly dominated strategy for Player 1.**

    b) Player 2:
        *   Compare L and R:
            *   If P1 plays U: L(1) vs R(0) -> L is better.
            *   If P1 plays D: L(0) vs R(1) -> R is better.
        *   **No strictly dominated strategy for Player 2.**

    c) Player 1:
        *   Does U weakly dominate D? $u_1(U, L) = 1 \ge u_1(D, L) = 1$. $u_1(U, R) = 0 \ge u_1(D, R) = 0$. But there is no case where $u_1(U, s_{-i}^*) > u_1(D, s_{-i}^*)$. So U does not weakly dominate D.
        *   Does D weakly dominate U? $u_1(D, L) = 1 \ge u_1(U, L) = 1$. $u_1(D, R) = 0 \ge u_1(U, R) = 0$. But there is no case where $u_1(D, s_{-i}^*) > u_1(U, s_{-i}^*)$. So D does not weakly dominate U.
        *   **No weakly dominated strategy for Player 1.**

    d) Player 2:
        *   Does L weakly dominate R? $u_2(L, U) = 1 \ge u_2(R, U) = 0$. $u_2(L, D) = 0 \ge u_2(R, D) = 1$. This inequality $0 \ge 1$ is false. So L does not weakly dominate R.
        *   Does R weakly dominate L? $u_2(R, U) = 0 \ge u_2(L, U) = 1$. This inequality $0 \ge 1$ is false. So R does not weakly dominate L.
        *   **No weakly dominated strategy for Player 2.**

    *   **Self-Correction:** It seems the game in Question 2 as written does not exhibit dominance. Let's modify it slightly to create an example of weak dominance for the purpose of the exercise.

    **Revised Question 2 Game:**

    | Player 1 \ Player 2 | Left (L) | Right (R) |
    | :------------------ | :------- | :-------- |
    | **Up (U)**          | (2, 1)   | (1, 1)    |
    | **Down (D)**        | (1, 0)   | (1, 0)    |

    a) Strictly dominated for Player 1? No.
        *   U vs D: If P2 plays L: U(2) > D(1). If P2 plays R: U(1) = D(1). U is better or equal.
    b) Strictly dominated for Player 2? No.
        *   L vs R: If P1 plays U: L(1) = R(1). If P1 plays D: L(0) = R(0). Equal.

    c) Weakly dominated for Player 1?
        *   Compare U and D:
            *   $u_1(U, L) = 2 \ge u_1(D, L) = 1$ (Strictly better)
            *   $u_1(U, R) = 1 \ge u_1(D, R) = 1$ (Equal)
        *   **Yes, Player 1's strategy Down (D) is weakly dominated by Up (U).**

    d) Weakly dominated for Player 2?
        *   Compare L and R:
            *   $u_2(L, U) = 1 \ge u_2(R, U) = 1$ (Equal)
            *   $u_2(L, D) = 0 \ge u_2(R, D) = 0$ (Equal)
        *   **No, neither L nor R weakly dominates the other for Player 2.**

    e) If we first eliminate Player 1's weakly dominated strategy (Down), the game becomes:
        *   Player 1's only remaining strategy is Up (U).
        *   The game effectively reduces to Player 2 choosing between Left (L) and Right (R), knowing Player 1 will play Up.
        *   The payoff for Player 2 when Player 1 plays Up: L yields 1, R yields 1.
        *   **Player 2's best response is to be indifferent between Left and Right.** The resulting outcome would depend on how Player 2 breaks this tie. The set of outcomes could be (U, L) or (U, R).

    f) In the revised game, Player 2 has no weakly dominated strategies, so this step would not eliminate anything for Player 2. The game would remain unchanged.

---

### 6. Important Points to Remember

*   **Rationality Assumption:** Dominance assumes players are rational and always choose strategies that maximize their payoffs.
*   **Common Knowledge of Rationality:** For iterative elimination, it's often assumed that players know others are rational, and they know that others know they are rational, and so on (common knowledge).
*   **IESDS is Robust:** The outcome of IESDS is independent of the order of elimination.
*   **IEWDS is Sensitive:** The outcome of IEWDS can depend on the order of elimination, potentially leading to multiple outcomes. Care must be taken when applying IEWDS.
*   **Dominance as a Simplification Tool:** Dominance is a powerful tool for reducing the complexity of games, but it doesn't always lead to a unique outcome, especially with weak dominance.

---

This concludes the notes on Strategic Games and Dominance. Understanding these concepts is crucial for analyzing and solving various game theory problems.
