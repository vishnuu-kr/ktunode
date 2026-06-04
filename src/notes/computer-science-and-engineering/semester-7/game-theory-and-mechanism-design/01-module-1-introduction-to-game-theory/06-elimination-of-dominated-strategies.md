---
title: "elimination of dominated strategies"
subject: "GAME THEORY AND MECHANISM DESIGN"
module: "Module 1: Introduction to Game Theory "
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c5b0"
status: "completed"
scrapedAt: "2026-05-20T17:06:26.371Z"
---
# Game Theory and Mechanism Design

## Module 1: Introduction to Game Theory

### Topic: Elimination of Dominated Strategies

---

### Learning Outcomes:

By the end of this topic, you should be able to:

*   **Understand the concept of dominated strategies** in the context of strategic form games.
*   **Distinguish between strictly dominated and weakly dominated strategies.**
*   **Apply the process of iterative elimination of strictly dominated strategies (IESDS)** to find a unique Nash Equilibrium (if one exists).
*   **Explain the implications of eliminating weakly dominated strategies** and the potential for multiple outcomes depending on the order of elimination.
*   **Identify the relationship between IESDS and Nash Equilibrium.**
*   **Solve simple games using the elimination of dominated strategies.**

---

### 1. Key Concepts and Definitions

#### 1.1 Strategic Form Games (Normal Form Games)

*   A strategic form game is a representation of a game where players simultaneously choose their strategies, and payoffs are determined by the combination of strategies chosen.
*   It's typically represented by a **payoff matrix** for two-player games.

#### 1.2 Strategies

*   A **strategy** for a player is a complete plan of action that specifies what the player will do in every possible situation.
*   In a strategic form game, these are the available choices for each player.

#### 1.3 Payoffs

*   **Payoffs** represent the utility or satisfaction a player receives from the outcome of the game, given the strategies chosen by all players.

#### 1.4 Dominated Strategies

*   A strategy is **dominated** if there is another strategy available to the same player that yields a strictly better payoff, regardless of what the other players do.

---

### 2. Types of Dominated Strategies

#### 2.1 Strictly Dominated Strategy

