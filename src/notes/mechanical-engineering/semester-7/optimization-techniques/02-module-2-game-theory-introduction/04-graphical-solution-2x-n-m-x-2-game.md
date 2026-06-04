---
title: "Graphical solution (2x n, m x 2 game)"
subject: "OPTIMIZATION TECHNIQUES"
module: "Module 2: Game Theory: Introduction"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf48044641cd"
status: "completed"
scrapedAt: "2026-05-20T18:15:57.277Z"
---
# Optimization Techniques: Module 2 - Game Theory: Introduction

## Topic: Graphical Solution (2 x n, m x 2 Game)

**Course Outcomes Addressed:**

*   **CO2: Apply different methods of Game Theory, Network Tree and Shortest Path. (Knowledge Level: K3)** - This module directly addresses the application of Game Theory methods.

**Learning Outcomes for this Topic:**

*   Understand the concept of a two-person zero-sum game.
*   Identify saddle points in a payoff matrix.
*   Formulate a 2 x n or m x 2 game as a Linear Programming Problem (LPP).
*   Solve 2 x n and m x 2 games graphically.
*   Interpret the graphical solution in terms of optimal strategies and the value of the game.

---

### 1. Introduction to Game Theory

**Key Concepts & Definitions:**

*   **Game Theory:** A mathematical framework for analyzing strategic interactions between rational decision-makers (players). It's used to model situations where the outcome for one player depends on the actions of other players.
*   **Two-Person Zero-Sum Game:** A game where there are only two players, and the total gain of one player is exactly equal to the total loss of the other player. The sum of payoffs for both players is zero.
*   **Payoff Matrix:** A table that shows the payoffs for each player for every possible combination of strategies. For a two-player game, it typically represents the payoff to Player 1 (Row Player) given Player 1's strategy and Player 2's strategy (Column Player).
*   **Players:** The decision-makers in the game.
*   **Strategies:** The set of possible actions a player can take.
    *   **Pure Strategy:** A player always chooses a specific action.
    *   **Mixed Strategy:** A player chooses actions probabilistically.
