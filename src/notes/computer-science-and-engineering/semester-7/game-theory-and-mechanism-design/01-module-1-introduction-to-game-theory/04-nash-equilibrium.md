---
title: "Nash equilibrium"
subject: "GAME THEORY AND MECHANISM DESIGN"
module: "Module 1: Introduction to Game Theory "
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c5ae"
status: "completed"
scrapedAt: "2026-05-20T17:06:25.035Z"
---
# GAME THEORY AND MECHANISM DESIGN

## Module 1: Introduction to Game Theory

### Topic: Nash Equilibrium

---

### Learning Outcomes:

*   **Define Nash Equilibrium:** Understand the fundamental concept of a Nash Equilibrium in the context of non-cooperative games.
*   **Identify Nash Equilibria:** Be able to locate pure strategy Nash Equilibria in bimatrix games.
*   **Explain the Significance of Nash Equilibrium:** Grasp why Nash Equilibrium is a central solution concept in game theory.
*   **Distinguish Nash Equilibrium from other Solution Concepts (Implicitly):** While not explicitly stated as a separate outcome, understanding Nash Equilibrium requires understanding what it *isn't* (e.g., a globally optimal outcome). This will be addressed through examples.
*   **Apply Nash Equilibrium to Real-World Scenarios:** Recognize and analyze situations where Nash Equilibrium provides a useful framework for understanding behavior.

---

### 1. What is a Game? (Brief Recap for Context)

Before diving into Nash Equilibrium, it's important to remember the basic building blocks of a game in this context:

*   **Players:** Two or more rational agents making decisions.
*   **Strategies:** The set of possible actions each player can take.
*   **Payoffs:** The outcomes or utilities players receive based on the combination of strategies chosen by all players.
*   **Rationality:** Players are assumed to act in their own self-interest to maximize their payoffs.

---

### 2. The Core Idea: Stability and Best Responses

Nash Equilibrium is a state in a game where no player can unilaterally improve their outcome by changing their strategy, *given that all other players keep their strategies unchanged*.

*   **Key Concept: Best Response:** For a given strategy of the *other* player(s), a player's best response is the strategy that yields them the highest payoff.

*   **Definition of Nash Equilibrium:** A set of strategies (one for each player) is a Nash Equilibrium if each player's strategy is a best response to the strategies of all other players.

---

### 3. Pure Strategy Nash Equilibrium

In many games, players can choose from a finite set of distinct actions. This leads to the concept of **pure strategy Nash Equilibrium**.

#### 3.1. Identifying Pure Strategy Nash Equilibria in Bimatrix Games

A bimatrix game is a two-player game where the payoffs for each player are represented in a matrix. The matrix is typically structured as follows:

|              | Player 2: Strategy $S_{2,1}$ | Player 2: Strategy $S_{2,2}$ | ... |
| :----------- | :-------------------------- | :-------------------------- | :-- |
| Player 1: $S_{1,1}$ | $(P_1, P_2)$                | $(P_1, P_2)$                | ... |
| Player 1: $S_{1,2}$ | $(P_1, P_2)$                | $(P_1, P_2)$                | ... |
| ...          | ...                         | ...                         | ... |

Where:
*   $S_{1,i}$ are Player 1's strategies.
*   $S_{2,j}$ are Player 2's strategies.
*   $(P_1, P_2)$ represents the payoff to Player 1 ($P_1$) and Player 2 ($P_2$) for that combination of strategies.

**Method for finding Pure Strategy Nash Equilibria:**

1.  **For Player 1:** For each strategy of Player 2, identify Player 1's best response(s). Underline or mark the payoff for Player 1 in each cell where it's their best response.
2.  **For Player 2:** For each strategy of Player 1, identify Player 2's best response(s). Underline or mark the payoff for Player 2 in each cell where it's their best response.
3.  **Nash Equilibrium:** Any cell where *both* players' payoffs are marked (underlined) is a pure strategy Nash Equilibrium.

#### 3.2. Examples

**Example 1: The Prisoner's Dilemma**

Two suspects are arrested and questioned separately. They can either "Confess" or "Remain Silent". The payoffs (years in prison, lower is better) are:

