---
title: "2- person zero – sum game -Saddle point"
subject: "OPTIMIZATION TECHNIQUES"
module: "Module 2: Game Theory: Introduction"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf48044641cb"
status: "completed"
scrapedAt: "2026-05-20T18:15:55.942Z"
---
# OPTIMIZATION TECHNIQUES: Module 2 - Game Theory: Introduction

## Topic: 2-Person Zero-Sum Game - Saddle Point

### 1. Introduction to Game Theory

Game theory is a mathematical framework for analyzing strategic interactions between rational decision-makers. It is concerned with situations where the outcome for each participant depends not only on their own actions but also on the actions of others.

**Key Concepts:**

*   **Players:** The decision-makers involved in the game.
*   **Strategies:** The set of available choices or actions for each player.
*   **Payoff:** The outcome or reward received by a player for a given combination of strategies.
*   **Rationality:** Players are assumed to act in their own best interest to maximize their payoff.
*   **Zero-Sum Game:** A game where the total payoff to all players is zero. What one player gains, the other player loses. This means the sum of the payoffs for all players is always zero.

**Relevance to Optimization Techniques:**
Game theory provides a structured approach to solving decision problems where multiple agents with potentially conflicting objectives interact. This is crucial in many optimization scenarios, especially in competitive environments.

**Course Outcome Alignment:**
This topic directly addresses **CO2: Apply different methods of Game Theory, Network Tree and Shortest Path (Knowledge Level: K3)** by introducing a fundamental concept within game theory.

### 2. 2-Person Zero-Sum Games

In a 2-person zero-sum game, there are only two players, and the total gain of one player exactly equals the total loss of the other player.

**Characteristics:**

*   **Two Players:** Player 1 (Row Player) and Player 2 (Column Player).
*   **Opposing Interests:** Player 1 aims to maximize their payoff, while Player 2 aims to minimize Player 1's payoff (which is equivalent to maximizing their own payoff in a zero-sum scenario).
*   **Payoff Matrix:** A tabular representation showing the payoffs for Player 1 for all possible combinations of strategies. The payoffs for Player 2 are the negative of Player 1's payoffs.

**Payoff Matrix Representation:**

Let Player 1 have *m* strategies ($R_1, R_2, ..., R_m$) and Player 2 have *n* strategies ($C_1, C_2, ..., C_n$). The payoff matrix $A = [a_{ij}]$ is an $m \times n$ matrix where $a_{ij}$ represents the payoff to Player 1 when Player 1 chooses strategy $R_i$ and Player 2 chooses strategy $C_j$.

$$
A =
\begin{pmatrix}
a_{11} & a_{12} & \cdots & a_{1n} \\
a_{21} & a_{22} & \cdots & a_{2n} \\
\vdots & \vdots & \ddots & \vdots \\
a_{m1} & a_{m2} & \cdots & a_{mn}
\end{pmatrix}
$$

*   **Player 1's Goal:** To choose a row strategy $R_i$ that maximizes the minimum payoff they can receive, regardless of Player 2's choice. This is the **maximin** strategy.
*   **Player 2's Goal:** To choose a column strategy $C_j$ that minimizes the maximum payoff Player 1 can receive, regardless of Player 1's choice. This is the **minimax** strategy.

### 3. Saddle Point

A saddle point in a payoff matrix represents a stable equilibrium in a zero-sum game where neither player can improve their payoff by unilaterally changing their strategy. It occurs when the maximin value is equal to the minimax value.

**Definitions:**

*   **Maximin Value:** The maximum of the row minimums.
    *   For each row $i$, find the minimum payoff: $min_j(a_{ij})$.
    *   The maximin value is $max_i(min_j(a_{ij}))$.
*   **Minimax Value:** The minimum of the column maximums.
    *   For each column $j$, find the maximum payoff: $max_i(a_{ij})$.
    *   The minimax value is $min_j(max_i(a_{ij}))$.

**Saddle Point Condition:**
A saddle point exists if and only if:
$max_i(min_j(a_{ij})) = min_j(max_i(a_{ij}))$

**Key Properties of a Saddle Point:**