*   **Rational Player:** A player who aims to maximize their own payoff (or minimize their loss) and assumes other players are also rational.
*   **Maximin Criterion:** Player 1 (Row Player) seeks to maximize their minimum possible payoff.
*   **Minimax Criterion:** Player 2 (Column Player) seeks to minimize their maximum possible loss (which is equivalent to minimizing Player 1's maximum gain).
*   **Saddle Point (or Equilibrium Point):** An entry in the payoff matrix that is both the minimum in its row and the maximum in its column. If a saddle point exists, the optimal strategies for both players are pure strategies, and the value of the game is the payoff at the saddle point.

**Reference:**
*   **S.S. Rao, Engineering Optimization:** Chapter 15 on "Game Theory" provides a solid introduction to the basic concepts and terminology.
*   **H.A. Taha, Operations Research:** Chapter 14, "Game Theory," covers these fundamentals comprehensively.

---

### 2. Identifying Saddle Points

**Procedure:**

1.  **Find Row Minima:** For each row (Player 1's strategies), find the minimum value.
2.  **Find Maximin Value:** Find the maximum of these row minima. This is Player 1's maximin value.
3.  **Find Column Maxima:** For each column (Player 2's strategies), find the maximum value.
4.  **Find Minimax Value:** Find the minimum of these column maxima. This is Player 2's minimax value.
5.  **Check for Saddle Point:** If the maximin value equals the minimax value, then a saddle point exists. The game has a pure strategy solution. The optimal strategies are the row and column corresponding to this value, and the value of the game is this common value.

**Example:**

Consider the following payoff matrix for Player 1:

|          | Player 2 Strategy C1 | Player 2 Strategy C2 | Player 2 Strategy C3 | Row Minima |
| :------- | :------------------- | :------------------- | :------------------- | :--------- |
| P1 Strat R1 | 3                    | 2                    | 4                    | **2**      |
| P1 Strat R2 | 1                    | 5                    | 0                    | **0**      |
| **Col Maxima** | **3**                | **5**                | **4**                |            |

*   Row Minima: 2, 0. Maximin value = max(2, 0) = 2.
*   Column Maxima: 3, 5, 4. Minimax value = min(3, 5, 4) = 3.

Since Maximin (2) $\neq$ Minimax (3), there is no saddle point. This game requires mixed strategies.

**Important Point to Remember:** If a saddle point exists, the optimal strategy is pure. If no saddle point exists, mixed strategies are required.

---

### 3. Games Requiring Mixed Strategies: The Graphical Method

When a game does not have a saddle point, players must adopt mixed strategies to achieve optimal outcomes. For specific types of games, namely **2 x n** and **m x 2** games, the graphical method provides an intuitive and effective way to find the optimal mixed strategies and the value of the game.

---

### 4. Graphical Solution for a 2 x n Game

**Description:** In a 2 x n game, Player 1 has two strategies (R1, R2), and Player 2 has 'n' strategies (C1, C2, ..., Cn). We assume Player 1 plays a mixed strategy by choosing R1 with probability $p_1$ and R2 with probability $p_2 = (1 - p_1)$, where $0 \le p_1 \le 1$.

**Formulating as an LPP (Conceptual Understanding for Graphical Method):**

While the graphical method doesn't explicitly require writing out the LPP, the underlying principle is to find probabilities that optimize the expected payoff. For Player 1, the goal is to maximize the minimum expected payoff, regardless of Player 2's strategy.

Let $v$ be the value of the game. Player 1 wants to maximize $v$.
The expected payoff for Player 1, if Player 2 plays strategy $j$, is:
$E_j = p_1 \times A_{1j} + p_2 \times A_{2j}$
where $A_{ij}$ is the payoff to Player 1 when Player 1 plays strategy $i$ and Player 2 plays strategy $j$.

Player 1 wants to ensure that their expected payoff is at least $v$, no matter what Player 2 chooses:
$p_1 A_{11} + (1-p_1) A_{21} \ge v$
$p_1 A_{12} + (1-p_1) A_{22} \ge v$
...
$p_1 A_{1n} + (1-p_1) A_{2n} \ge v$
And $p_1 + (1-p_1) = 1$, with $0 \le p_1 \le 1$.

To make this easier to solve graphically, we can transform it. Assume $v > 0$. If $v \le 0$, we can add a positive constant to all payoffs to make them positive, solve the modified game, and then subtract the constant to get the original game's value. Let $x_1 = p_1/v$ and $x_2 = p_2/v = (1-p_1)/v$. Then $x_1 + x_2 = 1/v$. Maximizing $v$ is equivalent to minimizing $1/v = x_1 + x_2$.
The inequalities become:
$A_{11}x_1 + A_{21}x_2 \ge 1$
$A_{12}x_1 + A_{22}x_2 \ge 1$
...
$A_{1n}x_1 + A_{2n}x_2 \ge 1$
Minimize $x_1 + x_2$ subject to these constraints and $x_1, x_2 \ge 0$.

**Graphical Procedure for 2 x n Game (Player 1's Perspective):**

1.  **Assume v > 0:** If any payoff is negative or zero, add a sufficiently large constant to all entries of the payoff matrix so that all payoffs become positive. Let this constant be $k$. Solve the modified game and subtract $k$ from the resulting value of the game.
2.  **Plot the Lines:** For each of Player 2's 'n' strategies, plot a line on a graph. The x-axis represents Player 1's probability $p_1$ (probability of playing R1), and the y-axis represents the expected payoff for Player 1.
    *   The line for Player 2's strategy $j$ is given by the expected payoff equation:
        $E_j(p_1) = p_1 A_{1j} + (1-p_1) A_{2j}$
    *   This equation can be rewritten as:
        $E_j(p_1) = p_1 (A_{1j} - A_{2j}) + A_{2j}$
    *   This is a linear equation in $p_1$. For each strategy $j$, we have two points:
        *   When $p_1 = 0$ (Player 1 plays R2 with probability 1), $E_j(0) = A_{2j}$ (the payoff if Player 2 plays $j$ and Player 1 plays R2).
        *   When $p_1 = 1$ (Player 1 plays R1 with probability 1), $E_j(1) = A_{1j}$ (the payoff if Player 2 plays $j$ and Player 1 plays R1).
    *   Plot these 'n' lines on a graph with $p_1$ on the x-axis (0 to 1) and expected payoff on the y-axis.

3.  **Identify the Lower Envelope:** Player 1 wants to maximize their minimum expected payoff. This means Player 1 will look at the *lower envelope* of these 'n' lines. The lower envelope is the set of points on the lines that form the lowest boundary of the region enclosed by all lines.

4.  **Find the Optimal Mixed Strategy:** The optimal mixed strategy for Player 1 corresponds to the highest point on the lower envelope. This point will be the intersection of two of Player 2's strategy lines. Find the intersection point of these two lines. The $p_1$ coordinate of this intersection point is Player 1's optimal probability for playing R1. The $p_2$ coordinate will be $(1-p_1)$.

5.  **Determine the Value of the Game:** The y-coordinate of this highest point on the lower envelope is the value of the game ($v$) for the modified game. If a constant $k$ was added, subtract $k$ from this value to get the value of the original game.

6.  **Player 2's Optimal Strategy:** Player 2's optimal strategy involves playing only those strategies that define the optimal point for Player 1 (the two lines that intersect at the highest point on the lower envelope). Player 2 should assign zero probability to all other strategies.

**Example (2 x 3 Game):**

Consider the payoff matrix:
|          | C1 | C2 | C3 |
| :------- | :- | :- | :- |
| R1       | 2  | 0  | 1  |
| R2       | 1  | 3  | 2  |

**Step 1: Check for Saddle Point.**
Row Minima: 0, 1. Maximin = 1.
Column Maxima: 2, 3, 2. Minimax = 2.
No saddle point (1 $\neq$ 2). All payoffs are positive.

**Step 2: Plot the Lines.**
We plot the expected payoff $E_j(p_1)$ for each of Player 2's strategies as a function of $p_1$ (probability of Player 1 playing R1).

*   **For C1:** $E_1(p_1) = p_1(2) + (1-p_1)(1) = 2p_1 + 1 - p_1 = p_1 + 1$.
    *   At $p_1=0$, $E_1(0) = 1$.
    *   At $p_1=1$, $E_1(1) = 2$.
*   **For C2:** $E_2(p_1) = p_1(0) + (1-p_1)(3) = 0p_1 + 3 - 3p_1 = 3 - 3p_1$.
    *   At $p_1=0$, $E_2(0) = 3$.
    *   At $p_1=1$, $E_2(1) = 0$.
*   **For C3:** $E_3(p_1) = p_1(1) + (1-p_1)(2) = p_1 + 2 - 2p_1 = 2 - p_1$.
    *   At $p_1=0$, $E_3(0) = 2$.
    *   At $p_1=1$, $E_3(1) = 1$.

**Step 3: Identify the Lower Envelope.**
Plot these three lines on a graph with $p_1$ on the x-axis (0 to 1) and expected payoff on the y-axis.
The lines are:
L1: $y = p_1 + 1$
L2: $y = 3 - 3p_1$
L3: $y = 2 - p_1$

Player 1 wants to maximize the minimum payoff, so we are interested in the upper boundary of the region *below* all these lines. However, the interpretation of the graph is finding the *highest* point on the *lowest* envelope formed by these lines. Think of it as Player 1 trying to keep their payoff as high as possible, but it's constrained by Player 2 choosing the strategy that yields the minimum payoff for Player 1 at any given $p_1$. So, Player 1 wants to find the $p_1$ that maximizes the minimum of $E_1(p_1)$, $E_2(p_1)$, and $E_3(p_1)$. This is the highest point on the *lower envelope* of these lines.

Let's examine intersections:
*   L1 and L2: $p_1 + 1 = 3 - 3p_1 \implies 4p_1 = 2 \implies p_1 = 0.5$. $y = 0.5 + 1 = 1.5$. Point (0.5, 1.5).
*   L1 and L3: $p_1 + 1 = 2 - p_1 \implies 2p_1 = 1 \implies p_1 = 0.5$. $y = 0.5 + 1 = 1.5$. Point (0.5, 1.5).
*   L2 and L3: $3 - 3p_1 = 2 - p_1 \implies 1 = 2p_1 \implies p_1 = 0.5$. $y = 2 - 0.5 = 1.5$. Point (0.5, 1.5).

In this specific case, all three lines intersect at the same point (0.5, 1.5).
The lower envelope is formed by segments of these lines.
For $0 \le p_1 \le 0.5$, the lower envelope is defined by L1 ($y = p_1 + 1$).
For $0.5 \le p_1 \le 1$, the lower envelope is defined by L3 ($y = 2 - p_1$).
The maximum value on this lower envelope occurs at $p_1 = 0.5$, where the value is 1.5.

**Step 4: Optimal Mixed Strategy for Player 1.**
The highest point on the lower envelope is at $p_1 = 0.5$.
So, Player 1's optimal strategy is to play R1 with probability $p_1 = 0.5$ and R2 with probability $p_2 = 1 - 0.5 = 0.5$.

**Step 5: Value of the Game.**
The y-coordinate of this point is 1.5.
The value of the game is $v = 1.5$.

**Step 6: Player 2's Optimal Strategy.**
The optimal point is the intersection of L1 and L3. This means Player 2 should only use strategies C1 and C3. Player 2 should assign zero probability to strategy C2. To find Player 2's probabilities for C1 and C3, we can use the equations of the intersecting lines at the optimal point $(p_1, v)$:

$p_1 A_{11} + (1-p_1) A_{21} = v \implies 0.5(2) + 0.5(1) = 1.5 + 0.5 = 2.5 \neq 1.5$ (Something is wrong in this interpretation for P2)

Let's re-evaluate Player 2's strategy using the LPP formulation conceptually. Player 2 wants to minimize the maximum expected payoff to Player 1.
Let $q_1, q_2, q_3$ be the probabilities Player 2 uses for C1, C2, C3, respectively, with $q_1+q_2+q_3=1$.
Player 1's expected payoff for R1 is $E_{R1} = 2q_1 + 0q_2 + 1q_3 = 2q_1 + q_3$.
Player 1's expected payoff for R2 is $E_{R2} = 1q_1 + 3q_2 + 2q_3 = q_1 + 3q_2 + 2q_3$.

Player 2 wants to minimize $\max(E_{R1}, E_{R2})$.
When Player 1 uses the optimal mixed strategy $(p_1, p_2) = (0.5, 0.5)$, the expected payoff against Player 2's pure strategy $j$ is:
$E_j = 0.5 A_{1j} + 0.5 A_{2j}$
$E_1 = 0.5(2) + 0.5(1) = 1.5$
$E_2 = 0.5(0) + 0.5(3) = 1.5$
$E_3 = 0.5(1) + 0.5(2) = 1.5$

This implies that if Player 1 plays (0.5, 0.5), Player 2 can play any mixed strategy against C1, C2, C3 and get an expected payoff of 1.5. However, Player 2's optimal strategy should be to only use the strategies that yield this same expected payoff when Player 1 plays optimally. In the graphical method, the optimal strategy for Player 2 corresponds to the strategies whose lines intersect at the optimal point for Player 1.

In this example, all lines intersect at $p_1=0.5$, and the optimal value is 1.5. This implies that Player 2 can use any combination of C1, C2, and C3 with probabilities summing to 1, and the value of the game will remain 1.5, provided Player 1 plays (0.5, 0.5). This is a degenerate case. Usually, Player 2 uses only the strategies that defined the intersecting lines. If we consider the intersection point calculation more carefully:
The intersection of $p_1+1$ (C1) and $2-p_1$ (C3) occurs at $p_1=0.5$. At this point, $E_1 = 1.5$ and $E_3 = 1.5$.
The intersection of $3-3p_1$ (C2) and $2-p_1$ (C3) occurs at $p_1=0.5$. At this point, $E_2=1.5$ and $E_3=1.5$.
The intersection of $p_1+1$ (C1) and $3-3p_1$ (C2) occurs at $p_1=0.5$. At this point, $E_1=1.5$ and $E_2=1.5$.

The optimal mixed strategy for Player 2 should be derived from the LP formulation, but the graphical method implies that Player 2 should use strategies C1 and C3 because their lines determine the optimal point along with C2 (all lines meeting at one point). A common convention is to use the strategies that define the highest point on the lower envelope.

Let's consider the LP form again for Player 2:
Minimize $W$
Subject to:
$2q_1 + 0q_2 + 1q_3 \le W$
$1q_1 + 3q_2 + 2q_3 \le W$
$q_1 + q_2 + q_3 = 1$
$q_1, q_2, q_3 \ge 0$

If we use the intersection point of C1 and C3 ($p_1=0.5$) to define Player 2's strategy, Player 2 should only use C1 and C3.
Let $q_1$ be probability for C1, $q_3$ for C3. $q_1+q_3 = 1$.
Player 1's expected payoffs are:
$E_{R1} = 2q_1 + 1q_3$
$E_{R2} = 1q_1 + 2q_3$
Player 2 wants to minimize $\max(E_{R1}, E_{R2})$.
Set $E_{R1} = E_{R2}$ to find optimal $q_1, q_3$:
$2q_1 + q_3 = q_1 + 2q_3$
$q_1 = q_3$
Since $q_1 + q_3 = 1$, we get $q_1 = 0.5, q_3 = 0.5$.
So, Player 2 plays C1 with probability 0.5 and C3 with probability 0.5. C2 is played with probability 0.

**Summary of Solution:**
*   Player 1 Optimal Strategy: R1 with probability 0.5, R2 with probability 0.5.
*   Player 2 Optimal Strategy: C1 with probability 0.5, C3 with probability 0.5. (C2 with probability 0).
*   Value of the Game: 1.5.

---

### 5. Graphical Solution for an m x 2 Game

**Description:** In an m x 2 game, Player 1 has 'm' strategies (R1, R2, ..., Rm), and Player 2 has two strategies (C1, C2). We assume Player 2 plays a mixed strategy by choosing C1 with probability $q_1$ and C2 with probability $q_2 = (1 - q_1)$, where $0 \le q_1 \le 1$.

**Formulating as an LPP (Conceptual Understanding for Graphical Method):**

Player 2 wants to minimize the maximum expected payoff to Player 1.
Let $v$ be the value of the game. Player 2 wants to minimize $v$.
The expected payoff for Player 1, if Player 1 plays strategy $i$, is:
$E_i = q_1 \times A_{i1} + q_2 \times A_{i2}$
where $A_{ij}$ is the payoff to Player 1.

Player 2 wants to ensure that Player 1's expected payoff is at most $v$, no matter what Player 1 chooses:
$q_1 A_{11} + (1-q_1) A_{12} \le v$
$q_1 A_{21} + (1-q_1) A_{22} \le v$
...
$q_1 A_{m1} + (1-q_1) A_{m2} \le v$
And $q_1 + (1-q_1) = 1$, with $0 \le q_1 \le 1$.

To make this easier to solve graphically, we can transform it. Assume $v > 0$. Add a constant $k$ to make all payoffs positive. Let $y_1 = q_1/v$ and $y_2 = q_2/v = (1-q_1)/v$. Then $y_1 + y_2 = 1/v$. Minimizing $v$ is equivalent to maximizing $1/v = y_1 + y_2$.
The inequalities become:
$A_{11}y_1 + A_{12}y_2 \le 1$
$A_{21}y_1 + A_{22}y_2 \le 1$
...
$A_{m1}y_1 + A_{m2}y_2 \le 1$
Maximize $y_1 + y_2$ subject to these constraints and $y_1, y_2 \ge 0$.

**Graphical Procedure for m x 2 Game (Player 2's Perspective):**

1.  **Assume v > 0:** If any payoff is negative or zero, add a sufficiently large constant to all entries of the payoff matrix so that all payoffs become positive. Let this constant be $k$. Solve the modified game and subtract $k$ from the resulting value of the game.
2.  **Plot the Lines:** For each of Player 1's 'm' strategies, plot a line on a graph. The x-axis represents Player 2's probability $q_1$ (probability of playing C1), and the y-axis represents the expected payoff for Player 1.
    *   The line for Player 1's strategy $i$ is given by the expected payoff equation:
        $E_i(q_1) = q_1 A_{i1} + (1-q_1) A_{i2}$
    *   This equation can be rewritten as:
        $E_i(q_1) = q_1 (A_{i1} - A_{i2}) + A_{i2}$
    *   This is a linear equation in $q_1$. For each strategy $i$, we have two points:
        *   When $q_1 = 0$ (Player 2 plays C2 with probability 1), $E_i(0) = A_{i2}$ (the payoff if Player 1 plays $i$ and Player 2 plays C2).
        *   When $q_1 = 1$ (Player 2 plays C1 with probability 1), $E_i(1) = A_{i1}$ (the payoff if Player 1 plays $i$ and Player 2 plays C1).
    *   Plot these 'm' lines on a graph with $q_1$ on the x-axis (0 to 1) and expected payoff on the y-axis.

3.  **Identify the Upper Envelope:** Player 2 wants to minimize the maximum expected payoff. This means Player 2 will look at the *upper envelope* of these 'm' lines. The upper envelope is the set of points on the lines that form the highest boundary of the region enclosed by all lines.

4.  **Find the Optimal Mixed Strategy:** The optimal mixed strategy for Player 2 corresponds to the lowest point on the upper envelope. This point will be the intersection of two of Player 1's strategy lines. Find the intersection point of these two lines. The $q_1$ coordinate of this intersection point is Player 2's optimal probability for playing C1. The $q_2$ coordinate will be $(1-q_1)$.

5.  **Determine the Value of the Game:** The y-coordinate of this lowest point on the upper envelope is the value of the game ($v$) for the modified game. If a constant $k$ was added, subtract $k$ from this value to get the value of the original game.

6.  **Player 1's Optimal Strategy:** Player 1's optimal strategy involves playing only those strategies that define the optimal point for Player 2 (the two lines that intersect at the lowest point on the upper envelope). Player 1 should assign zero probability to all other strategies.

**Example (3 x 2 Game):**

Consider the payoff matrix:
|          | C1 | C2 |
| :------- | :- | :- |
| R1       | 3  | 1  |
| R2       | 0  | 4  |
| R3       | 2  | 2  |

**Step 1: Check for Saddle Point.**
Row Minima: 1, 0, 2. Maximin = 2.
Column Maxima: 3, 4. Minimax = 3.
No saddle point (2 $\neq$ 3). All payoffs are positive.

**Step 2: Plot the Lines.**
We plot the expected payoff $E_i(q_1)$ for each of Player 1's strategies as a function of $q_1$ (probability of Player 2 playing C1).

*   **For R1:** $E_1(q_1) = q_1(3) + (1-q_1)(1) = 3q_1 + 1 - q_1 = 2q_1 + 1$.
    *   At $q_1=0$, $E_1(0) = 1$.
    *   At $q_1=1$, $E_1(1) = 3$.
*   **For R2:** $E_2(q_1) = q_1(0) + (1-q_1)(4) = 0q_1 + 4 - 4q_1 = 4 - 4q_1$.
    *   At $q_1=0$, $E_2(0) = 4$.
    *   At $q_1=1$, $E_2(1) = 0$.
*   **For R3:** $E_3(q_1) = q_1(2) + (1-q_1)(2) = 2q_1 + 2 - 2q_1 = 2$.
    *   At $q_1=0$, $E_3(0) = 2$.
    *   At $q_1=1$, $E_3(1) = 2$.

**Step 3: Identify the Upper Envelope.**
Plot these three lines on a graph with $q_1$ on the x-axis (0 to 1) and expected payoff on the y-axis.
The lines are:
L1: $y = 2q_1 + 1$
L2: $y = 4 - 4q_1$
L3: $y = 2$ (a horizontal line)

Player 2 wants to minimize the maximum payoff. So we are interested in the *upper envelope* of these lines.
Let's examine intersections:
*   L1 and L2: $2q_1 + 1 = 4 - 4q_1 \implies 6q_1 = 3 \implies q_1 = 0.5$. $y = 2(0.5) + 1 = 2$. Point (0.5, 2).
*   L1 and L3: $2q_1 + 1 = 2 \implies 2q_1 = 1 \implies q_1 = 0.5$. $y = 2$. Point (0.5, 2).
*   L2 and L3: $4 - 4q_1 = 2 \implies 2 = 4q_1 \implies q_1 = 0.5$. $y = 2$. Point (0.5, 2).

Again, all three lines intersect at the same point (0.5, 2).
The upper envelope consists of parts of these lines.
For $0 \le q_1 \le 0.5$, the upper envelope is defined by L2 ($y = 4 - 4q_1$) because $4-4q_1$ is higher than $2q_1+1$ and 2.
For $0.5 \le q_1 \le 1$, the upper envelope is defined by L1 ($y = 2q_1 + 1$) because $2q_1+1$ is higher than $4-4q_1$ and 2.
The minimum value on this upper envelope occurs at $q_1 = 0.5$, where the value is 2.

**Step 4: Optimal Mixed Strategy for Player 2.**
The lowest point on the upper envelope is at $q_1 = 0.5$.
So, Player 2's optimal strategy is to play C1 with probability $q_1 = 0.5$ and C2 with probability $q_2 = 1 - 0.5 = 0.5$.

**Step 5: Value of the Game.**
The y-coordinate of this point is 2.
The value of the game is $v = 2$.

**Step 6: Player 1's Optimal Strategy.**
The optimal point is the intersection of L1 and L3. This suggests Player 1 should use strategies R1 and R3.
Using the LP formulation conceptually, Player 1 wants to find probabilities $p_1, p_2, p_3$ such that they achieve the game value against Player 2's optimal strategy.
With Player 2 playing C1 with 0.5 and C2 with 0.5:
$E_{R1} = 0.5(3) + 0.5(1) = 1.5 + 0.5 = 2$.
$E_{R2} = 0.5(0) + 0.5(4) = 0 + 2 = 2$.
$E_{R3} = 0.5(2) + 0.5(2) = 1 + 1 = 2$.

This means if Player 2 plays (0.5, 0.5), Player 1 gets an expected payoff of 2 regardless of their pure strategy. In this specific case, Player 1 can play any mixed strategy (any probabilities for R1, R2, R3 that sum to 1) and achieve the value of the game.

However, the graphical method implies Player 1 should use the strategies that defined the optimal point. The point (0.5, 2) is formed by the intersection of L1 (R1), L2 (R2), and L3 (R3). In this case, all strategies of Player 1 are used to some extent. If the intersection was only between L1 and L3, then Player 1 would only play R1 and R3.

A more rigorous way to find Player 1's optimal strategy when Player 2 plays $(q_1, 1-q_1)$ optimally is to consider the equations of the lines that form the optimal point.
The optimal point $(q_1=0.5, v=2)$ is determined by lines R1 ($y=2q_1+1$) and R3 ($y=2$).
So, Player 1 should play R1 and R3. Let Player 1 play R1 with probability $p_1$ and R3 with probability $p_3$, where $p_1 + p_3 = 1$.
Against Player 2's strategy C1: $p_1(3) + p_3(2)$
Against Player 2's strategy C2: $p_1(1) + p_3(2)$
Player 2 wants to minimize $\max(\text{payoff against C1}, \text{payoff against C2})$.
For Player 1 to guarantee the value of the game (2), their expected payoff must be 2 against both of Player 2's pure strategies.
$3p_1 + 2p_3 = 2$
$1p_1 + 2p_3 = 2$

Subtracting the second from the first:
$(3p_1 + 2p_3) - (1p_1 + 2p_3) = 2 - 2$
$2p_1 = 0 \implies p_1 = 0$.
If $p_1 = 0$, then from $1p_1 + 2p_3 = 2$, we get $2p_3 = 2 \implies p_3 = 1$.
So, Player 1 plays R1 with probability 0, R2 with probability 0, and R3 with probability 1.

Let's re-check. Player 1's optimal strategy should make Player 2 indifferent between their strategies or make Player 1's expected payoff equal to the value of the game for every strategy Player 1 uses that is part of their optimal mix.
The optimal point (0.5, 2) is formed by lines R1, R2, and R3. This means all Player 1's strategies are potentially part of the solution.
The expected payoff for Player 1 against Player 2's optimal strategy $(q_1=0.5, q_2=0.5)$ is:
$E_{R1} = 0.5(3) + 0.5(1) = 2$
$E_{R2} = 0.5(0) + 0.5(4) = 2$
$E_{R3} = 0.5(2) + 0.5(2) = 2$
Since Player 1 gets the value of the game (2) regardless of which pure strategy they choose, *any* mixed strategy for Player 1 is optimal against Player 2's optimal strategy. However, conventionally, we identify the strategies that contribute to the optimal point calculation. The point (0.5, 2) lies on all three lines, indicating that any combination of Player 1's strategies can yield the game value when Player 2 plays optimally.

**Summary of Solution:**
*   Player 1 Optimal Strategy: Any mixed strategy (e.g., R3 with probability 1, or any combination of R1, R2, R3 summing to 1). A common choice if all lines intersect at one point is to use all strategies. For instance, R1: 1/3, R2: 1/3, R3: 1/3. However, the precise strategy is to make Player 2 indifferent, which we showed happens for any strategy for P1. The simplest optimal strategy for P1 is playing R3 with probability 1.
*   Player 2 Optimal Strategy: C1 with probability 0.5, C2 with probability 0.5.
*   Value of the Game: 2.

**Important Note on Player 1's Strategy in m x 2 Games:** When the optimal point for Player 2 is formed by the intersection of multiple lines of Player 1, Player 1 can use any combination of those strategies. However, to satisfy the condition that the payoff is equal to the value of the game for *each* of Player 1's strategies that are part of the optimal mix, we often solve a system of equations as demonstrated above to find the specific probabilities. In the example above, the derivation leads to Player 1 playing R3 with probability 1 as one optimal strategy.

---

### 6. Handling Dominance

**Dominance:** A strategy is dominated if there is another strategy that yields a better or equal payoff against all of the opponent's strategies.

*   **Row Dominance:** Row $i$ is dominated by row $k$ if $A_{ij} \le A_{kj}$ for all $j$, and $A_{ij} < A_{kj}$ for at least one $j$. The dominated row can be removed. (Player 1 wants to maximize, so a lower row is dominated by a higher row).
*   **Column Dominance:** Column $j$ is dominated by column $l$ if $A_{ij} \ge A_{il}$ for all $i$, and $A_{ij} > A_{il}$ for at least one $i$. The dominated column can be removed. (Player 2 wants to minimize Player 1's payoff, so a column with higher values is dominated by a column with lower values).

**Procedure:** Before applying the graphical method, check for and remove any dominated strategies. This can simplify the game to a 2 x n or m x 2 game, or even a 2 x 2 game which can be solved algebraically.

**Example:**
Consider the game:
|          | C1 | C2 | C3 |
| :------- | :- | :- | :- |
| R1       | 4  | 5  | 2  |
| R2       | 3  | 6  | 3  |
| R3       | 2  | 4  | 1  |

*   Row Dominance:
    *   Compare R1 and R2: R1 is not dominated by R2 (4<3 is false). R2 is not dominated by R1 (5<6 is false).
    *   Compare R1 and R3: R1 is not dominated by R3 (4<2 is false). R3 is dominated by R1 (2<4, 4<5, 1<2). Row R3 can be removed.
    *   Compare R2 and R3: R3 is dominated by R2 (2<3, 4<6, 1<3). Row R3 can be removed.

After removing R3, the game becomes:
|          | C1 | C2 | C3 |
| :------- | :- | :- | :- |
| R1       | 4  | 5  | 2  |
| R2       | 3  | 6  | 3  |

*   Column Dominance:
    *   Compare C1 and C2: C1 is not dominated by C2 (4<5, 3<6). C2 is not dominated by C1 (5<4 is false).
    *   Compare C1 and C3: C3 is dominated by C1 (2<4, 3<3 is false). C1 is not dominated by C3 (4<2 is false).
    *   Compare C2 and C3: C3 is dominated by C2 (2<5, 3<6). Column C3 can be removed.

After removing C3, the game becomes:
|          | C1 | C2 |
| :------- | :- | :- |
| R1       | 4  | 5  |
| R2       | 3  | 6  |

This is now a 2x2 game which can be solved algebraically or graphically.
Check for saddle point:
Row Minima: 4, 3. Maximin = 4.
Column Maxima: 4, 6. Minimax = 4.
Saddle point exists at (R1, C1) with value 4.

**Reference:**
*   **S.S. Rao, Engineering Optimization:** Discusses dominance reduction in Chapter 15.
*   **H.A. Taha, Operations Research:** Chapter 14 also covers dominance reduction.

---

### 7. Practice Questions

**Question 1:**
Solve the following game by graphical method:
|          | C1 | C2 | C3 | C4 |
| :------- | :- | :- | :- | :- |
| R1       | 2  | 1  | 3  | 0  |
| R2       | 1  | 0  | 2  | 3  |

**Answer:**
1.  **Saddle Point Check:**
    *   Row Minima: 0, 0. Maximin = 0.
    *   Column Maxima: 2, 1, 3, 3. Minimax = 1.
    *   No saddle point.
2.  **Graphical Method (2x4 Game - Player 1's perspective):**
    *   Lines:
        *   L1 (C1): $E_1(p_1) = p_1(2) + (1-p_1)(1) = p_1 + 1$. Points: (0,1), (1,2).
        *   L2 (C2): $E_2(p_1) = p_1(1) + (1-p_1)(0) = p_1$. Points: (0,0), (1,1).
        *   L3 (C3): $E_3(p_1) = p_1(3) + (1-p_1)(2) = p_1 + 2$. Points: (0,2), (1,3).
        *   L4 (C4): $E_4(p_1) = p_1(0) + (1-p_1)(3) = 3 - 3p_1$. Points: (0,3), (1,0).
3.  **Lower Envelope and Optimal Point:**
    *   Plotting these lines, the lower envelope is formed by segments of L2, L1, and L4.
    *   Intersections:
        *   L2 and L1: $p_1 = p_1 + 1$ (no intersection, parallel). Wait, L2 is $p_1$, L1 is $p_1+1$. L2 is always below L1.
        *   L2 ($p_1$) and L4 ($3-3p_1$): $p_1 = 3-3p_1 \implies 4p_1 = 3 \implies p_1 = 0.75$. $y = 0.75$. Point (0.75, 0.75).
        *   L1 ($p_1+1$) and L4 ($3-3p_1$): $p_1+1 = 3-3p_1 \implies 4p_1 = 2 \implies p_1 = 0.5$. $y = 0.5+1 = 1.5$. Point (0.5, 1.5).
    *   The lower envelope is formed by L2 (for $0 \le p_1 \le 0.75$), then L1 (for $0.75 \le p_1 \le 1$). Wait, let's check intersections with all lines.
    *   Plotting:
        *   L1: (0,1) to (1,2)
        *   L2: (0,0) to (1,1)
        *   L3: (0,2) to (1,3)
        *   L4: (0,3) to (1,0)
    *   Lower envelope: L2 from $p_1=0$ to $p_1=0.75$ (intersects L4), then L1 from $p_1=0.75$ to $p_1=1$. Ah, L1 is above L2 for $p_1 > 0$. L3 is always highest. L4 starts high and goes low.
    *   Let's re-evaluate lower envelope:
        *   Segments are: L2 (0 to 0.75), L1 (0.75 to ???).
        *   Consider intersections:
            *   L2 and L4: $p_1 = 3-3p_1 \implies p_1=0.75$, value=0.75. (0.75, 0.75)
            *   L2 and L1: Not relevant as L1 is above L2.
            *   L1 and L4: $p_1+1 = 3-3p_1 \implies p_1=0.5$, value=1.5. (0.5, 1.5)
            *   L3 and L4: $p_1+2 = 3-3p_1 \implies p_1=0.25$, value=2.75. (0.25, 2.75)
            *   L3 and L1: $p_1+2 = p_1+1$ (no int)
            *   L3 and L2: $p_1+2 = p_1$ (no int)
    *   The lowest boundary (lower envelope) is formed by: L2 (from $p_1=0$ to $p_1=0.75$), then L1 (from $p_1=0.75$ to $p_1=1$). Wait, L1 intersects L4 at 0.5, value 1.5. L4 intersects L2 at 0.75, value 0.75. L3 is generally higher.
    *   The lower envelope is formed by: L2 (0 to 0.75), then L1 (0.75 to ??). L1 is higher than L2 for $p_1 > 0$.
    *   Let's correctly define the lowest boundary.
        *   $E_1 = p_1 + 1$
        *   $E_2 = p_1$
        *   $E_3 = p_1 + 2$
        *   $E_4 = 3 - 3p_1$
    *   Player 1 wants to maximize $\min(p_1+1, p_1, p_1+2, 3-3p_1)$.
    *   The minimum is $\min(p_1, 3-3p_1)$.
    *   We need to find the maximum of $\min(p_1, 3-3p_1)$. This occurs when $p_1 = 3-3p_1 \implies 4p_1 = 3 \implies p_1 = 0.75$.
    *   At $p_1=0.75$, the value is $0.75$.
4.  **Player 1's Optimal Strategy:** $p_1 = 0.75$, $p_2 = 1 - 0.75 = 0.25$. Player 1 plays R1 with probability 0.75 and R2 with probability 0.25.
5.  **Value of the Game:** $v = 0.75$.
6.  **Player 2's Optimal Strategy:** The optimal point is determined by the intersection of L2 (C2) and L4 (C4). So, Player 2 uses only strategies C2 and C4. Let Player 2 play C2 with probability $q_2$ and C4 with probability $q_4$, where $q_2+q_4=1$.
    *   Player 1's expected payoff for R1 against Player 2's strategy: $E_{R1} = q_2(1) + q_4(0) = q_2$.
    *   Player 1's expected payoff for R2 against Player 2's strategy: $E_{R2} = q_2(0) + q_4(3) = 3q_4$.
    *   For the value of the game to be 0.75, these must equal 0.75.
        *   $q_2 = 0.75$.
        *   $3q_4 = 0.75 \implies q_4 = 0.25$.
    *   Check: $q_2 + q_4 = 0.75 + 0.25 = 1$. This is consistent.
    *   Player 2 plays C2 with probability 0.75 and C4 with probability 0.25. C1 and C3 are not used.

**Final Answer for Q1:**
*   Player 1 Optimal Strategy: R1 with probability 0.75, R2 with probability 0.25.
*   Player 2 Optimal Strategy: C2 with probability 0.75, C4 with probability 0.25.
*   Value of the Game: 0.75.

---

**Question 2:**
Solve the following game by graphical method:
|          | C1 | C2 |
| :------- | :- | :- |
| R1       | 5  | 1  |
| R2       | 3  | 4  |
| R3       | 2  | 6  |

**Answer:**
1.  **Saddle Point Check:**
    *   Row Minima: 1, 3, 2. Maximin = 3.
    *   Column Maxima: 5, 6. Minimax = 5.
    *   No saddle point.
2.  **Graphical Method (3x2 Game - Player 2's perspective):**
    *   Lines:
        *   L1 (R1): $E_1(q_1) = q_1(5) + (1-q_1)(1) = 4q_1 + 1$. Points: (0,1), (1,5).
        *   L2 (R2): $E_2(q_1) = q_1(3) + (1-q_1)(4) = -q_1 + 4$. Points: (0,4), (1,3).
        *   L3 (R3): $E_3(q_1) = q_1(2) + (1-q_1)(6) = -4q_1 + 6$. Points: (0,6), (1,2).
3.  **Upper Envelope and Optimal Point:**
    *   Plotting these lines, the upper envelope is formed by segments of L1, L2, and L3. Player 2 wants the minimum point on this upper envelope.
    *   Intersections:
        *   L1 and L2: $4q_1 + 1 = -q_1 + 4 \implies 5q_1 = 3 \implies q_1 = 0.6$. $y = 4(0.6) + 1 = 2.4 + 1 = 3.4$. Point (0.6, 3.4).
        *   L1 and L3: $4q_1 + 1 = -4q_1 + 6 \implies 8q_1 = 5 \implies q_1 = 0.625$. $y = 4(0.625) + 1 = 2.5 + 1 = 3.5$. Point (0.625, 3.5).
        *   L2 and L3: $-q_1 + 4 = -4q_1 + 6 \implies 3q_1 = 2 \implies q_1 = 2/3 \approx 0.667$. $y = -(2/3) + 4 = 10/3 \approx 3.33$. Point (0.667, 3.33).
    *   Comparing intersection points: (0.6, 3.4), (0.625, 3.5), (0.667, 3.33).
    *   The upper envelope is formed by L1 (0 to 0.6), L2 (0.6 to 0.667), L3 (0.667 to 1).
    *   The lowest point on the upper envelope occurs at the intersection of L2 and L3, which is $q_1 = 2/3$, and the value is $10/3$.
4.  **Player 2's Optimal Strategy:** $q_1 = 2/3$. So, Player 2 plays C1 with probability $2/3$ and C2 with probability $1 - 2/3 = 1/3$.
5.  **Value of the Game:** $v = 10/3$.
6.  **Player 1's Optimal Strategy:** The optimal point is determined by the intersection of L2 (R2) and L3 (R3). So, Player 1 uses only strategies R2 and R3. Let Player 1 play R2 with probability $p_2$ and R3 with probability $p_3$, where $p_2+p_3=1$.
    *   Against Player 2's strategy (C1 with 2/3, C2 with 1/3):
        *   Expected payoff for R2: $E_{R2} = (2/3)(3) + (1/3)(4) = 2 + 4/3 = 10/3$.
        *   Expected payoff for R3: $E_{R3} = (2/3)(2) + (1/3)(6) = 4/3 + 2 = 10/3$.
    *   Since both expected payoffs are equal to the value of the game, any combination of $p_2$ and $p_3$ summing to 1 would be optimal. A simpler strategy would be to pick one, e.g., R2 with probability 1.

**Final Answer for Q2:**
*   Player 1 Optimal Strategy: Any mixed strategy using R2 and R3. For instance, R2 with probability 1, or R3 with probability 1, or R2 with probability 0.5 and R3 with probability 0.5.
*   Player 2 Optimal Strategy: C1 with probability 2/3, C2 with probability 1/3.
*   Value of the Game: 10/3.

---

### 8. Important Points to Remember

*   The graphical method is applicable only for **2 x n** and **m x 2** games.
*   Always check for a **saddle point** first. If it exists, the solution is a pure strategy.
*   If payoffs are negative or zero, add a sufficiently large constant to make all payoffs **positive**. Remember to subtract this constant from the final value of the game.
*   For a **2 x n game**, Player 1 plots lines of expected payoff against $p_1$ (probability of playing R1) and finds the **highest point on the lower envelope**.
*   For an **m x 2 game**, Player 2 plots lines of expected payoff against $q_1$ (probability of playing C1) and finds the **lowest point on the upper envelope**.
*   The optimal strategies for the player with more than two choices are to use **only those strategies that define the optimal point** (the intersecting lines that form the optimal vertex).
*   **Dominance reduction** should be performed before applying the graphical method to simplify the game.

---

This concludes the notes on the graphical solution for 2 x n and m x 2 games. This method provides a visual understanding of how mixed strategies are determined in these specific types of games. For games larger than these dimensions, Linear Programming is generally required.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |
