---
title: "matrix games"
subject: "GAME THEORY AND MECHANISM DESIGN"
module: "Module 1: Introduction to Game Theory "
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c5b2"
status: "completed"
scrapedAt: "2026-05-20T17:06:27.822Z"
---
# Module 1: Introduction to Game Theory - Matrix Games

This module introduces the fundamental concepts of game theory, focusing on the simplest yet powerful representation: **matrix games**. We will explore how to model strategic interactions between rational players using payoff matrices.

---

## 1. What is Game Theory?

**Game theory** is the study of strategic decision-making. It analyzes situations where the outcome of a decision depends not only on the choices of the decision-maker but also on the choices of other strategic agents.

*   **Key Idea:** Understanding how individuals or groups make optimal choices when their interests are intertwined and interdependent.
*   **Applications:** Economics, political science, biology, computer science, psychology, and many more.

---

## 2. Components of a Game

To analyze a game, we need to define its core components:

*   **Players:** The decision-makers involved in the game.
    *   *Example:* Two companies competing in a market, two countries negotiating a treaty.
*   **Strategies:** The set of actions available to each player.
    *   *Example:* A company can choose to "advertise" or "not advertise." A player in chess can choose any legal move.
*   **Payoffs:** The outcomes or utilities that each player receives for each possible combination of strategies chosen by all players.
    *   *Example:* Profits for companies, utility gained from a treaty.

---

## 3. Matrix Games: The Foundation

**Matrix games** (also known as normal-form games or strategic-form games) are games where:

*   All players choose their strategies simultaneously (or without knowing the other players' choices).
*   The game is finite (a finite number of players, a finite number of strategies for each player, and finite payoffs).

### 3.1 Representing Matrix Games: The Payoff Matrix

A matrix game is typically represented by a **payoff matrix**.

*   **For Two-Player Games:**
    *   A table where rows represent the strategies of one player (Player 1, often called the "row player") and columns represent the strategies of the other player (Player 2, the "column player").
    *   Each cell in the matrix contains a pair of numbers: the payoff for Player 1 and the payoff for Player 2, respectively, for that specific combination of strategies.

#### Example: The Prisoner's Dilemma

Two suspects, Alice and Bob, are arrested for a crime. The police don't have enough evidence for a conviction, so they separate the suspects and offer each a deal.

*   **Players:** Alice, Bob
*   **Strategies:**
    *   Alice: Cooperate (stay silent), Defect (betray Bob)
    *   Bob: Cooperate (stay silent), Defect (betray Alice)
*   **Payoffs (in years in prison):**

|              | Bob: Cooperate | Bob: Defect    |
| :----------- | :------------- | :------------- |
| **Alice: Cooperate** | (1, 1)         | (10, 0)        |
| **Alice: Defect**    | (0, 10)        | (8, 8)         |

**Interpretation of the Payoff Matrix:**

*   **(1, 1):** If both Alice and Bob Cooperate, they both get 1 year in prison.
*   **(10, 0):** If Alice Cooperates and Bob Defects, Alice gets 10 years, and Bob gets 0 years.
*   **(0, 10):** If Alice Defects and Bob Cooperates, Alice gets 0 years, and Bob gets 10 years.
*   **(8, 8):** If both Alice and Bob Defect, they both get 8 years in prison.

*   **Important Note:** In game theory, higher payoffs are generally preferred. Since shorter prison sentences are better, we'd ideally represent payoffs as negative numbers for years in prison (e.g., -1, -10, 0, -8) or transform them (e.g., 100 - years). For simplicity in this example, we're using the number of years directly, understanding that *lower* numbers are better for this specific scenario.

#### Example: Matching Pennies

Two players, Player 1 and Player 2, each flip a coin. Player 1 wins if the coins match (both heads or both tails), and Player 2 wins if they don't match (one heads, one tails).

*   **Players:** Player 1, Player 2
*   **Strategies:**
    *   Player 1: Heads (H), Tails (T)
    *   Player 2: Heads (H), Tails (T)
*   **Payoffs (Player 1 wins $1, Player 2 wins $1):**

|              | Player 2: H | Player 2: T |
| :----------- | :---------- | :---------- |
| **Player 1: H** | (1, -1)     | (-1, 1)     |
| **Player 1: T** | (-1, 1)     | (1, -1)     |

**Interpretation:**

*   **(1, -1):** Player 1 chooses H, Player 2 chooses H. Coins match. Player 1 wins $1, Player 2 loses $1.
*   **(-1, 1):** Player 1 chooses H, Player 2 chooses T. Coins don't match. Player 1 loses $1, Player 2 wins $1.

### 3.2 Types of Matrix Games

*   **Zero-Sum Games:** Games where the sum of the payoffs for all players is zero for every possible outcome. One player's gain is precisely the other player's loss.
    *   *Example:* Matching Pennies (payoffs sum to 0 in every cell).
    *   **Representation:** Often represented with only Player 1's payoffs, as Player 2's payoffs are simply the negative of Player 1's.

*   **Non-Zero-Sum Games:** Games where the sum of payoffs is not always zero. Players can simultaneously benefit or harm each other.
    *   *Example:* Prisoner's Dilemma.

---

## 4. Identifying Optimal Strategies: Pure Strategies

A **pure strategy** is a complete plan of action that specifies the action a player will take in every possible situation. In matrix games, a pure strategy for a player is simply choosing one of their available actions.

### 4.1 Finding Best Responses

To find optimal strategies, we look for **best responses**.

*   **Best Response:** A strategy for a player that yields the highest payoff, given the strategies chosen by the other players.

#### How to find Best Responses:

1.  **For the Row Player (Player 1):** For each of Player 2's possible strategies (columns), identify the strategy for Player 1 that gives Player 1 the highest payoff.
2.  **For the Column Player (Player 2):** For each of Player 1's possible strategies (rows), identify the strategy for Player 2 that gives Player 2 the highest payoff.

#### Example: Prisoner's Dilemma - Finding Best Responses

|              | Bob: Cooperate | Bob: Defect    |
| :----------- | :------------- | :------------- |
| **Alice: Cooperate** | (1, **1**)     | (**10**, 0)    |
| **Alice: Defect**    | (**0**, 10)    | (**8**, **8**) |

*   **Alice's Best Responses:**
    *   If Bob Cooperates: Alice gets 1 by Cooperating, 0 by Defecting. Alice's best response is **Cooperate** (underlined payoff is Alice's).
    *   If Bob Defects: Alice gets 10 by Cooperating, 8 by Defecting. Alice's best response is **Cooperate**.
*   **Bob's Best Responses:**
    *   If Alice Cooperates: Bob gets 1 by Cooperating, 0 by Defecting. Bob's best response is **Cooperate**.
    *   If Alice Defects: Bob gets 10 by Cooperating, 8 by Defecting. Bob's best response is **Cooperate**.

#### Example: Matching Pennies - Finding Best Responses

|              | Player 2: H | Player 2: T |
| :----------- | :---------- | :---------- |
| **Player 1: H** | (**1**, -1) | (-1, **1**) |
| **Player 1: T** | (-1, **1**) | (**1**, -1) |

*   **Player 1's Best Responses:**
    *   If Player 2 chooses H: Player 1 gets 1 by choosing H, -1 by choosing T. Player 1's best response is **H**.
    *   If Player 2 chooses T: Player 1 gets -1 by choosing H, 1 by choosing T. Player 1's best response is **T**.
*   **Player 2's Best Responses:**
    *   If Player 1 chooses H: Player 2 gets -1 by choosing H, 1 by choosing T. Player 2's best response is **T**.
    *   If Player 1 chooses T: Player 1 gets 1 by choosing H, -1 by choosing T. Player 2's best response is **H**.

### 4.2 Nash Equilibrium

A **Nash Equilibrium** is a state of the game where no player can improve their payoff by unilaterally changing their strategy, assuming the other players' strategies remain unchanged.