*   **Definition:** A strategy $s_i$ for player $i$ is **strictly dominated** by another strategy $s'_i$ if, for every possible combination of strategies of the other players, player $i$'s payoff from choosing $s'_i$ is strictly greater than the payoff from choosing $s_i$.

    *   Mathematically, for player $i$:
        $u_i(s'_i, s_{-i}) > u_i(s_i, s_{-i})$ for all $s_{-i} \in S_{-i}$
        where:
        *   $u_i(\cdot, \cdot)$ is player $i$'s payoff function.
        *   $s'_i$ is the dominating strategy.
        *   $s_i$ is the strictly dominated strategy.
        *   $s_{-i}$ represents a combination of strategies chosen by all players except player $i$.
        *   $S_{-i}$ is the set of all possible combinations of strategies for players other than $i$.

*   **Intuition:** If a strategy is strictly dominated, a rational player will *never* choose it because there's always a better alternative.

#### 2.2 Weakly Dominated Strategy

*   **Definition:** A strategy $s_i$ for player $i$ is **weakly dominated** by another strategy $s'_i$ if, for every possible combination of strategies of the other players, player $i$'s payoff from choosing $s'_i$ is at least as great as the payoff from choosing $s_i$, AND there exists at least one combination of strategies of the other players for which the payoff from $s'_i$ is strictly greater than the payoff from $s_i$.

    *   Mathematically, for player $i$:
        $u_i(s'_i, s_{-i}) \ge u_i(s_i, s_{-i})$ for all $s_{-i} \in S_{-i}$
        AND
        $u_i(s'_i, s_{-i}) > u_i(s_i, s_{-i})$ for at least one $s_{-i} \in S_{-i}$

*   **Intuition:** If a strategy is weakly dominated, a rational player will *likely not* choose it, as the alternative is at least as good and sometimes better. However, unlike strictly dominated strategies, a rational player *might* still choose a weakly dominated strategy if they are indifferent between it and the dominating strategy in some scenarios.

---

### 3. Elimination of Strictly Dominated Strategies (IESDS)

*   **Principle:** Rational players will never play strictly dominated strategies. Therefore, we can eliminate these strategies from the game without changing the set of Nash Equilibria.
*   **Process:**
    1.  Identify a strictly dominated strategy for any player.
    2.  Eliminate that strategy and all associated payoffs from the game.
    3.  The remaining game is smaller. Repeat steps 1 and 2 on the reduced game.
    4.  Continue this process until no more strictly dominated strategies can be found.

*   **Outcome:** If this process leads to a single strategy profile, then that profile is the unique **Nash Equilibrium** of the game. This is known as **Iterative Elimination of Strictly Dominated Strategies (IESDS)**.

#### 3.1 Example: Prisoner's Dilemma

Consider the following Prisoner's Dilemma payoff matrix:

|           | Cooperate (C) | Defect (D)    |
| :-------- | :------------ | :------------ |
| **Cooperate (C)** | (3, 3)        | (0, 5)        |
| **Defect (D)**    | (5, 0)        | (1, 1)        |

*   **Player 1 (Row Player):**
    *   If Player 2 plays Cooperate (C): Player 1 gets 3 from C, 5 from D. D is better.
    *   If Player 2 plays Defect (D): Player 1 gets 0 from C, 1 from D. D is better.
    *   **Conclusion:** For Player 1, Defect (D) strictly dominates Cooperate (C). Player 1 will never play C.

*   **Eliminate Player 1's strategy C:** The game reduces to:

|       | Cooperate (C) | Defect (D) |
| :---- | :------------ | :--------- |
| **Defect (D)** | (5, 0)        | (1, 1)     |

*   **Player 2 (Column Player):**
    *   Now consider Player 2 in the reduced game. Player 2 only has the choice between C and D.
    *   If Player 1 plays Defect (D): Player 2 gets 0 from C, 1 from D. D is better.
    *   **Conclusion:** For Player 2, Defect (D) strictly dominates Cooperate (C) in the reduced game. Player 2 will never play C.

*   **Eliminate Player 2's strategy C:** The game reduces to a single outcome:

|       | Defect (D) |
| :---- | :--------- |
| **Defect (D)** | (1, 1)     |

*   **Result:** The unique Nash Equilibrium is (Defect, Defect). This is achieved through IESDS.

---

### 4. Elimination of Weakly Dominated Strategies

*   **Challenge:** The order of elimination of weakly dominated strategies can matter, potentially leading to different outcomes.
*   **Principle:** A rational player will not play a weakly dominated strategy if they can guarantee a strictly better outcome by switching, *unless* they believe the other player might play in a way that makes the weakly dominated strategy yield the same payoff as the dominating strategy.
*   **Process:** Similar to IESDS, but we eliminate weakly dominated strategies. However, the problem is that if multiple strategies weakly dominate a given strategy, or if a strategy is weakly dominated by multiple other strategies, the choice of which to eliminate first can affect the final outcome.

#### 4.1 Example: A Game with Weak Dominance

Consider the following game:

|           | Left (L) | Right (R) |
| :-------- | :------- | :-------- |
| **Up (U)** | (1, 1)   | (0, 0)    |
| **Down (D)** | (0, 0)   | (0, 0)    |

*   **Player 1 (Row Player):**
    *   If Player 2 plays L: Player 1 gets 1 from U, 0 from D. U is better.
    *   If Player 2 plays R: Player 1 gets 0 from U, 0 from D. Player 1 is indifferent.
    *   **Conclusion:** U weakly dominates D for Player 1 (since $1 \ge 0$ and $0 \ge 0$, with $1 > 0$ in one case).

*   **Player 2 (Column Player):**
    *   If Player 1 plays U: Player 2 gets 1 from L, 0 from R. L is better.
    *   If Player 1 plays D: Player 2 gets 0 from L, 0 from R. Player 2 is indifferent.
    *   **Conclusion:** L weakly dominates R for Player 2 (since $1 \ge 0$ and $0 \ge 0$, with $1 > 0$ in one case).

*   **Scenario 1: Eliminate Player 1's weakly dominated strategy (D) first.**
    *   The game reduces to:

    |       | Left (L) | Right (R) |
    | :---- | :------- | :-------- |
    | **Up (U)** | (1, 1)   | (0, 0)    |

    *   Now, for Player 2, L still weakly dominates R. If we eliminate R, we get (U, L) with payoff (1, 1).

*   **Scenario 2: Eliminate Player 2's weakly dominated strategy (R) first.**
    *   The game reduces to:

    |       | Left (L) |
    | :---- | :------- |
    | **Up (U)** | (1, 1)   |
    | **Down (D)** | (0, 0)   |

    *   Now, for Player 1, U still weakly dominates D. If we eliminate D, we get (U, L) with payoff (1, 1).

*   **In this specific example, the order of elimination doesn't change the outcome.** However, consider another game:

|           | Left (L) | Right (R) |
| :-------- | :------- | :-------- |
| **Up (U)** | (1, 1)   | (0, 0)    |
| **Middle (M)** | (1, 1)   | (0, 0)    |
| **Down (D)** | (0, 0)   | (0, 0)    |

*   **Player 1:**
    *   U weakly dominates D ($1 \ge 0, 0 \ge 0$, with $1 > 0$).
    *   M weakly dominates D ($1 \ge 0, 0 \ge 0$, with $1 > 0$).
    *   U and M are not dominated by each other (they yield identical payoffs).

*   **Player 2:**
    *   L weakly dominates R ($1 \ge 0, 1 \ge 0, 0 \ge 0$, with $1 > 0$ in two cases).

*   **If we eliminate D first (Player 1's choice):**
    *   Reduced game:
        |       | Left (L) | Right (R) |
        | :---- | :------- | :-------- |
        | **Up (U)** | (1, 1)   | (0, 0)    |
        | **Middle (M)** | (1, 1)   | (0, 0)    |
    *   Now, Player 2's R is still weakly dominated by L. Eliminating R yields:
        |       | Left (L) |
        | :---- | :------- |
        | **Up (U)** | (1, 1)   |
        | **Middle (M)** | (1, 1)   |
    *   Player 1's U and M are equivalent. If Player 1 chooses U, Player 2 chooses L. If Player 1 chooses M, Player 2 chooses L. The possible Nash Equilibria are (U, L) and (M, L).

*   **If we eliminate R first (Player 2's choice):**
    *   Reduced game:
        |       | Left (L) |
        | :---- | :------- |
        | **Up (U)** | (1, 1)   |
        | **Middle (M)** | (1, 1)   |
        | **Down (D)** | (0, 0)   |
    *   Now, Player 1's D is weakly dominated by both U and M.
        *   If we eliminate D: We get the same reduced game as above, leading to (U, L) and (M, L).
        *   If we assume Player 1 is rational and considers the potential indifference: Player 1 might not eliminate D if they are indifferent and consider the possibility of Player 2 playing R (which they did in the original game).

*   **Crucial Point:** The elimination of weakly dominated strategies is not always equivalent to finding Nash Equilibria. The set of Nash Equilibria might be larger than what can be found by eliminating weakly dominated strategies, and the order of elimination can lead to different results. IESDS (strictly dominated) is more robust.

---

### 5. Relationship to Nash Equilibrium (NE)

*   **Key Theorem:** If a game has a unique Nash Equilibrium, then IESDS will lead to that equilibrium.
*   **Important Note:**
    *   IESDS can eliminate strategies that are part of some Nash Equilibria.
    *   Not all games have a unique Nash Equilibrium.
    *   Not all games have strictly dominated strategies.
    *   The set of Nash Equilibria is always a subset of the outcomes surviving iterated elimination of *weakly* dominated strategies, but the converse is not always true. The set of Nash Equilibria is a subset of outcomes surviving iterated elimination of *strictly* dominated strategies.

---

### 6. Practice Questions and Exercises

#### Question 1:

Consider the following game:

|           | C1     | C2     |
| :-------- | :----- | :----- |
| **R1**    | (5, 2) | (3, 3) |
| **R2**    | (2, 0) | (1, 1) |

Which of Player 1's strategies is strictly dominated? If any, by which strategy?

**Answer:**
Let's analyze Player 1's choices:
*   If Player 2 plays C1: Player 1 gets 5 from R1, 2 from R2. R1 is better.
*   If Player 2 plays C2: Player 1 gets 3 from R1, 1 from R2. R1 is better.
Since Player 1 gets a strictly higher payoff from R1 than from R2, regardless of Player 2's choice, R2 is strictly dominated by R1 for Player 1.

#### Question 2:

Consider the following game:

|           | C1     | C2     |
| :-------- | :----- | :----- |
| **R1**    | (2, 2) | (0, 0) |
| **R2**    | (0, 0) | (1, 1) |

*   a) Is there a strictly dominated strategy for either player?
*   b) Is there a weakly dominated strategy for either player? If so, identify them.
*   c) Can you use elimination of dominated strategies to find a unique Nash Equilibrium?

**Answer:**
*   a) **Strictly Dominated Strategies:**
    *   Player 1:
        *   If Player 2 plays C1: R1 (2) vs R2 (0). R1 is better.
        *   If Player 2 plays C2: R1 (0) vs R2 (1). R2 is better.
        Neither R1 nor R2 strictly dominates the other for Player 1.
    *   Player 2:
        *   If Player 1 plays R1: C1 (2) vs C2 (0). C1 is better.
        *   If Player 1 plays R2: C1 (0) vs C2 (1). C2 is better.
        Neither C1 nor C2 strictly dominates the other for Player 2.
    *   **Conclusion:** No strictly dominated strategies exist.

*   b) **Weakly Dominated Strategies:**
    *   Player 1:
        *   If Player 2 plays C1: R1 (2) $\ge$ R2 (0).
        *   If Player 2 plays C2: R1 (0) $\le$ R2 (1).
        No weak dominance.
    *   Player 2:
        *   If Player 1 plays R1: C1 (2) $\ge$ C2 (0).
        *   If Player 1 plays R2: C1 (0) $\le$ C2 (1).
        No weak dominance.
    *   **Conclusion:** No weakly dominated strategies exist.

