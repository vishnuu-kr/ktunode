---
title: "Game Theory: Games with saddle points"
subject: "QUANTITATIVE TECHNIQUES FOR ENGINEERS"
module: "Module 3: Network analysis – Basic terms"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1751d0cf4804463a7a"
status: "completed"
scrapedAt: "2026-05-20T18:07:37.488Z"
---
# Quantitative Techniques for Engineers - Module 3: Network Analysis - Basic Terms

## Topic: Game Theory: Games with Saddle Points

**Course Outcomes Alignment:**

*   **CO4: To solve Game Theory problems (Knowledge Level: K3)** - This topic directly addresses the core of solving game theory problems by focusing on a fundamental case: games with saddle points.

**Learning Outcomes:**

*   Understand the fundamental concepts of game theory.
*   Identify and define key terms in game theory, such as players, strategies, payoff matrix, and equilibrium.
*   Understand the concept of a saddle point and its significance in a two-person zero-sum game.
*   Learn methods to identify saddle points in a given payoff matrix.
*   Solve games with saddle points.

---

### 1. Introduction to Game Theory

Game theory is a mathematical framework for analyzing strategic interactions among rational decision-makers (players). It is used to model situations where the outcome for each participant depends not only on their own actions but also on the actions of other participants.

**Key Concepts and Definitions:**

*   **Game:** A situation involving two or more players where the outcome for each player depends on the actions taken by all players.
*   **Players:** The decision-makers involved in the game. In this context, we focus on **two-person games**.
*   **Strategies:** The set of possible actions a player can choose.
    *   **Pure Strategy:** A player consistently chooses a single specific action.
    *   **Mixed Strategy:** A player chooses among their available pure strategies with certain probabilities.
*   **Payoff:** The outcome (utility or profit) received by a player as a result of the game's progression.
*   **Payoff Matrix:** A table that represents the payoffs for each player for every possible combination of strategies chosen by the players.
*   **Zero-Sum Game:** A game where the total gains of all players sum to zero. This means that whatever one player wins, the other player loses.
*   **Non-Zero-Sum Game:** A game where the total gains do not necessarily sum to zero.
*   **Rational Player:** A player who always chooses the action that maximizes their payoff, assuming other players are also rational.

**Textbook References:**

*   **Paneerselvam R. (PHI, Third edition, 2023):** Chapter 17, "Game Theory." Paneerselvam introduces game theory as a tool for analyzing competitive situations and defines core terms like players, strategies, and payoff matrices.
*   **Taha (Pearson, Tenth edition, 2019):** Chapter 14, "Game Theory." Taha provides a comprehensive overview of game theory, starting with basic concepts and progressing to more complex applications.

---

### 2. Two-Person Zero-Sum Games

This section focuses on the simplest form of games: two-person zero-sum games.

**Key Concepts and Definitions:**

*   **Two-Person Zero-Sum Game:** A game involving two players where the sum of their payoffs is always zero.
*   **Payoff Matrix (for Player A):** In a two-person zero-sum game, the payoff matrix is usually presented from the perspective of one player, typically Player A (the row player). The entries in the matrix represent the payoff to Player A. The payoff to Player B (the column player) will be the negative of the entry in the matrix.

**Example:**

Consider a game where Player A can choose strategy A1 or A2, and Player B can choose strategy B1 or B2. The payoff matrix for Player A is as follows:

|          | Player B: B1 | Player B: B2 |
| :------- | :----------- | :----------- |
| **Player A: A1** | 3            | -1           |
| **Player A: A2** | -2           | 4            |

If Player A chooses A1 and Player B chooses B1, Player A gets a payoff of 3, and Player B gets a payoff of -3.
If Player A chooses A1 and Player B chooses B2, Player A gets a payoff of -1, and Player B gets a payoff of 1.
And so on.

**Textbook References:**

*   **Paneerselvam R. (PHI, Third edition, 2023):** Discusses the representation of two-person zero-sum games using payoff matrices in detail.
*   **Taha (Pearson, Tenth edition, 2019):** Emphasizes the importance of payoff matrices for visualizing the game structure and understanding the interaction between players.

---

### 3. Saddle Points

A saddle point represents a stable equilibrium in a game. It is a point in the payoff matrix where the maximum of the row minimums (maximin) is equal to the minimum of the column maximums (minimax).

**Key Concepts and Definitions:**