|              | Suspect 2: Confess | Suspect 2: Remain Silent |
| :----------- | :----------------- | :----------------------- |
| Suspect 1: Confess | (-5, -5)           | (0, -10)                 |
| Suspect 1: Remain Silent | (-10, 0)           | (-1, -1)                 |

*   **Player 1's Best Responses:**
    *   If Player 2 Confesses: Player 1 gets -5 for Confessing, -10 for Remaining Silent. Best response is **Confess**.
    *   If Player 2 Remains Silent: Player 1 gets 0 for Confessing, -1 for Remaining Silent. Best response is **Confess**.

*   **Player 2's Best Responses:**
    *   If Player 1 Confesses: Player 2 gets -5 for Confessing, -10 for Remaining Silent. Best response is **Confess**.
    *   If Player 1 Remains Silent: Player 2 gets 0 for Confessing, -1 for Remaining Silent. Best response is **Confess**.

|              | Suspect 2: Confess     | Suspect 2: Remain Silent |
| :----------- | :--------------------- | :----------------------- |
| Suspect 1: Confess | **(-5**, **-5)**       | (0, -10)                 |
| Suspect 1: Remain Silent | (-10, 0)               | (-1, -1)                 |

**Result:** The cell where both payoffs are marked is (Confess, Confess). This is a **pure strategy Nash Equilibrium**. Both players confess, even though (Remain Silent, Remain Silent) would yield a better outcome for both (-1, -1) compared to (-5, -5).

**Example 2: Matching Pennies**

Two players, Player 1 and Player 2, each choose to show either Heads (H) or Tails (T) on a coin. Player 1 wins if the coins match, Player 2 wins if they don't.

|              | Player 2: H | Player 2: T |
| :----------- | :---------- | :---------- |
| Player 1: H | (1, -1)     | (-1, 1)     |
| Player 1: T | (-1, 1)     | (1, -1)     |

*   **Player 1's Best Responses:**
    *   If Player 2 chooses H: Player 1 gets 1 for H, -1 for T. Best response is **H**.
    *   If Player 2 chooses T: Player 1 gets -1 for H, 1 for T. Best response is **T**.

*   **Player 2's Best Responses:**
    *   If Player 1 chooses H: Player 2 gets -1 for H, 1 for T. Best response is **T**.
    *   If Player 1 chooses T: Player 2 gets 1 for H, -1 for T. Best response is **H**.

|              | Player 2: H | Player 2: T |
| :----------- | :---------- | :---------- |
| Player 1: H | (1, -1)     | (-1, **1)** |
| Player 1: T | (-1, **1)** | (1, -1)     |

**Result:** There are **no cells** where both players' payoffs are marked. This game has **no pure strategy Nash Equilibrium**. This implies that players might need to randomize their strategies (leading to mixed strategies, which will be covered in later modules).

**Example 3: Coordination Game (Battle of the Sexes)**

A couple wants to go out. One prefers the Opera (O), the other prefers a Football game (F). They prefer to go together, regardless of the event.

|              | Partner 2: O | Partner 2: F |
| :----------- | :----------- | :----------- |
| Partner 1: O | (2, 1)       | (0, 0)       |
| Partner 1: F | (0, 0)       | (1, 2)       |

*   **Partner 1's Best Responses:**
    *   If Partner 2 chooses O: Partner 1 gets 2 for O, 0 for F. Best response is **O**.
    *   If Partner 2 chooses F: Partner 1 gets 0 for O, 1 for F. Best response is **F**.

*   **Partner 2's Best Responses:**
    *   If Partner 1 chooses O: Partner 2 gets 1 for O, 0 for F. Best response is **O**.
    *   If Partner 1 chooses F: Partner 2 gets 0 for O, 2 for F. Best response is **F**.

|              | Partner 2: O     | Partner 2: F |
| :----------- | :--------------- | :----------- |
| Partner 1: O | **(2**, **1)**   | (0, 0)       |
| Partner 1: F | (0, 0)           | (**1**, **2)** |

**Result:** There are two pure strategy Nash Equilibria: (Opera, Opera) and (Football, Football). This game highlights that multiple stable outcomes can exist.