*   c) **Nash Equilibrium:**
    Since no strategies can be eliminated, we need to find Nash Equilibria by checking strategy profiles:
    *   (R1, C1): Payoffs (2, 2).
        *   Player 1 deviation: If P1 switches to R2, payoff becomes 0 (worse). No deviation.
        *   Player 2 deviation: If P2 switches to C2, payoff becomes 0 (worse). No deviation.
        *   **(R1, C1) is a Nash Equilibrium.**
    *   (R1, C2): Payoffs (0, 0).
        *   Player 1 deviation: If P1 switches to R2, payoff becomes 1 (better). P1 will deviate.
        *   **(R1, C2) is NOT a Nash Equilibrium.**
    *   (R2, C1): Payoffs (0, 0).
        *   Player 1 deviation: If P1 switches to R1, payoff becomes 2 (better). P1 will deviate.
        *   **(R2, C1) is NOT a Nash Equilibrium.**
    *   (R2, C2): Payoffs (1, 1).
        *   Player 1 deviation: If P1 switches to R1, payoff becomes 0 (worse). No deviation.
        *   Player 2 deviation: If P2 switches to C1, payoff becomes 0 (worse). No deviation.
        *   **(R2, C2) is a Nash Equilibrium.**

    **Conclusion:** This game has two Nash Equilibria: (R1, C1) and (R2, C2). Elimination of dominated strategies cannot be used to find a unique Nash Equilibrium here because no such strategies exist.