*   **Maximin Value (Lower Value of the Game):** The largest of the row minimums. Player A seeks to maximize their minimum possible payoff.
*   **Minimax Value (Upper Value of the Game):** The smallest of the column maximums. Player B seeks to minimize their maximum possible loss (which is equivalent to minimizing Player A's maximum possible gain).
*   **Saddle Point:** An element in the payoff matrix that is simultaneously the minimum in its row and the maximum in its column.
*   **Equilibrium Point/Saddle Point:** A situation where neither player can improve their outcome by unilaterally changing their strategy.
*   **Optimal Strategy:** The strategy that a player uses to achieve the saddle point.

**Methods to Identify a Saddle Point:**

1.  **Row Minima and Maximin:**
    *   For each row, find the minimum value.
    *   Find the maximum among these row minimums. This is the maximin value.

2.  **Column Maxima and Minimax:**
    *   For each column, find the maximum value.
    *   Find the minimum among these column maximums. This is the minimax value.

3.  **Check for Equality:**
    *   If the maximin value equals the minimax value, then the game has a saddle point.
    *   The saddle point occurs at the intersection of the row and column corresponding to the maximin and minimax values, respectively.

**Properties of a Saddle Point:**

*   A saddle point is the smallest element in its row.
*   A saddle point is the largest element in its column.
*   If a saddle point exists, the optimal strategies for both players are pure strategies.

**Textbook References:**

*   **Paneerselvam R. (PHI, Third edition, 2023):** Provides a detailed explanation of finding saddle points using the maximin and minimax criteria. Illustrates with numerous examples.
*   **Taha (Pearson, Tenth edition, 2019):** Dedicates significant space to the concept of saddle points as the solution to simple games. Explains the rationale behind maximin and minimax.
*   **Hillier & Lieberman (McGraw Hill, Tenth edition, 2017):** "Introduction to Operations Research" covers game theory extensively. It explains saddle points as the concept of equilibrium in pure strategies, emphasizing the security levels of players.

---

### 4. Solving Games with Saddle Points

When a game has a saddle point, the solution is straightforward: both players adopt their pure strategies corresponding to the saddle point.

**Steps to Solve a Game with a Saddle Point:**

1.  **Construct the Payoff Matrix:** Represent the game's outcomes for Player A in a matrix format.
2.  **Find Row Minima and Maximin:** Identify the minimum value in each row and then find the maximum of these minimums (maximin).
3.  **Find Column Maxima and Minimax:** Identify the maximum value in each column and then find the minimum of these maximums (minimax).
4.  **Identify the Saddle Point:** If maximin = minimax, then a saddle point exists. The element(s) where this equality occurs is the saddle point.
5.  **Determine Optimal Strategies:**
    *   Player A's optimal strategy is to choose the row corresponding to the maximin value.
    *   Player B's optimal strategy is to choose the column corresponding to the minimax value.
6.  **Determine the Value of the Game:** The value of the game is the payoff at the saddle point.

**Example:**

Consider the following payoff matrix for Player A:

|          | Player B: B1 | Player B: B2 | Player B: B3 |
| :------- | :----------- | :----------- | :----------- |
| **Player A: A1** | 5            | 2            | 3            |
| **Player A: A2** | 6            | 4            | 7            |
| **Player A: A3** | 3            | 1            | 2            |

**Solution:**

1.  **Payoff Matrix:** Given above.

2.  **Row Minima and Maximin:**
    *   Row A1: min(5, 2, 3) = 2
    *   Row A2: min(6, 4, 7) = 4
    *   Row A3: min(3, 1, 2) = 1
    *   Maximin = max(2, 4, 1) = **4** (This occurs at Row A2).

3.  **Column Maxima and Minimax:**
    *   Column B1: max(5, 6, 3) = 6
    *   Column B2: max(2, 4, 1) = 4
    *   Column B3: max(3, 7, 2) = 7
    *   Minimax = min(6, 4, 7) = **4** (This occurs at Column B2).

4.  **Identify the Saddle Point:**
    *   Maximin (4) = Minimax (4).
    *   Therefore, a saddle point exists. The saddle point is at the intersection of Row A2 and Column B2, with a value of 4.

5.  **Optimal Strategies:**
    *   Player A's optimal strategy is to choose **A2**.
    *   Player B's optimal strategy is to choose **B2**.

6.  **Value of the Game:**
    *   The value of the game is **4**.

**Important Points to Remember:**

*   A game with a saddle point has a unique solution in pure strategies.
*   The value of the game is the payoff at the saddle point.
*   If maximin $\neq$ minimax, the game does not have a saddle point, and mixed strategies are required to find the solution (which is beyond the scope of this specific topic).

**Textbook References:**

*   **Paneerselvam R. (PHI, Third edition, 2023):** Provides algorithms and step-by-step procedures for solving games with saddle points, including worked-out examples.
*   **Taha (Pearson, Tenth edition, 2019):** Demonstrates how to solve games with saddle points and explains why these strategies are optimal in such cases.
*   **Hillier & Lieberman (McGraw Hill, Tenth edition, 2017):** Illustrates with examples how players can guarantee a certain minimum payoff (security level) by playing their maximin strategy, and how the minimax strategy protects the other player from large losses.

---

### 5. Practice Questions and Exercises

**Instructions:** Solve the following games to determine if they have a saddle point and, if so, find the optimal strategies and the value of the game.

**Question 1:**

Consider the following payoff matrix for Player A:

|          | Player B: B1 | Player B: B2 |
| :------- | :----------- | :----------- |
| **Player A: A1** | 1            | 2            |
| **Player A: A2** | 3            | 0            |

**Question 2:**

Consider the following payoff matrix for Player A:

|          | Player B: B1 | Player B: B2 | Player B: B3 |
| :------- | :----------- | :----------- | :----------- |
| **Player A: A1** | 8            | 7            | 9            |
| **Player A: A2** | 6            | 5            | 10           |
| **Player A: A3** | 7            | 4            | 11           |

**Question 3:**

Consider the following payoff matrix for Player A:

|          | Player B: B1 | Player B: B2 |
| :------- | :----------- | :----------- |
| **Player A: A1** | 0            | 5            |
| **Player A: A2** | -3           | 2            |

---

### 6. Answers to Practice Questions

**Answer to Question 1:**

|          | Player B: B1 | Player B: B2 | Row Minima |
| :------- | :----------- | :----------- | :--------- |
| **Player A: A1** | 1            | 2            | **1**      |
| **Player A: A2** | 3            | 0            | **0**      |
| **Column Maxima** | **3**        | **2**        |            |

*   **Row Minima:** Row A1 = 1, Row A2 = 0
*   **Maximin:** max(1, 0) = **1** (at Row A1)
*   **Column Maxima:** Column B1 = 3, Column B2 = 2
*   **Minimax:** min(3, 2) = **2** (at Column B2)

*   **Conclusion:** Maximin (1) $\neq$ Minimax (2). Therefore, this game does **not** have a saddle point. (Requires mixed strategies for solution).

**Answer to Question 2:**

|          | Player B: B1 | Player B: B2 | Player B: B3 | Row Minima |
| :------- | :----------- | :----------- | :----------- | :--------- |
| **Player A: A1** | 8            | 7            | 9            | **7**      |
| **Player A: A2** | 6            | 5            | 10           | **5**      |
| **Player A: A3** | 7            | 4            | 11           | **4**      |
| **Column Maxima** | **8**        | **7**        | **11**       |            |

*   **Row Minima:** Row A1 = 7, Row A2 = 5, Row A3 = 4
*   **Maximin:** max(7, 5, 4) = **7** (at Row A1)
*   **Column Maxima:** Column B1 = 8, Column B2 = 7, Column B3 = 11
*   **Minimax:** min(8, 7, 11) = **7** (at Column B2)

*   **Conclusion:** Maximin (7) = Minimax (7). A saddle point exists at the intersection of Row A1 and Column B2.
    *   **Player A's Optimal Strategy:** A1
    *   **Player B's Optimal Strategy:** B2
    *   **Value of the Game:** 7

**Answer to Question 3:**

|          | Player B: B1 | Player B: B2 | Row Minima |
| :------- | :----------- | :----------- | :--------- |
| **Player A: A1** | 0            | 5            | **0**      |
| **Player A: A2** | -3           | 2            | **-3**     |
| **Column Maxima** | **0**        | **5**        |            |

*   **Row Minima:** Row A1 = 0, Row A2 = -3
*   **Maximin:** max(0, -3) = **0** (at Row A1)
*   **Column Maxima:** Column B1 = 0, Column B2 = 5
*   **Minimax:** min(0, 5) = **0** (at Column B1)

*   **Conclusion:** Maximin (0) = Minimax (0). A saddle point exists at the intersection of Row A1 and Column B1.
    *   **Player A's Optimal Strategy:** A1
    *   **Player B's Optimal Strategy:** B1
    *   **Value of the Game:** 0

---

### 7. Important Points to Remember (Summary)

*   **Game Theory** analyzes strategic interactions between rational players.
*   We focus on **two-person zero-sum games** where one player's gain is the other's loss.
*   The **payoff matrix** is crucial for representing the game.
*   A **saddle point** is an equilibrium in pure strategies.
*   It exists when the **maximin value equals the minimax value**.
*   **Maximin** is the maximum of the row minimums (Player A's security level).
*   **Minimax** is the minimum of the column maximums (Player B's security level).
*   If a saddle point exists, the optimal strategies are the pure strategies corresponding to the saddle point.
*   The **value of the game** is the payoff at the saddle point.
*   If no saddle point exists, players must use **mixed strategies**, which involves probabilities for choosing actions (not covered in this topic).

---

This concludes the study notes for "Game Theory: Games with Saddle Points." Remember to consult the recommended textbooks for a deeper understanding and more examples.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