*   **Key Concept:** It's a stable outcome where each player is playing their best response to the other players' strategies.
*   **Notation:** Often denoted by circling the payoffs that represent a Nash Equilibrium.

#### How to find Pure Strategy Nash Equilibria:

1.  Find the best responses for Player 1 for each of Player 2's strategies.
2.  Find the best responses for Player 2 for each of Player 1's strategies.
3.  A cell in the payoff matrix is a pure strategy Nash Equilibrium if and only if the outcome in that cell is a best response for *both* players simultaneously.

#### Example: Prisoner's Dilemma - Nash Equilibrium

Let's revisit the best responses:

|              | Bob: Cooperate | Bob: Defect    |
| :----------- | :------------- | :------------- |
| **Alice: Cooperate** | (1, 1)         | (10, 0)        |
| **Alice: Defect**    | (0, 10)        | (8, 8)         |

*   Alice's best responses are underlined:
    *   If Bob Cooperates: Alice's best is Cooperate.
    *   If Bob Defects: Alice's best is Defect. (Correction from previous example: if Alice defects she gets 8, if she cooperates she gets 10 if Bob cooperates, but if Bob defects, Alice gets 8 by defecting and 10 by cooperating. Let's re-evaluate with a clearer understanding of payoffs as *utility* where higher is better. Let's use utility points where 10=best, 0=worst).

**Let's use the standard payoff representation for Prisoner's Dilemma where higher utility is better:**

Suppose payoffs represent utility, where higher is better. A common representation for PD:

|              | Bob: Cooperate | Bob: Defect    |
| :----------- | :------------- | :------------- |
| **Alice: Cooperate** | (3, 3)         | (0, 5)         |
| **Alice: Defect**    | (5, 0)         | (1, 1)         |

*   **Alice's Best Responses:**
    *   If Bob Cooperates: Alice gets 3 (Cooperate) or 5 (Defect). Alice's best response is **Defect**.
    *   If Bob Defects: Alice gets 0 (Cooperate) or 1 (Defect). Alice's best response is **Defect**.
*   **Bob's Best Responses:**
    *   If Alice Cooperates: Bob gets 3 (Cooperate) or 5 (Defect). Bob's best response is **Defect**.
    *   If Alice Defects: Bob gets 0 (Cooperate) or 1 (Defect). Bob's best response is **Defect**.

Now, let's mark the best responses in the matrix:

|              | Bob: Cooperate | Bob: Defect    |
| :----------- | :------------- | :------------- |
| **Alice: Cooperate** | (3, 3)         | (0, **5**)     |
| **Alice: Defect**    | (**5**, 0)     | (**1**, **1**) |

Now, identify cells where *both* payoffs are best responses (underlined or marked):

|              | Bob: Cooperate | Bob: Defect    |
| :----------- | :------------- | :------------- |
| **Alice: Cooperate** | (3, 3)         | (0, **5**)     |
| **Alice: Defect**    | (**5**, 0)     | (**1**, **1**) |

The cell (Defect, Defect) is the only cell where both players are playing their best response. Therefore, **(Defect, Defect) is the unique pure strategy Nash Equilibrium** in the Prisoner's Dilemma.

#### Example: Matching Pennies - Nash Equilibrium

Let's use the best responses found earlier:

|              | Player 2: H | Player 2: T |
| :----------- | :---------- | :---------- |
| **Player 1: H** | (1, -1)     | (-1, 1)     |
| **Player 1: T** | (-1, 1)     | (1, -1)     |

*   Player 1's best responses:
    *   If P2 chooses H: P1's best is **H**.
    *   If P2 chooses T: P1's best is **T**.
*   Player 2's best responses:
    *   If P1 chooses H: P2's best is **T**.
    *   If P1 chooses T: P2's best is **H**.

Marking the best responses:

|              | Player 2: H | Player 2: T |
| :----------- | :---------- | :---------- |
| **Player 1: H** | (1, -1)     | (-1, **1**) |
| **Player 1: T** | (-1, **1**) | (1, -1)     |