*   The saddle point value is the **value of the game**.
*   The saddle point occurs at the intersection of a row and a column that yields this value.
*   If a saddle point exists, both players have **optimal pure strategies**. Player 1 chooses the row corresponding to the maximin value, and Player 2 chooses the column corresponding to the minimax value.

**Finding a Saddle Point:**

**Method 1: Using Maximin and Minimax**

1.  **Identify Row Minimums:** For each row, find the smallest element.
2.  **Find Maximin:** Identify the largest among the row minimums. This is the maximin value.
3.  **Identify Column Maximums:** For each column, find the largest element.
4.  **Find Minimax:** Identify the smallest among the column maximums. This is the minimax value.
5.  **Compare:** If the maximin value equals the minimax value, then a saddle point exists. The entry in the payoff matrix corresponding to the row of the maximin and the column of the minimax is the saddle point.

**Method 2: Using Minimax and Maximin Notation (Simplified)**

1.  **Row Minima:** $\min_j a_{ij}$ for each row $i$.
2.  **Maximin:** $v_1 = \max_i (\min_j a_{ij})$
3.  **Column Maxima:** $\max_i a_{ij}$ for each column $j$.
4.  **Minimax:** $v_2 = \min_j (\max_i a_{ij})$
5.  **Saddle Point:** If $v_1 = v_2$, a saddle point exists. The value of the game is $v_1$. The optimal pure strategy for Player 1 is the row where the maximin occurs, and for Player 2 is the column where the minimax occurs.

**Important Point:** If $v_1 < v_2$, then no saddle point exists, and the players must use mixed strategies (which will be covered in later topics).

**Referencing Textbooks:**

*   **S.S. Rao (Engineering Optimization):** Likely discusses saddle points in the context of optimization problems, potentially as a special case of finding stationary points or minimax problems. Chapter on Dynamic Programming or Game Theory might contain relevant sections.
*   **H.A. Taha (Operations Research):** Explicitly covers game theory, including the definition of saddle points, maximin and minimax strategies, and the conditions for their existence. Likely in a chapter dedicated to game theory applications.
*   **Kanti Swarup, P.K. Gupta, Man Mohan (Operations Research):** Similar to Taha, this book is expected to provide a thorough explanation of 2-person zero-sum games and saddle points.
*   **Kalynamoy Deb (Optimization for Engineering Design):** Might touch upon game theory in competitive design scenarios or as a context for optimization problems with multiple interacting agents.
*   **Ravindran, Phillips, Solberg (Operations Research):** Will certainly cover the foundational concepts of game theory, including saddle points.

### 4. Examples of Saddle Point Games

**Example 1:**

Consider the following payoff matrix for Player 1:

$$
A =
\begin{pmatrix}
3 & 5 & 2 \\
1 & 6 & 4 \\
7 & 3 & 8
\end{pmatrix}
$$

**Step 1: Find Row Minimums**
*   Row 1: min(3, 5, 2) = 2
*   Row 2: min(1, 6, 4) = 1
*   Row 3: min(7, 3, 8) = 3

**Step 2: Find Maximin**
*   Maximin = max(2, 1, 3) = 3. This occurs in Row 3.

**Step 3: Find Column Maximums**
*   Column 1: max(3, 1, 7) = 7
*   Column 2: max(5, 6, 3) = 6
*   Column 3: max(2, 4, 8) = 8

**Step 4: Find Minimax**
*   Minimax = min(7, 6, 8) = 6. This occurs in Column 2.

**Step 5: Compare**
*   Maximin (3) $\neq$ Minimax (6). Therefore, no saddle point exists in this game.

**Example 2:**

Consider the following payoff matrix for Player 1:

$$
A =
\begin{pmatrix}
2 & 3 & 1 \\
5 & 0 & 4 \\
3 & 2 & 6
\end{pmatrix}
$$

**Step 1: Find Row Minimums**
*   Row 1: min(2, 3, 1) = 1
*   Row 2: min(5, 0, 4) = 0
*   Row 3: min(3, 2, 6) = 2

**Step 2: Find Maximin**
*   Maximin = max(1, 0, 2) = 2. This occurs in Row 3.

**Step 3: Find Column Maximums**
*   Column 1: max(2, 5, 3) = 5
*   Column 2: max(3, 0, 2) = 3
*   Column 3: max(1, 4, 6) = 6

**Step 4: Find Minimax**
*   Minimax = min(5, 3, 6) = 3. This occurs in Column 2.

**Step 5: Compare**
*   Maximin (2) $\neq$ Minimax (3). Therefore, no saddle point exists in this game.

**Example 3: Finding a Saddle Point**

Consider the following payoff matrix for Player 1:

$$
A =
\begin{pmatrix}
10 & 8 & 12 \\
5 & 7 & 6 \\
9 & 4 & 11
\end{pmatrix}
$$

**Step 1: Find Row Minimums**
*   Row 1: min(10, 8, 12) = 8
*   Row 2: min(5, 7, 6) = 5
*   Row 3: min(9, 4, 11) = 4

**Step 2: Find Maximin**
*   Maximin = max(8, 5, 4) = 8. This occurs in Row 1.

**Step 3: Find Column Maximums**
*   Column 1: max(10, 5, 9) = 10
*   Column 2: max(8, 7, 4) = 8
*   Column 3: max(12, 6, 11) = 12

**Step 4: Find Minimax**
*   Minimax = min(10, 8, 12) = 8. This occurs in Column 2.

**Step 5: Compare**
*   Maximin (8) = Minimax (8). Therefore, a saddle point exists.
*   The saddle point is at the intersection of Row 1 and Column 2.
*   The value of the game is 8.
*   **Optimal Pure Strategy for Player 1:** Choose Row 1.
*   **Optimal Pure Strategy for Player 2:** Choose Column 2.

