---
title: "Game Theory: Introduction"
subject: "OPTIMIZATION TECHNIQUES"
module: "Module 2: Game Theory: Introduction"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf48044641ca"
status: "completed"
scrapedAt: "2026-05-20T18:15:55.240Z"
---
# OPTIMIZATION TECHNIQUES

## Module 2: Game Theory: Introduction

### Topic: Game Theory: Introduction

---

### 1. Learning Outcomes:

Upon completion of this topic, you will be able to:
* Understand the fundamental concepts of game theory.
* Identify different types of games.
* Define key terminology used in game theory.
* Recognize the applicability of game theory in various decision-making scenarios.

---

### 2. Introduction to Game Theory

**2.1 What is Game Theory?**

*   Game theory is a **mathematical framework** for analyzing situations where the outcome of a decision depends not only on the decision-maker's own actions but also on the actions of other rational decision-makers (called players).
*   It is concerned with **strategic interactions**, where each player anticipates the actions of others and makes their decisions accordingly.
*   **Key Idea:** Players are rational, meaning they aim to maximize their own payoffs, and they assume other players are also rational.
*   **Applications:** Economics, political science, evolutionary biology, computer science, psychology, and management (especially in decision-making under competition).

**(Referenced from: S.S. Rao, Engineering Optimization: Theory and Practice, Revised 3rd Edition 2011, Chapter 12 - Game Theory)**

**2.2 Core Components of a Game:**

*   **Players:** The decision-makers involved in the game.
*   **Strategies:** The set of available actions or choices that each player can make.
*   **Payoffs:** The outcomes or rewards (or losses) that each player receives for each combination of strategies chosen by all players. Payoffs are typically represented in a matrix.

**2.3 Rationality Assumption:**

*   A crucial assumption in game theory is that all players are **rational**. This means each player:
    *   Has a well-defined set of strategies.
    *   Knows the rules of the game, the strategies of other players, and their possible payoffs.
    *   Chooses their strategy to maximize their own expected payoff, given their beliefs about the other players' strategies.
    *   Assumes other players are also rational.

---

### 3. Types of Games

Games can be classified based on various criteria:

**3.1 Based on the Number of Players:**

*   **Two-Player Games:** Only two participants are involved. This is the most commonly studied type.
*   **N-Player Games:** Games with more than two players.

**3.2 Based on the Sum of Payoffs (Zero-Sum vs. Non-Zero-Sum):**

*   **Zero-Sum Games:** The total payoff to all players for any given outcome of the game is zero. What one player gains, the other player(s) lose.
    *   *Example:* A poker game where the money exchanged between players sums to zero.
*   **Non-Zero-Sum Games:** The total payoff to all players can be positive, negative, or zero. Players can both win, both lose, or one can win more than the other loses.
    *   *Example:* A negotiation where both parties can benefit from a deal, or a competition where companies can increase their market share simultaneously.

**(Referenced from: H.A. Taha, Operations Research, Eight Edition 2006, Chapter 11 - Theory of Games)**

**3.3 Based on Players' Knowledge and Actions:**

*   **Simultaneous Move Games:** Players make their decisions at the same time, without knowing the decisions of other players.
    *   *Example:* Rock-Paper-Scissors.
*   **Sequential Move Games:** Players make their decisions in a specific order, with later players being aware of the earlier players' moves.
    *   *Example:* Chess, Tic-Tac-Toe.

**3.4 Based on Strategies:**

*   **Pure Strategy Games:** Each player chooses a single, specific strategy with certainty.
*   **Mixed Strategy Games:** Players randomize their choice of strategies, assigning probabilities to each available strategy.

---

### 4. Key Concepts and Terminology

**4.1 Players:**

*   The decision-makers in the game.

**4.2 Strategies:**

*   A **strategy** for a player is a complete plan of action that specifies the choice of action the player will take in every possible situation they might encounter.
*   **Pure Strategy:** A specific course of action chosen with probability 1.
*   **Mixed Strategy:** A probability distribution over the set of pure strategies.

**4.3 Payoff Matrix (for Two-Player Zero-Sum Games):**

*   A table that summarizes the payoffs for each player for every possible combination of strategies.
*   Typically, it shows the payoffs for the row player. The column player's payoffs are the negative of these values (in a zero-sum game).

    |               | **Column Player's Strategy C1** | **Column Player's Strategy C2** | ... |
    | :------------ | :------------------------------ | :------------------------------ | :-- |
    | **Row Player's Strategy R1** | Payoff R1, C1                   | Payoff R1, C2                   | ... |
    | **Row Player's Strategy R2** | Payoff R2, C1                   | Payoff R2, C2                   | ... |
    | ...           | ...                             | ...                             | ... |

**4.4 Saddle Point:**

*   A **saddle point** in a payoff matrix is an entry that is simultaneously the minimum value in its row and the maximum value in its column.
*   If a game has a saddle point, then the optimal strategies for both players are pure strategies, and the value of the game is the payoff at the saddle point.

**4.5 Maximin and Minimax Strategies:**

*   **Maximin Strategy (for Row Player):** The row player wants to maximize their minimum possible payoff. They look at the minimum payoff in each row (guaranteed payoff for that row strategy) and choose the row that gives the maximum of these minimums. This is a conservative approach.
*   **Minimax Strategy (for Column Player):** The column player wants to minimize their maximum possible loss. They look at the maximum payoff the row player can get for each column strategy (which is the column player's maximum loss) and choose the column that gives the minimum of these maximums. This is also a conservative approach.

**4.6 Value of the Game:**

*   The expected payoff to the players when they play optimally.
*   In a zero-sum game with a saddle point, the value of the game is the payoff at the saddle point.

**(Referenced from: S.S. Rao, Engineering Optimization: Theory and Practice, Revised 3rd Edition 2011, Chapter 12 - Game Theory)**

---

### 5. Examples

**Example 1: Finding a Saddle Point**

Consider the following payoff matrix for a two-player, zero-sum game. The entries represent the payoffs to the Row Player.

|               | **Column Player's Strategy C1** | **Column Player's Strategy C2** | **Column Player's Strategy C3** | **Row Minimum** |
| :------------ | :------------------------------ | :------------------------------ | :------------------------------ | :-------------- |
| **Row Player's Strategy R1** | 3                               | 1                               | 4                               | **1**           |
| **Row Player's Strategy R2** | 2                               | 5                               | 3                               | **2**           |
| **Row Player's Strategy R3** | 0                               | 2                               | 1                               | **0**           |
| **Column Maximum** | **3**                           | **5**                           | **4**                           |                 |

**Steps to find a saddle point:**

1.  **Find Row Minimums:** For each row, find the smallest entry.
    *   R1: min(3, 1, 4) = 1
    *   R2: min(2, 5, 3) = 2
    *   R3: min(0, 2, 1) = 0
2.  **Find Maximin:** Find the maximum of the row minimums.
    *   Maximin = max(1, 2, 0) = 2. This occurs at R2.
3.  **Find Column Maximums:** For each column, find the largest entry.
    *   C1: max(3, 2, 0) = 3
    *   C2: max(1, 5, 2) = 5
    *   C3: max(4, 3, 1) = 4
4.  **Find Minimax:** Find the minimum of the column maximums.
    *   Minimax = min(3, 5, 4) = 3. This occurs at C1.

**Conclusion:**
Since the Maximin value (2) is not equal to the Minimax value (3), this game does **not** have a saddle point in pure strategies. The players will need to use mixed strategies to find the optimal solution.

---

**Example 2: Game with a Saddle Point**

Consider the following payoff matrix:

|               | **Column Player's Strategy C1** | **Column Player's Strategy C2** | **Row Minimum** |
| :------------ | :------------------------------ | :------------------------------ | :-------------- |
| **Row Player's Strategy R1** | 5                               | 2                               | **2**           |
| **Row Player's Strategy R2** | 7                               | 4                               | **4**           |
| **Column Maximum** | **7**                           | **4**                           |                 |

1.  **Row Minimums:** R1: 2, R2: 4.
2.  **Maximin:** max(2, 4) = 4 (at R2).
3.  **Column Maximums:** C1: 7, C2: 4.
4.  **Minimax:** min(7, 4) = 4 (at C2).

**Conclusion:**
The Maximin value (4) equals the Minimax value (4). This indicates a saddle point at the entry (R2, C2).

*   **Optimal Strategy for Row Player:** Play R2 (pure strategy).
*   **Optimal Strategy for Column Player:** Play C2 (pure strategy).
*   **Value of the Game:** 4.

---

### 6. Practice Questions and Exercises

**Question 1:**
Define the terms "player," "strategy," and "payoff" in the context of game theory.

**Question 2:**
Differentiate between zero-sum games and non-zero-sum games. Provide an example for each.

**Question 3:**
What is the primary assumption made about players in most game theory models?

**Question 4:**
Explain the concept of a "saddle point" in a payoff matrix. What does its existence imply about the optimal strategies?

**Question 5:**
Find the maximin and minimax values for the following payoff matrix. Does this game have a saddle point? If yes, identify it.

|               | **C1** | **C2** | **C3** |
| :------------ | :----- | :----- | :----- |
| **R1**        | 2      | 4      | 3      |
| **R2**        | 5      | 1      | 6      |
| **R3**        | 3      | 2      | 4      |

---

### 7. Answers to Practice Questions

**Answer 1:**
*   **Player:** A decision-maker in a game.
*   **Strategy:** A complete plan of action that specifies the choice of action a player will take in every possible situation they might encounter.
*   **Payoff:** The outcome or reward (or loss) that a player receives for a particular combination of strategies chosen by all players.

**Answer 2:**
*   **Zero-Sum Game:** A game where the sum of payoffs for all players is always zero. Whatever one player gains, the other loses.
    *   *Example:* A game of chess.
*   **Non-Zero-Sum Game:** A game where the sum of payoffs can be positive, negative, or zero. Players can achieve mutually beneficial outcomes or suffer losses together.
    *   *Example:* Two companies deciding whether to advertise or not.

**Answer 3:**
The primary assumption is that all players are **rational**. This means they aim to maximize their own payoffs and assume other players are also rational.

**Answer 4:**
A saddle point is an element in a payoff matrix that is the minimum in its row and the maximum in its column. If a game has a saddle point, it means that both players have an optimal pure strategy, and the value of the game is the payoff at the saddle point.

**Answer 5:**
Let's analyze the payoff matrix:

|               | **C1** | **C2** | **C3** | **Row Minimum** |
| :------------ | :----- | :----- | :----- | :-------------- |
| **R1**        | 2      | 4      | 3      | **2**           |
| **R2**        | 5      | 1      | 6      | **1**           |
| **R3**        | 3      | 2      | 4      | **2**           |
| **Column Maximum** | **5**  | **4**  | **6**  |                 |

*   **Row Minimums:** R1: 2, R2: 1, R3: 2.
*   **Maximin:** max(2, 1, 2) = **2**. This occurs at R1 and R3.
*   **Column Maximums:** C1: 5, C2: 4, C3: 6.
*   **Minimax:** min(5, 4, 6) = **4**. This occurs at C2.

Since the Maximin value (2) is not equal to the Minimax value (4), this game **does not have a saddle point** in pure strategies.

---

### 8. Important Points to Remember

*   Game theory is about **strategic decision-making** in situations involving multiple interacting rational agents.
*   The core elements of any game are **players**, their **strategies**, and their **payoffs**.
*   **Zero-sum games** are a fundamental subclass where gains and losses are perfectly offsetting.
*   The existence of a **saddle point** simplifies the problem to pure strategies, with the value of the game being the saddle point entry.
*   When a saddle point does not exist, players must resort to **mixed strategies** to achieve an optimal outcome.

---

### 9. Alignment with Course Outcomes:

*   **CO1 (Formulate real-world problems as LPP):** While this module primarily introduces game theory, understanding strategic interactions can inform the formulation of certain decision-making problems that might later be modeled as LPPs, especially in competitive scenarios.
*   **CO2 (Apply different methods of Game Theory):** This introductory module lays the groundwork for applying game theory methods. Future modules will delve into solving games without saddle points, which directly addresses this outcome. Understanding the basic concepts of players, strategies, and payoffs is essential for applying any game theory method.
*   **CO3 & CO4:** These outcomes relate to nonlinear unconstrained optimization and modern optimization methods, which are distinct from introductory game theory. However, the logical reasoning and analytical skills developed in understanding game theory can be transferable to other optimization problem-solving contexts.

---

This concludes the introductory notes for Module 2: Game Theory. Further topics will build upon these fundamental concepts.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
