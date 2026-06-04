---
title: "Games without saddle points – 2 x 2 games"
subject: "QUANTITATIVE TECHNIQUES FOR ENGINEERS"
module: "Module 3: Network analysis – Basic terms"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1751d0cf4804463a7b"
status: "completed"
scrapedAt: "2026-05-20T18:07:38.196Z"
---
# QUANTITATIVE TECHNIQUES FOR ENGINEERS

## Module 3: Network Analysis – Basic Terms
## Topic: Games Without Saddle Points – 2x2 Games

**This module delves into the fundamental concepts of Game Theory, focusing on situations where players aim to optimize their outcomes in competitive scenarios.**

---

### Learning Outcomes

Upon successful completion of this topic, you will be able to:

*   Understand the concept of a "game" in the context of quantitative analysis.
*   Identify and define key terms associated with game theory.
*   Recognize the difference between games with and without saddle points.
*   Formulate and solve 2x2 games that do not have a saddle point using algebraic methods.
*   Determine the optimal strategies and the value of the game for both players in a 2x2 game without a saddle point.

---

### Course Outcomes Alignment

This topic directly contributes to:

*   **CO4: To solve Game Theory problems (Knowledge Level: K3)** - This topic focuses on a specific type of game theory problem, enabling students to apply learned principles to find optimal solutions.

---

### 1. Introduction to Game Theory

Game Theory is a mathematical framework for analyzing strategic interactions between rational decision-makers. It is used in various fields, including economics, political science, psychology, and engineering, to model and predict outcomes in situations where the decision of one agent affects the outcomes of others.

**Key Concepts:**

*   **Game:** A situation involving two or more players where each player's outcome depends on the strategies chosen by all players.
*   **Players:** The decision-makers involved in the game.
*   **Strategies:** The set of possible actions a player can take.
*   **Payoff:** The outcome or reward a player receives for a particular combination of strategies chosen by all players.
*   **Zero-Sum Game:** A game where the total payoff to all players sums to zero. One player's gain is exactly another player's loss. Many introductory game theory problems, especially in engineering applications, focus on zero-sum games.
*   **Non-Zero-Sum Game:** A game where the total payoff to all players does not sum to zero. Players may have opportunities for mutual gain or loss.
*   **Rational Player:** A player who always chooses the strategy that maximizes their own payoff, given their beliefs about the other players' strategies.

---

### 2. The Payoff Matrix

In a two-player zero-sum game, the outcomes can be represented using a payoff matrix. The matrix shows the payoffs to one player (typically the row player) for each combination of strategies chosen by the two players. The payoffs to the other player (the column player) are the negative of these values.

**Structure of a 2x2 Payoff Matrix:**

Let Player 1 (Row Player) have strategies $R_1$ and $R_2$.
Let Player 2 (Column Player) have strategies $C_1$ and $C_2$.

The payoff matrix for Player 1 is typically represented as:

|             | Player 2: $C_1$ | Player 2: $C_2$ |
| :---------- | :-------------: | :-------------: |
| Player 1: $R_1$ |     $a_{11}$    |     $a_{12}$    |
| Player 1: $R_2$ |     $a_{21}$    |     $a_{22}$    |

Where $a_{ij}$ represents the payoff to Player 1 when Player 1 chooses strategy $i$ and Player 2 chooses strategy $j$.

**Example:**
Consider a simple advertising game where two companies, A and B, are deciding whether to advertise (A) or not advertise (N). The payoffs represent market share.

|             | Company B: A | Company B: N |
| :---------- | :----------: | :----------: |
| Company A: A |      5       |      2       |
| Company A: N |      3       |      1       |

Here, $a_{11}=5$, $a_{12}=2$, $a_{21}=3$, $a_{22}=1$. If Company A advertises and Company B does not, Company A gets 5 units of market share, and Company B gets -5.

---

### 3. Saddle Point

A **saddle point** in a payoff matrix is an element that is simultaneously the minimum value in its row and the maximum value in its column. If a game has a saddle point, it means there is a pair of pure strategies (one for each player) that is stable, and neither player has an incentive to unilaterally deviate from their chosen strategy. This represents an equilibrium solution.