**Verification:**
*   If Player 1 chooses Row 1, Player 2 will choose Column 2 (to minimize Player 1's payoff from {10, 8, 12}, choosing 8). Player 1 gets 8.
*   If Player 2 chooses Column 2, Player 1 will choose Row 1 (to maximize their payoff from {8, 7, 4}, choosing 8). Player 1 gets 8.

This confirms that neither player can improve their outcome by unilaterally changing their strategy when the saddle point is achieved.

### 5. Importance of Saddle Point

*   **Simplifies Strategy:** If a saddle point exists, the optimal strategies for both players are pure strategies (a single choice of action), making the decision-making process straightforward.
*   **Value of the Game:** The value of the game at the saddle point represents the guaranteed minimum payoff for Player 1 and the maximum payoff Player 2 will allow Player 1 to achieve.
*   **Equilibrium:** It signifies a stable equilibrium where no player has an incentive to deviate.

### 6. Practice Questions

**Question 1:**
Determine if the following payoff matrix has a saddle point. If it does, identify the saddle point and the value of the game.

$$
A =
\begin{pmatrix}
4 & 2 & 5 \\
3 & 6 & 1 \\
7 & 3 & 8
\end{pmatrix}
$$

**Answer 1:**
*   Row Minimums: min(4,2,5)=2, min(3,6,1)=1, min(7,3,8)=3
*   Maximin: max(2,1,3) = 3 (Row 3)
*   Column Maximums: max(4,3,7)=7, max(2,6,3)=6, max(5,1,8)=8
*   Minimax: min(7,6,8) = 6 (Column 2)
*   Maximin (3) $\neq$ Minimax (6). Therefore, no saddle point exists.

**Question 2:**
Find the saddle point and the value of the game for the following payoff matrix:

$$
A =
\begin{pmatrix}
1 & 3 \\
4 & 2
\end{pmatrix}
$$

**Answer 2:**
*   Row Minimums: min(1,3)=1, min(4,2)=2
*   Maximin: max(1,2) = 2 (Row 2)
*   Column Maximums: max(1,4)=4, max(3,2)=3
*   Minimax: min(4,3) = 3 (Column 2)
*   Maximin (2) $\neq$ Minimax (3). Therefore, no saddle point exists.

**Question 3:**
Does the following payoff matrix have a saddle point? If yes, what are the optimal pure strategies and the value of the game?

$$
A =
\begin{pmatrix}
8 & 6 & 7 \\
5 & 9 & 4 \\
7 & 8 & 5
\end{pmatrix}
$$

**Answer 3:**
*   Row Minimums: min(8,6,7)=6, min(5,9,4)=4, min(7,8,5)=5
*   Maximin: max(6,4,5) = 6 (Row 1)
*   Column Maximums: max(8,5,7)=8, max(6,9,8)=9, max(7,4,5)=7
*   Minimax: min(8,9,7) = 7 (Column 3)
*   Maximin (6) $\neq$ Minimax (7). Therefore, no saddle point exists.

**Question 4:**
Consider the payoff matrix:

$$
A =
\begin{pmatrix}
-1 & 2 & 0 \\
3 & -2 & 4 \\
1 & 0 & -3
\end{pmatrix}
$$

Find the saddle point and the value of the game, if any.

**Answer 4:**
*   Row Minimums: min(-1,2,0)=-1, min(3,-2,4)=-2, min(1,0,-3)=-3
*   Maximin: max(-1,-2,-3) = -1 (Row 1)
*   Column Maximums: max(-1,3,1)=3, max(2,-2,0)=2, max(0,4,-3)=4
*   Minimax: min(3,2,4) = 2 (Column 2)
*   Maximin (-1) $\neq$ Minimax (2). Therefore, no saddle point exists.

**Question 5:**
Identify the saddle point and the value of the game for the given payoff matrix:

$$
A =
\begin{pmatrix}
5 & 3 & 6 \\
2 & 4 & 1 \\
7 & 0 & 8
\end{pmatrix}
$$

**Answer 5:**
*   Row Minimums: min(5,3,6)=3, min(2,4,1)=1, min(7,0,8)=0
*   Maximin: max(3,1,0) = 3 (Row 1)
*   Column Maximums: max(5,2,7)=7, max(3,4,0)=4, max(6,1,8)=8
*   Minimax: min(7,4,8) = 4 (Column 2)
*   Maximin (3) $\neq$ Minimax (4). Therefore, no saddle point exists.

**Question 6:**
Find the saddle point, if it exists, for the payoff matrix:

$$
A =
\begin{pmatrix}
6 & 7 & 5 \\
8 & 4 & 9 \\
3 & 5 & 2
\end{pmatrix}
$$

**Answer 6:**
*   Row Minimums: min(6,7,5)=5, min(8,4,9)=4, min(3,5,2)=2
*   Maximin: max(5,4,2) = 5 (Row 1)
*   Column Maximums: max(6,8,3)=8, max(7,4,5)=7, max(5,9,2)=9
*   Minimax: min(8,7,9) = 7 (Column 2)
*   Maximin (5) $\neq$ Minimax (7). Therefore, no saddle point exists.

**Question 7:**
Consider the payoff matrix for Player 1:

$$
A =
\begin{pmatrix}
9 & 4 & 7 \\
6 & 5 & 8 \\
3 & 2 & 1
\end{pmatrix}
$$

Determine if a saddle point exists, and if so, state its location and the value of the game.

**Answer 7:**
*   Row Minimums: min(9,4,7)=4, min(6,5,8)=5, min(3,2,1)=1
*   Maximin: max(4,5,1) = 5 (Row 2)
*   Column Maximums: max(9,6,3)=9, max(4,5,2)=5, max(7,8,1)=8
*   Minimax: min(9,5,8) = 5 (Column 2)
*   Maximin (5) = Minimax (5). Therefore, a saddle point exists.
*   **Saddle Point:** At the intersection of Row 2 and Column 2.
*   **Value of the Game:** 5.
*   **Optimal Pure Strategy for Player 1:** Row 2.
*   **Optimal Pure Strategy for Player 2:** Column 2.

### 7. Important Points to Remember

*   **Zero-Sum Assumption:** The concepts discussed are strictly for zero-sum games.
*   **Pure vs. Mixed Strategies:** Saddle points only identify optimal *pure* strategies. If maximin $\neq$ minimax, mixed strategies are required.
*   **Player Roles:** Player 1 wants to maximize their minimum payoff (maximin), while Player 2 wants to minimize Player 1's maximum payoff (minimax).
*   **Existence of Saddle Point:** A saddle point exists if and only if the maximin value equals the minimax value.
*   **Uniqueness of Saddle Point:** While the value of the game is unique, the saddle point itself might not be unique (multiple entries could have the same maximin/minimax values).

This concludes the introduction to 2-person zero-sum games and the concept of saddle points. Understanding these fundamentals is crucial for progressing to more complex game theory concepts like mixed strategies.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=clVwS3P9s84) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |
