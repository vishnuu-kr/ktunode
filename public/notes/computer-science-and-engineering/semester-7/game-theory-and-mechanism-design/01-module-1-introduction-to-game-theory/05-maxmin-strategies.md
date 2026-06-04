---
title: "Maxmin strategies"
subject: "GAME THEORY AND MECHANISM DESIGN"
module: "Module 1: Introduction to Game Theory "
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c5af"
status: "completed"
scrapedAt: "2026-05-20T17:06:25.676Z"
---
# GAME THEORY AND MECHANISM DESIGN - Module 1: Introduction to Game Theory

## Topic: Maxmin Strategies

### Learning Outcomes:

Upon successful completion of this topic, you will be able to:

*   Define the concept of a "rational player" in the context of game theory.
*   Understand and apply the "maxmin" criterion for selecting a strategy.
*   Differentiate between maxmin strategies for zero-sum games and general games.
*   Identify the role of maxmin strategies in situations of uncertainty and risk aversion.
*   Analyze and compute maxmin strategies for simple games.
*   Understand the relationship between maxmin strategies and the concept of security levels.

---

### 1. Introduction to Rational Players

In game theory, we often assume that players are **rational**. A rational player:

*   Has well-defined preferences over possible outcomes.
*   Acts in their own self-interest to maximize their own payoff (utility).
*   Considers the actions of other players.
*   Possesses complete information about the game (rules, payoffs, and rationality of other players – though this assumption can be relaxed in more advanced topics).

**Key Concept:** **Payoff Matrix:** A table that shows the payoffs for each player for every possible combination of strategies.

---

### 2. The Maxmin Criterion

The **maxmin** criterion is a decision-making rule used by a player who wants to be as **pessimistic** as possible about the actions of their opponents. It's a strategy for the **worst-case scenario**.

**Core Idea:** A player using the maxmin strategy aims to maximize their **minimum possible payoff**.

**Steps to find a Maxmin Strategy:**

1.  **For each of your possible strategies:** Identify the *worst possible payoff* you could receive, assuming your opponent(s) will choose the strategy that minimizes your payoff.
2.  **Compare these worst-case payoffs:** Choose the strategy that yields the *highest* (maximum) of these worst-case payoffs.

**Definition:**
The **maxmin value** (or security level) for a player is the maximum of the minimum payoffs they can guarantee themselves, regardless of what other players do.
A **maxmin strategy** is a strategy that achieves this maxmin value.

---

### 3. Maxmin Strategies in Zero-Sum Games

**Zero-Sum Game:** A game where the sum of payoffs for all players is zero for every outcome. What one player wins, another player loses.

In a two-player zero-sum game, if Player 1 chooses a strategy, Player 2 will respond in a way that is most detrimental to Player 1.

**Example: Matching Pennies (Zero-Sum)**

Let's say Player 1 (Row Player) wants to match pennies, and Player 2 (Column Player) wants to mismatch.

| Player 1 \ Player 2 | Heads (H) | Tails (T) |
| :------------------ | :-------- | :-------- |
| **Heads (H)**       | +1        | -1        |
| **Tails (T)**       | -1        | +1        |

*   **Player 1's Perspective:**
    *   If Player 1 chooses **Heads (H)**:
        *   If Player 2 chooses H, Player 1 gets +1.
        *   If Player 2 chooses T, Player 1 gets -1.
        *   The **minimum payoff** for Player 1 choosing H is **-1**.
    *   If Player 1 chooses **Tails (T)**:
        *   If Player 2 chooses H, Player 1 gets -1.
        *   If Player 2 chooses T, Player 1 gets +1.
        *   The **minimum payoff** for Player 1 choosing T is **-1**.

*   **Player 1's Maxmin Strategy:**
    *   Minimum payoff for H = -1
    *   Minimum payoff for T = -1
    *   Player 1 chooses the strategy that maximizes these minimums. In this case, both H and T give a minimum of -1. So, Player 1 can choose either H or T as a maxmin strategy. The maxmin value for Player 1 is **-1**.

*   **Player 2's Perspective (Player 2 wants to minimize Player 1's payoff, which is equivalent to maximizing their own payoff, which is the negative of Player 1's payoff):**
    *   If Player 2 chooses **Heads (H)**:
        *   If Player 1 chooses H, Player 2 gets -1.
        *   If Player 1 chooses T, Player 2 gets +1.
        *   The **minimum payoff** for Player 2 choosing H is **-1**.
    *   If Player 2 chooses **Tails (T)**:
        *   If Player 1 chooses H, Player 2 gets +1.
        *   If Player 1 chooses T, Player 2 gets -1.
        *   The **minimum payoff** for Player 2 choosing T is **-1**.

*   **Player 2's Maxmin Strategy:**
    *   Minimum payoff for H = -1
    *   Minimum payoff for T = -1
    *   Player 2 can choose either H or T as a maxmin strategy. The maxmin value for Player 2 is **-1**.

**Important Note:** In zero-sum games, the maxmin strategy for one player corresponds to the **minmax strategy** for the other player (where "minmax" means minimizing the maximum possible payoff to the opponent). If a game has a saddle point (a pure strategy Nash Equilibrium), the maxmin value equals the minmax value.

---

### 4. Maxmin Strategies in General (Non-Zero-Sum) Games

The maxmin criterion can also be applied to non-zero-sum games. However, in these games, a player's "worst-case scenario" might not be solely determined by the opponent trying to minimize their payoff. It's more about minimizing their *own* payoff, considering all possible opponent actions.

**Example: A Simple Non-Zero-Sum Game**

| Player 1 \ Player 2 | Left (L) | Right (R) |
| :------------------ | :------- | :-------- |
| **Up (U)**          | (3, 2)   | (1, 0)    |
| **Down (D)**        | (0, 1)   | (2, 3)    |

*   **Player 1's Perspective:**
    *   If Player 1 chooses **Up (U)**:
        *   If Player 2 chooses L, Player 1 gets 3.
        *   If Player 2 chooses R, Player 1 gets 1.
        *   The **minimum payoff** for Player 1 choosing U is **1** (when Player 2 chooses R).
    *   If Player 1 chooses **Down (D)**:
        *   If Player 2 chooses L, Player 1 gets 0.
        *   If Player 2 chooses R, Player 1 gets 2.
        *   The **minimum payoff** for Player 1 choosing D is **0** (when Player 2 chooses L).

*   **Player 1's Maxmin Strategy:**
    *   Minimum payoff for U = 1
    *   Minimum payoff for D = 0
    *   Player 1 chooses the strategy that maximizes these minimums. Player 1's maxmin strategy is **Up (U)**, with a maxmin value of **1**.

*   **Player 2's Perspective:**
    *   If Player 2 chooses **Left (L)**:
        *   If Player 1 chooses U, Player 2 gets 2.
        *   If Player 1 chooses D, Player 2 gets 1.
        *   The **minimum payoff** for Player 2 choosing L is **1** (when Player 1 chooses D).
    *   If Player 2 chooses **Right (R)**:
        *   If Player 1 chooses U, Player 2 gets 0.
        *   If Player 1 chooses D, Player 2 gets 3.
        *   The **minimum payoff** for Player 2 choosing R is **0** (when Player 1 chooses U).

*   **Player 2's Maxmin Strategy:**
    *   Minimum payoff for L = 1
    *   Minimum payoff for R = 0
    *   Player 2 chooses the strategy that maximizes these minimums. Player 2's maxmin strategy is **Left (L)**, with a maxmin value of **1**.

**Observation:** In this non-zero-sum game, both players adopt a cautious, risk-averse strategy. Player 1 guarantees at least 1 by playing Up, and Player 2 guarantees at least 1 by playing Left.

---

### 5. Role of Maxmin Strategies: Uncertainty and Risk Aversion

*   **Dealing with Uncertainty:** The maxmin strategy is particularly useful when a player is uncertain about the actions of their opponents. It provides a way to make a decision that is robust against the worst possible outcomes.
*   **Risk Aversion:** Players who are highly risk-averse tend to favor maxmin strategies. They prioritize avoiding very bad outcomes over achieving potentially higher, but less certain, gains.
*   **Security Level:** The maxmin value represents a player's **security level** – the minimum payoff they can guarantee for themselves, irrespective of the opponent's actions.

---

### 6. Maxmin Strategies vs. Other Concepts (Briefly)