#### Question 3:

Consider the game below. Use Iterative Elimination of Strictly Dominated Strategies (IESDS) to find the Nash Equilibrium.

|           | L      | C      | R      |
| :-------- | :----- | :----- | :----- |
| **T**     | (2, 1) | (1, 0) | (0, 1) |
| **M**     | (1, 0) | (0, 1) | (1, 0) |
| **B**     | (0, 1) | (1, 0) | (0, 1) |

**Answer:**

**Step 1: Analyze Player 1 (Row Player)**

*   **Comparing T vs M:**
    *   If P2 plays L: T (2) > M (1)
    *   If P2 plays C: T (1) > M (0)
    *   If P2 plays R: T (0) = M (0)
    T weakly dominates M (T $\ge$ M, and T > M in two cases). M is *not* strictly dominated by T.

*   **Comparing T vs B:**
    *   If P2 plays L: T (2) > B (0)
    *   If P2 plays C: T (1) > B (1) - T is not strictly better.
    *   If P2 plays R: T (0) = B (0)
    T weakly dominates B (T $\ge$ B, and T > B in one case). B is *not* strictly dominated by T.

*   **Comparing M vs B:**
    *   If P2 plays L: M (1) > B (0)
    *   If P2 plays C: M (0) = B (0)
    *   If P2 plays R: M (1) > B (0)
    M weakly dominates B (M $\ge$ B, and M > B in two cases). B is *not* strictly dominated by M.

