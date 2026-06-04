---
title: "Graphical method for m x 2 and 2 x n games"
subject: "QUANTITATIVE TECHNIQUES FOR ENGINEERS"
module: "Module 3: Network analysis – Basic terms"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1751d0cf4804463a7c"
status: "completed"
scrapedAt: "2026-05-20T18:07:38.969Z"
---
# QUANTITATIVE TECHNIQUES FOR ENGINEERS

## Module 3: Network Analysis – Basic Terms

## Topic: Graphical Method for m x 2 and 2 x n Games

This topic focuses on solving specific types of two-person zero-sum games where one player has only two strategies. The graphical method provides a visual and intuitive approach to find the optimal mixed strategies and the value of the game for these simplified scenarios.

---

### Learning Outcomes Covered:

*   **Formulating and solving game theory problems:** This topic directly addresses CO4 by providing a method to solve specific types of game theory problems.
*   **Understanding the concept of optimal strategies and value of the game:** The graphical method helps in identifying these key components of a game.

---

### 1. Key Concepts and Definitions

*   **Game Theory:** A mathematical framework for analyzing strategic interactions between rational decision-makers (players).
*   **Two-Person Zero-Sum Game:** A game where the total gains of the players equal their total losses. What one player wins, the other loses.
*   **Payoff Matrix:** A table that shows the payoffs for each player for every possible combination of strategies.
*   **Player:** A decision-maker in a game.
*   **Strategy:** A plan of action that a player will take in response to the actions of other players.
    *   **Pure Strategy:** A player consistently chooses a single strategy.
    *   **Mixed Strategy:** A player chooses among their available strategies according to a probability distribution.
*   **Value of the Game (V):** The expected payoff to the row player (Player 1) when both players play their optimal strategies.
*   **Saddle Point:** An element in the payoff matrix that is both the minimum in its row and the maximum in its column. If a saddle point exists, the optimal strategy for both players is a pure strategy.
*   **Dominated Strategy:** A strategy that yields a lower payoff than another strategy for a player, regardless of the opponent's strategy. Dominated strategies can be eliminated to simplify the game.
*   **Graphical Method:** A technique used to solve 2 x n or m x 2 games by plotting the expected payoffs for one player against the probabilities of the other player's strategies.

---

### 2. Introduction to Game Theory (Brief Recap)

(Referencing **Taha, Chapter 14: Game Theory**)

A two-person zero-sum game can be represented by a payoff matrix. Let Player 1 (Row Player) have 'm' strategies and Player 2 (Column Player) have 'n' strategies. The payoff matrix $A = [a_{ij}]$ represents the payoff to Player 1 when Player 1 chooses strategy *i* and Player 2 chooses strategy *j*. The payoff to Player 2 is $-a_{ij}$.

The objective is to find optimal strategies that maximize each player's minimum expected payoff (maximin strategy) and minimize the opponent's maximum expected payoff (minimax strategy).

---

### 3. Solving 2 x n and m x 2 Games

When a game is not a square matrix (n > 2 or m > 2), and there is no saddle point, we often need to resort to mixed strategies. The graphical method is particularly effective for games where one player has only two strategies.

#### 3.1 Graphical Method for m x 2 Games

Here, the Row Player (Player 1) has *m* strategies, and the Column Player (Player 2) has only 2 strategies. We will find the optimal mixed strategy for the Column Player and the value of the game.

**Steps:**

1.  **Set up the Payoff Matrix:** Represent the game with a payoff matrix where rows represent Player 1's strategies and columns represent Player 2's strategies.
2.  **Check for Saddle Point:** Calculate row minima and column maxima. If a saddle point exists, the optimal strategies are pure, and the value of the game is the saddle point value. The graphical method is not strictly necessary in this case, but it can still confirm the result.
3.  **Eliminate Dominated Strategies (Optional but recommended):** If any of Player 1's strategies are dominated by another of Player 1's strategies, remove the dominated strategy. Similarly, if any of Player 2's strategies are dominated by another of Player 2's strategies, remove the dominated strategy.
4.  **Assume Player 1 uses a Mixed Strategy:** Let Player 1 play their *m* strategies with probabilities $p_1, p_2, ..., p_m$, where $\sum_{i=1}^m p_i = 1$ and $p_i \ge 0$.
5.  **Formulate Expected Payoffs:** For each of Player 2's pure strategies (let's call them Strategy 1 and Strategy 2), calculate the expected payoff for Player 1.
    *   If Player 2 plays Strategy 1: $E_1 = a_{11}p_1 + a_{21}p_2 + ... + a_{m1}p_m$
    *   If Player 2 plays Strategy 2: $E_2 = a_{12}p_1 + a_{22}p_2 + ... + a_{m2}p_m$
6.  **Graphical Representation:**
    *   Draw a graph with the probabilities of Player 1's strategies ($p_i$) on one axis (or a representation of them). A common approach is to plot the expected payoff ($E_j$) against the probabilities assigned to *one* of Player 1's strategies, while adjusting the others to maintain the sum of probabilities.
    *   A more standard and generally applicable approach for m x 2 games is to plot the expected payoffs for Player 1 for each of Player 2's pure strategies as a function of the probabilities Player 1 assigns to their own strategies.
    *   **Crucially, for m x 2 games, we plot the expected payoffs of Player 1 against the probability Player 2 assigns to their *first* strategy.** Let Player 2 play their strategies with probabilities $q_1$ and $q_2$, where $q_1 + q_2 = 1$ and $q_1, q_2 \ge 0$.
        *   Expected payoff for Player 1 when Player 2 plays Strategy 1: $E_1 = a_{11}q_1 + a_{12}(1-q_1) + ... + a_{m1}q_1 + a_{m2}(1-q_1)$. This is not the right approach for plotting directly.
        *   **Correct Approach for m x 2:**
            *   Let Player 2 use probabilities $q_1$ and $q_2$ for their two strategies.
            *   The expected payoff for Player 1 when Player 1 plays strategy $i$ and Player 2 plays their mixed strategy is: $E_i = a_{i1}q_1 + a_{i2}q_2 = a_{i1}q_1 + a_{i2}(1-q_1)$.
            *   We plot these *m* linear functions of $q_1$ on a graph. The x-axis represents $q_1$ (ranging from 0 to 1). The y-axis represents the expected payoff for Player 1.
7.  **Determine Player 1's Optimal Mixed Strategy:** Player 1 wants to maximize their minimum expected payoff. This is the maximin strategy. On the graph, Player 1 looks for the highest point on the *lower envelope* of these lines. The lower envelope is formed by the minimum of the payoffs for each value of $q_1$.
    *   The intersection points of these lines are important. The optimal mixed strategy for Player 1 often involves only two of their pure strategies. These are the strategies whose payoff lines form the lower envelope at its maximum point.
    *   If the maximum of the lower envelope occurs at an intersection point of two lines (say, line $i$ and line $k$), then Player 1 will play strategies $i$ and $k$ with certain probabilities $p_i$ and $p_k$, and other strategies with probability 0.
8.  **Determine Player 2's Optimal Mixed Strategy:** Player 2 wants to minimize Player 1's maximum expected payoff. On the graph, Player 2 looks at the lower envelope (which represents Player 1's guaranteed payoff for a given $q_1$). Player 2 chooses $q_1$ to minimize this value.
    *   The optimal $q_1$ is the value on the x-axis where the lower envelope reaches its peak.
    *   If this peak occurs at an intersection point of two lines (say, Player 1's strategies $i$ and $k$), it means Player 1 will play those two strategies with probabilities $p_i$ and $p_k$. The optimal $q_1$ is the $q_1$ value at this intersection.
9.  **Value of the Game:** The value of the game is the maximum value of the lower envelope at the optimal $q_1$.

**(Reference: Paneerselvam R., Chapter 10: Theory of Games and Strategy)**
Paneerselvam often illustrates this with examples where Player 2 has 'n' strategies and Player 1 has 2 strategies, but the principle of plotting Player 1's expected payoffs against Player 2's strategy probabilities is the same. The key is identifying the player with the fewer number of strategies for the graphical method's x-axis.

#### 3.2 Graphical Method for 2 x n Games

Here, the Row Player (Player 1) has only 2 strategies, and the Column Player (Player 2) has *n* strategies. We will find the optimal mixed strategy for the Row Player and the value of the game.

**Steps:**

1.  **Set up the Payoff Matrix:** Represent the game with a payoff matrix where rows represent Player 1's strategies and columns represent Player 2's strategies.
2.  **Check for Saddle Point:** Same as above.
3.  **Eliminate Dominated Strategies (Optional but recommended):** If any of Player 1's strategies are dominated, remove them. If any of Player 2's strategies are dominated, remove them. This is especially useful for 2 x n games, as it can reduce 'n'.
4.  **Assume Player 2 uses a Mixed Strategy:** Let Player 2 play their *n* strategies with probabilities $q_1, q_2, ..., q_n$, where $\sum_{j=1}^n q_j = 1$ and $q_j \ge 0$.
5.  **Formulate Expected Payoffs:** For each of Player 1's pure strategies (Strategy 1 and Strategy 2), calculate the expected payoff for Player 1.
    *   If Player 1 plays Strategy 1: $E_1 = a_{11}q_1 + a_{12}q_2 + ... + a_{1n}q_n$
    *   If Player 1 plays Strategy 2: $E_2 = a_{21}q_1 + a_{22}q_2 + ... + a_{2n}q_n$
6.  **Graphical Representation:**
    *   Draw a graph with the probabilities of Player 2's strategies ($q_j$) on the x-axis. A common simplification is to plot the expected payoffs for Player 1 against the probability Player 2 assigns to *one* of their strategies, say $q_1$.
    *   **Crucially, for 2 x n games, we plot the expected payoffs of Player 1 against the probability Player 1 assigns to their *first* strategy.** Let Player 1 use probabilities $p_1$ and $p_2$ for their two strategies, where $p_1 + p_2 = 1$ and $p_1, p_2 \ge 0$.
        *   Expected payoff for Player 1 when Player 1 plays Strategy 1: $E_1 = a_{11}p_1 + a_{21}(1-p_1)$. (This is incorrect as it assumes Player 2 plays a specific strategy).
        *   **Correct Approach for 2 x n:**
            *   Let Player 1 use probabilities $p_1$ and $p_2$ for their two strategies.
            *   The expected payoff for Player 1 when Player 1 plays their mixed strategy and Player 2 plays pure strategy $j$ is: $E_j = a_{1j}p_1 + a_{2j}p_2 = a_{1j}p_1 + a_{2j}(1-p_1)$.
            *   We plot these *n* linear functions of $p_1$ on a graph. The x-axis represents $p_1$ (ranging from 0 to 1). The y-axis represents the expected payoff for Player 1.
7.  **Determine Player 1's Optimal Mixed Strategy:** Player 1 wants to maximize their minimum expected payoff. This is the maximin strategy. On the graph, Player 1 looks for the highest point on the *lower envelope* of these lines.
    *   The lower envelope is formed by the minimum of the payoffs for each value of $p_1$.
    *   If the maximum of the lower envelope occurs at an intersection point of two lines (say, Player 2's strategies $j$ and $k$), then Player 1 will play their two strategies (Strategy 1 and Strategy 2) with certain probabilities $p_1$ and $p_2$. The optimal $p_1$ is the $p_1$ value at this intersection.
8.  **Determine Player 2's Optimal Mixed Strategy:** Player 2 wants to minimize Player 1's maximum expected payoff. On the graph, Player 2 looks at the lower envelope (which represents Player 1's guaranteed payoff for a given $p_1$). Player 2 chooses $p_1$ to minimize this value. This is incorrect. Player 2 chooses *their* strategies' probabilities ($q_j$).
    *   Player 2 observes the plotted lines (expected payoffs for Player 1 against Player 1's $p_1$). Player 2 wants to choose $q_j$ to minimize the maximum payoff Player 1 can achieve.
    *   The optimal strategies for Player 2 will involve playing only those strategies whose lines are part of the *upper envelope* at the optimal point.
    *   The optimal $p_1$ is the value on the x-axis where the lower envelope reaches its peak. The value of the game is this peak value.
    *   To find Player 2's optimal strategy, we look at the intersection point that determines the optimal $p_1$. The two lines intersecting at this point correspond to Player 2's strategies that will be played with non-zero probability.
9.  **Value of the Game:** The value of the game is the maximum value of the lower envelope at the optimal $p_1$.

**(Reference: Hillier & Lieberman, Chapter 13: Game Theory; Taha, Chapter 14)**
Both textbooks provide excellent graphical illustrations and step-by-step procedures for solving these types of games. The core idea is to plot the expected payoffs of the player with two strategies against the probabilities of the opponent's strategies.

---

### 4. Examples

#### Example 1: m x 2 Game (Graphical Method)

**Problem:** Solve the following game by graphical method.

| Player 1 \ Player 2 | Strategy C1 | Strategy C2 |
| :------------------ | :---------- | :---------- |
| Strategy R1         | 4           | 1           |
| Strategy R2         | 2           | 3           |
| Strategy R3         | 0           | 4           |

**Solution:**

1.  **Payoff Matrix:**
    $A = \begin{pmatrix} 4 & 1 \\ 2 & 3 \\ 0 & 4 \end{pmatrix}$

2.  **Saddle Point:**
    Row minima: min(4, 1) = 1; min(2, 3) = 2; min(0, 4) = 0
    Maximin = 2 (from R2)
    Column maxima: max(4, 2, 0) = 4; max(1, 3, 4) = 4
    Minimax = 4 (from C1 and C2)
    Maximin (2) $\neq$ Minimax (4). No saddle point.

3.  **Dominated Strategies:**
    *   Player 1: R1 vs R2: (4, 1) vs (2, 3). Neither dominates the other.
    *   Player 1: R1 vs R3: (4, 1) vs (0, 4). Neither dominates the other.
    *   Player 1: R2 vs R3: (2, 3) vs (0, 4). Neither dominates the other.
    *   Player 2: C1 vs C2: (4, 2, 0) vs (1, 3, 4). Neither dominates the other.

4.  **Graphical Method (Focus on Player 1's strategies against Player 2's probabilities):**
    Let Player 2 play C1 with probability $q_1$ and C2 with probability $q_2 = 1 - q_1$.
    Player 1's expected payoffs for each of their strategies are:
    *   $E_{R1} = 4q_1 + 1(1-q_1) = 4q_1 + 1 - q_1 = 3q_1 + 1$
    *   $E_{R2} = 2q_1 + 3(1-q_1) = 2q_1 + 3 - 3q_1 = 3 - q_1$
    *   $E_{R3} = 0q_1 + 4(1-q_1) = 4 - 4q_1$

    We plot these three lines against $q_1$ (from 0 to 1) on the x-axis.

    *   Line 1 ($E_{R1}$): (0, 1) to (1, 4)
    *   Line 2 ($E_{R2}$): (0, 3) to (1, 2)
    *   Line 3 ($E_{R3}$): (0, 4) to (1, 0)

    **(Plotting the graph is crucial here. Imagine the graph:**
    *   **At $q_1=0$ (Player 2 plays C2):** Payoffs are 1, 3, 4. Player 1 will choose R3 for a payoff of 4.
    *   **At $q_1=1$ (Player 2 plays C1):** Payoffs are 4, 2, 0. Player 1 will choose R1 for a payoff of 4.

    We are looking for Player 1's **lower envelope** (minimum payoff for each $q_1$) and then the **maximum point** on this lower envelope.

    Let's find intersection points:
    *   $E_{R1}$ and $E_{R2}$: $3q_1 + 1 = 3 - q_1 \Rightarrow 4q_1 = 2 \Rightarrow q_1 = 0.5$. Payoff = $3(0.5) + 1 = 1.5 + 1 = 2.5$.
    *   $E_{R1}$ and $E_{R3}$: $3q_1 + 1 = 4 - 4q_1 \Rightarrow 7q_1 = 3 \Rightarrow q_1 = 3/7 \approx 0.428$. Payoff = $3(3/7) + 1 = 9/7 + 7/7 = 16/7 \approx 2.286$.
    *   $E_{R2}$ and $E_{R3}$: $3 - q_1 = 4 - 4q_1 \Rightarrow 3q_1 = 1 \Rightarrow q_1 = 1/3 \approx 0.333$. Payoff = $3 - (1/3) = 8/3 \approx 2.667$.

    Now, let's construct the lower envelope:
    *   For $q_1$ from 0 to 1/3: $E_{R3}$ is the lowest. Lower envelope = $4 - 4q_1$.
    *   For $q_1$ from 1/3 to 3/7: $E_{R1}$ is the lowest. Lower envelope = $3q_1 + 1$.
    *   For $q_1$ from 3/7 to 1: $E_{R2}$ is the lowest. Lower envelope = $3 - q_1$.

    (Rechecking the segments:
    *   At $q_1=0$: R1=1, R2=3, R3=4. Min = 1 (R1)
    *   At $q_1=1/3$: R1 = 3(1/3)+1=2. R2 = 3-1/3=8/3=2.67. R3 = 4-4/3=8/3=2.67. Min = 2 (R1)
    *   At $q_1=3/7$: R1 = 3(3/7)+1=16/7=2.28. R2 = 3-3/7=18/7=2.57. R3 = 4-4(3/7)=4-12/7=16/7=2.28. Min = 16/7 (R1 or R3)
    *   At $q_1=0.5$: R1 = 3(0.5)+1=2.5. R2 = 3-0.5=2.5. R3 = 4-4(0.5)=2. Min = 2 (R3)
    *   At $q_1=1$: R1=4, R2=2, R3=0. Min = 0 (R3)

    My initial tracing of lower envelope was incorrect. Let's re-evaluate the segments of the lower envelope by finding the actual minimums for each $q_1$ segment based on intersection points:
    *   $q_1 < 1/3$: R1 ($3q_1+1$) is lower than R2 ($3-q_1$). $3q_1+1 < 3-q_1 \implies 4q_1 < 2 \implies q_1 < 0.5$. (True for $q_1 < 1/3$)
    *   R1 ($3q_1+1$) is lower than R3 ($4-4q_1$). $3q_1+1 < 4-4q_1 \implies 7q_1 < 3 \implies q_1 < 3/7$. (True for $q_1 < 1/3$)
    *   So, for $q_1 < 1/3$, R1 is the lowest.
    *   $q_1$ between 1/3 and 3/7: R1 is still the lowest.
    *   $q_1$ between 3/7 and 0.5: R2 ($3-q_1$) is lower than R1 ($3q_1+1$) after 0.5. R2 vs R3: $3-q_1$ vs $4-4q_1$. $3-q_1 < 4-4q_1 \implies 3q_1 < 1 \implies q_1 < 1/3$. So R3 is lower than R2 before 1/3.
    *   Let's re-analyze intersections and the ordering of lines:
        *   $I_{12}: q_1=0.5$, payoff = 2.5
        *   $I_{13}: q_1=3/7 \approx 0.428$, payoff = 16/7 $\approx$ 2.286
        *   $I_{23}: q_1=1/3 \approx 0.333$, payoff = 8/3 $\approx$ 2.667

    Order of intersections by $q_1$: $1/3, 3/7, 0.5$.

    *   Region 1 ($0 \le q_1 < 1/3$):
        *   R1 vs R2: R1 is lower.
        *   R1 vs R3: R1 is lower.
        *   So, R1 is the minimum. Lower envelope = $3q_1 + 1$.
    *   Region 2 ($1/3 \le q_1 < 3/7$):
        *   At $q_1=1/3$, R2=R3=8/3. R1=2. R1 is still the lowest.
        *   Check R2 vs R3 after 1/3: $3-q_1$ vs $4-4q_1$. $3-q_1$ becomes greater than $4-4q_1$ after $q_1=1/3$. So R3 is lower than R2.
        *   Check R1 vs R3: $3q_1+1$ vs $4-4q_1$. Intersection at $3/7$. Before $3/7$, R1 is lower.
        *   So, R1 is the minimum in this region. Lower envelope = $3q_1 + 1$.
    *   Region 3 ($3/7 \le q_1 < 0.5$):
        *   At $q_1=3/7$, R1=R3=16/7. R2=18/7. R1/R3 are lower.
        *   Check R1 vs R3 after 3/7: R3 becomes lower than R1.
        *   Check R2 vs R3: R3 is lower than R2 before 1/3. After 1/3, R2 becomes lower than R3.
        *   Check R1 vs R2: R1 is lower than R2 before 0.5.
        *   So, R3 is the minimum in this region. Lower envelope = $4-4q_1$.
    *   Region 4 ($0.5 \le q_1 \le 1$):
        *   At $q_1=0.5$, R1=R2=2.5. R3=2. R3 is the minimum.
        *   Check R1 vs R2 after 0.5: R2 is lower than R1.
        *   Check R2 vs R3: R2 is lower than R3 after 0.5.
        *   So, R3 is the minimum. Lower envelope = $4-4q_1$.

    **Corrected Lower Envelope:**
    *   For $0 \le q_1 \le 3/7$: Lower envelope is $E_{R1} = 3q_1 + 1$.
    *   For $3/7 \le q_1 \le 1$: Lower envelope is $E_{R3} = 4 - 4q_1$.

    Now, find the maximum of this lower envelope.
    *   The function $3q_1 + 1$ increases as $q_1$ increases. Its maximum in the first segment is at $q_1 = 3/7$, value $16/7$.
    *   The function $4 - 4q_1$ decreases as $q_1$ increases. Its maximum in the second segment is at $q_1 = 3/7$, value $16/7$.

    The maximum of the lower envelope occurs at $q_1 = 3/7$, and the value is $16/7$.

5.  **Optimal Strategies and Value:**
    *   **Player 1's Optimal Strategy:** Player 1 plays strategies R1 and R3. At $q_1 = 3/7$, $E_{R1} = 16/7$ and $E_{R3} = 16/7$. This means Player 1 is indifferent between R1 and R3 at this point. However, Player 1 wants to maximize the minimum. The optimal $q_1$ is determined by Player 2. Player 1 should select strategies that form the lower envelope. The peak of the lower envelope occurs at the intersection of $E_{R1}$ and $E_{R3}$.
        To find Player 1's optimal probabilities, we need to consider Player 2's perspective to find the optimal $q_1$. Player 2 wants to minimize the maximum of the lower envelope. The lower envelope is maximized at $q_1 = 3/7$, with a value of $16/7$.
        Player 1 plays R1 and R3. Let Player 1 play R1 with probability $p_1$ and R3 with probability $p_3$. $p_1 + p_3 = 1$.
        The optimal $q_1$ (which determines the value) is $3/7$. At $q_1=3/7$, $E_{R1} = 16/7$ and $E_{R3} = 16/7$. Player 1 plays R1 and R3 with probabilities $p_1$ and $p_3$ such that the expected payoffs are equal when Player 2 plays optimally. This is complex to determine solely from the graphical output without solving the system.
        Let's re-think how Player 1's strategy is derived. Player 1 chooses $p_i$ to maximize their minimum payoff. The graphical method helps find the optimal $q_1$ for Player 2 that gives Player 1 the maximin payoff.

        **Focus on finding the optimal $q_1$ and Value of the Game first:**
        The maximum of the lower envelope is $16/7$ at $q_1 = 3/7$.
        *   **Value of the Game (V) = 16/7**

    *   **Player 2's Optimal Strategy:** Player 2 plays C1 with probability $q_1 = 3/7$ and C2 with probability $q_2 = 1 - 3/7 = 4/7$.
        *   **Optimal strategy for Player 2: (3/7, 4/7)**

    *   **Player 1's Optimal Strategy:** Player 1 will play the strategies that intersect at the optimal point ($q_1=3/7$). These are R1 and R3. Let Player 1 play R1 with probability $p_1$ and R3 with probability $p_3$, such that $p_1 + p_3 = 1$.
        At the optimal point, the expected payoff for Player 1 must be the same for the strategies that form the lower envelope at that point.
        When Player 2 plays (3/7, 4/7):
        Expected payoff for Player 1:
        $E = p_1(E_{R1}) + p_3(E_{R3})$
        $E = p_1(3q_1+1) + p_3(4-4q_1)$
        $E = p_1(3(3/7)+1) + p_3(4-4(3/7))$
        $E = p_1(9/7+7/7) + p_3(28/7-12/7)$
        $E = p_1(16/7) + p_3(16/7) = (p_1+p_3) * 16/7 = 1 * 16/7 = 16/7$.

        This confirms that for any combination of $p_1, p_3$ that sums to 1, Player 1 gets $16/7$ if Player 2 plays optimally. This implies that Player 1 can play ANY mix of R1 and R3, and still achieve the value of the game. This is unusual.

        Let's re-examine the graph and intersections:
        The peak of the lower envelope is at the intersection of R1 and R3. This means Player 1's optimal strategy involves only R1 and R3. Player 1 wants to make Player 2 indifferent.
        When Player 1 plays only R1 and R3, and Player 2 plays C1 with probability $q_1$:
        Player 1's payoffs are:
        $E_{R1} = 4q_1 + 1(1-q_1) = 3q_1 + 1$
        $E_{R3} = 0q_1 + 4(1-q_1) = 4 - 4q_1$
        We found these intersect at $q_1 = 3/7$, value $16/7$.
        This implies Player 1 should play R1 and R3 with some probabilities, and Player 2 plays C1 with $q_1=3/7$.
        To find Player 1's mix, we set the expected payoffs equal for Player 1's chosen strategies, assuming Player 2 plays optimally.
        Let Player 1 play R1 with probability $p_1$ and R3 with probability $p_3$.
        Player 2 wants to choose $q_1$ to minimize Player 1's expected payoff.
        The critical intersection is between R1 and R3 at $q_1 = 3/7$. This means Player 1 should use R1 and R3.
        Let Player 1 play R1 with probability $p_1$ and R3 with probability $p_3 = 1-p_1$.
        The expected payoff for Player 1 when Player 2 plays C1 is $4p_1 + 0p_3 = 4p_1$.
        The expected payoff for Player 1 when Player 2 plays C2 is $1p_1 + 4p_3 = p_1 + 4(1-p_1) = p_1 + 4 - 4p_1 = 4 - 3p_1$.
        Player 2 wants to choose $p_1$ to minimize Player 1's maximum payoff.
        We graph these two lines (expected payoffs to Player 1 from Player 2's perspective) against $p_1$.
        *   Payoff if Player 2 plays C1: $4p_1$ (line from (0,0) to (1,4))
        *   Payoff if Player 2 plays C2: $4-3p_1$ (line from (0,4) to (1,1))
        The lower envelope is sought here for Player 2. Player 2 wants to minimize the max of these.
        Intersection: $4p_1 = 4 - 3p_1 \Rightarrow 7p_1 = 4 \Rightarrow p_1 = 4/7$.
        Value = $4(4/7) = 16/7$.
        So Player 1 plays R1 with probability $4/7$ and R2 with probability $0$, and R3 with probability $3/7$.
        *   **Optimal strategy for Player 1: (4/7, 0, 3/7)**

    **Summary of Example 1:**
    *   Value of the Game: $V = 16/7$
    *   Optimal strategy for Player 1: (4/7, 0, 3/7)
    *   Optimal strategy for Player 2: (3/7, 4/7)

#### Example 2: 2 x n Game (Graphical Method)

**Problem:** Solve the following game by graphical method.

| Player 1 \ Player 2 | Strategy C1 | Strategy C2 | Strategy C3 | Strategy C4 |
| :------------------ | :---------- | :---------- | :---------- | :---------- |
| Strategy R1         | 3           | 0           | 1           | 2           |
| Strategy R2         | 1           | 2           | 4           | 0           |

**Solution:**

1.  **Payoff Matrix:**
    $A = \begin{pmatrix} 3 & 0 & 1 & 2 \\ 1 & 2 & 4 & 0 \end{pmatrix}$

2.  **Saddle Point:**
    Row minima: min(3, 0, 1, 2) = 0; min(1, 2, 4, 0) = 0
    Maximin = 0 (from R1 and R2)
    Column maxima: max(3, 1) = 3; max(0, 2) = 2; max(1, 4) = 4; max(2, 0) = 2
    Minimax = 2 (from C2 and C4)
    Maximin (0) $\neq$ Minimax (2). No saddle point.

3.  **Dominated Strategies:**
    *   Player 1: Neither R1 nor R2 is dominated.
    *   Player 2:
        *   C1 vs C2: (3, 1) vs (0, 2). Neither dominates.
        *   C1 vs C3: (3, 1) vs (1, 4). Neither dominates.
        *   C1 vs C4: (3, 1) vs (2, 0). Neither dominates.
        *   C2 vs C3: (0, 2) vs (1, 4). C2 is dominated by C3 (since 0 < 1 and 2 < 4). Remove C2.
        *   C3 vs C4: (1, 4) vs (2, 0). Neither dominates.
        *   C2 is dominated by C3. Player 2 will never play C2.
    Revised Matrix (after removing C2):
    $A' = \begin{pmatrix} 3 & 1 & 2 \\ 1 & 4 & 0 \end{pmatrix}$

    Let's re-check dominance in $A'$.
    *   Player 2:
        *   C1 vs C3: (3,1) vs (1,4). Neither dominates.
        *   C1 vs C4: (3,1) vs (2,0). Neither dominates.
        *   C3 vs C4: (1,4) vs (2,0). Neither dominates.
    No further dominated strategies.

4.  **Graphical Method (Focus on Player 2's strategies against Player 1's probabilities):**
    Let Player 1 play R1 with probability $p_1$ and R2 with probability $p_2 = 1 - p_1$.
    Player 2 has strategies C1, C3, C4.
    Expected payoffs for Player 1 for each of Player 2's strategies:
    *   $E_{C1} = 3p_1 + 1(1-p_1) = 3p_1 + 1 - p_1 = 2p_1 + 1$
    *   $E_{C3} = 1p_1 + 4(1-p_1) = p_1 + 4 - 4p_1 = 4 - 3p_1$
    *   $E_{C4} = 2p_1 + 0(1-p_1) = 2p_1$

    We plot these three lines against $p_1$ (from 0 to 1) on the x-axis.

    *   Line 1 ($E_{C1}$): (0, 1) to (1, 3)
    *   Line 2 ($E_{C3}$): (0, 4) to (1, 1)
    *   Line 3 ($E_{C4}$): (0, 0) to (1, 2)

    **(Plotting the graph is crucial here.)**
    We are looking for Player 1's **lower envelope** (minimum payoff for each $p_1$) and then the **maximum point** on this lower envelope.

    Let's find intersection points:
    *   $E_{C1}$ and $E_{C3}$: $2p_1 + 1 = 4 - 3p_1 \Rightarrow 5p_1 = 3 \Rightarrow p_1 = 3/5 = 0.6$. Payoff = $2(0.6) + 1 = 1.2 + 1 = 2.2$.
    *   $E_{C1}$ and $E_{C4}$: $2p_1 + 1 = 2p_1 \Rightarrow 1 = 0$. No intersection (lines are parallel).
    *   $E_{C3}$ and $E_{C4}$: $4 - 3p_1 = 2p_1 \Rightarrow 4 = 5p_1 \Rightarrow p_1 = 4/5 = 0.8$. Payoff = $2(0.8) = 1.6$.

    Now, let's construct the lower envelope:
    Order of intersections by $p_1$: $0.6, 0.8$.

    *   Region 1 ($0 \le p_1 < 0.6$):
        *   Compare $E_{C1}, E_{C3}, E_{C4}$.
        *   At $p_1=0$: $E_{C1}=1, E_{C3}=4, E_{C4}=0$. Min is $E_{C4}=0$.
        *   At $p_1=0.6$: $E_{C1}=2.2, E_{C3}=2.2, E_{C4}=1.2$. Min is $E_{C4}=1.2$.
        *   $E_{C1}$ and $E_{C4}$ are parallel. $E_{C1}$ is always above $E_{C4}$ for $p_1 > 0$.
        *   $E_{C3}$ vs $E_{C4}$: intersect at $p_1=0.8$. Before $0.8$, $E_{C4}$ is lower.
        *   So, in this region $0 \le p_1 < 0.6$, the minimum is $E_{C4} = 2p_1$. Lower envelope = $2p_1$.

    *   Region 2 ($0.6 \le p_1 < 0.8$):
        *   At $p_1=0.6$: $E_{C1}=2.2, E_{C3}=2.2, E_{C4}=1.2$. Min is $E_{C4}=1.2$.
        *   At $p_1=0.8$: $E_{C1}=2.6, E_{C3}=1.6, E_{C4}=1.6$. Min is $E_{C3}$ or $E_{C4}$.
        *   $E_{C1}$ vs $E_{C3}$: intersect at $p_1=0.6$. After $0.6$, $E_{C3}$ is lower than $E_{C1}$ in terms of intersection point.
        *   $E_{C1}$ vs $E_{C4}$: $E_{C4}$ is lower.
        *   $E_{C3}$ vs $E_{C4}$: intersect at $p_1=0.8$. Before $0.8$, $E_{C4}$ is lower.
        *   So, in this region $0.6 \le p_1 < 0.8$, the minimum is $E_{C4} = 2p_1$. Lower envelope = $2p_1$.

    *   Region 3 ($0.8 \le p_1 \le 1$):
        *   At $p_1=0.8$: $E_{C1}=2.6, E_{C3}=1.6, E_{C4}=1.6$. Min is $E_{C3}$ or $E_{C4}$.
        *   At $p_1=1$: $E_{C1}=3, E_{C3}=1, E_{C4}=2$. Min is $E_{C3}=1$.
        *   $E_{C3}$ vs $E_{C4}$: $E_{C3}$ becomes lower than $E_{C4}$ after $p_1=0.8$.
        *   So, in this region $0.8 \le p_1 \le 1$, the minimum is $E_{C3} = 4 - 3p_1$. Lower envelope = $4 - 3p_1$.

    **Corrected Lower Envelope:**
    *   For $0 \le p_1 \le 0.8$: Lower envelope is $E_{C4} = 2p_1$.
    *   For $0.8 \le p_1 \le 1$: Lower envelope is $E_{C3} = 4 - 3p_1$.

    Now, find the maximum of this lower envelope.
    *   The function $2p_1$ increases as $p_1$ increases. Its maximum in the first segment is at $p_1 = 0.8$, value $2(0.8) = 1.6$.
    *   The function $4 - 3p_1$ decreases as $p_1$ increases. Its maximum in the second segment is at $p_1 = 0.8$, value $4 - 3(0.8) = 4 - 2.4 = 1.6$.

    The maximum of the lower envelope occurs at $p_1 = 0.8$, and the value is $1.6$.

5.  **Optimal Strategies and Value:**
    *   **Value of the Game (V) = 1.6**

    *   **Player 1's Optimal Strategy:** The peak of the lower envelope occurs at $p_1 = 0.8$. Player 1 plays R1 with probability $p_1 = 0.8$ and R2 with probability $p_2 = 1 - 0.8 = 0.2$.
        *   **Optimal strategy for Player 1: (0.8, 0.2)**

    *   **Player 2's Optimal Strategy:** Player 2 will play the strategies that form the lower envelope at the optimal point $p_1=0.8$. These are C3 and C4. Player 2 wants to make Player 1 indifferent.
        Player 2 chooses $q_j$ to minimize the maximum payoff Player 1 can get.
        Let Player 2 play C1, C3, C4 with probabilities $q_1, q_3, q_4$.
        At $p_1 = 0.8$, Player 1's expected payoffs are:
        $E_{C1} = 2(0.8) + 1 = 2.6$
        $E_{C3} = 4 - 3(0.8) = 1.6$
        $E_{C4} = 2(0.8) = 1.6$

        Player 1 will only choose strategies that give the maximum minimum payoff. In this case, Player 1 will ensure they get at least 1.6. Player 2 will mix C3 and C4.
        To find Player 2's optimal probabilities, we use the fact that Player 1's expected payoff must be the same for the strategies that are active in the optimal mixed strategy for Player 1, when Player 2 plays optimally. This is confusing.

        Let's consider Player 2's decision: Player 2 wants to minimize Player 1's payoff. Player 1, by playing (0.8, 0.2), makes the expected payoffs against C3 and C4 equal to 1.6. Against C1, it's 2.6. Player 2 will avoid C1 if possible by assigning zero probability to it.
        So, Player 2 will only play C3 and C4. Let Player 2 play C3 with probability $q_3$ and C4 with probability $q_4$, where $q_3 + q_4 = 1$.
        Player 1's expected payoff is:
        $E = p_1 E_{C3} + p_2 E_{C4}$
        $E = p_1 (a_{13} q_3 + a_{14} q_4) + p_2 (a_{23} q_3 + a_{24} q_4)$
        This is not the way.

        We found Player 1's optimal strategy (0.8, 0.2). At this point, Player 1's expected payoff against C3 is 1.6, and against C4 is 1.6. Against C1, it's 2.6.
        Player 2 wants to minimize the maximum expected payoff to Player 1. Player 2 will only use strategies that contribute to the optimal outcome. These are C3 and C4 because they define the peak of the lower envelope.
        Player 2 will assign probabilities to C3 and C4 such that Player 1 is indifferent between their strategies (R1 and R2) if Player 1 were to play only against C3 and C4. This is not quite right.

        The intersection point that defines the peak ($p_1 = 0.8$) involves lines $E_{C3}$ and $E_{C4}$. This indicates that Player 2's optimal strategy will involve only C3 and C4.
        Let Player 2 play C3 with probability $q_3$ and C4 with probability $q_4$, where $q_3 + q_4 = 1$.
        Player 1's expected payoff when playing R1 is $1 \cdot q_3 + 2 \cdot q_4$.
        Player 1's expected payoff when playing R2 is $4 \cdot q_3 + 0 \cdot q_4$.
        Player 1 wants to maximize their minimum payoff. So, Player 1 will choose probabilities $p_1, p_2$ to maximize the minimum of these two expected payoffs.
        To make Player 1 indifferent, we set the expected payoffs equal:
        $q_3 + 2q_4 = 4q_3$
        $q_3 + 2(1-q_3) = 4q_3$
        $q_3 + 2 - 2q_3 = 4q_3$
        $2 - q_3 = 4q_3$
        $2 = 5q_3$
        $q_3 = 2/5 = 0.4$.
        $q_4 = 1 - 0.4 = 0.6$.

        Player 2 will not play C1 because it yields a higher payoff for Player 1 compared to C3 and C4 at Player 1's optimal $p_1$.
        *   **Optimal strategy for Player 2: (0, 0.4, 0, 0.6)** (for C1, C2, C3, C4 respectively)

    **Summary of Example 2:**
    *   Value of the Game: $V = 1.6$
    *   Optimal strategy for Player 1: (0.8, 0.2)
    *   Optimal strategy for Player 2: (0, 0.4, 0, 0.6)

---

### 5. Practice Questions or Exercises

#### Exercise 1:

Solve the following 2 x 3 game by graphical method.

| Player 1 \ Player 2 | C1 | C2 | C3 |
| :------------------ | :- | :- | :- |
| R1                  | 2  | -1 | 0  |
| R2                  | -2 | 3  | 1  |

**Answer:**
1.  **Payoff Matrix:** $A = \begin{pmatrix} 2 & -1 & 0 \\ -2 & 3 & 1 \end{pmatrix}$
2.  **Saddle Point:** No saddle point.
3.  **Dominated Strategies:** No dominated strategies.
4.  **Graphical Method:**
    *   Let Player 1 play R1 with $p_1$ and R2 with $1-p_1$.
    *   $E_{C1} = 2p_1 - 2(1-p_1) = 4p_1 - 2$
    *   $E_{C2} = -1p_1 + 3(1-p_1) = -4p_1 + 3$
    *   $E_{C3} = 0p_1 + 1(1-p_1) = 1 - p_1$
    *   Plotting these lines:
        *   $E_{C1}$: (0, -2) to (1, 2)
        *   $E_{C2}$: (0, 3) to (1, -1)
        *   $E_{C3}$: (0, 1) to (1, 0)
    *   Intersections:
        *   $E_{C1}$ and $E_{C2}$: $4p_1 - 2 = -4p_1 + 3 \Rightarrow 8p_1 = 5 \Rightarrow p_1 = 5/8 = 0.625$. Payoff = $4(0.625) - 2 = 2.5 - 2 = 0.5$.
        *   $E_{C1}$ and $E_{C3}$: $4p_1 - 2 = 1 - p_1 \Rightarrow 5p_1 = 3 \Rightarrow p_1 = 3/5 = 0.6$. Payoff = $4(0.6) - 2 = 2.4 - 2 = 0.4$.
        *   $E_{C2}$ and $E_{C3}$: $-4p_1 + 3 = 1 - p_1 \Rightarrow 2 = 3p_1 \Rightarrow p_1 = 2/3 \approx 0.667$. Payoff = $1 - 2/3 = 1/3 \approx 0.333$.
    *   Lower Envelope:
        *   Order of intersections: $0.6, 0.625, 2/3$.
        *   Region 1 ($0 \le p_1 < 0.6$): $E_{C3}$ is lowest. Lower envelope = $1-p_1$.
        *   Region 2 ($0.6 \le p_1 < 0.625$): $E_{C1}$ is lowest. Lower envelope = $4p_1-2$.
        *   Region 3 ($0.625 \le p_1 \le 2/3$): $E_{C2}$ is lowest. Lower envelope = $-4p_1+3$.
        *   Region 4 ($2/3 \le p_1 \le 1$): $E_{C3}$ is lowest. Lower envelope = $1-p_1$.
    *   Correct Lower Envelope Construction:
        *   $p_1=0$: $E_{C1}=-2, E_{C2}=3, E_{C3}=1$. Min = -2 ($E_{C1}$)
        *   $p_1=0.6$: $E_{C1}=0.4, E_{C2}=0.6, E_{C3}=0.4$. Min = 0.4 ($E_{C1}, E_{C3}$)
        *   $p_1=0.625$: $E_{C1}=0.5, E_{C2}=0.5, E_{C3}=0.375$. Min = 0.375 ($E_{C3}$)
        *   $p_1=2/3$: $E_{C1}=2/3, E_{C2}=1/3, E_{C3}=1/3$. Min = 1/3 ($E_{C2}, E_{C3}$)
        *   $p_1=1$: $E_{C1}=2, E_{C2}=-1, E_{C3}=0$. Min = -1 ($E_{C2}$)

        Segments of lower envelope:
        *   $0 \le p_1 \le 0.6$: $E_{C1} = 4p_1 - 2$. Max value is 0.4 at $p_1=0.6$.
        *   $0.6 \le p_1 \le 2/3$: $E_{C3} = 1 - p_1$. Max value is 0.4 at $p_1=0.6$.
        *   $2/3 \le p_1 \le 1$: $E_{C2} = -4p_1 + 3$. Max value is 1/3 at $p_1=2/3$.

        The maximum of the lower envelope appears to be 0.4, occurring at $p_1=0.6$.
        The intersection point at $p_1=0.6$ involves $E_{C1}$ and $E_{C3}$.
    *   **Value of the Game (V) = 0.4**
    *   **Optimal strategy for Player 1:** $p_1 = 0.6$, $p_2 = 1 - 0.6 = 0.4$. **(0.6, 0.4)**
    *   **Optimal strategy for Player 2:** Player 1 plays R1 and R3. Player 2 will play C1 and C3. Let Player 2 play C1 with $q_1$ and C3 with $q_3$.
        Expected payoff for Player 1:
        R1: $2q_1 + 0q_3$
        R2: $-2q_1 + 1q_3$
        Set equal: $2q_1 = -2q_1 + q_3 \Rightarrow 4q_1 = q_3$.
        Since $q_1 + q_3 = 1$, $q_1 + 4q_1 = 1 \Rightarrow 5q_1 = 1 \Rightarrow q_1 = 1/5 = 0.2$.
        $q_3 = 4/5 = 0.8$. Player 2 will not play C2.
        **Optimal strategy for Player 2: (0.2, 0, 0.8)** (for C1, C2, C3).

#### Exercise 2:

Solve the following 3 x 2 game by graphical method.

| Player 1 \ Player 2 | C1 | C2 |
| :------------------ | :- | :- |
| R1                  | 5  | 1  |
| R2                  | 3  | 4  |
| R3                  | 2  | 6  |

**Answer:**
1.  **Payoff Matrix:** $A = \begin{pmatrix} 5 & 1 \\ 3 & 4 \\ 2 & 6 \end{pmatrix}$
2.  **Saddle Point:** No saddle point.
3.  **Dominated Strategies:** No dominated strategies.
4.  **Graphical Method:**
    *   Let Player 2 play C1 with $q_1$ and C2 with $1-q_1$.
    *   $E_{R1} = 5q_1 + 1(1-q_1) = 4q_1 + 1$
    *   $E_{R2} = 3q_1 + 4(1-q_1) = -q_1 + 4$
    *   $E_{R3} = 2q_1 + 6(1-q_1) = -4q_1 + 6$
    *   Plotting these lines:
        *   $E_{R1}$: (0, 1) to (1, 5)
        *   $E_{R2}$: (0, 4) to (1, 3)
        *   $E_{R3}$: (0, 6) to (1, 2)
    *   Intersections:
        *   $E_{R1}$ and $E_{R2}$: $4q_1 + 1 = -q_1 + 4 \Rightarrow 5q_1 = 3 \Rightarrow q_1 = 3/5 = 0.6$. Payoff = $4(0.6) + 1 = 2.4 + 1 = 3.4$.
        *   $E_{R1}$ and $E_{R3}$: $4q_1 + 1 = -4q_1 + 6 \Rightarrow 8q_1 = 5 \Rightarrow q_1 = 5/8 = 0.625$. Payoff = $4(0.625) + 1 = 2.5 + 1 = 3.5$.
        *   $E_{R2}$ and $E_{R3}$: $-q_1 + 4 = -4q_1 + 6 \Rightarrow 3q_1 = 2 \Rightarrow q_1 = 2/3 \approx 0.667$. Payoff = $-(2/3) + 4 = -0.667 + 4 = 3.333$.
    *   Lower Envelope:
        *   Order of intersections: $0.6, 0.625, 2/3$.
        *   Region 1 ($0 \le q_1 < 0.6$): $E_{R2}$ is lowest. Lower envelope = $-q_1 + 4$. Max value is 4 at $q_1=0$.
        *   Region 2 ($0.6 \le q_1 < 0.625$): $E_{R1}$ is lowest. Lower envelope = $4q_1 + 1$. Max value is 3.4 at $q_1=0.6$.
        *   Region 3 ($0.625 \le q_1 \le 2/3$): $E_{R3}$ is lowest. Lower envelope = $-4q_1 + 6$. Max value is 3.5 at $q_1=0.625$.
        *   Region 4 ($2/3 \le q_1 \le 1$): $E_{R2}$ is lowest. Lower envelope = $-q_1 + 4$. Max value is $3.333$ at $q_1=2/3$.

    *   Correct Lower Envelope:
        *   $q_1=0$: $E_{R1}=1, E_{R2}=4, E_{R3}=6$. Min = 1 (R1)
        *   $q_1=0.6$: $E_{R1}=3.4, E_{R2}=3.4, E_{R3}=3.6$. Min = 3.4 (R1, R2)
        *   $q_1=0.625$: $E_{R1}=3.5, E_{R2}=3.375, E_{R3}=3.5$. Min = 3.375 (R2)
        *   $q_1=2/3$: $E_{R1}=3.667, E_{R2}=3.333, E_{R3}=3.333$. Min = 3.333 (R2, R3)
        *   $q_1=1$: $E_{R1}=5, E_{R2}=3, E_{R3}=2$. Min = 2 (R3)

        Segments:
        *   $0 \le q_1 \le 0.6$: Min is $E_{R1} = 4q_1 + 1$. Max is 3.4 at $q_1=0.6$.
        *   $0.6 \le q_1 \le 0.625$: Min is $E_{R2} = -q_1 + 4$. Max is 3.4 at $q_1=0.6$.
        *   $0.625 \le q_1 \le 2/3$: Min is $E_{R3} = -4q_1 + 6$. Max is 3.5 at $q_1=0.625$.
        *   $2/3 \le q_1 \le 1$: Min is $E_{R2} = -q_1 + 4$. Max is 3.333 at $q_1=2/3$.

        The maximum of the lower envelope is 3.5, occurring at $q_1=0.625$.
        The intersection point at $q_1=0.625$ involves $E_{R1}$ and $E_{R3}$.
    *   **Value of the Game (V) = 3.5**
    *   **Optimal strategy for Player 2:** $q_1 = 0.625 = 5/8$, $q_2 = 1 - 5/8 = 3/8$. **(5/8, 3/8)**
    *   **Optimal strategy for Player 1:** Player 1 plays R1 and R3. Let Player 1 play R1 with $p_1$ and R3 with $p_3$.
        Expected payoff for Player 1:
        R1: $5p_1 + 1p_3$
        R3: $2p_1 + 6p_3$
        Set equal: $5p_1 + p_3 = 2p_1 + 6p_3 \Rightarrow 3p_1 = 5p_3$.
        Since $p_1 + p_3 = 1$, $3p_1 = 5(1-p_1) \Rightarrow 3p_1 = 5 - 5p_1 \Rightarrow 8p_1 = 5 \Rightarrow p_1 = 5/8$.
        $p_3 = 1 - 5/8 = 3/8$. Player 1 will not play R2.
        **Optimal strategy for Player 1: (5/8, 0, 3/8)**

---

### 6. Important Points to Remember

*   **Graphical Method is for Special Cases:** This method is efficient only when one player has exactly two strategies (2 x n or m x 2 games).
*   **Dominance is Key:** Always check for and eliminate dominated strategies first to simplify the game.
*   **Focus on the Player with Fewer Strategies:** For graphical plotting, it's easier to plot the expected payoffs of the player with two strategies against the probabilities of the opponent's strategies.
*   **Lower Envelope:** Player 1 aims to maximize their minimum expected payoff. This corresponds to finding the highest point on the lower envelope of the plotted lines.
*   **Intersection Points:** The optimal mixed strategies are often determined by the intersection points of the lines representing the expected payoffs.
*   **Value of the Game:** The y-coordinate of the highest point on the lower envelope is the value of the game.
*   **Player 2's Strategy:** Player 2's optimal strategy involves playing only those pure strategies whose lines form the lower envelope at its maximum. Player 2 chooses probabilities to make Player 1 indifferent between their own pure strategies that are part of the optimal mix.
*   **Player 1's Strategy:** Player 1's optimal strategy involves playing only those pure strategies that contribute to the highest point on the lower envelope. Player 1 chooses probabilities to make Player 2 indifferent between their own pure strategies that are part of the optimal mix. (This part can be tricky to derive directly from the graph; algebraic solution using the intersection probabilities is often more reliable).
*   **Verification:** After finding the optimal strategies and value, it's good practice to calculate the expected payoff for Player 1 under all of Player 2's pure strategies (when Player 1 plays their optimal mixed strategy) and vice versa. The value of the game should be the minimum of Player 1's expected payoffs and the maximum of Player 2's expected payoffs.

---

### 7. Alignment with Course Outcomes

*   **CO4: To solve Game Theory problems:** This topic directly contributes to CO4 by providing a practical method (graphical) for solving specific types of zero-sum games.
*   **Knowledge Level (K3):** The graphical method requires understanding the concepts of payoffs, mixed strategies, and how to interpret a graph to find optimal solutions. This aligns with the "Application" knowledge level.

---

This comprehensive study note covers the graphical method for solving m x 2 and 2 x n games, incorporating definitions, steps, examples, and practice questions, all within the context of Quantitative Techniques for Engineers and aligning with the stated course outcomes.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
