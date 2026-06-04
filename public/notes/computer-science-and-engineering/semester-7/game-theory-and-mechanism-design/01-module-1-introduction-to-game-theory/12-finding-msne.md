---
title: "finding MSNE"
subject: "GAME THEORY AND MECHANISM DESIGN"
module: "Module 1: Introduction to Game Theory "
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c5b6"
status: "completed"
scrapedAt: "2026-05-20T17:06:30.564Z"
---
# GAME THEORY AND MECHANISM DESIGN: Module 1 - Introduction to Game Theory

## Topic: Finding Mixed Strategy Nash Equilibria (MSNE)

This module introduces the fundamental concepts of game theory, focusing on how to identify and analyze Mixed Strategy Nash Equilibria (MSNE) in strategic-form games.

---

### Learning Outcomes:

By the end of this topic, you will be able to:

*   Understand the concept of a mixed strategy.
*   Define a mixed strategy Nash Equilibrium (MSNE).
*   Identify the conditions for a player to play a mixed strategy in equilibrium.
*   Apply the indifference principle to calculate mixed strategies.
*   Calculate MSNE for simple 2x2 games.
*   Understand the limitations of pure strategies and the necessity of mixed strategies.

---

### 1. Key Concepts and Definitions

#### 1.1 Pure Strategy vs. Mixed Strategy

*   **Pure Strategy:** A player chooses a single, specific action with certainty.
    *   *Example:* In Rock-Paper-Scissors, playing "Rock" every time.
*   **Mixed Strategy:** A player assigns probabilities to each of their available pure strategies and chooses an action randomly according to these probabilities.
    *   *Notation:* A mixed strategy for player $i$ can be represented by a probability distribution over their pure strategies $S_i = \{s_{i1}, s_{i2}, ..., s_{in}\}$. If player $i$ has $n$ pure strategies, their mixed strategy is denoted by a vector $\sigma_i = (p_{i1}, p_{i2}, ..., p_{in})$, where $p_{ij} \ge 0$ for all $j$, and $\sum_{j=1}^n p_{ij} = 1$. $p_{ij}$ is the probability player $i$ plays pure strategy $s_{ij}$.

#### 1.2 Nash Equilibrium (NE)

*   **Definition:** A Nash Equilibrium is a profile of strategies (one strategy for each player) such that no player can unilaterally improve their expected payoff by changing their strategy, assuming the other players' strategies remain unchanged.

#### 1.3 Mixed Strategy Nash Equilibrium (MSNE)

*   **Definition:** A Mixed Strategy Nash Equilibrium (MSNE) is a profile of mixed strategies such that each player's mixed strategy is a best response to the other players' mixed strategies. In an MSNE, no player can improve their expected payoff by changing their own mixed strategy, given the mixed strategies of the other players.

#### 1.4 The Indifference Principle

*   **Core Idea:** In an MSNE, if a player is playing a mixed strategy that involves randomizing between two or more pure strategies, then that player must be **indifferent** between playing any of those pure strategies. This means the expected payoff from playing each of those pure strategies must be equal, given the other players' mixed strategies.
*   **Why it works:** If a player strictly preferred one pure strategy over another (and both were in their support – i.e., played with positive probability), they would shift all their probability to the preferred strategy to maximize their payoff. This would contradict the assumption that they are playing a mixed strategy.

---

### 2. Conditions for a Player to Play a Mixed Strategy in Equilibrium

A player will play a mixed strategy (i.e., assign positive probability to multiple pure strategies) in a Nash Equilibrium **if and only if** they are indifferent between playing those pure strategies that are assigned positive probability.

*   **If a player plays a pure strategy with probability 1:** That pure strategy must yield an expected payoff at least as high as any other pure strategy, given the opponents' strategies.
*   **If a player plays a mixed strategy with probabilities $p_1, p_2, ..., p_n > 0$ for strategies $s_1, s_2, ..., s_n$:** Then the expected payoff from playing $s_1$ must be equal to the expected payoff from playing $s_2$, ..., and equal to the expected payoff from playing $s_n$, given the opponents' strategies.

---

### 3. Calculating MSNE for 2x2 Games

Consider a 2x2 game with two players, Player 1 and Player 2.
Player 1 has pure strategies {Up (U), Down (D)}.
Player 2 has pure strategies {Left (L), Right (R)}.

The payoff matrix is given by:

|           | Left (L)          | Right (R)         |
| :-------- | :---------------- | :---------------- |
| **Up (U)** | $(a, w)$          | $(b, x)$          |
| **Down (D)** | $(c, y)$          | $(d, z)$          |

Where $(p_1, p_2)$ are payoffs for Player 1 and $(p'_1, p'_2)$ are payoffs for Player 2.

Let Player 1 play U with probability $p$ and D with probability $1-p$.
Let Player 2 play L with probability $q$ and R with probability $1-q$.

#### 3.1 Finding Player 1's Mixed Strategy (Determining $p$)

For Player 1 to be willing to mix between U and D, Player 1 must be indifferent between playing U and D, given Player 2's mixed strategy $(q, 1-q)$.

*   **Expected Payoff for Player 1 playing U:**
    $E_1(U, (q, 1-q)) = q \cdot a + (1-q) \cdot b$

*   **Expected Payoff for Player 1 playing D:**
    $E_1(D, (q, 1-q)) = q \cdot c + (1-q) \cdot d$

**Indifference Condition:** $E_1(U, (q, 1-q)) = E_1(D, (q, 1-q))$

$q \cdot a + (1-q) \cdot b = q \cdot c + (1-q) \cdot d$

Now, solve for $q$:
$qa + b - qb = qc + d - qd$
$qa - qb - qc + qd = d - b$
$q(a - b - c + d) = d - b$

If $(a - b - c + d) \neq 0$:
$q = \frac{d - b}{(a - b - c + d)}$

*   **Important Note:** For $q$ to be a valid probability ($0 < q < 1$), the numerator and denominator must have the same sign, and the absolute value of the numerator must be less than the absolute value of the denominator. If $q=0$ or $q=1$, it implies Player 2 would prefer a pure strategy.

#### 3.2 Finding Player 2's Mixed Strategy (Determining $q$)

For Player 2 to be willing to mix between L and R, Player 2 must be indifferent between playing L and R, given Player 1's mixed strategy $(p, 1-p)$.

*   **Expected Payoff for Player 2 playing L:**
    $E_2((p, 1-p), L) = p \cdot w + (1-p) \cdot y$

*   **Expected Payoff for Player 2 playing R:**
    $E_2((p, 1-p), R) = p \cdot x + (1-p) \cdot z$

**Indifference Condition:** $E_2((p, 1-p), L) = E_2((p, 1-p), R)$

$p \cdot w + (1-p) \cdot y = p \cdot x + (1-p) \cdot z$

Now, solve for $p$:
$pw + y - py = px + z - pz$
$pw - py - px + pz = z - y$
$p(w - y - x + z) = z - y$

If $(w - y - x + z) \neq 0$:
$p = \frac{z - y}{(w - y - x + z)}$

*   **Important Note:** Similar to $q$, for $p$ to be a valid probability ($0 < p < 1$), the numerator and denominator must have the same sign, and the absolute value of the numerator must be less than the absolute value of the denominator.

#### 3.3 A MSNE Exists If...

A strictly mixed strategy Nash Equilibrium (where $0 < p < 1$ and $0 < q < 1$) exists if and only if there is no pure strategy Nash Equilibrium where both players are playing a pure strategy that is not strictly dominated. Even if pure strategy NE exist, a mixed strategy NE can also exist.

---

### 4. Examples

#### Example 1: Matching Pennies

A classic example where no pure strategy Nash Equilibrium exists.

|           | Heads (H)         | Tails (T)         |
| :-------- | :---------------- | :---------------- |
| **Heads (H)** | $(+1, -1)$        | $(-1, +1)$        |
| **Tails (T)** | $(-1, +1)$        | $(+1, -1)$        |

Let Player 1 play H with probability $p$, T with $1-p$.
Let Player 2 play H with probability $q$, T with $1-q$.

**Player 1's Indifference:**
$E_1(H, (q, 1-q)) = q(+1) + (1-q)(-1) = q - 1 + q = 2q - 1$
$E_1(T, (q, 1-q)) = q(-1) + (1-q)(+1) = -q + 1 - q = 1 - 2q$

Set them equal:
$2q - 1 = 1 - 2q$
$4q = 2$
$q = 1/2$

**Player 2's Indifference:**
$E_2((p, 1-p), H) = p(-1) + (1-p)(+1) = -p + 1 - p = 1 - 2p$
$E_2((p, 1-p), T) = p(+1) + (1-p)(-1) = p - 1 + p = 2p - 1$

Set them equal:
$1 - 2p = 2p - 1$
$2 = 4p$
$p = 1/2$

**MSNE:** Player 1 plays H with probability 0.5 and T with probability 0.5. Player 2 plays H with probability 0.5 and T with probability 0.5.

#### Example 2: A Game with Both Pure and Mixed Strategy NE

Consider the game of Chicken:

|           | Swerve (S)        | Straight (St)     |
| :-------- | :---------------- | :---------------- |
| **Swerve (S)** | $(0, 0)$          | $(-1, +1)$        |
| **Straight (St)** | $(+1, -1)$        | $(-10, -10)$      |

**1. Find Pure Strategy Nash Equilibria (PSNE):**

*   If P2 plays S: P1 prefers St (+1 > 0).
*   If P2 plays St: P1 prefers S (-1 > -10).
*   If P1 plays S: P2 prefers St (+1 > 0).
*   If P1 plays St: P2 prefers S (-1 > -10).

Let's check the cells:
*   (S, S): P1 can improve by playing St (0 -> 1). Not NE.
*   (S, St): P1 plays S, P2 plays St. P1's payoff is -1. If P1 switches to St, payoff is -10 (worse). P2's payoff is +1. If P2 switches to S, payoff is 0 (worse). **This is a PSNE.**
*   (St, S): P1 plays St, P2 plays S. P1's payoff is +1. If P1 switches to S, payoff is 0 (worse). P2's payoff is -1. If P2 switches to St, payoff is -10 (worse). **This is a PSNE.**
*   (St, St): P1 can improve by playing S (-10 -> -1). Not NE.

So, there are two PSNE: (S, St) and (St, S).

**2. Find Mixed Strategy Nash Equilibrium (MSNE):**

Let Player 1 play S with probability $p$, St with $1-p$.
Let Player 2 play S with probability $q$, St with $1-q$.

**Player 1's Indifference (to mix S and St):**
$E_1(S, (q, 1-q)) = q(0) + (1-q)(-1) = -1 + q$
$E_1(St, (q, 1-q)) = q(1) + (1-q)(-10) = q - 10 + 10q = 11q - 10$

Set them equal:
$-1 + q = 11q - 10$
$9 = 10q$
$q = 9/10$

This means Player 2 plays S with probability 0.9 and St with probability 0.1.

**Player 2's Indifference (to mix S and St):**
$E_2((p, 1-p), S) = p(0) + (1-p)(-1) = -1 + p$
$E_2((p, 1-p), St) = p(1) + (1-p)(-10) = p - 10 + 10p = 11p - 10$

Set them equal:
$-1 + p = 11p - 10$
$9 = 10p$
$p = 9/10$

This means Player 1 plays S with probability 0.9 and St with probability 0.1.

**MSNE:** Player 1 plays (S=0.9, St=0.1), Player 2 plays (S=0.9, St=0.1).

*   **Observation:** In this game, all three types of Nash Equilibria (two pure, one mixed) exist.

---

### 5. Practice Questions

**Question 1:**
Consider the following game:

|           | Left (L)          | Right (R)         |
| :-------- | :---------------- | :---------------- |
| **Up (U)** | $(2, 1)$          | $(0, 0)$          |
| **Down (D)** | $(0, 0)$          | $(1, 2)$          |

Find the Mixed Strategy Nash Equilibrium (MSNE) for this game. What are the probabilities each player assigns to their strategies?

**Question 2:**
In the Battle of the Sexes game, two players want to coordinate their activities but have different preferences.

|           | Opera (O)         | Football (F)      |
| :-------- | :---------------- | :---------------- |
| **Opera (O)** | $(2, 1)$          | $(0, 0)$          |
| **Football (F)** | $(0, 0)$          | $(1, 2)$          |

Find the PSNE and the MSNE for this game.

**Question 3:**
If a player's expected payoff from playing pure strategy A is 5 and from playing pure strategy B is 3, given the other player's strategies, would this player play a mixed strategy involving both A and B? Explain why or why not.

---

### 6. Answers to Practice Questions

**Answer 1:**

Let Player 1 play U with probability $p$, D with $1-p$.
Let Player 2 play L with probability $q$, R with $1-q$.

**Player 1's Indifference:**
$E_1(U, (q, 1-q)) = q(2) + (1-q)(0) = 2q$
$E_1(D, (q, 1-q)) = q(0) + (1-q)(1) = 1 - q$

Set them equal:
$2q = 1 - q$
$3q = 1$
$q = 1/3$

**Player 2's Indifference:**
$E_2((p, 1-p), L) = p(1) + (1-p)(0) = p$
$E_2((p, 1-p), R) = p(0) + (1-p)(2) = 2(1 - p) = 2 - 2p$

Set them equal:
$p = 2 - 2p$
$3p = 2$
$p = 2/3$

**MSNE:** Player 1 plays U with probability 2/3 and D with probability 1/3. Player 2 plays L with probability 1/3 and R with probability 2/3.

**Answer 2:**

**PSNE:**
*   (Opera, Opera): P1 gets 2, P2 gets 1. If P1 switches to F, gets 0 (worse). If P2 switches to F, gets 0 (worse). **This is a PSNE.**
*   (Football, Football): P1 gets 1, P2 gets 2. If P1 switches to O, gets 0 (worse). If P2 switches to O, gets 0 (worse). **This is a PSNE.**
*   (Opera, Football): P1 gets 0, P2 gets 0. P1 can improve by switching to F (0 -> 1). Not NE.
*   (Football, Opera): P1 gets 0, P2 gets 0. P2 can improve by switching to F (0 -> 2). Not NE.

There are two PSNE: (Opera, Opera) and (Football, Football).

**MSNE:**
Let Player 1 play O with probability $p$, F with $1-p$.
Let Player 2 play O with probability $q$, F with $1-q$.

**Player 1's Indifference:**
$E_1(O, (q, 1-q)) = q(2) + (1-q)(0) = 2q$
$E_1(F, (q, 1-q)) = q(0) + (1-q)(1) = 1 - q$

Set them equal:
$2q = 1 - q$
$3q = 1$
$q = 1/3$

**Player 2's Indifference:**
$E_2((p, 1-p), O) = p(1) + (1-p)(0) = p$
$E_2((p, 1-p), F) = p(0) + (1-p)(2) = 2(1 - p) = 2 - 2p$

Set them equal:
$p = 2 - 2p$
$3p = 2$
$p = 2/3$

**MSNE:** Player 1 plays Opera with probability 2/3 and Football with probability 1/3. Player 2 plays Opera with probability 1/3 and Football with probability 2/3.

**Answer 3:**
No, this player would **not** play a mixed strategy involving both A and B. Since the expected payoff from strategy A (5) is strictly greater than the expected payoff from strategy B (3), the player would always prefer to play strategy A. To maximize their payoff, they would allocate all their probability to strategy A. A player only mixes between strategies if they are indifferent between them.

---

### 7. Important Points to Remember

*   **Indifference is Key:** The core idea for finding MSNE is the indifference principle. A player will only mix if they are indifferent between the pure strategies they are randomizing over.
*   **Solving for Opponent's Strategy:** To find player 1's mixed strategy, you set player 2's expected payoffs equal. To find player 2's mixed strategy, you set player 1's expected payoffs equal.
*   **Probabilities Must Be Valid:** The calculated probabilities ($p$, $q$) must be between 0 and 1 (exclusive, for a *strictly* mixed strategy). If you get a probability outside this range, it means the players would not actually mix in that way, and you might need to reconsider if a pure strategy NE exists or if the assumptions for mixing are violated.
*   **Not All Games Have MSNE:** Some games might only have pure strategy NE. Some games have both pure and mixed strategy NE.
*   **Support of the Mixed Strategy:** The set of pure strategies that a player assigns positive probability to is called the "support" of their mixed strategy. The indifference principle applies to all pure strategies within the support.

---
