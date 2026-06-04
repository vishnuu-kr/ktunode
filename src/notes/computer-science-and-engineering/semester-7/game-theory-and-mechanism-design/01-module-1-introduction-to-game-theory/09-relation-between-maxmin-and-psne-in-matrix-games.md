---
title: "relation between maxmin and PSNE in matrix games"
subject: "GAME THEORY AND MECHANISM DESIGN"
module: "Module 1: Introduction to Game Theory "
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c5b3"
status: "completed"
scrapedAt: "2026-05-20T17:06:28.518Z"
---
# Module 1: Introduction to Game Theory - Relation Between Maximin and PSNE in Matrix Games

## 1. Introduction to Matrix Games

Matrix games, also known as normal-form games, are a fundamental concept in game theory used to represent strategic interactions between two or more players. They are characterized by:

*   **Players:** Two or more decision-makers.
*   **Strategies:** A set of actions available to each player.
*   **Payoffs:** The outcome or utility received by each player for every combination of strategies chosen by all players.

In a **two-player, zero-sum matrix game**, the sum of the payoffs for the two players is always zero. This means one player's gain is the other player's loss.

### Key Concepts:

*   **Payoff Matrix:** A table that displays the payoffs for each player for every possible combination of strategies. For a two-player game, it's typically represented with rows for Player 1's strategies and columns for Player 2's strategies. The entries in the matrix are the payoffs. In a zero-sum game, the matrix usually shows only Player 1's payoffs, with Player 2's payoffs being the negative of Player 1's.
*   **Pure Strategy:** A player's commitment to choose a specific action with certainty.
*   **Mixed Strategy:** A probability distribution over a player's pure strategies.

## 2. Maximin Strategy and Maximin Value

The **maximin strategy** is a concept used in situations of uncertainty, particularly in **zero-sum games**, where a player wants to maximize their minimum possible payoff. It's a pessimistic approach, assuming the opponent will always act to minimize your payoff.

### Key Concepts:

*   **Maximin Strategy:** The strategy that yields the highest payoff assuming the worst-case scenario for that strategy.
*   **Maximin Value (Lower Value of the Game):** The payoff achieved by a player when they play their maximin strategy, and the opponent also plays optimally to minimize that player's payoff.

### Steps to Find the Maximin Strategy and Value:

1.  **For each row (Player 1's strategies):** Identify the minimum payoff in that row. This represents the worst-case outcome for Player 1 if they choose that strategy, assuming Player 2 will play their best response to minimize Player 1's gain.
2.  **Maximin Value:** Choose the row that has the highest of these minimum payoffs. The value in that cell is the maximin value for Player 1.
3.  **For each column (Player 2's strategies):** Identify the maximum payoff in that column (for Player 1). Since it's a zero-sum game, this represents the worst-case outcome for Player 2 if they choose that strategy, assuming Player 1 will play their best response to maximize their gain. Player 2 wants to minimize Player 1's payoff.
4.  **Minimax Value (Upper Value of the Game):** Choose the column that has the lowest of these maximum payoffs. The value in that cell is the minimax value for Player 2 (from Player 1's perspective).

### Example 1:

Consider the following zero-sum game payoff matrix for Player 1:

|             | Player 2: Left | Player 2: Right |
| :---------- | :------------- | :-------------- |
| **Player 1: Up** | 3              | -1              |
| **Player 1: Down** | -2             | 1               |

**Player 1's Maximin:**

*   If Player 1 plays **Up**: Minimum payoff is -1 (when Player 2 plays Right).
*   If Player 1 plays **Down**: Minimum payoff is -2 (when Player 2 plays Left).

Player 1 chooses the strategy that maximizes these minimums. The maximum of {-1, -2} is -1.
Therefore, Player 1's maximin strategy is **Up**, and the maximin value is **-1**.

**Player 2's Minimax (from Player 1's perspective):**

*   If Player 2 plays **Left**: Maximum payoff for Player 1 is 3 (when Player 1 plays Up).
*   If Player 2 plays **Right**: Maximum payoff for Player 1 is 1 (when Player 1 plays Down).

Player 2 wants to minimize Player 1's payoff. Player 2 chooses the strategy that minimizes these maximums. The minimum of {3, 1} is 1.
Therefore, Player 2's minimax strategy is **Right**, and the minimax value is **1**.

## 3. Pure Strategy Nash Equilibrium (PSNE)

A **Pure Strategy Nash Equilibrium (PSNE)** is a state in a game where no player can improve their payoff by unilaterally changing their strategy, assuming the other players' strategies remain unchanged. In simpler terms, it's a stable outcome where everyone is playing their best response to everyone else's best response.

### Key Concepts:

*   **Best Response:** A strategy that yields the highest payoff for a player, given the strategies chosen by other players.
*   **Nash Equilibrium:** A set of strategies (one for each player) where each player's strategy is a best response to the other players' strategies.
*   **Pure Strategy Nash Equilibrium (PSNE):** A Nash Equilibrium where all players play a pure strategy.

### Steps to Find PSNE in a Matrix Game:

1.  **For Player 1:** For each column (Player 2's strategy), identify the row(s) that give Player 1 the highest payoff. Underline these payoffs.
2.  **For Player 2:** For each row (Player 1's strategy), identify the column(s) that give Player 2 the highest payoff. In a zero-sum game, this means finding the minimum payoff for Player 1 in that row (which corresponds to the maximum payoff for Player 2). Underline Player 1's payoffs in these cells.
3.  **Identify PSNE:** Any cell where the payoff for Player 1 is underlined by both players is a Pure Strategy Nash Equilibrium.

### Example 1 (Continued):

|             | Player 2: Left | Player 2: Right |
| :---------- | :------------- | :-------------- |
| **Player 1: Up** | **3**          | -1              |
| **Player 1: Down** | -2             | **1**           |

**Player 1's Best Responses:**

*   If Player 2 plays Left: Player 1's best response is **Up** (3 > -2). Underline the 3.
*   If Player 2 plays Right: Player 1's best response is **Down** (1 > -1). Underline the 1.

**Player 2's Best Responses (minimizing Player 1's payoff):**

*   If Player 1 plays Up: Player 2's best response is **Right** (-1 < 3). Underline the -1.
*   If Player 1 plays Down: Player 2's best response is **Right** (1 < -2 is false, so minimum is -2. Player 2 wants to minimize Player 1's payoff, so Player 2 would choose Right if Player 1 plays Down, as 1 < 3. However, we're looking for Player 2's best response given Player 1's strategy. Player 2 wants the *minimum* payoff for Player 1 in that row. The minimum in the "Down" row is -2. So Player 2's best response to Player 1 playing Down is to play Left to achieve -2 for Player 1.)

Let's re-do Player 2's best response carefully, focusing on minimizing Player 1's payoff in each row:

*   If Player 1 plays **Up**: Player 1's payoffs are 3 (Left) and -1 (Right). Player 2 wants to minimize Player 1's payoff, so Player 2's best response is **Right** (yielding -1). Underline the -1.
*   If Player 1 plays **Down**: Player 1's payoffs are -2 (Left) and 1 (Right). Player 2 wants to minimize Player 1's payoff, so Player 2's best response is **Left** (yielding -2). Underline the -2.

Now, let's mark the best responses on the matrix:

|             | Player 2: Left | Player 2: Right |
| :---------- | :------------- | :-------------- |
| **Player 1: Up** | **3**          | -**1**          |
| **Player 1: Down** | -**2**         | **1**           |

There is no cell where both payoffs are underlined. Therefore, this game has **no Pure Strategy Nash Equilibrium**.

### Example 2: Matching Pennies (Zero-Sum)

Player 1 wants to match, Player 2 wants to mismatch.

|             | Player 2: Heads | Player 2: Tails |
| :---------- | :-------------- | :-------------- |
| **Player 1: Heads** | 1               | -1              |
| **Player 1: Tails** | -1              | 1               |

**Player 1's Best Responses:**

*   If Player 2 plays Heads: Player 1's best response is **Heads** (1 > -1). Underline the 1.
*   If Player 2 plays Tails: Player 1's best response is **Tails** (1 > -1). Underline the 1.

**Player 2's Best Responses (minimizing Player 1's payoff):**

*   If Player 1 plays Heads: Player 1's payoffs are 1 (Heads) and -1 (Tails). Player 2 wants to minimize Player 1's payoff, so Player 2's best response is **Tails** (yielding -1). Underline the -1.
*   If Player 1 plays Tails: Player 1's payoffs are -1 (Heads) and 1 (Tails). Player 2 wants to minimize Player 1's payoff, so Player 2's best response is **Heads** (yielding -1). Underline the -1.

Marking best responses:

|             | Player 2: Heads | Player 2: Tails |
| :---------- | :-------------- | :-------------- |
| **Player 1: Heads** | **1**           | -**1**          |
| **Player 1: Tails** | -**1**          | **1**           |

Again, no cell has both payoffs underlined. Matching Pennies has **no Pure Strategy Nash Equilibrium**.

### Example 3: A Game with a PSNE

|             | Player 2: Left | Player 2: Right |
| :---------- | :------------- | :-------------- |
| **Player 1: Up** | **2**          | 0               |
| **Player 1: Down** | 0              | **1**           |

**Player 1's Best Responses:**

*   If Player 2 plays Left: Player 1's best response is **Up** (2 > 0). Underline the 2.
*   If Player 2 plays Right: Player 1's best response is **Down** (1 > 0). Underline the 1.

**Player 2's Best Responses (minimizing Player 1's payoff):**