*   **Conclusion for Player 1:** No strictly dominated strategies for Player 1.

**Step 2: Analyze Player 2 (Column Player)**

*   **Comparing L vs C:**
    *   If P1 plays T: L (1) > C (0)
    *   If P1 plays M: L (0) = C (0)
    *   If P1 plays B: L (1) > C (0)
    L weakly dominates C. C is *not* strictly dominated by L.

*   **Comparing L vs R:**
    *   If P1 plays T: L (1) = R (1)
    *   If P1 plays M: L (0) = R (0)
    *   If P1 plays B: L (1) = R (1)
    L does not dominate R (payoffs are identical).

*   **Comparing C vs R:**
    *   If P1 plays T: C (0) < R (1)
    *   If P1 plays M: C (1) > R (0)
    *   If P1 plays B: C (0) < R (1)
    Neither C nor R strictly dominates the other.

*   **Conclusion for Player 2:** No strictly dominated strategies for Player 2.

**Wait!** Let's re-examine the problem. The question asks to use IESDS. If there are no strictly dominated strategies, then IESDS cannot be applied. This implies the problem setter might have intended a game where IESDS is applicable, or perhaps this is a trick question to check understanding.

Let's assume there was a typo and reconsider the player 1 row comparisons. If we are looking for STRICT dominance, then NO strategy is strictly dominated for either player. Therefore, IESDS cannot be performed.

**Let's consider a slight modification to make IESDS work, just for illustration if the original game was intended differently.**

**Hypothetical Modified Game (Example to demonstrate IESDS):**

|           | L      | C      | R      |
| :-------- | :----- | :----- | :----- |
| **T**     | (3, 1) | (2, 0) | (0, 1) |
| **M**     | (1, 0) | (1, 1) | (1, 0) |
| **B**     | (0, 1) | (0, 0) | (0, 1) |

*   **Player 1:**
    *   T vs M: (3>1, 2>1, 0=0). T weakly dominates M.
    *   T vs B: (3>0, 2>0, 0=0). T weakly dominates B.
    *   M vs B: (1>0, 1>0, 0=0). M weakly dominates B.
    No strict dominance for Player 1.

*   **Player 2:**
    *   L vs C: (1>0, 0=0, 1>0). L weakly dominates C.
    *   L vs R: (1=1, 0=0, 1=1). No dominance.
    *   C vs R: (0<1, 1>0, 0<1). No strict dominance.

    *   Ah, let's check Player 2's C vs R again.
        *   If P1 plays T: C(0) < R(1)
        *   If P1 plays M: C(1) > R(0)
        *   If P1 plays B: C(0) < R(1)
        Neither C nor R strictly dominates the other.

    *   Let's re-examine Player 1's M vs B.
        *   If P2 plays L: M(1) > B(0)
        *   If P2 plays C: M(1) > B(0)
        *   If P2 plays R: M(1) > B(0)
        M strictly dominates B for Player 1!

