---
title: "Graphical method for m x 2 & 2 x n games"
subject: "OPERATIONS RESEARCH"
module: "Module 2: Sequencing Problem: Basic terminologies"
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1551d0cf4804463626"
status: "completed"
scrapedAt: "2026-05-20T18:01:57.125Z"
---
# Operations Research: Module 2 - Sequencing Problem: Basic Terminologies
## Topic: Graphical Method for m x 2 & 2 x n Games

This module introduces the fundamental concepts of sequencing problems, which are concerned with the optimal ordering of tasks or jobs to minimize costs, time, or maximize resource utilization. While this module broadly covers sequencing, the specific topic of graphical methods for game theory is addressed here, which is crucial for understanding strategic decision-making in competitive environments.

---

### Learning Outcomes:

By the end of this topic, you will be able to:

*   Understand the basic terminologies used in sequencing problems.
*   Formulate simple game theory problems.
*   Solve simple game theory problems using the graphical method for specific matrix sizes (m x 2 and 2 x n).
*   Interpret the results of game theory solutions in the context of strategic decision-making.

---

### Course Outcomes Alignment:

This topic directly contributes to **CO3: To solve simple problems in game theory (Knowledge Level: K2, K3)**. It provides the foundational knowledge and practical skills to analyze and solve basic game theory scenarios.

---

### Key Concepts and Definitions:

#### Game Theory Fundamentals:

*   **Game:** A situation involving two or more participants (players) where the outcome of each participant's decisions depends on the decisions of the other participants.
*   **Players:** The decision-makers in a game.
*   **Strategies:** The set of all possible actions a player can take.
*   **Payoff:** The outcome or reward a player receives for a particular combination of strategies chosen by all players.
*   **Payoff Matrix:** A table that shows the payoffs for each player for every possible combination of strategies.
*   **Zero-Sum Game:** A game where the total gain for all players is zero. What one player wins, another player loses.
*   **Rectangular Game:** A game where the payoff matrix is not square (i.e., the number of strategies for each player is different).
*   **Pure Strategy:** A strategy where a player always chooses a specific action with certainty.
*   **Mixed Strategy:** A strategy where a player chooses among their available actions according to a probability distribution.
*   **Optimal Strategy:** A strategy that maximizes a player's expected payoff, assuming the opponent also plays optimally.
*   **Value of the Game:** The expected payoff for each player when both play their optimal strategies.

---

### Graphical Method for m x 2 and 2 x n Games

The graphical method is a technique used to solve rectangular games where one player has only two strategies, and the other player has 'm' or 'n' strategies. This method simplifies the analysis by visualizing the expected payoffs.

#### Case 1: 2 x n Game (Player A has 2 strategies, Player B has n strategies)

In this scenario, Player A (the row player) has two strategies, and Player B (the column player) has 'n' strategies. We assume it's a zero-sum game.

**Objective:** To find the optimal mixed strategy for Player A and the value of the game.

**Steps:**

1.  **Construct the Payoff Matrix:** Set up the payoff matrix where the entries represent the payoffs to Player A.
2.  **Identify Player A's Strategies:** Player A has two pure strategies.
3.  **Graph Player A's Expected Payoffs:**
    *   The horizontal axis represents the probabilities with which Player B chooses their strategies. Let $p_j$ be the probability that Player B chooses strategy $j$ (where $\sum p_j = 1$).
    *   For each of Player A's pure strategies, plot a line representing the expected payoff as a function of Player B's strategy mix.
    *   Since Player A has two strategies, we will plot two lines.
    *   The payoff for Player A when they choose their first strategy and Player B plays a mixed strategy $(p_1, p_2, ..., p_n)$ is the weighted average of the payoffs in the first row: $E_1 = a_{11}p_1 + a_{12}p_2 + ... + a_{1n}p_n$.
    *   Similarly, for Player A's second strategy: $E_2 = a_{21}p_1 + a_{22}p_2 + ... + a_{2n}p_n$.