Looking for cells where both payoffs are marked as best responses:

*   Cell (H, H): P1's best response is H, but P2's best response is T. Not a Nash Equilibrium.
*   Cell (H, T): P1's best response is T, but P2's best response is T. Not a Nash Equilibrium. (Correction: P1's best response to P2's T is T. P2's best response to P1's H is T. So at (H,T), P1's best response is T, not H).

Let's re-mark carefully:

|              | Player 2: H | Player 2: T |
| :----------- | :---------- | :---------- |
| **Player 1: H** | (***1***, -1) | (-1, **1**) |
| **Player 1: T** | (-1, **1**) | (***1***, -1) |

*   If P2 plays H, P1's best response is H (payoff 1).
*   If P2 plays T, P1's best response is T (payoff 1).
*   If P1 plays H, P2's best response is T (payoff 1).
*   If P1 plays T, P2's best response is H (payoff 1).

Now, marking the cells where a player's strategy is a best response to the other:

|              | Player 2: H | Player 2: T |
| :----------- | :---------- | :---------- |
| **Player 1: H** | (1, X)      | (X, **1**)  |
| **Player 1: T** | (X, **1**)  | (1, X)      |

There is no cell where *both* payoffs are marked. This means **Matching Pennies has no pure strategy Nash Equilibrium.** This highlights the need for mixed strategies, which we will cover in future modules.

### 4.3 Dominated Strategies

*   **Strictly Dominated Strategy:** A strategy `s_i` for player `i` is strictly dominated by another strategy `s'_i` if, for every possible combination of strategies chosen by the other players, player `i` receives a strictly higher payoff by choosing `s'_i` than by choosing `s_i`.

    *   `u_i(s'_i, s_{-i}) > u_i(s_i, s_{-i})` for all `s_{-i}`.

*   **Weakly Dominated Strategy:** A strategy `s_i` for player `i` is weakly dominated by another strategy `s'_i` if, for every possible combination of strategies chosen by the other players, player `i` receives a payoff at least as high by choosing `s'_i` as by choosing `s_i`, and there is at least one combination of strategies for the other players where `s'_i` yields a strictly higher payoff.

    *   `u_i(s'_i, s_{-i}) >= u_i(s_i, s_{-i})` for all `s_{-i}`, and `u_i(s'_i, s_{-i}) > u_i(s_i, s_{-i})` for at least one `s_{-i}`.

#### Elimination of Dominated Strategies

Rational players will never play a strictly dominated strategy, as they can always get a better outcome by choosing the dominating strategy. We can simplify the game by removing these dominated strategies.

*   **Iterated Elimination of Strictly Dominated Strategies (IESDS):** Repeatedly removing strictly dominated strategies can lead to a unique outcome, which is guaranteed to be a Nash Equilibrium.
*   **Iterated Elimination of Weakly Dominated Strategies (IEWDS):** This can sometimes lead to different outcomes depending on the order of elimination.

#### Example: Elimination of Dominated Strategies

Consider the following game:

|              | Player 2: L | Player 2: C | Player 2: R |
| :----------- | :---------- | :---------- | :---------- |
| **Player 1: U** | (1, 1)      | (2, 0)      | (3, 0)      |
| **Player 1: M** | (0, 2)      | (1, 3)      | (2, 4)      |
| **Player 1: D** | (0, 0)      | (0, 1)      | (1, 1)      |

**Analysis for Player 1:**

*   Is U strictly dominated by M?
    *   (1 vs 0), (2 vs 1), (3 vs 2). No, U is not dominated by M.
*   Is U strictly dominated by D?
    *   (1 vs 0), (2 vs 0), (3 vs 1). No, U is not dominated by D.
*   Is M strictly dominated by U?
    *   (0 vs 1), (1 vs 2), (2 vs 3). No, M is not dominated by U.
*   Is M strictly dominated by D?
    *   (0 vs 0), (1 vs 0), (2 vs 1). No, M is not dominated by D.
*   Is D strictly dominated by U?
    *   (0 vs 1), (0 vs 2), (1 vs 3). Yes, U gives strictly higher payoffs than D in all cases. Player 1 will never play D.

**Remove Player 1's strategy D:**

|              | Player 2: L | Player 2: C | Player 2: R |
| :----------- | :---------- | :---------- | :---------- |
| **Player 1: U** | (1, 1)      | (2, 0)      | (3, 0)      |
| **Player 1: M** | (0, 2)      | (1, 3)      | (2, 4)      |

Now analyze the remaining game for Player 2:

*   Is L strictly dominated by C?
    *   (1 vs 0), (0 vs 2). No.
*   Is L strictly dominated by R?
    *   (1 vs 0), (0 vs 4). No.
*   Is C strictly dominated by L?
    *   (0 vs 1), (2 vs 0). No.
*   Is C strictly dominated by R?
    *   (0 vs 0), (3 vs 4). No.
*   Is R strictly dominated by L?
    *   (0 vs 1), (4 vs 2). No.
*   Is R strictly dominated by C?
    *   (0 vs 0), (4 vs 3). Yes, C gives strictly higher payoffs than R in all cases. Player 2 will never play R.

**Remove Player 2's strategy R:**

|              | Player 2: L | Player 2: C |
| :----------- | :---------- | :---------- |
| **Player 1: U** | (1, 1)      | (2, 0)      |
| **Player 1: M** | (0, 2)      | (1, 3)      |

Now analyze the remaining game for Player 1:

*   Is U strictly dominated by M?
    *   (1 vs 0), (2 vs 1). No.
*   Is M strictly dominated by U?
    *   (0 vs 1), (1 vs 2). No.

**Analysis for Player 2:**

*   Is L strictly dominated by C?
    *   (1 vs 0), (2 vs 3). No.
*   Is C strictly dominated by L?
    *   (0 vs 1), (3 vs 2). No.

In this example, after eliminating D for Player 1 and R for Player 2, we are left with a 2x2 game where no further strictly dominated strategies can be eliminated. Let's find the Nash Equilibrium for this reduced game:

|              | Player 2: L | Player 2: C |
| :----------- | :---------- | :---------- |
| **Player 1: U** | (1, 1)      | (2, 0)      |
| **Player 1: M** | (0, 2)      | (1, 3)      |

*   **P1 Best Responses:**
    *   If P2 plays L: P1 prefers U (1) over M (0). Best response: **U**.
    *   If P2 plays C: P1 prefers M (1) over U (2). Correction: P1 prefers U (2) over M (1). Best response: **U**.
*   **P2 Best Responses:**
    *   If P1 plays U: P2 prefers L (1) over C (0). Best response: **L**.
    *   If P1 plays M: P2 prefers C (3) over L (2). Best response: **C**.

Marking best responses:

|              | Player 2: L | Player 2: C |
| :----------- | :---------- | :---------- |
| **Player 1: U** | (**1**, **1**) | (2, 0)      |
| **Player 1: M** | (0, 2)      | (1, 3)      |

The outcome (U, L) is a pure strategy Nash Equilibrium, as both players are playing their best responses. The iterated elimination of strictly dominated strategies identified one of the Nash Equilibria.

---

## 5. Multi-Player Games (Brief Introduction)

While this module focuses on 2-player matrix games, game theory extends to games with more than two players.

*   **Representation:** For three players, the payoff structure becomes more complex, often requiring multiple matrices or a 3D representation.
*   **Analysis:** Concepts like Nash Equilibrium extend to n-player games.

---

## 6. Key Concepts to Remember

*   **Players, Strategies, Payoffs:** The fundamental building blocks of any game.
*   **Payoff Matrix:** A visual tool for representing 2-player normal-form games.
*   **Zero-Sum vs. Non-Zero-Sum Games:** Crucial distinction in understanding player interactions.
*   **Best Response:** A player's optimal strategy given the other players' strategies.
*   **Nash Equilibrium:** A stable state where no player can unilaterally improve their outcome.
*   **Dominated Strategies:** Strategies that are never optimal for a rational player and can be eliminated.
*   **Iterated Elimination of Dominated Strategies:** A powerful tool for simplifying games and finding equilibria.

---

## 7. Practice Questions

**Question 1:**
Consider the following game:

|              | Player 2: Left | Player 2: Right |
| :----------- | :------------- | :-------------- |
| **Player 1: Up** | (3, 2)         | (1, 1)          |
| **Player 1: Down** | (0, 0)         | (2, 3)          |

a) Identify Player 1's best response if Player 2 plays Left.
b) Identify Player 1's best response if Player 2 plays Right.
c) Identify Player 2's best response if Player 1 plays Up.
d) Identify Player 2's best response if Player 1 plays Down.
e) Determine if there are any pure strategy Nash Equilibria in this game. Mark them on the matrix.

**Question 2:**
Which of the following is a characteristic of a zero-sum game?
a) All players have identical payoffs.
b) The sum of payoffs for all players is always zero.
c) Players cooperate to achieve a common goal.
d) Players always play their dominated strategies.

**Question 3:**
In the Prisoner's Dilemma (using the (3,3), (0,5), (5,0), (1,1) payoff structure), what is the pure strategy Nash Equilibrium?
a) (Cooperate, Cooperate)
b) (Cooperate, Defect)
c) (Defect, Cooperate)
d) (Defect, Defect)

**Question 4:**
Consider the following game. Is strategy "D" for Player 1 strictly dominated by strategy "U"?

|              | Player 2: L | Player 2: R |
| :----------- | :---------- | :---------- |
| **Player 1: U** | (5, 1)      | (3, 4)      |
| **Player 1: D** | (4, 2)      | (2, 3)      |

**Question 5:**
Does Matching Pennies have a pure strategy Nash Equilibrium?
a) Yes, (Heads, Heads)
b) Yes, (Tails, Tails)
c) Yes, (Heads, Tails)
d) No

---

## 8. Answers to Practice Questions

**Answer 1:**
|              | Player 2: Left | Player 2: Right |
| :----------- | :------------- | :-------------- |
| **Player 1: Up** | (**3**, **2**) | (1, 1)          |
| **Player 1: Down** | (0, 0)         | (**2**, **3**)  |

