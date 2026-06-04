---
title: "Mixed strategies"
subject: "GAME THEORY AND MECHANISM DESIGN"
module: "Module 1: Introduction to Game Theory "
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c5b4"
status: "completed"
scrapedAt: "2026-05-20T17:06:29.219Z"
---
# GAME THEORY AND MECHANISM DESIGN - Module 1: Introduction to Game Theory

## Topic: Mixed Strategies

---

### 1. Learning Outcomes

By the end of this topic, you should be able to:

*   **Understand the concept of mixed strategies** and why they are necessary in game theory.
*   **Distinguish between pure strategies and mixed strategies**.
*   **Calculate the expected payoff** for a player using a mixed strategy.
*   **Find mixed strategy Nash Equilibria** in simple 2x2 games.
*   **Explain the Indifference Principle** and its role in finding mixed strategy Nash Equilibria.
*   **Recognize situations where pure strategy Nash Equilibria may not exist** or may not be satisfactory, necessitating mixed strategies.
*   **Understand the concept of support** of a mixed strategy.

---

### 2. Key Concepts and Definitions

#### 2.1. Pure Strategy vs. Mixed Strategy

*   **Pure Strategy:** A player chooses a single action with certainty. For example, in Rock-Paper-Scissors, playing "Rock" is a pure strategy.
*   **Mixed Strategy:** A player chooses an action randomly according to a probability distribution over their available pure strategies.
    *   For example, in Rock-Paper-Scissors, a mixed strategy could be: play Rock with probability 1/3, Paper with probability 1/3, and Scissors with probability 1/3.

#### 2.2. Why Mixed Strategies?

*   **To avoid exploitation:** If a player always plays a predictable pure strategy, their opponent can exploit this predictability to their advantage.
*   **To break ties:** In games with multiple pure strategy Nash Equilibria, mixed strategies can lead to outcomes that are better for all players.
*   **To guarantee a minimum payoff:** Mixed strategies can provide a player with a guaranteed minimum expected payoff, regardless of what the opponent does.
*   **Existence of Nash Equilibria:** For any finite game, a Nash Equilibrium (possibly in mixed strategies) is guaranteed to exist (Nash's Theorem).

#### 2.3. Expected Payoff

*   When players use mixed strategies, the outcome of the game is uncertain. Therefore, we talk about **expected payoffs**.
*   The expected payoff for a player is the weighted average of their payoffs for each possible pure strategy outcome, where the weights are the probabilities of those outcomes occurring.

    *   **For Player 1 (Row Player) with mixed strategy $\sigma_1 = (p_1, 1-p_1)$ where $p_1$ is the probability of playing Row 1 and $1-p_1$ is the probability of playing Row 2.**
    *   **For Player 2 (Column Player) with mixed strategy $\sigma_2 = (q_1, 1-q_1)$ where $q_1$ is the probability of playing Column 1 and $1-q_1$ is the probability of playing Column 2.**
    *   Let $U_1(R_i, C_j)$ be Player 1's payoff when they play Row $i$ and Player 2 plays Column $j$.

    *   **Player 1's Expected Payoff, $E_1(\sigma_1, \sigma_2)$:**
        $E_1(\sigma_1, \sigma_2) = p_1 q_1 U_1(R_1, C_1) + p_1 (1-q_1) U_1(R_1, C_2) + (1-p_1) q_1 U_1(R_2, C_1) + (1-p_1) (1-q_1) U_1(R_2, C_2)$

    *   Similarly for Player 2's expected payoff, $E_2(\sigma_1, \sigma_2)$.

#### 2.4. Indifference Principle

*   **Key Idea:** In a mixed strategy Nash Equilibrium, if a player is randomizing between two or more pure strategies, they must be indifferent between playing any of those pure strategies. This means the expected payoff from playing each of those pure strategies must be the same.
*   **Why?** If one pure strategy yielded a higher expected payoff, the player would shift all their probability to that strategy, abandoning the randomization and thus not playing a mixed strategy.

#### 2.5. Support of a Mixed Strategy

*   The **support** of a mixed strategy is the set of pure strategies that the player plays with a strictly positive probability.
*   In a mixed strategy Nash Equilibrium, a player randomizes only over the strategies that are in their support. All strategies outside the support are played with probability zero.

---

### 3. Finding Mixed Strategy Nash Equilibria (in 2x2 Games)

Consider a general 2x2 game where Player 1 (Row Player) has strategies {R1, R2} and Player 2 (Column Player) has strategies {C1, C2}.

Payoff Matrix:

|           | C1             | C2             |
| :-------- | :------------- | :------------- |
| **R1**    | $(a, e)$       | $(b, f)$       |
| **R2**    | $(c, g)$       | $(d, h)$       |

*   Player 1 plays R1 with probability $p$ and R2 with probability $1-p$.
*   Player 2 plays C1 with probability $q$ and C2 with probability $1-q$.

**Step 1: Check for Pure Strategy Nash Equilibria (PSNE)**
*   This is a necessary first step. Sometimes, the only Nash Equilibria are in pure strategies.

**Step 2: Apply the Indifference Principle to find mixed strategies**

*   **Player 1's Indifference:** Player 1 will be indifferent between playing R1 and R2 if their expected payoffs from each are equal, given Player 2's mixed strategy $(q, 1-q)$.

    *   Expected payoff for Player 1 from R1: $E_1(\text{R1}, \sigma_2) = q \cdot a + (1-q) \cdot b$
    *   Expected payoff for Player 1 from R2: $E_1(\text{R2}, \sigma_2) = q \cdot c + (1-q) \cdot d$

    *   Set them equal: $q \cdot a + (1-q) \cdot b = q \cdot c + (1-q) \cdot d$
    *   Solve for $q$:
        $qa + b - qb = qc + d - qd$
        $q(a - b - c + d) = d - b$
        $q = \frac{d - b}{(a - b) - (c - d)} = \frac{d - b}{a - b - c + d}$

    *   **Important:** For this to be a valid mixed strategy for Player 2, we need $0 < q < 1$.

*   **Player 2's Indifference:** Player 2 will be indifferent between playing C1 and C2 if their expected payoffs from each are equal, given Player 1's mixed strategy $(p, 1-p)$.

    *   Expected payoff for Player 2 from C1: $E_2(\sigma_1, \text{C1}) = p \cdot e + (1-p) \cdot g$
    *   Expected payoff for Player 2 from C2: $E_2(\sigma_1, \text{C2}) = p \cdot f + (1-p) \cdot h$

    *   Set them equal: $p \cdot e + (1-p) \cdot g = p \cdot f + (1-p) \cdot h$
    *   Solve for $p$:
        $pe + g - pg = pf + h - ph$
        $p(e - g - f + h) = h - g$
        $p = \frac{h - g}{(e - g) - (f - h)} = \frac{h - g}{e - g - f + h}$

    *   **Important:** For this to be a valid mixed strategy for Player 1, we need $0 < p < 1$.

**Step 3: Verify the Mixed Strategy Nash Equilibrium (MSNE)**
*   A pair of mixed strategies $(\sigma_1^*, \sigma_2^*)$ is a Nash Equilibrium if:
    *   $\sigma_1^*$ is a best response to $\sigma_2^*$.
    *   $\sigma_2^*$ is a best response to $\sigma_1^*$.
*   In the context of the indifference principle, if we find $p^*$ and $q^*$ such that $0 < p^* < 1$ and $0 < q^* < 1$, and these probabilities make the *other* player indifferent, then we have found a MSNE.

---

### 4. Examples

#### Example 1: Matching Pennies

|           | Heads (q)    | Tails (1-q)  |
| :-------- | :----------- | :----------- |
| **Heads (p)** | (1, -1)      | (-1, 1)      |
| **Tails (1-p)**| (-1, 1)      | (1, -1)      |

*   **Pure Strategy Nash Equilibria:** None. If Player 1 plays Heads, Player 2 wants to play Tails. If Player 1 plays Tails, Player 2 wants to play Heads. If Player 2 plays Heads, Player 1 wants to play Heads. If Player 2 plays Tails, Player 1 wants to play Tails. No combination is stable.

*   **Mixed Strategy Nash Equilibrium:**
    *   **Player 1's Indifference (solve for q):**
        $q(1) + (1-q)(-1) = q(-1) + (1-q)(1)$
        $q - 1 + q = -q + 1 - q$
        $2q - 1 = 1 - 2q$
        $4q = 2$
        $q = 1/2$

    *   **Player 2's Indifference (solve for p):**
        $p(-1) + (1-p)(1) = p(1) + (1-p)(-1)$
        $-p + 1 - p = p - 1 + p$
        $1 - 2p = 2p - 1$
        $2 = 4p$
        $p = 1/2$

    *   **MSNE:** Player 1 plays Heads with probability 1/2 and Tails with probability 1/2. Player 2 plays Heads with probability 1/2 and Tails with probability 1/2.
    *   **Expected Payoff:**
        $E_1 = (1/2)(1/2)(1) + (1/2)(1/2)(-1) + (1/2)(1/2)(-1) + (1/2)(1/2)(1) = 1/4 - 1/4 - 1/4 + 1/4 = 0$
        $E_2 = (1/2)(1/2)(-1) + (1/2)(1/2)(1) + (1/2)(1/2)(1) + (1/2)(1/2)(-1) = -1/4 + 1/4 + 1/4 - 1/4 = 0$
        Both players get an expected payoff of 0.

#### Example 2: Battle of the Sexes (with a slight modification for MSNE)

Let's consider a version where the exact coordination is not critical, or players are uncertain about preferences.

|           | Opera (q)    | Football (1-q)|
| :-------- | :----------- | :----------- |
| **Opera (p)** | (3, 2)       | (1, 1)       |
| **Football (1-p)**| (0, 0)       | (2, 3)       |

*   **Pure Strategy Nash Equilibria:**
    *   (Opera, Opera): (3, 2) - If P2 goes to Opera, P1 prefers Opera. If P1 goes to Opera, P2 prefers Opera. Stable.
    *   (Football, Football): (2, 3) - If P2 goes to Football, P1 prefers Football. If P1 goes to Football, P2 prefers Football. Stable.

*   **Mixed Strategy Nash Equilibrium:**
    *   **Player 1's Indifference (solve for q):**
        $q(3) + (1-q)(1) = q(0) + (1-q)(2)$
        $3q + 1 - q = 0 + 2 - 2q$
        $2q + 1 = 2 - 2q$
        $4q = 1$
        $q = 1/4$

    *   **Player 2's Indifference (solve for p):**
        $p(2) + (1-p)(0) = p(1) + (1-p)(3)$
        $2p = p + 3 - 3p$
        $2p = 3 - 2p$
        $4p = 3$
        $p = 3/4$

    *   **MSNE:** Player 1 plays Opera with probability 3/4 and Football with probability 1/4. Player 2 plays Opera with probability 1/4 and Football with probability 3/4.
    *   **Expected Payoff:**
        $E_1 = (3/4)(1/4)(3) + (3/4)(3/4)(1) + (1/4)(1/4)(0) + (1/4)(3/4)(2) = 9/16 + 3/16 + 0 + 6/16 = 18/16 = 9/8$
        $E_2 = (3/4)(1/4)(2) + (3/4)(3/4)(1) + (1/4)(1/4)(0) + (1/4)(3/4)(3) = 6/16 + 3/16 + 0 + 9/16 = 18/16 = 9/8$
        Both players get an expected payoff of 9/8.

#### Example 3: When a strategy might be played with probability 0 or 1 (i.e. PSNE)

Consider the Prisoner's Dilemma:

|           | Cooperate (q) | Defect (1-q) |
| :-------- | :------------ | :----------- |
| **Cooperate (p)** | (3, 3)        | (0, 5)       |
| **Defect (1-p)** | (5, 0)        | (1, 1)       |

*   **Pure Strategy Nash Equilibrium:** (Defect, Defect) is the unique PSNE.
*   **Mixed Strategy Calculation (for illustration):**
    *   **Player 1's Indifference (solve for q):**
        $q(3) + (1-q)(0) = q(5) + (1-q)(1)$
        $3q = 5q + 1 - q$
        $3q = 4q + 1$
        $-q = 1 \implies q = -1$. This is not a valid probability.

    *   **Player 2's Indifference (solve for p):**
        $p(3) + (1-p)(5) = p(0) + (1-p)(1)$
        $3p + 5 - 5p = 1 - p$
        $5 - 2p = 1 - p$
        $4 = p$. This is also not a valid probability.

*   **Conclusion:** The calculation for indifference yields probabilities outside the [0, 1] range. This indicates that there is no mixed strategy where both players randomize with strictly positive probability over both their strategies. In games like Prisoner's Dilemma, the only Nash Equilibrium is in pure strategies.

---

### 5. Practice Questions

**Question 1:**
What is the difference between a pure strategy and a mixed strategy in game theory?

**Question 2:**
In the game of Matching Pennies, if Player 1 plays Heads with probability $p=0.6$ and Tails with probability $1-p=0.4$, what is Player 2's best response?

|           | Heads (q)    | Tails (1-q)  |
| :-------- | :----------- | :----------- |
| **Heads (p)** | (1, -1)      | (-1, 1)      |
| **Tails (1-p)**| (-1, 1)      | (1, -1)      |

**Question 3:**
Consider the following 2x2 game:

|           | C1 (q)       | C2 (1-q)     |
| :-------- | :----------- | :----------- |
| **R1 (p)** | (4, 2)       | (0, 0)       |
| **R2 (1-p)**| (0, 0)       | (2, 4)       |

Find the mixed strategy Nash Equilibrium for this game.

**Question 4:**
Explain the Indifference Principle in your own words. Why is it crucial for finding mixed strategy Nash Equilibria?

---

### 6. Answers to Practice Questions

**Answer 1:**
A pure strategy involves selecting a single action with certainty. A mixed strategy involves selecting actions randomly according to a probability distribution over the available pure strategies. Mixed strategies are used to avoid predictability and to find equilibria where pure strategies do not exist or are not optimal.

**Answer 2:**
Let's calculate Player 2's expected payoffs for playing Heads and Tails, given Player 1's strategy ($p=0.6$).

*   Expected payoff for Player 2 playing Heads: $E_2(\sigma_1, \text{Heads}) = p \cdot (-1) + (1-p) \cdot (1) = 0.6 \cdot (-1) + 0.4 \cdot (1) = -0.6 + 0.4 = -0.2$
*   Expected payoff for Player 2 playing Tails: $E_2(\sigma_1, \text{Tails}) = p \cdot (1) + (1-p) \cdot (-1) = 0.6 \cdot (1) + 0.4 \cdot (-1) = 0.6 - 0.4 = 0.2$

Since $0.2 > -0.2$, Player 2's best response is to play **Tails** with probability 1 (i.e., a pure strategy).

**Answer 3:**
This is a coordination game.
*   **Check for PSNE:**
    *   (R1, C1) -> (4, 2). If P2 plays C1, P1 prefers R1 (4>0). If P1 plays R1, P2 prefers C1 (2>0). So (R1, C1) is a PSNE.
    *   (R2, C2) -> (2, 4). If P2 plays C2, P1 prefers R2 (2>0). If P1 plays R2, P2 prefers C2 (4>0). So (R2, C2) is a PSNE.

*   **Find MSNE using Indifference Principle:**
    *   **Player 1's Indifference (solve for q):**
        $q \cdot 4 + (1-q) \cdot 0 = q \cdot 0 + (1-q) \cdot 2$
        $4q = 2(1-q)$
        $4q = 2 - 2q$
        $6q = 2 \implies q = 1/3$

    *   **Player 2's Indifference (solve for p):**
        $p \cdot 2 + (1-p) \cdot 0 = p \cdot 0 + (1-p) \cdot 4$
        $2p = 4(1-p)$
        $2p = 4 - 4p$
        $6p = 4 \implies p = 2/3$

    *   **MSNE:** Player 1 plays R1 with probability $p=2/3$ and R2 with probability $1-p=1/3$. Player 2 plays C1 with probability $q=1/3$ and C2 with probability $1-q=2/3$.
    *   This game has three Nash Equilibria: (R1, C1), (R2, C2), and the mixed strategy equilibrium.

**Answer 4:**
The Indifference Principle states that in a mixed strategy Nash Equilibrium, if a player is randomizing between two or more pure strategies, then they must be indifferent between playing each of those pure strategies. This means the expected payoff from playing each of these strategies must be equal, given the opponent's mixed strategy. It's crucial because it provides the mathematical condition that allows us to solve for the probabilities in the opponent's mixed strategy that would induce this indifference. Without this principle, we wouldn't have a systematic way to find the mixed strategy probabilities.

---

### 7. Important Points to Remember

*   **Mixed strategies involve probabilities.** Outcomes are uncertain.
*   **Expected Payoff** is the key metric when dealing with mixed strategies.
*   The **Indifference Principle** is the primary tool for calculating mixed strategy Nash Equilibria. A player randomizes only if all strategies in their support yield the same expected payoff.
*   For a mixed strategy equilibrium $(p^*, q^*)$ to exist, the calculated probabilities $p^*$ and $q^*$ must be strictly between 0 and 1. If a calculation results in a probability of 0 or 1, it implies that the equilibrium is in pure strategies for that player, or the assumption of mixed strategies for both players is incorrect.
*   **Nash's Theorem guarantees existence** of Nash Equilibria, which can be in pure or mixed strategies.
*   In 2x2 games, there can be zero, one, or multiple Nash Equilibria (including pure and mixed).
*   The **support** of a mixed strategy is the set of pure strategies played with non-zero probability. In MSNE, players randomize over their support.