4.  **Find the Lower Envelope:** Player A wants to maximize their minimum expected payoff. Therefore, Player A will choose their mixed strategy (probabilities for their own two strategies) such that their expected payoff is as high as possible, regardless of what Player B does. This means Player A will look for the highest point on the *lower envelope* of the lines plotted in step 3. The lower envelope is formed by the lowest points of all the lines for each of Player B's possible mixed strategies.
5.  **Determine the Optimal Strategy for Player A:** The point on the lower envelope that maximizes Player A's minimum payoff corresponds to the optimal mixed strategy for Player A. If this maximum occurs at the intersection of two lines (corresponding to two of Player B's pure strategies), Player A will use a mixed strategy involving those two strategies. If it occurs at the intersection of lines corresponding to a mixed strategy of Player B, it implies Player B should also play a mixed strategy.
6.  **Determine the Value of the Game:** The y-coordinate of the highest point on the lower envelope is the value of the game for Player A.

**Important Note for 2 x n games:** When plotting, it's often easier to consider Player B playing pure strategies. The graphical method for 2 x n games helps determine Player A's optimal mixed strategy. Player B's optimal strategy will involve assigning probabilities to their strategies such that Player A's expected payoff is maximized.

**Example (2 x 3 Game):**

Consider a game with the following payoff matrix for Player A:

| Player A \ Player B | B1    | B2    | B3    |
| :------------------ | :---- | :---- | :---- |
| A1                  | 2     | -1    | 3     |
| A2                  | -2    | 4     | -3    |

Let Player A play A1 with probability $x$ and A2 with probability $1-x$.
Let Player B play B1 with probability $p_1$, B2 with probability $p_2$, and B3 with probability $p_3$, where $p_1 + p_2 + p_3 = 1$.

Expected payoff for Player A if Player B plays pure strategies:

*   If B plays B1: $E_A(B1) = 2x + (-2)(1-x) = 2x - 2 + 2x = 4x - 2$
*   If B plays B2: $E_A(B2) = -1x + 4(1-x) = -x + 4 - 4x = -5x + 4$
*   If B plays B3: $E_A(B3) = 3x + (-3)(1-x) = 3x - 3 + 3x = 6x - 3$

Now, we plot these three lines with respect to 'x' (Player A's probability for A1).

*   Line 1 (B1): $y = 4x - 2$
*   Line 2 (B2): $y = -5x + 4$
*   Line 3 (B3): $y = 6x - 3$

Player A wants to maximize their minimum payoff. They will choose 'x' to find the highest point on the *lower envelope* of these three lines.

Let's find intersections:
*   Line 1 and Line 2: $4x - 2 = -5x + 4 \implies 9x = 6 \implies x = 6/9 = 2/3$.
    At $x = 2/3$, $y = 4(2/3) - 2 = 8/3 - 6/3 = 2/3$.
*   Line 1 and Line 3: $4x - 2 = 6x - 3 \implies 2x = 1 \implies x = 1/2$.
    At $x = 1/2$, $y = 4(1/2) - 2 = 2 - 2 = 0$.
*   Line 2 and Line 3: $-5x + 4 = 6x - 3 \implies 11x = 7 \implies x = 7/11$.
    At $x = 7/11$, $y = -5(7/11) + 4 = -35/11 + 44/11 = 9/11$.

By examining the graph of these lines or by evaluating the payoff at these intersection points and the boundaries ($x=0, x=1$):

*   At $x=0$ (A plays A2): Min payoff is min(-2, 4, -3) = -3.
*   At $x=1$ (A plays A1): Min payoff is min(2, -1, 3) = -1.
*   At $x=2/3$: Payoff is 2/3.
*   At $x=1/2$: Payoff is 0.
*   At $x=7/11$: Payoff is 9/11.

Comparing the minimum payoffs at these points, the highest minimum payoff for Player A is $9/11$ at $x = 7/11$.

**Solution:**
*   **Player A's optimal strategy:** Play A1 with probability $7/11$ and A2 with probability $1 - 7/11 = 4/11$.
*   **Value of the game:** $9/11$.

Player B's optimal strategy is to choose B2 and B3 such that Player A's expected payoff is $9/11$. This can be found by solving a system of equations, but for this topic, determining Player A's strategy and the game value is the primary focus.

---

#### Case 2: m x 2 Game (Player A has m strategies, Player B has 2 strategies)

In this scenario, Player A (the row player) has 'm' strategies, and Player B (the column player) has two strategies. We assume it's a zero-sum game.

**Objective:** To find the optimal mixed strategy for Player B and the value of the game.

**Steps:**

1.  **Construct the Payoff Matrix:** Set up the payoff matrix where the entries represent the payoffs to Player A.
2.  **Identify Player B's Strategies:** Player B has two pure strategies.
3.  **Graph Player B's Expected Losses (or Player A's Expected Payoffs):**
    *   The horizontal axis represents the probabilities with which Player A chooses their strategies. Let $x_i$ be the probability that Player A chooses strategy $i$ (where $\sum x_i = 1$).
    *   For each of Player B's pure strategies, plot a line representing the expected payoff to Player A as a function of Player A's strategy mix.
    *   Since Player B has two strategies, we will plot two lines.
    *   The payoff for Player A when Player B chooses their first strategy and Player A plays a mixed strategy $(x_1, x_2, ..., x_m)$ is the weighted average of the payoffs in the first column: $E_B(A1) = a_{11}x_1 + a_{21}x_2 + ... + a_{m1}x_m$.
    *   Similarly, for Player B's second strategy: $E_B(A2) = a_{12}x_1 + a_{22}x_2 + ... + a_{m2}x_m$.
