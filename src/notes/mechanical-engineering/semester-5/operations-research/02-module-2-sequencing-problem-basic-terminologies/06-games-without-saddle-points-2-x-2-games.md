---
title: "Games without saddle points – 2 x 2 games"
subject: "OPERATIONS RESEARCH"
module: "Module 2: Sequencing Problem: Basic terminologies"
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1551d0cf4804463625"
status: "completed"
scrapedAt: "2026-05-20T18:01:56.428Z"
---
# Operations Research: Module 2 - Sequencing Problem: Basic Terminologies

## Topic: Games without Saddle Points – 2x2 Games

### Learning Outcomes:

*   Understand the concept of a saddle point in game theory.
*   Identify games that do not possess a saddle point.
*   Apply the algebraic method to solve 2x2 games without saddle points.
*   Determine the optimal mixed strategies for both players in a 2x2 game without a saddle point.
*   Calculate the value of the game for a 2x2 game without a saddle point.

### Course Outcomes Alignment:

*   **CO3: To solve simple problems in game theory (Knowledge Level: K2, K3)** - This topic directly addresses the ability to solve basic game theory problems, specifically 2x2 games without saddle points, which is a fundamental aspect of this course outcome.

### 1. Introduction to Game Theory and Saddle Points

**Game Theory:** A mathematical framework for analyzing strategic interactions between rational decision-makers. It involves players, strategies, and payoffs.

**Zero-Sum Game:** A game where the total payoff to all players sums to zero. One player's gain is exactly the other player's loss. In a zero-sum game, we often represent the payoff matrix from the perspective of the "row player" (Player 1), where positive values indicate a gain for Player 1 and negative values indicate a loss.

**Payoff Matrix:** A table that shows the payoffs for each player for every possible combination of strategies. For a 2x2 game, it typically looks like this:

|           | Player 2 (Column Player) |       |
| :-------- | :----------------------- | :---- |
| Player 1  | Strategy C1              | Strategy C2 |
| (Row Player) | Strategy R1              | $a_{11}$      | $a_{12}$      |
|           | Strategy R2              | $a_{21}$      | $a_{22}$      |

Where:
*   $a_{ij}$ is the payoff to Player 1 when Player 1 chooses strategy Ri and Player 2 chooses strategy Cj.

**Saddle Point:** An element in the payoff matrix that is simultaneously the minimum value in its row and the maximum value in its column.

*   **Row Minima:** The smallest value in each row.
*   **Column Maxima:** The largest value in each column.

**Maximin Value:** The largest of the row minima. This represents the best outcome Player 1 can guarantee for themselves, assuming Player 2 will always try to minimize Player 1's payoff.