*   If Player 1 plays Up: Player 1's payoffs are 2 (Left) and 0 (Right). Player 2's best response is **Right** (yielding 0). Underline the 0.
*   If Player 1 plays Down: Player 1's payoffs are 0 (Left) and 1 (Right). Player 2's best response is **Left** (yielding 0). Underline the 0.

Marking best responses:

|             | Player 2: Left | Player 2: Right |
| :---------- | :------------- | :-------------- |
| **Player 1: Up** | **2**          | -**0**          |
| **Player 1: Down** | -**0**         | **1**           |

No cell has both payoffs underlined. Wait, let's re-check Player 2's best responses.

**Player 2's Best Responses (minimizing Player 1's payoff):**

*   If Player 1 plays **Up**: Payoffs for Player 1 are 2 (Left) and 0 (Right). Player 2 chooses **Right** to minimize Player 1's payoff (0). Underline the 0.
*   If Player 1 plays **Down**: Payoffs for Player 1 are 0 (Left) and 1 (Right). Player 2 chooses **Left** to minimize Player 1's payoff (0). Underline the 0.

Let's mark this correctly on the matrix. The underline should be on Player 1's payoff.

|             | Player 2: Left | Player 2: Right |
| :---------- | :------------- | :-------------- |
| **Player 1: Up** | **2**          | 0               |
| **Player 1: Down** | 0              | **1**           |

**Player 1's Best Responses:**
*   Col Left: Player 1 chooses **Up** (2 > 0). Underline 2.
*   Col Right: Player 1 chooses **Down** (1 > 0). Underline 1.

**Player 2's Best Responses (minimizing Player 1's payoff):**
*   Row Up: Player 1's payoffs are 2 (Left) and 0 (Right). Player 2 chooses **Right** to minimize Player 1's payoff (0). Underline 0.
*   Row Down: Player 1's payoffs are 0 (Left) and 1 (Right). Player 2 chooses **Left** to minimize Player 1's payoff (0). Underline 0.

Marking best responses:

|             | Player 2: Left | Player 2: Right |
| :---------- | :------------- | :-------------- |
| **Player 1: Up** | **2**          | 0               |
| **Player 1: Down** | 0              | **1**           |

This example also doesn't seem to have a PSNE. Let's try a canonical example.

### Example 4: Rock-Paper-Scissors (Zero-Sum)

|             | Player 2: R | Player 2: P | Player 2: S |
| :---------- | :---------- | :---------- | :---------- |
| **Player 1: R** | 0           | -1          | 1           |
| **Player 1: P** | 1           | 0           | -1          |
| **Player 1: S** | -1          | 1           | 0           |