a) If Player 2 plays Left, Player 1's best response is **Up** (payoff 3 > 0).
b) If Player 2 plays Right, Player 1's best response is **Down** (payoff 2 > 1).
c) If Player 1 plays Up, Player 2's best response is **Left** (payoff 2 > 1).
d) If Player 1 plays Down, Player 2's best response is **Right** (payoff 3 > 0).
e) A pure strategy Nash Equilibrium occurs where both players are playing their best response. Looking at the best responses marked above, the cell (Up, Left) is a Nash Equilibrium because Up is Player 1's best response to Left, and Left is Player 2's best response to Up.

**Answer 2:**
b) The sum of payoffs for all players is always zero.

**Answer 3:**
d) (Defect, Defect)

**Answer 4:**
Yes. For Player 1:
*   If Player 2 plays Left: U gives 5, D gives 4. (5 > 4)
*   If Player 2 plays Right: U gives 3, D gives 2. (3 > 2)
Since U yields a strictly higher payoff than D for Player 1 regardless of Player 2's strategy, D is strictly dominated by U.

**Answer 5:**
d) No

---

**Important Points to Remember:**

*   Always clearly define your players, their strategies, and their payoffs.
*   When identifying best responses, fix one player's strategy and then find the best outcome for the other.
*   A Nash Equilibrium is a mutual best response – neither player wants to change *unilaterally*.
*   Iterated elimination of *strictly* dominated strategies is a safe method for simplifying games. Be cautious with weakly dominated strategies as the order of elimination can matter.
*   The absence of a pure strategy Nash Equilibrium does not mean the game is unsolvable; it simply means players might be using mixed strategies (probabilistic choices), which will be covered in later modules.