**How to find a Saddle Point:**

1.  **Row Minima:** For each row, find the minimum payoff.
2.  **Column Maxima:** For each column, find the maximum payoff.
3.  **Maximin:** Find the maximum of the row minima. This is the best Player 1 can guarantee for themselves.
4.  **Minimax:** Find the minimum of the column maxima. This is the best Player 2 can guarantee for themselves (from Player 1's perspective, i.e., the minimum loss).

**A saddle point exists if and only if Maximin = Minimax.**

*   If a saddle point exists, the optimal strategy for both players is to play the pure strategy corresponding to the saddle point.
*   The **value of the game** is the payoff at the saddle point.

**Example (with a saddle point):**

|             | Player 2: $C_1$ | Player 2: $C_2$ | Row Minima |
| :---------- | :-------------: | :-------------: | :--------: |
| Player 1: $R_1$ |        3        |        5        |     3      |
| Player 1: $R_2$ |        1        |        2        |     1      |
| Column Maxima |        3        |        5        |            |

*   Row Minima: 3 (for $R_1$), 1 (for $R_2$)
*   Maximin = max(3, 1) = 3
*   Column Maxima: 3 (for $C_1$), 5 (for $C_2$)
*   Minimax = min(3, 5) = 3

Since Maximin (3) = Minimax (3), a saddle point exists at $(R_1, C_1)$. The value of the game is 3.
*   Player 1's optimal pure strategy is $R_1$.
*   Player 2's optimal pure strategy is $C_1$.

---

### 4. Games Without Saddle Points (2x2 Games)

When Maximin $\neq$ Minimax, the game does not have a saddle point. In such cases, players must adopt **mixed strategies**, where they randomize their choices between their available pure strategies with certain probabilities.

**Mixed Strategy:** A probability distribution over the pure strategies available to a player.

Let:
*   Player 1 plays $R_1$ with probability $p$ and $R_2$ with probability $(1-p)$, where $0 \le p \le 1$.
*   Player 2 plays $C_1$ with probability $q$ and $C_2$ with probability $(1-q)$, where $0 \le q \le 1$.

**Finding Optimal Mixed Strategies for a 2x2 Game:**

For a 2x2 game without a saddle point, the optimal mixed strategies can be found by determining the probabilities that make the opponent indifferent between their pure strategies.

**For Player 1 (Finding $p$):**

Player 1 wants to choose $p$ such that Player 2's expected payoff is the same regardless of whether Player 2 chooses $C_1$ or $C_2$.

Let the payoff matrix be:
|       | $C_1$ | $C_2$ |
| :---- | :---: | :---: |
| $R_1$ |  $a$  |  $b$  |
| $R_2$ |  $c$  |  $d$  |

The expected payoff for Player 1 when Player 2 plays $C_1$ is $p \cdot a + (1-p) \cdot c$.
The expected payoff for Player 1 when Player 2 plays $C_2$ is $p \cdot b + (1-p) \cdot d$.

For Player 2 to be indifferent, these expected payoffs must be equal:
$p \cdot a + (1-p) \cdot c = p \cdot b + (1-p) \cdot d$

$pa + c - pc = pb + d - pd$
$pa - pc - pb + pd = d - c$
$p(a - c - b + d) = d - c$
$p(a + d - b - c) = d - c$

So, the optimal probability for Player 1 to play $R_1$ is:
$p = \frac{d - c}{(a + d) - (b + c)}$

And the probability for Player 1 to play $R_2$ is:
$(1-p) = 1 - \frac{d - c}{(a + d) - (b + c)} = \frac{(a + d) - (b + c) - (d - c)}{(a + d) - (b + c)} = \frac{a - b}{(a + d) - (b + c)}$

**Important Note:** Ensure the denominator $(a+d) - (b+c)$ is not zero. If it is zero, it implies the game might have a saddle point or other degeneracies, which are usually handled by checking for saddle points first. Also, ensure $p$ and $(1-p)$ are between 0 and 1. If they fall outside this range, it suggests the assumption of mixed strategies might not be applicable for these specific values or that a pure strategy is optimal.

**For Player 2 (Finding $q$):**

Player 2 wants to choose $q$ such that Player 1's expected payoff is the same regardless of whether Player 1 chooses $R_1$ or $R_2$.

The expected payoff for Player 1 when Player 1 plays $R_1$ is $q \cdot a + (1-q) \cdot b$.
The expected payoff for Player 1 when Player 1 plays $R_2$ is $q \cdot c + (1-q) \cdot d$.

For Player 1 to be indifferent, these expected payoffs must be equal:
$q \cdot a + (1-q) \cdot b = q \cdot c + (1-q) \cdot d$

$qa + b - qb = qc + d - qd$
$qa - qb - qc + qd = d - b$
$q(a - b - c + d) = d - b$
$q(a + d - b - c) = d - b$

So, the optimal probability for Player 2 to play $C_1$ is:
$q = \frac{d - b}{(a + d) - (b + c)}$

And the probability for Player 2 to play $C_2$ is:
$(1-q) = 1 - \frac{d - b}{(a + d) - (b + c)} = \frac{(a + d) - (b + c) - (d - b)}{(a + d) - (b + c)} = \frac{a - c}{(a + d) - (b + c)}$

**The Value of the Game (V):**

Once the optimal probabilities are found, the value of the game can be calculated by substituting Player 1's probabilities ($p$ and $1-p$) into either of Player 2's strategy expected payoffs, or by substituting Player 2's probabilities ($q$ and $1-q$) into either of Player 1's strategy expected payoffs.

Using Player 1's perspective:
$V = p \cdot a + (1-p) \cdot c$ (when Player 2 plays $C_1$)
$V = p \cdot b + (1-p) \cdot d$ (when Player 2 plays $C_2$)

Substituting the formula for $p$:
$V = \left(\frac{d - c}{a + d - b - c}\right)a + \left(\frac{a - b}{a + d - b - c}\right)c$
$V = \frac{a(d - c) + c(a - b)}{a + d - b - c}$
$V = \frac{ad - ac + ac - bc}{a + d - b - c}$
$V = \frac{ad - bc}{a + d - b - c}$

This formula for the value of the game is a concise way to compute it once the denominator is confirmed.

---

### 5. Example: 2x2 Game Without Saddle Point

**Problem:** Solve the following 2x2 game where the payoffs are for Player 1.

|             | Player 2: $C_1$ | Player 2: $C_2$ |
| :---------- | :-------------: | :-------------: |
| Player 1: $R_1$ |        2        |        4        |
| Player 1: $R_2$ |        5        |        1        |

**Step 1: Check for a Saddle Point**

|             | $C_1$ | $C_2$ | Row Minima |
| :---------- | :---: | :---: | :--------: |
| $R_1$       |   2   |   4   |     2      |
| $R_2$       |   5   |   1   |     1      |
| Column Maxima |   5   |   4   |            |

*   Maximin = max(2, 1) = 2
*   Minimax = min(5, 4) = 4

Since Maximin (2) $\neq$ Minimax (4), there is no saddle point. The game requires mixed strategies.

**Step 2: Identify Payoff Matrix Elements**

$a = 2, b = 4, c = 5, d = 1$

**Step 3: Calculate Optimal Mixed Strategies**

**For Player 1 (probabilities $p$ and $1-p$ for $R_1$ and $R_2$):**

Denominator = $(a + d) - (b + c) = (2 + 1) - (4 + 5) = 3 - 9 = -6$

$p = \frac{d - c}{(a + d) - (b + c)} = \frac{1 - 5}{-6} = \frac{-4}{-6} = \frac{2}{3}$

$1-p = 1 - \frac{2}{3} = \frac{1}{3}$

**Player 1's optimal mixed strategy:** Play $R_1$ with probability $2/3$ and $R_2$ with probability $1/3$.

**For Player 2 (probabilities $q$ and $1-q$ for $C_1$ and $C_2$):**

Denominator = $(a + d) - (b + c) = -6$ (same as above)

$q = \frac{d - b}{(a + d) - (b + c)} = \frac{1 - 4}{-6} = \frac{-3}{-6} = \frac{1}{2}$

$1-q = 1 - \frac{1}{2} = \frac{1}{2}$

**Player 2's optimal mixed strategy:** Play $C_1$ with probability $1/2$ and $C_2$ with probability $1/2$.

**Step 4: Calculate the Value of the Game (V)**

Using the formula:
$V = \frac{ad - bc}{a + d - b - c} = \frac{(2)(1) - (4)(5)}{-6} = \frac{2 - 20}{-6} = \frac{-18}{-6} = 3$

Alternatively, using Player 1's strategy and Player 2 playing $C_1$:
$V = p \cdot a + (1-p) \cdot c = \left(\frac{2}{3}\right)(2) + \left(\frac{1}{3}\right)(5) = \frac{4}{3} + \frac{5}{3} = \frac{9}{3} = 3$

Using Player 1's strategy and Player 2 playing $C_2$:
$V = p \cdot b + (1-p) \cdot d = \left(\frac{2}{3}\right)(4) + \left(\frac{1}{3}\right)(1) = \frac{8}{3} + \frac{1}{3} = \frac{9}{3} = 3$

**The value of the game is 3.**

**Interpretation:**
If both players play their optimal mixed strategies, Player 1 can expect to win 3 units, and Player 2 can expect to lose 3 units, on average, regardless of the other player's strategy.

---

### 6. Important Points to Remember

*   **Always check for a saddle point first.** If a saddle point exists, pure strategies are optimal, and the problem is much simpler.
*   The formulas for mixed strategies are derived by making the opponent indifferent to their choices.
*   The denominator $(a + d) - (b + c)$ is crucial. If it's zero, the standard mixed strategy calculation might not apply directly, and you should re-examine the payoff matrix for dominance or saddle points.
*   The probabilities $p$ and $q$ must be between 0 and 1 inclusive. If a calculation yields a probability outside this range, it implies that the optimal strategy is a pure strategy (i.e., the probability should be 0 or 1). This is essentially what happens when a saddle point exists – the derived "mixed" strategies would work out to be pure.
*   The **value of the game** represents the average payoff a player can expect if both players play optimally.
*   The formulas for $p$, $q$, and $V$ are specific to 2x2 zero-sum games without saddle points. For larger games, more advanced techniques like graphical methods (for 2xN or Mx2 games) or linear programming are required.

---

### 7. Practice Questions and Exercises

**Question 1:**
Determine if the following 2x2 game has a saddle point. If it does, find the optimal strategies and the value of the game. If not, calculate the optimal mixed strategies for both players and the value of the game.

|             | Player 2: $C_1$ | Player 2: $C_2$ |
| :---------- | :-------------: | :-------------: |
| Player 1: $R_1$ |        6        |        1        |
| Player 1: $R_2$ |        3        |        5        |

**Answer 1:**

**Step 1: Check for Saddle Point**
|             | $C_1$ | $C_2$ | Row Minima |
| :---------- | :---: | :---: | :--------: |
| $R_1$       |   6   |   1   |     1      |
| $R_2$       |   3   |   5   |     3      |
| Column Maxima |   6   |   5   |            |

Maximin = max(1, 3) = 3
Minimax = min(6, 5) = 5

Maximin $\neq$ Minimax. No saddle point.

**Step 2: Identify Elements**
$a = 6, b = 1, c = 3, d = 5$

**Step 3: Calculate Optimal Mixed Strategies**
Denominator = $(a + d) - (b + c) = (6 + 5) - (1 + 3) = 11 - 4 = 7$

For Player 1:
$p = \frac{d - c}{7} = \frac{5 - 3}{7} = \frac{2}{7}$
$1-p = 1 - \frac{2}{7} = \frac{5}{7}$
Player 1's optimal mixed strategy: Play $R_1$ with probability $2/7$, $R_2$ with probability $5/7$.

For Player 2:
$q = \frac{d - b}{7} = \frac{5 - 1}{7} = \frac{4}{7}$
$1-q = 1 - \frac{4}{7} = \frac{3}{7}$
Player 2's optimal mixed strategy: Play $C_1$ with probability $4/7$, $C_2$ with probability $3/7$.

**Step 4: Calculate Value of the Game**
$V = \frac{ad - bc}{a + d - b - c} = \frac{(6)(5) - (1)(3)}{7} = \frac{30 - 3}{7} = \frac{27}{7}$

**Answer:**
Player 1's optimal strategy: $(2/7, 5/7)$.
Player 2's optimal strategy: $(4/7, 3/7)$.
Value of the game: $27/7$.

---

**Question 2:**
Solve the following 2x2 game:

|             | Player 2: $C_1$ | Player 2: $C_2$ |
| :---------- | :-------------: | :-------------: |
| Player 1: $R_1$ |        0        |        1        |
| Player 1: $R_2$ |        1        |        0        |

**Answer 2:**

**Step 1: Check for Saddle Point**
|             | $C_1$ | $C_2$ | Row Minima |
| :---------- | :---: | :---: | :--------: |
| $R_1$       |   0   |   1   |     0      |
| $R_2$       |   1   |   0   |     0      |
| Column Maxima |   1   |   1   |            |

Maximin = max(0, 0) = 0
Minimax = min(1, 1) = 1

Maximin $\neq$ Minimax. No saddle point. This is the classic "Matching Pennies" game.

**Step 2: Identify Elements**
$a = 0, b = 1, c = 1, d = 0$

**Step 3: Calculate Optimal Mixed Strategies**
Denominator = $(a + d) - (b + c) = (0 + 0) - (1 + 1) = 0 - 2 = -2$

For Player 1:
$p = \frac{d - c}{-2} = \frac{0 - 1}{-2} = \frac{-1}{-2} = \frac{1}{2}$
$1-p = 1 - \frac{1}{2} = \frac{1}{2}$
Player 1's optimal mixed strategy: Play $R_1$ with probability $1/2$, $R_2$ with probability $1/2$.

For Player 2:
$q = \frac{d - b}{-2} = \frac{0 - 1}{-2} = \frac{-1}{-2} = \frac{1}{2}$
$1-q = 1 - \frac{1}{2} = \frac{1}{2}$
Player 2's optimal mixed strategy: Play $C_1$ with probability $1/2$, $C_2$ with probability $1/2$.

**Step 4: Calculate Value of the Game**
$V = \frac{ad - bc}{a + d - b - c} = \frac{(0)(0) - (1)(1)}{-2} = \frac{0 - 1}{-2} = \frac{-1}{-2} = \frac{1}{2}$

**Answer:**
Player 1's optimal strategy: $(1/2, 1/2)$.
Player 2's optimal strategy: $(1/2, 1/2)$.
Value of the game: $1/2$.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |


### 8. References

*   **Operations Research by Paneerselvam R. (PHI, Third edition, 2023):** Chapter X on Game Theory covers the fundamental concepts, saddle points, and methods for solving 2x2 games, including mixed strategies. The book provides numerous examples and exercises relevant to engineering applications.
*   **Operations Research by Taha (Pearson, Tenth edition, 2019):** Chapter on Game Theory provides a thorough treatment of the subject, including the algebraic method for solving 2x2 games without saddle points. Taha's approach often emphasizes the underlying logic and proofs.
*   **Introduction to Operations Research by F. S. Hillier and G. J. Lieberman (McGraw Hill, Tenth edition, 2017):** This textbook offers a robust explanation of game theory, including the concept of the value of a game and how to derive optimal mixed strategies for 2x2 games. It often includes more theoretical background.

---

This concludes Module 3's topic on 2x2 games without saddle points. Understanding these concepts is foundational for more complex game theory problems and strategic decision-making in engineering.