---

### 4. The Significance of Nash Equilibrium

Nash Equilibrium is a cornerstone of game theory for several reasons:

*   **Predictive Power:** It provides a prediction of what rational players will do in a strategic interaction. If a state is not a Nash Equilibrium, at least one player has an incentive to deviate, making that state unstable.
*   **Stability:** A Nash Equilibrium represents a stable outcome where no player regrets their decision *given the decisions of others*.
*   **Foundation for More Complex Concepts:** Many advanced concepts in game theory, such as refinements of Nash Equilibrium and mechanisms designed to achieve certain outcomes, are built upon this fundamental idea.
*   **Explains Real-World Phenomena:** It helps explain outcomes in economics (market competition), politics (arms races), evolutionary biology (evolutionarily stable strategies), and even social behavior.

---

### 5. Important Points to Remember

*   **Nash Equilibrium is NOT necessarily the "best" outcome for all players combined.** The Prisoner's Dilemma is the classic example where the Nash Equilibrium is Pareto inefficient (worse for both players than another possible outcome).
*   **A game may have zero, one, or multiple Nash Equilibria.**
*   **Nash Equilibrium is a prediction of *rational* play.** If players are not rational or do not know the other players' rationality, the outcome might deviate.
*   **Focus on *unilateral* deviations.** The condition for Nash Equilibrium is that no single player can improve their outcome by changing their strategy *alone*.
*   **In games with multiple Nash Equilibria, predicting the outcome can be challenging.** Additional concepts are needed to select among these equilibria (e.g., Pareto dominance, risk dominance).

---

### 6. Practice Questions

**Question 1:**
Consider the following bimatrix game:

|              | Player 2: Left | Player 2: Right |
| :----------- | :------------- | :-------------- |
| Player 1: Up | (3, 2)         | (1, 1)          |
| Player 1: Down | (2, 1)         | (0, 0)          |

Find all pure strategy Nash Equilibria in this game.

**Question 2:**
Explain why the outcome (Confess, Confess) in the Prisoner's Dilemma is a Nash Equilibrium.

**Question 3:**
True or False: Every finite game has at least one pure strategy Nash Equilibrium. Justify your answer.

---

### 7. Answers to Practice Questions

**Answer 1:**

Let's find the best responses:

*   **Player 1's Best Responses:**
    *   If Player 2 chooses Left: Player 1 gets 3 for Up, 2 for Down. Best response is **Up**.
    *   If Player 2 chooses Right: Player 1 gets 1 for Up, 0 for Down. Best response is **Up**.

*   **Player 2's Best Responses:**
    *   If Player 1 chooses Up: Player 2 gets 2 for Left, 1 for Right. Best response is **Left**.
    *   If Player 1 chooses Down: Player 2 gets 1 for Left, 0 for Right. Best response is **Left**.

Marking the payoffs:

|              | Player 2: Left     | Player 2: Right |
| :----------- | :----------------- | :-------------- |
| Player 1: Up | **(3**, **2)**     | (1, 1)          |
| Player 1: Down | (2, 1)             | (0, 0)          |

**Result:** The pure strategy Nash Equilibrium is **(Up, Left)**.

**Answer 2:**
In the Prisoner's Dilemma, if both players confess, neither player can improve their outcome by unilaterally changing their strategy.
*   If Suspect 1 confesses, their payoff is -5. If they switch to Remain Silent while Suspect 2 continues to Confess, their payoff would become -10, which is worse.
*   Similarly, if Suspect 2 confesses, their payoff is -5. If they switch to Remain Silent while Suspect 1 continues to Confess, their payoff would become -10, which is worse.
Since neither player has an incentive to deviate from confessing, given the other player's choice to confess, (Confess, Confess) is a Nash Equilibrium.

**Answer 3:**
**False**. As demonstrated by the Matching Pennies game (Example 2), some games do not have any pure strategy Nash Equilibria. A pure strategy Nash Equilibrium is guaranteed for finite games if we allow for *mixed strategies* (where players randomize their choices), but this question specifically asks about *pure* strategies.