**Player 1's Best Responses:**
*   Col R: Player 1 chooses **P** (1 > 0 > -1). Underline 1.
*   Col P: Player 1 chooses **S** (1 > 0 > -1). Underline 1.
*   Col S: Player 1 chooses **R** (1 > 0 > -1). Underline 1.

**Player 2's Best Responses (minimizing Player 1's payoff):**
*   Row R: Player 1's payoffs are 0 (R), -1 (P), 1 (S). Player 2 chooses **P** to minimize Player 1's payoff (-1). Underline -1.
*   Row P: Player 1's payoffs are 1 (R), 0 (P), -1 (S). Player 2 chooses **S** to minimize Player 1's payoff (-1). Underline -1.
*   Row S: Player 1's payoffs are -1 (R), 1 (P), 0 (S). Player 2 chooses **R** to minimize Player 1's payoff (-1). Underline -1.

Marking best responses:

|             | Player 2: R | Player 2: P | Player 2: S |
| :---------- | :---------- | :---------- | :---------- |
| **Player 1: R** | 0           | -**1**      | **1**       |
| **Player 1: P** | **1**       | 0           | -**1**      |
| **Player 1: S** | -**1**      | **1**       | 0           |

No PSNE in Rock-Paper-Scissors. This is a common result.

## 4. The Relation Between Maximin and PSNE in Matrix Games

The core of the relation lies in **zero-sum games**.

### 4.1 In Two-Player Zero-Sum Games:

In a two-player zero-sum game, if a **Pure Strategy Nash Equilibrium (PSNE)** exists, then:

*   The payoff at the PSNE is equal to Player 1's maximin value and Player 2's minimax value.
*   The PSNE strategy profile is precisely the pair of maximin and minimax strategies.

This is due to a fundamental theorem in game theory: **the Minimax Theorem**.

**Minimax Theorem (for zero-sum games):**

For any two-player zero-sum game, there exists a value $v$ (the value of the game) such that:

1.  Player 1 can guarantee an expected payoff of at least $v$, regardless of Player 2's strategy. This is achieved by playing their maximin (or optimal mixed) strategy.
2.  Player 2 can guarantee that Player 1's expected payoff is at most $v$, regardless of Player 1's strategy. This is achieved by playing their minimax (or optimal mixed) strategy.

**When a PSNE exists in a zero-sum game:**

*   The maximin strategy for Player 1 and the minimax strategy for Player 2 coincide with their respective pure strategies in the PSNE.
*   The payoff at the PSNE is the "saddle point" of the payoff matrix, where the value is the maximum in its column and the minimum in its row. This means the maximin value equals the minimax value.

**In simpler terms:** If a game has a stable pure strategy outcome (PSNE), that outcome is the best both players can do under their worst-case assumptions. Player 1 gets their highest possible guaranteed minimum, and Player 2 ensures Player 1 doesn't get more than that guaranteed minimum.

### 4.2 When a PSNE Does NOT Exist:

If a two-player zero-sum game does not have a PSNE, it means that the maximin value is strictly less than the minimax value.

*   **Maximin Value < Minimax Value**

In such cases, players must resort to **mixed strategies** to achieve the game's value. The Minimax Theorem guarantees that there *will* be a value for the game, but it might only be achievable through a combination of strategies (mixed strategies).

### Example: Connecting Maximin, Minimax, and PSNE

Consider the following zero-sum game:

|             | Player 2: Left | Player 2: Right |
| :---------- | :------------- | :-------------- |
| **Player 1: Up** | **3**          | **1**           |
| **Player 1: Down** | **2**          | **4**           |

**Player 1's Maximin:**
*   Up: min(3, 1) = 1
*   Down: min(2, 4) = 2
*   Maximin value = max(1, 2) = **2** (Player 1 plays Down)

**Player 2's Minimax (minimizing P1's payoff):**
*   Left: max(3, 2) = 3
*   Right: max(1, 4) = 4
*   Minimax value = min(3, 4) = **3** (Player 2 plays Left)

Here, Maximin (2) < Minimax (3). This indicates no PSNE. Let's verify by finding PSNE:

**Player 1's Best Responses:**
*   Col Left: Up (3 > 2). Underline 3.
*   Col Right: Down (4 > 1). Underline 4.

**Player 2's Best Responses (minimizing P1's payoff):**
*   Row Up: Left (3 > 1). Minimize P1's payoff is 1, so choose Right. Underline 1.
*   Row Down: Left (2 < 4). Minimize P1's payoff is 2, so choose Left. Underline 2.

|             | Player 2: Left | Player 2: Right |
| :---------- | :------------- | :-------------- |
| **Player 1: Up** | **3**          | 1               |
| **Player 1: Down** | 2              | **4**           |

No PSNE. The maximin value (2) is less than the minimax value (3).

---

Now, consider a game where a PSNE exists:

|             | Player 2: Left | Player 2: Right |
| :---------- | :------------- | :-------------- |
| **Player 1: Up** | **2**          | **0**           |
| **Player 1: Down** | **1**          | **0**           |

**Player 1's Maximin:**
*   Up: min(2, 0) = 0
*   Down: min(1, 0) = 0
*   Maximin value = max(0, 0) = **0** (Both Up and Down can yield 0)

**Player 2's Minimax (minimizing P1's payoff):**
*   Left: max(2, 1) = 2
*   Right: max(0, 0) = 0
*   Minimax value = min(2, 0) = **0** (Player 2 plays Right)

Here, Maximin (0) = Minimax (0). This suggests a PSNE might exist, and the value of the game is 0. Let's find the PSNE:

**Player 1's Best Responses:**
*   Col Left: Up (2 > 1). Underline 2.
*   Col Right: Both Up and Down yield 0, so both are best responses. Underline both 0s.

**Player 2's Best Responses (minimizing P1's payoff):**
*   Row Up: Left (2 > 0). Minimize P1's payoff is 0, so choose Right. Underline 0.
*   Row Down: Left (1 > 0). Minimize P1's payoff is 0, so choose Right. Underline 0.

|             | Player 2: Left | Player 2: Right |
| :---------- | :------------- | :-------------- |
| **Player 1: Up** | **2**          | **0**           |
| **Player 1: Down** | 1              | **0**           |

The cell (Up, Right) has both payoffs underlined (2 by P1, 0 by P2 if P1 plays Up). Wait, the underlining needs to be on the relevant player's payoff.

Let's redo the PSNE finding method with correct marking:

|             | Player 2: Left | Player 2: Right |
| :---------- | :------------- | :-------------- |
| **Player 1: Up** | 2              | 0               |
| **Player 1: Down** | 1              | 0               |

**Player 1's Best Responses (underline P1's payoff):**
*   Col Left: Player 1 chooses **Up** (2 > 1). Underline the 2.
*   Col Right: Player 1 chooses **Up** or **Down** (both 0). Underline both 0s.

**Player 2's Best Responses (underline P1's payoff from P2's perspective):**
*   Row Up: P1 payoffs are 2 (Left) and 0 (Right). Player 2 wants to minimize P1's payoff. P2 chooses **Right** (0 < 2). Underline the 0.
*   Row Down: P1 payoffs are 1 (Left) and 0 (Right). Player 2 wants to minimize P1's payoff. P2 chooses **Right** (0 < 1). Underline the 0.

|             | Player 2: Left | Player 2: Right |
| :---------- | :------------- | :-------------- |
| **Player 1: Up** | **2**          | **0**           |
| **Player 1: Down** | 1              | **0**           |

The cell (Up, Right) has both payoffs underlined. This is a PSNE. The payoff is 0.
The maximin value was 0, and the minimax value was 0. They are equal, and the PSNE payoff is that value.

---

### 4.3 Non-Zero-Sum Games:

In **non-zero-sum games**, the relationship between maximin/minimax and PSNE is less direct.

*   **Maximin and Minimax are still relevant for players playing defensively:** A player might still calculate their maximin strategy to ensure a minimum guaranteed payoff, even if the game is not zero-sum.
*   **PSNE is the primary solution concept for stability:** In non-zero-sum games, PSNE (and other Nash Equilibria concepts like mixed strategy Nash Equilibria) are more direct indicators of stable outcomes.
*   **Maximin value does not necessarily equal the PSNE payoff:** A player's maximin strategy might be too cautious and not lead to a PSNE. Conversely, a PSNE might exist that gives a higher payoff to one player than their maximin strategy would allow, if the other player cooperates.

