---
title: "Mini-Max and Maxi-Min Theorems (statement only)"
subject: "OPTIMIZATION TECHNIQUES"
module: "Module 2: Game Theory: Introduction"
branch: "Mechanical Engineering"
semester: 7
topicId: "68a3fd1851d0cf48044641cc"
status: "completed"
scrapedAt: "2026-05-20T18:15:56.581Z"
---
# Optimization Techniques: Module 2: Game Theory - Mini-Max and Maxi-Min Theorems

## Topic: Mini-Max and Maxi-Min Theorems (Statement Only)

This module introduces the fundamental concepts of Game Theory, a branch of optimization that deals with strategic decision-making in situations where the outcome depends on the choices of multiple rational individuals. We will focus on zero-sum games and the core theorems that underpin their solution: the Mini-Max and Maxi-Min Theorems.

---

### 1. Learning Outcomes Covered

This section focuses on understanding the theoretical basis of solving zero-sum games, which directly supports:

*   **CO2: Apply different methods of Game Theory, Network Tree and Shortest Path.** (While this topic doesn't cover *applying* methods directly, it establishes the theoretical foundation upon which those methods are built.)

---

### 2. Key Concepts and Definitions

**2.1 Game Theory:**
A mathematical framework for analyzing situations where two or more intelligent participants (players) interact, and the outcome of each player's decision depends on the decisions made by the other players.

**2.2 Players:**
The decision-makers in a game. In a two-player game, we typically refer to Player 1 (Row Player) and Player 2 (Column Player).

**2.3 Strategies:**
The set of all possible actions a player can take.

**2.4 Payoff Matrix:**
A table that shows the payoffs to each player for every possible combination of strategies chosen by the players. In a two-player zero-sum game, the entries in the matrix represent the payoff to Player 1, and the payoff to Player 2 is the negative of this value.

**2.5 Zero-Sum Game:**
A game where the total gains of the participants are exactly balanced by their total losses. In a two-player zero-sum game, if one player wins $X$ units, the other player loses $X$ units.

**2.6 Saddle Point:**
An element in the payoff matrix that is simultaneously the minimum value in its row and the maximum value in its column. A saddle point represents an equilibrium strategy where neither player can improve their outcome by unilaterally changing their strategy.

**2.7 Value of the Game:**
The expected payoff to Player 1 when both players play their optimal strategies. If a saddle point exists, the value of the game is the value at the saddle point.

**2.8 Pure Strategy:**
A strategy where a player chooses a single action with certainty.

**2.9 Mixed Strategy:**
A strategy where a player chooses among their available actions according to a probability distribution.

---

### 3. Mini-Max and Maxi-Min Theorems (Statements Only)

These theorems are crucial for understanding the existence of optimal strategies in zero-sum games.

**3.1 Maxi-Min Theorem (for Player 1 - Row Player):**

*   **Statement:** For any two-person zero-sum game, there exists a value $v_1$ such that Player 1 can guarantee a payoff of at least $v_1$, regardless of what Player 2 does. This value $v_1$ is obtained by Player 1 playing their **maxi-min strategy**.
    
    The **maxi-min value** is found by:
    1.  For each row (Player 1's strategy), find the minimum payoff (representing the worst-case scenario for Player 1).
    2.  Choose the row that has the maximum of these minimum payoffs.
    
    Mathematically, Player 1 seeks to maximize their minimum guaranteed payoff:
    
    $$ \max_{i} \left( \min_{j} a_{ij} \right) $$
    
    where $a_{ij}$ is the payoff to Player 1 when Player 1 chooses strategy $i$ and Player 2 chooses strategy $j$.

**3.2 Mini-Max Theorem (for Player 2 - Column Player):**

*   **Statement:** For any two-person zero-sum game, there exists a value $v_2$ such that Player 2 can guarantee that Player 1's payoff is at most $v_2$, regardless of what Player 1 does. This value $v_2$ is obtained by Player 2 playing their **mini-max strategy**.
    
    The **mini-max value** is found by:
    1.  For each column (Player 2's strategy), find the maximum payoff (representing the worst-case scenario for Player 2, which is the best outcome for Player 1 given Player 2's choice).
    2.  Choose the column that has the minimum of these maximum payoffs.
    
    Mathematically, Player 2 seeks to minimize the maximum payoff Player 1 can achieve:
    
    $$ \min_{j} \left( \max_{i} a_{ij} \right) $$
    
    where $a_{ij}$ is the payoff to Player 1 when Player 1 chooses strategy $i$ and Player 2 chooses strategy $j$.

**3.3 The Minimax Theorem (The Main Theorem):**

*   **Statement:** For any two-person zero-sum game, the maxi-min value is equal to the mini-max value. This common value is called the **value of the game**, and it represents the optimal outcome that can be achieved by both players playing their best strategies (either pure or mixed).
    
    $$ \max_{i} \left( \min_{j} a_{ij} \right) = \min_{j} \left( \max_{i} a_{ij} \right) = V $$
    
    where $V$ is the value of the game.

**Important Implication:**
The Minimax Theorem guarantees that a saddle point (in terms of pure strategies) exists if and only if the maxi-min value equals the mini-max value. If they are not equal, the optimal strategies will be mixed strategies, and the value of the game will lie between the maxi-min and mini-max values.

---

### 4. Examples (Illustrative - focused on understanding the calculation, not full game solution)

Let's consider a simple payoff matrix for Player 1:

$$
A = \begin{pmatrix}
3 & 1 & 5 \\
2 & 4 & 6
\end{pmatrix}
$$

**4.1 Finding the Maxi-Min for Player 1:**

*   **Row 1 minimum:** $\min(3, 1, 5) = 1$
*   **Row 2 minimum:** $\min(2, 4, 6) = 2$

*   **Maxi-min:** $\max(1, 2) = 2$.
    Player 1 can guarantee a payoff of at least 2 by choosing Strategy 2.

**4.2 Finding the Mini-Max for Player 2:**

*   **Column 1 maximum:** $\max(3, 2) = 3$
*   **Column 2 maximum:** $\max(1, 4) = 4$
*   **Column 3 maximum:** $\max(5, 6) = 6$

*   **Mini-max:** $\min(3, 4, 6) = 3$.
    Player 2 can ensure Player 1's payoff is at most 3 by choosing Strategy 1.

**Observation:** In this example, the maxi-min value (2) is not equal to the mini-max value (3). This indicates that there is no pure strategy saddle point in this game. The optimal strategies for both players will be mixed strategies, and the value of the game will be somewhere between 2 and 3.

---

### 5. Practice Questions

**Question 1:**
Consider the following payoff matrix for Player 1 in a two-person zero-sum game:

$$
A = \begin{pmatrix}
4 & 2 & 5 \\
1 & 3 & 0
\end{pmatrix}
$$

Calculate the maxi-min value for Player 1 and the mini-max value for Player 2. Does a pure strategy saddle point exist?

**Answer 1:**
*   **Maxi-min for Player 1:**
    *   Row 1 minimum: $\min(4, 2, 5) = 2$
    *   Row 2 minimum: $\min(1, 3, 0) = 0$
    *   Maxi-min: $\max(2, 0) = 2$.
*   **Mini-max for Player 2:**
    *   Column 1 maximum: $\max(4, 1) = 4$
    *   Column 2 maximum: $\max(2, 3) = 3$
    *   Column 3 maximum: $\max(5, 0) = 5$
    *   Mini-max: $\min(4, 3, 5) = 3$.
*   **Saddle Point:** Since maxi-min (2) $\neq$ mini-max (3), a pure strategy saddle point does not exist.

**Question 2:**
State the Minimax Theorem for two-person zero-sum games.

**Answer 2:**
The Minimax Theorem states that for any two-person zero-sum game, the maxi-min value (the maximum of the row minimums) is equal to the mini-max value (the minimum of the column maximums). This common value is the value of the game, and it exists for both pure and mixed strategies.

---

### 6. Important Points to Remember

*   **Player 1 (Row Player) is optimistic about their minimum guaranteed payoff:** They look for the best worst-case scenario ($\max(\min)$).
*   **Player 2 (Column Player) is pessimistic about Player 1's maximum gain:** They look for the worst-case scenario for Player 1, which is the best they can do ($\min(\max)$).
*   The **Minimax Theorem** is a cornerstone of game theory, guaranteeing that for zero-sum games, these two values are equal, defining the **value of the game**.
*   If $\max(\min a_{ij}) = \min(\max a_{ij})$, a **pure strategy saddle point** exists.
*   If these values are unequal, **mixed strategies** are required to find the optimal solution.
*   These theorems provide the theoretical basis for finding solutions in two-person zero-sum games, whether through analytical methods or algorithms.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |


### 7. References and Content Incorporation

The statements of the Mini-Max and Maxi-Min Theorems are fundamental results in game theory and are consistently presented in standard Operations Research and Optimization textbooks.

*   **Engineering Optimization: Theory and Practice by S.S.Rao:** This textbook will cover these foundational concepts within its game theory chapter, explaining the logic behind Player 1's maximin objective and Player 2's minimax objective.
*   **Operations Research by H.A. Taha:** Taha's widely respected text will provide rigorous statements and explanations of these theorems, likely emphasizing their role in establishing the existence of optimal strategies.
*   **Other Reference Books:** Similarly, Kanti Swarup, Kalynamoy Deb, and Ravindran et al. will all present these core theorems as essential building blocks for understanding game theory solutions. They will likely discuss how these theorems lead to the concept of equilibrium in games.

The focus of this topic is strictly on the *statement* of the theorems, as requested. The calculation examples illustrate how the maxi-min and mini-max values are derived from the payoff matrix, which is a prerequisite for understanding the implications of the theorems.

---

### 8. Alignment with Course Outcomes

*   **CO2: Apply different methods of Game Theory, Network Tree and Shortest Path.**
    This module's topic, the Mini-Max and Maxi-Min Theorems, provides the **theoretical underpinning** for applying methods to solve two-person zero-sum games. Understanding these theorems is essential before one can learn and apply algorithms like the Simplex method for game theory or graphical methods for solving $2 \times n$ or $m \times 2$ games. The theorems tell us *what* we are trying to achieve when applying these methods – finding strategies that lead to the game's value.

---
**End of Module 2: Game Theory - Mini-Max and Maxi-Min Theorems**