*   **Maximax Strategy:** The opposite of maxmin. A maximax player is optimistic and chooses the strategy that maximizes their *maximum possible payoff*. This is generally considered a more reckless strategy.
*   **Nash Equilibrium:** A state where no player can improve their payoff by unilaterally changing their strategy, assuming other players' strategies remain unchanged. Maxmin strategies might not always lead to a Nash Equilibrium, nor are all Nash Equilibrium strategies maxmin strategies. However, in zero-sum games with saddle points, the Nash Equilibrium strategies are also maxmin (and minmax) strategies.

---

### 7. Practice Questions

**Question 1:**
Consider the following payoff matrix for a two-player game. Player 1 is the row player, and Player 2 is the column player.

| Player 1 \ Player 2 | C1    | C2    |
| :------------------ | :---- | :---- |
| **R1**              | (5, 2) | (2, 4) |
| **R2**              | (3, 1) | (4, 3) |

What is Player 1's maxmin strategy and maxmin value?

**Question 2:**
Is the following statement true or false? "In any zero-sum game, a player's maxmin strategy is always optimal." Explain your reasoning.

**Question 3:**
Find the maxmin strategy and value for Player 2 in the game from Question 1.

**Question 4:**
Consider the following zero-sum game. Player 1's payoffs are shown.

| Player 1 \ Player 2 | A     | B     |
| :------------------ | :---- | :---- |
| **X**               | 10    | -5    |
| **Y**               | -2    | 8     |

What is Player 1's maxmin strategy and value?

---

### 8. Answers to Practice Questions

**Answer 1:**
*   **Player 1's Strategy Analysis:**
    *   If Player 1 chooses **R1**: The minimum payoff is 2 (when Player 2 chooses C2).
    *   If Player 1 chooses **R2**: The minimum payoff is 3 (when Player 2 chooses C1).
*   **Player 1's Maxmin Strategy:** Player 1 compares the minimum payoffs (2 and 3). The maximum of these is 3. Therefore, Player 1's maxmin strategy is **R2**, and the maxmin value is **3**.

**Answer 2:**
**False.** While a maxmin strategy guarantees a certain minimum payoff and is prudent in zero-sum games, it's not *always* optimal in the sense of achieving the best possible outcome if the opponent plays in a predictable way that isn't their absolute worst-case for you. For example, if the game has a saddle point (a pure strategy Nash Equilibrium), then the maxmin strategy (and minmax strategy) *is* part of that equilibrium and can be considered optimal. However, in games without a saddle point where mixed strategies are required, the maxmin concept applies to the *expected* payoffs and might not be the full story. It provides a security level, but not necessarily the highest achievable payoff.

**Answer 3:**
*   **Player 2's Strategy Analysis:**
    *   If Player 2 chooses **C1**: Player 2's payoffs are 2 (if Player 1 plays R1) and 1 (if Player 1 plays R2). The minimum payoff for Player 2 choosing C1 is **1**.
    *   If Player 2 chooses **C2**: Player 2's payoffs are 4 (if Player 1 plays R1) and 3 (if Player 1 plays R2). The minimum payoff for Player 2 choosing C2 is **3**.
*   **Player 2's Maxmin Strategy:** Player 2 compares the minimum payoffs (1 and 3). The maximum of these is 3. Therefore, Player 2's maxmin strategy is **C2**, and the maxmin value is **3**.

**Answer 4:**
*   **Player 1's Strategy Analysis:**
    *   If Player 1 chooses **X**: The minimum payoff is -5 (when Player 2 chooses B).
    *   If Player 1 chooses **Y**: The minimum payoff is -2 (when Player 2 chooses A).
*   **Player 1's Maxmin Strategy:** Player 1 compares the minimum payoffs (-5 and -2). The maximum of these is -2. Therefore, Player 1's maxmin strategy is **Y**, and the maxmin value is **-2**.

---

### 9. Important Points to Remember

*   **Maxmin is Pessimistic:** It's about maximizing your *worst-case* outcome.
*   **Security Level:** The maxmin value is the minimum payoff you can guarantee yourself.
*   **Risk Aversion:** This strategy is favored by risk-averse players or in situations of high uncertainty about opponents' actions.
*   **Zero-Sum Games:** Maxmin is a fundamental concept here, often aligning with optimal play when a saddle point exists.
*   **Non-Zero-Sum Games:** Maxmin still provides a security level but might not capture all strategic considerations.
*   **Contrast with Maximax:** Maximax is optimistic, aiming for the best possible outcome, even if it's unlikely.