**Example: Prisoner's Dilemma**

|             | Player 2: Cooperate | Player 2: Defect |
| :---------- | :------------------ | :--------------- |
| **Player 1: Cooperate** | (3, 3)              | (0, 5)           |
| **Player 1: Defect** | (5, 0)              | (1, 1)           |

This is a non-zero-sum game. We look for payoffs where both are underlined for PSNE.

**Player 1's Best Responses:**
*   Col Cooperate: Player 1 chooses **Defect** (5 > 3). Underline 5.
*   Col Defect: Player 1 chooses **Defect** (1 > 0). Underline 1.

**Player 2's Best Responses:**
*   Row Cooperate: Player 2 chooses **Defect** (5 > 3). Underline 5.
*   Row Defect: Player 2 chooses **Defect** (1 > 0). Underline 1.

|             | Player 2: Cooperate | Player 2: Defect |
| :---------- | :------------------ | :--------------- |
| **Player 1: Cooperate** | (3, 3)              | (0, **5**)           |
| **Player 1: Defect** | (**5**, 0)              | (**1**, **1**)           |

The cell (Defect, Defect) has both payoffs underlined. So, (Defect, Defect) is a PSNE with a payoff of (1, 1).

**Player 1's Maximin:**
*   Cooperate: Minimum payoff for P1 is 0.
*   Defect: Minimum payoff for P1 is 1.
*   Maximin value for P1 is max(0, 1) = **1**. (Player 1's maximin strategy is Defect).

In this case, Player 1's maximin strategy (Defect) aligns with their PSNE strategy. The maximin value of 1 is also the payoff in the PSNE. However, this is not always the case.

## 5. Important Points to Remember

*   **Zero-Sum Games are Key:** The direct relationship between maximin and PSNE is strongest in **two-player zero-sum games**, where they are linked by the Minimax Theorem.
*   **Maximin is Pessimistic:** It's about guaranteeing the best of the worst-case scenarios.
*   **PSNE is about Stability:** It's about outcomes where no one has an incentive to deviate unilaterally.
*   **In Zero-Sum Games with PSNE:** The PSNE payoff is the value of the game, which is equal to both the maximin and minimax values. The PSNE strategies are the maximin and minimax strategies.
*   **In Zero-Sum Games without PSNE:** Maximin value < Minimax value. Players must use mixed strategies to achieve the game's value.
*   **Non-Zero-Sum Games:** Maximin is still a defensive concept for a player, but PSNE is a more general concept of strategic stability. The maximin value might not align with the PSNE outcome.

## 6. Practice Questions

**Question 1:**
Consider the following zero-sum game:

|             | Player 2: A | Player 2: B |
| :---------- | :---------- | :---------- |
| **Player 1: X** | 5           | 1           |
| **Player 1: Y** | 3           | 4           |

a) Find the maximin strategy and value for Player 1.
b) Find the minimax strategy and value for Player 2 (from Player 1's perspective).
c) Does this game have a Pure Strategy Nash Equilibrium? If so, what is it and what is its payoff?

**Answer 1:**
a) Player 1's Maximin:
    *   X: min(5, 1) = 1
    *   Y: min(3, 4) = 3
    *   Maximin value = max(1, 3) = **3**. Player 1's maximin strategy is **Y**.

b) Player 2's Minimax (minimizing Player 1's payoff):
    *   A: max(5, 3) = 5
    *   B: max(1, 4) = 4
    *   Minimax value = min(5, 4) = **4**. Player 2's minimax strategy is **B**.

c) Since Maximin (3) < Minimax (4), this game does **not** have a Pure Strategy Nash Equilibrium.
    *   To verify:
        *   P1 Best Responses: Col A (X=5), Col B (Y=4).
        *   P2 Best Responses (minimize P1): Row X (B=1), Row Y (A=3).
        *   Matrix with underlines:
            |             | Player 2: A | Player 2: B |
            | :---------- | :---------- | :---------- |
            | **Player 1: X** | **5**       | 1           |
            | **Player 1: Y** | 3           | **4**       |
        *   No cell has both payoffs underlined.