*   **IESDS on Modified Game:**
    1.  **Player 1:** Strategy B is strictly dominated by M. Eliminate B.

        |       | L      | C      | R      |
        | :---- | :----- | :----- | :----- |
        | **T** | (3, 1) | (2, 0) | (0, 1) |
        | **M** | (1, 0) | (1, 1) | (1, 0) |

    2.  **Now Player 2:**
        *   L vs C: (1 > 0, 0 < 1). No strict dominance.
        *   L vs R: (1 = 1, 0 = 0). No dominance.
        *   C vs R: (0 < 1, 1 > 0). No strict dominance.

    Still no strict dominance for Player 2.

**Let's consider another commonly used example where IESDS is clear:**

|           | Left (L) | Right (R) |
| :-------- | :------- | :-------- |
| **Up (U)** | (10, 10) | (0, 5)    |
| **Middle (M)** | (5, 0)   | (1, 1)    |
| **Down (D)** | (0, 5)   | (0, 0)    |

*   **Player 1:**
    *   U vs M: (10>5, 0<1, 0<1). No dominance.
    *   U vs D: (10>0, 0=0, 0=0). U weakly dominates D.
    *   M vs D: (5>0, 1>0, 0=0). M weakly dominates D.
    *   For Player 1, D is weakly dominated by both U and M.

*   **Player 2:**
    *   L vs R:
        *   If P1 plays U: L(10) > R(5)
        *   If P1 plays M: L(0) < R(1)
        *   If P1 plays D: L(5) > R(0)
        No dominance.

*   **Let's re-evaluate Player 1's strategies more carefully.**
    *   U vs D: (10>0, 0=0, 0=0). U is at least as good as D, and strictly better in one case. D is weakly dominated by U.
    *   M vs D: (5>0, 1>0, 0=0). M is at least as good as D, and strictly better in two cases. D is weakly dominated by M.

*   **Let's re-evaluate Player 2's strategies.**
    *   L vs R:
        *   If P1 plays U: L(10) > R(5)
        *   If P1 plays M: L(0) < R(1)
        *   If P1 plays D: L(5) > R(0)
        No strict dominance for Player 2.

    *   Ah, let's check Player 2's R vs L.
        *   If P1 plays U: R(5) < L(10)
        *   If P1 plays M: R(1) > L(0)
        *   If P1 plays D: R(0) < L(5)
        No strict dominance for Player 2.

**It seems the initial question was correct and the original game indeed had no strictly dominated strategies.** This is a valid outcome!

**The answer to Question 3 as originally written is:**
There are no strictly dominated strategies for either player in the given game. Therefore, Iterative Elimination of Strictly Dominated Strategies (IESDS) cannot be applied to simplify this game or find a Nash Equilibrium.

---

### 7. Important Points to Remember

*   **Rationality Assumption:** The elimination of dominated strategies relies on the assumption that players are perfectly rational and will always choose the strategy that yields them the best possible payoff, given their beliefs about other players' actions.
*   **IESDS is Powerful:** When it applies and leads to a unique outcome, it identifies the unique Nash Equilibrium.
*   **Weak Dominance is Tricky:** The order of elimination matters for weakly dominated strategies, and the set of outcomes might not correspond to the full set of Nash Equilibria.
*   **Not All Games are Solvable by Elimination:** Many games do not have strictly dominated strategies, requiring other methods to find Nash Equilibria (e.g., mixed strategies).
*   **IESDS $\implies$ NE:** Any strategy profile that survives IESDS is a Nash Equilibrium.
*   **NE $\not\implies$ IESDS Survivor:** Not all Nash Equilibria necessarily survive IESDS, especially if the game has multiple Nash Equilibria or if weak dominance is involved.

---