**Minimax Value:** The smallest of the column maxima. This represents the best outcome Player 2 can guarantee for themselves (or the worst outcome for Player 1, from Player 2's perspective), assuming Player 1 will always try to maximize their payoff.

**Condition for a Saddle Point:** A game has a saddle point if and only if the maximin value is equal to the minimax value.

*   **Maximin $\ge$ Minimax** is always true for any payoff matrix.
*   If **Maximin = Minimax**, then this value is the **Value of the Game**, and the corresponding strategies are the **optimal pure strategies**.

**Example of a Game with a Saddle Point:**

Consider the following payoff matrix for Player 1:

|       | C1 | C2 | Row Minima |
| :---- | :- | :- | :--------- |
| R1    | 3  | 5  | 3          |
| R2    | 2  | 1  | 1          |
| **Col Maxima** | **3** | **5** |            |

*   Row Minima: 3, 1. Maximin = 3.
*   Column Maxima: 3, 5. Minimax = 3.

Since Maximin = Minimax = 3, there is a saddle point at (R1, C1). The optimal pure strategy for Player 1 is R1, and for Player 2 is C1. The value of the game is 3.

### 2. Games Without Saddle Points: Introduction

When the maximin value is *strictly less than* the minimax value, the game does not have a saddle point. In such cases, neither player has a single pure strategy that guarantees the best outcome against any of the opponent's strategies. Both players will need to resort to **mixed strategies**.

**Mixed Strategy:** A probability distribution over the available pure strategies. A player using a mixed strategy randomly chooses one of their pure strategies according to the assigned probabilities.

*   **For Player 1 (Row Player):** Let $p_1$ be the probability of playing R1, and $p_2$ be the probability of playing R2.
    *   $p_1 + p_2 = 1$, and $p_1, p_2 \ge 0$.
*   **For Player 2 (Column Player):** Let $q_1$ be the probability of playing C1, and $q_2$ be the probability of playing C2.
    *   $q_1 + q_2 = 1$, and $q_1, q_2 \ge 0$.

The objective is to find the optimal mixed strategies ($p_1, p_2$ and $q_1, q_2$) that maximize the minimum expected payoff for Player 1 and minimize the maximum expected payoff for Player 2.

### 3. Solving 2x2 Games Without Saddle Points (Algebraic Method)

For a 2x2 zero-sum game without a saddle point, the optimal mixed strategies and the value of the game can be calculated using the following formulas. These formulas are derived by ensuring that the expected payoff for Player 1 is the same regardless of which strategy Player 2 chooses (when Player 1 plays their optimal mixed strategy), and vice-versa.

**Payoff Matrix:**

|       | C1     | C2     |
| :---- | :----- | :----- |
| R1    | $a_{11}$ | $a_{12}$ |
| R2    | $a_{21}$ | $a_{22}$ |

**Condition for no Saddle Point:** Maximin < Minimax.

**Formulas for Optimal Mixed Strategies:**

**For Player 1 (Row Player):**
To make Player 2 indifferent between choosing C1 and C2, Player 1 plays R1 with probability $p_1$ and R2 with probability $p_2$.

Expected payoff for Player 1 if Player 2 plays C1: $E_1(C1) = p_1 a_{11} + p_2 a_{21}$
Expected payoff for Player 1 if Player 2 plays C2: $E_1(C2) = p_1 a_{12} + p_2 a_{22}$

For Player 2 to be indifferent, $E_1(C1) = E_1(C2)$.
$p_1 a_{11} + p_2 a_{21} = p_1 a_{12} + p_2 a_{22}$
Since $p_2 = 1 - p_1$:
$p_1 a_{11} + (1 - p_1) a_{21} = p_1 a_{12} + (1 - p_1) a_{22}$
$p_1 a_{11} + a_{21} - p_1 a_{21} = p_1 a_{12} + a_{22} - p_1 a_{22}$
$p_1 (a_{11} - a_{21} - a_{12} + a_{22}) = a_{22} - a_{21}$
$p_1 = \frac{a_{22} - a_{21}}{(a_{11} - a_{12}) - (a_{21} - a_{22})} = \frac{a_{22} - a_{21}}{a_{11} - a_{12} - a_{21} + a_{22}}$

And $p_2 = 1 - p_1$.

**For Player 2 (Column Player):**
To make Player 1 indifferent between choosing R1 and R2, Player 2 plays C1 with probability $q_1$ and C2 with probability $q_2$.

Expected payoff for Player 1 if Player 1 plays R1: $E_1(R1) = q_1 a_{11} + q_2 a_{12}$
Expected payoff for Player 1 if Player 1 plays R2: $E_1(R2) = q_1 a_{21} + q_2 a_{22}$

For Player 1 to be indifferent, $E_1(R1) = E_1(R2)$.
$q_1 a_{11} + q_2 a_{12} = q_1 a_{21} + q_2 a_{22}$
Since $q_2 = 1 - q_1$:
$q_1 a_{11} + (1 - q_1) a_{12} = q_1 a_{21} + (1 - q_1) a_{22}$
$q_1 a_{11} + a_{12} - q_1 a_{12} = q_1 a_{21} + a_{22} - q_1 a_{22}$
$q_1 (a_{11} - a_{12} - a_{21} + a_{22}) = a_{22} - a_{12}$
$q_1 = \frac{a_{22} - a_{12}}{(a_{11} - a_{21}) - (a_{12} - a_{22})} = \frac{a_{22} - a_{12}}{a_{11} - a_{12} - a_{21} + a_{22}}$

And $q_2 = 1 - q_1$.

**Value of the Game (V):**
The value of the game can be calculated by substituting the optimal probabilities into the expected payoff equation for either player.

$V = p_1 a_{11} + p_2 a_{21}$
or
$V = q_1 a_{11} + q_2 a_{12}$

A more direct formula for the value of the game is:
$V = \frac{a_{11}a_{22} - a_{12}a_{21}}{a_{11} - a_{12} - a_{21} + a_{22}}$

**Important Note on Denominator:** The denominator $(a_{11} - a_{12} - a_{21} + a_{22})$ should not be zero. If it is zero, the game might have infinitely many solutions or a degenerate case.

**Simplified Formula for Denominator:** Let $D = a_{11} - a_{12} - a_{21} + a_{22}$.

**Player 1's Optimal Strategy:**
$p_1 = \frac{(a_{22} - a_{21})}{D}$
$p_2 = \frac{(a_{11} - a_{12})}{D}$

**Player 2's Optimal Strategy:**
$q_1 = \frac{(a_{22} - a_{12})}{D}$
$q_2 = \frac{(a_{11} - a_{21})}{D}$

**Value of the Game:**
$V = \frac{a_{11}a_{22} - a_{12}a_{21}}{D}$

**Let's re-check the derivation using terms that make probabilities positive:**

Sometimes, to ensure probabilities are positive, it's easier to work with positive payoffs. If the game has negative entries, we can add a constant to all entries to make them positive, solve the modified game, and then subtract the constant from the value of the modified game to get the value of the original game. The optimal strategies remain the same.

Consider the payoff matrix:
|       | C1     | C2     |
| :---- | :----- | :----- |
| R1    | $a$    | $b$    |
| R2    | $c$    | $d$    |

Let $p$ be the probability Player 1 plays R1, so $(1-p)$ is the probability Player 1 plays R2.
Let $q$ be the probability Player 2 plays C1, so $(1-q)$ is the probability Player 2 plays C2.

Player 1 wants to choose $p$ such that their expected payoff is the same regardless of Player 2's strategy.
Expected payoff for Player 1 if Player 2 plays C1: $pa + (1-p)c$
Expected payoff for Player 1 if Player 2 plays C2: $pb + (1-p)d$

Equating these:
$pa + c - pc = pb + d - pd$
$p(a - c - b + d) = d - c$
$p = \frac{d - c}{(a - b) - (c - d)} = \frac{d - c}{a - b - c + d}$

So, $p_1 = \frac{d - c}{a - b - c + d}$ and $p_2 = 1 - p_1 = \frac{a - b}{a - b - c + d}$.
(Note: This matches our previous $p_1$ if we substitute $a=a_{11}, b=a_{12}, c=a_{21}, d=a_{22}$)

Player 2 wants to choose $q$ such that Player 1's expected payoff is the same regardless of Player 1's strategy.
Expected payoff for Player 1 if Player 1 plays R1: $qa + (1-q)b$
Expected payoff for Player 1 if Player 1 plays R2: $qc + (1-q)d$

Equating these:
$qa + b - qb = qc + d - qd$
$q(a - b - c + d) = d - b$
$q = \frac{d - b}{(a - c) - (b - d)} = \frac{d - b}{a - b - c + d}$

So, $q_1 = \frac{d - b}{a - b - c + d}$ and $q_2 = 1 - q_1 = \frac{a - c}{a - b - c + d}$.
(Note: This matches our previous $q_1$ if we substitute $a=a_{11}, b=a_{12}, c=a_{21}, d=a_{22}$)

**Value of the Game:**
$V = pa + (1-p)c = \left(\frac{d - c}{a - b - c + d}\right)a + \left(\frac{a - b}{a - b - c + d}\right)c$
$V = \frac{ad - ac + ac - bc}{a - b - c + d} = \frac{ad - bc}{a - b - c + d}$
This also matches our previous $V$ formula.

**Important Check:** The probabilities calculated ($p_1, p_2, q_1, q_2$) must be between 0 and 1 inclusive. If any formula results in a probability outside this range, it implies that the initial assumption of a mixed strategy solution might be incorrect, or there might be a simplification possible. However, for a 2x2 game *without* a saddle point, these formulas should yield valid probabilities.

### 4. Examples

**Example 1:**
Solve the following 2x2 game without a saddle point:

|       | C1 | C2 | Row Minima |
| :---- | :- | :- | :--------- |
| R1    | 1  | 3  | 1          |
| R2    | 4  | 2  | 2          |
| **Col Maxima** | **4** | **3** |            |

**Step 1: Check for Saddle Point**
Row Minima: 1, 2. Maximin = 2.
Column Maxima: 4, 3. Minimax = 3.
Since Maximin (2) < Minimax (3), there is no saddle point. This is a game that requires mixed strategies.

**Step 2: Identify Payoffs**
$a = 1, b = 3, c = 4, d = 2$.

**Step 3: Calculate the Denominator**
$D = a - b - c + d = 1 - 3 - 4 + 2 = -4$.

**Step 4: Calculate Optimal Mixed Strategies for Player 1 (Row Player)**
$p_1 = \frac{d - c}{D} = \frac{2 - 4}{-4} = \frac{-2}{-4} = 0.5$
$p_2 = 1 - p_1 = 1 - 0.5 = 0.5$

Player 1's optimal strategy is to play R1 with probability 0.5 and R2 with probability 0.5.

**Step 5: Calculate Optimal Mixed Strategies for Player 2 (Column Player)**
$q_1 = \frac{d - b}{D} = \frac{2 - 3}{-4} = \frac{-1}{-4} = 0.25$
$q_2 = 1 - q_1 = 1 - 0.25 = 0.75$

Player 2's optimal strategy is to play C1 with probability 0.25 and C2 with probability 0.75.

**Step 6: Calculate the Value of the Game**
$V = \frac{ad - bc}{D} = \frac{(1)(2) - (3)(4)}{-4} = \frac{2 - 12}{-4} = \frac{-10}{-4} = 2.5$

**Verification:**
Let's check if Player 1's expected payoff is 2.5 regardless of Player 2's strategy:
If Player 2 plays C1: $E_1(C1) = p_1 a + p_2 c = (0.5)(1) + (0.5)(4) = 0.5 + 2.0 = 2.5$
If Player 2 plays C2: $E_1(C2) = p_1 b + p_2 d = (0.5)(3) + (0.5)(2) = 1.5 + 1.0 = 2.5$
It holds true.

Let's check if Player 2's strategy makes Player 1 indifferent:
If Player 1 plays R1: $E_1(R1) = q_1 a + q_2 b = (0.25)(1) + (0.75)(3) = 0.25 + 2.25 = 2.5$
If Player 1 plays R2: $E_1(R2) = q_1 c + q_2 d = (0.25)(4) + (0.75)(2) = 1.0 + 1.5 = 2.5$
It also holds true.

**Answer for Example 1:**
*   Player 1's optimal mixed strategy: (0.5, 0.5) for (R1, R2)
*   Player 2's optimal mixed strategy: (0.25, 0.75) for (C1, C2)
*   Value of the game: 2.5

**Example 2 (with negative payoffs):**
Consider the game with the following payoff matrix:

|       | C1 | C2 | Row Minima |
| :---- | :- | :- | :--------- |
| R1    | -2 | 3  | -2         |
| R2    | 1  | -4 | -4         |
| **Col Maxima** | **1** | **3** |            |

**Step 1: Check for Saddle Point**
Row Minima: -2, -4. Maximin = -2.
Column Maxima: 1, 3. Minimax = 1.
Since Maximin (-2) < Minimax (1), there is no saddle point.

**Step 2: Identify Payoffs**
$a = -2, b = 3, c = 1, d = -4$.

**Step 3: Calculate the Denominator**
$D = a - b - c + d = -2 - 3 - 1 + (-4) = -10$.

**Step 4: Calculate Optimal Mixed Strategies for Player 1 (Row Player)**
$p_1 = \frac{d - c}{D} = \frac{-4 - 1}{-10} = \frac{-5}{-10} = 0.5$
$p_2 = 1 - p_1 = 1 - 0.5 = 0.5$

Player 1's optimal strategy: (0.5, 0.5) for (R1, R2).

**Step 5: Calculate Optimal Mixed Strategies for Player 2 (Column Player)**
$q_1 = \frac{d - b}{D} = \frac{-4 - 3}{-10} = \frac{-7}{-10} = 0.7$
$q_2 = 1 - q_1 = 1 - 0.7 = 0.3$

Player 2's optimal strategy: (0.7, 0.3) for (C1, C2).

**Step 6: Calculate the Value of the Game**
$V = \frac{ad - bc}{D} = \frac{(-2)(-4) - (3)(1)}{-10} = \frac{8 - 3}{-10} = \frac{5}{-10} = -0.5$

**Verification:**
If Player 2 plays C1: $E_1(C1) = (0.5)(-2) + (0.5)(1) = -1 + 0.5 = -0.5$
If Player 2 plays C2: $E_1(C2) = (0.5)(3) + (0.5)(-4) = 1.5 - 2 = -0.5$

If Player 1 plays R1: $E_1(R1) = (0.7)(-2) + (0.3)(3) = -1.4 + 0.9 = -0.5$
If Player 1 plays R2: $E_1(R2) = (0.7)(1) + (0.3)(-4) = 0.7 - 1.2 = -0.5$

**Answer for Example 2:**
*   Player 1's optimal mixed strategy: (0.5, 0.5) for (R1, R2)
*   Player 2's optimal mixed strategy: (0.7, 0.3) for (C1, C2)
*   Value of the game: -0.5

### 5. Important Points to Remember

*   **Always check for a saddle point first.** If a saddle point exists, pure strategies are optimal, and the value of the game is the saddle point value.
*   **For 2x2 games without saddle points, mixed strategies are required.**
*   **The algebraic method provides direct formulas for optimal mixed strategies and the value of the game.**
*   **Ensure that the calculated probabilities are between 0 and 1.** If not, recheck your calculations.
*   **The denominator ($a - b - c + d$) must not be zero.** If it is zero, the game might be degenerate, and a different approach might be needed.
*   **If the payoff matrix contains negative entries, the formulas still work correctly.** The value of the game can be negative.
*   **The principle of indifference is key:** In an optimal mixed strategy solution, each player chooses their probabilities to make the opponent indifferent between their pure strategies.
*   **The value of the game represents the expected outcome when both players play optimally.**

### 6. Practice Questions/Exercises

**Question 1:**
Determine if the following game has a saddle point. If it does, state the optimal pure strategies and the value of the game. If it does not, find the optimal mixed strategies for both players and the value of the game.

Payoff Matrix:
|       | C1 | C2 |
| :---- | :- | :- |
| R1    | 5  | 1  |
| R2    | 3  | 4  |

**Answer 1:**
*   Row Minima: 1, 3. Maximin = 3.
*   Column Maxima: 5, 4. Minimax = 4.
*   Maximin (3) < Minimax (4). No saddle point.

*   $a=5, b=1, c=3, d=4$.
*   $D = a - b - c + d = 5 - 1 - 3 + 4 = 5$.
*   Player 1's optimal strategy:
    *   $p_1 = \frac{d - c}{D} = \frac{4 - 3}{5} = \frac{1}{5} = 0.2$
    *   $p_2 = 1 - p_1 = 1 - 0.2 = 0.8$
*   Player 2's optimal strategy:
    *   $q_1 = \frac{d - b}{D} = \frac{4 - 1}{5} = \frac{3}{5} = 0.6$
    *   $q_2 = 1 - q_1 = 1 - 0.6 = 0.4$
*   Value of the game:
    *   $V = \frac{ad - bc}{D} = \frac{(5)(4) - (1)(3)}{5} = \frac{20 - 3}{5} = \frac{17}{5} = 3.4$

**Question 2:**
Solve the following 2x2 game:

Payoff Matrix:
|       | C1 | C2 |
| :---- | :- | :- |
| R1    | 0  | 2  |
| R2    | 3  | 1  |

**Answer 2:**
*   Row Minima: 0, 1. Maximin = 1.
*   Column Maxima: 3, 2. Minimax = 2.
*   Maximin (1) < Minimax (2). No saddle point.

*   $a=0, b=2, c=3, d=1$.
*   $D = a - b - c + d = 0 - 2 - 3 + 1 = -4$.
*   Player 1's optimal strategy:
    *   $p_1 = \frac{d - c}{D} = \frac{1 - 3}{-4} = \frac{-2}{-4} = 0.5$
    *   $p_2 = 1 - p_1 = 1 - 0.5 = 0.5$
*   Player 2's optimal strategy:
    *   $q_1 = \frac{d - b}{D} = \frac{1 - 2}{-4} = \frac{-1}{-4} = 0.25$
    *   $q_2 = 1 - q_1 = 1 - 0.25 = 0.75$
*   Value of the game:
    *   $V = \frac{ad - bc}{D} = \frac{(0)(1) - (2)(3)}{-4} = \frac{0 - 6}{-4} = \frac{-6}{-4} = 1.5$

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=x1U7Hw4K0mU) |


### 7. References and Further Reading

*   **Operations Research-Principles and Applications by Srinivasan, G. (PHI Pvt. Ltd., Third Edition, 2017):** Chapters on Game Theory will provide theoretical background and examples.
*   **Operations Research by Prem Kumar Gupta & D. S. Hira (S Chand publication, Third Edition, 2008):** This book is known for its clear explanations and numerous solved examples, including 2x2 games.
*   **Quantitative Techniques in Management by N. D Vohra. Hitesh Arora (McGraw Hill., Sixth Edition, 2021):** Likely covers game theory with practical applications.
*   **Introduction to Operations Research, by F. S. Hillier& G. J. Leiberman: (McGraw Hill, Eleventh Edition):** A comprehensive reference that will likely cover the fundamental aspects of game theory, including 2x2 games and the algebraic solution.

These notes provide a foundational understanding of solving 2x2 games without saddle points, directly contributing to Course Outcome CO3. Practice with various examples is crucial for mastering this topic.