**Question 2:**
Consider the following zero-sum game:

|             | Player 2: C | Player 2: D |
| :---------- | :---------- | :---------- |
| **Player 1: Z** | 1           | -1          |
| **Player 1: W** | -2          | 3           |

a) Find the maximin strategy and value for Player 1.
b) Find the minimax strategy and value for Player 2.
c) Does this game have a Pure Strategy Nash Equilibrium? If so, what is it and what is its payoff?

**Answer 2:**
a) Player 1's Maximin:
    *   Z: min(1, -1) = -1
    *   W: min(-2, 3) = -2
    *   Maximin value = max(-1, -2) = **-1**. Player 1's maximin strategy is **Z**.

b) Player 2's Minimax:
    *   C: max(1, -2) = 1
    *   D: max(-1, 3) = 3
    *   Minimax value = min(1, 3) = **1**. Player 2's minimax strategy is **C**.

c) Since Maximin (-1) < Minimax (1), this game does **not** have a Pure Strategy Nash Equilibrium.
    *   To verify:
        *   P1 Best Responses: Col C (Z=1), Col D (W=3).
        *   P2 Best Responses (minimize P1): Row Z (D=-1), Row W (C=-2).
        *   Matrix with underlines:
            |             | Player 2: C | Player 2: D |
            | :---------- | :---------- | :---------- |
            | **Player 1: Z** | **1**       | -**1**      |
            | **Player 1: W** | -**2**      | **3**       |
        *   No cell has both payoffs underlined.

**Question 3:**
Consider the following zero-sum game:

|             | Player 2: Left | Player 2: Right |
| :---------- | :------------- | :-------------- |
| **Player 1: Up** | **4**          | **2**           |
| **Player 1: Down** | **1**          | **3**           |

a) Find the maximin strategy and value for Player 1.
b) Find the minimax strategy and value for Player 2.
c) Does this game have a Pure Strategy Nash Equilibrium? If so, what is it and what is its payoff?

**Answer 3:**
a) Player 1's Maximin:
    *   Up: min(4, 2) = 2
    *   Down: min(1, 3) = 1
    *   Maximin value = max(2, 1) = **2**. Player 1's maximin strategy is **Up**.

b) Player 2's Minimax:
    *   Left: max(4, 1) = 4
    *   Right: max(2, 3) = 3
    *   Minimax value = min(4, 3) = **3**. Player 2's minimax strategy is **Right**.

c) Since Maximin (2) < Minimax (3), this game does **not** have a Pure Strategy Nash Equilibrium.
    *   To verify:
        *   P1 Best Responses: Col Left (Up=4), Col Right (Down=3).
        *   P2 Best Responses (minimize P1): Row Up (Right=2), Row Down (Left=1).
        *   Matrix with underlines:
            |             | Player 2: Left | Player 2: Right |
            | :---------- | :------------- | :-------------- |
            | **Player 1: Up** | **4**          | 2               |
            | **Player 1: Down** | 1              | **3**           |
        *   No cell has both payoffs underlined. (My previous analysis for this game was incorrect, this is the correct PSNE check.)

**Question 4:**
In a two-player zero-sum game, what is the relationship between the maximin value and the minimax value when a Pure Strategy Nash Equilibrium exists?

**Answer 4:**
When a Pure Strategy Nash Equilibrium exists in a two-player zero-sum game, the maximin value is **equal** to the minimax value. This common value is also the payoff at the PSNE, and it is referred to as the "value of the game".

**Question 5:**
In a two-player zero-sum game, if the maximin value is strictly less than the minimax value, what does this imply about the existence of a Pure Strategy Nash Equilibrium?

**Answer 5:**
If the maximin value is strictly less than the minimax value in a two-player zero-sum game, it implies that the game **does not have a Pure Strategy Nash Equilibrium**. In such cases, players would need to use mixed strategies to achieve the game's value.