4.  **Find the Upper Envelope:** Player B wants to minimize Player A's maximum payoff (which is equivalent to minimizing their own maximum loss). Therefore, Player B will choose their mixed strategy (probabilities for their own two strategies) such that Player A's expected payoff is as low as possible, regardless of what Player A does. This means Player B will look for the lowest point on the *upper envelope* of the lines plotted in step 3. The upper envelope is formed by the highest points of all the lines for each of Player A's possible mixed strategies.
5.  **Determine the Optimal Strategy for Player B:** The point on the upper envelope that minimizes Player A's maximum payoff corresponds to the optimal mixed strategy for Player B. If this minimum occurs at the intersection of two lines (corresponding to two of Player A's pure strategies), Player B will use a mixed strategy involving those two strategies.
6.  **Determine the Value of the Game:** The y-coordinate of the lowest point on the upper envelope is the value of the game for Player A (and thus the minimum loss for Player B).

**Important Note for m x 2 games:** The graphical method is primarily used to find Player B's optimal strategy and the value of the game. Player A's optimal strategy can be derived from the intersection points that define Player B's optimal mix.

**Example (3 x 2 Game):**

Consider a game with the following payoff matrix for Player A:

| Player A \ Player B | B1    | B2    |
| :------------------ | :---- | :---- |
| A1                  | 3     | -1    |
| A2                  | -2    | 4     |
| A3                  | 1     | 2     |

Let Player B play B1 with probability $p$ and B2 with probability $1-p$.
Let Player A play A1 with probability $x_1$, A2 with probability $x_2$, and A3 with probability $x_3$, where $x_1 + x_2 + x_3 = 1$.

Expected payoff for Player A if Player A plays pure strategies:

*   If A plays A1: $E_A(A1) = 3p + (-1)(1-p) = 3p - 1 + p = 4p - 1$
*   If A plays A2: $E_A(A2) = -2p + 4(1-p) = -2p + 4 - 4p = -6p + 4$
*   If A plays A3: $E_A(A3) = 1p + 2(1-p) = p + 2 - 2p = -p + 2$

Now, we plot these three lines with respect to 'p' (Player B's probability for B1).

*   Line 1 (A1): $y = 4p - 1$
*   Line 2 (A2): $y = -6p + 4$
*   Line 3 (A3): $y = -p + 2$

Player B wants to minimize Player A's maximum payoff. They will choose 'p' to find the lowest point on the *upper envelope* of these three lines.

Let's find intersections:
*   Line 1 and Line 2: $4p - 1 = -6p + 4 \implies 10p = 5 \implies p = 1/2$.
    At $p = 1/2$, $y = 4(1/2) - 1 = 2 - 1 = 1$.
*   Line 1 and Line 3: $4p - 1 = -p + 2 \implies 5p = 3 \implies p = 3/5$.
    At $p = 3/5$, $y = 4(3/5) - 1 = 12/5 - 5/5 = 7/5$.
*   Line 2 and Line 3: $-6p + 4 = -p + 2 \implies 5p = 2 \implies p = 2/5$.
    At $p = 2/5$, $y = -6(2/5) + 4 = -12/5 + 20/5 = 8/5$.

By examining the graph of these lines or by evaluating the payoff at these intersection points and the boundaries ($p=0, p=1$):

*   At $p=0$ (B plays B2): Max payoff for A is max(3, -1, 1) = 3.
*   At $p=1$ (B plays B1): Max payoff for A is max(-1, 4, 2) = 4.
*   At $p=1/2$: Payoff is 1.
*   At $p=3/5$: Payoff is 7/5.
*   At $p=2/5$: Payoff is 8/5.

Comparing the maximum payoffs at these points, the lowest maximum payoff for Player A is $1$ at $p = 1/2$.

**Solution:**
*   **Player B's optimal strategy:** Play B1 with probability $1/2$ and B2 with probability $1 - 1/2 = 1/2$.
*   **Value of the game:** $1$.

Player A's optimal strategy can be found by solving for $x_1, x_2, x_3$ such that their expected payoff is 1 when Player B plays $(1/2, 1/2)$. This involves setting the expected payoffs for Player A's pure strategies to be equal to the value of the game, given Player B's optimal strategy.

---

### Saddle Point Check (Before Graphical Method):

Before applying the graphical method, always check for a saddle point. A saddle point exists if the maximin value equals the minimax value.

*   **Maximin:** The maximum of the row minimums. Player A wants to maximize their minimum guaranteed payoff.
*   **Minimax:** The minimum of the column maximums. Player B wants to minimize Player A's maximum possible payoff.

If maximin = minimax, then the game has a saddle point, and the optimal strategies are pure strategies. The graphical method is typically used when there is no saddle point and a mixed strategy is required.

---

### Practice Questions:

**Question 1:**
Solve the following 2 x 3 game by the graphical method.

| Player A \ Player B | B1    | B2    | B3    |
| :------------------ | :---- | :---- | :---- |
| A1                  | 4     | -2    | 3     |
| A2                  | -3    | 5     | -4    |

**Answer:**
*   Player A's optimal strategy: Play A1 with probability $9/16$, A2 with probability $7/16$.
*   Value of the game: $1/4$.

**Question 2:**
Solve the following 3 x 2 game by the graphical method.

| Player A \ Player B | B1    | B2    |
| :------------------ | :---- | :---- |
| A1                  | 2     | 6     |
| A2                  | 5     | 1     |
| A3                  | 0     | -2    |

**Answer:**
*   Player B's optimal strategy: Play B1 with probability $5/7$, B2 with probability $2/7$.
*   Value of the game: $26/7$.

---

### Important Points to Remember:

*   The graphical method is applicable only when one player has exactly two strategies (2 x n or m x 2 games).
*   For 2 x n games, Player A (row player) seeks to maximize their minimum payoff by finding the highest point on the lower envelope of their expected payoff lines.
*   For m x 2 games, Player B (column player) seeks to minimize Player A's maximum payoff by finding the lowest point on the upper envelope of Player A's expected payoff lines.
*   Always check for a saddle point first, as it simplifies the problem to pure strategies.
*   The intersection points of the payoff lines are critical in determining the optimal mixed strategies.
*   The value of the game is the expected payoff to Player A when both players play optimally.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |


### References:

*   **Operations Research-Principles and Applications by Srinivasan, G.** (PHI Pvt. Ltd., Third Edition, 2017) - This book provides a comprehensive introduction to various operations research techniques, including game theory, with clear explanations and examples.
*   **Operations Research by Prem Kumar Gupta & D. S. Hira** (S Chand publication, Third Edition, 2008) - This textbook covers game theory thoroughly, including graphical solutions for rectangular games, with a good number of solved problems.
*   **Quantitative Techniques in Management by N. D Vohra. Hitesh Arora** (McGraw Hill., Sixth Edition, 2021) - Offers a good balance of theoretical concepts and practical applications, making game theory and its graphical solutions accessible.
*   **Introduction to Operations Research, by F. S. Hillier& G. J. Leiberman** (McGraw Hill, Eleventh Edition) - A classic text in operations research that delves into game theory with rigorous explanations and detailed graphical method illustrations.

---